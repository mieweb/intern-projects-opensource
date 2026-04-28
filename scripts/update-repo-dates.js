#!/usr/bin/env node
/**
 * update-repo-dates.js
 *
 * Fetches all public, non-archived repos from the configured GitHub orgs and:
 *   1. Updates **Last push:** dates in README.md for repos already listed.
 *   2. Auto-appends new repos to the "## Newly Added" section so nothing
 *      gets silently missed.
 *
 * Usage:
 *   GITHUB_TOKEN=ghp_xxx node scripts/update-repo-dates.js
 *
 * Requires Node.js 18+ (uses built-in fetch).
 */

'use strict';

const fs = require('fs');
const path = require('path');

// ── Configuration ─────────────────────────────────────────────────────────────

const ORGS = ['mieweb', 'BioNanomics'];
const README_PATH = path.join(__dirname, '..', 'README.md');

// Repos to silently skip entirely (forks kept for reference, org meta repos,
// this repo itself, etc.)
const IGNORE_REPOS = new Set([
  'BioNanomics/.github',
  'mieweb/opensource-internships',  // this repo
  // Old third-party forks — not intern-facing
  'mieweb/simplesamlphp',
  'mieweb/pivottable',
  'mieweb/tablesaw',
  'mieweb/redmine_omniauth_saml',
  'mieweb/devstack',
  'mieweb/packer-security-onion',
  'mieweb/TableDnD',
  'mieweb/foh-PROD',
  'mieweb/jit',
  'mieweb/libs3',
  'mieweb/nodejs-mobile-cordova',
  'mieweb/Rocket.Chat',
  'mieweb/OHIF-Viewers',
  'mieweb/jaguarjs',
  'mieweb/cordova-ios',
]);

// Repos that are forks are skipped automatically unless listed here.
const INCLUDE_FORKS = new Set([
  // e.g. 'mieweb/jaguarjs-jsdoc'  — add fork names here to include them
  'mieweb/jaguarjs-jsdoc',
  'mieweb/json-formatter-js',
  'mieweb/jquery.sumoselect',
  'mieweb/ansible-role-mongodb',
  'mieweb/ansible-role-auth-server',
  'mieweb/node-ldapjs',
]);

// Repos pushed before this date are skipped when auto-adding (they can still
// be manually added to the README and will then be date-tracked normally).
const SKIP_OLDER_THAN = '2020-01-01';

// Repos that are explicitly retired — removed from the README automatically
// and never auto-added back.  Add a repo here when it is superseded, renamed,
// or otherwise no longer useful for intern contributions.
//
// Standard for retirement:
//   • Repo is superseded by a newer version (e.g. *-old, *-legacy)
//   • Repo has been archived on GitHub (detected automatically, no need to list
//     those here)
//   • Repo has been confirmed dead with no realistic intern work left
const RETIRED_REPOS = new Set([
  'mieweb/PulseVault-old',        // superseded by mieweb/pulsevault
  'mieweb/questionnaire-builder', // superseded by a newer version
]);

// The heading used for the auto-append section.  The script will create this
// section if it doesn't exist yet.
const NEW_SECTION_HEADING = '## Newly Added';

// ── GitHub API helpers ────────────────────────────────────────────────────────

