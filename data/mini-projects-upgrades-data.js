/* Text-only, original Mini-Project extension guides. No course images or duplicated source walkthroughs. */
window.UE5_MINI_UPGRADE_DATA = {
  "version": "3.64.1",
  "title": "Mini-Project Upgrade Walkthroughs",
  "intro": "Finish one original guided Mini-Project, then follow these text-only expansions. Start with Essential stages; the Creative stage gives your pair room to make it yours. Save your Unreal project after every stage.",
  "projects": [
    {
      "project": "balloon-popper",
      "title": "Balloon Popper → Arcade Challenge",
      "intro": "Turn the click-to-pop prototype into a scored, timed arcade game. Complete Score first; the timer and danger balloons build on it.",
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
          "id": "timer",
          "title": "2. Add a 60-second round and score HUD",
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
            }
          ],
          "check": "Score increases on a pop. Time counts down 60→0. No score or growth is possible after zero.",
          "fix": "HUD missing? Check the controller is assigned in BP_BalloonGameMode and Create Widget is connected. Time frozen? Confirm TickClock is connected to Set Timer by Event with Looping ticked."
        },
        {
          "id": "risk",
          "title": "3. Add risky balloons and your own style",
          "tier": "Creative",
          "outcome": "Red danger balloons subtract two points, while normal ones add one. The designer gives both a readable visual identity.",
          "designer": "Make red targets unmistakable with a different silhouette or symbol, not colour alone; create an original target model, backdrop or UI look.",
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
              "title": "Set up a fair test arena",
              "where": "Open BalloonPopperLevel.",
              "do": "Replace a few normal balloons with BP_DangerBalloon actors. Start with 5 safe balloons and 2 danger balloons, grouped where players can see both types.",
              "why": "A risk/reward decision only works when players can identify the difference.",
              "check": "Both types can be clicked and are visible from the starting camera."
            },
            {
              "title": "Test positive, negative and zero scores",
              "where": "Play In Editor.",
              "do": "Pop three safe balloons, then one danger balloon: the score should go 0→3→1. Pop danger balloons at zero; the Max calculation from Upgrade 1 must keep the score at 0.",
              "why": "Testing both extremes catches incorrect negative-point wiring.",
              "check": "Points match every target type and never drop below zero."
            },
            {
              "title": "Give the game a fresh look",
              "where": "Artist/designer PC → 3ds Max, Photoshop or Substance Painter; share exports through Teams.",
              "do": "Make at least one original game asset or UI element and export FBX/PNG. On the programmer PC, import or reimport it into the BalloonPopper content folder and fit it into the level.",
              "why": "The final project should look different from the tutorial, not just have new code.",
              "check": "Both partners can point to a change they made that improves play."
            }
          ],
          "check": "The player can choose between safe +1 targets and dangerous -2 targets in a complete timed challenge.",
          "fix": "Wrong points? Check the normal actor still sends 1 and the danger copy sends -2 to AwardPoints; ensure neither actor has a second, duplicate scoring call."
        }
      ]
    },
    {
      "project": "bowling",
      "title": "Bowling → Arcade Bowling",
      "intro": "Turn the one-throw physics demonstration into a target-scoring round with a clock, a replay key and meaningful pin values.",
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
          "id": "round",
          "title": "2. Add a 45-second round and restart",
          "tier": "Essential",
          "outcome": "The player has 45 seconds to knock the pins over and can press R to replay a clean round.",
          "designer": "Plan a simple start-of-round message and how the player will learn that R restarts.",
          "steps": [
            {
              "title": "Add remaining time",
              "where": "BP_BowlingGameMode → Variables.",
              "do": "Create SecondsLeft (Integer; 45). Keep RoundFinished from Upgrade 1. Compile.",
              "why": "The existing round-end flag can now represent a win or timeout.",
              "check": "SecondsLeft starts at 45 in the Details panel."
            },
            {
              "title": "Start a one-second repeating timer",
              "where": "BP_BowlingGameMode → Event Graph → Event BeginPlay.",
              "do": "Add Set Timer by Event with Time = 1.0, Looping = true. Create a Custom Event named TickRound and connect it to the red Event pin. Promote Return Value to RoundTimerHandle.",
              "why": "Timers are predictable and cheaper than calculating countdowns each frame.",
              "check": "Timer starts once as the level loads."
            },
            {
              "title": "Stop the round when time runs out",
              "where": "BP_BowlingGameMode → TickRound.",
              "do": "Branch on NOT RoundFinished. On True set SecondsLeft = Max (Integer)(0, SecondsLeft - 1). Branch on SecondsLeft <= 0; on True set RoundFinished = true, Print String \"TIME UP!\" and Clear and Invalidate Timer by Handle using RoundTimerHandle.",
              "why": "When the clock reaches zero, the score should be final.",
              "check": "The timer stops at zero and no later fallen pin can add points."
            },
            {
              "title": "Stop the clock on a win",
              "where": "BP_BowlingGameMode → RecordPin function → the True branch that sets RoundFinished.",
              "do": "After Set RoundFinished = true, add Clear and Invalidate Timer by Handle using RoundTimerHandle. Leave the success message in place.",
              "why": "Winning ends the round immediately rather than leaving the timer running.",
              "check": "Knock every pin down and the clock stops before zero."
            },
            {
              "title": "Add a restart input action",
              "where": "Content Drawer → Bowling → Input.",
              "do": "Create Input Action IA_Restart with Value Type Boolean. Open the Input Mapping Context already used by the Bowling project, add IA_Restart and map it to keyboard R. Save.",
              "why": "Using the existing Enhanced Input setup keeps controls together.",
              "check": "The Mapping Context lists IA_Restart → R."
            },
            {
              "title": "Restart a clean level on R",
              "where": "BP_BowlingPlayerController → Event Graph.",
              "do": "Add the IA_Restart input event and use its Started execution pin → Get Current Level Name → Open Level (by Name), wiring the level name output to Level Name. Set Remove Prefix String true on Get Current Level Name. Compile.",
              "why": "Reopening the current map resets the ball, pins, score and timer in one simple action.",
              "check": "Press R after a throw: the ball and pins return to their original positions and the timer resets to 45."
            },
            {
              "title": "Prevent late throws",
              "where": "BP_BowlingPlayerController → existing IA_Throw input event.",
              "do": "Before the existing throw call, add Get Game Mode → Cast To BP_BowlingGameMode → Get RoundFinished → NOT → Branch. Only the True execution pin calls the original throw logic.",
              "why": "The end of a round needs to stop new gameplay input.",
              "check": "Throw works normally during the round but not after time runs out."
            }
          ],
          "check": "At zero seconds the round ends; pressing R resets every pin, the ball, the score and the clock.",
          "fix": "R not working? Check IA_Restart was added to the SAME Input Mapping Context registered on BeginPlay, and that you used Started rather than Triggered."
        },
        {
          "id": "polish",
          "title": "3. Add a score HUD and special pins",
          "tier": "Creative",
          "outcome": "A readable scoreboard shows pin count and time, and one clearly marked bonus pin is worth more points.",
          "designer": "Create the HUD appearance and a unique special pin material/mesh. Test whether players can identify the bonus target.",
          "steps": [
            {
              "title": "Create a scoreboard widget",
              "where": "Content Drawer → Bowling → User Interface → Widget Blueprint → User Widget.",
              "do": "Name it WBP_BowlingHUD. In Designer place three Text widgets: ScoreText, PinsText and TimeText. Tick Is Variable for each. Set placeholder labels \"Score: 0\", \"Pins: 0\", \"Time: 45\".",
              "why": "Players should see progress constantly, not only via debug text.",
              "check": "The labels stay readable at the game viewport size."
            },
            {
              "title": "Connect labels to the GameMode",
              "where": "WBP_BowlingHUD → select each Text widget → Details → Text → Bind → Create Binding.",
              "do": "In each generated binding function use Get Game Mode → Cast To BP_BowlingGameMode. Read the matching Score, PinsDown or SecondsLeft Integer, then use ToText (Integer) or Format Text to return a readable label. Provide 0 as a safe fallback if the cast fails.",
              "why": "Binding a tiny HUD to existing game state avoids making another set of counter variables.",
              "check": "The score, pin count and clock on screen match the values in the GameMode."
            },
            {
              "title": "Display the widget at the start",
              "where": "BP_BowlingPlayerController → Event Graph → BeginPlay.",
              "do": "After the existing Add Mapping Context setup, add Create Widget (Class = WBP_BowlingHUD; Owning Player = Self) → Add to Viewport. Use Sequence if multiple independent actions must run on BeginPlay. Compile.",
              "why": "The controller already manages input and the player’s view.",
              "check": "Press Play and see the scoreboard without manually opening any widget."
            },
            {
              "title": "Make pin values editable",
              "where": "BP_BowlingPin → Variables → +.",
              "do": "Create PinValue (Integer; default 1). Tick Instance Editable. In the earlier RecordPin call replace the hard-coded 1 with Get PinValue. Compile.",
              "why": "The same physics Blueprint can represent different rewards without duplicates.",
              "check": "Selecting a placed BP_BowlingPin actor shows PinValue in its Details panel."
            },
            {
              "title": "Create one bonus pin",
              "where": "In the Bowling level → select one placed BP_BowlingPin.",
              "do": "Set its PinValue to 3 in Details. Give that instance a visibly different material through its mesh component. Keep all other pins at 1.",
              "why": "A special pin introduces aiming decisions without a new gameplay system.",
              "check": "Knocking down the marked pin changes Score by 3 but PinsDown by only 1."
            },
            {
              "title": "Playtest and tune the lane",
              "where": "Play the level with another pair.",
              "do": "Ask them to explain the rules, play once and point out confusing UI or unfair physics. Adjust the special pin position, lane decoration, colours and on-screen hints.",
              "why": "Good visuals communicate the rules, not merely decorate them.",
              "check": "A player can explain the bonus pin and restart controls without teacher help."
            }
          ],
          "check": "The HUD shows correct live totals; a bonus pin awards 3 points but still counts as just one fallen pin.",
          "fix": "If a bonus pin still scores 1, check the RecordPin input is connected to Get PinValue in BP_BowlingPin and that the selected placed actor instance has value 3."
        }
      ]
    },
    {
      "project": "clicker",
      "title": "Clicker → Upgrade Shop",
      "intro": "Turn the one-point-per-click tutorial into a small progression game. Players buy upgrades, watch their earnings grow and race to a target.",
      "stages": [
        {
          "id": "shop",
          "title": "1. Buy more powerful clicks",
          "tier": "Essential",
          "outcome": "Points can buy an upgrade; each purchase increases the points earned per click and doubles the next price.",
          "designer": "Sketch a shop button and a layout that makes the cost and benefit obvious.",
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
          "title": "2. Make the shop information visible",
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
          "title": "3. Add a win target and replay button",
          "tier": "Creative",
          "outcome": "Reach 100 points to win; clicking stops and the player can restart for another run.",
          "designer": "Design a clear success message and a Restart button. Use original typography, iconography or animation.",
          "steps": [
            {
              "title": "Add a win target",
              "where": "Clicker GameMode → Variables.",
              "do": "Create TargetScore (Integer; default 100) and GameWon (Boolean; default false). Compile.",
              "why": "The player now has a meaningful goal rather than an endless counter.",
              "check": "Both variables appear with correct defaults."
            },
            {
              "title": "Finish the round on the winning click",
              "where": "Clicker GameMode → AddClick function.",
              "do": "Add Branch on NOT GameWon at the start. Only True continues to the existing Score + ClickPower logic. After Set Score add a comparison Score >= TargetScore → Branch. When True set GameWon = true.",
              "why": "The win happens at a predictable score and repeated clicks cannot inflate it afterwards.",
              "check": "When Score reaches or passes 100, GameWon becomes true."
            },
            {
              "title": "Display a permanent result",
              "where": "Clicker Widget → Designer.",
              "do": "Add a Text widget named ResultText, set text \"TARGET REACHED!\", tick Is Variable and set its initial Visibility to Collapsed.",
              "why": "A persistent message tells the player they have finished.",
              "check": "The result text does not appear at the start of play."
            },
            {
              "title": "Update the win state in the UI",
              "where": "Clicker Widget → RefreshShop function, after the score/power/cost updates.",
              "do": "From the GameMode cast, read GameWon and use Branch. When True set ResultText Visibility = Visible and Set Is Enabled = false on the main click button. When False set ResultText Visibility = Collapsed and keep the main click button enabled.",
              "why": "Players can see the finish state, and the button matches it.",
              "check": "The result appears as soon as the target is achieved and the main button is disabled."
            },
            {
              "title": "Create a restart button",
              "where": "Clicker Widget → Designer and Graph.",
              "do": "Add a Button named RestartButton with text \"Play Again\". Create its OnClicked event → Get Current Level Name (Remove Prefix String = true) → Open Level (by Name). Wire the returned current level name to Level Name.",
              "why": "Reloading the current level resets the small tutorial GameMode and widget in one step.",
              "check": "Click Play Again and see Score = 0, ClickPower = 1, UpgradeCost = 10, GameWon = false."
            },
            {
              "title": "Replace the default appearance",
              "where": "Artist/designer PC → Photoshop or 3ds Max; share exported PNG/FBX via Teams.",
              "do": "Make an original theme, e.g. bakery, salvage yard or robot factory. Import PNG UI assets, apply them to buttons, and retest readability with the designer.",
              "why": "A distinctive theme helps a simple clicker become recognisably your game.",
              "check": "The final widget uses at least one team-made visual asset."
            }
          ],
          "check": "From a fresh launch, earning 100 points displays a win state, disables clicking and supports a clean restart.",
          "fix": "No win message? Check the Score comparison occurs AFTER Set Score, RefreshShop is called after AddClick and ResultText is set to Visible when GameWon is true."
        }
      ]
    },
    {
      "project": "loops",
      "title": "Loops & Spawning → Target Rush",
      "intro": "The original tutorial only creates patterns of actors. These upgrades turn the spawned shapes into a game: click every target before time runs out.",
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
          "id": "race",
          "title": "2. Add a 30-second challenge and replay",
          "tier": "Essential",
          "outcome": "The target-clearing game becomes a 30-second race with a restart key.",
          "designer": "Design a simple instruction panel with the target count, deadline and R to restart.",
          "steps": [
            {
              "title": "Add a countdown value",
              "where": "Your Loops GameMode → Variables.",
              "do": "Create SecondsLeft (Integer; default 30). Keep Finished from Upgrade 1. Compile.",
              "why": "The timer gives the targets a reason to be clicked quickly.",
              "check": "SecondsLeft begins at 30."
            },
            {
              "title": "Start a once-per-second event",
              "where": "Loops GameMode → Event Graph → Event BeginPlay.",
              "do": "After the existing spawn loop has been started, add Set Timer by Event, Time = 1.0, Looping = true. Attach a Custom Event TickRush to its red Event pin and promote the returned Timer Handle to RushTimerHandle. Use a Sequence after BeginPlay if needed to start the loop and timer separately.",
              "why": "A stable one-second callback is easier to understand than Event Tick.",
              "check": "The event fires once per second during play."
            },
            {
              "title": "Time out cleanly",
              "where": "Loops GameMode → TickRush.",
              "do": "Branch on NOT Finished. From True set SecondsLeft = Max (Integer)(0, SecondsLeft - 1). If SecondsLeft <= 0, set Finished = true, Print String \"TIME UP!\" and Clear and Invalidate Timer by Handle using RushTimerHandle.",
              "why": "The countdown must have a definite ending and must not go negative.",
              "check": "After 30 seconds the number is 0 and target clicks stop working."
            },
            {
              "title": "Stop the clock when all targets are cleared",
              "where": "Loops GameMode → HitTarget function → final True branch.",
              "do": "After Set Finished = true on the five-target win, add Clear and Invalidate Timer by Handle using RushTimerHandle.",
              "why": "The time is frozen at the moment the player wins.",
              "check": "Clearing all five targets before the deadline stops the countdown."
            },
            {
              "title": "Add a replay key",
              "where": "Content Drawer → Loops folder → Input → Input Action.",
              "do": "Create IA_RestartRush (Boolean) and IMC_TargetRush (Input Mapping Context) mapping the action to R. In BP_LoopsPlayerController BeginPlay, add IMC_TargetRush via Enhanced Input Local Player Subsystem → Add Mapping Context.",
              "why": "An action asset makes the replay key consistent with the other Unreal projects.",
              "check": "The context is added on BeginPlay."
            },
            {
              "title": "Restart the current level",
              "where": "BP_LoopsPlayerController → Event Graph.",
              "do": "Add IA_RestartRush event → Started → Get Current Level Name (Remove Prefix String true) → Open Level (by Name). Compile.",
              "why": "Reloading the current map respawns targets and resets its GameMode values.",
              "check": "Press R: five targets and a fresh 30-second clock are ready."
            },
            {
              "title": "Make the target rush yours",
              "where": "Artist/designer PC → Photoshop, 3ds Max or Substance Painter.",
              "do": "Make one original target mesh/material or backdrop. Share FBX/PNG through Teams, import it into BP_ClickTarget, and adjust spacing so everything fits the camera. Give the game a title and short on-screen control instructions.",
              "why": "The prototype now has a visual identity and a fair, readable challenge.",
              "check": "A partner can understand how to play without explanation."
            }
          ],
          "check": "Players must click all five targets within 30 seconds; R resets the entire challenge.",
          "fix": "If R does nothing, confirm the Enhanced Input Mapping Context was added to the active controller and the action uses Started. If the clock does not run, confirm the timer is connected after BeginPlay."
        }
      ]
    }
  ]
};
