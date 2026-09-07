# Introduction

Before spending time exploring individual projects, we recommend starting with the [instructions](instructions.md) to get an overview of the program structure, expectations, and how to get started. The instructions also include helpful resources for learning Git, navigating GitHub, and understanding MIEWeb's open-source ecosystem.

Pick a category that matches your interests:

- **Engineering** — [Core Tools & Platforms](#core-tools--platforms) and [Developer Tools & APIs](#developer-tools--apis)
- **Design, docs, or content** — [Documentation & Content](#documentation--content) and [Media & Video](#media--video)
- **AI** — [AI & Automation](#ai--automation)
- **Biotech & bioinformatics** — [BioNanomics](#bionanomics)

# MIE Intern Projects

Welcome to MIEWeb's open-source intern program! Below is a curated list of public repositories where interns can make meaningful contributions. Each project includes a brief description and suggested ways to get involved. Within each category, projects are ordered from most to least recently active.

---

## Before You Start: Familiarize Yourself with MIEWeb Open Source

Before diving into a project, spend some time with the MIEWeb open-source environment:

- **[os.mieweb.org](https://os.mieweb.org/)** — The MIEWeb open-source portal. Explore the tools, services, and resources available to contributors.
- **[opensource-server](https://github.com/mieweb/opensource-server)** — The source code behind `os.mieweb.org`. Understanding how the open-source server is structured will help you navigate the broader MIEWeb ecosystem.
- **[ui.mieweb.org](https://ui.mieweb.org/)** — The MIEWeb UI component library and design standards. All front-end contributions should align with these standards.

---

## Standard Contributions Across All Projects

In addition to project-specific work, interns are encouraged to apply these improvements to **any** repository they work in:

- **Branch protection** — Check whether the default branch has protection rules enabled (require PR reviews, status checks, no direct pushes). Open an issue or PR to add/fix branch protection rules if missing.
- **GitHub Actions** — Audit existing CI/CD workflows for correctness and coverage. Add missing workflows for linting, testing, and build verification where none exist.
- **UI standards compliance** — For any project with a front-end, review components against the [ui.mieweb.org](https://ui.mieweb.org/) design system. Flag or fix inconsistencies in spacing, typography, color, and component usage.
- **os.mieweb.org integration** — Check whether the project is listed or linked from [os.mieweb.org](https://os.mieweb.org/) and open a PR to the [opensource-server](https://github.com/mieweb/opensource-server) if it should be.

---

## AI & Automation

All AI-related projects are great opportunities to get involved with MIE's AI initiatives, including Ozwell.ai and other automation efforts. Interns can contribute to improving AI tooling, building new features, or enhancing documentation for these projects.  Any project you propose should include a clear path for how it could integrate with Ozwell.ai or other MIE AI systems in a meaningful way.

### [ozwellai-api](https://github.com/mieweb/ozwellai-api)
**Language:** TypeScript | **Last push:** 2026-08-27  
API specifications and schemas for Ozwell.ai. Interns can improve OpenAPI documentation, add example request/response payloads, write validation tooling, or help generate SDK code from the spec.

### [ozwell-studio](https://github.com/mieweb/ozwell-studio)
**Language:** TypeScript | **Last push:** 2026-08-21  
Ozwell Studio — an AI-powered studio application. Interns can build new features, improve the user interface, write tests, or help with integrating additional AI models or APIs.

### [melvil-artipod-footnote](https://github.com/mieweb/melvil-artipod-footnote)
**Language:** TypeScript | **Last push:** 2026-09-07  
FOOTNOTE (From Ozwell Only: Traceable Notes & Observations in Text Evidence) is a markdown-to-SQLite compiler that builds self-contained RAG indexes combining `sqlite-vec` for semantic vector search, SQLite FTS5 for BM25 full-text search (~6ms on 10K chunks), and literal search for special characters like HL7 `ADT^A04` codes. Melvil is the agentic assistant on top — it lets an LLM pick the right search strategy, reasons across multiple searches, and cites every answer with `[1]`/`[2]` references. The index ships as a single `index.sqlite` that runs server-side, at the edge, or in-browser via WASM; it also exposes an MCP server so VS Code Copilot, Claude Desktop, and Cursor can search docs directly. Interns can add new search tools to the MCP server, improve the streaming web UI, write tests for chunking and embedding edge cases, add support for non-Hugo content sources, or build a diff-based incremental rebuild reporter.


### [hey-ozwell](https://github.com/mieweb/hey-ozwell)
**Language:** Python | **Last push:** 2026-09-03  
A Python project interfacing with Ozwell. Interns can add new commands, improve documentation, write tests, or improve the UX for interacting with Ozwell's AI features.

---

## Documentation & Content

These repositories are focused on documentation, guides, and educational content for MIE's EHR. Contributing to these can be a great way to learn about the ecosystem while helping others onboard more smoothly.  You should make a WebChart EHR Demo system at https://webchartnow.com and press the "Getting Started" button.

### [docs](https://github.com/mieweb/docs)
**Language:** JavaScript | **Last push:** 2026-08-28  
WebChart and Enterprise Health documentation website. Interns can contribute by improving existing documentation pages, fixing typos and broken links, adding new how-to guides, writing tutorials based on their own onboarding experience, or improving the site's tooling and build process.

### [docs_video](https://github.com/mieweb/docs_video)
**Last push:** 2023-12-21  
Videos used for documentation. Interns can help by scripting, recording, or editing short instructional videos that accompany written documentation, or by auditing existing videos for accuracy and accessibility.


---

## Core Tools & Platforms

### [eSheet](https://github.com/mieweb/eSheet)
**Language:** TypeScript | **Last push:** 2026-09-02  
A modular form builder and renderer for React — a TypeScript-first Nx monorepo with packages for a drag-and-drop visual builder (`@esheet/builder`), a form renderer (`@esheet/renderer`), 19 built-in field components, and a headless logic/schema core. Interns can add new field types to `@esheet/fields`, improve the drag-and-drop builder UX, expand test coverage with Vitest, improve the Docusaurus documentation site, fix open issues, or build a new renderer integration (e.g. a Web Component or non-Blaze backend).

### [templit](https://github.com/mieweb/templit)
**Language:** TypeScript | **Last push:** 2026-08-23  
A TypeScript library that renders Markdown templates to HTML using a single `render()` API — with built-in support for Handlebars, Mustache, and Liquid engines selectable via YAML frontmatter, automatic frontmatter variable defaults that merge with runtime overrides, and a `marked`-powered Markdown-to-HTML pipeline. It ships as ESM + CJS with full type definitions, and includes a live Next.js + Monaco Editor playground pre-loaded with real-world examples (MSAs, Software License Agreements, HIPAA BAAs). Interns can add a new template engine (e.g. Nunjucks or EJS), improve the Monaco playground UI, expand Vitest test coverage for edge cases in frontmatter parsing and variable merging, add a CLI tool for rendering templates from the command line, or build an example integration showing templit powering a contract-generation workflow.

### [artipod](https://github.com/mieweb/artipod)
**Language:** TypeScript | **Last push:** 2026-09-07  
A TypeScript library that provides AI-aware filesystem abstraction (ArtiMounts) and isolated Docker/Podman container execution for AI agents — exposing VS Code Copilot Chat-compatible tool schemas so models can read, edit, and execute code in a sandboxed environment. Interns can add new mount-level tools, improve the web demo UI, expand test coverage with Jest, add support for additional container runtimes, or build example integrations showing how to wire artipod into an AI agent workflow.

### [yabelfish](https://github.com/mieweb/yabelfish)
**Language:** TypeScript | **Last push:** 2025-11-16  
A browser-based clinical documentation editor and Language Server Protocol (LSP) implementation for the `yabel` medical text format — a Markdown/YAML-inspired notation that lets clinicians write naturally while the LSP surfaces real-time ICD-10/SNOMED-CT/RxNorm codes, allergy conflict detection, FHIR-aligned AST diffs, and inlay hints. The Monaco editor (VS Code's core) runs the LSP entirely in a browser Web Worker — no backend required. Interns can expand medical terminology coverage (RxNorm, SNOMED-CT, CPT), build out Phase 3 (the VS Code extension or hosted WebSocket LSP server), add Kerberon test cases for medical document validation, implement new yabel modules (`yVisit`, `yImmunization`, `yOrder`), or improve the Playwright E2E tests. Related repos: [yCard](https://github.com/mieweb/yCard) (base structure for demographic entities like yPatient, yPractitioner), [kerebron](https://github.com/mieweb/kerebron) (LSP validation testing framework).

### [kerebron](https://github.com/mieweb/kerebron)
**Language:** TypeScript | **Last push:** 2026-08-26  
A Deno-based ProseMirror editor kit — a monorepo that forks and reconciles incompatible ProseMirror packages into a unified, extension-driven editor framework (inspired by Tiptap but with fewer dependencies and simpler tooling). It also includes an ODT-to-editor WASM bridge (Rust). Interns can add new ProseMirror extensions, write Deno tests for existing commands and serializers, improve the ODT import/export support, fix open issues, or build out the missing examples.

### [wikiGDrive](https://github.com/mieweb/wikiGDrive)
**Language:** TypeScript | **Last push:** 2026-08-18  
A tool that syncs a Google Shared Drive to a Markdown/Hugo wiki. Interns can tackle open issues, improve the CLI experience, write unit or integration tests, improve documentation, or add support for new Google Docs content types.

### [sqladmin](https://github.com/mieweb/sqladmin)
**Language:** JavaScript | **Last push:** 2026-02-22  
A browser-based SQL query tool. Interns can improve the UI/UX, add query history features, improve error handling and display, write tests, or add export functionality for query results.

### [duckdbgo](https://github.com/mieweb/duckdbgo)
**Language:** TypeScript | **Last push:** 2026-01-28  
A single-page DuckDB shell explorer with AG Grid running in the browser. Interns can improve the query editor experience, add data import/export features, write documentation, or explore adding visualization features on top of query results.

### [loopwatch](https://github.com/mieweb/loopwatch)
**Last push:** 2026-04-28  
A production-ready Node.js event loop watchdog (`@mieweb/loopwatch`) that uses `perf_hooks` to sample p50/p95/p99 lag and Event Loop Utilization (ELU) every second, fires a configurable `onWarning` callback when thresholds are breached consecutively, and exports Prometheus metrics (`node_event_loop_delay_p95_ms`, `node_event_loop_utilization`, etc.) plus optional OpenTelemetry span annotations — all with <1% CPU overhead and zero hard dependencies. Interns can add a `--threshold` CLI demo tool, write Jest tests that artificially block the loop to verify alert firing, add a pre-built Grafana dashboard JSON, implement load-shedding middleware for Express/Fastify as an example integration, or publish the package to npm.

### [redmine-mcp](https://github.com/mieweb/redmine-mcp)
**Language:** JavaScript | **Last push:** 2026-08-04  
An MCP (Model Context Protocol) server that exposes the Redmine REST API for AI agents. Interns can add coverage for additional Redmine API endpoints, improve error handling, write tests, or improve documentation for deploying and configuring the server.

---

## Media & Video

### [pulsevault](https://github.com/mieweb/pulsevault)
**Language:** TypeScript | **Last push:** 2026-08-06  
Storage and processing system for Pulse. Interns can improve storage integrations, add monitoring/observability, write tests, or improve documentation.

### [pulse](https://github.com/mieweb/pulse)
**Language:** TypeScript | **Last push:** 2026-09-03  
Secure institutional knowledge sharing through short-form video content. Interns can work on new features, fix UI bugs, improve the video upload/playback experience, write tests, or improve documentation.

### [pulseclip](https://github.com/mieweb/pulseclip)
**Language:** TypeScript | **Last push:** 2026-08-03  
A clip management component for Pulse. Interns can add new clip editing features, improve the UI, write tests, or help integrate with the broader Pulse ecosystem.

### [pulse-desktop](https://github.com/mieweb/pulse-desktop)
**Language:** Rust | **Last push:** 2026-04-06  
Pulse Cam — a desktop application for capturing video. Interns with interest in Rust can contribute UI improvements, fix bugs, improve build documentation, or add cross-platform packaging support.

---

## Time & Scheduling

### [timehuddle](https://github.com/mieweb/timehuddle)
**Language:** TypeScript | **Last push:** 2026-09-06  
A time/scheduling collaboration tool. Interns can add new scheduling features, improve the UI, write tests, or improve documentation.

### [timeharbor-app](https://github.com/mieweb/timeharbor-app)
**Language:** TypeScript | **Last push:** 2026-04-10  
The TimeHarbor time-tracking application. Interns can improve the time-entry UI, add reporting features, write unit and integration tests, or improve documentation.

### [timeharbor-old](https://github.com/mieweb/timeharbor-old)
**Language:** JavaScript | **Last push:** 2026-03-05  
The original TimeHarbor codebase. Interns can explore the legacy code to understand the original architecture and help document differences compared to the newer implementation, or extract reusable logic.

---

## Healthcare Standards & Interoperability

### [FHIRTogether](https://github.com/mieweb/FHIRTogether)
**Language:** TypeScript | **Last push:** 2026-08-04  
A FHIR-based scheduling synapse system to ease scheduling between healthcare organizations. Interns can help implement additional FHIR resource types, write integration tests, improve API documentation, or add example client code.

### [em2021](https://github.com/mieweb/em2021)
**Language:** HTML | **Last push:** 2026-04-06  
An E&M (Evaluation and Management) calculator implementing 2021 coding rules. Interns can improve the UI, add explanations for each rule, fix calculation edge cases, or make the tool mobile-friendly.

### [clinical\_note\_benchmark](https://github.com/mieweb/clinical_note_benchmark)
**Language:** Python | **Last push:** 2026-04-28  
A benchmark suite for evaluating how well LLMs convert doctor–patient dialogue transcripts into structured clinical notes (SOAP format). It tracks accuracy across models using ROUGE, BERTScore, BLEURT, and fact-level hallucination/omission metrics — designed to be re-run whenever a major model change occurs (e.g. GPT-4 → GPT-5, or switching to a local Ollama model). Interns can add new LLMs to the benchmark, integrate additional datasets (MTS-Dialog, CliniKnote, PMC-Patients), implement automated hallucination detection, improve the evaluation harness, or write a results dashboard to visualize model comparisons over time.

### [webchart-interface-examples](https://github.com/mieweb/webchart-interface-examples)
**Language:** Python | **Last push:** 2025-02-05  
Python scripts that demonstrate how to POST data into a WebChart system via the MIE REST API — currently includes a document-upload example that reads a CSV of patient IDs and file paths, authenticates as a WebChart user, and bulk-uploads documents (PDFs, CCR XMLs, etc.) into the correct patient charts. The best way to try these is against the free demo system at [webchartnow.com](https://webchartnow.com) — spin up a demo, grab your credentials, and run `upload.py` against it. Interns can add new interface examples (HL7 message posting, patient demographics import, order entry), convert the scripts to use the [`mieapi-js`](https://github.com/mieweb/mieapi-js) client as a comparison, write pytest tests that run against the demo system, or improve error handling and retry logic for network failures.


### [FHIR_CapStatViewer](https://github.com/mieweb/FHIR_CapStatViewer)
**Language:** JavaScript | **Last push:** 2026-03-03  
A pure browser-based tool for loading any FHIR R4 `metadata` endpoint (WebChart, HAPI, Epic, etc.) and rendering the raw CapabilityStatement JSON into a tabbed human-readable UI — tabs for Resources, Interactions, Operations, Search Parameters, Security, and raw JSON. It handles CORS by auto-falling back through a Python proxy and two third-party proxies. Try it against the WebChart FHIR R4 sandbox at `https://fhirr4sandbox.webch.art/webchart.cgi/fhir/metadata`. Open issues tagged `good first issue` include: deploying a live demo on os.mieweb.org (#1), recording a video demo (#2), and setting up GitHub Actions to screenshot the UI on each PR (#3). Interns can also add side-by-side CapabilityStatement diff/comparison, add an authenticated Bearer-token mode via the Python proxy, improve accessibility (keyboard nav, ARIA), or add export to CSV/Markdown.


### CCDA Validator Repositories

These repositories are related to the C-CDA (Consolidated Clinical Document Architecture) validator, a tool used to validate C-CDA documents against the standard. Interns can contribute by improving documentation, updating dependencies, adding new test cases, or helping maintain the validator's infrastructure.

#### [vagrant-ccda-validator](https://github.com/mieweb/vagrant-ccda-validator)
**Language:** Shell | **Last push:** 2025-06-20  
Vagrant-based setup for the C-CDA validator. Interns can update box configurations, improve documentation, or migrate the setup to Docker Compose to complement the Docker version.

#### [docker-ccda-validator](https://github.com/mieweb/docker-ccda-validator)
**Language:** Shell | **Last push:** 2022-01-06  
Dockerized version of the reference C-CDA validator. Interns can update the base image versions, improve the setup documentation, add CI/CD workflows, or create scripts to automate testing with sample C-CDA documents.

### [froo2](https://github.com/mieweb/froo2)
**Language:** HTML | **Last push:** 2024-09-06  
FroozHIE 2.0 — a zero-dependency, browser-based C-CDA viewer for physicians and healthcare workers. Drop `index.html` in any browser, paste or load a C-CDA XML document, and `CDA.xsl` (an XSLT stylesheet) transforms it into a human-readable clinical summary. It also includes a `validate_ui.html` page that posts C-CDA documents to the public [CCDA validator](https://github.com/mieweb/vagrant-ccda-validator) and displays structured results. The UI is currently built with legacy Less/SCSS; a natural first project is **rewriting the UI using [ui.mieweb.org](https://ui.mieweb.org/) components** to bring it in line with MIEWeb's modern design system. Interns can also add support for newer C-CDA document types (Care Plan, Referral Note), improve the XSLT rendering for edge-case sections, set up GitHub Actions CI to validate sample C-CDA files on every PR, or add a side-by-side diff view for comparing two CDA documents.

---

## Data Visualization

### [datavis](https://github.com/mieweb/datavis)
**Language:** TypeScript | **Last push:** 2026-09-03  
**DataVis NITRO** — a React 19 + `@mieweb/ui` + Tailwind CSS 4 front-end library built on top of the [wcdatavis](https://github.com/mieweb/wcdatavis) data engine. It provides a full-featured `DataGrid` component with flat, grouped, and pivot table renderers; a drag-and-drop `ControlPanel` for building group/pivot/aggregate operations (8 aggregate functions: sum, avg, count, counta, countu, min, max, list); per-column filter widgets for strings, numbers, dates, and booleans; 6 modal dialogs (column config, template editor, perspective manager, debug inspector, and more); a `PrefsToolbar` for saving/restoring named perspectives; and i18n support in 10 locales. See the [live demo](https://mieweb.github.io/datavis/) and [Storybook](https://verbose-disco-y7k1zoq.pages.github.io/storybook/). The rewrite is actively in progress — Phase 5 (Chart.js graph shell) is the next open milestone. Interns can implement the graph phase, add Playwright E2E tests for grouped/pivot modes, add new column types or aggregate functions, improve accessibility (ARIA, keyboard nav), expand i18n locale coverage, or port the remaining legacy UI patterns to `@mieweb/ui` components (tracked in `mieweb-ui-migration.md`).

### [wcdatavis](https://github.com/mieweb/wcdatavis)
**Language:** JavaScript | **Last push:** 2026-07-02  
**DataVis ACE** — the battle-tested vanilla JS data-processing engine that powers DataVis across all of WebChart (v3.2.4, 15 releases). Its core objects — `Source` (HTTP/CSV/JSON/in-page data), `ComputedView` (filtering, grouping, pivoting, aggregation), `Grid` (interactive table), `Graph` (Chart.js charts), `Prefs`/`Perspective` (named view configurations) — are consumed by [datavis](https://github.com/mieweb/datavis) (the React NITRO layer) and embedded directly in WebChart EHR. The engine handles automatic type detection for dates, currency, and large integers; supports custom type handlers and aggregate functions; and has Mocha + Selenium test suites and a Zensical-built manual. Interns can add new `Source` adapter types, fix open issues (5 open, 28 open PRs), write additional Mocha unit tests for `ComputedView` edge cases, improve the Selenium test coverage, or add a new built-in aggregate or grouping function.

### [ychart](https://github.com/mieweb/ychart)
**Language:** TypeScript | **Last push:** 2026-05-28  
`@mieweb/ychart` — a full interactive org chart editor published on npm (v1.1.0, 7 releases) with a [live playground](https://orgchart.opensource.mieweb.org/) and [docs site](https://orgchart.opensource.mieweb.org/docs). It wraps [d3-org-chart](https://github.com/bumbeishvili/org-chart) with a CodeMirror YAML editor that live-previews the chart as you type. Data is defined as a flat YAML list (`id`/`parentId` fields); YAML front matter controls layout options (nodeWidth, nodeHeight, margins) and a typed schema for data validation. Key features: dual view modes (hierarchical tree ↔ force-directed graph), Person of Interest (POI) mode that focuses on one person's chain of command with collapsible sibling levels, automatic supervisor-name-to-parentId resolution, draggable nodes with localStorage position persistence, SVG/PNG export, and a fluent `YChartEditor` programmatic API (`editor.self(...).template(...).bgPatternStyle(...)`). The UI uses `@mieweb/ui` components with multi-brand theming via CSS variables. There is an open PRD for migrating to a monorepo with `@mieweb/ui` (tracked in `PRD-MONOREPO-MIGRATION.md`). Interns can implement the monorepo migration, add a React wrapper component with proper hooks, add more node card templates, expand Playwright E2E test coverage, implement undo/redo for YAML edits, or add a search/filter bar that highlights matching nodes.

### [ychart-xyflow](https://github.com/mieweb/ychart-xyflow)
**Language:** TypeScript | **Last push:** 2026-06-29  
An early-stage pnpm monorepo scaffold exploring [xyflow (React Flow)](https://xyflow.com/) as an alternative rendering engine for ychart — specifically for use cases where the force-directed/editable-graph layout matters more than the compact hierarchical tree. The monorepo has an `apps/playground` demo app and a `packages/` directory ready for the component library. This is a greenfield project — interns can build out the first real node/edge types, connect it to the same YAML-over-front-matter data format as `@mieweb/ychart`, wire in `@mieweb/ui` theming, add POI filtering, or write the initial Playwright test suite.

### [jaguarjs-jsdoc](https://github.com/mieweb/jaguarjs-jsdoc)
**Language:** JavaScript | **Last push:** 2026-03-04  
A fork of the JSDoc template used by DataVis. Interns can improve the template's styling, add dark mode support, update dependencies, or add new documentation features.

### [json-formatter-js](https://github.com/mieweb/json-formatter-js)
**Language:** TypeScript | **Last push:** 2026-03-03  
A fork of the JSON object explorer used by DataVis. Interns can improve performance for large JSON payloads, add search/filter capabilities, improve theming support, or write tests.

### [jquery.sumoselect](https://github.com/mieweb/jquery.sumoselect)
**Language:** JavaScript | **Last push:** 2026-03-02  
A fork of a multi-select dropdown used by DataVis. Interns can improve accessibility (ARIA), add keyboard navigation, update the codebase away from jQuery, or write automated tests.

---

## Developer Tools & APIs

### [mieapi-js](https://github.com/mieweb/mieapi-js)
**Language:** JavaScript | **Last push:** 2025-11-16  
A JavaScript REST API client for WebChart and Enterprise Health. Interns can add TypeScript types, write unit tests, improve error handling, document additional endpoints, or create usage examples.

### [indexedcp](https://github.com/mieweb/indexedcp)
**Language:** JavaScript | **Last push:** 2026-06-12  
An RPM for IndexedDB-backed buffered uploads. Interns can improve documentation, add tests for upload edge cases, or improve the retry and error-handling logic.

### [a3t](https://github.com/mieweb/a3t)
**Language:** JavaScript | **Last push:** 2025-07-17  
An asset and preference loader for Node.js. Interns can add TypeScript types, improve configuration options, write unit tests, or improve documentation.

### [mie-api-tools](https://github.com/mieweb/mie-api-tools)
**Language:** JavaScript | **Last push:** 2024-10-31  
JS tools that demonstrate use of the MIE API. Interns can add new example tools, improve existing ones, add documentation, or convert examples to TypeScript with proper types.


### [launchpad](https://github.com/mieweb/launchpad)
**Last push:** 2026-08-12  
A GitHub Action that uses MIE's open-source cluster to manage LXC containers derived from GitHub repository sources. Interns can improve the action's documentation, add new configuration options, improve error messaging, or write tests.

### [wcexport](https://github.com/mieweb/wcexport)
**Language:** Python | **Last push:** 2026-08-12  
A WebChart data export utility. Interns can add support for additional export formats, improve CLI documentation, add tests, or improve error messaging.

### [herbie](https://github.com/mieweb/herbie)
**Language:** JavaScript | **Last push:** 2025-06-24  
A set of tools for developing behavior-based scripts for testing. Interns can add new test helpers, improve documentation, write example test suites, or fix issues with existing behavior scripts.

### [iframe-sync](https://github.com/mieweb/iframe-sync)
**Language:** JavaScript | **Last push:** 2025-03-21  
Simple state synchronization between related iFrames. Interns can improve the API design, add TypeScript definitions, write unit tests, or improve documentation with real-world usage examples.

### [mieapi-meteor](https://github.com/mieweb/mieapi-meteor)
**Language:** JavaScript | **Last push:** 2024-10-25  
A MeteorJS API package for WebChart and EnterpriseHealth. Interns can improve documentation, update dependencies, write tests, or create example Meteor applications that use the API.

### [vision](https://github.com/mieweb/vision)
**Language:** Python | **Last push:** 2017-04-10  
A DSL that allows Selenium tests to be written in plain English. Interns can add new DSL keywords, improve the parser, write tests for the DSL itself, or build example test suites that demonstrate real-world usage.

### [WikiGDriveTest](https://github.com/mieweb/WikiGDriveTest)
**Last push:** 2023-09-07  
A test repository for the wikiGDrive tool. Interns can add test documents, validate sync behavior between Google Drive and the wiki, and help document edge cases and limitations discovered during testing.


---

## UI & Frontend Components

### [ui](https://github.com/mieweb/ui)
**Language:** TypeScript | **Last push:** 2026-09-05  
MIEWeb's shared UI component library. Interns can add new components, write Storybook stories, improve accessibility, add unit/snapshot tests, or improve component documentation.

### [news-widget](https://github.com/mieweb/news-widget)
**Language:** TypeScript | **Last push:** 2026-05-23  
A news display widget component. Interns can improve the widget's visual design, add configuration options, write tests, or improve documentation.

### [multitimer-vue](https://github.com/mieweb/multitimer-vue)
**Language:** Vue | **Last push:** 2026-06-29  
A Vue version of the multitimer application, built for better maintainability, readability, and extensibility. Interns can add new timer features, improve the UI, write Vitest unit tests, or improve the documentation.

### [miewebui-root](https://github.com/mieweb/miewebui-root)
**Last push:** 2026-04-01  
Monorepo root for the `@mieweb/ui` ecosystem — a pnpm workspace hosting the MIE React component library and feature module packages. Interns can improve the monorepo tooling, add package documentation, or help migrate components from older code into the new library.

### [cordova-plugin-diagnostics-viewer](https://github.com/mieweb/cordova-plugin-diagnostics-viewer)
**Language:** JavaScript | **Last push:** 2025-09-30  
A lightweight, in-app diagnostics viewer for Cordova mobile apps. Interns can improve the UI, add new diagnostic panels (network, storage, logs), write tests, or improve documentation.

---

## Infrastructure & DevOps

### [sharedactions](https://github.com/mieweb/sharedactions)
**Language:** Ruby | **Last push:** 2026-04-27  
Reusable GitHub Actions for mobile CI/CD (iOS signing and build, Android). Interns can add new reusable actions, improve existing ones, write tests, improve documentation, or add support for additional mobile platforms.

### [opensource-server](https://github.com/mieweb/opensource-server)
**Language:** JavaScript | **Last push:** 2026-09-06  
The MIEWeb open-source server configuration and setup. Interns can improve provisioning scripts, add documentation, write tests for configuration steps, or update dependencies.

### [template-mieweb-opensource](https://github.com/mieweb/template-mieweb-opensource)
**Language:** Shell | **Last push:** 2026-08-19  
A template for new MIEWeb open-source repositories. Interns can improve the template's documentation, add additional boilerplate (CI/CD workflows, issue templates, contributing guides), or keep the template up to date with current MIEWeb standards.

### [pown.sh](https://github.com/mieweb/pown.sh)
**Language:** Shell | **Last push:** 2026-02-03  
A script to take over a Linux server and integrate it with an LDAP server. Interns can improve documentation, add safety checks, write tests for the script's behavior, or improve error handling and logging.

### [benchmark-data](https://github.com/mieweb/benchmark-data)
**Last push:** 2025-09-23  
Benchmark datasets for performance testing. Interns can add new benchmark datasets, improve documentation describing each dataset's structure, or write scripts to generate synthetic test data.

### [ansible-role-auth-server](https://github.com/mieweb/ansible-role-auth-server)
**Language:** Jinja | **Last push:** 2025-09-15  
An Ansible role for an authentication server. Interns can add new configuration options, write Molecule tests, improve documentation, or add support for additional Linux distributions.

### [ansible-role-mongodb](https://github.com/mieweb/ansible-role-mongodb)
**Language:** Jinja | **Last push:** 2025-08-11  
An Ansible role for MongoDB. Interns can add support for newer MongoDB versions, improve variable documentation, write Molecule tests, or improve compatibility with additional Linux distributions.

### [iforgotpv](https://github.com/mieweb/iforgotpv)
**Language:** Shell | **Last push:** 2024-08-18  
A shell utility related to password/PV recovery. Interns can improve documentation, add safety checks, or improve the script's error handling.

### [GeniSys](https://github.com/mieweb/GeniSys)
**Language:** Shell | **Last push:** 2023-09-05  
Automated system creation, control, benchmark, and monitoring. Interns can add new benchmark scenarios, improve documentation, add reporting for benchmark results, or improve the setup scripts.

### [linuxtest](https://github.com/mieweb/linuxtest)
**Language:** Shell | **Last push:** 2021-02-19  
A small Linux system for simple testing. Interns can add new test scenarios, improve documentation, or help automate the setup with CI/CD pipelines.

### [ceph-vagrant](https://github.com/mieweb/ceph-vagrant)
**Last push:** 2018-01-11  
A Vagrant setup for Ceph storage clusters. Interns can update the configuration to newer Ceph versions, improve documentation, or add automation scripts for common Ceph cluster operations.

### [vagrantbox](https://github.com/mieweb/vagrantbox)
**Last push:** 2018-01-11  
Open-source Vagrant boxes. Interns can add new box configurations, update existing boxes to newer OS versions, improve documentation, or automate box builds with CI/CD.

---

## Security & Authentication

### [poc-auth-architecture](https://github.com/mieweb/poc-auth-architecture)
**Language:** JavaScript | **Last push:** 2026-03-30  
A proof-of-concept monorepo demonstrating multiple authentication patterns using a shared OIDC server. Interns can add new auth pattern examples, improve documentation, write integration tests, or improve the setup experience.

### [webchart-oauth-example](https://github.com/mieweb/webchart-oauth-example)
**Language:** JavaScript | **Last push:** 2026-01-23  
An example showing OAuth2 token usage with WebChart. Interns can improve the example with more detailed comments, add error handling, extend it to cover additional OAuth flows, or add a step-by-step setup guide.

### [mieweb_auth_app](https://github.com/mieweb/mieweb_auth_app)
**Language:** JavaScript | **Last push:** 2026-09-07  
A Meteor/Cordova application for push notification-based authentication. Interns can improve the push notification handling, update dependencies, improve the UI, write tests, or improve documentation.

### [LDAPServer](https://github.com/mieweb/LDAPServer)
**Language:** JavaScript | **Last push:** 2026-04-08  
An LDAP gateway server using ldapjs that connects to a database to manage and authenticate users. Interns can improve documentation, add support for additional LDAP operations, write integration tests, or improve error handling.

### [node-ldapjs](https://github.com/mieweb/node-ldapjs)
**Language:** JavaScript | **Last push:** 2025-12-03  
MIEWeb's actively maintained fork of the ldapjs LDAP client/server library for Node.js — the upstream project was decommissioned in 2024, so this fork is the version keeping MIEWeb's `LDAPServer` and other tooling running. Interns can backport useful upstream fixes, improve async handling, add or expand tests, improve documentation, or help evaluate a longer-term migration path.

### [hfaxjs](https://github.com/mieweb/hfaxjs)
**Language:** JavaScript | **Last push:** 2026-02-11  
A Hylafax+ gateway for Node.js. Interns can add support for additional fax operations, improve error handling, write tests, or improve documentation.

---

## Networking & Systems

### [cping](https://github.com/mieweb/cping)
**Language:** C | **Last push:** 2025-05-18  
A cooler version of ping with a `-F` millisecond threshold option. Interns can add new filtering options, improve the output formatting, write tests, improve build documentation, or port it to additional platforms.

### [meet](https://github.com/mieweb/meet)
**Language:** JavaScript | **Last push:** 2024-11-18  
A Cloudflare Worker that powers `meet.mieweb.org/username` personal meeting links. Interns can add new features (custom landing pages, calendar integrations), improve documentation, write tests, or improve error handling.

---

## Challenges & Learning

### [mie-edi-challenge](https://github.com/mieweb/mie-edi-challenge)
**Last push:** 2024-11-21  
A challenge for new EDI hires. Interns can help by improving the challenge documentation, adding new EDI test cases, or creating a walkthrough guide for common EDI formats used in healthcare.

### [mie-dev-challenge](https://github.com/mieweb/mie-dev-challenge)
**Language:** JavaScript | **Last push:** 2023-12-12  
The MIE Developer Challenge — a coding exercise for prospective hires. Interns can improve the challenge's instructions, add new challenge variations, improve the test harness, or document common solution patterns.

---

## Misc & Experimental

### [yCard](https://github.com/mieweb/yCard)
**Language:** TypeScript | **Last push:** 2025-11-16  
An internationalized YAML-inspired format for human-readable person/organization records — a superset of vCard/iCard and x500 LDAP. It also serves as the base demographic structure (`yPatient`, `yPractitioner`, `yOrganization`) for the broader [yabelfish](https://github.com/mieweb/yabelfish) clinical documentation ecosystem. Interns can add new field types, improve parsing and serialization, write tests, improve documentation with real-world examples, or align the schema more tightly with FHIR Patient/Practitioner resources.

### [HelloApp](https://github.com/mieweb/HelloApp)
**Last push:** 2025-08-16  
A Meteor template with actions to publish an app. Interns can improve the template, update it to the latest Meteor version, add documentation, or extend it with CI/CD workflows for publishing.

### [rankroom](https://github.com/mieweb/rankroom)
**Language:** JavaScript | **Last push:** 2025-06-09  
RankRoom — a tool for building team consensus through ranked voting. Interns can add new voting modes, improve the real-time collaboration experience, write tests, or improve documentation.

### [plopper](https://github.com/mieweb/plopper)
**Language:** Python | **Last push:** 2021-09-15  
A tool to write a uniform distribution of files to disk for testing and benchmarking. Interns can add new distribution patterns, improve the CLI, write tests, or add documentation with benchmarking examples.

---

## BioNanomics

[BioNanomics](https://bionanomics.com/) is Indiana's first non-profit dedicated to biorobotics — a bio-makerspace where student interns and independent scientists perform synthetic biology research and develop automation for the wet lab. BioNanomics also operates **[The Refinery](https://bionanomics.com/projects#the-refinery)**, a community workshop and practice space that supports local FIRST Robotics Competition (FRC) teams. MIE is a proud collaborator and many MIEWeb interns have the opportunity to contribute to both the lab software and the robotics side.

### Lab & Automation Projects

#### [benchmate](https://github.com/BioNanomics/benchmate)
**Language:** TypeScript | **Last push:** 2026-04-28  
An AI-powered lab protocol management system built with Next.js and Fastify that lets scientists create, manage, and execute protocols — with a roadmap toward voice-first and AI-assisted workflows. Interns can implement Phase 4 voice input and AI protocol parsing (the next planned milestone), build the Phase 5 real-time execution dashboard, add device integration webhooks, write tests for the Fastify API, or improve the shared TypeScript types package.

#### [ConvergentDecidua](https://github.com/BioNanomics/ConvergentDecidua)
**Language:** Python | **Last push:** 2026-06-01  
A lab research project at BioNanomics. Interns can help by writing data analysis scripts, improving documentation, adding unit tests, building automation pipelines for lab instruments, or contributing visualizations that help interpret experimental results.

### Proposed Lab Automation Projects

> **These projects are in the planning stage — no repositories exist yet.** The goal is to build open-source tools that turn BioNanomics instruments into programmable, observable systems and ultimately help researchers understand how cells communicate, differentiate, and self-organize into tissues. If any of these ideas excite you, reach out to start a conversation and help shape the direction.

The central mission: **build cellular debuggers** — tools that let researchers set "breakpoints" on biological processes, inspect cell state across time and space, and decode the molecular language cells use to coordinate tissue formation.

---

#### ConfocalOrchestrator
**Hardware:** N-SPARC Confocal Microscope | **Skills:** Python, serial/USB hardware APIs, image processing (OpenCV, scikit-image)  
An automated acquisition pipeline for the N-SPARC confocal. Contributers can build stage control scripts, schedule multi-position z-stack runs overnight, manage fluorescence channel sequences, stitch tiles into OME-TIFF volumes, and stream previews to a web dashboard. The end goal is a protocol-driven confocal that runs unattended and delivers analysis-ready image stacks.

#### SEM-Scout
**Hardware:** Scanning Electron Microscope | **Skills:** Python, image analysis, instrument API/serial communication  
Automate the tedious "find and shoot" loop on the SEM. A low-magnification survey scan identifies regions of interest using computer vision (edge detection, texture classification), then the system navigates to each target, captures high-resolution images, and packages results with metadata. Contributers can work on the CV pipeline, instrument control layer, or the results browser UI.

#### HaplyMicro
**Hardware:** Haply haptic device + 6DOF robot arm | **Skills:** C++/Python, ROS2, real-time control, haptics  
Map the Haply haptic controller to the 6DOF robot arm for force-feedback micromanipulation — micro-injections, embryo handling, patch-clamp electrode positioning. The haptic device scales operator forces so fine movements feel natural while the arm executes with sub-millimeter precision. Contributers can work on the kinematics layer, the force-scaling model, safety interlocks, or a ROS2 action server interface.

#### RoboCulture
**Hardware:** 6DOF robot arm + liquid handling system | **Skills:** Python, ROS2, protocol scheduling, lab automation  
Fully automate cell culture maintenance — scheduled media changes, reagent additions, sampling, and waste disposal — all orchestrated by a protocol scheduler and logged to a structured audit trail. Contributers can build the protocol DSL, the robot motion planner, the scheduling engine, or the monitoring dashboard that shows what the arm did and when.

#### FluidScript
**Hardware:** Automated liquid handling system | **Skills:** TypeScript/Python, DSL design, hardware drivers  
A declarative protocol language (YAML/JSON) for describing liquid handling workflows: aspirate, dispense, mix, dilute, serial dilute. Protocols compile to instrument-specific command sequences for common handlers (Opentrons OT-2, Hamilton, or custom systems). Contributers can design the schema, write the compiler, build a visual protocol editor, or add hardware back-end drivers.

#### EmbryoWatch
**Hardware:** N-SPARC Confocal + motorized stage | **Skills:** Python, PyTorch/scikit-image, time-series analysis, cell tracking  
An automated time-lapse platform for *C. elegans* embryo development. Multi-position imaging captures every division from single cell to comma stage. A tracking pipeline follows each cell nucleus across frames, builds a lineage tree, and flags deviations from the canonical Sulston lineage. Contributers can work on acquisition control, the nucleus segmentation model, lineage tree visualization, or the anomaly detector.

#### GallTracer
**Hardware:** N-SPARC Confocal + brightfield microscope | **Skills:** Python, scikit-image, machine learning, time-series analysis  
A time-lapse imaging and analysis pipeline for plant gall formation — tracking how host cells are reprogrammed by a parasite or pathogen to form a new tissue structure. The system segments individual cells across frames, measures morphological changes (area, aspect ratio, fluorescence intensity), and builds a spatiotemporal map of the transformation. Contributers can build the segmentation pipeline, the cell tracker, the morphology feature extractor, or the visualization layer.

#### CellDebugger
**Skills:** TypeScript/React, D3.js, Python (backend), image overlay rendering  
A unified "debugger" UI for cell state — the core tool for the cellular debugging mission. Researchers load a time-lapse dataset and can: inspect any cell at any timepoint (morphology, marker levels, neighbors), set "watchpoints" on marker thresholds, step forward/backward through developmental time, and compare cells that chose different fates. Think Chrome DevTools, but for a tissue. Contributers can build the timeline scrubber, the cell inspector panel, the spatial neighborhood graph, or the Python data ingestion pipeline.

#### CellLex
**Skills:** Python, graph neural networks, statistical modeling, bioinformatics  
A computational tool for decoding intercellular signaling "vocabulary" — the patterns of molecular signals that precede and cause differentiation events. CellLex ingests spatiotemporal imaging data (fluorescence channels, cell positions, neighbor relationships over time) and applies sequence and graph models to identify recurring signal motifs that predict fate decisions. Contributers can work on the spatiotemporal feature engineering, the motif discovery algorithm, the visualization of learned signal grammars, or benchmarking against published C. elegans and plant datasets.

#### TissueSim
**Skills:** Python/Julia, agent-based modeling, PDE solvers, parameter fitting, scientific visualization  
A computational digital twin of tissue morphogenesis — an agent-based or reaction-diffusion model of cell signaling and mechanical forces calibrated against experimental time-lapse data. Researchers propose a signaling hypothesis, run it in simulation, compare predicted cell behavior to observed behavior, and iterate. Contributers can build the simulation core, the parameter fitting pipeline (Bayesian or gradient-based), the comparison metrics between simulation and experiment, or the web-based simulation viewer.

---

[![][image1]](https://www.instagram.com/the_refinery_bybnx/)  
[https://www.instagram.com/the\_refinery\_bybnx/](https://www.instagram.com/the_refinery_bybnx/)

[image1]: assets/bnx-refinery.png


The Refinery's Instagram is the best place to see what's happening day-to-day — robot builds, competition days, student milestones, and lab activity. Before you dive into the code, take a few minutes to scroll through [@the_refinery_bybnx](https://www.instagram.com/the_refinery_bybnx/) to understand the community and the students your contributions will directly support.

### FRC (FIRST Robotics Competition) Projects

BioNanomics houses and supports multiple FRC teams through The Refinery. Interns with an interest in robotics, control systems, or JavaScript tooling can make real contributions here — code runs on competition robots and in the pit at tournaments.

#### [refinery-forcefield](https://github.com/BioNanomics/refinery-forcefield)
**Language:** JavaScript | **Last push:** 2026-03-16  
A force field engine for FRC swerve drive robots — provides wall repulsion, snap-to zones, and a visual editor for field configuration. Interns can add new force field zone types, improve the visual editor UI, write tests for the physics engine, improve documentation, or port the tool to work with additional FRC field layouts.

#### [refinery-roborio-mcp](https://github.com/BioNanomics/refinery-roborio-mcp)
**Language:** Java | **Last push:** 2026-03-19  
An MCP (Model Context Protocol) server for the FRC RoboRIO controller, enabling AI-assisted robot development and diagnostics. Interns can add new MCP endpoints exposing robot telemetry, improve documentation, write integration tests, or build example prompts that demonstrate AI-assisted FRC development workflows.

#### Fun - Self-balancing-vehicle

[https://github.com/LuckyYoon/autonomous-self-balancing-vehicle](https://github.com/LuckyYoon/autonomous-self-balancing-vehicle)   
A modular, open-source robotic platform designed for the study and development of [two-wheeled single-tracked](https://www.instagram.com/reel/DYR-HMRB_nY/?igsh=MXJnemhpa2kxbWZxOQ==) autonomous vehicles.

#### [10434-Northrop-Cybears](https://github.com/BioNanomics/10434-Northrop-Cybears)
**Language:** Java | **Last push:** 2026-03-08  
The robot code repository for FRC Team 10434, the Northrop Cybears. Interns can help implement new subsystems, improve autonomous routines, add unit tests using WPILib's simulation framework, improve code documentation, or help onboard new student members with contributing guides.

#### [FMS](https://github.com/BioNanomics/FMS)
**Last push:** 2025-09-25  
Docs and configuration files for the Building 21 Field Management System (FMS) — the infrastructure used to run practice matches at The Refinery. Interns can improve setup documentation, add troubleshooting guides, automate configuration deployment, or help document the network topology for new volunteers setting up the field.

### BioNanomics Org Infrastructure

#### [template-bnx](https://github.com/BioNanomics/template-bnx)
**Last push:** 2025-09-22  
The BioNanomics repository template. Interns can improve the default README structure, add standard CI/CD workflows, add issue and PR templates, or align it with MIEWeb's `template-mieweb-opensource` conventions.


---
## Newly Added

*These repos were recently discovered and added automatically. Help wanted: improve the descriptions and move them to the right category!*

### [v0-case-mgmt-9-3-2006](https://github.com/mieweb/v0-case-mgmt-9-3-2006)
**Last push:** 2026-08-14 | **Language:** TypeScript  
A recently added repository. Interns can help by exploring the codebase, writing a description, adding documentation, or contributing improvements.

### [actions](https://github.com/mieweb/actions)
**Last push:** 2026-08-11 | **Language:** Ruby  
Reusable GitHub Actions for mobile CI/CD (iOS signing + build, Android) Interns can help by exploring the codebase, improving documentation, writing tests, or contributing new features.

### [F3iducial](https://github.com/BioNanomics/F3iducial)
**Last push:** 2026-05-17  
FIRST Field Fiducial — Open-source field calibration, localization, and verification tooling for FRC and FTC. Interns can help by exploring the codebase, improving documentation, writing tests, or contributing new features.

### [chat-component](https://github.com/mieweb/chat-component)
**Last push:** 2026-09-03 | **Language:** JavaScript  
A recently added repository. Interns can help by exploring the codebase, writing a description, adding documentation, or contributing improvements.

### [cordova-plugin-googleplus](https://github.com/mieweb/cordova-plugin-googleplus)
**Last push:** 2026-06-04 | **Language:** Java  
Cordova Google Sign-In plugin (mieweb fork) modernized for GoogleSignIn 8.x / play-services-auth 21.x Interns can help by exploring the codebase, improving documentation, writing tests, or contributing new features.

### [jerry](https://github.com/mieweb/jerry)
**Last push:** 2026-08-14 | **Language:** Shell  
A recently added repository. Interns can help by exploring the codebase, writing a description, adding documentation, or contributing improvements.

### [edEditIt](https://github.com/mieweb/edEditIt)
**Last push:** 2026-09-03 | **Language:** Shell  
VSCode extension for Markdown Editing and can be extened to support Yablefish Interns can help by exploring the codebase, improving documentation, writing tests, or contributing new features.

### [cloud](https://github.com/mieweb/cloud)
**Last push:** 2026-09-06 | **Language:** JavaScript  
Cloudflare-first portability layer (@mieweb/cloud): database, object storage, key/value, queues, durable objects, vector, AI. Other runtimes implement the same contract. Interns can help by exploring the codebase, improving documentation, writing tests, or contributing new features.

### [ozwell-manager](https://github.com/mieweb/ozwell-manager)
**Last push:** 2026-08-27 | **Language:** TypeScript  
A recently added repository. Interns can help by exploring the codebase, writing a description, adding documentation, or contributing improvements.

### [ozwell-studio-launcher](https://github.com/mieweb/ozwell-studio-launcher)
**Last push:** 2026-09-02 | **Language:** JavaScript  
A recently added repository. Interns can help by exploring the codebase, writing a description, adding documentation, or contributing improvements.

### [pulse-orig](https://github.com/mieweb/pulse-orig)
**Last push:** 2026-09-07 | **Language:** TypeScript  
Secure institutional knowledge sharing through short-form video content. Interns can help by exploring the codebase, improving documentation, writing tests, or contributing new features.

### [yorm](https://github.com/mieweb/yorm)
**Last push:** 2026-08-25 | **Language:** TypeScript  
YORM: Yjs Object-Relational Mapper Interns can help by exploring the codebase, improving documentation, writing tests, or contributing new features.

### [touchcell](https://github.com/BioNanomics/touchcell)
**Last push:** 2026-08-02  
A recently added repository. Interns can help by exploring the codebase, writing a description, adding documentation, or contributing improvements.

### [redmine-mcp-proxy](https://github.com/mieweb/redmine-mcp-proxy)
**Last push:** 2026-09-03 | **Language:** JavaScript  
A recently added repository. Interns can help by exploring the codebase, writing a description, adding documentation, or contributing improvements.

### [remote-serial-pico](https://github.com/BioNanomics/remote-serial-pico)
**Last push:** 2026-09-04 | **Language:** JavaScript  
Access remote serial devices connected to Pico with Pi Interns can help by exploring the codebase, improving documentation, writing tests, or contributing new features.

### [chimeraDB](https://github.com/mieweb/chimeraDB)
**Last push:** 2026-09-02 | **Language:** C++  
A recently added repository. Interns can help by exploring the codebase, writing a description, adding documentation, or contributing improvements.

### [REFINERY-site](https://github.com/BioNanomics/REFINERY-site)
**Last push:** 2026-09-04 | **Language:** Astro  
The public site for The REFINERY, a nonprofit robotics makerspace affiliated with BioNanomics. Interns can help by exploring the codebase, improving documentation, writing tests, or contributing new features.

---
## Getting Started

1. **Explore [os.mieweb.org](https://os.mieweb.org/)** — familiarize yourself with the MIEWeb open-source portal and its [source code](https://github.com/mieweb/opensource-server).
2. **Review [ui.mieweb.org](https://ui.mieweb.org/)** — understand the UI component standards before touching any front-end code.
3. **Pick a project** that matches your skills or interests.
4. **Read the README** in that repository to understand the project.
5. **Run the standard audit** — check branch protection rules, GitHub Actions coverage, and UI standards compliance (see above).
6. **Browse open issues** — look for issues tagged `good first issue` or `help wanted`.
7. **Fork the repo**, make your changes on a branch, and open a Pull Request.
8. Ask questions! The MIEWeb team is here to help you succeed.

We're excited to have you contribute!
