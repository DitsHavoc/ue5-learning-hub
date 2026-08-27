# Unreal Screenshot Capture List — v3.33

This list contains the remaining visuals where an official Epic UE5.8 image or the Hub's existing classroom screenshots do **not** show the exact thing the student is being asked to do. A blank step is intentional until one of these captures exists.

## Capture rules

- Use the same current Unreal Engine build/environment students see in class where practical.
- Raw PNG screenshots are ideal. 1920×1080 or higher is plenty.
- Keep the relevant Blueprint node, Details setting or editor panel readable.
- Do not include student names, personal folders, email addresses or unrelated project content.
- Do not decorate the screenshot. The Hub can crop/caption it later.
- If one screenshot genuinely shows two adjacent actions clearly, one capture can serve both. Do not force reuse across different mechanics.

## Priority A — core lesson accuracy

| File | Capture exactly this | Hub use |
|---|---|---|
| `UE-CAP-01-Editor-Practice.png` | Third Person practice level with **Cube_Centre, Cube_Left, Cube_Right** visible in the Outliner; one cube selected; Details → Transform readable | Editor lesson: rename/select/Transform/frame workflow. The old “panel close-up” does not contain the Outliner and has been removed from the practical step. |
| `UE-CAP-02-Print-String-Execution.png` | `Event BeginPlay → Print String 01 BeginPlay → Print String 02 Second → Print String 03 Third` with white execution wires clear | Events lesson. Existing classroom execution images use different nodes, so they remain concept references only. |
| `UE-CAP-03-Variable-Type-Defaults.png` | Variables panel/Details showing a Float `Health = 100` and Boolean `IsActive = True` clearly | Variables lesson: exact type/default setup. |
| `UE-CAP-04-Health-Branch.png` | `Get Health → Float <= 0 → Branch`, with the Boolean wired to Condition | Branches lesson. The old classroom Branch screenshot uses `IsExtracted`, so it is no longer used beside this step. |
| `UE-CAP-05-Trigger-Collision.png` | Box Collision Details showing **Collision Preset = Trigger** and **Generate Overlap Events = enabled** | Collision lesson. Epic's collision response examples are good concept references but do not show this exact setting combination. |
| `UE-CAP-06-Item-DataTable.png` | `DT_ItemData` open with rows **TrainingSword, HeavySword, Medkit** and the lesson fields/values visible | Data lesson + Struct/Data Table tutorial. Existing classroom Data Table contains unrelated trait data, so it is no longer used beside these steps. |
| `UE-CAP-07-Animation-Transitions.png` | Locomotion State Machine and readable transition rules using **Speed** and **IsInAir** | Animation lesson. Epic's State Machine images remain explanatory references, not substitutes for the Hub's exact rules. |
| `UE-CAP-08-Camera-Shake-Values.png` | Camera Shake asset showing the Hub's first teaching values: **Duration 0.15, Location Amplitude 2, Rotation Amplitude 1.5, Frequency 15** | Camera Shake tutorial. Epic shows the editor, but not these exact teaching values. |

## Priority B — high-value Quick Tutorial captures

| File | Capture exactly this |
|---|---|
| `UE-CAP-09-Jump-Max-Count.png` | Character settings showing **Jump Max Count = 2**. |
| `UE-CAP-10-Max-Walk-Speed.png` | Character Movement showing **Max Walk Speed** used by the sprint recipe. |
| `UE-CAP-11-Crouch-Settings.png` | Character Movement settings used to enable/configure crouch. |
| `UE-CAP-12-Launch-Character-Dash.png` | The Hub's beginner **Launch Character** dash chain. |
| `UE-CAP-13-Damage-Loop.png` | **Apply Damage → Event AnyDamage → reduce Health**. |
| `UE-CAP-14-Spawn-Actor.png` | **Spawn Actor From Class** with Class, Spawn Transform and collision handling visible. |
| `UE-CAP-15-Sphere-Trace.png` | **Sphere Trace By Channel** with Radius and Draw Debug visible. A Line Trace image is not a substitute. |
| `UE-CAP-16-Save-Game.png` | **Create Save Game Object → set values → Save Game To Slot**. |
| `UE-CAP-17-Load-Game.png` | **Load Game From Slot → Cast to custom SaveGame → read values**. |
| `UE-CAP-18-Play-Sound.png` | **Play Sound 2D** and/or **Play Sound at Location** in a clean Blueprint. |
| `UE-CAP-19-Niagara-Spawn.png` | **Spawn System at Location** with System and Location pins visible. |
| `UE-CAP-20-AI-Perception-Sight.png` | AI Perception Details showing Sight radius, lose-sight radius and peripheral vision. |
| `UE-CAP-21-Perception-Updated.png` | **On Target Perception Updated** / Successfully Sensed logic. |
| `UE-CAP-22-HUD-Health-Bar.png` | UMG Progress Bar plus Blueprint flow setting **Percent = Health / MaxHealth**. |
| `UE-CAP-23-Pause-Menu-Input.png` | **Set Game Paused**, mouse cursor and **Set Input Mode** chain. |
| `UE-CAP-24-Post-Process-Saturation.png` | Post Process Volume Details with the exact saturation/property used by the tutorial. |
| `UE-CAP-25-Spring-Arm-Camera.png` | Character Components + Spring Arm/Camera Details used by the camera tutorial. |
| `UE-CAP-26-Projectile-Movement.png` | Projectile Blueprint showing Projectile Movement and the spawn/fire chain. |
| `UE-CAP-27-Timer-Countdown.png` | **Set Timer by Event** repeating countdown plus clear/stop logic. |
| `UE-CAP-28-Random-Spawner.png` | Array/Class Reference random choice feeding **Spawn Actor From Class**. |

## Priority C — useful polish captures

- Material Instance parameter editing in the exact classroom workflow.
- Animation Montage + Anim Notify in a real action/melee example.
- Socket creation and attaching an item/weapon to a Skeletal Mesh.
- Behaviour Tree task/service close-up matching the Hub's first chase/patrol tree.
- Blueprint debugging: breakpoint hit, Watch value and execution highlighting.
- Construction Script visibly changing a placed Actor in the editor.
- Child Blueprint inheritance with an overridden default value.
- Local vs World transform comparison in the Details/Viewport UI.

## Already exact enough — do not recapture unless UE changes

Current official/current references are already a good match for: Components/Add Component, variable Get/Set, Instance Editable, Branch node anatomy, Functions, Casting, Blueprint Interfaces, Event Dispatchers, Enhanced Input IA/IMC, Line Trace construction/debug, Timeline Editor/Float Track, Widget Blueprint creation/Add to Viewport, Data Table Row Type, NavMesh, AI Move To, Blackboard/Behaviour Tree concepts, Camera Shake asset creation, and Exponential/Volumetric Fog.
