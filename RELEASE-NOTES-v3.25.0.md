# UE5 Learning Hub v3.25.0 — 3D Modelling Studio

**Build date:** 26 August 2026  
**Database migration required:** No  
**New major area:** 3D Modelling Studio — Autodesk 3ds Max → UVs → Substance handoff → Unreal Engine 5.8

## Why this release exists

The Hub already teaches programming and design strongly, but game assets need their own slower learning approach. 3D modelling is easy to damage: a wrong sub-object selection, duplicated extrusion, over-aggressive weld, collapsed modifier stack or poor UV decision can create problems that only become obvious much later.

v3.25 therefore prioritises **method, checkpoints and recovery over tutorial quantity**.

## New structured course

**12 deep scaffolded lessons:**

1. Know the Workspace Before You Model
2. Primitives, Exact Transforms & Blockout
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

The lessons are cumulative. The crate created early in the course returns for edge control, chamfer, UVs and final UE5 verification rather than being thrown away after one lesson.

## Instruction standard

Every modelling step uses:

**WHERE TO CLICK → DO THIS → YOU SHOULD SEE → STOP AND CHECK → WHY → IF YOURS DOESN'T MATCH**

Risky operations receive a separate **⚠ BEFORE YOU DO THIS** warning. Students are repeatedly told to save numbered versions and return to the last clean version instead of building fixes on top of damaged geometry.

## Build X

Eight deliberately substantial practical projects are included:

- Game-ready Crate
- Barrel / Canister
- Simple Desk / Workstation
- Sci-fi Wall Panel
- Sci-fi Door
- Modular Pipe Kit
- Modular Room Kit
- Independent Hero Prop

Each Build X project lists prerequisite lessons and uses recoverable phases with microsteps, a hard stop/checkpoint and evidence required before moving on.

## Fix This Model

Six repair clinics teach diagnosis rather than button memorisation:

- The 96,000 Polygon Crate
- Boolean Apocalypse
- UV Lasagne
- Pivot From Hell
- The One-Mesh Room
- TurboSmooth Melt

## Visual strategy

- Original labelled **concept maps** cover interface orientation, Editable Poly levels, modifier-stack logic, topology, UV checker logic and the Max → Substance → UE5 pipeline.
- Concept diagrams are explicitly labelled **NOT 3DS MAX UI**.
- A small number of real interface references are version-labelled rather than pretending an older screenshot is current.
- Current Autodesk documentation is linked as the canonical interface/tool reference.
- Current Epic UE5.8 documentation is linked as the canonical FBX/Static Mesh pipeline reference.
- `3DS-MAX-CAPTURE-LIST.md` records the exact current college-interface screenshots worth capturing later; these can replace older orientation references without rewriting the lessons.

## Navigation / integration

- New direct sidebar entry: **3D Modelling Studio**.
- Designer Studio now contains a prominent bridge into 3D Modelling.
- Home keeps the existing four main destinations rather than adding a fifth giant card; Design now signals the modelling route.
- Global search now finds modelling lessons, Build X projects and Fix This Model clinics.
- My Progress includes 3D Modelling completion.
- XP integrates with modelling: +100 lesson, +250 Build X, +75 repair clinic.
- New badges: **First Mesh**, **Mesh Doctor**, **Game Asset Ready**.

## Current reference grounding

The course is grounded against current Autodesk 3ds Max help/learning and current Epic Unreal Engine 5.8 FBX documentation. Older screenshots are never treated as the source of truth when the current UI differs.

## Deployment

No Supabase schema change is required. Existing accounts, classes, projects, evidence, tutorials, news and teacher functionality remain on the existing database.
