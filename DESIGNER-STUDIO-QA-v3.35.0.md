# Designer Studio v3.35.0 — QA Results

## Structural validation

PASS.

- 8 Designer disciplines
- 47 Designer-owned Quick Tutorials
- 48 unique recipe placements across the eight modules (47 Designer-owned + the existing shared `silent-hill-fog` recipe)
- 24 real-game case studies
- 16 field research missions
- 24 constraint challenges
- 24 entries in Design Roulette
- 8 hidden Black Box briefs
- 53 rewritten Studio Build phase-detail cards
- 18 unique local design-image references checked
- 0 missing local design images
- 43 unique HTTPS reference/source URLs discovered across the new Designer data and the shared fog references

## Integrity validation

PASS.

- All 12 JavaScript files pass `node --check`.
- All 8 modules have exactly 3 case studies, 2 field research missions and 3 constraint challenges.
- Every module has a Black Box brief.
- Every module recipe ID resolves in the merged Quick Tutorial library.
- Every module recipe has at least one reference/design-target image.
- All 47 Designer-owned tutorial IDs are unique.
- All 24 module challenges resolve into Design Roulette.
- Old generic Studio Build wording `Use the relevant Unreal editor panel` occurs 0 times.
- Deprecated `pbs.twimg.com` and `purexbox` Designer image hosts occur 0 times.
- CSS opening/closing brace counts match.
- Production `index.html` loads the v3.35.0 stylesheet, core data, Designer data and app cache versions and displays the v3.35.0 badge.

## Search behaviour

The existing v3.34.19 global index serialises the full Designer module object through `deepSearchText(...)`. Therefore the new case-study names, design lenses, research briefs, challenge text and Studio Build instructions are automatically searchable without a separate Designer search index.

## Database

No migration required. Existing recipe and Studio Build completion IDs are preserved. Black Box visibility is derived from the existing Studio Build completion state.

## Browser note

No full visual browser acceptance test is claimed by this QA document. Structural/runtime-facing code was validated statically and by the existing app data relationships; final classroom/browser visual checking remains separate.
