# UE5 Learning Hub — Landscape Master Guide QA
## v3.50.0

**Result: PASS — static/code/content QA**

## Baseline

Reconstructed and checked against the v3.49.1 deployment set before applying this change.

## New tutorial

- ID: `landscape-master-guide`
- Title: **Landscape: From Blank Terrain to Playable Environment**
- Designer module: `landscape`
- Stages: **16**
- Screenshot visuals: **78**
- Screenshot source: real Unreal Engine captures supplied during the classroom build
- Position: first recipe in **Designer Studio → Landscape, Terrain & Foliage**

## Screenshot QA

- 78 source screenshots mapped exactly once: PASS
- 78 local WebP assets generated: PASS
- duplicate tutorial image references: 0
- missing tutorial image references: 0
- all 78 WebP files opened/verified successfully with Pillow: PASS
- total original PNG size: about 105.4 MB
- total WebP delivery size: about 3.9 MB
- large screenshots capped at 1600 px width for web delivery; small UI crops are not upscaled
- existing Hub lightbox/lazy-loading renderer reused; no new gallery system added

## JavaScript / integration QA

- `node --check app.js`: PASS
- `node --check data/landscape-master-guide.js`: PASS
- isolated injection smoke test: PASS
- tutorial inserted into `window.UE5_DESIGN_DATA.tutorials`: PASS
- tutorial ID inserted first into Landscape module recipe list: PASS
- existing Designer/tutorial renderer reused: PASS
- existing completion/progress ID system reused: PASS

## Safe-change check

Relative to the reconstructed v3.49.1 baseline, runtime changes are limited to:

- modified `index.html` (version badge + one new data script include)
- new `data/landscape-master-guide.js`
- new `assets/tutorials/landscape-master/*.webp`

No changes to:

- `app.js`
- `styles.css`
- `backend.js`
- Supabase/database schema
- existing lesson/tutorial IDs
- existing progress keys

## Content decisions captured from the live Unreal build

- Practice Landscape uses the captured 505×505 / 8×8 component setup.
- Paint guide includes the UE5.8 `Create Layers From Assigned Materials` step seen in the classroom UI.
- Practice Layer Info setup uses Advanced Weight Blending with shared `Ground` Blend Group, matching the captured UE5.8 workflow.
- Foliage guide preserves the Radius 0 overlap failure and the later spacing fix as explicit troubleshooting evidence.
- Dirt Landscape layer is used as a Foliage exclusion rule to protect the playable route.
- Character traversal reference uses the actual captured Third Person template value: Walkable Floor Angle `44.765083°` (with Floor Z `0.71`).
- Edit Layer visibility and Alpha screenshots are both used.
- Dedicated `Landscape Edit Layer Splines` workflow is used for the road.
- Clean final Dirt spline-road result is shown after editor guides are hidden.
- Stock Plane Spline Mesh is labelled as a technical proof only, not a production road mesh.
- The floating-road failure is retained so students can see why over-adjusting the spline mesh is wrong.
- Project Nature / approved Fab environment pack is recommended only after the diagnostic material/foliage workflow is understood.

## Browser QA status

No browser visual/runtime test is claimed from this environment. After deployment, perform the normal live click-through listed in `UPLOAD-NOW-v3.50.0.txt`.

## Packaging / static delivery QA

- local static HTTP GET `index.html`: 200
- local static HTTP GET `data/landscape-master-guide.js`: 200
- local static HTTP GET first Landscape WebP: 200
- minimal patch overlay reproduces the updated full working tree exactly: PASS
- minimal ZIP integrity: PASS
- full ZIP integrity: PASS
