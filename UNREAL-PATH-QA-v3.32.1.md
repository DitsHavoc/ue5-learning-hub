# Unreal Path QA — v3.32.1

## Coverage

- Building Blocks: 47
- Core: 13
- Common: 32
- Later: 2
- Shelves: 5
- Core System Lessons: 20
- Programming Quick Tutorials: 47

## Mapping QA

- 47 / 47 programming tutorials contain explicit `buildingBlocks` arrays.
- Every mapping contains 1–4 entries.
- Every mapped Building Block ID exists.
- No tutorial mapping contains duplicate block IDs.
- Explicit mappings preserve tutorial-specific priority instead of sorting by fuzzy term matches.
- Legacy fuzzy matching is used only when a tutorial has no explicit mapping.

## Dependency QA

- Every Building Block `requires` ID exists.
- Dependency graph contains no cycles.
- 20 / 20 Core System Lessons have at least one Building Block relation.

## Instruction QA

- Building Block proof steps checked for exact navigation where unfamiliar assets are created.
- Casting proof made self-contained.
- BPI and Dispatcher exercises now include the missing reference/call/bind route.
- UMG includes input-mode language needed by Pause Menu tutorials.
- First-build vague-word scan found no `roughly`, `about`, `approximately`, `~`, `suitable` or `appropriate` wording in Building Block proof steps or Programming `studentRecipe` steps.

## Static/technical QA

- `node --check`: app.js, backend.js and all data JS passed.
- Static/local reference scan: 572 references / 114 unique / 0 missing.
- Local HTTP smoke test passed for `/`, `data/building-block-data.js` and `data/tutorial-data.js`.
- Building Block and tutorial data return version 3.32.1 / explicit mapping data.

## Visual QA limitation

No automated Chromium visual pass is claimed because the available headless browser environment remains unreliable. Perform a brief visual smoke test after deployment.
