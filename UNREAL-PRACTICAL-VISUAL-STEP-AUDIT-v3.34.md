# Unreal Practical Visual Step Audit — v3.34 FINAL

Every prescriptive Core Lesson and Quick Tutorial step is classified against the final v3.34 data. **EXACT** means the visual attached beside that step has been verified as an exact current Epic/local match for the action shown. **CAPTURE** means a classroom screenshot would materially help and no exact current image is attached. **NO IMAGE NEEDED** is reserved for proof/test/reflection steps where another screenshot would be decorative.

## Core Lesson: Unreal Editor: Find, Select & Control

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Open Games → Third Person and create/open the project Learning_Practice. Wait for the default Third Person map to finish loading. | CAPTURE | 0 |
| 2 | Press Play once. Move the character, then press Esc. If this does not work, fix the project/map before continuing. | NO IMAGE NEEDED | 0 |
| 3 | Use Add (+) → Shapes → Cube and place three cubes. Do not resize them by dragging. | CAPTURE | 0 |
| 4 | In the Outliner rename them exactly: Cube_Centre, Cube_Left, Cube_Right. | CAPTURE | 0 |
| 5 | Select Cube_Centre → Details → Transform and enter Location X 0, Y 0, Z 50. Repeat with Cube_Left at 0,-200,50 and Cube_Right at 0,200,50. | CAPTURE | 0 |
| 6 | Select Cube_Right and set Rotation Z/Yaw to 45°. Leave X and Y rotation at 0°. | CAPTURE | 0 |
| 7 | Click each Outliner name and prove the matching cube highlights. Press F once for each selected Actor and confirm the camera frames the matching cube. | EXACT | 1 |
| 8 | Content Drawer → create folder Learning. Use File → Save All. Do not continue with unsaved changes. | CAPTURE | 0 |

## Core Lesson: Actors & Components: Build Objects Properly

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Content Drawer → Learning → right-click → Blueprint Class → Actor. Name it BP_PracticeBeacon and open it. | CAPTURE | 0 |
| 2 | Components → Add → Static Mesh. Rename it SM_Body. In Details → Static Mesh choose the basic Cube mesh. | EXACT | 1 |
| 3 | Components → Add → Point Light. Set Intensity to 2500 and Attenuation Radius to 350. Keep the light centred for now. | CAPTURE | 0 |
| 4 | Components → Add → Box Collision. Set Box Extent X 75, Y 75, Z 75. | CAPTURE | 0 |
| 5 | In the Components tree make sure SM_Body, PointLight and Box are components of the same Actor. Do not create separate level Actors for them. | CAPTURE | 0 |
| 6 | Compile. Fix every compile error before leaving the Blueprint. | NO IMAGE NEEDED | 0 |
| 7 | Drag BP_PracticeBeacon into the level and set Location X 0, Y 0, Z 100. | CAPTURE | 0 |
| 8 | Press Play. View the beacon from two different angles and confirm the mesh and light remain together as one reusable Actor. | NO IMAGE NEEDED | 0 |

## Core Lesson: Blueprint Classes & Instances: Reuse Without Duplication

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create Actor Blueprint BP_ColourBlock in Learning and open it. | CAPTURE | 0 |
| 2 | Add Static Mesh → rename SM_Block → choose Cube → Compile. | CAPTURE | 0 |
| 3 | Drag BP_ColourBlock into the level three times. Rename the instances Block_A, Block_B and Block_C. | CAPTURE | 0 |
| 4 | Inside BP_ColourBlock create variable BlockLabel. Set type to String, default A, tick Instance Editable, then Compile. | EXACT | 1 |
| 5 | Return to the level. Select Block_A and set BlockLabel to A; Block_B to B; Block_C to C. | CAPTURE | 0 |
| 6 | Move the three instances to visibly different positions. Do not duplicate the Blueprint asset itself. | CAPTURE | 0 |
| 7 | Open BP_ColourBlock, add one Point Light component, set Intensity 1000, Compile. | CAPTURE | 0 |
| 8 | Return to the level and prove all three instances gained the light while their BlockLabel values stayed different. | NO IMAGE NEEDED | 0 |

## Core Lesson: Events & Execution: Make Logic Actually Run

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_EventPractice (Actor), place one instance in the level and open its Event Graph. | CAPTURE | 0 |
| 2 | From Event BeginPlay add Print String. Set In String to 01 BeginPlay and Duration to 2.0. | CAPTURE | 0 |
| 3 | From that Print String execution output connect a second Print String: 02 Second, Duration 2.0. | CAPTURE | 0 |
| 4 | Connect a third Print String: 03 Third, Duration 2.0. Compile. | CAPTURE | 0 |
| 5 | Before Play, predict the order. Press Play and prove the messages run 01 → 02 → 03. | NO IMAGE NEEDED | 0 |
| 6 | Exit Play. Disconnect the execution wire before 03 Third. Play again and prove 03 no longer runs. | NO IMAGE NEEDED | 0 |
| 7 | Add Box Collision with Extent 100,100,100. Add OnComponentBeginOverlap(Box) → Print String “Overlap fired”. | CAPTURE | 0 |
| 8 | Compile and Play. Walk into the box and prove BeginPlay fires once while Overlap fires when the player enters. | NO IMAGE NEEDED | 0 |

## Core Lesson: Variables & Data Types: Store Game State

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Open a practice Actor Blueprint. My Blueprint → + Variable → name Health → type Float. | EXACT | 1 |
| 2 | Compile once, then set Health Default Value to 100.0. | NO IMAGE NEEDED | 0 |
| 3 | Create IsActive → Boolean → set Default Value True → Compile. | CAPTURE | 0 |
| 4 | Event BeginPlay → Get Health → Print String. Use Conv_FloatToString if Unreal inserts the conversion automatically. | EXACT | 1 |
| 5 | After the first Print String add Set Health = 60.0, then Get Health → Print String again. | EXACT | 1 |
| 6 | Compile and Play. The first value must be 100 and the second 60. | NO IMAGE NEEDED | 0 |
| 7 | Select Health → tick Instance Editable → set Tooltip to “Starting health for this actor instance” → Compile. | EXACT | 1 |
| 8 | Place two instances and give one Health 100 and the other 40. Prove the instance values can differ without duplicating the Blueprint. | NO IMAGE NEEDED | 0 |

## Core Lesson: Branches: Decisions & Conditions

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create Float variable Health and set Default Value 100.0. | CAPTURE | 0 |
| 2 | Event BeginPlay → Get Health → add Float <= Float. Type 0.0 into the second input. | CAPTURE | 0 |
| 3 | Add Branch. Connect the <= result Boolean to Branch Condition. | EXACT | 1 |
| 4 | True → Print String “Dead”. False → Print String “Still alive”. Compile. | CAPTURE | 0 |
| 5 | Play with Health = 100. Confirm only “Still alive” prints. | NO IMAGE NEEDED | 0 |
| 6 | Stop, set Health = 0, Compile and Play. Confirm only “Dead” prints. | NO IMAGE NEEDED | 0 |
| 7 | Change Health to -10 and prove the True path still runs. | NO IMAGE NEEDED | 0 |
| 8 | Add a comment around the comparison + Branch: “Is Health zero or below?” so the graph reads like a question. | CAPTURE | 0 |

