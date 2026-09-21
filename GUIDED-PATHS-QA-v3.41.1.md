# Guided Paths QA — v3.41.1

## Curriculum checks

PASS — exactly three launch paths remain.

PASS — 3D Prop route removed; 3D Modelling Studio is surfaced as an existing structured course.

PASS — Unreal Learning remains an existing structured course rather than a duplicate Guided Path.

PASS — all Theory IDs referenced by paths exist in `theory-data.js`.

PASS — all Unreal lesson IDs referenced by paths exist in `course-data.js`.

PASS — all Quick Tutorial / Designer practical IDs referenced by paths exist after the normal Designer tutorial merge.

PASS — all Level Design professional-source references point to real `world-design` industry deep dives.

## Path behaviour checks

PASS — normal content remains clickable regardless of pathway order.

PASS — the first incomplete top-level stage becomes `Recommended next`.

PASS — completing an existing Hub lesson/tutorial/build updates pathway progress through its existing completion ID.

PASS — Gameplay Mechanic choice routes are prerequisite-aware:
- Interaction requires Traces + interaction tutorial.
- Checkpoint requires Framework + checkpoint tutorial.
- Health and Score do not add unnecessary prerequisite lessons.

PASS — Digital → Tabletop cannot reach 100% from Theory alone; practical checkpoints are counted.

PASS — Build a Playable Level requires a field-research checkpoint and one professional source task before the core practical sequence is complete.

## Checkpoint persistence / XP checks

PASS — checkpoint rows use `completed=false`, preventing the existing lesson-completion XP trigger from firing.

PASS — `completed_at` stores whether a pathway checkpoint is currently marked complete.

PASS — cloud lesson-progress sync recognises pathway rows without adding another routine read.

PASS — teacher category aggregation ignores checkpoint rows because they are not completed lessons and use a namespaced ID.

PASS — guest/local checkpoint state is included in normal progress migration when the user signs in, still with `completed=false`.

## Technical checks

PASS — `node --check app.js`.

PASS — `node --check backend.js`.

PASS — `node --check data/pathway-data.js`.

PASS — pathway reference validator reports zero missing content IDs.

PASS — no v3.41.1 database migration is required.

## Visual-browser note

No Chromium visual pass is claimed. Chromium was unreliable/hanging in the current build environment, so this QA deliberately reports only checks that were actually completed.
