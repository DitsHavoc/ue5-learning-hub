window.UE5_TUTORIAL_DATA = {
  "version": "3.19.0",
  "buildDate": "25 Aug 2026",
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
        [
          "Create the Input Action",
          "In your Input folder create an Input Action named IA_Action. For a simple press, leave Value Type as Digital (Bool).",
          "The Input Action represents the intention — Jump, Sprint, Interact — rather than a specific keyboard key.",
          "The IA_Action asset exists and shows a Boolean value type."
        ],
        [
          "Open the Mapping Context",
          "Open the Input Mapping Context already used by your player, usually IMC_Default in a Third Person template.",
          "The Mapping Context decides which physical controls trigger each action.",
          "You can see the existing movement/look/jump mappings."
        ],
        [
          "Add the mapping",
          "Add IA_Action to the mapping context and choose a key such as E.",
          "Now the input system knows that E should produce the IA_Action event.",
          "IA_Action appears in the mapping list with E beside it."
        ],
        [
          "Add the event",
          "Open the player Character Blueprint, right-click the Event Graph and add the IA_Action event.",
          "Gameplay code responds to the action, not to the keyboard key directly.",
          "Pressing E while playing causes the event execution pin to pulse in Blueprint debugging."
        ],
        [
          "Prove it fires",
          "Connect Triggered or Started to Print String with a short test message. Compile and Play.",
          "A tiny test isolates input setup before you build the real mechanic.",
          "Your message appears exactly when you expect it to."
        ]
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
      "source": null
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
        [
          "Open your Character Blueprint",
          "Open the Blueprint used by the player and select Class Defaults.",
          "Jump count is already built into ACharacter, so use the engine feature before inventing a new system.",
          "You are editing the playable Character class, not a random instance in the level."
        ],
        [
          "Find Jump Max Count",
          "Search the Details panel for Jump Max Count.",
          "This controls how many jumps can occur before landing resets the count.",
          "The default is normally 1."
        ],
        [
          "Set it to 2",
          "Change Jump Max Count to 2, Compile and Save.",
          "Two allowed jumps means the original ground jump plus one extra jump in the air.",
          "The value remains 2 after compiling."
        ],
        [
          "Test it properly",
          "Play, jump once, press Jump again while airborne, then try a third press.",
          "Testing success and failure proves the rule is really working.",
          "The second press jumps; the third does nothing until you land."
        ]
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
      "source": null
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
        [
          "Create IA_Sprint",
          "Create a Digital Input Action and map it to Left Shift in the player Mapping Context.",
          "Sprint is an intention, so it should be represented by an Input Action.",
          "IA_Sprint fires when Shift is pressed."
        ],
        [
          "Get Character Movement",
          "In the Character Blueprint, drag in the Character Movement component and get Max Walk Speed.",
          "Movement speed belongs to Character Movement, not to the mesh or controller.",
          "You can read the current Max Walk Speed value."
        ],
        [
          "Sprint on press",
          "From IA_Sprint Started, Set Max Walk Speed to a faster value such as 900.",
          "Started runs once when the input begins.",
          "Holding Shift makes the player noticeably faster."
        ],
        [
          "Return on release",
          "From IA_Sprint Completed, set Max Walk Speed back to the normal value such as 500 or 600.",
          "A held action needs a reliable end state or the player can become permanently fast.",
          "Releasing Shift immediately returns normal movement speed."
        ],
        [
          "Promote speeds to variables",
          "Create WalkSpeed and SprintSpeed variables and use those instead of magic numbers.",
          "Named variables explain intent and make balancing easier.",
          "Changing SprintSpeed changes sprint without hunting through nodes."
        ]
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
      "source": null
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
        [
          "Create IA_Dash",
          "Make a Digital Input Action mapped to a key such as Q or Left Alt.",
          "Separate the action from the physical key.",
          "The dash input fires in the Character."
        ],
        [
          "Add CanDash",
          "Create a Boolean CanDash, default True. Branch from the dash input using it.",
          "A state variable gives the mechanic a clear rule: ready or cooling down.",
          "When CanDash is False, the dash path stops."
        ],
        [
          "Build dash velocity",
          "Get Actor Forward Vector and multiply it by a DashStrength variable such as 1200.",
          "The forward vector is a direction; multiplying gives it useful magnitude.",
          "Debug/watch the vector and see its size change with DashStrength."
        ],
        [
          "Launch the Character",
          "Feed that vector into Launch Character. Turn XY Override on for a consistent dash and keep Z Override off so normal vertical movement is preserved.",
          "Launch Character works with Character movement and is quick to prototype.",
          "Pressing Dash moves the player sharply forward."
        ],
        [
          "Start cooldown",
          "Set CanDash False, then use Set Timer by Event or a short retrigger-safe timer to set it True after DashCooldown.",
          "A timer is cleaner than blocking the graph with repeated Delay logic.",
          "Repeated button mashing cannot dash until the cooldown finishes."
        ]
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
      "source": null
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
        [
          "Enable crouching",
          "Select Character Movement and enable Can Crouch in Nav Movement / Movement Capabilities.",
          "The Character Movement component already knows how to resize movement collision for crouch.",
          "Can Crouch is enabled."
        ],
        [
          "Create IA_Crouch",
          "Map a Digital Input Action to C or Ctrl.",
          "Keeps controls separate from gameplay logic.",
          "The action fires while playing."
        ],
        [
          "Crouch on Started",
          "Call Crouch from IA_Crouch Started.",
          "This asks the Character to enter its supported crouched state.",
          "The capsule/character moves into crouched state."
        ],
        [
          "UnCrouch on Completed",
          "Call UnCrouch from IA_Crouch Completed.",
          "Releasing the input returns the Character to normal if there is space.",
          "The character stands again when released."
        ],
        [
          "Tune height/speed",
          "Adjust Crouched Half Height and Max Walk Speed Crouched on Character Movement.",
          "Tuning the built-in values is safer than rebuilding collision.",
          "Crouch has a visibly different height and speed."
        ]
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
      "source": null
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
        [
          "Choose a trace range",
          "Create an InteractionRange Float, for example 350.",
          "A named range makes the mechanic easy to tune and explain.",
          "Changing the variable changes interaction distance."
        ],
        [
          "Build Trace Start",
          "Get the player camera World Location.",
          "First-person/third-person interaction usually feels best when targeting follows the view.",
          "Trace Start follows the camera."
        ],
        [
          "Build Trace End",
          "Get Camera Forward Vector × InteractionRange, then add it to Camera Location.",
          "End = Start + Direction × Distance. This is the reusable trace formula.",
          "The End vector sits in front of the camera."
        ],
        [
          "Run Line Trace By Channel",
          "Use Visibility initially and enable Draw Debug Type: For Duration while testing.",
          "Debug lines make invisible targeting visible while you build.",
          "A coloured line appears from camera to target."
        ],
        [
          "Read the hit",
          "Break Hit Result and use Hit Actor. Print its Display Name for now.",
          "Before calling interaction logic, prove that you are detecting the correct object.",
          "Looking at different Actors prints the expected names."
        ],
        [
          "Replace Print with interaction",
          "Once reliable, call a Blueprint Interface such as BPI_Interact on Hit Actor.",
          "Interfaces let many different object classes respond without a chain of casts.",
          "Doors, buttons and pickups can all respond to the same Interact message."
        ]
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
      "source": null
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
        [
          "Create BP_Key",
          "Create an Actor Blueprint with a Static Mesh and Sphere Collision.",
          "A reusable Actor class lets you place multiple key instances later.",
          "The key is visible and has an overlap volume."
        ],
        [
          "Make the sphere overlap Pawn",
          "Set collision so the sphere generates overlap events with the player Pawn.",
          "The trigger should detect the player without physically blocking them.",
          "Walking through the sphere fires Begin Overlap."
        ],
        [
          "Store possession on the player",
          "Create HasKey Boolean on the player Character, default False.",
          "The player owns the inventory state; the pickup merely changes it.",
          "HasKey begins False each play session."
        ],
        [
          "Set the key state",
          "On BP_Key Begin Overlap, identify the player and set HasKey True.",
          "The overlap is the moment the game state changes.",
          "Watch HasKey turn True in Blueprint debugging."
        ],
        [
          "Remove the pickup",
          "Play a sound/FX if desired, then Destroy Actor on the key.",
          "A collected pickup should no longer remain available.",
          "The key disappears and cannot be collected twice."
        ]
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
      "source": null
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
        [
          "Build/finish your key pickup",
          "Use the Key Pickup tutorial or create a HasKey Boolean on the player.",
          "The door needs a clear piece of game state to test.",
          "HasKey changes from False to True when the key is collected."
        ],
        [
          "Create BP_LockedDoor",
          "Create an Actor Blueprint with frame/door meshes and an interaction trigger or interface.",
          "The door should own door behaviour.",
          "You can place multiple door instances from one class."
        ],
        [
          "Get the player state",
          "When Interact is called, obtain the player Character reference and read HasKey.",
          "The door asks the player whether the access condition is met.",
          "You can Print String the current HasKey value."
        ],
        [
          "Branch on HasKey",
          "Feed HasKey into a Branch. True opens; False gives locked feedback.",
          "The Branch turns a game rule into explicit True/False execution.",
          "Without key: locked message/sound. With key: open path runs."
        ],
        [
          "Open the door",
          "For the first version, rotate the door instantly or call your Timeline Door logic.",
          "Make the rule work first; polish motion second.",
          "The door opens only on the True path."
        ],
        [
          "Decide whether the key is consumed",
          "If it is a one-use key, set HasKey False after opening. If it is permanent access, leave it True.",
          "This is a design rule, not a technical accident.",
          "Behaviour matches the rule you chose."
        ]
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
      "source": null
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
        [
          "Create BP_PressurePlate",
          "Add a visible plate mesh and Box Collision above it.",
          "Separating visible mesh and trigger collision makes the system easy to tune.",
          "The box covers the standing area."
        ],
        [
          "Detect Begin Overlap",
          "On Component Begin Overlap, check the overlapping Actor is the intended Pawn/object.",
          "Filters stop random debris activating the plate unless you want that design.",
          "Player stepping on the plate fires once."
        ],
        [
          "Activate the target",
          "Store an Instance Editable reference to a target door/light and call its Activate/Open function.",
          "Instance references let each placed plate control a different target.",
          "Plate A can control Door A without hard-coded Get Actor of Class."
        ],
        [
          "Detect End Overlap",
          "On End Overlap, call Deactivate/Close if the design should be hold-to-open.",
          "Begin and End create a complete state transition.",
          "Leaving the plate reverses the effect."
        ],
        [
          "Test edge cases",
          "Walk on/off quickly and try standing partly on the plate.",
          "Triggers must behave reliably under awkward player movement.",
          "No rapid flicker or stuck-open state occurs."
        ]
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
      "source": null
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
        [
          "Create BP_Button",
          "Give it a mesh and implement your BPI_Interact interface.",
          "The button becomes compatible with the same interaction system as doors/pickups.",
          "Calling Interact on the button reaches its interface event."
        ],
        [
          "Create OnActivated",
          "Add a Custom Event or function named ActivateTarget.",
          "Naming the responsibility makes the graph easier to read.",
          "You can call ActivateTarget from the interaction event."
        ],
        [
          "Add Target Actor",
          "Create an Actor reference variable and make it Instance Editable.",
          "The level designer chooses what each button controls.",
          "The variable appears in Details on placed instances."
        ],
        [
          "Call the target",
          "Use an interface such as BPI_Activatable on Target Actor rather than casting to one exact class.",
          "The button should not care whether it controls a door, light or lift.",
          "Different target classes respond without changing the button."
        ],
        [
          "Add feedback",
          "Change material, rotate the lever, play a sound or briefly animate it.",
          "The player needs confirmation that the interaction happened.",
          "The control visibly/audibly responds every activation."
        ]
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
      "source": null
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
        [
          "Create CollectablesFound",
          "Add an Integer to the player or an appropriate persistent gameplay class, default 0.",
          "An Integer models a count better than multiple Booleans.",
          "The value starts at zero."
        ],
        [
          "Create BP_Collectable",
          "Add a mesh and overlap collision.",
          "One reusable pickup class can create many placed instances.",
          "Each instance overlaps the player."
        ],
        [
          "Increment the count",
          "On player overlap, Get CollectablesFound, add 1 and Set it back.",
          "Read → modify → write is the basic variable update pattern.",
          "Debug value becomes 1, 2, 3 as pickups are collected."
        ],
        [
          "Remove the pickup",
          "Play feedback then Destroy Actor.",
          "Prevents counting the same pickup repeatedly.",
          "Collected objects disappear."
        ],
        [
          "Prepare for UI",
          "Create a function/event that a HUD can use to refresh the displayed count.",
          "Keeping game state separate from visual display makes the system easier to expand.",
          "The HUD can read the count without owning it."
        ]
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
      "source": null
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
        [
          "Add a Spotlight",
          "Add a Spot Light component to the Character or camera rig and position it forward.",
          "A component is ideal for reusable functionality owned by the player.",
          "The spotlight follows the player view."
        ],
        [
          "Create IA_Flashlight",
          "Map a Digital action to F.",
          "Keeps input configuration separate.",
          "F fires the flashlight action."
        ],
        [
          "Create FlashlightOn",
          "Add a Boolean matching the initial light visibility.",
          "State makes toggle behaviour explicit.",
          "The variable matches whether the light starts on/off."
        ],
        [
          "Toggle state",
          "On input Started, set FlashlightOn to NOT FlashlightOn.",
          "Boolean inversion is the simplest toggle.",
          "Each press alternates True/False."
        ],
        [
          "Apply visibility",
          "Set Visibility on the Spotlight using FlashlightOn.",
          "The state now drives the actual component.",
          "F consistently toggles light on/off."
        ]
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
      "source": null
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
        [
          "Create IA_Fire",
          "Create a Digital Input Action and map left mouse / gamepad trigger.",
          "The fire action stays independent of the physical control.",
          "Fire event appears in the player/weapon Blueprint."
        ],
        [
          "Set weapon range",
          "Create WeaponRange Float, e.g. 10000.",
          "A named range gives you a designer-friendly tuning value.",
          "Changing it changes trace length."
        ],
        [
          "Calculate Start and End",
          "Start = Camera World Location. End = Start + Camera Forward Vector × WeaponRange.",
          "This is the standard hitscan trace formula.",
          "Draw Debug shows a line exactly through the crosshair direction."
        ],
        [
          "Trace by channel",
          "Run Line Trace By Channel on Visibility or a dedicated Weapon channel. Ignore Self.",
          "Ignoring the shooter prevents an immediate self-hit.",
          "The trace hits world geometry/targets in front of the player."
        ],
        [
          "Break Hit Result",
          "Use Blocking Hit / Hit Actor / Impact Point.",
          "The Hit Result is a packet of useful information about what and where you hit.",
          "Print Hit Actor name and verify it matches the target."
        ],
        [
          "Apply damage",
          "If there is a valid hit Actor, call Apply Damage with a Damage variable.",
          "Generic damage lets targets decide how they respond in Event AnyDamage.",
          "A damageable target receives the expected amount."
        ],
        [
          "Add impact feedback",
          "Spawn a Niagara effect or decal at Impact Point and optionally play a sound.",
          "Hitscan weapons feel broken without confirmation.",
          "Every valid hit produces visible/audio feedback."
        ]
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
      "source": null
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
        [
          "Create BP_Projectile",
          "Create an Actor with Sphere Collision, visible mesh and Projectile Movement component.",
          "The projectile is a reusable class with its own movement responsibility.",
          "Placed temporarily in a test map, it moves when launched."
        ],
        [
          "Configure movement",
          "Set Initial Speed and Max Speed; enable Rotation Follows Velocity if appropriate.",
          "Projectile Movement handles robust movement without manual Tick translation.",
          "Projectile travels at the intended speed."
        ],
        [
          "Create a muzzle transform",
          "Add a Scene Component or socket where shots originate.",
          "A named muzzle point is easier to adjust than hard-coded coordinates.",
          "The component sits just ahead of the weapon."
        ],
        [
          "Spawn on Fire",
          "From Fire input, Spawn Actor From Class using BP_Projectile and the muzzle world transform.",
          "Spawning creates the projectile only when needed.",
          "Each shot creates one projectile at the muzzle."
        ],
        [
          "Handle collision",
          "On projectile hit/overlap, apply damage to Other Actor then destroy the projectile.",
          "The projectile owns what happens when it reaches something.",
          "Target takes damage and projectile does not pass through forever."
        ]
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
      "source": null
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
        [
          "Create MaxHealth and Health",
          "Add Float variables; set MaxHealth 100 and Health 100.",
          "Separating maximum and current health supports UI and upgrades later.",
          "Both values start at 100."
        ],
        [
          "Listen for AnyDamage",
          "Add Event AnyDamage in the player Character.",
          "Unreal damage events give many hazards/weapons one common route into health.",
          "Apply Damage from another Actor fires this event."
        ],
        [
          "Subtract damage",
          "Set Health = Clamp(Health - Damage, 0, MaxHealth).",
          "Clamping prevents negative health or accidental overheal.",
          "Health decreases but never below 0."
        ],
        [
          "Check for death",
          "Branch on Health <= 0. True calls a Die custom event/function.",
          "Death is a game rule derived from state.",
          "Damage that reaches zero executes Die exactly as intended."
        ],
        [
          "Add debug/UI hook",
          "Print Health while testing, then call an Update HUD event or dispatcher.",
          "Prove the model first; make it pretty second.",
          "Health changes are visible during play."
        ]
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
      "source": null
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
        [
          "Add Health variables",
          "Create MaxHealth/Health on the enemy Blueprint.",
          "Each enemy instance owns its own current combat state.",
          "Two placed enemies can have independent Health."
        ],
        [
          "Use Event AnyDamage",
          "Subtract incoming Damage from Health.",
          "Generic damage means the enemy works with line trace, projectile or hazards.",
          "Both weapon types can damage the same enemy."
        ],
        [
          "Check zero",
          "Branch on Health <= 0 and call Die.",
          "Keeps damage and death responsibilities readable.",
          "Enemy does not die before its health is exhausted."
        ],
        [
          "Build Die",
          "Disable collision/AI, play animation/FX if available, then Destroy Actor after a short delay.",
          "A single named death routine prevents duplicate death logic.",
          "Enemy cannot continue attacking after death."
        ]
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
      "source": null
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
        [
          "Create BP_HealthPickup",
          "Add mesh + overlap collision and a HealAmount Float.",
          "A configurable pickup class can support small and large health items.",
          "HealAmount appears in Defaults."
        ],
        [
          "Detect player overlap",
          "Use Begin Overlap and confirm Other Actor is your player.",
          "Only valid collectors should receive the effect.",
          "Walking into the pickup detects the player."
        ],
        [
          "Calculate new Health",
          "NewHealth = Clamp(Health + HealAmount, 0, MaxHealth).",
          "Clamping enforces the maximum health rule.",
          "95 Health + 25 becomes 100, not 120."
        ],
        [
          "Set and feedback",
          "Set Health, play sound/FX, then destroy the pickup.",
          "State change and feedback happen before cleanup.",
          "Health rises once and the pickup disappears."
        ]
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
      "source": null
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
        [
          "Create ammo variables",
          "Add MagazineSize 12, AmmoInMag 12 and ReserveAmmo 48 Integers.",
          "Separate magazine and reserve gives the reload rule something meaningful to manage.",
          "Values show sensible starting state."
        ],
        [
          "Gate firing",
          "Before Fire logic, Branch on AmmoInMag > 0.",
          "The weapon rule should decide whether a shot is allowed before spawning/tracing.",
          "At zero, no shot is fired."
        ],
        [
          "Spend one round",
          "After a successful fire action, decrement AmmoInMag by 1.",
          "Every shot must update the same source of truth.",
          "12 shots reduce magazine to zero."
        ],
        [
          "Create IA_Reload",
          "Map R and call a Reload function.",
          "A function keeps the arithmetic out of the input graph.",
          "R calls Reload once."
        ],
        [
          "Calculate rounds needed",
          "Needed = MagazineSize - AmmoInMag. ToLoad = Min(Needed, ReserveAmmo).",
          "Min handles the case where reserve has fewer rounds than the magazine needs.",
          "Reloading with only 3 reserve rounds loads exactly 3."
        ],
        [
          "Transfer ammo",
          "AmmoInMag += ToLoad; ReserveAmmo -= ToLoad.",
          "Ammo moves between stores rather than appearing from nowhere.",
          "Total ammo before and after reload is unchanged."
        ]
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
      "source": null
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
        [
          "Create attack input",
          "Map IA_Attack and call a PerformAttack event/function.",
          "Keeps input separate from attack implementation.",
          "Attack function fires once per press."
        ],
        [
          "Choose trace points",
          "Start near the Character/chest or weapon; End a short distance forward.",
          "Melee needs a local reach rather than gun range.",
          "Debug trace appears in front of the player."
        ],
        [
          "Sphere Trace By Channel",
          "Use a radius that roughly matches the weapon swing volume and Ignore Self.",
          "A sphere is more forgiving than a razor-thin line for close combat.",
          "Targets within the swing volume are detected."
        ],
        [
          "Apply damage to hit Actor",
          "On valid hit, Apply Damage once.",
          "Use the same generic damage pipeline as other weapons.",
          "Enemy health drops by melee damage."
        ],
        [
          "Prevent spam/multi-hit",
          "Use CanAttack or an animation window so one swing cannot apply damage every frame.",
          "Attack cadence is part of the game rule.",
          "Holding/mashing cannot create accidental dozens of hits."
        ]
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
      "source": null
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
        [
          "Choose where Lives belongs",
          "Choose by lifetime. If death reloads/opens the level, put Lives in GameInstance so the count survives that reload. If you respawn a Pawn without reloading, a session rule object such as GameMode/PlayerController can own it. Never make the widget the owner.",
          "Variable ownership depends on lifetime.",
          "The chosen class survives for exactly as long as your lives rule needs."
        ],
        [
          "Create Lives",
          "Add an Integer Lives with a starting value such as 3.",
          "Whole lives are naturally represented by an Integer.",
          "The run begins with 3."
        ],
        [
          "Call LoseLife on death",
          "When the player dies, decrement Lives once before respawning.",
          "Centralising this prevents multiple hazards from applying multiple life losses.",
          "One death changes 3 → 2, not 3 → 0."
        ],
        [
          "Branch on Lives > 0",
          "If True, respawn/restart at checkpoint. If False, show Game Over.",
          "The Branch expresses the core game rule clearly.",
          "Last life leads to game-over path instead of respawn."
        ],
        [
          "Respawn",
          "For a restart-level prototype, reload the level while keeping Lives in GameInstance. For checkpoint respawn, move/spawn the player at RespawnTransform and reset Health without reloading the whole map.",
          "Choose the level of persistence your game needs.",
          "Player returns in a playable state."
        ],
        [
          "Update the HUD",
          "Tell UI to refresh the displayed lives.",
          "Visual display should reflect the rule state, not own it.",
          "HUD value matches the actual Lives variable."
        ]
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
      "source": null
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
        [
          "Create RespawnTransform",
          "Store a Transform in an appropriate rule/state class or on the player if respawning the same instance.",
          "A Transform carries location, rotation and scale in one value.",
          "A default starting respawn transform is valid."
        ],
        [
          "Create BP_Checkpoint",
          "Use a mesh/marker plus overlap collision.",
          "Placed checkpoints are reusable level objects.",
          "Player overlap fires."
        ],
        [
          "Store checkpoint transform",
          "On valid overlap, save a dedicated RespawnPoint Scene Component world transform or the checkpoint Actor transform.",
          "A separate point lets art and spawn location differ.",
          "Stored transform changes when a new checkpoint is reached."
        ],
        [
          "Give activation feedback",
          "Change light/material and play a sound.",
          "Players need to know the game saved a new respawn point.",
          "Checkpoint visibly becomes active."
        ],
        [
          "Use it on death",
          "When respawning, set/spawn the player at RespawnTransform and restore Health.",
          "The death system reads the latest checkpoint state.",
          "Death returns you to the most recent checkpoint."
        ]
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
      "source": null
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
        [
          "Choose score owner",
          "Put Score in GameState/GameMode for a level/session rule or another suitable persistent class.",
          "The score should outlive pickups/enemies that award it.",
          "Destroying an enemy does not destroy the Score variable."
        ],
        [
          "Create AddScore function",
          "Input Points (Integer), then Score = Score + Points.",
          "One function gives every scoring event the same route.",
          "Calling AddScore(100) increases score by exactly 100."
        ],
        [
          "Award points",
          "On enemy death, collectable pickup or objective completion, call AddScore.",
          "Scoring is triggered by meaningful game events.",
          "Different events can award different values."
        ],
        [
          "Refresh UI",
          "Notify the HUD or let it read Score when needed.",
          "The UI displays state but does not become the authoritative score owner.",
          "Displayed score matches game state."
        ]
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
      "source": null
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
        [
          "Create TimeRemaining",
          "Use an Integer such as 60.",
          "A whole-second display does not need frame-by-frame Float precision.",
          "Time starts at the expected value."
        ],
        [
          "Create TickCountdown event",
          "Subtract 1 from TimeRemaining and update UI.",
          "A named event makes the repeating unit of work clear.",
          "Calling it manually reduces time by one."
        ],
        [
          "Start a repeating Timer",
          "On BeginPlay or game start, Set Timer by Event: 1.0 second, Looping True.",
          "Timers run work at the frequency you actually need instead of every frame.",
          "Time decreases roughly once each second."
        ],
        [
          "Check for zero",
          "After subtraction, Branch on TimeRemaining <= 0.",
          "The countdown needs a clear terminal rule.",
          "At zero, it stops instead of becoming negative."
        ],
        [
          "Clear timer and finish",
          "Clear the timer and trigger TimeUp / lose-state logic.",
          "Stopping the timer prevents repeated terminal events.",
          "Time stays at zero and TimeUp runs once."
        ]
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
      "source": null
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
        [
          "Define the win rule",
          "Example: CollectablesFound >= TotalCollectables or EnemiesRemaining == 0.",
          "A game result should be a readable condition derived from state.",
          "You can print whether the win condition is True/False."
        ],
        [
          "Define the lose rule",
          "Example: Lives <= 0 or TimeRemaining <= 0.",
          "Win and lose should be explicit rules, not scattered side effects.",
          "The lose condition reliably becomes True."
        ],
        [
          "Create FinishGame function",
          "Input bWon or an enum Result; stop gameplay and choose the correct UI.",
          "Centralising the finish routine prevents two end screens competing.",
          "Calling FinishGame produces one result."
        ],
        [
          "Disable continuing input",
          "Pause, disable movement/fire, or switch input mode depending on your design.",
          "A finished game should not keep accepting normal gameplay actions.",
          "Player cannot continue affecting the level after result."
        ],
        [
          "Show result UI",
          "Create/add Win or Lose widget and expose restart/menu buttons.",
          "The state needs clear player feedback and next action.",
          "Correct screen appears for each condition."
        ]
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
      "source": null
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
        [
          "Choose the spawned class",
          "Create or choose an Actor Blueprint such as BP_Pickup.",
          "Runtime spawning needs a class definition to instantiate.",
          "The class can also be placed manually for testing."
        ],
        [
          "Create a spawn point",
          "Add a Target Point/Scene Component and get its Transform.",
          "Separating spawn location from logic makes placement easy.",
          "Moving the point changes where things appear."
        ],
        [
          "Spawn Actor From Class",
          "Pass class + spawn transform; choose a sensible collision handling method.",
          "The node creates a new instance while the game is running.",
          "A new Actor appears at the point."
        ],
        [
          "Store the return value if needed",
          "Promote Return Value to a reference when you need to control that exact spawned instance later.",
          "A reference identifies which instance you created.",
          "You can change/destroy the spawned Actor through the reference."
        ],
        [
          "Destroy safely",
          "Call Destroy Actor on the intended instance, optionally after a timer/lifespan.",
          "Runtime Actors should clean up when their job is done.",
          "Only the intended instance disappears."
        ]
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
      "source": null
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
        [
          "Create WBP_HUD",
          "Create a Widget Blueprint and add a Text element labelled HUD TEST.",
          "Start with an obvious proof that the widget is actually being displayed.",
          "Designer preview shows the text."
        ],
        [
          "Create the widget at runtime",
          "From PlayerController/Character BeginPlay, Create Widget using WBP_HUD.",
          "A Widget asset does nothing until an instance is created.",
          "Create Widget returns a valid widget reference."
        ],
        [
          "Add to Viewport",
          "Call Add to Viewport on the returned widget.",
          "This tells Unreal to render the widget for the player.",
          "HUD TEST appears during Play."
        ],
        [
          "Store HUD reference",
          "Promote the Create Widget return value to HUDRef.",
          "Gameplay can update the exact widget instance instead of repeatedly searching/creating.",
          "HUDRef is valid after creation."
        ],
        [
          "Replace test text",
          "Build the real HUD layout and expose update functions/events.",
          "Prove setup first; then add content.",
          "The final HUD appears once, not duplicated."
        ]
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
      "source": null
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
        [
          "Add Progress Bar",
          "Place a Progress Bar in WBP_HUD and name it PB_Health.",
          "A Progress Bar expects a normalised Percent between 0 and 1.",
          "PB_Health is accessible in the Graph."
        ],
        [
          "Calculate percent",
          "HealthPercent = Health / MaxHealth.",
          "Dividing current by maximum converts 75/100 into 0.75.",
          "Test values produce expected fractions."
        ],
        [
          "Create UpdateHealth function",
          "Give WBP_HUD inputs CurrentHealth and MaxHealth; Set Percent using the division.",
          "An explicit update function avoids hidden binding work every frame.",
          "Calling UpdateHealth(50,100) shows half full."
        ],
        [
          "Call when health changes",
          "After damage/heal changes Health, call HUDRef.UpdateHealth.",
          "UI updates only when the value changes.",
          "Damage visibly reduces the bar immediately."
        ],
        [
          "Handle zero/max safely",
          "Ensure MaxHealth is greater than zero and clamp percent 0–1.",
          "Defensive maths avoids invalid UI states.",
          "Bar never overfills or breaks."
        ]
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
      "source": null
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
        [
          "Add text widgets",
          "Create TXT_Score and TXT_Lives in WBP_HUD.",
          "Named widgets are easier to update and debug.",
          "Both appear in the HUD Designer."
        ],
        [
          "Create UpdateScore",
          "Input Score Integer, convert to Text and SetText on TXT_Score.",
          "The function turns model data into presentation.",
          "UpdateScore(250) displays 250."
        ],
        [
          "Create UpdateLives",
          "Input Lives Integer and set TXT_Lives.",
          "Same event-driven pattern as score.",
          "UpdateLives(3) displays 3."
        ],
        [
          "Call from game rules",
          "When AddScore or LoseLife changes state, call the matching HUD function.",
          "Game rules remain the source of truth.",
          "Displayed values always match the real variables."
        ],
        [
          "Initialise after HUD creation",
          "Immediately send current Score/Lives after the widget is created.",
          "Otherwise the UI may show designer placeholder values until the first change.",
          "Correct starting values appear from frame one."
        ]
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
      "source": null
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
        [
          "Add an Image/Text",
          "In WBP_HUD add an Image with a crosshair texture or use a simple + text while prototyping.",
          "A placeholder is enough to prove placement before making art.",
          "Crosshair is visible in Designer."
        ],
        [
          "Anchor to centre",
          "Set Anchor to centre of the Canvas.",
          "Anchors make layout relative to screen size.",
          "The anchor icon sits at screen centre."
        ],
        [
          "Set alignment 0.5 / 0.5",
          "Set Alignment X/Y to 0.5 so the widget centres on its own pivot.",
          "Without alignment, the top-left corner sits at centre instead.",
          "Crosshair centre aligns exactly with viewport centre."
        ],
        [
          "Test resolutions",
          "Use Play/Standalone and resize the window.",
          "UI that only works at one resolution is not finished.",
          "Crosshair remains centred."
        ]
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
      "source": null
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
        [
          "Create the prompt",
          "Add a small interaction panel/text to HUD and start it Hidden/Collapsed.",
          "The HUD owns presentation, not detection.",
          "Prompt is absent at game start."
        ],
        [
          "Use your interaction trace",
          "Reuse the Look at an Object to Interact trace.",
          "Target detection should have one source of truth.",
          "Trace reliably identifies target Actor."
        ],
        [
          "Check interface support",
          "Use Does Implement Interface on Hit Actor for BPI_Interact.",
          "This checks capability without casting to every interactable type.",
          "Doors/buttons/pickups return True; normal walls return False."
        ],
        [
          "Show/hide prompt",
          "When valid target exists, call HUD ShowInteractPrompt; otherwise HideInteractPrompt.",
          "UI follows current targeting state.",
          "Looking away immediately hides the prompt."
        ],
        [
          "Optional custom text",
          "Add GetInteractionText to the interface so objects can return “Open Door”, “Pick Up Key”, etc.",
          "The interactable knows what action it represents.",
          "Different objects display different prompts."
        ]
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
      "source": null
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
        [
          "Create CurrentObjective",
          "Store the objective text/name in a gameplay rule/state class, not only in the widget.",
          "The objective is game state; the HUD is merely its display.",
          "CurrentObjective exists even if HUD is recreated."
        ],
        [
          "Add objective Text",
          "Add TXT_Objective to WBP_HUD in a readable location.",
          "A dedicated element keeps presentation consistent.",
          "Designer shows placeholder objective."
        ],
        [
          "Create SetObjectiveText",
          "Input Text and SetText on TXT_Objective.",
          "One UI function gives gameplay a clean update point.",
          "Manual call changes displayed objective."
        ],
        [
          "Update on game events",
          "When key collected/door opened/checkpoint reached, change CurrentObjective and call HUD update.",
          "Objectives should react to meaningful progress events, not Poll every frame.",
          "Objective changes at the expected moments."
        ],
        [
          "Initialise at start",
          "Send CurrentObjective after HUD creation.",
          "Prevents stale placeholder content.",
          "Correct first objective is visible immediately."
        ]
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
      "source": null
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
        [
          "Create WBP_Pause",
          "Add Resume and Quit/Restart buttons.",
          "Keep pause UI separate from gameplay HUD.",
          "Buttons exist in Designer."
        ],
        [
          "Create IA_Pause",
          "Map Escape/Start and ensure the action can still be processed while paused if required by your setup.",
          "Pause needs an input route both into and out of the state.",
          "Escape fires before pausing."
        ],
        [
          "Create/show widget",
          "On pause, create once or show WBP_Pause.",
          "The player needs visible confirmation and controls.",
          "Menu appears."
        ],
        [
          "Pause + input mode",
          "Set Game Paused True, show mouse cursor, Set Input Mode UI Only/Game and UI.",
          "Pausing simulation alone does not automatically make UI usable.",
          "Character stops and mouse can use buttons."
        ],
        [
          "Resume",
          "Hide/remove menu, Set Game Paused False, hide cursor, restore Input Mode Game Only.",
          "You must reverse every state change you made.",
          "Gameplay resumes with normal controls."
        ]
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
      "source": null
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
        [
          "Create BP_Door",
          "Use separate frame/root and Door mesh components so only the moving piece rotates.",
          "Component hierarchy makes pivots/responsibility clearer.",
          "Rotating Door mesh does not rotate frame."
        ],
        [
          "Create OpenDoor Timeline",
          "Add a Float track from 0 at time 0 to 1 at about 1 second.",
          "A normalised 0–1 alpha is reusable with Lerp.",
          "Timeline preview moves smoothly from 0 to 1."
        ],
        [
          "Store closed/open rotations",
          "Create ClosedRotation and OpenRotation, e.g. yaw +90 from closed.",
          "Named endpoints keep motion configurable.",
          "Open rotation represents desired final orientation."
        ],
        [
          "Lerp on Update",
          "On Timeline Update, Lerp (Rotator) Closed → Open using track value, then Set Relative Rotation on Door.",
          "Lerp converts 0–1 progress into an actual rotation.",
          "Door moves smoothly while Timeline plays."
        ],
        [
          "Play/Reverse",
          "Interact/Open calls Play; Close calls Reverse.",
          "One timeline can animate in both directions.",
          "Door opens and closes smoothly without duplicate logic."
        ]
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
      "source": null
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
        [
          "Create BP_MovingPlatform",
          "Add a mesh as the moving root/component.",
          "A reusable Actor lets designers place multiple platforms.",
          "Platform can be placed normally."
        ],
        [
          "Define Start/End",
          "Store StartLocation on BeginPlay and expose MoveOffset Vector or an endpoint Scene Component.",
          "Relative designer controls are easier than hard-coded world coordinates.",
          "Different instances can move different distances/directions."
        ],
        [
          "Create Timeline 0→1",
          "Float alpha over MoveTime.",
          "Normalised progress works naturally with Lerp.",
          "Timeline outputs 0 then 1."
        ],
        [
          "Lerp locations",
          "Lerp Vector StartLocation → EndLocation and Set Actor Location on Update.",
          "Lerp generates every position between endpoints.",
          "Platform moves smoothly."
        ],
        [
          "Loop/ping-pong",
          "Track direction with a Boolean. On Finished: if moving forward, set the Boolean False and Reverse; if moving backward, set it True and Play. A looping curve is another option for a continuously oscillating platform.",
          "Creates predictable back-and-forth motion.",
          "Platform continuously travels between endpoints."
        ]
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
      "source": null
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
        [
          "Create BP_DamageZone",
          "Add Box Collision and make it visible only for editor/debug if desired.",
          "A reusable hazard volume can be resized per level instance.",
          "Box is easy to place/scale."
        ],
        [
          "Set overlap collision",
          "Overlap Pawn and Generate Overlap Events.",
          "Hazards usually detect rather than physically block.",
          "Player entry fires Begin Overlap."
        ],
        [
          "Choose damage rule",
          "Expose DamageAmount; large value can behave as instant death or normal value can hurt.",
          "One class can support lava, spikes and kill volumes.",
          "Value appears in instance Details."
        ],
        [
          "Apply Damage",
          "On valid player overlap, Apply Damage to Other Actor.",
          "The hazard uses the same generic player health pipeline as weapons.",
          "Health drops / death triggers."
        ],
        [
          "Optional repeated damage",
          "For lingering hazards, start a repeating timer while inside and clear it on End Overlap.",
          "Timers make damage-over-time intentional and controllable.",
          "Damage stops when player leaves."
        ]
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
      "source": null
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
        [
          "Create SpawnClasses array",
          "Make an Array of Actor Class references and add your pickup/enemy classes.",
          "Data drives which classes are allowed without branching for each one.",
          "Array contains at least two valid classes."
        ],
        [
          "Create spawn points",
          "Use Target Point Actors or child Scene Components and store references in an array.",
          "Designer-controlled points prevent random spawns inside walls.",
          "Points are visible/positionable in editor."
        ],
        [
          "Pick random class",
          "Random Integer in Range 0 → Length-1, then Get from SpawnClasses.",
          "Array length determines safe index range.",
          "Different tests return different classes."
        ],
        [
          "Pick random point",
          "Use the same pattern on spawn point array.",
          "Separates what to spawn from where to spawn.",
          "Random valid transform is produced."
        ],
        [
          "Spawn",
          "Spawn Actor From Class using chosen class + point transform.",
          "Data selections become a runtime instance.",
          "A valid Actor appears at one of the points."
        ],
        [
          "Add limits",
          "Track ActiveCount or use a timer interval so the system cannot flood the level.",
          "Spawner rules matter for performance/game balance.",
          "Active Actors remain within your chosen cap."
        ]
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
      "source": null
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
        [
          "Confirm NavMesh",
          "Place Nav Mesh Bounds Volume around walkable space and press P to visualise navigation.",
          "AI movement needs navigable space.",
          "Walkable floor shows navigation overlay."
        ],
        [
          "Use an AI Character",
          "Create/choose Character with an AIController assigned.",
          "Character + controller split body from decision-making.",
          "Enemy is possessed by AI during Play."
        ],
        [
          "Place patrol points",
          "Add Target Points or a patrol-point Actor array.",
          "Explicit patrol points give level designers control.",
          "At least two reachable points exist."
        ],
        [
          "Move to current point",
          "Use AI Move To or a Behaviour Tree Move To task targeting a point.",
          "Navigation finds a path instead of moving directly through walls.",
          "Enemy walks to the selected point."
        ],
        [
          "Advance point",
          "On success, choose next point (index +1 wrapping to 0) and move again.",
          "A tiny state machine turns one move into a patrol loop.",
          "Enemy cycles through all points."
        ],
        [
          "Watch failures",
          "Test blocked/unreachable points and use debug output.",
          "AI needs explicit handling of navigation failure.",
          "Bad point fails visibly rather than silently freezing."
        ]
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
      "source": null
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
        [
          "Get a player target",
          "For a quick prototype, obtain player Pawn; for better AI, set it when perception detects the player.",
          "AI needs a clear target reference rather than guessing every frame.",
          "Target reference becomes valid."
        ],
        [
          "Store target",
          "Put TargetActor in Blackboard or an AIController variable.",
          "Decision data lives where the AI logic can access it.",
          "Debugger shows TargetActor set."
        ],
        [
          "Move To target",
          "Run Move To / AI Move To using TargetActor.",
          "Navigation continually plans movement toward the target Actor.",
          "Enemy follows around obstacles."
        ],
        [
          "Choose chase condition",
          "Use distance/perception Boolean to decide when TargetActor is set/cleared.",
          "A chase needs a start and stop rule.",
          "Enemy stops chasing after the condition is lost."
        ],
        [
          "Return to patrol",
          "When target clears, resume patrol logic.",
          "AI states should transition rather than ending in a dead graph.",
          "Enemy returns to normal behaviour after losing player."
        ]
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
      "source": null
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
        [
          "Add AI Perception",
          "On your AIController add an AI Perception component.",
          "Perception belongs with the controller making decisions.",
          "Component is present on controller."
        ],
        [
          "Configure Sight",
          "Add AI Sight config; set Sight Radius, Lose Sight Radius and Peripheral Vision.",
          "These parameters describe what the AI can sense.",
          "Debug visualisation reflects the configured sense."
        ],
        [
          "Handle Target Perception Updated",
          "Use the event and inspect Actor + Stimulus Successfully Sensed.",
          "The event tells you when perception state changes rather than polling.",
          "Seeing player gives Successfully Sensed True."
        ],
        [
          "Set/clear Blackboard Target",
          "If sensed, set TargetActor; if lost, clear it or store last known location.",
          "Perception data feeds Behaviour Tree decisions.",
          "Blackboard target changes live in debugger."
        ],
        [
          "Test line of sight",
          "Hide behind walls, approach from outside FOV, then enter view.",
          "Perception must react to occlusion and configuration, not just distance.",
          "AI only detects under the conditions you designed."
        ]
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
      "source": null
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
        [
          "Create AttackRange",
          "Add a Float such as 150–250 depending on character scale.",
          "Named range makes the design tunable.",
          "Range is visible in defaults."
        ],
        [
          "Measure distance",
          "Use Distance between enemy and TargetActor or a Behaviour Tree decorator/service.",
          "Attack decision depends on spatial state.",
          "Debug value decreases as enemy approaches."
        ],
        [
          "Choose movement vs attack",
          "If distance > AttackRange chase; otherwise stop/attack.",
          "Two mutually clear states prevent jittery simultaneous move/attack.",
          "Enemy stops at the intended distance."
        ],
        [
          "Apply attack damage",
          "During attack event/notify, Apply Damage to target.",
          "Damage should happen at an intentional attack moment.",
          "Player loses expected health."
        ],
        [
          "Add cooldown",
          "Use a timer/Cooldown decorator so the attack cannot happen every frame.",
          "Attack rate is a game rule.",
          "Enemy waits between attacks."
        ]
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
      "source": null
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
        [
          "Create BP_SaveGame",
          "Create a SaveGame Blueprint with RespawnTransform and any other persistent values.",
          "SaveGame is a serialisable data container, not a gameplay Actor.",
          "Variables exist on the SaveGame class."
        ],
        [
          "Choose slot name",
          "Use a consistent SlotName such as PlayerSave and UserIndex 0.",
          "Loading must ask for the same slot you saved.",
          "Slot values are centralised rather than repeated strings everywhere."
        ],
        [
          "Save at checkpoint",
          "Create SaveGame Object, cast/use your class, set RespawnTransform, then Save Game to Slot.",
          "You copy current runtime state into the serialisable object before writing.",
          "Save node returns success during test."
        ],
        [
          "Load at startup",
          "Does Save Game Exist → Load Game From Slot → read RespawnTransform.",
          "Existence check handles first-ever run safely.",
          "First run uses default start; later run finds save."
        ],
        [
          "Apply loaded transform",
          "After player spawn/initialisation, place the player at loaded checkpoint.",
          "Loaded data only matters once reapplied to runtime state.",
          "Quit/relaunch returns player to saved checkpoint."
        ]
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
      "source": null
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
        [
          "Create a Struct",
          "Make ST_ItemData with fields such as DisplayName, Value, Icon/Colour and Description.",
          "A Struct groups related values into one meaningful record.",
          "Struct fields describe one content item."
        ],
        [
          "Create a Data Table",
          "Create Data Table using ST_ItemData as Row Structure.",
          "A Data Table stores many records with the same shape.",
          "Table columns match the Struct."
        ],
        [
          "Add rows",
          "Create rows KeyRed, KeyBlue, HealthSmall etc and fill their data.",
          "Rows let designers add content without duplicating gameplay graphs.",
          "Each row has different values."
        ],
        [
          "Choose RowName in Blueprint",
          "Expose an ItemRowName Name variable on your pickup Actor.",
          "Each placed instance can select which data record it represents.",
          "Different instances choose different rows."
        ],
        [
          "Get Data Table Row",
          "On BeginPlay/interaction, Get Data Table Row using ItemRowName and Break ST_ItemData.",
          "Gameplay reads configured content at runtime.",
          "The Actor displays/uses values from the chosen row."
        ],
        [
          "Handle Row Not Found",
          "Use the failure output to print a useful warning during development.",
          "Bad data should fail visibly, not silently.",
          "Invalid row produces a clear debug message."
        ]
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
      "source": null
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
        [
          "Create BP_GameInstance",
          "Create a Blueprint class based on GameInstance.",
          "GameInstance exists for the lifetime of the running game across map loads.",
          "Asset is based on GameInstance."
        ],
        [
          "Set it in Project Settings",
          "Project Settings → Maps & Modes → Game Instance Class = BP_GameInstance.",
          "Creating the class alone does not make the project use it.",
          "Project points to your class."
        ],
        [
          "Add persistent runtime variable",
          "Add e.g. TotalScore or SelectedCharacter.",
          "These values need to survive map transition, not necessarily application restart.",
          "Value exists on GameInstance."
        ],
        [
          "Get GameInstance when needed",
          "Get Game Instance → Cast to BP_GameInstance (or use a cleaner abstraction later) and read/write the value.",
          "Other gameplay classes access the session-level owner.",
          "Value can be changed before map load."
        ],
        [
          "Open another level and verify",
          "Change map, then read the value again.",
          "Tests the actual lifetime you chose.",
          "Value remains after level load."
        ]
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
      "source": null
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
        [
          "Import/choose a sound",
          "Use a suitable Sound Wave/Sound Cue/MetaSound asset.",
          "Feedback starts with an asset that represents the action clearly.",
          "Sound previews correctly in Content Browser."
        ],
        [
          "Choose 2D or world sound",
          "Use Play Sound 2D for UI/non-positional feedback; Play Sound at Location for world events.",
          "Spatial behaviour should match what the sound represents.",
          "World sound changes with distance/position if configured."
        ],
        [
          "Trigger from the event",
          "Call sound exactly when pickup/door/fire/interaction succeeds.",
          "Audio should confirm the real gameplay event, not button press if the action failed.",
          "Locked door and opened door can produce different feedback."
        ],
        [
          "Avoid spam",
          "Gate/cooldown repeated actions if the sound becomes a rapid machine-gun of clicks.",
          "Audio repetition can reveal logic problems and annoy players.",
          "Repeated interactions sound intentional."
        ]
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
      "source": null
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
        [
          "Choose Niagara system",
          "Use/create a small impact burst.",
          "The tutorial is about placement/triggering; start with an existing system if needed.",
          "Niagara asset previews."
        ],
        [
          "Use Hit Result",
          "From your weapon trace, Break Hit Result and read Impact Point + Impact Normal.",
          "The trace already knows where the surface was hit and which way it faces.",
          "Debug values update per hit."
        ],
        [
          "Spawn at Impact Point",
          "Spawn System at Location using the impact position.",
          "VFX appears where gameplay actually hit.",
          "Burst appears on the target surface."
        ],
        [
          "Orient to normal",
          "Convert Impact Normal to a rotation if the effect needs to face away from the surface.",
          "Orientation prevents sparks/decals pointing through walls.",
          "Effects face consistently on floors and walls."
        ],
        [
          "Only on valid hit",
          "Run this only from Blocking Hit True.",
          "No-hit shots should not spawn effects at zero/default coordinates.",
          "Misses produce no world impact VFX."
        ]
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
      "source": null
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
        [
          "Create camera shake asset",
          "Create a Camera Shake Base asset/class and configure a small pattern appropriate to your UE setup.",
          "A reusable asset separates shake design from gameplay code.",
          "Shake can be previewed/tuned."
        ],
        [
          "Trigger at the event",
          "From gun fire/dash/explosion event, start the camera shake through the player camera manager/controller.",
          "Feedback happens at the moment the player causes/receives the action.",
          "Action causes visible camera response."
        ],
        [
          "Tune intensity",
          "Keep normal actions subtle and reserve stronger shake for heavy events.",
          "Too much camera movement harms readability and comfort.",
          "The effect is noticeable without making aiming impossible."
        ],
        [
          "Respect player comfort",
          "Consider a settings multiplier or ability to disable strong shake.",
          "Accessibility/comfort is part of professional polish.",
          "Shake can be reduced/disabled if you add the setting."
        ]
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
      "source": null
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
        [
          "Study the reference",
          "Look at the Silent Hill 2 reference images: nearby shapes remain readable, distant streets dissolve quickly, contrast is muted and the fog sits heavily around ground/architecture.",
          "A visual target prevents random slider-moving. You are analysing principles, not trying to copy exact assets.",
          "Write down three qualities you want: e.g. short visibility, cool-grey fog, readable silhouettes."
        ],
        [
          "Add Exponential Height Fog",
          "Place Actors → Visual Effects → Exponential Height Fog. Start with modest Fog Density and adjust Fog Height Falloff rather than immediately maxing density.",
          "Exponential Height Fog naturally gives denser low areas and smoother distance falloff.",
          "The scene loses distant clarity while nearby geometry remains readable."
        ],
        [
          "Enable Volumetric Fog",
          "In the fog Actor Details, enable Volumetric Fog. Start around default scattering and tune View Distance/Extinction carefully.",
          "Volumetric Fog lets lights interact with the fog and produces depth/light shafts.",
          "Moving around shows lighting volume in the fog rather than a flat screen overlay."
        ],
        [
          "Control visibility intentionally",
          "Adjust Fog Density and the relevant Start Distance / View Distance controls until the player sees enough to navigate but not enough to feel safe. In Volumetric Fog, also use Extinction Scale carefully to control how strongly the medium blocks light.",
          "Horror fog is level-design control: it hides future information while preserving immediate playability.",
          "You can identify nearby routes/doors but distant end-points disappear."
        ],
        [
          "Tune colour and lighting",
          "Use restrained cool/neutral fog colour, lower overly bright skylight/exposure and place motivated local lights to punch through selected areas.",
          "Fog inherits atmosphere from lighting; bright clean lighting can destroy the horror look.",
          "Lights create readable islands/silhouettes rather than washing the whole level evenly."
        ],
        [
          "Add Post Process mood",
          "Use a Post Process Volume (often Infinite Extent) for subtle exposure/contrast/saturation/colour grading. Avoid crushing blacks so badly the player cannot navigate.",
          "Post-process should support the fog, not compensate for broken lighting.",
          "The scene feels cohesive while gameplay objects remain legible."
        ],
        [
          "Optional local fog/dust",
          "Use Local Fog Volumes for spherical patches and/or a sparse Niagara dust/ash system close to camera. Local Fog Volumes are useful when you want local variation without making the entire world use denser volumetrics.",
          "Variation stops the atmosphere feeling like one uniform global slider.",
          "Some areas feel thicker/livelier without covering every room equally."
        ],
        [
          "Performance test",
          "Check scalability/performance on a typical student PC. Reduce volumetric view distance/complexity if necessary.",
          "Volumetric fog is more expensive than simple height/local fog.",
          "The scene remains playable at your target quality setting."
        ]
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
        }
      ],
      "source": {
        "title": "Silent Hill 2 official reference imagery © Konami Digital Entertainment",
        "url": "https://www.konami.com/games/eu/en/products/silenthill2r/"
      }
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
