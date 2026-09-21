# 3ds Max 2023 Bible — Teaching Quality Pass

## Purpose

This pass uses **Autodesk 3ds Max 2023 Bible by Seyi Sunday O.** as a curriculum/reference source to improve the existing 3D Modelling Studio. The goal is not to reproduce the book. The goal is to identify useful sequencing, exercises, modelling habits and interface states, then rewrite them into the Hub's slower, safer teaching model.

## What changed because of the book study

### Stage 1 — Control the software

The interface chapters reinforce a useful beginner map: **viewport, Command Panel, main toolbar, Transform Type-In and Scene Explorer**. The Hub now explicitly teaches only those five areas first and tells students which advanced tools to leave alone.

The transform chapter strongly supports teaching:
- one-axis movement first;
- precise Transform Type-In;
- Angle Snap for clean rotations;
- a warning against casual scale transforms;
- Object Snap as a precision exercise.

The Hub now includes a **three-box precision stack** before the room blockout so snapping is learned in a tiny, testable task before it is needed in modular modelling.

### Stage 2 — Build clean geometry

The book's Graphite Modeling material reinforces the value of **Loop, Ring and Edit Poly selection discipline**. The Hub now adds a disposable cylinder Ring/Loop drill before those tools are used on the crate.

Editable Poly remains deliberately separated from Extrude/Inset. Students first learn sub-object levels and F4 Edged Faces, then learn Inset/Extrude in the following lesson.

### Stage 3 — Work like a modeller

The book's practical examples provide two especially useful modelling ideas:

- **Tyre modelling** — radial segment judgement, Ring/Connect, profile control, simple tread and Symmetry.
- **Wood planks** — repeated divisions, Chamfer/open gaps and Shell thickness.

The old early **Desk / Workstation Build X** has therefore been replaced by **Simple Game Tyre**, because the tyre reuses more of the exact skills students are developing at that point in the course.

The wood-plank idea is not a separate large Build X. It is now a **small scaffold inside the Modular Assets lesson** before students build the five-piece room kit.

The topology lesson also gains a **12 vs 24 vs 48 side cylinder budget drill**. Students must justify the lowest density that still holds the intended silhouette.

### Stage 4 — Make it game ready

The book contains useful UV/material concepts but also uses legacy render/material workflows in places. Those legacy instructions have **not** been copied into the Hub.

The Hub keeps its game-production route:

**clean model → Unwrap UVW → checker proof → sensible seams/packing → material IDs / Substance Painter → FBX → UE5**

The Material Handoff lesson now explicitly warns students not to rebuild the workflow around old Scanline/Standard-material tutorials.

## Content deliberately rejected from the core route

### Couch cushion / Cloth simulation

Interesting and potentially fun, but it introduces Cloth simulation, pressure, gravity and collision before students need those ideas. It is a poor core scaffold for a game-asset modelling unit. It may be useful later as an **optional advanced recipe**.

### Terrain / Paint Deformation

Useful features, but they overlap more strongly with environment/design workflows than the essential hard-surface game-asset route. They are not needed to understand the modelling fundamentals.

### Legacy Scanline material workflow

Rejected for the core course. Current PBR/game workflows are more relevant to the Hub's Substance Painter → UE5 pipeline.

### Reproducing book screenshots

Rejected. The book is All Rights Reserved. Its screenshots are useful for identifying **what we should capture ourselves** from the college's installed Max version, but are not included in this release.

## New learning structure

The 12 lessons are now visibly grouped into four stages:

1. **Control the software** — workspace, primitives, transforms, snapping.
2. **Build clean geometry** — Editable Poly, Inset/Extrude, edge control, Chamfer.
3. **Work like a modeller** — modifier stack, topology judgement, modular systems.
4. **Make it game ready** — UVs, Substance handoff, FBX and UE5.

Each lesson now also declares:

- **TOOLS YOU MAY USE TODAY**
- **LEAVE THESE ALONE FOR NOW**

This deliberately reduces tool overload and prevents students from reaching for Booleans, TurboSmooth or automatic fixes before they understand the geometry underneath.

## Build X support fade

The Build X library now deliberately reduces support:

- Game-ready Crate — **Full guidance**
- Barrel / Canister — **Guided with familiar tools**
- Simple Game Tyre — **Guided with selection judgement**
- Sci-fi Wall Panel — **Guided checkpoints**
- Sci-fi Door — **Reduced prompts**
- Modular Pipe Kit — **Reduced prompts**
- Modular Room Kit — **Production brief**
- Independent Hero Prop — **Independent outcome brief**

The course therefore moves from **copy carefully → understand → reuse → choose → create independently**.