## Core Lesson: Functions & Macros: Reuse Logic Clearly

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | In a practice Blueprint, My Blueprint → Functions → +. Name the function ShowStatus. | EXACT | 1 |
| 2 | Open ShowStatus. In Details → Inputs add Message, type String. | EXACT | 1 |
| 3 | Inside the function add Print String and connect Message to In String. | CAPTURE | 0 |
| 4 | Compile. Return to Event Graph → Event BeginPlay → call ShowStatus. | NO IMAGE NEEDED | 0 |
| 5 | On the ShowStatus call set Message to Ready. Compile and Play; prove Ready appears. | NO IMAGE NEEDED | 0 |
| 6 | Add a Custom Event named TestSecondCall → call ShowStatus with Message Door unlocked. | CAPTURE | 0 |
| 7 | Call TestSecondCall after the first ShowStatus call and prove both messages use the same function. | NO IMAGE NEEDED | 0 |
| 8 | Open ShowStatus and confirm it performs one clearly named job. Do not add unrelated gameplay logic to it. | NO IMAGE NEEDED | 0 |

## Core Lesson: Gameplay Framework: Put Logic in the Right Place

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Open the player Character Blueprint. Add Health Float = 100 and SprintSpeed Float = 800. These belong to the player. | CAPTURE | 0 |
| 2 | Create/open your GameMode Blueprint. Add TargetScore Integer = 500. This is a whole-match rule. | CAPTURE | 0 |
| 3 | Create Blueprint Class → All Classes → GameInstance. Name it GI_Learning. | CAPTURE | 0 |
| 4 | Open GI_Learning and add SelectedDifficulty, type Name, default Normal. | CAPTURE | 0 |
| 5 | Project Settings → Maps & Modes → Game Instance Class → choose GI_Learning. | CAPTURE | 0 |
| 6 | Write these three ownership rules in your notes: player state → Character; match rules → GameMode; cross-level session state → GameInstance. | NO IMAGE NEEDED | 0 |
| 7 | Pick one mechanic from your own project and write its owner before building it. | NO IMAGE NEEDED | 0 |
| 8 | If you cannot justify the owner in one sentence, do not add the logic yet. | NO IMAGE NEEDED | 0 |

## Core Lesson: References & Casting: Know What Object You Have

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_Lamp (Actor). Add Point Light and set Intensity 2500. Create Function SetLampOn with Boolean input NewOn. | CAPTURE | 0 |
| 2 | Inside SetLampOn drag the Point Light reference → Set Visibility. Connect NewOn to New Visibility. Compile. | CAPTURE | 0 |
| 3 | Create BP_Switch (Actor). Add variable TargetLamp → type BP_Lamp Object Reference → tick Instance Editable → Compile. | CAPTURE | 0 |
| 4 | Place one BP_Lamp and one BP_Switch in the level. Select BP_Switch → Details → TargetLamp → eyedropper/select the placed BP_Lamp. | CAPTURE | 0 |
| 5 | In BP_Switch Event BeginPlay → Get TargetLamp → call SetLampOn and set NewOn False. Compile and Play; the lamp should switch off. | CAPTURE | 0 |
| 6 | Change NewOn to True and prove the same reference can control the lamp. | NO IMAGE NEEDED | 0 |
| 7 | Create a temporary Actor Object Reference variable and note that BP_Lamp-specific functions are unavailable until you Cast To BP_Lamp. | EXACT | 1 |
| 8 | Remove the temporary test. Keep the typed TargetLamp reference because it is clearer when you already know the object type. | NO IMAGE NEEDED | 0 |

## Core Lesson: Interfaces & Event Dispatchers: Communicate Cleanly

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Content Drawer → right-click → Blueprints → Blueprint Interface. Name it BPI_Interact. | CAPTURE | 0 |
| 2 | Open BPI_Interact. Rename the default function Interact. Do not add implementation nodes here. Save. | EXACT | 1 |
| 3 | Open/create BP_InterfaceDoor → Class Settings → Implemented Interfaces → Add BPI_Interact → Compile. | CAPTURE | 0 |
| 4 | In BP_InterfaceDoor add the Event Interact implementation → Print String “Door interacted”. Compile. | CAPTURE | 0 |
| 5 | Create BP_InterfaceButton with an Instance Editable Actor reference TargetActor. On your test event call Interact (Message) on TargetActor. | EXACT | 1 |
| 6 | Place both, assign TargetActor to the door, trigger the button and prove the interface message reaches the door. | CAPTURE | 0 |
| 7 | In BP_InterfaceButton add Event Dispatcher OnPressed. Call it immediately after the interaction message. | CAPTURE | 0 |
| 8 | Bind one listener only if you need a broadcast response. Keep the interface for direct capability and the dispatcher for one-to-many notification. | EXACT | 1 |

## Core Lesson: Collision & Overlaps: Detect the World Reliably

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_TriggerPractice (Actor). Add Box Collision. | CAPTURE | 0 |
| 2 | Select Box Collision → set Box Extent X 100, Y 100, Z 100. | CAPTURE | 0 |
| 3 | Details → Collision Presets → Trigger. Make sure Generate Overlap Events is enabled. | CAPTURE | 0 |
| 4 | Add OnComponentBeginOverlap(Box) → Print String “Player entered trigger”. Duration 2.0. | CAPTURE | 0 |
| 5 | Compile, place the Blueprint so the box crosses the player path, then Play. | NO IMAGE NEEDED | 0 |
| 6 | Walk into the volume once. The message should appear when entering, not continuously every frame. | NO IMAGE NEEDED | 0 |
| 7 | Use Other Actor → Equal (Object) with Get Player Character if you want to prove only the player should trigger it. | CAPTURE | 0 |
| 8 | After the first successful test, change Box Extent to X 150, Y 75, Z 100 and test again. Confirm the larger trigger still fires once on entry. | NO IMAGE NEEDED | 0 |

## Core Lesson: Line Traces: Detect What the Player Targets

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Use/create IA_Interact mapped to E. Open the player Character Blueprint Event Graph. | CAPTURE | 0 |
| 2 | Add IA_Interact Started. From FollowCamera get World Location → this is Start. | CAPTURE | 0 |
| 3 | From FollowCamera get Forward Vector → multiply Vector * Float by 1500. | CAPTURE | 0 |
| 4 | Add Start + scaled Forward Vector → connect result to Line Trace By Channel End. Connect camera location to Start. | EXACT | 1 |
| 5 | Set Trace Channel Visibility and Draw Debug Type For Duration. Compile. | EXACT | 1 |
| 6 | From Out Hit → Break Hit Result → Hit Actor → Get Display Name → Print String. | CAPTURE | 0 |
| 7 | Branch from the Line Trace Return Value. Only use hit data from the True path. | CAPTURE | 0 |
| 8 | Play, aim at a visible Actor within 1500 cm and press E. Confirm the debug line reaches the target and the correct Actor name prints. | EXACT | 1 |

