window.UE5_BUILDING_BLOCK_DATA = {
  "version": "3.33.0",
  "buildDate": "27 Aug 2026",
  "tiers": {
    "core": {
      "title": "CORE",
      "description": "Learn these first. Tutorials will assume them more often."
    },
    "common": {
      "title": "COMMON",
      "description": "Learn when a tutorial introduces one. You do not need them all up front."
    },
    "later": {
      "title": "LATER",
      "description": "Useful for larger systems. Ignore until your project needs them."
    }
  },
  "tracks": [
    {
      "id": "unreal-basics",
      "title": "Start Here — Unreal Basics",
      "icon": "◫",
      "description": "The editor, assets and object types Unreal tutorials assume you recognise."
    },
    {
      "id": "blueprint-basics",
      "title": "Blueprint Basics",
      "icon": "◇",
      "description": "The language of Blueprint: events, data, input, references and debugging."
    },
    {
      "id": "communication-data",
      "title": "Communication & Data",
      "icon": "↔",
      "description": "Clean ways for Blueprints to talk and for game data to stay organised."
    },
    {
      "id": "characters-animation",
      "title": "Characters & Animation",
      "icon": "♟",
      "description": "Characters, skeletal assets and the animation systems that drive them."
    },
    {
      "id": "world-ai",
      "title": "World, UI, FX & AI",
      "icon": "◉",
      "description": "Collision, traces, UI, cameras, audio, VFX, navigation and simple AI building blocks."
    }
  ],
  "blocks": [
    {
      "id": "assets-prefixes",
      "track": "unreal-basics",
      "title": "Assets & Naming Prefixes",
      "short": "Recognise what a file is before opening it.",
      "tier": "core",
      "minutes": 4,
      "prefix": "BP_ • BPI_ • WBP_ • ABP_ • IA_ • IMC_ • SM_ • SK_ • M_ • MI_",
      "remember": "The prefix is a label for humans, not magic Unreal requires.",
      "useWhen": "Whenever a tutorial tells you to create or open an asset.",
      "steps": [
        "Content Drawer → right-click empty space → New Folder. Name it Learning_BlockTest.",
        "Open Learning_BlockTest → right-click → Blueprint Class → Actor. Name it BP_BlockTest.",
        "In the same folder → right-click → Input → Input Action. Name it IA_BlockTest and leave Value Type = Digital (Bool).",
        "Compare the two asset icons and prefixes. Delete Learning_BlockTest when you are finished."
      ],
      "check": "You can look at BP_Door, IA_Interact or WBP_HUD and predict what kind of asset it is.",
      "aliases": [
        "asset",
        "prefix",
        "naming",
        "blueprint class",
        "input action",
        "widget blueprint",
        "animation blueprint"
      ],
      "tutorials": [],
      "lessons": [],
      "cheatSheet": [
        [
          "BP_",
          "Blueprint Class"
        ],
        [
          "BPI_",
          "Blueprint Interface"
        ],
        [
          "WBP_",
          "Widget Blueprint"
        ],
        [
          "ABP_",
          "Animation Blueprint"
        ],
        [
          "IA_",
          "Input Action"
        ],
        [
          "IMC_",
          "Input Mapping Context"
        ],
        [
          "E_",
          "Enum"
        ],
        [
          "ST_",
          "Struct"
        ],
        [
          "DT_",
          "Data Table"
        ],
        [
          "SM_",
          "Static Mesh"
        ],
        [
          "SK_",
          "Skeletal Mesh"
        ],
        [
          "M_",
          "Material"
        ],
        [
          "MI_",
          "Material Instance"
        ],
        [
          "T_",
          "Texture"
        ]
      ]
    },
    {
      "id": "actors-components",
      "track": "unreal-basics",
      "title": "Actors vs Components",
      "short": "Understand the container and the pieces inside it.",
      "tier": "core",
      "minutes": 5,
      "prefix": "Actor → Components",
      "remember": "An Actor is the thing in the world; Components give it mesh, collision, light, audio, cameras and other capabilities.",
      "useWhen": "Any time you add a mesh, collision box, camera, light or Niagara system to a Blueprint.",
      "steps": [
        "Content Drawer → right-click → Blueprint Class → Actor. Name it BP_TestLamp.",
        "Open BP_TestLamp → Components → + Add → Static Mesh. Add a Point Light as a second component.",
        "Compile, Save and place BP_TestLamp in the level. Details → Transform → set Location X = 200.",
        "Open BP_TestLamp again → select Point Light → Transform → set Relative Location Z = 50."
      ],
      "check": "Moving the Actor moves both components; moving one component changes only its position relative to the Actor.",
      "aliases": [
        "actor",
        "component",
        "components",
        "scene component"
      ],
      "tutorials": [],
      "lessons": [
        "actors-components"
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/6da79f18-bdc3-4588-9d20-e9f624bd1686/components_pane.png",
        "caption": "Official UE5.8 Components window. This is the hierarchy that turns one Actor into a collection of reusable parts.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "blueprint-types",
      "track": "unreal-basics",
      "title": "Different Types of Blueprint",
      "short": "Know where different kinds of game logic belong.",
      "tier": "core",
      "minutes": 6,
      "prefix": "Actor • Pawn • Character • Controllers • GameMode • GameState • PlayerState • GameInstance • Level BP • WBP • ABP",
      "remember": "Blueprint is not one type of thing. The parent class decides what the Blueprint represents and what it can do.",
      "useWhen": "Before deciding where to put gameplay logic.",
      "steps": [
        "Open Project Settings → Maps & Modes and identify the current GameMode.",
        "Open the current player Character Blueprint and identify its parent class.",
        "Open the Level Blueprint, then close it without adding gameplay logic.",
        "Say where each belongs: door behaviour = Actor; player body = Character; game rules = GameMode."
      ],
      "check": "You can explain why a door should not normally be scripted in the Level Blueprint.",
      "aliases": [
        "blueprint type",
        "game mode",
        "game state",
        "player state",
        "level blueprint",
        "pawn",
        "character",
        "controller"
      ],
      "tutorials": [],
      "lessons": [
        "blueprint-classes",
        "framework"
      ],
      "cheatSheet": [
        [
          "Actor",
          "A thing that can exist in the world."
        ],
        [
          "Pawn",
          "An Actor that can be possessed."
        ],
        [
          "Character",
          "A Pawn with common character movement and capsule features."
        ],
        [
          "PlayerController",
          "The player’s controlling logic."
        ],
        [
          "AIController",
          "Control logic for an AI Pawn/Character."
        ],
        [
          "GameMode",
          "Rules/default classes for the current game mode; authoritative gameplay rules."
        ],
        [
          "GameState",
          "Shared state about the current match/game."
        ],
        [
          "PlayerState",
          "State about one player in a match."
        ],
        [
          "GameInstance",
          "Lives for the whole running game and survives level changes."
        ],
        [
          "Level Blueprint",
          "Level-specific scripting; avoid using it as the default home for reusable gameplay."
        ],
        [
          "Widget Blueprint",
          "UI presentation and interaction."
        ],
        [
          "Animation Blueprint",
          "Runtime animation/pose logic for a Skeletal Mesh."
        ]
      ]
    },
    {
      "id": "transforms-units",
      "track": "unreal-basics",
      "title": "Transforms & Unreal Units",
      "short": "Read and change position, rotation and scale deliberately.",
      "tier": "core",
      "minutes": 5,
      "prefix": "Location • Rotation • Scale • X/Y/Z • 1 uu = 1 cm",
      "remember": "A Transform is Location + Rotation + Scale. Unreal’s default distance unit is centimetres.",
      "useWhen": "Movement, spawning, traces, level design, cameras and almost every 3D system.",
      "steps": [
        "Level Editor → Place Actors → Shapes → drag a Cube into the level.",
        "Set Location X = 200, Y = 0, Z = 100.",
        "Set Rotation Z = 90 degrees.",
        "Set Scale X = 2, Y = 1, Z = 1, then return Scale to 1,1,1."
      ],
      "check": "The cube is 2 m along X, 1 m above the origin and rotated 90 degrees around Z.",
      "aliases": [
        "transform",
        "vector",
        "rotator",
        "location",
        "rotation",
        "scale",
        "world local",
        "units",
        "centimetres"
      ],
      "tutorials": [],
      "lessons": [
        "editor"
      ]
    },
    {
      "id": "static-skeletal",
      "track": "unreal-basics",
      "title": "Static Mesh vs Skeletal Mesh",
      "short": "Choose the correct 3D asset type.",
      "tier": "core",
      "minutes": 4,
      "prefix": "SM_ vs SK_",
      "remember": "Static Meshes have no deforming skeleton; Skeletal Meshes are bound to bones for animation/deformation.",
      "useWhen": "Props, environments, characters, creatures and animated rigs.",
      "steps": [
        "In the Content Drawer, find one SM_ asset and one SK_ character asset.",
        "Open the Static Mesh and identify that it has mesh data but no character skeleton workflow.",
        "Open the Skeletal Mesh and locate its Skeleton/animation-related information.",
        "Classify these: crate = Static; playable character = Skeletal."
      ],
      "check": "You can explain why a chair normally does not need to be a Skeletal Mesh.",
      "aliases": [
        "static mesh",
        "skeletal mesh",
        "mesh",
        "skeleton",
        "sm_",
        "sk_"
      ],
      "tutorials": [],
      "lessons": []
    },
    {
      "id": "compile-save-play",
      "track": "unreal-basics",
      "title": "Compile, Save, Play & Stop",
      "short": "Use the basic Unreal edit-test loop.",
      "tier": "core",
      "minutes": 3,
      "prefix": "Compile → Save → Play → Stop",
      "remember": "Compile checks Blueprint changes; Save writes assets; Play proves behaviour. These are separate actions.",
      "useWhen": "Every Blueprint tutorial.",
      "steps": [
        "Open any safe practice Blueprint.",
        "Move one harmless node or add a comment, then press Compile.",
        "Press Save.",
        "Press Play, observe the game, then Stop."
      ],
      "check": "You know which action checks Blueprint logic and which action actually tests gameplay.",
      "aliases": [
        "compile blueprint",
        "PIE",
        "play in editor",
        "save asset"
      ],
      "tutorials": [],
      "lessons": []
    },
    {
      "id": "materials-instances",
      "track": "unreal-basics",
      "title": "Materials, Material Instances & Textures",
      "short": "Recognise the visual asset chain without becoming a material artist yet.",
      "tier": "common",
      "minutes": 6,
      "prefix": "T_ → M_ → MI_",
      "remember": "Textures provide image/data inputs; Materials define the shader; Material Instances expose parameters without duplicating the whole shader.",
      "useWhen": "Changing surface appearance or following art/design tutorials.",
      "steps": [
        "Find one Material and one Material Instance in the Content Drawer.",
        "Open the Material Instance and locate its parameter controls.",
        "Apply the Material Instance to a Static Mesh.",
        "Change one exposed parameter and observe the mesh update."
      ],
      "check": "You can explain why MI_Wall_Red is usually preferable to duplicating M_Wall just to change one parameter.",
      "aliases": [
        "material",
        "material instance",
        "texture",
        "m_",
        "mi_",
        "t_"
      ],
      "tutorials": [],
      "lessons": []
    },
    {
      "id": "events-execution",
      "track": "blueprint-basics",
      "title": "Events & Execution Wires",
      "short": "Understand what starts Blueprint logic and what runs next.",
      "tier": "core",
      "minutes": 5,
      "prefix": "Event → white execution wire → actions",
      "remember": "An Event is an entry point. White wires show execution order; coloured wires carry data.",
      "useWhen": "Every Blueprint graph.",
      "steps": [
        "Content Drawer → right-click → Blueprint Class → Actor. Name it BP_EventTest and place one instance in the level.",
        "Open BP_EventTest → Event Graph. Keep Event BeginPlay, drag from its white execution pin and search Print String.",
        "On Print String set In String = BeginPlay works. Compile and Save.",
        "Play once. Stop after the message appears."
      ],
      "check": "The message appears once when play starts, and you can point to the white wire that caused it.",
      "aliases": [
        "event",
        "execution",
        "begin play",
        "white wire",
        "event beginplay"
      ],
      "tutorials": [],
      "lessons": [
        "events"
      ],
      "visual": {
        "src": "assets/ue5/current/events-execution-real.webp",
        "caption": "Current classroom Blueprint example showing an Event starting execution through the white execution wire.",
        "sourceTitle": "Current classroom Unreal Engine capture (Aug 2026)",
        "kind": "ue5"
      }
    },
    {
      "id": "variables-types",
      "track": "blueprint-basics",
      "title": "Variables, Types, Get & Set",
      "short": "Store game state and recognise common data types.",
      "tier": "core",
      "minutes": 7,
      "prefix": "Bool • Integer • Float • Text • Name • Vector • Object Ref",
      "remember": "A variable stores one piece of data of a specific type. Get reads it; Set changes it.",
      "useWhen": "Health, score, keys, speed, states, references and almost every system.",
      "steps": [
        "Open a safe practice Blueprint → My Blueprint → Variables → +. Name it Health → set type = Float → Compile → Default Value = 100.",
        "Variables → + → name it HasKey → set type = Boolean → Compile → leave Default Value = False.",
        "Drag Health from My Blueprint into the Event Graph once as Get and once as Set.",
        "Event BeginPlay → Set Health = 75 → Print String using Health. Compile, Save and Play."
      ],
      "check": "The printed value is 75 and you can explain the difference between Get Health and Set Health.",
      "aliases": [
        "variable",
        "boolean",
        "bool",
        "integer",
        "int",
        "float",
        "text",
        "name",
        "get set",
        "data type"
      ],
      "tutorials": [],
      "lessons": [
        "variables"
      ],
      "cheatSheet": [
        [
          "Boolean",
          "True / False"
        ],
        [
          "Integer",
          "Whole number"
        ],
        [
          "Float",
          "Decimal number"
        ],
        [
          "Text",
          "Player-facing text"
        ],
        [
          "Name",
          "Efficient identifier/name value"
        ],
        [
          "Vector",
          "X/Y/Z numbers, often position or direction"
        ],
        [
          "Rotator",
          "Pitch/Yaw/Roll rotation"
        ],
        [
          "Transform",
          "Location + Rotation + Scale"
        ],
        [
          "Object Reference",
          "One specific object"
        ],
        [
          "Class Reference",
          "A type/class you could spawn or compare against"
        ]
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/1382b62f-8a52-4f16-b4b3-cbf812cb2064/ht45.png",
        "caption": "Official UE5.8 variable access example showing Set and Get nodes. Set changes stored state; Get reads the current value.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "enhanced-input",
      "track": "blueprint-basics",
      "title": "Enhanced Input: IA & IMC",
      "short": "Know what Input Actions and Mapping Contexts actually do.",
      "tier": "core",
      "minutes": 6,
      "prefix": "IA_ = intention • IMC_ = physical control mapping",
      "remember": "IA_ describes the gameplay intention; IMC_ maps it to physical controls. Started means trigger evaluation began, Ongoing means it is still being evaluated, Triggered means the trigger requirements were satisfied, Completed means the triggered action finished, and Canceled means evaluation ended before it triggered.",
      "useWhen": "Movement, interaction, combat and any player control.",
      "steps": [
        "Content Drawer → Input → create Input Action IA_TestAction; keep Value Type = Digital (Bool).",
        "Open the player’s active IMC and add IA_TestAction mapped to T.",
        "In the Character Event Graph, add the IA_TestAction event and inspect Started, Ongoing, Triggered, Completed and Canceled.",
        "Connect Started → Print String with Started and Completed → Print String with Completed.",
        "Play: press T once, hold briefly, then release. Watch the two messages."
      ],
      "check": "Started prints once when T is pressed and Completed prints when the action ends; changing the key in the IMC changes the control without rewriting gameplay logic.",
      "aliases": [
        "enhanced input",
        "input action",
        "ia_",
        "mapping context",
        "imc_",
        "started",
        "triggered",
        "completed",
        "canceled"
      ],
      "tutorials": [
        "enhanced-input-action"
      ],
      "lessons": [],
      "cheatSheet": [
        [
          "IA_",
          "What the player intends to do."
        ],
        [
          "IMC_",
          "Which physical controls trigger the action."
        ],
        [
          "Started",
          "Trigger evaluation began."
        ],
        [
          "Ongoing",
          "Still evaluating and not yet triggered."
        ],
        [
          "Triggered",
          "Trigger requirements were satisfied."
        ],
        [
          "Completed",
          "The triggered action finished."
        ],
        [
          "Canceled",
          "Evaluation ended before the action triggered."
        ]
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/6c38fff1-2df0-4100-9a7d-bc6f3b06427a/image_6.png",
        "caption": "Official UE5.8 Input Mapping Context showing Input Actions mapped to physical controls.",
        "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/enhanced-input-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "branches-switches",
      "track": "blueprint-basics",
      "title": "Branches, Switches & Select",
      "short": "Choose between outcomes based on data.",
      "tier": "core",
      "minutes": 6,
      "prefix": "Branch = True/False • Switch = named/multiple routes • Select = choose a value",
      "remember": "Use the simplest decision node that matches the question you are asking.",
      "useWhen": "Doors, states, modes, weapon types and conditional behaviour.",
      "steps": [
        "Open a safe practice Blueprint → Variables → + → Boolean named HasKey → Compile → Default Value = False.",
        "Event BeginPlay → drag from the white execution pin → search Branch. Drag HasKey in as Get → connect it to Condition.",
        "Branch True → Print String Key found. Branch False → Print String No key. Compile and Play.",
        "Stop → change HasKey Default Value = True → Compile → Play again."
      ],
      "check": "Both outcomes work and only one route runs each time.",
      "aliases": [
        "branch",
        "switch",
        "select",
        "condition",
        "true false"
      ],
      "tutorials": [],
      "lessons": [
        "branches"
      ]
    },
    {
      "id": "functions-events-macros",
      "track": "blueprint-basics",
      "title": "Functions, Custom Events & Macros",
      "short": "Package repeated logic without treating every reusable graph the same.",
      "tier": "common",
      "minutes": 7,
      "prefix": "Function • Custom Event • Macro",
      "remember": "Functions are great for named reusable calculations/actions; Custom Events are execution entry points; Macros expand reusable graph patterns.",
      "useWhen": "When a graph repeats or a section has one clear job.",
      "steps": [
        "Open a safe practice Blueprint → My Blueprint panel → Functions → +. Name the function GetHalfHealth.",
        "With the function selected → Details → Inputs → + → Float named Health. Outputs → + → Float named Result.",
        "Inside GetHalfHealth, divide Health by 2.0 and connect the result to Result on the Return Node.",
        "Event Graph → drag GetHalfHealth in as a call → enter Health = 100 → Print String the returned Result."
      ],
      "check": "The function returns 50 and has no BeginPlay/Input event inside it.",
      "aliases": [
        "function",
        "custom event",
        "macro",
        "function library"
      ],
      "tutorials": [],
      "lessons": [
        "functions"
      ]
    },
    {
      "id": "timelines-lerp",
      "track": "blueprint-basics",
      "title": "Timelines & Lerp",
      "short": "Turn a value changing over time into smooth movement, rotation or other transitions.",
      "tier": "common",
      "minutes": 7,
      "prefix": "Timeline → Float Track → Lerp → Set",
      "remember": "A Timeline produces values over time. A Lerp uses an Alpha from 0 to 1 to blend between a start and end value.",
      "useWhen": "Doors, moving platforms, lifts, fades and other controlled transitions.",
      "requires": [
        "events-execution",
        "transforms-units"
      ],
      "steps": [
        "Content Drawer → right-click → Blueprint Class → Actor. Name it BP_TimelineTest → open Event Graph → right-click empty space → Add Timeline. Name it TL_Move.",
        "Double-click TL_Move → + Float Track → name it Alpha. Add key Time 0.0 / Value 0.0 and key Time 1.0 / Value 1.0. Set Timeline Length = 1.0.",
        "Back in Event Graph → add Lerp (Vector). Set A = (0,0,0), B = (0,0,200) and connect TL_Move Alpha → Lerp Alpha.",
        "TL_Move Update → Set Actor Relative Location (or Set Relative Location on a test component) using the Lerp result. BeginPlay → TL_Move Play from Start.",
        "Compile, Save and Play."
      ],
      "check": "The test object moves smoothly from Z 0 to Z 200 over exactly 1 second; Alpha starts at 0 and finishes at 1.",
      "aliases": [
        "timeline",
        "float track",
        "lerp",
        "linear interpolate",
        "alpha",
        "play from start"
      ],
      "tutorials": [],
      "lessons": [
        "timelines"
      ]
    },
    {
      "id": "object-class-references",
      "track": "blueprint-basics",
      "title": "Object Reference vs Class Reference",
      "short": "Know whether you mean this object or this type of object.",
      "tier": "core",
      "minutes": 6,
      "prefix": "Object = specific instance • Class = recipe/type",
      "remember": "An Object Reference points to an existing object; a Class Reference points to a type you could create or compare against.",
      "useWhen": "Spawning, interactions, UI, enemies, pickups and communication.",
      "steps": [
        "Content Drawer → right-click → Blueprint Class → Actor. Name it BP_Target and place one instance in the level.",
        "In another practice Blueprint → Variables → + → name TargetObject → set type to BP_Target Object Reference.",
        "Create a second variable TargetClass → set type to BP_Target Class Reference.",
        "Compile. For TargetObject use the eyedropper to select the placed BP_Target instance; set TargetClass to BP_Target."
      ],
      "check": "You can say “TargetObject is that placed target; TargetClass is the kind of target”.",
      "aliases": [
        "object reference",
        "class reference",
        "reference"
      ],
      "tutorials": [],
      "lessons": [
        "references-casting"
      ]
    },
    {
      "id": "casting",
      "track": "blueprint-basics",
      "title": "Casting",
      "short": "Check what kind of object a reference really is.",
      "tier": "common",
      "minutes": 5,
      "prefix": "Object reference → Cast To target class",
      "remember": "Casting does not find an object. It tests/converts a reference you already have if that object is compatible with the target class.",
      "useWhen": "When you have a general reference but need class-specific variables/functions.",
      "steps": [
        "Content Drawer → right-click → Blueprint Class → Actor → name it BP_CastTarget. Repeat once and name the second Actor BP_CastTester.",
        "In BP_CastTester create TargetActor as an Actor Object Reference. Make it Instance Editable, then Compile.",
        "Place BP_CastTarget and BP_CastTester in the level. Select BP_CastTester and use the TargetActor eyedropper to choose BP_CastTarget.",
        "BP_CastTester → Event BeginPlay → Get TargetActor → Cast To BP_CastTarget → Cast Succeeded → Print String Cast worked.",
        "Play once for success. Stop, point TargetActor at an unrelated placed Actor such as a Cube, and Play again to see Cast Failed."
      ],
      "check": "The BP_CastTarget reference succeeds; an unrelated Actor fails. The Cast tested a reference you already supplied — it did not find the object.",
      "aliases": [
        "cast",
        "casting",
        "cast to"
      ],
      "tutorials": [],
      "lessons": [
        "references-casting"
      ],
      "requires": [
        "object-class-references",
        "events-execution"
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/fe5fe968-0fb7-4e45-83fc-b76afca4a15b/3_2.png",
        "caption": "Official UE5.8 Cast node example. Casting checks the type of a reference you already have.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "damage-system",
      "track": "blueprint-basics",
      "title": "Damage: Apply Damage & AnyDamage",
      "short": "Send damage to an Actor and receive it in one predictable place.",
      "tier": "common",
      "minutes": 7,
      "prefix": "Apply Damage → Event AnyDamage",
      "remember": "Apply Damage sends a damage event to an Actor. Event AnyDamage is a general receiver for damage on that Actor; the health calculation is still your gameplay logic.",
      "useWhen": "Weapons, hazards, melee attacks, enemies and player health.",
      "requires": [
        "variables-types",
        "events-execution",
        "object-class-references"
      ],
      "steps": [
        "Content Drawer → right-click → Blueprint Class → Actor → name it BP_DamageTarget. Open it → Variables → + → Float Health → Compile → Default Value = 100.",
        "BP_DamageTarget → Event Graph → add Event AnyDamage → Set Health = Health - Damage → Print String Health.",
        "Create BP_DamageTester as an Actor Blueprint → add Instance Editable BP_DamageTarget Object Reference named Target. Place both Actors and set Target with the eyedropper.",
        "BP_DamageTester → BeginPlay → Apply Damage. Damaged Actor = Target, Base Damage = 20.",
        "Compile, Save and Play once."
      ],
      "check": "BP_DamageTarget prints Health = 80. Apply Damage sent 20; the target decided how that changed its Health variable.",
      "aliases": [
        "apply damage",
        "damage",
        "anydamage",
        "event anydamage",
        "base damage",
        "damage event"
      ],
      "tutorials": [],
      "lessons": [
        "events",
        "variables"
      ]
    },
    {
      "id": "debugging",
      "track": "blueprint-basics",
      "title": "Debugging: Print, Breakpoints & Watch",
      "short": "Diagnose a system instead of randomly changing nodes.",
      "tier": "core",
      "minutes": 7,
      "prefix": "Print String • Breakpoint • Watch Value • Debug Object",
      "remember": "Debugging asks “what actually happened?” before “what should I change?”.",
      "useWhen": "Whenever a Blueprint does nothing, fires twice or has the wrong value.",
      "steps": [
        "Open a safe Blueprint graph that already runs during Play. Add Print String immediately before one important node and another immediately after it.",
        "Set the first message = Before and the second = After → Compile → Play and confirm which messages appear.",
        "Stop → right-click the important node → Add Breakpoint → Play again until execution pauses.",
        "While paused, hover/watch one relevant variable or pin value, then Resume/Stop."
      ],
      "check": "You can identify whether the event fired and what value a variable held when it did.",
      "aliases": [
        "debug",
        "debugging",
        "print string",
        "breakpoint",
        "watch value",
        "blueprint debugger"
      ],
      "tutorials": [],
      "lessons": [
        "practice",
        "complexity"
      ]
    },
    {
      "id": "spawn-destroy",
      "track": "blueprint-basics",
      "title": "Spawn & Destroy Actors",
      "short": "Create and remove world objects at runtime.",
      "tier": "common",
      "minutes": 6,
      "prefix": "Spawn Actor from Class • Spawn Transform • Destroy Actor",
      "remember": "Spawning needs a Class and a Transform; destroying removes a specific Actor instance.",
      "useWhen": "Projectiles, pickups, enemies, effects and procedural gameplay.",
      "steps": [
        "Content Drawer → right-click → Blueprint Class → Actor → name it BP_SpawnCube. Open it → Components → + Add → Static Mesh → set the mesh to a Cube.",
        "In a Level-safe practice Blueprint use Spawn Actor from Class → BP_SpawnCube.",
        "Use a Spawn Transform with Location X = 200, Y = 0, Z = 100.",
        "Store the Return Value, wait 2 seconds, then Destroy Actor using that reference."
      ],
      "check": "The cube appears at the chosen position and disappears after 2 seconds.",
      "aliases": [
        "spawn actor",
        "destroy actor",
        "spawn transform",
        "spawn"
      ],
      "tutorials": [],
      "lessons": []
    },
    {
      "id": "timers-delay-tick",
      "track": "blueprint-basics",
      "title": "Timers vs Delay vs Tick",
      "short": "Choose the right way to run logic over time.",
      "tier": "common",
      "minutes": 7,
      "prefix": "Timer = scheduled/repeating • Delay = pause one execution chain • Tick = every frame",
      "remember": "Do not use Tick just because something needs to happen later or repeatedly.",
      "useWhen": "Cooldowns, countdowns, periodic checks and repeated events.",
      "steps": [
        "Open a safe practice Blueprint → Event Graph → right-click → Add Custom Event → name it Pulse. Pulse → Print String with In String = Pulse.",
        "Event BeginPlay → Set Timer by Event → Time = 1.0 → Looping = True → connect/bind the Pulse event.",
        "Compile, Save and Play for exactly 4 seconds, then Stop and count the Pulse messages.",
        "Compare that with Event Tick, which can execute every frame while the Actor is ticking."
      ],
      "check": "Pulse prints about once per second rather than dozens of times per second.",
      "aliases": [
        "timer",
        "delay",
        "tick",
        "event tick",
        "set timer"
      ],
      "tutorials": [],
      "lessons": []
    },
    {
      "id": "construction-script",
      "track": "blueprint-basics",
      "title": "Construction Script",
      "short": "Use editor-time Blueprint setup without confusing it with BeginPlay.",
      "tier": "common",
      "minutes": 6,
      "prefix": "Construction Script ≠ BeginPlay",
      "remember": "Construction Script updates an Actor as it is constructed/edited; BeginPlay runs when gameplay starts.",
      "useWhen": "Procedural editor setup, previewable parameters and repeated placement tools.",
      "steps": [
        "Content Drawer → right-click → Blueprint Class → Actor. Name it BP_ConstructionTest and add a Static Mesh Component.",
        "Variables → + → Float named Height → Compile → set Default Value = 100 and enable Instance Editable (eye icon).",
        "Construction Script → Get Height → Make Vector with Z = Height → Set Relative Location on the Static Mesh.",
        "Compile, Save and place the Actor. While not playing, change Height in the placed Actor Details panel from 100 to 250."
      ],
      "check": "The mesh moves in the editor immediately when Height changes.",
      "aliases": [
        "construction script",
        "begin play"
      ],
      "tutorials": [],
      "lessons": []
    },
    {
      "id": "inheritance-child-bp",
      "track": "blueprint-basics",
      "title": "Parent & Child Blueprints",
      "short": "Reuse shared behaviour through inheritance.",
      "tier": "common",
      "minutes": 7,
      "prefix": "Parent class → Child class",
      "remember": "A child inherits parent variables, components and behaviour, then specialises what is different.",
      "useWhen": "Pickups, enemy families, doors, weapons and reusable game systems.",
      "steps": [
        "Content Drawer → right-click → Blueprint Class → Actor → name it BP_PickupBase. Open it → add Sphere Collision → Variables → + → Integer Value → Compile → Default Value = 10.",
        "Right-click BP_PickupBase → Create Child Blueprint Class → name BP_CoinPickup.",
        "Open BP_CoinPickup and confirm the inherited component/variable.",
        "Change Value in the child to 25 without changing the parent."
      ],
      "check": "The child keeps the shared setup but can use a different default Value.",
      "aliases": [
        "inheritance",
        "child blueprint",
        "parent blueprint",
        "override"
      ],
      "tutorials": [],
      "lessons": [],
      "requires": [
        "blueprint-types",
        "variables-types"
      ]
    },
    {
      "id": "bpi",
      "track": "communication-data",
      "title": "Blueprint Interfaces (BPI)",
      "short": "Send a shared message without caring about the receiver’s exact class.",
      "tier": "common",
      "minutes": 7,
      "prefix": "BPI_",
      "remember": "An Interface says “if you implement this message, I can call it” — useful when many unrelated classes share one behaviour.",
      "useWhen": "Interactable doors, buttons, pickups, terminals and reusable communication.",
      "steps": [
        "Content Drawer → right-click → Blueprints → Blueprint Interface. Name it BPI_Interactable.",
        "Open BPI_Interactable → rename the default function Interact. Leave its graph empty; Interfaces declare the message, they do not implement the behaviour.",
        "Open BP_TestDoor → Class Settings → Implemented Interfaces → Add → BPI_Interactable. Compile.",
        "In BP_TestDoor implement Event Interact → Print String Door interacted.",
        "From a caller that already has a BP_TestDoor/Object reference, drag from the reference → search Interact (Message) → call it and test."
      ],
      "check": "The caller does not need Cast To BP_TestDoor just to send Interact.",
      "aliases": [
        "bpi",
        "blueprint interface",
        "interface",
        "interact interface"
      ],
      "tutorials": [],
      "lessons": [
        "interfaces-dispatchers"
      ],
      "requires": [
        "object-class-references"
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ca176849-4f39-4e50-bd83-e01672bddf2d/interfaceeditor.png",
        "caption": "Official UE5.8 Blueprint Interface editor. A BPI defines a contract that multiple Blueprint classes can implement.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-interface-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "dispatchers",
      "track": "communication-data",
      "title": "Event Dispatchers",
      "short": "Broadcast that something happened to any listeners that care.",
      "tier": "common",
      "minutes": 7,
      "prefix": "Dispatcher = broadcaster → bound listeners",
      "remember": "The sender does not need to know every listener. Listeners bind to the dispatcher and react when it broadcasts.",
      "useWhen": "UI updates, switches, objectives and one-to-many communication.",
      "steps": [
        "Create/open BP_Button → My Blueprint → Event Dispatchers → +. Name it OnPressed.",
        "Event Graph → create a simple Custom Event TestPress → drag OnPressed into the graph → choose Call.",
        "In a listener Blueprint create an Instance Editable BP_Button Object Reference named ButtonRef. Place both Actors and set ButtonRef with the eyedropper.",
        "Listener BeginPlay → Get ButtonRef → Bind Event to OnPressed → create the matching bound event → Print String Listener heard it.",
        "Trigger TestPress on BP_Button and confirm the listener message appears."
      ],
      "check": "Calling the dispatcher triggers the bound listener without the button directly calling that listener’s function.",
      "aliases": [
        "event dispatcher",
        "dispatcher",
        "bind event",
        "broadcast"
      ],
      "tutorials": [],
      "lessons": [
        "interfaces-dispatchers"
      ],
      "requires": [
        "object-class-references",
        "events-execution"
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7ff64b05-8f8f-46d2-a574-a0646b951fff/event7.png",
        "caption": "Official UE5.8 Event Dispatcher binding example. The listener binds before it can respond to the broadcast.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "arrays-sets-maps",
      "track": "communication-data",
      "title": "Arrays, Sets & Maps",
      "short": "Store collections of values in the right shape.",
      "tier": "common",
      "minutes": 8,
      "prefix": "Array = ordered list • Set = unique values • Map = key → value",
      "remember": "Choose the container based on how you need to retrieve and organise the data.",
      "useWhen": "Inventories, target lists, completed objectives, item lookups and data systems.",
      "steps": [
        "Open a safe practice Blueprint → Variables → + → String variable → click the container icon and choose Array → name it Inventory → Compile → add Key, Battery and Note as defaults.",
        "Event Graph → Get Inventory → Get (a copy) with Index = 0 → Print String the result.",
        "Create Name variable → container = Set → name it VisitedRooms → add Room_A twice during a test event and inspect/print the set length.",
        "Create Integer variable → container = Map → Key Type = Name → name it AmmoByType → add Pistol → 12, then Find Pistol and print the value."
      ],
      "check": "You can explain why a Map is useful when you want “Pistol → 12” rather than “item at index 0”.",
      "aliases": [
        "array",
        "set",
        "map",
        "container",
        "dictionary"
      ],
      "tutorials": [],
      "lessons": [
        "data"
      ]
    },
    {
      "id": "enums",
      "track": "communication-data",
      "title": "Enums",
      "short": "Represent one named choice from a controlled list.",
      "tier": "common",
      "minutes": 6,
      "prefix": "E_",
      "remember": "An Enum replaces mystery numbers/strings with readable named states or categories.",
      "useWhen": "Weapon types, game states, teams, doors, difficulty and modes.",
      "steps": [
        "Content Drawer → right-click → Blueprints → Enumeration. Name it E_WeaponType → open it → add Pistol, Shotgun and Rifle entries.",
        "Add Pistol, Shotgun and Rifle.",
        "Create variable WeaponType using E_WeaponType.",
        "Use Switch on E_WeaponType and print a different message for each value."
      ],
      "check": "Changing WeaponType chooses the matching named route without comparing text strings.",
      "aliases": [
        "enum",
        "enumeration",
        "e_",
        "switch on enum"
      ],
      "tutorials": [],
      "lessons": [
        "data"
      ]
    },
    {
      "id": "structs",
      "track": "communication-data",
      "title": "Structs",
      "short": "Bundle related fields into one reusable data type.",
      "tier": "common",
      "minutes": 7,
      "prefix": "ST_",
      "remember": "A Struct groups fields that belong together, such as all the data describing one weapon.",
      "useWhen": "Inventory items, weapons, quests, stats and Data Tables.",
      "steps": [
        "Content Drawer → right-click → Blueprints → Structure. Name it ST_WeaponData → open it.",
        "Add WeaponName Text, Damage Float, FireRate Float and Ammo Integer.",
        "Create variable TestWeapon using ST_WeaponData.",
        "Set values: Training Pistol, Damage 20, FireRate 0.25, Ammo 12."
      ],
      "check": "One TestWeapon value now contains all four related fields.",
      "aliases": [
        "struct",
        "structure",
        "st_",
        "break struct",
        "make struct"
      ],
      "tutorials": [],
      "lessons": [
        "data"
      ]
    },
    {
      "id": "data-tables",
      "track": "communication-data",
      "title": "Data Tables",
      "short": "Store many rows of structured game data outside individual Blueprints.",
      "tier": "common",
      "minutes": 8,
      "prefix": "ST_ → DT_ rows",
      "remember": "A Data Table uses a Struct as its row shape, then stores named rows of content.",
      "useWhen": "Weapons, enemies, items, dialogue, level data and balancing.",
      "steps": [
        "Content Drawer → right-click → Miscellaneous → Data Table → choose ST_WeaponData as Row Structure → name the asset DT_Weapons.",
        "Add rows Pistol and Shotgun.",
        "Set Pistol Damage = 20, Ammo = 12; Shotgun Damage = 60, Ammo = 6.",
        "In a Blueprint use Get Data Table Row with Row Name Pistol and print Damage."
      ],
      "check": "The Blueprint reads 20 from the Pistol row without hard-coding that value in the graph.",
      "aliases": [
        "data table",
        "datatable",
        "dt_",
        "get data table row",
        "row name"
      ],
      "tutorials": [],
      "lessons": [
        "data"
      ],
      "requires": [
        "structs"
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/8197a9d4-1212-445f-aedb-19379fb043d9/datarowtype.png",
        "caption": "Official UE5.8 Data Table Row Type selection. The chosen Struct defines the columns and data types for each row.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/data-driven-gameplay-elements-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "savegame-block",
      "track": "communication-data",
      "title": "SaveGame",
      "short": "Persist selected data between play sessions.",
      "tier": "common",
      "minutes": 8,
      "prefix": "SaveGame Class → Save Slot → Load Slot",
      "remember": "Save only the state that must survive; loading reconstructs runtime state from saved data.",
      "useWhen": "Checkpoints, settings, collected items and player progress.",
      "steps": [
        "Content Drawer → right-click → Blueprint Class → expand All Classes → search SaveGame → create it → name it SG_TestSave → add Integer Score.",
        "Create Save Game Object using SG_TestSave.",
        "Set Score = 250 and Save Game to Slot using Slot Name TestSlot.",
        "Load Game from Slot, cast to SG_TestSave and print Score."
      ],
      "check": "The loaded save prints 250 after the save operation.",
      "aliases": [
        "savegame",
        "save game",
        "load game",
        "save slot"
      ],
      "tutorials": [],
      "lessons": [
        "savegame"
      ],
      "requires": [
        "variables-types",
        "object-class-references",
        "casting"
      ]
    },
    {
      "id": "gameplay-tags",
      "track": "communication-data",
      "title": "Gameplay Tags",
      "short": "Use hierarchical named labels for scalable categorisation.",
      "tier": "later",
      "minutes": 7,
      "prefix": "GameplayTag: Ability.Fire.Primary",
      "remember": "Gameplay Tags are structured labels designed for querying relationships and categories more robustly than scattered Booleans/strings.",
      "useWhen": "Larger ability, item, status and interaction systems.",
      "steps": [
        "Open Project Settings → Gameplay Tags and add State.Stunned.",
        "Create a Gameplay Tag variable in a practice Blueprint.",
        "Assign State.Stunned.",
        "Use a tag comparison/query to prove the tag is present."
      ],
      "check": "You can explain why State.Stunned is clearer and more scalable than many unrelated string comparisons.",
      "aliases": [
        "gameplay tag",
        "gameplay tags",
        "tag"
      ],
      "tutorials": [],
      "lessons": []
    },
    {
      "id": "data-assets",
      "track": "communication-data",
      "title": "Data Assets",
      "short": "Create reusable authored data objects that are not tied to a placed Actor.",
      "tier": "later",
      "minutes": 7,
      "prefix": "Primary/Data Asset",
      "remember": "Data Assets are useful when you want reusable content records with class-based structure and references rather than table rows.",
      "useWhen": "Items, abilities, characters and larger data-driven systems.",
      "steps": [
        "Content Drawer → right-click → Blueprint Class → All Classes → search PrimaryDataAsset → create it → name it PDA_ItemData.",
        "Add DisplayName Text and Cost Integer.",
        "Create one asset instance from that data class.",
        "Set DisplayName = Training Item and Cost = 100."
      ],
      "check": "You have reusable authored data without placing an Actor in the level.",
      "aliases": [
        "data asset",
        "primary data asset"
      ],
      "tutorials": [],
      "lessons": []
    },
    {
      "id": "pawn-character-controller",
      "track": "characters-animation",
      "title": "Pawn, Character & Controller",
      "short": "Understand the player/AI body and who possesses it.",
      "tier": "core",
      "minutes": 7,
      "prefix": "Controller → possesses → Pawn/Character",
      "remember": "A Pawn can be possessed; Character is a Pawn with common character movement/capsule features; Controllers provide control logic.",
      "useWhen": "Player characters, AI characters and Gameplay Framework decisions.",
      "steps": [
        "Open the Third Person Character Blueprint and identify Character Movement and Capsule components.",
        "Open its Class Defaults and identify Auto Possess/Controller-related settings if visible.",
        "In Project Settings → Maps & Modes identify the default Pawn/Character class.",
        "Play and confirm the PlayerController possesses that Character."
      ],
      "check": "You can explain why Character is more specialised than a plain Actor.",
      "aliases": [
        "pawn",
        "character",
        "player controller",
        "ai controller",
        "possess",
        "possession"
      ],
      "tutorials": [],
      "lessons": [
        "framework"
      ]
    },
    {
      "id": "character-movement",
      "track": "characters-animation",
      "title": "Character Movement Component",
      "short": "Know where walk speed, jump, crouch and movement rules actually live.",
      "tier": "common",
      "minutes": 6,
      "prefix": "Character → Character Movement",
      "remember": "A Character Blueprint owns a Character Movement Component. Many movement abilities change settings on that component rather than manually moving the Actor every frame.",
      "useWhen": "Sprint, crouch, jumping, falling, movement speed and character locomotion.",
      "requires": [
        "actors-components",
        "pawn-character-controller"
      ],
      "steps": [
        "Open the Third Person Character Blueprint → Components → select Character Movement.",
        "Details → Character Movement: Walking → set Max Walk Speed = 500. Compile and Play for 5 seconds.",
        "Stop → change Max Walk Speed = 250 → Compile → Play again and compare the speed.",
        "Restore Max Walk Speed = 500 before leaving the exercise."
      ],
      "check": "The same Character moves at two clearly different speeds because you changed the Character Movement Component, not its mesh or Transform.",
      "aliases": [
        "character movement",
        "character movement component",
        "max walk speed",
        "jump max count",
        "crouch",
        "movement mode"
      ],
      "tutorials": [],
      "lessons": [
        "actors-components",
        "framework"
      ]
    },
    {
      "id": "skeleton-assets",
      "track": "characters-animation",
      "title": "Skeletal Mesh, Skeleton & Bones",
      "short": "See the asset relationship underneath character animation.",
      "tier": "common",
      "minutes": 6,
      "prefix": "SK_ mesh ↔ Skeleton → bones",
      "remember": "The Skeletal Mesh is the visible geometry; the Skeleton defines the bone hierarchy animations target.",
      "useWhen": "Character animation, retargeting, sockets and Animation Blueprints.",
      "steps": [
        "Open a Skeletal Mesh character.",
        "Locate/open the Skeleton associated with it.",
        "Inspect the bone hierarchy.",
        "Select a hand bone and identify where a socket could be added."
      ],
      "check": "You can distinguish the visible Skeletal Mesh from the Skeleton asset that defines its bones.",
      "aliases": [
        "skeletal mesh",
        "skeleton",
        "bone",
        "bones",
        "retarget"
      ],
      "tutorials": [],
      "lessons": [],
      "requires": [
        "static-skeletal"
      ]
    },
    {
      "id": "animation-sequence-abp",
      "track": "characters-animation",
      "title": "Animation Sequences & Animation Blueprints",
      "short": "Know the clip versus the logic that chooses clips.",
      "tier": "common",
      "minutes": 8,
      "prefix": "Animation Sequence = clip • ABP_ = runtime animation logic",
      "remember": "An Animation Sequence contains motion; an Animation Blueprint decides which animation/pose the Skeletal Mesh should use at runtime.",
      "useWhen": "Idle/walk/run systems, enemies and animated characters.",
      "steps": [
        "Open one Animation Sequence and scrub its timeline.",
        "Open the character Animation Blueprint.",
        "Find the Event Graph and Anim Graph.",
        "Play and observe the AnimBP updating while the character moves."
      ],
      "check": "You can explain why an AnimBP is not itself “the walk animation”.",
      "aliases": [
        "animation blueprint",
        "animbp",
        "abp_",
        "animation sequence",
        "anim graph",
        "event graph"
      ],
      "tutorials": [],
      "lessons": [
        "animation"
      ],
      "cheatSheet": [
        [
          "Skeletal Mesh",
          "Visible skinned geometry"
        ],
        [
          "Skeleton",
          "Bone hierarchy the animations target"
        ],
        [
          "Animation Sequence",
          "One animation clip"
        ],
        [
          "Blend Space",
          "Blends samples using values such as Speed"
        ],
        [
          "Animation Blueprint",
          "Chooses/calculates the runtime pose"
        ],
        [
          "State Machine",
          "Controls transitions between animation states"
        ]
      ],
      "requires": [
        "static-skeletal",
        "skeleton-assets"
      ]
    },
    {
      "id": "state-machines-blendspaces",
      "track": "characters-animation",
      "title": "State Machines & Blend Spaces",
      "short": "Move between animation states and blend motion smoothly.",
      "tier": "common",
      "minutes": 8,
      "prefix": "State Machine = state/transition • Blend Space = interpolate samples",
      "remember": "State Machines manage modes such as Idle/Move/Jump; Blend Spaces smoothly choose between animation samples using values such as Speed.",
      "useWhen": "Locomotion and character animation logic.",
      "steps": [
        "Open the current character AnimBP and locate its locomotion State Machine.",
        "Open one transition rule and identify the condition.",
        "Open the locomotion Blend Space and identify its Speed axis.",
        "Play and watch the active state/blend respond to movement."
      ],
      "check": "You can point to where “should we change state?” and “how much walk/run blend?” are decided.",
      "aliases": [
        "state machine",
        "blend space",
        "transition rule",
        "locomotion"
      ],
      "tutorials": [],
      "lessons": [
        "animation"
      ],
      "requires": [
        "animation-sequence-abp"
      ]
    },
    {
      "id": "montages-notifies-sockets",
      "track": "characters-animation",
      "title": "Montages, Notifies & Sockets",
      "short": "Trigger authored animation actions and synchronise gameplay to them.",
      "tier": "common",
      "minutes": 9,
      "prefix": "Montage • Notify • Socket",
      "remember": "Montages play controlled animation sections; Notifies fire at meaningful animation moments; Sockets provide named attachment points on bones.",
      "useWhen": "Melee attacks, reloads, footsteps, weapon attachment and animation-driven events.",
      "steps": [
        "Open a character Skeleton and inspect or create a hand socket.",
        "Open an Animation Montage and identify its timeline/sections.",
        "Add or inspect an Anim Notify at a clear moment such as impact/footstep.",
        "Explain which piece would attach a sword, which would play an attack, and which would signal the hit moment."
      ],
      "check": "Socket = attachment location; Montage = controlled animation; Notify = timed event marker.",
      "aliases": [
        "animation montage",
        "montage",
        "anim notify",
        "notify",
        "socket",
        "sockets"
      ],
      "tutorials": [],
      "lessons": [],
      "requires": [
        "skeleton-assets",
        "animation-sequence-abp"
      ]
    },
    {
      "id": "collision-channels",
      "track": "world-ai",
      "title": "Collision, Presets & Channels",
      "short": "Control what blocks, overlaps or ignores what.",
      "tier": "common",
      "minutes": 8,
      "prefix": "Object Type + Channel Response = Block / Overlap / Ignore",
      "remember": "Collision is a response table, not just “collision on/off”.",
      "useWhen": "Pickups, projectiles, traces, characters, doors and triggers.",
      "steps": [
        "Create Actor Blueprint BP_CollisionTest. Add a Box Collision Component and set Box Extent X = 100, Y = 100, Z = 100.",
        "Set Collision Preset = OverlapOnlyPawn and ensure Generate Overlap Events is enabled.",
        "Add On Component Begin Overlap for the Box → Print String with Overlap works.",
        "Place BP_CollisionTest across the player’s route. Play and walk through it: the message prints and the player is not blocked.",
        "Stop, change Collision Preset to BlockAll, then Play again and walk into it to compare the response."
      ],
      "check": "OverlapOnlyPawn lets the player pass and generates the overlap event; BlockAll physically blocks the player.",
      "aliases": [
        "collision",
        "collision channel",
        "collision preset",
        "block",
        "overlap",
        "ignore",
        "object type"
      ],
      "tutorials": [],
      "lessons": [
        "collision"
      ],
      "cheatSheet": [
        [
          "Block",
          "Stops/blocks the other collision object"
        ],
        [
          "Overlap",
          "Allows passage but can generate overlap events"
        ],
        [
          "Ignore",
          "No collision response between the two"
        ],
        [
          "Object Type",
          "What this object says it is"
        ],
        [
          "Trace Channel",
          "What a trace asks the world to respond to"
        ]
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/10c10808-3c0e-4637-bfee-e931a8b5e308/col_collidenoevent_sphere.png",
        "caption": "Official UE5.8 collision response settings showing Block, Overlap and Ignore.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/collision-in-unreal-engine---overview",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "traces-hit-results",
      "track": "world-ai",
      "title": "Traces & Hit Results",
      "short": "Ask the world what lies along a line/shape and inspect the answer.",
      "tier": "common",
      "minutes": 8,
      "prefix": "Trace → Hit? → Hit Result",
      "remember": "A trace queries collision without needing a physical projectile. Hit Result contains details such as Actor, location and normal.",
      "useWhen": "Interaction, hitscan weapons, placement and line-of-sight checks.",
      "steps": [
        "From a player Blueprint create a Line Trace By Channel with Start at camera location.",
        "Set End = Start + Forward Vector × 300.",
        "Enable Draw Debug Type = For Duration while learning.",
        "Break Hit Result and Print the Hit Actor display name when blocking hit is True."
      ],
      "check": "A 300 cm debug line appears and hitting an Actor prints its name.",
      "aliases": [
        "line trace",
        "trace",
        "hit result",
        "break hit result",
        "sphere trace"
      ],
      "tutorials": [],
      "lessons": [
        "traces"
      ],
      "requires": [
        "transforms-units",
        "collision-channels"
      ]
    },
    {
      "id": "umg-widgets",
      "track": "world-ai",
      "title": "UMG & Widget Blueprints",
      "short": "Build UI as a separate visual layer that reads game state.",
      "tier": "common",
      "minutes": 8,
      "prefix": "WBP_ → Create Widget → Add to Viewport",
      "remember": "A Widget Blueprint draws UI; the gameplay system should usually own the state the UI displays.",
      "useWhen": "HUDs, prompts, menus, health bars and score displays.",
      "steps": [
        "Content Drawer → right-click → User Interface → Widget Blueprint → User Widget. Name it WBP_TestHUD.",
        "Open WBP_TestHUD → Designer → Palette → drag Text onto the canvas → Details → Text = HUD works → Compile and Save.",
        "Open the Player Character → Event BeginPlay → Create Widget → Class = WBP_TestHUD.",
        "Create Widget Return Value → Add to Viewport → Compile, Save and Play."
      ],
      "check": "HUD works appears on screen and the Widget asset contains presentation rather than player health ownership.",
      "aliases": [
        "umg",
        "widget",
        "widget blueprint",
        "wbp_",
        "create widget",
        "add to viewport"
      ],
      "tutorials": [],
      "lessons": [
        "ui"
      ],
      "cheatSheet": [
        [
          "Create Widget",
          "Creates a Widget instance; it does not display it yet."
        ],
        [
          "Add to Viewport",
          "Displays the Widget on the player screen."
        ],
        [
          "Game Only",
          "Gameplay receives input."
        ],
        [
          "UI Only",
          "UI receives input; useful for menus."
        ],
        [
          "Game and UI",
          "Both can receive input depending on focus."
        ],
        [
          "Show Mouse Cursor",
          "PlayerController setting commonly enabled for clickable menus."
        ]
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/bf146350-4103-4b5a-a33d-23b00ca8bc63/01-01_createwidgetblueprint.png",
        "caption": "Official UE5.8 workflow for creating a Widget Blueprint asset.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/umg-ui-designer-quick-start-guide-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "camera-feedback",
      "track": "world-ai",
      "title": "Camera, Spring Arm & Camera Shake",
      "short": "Understand the common gameplay camera pieces and where camera feedback is triggered.",
      "tier": "common",
      "minutes": 7,
      "prefix": "Spring Arm → Camera → Player Camera Manager → Camera Shake",
      "remember": "A Camera Component provides the view, a Spring Arm commonly positions third-person cameras, and the Player Camera Manager can apply temporary effects such as camera shakes.",
      "useWhen": "Third-person cameras, aiming, traces from the view and action feedback.",
      "requires": [
        "actors-components",
        "transforms-units"
      ],
      "steps": [
        "Open the Third Person Character Blueprint → Components → select Camera Boom (Spring Arm), then Follow Camera.",
        "With Camera Boom selected, note the current Target Arm Length. Set Target Arm Length = 400 → Compile → Play for 5 seconds → Stop → restore the value you noted.",
        "In a safe test graph use Get Player Camera Manager and identify Start Camera Shake from its reference.",
        "Open one Camera Shake Base asset if your project already has one; otherwise note that the shake asset supplies the pattern while Player Camera Manager starts it."
      ],
      "check": "You can point to the Spring Arm, Camera Component and Player Camera Manager and explain the different job each one performs.",
      "aliases": [
        "camera",
        "camera component",
        "spring arm",
        "camera boom",
        "player camera manager",
        "camera shake",
        "start camera shake"
      ],
      "tutorials": [],
      "lessons": [
        "actors-components"
      ]
    },
    {
      "id": "audio-feedback",
      "track": "world-ai",
      "title": "Audio: Sound Waves, MetaSounds & Playback",
      "short": "Know the sound asset and choose whether playback is global or positioned in the world.",
      "tier": "common",
      "minutes": 6,
      "prefix": "Sound Wave / MetaSound Source → Play Sound 2D / At Location",
      "remember": "A Sound Wave stores imported audio. MetaSound Sources generate/process audio. Blueprint playback decides when and where the player hears it.",
      "useWhen": "UI clicks, pickups, weapons, ambience and gameplay feedback.",
      "requires": [
        "events-execution"
      ],
      "steps": [
        "Content Drawer → find or import a short Sound Wave and preview it so you know the source audio works.",
        "In a safe Blueprint → Event BeginPlay → Play Sound 2D → Sound = that Sound Wave. Compile, Save and Play once.",
        "Stop → replace Play Sound 2D with Play Sound at Location → Sound = same asset → Location = Get Actor Location. Compile and Play again.",
        "Compare the two nodes: Play Sound 2D has no world Location input; Play Sound at Location requires a world position and can use attenuation/spatialisation settings."
      ],
      "check": "Both nodes can play the same source asset, but you can identify which one is screen/non-positional playback and which one is positioned in the world.",
      "aliases": [
        "sound",
        "audio",
        "sound wave",
        "metasound",
        "metasound source",
        "play sound 2d",
        "play sound at location",
        "attenuation"
      ],
      "tutorials": [],
      "lessons": []
    },
    {
      "id": "niagara-systems",
      "track": "world-ai",
      "title": "Niagara Systems & Spawning VFX",
      "short": "Recognise the effect asset and spawn it at the gameplay event that needs feedback.",
      "tier": "common",
      "minutes": 7,
      "prefix": "Niagara System → Emitters → Spawn System",
      "remember": "A Niagara System is the effect you normally place or spawn in gameplay; it can contain one or more Emitters plus modules and parameters.",
      "useWhen": "Impacts, pickups, abilities, environmental VFX and gameplay feedback.",
      "requires": [
        "events-execution",
        "transforms-units"
      ],
      "steps": [
        "Content Drawer → right-click → FX → Niagara System → create from a simple template if your project has no practice system. Name it NS_BlockTest.",
        "Open NS_BlockTest and identify the System Overview and at least one Emitter. Save without changing the template.",
        "In a safe Blueprint → BeginPlay → Spawn System at Location → System Template = NS_BlockTest → Location = Get Actor Location.",
        "Compile, Save and Play once."
      ],
      "check": "The Niagara effect appears at the Actor location, and you can distinguish the Niagara System asset from the emitter(s) inside it.",
      "aliases": [
        "niagara",
        "niagara system",
        "emitter",
        "spawn system at location",
        "spawn system attached",
        "vfx",
        "particle"
      ],
      "tutorials": [],
      "lessons": []
    },
    {
      "id": "fog-postprocess",
      "track": "world-ai",
      "title": "Fog & Post Process",
      "short": "Know which level actors control fog volume, local atmosphere and final image treatment.",
      "tier": "common",
      "minutes": 7,
      "prefix": "Exponential Height Fog → Volumetric Fog → Post Process Volume",
      "remember": "Exponential Height Fog controls scene-wide fog; Volumetric Fog adds participating-media lighting; a Post Process Volume changes the rendered image rather than creating physical fog geometry.",
      "useWhen": "Atmosphere, horror visibility, colour grading and environmental mood.",
      "requires": [
        "transforms-units"
      ],
      "steps": [
        "Level Editor → Add → Visual Effects → Exponential Height Fog. Select it in the Outliner.",
        "Details → Fog → set Fog Density = 0.03 and Fog Height Falloff = 0.20 for this proof.",
        "Details → Volumetric Fog → enable Volumetric Fog → set Extinction Scale = 1.5.",
        "Add → Volumes → Post Process Volume → enable Infinite Extent (Unbound) for this proof → Colour Grading → Global → Saturation = 0.85.",
        "Play the same route once, then disable the Post Process Volume and compare what changed because of fog versus image grading."
      ],
      "check": "You can identify which actor creates the fog and which volume changes the final image treatment; the two jobs are related but not the same.",
      "aliases": [
        "exponential height fog",
        "volumetric fog",
        "fog density",
        "post process",
        "post process volume",
        "colour grading",
        "color grading",
        "local fog"
      ],
      "tutorials": [],
      "lessons": [
        "editor"
      ]
    },
    {
      "id": "navmesh",
      "track": "world-ai",
      "title": "NavMesh",
      "short": "Show AI where it is allowed to navigate.",
      "tier": "common",
      "minutes": 6,
      "prefix": "NavMesh Bounds Volume • P = visualise",
      "remember": "NavMesh is generated navigation data over traversable space; AI movement needs reachable navigable areas.",
      "useWhen": "AI patrol, chase and Move To systems.",
      "steps": [
        "Place Actors → Volumes → Nav Mesh Bounds Volume. Put it over the Third Person template floor.",
        "With the volume selected, set Transform Scale X = 10, Y = 10, Z = 2 for this proof exercise.",
        "Press P in the Level Editor to toggle navigation visualisation.",
        "Confirm the floor inside the volume appears green. Move the volume away, then back, to prove the green area follows the bounds."
      ],
      "check": "With P enabled, the intended walkable floor is green only where the Nav Mesh Bounds Volume covers reachable space.",
      "aliases": [
        "navmesh",
        "navigation",
        "nav mesh",
        "navmesh bounds volume",
        "p key"
      ],
      "tutorials": [],
      "lessons": [
        "ai"
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/69bc24a6-f990-4cfe-b45a-f1d1d899ea8f/basic-navmesh-visualize-a.png",
        "caption": "Official UE5.8 NavMesh visualisation. Press P: green shows where AI navigation is available.",
        "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/basic-navigation-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "ai-controller-moveto",
      "track": "world-ai",
      "title": "AIController & Move To",
      "short": "Give an AI-controlled Character a destination.",
      "tier": "common",
      "minutes": 8,
      "prefix": "AIController → possesses AI Character → Move To destination",
      "remember": "The Controller drives the Pawn/Character; Move To asks the navigation system for a path.",
      "useWhen": "Patrol, chase and simple enemy movement.",
      "steps": [
        "Content Drawer → right-click → Blueprint Class → All Classes → search AIController → create it → name it BP_TestAIController.",
        "On your test AI Character, set AI Controller Class = BP_TestAIController and Auto Possess AI = Placed in World or Spawned.",
        "In BP_TestAIController Event BeginPlay: Get Controlled Pawn and Get Player Character, then add AI Move To. Set Pawn = Controlled Pawn, Target Actor = Player Character, Acceptance Radius = 100.",
        "Place the AI Character on green NavMesh, Compile, Save and Play."
      ],
      "check": "The AI moves through the green NavMesh toward the player and stops when it is within roughly the 100 cm acceptance radius.",
      "aliases": [
        "ai controller",
        "aicontroller",
        "ai move to",
        "move to",
        "acceptance radius"
      ],
      "tutorials": [],
      "lessons": [
        "ai"
      ],
      "requires": [
        "navmesh",
        "pawn-character-controller"
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/fccc3f17-4a64-4262-989e-dddb80d139e2/basic-npc-ai-moveto.png",
        "caption": "Official UE5.8 Blueprint example using AI Move To to send an AI-controlled Pawn toward a destination.",
        "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/basic-navigation-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    },
    {
      "id": "ai-perception-block",
      "track": "world-ai",
      "title": "AI Perception",
      "short": "Give an AI Controller senses and react when a target is sensed or lost.",
      "tier": "common",
      "minutes": 8,
      "prefix": "AI Perception → Sight Config → Target Perception Updated",
      "remember": "AI Perception gathers sensory information. The perception event tells your AI logic what was sensed; it does not automatically decide to chase or attack.",
      "useWhen": "Sight/hearing detection before patrol, chase, search or combat decisions.",
      "requires": [
        "ai-controller-moveto"
      ],
      "steps": [
        "Open an AIController Blueprint → Components → + Add → AI Perception.",
        "Select AI Perception → Senses Config → + → AI Sight. Set Sight Radius = 1200, Lose Sight Radius = 1500, Peripheral Vision Half Angle = 60.",
        "For the first proof enable Detect Neutrals in Detection by Affiliation.",
        "Event Graph → select AI Perception component → Details / Events → add On Target Perception Updated → Branch on Stimulus Successfully Sensed → Print String Sensed / Lost.",
        "Compile, Save and test with the player first inside 800 cm in clear view, then beyond 1500 cm."
      ],
      "check": "The event reports Sensed in clear view and Lost after the target leaves the configured sight range; movement/chase logic is still a separate decision.",
      "aliases": [
        "ai perception",
        "aiperception",
        "sight config",
        "ai sight",
        "stimulus",
        "successfully sensed",
        "target perception updated"
      ],
      "tutorials": [],
      "lessons": [
        "ai"
      ]
    },
    {
      "id": "blackboard-behaviour-tree",
      "track": "world-ai",
      "title": "Blackboard & Behaviour Tree",
      "short": "Separate AI memory from decision flow.",
      "tier": "common",
      "minutes": 9,
      "prefix": "Blackboard = shared AI data • Behaviour Tree = decision/task flow",
      "remember": "The Blackboard stores facts such as TargetActor; the Behaviour Tree reads those facts to decide what the AI should do.",
      "useWhen": "Patrol/chase/search AI and reusable enemy behaviours.",
      "steps": [
        "Content Drawer → right-click → Artificial Intelligence → Blackboard → name it BB_TestAI. Open it → New Key → Object → name it TargetActor → Base Class = Actor.",
        "Content Drawer → right-click → Artificial Intelligence → Behavior Tree → name it BT_TestAI → open it → Blackboard Asset = BB_TestAI → add Root → Sequence → Move To → Blackboard Key = TargetActor → Acceptable Radius = 100.",
        "In BP_TestAIController BeginPlay, Run Behavior Tree using BT_TestAI.",
        "After Run Behavior Tree, get the Blackboard Component and Set Value as Object: Key Name TargetActor, Object Value = Get Player Character.",
        "Place the AI on green NavMesh and Play."
      ],
      "check": "The Blackboard holds the player in TargetActor and the Behaviour Tree Move To task drives the AI toward that target.",
      "aliases": [
        "blackboard",
        "behaviour tree",
        "behavior tree",
        "bt_",
        "bb_",
        "ai task"
      ],
      "tutorials": [],
      "lessons": [
        "ai"
      ],
      "requires": [
        "navmesh",
        "ai-controller-moveto"
      ],
      "visual": {
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/2816f24c-2b8d-45f2-be92-e9ca9b7b4993/behavior-tree-overview-anatomy-blackboard.png",
        "caption": "Official UE5.8 Blackboard assigned to a Behavior Tree. Blackboard Keys store the facts the tree uses for decisions.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---overview",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "kind": "epic"
      }
    }
  ]
};
