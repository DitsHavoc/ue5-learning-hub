# UE5 Learning Hub v3.34.12 — Genuine Remaining Classroom Captures

This list is deliberately stricter than v3.34.11. A teacher capture is listed only when the student still needs a **specific classroom Unreal editor state/graph/configuration** that is not already covered by an exact current Epic UE5.8 visual. Simple repeatable editor actions now reuse official UE5.8 UI, and proof/test steps are not counted as screenshots.

- Core Lesson classroom capture groups: **9**.
- Programming / Quick Tutorial classroom capture groups: **52**.
- Building Block recognition captures: **5**.
- Building Block diagrams: **7** — these are not teacher captures; they can be produced as original Hub diagrams.

## Total teacher capture workload

- Core Lessons: **9**
- Programming / Quick Tutorials: **52**
- Building Block recognition: **5**
- Design Studio technical UE captures (see the Design Studio plan): **14**
- **Total genuine teacher screenshots: 80**
- Building Block diagrams remain **7** and are not teacher screenshots.

This is down from **90** in v3.34.11 and from the original **211**-capture audit.

## What no longer counts as a teacher capture

- Create Blueprint / choose parent class: current Epic UE5.8 visual is reused.
- Add a component: current Epic UE5.8 Add Component visual is reused.
- Create simple variables: current Epic UE5.8 My Blueprint variable visual is reused.
- Create Input Actions / recognise Enhanced Input events: current Epic UE5.8 visuals are reused.
- Create basic Widget assets / recognise common HUD widgets: current Epic UE5.8 UMG visuals are reused.
- Press Play / test / observe / compare: no screenshot is required unless a diagnostic editor view itself is part of the instruction.
- Naming/commenting/refactoring quality checks use existing before/after/reference visuals rather than demanding a new teacher screenshot for every wording change.

## Capture standard

- Current classroom UE build / UE5.8-compatible UI.
- PNG, ideally 1920×1080 or larger.
- Capture the exact graph, custom asset values or configuration named below.
- If one capture cannot truthfully show all listed actions, split it into `-A`, `-B`, etc.

## Core Lessons

| File name | Used by | Still needs classroom evidence |
|---|---|---|
| `UE5-lesson-framework-logic.png` | Gameplay Framework: Put Logic in the Right Place | **Step 5:** Project Settings → Maps & Modes → Game Instance Class → choose GI_Learning. |
| `UE5-lesson-references-casting-logic.png` | References & Casting: Know What Object You Have | **Step 2:** Inside SetLampOn drag the Point Light reference → Set Visibility. Connect NewOn to New Visibility. Compile. **Step 5:** In BP_Switch Event BeginPlay → Get TargetLamp → call SetLampOn and set NewOn False. Compile and Play; the lamp should switch off. |
| `UE5-lesson-traces-logic.png` | Line Traces: Detect What the Player Targets | **Step 3:** From FollowCamera get Forward Vector → multiply Vector * Float by 1500. **Step 6:** From Out Hit → Break Hit Result → Hit Actor → Get Display Name → Print String. **Step 7:** Branch from the Line Trace Return Value. Only use hit data from the True path. |
| `UE5-lesson-timelines-logic.png` | Timelines & Lerp: Smooth Doors and Moving Systems | **Step 4:** Return to Event Graph. Add Lerp (Rotator). A = 0,0,0. B = 0,0,90. Connect Alpha to Lerp Alpha. **Step 5:** Timeline Update → Set Relative Rotation on SM_Door. Connect Lerp result to New Rotation. **Step 6:** Use a simple test event (BeginPlay or interaction) → Play From Start on TL_OpenDoor. |
| `UE5-lesson-savegame-logic-1.png` | SaveGame: Persistent Progress Done Safely | **Step 3:** In the Blueprint that owns saving, add Create Save Game Object → class BP_PlayerSave. **Step 4:** Cast/use the returned BP_PlayerSave reference and set SavedScore and SavedCheckpointName before saving. **Step 5:** Add Save Game To Slot. Slot Name PlayerSlot; User Index 0. **Step 6:** For loading: Does Save Game Exist(PlayerSlot,0) → Branch → True → Load Game From Slot(PlayerSlot,0). |
| `UE5-lesson-data-logic.png` | Data Structures & Data Tables: Stop Hard-Coding Content | **Step 1:** Content Drawer → Blueprints → Structure. Name it ST_ItemData. **Step 6:** In a practice Blueprint add Get Data Table Row → Data Table DT_ItemData → Row Name TrainingSword. **Step 7:** Break ST_ItemData from Out Row → Print DisplayName and Damage. |
| `UE5-lesson-data-setup.png` | Data Structures & Data Tables: Stop Hard-Coding Content | **Step 2:** Add fields DisplayName (Text), Damage (Float), Value (Integer). Save the Struct. **Step 4:** Add row TrainingSword: DisplayName “Training Sword”, Damage 25, Value 100. **Step 5:** Add row HeavySword: DisplayName “Heavy Sword”, Damage 40, Value 250. Add Medkit: Damage 0, Value 75. |
| `UE5-lesson-ai-setup.png` | AI: NavMesh, Blackboard & Behaviour Trees | **Step 2:** Place Patrol_A at X 0, Y -300, Z 0 and Patrol_B at X 0, Y 300, Z 0 so they are exactly 600 cm apart. **Step 4:** Give the controller a TargetPoint Actor reference and assign Patrol_A for the first test. |
| `UE5-lesson-ai-logic.png` | AI: NavMesh, Blackboard & Behaviour Trees | **Step 7:** After success, wait 2.0 seconds, switch the target to Patrol_B and run AI Move To again. |

