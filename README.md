# MIEWeb Intern Projects

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

## Documentation & Content

### [docs](https://github.com/mieweb/docs)
**Language:** JavaScript | **Last push:** 2026-04-24  
WebChart and Enterprise Health documentation website. Interns can contribute by improving existing documentation pages, fixing typos and broken links, adding new how-to guides, writing tutorials based on their own onboarding experience, or improving the site's tooling and build process.

### [docs_video](https://github.com/mieweb/docs_video)
**Last push:** 2023-12-21  
Videos used for documentation. Interns can help by scripting, recording, or editing short instructional videos that accompany written documentation, or by auditing existing videos for accuracy and accessibility.

### [WikiGDriveTest](https://github.com/mieweb/WikiGDriveTest)
**Last push:** 2023-09-07  
A test repository for the wikiGDrive tool. Interns can add test documents, validate sync behavior between Google Drive and the wiki, and help document edge cases and limitations discovered during testing.

---

## Core Tools & Platforms

### [eSheet](https://github.com/mieweb/eSheet)
**Language:** TypeScript | **Last push:** 2026-04-27  
A spreadsheet/sheet-style component. Interns can add new cell types, improve keyboard navigation and accessibility, write tests, fix edge-case bugs, or improve performance for large datasets.

### [redmine-mcp](https://github.com/mieweb/redmine-mcp)
**Language:** JavaScript | **Last push:** 2026-04-24  
An MCP (Model Context Protocol) server that exposes the Redmine REST API for AI agents. Interns can add coverage for additional Redmine API endpoints, improve error handling, write tests, or improve documentation for deploying and configuring the server.

### [templit](https://github.com/mieweb/templit)
**Language:** TypeScript | **Last push:** 2026-04-24  
A template rendering package. Interns can add new template features, write unit tests, improve documentation, or build example integrations with popular frameworks.

### [artipod](https://github.com/mieweb/artipod)
**Language:** TypeScript | **Last push:** 2026-04-17  
Artipod Artifact Studio — a tool for managing artifacts at scale. Interns can help by adding features, improving the UI, writing tests, or creating documentation and usage examples.

### [melvil-artipod-footnote](https://github.com/mieweb/melvil-artipod-footnote)
**Language:** TypeScript | **Last push:** 2026-04-16  
A footnote extension for Artipod/Melvil. Interns can help by writing tests, fixing edge cases in footnote parsing and rendering, or improving documentation.

### [launchpad](https://github.com/mieweb/launchpad)
**Last push:** 2026-04-10  
A GitHub Action that uses MIE's open-source cluster to manage LXC containers derived from GitHub repository sources. Interns can improve the action's documentation, add new configuration options, improve error messaging, or write tests.

### [wikiGDrive](https://github.com/mieweb/wikiGDrive)
**Language:** TypeScript | **Last push:** 2026-03-26  
A tool that syncs a Google Shared Drive to a Markdown/Hugo wiki. Interns can tackle open issues, improve the CLI experience, write unit or integration tests, improve documentation, or add support for new Google Docs content types.

### [sqladmin](https://github.com/mieweb/sqladmin)
**Language:** JavaScript | **Last push:** 2026-02-22  
A browser-based SQL query tool. Interns can improve the UI/UX, add query history features, improve error handling and display, write tests, or add export functionality for query results.

### [duckdbgo](https://github.com/mieweb/duckdbgo)
**Language:** TypeScript | **Last push:** 2026-01-28  
A single-page DuckDB shell explorer with AG Grid running in the browser. Interns can improve the query editor experience, add data import/export features, write documentation, or explore adding visualization features on top of query results.

### [loopwatch](https://github.com/mieweb/loopwatch)
**Last push:** 2025-12-15  
A reusable Node.js event loop watchdog library. Interns can improve documentation, add configuration options, write tests covering edge cases, or build example integrations showing how to use the watchdog in real applications.

---

## Healthcare Standards & Interoperability

### [FHIRTogether](https://github.com/mieweb/FHIRTogether)
**Language:** TypeScript | **Last push:** 2026-04-27  
A FHIR-based scheduling synapse system to ease scheduling between healthcare organizations. Interns can help implement additional FHIR resource types, write integration tests, improve API documentation, or add example client code.

