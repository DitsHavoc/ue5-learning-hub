# UE5 Learning Hub v3.34.12 — Deep Official Source Mining Audit

This pass continues the strict UE5 imagery rule: an instructional image must help a student locate, build, configure or recognise the thing described in the adjacent step. Official imagery is not counted as a replacement merely because it mentions the same topic.

## Result

- v3.34.11 genuine teacher captures: **90**
- v3.34.12 genuine teacher captures: **80**
- Reduction this pass: **10**
- Reduction from original audit: **211 → 80** (**131 fewer**, approximately **62%** reduction)

Breakdown:

- Core Lessons: **9**
- Programming / Quick Tutorials: **52**
- Building Block recognition captures: **5**
- Design Studio technical UE captures: **14**
- Building Block diagrams: **7**, not teacher captures

## Official Epic replacements added in v3.34.12

### Blueprint Classes & Instances

**Epic source:** Blueprint Variables in Unreal Engine 5.8
`https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine`

The official placed-Blueprint Details example shows an exposed Instance Editable variable on a level instance. The Hub caption supplies the exact class-instance values `Block_A = A`, `Block_B = B`, `Block_C = C`.

**Teacher capture removed:** `UE5-lesson-blueprint-classes-setup.png`

### Events & Execution

The lesson already contains current Epic visuals for Blueprint creation, BeginPlay, node wiring and overlap events. The only remaining requested capture was a third Print String, which is simply repetition of the already illustrated operation; the Hub text supplies `03 Third` and Duration `2.0`.

**Teacher capture removed:** `UE5-lesson-events-logic.png`

### Branches

The lesson already contains an official UE5.8 Branch example and variable workflow. Exact Health comparison values and Print String outputs remain explicit in the Hub text.

**Teacher capture removed:** `UE5-lesson-branches-logic.png`

### Functions & Macros

The lesson already contains official current Function creation and Function Details visuals. Adding Print String inside the function and making a second call are repeatable operations already taught elsewhere; exact function/message names remain in text.

**Teacher capture removed:** `UE5-lesson-functions-logic.png`

### Interfaces & Event Dispatchers

**Epic source:** Implementing Blueprint Interfaces in Unreal Engine 5.8
`https://dev.epicgames.com/documentation/en-us/unreal-engine/implementing-blueprint-interfaces-in-unreal-engine`

Added exact official visuals for:

- Class Settings → Implemented Interfaces
- opening the implemented Interface function graph
- implementing the Interface function graph

The Hub caption/text retains the exact `BPI_Interact`, `Interact` and `Door interacted` names.

**Teacher capture removed:** `UE5-lesson-interfaces-dispatchers-logic.png`

### Collision & Overlaps

**Epic source:** Blueprint Quick Start Guide for Unreal Engine 5.8
`https://dev.epicgames.com/documentation/en-us/unreal-engine/quick-start-guide-for-blueprints-visual-scripting-in-unreal-engine`

Added official editor visuals for Box Collision sizing and Other Actor object comparison. Epic's example values differ, so the caption explicitly tells students to use the Hub values `X 100, Y 100, Z 100` and compare against `Get Player Character`.

**Teacher capture removed:** `UE5-lesson-collision-logic.png`

### UMG & Gameplay UI

Existing official UE5.8 UMG visuals already show Widget creation, HUD layout, Progress Bars, variables, functions and Create Widget / Add to Viewport. The exact Hub layout values and `CurrentHealth / MaxHealth` calculation remain written beside those visuals.

**Teacher capture removed:** `UE5-lesson-ui-ui.png`

### Animation Blueprints & State Machines

**Epic source:** How to Get Animation Variables in Animation Blueprints in Unreal Engine 5.8
`https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-get-animation-variables-in-animation-blueprints-in-unreal-engine`

Added exact official editor visuals for:

- the full Animation Blueprint Event Graph update pattern
- `Velocity → Vector Length XY → Speed`
- `Is Falling` for the in-air Boolean

Existing official State Machine and transition visuals remain. The Hub-specific transition threshold `Speed > 5` remains in the written recipe.

**Teacher capture removed:** `UE5-lesson-animation-logic.png`

### Dash / Launch Character

**Epic source:** Overview of How to Modify the Navigation Mesh in Unreal Engine 5.8
`https://dev.epicgames.com/documentation/en-us/unreal-engine/overview-of-how-to-modify-the-navigation-mesh-in-unreal-engine`

Added an official current `Launch Character` node/pin screenshot. The pictured Epic example uses different override settings, so the Hub caption explicitly requires **XY Override ON, Z Override OFF** for this dash.

The custom forward-vector × 1200 and `CanDash` cooldown graph remains a teacher capture.

**Teacher capture removed:** `UE5-tutorial-dash-setup.png`

### Data Assets Building Block

**Epic source:** Data Assets in Unreal Engine 5.8
`https://dev.epicgames.com/documentation/en-us/unreal-engine/data-assets-in-unreal-engine`

Added an official current Data Assets recognition visual. The Hub recipe still supplies the exact `PDA_ItemData`, `DisplayName`, `Cost`, `Training Item` and `100` values.

**Teacher capture removed:** `UE5-block-data-assets.png`

## Sources mined but not falsely counted as image replacements

The following official Epic resources remain valuable for locating working examples and reducing setup effort, but a page/sample is not treated as a screenshot replacement unless it actually provides the visual state a student needs:

- Content Examples sample project
- Samples and Tutorials hub
- Your First Hour in Unreal Engine
- Your First Game in Unreal Engine
- Blueprint Communications documentation
- Navigation / AI examples
- Character / Character Movement API references
- UE5 templates and variants

Content Examples is especially useful for stubborn future captures because the examples can be opened and deconstructed rather than requiring a teacher to build every demonstration from scratch.

## Remaining rule

Do not remove a capture merely because an API page proves a node/property exists. If there is no useful editor image and the Hub requires a custom graph/configuration, keep the teacher capture.
