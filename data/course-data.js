window.UE5_COURSE_DATA = {
  "version": "3.4.0",
  "buildDate": "25 Aug 2026",
  "paths": [
    {
      "id": "foundations",
      "title": "Unreal Foundations",
      "icon": "◫",
      "description": "Editor confidence, Actors, Components and reusable Blueprint Classes."
    },
    {
      "id": "blueprints",
      "title": "Blueprint Core",
      "icon": "◇",
      "description": "Events, variables, decisions, functions and reusable logic."
    },
    {
      "id": "framework",
      "title": "Framework & Communication",
      "icon": "↔",
      "description": "Gameplay Framework classes and how Blueprints talk to each other."
    },
    {
      "id": "gameplay",
      "title": "Gameplay Systems",
      "icon": "⚙",
      "description": "Collision, interaction, traces, doors, UI and save systems."
    },
    {
      "id": "advanced",
      "title": "Data, AI & Animation",
      "icon": "⌘",
      "description": "Containers, flow control, AI and Animation Blueprints."
    },
    {
      "id": "practice",
      "title": "Professional Practice",
      "icon": "✓",
      "description": "Debugging, readability, ownership and keeping Blueprints maintainable."
    }
  ],
  "lessons": [
    {
      "id": "editor",
      "path": "foundations",
      "order": 1,
      "title": "Know Your Unreal Editor",
      "short": "Find, place, organise and edit things without getting lost.",
      "difficulty": "Beginner",
      "duration": "25 min",
      "xp": 100,
      "aim": "Use the main Level Editor panels confidently.",
      "goals": [
        "Navigate the Viewport",
        "Use the Content Drawer to find assets",
        "Use the Outliner to find Actors",
        "Edit an Actor in Details"
      ],
      "concepts": [
        [
          "Viewport",
          "The main view of the level; use it to navigate and position Actors."
        ],
        [
          "Content Drawer",
          "Where project assets such as meshes, materials and Blueprints are managed."
        ],
        [
          "Outliner",
          "Lists Actors currently in the level."
        ],
        [
          "Details",
          "Shows editable properties for the selected object."
        ]
      ],
      "guided": [
        "Open a Third Person project.",
        "Identify the Viewport, Outliner, Details and Content Drawer.",
        "Place three Static Mesh Actors.",
        "Rename them in the Outliner.",
        "Change Location, Rotation and Scale.",
        "Create a Learning folder in the Content Drawer and save."
      ],
      "quiz": [
        [
          "Where do project assets live?",
          [
            "Outliner",
            "Content Drawer",
            "Viewport",
            "Output Log"
          ],
          1,
          "The Content Drawer manages project assets."
        ],
        [
          "What does the Outliner mainly list?",
          [
            "All project textures",
            "Actors in the current level",
            "Blueprint variables",
            "Input actions"
          ],
          1,
          "The Outliner lists Actors in the current level."
        ]
      ],
      "stretch": {
        "title": "Tidy a Mess",
        "task": "Organise a deliberately messy blockout.",
        "requirements": [
          "Two Outliner folders",
          "Rename at least five Actors",
          "Use move, rotate and scale",
          "Keep related project assets together"
        ]
      },
      "challenge": {
        "title": "Editor Speed Run",
        "task": "Recreate a small blockout from a reference without asking where editor controls are.",
        "requirements": [
          "At least 8 Actors",
          "Use all three transforms",
          "Organised Outliner",
          "Sensible names"
        ],
        "hints": [
          "Select an Actor and use focus/frame selection if you lose it.",
          "Duplicate repeated objects instead of placing every copy from scratch."
        ]
      },
      "experience": {
        "game": "Portal 2",
        "focus": "Environmental readability",
        "play": "Play 15–20 minutes of an early test chamber and study how the space guides you.",
        "watch": "Watch an early Portal 2 test chamber walkthrough.",
        "observe": [
          "What draws your eye first?",
          "Which props clearly repeat?",
          "How is the important route made readable?"
        ],
        "search": "Portal 2 early test chamber walkthrough"
      },
      "homework": {
        "title": "Read a Level Like a Developer",
        "task": "Choose one room from any 3D game and list the separate objects a level designer would probably need to place.",
        "evidence": "A screenshot plus at least 8 labelled likely Actors/assets.",
        "stretch": "Group them into environment, lighting, gameplay and decoration."
      },
      "common": [
        "Lost? Select an Actor in the Outliner and focus it.",
        "Can't find an asset? Check the selected Content Drawer folder and search.",
        "Always confirm the intended Actor is selected before editing Details."
      ],
      "goodPractice": "Name things when their purpose becomes clear. Cube_74 tells the next developer nothing.",
      "visual": {
        "type": "book",
        "src": "assets/book/editor-overview.webp",
        "caption": "Reference figure from the supplied UE5 Blueprint book: Level Editor overview."
      },
      "bookRef": "Chapter 1: Exploring the Blueprint Editor",
      "explanation": {
        "what": "The Unreal Editor is not one window doing one job. It is a collection of panels that each answer a different question: what is in this level, what assets exist in the project, what is selected, and what properties can be changed. Learning which panel answers which question is the first real Unreal skill.",
        "why": "Students who are unsure where things live waste huge amounts of time clicking randomly. Once the Editor becomes predictable, every later task becomes easier because you know where to look before you start changing anything.",
        "mental": "Think of the Editor like a workshop. The Content Drawer is the stock room, the Outliner is the list of things currently on the workbench, the Viewport is the workbench itself, and Details is the control panel for the thing you have selected.",
        "example": "If a lamp is already placed in the level but you want to change its brightness, you would normally select the lamp Actor in the Outliner or Viewport and edit its properties in Details. If you want to find the original lamp Blueprint or mesh asset, you would look in the Content Drawer instead.",
        "use": "You use these panels constantly: placing assets, checking transforms, finding Actors, editing Components, organising levels and locating Blueprints. A good Unreal user moves between these panels deliberately rather than hunting."
      },
      "projectTask": {
        "name": "Greybox Sector A",
        "mission": "Create the first playable section of your game.",
        "build": "Greybox an entrance area, one locked route and one destination room. Organise the Outliner and project folders as if another developer will inherit the project tomorrow.",
        "proof": [
          "Playable route through at least 3 spaces",
          "Named Actors and Outliner folders",
          "Project folders for Blueprints, Maps, Materials and Meshes",
          "Screenshot of organised level"
        ],
        "polish": "Use lighting or simple material colour to make the intended route readable."
      }
    },
    {
      "id": "actors-components",
      "path": "foundations",
      "order": 2,
      "title": "Actors & Components",
      "short": "Understand the pieces behind objects placed in a level.",
      "difficulty": "Beginner",
      "duration": "30 min",
      "xp": 120,
      "aim": "Explain how Actors are built from Components and create a simple Actor Blueprint.",
      "goals": [
        "Explain what an Actor is",
        "Explain what a Component is",
        "Add Components to a Blueprint",
        "Use a clear Component hierarchy"
      ],
      "concepts": [
        [
          "Actor",
          "An object that can be placed or spawned in a level."
        ],
        [
          "Component",
          "A reusable piece of functionality attached to an Actor."
        ],
        [
          "Scene Component",
          "A Component with a transform."
        ],
        [
          "Root Component",
          "The top Component; child Scene Components transform relative to it."
        ]
      ],
      "guided": [
        "Create BP_PracticeBeacon as an Actor Blueprint.",
        "Add a Static Mesh.",
        "Add a Point Light.",
        "Add Box Collision.",
        "Arrange the hierarchy and transforms.",
        "Compile and place the Blueprint into the level."
      ],
      "quiz": [
        [
          "Which is most accurate?",
          [
            "Components are mini-levels",
            "Components add pieces/functionality to an Actor",
            "Actors only exist in C++",
            "Meshes cannot be Components"
          ],
          1,
          "Components make up or extend Actors."
        ],
        [
          "Why does the Root Component matter?",
          [
            "It stores saves",
            "Child transforms relate to it",
            "It is always a camera",
            "It packages the game"
          ],
          1,
          "Scene Components inherit transform relationships through the hierarchy."
        ]
      ],
      "stretch": {
        "title": "Build a Better Beacon",
        "task": "Extend the beacon using Components only.",
        "requirements": [
          "At least four Components",
          "One collision Component",
          "One light or audio Component",
          "Clear hierarchy"
        ]
      },
      "challenge": {
        "title": "Component-Only Prop",
        "task": "Create a recognisable game prop without Event Graph logic.",
        "requirements": [
          "Four Components minimum",
          "Obvious game purpose",
          "Collision included",
          "Readable hierarchy"
        ],
        "hints": [
          "Checkpoint markers, security cameras and warning lights work well."
        ]
      },
      "experience": {
        "game": "Half-Life 2",
        "focus": "Interactive props",
        "play": "Play a physics-heavy area and identify objects that feel like complete game Actors.",
        "watch": "Watch Half-Life 2 physics interaction gameplay.",
        "observe": [
          "Which objects need mesh + collision?",
          "Which props also need sound or light?",
          "Which objects seem to be made of multiple pieces?"
        ],
        "search": "Half-Life 2 physics props gameplay"
      },
      "homework": {
        "title": "Actor Autopsy",
        "task": "Choose one interactive object from a game and break it into likely Unreal Components.",
        "evidence": "A labelled sketch naming at least four Components and their jobs.",
        "stretch": "Choose a Root Component and justify it."
      },
      "common": [
        "If a child moves strangely, inspect the Component hierarchy.",
        "If a Component is invisible, check visibility and transform.",
        "Compile after structural Blueprint changes."
      ],
      "goodPractice": "Name Components by role: DoorMesh, InteractionBox and AlarmLight are better than StaticMesh2.",
      "visual": {
        "type": "book",
        "src": "assets/book/blueprint-editor.webp",
        "caption": "Reference figure from the supplied book: Blueprint Editor layout."
      },
      "bookRef": "Chapter 1: Components and the Blueprint Editor",
      "explanation": {
        "what": "An Actor is an object that can exist in a level. Components are the pieces that make that Actor useful. A door Actor might contain a door mesh, a collision box, an audio Component and perhaps a light, while still being one reusable object.",
        "why": "This is important because Unreal encourages you to build game objects from smaller reusable pieces rather than putting every behaviour directly into one giant graph. Understanding Actors and Components makes later Blueprint design much cleaner.",
        "mental": "Think of an Actor as the whole machine and Components as the parts bolted onto it. The Actor is the object the game recognises; Components provide visuals, collision, sound, movement and other capabilities.",
        "example": "A checkpoint Actor could contain a Static Mesh for the model, a Box Collision Component to detect the player, a Point Light for feedback and an Audio Component for the activation sound.",
        "use": "Use Components whenever an object needs additional capabilities. If several game objects need the same reusable capability, a dedicated Actor Component can eventually become a useful solution."
      },
      "projectTask": {
        "name": "Interactive Prop Shell",
        "mission": "Build the first reusable game object from Components.",
        "build": "Create a facility prop such as a security terminal, checkpoint beacon, power relay or warning light using a clear Component hierarchy.",
        "proof": [
          "One reusable Actor Blueprint",
          "At least 4 purposeful Components",
          "Collision Component included",
          "Placed in the main game map"
        ],
        "polish": "Add sound or lighting feedback without adding complex gameplay logic yet."
      }
    },
    {
      "id": "blueprint-classes",
      "path": "foundations",
      "order": 3,
      "title": "Blueprint Classes & Instances",
      "short": "Build reusable game objects instead of one-off level hacks.",
      "difficulty": "Beginner",
      "duration": "35 min",
      "xp": 130,
      "aim": "Create a reusable Blueprint Class and distinguish a Class from an instance.",
      "goals": [
        "Create an Actor Blueprint Class",
        "Explain Class vs instance",
        "Compile a Blueprint",
        "Change Class defaults and instance values"
      ],
      "concepts": [
        [
          "Class",
          "A reusable definition/template for a type of object."
        ],
        [
          "Instance",
          "A specific copy created from a Class."
        ],
        [
          "Class Default",
          "The starting value used by new instances."
        ],
        [
          "Instance Editable",
          "Allows a placed instance to override an exposed value."
        ]
      ],
      "guided": [
        "Create BP_ColourBlock.",
        "Add a cube Static Mesh.",
        "Compile and place three instances.",
        "Change transforms on each instance.",
        "Edit the Class and observe all instances update.",
        "Expose one useful variable and give each instance a different value."
      ],
      "quiz": [
        [
          "A Blueprint Class is…",
          [
            "A single uncopyable object",
            "A reusable definition used to create instances",
            "A folder",
            "A level type"
          ],
          1,
          "Classes are reusable definitions."
        ],
        [
          "Changing a Class can affect…",
          [
            "Only the Content Drawer",
            "Instances of that Class",
            "Only materials",
            "Nothing until packaging"
          ],
          1,
          "Instances inherit the Class definition unless they override a value."
        ]
      ],
      "stretch": {
        "title": "One Class, Three Results",
        "task": "Create visibly different instances from one Class.",
        "requirements": [
          "One Blueprint Class",
          "Three placed instances",
          "At least one exposed variable",
          "No duplicated Blueprint assets"
        ]
      },
      "challenge": {
        "title": "Reusable Prop Family",
        "task": "Design one Class that a level designer could reuse in three different situations.",
        "requirements": [
          "Clear purpose",
          "Useful editable values",
          "Tooltips",
          "Three demonstrations"
        ],
        "hints": [
          "Think colour, size, movement distance, light intensity or sound."
        ]
      },
      "experience": {
        "game": "Super Mario Bros. Wonder",
        "focus": "Repeated object types",
        "play": "Play a level and look for objects that behave consistently across many instances.",
        "watch": "Watch a level walkthrough and spot repeated interactive object types.",
        "observe": [
          "What stays the same across instances?",
          "What differs?",
          "Which values would you expose?"
        ],
        "search": "Super Mario Bros Wonder level walkthrough"
      },
      "homework": {
        "title": "Spot the Class",
        "task": "Find five repeated object types in a game and separate shared Class behaviour from per-instance differences.",
        "evidence": "Five examples with shared vs variable properties.",
        "stretch": "Suggest three Instance Editable variables for one example."
      },
      "common": [
        "If only one placed object changes, you probably edited the instance rather than the Class.",
        "Read compile errors before adding more nodes.",
        "Keep reusable object logic out of the Level Blueprint where practical."
      ],
      "goodPractice": "Reusable object behaviour belongs with the reusable object.",
      "visual": {
        "type": "book",
        "src": "assets/book/blueprint-editor.webp",
        "caption": "Reference figure from the supplied book: the Blueprint Class Editor and its main panels."
      },
      "bookRef": "Chapter 1: Creating a Blueprint Class",
      "explanation": {
        "what": "A Blueprint Class is a reusable definition for a type of object. When you drag that Blueprint into the level, you create an instance of the Class. The Class stores the shared design; each instance can still have its own position and, where appropriate, its own editable values.",
        "why": "Without Classes, students often duplicate assets or build one-off logic in a level. Reusable Classes mean one improvement can update every instance, making projects faster to build and far easier to maintain.",
        "mental": "Think of the Class as the recipe and an instance as one cake made from that recipe. You can make many cakes from the same recipe, and some details can be changed per cake without writing a new recipe.",
        "example": "One BP_Door Class could be used twenty times in a level. Each instance could have a different opening distance, colour or locked state while sharing the same core opening behaviour.",
        "use": "Use Blueprint Classes for reusable gameplay objects: pickups, doors, switches, enemies, hazards, moving platforms, checkpoints and interactive props."
      },
      "projectTask": {
        "name": "Reusable World Kit",
        "mission": "Prove that your project is built from reusable Classes, not one-off copies.",
        "build": "Create one Blueprint Class that appears at least three times in the game with useful per-instance differences.",
        "proof": [
          "3+ instances of one Class",
          "At least 1 Instance Editable variable",
          "Tooltip on exposed variable",
          "Changing the Class updates all instances"
        ],
        "polish": "Expose two designer-friendly settings that change presentation without changing the core Blueprint."
      }
    },
    {
      "id": "events",
      "path": "blueprints",
      "order": 1,
      "title": "Events & Execution",
      "short": "Understand what starts Blueprint logic and the order it runs.",
      "difficulty": "Beginner",
      "duration": "35 min",
      "xp": 140,
      "aim": "Trace Blueprint execution from an Event through connected actions.",
      "goals": [
        "Identify Events",
        "Recognise execution pins",
        "Trace execution order",
        "Use Print String to test logic"
      ],
      "concepts": [
        [
          "Event",
          "Something that occurs and starts an execution path."
        ],
        [
          "Execution Wire",
          "The white connection that controls when actions run."
        ],
        [
          "Data Pin",
          "Carries values rather than execution."
        ],
        [
          "Print String",
          "A simple debugging action for proving a path fired."
        ]
      ],
      "guided": [
        "Create BP_EventPractice.",
        "Connect Event BeginPlay to Print String.",
        "Add two more Print String actions.",
        "Predict the order before testing.",
        "Disconnect one execution wire and retest.",
        "Add a second Event and compare when each fires."
      ],
      "quiz": [
        [
          "What normally starts an execution path?",
          [
            "Texture",
            "Event",
            "Folder",
            "Material slot"
          ],
          1,
          "Events are entry points for logic."
        ],
        [
          "A node has data connected but no execution path. What happens?",
          [
            "Always runs",
            "Runs every frame",
            "Does not run from that path",
            "Crashes"
          ],
          2,
          "Actions need execution to reach them."
        ]
      ],
      "stretch": {
        "title": "Prove the Order",
        "task": "Build a three-action chain and change the order without deleting the actions.",
        "requirements": [
          "One Event",
          "Three actions",
          "Prediction before test",
          "Explain the final order"
        ]
      },
      "challenge": {
        "title": "What Fires When?",
        "task": "Report two different gameplay events with different messages.",
        "requirements": [
          "Two Events",
          "Clear output",
          "No Event Tick",
          "Explain when each fires"
        ],
        "hints": [
          "Use events with clearly different triggers."
        ]
      },
      "experience": {
        "game": "Fortnite",
        "focus": "Events and reactions",
        "play": "Play a match and identify moments where one event causes several responses.",
        "watch": "Watch a Fortnite match and pause at clear event→response moments.",
        "observe": [
          "What event occurred?",
          "What happened immediately after?",
          "Which response might need data from the event?"
        ],
        "search": "Fortnite full match gameplay"
      },
      "homework": {
        "title": "Event → Response",
        "task": "Write five gameplay moments as EVENT → RESPONSE.",
        "evidence": "Five pairs plus one simple flow diagram.",
        "stretch": "For one event, list the data it would need to pass on."
      },
      "common": [
        "Follow the white wire when debugging.",
        "Use Print String to prove an Event fires before debugging later nodes.",
        "Avoid Event Tick unless something genuinely needs per-frame updates."
      ],
      "goodPractice": "Prove where execution stops before randomly changing nodes.",
      "visual": {
        "type": "diagram",
        "src": "assets/diagrams/execution-flow.svg",
        "caption": "Original classroom diagram: event and execution flow."
      },
      "bookRef": "Chapter 2: Events, actions and execution path",
      "explanation": {
        "what": "Events are entry points into Blueprint logic. They represent something happening: the game starting, a player pressing a button, an Actor overlapping a trigger or an object being hit. Execution then follows the white wires from that event into the actions that should happen next.",
        "why": "A Blueprint can contain perfectly valid nodes and still do nothing if execution never reaches them. Understanding events and execution order is the foundation of debugging because it lets you ask 'did this event fire?' and 'where did the execution stop?'",
        "mental": "Think of an Event as the starting gun. The data might already exist, but nothing runs until an execution path is triggered.",
        "example": "Event BeginPlay could set the player's starting health and then update the HUD. An overlap event could activate a checkpoint, while an input event could attempt an interaction.",
        "use": "Use Events whenever gameplay needs to react to something happening. Avoid treating Event Tick as a default solution; per-frame execution is only appropriate when the system genuinely needs continuous updates."
      },
      "projectTask": {
        "name": "Facility Comes Online",
        "mission": "Give the game a clear event-driven start.",
        "build": "On BeginPlay, initialise at least one piece of game state and show temporary debug feedback proving the execution order.",
        "proof": [
          "BeginPlay starts the chain",
          "At least 3 ordered actions",
          "Debug output proves order",
          "No unnecessary Event Tick"
        ],
        "polish": "Replace one debug message with visible world feedback."
      }
    },
    {
      "id": "variables",
      "path": "blueprints",
      "order": 2,
      "title": "Variables & Data Types",
      "short": "Let the game remember health, ammo, state and references.",
      "difficulty": "Beginner",
      "duration": "40 min",
      "xp": 150,
      "aim": "Create, read and change variables using suitable data types.",
      "goals": [
        "Choose sensible variable types",
        "Get and Set values",
        "Use default values",
        "Expose a designer-facing variable"
      ],
      "concepts": [
        [
          "Boolean",
          "True/false state."
        ],
        [
          "Integer",
          "Whole-number count."
        ],
        [
          "Float",
          "Number that can contain decimals."
        ],
        [
          "Object Reference",
          "Points to another Unreal object or Actor."
        ]
      ],
      "guided": [
        "Create Health as a Float with default 100.",
        "Create IsActive as a Boolean.",
        "Get Health and print it on BeginPlay.",
        "Set Health to a new value and print again.",
        "Make one variable Instance Editable.",
        "Add a useful Tooltip."
      ],
      "quiz": [
        [
          "Best type for IsDoorLocked?",
          [
            "Float",
            "Boolean",
            "Vector",
            "Text"
          ],
          1,
          "True/false states are Booleans."
        ],
        [
          "Best type for exactly 12 bullets?",
          [
            "Integer",
            "Boolean",
            "Material",
            "Transform"
          ],
          0,
          "Integers store whole-number counts."
        ],
        [
          "Get vs Set?",
          [
            "Get reads; Set changes",
            "Get deletes; Set compiles",
            "Same thing",
            "Set only works on text"
          ],
          0,
          "Get reads; Set assigns."
        ]
      ],
      "stretch": {
        "title": "Health With Limits",
        "task": "Add MaxHealth and make sure Health cannot exceed it.",
        "requirements": [
          "Health",
          "MaxHealth",
          "Health changes",
          "Final value respects the maximum"
        ]
      },
      "challenge": {
        "title": "Reusable Healing Pickup",
        "task": "Create a pickup that changes a player's health without a full node solution.",
        "requirements": [
          "HealAmount editable",
          "Health cannot exceed MaxHealth",
          "Pickup feedback",
          "Pickup cannot heal forever unless designed to"
        ],
        "hints": [
          "Prove the overlap first.",
          "Think CurrentHealth + HealAmount.",
          "Look for a way to constrain a numeric value."
        ]
      },
      "experience": {
        "game": "Overwatch 2",
        "focus": "Health as game state",
        "play": "Observe damage, healing and health limits during a match.",
        "watch": "Watch gameplay featuring damage and healing.",
        "observe": [
          "When does health change?",
          "How is maximum health communicated?",
          "What feedback accompanies the value changing?"
        ],
        "search": "Overwatch 2 healing gameplay"
      },
      "homework": {
        "title": "Variable Hunt",
        "task": "Identify ten values any game needs to remember and assign each a sensible name and type.",
        "evidence": "Ten variable names, types and reasons.",
        "stretch": "Mark which values belong to the player, an Actor or the overall game."
      },
      "common": [
        "A Boolean is a state, not a number.",
        "Avoid Variable1-style names.",
        "If a variable is exposed, explain it with a Tooltip."
      ],
      "goodPractice": "Meaningful names and Tooltips make Blueprints usable by other people.",
      "visual": {
        "type": "book",
        "src": "assets/book/variables-panel.webp",
        "caption": "Reference figure from the supplied book: variables in My Blueprint."
      },
      "bookRef": "Chapter 2: Storing values in variables",
      "explanation": {
        "what": "Variables are named pieces of data that a Blueprint can remember. They can represent numbers, true/false states, text, positions, Classes or references to specific objects. Reading a variable is a Get; changing its stored value is a Set.",
        "why": "Almost every game mechanic depends on state. Health, ammunition, whether a door is locked, the current objective and which Actor the player is interacting with all require information to be stored somewhere.",
        "mental": "Think of a variable as a labelled box. The label tells you what the information means, the type controls what kind of value can go inside, and the current value is what the game remembers at that moment.",
        "example": "A door might store IsLocked as a Boolean and OpenAngle as a Float. A player might store Health as a Float, Ammo as an Integer and CurrentWeapon as an object reference.",
        "use": "Use variables for information that needs to persist between execution steps. Choose the smallest clear type that describes the data and give exposed variables useful names, Categories and Tooltips."
      },
      "projectTask": {
        "name": "Player & Facility State",
        "mission": "Create the memory your game needs.",
        "build": "Add meaningful state such as Health, HasSecurityCard, PowerRestored and CurrentObjective. Put each value on the Blueprint/system that should own it.",
        "proof": [
          "At least 4 meaningful variables",
          "Correct data types",
          "Useful defaults",
          "Exposed variables use Tooltips"
        ],
        "polish": "Group related designer-facing variables into Categories."
      }
    },
    {
      "id": "branches",
      "path": "blueprints",
      "order": 3,
      "title": "Branches: Decisions & Conditions",
      "short": "Make your Blueprint choose what happens next using true/false logic.",
      "difficulty": "Beginner",
      "duration": "45 min",
      "xp": 160,
      "aim": "Understand how a Branch evaluates a true/false condition and use it to control a real gameplay decision.",
      "goals": [
        "Explain what a Branch does in plain English",
        "Create a Boolean condition and connect it correctly",
        "Predict the True and False execution paths",
        "Use comparisons such as Health > 0 as a condition",
        "Apply Branch logic to a real gameplay system"
      ],
      "concepts": [
        [
          "Boolean",
          "A value with only two states: True or False."
        ],
        [
          "Comparison",
          "A check such as Health > 0 or Ammo == 0 that produces a Boolean result."
        ],
        [
          "Branch",
          "A Blueprint decision node that sends execution down either the True or False path."
        ],
        [
          "Logical AND",
          "Returns True only when every connected condition is True."
        ],
        [
          "Logical OR",
          "Returns True when at least one connected condition is True."
        ]
      ],
      "guided": [
        "Create HasPower as a Boolean.",
        "Connect BeginPlay to a Branch.",
        "Use HasPower as Condition.",
        "Print different messages for True and False.",
        "Replace HasPower with Health > 0.",
        "Combine two conditions and test edge cases."
      ],
      "quiz": [
        [
          "What type of value must a Branch Condition evaluate to?",
          [
            "Boolean",
            "Vector",
            "Sound",
            "Actor Class"
          ],
          0,
          "A Branch has only True and False outcomes, so the Condition must evaluate to a Boolean."
        ],
        [
          "What does Health > 0 produce?",
          [
            "String",
            "Boolean",
            "Material",
            "Transform"
          ],
          1,
          "A comparison such as >, < or == produces True or False."
        ],
        [
          "If HasKey is False, which Branch output runs?",
          [
            "True",
            "False",
            "Both",
            "Neither"
          ],
          1,
          "Only the False execution output runs when the Condition evaluates to False."
        ],
        [
          "Which is the strongest test of a Branch?",
          [
            "Only test the success path",
            "Only test the failure path",
            "Test both True and False deliberately",
            "Add more nodes before testing"
          ],
          2,
          "A decision system is not proven until you have deliberately tested both outcomes."
        ]
      ],
      "stretch": {
        "title": "Access granted / denied",
        "task": "Create a keycard check that gives different feedback for success and failure.",
        "requirements": [
          "Boolean state named clearly",
          "One Branch with readable True and False paths",
          "Access granted feedback",
          "Access denied feedback",
          "Both paths tested"
        ]
      },
      "challenge": {
        "title": "Two-condition security door",
        "task": "Make a door succeed only when the player has the keycard AND facility power is restored.",
        "requirements": [
          "HasAccessCard state",
          "PowerOn state",
          "Both conditions must matter",
          "Useful failure feedback",
          "Graph remains readable"
        ],
        "hints": [
          "Prove each Boolean independently before combining them.",
          "Look for a logical operator that is only True when both inputs are True.",
          "Test all four combinations: FF, FT, TF and TT."
        ]
      },
      "experience": {
        "game": "Resident Evil 4",
        "focus": "Conditional interactions and gated progression",
        "play": "Find a locked object, gated route or interaction that requires an item or state change. Pay attention to what the game allows before and after the requirement is satisfied.",
        "watch": "Watch exploration gameplay involving keys, locked doors or progression gates. Pause when the player fails an interaction and again when it later succeeds.",
        "observe": [
          "What condition is the game probably checking?",
          "What is the True outcome?",
          "What is the False outcome?",
          "How does the player understand why the interaction failed?",
          "What state changes so the same interaction succeeds later?"
        ],
        "search": "Resident Evil 4 remake locked doors keys gameplay"
      },
      "homework": {
        "title": "Find Branch logic in games",
        "task": "Find two game situations that can be described as a true/false decision. For each, write the question being checked, the True outcome and the False outcome.",
        "evidence": "Two short examples. A screenshot is optional; the important evidence is your explanation of the condition and both outcomes.",
        "stretch": "Draw a simple flow diagram for one example, then add a second condition that would make the rule more complex."
      },
      "common": [
        "No meaningful value is connected to Condition.",
        "The Boolean exists but is never changed anywhere in the game.",
        "Only the True path was tested, so the failure path is broken unnoticed.",
        "The logic is backwards: success is accidentally wired to False.",
        "The Branch has become the start of a huge unreadable chain instead of calling a clearer function.",
        "The student expects the Branch to remember state; it does not."
      ],
      "goodPractice": "Name the state as a question you can answer clearly: HasKey, IsDead, CanInteract, PowerOn. Keep each outcome readable, test both paths, and use Print String or breakpoints to inspect the value feeding Condition when debugging.",
      "visual": {
        "type": "diagram",
        "src": "assets/diagrams/branch-flow.svg",
        "caption": "Original classroom diagram: a Branch choosing between open and locked behaviour."
      },
      "bookRef": "Blueprints Visual Scripting for Unreal Engine 5, Chapter 2: relational/logical operators and flow control",
      "explanation": {
        "what": "A Branch is Unreal Engine's visual equivalent of an if statement. Execution reaches the node, the Condition is checked, and only one output runs: True or False.",
        "why": "Games constantly make decisions. Doors check access, weapons check ammunition, enemies check whether they have a target, and player systems check health, stamina or state before allowing an action.",
        "mental": "Think of a Branch as a question with exactly two answers. The Branch itself is simple; the important skill is deciding what question the game should ask and where that state comes from.",
        "example": "A security door can check HasAccessCard. True opens the door; False keeps it closed and displays Access denied. A comparison such as Health > 0 can feed the Condition directly because the comparison already produces True or False.",
        "use": "Use a Branch when behaviour genuinely changes based on a condition. Do not add one just because you can: if there is no meaningful decision, a Branch only adds clutter."
      },
      "projectTask": {
        "name": "Security Access Check",
        "mission": "Use a Branch to control whether the player can progress through a secured route.",
        "build": "Choose a requirement that fits your theme: access card, restored power, completed objective, activated rune or another stored state. When the player interacts, check that state with a Branch. True should unlock progression; False should keep the route blocked and explain why.",
        "proof": [
          "The Condition comes from meaningful stored state or a comparison",
          "True and False paths are both deliberately tested",
          "The success path changes progression",
          "The failure path gives clear player feedback",
          "The graph is named and organised clearly"
        ],
        "polish": "Add a second requirement using AND, then give the player different audiovisual feedback for success and failure."
      },
      "deepDive": {
        "find": {
          "title": "Where do I find a Branch?",
          "steps": [
            "Open the Event Graph or another Blueprint graph.",
            "Right-click empty graph space.",
            "Search for Branch and place the node.",
            "You can also drag from a Boolean pin and search for Branch."
          ],
          "note": "If Context Sensitive is enabled, dragging from a Boolean pin is often the quickest route because Unreal already knows you need something that accepts True/False data."
        },
        "anatomy": [
          [
            "Execution input",
            "The white execution wire from the previous action enters here."
          ],
          [
            "Condition",
            "The purple Boolean input. It must evaluate to True or False."
          ],
          [
            "True",
            "This white execution output runs only when the Condition is True."
          ],
          [
            "False",
            "This white execution output runs only when the Condition is False."
          ]
        ],
        "process": [
          "Execution reaches the Branch.",
          "The Condition is evaluated at that moment.",
          "If the result is True, execution leaves through True.",
          "If the result is False, execution leaves through False.",
          "The Branch does not remember the answer after that execution has passed."
        ],
        "examples": [
          {
            "title": "Locked security door",
            "question": "Does the player have the access card?",
            "condition": "HasAccessCard",
            "true": "Open the door and show success feedback.",
            "false": "Keep the door closed and show Access denied.",
            "why": "A clear yes/no gameplay rule with visibly different outcomes."
          },
          {
            "title": "Player alive check",
            "question": "Is the player's health above zero?",
            "condition": "Health > 0",
            "true": "Continue normal player behaviour.",
            "false": "Trigger the death behaviour.",
            "why": "This demonstrates that a Branch can use the result of a comparison; the Condition does not have to be a named Boolean variable."
          }
        ],
        "remember": [
          "A Branch does not store data.",
          "The Condition is checked when execution reaches the node.",
          "Test both True and False deliberately.",
          "If a Branch behaves incorrectly, inspect the value feeding Condition before rebuilding the graph."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create a safe test Blueprint",
          "do": "Create an Actor Blueprint called BP_BranchDemo and place an instance in the level.",
          "why": "A small isolated test makes it easier to understand the decision before combining it with a full door system.",
          "check": "The Blueprint exists in the Content Browser and an instance is in the level."
        },
        {
          "title": "Create the state",
          "do": "Create a Boolean variable named HasKey. Leave its default value False.",
          "why": "HasKey represents game state: the player either has the key or does not.",
          "check": "The variable type is Boolean and its default checkbox is unticked."
        },
        {
          "title": "Create an event to test",
          "do": "For this isolated practice, use an input/event you already know or Event BeginPlay. Connect it towards a new Branch node.",
          "why": "A Branch only does something when execution reaches it.",
          "check": "A white execution wire reaches the Branch."
        },
        {
          "title": "Read the state",
          "do": "Drag HasKey into the graph as Get and connect it to the Branch Condition.",
          "why": "Get reads the current stored value without changing it.",
          "check": "The purple Boolean wire connects HasKey to Condition."
        },
        {
          "title": "Build the True path",
          "do": "From True, add Print String with the message Door opens.",
          "why": "This gives immediate visible feedback when the condition succeeds.",
          "check": "True is connected to Door opens."
        },
        {
          "title": "Build the False path",
          "do": "From False, add Print String with the message Door is locked.",
          "why": "A failed interaction still needs useful player feedback.",
          "check": "False is connected to Door is locked."
        },
        {
          "title": "Predict before testing",
          "do": "Before pressing Play, write down which message you expect while HasKey is False.",
          "why": "Prediction proves you are reasoning about the graph instead of only copying nodes.",
          "check": "Your prediction is Door is locked."
        },
        {
          "title": "Test the False path",
          "do": "Compile, Play and trigger the event.",
          "why": "You are deliberately proving one side of the decision.",
          "check": "Door is locked appears. If it does not, inspect the execution wire and HasKey value."
        },
        {
          "title": "Test the True path",
          "do": "Stop, set HasKey to True, compile and test again.",
          "why": "A Branch is not tested properly until both outcomes have been proven.",
          "check": "Door opens appears."
        },
        {
          "title": "Replace stored state with a comparison",
          "do": "Create an Integer or Float called Health, set it above zero, compare Health > 0 and feed that result into the Branch Condition.",
          "why": "Comparisons already produce a Boolean, so they can drive a Branch directly.",
          "check": "Changing Health between a positive value and 0 changes the execution route."
        },
        {
          "title": "Try a combined condition",
          "do": "Create HasPower and combine HasKey AND HasPower before the Branch.",
          "why": "Many real game rules require more than one piece of state.",
          "check": "The success route only runs when both values are True."
        }
      ],
      "visuals": [
        {
          "type": "diagram",
          "src": "assets/diagrams/branch-node-anatomy.svg",
          "caption": "Original classroom diagram: the four parts of a Branch node and what each pin means."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/branch-locked-door-example.svg",
          "caption": "Original classroom example: HasAccessCard chooses between opening the door and showing Access denied."
        },
        {
          "type": "motion",
          "src": "assets/diagrams/branch-decision-demo.svg",
          "caption": "Animated SVG: execution alternates between the True and False paths to reinforce that only one route runs each time."
        }
      ],
      "evidencePrompt": {
        "show": [
          "A screenshot showing the Branch and the value feeding Condition",
          "Evidence that the False path works",
          "Evidence that the True path works",
          "The mechanic running inside your main game rather than only BP_BranchDemo"
        ],
        "reflection": [
          "What condition did your Branch check?",
          "What happened on the True path?",
          "What happened on the False path?",
          "What went wrong during testing, and how did you diagnose it?"
        ]
      }
    },
    {
      "id": "functions",
      "path": "blueprints",
      "order": 4,
      "title": "Functions & Macros",
      "short": "Package repeated logic behind clear names.",
      "difficulty": "Intermediate",
      "duration": "45 min",
      "xp": 180,
      "aim": "Create reusable Functions with inputs and outputs and choose when abstraction helps.",
      "goals": [
        "Create a Function",
        "Add inputs and outputs",
        "Use a local variable",
        "Recognise repeated logic worth extracting"
      ],
      "concepts": [
        [
          "Function",
          "Named reusable logic with inputs/outputs."
        ],
        [
          "Input",
          "Data passed into a Function."
        ],
        [
          "Output",
          "Data returned by a Function."
        ],
        [
          "Local Variable",
          "Temporary data visible only inside the Function."
        ]
      ],
      "guided": [
        "Create BP_FunctionPractice.",
        "Create CalculateDamage.",
        "Add BaseDamage and Multiplier Float inputs.",
        "Return FinalDamage.",
        "Call it from BeginPlay and print the result.",
        "Call it again with different values."
      ],
      "quiz": [
        [
          "Why use a Function?",
          [
            "Reuse and maintain logic",
            "Functions cannot accept inputs",
            "Copy/paste is always better",
            "Only UI uses Functions"
          ],
          0,
          "Functions reduce duplication and clarify intent."
        ],
        [
          "Local variable?",
          [
            "Temporary Function-only value",
            "Project-wide texture",
            "Level type",
            "Build setting"
          ],
          0,
          "Local variables are scoped to the Function."
        ]
      ],
      "stretch": {
        "title": "Safer Damage",
        "task": "Improve CalculateDamage so it never returns a negative value.",
        "requirements": [
          "Keep inputs",
          "Valid output",
          "Test three values",
          "Explain the safety rule"
        ]
      },
      "challenge": {
        "title": "Refactor the Monster",
        "task": "Replace repeated node chains in a messy Blueprint with well-named Functions.",
        "requirements": [
          "Two Functions",
          "Less duplication",
          "Names describe intent",
          "Behaviour unchanged"
        ],
        "hints": [
          "Look for node groups that answer one question or do one job."
        ]
      },
      "experience": {
        "game": "Any systemic game",
        "focus": "Reusable rules",
        "play": "Look for behaviours repeated across many objects.",
        "watch": "Watch gameplay and identify one rule reused in different situations.",
        "observe": [
          "What repeats?",
          "Which values change each time?",
          "What would become a Function input?"
        ],
        "search": "gameplay repeated systems interactions"
      },
      "homework": {
        "title": "Function Design",
        "task": "Design three game Functions on paper with name, purpose, inputs and outputs.",
        "evidence": "Three Function cards or a table.",
        "stretch": "Choose one that needs a local variable and explain why."
      },
      "common": [
        "A Function should do one recognisable job.",
        "Use inputs rather than hard-coding values that should vary.",
        "Do not hide unrelated nodes merely to shrink the Event Graph."
      ],
      "goodPractice": "If a block has a clear name and may be reused, a Function is often a better home.",
      "visual": {
        "type": "book",
        "src": "assets/book/function-example.webp",
        "caption": "Reference figure from the supplied book: a simple Function example."
      },
      "bookRef": "Chapter 2: Macros versus functions versus events",
      "explanation": {
        "what": "A Function is a named block of reusable logic. It can accept inputs, perform work and return outputs. Functions help turn a large graph into smaller pieces that describe intent instead of exposing every low-level step at once.",
        "why": "Repeated node chains create maintenance problems. If damage calculation is copied into five places and the formula changes, every copy must be found and updated. One Function creates a single source of truth.",
        "mental": "Think of a Function like a machine with labelled sockets. You feed values in, the machine performs one clear job, and it can return a result.",
        "example": "CalculateDamage could accept BaseDamage and Multiplier and return FinalDamage. CanAffordItem could accept Cost and CurrentCurrency and return a Boolean.",
        "use": "Use Functions for logic that performs one recognisable job, particularly when it is reused. Inputs are usually better than hard-coded values when the behaviour should work in different situations."
      },
      "projectTask": {
        "name": "Refactor a Game Rule",
        "mission": "Turn repeated project logic into a named reusable Function.",
        "build": "Identify a piece of logic now repeated or becoming complex and extract it into a Function with useful inputs/outputs.",
        "proof": [
          "Function performs one clear job",
          "Useful inputs/outputs",
          "At least 2 calls or a strong reuse justification",
          "Behaviour unchanged after refactor"
        ],
        "polish": "Create a validation Function such as CanInteract, CanOpenDoor or CanTakeDamage."
      }
    },
    {
      "id": "framework",
      "path": "framework",
      "order": 1,
      "title": "Gameplay Framework",
      "short": "Know where rules, player bodies and persistent data belong.",
      "difficulty": "Intermediate",
      "duration": "50 min",
      "xp": 200,
      "aim": "Explain the roles of key Gameplay Framework classes.",
      "goals": [
        "Distinguish Actor, Pawn and Character",
        "Explain PlayerController",
        "Explain GameMode",
        "Explain when GameInstance is useful"
      ],
      "concepts": [
        [
          "Pawn",
          "An Actor that can be possessed by a Controller."
        ],
        [
          "Character",
          "A Pawn specialised for humanoid-style movement."
        ],
        [
          "PlayerController",
          "Represents the player's controlling 'brain'."
        ],
        [
          "GameMode",
          "Defines game rules and default gameplay classes."
        ],
        [
          "GameInstance",
          "Persists for the lifetime of the game and across level loads."
        ]
      ],
      "guided": [
        "Open the Third Person character and identify its parent Class.",
        "Inspect the project GameMode.",
        "Find which Pawn/Character the GameMode uses.",
        "Create a simple custom GameMode.",
        "Create a GameInstance Blueprint.",
        "Store a test value in GameInstance and discuss why it survives a level change."
      ],
      "quiz": [
        [
          "Which Class commonly defines game rules?",
          [
            "Material",
            "GameMode",
            "StaticMesh",
            "AudioComponent"
          ],
          1,
          "GameMode defines rules and default gameplay classes."
        ],
        [
          "Which can persist data across level loads?",
          [
            "GameInstance",
            "Ordinary level Actor",
            "Static Mesh",
            "Collision Box"
          ],
          0,
          "GameInstance exists for the game session rather than one level."
        ]
      ],
      "stretch": {
        "title": "Put It in the Right Place",
        "task": "Sort ten example responsibilities into Character, PlayerController, GameMode, GameInstance or another Actor.",
        "requirements": [
          "Justify every choice",
          "Identify one ambiguous case",
          "Discuss state ownership"
        ]
      },
      "challenge": {
        "title": "Framework Mini-Design",
        "task": "Plan the core classes for a small game before building it.",
        "requirements": [
          "Player body",
          "Player control",
          "Game rules",
          "Cross-level data",
          "One reusable gameplay Actor"
        ],
        "hints": [
          "Do not make GameInstance own everything just because it persists."
        ]
      },
      "experience": {
        "game": "Any game with levels",
        "focus": "Rules vs persistent state",
        "play": "Think about what resets when a level changes and what persists.",
        "watch": "Watch a game transition between levels/rounds.",
        "observe": [
          "What data survives?",
          "What resets?",
          "Which rules apply to the whole match?"
        ],
        "search": "game level transition gameplay round restart"
      },
      "homework": {
        "title": "Framework Map",
        "task": "Draw a simple diagram showing Character, PlayerController, GameMode and GameInstance and label one responsibility for each.",
        "evidence": "One labelled framework diagram.",
        "stretch": "Add one system that should not belong to any of those and explain where it goes."
      },
      "common": [
        "Do not use GameInstance as a universal dumping ground.",
        "GameMode is about rules, not every object's internal state.",
        "A Pawn is the controllable body; a Controller is conceptually the controlling brain."
      ],
      "goodPractice": "Choose a class because its lifetime and responsibility fit the problem.",
      "visual": {
        "type": "diagram",
        "src": "assets/diagrams/communication.svg",
        "caption": "Original classroom relationship diagram; use alongside the framework notes."
      },
      "bookRef": "Chapter 3: OOP and the Gameplay Framework",
      "explanation": {
        "what": "Unreal's Gameplay Framework provides Classes with different responsibilities and lifetimes. A Pawn is a possessable body, a Character is a Pawn with common character movement features, a Controller represents controlling logic, GameMode defines game rules, and GameInstance survives level changes during the running game.",
        "why": "Putting logic in the wrong framework Class can make a project difficult to expand. The correct choice depends on what owns the behaviour and how long the data needs to exist.",
        "mental": "Think about two questions: 'whose responsibility is this?' and 'how long should it live?'. Those questions usually narrow down the correct framework Class more effectively than memorising node names.",
        "example": "Player health might live on the Character or a health Component. Match rules belong in GameMode. A selected character or session setting that must survive a level transition could live in GameInstance.",
        "use": "Use the Gameplay Framework when the problem relates to player bodies, controllers, game rules, global match state or data that must survive level loading."
      },
      "projectTask": {
        "name": "Put the Game in the Right Classes",
        "mission": "Decide where the project's core responsibilities live.",
        "build": "Review player state, game rules and cross-level/session data. Move at least one responsibility out of an unsuitable Blueprint.",
        "proof": [
          "Character/Pawn responsibility identified",
          "GameMode rule identified",
          "GameInstance only used where lifetime fits",
          "One ownership decision documented"
        ],
        "polish": "Draw a simple class/responsibility diagram for the project."
      }
    },
    {
      "id": "references-casting",
      "path": "framework",
      "order": 2,
      "title": "References & Casting",
      "short": "Get hold of the object you actually want to talk to.",
      "difficulty": "Intermediate",
      "duration": "50 min",
      "xp": 210,
      "aim": "Use object references and understand what Casting is checking.",
      "goals": [
        "Explain an object reference",
        "Obtain a reference from an event or query",
        "Use Cast when type verification is genuinely needed",
        "Handle Cast failure"
      ],
      "concepts": [
        [
          "Reference",
          "A value that points to a specific object instance."
        ],
        [
          "Cast",
          "Checks whether a reference can be treated as a specific Class type."
        ],
        [
          "Cast Failed",
          "Execution path used when the referenced object is not that type."
        ],
        [
          "Dependency",
          "A relationship where one object relies on another."
        ]
      ],
      "guided": [
        "Use an overlap event to obtain Other Actor.",
        "Print the Other Actor name.",
        "Cast Other Actor to the player Character Class.",
        "Use the successful Cast result to read one player variable.",
        "Test with a non-player Actor and observe Cast Failed.",
        "Discuss whether an Interface would be better for a more generic interaction."
      ],
      "quiz": [
        [
          "Casting mainly answers…",
          [
            "Is this reference this Class/type?",
            "What colour is this material?",
            "How many frames per second?",
            "Where is the level saved?"
          ],
          0,
          "Casting verifies the type of a reference."
        ],
        [
          "If a Cast fails…",
          [
            "The reference was not that target type",
            "Unreal must close",
            "Every variable resets",
            "The asset is deleted"
          ],
          0,
          "Cast failure means the object is not compatible with that Class."
        ]
      ],
      "stretch": {
        "title": "Cast Failure on Purpose",
        "task": "Create a test where one Actor succeeds and another fails the Cast.",
        "requirements": [
          "Success path",
          "Failed path",
          "Clear debug messages",
          "Explain why each result occurs"
        ]
      },
      "challenge": {
        "title": "Remove an Unnecessary Cast",
        "task": "Find a system where direct references or an Interface would be clearer than repeated Casting.",
        "requirements": [
          "Identify the original dependency",
          "Propose replacement",
          "Explain why it is more reusable"
        ],
        "hints": [
          "Casting is useful, but not every communication problem is a type-checking problem."
        ]
      },
      "experience": {
        "game": "Any interaction-heavy game",
        "focus": "Specific vs generic interactions",
        "play": "Compare interactions that only work with one object type against generic interactions.",
        "watch": "Watch gameplay featuring doors, pickups and NPC interactions.",
        "observe": [
          "Which interactions are object-specific?",
          "Which share a common action?",
          "Where would a generic Interface be useful?"
        ],
        "search": "gameplay doors pickups NPC interaction"
      },
      "homework": {
        "title": "Reference Sources",
        "task": "List five ways a Blueprint might obtain a useful reference during gameplay.",
        "evidence": "Five reference sources plus an example use for each.",
        "stretch": "Mark which references are likely temporary and which should be stored."
      },
      "common": [
        "A Cast does not magically find an object; you need a reference first.",
        "Handle Cast failure during debugging.",
        "Repeated Casting to many Classes can be a sign that a more generic communication method is needed."
      ],
      "goodPractice": "Ask 'how did I get this reference?' before asking 'what should I Cast it to?'",
      "visual": {
        "type": "book",
        "src": "assets/book/casting-example.webp",
        "caption": "Reference figure from the supplied book: Casting in Blueprints."
      },
      "bookRef": "Chapter 4: Casting in Blueprints",
      "explanation": {
        "what": "A reference points to a specific object instance. Casting does not find that object; it checks whether a reference you already have can safely be treated as a particular Class type.",
        "why": "Students often use Cast nodes as if they are object-search tools. That leads to fragile graphs and confusion. First obtain the reference, then decide whether you actually need to verify its type.",
        "mental": "Think of a reference as having someone's phone number. Casting is asking 'is the person at this number actually the type of person I expect?' It does not magically discover the number for you.",
        "example": "An overlap event gives you Other Actor. You can Cast that reference to your player Character if the trigger only cares about that specific Class. If many unrelated objects should respond to the same interaction message, an Interface may be cleaner.",
        "use": "Use Casting when behaviour genuinely depends on a specific Class. Avoid long chains of Casts to many different Classes for generic interactions."
      },
      "projectTask": {
        "name": "Talk to the Player",
        "mission": "Make one world object safely communicate with the player.",
        "build": "Obtain a real player reference from an event/query, prove what object it points to and use a Cast only where a specific player Class is genuinely required.",
        "proof": [
          "Reference source is clear",
          "Successful path tested",
          "Failed path understood",
          "No Cast used as an object-finder"
        ],
        "polish": "Remove one unnecessary repeated Cast by storing a useful reference or using a more generic method."
      }
    },
    {
      "id": "interfaces-dispatchers",
      "path": "framework",
      "order": 3,
      "title": "Interfaces & Event Dispatchers",
      "short": "Build communication that scales beyond one tightly-coupled pair of Blueprints.",
      "difficulty": "Intermediate",
      "duration": "60 min",
      "xp": 240,
      "aim": "Choose between direct communication, Interfaces and Event Dispatchers.",
      "goals": [
        "Describe an Interface message",
        "Describe an Event Dispatcher",
        "Recognise one-to-one vs broadcast communication",
        "Keep state owned by the correct Blueprint"
      ],
      "concepts": [
        [
          "Blueprint Interface",
          "Defines messages that different Blueprints can implement."
        ],
        [
          "Event Dispatcher",
          "Broadcasts an event that other objects can bind to."
        ],
        [
          "Binding",
          "Connects a listener to a Dispatcher."
        ],
        [
          "Loose Coupling",
          "Reduces assumptions about the exact Class on the other side."
        ]
      ],
      "guided": [
        "Create an Interact Blueprint Interface.",
        "Add an Interact message.",
        "Implement it in two different Actors.",
        "Call the Interface message from a player interaction test.",
        "Create a simple Event Dispatcher in one Blueprint.",
        "Bind another Blueprint to it and prove the broadcast fires."
      ],
      "quiz": [
        [
          "Best for many different Actors sharing an Interact message?",
          [
            "Blueprint Interface",
            "Hard-coded Cast chain",
            "Texture",
            "Level name"
          ],
          0,
          "Interfaces allow different Classes to implement the same message."
        ],
        [
          "A Dispatcher is useful when…",
          [
            "One event should notify listeners",
            "You need a mesh",
            "You are renaming a folder",
            "You want a Float"
          ],
          0,
          "Dispatchers broadcast events to bound listeners."
        ]
      ],
      "stretch": {
        "title": "Two Interactables",
        "task": "Make two unrelated Actor Classes respond differently to the same Interact Interface.",
        "requirements": [
          "One Interface",
          "Two implementations",
          "Different results",
          "Caller does not need two Casts"
        ]
      },
      "challenge": {
        "title": "Alarm Network",
        "task": "Use a Dispatcher so one alarm event can notify multiple listener objects.",
        "requirements": [
          "Broadcaster",
          "At least two listeners",
          "Binding works",
          "Listeners keep their own behaviour"
        ],
        "hints": [
          "The broadcaster should announce the event, not control every listener's internals."
        ]
      },
      "experience": {
        "game": "Hitman",
        "focus": "Systemic interactions",
        "play": "Observe how one event can affect multiple systems or object types.",
        "watch": "Watch Hitman sandbox gameplay with alarms/distractions.",
        "observe": [
          "Which systems receive the same event?",
          "Which objects react differently?",
          "What should the broadcaster know vs not know?"
        ],
        "search": "Hitman alarm distraction sandbox gameplay"
      },
      "homework": {
        "title": "Communication Choice",
        "task": "For six gameplay examples, choose Direct Reference, Cast, Interface or Dispatcher and justify each.",
        "evidence": "Six choices with one-sentence reasons.",
        "stretch": "Find one example where two approaches could both work and compare them."
      },
      "common": [
        "Interfaces define a contract; they do not automatically find targets.",
        "Dispatchers need listeners to bind.",
        "Do not move a listener's internal behaviour into the broadcaster."
      ],
      "goodPractice": "Communication should request behaviour; the receiving Blueprint should usually own how that behaviour is performed.",
      "visual": {
        "type": "book",
        "src": "assets/book/dispatcher-details.webp",
        "caption": "Reference figure from the supplied book: Event Dispatcher setup/details."
      },
      "bookRef": "Chapter 4: Direct communication, Casting and Event Dispatchers",
      "explanation": {
        "what": "Blueprint Interfaces and Event Dispatchers are two ways to reduce tight dependencies. An Interface lets different Classes promise that they can respond to the same message. A Dispatcher lets one object broadcast that something happened while listeners decide how they react.",
        "why": "As projects grow, direct references and Casts everywhere become difficult to maintain. More flexible communication lets systems interact without requiring every Blueprint to understand every other Blueprint's internal details.",
        "mental": "An Interface is like a common language: different objects can all understand 'Interact'. A Dispatcher is like an announcement system: the broadcaster announces 'AlarmTriggered' and any registered listener can react.",
        "example": "Doors, pickups and terminals could all implement an Interact Interface differently. An alarm Blueprint could broadcast AlarmTriggered, allowing lights, doors and enemies to respond independently.",
        "use": "Use Interfaces when different Classes need the same callable behaviour. Use Dispatchers when one event may need to notify one or more listeners without directly controlling them."
      },
      "projectTask": {
        "name": "Universal Interact",
        "mission": "Create the interaction language for the whole game.",
        "build": "Create an Interact Blueprint Interface and implement it differently in at least two unrelated Actor Classes such as a door, pickup, terminal or switch.",
        "proof": [
          "One Blueprint Interface",
          "Two different implementations",
          "Player caller does not need separate Casts",
          "Each target owns its own reaction"
        ],
        "polish": "Add an Event Dispatcher so one system event can notify multiple independent listeners."
      }
    },
    {
      "id": "collision",
      "path": "gameplay",
      "order": 1,
      "title": "Collision & Overlaps",
      "short": "Detect entering, leaving, touching and blocking in a controlled way.",
      "difficulty": "Beginner",
      "duration": "45 min",
      "xp": 180,
      "aim": "Configure collision and use overlap events to trigger gameplay.",
      "goals": [
        "Add collision Components",
        "Use Begin/End Overlap",
        "Use Other Actor",
        "Explain Block vs Overlap vs Ignore"
      ],
      "concepts": [
        [
          "Block",
          "Stops movement according to collision settings."
        ],
        [
          "Overlap",
          "Detects intersection without necessarily blocking."
        ],
        [
          "Ignore",
          "No collision response for that channel."
        ],
        [
          "Other Actor",
          "The Actor that caused the overlap event."
        ]
      ],
      "guided": [
        "Create BP_TriggerPractice with Box Collision.",
        "Resize it so the player can walk through.",
        "Print on Begin Overlap.",
        "Print on End Overlap.",
        "Inspect Other Actor.",
        "Change collision responses and compare behaviour."
      ],
      "quiz": [
        [
          "Overlap is useful because…",
          [
            "It can detect without necessarily blocking",
            "It deletes Actors",
            "It only works in UI",
            "It compiles Blueprints"
          ],
          0,
          "Overlap is commonly used for trigger behaviour."
        ],
        [
          "Other Actor tells you…",
          [
            "What caused the event",
            "The screen resolution",
            "Build configuration",
            "Material colour"
          ],
          0,
          "Other Actor identifies the overlapping Actor."
        ]
      ],
      "stretch": {
        "title": "Enter and Leave",
        "task": "Change a state while the player is inside an area and restore it on exit.",
        "requirements": [
          "Begin Overlap",
          "End Overlap",
          "Different feedback",
          "No Event Tick"
        ]
      },
      "challenge": {
        "title": "Reusable Checkpoint Trigger",
        "task": "Create the detection/state portion of a checkpoint.",
        "requirements": [
          "Player detection",
          "One-shot state",
          "Visual feedback",
          "Stored Boolean"
        ],
        "hints": [
          "Prove overlap first.",
          "Remember whether this checkpoint has already activated."
        ]
      },
      "experience": {
        "game": "Dark Souls III",
        "focus": "Invisible trigger boundaries",
        "play": "Observe where areas, encounters or checkpoints react to player position.",
        "watch": "Watch exploration gameplay and identify likely invisible trigger volumes.",
        "observe": [
          "Where might the trigger begin?",
          "Is it one-shot or repeatable?",
          "What changes when the player crosses it?"
        ],
        "search": "Dark Souls 3 exploration bonfire gameplay"
      },
      "homework": {
        "title": "Invisible Boxes Everywhere",
        "task": "Identify five moments from a game that could plausibly use a trigger volume.",
        "evidence": "Five examples with what the trigger probably does.",
        "stretch": "Decide whether each is Begin-only, End-only, both or one-shot."
      },
      "common": [
        "Check both objects' collision settings if an overlap does not fire.",
        "Debug the overlap before building later logic.",
        "Large triggers can create surprising activations."
      ],
      "goodPractice": "Keep the trigger focused: detect the event, then tell the system that owns the consequence.",
      "visual": {
        "type": "book",
        "src": "assets/book/collision-responses.webp",
        "caption": "Reference figure from the supplied book: Collision Responses table."
      },
      "bookRef": "Chapter 14 / collision response examples",
      "explanation": {
        "what": "Collision determines how objects respond when their shapes meet. Unreal collision can Block, Overlap or Ignore depending on the object and channel. Overlap events are especially useful when you need detection without physically stopping movement.",
        "why": "Many gameplay systems begin with detection: checkpoints, pickups, damage zones, doors and area triggers. If collision settings are wrong, the Blueprint logic can be perfect and still never fire.",
        "mental": "Separate 'can these shapes detect each other?' from 'what should the game do when they do?'. Collision solves the first problem; Blueprint logic solves the second.",
        "example": "A checkpoint may use a large Box Collision Component set to overlap the player. The overlap event then activates the checkpoint while the mesh itself can use different collision settings.",
        "use": "Use collision volumes for spatial detection and physical responses. Debug collision configuration before building complicated logic on top of it."
      },
      "projectTask": {
        "name": "Pickups & Trigger Zones",
        "mission": "Make spaces and objects detect the player reliably.",
        "build": "Add at least one pickup/trigger volume to the main game and use Begin/End Overlap or one-shot detection appropriately.",
        "proof": [
          "Collision settings intentionally configured",
          "Correct Actor triggers it",
          "Debugged Begin/End behaviour",
          "Trigger has a gameplay purpose"
        ],
        "polish": "Create a one-shot checkpoint or narrative trigger that cannot accidentally repeat."
      }
    },
    {
      "id": "traces",
      "path": "gameplay",
      "order": 2,
      "title": "Line Traces & Interaction Detection",
      "short": "Ask what is in front of the player.",
      "difficulty": "Intermediate",
      "duration": "55 min",
      "xp": 230,
      "aim": "Run a line trace, inspect a Hit Result and use debug drawing.",
      "goals": [
        "Define Start and End",
        "Use a Trace Channel",
        "Break a Hit Result",
        "Draw debug traces"
      ],
      "concepts": [
        [
          "Trace",
          "A collision query through the world."
        ],
        [
          "Trace Channel",
          "Determines which collision response the trace tests."
        ],
        [
          "Hit Result",
          "Information about what and where the trace hit."
        ],
        [
          "Forward Vector",
          "Direction used to project a trace from the player/camera."
        ]
      ],
      "guided": [
        "Use the player camera location as Start.",
        "Calculate End = Start + Forward × Distance.",
        "Run Line Trace by Channel.",
        "Enable debug drawing.",
        "Break Hit Result and print Hit Actor.",
        "Test different collision responses and distances."
      ],
      "quiz": [
        [
          "A Hit Result contains…",
          [
            "Information about the hit",
            "Only a project name",
            "All variables",
            "The packaged game"
          ],
          0,
          "Hit Results contain Actor, position and other hit data."
        ],
        [
          "Why draw debug traces?",
          [
            "To prove start/direction/range",
            "To improve final graphics",
            "To save the project",
            "To create UI"
          ],
          0,
          "Debug visuals make trace maths visible."
        ]
      ],
      "stretch": {
        "title": "Range Matters",
        "task": "Expose TraceDistance and prove objects beyond it are not detected.",
        "requirements": [
          "Editable distance",
          "Debug drawing",
          "Near target detected",
          "Far target not detected"
        ]
      },
      "challenge": {
        "title": "Look-to-Interact",
        "task": "Build the detection half of an interaction system.",
        "requirements": [
          "Sensible trace origin",
          "Maximum range",
          "Valid target check",
          "Feedback when a target is found"
        ],
        "hints": [
          "Print Hit Actor first.",
          "Detection is a separate problem from what the target does when interacted with."
        ]
      },
      "experience": {
        "game": "BioShock",
        "focus": "Aimed interaction",
        "play": "Observe pickups, buttons and interactable objects near the crosshair.",
        "watch": "Watch BioShock gameplay featuring environmental interactions.",
        "observe": [
          "How close must the player be?",
          "Does line-of-sight matter?",
          "What feedback marks a valid target?"
        ],
        "search": "Bioshock interaction pickups gameplay"
      },
      "homework": {
        "title": "Trace or Trigger?",
        "task": "Choose Trace, Overlap or another approach for six interactions.",
        "evidence": "Six choices with reasons.",
        "stretch": "Find one interaction where either Trace or Overlap could work and compare."
      },
      "common": [
        "If the trace points wrong, inspect Start, Forward and End.",
        "If it passes through an object, inspect the object's response to the Trace Channel.",
        "Leave debug drawing on while developing, not in the finished build."
      ],
      "goodPractice": "Do not build an interaction system on top of a trace you have not visually proved.",
      "visual": {
        "type": "diagram",
        "src": "assets/diagrams/trace.svg",
        "caption": "Original classroom diagram: camera-based line trace and Hit Result."
      },
      "bookRef": "Chapter 14: Introduction to traces and trace functions",
      "explanation": {
        "what": "A Line Trace is a collision query sent through the world from a Start point to an End point. If it hits something, Unreal returns a Hit Result containing information such as the Actor, Component and impact location.",
        "why": "Traces are ideal for questions such as 'what is the player looking at?', 'did this hitscan weapon hit anything?' or 'is there clear line of sight?'. They let gameplay query the world without requiring a permanent trigger volume.",
        "mental": "Think of a trace as an invisible laser used for asking a question. The trace itself does not automatically interact; it only reports what it found.",
        "example": "A first-person interaction trace might begin at the camera and end at CameraLocation + ForwardVector × 300. If the Hit Actor supports interaction, the player can then send an Interact message.",
        "use": "Use traces for directional detection, hitscan weapons, line-of-sight checks and targeted interaction. Draw debug traces while developing so range and direction are visible."
      },
      "projectTask": {
        "name": "Look-to-Interact Detection",
        "mission": "Let the player detect what they are looking at.",
        "build": "Trace from the player camera to a sensible interaction distance, inspect the Hit Result and identify valid interactable targets.",
        "proof": [
          "Trace Start and End are correct",
          "Debug line used during testing",
          "Maximum range enforced",
          "Hit Actor is identified"
        ],
        "polish": "Show temporary feedback only while a valid interactable is being targeted."
      }
    },
    {
      "id": "timelines",
      "path": "gameplay",
      "order": 3,
      "title": "Timelines & Smooth Doors",
      "short": "Animate values over time instead of teleporting gameplay objects.",
      "difficulty": "Intermediate",
      "duration": "55 min",
      "xp": 220,
      "aim": "Use a Timeline and Lerp to create smooth reversible movement.",
      "goals": [
        "Create a Timeline",
        "Add a Float track",
        "Use Lerp",
        "Play and Reverse"
      ],
      "concepts": [
        [
          "Timeline",
          "Outputs values over a duration."
        ],
        [
          "Float Track",
          "A numerical curve over time."
        ],
        [
          "Lerp",
          "Blends between start and end using Alpha."
        ],
        [
          "Reverse",
          "Runs the Timeline back toward its start."
        ]
      ],
      "guided": [
        "Create BP_SlidingDoor.",
        "Store ClosedLocation and OpenLocation.",
        "Add a Timeline with 0→1 Float track.",
        "Use the Float as a Lerp Alpha.",
        "Set the door location on Update.",
        "Test Play and Reverse before connecting interaction."
      ],
      "quiz": [
        [
          "Useful Lerp Alpha range?",
          [
            "0 to 1",
            "100 to 200",
            "Text",
            "Only negative values"
          ],
          0,
          "0 is start, 1 is end."
        ],
        [
          "Why Reverse?",
          [
            "Reuse the Timeline to close",
            "Delete Timeline",
            "Change mesh",
            "Disable collision"
          ],
          0,
          "Reverse moves back through the same curve."
        ]
      ],
      "stretch": {
        "title": "Designer-Friendly Door",
        "task": "Expose useful movement settings.",
        "requirements": [
          "Editable distance",
          "Editable duration/speed",
          "Works on multiple instances",
          "Tooltips"
        ]
      },
      "challenge": {
        "title": "Complete Door System",
        "task": "Combine decision, interaction and Timeline skills into a reusable door.",
        "requirements": [
          "Smooth motion",
          "Locked state",
          "Failure feedback",
          "Can close again",
          "No duplicated Blueprint per door"
        ],
        "hints": [
          "Separate 'Can I open?' from 'How do I animate opening?'."
        ]
      },
      "experience": {
        "game": "Resident Evil 2",
        "focus": "Doors as pacing",
        "play": "Observe different door speeds, locks and transitions.",
        "watch": "Watch exploration gameplay focused on door interactions.",
        "observe": [
          "How is activation communicated?",
          "How does motion feel heavy/fast?",
          "How do locked doors fail?"
        ],
        "search": "Resident Evil 2 remake door exploration gameplay"
      },
      "homework": {
        "title": "Door Study",
        "task": "Compare three doors, gates, lifts or barriers from games.",
        "evidence": "Activation, movement style and feedback for three examples.",
        "stretch": "Sketch the variables your reusable Blueprint would expose."
      },
      "common": [
        "If the door jumps, verify stored start/end values.",
        "Do not repeatedly add offsets to current position every update.",
        "Test motion separately from interaction."
      ],
      "goodPractice": "Expose design values so one Blueprint can serve many level-design situations.",
      "visual": {
        "type": "diagram",
        "src": "assets/diagrams/branch-flow.svg",
        "caption": "Use the decision diagram alongside the Timeline task: decide first, animate second."
      },
      "bookRef": "Chapter 6: Timelines / movement examples",
      "explanation": {
        "what": "A Timeline outputs changing values over a duration. Those values are commonly used with Lerp nodes to smoothly move, rotate or otherwise change something from a start state to an end state.",
        "why": "Instantly teleporting a door from closed to open is technically functional but rarely feels good. Timelines give designers control over duration and curve shape without requiring manual per-frame maths.",
        "mental": "Think of a Timeline as a tiny animation graph for numbers. A value of 0 can mean 'fully closed' and 1 can mean 'fully open', with every value between representing part of the journey.",
        "example": "A Timeline Float track moving from 0 to 1 can drive a Lerp between ClosedLocation and OpenLocation. Playing opens the door; reversing closes it.",
        "use": "Use Timelines for short authored changes such as doors, lifts, fades, lights and moving platforms when you need smooth predictable motion."
      },
      "projectTask": {
        "name": "Reusable Door / Barrier",
        "mission": "Turn the interaction system into visible world progression.",
        "build": "Create a smooth door, lift, shutter or barrier using a Timeline and Lerp. Combine it with the access rules and interaction system already built.",
        "proof": [
          "Smooth reversible motion",
          "Reusable Blueprint Class",
          "Works with Interact system",
          "Locked/blocked state can prevent movement"
        ],
        "polish": "Expose distance/angle and duration so one Class can produce several different barriers."
      }
    },
    {
      "id": "ui",
      "path": "gameplay",
      "order": 4,
      "title": "UMG & Gameplay UI",
      "short": "Display health, counters and objectives without turning the Widget into the game logic.",
      "difficulty": "Intermediate",
      "duration": "60 min",
      "xp": 230,
      "aim": "Create a UMG Widget and connect it to gameplay values.",
      "goals": [
        "Create a Widget Blueprint",
        "Add basic UI elements",
        "Display gameplay values",
        "Keep gameplay state outside the Widget"
      ],
      "concepts": [
        [
          "Widget Blueprint",
          "UMG asset used to create user interface."
        ],
        [
          "HUD",
          "On-screen information shown to the player."
        ],
        [
          "Binding/Update",
          "Ways to make displayed values reflect gameplay state."
        ],
        [
          "Separation",
          "UI displays state; gameplay systems should generally own the state."
        ]
      ],
      "guided": [
        "Create a simple HUD Widget.",
        "Add a health bar or text.",
        "Create the Widget at gameplay start.",
        "Add it to the Viewport.",
        "Connect the displayed value to player Health.",
        "Change Health in-game and verify the UI updates."
      ],
      "quiz": [
        [
          "Where should Health usually be owned?",
          [
            "Widget only",
            "Player/gameplay system",
            "Texture",
            "Level thumbnail"
          ],
          1,
          "UI should display gameplay state rather than own the core state."
        ],
        [
          "UMG is used for…",
          [
            "User interface",
            "NavMesh",
            "Static Mesh modelling",
            "Packaging"
          ],
          0,
          "UMG is Unreal's UI system."
        ]
      ],
      "stretch": {
        "title": "Readable HUD",
        "task": "Improve visual hierarchy without adding unnecessary clutter.",
        "requirements": [
          "Clear primary information",
          "Consistent spacing",
          "Readable at gameplay speed",
          "No decorative element that hides critical data"
        ]
      },
      "challenge": {
        "title": "Objective + Health HUD",
        "task": "Build a reusable HUD that shows player state and a changing objective.",
        "requirements": [
          "Health display",
          "Objective text/count",
          "Gameplay owns the values",
          "UI updates correctly"
        ],
        "hints": [
          "Prove each value separately before styling the whole screen."
        ]
      },
      "experience": {
        "game": "Overwatch 2",
        "focus": "Fast-readable HUD",
        "play": "Study what information is visible during combat.",
        "watch": "Watch gameplay and pause during a busy fight.",
        "observe": [
          "What is always visible?",
          "What becomes more prominent when important?",
          "How is colour/position used to reduce reading time?"
        ],
        "search": "Overwatch 2 gameplay HUD"
      },
      "homework": {
        "title": "HUD Breakdown",
        "task": "Screenshot a game HUD and label what information is persistent, contextual and decorative.",
        "evidence": "One annotated HUD screenshot.",
        "stretch": "Remove three elements and explain whether the game would still be readable."
      },
      "common": [
        "Do not let the Widget become the owner of health/ammo rules.",
        "Test updates with deliberately changing values.",
        "Design for readability at gameplay speed, not just beauty in the editor."
      ],
      "goodPractice": "UI should communicate game state clearly; the game systems should own that state.",
      "visual": {
        "type": "book",
        "src": "assets/book/ui-variables.webp",
        "caption": "Reference figure from the supplied book: UI-related gameplay variables."
      },
      "bookRef": "Chapter 7: Creating Screen UI Elements",
      "explanation": {
        "what": "UMG is Unreal's system for building user interface. A Widget should usually display information owned by gameplay systems rather than becoming the place where the game rules themselves are stored.",
        "why": "Separating UI from gameplay state prevents the project becoming tangled. Health should still exist even if the health bar is hidden, replaced or redesigned.",
        "mental": "Think of the HUD as a dashboard in a car. The speedometer displays speed, but it does not create the car's speed. The gameplay system owns the value; the UI communicates it.",
        "example": "The Character owns Health. The HUD reads that value and converts it into a progress bar percentage. When damage changes Health, the Widget updates what the player sees.",
        "use": "Use Widgets for HUDs, menus, prompts, inventories and feedback. Keep core rules in gameplay Blueprints or systems so the UI remains replaceable."
      },
      "projectTask": {
        "name": "Player HUD & Objective",
        "mission": "Tell the player what matters without exposing debug text.",
        "build": "Create a HUD showing at least player state and the current objective/interact prompt. Gameplay owns the values; the Widget displays them.",
        "proof": [
          "HUD appears reliably",
          "At least 2 gameplay values displayed",
          "UI updates when state changes",
          "Core game state does not live only in Widget"
        ],
        "polish": "Use hierarchy, spacing and animation to make changing information readable at gameplay speed."
      }
    },
    {
      "id": "savegame",
      "path": "gameplay",
      "order": 5,
      "title": "SaveGame & Persistent Progress",
      "short": "Store data that needs to survive beyond the current play session.",
      "difficulty": "Intermediate",
      "duration": "55 min",
      "xp": 230,
      "aim": "Create a SaveGame object and save/load simple progress data.",
      "goals": [
        "Create a SaveGame Class",
        "Write values into a save object",
        "Save to a slot",
        "Load and validate saved data"
      ],
      "concepts": [
        [
          "SaveGame",
          "Special Class used to represent saved data."
        ],
        [
          "Slot",
          "A named save location."
        ],
        [
          "GameInstance",
          "Persists across levels in one running session, not automatically across application restarts."
        ],
        [
          "Validation",
          "Check whether saved data exists before loading it."
        ]
      ],
      "guided": [
        "Create BP_SaveData from SaveGame.",
        "Add one test value such as HighestRound.",
        "Create a save object.",
        "Set the value and Save Game to Slot.",
        "Load from the same slot.",
        "Print the loaded value and handle the case where no save exists."
      ],
      "quiz": [
        [
          "GameInstance vs SaveGame?",
          [
            "Both automatically persist forever",
            "GameInstance is session-lifetime; SaveGame can persist to disk",
            "SaveGame is a mesh",
            "GameInstance is UI"
          ],
          1,
          "They solve different lifetimes."
        ],
        [
          "Before loading a slot you should…",
          [
            "Assume it exists",
            "Check/handle absence",
            "Delete every Actor",
            "Disable input"
          ],
          1,
          "Robust loading handles missing saves."
        ]
      ],
      "stretch": {
        "title": "Two Values",
        "task": "Save and load two related pieces of progress.",
        "requirements": [
          "Two variables",
          "Save path",
          "Load path",
          "Missing-save handling"
        ]
      },
      "challenge": {
        "title": "Checkpoint Save",
        "task": "Design a checkpoint system that decides what should and should not be persisted.",
        "requirements": [
          "Saved checkpoint identifier",
          "One player progression value",
          "Resettable transient state",
          "Explain data lifetime"
        ],
        "hints": [
          "Not every runtime variable belongs in a save file."
        ]
      },
      "experience": {
        "game": "Resident Evil 4",
        "focus": "Save/checkpoint decisions",
        "play": "Observe what persists after saving, dying or reloading.",
        "watch": "Watch gameplay involving typewriters/checkpoints and reloads.",
        "observe": [
          "What persists?",
          "What resets?",
          "What feedback tells the player a save occurred?"
        ],
        "search": "Resident Evil 4 remake save typewriter checkpoint"
      },
      "homework": {
        "title": "What Should Save?",
        "task": "List ten pieces of game state and decide SaveGame, GameInstance, level-only, or regenerated.",
        "evidence": "Ten values with lifetime choice and reason.",
        "stretch": "Identify one value that would cause bugs if saved."
      },
      "common": [
        "GameInstance is not a replacement for disk saves.",
        "Check whether a save exists.",
        "Save only state that genuinely needs persistence."
      ],
      "goodPractice": "Choose storage based on how long the data must live.",
      "visual": null,
      "bookRef": "Chapter 11: SaveGame class, saving and loading",
      "explanation": {
        "what": "SaveGame is used for data that must survive after the game closes. GameInstance is different: it can survive level changes during one running session, but it is not automatically written to disk.",
        "why": "Understanding data lifetime prevents bugs. Temporary combat state, cross-level session data and long-term player progress should not all be stored in the same place.",
        "mental": "Think of level variables as notes on a whiteboard, GameInstance as notes you carry between rooms, and SaveGame as writing important information into a notebook you can reopen tomorrow.",
        "example": "CurrentHealth may reset when a level restarts, SelectedCharacter might persist in GameInstance while moving between maps, and HighestUnlockedLevel could be stored in SaveGame.",
        "use": "Use SaveGame for settings, progression, checkpoints and other information that should still exist after restarting the application."
      },
      "projectTask": {
        "name": "Checkpoint & Continue",
        "mission": "Let progress survive beyond one run.",
        "build": "Save one meaningful progression value and restore it safely. Use the system to support a checkpoint, unlocked sector or equivalent project state.",
        "proof": [
          "SaveGame Class exists",
          "Save slot is written",
          "Missing save is handled",
          "Loaded state visibly changes game progress"
        ],
        "polish": "Save the latest activated checkpoint and one additional progression value."
      }
    },
    {
      "id": "data",
      "path": "advanced",
      "order": 1,
      "title": "Arrays, Maps, Enums, Structs & Data Tables",
      "short": "Stop creating Health1, Health2, Health3 and organise data properly.",
      "difficulty": "Intermediate",
      "duration": "65 min",
      "xp": 260,
      "aim": "Choose suitable Blueprint data structures for collections and structured data.",
      "goals": [
        "Use an Array",
        "Explain Set and Map",
        "Create an Enum and Struct",
        "Explain why Data Tables help data-driven projects"
      ],
      "concepts": [
        [
          "Array",
          "Ordered collection of values of one type."
        ],
        [
          "Set",
          "Collection of unique values."
        ],
        [
          "Map",
          "Key→value pairs."
        ],
        [
          "Enum",
          "Named set of possible choices."
        ],
        [
          "Struct",
          "Groups related fields into one value."
        ],
        [
          "Data Table",
          "Rows of structured data built from a Struct."
        ]
      ],
      "guided": [
        "Create an Array of names or Actor references.",
        "Add, remove and iterate over items.",
        "Create an Enum for game state.",
        "Create a Struct for a simple item.",
        "Create multiple Struct values.",
        "Discuss when many items should move into a Data Table."
      ],
      "quiz": [
        [
          "Best for an ordered list of inventory items?",
          [
            "Array",
            "Material",
            "Level",
            "Sound"
          ],
          0,
          "Arrays store ordered collections."
        ],
        [
          "Best for named states such as Easy/Normal/Hard?",
          [
            "Enum",
            "Texture",
            "Transform",
            "Map only"
          ],
          0,
          "Enums make finite choices readable."
        ],
        [
          "Map stores…",
          [
            "Key/value pairs",
            "Only Booleans",
            "Only meshes",
            "Execution"
          ],
          0,
          "Maps associate keys with values."
        ]
      ],
      "stretch": {
        "title": "Structured Inventory",
        "task": "Represent a small inventory using a Struct and Array.",
        "requirements": [
          "Item Struct",
          "Array of items",
          "At least three fields per item",
          "Loop through items"
        ]
      },
      "challenge": {
        "title": "Data-Driven Enemy Types",
        "task": "Plan enemy definitions using Enum/Struct/Data Table rather than duplicated Blueprints full of hard-coded numbers.",
        "requirements": [
          "Enemy Struct fields",
          "At least three rows/types",
          "Reasonable data separation",
          "Explain what behaviour stays in Blueprint"
        ],
        "hints": [
          "Data describes an enemy; behaviour still needs a system that uses the data."
        ]
      },
      "experience": {
        "game": "Pokémon",
        "focus": "Structured game data",
        "play": "Think about how many creatures share the same data fields but different values.",
        "watch": "Watch a team/stat screen.",
        "observe": [
          "Which fields repeat across every creature?",
          "Which values are unique?",
          "What looks like a good Struct/Data Table row?"
        ],
        "search": "Pokemon stats team screen gameplay"
      },
      "homework": {
        "title": "Data Model",
        "task": "Choose a game with many items/characters and design a Struct for one row of its data.",
        "evidence": "Struct fields, types and three example rows.",
        "stretch": "Identify one field that should be an Enum rather than free text."
      },
      "common": [
        "Use collections instead of numbered duplicate variables.",
        "Choose readable Enum names.",
        "Do not put behaviour inside a Struct; Structs describe data."
      ],
      "goodPractice": "Good data structures make gameplay logic simpler, not merely more sophisticated.",
      "visual": {
        "type": "book",
        "src": "assets/book/containers.webp",
        "caption": "Reference figure from the supplied book: container variable types."
      },
      "bookRef": "Chapter 13: Data Structures and Flow Control",
      "explanation": {
        "what": "Data structures let you organise many related values without creating endless numbered variables. Arrays store ordered collections, Sets store unique values, Maps connect keys to values, Enums define named choices, Structs group fields and Data Tables store many rows using the same Struct.",
        "why": "As games become larger, good data organisation becomes more important than individual nodes. Clean data reduces duplicated Blueprints and makes systems easier to expand.",
        "mental": "Choose the structure based on the shape of the information. A list suggests an Array, a named finite state suggests an Enum, and a collection of records sharing the same fields suggests a Struct or Data Table.",
        "example": "An Item Struct could contain Name, Icon, Value and ItemType. An inventory could be an Array of those Structs. A Data Table could hold hundreds of item definitions without creating hundreds of separate variables.",
        "use": "Use data structures when the same kind of information repeats. Avoid solving collection problems with Item1, Item2, Item3-style variables."
      },
      "projectTask": {
        "name": "Data-Driven Content",
        "mission": "Make the game easier to expand without more duplicated Blueprints.",
        "build": "Convert one repeating content type into structured data: objectives, pickups, key items, enemy definitions or messages.",
        "proof": [
          "Struct or other suitable structure",
          "Collection holds multiple entries",
          "No Item1/Item2/Item3 pattern",
          "Blueprint behaviour consumes the data"
        ],
        "polish": "Move the definitions into a Data Table where that genuinely makes authoring easier."
      }
    },
    {
      "id": "ai",
      "path": "advanced",
      "order": 2,
      "title": "AI: NavMesh, Blackboard & Behaviour Trees",
      "short": "Give enemies goals and decisions instead of scripting one giant chase graph.",
      "difficulty": "Intermediate",
      "duration": "70 min",
      "xp": 280,
      "aim": "Set up simple AI navigation and explain the roles of Blackboard and Behaviour Tree.",
      "goals": [
        "Use a NavMesh",
        "Explain Blackboard keys",
        "Run a Behaviour Tree",
        "Build simple patrol/chase decision logic"
      ],
      "concepts": [
        [
          "NavMesh",
          "Defines traversable navigation space."
        ],
        [
          "AI Controller",
          "Controller that drives an AI Pawn/Character."
        ],
        [
          "Blackboard",
          "Shared AI state used by Behaviour Tree logic."
        ],
        [
          "Behaviour Tree",
          "Organises AI decisions and tasks."
        ]
      ],
      "guided": [
        "Place a NavMesh Bounds Volume and visualise navigation.",
        "Create an AI Character/Controller.",
        "Create Blackboard keys for target/patrol state.",
        "Create a simple Behaviour Tree.",
        "Make AI move to a patrol point.",
        "Add a condition that allows a chase state."
      ],
      "quiz": [
        [
          "What does NavMesh provide?",
          [
            "Traversable navigation space",
            "UI colours",
            "Save slots",
            "Materials"
          ],
          0,
          "AI uses navigation data to move through the level."
        ],
        [
          "Blackboard mainly stores…",
          [
            "AI state/keys used by behaviour",
            "Textures",
            "Build files",
            "Animation frames only"
          ],
          0,
          "Blackboard keys hold state that Behaviour Trees use."
        ]
      ],
      "stretch": {
        "title": "Patrol Variety",
        "task": "Improve a basic patrol so movement is less robotic.",
        "requirements": [
          "More than one destination",
          "State stored clearly",
          "No giant Tick graph",
          "Predictable fallback behaviour"
        ]
      },
      "challenge": {
        "title": "Patrol → Investigate → Chase",
        "task": "Design three AI states and the information needed to transition between them.",
        "requirements": [
          "Three states",
          "Transition conditions",
          "Relevant Blackboard keys",
          "One failure/fallback case"
        ],
        "hints": [
          "Ask what the AI knows, not what you as the developer know."
        ]
      },
      "experience": {
        "game": "Alien: Isolation",
        "focus": "Perception and AI state",
        "play": "Observe how enemy behaviour changes when it gains/loses information.",
        "watch": "Watch stealth gameplay with search/chase behaviour.",
        "observe": [
          "What seems to trigger state changes?",
          "What information might be stored?",
          "How does behaviour change after losing sight?"
        ],
        "search": "Alien Isolation stealth AI search chase gameplay"
      },
      "homework": {
        "title": "AI State Diary",
        "task": "Watch five minutes of stealth/action gameplay and record every visible AI state change.",
        "evidence": "Timeline of states with likely trigger for each.",
        "stretch": "Translate the observations into Blackboard keys."
      },
      "common": [
        "A NavMesh problem can look like an AI logic problem.",
        "Keep Blackboard keys meaningful and limited.",
        "Behaviour Trees organise decisions; individual tasks should stay focused."
      ],
      "goodPractice": "Model what the AI knows and what decision it should make next.",
      "visual": null,
      "bookRef": "Chapters 9–10: AI navigation, Blackboard and Behaviour Trees",
      "explanation": {
        "what": "Unreal AI is usually built from several cooperating systems. NavMesh describes where an AI can travel, an AI Controller controls the Pawn, Blackboard stores useful AI state, and a Behaviour Tree organises decisions and tasks.",
        "why": "Keeping navigation, knowledge and decision-making separate makes AI easier to debug. If an enemy will not move, the problem might be navigation rather than the Behaviour Tree.",
        "mental": "Think of the Blackboard as what the AI currently knows, the Behaviour Tree as how it decides what to do with that knowledge, and NavMesh as where it is physically allowed to go.",
        "example": "An enemy Blackboard could store TargetActor and LastKnownLocation. The Behaviour Tree could patrol when no target exists, investigate a location when suspicious and chase when TargetActor is valid.",
        "use": "Use these systems for enemies or NPCs that need navigation and state-driven behaviour rather than one long scripted sequence."
      },
      "projectTask": {
        "name": "The Threat",
        "mission": "Add an AI presence that changes player behaviour.",
        "build": "Create a threat that can navigate and has at least Patrol and Chase states, with a clear trigger for changing behaviour.",
        "proof": [
          "NavMesh works",
          "AI can patrol",
          "AI can enter chase state",
          "Blackboard/Behaviour Tree state is understandable"
        ],
        "polish": "Add Investigate or Return-to-Patrol so losing the player produces a believable transition."
      }
    },
    {
      "id": "animation",
      "path": "advanced",
      "order": 3,
      "title": "Animation Blueprints & State Machines",
      "short": "Connect character movement data to animation states.",
      "difficulty": "Intermediate",
      "duration": "65 min",
      "xp": 260,
      "aim": "Explain the role of Animation Blueprint EventGraph, AnimGraph and State Machines.",
      "goals": [
        "Create an Animation Blueprint",
        "Use the EventGraph to update animation data",
        "Use the AnimGraph",
        "Explain State Machine transitions"
      ],
      "concepts": [
        [
          "Animation Blueprint",
          "Blueprint used to control Skeletal Mesh animation."
        ],
        [
          "EventGraph",
          "Commonly updates animation variables."
        ],
        [
          "AnimGraph",
          "Builds the final animation pose."
        ],
        [
          "State Machine",
          "Organises states and transition rules such as Idle→Walk→Jump."
        ]
      ],
      "guided": [
        "Create/inspect an Animation Blueprint.",
        "Identify EventGraph and AnimGraph.",
        "Create Speed from character velocity.",
        "Feed locomotion through a Blend Space or existing setup.",
        "Inspect a State Machine.",
        "Explain one transition rule in plain English."
      ],
      "quiz": [
        [
          "AnimGraph outputs…",
          [
            "The animation pose",
            "A save slot",
            "A Static Mesh",
            "A level name"
          ],
          0,
          "AnimGraph constructs the pose."
        ],
        [
          "State Machines are useful for…",
          [
            "Organising animation states/transitions",
            "Packaging",
            "Collision channels",
            "File naming"
          ],
          0,
          "They make animation state logic readable."
        ]
      ],
      "stretch": {
        "title": "Readable Locomotion",
        "task": "Annotate the variables and transitions needed for Idle, Walk/Run and Jump.",
        "requirements": [
          "Speed",
          "Airborne state",
          "Three animation states",
          "Clear transition rules"
        ]
      },
      "challenge": {
        "title": "Add One New State",
        "task": "Extend an existing Animation Blueprint with one justified state.",
        "requirements": [
          "New state",
          "Entry condition",
          "Exit condition",
          "No broken existing locomotion"
        ],
        "hints": [
          "Aim, crouch, landing or sprint are reasonable choices depending on the project."
        ]
      },
      "experience": {
        "game": "Spider-Man",
        "focus": "Animation state transitions",
        "play": "Observe how movement animation responds to speed, air state and direction.",
        "watch": "Watch traversal gameplay and focus on transitions rather than spectacle.",
        "observe": [
          "When does one state blend into another?",
          "What data could drive the transition?",
          "Which transitions need to feel especially smooth?"
        ],
        "search": "Spider Man gameplay traversal animation"
      },
      "homework": {
        "title": "Animation State Map",
        "task": "Choose one playable character and draw a state map for six common animations.",
        "evidence": "Six states with labelled transition conditions.",
        "stretch": "Identify where a Blend Space would replace multiple discrete states."
      },
      "common": [
        "Do not confuse Character gameplay logic with AnimGraph pose logic.",
        "Use meaningful animation variables such as Speed and IsInAir.",
        "Transitions should be explainable as simple conditions."
      ],
      "goodPractice": "Animation logic is easier to maintain when data gathering and pose generation have clear roles.",
      "visual": {
        "type": "book",
        "src": "assets/book/animation-blueprint.webp",
        "caption": "Reference figure from the supplied book: creating an Animation Blueprint."
      },
      "bookRef": "Chapter 17: Animation Blueprints",
      "explanation": {
        "what": "Animation Blueprints control the final pose of a Skeletal Mesh. Their EventGraph commonly gathers gameplay/movement data, while the AnimGraph uses that data to blend animations and evaluate State Machines.",
        "why": "Animation needs to respond to gameplay without duplicating gameplay rules. Keeping movement data gathering separate from pose generation makes animation systems much easier to understand.",
        "mental": "Think of the EventGraph as collecting facts such as Speed or IsInAir. The AnimGraph then asks 'given those facts, what pose should the character be in?'",
        "example": "Speed can drive an Idle/Walk/Run Blend Space, while IsInAir can control the transition from locomotion into a jump state.",
        "use": "Use Animation Blueprints for character locomotion, state transitions, blends and animation-driven presentation while keeping core gameplay logic in the Character or other gameplay systems."
      },
      "projectTask": {
        "name": "Threat Readability",
        "mission": "Make AI state visible through animation.",
        "build": "Use an Animation Blueprint/State Machine so the threat visibly communicates idle/patrol, movement and at least one additional state.",
        "proof": [
          "Animation Blueprint drives pose",
          "Movement data feeds animation",
          "State transition works",
          "No gameplay rule hidden only inside AnimGraph"
        ],
        "polish": "Improve one transition or Blend Space so state changes read more smoothly."
      }
    },
    {
      "id": "practice",
      "path": "practice",
      "order": 1,
      "title": "Blueprint Responsibility",
      "short": "Put behaviour where it belongs so changes happen in one place.",
      "difficulty": "Intermediate",
      "duration": "45 min",
      "xp": 220,
      "aim": "Decide which Blueprint should own state and behaviour.",
      "goals": [
        "Explain responsibility",
        "Recognise duplicated ownership",
        "Move object-specific behaviour to the object that owns it",
        "Use Level Blueprint only for level-specific situations"
      ],
      "concepts": [
        [
          "Responsibility",
          "What a Blueprint should and should not own."
        ],
        [
          "Internal State",
          "Data the Blueprint itself is responsible for."
        ],
        [
          "Duplication",
          "Repeated behaviour that makes changes risky."
        ],
        [
          "Level-specific Logic",
          "Behaviour that genuinely belongs to one particular level."
        ]
      ],
      "guided": [
        "Inspect a bad example where several hazards each implement player death.",
        "Identify what belongs to the player.",
        "Move death behaviour into one player Event/Function.",
        "Change hazards so they request that behaviour.",
        "Change death behaviour once and verify all hazards follow it.",
        "Identify one genuinely level-specific use for Level Blueprint."
      ],
      "quiz": [
        [
          "Who should own how the player dies?",
          [
            "Every enemy separately",
            "The player/player system",
            "Every level Blueprint",
            "A material"
          ],
          1,
          "The player should own its internal death behaviour."
        ],
        [
          "Why avoid repeating game rules in every Level Blueprint?",
          [
            "Maintenance and reuse problems",
            "It brightens meshes",
            "It automatically optimises",
            "No reason"
          ],
          0,
          "Duplicated level rules are hard to keep consistent."
        ]
      ],
      "stretch": {
        "title": "Who Owns This?",
        "task": "Sort example behaviours into the Blueprint/system that should own them.",
        "requirements": [
          "Justify choices",
          "Identify one poor ownership choice",
          "Suggest a better home",
          "Consider reuse across levels"
        ]
      },
      "challenge": {
        "title": "Refactor a Bad Project",
        "task": "Move responsibilities in a deliberately messy mini-project without changing player-visible behaviour.",
        "requirements": [
          "Remove duplication",
          "Reduce Level Blueprint dependence",
          "Behaviour unchanged",
          "Explain each move"
        ],
        "hints": [
          "Ask whose state is changing and who should know how that state changes."
        ]
      },
      "experience": {
        "game": "Any systemic game",
        "focus": "System ownership",
        "play": "Pick a mechanic such as damage or inventory that many objects interact with.",
        "watch": "Watch gameplay where one system is reused across many object types.",
        "observe": [
          "Who owns the state?",
          "Who only requests a change?",
          "What would be painful if every object duplicated the logic?"
        ],
        "search": "systemic game damage inventory interactions gameplay"
      },
      "homework": {
        "title": "System Ownership",
        "task": "Diagram one mechanic and show which objects communicate without stealing each other's responsibilities.",
        "evidence": "System diagram plus short ownership explanation.",
        "stretch": "Identify a tempting but poor place to put the logic."
      },
      "common": [
        "Working code can still be badly organised.",
        "Avoid letting every object directly control every other object's internals.",
        "Level Blueprint is useful but should not become the entire game."
      ],
      "goodPractice": "A Blueprint should be as independent as practical and responsible for its own internal state.",
      "visual": {
        "type": "book",
        "src": "assets/book/responsibility.webp",
        "caption": "Reference figure from the supplied book: an example of moving player-death responsibility into the player Blueprint."
      },
      "bookRef": "Chapter 15: Blueprint responsibilities",
      "explanation": {
        "what": "Blueprint responsibility is about deciding which object owns a piece of state and which object should control the behaviour that changes it. A Blueprint should generally be responsible for its own internal state instead of unrelated Actors directly manipulating its internals.",
        "why": "Poor ownership creates duplicated logic and makes changes dangerous. If every enemy contains its own copy of how the player dies, changing death behaviour means finding every copy and hoping none are missed.",
        "mental": "Ask 'whose state is this?' If it is the player's health or death state, the player system should normally own how that state changes. Other objects can request the behaviour without owning its implementation.",
        "example": "A hazard can tell the player to Die. The player then handles animation, UI, respawn or other death behaviour. The hazard does not need to know how any of that works.",
        "use": "Use responsibility thinking whenever two Blueprints communicate. It is especially important when deciding what belongs in reusable Classes, GameMode or the Level Blueprint."
      },
      "projectTask": {
        "name": "Ownership Pass",
        "mission": "Remove logic that lives in the wrong Blueprint.",
        "build": "Audit one mechanic involving multiple Actors. Refactor so each Blueprint owns its internal state and other systems request behaviour rather than directly controlling internals.",
        "proof": [
          "One ownership problem identified",
          "Duplication reduced",
          "Behaviour still works",
          "Reason for new ownership documented"
        ],
        "polish": "Remove one piece of reusable game logic from the Level Blueprint."
      }
    },
    {
      "id": "complexity",
      "path": "practice",
      "order": 2,
      "title": "Stop Blueprint Spaghetti",
      "short": "Use abstraction, comments, categories and names so another human can read your work.",
      "difficulty": "Intermediate",
      "duration": "45 min",
      "xp": 220,
      "aim": "Refactor a complex Blueprint for readability without changing behaviour.",
      "goals": [
        "Use abstraction appropriately",
        "Use Functions/comment boxes",
        "Use variable Tooltips and Categories",
        "Review a Blueprint from another developer's perspective"
      ],
      "concepts": [
        [
          "Abstraction",
          "Hide low-level detail behind a meaningful high-level name."
        ],
        [
          "Comment Box",
          "Labels a visible block of graph logic."
        ],
        [
          "Category",
          "Groups related variables."
        ],
        [
          "Tooltip",
          "Explains an exposed variable to the user/designer."
        ]
      ],
      "guided": [
        "Open a deliberately messy Event Graph.",
        "Identify groups that perform one job.",
        "Convert a reusable group into a Function.",
        "Comment remaining top-level blocks.",
        "Rename unclear variables.",
        "Add Categories and Tooltips.",
        "Zoom out and judge whether the graph still communicates its structure."
      ],
      "quiz": [
        [
          "Abstraction helps by…",
          [
            "Hiding low-level detail behind meaningful concepts",
            "Adding random nodes",
            "Deleting Functions",
            "Forcing everything into Level Blueprint"
          ],
          0,
          "Abstraction helps you reason at the right level."
        ],
        [
          "An Instance Editable variable should ideally have…",
          [
            "Useful name and Tooltip",
            "No name",
            "A giant macro",
            "A duplicated Level Blueprint"
          ],
          0,
          "Designer-facing values should explain themselves."
        ]
      ],
      "stretch": {
        "title": "Readable at 25%",
        "task": "Make the top-level purpose understandable even when zoomed out.",
        "requirements": [
          "Comment major blocks",
          "Meaningful Function names",
          "Grouped variables",
          "Reduce unnecessary crossings"
        ]
      },
      "challenge": {
        "title": "Blueprint Code Review",
        "task": "Improve a teammate-style Blueprint without altering behaviour.",
        "requirements": [
          "Five justified improvements",
          "Before/after screenshots",
          "No behaviour change",
          "Name the most valuable improvement"
        ],
        "hints": [
          "Review names, duplication, long graphs, exposed values and comments."
        ]
      },
      "experience": {
        "game": "Your own old project",
        "focus": "Maintainability",
        "play": "Open an older Blueprint you have not touched recently and see how quickly you understand it.",
        "watch": "If you have no old project, watch a Blueprint breakdown and review its readability.",
        "observe": [
          "Can you understand intent quickly?",
          "Which names help?",
          "Where could detail be hidden behind a Function?"
        ],
        "search": "Unreal Engine Blueprint best practices clean graph"
      },
      "homework": {
        "title": "Future You Test",
        "task": "Annotate one of your Blueprints with everything future-you might struggle to understand in three months.",
        "evidence": "Annotated screenshot plus three planned improvements.",
        "stretch": "Make the improvements and submit before/after images."
      },
      "common": [
        "Commenting every node is not the same as clarity.",
        "Do not hide unrelated logic in a Function merely to make the graph small.",
        "Meaningful names are documentation."
      ],
      "goodPractice": "A giant Event Graph is not a badge of honour. Make intent visible and low-level detail accessible when needed.",
      "visual": {
        "type": "book",
        "src": "assets/book/responsibility.webp",
        "caption": "Book reference for the best-practice section; the lesson also applies the book's abstraction/readability guidance."
      },
      "bookRef": "Chapter 15: Managing Blueprint complexities",
      "explanation": {
        "what": "Blueprint complexity is managed by making intent visible and low-level detail easier to navigate. Functions, Macros, collapsed graphs, comments, good variable names, Categories and Tooltips all help, but they should be used deliberately rather than simply hiding nodes.",
        "why": "A Blueprint that works today can still become impossible to maintain later. Readability matters because you, a teammate or a student may need to understand the graph months after it was created.",
        "mental": "The top level of a good Blueprint should read almost like a plan: Check Input → Validate Target → Apply Damage → Update Feedback. Detailed implementation can then live inside clearly named Functions.",
        "example": "Instead of fifty nodes under InputAction Interact, the top graph might call FindInteractable, CanInteract and PerformInteraction. Each name explains intent before you inspect the details.",
        "use": "Use abstraction when it reduces cognitive load, not simply to make the graph physically smaller. Comment major logic blocks and make exposed variables understandable to designers."
      },
      "projectTask": {
        "name": "Final Blueprint Code Review",
        "mission": "Prepare the project for another developer to open.",
        "build": "Review the main Blueprints for names, Functions, comments, Categories, Tooltips, duplication and graph readability. Then produce a final playable build.",
        "proof": [
          "At least 5 justified refactors",
          "Major graphs readable when zoomed out",
          "Exposed variables documented",
          "Game plays from beginning to conclusion"
        ],
        "polish": "Record a short developer walkthrough explaining one system and why it is organised that way."
      }
    }
  ],
  "glossary": [
    [
      "Actor",
      "An object that can be placed or spawned in an Unreal level."
    ],
    [
      "Blueprint",
      "Unreal Engine's visual scripting system and the assets/classes created with it."
    ],
    [
      "Blueprint Class",
      "A reusable definition used to create instances."
    ],
    [
      "Branch",
      "Chooses True or False execution using a Boolean condition."
    ],
    [
      "Boolean",
      "True/false variable type."
    ],
    [
      "Cast",
      "Checks whether an object reference is compatible with a target Class type."
    ],
    [
      "Class",
      "A reusable definition/template for objects."
    ],
    [
      "Component",
      "Reusable functionality attached to an Actor."
    ],
    [
      "Compile",
      "Checks/prepares Blueprint changes for execution."
    ],
    [
      "Event",
      "Entry point that starts logic when something occurs."
    ],
    [
      "Event Dispatcher",
      "Broadcast event that bound listeners can respond to."
    ],
    [
      "Function",
      "Named reusable logic with inputs/outputs."
    ],
    [
      "GameInstance",
      "Object that persists for the lifetime of the running game and across level loads."
    ],
    [
      "GameMode",
      "Defines game rules and default gameplay classes."
    ],
    [
      "Hit Result",
      "Structured information returned by a collision/trace hit."
    ],
    [
      "Instance",
      "A particular object created from a Class."
    ],
    [
      "Interface",
      "A shared set of messages different Blueprint Classes can implement."
    ],
    [
      "Lerp",
      "Interpolates between start and end values using Alpha."
    ],
    [
      "NavMesh",
      "Navigation data describing traversable space for AI."
    ],
    [
      "Object Reference",
      "A variable pointing to a specific Unreal object."
    ],
    [
      "Outliner",
      "Panel listing Actors in the current level."
    ],
    [
      "Pawn",
      "Actor that can be possessed by a Controller."
    ],
    [
      "PlayerController",
      "Controller representing the player's controlling logic."
    ],
    [
      "SaveGame",
      "Class used to represent persistent saved data."
    ],
    [
      "Struct",
      "A custom data structure grouping related fields."
    ],
    [
      "Timeline",
      "Blueprint tool that outputs changing values over time."
    ],
    [
      "Trace",
      "Collision query through the world."
    ],
    [
      "Variable",
      "Named stored data that can be read or changed."
    ],
    [
      "Vector",
      "Three numerical values often representing 3D position or direction."
    ],
    [
      "Widget Blueprint",
      "UMG asset used to create UI."
    ]
  ]
};
