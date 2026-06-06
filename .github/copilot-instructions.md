## About This Repository

<!-- https://github.com/mieweb/template-mieweb-opensource/blob/main/.github/copilot-instructions.md -->

This is **[mieweb/intern-projects-opensource](https://github.com/mieweb/intern-projects-opensource)** — a curated directory of MIEWeb and BioNanomics open-source projects where interns can make meaningful contributions. The primary artifact is `README.md`, which lists repositories organized by category.

### README.md Structure

Each repository entry follows this format:

```markdown
### [repo-name](https://github.com/org/repo-name)
**Language:** TypeScript | **Last push:** YYYY-MM-DD  
One-sentence description. Interns can <specific contribution ideas>.
```

Rules for maintaining entries:
- **Language** is optional; omit the field entirely if the repo has no dominant language.
- **Last push** dates are auto-updated by `scripts/update-repo-dates.js` — do not manually change them unless correcting an error.
- Descriptions must include concrete intern contribution ideas (not just "contribute to the project").
- Within each category, entries are ordered **most to least recently active** (by last push date).
- New repos discovered by the script are auto-appended to `## Newly Added`. Manually move them to the correct category with a proper description.

### Adding or Editing a Repository Entry

1. Place the entry in the correct category section, in date order.
2. Write a one-sentence description of what the project does, followed by specific intern contribution ideas.
3. If creating a new category, add a `---` horizontal rule before and after it.
4. Do not add repos that are in the `IGNORE_REPOS` set in `scripts/update-repo-dates.js`.

### Updating Last-Push Dates

Run the date-update script whenever the listing needs refreshing:

```sh
GITHUB_TOKEN=ghp_xxx node scripts/update-repo-dates.js
```

Requires Node.js 18+ and a GitHub personal access token with `public_repo` read scope. The script:
- Updates `**Last push:**` dates for all listed repos.
- Appends newly discovered repos to `## Newly Added`.
- Skips repos in `IGNORE_REPOS` and un-listed forks not in `INCLUDE_FORKS`.

---

## Code Quality Principles

### 🎯 DRY (Don't Repeat Yourself)
- **Never duplicate code**: If you find yourself copying code, extract it into a reusable function
- **Single source of truth**: Each piece of knowledge should have one authoritative representation
- **Refactor mercilessly**: When you see duplication, eliminate it immediately
- **Shared utilities**: Common patterns should be abstracted into utility functions

### 💋 KISS (Keep It Simple, Stupid)
- **Simple solutions**: Prefer the simplest solution that works
- **Avoid over-engineering**: Don't add complexity for hypothetical future needs
- **Clear naming**: Functions and variables should be self-documenting
- **Small functions**: Break down complex functions into smaller, focused ones
- **Readable code**: Code should be obvious to understand at first glance

### 🧹 Folder Philosophy
- **Clear purpose**: Every folder should have a main thing that anchors its contents.
- **No junk drawers**: Don’t leave loose files without context or explanation.
- **Explain relationships**: If it’s not elegantly obvious how files fit together, add a README or note.
- **Immediate clarity**: Opening a folder should make its organizing principle clear at a glance.

### 🔄 Refactoring Guidelines
- **Continuous improvement**: Refactor as you work, not as a separate task
- **Safe refactoring**: Always run tests before and after refactoring
- **Incremental changes**: Make small, safe changes rather than large rewrites
- **Preserve behavior**: Refactoring should not change external behavior
- **Code reviews**: All refactoring should be reviewed for correctness

### ⚰️ Dead Code Management
- **Immediate removal**: Delete unused code immediately when identified
- **Historical preservation**: Move significant dead code to `.attic/` directory with context
- **Documentation**: Include comments explaining why code was moved to attic
- **Regular cleanup**: Review and clean attic directory periodically
- **No accumulation**: Don't let dead code accumulate in active codebase

### 🌐 Testing with MCP Browser
- Use MCP browser in Playwright if available to test functionality
- **Never close the browser** after running MCP browser commands unless explicitly asked
- Let the user interact with the browser after navigation or testing
- Only use `browser_close` when the user specifically requests it

## HTML & CSS Guidelines
- **Semantic Naming**: Every `<div>` and other structural element must use a meaningful, semantic class name that clearly indicates its purpose or role within the layout.
- **CSS Simplicity**: Styles should avoid global resets or overrides that affect unrelated components or default browser behavior. Keep changes scoped and minimal.
- **SASS-First Approach**: All styles should be written in SASS (SCSS) whenever possible. Each component should have its own dedicated SASS file to promote modularity and maintainability.

## Accessibility (ARIA Labeling)

### 🎯 Interactive Elements
- **All interactive elements** (buttons, links, forms, dialogs) must include appropriate ARIA roles and labels
- **Use ARIA attributes**: Implement aria-label, aria-labelledby, and aria-describedby to provide clear, descriptive information for screen readers
- **Semantic HTML**: Use semantic HTML wherever possible to enhance accessibility

### 📢 Dynamic Content
- **Announce updates**: Ensure all dynamic content updates (modals, alerts, notifications) are announced to assistive technologies using aria-live regions
- **Maintain tab order**: Maintain logical tab order and keyboard navigation for all features
- **Visible focus**: Provide visible focus indicators for all interactive elements

## Internationalization (I18N)

### 🌍 Text and Language Support
- **Externalize text**: All user-facing text must be externalized for translation
- **Multiple languages**: Support multiple languages, including right-to-left (RTL) languages such as Arabic and Hebrew
- **Language selector**: Provide a language selector for users to choose their preferred language

### 🕐 Localization
- **Format localization**: Ensure date, time, number, and currency formats are localized based on user settings
- **UI compatibility**: Test UI layouts for text expansion and RTL compatibility
- **Unicode support**: Use Unicode throughout to support international character sets

## Documentation Preferences

### Diagrams and Visual Documentation
- **Always use Mermaid diagrams** instead of ASCII art for workflow diagrams, architecture diagrams, and flowcharts
- **Use memorable names** instead of single letters in diagrams (e.g., `Engine`, `Auth`, `Server` instead of `A`, `B`, `C`)
- Use appropriate Mermaid diagram types:
  - `graph TB` or `graph LR` for workflow architectures 
  - `flowchart TD` for process flows
  - `sequenceDiagram` for API interactions
  - `gitgraph` for branch/release strategies
- Include styling with `classDef` for better visual hierarchy
- Add descriptive comments and emojis sparingly for clarity

### Documentation Standards
- Keep documentation DRY (Don't Repeat Yourself) - reference other docs instead of duplicating
- Use clear cross-references between related documentation files
- Update the main architecture document when workflow structure changes

## Working with GitHub Actions Workflows

### Development Philosophy
- **Script-first approach**: All workflows should call scripts that can be run locally
- **Local development parity**: Developers should be able to run the exact same commands locally as CI runs
- **Simple workflows**: GitHub Actions should be thin wrappers around scripts, not contain complex logic
- **Easy debugging**: When CI fails, developers can reproduce the issue locally by running the same script

## Quick Reference

### 🪶 All Changes should be considered for Pull Request Philosophy

* **Smallest viable change**: Always make the smallest change that fully solves the problem.
* **Fewest files first**: Start with the minimal number of files required.
* **No sweeping edits**: Broad refactors or multi-module changes must be split or proposed as new components.
* **Isolated improvements**: If a change grows complex, extract it into a new function, module, or component instead of modifying multiple areas.
* **Direct requests only**: Large refactors or architectural shifts should only occur when explicitly requested.
 
### Code Quality Checklist
- [ ] **DRY**: No code duplication - extracted reusable functions?
- [ ] **KISS**: Simplest solution that works?
- [ ] **Minimal Changes**: Smallest viable change made for PR?
- [ ] **Naming**: Self-documenting function/variable names?
- [ ] **Size**: Functions small and focused?
- [ ] **Dead Code**: Removed or archived appropriately?
- [ ] **Accessibility**: ARIA labels and semantic HTML implemented?
- [ ] **I18N**: User-facing text externalized for translation?
- [ ] **Lint**: Run linter if appropriate
- [ ] **Test**: Run tests
