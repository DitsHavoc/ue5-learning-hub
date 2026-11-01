/* Student-tested reading flow and exact starter names; original source Mini-Projects unchanged. */
window.UE5_MINI_UPGRADE_DATA = {
  "version": "3.66.0",
  "title": "Mini-Project Upgrade Walkthroughs",
  "intro": "Finish one original guided Mini-Project, then follow these text-only expansions. Start with Essential stages; the Creative stage gives your pair room to make it yours. Save your Unreal project after every stage.",
  "projects": [
    {
      "project": "balloon-popper",
      "title": "Balloon Popper → Arcade Challenge",
      "intro": "Build the minimum playable game first: score → random respawning → 60-second round. Then add a Play Again screen and, if there is time, dangerous balloons. You do not need to finish every stage to have a complete prototype.",
      "stages": [
        {
          "id": "score",
          "title": "1. Give every pop a score",
          "tier": "Essential",
          "outcome": "Popping a balloon adds exactly one point to the score owned by BP_BalloonGameMode.",
          "designer": "Design a score display: choose a readable font, colour, position and the wording players will understand.",
          "steps": [
            {
              "title": "Create a score variable",
              "where": "Content Drawer → BalloonPopper → BP_BalloonGameMode → My Blueprint → Variables.",
              "do": "Create an Integer named Score. Compile and set Default Value to 0.",
              "why": "One GameMode keeps the total; balloons do not each hold their own score.",
              "check": "Score appears as an Integer with value 0."
            },
            {
              "title": "Give AwardPoints an input",
              "where": "BP_BalloonGameMode → My Blueprint → Functions → +.",
              "do": "Name the new function AwardPoints. Select its purple Entry node. In Details → Inputs → +, create an Integer input called Points, then Compile.",
              "why": "The same function will later award positive and negative points.",
              "check": "The purple AwardPoints entry node has a green Points (Integer) output pin."
            },
            {
              "title": "Add points to the shared score",
              "where": "BP_BalloonGameMode → AwardPoints function graph.",
              "do": "Drag Score from My Blueprint as Get. Drag a wire from its green output and choose Integer + Integer. Connect the second input to the purple entry node’s Points output.",
              "why": "The calculation uses the existing shared score, not one score variable per balloon.",
              "check": "The + node combines Score and Points; if Score is 0 and Points=1, it produces 1."
            },
            {
              "title": "Store the new score safely",
              "where": "Still in AwardPoints.",
              "do": "From the + output add Max (Integer), with the other input set to 0. Drag Score in again as Set, connect Max to Set Score, and connect the purple function entry white execution pin to Set Score. Compile.",
              "why": "Max prevents danger balloons from taking the total below zero later.",
              "check": "The graph has one white execution connection to Set Score, and the calculation feeds its green Score input."
            },
            {
              "title": "Prove the function changes the total",
              "where": "At the end of AwardPoints in BP_BalloonGameMode.",
              "do": "After Set Score, add Print String. Drag Score as Get, convert it to String, use Append to place \"Score: \" before the number, and connect to In String. Compile.",
              "why": "This quick diagnostic confirms the logic before adding UI.",
              "check": "When the function runs, the score prints once per call."
            },
            {
              "title": "Call it when a balloon actually pops",
              "where": "BP_Balloon → Event Graph → the existing Branch that checks PopScale.",
              "do": "On the True execution path BEFORE Destroy Actor, add Get Game Mode → Cast To BP_BalloonGameMode → AwardPoints (Points = 1) → Destroy Actor (Self). Leave the False path unchanged. Compile and Save.",
              "why": "Awarding on the pop branch counts completed pops, not every click.",
              "check": "Clicking to grow does not score; the final click that destroys a balloon adds exactly one point."
            },
            {
              "title": "Check all balloons share one score",
              "where": "Open BalloonPopperLevel → Play In Editor.",
              "do": "Pop two different balloons. Confirm printed totals show Score: 1 then Score: 2. Save the level.",
              "why": "You have proved the GameMode, cast and pop event are connected correctly.",
              "check": "The total increases across different balloon actors, not from 0 for each one."
            }
          ],
          "check": "Pop three balloons. The GameMode score must be 3, even when each balloon needed several clicks.",
          "fix": "No score? Confirm BP_BalloonGameMode is the World Settings GameMode Override, check the cast Success pin is wired, and ensure AwardPoints is called before Destroy Actor.",
          "designerSteps": [
            "Plan: Design a score display: choose a readable font, colour, position and the wording players will understand. Draw a small mock-up of the 1280×720 play area, targets and HUD.",
            "Create: make one original element for Give every pop a score using HUD backgrounds, balloon meshes or symbols. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm targets are visible and their UI never blocks clicks."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Start after the original Balloon Popper tutorial: clicking a balloon grows it, and the final click destroys it. Have BP_Balloon, BP_BalloonGameMode and BalloonPopperLevel saved.",
          "commonMistake": "If a Cast to BP_BalloonGameMode fails, inspect World Settings → GameMode Override first.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "respawn",
          "title": "2. Spawn replacement balloons at random positions",
          "tier": "Essential",
          "outcome": "Five balloons appear inside a visible spawn area. Popping one creates another at a random position without growing the number on screen.",
          "designer": "Plan a readable playfield and test whether five balloons can be clicked without overlapping the UI.",
          "steps": [
            {
              "title": "Create the reusable spawning actor",
              "where": "Content Drawer → BalloonPopper folder → Add → Blueprint Class → Actor.",
              "do": "Name it BP_BalloonSpawner. Open it and add a Box Collision component named SpawnArea. Select SpawnArea and give it an extent roughly X=50, Y=350, Z=220 as a starting point, then Compile.",
              "why": "A movable box defines where balloons may appear; it is easier to tune than hard-coded coordinates.",
              "check": "BP_BalloonSpawner has a Box Collision visible in the Blueprint viewport."
            },
            {
              "title": "Make the function and locate the Box",
              "where": "BP_BalloonSpawner → My Blueprint → Functions → +.",
              "do": "Create SpawnOneBalloon. Drag SpawnArea from Components onto the graph as Get. Drag from the blue component pin and add Get World Location; add Get Scaled Box Extent from the same SpawnArea reference.",
              "why": "The spawner’s Box component defines the centre and size of the play area.",
              "check": "Both nodes show SpawnArea as their Target."
            },
            {
              "title": "Choose a random visible location",
              "where": "BP_BalloonSpawner → SpawnOneBalloon function.",
              "do": "Right-click and add Random Point in Bounding Box. Plug Get World Location into Center and Get Scaled Box Extent into Half Size. In UE5.8 these are the exact pin names. Keep the Box rotation at 0,0,0.",
              "why": "This returns a different location inside the Box whenever the function runs.",
              "check": "You have a green Vector Return Value ready to connect to Make Transform."
            },
            {
              "title": "Spawn at that random point",
              "where": "In SpawnOneBalloon, after the random point.",
              "do": "Add Make Transform and connect the random Vector to Location; leave Rotation 0, Scale 1. Add Spawn Actor from Class, set Class to BP_Balloon, feed the Make Transform into Spawn Transform and set Collision Handling Override to Always Spawn, Ignore Collisions. Wire the function entry execution into Spawn Actor. Compile.",
              "why": "The tutorial balloon is reused as a real spawned actor, not duplicated by hand.",
              "check": "Calling SpawnOneBalloon creates one BP_Balloon inside the area."
            },
            {
              "title": "Populate the arena on BeginPlay",
              "where": "BP_BalloonSpawner → Event Graph → Event BeginPlay.",
              "do": "Add a For Loop with First Index 0 and Last Index 4. Connect Loop Body to SpawnOneBalloon. Five iterations create five targets; the loop Completed output needs no further node. Compile.",
              "why": "The player starts with a small, predictable number of targets.",
              "check": "Drag one BP_BalloonSpawner into BalloonPopperLevel and press Play: five NEW balloons should appear. Leave the manually placed ones until this works, then remove the old placed balloons in the next step."
            },
            {
              "title": "Put the spawn box where the camera can see it",
              "where": "Open BalloonPopperLevel.",
              "do": "Only after the previous step successfully spawned five new balloons, delete the OLD manually placed BP_Balloon actors (keep the new BP_BalloonSpawner, camera, lighting and scenery). Move and resize SpawnArea to fit the camera. Set SpawnArea Collision Presets to NoCollision so the box cannot block click traces.",
              "why": "Only the spawner should create the balloons now; otherwise you would have extras.",
              "check": "Play shows five visible, clickable balloons inside the intended screen area."
            },
            {
              "title": "Add a replacement event",
              "where": "BP_BalloonSpawner → Event Graph → Add Custom Event.",
              "do": "Call it RequestReplacement. Wire its white execution output to SpawnOneBalloon. Compile.",
              "why": "Every pop can ask the same spawner for one replacement.",
              "check": "RequestReplacement has a clear route to SpawnOneBalloon."
            },
            {
              "title": "Find the spawner when a balloon pops",
              "where": "BP_Balloon → Event Graph → True result of the PopScale Branch.",
              "do": "Keep the existing AwardPoints call on the True path. Add Get Actor of Class, set Actor Class to BP_BalloonSpawner, then add Cast To BP_BalloonSpawner. Connect Get Actor of Class Return Value to the Cast Object input.",
              "why": "The balloon needs a reference to the one spawner placed in its level.",
              "check": "The Cast has a blue Object input connected to the spawner lookup."
            },
            {
              "title": "Call the replacement event before destroying the balloon",
              "where": "BP_Balloon → same True pop path.",
              "do": "Connect AwardPoints white execution output to the Cast white input. From Cast success, call RequestReplacement on the BP_BalloonSpawner reference, then connect that event white output to the existing Destroy Actor (Self). Connect Cast Failed directly to Destroy Actor as a fallback. Compile.",
              "why": "One old balloon disappears and one new balloon appears before it is destroyed.",
              "check": "After 15 pops, five balloons remain visible and Score is 15."
            },
            {
              "title": "Check click collision and spawn position",
              "where": "BalloonPopperLevel → Play In Editor.",
              "do": "Try 15 pops. If a target cannot be clicked, make sure the balloon mesh collision blocks Visibility, the spawning Box uses NoCollision and the player controller still has Enable Click Events. Resize or move SpawnArea if some targets spawn behind the HUD.",
              "why": "A game loop must be reliable, not only work once.",
              "check": "No balloons disappear forever, none spawn outside the playable view, and there are still five after repeated pops."
            }
          ],
          "check": "Start with five visible balloons. After any number of pops, five replacements remain within the playfield and scoring still works.",
          "fix": "Only four remain? Verify RequestReplacement runs before Destroy Actor. More than five? Delete the old placed balloons or check that BeginPlay fires only once. Invisible targets? Reposition the Box Collision volume in the camera view; avoid randomly moving the camera.",
          "designerSteps": [
            "Plan: Plan a readable playfield and test whether five balloons can be clicked without overlapping the UI. Draw a small mock-up of the 1280×720 play area, targets and HUD.",
            "Create: make one original element for Spawn replacement balloons at random positions using HUD backgrounds, balloon meshes or symbols. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm targets are visible and their UI never blocks clicks."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "You must have finished the Score upgrade and confirmed one destroyed balloon awards +1. Leave the existing placed balloons in the level until the spawner successfully creates five new ones.",
          "commonMistake": "First test five spawns, then remove old manually placed balloons. If nothing appears, check the spawner is actually placed in the level.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "timer",
          "title": "3. Add a 60-second round and live score HUD",
          "tier": "Essential",
          "outcome": "A visible score and clock count down; once time reaches zero, balloons cannot score any more.",
          "designer": "Design WBP_BalloonHUD with clear score and remaining-time labels. Try a contrasting colour when time gets low.",
          "steps": [
            {
              "title": "Add the round state",
              "where": "BP_BalloonGameMode → Variables.",
              "do": "Create SecondsLeft (Integer; default 60) and RoundEnded (Boolean; default false). Compile.",
              "why": "The GameMode can decide when play is allowed.",
              "check": "You can see both variables and their default values."
            },
            {
              "title": "Create the countdown event",
              "where": "BP_BalloonGameMode → Event Graph, in empty space.",
              "do": "Right-click → Add Custom Event; call it TickClock. Connect a temporary Print String node with text \"tick\" to TickClock and Compile.",
              "why": "We test the callback first so the countdown logic can be added safely.",
              "check": "The Event Graph contains one Custom Event TickClock with a white output wire to Print String."
            },
            {
              "title": "Start the timer from BeginPlay",
              "where": "BP_BalloonGameMode → Event Graph → Event BeginPlay.",
              "do": "Add Set Timer by Event. Set Time=1.0 and Looping=true. Drag from the red Event delegate pin and select the TickClock custom event (or use Create Event and choose TickClock). Connect BeginPlay white execution to Set Timer by Event. Promote its Return Value to ClockHandle.",
              "why": "The clock should start once when the level begins.",
              "check": "In Play, \"tick\" prints about once each second; remove the temporary Print String before the next step."
            },
            {
              "title": "Count down and stop on zero",
              "where": "BP_BalloonGameMode → TickClock.",
              "do": "Add Branch with Condition = NOT RoundEnded. From True, set SecondsLeft to Max (Integer)(0, SecondsLeft - 1). Then add a Branch testing SecondsLeft <= 0. On True set RoundEnded = true, Print String \"TIME UP!\", and Clear and Invalidate Timer by Handle using ClockHandle.",
              "why": "Clamping avoids negative seconds; clearing the handle stops extra calls.",
              "check": "Play for a few seconds: SecondsLeft falls by 1 every second and stops at 0."
            },
            {
              "title": "Prevent scores after time runs out",
              "where": "BP_BalloonGameMode → AwardPoints function.",
              "do": "Insert a Branch BEFORE Set Score, with Condition = NOT RoundEnded. Only its True execution output may run the Score calculation and Set Score.",
              "why": "This blocks late scoring even when an actor was already clicked.",
              "check": "With RoundEnded true in a debug test, AwardPoints no longer changes Score."
            },
            {
              "title": "Create the HUD widget",
              "where": "Content Drawer → BalloonPopper → User Interface → Widget Blueprint → User Widget.",
              "do": "Name it WBP_BalloonHUD. In Designer add two Text widgets near the top: ScoreText and TimeText. Tick Is Variable for each. Give them placeholder text \"Score: 0\" and \"Time: 60\".",
              "why": "The player needs persistent feedback rather than Print String messages.",
              "check": "The Designer preview shows both labels in the game-safe area."
            },
            {
              "title": "Let gameplay clicks pass through the HUD",
              "where": "WBP_BalloonHUD → Designer → select the root Canvas Panel, then the ScoreText and TimeText labels.",
              "do": "Set the root Canvas Panel Visibility to Not Hit-Testable (Self Only). Set ScoreText and TimeText to Not Hit-Testable (Self & All Children). Do not choose Self & All Children on the root: a later ResultsPanel contains a clickable ReplayButton.",
              "why": "A decorative HUD should not swallow mouse clicks intended for balloons in the 3D scene; later child buttons must remain clickable.",
              "check": "Play and click balloons through empty HUD space. The score changes and the labels remain visible."
            },
            {
              "title": "Bind the two visible numbers",
              "where": "Open WBP_BalloonHUD → Designer → select ScoreText → Details → Content → Text → Bind → Create Binding. Repeat for TimeText.",
              "do": "In each generated binding function use Get Game Mode → Cast To BP_BalloonGameMode → Get Score or SecondsLeft. Convert the Integer to Text using ToText (Integer), then return it. Keep the static \"Score:\" and \"Time:\" prefixes as separate Text widgets or use Format Text. If the cast fails, return \"0\".",
              "why": "The tiny widget reads the one authoritative GameMode value; no duplicate counters.",
              "check": "Play mode shows changing values without opening the Blueprint debugger."
            },
            {
              "title": "Put the HUD on screen",
              "where": "BP_BalloonPlayerController → Event Graph → BeginPlay.",
              "do": "After your existing Show Mouse Cursor setup, add Create Widget (Class = WBP_BalloonHUD, Owning Player = Self) → Add to Viewport. If BeginPlay already has several branches, use a Sequence node so both operations run. Compile and Save.",
              "why": "The controller is already selected by the project GameMode and owns player display.",
              "check": "Start the level: both HUD values appear and the time decreases."
            },
            {
              "title": "Block clicks once the round ends",
              "where": "BP_Balloon → Event ActorOnClicked execution, before the growth nodes.",
              "do": "Get Game Mode → Cast To BP_BalloonGameMode → Get RoundEnded → NOT → Branch. Wire only the True path into the existing click-to-grow chain. Keep the existing pop-scoring call later in the chain.",
              "why": "The scene should stop changing when the round is finished.",
              "check": "After 60 seconds, clicking no longer grows or pops balloons."
            },
            {
              "title": "Prevent the spawner working after the timer",
              "where": "BP_BalloonSpawner → RequestReplacement custom event.",
              "do": "Before SpawnOneBalloon, add Get Game Mode → Cast To BP_BalloonGameMode → Get RoundEnded → NOT → Branch. Connect only the True output to SpawnOneBalloon. Compile.",
              "why": "The round must stop producing targets when the clock reaches zero.",
              "check": "Set RoundEnded=true temporarily in a test; popping an existing balloon does not produce a replacement."
            }
          ],
          "check": "The clock counts 60→0, the score changes only when a balloon pops, the HUD stays visible and no further targets spawn or score after the round ends.",
          "fix": "HUD missing? Check the controller is assigned in BP_BalloonGameMode and Create Widget is connected. Time frozen? Confirm TickClock is connected to Set Timer by Event with Looping ticked. If the HUD appears but balloons cannot be clicked, check the root Canvas uses Not Hit-Testable (Self Only), not Visible.",
          "designerSteps": [
            "Plan: Design WBP_BalloonHUD with clear score and remaining-time labels. Try a contrasting colour when time gets low. Draw a small mock-up of the 1280×720 play area, targets and HUD.",
            "Create: make one original element for Add a 60-second round and live score HUD using HUD backgrounds, balloon meshes or symbols. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm targets are visible and their UI never blocks clicks."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Five balloons should already appear and be replaced when popped. This stage changes GameMode, controller, widget and spawner.",
          "commonMistake": "If your timer seems frozen, test TickClock using Print String before building the HUD.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "results",
          "title": "4. Add a visible game-over result and Play Again",
          "tier": "Essential",
          "outcome": "Time Up leaves a final score on screen and a Play Again button starts a fresh round.",
          "designer": "Design a simple results panel with a large final score and obvious replay button; test it at the actual game resolution.",
          "steps": [
            {
              "title": "Create a results panel in the HUD",
              "where": "WBP_BalloonHUD → Designer.",
              "do": "Add a Border or Vertical Box named ResultsPanel. Add a Text widget named FinalScoreText with placeholder \"Round over\" and a Button named ReplayButton with a child Text \"Play Again\". Tick Is Variable on ResultsPanel and FinalScoreText. Set ResultsPanel Visibility to Collapsed initially. Keep the HUD root Canvas as Not Hit-Testable (Self Only); set ResultsPanel to Visible when RoundEnded and leave ReplayButton as Visible so it can receive input.",
              "why": "Players need a persistent end screen; Print String is only a debugging aid.",
              "check": "Nothing covers the game when it first starts."
            },
            {
              "title": "Refresh visibility from RoundEnded",
              "where": "WBP_BalloonHUD → Graph → Event Construct.",
              "do": "Add a repeating Set Timer by Event with Time 0.25 seconds; create a Custom Event named RefreshRoundScreen and connect it to the red Event pin. In RefreshRoundScreen use Get Game Mode → Cast To BP_BalloonGameMode → Get RoundEnded → Branch. On True set ResultsPanel Visibility = Visible; on False set it to Collapsed.",
              "why": "Updating four times per second is sufficient for a small classroom HUD and avoids updating the panel every frame.",
              "check": "Wait for the timer to end: the result panel becomes visible."
            },
            {
              "title": "Show the final score",
              "where": "RefreshRoundScreen → True branch in WBP_BalloonHUD.",
              "do": "From the same GameMode reference, get Score and use Format Text with a format such as \"Time up! Final score: {Points}\". Connect Score converted to Text to Points, then SetText on FinalScoreText.",
              "why": "The end screen should show the actual score from the single GameMode variable.",
              "check": "The displayed final score equals the last HUD score."
            },
            {
              "title": "Wire the replay button",
              "where": "WBP_BalloonHUD → Designer → ReplayButton → Events → OnClicked (+).",
              "do": "In the new OnClicked event call Get Current Level Name with Remove Prefix String enabled, then Open Level (by Name) with its Level Name input connected to the returned name. Compile and Save.",
              "why": "Reopening the level resets the timer, total, spawner and balloon types in one action.",
              "check": "Play Again starts with score 0, 60 seconds and five visible targets."
            },
            {
              "title": "Test the end of a round",
              "where": "BalloonPopperLevel → Play In Editor.",
              "do": "For a quick test temporarily set SecondsLeft default to 5 in BP_BalloonGameMode, then restore it to 60. Score twice, wait until zero, attempt more clicks, and replay. Confirm the spawner does not add new balloons after the round ends.",
              "why": "The end state must prevent extra points, then offer a reliable restart.",
              "check": "The final score freezes, the results panel appears, and replay returns to a fresh round."
            }
          ],
          "check": "At time zero the round freezes and the final score appears; Play Again starts with five targets and a clean 60-second score challenge. Confirm the ReplayButton receives clicks even though the decorative HUD lets mouse clicks pass to balloons during gameplay.",
          "fix": "Results never appear? Check RefreshRoundScreen is bound to the widget timer, RoundEnded is in the correct GameMode, and ResultsPanel was marked Is Variable. Cannot replay? Connect the current level name to Open Level.",
          "designerSteps": [
            "Plan: Design a simple results panel with a large final score and obvious replay button; test it at the actual game resolution. Draw a small mock-up of the 1280×720 play area, targets and HUD.",
            "Create: make one original element for Add a visible game-over result and Play Again using HUD backgrounds, balloon meshes or symbols. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm targets are visible and their UI never blocks clicks."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The 60-second timer and on-screen score must work. Test with a short five-second round, then put it back to 60.",
          "commonMistake": "The parent Canvas should remain Not Hit-Testable (Self Only), or the replay button may stop working.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "risk",
          "title": "5. Mix safe and danger balloons into random spawns",
          "tier": "Creative",
          "outcome": "The spawner randomly creates safe (+1) and danger (-2) balloons, with a clear visual distinction, while keeping five visible targets.",
          "designer": "Create unmistakably different safe and danger targets. Use a symbol/shape as well as colour and check that both variants remain visible in the playfield.",
          "steps": [
            {
              "title": "Make a clearly different material",
              "where": "Content Drawer → BalloonPopper → Materials.",
              "do": "Duplicate M_Balloon, rename it M_DangerBalloon, then open it and change Base Color to strong red. Save the material.",
              "why": "Players need to recognise risk at a glance.",
              "check": "You can tell the two target types apart in the viewport."
            },
            {
              "title": "Duplicate the working actor",
              "where": "Content Drawer → BP_Balloon → right-click → Duplicate.",
              "do": "Name the copy BP_DangerBalloon. Open it, select the Balloon mesh component and change its material to M_DangerBalloon. Compile.",
              "why": "Duplicating a working Blueprint preserves its click and growth behaviour.",
              "check": "The danger actor grows and pops just like the normal balloon."
            },
            {
              "title": "Change only the points awarded",
              "where": "BP_DangerBalloon → Event Graph → True pop path.",
              "do": "Find the AwardPoints call you copied from BP_Balloon. Change the Points input from 1 to -2. Leave the growth and Destroy Actor connections in place. Compile and Save.",
              "why": "A small change to the data creates a new gameplay decision.",
              "check": "The danger balloon awards -2; regular balloons still award +1."
            },
            {
              "title": "Prepare a class variable for the two balloon types",
              "where": "BP_BalloonSpawner → My Blueprint → Variables → +.",
              "do": "Create SelectedBalloonClass as an Actor Class Reference and Compile. In SpawnOneBalloon find the existing Spawn Actor From Class node; leave its random Spawn Transform connected.",
              "why": "A class reference tells Spawn Actor which type of balloon it should make.",
              "check": "The variable exists and has a purple Class reference pin."
            },
            {
              "title": "Pick normal or danger with one random test",
              "where": "BP_BalloonSpawner → SpawnOneBalloon before Spawn Actor.",
              "do": "Add Random Float in Range (Min=0.0, Max=1.0), compare its output with <= 0.2, and connect to Branch. On True Set SelectedBalloonClass to BP_DangerBalloon; on False set it to BP_Balloon. Compile.",
              "why": "Roughly 20% of balloons should be risky, without a fixed repeating order.",
              "check": "Both Branch paths set SelectedBalloonClass to a valid Blueprint class."
            },
            {
              "title": "Spawn exactly one chosen class",
              "where": "BP_BalloonSpawner → same function.",
              "do": "Connect both Set SelectedBalloonClass execution outputs to the existing Spawn Actor From Class (use two paths meeting at one node). Connect Get SelectedBalloonClass to its Class input; keep the existing random Spawn Transform. Compile.",
              "why": "One call to SpawnOneBalloon should always create exactly one Actor.",
              "check": "Both safe and danger balloons appear across multiple pops while the visible count remains five."
            },
            {
              "title": "Connect the new decision to the spawn function",
              "where": "Still in SpawnOneBalloon.",
              "do": "Make sure the exec entry first chooses SelectedBalloonClass and THEN reaches Spawn Actor from Class once. Keep the existing Random Point in Bounding Box as the spawn position. Compile and save.",
              "why": "Selecting the class and spawning at one shared location prevents duplicate actors.",
              "check": "The spawner still produces exactly five at the start and one replacement for each pop."
            },
            {
              "title": "Verify the copied dangerous actor also requests a replacement",
              "where": "BP_DangerBalloon → Event Graph → True pop branch.",
              "do": "Check the duplicated logic still follows AwardPoints (Points=-2) → RequestReplacement on BP_BalloonSpawner → Destroy Actor. If the copy predates the spawner change, add the same replacement chain as BP_Balloon.",
              "why": "Both target types must take part in the same ongoing game loop.",
              "check": "Popping either a safe or dangerous balloon produces one replacement."
            },
            {
              "title": "Check scoring and chance over several pops",
              "where": "BalloonPopperLevel → Play In Editor.",
              "do": "Pop at least 20 balloons. Safe targets should add 1; danger targets deduct 2 but cannot push Score below 0. The number of visible targets should remain five until Time Up.",
              "why": "Random types must be balanced and never strand the player.",
              "check": "Both types appear, the score changes correctly and the playfield remains populated."
            },
            {
              "title": "Give the game a fresh look",
              "where": "Artist/designer PC → 3ds Max, Photoshop or Substance Painter; share exports through Teams.",
              "do": "Make at least one original game asset or UI element and export FBX/PNG. On the programmer PC, import or reimport it into the BalloonPopper content folder and fit it into the level.",
              "why": "The final project should look different from the tutorial, not just have new code.",
              "check": "Both partners can point to a change they made that improves play."
            }
          ],
          "check": "Both balloon classes spawn randomly; safe targets give +1, danger targets deduct 2 (not below zero), and either pop is replaced until the clock ends.",
          "fix": "Only safe targets? Inspect SelectedBalloonClass values and ensure both Branch paths connect before the single Spawn Actor call. Too many balloons? Check only one spawn path executes. Danger balloons vanish permanently? Check their copied pop chain calls RequestReplacement.",
          "designerSteps": [
            "Plan: Create unmistakably different safe and danger targets. Use a symbol/shape as well as colour and check that both variants remain visible in the playfield. Draw a small mock-up of the 1280×720 play area, targets and HUD.",
            "Create: make one original element for Mix safe and danger balloons into random spawns using HUD backgrounds, balloon meshes or symbols. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm targets are visible and their UI never blocks clicks."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Finish and back up the safe five-balloon game before you make the optional danger variant.",
          "commonMistake": "Change the score only in BP_DangerBalloon; do not overwrite the working normal balloon.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        }
      ],
      "minimumStage": "timer",
      "minimumOutcome": "A 60-second scored game with five replacement balloons and a visible clock."
    },
    {
      "project": "bowling",
      "title": "Bowling → Arcade Bowling",
      "intro": "Work towards a playable three-throw round: score fallen pins, reset the ball without resetting pins, then add a scoreboard and result. Optional power controls come afterwards. Follow the root-mesh setup before trying to reset physics.",
      "stages": [
        {
          "id": "pin-score",
          "title": "1. Count knocked-down pins",
          "tier": "Essential",
          "outcome": "Each physics pin awards one point once, and knocking down the target number ends the round.",
          "designer": "Design a scorecard and a clear way to show how many pins remain standing.",
          "steps": [
            {
              "title": "Give the GameMode a pin counter",
              "where": "Content Drawer → Bowling → BP_BowlingGameMode → Variables.",
              "do": "Create PinsDown (Integer; 0), Score (Integer; 0), GoalPins (Integer; set to the number of BP_BowlingPin actors in your lane, e.g. 6) and RoundFinished (Boolean; false). Compile.",
              "why": "The GameMode keeps one shared score for the full set of pins.",
              "check": "Counters start at zero; GoalPins matches the number of placed pins."
            },
            {
              "title": "Create the RecordPin input",
              "where": "BP_BowlingGameMode → My Blueprint → Functions → +.",
              "do": "Create a function called RecordPin. Select the entry node and use Details → Inputs → + to add PinValue (Integer). Compile.",
              "why": "One shared function will count all pins and their different point values.",
              "check": "The RecordPin entry has PinValue as an Integer input."
            },
            {
              "title": "Only allow points while the round runs",
              "where": "BP_BowlingGameMode → RecordPin function graph.",
              "do": "Drag RoundFinished in as Get. Add NOT Boolean → Branch. Connect the entry white execution pin to the Branch white input and NOT RoundFinished to its Condition.",
              "why": "Pins that continue falling after the round ends must not change the score.",
              "check": "Only the Branch True path is available for valid knockdowns."
            },
            {
              "title": "Record one knockdown and its points",
              "where": "BP_BowlingGameMode → RecordPin → True output of the Branch.",
              "do": "Set PinsDown = PinsDown + 1, then Set Score = Score + PinValue using green Integer arithmetic nodes. Wire both white execution pins in order; add Print String after Set Score using a string of your updated Score.",
              "why": "Pin count measures physical pins; score measures their value.",
              "check": "One call to RecordPin(1) increases both totals once."
            },
            {
              "title": "Detect when all pins are down",
              "where": "At the end of RecordPin in BP_BowlingGameMode.",
              "do": "After incrementing PinsDown, compare it with GoalPins using >= (Integer). Feed that to Branch. On True set RoundFinished = true and Print String \"ALL PINS DOWN!\".",
              "why": "A simple target count gives the game a clear win condition.",
              "check": "The win message appears only after the last different pin is counted."
            },
            {
              "title": "Protect each pin against repeat counting",
              "where": "BP_BowlingPin → Variables.",
              "do": "Create Counted (Boolean; default false). Compile. Add Event Tick → Branch with NOT Counted as Condition. Only continue from True.",
              "why": "A toppled physical pin might remain fallen across hundreds of frames.",
              "check": "The event does nothing once Counted becomes true."
            },
            {
              "title": "Read the pin mesh up direction",
              "where": "BP_BowlingPin → Event Graph after NOT Counted Branch True output.",
              "do": "Drag the pin Static Mesh component (Model) into the graph as Get. From it call Get Up Vector. Add Dot Product (Vector); connect Get Up Vector to A and set B to X=0, Y=0, Z=1.",
              "why": "When the pin is upright its direction agrees with world up, giving a dot product near 1.",
              "check": "A placed upright pin should have a dot value close to 1 in a Blueprint watch/Print String test."
            },
            {
              "title": "Only count a pin that has tipped",
              "where": "BP_BowlingPin → same graph.",
              "do": "Add a Float < Float node to compare Dot Product < 0.65. Add a second Branch, wire the earlier NOT Counted True execution output into it, and wire the comparison into Condition.",
              "why": "A pin counts only after it has tipped far enough, not for ordinary tiny wobbling.",
              "check": "Upright pins do not pass; a pin lying sideways passes once."
            },
            {
              "title": "Award points only on the first fall",
              "where": "BP_BowlingPin → True path of the lean Branch.",
              "do": "Set Counted = true, then Get Game Mode → Cast To BP_BowlingGameMode → RecordPin with PinValue = 1. Ensure the white wires follow that order. Compile.",
              "why": "Set the flag before notifying GameMode so rapid events cannot count twice.",
              "check": "A single fallen pin adds exactly one to both PinsDown and Score."
            },
            {
              "title": "Test one pin at a time",
              "where": "Open the Bowling level → Play.",
              "do": "Throw at the pins. Watch the score print. Check a single fallen pin does not keep awarding points and that the final pin triggers \"ALL PINS DOWN!\".",
              "why": "Physics bugs are easier to diagnose before adding time pressure.",
              "check": "Each pin is counted once and the target number ends the round."
            }
          ],
          "check": "Six placed pins with GoalPins=6 can earn six points, and the round finishes when all six are knocked down.",
          "fix": "If no score appears, confirm pins are BP_BowlingPin actors, the pin mesh simulates physics, and the mesh up-axis is Z when upright. Adjust the 0.65 threshold only after watching the dot-product value while testing.",
          "designerSteps": [
            "Plan: Design a scorecard and a clear way to show how many pins remain standing. Draw a small mock-up of the lane, throw marker and scoreboard.",
            "Create: make one original element for Count knocked-down pins using scoreboard, lane markings or bonus-pin textures. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm three throws remain clear and pin score is legible."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "You should have the original bowling ball aiming and colliding with physics-enabled BP_BowlingPin actors. Count the number of placed pin Blueprints.",
          "commonMistake": "Test one pin fall with a debug print before trying to score every pin.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "throws",
          "title": "2. Reset the ball and allow three throws",
          "tier": "Essential",
          "outcome": "The player has up to three throws. The ball resets between them, fallen pins and score remain, and the round finishes after the final throw settles.",
          "designer": "Design a clear Throws Left indicator and short instructions: arrow keys aim, Space throws, R restarts the round.",
          "steps": [
            {
              "title": "Keep the physics mesh and aiming in the same place",
              "where": "BP_BowlingBall → Viewport → Components hierarchy.",
              "do": "Select the ball Static Mesh component (called Model in the source tutorial). If it is a child of DefaultSceneRoot, drag it onto DefaultSceneRoot to make Model the root component. Compile. Keep using Add World Offset on this Model component for the original left/right aiming. In the level, check the placed ball still starts at the lane entrance.",
              "why": "In UE5.8 a simulated single-body mesh detaches from a parent; making the ball mesh the root keeps its position and the Actor transform together.",
              "check": "Model appears at the top of the Components hierarchy as the root. Arrow keys still move the ball before throwing."
            },
            {
              "title": "Save the Actor starting transform",
              "where": "BP_BowlingBall → Event Graph → Event BeginPlay.",
              "do": "Create StartingBallTransform (Transform) in My Blueprint. From Event BeginPlay, call Get Actor Transform → Set StartingBallTransform. Keep any existing BeginPlay work connected (use a Sequence if needed). Compile.",
              "why": "With Model as the root, the Actor transform is the launch position and matches the mesh used for aiming.",
              "check": "StartingBallTransform stores the ball’s launch position when Play begins."
            },
            {
              "title": "Switch off physics and restore the start position",
              "where": "BP_BowlingBall → Event Graph → Add Custom Event ResetBall.",
              "do": "Drag the Model (root Static Mesh) component onto the graph. Wire ResetBall → Set Simulate Physics (Model, false) → Set Actor Transform (New Transform=StartingBallTransform; Sweep=false; Teleport=true). Compile.",
              "why": "Moving the ball with physics disabled avoids the simulation fighting the new transform.",
              "check": "The node chain stops with the ball back at its original Actor transform."
            },
            {
              "title": "Turn physics on and clear movement",
              "where": "BP_BowlingBall → immediately after Set Actor Transform in ResetBall.",
              "do": "Wire Set Simulate Physics (Model, true) → Set Physics Linear Velocity (0,0,0) → Set Physics Angular Velocity in Degrees (0,0,0), all targeting Model. Compile and save.",
              "why": "Zeroing both velocity types makes sure the ball remains ready for the next shot.",
              "check": "Calling ResetBall returns the ball to its launch mark and leaves it stationary."
            },
            {
              "title": "Count throws in the Player Controller",
              "where": "BP_BowlingPlayerController → Variables.",
              "do": "Create ThrowsUsed (Integer; default 0), MaxThrows (Integer; default 3) and IsBallInMotion (Boolean; default false). Compile. Keep the existing BP_BowlingBall reference from the original IA_Bowl/IA_Move tutorial; do not add a new ball reference.",
              "why": "The controller owns the player input and knows when another throw is allowed.",
              "check": "All three variables start with 0, 3 and false."
            },
            {
              "title": "Disable sideways aiming while the ball is rolling",
              "where": "BP_BowlingPlayerController → existing IA_Move input event, before calling BP_BowlingBall.Move.",
              "do": "Get IsBallInMotion and RoundFinished (via BP_BowlingGameMode). Add a Branch using (NOT IsBallInMotion) AND (NOT RoundFinished). Only True calls the existing Move custom event. Leave the original MoveSpeed and Delta Time mapping from the tutorial unchanged.",
              "why": "The original Move event should only aim before a shot, not drag the physics ball sideways while it rolls.",
              "check": "During a thrown ball’s four-second settling interval, arrow keys no longer change the ball’s direction; after reset they work again."
            },
            {
              "title": "Check the round is still active",
              "where": "BP_BowlingPlayerController → existing IA_Bowl input (Started pin; use your original tutorial name).",
              "do": "Use Get Game Mode → Cast To BP_BowlingGameMode → Get RoundFinished → NOT. Also Get IsBallInMotion and apply NOT.",
              "why": "The controller must avoid another throw during a roll or after the game ends.",
              "check": "You have two Boolean values, each true when another throw is allowed."
            },
            {
              "title": "Check there is at least one throw left",
              "where": "Same Player Controller → throw input.",
              "do": "Compare ThrowsUsed < MaxThrows. Combine this with the two NOT values using AND (Boolean); connect to a Branch Condition. Wire only True into your existing BP_BowlingBall.Bowl event.",
              "why": "Every valid Space press must use one remaining throw, not start several balls at once.",
              "check": "Only the first input while idle reaches the old Bowl event."
            },
            {
              "title": "Track a successful throw",
              "where": "BP_BowlingPlayerController → True branch of the new throw gate.",
              "do": "Immediately before the existing ball throw call, set ThrowsUsed = ThrowsUsed + 1 and IsBallInMotion = true. Then call the original Bowl event exactly once. Compile.",
              "why": "Each valid throw consumes one attempt, regardless of whether it hits any pins.",
              "check": "After the first Space press, ThrowsUsed is 1 and IsBallInMotion is true."
            },
            {
              "title": "Allow time for physics to settle",
              "where": "BP_BowlingPlayerController → after the successful Bowl event.",
              "do": "Add Delay (Duration 4.0) → call a new Custom Event FinishThrow in the same controller. On FinishThrow set IsBallInMotion=false. Use Delay from the controller Event Graph, not inside a Blueprint Function.",
              "why": "Pin collisions should be allowed to settle before the ball is reset or the round is scored.",
              "check": "Four seconds after throwing, the controller becomes ready for the next decision."
            },
            {
              "title": "Reset for another shot when available",
              "where": "BP_BowlingPlayerController → FinishThrow, after IsBallInMotion=false.",
              "do": "Get Game Mode → Cast To BP_BowlingGameMode → Branch (NOT RoundFinished AND ThrowsUsed < MaxThrows). On True call ResetBall on the same saved BP_BowlingBall reference used for the existing Bowl action. Do NOT reset any pin actors.",
              "why": "You keep the first throw’s successful knockdowns and try to finish the remaining pins.",
              "check": "After the first two throws, the ball returns to the start and fallen pins stay down."
            },
            {
              "title": "End the round after the last shot",
              "where": "BP_BowlingGameMode → Functions → add FinishRound.",
              "do": "Create FinishRound with no inputs. Put Branch (NOT RoundFinished) → on True Set RoundFinished=true → Print String with Score and PinsDown (use Format Text or Append after converting integers). Then back in BP_BowlingPlayerController → FinishThrow, on the branch where ThrowsUsed >= MaxThrows and RoundFinished is still false, call GameMode.FinishRound.",
              "why": "A final score should be reported after physics settles; finishing early is also possible if all pins are down.",
              "check": "The third valid throw is followed by a final score; Space no longer throws."
            },
            {
              "title": "Add R to replay the whole round",
              "where": "Bowling Input Mapping Context and BP_BowlingPlayerController.",
              "do": "Create IA_Restart (Boolean) and map to keyboard R in the already active Input Mapping Context. In the Player Controller, IA_Restart Started → Get Current Level Name (Remove Prefix String=true) → Open Level by Name. Compile.",
              "why": "Restarting the level resets the pins, ball, throw counter and score together.",
              "check": "R gives a clean three-throw round from any state."
            }
          ],
          "check": "Make three throws without restarting: the ball comes back for shots two and three, fallen pins remain fallen, final score appears, and the fourth Space press does nothing.",
          "fix": "Ball fails to reset? Confirm you stored the mesh (not actor) transform before physics moved it, and ResetBall uses the same mesh component. One press spends multiple throws? Check IA_Throw uses Started, not Triggered. Score missing after last shot? Ensure FinishRound is called after Delay 4 seconds. If arrows stop moving the ball after reset, check Model is the root mesh and the Move event still offsets Model. Do not add another physics mesh or reset a child component independently.",
          "designerSteps": [
            "Plan: Design a clear Throws Left indicator and short instructions: arrow keys aim, Space throws, R restarts the round. Draw a small mock-up of the lane, throw marker and scoreboard.",
            "Create: make one original element for Reset the ball and allow three throws using scoreboard, lane markings or bonus-pin textures. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm three throws remain clear and pin score is legible."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Pin scoring must work first. You need the placed ball reference already used by the Player Controller, and its original Move and Throw events.",
          "commonMistake": "Avoid running the new reset while the ball is still moving. Put the ball mesh at the root and test sideways aiming before adding throw limits.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "polish",
          "title": "3. Add a throw counter, scoreboard and bonus pin",
          "tier": "Essential",
          "outcome": "A live HUD shows Score, Pins Down and Throws Left. A visibly different bonus pin is worth three points rather than one.",
          "designer": "Create a scoreboard, one marked bonus target and on-screen controls. Playtest legibility and whether the bonus is visible before the shot.",
          "steps": [
            {
              "title": "Make the HUD widget",
              "where": "Content Drawer → Bowling → User Interface → Widget Blueprint → User Widget.",
              "do": "Create WBP_BowlingHUD. In Designer add three Text widgets ScoreText, PinsText and ThrowsText, and mark Is Variable on each. Start with “Score: 0”, “Pins: 0” and “Throws left: 3”. Choose a compact background panel that does not obscure the pins. R remains the restart key.",
              "why": "The player needs to see progress without watching Print String debug output.",
              "check": "All labels fit the game viewport without covering the lane."
            },
            {
              "title": "Read the score and remaining pins",
              "where": "WBP_BowlingHUD → Designer → ScoreText then PinsText → Text → Bind → Create Binding.",
              "do": "In ScoreText binding, Get Game Mode → Cast To BP_BowlingGameMode → Get Score → ToText (Integer) → Return. Do the same for PinsText using PinsDown. Use Format Text or separate fixed labels so players know what the numbers mean.",
              "why": "The single GameMode record remains the authoritative score.",
              "check": "After knocking down pins, both values update and match the printed debug numbers."
            },
            {
              "title": "Read shots remaining",
              "where": "WBP_BowlingHUD → ThrowsText → Text → Bind → Create Binding.",
              "do": "Get Owning Player → Cast To BP_BowlingPlayerController → Get ThrowsUsed and MaxThrows. Subtract ThrowsUsed from MaxThrows, clamp with Max (Integer) against 0, convert to Text and return.",
              "why": "The HUD reads the same counter that gates the throw input.",
              "check": "Before playing, Throws left displays 3; after the first shot it shows 2."
            },
            {
              "title": "Show the widget",
              "where": "BP_BowlingPlayerController → Event BeginPlay.",
              "do": "After the original Add Mapping Context setup, add Create Widget (WBP_BowlingHUD; Owning Player=Self) → Add to Viewport. Use Sequence if the existing BeginPlay already has multiple independent chains. Compile.",
              "why": "Each level start shows the HUD automatically.",
              "check": "The scoreboard is present as soon as Play starts."
            },
            {
              "title": "Make pin points editable",
              "where": "BP_BowlingPin → Variables.",
              "do": "Create PinValue (Integer; default 1) and enable Instance Editable. In the existing RecordPin call use Get PinValue as the input rather than the fixed value 1. Compile.",
              "why": "Each pin can have a different value without duplicating the whole physics system.",
              "check": "The selected pin in a level exposes PinValue in the Details panel."
            },
            {
              "title": "Place one bonus pin",
              "where": "Bowling level → select one BP_BowlingPin actor.",
              "do": "Set PinValue = 3 on that instance and give its Static Mesh component a visibly distinct material. Leave other pins set to 1.",
              "why": "Players can decide where to aim for the best score.",
              "check": "Knocking over the special pin adds 3 to Score but just 1 to PinsDown."
            },
            {
              "title": "Make the result obvious",
              "where": "WBP_BowlingHUD → Designer and Graph.",
              "do": "Add a Text named ResultText, set Is Variable and default Visibility=Collapsed. Create a function RefreshResult reading BP_BowlingGameMode.RoundFinished. When true, use SetText with a message such as “ROUND OVER – SCORE: {Score}” and make ResultText Visible. In Event Construct start Set Timer by Event (0.25 sec, Looping=true) that calls RefreshResult.",
              "why": "A persistent result is better than a momentary debug message.",
              "check": "At the end of the third throw or after every pin is knocked over, the result remains visible until R is pressed."
            },
            {
              "title": "Test two very different rounds",
              "where": "Play the level twice.",
              "do": "Try a first game with some misses, then press R and try another. Confirm ThrowsUsed, fallen-pin state, Scores and ResultText all reset. Ask another pair whether the score and controls make sense.",
              "why": "The complete loop matters more than a single successful throw.",
              "check": "The second round starts with three throws and no leftover score."
            }
          ],
          "check": "Score, Pins Down and Throws Left update correctly; the special pin awards 3 points; a final result appears; R resets the full round.",
          "fix": "Scores differ? Ensure each pin has Counted true after first fall and passes PinValue into RecordPin. Result never shows? RefreshResult must run on a repeating timer and read RoundFinished from the assigned GameMode.",
          "designerSteps": [
            "Plan: Create a scoreboard, one marked bonus target and on-screen controls. Playtest legibility and whether the bonus is visible before the shot. Draw a small mock-up of the lane, throw marker and scoreboard.",
            "Create: make one original element for Add a throw counter, scoreboard and bonus pin using scoreboard, lane markings or bonus-pin textures. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm three throws remain clear and pin score is legible."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Three limited throws should now work, and the player must be able to press R for a fresh round.",
          "commonMistake": "If the score is correct in the GameMode but the HUD is blank, check the active Player Controller and GameMode classes.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "power",
          "title": "4. Optional: give players a choice of shot power",
          "tier": "Creative",
          "outcome": "Q and E decrease/increase shot strength without changing the sideways aiming controls; the HUD can show the selected power.",
          "designer": "Make a simple power meter with low/high markings, and ask a playtester whether changes are noticeable and fair.",
          "steps": [
            {
              "title": "Make the working throw strength configurable",
              "where": "BP_BowlingBall → Event Graph → existing custom Bowl event.",
              "do": "On the custom Bowl event, add a Float input named Strength. Replace the current fixed strength or impulse-magnitude value with the Strength input, retaining the original direction calculation. Note the value that used to work before making the change.",
              "why": "Power belongs to the Bowl event rather than multiple duplicated throw Blueprints.",
              "check": "Throw compiles and expects a Float Strength input."
            },
            {
              "title": "Store the player’s chosen power",
              "where": "BP_BowlingPlayerController → Variables.",
              "do": "Create BaseThrowPower (Float, set to the working value from the original tutorial) and PowerMultiplier (Float; default 1.0). Compile.",
              "why": "A multiplier means this guide works with whichever base impulse fits your bowling ball’s mass.",
              "check": "Both values are visible in the controller details."
            },
            {
              "title": "Add Q and E input actions",
              "where": "Content Drawer → Bowling → Input folder.",
              "do": "Create two Boolean Input Actions IA_PowerDown and IA_PowerUp. Add them to the existing Bowling Input Mapping Context: Q = IA_PowerDown; E = IA_PowerUp. Save.",
              "why": "Separate one-shot key events are easier to debug than an unconfigured input axis.",
              "check": "The mapping context lists Q and E next to the new actions."
            },
            {
              "title": "Change power in safe increments",
              "where": "BP_BowlingPlayerController → Event Graph.",
              "do": "From IA_PowerDown Started, Set PowerMultiplier = Clamp (Float)(PowerMultiplier-0.25, 0.5, 2.0). From IA_PowerUp Started, Set PowerMultiplier = Clamp (Float)(PowerMultiplier+0.25, 0.5, 2.0). Print PowerMultiplier for testing.",
              "why": "Players get useful choices without extreme impulses breaking the lane.",
              "check": "Q and E move the value in 0.25 steps between 0.5 and 2.0."
            },
            {
              "title": "Pass the chosen strength into Throw",
              "where": "BP_BowlingPlayerController → existing gated IA_Bowl chain from Upgrade 2.",
              "do": "Multiply BaseThrowPower × PowerMultiplier and connect the result to the new Strength pin on the existing BP_BowlingBall Bowl call. Do not create a second Bowl call. Compile.",
              "why": "The power setting must use the same limited-throws counter.",
              "check": "Low power and high power produce visibly different travel distances."
            },
            {
              "title": "Test three useful strengths",
              "where": "Play In Editor.",
              "do": "Try PowerMultiplier 0.5, 1.0 and 2.0. Reset with R each time. Tune BaseThrowPower if the ball never reaches pins or always passes through them. Save the working settings.",
              "why": "Tuning is a design decision, not just a functioning input.",
              "check": "A peer can deliberately choose a soft or powerful shot."
            }
          ],
          "check": "At least three power settings produce distinguishable throws while throw limits, score and restarts still work.",
          "fix": "No power difference? Check the actual AddImpulse or AddForce magnitude uses the new Strength pin. If Throw always uses a constant, it will ignore the controller’s multiplier.",
          "designerSteps": [
            "Plan: Make a simple power meter with low/high markings, and ask a playtester whether changes are noticeable and fair. Draw a small mock-up of the lane, throw marker and scoreboard.",
            "Create: make one original element for Optional: give players a choice of shot power using scoreboard, lane markings or bonus-pin textures. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm three throws remain clear and pin score is legible."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Complete and back up the three-throw game before editing the working Throw event. Note the impulse/force value that previously reached the pins.",
          "commonMistake": "Start with the original throw strength before testing half and double power.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        }
      ],
      "minimumStage": "polish",
      "minimumOutcome": "Three throws with ball reset, persistent pin scoring, a live scoreboard and a final result."
    },
    {
      "project": "clicker",
      "title": "Clicker → Upgrade Shop",
      "intro": "Get to the fun quickly: manual shop → clear UI → first Granny earning automatically. That is the minimum playable game. Next train Grannies for faster production; milestones and Farms are optional creative extensions.",
      "stages": [
        {
          "id": "shop",
          "title": "1. Buy more powerful manual clicks",
          "tier": "Essential",
          "outcome": "Points can buy an upgrade; each purchase increases the points earned per click and doubles the next price.",
          "designer": "Create a theme for your shop and main click button. For the first purchase, design an icon or button state that clearly suggests increased points per click.",
          "steps": [
            {
              "title": "Add two shop variables",
              "where": "Open the Clicker project → BP_ClickerGameMode Blueprint → Variables.",
              "do": "Create ClickPower (Integer; default 1) and UpgradeCost (Integer; default 10). Keep the existing Score variable from the tutorial. Compile.",
              "why": "The existing Score remains the only balance; upgrades alter how quickly it grows.",
              "check": "The GameMode now contains Score, ClickPower and UpgradeCost."
            },
            {
              "title": "Create AddClick in the existing GameMode",
              "where": "Open your original BP_ClickerGameMode → Functions → +.",
              "do": "Name the function AddClick. Drag Score as Get and ClickPower as Get, add them with Integer + Integer, and set Score to the result. Connect the AddClick function entry white execution to Set Score. Compile.",
              "why": "We are changing one existing score, not creating a second one.",
              "check": "Calling AddClick once changes Score by ClickPower."
            },
            {
              "title": "Replace the old +1 event",
              "where": "Open your existing Clicker Widget Blueprint → the main button OnClicked event.",
              "do": "Find the original chain that increments the GameMode Score by 1. Replace that increment with Get Game Mode → Cast To BP_ClickerGameMode → AddClick. Remove or disconnect the old +1 chain.",
              "why": "The new function must be the ONLY place a click changes the score.",
              "check": "Ten clicks give exactly 10 points before buying upgrades, not 20."
            },
            {
              "title": "Create a BuyUpgrade function",
              "where": "BP_ClickerGameMode → Functions → + → name it BuyUpgrade.",
              "do": "Add Branch with condition Score >= UpgradeCost. From True set Score = Score - UpgradeCost, then ClickPower = ClickPower + 1, then UpgradeCost = UpgradeCost * 2. Connect the white execution wire through all three Set nodes in that order. False does nothing.",
              "why": "Buying requires enough points and raises the price for the next upgrade.",
              "check": "At Score = 10, the first upgrade should leave Score = 0, ClickPower = 2 and UpgradeCost = 20."
            },
            {
              "title": "Create a shop button",
              "where": "Clicker Widget → Designer.",
              "do": "Add a second Button called BuyUpgradeButton, with a child Text widget reading \"Buy Upgrade\". Position it clear of the main click button. Compile.",
              "why": "Players need a visible action to spend their score.",
              "check": "Two different buttons are visible and clickable."
            },
            {
              "title": "Connect the purchase button",
              "where": "Clicker Widget → Graph.",
              "do": "Select BuyUpgradeButton in the Designer, then in Details → Events click + beside OnClicked. Connect the new event to Get Game Mode → Cast To BP_ClickerGameMode → BuyUpgrade. Compile.",
              "why": "The purchase remains in GameMode, not as separate widget-only money.",
              "check": "Earn 10, buy once, and the next click awards 2."
            },
            {
              "title": "Test the insufficient-funds case",
              "where": "Play the Clicker level.",
              "do": "Press Buy Upgrade at Score = 0; nothing should change. Earn 10 points and buy: your points go to 0 and the price becomes 20. Press the main button once; Score should become 2.",
              "why": "A shop needs to reject purchases a player cannot afford.",
              "check": "The game never produces negative points by buying."
            }
          ],
          "check": "At the first upgrade the game changes from 1 point per click to 2, costs 10 points and raises the next price to 20.",
          "fix": "Purchase not working? Confirm BuyUpgradeButton is wired to its own OnClicked, the GameMode cast succeeds and the original score increment was removed.",
          "designerSteps": [
            "Plan: Create a theme for your shop and main click button. For the first purchase, design an icon or button state that clearly suggests increased points per click. Draw a small mock-up of the main button, shop costs and production per second.",
            "Create: make one original element for Buy more powerful manual clicks using shop icons, themed producer artwork or button graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm a player can see how each purchase changes output."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Start with the original working Clicker: pressing the main button changes one GameMode score. Keep the existing widget and GameMode; do not create a second score.",
          "commonMistake": "Disconnect the OLD +1 score chain when you add AddClick. Two active chains award points twice.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "display",
          "title": "2. Show your shop balance and costs",
          "tier": "Essential",
          "outcome": "The interface shows live score, points per click and next upgrade cost.",
          "designer": "Create a tidy arrangement for three numbers and the two buttons. Try it at 1280×720 as well as full screen.",
          "steps": [
            {
              "title": "Make three named labels",
              "where": "Clicker Widget → Designer.",
              "do": "Add or rename Text widgets as ScoreText, PowerText and CostText. Tick Is Variable for each. Set placeholders \"Points: 0\", \"Per click: 1\", \"Next upgrade: 10\".",
              "why": "Players should know whether buying an upgrade is worth it.",
              "check": "All three labels are readable and do not overlap the buttons."
            },
            {
              "title": "Create a RefreshShop function",
              "where": "Clicker Widget → Graph → Functions → +.",
              "do": "Name the new function RefreshShop. Add Get Game Mode → Cast To BP_ClickerGameMode. Read Score, ClickPower and UpgradeCost. Convert each Integer with ToText (Integer) or Format Text, then call SetText on the corresponding Text widgets. Wire the white execution pins so all three SetText calls run.",
              "why": "A single refresh function updates related UI together.",
              "check": "RefreshShop compiles and references the three correct Text widgets."
            },
            {
              "title": "Refresh after clicking",
              "where": "Clicker Widget → main click button OnClicked event.",
              "do": "In your Clicker Widget main button OnClicked event, keep Get Game Mode → Cast → AddClick, then call RefreshShop. In the Designer select the Score Text widget: if its Text property still has the original Binding, click the binding control and remove it before using RefreshShop → SetText. Do not have both a Text Binding and SetText updating the same label.",
              "why": "The player should see the updated balance immediately.",
              "check": "Click once: Points rises by ClickPower and the display changes exactly once. There is no older bound text fighting RefreshShop."
            },
            {
              "title": "Refresh after shopping",
              "where": "Clicker Widget → BuyUpgradeButton OnClicked event.",
              "do": "After BuyUpgrade, call RefreshShop on the widget. This should run whether the purchase succeeds or fails.",
              "why": "A rejected purchase should leave clear, unchanged costs on screen.",
              "check": "After a successful purchase, Per click and Next upgrade change immediately."
            },
            {
              "title": "Show correct values on load",
              "where": "Clicker Widget → Graph → Event Construct.",
              "do": "Add RefreshShop after Event Construct so the first displayed numbers come from the GameMode. Compile and Save.",
              "why": "The UI should never depend on someone clicking before it becomes correct.",
              "check": "Restart: the labels show 0, 1 and 10 before any input."
            },
            {
              "title": "Test at a second viewport size",
              "where": "Clicker Widget → Designer → Screen Size preview.",
              "do": "Try a smaller viewport. Adjust anchors and layout so all text and buttons are visible. Then run Play In Editor at a different window size.",
              "why": "The original starter already taught anchors; now you apply them independently.",
              "check": "No label or button is cut off."
            }
          ],
          "check": "The score, points per click and upgrade cost always match the real GameMode variables, including immediately after load.",
          "fix": "Text frozen? Make sure RefreshShop is called after BOTH button events and Event Construct. If labels are not accessible in Graph, enable Is Variable in the Designer.",
          "designerSteps": [
            "Plan: Create a tidy arrangement for three numbers and the two buttons. Try it at 1280×720 as well as full screen. Draw a small mock-up of the main button, shop costs and production per second.",
            "Create: make one original element for Show your shop balance and costs using shop icons, themed producer artwork or button graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm a player can see how each purchase changes output."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The main button should earn points and the first shop purchase should work.",
          "commonMistake": "If you already bound ScoreText to a Text Binding in the original tutorial, remove that binding before setting its text through RefreshShop.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "granny",
          "title": "3. Hire Grannies for automatic income",
          "tier": "Essential",
          "outcome": "Buying a Granny costs 15 points; each owned Granny adds one point per second automatically. The next Granny costs more, and the number owned is visible.",
          "designer": "Design a Granny producer card, icon and Buy Granny button. Make it clear that this earns points per second without clicking.",
          "steps": [
            {
              "title": "Create the Granny economy variables",
              "where": "BP_ClickerGameMode → My Blueprint → Variables.",
              "do": "Create GranniesOwned (Integer; default 0), GrannyRate (Integer; default 1) and GrannyCost (Integer; default 15). Compile.",
              "why": "These three values describe how many producers you own, their production, and the next price.",
              "check": "Starting values are 0 Grannies, 1 point/second each, and a price of 15."
            },
            {
              "title": "Create a separate lifetime earnings counter",
              "where": "BP_ClickerGameMode → My Blueprint → Variables.",
              "do": "Keep Score as your spendable points balance. Create TotalEarned (Integer; default 0), then Compile. Do not deduct from TotalEarned when buying anything.",
              "why": "Manual and passive production should both earn points, while only Score is spent.",
              "check": "The GameMode has Score and TotalEarned, each initially zero."
            },
            {
              "title": "Make GainPoints take an amount",
              "where": "BP_ClickerGameMode → My Blueprint → Functions → +.",
              "do": "Create GainPoints. Select its purple entry node, then Details → Inputs → +, add Amount (Integer). Compile.",
              "why": "Both manual clicking and the timed Granny income should use the same function.",
              "check": "GainPoints has a green Amount integer input."
            },
            {
              "title": "Reject zero income",
              "where": "GainPoints function graph.",
              "do": "Add comparison Amount > 0 and connect it to a Branch. Wire the function entry white execution pin into the Branch.",
              "why": "Zero Grannies must not create imaginary points before the first purchase.",
              "check": "Only positive Amount values reach the True execution output."
            },
            {
              "title": "Update balance and lifetime earnings together",
              "where": "GainPoints function → Branch True output.",
              "do": "Set Score = Score + Amount, then Set TotalEarned = TotalEarned + Amount. Wire the white Set nodes in this order and Compile. Do not alter TotalEarned in shop purchase functions.",
              "why": "Score can be spent, while TotalEarned always tracks the points you generated.",
              "check": "Calling GainPoints(5) increases both values by five."
            },
            {
              "title": "Send manual clicking through GainPoints",
              "where": "BP_ClickerGameMode → existing AddClick function from Upgrade 1.",
              "do": "Remove or disconnect Set Score = Score + ClickPower. Instead call GainPoints(Amount=ClickPower). Keep the widget main button calling AddClick once, and keep BuyUpgrade spending Score only.",
              "why": "Every manually earned point now increases lifetime earnings without duplicating clicks.",
              "check": "One click at ClickPower=2 changes both Score and TotalEarned by exactly 2."
            },
            {
              "title": "Make the purchase function",
              "where": "BP_ClickerGameMode → Functions → +.",
              "do": "Create BuyGranny. Add Branch with condition Score >= GrannyCost. On True, wire Set Score = Score - GrannyCost → Set GranniesOwned = GranniesOwned + 1 → Set GrannyCost = Ceiling(GrannyCost × 1.25). Ceiling converts the float price calculation back to an integer. False does nothing.",
              "why": "Buying more producers becomes progressively expensive, but can never spend negative points.",
              "check": "When Score=15, one purchase changes Score to 0, GranniesOwned to 1 and the next GrannyCost to 19."
            },
            {
              "title": "Calculate production per second in one place",
              "where": "BP_ClickerGameMode → Functions → +.",
              "do": "Create a PURE function GetProductionPerSecond with one Integer output Production. Get GranniesOwned and GrannyRate, multiply the integers, connect to the Return Node output and compile.",
              "why": "All automated producers can share one game timer and one production calculation.",
              "check": "One Granny returns 1; three Grannies return 3; no Grannies returns 0."
            },
            {
              "title": "Add the callback but keep the original widget",
              "where": "BP_ClickerGameMode → Event Graph in empty space.",
              "do": "Create a Custom Event called ProduceIncome. Leave your original BeginPlay → Create Widget → Add to Viewport chain untouched. Compile.",
              "why": "The starting interface must still load even when we add passive production.",
              "check": "A Custom Event ProduceIncome exists and the original UI still shows in Play."
            },
            {
              "title": "Start exactly one repeating production timer",
              "where": "BP_ClickerGameMode → Event BeginPlay.",
              "do": "Use Sequence after BeginPlay if needed: Then 0 starts the original widget chain and Then 1 starts Set Timer by Event with Time=1.0 and Looping=true. On the red Event delegate pin select ProduceIncome (or connect a Create Event assigned to ProduceIncome).",
              "why": "One GameMode timer will pay all Grannies; creating one timer per Granny would be harder to manage.",
              "check": "The production timer starts once; do not add another timer to BuyGranny."
            },
            {
              "title": "Pay the player every second",
              "where": "BP_ClickerGameMode → ProduceIncome.",
              "do": "Call GetProductionPerSecond and feed its Integer result to GainPoints(Amount). GainPoints already ignores zero amounts and updates Score and TotalEarned. Compile.",
              "why": "This simulates automatic clicks using the same earning rules as manual clicks.",
              "check": "Before building the Granny shop UI, temporarily use Print String after GainPoints to show Score. Confirm the number rises once each second with one Granny, then remove the debug print."
            },
            {
              "title": "Add a Granny shop button and labels",
              "where": "Clicker Widget → Designer.",
              "do": "Add a Button named BuyGrannyButton with text \"Buy Granny\". Add Text widgets GranniesText and PassiveIncomeText; tick Is Variable. Placeholder text: \"Grannies: 0\" and \"Auto: 0 / sec\". Add a Text widget LifetimeText with placeholder \"Lifetime: 0\" and tick Is Variable.",
              "why": "The player must understand what the new upgrade does and how many producers they own.",
              "check": "A visible button and both labels fit the shop."
            },
            {
              "title": "Connect Granny purchases",
              "where": "Clicker Widget → Graph → BuyGrannyButton → OnClicked.",
              "do": "Use Get Game Mode → Cast To the BP_ClickerGameMode → BuyGranny, then call RefreshShop on the widget. Compile.",
              "why": "The UI requests the purchase while GameMode owns the economy.",
              "check": "The button buys one Granny only when you have enough points."
            },
            {
              "title": "Show the next price and automatic income",
              "where": "Clicker Widget → RefreshShop function.",
              "do": "From the BP_ClickerGameMode cast, read GranniesOwned and GrannyCost. Format the labels into text such as \"Grannies: 2 | Next: 24\" using Format Text. Call GetProductionPerSecond and SetText on PassiveIncomeText using \"Auto: {Production} / sec\". Read TotalEarned from GameMode and update LifetimeText with Format Text (\"Lifetime: {Earned}\").",
              "why": "Players can see that another Granny increases automatic earnings.",
              "check": "After each purchase, the count, next cost and points/second are correct."
            },
            {
              "title": "Refresh the display while nobody clicks",
              "where": "Clicker Widget → Event Construct.",
              "do": "Keep the existing first RefreshShop call. Add Set Timer by Event, Time=0.25, Looping=true, and connect a Custom Event RefreshAutoHUD to the timer red Event input; RefreshAutoHUD simply calls RefreshShop. Do not duplicate the timer in multiple widget event paths.",
              "why": "Passive income changes the score even when no button event triggers RefreshShop.",
              "check": "Hands off the mouse: Score and Lifetime update on screen as the timer pays income."
            },
            {
              "title": "Test increasing purchase costs",
              "where": "Play the game from a fresh level.",
              "do": "Earn 15 points and buy one Granny: the next cost should be 19. Earn 19 and buy a second: the next cost should be 24. Let both run for three seconds and confirm approximately six points are generated.",
              "why": "The production logic and price curve should remain understandable.",
              "check": "With two Grannies, the passive rate displays 2 per second and continues without clicking."
            }
          ],
          "check": "The first Granny costs 15 and produces 1 point/sec; buying two produces 2/sec, with increasing costs and a live automatic score display. Spending points on a Granny never reduces TotalEarned.",
          "fix": "No passive income? Check ProduceIncome is bound to the repeating GameMode timer, and GainPoints is called with a positive amount. Income changes internally but not on screen? Check the widget refresh timer and RefreshShop. Buying creates negative points? Branch must run BEFORE reducing Score.",
          "designerSteps": [
            "Plan: Design a Granny producer card, icon and Buy Granny button. Make it clear that this earns points per second without clicking. Draw a small mock-up of the main button, shop costs and production per second.",
            "Create: make one original element for Hire Grannies for automatic income using shop icons, themed producer artwork or button graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm a player can see how each purchase changes output."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The click button, purchase button and RefreshShop labels must already work. You will keep that shop and add passive income.",
          "commonMistake": "Before you add the Granny button, confirm that the automatic timer earns points using a Print String; otherwise you will be debugging two things at once.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "training",
          "title": "4. Train Grannies to double their output",
          "tier": "Essential",
          "outcome": "A 100-point training upgrade doubles production from every owned Granny. Repeated training increases the rate 1→2→4→8 points per second per Granny.",
          "designer": "Make an upgrade card showing the current Granny rate and the next training cost. Communicate the benefit clearly.",
          "steps": [
            {
              "title": "Add the upgrade price",
              "where": "BP_ClickerGameMode → Variables.",
              "do": "Create GrannyTrainingCost (Integer; default 100). Keep existing GrannyRate (Integer; default 1). Compile.",
              "why": "A single price governs the next training purchase.",
              "check": "The default rate is 1 and the training price is 100."
            },
            {
              "title": "Make the training purchase function",
              "where": "BP_ClickerGameMode → Functions → +.",
              "do": "Create TrainGrannies. Add Branch using (Score >= GrannyTrainingCost) AND (GranniesOwned > 0). From True: Set Score = Score - GrannyTrainingCost → Set GrannyRate = GrannyRate × 2 → Set GrannyTrainingCost = GrannyTrainingCost × 2. False does nothing. Compile.",
              "why": "The training has a price and only works when at least one Granny exists.",
              "check": "With one Granny and 100 points, training leaves Score lower by 100, GrannyRate=2 and next cost=200."
            },
            {
              "title": "Add the upgrade button",
              "where": "Clicker Widget → Designer.",
              "do": "Add Button TrainGranniesButton with child Text \"Train Grannies\" and a Text widget TrainingInfoText marked Is Variable. Position them next to the Granny purchase controls.",
              "why": "The player can choose between hiring more producers and making existing ones stronger.",
              "check": "Both shop options are readable and do not overlap."
            },
            {
              "title": "Connect the upgrade click",
              "where": "Clicker Widget → TrainGranniesButton → OnClicked.",
              "do": "Use Get Game Mode → Cast To BP_ClickerGameMode → TrainGrannies → RefreshShop. Compile.",
              "why": "The button invokes the shared economy rules rather than changing widget-only numbers.",
              "check": "At enough balance, a press changes GrannyRate and the next training cost exactly once."
            },
            {
              "title": "Make the effect visible",
              "where": "Clicker Widget → RefreshShop.",
              "do": "Read GrannyRate and GrannyTrainingCost and use Format Text to show \"Each Granny: {Rate}/sec | Train: {Cost}\". Keep PassiveIncomeText reading GetProductionPerSecond so the total updates automatically.",
              "why": "Players should immediately see the benefit of the upgrade.",
              "check": "With 2 Grannies trained once, Auto shows 4/sec; trained twice it shows 8/sec."
            },
            {
              "title": "Check training never affects spending history",
              "where": "Play the game.",
              "do": "Earn enough for 2 Grannies and one training. Buy training and watch Auto jump from 2 to 4/sec. Confirm Score decreases by the price but TotalEarned remains unchanged when buying.",
              "why": "Purchase and production must remain separate bookkeeping operations.",
              "check": "The income rate doubles while lifetime earnings only increase as new cookies are generated."
            }
          ],
          "check": "Each Granny can be upgraded: two Grannies produce 2/sec initially, then 4/sec, 8/sec and beyond as training is purchased.",
          "fix": "Rate unchanged? Make sure GetProductionPerSecond multiplies GranniesOwned by GrannyRate and RefreshShop reads that function. If training buys at zero Grannies, add the GranniesOwned > 0 condition to the Branch.",
          "designerSteps": [
            "Plan: Make an upgrade card showing the current Granny rate and the next training cost. Communicate the benefit clearly. Draw a small mock-up of the main button, shop costs and production per second.",
            "Create: make one original element for Train Grannies to double their output using shop icons, themed producer artwork or button graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm a player can see how each purchase changes output."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Buy at least one Granny in the working game; the auto-income label must update every second.",
          "commonMistake": "A training button should have no effect if GranniesOwned is zero or Score is below the price.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "goal",
          "title": "5. Optional: add lifetime milestones",
          "tier": "Creative",
          "outcome": "Show a one-time milestone when lifetime earnings reach 500, without pausing Granny production or removing any spendable points.",
          "designer": "Design an achievement badge or celebratory panel that appears when lifetime earnings reach 500. Keep the shop legible underneath.",
          "steps": [
            {
              "title": "Add milestone variables",
              "where": "BP_ClickerGameMode → Variables.",
              "do": "Create MilestoneTarget (Integer; default 500) and MilestoneReached (Boolean; default false). Keep Score and TotalEarned from the Granny upgrade. Compile.",
              "why": "The game can recognise progress across all purchases and all production.",
              "check": "MilestoneReached is false at the start and the goal is 500."
            },
            {
              "title": "Check the milestone when points are earned",
              "where": "BP_ClickerGameMode → GainPoints function from the Granny upgrade.",
              "do": "After Set TotalEarned, add a Branch with condition (NOT MilestoneReached) AND (TotalEarned >= MilestoneTarget). On True set MilestoneReached=true and optionally Print String \"500 earned!\". Do not stop the production timer or disable the click button.",
              "why": "Earning points, not spending them, should trigger milestones only once.",
              "check": "When TotalEarned first reaches 500, MilestoneReached turns true and remains true."
            },
            {
              "title": "Add the achievement text",
              "where": "Clicker Widget → Designer.",
              "do": "Add a Text widget MilestoneText with text \"500 LIFETIME POINTS!\" and enable Is Variable. Set Visibility to Collapsed initially.",
              "why": "The achievement should appear only after it is earned.",
              "check": "No milestone text is visible at the start."
            },
            {
              "title": "Show the milestone in the existing refresh",
              "where": "Clicker Widget → RefreshShop function.",
              "do": "From your existing GameMode cast, get MilestoneReached. If True, Set Visibility(MilestoneText, Visible); otherwise set it Collapsed. Do not create another timer: the Granny stage already refreshes the whole shop every 0.25 seconds.",
              "why": "An existing refresh is more reliable than starting a new UI update loop.",
              "check": "The milestone appears while Granny automatic income continues."
            },
            {
              "title": "Test earning and spending around the goal",
              "where": "Play the Clicker level.",
              "do": "Earn points by clicking and by buying Grannies. Spend available Score on more producers. Confirm TotalEarned keeps rising and the milestone appears on reaching 500, even when Score is much less.",
              "why": "This catches the common error of checking spendable Score instead of lifetime progress.",
              "check": "500 total earned triggers once, but purchases continue to work normally."
            }
          ],
          "check": "After earning 500 total points, the achievement shows while spending, clicking and Granny production continue normally.",
          "fix": "No milestone? Check GainPoints updates TotalEarned on both manual and passive income. If milestone disappears after shopping, read MilestoneReached, not Score.",
          "designerSteps": [
            "Plan: Design an achievement badge or celebratory panel that appears when lifetime earnings reach 500. Keep the shop legible underneath. Draw a small mock-up of the main button, shop costs and production per second.",
            "Create: make one original element for Optional: add lifetime milestones using shop icons, themed producer artwork or button graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm a player can see how each purchase changes output."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Granny auto-income already updates spendable Score and TotalEarned. This is an OPTIONAL badge, not a game-over condition.",
          "commonMistake": "Milestones read TotalEarned, never Score after purchases.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "farm",
          "title": "6. Optional: unlock a second producer",
          "tier": "Creative",
          "outcome": "Players can buy Farms producing 5 points per second each. Granny and Farm income accumulate through the same single production timer.",
          "designer": "Create an original second producer with distinctive artwork, price and theme. Rebrand Grannies and Farms if your game is about robots, potion shops or a spaceship.",
          "steps": [
            {
              "title": "Add Farm variables",
              "where": "BP_ClickerGameMode → Variables.",
              "do": "Create FarmsOwned (Integer; default 0), FarmRate (Integer; default 5) and FarmCost (Integer; default 100). Compile.",
              "why": "Every producer can be represented by owned, rate and cost; the pattern can be repeated for new ideas.",
              "check": "The three starting values are 0, 5 and 100."
            },
            {
              "title": "Build the Farm purchase function",
              "where": "BP_ClickerGameMode → Functions → +.",
              "do": "Create BuyFarm. Add Branch (Score >= FarmCost). From True: Set Score = Score - FarmCost → Set FarmsOwned = FarmsOwned + 1 → Set FarmCost = Ceiling(FarmCost × 1.30). Compile.",
              "why": "This uses the same proven purchase structure as BuyGranny, so students can expand independently.",
              "check": "After buying the first Farm for 100, the next one costs 130."
            },
            {
              "title": "Extend the one income calculation",
              "where": "BP_ClickerGameMode → GetProductionPerSecond function.",
              "do": "Keep the original GranniesOwned × GrannyRate calculation. Add FarmsOwned × FarmRate, then add both integer products and connect the sum to the Return Node Production output.",
              "why": "One timer should award the combined income; do not create a second Set Timer by Event.",
              "check": "With two normal Grannies and one Farm, the function returns 7 per second."
            },
            {
              "title": "Add Farm to the shop",
              "where": "Clicker Widget → Designer.",
              "do": "Add a Farm button named BuyFarmButton and a Text widget FarmInfoText, tick Is Variable. Set the placeholder to \"Farms: 0 | Next: 100\".",
              "why": "Each producer needs a clear cost and a recognisable visual identity.",
              "check": "The shop displays both producer types without hiding either."
            },
            {
              "title": "Connect Farm purchases and their UI",
              "where": "Clicker Widget → Graph.",
              "do": "BuyFarmButton OnClicked → GameMode BuyFarm → RefreshShop. Extend RefreshShop to read FarmsOwned and FarmCost and SetText on FarmInfoText using Format Text. Leave the existing automatic UI refresh timer untouched.",
              "why": "The new producer uses the same GameMode and UI update pattern as the first.",
              "check": "One Farm appears in the shop and 5 extra points/second are added immediately."
            },
            {
              "title": "Test combined income and lifetime earnings",
              "where": "Play the game.",
              "do": "With 3 Grannies at 2/sec each and 2 Farms at 5/sec each, check Auto = (3×2)+(2×5)=16/sec. Let the game run five seconds and confirm around 80 points are generated while TotalEarned rises too. If you completed the optional milestone, confirm it still works.",
              "why": "Different systems must sum correctly without triggering separate duplicated timers.",
              "check": "Automatic income and TotalEarned rise by roughly 16 each second; the milestone still works."
            },
            {
              "title": "Plan your own next producer",
              "where": "With your partner, sketch a third producer in the shared Teams folder.",
              "do": "Choose a name, starting cost, income rate and artwork. Describe which variables and single GameMode functions you would reuse; only build it if the game is already playable.",
              "why": "This is the independent creative step: apply a familiar pattern to a new producer.",
              "check": "You can explain how your third producer would feed into GetProductionPerSecond without a new timer."
            }
          ],
          "check": "With Grannies and Farms running, combined income matches the single production timer and lifetime earnings rise along with the spendable balance.",
          "fix": "Income wrong? Check GetProductionPerSecond includes both terms and ProduceIncome calls it once per second. If income doubles unexpectedly, look for a second timer or an old direct Set Score chain.",
          "designerSteps": [
            "Plan: Create an original second producer with distinctive artwork, price and theme. Rebrand Grannies and Farms if your game is about robots, potion shops or a spaceship. Draw a small mock-up of the main button, shop costs and production per second.",
            "Create: make one original element for Optional: unlock a second producer using shop icons, themed producer artwork or button graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm a player can see how each purchase changes output."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Granny production and training are working. Farms are an optional second producer, not a second timer.",
          "commonMistake": "A second Set Timer by Event can make the whole game earn twice as much as intended.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        }
      ],
      "minimumStage": "granny",
      "minimumOutcome": "A functioning clicker with a shop, bought Grannies earning points automatically every second and a live production display."
    },
    {
      "project": "loops",
      "title": "Loops & Spawning → Target Rush",
      "intro": "Turn the original spawned cubes into a wave-based target challenge. Five targets are just the first wave: new waves appear automatically, target counts increase, the overall race is timed and every wave can use random visible positions.",
      "stages": [
        {
          "id": "targets",
          "title": "1. Turn the spawned cubes into clickable targets",
          "tier": "Essential",
          "outcome": "Five targets appear; clicking each one removes it, increases the hit count, and clearing all five wins.",
          "designer": "Pick a recognisable target shape and design a clear visual distinction between clickable objects and scenery.",
          "steps": [
            {
              "title": "Create a game target actor",
              "where": "Content Drawer → Loops level folder → Blueprint Class → Actor.",
              "do": "Name it BP_ClickTarget. Add a Static Mesh component using the Cube mesh and give it a clearly coloured material. Compile.",
              "why": "A reusable actor gives every spawned item the same interaction.",
              "check": "BP_ClickTarget can be placed in the scene and shows a cube."
            },
            {
              "title": "Spawn this target using the existing loop",
              "where": "Open the GameMode Blueprint used in your Loops tutorial.",
              "do": "In the existing Spawn Actor From Class node, set Class to BP_ClickTarget. Keep the working Index × Spacing location calculation from the mini-project. Set the For Loop First Index to 0 and Last Index to 4 (five targets total).",
              "why": "This reuses the original loop rather than manually placing five items.",
              "check": "Press Play: exactly five cubes spawn in a line or grid."
            },
            {
              "title": "Make a controller that accepts clicks",
              "where": "Content Drawer → Loops folder → Blueprint Class → PlayerController.",
              "do": "Name it BP_LoopsPlayerController. On Event BeginPlay add Set Show Mouse Cursor = true and Set Enable Click Events = true on Self. Compile.",
              "why": "Mouse click events are disabled by default in some PlayerController setups.",
              "check": "The controller shows the mouse and enables clickable actors."
            },
            {
              "title": "Assign the controller in GameMode",
              "where": "Open your existing Loops GameMode Blueprint.",
              "do": "In Class Defaults set Player Controller Class to BP_LoopsPlayerController. Check World Settings → GameMode Override points to this GameMode. Save the level.",
              "why": "Otherwise Unreal may run a different controller and clicks will not fire.",
              "check": "Press Play and confirm the cursor is visible."
            },
            {
              "title": "Add the round state",
              "where": "Your Loops GameMode → Variables.",
              "do": "Create TargetsLeft (Integer; default 5) and Finished (Boolean; default false), then Compile.",
              "why": "One score owner keeps track of all the spawned targets.",
              "check": "The values are visible and start at 5 and false."
            },
            {
              "title": "Make the HitTarget function",
              "where": "Loops GameMode → Functions → +.",
              "do": "Create HitTarget. From its entry add a Branch for NOT Finished. On True, Set TargetsLeft = Max (Integer)(0, TargetsLeft - 1). Compile.",
              "why": "Each valid click reduces the number of targets that remain.",
              "check": "One call decreases TargetsLeft from 5 to 4."
            },
            {
              "title": "End the first test when all five are gone",
              "where": "Still in HitTarget after Set TargetsLeft.",
              "do": "Add Integer <= Integer checking TargetsLeft <= 0, connect it to a Branch. When True set Finished=true and Print String \"ALL TARGETS CLEARED!\". When False Print String with TargetsLeft.",
              "why": "This is a simple first win condition that the later Waves upgrade will replace.",
              "check": "Five distinct target clicks announce the win exactly once."
            },
            {
              "title": "Make each target respond once",
              "where": "BP_ClickTarget → Event Graph → right-click → Event ActorOnClicked.",
              "do": "From the click event add Get Game Mode → Cast To your Loops GameMode. Read Finished and Branch on NOT Finished. On True call HitTarget then Destroy Actor (Self). Compile.",
              "why": "Destroying the clicked target prevents it being scored a second time.",
              "check": "Click one cube: it disappears and the shared total decreases to four."
            },
            {
              "title": "Play the whole target challenge",
              "where": "Open Loops level → Play.",
              "do": "Click each of the five targets. Confirm they disappear one by one and the final click prints ALL TARGETS CLEARED. Restart and try them in another order.",
              "why": "This is now a complete win condition built from the Loops exercise.",
              "check": "Five successful clicks end the challenge, with no duplicate scoring."
            }
          ],
          "check": "Five targets spawn, five separate clicks clear them, and the final click announces success.",
          "fix": "Click does nothing? Confirm the cursor and Enable Click Events are set, target collision blocks the Visibility trace, and World Settings selects the intended GameMode.",
          "designerSteps": [
            "Plan: Pick a recognisable target shape and design a clear visual distinction between clickable objects and scenery. Draw a small mock-up of the nine-target 3×3 grid and timer.",
            "Create: make one original element for Turn the spawned cubes into clickable targets using targets, arena props or wave HUD graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm every target stays visible and clickable."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Finish the original Loops tutorial: GameMode spawns several visible cubes using one For Loop.",
          "commonMistake": "A clicked target needs a collision component that blocks Visibility; show the mouse cursor and enable click events on the assigned Player Controller.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "waves",
          "title": "2. Automatically spawn harder waves",
          "tier": "Essential",
          "outcome": "Clearing every target creates a fresh wave, growing from 5 to 6 to 7 targets and finishing after five waves.",
          "designer": "Design a subtle new-wave announcement and keep enough screen space for later waves with 9 targets.",
          "steps": [
            {
              "title": "Create the wave state",
              "where": "Your existing Loops GameMode → Variables.",
              "do": "Create WaveNumber (Integer; default 1), FinalWave (Integer; default 5), and TargetsHit (Integer; default 0). Keep TargetsLeft and Finished from Upgrade 1. Compile.",
              "why": "Waves increase difficulty, while TargetsHit tracks the player’s achievements across all of them.",
              "check": "WaveNumber starts at 1; FinalWave=5; TargetsHit=0."
            },
            {
              "title": "Copy your working spawn loop",
              "where": "Loops GameMode → Event Graph.",
              "do": "Select the existing For Loop and the connected Spawn Actor / Make Transform nodes. Press Ctrl+C to COPY them (do not cut or delete anything yet). If you select only the For Loop without its Spawn Actor / transform nodes, the paste will be incomplete; box-select all connected nodes before Ctrl+C.",
              "why": "Copying preserves the original working version until the new function is tested.",
              "check": "The old BeginPlay spawning still works before you change it."
            },
            {
              "title": "Paste it into StartWave",
              "where": "Loops GameMode → My Blueprint → Functions → +.",
              "do": "Create a function StartWave. Open it, press Ctrl+V to paste the For Loop and Spawn Actor nodes, then connect the purple StartWave entry white execution pin to the pasted For Loop. Compile.",
              "why": "StartWave will be called once for each new wave.",
              "check": "The function contains the old spawn chain and has no compile errors."
            },
            {
              "title": "Replace the old spawn chain with one call",
              "where": "Loops GameMode → Event Graph → BeginPlay.",
              "do": "Disconnect the old For Loop from BeginPlay, then add a call to StartWave on BeginPlay instead. Compile and Play. Once five targets appear as before, remove the unused old chain.",
              "why": "This replaces old logic only after the new version works.",
              "check": "Exactly five targets appear, not zero and not ten."
            },
            {
              "title": "Calculate a new target count for each wave",
              "where": "StartWave function, before the For Loop.",
              "do": "Create a local Integer CurrentWaveCount and set it to 4 + WaveNumber. Set TargetsLeft = CurrentWaveCount. Then set the For Loop First Index = 0 and Last Index = CurrentWaveCount - 1. Connect execution in this order: Set count → Set TargetsLeft → For Loop.",
              "why": "A loop from 0 to N-1 spawns exactly N targets; the counter must agree with the number spawned.",
              "check": "Wave 1 spawns 5, wave 2 spawns 6 and wave 3 spawns 7."
            },
            {
              "title": "Calculate the column number",
              "where": "Loops GameMode → StartWave function → For Loop Index.",
              "do": "Drag off the Index integer pin and add % (Integer) with divisor 3. Subtract 1 from the remainder using Integer - Integer. This becomes Column.",
              "why": "The three possible columns are -1, 0 and 1, giving left, middle and right positions.",
              "check": "Indexes 0,1,2 create Column values -1,0,1."
            },
            {
              "title": "Calculate the row number",
              "where": "Same StartWave graph.",
              "do": "Use Integer ÷ Integer from For Loop Index with divisor 3. This becomes Row.",
              "why": "Integer division groups indexes 0–2 in row 0, 3–5 in row 1 and 6–8 in row 2.",
              "check": "Index 6 produces Row=2, while Index 1 produces Row=0."
            },
            {
              "title": "Connect grid position to spawning",
              "where": "StartWave → Make Vector → Make Transform → Spawn Actor.",
              "do": "Set Make Vector X=200, Y=Column × 180, Z=150 + (Row × 130). Connect its Vector output to Make Transform.Location. Keep For Loop First Index=0 and Last Index=CurrentWaveCount-1.",
              "why": "The ninth spawned target fits a third row rather than extending beyond the camera horizontally.",
              "check": "The first wave has five targets in two rows; wave five can have nine in three rows."
            },
            {
              "title": "Frame the grid before increasing wave count",
              "where": "Loops level → main Camera Actor or active player view → World Settings.",
              "do": "Play-test the complete nine-target grid. If the level camera is not facing the positive-X plane, move the camera or adapt the X/Y axes in Make Vector until all nine positions fit on screen. Keep every target separated, visible and clear of the HUD.",
              "why": "A camera-dependent layout must be tested before wave progression; fixed example coordinates are only a starting point.",
              "check": "In Play at the final wave, none of the nine targets is off-screen or behind a UI panel."
            },
            {
              "title": "Record every hit",
              "where": "Loops GameMode → HitTarget function from Upgrade 1.",
              "do": "After the existing Set TargetsLeft = Max(0, TargetsLeft-1), add Set TargetsHit = TargetsHit + 1. Preserve the original ClickTarget code that destroys an actor only once.",
              "why": "TargetsHit is a useful score across several waves.",
              "check": "Click three targets: TargetsLeft falls by 3 and TargetsHit increases by 3."
            },
            {
              "title": "Replace the old immediate win",
              "where": "HitTarget function → final Branch TargetsLeft <= 0.",
              "do": "Remove the old immediate Set Finished = true and \"ALL TARGETS CLEARED\" path. Instead compare WaveNumber >= FinalWave. If True: Set Finished=true and Print String \"ALL WAVES COMPLETE!\". If False: schedule the next wave in the following steps.",
              "why": "Reaching zero targets should mean the next wave, not the end of the game, until the final wave.",
              "check": "The final-wave condition exists and is checked after the last target."
            },
            {
              "title": "Make a one-time wave advance event",
              "where": "Loops GameMode → Event Graph, in empty space.",
              "do": "Create a Custom Event AdvanceWave. Wire it to Set WaveNumber = WaveNumber + 1, followed by a call to StartWave. Compile.",
              "why": "One named event controls what happens between waves.",
              "check": "Calling AdvanceWave once increases WaveNumber and creates the correct new wave."
            },
            {
              "title": "Trigger that event when a wave finishes",
              "where": "Loops GameMode → HitTarget function → False path of WaveNumber >= FinalWave.",
              "do": "Add Set Timer by Event, set Time=0.75 and Looping=false. On its red Event pin choose AdvanceWave (or create an Event delegate to it). Wire this timer after the final-target check only; do not connect it to ordinary hits.",
              "why": "The pause helps players notice the new wave and a non-looping timer prevents repeated wave creation.",
              "check": "After clearing wave 1, exactly one wave 2 spawns 0.75 seconds later."
            },
            {
              "title": "Prevent duplicate wave scheduling",
              "where": "In HitTarget function, before the existing decrement.",
              "do": "Add a Branch with condition (NOT Finished) AND (TargetsLeft > 0). Only the True path may decrement TargetsLeft and test for the wave end. Keep BP_ClickTarget.Destroy Actor after calling HitTarget.",
              "why": "Extra events should not start more than one replacement wave.",
              "check": "The final hit schedules only one new wave."
            },
            {
              "title": "Complete a full five-wave test",
              "where": "Play the Loops level.",
              "do": "Clear each wave without changing any Blueprint during play. Record the target counts: 5, 6, 7, 8, 9. At the final target in wave 5, the game should set Finished=true and print the win message.",
              "why": "Testing progression across all waves catches off-by-one loop errors.",
              "check": "There are 35 targets total across five waves, each counted once, and the final wave finishes the game."
            }
          ],
          "check": "Clearing each wave produces the next (5→6→7→8→9 targets), and clearing wave 5 ends the run with 35 recorded hits.",
          "fix": "Still ends after five clicks? The old Finished=true path is still in HitTarget. Extra waves spawn? Ensure the gate requires TargetsLeft>0 before decrement and Set Timer by Event is not looping. Wrong count? Last Index must be CurrentWaveCount-1.",
          "designerSteps": [
            "Plan: Design a subtle new-wave announcement and keep enough screen space for later waves with 9 targets. Draw a small mock-up of the nine-target 3×3 grid and timer.",
            "Create: make one original element for Automatically spawn harder waves using targets, arena props or wave HUD graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm every target stays visible and clickable."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The first five targets must be clickable, disappear and reach TargetsLeft=0 exactly once.",
          "commonMistake": "Copy the working spawn loop first and remove the old call only after StartWave works; otherwise you can lose working logic.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "race",
          "title": "3. Add a 90-second wave race and replay",
          "tier": "Essential",
          "outcome": "A 90-second clock, wave number and target counter are visible. The player either clears all five waves or reaches Time Up, then can replay.",
          "designer": "Design an on-screen wave/timer/targets HUD and a result message for success or timeout.",
          "steps": [
            {
              "title": "Set a realistic overall time",
              "where": "Loops GameMode → Variables.",
              "do": "Create SecondsLeft (Integer; default 90). Keep Finished, WaveNumber, TargetsLeft and TargetsHit from the earlier upgrades. Compile.",
              "why": "Five waves are too much for the earlier 30-second limit; 90 seconds is a better first test value.",
              "check": "SecondsLeft starts at 90."
            },
            {
              "title": "Run a single countdown timer",
              "where": "Loops GameMode → Event Graph → Event BeginPlay.",
              "do": "Keep StartWave running on BeginPlay. Also run Set Timer by Event with Time=1.0, Looping=true and event TickRush (create a Custom Event in the Event Graph, then link via Create Event). Promote the Timer Handle to RushTimerHandle. Use a Sequence if necessary so wave spawning and the timer are both started once.",
              "why": "The timer measures one whole run, not 30 seconds per wave.",
              "check": "SecondsLeft drops by one each second during Play."
            },
            {
              "title": "Stop on time out",
              "where": "Loops GameMode → Custom Event TickRush.",
              "do": "Branch on NOT Finished. On True set SecondsLeft = Max(0, SecondsLeft-1). If SecondsLeft <= 0, set Finished=true, Print String \"TIME UP!\" and Clear and Invalidate Timer by Handle with RushTimerHandle.",
              "why": "A definite timeout makes the challenge replayable.",
              "check": "At 0 seconds the timer stops and no more targets can be scored."
            },
            {
              "title": "Stop the clock on victory",
              "where": "Loops GameMode → HitTarget → final-wave True path.",
              "do": "After Set Finished=true, add Clear and Invalidate Timer by Handle with RushTimerHandle. Keep the \"ALL WAVES COMPLETE!\" message.",
              "why": "Winning early should preserve the remaining time.",
              "check": "Finishing wave 5 stops SecondsLeft wherever it is."
            },
            {
              "title": "Do not spawn after timeout",
              "where": "Loops GameMode → AdvanceWave custom event.",
              "do": "Before incrementing WaveNumber and calling StartWave, add Branch on NOT Finished. Only True may advance.",
              "why": "A pending 0.75-second wave timer might finish after the overall clock ends.",
              "check": "At Time Up, no additional wave appears even if the previous wave just ended."
            },
            {
              "title": "Build a simple HUD",
              "where": "Content Drawer → Loops folder → User Interface → Widget Blueprint → User Widget.",
              "do": "Create WBP_TargetRushHUD and add three Text widgets WaveText, TargetsText and TimeText. Tick Is Variable. Set clear placeholder labels \"Wave: 1\", \"Targets: 5\", \"Time: 90\".",
              "why": "Players need to understand the escalating objective at a glance.",
              "check": "The three labels are visible and legible in the chosen viewport."
            },
            {
              "title": "Keep the HUD from blocking your targets",
              "where": "WBP_TargetRushHUD → Designer → select the root Canvas Panel.",
              "do": "Set Visibility on the root Canvas Panel to Not Hit-Testable (Self & All Children). The wave game uses keyboard R to restart, so this display has no interactive buttons. Leave the player controller mouse-click events enabled.",
              "why": "A decorative UMG overlay must not intercept clicks on the target Actors behind it.",
              "check": "Click a target through empty HUD areas; its TargetsLeft counter still drops."
            },
            {
              "title": "Connect the HUD values",
              "where": "WBP_TargetRushHUD → each text element → Details → Text → Bind → Create Binding.",
              "do": "Read the assigned Loops GameMode using Get Game Mode → Cast. WaveText reads WaveNumber; TargetsText reads TargetsLeft; TimeText reads SecondsLeft. Convert to Text (Integer) or use Format Text with labels. Compile.",
              "why": "The HUD reads the one GameMode state rather than maintaining duplicate values.",
              "check": "When wave 2 appears, the display reads Wave 2 and Targets 6."
            },
            {
              "title": "Display a persistent end message",
              "where": "WBP_TargetRushHUD → Designer.",
              "do": "Add ResultText with \"GAME OVER\" initially Collapsed and tick Is Variable. Add a function RefreshResult: Get Game Mode → Cast to Loops GameMode → check Finished. When true, show ResultText and choose \"WAVES CLEARED!\" if WaveNumber >= FinalWave AND TargetsLeft == 0; otherwise show \"TIME UP!\". In Event Construct use repeating Set Timer by Event (0.25 sec) to run RefreshResult.",
              "why": "The game should tell the player whether they won or ran out of time.",
              "check": "After the run, a visible message stays until replay."
            },
            {
              "title": "Create a replay input",
              "where": "Content Drawer → Loops → Input folder and BP_LoopsPlayerController.",
              "do": "Create IA_RestartRush (Boolean) and IMC_TargetRush with an R binding. On the controller BeginPlay add the mapping context via Enhanced Input Local Player Subsystem; use IA_RestartRush Started → Get Current Level Name (Remove Prefix String=true) → Open Level by Name. Compile.",
              "why": "Reopening the current map returns wave, targets, scores and timer to their defaults.",
              "check": "Press R at any point: five new targets and a 90-second clock appear."
            },
            {
              "title": "Put the HUD in the controller",
              "where": "BP_LoopsPlayerController → Event BeginPlay.",
              "do": "After the existing Show Mouse Cursor / Enable Click Events setup, add Create Widget (WBP_TargetRushHUD, Owning Player=Self) → Add to Viewport. Use Sequence if needed so click events, input mapping and UI creation all run. Compile.",
              "why": "The controller is already active in the original target game.",
              "check": "Wave, targets and timer are visible immediately on starting Play."
            }
          ],
          "check": "Waves and targets count correctly, the time drops 90→0, a win or loss result appears, and R starts a fresh five-wave run.",
          "fix": "Timer or labels missing? Check you use the active Loops GameMode and Controller via World Settings. If the UI remains unchanged after a new wave, confirm each Text binding reads the GameMode variables; refresh end message on a widget timer. If click targets stop responding after adding the HUD, verify the root is Not Hit-Testable (Self & All Children).",
          "designerSteps": [
            "Plan: Design an on-screen wave/timer/targets HUD and a result message for success or timeout. Draw a small mock-up of the nine-target 3×3 grid and timer.",
            "Create: make one original element for Add a 90-second wave race and replay using targets, arena props or wave HUD graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm every target stays visible and clickable."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "All five waves should appear in order and finish on wave 5. The HUD and timer are being added to the existing GameMode.",
          "commonMistake": "If the HUD appears but targets do not react, make the overlay Not Hit-Testable (Self & All Children).",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        },
        {
          "id": "random",
          "title": "4. Optional: randomise target positions safely",
          "tier": "Creative",
          "outcome": "Every new wave spawns within a marked, visible area rather than lining targets up at fixed coordinates.",
          "designer": "Design a level that is readable with targets appearing anywhere inside the playfield. Keep target shapes and colours easy to distinguish.",
          "steps": [
            {
              "title": "Create a visible spawn area actor",
              "where": "Content Drawer → Loops → Blueprint Class → Actor.",
              "do": "Name it BP_TargetSpawnArea. Add a Box Collision component named SpawnBounds. Set Collision Presets to NoCollision and initially use box extents X=50, Y=380, Z=220. Compile.",
              "why": "A level designer can move and resize one box to control random spawn positions.",
              "check": "The Box Collision component exists and does not block mouse traces."
            },
            {
              "title": "Place the area in the player view",
              "where": "Open the Loops level.",
              "do": "Drag one BP_TargetSpawnArea actor into the map. Move and resize the SpawnBounds box so its whole volume sits in the camera view, above the floor and away from the HUD. Save the level.",
              "why": "Random positions are only useful when targets remain visible and clickable.",
              "check": "The box fits the available playfield."
            },
            {
              "title": "Get a random point in the area",
              "where": "Loops GameMode → StartWave function.",
              "do": "Find the placed BP_TargetSpawnArea with Get Actor of Class → Cast To BP_TargetSpawnArea, then get its SpawnBounds component. Connect Get World Location to the Center pin of Random Point in Bounding Box, and Get Scaled Box Extent to its Half Size pin (UE5.8). Keep SpawnBounds unrotated.",
              "why": "The box controls location even if the level designer moves it later.",
              "check": "A random Vector is produced inside the placed box."
            },
            {
              "title": "Use the random location for every target",
              "where": "Loops GameMode → Spawn Actor From Class inside the existing For Loop.",
              "do": "In StartWave, replace the grid Make Transform.Location created in Upgrade 2 with the Random Point in Bounding Box Return Value. Keep the same CurrentWaveCount-controlled For Loop iterations (5 to 9). For the simple axis-aligned version, do not rotate SpawnBounds. Set Spawn Collision Handling Override to Always Spawn, Ignore Collisions only for this controlled target arena.",
              "why": "The loop still controls quantity; only the placement strategy changes.",
              "check": "Wave 1 still makes five targets, but they appear in different places on each restart."
            },
            {
              "title": "Check clickability and overlapping",
              "where": "Play In Editor.",
              "do": "Restart with R at least three times. Confirm that every target is visible and clickable. If targets overlap too often, increase box dimensions or reduce target scale. Keep SpawnBounds non-colliding.",
              "why": "Randomness needs quality checks or it can create unfair layouts.",
              "check": "No target is hidden behind the HUD or unreachable."
            },
            {
              "title": "Use the system for your own game idea",
              "where": "Artist/designer PC and shared Teams folder.",
              "do": "Replace the cube with your own target asset or design a new themed playfield. Adjust the area and target size together so difficulty remains fair.",
              "why": "A reusable wave and random-spawn system can support whack-a-mole, defence, shooting galleries or collection games.",
              "check": "Your pair can demonstrate a recognisably original game built from the same core mechanic."
            }
          ],
          "check": "Wave target counts remain 5→9, but each wave spawns targets at varied clickable positions inside a designer-controlled zone.",
          "fix": "No targets? Confirm a BP_TargetSpawnArea is placed and the Get Actor of Class cast succeeds. Overlap hides targets? Expand SpawnBounds, scale down targets or keep fixed positions for the required version.",
          "designerSteps": [
            "Plan: Design a level that is readable with targets appearing anywhere inside the playfield. Keep target shapes and colours easy to distinguish. Draw a small mock-up of the nine-target 3×3 grid and timer.",
            "Create: make one original element for Optional: randomise target positions safely using targets, arena props or wave HUD graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm every target stays visible and clickable."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The complete five-wave game works already. Random positions are optional and can replace the fixed grid.",
          "commonMistake": "A random position can be hidden by another object. If this happens, return to the reliable 3x3 grid or enlarge the spawn box.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one."
        }
      ],
      "minimumStage": "race",
      "minimumOutcome": "A scored five-wave target game with an overall 90-second timer, visible wave progress and replay."
    }
  ]
};
