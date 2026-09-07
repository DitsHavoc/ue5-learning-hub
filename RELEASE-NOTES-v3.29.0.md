# UE5 Learning Hub v3.29.0 — Prescriptive Instruction Pass

**Build date:** 26 August 2026  
**Database migration required:** No

## Why this release exists

The Hub had accumulated strong explanations, references and extension material, but the practical route could still ask beginners to infer too much. This pass makes the first successful build deliberately prescriptive.

The rule is now:

**Copy → Test → Understand → Change**

The first version uses exact names, values, distances, timings, measurements and checkpoints wherever a known teaching value is useful. These are starting values for learning, not claims that every finished game or model should use the same numbers.

## Scope

- 20 / 20 UE core lessons now have Exact First Build recipes.
- 47 / 47 Programming Quick Tutorials now have Known-Working Recipes.
- 12 / 12 3ds Max lessons now have exact modelling routes.
- 8 / 8 Build X projects now have first-build dimensions and operations.

## UX changes

### UE lessons
The student flow is now:

1. Goal
2. Build exactly
3. Check it
4. Understand why

The longer concept material remains available but no longer blocks the practical route.

### Quick Tutorials
Each Programming Quick Tutorial now shows:

- known-working values;
- a numbered first-build recipe;
- a stop/fix checkpoint;
- deeper why / expected result / troubleshooting only when opened.

### 3ds Max
The first visible modelling route now uses concrete values such as:

- crate base **80 × 60 × 45 cm**;
- Inset **5 cm**;
- recess Extrude **-3 cm**;
- teaching Chamfer **1.5 cm / 2 segments**;
- modular wall **400 × 20 × 300 cm**;
- doorway **100 × 210 cm**;
- cylinder density comparison **12 / 24 / 48 sides**.

Reference imagery, book figures and full explanations are preserved but moved underneath the controlled first build.

## Important teaching note

The numbers in this release are **known-working teaching starting points**. Once the student proves the system/model works, later tasks deliberately fade the support and ask them to tune or choose appropriate values themselves.

## Smoke test

1. Open a UE core lesson: Exact First Build should appear before deep explanation.
2. Open Sprint / Dash / Health Bar / Fog Quick Tutorials: known values and numbered build recipe should appear.
3. Open Max Primitives & Precision: exact 100 × 60 × 40 cm box and precision stack should appear first.
4. Open Game-ready Crate Build X: 80 × 60 × 45 cm / 5 cm Inset / -3 cm Extrude should be visible.
5. Expand deeper details and confirm old explanations, troubleshooting and references remain available.