## Core Lesson: Timelines & Lerp: Smooth Doors and Moving Systems

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_PracticeDoor with a Static Mesh component named SM_Door. Compile. | CAPTURE | 0 |
| 2 | Event Graph → Add Timeline → name it TL_OpenDoor → double-click it. | EXACT | 1 |
| 3 | Add Float Track named Alpha. Add key Time 0.0 Value 0.0 and key Time 1.0 Value 1.0. Set Timeline Length 1.0. | EXACT | 1 |
| 4 | Return to Event Graph. Add Lerp (Rotator). A = 0,0,0. B = 0,0,90. Connect Alpha to Lerp Alpha. | CAPTURE | 0 |
| 5 | Timeline Update → Set Relative Rotation on SM_Door. Connect Lerp result to New Rotation. | CAPTURE | 0 |
| 6 | Use a simple test event (BeginPlay or interaction) → Play From Start on TL_OpenDoor. | CAPTURE | 0 |
| 7 | Compile and Play. The door should rotate smoothly from 0° to 90° in one second. | NO IMAGE NEEDED | 0 |
| 8 | If it orbits instead of hinges, stop changing Timeline values: the mesh pivot/component hierarchy is the problem. | NO IMAGE NEEDED | 0 |

## Core Lesson: UMG & Gameplay UI: Show State Without Owning It

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Content Drawer → User Interface → Widget Blueprint → User Widget. Name it WBP_HUD. | EXACT | 1 |
| 2 | In Designer add Text Block at X 40, Y 40. Set text temporarily to Health: 100. | CAPTURE | 0 |
| 3 | Add Progress Bar at X 40, Y 80. Set width 300 and height 24. | CAPTURE | 0 |
| 4 | Create Function SetHealthDisplay with inputs CurrentHealth Float and MaxHealth Float. | CAPTURE | 0 |
| 5 | Inside SetHealthDisplay calculate CurrentHealth / MaxHealth and Set Percent on the Progress Bar. | CAPTURE | 0 |
| 6 | In the player Character create Health Float 100 and MaxHealth Float 100. | CAPTURE | 0 |
| 7 | BeginPlay → Create Widget WBP_HUD → promote Return Value to HUDRef → Add to Viewport → call SetHealthDisplay(100,100). | EXACT | 1 |
| 8 | Play. The widget must appear once and the bar must be full. Test 50,100 and prove the bar becomes half full. | NO IMAGE NEEDED | 0 |

## Core Lesson: SaveGame: Persistent Progress Done Safely

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create Blueprint Class → All Classes → SaveGame. Name it BP_PlayerSave. | CAPTURE | 0 |
| 2 | Add SavedScore Integer default 0 and SavedCheckpointName Name default Start. Compile. | CAPTURE | 0 |
| 3 | In the Blueprint that owns saving, add Create Save Game Object → class BP_PlayerSave. | CAPTURE | 0 |
| 4 | Cast/use the returned BP_PlayerSave reference and set SavedScore and SavedCheckpointName before saving. | CAPTURE | 0 |
| 5 | Add Save Game To Slot. Slot Name PlayerSlot; User Index 0. | CAPTURE | 0 |
| 6 | For loading: Does Save Game Exist(PlayerSlot,0) → Branch → True → Load Game From Slot(PlayerSlot,0). | CAPTURE | 0 |
| 7 | Cast the loaded object to BP_PlayerSave and Print SavedScore as a first proof. | CAPTURE | 0 |
| 8 | Save a non-zero test score such as 250, restart Play and prove the loaded value is still 250. | NO IMAGE NEEDED | 0 |

## Core Lesson: Data Structures & Data Tables: Stop Hard-Coding Content

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Content Drawer → Blueprints → Structure. Name it ST_ItemData. | CAPTURE | 0 |
| 2 | Add fields DisplayName (Text), Damage (Float), Value (Integer). Save the Struct. | CAPTURE | 0 |
| 3 | Content Drawer → Miscellaneous → Data Table → choose ST_ItemData → name DT_ItemData. | EXACT | 1 |
| 4 | Add row TrainingSword: DisplayName “Training Sword”, Damage 25, Value 100. | CAPTURE | 0 |
| 5 | Add row HeavySword: DisplayName “Heavy Sword”, Damage 40, Value 250. Add Medkit: Damage 0, Value 75. | CAPTURE | 0 |
| 6 | In a practice Blueprint add Get Data Table Row → Data Table DT_ItemData → Row Name TrainingSword. | CAPTURE | 0 |
| 7 | Break ST_ItemData from Out Row → Print DisplayName and Damage. | CAPTURE | 0 |
| 8 | Play and prove changing the TrainingSword Damage in the Data Table changes the value read by the Blueprint without editing the graph. | NO IMAGE NEEDED | 0 |

## Core Lesson: AI: NavMesh, Blackboard & Behaviour Trees

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Add NavMeshBoundsVolume and scale it until the entire intended patrol floor is covered. Press P and confirm the floor shows green navigation. | EXACT | 1 |
| 2 | Place Patrol_A at X 0, Y -300, Z 0 and Patrol_B at X 0, Y 300, Z 0 so they are exactly 600 cm apart. | CAPTURE | 0 |
| 3 | Create/use an AI Character and AIController. Make sure the AI Character is set to use the controller. | CAPTURE | 0 |
| 4 | Give the controller a TargetPoint Actor reference and assign Patrol_A for the first test. | CAPTURE | 0 |
| 5 | Run AI Move To with Target Actor Patrol_A and Acceptance Radius 75. Compile and Play. | EXACT | 1 |
| 6 | Prove the AI walks around obstacles and stops within the 75 cm Acceptance Radius of Patrol_A rather than sliding through geometry. | NO IMAGE NEEDED | 0 |
| 7 | After success, wait 2.0 seconds, switch the target to Patrol_B and run AI Move To again. | CAPTURE | 0 |
| 8 | Only after the two-point prototype works should you move the same target logic into Blackboard/Behaviour Tree. | NO IMAGE NEEDED | 0 |

## Core Lesson: Animation Blueprints & State Machines

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Open the Animation Blueprint used by the character. In Event Graph find Event Blueprint Update Animation. | CAPTURE | 0 |
| 2 | Create Speed Float and IsInAir Boolean. | CAPTURE | 0 |
| 3 | Try Get Pawn Owner → Get Velocity → Vector Length XY → Set Speed. | CAPTURE | 0 |
| 4 | From the pawn/Character Movement → Is Falling → Set IsInAir. | CAPTURE | 0 |
| 5 | Open Anim Graph → locomotion State Machine. Identify the Idle/Run and air states before editing transitions. | CAPTURE | 0 |
| 6 | Set Idle → Run rule Speed > 5. Set Run → Idle rule Speed <= 5. | CAPTURE | 0 |
| 7 | Set transition to the jump/fall state when IsInAir is True, and return when IsInAir is False. | CAPTURE | 0 |
| 8 | Play: stand still, walk/run, jump, land. Watch the animation change with the same variables you can inspect in the Anim Blueprint debugger. | NO IMAGE NEEDED | 0 |

## Core Lesson: Blueprint Responsibility: Put Behaviour Where It Belongs

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Before opening the graph, write one sentence: “This Blueprint should …”. Keep it to one behaviour. | NO IMAGE NEEDED | 0 |
| 2 | Write the owner underneath: Character, Actor, Component, GameMode, GameInstance, Widget, etc. | NO IMAGE NEEDED | 0 |
| 3 | Build one event-to-result chain only. End it with Print String so you can prove the behaviour before adding a second responsibility. | NO IMAGE NEEDED | 0 |
| 4 | Rename every new variable/component/function so another student can understand it without asking you. | CAPTURE | 0 |
| 5 | Find one repeated node chain. If it is truly the same job, move it into a Function/Macro or reusable Blueprint. | NO IMAGE NEEDED | 0 |
| 6 | Remove debug nodes that no longer prove anything. | NO IMAGE NEEDED | 0 |
| 7 | Add one short comment above the main logic block explaining its responsibility. | CAPTURE | 0 |
| 8 | Play-test once more. The graph must be easier to read without changing the mechanic. | NO IMAGE NEEDED | 0 |

