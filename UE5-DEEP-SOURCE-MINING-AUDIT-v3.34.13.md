# UE5 Learning Hub v3.34.13 — Exact Trace Source Alignment Audit

This pass continues the strict UE5 imagery rule: an instructional image must help a student locate, build, configure or recognise the thing described in the adjacent step. A source is not counted as a replacement merely because it discusses the same feature.

## Result

- v3.34.12 genuine teacher captures: **80**
- v3.34.13 genuine teacher captures: **77**
- Reduction this pass: **3**
- Reduction from original audit: **211 → 77** (**134 fewer**, approximately **63.5%** reduction)

Breakdown:

- Core Lessons: **8**
- Programming / Quick Tutorials: **50**
- Building Block recognition captures: **5**
- Design Studio technical UE captures: **14**
- Building Block diagrams: **7**, not teacher captures

## Exact current Epic UE5.8 replacements added in v3.34.13

### Line Trace maths and Hit Result flow

**Epic source:** Using a Single Line Trace (Raycast) by Channel in Unreal Engine 5.8
`https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine`

The current Epic workflow provides exact Blueprint visuals for:

- camera/world-location based trace construction
- Forward Vector multiplied by trace distance
- Line Trace By Channel Start/End wiring
- Break Hit Result → Hit Actor → actor-name print flow
- the trace running with debug drawing

**Epic source:** Flow Control in Unreal Engine 5.8
`https://dev.epicgames.com/documentation/en-us/unreal-engine/flow-control-in-unreal-engine`

The current Branch visual is used beside the trace Return Value decision. Hub-specific ranges such as 300 cm and 10000 cm remain explicit in the written recipe rather than being falsely presented as values shown in Epic's example.

**Teacher captures removed:**

- `UE5-lesson-traces-logic.png`
- `UE5-tutorial-line-trace-interact-logic.png`
- `UE5-tutorial-line-trace-gun-logic.png`

The two Quick Tutorials were split into separate Branch and Break Hit Result recipe steps so each official image sits beside the operation it actually teaches.

## Deeper official sample mining completed

### Content Examples

**Epic source:** Content Examples Sample Project for Unreal Engine 5.8
`https://dev.epicgames.com/documentation/unreal-engine/content-examples-sample-project-for-unreal-engine`

Epic explicitly describes the project as a collection of editable/deconstructable examples and lists useful maps including Blueprints, Landscapes, Niagara and other feature areas. This remains a high-value **EPIC SAMPLE CAPTURE** source, particularly when a web documentation page explains a workflow but does not show the exact editor state.

### Your First Hour in Unreal Engine

**Epic source:** Your First Hour in Unreal Engine 5.8
`https://dev.epicgames.com/documentation/unreal-engine/first-hour-in-unreal-engine`

The current course covers templates, level creation, Player Blueprint work, a flashlight, Blueprint pickup, HUD/UI and packaging. It is useful for classroom reference, but this pass did not treat course coverage alone as an exact screenshot replacement for remaining custom Hub graphs.

### Lyra

**Epic source:** Lyra Sample Game in Unreal Engine 5.8
`https://dev.epicgames.com/documentation/unreal-engine/lyra-sample-game-in-unreal-engine`

Lyra remains useful for UMG, Niagara, weapon-system and modular-framework inspection. No remaining v3.34.12 capture was removed solely because Lyra contains a related system; the exact missing Hub state must still be proved before reclassification.

### Game Animation Sample

**Epic source:** Game Animation Sample Project in Unreal Engine 5.8
`https://dev.epicgames.com/documentation/unreal-engine/game-animation-sample-project-in-unreal-engine`

Epic describes the project as a modern animation system intended to be observed, deconstructed and learned from. The current remaining capture list is not dominated by animation-state examples, so no further capture was removed in this pass.

### Stack O Bot

The currently indexed official Stack O Bot page is labelled UE5.7 rather than UE5.8. Under the Hub's current-source rule it is retained as a research lead only, not promoted to an exact current visual replacement in this release.

## Current UE5.8 pages checked but not falsely promoted

The pass also checked current official documentation for Material parameters, Post Process Volumes, Foliage, Nanite mesh settings, Material Editor Stats and Asset Redirectors. These pages strongly confirm the workflows, but where the usable current screenshot URL/state could not be proved precisely enough for the adjacent Hub step, the existing teacher capture remains.

That deliberately leaves all **14 Design Studio technical captures** in place for v3.34.13.

## Remaining rule

Do not remove a capture merely because an API/property page proves a node or setting exists. Use **OFFICIAL EPIC IMAGE** only when the visual itself teaches the required state; otherwise prefer **EPIC SAMPLE CAPTURE**, **ORIGINAL DIAGRAM**, **NO IMAGE REQUIRED**, or retain **TEACHER CAPTURE REQUIRED**.
