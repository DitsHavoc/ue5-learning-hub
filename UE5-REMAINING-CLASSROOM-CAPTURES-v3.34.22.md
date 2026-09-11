# UE5 Learning Hub v3.34.22 — Remaining Classroom Captures

## Required teacher capture workload: **0**

The old v3.34.14 list of **76** teacher captures was intentionally ultra-strict: it treated any Hub-specific value, variable name or arrangement as requiring a matching classroom screenshot even when Epic already supplied an accurate UE5.6–5.8 workflow image or Blueprint example.

v3.34.22 changes that rule. A classroom screenshot is now required only when the absence of that exact image would make the instruction materially unclear or misleading. **None of the remaining lessons meet that threshold.**

### Current rule

1. Use an exact current Epic UE5.8 visual when available.
2. Use materially accurate UE5.6/5.7 official imagery when the workflow has not changed.
3. Use the 39 official Epic paste assists for graph topology where they are the stronger teaching aid.
4. Use Epic sample/template imagery or an authentic existing classroom capture where useful.
5. Keep Hub-specific values in the written step when the official image uses different values.
6. Do **not** manufacture a bespoke screenshot merely because the Hub says `250`, `1200`, `PlayerSlot`, `TrainingSword`, etc.
7. Leave a step text-only when an extra image would not materially improve learning.

## What changed from the old 76

### Core Lessons — old 8 → required 0

- Gameplay Framework now uses the supplied current classroom **Maps & Modes → Game Instance Class** screenshot as a location reference. The screenshot does not pretend to show `GI_Learning`; the Hub text tells students what to select.
- Timelines & Lerp uses current Epic Designer door logic plus the existing Timeline UI images.
- Data Tables uses authentic classroom Data Table editor captures; exact `TrainingSword` / `HeavySword` / `Medkit` values remain in text.
- AI uses current Epic navigation, controller, Move To and Designer enemy imagery. The Hub-specific 600 cm patrol spacing and 2.0 s wait remain in text.
- References/Casting and SaveGame no longer demand a bespoke graph solely to mirror variable names. Their written recipes, official reference material and existing Blueprint recognition visuals are sufficient.

### Programming / Quick Tutorials — old 49 → required 0

The practical recipes now use a mix of:

- existing exact official UE5 screenshots;
- current Designer 02–11 tutorial imagery;
- **39 Epic paste assists** embedded into the relevant learning/recipe context;
- official node/UI recognition visuals;
- written Hub values beside the official image when values differ.

A screenshot showing exactly `DashStrength = 1200`, `AttackRange = 200`, `Extinction Scale = 1.5`, etc. is now treated as optional polish rather than a teacher task.

### Building Blocks — old 5 → required 0

- Assets/Naming uses the current Epic Content Browser/Blueprint creation visual plus the Hub prefix cheat sheet.
- Gameplay Tags now uses current Epic UE5.8 Gameplay Tags documentation.
- Niagara already uses the official Niagara Editor visual and the relevant spawn workflow elsewhere in the Hub.
- SaveGame and Audio remain clear as short hands-on recognition exercises with current official documentation; no exact bespoke graph is required.

### Designer Studio — old 14 → required 0

The previous technical capture list is covered by current first-party Epic material:

- Artist 03 — Materials & Material Instances
- Artist 04 — Expanded Material Instances / wet surface logic
- Add Post Process Volumes — Infinite Extent, exposure and grading workflow
- Landscape Quick Start — create, sculpt, Flatten/Smooth, Target Layers and Layer Info
- Foliage Mode — Paint, density, radius and scale variation
- Static Mesh Editor / Nanite documentation — LOD and mesh settings
- Shader Complexity / transparency optimisation documentation
- Triggering Sequences from Gameplay — Blueprint-driven Level Sequence playback/control
- MetaSounds Quick Start — Epic's actual ambient wind MetaSound workflow
- Reference Viewer — dependency inspection for project cleanup

## Optional captures — only if they occur naturally during teaching

These are *nice-to-have classroom matches*, not jobs to create in advance:

- exact `BP_Lamp` / `BP_Switch` reference graph;
- exact `BP_PlayerSave` graph using `PlayerSlot`;
- exact `ST_ItemData` rows using the Hub item names;
- exact two-point `Patrol_A ↔ Patrol_B` graph;
- any student-friendly finished graph that is cleaner than the official reference;
- before/after project-specific examples that emerge during class.

If one of these is already open while teaching, capture it. Otherwise, **do not build a project just to manufacture a picture.**

## Bottom line

**New screenshots Dits needs to make before launch: 0.**

The Hub can improve organically with authentic classroom captures over time, but imagery is no longer a launch blocker or a 76-image homework list.