## Core Lesson: Stop Blueprint Spaghetti: Refactor for Humans

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Choose one messy section only. Do not attempt to clean the whole Blueprint at once. | NO IMAGE NEEDED | 0 |
| 2 | Circle/identify crossing wires, duplicated chains, unnamed values and vague variable names in that section. | NO IMAGE NEEDED | 0 |
| 3 | Move one repeated action into a clearly named Function or Macro. | CAPTURE | 0 |
| 4 | Replace important raw values such as 600, 1200 or 3.5 with named variables that describe purpose. | CAPTURE | 0 |
| 5 | Align nodes left-to-right and keep execution flow visually obvious. | CAPTURE | 0 |
| 6 | Add one comment that says what the block does, not what every node literally is. | CAPTURE | 0 |
| 7 | Compile and Play immediately. Prove behaviour is unchanged. | NO IMAGE NEEDED | 0 |
| 8 | Only after the Play test passes, choose exactly one more logic block and repeat the same refactor cycle. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Add a New Enhanced Input Action

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Content Drawer → Input folder → right-click → Input → Input Action. Name it IA_Action. | EXACT | 1 |
| 2 | Open IA_Action → set Value Type Digital (Bool) → Save. | EXACT | 1 |
| 3 | Open IMC_Default → add a mapping row → choose IA_Action → set key E → Save. | EXACT | 1 |
| 4 | Open the player Character Blueprint → Event Graph → right-click → search IA_Action → add the Started event. | EXACT | 1 |
| 5 | From Started add Print String “Action pressed”. Compile. | CAPTURE | 0 |
| 6 | Play and press E once. The message should print once per press. If not, check the Mapping Context is the one added to the player. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Double Jump

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Open the player Character Blueprint → Class Defaults. | CAPTURE | 0 |
| 2 | Search “Jump Max Count” and set it to 2. Compile. | CAPTURE | 0 |
| 3 | Make sure the existing Jump input still calls Jump on Started/Triggered and Stop Jumping on Completed if your template uses it. | CAPTURE | 0 |
| 4 | Play: press Jump once from the floor, then press Jump once again before landing. | NO IMAGE NEEDED | 0 |
| 5 | Try a third press before landing. It must not create a third jump. | NO IMAGE NEEDED | 0 |
| 6 | Land and repeat. If the second jump never occurs, confirm Jump Max Count is 2 on the actual pawn class being played. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Add Hold-to-Sprint

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Content Drawer → Input / Actions → create Input Action IA_Sprint → open it → Value Type Digital (Bool) → Save. | EXACT | 2 |
| 2 | IA_Sprint → Details → Triggers → + → choose Down → Save. | CAPTURE | 0 |
| 3 | Open IMC_Default → add IA_Sprint → map it to Caps Lock for the classroom test → Save. | CAPTURE | 0 |
| 4 | Player Character → create Float DefaultMovementSpeed and Float SprintMovementSpeed → Compile → set SprintMovementSpeed = 1000. | CAPTURE | 0 |
| 5 | Event BeginPlay → Character Movement → Get Max Walk Speed → Set DefaultMovementSpeed. | NO IMAGE NEEDED | 0 |
| 6 | Add IA_Sprint event → Triggered → Set Max Walk Speed from SprintMovementSpeed; Completed → Set Max Walk Speed from DefaultMovementSpeed. Target both from Character Movement. | EXACT | 1 |
| 7 | Compile → Play → move, hold Caps Lock, release. Sprint must start immediately and normal speed must restore every time. | CAPTURE | 0 |

## Quick Tutorial: Make a Simple Dash

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create/use IA_Dash mapped to Left Alt. | CAPTURE | 0 |
| 2 | Character Blueprint → Event Graph → IA_Dash Started. | CAPTURE | 0 |
| 3 | Get Actor Forward Vector → multiply by Float 1200. | CAPTURE | 0 |
| 4 | Add Launch Character. Connect the scaled vector to Launch Velocity. Enable XY Override; leave Z Override off. | CAPTURE | 0 |
| 5 | After the launch, set CanDash False → Delay 0.60 → Set CanDash True. Branch on CanDash before Launch Character. | CAPTURE | 0 |
| 6 | Compile and Play. Press Left Alt while still and while moving. The launch must remain forward and should not be endlessly spammable. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Add Crouch

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create/use IA_Crouch mapped to C or Left Ctrl. | CAPTURE | 0 |
| 2 | Select Character Movement → Nav Movement / Character Movement settings → enable Can Crouch. | CAPTURE | 0 |
| 3 | Set Max Walk Speed Crouched to 250. Compile. | CAPTURE | 0 |
| 4 | IA_Crouch Started → call Crouch on the Character. | CAPTURE | 0 |
| 5 | IA_Crouch Completed → call UnCrouch. | CAPTURE | 0 |
| 6 | Play under an open ceiling first. Hold/release crouch. If capsule/mesh does not change, verify Can Crouch is enabled on the Character Movement component. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Look at an Object to Interact

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create/use IA_Interact mapped to E. | CAPTURE | 0 |
| 2 | Character Blueprint → IA_Interact Started. Get FollowCamera World Location = Start. | CAPTURE | 0 |
| 3 | Get FollowCamera Forward Vector × 300 → add Start = End. | EXACT | 1 |
| 4 | Add Line Trace By Channel: Start/End as above, Visibility channel, Draw Debug For Duration. | EXACT | 1 |
| 5 | Branch from Return Value. True → Break Hit Result → Hit Actor → Print Display Name. | CAPTURE | 0 |
| 6 | Play, aim at an Actor within 300 cm and press E. If the line misses, first verify Start/End before adding casts or interfaces. | EXACT | 1 |

## Quick Tutorial: Make a Key Pickup

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_KeyPickup (Actor) with a visible mesh + collision. | CAPTURE | 0 |
| 2 | Player Character → create HasKey Boolean default False. Compile. | CAPTURE | 0 |
| 3 | BP_KeyPickup → Event Actor Begin Overlap → use Other Actor to cast/check the Player Character. | EXACT | 1 |
| 4 | On success → Set HasKey True on player → Destroy Actor (the pickup). | CAPTURE | 0 |
| 5 | Place the pickup and Play. Walk into it once. | CAPTURE | 0 |
| 6 | After pickup, print HasKey or inspect it in Blueprint debugger. It must change False → True before the key destroys itself. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Key and Locked Door

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Player Character must already have HasKey Boolean default False. | CAPTURE | 0 |
| 2 | Create BP_LockedDoor with a door mesh and interaction trigger/input path. | CAPTURE | 0 |
| 3 | On interact: get player HasKey → Branch. False → Print “Door is locked”. | CAPTURE | 0 |
| 4 | True → run TL_OpenDoor: 1.0 s Alpha 0→1 → Lerp Rotator Yaw 0→90 → Set Relative Rotation on door mesh. | CAPTURE | 0 |
| 5 | Compile. Test without the key first; door must stay shut. | NO IMAGE NEEDED | 0 |
| 6 | Pick up the key, return and interact. Door must open. Do not remove the Branch just to make the animation work. | CAPTURE | 0 |

