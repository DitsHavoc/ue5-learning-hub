/* Balloon Popper upgrade reading pass, preserving original source Mini-Projects. */
window.UE5_MINI_UPGRADE_DATA = {
  "version": "3.66.4",
  "title": "Mini-Project Upgrade Walkthroughs",
  "intro": "Finish one original guided Mini-Project, then follow these text-only expansions. Start with Essential stages; the Creative stage gives your pair room to make it yours. Save your Unreal project after every stage.",
  "projects": [
    {
      "project": "balloon-popper",
      "title": "Balloon Popper → Arcade Challenge",
      "intro": "Begin where the original Balloon Popper tutorial finishes: keep BP_Balloon growth/popping intact, then add scoring, random replacement, a timed round and replay. The original project uses the Content/Balloon Popper folder and Balloon Popper Level map. Optional danger targets come last.",
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
              "where": "Content Drawer → Balloon Popper → BP_BalloonGameMode → My Blueprint → Variables.",
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
              "where": "BP_Balloon → Event Graph → the original Branch after Set Actor Scale 3D checking Actor Scale X against PopScale.",
              "do": "Keep On Actor Clicked → Set Actor Scale 3D → Branch (Actor Scale X >= PopScale). From that Branch True white pin connect Get Game Mode → Cast To BP_BalloonGameMode (Object=Get Game Mode) → AwardPoints(Points=1) → Destroy Actor(Self). Keep the original False path, SizeIncreaseAmount and PopScale. Compile.",
              "why": "Awarding on the pop branch counts completed pops, not every click.",
              "check": "A click that only grows a balloon adds zero; the final pop adds exactly +1 and destroys that Actor."
            },
            {
              "title": "Check all balloons share one score",
              "where": "Content → Balloon Popper → Balloon Popper Level → Play In Editor.",
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
          "beforeStart": "Open Content → Balloon Popper → Balloon Popper Level. Several hand-placed BP_Balloon actors should grow on click and pop at PopScale (default 1.5). The level uses BP_BalloonGameMode and BP_BalloonPlayerController.",
          "commonMistake": "Score belongs to BP_BalloonGameMode, not each BP_Balloon. AwardPoints runs only from the True PopScale branch, BEFORE Destroy Actor.",
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
              "where": "Content Drawer → Balloon Popper folder → Add → Blueprint Class → Actor.",
              "do": "In Content → Balloon Popper, create Blueprint Class → Actor named BP_BalloonSpawner. Add a Box Collision component called SpawnArea. Under Shape, start with Box Extent X=50, Y=350, Z=220; keep Rotation=0,0,0, set Collision Presets=NoCollision, then Compile and Save.",
              "why": "A movable box defines where balloons may appear; it is easier to tune than hard-coded coordinates.",
              "check": "BP_BalloonSpawner contains one SpawnArea Box Collision component with no collision and no rotation."
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
              "check": "Random Point in Bounding Box uses SpawnArea Get World Location → Center and Get Scaled Box Extent → Half Size; its output depends on where the actor is placed in the level."
            },
            {
              "title": "Spawn at that random point",
              "where": "In SpawnOneBalloon, after the random point.",
              "do": "Inside SpawnOneBalloon, add Make Transform (Location=Random Point in Bounding Box Return Value, Rotation=0, Scale=1,1,1). Add Spawn Actor From Class(Class=BP_Balloon, Spawn Transform=Make Transform, Spawn Collision Handling Override=Always Spawn, Ignore Collisions). Wire SpawnOneBalloon purple function Entry white pin to Spawn Actor white execution input. Compile.",
              "why": "The tutorial balloon is reused as a real spawned actor, not duplicated by hand.",
              "check": "SpawnOneBalloon compiles to spawn one balloon when called; it does not run yet until BeginPlay calls it in the next step."
            },
            {
              "title": "Populate the arena on BeginPlay",
              "where": "BP_BalloonSpawner → Event Graph → Event BeginPlay.",
              "do": "BP_BalloonSpawner → Event Graph: wire Event BeginPlay → For Loop(First Index=0, Last Index=4) → from Loop Body call SpawnOneBalloon. Leave Loop Completed unconnected. Compile and Save. Five calls occur: indexes 0,1,2,3,4.",
              "why": "The player starts with a small, predictable number of targets.",
              "check": "BeginPlay loops from 0 through 4 and calls SpawnOneBalloon once per index. The spawner still needs to be placed in Balloon Popper Level."
            },
            {
              "title": "Place the spawner and test its first five balloons",
              "where": "Content → Balloon Popper → Balloon Popper Level → drag BP_BalloonSpawner from the Content Drawer.",
              "do": "Put ONE BP_BalloonSpawner near the original balloons and move or resize its SpawnArea so the unrotated box is visible in the camera. Move the old manually placed balloons aside TEMPORARILY so you can identify newly spawned ones. Press Play and count five NEW balloons.",
              "why": "The Blueprint spawner must be placed in the level; an asset only in the Content Drawer does not receive BeginPlay.",
              "check": "Five new balloons appear inside the spawner volume. If none appear, check BP_BalloonSpawner is placed and its BeginPlay loop runs."
            },
            {
              "title": "Put the spawn box where the camera can see it",
              "where": "Open Balloon Popper Level.",
              "do": "ONLY after you have proved five new balloons spawn, delete the original hand-placed BP_Balloon actors (plus any loose balloon Static Mesh Actors obstructing the view). Keep BP_BalloonSpawner, camera view, lights and scenery. Save. With the placed BP_BalloonSpawner selected, adjust its SpawnArea to stay in camera view. Set the SpawnArea box Collision Presets=NoCollision.",
              "why": "Only the spawner should create the balloons now; otherwise you would have extras.",
              "check": "Exactly five newly spawned balloons can be seen and clicked, with no manually placed duplicates remaining."
            },
            {
              "title": "Add a replacement event",
              "where": "BP_BalloonSpawner → Event Graph → Add Custom Event.",
              "do": "Call it RequestReplacement. Wire its white execution output to SpawnOneBalloon. Compile.",
              "why": "Every pop can ask the same spawner for one replacement.",
              "check": "RequestReplacement is wired to SpawnOneBalloon. The next two steps connect BP_Balloon to call it."
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
              "check": "On a real pop, the sequence AwardPoints → RequestReplacement → Destroy Actor keeps five active balloons."
            },
            {
              "title": "Check click collision and spawn position",
              "where": "Balloon Popper Level → Play In Editor.",
              "do": "Pop at least 15 balloons (not merely click 15 times). After each pop there should still be five. Ensure BalloonModel mesh collision blocks Visibility, SpawnArea uses NoCollision, and BP_BalloonPlayerController has Enable Click Events turned on. If targets overlap or disappear behind scenery, move or enlarge SpawnArea WITHIN the camera view; random positions are not guaranteed non-overlapping.",
              "why": "A game loop must be reliable, not only work once.",
              "check": "The five-target loop remains populated through 15 successful pops and all targets can be reached by mouse."
            }
          ],
          "check": "Start with five visible balloons. After any number of pops, five replacements remain within the playfield and scoring still works.",
          "fix": "No targets? Check an instance of BP_BalloonSpawner exists in Balloon Popper Level and its BeginPlay For Loop calls SpawnOneBalloon. Four remain? RequestReplacement must happen before Destroy Actor. More than five? Remove the original manually placed actors. Hidden or overlapping? Adjust SpawnArea size and position while keeping it unrotated and non-colliding.",
          "designerSteps": [
            "Plan: Plan a readable playfield and test whether five balloons can be clicked without overlapping the UI. Draw a small mock-up of the 1280×720 play area, targets and HUD.",
            "Create: make one original element for Spawn replacement balloons at random positions using HUD backgrounds, balloon meshes or symbols. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm targets are visible and their UI never blocks clicks."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "One popped balloon awards exactly +1. The original BP_Balloon actors remain placed in the level; do not delete them until a new BP_BalloonSpawner proves it can create five.",
          "commonMistake": "The ORIGINAL project uses the folder \"Balloon Popper\" and map \"Balloon Popper Level\". BP_BalloonSpawner must be placed in that level; a Blueprint asset in Content Drawer does not start spawning.",
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
              "do": "In BP_BalloonGameMode Event Graph: connect Event BeginPlay → Set Timer by Event (Time=1.0, Looping checked). Drag from its red Event delegate pin → Create Event → select TickClock. Right-click Return Value → Promote to Variable and name it ClockHandle (Timer Handle). Leave your temporary Print String \"tick\" connected to TickClock for this test. Compile and Play.",
              "why": "The clock should start once when the level begins.",
              "check": "One \"tick\" prints roughly every second, and ClockHandle is type Timer Handle. After confirming it works, remove the temporary Print String."
            },
            {
              "title": "Count down and stop on zero",
              "where": "BP_BalloonGameMode → TickClock.",
              "do": "In BP_BalloonGameMode Event Graph → TickClock replace the temporary Print String with Branch(Condition=NOT RoundEnded). From True: Set SecondsLeft = Max(0, SecondsLeft - 1), then Branch(SecondsLeft <= 0). Only the second Branch True goes to Set RoundEnded=true → Print String \"TIME UP!\" → Clear and Invalidate Timer by Handle(ClockHandle). Compile. False paths need no action.",
              "why": "Clamping avoids negative seconds; clearing the handle stops extra calls.",
              "check": "Play for a few seconds: SecondsLeft falls by 1 every second and stops at 0."
            },
            {
              "title": "Prevent scores after time runs out",
              "where": "BP_BalloonGameMode → AwardPoints function.",
              "do": "In BP_BalloonGameMode → AwardPoints function, find the direct white execution wire from function Entry to Set Score. Disconnect it, insert a Branch with Condition=NOT RoundEnded, and connect ONLY Branch True to Set Score. Leave Score+Points → Max(0,..) as the green input to Set Score, and leave the existing Print String after Set Score. Do not create another AwardPoints function.",
              "why": "This blocks late scoring even when an actor was already clicked.",
              "check": "AwardPoints never changes Score when RoundEnded is true. You can temporarily set the GameMode SecondsLeft default to 5 to check the end quickly, then restore 60."
            },
            {
              "title": "Create the HUD widget",
              "where": "Content Drawer → Balloon Popper → User Interface → Widget Blueprint → User Widget.",
              "do": "Name it WBP_BalloonHUD. In Designer add two Text widgets near the top: ScoreText and TimeText. Tick Is Variable for each. Give them placeholder text \"Score: 0\" and \"Time: 60\".",
              "why": "The player needs persistent feedback rather than Print String messages.",
              "check": "The Designer preview shows both labels in the game-safe area."
            },
            {
              "title": "Let gameplay clicks pass through the HUD",
              "where": "WBP_BalloonHUD → Designer → select the root Canvas Panel, then the ScoreText and TimeText labels.",
              "do": "Set the root Canvas Panel Visibility to Not Hit-Testable (Self Only). Set ScoreText and TimeText to Not Hit-Testable (Self & All Children). Do not choose Self & All Children on the root: a later ResultsPanel contains a clickable ReplayButton.",
              "why": "A decorative HUD should not swallow mouse clicks intended for balloons in the 3D scene; later child buttons must remain clickable.",
              "check": "In Designer the root Canvas uses Not Hit-Testable (Self Only), with both decorative Text widgets Not Hit-Testable (Self & All Children). You will test real mouse clicks after the widget appears on screen."
            },
            {
              "title": "Bind ScoreText and keep its Score label",
              "where": "WBP_BalloonHUD → Designer → ScoreText → Details → Content → Text → Bind → Create Binding.",
              "do": "In the generated Text binding function use Get Game Mode → Cast To BP_BalloonGameMode (Object=Get Game Mode). From the cast read Score and connect it to Format Text with exact format \"Score: {Value}\". Connect Format Text output to Return Node Text and connect the white execution Entry → Cast Success → Return. Compile.",
              "why": "Returning just an integer would replace the word \"Score\" with an unlabelled number.",
              "check": "The binding returns a value like \"Score: 2\" for two balloon pops."
            },
            {
              "title": "Bind TimeText and keep its Time label",
              "where": "WBP_BalloonHUD → Designer → TimeText → Details → Content → Text → Bind → Create Binding.",
              "do": "Repeat the GameMode cast and white execution chain in this separate binding. From Get SecondsLeft use Format Text \"Time: {Value}\" and connect to the Text Return Node. Compile. If the cast fails, use \"Time: 60\" as a fallback.",
              "why": "Both labels display values from the same round state without duplicating variables in the widget.",
              "check": "The binding returns \"Time: 57\" as the timer counts down, not merely \"57\"."
            },
            {
              "title": "Put the HUD on screen",
              "where": "BP_BalloonPlayerController → Event Graph → BeginPlay.",
              "do": "In BP_BalloonPlayerController Event Graph → original BeginPlay and Set Show Mouse Cursor(true), keep that original node wired. After it, Create Widget(Class=WBP_BalloonHUD, Owning Player=Self) → Add to Viewport (Target=Create Widget Return Value), then Set Input Mode Game and UI with Player Controller=Self and Hide Cursor During Capture=false. Do not disconnect existing input work; use a Sequence if needed. Compile and Save.",
              "why": "The controller is already selected by the project GameMode and owns player display.",
              "check": "Play Balloon Popper Level: Score: 0 and Time: 60 appear, time decreases, the cursor is visible and clicking through empty HUD space still grows balloons."
            },
            {
              "title": "Block clicks once the round ends",
              "where": "BP_Balloon → Event ActorOnClicked execution, before the growth nodes.",
              "do": "In BP_Balloon → Event Graph find the ORIGINAL On Actor Clicked event feeding the grow/Set Actor Scale 3D chain. Disconnect its direct white execution connection, then add Get Game Mode → Cast To BP_BalloonGameMode → Branch(Condition=NOT RoundEnded). Wire Cast Success → Branch True into the ORIGINAL grow chain. Leave the original PopScale Branch and AwardPoints call unchanged. Compile.",
              "why": "The scene should stop changing when the round is finished.",
              "check": "During a five-second test, balloons grow normally. After TIME UP, further clicks do not grow or pop them."
            },
            {
              "title": "Prevent the spawner working after the timer",
              "where": "BP_BalloonSpawner → RequestReplacement custom event.",
              "do": "In BP_BalloonSpawner → Event Graph → RequestReplacement custom event, insert Get Game Mode → Cast To BP_BalloonGameMode → Branch(Condition=NOT RoundEnded) BEFORE SpawnOneBalloon. Connect only Branch True to SpawnOneBalloon; False does nothing. Do not add this gate to Event BeginPlay, which creates the original five targets.",
              "why": "The round must stop producing targets when the clock reaches zero.",
              "check": "When RoundEnded is true no late replacement requests can create targets, while the original five-target BeginPlay loop still works."
            }
          ],
          "check": "The clock counts 60→0, the score changes only when a balloon pops, the HUD stays visible and no further targets spawn or score after the round ends.",
          "fix": "HUD missing? Check the controller is assigned in BP_BalloonGameMode and Create Widget is connected. Time frozen? Confirm TickClock is connected to Set Timer by Event with Looping ticked. If the HUD appears but balloons cannot be clicked, check the root Canvas uses Not Hit-Testable (Self Only), not Visible. If the HUD numbers lose their labels, use Format Text \"Score: {Value}\" and \"Time: {Value}\" in the two bindings. If the result ReplayButton later does not receive clicks, check Set Input Mode Game and UI in the controller.",
          "designerSteps": [
            "Plan: Design WBP_BalloonHUD with clear score and remaining-time labels. Try a contrasting colour when time gets low. Draw a small mock-up of the 1280×720 play area, targets and HUD.",
            "Create: make one original element for Add a 60-second round and live score HUD using HUD backgrounds, balloon meshes or symbols. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm targets are visible and their UI never blocks clicks."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "One BP_BalloonSpawner instance is in Balloon Popper Level and maintains five clickable targets. BP_BalloonPlayerController already shows the cursor and has Enable Click Events checked in Details.",
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
              "do": "In WBP_BalloonHUD → Designer, place a Border or Vertical Box named ResultsPanel INSIDE the root Canvas Panel. Inside it put Text FinalScoreText and Button ReplayButton with a child Text \"Play Again\". Tick Is Variable on ResultsPanel, FinalScoreText and ReplayButton. Set ResultsPanel Visibility=Collapsed initially and ReplayButton Visibility=Visible. Keep the root Canvas Not Hit-Testable (Self Only), NOT Self & All Children.",
              "why": "Players need a persistent end screen; Print String is only a debugging aid.",
              "check": "The new result panel is initially Collapsed and does not block clicks during the round."
            },
            {
              "title": "Create the end-screen refresh event",
              "where": "WBP_BalloonHUD → Event Graph → empty space.",
              "do": "Create a Custom Event called RefreshRoundScreen. Connect its white output to Get Game Mode → Cast To BP_BalloonGameMode → Branch(Condition=Get RoundEnded). On True Set Visibility(ResultsPanel,Visible); on False Set Visibility(ResultsPanel,Collapsed). Compile.",
              "why": "The result is controlled by the actual GameMode end flag, not by an independent second timer counting down.",
              "check": "Both Branch paths update the ResultsPanel, but the event has not been scheduled yet."
            },
            {
              "title": "Call the result-refresh event using one timer",
              "where": "WBP_BalloonHUD → Event Graph → Event Construct.",
              "do": "From Event Construct start Set Timer by Event(Time=0.25, Looping checked). From the red Event delegate pin choose Create Event and select RefreshRoundScreen. Keep both existing Score and Time Text bindings. Do not create a second WBP_BalloonHUD instance. Compile.",
              "why": "A quarter-second update is frequent enough for the result panel to appear promptly without Event Tick.",
              "check": "Set SecondsLeft temporarily to 5 and Play: after time reaches zero, ResultsPanel appears."
            },
            {
              "title": "Show the final score",
              "where": "RefreshRoundScreen → True branch in WBP_BalloonHUD.",
              "do": "Inside WBP_BalloonHUD → RefreshRoundScreen, from the existing BP_BalloonGameMode cast read Score. In the RoundEnded Branch TRUE path, AFTER Set Visibility(ResultsPanel,Visible), call Set Text on FinalScoreText with Format Text \"Time up! Final score: {Points}\" (Points=Score). Connect the white execution Set Visibility → Set Text. Compile.",
              "why": "The end screen should show the actual score from the single GameMode variable.",
              "check": "The result panel shows the same final Score as the live ScoreText, with readable text."
            },
            {
              "title": "Wire the replay button",
              "where": "WBP_BalloonHUD → Designer → ReplayButton → Events → OnClicked (+).",
              "do": "Select ReplayButton in WBP_BalloonHUD Designer, go to Details → Events → OnClicked (+). Connect the new OnClicked event to Open Level (by Name). Add Get Current Level Name with Remove Prefix String checked; connect that output to Open Level.Level Name. Compile and Save. This uses the ORIGINAL \"Balloon Popper Level\" level name without having to type it.",
              "why": "Reopening the level resets the timer, total, spawner and balloon types in one action.",
              "check": "After Time Up, clicking Play Again reloads Balloon Popper Level with Score: 0, Time: 60 and five new balloons."
            },
            {
              "title": "Test the end of a round",
              "where": "Balloon Popper Level → Play In Editor.",
              "do": "Temporarily set BP_BalloonGameMode.SecondsLeft default from 60 to 5 and Compile. Restart Play. Pop at least one balloon before zero; after zero confirm clicking no longer grows balloons and the results panel shows the final score. Click Play Again to verify scores and balloons reset. Finally restore the SecondsLeft default to 60, Compile and Save.",
              "why": "The end state must prevent extra points, then offer a reliable restart.",
              "check": "Time Up, frozen scoring, blocked clicks and replay all work. The last saved GameMode uses 60 seconds again, not the temporary five-second test."
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
          "beforeStart": "Balloon Popper Level now has a 60-second GameMode countdown, a score/time HUD and clicks stop after zero. The HUD root is Not Hit-Testable (Self Only) and BP_BalloonPlayerController uses Game and UI input.",
          "commonMistake": "If the root Canvas is set to Not Hit-Testable (Self & All Children), ReplayButton will never receive clicks. Use Not Hit-Testable (Self Only) for the root and Visible for the button when the panel is shown.",
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
              "where": "Content Drawer → Balloon Popper → Materials.",
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
              "where": "Balloon Popper Level → Play In Editor.",
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
      "intro": "Follow the actual original bowling setup: count each pin once, add three throws that reset only the ball, and build a labelled scoreboard with a final result. Keep the existing BowlingInputs, IA_Bowl, BP_BowlingPlayerController and BP_BowlingBall references; optional Q/E power comes last.",
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
              "do": "Open BowlingLevel first and count the placed BP_BowlingPin actors in World Outliner (not the imported pin mesh asset). Write down this number: it will be GoalPins. Then in BP_BowlingGameMode create PinsDown (Integer=0), Score (Integer=0), GoalPins (Integer=that actual number) and RoundFinished (Boolean=false). Compile and Save.",
              "why": "The GameMode keeps one shared score for the full set of pins.",
              "check": "GoalPins equals the number of placed BP_BowlingPin actors (e.g. six if the lane contains six), not a guessed fixed total."
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
              "check": "RecordPin now has the full execution chain: entry → NOT RoundFinished Branch True → Set PinsDown → Set Score → Print String. You will test actual points when you connect a pin below."
            },
            {
              "title": "Detect when all pins are down",
              "where": "At the end of RecordPin in BP_BowlingGameMode.",
              "do": "After Set Score in RecordPin (not directly from Set PinsDown), add >= (Integer) to compare Get PinsDown against GoalPins. Plug that into a Branch and wire its white execution input after Set Score. On True: Set RoundFinished = true, then Print String \"ALL PINS DOWN!\". On False: do nothing. Do not replace the earlier Branch that checks NOT RoundFinished.",
              "why": "A simple target count gives the game a clear win condition.",
              "check": "Each pin updates Score before the final-pin test. The final distinct pin sets RoundFinished=true."
            },
            {
              "title": "Protect each pin against repeat counting",
              "where": "BP_BowlingPin → Variables.",
              "do": "Create Counted (Boolean; default false). Compile. Add Event Tick → Branch with NOT Counted as Condition. Only continue from True.",
              "why": "A toppled physical pin might remain fallen across hundreds of frames.",
              "check": "The event does nothing once Counted becomes true."
            },
            {
              "title": "Check which way an upright pin points",
              "where": "BP_BowlingPin → Event Graph → the True output of your NOT Counted Branch.",
              "do": "Drag the existing Model (Static Mesh) component into the graph as Get. From it add Get Up Vector, then Dot Product (Vector). Set the second Vector to X=0, Y=0, Z=1. Temporarily convert the Dot Product float to String and Print String from the NOT Counted True execution path; Compile and Play.",
              "why": "A pin that starts upright should report a value near +1. If it starts near 0 or -1, its mesh or component orientation needs checking before using this test.",
              "check": "Without touching the pins, the printed dot value is close to 1. Stop Play and remove the temporary Print String before the next step."
            },
            {
              "title": "Compare the tip angle to the threshold",
              "where": "BP_BowlingPin → Event Graph, where Get Up Vector feeds Dot Product.",
              "do": "Add Float < Float, wire the Dot Product output into A and set B=0.65. Add a second Branch: connect the earlier NOT Counted True white execution output into this Branch and connect the Float comparison into Condition. Compile.",
              "why": "A tilted pin has a lower up-vector dot product than an upright pin.",
              "check": "The second Branch is only True for sufficiently tipped pins; it does not count a pin just standing still."
            },
            {
              "title": "Award points only on the first fall",
              "where": "BP_BowlingPin → True path of the lean Branch.",
              "do": "Set Counted = true, then Get Game Mode → Cast To BP_BowlingGameMode → RecordPin with PinValue = 1. Ensure the white wires follow that order. Compile.",
              "why": "Set the flag before notifying GameMode so rapid events cannot count twice.",
              "check": "A single fallen pin adds exactly one to both PinsDown and Score."
            },
            {
              "title": "Confirm pin counting before making a bonus target",
              "where": "BowlingLevel → Play In Editor, after saving both GameMode and BP_BowlingPin.",
              "do": "Press Space once. Keep the Output Log or temporary RecordPin Print String visible. Knock over one pin and check PinsDown increases to 1, Score to 1. Watch the fallen pin for a few more seconds; the numbers should NOT increase again. Repeat with another pin.",
              "why": "Event Tick runs many times each second, so Counted must prevent repeated scores.",
              "check": "One fallen pin awards one point only once, even as it rolls on the floor."
            },
            {
              "title": "Test one pin at a time",
              "where": "Open the Bowling level → Play.",
              "do": "Play the BowlingLevel. If you cannot aim at different pins, press R only after the next upgrade is built; for this first scoring test use Stop then Play again. Knock down at least one pin and confirm each Score increment is one. For an all-pins-down test, you may temporarily place just TWO BP_BowlingPin actors in a test copy of the level and set GoalPins=2; when both tip, RoundFinished should turn true. Restore the normal lane and GoalPins afterwards.",
              "why": "Physics bugs are easier to diagnose before adding time pressure.",
              "check": "One tilted pin counts once; the game ends when the actual GoalPins number has tipped. Restore any temporary two-pin test layout before continuing."
            }
          ],
          "check": "Six placed pins with GoalPins=6 can earn six points, and the round finishes when all six are knocked down.",
          "fix": "If no score appears, confirm pins are BP_BowlingPin actors, the pin mesh simulates physics, and the mesh up-axis is Z when upright. Adjust the 0.65 threshold only after watching the dot-product value while testing. If the first pin instantly counts before being hit, inspect Model rotation and the upright Dot Product; it should be close to +1. If the test uses two pins, reset GoalPins to the restored lane count afterwards.",
          "designerSteps": [
            "Plan: Design a scorecard and a clear way to show how many pins remain standing. Draw a small mock-up of the lane, throw marker and scoreboard.",
            "Create: make one original element for Count knocked-down pins using scoreboard, lane markings or bonus-pin textures. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm three throws remain clear and pin score is legible."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "You finished the five-stage original Bowling tutorial. In BowlingLevel, one BP_BowlingBall responds to IA_Bowl (Space) and IA_Move (arrows), and all placed BP_BowlingPin actors simulate physics. BP_BowlingGameMode is active in World Settings.",
          "commonMistake": "Do not use the imported Static Mesh on its own in the lane; place BP_BowlingPin Blueprints, or their Event Tick scoring cannot run. GoalPins must equal the actual placed Blueprint pin count.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "intro": "Count each pin one time. Test the up-vector first, then connect the scoring function and verify the last pin finishes the game."
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
              "do": "Open BP_BowlingBall → Viewport. Select the original Model sphere mesh. If it is below DefaultSceneRoot, drag Model onto the root so Model becomes the Actor root (do not add another mesh). Compile and save. In BowlingLevel reselect the placed BP_BowlingBall and confirm it still sits at the lane starting position. Test Play: Left/Right still move the ball and Space still bowls before continuing.",
              "why": "In UE5.8 a simulated single-body mesh detaches from a parent; making the ball mesh the root keeps its position and the Actor transform together.",
              "check": "Model is the root in Components; the original Move and Bowl events work after this change."
            },
            {
              "title": "Save the Actor starting transform",
              "where": "BP_BowlingBall → Event Graph → Event BeginPlay.",
              "do": "In BP_BowlingBall → Event Graph, make a new variable StartingBallTransform of type Transform. From Event BeginPlay call Get Actor Transform (Self) and then Set StartingBallTransform. Compile. This happens before the player moves the ball. Keep all other Event BeginPlay nodes if present.",
              "why": "With Model as the root, the Actor transform is the launch position and matches the mesh used for aiming.",
              "check": "StartingBallTransform stores the ball’s launch position when Play begins."
            },
            {
              "title": "Switch off physics and restore the start position",
              "where": "BP_BowlingBall → Event Graph → Add Custom Event ResetBall.",
              "do": "Drag the Model (root Static Mesh) component onto the graph. Wire ResetBall → Set Simulate Physics (Model, false) → Set Actor Transform (New Transform=StartingBallTransform; Sweep=false; Teleport=true). Compile.",
              "why": "Moving the ball with physics disabled avoids the simulation fighting the new transform.",
              "check": "ResetBall contains its first chain: ResetBall → Set Simulate Physics(false) → Set Actor Transform(StartingBallTransform). It will not run in Play until you call it from the Player Controller later."
            },
            {
              "title": "Turn physics on and clear movement",
              "where": "BP_BowlingBall → immediately after Set Actor Transform in ResetBall.",
              "do": "Wire Set Simulate Physics (Model, true) → Set Physics Linear Velocity (0,0,0) → Set Physics Angular Velocity in Degrees (0,0,0), all targeting Model. Compile and save.",
              "why": "Zeroing both velocity types makes sure the ball remains ready for the next shot.",
              "check": "The full ResetBall chain compiles. It is not yet callable through the player controls; you will run the first real reset after connecting FinishThrow."
            },
            {
              "title": "Check the original BowlingBall reference is valid",
              "where": "BP_BowlingPlayerController → Event Graph → Event BeginPlay.",
              "do": "In BP_BowlingPlayerController → Event Graph find the original BeginPlay path: Add Mapping Context(BowlingInputs) → Get Actor of Class(BP_BowlingBall) → Set BowlingBall. Select the existing Get Actor of Class node: its Return Value must connect to Set BowlingBall. Place exactly one BP_BowlingBall in BowlingLevel. Compile and Play once; confirm the original arrow keys still move it and Space still bowls. Do NOT add a second ball variable or duplicate this lookup.",
              "why": "ResetBall will use the SAME saved ball object already used by the Bowl and Move input actions.",
              "check": "The original input actions operate the one BP_BowlingBall found at BeginPlay, so ResetBall will target the same actor."
            },
            {
              "title": "Count throws in the Player Controller",
              "where": "BP_BowlingPlayerController → Variables.",
              "do": "Create ThrowsUsed (Integer; default 0), MaxThrows (Integer; default 3) and IsBallInMotion (Boolean; default false). Compile. Keep the existing BP_BowlingBall reference from the original IA_Bowl/IA_Move tutorial; do not add a new ball reference.",
              "why": "The controller owns the player input and knows when another throw is allowed.",
              "check": "ThrowsUsed=0, MaxThrows=3 and IsBallInMotion=false. The original BowlingBall reference is still in the controller."
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
              "do": "In BP_BowlingPlayerController, locate the existing IA_Bowl Input Action Event. Use ONLY its Started execution pin, as taught in the original tutorial. Add Get Game Mode → Cast To BP_BowlingGameMode and read RoundFinished. Add NOT Boolean for RoundFinished and another NOT for IsBallInMotion. Keep the original Bowl call but disconnect its old white execution input until the next step.",
              "why": "The controller must avoid another throw during a roll or after the game ends.",
              "check": "You have two Boolean values, each true when another throw is allowed."
            },
            {
              "title": "Check there is at least one throw left",
              "where": "Same Player Controller → throw input.",
              "do": "Compare ThrowsUsed < MaxThrows. Use AND(Boolean) to combine NOT RoundFinished, NOT IsBallInMotion and the throws comparison (add an input pin to AND if needed). Add a Branch: wire Cast To BP_BowlingGameMode Success white execution into the Branch input and AND to Condition. Wire ONLY Branch True towards your existing Bowl call. False does nothing.",
              "why": "Every valid Space press must use one remaining throw, not start several balls at once.",
              "check": "Only the first input while idle reaches the old Bowl event."
            },
            {
              "title": "Track a successful throw",
              "where": "BP_BowlingPlayerController → True branch of the new throw gate.",
              "do": "Move the original Bowl call AFTER Set ThrowsUsed=ThrowsUsed+1 and Set IsBallInMotion=true, chaining the white execution pins in that order from Branch True. Keep Bowl Target connected to the saved BowlingBall object reference. Compile. Press Space once: one throw is used. Press Space repeatedly during the roll: no extra throw is counted.",
              "why": "Each valid throw consumes one attempt, regardless of whether it hits any pins.",
              "check": "After the first Space press, ThrowsUsed is 1 and IsBallInMotion is true."
            },
            {
              "title": "Allow time for physics to settle",
              "where": "BP_BowlingPlayerController → after the successful Bowl event.",
              "do": "From the white execution output of the original Bowl call, add Delay(Duration=4.0). Add a Custom Event in BP_BowlingPlayerController called FinishThrow, and connect the Delay Completed white execution to a CALL of FinishThrow (not to the red event definition node). Inside the FinishThrow event, add Set IsBallInMotion=false. This is in the Event Graph: do not create a Blueprint Function containing Delay.",
              "why": "Pin collisions should be allowed to settle before the ball is reset or the round is scored.",
              "check": "Exactly four seconds after a valid Bowl call, FinishThrow runs once and sets IsBallInMotion=false. Repeated presses while rolling never start a second Delay."
            },
            {
              "title": "Reset for another shot when available",
              "where": "BP_BowlingPlayerController → FinishThrow, after IsBallInMotion=false.",
              "do": "In BP_BowlingPlayerController → FinishThrow, AFTER Set IsBallInMotion=false, use Get Game Mode → Cast To BP_BowlingGameMode. From Cast Success white execution go to Branch (NOT RoundFinished AND ThrowsUsed<MaxThrows). On True, drag BowlingBall variable as Get and call ResetBall on it. False does nothing. Do not call Open Level here, and do not reset BP_BowlingPin actors.",
              "why": "You keep the first throw’s successful knockdowns and try to finish the remaining pins.",
              "check": "On shot 1 and shot 2, the ball returns to its original launch mark after four seconds; the pin positions and Score remain unchanged."
            },
            {
              "title": "Play-test the first two throws before building the last-shot result",
              "where": "BowlingLevel → Play In Editor.",
              "do": "Press Space once, aiming to knock over only some pins (not all). Wait four seconds: the ball should reset and arrow keys should aim again. Press Space a second time, again leaving at least one pin standing. The ball resets a second time. Confirm the first throw’s fallen pins stay down and Score remains. If every pin falls early, RoundFinished correctly ends the game; restart Play to test the two-reset case.",
              "why": "This catches a bad physics reset before you spend time building UI or final scoring.",
              "check": "On a round with pins still standing, ball resets after throw 1 and throw 2, and previous pin score is preserved. A complete strike ends the round early instead."
            },
            {
              "title": "End the round after the last shot",
              "where": "BP_BowlingGameMode → Functions → add FinishRound.",
              "do": "First open BP_BowlingGameMode → Functions and create FinishRound. Branch on NOT RoundFinished; only True sets RoundFinished=true then prints the final Score and PinsDown. Compile GameMode. Next open BP_BowlingPlayerController → FinishThrow: after the existing Branch that checks NOT RoundFinished AND ThrowsUsed<MaxThrows, use its False path to check (ThrowsUsed>=MaxThrows) AND (NOT RoundFinished). On True get the cast BP_BowlingGameMode reference and call FinishRound. Do this after the four-second Delay, not on the third Space press.",
              "why": "A final score should be reported after physics settles; finishing early is also possible if all pins are down.",
              "check": "After the third throw settles, the final score prints and RoundFinished becomes true. If all pins were already down, do not call FinishRound again."
            },
            {
              "title": "Add R to replay the whole round",
              "where": "Bowling Input Mapping Context and BP_BowlingPlayerController.",
              "do": "Inside the existing Content/Bowling/Inputs folder, create an Input Action named IA_Restart (Value Type=Digital Boolean). Open the already active BowlingInputs Mapping Context and add a mapping for IA_Restart with Keyboard R. In BP_BowlingPlayerController Event Graph, add IA_Restart action event and use its Started pin → Get Current Level Name (Remove Prefix String checked) → Open Level (by Name), passing the level name output into Level Name. Save BowlingInputs and Compile the controller.",
              "why": "Restarting the level resets the pins, ball, throw counter and score together.",
              "check": "After a finished round, R reloads BowlingLevel with the ball at its start, standing pins, Score=0 and ThrowsUsed=0."
            }
          ],
          "check": "Make three throws without restarting: the ball comes back for shots two and three, fallen pins remain fallen, final score appears, and the fourth Space press does nothing.",
          "fix": "Ball fails to reset? Confirm Model is the Actor root and you stored StartingBallTransform from Get Actor Transform before physics moved it, and ResetBall uses the same mesh component. One press spends multiple throws? Check IA_Bowl uses Started, not Triggered. Score missing after last shot? Ensure FinishRound is called after Delay 4 seconds. If arrows stop moving the ball after reset, check Model is the root mesh and the Move event still offsets Model. Do not add another physics mesh or reset a child component independently. If pressing Space a second time does nothing, inspect IsBallInMotion after Delay, the RoundFinished flag, and whether the pin count reached GoalPins. If pins reset as well as the ball, the controller is reloading the level instead of calling ResetBall. In Unreal 5.8 enabling simulated physics detaches a child mesh; keeping Model as root avoids that specific parent-transform problem.",
          "designerSteps": [
            "Plan: Design a clear Throws Left indicator and short instructions: arrow keys aim, Space throws, R restarts the round. Draw a small mock-up of the lane, throw marker and scoreboard.",
            "Create: make one original element for Reset the ball and allow three throws using scoreboard, lane markings or bonus-pin textures. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm three throws remain clear and pin score is legible."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "Stage 1 pin scoring works. From the original tutorial, BP_BowlingPlayerController stores one BP_BowlingBall Object Reference named BowlingBall. It runs IA_Bowl Started → Bowl and IA_Move Triggered → Move. BP_BowlingGameMode is active.",
          "commonMistake": "The four-second Delay must be in the Player Controller Event Graph after the original Bowl call, and should CALL FinishThrow when Completed. Do not wire Delay directly into a Custom Event definition or put it inside a Blueprint Function.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "intro": "First verify your ball and existing BowlingBall reference; then build ResetBall, use the original IA_Bowl once per throw and test all three turns without resetting the fallen pins."
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
              "do": "Create WBP_BowlingHUD (User Widget). In Designer add ScoreText, PinsText and ThrowsText as Text widgets (tick Is Variable), with placeholder labels \"Score: 0\", \"Pins down: 0\" and \"Throws left: 3\". Keep the HUD compact in a corner so the lane is visible. No buttons are needed because the player restarts with R.",
              "why": "The player needs to see progress without watching Print String debug output.",
              "check": "All labels fit the game viewport without covering the lane."
            },
            {
              "title": "Bind ScoreText to the live GameMode score",
              "where": "WBP_BowlingHUD → Designer → ScoreText → Details → Content → Text → Bind → Create Binding.",
              "do": "In WBP_BowlingHUD → Designer, select ScoreText → Details → Content → Text → Bind → Create Binding. In the generated binding Function, wire the purple Entry execution to Cast To BP_BowlingGameMode, with Get Game Mode → Cast Object. Wire Cast Success execution to Return Node execution. From the cast result Get Score, use Format Text \"Score: {Value}\" with Score connected to Value, then connect the text output to Return Value. Compile.",
              "why": "The scoreboard needs a label AND the live number; a bare integer would replace the text \"Score:\".",
              "check": "When one normal pin falls, the HUD binding returns \"Score: 1\"."
            },
            {
              "title": "Bind PinsText to the number knocked down",
              "where": "WBP_BowlingHUD → Designer → PinsText → Details → Content → Text → Bind → Create Binding.",
              "do": "WBP_BowlingHUD → Designer → PinsText → Text → Bind → Create Binding. In the generated Function, connect Entry white execution → Cast To BP_BowlingGameMode (Object=Get Game Mode) → Return Node white execution. From the cast result Get PinsDown → Format Text \"Pins down: {Value}\" → Return Value. Compile. Do not drag the pin Actor counter into this widget; both values belong to the GameMode.",
              "why": "The GameMode keeps pins already knocked down across multiple throws.",
              "check": "After two different pins fall, this binding shows \"Pins down: 2\"."
            },
            {
              "title": "Read shots remaining",
              "where": "WBP_BowlingHUD → ThrowsText → Text → Bind → Create Binding.",
              "do": "WBP_BowlingHUD → Designer → ThrowsText → Text → Bind → Create Binding. In the generated Function, connect Entry white execution → Cast To BP_BowlingPlayerController (Object=Get Owning Player) → Return Node white execution. From cast result Get ThrowsUsed and MaxThrows, compute Max(0,MaxThrows-ThrowsUsed) with Integer math. Use Format Text \"Throws left: {Value}\" and connect its output to the Return Node Text value.",
              "why": "The HUD reads the same counter that gates the throw input.",
              "check": "With a successful Owning Player cast, ThrowsText returns \"Throws left: 3\" at start and \"Throws left: 2\" after pressing Space once; the integer is not displayed without its label."
            },
            {
              "title": "Show the widget",
              "where": "BP_BowlingPlayerController → Event BeginPlay.",
              "do": "BP_BowlingPlayerController → Event BeginPlay: keep the original chain Add Mapping Context(BowlingInputs) → Get Actor of Class(BP_BowlingBall) → Set BowlingBall. AFTER Set BowlingBall, create WBP_BowlingHUD using Create Widget (Owning Player=Self) and then Add to Viewport (connect Create Widget Return Value to the Add to Viewport Target). Compile. Avoid disconnecting the old input mapping or ball reference.",
              "why": "Each level start shows the HUD automatically.",
              "check": "The scoreboard is present as soon as Play starts."
            },
            {
              "title": "Make pin points editable",
              "where": "BP_BowlingPin → Variables.",
              "do": "Open BP_BowlingPin → Variables → + and create PinValue (Integer, default=1). Tick Instance Editable (eye icon) in Details, then Compile. Find the old BP_BowlingPin Event Graph where Cast To BP_BowlingGameMode → RecordPin currently has fixed PinValue=1. Replace that fixed pin with Get PinValue from this BP_BowlingPin instance. Compile. Do NOT change GoalPins or Counted.",
              "why": "Each pin can have a different value without duplicating the whole physics system.",
              "check": "Each placed BP_BowlingPin has a PinValue field in Details. Normal pins still award 1 and Counted still prevents repeats."
            },
            {
              "title": "Place one bonus pin",
              "where": "Bowling level → select one BP_BowlingPin actor.",
              "do": "Set PinValue = 3 on that instance and give its Static Mesh component a visibly distinct material. Leave other pins set to 1.",
              "why": "Players can decide where to aim for the best score.",
              "check": "Knocking over the special pin adds 3 to Score but just 1 to PinsDown."
            },
            {
              "title": "Create a hidden end-of-round message",
              "where": "WBP_BowlingHUD → Designer.",
              "do": "Add a Text widget named ResultText, tick Is Variable, set initial text to \"ROUND OVER\" and set Visibility=Collapsed. Make sure it is readable but does not hide the main Score, Pins or Throws display. Compile.",
              "why": "The final result stays hidden until RoundFinished becomes true.",
              "check": "On a new round, the HUD appears without ResultText."
            },
            {
              "title": "Create the result-refresh event",
              "where": "WBP_BowlingHUD → Graph → Event Graph.",
              "do": "In WBP_BowlingHUD → Event Graph, add Custom Event RefreshBowlingResult. From its white output connect Get Game Mode → Cast To BP_BowlingGameMode → Branch (Condition=Get RoundFinished). On True, use Get Score → Format Text \"ROUND OVER – SCORE: {Value}\" → Set Text(ResultText) → Set Visibility(ResultText,Visible), wiring white execution Set Text → Set Visibility. On False Set Visibility(ResultText,Collapsed). Compile.",
              "why": "A separate event updates the final panel without changing the normal live score bindings.",
              "check": "Both the True and False Branch paths have visible execution wires into the correct ResultText widget; the result will be refreshed by the timer added next."
            },
            {
              "title": "Refresh that result without using Event Tick",
              "where": "WBP_BowlingHUD → Graph → Event Construct.",
              "do": "From Event Construct call Set Timer by Event, Time=0.25, Looping=true. Drag from the red Event delegate pin and select Create Event; bind it to RefreshBowlingResult. Only add ONE timer to this HUD instance. Compile.",
              "why": "This checks the end condition four times a second while keeping the result visible.",
              "check": "When the last shot ends or all pins fall, the ResultText appears and stays visible. On R restart, it is hidden again."
            },
            {
              "title": "Test two very different rounds",
              "where": "Play the level twice.",
              "do": "Play two full test rounds. First, deliberately miss at least one shot and verify Score, Pins down and Throws left are visible while the ball resets twice. After the third shot, wait four seconds and check ROUND OVER displays the final Score. Press R. In the second round, knock over the coloured bonus pin: Score increases by 3 but Pins down by only 1. Test R again.",
              "why": "The complete loop matters more than a single successful throw.",
              "check": "The second round starts with three throws and no leftover score."
            }
          ],
          "check": "Score, Pins Down and Throws Left update correctly; the special pin awards 3 points; a final result appears; R resets the full round.",
          "fix": "Scores differ? Ensure each pin has Counted true after first fall and passes PinValue into RecordPin. Result never shows? RefreshResult must run on a repeating timer and read RoundFinished from the assigned GameMode. If a Text binding only shows a number without the word Score/Pins/Throws, use Format Text instead of returning the bare integer. If controls stop working after the HUD is added, restore the original Player Controller BeginPlay chain that assigns BowlingInputs and BowlingBall.",
          "designerSteps": [
            "Plan: Create a scoreboard, one marked bonus target and on-screen controls. Playtest legibility and whether the bonus is visible before the shot. Draw a small mock-up of the lane, throw marker and scoreboard.",
            "Create: make one original element for Add a throw counter, scoreboard and bonus pin using scoreboard, lane markings or bonus-pin textures. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm three throws remain clear and pin score is legible."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The original camera view is already working. Stage 2 now allows three shots, resets the ball after each of the first two, keeps fallen pins down, and uses keyboard R to restart the level. Do not create a second BowlingBall Actor.",
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
              "where": "BP_BowlingBall → Event Graph → original Bowl Custom Event from Mini-Project Stage 4.",
              "do": "Select the red Bowl Custom Event and add a Float input named Strength (default 200000) in Details → Inputs. Find the original Add Force node targeting Model, originally Force X=200000, Y=0, Z=0 with Accel Change enabled. Replace its fixed Force vector with Make Vector: X=Strength, Y=0, Z=0. Keep Accel Change ticked. Compile.",
              "why": "The original source tutorial uses Add Force with a Vector, not a separate impulse-magnitude input. Strength changes only the forward X force.",
              "check": "The original Bowl event now passes Strength into Make Vector.X and Add Force; Accel Change is still enabled. The next step sets the existing caller to 200000 so the ball moves."
            },
            {
              "title": "Keep the original bowl working while you build the controls",
              "where": "BP_BowlingPlayerController → Event Graph → original IA_Bowl Started → Bowl call.",
              "do": "The Bowl call now has a new Strength input pin. Set its pin default to 200000 (the original tutorial value) for now, then Compile and Play once. Do not leave the new Strength input at 0. You will replace this fixed value with the adjustable one later.",
              "why": "If the new Float input is left at zero, the ball appears broken until you finish the rest of the optional upgrade.",
              "check": "Space still launches the ball before adding Q/E. If the Force input receives zero, go back and set the Bowl call Strength pin to 200000."
            },
            {
              "title": "Store the player’s chosen power",
              "where": "BP_BowlingPlayerController → Variables.",
              "do": "In BP_BowlingPlayerController create BaseThrowPower (Float; default 200000) and PowerMultiplier (Float; default 1.0). Use the original known-working X force (200000) as the starting value. Compile.",
              "why": "A multiplier means this guide works with whichever base impulse fits your bowling ball’s mass.",
              "check": "Both values are visible in the controller details."
            },
            {
              "title": "Add Q and E input actions",
              "where": "Content Drawer → Bowling → Input folder.",
              "do": "In Content/Bowling/Inputs, create IA_PowerDown and IA_PowerUp as Input Action assets with Value Type=Digital (Boolean). Open BowlingInputs (the original Input Mapping Context already active in the controller) and add mappings IA_PowerDown=Q and IA_PowerUp=E. Save. Do not create a new Mapping Context.",
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
              "title": "Pass the chosen strength into Bowl",
              "where": "BP_BowlingPlayerController → existing gated IA_Bowl chain from Upgrade 2.",
              "do": "BP_BowlingPlayerController → existing IA_Bowl Started chain → original Bowl call. Keep the three-throw gate and counters. Multiply BaseThrowPower × PowerMultiplier (Float × Float) and connect that value to the SAME existing Bowl call Strength pin, replacing the temporary 200000 constant. Compile. Do not add another Bowl call or Add Force node.",
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
          "fix": "No power difference? Check Bowl.Strength feeds Make Vector.X, which connects to Add Force → Force, and Accel Change remains checked. Make sure IA_Bowl still calls Bowl exactly once. If the ball stops moving immediately after introducing Strength, check that the existing Bowl call sends 200000, not zero. If Q/E do nothing, check the two actions are mapped inside the existing BowlingInputs and the Started pins are connected.",
          "designerSteps": [
            "Plan: Make a simple power meter with low/high markings, and ask a playtester whether changes are noticeable and fair. Draw a small mock-up of the lane, throw marker and scoreboard.",
            "Create: make one original element for Optional: give players a choice of shot power using scoreboard, lane markings or bonus-pin textures. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm three throws remain clear and pin score is legible."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The original IA_Bowl triggers the Bowl custom event and Add Force on the Model mesh, using X=200000 with Accel Change enabled. Your three-throw system and R restart work.",
          "commonMistake": "Do not replace the original Add Force node with Add Impulse. Leave Accel Change enabled; only replace its X force value with the new Strength input.",
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
              "check": "AddClick compiles. Its entry connects to Set Score, which uses Score + ClickPower; the next step will connect the real main button."
            },
            {
              "title": "Find the original click handler in GameMode",
              "where": "BP_ClickerGameMode → Event Graph → the button event wired from Assign On Clicked.",
              "do": "Locate the original chain: BeginPlay creates ClickerGameUI, stores ClickerUI, then Assign On Clicked binds the main ClickerButton. Follow its red delegate to the separate event that currently adds 1 to Score and calls ClickerUI → SetScoreText. Keep that binding. Do NOT create another OnClicked event for the main button in the widget.",
              "why": "The original tutorial handles its main button click inside GameMode, not inside the widget.",
              "check": "One original assigned click event exists in BP_ClickerGameMode and still responds to the big button."
            },
            {
              "title": "Use AddClick without counting twice",
              "where": "BP_ClickerGameMode → Event Graph → existing assigned ClickerButton event.",
              "do": "Disconnect or delete only the original Set Score = Score + 1 calculation. From the SAME click event, call your new AddClick function once. After it, keep the existing Get ClickerUI → SetScoreText call and connect the updated Score integer to its Score input. Compile.",
              "why": "Replacing the original increment avoids awarding both the old +1 and the new ClickPower value.",
              "check": "From a fresh run, 3 clicks show Score 1, 2, 3. The original ClickerButton still works."
            },
            {
              "title": "Create a BuyUpgrade function",
              "where": "BP_ClickerGameMode → Functions → + → name it BuyUpgrade.",
              "do": "Add Branch with condition Score >= UpgradeCost. From True set Score = Score - UpgradeCost, then ClickPower = ClickPower + 1, then UpgradeCost = UpgradeCost * 2. Connect the white execution wire through all three Set nodes in that order. False does nothing.",
              "why": "Buying requires enough points and raises the price for the next upgrade.",
              "check": "BuyUpgrade compiles, with Score >= UpgradeCost checked BEFORE the three Set nodes. You will test an actual purchase after connecting the new button."
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
              "where": "ClickerGameUI Widget → Designer → BuyUpgradeButton → Events → OnClicked (+).",
              "do": "In ClickerGameUI, select the NEW BuyUpgradeButton and click + for OnClicked. Connect that event to Get Game Mode → Cast To BP_ClickerGameMode → BuyUpgrade. After BuyUpgrade, use the same cast result to Get Score and call SetScoreText on Self (your current widget) with that number. Keep the ORIGINAL ClickerButton assigned in BP_ClickerGameMode; do not add another OnClicked for it. Compile.",
              "why": "The purchase remains in GameMode, not as separate widget-only money.",
              "check": "You can click the original main button and buy an upgrade with the new button. Immediately after buying, ScoreText displays the reduced balance."
            },
            {
              "title": "Test the insufficient-funds case",
              "where": "Play the Clicker level.",
              "do": "Play the level and confirm a fresh game starts with 0 points. Buy Upgrade must do nothing with insufficient funds. Click the main button 10 times, then buy once: Score returns to 0, ClickPower becomes 2, and UpgradeCost becomes 20. Click the main button once more: Score becomes 2. Restart Play for a clean test.",
              "why": "A shop needs to reject purchases a player cannot afford.",
              "check": "The game never produces negative points by buying."
            }
          ],
          "check": "The original main button earns +1 initially. After buying the 10-point upgrade, each main click earns 2. The shop purchase immediately updates the visible balance.",
          "fix": "If the original click stops working, check the existing Assign On Clicked binding in BP_ClickerGameMode. If score doubles, delete the old Set Score +1 chain; it must call AddClick once. If the shop purchase succeeds but ScoreText does not update, call SetScoreText on the widget after BuyUpgrade. A brand-new shop button cannot be tested before you have wired BuyUpgradeButton.OnClicked; build the function and button first.",
          "designerSteps": [
            "Plan: Create a theme for your shop and main click button. For the first purchase, design an icon or button state that clearly suggests increased points per click. Draw a small mock-up of the main button, shop costs and production per second.",
            "Create: make one original element for Buy more powerful manual clicks using shop icons, themed producer artwork or button graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm a player can see how each purchase changes output."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The original ClickerGameUI widget is shown by BP_ClickerGameMode. Its original ClickerButton is connected using Assign On Clicked in the GameMode, and the widget custom event SetScoreText displays Score.",
          "commonMistake": "The original main-button OnClicked event is inside BP_ClickerGameMode, not inside ClickerGameUI. Do not add a second click handler in the widget.",
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
              "do": "In your original ClickerGameUI Widget Designer, KEEP the original ScoreText. Do not add a second one. Add PowerText and CostText as new Text widgets and tick Is Variable on all three. Set placeholder values \"Points: 0\", \"Per click: 1\", \"Next upgrade: 10\". Leave ClickerButton and BuyUpgradeButton unchanged.",
              "why": "Players should know whether buying an upgrade is worth it.",
              "check": "You still have exactly one ScoreText widget, plus new PowerText and CostText labels."
            },
            {
              "title": "Make one RefreshShop function",
              "where": "ClickerGameUI Widget → Graph → My Blueprint → Functions → +.",
              "do": "Create a function named RefreshShop. Add Get Game Mode, connect its Return Value to Cast To BP_ClickerGameMode, then connect the purple function Entry white execution pin to the Cast. Compile the widget.",
              "why": "This one function can update the whole shop whenever the numbers change.",
              "check": "RefreshShop has its entry connected to a successful BP_ClickerGameMode cast."
            },
            {
              "title": "Update the existing ScoreText properly",
              "where": "ClickerGameUI → RefreshShop function, after the successful cast.",
              "do": "Get Score from the BP_ClickerGameMode cast result. Add Format Text, set Format to \"Points: {Number}\", and connect Score to the Number pin (allow integer-to-text conversion). Drag the ORIGINAL ScoreText widget into the graph as Get; from it add Set Text (Text). Connect Format Text to In Text and the Cast success white execution output to Set Text.",
              "why": "Reusing ScoreText avoids making another score display; Format Text keeps the Points label.",
              "check": "RefreshShop compiles. The first Set Text targets the original ScoreText and uses the current GameMode Score."
            },
            {
              "title": "Display click power and the next price",
              "where": "ClickerGameUI → RefreshShop, after ScoreText Set Text.",
              "do": "Add a Format Text for PowerText with \"Per click: {Number}\" from Get ClickPower, and another for CostText with \"Next upgrade: {Number}\" from Get UpgradeCost. Call Set Text on each respective widget. Chain the white execution wire ScoreText Set Text → PowerText Set Text → CostText Set Text. Compile.",
              "why": "The three values always represent the same GameMode state, rather than separate widget variables.",
              "check": "With no upgrades, RefreshShop shows Points: 0, Per click: 1 and Next upgrade: 10 when it is called."
            },
            {
              "title": "Refresh after clicking",
              "where": "BP_ClickerGameMode → Event Graph → original event from Assign On Clicked for ClickerButton.",
              "do": "Keep the existing event → AddClick function. Find the old call Get ClickerUI → SetScoreText(Score) that you kept in Upgrade 1. Replace that call with Get ClickerUI → RefreshShop. Compile the widget first so BP_ClickerGameMode can find RefreshShop. Do NOT add OnClicked to ClickerButton in the widget.",
              "why": "GameMode still owns the original click event; the widget only refreshes its visible numbers.",
              "check": "One main-button click runs AddClick exactly once and RefreshShop updates Score, ClickPower and UpgradeCost."
            },
            {
              "title": "Refresh after shopping",
              "where": "Clicker Widget → BuyUpgradeButton OnClicked event.",
              "do": "Inside the existing BuyUpgradeButton OnClicked event in ClickerGameUI, after BuyUpgrade replace the older call to SetScoreText with RefreshShop (on Self). RefreshShop must run whether the purchase is accepted or rejected. Compile.",
              "why": "A rejected purchase should leave clear, unchanged costs on screen.",
              "check": "After a successful purchase, Per click and Next upgrade change immediately."
            },
            {
              "title": "Show correct values on load",
              "where": "Clicker Widget → Graph → Event Construct.",
              "do": "In ClickerGameUI Event Construct from the original tutorial, remove or disconnect the old hard-coded SetScoreText(0) call. Connect Event Construct → RefreshShop instead. Compile and Save. The displayed starting values are now read from BP_ClickerGameMode.",
              "why": "The UI should never depend on someone clicking before it becomes correct.",
              "check": "On a fresh Play, ScoreText reads Points: 0, PowerText Per click: 1 and CostText Next upgrade: 10 before any click; no stale hard-coded 0 chain remains."
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
          "fix": "If ScoreText remains unchanged, check the BP_ClickerGameMode original Assign On Clicked handler calls ClickerUI.RefreshShop after AddClick. If it updates twice, do not create an extra ClickerButton OnClicked in the widget. RefreshShop should replace, not run alongside, SetScoreText.",
          "designerSteps": [
            "Plan: Create a tidy arrangement for three numbers and the two buttons. Try it at 1280×720 as well as full screen. Draw a small mock-up of the main button, shop costs and production per second.",
            "Create: make one original element for Show your shop balance and costs using shop icons, themed producer artwork or button graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm a player can see how each purchase changes output."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The original GameMode click event calls AddClick and ClickerUI.SetScoreText, while the NEW BuyUpgradeButton event lives in the ClickerGameUI widget. Score changes by ClickPower and purchases cost points.",
          "commonMistake": "Do not make a second ScoreText or add a main-button OnClicked event to the widget. The original button stays bound in BP_ClickerGameMode; only its final UI call changes to ClickerUI.RefreshShop.",
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
              "do": "Inside the BP_ClickerGameMode AddClick function, disconnect the old Set Score = Score + ClickPower calculation. Instead call GainPoints with Amount connected to ClickPower. Leave the existing GameMode assigned ClickerButton event calling AddClick once, followed by Get ClickerUI → RefreshShop. Do not add a widget-side main-button handler.",
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
              "title": "Create a Pure production function and output",
              "where": "BP_ClickerGameMode → My Blueprint → Functions → +.",
              "do": "Create a function GetProductionPerSecond. Select the function in My Blueprint (or its Entry node) and tick Pure in the Details panel. Under Outputs click +, name the new output Production and set its type to Integer; Compile.",
              "why": "A Pure function only returns a value; it does not change the score or need white execution wires.",
              "check": "GetProductionPerSecond has a green Integer output called Production and is marked Pure in Details."
            },
            {
              "title": "Calculate how fast Grannies earn",
              "where": "BP_ClickerGameMode → GetProductionPerSecond function graph.",
              "do": "Drag GranniesOwned and GrannyRate into the graph as Get, connect them to Multiply (Integer × Integer), and connect the result to Production on the Return Node. Compile. Do not add a Set Score node to this function.",
              "why": "One calculation works for one Granny or one hundred, and later for Farms too.",
              "check": "When GranniesOwned is 0, Production is 0; one Granny at GrannyRate 1 gives 1 per second."
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
              "do": "In ClickerGameUI, add an OnClicked event for the NEW BuyGrannyButton. Get Game Mode → Cast To BP_ClickerGameMode → call BuyGranny → call RefreshShop on Self. Leave the original ClickerButton binding in BP_ClickerGameMode untouched. Compile.",
              "why": "The UI requests the purchase while GameMode owns the economy.",
              "check": "From a fresh game, manually earn 15, then press Buy Granny: GranniesOwned becomes 1, GrannyCost becomes 19 and spendable Score drops by 15. The automatic timer is added in the next part."
            },
            {
              "title": "Show the next price and automatic income",
              "where": "Clicker Widget → RefreshShop function.",
              "do": "Open ClickerGameUI → RefreshShop. Reuse the successful BP_ClickerGameMode cast already there. Read GranniesOwned and GrannyCost, then Set Text on GranniesText using Format Text \"Grannies: {Owned} | Next: {Cost}\". Read GetProductionPerSecond and Set Text on PassiveIncomeText using Format Text \"Auto: {Rate} / sec\". Read TotalEarned and Set Text on LifetimeText using \"Lifetime: {Earned}\". Connect all new Set Text nodes AFTER CostText in the same white execution chain; Compile.",
              "why": "Players can see that another Granny increases automatic earnings.",
              "check": "Before buying a Granny, the extra labels show Grannies: 0 | Next: 15, Auto: 0 / sec and Lifetime: your points earned."
            },
            {
              "title": "Check that a Granny can actually be bought",
              "where": "ClickerGameUI → Play In Editor after connecting BuyGrannyButton.",
              "do": "Start Play, click to earn at least 15 points, then buy ONE Granny. Check the widget shows Grannies: 1, Next: 19 and Auto: 1 / sec. At this point the auto income label is a rate preview; points will not rise by themselves until you add the one-second timer below.",
              "why": "You should confirm purchasing works before debugging timers.",
              "check": "The purchase and shop labels work even though automatic points are not running yet."
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
              "do": "Keep your ORIGINAL BeginPlay → Create Widget → Add to Viewport → Set ClickerUI → Assign On Clicked chain intact. Add a Sequence immediately after BeginPlay: Then 0 continues to the original chain; Then 1 goes to Set Timer by Event (Time=1.0, Looping ticked). Drag from its red Event delegate pin and choose Create Event; select ProduceIncome in the new event chooser. Compile. The timer must only be started once here, not when buying each Granny.",
              "why": "One GameMode timer will pay all Grannies; creating one timer per Granny would be harder to manage.",
              "check": "On Play, the ClickerGameUI still appears and one looping timer is connected to ProduceIncome. Use a Print String in ProduceIncome temporarily to verify exactly one tick per second."
            },
            {
              "title": "Pay the player every second",
              "where": "BP_ClickerGameMode → ProduceIncome.",
              "do": "Call GetProductionPerSecond and feed its Integer result to GainPoints(Amount). GainPoints already ignores zero amounts and updates Score and TotalEarned. Compile.",
              "why": "This simulates automatic clicks using the same earning rules as manual clicks.",
              "check": "After you have bought at least one Granny using the new button, start Play again, buy one, then stop clicking. With a temporary Print String after GainPoints you see Score rise by about 1 per second. Remove the debug print afterwards."
            },
            {
              "title": "Refresh the display while nobody clicks",
              "where": "Clicker Widget → Event Construct.",
              "do": "In ClickerGameUI → Event Graph, leave the existing Event Construct → RefreshShop connection. Add Set Timer by Event AFTER the first RefreshShop, Time=0.25, Looping ticked. Add a Custom Event RefreshAutoHUD in empty space, connect it to RefreshShop, then from the timer red Event delegate pin choose Create Event assigned to RefreshAutoHUD. Do this only once in Construct; keep the existing GameMode production timer separate.",
              "why": "Passive income changes the score even when no button event triggers RefreshShop.",
              "check": "With at least one Granny owned, stop clicking for five seconds. Points and Lifetime values on screen increase automatically, without any second manual input."
            },
            {
              "title": "Test increasing purchase costs",
              "where": "Play the game from a fresh level.",
              "do": "Start Play fresh. Earn 15 points by clicking and buy one Granny; the next cost must show 19. Continue earning from clicks and from the first Granny until Score is at least 19, buy a second; the next cost shows 24. After buying two, stop clicking for three seconds: production increases by around six points (two per second). Since automatic income continues during purchases, Score may rise immediately after paying; watch the price and GranniesOwned to verify the purchases.",
              "why": "The production logic and price curve should remain understandable.",
              "check": "With two Grannies, the passive rate displays 2 per second and continues without clicking."
            }
          ],
          "check": "The first Granny costs 15 and produces 1 point/sec; two Grannies produce 2/sec. Buying prices increase 15→19→24, the automatic HUD updates, and purchases never reduce TotalEarned.",
          "fix": "Granny button missing? Build BuyGrannyButton and wire its new OnClicked before you try the timer. No income after buying? Check ProduceIncome runs once per second and calls GainPoints(GetProductionPerSecond). If Score rises internally but not in the widget, check the separate 0.25-second RefreshAutoHUD timer. If it rises twice as fast as expected, remove duplicate timers or the original +1 score chain.",
          "designerSteps": [
            "Plan: Design a Granny producer card, icon and Buy Granny button. Make it clear that this earns points per second without clicking. Draw a small mock-up of the main button, shop costs and production per second.",
            "Create: make one original element for Hire Grannies for automatic income using shop icons, themed producer artwork or button graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm a player can see how each purchase changes output."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The original ClickerButton is handled by BP_ClickerGameMode and the BuyUpgradeButton by ClickerGameUI. RefreshShop works from both events. You will build the Granny purchase and display BEFORE connecting a repeating timer.",
          "commonMistake": "Do not try to test automatic income before you create and connect BuyGrannyButton: you need at least one owned Granny. Check the purchase and labels before starting the timer; keep just one GameMode production timer.",
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
              "check": "TrainGrannies compiles. Its False path does nothing; after the button is connected, buying with one Granny and 100 Score doubles GrannyRate to 2 and sets next cost to 200."
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
              "do": "With two Grannies, earn at least 100 spendable points. Press Train once: the next upgrade costs 200 and Auto changes from 2/sec to 4/sec. Score drops by 100 at the moment of purchase but continues earning immediately from passive income; TotalEarned must never decrease.",
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
              "do": "For a quick test, temporarily set MilestoneTarget default to 20 in BP_ClickerGameMode AND change the MilestoneText placeholder in ClickerGameUI to \"TEST: 20 LIFETIME POINTS!\". Restart Play, earn 20 lifetime points from clicks or Grannies, then spend some Score. Verify the achievement appears once and does not interrupt the shop. Afterwards restore MilestoneTarget=500 and MilestoneText=\"500 LIFETIME POINTS!\", then restart Play again.",
              "why": "This catches the common error of checking spendable Score instead of lifetime progress.",
              "check": "The test banner appears at 20 earned points without blocking purchases. Both the target and on-screen wording are restored to 500 for the real game."
            }
          ],
          "check": "The lifetime milestone is triggered by TotalEarned (not spendable Score), appears once, and does not stop Granny production.",
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
              "check": "BuyFarm compiles with a Score >= FarmCost check before its three Set nodes. After wiring BuyFarmButton, purchasing the first Farm for 100 raises FarmCost to 130."
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
              "do": "Test with 3 Grannies (trained once to GrannyRate 2) and 2 Farms (FarmRate 5). The expected production is (3×2)+(2×5)=16 points/sec. This setup may take a while to earn in normal play; for a quick development test, use the Blueprint debugger or temporarily give the GameMode a larger starting Score, then restore the Score default to 0. Watch production for around five seconds without clicks or purchases. TotalEarned should increase by roughly 80, and Score by the same amount.",
              "why": "Different systems must sum correctly without triggering separate duplicated timers.",
              "check": "Three trained Grannies and two Farms give 16/sec using ONE timer; both Score and TotalEarned rise by roughly 80 over five seconds with no purchases."
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
              "do": "Name the new Actor BP_ClickTarget. Add a Static Mesh component using the built-in Cube mesh and a visibly coloured material. On the Cube component set Collision Presets to BlockAll (or ensure Visibility is Block) and leave Simulate Physics unchecked so it does not fall. Compile.",
              "why": "A reusable actor gives every spawned item the same interaction.",
              "check": "BP_ClickTarget has a visible cube, blocks Visibility clicks and stays still when spawned."
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
              "title": "Place a fixed camera for the clicking game",
              "where": "LoopsLevel → Place Actors panel → search Camera Actor.",
              "do": "Drag a Camera Actor into LoopsLevel and rename it Cam_TargetRush in the World Outliner. Set Location roughly X=-600, Y=0, Z=250 and Rotation X(Pitch)=0, Y(Yaw)=0, Z(Roll)=0 as a starting view towards the +X direction. Adjust the camera only if the spawned target tower is not visible. Save the level.",
              "why": "The original Loops exercise uses a roaming view; clickable targets need a stable view of their playfield.",
              "check": "In the Camera preview, you can see the positions where the five initial targets will appear."
            },
            {
              "title": "Make the Player Controller use that camera",
              "where": "BP_LoopsPlayerController → Event Graph → existing BeginPlay.",
              "do": "Keep Set Show Mouse Cursor=true and Set Enable Click Events=true. After those, add Get Actor of Class (Actor Class=CameraActor). Connect its Return Value to New View Target on Set View Target with Blend (Target=Self) and wire white execution from BeginPlay setup into Set View Target with Blend. Compile. Only one Camera Actor should be present for this simple lookup.",
              "why": "Click positions make sense only when the game displays the same fixed camera each run.",
              "check": "Press Play: you see a fixed view looking at the spawned targets, with a visible mouse cursor."
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
              "do": "Open LoopsLevel → Play. Check the camera does not drift and the cursor is visible. Click each of five targets. They should disappear one by one, with \"ALL TARGETS CLEARED!\" after the final click. Restart and try a different order.",
              "why": "This is now a complete win condition built from the Loops exercise.",
              "check": "Five clickable targets remain in the fixed camera view; each click destroys one and the fifth announces success."
            }
          ],
          "check": "Five targets spawn, five separate clicks clear them, and the final click announces success.",
          "fix": "Click does nothing? Confirm the cursor and Enable Click Events are set, target collision blocks the Visibility trace, and World Settings selects the intended GameMode. If the target tower is off-screen, move Cam_TargetRush and check BP_LoopsPlayerController BeginPlay calls Set View Target with Blend.",
          "designerSteps": [
            "Plan: Pick a recognisable target shape and design a clear visual distinction between clickable objects and scenery. Draw a small mock-up of the nine-target 3×3 grid and timer.",
            "Create: make one original element for Turn the spawned cubes into clickable targets using targets, arena props or wave HUD graphics. Export as FBX or PNG to your shared Teams folder.",
            "Integrate and test: ask the programmer to import your asset; play together and confirm every target stays visible and clickable."
          ],
          "designerCheck": "The team has one shared original asset or mock-up and a screenshot or short note proving the visual change helps gameplay.",
          "beforeStart": "The original LoopsLevel and BP_LoopsGameMode spawn a tower of BP_Box actors. Your new BP_ClickTarget will replace BP_Box. The original lesson had a free camera; this game needs one fixed camera so mouse clicks are reliable.",
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
              "where": "LoopsLevel → World Outliner → Cam_TargetRush Camera Actor, then Play In Editor.",
              "do": "Use the Camera preview from Cam_TargetRush to frame the full nine-target positions. With the example grid, targets spawn around X=200, Y=-180..180, Z=150..410, so a camera near X=-600, Y=0, Z=250 looking along +X is a starting point. Move or rotate the Camera Actor if any target is off-screen. Save the level.",
              "why": "A camera-dependent layout must be tested before wave progression; fixed example coordinates are only a starting point.",
              "check": "Play a final nine-target test wave: all nine appear within the fixed camera, separate enough to click and clear of any HUD."
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
