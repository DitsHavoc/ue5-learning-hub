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
                "Open BowlingLevel. In World Outliner count the BP_BowlingPin ACTORS. Write down the number.",
                "Open BP_BowlingGameMode → My Blueprint → Variables → +.",
                "Create PinsDown: type Integer, Compile, Default Value 0.",
                "Create Score: type Integer, Compile, Default Value 0.",
                "Create GoalPins: type Integer, Compile, Default Value = the pin count you wrote down.",
                "Create RoundFinished: type Boolean, Compile, Default Value false (box unchecked).",
                "Compile and Save BP_BowlingGameMode."
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
                "Open BP_BowlingGameMode → My Blueprint → Functions → +.",
                "Name the new FUNCTION RecordPin and double-click it.",
                "Select the purple RecordPin Function Entry node.",
                "In Details → Inputs click +. Name the new INPUT PIN PinValue.",
                "Set PinValue type Integer and click Compile.",
                "Do not add PinValue to the Variables list. It is an INPUT to RecordPin."
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
                "Open BP_BowlingGameMode → RecordPin function graph.",
                "Drag RoundFinished from Variables into the graph. Choose Get RoundFinished.",
                "Drag from the red Boolean output and search NOT Boolean.",
                "Right-click empty space, add Branch.",
                "Connect RecordPin purple Function Entry WHITE output → Branch WHITE input.",
                "Connect NOT Boolean red output → Branch red Condition.",
                "Leave Branch False unconnected."
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
                "Stay in BP_BowlingGameMode → RecordPin.",
                "Drag PinsDown from Variables into the graph; choose Set PinsDown.",
                "Drag PinsDown again; choose Get PinsDown.",
                "From Get PinsDown green Integer pin add + (Integer). Set the other + input to 1.",
                "Connect + output to Set PinsDown green value.",
                "Connect the previous Branch TRUE WHITE pin to Set PinsDown WHITE input.",
                "Drag Score from Variables into the graph twice: one Get Score and one Set Score.",
                "From Get Score green pin add + (Integer). Connect the purple RecordPin ENTRY pin PinValue into the other + input.",
                "Connect the + result to Set Score green value.",
                "Connect Set PinsDown WHITE output → Set Score WHITE input.",
                "After Set Score add Print String. Convert Get Score to String and connect it to Print String In String.",
                "Compile and Save. Every pin should now raise both counters exactly once."
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
                "Open BP_BowlingGameMode → RecordPin.",
                "Find the Print String node after Set Score. Use its WHITE output to trigger a NEW Branch (keep the earlier NOT RoundFinished Branch).",
                "Drag PinsDown as Get; drag GoalPins as Get.",
                "Drag from Get PinsDown green pin and choose >= (Integer). Connect GoalPins to its second input.",
                "Connect >= red Boolean result to the NEW Branch → Condition.",
                "Connect Print String WHITE output → new Branch WHITE input.",
                "From NEW Branch True add Set RoundFinished, value true.",
                "After Set RoundFinished add Print String containing ALL PINS DOWN!",
                "Leave new Branch False unconnected. Compile and Save."
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
                "Open BP_BowlingPin → My Blueprint → Variables → +.",
                "Create VARIABLE Counted. Set type Boolean, Compile, Default Value=false.",
                "Open BP_BowlingPin → Event Graph.",
                "Add Event Tick (only if one does not already exist).",
                "From Event Tick WHITE output add Branch.",
                "Drag Counted into graph as Get. From its red output add NOT Boolean and wire that into Branch Condition.",
                "Use Branch True for the following steps. Branch False does nothing. Compile."
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
                "Open BP_BowlingPin → Event Graph → NOT Counted Branch True.",
                "In Components select your EXISTING Model Static Mesh (do not create another).",
                "Drag Model from Components into Event Graph as Get.",
                "Drag from Model BLUE pin → Get Up Vector.",
                "From Get Up Vector output add Dot Product (Vector).",
                "Set the other Dot Product input to X=0, Y=0, Z=1.",
                "Add Print String as a TEMPORARY node on Branch True WHITE output.",
                "Connect Dot Product float result to Print String In String (Unreal adds a conversion node).",
                "Compile and Play. An upright pin should print a value close to 1.",
                "Stop Play and delete ONLY the temporary Print String. Leave Get Up Vector and Dot Product nodes."
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
                "Open BP_BowlingPin → Event Graph where Dot Product is located.",
                "From Dot Product float output drag a pin and search < (Float).",
                "Set comparison B to 0.65.",
                "Right-click empty space → Branch.",
                "Connect the FIRST NOT Counted Branch True WHITE output → this second Branch WHITE input.",
                "Connect the Float < Float red output → new Branch Condition.",
                "Leave the new Branch False unconnected. Compile and Save."
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
                "Open BP_BowlingPin → Event Graph → second Branch TRUE output.",
                "Drag Counted variable into graph as Set. Tick the value true.",
                "Connect second Branch True WHITE output → Set Counted WHITE input.",
                "After Set Counted add Cast To BP_BowlingGameMode.",
                "Right-click → Get Game Mode. Connect its blue Return Value → Cast Object.",
                "Connect Set Counted WHITE output → Cast WHITE input.",
                "From Cast blue As BP_BowlingGameMode pin search Call RecordPin.",
                "Set RecordPin PinValue input to 1.",
                "Connect Cast Success WHITE output → RecordPin WHITE input.",
                "Compile and Save."
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
                "Open BowlingLevel and press Play.",
                "Press Space to bowl once. Watch the score Print String.",
                "Knock over one pin. Score should become 1 and PinsDown should become 1.",
                "Keep watching the same fallen pin for several seconds; the counters must NOT climb again.",
                "Stop Play and Save. If it counts repeatedly, check the Counted variable and the Set Counted=true node BEFORE RecordPin."
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
                "Open BowlingLevel and Play again.",
                "Aim at a different pin and press Space; each new fallen pin adds 1.",
                "To test a finished round early, SAVE A COPY of the level and use only two placed BP_BowlingPin actors in that copy.",
                "In BP_BowlingGameMode temporarily set GoalPins Default Value=2. Compile and Play the copy.",
                "Knock over both pins. RoundFinished should become true and ALL PINS DOWN! should appear.",
                "Restore GoalPins to the REAL pin count from your main level, reopen your main BowlingLevel, Compile and Save."
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
                "Open BP_BowlingBall → Viewport → Components.",
                "Select the existing sphere Static Mesh named Model. DO NOT add another mesh.",
                "If Model is under DefaultSceneRoot, drag Model onto DefaultSceneRoot until Model becomes the root component.",
                "Compile and Save. Open BowlingLevel and check the ball still starts at the near end of the lane.",
                "Play once: Left/Right should still move the ball and Space should still throw it."
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
                "Name the new VARIABLE StartingBallTransform. Choose type Transform; Compile.",
                "Open Event Graph → existing Event BeginPlay.",
                "Right-click → Get Actor Transform (Self).",
                "Drag StartingBallTransform from Variables into the graph as Set.",
                "Connect Get Actor Transform result → Set StartingBallTransform Transform value.",
                "Connect Event BeginPlay WHITE output → Set StartingBallTransform WHITE input.",
                "If BeginPlay already goes into other nodes, keep them: continue its WHITE chain to Set StartingBallTransform or insert Set into that chain.",
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
                "Right-click empty space → Add Custom Event. Name the red EVENT ResetBall.",
                "From Components drag the existing Model into Event Graph as Get.",
                "From ResetBall WHITE output add Set Simulate Physics. Set Target=Model and Simulate=false.",
                "From that WHITE output add Set Actor Transform, Target=Self.",
                "Drag StartingBallTransform as Get and connect it to Set Actor Transform New Transform.",
                "Set Sweep=false and Teleport=true. Compile."
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
                "Stay in BP_BowlingBall → ResetBall after Set Actor Transform.",
                "Drag Model from Components as Get.",
                "From Set Actor Transform WHITE output add Set Simulate Physics. Target=Model, Simulate=true.",
                "From its WHITE output add Set Physics Linear Velocity. Target=Model, New Vel=(0,0,0).",
                "From that WHITE output add Set Physics Angular Velocity in Degrees. Target=Model, New Ang Vel=(0,0,0).",
                "Compile and Save."
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
                "Open BP_BowlingPlayerController → Event Graph → Event BeginPlay.",
                "Find existing Add Mapping Context(BowlingInputs), Get Actor of Class(BP_BowlingBall), Set BowlingBall chain.",
                "Check Get Actor of Class has Actor Class=BP_BowlingBall.",
                "Connect its BLUE Return Value → Set BowlingBall's BLUE object value pin.",
                "Do NOT add another BowlingBall Variable. Use the one from your starter tutorial.",
                "In BowlingLevel there should be ONE BP_BowlingBall Actor.",
                "Compile, Play and confirm Left/Right and Space still operate it."
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
                "Create ThrowsUsed: Integer, Compile, Default Value=0.",
                "Create MaxThrows: Integer, Compile, Default Value=3.",
                "Create IsBallInMotion: Boolean, Compile, Default Value=false.",
                "Keep the original BowlingBall object-reference variable unchanged.",
                "Compile and Save."
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
                "Open BP_BowlingPlayerController → Event Graph → existing IA_Move event.",
                "Find the WHITE execution wire that directly calls Move on BowlingBall; disconnect only that wire.",
                "Add Cast To BP_BowlingGameMode; connect its Object pin to Get Game Mode Return Value.",
                "From the cast BLUE As BP_BowlingGameMode pin, Get RoundFinished.",
                "Drag IsBallInMotion as Get. Add NOT Boolean from each Boolean value.",
                "Connect the two NOT values to AND(Boolean).",
                "Add Branch. Connect AND result → Branch Condition.",
                "Connect original IA_Move WHITE output → Cast WHITE input → Cast Success → Branch WHITE input.",
                "Connect Branch TRUE WHITE output → ORIGINAL Move call WHITE input.",
                "Compile. This blocks movement only during a roll or after the round ends."
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
                "Stay in BP_BowlingPlayerController → Event Graph.",
                "Locate the EXISTING IA_Bowl Input Action Event.",
                "Use its Started WHITE pin (not Triggered).",
                "Disconnect the WHITE wire that used to call Bowl directly. Keep the Bowl node and its BowlingBall target.",
                "From Started WHITE output add Cast To BP_BowlingGameMode; Object=Get Game Mode.",
                "From the Cast BLUE output Get RoundFinished; add NOT Boolean.",
                "From local IsBallInMotion Variable Get IsBallInMotion; add NOT Boolean.",
                "Keep both Boolean outputs ready for the next task."
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
                "Stay in BP_BowlingPlayerController → IA_Bowl Started path.",
                "Drag ThrowsUsed and MaxThrows from Variables as Get.",
                "From ThrowsUsed green pin add < (Integer); connect MaxThrows to other input.",
                "Add AND Boolean with THREE input pins (expand the node with Add Pin).",
                "Connect NOT RoundFinished, NOT IsBallInMotion and ThrowsUsed < MaxThrows to those inputs.",
                "Add Branch. Connect Cast Success WHITE output → Branch WHITE input.",
                "Connect AND red result → Branch Condition.",
                "Leave Branch False empty. Branch True will call Bowl in the next task."
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
                "Still in BP_BowlingPlayerController → IA_Bowl Branch TRUE.",
                "Drag ThrowsUsed as Get and Set.",
                "Add Integer + node. Get ThrowsUsed + 1 → Set ThrowsUsed green value pin.",
                "Connect Branch True WHITE → Set ThrowsUsed WHITE.",
                "Drag IsBallInMotion as Set. Tick its Boolean value true.",
                "Connect Set ThrowsUsed WHITE output → Set IsBallInMotion WHITE input.",
                "Connect Set IsBallInMotion WHITE output → ORIGINAL Bowl call WHITE input.",
                "Keep Bowl BLUE Target connected to your saved BowlingBall reference.",
                "Compile and Play. Press Space once, then again quickly: only one throw is counted."
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
                "Add Delay with Duration=4.0 and connect Bowl WHITE output → Delay WHITE input.",
                "In empty Event Graph space right-click → Add Custom Event. Name it FinishThrow.",
                "From FinishThrow red Event node WHITE output add Set IsBallInMotion=false.",
                "From Delay Completed WHITE output drag and search CALL FinishThrow (the event call; NOT a second red Event).",
                "Compile and Save. Never place Delay inside a Function."
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
                "Open BP_BowlingPlayerController → FinishThrow red Event.",
                "After Set IsBallInMotion=false, add Cast To BP_BowlingGameMode with Object=Get Game Mode.",
                "Get RoundFinished from the Cast blue output; apply NOT Boolean.",
                "Get ThrowsUsed and MaxThrows; compare ThrowsUsed < MaxThrows.",
                "Combine NOT RoundFinished AND ThrowsUsed < MaxThrows.",
                "Add Branch: Cast Success WHITE → Branch WHITE; AND red output → Branch Condition.",
                "Drag the EXISTING BowlingBall Variable into the graph as Get; from its BLUE pin CALL ResetBall.",
                "Connect Branch TRUE WHITE output → ResetBall WHITE input.",
                "Leave Branch False for the last-throw end condition in Task 14. Compile."
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
                "Open BowlingLevel, then Play.",
                "Press Space and try to knock over only some of the pins.",
                "Wait FOUR seconds. The ball should return to the original starting position.",
                "Aim with Left/Right and press Space again. Wait FOUR seconds.",
                "The ball should reset again; knocked-down pins must remain down and Score must not be erased.",
                "If all pins fell early, RoundFinished correctly ends the round: Stop and Play to try again."
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
                "Create a FUNCTION FinishRound.",
                "From its purple Entry WHITE output add Branch with Condition=NOT RoundFinished.",
                "Branch True → Set RoundFinished=true → Print String (format Score and PinsDown as a short message).",
                "Leave Branch False empty. Compile and Save BP_BowlingGameMode.",
                "Open BP_BowlingPlayerController → FinishThrow event → existing after-throw Branch.",
                "From that Branch's FALSE WHITE pin add another Branch.",
                "Condition = (ThrowsUsed >= MaxThrows) AND (NOT RoundFinished), using Cast BP_BowlingGameMode reference.",
                "From the new Branch TRUE WHITE output call FinishRound on the SAME cast GameMode reference.",
                "Do not call FinishRound until the FOUR-second Delay has finished. Compile and Save."
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
                "Right-click → Input → Input Action. Name the ASSET IA_Restart.",
                "Open IA_Restart and set Value Type=Digital (Boolean). Save.",
                "Open EXISTING Input Mapping Context BowlingInputs.",
                "Add a mapping: Input Action=IA_Restart, Key=R. Save BowlingInputs.",
                "Open BP_BowlingPlayerController → Event Graph. Add IA_Restart Input Action EVENT.",
                "From its Started WHITE pin add Open Level (by Name).",
                "Add Get Current Level Name; tick Remove Prefix String.",
                "Connect Get Current Level Name output → Open Level Level Name input.",
                "Compile and Save. Play and press R to reload a fresh lane."
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
                "Name the new WIDGET ASSET WBP_BowlingHUD and open Designer.",
                "In the Designer add three Text widgets.",
                "Rename them ScoreText, PinsText and ThrowsText (these are Text WIDGETS, not Integer Variables).",
                "On EACH Text widget tick Is Variable.",
                "Set placeholder text respectively Score: 0, Pins down: 0, Throws left: 3.",
                "Position the three labels in a corner, clear of the lane. Compile and Save."
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
                "Details → Content → Text → Bind → Create Binding.",
                "In the generated Function graph add Cast To BP_BowlingGameMode.",
                "Right-click → Get Game Mode. Connect its blue Return Value → Cast Object.",
                "Connect purple Function Entry WHITE → Cast WHITE input.",
                "Drag from Cast As BP_BowlingGameMode BLUE output → Get Score.",
                "Add Format Text. Type exact format Score: {Value}; connect Score to Value.",
                "Connect Format Text output → Return Node Text value.",
                "Connect Cast Success WHITE → Return Node WHITE. Compile and Save."
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
                "In the new binding Function graph add Cast To BP_BowlingGameMode; Object=Get Game Mode Return Value.",
                "Connect Entry WHITE → Cast WHITE input → Return Node WHITE from Cast Success.",
                "From Cast BLUE output Get PinsDown.",
                "Add Format Text with exact text Pins down: {Value}; connect PinsDown to Value.",
                "Connect Format Text output to Return Node Text value. Compile and Save."
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
                "In the new binding add Cast To BP_BowlingPlayerController, Object=Get Owning Player.",
                "Wire purple Function Entry WHITE → Cast WHITE input → Return Node WHITE.",
                "From cast BLUE output Get ThrowsUsed and Get MaxThrows.",
                "Create Integer - (MaxThrows minus ThrowsUsed), then Max (Integer) with other input 0.",
                "Add Format Text Throws left: {Value}, connect Max result to Value.",
                "Connect Format Text output to Return Node Text value. Compile and Save."
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
                "Open BP_BowlingPlayerController → Event Graph → EXISTING Event BeginPlay.",
                "Keep Add Mapping Context, Get Actor of Class(BP_BowlingBall), Set BowlingBall connected as before.",
                "After Set BowlingBall WHITE output add Create Widget.",
                "Choose Class=WBP_BowlingHUD and Owning Player=Self.",
                "From Create Widget WHITE output add Add to Viewport.",
                "Connect Create Widget BLUE Return Value → Add to Viewport Target.",
                "Compile and Play. Three labels should appear; input and ball movement must still work."
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
                "Create VARIABLE PinValue, type Integer. Compile, set Default Value=1.",
                "In Details tick Instance Editable (eye icon) on PinValue; Compile.",
                "Open BP_BowlingPin → Event Graph → the Cast To BP_BowlingGameMode / RecordPin call.",
                "Remove only the constant 1 from RecordPin PinValue input.",
                "Drag PinValue from Variables as Get; connect it to RecordPin PinValue input.",
                "Compile and Save. Keep Counted and GoalPins logic unchanged."
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
                "Open BowlingLevel and select ONE BP_BowlingPin Actor in World Outliner.",
                "In Details locate the instance Variable PinValue (enable the search if needed).",
                "Set PinValue=3 on this ONE placed pin. Keep all other pins at 1.",
                "Select that pin's existing Static Mesh component and assign a visually different Material.",
                "Save BowlingLevel. You now have one bonus pin, not three new pins."
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
                "Add a Text WIDGET and rename it ResultText.",
                "Tick Is Variable.",
                "Set default text ROUND OVER.",
                "In Details → Behavior → Visibility select Collapsed.",
                "Place ResultText where it will be readable without covering the main counters.",
                "Compile and Save."
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
                "Right-click empty space → Add Custom Event. Name RefreshBowlingResult.",
                "From its WHITE pin add Cast To BP_BowlingGameMode with Object=Get Game Mode.",
                "From Cast BLUE output Get RoundFinished; connect to Branch Condition.",
                "Connect Cast Success WHITE → Branch WHITE input.",
                "From Branch True: Get Score on the same cast; Format Text with ROUND OVER – SCORE: {Value}.",
                "Use Set Text on ResultText; connect formatted Text to In Text.",
                "Connect Set Text WHITE output → Set Visibility(ResultText,Visible).",
                "From Branch False → Set Visibility(ResultText,Collapsed). Compile and Save."
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
                "Open WBP_BowlingHUD → Event Graph → Event Construct.",
                "From Event Construct WHITE add Set Timer by Event.",
                "Set Time=0.25 and Looping=true.",
                "From Timer RED Event delegate pin choose Create Event → RefreshBowlingResult.",
                "Do not create a second red RefreshBowlingResult event or a second HUD.",
                "Compile and Save."
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
                "Throw three times without clearing the pins; Score, Pins down and Throws left should remain readable.",
                "After third throw wait FOUR seconds. ROUND OVER should show the final score.",
                "Press R to restart.",
                "Knock over the differently coloured bonus pin.",
                "Score rises by THREE but Pins down rises by ONE.",
                "Press R again; the display and lane should reset."
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
                "Open BP_BowlingBall → Event Graph → existing red Bowl Custom Event.",
                "Select the red Bowl event node. In Details → Inputs click +.",
                "Name the new CUSTOM EVENT INPUT PIN Strength. Set type Float, Default=200000.",
                "Find the existing Add Force node targeting the Model sphere.",
                "Disconnect its old fixed Force vector.",
                "Add Make Vector with X=Strength (drag from the new green input pin), Y=0, Z=0.",
                "Connect Make Vector output to Add Force → Force.",
                "Keep Accel Change checked on Add Force. Compile and Save."
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
                "Open BP_BowlingPlayerController → Event Graph → existing Bowl call.",
                "The Bowl call now has a GREEN input pin Strength.",
                "Set its input constant to 200000 for now (not zero).",
                "Compile and Play. Press Space to confirm the original throw still works.",
                "Stop Play. Keep the same Bowl node for the next tasks."
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
                "Create VARIABLE BaseThrowPower. Type Float; Compile, Default Value=200000.",
                "Create VARIABLE PowerMultiplier. Type Float; Compile, Default Value=1.0.",
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
                "Right-click → Input → Input Action. Name new ASSET IA_PowerDown.",
                "Open IA_PowerDown; Value Type=Digital (Boolean). Save.",
                "Create another Input Action ASSET IA_PowerUp. Set Digital (Boolean) and Save.",
                "Open the EXISTING BowlingInputs Input Mapping Context.",
                "Add mapping IA_PowerDown → Q.",
                "Add mapping IA_PowerUp → E. Save BowlingInputs.",
                "Do NOT make a second Input Mapping Context."
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
                "Right-click add Input Action Event IA_PowerDown.",
                "From its Started WHITE pin add Set PowerMultiplier.",
                "Get PowerMultiplier; add Float - with other input=0.25.",
                "Add Clamp (Float), Min=0.5, Max=2.0. Connect subtraction to Clamp and Clamp to Set PowerMultiplier value.",
                "Right-click add Input Action Event IA_PowerUp.",
                "From Started WHITE add a SECOND Set PowerMultiplier.",
                "Get PowerMultiplier; add Float + with other input=0.25.",
                "Add Clamp Float Min=0.5, Max=2.0; connect to the second Set PowerMultiplier value.",
                "After each Set add Print String of PowerMultiplier for testing. Compile and Save."
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
                "Open BP_BowlingPlayerController → Event Graph → existing gated IA_Bowl Started path.",
                "Find the ONE Bowl call with Strength currently 200000.",
                "Drag BaseThrowPower and PowerMultiplier from Variables as Get.",
                "From BaseThrowPower green output add Float * Float.",
                "Connect PowerMultiplier to second multiply input.",
                "Connect Multiply result → Bowl Strength input, replacing fixed 200000.",
                "Keep the three-throw guard and original Bowl WHITE execution connection.",
                "Compile and Save. Do not add a second Bowl call."
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
                "Open BowlingLevel and Play.",
                "Before throwing press Q until PowerMultiplier reaches 0.5; press Space and observe the shot.",
                "Press R to reset. Leave multiplier at 1.0 for the next throw.",
                "Press R again, then press E until PowerMultiplier is 2.0; throw.",
                "Compare how far the ball travels and adjust BaseThrowPower only if needed.",
                "In BP_BowlingPlayerController set the tested BaseThrowPower default and Save."
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
                "Open BP_ClickerGameMode → My Blueprint → Variables → +.",
                "Create VARIABLE ClickPower. Set type Integer. Click Compile; set Default Value=1.",
                "Create VARIABLE UpgradeCost. Set type Integer. Compile; set Default Value=10.",
                "Keep the ORIGINAL Score variable from the starter tutorial. Do not create a second one.",
                "Click Compile and Save."
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
                "Name the new FUNCTION AddClick. Double-click to open it.",
                "Drag Score from Variables into the graph and select Get.",
                "Drag ClickPower from Variables into the graph and select Get.",
                "Drag from Get Score's green output and search + (Integer).",
                "Connect Get ClickPower green output to the other + input.",
                "Drag Score into the graph again; choose Set.",
                "Connect the + result → Set Score's green value pin.",
                "Connect the purple AddClick Function Entry WHITE output → Set Score WHITE input.",
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
                "Find the EXISTING BeginPlay chain that creates ClickerGameUI and saves a reference in ClickerUI.",
                "Find Assign On Clicked for the original main ClickerButton.",
                "Follow its RED Event delegate to the existing click-handling Custom Event.",
                "Find its original Set Score=Score+1 calculation and the SetScoreText call.",
                "Leave Assign On Clicked connected. Do not create another OnClicked event in the Widget."
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
                "Stay in BP_ClickerGameMode → original main ClickerButton click event.",
                "Disconnect the old WHITE wire that runs Set Score=Score+1.",
                "Remove ONLY that old Set Score node and its +1 maths.",
                "From the original event's WHITE output add a CALL of AddClick.",
                "Connect CALL AddClick WHITE output → the EXISTING SetScoreText call.",
                "Keep Get ClickerUI as Target of SetScoreText.",
                "Drag Score as Get and connect its green Integer output to SetScoreText → Score.",
                "Compile and Play. One main-button press must add ONE point, not two."
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
                "Create FUNCTION BuyUpgrade.",
                "From purple Function Entry WHITE add Branch.",
                "Get Score and UpgradeCost from Variables.",
                "Connect both to >= (Integer), Score on A and UpgradeCost on B.",
                "Connect >= Boolean result → Branch Condition.",
                "On Branch TRUE use Set Score. Value = Get Score - Get UpgradeCost (Integer subtraction).",
                "From Set Score WHITE output add Set ClickPower. Value = Get ClickPower + 1.",
                "From Set ClickPower WHITE output add Set UpgradeCost. Value = Get UpgradeCost * 2.",
                "Leave Branch FALSE empty. Compile and Save."
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
                "Open existing ClickerGameUI Widget Blueprint → Designer.",
                "Drag a new Button from Palette next to original ClickerButton.",
                "Rename the NEW Button BuyUpgradeButton in Hierarchy.",
                "Put a Text widget inside that Button with text Buy Upgrade.",
                "Tick Is Variable on BuyUpgradeButton; leave original ClickerButton unchanged.",
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
                "Open ClickerGameUI → Designer → select BuyUpgradeButton.",
                "Details → Events → click + beside OnClicked.",
                "In its Event Graph add Get Game Mode and Cast To BP_ClickerGameMode.",
                "Connect Get Game Mode BLUE Return Value → Cast Object.",
                "Connect BuyUpgradeButton OnClicked WHITE → Cast WHITE input.",
                "From Cast BLUE As BP_ClickerGameMode pin CALL BuyUpgrade.",
                "Connect Cast Success WHITE → BuyUpgrade WHITE input.",
                "From BuyUpgrade WHITE output call SetScoreText on Self.",
                "Drag from Cast BLUE reference → Get Score; wire it into SetScoreText → Score input.",
                "Compile and Save. Do NOT add a Widget-side handler for the original big ClickerButton."
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
                "Press Buy Upgrade when Score=0; nothing should be bought.",
                "Click the main ClickerButton TEN times; Score should read 10.",
                "Click Buy Upgrade ONCE. Score should become 0, ClickPower=2, UpgradeCost=20.",
                "Click the main button once more; Score should become 2.",
                "Stop Play; if Score rises twice per click, remove the duplicate click handler."
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
                "Select the ORIGINAL ScoreText; DO NOT create another ScoreText.",
                "From Palette add Text widget named PowerText.",
                "Add another Text widget named CostText.",
                "Tick Is Variable on ScoreText, PowerText and CostText.",
                "Set placeholder text: ScoreText 'Points: 0', PowerText 'Per click: 1', CostText 'Next upgrade: 10'.",
                "Keep ClickerButton and BuyUpgradeButton in place. Compile and Save."
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
                "Create FUNCTION RefreshShop and open it.",
                "From its purple Function Entry WHITE add Cast To BP_ClickerGameMode.",
                "Right-click empty graph → Get Game Mode.",
                "Connect Get Game Mode's BLUE Return Value → Cast Object.",
                "Connect Function Entry WHITE → Cast WHITE input.",
                "Keep Cast Success WHITE output ready for next task. Compile."
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
                "Open ClickerGameUI → RefreshShop FUNCTION.",
                "Drag from Cast's BLUE As BP_ClickerGameMode reference → Get Score.",
                "Right-click and create Format Text. Set Format to Points: {Number}.",
                "Connect Get Score green output → Format Text Number pin.",
                "Drag ORIGINAL ScoreText Widget from Variables into graph as Get.",
                "Drag from its BLUE reference and search Set Text (Text).",
                "Connect Format Text output → Set Text's In Text.",
                "Connect Cast Success WHITE output → Set Text WHITE input. Compile."
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
                "Stay in ClickerGameUI → RefreshShop, after ScoreText Set Text.",
                "From the GameMode Cast BLUE reference Get ClickPower and Get UpgradeCost.",
                "Add Format Text: Per click: {Number}. Connect ClickPower to Number.",
                "Drag PowerText Widget into graph as Get; from it add Set Text. Feed it the formatted text.",
                "Add Format Text: Next upgrade: {Number}. Connect UpgradeCost to Number.",
                "Drag CostText Widget into graph as Get; from it add Set Text. Feed it the formatted text.",
                "Connect WHITE execution ScoreText Set Text → PowerText Set Text → CostText Set Text.",
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
                "Open and Compile ClickerGameUI so RefreshShop is available to other Blueprints.",
                "Open BP_ClickerGameMode → Event Graph → original ClickerButton assigned event.",
                "Find CALL AddClick followed by Get ClickerUI → SetScoreText.",
                "Remove ONLY the old SetScoreText call.",
                "Drag from the saved BLUE ClickerUI reference and search CALL RefreshShop.",
                "Connect AddClick WHITE output → RefreshShop WHITE input.",
                "Keep Assign On Clicked for the original main button intact. Compile and Save."
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
                "Find the Cast To BP_ClickerGameMode → BuyUpgrade chain.",
                "Disconnect and remove its old SetScoreText call.",
                "After BuyUpgrade WHITE output add CALL RefreshShop, Target=Self.",
                "Compile and Save. RefreshShop also runs if the purchase is rejected."
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
                "Open ClickerGameUI → Event Graph → Event Construct.",
                "Find the old hard-coded SetScoreText(0) call from the starter tutorial.",
                "Disconnect ONLY the old display call; keep any other Construct actions.",
                "Connect Event Construct WHITE → CALL RefreshShop.",
                "Compile and Play. The display must show Points 0, Per click 1 and Next upgrade 10 immediately."
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
                "Open ClickerGameUI → Designer.",
                "Change the Screen Size preview to a smaller viewport preset.",
                "Move PowerText, CostText and the two buttons so none overlap.",
                "Use a Vertical Box or Anchors if needed; DO NOT delete or rename any existing Widgets.",
                "Compile and Save. Press Play in a small window and test both buttons.",
                "Return to normal window size and check it still fits."
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
                "Create VARIABLE GranniesOwned; type Integer, Compile, Default Value=0.",
                "Create VARIABLE GrannyRate; type Integer, Compile, Default Value=1.",
                "Create VARIABLE GrannyCost; type Integer, Compile, Default Value=15.",
                "Compile and Save. These are variables in GameMode, not Text Widgets."
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
                "Stay in BP_ClickerGameMode → My Blueprint → Variables → +.",
                "Create VARIABLE TotalEarned; type Integer, Compile, Default Value=0.",
                "Keep existing Score for spendable points. TotalEarned tracks lifetime earnings.",
                "Do NOT reduce TotalEarned when buying anything. Compile and Save."
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
                "Create FUNCTION GainPoints and open it.",
                "Select the purple Function Entry → Details → Inputs → +.",
                "Name the new INPUT PIN Amount; set type Integer.",
                "Compile and Save. Amount is a Function INPUT, not a saved Variable."
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
                "Open BP_ClickerGameMode → GainPoints FUNCTION.",
                "From the purple Entry Amount green pin search > (Integer). Set other input=0.",
                "Right-click empty graph → Branch.",
                "Connect comparison RED output → Branch Condition.",
                "Connect Entry WHITE execution → Branch WHITE input.",
                "Leave Branch False unconnected. Use Branch True in the next task."
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
                "Stay in GainPoints → Branch True.",
                "Drag Score as Get and Set. Connect Get Score to Integer + and connect Amount to the other + input.",
                "Connect Integer + result → Set Score green value pin.",
                "Connect Branch TRUE WHITE → Set Score WHITE input.",
                "Drag TotalEarned as Get and Set.",
                "Create Integer +: Get TotalEarned plus Amount; connect result to Set TotalEarned value.",
                "Connect Set Score WHITE output → Set TotalEarned WHITE input.",
                "Compile and Save. Both numbers must increase with income."
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
                "Open BP_ClickerGameMode → AddClick FUNCTION.",
                "Find the old Get Score + Get ClickPower → Set Score sequence.",
                "Disconnect that old Set Score node from WHITE execution; remove its old + maths.",
                "From AddClick purple Function Entry WHITE add CALL GainPoints.",
                "Drag ClickPower as Get, connect its green Integer pin → GainPoints Amount.",
                "Compile and Save.",
                "Check original assigned ClickerButton event still calls AddClick only ONCE then RefreshShop. Do not add a new OnClicked event."
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
                "Open BP_ClickerGameMode → My Blueprint → Functions → +.",
                "Create FUNCTION BuyGranny and open it.",
                "From purple Function Entry WHITE add Branch.",
                "Get Score and GrannyCost from Variables; connect them to >= (Integer).",
                "Connect >= RED result → Branch Condition.",
                "Branch TRUE → Set Score with value Get Score - Get GrannyCost.",
                "Then Set GranniesOwned = Get GranniesOwned + 1.",
                "Then Set GrannyCost = Ceiling(Get GrannyCost * 1.25). Create Float * and Ceiling nodes; wire their result into Set GrannyCost.",
                "Connect the three Set WHITE nodes in order. Leave Branch False empty.",
                "Compile and Save."
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
                "Name FUNCTION GetProductionPerSecond.",
                "Select its name in My Blueprint. In Details tick Pure.",
                "In Details → Outputs click +. Name the OUTPUT PIN Production.",
                "Set Production type Integer; Compile.",
                "This is a PURE Function returning a value, not an Event or a Timer."
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
                "Open BP_ClickerGameMode → GetProductionPerSecond FUNCTION.",
                "Drag GranniesOwned and GrannyRate into the graph as Get.",
                "From GranniesOwned green pin search * (Integer).",
                "Connect GrannyRate to the other Multiply input.",
                "Connect Multiply output → Return Node → Production pin.",
                "Compile and Save. This Function must NOT change Score."
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
                "Add Button named BuyGrannyButton; put Text 'Buy Granny' inside.",
                "Add Text widget GranniesText with placeholder Grannies: 0.",
                "Add Text widget PassiveIncomeText with placeholder Auto: 0 / sec.",
                "Add Text widget LifetimeText with placeholder Lifetime: 0.",
                "Tick Is Variable on all four named Widgets.",
                "Position them below the existing shop. Compile and Save."
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
                "Open ClickerGameUI → Designer → select BuyGrannyButton.",
                "Details → Events → click + next to OnClicked.",
                "In generated Event Graph add Cast To BP_ClickerGameMode.",
                "Add Get Game Mode and connect BLUE Return Value → Cast Object.",
                "Connect BuyGrannyButton OnClicked WHITE → Cast WHITE input.",
                "From Cast BLUE reference call BuyGranny; connect Cast Success WHITE to that call.",
                "After BuyGranny WHITE output call RefreshShop, Target=Self.",
                "Compile and Save. Leave the original ClickerButton handled by GameMode."
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
                "Open ClickerGameUI → RefreshShop FUNCTION.",
                "Find WHITE execution chain ending at CostText Set Text.",
                "From GameMode Cast BLUE reference Get GranniesOwned, GrannyCost and TotalEarned.",
                "Add Format Text with Grannies: {Owned} | Next: {Cost}, plug both Integer values into the matching pins.",
                "Drag GranniesText Widget into the graph as Get; from BLUE pin call Set Text. Feed it formatted text.",
                "From Cast BLUE reference call GetProductionPerSecond; feed its result into Format Text: Auto: {Rate} / sec.",
                "Drag PassiveIncomeText as Get and call Set Text using that formatted text.",
                "Format Text Lifetime: {Earned}, connect TotalEarned to Earned.",
                "Drag LifetimeText as Get and call Set Text with that formatted text.",
                "Connect WHITE CostText Set Text → GranniesText Set Text → PassiveIncomeText Set Text → LifetimeText Set Text.",
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
                "Open the Clicker level and press Play from a new game.",
                "Click the main button FIFTEEN times, earning 15 points.",
                "Press Buy Granny ONCE.",
                "Check Grannies: 1, Next: 19, Auto: 1 / sec.",
                "Score should not rise on its own YET. The timer is built next.",
                "Stop Play."
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
                "Right-click empty space → Add Custom Event.",
                "Name the CUSTOM EVENT ProduceIncome.",
                "Leave its WHITE output empty for this task. Compile and Save.",
                "Do NOT create another Widget or Event Tick."
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
                "Open BP_ClickerGameMode → Event Graph → ORIGINAL Event BeginPlay.",
                "Find its existing Widget creation and Assign On Clicked chain.",
                "Insert Sequence after BeginPlay. Connect Sequence Then 0 to the ORIGINAL chain.",
                "From Sequence Then 1 WHITE output add Set Timer by Event.",
                "Set Timer Time=1.0 seconds and tick Looping.",
                "From Timer RED Event delegate pin choose Create Event → ProduceIncome.",
                "Compile and Save. Start exactly ONE production timer on BeginPlay; never start it when buying a Granny."
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
                "Open BP_ClickerGameMode → Event Graph → ProduceIncome CUSTOM EVENT.",
                "From the RED Event's WHITE output call GetProductionPerSecond.",
                "Use the returned Integer Production value as GainPoints → Amount.",
                "Connect ProduceIncome WHITE execution to CALL GainPoints WHITE input.",
                "GainPoints rejects 0, and adds valid income to Score and TotalEarned.",
                "Compile and Save. Do not create another income calculation."
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
                "Open ClickerGameUI → Event Graph → Event Construct.",
                "Keep the ORIGINAL call to RefreshShop immediately after Construct.",
                "After RefreshShop WHITE output add Set Timer by Event, Time=0.25, Looping=true.",
                "In empty Event Graph space right-click → Add Custom Event. Name RefreshAutoHUD.",
                "From RefreshAutoHUD WHITE output add CALL RefreshShop.",
                "From the Timer RED Event delegate choose Create Event → RefreshAutoHUD.",
                "Compile and Save. This is a UI refresh timer, not the GameMode production timer."
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
                "Open the Clicker level and Play from a fresh start.",
                "Earn 15, then press Buy Granny once. Next cost must read 19.",
                "Earn another 19 (click or wait for income), then buy a SECOND Granny.",
                "Next Granny cost should read 24, Grannies should read 2.",
                "Stop clicking for THREE seconds. Passive income should add about 6 points.",
                "The 0.25-second display refresh may make the balance rise just after a purchase. That is normal.",
                "Save the project if all values behave correctly."
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
                "Create VARIABLE GrannyTrainingCost. Type Integer; Compile; Default Value=100.",
                "Keep the EXISTING GrannyRate Integer variable. Do not create a second one.",
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
                "Open BP_ClickerGameMode → My Blueprint → Functions → +.",
                "Create FUNCTION TrainGrannies and open it.",
                "From purple Function Entry WHITE output add Branch.",
                "Get Score, GrannyTrainingCost and GranniesOwned from Variables.",
                "Make >= (Integer) with Score and GrannyTrainingCost.",
                "Make > (Integer) with GranniesOwned and constant 0.",
                "Connect both comparison results to AND(Boolean) → Branch Condition.",
                "On Branch TRUE Set Score to Get Score - Get GrannyTrainingCost.",
                "From Set Score WHITE output → Set GrannyRate, value Get GrannyRate * 2.",
                "From Set GrannyRate WHITE output → Set GrannyTrainingCost, value Get GrannyTrainingCost * 2.",
                "Leave Branch FALSE unconnected. Compile and Save."
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
                "Add a new Button named TrainGranniesButton and a child Text 'Train Grannies'.",
                "Add another Text widget named TrainingInfoText; tick Is Variable.",
                "Tick Is Variable on TrainGranniesButton.",
                "Put them next to the existing Granny controls. Compile and Save."
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
                "Open ClickerGameUI → Designer → select TrainGranniesButton.",
                "Details → Events → + OnClicked.",
                "In resulting Event Graph add Cast To BP_ClickerGameMode, Object=Get Game Mode Return Value.",
                "Connect OnClicked WHITE → Cast WHITE.",
                "From Cast BLUE reference CALL TrainGrannies; connect Cast Success WHITE → TrainGrannies WHITE.",
                "From TrainGrannies WHITE output CALL RefreshShop on Self.",
                "Compile and Save. Do not create an extra UI refresh timer."
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
                "Open ClickerGameUI → existing RefreshShop FUNCTION.",
                "Find the last Set Text on the WHITE execution chain (LifetimeText).",
                "From GameMode Cast BLUE reference Get GrannyRate and GrannyTrainingCost.",
                "Add Format Text with exact format Each Granny: {Rate}/sec | Train: {Cost}.",
                "Connect GrannyRate → Rate, GrannyTrainingCost → Cost.",
                "Drag TrainingInfoText as Get → Set Text; connect formatted Text to In Text.",
                "Connect previous final Set Text WHITE output → TrainingInfoText Set Text WHITE input.",
                "Keep PassiveIncomeText reading GetProductionPerSecond. Compile and Save."
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
                "Open the Clicker level and Play.",
                "Buy TWO Grannies and earn at least 100 points. Keep Score as spendable balance.",
                "Before training, Auto should be 2/sec if GrannyRate=1.",
                "Click Train Grannies once. It should spend 100 and set GrannyRate=2.",
                "The next training price should read 200. Auto should become 4/sec.",
                "Check TotalEarned never decreases when Score is spent.",
                "Stop Play and Save the project."
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
                "Create VARIABLE MilestoneTarget. Type Integer; Compile; Default Value=500.",
                "Create VARIABLE MilestoneReached. Type Boolean; Compile; Default Value=false.",
                "Keep the EXISTING Score and TotalEarned variables.",
                "Compile and Save."
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
                "Open BP_ClickerGameMode → GainPoints FUNCTION.",
                "Find the WHITE execution output after Set TotalEarned.",
                "From it add Branch.",
                "Drag MilestoneReached as Get, add NOT Boolean.",
                "Drag TotalEarned and MilestoneTarget as Get, add >= (Integer) comparison.",
                "Connect NOT MilestoneReached and TotalEarned>=MilestoneTarget to AND(Boolean).",
                "Connect AND RED result → Branch Condition.",
                "Branch TRUE → Set MilestoneReached=true → Print String '500 earned!'.",
                "Branch FALSE does nothing. Keep click and auto income working. Compile."
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
                "Add Text widget named MilestoneText.",
                "Set default text 500 LIFETIME POINTS!",
                "Tick Is Variable on MilestoneText.",
                "In Details → Behavior → Visibility set Collapsed.",
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
                "Open ClickerGameUI → RefreshShop FUNCTION.",
                "Find the last Set Text node and extend its WHITE execution chain.",
                "From GameMode Cast BLUE reference Get MilestoneReached Boolean.",
                "Add Branch with Condition=MilestoneReached.",
                "Connect previous Set Text WHITE output → Branch WHITE input.",
                "Branch TRUE → Set Visibility(Target=MilestoneText, Visibility=Visible).",
                "Branch FALSE → Set Visibility(Target=MilestoneText, Visibility=Collapsed).",
                "Compile and Save. Reuse the existing refresh timer."
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
                "Open BP_ClickerGameMode → MilestoneTarget Variable Default Value.",
                "Temporarily change Default Value from 500 to 20. Compile.",
                "Open ClickerGameUI → Designer → MilestoneText; change displayed text to TEST: 20 LIFETIME POINTS!. Compile.",
                "Play from a fresh game. Earn 20 lifetime points by clicking or with Grannies.",
                "MilestoneText should become visible. Spend some Score; the message should stay visible.",
                "Stop Play. Restore MilestoneTarget Default Value=500.",
                "Restore MilestoneText to 500 LIFETIME POINTS!. Compile and Save both Blueprints."
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
                "Create VARIABLE FarmsOwned. Integer, Compile, Default Value=0.",
                "Create VARIABLE FarmRate. Integer, Compile, Default Value=5.",
                "Create VARIABLE FarmCost. Integer, Compile, Default Value=100.",
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
                "Open BP_ClickerGameMode → My Blueprint → Functions → +.",
                "Create FUNCTION BuyFarm and open it.",
                "Entry WHITE output → Branch.",
                "Get Score and FarmCost; compare Score >= FarmCost (Integer). Connect result → Branch Condition.",
                "Branch TRUE → Set Score = Get Score - Get FarmCost.",
                "Then Set FarmsOwned = Get FarmsOwned + 1.",
                "Then Set FarmCost = Ceiling(Get FarmCost * 1.30), using Float multiply and Ceiling.",
                "Connect WHITE Set Score → Set FarmsOwned → Set FarmCost.",
                "Leave Branch FALSE empty. Compile and Save."
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
                "Open BP_ClickerGameMode → GetProductionPerSecond FUNCTION.",
                "Keep the existing Get GranniesOwned * Get GrannyRate math.",
                "Get FarmsOwned and FarmRate and connect them to a SECOND Multiply (Integer).",
                "Add Integer + node. Feed Granny production to first input and Farm production to second.",
                "Connect + output → Return Node Production input, replacing the old Granny-only input.",
                "Compile and Save. The PURE Function still returns an Integer."
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
                "Add new Button named BuyFarmButton; place Text 'Buy Farm' inside.",
                "Add Text widget named FarmInfoText, placeholder Farms: 0 | Next: 100.",
                "Tick Is Variable on BuyFarmButton and FarmInfoText.",
                "Put them beside existing Granny controls. Compile and Save."
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
                "Open ClickerGameUI → Designer → select BuyFarmButton → Events → + OnClicked.",
                "From OnClicked WHITE add Cast To BP_ClickerGameMode; Object=Get Game Mode.",
                "From Cast BLUE output CALL BuyFarm; connect Cast Success WHITE to the call.",
                "After BuyFarm WHITE output call RefreshShop on Self.",
                "Open ClickerGameUI → RefreshShop FUNCTION.",
                "From existing GameMode Cast BLUE output Get FarmsOwned and FarmCost.",
                "Create Format Text Farms: {Owned} | Next: {Cost}; connect those integers.",
                "From FarmInfoText widget reference call Set Text, with Format Text as In Text.",
                "Connect it at the END of the existing Set Text WHITE chain (before any milestone visibility Branch if one exists).",
                "Compile and Save. Keep the existing 0.25-second UI refresh timer unchanged."
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
                "Open the Clicker level and Play a fresh game.",
                "Buy or temporarily test with THREE Grannies and TWO Farms.",
                "For this test GrannyRate=2 after one training, FarmRate=5.",
                "Expected production=(3×2)+(2×5)=16 per second.",
                "Watch Score and TotalEarned for five seconds without clicking; each should rise about 80.",
                "If you temporarily raised starting Score to buy producers quickly, restore its Default Value=0 and Compile.",
                "Stop Play and Save."
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
                "Choose ONE new producer idea, for example a Factory.",
                "On paper write its name, starting cost, income per second and visual asset.",
                "Note the variables you would create in BP_ClickerGameMode and the Widget buttons you would add.",
                "Describe how GetProductionPerSecond would include its production.",
                "Do not build it until your existing Clicker game works end-to-end."
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
                "Open your working Loops project. Stop Play and save everything.",
                "Close Unreal Editor and copy the WHOLE project folder to a safe backup location.",
                "Reopen the working copy; keep the original BP_Box and its physics-tower tutorial untouched.",
                "Open Content Drawer → Content/Loops. We will make NEW Blueprints for the rising shooting game."
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
                "In Content Drawer → Content/Loops, right-click empty space → Blueprint Class → Actor.",
                "Name the new ACTOR BLUEPRINT BP_RisingBlock. Double-click it.",
                "In Components click + Add → Static Mesh. Rename this COMPONENT BlockMesh.",
                "With BlockMesh selected set Static Mesh=Cube (the built-in 100cm Cube).",
                "In Details set Simulate Physics=false and Collision Enabled=Query Only.",
                "In Collision responses set Visibility=Block.",
                "In Transform set Relative Location Z=50 (base of cube sits at Z=0).",
                "Compile and Save BP_RisingBlock."
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
                "Open BP_LoopsGameMode → Event Graph.",
                "Find the ORIGINAL BeginPlay → For Loop → Spawn Actor From Class chain.",
                "Keep First Index=0, Last Index=4 for five test targets.",
                "On Spawn Actor From Class set Class=BP_RisingBlock instead of BP_Box.",
                "From For Loop Index create Integer - node with other input 2. Multiply the result by 150.",
                "Create Make Vector: X=200, Y=(Index-2)*150, Z=0. Feed the maths output to Y.",
                "Add Make Transform and connect Make Vector to Transform → Location.",
                "Connect Make Transform output to Spawn Actor → Spawn Transform.",
                "Set Spawn Collision Handling Override=Always Spawn, Ignore Collisions.",
                "Keep Loop Body WHITE output → Spawn Actor WHITE input.",
                "Compile, Save and Play: five cubes should stand side by side across the screen."
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
                "Open LoopsLevel.",
                "In Place Actors drag ONE Camera Actor into the level.",
                "In World Outliner rename it Cam_RisingDefence.",
                "Select it; Details → Transform → Location: X=-950, Y=0, Z=260.",
                "Set Rotation Pitch=0, Yaw=0, Roll=0 as a starting position (it looks towards +X).",
                "Pilot the camera or use its preview. Adjust until all five cubes and empty space above them are visible.",
                "Save LoopsLevel. Avoid placing a second Camera Actor for this test."
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
                "Open Content Drawer → Content/Loops.",
                "If BP_LoopsPlayerController already exists, REUSE it.",
                "Otherwise right-click → Blueprint Class → PlayerController, name BP_LoopsPlayerController.",
                "Open BP_LoopsGameMode → Class Defaults.",
                "Set Player Controller Class=BP_LoopsPlayerController. Compile and Save.",
                "Open LoopsLevel → Settings → World Settings.",
                "Set GameMode Override=BP_LoopsGameMode.",
                "Save Level. Use Play, not Simulate."
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
                "Open BP_LoopsPlayerController → Event Graph.",
                "Find Event BeginPlay (add it only if missing).",
                "From BeginPlay WHITE output add Set Show Mouse Cursor, Target=Self, value true.",
                "After its WHITE output add Set Input Mode Game and UI, Player Controller=Self.",
                "Set In Mouse Lock Mode=Do Not Lock; leave In Widget to Focus empty.",
                "After that WHITE output add Set View Target with Blend, Target=Self.",
                "Right-click → Get Actor of Class, choose CameraActor. Connect BLUE Return Value → New View Target.",
                "In BP_LoopsPlayerController → Class Defaults set Default Mouse Cursor=Crosshairs.",
                "Compile and Save. Play and confirm all cubes appear and cursor is visible."
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
                "Open Content Drawer → Content/Loops.",
                "Right-click → Input → Input Action. Name the ASSET IA_RisingFire.",
                "Open IA_RisingFire and set Value Type=Digital (Boolean). Save.",
                "Right-click → Input → Input Mapping Context. Name the ASSET IMC_RisingDefence.",
                "Open IMC_RisingDefence. Add a new mapping: Input Action=IA_RisingFire, Key=Left Mouse Button.",
                "Save. If an older IMC_TargetRush exists, do NOT activate it as well."
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
                "Open BP_LoopsPlayerController → Event Graph → existing BeginPlay WHITE chain.",
                "After Set View Target with Blend, add Get Enhanced Input Local Player Subsystem (from Player Controller).",
                "From its BLUE output call Add Mapping Context.",
                "Choose IMC_RisingDefence and Priority=0. Connect Set View Target WHITE output → Add Mapping Context WHITE input.",
                "In empty Event Graph space right-click → IA_RisingFire (Enhanced Input Action Event).",
                "From IA_RisingFire Started WHITE pin add Print String with text PEW.",
                "Compile, Save and Play INSIDE the game viewport.",
                "Each left-click must print PEW once. If not, check active PlayerController and mapping context before continuing."
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
                "Open BP_LoopsPlayerController → IA_RisingFire Started event.",
                "Keep the PEW Print String for this test.",
                "From Print String WHITE output add Convert Mouse Location To World Space.",
                "Connect Target Player Controller=Self if a Target pin is shown.",
                "From its Return Value Boolean add Branch and wire execution to the Branch WHITE input.",
                "Connect Return Value → Branch Condition. Only TRUE continues.",
                "Use the node's World Location VECTOR as shot Start.",
                "Get World Direction VECTOR and multiply by Float 5000.",
                "Add that scaled vector to World Location; the result is shot End.",
                "Do not create new saved variables named Start/End; these are Line Trace input values."
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
                "Stay in BP_LoopsPlayerController → IA_RisingFire, after Deprojection Branch TRUE.",
                "Right-click → Line Trace By Channel.",
                "Connect Branch TRUE WHITE output → Line Trace WHITE input.",
                "Connect World Location → Start.",
                "Connect World Location + (World Direction * 5000) → End.",
                "Set Trace Channel=Visibility, Draw Debug Type=For Duration and Ignore Self=true.",
                "From Line Trace Return Value Boolean add Branch; connect its red Condition.",
                "Connect Line Trace WHITE output → the new Branch WHITE input.",
                "From Line Trace Out Hit add Break Hit Result.",
                "From Break Hit Result → Hit Actor BLUE reference drag and search Get Display Name.",
                "From hit Branch TRUE add Print String and connect display name to its text input.",
                "Compile, Play and aim at a cube: the debug ray hits it and prints BP_RisingBlock."
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
                "Right-click empty space → Add Custom Event. Name the red EVENT BreakBlock.",
                "From BreakBlock WHITE output add Destroy Actor, Target=Self.",
                "Compile and Save BP_RisingBlock.",
                "Open BP_LoopsPlayerController → IA_RisingFire after the Line Trace hit-TRUE Branch.",
                "Remove only the temporary Hit Actor Display Name Print String.",
                "Drag from Break Hit Result → Hit Actor BLUE pin and search Cast To BP_RisingBlock.",
                "Connect hit Branch TRUE WHITE → Cast WHITE input, and Hit Actor → Cast Object.",
                "From Cast BLUE As BP_RisingBlock reference CALL BreakBlock.",
                "Connect Cast Success WHITE → BreakBlock WHITE input.",
                "Compile and Play. Clicking a cube must destroy exactly ONE cube. Clicking empty space destroys nothing."
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
                "Check A: click the viewport. Does PEW print? If NO, verify BP_LoopsPlayerController and IMC_RisingDefence.",
                "Check B: Does a debug ray appear? If NO, check Convert Mouse Location To World Space and WHITE execution pins.",
                "Check C: Does ray stop at a cube? If NO, check BlockMesh Visibility=Block and any foreground obstacle.",
                "Check D: Does cube disappear? If NO, check Cast To BP_RisingBlock → BreakBlock WHITE chain.",
                "Disable or remove the old BP_ClickTarget ActorOnClicked scoring path if present so shots cannot count twice.",
                "Compile and Save. All five test cubes should now be shootable."
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
                "Open BP_RisingBlock → Variables.",
                "In BP_RisingBlock → My Blueprint → Variables → +, create LaneIndex (Integer, default 0, Instance Editable and Expose on Spawn), CurrentHeight (Float, default 60), GrowthSpeed (Float, default 35) and MaxHeight (Float, default 450).",
                "Compile so LaneIndex appears as a Spawn Actor input pin.",
                "Keep the same cube with physics disabled."
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
                "Open BP_RisingBlock → Function UpdateBlockVisual.",
                "Create UpdateBlockVisual (no inputs).",
                "On BlockMesh call Set Relative Scale 3D with Make Vector (X=1,Y=1,Z=CurrentHeight/100), then Set Relative Location with Make Vector(X=0,Y=0,Z=CurrentHeight/2); wire execution in that order.",
                "The standard Cube mesh is 100cm tall; the Actor stays at spawn Z=0."
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
                "Create the BOOLEAN VARIABLE Finished. Set Default Value=false, then Compile and Save.",
                "Open BP_RisingBlock → Event Graph.",
                "On Event BeginPlay call UpdateBlockVisual once.",
                "On Event Tick add Get Game Mode → Cast To BP_LoopsGameMode (Object=Get Game Mode).",
                "From the Cast blue As BP_LoopsGameMode pin Get Finished.",
                "Connect NOT Finished to a Branch Condition. Connect Cast Success WHITE to the Branch WHITE input.",
                "From Branch True set CurrentHeight=Min(MaxHeight, CurrentHeight + (Tick Delta Seconds × GrowthSpeed)).",
                "After Set CurrentHeight WHITE output call UpdateBlockVisual.",
                "Compile and Save BP_RisingBlock."
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
                "Open LoopsLevel.",
                "From Place Actors drag a CUBE into the level. Rename this PLACED ACTOR DangerLine.",
                "Set its Location X=200, Y=0, Z=450.",
                "Set its Scale X=0.1, Y=8, Z=0.05 to create a thin horizontal bar.",
                "Give DangerLine a bright red Material so players can see the losing height.",
                "In Details → Collision set Collision Presets=NoCollision, so the line does not block shooting.",
                "Save LoopsLevel."
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
                "Open BP_LoopsGameMode → Variables and Event BeginPlay.",
                "Create FreeLanes as an Integer Array and SpawnTimerHandle as a TimerHandle.",
                "In BeginPlay REPLACE the old five-cube For Loop exec input, but keep the old nodes unconnected until you test the new system.",
                "Set FreeLanes using Make Array(0,1,2,3,4).",
                "Make the new BeginPlay chain reach this Set first.",
                "The original physics BP_Box remains a separate asset."
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
                "Name the new FUNCTION SpawnOneBlock.",
                "In My Blueprint → Local Variables click + and create PickIndex (Integer).",
                "Click + Local Variable again and create PickLane (Integer).",
                "From the purple Function Entry WHITE pin add Branch.",
                "To Branch Condition connect (NOT Finished) AND (Length of FreeLanes > 0).",
                "From Branch True add Set PickIndex. Its value is Random Integer in Range, Min=0, Max=Length(FreeLanes)-1.",
                "After Set PickIndex add Set PickLane. Its value is FreeLanes Get(Index=PickIndex).",
                "After Set PickLane, add Remove Index on FreeLanes using PickIndex.",
                "Keep these WHITE execution pins in order. Compile and Save."
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
                "Open BP_LoopsGameMode → SpawnOneBlock after Remove Index.",
                "Continue white exec to Spawn Actor From Class(Class=BP_RisingBlock, Collision Handling Override=Always Spawn, Ignore Collisions).",
                "Set Make Transform.Location = Make Vector(X=200,Y=(PickLane-2)*150,Z=0).",
                "Feed PickLane into the exposed LaneIndex pin.",
                "Leave rotation 0 and scale 1.",
                "Compile."
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
                "Open BP_LoopsGameMode → Event Graph → BeginPlay.",
                "Make Custom Event SpawnTick → call SpawnOneBlock.",
                "After BeginPlay sets FreeLanes, call SpawnOneBlock once (one initial threat), then Set Timer by Event(Time=1.5, Looping=true; Event delegate uses Create Event → SpawnTick).",
                "Promote its Return Value to SpawnTimerHandle.",
                "There must be only one repeating spawn timer, NOT a timer in each block."
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
                "Open BP_LoopsGameMode → Variables and Function RegisterHit.",
                "Add Hits (Integer, default 0).",
                "Create Function RegisterHit with an Integer input HitLane.",
                "First Branch on NOT Finished; on True run Add Unique(Target Array=FreeLanes, New Item=HitLane) → Set Hits=Hits+1.",
                "Optionally Print String 'HIT +1' after it.",
                "Compile.",
                "Do NOT put this function on each block's Event Tick."
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
                "Open BP_RisingBlock → existing Custom Event BreakBlock from Stage 1.",
                "Replace the direct BreakBlock → Destroy Actor connection.",
                "Use Get Game Mode → Cast To BP_LoopsGameMode → Branch Condition=NOT Finished; from True call RegisterHit(HitLane=Self.LaneIndex) on that SAME GameMode reference, then Destroy Actor(Self).",
                "Wire the WHITE exec pins through Cast Success, Branch True, RegisterHit and Destroy Actor in order.",
                "Never free a lane on a miss."
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
                "Create Custom Event LoseRound.",
                "Branch on NOT Finished; True → Set Finished=true → Clear and Invalidate Timer by Handle(SpawnTimerHandle) → Print String('DEFENCE FAILED!').",
                "Leave False unconnected.",
                "The round's other timer comes in Stage 3."
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
                "Open BP_RisingBlock → Event Tick, immediately after UpdateBlockVisual.",
                "After updating the height, Branch(CurrentHeight >= MaxHeight).",
                "On True call Get Game Mode → Cast To BP_LoopsGameMode → LoseRound.",
                "This must happen AFTER Set CurrentHeight and UpdateBlockVisual, only on the NOT Finished tick path.",
                "Do not Destroy Actor when the block hits the line; leave it showing the reason for defeat."
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
                "Open LoopsLevel → Play in Editor.",
                "Test A: watch one block grow, shoot it, confirm its lane is freed and a future spawn can reuse it.",
                "Test B: let all five lanes fill: no overlaps and no sixth lane.",
                "Test C: do not shoot until one reaches Z=450: Finished=true and no new blocks.",
                "If cubes still spawn as a tower, disconnect the old BeginPlay loop.",
                "If blocks grow below ground, Set Relative Location.Z must be CurrentHeight/2, not 0."
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
                "Open BP_LoopsGameMode → Variables.",
                "Create SecondsLeft (Integer default 60), Won (Boolean default false) and RoundTimerHandle (TimerHandle).",
                "Keep Finished, Hits, FreeLanes and SpawnTimerHandle from Stage 2.",
                "Compile."
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
                "Open BP_LoopsGameMode → Event Graph → BeginPlay after SpawnTimerHandle is created.",
                "Create Custom Event CountdownTick.",
                "In existing BeginPlay, AFTER the FreeLanes → initial SpawnOneBlock → SpawnTimerHandle chain, add Set Timer by Event(Time=1.0,Looping=true; delegate Create Event → CountdownTick).",
                "Promote Return Value to RoundTimerHandle.",
                "Do NOT add this timer to SpawnTick or BP_RisingBlock."
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
                "Open BP_LoopsGameMode → CountdownTick Custom Event.",
                "Wire CountdownTick → Branch(NOT Finished).",
                "On True set SecondsLeft = Max(0, SecondsLeft-1).",
                "Then Branch(SecondsLeft<=0).",
                "On True set Finished=true and Won=true, then Clear and Invalidate Timer by Handle(SpawnTimerHandle), then Clear and Invalidate Timer by Handle(RoundTimerHandle), then Print String('YOU HELD THE LINE!').",
                "A win happens ONLY if the danger height was never reached."
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
                "Open BP_LoopsGameMode → LoseRound event from Stage 2.",
                "Keep LoseRound's Branch(NOT Finished) → Set Finished=true → Clear SpawnTimerHandle.",
                "After that, add Set Won=false and Clear and Invalidate Timer by Handle(RoundTimerHandle), then Print String('DEFENCE FAILED!').",
                "All existing blocks now stop growing because their Tick checks Finished."
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
                "Open Content/Loops → User Interface → Widget Blueprint → User Widget.",
                "Create WBP_RisingDefenceHUD.",
                "Add Text widgets named TimeText, HitsText and StatusText; tick Is Variable on each.",
                "Add a small instruction 'Left-click: shoot • R: restart'.",
                "Set the ROOT Canvas Panel Visibility to Not Hit-Testable (Self & All Children).",
                "Position the HUD away from the playable columns.",
                "Set StatusText default 'KEEP BLOCKS BELOW THE RED LINE'.",
                "Compile."
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
                "Open WBP_RisingDefenceHUD → Graph.",
                "Create Custom Event RefreshHUD.",
                "Use Get Game Mode → Cast To BP_LoopsGameMode.",
                "On Cast Success use Get SecondsLeft → Format Text('Time: {Value}') → Set Text(TimeText), then Get Hits → Format Text('Hits: {Value}') → Set Text(HitsText), wiring white execution sequentially.",
                "Then Branch(Get Finished).",
                "On False set StatusText='KEEP BLOCKS BELOW THE RED LINE'.",
                "On True use a Branch(Get Won) to set StatusText='YOU HELD THE LINE!",
                "Press R' or 'DEFENCE FAILED!",
                "Press R'.",
                "Compile."
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
                "Open WBP_RisingDefenceHUD → Event Construct.",
                "Event Construct → call RefreshHUD once, then Set Timer by Event(Time=0.25, Looping=true; delegate Create Event → RefreshHUD).",
                "This timer is UI-only and belongs to the Widget.",
                "It must NOT call SpawnOneBlock or change the GameMode's countdown."
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
                "Open BP_LoopsPlayerController → Event BeginPlay.",
                "Keep the ONE BeginPlay chain from Stage 1: Show Mouse Cursor → Set Input Mode Game And UI → Set View Target with Blend → Add Mapping Context(IMC_RisingDefence).",
                "AFTER Add Mapping Context, add Create Widget(Class=WBP_RisingDefenceHUD, Owning Player=Self) → Add to Viewport.",
                "Do not create another controller or multiple HUD widgets."
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
                "Open Content/Loops → Input assets and BP_LoopsPlayerController.",
                "Create Input Action IA_RisingRestart (Digital).",
                "In the EXISTING IMC_RisingDefence map IA_RisingRestart to Keyboard R.",
                "In BP_LoopsPlayerController add IA_RisingRestart Started → Open Level(by Name), using Get Current Level Name (Remove Prefix String=true) into Level Name.",
                "Do NOT call SpawnOneBlock or reset arrays by hand; reloading the map resets everything."
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
                "Open LoopsLevel → BP_LoopsGameMode Class Defaults → Play.",
                "Temporarily set SecondsLeft default=5 and test a WIN by shooting until the timer reaches zero.",
                "Then keep SecondsLeft=5, temporarily set BP_RisingBlock MaxHeight default=90 and test a LOSS when the block grows to that height.",
                "Restore SecondsLeft=60 and MaxHeight=450, Compile and Save BOTH Blueprints.",
                "Test R after both endings."
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
                "Open LoopsLevel → Play in Editor.",
                "Play a full run with normal values.",
                "Watch that fresh threats appear in random lanes, shooting releases them, Hits rises and the limit line is visible.",
                "Win only after 60 seconds without a breach.",
                "Intentionally let one reach the line in a second run and confirm you lose.",
                "The score is the number of blocks shot, so friends can replay to beat each other's score."
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
                "Open BP_RisingBlock → Variables.",
                "Add FastThreat Boolean default false; tick Instance Editable and Expose on Spawn.",
                "In Content/Loops create a Material asset M_RisingDanger (red Base Color) and Save; assign it to BlockMesh in Stage 4 Step 2, not to the normal blocks now.",
                "Compile so FastThreat becomes a Spawn Actor input pin."
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
                "Open BP_RisingBlock → Event BeginPlay BEFORE UpdateBlockVisual.",
                "Avoid merging two Branch execution paths.",
                "Instead, in Event BeginPlay use one straight WHITE execution chain: Set GrowthSpeed → BlockMesh.Set Material(Element Index=0) → UpdateBlockVisual.",
                "Feed Set GrowthSpeed with a Select Float node controlled by FastThreat (False=35, True=60).",
                "Feed Set Material with a Select Material node controlled by FastThreat (False=normal material, True=red warning material).",
                "Compile; do not change the Event Tick growth maths."
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
                "Open BP_LoopsGameMode → SpawnOneBlock → Spawn Actor Class=BP_RisingBlock.",
                "Before Spawn Actor, use Random Integer in Range(1,4) == 1 and connect the Boolean to FastThreat on the SAME Spawn Actor node.",
                "Leave the five FreeLanes array, spawn timing, LaneIndex pin and coordinates untouched."
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
                "Open LoopsLevel → Play.",
                "Defend for 60 seconds against normal and red blocks.",
                "Let a red one reach the line on another attempt and check LoseRound still runs.",
                "If the game is too hard, change FastThreat GrowthSpeed from 60 to 45; if easy, 65.",
                "Do not change the maximum 450cm unless the camera/red line are adjusted together."
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
                "Open Artist/designer workstation → Photoshop, 3ds Max or material editor.",
                "Choose ONE achievable theme: defensive laser turret, anti-virus defence, robot factory overload or alien crystal containment.",
                "Make a distinctive block material and a readable red danger line; export PNG or FBX as needed.",
                "Programmer imports copies into local Unreal."
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
                "Open BP_LoopsPlayerController → existing IA_RisingFire path.",
                "After the Line Trace By Channel on hit-TRUE, add a short Play Sound 2D or Spawn Emitter at Location (Hit Result Impact Point) if available.",
                "You may print '+1' for successful hits during testing.",
                "Leave the trace endpoint, hit cast and BreakBlock calls untouched.",
                "Do not play score feedback when Line Trace returns false."
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
                "Open WBP_RisingDefenceHUD and LoopsLevel.",
                "Add a clear 'DANGER HEIGHT' label near the red line and make it visible from the fixed camera.",
                "Keep the HUD Canvas non-hit-testable.",
                "Test all five lanes with the tallest blocks: none should be hidden by Score, Time or instruction labels."
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
                "Open BP_LoopsGameMode Class Defaults and BP_RisingBlock defaults.",
                "Playtest with another pair.",
                "Starter settings: Spawn interval=1.5s, GrowthSpeed=35cm/s, MaxHeight=450cm, round=60s.",
                "For easier play change GrowthSpeed to 25; for harder play try 45 or Spawn interval=1.1.",
                "Change ONE number at a time and run a full test; keep FreeLanes protection."
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
                "Open LoopsLevel → Play in Editor/Package Project.",
                "Prepare a 2–5 minute demo or packaged Windows build.",
                "Explain how the original Loops tutorial created repeated objects, how your timer randomly selects FreeLanes, how a Line Trace By Channel shoots targets, and why you tuned the height limit.",
                "Demonstrate win, loss and R restart."
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