## Quick Tutorial: Make a Pressure Plate

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_PressurePlate with Plate mesh + Box Collision. | CAPTURE | 0 |
| 2 | Set Box Collision Extent to X100 Y100 Z20 and preset Trigger. | CAPTURE | 0 |
| 3 | Create Timeline TL_Press, length 0.20 s, float Alpha 0→1. | CAPTURE | 0 |
| 4 | Lerp Relative Location from plate start to start + Z -5 cm. Timeline Update → Set Relative Location. | CAPTURE | 0 |
| 5 | Event Actor Begin Overlap → Play TL_Press; Event Actor End Overlap → Reverse TL_Press. | EXACT | 2 |
| 6 | Play and step on/off. The plate should move only 5 cm and return cleanly. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make an Interactable Button or Lever

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_Lever with base mesh, lever mesh and interaction collision. | CAPTURE | 0 |
| 2 | Create Timeline TL_Lever: 0.25 s, Alpha 0→1. | CAPTURE | 0 |
| 3 | Lerp Rotator from 0° to 45° on the lever’s intended axis → Set Relative Rotation. | CAPTURE | 0 |
| 4 | From the interaction event add FlipFlop. Connect A → TL_Lever Play and B → TL_Lever Reverse. Each interaction now alternates the lever direction without an extra IsOn Boolean. | EXACT | 1 |
| 5 | Compile and interact repeatedly. The first press should move to 45°, the next should return to 0°, then continue alternating. | NO IMAGE NEEDED | 0 |
| 6 | If the lever orbits, fix the component pivot/hierarchy; do not compensate by inventing strange rotation values. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Collectable Counter

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Player Character → create Counter Integer default 0. | CAPTURE | 0 |
| 2 | Create BP_Collectable with a visible mesh + Trigger collision and CollectableValue Integer = 1. | CAPTURE | 0 |
| 3 | BP_Collectable → Event Actor Begin Overlap → confirm Other Actor is the player → Get Counter + CollectableValue → Set Counter. | EXACT | 1 |
| 4 | Print the new Counter value → Destroy Actor so this pickup cannot count twice. | CAPTURE | 0 |
| 5 | Place five collectables → Compile → Play. | NO IMAGE NEEDED | 0 |
| 6 | Collect all five. Counter must read 1,2,3,4,5 exactly; if it jumps, fix duplicate overlap/damage logic before changing values. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Flashlight

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Open player Character → add Spot Light component as child of camera. Name it Flashlight. | CAPTURE | 0 |
| 2 | Set Intensity 5000, Attenuation Radius 1500, Outer Cone Angle 35°. Set Visibility off by default. | CAPTURE | 0 |
| 3 | Create/use IA_Flashlight mapped to F. | CAPTURE | 0 |
| 4 | Create FlashlightOn Boolean default False. IA_Flashlight Started → NOT Boolean → set FlashlightOn. | CAPTURE | 0 |
| 5 | Set Visibility on Flashlight from FlashlightOn. Compile. | CAPTURE | 0 |
| 6 | Play in a darker area and press F repeatedly. Light should toggle once per press and follow the camera. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Line Trace Gun

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create/use IA_Fire mapped to Left Mouse Button. | CAPTURE | 0 |
| 2 | Player/weapon Blueprint → IA_Fire Started. Camera location = Start. | CAPTURE | 0 |
| 3 | Camera forward × 10000 + Start = End. Add Line Trace By Channel, Visibility, Draw Debug For Duration. | EXACT | 1 |
| 4 | Branch on Return Value → Break Hit Result → Hit Actor. | CAPTURE | 0 |
| 5 | True path → Apply Damage to Hit Actor with Base Damage 20. | CAPTURE | 0 |
| 6 | Play against a damageable target. Verify the debug line hits the same object that receives damage before adding VFX/sound. | EXACT | 1 |