## Quick Tutorials

| File name | Used by | Still needs classroom evidence |
|---|---|---|
| `UE5-tutorial-double-jump-setup.png` | Make a Double Jump | **Step 2:** Search “Jump Max Count” and set it to 2. Compile. **Step 3:** Make sure the existing Jump input still calls Jump on Started/Triggered and Stop Jumping on Completed if your template uses it. |
| `UE5-tutorial-dash-logic.png` | Make a Simple Dash | **Step 3:** Get Actor Forward Vector → multiply by Float 1200. **Step 5:** After the launch, set CanDash False → Delay 0.60 → Set CanDash True. Branch on CanDash before Launch Character. |
| `UE5-tutorial-crouch-setup.png` | Add Crouch | **Step 3:** Set Max Walk Speed Crouched to 250. Compile. |
| `UE5-tutorial-crouch-logic.png` | Add Crouch | **Step 2:** Select Character Movement → Nav Movement / Character Movement settings → enable Can Crouch. **Step 4:** IA_Crouch Started → call Crouch on the Character. **Step 5:** IA_Crouch Completed → call UnCrouch. |
| `UE5-tutorial-line-trace-interact-logic.png` | Look at an Object to Interact | **Step 2:** Character Blueprint → IA_Interact Started. Get FollowCamera World Location = Start. **Step 5:** Branch from Return Value. True → Break Hit Result → Hit Actor → Print Display Name. |
| `UE5-tutorial-key-pickup-logic.png` | Make a Key Pickup | **Step 4:** On success → Set HasKey True on player → Destroy Actor (the pickup). |
| `UE5-tutorial-locked-door-logic.png` | Make a Key and Locked Door | **Step 4:** True → run TL_OpenDoor: 1.0 s Alpha 0→1 → Lerp Rotator Yaw 0→90 → Set Relative Rotation on door mesh. |
| `UE5-tutorial-pressure-plate-setup.png` | Make a Pressure Plate | **Step 2:** Set Box Collision Extent to X100 Y100 Z20 and preset Trigger. |
| `UE5-tutorial-pressure-plate-logic.png` | Make a Pressure Plate | **Step 4:** Lerp Relative Location from plate start to start + Z -5 cm. Timeline Update → Set Relative Location. |
| `UE5-tutorial-button-lever-logic.png` | Make an Interactable Button or Lever | **Step 3:** Lerp Rotator from 0° to 45° on the lever’s intended axis → Set Relative Rotation. |
| `UE5-tutorial-collectable-logic.png` | Make a Collectable Counter | **Step 4:** Print the new Counter value → Destroy Actor so this pickup cannot count twice. |
| `UE5-tutorial-flashlight-logic.png` | Make a Flashlight | **Step 1:** Open player Character → add Spot Light component as child of camera. Name it Flashlight. |
| `UE5-tutorial-flashlight-setup.png` | Make a Flashlight | **Step 2:** Set Intensity 5000, Attenuation Radius 1500, Outer Cone Angle 35°. Set Visibility off by default. **Step 5:** Set Visibility on Flashlight from FlashlightOn. Compile. |
| `UE5-tutorial-line-trace-gun-logic.png` | Make a Line Trace Gun | **Step 2:** Player/weapon Blueprint → IA_Fire Started. Camera location = Start. **Step 4:** Branch on Return Value → Break Hit Result → Hit Actor. |
| `UE5-tutorial-projectile-gun-logic.png` | Make a Projectile Weapon | **Step 2:** Projectile Movement → Initial Speed 3000, Max Speed 3000. Set Initial Life Span 5.0. |
| `UE5-tutorial-player-health-logic.png` | Add Player Health and Damage | **Step 3:** Health - Damage → Clamp(Float) Min 0 Max MaxHealth → Set Health. **Step 4:** After Set Health → Health <= 0 → Branch → True: Print “Player dead” for the first proof. |
| `UE5-tutorial-enemy-health-logic.png` | Give an Enemy Health | **Step 3:** Health - Damage → Clamp 0..MaxHealth → Set Health. **Step 4:** Branch Health <= 0 → True → Destroy Actor after a Print “Enemy defeated”. |
| `UE5-tutorial-health-pickup-logic.png` | Make a Health Pickup | **Step 4:** Set player Health = NewHealth → then Destroy pickup. |
| `UE5-tutorial-ammo-reload-setup.png` | Add Ammo and Reload | **Step 5:** Reload: Needed = MagazineSize - AmmoInMag. ToLoad = Min(Needed, ReserveAmmo). |
| `UE5-tutorial-melee-trace-setup.png` | Make a Simple Melee Hit | **Step 2:** On attack get player/camera location and forward vector. End = Start + Forward×150. **Step 3:** Use Sphere Trace By Channel/Objects with Radius 35 (or a Box Trace of equivalent reach). Turn debug on while learning. |
| `UE5-tutorial-melee-trace-logic.png` | Make a Simple Melee Hit | **Step 4:** Branch on hit → Apply Damage 25 to valid target. **Step 5:** Gate attack with CanAttack Boolean: False after hit → Delay 0.60 → True. |
| `UE5-tutorial-lives-respawn-logic.png` | Set Up Lives and Respawning | **Step 1:** Active GameMode Blueprint → create Lives Integer = 3. **Step 2:** In the level select the safe Player Start → Details → set Player Start Tag = Respawn. **Step 3:** GameMode → Custom Event PlayerDied → Lives - 1 → Set Lives → Branch Lives > 0. False = Print/Show Game Over. |
| `UE5-tutorial-checkpoint-logic.png` | Make a Checkpoint | **Step 1:** Level → keep/place a safe Player Start tagged CP_00; place another at the checkpoint destination and set Player Start Tag = CP_01. **Step 2:** Active GameMode → create ActiveCheckpointTag Name default CP_00. |
| `UE5-tutorial-score-system-logic.png` | Make a Score System | **Step 3:** Inside → Score + Amount → Set Score. |
| `UE5-tutorial-countdown-timer-logic.png` | Make a Countdown Timer | **Step 1:** Owner Blueprint → TimeRemaining Float/Integer = 60. **Step 2:** BeginPlay → Set Timer by Event, Time 1.0, Looping True. **Step 3:** Timer event → TimeRemaining - 1 → Max with 0 → Set TimeRemaining. **Step 4:** After Set → Branch TimeRemaining <= 0. **Step 5:** True → Clear/Invalidate Timer and fire your timeout event once. |
| `UE5-tutorial-win-lose-state-logic.png` | Make Simple Win and Lose Conditions | **Step 3:** After Score changes: if NOT GameEnded AND Score >= 500 → Set GameEnded True → Win event. **Step 4:** After Health changes: if NOT GameEnded AND Health <= 0 → Set GameEnded True → Lose event. |
| `UE5-tutorial-spawn-destroy-setup.png` | Spawn and Destroy Actors | **Step 3:** Make Transform using that location and owner rotation. |
| `UE5-tutorial-score-lives-hud-ui.png` | Show Score and Lives on the HUD | **Step 5:** Store HUD reference when widget is created and call UpdateScoreLives after score/lives change. |
| `UE5-tutorial-crosshair-ui.png` | Add a Crosshair | **Step 4:** Set Alignment X 0.5 Y 0.5 and Position X 0 Y 0 relative to centre anchor. |
| `UE5-tutorial-crosshair-setup.png` | Add a Crosshair | **Step 2:** Set desired brush/image, Size X 32 Y 32. |
| `UE5-tutorial-interaction-prompt-setup.png` | Show an Interaction Prompt | **Step 2:** Set InteractionPrompt Visibility Hidden by default. **Step 4:** Inside set Visibility Visible when True, Hidden when False. **Step 5:** Your interaction trace/overlap calls True only while a valid interactable target is detected; otherwise False. |
| `UE5-tutorial-objective-text-ui.png` | Make an Objective Display | **Step 2:** Create function SetObjective(NewObjective Text) → SetText ObjectiveText. **Step 3:** Store HUDRef when WBP_HUD is created. |
| `UE5-tutorial-objective-text-setup.png` | Make an Objective Display | **Step 4:** When objective changes, call SetObjective once with the new Text. |
| `UE5-tutorial-timeline-door-logic.png` | Make a Smooth Timeline Door | **Step 3:** Lerp Rotator Closed 0,0,0 to Open 0,0,90. Alpha → Lerp Alpha. **Step 5:** Interact/overlap → Play; second interaction/exit → Reverse. |
| `UE5-tutorial-moving-platform-setup.png` | Make a Moving Platform | **Step 2:** Create EndLocation = StartLocation + chosen axis vector×400. |
| `UE5-tutorial-moving-platform-logic.png` | Make a Moving Platform | **Step 5:** BeginPlay → Play; Finished → Reverse; reverse Finished → Play (or use a looping pattern you understand). |
| `UE5-tutorial-random-spawner-setup.png` | Make a Simple Random Spawner | **Step 2:** Create Array SpawnClasses with at least 2 valid Actor classes. |
| `UE5-tutorial-random-spawner-logic.png` | Make a Simple Random Spawner | **Step 3:** Set Timer by Event on BeginPlay: 3.0 s looping. **Step 4:** On timer → choose Random Array Item → choose Random Point in Bounding Box / random X,Y within ±500. |
| `UE5-tutorial-ai-patrol-setup.png` | Make an Enemy Patrol Between Points | **Step 2:** Place Patrol_A at X 0, Y -300, Z 0 and Patrol_B at X 0, Y 300, Z 0. **Step 3:** AI Controller/BT stores current PatrolTarget. First set Patrol_A. |
| `UE5-tutorial-ai-patrol-logic.png` | Make an Enemy Patrol Between Points | **Step 5:** On success wait 2.0 s → switch target to the other point → move again. |
| `UE5-tutorial-ai-chase-setup.png` | Make an Enemy Chase the Player | **Step 1:** Get/set TargetActor when player is detected (use player pawn directly only for a simple prototype). **Step 4:** Only set/chase target inside your detection rule (example start within 1000 cm). **Step 5:** Clear TargetActor when lost/outside your rule (example beyond 1400 cm) and resume patrol. |
| `UE5-tutorial-ai-perception-setup.png` | Detect the Player with AI Perception | **Step 2:** Set Sight Radius 1200, Lose Sight Radius 1500, Peripheral Vision Half Angle 60°. |
| `UE5-tutorial-ai-attack-range-logic.png` | Make an Enemy Attack in Range | **Step 3:** Branch Distance <= AttackRange and CanAttack True. **Step 5:** Set Move To Acceptance Radius to 200 cm for this first build so movement stops at the same distance used by AttackRange. |
| `UE5-tutorial-ai-attack-range-setup.png` | Make an Enemy Attack in Range | **Step 2:** On AI decision update get Distance To player. |
| `UE5-tutorial-save-checkpoint-setup.png` | Save a Checkpoint Between Sessions | **Step 2:** When checkpoint activates set CheckpointID CP_01 and its Transform on the SaveGame object. |
| `UE5-tutorial-save-checkpoint-logic.png` | Save a Checkpoint Between Sessions | **Step 4:** On Continue/BeginPlay → Does Save Game Exist PlayerSlot/0 → Load Game From Slot. |
| `UE5-tutorial-struct-data-table-setup.png` | Use a Struct and Data Table for Game Content | **Step 1:** Create Struct ST_ItemData: DisplayName Text, Damage Float, Value Integer. **Step 3:** Add TrainingSword (Damage25 Value100), HeavySword (40,250), Medkit (0,75). |
| `UE5-tutorial-struct-data-table-logic.png` | Use a Struct and Data Table for Game Content | **Step 4:** Blueprint → Get Data Table Row → DT_ItemData → Row TrainingSword. **Step 5:** Break ST_ItemData → Print DisplayName and Damage. |
| `UE5-tutorial-gameinstance-state-logic.png` | Keep Data Between Level Loads with GameInstance | **Step 3:** Project Settings → Maps & Modes → Game Instance Class → GI_Learning. **Step 4:** In Level A cast Get Game Instance to GI_Learning → Set TotalCoins 5. **Step 5:** Open Level B → Get Game Instance → cast → Print TotalCoins. |
| `UE5-tutorial-niagara-impact-setup.png` | Spawn a Niagara Hit Effect | **Step 2:** From trace/projectile Hit Result get Impact Point (and Normal if orientation is needed). |
| `UE5-tutorial-niagara-impact-logic.png` | Spawn a Niagara Hit Effect | **Step 3:** Add Spawn System at Location → System = chosen Niagara → Location = Impact Point. |
| `UE5-tutorial-silent-hill-fog-setup.png` | Make Silent Hill-style Fog | **Step 3:** Set Volumetric Fog Extinction Scale 1.5 as a starting point. Do not chase mood before basic visibility works. **Step 6:** Optional Post Process Volume: set Saturation to 0.85 for the first test. Re-test the same route before changing any other post-process value. |

