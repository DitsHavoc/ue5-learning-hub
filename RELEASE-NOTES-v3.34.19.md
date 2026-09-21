# UE5 Learning Hub v3.34.19 — Site-wide Search Repair

## What changed

The topbar search has been rebuilt instead of patched around the old handler.

- One global search index is generated once at startup.
- It covers Unreal Learning, Quick Tutorials, Building Blocks, Blueprint Snippet Bank, Designer Studio, 3D Modelling Studio, Sculpt Playground and the glossary.
- Nested instructional text is indexed, so searches can match node names, mechanics, step wording, troubleshooting, prerequisites and repair guidance rather than only page titles/summaries.
- Multi-word queries use token matching with title-weighted ranking.
- The results panel now has a result-count header and explicit stacking above page content.
- Focus and native search events rerun an existing query.
- Optional/missing fields are flattened safely rather than being able to break the input handler.

## QA examples

The rebuilt index resolves representative cross-site searches including:

- `door`
- `break hit result`
- `energy check`
- `silent hill fog`
- `retopology`
- `save checkpoint`
- `AI chase`
- `animation blueprint`
- `niagara impact`

## Scope

- No curriculum content removed or merged in this hotfix.
- Snippet Bank remains at 39 paste assists.
- Teacher capture count remains 76.
- No Supabase/database migration is required.

## Validation

- `app.js` passes `node --check`.
- A data-level QA harness built the live-equivalent index with **288 searchable content destinations** before static Hub-area shortcuts and returned results for every representative query above.
- A real Chromium interaction test was attempted, but the container Chromium process did not complete and emitted no DOM output; this release therefore does **not** claim a browser test.
