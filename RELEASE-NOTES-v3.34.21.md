# v3.34.21 — Embedded Page Search Repair

## What was broken
The page-level search boxes in areas such as Quick Tutorials and Epic Paste Assists relied on live `input` events only. Pressing Enter/Search had no explicit handler. In Quick Tutorials the Featured cards also stayed visible because only the lower recipe grid was filtered, making a working filter look like it had done nothing.

## Fix
- Added shared embedded-search handling for `input`, `search`, `change`, IME composition completion and Enter.
- Enter/Search now applies the filter and reveals the first matching result.
- Quick Tutorials hides Featured cards while searching/filtering.
- Epic Paste Assists and Glossary use token-based multi-word matching.
- Quick Tutorials, Epic Paste Assists and Glossary show explicit no-match messages.
- News search uses the same robust input/Enter handling.
- Mobile search keyboards get `enterkeyhint="search"`.

## Scope
The top-bar global search was already repaired in v3.34.19 and is not replaced here. No curriculum, progress, snippets, captures, projects or database structures change.

## Validation
- `node --check app.js` passes.
- Runtime DOM harness verifies live filtering, Enter handling, result counts, featured-section hiding and empty states for Quick Tutorials and Epic Paste Assists.
- Packaging equivalence checks are performed before release.
- No browser/Chromium test is claimed.