## Quick Tutorial: Make a Projectile Weapon

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_Projectile (Actor). Add Sphere Collision and set Sphere Radius to exactly 8 cm. Add Projectile Movement. | CAPTURE | 0 |
| 2 | Projectile Movement → Initial Speed 3000, Max Speed 3000. Set Initial Life Span 5.0. | CAPTURE | 0 |
| 3 | Create/use IA_Fire. On fire → Spawn Actor BP_Projectile at muzzle/camera transform. | CAPTURE | 0 |
| 4 | BP_Projectile OnHit/BeginOverlap → Apply Damage 20 to Other Actor → Destroy Actor. | CAPTURE | 0 |
| 5 | Compile and fire at a static wall first. Projectile should travel forward and destroy on contact. | NO IMAGE NEEDED | 0 |
| 6 | Then test against a damageable Actor. If it spawns inside the player, move the spawn transform forward before changing collision logic. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Add Player Health and Damage

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Player Character → create MaxHealth Float = 100 and Health Float = 100 → Compile. | CAPTURE | 0 |
| 2 | Event Graph → add Event AnyDamage. Use the event’s Damage Float as the incoming damage amount. | EXACT | 1 |
| 3 | Health - Damage → Clamp(Float) Min 0 Max MaxHealth → Set Health. | CAPTURE | 0 |
| 4 | After Set Health → Health <= 0 → Branch → True: Print “Player dead” for the first proof. | CAPTURE | 0 |
| 5 | From a temporary test key or BP_DamageZone → Apply Damage → Damaged Actor = player, Base Damage = 20. | NO IMAGE NEEDED | 0 |
| 6 | Play and apply five hits: 100→80→60→40→20→0. Health must never go negative and the death path must fire once. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Give an Enemy Health

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Enemy Blueprint → MaxHealth Float 60, Health Float 60. | CAPTURE | 0 |
| 2 | Enemy Blueprint → Event Graph → add Event AnyDamage. Use the event’s Damage Float as the incoming amount. | EXACT | 1 |
| 3 | Health - Damage → Clamp 0..MaxHealth → Set Health. | CAPTURE | 0 |
| 4 | Branch Health <= 0 → True → Destroy Actor after a Print “Enemy defeated”. | CAPTURE | 0 |
| 5 | Use your test weapon with Damage 20. | NO IMAGE NEEDED | 0 |
| 6 | Exactly three valid 20-damage hits should remove a 60-health enemy. If one shot triggers multiple times, fix hit detection first. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Health Pickup

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Player must have Health/MaxHealth (100 max). Create BP_HealthPickup with Trigger collision. | CAPTURE | 0 |
| 2 | Add HealAmount Float = 25. | CAPTURE | 0 |
| 3 | Event Actor Begin Overlap → confirm Other Actor is the player → NewHealth = Min(Health + HealAmount, MaxHealth). | EXACT | 1 |
| 4 | Set player Health = NewHealth → then Destroy pickup. | CAPTURE | 0 |
| 5 | Test at Health 50: pickup should produce 75. | NO IMAGE NEEDED | 0 |
| 6 | Test at Health 90: pickup should produce 100, not 115. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Add Ammo and Reload

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Add MagazineSize=12, AmmoInMag=12, ReserveAmmo=48 Integers. | CAPTURE | 0 |
| 2 | Before firing → AmmoInMag > 0 → Branch. False: do not fire. | CAPTURE | 0 |
| 3 | After a successful shot → Set AmmoInMag = AmmoInMag - 1. | CAPTURE | 0 |
| 4 | Create IA_Reload mapped to R → call Function Reload. | CAPTURE | 0 |
| 5 | Reload: Needed = MagazineSize - AmmoInMag. ToLoad = Min(Needed, ReserveAmmo). | CAPTURE | 0 |
| 6 | Set AmmoInMag = AmmoInMag + ToLoad; ReserveAmmo = ReserveAmmo - ToLoad. Test with AmmoInMag 9 / Reserve 3: result must be 12 / 0. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Simple Melee Hit

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create/use IA_Attack mapped to a chosen button. | CAPTURE | 0 |
| 2 | On attack get player/camera location and forward vector. End = Start + Forward×150. | CAPTURE | 0 |
| 3 | Use Sphere Trace By Channel/Objects with Radius 35 (or a Box Trace of equivalent reach). Turn debug on while learning. | CAPTURE | 0 |
| 4 | Branch on hit → Apply Damage 25 to valid target. | CAPTURE | 0 |
| 5 | Gate attack with CanAttack Boolean: False after hit → Delay 0.60 → True. | CAPTURE | 0 |
| 6 | Play near/far from one target. A target outside 150 cm must not take damage. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Set Up Lives and Respawning

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Active GameMode Blueprint → create Lives Integer = 3. | CAPTURE | 0 |
| 2 | In the level select the safe Player Start → Details → set Player Start Tag = Respawn. | CAPTURE | 0 |
| 3 | GameMode → Custom Event PlayerDied → Lives - 1 → Set Lives → Branch Lives > 0. False = Print/Show Game Over. | CAPTURE | 0 |
| 4 | True → Delay 2.0 → Find Player Start → Incoming Name = Respawn. | EXACT | 1 |
| 5 | Find Player Start return value → Restart Player at Player Start. Feed the player Controller into the Player input. | EXACT | 1 |
| 6 | Play and force three deaths: 3→2 respawn, 2→1 respawn, 1→0 Game Over. One death must subtract exactly one life. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Checkpoint

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Level → keep/place a safe Player Start tagged CP_00; place another at the checkpoint destination and set Player Start Tag = CP_01. | CAPTURE | 0 |
| 2 | Active GameMode → create ActiveCheckpointTag Name default CP_00. | CAPTURE | 0 |
| 3 | BP_Checkpoint with Trigger collision → Event Actor Begin Overlap → confirm Other Actor is player → set GameMode ActiveCheckpointTag = CP_01 → Print “Checkpoint CP_01 active”. | EXACT | 1 |
| 4 | GameMode death/respawn path → Find Player Start → Incoming Name = ActiveCheckpointTag. | EXACT | 1 |
| 5 | Find Player Start return value → Restart Player at Player Start with the player Controller. | EXACT | 1 |
| 6 | Test death before and after activating CP_01. Before = CP_00; after = CP_01. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Score System

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Choose the owner (GameMode for match score, PlayerState for per-player networked score). Add Score Integer=0. | CAPTURE | 0 |
| 2 | Create Function AddScore with input Amount Integer. | CAPTURE | 0 |
| 3 | Inside → Score + Amount → Set Score. | CAPTURE | 0 |
| 4 | Call AddScore(100) from a test collectable/target. | NO IMAGE NEEDED | 0 |
| 5 | Print/update HUD after the Set Score. | CAPTURE | 0 |
| 6 | Trigger five awards. Score must be 100,200,300,400,500 exactly. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Countdown Timer

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Owner Blueprint → TimeRemaining Float/Integer = 60. | CAPTURE | 0 |
| 2 | BeginPlay → Set Timer by Event, Time 1.0, Looping True. | CAPTURE | 0 |
| 3 | Timer event → TimeRemaining - 1 → Max with 0 → Set TimeRemaining. | CAPTURE | 0 |
| 4 | After Set → Branch TimeRemaining <= 0. | CAPTURE | 0 |
| 5 | True → Clear/Invalidate Timer and fire your timeout event once. | CAPTURE | 0 |
| 6 | Play with a temporary start value 5 to test quickly. It must show 5,4,3,2,1,0 and then stop. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make Simple Win and Lose Conditions

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Set your test win target: Score >= 500. Lose target: Health <= 0. | NO IMAGE NEEDED | 0 |
| 2 | Create Boolean GameEnded default False. | CAPTURE | 0 |
| 3 | After Score changes: if NOT GameEnded AND Score >= 500 → Set GameEnded True → Win event. | CAPTURE | 0 |
| 4 | After Health changes: if NOT GameEnded AND Health <= 0 → Set GameEnded True → Lose event. | CAPTURE | 0 |
| 5 | Test win first with Score 400 then add 100. | NO IMAGE NEEDED | 0 |
| 6 | Reset and test lose with Health 20 then apply 20 damage. Neither end event should fire more than once. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Spawn and Destroy Actors

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Choose/create BP_SpawnTest Actor and set Initial Life Span = 5.0 for the first cleanup test. | CAPTURE | 0 |
| 2 | On a test input/event get owner Location + Forward Vector × 200 for the spawn location. | NO IMAGE NEEDED | 0 |
| 3 | Make Transform using that location and owner rotation. | CAPTURE | 0 |
| 4 | Add Spawn Actor From Class → Class BP_SpawnTest → connect the Spawn Transform. | CAPTURE | 0 |
| 5 | From Spawn Actor From Class → Return Value, choose Promote to Variable and name it SpawnedActor. Keep this reference only when you need to control that exact spawned instance later. | EXACT | 1 |
| 6 | Compile and trigger once. The Actor should appear 200 cm ahead rather than inside the player. | NO IMAGE NEEDED | 0 |
| 7 | Wait 5 seconds and prove Initial Life Span cleans it up. For manual cleanup, use the stored SpawnedActor reference → Destroy Actor. | CAPTURE | 0 |

## Quick Tutorial: Create a Basic HUD Widget

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create Widget Blueprint WBP_HUD. | EXACT | 1 |
| 2 | Designer → add a Text Block. Set Text to HUD READY. In its Canvas Panel Slot use the Top-Left anchor and Position X 40, Y 40. | CAPTURE | 0 |
| 3 | PlayerController/Character BeginPlay → Create Widget WBP_HUD. | CAPTURE | 0 |
| 4 | Promote Return Value to HUDRef if you will update it later. | CAPTURE | 0 |
| 5 | Connect Create Widget → Add to Viewport. Compile. | EXACT | 1 |
| 6 | Play. Exactly one HUD READY should appear. If duplicates stack, check you are not creating the widget repeatedly. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Put Health on the HUD

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | WBP_HUD → add a Progress Bar named PB_Health. In Epic’s reference layout there are Health and Energy bars; this Hub build only needs the Health bar. | EXACT | 1 |
| 2 | Player → Health=100, MaxHealth=100. | CAPTURE | 0 |
| 3 | Create widget function SetHealthDisplay(CurrentHealth,MaxHealth). | CAPTURE | 0 |
| 4 | Inside → CurrentHealth / MaxHealth → Set Percent on PB_Health. | CAPTURE | 0 |
| 5 | Call it with 100/100, then 50/100, then 0/100. | CAPTURE | 0 |
| 6 | Expected bar: full, half, empty. Clamp/guard against MaxHealth=0 if that can ever occur. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Show Score and Lives on the HUD

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | WBP_HUD → add Text ScoreText and LivesText. | CAPTURE | 0 |
| 2 | Set first test text: Score: 0 and Lives: 3. | NO IMAGE NEEDED | 0 |
| 3 | Create function UpdateScoreLives(NewScore Integer, NewLives Integer). | CAPTURE | 0 |
| 4 | Use Format Text or Conv_IntToText/String → SetText on each Text block. | CAPTURE | 0 |
| 5 | Store HUD reference when widget is created and call UpdateScoreLives after score/lives change. | CAPTURE | 0 |
| 6 | Test Score 500 / Lives 2. HUD must update once and show the exact new values. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Add a Crosshair

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | WBP_HUD → add Image widget named Crosshair. | CAPTURE | 0 |
| 2 | Set desired brush/image, Size X 32 Y 32. | CAPTURE | 0 |
| 3 | Set Anchor to centre of canvas. | EXACT | 1 |
| 4 | Set Alignment X 0.5 Y 0.5 and Position X 0 Y 0 relative to centre anchor. | CAPTURE | 0 |
| 5 | Compile and Play at more than one window resolution. | NO IMAGE NEEDED | 0 |
| 6 | Crosshair must stay centred. If it moves with resolution, fix anchor/alignment rather than adding magic position offsets. | CAPTURE | 0 |

