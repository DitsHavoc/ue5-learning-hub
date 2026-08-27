# Unreal Screenshot Capture List — v3.33

These are the remaining Unreal visuals where an official Epic documentation image is not exact enough for the Hub's instruction. **Do not hunt for substitutes.** A missing image is preferred to a misleading one.

## How to capture

- Use the same Unreal Engine version/environment students will see in class where practical.
- Raw screenshots are fine — **no cropping, arrows or annotation needed**.
- Native monitor resolution is ideal; 1920×1080 or higher is plenty.
- Keep the relevant Blueprint node, Details setting or editor panel readable.
- Avoid student names, personal folders, email addresses and unrelated project content.
- Save with the filename shown below. The Hub pass can crop, caption and place them later.

## Priority A — most useful classroom captures

| File | Capture exactly this | Why we need our own |
|---|---|---|
| `UE-CAP-01-Jump-Max-Count.png` | Character Blueprint / Character settings showing **Jump Max Count = 2** | Exact double-jump teaching value. |
| `UE-CAP-02-Max-Walk-Speed.png` | Character Movement component showing **Max Walk Speed** | Exact sprint setup is clearer than a generic movement screenshot. |
| `UE-CAP-03-Crouch-Settings.png` | Character Movement settings used to enable/configure crouch | Current UI/settings need to match the student task. |
| `UE-CAP-04-Launch-Character-Dash.png` | The Hub's simple **Launch Character** dash Blueprint chain | This is our chosen beginner implementation, not just an Unreal feature overview. |
| `UE-CAP-05-Damage-Loop.png` | **Apply Damage → Event AnyDamage → reduce Health** | One image can explain the complete damage loop we teach. |
| `UE-CAP-06-Spawn-Actor.png` | **Spawn Actor From Class** with Class, Spawn Transform and collision handling visible | Exact node pins/settings matter. |
| `UE-CAP-07-Sphere-Trace.png` | **Sphere Trace By Channel** with Radius and Draw Debug visible | A Line Trace image is not an honest substitute for the melee trace tutorial. |
| `UE-CAP-08-Save-Game.png` | **Create Save Game Object → set values → Save Game To Slot** | Epic's high-level SaveGame imagery does not show our exact beginner chain. |
| `UE-CAP-09-Load-Game.png` | **Load Game From Slot → Cast to custom SaveGame → read values** | Exact continuation of the save/load recipe. |
| `UE-CAP-10-Play-Sound.png` | **Play Sound 2D** and/or **Play Sound at Location** node in a clean Blueprint | Current official docs do not give a useful exact still for this step. |
| `UE-CAP-11-Niagara-Spawn.png` | **Spawn System at Location** with System and Location pins visible | Exact Blueprint use is more useful than a generic Niagara editor image. |
| `UE-CAP-12-AI-Perception-Sight.png` | AI Perception component Details showing Sight config: radius, lose-sight radius and peripheral vision | Students need to see the actual fields. |
| `UE-CAP-13-Perception-Updated.png` | **On Target Perception Updated** / Successfully Sensed Blueprint logic | Exact event flow is not shown cleanly in the official overview image. |
| `UE-CAP-14-HUD-Health-Bar.png` | UMG Progress Bar plus Blueprint flow setting **Percent = Health / MaxHealth** | Connects Designer and Blueprint views in one concrete use. |
| `UE-CAP-15-Pause-Menu-Input.png` | **Set Game Paused**, **Set Show Mouse Cursor**, and **Set Input Mode** chain | Exact pause-menu setup is much clearer as our own capture. |
| `UE-CAP-16-Post-Process-Saturation.png` | Post Process Volume Details with the colour/saturation setting used by the tutorial | Needs to match the exact property students change. |
| `UE-CAP-17-Spring-Arm-Camera.png` | Character Components + Spring Arm/Camera Details used in the camera lesson | Current class hierarchy/settings are more useful than generic camera imagery. |
| `UE-CAP-18-Projectile-Movement.png` | Projectile Blueprint showing Projectile Movement and the spawn/fire chain | Exact mechanic rather than generic spawning reference. |
| `UE-CAP-19-Timer-Countdown.png` | **Set Timer by Event** repeating countdown plus clear/stop logic | Shows the specific alternative to Tick that we teach. |
| `UE-CAP-20-Random-Spawner.png` | Array/Class Reference based random selection feeding **Spawn Actor From Class** | This is a bespoke combination of several concepts. |

## Priority B — useful later

- Material Instance parameter editing in the exact current classroom workflow.
- Animation Montage + Anim Notify used in a real action/melee example.
- Socket creation and attaching an item/weapon to a skeletal mesh.
- Behaviour Tree task/service close-up matching the Hub's first chase/patrol tree.
- Blueprint debugging: breakpoint hit, Watch value, execution highlighting.
- Construction Script example that visibly changes a placed Actor in the editor.
- Child Blueprint inheritance example with an overridden default value.
- Local vs World transform example in the Details/Viewport UI.

## Already covered — no capture needed unless the UI changes

The v3.33 pass now has precise official/current visuals for Enhanced Input, variables, components, branches, functions, casting, interfaces, dispatchers, collision, line traces, timelines, UMG creation/Add to Viewport, Data Tables, NavMesh, AI Move To, Blackboard/Behaviour Tree context, Animation State Machines, Camera Shake and Exponential/Volumetric Fog.
