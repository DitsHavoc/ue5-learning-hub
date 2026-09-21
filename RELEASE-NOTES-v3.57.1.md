# UE5 Learning Hub v3.57.1 — Level 4 image + programmer fix

Baseline: v3.56.2 or v3.57.0.

## Fixed

- Replaced brittle Steam/Kwork/third-party image hotlinks in the Level 4 specialist pages with more reliable reference sources.
- Every external Level 4 reference image now has a local Hub image fallback, so a blocked remote image does not leave a blank panel.
- Added short teaching captions explaining what students should actually study in each reference image.

## Programmer pathway corrected

The Level 4 Programming tile no longer opens a generic "pick a system" brief.

It now starts the existing guided small-game sequence:

1. **Escape Room: Arrays & Maps** — build the complete game from Third Person template to start menu, Battery, Inventory Array, Generator, Key, item-information Map, locked Exit, Win Screen and restart.
2. **Structs & Data Tables: Stop Hard-Coding** — continue the same game and move item content into reusable structured data.
3. **Functions & Reusable Logic** — continue the same game again and refactor repeated implementation into clear Functions.

The missions are sequential and use the existing stage-by-stage DO THIS / WHY / CHECK workflow.

## Files added to this release

- `skill-missions.css`
- `data/programmer-skill-mission.js`

## Files updated

- `index.html`
- `app.js`
- `level4-specialist.css`
- `data/level4-specialist-projects.js`

No database or Supabase migration is required. Local-only mode remains unchanged.
