# UE5 Learning Hub v3.37.0 — 3D Modelling Studio Rebuild

Date: 29 Aug 2026

## Why this release exists

The old 3D Modelling Studio contained sound topics — 3ds Max fundamentals, topology, UVs, modular kits, Substance and UE export — but the experience was too close to a software reference. Students could follow tools without being pushed hard enough to decide **what they were making, why the form worked, what geometry mattered, and how to judge the result**.

V3.37.0 treats modelling as game-art problem solving.

## New studio loop

**REFERENCE → PLAN → BLOCK → MODEL → INSPECT → GAME READY → CRITIQUE**

The loop is deliberately visible on the landing page and repeated through the lesson/build structure.

## Core lessons

All 12 existing lesson IDs are retained:

1. Know the Workspace Before You Model
2. Primitives, Precision & Transform Discipline
3. Editable Poly: Vertex, Edge, Border, Polygon, Element
4. Extrude & Inset: Build the First Crate
5. Edge Control: Connect, Loops & Support Geometry
6. Chamfer, Hard Edges & Shading
7. Modifier Stack, Symmetry & Non-destructive Work
8. Topology Clinic: Diagnose Before You Repair
9. Modular Assets: Grid, Scale, Pivots & Reuse
10. UVs: Unwrap, Checker, Scale & Packing
11. Material Prep & Substance Painter Handoff
12. Game Ready: Pivot, FBX Export & UE5 Verification

Every lesson now includes a **LOOK • THINK • PLAN** stage before Max: one big question, observation prompts, planning prompts and a modelling judgement. The existing explicit instructions remain, but are presented as the execution stage after the student has made sense of the problem.

## Build X is now production work

All 8 existing Build X IDs are retained:

- Game-ready Crate
- Barrel / Canister
- Simple Game Tyre
- Sci-fi Wall Panel
- Sci-fi Door
- Modular Pipe Kit
- Modular Room Kit
- Independent Hero Prop

Each now has:

- a role and short production context;
- a real-world reference board;
- a design target and constraint;
- planning questions before opening Max;
- a step-by-step blockout/model/check guide;
- one required variation so students cannot simply clone the walkthrough;
- quality gates that must be inspected rather than guessed;
- a professional prop/environment-art breakdown;
- a specific Critique Board question before the asset is called finished.

Support still fades deliberately from full crate guidance to an independent Hero Prop brief.

## Reference and industry layer

The rebuild surfaces real reference rather than decorative images. Build references use real crates, drums, tyres, panels, doors, industrial pipework, warehouse architecture and everyday hero-prop candidates. Selected figures from the user's supplied 3ds Max learning material are surfaced where they genuinely help students recognise interface regions, topology density, subdivision growth or UV distortion.

Professional workflow studies include 80 Level breakdowns on hard-surface prop production, modular 3ds Max/Unreal environments, realistic vehicle work, a Death Stranding-inspired delivery bot, Substance prop texturing and a current modular environment-art workflow.

Technical source hierarchy remains:

- current Autodesk documentation for exact 3ds Max tools/UI;
- Adobe Substance 3D Painter documentation for Painter/baking behaviour;
- Epic UE5.8 documentation for Unreal import/export verification.

## Systems preserved

- no modelling lesson/build/fix IDs changed;
- no database migration;
- existing progress and XP remain valid;
- Critique Board uses the v3.36.0 feature already deployed;
- 3D Modelling remains separate from Designer Studio;
- Sculpt Playground remains an optional form/silhouette bridge rather than replacing clean hard-surface modelling.
