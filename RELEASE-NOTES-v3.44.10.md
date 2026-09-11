# v3.44.10 — Quick Tutorial Visibility Fix

## What was wrong
v3.44.9 correctly added five tutorials to `UE5_TUTORIAL_DATA.tutorials`, but the current Quick Tutorials library renders `TOOLS.families`, not loose tutorial records. The tutorials existed and could be found directly/site-wide, but they did not receive visible library cards.

## Fixed
Adds four Quick Tutorial recipe families:
- Procedural Level Tools — Procedural Mesh Grid + Repeated Meshes Along a Spline
- Editor Automation — Align Selected Actors
- Variant Manager Configurator — architecture case study
- Modular UMG & Event Dispatchers — UI/dispatcher case study

`Procedural Level Tools` is also included in the Featured area.

## Upload only
- `index.html`
- `data/advanced-blueprint-learning.js`

No image re-upload is required if v3.44.9 images are already present.

## Safety
No changes to Prison Cell, Prison Escape, Blueprint Foundations, app.js, backend.js, Supabase, roster controls, core tutorial data, building-block data or sitewide CSS.