## Quick Tutorial: Show an Interaction Prompt

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | WBP_HUD → add Text named InteractionPrompt → text E - Interact. | CAPTURE | 0 |
| 2 | Set InteractionPrompt Visibility Hidden by default. | CAPTURE | 0 |
| 3 | Create widget function SetInteractionPrompt(Show Boolean). | CAPTURE | 0 |
| 4 | Inside set Visibility Visible when True, Hidden when False. | CAPTURE | 0 |
| 5 | Your interaction trace/overlap calls True only while a valid interactable target is detected; otherwise False. | CAPTURE | 0 |
| 6 | Play and aim at target / away from target. Prompt must appear/disappear cleanly without creating another widget. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make an Objective Display

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | WBP_HUD → add Text ObjectiveText. Set initial text Find the exit. | CAPTURE | 0 |
| 2 | Create function SetObjective(NewObjective Text) → SetText ObjectiveText. | CAPTURE | 0 |
| 3 | Store HUDRef when WBP_HUD is created. | CAPTURE | 0 |
| 4 | When objective changes, call SetObjective once with the new Text. | CAPTURE | 0 |
| 5 | Test sequence: Find the key → Unlock the door → Reach the exit. | NO IMAGE NEEDED | 0 |
| 6 | Do not update objective text every Tick; update it only when objective state changes. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Simple Pause Menu

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create Widget Blueprint WBP_Pause with Resume button. | CAPTURE | 0 |
| 2 | Create/use IA_Pause or Escape input. On press → Set Game Paused True. | CAPTURE | 0 |
| 3 | Create WBP_Pause → Add to Viewport → Set Input Mode UI Only → Show Mouse Cursor True. | EXACT | 3 |
| 4 | Resume button OnClicked → Remove From Parent → Set Game Paused False. | EXACT | 1 |
| 5 | Set Input Mode Game Only → Show Mouse Cursor False. | EXACT | 2 |
| 6 | Play: pause, click Resume, move player. If Escape cannot fire while paused, enable Execute When Paused on the input path or handle pause in the PlayerController appropriately. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Smooth Timeline Door

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_Door with movable door mesh component. | CAPTURE | 0 |
| 2 | Add Timeline TL_Door length 1.0, float Alpha keys (0s,0) and (1s,1). | EXACT | 1 |
| 3 | Lerp Rotator Closed 0,0,0 to Open 0,0,90. Alpha → Lerp Alpha. | CAPTURE | 0 |
| 4 | Timeline Update → Set Relative Rotation on door mesh. | CAPTURE | 0 |
| 5 | Interact/overlap → Play; second interaction/exit → Reverse. | CAPTURE | 0 |
| 6 | Test. Door should take exactly one second. If it orbits, fix pivot/component setup, not the Lerp values. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Moving Platform

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_MovingPlatform with mesh component. Record StartLocation. | CAPTURE | 0 |
| 2 | Create EndLocation = StartLocation + chosen axis vector×400. | CAPTURE | 0 |
| 3 | Timeline TL_Move length 2.0, Alpha 0→1. | EXACT | 1 |
| 4 | Lerp Vector StartLocation → EndLocation using Alpha. Update → Set Relative/World Location consistently. | CAPTURE | 0 |
| 5 | BeginPlay → Play; Finished → Reverse; reverse Finished → Play (or use a looping pattern you understand). | CAPTURE | 0 |
| 6 | Ride/test it. Travel must be 400 cm and take 2 seconds. If endpoints drift, stop mixing world and relative spaces. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Damage / Death Zone

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_DamageZone with Box Collision preset Trigger. | CAPTURE | 0 |
| 2 | Event Actor Begin Overlap → confirm Other Actor is the player → Apply Damage → Damaged Actor = Other Actor, Base Damage = 25. | EXACT | 1 |
| 3 | Print current Health after damage for proof. | CAPTURE | 0 |
| 4 | Test with player Health 100. One entry should produce 75. | NO IMAGE NEEDED | 0 |
| 5 | Leave/re-enter. Second entry should produce 50. | NO IMAGE NEEDED | 0 |
| 6 | If health plummets instantly, you used Tick/repeating overlap logic unintentionally; fix event frequency before changing the damage number. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make a Simple Random Spawner

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create BP_RandomSpawner with Box Collision/Scene bounds representing ±500 cm area. | CAPTURE | 0 |
| 2 | Create Array SpawnClasses with at least 2 valid Actor classes. | CAPTURE | 0 |
| 3 | Set Timer by Event on BeginPlay: 3.0 s looping. | CAPTURE | 0 |
| 4 | On timer → choose Random Array Item → choose Random Point in Bounding Box / random X,Y within ±500. | CAPTURE | 0 |
| 5 | Spawn Actor from selected class at that location. Track AliveCount and stop at 5 for the first test. | CAPTURE | 0 |
| 6 | Play for 20 seconds. You should never exceed 5 living test Actors. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make an Enemy Patrol Between Points

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Place NavMeshBoundsVolume; press P and confirm patrol floor is green. | EXACT | 1 |
| 2 | Place Patrol_A at X 0, Y -300, Z 0 and Patrol_B at X 0, Y 300, Z 0. | CAPTURE | 0 |
| 3 | AI Controller/BT stores current PatrolTarget. First set Patrol_A. | CAPTURE | 0 |
| 4 | Move To / AI Move To PatrolTarget with Acceptance Radius 75. | EXACT | 1 |
| 5 | On success wait 2.0 s → switch target to the other point → move again. | CAPTURE | 0 |
| 6 | Play. AI must alternate A↔B. If it does not move, check navmesh/possessed controller before Behaviour Tree complexity. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make an Enemy Chase the Player

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Get/set TargetActor when player is detected (use player pawn directly only for a simple prototype). | CAPTURE | 0 |
| 2 | Store TargetActor in Blackboard/AIController variable. | CAPTURE | 0 |
| 3 | Move To TargetActor with Acceptance Radius 150. | EXACT | 1 |
| 4 | Only set/chase target inside your detection rule (example start within 1000 cm). | CAPTURE | 0 |
| 5 | Clear TargetActor when lost/outside your rule (example beyond 1400 cm) and resume patrol. | CAPTURE | 0 |
| 6 | Play and cross both thresholds. The AI should not flicker rapidly between chase/patrol at the same distance. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Detect the Player with AI Perception

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | AIController → add AI Perception component → add Sight config. | EXACT | 2 |
| 2 | Set Sight Radius 1200, Lose Sight Radius 1500, Peripheral Vision Half Angle 60°. | CAPTURE | 0 |
| 3 | For the first test enable Detect Neutrals = true in the Sight configuration. Leave the other affiliation settings unchanged. | EXACT | 1 |
| 4 | AI Perception → Details → Events → + On Target Perception Updated. In the graph read Stimulus → Successfully Sensed: True set TargetActor = Actor; False clear TargetActor. | EXACT | 2 |
| 5 | Print sensed/forgotten target while learning. | CAPTURE | 0 |
| 6 | Play three tests in order: stand 800 cm directly in front of the AI; move beyond 1500 cm; then return inside 800 cm with a solid wall fully blocking line of sight. Confirm the perception event changes in each test before adding chase logic. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make an Enemy Attack in Range

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Enemy → set AttackRange Float 200 and AttackDamage 15. | CAPTURE | 0 |
| 2 | On AI decision update get Distance To player. | CAPTURE | 0 |
| 3 | Branch Distance <= AttackRange and CanAttack True. | CAPTURE | 0 |
| 4 | True → Apply Damage 15 → Set CanAttack False → Delay 1.2 → Set CanAttack True. | CAPTURE | 0 |
| 5 | Set Move To Acceptance Radius to 200 cm for this first build so movement stops at the same distance used by AttackRange. | CAPTURE | 0 |
| 6 | Test at 250 cm (no hit) and 150 cm (hit). Damage must not apply faster than every 1.2 seconds. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Save a Checkpoint Between Sessions

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create SaveGame class with CheckpointID Name and/or RespawnTransform. | CAPTURE | 0 |
| 2 | When checkpoint activates set CheckpointID CP_01 and its Transform on the SaveGame object. | CAPTURE | 0 |
| 3 | Save Game To Slot: PlayerSlot, User Index 0. | NO IMAGE NEEDED | 0 |
| 4 | On Continue/BeginPlay → Does Save Game Exist PlayerSlot/0 → Load Game From Slot. | CAPTURE | 0 |
| 5 | Cast to your SaveGame class and restore checkpoint transform/ID. | CAPTURE | 0 |
| 6 | Close/restart Play/session and verify CP_01 survives. Do not trust a same-run variable as proof of persistence. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Use a Struct and Data Table for Game Content

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create Struct ST_ItemData: DisplayName Text, Damage Float, Value Integer. | CAPTURE | 0 |
| 2 | Create Data Table DT_ItemData from ST_ItemData. | EXACT | 1 |
| 3 | Add TrainingSword (Damage25 Value100), HeavySword (40,250), Medkit (0,75). | CAPTURE | 0 |
| 4 | Blueprint → Get Data Table Row → DT_ItemData → Row TrainingSword. | CAPTURE | 0 |
| 5 | Break ST_ItemData → Print DisplayName and Damage. | CAPTURE | 0 |
| 6 | Change TrainingSword Damage to 30 in the table and rerun. Blueprint should read 30 without graph edits. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Keep Data Between Level Loads with GameInstance

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create Blueprint GameInstance GI_Learning. | CAPTURE | 0 |
| 2 | Add TotalCoins Integer=0 and SelectedDifficulty Name=Normal. Compile. | CAPTURE | 0 |
| 3 | Project Settings → Maps & Modes → Game Instance Class → GI_Learning. | CAPTURE | 0 |
| 4 | In Level A cast Get Game Instance to GI_Learning → Set TotalCoins 5. | CAPTURE | 0 |
| 5 | Open Level B → Get Game Instance → cast → Print TotalCoins. | CAPTURE | 0 |
| 6 | Expected: 5 after level load. Restart the whole game and expect it to reset unless you also use SaveGame. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Play Sound Feedback from Blueprint

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Choose an imported Sound Wave/Sound Cue. | CAPTURE | 0 |
| 2 | At the gameplay event add Play Sound 2D for UI/non-positional feedback or Play Sound at Location for world sound. | CAPTURE | 0 |
| 3 | Set Volume Multiplier 1.0 and Pitch Multiplier 1.0 first. | CAPTURE | 0 |
| 4 | Compile and trigger the action exactly once. | NO IMAGE NEEDED | 0 |
| 5 | Confirm one action produces one sound, not several overlapping copies. | NO IMAGE NEEDED | 0 |
| 6 | Only after timing works, tune volume/pitch or add concurrency. | CAPTURE | 0 |

