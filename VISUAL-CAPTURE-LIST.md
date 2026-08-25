# Authentic UE5 Screenshot Capture List

**Real UE screenshot first → labelled explanation → concept diagram second.**

The SVG diagrams remain useful for explaining ideas, but the site now labels them **CONCEPT DIAGRAM — NOT UE UI** so students do not mistake them for Unreal’s actual interface.

Existing screenshots extracted from the supplied Blueprint book are retained as temporary reference material and labelled **UE5.0-era**. For a public long-term release, replace those with teacher-owned/current UE screenshots where possible.

Place future captures in `assets/ue5/` using these names.

| Lesson | Suggested filename | Capture |
|---|---|---|
| `editor` | `editor-main-window.webp` | Level Editor showing Viewport, Outliner, Details and Content Drawer. |
| `actors-components` | `actors-components-panel.webp` | Actor Blueprint Editor with Components hierarchy visible and one Component selected. |
| `blueprint-classes` | `class-instance-details.webp` | One Blueprint Class plus a placed instance showing an Instance Editable variable in Details. |
| `events` | `events-execution.webp` | Event BeginPlay or a clear gameplay Event with white execution flow and Print String. |
| `variables` | `variables-get-set.webp` | Variables panel plus a simple Get and Set example in the Event Graph. |
| `branches` | `branch-node-real.webp` | Actual UE5 Branch node wired to a Boolean, with True and False outputs visible. |
| `functions` | `function-real.webp` | Function graph showing inputs/outputs plus a Function call in the Event Graph. |
| `framework` | `gameplay-framework-settings.webp` | Maps & Modes / GameMode defaults or a clean view showing active framework Classes. |
| `references-casting` | `casting-real.webp` | Actual Cast To node with source reference, success output and Cast Failed visible. |
| `interfaces-dispatchers` | `interface-dispatcher-real.webp` | Blueprint Interface implementation/message and/or Event Dispatcher Details/Bind example. |
| `collision` | `collision-details-real.webp` | Collision Presets / Collision Responses in the Details panel. |
| `traces` | `line-trace-real.webp` | Line Trace By Channel node plus in-game Draw Debug trace if possible. |
| `timelines` | `timeline-editor-real.webp` | Timeline editor with Float track/keyframes and Event Graph Play/Reverse/Update. |
| `ui` | `umg-designer-real.webp` | Widget Blueprint Designer showing Anchors plus Graph/Create Widget if possible. |
| `savegame` | `savegame-real.webp` | SaveGame Blueprint and Create/Save/Load Game to Slot nodes. |
| `data` | `datatable-real.webp` | Struct asset plus a Data Table using that Struct, with a row visible. |
| `ai` | `ai-behaviour-tree-real.webp` | Behaviour Tree + Blackboard debug view; ideally also a separate NavMesh capture. |
| `animation` | `animation-state-machine-real.webp` | Animation Blueprint State Machine/transition rule or locomotion Blend Space. |
| `practice` | `responsibility-before-after.webp` | Real before/after Blueprint refactor showing behaviour moved to the owning Blueprint. |
| `complexity` | `refactor-real.webp` | A real cleaned Blueprint graph with Functions, Comments, Categories and readable names. |