### [em2021](https://github.com/mieweb/em2021)
**Language:** HTML | **Last push:** 2026-04-06  
An E&M (Evaluation and Management) calculator implementing 2021 coding rules. Interns can improve the UI, add explanations for each rule, fix calculation edge cases, or make the tool mobile-friendly.

### [FHIR_CapStatViewer](https://github.com/mieweb/FHIR_CapStatViewer)
**Language:** JavaScript | **Last push:** 2026-03-03  
A viewer for FHIR CapabilityStatement resources. Interns can improve the UI for browsing capability statements, add support for comparing two capability statements, fix bugs, or improve accessibility.

### [rass-api](https://github.com/mieweb/rass-api)
**Language:** TypeScript | **Last push:** 2026-02-03  
Reference specification for the RASS (Remote Access Security Standards) Server API. Interns can help by writing additional OpenAPI spec documentation, creating example client code, or building tooling to validate conformance.

### [vagrant-ccda-validator](https://github.com/mieweb/vagrant-ccda-validator)
**Language:** Shell | **Last push:** 2025-06-20  
Vagrant-based setup for the C-CDA validator. Interns can update box configurations, improve documentation, or migrate the setup to Docker Compose to complement the Docker version.

### [webchart-interface-examples](https://github.com/mieweb/webchart-interface-examples)
**Language:** Python | **Last push:** 2025-02-05  
Example tools and scripts for posting data to WebChart. Interns can add new interface examples, improve existing scripts, add error handling, write documentation, or create tests to verify the examples work correctly.

### [froo2](https://github.com/mieweb/froo2)
**Language:** HTML | **Last push:** 2024-09-06  
FroozHIE 2.0 — a healthcare interoperability project. Interns can improve documentation, add more test cases, or contribute UI improvements to the project's interface.

### [docker-ccda-validator](https://github.com/mieweb/docker-ccda-validator)
**Language:** Shell | **Last push:** 2022-01-06  
Dockerized version of the reference C-CDA validator. Interns can update the base image versions, improve the setup documentation, add CI/CD workflows, or create scripts to automate testing with sample C-CDA documents.

---

## Data Visualization

### [datavis](https://github.com/mieweb/datavis)
**Language:** TypeScript | **Last push:** 2026-04-23  
An example/demo page for DataVis components. Interns can add new demo scenarios, improve the example quality, update dependencies, or make the demos more instructive for developers.

### [wcdatavis](https://github.com/mieweb/wcdatavis)
**Language:** JavaScript | **Last push:** 2026-04-22  
The main DataVis source code used in WebChart. Interns can add new chart types, improve accessibility, write tests, fix bugs from the issue tracker, or improve the documentation for developers integrating DataVis.

### [ychart](https://github.com/mieweb/ychart)
**Language:** TypeScript | **Last push:** 2026-04-15  
A D3-based org chart component with a focus on accessibility. Interns can improve keyboard navigation, add new layout options, write tests, improve performance for large graphs, or improve documentation.

### [ychart-xyflow](https://github.com/mieweb/ychart-xyflow)
**Language:** TypeScript | **Last push:** 2026-04-06  
An xyflow-based charting component. Interns can help add new node/edge types, write tests, improve documentation, or build example applications showcasing the component's capabilities.

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

### [kerebron](https://github.com/mieweb/kerebron)
**Language:** TypeScript | **Last push:** 2026-04-23  
A TypeScript project in the MIEWeb ecosystem. Interns can explore the codebase, improve documentation, write tests, or contribute fixes and enhancements.

### [poc-auth-architecture](https://github.com/mieweb/poc-auth-architecture)
**Language:** JavaScript | **Last push:** 2026-03-30  
A proof-of-concept monorepo demonstrating multiple authentication patterns using a shared OIDC server. Interns can add new auth pattern examples, improve documentation, write integration tests, or improve the setup experience.