## Quick Tutorial: Spawn a Niagara Hit Effect

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Choose one one-shot Niagara System for the test and write down its exact asset name. Use that same system for every step in this tutorial. | CAPTURE | 0 |
| 2 | From trace/projectile Hit Result get Impact Point (and Normal if orientation is needed). | CAPTURE | 0 |
| 3 | Add Spawn System at Location → System = chosen Niagara → Location = Impact Point. | CAPTURE | 0 |
| 4 | Start with Scale 1,1,1 and default rotation; prove position first. | NO IMAGE NEEDED | 0 |
| 5 | Trigger several hits on different surfaces. | NO IMAGE NEEDED | 0 |
| 6 | If effect appears at origin/player, inspect the Hit Result wiring before changing Niagara itself. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Add Camera Shake to an Action

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Create a Camera Shake Base Blueprint using a simple oscillation/perlin pattern supported by your project version. | EXACT | 1 |
| 2 | Set first teaching values: Duration 0.15 s, Location Amplitude 2, Rotation Amplitude 1.5, Frequency 15. | CAPTURE | 0 |
| 3 | From the action event get Player Camera Manager → Start Camera Shake → choose your shake class. | EXACT | 1 |
| 4 | Compile and trigger one action. | NO IMAGE NEEDED | 0 |
| 5 | If it is nauseating, reduce amplitude before shortening everything to zero. | NO IMAGE NEEDED | 0 |
| 6 | Test on repeated action; the shake should support feedback, not make aiming impossible. | NO IMAGE NEEDED | 0 |

## Quick Tutorial: Make Silent Hill-style Fog

| Step | Instruction | Status | Visual count |
|---:|---|---|---:|
| 1 | Level Editor → Add → Visual Effects → Exponential Height Fog. | EXACT | 1 |
| 2 | Select fog → enable Volumetric Fog. Start Fog Density 0.03 and Fog Height Falloff 0.20. | CAPTURE | 0 |
| 3 | Set Volumetric Fog Extinction Scale 1.5 as a starting point. Do not chase mood before basic visibility works. | CAPTURE | 0 |
| 4 | Play the route. Mark the distance where important silhouettes first become visible. | NO IMAGE NEEDED | 0 |
| 5 | If the route becomes unreadable, add one Point Light at the problem area. Start Intensity 2500, Attenuation Radius 500 and Volumetric Scattering Intensity 1.0, then re-test. | NO IMAGE NEEDED | 0 |
| 6 | Optional Post Process Volume: set Saturation to 0.85 for the first test. Re-test the same route before changing any other post-process value. | CAPTURE | 0 |

## Final classification totals

- **EXACT:** 68
- **CAPTURE:** 265
- **NO IMAGE NEEDED:** 111