function buildHeaders(token) {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'update-repo-dates-script',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

async function fetchAllOrgRepos(org, token) {
  const repos = [];
  let page = 1;
  const headers = buildHeaders(token);

  while (true) {
    const url =
      `https://api.github.com/orgs/${org}/repos` +
      `?type=public&per_page=100&page=${page}`;

    const res = await fetch(url, { headers });

    if (res.status === 403 || res.status === 429) {
      const reset = res.headers.get('x-ratelimit-reset');
      const msg = reset
        ? `Rate limited. Resets at ${new Date(reset * 1000).toISOString()}.`
        : 'Rate limited.';
      throw new Error(`GitHub API: ${msg} Provide a GITHUB_TOKEN to increase limits.`);
    }

    if (!res.ok) {
      throw new Error(`GitHub API error ${res.status} fetching ${url}`);
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;

    repos.push(...data); // includes archived; main() separates them
    if (data.length < 100) break;
    page++;
  }

  return repos;
}

// ── README update: refresh existing dates ────────────────────────────────────

const REPO_LINK_RE = /\]\(https:\/\/github\.com\/([^/]+)\/([^)#\s]+)\)/;
const LAST_PUSH_RE = /\*\*Last push:\*\* \d{4}-\d{2}-\d{2}/;

/**
 * Walks through the README lines.  Whenever a line containing a github.com
 * repo link is found, that repo becomes "current".  The next line matching
 * **Last push:** is updated with the fresh date from the API.
 *
 * Returns { newContent, updatedCount, seenInReadme }
 */
function updateExistingDates(content, pushDates) {
  const lines = content.split('\n');
  let currentRepo = null;
  let updatedCount = 0;
  const seenInReadme = new Set();

  const newLines = lines.map(line => {
    const linkMatch = line.match(REPO_LINK_RE);
    if (linkMatch) {
      currentRepo = {
        org: linkMatch[1],
        name: linkMatch[2].replace(/\.git$/, ''),
      };
      seenInReadme.add(`${currentRepo.org}/${currentRepo.name}`);
    }

    if (currentRepo && LAST_PUSH_RE.test(line)) {
      const key = `${currentRepo.org.toLowerCase()}/${currentRepo.name.toLowerCase()}`;
      const newDate = pushDates.get(key);
      if (newDate) {
        const updated = line.replace(LAST_PUSH_RE, `**Last push:** ${newDate}`);
        if (updated !== line) {
          updatedCount++;
          currentRepo = null;
          return updated;
        }
      }
      currentRepo = null;
    }

    return line;
  });

  return {
    newContent: newLines.join('\n'),
    updatedCount,
    seenInReadme,
  };
}

// ── README update: auto-append new repos ─────────────────────────────────────

/** Generate a README entry for a repo not yet documented. */
function generateEntry(repo) {
  const date = repo.pushed_at.slice(0, 10);
  const lang = repo.language ? ` | **Language:** ${repo.language}` : '';
  const desc = repo.description
    ? repo.description.replace(/\s+/g, ' ').trim()
    : '';
  const descLine = desc
    ? `${desc} Interns can help by exploring the codebase, improving documentation, writing tests, or contributing new features.`
    : `A recently added repository. Interns can help by exploring the codebase, writing a description, adding documentation, or contributing improvements.`;

  return [
    `### [${repo.name}](${repo.html_url})`,
    `**Last push:** ${date}${lang}  `,
    descLine,
  ].join('\n');
}

/**
 * Inserts new repo entries into the "## Newly Added" section of the README.
 * Creates the section before "## Getting Started" if it doesn't exist yet.
 */
function insertNewRepos(content, newRepos) {
  if (newRepos.length === 0) return content;

  const newEntries = newRepos
    .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
    .map(generateEntry)
    .join('\n\n');

  // If the section already exists, append inside it (before the closing ---)
  const sectionRe = new RegExp(
    `(${escapeRe(NEW_SECTION_HEADING)}[\\s\\S]*?)(\\n---\\n)`,
    'm'
  );
  if (sectionRe.test(content)) {
    return content.replace(sectionRe, `$1\n${newEntries}\n$2`);
  }

  // Otherwise create the section before "## Getting Started"
  const newSection = [
    NEW_SECTION_HEADING,
    '',
    '*These repos were recently discovered and added automatically. ' +
      'Help wanted: improve the descriptions and move them to the right category!*',
    '',
    newEntries,
    '',
    '---',
    '',
  ].join('\n');

  const gettingStartedRe = /^## Getting Started$/m;
  if (gettingStartedRe.test(content)) {
    return content.replace(gettingStartedRe, `${newSection}## Getting Started`);
  }

  // Fallback: append at end
  return content + '\n\n' + newSection;
}

function escapeRe(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ── README update: remove retired/archived repos ─────────────────────────────

/**
 * Removes entries for repos in `toRetire` from the README.
 * An entry is a ### or #### heading line through the content before the next
 * heading or section separator.
 *
 * Returns { newContent, removedNames }
 */
function removeRetiredRepos(content, toRetire) {
  if (toRetire.size === 0) return { newContent: content, removedNames: [] };

  const removedNames = [];
  const lines = content.split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const m = line.match(
      /^#{3,4}\s+\[.*?\]\(https:\/\/github\.com\/([^/]+)\/([^)#\s]+)\)/
    );
    if (m) {
      const full = `${m[1]}/${m[2].replace(/\.git$/, '')}`;
      if (toRetire.has(full)) {
        removedNames.push(full);
        i++;
        // Consume all lines belonging to this entry
        while (i < lines.length) {
          if (/^#{2,4}\s/.test(lines[i]) || lines[i] === '---') break;
          i++;
        }
        // Trim trailing blank lines from output, then leave one separator
        while (out.length > 0 && out[out.length - 1] === '') out.pop();
        out.push('');
        continue;
      }
    }
    out.push(line);
    i++;
  }

  return { newContent: out.join('\n'), removedNames };
}

// ── Repo readiness gate ───────────────────────────────────────────────────────

// A README smaller than this (in bytes) is considered a placeholder.
const MIN_README_BYTES = 300;

/**
 * Returns { ready: true } if the repo is suitable for listing as an intern
 * project, or { ready: false, reason } explaining why it was skipped.
 *
 * Criteria:
 *   1. Has a README with at least MIN_README_BYTES of content.
 *   2. Has at least one open issue OR one open/merged pull request — evidence
 *      that the project is actively developed and has work to be done.
 */
async function checkRepoReadiness(repo, headers) {
  const base = `https://api.github.com/repos/${repo.full_name}`;

  // ── 1. README check ──────────────────────────────────────────────────────
  const readmeRes = await fetch(`${base}/readme`, { headers });
  if (!readmeRes.ok) {
    return { ready: false, reason: 'no README' };
  }
  const readmeData = await readmeRes.json();
  if ((readmeData.size || 0) < MIN_README_BYTES) {
    return {
      ready: false,
      reason: `README too small (${readmeData.size}B < ${MIN_README_BYTES}B)`,
    };
  }

  // ── 2. Issues check (GitHub issues endpoint includes PRs) ────────────────
  const issuesRes = await fetch(
    `${base}/issues?state=open&per_page=1`,
    { headers }
  );
  if (issuesRes.ok) {
    const issues = await issuesRes.json();
    if (Array.isArray(issues) && issues.length > 0) {
      return { ready: true, reason: '' };
    }
  }

  // ── 3. PRs check (handles repos where issues are disabled) ───────────────
  const prsRes = await fetch(
    `${base}/pulls?state=open&per_page=1`,
    { headers }
  );
  if (prsRes.ok) {
    const prs = await prsRes.json();
    if (Array.isArray(prs) && prs.length > 0) {
      return { ready: true, reason: '' };
    }
  }

  return { ready: false, reason: 'no open issues or pull requests' };
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn(
      'Warning: GITHUB_TOKEN not set. Unauthenticated requests are rate-limited to 60/hr.\n'
    );
  }

  // 1. Fetch all repos from configured orgs (including archived, split below)
  const pushDates = new Map();   // "org/repo" (lowercased) -> "YYYY-MM-DD"
  const allActiveRepos = [];     // non-archived repo objects
  const archivedOnGitHub = new Set(); // full_name of repos GitHub has archived

  for (const org of ORGS) {
    process.stdout.write(`Fetching repos for ${org}... `);
    const repos = await fetchAllOrgRepos(org, token);
    let activeCount = 0;
    for (const repo of repos) {
      const full = `${repo.owner.login}/${repo.name}`;
      if (repo.archived) {
        archivedOnGitHub.add(full);
      } else {
        pushDates.set(full.toLowerCase(), repo.pushed_at.slice(0, 10));
        allActiveRepos.push(repo);
        activeCount++;
      }
    }
    const archivedCount = repos.length - activeCount;
    console.log(
      `${activeCount} active public repos found` +
      (archivedCount > 0 ? ` (${archivedCount} archived, will be removed from README if listed)` : '') +
      '.'
    );
  }

  // 2. Read README
  if (!fs.existsSync(README_PATH)) {
    throw new Error(`README not found at ${README_PATH}`);
  }
  const originalContent = fs.readFileSync(README_PATH, 'utf8');

  // 3. Remove retired repos (explicitly retired + repos GitHub has archived)
  const toRetire = new Set([...RETIRED_REPOS, ...archivedOnGitHub]);
  const { newContent: afterRetire, removedNames } =
    removeRetiredRepos(originalContent, toRetire);
  if (removedNames.length > 0) {
    console.log(`\n  Retired ${removedNames.length} repo(s): ${removedNames.join(', ')}`);
  }

  // 4. Refresh existing last-push dates
  const { newContent: afterDates, updatedCount, seenInReadme } =
    updateExistingDates(afterRetire, pushDates);

  // 5. Determine repos that are new (not yet in README)
  const headers = buildHeaders(token);
  const candidates = allActiveRepos.filter(repo => {
    const full = `${repo.owner.login}/${repo.name}`;
    if (IGNORE_REPOS.has(full)) return false;
    if (RETIRED_REPOS.has(full)) return false; // never re-add retired repos
    if (repo.fork && !INCLUDE_FORKS.has(full)) return false;
    if (repo.pushed_at.slice(0, 10) < SKIP_OLDER_THAN) return false;
    return !seenInReadme.has(full);
  });

  // 6. Gate candidates: require a real README + at least one open issue or PR
  const toAdd = [];
  const skipped = [];
  if (candidates.length > 0) {
    process.stdout.write(`\nChecking ${candidates.length} candidate repo(s) for readiness... `);
    for (const repo of candidates) {
      const { ready, reason } = await checkRepoReadiness(repo, headers);
      if (ready) {
        toAdd.push(repo);
      } else {
        skipped.push({ repo, reason });
      }
    }
    console.log('done.');
  }

  if (skipped.length > 0) {
    console.log(`\n⚠  ${skipped.length} repo(s) skipped (not ready for intern listing):`);
    for (const { repo, reason } of skipped) {
      console.log(`  - ${repo.full_name}: ${reason}`);
    }
  }

  // 7. Insert new repos into README
  const afterInsert = insertNewRepos(afterDates, toAdd);

  // 8. Write if changed
  if (afterInsert !== originalContent) {
    fs.writeFileSync(README_PATH, afterInsert, 'utf8');
    const retireLine = removedNames.length > 0
      ? `  • ${removedNames.length} retired repo(s) removed`
      : '';
    const dateLine = updatedCount > 0
      ? `  • ${updatedCount} last-push date(s) refreshed`
      : '';
    const addLine = toAdd.length > 0
      ? `  • ${toAdd.length} new repo(s) added to "${NEW_SECTION_HEADING}"`
      : '';
    console.log(`\n✓ README.md updated:\n${[retireLine, dateLine, addLine].filter(Boolean).join('\n')}`);
    if (toAdd.length > 0) {
      for (const r of toAdd.sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))) {
        const lang = r.language ? ` [${r.language}]` : '';
        console.log(`    + ${r.full_name}${lang} (${r.pushed_at.slice(0, 10)})`);
      }
      console.log('\n  Review and move these into the right category when ready.');
    }
  } else {
    console.log('\n✓ README.md is already up to date — no changes made.');
  }
}

main().catch(err => {
  console.error('\nError:', err.message);
  process.exit(1);
});
