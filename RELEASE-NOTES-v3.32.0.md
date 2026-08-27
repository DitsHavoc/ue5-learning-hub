# UE5 Learning Hub v3.32.0 — Unreal Learning Path Redesign

**Build date:** 26 August 2026  
**Database migration required:** No

## Why this release exists

The Unreal side had strong lessons and tutorials, but the learner was still expected to recognise terms such as `IA_`, `IMC_`, `BPI_`, Struct, Data Table, AnimBP, Skeletal Mesh and NavMesh while following a practical guide.

v3.32 separates **learning the language of Unreal** from **building a mechanic**.

The new student model is:

1. **Building Blocks** — learn what an Unreal concept means in 3–9 minutes.
2. **Core System Lessons** — understand a system properly and practise it in depth.
3. **Quick Tutorials** — build an exact mechanic using the Building Blocks.
4. **Challenges & Projects** — combine the ideas with less support.

## Building Blocks

Added **39 Unreal Building Blocks** organised into five shelves:

- Start Here — Unreal Basics
- Blueprint Basics
- Communication & Data
- Characters & Animation
- World, UI & AI

Only **13** are marked **CORE**. The other 26 are deliberately **COMMON** or **LATER** so students are not told to learn the whole engine before making anything.

Each Building Block contains:

- a 30-second plain-English explanation;
- a memorable relationship / prefix where useful;
- an optional cheat sheet for dense topics;
- one tiny prescriptive Unreal exercise;
- a visible check that proves the idea;
- links back into related Core Lessons and Quick Tutorials;
- a local/cloud completion tick worth 25 XP.

## Important coverage

The new layer includes the concepts repeatedly needed by student tutorials, including:

- asset prefixes and common Unreal asset types;
- Actor vs Component;
- different Blueprint/framework types;
- transforms and Unreal units;
- Static Mesh vs Skeletal Mesh;
- Compile / Save / Play;
- Events and execution wires;
- variables, types, Get and Set;
- Enhanced Input: Input Actions, Mapping Contexts and trigger states;
- Branches / Switches / Select;
- Functions / Custom Events / Macros;
- Object Reference vs Class Reference;
- Casting;
- debugging;
- Spawn / Destroy;
- Timers vs Delay vs Tick;
- Construction Script;
- parent / child Blueprints;
- Blueprint Interfaces;
- Event Dispatchers;
- Arrays / Sets / Maps;
- Enums;
- Structs;
- Data Tables;
- SaveGame;
- Gameplay Tags and Data Assets as later concepts;
- Pawn / Character / Controller;
- Skeletal Mesh / Skeleton / Bones;
- Animation Sequences / Animation Blueprints;
- State Machines / Blend Spaces;
- Montages / Notifies / Sockets;
- Collision / presets / channels;
- Traces / Hit Results;
- UMG / Widget Blueprints;
- NavMesh;
- AIController / Move To;
- Blackboard / Behaviour Tree.

## Tutorial integration

Programming Quick Tutorials now display **YOU'RE ABOUT TO USE** before the build.

The student can see which Building Blocks the tutorial uses, which ones are already learned, and open an unfamiliar concept without being prevented from starting the tutorial.

This is intentionally **not** a prerequisite wall.

## Navigation simplification

The sidebar no longer lists all six Core System paths at once.

The main Unreal area is now **Unreal Learning**, with the deeper lesson paths contained inside it. This reduces the number of simultaneous choices while preserving all existing 20 Core Lessons, Chapter Builds, tutorials, revision and progress.

## Technical accuracy check

The high-risk version-sensitive concepts were checked against current Epic Unreal Engine 5.8 documentation during this pass, including Enhanced Input trigger states, Gameplay Framework relationships, Blueprint Interfaces, Data Tables, NavMesh visualisation and Animation Blueprint / State Machine / Blend Space terminology.

## Progress / cloud

Building Block completion uses the existing `lesson_progress` mechanism with IDs prefixed `block:`. No schema change or migration is required.

## Regression intent

No existing Core Lesson, Quick Tutorial, Designer Studio module, 3D Modelling lesson, Sculpt exercise, Project, auth feature, evidence workflow, class feature, search feature or easter egg was intentionally removed.

## Validation

- Production JavaScript and all data files pass `node --check`.
- Building Block data validated at **39 blocks**: **13 Core / 24 Common / 2 Later** across **5 shelves**.
- All Building Block `requires` links resolve to real blocks.
- Existing Unreal content remains **20 Core Lessons** and **47 Programming Quick Tutorials**.
- Every one of the 47 Programming Quick Tutorials resolves to at least one relevant Building Block for the **YOU'RE ABOUT TO USE** strip.
- Static/local reference scan checked **571 references / 113 unique local files** with **0 missing**.
- Local HTTP smoke test returned **200** for the app shell, core scripts, Building Block data, course data, tutorial data and CSS.
- CSS brace count is balanced.
- Automated Chromium visual capture is not claimed for this release because the headless browser environment is still hanging during startup; deploy-time visual inspection remains recommended.