### [wcexport](https://github.com/mieweb/wcexport)
**Language:** Python | **Last push:** 2026-03-26  
A WebChart data export utility. Interns can add support for additional export formats, improve CLI documentation, add tests, or improve error messaging.

### [indexedcp](https://github.com/mieweb/indexedcp)
**Language:** JavaScript | **Last push:** 2026-02-26  
An RPM for IndexedDB-backed buffered uploads. Interns can improve documentation, add tests for upload edge cases, or improve the retry and error-handling logic.

### [webchart-oauth-example](https://github.com/mieweb/webchart-oauth-example)
**Language:** JavaScript | **Last push:** 2026-01-23  
An example showing OAuth2 token usage with WebChart. Interns can improve the example with more detailed comments, add error handling, extend it to cover additional OAuth flows, or add a step-by-step setup guide.

### [mieapi-js](https://github.com/mieweb/mieapi-js)
**Language:** JavaScript | **Last push:** 2025-11-16  
A JavaScript REST API client for WebChart and Enterprise Health. Interns can add TypeScript types, write unit tests, improve error handling, document additional endpoints, or create usage examples.

### [yabelfish](https://github.com/mieweb/yabelfish)
**Language:** TypeScript | **Last push:** 2025-11-16  
A TypeScript utility project. Interns can write tests, improve documentation, or contribute new features as they explore the codebase.

### [a3t](https://github.com/mieweb/a3t)
**Language:** JavaScript | **Last push:** 2025-07-17  
An asset and preference loader for Node.js. Interns can add TypeScript types, improve configuration options, write unit tests, or improve documentation.

### [herbie](https://github.com/mieweb/herbie)
**Language:** JavaScript | **Last push:** 2025-06-24  
A set of tools for developing behavior-based scripts for testing. Interns can add new test helpers, improve documentation, write example test suites, or fix issues with existing behavior scripts.

### [iframe-sync](https://github.com/mieweb/iframe-sync)
**Language:** JavaScript | **Last push:** 2025-03-21  
Simple state synchronization between related iFrames. Interns can improve the API design, add TypeScript definitions, write unit tests, or improve documentation with real-world usage examples.

### [mie-api-tools](https://github.com/mieweb/mie-api-tools)
**Language:** JavaScript | **Last push:** 2024-10-31  
JS tools that demonstrate use of the MIE API. Interns can add new example tools, improve existing ones, add documentation, or convert examples to TypeScript with proper types.

### [mieapi-meteor](https://github.com/mieweb/mieapi-meteor)
**Language:** JavaScript | **Last push:** 2024-10-25  
A MeteorJS API package for WebChart and EnterpriseHealth. Interns can improve documentation, update dependencies, write tests, or create example Meteor applications that use the API.

### [vision](https://github.com/mieweb/vision)
**Language:** Python | **Last push:** 2017-04-10  
A DSL that allows Selenium tests to be written in plain English. Interns can add new DSL keywords, improve the parser, write tests for the DSL itself, or build example test suites that demonstrate real-world usage.

---

## UI & Frontend Components

### [ui](https://github.com/mieweb/ui)
**Language:** TypeScript | **Last push:** 2026-04-27  
MIEWeb's shared UI component library. Interns can add new components, write Storybook stories, improve accessibility, add unit/snapshot tests, or improve component documentation.

### [v0-case-mgmt-9-3-2006](https://github.com/mieweb/v0-case-mgmt-9-3-2006)
**Language:** TypeScript | **Last push:** 2026-04-27  
A case management UI project. Interns can improve the UI components, add accessibility improvements, write tests, or document the intended use cases.

### [news-widget](https://github.com/mieweb/news-widget)
**Language:** TypeScript | **Last push:** 2026-04-22  
A news display widget component. Interns can improve the widget's visual design, add configuration options, write tests, or improve documentation.

### [multitimer-vue](https://github.com/mieweb/multitimer-vue)
**Language:** Vue | **Last push:** 2026-04-10  
A Vue version of the multitimer application, built for better maintainability, readability, and extensibility. Interns can add new timer features, improve the UI, write Vitest unit tests, or improve the documentation.

