# UE5 Learning Hub v3.50.0 — Landscape Master Guide

## What changed

A new long-form Designer Studio tutorial has been added to **Landscape, Terrain & Foliage**:

**Landscape: From Blank Terrain to Playable Environment**

It follows the classroom workflow from a new Third Person practice landscape through to a procedural spline road.

## Tutorial coverage

The guide contains **16 practical stages** and **78 real Unreal Engine screenshots captured during the build**.

It covers:

- create a 505×505 practice Landscape
- player-scale / collision proof
- broad Sculpt raise/lower workflow
- route-first terrain design
- Smooth
- Flatten + edge blending
- Ramp setup and steep-ramp correction
- a simple diagnostic Grass / Dirt / Rock Landscape material
- UE5.8 Target Layers and Layer Info creation
- Advanced Weight Blending + shared Ground blend group for the practice material
- base-layer paint troubleshooting
- Dirt route / Rock slope material painting
- Foliage Mode
- spacing, scale variation, erase/repaint workflow
- Dirt Landscape-layer foliage exclusion
- player-height route proof
- slope traversal testing
- CharacterMovement Walkable Floor Angle reference
- Landscape Edit Layers: visibility + Alpha
- dedicated Landscape Edit Layer Splines workflow
- Landscape Spline control points, width and falloff
- automatic Dirt layer painting + Raise/Lower Terrain
- clean proof that spline road paint remains when editor guides are hidden
- optional Spline Mesh proof and floating/low-subdivision troubleshooting

## Teaching choice

The bright green / brown / grey material and simple block foliage are intentionally diagnostic. They make the system easy to understand and make failures obvious. The tutorial explicitly tells students to replace them with **Project Nature or another approved Fab environment pack** once the workflow works.

## Architecture / safety

- Existing Designer Studio tutorial IDs are unchanged.
- Existing progress IDs are unchanged.
- The new tutorial is injected through `data/landscape-master-guide.js` after the existing `design-data.js` is loaded.
- No database migration.
- No backend change.
- No CSS change.
- No existing tutorial was removed or rewritten.

## Image delivery

The 78 source PNG screenshots were converted to WebP for the Hub and stored under:

`assets/tutorials/landscape-master/`

The source screenshots totalled about 105 MB; the web copies total about 3.9 MB while preserving the full Unreal UI in the lightbox.

## QA completed

- `node --check app.js` — PASS
- `node --check data/landscape-master-guide.js` — PASS
- injection smoke test — PASS
- 16 tutorial steps present — PASS
- 78/78 screenshot references present — PASS
- all referenced Landscape tutorial image files exist — PASS
- existing v3.49.1 tree used as the baseline — PASS

Browser visual/runtime QA was not claimed; run the normal live click-through after deployment.
