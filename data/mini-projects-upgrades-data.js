/* Expanded text-only game-jam build routes. Original course content and progress remain untouched. */
window.UE5_MINI_UPGRADE_DATA = {
  "version": "3.65.0",
  "title": "Mini-Project Upgrade Walkthroughs",
  "intro": "Finish one original guided Mini-Project, then follow these text-only expansions. Start with Essential stages; the Creative stage gives your pair room to make it yours. Save your Unreal project after every stage.",
  "projects": [
    {
      "project": "balloon-popper",
      "title": "Balloon Popper → Arcade Challenge",
      "intro": "Build a loop that lasts: score a pop, create replacement balloons, play a timed round, mix in danger balloons and finish with a results/replay screen. Complete the Essential upgrades before optional creative variations.",
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
              "title": "Create a reusable points function",
              "where": "Still in BP_BalloonGameMode → My Blueprint → Functions → +.",
              "do": "Name the function AwardPoints. In Details → Inputs add Points (Integer). Drag Score into the graph as Get, connect it to Integer + Points, pass that result through Max (Integer) with the other input 0, then Set Score. Wire the white execution flow from the function entry to Set Score.",
              "why": "An input lets safe and dangerous balloons change the same score later. Max prevents a negative total.",
              "check": "Compile; AwardPoints has an integer Points input and sets Score."
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
          "fix": "No score? Confirm BP_BalloonGameMode is the World Settings GameMode Override, check the cast Success pin is wired, and ensure AwardPoints is called before Destroy Actor."
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
              "title": "Create a spawn function",
              "where": "BP_BalloonSpawner → My Blueprint → Functions → +.",
              "do": "Create a function SpawnOneBalloon. Drag SpawnArea into the graph and call Get World Location and Get Scaled Box Extent from that component. Connect those values to Random Point in Bounding Box (Origin and Box Extent).",
              "why": "The random point will be inside the box at the spawner’s actual level position.",
              "check": "Random Point in Bounding Box produces a Vector output."
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
              "check": "One press of Play shows five newly created balloons."
            },
            {
              "title": "Put the spawn box where the camera can see it",
              "where": "Open BalloonPopperLevel.",
              "do": "Delete the old manually placed BP_Balloon target actors (leave the camera, lighting and other scenery). Place one BP_BalloonSpawner in the level, move it into the camera view and scale its SpawnArea box to suit your framing. Set SpawnArea Collision Presets to NoCollision so the box never blocks click traces.",
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
              "title": "Ask for another balloon when one pops",
              "where": "BP_Balloon → Event Graph → the True pop branch from the original tutorial.",
              "do": "Keep AwardPoints first. After the score call but BEFORE Destroy Actor, add Get Actor of Class (Actor Class = BP_BalloonSpawner) → Cast To BP_BalloonSpawner → RequestReplacement. Connect the white execution pins so the order is AwardPoints → Cast success → RequestReplacement → Destroy Actor (Self). If the spawner reference might be missing, also connect Cast Failed to Destroy Actor.",
              "why": "Popping replaces exactly one balloon, while the old actor is removed normally.",
              "check": "Pop three balloons in a row: five remain on screen and the total score rises by three."
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
          "fix": "Only four remain? Verify RequestReplacement runs before Destroy Actor. More than five? Delete the old placed balloons or check that BeginPlay fires only once. Invisible targets? Reposition the Box Collision volume in the camera view; avoid randomly moving the camera."
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
              "title": "Create a one-second clock event",
              "where": "BP_BalloonGameMode → Event Graph.",
              "do": "From Event BeginPlay add Set Timer by Event, set Time = 1.0 and Looping = true. On its red Event pin create a matching Custom Event named TickClock. Promote the timer Return Value to a variable named ClockHandle.",
              "why": "A timer updates once per second; Event Tick is unnecessary for a countdown.",
              "check": "The white BeginPlay wire starts a repeating 1-second timer."
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
          "fix": "HUD missing? Check the controller is assigned in BP_BalloonGameMode and Create Widget is connected. Time frozen? Confirm TickClock is connected to Set Timer by Event with Looping ticked."
        },
        {
          "id": "risk",
          "title": "4. Mix safe and danger balloons into random spawns",
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
              "title": "Choose which class to spawn",
              "where": "BP_BalloonSpawner → SpawnOneBalloon function, before Spawn Actor from Class.",
              "do": "Create a local variable SelectedBalloonClass with variable type Actor Class Reference; compile. Add Random Float in Range (0.0, 1.0) → <= 0.2 → Branch. On True set SelectedBalloonClass to BP_DangerBalloon; on False set it to BP_Balloon. Wire both paths to a common SpawnActor from Class (you can use two separate Spawn Actor nodes if easier). Replace the Spawn Actor fixed Class input with Get SelectedBalloonClass.",
              "why": "Roughly one out of five balloons is risky, but the exact mix varies.",
              "check": "A test run spawns a mixture of both classes; the majority are normal."
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
          "fix": "Only safe targets? Inspect SelectedBalloonClass values and ensure both Branch paths connect before the single Spawn Actor call. Too many balloons? Check only one spawn path executes. Danger balloons vanish permanently? Check their copied pop chain calls RequestReplacement."
        },
        {
          "id": "results",
          "title": "5. Add a visible game-over result and Play Again",
          "tier": "Essential",
          "outcome": "Time Up leaves a final score on screen and a Play Again button starts a fresh round.",
          "designer": "Design a simple results panel with a large final score and obvious replay button; test it at the actual game resolution.",
          "steps": [
            {
              "title": "Create a results panel in the HUD",
              "where": "WBP_BalloonHUD → Designer.",
              "do": "Add a Border or Vertical Box named ResultsPanel. Add a Text widget named FinalScoreText with placeholder \"Round over\" and a Button named ReplayButton with a child Text \"Play Again\". Tick Is Variable on ResultsPanel and FinalScoreText. Set ResultsPanel Visibility to Collapsed initially.",
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
          "check": "At time zero the round freezes and the final score appears; Play Again starts with five targets and a clean 60-second score challenge.",
          "fix": "Results never appear? Check RefreshRoundScreen is bound to the widget timer, RoundEnded is in the correct GameMode, and ResultsPanel was marked Is Variable. Cannot replay? Connect the current level name to Open Level."
        }
      ]
    },
    {
      "project": "bowling",
      "title": "Bowling → Arcade Bowling",
      "intro": "Make a bowling game with several throws, points that survive between shots, a results screen and a bonus target. Complete Essential upgrades first; optional shot-power controls give more advanced teams a challenge.",
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
              "title": "Make a RecordPin function",
              "where": "BP_BowlingGameMode → Functions → + → name it RecordPin.",
              "do": "Add input PinValue (Integer). At the start use Branch with NOT RoundFinished. On True set PinsDown = PinsDown + 1, then Score = Score + PinValue. Print a message with the score using ToString (Integer) and Append.",
              "why": "Keeping totals in GameMode avoids separate pin scores disagreeing.",
              "check": "RecordPin takes one integer input and updates both totals only while the round is active."
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
              "title": "Measure whether the pin is leaning",
              "where": "BP_BowlingPin → Event Graph, after the Counted check.",
              "do": "Drag the pin Static Mesh component into the graph as Get, then Get Up Vector. Use Dot Product (Vector) with the other input set to X=0, Y=0, Z=1. Compare the result with < (Float), threshold 0.65. Add a Branch controlled by that comparison.",
              "why": "An upright mesh has a world-up dot product near 1; a toppled pin is much lower.",
              "check": "An upright pin does not pass the test; tipping it sideways does."
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
          "fix": "If no score appears, confirm pins are BP_BowlingPin actors, the pin mesh simulates physics, and the mesh up-axis is Z when upright. Adjust the 0.65 threshold only after watching the dot-product value while testing."
        },
        {
          "id": "throws",
          "title": "2. Reset the ball and allow three throws",
          "tier": "Essential",
          "outcome": "The player has up to three throws. The ball resets between them, fallen pins and score remain, and the round finishes after the final throw settles.",
          "designer": "Design a clear Throws Left indicator and short instructions: arrow keys aim, Space throws, R restarts the round.",
          "steps": [
            {
              "title": "Save the starting ball transform",
              "where": "BP_BowlingBall → My Blueprint → Variables → +.",
              "do": "Create StartingMeshTransform (Transform). In Event BeginPlay drag the ball Static Mesh component into the graph → Get World Transform → Set StartingMeshTransform. Compile.",
              "why": "Physics may move the mesh separately from the actor, so save the mesh world transform itself.",
              "check": "Before throwing, StartingMeshTransform matches the resting ball mesh position."
            },
            {
              "title": "Add a ResetBall custom event",
              "where": "BP_BowlingBall → Event Graph → Add Custom Event → ResetBall.",
              "do": "Drag the ball Static Mesh component in as Get. Wire ResetBall → Set Simulate Physics(false) → Set World Transform (New Transform = StartingMeshTransform, Teleport=true, Sweep=false) → Set Simulate Physics(true) → Set Physics Linear Velocity (0,0,0) → Set Physics Angular Velocity in Degrees (0,0,0). Compile.",
              "why": "The mesh returns to its launch mark without reloading the whole map or resetting pins.",
              "check": "Call ResetBall manually in the Blueprint debugger after a throw: the mesh returns and stays still."
            },
            {
              "title": "Count throws in the Player Controller",
              "where": "BP_BowlingPlayerController → Variables.",
              "do": "Create ThrowsUsed (Integer; default 0), MaxThrows (Integer; default 3) and IsBallInMotion (Boolean; default false). Compile.",
              "why": "The controller owns the player input and knows when another throw is allowed.",
              "check": "All three variables start with 0, 3 and false."
            },
            {
              "title": "Prevent double throws",
              "where": "BP_BowlingPlayerController → existing IA_Throw event (Started).",
              "do": "Before the existing call to the ball’s throw event, Get Game Mode → Cast To BP_BowlingGameMode and test three conditions with Boolean AND: NOT RoundFinished, NOT IsBallInMotion, ThrowsUsed < MaxThrows. Put that in Branch; only the True path may throw.",
              "why": "Repeated Space presses while the ball is travelling should not consume extra shots.",
              "check": "Holding or tapping Space several times during a throw does not throw twice."
            },
            {
              "title": "Track a successful throw",
              "where": "BP_BowlingPlayerController → True branch of the new throw gate.",
              "do": "Immediately before the existing ball throw call, set ThrowsUsed = ThrowsUsed + 1 and IsBallInMotion = true. Then call the original throw event exactly once. Compile.",
              "why": "Each valid throw consumes one attempt, regardless of whether it hits any pins.",
              "check": "After the first Space press, ThrowsUsed is 1 and IsBallInMotion is true."
            },
            {
              "title": "Allow time for physics to settle",
              "where": "BP_BowlingPlayerController → after the successful throw event.",
              "do": "Add Delay (Duration 4.0) → call a new Custom Event FinishThrow in the same controller. On FinishThrow set IsBallInMotion=false. Use Delay from the controller Event Graph, not inside a Blueprint Function.",
              "why": "Pin collisions should be allowed to settle before the ball is reset or the round is scored.",
              "check": "Four seconds after throwing, the controller becomes ready for the next decision."
            },
            {
              "title": "Reset for another shot when available",
              "where": "BP_BowlingPlayerController → FinishThrow, after IsBallInMotion=false.",
              "do": "Get Game Mode → Cast To BP_BowlingGameMode → Branch (NOT RoundFinished AND ThrowsUsed < MaxThrows). On True call ResetBall on the same saved BP_BowlingBall reference used for the existing Throw action. Do NOT reset any pin actors.",
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
          "fix": "Ball fails to reset? Confirm you stored the mesh (not actor) transform before physics moved it, and ResetBall uses the same mesh component. One press spends multiple throws? Check IA_Throw uses Started, not Triggered. Score missing after last shot? Ensure FinishRound is called after Delay 4 seconds."
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
              "do": "Create WBP_BowlingHUD. In Designer add three Text widgets ScoreText, PinsText and ThrowsText, and mark Is Variable on each. Start with “Score: 0”, “Pins: 0” and “Throws left: 3”.",
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
          "fix": "Scores differ? Ensure each pin has Counted true after first fall and passes PinValue into RecordPin. Result never shows? RefreshResult must run on a repeating timer and read RoundFinished from the assigned GameMode."
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
              "where": "BP_BowlingBall → Event Graph → existing custom Throw event.",
              "do": "On the custom Throw event, add a Float input named Strength. Replace the current fixed strength or impulse-magnitude value with the Strength input, retaining the original direction calculation. Note the value that used to work before making the change.",
              "why": "Power belongs to the throw event rather than multiple duplicated throw Blueprints.",
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
              "where": "BP_BowlingPlayerController → existing gated IA_Throw chain from Upgrade 2.",
              "do": "Multiply BaseThrowPower × PowerMultiplier and connect the result to the new Strength pin on the existing BP_BowlingBall Throw call. Do not create a second Throw call. Compile.",
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
          "fix": "No power difference? Check the actual AddImpulse or AddForce magnitude uses the new Strength pin. If Throw always uses a constant, it will ignore the controller’s multiplier."
        }
      ]
    },
    {
      "project": "clicker",
      "title": "Clicker → Upgrade Shop",
      "intro": "Start with the original click and shop, then build an incremental economy: points to spend, lifetime earnings, Grannies producing one point per second, Granny training and larger producer types. The automation keeps running while you play. This is an original student game, not a copy of Cookie Clicker artwork.",
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
              "where": "Open the Clicker project → your existing Clicker GameMode Blueprint → Variables.",
              "do": "Create ClickPower (Integer; default 1) and UpgradeCost (Integer; default 10). Keep the existing Score variable from the tutorial. Compile.",
              "why": "The existing Score remains the only balance; upgrades alter how quickly it grows.",
              "check": "The GameMode now contains Score, ClickPower and UpgradeCost."
            },
            {
              "title": "Turn the existing click into a function",
              "where": "Clicker GameMode → Functions → +.",
              "do": "Create a function named AddClick. Set Score to Score + ClickPower. Compile.",
              "why": "A single function avoids accidentally adding both the old +1 and the new click power.",
              "check": "Calling AddClick once with ClickPower = 1 raises Score by 1."
            },
            {
              "title": "Replace the old +1 event",
              "where": "Open your existing Clicker Widget Blueprint → the main button OnClicked event.",
              "do": "Find the original chain that increments the GameMode Score by 1. Replace that increment with Get Game Mode → Cast To your Clicker GameMode → AddClick. Remove or disconnect the old +1 chain.",
              "why": "The new function must be the ONLY place a click changes the score.",
              "check": "Ten clicks give exactly 10 points before buying upgrades, not 20."
            },
            {
              "title": "Create a BuyUpgrade function",
              "where": "Clicker GameMode → Functions → + → name it BuyUpgrade.",
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
              "do": "Select BuyUpgradeButton in the Designer, then in Details → Events click + beside OnClicked. Connect the new event to Get Game Mode → Cast To your Clicker GameMode → BuyUpgrade. Compile.",
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
          "fix": "Purchase not working? Confirm BuyUpgradeButton is wired to its own OnClicked, the GameMode cast succeeds and the original score increment was removed."
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
              "do": "Name the new function RefreshShop. Add Get Game Mode → Cast To your Clicker GameMode. Read Score, ClickPower and UpgradeCost. Convert each Integer with ToText (Integer) or Format Text, then call SetText on the corresponding Text widgets. Wire the white execution pins so all three SetText calls run.",
              "why": "A single refresh function updates related UI together.",
              "check": "RefreshShop compiles and references the three correct Text widgets."
            },
            {
              "title": "Refresh after clicking",
              "where": "Clicker Widget → main click button OnClicked event.",
              "do": "After the successful AddClick call, add a call to RefreshShop. Remove any old second method of displaying Score if it conflicts with the new label.",
              "why": "The player should see the updated balance immediately.",
              "check": "A single main-button click changes Points and leaves the other two labels as they were."
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
          "fix": "Text frozen? Make sure RefreshShop is called after BOTH button events and Event Construct. If labels are not accessible in Graph, enable Is Variable in the Designer."
        },
        {
          "id": "goal",
          "title": "3. Track lifetime earnings and show a milestone",
          "tier": "Essential",
          "outcome": "The game tracks spendable Score separately from TotalEarned. Spending never reduces TotalEarned, and the first 500 earned points trigger a milestone message without stopping the game.",
          "designer": "Design a small “500 earned” achievement banner and decide how the player can see their total production over time.",
          "steps": [
            {
              "title": "Keep two separate point values",
              "where": "Clicker GameMode → My Blueprint → Variables.",
              "do": "Keep the existing Score integer as the balance the player spends. Create TotalEarned (Integer; 0), MilestoneTarget (Integer; 500) and MilestoneReached (Boolean; false). Compile.",
              "why": "TotalEarned should measure progress even if the player buys many upgrades.",
              "check": "Score and TotalEarned both begin at zero; MilestoneTarget reads 500."
            },
            {
              "title": "Make a reusable earning function",
              "where": "Clicker GameMode → Functions → +.",
              "do": "Create GainPoints with an Integer input Amount. In the function add Branch (Amount > 0). On True set Score = Score + Amount and then set TotalEarned = TotalEarned + Amount. Wire both Set nodes in sequence.",
              "why": "Manual clicks and later automated Grannies should award points through one shared function.",
              "check": "A single GainPoints(10) increases both values by 10."
            },
            {
              "title": "Check the milestone from earned points",
              "where": "Clicker GameMode → GainPoints, immediately after Set TotalEarned.",
              "do": "Add Branch with condition (NOT MilestoneReached) AND (TotalEarned >= MilestoneTarget). On True set MilestoneReached=true; Print String \"500 lifetime points earned!\". Do not reset Score or disable any buttons.",
              "why": "A milestone celebrates progress without ending a game that can continue growing.",
              "check": "The banner condition only becomes true once when lifetime earnings reach 500."
            },
            {
              "title": "Replace only the manual earning calculation",
              "where": "Clicker GameMode → AddClick function from Upgrade 1.",
              "do": "Remove the old Set Score = Score + ClickPower chain. Instead call GainPoints and feed the existing ClickPower integer into Amount. Keep the original widget button calling AddClick once. Compile.",
              "why": "The manual click should update both counters but still earn the same amount as before.",
              "check": "A new game gives Score=1 and TotalEarned=1 after one click."
            },
            {
              "title": "Keep purchasing connected only to balance",
              "where": "Clicker GameMode → BuyUpgrade function.",
              "do": "Confirm the purchase checks Score >= UpgradeCost and reduces Score on success. Do NOT subtract anything from TotalEarned. Leave the existing ClickPower increase and rising UpgradeCost as they are.",
              "why": "Buying an upgrade should never erase lifetime progress.",
              "check": "Earn 10, purchase for 10: Score=0 but TotalEarned=10."
            },
            {
              "title": "Show lifetime progress and the milestone",
              "where": "Existing Clicker Widget → Designer.",
              "do": "Add two Text widgets LifetimeText and MilestoneText and mark both Is Variable. LifetimeText starts \"Lifetime: 0\". MilestoneText starts with \"500 EARNED!\" and Visibility=Collapsed.",
              "why": "The player should see progress towards the next goal.",
              "check": "The initial UI has a lifetime label but no achievement banner."
            },
            {
              "title": "Refresh these new HUD values",
              "where": "Clicker Widget → existing RefreshShop function.",
              "do": "Read TotalEarned and MilestoneReached from the same GameMode cast used for score/power/cost. Use SetText on LifetimeText after integer-to-text conversion. Branch on MilestoneReached: Visible for MilestoneText when true, Collapsed otherwise. Compile.",
              "why": "Using RefreshShop keeps the new labels consistent with the current economy.",
              "check": "After a purchase, Score goes down but Lifetime remains unchanged, and the milestone appears at 500."
            },
            {
              "title": "Prove lifetime earnings are correct",
              "where": "Play the Clicker game.",
              "do": "Click ten times, buy the first upgrade, then click five times more. Expected: TotalEarned=20 (10 + five clicks worth two each), and Score=10 after the purchase. Later verify the milestone still appears after 500 total points.",
              "why": "A numerical test catches double counting and accidental spending of lifetime progress.",
              "check": "The values match the expected totals and buttons remain clickable after the first milestone."
            }
          ],
          "check": "Buying an upgrade reduces spendable Score but never TotalEarned. Reaching 500 earned points shows an achievement without stopping play.",
          "fix": "Lifetime never changes? Ensure AddClick calls GainPoints, not the original Set Score. A purchase changes TotalEarned? Remove any TotalEarned Set nodes from BuyUpgrade. If the milestone never appears, check RefreshShop reads the Boolean from the correct GameMode."
        },
        {
          "id": "granny",
          "title": "4. Hire Grannies for automatic income",
          "tier": "Essential",
          "outcome": "Buying a Granny costs 15 points; each owned Granny adds one point per second automatically. The next Granny costs more, and the number owned is visible.",
          "designer": "Design a Granny producer card, icon and Buy Granny button. Make it clear that this earns points per second without clicking.",
          "steps": [
            {
              "title": "Create the Granny economy variables",
              "where": "Clicker GameMode → My Blueprint → Variables.",
              "do": "Create GranniesOwned (Integer; default 0), GrannyRate (Integer; default 1) and GrannyCost (Integer; default 15). Compile.",
              "why": "These three values describe how many producers you own, their production, and the next price.",
              "check": "Starting values are 0 Grannies, 1 point/second each, and a price of 15."
            },
            {
              "title": "Make the purchase function",
              "where": "Clicker GameMode → Functions → +.",
              "do": "Create BuyGranny. Add Branch with condition Score >= GrannyCost. On True, wire Set Score = Score - GrannyCost → Set GranniesOwned = GranniesOwned + 1 → Set GrannyCost = Ceiling(GrannyCost × 1.25). Ceiling converts the float price calculation back to an integer. False does nothing.",
              "why": "Buying more producers becomes progressively expensive, but can never spend negative points.",
              "check": "When Score=15, one purchase changes Score to 0, GranniesOwned to 1 and the next GrannyCost to 19."
            },
            {
              "title": "Calculate production per second in one place",
              "where": "Clicker GameMode → Functions → +.",
              "do": "Create a PURE function GetProductionPerSecond with one Integer output Production. Get GranniesOwned and GrannyRate, multiply the integers, connect to the Return Node output and compile.",
              "why": "All automated producers can share one game timer and one production calculation.",
              "check": "One Granny returns 1; three Grannies return 3; no Grannies returns 0."
            },
            {
              "title": "Create the automatic one-second timer",
              "where": "Clicker GameMode → Event Graph → Event BeginPlay.",
              "do": "Connect Event BeginPlay to Set Timer by Event, Time=1.0, Looping=true. Create a Custom Event named ProduceIncome and connect a Create Event reference for it to the timer red Event input. Save the returned Timer Handle if you want to stop it in a later mode.",
              "why": "The GameMode can automatically award points once per second without pressing the click button or using Event Tick.",
              "check": "ProduceIncome runs once each second when Play starts."
            },
            {
              "title": "Pay the player every second",
              "where": "Clicker GameMode → ProduceIncome.",
              "do": "Call GetProductionPerSecond and feed its Integer result to GainPoints(Amount). GainPoints already ignores zero amounts and updates Score and TotalEarned. Compile.",
              "why": "This simulates automatic clicks using the same earning rules as manual clicks.",
              "check": "Buy one Granny, leave the mouse alone for five seconds: both counters rise by about five. Buy a second Granny: they rise by about two each second."
            },
            {
              "title": "Add a Granny shop button and labels",
              "where": "Clicker Widget → Designer.",
              "do": "Add a Button named BuyGrannyButton with text \"Buy Granny\". Add Text widgets GranniesText and PassiveIncomeText; tick Is Variable. Placeholder text: \"Grannies: 0\" and \"Auto: 0 / sec\".",
              "why": "The player must understand what the new upgrade does and how many producers they own.",
              "check": "A visible button and both labels fit the shop."
            },
            {
              "title": "Connect Granny purchases",
              "where": "Clicker Widget → Graph → BuyGrannyButton → OnClicked.",
              "do": "Use Get Game Mode → Cast To the Clicker GameMode → BuyGranny, then call RefreshShop on the widget. Compile.",
              "why": "The UI requests the purchase while GameMode owns the economy.",
              "check": "The button buys one Granny only when you have enough points."
            },
            {
              "title": "Show the next price and automatic income",
              "where": "Clicker Widget → RefreshShop function.",
              "do": "From the Clicker GameMode cast, read GranniesOwned and GrannyCost. Format the labels into text such as \"Grannies: 2 | Next: 24\" using Format Text. Call GetProductionPerSecond and SetText on PassiveIncomeText using \"Auto: {Production} / sec\".",
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
          "check": "The first Granny costs 15 and produces 1 point/sec; buying two produces 2/sec, with increasing costs and a live automatic score display.",
          "fix": "No passive income? Check ProduceIncome is bound to the repeating GameMode timer, and GainPoints is called with a positive amount. Income changes internally but not on screen? Check the widget refresh timer and RefreshShop. Buying creates negative points? Branch must run BEFORE reducing Score."
        },
        {
          "id": "training",
          "title": "5. Train Grannies to double their output",
          "tier": "Essential",
          "outcome": "A 100-point training upgrade doubles production from every owned Granny. Repeated training increases the rate 1→2→4→8 points per second per Granny.",
          "designer": "Make an upgrade card showing the current Granny rate and the next training cost. Communicate the benefit clearly.",
          "steps": [
            {
              "title": "Add the upgrade price",
              "where": "Clicker GameMode → Variables.",
              "do": "Create GrannyTrainingCost (Integer; default 100). Keep existing GrannyRate (Integer; default 1). Compile.",
              "why": "A single price governs the next training purchase.",
              "check": "The default rate is 1 and the training price is 100."
            },
            {
              "title": "Make the training purchase function",
              "where": "Clicker GameMode → Functions → +.",
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
              "do": "Use Get Game Mode → Cast To Clicker GameMode → TrainGrannies → RefreshShop. Compile.",
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
          "fix": "Rate unchanged? Make sure GetProductionPerSecond multiplies GranniesOwned by GrannyRate and RefreshShop reads that function. If training buys at zero Grannies, add the GranniesOwned > 0 condition to the Branch."
        },
        {
          "id": "farm",
          "title": "6. Optional: add a second producer type",
          "tier": "Creative",
          "outcome": "Players can buy Farms producing 5 points per second each. Granny and Farm income accumulate through the same single production timer.",
          "designer": "Create an original second producer with distinctive artwork, price and theme. Rebrand Grannies and Farms if your game is about robots, potion shops or a spaceship.",
          "steps": [
            {
              "title": "Add Farm variables",
              "where": "Clicker GameMode → Variables.",
              "do": "Create FarmsOwned (Integer; default 0), FarmRate (Integer; default 5) and FarmCost (Integer; default 100). Compile.",
              "why": "Every producer can be represented by owned, rate and cost; the pattern can be repeated for new ideas.",
              "check": "The three starting values are 0, 5 and 100."
            },
            {
              "title": "Build the Farm purchase function",
              "where": "Clicker GameMode → Functions → +.",
              "do": "Create BuyFarm. Add Branch (Score >= FarmCost). From True: Set Score = Score - FarmCost → Set FarmsOwned = FarmsOwned + 1 → Set FarmCost = Ceiling(FarmCost × 1.30). Compile.",
              "why": "This uses the same proven purchase structure as BuyGranny, so students can expand independently.",
              "check": "After buying the first Farm for 100, the next one costs 130."
            },
            {
              "title": "Extend the one income calculation",
              "where": "Clicker GameMode → GetProductionPerSecond function.",
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
              "title": "Test combined income and milestone",
              "where": "Play the game.",
              "do": "With 3 Grannies at 2/sec each and 2 Farms at 5/sec each, check Auto is (3×2)+(2×5)=16/sec. Leave the mouse still for five seconds, and confirm the score rises by about 80 (unless you spend).",
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
          "check": "Grannies and Farms stack their earnings (for example, 3×2 + 2×5 = 16/sec), prices rise after purchases, and the game still uses one automatic income timer.",
          "fix": "Income wrong? Check GetProductionPerSecond includes both terms and ProduceIncome calls it once per second. If income doubles unexpectedly, look for a second timer or an old direct Set Score chain."
        }
      ]
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
              "title": "Create one shared hit counter",
              "where": "Loops GameMode → Variables.",
              "do": "Create TargetsLeft (Integer; default 5) and Finished (Boolean; default false). Create a function HitTarget: Branch on NOT Finished → Set TargetsLeft = Max (Integer)(0, TargetsLeft - 1) → Branch TargetsLeft <= 0 → on True Set Finished = true and Print String \"ALL TARGETS CLEARED!\". Print TargetsLeft after a normal hit as well.",
              "why": "One shared counter recognises the completed wave.",
              "check": "HitTarget compiles and one call lowers TargetsLeft by one."
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
          "fix": "Click does nothing? Confirm the cursor and Enable Click Events are set, target collision blocks the Visibility trace, and World Settings selects the intended GameMode."
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
              "title": "Move the original spawn loop into a function",
              "where": "Loops GameMode → Functions → +.",
              "do": "Create a function StartWave. Cut the existing For Loop plus its Spawn Actor chain out of Event BeginPlay and paste them into StartWave. Connect the function entry to the For Loop. From BeginPlay call StartWave ONCE.",
              "why": "A function lets each later wave reuse the same spawn logic without repeating nodes.",
              "check": "Play still shows five targets in the first wave."
            },
            {
              "title": "Calculate a new target count for each wave",
              "where": "StartWave function, before the For Loop.",
              "do": "Create a local Integer CurrentWaveCount and set it to 4 + WaveNumber. Set TargetsLeft = CurrentWaveCount. Then set the For Loop First Index = 0 and Last Index = CurrentWaveCount - 1. Connect execution in this order: Set count → Set TargetsLeft → For Loop.",
              "why": "A loop from 0 to N-1 spawns exactly N targets; the counter must agree with the number spawned.",
              "check": "Wave 1 spawns 5, wave 2 spawns 6 and wave 3 spawns 7."
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
              "title": "Schedule one new wave",
              "where": "Loops GameMode → Event Graph.",
              "do": "Create a Custom Event called AdvanceWave. Wire it to Set WaveNumber = WaveNumber + 1 → StartWave. In HitTarget when TargetsLeft reaches 0 and WaveNumber < FinalWave, use Set Timer by Event (Time=0.75, Looping=false) and connect a Create Event reference to AdvanceWave.",
              "why": "A short pause gives players feedback before the next set appears and avoids spawning inside the existing target’s click event.",
              "check": "Clear five targets: after a short pause the next wave appears with six."
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
          "fix": "Still ends after five clicks? The old Finished=true path is still in HitTarget. Extra waves spawn? Ensure the gate requires TargetsLeft>0 before decrement and Set Timer by Event is not looping. Wrong count? Last Index must be CurrentWaveCount-1."
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
          "fix": "Timer or labels missing? Check you use the active Loops GameMode and Controller via World Settings. If the UI remains unchanged after a new wave, confirm each Text binding reads the GameMode variables; refresh end message on a widget timer."
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
              "do": "Before the existing Spawn Actor node, use Get Actor of Class (BP_TargetSpawnArea) → Cast To BP_TargetSpawnArea → Get SpawnBounds component. Call Get World Location and Get Scaled Box Extent on SpawnBounds, then feed those values into Random Point in Bounding Box (Origin / Box Extent).",
              "why": "The box controls location even if the level designer moves it later.",
              "check": "A random Vector is produced inside the placed box."
            },
            {
              "title": "Use the random location for every target",
              "where": "Loops GameMode → Spawn Actor From Class inside the existing For Loop.",
              "do": "Replace the old Loop Index × Spacing vector feeding Make Transform.Location with the Random Point in Bounding Box result. Keep the For Loop number of iterations unchanged. Set Spawn Collision Handling Override to Always Spawn, Ignore Collisions for the controlled test arena.",
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
          "fix": "No targets? Confirm a BP_TargetSpawnArea is placed and the Get Actor of Class cast succeeds. Overlap hides targets? Expand SpawnBounds, scale down targets or keep fixed positions for the required version."
        }
      ]
    }
  ]
};