### [miewebui-root](https://github.com/mieweb/miewebui-root)
**Last push:** 2026-04-01  
Monorepo root for the `@mieweb/ui` ecosystem — a pnpm workspace hosting the MIE React component library and feature module packages. Interns can improve the monorepo tooling, add package documentation, or help migrate components from older code into the new library.

### [cordova-plugin-diagnostics-viewer](https://github.com/mieweb/cordova-plugin-diagnostics-viewer)
**Language:** JavaScript | **Last push:** 2025-09-30  
A lightweight, in-app diagnostics viewer for Cordova mobile apps. Interns can improve the UI, add new diagnostic panels (network, storage, logs), write tests, or improve documentation.

---

## AI & Automation

### [ozwellai-api](https://github.com/mieweb/ozwellai-api)
**Language:** TypeScript | **Last push:** 2026-04-27  
API specifications and schemas for Ozwell.ai. Interns can improve OpenAPI documentation, add example request/response payloads, write validation tooling, or help generate SDK code from the spec.

### [ozwell-studio](https://github.com/mieweb/ozwell-studio)
**Language:** TypeScript | **Last push:** 2026-04-20  
Ozwell Studio — an AI-powered studio application. Interns can build new features, improve the user interface, write tests, or help with integrating additional AI models or APIs.

### [hey-ozwell](https://github.com/mieweb/hey-ozwell)
**Language:** Python | **Last push:** 2025-10-07  
A Python project interfacing with Ozwell. Interns can add new commands, improve documentation, write tests, or improve the UX for interacting with Ozwell's AI features.

---

## Media & Video

### [pulsevault](https://github.com/mieweb/pulsevault)
**Language:** TypeScript | **Last push:** 2026-04-25  
Storage and processing system for Pulse. Interns can improve storage integrations, add monitoring/observability, write tests, or improve documentation.

### [pulse](https://github.com/mieweb/pulse)
**Language:** TypeScript | **Last push:** 2026-04-24  
Secure institutional knowledge sharing through short-form video content. Interns can work on new features, fix UI bugs, improve the video upload/playback experience, write tests, or improve documentation.

### [pulseclip](https://github.com/mieweb/pulseclip)
**Language:** TypeScript | **Last push:** 2026-04-10  
A clip management component for Pulse. Interns can add new clip editing features, improve the UI, write tests, or help integrate with the broader Pulse ecosystem.

### [pulse-desktop](https://github.com/mieweb/pulse-desktop)
**Language:** Rust | **Last push:** 2026-04-06  
Pulse Cam — a desktop application for capturing video. Interns with interest in Rust can contribute UI improvements, fix bugs, improve build documentation, or add cross-platform packaging support.

---

## Time & Scheduling

### [timehuddle](https://github.com/mieweb/timehuddle)
**Language:** TypeScript | **Last push:** 2026-04-27  
A time/scheduling collaboration tool. Interns can add new scheduling features, improve the UI, write tests, or improve documentation.

### [timeharbor-app](https://github.com/mieweb/timeharbor-app)
**Language:** TypeScript | **Last push:** 2026-04-10  
The TimeHarbor time-tracking application. Interns can improve the time-entry UI, add reporting features, write unit and integration tests, or improve documentation.

### [timeharbor-old](https://github.com/mieweb/timeharbor-old)
**Language:** JavaScript | **Last push:** 2026-03-05  
The original TimeHarbor codebase. Interns can explore the legacy code to understand the original architecture and help document differences compared to the newer implementation, or extract reusable logic.

---

## Infrastructure & DevOps

### [sharedactions](https://github.com/mieweb/sharedactions)
**Language:** Ruby | **Last push:** 2026-04-27  
Reusable GitHub Actions for mobile CI/CD (iOS signing and build, Android). Interns can add new reusable actions, improve existing ones, write tests, improve documentation, or add support for additional mobile platforms.

### [opensource-server](https://github.com/mieweb/opensource-server)
**Language:** JavaScript | **Last push:** 2026-04-24  
The MIEWeb open-source server configuration and setup. Interns can improve provisioning scripts, add documentation, write tests for configuration steps, or update dependencies.

