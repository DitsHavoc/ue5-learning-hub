# Changelog

## v3.22.0 — Gold Instruction Pass — 26 Aug 2026

### Added
- Prescriptive walkthrough structure across every Programming Quick Tutorial and every Designer Studio recipe.
- `WHERE TO CLICK / WHERE TO WORK`, expected-result, proof and troubleshooting prompts.
- Step-level instructional visuals where a genuinely relevant local visual exists.
- Detailed production-style phases for all eight Designer Studio Builds.
- `RELEASE-NOTES-v3.22.0.md` for deployment/release handoff.

### Changed
- All 47 Programming Quick Tutorials now use the richer walkthrough format.
- All 47 Designer Studio recipes now use the richer walkthrough format.
- All 20 core lesson guided builds remain on the richer format introduced in v3.21.
- Designer Studio Builds now explain where to work and how to prove each phase instead of presenting a short phase sentence only.
- Landing-page `Choose a path` heading reduced on desktop and mobile.
- Tutorial cards show **Detailed walkthrough** when the richer format is available.
- Cache/version strings updated to v3.22.0.

### Removed / corrected
- Removed generic lesson-image fallback from Quick Tutorials when no tutorial-specific visual is supplied.
- Avoided inserting unrelated imagery simply to fill space.

### Database
- No migration required.

## v3.21.0 — Instruction Quality — 26 Aug 2026

- Reworked all 20 core programming guided builds into more prescriptive classroom walkthroughs.
- Introduced support for `WHERE TO CLICK`, `YOU SHOULD SEE` and `IF STUCK` guidance.
- Converted the first 17 high-use Quick Tutorials to the detailed format.
- Reduced the landing hero heading.
- Removed generic Quick Tutorial image fallback.

## v3.20.0 — Landing + News & Industry — 26 Aug 2026

- Rebuilt Home around Programming, Design, Projects and News & Industry.
- Promoted Projects to a major site destination.
- Added live News & Industry feeds, Read Later, upvotes and signed-in comments.
- Added Supabase-backed news social tables/RPCs.
