# Designer Studio Landing QA — v3.35.4

## Scope

Remove the redundant Resource Library bridge from the Designer Studio landing page without removing the Resource Library itself or changing student progress systems.

## Static checks

- Designer landing no longer contains “Don't bury the useful stuff at the bottom.”
- Designer landing no longer contains `.resource-studio-bridge` markup.
- Bridge-only CSS removed.
- `#/resources` route remains.
- Home Resource Library card remains.
- Resource Library data remains unchanged apart from release-version metadata.
- Designer modules, case studies, deep dives, embedded videos and completion IDs remain.
- Quick Tutorial breadcrumb Dashboard links resolve to `#/` rather than the invalid `#/Dashboard`.
- JavaScript syntax check passes.

## Browser/runtime note

No claim is made here that a Chromium interaction test ran. Static/regression validation is recorded separately during packaging.

## Regression counts

- 8 Designer modules retained.
- 24 main case studies retained across 24 different games.
- 24 industry deep dives retained.
- 24 module-level constraint challenges retained.
- 48 Designer tutorial placements resolve successfully against the combined Quick Tutorial + Designer tutorial catalogue.
- 18 Resource Library entries retained.
- 39 Epic Paste Assists retained; all snippet tutorial/lesson references resolve.
- 150 literal local image references checked; 0 missing image files.
- 156 literal internal route links checked; 0 unknown route prefixes after correcting the two pre-existing Dashboard breadcrumb typos.

## Packaging target

The minimal overlay must reproduce the v3.35.4 working tree exactly when applied over v3.35.3 FULL, and the FULL ZIP must reproduce that same working tree exactly.