### [template-mieweb-opensource](https://github.com/mieweb/template-mieweb-opensource)
**Language:** Shell | **Last push:** 2026-03-24  
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

### [mieweb_auth_app](https://github.com/mieweb/mieweb_auth_app)
**Language:** JavaScript | **Last push:** 2026-04-27  
A Meteor/Cordova application for push notification-based authentication. Interns can improve the push notification handling, update dependencies, improve the UI, write tests, or improve documentation.

### [LDAPServer](https://github.com/mieweb/LDAPServer)
**Language:** JavaScript | **Last push:** 2026-04-08  
An LDAP gateway server using ldapjs that connects to a database to manage and authenticate users. Interns can improve documentation, add support for additional LDAP operations, write integration tests, or improve error handling.

### [hfaxjs](https://github.com/mieweb/hfaxjs)
**Language:** JavaScript | **Last push:** 2026-02-11  
A Hylafax+ gateway for Node.js. Interns can add support for additional fax operations, improve error handling, write tests, or improve documentation.

---

## Mobile

### [cordova-audio](https://github.com/mieweb/cordova-audio)
**Language:** Objective-C | **Last push:** 2017-06-12  
A test Cordova app for audio functionality. Interns can improve the test coverage, add documentation, update to modern Cordova APIs, or add Android-side tests.

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

### [PulseVault-old](https://github.com/mieweb/PulseVault-old)
**Language:** TypeScript | **Last push:** 2026-04-17  
The original Pulse storage and processing system. Interns can review the legacy architecture, document design decisions, or help identify components worth migrating to the current `pulsevault` repository.

### [questionnaire-builder](https://github.com/mieweb/questionnaire-builder)
**Language:** JavaScript | **Last push:** 2026-04-13  
A questionnaire builder tool (note: this repo points to a newer version). Interns can help by reviewing the legacy code, documenting differences between the old and new versions, or migrating useful features to the updated repository.

### [yCard](https://github.com/mieweb/yCard)
**Language:** TypeScript | **Last push:** 2025-11-16  
An internationalized YAML version of vCard/iCard and x500 LDAP for humans. Interns can add new field types, improve parsing and serialization, write tests, or improve documentation with real-world examples.

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

#### [ConvergentDecidua](https://github.com/BioNanomics/ConvergentDecidua)
**Language:** Python | **Last push:** 2026-04-27  
A lab research project at BioNanomics. Interns can help by writing data analysis scripts, improving documentation, adding unit tests, building automation pipelines for lab instruments, or contributing visualizations that help interpret experimental results.

### See The Refinery in Action

[![Instagram: @the_refinery_bybnx](https://img.shields.io/badge/Instagram-%40the__refinery__bybnx-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/the_refinery_bybnx/)

The Refinery's Instagram is the best place to see what's happening day-to-day — robot builds, competition days, student milestones, and lab activity. Before you dive into the code, take a few minutes to scroll through [@the_refinery_bybnx](https://www.instagram.com/the_refinery_bybnx/) to understand the community and the students your contributions will directly support.

### FRC (FIRST Robotics Competition) Projects

BioNanomics houses and supports multiple FRC teams through The Refinery. Interns with an interest in robotics, control systems, or JavaScript tooling can make real contributions here — code runs on competition robots and in the pit at tournaments.

#### [refinery-forcefield](https://github.com/BioNanomics/refinery-forcefield)
**Language:** JavaScript | **Last push:** 2026-03-16  
A force field engine for FRC swerve drive robots — provides wall repulsion, snap-to zones, and a visual editor for field configuration. Interns can add new force field zone types, improve the visual editor UI, write tests for the physics engine, improve documentation, or port the tool to work with additional FRC field layouts.

#### [refinery-roborio-mcp](https://github.com/BioNanomics/refinery-roborio-mcp)
**Language:** Java | **Last push:** 2026-03-19  
An MCP (Model Context Protocol) server for the FRC RoboRIO controller, enabling AI-assisted robot development and diagnostics. Interns can add new MCP endpoints exposing robot telemetry, improve documentation, write integration tests, or build example prompts that demonstrate AI-assisted FRC development workflows.

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