## Building Block recognition captures

| File name | Building Block | Capture exactly this |
|---|---|---|
| `UE5-block-assets-prefixes.png` | Assets & Naming Prefixes | Show the current UE5.8 editor state that makes this Building Block immediately recognisable while carrying out: Content Drawer → right-click empty space → New Folder. Name it Learning_BlockTest. Open Learning_BlockTest → right-click → Blueprint Class → Actor. Name it BP_BlockTest. In the same folder → right-click → Input → Input Action. Name it IA_BlockTest and leave Value Type = Digital (Bool). |
| `UE5-block-savegame-block.png` | SaveGame | Show the current UE5.8 editor state that makes this Building Block immediately recognisable while carrying out: Content Drawer → right-click → Blueprint Class → expand All Classes → search SaveGame → create it → name it SG_TestSave → add Integer Score. Create Save Game Object using SG_TestSave. Set Score = 250 and Save Game to Slot using Slot Name TestSlot. |
| `UE5-block-gameplay-tags.png` | Gameplay Tags | Show the current UE5.8 editor state that makes this Building Block immediately recognisable while carrying out: Project Settings → Project → Gameplay Tags → enable Import Tags From Config. Beside Gameplay Tag List choose Manage Gameplay Tags → click + → create State.Stunned → Add New Tag. In a practice Blueprint create a Gameplay Tag Container variable, then use Add Gameplay Tag to add State.Stunned. |
| `UE5-block-audio-feedback.png` | Audio: Sound Waves, MetaSounds & Playback | Show the current UE5.8 editor state that makes this Building Block immediately recognisable while carrying out: Content Drawer → find or import a short Sound Wave and preview it so you know the source audio works. In a safe Blueprint → Event BeginPlay → Play Sound 2D → Sound = that Sound Wave. Compile, Save and Play once. Stop → replace Play Sound 2D with Play Sound at Location → Sound = same asset → Location = Get Actor Location. Compile and Play again. |
| `UE5-block-niagara-systems.png` | Niagara Systems & Spawning VFX | Show the current UE5.8 editor state that makes this Building Block immediately recognisable while carrying out: Content Drawer → right-click → FX → Niagara System → create from a simple template if your project has no practice system. Name it NS_BlockTest. Open NS_BlockTest and identify the System Overview and at least one Emitter. Save without changing the template. In a safe Blueprint → BeginPlay → Spawn System at Location → System Template = NS_BlockTest → Location = Get Actor Location. |

## Original diagrams — not for the teacher to capture

- **Different Types of Blueprint** — Blueprint is not one type of thing. The parent class decides what the Blueprint represents and what it can do.
- **Static Mesh vs Skeletal Mesh** — Static Meshes have no deforming skeleton; Skeletal Meshes are bound to bones for animation/deformation.
- **Timers vs Delay vs Tick** — Do not use Tick just because something needs to happen later or repeatedly.
- **Parent & Child Blueprints** — A child inherits parent variables, components and behaviour, then specialises what is different.
- **Arrays, Sets & Maps** — Choose the container based on how you need to retrieve and organise the data.
- **Enums** — An Enum replaces mystery numbers/strings with readable named states or categories.
- **Structs** — A Struct groups fields that belong together, such as all the data describing one weapon.
