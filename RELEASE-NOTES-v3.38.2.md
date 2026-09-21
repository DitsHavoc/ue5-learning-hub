# UE5 Learning Hub v3.38.2 — Module 0 Visual Teaching Pass

## What changed

Module 0 has been reworked so its imagery now teaches the exact concept beside it instead of relying on one loosely related image per chapter.

- Rebuilt the chapter layout around **concept → matching visual → what to look for → quiz**.
- Added section-level visuals throughout all six chapters rather than a single sticky chapter image.
- Added **23 purposeful visual placements** across Module 0.
- Reused the approved single-viewport Crate, Barrel, Tyre and Panel images where they directly explain topology, density, pivots, checker maps and modular thinking.
- Added authentic stills from the teacher-made Max videos for Vertex, Edge, Polygon, Workspace, Primitive Parameters, Array and Materials.
- Added the useful collision, LOD, UV-layout and breakable-mesh figures from the supplied college theory deck where they directly support those concepts.
- Rewrote the theory copy to be more concrete and decision-led: what the student should notice, what changes on the mesh and why the decision matters in a game asset.
- Added a **LOOK AT THE IMAGE** prompt to each concept so the visual is an active teaching aid rather than decoration.

## Workspace lesson fix

`Know the Workspace Before You Model` no longer uses the old drawn `interface-map.svg` concept image. It now uses a real frame from the teacher's **Interface Basics** video showing the actual Max workspace used in the course. The Primitives / Precision lesson also stops recycling that interface-map diagram and uses the real primitive-parameter scene instead.

## Preserved

- All six Module 0 chapter IDs.
- All chapter quiz questions, scoring and +20 XP rewards.
- Model Doctor ID, questions, pass rule and +100 XP reward.
- All existing 12 Modelling lesson IDs, 8 Build X IDs and 6 Fix Clinic IDs.
- The full 14-video Max course and its +20 XP video completions.
- No database migration is required.

## Validation

- JavaScript syntax checks pass.
- 6 chapters retained; 30 chapter questions and 12 Model Doctor questions retained.
- All referenced local assets resolve.
- The rejected generated Module-0 dashboard/infographic image is not included in the site tree.
- Chromium visual interaction is **not claimed**: headless Chromium still hangs in the container DBus environment.
