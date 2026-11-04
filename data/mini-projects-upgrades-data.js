/* Four-game final consistency review. Source Mini-Projects untouched. */
window.UE5_MINI_UPGRADE_DATA = {
  "version": "3.66.6",
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
          "steps": [
            {
              "title": "Create a score variable",
              "where": "Content Drawer → Balloon Popper → BP_BalloonGameMode → My Blueprint → Variables.",
              "do": "Create an Integer named Score. Compile and set Default Value to 0.",
              "why": "One GameMode keeps the total; balloons do not each hold their own score.",
              "check": "Score appears as an Integer with value 0.",
              "helpTopics": [
                "variable",
                "debug"
              ],
              "actions": [
                "Open the Content Drawer and double-click BP_BalloonGameMode in the Balloon Popper folder.",
                "In My Blueprint → Variables, click +.",
                "Name the new VARIABLE Score.",
                "In Details, set Variable Type to Integer.",
                "Click Compile. In Details set Default Value to 0, then Save."
              ]
            },
            {
              "title": "Give AwardPoints an input",
              "where": "BP_BalloonGameMode → My Blueprint → Functions → +.",
              "do": "Name the new function AwardPoints. Select its purple Entry node. In Details → Inputs → +, create an Integer input called Points, then Compile.",
              "why": "The same function will later award positive and negative points.",
              "check": "The purple AwardPoints entry node has a green Points (Integer) output pin.",
              "helpTopics": [
                "function-input",
                "variable"
              ],
              "actions": [
                "Open BP_BalloonGameMode → My Blueprint → Functions.",
                "Click + next to Functions. Name the FUNCTION AwardPoints.",
                "Double-click AwardPoints, then select its purple Function Entry node.",
                "In Details → Inputs, click + and name the new INPUT PIN Points.",
                "Set the input type to Integer. Click Compile."
              ]
            },
            {
              "title": "Add points to the shared score",
              "where": "BP_BalloonGameMode → AwardPoints function graph.",
              "do": "Drag Score from My Blueprint as Get. Drag a wire from its green output and choose Integer + Integer. Connect the second input to the purple entry node’s Points output.",
              "why": "The calculation uses the existing shared score, not one score variable per balloon.",
              "check": "The + node combines Score and Points; if Score is 0 and Points=1, it produces 1.",
              "helpTopics": [
                "get-set",
                "math"
              ],
              "actions": [
                "Stay in the AwardPoints Function graph.",
                "Drag the Score variable from My Blueprint into the graph. Choose Get Score.",
                "Drag from Get Score's green pin, search for + (Integer) and add Integer + Integer.",
                "Drag the green Points pin from the purple Function Entry node to the second input on +."
              ]
            },
            {
              "title": "Store the new score safely",
              "where": "Still in AwardPoints.",
              "do": "From the + output add Max (Integer), with the other input set to 0. Drag Score in again as Set, connect Max to Set Score, and connect the purple function entry white execution pin to Set Score. Compile.",
              "why": "Max prevents danger balloons from taking the total below zero later.",
              "check": "The graph has one white execution connection to Set Score, and the calculation feeds its green Score input.",
              "helpTopics": [
                "get-set",
                "math"
              ],
              "actions": [
                "Drag Score from My Blueprint into AwardPoints again. This time choose Set Score.",
                "Drag from the + output and search Max (Integer). Set the other Max input to 0.",
                "Connect Max output to Set Score's green value pin.",
                "Connect the purple Function Entry WHITE execution pin to Set Score's WHITE input.",
                "Click Compile and Save."
              ]
            },
            {
              "title": "Prove the function changes the total",
              "where": "At the end of AwardPoints in BP_BalloonGameMode.",
              "do": "After Set Score, add Print String. Drag Score as Get, convert it to String, use Append to place \"Score: \" before the number, and connect to In String. Compile.",
              "why": "This quick diagnostic confirms the logic before adding UI.",
              "check": "When the function runs, the score prints once per call.",
              "helpTopics": [
                "get-set",
                "debug"
              ],
              "actions": [
                "In AwardPoints, drag from Set Score's WHITE output and choose Print String.",
                "Drag Score into the graph as Get Score.",
                "From Get Score add To String (Integer) if needed.",
                "Add Append (String); type Score: in its first input and plug the score text into its second input.",
                "Connect Append to Print String → In String. Click Compile."
              ]
            },
            {
              "title": "Call it when a balloon actually pops",
              "where": "BP_Balloon → Event Graph → the original Branch after Set Actor Scale 3D checking Actor Scale X against PopScale.",
              "do": "Keep On Actor Clicked → Set Actor Scale 3D → Branch (Actor Scale X >= PopScale). From that Branch True white pin connect Get Game Mode → Cast To BP_BalloonGameMode (Object=Get Game Mode) → AwardPoints(Points=1) → Destroy Actor(Self). Keep the original False path, SizeIncreaseAmount and PopScale. Compile.",
              "why": "Awarding on the pop branch counts completed pops, not every click.",
              "check": "A click that only grows a balloon adds zero; the final pop adds exactly +1 and destroys that Actor.",
              "helpTopics": [
                "cast",
                "branch"
              ],
              "actions": [
                "Open BP_Balloon → Event Graph.",
                "Find the EXISTING On Actor Clicked → Set Actor Scale 3D → Branch that checks Actor Scale X >= PopScale.",
                "Leave the False path alone. From the Branch TRUE WHITE pin, add Cast To BP_BalloonGameMode.",
                "Right-click → Get Game Mode and connect its blue Return Value to Cast → Object.",
                "From Cast Success WHITE pin, call AwardPoints (drag from As BP_BalloonGameMode blue pin). Set Points to 1.",
                "Connect AwardPoints WHITE output to the EXISTING Destroy Actor (Self).",
                "Compile and Save BP_Balloon. Do not add another On Actor Clicked event."
              ]
            },
            {
              "title": "Check all balloons share one score",
              "where": "Content → Balloon Popper → Balloon Popper Level → Play In Editor.",
              "do": "Pop two different balloons. Confirm printed totals show Score: 1 then Score: 2. Save the level.",
              "why": "You have proved the GameMode, cast and pop event are connected correctly.",
              "check": "The total increases across different balloon actors, not from 0 for each one.",
              "helpTopics": [
                "debug"
              ],
              "actions": [
                "Open Balloon Popper Level and press Play.",
                "Click one balloon until it POPS. Look for Score: 1.",
                "Pop a DIFFERENT balloon. Look for Score: 2.",
                "Stop Play, then Save the level."
              ]
            }
          ],
          "check": "Pop three balloons. The GameMode score must be 3, even when each balloon needed several clicks.",
          "fix": "No score? Confirm BP_BalloonGameMode is the World Settings GameMode Override, check the cast Success pin is wired, and ensure AwardPoints is called before Destroy Actor.",
          "beforeStart": "Open Content → Balloon Popper → Balloon Popper Level. Several hand-placed BP_Balloon actors should grow on click and pop at PopScale (default 1.5). The level uses BP_BalloonGameMode and BP_BalloonPlayerController.",
          "commonMistake": "Score belongs to BP_BalloonGameMode, not each BP_Balloon. AwardPoints runs only from the True PopScale branch, BEFORE Destroy Actor.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "Score",
              "kind": "Variable",
              "owner": "BP_BalloonGameMode",
              "at": 1,
              "type": "Integer • default 0"
            },
            {
              "name": "AwardPoints",
              "kind": "Function",
              "owner": "BP_BalloonGameMode",
              "at": 2
            },
            {
              "name": "Points",
              "kind": "Function input",
              "owner": "AwardPoints Function",
              "at": 2,
              "type": "Integer"
            }
          ]
        },
        {
          "id": "respawn",
          "title": "2. Spawn replacement balloons at random positions",
          "tier": "Essential",
          "outcome": "Five balloons appear inside a visible spawn area. Popping one creates another at a random position without growing the number on screen.",
          "steps": [
            {
              "title": "Create the reusable spawning actor",
              "where": "Content Drawer → Balloon Popper folder → Add → Blueprint Class → Actor.",
              "do": "In Content → Balloon Popper, create Blueprint Class → Actor named BP_BalloonSpawner. Add a Box Collision component called SpawnArea. Under Shape, start with Box Extent X=50, Y=350, Z=220; keep Rotation=0,0,0, set Collision Presets=NoCollision, then Compile and Save.",
              "why": "A movable box defines where balloons may appear; it is easier to tune than hard-coded coordinates.",
              "check": "BP_BalloonSpawner contains one SpawnArea Box Collision component with no collision and no rotation.",
              "helpTopics": [
                "actor",
                "component"
              ],
              "actions": [
                "Open the Content Drawer → Balloon Popper folder.",
                "Right-click → Blueprint Class → Actor. Name it BP_BalloonSpawner.",
                "Open BP_BalloonSpawner. In Components click + Add and choose Box Collision.",
                "Rename that COMPONENT SpawnArea.",
                "Select SpawnArea. In Details set Box Extent X=50, Y=350, Z=220.",
                "Set Rotation X=0, Y=0, Z=0 and Collision Presets=NoCollision.",
                "Compile and Save."
              ]
            },
            {
              "title": "Make the function and locate the Box",
              "where": "BP_BalloonSpawner → My Blueprint → Functions → +.",
              "do": "Create SpawnOneBalloon. Drag SpawnArea from Components onto the graph as Get. Drag from the blue component pin and add Get World Location; add Get Scaled Box Extent from the same SpawnArea reference.",
              "why": "The spawner’s Box component defines the centre and size of the play area.",
              "check": "Both nodes show SpawnArea as their Target.",
              "helpTopics": [
                "function",
                "spawn"
              ],
              "actions": [
                "Open BP_BalloonSpawner → My Blueprint → Functions → +.",
                "Name the FUNCTION SpawnOneBalloon and double-click it.",
                "Drag SpawnArea from Components into this Function graph as Get.",
                "Drag from the blue SpawnArea pin, search Get World Location and place it.",
                "Drag again from SpawnArea and search Get Scaled Box Extent."
              ]
            },
            {
              "title": "Choose a random visible location",
              "where": "BP_BalloonSpawner → SpawnOneBalloon function.",
              "do": "Right-click and add Random Point in Bounding Box. Plug Get World Location into Center and Get Scaled Box Extent into Half Size. In UE5.8 these are the exact pin names. Keep the Box rotation at 0,0,0.",
              "why": "This returns a different location inside the Box whenever the function runs.",
              "check": "Random Point in Bounding Box uses SpawnArea Get World Location → Center and Get Scaled Box Extent → Half Size; its output depends on where the actor is placed in the level.",
              "helpTopics": [
                "spawn"
              ],
              "actions": [
                "In SpawnOneBalloon, right-click and add Random Point in Bounding Box.",
                "Connect SpawnArea → Get World Location to the node's Center input.",
                "Connect SpawnArea → Get Scaled Box Extent to its Half Size input.",
                "Leave the Box rotation at 0,0,0."
              ]
            },
            {
              "title": "Spawn at that random point",
              "where": "In SpawnOneBalloon, after the random point.",
              "do": "Inside SpawnOneBalloon, add Make Transform (Location=Random Point in Bounding Box Return Value, Rotation=0, Scale=1,1,1). Add Spawn Actor From Class(Class=BP_Balloon, Spawn Transform=Make Transform, Spawn Collision Handling Override=Always Spawn, Ignore Collisions). Wire SpawnOneBalloon purple function Entry white pin to Spawn Actor white execution input. Compile.",
              "why": "The tutorial balloon is reused as a real spawned actor, not duplicated by hand.",
              "check": "SpawnOneBalloon compiles to spawn one balloon when called; it does not run yet until BeginPlay calls it in the next step.",
              "helpTopics": [
                "function",
                "spawn"
              ],
              "actions": [
                "Still in SpawnOneBalloon, add Make Transform.",
                "Connect Random Point in Bounding Box → Return Value to Make Transform → Location.",
                "Keep Rotation at 0,0,0 and Scale at 1,1,1.",
                "Add Spawn Actor From Class. Choose BP_Balloon as its Class.",
                "Connect Make Transform → Spawn Transform.",
                "Set Spawn Collision Handling Override to Always Spawn, Ignore Collisions.",
                "Connect the purple SpawnOneBalloon Function Entry WHITE output to Spawn Actor WHITE input.",
                "Compile and Save."
              ]
            },
            {
              "title": "Populate the arena on BeginPlay",
              "where": "BP_BalloonSpawner → Event Graph → Event BeginPlay.",
              "do": "BP_BalloonSpawner → Event Graph: wire Event BeginPlay → For Loop(First Index=0, Last Index=4) → from Loop Body call SpawnOneBalloon. Leave Loop Completed unconnected. Compile and Save. Five calls occur: indexes 0,1,2,3,4.",
              "why": "The player starts with a small, predictable number of targets.",
              "check": "BeginPlay loops from 0 through 4 and calls SpawnOneBalloon once per index. The spawner still needs to be placed in Balloon Popper Level.",
              "helpTopics": [
                "spawn",
                "exec"
              ],
              "actions": [
                "Open BP_BalloonSpawner → Event Graph.",
                "Use the existing Event BeginPlay (or add one if absent).",
                "From BeginPlay's WHITE pin, add For Loop.",
                "Set First Index=0 and Last Index=4.",
                "From Loop Body WHITE output, call SpawnOneBalloon.",
                "Leave Loop Completed unconnected. Compile and Save."
              ]
            },
            {
              "title": "Place the spawner and test its first five balloons",
              "where": "Content → Balloon Popper → Balloon Popper Level → drag BP_BalloonSpawner from the Content Drawer.",
              "do": "Put ONE BP_BalloonSpawner near the original balloons and move or resize its SpawnArea so the unrotated box is visible in the camera. Move the old manually placed balloons aside TEMPORARILY so you can identify newly spawned ones. Press Play and count five NEW balloons.",
              "why": "The Blueprint spawner must be placed in the level; an asset only in the Content Drawer does not receive BeginPlay.",
              "check": "Five new balloons appear inside the spawner volume. If none appear, check BP_BalloonSpawner is placed and its BeginPlay loop runs.",
              "helpTopics": [
                "level"
              ],
              "actions": [
                "Open Balloon Popper Level.",
                "Drag ONE BP_BalloonSpawner from the Content Drawer into the level.",
                "Select the spawner and position or scale its SpawnArea so it sits in the camera view.",
                "Move the original hand-placed balloons to one side for this first test.",
                "Press Play. Count FIVE newly spawned balloons. Stop Play."
              ]
            },
            {
              "title": "Put the spawn box where the camera can see it",
              "where": "Open Balloon Popper Level.",
              "do": "ONLY after you have proved five new balloons spawn, delete the original hand-placed BP_Balloon actors (plus any loose balloon Static Mesh Actors obstructing the view). Keep BP_BalloonSpawner, camera view, lights and scenery. Save. With the placed BP_BalloonSpawner selected, adjust its SpawnArea to stay in camera view. Set the SpawnArea box Collision Presets=NoCollision.",
              "why": "Only the spawner should create the balloons now; otherwise you would have extras.",
              "check": "Exactly five newly spawned balloons can be seen and clicked, with no manually placed duplicates remaining.",
              "helpTopics": [
                "level"
              ],
              "actions": [
                "Once you have seen five NEW balloons, open Balloon Popper Level again.",
                "Delete the OLD hand-placed BP_Balloon actors and any loose balloon meshes blocking the view.",
                "Keep your camera, lighting, scenery and ONE BP_BalloonSpawner.",
                "Select the spawner. Check SpawnArea stays inside the camera view and has NoCollision.",
                "Save the level and Play. You should now see five balloons, not ten."
              ]
            },
            {
              "title": "Add a replacement event",
              "where": "BP_BalloonSpawner → Event Graph → Add Custom Event.",
              "do": "Call it RequestReplacement. Wire its white execution output to SpawnOneBalloon. Compile.",
              "why": "Every pop can ask the same spawner for one replacement.",
              "check": "RequestReplacement is wired to SpawnOneBalloon. The next two steps connect BP_Balloon to call it.",
              "helpTopics": [
                "custom-event",
                "spawn"
              ],
              "actions": [
                "Open BP_BalloonSpawner → Event Graph.",
                "Right-click empty space → Add Custom Event.",
                "Name the EVENT RequestReplacement.",
                "From its WHITE output, call the existing SpawnOneBalloon FUNCTION.",
                "Compile and Save."
              ]
            },
            {
              "title": "Find the spawner when a balloon pops",
              "where": "BP_Balloon → Event Graph → True result of the PopScale Branch.",
              "do": "Keep the existing AwardPoints call on the True path. Add Get Actor of Class, set Actor Class to BP_BalloonSpawner, then add Cast To BP_BalloonSpawner. Connect Get Actor of Class Return Value to the Cast Object input.",
              "why": "The balloon needs a reference to the one spawner placed in its level.",
              "check": "The Cast has a blue Object input connected to the spawner lookup.",
              "helpTopics": [
                "cast",
                "branch"
              ],
              "actions": [
                "Open BP_Balloon → Event Graph → the PopScale Branch TRUE path.",
                "Keep AwardPoints(Points=1) from the previous upgrade.",
                "Right-click and add Get Actor of Class; select BP_BalloonSpawner as Actor Class.",
                "Drag from Get Actor of Class blue Return Value, search Cast To BP_BalloonSpawner.",
                "Connect Return Value to Cast → Object."
              ]
            },
            {
              "title": "Call the replacement event before destroying the balloon",
              "where": "BP_Balloon → same True pop path.",
              "do": "Connect AwardPoints white execution output to the Cast white input. From Cast success, call RequestReplacement on the BP_BalloonSpawner reference, then connect that event white output to the existing Destroy Actor (Self). Leave Cast Failed unconnected; if the Cast fails, check that BP_BalloonSpawner has been placed in the level. Compile.",
              "why": "One old balloon disappears and one new balloon appears before it is destroyed.",
              "check": "When BP_BalloonSpawner exists, the Cast succeeds: AwardPoints → RequestReplacement → Destroy Actor keeps five active balloons.",
              "helpTopics": [
                "cast",
                "exec"
              ],
              "actions": [
                "In BP_Balloon, connect AwardPoints WHITE output to Cast To BP_BalloonSpawner WHITE input.",
                "Drag from As BP_BalloonSpawner's BLUE pin and search RequestReplacement (CALL).",
                "Connect Cast Success WHITE output to RequestReplacement WHITE input.",
                "Connect RequestReplacement WHITE output to the EXISTING Destroy Actor (Self).",
                "Leave Cast Failed unconnected. The spawner must exist in the level for this replacement to work.",
                "Compile and Save."
              ]
            },
            {
              "title": "Check click collision and spawn position",
              "where": "Balloon Popper Level → Play In Editor.",
              "do": "Pop at least 15 balloons (not merely click 15 times). After each pop there should still be five. Ensure BalloonModel mesh collision blocks Visibility, SpawnArea uses NoCollision, and BP_BalloonPlayerController has Enable Click Events turned on. If targets overlap or disappear behind scenery, move or enlarge SpawnArea WITHIN the camera view; random positions are not guaranteed non-overlapping.",
              "why": "A game loop must be reliable, not only work once.",
              "check": "The five-target loop remains populated through 15 successful pops and all targets can be reached by mouse.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open Balloon Popper Level and press Play.",
                "POP a balloon fully; do not just click it once.",
                "Count the balloons. You should still have five.",
                "Repeat until 15 balloons have popped. Five should remain each time.",
                "If balloons cannot be clicked, check BP_Balloon's mesh blocks Visibility and BP_BalloonPlayerController has Enable Click Events=true.",
                "If newly spawned balloons are hidden, move SpawnArea into camera view; keep SpawnArea collision set to NoCollision."
              ]
            }
          ],
          "check": "Start with five visible balloons. After any number of pops, five replacements remain within the playfield and scoring still works.",
          "fix": "No targets? Check an instance of BP_BalloonSpawner exists in Balloon Popper Level and its BeginPlay For Loop calls SpawnOneBalloon. Four remain? RequestReplacement must happen before Destroy Actor. More than five? Remove the original manually placed actors. Hidden or overlapping? Adjust SpawnArea size and position while keeping it unrotated and non-colliding.",
          "beforeStart": "One popped balloon awards exactly +1. The original BP_Balloon actors remain placed in the level; do not delete them until a new BP_BalloonSpawner proves it can create five.",
          "commonMistake": "The ORIGINAL project uses the folder \"Balloon Popper\" and map \"Balloon Popper Level\". BP_BalloonSpawner must be placed in that level; a Blueprint asset in Content Drawer does not start spawning.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "BP_BalloonSpawner",
              "kind": "Actor Blueprint asset",
              "owner": "Content/Balloon Popper",
              "at": 1
            },
            {
              "name": "SpawnArea",
              "kind": "Box Collision component",
              "owner": "BP_BalloonSpawner",
              "at": 1
            },
            {
              "name": "SpawnOneBalloon",
              "kind": "Function",
              "owner": "BP_BalloonSpawner",
              "at": 2
            },
            {
              "name": "RequestReplacement",
              "kind": "Custom Event",
              "owner": "BP_BalloonSpawner",
              "at": 8
            }
          ]
        },
        {
          "id": "timer",
          "title": "3. Add a 60-second round and live score HUD",
          "tier": "Essential",
          "outcome": "A visible score and clock count down; once time reaches zero, balloons cannot score any more.",
          "steps": [
            {
              "title": "Add the round state",
              "where": "BP_BalloonGameMode → Variables.",
              "do": "Create SecondsLeft (Integer; default 60) and RoundEnded (Boolean; default false). Compile.",
              "why": "The GameMode can decide when play is allowed.",
              "check": "You can see both variables and their default values.",
              "helpTopics": [
                "variable"
              ],
              "actions": [
                "Open BP_BalloonGameMode → My Blueprint → Variables → +.",
                "Name a new VARIABLE SecondsLeft. Set type Integer, Compile, then Default Value=60.",
                "Click + Variable again. Name it RoundEnded.",
                "Set type Boolean, Compile, and leave its Default Value unchecked (false).",
                "Save BP_BalloonGameMode."
              ]
            },
            {
              "title": "Create the countdown event",
              "where": "BP_BalloonGameMode → Event Graph, in empty space.",
              "do": "Right-click → Add Custom Event; call it TickClock. Connect a temporary Print String node with text \"tick\" to TickClock and Compile.",
              "why": "We test the callback first so the countdown logic can be added safely.",
              "check": "The Event Graph contains one Custom Event TickClock with a white output wire to Print String.",
              "helpTopics": [
                "custom-event",
                "timer"
              ],
              "actions": [
                "Open BP_BalloonGameMode → Event Graph.",
                "Right-click empty space → Add Custom Event. Name it TickClock.",
                "From TickClock WHITE output, add Print String and type tick.",
                "Compile and Save."
              ]
            },
            {
              "title": "Start the timer from BeginPlay",
              "where": "BP_BalloonGameMode → Event Graph → Event BeginPlay.",
              "do": "In BP_BalloonGameMode Event Graph: connect Event BeginPlay → Set Timer by Event (Time=1.0, Looping checked). Drag from its red Event delegate pin → Create Event → select TickClock. Right-click Return Value → Promote to Variable and name it ClockHandle (Timer Handle). Leave your temporary Print String \"tick\" connected to TickClock for this test. Compile and Play.",
              "why": "The clock should start once when the level begins.",
              "check": "One \"tick\" prints roughly every second, and ClockHandle is type Timer Handle. After confirming it works, remove the temporary Print String.",
              "helpTopics": [
                "variable",
                "custom-event"
              ],
              "actions": [
                "Still in BP_BalloonGameMode → Event Graph, find Event BeginPlay.",
                "From BeginPlay WHITE output, add Set Timer by Event.",
                "Set Time=1.0 and tick Looping.",
                "From the red Event pin, drag a wire and choose Create Event; select your TickClock event.",
                "Right-click the Timer's Return Value pin → Promote to Variable.",
                "Rename this TIMER HANDLE VARIABLE ClockHandle.",
                "Compile and Play. Confirm tick appears about once per second. Stop Play."
              ]
            },
            {
              "title": "Count down and stop on zero",
              "where": "BP_BalloonGameMode → TickClock.",
              "do": "In BP_BalloonGameMode Event Graph → TickClock replace the temporary Print String with Branch(Condition=NOT RoundEnded). From True: Set SecondsLeft = Max(0, SecondsLeft - 1), then Branch(SecondsLeft <= 0). Only the second Branch True goes to Set RoundEnded=true → Print String \"TIME UP!\" → Clear and Invalidate Timer by Handle(ClockHandle). Compile. False paths need no action.",
              "why": "Clamping avoids negative seconds; clearing the handle stops extra calls.",
              "check": "Play for a few seconds: SecondsLeft falls by 1 every second and stops at 0.",
              "helpTopics": [
                "timer",
                "branch"
              ],
              "actions": [
                "Open BP_BalloonGameMode → Event Graph → TickClock.",
                "Delete the temporary Print String after TickClock.",
                "From TickClock WHITE pin add Branch.",
                "Drag RoundEnded as Get, add NOT Boolean, connect NOT output to Branch → Condition.",
                "From Branch True WHITE output, add Set SecondsLeft.",
                "For its value: Get SecondsLeft → Integer - Integer (other input 1) → Max (Integer) with other input 0 → Set SecondsLeft value.",
                "After Set SecondsLeft WHITE output, add a second Branch; its Condition is Get SecondsLeft <= 0.",
                "Second Branch TRUE → Set RoundEnded(true) → Print String(TIME UP!) → Clear and Invalidate Timer by Handle(ClockHandle).",
                "Leave the Branch FALSE outputs unconnected. Compile and Save."
              ]
            },
            {
              "title": "Prevent scores after time runs out",
              "where": "BP_BalloonGameMode → AwardPoints function.",
              "do": "In BP_BalloonGameMode → AwardPoints function, find the direct white execution wire from function Entry to Set Score. Disconnect it, insert a Branch with Condition=NOT RoundEnded, and connect ONLY Branch True to Set Score. Leave Score+Points → Max(0,..) as the green input to Set Score, and leave the existing Print String after Set Score. Do not create another AwardPoints function.",
              "why": "This blocks late scoring even when an actor was already clicked.",
              "check": "AwardPoints never changes Score when RoundEnded is true. You can temporarily set the GameMode SecondsLeft default to 5 to check the end quickly, then restore 60.",
              "helpTopics": [
                "branch",
                "math"
              ],
              "actions": [
                "Open BP_BalloonGameMode → AwardPoints FUNCTION.",
                "Find the WHITE wire from the purple Function Entry to Set Score. Disconnect that one wire.",
                "Add a Branch between them. Function Entry WHITE → Branch WHITE input.",
                "Get RoundEnded → NOT Boolean → Branch Condition.",
                "Branch True WHITE → the EXISTING Set Score node.",
                "Leave the green score calculation and Print String alone. Compile and Save."
              ]
            },
            {
              "title": "Create the HUD widget",
              "where": "Content Drawer → Balloon Popper → User Interface → Widget Blueprint → User Widget.",
              "do": "Name it WBP_BalloonHUD. In Designer add two Text widgets near the top: ScoreText and TimeText. Tick Is Variable for each. Give them placeholder text \"Score: 0\" and \"Time: 60\".",
              "why": "The player needs persistent feedback rather than Print String messages.",
              "check": "The Designer preview shows both labels in the game-safe area.",
              "helpTopics": [
                "variable",
                "widget"
              ],
              "actions": [
                "In Content Drawer → Balloon Popper, right-click → User Interface → Widget Blueprint → User Widget.",
                "Name this new WIDGET ASSET WBP_BalloonHUD. Open Designer.",
                "Add a Text widget and rename it ScoreText. Set its text to Score: 0.",
                "Add a second Text widget and rename it TimeText. Set text to Time: 60.",
                "Tick Is Variable on both Text widgets. Compile and Save."
              ]
            },
            {
              "title": "Let gameplay clicks pass through the HUD",
              "where": "WBP_BalloonHUD → Designer → select the root Canvas Panel, then the ScoreText and TimeText labels.",
              "do": "Set the root Canvas Panel Visibility to Not Hit-Testable (Self Only). Set ScoreText and TimeText to Not Hit-Testable (Self & All Children). Do not choose Self & All Children on the root: a later ResultsPanel contains a clickable ReplayButton.",
              "why": "A decorative HUD should not swallow mouse clicks intended for balloons in the 3D scene; later child buttons must remain clickable.",
              "check": "In Designer the root Canvas uses Not Hit-Testable (Self Only), with both decorative Text widgets Not Hit-Testable (Self & All Children). You will test real mouse clicks after the widget appears on screen.",
              "helpTopics": [
                "ui-pass"
              ],
              "actions": [
                "In WBP_BalloonHUD → Designer, select the ROOT Canvas Panel.",
                "In Details → Behavior → Visibility choose Not Hit-Testable (Self Only).",
                "Select ScoreText. Set Visibility to Not Hit-Testable (Self & All Children).",
                "Select TimeText. Set Visibility to Not Hit-Testable (Self & All Children).",
                "Compile and Save. Keep the root Self Only because the replay button needs clicking later."
              ]
            },
            {
              "title": "Bind ScoreText and keep its Score label",
              "where": "WBP_BalloonHUD → Designer → ScoreText → Details → Content → Text → Bind → Create Binding.",
              "do": "In the generated Text binding function use Get Game Mode → Cast To BP_BalloonGameMode (Object=Get Game Mode). From the cast read Score and connect it to Format Text with exact format \"Score: {Value}\". Connect Format Text output to Return Node Text and connect the white execution Entry → Cast Success → Return. Compile.",
              "why": "Returning just an integer would replace the word \"Score\" with an unlabelled number.",
              "check": "The binding returns a value like \"Score: 2\" for two balloon pops.",
              "helpTopics": [
                "function-output",
                "binding"
              ],
              "actions": [
                "In WBP_BalloonHUD → Designer, select ScoreText.",
                "Details → Content → Text → Bind → Create Binding.",
                "In the created Function graph add Get Game Mode → Cast To BP_BalloonGameMode.",
                "Wire Get Game Mode blue Return Value to Cast Object and Entry WHITE to Cast WHITE input.",
                "From As BP_BalloonGameMode blue output, Get Score.",
                "Create Format Text with format Score: {Value}. Connect Get Score to Value.",
                "Connect Format Text result to the Return Node's Text output.",
                "Wire Cast Success WHITE to Return. Compile and Save."
              ]
            },
            {
              "title": "Bind TimeText and keep its Time label",
              "where": "WBP_BalloonHUD → Designer → TimeText → Details → Content → Text → Bind → Create Binding.",
              "do": "Repeat the GameMode cast and white execution chain in this separate binding. From Get SecondsLeft use Format Text \"Time: {Value}\" and connect to the Text Return Node. Compile. If the cast fails, use \"Time: 60\" as a fallback.",
              "why": "Both labels display values from the same round state without duplicating variables in the widget.",
              "check": "The binding returns \"Time: 57\" as the timer counts down, not merely \"57\".",
              "helpTopics": [
                "function-output",
                "binding"
              ],
              "actions": [
                "Still in WBP_BalloonHUD → Designer, select TimeText.",
                "Details → Content → Text → Bind → Create Binding.",
                "In this separate binding add Get Game Mode → Cast To BP_BalloonGameMode.",
                "Connect Get Game Mode to Cast Object and Function Entry WHITE to Cast input.",
                "From Cast blue output, Get SecondsLeft.",
                "Use Format Text: Time: {Value} with Value=SecondsLeft.",
                "Wire the formatted Text to Return Node's Text pin, and Cast Success WHITE to Return.",
                "Compile and Save."
              ]
            },
            {
              "title": "Put the HUD on screen",
              "where": "BP_BalloonPlayerController → Event Graph → BeginPlay.",
              "do": "In BP_BalloonPlayerController Event Graph → original BeginPlay and Set Show Mouse Cursor(true), keep that original node wired. After it, Create Widget(Class=WBP_BalloonHUD, Owning Player=Self) → Add to Viewport (Target=Create Widget Return Value), then Set Input Mode Game and UI with Player Controller=Self and Hide Cursor During Capture=false. Do not disconnect existing input work; use a Sequence if needed. Compile and Save.",
              "why": "The controller is already selected by the project GameMode and owns player display.",
              "check": "Play Balloon Popper Level: Score: 0 and Time: 60 appear, time decreases, the cursor is visible and clicking through empty HUD space still grows balloons.",
              "helpTopics": [
                "widget"
              ],
              "actions": [
                "Open BP_BalloonPlayerController → Event Graph → existing BeginPlay.",
                "KEEP its existing Set Show Mouse Cursor(true) and any Enable Click Events setup.",
                "After cursor setup, add Create Widget; choose Class=WBP_BalloonHUD, Owning Player=Self.",
                "Connect its Return Value to Add to Viewport → Target.",
                "From Add to Viewport WHITE output add Set Input Mode Game and UI, Player Controller=Self.",
                "Set Hide Cursor During Capture=false. Connect all WHITE execution pins in order.",
                "Compile, Save, Play. Confirm Score and Time appear and mouse clicks still reach balloons."
              ]
            },
            {
              "title": "Block clicks once the round ends",
              "where": "BP_Balloon → Event ActorOnClicked execution, before the growth nodes.",
              "do": "In BP_Balloon → Event Graph find the ORIGINAL On Actor Clicked event feeding the grow/Set Actor Scale 3D chain. Disconnect its direct white execution connection, then add Get Game Mode → Cast To BP_BalloonGameMode → Branch(Condition=NOT RoundEnded). Wire Cast Success → Branch True into the ORIGINAL grow chain. Leave the original PopScale Branch and AwardPoints call unchanged. Compile.",
              "why": "The scene should stop changing when the round is finished.",
              "check": "During a five-second test, balloons grow normally. After TIME UP, further clicks do not grow or pop them.",
              "helpTopics": [
                "cast",
                "branch"
              ],
              "actions": [
                "Open BP_Balloon → Event Graph → ORIGINAL On Actor Clicked event.",
                "Disconnect its WHITE wire going directly into the grow/Set Actor Scale chain.",
                "From On Actor Clicked WHITE output add Cast To BP_BalloonGameMode; connect Get Game Mode blue Return Value to Cast Object.",
                "From Cast Success WHITE output add Branch.",
                "Get RoundEnded → NOT Boolean → Branch Condition.",
                "Connect Branch True WHITE output back to the ORIGINAL grow chain. Leave False empty.",
                "Do not change the PopScale or AwardPoints logic. Compile and Save."
              ]
            },
            {
              "title": "Prevent the spawner working after the timer",
              "where": "BP_BalloonSpawner → RequestReplacement custom event.",
              "do": "In BP_BalloonSpawner → Event Graph → RequestReplacement custom event, insert Get Game Mode → Cast To BP_BalloonGameMode → Branch(Condition=NOT RoundEnded) BEFORE SpawnOneBalloon. Connect only Branch True to SpawnOneBalloon; False does nothing. Do not add this gate to Event BeginPlay, which creates the original five targets.",
              "why": "The round must stop producing targets when the clock reaches zero.",
              "check": "When RoundEnded is true no late replacement requests can create targets, while the original five-target BeginPlay loop still works.",
              "helpTopics": [
                "custom-event",
                "spawn"
              ],
              "actions": [
                "Open BP_BalloonSpawner → Event Graph → RequestReplacement event.",
                "Disconnect the WHITE wire from RequestReplacement directly into SpawnOneBalloon.",
                "Insert Cast To BP_BalloonGameMode (Object=Get Game Mode) → Branch.",
                "Set Branch Condition to NOT RoundEnded.",
                "Connect Branch True WHITE to SpawnOneBalloon; leave False empty.",
                "Leave the BeginPlay five-balloon loop unchanged. Compile and Save."
              ]
            }
          ],
          "check": "The clock counts 60→0, the score changes only when a balloon pops, the HUD stays visible and no further targets spawn or score after the round ends.",
          "fix": "HUD missing? Check the controller is assigned in BP_BalloonGameMode and Create Widget is connected. Time frozen? Confirm TickClock is connected to Set Timer by Event with Looping ticked. If the HUD appears but balloons cannot be clicked, check the root Canvas uses Not Hit-Testable (Self Only), not Visible. If the HUD numbers lose their labels, use Format Text \"Score: {Value}\" and \"Time: {Value}\" in the two bindings. If the result ReplayButton later does not receive clicks, check Set Input Mode Game and UI in the controller.",
          "beforeStart": "One BP_BalloonSpawner instance is in Balloon Popper Level and maintains five clickable targets. BP_BalloonPlayerController already shows the cursor and has Enable Click Events checked in Details.",
          "commonMistake": "If your timer seems frozen, test TickClock using Print String before building the HUD.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "SecondsLeft",
              "kind": "Variable",
              "owner": "BP_BalloonGameMode",
              "at": 1,
              "type": "Integer • default 60"
            },
            {
              "name": "RoundEnded",
              "kind": "Variable",
              "owner": "BP_BalloonGameMode",
              "at": 1,
              "type": "Boolean • default false"
            },
            {
              "name": "TickClock",
              "kind": "Custom Event",
              "owner": "BP_BalloonGameMode",
              "at": 2
            },
            {
              "name": "ClockHandle",
              "kind": "Variable",
              "owner": "BP_BalloonGameMode",
              "at": 3,
              "type": "Timer Handle"
            },
            {
              "name": "WBP_BalloonHUD",
              "kind": "Widget Blueprint asset",
              "owner": "Content/Balloon Popper",
              "at": 6
            },
            {
              "name": "ScoreText",
              "kind": "Text widget • Is Variable",
              "owner": "WBP_BalloonHUD",
              "at": 6
            },
            {
              "name": "TimeText",
              "kind": "Text widget • Is Variable",
              "owner": "WBP_BalloonHUD",
              "at": 6
            }
          ]
        },
        {
          "id": "results",
          "title": "4. Add a visible game-over result and Play Again",
          "tier": "Essential",
          "outcome": "Time Up leaves a final score on screen and a Play Again button starts a fresh round.",
          "steps": [
            {
              "title": "Create a results panel in the HUD",
              "where": "WBP_BalloonHUD → Designer.",
              "do": "In WBP_BalloonHUD → Designer, place a Border or Vertical Box named ResultsPanel INSIDE the root Canvas Panel. Inside it put Text FinalScoreText and Button ReplayButton with a child Text \"Play Again\". Tick Is Variable on ResultsPanel, FinalScoreText and ReplayButton. Set ResultsPanel Visibility=Collapsed initially and ReplayButton Visibility=Visible. Keep the root Canvas Not Hit-Testable (Self Only), NOT Self & All Children.",
              "why": "Players need a persistent end screen; Print String is only a debugging aid.",
              "check": "The new result panel is initially Collapsed and does not block clicks during the round.",
              "helpTopics": [
                "widget"
              ],
              "actions": [
                "Open WBP_BalloonHUD → Designer.",
                "Inside the existing ROOT Canvas Panel add a Border or Vertical Box. Rename that WIDGET ResultsPanel.",
                "Inside ResultsPanel add a Text widget called FinalScoreText.",
                "Add a Button widget named ReplayButton; place a child Text inside with label Play Again.",
                "Tick Is Variable for ResultsPanel, FinalScoreText and ReplayButton.",
                "Select ResultsPanel → Visibility=Collapsed. Select ReplayButton → Visibility=Visible.",
                "Keep the ROOT Canvas Visibility=Not Hit-Testable (Self Only). Compile and Save."
              ]
            },
            {
              "title": "Create the end-screen refresh event",
              "where": "WBP_BalloonHUD → Event Graph → empty space.",
              "do": "Create a Custom Event called RefreshRoundScreen. Connect its white output to Get Game Mode → Cast To BP_BalloonGameMode → Branch(Condition=Get RoundEnded). On True Set Visibility(ResultsPanel,Visible); on False Set Visibility(ResultsPanel,Collapsed). Compile.",
              "why": "The result is controlled by the actual GameMode end flag, not by an independent second timer counting down.",
              "check": "Both Branch paths update the ResultsPanel, but the event has not been scheduled yet.",
              "helpTopics": [
                "custom-event",
                "cast"
              ],
              "actions": [
                "Open WBP_BalloonHUD → Event Graph.",
                "Add Custom Event and name it RefreshRoundScreen.",
                "From its WHITE pin add Cast To BP_BalloonGameMode; Get Game Mode → Cast Object.",
                "From Cast Success WHITE output add Branch; Get RoundEnded → Branch Condition.",
                "Branch True → Set Visibility(ResultsPanel, Visible). Branch False → Set Visibility(ResultsPanel, Collapsed).",
                "Compile and Save."
              ]
            },
            {
              "title": "Call the result-refresh event using one timer",
              "where": "WBP_BalloonHUD → Event Graph → Event Construct.",
              "do": "From Event Construct start Set Timer by Event(Time=0.25, Looping checked). From the red Event delegate pin choose Create Event and select RefreshRoundScreen. Keep both existing Score and Time Text bindings. Do not create a second WBP_BalloonHUD instance. Compile.",
              "why": "A quarter-second update is frequent enough for the result panel to appear promptly without Event Tick.",
              "check": "Set SecondsLeft temporarily to 5 and Play: after time reaches zero, ResultsPanel appears.",
              "helpTopics": [
                "custom-event",
                "timer"
              ],
              "actions": [
                "In WBP_BalloonHUD → Event Graph, find Event Construct.",
                "From Construct WHITE output add Set Timer by Event.",
                "Set Time=0.25, Looping=true.",
                "From the Timer's red Event pin choose Create Event → RefreshRoundScreen.",
                "Do not create a second HUD widget. Compile and Save."
              ]
            },
            {
              "title": "Show the final score",
              "where": "RefreshRoundScreen → True branch in WBP_BalloonHUD.",
              "do": "Inside WBP_BalloonHUD → RefreshRoundScreen, from the existing BP_BalloonGameMode cast read Score. In the RoundEnded Branch TRUE path, AFTER Set Visibility(ResultsPanel,Visible), call Set Text on FinalScoreText with Format Text \"Time up! Final score: {Points}\" (Points=Score). Connect the white execution Set Visibility → Set Text. Compile.",
              "why": "The end screen should show the actual score from the single GameMode variable.",
              "check": "The result panel shows the same final Score as the live ScoreText, with readable text.",
              "helpTopics": [
                "binding",
                "branch"
              ],
              "actions": [
                "In WBP_BalloonHUD → RefreshRoundScreen event, find the Branch True path.",
                "After Set Visibility(ResultsPanel, Visible) add Set Text(Target=FinalScoreText).",
                "From the existing BP_BalloonGameMode blue cast output Get Score.",
                "Create Format Text with format Time up! Final score: {Points}. Connect Score to Points.",
                "Connect Format Text to Set Text and the WHITE Set Visibility output to Set Text WHITE input.",
                "Compile and Save."
              ]
            },
            {
              "title": "Wire the replay button",
              "where": "WBP_BalloonHUD → Designer → ReplayButton → Events → OnClicked (+).",
              "do": "Select ReplayButton in WBP_BalloonHUD Designer, go to Details → Events → OnClicked (+). Connect the new OnClicked event to Open Level (by Name). Add Get Current Level Name with Remove Prefix String checked; connect that output to Open Level.Level Name. Compile and Save. This uses the ORIGINAL \"Balloon Popper Level\" level name without having to type it.",
              "why": "Reopening the level resets the timer, total, spawner and balloon types in one action.",
              "check": "After Time Up, clicking Play Again reloads Balloon Popper Level with Score: 0, Time: 60 and five new balloons.",
              "helpTopics": [
                "widget",
                "replay"
              ],
              "actions": [
                "Open WBP_BalloonHUD → Designer and select ReplayButton.",
                "In Details → Events click + beside OnClicked.",
                "In the generated OnClicked event graph add Open Level (by Name).",
                "Add Get Current Level Name and tick Remove Prefix String.",
                "Connect Get Current Level Name output to Open Level → Level Name.",
                "Connect ReplayButton OnClicked WHITE output to Open Level WHITE input.",
                "Compile and Save."
              ]
            },
            {
              "title": "Test the end of a round",
              "where": "Balloon Popper Level → Play In Editor.",
              "do": "Temporarily set BP_BalloonGameMode.SecondsLeft default from 60 to 5 and Compile. Restart Play. Pop at least one balloon before zero; after zero confirm clicking no longer grows balloons and the results panel shows the final score. Click Play Again to verify scores and balloons reset. Finally restore the SecondsLeft default to 60, Compile and Save.",
              "why": "The end state must prevent extra points, then offer a reliable restart.",
              "check": "Time Up, frozen scoring, blocked clicks and replay all work. The last saved GameMode uses 60 seconds again, not the temporary five-second test.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open BP_BalloonGameMode → SecondsLeft Variable Default Value.",
                "Change 60 to 5, Compile and Save TEMPORARILY.",
                "Open Balloon Popper Level and Play. Pop one balloon before TIME UP.",
                "After the countdown, check that balloons no longer grow and the result shows the final score.",
                "Click Play Again. Confirm new round, Score: 0 and five balloons.",
                "Stop Play. Restore SecondsLeft Default Value to 60, Compile and Save."
              ]
            }
          ],
          "check": "At time zero the round freezes and the final score appears; Play Again starts with five targets and a clean 60-second score challenge. Confirm the ReplayButton receives clicks even though the decorative HUD lets mouse clicks pass to balloons during gameplay.",
          "fix": "Results never appear? Check RefreshRoundScreen is bound to the widget timer, RoundEnded is in the correct GameMode, and ResultsPanel was marked Is Variable. Cannot replay? Connect the current level name to Open Level.",
          "beforeStart": "Balloon Popper Level now has a 60-second GameMode countdown, a score/time HUD and clicks stop after zero. The HUD root is Not Hit-Testable (Self Only) and BP_BalloonPlayerController uses Game and UI input.",
          "commonMistake": "If the root Canvas is set to Not Hit-Testable (Self & All Children), ReplayButton will never receive clicks. Use Not Hit-Testable (Self Only) for the root and Visible for the button when the panel is shown.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "ResultsPanel",
              "kind": "Border/Vertical Box widget • Is Variable",
              "owner": "WBP_BalloonHUD",
              "at": 1
            },
            {
              "name": "FinalScoreText",
              "kind": "Text widget • Is Variable",
              "owner": "WBP_BalloonHUD",
              "at": 1
            },
            {
              "name": "ReplayButton",
              "kind": "Button widget • Is Variable",
              "owner": "WBP_BalloonHUD",
              "at": 1
            },
            {
              "name": "RefreshRoundScreen",
              "kind": "Custom Event",
              "owner": "WBP_BalloonHUD",
              "at": 2
            }
          ]
        },
        {
          "id": "risk",
          "title": "5. Mix safe and danger balloons into random spawns",
          "tier": "Creative",
          "outcome": "The spawner randomly creates safe (+1) and danger (-2) balloons, with a clear visual distinction, while keeping five visible targets.",
          "steps": [
            {
              "title": "Make a clearly different material",
              "where": "Content → Balloon Popper → find the original M_Balloon material.",
              "do": "Duplicate M_Balloon as M_DangerBalloon. The original M_Balloon is already red, so choose DARK PURPLE or ELECTRIC BLUE for danger (not another red). For accessibility, plan a warning symbol, stripes or clearly different model shape as well as colour. Save the material.",
              "why": "Players need to recognise risk at a glance.",
              "check": "The original is red; the new danger material is purple/blue and is clearly distinguishable at normal play size.",
              "helpTopics": [
                "material"
              ],
              "actions": [
                "In the Balloon Popper folder, right-click the existing M_Balloon MATERIAL → Duplicate.",
                "Name the new MATERIAL ASSET M_DangerBalloon.",
                "Open M_DangerBalloon and change the colour to dark purple or electric blue (different from normal red).",
                "Save."
              ]
            },
            {
              "title": "Duplicate the working actor",
              "where": "Content → Balloon Popper → BP_Balloon → right-click → Duplicate.",
              "do": "Name the duplicate BP_DangerBalloon. Open it, select the original BalloonModel Static Mesh component (that is its exact name from the starter) and set its material to M_DangerBalloon. Keep all original grow/pop, RoundEnded guard and RequestReplacement connections. Compile and Save; do not change BP_Balloon.",
              "why": "Duplicating a working Blueprint preserves its click and growth behaviour.",
              "check": "BP_DangerBalloon uses the new material; the original BP_Balloon still has M_Balloon. Both actors contain the original On Actor Clicked logic.",
              "helpTopics": [
                "actor",
                "component"
              ],
              "actions": [
                "In the Balloon Popper folder, right-click BP_Balloon → Duplicate.",
                "Name the new ACTOR BLUEPRINT BP_DangerBalloon. Open it.",
                "In Components select the existing BalloonModel Static Mesh.",
                "Change its Material to M_DangerBalloon.",
                "Leave all existing click/grow/pop, RoundEnded and replacement nodes as copied. Compile and Save."
              ]
            },
            {
              "title": "Change only the points awarded",
              "where": "BP_DangerBalloon → Event Graph → True pop path.",
              "do": "In BP_DangerBalloon Event Graph → PopScale Branch TRUE path, find the copied AwardPoints call. Change Points from 1 to -2, but keep all other nodes and the replacement call before Destroy Actor in the same order. Compile and Save.",
              "why": "A small change to the data creates a new gameplay decision.",
              "check": "The copied AwardPoints call uses -2 and BP_Balloon still uses +1. You will test the negative score in Play AFTER the spawner selects danger balloons.",
              "helpTopics": [
                "branch"
              ],
              "actions": [
                "Open BP_DangerBalloon → Event Graph → PopScale Branch TRUE path.",
                "Find the copied AwardPoints call.",
                "Change its Points input from 1 to -2.",
                "Keep the replacement and Destroy Actor nodes connected. Compile and Save."
              ]
            },
            {
              "title": "Make one random test for danger balloons",
              "where": "BP_BalloonSpawner → SpawnOneBalloon function, beside the existing Spawn Actor From Class.",
              "do": "Add Random Float in Range (Min=0.0, Max=1.0). Connect its Return Value to a Float <= Float node, with the other float set to 0.2. Leave the existing purple function Entry → Spawn Actor From Class white execution wire alone.",
              "why": "This comparison is true about one time in five; it picks the balloon class without branching the execution.",
              "check": "The <= node produces one red Boolean result (true=potential danger, false=normal).",
              "helpTopics": [
                "function",
                "spawn"
              ],
              "actions": [
                "Open BP_BalloonSpawner → SpawnOneBalloon FUNCTION.",
                "Add Random Float in Range. Set Min=0.0 and Max=1.0.",
                "From its Return Value add <= (Float); set the other input to 0.2.",
                "Leave the existing WHITE execution wire into Spawn Actor untouched."
              ]
            },
            {
              "title": "Choose the class with one Select node",
              "where": "BP_BalloonSpawner → SpawnOneBalloon → existing Spawn Actor From Class → Class input.",
              "do": "Drag a wire BACKWARDS from the purple Class input of the existing Spawn Actor node into empty space and search Select (the data-selection node). Connect the <= Boolean result to Select.Index. Set the False class option to BP_Balloon and the True class option to BP_DangerBalloon. If Unreal labels them Option 0 and Option 1, 0 is False/normal and 1 is True/danger. Use the Select output as Spawn Actor.Class; preserve the existing Random Point → Make Transform → Spawn Transform link. Do NOT create two Spawn Actor nodes or an extra class-selection variable.",
              "why": "Select chooses one class as data; the original single Spawn Actor execution stays valid and beginner-friendly.",
              "check": "The function still has exactly ONE Spawn Actor From Class. Its Class comes from Select(False=BP_Balloon, True=BP_DangerBalloon), and the original white function Entry drives the spawn.",
              "helpTopics": [
                "variable",
                "spawn"
              ],
              "actions": [
                "Still in BP_BalloonSpawner → SpawnOneBalloon, find Spawn Actor From Class.",
                "Drag BACKWARDS from its purple Class pin and search Select (Class).",
                "Connect the red Boolean result of the <= comparison to Select → Index.",
                "Set Select False / Option 0 to BP_Balloon.",
                "Set Select True / Option 1 to BP_DangerBalloon.",
                "Connect Select's Class output to the original Spawn Actor → Class input.",
                "Keep the existing Spawn Transform and WHITE execution wires. Compile and Save."
              ]
            },
            {
              "title": "Prove both classes can spawn, then restore 20%",
              "where": "BP_BalloonSpawner → SpawnOneBalloon → Float <= Float comparison, then Play In Editor.",
              "do": "Temporarily set the comparison threshold from 0.2 to 1.0, Compile and Play: all spawned balloons should be the purple/blue danger type. Then set it to -1.0 and restart Play: all should be normal red balloons. Finally RESTORE the threshold to 0.2, Compile and Save. Do not change the original loop or replacement event.",
              "why": "A deterministic test is quicker than waiting for luck to produce the rare class and proves each side of Select works.",
              "check": "Both forced cases produced five balloons and normal replacement behaviour; the final saved comparison is <=0.2 for a 20% danger chance.",
              "helpTopics": [
                "spawn",
                "math"
              ],
              "actions": [
                "Temporarily change the <= threshold from 0.2 to 1.0. Compile and Play.",
                "All new balloons should be purple/blue danger balloons. Stop Play.",
                "Change threshold to -1.0. Compile and Play again.",
                "All new balloons should be normal red balloons. Stop Play.",
                "Restore threshold to 0.2 for a 20% danger chance. Compile and Save."
              ]
            },
            {
              "title": "Verify the copied dangerous actor also requests a replacement",
              "where": "BP_DangerBalloon → Event Graph → True pop branch.",
              "do": "In BP_DangerBalloon → On Actor Clicked → original growth/PopScale True branch: verify the complete execution path calls AwardPoints(Points=-2), then Get Actor of Class(BP_BalloonSpawner) → Cast → RequestReplacement, then Destroy Actor(Self). The RoundEnded check before growth must also remain copied. Compile.",
              "why": "Both target types must take part in the same ongoing game loop.",
              "check": "Both balloon types award their own points, request one replacement and destroy themselves; neither can be popped after Time Up.",
              "helpTopics": [
                "cast",
                "branch"
              ],
              "actions": [
                "Open BP_DangerBalloon → Event Graph.",
                "Check the PopScale Branch TRUE path reads: AwardPoints(-2) → Cast To BP_BalloonSpawner → RequestReplacement → Destroy Actor.",
                "Check the RoundEnded Branch still prevents clicks after TIME UP.",
                "Compile and Save."
              ]
            },
            {
              "title": "Check scoring and chance over several pops",
              "where": "Balloon Popper Level → Play In Editor.",
              "do": "Play Balloon Popper Level and pop at least 20 BALLOONS, not merely click 20 times. A red normal balloon awards +1; purple/blue danger subtracts 2 but AwardPoints uses Max(0,..), so Score cannot fall below zero. The danger chance is 20% per spawn, so you may need another round to see several. Watch that five balloons remain during play and none spawn after TIME UP.",
              "why": "Random types must be balanced and never strand the player.",
              "check": "Normal and danger targets look distinct and affect one shared Score correctly. No score drops below zero and one new balloon replaces each pop until the round ends.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open Balloon Popper Level and Play.",
                "Pop at least 20 balloons (complete pops, not 20 single clicks).",
                "Normal red balloons give +1. Purple/blue danger balloons subtract 2.",
                "The score never goes below zero and one replacement appears per pop.",
                "No new balloons appear after TIME UP. Stop Play and Save."
              ]
            },
            {
              "title": "Give the game a fresh look",
              "where": "Artist/designer PC → 3ds Max, Photoshop or Substance Painter; share exports through Teams.",
              "do": "Make at least one original game asset or UI element and export FBX/PNG. On the programmer PC, import or reimport it into the BalloonPopper content folder and fit it into the level.",
              "why": "The final project should look different from the tutorial, not just have new code.",
              "check": "Both partners can point to a change they made that improves play.",
              "helpTopics": [
                "art"
              ],
              "actions": [
                "Make one ORIGINAL UI or game asset in Photoshop, 3ds Max or Substance Painter.",
                "Export PNG or FBX.",
                "On the Unreal computer import the asset into the Balloon Popper Content folder.",
                "Use it in the game and Play to check it appears. Save."
              ]
            }
          ],
          "check": "Both balloon classes spawn randomly; safe targets give +1, danger targets deduct 2 (not below zero), and either pop is replaced until the clock ends.",
          "fix": "Only normal balloons? Check Select False=BP_Balloon, True=BP_DangerBalloon and that the Float <= Float comparison feeds Select.Index. You can temporarily set threshold 1.0 to test all danger, then restore 0.2. Too many spawns? Leave only ONE Spawn Actor From Class in SpawnOneBalloon. Danger pops not replacing? Check the copied BP_DangerBalloon still calls RequestReplacement before Destroy Actor. Both types red? The original M_Balloon is red: use a distinct purple/blue danger material.",
          "beforeStart": "The original red-balloon game is fully replayable after the results upgrade. You have a working five-balloon spawn function, 60-second rounds, a final score and Play Again. Danger is optional and should use the same single spawn call.",
          "commonMistake": "Do not try to join two Branch execution paths or create a separate Spawn Actor for danger. One pure Select(Boolean Index) picks BP_Balloon versus BP_DangerBalloon and feeds the original single Spawn Actor.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "M_DangerBalloon",
              "kind": "Material asset",
              "owner": "Content/Balloon Popper",
              "at": 1
            },
            {
              "name": "BP_DangerBalloon",
              "kind": "Actor Blueprint asset (duplicate)",
              "owner": "Content/Balloon Popper",
              "at": 2
            }
          ]
        }
      ],
      "minimumStage": "results",
      "minimumOutcome": "A complete 60-second scored round with five replacement balloons, a final score and a working Play Again button."
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
          "steps": [
            {
              "title": "Give the GameMode a pin counter",
              "where": "Content Drawer → Bowling → BP_BowlingGameMode → Variables.",
              "do": "Open BowlingLevel first and count the placed BP_BowlingPin actors in World Outliner (not the imported pin mesh asset). Write down this number: it will be GoalPins. Then in BP_BowlingGameMode create PinsDown (Integer=0), Score (Integer=0), GoalPins (Integer=that actual number) and RoundFinished (Boolean=false). Compile and Save.",
              "why": "The GameMode keeps one shared score for the full set of pins.",
              "check": "GoalPins equals the number of placed BP_BowlingPin actors (e.g. six if the lane contains six), not a guessed fixed total.",
              "helpTopics": [
                "variable"
              ],
              "actions": [
                "Open BowlingLevel. In World Outliner count the placed BP_BowlingPin actors; write down the number.",
                "Open BP_BowlingGameMode. In My Blueprint → Variables click +.",
                "Name the VARIABLE PinsDown; choose Integer, Compile and set Default Value=0.",
                "Create VARIABLE Score; choose Integer, Compile and set Default Value=0.",
                "Create VARIABLE GoalPins; choose Integer, Compile and set Default Value to your pin count.",
                "Create VARIABLE RoundFinished; choose Boolean, Compile and leave its Default Value unchecked (false).",
                "Compile and Save."
              ]
            },
            {
              "title": "Create the RecordPin input",
              "where": "BP_BowlingGameMode → My Blueprint → Functions → +.",
              "do": "Create a function called RecordPin. Select the entry node and use Details → Inputs → + to add PinValue (Integer). Compile.",
              "why": "One shared function will count all pins and their different point values.",
              "check": "The RecordPin entry has PinValue as an Integer input.",
              "helpTopics": [
                "function-input",
                "variable"
              ],
              "actions": [
                "Open BP_BowlingGameMode. In My Blueprint → Functions click +.",
                "Name the FUNCTION RecordPin and open it.",
                "Click its purple Function Entry node. In Details → Inputs click +.",
                "Name this INPUT PIN PinValue and choose Integer.",
                "Compile and Save. Do not add PinValue to Variables."
              ]
            },
            {
              "title": "Only allow points while the round runs",
              "where": "BP_BowlingGameMode → RecordPin function graph.",
              "do": "Drag RoundFinished in as Get. Add NOT Boolean → Branch. Connect the entry white execution pin to the Branch white input and NOT RoundFinished to its Condition.",
              "why": "Pins that continue falling after the round ends must not change the score.",
              "check": "Only the Branch True path is available for valid knockdowns.",
              "helpTopics": [
                "branch",
                "get-set"
              ],
              "actions": [
                "Open BP_BowlingGameMode → RecordPin Function.",
                "Drag the RoundFinished VARIABLE into the graph; choose Get.",
                "Drag from its red Boolean output and search NOT Boolean.",
                "Right-click in the graph and add Branch.",
                "Connect the purple RecordPin Entry WHITE execution output to Branch WHITE input.",
                "Connect NOT Boolean's red output to Branch → Condition. Leave Branch False unconnected."
              ]
            },
            {
              "title": "Record one knockdown and its points",
              "where": "BP_BowlingGameMode → RecordPin → True output of the Branch.",
              "do": "Set PinsDown = PinsDown + 1, then Set Score = Score + PinValue using green Integer arithmetic nodes. Wire both white execution pins in order; add Print String after Set Score using a string of your updated Score.",
              "why": "Pin count measures physical pins; score measures their value.",
              "check": "RecordPin now has the full execution chain: entry → NOT RoundFinished Branch True → Set PinsDown → Set Score → Print String. You will test actual points when you connect a pin below.",
              "helpTopics": [
                "branch",
                "get-set"
              ],
              "actions": [
                "Stay in RecordPin. Drag PinsDown into the graph as Get.",
                "From Get PinsDown add Integer + Integer, with the other input set to 1.",
                "Drag PinsDown in again as Set. Connect + output to Set PinsDown's green value pin.",
                "Connect the previous Branch TRUE WHITE output to Set PinsDown WHITE input.",
                "Drag Score as Get, add Integer + Integer, and connect the purple Entry's PinValue green pin to the second + input.",
                "Drag Score as Set; connect the new + result to Set Score's green value input.",
                "Wire Set PinsDown WHITE output → Set Score WHITE input.",
                "After Set Score add Print String. Convert Get Score to String and connect it to In String.",
                "Compile and Save."
              ]
            },
            {
              "title": "Detect when all pins are down",
              "where": "At the end of RecordPin in BP_BowlingGameMode.",
              "do": "After Set Score in RecordPin (not directly from Set PinsDown), add >= (Integer) to compare Get PinsDown against GoalPins. Plug that into a Branch and wire its white execution input after Set Score. On True: Set RoundFinished = true, then Print String \"ALL PINS DOWN!\". On False: do nothing. Do not replace the earlier Branch that checks NOT RoundFinished.",
              "why": "A simple target count gives the game a clear win condition.",
              "check": "Each pin updates Score before the final-pin test. The final distinct pin sets RoundFinished=true.",
              "helpTopics": [
                "branch",
                "get-set"
              ],
              "actions": [
                "Stay in RecordPin, after Set Score and before Print String.",
                "Add a Branch. Connect Set Score's WHITE output to this Branch's WHITE input.",
                "Drag PinsDown as Get and GoalPins as Get; add Integer >= Integer with those values.",
                "Connect >= Boolean output to Branch → Condition.",
                "From Branch TRUE WHITE output add Set RoundFinished; tick the new value true.",
                "After Set RoundFinished add Print String with text ALL PINS DOWN!.",
                "Leave Branch FALSE unconnected. Keep your Score Print String on the earlier Set Score path if desired, but do not break the Branch check.",
                "Compile and Save."
              ]
            },
            {
              "title": "Protect each pin against repeat counting",
              "where": "BP_BowlingPin → Variables.",
              "do": "Create Counted (Boolean; default false). Compile. Add Event Tick → Branch with NOT Counted as Condition. Only continue from True.",
              "why": "A toppled physical pin might remain fallen across hundreds of frames.",
              "check": "The event does nothing once Counted becomes true.",
              "helpTopics": [
                "variable",
                "custom-event"
              ],
              "actions": [
                "Open BP_BowlingPin → Event Graph.",
                "In My Blueprint → Variables click + and name the VARIABLE Counted.",
                "Set type Boolean. Compile; leave Default Value false.",
                "Right-click in the Event Graph → Event Tick (reuse the existing one if present).",
                "Drag Counted in as Get; add NOT Boolean.",
                "Add Branch, connect Event Tick WHITE execution to Branch WHITE input and NOT Counted to Condition.",
                "Continue from Branch TRUE only. Compile and Save."
              ]
            },
            {
              "title": "Check which way an upright pin points",
              "where": "BP_BowlingPin → Event Graph → the True output of your NOT Counted Branch.",
              "do": "Drag the existing Model (Static Mesh) component into the graph as Get. From it add Get Up Vector, then Dot Product (Vector). Set the second Vector to X=0, Y=0, Z=1. Temporarily convert the Dot Product float to String and Print String from the NOT Counted True execution path; Compile and Play.",
              "why": "A pin that starts upright should report a value near +1. If it starts near 0 or -1, its mesh or component orientation needs checking before using this test.",
              "check": "Without touching the pins, the printed dot value is close to 1. Stop Play and remove the temporary Print String before the next step.",
              "helpTopics": [
                "branch",
                "get-set"
              ],
              "actions": [
                "Stay in BP_BowlingPin → Event Graph, after the NOT Counted Branch.",
                "In Components find the existing Static Mesh component Model. Drag it into the graph as Get; do not create another mesh.",
                "Drag from Model's blue pin → Get Up Vector.",
                "From Get Up Vector add Dot Product (Vector).",
                "Set the other Dot Product Vector to X=0, Y=0, Z=1.",
                "Temporarily add Print String after the Branch TRUE WHITE output; convert Dot Product float to String and connect to In String.",
                "Compile and press Play. A standing pin should print a value close to 1.",
                "Stop Play and remove only the temporary Print String."
              ]
            },
            {
              "title": "Compare the tip angle to the threshold",
              "where": "BP_BowlingPin → Event Graph, where Get Up Vector feeds Dot Product.",
              "do": "Add Float < Float, wire the Dot Product output into A and set B=0.65. Add a second Branch: connect the earlier NOT Counted True white execution output into this Branch and connect the Float comparison into Condition. Compile.",
              "why": "A tilted pin has a lower up-vector dot product than an upright pin.",
              "check": "The second Branch is only True for sufficiently tipped pins; it does not count a pin just standing still.",
              "helpTopics": [
                "branch",
                "get-set"
              ],
              "actions": [
                "In BP_BowlingPin → Event Graph keep Get Up Vector → Dot Product.",
                "From Dot Product's green output create < (Float).",
                "Set the second < input to 0.65.",
                "Add a second Branch. Connect NOT Counted Branch TRUE WHITE output to this Branch WHITE input.",
                "Connect < output (red Boolean) to the second Branch Condition.",
                "Compile and Save. An upright pin must not reach the second Branch TRUE output."
              ]
            },
            {
              "title": "Award points only on the first fall",
              "where": "BP_BowlingPin → True path of the lean Branch.",
              "do": "Set Counted = true, then Get Game Mode → Cast To BP_BowlingGameMode → RecordPin with PinValue = 1. Ensure the white wires follow that order. Compile.",
              "why": "Set the flag before notifying GameMode so rapid events cannot count twice.",
              "check": "A single fallen pin adds exactly one to both PinsDown and Score.",
              "helpTopics": [
                "cast",
                "branch"
              ],
              "actions": [
                "In BP_BowlingPin, from the lean-check Branch TRUE WHITE output, add Set Counted(true).",
                "After Set Counted add Cast To BP_BowlingGameMode.",
                "Add Get Game Mode and connect its blue Return Value to Cast Object.",
                "Connect Set Counted WHITE output to Cast WHITE execution input.",
                "From As BP_BowlingGameMode (blue output) call RecordPin.",
                "Connect Cast Success WHITE output to RecordPin WHITE input. Set PinValue=1.",
                "Compile and Save. Do not create RecordPin inside BP_BowlingPin."
              ]
            },
            {
              "title": "Confirm pin counting before making a bonus target",
              "where": "BowlingLevel → Play In Editor, after saving both GameMode and BP_BowlingPin.",
              "do": "Press Space once. Keep the Output Log or temporary RecordPin Print String visible. Knock over one pin and check PinsDown increases to 1, Score to 1. Watch the fallen pin for a few more seconds; the numbers should NOT increase again. Repeat with another pin.",
              "why": "Event Tick runs many times each second, so Counted must prevent repeated scores.",
              "check": "One fallen pin awards one point only once, even as it rolls on the floor.",
              "helpTopics": [
                "debug"
              ],
              "actions": [
                "Compile and Save BP_BowlingGameMode and BP_BowlingPin.",
                "Open BowlingLevel and press Play.",
                "Press Space to bowl; watch one pin fall.",
                "Watch the Score Print String: that pin should increase Score once, then stop counting while rolling.",
                "Try to knock a different pin down and confirm it adds one more.",
                "Stop Play. If the score races upwards, check Counted is set true BEFORE calling RecordPin."
              ]
            },
            {
              "title": "Test one pin at a time",
              "where": "Open the Bowling level → Play.",
              "do": "Play the BowlingLevel. If you cannot aim at different pins, press R only after the next upgrade is built; for this first scoring test use Stop then Play again. Knock down at least one pin and confirm each Score increment is one. For an all-pins-down test, you may temporarily place just TWO BP_BowlingPin actors in a test copy of the level and set GoalPins=2; when both tip, RoundFinished should turn true. Restore the normal lane and GoalPins afterwards.",
              "why": "Physics bugs are easier to diagnose before adding time pressure.",
              "check": "One tilted pin counts once; the game ends when the actual GoalPins number has tipped. Restore any temporary two-pin test layout before continuing.",
              "helpTopics": [
                "get-set"
              ],
              "actions": [
                "Open BowlingLevel and press Play.",
                "Knock down a pin and check Score rises exactly once.",
                "To test finishing with just two pins, first SAVE A COPY of BowlingLevel.",
                "In that test copy leave two BP_BowlingPin actors, remove other pins and set BP_BowlingGameMode GoalPins Default Value=2.",
                "Play the test map and knock down both pins. Look for ALL PINS DOWN!.",
                "Restore the original level and GoalPins value to match its actual number of pins. Compile and Save."
              ]
            }
          ],
          "check": "Six placed pins with GoalPins=6 can earn six points, and the round finishes when all six are knocked down.",
          "fix": "If no score appears, confirm pins are BP_BowlingPin actors, the pin mesh simulates physics, and the mesh up-axis is Z when upright. Adjust the 0.65 threshold only after watching the dot-product value while testing. If the first pin instantly counts before being hit, inspect Model rotation and the upright Dot Product; it should be close to +1. If the test uses two pins, reset GoalPins to the restored lane count afterwards.",
          "beforeStart": "You finished the five-stage original Bowling tutorial. In BowlingLevel, one BP_BowlingBall responds to IA_Bowl (Space) and IA_Move (arrows), and all placed BP_BowlingPin actors simulate physics. BP_BowlingGameMode is active in World Settings.",
          "commonMistake": "Do not use the imported Static Mesh on its own in the lane; place BP_BowlingPin Blueprints, or their Event Tick scoring cannot run. GoalPins must equal the actual placed Blueprint pin count.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "intro": "Count each pin one time. Test the up-vector first, then connect the scoring function and verify the last pin finishes the game.",
          "names": [
            {
              "name": "PinsDown",
              "kind": "Variable",
              "owner": "BP_BowlingGameMode",
              "at": 1,
              "type": "Integer • default 0"
            },
            {
              "name": "Score",
              "kind": "Variable",
              "owner": "BP_BowlingGameMode",
              "at": 1,
              "type": "Integer • default 0"
            },
            {
              "name": "GoalPins",
              "kind": "Variable",
              "owner": "BP_BowlingGameMode",
              "at": 1,
              "type": "Integer • number of pins in level"
            },
            {
              "name": "RoundFinished",
              "kind": "Variable",
              "owner": "BP_BowlingGameMode",
              "at": 1,
              "type": "Boolean • default false"
            },
            {
              "name": "RecordPin",
              "kind": "Function",
              "owner": "BP_BowlingGameMode",
              "at": 2
            },
            {
              "name": "PinValue",
              "kind": "Function input",
              "owner": "RecordPin Function",
              "at": 2,
              "type": "Integer"
            },
            {
              "name": "Counted",
              "kind": "Variable",
              "owner": "BP_BowlingPin",
              "at": 6,
              "type": "Boolean • default false"
            },
            {
              "name": "Model",
              "kind": "Existing Static Mesh component",
              "owner": "BP_BowlingPin",
              "at": 0
            }
          ]
        },
        {
          "id": "throws",
          "title": "2. Reset the ball and allow three throws",
          "tier": "Essential",
          "outcome": "The player has up to three throws. The ball resets between them, fallen pins and score remain, and the round finishes after the final throw settles.",
          "steps": [
            {
              "title": "Keep the physics mesh and aiming in the same place",
              "where": "BP_BowlingBall → Viewport → Components hierarchy.",
              "do": "Open BP_BowlingBall → Viewport. Select the original Model sphere mesh. If it is below DefaultSceneRoot, drag Model onto the root so Model becomes the Actor root (do not add another mesh). Compile and save. In BowlingLevel reselect the placed BP_BowlingBall and confirm it still sits at the lane starting position. Test Play: Left/Right still move the ball and Space still bowls before continuing.",
              "why": "In UE5.8 a simulated single-body mesh detaches from a parent; making the ball mesh the root keeps its position and the Actor transform together.",
              "check": "Model is the root in Components; the original Move and Bowl events work after this change.",
              "helpTopics": [
                "physics"
              ],
              "actions": [
                "Open BP_BowlingBall → Viewport and select its existing Model sphere in Components.",
                "If Model sits below DefaultSceneRoot, drag Model onto the root so Model becomes the Actor root; don't add another mesh.",
                "Click Compile and Save.",
                "Open BowlingLevel. Select the placed ball in World Outliner and confirm it sits at the start of the lane.",
                "Press Play and check Left/Right still aim and Space still bowls before continuing."
              ]
            },
            {
              "title": "Save the Actor starting transform",
              "where": "BP_BowlingBall → Event Graph → Event BeginPlay.",
              "do": "In BP_BowlingBall → Event Graph, make a new variable StartingBallTransform of type Transform. From Event BeginPlay call Get Actor Transform (Self) and then Set StartingBallTransform. Compile. This happens before the player moves the ball. Keep all other Event BeginPlay nodes if present.",
              "why": "With Model as the root, the Actor transform is the launch position and matches the mesh used for aiming.",
              "check": "StartingBallTransform stores the ball’s launch position when Play begins.",
              "helpTopics": [
                "variable",
                "exec"
              ],
              "actions": [
                "Open BP_BowlingBall → My Blueprint → Variables → +.",
                "Name the VARIABLE StartingBallTransform and choose Transform as its type.",
                "Click Compile.",
                "Open its Event Graph and find Event BeginPlay.",
                "Add Get Actor Transform, Target=Self.",
                "Drag StartingBallTransform into the graph as Set. Connect Get Actor Transform to Set's Transform value pin.",
                "Connect BeginPlay WHITE output to Set StartingBallTransform WHITE input, keeping any original BeginPlay work connected afterwards.",
                "Compile and Save."
              ]
            },
            {
              "title": "Switch off physics and restore the start position",
              "where": "BP_BowlingBall → Event Graph → Add Custom Event ResetBall.",
              "do": "Drag the Model (root Static Mesh) component onto the graph. Wire ResetBall → Set Simulate Physics (Model, false) → Set Actor Transform (New Transform=StartingBallTransform; Sweep=false; Teleport=true). Compile.",
              "why": "Moving the ball with physics disabled avoids the simulation fighting the new transform.",
              "check": "ResetBall contains its first chain: ResetBall → Set Simulate Physics(false) → Set Actor Transform(StartingBallTransform). It will not run in Play until you call it from the Player Controller later.",
              "helpTopics": [
                "custom-event"
              ],
              "actions": [
                "Open BP_BowlingBall → Event Graph.",
                "Right-click empty space → Add Custom Event. Name it ResetBall.",
                "Drag the existing Model component from Components into the graph as Get.",
                "From the red ResetBall event WHITE pin add Set Simulate Physics, Target=Model, Simulate=false.",
                "From its WHITE output add Set Actor Transform, Target=Self.",
                "Drag StartingBallTransform into the graph as Get and connect to New Transform.",
                "Set Sweep=false and Teleport=true. Compile and Save."
              ]
            },
            {
              "title": "Turn physics on and clear movement",
              "where": "BP_BowlingBall → immediately after Set Actor Transform in ResetBall.",
              "do": "Wire Set Simulate Physics (Model, true) → Set Physics Linear Velocity (0,0,0) → Set Physics Angular Velocity in Degrees (0,0,0), all targeting Model. Compile and save.",
              "why": "Zeroing both velocity types makes sure the ball remains ready for the next shot.",
              "check": "The full ResetBall chain compiles. It is not yet callable through the player controls; you will run the first real reset after connecting FinishThrow.",
              "helpTopics": [
                "physics"
              ],
              "actions": [
                "Open BP_BowlingBall → Event Graph and find ResetBall's Set Actor Transform node.",
                "From its WHITE output add Set Simulate Physics(Target=Model, Simulate=true).",
                "From that WHITE output add Set Physics Linear Velocity(Target=Model); set X=0,Y=0,Z=0.",
                "From that WHITE output add Set Physics Angular Velocity in Degrees(Target=Model); set X=0,Y=0,Z=0.",
                "Compile and Save. ResetBall is a Custom Event; it is not a Function."
              ]
            },
            {
              "title": "Check the original BowlingBall reference is valid",
              "where": "BP_BowlingPlayerController → Event Graph → Event BeginPlay.",
              "do": "In BP_BowlingPlayerController → Event Graph find the original BeginPlay path: Add Mapping Context(BowlingInputs) → Get Actor of Class(BP_BowlingBall) → Set BowlingBall. Select the existing Get Actor of Class node: its Return Value must connect to Set BowlingBall. Place exactly one BP_BowlingBall in BowlingLevel. Compile and Play once; confirm the original arrow keys still move it and Space still bowls. Do NOT add a second ball variable or duplicate this lookup.",
              "why": "ResetBall will use the SAME saved ball object already used by the Bowl and Move input actions.",
              "check": "The original input actions operate the one BP_BowlingBall found at BeginPlay, so ResetBall will target the same actor.",
              "helpTopics": [
                "variable",
                "input"
              ],
              "actions": [
                "Open BP_BowlingPlayerController → Event Graph → existing Event BeginPlay.",
                "Find the original Add Mapping Context(BowlingInputs) → Get Actor of Class(BP_BowlingBall) → Set BowlingBall chain.",
                "Check Get Actor of Class Return Value goes into Set BowlingBall. Keep this existing BowlingBall reference.",
                "Open BowlingLevel and confirm only ONE BP_BowlingBall actor is placed.",
                "Compile, Play, test Left/Right and Space, then Stop. Do not create a new BowlingBall variable."
              ]
            },
            {
              "title": "Count throws in the Player Controller",
              "where": "BP_BowlingPlayerController → Variables.",
              "do": "Create ThrowsUsed (Integer; default 0), MaxThrows (Integer; default 3) and IsBallInMotion (Boolean; default false). Compile. Keep the existing BP_BowlingBall reference from the original IA_Bowl/IA_Move tutorial; do not add a new ball reference.",
              "why": "The controller owns the player input and knows when another throw is allowed.",
              "check": "ThrowsUsed=0, MaxThrows=3 and IsBallInMotion=false. The original BowlingBall reference is still in the controller.",
              "helpTopics": [
                "variable",
                "input"
              ],
              "actions": [
                "Open BP_BowlingPlayerController → My Blueprint → Variables → +.",
                "Name VARIABLE ThrowsUsed, choose Integer, Compile, set Default Value=0.",
                "Create VARIABLE MaxThrows, choose Integer, Compile, set Default Value=3.",
                "Create VARIABLE IsBallInMotion, choose Boolean, Compile, set Default Value=false.",
                "Compile and Save; keep the existing BowlingBall reference."
              ]
            },
            {
              "title": "Disable sideways aiming while the ball is rolling",
              "where": "BP_BowlingPlayerController → existing IA_Move input event, before calling BP_BowlingBall.Move.",
              "do": "Get IsBallInMotion and RoundFinished (via BP_BowlingGameMode). Add a Branch using (NOT IsBallInMotion) AND (NOT RoundFinished). Only True calls the existing Move custom event. Leave the original MoveSpeed and Delta Time mapping from the tutorial unchanged.",
              "why": "The original Move event should only aim before a shot, not drag the physics ball sideways while it rolls.",
              "check": "During a thrown ball’s four-second settling interval, arrow keys no longer change the ball’s direction; after reset they work again.",
              "helpTopics": [
                "custom-event",
                "input"
              ],
              "actions": [
                "Open BP_BowlingPlayerController → Event Graph and find the existing IA_Move input event.",
                "Locate the WHITE execution wire feeding the existing Move call; disconnect just that wire.",
                "Add Get IsBallInMotion → NOT Boolean.",
                "Add Get Game Mode → Cast To BP_BowlingGameMode, and drag from its blue output → Get RoundFinished → NOT Boolean.",
                "Combine those two red Boolean results with AND Boolean → Branch Condition.",
                "Connect IA_Move's original WHITE execution to Cast WHITE input, Cast Success → Branch WHITE input, Branch TRUE → existing Move WHITE input.",
                "Keep the original MoveSpeed, Delta Time and direction pins connected. Compile and Save."
              ]
            },
            {
              "title": "Check the round is still active",
              "where": "BP_BowlingPlayerController → existing IA_Bowl input (Started pin; use your original tutorial name).",
              "do": "In BP_BowlingPlayerController, locate the existing IA_Bowl Input Action Event. Use ONLY its Started execution pin, as taught in the original tutorial. Add Get Game Mode → Cast To BP_BowlingGameMode and read RoundFinished. Add NOT Boolean for RoundFinished and another NOT for IsBallInMotion. Keep the original Bowl call but disconnect its old white execution input until the next step.",
              "why": "The controller must avoid another throw during a roll or after the game ends.",
              "check": "You have two Boolean values, each true when another throw is allowed.",
              "helpTopics": [
                "input",
                "cast"
              ],
              "actions": [
                "Open BP_BowlingPlayerController → Event Graph and find the existing IA_Bowl Input Action event.",
                "Use its Started WHITE output (not Triggered).",
                "Add Get Game Mode and Cast To BP_BowlingGameMode; connect Get Game Mode blue result to Cast Object.",
                "From As BP_BowlingGameMode read RoundFinished and add NOT Boolean.",
                "Drag IsBallInMotion as Get and add NOT Boolean.",
                "Temporarily disconnect the WHITE wire leading directly to Bowl. Keep the existing Bowl node and its blue BowlingBall Target."
              ]
            },
            {
              "title": "Check there is at least one throw left",
              "where": "Same Player Controller → throw input.",
              "do": "Compare ThrowsUsed < MaxThrows. Use AND(Boolean) to combine NOT RoundFinished, NOT IsBallInMotion and the throws comparison (add an input pin to AND if needed). Add a Branch: wire Cast To BP_BowlingGameMode Success white execution into the Branch input and AND to Condition. Wire ONLY Branch True towards your existing Bowl call. False does nothing.",
              "why": "Every valid Space press must use one remaining throw, not start several balls at once.",
              "check": "Only the first input while idle reaches the old Bowl event.",
              "helpTopics": [
                "cast",
                "branch"
              ],
              "actions": [
                "Stay in BP_BowlingPlayerController → IA_Bowl Started chain.",
                "Drag ThrowsUsed and MaxThrows as Get; create Integer < Integer, connecting ThrowsUsed and MaxThrows.",
                "Add AND Boolean and combine NOT RoundFinished, NOT IsBallInMotion and the < result (add a pin to AND if needed).",
                "Add Branch. Connect Cast Success WHITE execution to Branch WHITE input.",
                "Connect the AND red Boolean result to Branch Condition.",
                "Only Branch TRUE will allow a throw; leave Branch FALSE unconnected. Compile."
              ]
            },
            {
              "title": "Track a successful throw",
              "where": "BP_BowlingPlayerController → True branch of the new throw gate.",
              "do": "Move the original Bowl call AFTER Set ThrowsUsed=ThrowsUsed+1 and Set IsBallInMotion=true, chaining the white execution pins in that order from Branch True. Keep Bowl Target connected to the saved BowlingBall object reference. Compile. Press Space once: one throw is used. Press Space repeatedly during the roll: no extra throw is counted.",
              "why": "Each valid throw consumes one attempt, regardless of whether it hits any pins.",
              "check": "After the first Space press, ThrowsUsed is 1 and IsBallInMotion is true.",
              "helpTopics": [
                "branch",
                "get-set"
              ],
              "actions": [
                "From the IA_Bowl gate Branch TRUE add Set ThrowsUsed.",
                "For its value use Get ThrowsUsed → Integer + Integer, second input 1.",
                "From Set ThrowsUsed WHITE output add Set IsBallInMotion, value true.",
                "Connect Set IsBallInMotion WHITE output to the EXISTING Bowl call.",
                "Keep Bowl's Target blue pin wired to Get BowlingBall.",
                "Compile and Play. Press Space once; repeated Space presses during the roll must not add another throw."
              ]
            },
            {
              "title": "Allow time for physics to settle",
              "where": "BP_BowlingPlayerController → after the successful Bowl event.",
              "do": "From the white execution output of the original Bowl call, add Delay(Duration=4.0). Add a Custom Event in BP_BowlingPlayerController called FinishThrow, and connect the Delay Completed white execution to a CALL of FinishThrow (not to the red event definition node). Inside the FinishThrow event, add Set IsBallInMotion=false. This is in the Event Graph: do not create a Blueprint Function containing Delay.",
              "why": "Pin collisions should be allowed to settle before the ball is reset or the round is scored.",
              "check": "Exactly four seconds after a valid Bowl call, FinishThrow runs once and sets IsBallInMotion=false. Repeated presses while rolling never start a second Delay.",
              "helpTopics": [
                "custom-event",
                "get-set"
              ],
              "actions": [
                "Open BP_BowlingPlayerController → Event Graph, after the existing Bowl call.",
                "From Bowl's WHITE output add Delay, Duration=4.0 seconds.",
                "In blank Event Graph space right-click → Add Custom Event, name the event FinishThrow.",
                "From FinishThrow's red event WHITE output add Set IsBallInMotion(false).",
                "After Delay's Completed WHITE output, add a CALL to FinishThrow (search Call FinishThrow; do not connect to its RED definition).",
                "Compile and Save. Use an Event Graph for Delay, never a Function."
              ]
            },
            {
              "title": "Reset for another shot when available",
              "where": "BP_BowlingPlayerController → FinishThrow, after IsBallInMotion=false.",
              "do": "In BP_BowlingPlayerController → FinishThrow, AFTER Set IsBallInMotion=false, use Get Game Mode → Cast To BP_BowlingGameMode. From Cast Success white execution go to Branch (NOT RoundFinished AND ThrowsUsed<MaxThrows). On True, drag BowlingBall variable as Get and call ResetBall on it. False does nothing. Do not call Open Level here, and do not reset BP_BowlingPin actors.",
              "why": "You keep the first throw’s successful knockdowns and try to finish the remaining pins.",
              "check": "On shot 1 and shot 2, the ball returns to its original launch mark after four seconds; the pin positions and Score remain unchanged.",
              "helpTopics": [
                "cast",
                "replay"
              ],
              "actions": [
                "In BP_BowlingPlayerController → FinishThrow event, find Set IsBallInMotion=false.",
                "From it add Cast To BP_BowlingGameMode; connect Get Game Mode to Cast Object.",
                "From Cast blue output Get RoundFinished → NOT Boolean.",
                "Drag ThrowsUsed and MaxThrows as Get → Integer < Integer.",
                "Combine NOT RoundFinished and ThrowsUsed < MaxThrows with AND Boolean.",
                "After Cast Success add Branch; connect AND to Condition.",
                "On Branch TRUE drag existing BowlingBall variable into the graph as Get and call ResetBall on it.",
                "Leave FALSE for the next task. Compile and Save."
              ]
            },
            {
              "title": "Play-test the first two throws before building the last-shot result",
              "where": "BowlingLevel → Play In Editor.",
              "do": "Press Space once, aiming to knock over only some pins (not all). Wait four seconds: the ball should reset and arrow keys should aim again. Press Space a second time, again leaving at least one pin standing. The ball resets a second time. Confirm the first throw’s fallen pins stay down and Score remains. If every pin falls early, RoundFinished correctly ends the game; restart Play to test the two-reset case.",
              "why": "This catches a bad physics reset before you spend time building UI or final scoring.",
              "check": "On a round with pins still standing, ball resets after throw 1 and throw 2, and previous pin score is preserved. A complete strike ends the round early instead.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open BowlingLevel and press Play.",
                "Aim away from some pins and press Space once.",
                "After four seconds the ball should return to its starting point; Left/Right aiming should work again.",
                "Press Space a second time, leaving at least one pin standing; wait four seconds for the second reset.",
                "Previously fallen pins and their Score should remain unchanged.",
                "Stop Play. If all pins fall early, restart and aim elsewhere to test the reset."
              ]
            },
            {
              "title": "End the round after the last shot",
              "where": "BP_BowlingGameMode → Functions → add FinishRound.",
              "do": "First open BP_BowlingGameMode → Functions and create FinishRound. Branch on NOT RoundFinished; only True sets RoundFinished=true then prints the final Score and PinsDown. Compile GameMode. Next open BP_BowlingPlayerController → FinishThrow: after the existing Branch that checks NOT RoundFinished AND ThrowsUsed<MaxThrows, use its False path to check (ThrowsUsed>=MaxThrows) AND (NOT RoundFinished). On True get the cast BP_BowlingGameMode reference and call FinishRound. Do this after the four-second Delay, not on the third Space press.",
              "why": "A final score should be reported after physics settles; finishing early is also possible if all pins are down.",
              "check": "After the third throw settles, the final score prints and RoundFinished becomes true. If all pins were already down, do not call FinishRound again.",
              "helpTopics": [
                "function",
                "branch"
              ],
              "actions": [
                "Open BP_BowlingGameMode → My Blueprint → Functions → +.",
                "Name the FUNCTION FinishRound and open its graph.",
                "From purple Entry WHITE output add Branch with Get RoundFinished → NOT Boolean as Condition.",
                "From TRUE Set RoundFinished=true → Print String with final Score and PinsDown.",
                "Compile and Save BP_BowlingGameMode.",
                "Open BP_BowlingPlayerController → FinishThrow and find the Branch from the previous task.",
                "From its FALSE output add another Branch; Condition=(ThrowsUsed >= MaxThrows) AND (NOT RoundFinished).",
                "On TRUE, from your existing Cast To BP_BowlingGameMode blue result call FinishRound.",
                "Compile and Save. This happens after Delay, not immediately on the third Space press."
              ]
            },
            {
              "title": "Add R to replay the whole round",
              "where": "Bowling Input Mapping Context and BP_BowlingPlayerController.",
              "do": "Inside the existing Content/Bowling/Inputs folder, create an Input Action named IA_Restart (Value Type=Digital Boolean). Open the already active BowlingInputs Mapping Context and add a mapping for IA_Restart with Keyboard R. In BP_BowlingPlayerController Event Graph, add IA_Restart action event and use its Started pin → Get Current Level Name (Remove Prefix String checked) → Open Level (by Name), passing the level name output into Level Name. Save BowlingInputs and Compile the controller.",
              "why": "Restarting the level resets the pins, ball, throw counter and score together.",
              "check": "After a finished round, R reloads BowlingLevel with the ball at its start, standing pins, Score=0 and ThrowsUsed=0.",
              "helpTopics": [
                "variable",
                "custom-event"
              ],
              "actions": [
                "Open Content Drawer → Content/Bowling/Inputs.",
                "Right-click → Input → Input Action. Name the ASSET IA_Restart and set Value Type=Digital (Boolean).",
                "Open the existing Input Mapping Context BowlingInputs. Add mapping IA_Restart → Keyboard R. Save.",
                "Open BP_BowlingPlayerController → Event Graph.",
                "Add the IA_Restart Input Action event, Started WHITE output → Open Level (by Name).",
                "Add Get Current Level Name, tick Remove Prefix String and connect its output to Open Level's Level Name pin.",
                "Compile and Save. Test R after the round: all pins, throws and Score should reset."
              ]
            }
          ],
          "check": "Make three throws without restarting: the ball comes back for shots two and three, fallen pins remain fallen, final score appears, and the fourth Space press does nothing.",
          "fix": "Ball fails to reset? Confirm Model is the Actor root and you stored StartingBallTransform from Get Actor Transform before physics moved it, and ResetBall uses the same mesh component. One press spends multiple throws? Check IA_Bowl uses Started, not Triggered. Score missing after last shot? Ensure FinishRound is called after Delay 4 seconds. If arrows stop moving the ball after reset, check Model is the root mesh and the Move event still offsets Model. Do not add another physics mesh or reset a child component independently. If pressing Space a second time does nothing, inspect IsBallInMotion after Delay, the RoundFinished flag, and whether the pin count reached GoalPins. If pins reset as well as the ball, the controller is reloading the level instead of calling ResetBall. In Unreal 5.8 enabling simulated physics detaches a child mesh; keeping Model as root avoids that specific parent-transform problem.",
          "beforeStart": "Stage 1 pin scoring works. From the original tutorial, BP_BowlingPlayerController stores one BP_BowlingBall Object Reference named BowlingBall. It runs IA_Bowl Started → Bowl and IA_Move Triggered → Move. BP_BowlingGameMode is active.",
          "commonMistake": "The four-second Delay must be in the Player Controller Event Graph after the original Bowl call, and should CALL FinishThrow when Completed. Do not wire Delay directly into a Custom Event definition or put it inside a Blueprint Function.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "intro": "First verify your ball and existing BowlingBall reference; then build ResetBall, use the original IA_Bowl once per throw and test all three turns without resetting the fallen pins.",
          "names": [
            {
              "name": "Model",
              "kind": "Existing Static Mesh component (ball root)",
              "owner": "BP_BowlingBall",
              "at": 0
            },
            {
              "name": "StartingBallTransform",
              "kind": "Variable",
              "owner": "BP_BowlingBall",
              "at": 2,
              "type": "Transform"
            },
            {
              "name": "ResetBall",
              "kind": "Custom Event",
              "owner": "BP_BowlingBall",
              "at": 3
            },
            {
              "name": "BowlingBall",
              "kind": "Variable",
              "owner": "BP_BowlingPlayerController",
              "at": 0,
              "type": "BP_BowlingBall Object Reference",
              "note": "Existing reference from original tutorial: reuse it, do not create again."
            },
            {
              "name": "ThrowsUsed",
              "kind": "Variable",
              "owner": "BP_BowlingPlayerController",
              "at": 6,
              "type": "Integer • default 0"
            },
            {
              "name": "MaxThrows",
              "kind": "Variable",
              "owner": "BP_BowlingPlayerController",
              "at": 6,
              "type": "Integer • default 3"
            },
            {
              "name": "IsBallInMotion",
              "kind": "Variable",
              "owner": "BP_BowlingPlayerController",
              "at": 6,
              "type": "Boolean • default false"
            },
            {
              "name": "FinishThrow",
              "kind": "Custom Event",
              "owner": "BP_BowlingPlayerController",
              "at": 11
            },
            {
              "name": "FinishRound",
              "kind": "Function",
              "owner": "BP_BowlingGameMode",
              "at": 14
            },
            {
              "name": "IA_Restart",
              "kind": "Input Action asset",
              "owner": "Content/Bowling/Inputs",
              "at": 15
            }
          ]
        },
        {
          "id": "polish",
          "title": "3. Add a throw counter, scoreboard and bonus pin",
          "tier": "Essential",
          "outcome": "A live HUD shows Score, Pins Down and Throws Left. A visibly different bonus pin is worth three points rather than one.",
          "steps": [
            {
              "title": "Make the HUD widget",
              "where": "Content Drawer → Bowling → User Interface → Widget Blueprint → User Widget.",
              "do": "Create WBP_BowlingHUD (User Widget). In Designer add ScoreText, PinsText and ThrowsText as Text widgets (tick Is Variable), with placeholder labels \"Score: 0\", \"Pins down: 0\" and \"Throws left: 3\". Keep the HUD compact in a corner so the lane is visible. No buttons are needed because the player restarts with R.",
              "why": "The player needs to see progress without watching Print String debug output.",
              "check": "All labels fit the game viewport without covering the lane.",
              "helpTopics": [
                "variable",
                "widget"
              ],
              "actions": [
                "Open Content Drawer → Bowling folder.",
                "Right-click → User Interface → Widget Blueprint → User Widget.",
                "Name the WIDGET ASSET WBP_BowlingHUD and open Designer.",
                "Add Text widget ScoreText, set text Score: 0 and tick Is Variable.",
                "Add Text widget PinsText, set text Pins down: 0 and tick Is Variable.",
                "Add Text widget ThrowsText, set text Throws left: 3 and tick Is Variable.",
                "Place these labels in a corner away from the lane. Compile and Save."
              ]
            },
            {
              "title": "Bind ScoreText to the live GameMode score",
              "where": "WBP_BowlingHUD → Designer → ScoreText → Details → Content → Text → Bind → Create Binding.",
              "do": "In WBP_BowlingHUD → Designer, select ScoreText → Details → Content → Text → Bind → Create Binding. In the generated binding Function, wire the purple Entry execution to Cast To BP_BowlingGameMode, with Get Game Mode → Cast Object. Wire Cast Success execution to Return Node execution. From the cast result Get Score, use Format Text \"Score: {Value}\" with Score connected to Value, then connect the text output to Return Value. Compile.",
              "why": "The scoreboard needs a label AND the live number; a bare integer would replace the text \"Score:\".",
              "check": "When one normal pin falls, the HUD binding returns \"Score: 1\".",
              "helpTopics": [
                "function-output",
                "binding"
              ],
              "actions": [
                "Open WBP_BowlingHUD → Designer. Select ScoreText.",
                "In Details → Content → Text click Bind → Create Binding.",
                "Inside the new binding Function add Get Game Mode and Cast To BP_BowlingGameMode.",
                "Connect Get Game Mode blue Return Value to Cast Object.",
                "Connect Function Entry WHITE → Cast WHITE → Return Node WHITE.",
                "Drag from As BP_BowlingGameMode blue pin and choose Get Score.",
                "Add Format Text with Score: {Value}; connect Score to Value and Format Text output to Return Node's Text pin.",
                "Compile and Save."
              ]
            },
            {
              "title": "Bind PinsText to the number knocked down",
              "where": "WBP_BowlingHUD → Designer → PinsText → Details → Content → Text → Bind → Create Binding.",
              "do": "WBP_BowlingHUD → Designer → PinsText → Text → Bind → Create Binding. In the generated Function, connect Entry white execution → Cast To BP_BowlingGameMode (Object=Get Game Mode) → Return Node white execution. From the cast result Get PinsDown → Format Text \"Pins down: {Value}\" → Return Value. Compile. Do not drag the pin Actor counter into this widget; both values belong to the GameMode.",
              "why": "The GameMode keeps pins already knocked down across multiple throws.",
              "check": "After two different pins fall, this binding shows \"Pins down: 2\".",
              "helpTopics": [
                "function-output",
                "binding"
              ],
              "actions": [
                "Open WBP_BowlingHUD → Designer. Select PinsText.",
                "Details → Content → Text → Bind → Create Binding.",
                "In this new binding Function, add Get Game Mode → Cast To BP_BowlingGameMode.",
                "Connect Get Game Mode blue result to Cast Object; wire Entry WHITE → Cast Success → Return Node.",
                "From As BP_BowlingGameMode read PinsDown.",
                "Add Format Text with Pins down: {Value}, connect PinsDown to Value and Text output to Return Node's Text pin.",
                "Compile and Save."
              ]
            },
            {
              "title": "Read shots remaining",
              "where": "WBP_BowlingHUD → ThrowsText → Text → Bind → Create Binding.",
              "do": "WBP_BowlingHUD → Designer → ThrowsText → Text → Bind → Create Binding. In the generated Function, connect Entry white execution → Cast To BP_BowlingPlayerController (Object=Get Owning Player) → Return Node white execution. From cast result Get ThrowsUsed and MaxThrows, compute Max(0,MaxThrows-ThrowsUsed) with Integer math. Use Format Text \"Throws left: {Value}\" and connect its output to the Return Node Text value.",
              "why": "The HUD reads the same counter that gates the throw input.",
              "check": "With a successful Owning Player cast, ThrowsText returns \"Throws left: 3\" at start and \"Throws left: 2\" after pressing Space once; the integer is not displayed without its label.",
              "helpTopics": [
                "function-output",
                "binding"
              ],
              "actions": [
                "Open WBP_BowlingHUD → Designer. Select ThrowsText.",
                "Details → Content → Text → Bind → Create Binding.",
                "In this binding Function use Get Owning Player → Cast To BP_BowlingPlayerController.",
                "Connect blue player reference to Cast Object and WHITE Entry → Cast Success → Return Node.",
                "From As BP_BowlingPlayerController read MaxThrows and ThrowsUsed.",
                "Compute MaxThrows - ThrowsUsed using Integer - Integer, then Max(Integer) with other input 0.",
                "Use Format Text Throws left: {Value}; connect result to Return Node Text pin.",
                "Compile and Save."
              ]
            },
            {
              "title": "Show the widget",
              "where": "BP_BowlingPlayerController → Event BeginPlay.",
              "do": "BP_BowlingPlayerController → Event BeginPlay: keep the original chain Add Mapping Context(BowlingInputs) → Get Actor of Class(BP_BowlingBall) → Set BowlingBall. AFTER Set BowlingBall, create WBP_BowlingHUD using Create Widget (Owning Player=Self) and then Add to Viewport (connect Create Widget Return Value to the Add to Viewport Target). Compile. Avoid disconnecting the old input mapping or ball reference.",
              "why": "Each level start shows the HUD automatically.",
              "check": "The scoreboard is present as soon as Play starts.",
              "helpTopics": [
                "input",
                "widget"
              ],
              "actions": [
                "Open BP_BowlingPlayerController → Event Graph → Event BeginPlay.",
                "Find the EXISTING mapping context and Set BowlingBall chain; do not disconnect it.",
                "After Set BowlingBall WHITE output add Create Widget, choose WBP_BowlingHUD and Owning Player=Self.",
                "Connect Create Widget Return Value to Add to Viewport Target.",
                "Connect Create Widget WHITE output → Add to Viewport WHITE input.",
                "Compile, Save and Play. All three labels should appear; the original controls must still work."
              ]
            },
            {
              "title": "Make pin points editable",
              "where": "BP_BowlingPin → Variables.",
              "do": "Open BP_BowlingPin → Variables → + and create PinValue (Integer, default=1). Tick Instance Editable (eye icon) in Details, then Compile. Find the old BP_BowlingPin Event Graph where Cast To BP_BowlingGameMode → RecordPin currently has fixed PinValue=1. Replace that fixed pin with Get PinValue from this BP_BowlingPin instance. Compile. Do NOT change GoalPins or Counted.",
              "why": "Each pin can have a different value without duplicating the whole physics system.",
              "check": "Each placed BP_BowlingPin has a PinValue field in Details. Normal pins still award 1 and Counted still prevents repeats.",
              "helpTopics": [
                "variable",
                "custom-event"
              ],
              "actions": [
                "Open BP_BowlingPin → My Blueprint → Variables → +.",
                "Name the VARIABLE PinValue, choose Integer, Compile, set Default Value=1.",
                "Tick Instance Editable (the eye icon). Compile again.",
                "In BP_BowlingPin Event Graph find the existing RecordPin call.",
                "Drag PinValue as Get and connect its green output to RecordPin → PinValue, replacing fixed 1.",
                "Compile and Save."
              ]
            },
            {
              "title": "Place one bonus pin",
              "where": "Bowling level → select one BP_BowlingPin actor.",
              "do": "Set PinValue = 3 on that instance and give its Static Mesh component a visibly distinct material. Leave other pins set to 1.",
              "why": "Players can decide where to aim for the best score.",
              "check": "Knocking over the special pin adds 3 to Score but just 1 to PinsDown.",
              "helpTopics": [
                "get-set"
              ],
              "actions": [
                "Open BowlingLevel. In World Outliner select ONE placed BP_BowlingPin.",
                "In Details find its new PinValue field and enter 3.",
                "Select its existing Model mesh and choose a clearly different Material.",
                "Leave other placed pins with PinValue=1.",
                "Save Level and Play: special pin counts as one pin but awards three Score points."
              ]
            },
            {
              "title": "Create a hidden end-of-round message",
              "where": "WBP_BowlingHUD → Designer.",
              "do": "Add a Text widget named ResultText, tick Is Variable, set initial text to \"ROUND OVER\" and set Visibility=Collapsed. Make sure it is readable but does not hide the main Score, Pins or Throws display. Compile.",
              "why": "The final result stays hidden until RoundFinished becomes true.",
              "check": "On a new round, the HUD appears without ResultText.",
              "helpTopics": [
                "variable",
                "widget"
              ],
              "actions": [
                "Open WBP_BowlingHUD → Designer.",
                "Add one Text widget and rename it ResultText.",
                "Tick Is Variable and set its text to ROUND OVER.",
                "In Details → Behavior set Visibility=Collapsed.",
                "Place it where it does not obscure the counters. Compile and Save."
              ]
            },
            {
              "title": "Create the result-refresh event",
              "where": "WBP_BowlingHUD → Graph → Event Graph.",
              "do": "In WBP_BowlingHUD → Event Graph, add Custom Event RefreshBowlingResult. From its white output connect Get Game Mode → Cast To BP_BowlingGameMode → Branch (Condition=Get RoundFinished). On True, use Get Score → Format Text \"ROUND OVER – SCORE: {Value}\" → Set Text(ResultText) → Set Visibility(ResultText,Visible), wiring white execution Set Text → Set Visibility. On False Set Visibility(ResultText,Collapsed). Compile.",
              "why": "A separate event updates the final panel without changing the normal live score bindings.",
              "check": "Both the True and False Branch paths have visible execution wires into the correct ResultText widget; the result will be refreshed by the timer added next.",
              "helpTopics": [
                "custom-event",
                "binding"
              ],
              "actions": [
                "Open WBP_BowlingHUD → Event Graph.",
                "Right-click → Add Custom Event. Name it RefreshBowlingResult.",
                "From its WHITE output add Cast To BP_BowlingGameMode; Get Game Mode blue Return Value → Cast Object.",
                "From Cast Success WHITE output add Branch; Get RoundFinished (from the blue cast output) → Branch Condition.",
                "Branch TRUE: Get Score → Format Text ROUND OVER – SCORE: {Value} → Set Text(Target=ResultText).",
                "From Set Text WHITE output add Set Visibility(Target=ResultText, Visible).",
                "Branch FALSE: Set Visibility(Target=ResultText, Collapsed).",
                "Compile and Save."
              ]
            },
            {
              "title": "Refresh that result without using Event Tick",
              "where": "WBP_BowlingHUD → Graph → Event Construct.",
              "do": "From Event Construct call Set Timer by Event, Time=0.25, Looping=true. Drag from the red Event delegate pin and select Create Event; bind it to RefreshBowlingResult. Only add ONE timer to this HUD instance. Compile.",
              "why": "This checks the end condition four times a second while keeping the result visible.",
              "check": "When the last shot ends or all pins fall, the ResultText appears and stays visible. On R restart, it is hidden again.",
              "helpTopics": [
                "custom-event",
                "timer"
              ],
              "actions": [
                "In WBP_BowlingHUD → Event Graph find Event Construct.",
                "From Construct WHITE output add Set Timer by Event.",
                "Set Time=0.25, Looping=true.",
                "From the red Timer Event pin drag → Create Event → choose RefreshBowlingResult.",
                "Compile and Save. Do not add a second timer or Widget instance."
              ]
            },
            {
              "title": "Test two very different rounds",
              "where": "Play the level twice.",
              "do": "Play two full test rounds. First, deliberately miss at least one shot and verify Score, Pins down and Throws left are visible while the ball resets twice. After the third shot, wait four seconds and check ROUND OVER displays the final Score. Press R. In the second round, knock over the coloured bonus pin: Score increases by 3 but Pins down by only 1. Test R again.",
              "why": "The complete loop matters more than a single successful throw.",
              "check": "The second round starts with three throws and no leftover score.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open BowlingLevel and Play.",
                "Throw deliberately away from some pins and check Throws left decreases correctly; the ball resets twice.",
                "After third shot, allow four seconds; ROUND OVER should appear with final Score.",
                "Press R to restart. In the next round knock over the special-colour pin.",
                "Confirm the special pin awards three Score but increments PinsDown by one.",
                "Press R again to confirm a clean new round."
              ]
            }
          ],
          "check": "Score, Pins Down and Throws Left update correctly; the special pin awards 3 points; a final result appears; R resets the full round.",
          "fix": "Scores differ? Ensure each pin has Counted true after first fall and passes PinValue into RecordPin. Result never shows? RefreshResult must run on a repeating timer and read RoundFinished from the assigned GameMode. If a Text binding only shows a number without the word Score/Pins/Throws, use Format Text instead of returning the bare integer. If controls stop working after the HUD is added, restore the original Player Controller BeginPlay chain that assigns BowlingInputs and BowlingBall.",
          "beforeStart": "The original camera view is already working. Stage 2 now allows three shots, resets the ball after each of the first two, keeps fallen pins down, and uses keyboard R to restart the level. Do not create a second BowlingBall Actor.",
          "commonMistake": "If the score is correct in the GameMode but the HUD is blank, check the active Player Controller and GameMode classes.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "WBP_BowlingHUD",
              "kind": "Widget Blueprint asset",
              "owner": "Content/Bowling",
              "at": 1
            },
            {
              "name": "ScoreText",
              "kind": "Text widget • Is Variable",
              "owner": "WBP_BowlingHUD",
              "at": 1
            },
            {
              "name": "PinsText",
              "kind": "Text widget • Is Variable",
              "owner": "WBP_BowlingHUD",
              "at": 1
            },
            {
              "name": "ThrowsText",
              "kind": "Text widget • Is Variable",
              "owner": "WBP_BowlingHUD",
              "at": 1
            },
            {
              "name": "PinValue",
              "kind": "Variable",
              "owner": "BP_BowlingPin",
              "at": 6,
              "type": "Integer • default 1 • Instance Editable"
            },
            {
              "name": "ResultText",
              "kind": "Text widget • Is Variable",
              "owner": "WBP_BowlingHUD",
              "at": 8
            },
            {
              "name": "RefreshBowlingResult",
              "kind": "Custom Event",
              "owner": "WBP_BowlingHUD",
              "at": 9
            }
          ]
        },
        {
          "id": "power",
          "title": "4. Optional: give players a choice of shot power",
          "tier": "Creative",
          "outcome": "Q and E decrease/increase shot strength without changing the sideways aiming controls; the HUD can show the selected power.",
          "steps": [
            {
              "title": "Make the working throw strength configurable",
              "where": "BP_BowlingBall → Event Graph → original Bowl Custom Event from Mini-Project Stage 4.",
              "do": "Select the red Bowl Custom Event and add a Float input named Strength (default 200000) in Details → Inputs. Find the original Add Force node targeting Model, originally Force X=200000, Y=0, Z=0 with Accel Change enabled. Replace its fixed Force vector with Make Vector: X=Strength, Y=0, Z=0. Keep Accel Change ticked. Compile.",
              "why": "The original source tutorial uses Add Force with a Vector, not a separate impulse-magnitude input. Strength changes only the forward X force.",
              "check": "The original Bowl event now passes Strength into Make Vector.X and Add Force; Accel Change is still enabled. The next step sets the existing caller to 200000 so the ball moves.",
              "helpTopics": [
                "event-input",
                "custom-event"
              ],
              "actions": [
                "Open BP_BowlingBall → Event Graph and select the existing RED Bowl Custom Event.",
                "In Details → Inputs click +, name the EVENT INPUT Strength and set type Float.",
                "Set its default to 200000, then Compile; do NOT add a Blueprint Variable called Strength.",
                "Find the EXISTING Add Force node targeting Model. Keep Accel Change checked.",
                "Add Make Vector: X=Strength from the red event's green input pin, Y=0, Z=0.",
                "Connect Make Vector output to Add Force → Force input, replacing the previous fixed vector.",
                "Compile and Save."
              ]
            },
            {
              "title": "Keep the original bowl working while you build the controls",
              "where": "BP_BowlingPlayerController → Event Graph → original IA_Bowl Started → Bowl call.",
              "do": "The Bowl call now has a new Strength input pin. Set its pin default to 200000 (the original tutorial value) for now, then Compile and Play once. Do not leave the new Strength input at 0. You will replace this fixed value with the adjustable one later.",
              "why": "If the new Float input is left at zero, the ball appears broken until you finish the rest of the optional upgrade.",
              "check": "Space still launches the ball before adding Q/E. If the Force input receives zero, go back and set the Bowl call Strength pin to 200000.",
              "helpTopics": [
                "input"
              ],
              "actions": [
                "Open BP_BowlingPlayerController → existing IA_Bowl Started chain.",
                "Find the EXISTING Bowl call on the blue BowlingBall reference.",
                "After compiling BP_BowlingBall, the Bowl call has a new Strength pin.",
                "Set that pin's default to 200000, not 0.",
                "Compile, Save and Play. Space must still launch the ball before adding new controls."
              ]
            },
            {
              "title": "Store the player’s chosen power",
              "where": "BP_BowlingPlayerController → Variables.",
              "do": "In BP_BowlingPlayerController create BaseThrowPower (Float; default 200000) and PowerMultiplier (Float; default 1.0). Use the original known-working X force (200000) as the starting value. Compile.",
              "why": "A multiplier means this guide works with whichever base impulse fits your bowling ball’s mass.",
              "check": "Both values are visible in the controller details.",
              "helpTopics": [
                "variable"
              ],
              "actions": [
                "Open BP_BowlingPlayerController → My Blueprint → Variables → +.",
                "Create VARIABLE BaseThrowPower; choose Float, Compile, set Default Value=200000.",
                "Create VARIABLE PowerMultiplier; choose Float, Compile, set Default Value=1.0.",
                "Compile and Save."
              ]
            },
            {
              "title": "Add Q and E input actions",
              "where": "Content Drawer → Bowling → Input folder.",
              "do": "In Content/Bowling/Inputs, create IA_PowerDown and IA_PowerUp as Input Action assets with Value Type=Digital (Boolean). Open BowlingInputs (the original Input Mapping Context already active in the controller) and add mappings IA_PowerDown=Q and IA_PowerUp=E. Save. Do not create a new Mapping Context.",
              "why": "Separate one-shot key events are easier to debug than an unconfigured input axis.",
              "check": "The mapping context lists Q and E next to the new actions.",
              "helpTopics": [
                "variable",
                "input"
              ],
              "actions": [
                "Open Content Drawer → Content/Bowling/Inputs.",
                "Create an Input Action asset IA_PowerDown, Value Type=Digital(Boolean).",
                "Create another Input Action asset IA_PowerUp, Value Type=Digital(Boolean).",
                "Open the EXISTING BowlingInputs Input Mapping Context (do not make another).",
                "Add mapping IA_PowerDown to Keyboard Q and IA_PowerUp to Keyboard E.",
                "Save all Input assets."
              ]
            },
            {
              "title": "Change power in safe increments",
              "where": "BP_BowlingPlayerController → Event Graph.",
              "do": "From IA_PowerDown Started, Set PowerMultiplier = Clamp (Float)(PowerMultiplier-0.25, 0.5, 2.0). From IA_PowerUp Started, Set PowerMultiplier = Clamp (Float)(PowerMultiplier+0.25, 0.5, 2.0). Print PowerMultiplier for testing.",
              "why": "Players get useful choices without extreme impulses breaking the lane.",
              "check": "Q and E move the value in 0.25 steps between 0.5 and 2.0.",
              "helpTopics": [
                "input",
                "get-set"
              ],
              "actions": [
                "Open BP_BowlingPlayerController → Event Graph.",
                "Add IA_PowerDown Input Action event. From its Started WHITE output add Set PowerMultiplier.",
                "For its value connect Get PowerMultiplier → Float - Float, other input 0.25 → Clamp Float(Min=0.5,Max=2.0).",
                "Add IA_PowerUp Input Action event. Started WHITE → another Set PowerMultiplier.",
                "For its value use Get PowerMultiplier → Float + Float, other input 0.25 → Clamp Float(Min=0.5,Max=2.0).",
                "After each Set add Print String showing PowerMultiplier so you can test Q and E.",
                "Compile, Save and Play. Q decreases and E increases; values must stay 0.5–2.0."
              ]
            },
            {
              "title": "Pass the chosen strength into Bowl",
              "where": "BP_BowlingPlayerController → existing gated IA_Bowl chain from Upgrade 2.",
              "do": "BP_BowlingPlayerController → existing IA_Bowl Started chain → original Bowl call. Keep the three-throw gate and counters. Multiply BaseThrowPower × PowerMultiplier (Float × Float) and connect that value to the SAME existing Bowl call Strength pin, replacing the temporary 200000 constant. Compile. Do not add another Bowl call or Add Force node.",
              "why": "The power setting must use the same limited-throws counter.",
              "check": "Low power and high power produce visibly different travel distances.",
              "helpTopics": [
                "input",
                "math"
              ],
              "actions": [
                "Open BP_BowlingPlayerController → Event Graph → existing IA_Bowl Started gate.",
                "Keep the original three-throw and IsBallInMotion checks and the SAME existing Bowl call.",
                "Drag BaseThrowPower as Get and PowerMultiplier as Get.",
                "From BaseThrowPower create Float × Float and plug PowerMultiplier into its other input.",
                "Connect multiply output to the existing Bowl call Strength input, replacing temporary 200000.",
                "Compile and Save. Do not add a second Bowl or Add Force node."
              ]
            },
            {
              "title": "Test three useful strengths",
              "where": "Play In Editor.",
              "do": "Try PowerMultiplier 0.5, 1.0 and 2.0. Reset with R each time. Tune BaseThrowPower if the ball never reaches pins or always passes through them. Save the working settings.",
              "why": "Tuning is a design decision, not just a functioning input.",
              "check": "A peer can deliberately choose a soft or powerful shot.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open BowlingLevel and press Play.",
                "Press Q/E until PowerMultiplier=0.5, press Space and observe distance.",
                "Press R, set multiplier=1.0, bowl and compare.",
                "Press R, set multiplier=2.0, bowl and compare.",
                "If all three feel identical, check the Bowl Strength pin receives BaseThrowPower × PowerMultiplier.",
                "Save working settings; reset multiplier's default to 1.0."
              ]
            }
          ],
          "check": "At least three power settings produce distinguishable throws while throw limits, score and restarts still work.",
          "fix": "No power difference? Check Bowl.Strength feeds Make Vector.X, which connects to Add Force → Force, and Accel Change remains checked. Make sure IA_Bowl still calls Bowl exactly once. If the ball stops moving immediately after introducing Strength, check that the existing Bowl call sends 200000, not zero. If Q/E do nothing, check the two actions are mapped inside the existing BowlingInputs and the Started pins are connected.",
          "beforeStart": "The original IA_Bowl triggers the Bowl custom event and Add Force on the Model mesh, using X=200000 with Accel Change enabled. Your three-throw system and R restart work.",
          "commonMistake": "Do not replace the original Add Force node with Add Impulse. Leave Accel Change enabled; only replace its X force value with the new Strength input.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "Strength",
              "kind": "Custom Event input",
              "owner": "Bowl Custom Event in BP_BowlingBall",
              "at": 1,
              "type": "Float • default 200000"
            },
            {
              "name": "BaseThrowPower",
              "kind": "Variable",
              "owner": "BP_BowlingPlayerController",
              "at": 3,
              "type": "Float • default 200000"
            },
            {
              "name": "PowerMultiplier",
              "kind": "Variable",
              "owner": "BP_BowlingPlayerController",
              "at": 3,
              "type": "Float • default 1.0"
            },
            {
              "name": "IA_PowerDown",
              "kind": "Input Action asset",
              "owner": "Content/Bowling/Inputs",
              "at": 4
            },
            {
              "name": "IA_PowerUp",
              "kind": "Input Action asset",
              "owner": "Content/Bowling/Inputs",
              "at": 4
            }
          ]
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
          "steps": [
            {
              "title": "Add two shop variables",
              "where": "Open the Clicker project → BP_ClickerGameMode Blueprint → Variables.",
              "do": "Create ClickPower (Integer; default 1) and UpgradeCost (Integer; default 10). Keep the existing Score variable from the tutorial. Compile.",
              "why": "The existing Score remains the only balance; upgrades alter how quickly it grows.",
              "check": "The GameMode now contains Score, ClickPower and UpgradeCost.",
              "helpTopics": [
                "variable",
                "debug"
              ],
              "actions": [
                "Open BP_ClickerGameMode → My Blueprint → Variables.",
                "Keep the existing Score variable from the starter. Do not create another Score.",
                "Click + Variable. Name it ClickPower, choose Integer, Compile and set Default Value to 1.",
                "Click + Variable again. Name it UpgradeCost, choose Integer, Compile and set Default Value to 10.",
                "Compile and Save BP_ClickerGameMode."
              ]
            },
            {
              "title": "Create AddClick in the existing GameMode",
              "where": "Open your original BP_ClickerGameMode → Functions → +.",
              "do": "Name the function AddClick. Drag Score as Get and ClickPower as Get, add them with Integer + Integer, and set Score to the result. Connect the AddClick function entry white execution to Set Score. Compile.",
              "why": "We are changing one existing score, not creating a second one.",
              "check": "AddClick compiles. Its entry connects to Set Score, which uses Score + ClickPower; the next step will connect the real main button.",
              "helpTopics": [
                "function",
                "get-set"
              ],
              "actions": [
                "Open BP_ClickerGameMode → My Blueprint → Functions → +.",
                "Name the FUNCTION AddClick and open it.",
                "Drag Score into its graph as Get.",
                "Drag ClickPower into its graph as Get.",
                "From Get Score's green pin add Integer + Integer. Connect ClickPower to the other input.",
                "Drag Score into the graph as Set and connect the + result to the green value pin.",
                "Connect Function Entry WHITE output to Set Score WHITE input.",
                "Compile and Save."
              ]
            },
            {
              "title": "Find the original click handler in GameMode",
              "where": "BP_ClickerGameMode → Event Graph → the button event wired from Assign On Clicked.",
              "do": "Locate the original chain: BeginPlay creates ClickerGameUI, stores ClickerUI, then Assign On Clicked binds the main ClickerButton. Follow its red delegate to the separate event that currently adds 1 to Score and calls ClickerUI → SetScoreText. Keep that binding. Do NOT create another OnClicked event for the main button in the widget.",
              "why": "The original tutorial handles its main button click inside GameMode, not inside the widget.",
              "check": "One original assigned click event exists in BP_ClickerGameMode and still responds to the big button.",
              "helpTopics": [
                "custom-event"
              ],
              "actions": [
                "Open BP_ClickerGameMode → Event Graph.",
                "Find the EXISTING chain: BeginPlay → Create Widget(ClickerGameUI) → Set ClickerUI → Assign On Clicked.",
                "Follow Assign On Clicked to the bound Event which currently adds 1 to Score.",
                "Locate the existing ClickerUI → SetScoreText call after the increase.",
                "Do not add another OnClicked event to the main ClickerButton."
              ]
            },
            {
              "title": "Use AddClick without counting twice",
              "where": "BP_ClickerGameMode → Event Graph → existing assigned ClickerButton event.",
              "do": "Disconnect or delete only the original Set Score = Score + 1 calculation. From the SAME click event, call your new AddClick function once. After it, keep the existing Get ClickerUI → SetScoreText call and connect the updated Score integer to its Score input. Compile.",
              "why": "Replacing the original increment avoids awarding both the old +1 and the new ClickPower value.",
              "check": "From a fresh run, 3 clicks show Score 1, 2, 3. The original ClickerButton still works.",
              "helpTopics": [
                "get-set",
                "math"
              ],
              "actions": [
                "Stay in BP_ClickerGameMode → Event Graph at the existing bound click event.",
                "Disconnect only its old Set Score=Score+1 calculation, not the event itself.",
                "From the event WHITE output call your new AddClick FUNCTION once.",
                "After AddClick call the existing Get ClickerUI → SetScoreText.",
                "Connect Get Score to SetScoreText's Score input.",
                "Wire WHITE execution Event → AddClick → SetScoreText.",
                "Compile and Save. Play: three clicks should give Score 1, 2, 3."
              ]
            },
            {
              "title": "Create a BuyUpgrade function",
              "where": "BP_ClickerGameMode → Functions → + → name it BuyUpgrade.",
              "do": "Add Branch with condition Score >= UpgradeCost. From True set Score = Score - UpgradeCost, then ClickPower = ClickPower + 1, then UpgradeCost = UpgradeCost * 2. Connect the white execution wire through all three Set nodes in that order. False does nothing.",
              "why": "Buying requires enough points and raises the price for the next upgrade.",
              "check": "BuyUpgrade compiles, with Score >= UpgradeCost checked BEFORE the three Set nodes. You will test an actual purchase after connecting the new button.",
              "helpTopics": [
                "function",
                "branch"
              ],
              "actions": [
                "Open BP_ClickerGameMode → My Blueprint → Functions → +.",
                "Name the FUNCTION BuyUpgrade and open it.",
                "Add Branch and wire Function Entry WHITE output to Branch WHITE input.",
                "Drag Score and UpgradeCost as Get; compare with Integer >= Integer.",
                "Connect the >= result to Branch Condition.",
                "Branch TRUE → Set Score, with value Get Score - Get UpgradeCost.",
                "From Set Score WHITE output → Set ClickPower, value Get ClickPower + 1.",
                "From Set ClickPower WHITE output → Set UpgradeCost, value Get UpgradeCost × 2.",
                "Leave Branch FALSE unconnected. Compile and Save."
              ]
            },
            {
              "title": "Create a shop button",
              "where": "Clicker Widget → Designer.",
              "do": "Add a second Button called BuyUpgradeButton, with a child Text widget reading \"Buy Upgrade\". Position it clear of the main click button. Compile.",
              "why": "Players need a visible action to spend their score.",
              "check": "Two different buttons are visible and clickable.",
              "helpTopics": [
                "widget"
              ],
              "actions": [
                "Open ClickerGameUI → Designer.",
                "Add a NEW Button beside the original ClickerButton.",
                "Rename the new Button BuyUpgradeButton. Keep the original ClickerButton.",
                "Add a child Text widget inside BuyUpgradeButton and set it to Buy Upgrade.",
                "Select BuyUpgradeButton and tick Is Variable.",
                "Compile and Save."
              ]
            },
            {
              "title": "Connect the purchase button",
              "where": "ClickerGameUI Widget → Designer → BuyUpgradeButton → Events → OnClicked (+).",
              "do": "In ClickerGameUI, select the NEW BuyUpgradeButton and click + for OnClicked. Connect that event to Get Game Mode → Cast To BP_ClickerGameMode → BuyUpgrade. After BuyUpgrade, use the same cast result to Get Score and call SetScoreText on Self (your current widget) with that number. Keep the ORIGINAL ClickerButton assigned in BP_ClickerGameMode; do not add another OnClicked for it. Compile.",
              "why": "The purchase remains in GameMode, not as separate widget-only money.",
              "check": "You can click the original main button and buy an upgrade with the new button. Immediately after buying, ScoreText displays the reduced balance.",
              "helpTopics": [
                "cast",
                "get-set"
              ],
              "actions": [
                "Open ClickerGameUI → Designer and select BuyUpgradeButton.",
                "In Details → Events click + beside OnClicked.",
                "From the new OnClicked WHITE output add Cast To BP_ClickerGameMode.",
                "Add Get Game Mode and connect its blue Return Value to Cast Object.",
                "From Cast Success WHITE output call BuyUpgrade on the blue GameMode reference.",
                "After BuyUpgrade call SetScoreText on Self, the existing Widget.",
                "Read Score from that same GameMode reference and connect to SetScoreText → Score.",
                "Compile and Save. Do not create an OnClicked event on the original ClickerButton."
              ]
            },
            {
              "title": "Test the insufficient-funds case",
              "where": "Play the Clicker level.",
              "do": "Play the level and confirm a fresh game starts with 0 points. Buy Upgrade must do nothing with insufficient funds. Click the main button 10 times, then buy once: Score returns to 0, ClickPower becomes 2, and UpgradeCost becomes 20. Click the main button once more: Score becomes 2. Restart Play for a clean test.",
              "why": "A shop needs to reject purchases a player cannot afford.",
              "check": "The game never produces negative points by buying.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open the Clicker level and press Play.",
                "Without earning anything, click Buy Upgrade. Score should remain 0.",
                "Click the original big button TEN times. Score should reach 10.",
                "Click Buy Upgrade once: Score becomes 0, ClickPower=2 and UpgradeCost=20.",
                "Click the big button once: Score should become 2.",
                "Stop Play. If one click adds twice, check for an unwanted second ClickerButton OnClicked."
              ]
            }
          ],
          "check": "The original main button earns +1 initially. After buying the 10-point upgrade, each main click earns 2. The shop purchase immediately updates the visible balance.",
          "fix": "If the original click stops working, check the existing Assign On Clicked binding in BP_ClickerGameMode. If score doubles, delete the old Set Score +1 chain; it must call AddClick once. If the shop purchase succeeds but ScoreText does not update, call SetScoreText on the widget after BuyUpgrade. A brand-new shop button cannot be tested before you have wired BuyUpgradeButton.OnClicked; build the function and button first.",
          "beforeStart": "The original ClickerGameUI widget is shown by BP_ClickerGameMode. Its original ClickerButton is connected using Assign On Clicked in the GameMode, and the widget custom event SetScoreText displays Score.",
          "commonMistake": "The original main-button OnClicked event is inside BP_ClickerGameMode, not inside ClickerGameUI. Do not add a second click handler in the widget.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "Score",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 0,
              "type": "Integer",
              "note": "Existing from original tutorial; do not create a second Score."
            },
            {
              "name": "ClickPower",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Integer • default 1"
            },
            {
              "name": "UpgradeCost",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Integer • default 10"
            },
            {
              "name": "AddClick",
              "kind": "Function",
              "owner": "BP_ClickerGameMode",
              "at": 2
            },
            {
              "name": "BuyUpgrade",
              "kind": "Function",
              "owner": "BP_ClickerGameMode",
              "at": 5
            },
            {
              "name": "BuyUpgradeButton",
              "kind": "Button widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 6
            },
            {
              "name": "ClickerUI",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 0,
              "type": "ClickerGameUI Object Reference",
              "note": "Saved widget reference from original tutorial; reuse it."
            }
          ]
        },
        {
          "id": "display",
          "title": "2. Show your shop balance and costs",
          "tier": "Essential",
          "outcome": "The interface shows live score, points per click and next upgrade cost.",
          "steps": [
            {
              "title": "Make three named labels",
              "where": "Clicker Widget → Designer.",
              "do": "In your original ClickerGameUI Widget Designer, KEEP the original ScoreText. Do not add a second one. Add PowerText and CostText as new Text widgets and tick Is Variable on all three. Set placeholder values \"Points: 0\", \"Per click: 1\", \"Next upgrade: 10\". Leave ClickerButton and BuyUpgradeButton unchanged.",
              "why": "Players should know whether buying an upgrade is worth it.",
              "check": "You still have exactly one ScoreText widget, plus new PowerText and CostText labels.",
              "helpTopics": [
                "variable",
                "widget"
              ],
              "actions": [
                "Open ClickerGameUI → Designer.",
                "Keep the ORIGINAL ScoreText widget; do not add a second one.",
                "Add Text widget PowerText and set placeholder Per click: 1.",
                "Add Text widget CostText and set placeholder Next upgrade: 10.",
                "Tick Is Variable on ScoreText, PowerText and CostText.",
                "Keep both existing Buttons. Compile and Save."
              ]
            },
            {
              "title": "Make one RefreshShop function",
              "where": "ClickerGameUI Widget → Graph → My Blueprint → Functions → +.",
              "do": "Create a function named RefreshShop. Add Get Game Mode, connect its Return Value to Cast To BP_ClickerGameMode, then connect the purple function Entry white execution pin to the Cast. Compile the widget.",
              "why": "This one function can update the whole shop whenever the numbers change.",
              "check": "RefreshShop has its entry connected to a successful BP_ClickerGameMode cast.",
              "helpTopics": [
                "function",
                "cast"
              ],
              "actions": [
                "Open ClickerGameUI → Graph → My Blueprint → Functions → +.",
                "Name the FUNCTION RefreshShop and open it.",
                "From its purple Entry WHITE output add Cast To BP_ClickerGameMode.",
                "Add Get Game Mode and connect its blue Return Value to Cast Object.",
                "Connect Entry WHITE to Cast WHITE input. Compile."
              ]
            },
            {
              "title": "Update the existing ScoreText properly",
              "where": "ClickerGameUI → RefreshShop function, after the successful cast.",
              "do": "Get Score from the BP_ClickerGameMode cast result. Add Format Text, set Format to \"Points: {Number}\", and connect Score to the Number pin (allow integer-to-text conversion). Drag the ORIGINAL ScoreText widget into the graph as Get; from it add Set Text (Text). Connect Format Text to In Text and the Cast success white execution output to Set Text.",
              "why": "Reusing ScoreText avoids making another score display; Format Text keeps the Points label.",
              "check": "RefreshShop compiles. The first Set Text targets the original ScoreText and uses the current GameMode Score.",
              "helpTopics": [
                "binding",
                "widget"
              ],
              "actions": [
                "In ClickerGameUI → RefreshShop, drag from the blue As BP_ClickerGameMode output and Get Score.",
                "Add Format Text with format Points: {Number}. Connect Score to Number.",
                "Drag ScoreText into graph as Get. From it add Set Text (Text).",
                "Connect the Format Text output to Set Text → In Text.",
                "Connect Cast Success WHITE output to Set Text WHITE input. Compile."
              ]
            },
            {
              "title": "Display click power and the next price",
              "where": "ClickerGameUI → RefreshShop, after ScoreText Set Text.",
              "do": "Add a Format Text for PowerText with \"Per click: {Number}\" from Get ClickPower, and another for CostText with \"Next upgrade: {Number}\" from Get UpgradeCost. Call Set Text on each respective widget. Chain the white execution wire ScoreText Set Text → PowerText Set Text → CostText Set Text. Compile.",
              "why": "The three values always represent the same GameMode state, rather than separate widget variables.",
              "check": "With no upgrades, RefreshShop shows Points: 0, Per click: 1 and Next upgrade: 10 when it is called.",
              "helpTopics": [
                "binding",
                "get-set"
              ],
              "actions": [
                "Stay in ClickerGameUI → RefreshShop after ScoreText Set Text.",
                "From the same GameMode cast reference, Get ClickPower; use Format Text: Per click: {Number}.",
                "Drag PowerText into graph as Get → Set Text. Connect the formatted Text.",
                "From the GameMode cast, Get UpgradeCost; use Format Text: Next upgrade: {Number}.",
                "Drag CostText in as Get → Set Text. Connect formatted Text.",
                "Wire WHITE execution ScoreText Set Text → PowerText Set Text → CostText Set Text.",
                "Compile and Save."
              ]
            },
            {
              "title": "Refresh after clicking",
              "where": "BP_ClickerGameMode → Event Graph → original event from Assign On Clicked for ClickerButton.",
              "do": "Keep the existing event → AddClick function. Find the old call Get ClickerUI → SetScoreText(Score) that you kept in Upgrade 1. Replace that call with Get ClickerUI → RefreshShop. Compile the widget first so BP_ClickerGameMode can find RefreshShop. Do NOT add OnClicked to ClickerButton in the widget.",
              "why": "GameMode still owns the original click event; the widget only refreshes its visible numbers.",
              "check": "One main-button click runs AddClick exactly once and RefreshShop updates Score, ClickPower and UpgradeCost.",
              "helpTopics": [
                "refresh"
              ],
              "actions": [
                "Compile ClickerGameUI first so the GameMode knows RefreshShop exists.",
                "Open BP_ClickerGameMode → Event Graph → the existing bound main ClickerButton event.",
                "Keep the original event → AddClick intact.",
                "Disconnect only the old ClickerUI → SetScoreText call.",
                "Drag the existing ClickerUI Widget reference as Get, then call RefreshShop on it.",
                "Connect AddClick WHITE output → RefreshShop WHITE input.",
                "Compile and Save. The main button should still count exactly once."
              ]
            },
            {
              "title": "Refresh after shopping",
              "where": "Clicker Widget → BuyUpgradeButton OnClicked event.",
              "do": "Inside the existing BuyUpgradeButton OnClicked event in ClickerGameUI, after BuyUpgrade replace the older call to SetScoreText with RefreshShop (on Self). RefreshShop must run whether the purchase is accepted or rejected. Compile.",
              "why": "A rejected purchase should leave clear, unchanged costs on screen.",
              "check": "After a successful purchase, Per click and Next upgrade change immediately.",
              "helpTopics": [
                "refresh"
              ],
              "actions": [
                "Open ClickerGameUI → Event Graph → BuyUpgradeButton OnClicked.",
                "Keep Get Game Mode → Cast To BP_ClickerGameMode → BuyUpgrade.",
                "Disconnect the old Self.SetScoreText call.",
                "From BuyUpgrade WHITE output call RefreshShop on Self.",
                "Compile and Save. RefreshShop runs whether or not the purchase was affordable."
              ]
            },
            {
              "title": "Show correct values on load",
              "where": "Clicker Widget → Graph → Event Construct.",
              "do": "In ClickerGameUI Event Construct from the original tutorial, remove or disconnect the old hard-coded SetScoreText(0) call. Connect Event Construct → RefreshShop instead. Compile and Save. The displayed starting values are now read from BP_ClickerGameMode.",
              "why": "The UI should never depend on someone clicking before it becomes correct.",
              "check": "On a fresh Play, ScoreText reads Points: 0, PowerText Per click: 1 and CostText Next upgrade: 10 before any click; no stale hard-coded 0 chain remains.",
              "helpTopics": [
                "refresh"
              ],
              "actions": [
                "Open ClickerGameUI → Graph → Event Construct.",
                "Locate the original hard-coded SetScoreText(0) call if it exists.",
                "Disconnect that old call and add RefreshShop on Self instead.",
                "Connect Event Construct WHITE output → RefreshShop WHITE input.",
                "Compile and Save. Do not add a second Event Construct."
              ]
            },
            {
              "title": "Test at a second viewport size",
              "where": "Clicker Widget → Designer → Screen Size preview.",
              "do": "Try a smaller viewport. Adjust anchors and layout so all text and buttons are visible. Then run Play In Editor at a different window size.",
              "why": "The original starter already taught anchors; now you apply them independently.",
              "check": "No label or button is cut off.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open ClickerGameUI → Designer and change its preview size to a smaller window.",
                "Adjust anchors and position so ScoreText, PowerText, CostText and the two buttons fit.",
                "Compile and Save. Play in a smaller editor viewport.",
                "Check both labels update when clicking and buying."
              ]
            }
          ],
          "check": "The score, points per click and upgrade cost always match the real GameMode variables, including immediately after load.",
          "fix": "If ScoreText remains unchanged, check the BP_ClickerGameMode original Assign On Clicked handler calls ClickerUI.RefreshShop after AddClick. If it updates twice, do not create an extra ClickerButton OnClicked in the widget. RefreshShop should replace, not run alongside, SetScoreText.",
          "beforeStart": "The original GameMode click event calls AddClick and ClickerUI.SetScoreText, while the NEW BuyUpgradeButton event lives in the ClickerGameUI widget. Score changes by ClickPower and purchases cost points.",
          "commonMistake": "Do not make a second ScoreText or add a main-button OnClicked event to the widget. The original button stays bound in BP_ClickerGameMode; only its final UI call changes to ClickerUI.RefreshShop.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "ScoreText",
              "kind": "Existing Text widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 0
            },
            {
              "name": "PowerText",
              "kind": "Text widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 1
            },
            {
              "name": "CostText",
              "kind": "Text widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 1
            },
            {
              "name": "RefreshShop",
              "kind": "Function",
              "owner": "ClickerGameUI",
              "at": 2
            }
          ]
        },
        {
          "id": "granny",
          "title": "3. Hire Grannies for automatic income",
          "tier": "Essential",
          "outcome": "Buying a Granny costs 15 points; each owned Granny adds one point per second automatically. The next Granny costs more, and the number owned is visible.",
          "steps": [
            {
              "title": "Create the Granny economy variables",
              "where": "BP_ClickerGameMode → My Blueprint → Variables.",
              "do": "Create GranniesOwned (Integer; default 0), GrannyRate (Integer; default 1) and GrannyCost (Integer; default 15). Compile.",
              "why": "These three values describe how many producers you own, their production, and the next price.",
              "check": "Starting values are 0 Grannies, 1 point/second each, and a price of 15.",
              "helpTopics": [
                "variable",
                "debug"
              ],
              "actions": [
                "Open BP_ClickerGameMode → My Blueprint → Variables → +.",
                "Create VARIABLE GranniesOwned. Choose Integer, Compile, Default Value=0.",
                "Create VARIABLE GrannyRate. Choose Integer, Compile, Default Value=1.",
                "Create VARIABLE GrannyCost. Choose Integer, Compile, Default Value=15.",
                "Compile and Save."
              ]
            },
            {
              "title": "Create a separate lifetime earnings counter",
              "where": "BP_ClickerGameMode → My Blueprint → Variables.",
              "do": "Keep Score as your spendable points balance. Create TotalEarned (Integer; default 0), then Compile. Do not deduct from TotalEarned when buying anything.",
              "why": "Manual and passive production should both earn points, while only Score is spent.",
              "check": "The GameMode has Score and TotalEarned, each initially zero.",
              "helpTopics": [
                "variable",
                "debug"
              ],
              "actions": [
                "Open BP_ClickerGameMode → My Blueprint → Variables → +.",
                "Create VARIABLE TotalEarned. Choose Integer, Compile and set Default Value=0.",
                "Keep the original Score: that is the spendable balance.",
                "Do not subtract points from TotalEarned when buying. Compile and Save."
              ]
            },
            {
              "title": "Make GainPoints take an amount",
              "where": "BP_ClickerGameMode → My Blueprint → Functions → +.",
              "do": "Create GainPoints. Select its purple entry node, then Details → Inputs → +, add Amount (Integer). Compile.",
              "why": "Both manual clicking and the timed Granny income should use the same function.",
              "check": "GainPoints has a green Amount integer input.",
              "helpTopics": [
                "function-input",
                "variable"
              ],
              "actions": [
                "Open BP_ClickerGameMode → My Blueprint → Functions → +.",
                "Name the FUNCTION GainPoints and open it.",
                "Select the purple Function Entry node. Details → Inputs → +.",
                "Name the INPUT PIN Amount. Choose Integer, Compile.",
                "Do NOT add Amount under My Blueprint Variables."
              ]
            },
            {
              "title": "Reject zero income",
              "where": "GainPoints function graph.",
              "do": "Add comparison Amount > 0 and connect it to a Branch. Wire the function entry white execution pin into the Branch.",
              "why": "Zero Grannies must not create imaginary points before the first purchase.",
              "check": "Only positive Amount values reach the True execution output.",
              "helpTopics": [
                "branch",
                "math"
              ],
              "actions": [
                "Stay in BP_ClickerGameMode → GainPoints.",
                "Drag from the purple Entry's Amount green pin and add Integer > Integer, with other input 0.",
                "Add Branch and connect Entry WHITE output to its WHITE input.",
                "Connect the > Boolean result to Branch Condition.",
                "Leave Branch FALSE empty. Continue from TRUE."
              ]
            },
            {
              "title": "Update balance and lifetime earnings together",
              "where": "GainPoints function → Branch True output.",
              "do": "Set Score = Score + Amount, then Set TotalEarned = TotalEarned + Amount. Wire the white Set nodes in this order and Compile. Do not alter TotalEarned in shop purchase functions.",
              "why": "Score can be spent, while TotalEarned always tracks the points you generated.",
              "check": "Calling GainPoints(5) increases both values by five.",
              "helpTopics": [
                "branch",
                "get-set"
              ],
              "actions": [
                "From GainPoints Branch TRUE add Set Score.",
                "For its green value pin use Get Score → Integer + Integer, connecting Amount to the other input.",
                "After Set Score WHITE output add Set TotalEarned.",
                "For its value use Get TotalEarned → Integer + Integer with Amount as the other input.",
                "Connect both WHITE Set nodes in order. Compile and Save."
              ]
            },
            {
              "title": "Send manual clicking through GainPoints",
              "where": "BP_ClickerGameMode → existing AddClick function from Upgrade 1.",
              "do": "Inside the BP_ClickerGameMode AddClick function, disconnect the old Set Score = Score + ClickPower calculation. Instead call GainPoints with Amount connected to ClickPower. Leave the existing GameMode assigned ClickerButton event calling AddClick once, followed by Get ClickerUI → RefreshShop. Do not add a widget-side main-button handler.",
              "why": "Every manually earned point now increases lifetime earnings without duplicating clicks.",
              "check": "One click at ClickPower=2 changes both Score and TotalEarned by exactly 2.",
              "helpTopics": [
                "get-set",
                "math"
              ],
              "actions": [
                "Open BP_ClickerGameMode → Functions → AddClick.",
                "Disconnect the previous Set Score=Score+ClickPower calculation.",
                "From AddClick's purple Entry WHITE output call GainPoints.",
                "Drag ClickPower as Get and connect it to GainPoints → Amount.",
                "Compile and Save. Keep the existing main ClickerButton event calling AddClick once, then RefreshShop."
              ]
            },
            {
              "title": "Make the purchase function",
              "where": "BP_ClickerGameMode → Functions → +.",
              "do": "Create BuyGranny. Add Branch with condition Score >= GrannyCost. On True, wire Set Score = Score - GrannyCost → Set GranniesOwned = GranniesOwned + 1 → Set GrannyCost = Ceiling(GrannyCost × 1.25). Ceiling converts the float price calculation back to an integer. False does nothing.",
              "why": "Buying more producers becomes progressively expensive, but can never spend negative points.",
              "check": "When Score=15, one purchase changes Score to 0, GranniesOwned to 1 and the next GrannyCost to 19.",
              "helpTopics": [
                "function",
                "branch"
              ],
              "actions": [
                "Open BP_ClickerGameMode → Functions → + and name the FUNCTION BuyGranny.",
                "Open BuyGranny. Add Branch, Entry WHITE → Branch WHITE.",
                "Condition: Get Score >= Get GrannyCost (Integer comparison).",
                "Branch TRUE → Set Score, value Get Score - Get GrannyCost.",
                "Next WHITE → Set GranniesOwned, value Get GranniesOwned + 1.",
                "Next WHITE → Set GrannyCost, value Ceil to Integer(Get GrannyCost × 1.25).",
                "Leave Branch FALSE empty. Compile and Save."
              ]
            },
            {
              "title": "Create a Pure production function and output",
              "where": "BP_ClickerGameMode → My Blueprint → Functions → +.",
              "do": "Create a function GetProductionPerSecond. Select the function in My Blueprint (or its Entry node) and tick Pure in the Details panel. Under Outputs click +, name the new output Production and set its type to Integer; Compile.",
              "why": "A Pure function only returns a value; it does not change the score or need white execution wires.",
              "check": "GetProductionPerSecond has a green Integer output called Production and is marked Pure in Details.",
              "helpTopics": [
                "function-output",
                "function"
              ],
              "actions": [
                "Open BP_ClickerGameMode → My Blueprint → Functions → +.",
                "Name the FUNCTION GetProductionPerSecond and open it.",
                "Select the FUNCTION under My Blueprint and tick Pure in Details.",
                "Details → Outputs → +. Name the OUTPUT PIN Production and choose Integer.",
                "Compile. Production is a return pin, not a Blueprint variable."
              ]
            },
            {
              "title": "Calculate how fast Grannies earn",
              "where": "BP_ClickerGameMode → GetProductionPerSecond function graph.",
              "do": "Drag GranniesOwned and GrannyRate into the graph as Get, connect them to Multiply (Integer × Integer), and connect the result to Production on the Return Node. Compile. Do not add a Set Score node to this function.",
              "why": "One calculation works for one Granny or one hundred, and later for Farms too.",
              "check": "When GranniesOwned is 0, Production is 0; one Granny at GrannyRate 1 gives 1 per second.",
              "helpTopics": [
                "function-output",
                "get-set"
              ],
              "actions": [
                "Stay in GetProductionPerSecond.",
                "Drag GranniesOwned and GrannyRate into graph as Get.",
                "Connect their green Integer outputs to Multiply (Integer × Integer).",
                "Connect Multiply result to Return Node → Production.",
                "Compile and Save. This PURE function must not set Score."
              ]
            },
            {
              "title": "Add a Granny shop button and labels",
              "where": "Clicker Widget → Designer.",
              "do": "Add a Button named BuyGrannyButton with text \"Buy Granny\". Add Text widgets GranniesText and PassiveIncomeText; tick Is Variable. Placeholder text: \"Grannies: 0\" and \"Auto: 0 / sec\". Add a Text widget LifetimeText with placeholder \"Lifetime: 0\" and tick Is Variable.",
              "why": "The player must understand what the new upgrade does and how many producers they own.",
              "check": "A visible button and both labels fit the shop.",
              "helpTopics": [
                "variable",
                "widget"
              ],
              "actions": [
                "Open ClickerGameUI → Designer.",
                "Add Button BuyGrannyButton with child Text Buy Granny.",
                "Add Text widget GranniesText, placeholder Grannies: 0 | Next: 15.",
                "Add Text widget PassiveIncomeText, placeholder Auto: 0 / sec.",
                "Add Text widget LifetimeText, placeholder Lifetime: 0.",
                "Tick Is Variable on all four named controls. Compile and Save."
              ]
            },
            {
              "title": "Connect Granny purchases",
              "where": "Clicker Widget → Graph → BuyGrannyButton → OnClicked.",
              "do": "In ClickerGameUI, add an OnClicked event for the NEW BuyGrannyButton. Get Game Mode → Cast To BP_ClickerGameMode → call BuyGranny → call RefreshShop on Self. Leave the original ClickerButton binding in BP_ClickerGameMode untouched. Compile.",
              "why": "The UI requests the purchase while GameMode owns the economy.",
              "check": "From a fresh game, manually earn 15, then press Buy Granny: GranniesOwned becomes 1, GrannyCost becomes 19 and spendable Score drops by 15. The automatic timer is added in the next part.",
              "helpTopics": [
                "cast"
              ],
              "actions": [
                "Open ClickerGameUI → Designer and select BuyGrannyButton.",
                "In Details → Events click + beside OnClicked.",
                "From OnClicked WHITE output add Get Game Mode → Cast To BP_ClickerGameMode.",
                "Connect Get Game Mode's blue Return Value to Cast Object.",
                "From Cast Success WHITE output call BuyGranny on the blue GameMode reference.",
                "After BuyGranny call RefreshShop on Self.",
                "Compile and Save. Keep the original main-button binding untouched."
              ]
            },
            {
              "title": "Show the next price and automatic income",
              "where": "Clicker Widget → RefreshShop function.",
              "do": "Open ClickerGameUI → RefreshShop. Reuse the successful BP_ClickerGameMode cast already there. Read GranniesOwned and GrannyCost, then Set Text on GranniesText using Format Text \"Grannies: {Owned} | Next: {Cost}\". Read GetProductionPerSecond and Set Text on PassiveIncomeText using Format Text \"Auto: {Rate} / sec\". Read TotalEarned and Set Text on LifetimeText using \"Lifetime: {Earned}\". Connect all new Set Text nodes AFTER CostText in the same white execution chain; Compile.",
              "why": "Players can see that another Granny increases automatic earnings.",
              "check": "Before buying a Granny, the extra labels show Grannies: 0 | Next: 15, Auto: 0 / sec and Lifetime: your points earned.",
              "helpTopics": [
                "binding",
                "get-set"
              ],
              "actions": [
                "Open ClickerGameUI → Graph → RefreshShop.",
                "Find the existing final CostText Set Text node; keep its WHITE output.",
                "From the blue GameMode cast read GranniesOwned and GrannyCost.",
                "Use Format Text Grannies: {Owned} | Next: {Cost} → Set Text on GranniesText.",
                "From the blue GameMode cast call GetProductionPerSecond; use Format Text Auto: {Rate} / sec → Set Text on PassiveIncomeText.",
                "Get TotalEarned; use Format Text Lifetime: {Earned} → Set Text on LifetimeText.",
                "Wire WHITE execution CostText Set Text → GranniesText Set Text → PassiveIncomeText Set Text → LifetimeText Set Text.",
                "Compile and Save."
              ]
            },
            {
              "title": "Check that a Granny can actually be bought",
              "where": "ClickerGameUI → Play In Editor after connecting BuyGrannyButton.",
              "do": "Start Play, click to earn at least 15 points, then buy ONE Granny. Check the widget shows Grannies: 1, Next: 19 and Auto: 1 / sec. At this point the auto income label is a rate preview; points will not rise by themselves until you add the one-second timer below.",
              "why": "You should confirm purchasing works before debugging timers.",
              "check": "The purchase and shop labels work even though automatic points are not running yet.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open Clicker level and press Play.",
                "Click the main button until you have at least 15 points.",
                "Click Buy Granny once. Check Grannies: 1 and the next price 19.",
                "Check Auto: 1 / sec appears.",
                "No automatic income exists yet; the next tasks add its timer. Stop Play."
              ]
            },
            {
              "title": "Add the callback but keep the original widget",
              "where": "BP_ClickerGameMode → Event Graph in empty space.",
              "do": "Create a Custom Event called ProduceIncome. Leave your original BeginPlay → Create Widget → Add to Viewport chain untouched. Compile.",
              "why": "The starting interface must still load even when we add passive production.",
              "check": "A Custom Event ProduceIncome exists and the original UI still shows in Play.",
              "helpTopics": [
                "custom-event",
                "widget"
              ],
              "actions": [
                "Open BP_ClickerGameMode → Event Graph.",
                "Right-click → Add Custom Event; name it ProduceIncome.",
                "For now connect Print String with message AUTO TICK to the event WHITE output.",
                "Compile and Save. Do not remove the original Create Widget and main button event."
              ]
            },
            {
              "title": "Start exactly one repeating production timer",
              "where": "BP_ClickerGameMode → Event BeginPlay.",
              "do": "Keep your ORIGINAL BeginPlay → Create Widget → Add to Viewport → Set ClickerUI → Assign On Clicked chain intact. Add a Sequence immediately after BeginPlay: Then 0 continues to the original chain; Then 1 goes to Set Timer by Event (Time=1.0, Looping ticked). Drag from its red Event delegate pin and choose Create Event; select ProduceIncome in the new event chooser. Compile. The timer must only be started once here, not when buying each Granny.",
              "why": "One GameMode timer will pay all Grannies; creating one timer per Granny would be harder to manage.",
              "check": "On Play, the ClickerGameUI still appears and one looping timer is connected to ProduceIncome. Use a Print String in ProduceIncome temporarily to verify exactly one tick per second.",
              "helpTopics": [
                "custom-event",
                "timer"
              ],
              "actions": [
                "Open BP_ClickerGameMode → Event Graph → Event BeginPlay.",
                "Add Sequence after BeginPlay. Then 0 → the ORIGINAL Create Widget → Add to Viewport → Set ClickerUI → Assign On Clicked chain.",
                "Sequence Then 1 → Set Timer by Event, Time=1.0, Looping=true.",
                "Connect the Timer's red Event delegate to Create Event → ProduceIncome.",
                "Compile and Play. AUTO TICK should print once per second.",
                "Stop and remove only that temporary Print String."
              ]
            },
            {
              "title": "Pay the player every second",
              "where": "BP_ClickerGameMode → ProduceIncome.",
              "do": "Call GetProductionPerSecond and feed its Integer result to GainPoints(Amount). GainPoints already ignores zero amounts and updates Score and TotalEarned. Compile.",
              "why": "This simulates automatic clicks using the same earning rules as manual clicks.",
              "check": "After you have bought at least one Granny using the new button, start Play again, buy one, then stop clicking. With a temporary Print String after GainPoints you see Score rise by about 1 per second. Remove the debug print afterwards.",
              "helpTopics": [
                "refresh"
              ],
              "actions": [
                "Open BP_ClickerGameMode → Event Graph → ProduceIncome.",
                "From the Custom Event WHITE output call GainPoints.",
                "Place a call to the PURE Function GetProductionPerSecond.",
                "Connect GetProductionPerSecond → Production to GainPoints → Amount.",
                "Compile, Save, Play. Buy a Granny, then stop clicking.",
                "Confirm Score and TotalEarned increase once per second."
              ]
            },
            {
              "title": "Refresh the display while nobody clicks",
              "where": "Clicker Widget → Event Construct.",
              "do": "In ClickerGameUI → Event Graph, leave the existing Event Construct → RefreshShop connection. Add Set Timer by Event AFTER the first RefreshShop, Time=0.25, Looping ticked. Add a Custom Event RefreshAutoHUD in empty space, connect it to RefreshShop, then from the timer red Event delegate pin choose Create Event assigned to RefreshAutoHUD. Do this only once in Construct; keep the existing GameMode production timer separate.",
              "why": "Passive income changes the score even when no button event triggers RefreshShop.",
              "check": "With at least one Granny owned, stop clicking for five seconds. Points and Lifetime values on screen increase automatically, without any second manual input.",
              "helpTopics": [
                "custom-event",
                "timer"
              ],
              "actions": [
                "Open ClickerGameUI → Graph → Event Construct.",
                "Keep Event Construct → RefreshShop.",
                "After RefreshShop WHITE output add Set Timer by Event, Time=0.25, Looping=true.",
                "In blank Event Graph add a Custom Event named RefreshAutoHUD.",
                "From RefreshAutoHUD WHITE output call RefreshShop on Self.",
                "Connect the Timer red Event delegate → Create Event → RefreshAutoHUD.",
                "Compile and Save. The Widget timer updates labels only; GameMode owns the income timer."
              ]
            },
            {
              "title": "Test increasing purchase costs",
              "where": "Play the game from a fresh level.",
              "do": "Start Play fresh. Earn 15 points by clicking and buy one Granny; the next cost must show 19. Continue earning from clicks and from the first Granny until Score is at least 19, buy a second; the next cost shows 24. After buying two, stop clicking for three seconds: production increases by around six points (two per second). Since automatic income continues during purchases, Score may rise immediately after paying; watch the price and GranniesOwned to verify the purchases.",
              "why": "The production logic and price curve should remain understandable.",
              "check": "With two Grannies, the passive rate displays 2 per second and continues without clicking.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open Clicker level and Play from a fresh run.",
                "Earn 15 points and buy the first Granny: next price 19.",
                "Earn at least 19 more spendable points, then buy a second Granny.",
                "Check the next price 24 and the label Auto: 2 / sec.",
                "Do not click for three seconds: Score and TotalEarned should rise by approximately six points.",
                "Stop Play."
              ]
            }
          ],
          "check": "The first Granny costs 15 and produces 1 point/sec; two Grannies produce 2/sec. Buying prices increase 15→19→24, the automatic HUD updates, and purchases never reduce TotalEarned.",
          "fix": "Granny button missing? Build BuyGrannyButton and wire its new OnClicked before you try the timer. No income after buying? Check ProduceIncome runs once per second and calls GainPoints(GetProductionPerSecond). If Score rises internally but not in the widget, check the separate 0.25-second RefreshAutoHUD timer. If it rises twice as fast as expected, remove duplicate timers or the original +1 score chain.",
          "beforeStart": "The original ClickerButton is handled by BP_ClickerGameMode and the BuyUpgradeButton by ClickerGameUI. RefreshShop works from both events. You will build the Granny purchase and display BEFORE connecting a repeating timer.",
          "commonMistake": "Do not try to test automatic income before you create and connect BuyGrannyButton: you need at least one owned Granny. Check the purchase and labels before starting the timer; keep just one GameMode production timer.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "GranniesOwned",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Integer • default 0"
            },
            {
              "name": "GrannyRate",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Integer • default 1"
            },
            {
              "name": "GrannyCost",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Integer • default 15"
            },
            {
              "name": "TotalEarned",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 2,
              "type": "Integer • default 0"
            },
            {
              "name": "GainPoints",
              "kind": "Function",
              "owner": "BP_ClickerGameMode",
              "at": 3
            },
            {
              "name": "Amount",
              "kind": "Function input",
              "owner": "GainPoints Function",
              "at": 3,
              "type": "Integer"
            },
            {
              "name": "BuyGranny",
              "kind": "Function",
              "owner": "BP_ClickerGameMode",
              "at": 7
            },
            {
              "name": "GetProductionPerSecond",
              "kind": "Function",
              "owner": "BP_ClickerGameMode",
              "at": 8,
              "note": "Pure Function: a calculation, not an Event or variable."
            },
            {
              "name": "Production",
              "kind": "Function output",
              "owner": "GetProductionPerSecond Function",
              "at": 8,
              "type": "Integer"
            },
            {
              "name": "BuyGrannyButton",
              "kind": "Button widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 10
            },
            {
              "name": "GranniesText",
              "kind": "Text widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 10
            },
            {
              "name": "PassiveIncomeText",
              "kind": "Text widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 10
            },
            {
              "name": "LifetimeText",
              "kind": "Text widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 10
            },
            {
              "name": "ProduceIncome",
              "kind": "Custom Event",
              "owner": "BP_ClickerGameMode",
              "at": 14
            },
            {
              "name": "RefreshAutoHUD",
              "kind": "Custom Event",
              "owner": "ClickerGameUI",
              "at": 17
            }
          ]
        },
        {
          "id": "training",
          "title": "4. Train Grannies to double their output",
          "tier": "Essential",
          "outcome": "A 100-point training upgrade doubles production from every owned Granny. Repeated training increases the rate 1→2→4→8 points per second per Granny.",
          "steps": [
            {
              "title": "Add the upgrade price",
              "where": "BP_ClickerGameMode → Variables.",
              "do": "Create GrannyTrainingCost (Integer; default 100). Keep existing GrannyRate (Integer; default 1). Compile.",
              "why": "A single price governs the next training purchase.",
              "check": "The default rate is 1 and the training price is 100.",
              "helpTopics": [
                "variable"
              ],
              "actions": [
                "Open BP_ClickerGameMode → My Blueprint → Variables → +.",
                "Create VARIABLE GrannyTrainingCost; choose Integer, Compile, Default Value=100.",
                "Keep the existing GrannyRate variable; do not create it again.",
                "Compile and Save."
              ]
            },
            {
              "title": "Make the training purchase function",
              "where": "BP_ClickerGameMode → Functions → +.",
              "do": "Create TrainGrannies. Add Branch using (Score >= GrannyTrainingCost) AND (GranniesOwned > 0). From True: Set Score = Score - GrannyTrainingCost → Set GrannyRate = GrannyRate × 2 → Set GrannyTrainingCost = GrannyTrainingCost × 2. False does nothing. Compile.",
              "why": "The training has a price and only works when at least one Granny exists.",
              "check": "TrainGrannies compiles. Its False path does nothing; after the button is connected, buying with one Granny and 100 Score doubles GrannyRate to 2 and sets next cost to 200.",
              "helpTopics": [
                "function",
                "branch"
              ],
              "actions": [
                "Open BP_ClickerGameMode → Functions → +. Name the FUNCTION TrainGrannies.",
                "Open it. Add Branch; purple Entry WHITE → Branch WHITE.",
                "Condition: (Get Score >= Get GrannyTrainingCost) AND (Get GranniesOwned > 0).",
                "Branch TRUE → Set Score, value Get Score - Get GrannyTrainingCost.",
                "Then Set GrannyRate, value Get GrannyRate × 2.",
                "Then Set GrannyTrainingCost, value Get GrannyTrainingCost × 2.",
                "Connect the three Set nodes' WHITE pins in order. Compile and Save."
              ]
            },
            {
              "title": "Add the upgrade button",
              "where": "Clicker Widget → Designer.",
              "do": "Add Button TrainGranniesButton with child Text \"Train Grannies\" and a Text widget TrainingInfoText marked Is Variable. Position them next to the Granny purchase controls.",
              "why": "The player can choose between hiring more producers and making existing ones stronger.",
              "check": "Both shop options are readable and do not overlap.",
              "helpTopics": [
                "widget"
              ],
              "actions": [
                "Open ClickerGameUI → Designer.",
                "Add a Button named TrainGranniesButton; put child Text Train Grannies inside.",
                "Add Text widget TrainingInfoText.",
                "Tick Is Variable on both controls.",
                "Place them near BuyGrannyButton without blocking the main ClickerButton.",
                "Compile and Save."
              ]
            },
            {
              "title": "Connect the upgrade click",
              "where": "Clicker Widget → TrainGranniesButton → OnClicked.",
              "do": "Use Get Game Mode → Cast To BP_ClickerGameMode → TrainGrannies → RefreshShop. Compile.",
              "why": "The button invokes the shared economy rules rather than changing widget-only numbers.",
              "check": "At enough balance, a press changes GrannyRate and the next training cost exactly once.",
              "helpTopics": [
                "cast"
              ],
              "actions": [
                "Open ClickerGameUI → Designer → TrainGranniesButton.",
                "Details → Events → click + beside OnClicked.",
                "From OnClicked WHITE output add Get Game Mode → Cast To BP_ClickerGameMode.",
                "Connect Get Game Mode blue output to Cast Object.",
                "Cast Success WHITE → call TrainGrannies on its blue GameMode reference.",
                "After TrainGrannies WHITE output call RefreshShop on Self.",
                "Compile and Save."
              ]
            },
            {
              "title": "Make the effect visible",
              "where": "Clicker Widget → RefreshShop.",
              "do": "Read GrannyRate and GrannyTrainingCost and use Format Text to show \"Each Granny: {Rate}/sec | Train: {Cost}\". Keep PassiveIncomeText reading GetProductionPerSecond so the total updates automatically.",
              "why": "Players should immediately see the benefit of the upgrade.",
              "check": "With 2 Grannies trained once, Auto shows 4/sec; trained twice it shows 8/sec.",
              "helpTopics": [
                "binding"
              ],
              "actions": [
                "Open ClickerGameUI → Graph → RefreshShop Function.",
                "Find the last existing WHITE Set Text node (LifetimeText).",
                "From blue BP_ClickerGameMode cast reference read GrannyRate and GrannyTrainingCost.",
                "Use Format Text Each Granny: {Rate}/sec | Train: {Cost}, feeding both integers.",
                "Drag TrainingInfoText as Get, create Set Text and connect the Format Text output.",
                "Wire previous Set Text WHITE output → TrainingInfoText Set Text WHITE input.",
                "Keep PassiveIncomeText using GetProductionPerSecond. Compile and Save."
              ]
            },
            {
              "title": "Check training never affects spending history",
              "where": "Play the game.",
              "do": "With two Grannies, earn at least 100 spendable points. Press Train once: the next upgrade costs 200 and Auto changes from 2/sec to 4/sec. Score drops by 100 at the moment of purchase but continues earning immediately from passive income; TotalEarned must never decrease.",
              "why": "Purchase and production must remain separate bookkeeping operations.",
              "check": "The income rate doubles while lifetime earnings only increase as new cookies are generated.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open Clicker level and press Play.",
                "Buy two Grannies (Auto: 2 / sec).",
                "Earn 100 spendable points; press Train Grannies ONCE.",
                "Check GrannyRate becomes 2; Auto becomes 4 / sec.",
                "Next training price should become 200.",
                "TotalEarned should never decrease when purchasing."
              ]
            }
          ],
          "check": "Each Granny can be upgraded: two Grannies produce 2/sec initially, then 4/sec, 8/sec and beyond as training is purchased.",
          "fix": "Rate unchanged? Make sure GetProductionPerSecond multiplies GranniesOwned by GrannyRate and RefreshShop reads that function. If training buys at zero Grannies, add the GranniesOwned > 0 condition to the Branch.",
          "beforeStart": "Buy at least one Granny in the working game; the auto-income label must update every second.",
          "commonMistake": "A training button should have no effect if GranniesOwned is zero or Score is below the price.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "GrannyTrainingCost",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Integer • default 100"
            },
            {
              "name": "TrainGrannies",
              "kind": "Function",
              "owner": "BP_ClickerGameMode",
              "at": 2
            },
            {
              "name": "TrainGranniesButton",
              "kind": "Button widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 3
            },
            {
              "name": "TrainingInfoText",
              "kind": "Text widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 3
            }
          ]
        },
        {
          "id": "goal",
          "title": "5. Optional: add lifetime milestones",
          "tier": "Creative",
          "outcome": "Show a one-time milestone when lifetime earnings reach 500, without pausing Granny production or removing any spendable points.",
          "steps": [
            {
              "title": "Add milestone variables",
              "where": "BP_ClickerGameMode → Variables.",
              "do": "Create MilestoneTarget (Integer; default 500) and MilestoneReached (Boolean; default false). Keep Score and TotalEarned from the Granny upgrade. Compile.",
              "why": "The game can recognise progress across all purchases and all production.",
              "check": "MilestoneReached is false at the start and the goal is 500.",
              "helpTopics": [
                "variable"
              ],
              "actions": [
                "Open BP_ClickerGameMode → My Blueprint → Variables → +.",
                "Create VARIABLE MilestoneTarget; choose Integer, Compile, Default Value=500.",
                "Create VARIABLE MilestoneReached; choose Boolean, Compile, Default Value=false.",
                "Keep TotalEarned from the Granny expansion. Save."
              ]
            },
            {
              "title": "Check the milestone when points are earned",
              "where": "BP_ClickerGameMode → GainPoints function from the Granny upgrade.",
              "do": "After Set TotalEarned, add a Branch with condition (NOT MilestoneReached) AND (TotalEarned >= MilestoneTarget). On True set MilestoneReached=true and optionally Print String \"500 earned!\". Do not stop the production timer or disable the click button.",
              "why": "Earning points, not spending them, should trigger milestones only once.",
              "check": "When TotalEarned first reaches 500, MilestoneReached turns true and remains true.",
              "helpTopics": [
                "branch",
                "get-set"
              ],
              "actions": [
                "Open BP_ClickerGameMode → GainPoints Function.",
                "Locate Set TotalEarned in its TRUE path.",
                "After that Set's WHITE output add Branch.",
                "Condition: NOT Get MilestoneReached AND (Get TotalEarned >= Get MilestoneTarget).",
                "Branch TRUE → Set MilestoneReached(true).",
                "Optionally add Print String 500 earned! after Set.",
                "Leave Branch FALSE empty. Compile and Save."
              ]
            },
            {
              "title": "Add the achievement text",
              "where": "Clicker Widget → Designer.",
              "do": "Add a Text widget MilestoneText with text \"500 LIFETIME POINTS!\" and enable Is Variable. Set Visibility to Collapsed initially.",
              "why": "The achievement should appear only after it is earned.",
              "check": "No milestone text is visible at the start.",
              "helpTopics": [
                "widget"
              ],
              "actions": [
                "Open ClickerGameUI → Designer.",
                "Add a Text widget named MilestoneText.",
                "Set default text to 500 LIFETIME POINTS!.",
                "Tick Is Variable and change Visibility to Collapsed.",
                "Compile and Save."
              ]
            },
            {
              "title": "Show the milestone in the existing refresh",
              "where": "Clicker Widget → RefreshShop function.",
              "do": "From your existing GameMode cast, get MilestoneReached. If True, Set Visibility(MilestoneText, Visible); otherwise set it Collapsed. Do not create another timer: the Granny stage already refreshes the whole shop every 0.25 seconds.",
              "why": "An existing refresh is more reliable than starting a new UI update loop.",
              "check": "The milestone appears while Granny automatic income continues.",
              "helpTopics": [
                "refresh"
              ],
              "actions": [
                "Open ClickerGameUI → Graph → RefreshShop Function.",
                "Find its final WHITE Set Text node (TrainingInfoText if training is complete).",
                "From blue GameMode cast reference read MilestoneReached.",
                "After the last Set Text add Branch, Condition=MilestoneReached.",
                "Branch TRUE → Set Visibility(MilestoneText,Visible).",
                "Branch FALSE → Set Visibility(MilestoneText,Collapsed).",
                "Compile and Save. Do not make another timer."
              ]
            },
            {
              "title": "Test earning and spending around the goal",
              "where": "Play the Clicker level.",
              "do": "For a quick test, temporarily set MilestoneTarget default to 20 in BP_ClickerGameMode AND change the MilestoneText placeholder in ClickerGameUI to \"TEST: 20 LIFETIME POINTS!\". Restart Play, earn 20 lifetime points from clicks or Grannies, then spend some Score. Verify the achievement appears once and does not interrupt the shop. Afterwards restore MilestoneTarget=500 and MilestoneText=\"500 LIFETIME POINTS!\", then restart Play again.",
              "why": "This catches the common error of checking spendable Score instead of lifetime progress.",
              "check": "The test banner appears at 20 earned points without blocking purchases. Both the target and on-screen wording are restored to 500 for the real game.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open BP_ClickerGameMode → MilestoneTarget variable defaults.",
                "Temporarily change its value to 20 and Compile.",
                "Open ClickerGameUI → Designer → MilestoneText; temporarily set its text TEST: 20 LIFETIME POINTS!.",
                "Play, earn 20 lifetime points and spend some Score.",
                "Verify the banner appears and the shop still operates.",
                "Stop. Restore MilestoneTarget=500 and MilestoneText=500 LIFETIME POINTS!.",
                "Compile both assets and Save."
              ]
            }
          ],
          "check": "The lifetime milestone is triggered by TotalEarned (not spendable Score), appears once, and does not stop Granny production.",
          "fix": "No milestone? Check GainPoints updates TotalEarned on both manual and passive income. If milestone disappears after shopping, read MilestoneReached, not Score.",
          "beforeStart": "Granny auto-income already updates spendable Score and TotalEarned. This is an OPTIONAL badge, not a game-over condition.",
          "commonMistake": "Milestones read TotalEarned, never Score after purchases.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "MilestoneTarget",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Integer • default 500"
            },
            {
              "name": "MilestoneReached",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Boolean • default false"
            },
            {
              "name": "MilestoneText",
              "kind": "Text widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 3
            }
          ]
        },
        {
          "id": "farm",
          "title": "6. Optional: unlock a second producer",
          "tier": "Creative",
          "outcome": "Players can buy Farms producing 5 points per second each. Granny and Farm income accumulate through the same single production timer.",
          "steps": [
            {
              "title": "Add Farm variables",
              "where": "BP_ClickerGameMode → Variables.",
              "do": "Create FarmsOwned (Integer; default 0), FarmRate (Integer; default 5) and FarmCost (Integer; default 100). Compile.",
              "why": "Every producer can be represented by owned, rate and cost; the pattern can be repeated for new ideas.",
              "check": "The three starting values are 0, 5 and 100.",
              "helpTopics": [
                "variable"
              ],
              "actions": [
                "Open BP_ClickerGameMode → My Blueprint → Variables → +.",
                "Create VARIABLE FarmsOwned; Integer, Compile, Default Value=0.",
                "Create VARIABLE FarmRate; Integer, Compile, Default Value=5.",
                "Create VARIABLE FarmCost; Integer, Compile, Default Value=100.",
                "Compile and Save."
              ]
            },
            {
              "title": "Build the Farm purchase function",
              "where": "BP_ClickerGameMode → Functions → +.",
              "do": "Create BuyFarm. Add Branch (Score >= FarmCost). From True: Set Score = Score - FarmCost → Set FarmsOwned = FarmsOwned + 1 → Set FarmCost = Ceiling(FarmCost × 1.30). Compile.",
              "why": "This uses the same proven purchase structure as BuyGranny, so students can expand independently.",
              "check": "BuyFarm compiles with a Score >= FarmCost check before its three Set nodes. After wiring BuyFarmButton, purchasing the first Farm for 100 raises FarmCost to 130.",
              "helpTopics": [
                "function",
                "branch"
              ],
              "actions": [
                "Open BP_ClickerGameMode → Functions → +. Name the FUNCTION BuyFarm.",
                "Open it. Add Branch; connect purple Entry WHITE to Branch WHITE.",
                "Condition: Get Score >= Get FarmCost.",
                "Branch TRUE → Set Score=Get Score - Get FarmCost.",
                "Then Set FarmsOwned=Get FarmsOwned + 1.",
                "Then Set FarmCost=Ceil to Integer(Get FarmCost × 1.30).",
                "Connect the Set nodes' WHITE outputs in order; leave Branch FALSE empty.",
                "Compile and Save."
              ]
            },
            {
              "title": "Extend the one income calculation",
              "where": "BP_ClickerGameMode → GetProductionPerSecond function.",
              "do": "Keep the original GranniesOwned × GrannyRate calculation. Add FarmsOwned × FarmRate, then add both integer products and connect the sum to the Return Node Production output.",
              "why": "One timer should award the combined income; do not create a second Set Timer by Event.",
              "check": "With two normal Grannies and one Farm, the function returns 7 per second.",
              "helpTopics": [
                "function-output",
                "math"
              ],
              "actions": [
                "Open BP_ClickerGameMode → Function GetProductionPerSecond.",
                "Keep the original Get GranniesOwned × Get GrannyRate node chain.",
                "Drag FarmsOwned and FarmRate in as Get.",
                "Multiply FarmsOwned × FarmRate with Integer × Integer.",
                "Add the result to GranniesOwned × GrannyRate using Integer + Integer.",
                "Connect the new sum to the existing Return Node → Production.",
                "Compile and Save. Do not create another income timer."
              ]
            },
            {
              "title": "Add Farm to the shop",
              "where": "Clicker Widget → Designer.",
              "do": "Add a Farm button named BuyFarmButton and a Text widget FarmInfoText, tick Is Variable. Set the placeholder to \"Farms: 0 | Next: 100\".",
              "why": "Each producer needs a clear cost and a recognisable visual identity.",
              "check": "The shop displays both producer types without hiding either.",
              "helpTopics": [
                "widget"
              ],
              "actions": [
                "Open ClickerGameUI → Designer.",
                "Add Button BuyFarmButton with child Text Buy Farm.",
                "Add Text widget FarmInfoText; placeholder Farms: 0 | Next: 100.",
                "Tick Is Variable on both; place them beside the Granny controls.",
                "Compile and Save."
              ]
            },
            {
              "title": "Connect Farm purchases and their UI",
              "where": "Clicker Widget → Graph.",
              "do": "BuyFarmButton OnClicked → GameMode BuyFarm → RefreshShop. Extend RefreshShop to read FarmsOwned and FarmCost and SetText on FarmInfoText using Format Text. Leave the existing automatic UI refresh timer untouched.",
              "why": "The new producer uses the same GameMode and UI update pattern as the first.",
              "check": "One Farm appears in the shop and 5 extra points/second are added immediately.",
              "helpTopics": [
                "binding"
              ],
              "actions": [
                "Open ClickerGameUI → Designer → BuyFarmButton → Details → Events → OnClicked +.",
                "From OnClicked WHITE output add Get Game Mode → Cast To BP_ClickerGameMode.",
                "From Cast Success WHITE call BuyFarm on the blue GameMode reference.",
                "After BuyFarm call RefreshShop on Self.",
                "Open the existing RefreshShop Function; find the previous last Set Text in its WHITE chain.",
                "From blue GameMode reference Get FarmsOwned and FarmCost.",
                "Use Format Text Farms: {Owned} | Next: {Cost}, then Set Text on FarmInfoText.",
                "Wire its WHITE input after the existing last Set Text node. Compile and Save."
              ]
            },
            {
              "title": "Test combined income and lifetime earnings",
              "where": "Play the game.",
              "do": "Test with 3 Grannies (trained once to GrannyRate 2) and 2 Farms (FarmRate 5). The expected production is (3×2)+(2×5)=16 points/sec. This setup may take a while to earn in normal play; for a quick development test, use the Blueprint debugger or temporarily give the GameMode a larger starting Score, then restore the Score default to 0. Watch production for around five seconds without clicks or purchases. TotalEarned should increase by roughly 80, and Score by the same amount.",
              "why": "Different systems must sum correctly without triggering separate duplicated timers.",
              "check": "Three trained Grannies and two Farms give 16/sec using ONE timer; both Score and TotalEarned rise by roughly 80 over five seconds with no purchases.",
              "helpTopics": [
                "math",
                "debug"
              ],
              "actions": [
                "Open Clicker level and Play.",
                "To test quickly, temporarily set BP_ClickerGameMode Score Default Value to 1000; Compile, then Restart Play.",
                "Buy three Grannies, train them once and buy two Farms.",
                "Read Auto: it should be 16 / sec (3×2 + 2×5).",
                "Stop clicking for five seconds; Score and TotalEarned should rise by approximately 80.",
                "Stop Play. Restore Score Default Value=0; Compile and Save."
              ]
            },
            {
              "title": "Plan your own next producer",
              "where": "With your partner, sketch a third producer in the shared Teams folder.",
              "do": "Choose a name, starting cost, income rate and artwork. Describe which variables and single GameMode functions you would reuse; only build it if the game is already playable.",
              "why": "This is the independent creative step: apply a familiar pattern to a new producer.",
              "check": "You can explain how your third producer would feed into GetProductionPerSecond without a new timer.",
              "helpTopics": [
                "art"
              ],
              "actions": [
                "Choose a name, starting cost and points-per-second rate for a third producer.",
                "Sketch one simple UI icon for it.",
                "Write which Variables you would create on BP_ClickerGameMode and which function you would call after its purchase.",
                "Reuse GetProductionPerSecond and the ONE existing income timer if you choose to build it.",
                "Only attempt this when your existing Granny/Farm game works."
              ]
            }
          ],
          "check": "With Grannies and Farms running, combined income matches the single production timer and lifetime earnings rise along with the spendable balance.",
          "fix": "Income wrong? Check GetProductionPerSecond includes both terms and ProduceIncome calls it once per second. If income doubles unexpectedly, look for a second timer or an old direct Set Score chain.",
          "beforeStart": "Granny production and training are working. Farms are an optional second producer, not a second timer.",
          "commonMistake": "A second Set Timer by Event can make the whole game earn twice as much as intended.",
          "studentPromise": "One small change, then Compile → Save → Play. If a check fails, fix that step before starting the next one.",
          "names": [
            {
              "name": "FarmsOwned",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Integer • default 0"
            },
            {
              "name": "FarmRate",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Integer • default 5"
            },
            {
              "name": "FarmCost",
              "kind": "Variable",
              "owner": "BP_ClickerGameMode",
              "at": 1,
              "type": "Integer • default 100"
            },
            {
              "name": "BuyFarm",
              "kind": "Function",
              "owner": "BP_ClickerGameMode",
              "at": 2
            },
            {
              "name": "BuyFarmButton",
              "kind": "Button widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 4
            },
            {
              "name": "FarmInfoText",
              "kind": "Text widget • Is Variable",
              "owner": "ClickerGameUI",
              "at": 4
            }
          ]
        }
      ],
      "minimumStage": "granny",
      "minimumOutcome": "A functioning clicker with a shop, bought Grannies earning points automatically every second and a live production display."
    },
    {
      "project": "loops",
      "title": "Loops & Spawning → Rising Defence (line-trace survival game)",
      "intro": "Turn the original Loops physics tower into Rising Defence. Five lanes spawn rising blocks at random. Use an actual mouse-aimed Line Trace By Channel blaster to destroy them before they touch the red 450cm height line; survive 60 seconds, earn Hits and press R to replay. Essential Stages 1–3 make the full playable game. Creative stages add faster red threats and feedback. This NEW extension is not the older Target Rush waves: back up any work on that guide before switching. The three original illustrated Loops tutorials and BP_Box are NOT edited.",
      "stages": [
        {
          "id": "rising-shot",
          "title": "1. Turn the Loops cubes into a line-trace blaster",
          "tier": "Essential",
          "outcome": "Five stationary blocks are visible. The player aims with the mouse and uses a real Line Trace By Channel on left click to destroy exactly the block under the pointer, not Event ActorOnClicked.",
          "steps": [
            {
              "title": "Keep your original Loops work safe",
              "where": "Content/Loops → LoopsLevel and BP_LoopsGameMode.",
              "do": "Finish the three original Loops tutorials and make a copy of the working project. Keep original physics BP_Box untouched. If you already made BP_ClickTarget, do not delete your old work: this is a NEW Rising Defence extension, not the old Target Rush waves.",
              "why": "The supplied tutorial and any partial work remain recoverable.",
              "check": "The original BP_Box loop still works in the backup; you are editing your own copy.",
              "helpTopics": [
                "backup"
              ],
              "actions": [
                "Finish the three ORIGINAL Loops starter lessons first.",
                "Stop Play and close Unreal Editor before copying the project folder.",
                "Copy the project into a new folder named RisingDefence_Working.",
                "Open that copied project. Check that the original BP_Box physics tower still runs.",
                "Do NOT delete or edit the original BP_Box Blueprint. This expansion uses a new block Blueprint."
              ]
            },
            {
              "title": "Make the rising block actor",
              "where": "Content/Loops → Blueprint Class → Actor.",
              "do": "Create BP_RisingBlock. Add Static Mesh component named BlockMesh using the built-in Cube. On BlockMesh set Simulate Physics=false, Collision Enabled=Query Only, and ensure Visibility trace response=Block (Custom collision preset or BlockAll). Set relative Location Z=50 to put a 100cm cube above the floor. Compile and Save.",
              "why": "A separate, non-physics target can be scaled later; it must block a Visibility trace.",
              "check": "BlockMesh is visible, stationary and blocks Visibility.",
              "helpTopics": [
                "actor",
                "component"
              ],
              "actions": [
                "Open Content Drawer → Content/Loops.",
                "Right-click → Blueprint Class → Actor. Name the ASSET BP_RisingBlock and open it.",
                "In Components click + Add → Static Mesh; rename the new COMPONENT BlockMesh.",
                "Select BlockMesh. In Details set Static Mesh to Cube (Engine BasicShapes).",
                "Set Simulate Physics=false; Collision Enabled=Query Only; Visibility response=Block.",
                "Set BlockMesh Relative Location Z=50 so the cube sits on the floor.",
                "Compile and Save."
              ]
            },
            {
              "title": "Reuse your For Loop for a first shooting test",
              "where": "BP_LoopsGameMode → Event Graph → original BeginPlay For Loop.",
              "do": "Change the original Spawn Actor From Class Class from BP_Box to BP_RisingBlock, First Index=0, Last Index=4. Replace the tower's height maths with Make Vector: X=200, Y=(Loop Index - 2) * 150, Z=0 → Make Transform.Location → Spawn Actor. Use Collision Handling Override=Always Spawn, Ignore Collisions. Compile and Play.",
              "why": "The same Loop knowledge now places five different targets across a shooting gallery.",
              "check": "Five still cubes appear in a horizontal line, separated by 150cm.",
              "helpTopics": [
                "spawn",
                "math"
              ],
              "actions": [
                "Open BP_LoopsGameMode → Event Graph → existing BeginPlay For Loop.",
                "Select Spawn Actor From Class and change its Class from BP_Box to BP_RisingBlock.",
                "Set For Loop First Index=0, Last Index=4.",
                "Disconnect the OLD height-maths input from the Spawn Transform.",
                "From Loop Index add Integer - Integer with second input 2, then Integer × Integer with second input 150.",
                "Add Make Vector with X=200, Y=(Index-2)×150, Z=0; plug it into Make Transform → Location.",
                "Connect Make Transform to Spawn Actor → Spawn Transform; set Collision Handling Override=Always Spawn, Ignore Collisions.",
                "Keep For Loop Body WHITE execution going into Spawn Actor. Compile and Save.",
                "Open LoopsLevel and Play: five cubes should form a horizontal row."
              ]
            },
            {
              "title": "Create a fixed shooting-gallery camera",
              "where": "LoopsLevel → Place Actors → Camera Actor.",
              "do": "Place ONE Camera Actor named Cam_RisingDefence at approximately X=-950,Y=0,Z=260, with Rotator Pitch=0,Yaw=0,Roll=0 (faces +X). Frame all five cubes; fine-tune camera/FOV if necessary. Save the level.",
              "why": "A stable view makes a simple mouse-aimed blaster achievable without building a full FPS character.",
              "check": "The camera preview contains all five blocks and plenty of space above them.",
              "helpTopics": [
                "level"
              ],
              "actions": [
                "Open LoopsLevel. In Place Actors drag in a Camera Actor.",
                "Select it in World Outliner and press F2. Name this PLACED ACTOR Cam_RisingDefence.",
                "In Details → Transform set Location X=-950,Y=0,Z=260.",
                "Set Rotation Pitch=0, Yaw=0, Roll=0 so it faces +X.",
                "View the camera preview; adjust its position or FOV slightly until all five blocks and space above them fit.",
                "Save LoopsLevel. Keep ONE Camera Actor in this simple test level."
              ]
            },
            {
              "title": "Set up the controller and make the map actually use it",
              "where": "Content/Loops → BP_LoopsPlayerController; BP_LoopsGameMode Class Defaults; LoopsLevel World Settings.",
              "do": "Create a PlayerController named BP_LoopsPlayerController if you do not already have it; otherwise reuse it. In BP_LoopsGameMode Class Defaults assign Player Controller Class=BP_LoopsPlayerController; LoopsLevel → World Settings → GameMode Override=BP_LoopsGameMode. Press Play (NOT Simulate).",
              "why": "An unassigned controller is the most common reason input nodes seem correct but do nothing.",
              "check": "The game actually uses BP_LoopsPlayerController and a visible cursor.",
              "helpTopics": [
                "level"
              ],
              "actions": [
                "Open Content/Loops. If BP_LoopsPlayerController already exists, reuse it.",
                "Otherwise right-click → Blueprint Class → PlayerController. Name it BP_LoopsPlayerController.",
                "Open BP_LoopsGameMode → Class Defaults.",
                "Find Player Controller Class and choose BP_LoopsPlayerController.",
                "Open LoopsLevel → Settings → World Settings.",
                "Set GameMode Override=BP_LoopsGameMode. Save Level.",
                "Press Play (not Simulate) to check the correct game class is active."
              ]
            },
            {
              "title": "Show the pointer and activate the fixed camera",
              "where": "BP_LoopsPlayerController → Event Graph → Event BeginPlay.",
              "do": "Connect the WHITE exec chain: BeginPlay → Set Show Mouse Cursor(true, Self) → Set Input Mode Game And UI(Player Controller=Self; no focused widget; mouse lock=Do Not Lock) → Set View Target with Blend(Target=Self, New View Target=Get Actor of Class(Class=CameraActor)). Only one camera actor should be in this test level. Compile.",
              "why": "Players aim with the mouse; Game+UI mode and the assigned view allow world-position deprojection.",
              "check": "Press Play: the correct fixed camera shows the cubes, and the mouse stays visible. In PlayerController Class Defaults, set Default Mouse Cursor to Crosshairs for an arcade-blaster aiming reticle.",
              "helpTopics": [
                "cast",
                "exec"
              ],
              "actions": [
                "Open BP_LoopsPlayerController → Event Graph and find Event BeginPlay.",
                "From BeginPlay WHITE output add Set Show Mouse Cursor, Target=Self, value true.",
                "From its WHITE output add Set Input Mode Game and UI, Player Controller=Self.",
                "Leave In Widget to Focus empty and set Mouse Lock Mode=Do Not Lock.",
                "From WHITE output add Set View Target with Blend, Target=Self.",
                "Add Get Actor of Class with Actor Class=CameraActor.",
                "Connect Get Actor of Class blue Return Value to Set View Target with Blend → New View Target.",
                "In BP_LoopsPlayerController → Class Defaults set Default Mouse Cursor=Crosshairs.",
                "Compile, Save, Play. The five blocks and crosshair mouse cursor should be visible."
              ]
            },
            {
              "title": "Create an explicit Fire action",
              "where": "Content/Loops → Input assets.",
              "do": "Create Input Action IA_RisingFire (Value Type=Digital/Boolean). Create Input Mapping Context IMC_RisingDefence. Map IA_RisingFire to Left Mouse Button. If an old IMC_TargetRush is used from earlier work, do not add it as well; this game uses one IMC_RisingDefence. Save both assets.",
              "why": "Enhanced Input must have an actual mapping, not just an unconnected mouse event.",
              "check": "IA_RisingFire appears under IMC_RisingDefence with Left Mouse Button.",
              "helpTopics": [
                "variable",
                "input"
              ],
              "actions": [
                "In Content/Loops right-click → Input → Input Action.",
                "Name the INPUT ACTION ASSET IA_RisingFire. Open it and set Value Type=Digital (Boolean).",
                "In Content/Loops right-click → Input → Input Mapping Context.",
                "Name the INPUT MAPPING ASSET IMC_RisingDefence and open it.",
                "Add Mapping: IA_RisingFire → Left Mouse Button.",
                "Save both Input assets. Do not also load the older IMC_TargetRush."
              ]
            },
            {
              "title": "Install the mapping and prove the button is firing",
              "where": "BP_LoopsPlayerController → BeginPlay and IA_RisingFire event.",
              "do": "AFTER Set View Target with Blend on the same BeginPlay exec chain, call Get Enhanced Input Local Player Subsystem → Add Mapping Context(IMC_RisingDefence, Priority=0). Add IA_RisingFire event on the controller graph: its Started WHITE pin → Print String('PEW'). Play inside the game viewport and click once.",
              "why": "A PEW message isolates input from all aiming/collision systems.",
              "check": "Every left-click prints PEW once. If not, verify the active controller, mapping, Play versus Simulate and game window focus.",
              "helpTopics": [
                "input",
                "debug"
              ],
              "actions": [
                "Open BP_LoopsPlayerController → Event Graph → existing BeginPlay chain.",
                "AFTER Set View Target with Blend, add Add Mapping Context.",
                "Add Get Enhanced Input Local Player Subsystem and connect it as Add Mapping Context Target.",
                "Choose Mapping Context=IMC_RisingDefence and Priority=0.",
                "Keep this in the SAME BeginPlay WHITE execution chain.",
                "In blank graph space add the IA_RisingFire Input Action event.",
                "From IA_RisingFire Started WHITE output add Print String with text PEW.",
                "Compile, Save and Play; a left mouse click should print PEW once."
              ]
            },
            {
              "title": "Convert the mouse into a 3D shot",
              "where": "BP_LoopsPlayerController → IA_RisingFire Started path.",
              "do": "After the temporary PEW print, call Convert Mouse Location To World Space (also searchable as Deproject Mouse Position to World). Branch on its Return Value: only True continues. Keep World Location and World Direction. Multiply World Direction by 5000. Add World Location to that product; this becomes the shot End, and World Location is the Start.",
              "why": "Deprojection turns the pointer into a ray through the camera rather than treating a 2D mouse position as a world coordinate.",
              "check": "The two Vector values are wired: Start=World Location and End=World Location+(World Direction*5000).",
              "helpTopics": [
                "input",
                "trace"
              ],
              "actions": [
                "Open BP_LoopsPlayerController → Event Graph → IA_RisingFire Started → PEW.",
                "After PEW WHITE output add Convert Mouse Location To World Space (or Deproject Mouse Position to World).",
                "Its Target should be Self (the PlayerController).",
                "Add Branch and connect its Condition to the Convert node's Return Value (Boolean).",
                "Connect PEW WHITE output to Branch WHITE input if the Convert node is pure (has no WHITE pins).",
                "Drag World Direction into Vector × Float with Float=5000.",
                "Add Vector + Vector: first input World Location; second input Direction × 5000.",
                "World Location is the gun ray START; the + output is its END. Compile."
              ]
            },
            {
              "title": "Run a REAL line trace, not ActorOnClicked",
              "where": "BP_LoopsPlayerController → after deprojection Branch True.",
              "do": "Add Line Trace By Channel: Start/End from above, Trace Channel=Visibility, Draw Debug Type=For Duration for testing, Ignore Self=true. Wire the Branch True WHITE exec to Line Trace By Channel. Add Branch using Line Trace Return Value; on True, Break Hit Result from Out Hit and Print String of the Hit Actor display name. Compile and Play.",
              "why": "A shot now checks the FIRST physical target on the Visibility ray; clicks are no longer bound to Event ActorOnClicked.",
              "check": "A debug line aims towards your cursor; hitting a cube prints BP_RisingBlock, and clicking empty space does not claim a target.",
              "helpTopics": [
                "trace",
                "branch"
              ],
              "actions": [
                "Stay in BP_LoopsPlayerController after the mouse-conversion Branch TRUE output.",
                "Add Line Trace By Channel and connect Branch TRUE WHITE to the trace WHITE input.",
                "Connect World Location to Line Trace Start; the World Location + Direction×5000 result to End.",
                "Set Trace Channel=Visibility, Draw Debug Type=For Duration, Ignore Self=true.",
                "After Line Trace WHITE output add Branch, Condition=Line Trace Return Value.",
                "From Out Hit add Break Hit Result, then Get Display Name(Hit Actor) → Print String on Branch TRUE.",
                "Compile and Play. Clicking a cube should print its Actor name; clicking empty space should not register a hit."
              ]
            },
            {
              "title": "Make the block disappear on a confirmed hit",
              "where": "BP_RisingBlock and BP_LoopsPlayerController.",
              "do": "In BP_RisingBlock create Custom Event BreakBlock → Destroy Actor(Target Self). In PlayerController, from the trace's hit-TRUE Branch, use Break Hit Result.Hit Actor → Cast To BP_RisingBlock. On Cast Success WHITE exec, call BreakBlock on 'As BP_RisingBlock'. Remove the temporary Hit Actor Print String only once it works. Do not wire Destroy Actor to every shot or to Cast Failed.",
              "why": "Only a successful trace against the right actor removes a block.",
              "check": "Aimed left-click removes ONE cube. Missed clicks and non-target hits remove none.",
              "helpTopics": [
                "custom-event",
                "trace"
              ],
              "actions": [
                "Open BP_RisingBlock → Event Graph.",
                "Right-click → Add Custom Event; name it BreakBlock.",
                "From BreakBlock WHITE output add Destroy Actor with Target=Self. Compile and Save.",
                "Open BP_LoopsPlayerController → Event Graph, after Line Trace Return Value TRUE Branch.",
                "From Break Hit Result → Hit Actor add Cast To BP_RisingBlock, Object=Hit Actor.",
                "Connect hit Branch TRUE WHITE to Cast WHITE input.",
                "From the blue As BP_RisingBlock pin call BreakBlock. Cast Success WHITE → BreakBlock WHITE.",
                "Leave Cast Failed empty. Remove the temporary Hit Actor name print once this works.",
                "Compile, Save and Play: one aimed left click should remove exactly one cube."
              ]
            },
            {
              "title": "Debug before proceeding",
              "where": "LoopsLevel → Play in Editor.",
              "do": "Use this order: (1) no PEW → controller/mapping/focus; (2) PEW but no debug ray → deprojection false or wrong WHITE exec; (3) ray hits other objects → target Visibility collision or obstruction; (4) ray hits BP_RisingBlock but remains → Cast Success or BreakBlock wiring. Delete or disable any old BP_ClickTarget ActorOnClicked scoring path so one shot never counts twice. Save the working shot system.",
              "why": "You need a reliable blaster before introducing moving or growing targets.",
              "check": "Five cubes can each be shot once; the original BP_Box asset has not changed.",
              "helpTopics": [
                "cast",
                "debug"
              ],
              "actions": [
                "Open LoopsLevel and press Play, NOT Simulate.",
                "Left click a cube. If PEW does not print, check IA_RisingFire, IMC_RisingDefence and controller assignment.",
                "If PEW prints but you see no line, check the Convert Mouse Location To World Space Branch and WHITE wires.",
                "If the debug ray passes through cubes, select BP_RisingBlock.BlockMesh and set Visibility=Block.",
                "If ray hits a cube but it remains, check Hit Actor → Cast Success → BreakBlock.",
                "Disable any old BP_ClickTarget ActorOnClicked scoring path so one shot cannot count twice.",
                "Stop Play when all five cubes can be shot and removed; Compile and Save."
              ]
            }
          ],
          "check": "Five fixed targets shoot correctly via a debug Line Trace By Channel; no ActorOnClicked is required.",
          "fix": "PEW absent: wrong PlayerController, missing IMC_RisingDefence, not Playing, window unfocused. PEW with no line: Convert Mouse Location To World Space/exec chain. Line missing block: Visibility=Block on BlockMesh, no foreground obstacle, check cast. Line hits block without removal: BreakBlock call execution/Target. Keep HUD non-hit-testable when added.",
          "beforeStart": "The original Loops mini-project produces a physics BP_Box tower using BeginPlay → For Loop → Spawn Actor. Back it up and keep BP_Box untouched.",
          "commonMistake": "Do not accidentally keep the OLD ActorOnClicked path from Target Rush; this extension uses an IA_RisingFire-initiated raycast.",
          "studentPromise": "Compile → Save → Play after each small change. Do not move on until that step's check passes.",
          "names": [
            {
              "name": "BP_RisingBlock",
              "kind": "Actor Blueprint asset",
              "owner": "Content/Loops",
              "at": 2
            },
            {
              "name": "BlockMesh",
              "kind": "Static Mesh component",
              "owner": "BP_RisingBlock",
              "at": 2
            },
            {
              "name": "Cam_RisingDefence",
              "kind": "Placed Camera Actor",
              "owner": "LoopsLevel (World Outliner)",
              "at": 4
            },
            {
              "name": "BP_LoopsPlayerController",
              "kind": "PlayerController Blueprint asset",
              "owner": "Content/Loops",
              "at": 5
            },
            {
              "name": "IA_RisingFire",
              "kind": "Input Action asset",
              "owner": "Content/Loops",
              "at": 7
            },
            {
              "name": "IMC_RisingDefence",
              "kind": "Input Mapping Context asset",
              "owner": "Content/Loops",
              "at": 7
            },
            {
              "name": "BreakBlock",
              "kind": "Custom Event",
              "owner": "BP_RisingBlock",
              "at": 11
            }
          ]
        },
        {
          "id": "rising-growth",
          "title": "2. Randomly spawn blocks that grow towards a danger line",
          "tier": "Essential",
          "outcome": "One random block appears in an available lane every 1.5 seconds. Blocks stretch upwards from the floor; shooting frees a lane. If any reaches the 450cm red danger line, the game ends in defeat.",
          "steps": [
            {
              "title": "Give each block a lane and growth values",
              "where": "BP_RisingBlock → Variables.",
              "do": "In BP_RisingBlock → My Blueprint → Variables → +, create LaneIndex (Integer, default 0, Instance Editable and Expose on Spawn), CurrentHeight (Float, default 60), GrowthSpeed (Float, default 35) and MaxHeight (Float, default 450). Compile so LaneIndex appears as a Spawn Actor input pin. Keep the same cube with physics disabled.",
              "why": "The actor knows its lane and how tall it may become.",
              "check": "LaneIndex is exposed on Spawn Actor and values 60,35,450 are present.",
              "helpTopics": [
                "variable"
              ],
              "actions": [
                "Open BP_RisingBlock → My Blueprint → Variables → +.",
                "Create VARIABLE LaneIndex, choose Integer, Compile, set Default Value=0.",
                "With LaneIndex selected tick Instance Editable and Expose on Spawn in Details.",
                "Create VARIABLE CurrentHeight, choose Float, Compile, Default Value=60.",
                "Create VARIABLE GrowthSpeed, choose Float, Compile, Default Value=35.",
                "Create VARIABLE MaxHeight, choose Float, Compile, Default Value=450.",
                "Compile and Save. Keep BlockMesh physics disabled."
              ]
            },
            {
              "title": "Build UpdateBlockVisual to grow upward FROM THE FLOOR",
              "where": "BP_RisingBlock → Function UpdateBlockVisual.",
              "do": "Create UpdateBlockVisual (no inputs). On BlockMesh call Set Relative Scale 3D with Make Vector (X=1,Y=1,Z=CurrentHeight/100), then Set Relative Location with Make Vector(X=0,Y=0,Z=CurrentHeight/2); wire execution in that order. The standard Cube mesh is 100cm tall; the Actor stays at spawn Z=0.",
              "why": "Changing the mesh height AND centre together anchors its base at the ground instead of growing in both directions.",
              "check": "At CurrentHeight=60 the mesh extends from Z=0 to Z=60; at 300 it extends from 0 to 300.",
              "helpTopics": [
                "function",
                "math"
              ],
              "actions": [
                "Open BP_RisingBlock → My Blueprint → Functions → +.",
                "Name the FUNCTION UpdateBlockVisual and open it.",
                "Drag BlockMesh from Components into graph as Get.",
                "Drag CurrentHeight as Get → Float ÷ Float, second input 100.",
                "Create Make Vector X=1,Y=1,Z=CurrentHeight/100; plug into Set Relative Scale 3D(Target=BlockMesh).",
                "Create another Make Vector X=0,Y=0,Z=CurrentHeight/2 (Float ÷ Float).",
                "Plug that Vector into Set Relative Location(Target=BlockMesh).",
                "Wire the purple Function Entry WHITE → Set Relative Scale 3D WHITE → Set Relative Location WHITE.",
                "Compile and Save. The block's base now stays at floor level."
              ]
            },
            {
              "title": "Make growth frame-rate-independent",
              "where": "BP_RisingBlock → Event BeginPlay and Event Tick.",
              "do": "On Event BeginPlay call UpdateBlockVisual once. On Event Tick use Get Game Mode → Cast To BP_LoopsGameMode → Get Finished → NOT → Branch. On True set CurrentHeight = Min(MaxHeight, CurrentHeight + (Tick Delta Seconds * GrowthSpeed)), then call UpdateBlockVisual. Compile. If BP_LoopsGameMode does not yet have Finished, add Boolean Finished default false now.",
              "why": "Delta Seconds means the height rises at the same speed on fast and slow machines.",
              "check": "Press Play: one block steadily extends upwards without falling or moving sideways.",
              "helpTopics": [
                "variable",
                "cast"
              ],
              "actions": [
                "Open BP_LoopsGameMode → My Blueprint → Variables → +.",
                "Create the BOOLEAN VARIABLE Finished. Compile and set Default Value=false. Save.",
                "Open BP_RisingBlock → Event Graph.",
                "From Event BeginPlay call UpdateBlockVisual once.",
                "From Event Tick WHITE output add Cast To BP_LoopsGameMode. Use Get Game Mode for Cast Object.",
                "From As BP_LoopsGameMode blue pin Get Finished → NOT Boolean.",
                "After Cast Success WHITE add Branch; connect NOT Finished to Branch Condition.",
                "From Branch TRUE add Set CurrentHeight with value Min(MaxHeight, CurrentHeight + (Tick Delta Seconds × GrowthSpeed)).",
                "From Set CurrentHeight WHITE output call UpdateBlockVisual.",
                "Compile and Save. Do not use a fixed increase every frame."
              ]
            },
            {
              "title": "Mark the fail height visibly",
              "where": "LoopsLevel → Place Actors → Cube mesh (or other simple bar).",
              "do": "Place a thin horizontal red bar named DangerLine across the lane area at Z=450: e.g. Cube scale X=0.1,Y=8,Z=0.05 and location X=200,Y=0,Z=450. Give it a bright red material. Set its collision to NoCollision so it NEVER blocks the gun's Visibility trace. Save.",
              "why": "Players can see why they are losing, while the gun still reaches the blocks.",
              "check": "The red line appears above the growing blocks and bullets pass through it.",
              "helpTopics": [
                "material"
              ],
              "actions": [
                "Open LoopsLevel and from Place Actors drag in a Cube.",
                "Rename the PLACED ACTOR DangerLine in World Outliner.",
                "Set Location X=200,Y=0,Z=450.",
                "Set Scale X=0.1,Y=8,Z=0.05 to make a thin horizontal bar.",
                "Choose a bright red material in Details → Materials.",
                "Set Collision Presets=NoCollision so the gun's Visibility trace passes through.",
                "Save Level. The red line must sit above the growing blocks."
              ]
            },
            {
              "title": "Create the available-lane array",
              "where": "BP_LoopsGameMode → Variables and Event BeginPlay.",
              "do": "Create FreeLanes as an Integer Array and SpawnTimerHandle as a TimerHandle. In BeginPlay REPLACE the old five-cube For Loop exec input, but keep the old nodes unconnected until you test the new system. Set FreeLanes using Make Array(0,1,2,3,4). Make the new BeginPlay chain reach this Set first. The original physics BP_Box remains a separate asset.",
              "why": "An available-lane list ensures no two growing blocks occupy the same lane.",
              "check": "On a fresh Play FreeLanes contains five distinct integers.",
              "helpTopics": [
                "variable",
                "custom-event"
              ],
              "actions": [
                "Open BP_LoopsGameMode → My Blueprint → Variables → +.",
                "Create VARIABLE FreeLanes, choose Integer type then change Container to Array.",
                "Create VARIABLE SpawnTimerHandle with type Timer Handle. Compile.",
                "Open BP_LoopsGameMode → Event Graph → Event BeginPlay.",
                "Disconnect BeginPlay WHITE from the OLD five-cube For Loop; keep old nodes for reference.",
                "Drag FreeLanes as Set. For its value use Make Array of Integer values 0,1,2,3,4.",
                "Connect BeginPlay WHITE output to Set FreeLanes WHITE input. Compile and Save."
              ]
            },
            {
              "title": "Make a safe SpawnOneBlock function",
              "where": "BP_LoopsGameMode → Functions → SpawnOneBlock.",
              "do": "Create Function SpawnOneBlock. First Branch: NOT Finished AND Length(FreeLanes)>0. On True choose a local Integer PickIndex = Random Integer in Range(0, Length(FreeLanes)-1); then local PickLane = FreeLanes[PickIndex] (Array Get) BEFORE removing it. After those Set nodes, Remove Index from FreeLanes using PickIndex. Do not use a random Y coordinate without reserving its lane.",
              "why": "Choosing only from unused lanes stops growing blocks overlapping and becoming unshootable.",
              "check": "A call removes exactly one valid lane and cannot select an already occupied lane.",
              "helpTopics": [
                "local",
                "variable"
              ],
              "actions": [
                "Open BP_LoopsGameMode → My Blueprint → Functions → +.",
                "Name the FUNCTION SpawnOneBlock and open it.",
                "In My Blueprint → Local Variables click +; create LOCAL Integer PickIndex.",
                "Create another LOCAL Integer PickLane.",
                "From Function Entry WHITE output add Branch.",
                "Set Branch Condition=(NOT Finished) AND (Length(FreeLanes)>0).",
                "From Branch TRUE add Set PickIndex; value Random Integer in Range Min=0, Max=Length(FreeLanes)-1.",
                "From Set PickIndex WHITE output add Set PickLane; value=FreeLanes Get(Index=PickIndex).",
                "From Set PickLane WHITE output add Remove Index(Target Array=FreeLanes, Index=PickIndex).",
                "Compile and Save. PickIndex/PickLane belong inside SpawnOneBlock, not in GameMode Variables."
              ]
            },
            {
              "title": "Spawn the cube in its chosen lane",
              "where": "BP_LoopsGameMode → SpawnOneBlock after Remove Index.",
              "do": "Continue white exec to Spawn Actor From Class(Class=BP_RisingBlock, Collision Handling Override=Always Spawn, Ignore Collisions). Set Make Transform.Location = Make Vector(X=200,Y=(PickLane-2)*150,Z=0). Feed PickLane into the exposed LaneIndex pin. Leave rotation 0 and scale 1. Compile.",
              "why": "This preserves the five-column layout but randomises WHICH column gets the next threat.",
              "check": "A new block appears in one of five fixed horizontal positions; no blocks overlap.",
              "helpTopics": [
                "array",
                "spawn"
              ],
              "actions": [
                "Open BP_LoopsGameMode → SpawnOneBlock Function, after Remove Index.",
                "Add Spawn Actor From Class and choose BP_RisingBlock.",
                "Set Collision Handling Override=Always Spawn, Ignore Collisions.",
                "Drag PickLane LOCAL variable as Get; calculate (PickLane-2)×150 with Integer math.",
                "Create Make Vector X=200,Y=(PickLane-2)×150,Z=0 and connect to Make Transform → Location.",
                "Connect Make Transform output to Spawn Actor → Spawn Transform.",
                "Connect PickLane to Spawn Actor → LaneIndex (compile BP_RisingBlock first if this pin is missing).",
                "Wire Remove Index WHITE output → Spawn Actor WHITE input. Compile and Save."
              ]
            },
            {
              "title": "Start ONE repeating spawn timer",
              "where": "BP_LoopsGameMode → Event Graph → BeginPlay.",
              "do": "Make Custom Event SpawnTick → call SpawnOneBlock. After BeginPlay sets FreeLanes, call SpawnOneBlock once (one initial threat), then Set Timer by Event(Time=1.5, Looping=true; Event delegate uses Create Event → SpawnTick). Promote its Return Value to SpawnTimerHandle. There must be only one repeating spawn timer, NOT a timer in each block.",
              "why": "Repeated spawns create escalating pressure without replacing the old tutorial's core idea of automated spawning.",
              "check": "Play: blocks appear in random free lanes around every 1.5 seconds; when all five are occupied, spawning safely skips until one is cleared.",
              "helpTopics": [
                "variable",
                "custom-event"
              ],
              "actions": [
                "Open BP_LoopsGameMode → Event Graph.",
                "Add Custom Event SpawnTick. From it call SpawnOneBlock.",
                "Find Event BeginPlay → Set FreeLanes(0,1,2,3,4).",
                "From Set FreeLanes WHITE output CALL SpawnOneBlock once.",
                "From SpawnOneBlock WHITE output add Set Timer by Event, Time=1.5 and Looping=true.",
                "From the Timer's red Event delegate → Create Event → choose SpawnTick.",
                "Drag its Timer Handle Return Value onto Set SpawnTimerHandle.",
                "Compile and Save; do not put this repeating timer inside BP_RisingBlock."
              ]
            },
            {
              "title": "Count a good shot and return the freed lane",
              "where": "BP_LoopsGameMode → Variables and Function RegisterHit.",
              "do": "Add Hits (Integer, default 0). Create Function RegisterHit with an Integer input HitLane. First Branch on NOT Finished; on True run Add Unique(Target Array=FreeLanes, New Item=HitLane) → Set Hits=Hits+1. Optionally Print String 'HIT +1' after it. Compile. Do NOT put this function on each block's Event Tick.",
              "why": "One authoritative counter owns points and gives the lane back to the spawner exactly once.",
              "check": "The returned lane is available again, and Hits increases by one per block.",
              "helpTopics": [
                "function-input",
                "variable"
              ],
              "actions": [
                "Open BP_LoopsGameMode → My Blueprint → Variables → +.",
                "Create VARIABLE Hits, type Integer, Compile, Default Value=0.",
                "In Functions click + and create FUNCTION RegisterHit.",
                "Select purple Function Entry → Details → Inputs → +; name INPUT PIN HitLane, type Integer.",
                "From Entry WHITE add Branch, Condition=NOT Finished.",
                "From TRUE add Add Unique to FreeLanes Array, New Item=HitLane.",
                "After Add Unique WHITE add Set Hits, value=Get Hits + 1.",
                "After Set Hits add Print String HIT +1 for testing. Compile and Save."
              ]
            },
            {
              "title": "Connect BreakBlock to the GameMode",
              "where": "BP_RisingBlock → existing Custom Event BreakBlock from Stage 1.",
              "do": "Replace the direct BreakBlock → Destroy Actor connection. Use Get Game Mode → Cast To BP_LoopsGameMode → Branch Condition=NOT Finished; from True call RegisterHit(HitLane=Self.LaneIndex) on that SAME GameMode reference, then Destroy Actor(Self). Wire the WHITE exec pins through Cast Success, Branch True, RegisterHit and Destroy Actor in order. Never free a lane on a miss.",
              "why": "A block disappears only after the GameMode registers a valid hit.",
              "check": "Shoot two blocks: Hits=2, both blocks vanish, and those lanes can spawn again.",
              "helpTopics": [
                "custom-event",
                "cast"
              ],
              "actions": [
                "Open BP_RisingBlock → Event Graph → BreakBlock Custom Event.",
                "Disconnect ONLY its old direct WHITE wire into Destroy Actor.",
                "From BreakBlock WHITE output add Cast To BP_LoopsGameMode; Object=Get Game Mode.",
                "From Cast Success WHITE output add Branch, Condition=NOT Finished (read from the blue GameMode cast reference).",
                "From Branch TRUE call RegisterHit on that SAME blue GameMode reference.",
                "Connect BP_RisingBlock's LaneIndex variable to RegisterHit's HitLane input.",
                "After RegisterHit WHITE output connect to the existing Destroy Actor(Target=Self).",
                "Leave Branch FALSE and Cast Failed empty. Compile and Save."
              ]
            },
            {
              "title": "Create a single LoseRound event",
              "where": "BP_LoopsGameMode → Event Graph.",
              "do": "Create Custom Event LoseRound. Branch on NOT Finished; True → Set Finished=true → Clear and Invalidate Timer by Handle(SpawnTimerHandle) → Print String('DEFENCE FAILED!'). Leave False unconnected. The round's other timer comes in Stage 3.",
              "why": "A single end event prevents repeated loss messages and stops future spawns.",
              "check": "Calling LoseRound once stops the spawner and sets Finished.",
              "helpTopics": [
                "custom-event",
                "timer"
              ],
              "actions": [
                "Open BP_LoopsGameMode → Event Graph.",
                "Right-click → Add Custom Event. Name it LoseRound.",
                "From the red event WHITE output add Branch, Condition=NOT Finished.",
                "From Branch TRUE add Set Finished=true.",
                "From Set Finished WHITE output add Clear and Invalidate Timer by Handle; use Get SpawnTimerHandle.",
                "After Clear Timer add Print String DEFENCE FAILED!.",
                "Leave Branch FALSE unconnected. Compile and Save."
              ]
            },
            {
              "title": "Lose when ANY block touches the danger line",
              "where": "BP_RisingBlock → Event Tick, immediately after UpdateBlockVisual.",
              "do": "After updating the height, Branch(CurrentHeight >= MaxHeight). On True call Get Game Mode → Cast To BP_LoopsGameMode → LoseRound. This must happen AFTER Set CurrentHeight and UpdateBlockVisual, only on the NOT Finished tick path. Do not Destroy Actor when the block hits the line; leave it showing the reason for defeat.",
              "why": "One unchecked block can end the round, creating an urgent target-priority decision.",
              "check": "Do not shoot: a block reaches the red line after roughly 11 seconds, 'DEFENCE FAILED!' prints once and growth/spawning stop.",
              "helpTopics": [
                "cast",
                "branch"
              ],
              "actions": [
                "Open BP_RisingBlock → Event Graph → Event Tick growth path.",
                "Find Set CurrentHeight → UpdateBlockVisual.",
                "After UpdateBlockVisual WHITE output add Branch.",
                "Condition: Get CurrentHeight >= Get MaxHeight (Float comparison).",
                "Branch TRUE → Cast To BP_LoopsGameMode using Get Game Mode as Object.",
                "From Cast Success WHITE output call LoseRound on As BP_LoopsGameMode.",
                "Keep the original NOT Finished Branch before the growth update.",
                "Compile and Save. Do not Destroy Actor when it hits the line."
              ]
            },
            {
              "title": "Test spawning, scoring and the fail state separately",
              "where": "LoopsLevel → Play in Editor.",
              "do": "Test A: watch one block grow, shoot it, confirm its lane is freed and a future spawn can reuse it. Test B: let all five lanes fill: no overlaps and no sixth lane. Test C: do not shoot until one reaches Z=450: Finished=true and no new blocks. If cubes still spawn as a tower, disconnect the old BeginPlay loop. If blocks grow below ground, Set Relative Location.Z must be CurrentHeight/2, not 0.",
              "why": "Testing each rule catches errors before UI and survival logic conceal them.",
              "check": "One reliable random-spawn rising-block defence game works; it can lose, but does not yet have a timed victory.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open LoopsLevel and press Play.",
                "Test A: shoot one growing block and watch for another spawn in its freed lane.",
                "Test B: let all five lanes fill. There must not be a sixth overlapping cube.",
                "Test C: stop firing; after roughly 11 seconds a block should reach the red line.",
                "Check DEFENCE FAILED! prints once, spawns stop and all blocks stop growing.",
                "If an old stationary five-block row is still spawning, disconnect the original BeginPlay For Loop.",
                "If blocks grow below ground, check BlockMesh Relative Location Z=CurrentHeight/2.",
                "Stop Play, Compile and Save the three Blueprints."
              ]
            }
          ],
          "check": "Blocks use five safe random lanes, grow visibly from the floor, can be shot to free their lane and lose the round if any reaches the red 450cm line.",
          "fix": "No new blocks: test FreeLanes MakeArray, SpawnTick timer and Finished flag. Duplicates: BeginPlay must not run both old For Loop and SpawnOneBlock. Overlap: always pick from FreeLanes and remove the selected INDEX. Hits don't rise: RegisterHit wiring and LaneIndex on Spawn Actor. Blocks grow from middle: RelativeLocation.Z must equal CurrentHeight/2. Failure not triggering: CurrentHeight comparison and GameMode LoseRound.",
          "beforeStart": "Stage 1's five fixed cubes shoot reliably through Line Trace By Channel; a new BP_RisingBlock and controller already exist.",
          "commonMistake": "Randomising World Y without tracking occupied lanes causes two blocks to overlap. Reserve one of five fixed lanes instead.",
          "studentPromise": "Compile → Save → Play after each small change. Do not move on until that step's check passes.",
          "names": [
            {
              "name": "LaneIndex",
              "kind": "Variable",
              "owner": "BP_RisingBlock",
              "at": 1,
              "type": "Integer • default 0 • Expose on Spawn"
            },
            {
              "name": "CurrentHeight",
              "kind": "Variable",
              "owner": "BP_RisingBlock",
              "at": 1,
              "type": "Float • default 60"
            },
            {
              "name": "GrowthSpeed",
              "kind": "Variable",
              "owner": "BP_RisingBlock",
              "at": 1,
              "type": "Float • default 35"
            },
            {
              "name": "MaxHeight",
              "kind": "Variable",
              "owner": "BP_RisingBlock",
              "at": 1,
              "type": "Float • default 450"
            },
            {
              "name": "UpdateBlockVisual",
              "kind": "Function",
              "owner": "BP_RisingBlock",
              "at": 2
            },
            {
              "name": "Finished",
              "kind": "Variable",
              "owner": "BP_LoopsGameMode",
              "at": 3,
              "type": "Boolean • default false"
            },
            {
              "name": "DangerLine",
              "kind": "Placed Static Mesh Actor",
              "owner": "LoopsLevel (World Outliner)",
              "at": 4
            },
            {
              "name": "FreeLanes",
              "kind": "Variable",
              "owner": "BP_LoopsGameMode",
              "at": 5,
              "type": "Integer Array"
            },
            {
              "name": "SpawnTimerHandle",
              "kind": "Variable",
              "owner": "BP_LoopsGameMode",
              "at": 5,
              "type": "Timer Handle"
            },
            {
              "name": "SpawnOneBlock",
              "kind": "Function",
              "owner": "BP_LoopsGameMode",
              "at": 6
            },
            {
              "name": "PickIndex",
              "kind": "Local variable",
              "owner": "SpawnOneBlock Function",
              "at": 6,
              "type": "Integer"
            },
            {
              "name": "PickLane",
              "kind": "Local variable",
              "owner": "SpawnOneBlock Function",
              "at": 6,
              "type": "Integer"
            },
            {
              "name": "SpawnTick",
              "kind": "Custom Event",
              "owner": "BP_LoopsGameMode",
              "at": 8
            },
            {
              "name": "Hits",
              "kind": "Variable",
              "owner": "BP_LoopsGameMode",
              "at": 9,
              "type": "Integer • default 0"
            },
            {
              "name": "RegisterHit",
              "kind": "Function",
              "owner": "BP_LoopsGameMode",
              "at": 9
            },
            {
              "name": "HitLane",
              "kind": "Function input",
              "owner": "RegisterHit Function",
              "at": 9,
              "type": "Integer"
            },
            {
              "name": "LoseRound",
              "kind": "Custom Event",
              "owner": "BP_LoopsGameMode",
              "at": 11
            }
          ]
        },
        {
          "id": "rising-survival",
          "title": "3. Finish Rising Defence: survive 60 seconds, HUD and restart",
          "tier": "Essential",
          "outcome": "Survive a complete 60-second round without any block touching the red line. Hits and remaining time display live. Winning, losing and restarting are fully playable.",
          "steps": [
            {
              "title": "Add round time and victory state",
              "where": "BP_LoopsGameMode → Variables.",
              "do": "Create SecondsLeft (Integer default 60), Won (Boolean default false) and RoundTimerHandle (TimerHandle). Keep Finished, Hits, FreeLanes and SpawnTimerHandle from Stage 2. Compile.",
              "why": "The game now has explicit win and loss state, rather than indefinite survival.",
              "check": "On fresh Play SecondsLeft=60, Won=false and Finished=false.",
              "helpTopics": [
                "variable",
                "array"
              ],
              "actions": [
                "Open BP_LoopsGameMode → My Blueprint → Variables → +.",
                "Create VARIABLE SecondsLeft; choose Integer, Compile, Default Value=60.",
                "Create VARIABLE Won; choose Boolean, Compile, Default Value=false.",
                "Create VARIABLE RoundTimerHandle; choose Timer Handle.",
                "Keep existing Finished, Hits, FreeLanes and SpawnTimerHandle. Compile and Save."
              ]
            },
            {
              "title": "Start just one round timer",
              "where": "BP_LoopsGameMode → Event Graph → BeginPlay after SpawnTimerHandle is created.",
              "do": "Create Custom Event CountdownTick. In existing BeginPlay, AFTER the FreeLanes → initial SpawnOneBlock → SpawnTimerHandle chain, add Set Timer by Event(Time=1.0,Looping=true; delegate Create Event → CountdownTick). Promote Return Value to RoundTimerHandle. Do NOT add this timer to SpawnTick or BP_RisingBlock.",
              "why": "One countdown belongs to the whole round, not to every threat.",
              "check": "SecondsLeft remains 60 until CountdownTick is wired; no duplicate timers exist.",
              "helpTopics": [
                "variable",
                "custom-event"
              ],
              "actions": [
                "Open BP_LoopsGameMode → Event Graph.",
                "Add Custom Event named CountdownTick; leave its action wiring for the next task.",
                "Find BeginPlay → Set FreeLanes → SpawnOneBlock → Set Timer by Event (the spawn timer).",
                "After the spawn timer's WHITE output add ANOTHER Set Timer by Event.",
                "Set Time=1.0, Looping=true; RED Event delegate → Create Event → CountdownTick.",
                "Set RoundTimerHandle from the new timer Return Value.",
                "Compile and Save. These are exactly two gameplay timers: spawn and countdown."
              ]
            },
            {
              "title": "Count down safely and detect victory",
              "where": "BP_LoopsGameMode → CountdownTick Custom Event.",
              "do": "Wire CountdownTick → Branch(NOT Finished). On True set SecondsLeft = Max(0, SecondsLeft-1). Then Branch(SecondsLeft<=0). On True set Finished=true and Won=true, then Clear and Invalidate Timer by Handle(SpawnTimerHandle), then Clear and Invalidate Timer by Handle(RoundTimerHandle), then Print String('YOU HELD THE LINE!'). A win happens ONLY if the danger height was never reached.",
              "why": "Surviving long enough becomes a concrete and understandable goal.",
              "check": "With SecondsLeft temporarily set to 5, defending for five seconds wins once and no further blocks grow.",
              "helpTopics": [
                "custom-event",
                "timer"
              ],
              "actions": [
                "Open BP_LoopsGameMode → Event Graph → CountdownTick.",
                "From the red event WHITE output add Branch; Condition=NOT Finished.",
                "Branch TRUE → Set SecondsLeft; value=Max(Integer)(0, Get SecondsLeft - 1).",
                "After Set SecondsLeft WHITE output add another Branch; Condition=Get SecondsLeft <= 0.",
                "On TRUE add Set Finished=true → Set Won=true in WHITE execution order.",
                "After Set Won, add Clear and Invalidate Timer by Handle(SpawnTimerHandle).",
                "After that clear RoundTimerHandle with a second Clear and Invalidate Timer by Handle.",
                "Finally Print String YOU HELD THE LINE!. Leave FALSE outputs unused.",
                "Compile and Save."
              ]
            },
            {
              "title": "Stop the countdown when a block reaches the line",
              "where": "BP_LoopsGameMode → LoseRound event from Stage 2.",
              "do": "Keep LoseRound's Branch(NOT Finished) → Set Finished=true → Clear SpawnTimerHandle. After that, add Set Won=false and Clear and Invalidate Timer by Handle(RoundTimerHandle), then Print String('DEFENCE FAILED!'). All existing blocks now stop growing because their Tick checks Finished.",
              "why": "One clean ending stops both timers; pressing the mouse after defeat cannot increase Hits.",
              "check": "A block reaching the red line ends the round, the timer freezes, and Won stays false.",
              "helpTopics": [
                "timer",
                "branch"
              ],
              "actions": [
                "Open BP_LoopsGameMode → Event Graph → LoseRound.",
                "Keep the guard NOT Finished → Set Finished=true.",
                "After Set Finished add Set Won=false.",
                "Then Clear and Invalidate Timer by Handle(SpawnTimerHandle).",
                "Then Clear and Invalidate Timer by Handle(RoundTimerHandle).",
                "After clearing timers add Print String DEFENCE FAILED!.",
                "Remove any duplicated old clear/print nodes rather than running both versions.",
                "Compile and Save. A loss must stop both timers."
              ]
            },
            {
              "title": "Create a clean and non-blocking HUD",
              "where": "Content/Loops → User Interface → Widget Blueprint → User Widget.",
              "do": "Create WBP_RisingDefenceHUD. Add Text widgets named TimeText, HitsText and StatusText; tick Is Variable on each. Add a small instruction 'Left-click: shoot  •  R: restart'. Set the ROOT Canvas Panel Visibility to Not Hit-Testable (Self & All Children). Position the HUD away from the playable columns. Set StatusText default 'KEEP BLOCKS BELOW THE RED LINE'. Compile.",
              "why": "The HUD must not intercept the gun's Visibility ray or the Enhanced Input firing action.",
              "check": "The game view stays unobstructed; widgets are readable and cannot catch the mouse.",
              "helpTopics": [
                "variable",
                "widget"
              ],
              "actions": [
                "Open Content Drawer → Content/Loops.",
                "Right-click → User Interface → Widget Blueprint → User Widget.",
                "Name the WIDGET ASSET WBP_RisingDefenceHUD and open Designer.",
                "Add Text widgets named TimeText, HitsText and StatusText. Tick Is Variable on all three.",
                "Set their placeholders Time: 60, Hits: 0, KEEP BLOCKS BELOW THE RED LINE.",
                "Add another small Text instruction: Left-click: shoot • R: restart.",
                "Select ROOT Canvas Panel → Details → Visibility=Not Hit-Testable (Self & All Children).",
                "Position text away from targets. Compile and Save."
              ]
            },
            {
              "title": "Refresh the HUD without making four separate timers",
              "where": "WBP_RisingDefenceHUD → Graph.",
              "do": "Create Custom Event RefreshHUD. Use Get Game Mode → Cast To BP_LoopsGameMode. On Cast Success use Get SecondsLeft → Format Text('Time: {Value}') → Set Text(TimeText), then Get Hits → Format Text('Hits: {Value}') → Set Text(HitsText), wiring white execution sequentially. Then Branch(Get Finished). On False set StatusText='KEEP BLOCKS BELOW THE RED LINE'. On True use a Branch(Get Won) to set StatusText='YOU HELD THE LINE!  Press R' or 'DEFENCE FAILED!  Press R'. Compile.",
              "why": "A single UI refresh displays consistent countdown and score from the existing authoritative GameMode.",
              "check": "RefreshHUD updates Time, Hits and correct win/loss text.",
              "helpTopics": [
                "custom-event",
                "binding"
              ],
              "actions": [
                "Open WBP_RisingDefenceHUD → Event Graph.",
                "Right-click → Add Custom Event named RefreshHUD.",
                "From its WHITE output add Cast To BP_LoopsGameMode; Object=Get Game Mode.",
                "After Cast Success WHITE add Set Text on TimeText; use Get SecondsLeft → Format Text Time: {Value}.",
                "Then Set Text on HitsText; use Get Hits → Format Text Hits: {Value}.",
                "After HitsText Set Text add Branch with Get Finished (from blue GameMode cast) as Condition.",
                "Branch FALSE → Set Text(StatusText, KEEP BLOCKS BELOW THE RED LINE).",
                "Branch TRUE → add second Branch, Condition=Get Won.",
                "Won TRUE → Set Text(StatusText, YOU HELD THE LINE! Press R).",
                "Won FALSE → Set Text(StatusText, DEFENCE FAILED! Press R).",
                "Compile and Save."
              ]
            },
            {
              "title": "Run one lightweight HUD refresh timer",
              "where": "WBP_RisingDefenceHUD → Event Construct.",
              "do": "Event Construct → call RefreshHUD once, then Set Timer by Event(Time=0.25, Looping=true; delegate Create Event → RefreshHUD). This timer is UI-only and belongs to the Widget. It must NOT call SpawnOneBlock or change the GameMode's countdown.",
              "why": "Separating UI repaint from game rules prevents strange repeated spawns and time jumps.",
              "check": "The HUD reflects game state while the round continues.",
              "helpTopics": [
                "custom-event",
                "timer"
              ],
              "actions": [
                "Open WBP_RisingDefenceHUD → Event Graph → Event Construct.",
                "From Construct WHITE output call RefreshHUD once.",
                "From RefreshHUD WHITE output add Set Timer by Event.",
                "Set Time=0.25, Looping=true; RED Event delegate → Create Event → RefreshHUD.",
                "Compile and Save. This HUD timer never spawns blocks or changes SecondsLeft."
              ]
            },
            {
              "title": "Put the HUD onto the existing controller",
              "where": "BP_LoopsPlayerController → Event BeginPlay.",
              "do": "Keep the ONE BeginPlay chain from Stage 1: Show Mouse Cursor → Set Input Mode Game And UI → Set View Target with Blend → Add Mapping Context(IMC_RisingDefence). AFTER Add Mapping Context, add Create Widget(Class=WBP_RisingDefenceHUD, Owning Player=Self) → Add to Viewport. Do not create another controller or multiple HUD widgets.",
              "why": "A single PlayerController continues to own firing, camera and UI.",
              "check": "Time and Hits appear, and line-trace gun still hits the growing blocks.",
              "helpTopics": [
                "input",
                "widget"
              ],
              "actions": [
                "Open BP_LoopsPlayerController → Event Graph → its ONE BeginPlay chain.",
                "Keep Show Mouse Cursor → Set Input Mode Game and UI → Set View Target with Blend → Add Mapping Context(IMC_RisingDefence).",
                "After Add Mapping Context WHITE output add Create Widget(Class=WBP_RisingDefenceHUD, Owning Player=Self).",
                "After Create Widget WHITE output add Add to Viewport, Target=Create Widget Return Value.",
                "Compile and Save. Keep the existing IA_RisingFire and line trace unchanged."
              ]
            },
            {
              "title": "Add R to restart cleanly",
              "where": "Content/Loops → Input assets and BP_LoopsPlayerController.",
              "do": "Create Input Action IA_RisingRestart (Digital). In the EXISTING IMC_RisingDefence map IA_RisingRestart to Keyboard R. In BP_LoopsPlayerController add IA_RisingRestart Started → Open Level(by Name), using Get Current Level Name (Remove Prefix String=true) into Level Name. Do NOT call SpawnOneBlock or reset arrays by hand; reloading the map resets everything.",
              "why": "Restarting the level is safer than attempting to manually reset all active Actors and timers.",
              "check": "Pressing R after win or loss restarts with 60 seconds, Hits=0, one growing block and an empty success/fail result.",
              "helpTopics": [
                "input",
                "array"
              ],
              "actions": [
                "Open Content Drawer → Content/Loops.",
                "Create Input Action asset IA_RisingRestart, Value Type=Digital(Boolean).",
                "Open EXISTING Input Mapping Context IMC_RisingDefence.",
                "Add mapping IA_RisingRestart → Keyboard R; Save.",
                "Open BP_LoopsPlayerController → Event Graph; add IA_RisingRestart action event.",
                "From its Started WHITE output add Open Level (by Name).",
                "Add Get Current Level Name with Remove Prefix String=true; connect to Open Level → Level Name.",
                "Compile and Save. R should reload the level without manually resetting variables."
              ]
            },
            {
              "title": "Test both endings using a five-second test",
              "where": "LoopsLevel → BP_LoopsGameMode Class Defaults → Play.",
              "do": "Temporarily set SecondsLeft default=5 and test a WIN by shooting until the timer reaches zero. Then keep SecondsLeft=5, temporarily set BP_RisingBlock MaxHeight default=90 and test a LOSS when the block grows to that height. Restore SecondsLeft=60 and MaxHeight=450, Compile and Save BOTH Blueprints. Test R after both endings.",
              "why": "Short controlled tests prove all end-state paths without waiting for full survival rounds.",
              "check": "Both endings occur exactly once, R resets correctly, and final saved values are 60 seconds and 450cm.",
              "helpTopics": [
                "debug"
              ],
              "actions": [
                "Open BP_LoopsGameMode → SecondsLeft variable default; TEMPORARILY set 5 and Compile.",
                "Open LoopsLevel and Play. Keep all blocks below the line for five seconds.",
                "Check YOU HELD THE LINE! displays exactly once; press R to restart.",
                "Keep SecondsLeft=5. Open BP_RisingBlock → MaxHeight default and TEMPORARILY set 90.",
                "Play without firing. Check DEFENCE FAILED! displays; press R to restart.",
                "Stop Play; RESTORE SecondsLeft default=60 and MaxHeight default=450.",
                "Compile and Save BOTH Blueprints."
              ]
            },
            {
              "title": "Run a complete 60-second survival attempt",
              "where": "LoopsLevel → Play in Editor.",
              "do": "Play a full run with normal values. Watch that fresh threats appear in random lanes, shooting releases them, Hits rises and the limit line is visible. Win only after 60 seconds without a breach. Intentionally let one reach the line in a second run and confirm you lose. The score is the number of blocks shot, so friends can replay to beat each other's score.",
              "why": "This is the minimum finished game for the jam; no optional stage is required.",
              "check": "Random rise → line-trace fire → score → danger-height fail → 60-second win → R replay all work together.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open LoopsLevel and press Play with final values.",
                "For 60 seconds shoot randomly growing blocks before any reaches the red line.",
                "Check Hits increases once per block, time counts down and new blocks appear only in free lanes.",
                "Confirm YOU HELD THE LINE! after surviving; press R to restart.",
                "Now intentionally do not shoot until a block reaches the red line.",
                "Confirm DEFENCE FAILED!, no more spawns and a frozen countdown.",
                "Press R again and verify a new 60-second round starts."
              ]
            }
          ],
          "check": "The game has a 60-second survival victory, a single-height breach loss, live score/time, an unobtrusive HUD, one spawn timer and R restart.",
          "fix": "Firing stops after HUD: Canvas root must be Not Hit-Testable (Self & All Children), and controller retains IMC_RisingDefence. Timer doubles: only ONE RoundTimerHandle from BeginPlay. Blocks keep growing after defeat: BP_RisingBlock Tick checks NOT Finished. R fails: check IA_RisingRestart mapping and Open Level.Get Current Level Name. Reset temporary 5s/90cm values.",
          "beforeStart": "Stage 2's random rising blocks, lane recycling and red-line fail state all work.",
          "commonMistake": "Do not put the countdown in SpawnOneBlock. Spawn, growth, countdown and HUD each have ONE owner.",
          "studentPromise": "Compile → Save → Play after each small change. Do not move on until that step's check passes.",
          "names": [
            {
              "name": "SecondsLeft",
              "kind": "Variable",
              "owner": "BP_LoopsGameMode",
              "at": 1,
              "type": "Integer • default 60"
            },
            {
              "name": "Won",
              "kind": "Variable",
              "owner": "BP_LoopsGameMode",
              "at": 1,
              "type": "Boolean • default false"
            },
            {
              "name": "RoundTimerHandle",
              "kind": "Variable",
              "owner": "BP_LoopsGameMode",
              "at": 1,
              "type": "Timer Handle"
            },
            {
              "name": "CountdownTick",
              "kind": "Custom Event",
              "owner": "BP_LoopsGameMode",
              "at": 2
            },
            {
              "name": "WBP_RisingDefenceHUD",
              "kind": "Widget Blueprint asset",
              "owner": "Content/Loops",
              "at": 5
            },
            {
              "name": "TimeText",
              "kind": "Text widget • Is Variable",
              "owner": "WBP_RisingDefenceHUD",
              "at": 5
            },
            {
              "name": "HitsText",
              "kind": "Text widget • Is Variable",
              "owner": "WBP_RisingDefenceHUD",
              "at": 5
            },
            {
              "name": "StatusText",
              "kind": "Text widget • Is Variable",
              "owner": "WBP_RisingDefenceHUD",
              "at": 5
            },
            {
              "name": "RefreshHUD",
              "kind": "Custom Event",
              "owner": "WBP_RisingDefenceHUD",
              "at": 6
            },
            {
              "name": "IA_RisingRestart",
              "kind": "Input Action asset",
              "owner": "Content/Loops",
              "at": 9
            }
          ]
        },
        {
          "id": "rising-danger",
          "title": "4. Creative: fast red blocks add target priority",
          "tier": "Creative",
          "outcome": "Some spawned blocks are red and grow much faster, forcing players to prioritise urgent targets without changing the working survival rules.",
          "steps": [
            {
              "title": "Create a danger-block flag",
              "where": "BP_RisingBlock → Variables.",
              "do": "Add FastThreat Boolean default false; tick Instance Editable and Expose on Spawn. In Content/Loops create a Material asset M_RisingDanger (red Base Color) and Save; assign it to BlockMesh in Stage 4 Step 2, not to the normal blocks now. Compile so FastThreat becomes a Spawn Actor input pin.",
              "why": "One actor Blueprint supports normal and urgent threats.",
              "check": "Spawn Actor BP_RisingBlock shows the FastThreat Boolean input.",
              "helpTopics": [
                "variable",
                "material"
              ],
              "actions": [
                "Open BP_RisingBlock → My Blueprint → Variables → +.",
                "Create VARIABLE FastThreat; choose Boolean, Compile, Default Value=false.",
                "Tick Instance Editable and Expose on Spawn; Compile again.",
                "Open Content Drawer → Content/Loops. Right-click → Material; name the MATERIAL ASSET M_RisingDanger.",
                "Open it, set Base Color to bright red, Save. Keep normal block material unchanged.",
                "Compile and Save BP_RisingBlock."
              ]
            },
            {
              "title": "Change speed and appearance when fast",
              "where": "BP_RisingBlock → Event BeginPlay BEFORE UpdateBlockVisual.",
              "do": "Avoid merging two Branch execution paths. Instead, in Event BeginPlay use one straight WHITE execution chain: Set GrowthSpeed → BlockMesh.Set Material(Element Index=0) → UpdateBlockVisual. Feed Set GrowthSpeed with a Select Float node controlled by FastThreat (False=35, True=60). Feed Set Material with a Select Material node controlled by FastThreat (False=normal material, True=red warning material). Compile; do not change the Event Tick growth maths.",
              "why": "Players get a readable reason to prioritise certain columns.",
              "check": "Fast red threats visibly stretch faster than normal ones, and all blocks start on the floor.",
              "helpTopics": [
                "branch",
                "get-set"
              ],
              "actions": [
                "Open BP_RisingBlock → Event Graph → Event BeginPlay.",
                "Find its existing call to UpdateBlockVisual; you will add two nodes BEFORE it.",
                "From FastThreat (Get) add Select Float, False=35, True=60.",
                "Add Set GrowthSpeed; connect Select Float result to its value pin.",
                "From FastThreat (Get) add Select Material, False=normal block material, True=M_RisingDanger.",
                "Drag BlockMesh from Components as Get, then add Set Material(Element Index=0), using Select Material as its material input.",
                "Wire BeginPlay WHITE → Set GrowthSpeed → Set Material → the EXISTING UpdateBlockVisual call.",
                "Compile, Save, Play. Normal and fast blocks should use different colours and heights."
              ]
            },
            {
              "title": "Choose a minority of fast blocks",
              "where": "BP_LoopsGameMode → SpawnOneBlock → Spawn Actor Class=BP_RisingBlock.",
              "do": "Before Spawn Actor, use Random Integer in Range(1,4) == 1 and connect the Boolean to FastThreat on the SAME Spawn Actor node. Leave the five FreeLanes array, spawn timing, LaneIndex pin and coordinates untouched.",
              "why": "Only about one in four threats is dangerous, creating variation without more actors or timers.",
              "check": "A few blocks spawn red; most stay normal; no lane overlaps.",
              "helpTopics": [
                "array",
                "spawn"
              ],
              "actions": [
                "Open BP_LoopsGameMode → SpawnOneBlock Function.",
                "Find the existing Spawn Actor From Class(BP_RisingBlock).",
                "Add Random Integer in Range with Min=1, Max=4.",
                "From its output add Integer == Integer, other input=1.",
                "Connect the resulting Boolean to Spawn Actor → FastThreat (compile BP_RisingBlock if pin missing).",
                "Keep the existing LaneIndex, FreeLanes and Spawn Transform connections unchanged.",
                "Compile, Save, Play. About one in four blocks should be red."
              ]
            },
            {
              "title": "Retest the full game",
              "where": "LoopsLevel → Play.",
              "do": "Defend for 60 seconds against normal and red blocks. Let a red one reach the line on another attempt and check LoseRound still runs. If the game is too hard, change FastThreat GrowthSpeed from 60 to 45; if easy, 65. Do not change the maximum 450cm unless the camera/red line are adjusted together.",
              "why": "A working game matters more than maximal difficulty.",
              "check": "Red blocks are shootable, can lose the round, and never break the score or restart.",
              "helpTopics": [
                "playtest"
              ],
              "actions": [
                "Open LoopsLevel and Play.",
                "Shoot normal and red blocks; confirm both count as one Hit and free their lane.",
                "Let a red block reach DangerLine; verify DEFENCE FAILED! and the frozen clock.",
                "If too hard, open BP_RisingBlock and change the red Select Float True input 60→45.",
                "If too easy, try True input 65. Keep normal False input 35.",
                "Compile, Save, and complete one fair 60-second playtest."
              ]
            }
          ],
          "check": "Normal and faster red rising threats share the same five-lane spawn, trace-hit and danger-line logic.",
          "fix": "All red: check Random Integer range=1..4 and equality to 1. Red but slow: initialise GrowthSpeed before calling UpdateBlockVisual. Cannot shoot red: keep BlockMesh Visibility collision Block, and the red material visual-only.",
          "beforeStart": "The complete base 60-second game works. Back it up first.",
          "commonMistake": "Do not create BP_RedBlock as a second class with duplicated shooting/growth logic; one BP_RisingBlock and FastThreat flag are simpler.",
          "studentPromise": "Compile → Save → Play after each small change. Do not move on until that step's check passes.",
          "names": [
            {
              "name": "FastThreat",
              "kind": "Variable",
              "owner": "BP_RisingBlock",
              "at": 1,
              "type": "Boolean • default false • Expose on Spawn"
            },
            {
              "name": "M_RisingDanger",
              "kind": "Material asset",
              "owner": "Content/Loops",
              "at": 1
            }
          ]
        },
        {
          "id": "rising-polish",
          "title": "5. Creative: make the blaster feel like a game",
          "tier": "Creative",
          "outcome": "Improve feedback, readability and replay motivation while retaining the tested line-trace gun and survival balance.",
          "steps": [
            {
              "title": "Give the game a theme",
              "where": "Artist/designer workstation → Photoshop, 3ds Max or material editor.",
              "do": "Choose ONE achievable theme: defensive laser turret, anti-virus defence, robot factory overload or alien crystal containment. Make a distinctive block material and a readable red danger line; export PNG or FBX as needed. Programmer imports copies into local Unreal.",
              "why": "The same gameplay loop becomes an original student-designed game.",
              "check": "Player can tell at a glance which blocks are threats and what line matters.",
              "helpTopics": [
                "material"
              ],
              "actions": [
                "Choose ONE theme: laser turret, antivirus defence, robot factory or alien crystals.",
                "Open Content/Loops → BP_RisingBlock and decide which material needs replacing.",
                "Create a Material asset for the theme and adjust its Base Color.",
                "Assign it to BlockMesh; keep FastThreat's red warning material distinct if Stage 4 was completed.",
                "Play and confirm normal and danger targets remain clearly different."
              ]
            },
            {
              "title": "Give firing instant feedback",
              "where": "BP_LoopsPlayerController → existing IA_RisingFire path.",
              "do": "After the Line Trace By Channel on hit-TRUE, add a short Play Sound 2D or Spawn Emitter at Location (Hit Result Impact Point) if available. You may print '+1' for successful hits during testing. Leave the trace endpoint, hit cast and BreakBlock calls untouched. Do not play score feedback when Line Trace returns false.",
              "why": "Without sensory confirmation, a line-trace gun can feel like ordinary cursor clicking.",
              "check": "Successful hits produce immediate feedback; misses do not award Hits.",
              "helpTopics": [
                "input",
                "trace"
              ],
              "actions": [
                "Open BP_LoopsPlayerController → Event Graph → IA_RisingFire line trace.",
                "Find Line Trace By Channel → Return Value TRUE Branch.",
                "After a confirmed BP_RisingBlock Cast Success, add Play Sound 2D with a short imported hit sound (optional), THEN call BreakBlock.",
                "If no sound asset is available, use Print String +1 temporarily instead.",
                "Do NOT play hit effects on Trace False or Cast Failed paths.",
                "Compile, Save and test: every actual hit gives one feedback event."
              ]
            },
            {
              "title": "Show urgency without stealing mouse input",
              "where": "WBP_RisingDefenceHUD and LoopsLevel.",
              "do": "Add a clear 'DANGER HEIGHT' label near the red line and make it visible from the fixed camera. Keep the HUD Canvas non-hit-testable. Test all five lanes with the tallest blocks: none should be hidden by Score, Time or instruction labels.",
              "why": "The player must understand when the round is about to end.",
              "check": "The win/loss rule is readable even to someone who has never seen the tutorial.",
              "helpTopics": [
                "ui-pass"
              ],
              "actions": [
                "Open LoopsLevel and select the placed DangerLine actor.",
                "Add a readable world text label DANGER HEIGHT or use the existing HUD StatusText.",
                "Ensure the label is visible from Cam_RisingDefence without covering the blocks.",
                "Open WBP_RisingDefenceHUD → Designer, select ROOT Canvas Panel.",
                "Keep Visibility=Not Hit-Testable (Self & All Children) so mouse clicks pass through.",
                "Play and test shooting all five lanes."
              ]
            },
            {
              "title": "Balance replay and difficulty",
              "where": "BP_LoopsGameMode Class Defaults and BP_RisingBlock defaults.",
              "do": "Playtest with another pair. Starter settings: Spawn interval=1.5s, GrowthSpeed=35cm/s, MaxHeight=450cm, round=60s. For easier play change GrowthSpeed to 25; for harder play try 45 or Spawn interval=1.1. Change ONE number at a time and run a full test; keep FreeLanes protection.",
              "why": "Tuning is a real design task and makes the game replayable without complex new systems.",
              "check": "Another student can survive at least one fair run, lose predictably, and explain how their score improved.",
              "helpTopics": [
                "array"
              ],
              "actions": [
                "Open LoopsLevel and play once with defaults: spawn 1.5s, normal GrowthSpeed 35, limit 450, round 60s.",
                "Have another student play and tell you if the game is too easy or too hard.",
                "For easier play, open BP_RisingBlock → GrowthSpeed Default Value and try 25.",
                "For harder play, try GrowthSpeed=45 OR change BP_LoopsGameMode spawn Timer Time=1.1.",
                "Change ONE value per test and restore any unsuccessful adjustment.",
                "Compile, Save and check one full victory and one loss."
              ]
            },
            {
              "title": "Prepare the showcase build",
              "where": "LoopsLevel → Play in Editor/Package Project.",
              "do": "Prepare a 2–5 minute demo or packaged Windows build. Explain how the original Loops tutorial created repeated objects, how your timer randomly selects FreeLanes, how a Line Trace By Channel shoots targets, and why you tuned the height limit. Demonstrate win, loss and R restart.",
              "why": "Showing the transformation from a spawn loop to a finished survival game provides genuine games-development evidence.",
              "check": "The project runs reliably end-to-end, with original assets credited and before/after screenshots.",
              "helpTopics": [
                "trace",
                "array"
              ],
              "actions": [
                "Open LoopsLevel and Save all Blueprints and the map.",
                "Run a complete game; demonstrate shooting, random growth, Hits, danger-line loss and 60-second survival win.",
                "Press R after each ending to prove restart works.",
                "Capture screenshots of an early round, near-danger block and win/loss HUD.",
                "If college PCs permit, package the Windows game; otherwise demonstrate in Play In Editor.",
                "Explain which original For Loop idea was reused and which new line trace mechanic makes the game interactive."
              ]
            }
          ],
          "check": "Rising Defence feels visually clear and responsive, has an understandable objective and is reliable for the game-jam showcase.",
          "fix": "Hiding targets: keep HUD canvas non-hit-testable and recenter the camera. No shot impact: use the trace Out Hit. Difficulty swings: change only one variable, restore a saved build if unsure.",
          "beforeStart": "The three Essential Rising Defence stages already form a full game.",
          "commonMistake": "Visual polish comes AFTER working spawn, gun, losing height rule and 60-second victory.",
          "studentPromise": "Compile → Save → Play after each small change. Do not move on until that step's check passes.",
          "names": [
            {
              "name": "BlockMesh",
              "kind": "Existing Static Mesh component",
              "owner": "BP_RisingBlock",
              "at": 0
            },
            {
              "name": "WBP_RisingDefenceHUD",
              "kind": "Existing Widget Blueprint asset",
              "owner": "Content/Loops",
              "at": 0
            }
          ]
        }
      ],
      "minimumStage": "rising-survival",
      "minimumOutcome": "A complete 60-second shooting-gallery survival game: five random spawn lanes, rising targets, a real line-trace blaster, a red 450cm lose-height limit, live Hits/Time HUD, win and loss states and R restart."
    }
  ]
};
