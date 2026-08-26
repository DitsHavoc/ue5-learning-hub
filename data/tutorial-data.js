window.UE5_TUTORIAL_DATA = {
  "version": "3.30.0",
  "buildDate": "26 Aug 2026",
  "categories": [
    {
      "id": "movement",
      "title": "Movement & Input",
      "icon": "↗",
      "description": "Movement mechanics and player input you can drop into prototypes quickly."
    },
    {
      "id": "interaction",
      "title": "Interaction",
      "icon": "◎",
      "description": "Keys, doors, prompts, pickups and reusable ways for the player to affect the world."
    },
    {
      "id": "combat",
      "title": "Combat",
      "icon": "✦",
      "description": "Hitscan, projectiles, health, damage and simple combat feedback."
    },
    {
      "id": "player",
      "title": "Player & Game Rules",
      "icon": "♥",
      "description": "Lives, score, checkpoints, timers and the rules that turn mechanics into a game."
    },
    {
      "id": "ui",
      "title": "HUD & UI",
      "icon": "▤",
      "description": "Small UMG recipes for showing useful gameplay information."
    },
    {
      "id": "world",
      "title": "World Systems",
      "icon": "⚙",
      "description": "Moving platforms, hazards, spawners and level systems."
    },
    {
      "id": "ai",
      "title": "AI",
      "icon": "◉",
      "description": "Small enemy behaviours that build toward proper AI systems."
    },
    {
      "id": "data",
      "title": "Data & Save",
      "icon": "▦",
      "description": "Persistence, Structs and data-driven content."
    },
    {
      "id": "polish",
      "title": "Polish & Atmosphere",
      "icon": "✧",
      "description": "Sound, VFX, camera feedback and atmosphere that make prototypes feel intentional."
    }
  ],
  "tutorials": [
    {
      "id": "enhanced-input-action",
      "title": "Add a New Enhanced Input Action",
      "category": "movement",
      "duration": "10 min",
      "difficulty": "Beginner",
      "summary": "Create a new input action and map it to a key without hard-wiring keyboard checks into gameplay logic.",
      "uses": [
        "Enhanced Input",
        "Input Action",
        "Mapping Context",
        "Triggered"
      ],
      "referenceLesson": "events",
      "steps": [
        {
          "title": "Create the Input Action asset",
          "where": "Content Drawer → Input folder → right-click → Input → Input Action",
          "do": "Create an Input Action called IA_Action.",
          "doList": [
            "Open the asset after creating it.",
            "For a simple button press, keep Value Type as Digital (Bool)."
          ],
          "why": "Input Actions represent a gameplay intention such as Interact or Dash, not a specific key.",
          "see": "IA_Action exists and shows a Boolean value type.",
          "check": "The asset saves without warnings.",
          "visual": {
            "src": "assets/ue5/current/editor-panels-closeup.webp",
            "caption": "Create new input assets in your project folders.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Open the Mapping Context",
          "where": "Input folder → IMC_Default or your project’s active Input Mapping Context",
          "do": "Open the Mapping Context used by the player.",
          "why": "The Mapping Context is where physical buttons are linked to the abstract Input Action.",
          "see": "Existing mappings such as movement or jump are visible.",
          "check": "You can identify where keyboard and gamepad bindings are listed.",
          "visual": {
            "src": "assets/ue5/current/editor-panels-closeup.webp",
            "caption": "The Mapping Context stores the actual control bindings.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Add IA_Action to the mappings",
          "where": "Inside the Mapping Context → Add mapping row",
          "do": "Add IA_Action and bind it to a key such as E.",
          "why": "Until the Mapping Context contains a binding, pressing the key will do nothing.",
          "see": "IA_Action appears in the mapping list with E assigned.",
          "check": "The binding is saved in the Mapping Context asset.",
          "visual": {
            "src": "assets/ue5/current/editor-panels-closeup.webp",
            "caption": "Bind the Input Action to a specific key in the Mapping Context.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Add the event to the Character Blueprint",
          "where": "Player Character Blueprint → Event Graph → right-click → search IA_Action",
          "do": "Add the IA_Action event to the Character Blueprint.",
          "why": "Gameplay logic should respond to the action event rather than hard-coded keyboard checks.",
          "see": "An IA_Action event node appears in the graph.",
          "check": "The event node has pins such as Started or Triggered.",
          "visual": {
            "src": "assets/ue5/current/events-execution-real.webp",
            "caption": "Input actions become event nodes inside the Character graph.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Prove it fires",
          "where": "Connect Started or Triggered → Print String",
          "do": "Print a short message and press Play.",
          "why": "A tiny proof test isolates input setup before you build the real mechanic.",
          "see": "Pressing E prints the message at the correct moment.",
          "check": "Changing the key in the Mapping Context changes the control without rewriting gameplay logic.",
          "troubleshoot": [
            "If nothing prints, confirm that the Character is the one being possessed and that the Mapping Context used by the player is the one you edited."
          ],
          "visual": {
            "src": "assets/ue5/current/events-execution-closeup.webp",
            "caption": "Use a quick Print String test before building the full mechanic.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Adding the action asset but forgetting to map it in the Mapping Context.",
        "Using Triggered for an action that should happen once; Started is often better for a single press."
      ],
      "makeItYours": [
        "Change the keyboard key without touching the gameplay graph.",
        "Map a gamepad button to the same Input Action."
      ],
      "worksWhen": [
        "The action fires in Play mode.",
        "Changing the mapped key changes the control without rewriting gameplay logic."
      ],
      "icon": "⌨",
      "featured": true,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Asset: IA_Action",
        "Value Type: Digital (Bool)",
        "Mapping Context: IMC_Default",
        "Teaching key: E"
      ],
      "studentRecipe": [
        "Content Drawer → Input folder → right-click → Input → Input Action. Name it IA_Action.",
        "Open IA_Action → set Value Type Digital (Bool) → Save.",
        "Open IMC_Default → add a mapping row → choose IA_Action → set key E → Save.",
        "Open the player Character Blueprint → Event Graph → right-click → search IA_Action → add the Started event.",
        "From Started add Print String “Action pressed”. Compile.",
        "Play and press E once. The message should print once per press. If not, check the Mapping Context is the one added to the player."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "double-jump",
      "title": "Make a Double Jump",
      "category": "movement",
      "duration": "5 min",
      "difficulty": "Beginner",
      "summary": "Turn the standard Character jump into a double jump using the Character Movement system rather than building your own jump physics.",
      "uses": [
        "Character",
        "Jump Max Count",
        "Character Movement"
      ],
      "referenceLesson": "actors-components",
      "steps": [
        {
          "title": "Open the player Character Blueprint",
          "where": "Content Drawer → ThirdPerson / player folder → Character Blueprint",
          "do": "Open the Blueprint used by the player.",
          "why": "Jump settings live on the Character Movement system inside the Character.",
          "see": "The Character Blueprint opens with Character Movement available in Components.",
          "check": "The blueprint name matches your playable character.",
          "visual": {
            "src": "assets/book/blueprint-editor.webp",
            "caption": "Character settings are edited from the Character Blueprint.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Select Class Defaults",
          "where": "Top toolbar / Blueprint editor → Class Defaults",
          "do": "Switch to Class Defaults so you are editing default movement settings.",
          "why": "Jump Max Count is a class-level setting rather than a runtime node chain.",
          "see": "The Details panel now shows Character default properties.",
          "check": "You are no longer looking at a specific component detail panel.",
          "visual": {
            "src": "assets/book/blueprint-editor.webp",
            "caption": "Class Defaults expose the default settings for the Blueprint.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Set Jump Max Count to 2",
          "where": "Details panel → search “Jump Max Count”",
          "do": "Change Jump Max Count from 1 to 2.",
          "why": "A value of 2 allows the initial jump plus one extra jump in the air.",
          "see": "Jump Max Count now shows 2.",
          "check": "Compile saves the change.",
          "visual": {
            "src": "assets/diagrams/gold/actors-components-example.svg",
            "caption": "Even simple mechanics can come from correct built-in settings.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Compile and Play",
          "where": "Top toolbar → Compile, then Play",
          "do": "Run the game and press Jump twice while in the air.",
          "why": "You must test that the Character Movement component is respecting the new setting.",
          "see": "The character performs a second jump before landing.",
          "check": "A third jump should not be allowed.",
          "visual": {
            "src": "assets/ue5/current/editor-main-window.webp",
            "caption": "Test movement changes immediately in Play mode.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Explain why this is better than rewriting jump physics",
          "where": "After testing",
          "do": "State in your notes or out loud that you used the existing Character Movement system instead of building a new custom jump mechanic.",
          "why": "Professional work often means using the engine feature that already solves the problem well.",
          "see": "You can explain what setting changed the behaviour.",
          "check": "You know where to change it back if needed.",
          "visual": {
            "src": "assets/book/responsibility.webp",
            "caption": "A good solution is often the simplest engine-supported one.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        }
      ],
      "mistakes": [
        "Changing jump velocity when you only wanted an extra jump.",
        "Testing while using a Pawn that is not derived from Character."
      ],
      "makeItYours": [
        "Set Jump Max Count to 3 for a deliberately silly triple jump.",
        "Add a sound or Niagara burst only when the extra jump occurs."
      ],
      "worksWhen": [
        "One ground jump works.",
        "One additional airborne jump works.",
        "Landing resets the available jumps."
      ],
      "icon": "⇈",
      "featured": true,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Jump Max Count: 2",
        "Jump Z Velocity: keep project default first",
        "Test: one ground jump + one air jump"
      ],
      "studentRecipe": [
        "Open the player Character Blueprint → Class Defaults.",
        "Search “Jump Max Count” and set it to 2. Compile.",
        "Make sure the existing Jump input still calls Jump on Started/Triggered and Stop Jumping on Completed if your template uses it.",
        "Play: press Jump once from the floor, then press Jump once again before landing.",
        "Try a third press before landing. It must not create a third jump.",
        "Land and repeat. If the second jump never occurs, confirm Jump Max Count is 2 on the actual pawn class being played."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "sprint",
      "title": "Add Hold-to-Sprint",
      "category": "movement",
      "duration": "12 min",
      "difficulty": "Beginner",
      "summary": "Use an input action to temporarily raise Max Walk Speed while the player holds a sprint control.",
      "uses": [
        "Enhanced Input",
        "Character Movement",
        "Max Walk Speed"
      ],
      "referenceLesson": "variables",
      "steps": [
        {
          "title": "Create or confirm an Input Action for sprint",
          "where": "Input folder and Mapping Context",
          "do": "Use an Input Action such as IA_Sprint and map it to Left Shift.",
          "why": "Sprint should be an input action, not a raw key check inside gameplay logic.",
          "see": "IA_Sprint exists and is mapped to a sprint key.",
          "check": "The action binding is visible in the Mapping Context.",
          "visual": {
            "src": "assets/ue5/current/editor-panels-closeup.webp",
            "caption": "Map sprint through the Enhanced Input system.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Open the player Character graph",
          "where": "Character Blueprint → Event Graph",
          "do": "Open the player Character Blueprint and find the Event Graph.",
          "why": "Sprint changes the controlled character’s movement speed at runtime.",
          "see": "The graph is ready for input event logic.",
          "check": "Character Movement can be dragged in from the Components panel.",
          "visual": {
            "src": "assets/ue5/current/events-execution-real.webp",
            "caption": "Sprint logic lives in the Character Blueprint.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Handle sprint start",
          "where": "Right-click → search IA_Sprint → choose Started",
          "do": "On IA_Sprint Started, drag in Character Movement and set Max Walk Speed to a higher value such as 900.",
          "why": "The Started event is ideal for the moment the sprint key is pressed.",
          "see": "The graph shows IA_Sprint Started → Set Max Walk Speed.",
          "check": "Pressing sprint in Play makes the character move faster.",
          "visual": {
            "src": "assets/ue5/current/function-update-closeup.webp",
            "caption": "Use a clear event chain to change movement properties.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Handle sprint end",
          "where": "Same IA_Sprint event node → Completed or Canceled",
          "do": "On Completed or Canceled, set Max Walk Speed back to the normal value such as 500.",
          "why": "Hold-to-sprint needs a clear reset when the key is released.",
          "see": "The character returns to normal speed when the key is released.",
          "check": "Walking speed is consistent every time sprint ends.",
          "visual": {
            "src": "assets/ue5/current/events-execution-closeup.webp",
            "caption": "Pair the start event with a matching reset.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Test and tune the values",
          "where": "Play mode",
          "do": "Run, hold sprint and release it several times, adjusting the normal and sprint speed if needed.",
          "why": "Movement values should feel intentional rather than arbitrary.",
          "see": "The speed change is noticeable but controllable.",
          "check": "You can point to exactly which two values control the feel.",
          "troubleshoot": [
            "If speed never changes, confirm the player character being controlled is the same Blueprint you edited."
          ],
          "visual": {
            "src": "assets/ue5/current/editor-main-window.webp",
            "caption": "Testing movement repeatedly helps you tune the feel.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Only setting sprint speed and never resetting it.",
        "Putting the logic on Tick instead of reacting to input state changes."
      ],
      "makeItYours": [
        "Prevent sprint while moving backwards.",
        "Add a stamina Boolean later and branch before enabling sprint."
      ],
      "worksWhen": [
        "Pressing sprint increases speed.",
        "Releasing sprint restores normal speed.",
        "Speed values are easy to tune."
      ],
      "icon": "»",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "IA_Sprint: Left Shift",
        "Walk speed: 500",
        "Sprint speed: 900"
      ],
      "studentRecipe": [
        "Create/use IA_Sprint and map it to Left Shift in the active Mapping Context.",
        "Open the player Character Blueprint → Event Graph → add IA_Sprint Started.",
        "Drag Character Movement into the graph → Set Max Walk Speed → set 900 → connect Started execution.",
        "Use IA_Sprint Completed (and Canceled if exposed) → Set Max Walk Speed → set 500.",
        "Compile and Play. Move normally, hold Left Shift, release it.",
        "If speed stays at 900 after release, your Completed/Canceled path is not connected."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "dash",
      "title": "Make a Simple Dash",
      "category": "movement",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Push the Character quickly in its facing direction with a cooldown so the mechanic feels deliberate rather than spammy.",
      "uses": [
        "Forward Vector",
        "Launch Character",
        "Boolean",
        "Timer"
      ],
      "referenceLesson": "functions",
      "steps": [
        {
          "title": "Create or map the dash input action",
          "where": "Input Action + Mapping Context",
          "do": "Create IA_Dash or confirm an existing one is mapped to a key such as Left Alt.",
          "why": "Dash should be triggered from Enhanced Input like any other mechanic.",
          "see": "The dash action exists and is mapped.",
          "check": "The Input Action can be found in the Character Blueprint search.",
          "visual": {
            "src": "assets/ue5/current/editor-panels-closeup.webp",
            "caption": "Use an input action for dash rather than a raw key event.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Add the dash event to the Character graph",
          "where": "Character Blueprint → Event Graph",
          "do": "Add the IA_Dash Started event.",
          "why": "Dash begins from a clean one-shot event when the player presses the key.",
          "see": "The dash event node appears in the graph.",
          "check": "It has a Started execution pin ready for logic.",
          "visual": {
            "src": "assets/ue5/current/events-execution-real.webp",
            "caption": "The dash starts from an input event in the Character graph.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Get the forward direction and launch the Character",
          "where": "From the Character → Get Actor Forward Vector and Launch Character",
          "do": "Multiply the forward vector by a dash strength and feed it into Launch Character.",
          "why": "Launching the character forward gives a fast readable prototype dash.",
          "see": "The node chain points from input event to Launch Character.",
          "check": "Pressing the dash key pushes the character forward quickly.",
          "visual": {
            "src": "assets/diagrams/gold/framework-example.svg",
            "caption": "Some gameplay mechanics are just clear transforms or movement impulses.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Prevent endless repeated dashes if needed",
          "where": "Branch or cooldown variable in the graph",
          "do": "Add a simple cooldown Boolean or delay if you do not want instant repeated spamming.",
          "why": "Most real dashes need some control so they feel deliberate.",
          "see": "Repeated key presses are limited in the way you designed.",
          "check": "You can explain what currently stops or allows repeated dashing.",
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "A Branch can guard whether the dash is currently allowed.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Test direction, distance and feel",
          "where": "Play mode",
          "do": "Try dashing while standing still and while moving, then tune the dash strength.",
          "why": "The dash only matters if it feels readable and useful in play.",
          "see": "The dash distance is consistent and clearly forward.",
          "check": "You know which value changes the dash distance.",
          "visual": {
            "src": "assets/ue5/current/editor-main-window.webp",
            "caption": "Play-testing is where you tune the dash feel.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Using world X direction instead of the character/camera direction you intended.",
        "Forgetting to reset CanDash."
      ],
      "makeItYours": [
        "Dash in movement-input direction instead of facing direction.",
        "Add camera shake, sound and Niagara at dash start."
      ],
      "worksWhen": [
        "Dash travels in the intended direction.",
        "Dash cannot be spammed during cooldown.",
        "Cooldown reliably resets."
      ],
      "icon": "⇢",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "IA_Dash: Left Alt",
        "Dash strength: 1200",
        "Cooldown: 0.60 s",
        "Launch: XY Override ON, Z Override OFF"
      ],
      "studentRecipe": [
        "Create/use IA_Dash mapped to Left Alt.",
        "Character Blueprint → Event Graph → IA_Dash Started.",
        "Get Actor Forward Vector → multiply by Float 1200.",
        "Add Launch Character. Connect the scaled vector to Launch Velocity. Enable XY Override; leave Z Override off.",
        "After the launch, set CanDash False → Delay 0.60 → Set CanDash True. Branch on CanDash before Launch Character.",
        "Compile and Play. Press Left Alt while still and while moving. The launch must remain forward and should not be endlessly spammable."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "crouch",
      "title": "Add Crouch",
      "category": "movement",
      "duration": "10 min",
      "difficulty": "Beginner",
      "summary": "Use the built-in Character crouch support and an input action instead of manually scaling the capsule.",
      "uses": [
        "Character Movement",
        "Crouch",
        "Capsule"
      ],
      "referenceLesson": "actors-components",
      "steps": [
        {
          "title": "Enable crouching",
          "where": "Character Blueprint → Components → Character Movement → Details → Nav Movement / Movement Capabilities",
          "do": "Select Character Movement and enable Can Crouch in Nav Movement / Movement Capabilities.",
          "why": "The Character Movement component already knows how to resize movement collision for crouch.",
          "see": "Can Crouch is enabled.",
          "check": "Before moving on, prove this step: Can Crouch is enabled.",
          "troubleshoot": [
            "If Crouch does nothing, confirm Can Crouch is enabled on Character Movement."
          ],
          "visual": null
        },
        {
          "title": "Create IA_Crouch",
          "where": "Content Drawer → Input folder → create/open IA_Crouch and the active Input Mapping Context",
          "do": "Map a Digital Input Action to C or Ctrl.",
          "why": "Keeps controls separate from gameplay logic.",
          "see": "The action fires while playing.",
          "check": "Before moving on, prove this step: The action fires while playing.",
          "troubleshoot": [
            "If the action never fires, confirm IA_Crouch is in the Mapping Context actually added to the player."
          ],
          "visual": null
        },
        {
          "title": "Crouch on Started",
          "where": "Character Blueprint → Event Graph → right-click → search IA_Crouch",
          "do": "Call Crouch from IA_Crouch Started.",
          "why": "This asks the Character to enter its supported crouched state.",
          "see": "The capsule/character moves into crouched state.",
          "check": "Before moving on, prove this step: The capsule/character moves into crouched state.",
          "troubleshoot": [
            "If it crouches repeatedly, use Started rather than Triggered for the one-time call."
          ],
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "The crouch input event is an execution entry point.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "UnCrouch on Completed",
          "where": "IA_Crouch event → Completed output",
          "do": "Call UnCrouch from IA_Crouch Completed.",
          "why": "Releasing the input returns the Character to normal if there is space.",
          "see": "The character stands again when released.",
          "check": "Before moving on, prove this step: The character stands again when released.",
          "troubleshoot": [
            "If the character stays crouched, ensure Completed/Canceled reaches UnCrouch."
          ],
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "Release/Completed provides the matching exit from crouch.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Tune height/speed",
          "where": "Character Movement component → Details → search Crouched Half Height and Max Walk Speed Crouched",
          "do": "Adjust Crouched Half Height and Max Walk Speed Crouched on Character Movement.",
          "why": "Tuning the built-in values is safer than rebuilding collision.",
          "see": "Crouch has a visibly different height and speed.",
          "check": "Before moving on, prove this step: Crouch has a visibly different height and speed.",
          "troubleshoot": [
            "If the camera clips, check crouched capsule height and camera setup together."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Scaling the Character mesh and leaving collision unchanged.",
        "Forgetting to enable Can Crouch."
      ],
      "makeItYours": [
        "Make crouch a toggle instead of hold.",
        "Add an Animation Blueprint crouch state later."
      ],
      "worksWhen": [
        "Crouch changes collision correctly.",
        "Standing is blocked if there is no headroom.",
        "Movement speed changes while crouched."
      ],
      "icon": "⌄",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "IA_Crouch: C or Left Ctrl",
        "Can Crouch: Enabled",
        "Max Walk Speed Crouched: 250"
      ],
      "studentRecipe": [
        "Create/use IA_Crouch mapped to C or Left Ctrl.",
        "Select Character Movement → Nav Movement / Character Movement settings → enable Can Crouch.",
        "Set Max Walk Speed Crouched to 250. Compile.",
        "IA_Crouch Started → call Crouch on the Character.",
        "IA_Crouch Completed → call UnCrouch.",
        "Play under an open ceiling first. Hold/release crouch. If capsule/mesh does not change, verify Can Crouch is enabled on the Character Movement component."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "line-trace-interact",
      "title": "Look at an Object to Interact",
      "category": "interaction",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Cast a short trace from the camera so the player can interact with exactly what they are looking at.",
      "uses": [
        "Camera",
        "Forward Vector",
        "Line Trace By Channel",
        "Hit Result"
      ],
      "referenceLesson": "traces",
      "steps": [
        {
          "title": "Choose the trace origin",
          "where": "Player camera or Character blueprint",
          "do": "Use the camera or a point near it as the start of the interaction trace.",
          "why": "Interaction should usually happen where the player is looking.",
          "see": "You can identify the component that supplies the trace start.",
          "check": "The chosen start makes sense for a first-person or third-person interaction system.",
          "visual": {
            "src": "assets/diagrams/trace.svg",
            "caption": "Interaction traces usually start from the player camera.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Create the line trace",
          "where": "Character Blueprint → Event Graph → Line Trace by Channel",
          "do": "Build a trace from the camera forward a short distance such as 300–500 units.",
          "why": "This asks the world “what is directly in front of the player?”",
          "see": "The trace node is wired with Start and End values.",
          "check": "The Blueprint compiles successfully.",
          "visual": {
            "src": "assets/diagrams/gold/traces-process.svg",
            "caption": "Build a start and end point for the interaction trace.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Enable debug drawing",
          "where": "Line Trace node → Draw Debug Type",
          "do": "Set Draw Debug Type to For Duration while learning.",
          "why": "The debug line helps you see whether the trace reaches the object you expected.",
          "see": "A visible line appears when you test the interaction.",
          "check": "The debug line points where the camera aims.",
          "visual": {
            "src": "assets/diagrams/gold/traces-example.svg",
            "caption": "Debug lines make trace direction obvious.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Use the hit result to decide if something is interactable",
          "where": "Break Hit Result → Hit Actor",
          "do": "Print the hit Actor name or compare it against an interactable target.",
          "why": "The trace only detects; you still need to decide whether the hit object should respond.",
          "see": "Looking at an object prints or identifies the object hit.",
          "check": "Looking into empty space does not pretend to hit something.",
          "visual": {
            "src": "assets/diagrams/trace.svg",
            "caption": "Break the hit result to inspect what the player is looking at.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Connect the trace to an Interact input or prompt",
          "where": "Input Action or prompt system",
          "do": "Use the trace result to show a prompt or trigger an action when the player presses Interact.",
          "why": "This turns the detection pattern into a real gameplay system.",
          "see": "The prompt or interaction only works when the player is looking at the target.",
          "check": "The mechanic clearly stops when the target is out of range or not in view.",
          "visual": {
            "src": "assets/diagrams/gold/traces-process.svg",
            "caption": "The trace result becomes the condition for your interact system.",
            "kind": "concept",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Tracing from the Character feet instead of the camera.",
        "Forgetting to multiply Forward Vector by a useful range.",
        "Leaving permanent debug drawing enabled in the final build."
      ],
      "makeItYours": [
        "Highlight the currently targeted Actor.",
        "Only trace when the player presses Interact instead of every frame."
      ],
      "worksWhen": [
        "The trace follows the camera.",
        "Range is limited.",
        "Different interactables respond through the same message."
      ],
      "icon": "⌖",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "IA_Interact: E",
        "Trace distance: 300 cm",
        "Trace channel: Visibility",
        "Debug: For Duration"
      ],
      "studentRecipe": [
        "Create/use IA_Interact mapped to E.",
        "Character Blueprint → IA_Interact Started. Get FollowCamera World Location = Start.",
        "Get FollowCamera Forward Vector × 300 → add Start = End.",
        "Add Line Trace By Channel: Start/End as above, Visibility channel, Draw Debug For Duration.",
        "Branch from Return Value. True → Break Hit Result → Hit Actor → Print Display Name.",
        "Play, aim at an Actor within 300 cm and press E. If the line misses, first verify Start/End before adding casts or interfaces."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "key-pickup",
      "title": "Make a Key Pickup",
      "category": "interaction",
      "duration": "12 min",
      "difficulty": "Beginner",
      "summary": "Create a pickup that records possession of a key and removes itself from the world.",
      "uses": [
        "Collision",
        "Boolean",
        "Pickup",
        "Destroy Actor"
      ],
      "referenceLesson": "collision",
      "steps": [
        {
          "title": "Create the key Actor Blueprint",
          "where": "Learning folder → Blueprint Class → Actor",
          "do": "Create BP_KeyPickup with a visible mesh and collision component.",
          "why": "Pickups are usually separate Actors placed around the level.",
          "see": "A key Blueprint exists with a mesh and collision.",
          "check": "One instance can be placed in the level.",
          "visual": {
            "src": "assets/book/blueprint-editor.webp",
            "caption": "A simple pickup combines a mesh and collision component.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Add overlap detection",
          "where": "BP_KeyPickup → collision component → Event Graph → OnComponentBeginOverlap",
          "do": "Use the collision overlap event to detect the player touching the pickup.",
          "why": "Overlap is the standard way to detect a pickup collection.",
          "see": "Running into the key triggers the overlap event.",
          "check": "The event only fires when the player enters the collision area.",
          "visual": {
            "src": "assets/diagrams/gold/collision-process.svg",
            "caption": "Overlap events are ideal for pickups.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Store the “has key” state on the player",
          "where": "Player Character Blueprint → create Boolean variable HasKey",
          "do": "Add a Boolean variable called HasKey to the player Character.",
          "why": "The player needs to remember that the key has been collected.",
          "see": "HasKey exists and defaults to false.",
          "check": "You can Get and Set HasKey in the Character graph.",
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "Store collection state in a clear Boolean variable.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Set HasKey when the player overlaps",
          "where": "BP_KeyPickup overlap logic",
          "do": "Cast or otherwise access the player Character and set HasKey to true, then destroy or hide the key pickup.",
          "why": "Collecting the key should change player state and remove the pickup from the world.",
          "see": "Picking up the key removes it and the player now has the key.",
          "check": "The key cannot be collected twice.",
          "visual": {
            "src": "assets/book/casting-example.webp",
            "caption": "The pickup needs a valid reference to the player so it can update the state.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Prove the state changed",
          "where": "Temporary Print String or related door test",
          "do": "Print HasKey after pickup or use the variable in a locked door later.",
          "why": "A pickup is only meaningful if the game can use the new state.",
          "see": "The print or later test confirms HasKey is true after collection.",
          "check": "Starting the level again resets HasKey unless you also save it.",
          "visual": {
            "src": "assets/ue5/current/events-execution-closeup.webp",
            "caption": "Use a quick proof test before connecting the full door system.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Storing HasKey on the key itself, then destroying the Actor that owns the value.",
        "Using Block collision when you wanted a trigger."
      ],
      "makeItYours": [
        "Replace the Boolean with an Integer KeyCount.",
        "Create a child Blueprint with a different mesh but the same pickup logic."
      ],
      "worksWhen": [
        "Player state changes on overlap.",
        "The pickup disappears once collected.",
        "The key state is owned somewhere that survives the pickup."
      ],
      "icon": "⌑",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "HasKey Boolean: False",
        "Pickup collision radius/extent: 75 cm for the first build",
        "Key ID (optional): Key_A"
      ],
      "studentRecipe": [
        "Create BP_KeyPickup (Actor) with a visible mesh + collision.",
        "Player Character → create HasKey Boolean default False. Compile.",
        "BP_KeyPickup collision → OnComponentBeginOverlap → cast/check Player Character.",
        "On success → Set HasKey True on player → Destroy Actor (the pickup).",
        "Place the pickup and Play. Walk into it once.",
        "After pickup, print HasKey or inspect it in Blueprint debugger. It must change False → True before the key destroys itself."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "locked-door",
      "title": "Make a Key and Locked Door",
      "category": "interaction",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Connect a key pickup to a door so the door only opens after the player has earned access.",
      "uses": [
        "Boolean",
        "Branch",
        "Interaction",
        "Timeline"
      ],
      "referenceLesson": "branches",
      "steps": [
        {
          "title": "Create or place the door Blueprint",
          "where": "Door Blueprint with visible mesh",
          "do": "Use a simple door Actor or create one with a mesh and collision/interaction logic.",
          "why": "You need a door object that can check whether the player is allowed through.",
          "see": "The door exists as its own Blueprint or placed Actor.",
          "check": "You can identify the event that should try to open it.",
          "visual": {
            "src": "assets/diagrams/branch-locked-door-example.svg",
            "caption": "A locked door is a classic Branch decision example.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Make sure the player has a HasKey variable",
          "where": "Player Character Blueprint",
          "do": "Create or confirm a Boolean variable HasKey on the player.",
          "why": "The door needs a clear yes/no condition to test.",
          "see": "HasKey is available on the player Character.",
          "check": "The variable starts false until the key is picked up.",
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "The key state is best represented as a simple Boolean.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Get a reference to the player and read HasKey",
          "where": "Door Blueprint → overlap or interact event",
          "do": "When the player tries the door, get the player Character reference and read HasKey.",
          "why": "The door decision depends on the player’s collected state.",
          "see": "The graph has a path from player reference to HasKey.",
          "check": "The variable can be printed or branched from.",
          "visual": {
            "src": "assets/book/casting-example.webp",
            "caption": "The door needs a valid reference to the player state.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Branch on HasKey",
          "where": "Door graph → Branch",
          "do": "Use a Branch so True opens the door and False shows a locked message or sound.",
          "why": "Locked doors are literally a yes/no decision based on one piece of game state.",
          "see": "Trying the door produces one of two clear outcomes.",
          "check": "The door only opens after the key has been collected.",
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "True and False outcomes make the locked door logic clear.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Test both cases deliberately",
          "where": "Play mode",
          "do": "Try the door before collecting the key and again after collecting it.",
          "why": "You need to prove both the locked and unlocked behaviour.",
          "see": "The first attempt is blocked, the second opens.",
          "check": "You can explain exactly what variable changed between the two tests.",
          "visual": {
            "src": "assets/diagrams/branch-locked-door-example.svg",
            "caption": "Test the locked path and the unlocked path on purpose.",
            "kind": "concept",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Putting the Branch on BeginPlay so it only checks once.",
        "Casting every frame rather than only when interaction occurs.",
        "Opening the door on both True and False execution by accident."
      ],
      "makeItYours": [
        "Add a red/green indicator light driven by the same access state.",
        "Use KeyCount >= RequiredKeys instead of a single Boolean."
      ],
      "worksWhen": [
        "Door stays locked before pickup.",
        "Locked feedback tells the player why.",
        "Door opens after the key condition is satisfied."
      ],
      "icon": "▥",
      "featured": true,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "HasKey Boolean: False",
        "Door timeline: 1.0 s",
        "Closed Yaw: 0°",
        "Open Yaw: 90°"
      ],
      "studentRecipe": [
        "Player Character must already have HasKey Boolean default False.",
        "Create BP_LockedDoor with a door mesh and interaction trigger/input path.",
        "On interact: get player HasKey → Branch. False → Print “Door is locked”.",
        "True → run TL_OpenDoor: 1.0 s Alpha 0→1 → Lerp Rotator Yaw 0→90 → Set Relative Rotation on door mesh.",
        "Compile. Test without the key first; door must stay shut.",
        "Pick up the key, return and interact. Door must open. Do not remove the Branch just to make the animation work."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "pressure-plate",
      "title": "Make a Pressure Plate",
      "category": "interaction",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Open or activate something while an Actor is standing on a trigger plate.",
      "uses": [
        "Box Collision",
        "Begin Overlap",
        "End Overlap",
        "Reference"
      ],
      "referenceLesson": "collision",
      "steps": [
        {
          "title": "Create BP_PressurePlate",
          "where": "Content Drawer → Blueprint Class → Actor → BP_PressurePlate → Components",
          "do": "Add a visible plate mesh and Box Collision above it.",
          "why": "Separating visible mesh and trigger collision makes the system easy to tune.",
          "see": "The box covers the standing area.",
          "check": "Before moving on, prove this step: The box covers the standing area.",
          "troubleshoot": [
            "If overlap never fires, enlarge the Box Collision and confirm Generate Overlap Events."
          ],
          "visual": {
            "src": "assets/book/collision-responses.webp",
            "caption": "A pressure plate depends on a deliberately sized collision trigger.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Detect Begin Overlap",
          "where": "BP_PressurePlate → select Box Collision → Event Graph → OnComponentBeginOverlap",
          "do": "On Component Begin Overlap, check the overlapping Actor is the intended Pawn/object.",
          "why": "Filters stop random debris activating the plate unless you want that design.",
          "see": "Player stepping on the plate fires once.",
          "check": "Before moving on, prove this step: Player stepping on the plate fires once.",
          "troubleshoot": [
            "Print Other Actor once to prove what is entering the plate."
          ],
          "visual": {
            "src": "assets/diagrams/gold/collision-process.svg",
            "caption": "Begin Overlap detects the object entering the trigger.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Activate the target",
          "where": "BP_PressurePlate → Variables → create target reference → Details → Instance Editable",
          "do": "Store an Instance Editable reference to a target door/light and call its Activate/Open function.",
          "why": "Instance references let each placed plate control a different target.",
          "see": "Plate A can control Door A without hard-coded Get Actor of Class.",
          "check": "Before moving on, prove this step: Plate A can control Door A without hard-coded Get Actor of Class.",
          "troubleshoot": [
            "If Target is None, assign the reference on the placed plate instance in Details."
          ],
          "visual": {
            "src": "assets/diagrams/gold/references-casting-process.svg",
            "caption": "The plate needs a valid reference or interface target to activate.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Detect End Overlap",
          "where": "Box Collision → Event Graph → OnComponentEndOverlap",
          "do": "On End Overlap, call Deactivate/Close if the design should be hold-to-open.",
          "why": "Begin and End create a complete state transition.",
          "see": "Leaving the plate reverses the effect.",
          "check": "Before moving on, prove this step: Leaving the plate reverses the effect.",
          "troubleshoot": [
            "If the target never closes, verify End Overlap is wired and the design is hold-to-open."
          ],
          "visual": {
            "src": "assets/diagrams/gold/collision-process.svg",
            "caption": "End Overlap can reverse a hold-to-open plate.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Test edge cases",
          "where": "Play mode → approach the plate from several angles",
          "do": "Walk on/off quickly and try standing partly on the plate.",
          "why": "Triggers must behave reliably under awkward player movement.",
          "see": "No rapid flicker or stuck-open state occurs.",
          "check": "Before moving on, prove this step: No rapid flicker or stuck-open state occurs.",
          "troubleshoot": [
            "Test with one Actor first before supporting multiple simultaneous objects."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using Get Actor of Class when multiple doors exist.",
        "Forgetting End Overlap for a hold-to-activate plate."
      ],
      "makeItYours": [
        "Allow physics boxes to hold the plate down.",
        "Animate the plate moving down with a Timeline."
      ],
      "worksWhen": [
        "Entering activates the intended target.",
        "Leaving deactivates it if required.",
        "A different placed plate can target a different Actor."
      ],
      "icon": "▣",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Box Extent: 100,100,20",
        "Pressed offset: Z -5 cm",
        "Timeline: 0.20 s"
      ],
      "studentRecipe": [
        "Create BP_PressurePlate with Plate mesh + Box Collision.",
        "Set Box Collision Extent to X100 Y100 Z20 and preset Trigger.",
        "Create Timeline TL_Press, length 0.20 s, float Alpha 0→1.",
        "Lerp Relative Location from plate start to start + Z -5 cm. Timeline Update → Set Relative Location.",
        "BeginOverlap → Play; EndOverlap → Reverse.",
        "Play and step on/off. The plate should move only 5 cm and return cleanly."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "button-lever",
      "title": "Make an Interactable Button or Lever",
      "category": "interaction",
      "duration": "12 min",
      "difficulty": "Beginner",
      "summary": "Create a reusable world control that fires a single action when the player interacts.",
      "uses": [
        "Blueprint Interface",
        "Custom Event",
        "Instance Reference"
      ],
      "referenceLesson": "interfaces-dispatchers",
      "steps": [
        {
          "title": "Create BP_Button",
          "where": "Content Drawer → Blueprint Class → Actor → BP_Button → Class Settings → Implemented Interfaces",
          "do": "Give it a mesh and implement your BPI_Interact interface.",
          "why": "The button becomes compatible with the same interaction system as doors/pickups.",
          "see": "Calling Interact on the button reaches its interface event.",
          "check": "Before moving on, prove this step: Calling Interact on the button reaches its interface event.",
          "troubleshoot": [
            "If the interface event is missing, add the interface in Class Settings and Compile."
          ],
          "visual": {
            "src": "assets/diagrams/gold/interfaces-dispatchers-process.svg",
            "caption": "An interaction interface lets different objects receive the same Interact message.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Create OnActivated",
          "where": "BP_Button → Event Graph → right-click → Add Custom Event",
          "do": "Add a Custom Event or function named ActivateTarget.",
          "why": "Naming the responsibility makes the graph easier to read.",
          "see": "You can call ActivateTarget from the interaction event.",
          "check": "Before moving on, prove this step: You can call ActivateTarget from the interaction event.",
          "troubleshoot": [
            "Keep ActivateTarget as one clear job rather than hiding unrelated logic inside it."
          ],
          "visual": null
        },
        {
          "title": "Add Target Actor",
          "where": "My Blueprint → Variables → + → Actor/Object Reference → Instance Editable",
          "do": "Create an Actor reference variable and make it Instance Editable.",
          "why": "The level designer chooses what each button controls.",
          "see": "The variable appears in Details on placed instances.",
          "check": "Before moving on, prove this step: The variable appears in Details on placed instances.",
          "troubleshoot": [
            "If the target field is missing on the placed Actor, Compile after enabling Instance Editable."
          ],
          "visual": {
            "src": "assets/diagrams/gold/references-casting-example.svg",
            "caption": "An exposed reference lets each placed button point to its own target.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Call the target",
          "where": "BP_Button → Event Graph → drag Target Actor into graph → interface message call",
          "do": "Use an interface such as BPI_Activatable on Target Actor rather than casting to one exact class.",
          "why": "The button should not care whether it controls a door, light or lift.",
          "see": "Different target classes respond without changing the button.",
          "check": "Before moving on, prove this step: Different target classes respond without changing the button.",
          "troubleshoot": [
            "If the interface call appears to do nothing, confirm the target class implements that interface."
          ],
          "visual": {
            "src": "assets/diagrams/gold/interfaces-dispatchers-process.svg",
            "caption": "Use a message/interface when several target types should react cleanly.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Add feedback",
          "where": "BP_Button → Components / Event Graph → material, transform or audio feedback",
          "do": "Change material, rotate the lever, play a sound or briefly animate it.",
          "why": "The player needs confirmation that the interaction happened.",
          "see": "The control visibly/audibly responds every activation.",
          "check": "Before moving on, prove this step: The control visibly/audibly responds every activation.",
          "troubleshoot": [
            "Add feedback only after activation already works."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Hard-coding one specific door inside the button Blueprint.",
        "No feedback, so players press it repeatedly thinking it failed."
      ],
      "makeItYours": [
        "Make it one-use with an IsUsed Boolean.",
        "Make a timed button that resets after five seconds."
      ],
      "worksWhen": [
        "The universal interaction message activates the control.",
        "The target is configurable per instance.",
        "The player gets clear feedback."
      ],
      "icon": "●",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Interact key: E",
        "Lever rotation: 0° → 45°",
        "Timeline: 0.25 s"
      ],
      "studentRecipe": [
        "Create BP_Lever with base mesh, lever mesh and interaction collision.",
        "Create Timeline TL_Lever: 0.25 s, Alpha 0→1.",
        "Lerp Rotator from 0° to 45° on the lever’s intended axis → Set Relative Rotation.",
        "On interaction: if IsOn False → Play, Set IsOn True; else → Reverse, Set IsOn False.",
        "Compile and interact repeatedly.",
        "If the lever orbits, fix the component pivot/hierarchy; do not compensate by inventing strange rotation values."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "collectable",
      "title": "Make a Collectable Counter",
      "category": "interaction",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Pick up objects, increase a counter and remove the collected Actor.",
      "uses": [
        "Integer",
        "Overlap",
        "Destroy Actor",
        "UI-ready state"
      ],
      "referenceLesson": "variables",
      "steps": [
        {
          "title": "Create CollectablesFound",
          "where": "Player Character or chosen gameplay-state Blueprint → Variables",
          "do": "Add an Integer to the player or an appropriate persistent gameplay class, default 0.",
          "why": "An Integer models a count better than multiple Booleans.",
          "see": "The value starts at zero.",
          "check": "Before moving on, prove this step: The value starts at zero.",
          "troubleshoot": [
            "If the count resets unexpectedly, check whether its owner survives the situation you are testing."
          ],
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "The collectable count is stored as a clear gameplay variable.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Create BP_Collectable",
          "where": "Content Drawer → Blueprint Class → Actor → BP_Collectable → Components",
          "do": "Add a mesh and overlap collision.",
          "why": "One reusable pickup class can create many placed instances.",
          "see": "Each instance overlaps the player.",
          "check": "Before moving on, prove this step: Each instance overlaps the player.",
          "troubleshoot": [
            "If overlap does not fire, check collision size and overlap responses."
          ],
          "visual": {
            "src": "assets/book/collision-responses.webp",
            "caption": "A pickup needs a small overlap volume around its visible mesh.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Increment the count",
          "where": "BP_Collectable → Box/Sphere Collision → OnComponentBeginOverlap",
          "do": "On player overlap, Get CollectablesFound, add 1 and Set it back.",
          "why": "Read → modify → write is the basic variable update pattern.",
          "see": "Debug value becomes 1, 2, 3 as pickups are collected.",
          "check": "Before moving on, prove this step: Debug value becomes 1, 2, 3 as pickups are collected.",
          "troubleshoot": [
            "Print the old and new count once if incrementing looks wrong."
          ],
          "visual": {
            "src": "assets/diagrams/gold/variables-process.svg",
            "caption": "Read the count, add one, then store the new value.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Remove the pickup",
          "where": "Same overlap event → after increment/feedback → Destroy Actor",
          "do": "Play feedback then Destroy Actor.",
          "why": "Prevents counting the same pickup repeatedly.",
          "see": "Collected objects disappear.",
          "check": "Before moving on, prove this step: Collected objects disappear.",
          "troubleshoot": [
            "Destroy only after feedback/state update has run."
          ],
          "visual": null
        },
        {
          "title": "Prepare for UI",
          "where": "WBP_HUD or HUD update function/event",
          "do": "Create a function/event that a HUD can use to refresh the displayed count.",
          "why": "Keeping game state separate from visual display makes the system easier to expand.",
          "see": "The HUD can read the count without owning it.",
          "check": "Before moving on, prove this step: The HUD can read the count without owning it.",
          "troubleshoot": [
            "If HUD updates lag, call one explicit refresh when the count changes."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "The HUD should display the count rather than own it.",
            "kind": "concept",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Using a Float for a whole-number count without reason.",
        "Letting the widget own the score/collectable variable."
      ],
      "makeItYours": [
        "Add TotalCollectables and show Found / Total.",
        "Give special pickups a Value variable worth more than 1."
      ],
      "worksWhen": [
        "Each pickup increments exactly once.",
        "The count persists while the player continues playing.",
        "UI can display the value without becoming its owner."
      ],
      "icon": "◆",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "CollectableValue: 1",
        "Target count: 5",
        "Collision radius: 60 cm for the first build"
      ],
      "studentRecipe": [
        "Player Character → create Collectables Integer default 0.",
        "Create BP_Collectable with visible mesh + Trigger collision.",
        "On player overlap → Get Collectables + 1 → Set Collectables.",
        "Print the new count, then Destroy Actor.",
        "Place five collectables. Compile and Play.",
        "Collect all five. Count must read 1,2,3,4,5 exactly; if it jumps by more than one, check the overlap fires only once."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "flashlight",
      "title": "Make a Flashlight",
      "category": "interaction",
      "duration": "12 min",
      "difficulty": "Beginner",
      "summary": "Attach a Spotlight to the player and toggle it with Enhanced Input.",
      "uses": [
        "Spot Light Component",
        "Enhanced Input",
        "Boolean"
      ],
      "referenceLesson": "actors-components",
      "steps": [
        {
          "title": "Add a Spotlight",
          "where": "Player Character Blueprint → Components → Add → Spot Light",
          "do": "Add a Spot Light component to the Character or camera rig and position it forward.",
          "why": "A component is ideal for reusable functionality owned by the player.",
          "see": "The spotlight follows the player view.",
          "check": "Before moving on, prove this step: The spotlight follows the player view.",
          "troubleshoot": [
            "If the light is not visible, check intensity, cone angle and that it points forward."
          ],
          "visual": null
        },
        {
          "title": "Create IA_Flashlight",
          "where": "Input folder → IA_Flashlight + active Input Mapping Context",
          "do": "Map a Digital action to F.",
          "why": "Keeps input configuration separate.",
          "see": "F fires the flashlight action.",
          "check": "Before moving on, prove this step: F fires the flashlight action.",
          "troubleshoot": [
            "If F does nothing, verify the correct Mapping Context."
          ],
          "visual": null
        },
        {
          "title": "Create FlashlightOn",
          "where": "Player Character → Variables → Boolean FlashlightOn",
          "do": "Add a Boolean matching the initial light visibility.",
          "why": "State makes toggle behaviour explicit.",
          "see": "The variable matches whether the light starts on/off.",
          "check": "Before moving on, prove this step: The variable matches whether the light starts on/off.",
          "troubleshoot": [
            "Set the Boolean default to match the light’s starting Visible state."
          ],
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "A Boolean cleanly stores whether the flashlight is on or off.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Toggle state",
          "where": "Character Event Graph → IA_Flashlight Started",
          "do": "On input Started, set FlashlightOn to NOT FlashlightOn.",
          "why": "Boolean inversion is the simplest toggle.",
          "see": "Each press alternates True/False.",
          "check": "Before moving on, prove this step: Each press alternates True/False.",
          "troubleshoot": [
            "Use NOT Boolean so one press flips the state exactly once."
          ],
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "The input event toggles the flashlight state.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Apply visibility",
          "where": "Character Event Graph → Spot Light reference → Set Visibility",
          "do": "Set Visibility on the Spotlight using FlashlightOn.",
          "why": "The state now drives the actual component.",
          "see": "F consistently toggles light on/off.",
          "check": "Before moving on, prove this step: F consistently toggles light on/off.",
          "troubleshoot": [
            "If Boolean changes but light does not, make sure Set Visibility targets the Spot Light component."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Toggling the mesh instead of the light component.",
        "State variable and initial visibility disagreeing."
      ],
      "makeItYours": [
        "Add a battery Float that drains only while the light is on.",
        "Play click sounds for on/off."
      ],
      "worksWhen": [
        "Light follows the view.",
        "One press toggles state once.",
        "Visual state matches the Boolean."
      ],
      "icon": "◐",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "IA_Flashlight: F",
        "Spot Light Intensity: 5000",
        "Attenuation Radius: 1500",
        "Outer Cone Angle: 35°"
      ],
      "studentRecipe": [
        "Open player Character → add Spot Light component as child of camera. Name it Flashlight.",
        "Set Intensity 5000, Attenuation Radius 1500, Outer Cone Angle 35°. Set Visibility off by default.",
        "Create/use IA_Flashlight mapped to F.",
        "Create FlashlightOn Boolean default False. IA_Flashlight Started → NOT Boolean → set FlashlightOn.",
        "Set Visibility on Flashlight from FlashlightOn. Compile.",
        "Play in a darker area and press F repeatedly. Light should toggle once per press and follow the camera."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "line-trace-gun",
      "title": "Make a Line Trace Gun",
      "category": "combat",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Create a hitscan weapon: fire instantly from the camera, detect the first blocking hit and apply damage.",
      "uses": [
        "Camera",
        "Forward Vector",
        "Line Trace",
        "Apply Damage",
        "Hit Result"
      ],
      "referenceLesson": "traces",
      "steps": [
        {
          "title": "Choose the trace start and range",
          "where": "Player Character or weapon Blueprint",
          "do": "Use the camera or muzzle as the Start and extend the End forward by a sensible shooting distance.",
          "why": "Hitscan guns use traces instead of spawned projectiles.",
          "see": "You know where the shot begins and how far it should travel.",
          "check": "The graph has clear Start and End values.",
          "visual": {
            "src": "assets/diagrams/gold/traces-example.svg",
            "caption": "A line trace gun is just a trace used as a shot.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Build the trace on fire input",
          "where": "Fire input event → Line Trace by Channel",
          "do": "Run a Line Trace by Channel when the fire input is pressed.",
          "why": "Each trigger pull asks whether the shot hit something.",
          "see": "The trace fires only when the input is pressed.",
          "check": "The Blueprint compiles without disconnected pins.",
          "visual": {
            "src": "assets/diagrams/gold/traces-process.svg",
            "caption": "The fire event starts the trace.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Draw debug and inspect the hit",
          "where": "Trace node and Break Hit Result",
          "do": "Turn on debug drawing and inspect the Hit Actor or Impact Point.",
          "why": "This proves where the shot went and what it struck.",
          "see": "A debug line appears and the hit data can be printed.",
          "check": "A wall or enemy in front of the player can be identified.",
          "visual": {
            "src": "assets/diagrams/trace.svg",
            "caption": "Break the hit result to learn what the shot touched.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Apply a response to the hit actor",
          "where": "Hit Actor branch or interface/cast",
          "do": "If the trace hits an enemy or damageable actor, call the response such as Apply Damage or reduce health.",
          "why": "The gun mechanic is complete only when the hit changes the game state.",
          "see": "Hitting a valid target causes a visible reaction.",
          "check": "Shooting empty space does not cause damage logic.",
          "visual": {
            "src": "assets/diagrams/gold/traces-process.svg",
            "caption": "Successful hit logic should run only on a valid target.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Add immediate feedback",
          "where": "Same fire event",
          "do": "Add a sound, impact effect or print message so the shot feels responsive while prototyping.",
          "why": "Feedback helps you tell whether the input, trace and hit logic all worked.",
          "see": "Firing produces an obvious response even before final polish.",
          "check": "You can tell the difference between a hit and a miss.",
          "visual": {
            "src": "assets/ue5/current/events-execution-closeup.webp",
            "caption": "Short feedback loops make shooting systems easier to debug.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "End vector uses only Forward Vector, so the trace is just one unit long.",
        "Trace starts inside the player and hits Self.",
        "Applying damage without checking there was a blocking hit."
      ],
      "makeItYours": [
        "Add ammo and reload.",
        "Use Surface Type from the hit to choose different impact effects.",
        "Add a small random spread angle."
      ],
      "worksWhen": [
        "Trace follows the camera/crosshair.",
        "Self is ignored.",
        "Targets receive damage.",
        "World impacts give feedback."
      ],
      "icon": "⌁",
      "featured": true,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "IA_Fire: Left Mouse Button",
        "Trace distance: 10000 cm",
        "Damage: 20",
        "Channel: Visibility",
        "Debug: For Duration while learning"
      ],
      "studentRecipe": [
        "Create/use IA_Fire mapped to Left Mouse Button.",
        "Player/weapon Blueprint → IA_Fire Started. Camera location = Start.",
        "Camera forward × 10000 + Start = End. Add Line Trace By Channel, Visibility, Draw Debug For Duration.",
        "Branch on Return Value → Break Hit Result → Hit Actor.",
        "True path → Apply Damage to Hit Actor with Base Damage 20.",
        "Play against a damageable target. Verify the debug line hits the same object that receives damage before adding VFX/sound."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "projectile-gun",
      "title": "Make a Projectile Weapon",
      "category": "combat",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Spawn a projectile Actor from a muzzle and let that Actor handle movement/collision.",
      "uses": [
        "Spawn Actor",
        "Projectile Movement",
        "Collision",
        "Owner"
      ],
      "referenceLesson": "blueprint-classes",
      "steps": [
        {
          "title": "Create BP_Projectile",
          "where": "Content Drawer → Blueprint Class → Actor → BP_Projectile → Components",
          "do": "Create an Actor with Sphere Collision, visible mesh and Projectile Movement component.",
          "why": "The projectile is a reusable class with its own movement responsibility.",
          "see": "Placed temporarily in a test map, it moves when launched.",
          "check": "Before moving on, prove this step: Placed temporarily in a test map, it moves when launched.",
          "troubleshoot": [
            "If the projectile falls or behaves oddly, inspect Projectile Movement gravity and speeds."
          ],
          "visual": {
            "src": "assets/book/collision-responses.webp",
            "caption": "The projectile combines collision with a visible body.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Configure movement",
          "where": "BP_Projectile → Projectile Movement component → Details",
          "do": "Set Initial Speed and Max Speed; enable Rotation Follows Velocity if appropriate.",
          "why": "Projectile Movement handles robust movement without manual Tick translation.",
          "see": "Projectile travels at the intended speed.",
          "check": "Before moving on, prove this step: Projectile travels at the intended speed.",
          "troubleshoot": [
            "Initial Speed and Max Speed should be intentional and positive."
          ],
          "visual": null
        },
        {
          "title": "Create a muzzle transform",
          "where": "Weapon/Character Blueprint → Components → Add Scene Component or use a skeletal-mesh socket",
          "do": "Add a Scene Component or socket where shots originate.",
          "why": "A named muzzle point is easier to adjust than hard-coded coordinates.",
          "see": "The component sits just ahead of the weapon.",
          "check": "Before moving on, prove this step: The component sits just ahead of the weapon.",
          "troubleshoot": [
            "If shots spawn inside the player, move the muzzle forward."
          ],
          "visual": null
        },
        {
          "title": "Spawn on Fire",
          "where": "Fire Input Action event → Spawn Actor From Class",
          "do": "From Fire input, Spawn Actor From Class using BP_Projectile and the muzzle world transform.",
          "why": "Spawning creates the projectile only when needed.",
          "see": "Each shot creates one projectile at the muzzle.",
          "check": "Before moving on, prove this step: Each shot creates one projectile at the muzzle.",
          "troubleshoot": [
            "If nothing spawns, print the Fire event and check the class/transform pins."
          ],
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "The fire event spawns a new projectile Actor.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Handle collision",
          "where": "BP_Projectile → collision component → OnComponentHit / BeginOverlap",
          "do": "On projectile hit/overlap, apply damage to Other Actor then destroy the projectile.",
          "why": "The projectile owns what happens when it reaches something.",
          "see": "Target takes damage and projectile does not pass through forever.",
          "check": "Before moving on, prove this step: Target takes damage and projectile does not pass through forever.",
          "troubleshoot": [
            "If collision never fires, check collision presets on both projectile and target."
          ],
          "visual": {
            "src": "assets/diagrams/gold/collision-process.svg",
            "caption": "Projectile collision is the point where hit logic begins.",
            "kind": "concept",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Spawning inside the shooter collision.",
        "Moving the projectile manually on Tick while also using Projectile Movement."
      ],
      "makeItYours": [
        "Add projectile lifespan so missed shots clean themselves up.",
        "Use different child projectile classes for slow/heavy and fast/light shots."
      ],
      "worksWhen": [
        "Projectile spawns at muzzle.",
        "It moves automatically.",
        "Collision damages the target and removes the projectile."
      ],
      "icon": "●",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Projectile speed: 3000 cm/s",
        "Projectile damage: 20",
        "Collision sphere radius: 8 cm",
        "Initial Life Span: 5.0 s"
      ],
      "studentRecipe": [
        "Create BP_Projectile (Actor). Add Sphere Collision and set Sphere Radius to exactly 8 cm. Add Projectile Movement.",
        "Projectile Movement → Initial Speed 3000, Max Speed 3000. Set Initial Life Span 5.0.",
        "Create/use IA_Fire. On fire → Spawn Actor BP_Projectile at muzzle/camera transform.",
        "BP_Projectile OnHit/BeginOverlap → Apply Damage 20 to Other Actor → Destroy Actor.",
        "Compile and fire at a static wall first. Projectile should travel forward and destroy on contact.",
        "Then test against a damageable Actor. If it spawns inside the player, move the spawn transform forward before changing collision logic."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "player-health",
      "title": "Add Player Health and Damage",
      "category": "combat",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Store health on the player, subtract generic damage and trigger death at zero.",
      "uses": [
        "Float",
        "Event AnyDamage",
        "Clamp",
        "Branch"
      ],
      "referenceLesson": "variables",
      "steps": [
        {
          "title": "Create a Health variable on the player",
          "where": "Player Character Blueprint → Variables",
          "do": "Create a Float or Integer variable called Health, defaulting to a value such as 100.",
          "why": "The player needs stored state before anything can damage them.",
          "see": "Health exists on the Character.",
          "check": "The variable is visible in My Blueprint.",
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "Health is simple state stored on the Character.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Make a damage event entry point",
          "where": "Character graph or Any Damage event",
          "do": "Use Event AnyDamage or a custom event that reduces Health.",
          "why": "You need one clear place where incoming damage is handled.",
          "see": "The graph contains a damage-handling event path.",
          "check": "The event can access the current Health value.",
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "Damage handling begins from a clear event entry point.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Subtract damage from Health",
          "where": "Damage event path → Set Health",
          "do": "Reduce Health by the incoming damage amount and store the new value.",
          "why": "This is the core logic of taking damage.",
          "see": "Health becomes lower after the damage event runs.",
          "check": "Printing Health shows the new reduced value.",
          "visual": {
            "src": "assets/diagrams/gold/variables-process.svg",
            "caption": "Read the old value, calculate the new one, then store it.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Clamp or branch for zero health",
          "where": "After setting Health",
          "do": "Use a Branch or Clamp so the player can detect when Health reaches zero or below.",
          "why": "A health system needs a clear death threshold.",
          "see": "At zero health the graph switches to death or respawn logic.",
          "check": "Health does not keep falling indefinitely if you do not want it to.",
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "Branch on the new health value to decide whether the player is dead.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Test the full damage loop",
          "where": "Play mode or temporary key test",
          "do": "Trigger damage several times and watch the health value or UI.",
          "why": "A health system must be tested across multiple hits, not just one.",
          "see": "Health drops predictably and zero health triggers the next state.",
          "check": "You can name exactly where to change the starting health or damage amount.",
          "visual": {
            "src": "assets/ue5/current/editor-main-window.webp",
            "caption": "Test repeated damage so you can trust the system.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Subtracting from MaxHealth instead of Health.",
        "Death check happens before damage is subtracted.",
        "Widget stores health instead of reading player state."
      ],
      "makeItYours": [
        "Add temporary invulnerability using a CanTakeDamage Boolean.",
        "Add armour by reducing incoming Damage before subtraction."
      ],
      "worksWhen": [
        "Health decreases by the expected amount.",
        "Health never becomes negative.",
        "Death fires when Health reaches zero."
      ],
      "icon": "♥",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "MaxHealth: 100",
        "Health: 100",
        "Test damage: 20",
        "Clamp range: 0–100"
      ],
      "studentRecipe": [
        "Player Character → add MaxHealth Float 100 and Health Float 100.",
        "Create Function ApplyHealthChange with input DamageAmount Float.",
        "Inside: Health - DamageAmount → Clamp(Float) Min0 MaxMaxHealth → Set Health.",
        "After Set Health → Branch Health <= 0. True → Print “Player dead” for first proof.",
        "Call ApplyHealthChange with 20 from a test key/damage Actor.",
        "Play and apply five hits: 100→80→60→40→20→0. It must never become negative."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "enemy-health",
      "title": "Give an Enemy Health",
      "category": "combat",
      "duration": "12 min",
      "difficulty": "Beginner",
      "summary": "Make any enemy respond to Unreal damage and destroy/die when health reaches zero.",
      "uses": [
        "AnyDamage",
        "Health",
        "Death Event"
      ],
      "referenceLesson": "events",
      "steps": [
        {
          "title": "Add Health variables",
          "where": "Enemy Blueprint → Variables",
          "do": "Create MaxHealth/Health on the enemy Blueprint.",
          "why": "Each enemy instance owns its own current combat state.",
          "see": "Two placed enemies can have independent Health.",
          "check": "Before moving on, prove this step: Two placed enemies can have independent Health.",
          "troubleshoot": [
            "Make MaxHealth and starting Health consistent."
          ],
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "Health and MaxHealth are explicit enemy state.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Use Event AnyDamage",
          "where": "Enemy Blueprint → Event Graph → Event AnyDamage",
          "do": "Subtract incoming Damage from Health.",
          "why": "Generic damage means the enemy works with line trace, projectile or hazards.",
          "see": "Both weapon types can damage the same enemy.",
          "check": "Before moving on, prove this step: Both weapon types can damage the same enemy.",
          "troubleshoot": [
            "Print incoming Damage once if the value never changes."
          ],
          "visual": {
            "src": "assets/diagrams/gold/variables-process.svg",
            "caption": "Damage subtracts from the stored health value.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Check zero",
          "where": "After Health update → comparison Health <= 0 → Branch",
          "do": "Branch on Health <= 0 and call Die.",
          "why": "Keeps damage and death responsibilities readable.",
          "see": "Enemy does not die before its health is exhausted.",
          "check": "Before moving on, prove this step: Enemy does not die before its health is exhausted.",
          "troubleshoot": [
            "Test Health just above and below zero to prove the Branch."
          ],
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "Branch when the updated health reaches zero.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Build Die",
          "where": "Enemy Blueprint → custom event/function Die",
          "do": "Disable collision/AI, play animation/FX if available, then Destroy Actor after a short delay.",
          "why": "A single named death routine prevents duplicate death logic.",
          "see": "Enemy cannot continue attacking after death.",
          "check": "Before moving on, prove this step: Enemy cannot continue attacking after death.",
          "troubleshoot": [
            "Do not Destroy immediately if you need time for a death animation or FX."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Destroying immediately before feedback can play.",
        "Using a different custom damage system for every weapon."
      ],
      "makeItYours": [
        "Expose MaxHealth per instance for easy enemy variants.",
        "Award score through an event/dispatcher on death."
      ],
      "worksWhen": [
        "Damage from multiple sources works.",
        "Each enemy tracks its own health.",
        "Death disables gameplay before cleanup."
      ],
      "icon": "☠",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "MaxHealth: 60",
        "Health: 60",
        "Test damage: 20",
        "Expected hits to zero: 3"
      ],
      "studentRecipe": [
        "Enemy Blueprint → MaxHealth Float 60, Health Float 60.",
        "Add Event AnyDamage (or your chosen damage interface/event).",
        "Health - Damage → Clamp 0..MaxHealth → Set Health.",
        "Branch Health <= 0 → True → Destroy Actor after a Print “Enemy defeated”.",
        "Use your test weapon with Damage 20.",
        "Exactly three valid 20-damage hits should remove a 60-health enemy. If one shot triggers multiple times, fix hit detection first."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "health-pickup",
      "title": "Make a Health Pickup",
      "category": "combat",
      "duration": "10 min",
      "difficulty": "Beginner",
      "summary": "Heal the player on overlap without allowing Health to exceed MaxHealth.",
      "uses": [
        "Overlap",
        "Health",
        "Clamp",
        "Destroy Actor"
      ],
      "referenceLesson": "collision",
      "steps": [
        {
          "title": "Create BP_HealthPickup",
          "where": "Content Drawer → Blueprint Class → Actor → BP_HealthPickup → Components / Variables",
          "do": "Add mesh + overlap collision and a HealAmount Float.",
          "why": "A configurable pickup class can support small and large health items.",
          "see": "HealAmount appears in Defaults.",
          "check": "Before moving on, prove this step: HealAmount appears in Defaults.",
          "troubleshoot": [
            "If the pickup cannot be collected, check overlap collision."
          ],
          "visual": {
            "src": "assets/book/collision-responses.webp",
            "caption": "The pickup uses an overlap volume around its mesh.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Detect player overlap",
          "where": "BP_HealthPickup → collision → OnComponentBeginOverlap",
          "do": "Use Begin Overlap and confirm Other Actor is your player.",
          "why": "Only valid collectors should receive the effect.",
          "see": "Walking into the pickup detects the player.",
          "check": "Before moving on, prove this step: Walking into the pickup detects the player.",
          "troubleshoot": [
            "Verify Other Actor is the player before changing Health."
          ],
          "visual": {
            "src": "assets/diagrams/gold/collision-process.svg",
            "caption": "Begin Overlap detects the player collecting the pickup.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Calculate new Health",
          "where": "Overlap path → player Health/MaxHealth values → Clamp",
          "do": "NewHealth = Clamp(Health + HealAmount, 0, MaxHealth).",
          "why": "Clamping enforces the maximum health rule.",
          "see": "95 Health + 25 becomes 100, not 120.",
          "check": "Before moving on, prove this step: 95 Health + 25 becomes 100, not 120.",
          "troubleshoot": [
            "Clamp prevents healing above MaxHealth."
          ],
          "visual": {
            "src": "assets/diagrams/gold/variables-process.svg",
            "caption": "Clamp the new health before storing it.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Set and feedback",
          "where": "After Clamp → Set Health → feedback → Destroy Actor",
          "do": "Set Health, play sound/FX, then destroy the pickup.",
          "why": "State change and feedback happen before cleanup.",
          "see": "Health rises once and the pickup disappears.",
          "check": "Before moving on, prove this step: Health rises once and the pickup disappears.",
          "troubleshoot": [
            "Update the HUD after setting Health if your UI is event-driven."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Adding HealAmount to MaxHealth by mistake.",
        "Destroying before reading/setting player health in a fragile graph."
      ],
      "makeItYours": [
        "Do not consume the pickup if Health is already full.",
        "Create a rare pickup that increases MaxHealth instead."
      ],
      "worksWhen": [
        "Health rises by the configured amount.",
        "Health never exceeds MaxHealth.",
        "Pickup cannot be reused after collection."
      ],
      "icon": "+",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "HealAmount: 25",
        "Player MaxHealth: 100",
        "Do not heal above 100"
      ],
      "studentRecipe": [
        "Player must have Health/MaxHealth (100 max). Create BP_HealthPickup with Trigger collision.",
        "Add HealAmount Float = 25.",
        "On player overlap → NewHealth = Min(Health + HealAmount, MaxHealth).",
        "Set player Health = NewHealth → then Destroy pickup.",
        "Test at Health 50: pickup should produce 75.",
        "Test at Health 90: pickup should produce 100, not 115."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "ammo-reload",
      "title": "Add Ammo and Reload",
      "category": "combat",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Track magazine ammo, stop firing at zero and refill from a reserve when Reload is pressed.",
      "uses": [
        "Integer",
        "Branch",
        "Min",
        "Input"
      ],
      "referenceLesson": "branches",
      "steps": [
        {
          "title": "Create ammo variables",
          "where": "Weapon/Character Blueprint → Variables",
          "do": "Add MagazineSize 12, AmmoInMag 12 and ReserveAmmo 48 Integers.",
          "why": "Separate magazine and reserve gives the reload rule something meaningful to manage.",
          "see": "Values show sensible starting state.",
          "check": "Before moving on, prove this step: Values show sensible starting state.",
          "troubleshoot": [
            "Use Integers and keep the starting values internally consistent."
          ],
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "Magazine and reserve ammo are separate pieces of state.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Gate firing",
          "where": "Fire event → before firing nodes → comparison AmmoInMag > 0 → Branch",
          "do": "Before Fire logic, Branch on AmmoInMag > 0.",
          "why": "The weapon rule should decide whether a shot is allowed before spawning/tracing.",
          "see": "At zero, no shot is fired.",
          "check": "Before moving on, prove this step: At zero, no shot is fired.",
          "troubleshoot": [
            "If empty guns still fire, the Branch is probably after the fire logic instead of before it."
          ],
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "Gate the fire path on AmmoInMag > 0.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Spend one round",
          "where": "True fire path → Set AmmoInMag",
          "do": "After a successful fire action, decrement AmmoInMag by 1.",
          "why": "Every shot must update the same source of truth.",
          "see": "12 shots reduce magazine to zero.",
          "check": "Before moving on, prove this step: 12 shots reduce magazine to zero.",
          "troubleshoot": [
            "Decrement once per successful shot, not every frame."
          ],
          "visual": {
            "src": "assets/diagrams/gold/variables-process.svg",
            "caption": "A successful shot decrements the stored magazine value.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Create IA_Reload",
          "where": "Input folder → IA_Reload + Mapping Context; Character/Weapon graph → Reload function",
          "do": "Map R and call a Reload function.",
          "why": "A function keeps the arithmetic out of the input graph.",
          "see": "R calls Reload once.",
          "check": "Before moving on, prove this step: R calls Reload once.",
          "troubleshoot": [
            "If reload input fails, test it first with Print String."
          ],
          "visual": null
        },
        {
          "title": "Calculate rounds needed",
          "where": "Reload function → arithmetic nodes",
          "do": "Needed = MagazineSize - AmmoInMag. ToLoad = Min(Needed, ReserveAmmo).",
          "why": "Min handles the case where reserve has fewer rounds than the magazine needs.",
          "see": "Reloading with only 3 reserve rounds loads exactly 3.",
          "check": "Before moving on, prove this step: Reloading with only 3 reserve rounds loads exactly 3.",
          "troubleshoot": [
            "Print Needed and ToLoad if transfer maths is wrong."
          ],
          "visual": null
        },
        {
          "title": "Transfer ammo",
          "where": "Reload function → Set AmmoInMag and Set ReserveAmmo",
          "do": "AmmoInMag += ToLoad; ReserveAmmo -= ToLoad.",
          "why": "Ammo moves between stores rather than appearing from nowhere.",
          "see": "Total ammo before and after reload is unchanged.",
          "check": "Before moving on, prove this step: Total ammo before and after reload is unchanged.",
          "troubleshoot": [
            "Test empty magazine, partial magazine, empty reserve and full magazine."
          ],
          "visual": {
            "src": "assets/diagrams/gold/variables-process.svg",
            "caption": "Reload transfers a calculated amount from reserve to magazine.",
            "kind": "concept",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Refilling magazine without subtracting reserve.",
        "Allowing reload when magazine is already full."
      ],
      "makeItYours": [
        "Add a reload delay/animation state.",
        "Display ammo on the HUD."
      ],
      "worksWhen": [
        "Firing spends exactly one round.",
        "Zero magazine blocks firing.",
        "Reload transfers only available reserve ammo."
      ],
      "icon": "▥",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "MagazineSize: 12",
        "AmmoInMag: 12",
        "ReserveAmmo: 48",
        "Reload key: R"
      ],
      "studentRecipe": [
        "Add MagazineSize=12, AmmoInMag=12, ReserveAmmo=48 Integers.",
        "Before firing → AmmoInMag > 0 → Branch. False: do not fire.",
        "After a successful shot → Set AmmoInMag = AmmoInMag - 1.",
        "Create IA_Reload mapped to R → call Function Reload.",
        "Reload: Needed = MagazineSize - AmmoInMag. ToLoad = Min(Needed, ReserveAmmo).",
        "Set AmmoInMag = AmmoInMag + ToLoad; ReserveAmmo = ReserveAmmo - ToLoad. Test with AmmoInMag 9 / Reserve 3: result must be 12 / 0."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "melee-trace",
      "title": "Make a Simple Melee Hit",
      "category": "combat",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Use a short sphere trace during an attack so melee can hit targets without requiring perfect point contact.",
      "uses": [
        "Sphere Trace",
        "Attack State",
        "Apply Damage"
      ],
      "referenceLesson": "traces",
      "steps": [
        {
          "title": "Create attack input",
          "where": "Input folder → IA_Attack + Mapping Context; Character graph → PerformAttack",
          "do": "Map IA_Attack and call a PerformAttack event/function.",
          "why": "Keeps input separate from attack implementation.",
          "see": "Attack function fires once per press.",
          "check": "Before moving on, prove this step: Attack function fires once per press.",
          "troubleshoot": [
            "If input repeats too quickly, use Started and a CanAttack gate."
          ],
          "visual": null
        },
        {
          "title": "Choose trace points",
          "where": "Character/weapon graph → choose component/world locations for Start and End",
          "do": "Start near the Character/chest or weapon; End a short distance forward.",
          "why": "Melee needs a local reach rather than gun range.",
          "see": "Debug trace appears in front of the player.",
          "check": "Before moving on, prove this step: Debug trace appears in front of the player.",
          "troubleshoot": [
            "Use debug drawing so you can actually see the melee volume."
          ],
          "visual": {
            "src": "assets/diagrams/trace.svg",
            "caption": "A melee trace still needs a start and end position.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Sphere Trace By Channel",
          "where": "PerformAttack → Sphere Trace By Channel",
          "do": "Use a radius that roughly matches the weapon swing volume and Ignore Self.",
          "why": "A sphere is more forgiving than a razor-thin line for close combat.",
          "see": "Targets within the swing volume are detected.",
          "check": "Before moving on, prove this step: Targets within the swing volume are detected.",
          "troubleshoot": [
            "Ignore Self so the attacker does not hit its own collision."
          ],
          "visual": {
            "src": "assets/diagrams/gold/traces-process.svg",
            "caption": "A trace checks a short volume in front of the attacker.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Apply damage to hit Actor",
          "where": "Trace Return Value / Hit Actor → Apply Damage",
          "do": "On valid hit, Apply Damage once.",
          "why": "Use the same generic damage pipeline as other weapons.",
          "see": "Enemy health drops by melee damage.",
          "check": "Before moving on, prove this step: Enemy health drops by melee damage.",
          "troubleshoot": [
            "Apply damage once per attack window, not from a trace running every frame."
          ],
          "visual": {
            "src": "assets/diagrams/gold/traces-example.svg",
            "caption": "Use only a valid hit to apply the attack response.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Prevent spam/multi-hit",
          "where": "Character/weapon variables → CanAttack or animation notify/window",
          "do": "Use CanAttack or an animation window so one swing cannot apply damage every frame.",
          "why": "Attack cadence is part of the game rule.",
          "see": "Holding/mashing cannot create accidental dozens of hits.",
          "check": "Before moving on, prove this step: Holding/mashing cannot create accidental dozens of hits.",
          "troubleshoot": [
            "Reset CanAttack only when the intended cooldown/animation window ends."
          ],
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "A CanAttack condition can prevent repeated attacks.",
            "kind": "concept",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Running the trace on Tick instead of during an attack window.",
        "Not ignoring Self."
      ],
      "makeItYours": [
        "Use Sphere Trace Multi for crowd hits.",
        "Trigger the trace from an Animation Notify later."
      ],
      "worksWhen": [
        "Attack only traces during an attack.",
        "Self is ignored.",
        "One swing applies the intended number of hits."
      ],
      "icon": "╱",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Attack range: 150 cm",
        "Sphere/box radius: 35 cm",
        "Damage: 25",
        "Cooldown: 0.60 s"
      ],
      "studentRecipe": [
        "Create/use IA_Attack mapped to a chosen button.",
        "On attack get player/camera location and forward vector. End = Start + Forward×150.",
        "Use Sphere Trace By Channel/Objects with Radius 35 (or a Box Trace of equivalent reach). Turn debug on while learning.",
        "Branch on hit → Apply Damage 25 to valid target.",
        "Gate attack with CanAttack Boolean: False after hit → Delay 0.60 → True.",
        "Play near/far from one target. A target outside 150 cm must not take damage."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "lives-respawn",
      "title": "Set Up Lives and Respawning",
      "category": "player",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Track lives, respawn after death and end the run when no lives remain.",
      "uses": [
        "Lives Integer",
        "Death",
        "Respawn",
        "Branch"
      ],
      "referenceLesson": "framework",
      "steps": [
        {
          "title": "Create Lives and RespawnPoint variables",
          "where": "Player Character or GameMode variables",
          "do": "Add an Integer Lives variable and decide how you will store the respawn location.",
          "why": "Respawning needs both remaining lives and a place to return to.",
          "see": "Lives exists and has a sensible starting value.",
          "check": "You can identify where the respawn point comes from.",
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "Lives and respawn data are deliberate pieces of game state.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Detect player death or failure",
          "where": "Damage/death event or hazard overlap",
          "do": "Choose the event that counts as “the player died”.",
          "why": "Lives should only change in response to a clear failure event.",
          "see": "One event path handles death/failure.",
          "check": "You can trigger it on purpose while testing.",
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "Respawn systems start from a clearly defined failure event.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Reduce Lives by one",
          "where": "Death event path → Set Lives",
          "do": "When the player dies, subtract 1 from Lives.",
          "why": "Lives are a count of remaining chances.",
          "see": "The Lives value visibly decreases after death.",
          "check": "Two deaths reduce 3 lives to 1 in the expected way.",
          "visual": {
            "src": "assets/diagrams/gold/variables-process.svg",
            "caption": "Update the stored lives value when the player fails.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Branch on whether lives remain",
          "where": "After updating Lives → Branch",
          "do": "If Lives > 0, respawn the player; otherwise trigger game over or a lose state.",
          "why": "The respawn system has two possible outcomes: continue or finish.",
          "see": "One path respawns, the other ends the run.",
          "check": "You have tested at least one respawn and the final game-over case.",
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "Lives remaining is the question that decides what happens next.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Move the player back to the respawn location",
          "where": "Respawn branch",
          "do": "Set the player location to the respawn point, or destroy and re-create them there depending on your setup.",
          "why": "Respawn means restoring the player to a safe starting point.",
          "see": "The player reappears at the chosen location.",
          "check": "The player no longer respawns exactly where they died unless that is intended.",
          "visual": {
            "src": "assets/ue5/current/editor-main-window.webp",
            "caption": "A good respawn returns the player to a safe known position.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Subtracting a life in both the hazard and the death function.",
        "Storing Lives only inside a widget."
      ],
      "makeItYours": [
        "Add temporary invulnerability after respawn.",
        "Change rules so reaching zero lives returns to a menu."
      ],
      "worksWhen": [
        "Exactly one life is lost per death.",
        "Respawn occurs while Lives remain.",
        "Zero lives produces Game Over."
      ],
      "icon": "♥",
      "featured": true,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Lives: 3",
        "Respawn delay: 2.0 s",
        "Spawn point: PlayerStart"
      ],
      "studentRecipe": [
        "GameMode → create Lives Integer and set Default Value to 3 for this teaching version.",
        "Create Function/Custom Event PlayerDied. First set Lives = Lives - 1.",
        "Branch Lives > 0. True → Delay 2.0 → respawn/restart player at PlayerStart/checkpoint.",
        "False → show/print Game Over and do not respawn.",
        "Test by forcing death three times.",
        "Expected: Lives 3→2 respawn, 2→1 respawn, 1→0 Game Over."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "checkpoint",
      "title": "Make a Checkpoint",
      "category": "player",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Store a respawn transform when the player reaches a checkpoint and return there after death.",
      "uses": [
        "Transform",
        "Overlap",
        "Respawn",
        "Reference"
      ],
      "referenceLesson": "framework",
      "steps": [
        {
          "title": "Create a checkpoint Actor",
          "where": "Blueprint Class → Actor",
          "do": "Create BP_Checkpoint with a visible marker and collision component.",
          "why": "Checkpoint areas are usually separate reusable world Actors.",
          "see": "The checkpoint can be placed in the level.",
          "check": "The collision area is easy to see and adjust.",
          "visual": {
            "src": "assets/book/blueprint-editor.webp",
            "caption": "Checkpoints are usually simple actors with a mesh and collision.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Detect overlap with the player",
          "where": "Checkpoint collision → OnComponentBeginOverlap",
          "do": "Use the overlap event to detect when the player reaches the checkpoint.",
          "why": "Reaching the checkpoint should happen through a clear physical trigger.",
          "see": "Entering the area fires the overlap event.",
          "check": "Only the player should count as activating it.",
          "visual": {
            "src": "assets/diagrams/gold/collision-process.svg",
            "caption": "Overlap is a natural way to activate a checkpoint.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Store the checkpoint location or identifier",
          "where": "Player, GameMode or SaveGame-related variable",
          "do": "Save the checkpoint location or a checkpoint name to the player or another appropriate owner.",
          "why": "Respawn logic needs to know the latest safe return point.",
          "see": "The latest checkpoint value updates when a new checkpoint is reached.",
          "check": "Reaching a second checkpoint overwrites the first.",
          "visual": {
            "src": "assets/diagrams/gold/savegame-example.svg",
            "caption": "Checkpoint systems store the latest valid respawn data.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Give the player feedback",
          "where": "Same overlap event",
          "do": "Show a message, sound or visual change so the player knows the checkpoint activated.",
          "why": "Invisible checkpoint changes can feel unreliable.",
          "see": "Activating the checkpoint produces clear feedback.",
          "check": "The player can tell when a checkpoint became active.",
          "visual": {
            "src": "assets/ue5/current/events-execution-closeup.webp",
            "caption": "Feedback helps confirm state changes immediately.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Test it through death and respawn",
          "where": "Play mode",
          "do": "Reach the checkpoint, then trigger death and make sure the respawn uses the new checkpoint.",
          "why": "A checkpoint only matters if the respawn system actually uses it.",
          "see": "The player returns to the latest checkpoint after death.",
          "check": "You have proven the system works end-to-end.",
          "visual": {
            "src": "assets/ue5/current/editor-main-window.webp",
            "caption": "Always test the checkpoint together with the respawn system.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Using the checkpoint mesh pivot as spawn point when it places the player inside geometry.",
        "Resetting RespawnTransform on death."
      ],
      "makeItYours": [
        "Make checkpoints one-way ordered.",
        "Combine with SaveGame so the checkpoint survives quitting."
      ],
      "worksWhen": [
        "Reaching a checkpoint updates the stored transform.",
        "Feedback confirms activation.",
        "Death uses the newest checkpoint."
      ],
      "icon": "⚑",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Checkpoint ID: CP_01",
        "Respawn Transform: checkpoint Actor transform",
        "Trigger extent: 100 cm for the first build"
      ],
      "studentRecipe": [
        "Create BP_Checkpoint with Trigger collision and ID Name CP_01.",
        "Player/GameMode owner → store RespawnTransform (Transform) and ActiveCheckpointID.",
        "On player overlap → set RespawnTransform = checkpoint GetActorTransform; set ID = CP_01.",
        "Print “Checkpoint CP_01 active” once for proof.",
        "On death, spawn/move player using RespawnTransform after your respawn delay.",
        "Test death before and after activating checkpoint. After activation, respawn must occur at CP_01."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "score-system",
      "title": "Make a Score System",
      "category": "player",
      "duration": "12 min",
      "difficulty": "Beginner",
      "summary": "Store score, add points from gameplay events and expose it cleanly to UI.",
      "uses": [
        "Integer",
        "Function",
        "Game Rule"
      ],
      "referenceLesson": "functions",
      "steps": [
        {
          "title": "Choose score owner",
          "where": "Choose GameMode/GameState/other session-state Blueprint → Variables",
          "do": "Put Score in GameState/GameMode for a level/session rule or another suitable persistent class.",
          "why": "The score should outlive pickups/enemies that award it.",
          "see": "Destroying an enemy does not destroy the Score variable.",
          "check": "Before moving on, prove this step: Destroying an enemy does not destroy the Score variable.",
          "troubleshoot": [
            "Choose the score owner before wiring pickups/enemies to it."
          ],
          "visual": {
            "src": "assets/diagrams/gold/framework-process.svg",
            "caption": "Choose an owner whose responsibility matches the score lifetime.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Create AddScore function",
          "where": "Chosen score owner → Functions → + Function AddScore",
          "do": "Input Points (Integer), then Score = Score + Points.",
          "why": "One function gives every scoring event the same route.",
          "see": "Calling AddScore(100) increases score by exactly 100.",
          "check": "Before moving on, prove this step: Calling AddScore(100) increases score by exactly 100.",
          "troubleshoot": [
            "Make AddScore the one route for score changes so bugs have one place to inspect."
          ],
          "visual": {
            "src": "assets/diagrams/gold/functions-process.svg",
            "caption": "Put score changes through one named AddScore function.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Award points",
          "where": "Enemy death / collectable / objective event → call AddScore",
          "do": "On enemy death, collectable pickup or objective completion, call AddScore.",
          "why": "Scoring is triggered by meaningful game events.",
          "see": "Different events can award different values.",
          "check": "Before moving on, prove this step: Different events can award different values.",
          "troubleshoot": [
            "If the score does not change, prove the awarding event fires first."
          ],
          "visual": null
        },
        {
          "title": "Refresh UI",
          "where": "HUD reference / WBP_HUD update function",
          "do": "Notify the HUD or let it read Score when needed.",
          "why": "The UI displays state but does not become the authoritative score owner.",
          "see": "Displayed score matches game state.",
          "check": "Before moving on, prove this step: Displayed score matches game state.",
          "troubleshoot": [
            "Keep the score in gameplay state; let UI only display it."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "UI displays score owned by gameplay state.",
            "kind": "concept",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Keeping separate score variables on every enemy.",
        "Widget increments its own text value without updating game state."
      ],
      "makeItYours": [
        "Add a combo multiplier.",
        "Subtract score for taking damage."
      ],
      "worksWhen": [
        "All scoring uses the same function.",
        "Score survives destruction of scoring Actors.",
        "HUD matches the real score."
      ],
      "icon": "★",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Score Integer: 0",
        "Standard award: +100",
        "Test target: 500"
      ],
      "studentRecipe": [
        "Choose the owner (GameMode for match score, PlayerState for per-player networked score). Add Score Integer=0.",
        "Create Function AddScore with input Amount Integer.",
        "Inside → Score + Amount → Set Score.",
        "Call AddScore(100) from a test collectable/target.",
        "Print/update HUD after the Set Score.",
        "Trigger five awards. Score must be 100,200,300,400,500 exactly."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "countdown-timer",
      "title": "Make a Countdown Timer",
      "category": "player",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Count down whole seconds using a repeating timer rather than Event Tick.",
      "uses": [
        "Timer",
        "Integer",
        "Custom Event",
        "Branch"
      ],
      "referenceLesson": "events",
      "steps": [
        {
          "title": "Create TimeRemaining",
          "where": "GameMode/GameState or timer-owning Blueprint → Variables",
          "do": "Use an Integer such as 60.",
          "why": "A whole-second display does not need frame-by-frame Float precision.",
          "see": "Time starts at the expected value.",
          "check": "Before moving on, prove this step: Time starts at the expected value.",
          "troubleshoot": [
            "TimeRemaining should have a clear starting value."
          ],
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "TimeRemaining is explicit game state.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Create TickCountdown event",
          "where": "Same Blueprint → Add Custom Event TickCountdown",
          "do": "Subtract 1 from TimeRemaining and update UI.",
          "why": "A named event makes the repeating unit of work clear.",
          "see": "Calling it manually reduces time by one.",
          "check": "Before moving on, prove this step: Calling it manually reduces time by one.",
          "troubleshoot": [
            "Keep the tick event small: decrement, update UI, test zero."
          ],
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "The countdown event performs one clear timer tick.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Start a repeating Timer",
          "where": "BeginPlay / StartGame event → Set Timer by Event",
          "do": "On BeginPlay or game start, Set Timer by Event: 1.0 second, Looping True.",
          "why": "Timers run work at the frequency you actually need instead of every frame.",
          "see": "Time decreases roughly once each second.",
          "check": "Before moving on, prove this step: Time decreases roughly once each second.",
          "troubleshoot": [
            "If it counts too fast, confirm the timer interval is 1.0 and it is not started multiple times."
          ],
          "visual": null
        },
        {
          "title": "Check for zero",
          "where": "TickCountdown → comparison TimeRemaining <= 0 → Branch",
          "do": "After subtraction, Branch on TimeRemaining <= 0.",
          "why": "The countdown needs a clear terminal rule.",
          "see": "At zero, it stops instead of becoming negative.",
          "check": "Before moving on, prove this step: At zero, it stops instead of becoming negative.",
          "troubleshoot": [
            "Test at TimeRemaining 1 so you can see the zero transition."
          ],
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "Check whether the countdown has reached zero.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Clear timer and finish",
          "where": "Zero branch → Clear and Invalidate Timer by Handle / finish event",
          "do": "Clear the timer and trigger TimeUp / lose-state logic.",
          "why": "Stopping the timer prevents repeated terminal events.",
          "see": "Time stays at zero and TimeUp runs once.",
          "check": "Before moving on, prove this step: Time stays at zero and TimeUp runs once.",
          "troubleshoot": [
            "Clear the timer so TimeUp cannot fire repeatedly."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using Tick and subtracting 1 every frame.",
        "Not clearing a looping timer at zero."
      ],
      "makeItYours": [
        "Format as minutes:seconds.",
        "Pause the timer during a pause menu."
      ],
      "worksWhen": [
        "Timer updates once per second.",
        "It stops at zero.",
        "TimeUp triggers exactly once."
      ],
      "icon": "◷",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "TimeRemaining: 60.0",
        "Timer interval: 1.0 s",
        "Stop at: 0"
      ],
      "studentRecipe": [
        "Owner Blueprint → TimeRemaining Float/Integer = 60.",
        "BeginPlay → Set Timer by Event, Time 1.0, Looping True.",
        "Timer event → TimeRemaining - 1 → Max with 0 → Set TimeRemaining.",
        "After Set → Branch TimeRemaining <= 0.",
        "True → Clear/Invalidate Timer and fire your timeout event once.",
        "Play with a temporary start value 5 to test quickly. It must show 5,4,3,2,1,0 and then stop."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "win-lose-state",
      "title": "Make Simple Win and Lose Conditions",
      "category": "player",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Turn gameplay values into clear end states and prevent the game continuing after the result.",
      "uses": [
        "Branch",
        "Game State",
        "UI",
        "Input Mode"
      ],
      "referenceLesson": "framework",
      "steps": [
        {
          "title": "Define the win rule",
          "where": "Game-rule Blueprint → win-condition variables/comparison",
          "do": "Example: CollectablesFound >= TotalCollectables or EnemiesRemaining == 0.",
          "why": "A game result should be a readable condition derived from state.",
          "see": "You can print whether the win condition is True/False.",
          "check": "Before moving on, prove this step: You can print whether the win condition is True/False.",
          "troubleshoot": [
            "Write the rule as a clear Boolean question."
          ],
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "Win and lose rules are decisions based on game state.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Define the lose rule",
          "where": "Game-rule Blueprint → lose-condition variables/comparison",
          "do": "Example: Lives <= 0 or TimeRemaining <= 0.",
          "why": "Win and lose should be explicit rules, not scattered side effects.",
          "see": "The lose condition reliably becomes True.",
          "check": "Before moving on, prove this step: The lose condition reliably becomes True.",
          "troubleshoot": [
            "Do the same for lose; avoid scattered defeat checks everywhere."
          ],
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "The lose rule should be just as explicit as the win rule.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Create FinishGame function",
          "where": "Game-rule Blueprint → Functions → + FinishGame",
          "do": "Input bWon or an enum Result; stop gameplay and choose the correct UI.",
          "why": "Centralising the finish routine prevents two end screens competing.",
          "see": "Calling FinishGame produces one result.",
          "check": "Before moving on, prove this step: Calling FinishGame produces one result.",
          "troubleshoot": [
            "Call one FinishGame function so every ending follows the same cleanup."
          ],
          "visual": {
            "src": "assets/diagrams/gold/functions-process.svg",
            "caption": "FinishGame centralises the end-of-game response.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Disable continuing input",
          "where": "FinishGame → PlayerController / Character input controls",
          "do": "Pause, disable movement/fire, or switch input mode depending on your design.",
          "why": "A finished game should not keep accepting normal gameplay actions.",
          "see": "Player cannot continue affecting the level after result.",
          "check": "Before moving on, prove this step: Player cannot continue affecting the level after result.",
          "troubleshoot": [
            "If the player can still move/shoot, restore input only on restart/resume paths."
          ],
          "visual": null
        },
        {
          "title": "Show result UI",
          "where": "FinishGame → Create Widget / Add to Viewport",
          "do": "Create/add Win or Lose widget and expose restart/menu buttons.",
          "why": "The state needs clear player feedback and next action.",
          "see": "Correct screen appears for each condition.",
          "check": "Before moving on, prove this step: Correct screen appears for each condition.",
          "troubleshoot": [
            "Create result UI once; avoid stacking duplicate widgets."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "The result widget communicates the final game state.",
            "kind": "concept",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Checking the condition in many unrelated Blueprints.",
        "Showing a widget but leaving combat/movement running underneath."
      ],
      "makeItYours": [
        "Use an enum for Playing / Won / Lost / Paused.",
        "Record a best score before showing results."
      ],
      "worksWhen": [
        "Only one result can happen.",
        "Gameplay stops/changes state.",
        "UI clearly explains the outcome."
      ],
      "icon": "🏁",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Win target: Score >= 500",
        "Lose condition: Health <= 0",
        "Only fire end state once"
      ],
      "studentRecipe": [
        "Set your test win target: Score >= 500. Lose target: Health <= 0.",
        "Create Boolean GameEnded default False.",
        "After Score changes: if NOT GameEnded AND Score >= 500 → Set GameEnded True → Win event.",
        "After Health changes: if NOT GameEnded AND Health <= 0 → Set GameEnded True → Lose event.",
        "Test win first with Score 400 then add 100.",
        "Reset and test lose with Health 20 then apply 20 damage. Neither end event should fire more than once."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "spawn-destroy",
      "title": "Spawn and Destroy Actors",
      "category": "player",
      "duration": "12 min",
      "difficulty": "Beginner",
      "summary": "Create Actors at runtime and clean them up safely.",
      "uses": [
        "Spawn Actor From Class",
        "Transform",
        "Destroy Actor",
        "Is Valid"
      ],
      "referenceLesson": "blueprint-classes",
      "steps": [
        {
          "title": "Choose the spawned class",
          "where": "Content Drawer → choose/create spawned Actor Blueprint",
          "do": "Create or choose an Actor Blueprint such as BP_Pickup.",
          "why": "Runtime spawning needs a class definition to instantiate.",
          "see": "The class can also be placed manually for testing.",
          "check": "Before moving on, prove this step: The class can also be placed manually for testing.",
          "troubleshoot": [
            "Confirm the class you are spawning is an Actor and compiles."
          ],
          "visual": null
        },
        {
          "title": "Create a spawn point",
          "where": "Level/Spawner Blueprint → Add Target Point in level or Scene Component in Blueprint",
          "do": "Add a Target Point/Scene Component and get its Transform.",
          "why": "Separating spawn location from logic makes placement easy.",
          "see": "Moving the point changes where things appear.",
          "check": "Before moving on, prove this step: Moving the point changes where things appear.",
          "troubleshoot": [
            "Use a visible Target Point/Scene Component while testing."
          ],
          "visual": null
        },
        {
          "title": "Spawn Actor From Class",
          "where": "Spawner Event Graph → Spawn Actor From Class",
          "do": "Pass class + spawn transform; choose a sensible collision handling method.",
          "why": "The node creates a new instance while the game is running.",
          "see": "A new Actor appears at the point.",
          "check": "Before moving on, prove this step: A new Actor appears at the point.",
          "troubleshoot": [
            "If spawning fails near walls, inspect Spawn Collision Handling Override."
          ],
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "An event can spawn a new Actor at a known transform.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Store the return value if needed",
          "where": "Spawn Actor From Class → Return Value → Promote to Variable",
          "do": "Promote Return Value to a reference when you need to control that exact spawned instance later.",
          "why": "A reference identifies which instance you created.",
          "see": "You can change/destroy the spawned Actor through the reference.",
          "check": "Before moving on, prove this step: You can change/destroy the spawned Actor through the reference.",
          "troubleshoot": [
            "Only store the return value when you genuinely need that instance later."
          ],
          "visual": {
            "src": "assets/diagrams/gold/references-casting-example.svg",
            "caption": "Store the returned instance when you need to control that exact Actor later.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Destroy safely",
          "where": "Stored spawned reference / target Actor → Destroy Actor",
          "do": "Call Destroy Actor on the intended instance, optionally after a timer/lifespan.",
          "why": "Runtime Actors should clean up when their job is done.",
          "see": "Only the intended instance disappears.",
          "check": "Before moving on, prove this step: Only the intended instance disappears.",
          "troubleshoot": [
            "Destroy the stored/intended instance, not Self by accident."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using Get Actor of Class later when Spawn already returned the exact reference.",
        "Spawning inside blocking geometry."
      ],
      "makeItYours": [
        "Spawn a random class from an array.",
        "Limit maximum active spawns."
      ],
      "worksWhen": [
        "Actor appears at the intended transform.",
        "You can identify the exact spawned instance.",
        "Cleanup removes it without affecting others."
      ],
      "icon": "＋",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Spawn class: chosen test Actor",
        "Spawn offset: 200 cm forward",
        "Life Span: 5.0 s"
      ],
      "studentRecipe": [
        "Choose/create BP_SpawnTest actor and set Initial Life Span 5.0 for the first test.",
        "On a test input/event get owner Location + Forward Vector×200 for spawn location.",
        "Make Transform using that location and owner rotation.",
        "Spawn Actor From Class → BP_SpawnTest → Spawn Transform.",
        "Compile and trigger once. The Actor should appear 200 cm ahead rather than inside the player.",
        "Wait 5 seconds and prove it destroys itself. Then decide whether real gameplay needs manual destruction instead."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "basic-hud",
      "title": "Create a Basic HUD Widget",
      "category": "ui",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Create a Widget Blueprint, add it to the viewport and keep the reference so gameplay can update it.",
      "uses": [
        "UMG",
        "Create Widget",
        "Add to Viewport",
        "Reference"
      ],
      "referenceLesson": "ui",
      "steps": [
        {
          "title": "Create the HUD widget",
          "where": "Content Drawer → User Interface → Widget Blueprint",
          "do": "Create WBP_HUD and open it.",
          "why": "A HUD begins as a Widget Blueprint.",
          "see": "The Widget Designer opens.",
          "check": "The asset exists in the intended folder.",
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "A HUD is built inside a Widget Blueprint.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Add a simple text block",
          "where": "Widget Designer → Palette → Text",
          "do": "Drag a Text block onto the canvas and position it in a readable location.",
          "why": "Starting with one visible element keeps the first HUD step easy to verify.",
          "see": "The Text block is visible in the designer preview.",
          "check": "The text is large enough to read.",
          "visual": {
            "src": "assets/book/ui-variables.webp",
            "caption": "Widgets are made from UI elements such as Text blocks and progress bars.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Create the widget at BeginPlay",
          "where": "Player Character or PlayerController → Event BeginPlay",
          "do": "Use Create Widget with WBP_HUD and Add to Viewport.",
          "why": "The widget must exist at runtime before it can appear.",
          "see": "Pressing Play shows the HUD on screen.",
          "check": "Only one HUD appears, not duplicates every frame.",
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "Create the HUD once when play begins.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Store the widget reference if useful",
          "where": "Create Widget return value → promote to variable",
          "do": "Promote the created widget reference to a variable if you want to update it later.",
          "why": "Keeping the reference makes later UI updates much easier.",
          "see": "A widget reference variable exists in the graph.",
          "check": "You can drag the variable in as a Get node later.",
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "Store the widget reference when you will need to update it later.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Replace the placeholder text with something meaningful",
          "where": "Widget Designer or runtime update",
          "do": "Change the displayed text so it actually communicates useful information or a placeholder label such as “Health: 100”.",
          "why": "The UI should already hint at its eventual purpose.",
          "see": "The HUD text looks intentional rather than generic.",
          "check": "Another person can guess what the HUD is for.",
          "visual": {
            "src": "assets/book/ui-variables.webp",
            "caption": "UI should communicate meaning, not just occupy space.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        }
      ],
      "mistakes": [
        "Creating a widget every time score/health changes.",
        "Forgetting Add to Viewport."
      ],
      "makeItYours": [
        "Anchor UI correctly and test different resolutions.",
        "Move HUD creation to PlayerController if that better matches your project ownership."
      ],
      "worksWhen": [
        "Exactly one HUD is created.",
        "It is visible during play.",
        "Gameplay has a reference to the displayed instance."
      ],
      "icon": "▤",
      "featured": true,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Widget: WBP_HUD",
        "Add once on BeginPlay",
        "Test text: HUD READY"
      ],
      "studentRecipe": [
        "Create Widget Blueprint WBP_HUD.",
        "Designer → add a Text Block. Set Text to HUD READY. In its Canvas Panel Slot use the Top-Left anchor and Position X 40, Y 40.",
        "PlayerController/Character BeginPlay → Create Widget WBP_HUD.",
        "Promote Return Value to HUDRef if you will update it later.",
        "Connect Create Widget → Add to Viewport. Compile.",
        "Play. Exactly one HUD READY should appear. If duplicates stack, check you are not creating the widget repeatedly."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "health-bar",
      "title": "Put Health on the HUD",
      "category": "ui",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Drive a UMG Progress Bar from real player Health / MaxHealth values.",
      "uses": [
        "UMG Progress Bar",
        "Float division",
        "Event-driven UI"
      ],
      "referenceLesson": "ui",
      "steps": [
        {
          "title": "Add a Progress Bar to the widget",
          "where": "WBP_HUD → Widget Designer → Palette → Progress Bar",
          "do": "Drag a Progress Bar into your HUD widget.",
          "why": "A Progress Bar is the standard quick visual for health.",
          "see": "The Progress Bar is visible in the designer.",
          "check": "It sits in a readable part of the screen.",
          "visual": {
            "src": "assets/book/ui-variables.webp",
            "caption": "A Progress Bar is ideal for showing health percentage.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Make sure the player has Health and MaxHealth",
          "where": "Player Character variables",
          "do": "Use a current Health value and a MaxHealth value.",
          "why": "The bar usually needs a percentage, which comes from current divided by maximum.",
          "see": "Both variables exist on the player.",
          "check": "MaxHealth is not zero.",
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "A health bar works best when you track both current and maximum values.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Create and add the widget to the screen",
          "where": "Character / PlayerController BeginPlay",
          "do": "Create WBP_HUD and Add to Viewport if you have not already.",
          "why": "The bar must exist onscreen before it can update.",
          "see": "The HUD appears during Play.",
          "check": "The Progress Bar is visible in the running game.",
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "Create the widget once before updating its elements.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Set the bar Percent from health values",
          "where": "Widget update logic or Character-to-widget logic",
          "do": "Set the Progress Bar Percent to Health / MaxHealth.",
          "why": "Progress Bars expect a 0 to 1 value rather than raw health numbers.",
          "see": "A full-health player shows a full bar.",
          "check": "Reducing Health visibly shortens the bar.",
          "visual": {
            "src": "assets/diagrams/gold/ui-example.svg",
            "caption": "Convert health to a 0–1 percentage before feeding the bar.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Test partial and zero health",
          "where": "Play mode",
          "do": "Damage the player and watch the health bar change at several values.",
          "why": "A health bar should communicate state clearly across the full range.",
          "see": "The bar shrinks as health falls and reaches empty at zero.",
          "check": "You can tell whether the calculation is correct by the bar behaviour.",
          "visual": {
            "src": "assets/ue5/current/editor-main-window.webp",
            "caption": "Always test UI at several gameplay states, not just full health.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Setting Percent to 75 instead of 0.75.",
        "Binding lots of UI properties to functions that run every frame when simple event updates would do."
      ],
      "makeItYours": [
        "Change bar colour at low health.",
        "Add a Text value such as 75 / 100."
      ],
      "worksWhen": [
        "100/100 displays full.",
        "50/100 displays half.",
        "Damage/heal updates immediately."
      ],
      "icon": "▰",
      "featured": true,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Health: 100",
        "MaxHealth: 100",
        "Progress Percent: Health / MaxHealth",
        "Tests: 100/100, 50/100, 0/100"
      ],
      "studentRecipe": [
        "WBP_HUD → add Progress Bar named PB_Health.",
        "Player → Health=100, MaxHealth=100.",
        "Create widget function SetHealthDisplay(CurrentHealth,MaxHealth).",
        "Inside → CurrentHealth / MaxHealth → Set Percent on PB_Health.",
        "Call it with 100/100, then 50/100, then 0/100.",
        "Expected bar: full, half, empty. Clamp/guard against MaxHealth=0 if that can ever occur."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "score-lives-hud",
      "title": "Show Score and Lives on the HUD",
      "category": "ui",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Update Text widgets from score/lives game state without letting the widget own the values.",
      "uses": [
        "Text",
        "Functions",
        "References"
      ],
      "referenceLesson": "ui",
      "steps": [
        {
          "title": "Add text widgets",
          "where": "WBP_HUD → Designer → Palette → Text",
          "do": "Create TXT_Score and TXT_Lives in WBP_HUD.",
          "why": "Named widgets are easier to update and debug.",
          "see": "Both appear in the HUD Designer.",
          "check": "Before moving on, prove this step: Both appear in the HUD Designer.",
          "troubleshoot": [
            "Name widgets clearly so SetText targets are obvious."
          ],
          "visual": {
            "src": "assets/book/ui-variables.webp",
            "caption": "Text widgets are the visible layer for score and lives.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Create UpdateScore",
          "where": "WBP_HUD → Functions → + UpdateScore",
          "do": "Input Score Integer, convert to Text and SetText on TXT_Score.",
          "why": "The function turns model data into presentation.",
          "see": "UpdateScore(250) displays 250.",
          "check": "Before moving on, prove this step: UpdateScore(250) displays 250.",
          "troubleshoot": [
            "Convert the Integer to Text cleanly before SetText."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "A widget function receives gameplay state and updates display.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Create UpdateLives",
          "where": "WBP_HUD → Functions → + UpdateLives",
          "do": "Input Lives Integer and set TXT_Lives.",
          "why": "Same event-driven pattern as score.",
          "see": "UpdateLives(3) displays 3.",
          "check": "Before moving on, prove this step: UpdateLives(3) displays 3.",
          "troubleshoot": [
            "Repeat the same pattern for Lives."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "Use a separate update for lives or a clear combined refresh.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Call from game rules",
          "where": "Game rule / score owner → stored HUD reference → call update function",
          "do": "When AddScore or LoseLife changes state, call the matching HUD function.",
          "why": "Game rules remain the source of truth.",
          "see": "Displayed values always match the real variables.",
          "check": "Before moving on, prove this step: Displayed values always match the real variables.",
          "troubleshoot": [
            "If UI does not update, verify you still have the correct HUD reference."
          ],
          "visual": {
            "src": "assets/diagrams/gold/framework-process.svg",
            "caption": "The gameplay owner notifies the HUD when state changes.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Initialise after HUD creation",
          "where": "HUD creation path → immediately call UpdateScore and UpdateLives",
          "do": "Immediately send current Score/Lives after the widget is created.",
          "why": "Otherwise the UI may show designer placeholder values until the first change.",
          "see": "Correct starting values appear from frame one.",
          "check": "Before moving on, prove this step: Correct starting values appear from frame one.",
          "troubleshoot": [
            "Initialise once immediately after creating the widget so it never starts stale."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Widget increments its own score independently.",
        "Forgetting initial update after Create Widget."
      ],
      "makeItYours": [
        "Format as SCORE: 000250.",
        "Add a small animation when a life is lost."
      ],
      "worksWhen": [
        "Starting values are correct.",
        "Gameplay changes update the text.",
        "Widget is display-only."
      ],
      "icon": "123",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Score: 0",
        "Lives: 3",
        "Example text: Score: 000 / Lives: 3"
      ],
      "studentRecipe": [
        "WBP_HUD → add Text ScoreText and LivesText.",
        "Set first test text: Score: 0 and Lives: 3.",
        "Create function UpdateScoreLives(NewScore Integer, NewLives Integer).",
        "Use Format Text or Conv_IntToText/String → SetText on each Text block.",
        "Store HUD reference when widget is created and call UpdateScoreLives after score/lives change.",
        "Test Score 500 / Lives 2. HUD must update once and show the exact new values."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "crosshair",
      "title": "Add a Crosshair",
      "category": "ui",
      "duration": "8 min",
      "difficulty": "Beginner",
      "summary": "Place a simple crosshair at the exact centre of the screen and make it resolution-safe.",
      "uses": [
        "UMG",
        "Anchors",
        "Alignment"
      ],
      "referenceLesson": "ui",
      "steps": [
        {
          "title": "Add an Image/Text",
          "where": "WBP_HUD → Designer → Palette → Image or Text",
          "do": "In WBP_HUD add an Image with a crosshair texture or use a simple + text while prototyping.",
          "why": "A placeholder is enough to prove placement before making art.",
          "see": "Crosshair is visible in Designer.",
          "check": "Before moving on, prove this step: Crosshair is visible in Designer.",
          "troubleshoot": [
            "Use a temporary + first if you do not have a texture."
          ],
          "visual": {
            "src": "assets/book/ui-variables.webp",
            "caption": "The crosshair is a simple centred widget element.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Anchor to centre",
          "where": "Select crosshair widget → Details → Anchors → Centre",
          "do": "Set Anchor to centre of the Canvas.",
          "why": "Anchors make layout relative to screen size.",
          "see": "The anchor icon sits at screen centre.",
          "check": "Before moving on, prove this step: The anchor icon sits at screen centre.",
          "troubleshoot": [
            "Centre anchor controls where the widget is attached."
          ],
          "visual": null
        },
        {
          "title": "Set alignment 0.5 / 0.5",
          "where": "Select crosshair widget → Details → Alignment X/Y",
          "do": "Set Alignment X/Y to 0.5 so the widget centres on its own pivot.",
          "why": "Without alignment, the top-left corner sits at centre instead.",
          "see": "Crosshair centre aligns exactly with viewport centre.",
          "check": "Before moving on, prove this step: Crosshair centre aligns exactly with viewport centre.",
          "troubleshoot": [
            "Alignment 0.5/0.5 centres the widget on its own pivot."
          ],
          "visual": null
        },
        {
          "title": "Test resolutions",
          "where": "Play → Standalone / resize game window",
          "do": "Use Play/Standalone and resize the window.",
          "why": "UI that only works at one resolution is not finished.",
          "see": "Crosshair remains centred.",
          "check": "Before moving on, prove this step: Crosshair remains centred.",
          "troubleshoot": [
            "Test more than one resolution so the crosshair does not drift."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using pixel offsets from the top-left instead of anchors."
      ],
      "makeItYours": [
        "Change crosshair colour when an interactable is targeted.",
        "Animate spread when firing."
      ],
      "worksWhen": [
        "Crosshair is centred.",
        "Resizing does not move it off centre."
      ],
      "icon": "+",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Image size: 32 × 32",
        "Anchor: centre",
        "Alignment: 0.5,0.5"
      ],
      "studentRecipe": [
        "WBP_HUD → add Image widget named Crosshair.",
        "Set desired brush/image, Size X 32 Y 32.",
        "Set Anchor to centre of canvas.",
        "Set Alignment X 0.5 Y 0.5 and Position X 0 Y 0 relative to centre anchor.",
        "Compile and Play at more than one window resolution.",
        "Crosshair must stay centred. If it moves with resolution, fix anchor/alignment rather than adding magic position offsets."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "interaction-prompt",
      "title": "Show an Interaction Prompt",
      "category": "ui",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Show “Press E” only while the player is looking at a valid interactable.",
      "uses": [
        "Line Trace",
        "Interface",
        "Widget visibility"
      ],
      "referenceLesson": "traces",
      "steps": [
        {
          "title": "Create the prompt",
          "where": "WBP_HUD → Designer → add prompt panel/text → Details → Visibility",
          "do": "Add a small interaction panel/text to HUD and start it Hidden/Collapsed.",
          "why": "The HUD owns presentation, not detection.",
          "see": "Prompt is absent at game start.",
          "check": "Before moving on, prove this step: Prompt is absent at game start.",
          "troubleshoot": [
            "Start Hidden/Collapsed so the prompt only appears intentionally."
          ],
          "visual": {
            "src": "assets/book/ui-variables.webp",
            "caption": "The prompt is a HUD element that starts hidden.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Use your interaction trace",
          "where": "Character Blueprint → existing interaction Line Trace",
          "do": "Reuse the Look at an Object to Interact trace.",
          "why": "Target detection should have one source of truth.",
          "see": "Trace reliably identifies target Actor.",
          "check": "Before moving on, prove this step: Trace reliably identifies target Actor.",
          "troubleshoot": [
            "Use the already-working trace rather than inventing a second detection system."
          ],
          "visual": {
            "src": "assets/diagrams/gold/traces-process.svg",
            "caption": "Reuse the player interaction trace to identify what is being looked at.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Check interface support",
          "where": "Trace Hit Actor → Does Implement Interface (BPI_Interact)",
          "do": "Use Does Implement Interface on Hit Actor for BPI_Interact.",
          "why": "This checks capability without casting to every interactable type.",
          "see": "Doors/buttons/pickups return True; normal walls return False.",
          "check": "Before moving on, prove this step: Doors/buttons/pickups return True; normal walls return False.",
          "troubleshoot": [
            "If Does Implement Interface is false, check the hit Actor class really implements BPI_Interact."
          ],
          "visual": {
            "src": "assets/diagrams/gold/interfaces-dispatchers-process.svg",
            "caption": "Interface support is a clean test for interactable objects.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Show/hide prompt",
          "where": "Valid/invalid trace paths → HUD Show/Hide function",
          "do": "When valid target exists, call HUD ShowInteractPrompt; otherwise HideInteractPrompt.",
          "why": "UI follows current targeting state.",
          "see": "Looking away immediately hides the prompt.",
          "check": "Before moving on, prove this step: Looking away immediately hides the prompt.",
          "troubleshoot": [
            "Always include a hide path when the trace misses or leaves the target."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "Show and hide the prompt based on the current trace result.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Optional custom text",
          "where": "BPI_Interact → add GetInteractionText-style interface function if used",
          "do": "Add GetInteractionText to the interface so objects can return “Open Door”, “Pick Up Key”, etc.",
          "why": "The interactable knows what action it represents.",
          "see": "Different objects display different prompts.",
          "check": "Before moving on, prove this step: Different objects display different prompts.",
          "troubleshoot": [
            "Keep custom text short and action-oriented."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Prompt shown on every Actor hit by the trace.",
        "Creating/destroying the widget every frame instead of toggling visibility."
      ],
      "makeItYours": [
        "Add key icon/gamepad glyph.",
        "Fade prompt in/out with a UMG animation."
      ],
      "worksWhen": [
        "Prompt only appears on valid interactables.",
        "It disappears when target/range is lost.",
        "Objects can provide meaningful action text."
      ],
      "icon": "E",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Prompt text: E - Interact",
        "Default visibility: Hidden",
        "Show only while valid target is detected"
      ],
      "studentRecipe": [
        "WBP_HUD → add Text named InteractionPrompt → text E - Interact.",
        "Set InteractionPrompt Visibility Hidden by default.",
        "Create widget function SetInteractionPrompt(Show Boolean).",
        "Inside set Visibility Visible when True, Hidden when False.",
        "Your interaction trace/overlap calls True only while a valid interactable target is detected; otherwise False.",
        "Play and aim at target / away from target. Prompt must appear/disappear cleanly without creating another widget."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "objective-text",
      "title": "Make an Objective Display",
      "category": "ui",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Show the current objective and update it when gameplay milestones change.",
      "uses": [
        "Text",
        "Game State",
        "Update function"
      ],
      "referenceLesson": "ui",
      "steps": [
        {
          "title": "Create CurrentObjective",
          "where": "GameMode/GameState or objective owner → Variables",
          "do": "Store the objective text/name in a gameplay rule/state class, not only in the widget.",
          "why": "The objective is game state; the HUD is merely its display.",
          "see": "CurrentObjective exists even if HUD is recreated.",
          "check": "Before moving on, prove this step: CurrentObjective exists even if HUD is recreated.",
          "troubleshoot": [
            "Keep CurrentObjective in gameplay state rather than only inside the widget."
          ],
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "Store the current objective outside the widget.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Add objective Text",
          "where": "WBP_HUD → Designer → add Text named TXT_Objective",
          "do": "Add TXT_Objective to WBP_HUD in a readable location.",
          "why": "A dedicated element keeps presentation consistent.",
          "see": "Designer shows placeholder objective.",
          "check": "Before moving on, prove this step: Designer shows placeholder objective.",
          "troubleshoot": [
            "Use one clearly named Text widget."
          ],
          "visual": {
            "src": "assets/book/ui-variables.webp",
            "caption": "The widget only displays the objective.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Create SetObjectiveText",
          "where": "WBP_HUD → Functions → + SetObjectiveText",
          "do": "Input Text and SetText on TXT_Objective.",
          "why": "One UI function gives gameplay a clean update point.",
          "see": "Manual call changes displayed objective.",
          "check": "Before moving on, prove this step: Manual call changes displayed objective.",
          "troubleshoot": [
            "SetObjectiveText should do only the display update."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "A widget update function turns objective state into display text.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Update on game events",
          "where": "Objective gameplay events → update CurrentObjective and HUD",
          "do": "When key collected/door opened/checkpoint reached, change CurrentObjective and call HUD update.",
          "why": "Objectives should react to meaningful progress events, not Poll every frame.",
          "see": "Objective changes at the expected moments.",
          "check": "Before moving on, prove this step: Objective changes at the expected moments.",
          "troubleshoot": [
            "Update state first, then tell the HUD."
          ],
          "visual": null
        },
        {
          "title": "Initialise at start",
          "where": "HUD creation path → call SetObjectiveText",
          "do": "Send CurrentObjective after HUD creation.",
          "why": "Prevents stale placeholder content.",
          "see": "Correct first objective is visible immediately.",
          "check": "Before moving on, prove this step: Correct first objective is visible immediately.",
          "troubleshoot": [
            "Initialise after HUD creation so the first objective appears immediately."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Widget is the only place objective state exists.",
        "Updating from Tick."
      ],
      "makeItYours": [
        "Add an objective-complete animation.",
        "Use an enum/objective data table later."
      ],
      "worksWhen": [
        "Objective starts correctly.",
        "Progress events change it.",
        "Recreating HUD can recover the current objective."
      ],
      "icon": "☷",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Widget text: Find the exit",
        "Default objective ID: OBJ_01",
        "Update only when objective changes"
      ],
      "studentRecipe": [
        "WBP_HUD → add Text ObjectiveText. Set initial text Find the exit.",
        "Create function SetObjective(NewObjective Text) → SetText ObjectiveText.",
        "Store HUDRef when WBP_HUD is created.",
        "When objective changes, call SetObjective once with the new Text.",
        "Test sequence: Find the key → Unlock the door → Reach the exit.",
        "Do not update objective text every Tick; update it only when objective state changes."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "pause-menu",
      "title": "Make a Simple Pause Menu",
      "category": "ui",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Pause gameplay, show a menu and switch input between game and UI cleanly.",
      "uses": [
        "Set Game Paused",
        "Input Mode UI Only",
        "Mouse Cursor",
        "Widget"
      ],
      "referenceLesson": "ui",
      "steps": [
        {
          "title": "Create WBP_Pause",
          "where": "Content Drawer → User Interface → Widget Blueprint → WBP_Pause → Designer",
          "do": "Add Resume and Quit/Restart buttons.",
          "why": "Keep pause UI separate from gameplay HUD.",
          "see": "Buttons exist in Designer.",
          "check": "Before moving on, prove this step: Buttons exist in Designer.",
          "troubleshoot": [
            "Test the Resume button before styling the menu."
          ],
          "visual": {
            "src": "assets/book/ui-variables.webp",
            "caption": "Pause menus are ordinary Widget Blueprints with buttons.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Create IA_Pause",
          "where": "Input folder → IA_Pause + active Mapping Context",
          "do": "Map Escape/Start and ensure the action can still be processed while paused if required by your setup.",
          "why": "Pause needs an input route both into and out of the state.",
          "see": "Escape fires before pausing.",
          "check": "Before moving on, prove this step: Escape fires before pausing.",
          "troubleshoot": [
            "If Escape stops working while paused, check whether the input/action is allowed while paused in your setup."
          ],
          "visual": null
        },
        {
          "title": "Create/show widget",
          "where": "Character/PlayerController pause event → Create Widget / Set Visibility",
          "do": "On pause, create once or show WBP_Pause.",
          "why": "The player needs visible confirmation and controls.",
          "see": "Menu appears.",
          "check": "Before moving on, prove this step: Menu appears.",
          "troubleshoot": [
            "Create once or manage visibility so repeated pauses do not stack widgets."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ui-process.svg",
            "caption": "Create or reveal the pause widget only when needed.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Pause + input mode",
          "where": "Pause event → Set Game Paused + PlayerController input mode/mouse cursor",
          "do": "Set Game Paused True, show mouse cursor, Set Input Mode UI Only/Game and UI.",
          "why": "Pausing simulation alone does not automatically make UI usable.",
          "see": "Character stops and mouse can use buttons.",
          "check": "Before moving on, prove this step: Character stops and mouse can use buttons.",
          "troubleshoot": [
            "If mouse/controller control feels wrong, check input mode and cursor together."
          ],
          "visual": null
        },
        {
          "title": "Resume",
          "where": "Resume button OnClicked / pause toggle → unpause and restore input",
          "do": "Hide/remove menu, Set Game Paused False, hide cursor, restore Input Mode Game Only.",
          "why": "You must reverse every state change you made.",
          "see": "Gameplay resumes with normal controls.",
          "check": "Before moving on, prove this step: Gameplay resumes with normal controls.",
          "troubleshoot": [
            "Restore Game Only input and cursor state on resume."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Pausing but leaving mouse cursor hidden.",
        "Resume button only hides UI but forgets Set Game Paused False."
      ],
      "makeItYours": [
        "Add audio sliders later.",
        "Blur/dim the background with a panel."
      ],
      "worksWhen": [
        "Gameplay stops.",
        "Menu can receive input.",
        "Resume restores normal game controls."
      ],
      "icon": "Ⅱ",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Pause key: Escape",
        "Set Game Paused: True when opened",
        "Set Game Paused: False when resumed",
        "Input Mode UI Only while paused"
      ],
      "studentRecipe": [
        "Create Widget Blueprint WBP_Pause with Resume button.",
        "Create/use IA_Pause or Escape input. On press → Set Game Paused True.",
        "Create WBP_Pause → Add to Viewport → Set Input Mode UI Only → Show Mouse Cursor True.",
        "Resume button OnClicked → Remove From Parent → Set Game Paused False.",
        "Set Input Mode Game Only → Show Mouse Cursor False.",
        "Play: pause, click Resume, move player. If Escape cannot fire while paused, enable Execute When Paused on the input path or handle pause in the PlayerController appropriately."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "timeline-door",
      "title": "Make a Smooth Timeline Door",
      "category": "world",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Animate a reusable door from closed to open using a Timeline and Lerp.",
      "uses": [
        "Timeline",
        "Float Track",
        "Lerp",
        "Relative Rotation"
      ],
      "referenceLesson": "timelines",
      "steps": [
        {
          "title": "Create the door Blueprint",
          "where": "Blueprint Class → Actor",
          "do": "Use a door Blueprint with a moving mesh component.",
          "why": "Timelines need a component to animate.",
          "see": "The door Actor has a clear door mesh component.",
          "check": "The mesh can be selected in the Blueprint.",
          "visual": {
            "src": "assets/diagrams/gold/timelines-example.svg",
            "caption": "A Timeline door uses smooth interpolation rather than instant snapping.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Add a Timeline",
          "where": "Door Event Graph → right-click → Add Timeline",
          "do": "Create a Timeline such as TL_Door.",
          "why": "The Timeline will drive the smooth opening value.",
          "see": "The Timeline node appears in the graph.",
          "check": "You can double-click it to edit the track.",
          "visual": {
            "src": "assets/diagrams/gold/timelines-process.svg",
            "caption": "Timelines provide animated values over time.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Create a 0→1 float track",
          "where": "Timeline editor → Add Float Track",
          "do": "Create a float track that starts at 0 and ends at 1.",
          "why": "This simple value is easy to use with a Lerp for rotation or location.",
          "see": "The track rises from 0 to 1.",
          "check": "The timeline length feels reasonable such as 1 second.",
          "visual": {
            "src": "assets/diagrams/gold/timelines-example.svg",
            "caption": "A 0–1 float track is a common Timeline pattern.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Use Update to rotate or move the door mesh",
          "where": "Timeline Update pin → Set Relative Rotation or Set Relative Location",
          "do": "Apply the Timeline output to the door mesh so it opens smoothly.",
          "why": "The track value only matters once it drives the transform of the door.",
          "see": "The door animates smoothly instead of snapping.",
          "check": "The closed and open positions are both correct.",
          "visual": {
            "src": "assets/diagrams/gold/timelines-process.svg",
            "caption": "Use the Timeline output each update frame to animate the mesh.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Trigger Play and Reverse from interaction",
          "where": "Interact or overlap event → Timeline Play / Reverse",
          "do": "Open the door with Play and optionally close it again with Reverse.",
          "why": "A working door usually needs a trigger to start and optionally reverse the movement.",
          "see": "Interaction causes the door to open, and the reverse trigger closes it.",
          "check": "Repeated tests do not make the door drift or break.",
          "visual": {
            "src": "assets/diagrams/gold/timelines-example.svg",
            "caption": "Connect the smooth animation to a meaningful trigger.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Rotating the entire Actor around a bad pivot.",
        "Using Timeline length but never connecting Update to movement."
      ],
      "makeItYours": [
        "Expose OpenAngle per instance.",
        "Add an IsLocked branch before Play."
      ],
      "worksWhen": [
        "Door reaches exact open/closed states.",
        "Motion is smooth.",
        "Reverse closes reliably."
      ],
      "icon": "▥",
      "featured": true,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Timeline: 1.0 s",
        "Alpha: 0 → 1",
        "Door Yaw: 0° → 90°"
      ],
      "studentRecipe": [
        "Create BP_Door with movable door mesh component.",
        "Add Timeline TL_Door length 1.0, float Alpha keys (0s,0) and (1s,1).",
        "Lerp Rotator Closed 0,0,0 to Open 0,0,90. Alpha → Lerp Alpha.",
        "Timeline Update → Set Relative Rotation on door mesh.",
        "Interact/overlap → Play; second interaction/exit → Reverse.",
        "Test. Door should take exactly one second. If it orbits, fix pivot/component setup, not the Lerp values."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "moving-platform",
      "title": "Make a Moving Platform",
      "category": "world",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Move a platform between two points using a Timeline and vectors.",
      "uses": [
        "Timeline",
        "Vector Lerp",
        "Scene Component",
        "Instance Editable"
      ],
      "referenceLesson": "timelines",
      "steps": [
        {
          "title": "Create BP_MovingPlatform",
          "where": "Content Drawer → Blueprint Class → Actor → BP_MovingPlatform → Components",
          "do": "Add a mesh as the moving root/component.",
          "why": "A reusable Actor lets designers place multiple platforms.",
          "see": "Platform can be placed normally.",
          "check": "Before moving on, prove this step: Platform can be placed normally.",
          "troubleshoot": [
            "Make the moving mesh/root relationship simple before adding Timeline logic."
          ],
          "visual": null
        },
        {
          "title": "Define Start/End",
          "where": "BP_MovingPlatform → BeginPlay / Variables / endpoint Scene Component",
          "do": "Store StartLocation on BeginPlay and expose MoveOffset Vector or an endpoint Scene Component.",
          "why": "Relative designer controls are easier than hard-coded world coordinates.",
          "see": "Different instances can move different distances/directions.",
          "check": "Before moving on, prove this step: Different instances can move different distances/directions.",
          "troubleshoot": [
            "Print Start/End once if the platform jumps to the wrong place."
          ],
          "visual": null
        },
        {
          "title": "Create Timeline 0→1",
          "where": "Event Graph → right-click → Add Timeline",
          "do": "Float alpha over MoveTime.",
          "why": "Normalised progress works naturally with Lerp.",
          "see": "Timeline outputs 0 then 1.",
          "check": "Before moving on, prove this step: Timeline outputs 0 then 1.",
          "troubleshoot": [
            "Use a short 0→1 Timeline while learning."
          ],
          "visual": {
            "src": "assets/diagrams/gold/timelines-process.svg",
            "caption": "A Timeline provides a smooth 0→1 value over time.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Lerp locations",
          "where": "Timeline Update → Lerp (Vector) → Set Actor Location",
          "do": "Lerp Vector StartLocation → EndLocation and Set Actor Location on Update.",
          "why": "Lerp generates every position between endpoints.",
          "see": "Platform moves smoothly.",
          "check": "Before moving on, prove this step: Platform moves smoothly.",
          "troubleshoot": [
            "Set Actor Location from the Lerp result on Update."
          ],
          "visual": {
            "src": "assets/diagrams/gold/timelines-example.svg",
            "caption": "Use the Timeline alpha to interpolate between start and end.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Loop/ping-pong",
          "where": "Timeline Finished → direction Boolean → Play/Reverse",
          "do": "Track direction with a Boolean. On Finished: if moving forward, set the Boolean False and Reverse; if moving backward, set it True and Play. A looping curve is another option for a continuously oscillating platform.",
          "why": "Creates predictable back-and-forth motion.",
          "see": "Platform continuously travels between endpoints.",
          "check": "Before moving on, prove this step: Platform continuously travels between endpoints.",
          "troubleshoot": [
            "If ping-pong sticks, inspect the direction Boolean and Play/Reverse choice."
          ],
          "visual": {
            "src": "assets/diagrams/gold/timelines-process.svg",
            "caption": "Play and Reverse create the ping-pong movement.",
            "kind": "concept",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Adding to current location every Update, causing drift.",
        "Hard-coding absolute world positions into the class."
      ],
      "makeItYours": [
        "Add wait time at each end with timers.",
        "Expose MoveTime per instance."
      ],
      "worksWhen": [
        "It always returns to exact endpoints.",
        "Multiple instances can use different offsets.",
        "No cumulative drift."
      ],
      "icon": "↔",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Timeline: 2.0 s",
        "Travel distance: 400 cm",
        "Alpha: 0 → 1",
        "Use relative location"
      ],
      "studentRecipe": [
        "Create BP_MovingPlatform with mesh component. Record StartLocation.",
        "Create EndLocation = StartLocation + chosen axis vector×400.",
        "Timeline TL_Move length 2.0, Alpha 0→1.",
        "Lerp Vector StartLocation → EndLocation using Alpha. Update → Set Relative/World Location consistently.",
        "BeginPlay → Play; Finished → Reverse; reverse Finished → Play (or use a looping pattern you understand).",
        "Ride/test it. Travel must be 400 cm and take 2 seconds. If endpoints drift, stop mixing world and relative spaces."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "damage-zone",
      "title": "Make a Damage / Death Zone",
      "category": "world",
      "duration": "12 min",
      "difficulty": "Beginner",
      "summary": "Use trigger collision to hurt or kill a player entering a hazard area.",
      "uses": [
        "Box Collision",
        "Apply Damage",
        "Overlap"
      ],
      "referenceLesson": "collision",
      "steps": [
        {
          "title": "Create BP_DamageZone",
          "where": "Content Drawer → Blueprint Class → Actor → BP_DamageZone → Components",
          "do": "Add Box Collision and make it visible only for editor/debug if desired.",
          "why": "A reusable hazard volume can be resized per level instance.",
          "see": "Box is easy to place/scale.",
          "check": "Before moving on, prove this step: Box is easy to place/scale.",
          "troubleshoot": [
            "Keep the editor/debug volume visible enough to size it correctly."
          ],
          "visual": {
            "src": "assets/book/collision-responses.webp",
            "caption": "A damage zone is defined by its collision volume.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Set overlap collision",
          "where": "Select Box Collision → Details → Collision",
          "do": "Overlap Pawn and Generate Overlap Events.",
          "why": "Hazards usually detect rather than physically block.",
          "see": "Player entry fires Begin Overlap.",
          "check": "Before moving on, prove this step: Player entry fires Begin Overlap.",
          "troubleshoot": [
            "Overlap Pawn and Generate Overlap Events are the important first checks."
          ],
          "visual": {
            "src": "assets/book/collision-responses.webp",
            "caption": "Use overlap rather than block when the player should enter the hazard.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Choose damage rule",
          "where": "BP_DamageZone → Variables → DamageAmount",
          "do": "Expose DamageAmount; large value can behave as instant death or normal value can hurt.",
          "why": "One class can support lava, spikes and kill volumes.",
          "see": "Value appears in instance Details.",
          "check": "Before moving on, prove this step: Value appears in instance Details.",
          "troubleshoot": [
            "Use an exposed DamageAmount to tune instances without graph edits."
          ],
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "Expose DamageAmount so each placed hazard can vary.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Apply Damage",
          "where": "Box Collision → OnComponentBeginOverlap → Apply Damage",
          "do": "On valid player overlap, Apply Damage to Other Actor.",
          "why": "The hazard uses the same generic player health pipeline as weapons.",
          "see": "Health drops / death triggers.",
          "check": "Before moving on, prove this step: Health drops / death triggers.",
          "troubleshoot": [
            "If damage never arrives, prove the overlap event fires before debugging health."
          ],
          "visual": {
            "src": "assets/diagrams/gold/collision-process.svg",
            "caption": "The overlap event starts the damage response.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Optional repeated damage",
          "where": "Begin/End Overlap → start/clear repeating Timer if lingering damage is required",
          "do": "For lingering hazards, start a repeating timer while inside and clear it on End Overlap.",
          "why": "Timers make damage-over-time intentional and controllable.",
          "see": "Damage stops when player leaves.",
          "check": "Before moving on, prove this step: Damage stops when player leaves.",
          "troubleshoot": [
            "Clear repeating timers on End Overlap so damage does not continue after leaving."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Applying damage on Tick to everything in the level.",
        "Forgetting to clear repeated damage timer."
      ],
      "makeItYours": [
        "Add warning VFX/audio.",
        "Use a Gameplay Tag/type later for fire/poison."
      ],
      "worksWhen": [
        "Entering causes intended damage.",
        "Leaving stops repeated damage.",
        "Health/death system handles the result."
      ],
      "icon": "⚠",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Damage: 25 per trigger/test",
        "Collision preset: Trigger",
        "Player test health: 100"
      ],
      "studentRecipe": [
        "Create BP_DamageZone with Box Collision preset Trigger.",
        "On player BeginOverlap → Apply Damage Base Damage 25 (single-hit version) or call your health function with 25.",
        "Print current Health after damage for proof.",
        "Test with player Health 100. One entry should produce 75.",
        "Leave/re-enter. Second entry should produce 50.",
        "If health plummets instantly, you used Tick/repeating overlap logic unintentionally; fix event frequency before changing the damage number."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "random-spawner",
      "title": "Make a Simple Random Spawner",
      "category": "world",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Spawn one of several Actor classes at random locations without placing every pickup manually.",
      "uses": [
        "Array",
        "Random Integer",
        "Spawn Actor",
        "Target Points"
      ],
      "referenceLesson": "data",
      "steps": [
        {
          "title": "Create SpawnClasses array",
          "where": "Spawner Blueprint → Variables → Actor Class Reference Array",
          "do": "Make an Array of Actor Class references and add your pickup/enemy classes.",
          "why": "Data drives which classes are allowed without branching for each one.",
          "see": "Array contains at least two valid classes.",
          "check": "Before moving on, prove this step: Array contains at least two valid classes.",
          "troubleshoot": [
            "An empty SpawnClasses array will make the random index invalid."
          ],
          "visual": {
            "src": "assets/book/containers.webp",
            "caption": "Arrays are useful for groups of spawn classes and points.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Create spawn points",
          "where": "Level Target Points or Spawner child Scene Components → array references",
          "do": "Use Target Point Actors or child Scene Components and store references in an array.",
          "why": "Designer-controlled points prevent random spawns inside walls.",
          "see": "Points are visible/positionable in editor.",
          "check": "Before moving on, prove this step: Points are visible/positionable in editor.",
          "troubleshoot": [
            "Make sure every spawn point reference is assigned."
          ],
          "visual": {
            "src": "assets/book/containers.webp",
            "caption": "Store multiple spawn locations in an array.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Pick random class",
          "where": "Spawner graph → Random Integer in Range → SpawnClasses Get",
          "do": "Random Integer in Range 0 → Length-1, then Get from SpawnClasses.",
          "why": "Array length determines safe index range.",
          "see": "Different tests return different classes.",
          "check": "Before moving on, prove this step: Different tests return different classes.",
          "troubleshoot": [
            "Use Length-1 as the maximum valid index."
          ],
          "visual": {
            "src": "assets/diagrams/gold/data-process.svg",
            "caption": "Choose one item from the class collection.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Pick random point",
          "where": "Spawner graph → Random Integer in Range → SpawnPoints Get",
          "do": "Use the same pattern on spawn point array.",
          "why": "Separates what to spawn from where to spawn.",
          "see": "Random valid transform is produced.",
          "check": "Before moving on, prove this step: Random valid transform is produced.",
          "troubleshoot": [
            "Use Length-1 for the point array too."
          ],
          "visual": {
            "src": "assets/diagrams/gold/data-process.svg",
            "caption": "Choose one item from the point collection.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Spawn",
          "where": "Spawner graph → Spawn Actor From Class",
          "do": "Spawn Actor From Class using chosen class + point transform.",
          "why": "Data selections become a runtime instance.",
          "see": "A valid Actor appears at one of the points.",
          "check": "Before moving on, prove this step: A valid Actor appears at one of the points.",
          "troubleshoot": [
            "If nothing appears, print the chosen class and transform."
          ],
          "visual": null
        },
        {
          "title": "Add limits",
          "where": "Spawner Variables / Timer logic → ActiveCount or interval limit",
          "do": "Track ActiveCount or use a timer interval so the system cannot flood the level.",
          "why": "Spawner rules matter for performance/game balance.",
          "see": "Active Actors remain within your chosen cap.",
          "check": "Before moving on, prove this step: Active Actors remain within your chosen cap.",
          "troubleshoot": [
            "Add limits before leaving a repeating spawner running unattended."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Random index uses Length instead of Length-1.",
        "Random world coordinates put Actors inside geometry."
      ],
      "makeItYours": [
        "Use weighted chances.",
        "Respawn only after a pickup is collected."
      ],
      "worksWhen": [
        "Only approved classes spawn.",
        "Spawns use safe points.",
        "Maximum active count is controlled."
      ],
      "icon": "🎲",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Spawn interval: 3.0 s",
        "Spawn radius/box half-size: 500 cm",
        "Maximum alive for first test: 5"
      ],
      "studentRecipe": [
        "Create BP_RandomSpawner with Box Collision/Scene bounds representing ±500 cm area.",
        "Create Array SpawnClasses with at least 2 valid Actor classes.",
        "Set Timer by Event on BeginPlay: 3.0 s looping.",
        "On timer → choose Random Array Item → choose Random Point in Bounding Box / random X,Y within ±500.",
        "Spawn Actor from selected class at that location. Track AliveCount and stop at 5 for the first test.",
        "Play for 20 seconds. You should never exceed 5 living test Actors."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "ai-patrol",
      "title": "Make an Enemy Patrol Between Points",
      "category": "ai",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Build a simple NavMesh patrol with Blackboard/Behaviour Tree or a lightweight Move To prototype.",
      "uses": [
        "NavMesh",
        "AIController",
        "Move To",
        "Target Point"
      ],
      "referenceLesson": "ai",
      "steps": [
        {
          "title": "Prepare a NavMesh",
          "where": "Level → place NavMeshBoundsVolume and press P",
          "do": "Make sure the patrol area is covered by the green NavMesh.",
          "why": "Patrol AI cannot move if the level has no navigable space.",
          "see": "Green navigation covers the patrol floor area.",
          "check": "The patrol route lies on navigable ground.",
          "visual": {
            "src": "assets/diagrams/gold/ai-process.svg",
            "caption": "AI movement begins with a valid NavMesh.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Place patrol points",
          "where": "Level Editor → Place Actors → Target Point",
          "do": "Place at least two Target Points and name them PatrolA and PatrolB.",
          "why": "Patrol AI needs explicit destinations.",
          "see": "The points are visible in the Outliner.",
          "check": "The points are in sensible reachable positions.",
          "visual": {
            "src": "assets/diagrams/gold/ai-example.svg",
            "caption": "Named target points make patrol routes readable.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Store the patrol targets",
          "where": "AI Blueprint or Blackboard",
          "do": "Give the AI a way to know which patrol point is current and which comes next.",
          "why": "Patrol behaviour is a sequence of destinations, not random guessing.",
          "see": "A variable or Blackboard key stores the target.",
          "check": "You can inspect the target during testing.",
          "visual": {
            "src": "assets/diagrams/gold/ai-process.svg",
            "caption": "AI needs stored state for the current target.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Move the AI to the target",
          "where": "AI behaviour logic → Move To",
          "do": "Call Move To for the current patrol point.",
          "why": "Movement to a target is the core patrol behaviour.",
          "see": "The AI walks to PatrolA or PatrolB during Play.",
          "check": "It actually reaches the point rather than stopping immediately.",
          "visual": {
            "src": "assets/diagrams/gold/ai-process.svg",
            "caption": "Patrol = choose destination, then Move To it.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Switch targets and retest",
          "where": "After reaching a point",
          "do": "When the AI reaches one point, update the target to the next point and repeat.",
          "why": "The patrol loop only exists once the AI can change to another destination.",
          "see": "The enemy walks back and forth between the points.",
          "check": "You can explain the order of targets in the patrol loop.",
          "visual": {
            "src": "assets/diagrams/gold/ai-example.svg",
            "caption": "A readable patrol is one you can predict and explain.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "No NavMesh covers the floor.",
        "Patrol target is an unreachable location."
      ],
      "makeItYours": [
        "Randomise next patrol point.",
        "Move patrol point data into a reusable component/array."
      ],
      "worksWhen": [
        "NavMesh is valid.",
        "Enemy reaches points without crossing walls.",
        "Patrol continues after each success."
      ],
      "icon": "↺",
      "featured": true,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Patrol points: at least 2",
        "Point spacing: exactly 600 cm for the first test",
        "Acceptance Radius: 75 cm",
        "Wait: 2.0 s"
      ],
      "studentRecipe": [
        "Place NavMeshBoundsVolume; press P and confirm patrol floor is green.",
        "Place Patrol_A at X 0, Y -300, Z 0 and Patrol_B at X 0, Y 300, Z 0.",
        "AI Controller/BT stores current PatrolTarget. First set Patrol_A.",
        "Move To / AI Move To PatrolTarget with Acceptance Radius 75.",
        "On success wait 2.0 s → switch target to the other point → move again.",
        "Play. AI must alternate A↔B. If it does not move, check navmesh/possessed controller before Behaviour Tree complexity."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "ai-chase",
      "title": "Make an Enemy Chase the Player",
      "category": "ai",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Switch an enemy from patrol/idle to chasing a player target.",
      "uses": [
        "Blackboard",
        "Move To",
        "Target Actor",
        "Distance"
      ],
      "referenceLesson": "ai",
      "steps": [
        {
          "title": "Get a player target",
          "where": "AIController / enemy AI graph → Get Player Pawn or perception event",
          "do": "For a quick prototype, obtain player Pawn; for better AI, set it when perception detects the player.",
          "why": "AI needs a clear target reference rather than guessing every frame.",
          "see": "Target reference becomes valid.",
          "check": "Before moving on, prove this step: Target reference becomes valid.",
          "troubleshoot": [
            "Perception is better than Get Player Pawn for the final version, but a direct player target is fine for first proof."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ai-process.svg",
            "caption": "A chase begins when the AI has a valid player target.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Store target",
          "where": "AIController or Blackboard → TargetActor",
          "do": "Put TargetActor in Blackboard or an AIController variable.",
          "why": "Decision data lives where the AI logic can access it.",
          "see": "Debugger shows TargetActor set.",
          "check": "Before moving on, prove this step: Debugger shows TargetActor set.",
          "troubleshoot": [
            "If TargetActor is None, Move To has nothing useful to chase."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ai-process.svg",
            "caption": "Store the current target in AI state or Blackboard.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Move To target",
          "where": "AIController / Behaviour Tree → Move To / AI Move To",
          "do": "Run Move To / AI Move To using TargetActor.",
          "why": "Navigation continually plans movement toward the target Actor.",
          "see": "Enemy follows around obstacles.",
          "check": "Before moving on, prove this step: Enemy follows around obstacles.",
          "troubleshoot": [
            "If AI refuses to move, verify NavMesh first."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ai-example.svg",
            "caption": "Move To turns the stored target into movement.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Choose chase condition",
          "where": "AI decision logic → distance/perception condition",
          "do": "Use distance/perception Boolean to decide when TargetActor is set/cleared.",
          "why": "A chase needs a start and stop rule.",
          "see": "Enemy stops chasing after the condition is lost.",
          "check": "Before moving on, prove this step: Enemy stops chasing after the condition is lost.",
          "troubleshoot": [
            "Clear the target when the chase condition is no longer true."
          ],
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "A condition decides whether the chase remains active.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Return to patrol",
          "where": "Target clear/failure path → resume patrol task/state",
          "do": "When target clears, resume patrol logic.",
          "why": "AI states should transition rather than ending in a dead graph.",
          "see": "Enemy returns to normal behaviour after losing player.",
          "check": "Before moving on, prove this step: Enemy returns to normal behaviour after losing player.",
          "troubleshoot": [
            "Make patrol and chase states mutually understandable rather than both fighting for movement."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Calling Get Player Character every Tick in many enemies.",
        "Never clearing target so chase never ends."
      ],
      "makeItYours": [
        "Add last-known-location searching.",
        "Increase chase speed while target is active."
      ],
      "worksWhen": [
        "Enemy navigates toward player.",
        "Chase starts/stops based on a clear rule.",
        "Patrol resumes after target loss."
      ],
      "icon": "⇝",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Acceptance Radius: 150 cm",
        "Chase start example: 1000 cm",
        "Lose target example: 1400 cm"
      ],
      "studentRecipe": [
        "Get/set TargetActor when player is detected (use player pawn directly only for a simple prototype).",
        "Store TargetActor in Blackboard/AIController variable.",
        "Move To TargetActor with Acceptance Radius 150.",
        "Only set/chase target inside your detection rule (example start within 1000 cm).",
        "Clear TargetActor when lost/outside your rule (example beyond 1400 cm) and resume patrol.",
        "Play and cross both thresholds. The AI should not flicker rapidly between chase/patrol at the same distance."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "ai-perception",
      "title": "Detect the Player with AI Perception",
      "category": "ai",
      "duration": "30 min",
      "difficulty": "Intermediate",
      "summary": "Use sight perception to set/clear an AI target without hand-written distance checks on Tick.",
      "uses": [
        "AI Perception",
        "Sight Config",
        "Stimulus",
        "Blackboard"
      ],
      "referenceLesson": "ai",
      "steps": [
        {
          "title": "Add AI Perception",
          "where": "AIController Blueprint → Components → Add → AI Perception",
          "do": "On your AIController add an AI Perception component.",
          "why": "Perception belongs with the controller making decisions.",
          "see": "Component is present on controller.",
          "check": "Before moving on, prove this step: Component is present on controller.",
          "troubleshoot": [
            "If the component is on the wrong class, the expected perception events may never fire."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ai-process.svg",
            "caption": "AI Perception supplies sensed targets to the decision system.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Configure Sight",
          "where": "Select AI Perception → Details → Senses Config → AI Sight",
          "do": "Add AI Sight config; set Sight Radius, Lose Sight Radius and Peripheral Vision.",
          "why": "These parameters describe what the AI can sense.",
          "see": "Debug visualisation reflects the configured sense.",
          "check": "Before moving on, prove this step: Debug visualisation reflects the configured sense.",
          "troubleshoot": [
            "Make Lose Sight Radius slightly larger than Sight Radius for stable behaviour."
          ],
          "visual": null
        },
        {
          "title": "Handle Target Perception Updated",
          "where": "AIController Event Graph → On Target Perception Updated",
          "do": "Use the event and inspect Actor + Stimulus Successfully Sensed.",
          "why": "The event tells you when perception state changes rather than polling.",
          "see": "Seeing player gives Successfully Sensed True.",
          "check": "Before moving on, prove this step: Seeing player gives Successfully Sensed True.",
          "troubleshoot": [
            "Inspect Successfully Sensed rather than assuming every update means “seen”."
          ],
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "Target Perception Updated is the event entry point.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Set/clear Blackboard Target",
          "where": "Perception event → Blackboard TargetActor set/clear",
          "do": "If sensed, set TargetActor; if lost, clear it or store last known location.",
          "why": "Perception data feeds Behaviour Tree decisions.",
          "see": "Blackboard target changes live in debugger.",
          "check": "Before moving on, prove this step: Blackboard target changes live in debugger.",
          "troubleshoot": [
            "Clear or update Blackboard data when sight is lost."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ai-process.svg",
            "caption": "Perception results update the Blackboard target.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Test line of sight",
          "where": "Play mode → test walls, FOV and sight radii",
          "do": "Hide behind walls, approach from outside FOV, then enter view.",
          "why": "Perception must react to occlusion and configuration, not just distance.",
          "see": "AI only detects under the conditions you designed.",
          "check": "Before moving on, prove this step: AI only detects under the conditions you designed.",
          "troubleshoot": [
            "Walls/FOV tests reveal configuration problems that straight-line tests hide."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Adding Perception to the Character while behaviour logic lives in AIController without clear routing.",
        "Never handling the “lost sight” stimulus."
      ],
      "makeItYours": [
        "Add hearing later.",
        "Use affiliation/team filtering for friendly/enemy Actors."
      ],
      "worksWhen": [
        "Detection starts when player becomes visible.",
        "Lost sight clears/changes target state.",
        "Behaviour Tree can use the Blackboard key."
      ],
      "icon": "◉",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Sight Radius: 1200 cm",
        "Lose Sight Radius: 1500 cm",
        "Peripheral Vision Half Angle: 60°",
        "Detect Neutrals: enabled for simple test"
      ],
      "studentRecipe": [
        "AIController → add AI Perception component → add Sight config.",
        "Set Sight Radius 1200, Lose Sight Radius 1500, Peripheral Vision Half Angle 60°.",
        "For the first test enable Detect Neutrals = true in the Sight configuration. Leave the other affiliation settings unchanged.",
        "On Target Perception Updated → if Successfully Sensed True set TargetActor; False clear it.",
        "Print sensed/forgotten target while learning.",
        "Play three tests in order: stand 800 cm directly in front of the AI; move beyond 1500 cm; then return inside 800 cm with a solid wall fully blocking line of sight. Confirm the perception event changes in each test before adding chase logic."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "ai-attack-range",
      "title": "Make an Enemy Attack in Range",
      "category": "ai",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Stop chasing at close range and trigger a controlled attack with cooldown.",
      "uses": [
        "Distance",
        "Branch/Decorator",
        "Cooldown",
        "Damage"
      ],
      "referenceLesson": "ai",
      "steps": [
        {
          "title": "Create AttackRange",
          "where": "Enemy AI / Blackboard / Character variables → AttackRange",
          "do": "Add a Float such as 150–250 depending on character scale.",
          "why": "Named range makes the design tunable.",
          "see": "Range is visible in defaults.",
          "check": "Before moving on, prove this step: Range is visible in defaults.",
          "troubleshoot": [
            "Tune AttackRange from real character scale, not a random number."
          ],
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "AttackRange is an explicit tuning value.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Measure distance",
          "where": "AI logic → Get Distance To / Vector Distance",
          "do": "Use Distance between enemy and TargetActor or a Behaviour Tree decorator/service.",
          "why": "Attack decision depends on spatial state.",
          "see": "Debug value decreases as enemy approaches.",
          "check": "Before moving on, prove this step: Debug value decreases as enemy approaches.",
          "troubleshoot": [
            "If the target is invalid, distance tests are meaningless."
          ],
          "visual": {
            "src": "assets/diagrams/gold/ai-process.svg",
            "caption": "Measure the current distance to the target.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Choose movement vs attack",
          "where": "AI Branch or Behaviour Tree decorator → compare distance to AttackRange",
          "do": "If distance > AttackRange chase; otherwise stop/attack.",
          "why": "Two mutually clear states prevent jittery simultaneous move/attack.",
          "see": "Enemy stops at the intended distance.",
          "check": "Before moving on, prove this step: Enemy stops at the intended distance.",
          "troubleshoot": [
            "Stop movement before attacking if sliding looks wrong."
          ],
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "Choose chase or attack based on the range comparison.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Apply attack damage",
          "where": "Attack event / animation notify → Apply Damage",
          "do": "During attack event/notify, Apply Damage to target.",
          "why": "Damage should happen at an intentional attack moment.",
          "see": "Player loses expected health.",
          "check": "Before moving on, prove this step: Player loses expected health.",
          "troubleshoot": [
            "Apply damage at the correct attack moment, ideally an animation notify/window."
          ],
          "visual": null
        },
        {
          "title": "Add cooldown",
          "where": "AI timer / cooldown variable / Behaviour Tree Cooldown decorator",
          "do": "Use a timer/Cooldown decorator so the attack cannot happen every frame.",
          "why": "Attack rate is a game rule.",
          "see": "Enemy waits between attacks.",
          "check": "Before moving on, prove this step: Enemy waits between attacks.",
          "troubleshoot": [
            "Cooldowns should prevent per-frame damage while keeping combat responsive."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Applying damage every Tick while inside range.",
        "Move To continuously fighting against the attack stop state."
      ],
      "makeItYours": [
        "Trigger damage from an Animation Notify.",
        "Add a short wind-up tell before damage."
      ],
      "worksWhen": [
        "Enemy stops in range.",
        "Damage occurs at controlled intervals.",
        "Chase resumes if player escapes range."
      ],
      "icon": "⚔",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Attack range: 200 cm",
        "Damage: 15",
        "Attack cooldown: 1.2 s"
      ],
      "studentRecipe": [
        "Enemy → set AttackRange Float 200 and AttackDamage 15.",
        "On AI decision update get Distance To player.",
        "Branch Distance <= AttackRange and CanAttack True.",
        "True → Apply Damage 15 → Set CanAttack False → Delay 1.2 → Set CanAttack True.",
        "Set Move To Acceptance Radius to 200 cm for this first build so movement stops at the same distance used by AttackRange.",
        "Test at 250 cm (no hit) and 150 cm (hit). Damage must not apply faster than every 1.2 seconds."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "save-checkpoint",
      "title": "Save a Checkpoint Between Sessions",
      "category": "data",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Write the latest checkpoint to a SaveGame object and restore it next time the player starts.",
      "uses": [
        "SaveGame",
        "Transform",
        "Save to Slot",
        "Load from Slot"
      ],
      "referenceLesson": "savegame",
      "steps": [
        {
          "title": "Decide what checkpoint data to save",
          "where": "Before writing any nodes",
          "do": "Choose the minimum checkpoint information you need, such as a checkpoint name or location.",
          "why": "Save systems are better when you are specific about the data you persist.",
          "see": "You have a clear list of saved checkpoint values.",
          "check": "The list is short and intentional.",
          "visual": {
            "src": "assets/diagrams/gold/savegame-example.svg",
            "caption": "A save should capture the specific checkpoint data you need.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Create a SaveGame class if you do not already have one",
          "where": "Content Drawer → SaveGame Blueprint",
          "do": "Use or create a SaveGame Blueprint with variables for the checkpoint data.",
          "why": "Checkpoint saving still uses the normal Unreal SaveGame pattern.",
          "see": "The save asset contains the checkpoint variables.",
          "check": "The variables are of sensible types.",
          "visual": {
            "src": "assets/diagrams/gold/savegame-process.svg",
            "caption": "SaveGame is the normal container for persisted checkpoint data.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Write the checkpoint data when a checkpoint activates",
          "where": "Checkpoint overlap event → Create Save Game Object / Save Game to Slot",
          "do": "When the player reaches a checkpoint, update the save object values and write them to a slot.",
          "why": "The latest checkpoint should be captured the moment it becomes active.",
          "see": "Activating the checkpoint triggers a save path.",
          "check": "The save call returns success.",
          "visual": {
            "src": "assets/diagrams/gold/savegame-process.svg",
            "caption": "Write the checkpoint data at the moment the checkpoint is reached.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Load the checkpoint data on BeginPlay or Continue",
          "where": "Character/GameMode/GameInstance BeginPlay → Load Game From Slot",
          "do": "Load the save slot, cast to your checkpoint save class and read the stored data.",
          "why": "A saved checkpoint only matters if the game reads it back later.",
          "see": "The load path gives you the saved checkpoint values.",
          "check": "The loaded values match the most recent activated checkpoint.",
          "visual": {
            "src": "assets/diagrams/gold/savegame-example.svg",
            "caption": "Load the saved checkpoint information before trying to respawn.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Use the loaded checkpoint for respawn",
          "where": "Respawn logic",
          "do": "Feed the loaded checkpoint data into your respawn system so the player returns to the saved point.",
          "why": "This completes the full loop: activate checkpoint → save it → restore it next session.",
          "see": "Closing and reopening the game still respawns the player at the saved checkpoint.",
          "check": "You have tested the system across separate play sessions.",
          "visual": {
            "src": "assets/ue5/current/editor-main-window.webp",
            "caption": "The real test is whether the checkpoint survives a full restart.",
            "kind": "current",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Creating a SaveGame object but never calling Save Game to Slot.",
        "Saving an Actor reference that will not be valid next session instead of serialisable data."
      ],
      "makeItYours": [
        "Save Lives/Score too.",
        "Add a Reset Save option."
      ],
      "worksWhen": [
        "First run works without a save.",
        "Checkpoint writes successfully.",
        "Restarting game restores saved transform."
      ],
      "icon": "▣",
      "featured": true,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Slot Name: PlayerSlot",
        "User Index: 0",
        "Checkpoint ID: CP_01"
      ],
      "studentRecipe": [
        "Create SaveGame class with CheckpointID Name and/or RespawnTransform.",
        "When checkpoint activates set CheckpointID CP_01 and its Transform on the SaveGame object.",
        "Save Game To Slot: PlayerSlot, User Index 0.",
        "On Continue/BeginPlay → Does Save Game Exist PlayerSlot/0 → Load Game From Slot.",
        "Cast to your SaveGame class and restore checkpoint transform/ID.",
        "Close/restart Play/session and verify CP_01 survives. Do not trust a same-run variable as proof of persistence."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "struct-data-table",
      "title": "Use a Struct and Data Table for Game Content",
      "category": "data",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Move repeated content values out of hard-coded Blueprint branches and into rows of data.",
      "uses": [
        "Struct",
        "Data Table",
        "Row Name",
        "Get Data Table Row"
      ],
      "referenceLesson": "data",
      "steps": [
        {
          "title": "Create a Struct",
          "where": "Content Drawer → right-click → Blueprints → Structure",
          "do": "Make ST_ItemData with fields such as DisplayName, Value, Icon/Colour and Description.",
          "why": "A Struct groups related values into one meaningful record.",
          "see": "Struct fields describe one content item.",
          "check": "Before moving on, prove this step: Struct fields describe one content item.",
          "troubleshoot": [
            "Use field names that describe real content, not generic Value1/Value2."
          ],
          "visual": {
            "src": "assets/book/containers.webp",
            "caption": "A Struct defines the fields used by each row.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Create a Data Table",
          "where": "Content Drawer → right-click → Miscellaneous → Data Table → choose ST_ItemData",
          "do": "Create Data Table using ST_ItemData as Row Structure.",
          "why": "A Data Table stores many records with the same shape.",
          "see": "Table columns match the Struct.",
          "check": "Before moving on, prove this step: Table columns match the Struct.",
          "troubleshoot": [
            "Choose the correct Struct when creating the Data Table."
          ],
          "visual": {
            "src": "assets/ue5/current/datatable-real.webp",
            "caption": "A real Unreal Data Table created from a row Structure.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Add rows",
          "where": "Open Data Table → Add Row",
          "do": "Create rows KeyRed, KeyBlue, HealthSmall etc and fill their data.",
          "why": "Rows let designers add content without duplicating gameplay graphs.",
          "see": "Each row has different values.",
          "check": "Before moving on, prove this step: Each row has different values.",
          "troubleshoot": [
            "Readable RowNames are much easier to debug than Row_0/Row_1."
          ],
          "visual": {
            "src": "assets/ue5/current/datatable-rows-closeup.webp",
            "caption": "Rows are named and filled directly in the Data Table editor.",
            "kind": "current",
            "sourceTitle": ""
          }
        },
        {
          "title": "Choose RowName in Blueprint",
          "where": "Pickup Blueprint → Variables → Name ItemRowName → Instance Editable",
          "do": "Expose an ItemRowName Name variable on your pickup Actor.",
          "why": "Each placed instance can select which data record it represents.",
          "see": "Different instances choose different rows.",
          "check": "Before moving on, prove this step: Different instances choose different rows.",
          "troubleshoot": [
            "Compile after exposing ItemRowName so instances can choose rows."
          ],
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "Expose a RowName on the pickup so instances can select their data.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Get Data Table Row",
          "where": "Pickup Event Graph → Get Data Table Row → Break ST_ItemData",
          "do": "On BeginPlay/interaction, Get Data Table Row using ItemRowName and Break ST_ItemData.",
          "why": "Gameplay reads configured content at runtime.",
          "see": "The Actor displays/uses values from the chosen row.",
          "check": "Before moving on, prove this step: The Actor displays/uses values from the chosen row.",
          "troubleshoot": [
            "If a row returns empty, print the RowName you actually passed in."
          ],
          "visual": {
            "src": "assets/diagrams/gold/data-process.svg",
            "caption": "Get Data Table Row turns a RowName into structured content.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Handle Row Not Found",
          "where": "Get Data Table Row → Row Not Found execution path",
          "do": "Use the failure output to print a useful warning during development.",
          "why": "Bad data should fail visibly, not silently.",
          "see": "Invalid row produces a clear debug message.",
          "check": "Before moving on, prove this step: Invalid row produces a clear debug message.",
          "troubleshoot": [
            "Use Row Not Found to produce a useful development warning."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Hard-coding a giant Branch for every item type.",
        "Using String when Row Name/Name is the intended key."
      ],
      "makeItYours": [
        "Drive pickup colour/mesh from data.",
        "Add a new item row without editing the gameplay graph."
      ],
      "worksWhen": [
        "Multiple items share one gameplay class.",
        "Changing row data changes behaviour/content.",
        "Missing rows are detectable."
      ],
      "icon": "▦",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Struct: ST_ItemData",
        "Fields: DisplayName Text / Damage Float / Value Integer",
        "Rows: TrainingSword, HeavySword, Medkit"
      ],
      "studentRecipe": [
        "Create Struct ST_ItemData: DisplayName Text, Damage Float, Value Integer.",
        "Create Data Table DT_ItemData from ST_ItemData.",
        "Add TrainingSword (Damage25 Value100), HeavySword (40,250), Medkit (0,75).",
        "Blueprint → Get Data Table Row → DT_ItemData → Row TrainingSword.",
        "Break ST_ItemData → Print DisplayName and Damage.",
        "Change TrainingSword Damage to 30 in the table and rerun. Blueprint should read 30 without graph edits."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "gameinstance-state",
      "title": "Keep Data Between Level Loads with GameInstance",
      "category": "data",
      "duration": "18 min",
      "difficulty": "Intermediate",
      "summary": "Store small runtime values that must survive changing maps during the same game session.",
      "uses": [
        "GameInstance",
        "Lifetime",
        "Cast/Reference"
      ],
      "referenceLesson": "framework",
      "steps": [
        {
          "title": "Create BP_GameInstance",
          "where": "Content Drawer → Blueprint Class → All Classes → GameInstance",
          "do": "Create a Blueprint class based on GameInstance.",
          "why": "GameInstance exists for the lifetime of the running game across map loads.",
          "see": "Asset is based on GameInstance.",
          "check": "Before moving on, prove this step: Asset is based on GameInstance.",
          "troubleshoot": [
            "Use GameInstance only for state that should survive map loads during the running game."
          ],
          "visual": {
            "src": "assets/diagrams/gold/framework-example.svg",
            "caption": "GameInstance is the framework class intended to persist during map changes.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Set it in Project Settings",
          "where": "Edit → Project Settings → Maps & Modes → Game Instance Class",
          "do": "Project Settings → Maps & Modes → Game Instance Class = BP_GameInstance.",
          "why": "Creating the class alone does not make the project use it.",
          "see": "Project points to your class.",
          "check": "Before moving on, prove this step: Project points to your class.",
          "troubleshoot": [
            "If your custom GameInstance is not selected in Project Settings, its variables will never be used."
          ],
          "visual": null
        },
        {
          "title": "Add persistent runtime variable",
          "where": "BP_GameInstance → Variables",
          "do": "Add e.g. TotalScore or SelectedCharacter.",
          "why": "These values need to survive map transition, not necessarily application restart.",
          "see": "Value exists on GameInstance.",
          "check": "Before moving on, prove this step: Value exists on GameInstance.",
          "troubleshoot": [
            "Give persistent variables meaningful defaults."
          ],
          "visual": {
            "src": "assets/book/variables-panel.webp",
            "caption": "Persistent runtime values live as variables on the GameInstance.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Get GameInstance when needed",
          "where": "Any Blueprint → Get Game Instance → Cast to BP_GameInstance",
          "do": "Get Game Instance → Cast to BP_GameInstance (or use a cleaner abstraction later) and read/write the value.",
          "why": "Other gameplay classes access the session-level owner.",
          "see": "Value can be changed before map load.",
          "check": "Before moving on, prove this step: Value can be changed before map load.",
          "troubleshoot": [
            "If the cast fails, verify the project is using BP_GameInstance."
          ],
          "visual": {
            "src": "assets/book/casting-example.webp",
            "caption": "Get Game Instance then access your specific GameInstance class.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Open another level and verify",
          "where": "File/Open Level or gameplay level change → read the value again",
          "do": "Change map, then read the value again.",
          "why": "Tests the actual lifetime you chose.",
          "see": "Value remains after level load.",
          "check": "Before moving on, prove this step: Value remains after level load.",
          "troubleshoot": [
            "A level load is the real proof; test before and after changing maps."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Assuming GameInstance saves data after quitting the application. It does not; use SaveGame for that.",
        "Forgetting to set custom GameInstance in Project Settings."
      ],
      "makeItYours": [
        "Store current difficulty/selected loadout.",
        "Combine with SaveGame for long-term persistence."
      ],
      "worksWhen": [
        "Value survives Open Level.",
        "Value resets when application/session restarts unless saved separately."
      ],
      "icon": "∞",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "GameInstance: GI_Learning",
        "TotalCoins Integer: 0",
        "SelectedDifficulty Name: Normal"
      ],
      "studentRecipe": [
        "Create Blueprint GameInstance GI_Learning.",
        "Add TotalCoins Integer=0 and SelectedDifficulty Name=Normal. Compile.",
        "Project Settings → Maps & Modes → Game Instance Class → GI_Learning.",
        "In Level A cast Get Game Instance to GI_Learning → Set TotalCoins 5.",
        "Open Level B → Get Game Instance → cast → Print TotalCoins.",
        "Expected: 5 after level load. Restart the whole game and expect it to reset unless you also use SaveGame."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "sound-feedback",
      "title": "Play Sound Feedback from Blueprint",
      "category": "polish",
      "duration": "10 min",
      "difficulty": "Beginner",
      "summary": "Add one-shot audio feedback to interactions, pickups and gameplay events.",
      "uses": [
        "Sound",
        "Play Sound at Location",
        "Play Sound 2D"
      ],
      "referenceLesson": "events",
      "steps": [
        {
          "title": "Import/choose a sound",
          "where": "Content Drawer → import/select Sound Wave, Sound Cue or MetaSound Source",
          "do": "Use a suitable Sound Wave/Sound Cue/MetaSound asset.",
          "why": "Feedback starts with an asset that represents the action clearly.",
          "see": "Sound previews correctly in Content Browser.",
          "check": "Before moving on, prove this step: Sound previews correctly in Content Browser.",
          "troubleshoot": [
            "Keep source assets organised and check licences for external sounds."
          ],
          "visual": null
        },
        {
          "title": "Choose 2D or world sound",
          "where": "Blueprint Event Graph → Play Sound 2D or Play Sound at Location",
          "do": "Use Play Sound 2D for UI/non-positional feedback; Play Sound at Location for world events.",
          "why": "Spatial behaviour should match what the sound represents.",
          "see": "World sound changes with distance/position if configured.",
          "check": "Before moving on, prove this step: World sound changes with distance/position if configured.",
          "troubleshoot": [
            "Use 2D for non-positional UI feedback and world sound when position matters."
          ],
          "visual": null
        },
        {
          "title": "Trigger from the event",
          "where": "Pickup/door/fire/interact success execution path → sound node",
          "do": "Call sound exactly when pickup/door/fire/interaction succeeds.",
          "why": "Audio should confirm the real gameplay event, not button press if the action failed.",
          "see": "Locked door and opened door can produce different feedback.",
          "check": "Before moving on, prove this step: Locked door and opened door can produce different feedback.",
          "troubleshoot": [
            "Trigger the sound only when the action actually succeeds."
          ],
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "Play the sound on the exact success event, not on a vague nearby event.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Avoid spam",
          "where": "Repeated-action logic → cooldown / Do Once / timer as appropriate",
          "do": "Gate/cooldown repeated actions if the sound becomes a rapid machine-gun of clicks.",
          "why": "Audio repetition can reveal logic problems and annoy players.",
          "see": "Repeated interactions sound intentional.",
          "check": "Before moving on, prove this step: Repeated interactions sound intentional.",
          "troubleshoot": [
            "Repeated actions often need cooldown/variation so feedback does not become noise."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Playing success sound before a Branch that may fail.",
        "Using a world sound for HUD clicks."
      ],
      "makeItYours": [
        "Randomise pitch slightly.",
        "Create different surfaces/impact sounds later."
      ],
      "worksWhen": [
        "Sound occurs at the meaningful event.",
        "Spatial/UI behaviour matches the sound type."
      ],
      "icon": "♪",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Volume Multiplier: 1.0",
        "Pitch Multiplier: 1.0",
        "Play once per action"
      ],
      "studentRecipe": [
        "Choose an imported Sound Wave/Sound Cue.",
        "At the gameplay event add Play Sound 2D for UI/non-positional feedback or Play Sound at Location for world sound.",
        "Set Volume Multiplier 1.0 and Pitch Multiplier 1.0 first.",
        "Compile and trigger the action exactly once.",
        "Confirm one action produces one sound, not several overlapping copies.",
        "Only after timing works, tune volume/pitch or add concurrency."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "niagara-impact",
      "title": "Spawn a Niagara Hit Effect",
      "category": "polish",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Spawn a short VFX system at a trace/projectile impact point and orient it using the surface normal.",
      "uses": [
        "Niagara",
        "Impact Point",
        "Impact Normal",
        "Spawn System at Location"
      ],
      "referenceLesson": "traces",
      "steps": [
        {
          "title": "Choose Niagara system",
          "where": "Content Drawer → select/create Niagara System",
          "do": "Use/create a small impact burst.",
          "why": "The tutorial is about placement/triggering; start with an existing system if needed.",
          "see": "Niagara asset previews.",
          "check": "Before moving on, prove this step: Niagara asset previews.",
          "troubleshoot": [
            "Start with a tiny known-working effect before building a complex Niagara system."
          ],
          "visual": null
        },
        {
          "title": "Use Hit Result",
          "where": "Weapon trace → Break Hit Result",
          "do": "From your weapon trace, Break Hit Result and read Impact Point + Impact Normal.",
          "why": "The trace already knows where the surface was hit and which way it faces.",
          "see": "Debug values update per hit.",
          "check": "Before moving on, prove this step: Debug values update per hit.",
          "troubleshoot": [
            "Use Impact Point/Normal from the same trace that produced the hit."
          ],
          "visual": {
            "src": "assets/diagrams/trace.svg",
            "caption": "The Hit Result supplies the impact point and normal.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Spawn at Impact Point",
          "where": "Blocking-hit path → Spawn System at Location",
          "do": "Spawn System at Location using the impact position.",
          "why": "VFX appears where gameplay actually hit.",
          "see": "Burst appears on the target surface.",
          "check": "Before moving on, prove this step: Burst appears on the target surface.",
          "troubleshoot": [
            "If the effect appears at the origin, inspect the transform pins."
          ],
          "visual": {
            "src": "assets/diagrams/gold/traces-example.svg",
            "caption": "Spawn the effect only where the valid trace hit occurred.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Orient to normal",
          "where": "Impact Normal → Make Rot from X/Z (as appropriate) → Spawn rotation",
          "do": "Convert Impact Normal to a rotation if the effect needs to face away from the surface.",
          "why": "Orientation prevents sparks/decals pointing through walls.",
          "see": "Effects face consistently on floors and walls.",
          "check": "Before moving on, prove this step: Effects face consistently on floors and walls.",
          "troubleshoot": [
            "Only orient to the normal when the effect actually needs surface direction."
          ],
          "visual": null
        },
        {
          "title": "Only on valid hit",
          "where": "Line Trace Return Value / Blocking Hit branch",
          "do": "Run this only from Blocking Hit True.",
          "why": "No-hit shots should not spawn effects at zero/default coordinates.",
          "see": "Misses produce no world impact VFX.",
          "check": "Before moving on, prove this step: Misses produce no world impact VFX.",
          "troubleshoot": [
            "Do not spawn an impact effect on a miss."
          ],
          "visual": {
            "src": "assets/ue5/current/branch-node-real.webp",
            "caption": "Guard the effect with a successful/Blocking Hit condition.",
            "kind": "concept",
            "sourceTitle": ""
          }
        }
      ],
      "mistakes": [
        "Spawning at the weapon muzzle instead of impact.",
        "Ignoring surface normal when orientation matters."
      ],
      "makeItYours": [
        "Choose effect by Physical Material/Surface Type.",
        "Add impact sound at the same point."
      ],
      "worksWhen": [
        "Every valid hit spawns at impact.",
        "Wall/floor orientation looks sensible.",
        "Misses create no fake impact."
      ],
      "icon": "✦",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Spawn at: Impact Point",
        "Scale: 1,1,1 first",
        "Auto destroy: use system default/one-shot setup"
      ],
      "studentRecipe": [
        "Choose one one-shot Niagara System for the test and write down its exact asset name. Use that same system for every step in this tutorial.",
        "From trace/projectile Hit Result get Impact Point (and Normal if orientation is needed).",
        "Add Spawn System at Location → System = chosen Niagara → Location = Impact Point.",
        "Start with Scale 1,1,1 and default rotation; prove position first.",
        "Trigger several hits on different surfaces.",
        "If effect appears at origin/player, inspect the Hit Result wiring before changing Niagara itself."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "camera-shake",
      "title": "Add Camera Shake to an Action",
      "category": "polish",
      "duration": "12 min",
      "difficulty": "Beginner",
      "summary": "Use a Camera Shake asset for gunfire, impacts or heavy movement without manually wobbling the camera every frame.",
      "uses": [
        "Camera Shake",
        "Player Camera Manager",
        "Feedback"
      ],
      "referenceLesson": "functions",
      "steps": [
        {
          "title": "Create camera shake asset",
          "where": "Content Drawer → right-click → Blueprint Class / Camera Shake Base asset as supported",
          "do": "Create a Camera Shake Base asset/class and configure a small pattern appropriate to your UE setup.",
          "why": "A reusable asset separates shake design from gameplay code.",
          "see": "Shake can be previewed/tuned.",
          "check": "Before moving on, prove this step: Shake can be previewed/tuned.",
          "troubleshoot": [
            "Keep the first shake subtle so it is easy to judge."
          ],
          "visual": null
        },
        {
          "title": "Trigger at the event",
          "where": "Action event → Get Player Camera Manager / Start Camera Shake",
          "do": "From gun fire/dash/explosion event, start the camera shake through the player camera manager/controller.",
          "why": "Feedback happens at the moment the player causes/receives the action.",
          "see": "Action causes visible camera response.",
          "check": "Before moving on, prove this step: Action causes visible camera response.",
          "troubleshoot": [
            "Trigger it from the action event, not Tick."
          ],
          "visual": {
            "src": "assets/diagrams/gold/events-process.svg",
            "caption": "Trigger the shake at the same event as the action that caused it.",
            "kind": "concept",
            "sourceTitle": ""
          }
        },
        {
          "title": "Tune intensity",
          "where": "Camera Shake asset → pattern/intensity settings",
          "do": "Keep normal actions subtle and reserve stronger shake for heavy events.",
          "why": "Too much camera movement harms readability and comfort.",
          "see": "The effect is noticeable without making aiming impossible.",
          "check": "Before moving on, prove this step: The effect is noticeable without making aiming impossible.",
          "troubleshoot": [
            "Test several times; strong shake quickly becomes exhausting."
          ],
          "visual": null
        },
        {
          "title": "Respect player comfort",
          "where": "Game settings / accessibility multiplier or disable option",
          "do": "Consider a settings multiplier or ability to disable strong shake.",
          "why": "Accessibility/comfort is part of professional polish.",
          "see": "Shake can be reduced/disabled if you add the setting.",
          "check": "Before moving on, prove this step: Shake can be reduced/disabled if you add the setting.",
          "troubleshoot": [
            "Player comfort settings should be considered for repeated/strong camera motion."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using Tick to manually randomise camera rotation.",
        "Making every small action use the same huge shake."
      ],
      "makeItYours": [
        "Scale shake by damage/weapon power.",
        "Combine with controller rumble where available."
      ],
      "worksWhen": [
        "Shake triggers once per action.",
        "Intensity matches event.",
        "Gameplay remains readable."
      ],
      "icon": "≋",
      "featured": false,
      "referenceImages": [],
      "source": null,
      "prescriptive": true,
      "starterValues": [
        "Duration: 0.15 s for the first build",
        "Location amplitude: 2",
        "Rotation amplitude: 1.5",
        "Frequency: 15 for the first build"
      ],
      "studentRecipe": [
        "Create a Camera Shake Base Blueprint using a simple oscillation/perlin pattern supported by your project version.",
        "Set first teaching values: Duration ~0.15 s, Location Amplitude 2, Rotation Amplitude 1.5, Frequency ~15.",
        "From the action event get Player Camera Manager → Start Camera Shake → choose your shake class.",
        "Compile and trigger one action.",
        "If it is nauseating, reduce amplitude before shortening everything to zero.",
        "Test on repeated action; the shake should support feedback, not make aiming impossible."
      ],
      "prescriptivePass": "3.30"
    },
    {
      "id": "silent-hill-fog",
      "title": "Make Silent Hill-style Fog",
      "category": "polish",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Build dense, low-visibility horror fog inspired by Silent Hill 2, then tune lighting and post-process so the fog creates uncertainty rather than simply turning the screen grey.",
      "uses": [
        "Exponential Height Fog",
        "Volumetric Fog",
        "Lighting",
        "Post Process",
        "Local Fog"
      ],
      "referenceLesson": "editor",
      "steps": [
        {
          "title": "Add Exponential Height Fog",
          "where": "Level Editor → Add (+) → Visual Effects → Exponential Height Fog",
          "do": "Place Exponential Height Fog in the level.",
          "why": "This is the main fog actor for broad atmospheric control in Unreal.",
          "see": "A fog actor appears in the Outliner and the level look changes immediately.",
          "check": "You can select the fog actor and see its settings in Details.",
          "visual": {
            "src": "assets/book/best-practices/volumetric-fog-layers.webp",
            "caption": "Layered fog is a key part of atmospheric visibility control.",
            "kind": "book",
            "sourceTitle": "book"
          }
        },
        {
          "title": "Enable volumetric fog and reduce visibility",
          "where": "Select Exponential Height Fog → Details",
          "do": "Enable Volumetric Fog, then adjust Fog Density and Extinction Scale to reduce how far the player can see.",
          "why": "Silent Hill-style fog works because it limits information, not just because it is “white”.",
          "see": "The distant background becomes obscured while nearer space remains readable.",
          "check": "You can still navigate the scene without the whole screen becoming a flat grey wall.",
          "visual": {
            "src": "assets/book/best-practices/volumetric-fog-layers.webp",
            "caption": "Volumetric fog and density settings control depth and visibility.",
            "kind": "book",
            "sourceTitle": "book"
          }
        },
        {
          "title": "Shape the mood with lighting",
          "where": "Directional Light, Sky Light and local lights",
          "do": "Lower or soften the main lighting and use local lights sparingly to create pockets of visibility.",
          "why": "Fog and lighting work together. Bright flat lighting makes the fog feel weak and unthreatening.",
          "see": "The scene feels moodier and more directional.",
          "check": "Important routes or landmarks remain slightly more readable than the dead space around them.",
          "visual": {
            "src": "assets/book/best-practices/lighting-mood-comparison.webp",
            "caption": "Different lighting moods drastically change how foggy spaces feel.",
            "kind": "book",
            "sourceTitle": "book"
          }
        },
        {
          "title": "Use post process to push atmosphere carefully",
          "where": "Post Process Volume → global settings",
          "do": "Optionally reduce saturation slightly, tweak contrast or temperature and avoid overdoing it.",
          "why": "Post-process settings should support the fog mood, not hide bad scene setup.",
          "see": "The scene feels more oppressive without becoming unreadable.",
          "check": "You can still tell where the player can walk and what matters.",
          "visual": {
            "src": "assets/book/best-practices/outdoor-lighting-example.webp",
            "caption": "Atmosphere works best when fog, lighting and post process support each other.",
            "kind": "book",
            "sourceTitle": "book"
          }
        },
        {
          "title": "Play-test the space for tension and readability",
          "where": "Run through the level",
          "do": "Walk the route as a player and ask what can be seen, when it appears, and whether the fog creates tension without making the scene annoying.",
          "why": "Atmosphere is a design problem: the fog must control information on purpose.",
          "see": "The player sees shapes emerge late and the route remains just readable enough.",
          "check": "You can explain which information the fog hides and which information it still allows through.",
          "visual": {
            "src": "assets/book/best-practices/volumetric-fog-layers.webp",
            "caption": "The fog should shape tension and information, not just fill the map.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        }
      ],
      "mistakes": [
        "Maxing Fog Density until everything is a flat grey wall.",
        "Using auto exposure so aggressively that fog brightness pumps when entering rooms.",
        "Making every light use extreme volumetric scattering.",
        "Forgetting to test navigation and performance."
      ],
      "makeItYours": [
        "Create a safe zone where fog thins around a landmark.",
        "Make a denser local fog pocket hide an enemy entrance.",
        "Add drifting ash/dust with slow Niagara particles."
      ],
      "worksWhen": [
        "Nearby navigation stays readable.",
        "Distant information is obscured.",
        "Lighting creates silhouettes/depth in fog.",
        "The mood survives movement between areas.",
        "Performance remains acceptable."
      ],
      "icon": "≈",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.konami.com/products_master/eu_publish/silenthill2r/eu/en/images/sh2_3.png",
          "caption": "Silent Hill 2 official screenshot — dense street fog removes long-distance information while preserving silhouettes and nearby road/building edges.",
          "sourceUrl": "https://www.konami.com/games/eu/en/products/silenthill2r/",
          "sourceTitle": "KONAMI — SILENT HILL 2 official product page",
          "kind": "reference"
        },
        {
          "src": "https://www.konami.com/products_master/eu_publish/silenthill2r/eu/en/images/sh2_5.png",
          "caption": "Silent Hill 2 official screenshot — note the layered visibility: readable foreground props, soft middle distance and rapidly disappearing background.",
          "sourceUrl": "https://www.konami.com/games/eu/en/products/silenthill2r/",
          "sourceTitle": "KONAMI — SILENT HILL 2 official product page",
          "kind": "reference"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/669dc61c-9481-43a6-b117-ec6c76244ccb/03-exponential-height-fog-enabled.png",
          "caption": "Epic UE5.8 documentation example: Exponential Height Fog enabled. Use this as the Unreal-side reference for the base fog layer.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/exponential-height-fog-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/384ec87a-79c8-47ee-9dca-c664802cc995/volumetricfog.png",
          "caption": "Epic UE5.8 documentation example: Volumetric Fog interacting with scene lighting.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/exponential-height-fog-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "assets/book/best-practices/volumetric-fog-layers.webp",
          "caption": "Book reference — Progressive fog layering showing how volumetric height fog changes depth, mood and atmosphere.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/rain-material-graph.webp",
          "caption": "Book reference — A rain material setup from the book, useful for talking about weather effects and layered atmosphere.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        }
      ],
      "source": {
        "title": "Silent Hill 2 official reference imagery © Konami Digital Entertainment",
        "url": "https://www.konami.com/games/eu/en/products/silenthill2r/"
      },
      "prescriptive": true,
      "starterValues": [
        "Fog Density: 0.03 starting point",
        "Fog Height Falloff: 0.20",
        "Volumetric Fog: Enabled",
        "Extinction Scale: 1.5 starting point",
        "Post-process saturation: 0.85 starting point"
      ],
      "studentRecipe": [
        "Level Editor → Add → Visual Effects → Exponential Height Fog.",
        "Select fog → enable Volumetric Fog. Start Fog Density 0.03 and Fog Height Falloff 0.20.",
        "Set Volumetric Fog Extinction Scale 1.5 as a starting point. Do not chase mood before basic visibility works.",
        "Play the route. Mark the distance where important silhouettes first become visible.",
        "If the route becomes unreadable, add one Point Light at the problem area. Start Intensity 2500, Attenuation Radius 500 and Volumetric Scattering Intensity 1.0, then re-test.",
        "Optional Post Process Volume: set Saturation to 0.85 for the first test. Re-test the same route before changing any other post-process value."
      ],
      "prescriptivePass": "3.30"
    }
  ],
  "chapterBuilds": [
    {
      "id": "foundations-build",
      "path": "foundations",
      "title": "The Locked Room",
      "icon": "▣",
      "duration": "45–60 min",
      "xp": 250,
      "summary": "Build a tiny playable room/escape space that proves you can organise an Unreal project and create reusable world objects.",
      "brief": "You arrive in a small maintenance room. The exit is visible but the space must be readable, organised and built from reusable pieces. This is deliberately more level-building than scripting: prove you can control the Editor before the Blueprint-heavy chapters.",
      "uses": [
        "Editor navigation",
        "Actors",
        "Components",
        "Blueprint Classes",
        "instances"
      ],
      "relatedTutorials": [
        "flashlight"
      ],
      "phases": [
        [
          "Greybox the room",
          [
            "Create one start room, a short connecting space and an exit area using simple geometry.",
            "Organise the Outliner into Environment, Gameplay and Lighting folders.",
            "Name important Actors so another student could understand the level."
          ]
        ],
        [
          "Make reusable props",
          [
            "Create at least one Blueprint Class from a repeated prop idea (lamp, hazard marker, crate, doorframe, etc.).",
            "Give the Blueprint at least two Components with a sensible hierarchy.",
            "Place at least three instances and change one exposed property per instance."
          ]
        ],
        [
          "Make the route readable",
          [
            "Use lighting, colour/value contrast and prop placement to make the exit route understandable without arrows everywhere.",
            "Press Play from several spawn positions and check the player does not immediately get lost."
          ]
        ],
        [
          "Test like a developer",
          [
            "Deliberately rename/move one important object and prove you can find it again through Outliner/Content Drawer.",
            "Fix any collision, scale or placement problems you discover during Play."
          ]
        ]
      ],
      "checkpoints": [
        "You can navigate the full space in Play mode.",
        "Repeated props are instances of reusable Blueprint Classes.",
        "Outliner/project folders are organised.",
        "Another student could open the map and identify important objects."
      ],
      "makeItYours": [
        "Choose your own theme: sci-fi maintenance room, dungeon cell, school corridor, bunker, etc.",
        "Add one environmental storytelling detail that explains what happened here."
      ],
      "evidence": [
        "Screenshot of organised Outliner + level.",
        "Screenshot of one reusable Blueprint Components panel.",
        "In-game screenshot showing readable route.",
        "One sentence: what did you change after testing?"
      ]
    },
    {
      "id": "blueprints-build",
      "path": "blueprints",
      "title": "Power Failure",
      "icon": "⚡",
      "duration": "60–90 min",
      "xp": 300,
      "summary": "Combine Events, Variables, Branches and Functions into a tiny objective: restore power and open the exit.",
      "brief": "The room is dark and the exit has no power. The player must collect/activate a power cell, restore the system and then use the exit. You are allowed to follow the steps — the important part is understanding which state changes and why.",
      "uses": [
        "Events",
        "Variables",
        "Booleans",
        "Branches",
        "Functions",
        "basic interaction"
      ],
      "relatedTutorials": [
        "key-pickup",
        "locked-door",
        "flashlight",
        "sound-feedback"
      ],
      "phases": [
        [
          "Create the state",
          [
            "Create bPowerRestored (False) in the player or a small facility/system Blueprint — choose and explain the owner.",
            "Create a RestorePower function that sets the state and fires obvious feedback."
          ]
        ],
        [
          "Build the power cell",
          [
            "Create a pickup/console that triggers RestorePower once.",
            "Use an Event to begin the interaction and a Branch/Boolean so it cannot award power repeatedly."
          ]
        ],
        [
          "Build the exit rule",
          [
            "Create a reusable exit door/control.",
            "When interacted with, Branch on bPowerRestored.",
            "False path gives useful feedback: NO POWER. True path opens/enables the exit."
          ]
        ],
        [
          "Refactor",
          [
            "Move repeated/noisy logic into at least one Function with a clear name.",
            "Add comments around one non-obvious section of the graph."
          ]
        ],
        [
          "Break it on purpose",
          [
            "Set bPowerRestored default True and predict what will happen, then test it.",
            "Restore False and test the intended failure → success sequence from a clean Play session."
          ]
        ]
      ],
      "checkpoints": [
        "Exit fails before power is restored.",
        "Power can only be restored once.",
        "Exit succeeds after the state changes.",
        "Graphs use named variables/functions rather than unexplained magic logic."
      ],
      "makeItYours": [
        "Replace the power cell with a fuse, ritual object, keycard or generator switch.",
        "Add a second condition such as PowerRestored AND HasSecurityCode."
      ],
      "evidence": [
        "Screenshot of the state/Branch graph.",
        "Screenshot before power with failure feedback.",
        "Screenshot after power with open/active exit.",
        "Explain in one sentence where bPowerRestored lives and why."
      ]
    },
    {
      "id": "framework-build",
      "path": "framework",
      "title": "Emergency Override",
      "icon": "↔",
      "duration": "60–90 min",
      "xp": 325,
      "summary": "Build several interactable objects that communicate cleanly without turning the player Blueprint into a giant switchboard.",
      "brief": "A facility emergency override must activate three different systems: a door, warning light and lift/bridge. Build one interaction route that can talk to different objects cleanly.",
      "uses": [
        "Gameplay Framework",
        "References",
        "Casting",
        "Interfaces",
        "Event Dispatchers",
        "ownership"
      ],
      "relatedTutorials": [
        "line-trace-interact",
        "button-lever",
        "pressure-plate",
        "timeline-door"
      ],
      "phases": [
        [
          "Universal interaction",
          [
            "Create/use BPI_Interact and a camera line-trace interaction system.",
            "Make at least two unrelated Actor classes respond to the same Interact message."
          ]
        ],
        [
          "Override console",
          [
            "Create BP_OverrideConsole with a bActivated state.",
            "When used, broadcast an Event Dispatcher or call an activatable interface to notify subscribed/assigned systems."
          ]
        ],
        [
          "Three listeners",
          [
            "Door opens/enables.",
            "Warning light changes colour/visibility.",
            "Lift/bridge begins moving or enables its control."
          ]
        ],
        [
          "Ownership check",
          [
            "Remove any Get All Actors of Class/Get Actor of Class shortcuts that become ambiguous.",
            "Use explicit references, interfaces or bindings where the relationship is known."
          ]
        ],
        [
          "Failure test",
          [
            "Disconnect one listener and verify the others still work.",
            "Interact with a normal wall and confirm the system fails safely without Accessed None errors."
          ]
        ]
      ],
      "checkpoints": [
        "One interaction system works with multiple classes.",
        "Console does not contain hard-coded logic for every target type.",
        "No repeated casting chain is needed for every interactable.",
        "Missing/non-interactable targets fail safely."
      ],
      "makeItYours": [
        "Add a second console that only controls a subset of systems.",
        "Have one listener update UI/objective text via an event rather than direct widget ownership."
      ],
      "evidence": [
        "Screenshot of interface call from interaction trace.",
        "Screenshot of dispatcher/interface communication from console.",
        "In-game screenshot showing at least two different systems reacting.",
        "Name one cast you avoided and what you used instead."
      ]
    },
    {
      "id": "gameplay-build",
      "path": "gameplay",
      "title": "Escape the Facility",
      "icon": "⚙",
      "duration": "90–120 min",
      "xp": 400,
      "summary": "Build a compact playable escape sequence using collision, traces, a moving door, HUD feedback and a checkpoint/save-style rule.",
      "brief": "Create a 2–4 minute escape prototype. The player must find access, interact with the world, pass a moving barrier, understand an objective and survive/recover from one hazard.",
      "uses": [
        "Collision",
        "Line Traces",
        "Timelines",
        "UMG",
        "Save/Checkpoint concepts",
        "gameplay feedback"
      ],
      "relatedTutorials": [
        "locked-door",
        "timeline-door",
        "interaction-prompt",
        "objective-text",
        "checkpoint",
        "damage-zone"
      ],
      "phases": [
        [
          "Interaction spine",
          [
            "Use a camera trace + interface for interaction.",
            "Add an interaction prompt that only appears for valid targets."
          ]
        ],
        [
          "Access challenge",
          [
            "Place a key/keycard/fuse pickup and a locked smooth Timeline door.",
            "Locked attempt must give feedback; successful attempt opens the route."
          ]
        ],
        [
          "Objective HUD",
          [
            "Show a current objective such as FIND ACCESS CARD.",
            "Update it after pickup and again after the door opens."
          ]
        ],
        [
          "Hazard + checkpoint",
          [
            "Create a damage/death zone or simple threat area.",
            "Place a checkpoint before/after the risky section and respawn appropriately."
          ]
        ],
        [
          "Full playtest",
          [
            "Start from a fresh Play session and complete the whole loop without using editor cheats.",
            "Have someone else play if possible; fix at least one unclear prompt, collision or route issue."
          ]
        ]
      ],
      "checkpoints": [
        "Interaction targets are reliable and range-limited.",
        "Door is locked until the access condition is met.",
        "HUD tells the player what to do and changes with progress.",
        "Hazard/death has a recoverable rule.",
        "The sequence can be completed from start to finish."
      ],
      "makeItYours": [
        "Theme it as horror, sci-fi, fantasy, stealth or comedy while keeping the technical spine.",
        "Add one optional shortcut/reward for observant players."
      ],
      "evidence": [
        "Screenshot of trace/interact working.",
        "Screenshot of locked-door rule + Timeline.",
        "Two HUD screenshots showing objective changing.",
        "Screenshot of checkpoint/hazard.",
        "Write one playtest change you made and why."
      ]
    },
    {
      "id": "advanced-build",
      "path": "advanced",
      "title": "Avoid the Security Drone",
      "icon": "◉",
      "duration": "90–120 min",
      "xp": 425,
      "summary": "Create a simple patrol/chase enemy with readable animation/state and at least one piece of data-driven configuration.",
      "brief": "The exit route is watched by a security drone/guard. It patrols, detects the player, chases, then returns to normal when the player escapes. Make the state readable to the player and configure at least one behaviour value from structured data.",
      "uses": [
        "Data/Structs",
        "AI",
        "Blackboard/Behaviour Tree",
        "NavMesh",
        "Animation Blueprint",
        "debugging"
      ],
      "relatedTutorials": [
        "ai-patrol",
        "ai-chase",
        "ai-perception",
        "ai-attack-range",
        "struct-data-table"
      ],
      "phases": [
        [
          "Navigable patrol",
          [
            "Set up NavMesh and at least three patrol points.",
            "Enemy reliably cycles through them without crossing blocked geometry."
          ]
        ],
        [
          "Detection + chase",
          [
            "Use AI Perception or a clearly defined detection rule to set TargetActor.",
            "Behaviour switches from Patrol to Chase and clears/changes target when the player is lost."
          ]
        ],
        [
          "Readable state",
          [
            "Use Animation Blueprint/state, material colour, light, sound or another clear cue so Patrol and Chase look different.",
            "Do not rely only on invisible Blackboard values."
          ]
        ],
        [
          "Data-driven value",
          [
            "Create a Struct/Data Table or structured row containing at least PatrolSpeed, ChaseSpeed or DetectionRange.",
            "Read the selected row and apply the value rather than hard-coding every enemy variant."
          ]
        ],
        [
          "Debug pass",
          [
            "Watch the Behaviour Tree/Blackboard live while playing.",
            "Deliberately break one key/target and use debugging to find the failure, then repair it."
          ]
        ]
      ],
      "checkpoints": [
        "Patrol works on NavMesh.",
        "Player detection changes AI state.",
        "Losing the player returns/changes behaviour.",
        "Player can visually understand the state change.",
        "At least one gameplay parameter comes from structured data."
      ],
      "makeItYours": [
        "Create two enemy data rows: slow/searching and fast/aggressive.",
        "Add a last-known-location search before returning to patrol."
      ],
      "evidence": [
        "Screenshot of NavMesh + patrol setup.",
        "Behaviour Tree/Blackboard screenshot during chase.",
        "Screenshot of Data Table row.",
        "In-game Patrol vs Chase screenshots.",
        "Explain one AI bug you found using the debugger."
      ]
    },
    {
      "id": "practice-build",
      "path": "practice",
      "title": "Blueprint Rescue: Fix This Game",
      "icon": "✓",
      "duration": "60–90 min",
      "xp": 450,
      "summary": "Take intentionally messy gameplay logic and refactor it so another developer can understand, test and extend it.",
      "brief": "You inherit a small working prototype with ugly Blueprint logic. Your job is not to add ten features — it is to make the existing feature safe, readable and maintainable without changing what the player experiences.",
      "uses": [
        "Debugging",
        "Functions",
        "Responsibility",
        "Naming",
        "validation",
        "refactoring"
      ],
      "relatedTutorials": [
        "line-trace-gun",
        "locked-door",
        "player-health",
        "score-system"
      ],
      "phases": [
        [
          "Choose a messy system",
          [
            "Use one of your earlier Chapter Builds or a deliberately messy teacher-provided Blueprint.",
            "Take a BEFORE screenshot before changing anything."
          ]
        ],
        [
          "Identify smells",
          [
            "Mark duplicated node chains, unclear names, giant Event Graph sections, unnecessary casts/Get Actor calls and magic numbers.",
            "Write a five-item refactor checklist before editing."
          ]
        ],
        [
          "Refactor ownership",
          [
            "Move behaviour to the Actor/class that logically owns it.",
            "Replace at least one repeated chunk with a Function or reusable communication route."
          ]
        ],
        [
          "Improve readability",
          [
            "Rename variables/functions/components.",
            "Use comments/categories where they genuinely explain intent.",
            "Straighten execution flow and remove dead/debug nodes that are no longer needed."
          ]
        ],
        [
          "Prove behaviour did not change",
          [
            "Run the same test cases from before refactoring.",
            "Test both success and failure paths, not just the happy path."
          ]
        ],
        [
          "Developer hand-off",
          [
            "Ask another student to explain what the graph does without you talking.",
            "Fix one thing they found confusing."
          ]
        ]
      ],
      "checkpoints": [
        "The mechanic still behaves the same for the player.",
        "Graphs are smaller/clearer or responsibilities are better separated.",
        "Names explain intent.",
        "Repeated logic is reduced.",
        "Failure paths are tested."
      ],
      "makeItYours": [
        "Convert a cast-heavy interaction system to interfaces.",
        "Replace Delay spam with timers/events where that improves the design."
      ],
      "evidence": [
        "BEFORE screenshot.",
        "AFTER screenshot from the same graph area.",
        "List three specific refactors and why each helps.",
        "One screenshot/debug note proving the mechanic still works."
      ]
    }
  ]
};
