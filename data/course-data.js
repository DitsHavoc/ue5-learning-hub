window.UE5_COURSE_DATA = {
  "version": "3.15.0",
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
      "title": "Unreal Editor: Find, Select & Control",
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
        "type": "screenshot",
        "src": "assets/ue5/current/editor-main-window.webp",
        "caption": "Current classroom UE5 capture: Level Editor with Viewport, Outliner, Details and Content Browser visible.",
        "authenticUI": true,
        "versionNote": "Current classroom Unreal Engine capture (Aug 2026)."
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Know Your Unreal Editor?",
          "steps": [
            "The Viewport fills the centre of the main Level Editor.",
            "Open the Content Drawer with the button at the bottom of the Editor or its shortcut.",
            "The Outliner is normally on the upper-right and lists Actors in the current level.",
            "The Details panel sits below/alongside the Outliner and changes when you select something."
          ],
          "note": "If a panel disappears, use the Window menu to reopen common Editor panels instead of resetting the whole project."
        },
        "anatomy": [
          [
            "Viewport",
            "Navigate the level, select objects and manipulate their transforms."
          ],
          [
            "Outliner",
            "Shows Actors that currently exist in the open level; use it to select and organise them."
          ],
          [
            "Details",
            "Shows editable properties for whatever is selected: transform, components, materials and exposed variables."
          ],
          [
            "Content Drawer",
            "Stores project assets such as Blueprints, meshes, materials, textures, sounds and maps."
          ],
          [
            "Toolbar",
            "Contains common project actions such as Play and save/build-related controls."
          ]
        ],
        "process": [
          "Decide whether you are looking for a level Actor or a project asset.",
          "Select the Actor/asset in the appropriate panel.",
          "Inspect its properties instead of guessing where the setting lives.",
          "Make one controlled change.",
          "Save the correct asset or level and test the result."
        ],
        "examples": [
          {
            "title": "Change a lamp already in the level",
            "question": "Is this the placed Actor or the source asset?",
            "condition": "Placed Actor",
            "true": "Select it in Viewport/Outliner and edit its Details.",
            "false": "If you need the source Blueprint/mesh, locate that asset in the Content Drawer.",
            "why": "It separates level instances from project assets."
          },
          {
            "title": "Fix a prop in the wrong place",
            "question": "Which property controls position?",
            "condition": "Transform",
            "true": "Inspect Location/Rotation/Scale in Details and compare World/Local behaviour.",
            "false": "Do not duplicate or reimport the asset just to fix a transform.",
            "why": "The Details panel exposes the selected Actor's transform directly."
          }
        ],
        "remember": [
          "Outliner = things in this level; Content Drawer = assets in the project.",
          "Details only describes the current selection.",
          "Name and folder things while the project is small.",
          "Save both changed assets and maps deliberately."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Open a Third Person project",
          "do": "Open a Third Person project.",
          "why": "You need a known project before practising navigation.",
          "check": "The Third Person map is open and playable."
        },
        {
          "title": "Identify the Viewport, Outliner, Details and Content Drawer",
          "do": "Identify the Viewport, Outliner, Details and Content Drawer.",
          "why": "These four panels answer most early Unreal questions.",
          "check": "You can point to each panel without hunting."
        },
        {
          "title": "Place three Static Mesh Actors",
          "do": "Place three Static Mesh Actors.",
          "why": "Placing simple Actors lets you practise without extra gameplay complexity.",
          "check": "Three separate mesh Actors are visible in the level."
        },
        {
          "title": "Rename them in the Outliner",
          "do": "Rename them in the Outliner.",
          "why": "Readable names make the Outliner useful once the level grows.",
          "check": "The Outliner shows meaningful names rather than generic duplicates."
        },
        {
          "title": "Change Location, Rotation and Scale",
          "do": "Change Location, Rotation and Scale.",
          "why": "Transforms are the core of positioning anything in 3D.",
          "check": "Each Actor has a visibly different transform and you can restore it."
        },
        {
          "title": "Create a Learning folder in the Content Drawer and save",
          "do": "Create a Learning folder in the Content Drawer and save.",
          "why": "Folder structure established early prevents a chaotic project later.",
          "check": "A Learning folder exists and the level/project changes are saved."
        }
      ],
      "evidencePrompt": {
        "show": [
          "A screenshot of the Editor with Viewport, Outliner, Details and Content Drawer visible.",
          "A neatly named set of placed Actors in the Outliner.",
          "One Actor selected with its Transform visible in Details.",
          "Your organised Learning/project folder structure."
        ],
        "reflection": [
          "Which panel would you use to find a placed Actor and why?",
          "Which panel would you use to find a Blueprint asset?",
          "What mistake cost you the most time while learning the interface?",
          "What naming/folder rule will you use in the main project?"
        ]
      },
      "visuals": [
        {
          "type": "ue5",
          "src": "assets/ue5/current/editor-main-window.webp",
          "caption": "Current Unreal Editor workspace from a real classroom project. Students can see the Viewport in the centre, the Place Actors panel on the left, the Outliner and Details on the right, and the Content Browser / Content Drawer area at the bottom.",
          "authenticUI": true
        },
        {
          "type": "ue5",
          "src": "assets/ue5/current/editor-panels-closeup.webp",
          "caption": "Closer look at the core panels students use most often when starting out: Place Actors on the left, the main toolbar across the top, and the Content Browser at the bottom for locating folders and Blueprint assets.",
          "authenticUI": true
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/editor-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/editor-example.svg",
          "caption": "Original classroom worked example: Change a lamp already in the level.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Unreal Editor Interface",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/unreal-editor-interface?lang=en-US",
          "note": "Current Epic reference for the Level Editor panels, toolbar and layout.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "visualPlacement": "inline-top",
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Find the editor by touch",
          "task": "Without using notes, point out the Viewport, Outliner, Details and Content Browser/Drawer in your own project.",
          "steps": [
            "Select any Actor in the Viewport.",
            "Find the same Actor in the Outliner.",
            "Change one transform value in Details and watch the Viewport."
          ],
          "check": "You can move between the four panels without hunting for them."
        },
        {
          "kind": "test",
          "title": "Break your orientation on purpose",
          "task": "Make one small editor change, predict what will happen, then verify it.",
          "steps": [
            "Rename an Actor in the Outliner.",
            "Move or rotate it using Details instead of the gizmo.",
            "Undo and redo the change."
          ],
          "check": "You can explain which panel changed the Actor and which panel only organised it."
        },
        {
          "kind": "modify",
          "title": "Make the workspace yours",
          "task": "Create a tidy mini-work area rather than leaving default clutter.",
          "steps": [
            "Create one useful folder in the Outliner.",
            "Create one useful folder in the Content Browser.",
            "Move/rename assets or Actors so another student could understand the scene."
          ],
          "check": "Your scene and project structure are clearer than when you started."
        }
      ],
      "docVisuals": []
    },
    {
      "id": "actors-components",
      "path": "foundations",
      "order": 2,
      "title": "Actors & Components: Build Objects Properly",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Actors & Components?",
          "steps": [
            "Create or open an Actor Blueprint.",
            "Use the Components panel in the Blueprint Editor to add Components.",
            "Select a Component to edit its transform/properties in Details.",
            "Drag Components in the hierarchy to understand parent/child relationships."
          ],
          "note": "Components are added to an Actor; they are not separate placed Actors unless you deliberately use a Child Actor Component."
        },
        "anatomy": [
          [
            "Actor",
            "The whole object that exists in the world."
          ],
          [
            "Root Component",
            "The top transform parent for Scene Components."
          ],
          [
            "Scene Component",
            "A Component that has a transform and can parent children."
          ],
          [
            "Static Mesh Component",
            "Provides visible 3D geometry."
          ],
          [
            "Collision Component",
            "Provides a shape used for blocking, overlaps or queries."
          ],
          [
            "Audio/Light Components",
            "Add capabilities without creating another independent Actor."
          ]
        ],
        "process": [
          "Start with the gameplay object you want to represent.",
          "Add only the Components needed for its capabilities.",
          "Arrange the hierarchy so parent/child transforms make sense.",
          "Configure each Component in Details.",
          "Place the Actor and test the combined result as one object."
        ],
        "examples": [
          {
            "title": "Checkpoint beacon",
            "question": "What pieces make one checkpoint?",
            "condition": "One reusable Actor",
            "true": "Mesh + collision + light + audio live as Components inside BP_Checkpoint.",
            "false": "Avoid placing four unrelated Actors and hoping they stay together.",
            "why": "The checkpoint becomes one reusable object with one owner."
          },
          {
            "title": "Door with prompt zone",
            "question": "Should the prompt volume move with the door frame?",
            "condition": "Child Scene Component",
            "true": "Parent the collision/prompt Component appropriately so its transform follows the Actor.",
            "false": "Do not manually reposition a separate trigger every time the door moves.",
            "why": "Hierarchy gives predictable relative transforms."
          }
        ],
        "remember": [
          "Build the object from capabilities, not from a giant Event Graph.",
          "Child Scene Components transform relative to their parent.",
          "One Actor can contain many Components.",
          "Reusable behaviour may later belong in an Actor Component."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create BP_PracticeBeacon as an Actor Blueprint",
          "do": "Create BP_PracticeBeacon as an Actor Blueprint.",
          "why": "A fresh Actor Blueprint makes ownership clear.",
          "check": "BP_PracticeBeacon is an Actor Blueprint."
        },
        {
          "title": "Add a Static Mesh",
          "do": "Add a Static Mesh.",
          "why": "The mesh gives the object a visible body.",
          "check": "The mesh is visible in the Blueprint viewport."
        },
        {
          "title": "Add a Point Light",
          "do": "Add a Point Light.",
          "why": "The light demonstrates a non-mesh capability.",
          "check": "The Point Light changes the object's appearance."
        },
        {
          "title": "Add Box Collision",
          "do": "Add Box Collision.",
          "why": "Collision adds detection/physical capability.",
          "check": "Box Collision is visible with sensible dimensions."
        },
        {
          "title": "Arrange the hierarchy and transforms",
          "do": "Arrange the hierarchy and transforms.",
          "why": "Hierarchy practice teaches relative transforms.",
          "check": "Moving the parent causes child Scene Components to follow predictably."
        },
        {
          "title": "Compile and place the Blueprint into the level",
          "do": "Compile and place the Blueprint into the level.",
          "why": "Placing an instance proves the assembled Actor works as a reusable object.",
          "check": "The placed Blueprint behaves as one object in the level."
        }
      ],
      "evidencePrompt": {
        "show": [
          "Components hierarchy inside the Blueprint.",
          "A Details view showing one Component's settings.",
          "The assembled Actor placed in the level.",
          "A short note or screenshot showing how parent/child transforms behave."
        ],
        "reflection": [
          "Why is the checkpoint one Actor rather than several loose Actors?",
          "Which Component provides collision and which provides visuals?",
          "What does the Root Component control?",
          "What capability would you add as another Component in your main game?"
        ]
      },
      "visuals": [
        {
          "type": "book",
          "src": "assets/book/blueprint-editor.webp",
          "caption": "Reference figure from the supplied book: Blueprint Editor layout.",
          "authenticUI": true,
          "versionNote": "Supplied book reference (UE5.0-era). Current Unreal may look slightly different."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/actors-components-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/actors-components-example.svg",
          "caption": "Original classroom worked example: Checkpoint beacon.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Components Window",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/components-window-in-unreal-engine",
          "note": "Current Blueprint Editor Components window and component workflow.",
          "source": "Epic Games",
          "version": "UE5.8"
        },
        {
          "title": "Components",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/components-in-unreal-engine?lang=en-US",
          "note": "Epic overview of Actor, Scene and Primitive Components.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Build one Actor from components",
          "task": "Create a simple Actor Blueprint using more than one Component.",
          "steps": [
            "Add a Static Mesh Component.",
            "Add a Box Collision Component.",
            "Rename both Components clearly."
          ],
          "check": "The Components panel shows a readable parent/child hierarchy."
        },
        {
          "kind": "test",
          "title": "Component or whole Actor?",
          "task": "Change a Component transform and compare it with moving the Actor instance.",
          "steps": [
            "Offset the mesh inside the Blueprint.",
            "Compile and inspect the placed Actor.",
            "Move the whole Actor in the level."
          ],
          "check": "You can explain local Component placement versus Actor world placement."
        },
        {
          "kind": "modify",
          "title": "Add one useful capability",
          "task": "Add a Component that changes what the Actor can do.",
          "steps": [
            "Choose a Point Light, Audio, Arrow, Scene or another sensible Component.",
            "Place it correctly in the hierarchy.",
            "Explain why it belongs on this Actor."
          ],
          "check": "The extra Component has a clear gameplay or presentation purpose."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/6da79f18-bdc3-4588-9d20-e9f624bd1686/components_pane.png",
          "caption": "The real Components window inside the Blueprint Editor. Components form the hierarchy that builds an Actor from smaller pieces.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/67a54191-1b18-4e82-abb2-4f8ff258ee55/add_new_component_list.png",
          "caption": "Epic’s Add Component menu. Students should recognise this list when adding cameras, meshes, collision shapes and reusable behaviour.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b6089ad5-c41f-4916-b269-c07e885d5c27/transform_details.png",
          "caption": "A Component’s Transform properties in Details. Child Components inherit transform changes from their parent, so hierarchy matters.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        }
      ],
      "motionMedia": [
        {
          "slot": "intro",
          "title": "Adding Components to the Player Blueprint",
          "note": "Watch Epic add Components inside a real Player Blueprint. Use this before the Components exercise so the panel and workflow are recognisable.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_o3Rroz/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-2-create-a-flashlight-with-enhanced-input",
          "sourceTitle": "Epic UE5.8 — Create a Flashlight with Enhanced Input"
        }
      ]
    },
    {
      "id": "blueprint-classes",
      "path": "foundations",
      "order": 3,
      "title": "Blueprint Classes & Instances: Reuse Without Duplication",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Blueprint Classes & Instances?",
          "steps": [
            "In the Content Drawer, choose Add/New → Blueprint Class.",
            "Pick the parent class that best matches the object you are creating.",
            "Open the Blueprint to edit Class defaults and Components.",
            "Place multiple instances into the level and edit exposed values in each instance's Details."
          ],
          "note": "Changing the Class changes every instance unless an instance has intentionally overridden an exposed value."
        },
        "anatomy": [
          [
            "Blueprint Class",
            "Reusable definition of structure, defaults and behaviour."
          ],
          [
            "Instance",
            "One placed or spawned object created from that Class."
          ],
          [
            "Class Default",
            "Starting value inherited by instances."
          ],
          [
            "Instance Editable",
            "Allows a specific placed instance to override a variable."
          ],
          [
            "Parent Class",
            "Defines inherited capabilities such as Actor, Pawn or Character."
          ]
        ],
        "process": [
          "Choose the right parent Class.",
          "Build shared Components/logic once in the Class.",
          "Compile the Class.",
          "Place several instances.",
          "Expose only useful designer-facing variables and vary them per instance."
        ],
        "examples": [
          {
            "title": "Reusable door family",
            "question": "Do these doors share the same behaviour?",
            "condition": "Same Class",
            "true": "Use BP_Door instances with per-instance OpenDistance/Locked values.",
            "false": "Do not duplicate BP_Door_A, BP_Door_B and BP_Door_C just for small settings.",
            "why": "One bug fix then updates the whole family."
          },
          {
            "title": "Colour-coded terminals",
            "question": "Is colour a property or a completely different object type?",
            "condition": "Property difference",
            "true": "Expose a colour/material choice on one terminal Class.",
            "false": "Create a separate Class only when behaviour/structure genuinely differs.",
            "why": "Instances are designed for controlled variation."
          }
        ],
        "remember": [
          "Class = recipe; instance = one object made from it.",
          "Prefer exposed data over duplicated Classes.",
          "Choose the parent Class deliberately.",
          "A change to shared Class logic should not require editing every level instance."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create BP_ColourBlock",
          "do": "Create BP_ColourBlock.",
          "why": "A simple Class keeps the example focused.",
          "check": "BP_ColourBlock exists and compiles."
        },
        {
          "title": "Add a cube Static Mesh",
          "do": "Add a cube Static Mesh.",
          "why": "A visible cube makes instance differences obvious.",
          "check": "The Class contains the expected mesh."
        },
        {
          "title": "Compile and place three instances",
          "do": "Compile and place three instances.",
          "why": "Multiple instances prove reuse.",
          "check": "Three instances are placed."
        },
        {
          "title": "Change transforms on each instance",
          "do": "Change transforms on each instance.",
          "why": "Different transforms show instances remain independent world objects.",
          "check": "Each instance has its own transform."
        },
        {
          "title": "Edit the Class and observe all instances update",
          "do": "Edit the Class and observe all instances update.",
          "why": "Editing the Class proves shared changes propagate.",
          "check": "A Class edit appears on all instances after compile."
        },
        {
          "title": "Expose one useful variable and give each instance a different value",
          "do": "Expose one useful variable and give each instance a different value.",
          "why": "An exposed variable demonstrates intentional per-instance variation.",
          "check": "The exposed variable can differ between instances without duplicating the Blueprint."
        }
      ],
      "evidencePrompt": {
        "show": [
          "The Blueprint Class in the Content Drawer.",
          "Three instances in the same level.",
          "The same exposed variable showing different values on two instances.",
          "A before/after showing a Class change propagate to all instances."
        ],
        "reflection": [
          "What belongs in the Class and what can vary per instance?",
          "Why is duplicating near-identical Blueprints risky?",
          "What variable did you expose and why?",
          "Where could this pattern reduce duplication in Signal Lost?"
        ]
      },
      "visuals": [
        {
          "type": "book",
          "src": "assets/book/blueprint-editor.webp",
          "caption": "Reference figure from the supplied book: the Blueprint Class Editor and its main panels.",
          "authenticUI": true,
          "versionNote": "Supplied book reference (UE5.0-era). Current Unreal may look slightly different."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/blueprint-classes-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/blueprint-classes-example.svg",
          "caption": "Original classroom worked example: Reusable door family.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Blueprint Class Assets",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/blueprint-class-assets-in-unreal-engine",
          "note": "Current Epic definition of Blueprint Classes, parent classes and reusable instances.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Prove Class versus Instance",
          "task": "Place two instances of the same Blueprint Class.",
          "steps": [
            "Create or open a reusable Actor Blueprint.",
            "Place it twice in the level.",
            "Change the transform of only one instance."
          ],
          "check": "Both objects share the same Class but remain separate instances."
        },
        {
          "kind": "test",
          "title": "Default or override?",
          "task": "Change a Class Default, then compare it with an overridden instance value.",
          "steps": [
            "Make one variable Instance Editable.",
            "Give one instance a different value.",
            "Change the Class Default and observe both instances."
          ],
          "check": "You can explain why an override may not follow the new default."
        },
        {
          "kind": "modify",
          "title": "Design for reuse",
          "task": "Create a third instance that looks/behaves different without duplicating the Blueprint.",
          "steps": [
            "Use Instance Editable variables.",
            "Keep the underlying logic shared.",
            "Give the third instance a deliberate variation."
          ],
          "check": "One Class now supports multiple useful variations."
        }
      ],
      "docVisuals": [
        {
          "src": "https://dev.epicgames.com/community/api/documentation/image/bd914bd2-52e6-4926-844b-ed56b093a736?height=335&resizing_type=fill&width=1920",
          "caption": "Epic’s current Blueprint Class reference. A Blueprint Class defines a reusable type; instances placed in the world inherit that class behaviour.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-class-assets-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        }
      ],
      "motionMedia": [
        {
          "slot": "intro",
          "title": "Introduction to the Player Blueprint",
          "note": "A short official overview of working inside a reusable Player Blueprint class.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_02MEXM/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-2-create-a-flashlight-with-enhanced-input",
          "sourceTitle": "Epic UE5.8 — Create a Flashlight with Enhanced Input"
        }
      ]
    },
    {
      "id": "events",
      "path": "blueprints",
      "order": 1,
      "title": "Events & Execution: Make Logic Actually Run",
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
        "type": "screenshot",
        "src": "assets/ue5/current/events-execution-real.webp",
        "caption": "Current classroom UE5 capture: Event BeginPlay driving a clear execution chain into a stored reference.",
        "authenticUI": true,
        "versionNote": "Current classroom Unreal Engine capture (Aug 2026)."
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Events & Execution?",
          "steps": [
            "Open any Blueprint Event Graph.",
            "Right-click and search for events available to that Blueprint.",
            "Common entry events include BeginPlay, overlap/hit events and input-related events depending on setup.",
            "Use execution wires to follow what runs after the event."
          ],
          "note": "An Event is an entry point. Data nodes sitting in the graph do not run by themselves just because they are connected visually."
        },
        "anatomy": [
          [
            "Event Node",
            "Starts an execution path when that event occurs."
          ],
          [
            "Execution Pin",
            "White arrow pin controlling when actions run."
          ],
          [
            "Data Pin",
            "Carries a value; it does not itself decide execution order."
          ],
          [
            "Event BeginPlay",
            "Fires when that Actor begins play."
          ],
          [
            "Event Tick",
            "Runs every frame and should be used only when continuous per-frame work is genuinely required."
          ]
        ],
        "process": [
          "Something happens in the game/runtime.",
          "The matching Event fires.",
          "Execution follows the white wire in order.",
          "Each action may read or change data.",
          "Debugging asks where the execution path stopped or never started."
        ],
        "examples": [
          {
            "title": "Facility powers up",
            "question": "When should initial state be created?",
            "condition": "Actor begins play",
            "true": "Use BeginPlay to initialise state/UI references that need to exist once.",
            "false": "Do not put one-time setup on Tick.",
            "why": "The lifetime of the event matches the job."
          },
          {
            "title": "Checkpoint trigger",
            "question": "What causes activation?",
            "condition": "Player overlaps volume",
            "true": "BeginOverlap starts checkpoint logic.",
            "false": "If no overlap occurs, no execution should run.",
            "why": "Event choice should describe the gameplay cause."
          }
        ],
        "remember": [
          "If execution never reaches a node, that node cannot affect gameplay.",
          "White wires answer 'when'; coloured pins answer 'with what data'.",
          "Use Print String or breakpoints to prove an Event fired.",
          "Tick is not a default event for ordinary logic."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create BP_EventPractice",
          "do": "Create BP_EventPractice.",
          "why": "A dedicated practice Blueprint isolates event flow.",
          "check": "The practice Blueprint exists and is placed if required."
        },
        {
          "title": "Connect Event BeginPlay to Print String",
          "do": "Connect Event BeginPlay to Print String.",
          "why": "Print String immediately proves BeginPlay fired.",
          "check": "BeginPlay produces visible debug output."
        },
        {
          "title": "Add two more Print String actions",
          "do": "Add two more Print String actions.",
          "why": "A chain makes execution order visible.",
          "check": "Messages appear in your predicted order."
        },
        {
          "title": "Predict the order before testing",
          "do": "Predict the order before testing.",
          "why": "Prediction forces reasoning about order.",
          "check": "Disconnecting a wire prevents later messages."
        },
        {
          "title": "Disconnect one execution wire and retest",
          "do": "Disconnect one execution wire and retest.",
          "why": "Breaking a wire demonstrates that downstream nodes no longer execute.",
          "check": "Reconnecting restores the chain."
        },
        {
          "title": "Add a second Event and compare when each fires",
          "do": "Add a second Event and compare when each fires.",
          "why": "A second event shows that different causes can start separate execution paths.",
          "check": "You can explain exactly what causes each event to fire."
        }
      ],
      "evidencePrompt": {
        "show": [
          "An Event Graph with a clearly readable execution chain.",
          "In-game Print String proof that the event fired.",
          "A second event with a different trigger.",
          "A screenshot showing where execution was intentionally broken for debugging."
        ],
        "reflection": [
          "What event starts your main mechanic?",
          "What is the difference between an execution pin and data pin?",
          "Why would Tick be a poor choice for a one-off setup?",
          "How did you prove whether an event fired?"
        ]
      },
      "visuals": [
        {
          "type": "ue5",
          "src": "assets/ue5/current/events-execution-real.webp",
          "caption": "A real Event Graph example. Event BeginPlay triggers the white execution wire, runs Get All Actors of Class, then stores the result in a variable. This is exactly the sort of linear execution chain students build constantly in UE5.",
          "authenticUI": true
        },
        {
          "type": "ue5",
          "src": "assets/ue5/current/events-execution-closeup.webp",
          "caption": "Close-up on the start of the chain. Notice that execution enters from Event BeginPlay through the white wire, while blue data pins carry values separately.",
          "authenticUI": true
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/execution-flow.svg",
          "caption": "Original classroom diagram: event and execution flow.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/events-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/events-example.svg",
          "caption": "Original classroom worked example: Facility powers up.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Blueprint Foundations",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/blueprint-foundations",
          "note": "Epic foundation reference for Event Graphs, execution and common Blueprint concepts.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "visualPlacement": "inline-top",
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Watch execution begin",
          "task": "Build the smallest visible event chain.",
          "steps": [
            "Connect Event BeginPlay to Print String.",
            "Add a second Print String after it.",
            "Predict the order before pressing Play."
          ],
          "check": "Both messages appear in the order you predicted."
        },
        {
          "kind": "test",
          "title": "Break the white wire",
          "task": "Disconnect one execution wire and retest.",
          "steps": [
            "Predict which nodes will stop running.",
            "Press Play.",
            "Reconnect the wire and verify the chain returns."
          ],
          "check": "You can explain why data sitting in a graph does not execute by itself."
        },
        {
          "kind": "modify",
          "title": "Add another cause",
          "task": "Add a second Event that starts a different path.",
          "steps": [
            "Use an overlap, hit, input or another suitable Event.",
            "Give it visibly different feedback.",
            "Trigger both Events separately."
          ],
          "check": "You can state exactly what causes each execution path to begin."
        }
      ],
      "docVisuals": [],
      "motionMedia": [
        {
          "slot": "practice",
          "title": "Creating Coin Counter Blueprint Functionality",
          "note": "Watch a real Blueprint gameplay interaction being wired and executed. Focus on what starts the logic and how execution moves through the graph.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_xrG6Fm/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-3-create-a-coin-pickup-with-modeling-tools-and-blueprints",
          "sourceTitle": "Epic UE5.8 — Create a Coin Pickup with Blueprints"
        }
      ]
    },
    {
      "id": "variables",
      "path": "blueprints",
      "order": 2,
      "title": "Variables & Data Types: Store Game State",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Variables & Data Types?",
          "steps": [
            "Open a Blueprint and use the Variables section of My Blueprint.",
            "Click + to create a variable and name it before choosing its type.",
            "Select the variable to edit type, default value, Category, Tooltip and Instance Editable settings in Details.",
            "Drag the variable into the graph and choose Get to read or Set to change it."
          ],
          "note": "Compile after creating/changing variables so defaults and instance-editable options become available consistently."
        },
        "anatomy": [
          [
            "Name",
            "Describes what the value means, not merely its type."
          ],
          [
            "Type",
            "Controls what kind of data can be stored."
          ],
          [
            "Default Value",
            "Value used before gameplay changes it."
          ],
          [
            "Get",
            "Reads the current stored value."
          ],
          [
            "Set",
            "Changes the stored value."
          ],
          [
            "Instance Editable",
            "Lets a level instance override a designer-facing value."
          ]
        ],
        "process": [
          "Decide what state the game needs to remember.",
          "Choose the smallest clear data type.",
          "Give it a meaningful name/default.",
          "Get the value when logic needs to read it.",
          "Set it only when gameplay intentionally changes the state."
        ],
        "examples": [
          {
            "title": "Door configuration",
            "question": "What information describes the door?",
            "condition": "Different kinds of data",
            "true": "IsLocked = Boolean; OpenDistance = Float; RequiredKey = appropriate reference/id.",
            "false": "Do not store every value as text or create multiple vague 'Value' variables.",
            "why": "Types communicate intent and reduce invalid data."
          },
          {
            "title": "Player health",
            "question": "Does the value change over time?",
            "condition": "Persistent gameplay state",
            "true": "Store Health, Get it to display/check, Set it when damage/healing occurs.",
            "false": "A temporary calculation result may belong in a local variable instead.",
            "why": "Variables are for information the object needs to remember."
          }
        ],
        "remember": [
          "Get reads; Set changes.",
          "Names should communicate meaning: CurrentHealth beats Number1.",
          "Boolean names often read well as questions/states: IsDead, HasKey, CanInteract.",
          "Expose only variables a designer needs to edit."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create Health as a Float with default 100",
          "do": "Create Health as a Float with default 100.",
          "why": "Health is a clear numeric state with an obvious default.",
          "check": "Health is a Float and defaults to 100."
        },
        {
          "title": "Create IsActive as a Boolean",
          "do": "Create IsActive as a Boolean.",
          "why": "IsActive demonstrates two-state logic.",
          "check": "IsActive is Boolean with an intentional default."
        },
        {
          "title": "Get Health and print it on BeginPlay",
          "do": "Get Health and print it on BeginPlay.",
          "why": "Reading before changing proves what the Blueprint currently stores.",
          "check": "The initial print matches the default Health."
        },
        {
          "title": "Set Health to a new value and print again",
          "do": "Set Health to a new value and print again.",
          "why": "Setting then reading shows state persistence across execution steps.",
          "check": "After Set, the second print shows the new value."
        },
        {
          "title": "Make one variable Instance Editable",
          "do": "Make one variable Instance Editable.",
          "why": "Instance Editable demonstrates controlled designer variation.",
          "check": "A placed instance exposes only the intended variable."
        },
        {
          "title": "Add a useful Tooltip",
          "do": "Add a useful Tooltip.",
          "why": "A Tooltip turns an exposed setting into self-documenting content.",
          "check": "Hovering/inspecting the exposed variable explains its purpose."
        }
      ],
      "evidencePrompt": {
        "show": [
          "Variables panel showing clearly named variables/types.",
          "A Get and Set example in the Event Graph.",
          "One Instance Editable variable in a placed Actor's Details.",
          "A Tooltip/Category used to document a designer-facing setting."
        ],
        "reflection": [
          "Why did you choose each variable type?",
          "What is the difference between Get and Set?",
          "Which values should be Instance Editable and which should stay internal?",
          "How could a bad variable name make debugging harder?"
        ]
      },
      "visuals": [
        {
          "type": "book",
          "src": "assets/book/variables-panel.webp",
          "caption": "Reference figure from the supplied book: variables in My Blueprint.",
          "authenticUI": true,
          "versionNote": "Supplied book reference (UE5.0-era). Current Unreal may look slightly different."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/variables-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/variables-example.svg",
          "caption": "Original classroom worked example: Door configuration.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Blueprint Variables",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "note": "Current variable types, Get/Set nodes, Instance Editable, defaults and properties.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Store two kinds of state",
          "task": "Create one Boolean and one numeric variable.",
          "steps": [
            "Give both clear names.",
            "Set sensible default values.",
            "Drag each into the graph as Get."
          ],
          "check": "You can identify their types and current values."
        },
        {
          "kind": "test",
          "title": "Get versus Set",
          "task": "Change a value during play and prove the difference between reading and writing.",
          "steps": [
            "Use Set to change a variable.",
            "Read it afterwards with Get.",
            "Print or otherwise display the result."
          ],
          "check": "The runtime value changes only when the Set executes."
        },
        {
          "kind": "modify",
          "title": "Expose a designer control",
          "task": "Make one useful variable Instance Editable.",
          "steps": [
            "Choose a value designers might reasonably tune.",
            "Change it on two placed instances.",
            "Test both instances."
          ],
          "check": "The same Blueprint produces different results without duplicated logic."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/d891edb3-17af-428d-b3ce-53ed05ffc12d/myblueprintpane.png",
          "caption": "Variables listed in the real My Blueprint panel. This is where students create, name and organise gameplay state.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/1a1c94bb-ee27-48da-a1fa-0e58d6e2aaaf/blueprint_details_variable_callout.png",
          "caption": "Variable properties in Details. Instance Editable, Tooltip and Category are part of writing Blueprints that other designers can actually use.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b434ff6d-758e-4d90-8948-858f44451ad4/getvariable.png",
          "caption": "A real Get variable node. Get reads the current stored value without changing it.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7aae90b4-6b4c-41a5-a6de-c04da58f511e/setvariable.png",
          "caption": "A real Set variable node. Set changes stored state and therefore needs execution flow.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        }
      ],
      "motionMedia": [
        {
          "slot": "concept",
          "title": "Binding UI Elements to Blueprint Variables",
          "note": "A useful real-world example of values stored in Blueprint driving something the player sees.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_3eri2o/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-4-build-a-hud-with-unreal-motion-graphics",
          "sourceTitle": "Epic UE5.8 — Build a HUD with Unreal Motion Graphics"
        }
      ]
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
        "type": "screenshot",
        "src": "assets/ue5/current/branch-node-real.webp",
        "caption": "Current classroom UE5 capture: real Branch nodes controlling crate extraction rules in gameplay logic.",
        "authenticUI": true,
        "versionNote": "Current classroom Unreal Engine capture (Aug 2026)."
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
          "type": "ue5",
          "src": "assets/ue5/current/branch-node-real.webp",
          "caption": "Real gameplay Blueprint logic using Branch nodes. This shows a true production example: the first Branch checks whether the crate is already extracted, and the second Branch tests whether the correct soldier is carrying it.",
          "authenticUI": true
        },
        {
          "type": "ue5",
          "src": "assets/ue5/current/branch-condition-closeup.webp",
          "caption": "Close-up on the first decision. The Branch receives a Boolean condition and then routes execution to the True or False pin. This is the exact node shape students should recognise in Unreal.",
          "authenticUI": true
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/branch-node-anatomy.svg",
          "caption": "Original classroom diagram: the four parts of a Branch node and what each pin means.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/branch-locked-door-example.svg",
          "caption": "Original classroom example: HasAccessCard chooses between opening the door and showing Access denied.",
          "authenticUI": false
        },
        {
          "type": "motion",
          "src": "assets/diagrams/branch-decision-demo.svg",
          "caption": "Animated SVG: execution alternates between the True and False paths to reinforce that only one route runs each time.",
          "authenticUI": false
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
      },
      "officialRefs": [
        {
          "title": "Blueprints Quick Start Guide",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/quick-start-guide-for-blueprints-visual-scripting-in-unreal-engine",
          "note": "Current Epic Blueprint workflow reference; use alongside the real Branch screenshot below.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "visualPlacement": "inline-top",
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Make one decision",
          "task": "Create a Boolean-driven Branch with visible feedback.",
          "steps": [
            "Create a Boolean such as HasKey.",
            "Connect it to Branch Condition.",
            "Give True and False different Print String messages."
          ],
          "check": "Both outcomes are wired and readable."
        },
        {
          "kind": "test",
          "title": "Force both outcomes",
          "task": "Prove you tested True and False rather than only the happy path.",
          "steps": [
            "Run once with the Boolean False.",
            "Run once with it True.",
            "Predict the message before each test."
          ],
          "check": "Both paths execute exactly when expected."
        },
        {
          "kind": "modify",
          "title": "Add a second rule",
          "task": "Make access depend on one more piece of state.",
          "steps": [
            "Add a second Boolean or comparison.",
            "Combine it cleanly with the first rule.",
            "Keep the final decision readable."
          ],
          "check": "You can explain the complete condition in one sentence."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f71f4d3e-8707-4d18-b398-fca822b66bdd/branch_example.png",
          "caption": "Epic’s official Branch example: one Boolean condition decides which execution path runs. Compare this with the real project Branch above.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/flow-control-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        }
      ]
    },
    {
      "id": "functions",
      "path": "blueprints",
      "order": 4,
      "title": "Functions & Macros: Reuse Logic Clearly",
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
        "type": "screenshot",
        "src": "assets/ue5/current/function-real.webp",
        "caption": "Current classroom UE5 capture: a real UpdateOverheadWidget Function using variables, a cast, maths and a widget update call.",
        "authenticUI": true,
        "versionNote": "Current classroom Unreal Engine capture (Aug 2026)."
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Functions & Macros?",
          "steps": [
            "In My Blueprint, click + beside Functions or use the add menu.",
            "Name the Function after one clear job.",
            "Select the Function entry/result nodes to add inputs and outputs in Details.",
            "Call the Function from another graph by dragging/searching its name."
          ],
          "note": "A Function should describe intent. If its name needs 'AndAndAnd' to explain three unrelated jobs, split the responsibilities."
        },
        "anatomy": [
          [
            "Function",
            "Named reusable graph that performs one job."
          ],
          [
            "Input",
            "Data supplied by the caller."
          ],
          [
            "Output",
            "Result returned to the caller."
          ],
          [
            "Local Variable",
            "Temporary working data that exists only inside the Function."
          ],
          [
            "Call Site",
            "The node used elsewhere to execute the Function."
          ]
        ],
        "process": [
          "Spot repeated or conceptually self-contained logic.",
          "Give the job a clear verb-led name.",
          "Turn changing values into inputs rather than hard-coding them.",
          "Return only results the caller needs.",
          "Call/test it from more than one situation to prove reuse."
        ],
        "examples": [
          {
            "title": "CalculateDamage",
            "question": "What part of damage is reusable?",
            "condition": "BaseDamage × Multiplier",
            "true": "A Function accepts both values and returns FinalDamage.",
            "false": "Do not copy the maths into every weapon Blueprint.",
            "why": "One formula becomes one maintainable source of truth."
          },
          {
            "title": "CanOpenDoor",
            "question": "Does this door meet its access rules?",
            "condition": "Inputs: access state/power",
            "true": "Return a Boolean and let the caller decide what feedback/action follows.",
            "false": "Do not make a tiny check secretly control unrelated UI, sound and save data.",
            "why": "A focused Function is easier to test and reuse."
          }
        ],
        "remember": [
          "Functions reduce duplication and reveal intent.",
          "Inputs beat hard-coded values when behaviour must be reusable.",
          "Use local variables for temporary working values.",
          "Refactoring into a Function should make the top-level graph easier to read."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create BP_FunctionPractice",
          "do": "Create BP_FunctionPractice.",
          "why": "A practice Actor gives a safe refactoring space.",
          "check": "CalculateDamage exists and has a clear name."
        },
        {
          "title": "Create CalculateDamage",
          "do": "Create CalculateDamage.",
          "why": "Two Float inputs demonstrate parameterised reuse.",
          "check": "BaseDamage and Multiplier are Float inputs."
        },
        {
          "title": "Add BaseDamage and Multiplier Float inputs",
          "do": "Add BaseDamage and Multiplier Float inputs.",
          "why": "A returned Float shows that Functions can calculate results.",
          "check": "FinalDamage is returned from the Function."
        },
        {
          "title": "Return FinalDamage",
          "do": "Return FinalDamage.",
          "why": "Printing the result proves the call worked.",
          "check": "The first call prints the expected result."
        },
        {
          "title": "Call it from BeginPlay and print the result",
          "do": "Call it from BeginPlay and print the result.",
          "why": "Different arguments prove the Function is not hard-coded.",
          "check": "A second call with different inputs produces a different correct result."
        },
        {
          "title": "Call it again with different values",
          "do": "Call it again with different values.",
          "why": "Comparing call sites demonstrates why one Function is easier to maintain than copies.",
          "check": "Changing the Function formula changes both call sites."
        }
      ],
      "evidencePrompt": {
        "show": [
          "The Function definition with inputs/outputs.",
          "Two different call sites using the same Function.",
          "Before/after top-level graph showing reduced duplication.",
          "A clear Function name that describes gameplay intent."
        ],
        "reflection": [
          "What logic did you move into a Function and why?",
          "Which values became inputs?",
          "What result does the Function return?",
          "How would duplicated logic make future changes harder?"
        ]
      },
      "visuals": [
        {
          "type": "ue5",
          "src": "assets/ue5/current/function-real.webp",
          "caption": "A real function from a classroom project. UpdateOverheadWidget gathers values, casts to the correct widget type, then sends clean inputs into another function call. This is exactly why functions help organise repeated logic.",
          "authenticUI": true
        },
        {
          "type": "ue5",
          "src": "assets/ue5/current/function-update-closeup.webp",
          "caption": "Close-up of the reusable logic inside the function. Inputs are processed, the widget reference is validated through a cast, and a dedicated update function is called with readable parameters.",
          "authenticUI": true
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/functions-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/functions-example.svg",
          "caption": "Original classroom worked example: CalculateDamage.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Functions",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/functions-in-unreal-engine?lang=en-US",
          "note": "Current Epic reference for Function graphs, calls and access.",
          "source": "Epic Games",
          "version": "UE5.8"
        },
        {
          "title": "Creating Functions",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-functions-in-unreal-engine",
          "note": "Step-by-step current UE workflow for creating and calling a Function.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "visualPlacement": "inline-top",
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Extract one clear job",
          "task": "Create a Function that performs one reusable calculation or action.",
          "steps": [
            "Give it a verb-based name.",
            "Add at least one input.",
            "Return a value or perform one clearly defined job."
          ],
          "check": "The Function name describes exactly what it does."
        },
        {
          "kind": "test",
          "title": "Call it twice",
          "task": "Prove the Function is reusable rather than hard-coded.",
          "steps": [
            "Call it with one set of inputs.",
            "Call it again with different inputs.",
            "Compare the results."
          ],
          "check": "Both calls use the same Function but produce appropriate results."
        },
        {
          "kind": "modify",
          "title": "Change once, fix everywhere",
          "task": "Edit the Function implementation and retest both call sites.",
          "steps": [
            "Change the formula or internal behaviour.",
            "Compile.",
            "Retest both calls without editing either call site."
          ],
          "check": "One edit updates every use of the Function."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/cd54af36-d3ee-4cc5-8283-f3ddd2d79f65/name_function_blueprint.png",
          "caption": "Creating and naming a Function in My Blueprint. Functions are reusable graphs with a single entry point.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/functions-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/285c04b9-ff68-41c8-b4b3-d38c7ff3aeb3/function_details.png",
          "caption": "Function Details showing parameters and function settings. Inputs and outputs turn a chunk of logic into a clean reusable API.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/functions-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/99df6452-fb8c-4b49-8b87-c43e7dfa8b14/input_output_macro.png",
          "caption": "A Macro graph begins with input and output tunnel nodes. Unlike a Function, a Macro can expose multiple execution outputs.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/macros-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/d67b5586-d878-440f-8869-61a16858d389/score_comparison_example_macro.png",
          "caption": "Epic’s Macro example containing decision logic. Use this to compare what a Macro looks like internally with a Function graph.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/macros-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        }
      ],
      "motionMedia": [
        {
          "slot": "deeper",
          "title": "Creating Game Timer Blueprint Logic",
          "note": "Watch a larger piece of Blueprint logic organised into a purposeful gameplay system, then compare its readability with your own function/macro decisions.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_nTH7j6/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-3-creating-the-game-timer-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Creating the Game Timer"
        }
      ]
    },
    {
      "id": "framework",
      "path": "framework",
      "order": 1,
      "title": "Gameplay Framework: Put Logic in the Right Place",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Gameplay Framework?",
          "steps": [
            "Open the Third Person Character to inspect a Character/Pawn in context.",
            "Open Project Settings/Maps & Modes or the active GameMode settings to see default framework classes.",
            "Create Blueprint Classes derived from GameModeBase/GameInstance when practising those responsibilities.",
            "Use framework getter nodes only when the lifetime/ownership genuinely matches."
          ],
          "note": "Framework choice is primarily an ownership and lifetime decision, not a hunt for whichever Class is easiest to access."
        },
        "anatomy": [
          [
            "Pawn",
            "Possessable body in the world."
          ],
          [
            "Character",
            "Pawn with common character movement/capsule features."
          ],
          [
            "Controller",
            "The controlling 'brain' that possesses a Pawn."
          ],
          [
            "GameMode",
            "Game rules and default gameplay Classes for the active world/mode."
          ],
          [
            "GameInstance",
            "Object lasting for the running application and across level changes."
          ]
        ],
        "process": [
          "Ask whose responsibility the data/behaviour is.",
          "Ask how long it must live.",
          "Choose the framework Class matching ownership/lifetime.",
          "Access that Class deliberately rather than storing random globals.",
          "Test a level transition or respawn if lifetime matters."
        ],
        "examples": [
          {
            "title": "Player health vs game rules",
            "question": "Who owns this information?",
            "condition": "Personal state vs game rule",
            "true": "Character/health component owns Health; GameMode owns win/start/rule logic.",
            "false": "Do not store player health in GameMode merely because it is easy to retrieve.",
            "why": "Ownership keeps unrelated systems independent."
          },
          {
            "title": "Selected theme across maps",
            "question": "Must the value survive a level load?",
            "condition": "Session-wide state",
            "true": "GameInstance is a suitable place for a small session value.",
            "false": "A variable on a level Actor will disappear with that level.",
            "why": "Lifetime should match the requirement."
          }
        ],
        "remember": [
          "Pawn = body; Controller = controlling brain is a useful starting model.",
          "GameMode is for rules, not a universal dumping ground.",
          "GameInstance survives map changes during the running session, not application restarts.",
          "SaveGame is required for persistence after closing the game."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Open the Third Person character and identify its parent Class",
          "do": "Open the Third Person character and identify its parent Class.",
          "why": "The template Character gives a real example of framework inheritance.",
          "check": "You can identify the Character parent Class."
        },
        {
          "title": "Inspect the project GameMode",
          "do": "Inspect the project GameMode.",
          "why": "GameMode inspection reveals what Class is actually being used.",
          "check": "You can find the active/default GameMode."
        },
        {
          "title": "Find which Pawn/Character the GameMode uses",
          "do": "Find which Pawn/Character the GameMode uses.",
          "why": "Finding the default Pawn connects rules to spawned player bodies.",
          "check": "You can identify which Pawn/Character it chooses."
        },
        {
          "title": "Create a simple custom GameMode",
          "do": "Create a simple custom GameMode.",
          "why": "A custom GameMode makes ownership visible.",
          "check": "Your custom GameMode can be selected for a map/project."
        },
        {
          "title": "Create a GameInstance Blueprint",
          "do": "Create a GameInstance Blueprint.",
          "why": "A GameInstance Blueprint introduces longer session lifetime.",
          "check": "Your custom GameInstance is configured in project settings."
        },
        {
          "title": "Store a test value in GameInstance and discuss why it survives a level change",
          "do": "Store a test value in GameInstance and discuss why it survives a level change.",
          "why": "A test value plus level change proves lifetime rather than relying on memory.",
          "check": "The test value survives a map change but you understand it will not survive closing the app."
        }
      ],
      "evidencePrompt": {
        "show": [
          "Active GameMode/default classes.",
          "Your GameInstance Blueprint and its configured project setting.",
          "A simple ownership diagram for Character, Controller, GameMode and GameInstance.",
          "Proof of a value surviving a level change."
        ],
        "reflection": [
          "Who owns player health in your project and why?",
          "What belongs in GameMode?",
          "What lifetime does GameInstance provide?",
          "What would require SaveGame instead?"
        ]
      },
      "visuals": [
        {
          "type": "diagram",
          "src": "assets/diagrams/communication.svg",
          "caption": "Original classroom relationship diagram; use alongside the framework notes.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/framework-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/framework-example.svg",
          "caption": "Original classroom worked example: Player health vs game rules.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Gameplay Framework",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-framework-in-unreal-engine",
          "note": "Current relationships and responsibilities for GameMode, GameState, PlayerController, Pawn and related classes.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Name the owner",
          "task": "Inspect the framework Classes in your project.",
          "steps": [
            "Find the Character/Pawn.",
            "Find the PlayerController and GameMode.",
            "Identify GameInstance/GameState if present."
          ],
          "check": "You can give one sensible responsibility for each Class you found."
        },
        {
          "kind": "test",
          "title": "Where should this variable live?",
          "task": "Choose three example values and decide their owner before building them.",
          "steps": [
            "Player health.",
            "Current match score/rules.",
            "A value that must survive a level change."
          ],
          "check": "You can justify each location using lifetime and responsibility."
        },
        {
          "kind": "modify",
          "title": "Move one responsibility",
          "task": "Take one piece of logic/data currently in an awkward place and relocate it conceptually or practically.",
          "steps": [
            "Name the current owner.",
            "Name the better owner.",
            "Explain what reference/communication is then required."
          ],
          "check": "The new location makes the system easier to reason about."
        }
      ],
      "docVisuals": [
        {
          "src": "https://dev.epicgames.com/community/api/documentation/image/ddca6cd5-4c8a-4299-b615-7c55831f5cd3?height=335&resizing_type=fill&width=1920",
          "caption": "Epic’s Game Mode / Game State reference. These classes are part of the Gameplay Framework, but they have different responsibilities and lifetimes.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/game-mode-and-game-state-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/82de9ad7-aa25-4e39-9fef-164ab79afe03/world-settings-search.gif",
          "caption": "The real World Settings panel. GameMode Override is one place students can choose which Game Mode controls a level.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/world-settings-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        }
      ],
      "motionMedia": [
        {
          "slot": "deeper",
          "title": "Building a Level Checkpoint",
          "note": "A system-level example: world trigger, player state and respawn behaviour must cooperate instead of living as isolated nodes.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_owUMlG/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-6-creating-level-checkpoints-and-kill-volumes-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Level Checkpoints and Kill Volumes"
        }
      ]
    },
    {
      "id": "references-casting",
      "path": "framework",
      "order": 2,
      "title": "References & Casting: Know What Object You Have",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use References & Casting?",
          "steps": [
            "References commonly come from event outputs such as Other Actor/Hit Actor, Spawn Actor return values, stored variables or framework getter nodes.",
            "Drag from an existing reference pin and search for Cast To <Class> when you genuinely need a specific type check.",
            "Use the successful Cast output as the correctly typed reference.",
            "Always understand what should happen if Cast Failed can occur."
          ],
          "note": "Casting checks a reference you already possess. It does not search the level for an object."
        },
        "anatomy": [
          [
            "Reference",
            "Points to one specific object instance."
          ],
          [
            "Source Reference",
            "The object value fed into the Cast."
          ],
          [
            "Cast To X",
            "Runtime type check/conversion to a known Class."
          ],
          [
            "As X",
            "Typed reference available when the Cast succeeds."
          ],
          [
            "Cast Failed",
            "Execution path when the object is not the requested type."
          ]
        ],
        "process": [
          "Obtain a real object reference from a reliable source.",
          "Ask whether you require behaviour/data unique to a specific Class.",
          "Cast only if that specific type matters.",
          "Use the successful typed reference.",
          "Handle failure or choose an Interface if many unrelated Classes should respond."
        ],
        "examples": [
          {
            "title": "Overlap only cares about the player",
            "question": "Is Other Actor the player Character Class?",
            "condition": "Other Actor reference",
            "true": "Cast to your Character and read player-specific state.",
            "false": "Ignore/handle the failed path.",
            "why": "The trigger has a genuine dependency on one specific Class."
          },
          {
            "title": "Generic Interact system",
            "question": "Could this target be a door, pickup or terminal?",
            "condition": "Many unrelated Classes",
            "true": "Prefer an Interface message rather than a chain of casts.",
            "false": "A Cast is fine when only one specific Class is valid.",
            "why": "Communication choice should reflect how many types need to participate."
          }
        ],
        "remember": [
          "Reference first, Cast second.",
          "Cast is a type check, not Find Actor.",
          "Long cast chains are often a design smell.",
          "If you only need common behaviour, consider an Interface."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Use an overlap event to obtain Other Actor",
          "do": "Use an overlap event to obtain Other Actor.",
          "why": "Overlap gives a real reference without searching globally.",
          "check": "Other Actor is available from the event."
        },
        {
          "title": "Print the Other Actor name",
          "do": "Print the Other Actor name.",
          "why": "Printing its name proves what object the event supplied.",
          "check": "The debug name changes depending on what overlaps."
        },
        {
          "title": "Cast Other Actor to the player Character Class",
          "do": "Cast Other Actor to the player Character Class.",
          "why": "The Cast demonstrates checking for a specific player Class.",
          "check": "Player overlap follows Cast success."
        },
        {
          "title": "Use the successful Cast result to read one player variable",
          "do": "Use the successful Cast result to read one player variable.",
          "why": "Reading one variable proves why the typed result is useful.",
          "check": "A player-specific variable can be accessed through As <Character>."
        },
        {
          "title": "Test with a non-player Actor and observe Cast Failed",
          "do": "Test with a non-player Actor and observe Cast Failed.",
          "why": "Testing a non-player proves Cast Failed is real.",
          "check": "A non-player reaches Cast Failed or is safely ignored."
        },
        {
          "title": "Discuss whether an Interface would be better for a more generic interaction",
          "do": "Discuss whether an Interface would be better for a more generic interaction.",
          "why": "Comparing with Interfaces prevents students treating Cast as the only communication tool.",
          "check": "You can explain when an Interface would reduce dependency."
        }
      ],
      "evidencePrompt": {
        "show": [
          "The source of the reference feeding the Cast.",
          "Successful Cast path using a player-specific value.",
          "A deliberate Cast Failed test.",
          "A short comparison of Cast vs Interface for your interaction system."
        ],
        "reflection": [
          "Where did your reference come from?",
          "What exactly did the Cast check?",
          "What happens when the reference is the wrong Class?",
          "Why might repeated Cast chains make a system harder to extend?"
        ]
      },
      "visuals": [
        {
          "type": "book",
          "src": "assets/book/casting-example.webp",
          "caption": "Reference figure from the supplied book: Casting in Blueprints.",
          "authenticUI": true,
          "versionNote": "Supplied book reference (UE5.0-era). Current Unreal may look slightly different."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/references-casting-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/references-casting-example.svg",
          "caption": "Original classroom worked example: Overlap only cares about the player.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Blueprint Communications",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "note": "Current Epic examples of references and communication between Blueprints.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Hold a useful reference",
          "task": "Get or store a reference to another gameplay object.",
          "steps": [
            "Choose an object you genuinely need to talk to.",
            "Obtain/store the reference.",
            "Use it to read or call something simple."
          ],
          "check": "The reference points to the intended instance, not just the Class."
        },
        {
          "kind": "test",
          "title": "Make a cast fail safely",
          "task": "Test the same cast with a wrong object type.",
          "steps": [
            "Predict whether the cast should succeed.",
            "Trigger the failure case.",
            "Provide safe failure behaviour or feedback."
          ],
          "check": "The system does not assume every object is the desired type."
        },
        {
          "kind": "modify",
          "title": "Reduce repeated casting",
          "task": "If you repeatedly cast to the same object, improve the pattern.",
          "steps": [
            "Store a validated reference where appropriate.",
            "Reuse that reference.",
            "Keep an Is Valid/failure route where needed."
          ],
          "check": "The graph communicates intent more clearly and avoids needless repeated work."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/fe5fe968-0fb7-4e45-83fc-b76afca4a15b/3_2.png",
          "caption": "Adding a Cast node from an Actor reference. A cast does not magically find an object; it checks whether the reference you already have is the requested class.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ba194533-c6f3-4eff-874a-8b5d58d3d57c/3_3.png",
          "caption": "After a successful Cast, class-specific variables and functions become available through the typed output reference.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        }
      ]
    },
    {
      "id": "interfaces-dispatchers",
      "path": "framework",
      "order": 3,
      "title": "Interfaces & Event Dispatchers: Communicate Cleanly",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Interfaces & Event Dispatchers?",
          "steps": [
            "Create a Blueprint Interface from the Content Drawer and add function/message signatures in it.",
            "In an implementing Blueprint, add the Interface under Class Settings → Implemented Interfaces.",
            "Call an Interface message using a target reference that may implement it.",
            "Create an Event Dispatcher inside a Blueprint via My Blueprint, then Bind/Assign/Call it from the appropriate owners/listeners."
          ],
          "note": "Interfaces and Dispatchers solve different communication shapes: Interface = caller sends a common message to a target; Dispatcher = broadcaster announces something to listeners."
        },
        "anatomy": [
          [
            "Blueprint Interface",
            "Defines a common message contract without implementation."
          ],
          [
            "Implementation",
            "Each participating Class decides what that message means for itself."
          ],
          [
            "Interface Message",
            "Caller sends the message without needing the exact concrete Class."
          ],
          [
            "Event Dispatcher",
            "Broadcaster exposes an event other objects can subscribe to."
          ],
          [
            "Bind/Assign",
            "Connects a listener's reaction to the Dispatcher."
          ],
          [
            "Call/Broadcast",
            "The owner fires the Dispatcher and bound listeners can react."
          ]
        ],
        "process": [
          "Identify whether you need one-to-target messaging or one-to-many notification.",
          "For common target behaviour, define an Interface message.",
          "Implement that message separately in each Class.",
          "For broadcasts, create a Dispatcher on the event owner.",
          "Bind listeners at a sensible setup point and broadcast when the event occurs."
        ],
        "examples": [
          {
            "title": "Universal Interact",
            "question": "How can one player interact with unrelated objects?",
            "condition": "Targets share behaviour, not Class",
            "true": "Door, pickup and terminal all implement BPI_Interact differently.",
            "false": "Avoid Cast To Door → Cast To Pickup → Cast To Terminal.",
            "why": "The caller depends on the Interact contract, not every target Class."
          },
          {
            "title": "Facility alarm",
            "question": "How should many systems react to one alarm?",
            "condition": "One event, many listeners",
            "true": "Alarm manager broadcasts; lights, doors and AI bind their own reactions.",
            "false": "Do not make the alarm directly control every listener's internal details.",
            "why": "A Dispatcher supports one-to-many notification cleanly."
          }
        ],
        "remember": [
          "Interface = common language; Dispatcher = announcement.",
          "An Interface does not store shared implementation.",
          "A Dispatcher needs listeners to bind before broadcasts matter.",
          "Loose coupling makes new object types easier to add."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create an Interact Blueprint Interface",
          "do": "Create an Interact Blueprint Interface.",
          "why": "Creating the Interface establishes the shared contract.",
          "check": "The Blueprint Interface asset exists."
        },
        {
          "title": "Add an Interact message",
          "do": "Add an Interact message.",
          "why": "One Interact message keeps the first version focused.",
          "check": "Interact is defined with only necessary parameters."
        },
        {
          "title": "Implement it in two different Actors",
          "do": "Implement it in two different Actors.",
          "why": "Two unrelated Actors prove the same message can mean different things.",
          "check": "Two different Actor Classes implement Interact."
        },
        {
          "title": "Call the Interface message from a player interaction test",
          "do": "Call the Interface message from a player interaction test.",
          "why": "Calling from the player proves the caller does not need concrete target knowledge.",
          "check": "The same player call produces different target behaviour."
        },
        {
          "title": "Create a simple Event Dispatcher in one Blueprint",
          "do": "Create a simple Event Dispatcher in one Blueprint.",
          "why": "A Dispatcher introduces one-to-many communication.",
          "check": "A Dispatcher exists on the object that owns the event."
        },
        {
          "title": "Bind another Blueprint to it and prove the broadcast fires",
          "do": "Bind another Blueprint to it and prove the broadcast fires.",
          "why": "Binding and broadcasting proves the event owner does not directly run listener internals.",
          "check": "At least one external listener reacts only after it has been bound."
        }
      ],
      "evidencePrompt": {
        "show": [
          "Blueprint Interface definition.",
          "Two different Implement Event Interact graphs.",
          "One generic caller sending the Interface message.",
          "Dispatcher declaration/binding plus two listeners if possible."
        ],
        "reflection": [
          "Why is an Interface better than several Casts here?",
          "What does each implementing Actor own?",
          "Who owns the Dispatcher event?",
          "When would a Dispatcher be better than an Interface call?"
        ]
      },
      "visuals": [
        {
          "type": "book",
          "src": "assets/book/dispatcher-details.webp",
          "caption": "Reference figure from the supplied book: Event Dispatcher setup/details.",
          "authenticUI": true,
          "versionNote": "Supplied book reference (UE5.0-era). Current Unreal may look slightly different."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/interfaces-dispatchers-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/interfaces-dispatchers-example.svg",
          "caption": "Original classroom worked example: Universal Interact.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Blueprint Interface",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/blueprint-interface-in-unreal-engine?lang=en-US",
          "note": "Current Epic reference for defining and implementing common Blueprint messages.",
          "source": "Epic Games",
          "version": "UE5.8"
        },
        {
          "title": "Event Dispatchers",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/event-dispatchers-in-unreal-engine",
          "note": "Current Epic reference for creating, binding and calling Event Dispatchers.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Send one generic message",
          "task": "Create/implement a simple Blueprint Interface message such as Interact.",
          "steps": [
            "Add one Interface function.",
            "Implement it on one Actor.",
            "Call it through an object reference."
          ],
          "check": "The caller does not need the receiver’s concrete Class logic."
        },
        {
          "kind": "test",
          "title": "One message, two behaviours",
          "task": "Implement the same Interface on a second Actor.",
          "steps": [
            "Give the second Actor a different response.",
            "Call the same Interface message on both.",
            "Compare results."
          ],
          "check": "The same message produces class-specific behaviour."
        },
        {
          "kind": "modify",
          "title": "Broadcast a change",
          "task": "Use an Event Dispatcher for a one-to-many notification.",
          "steps": [
            "Create a Dispatcher on the object that owns the state change.",
            "Bind at least one listener.",
            "Call the Dispatcher and verify the listener responds."
          ],
          "check": "The sender does not directly control every listener."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ca176849-4f39-4e50-bd83-e01672bddf2d/interfaceeditor.png",
          "caption": "The Blueprint Interface editor. An Interface defines function signatures but does not contain the implementation itself.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-interface-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/578f36aa-c423-4505-812b-088750a72e69/floatinput-graph.png",
          "caption": "An Interface function signature with typed parameters. Different Blueprints can implement this same contract in different ways.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-interface-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f147b495-ce9c-4e17-9ce6-faa4a06d8d0f/event3.png",
          "caption": "Calling an Event Dispatcher from Blueprint logic. The sender announces that something happened without needing to know every listener.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7ff64b05-8f8f-46d2-a574-a0646b951fff/event7.png",
          "caption": "Assigning / binding to a Dispatcher creates the listening side of the relationship.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7e12bfb2-7b3e-43bc-ad16-28b87c6b522d/interface6.png",
          "caption": "Calling an Interface Message from a graph. The receiver only responds if it implements that Interface.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        }
      ]
    },
    {
      "id": "collision",
      "path": "gameplay",
      "order": 1,
      "title": "Collision & Overlaps: Detect the World Reliably",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Collision & Overlaps?",
          "steps": [
            "Select an Actor/Component and inspect Collision settings in Details.",
            "Use primitive Collision Components such as Box, Sphere or Capsule for deliberate gameplay volumes.",
            "Enable Generate Overlap Events when overlap events are required.",
            "Use Collision Presets/responses to decide whether channels Block, Overlap or Ignore."
          ],
          "note": "Both sides' collision configuration matters. Perfect Blueprint event logic cannot fire if the shapes/channels never produce the required overlap/hit."
        },
        "anatomy": [
          [
            "Collision Shape",
            "The geometry Unreal tests, which can differ from the visible mesh."
          ],
          [
            "Object Type",
            "How the object identifies itself to collision channels."
          ],
          [
            "Response",
            "Block, Overlap or Ignore for a channel."
          ],
          [
            "Generate Overlap Events",
            "Allows overlap events when the response pairing supports them."
          ],
          [
            "Other Actor",
            "Reference supplied by overlap events to the Actor that entered/left."
          ]
        ],
        "process": [
          "Choose what spatial relationship you need to detect.",
          "Give the gameplay object an appropriate collision shape.",
          "Configure object/channel responses deliberately.",
          "Enable the required events.",
          "Debug the collision first, then build gameplay consequences."
        ],
        "examples": [
          {
            "title": "Checkpoint volume",
            "question": "Should it stop the player or detect passage?",
            "condition": "Player crossing a trigger",
            "true": "Use Overlap on a Box volume and activate checkpoint logic.",
            "false": "Blocking the player would fight the intended behaviour.",
            "why": "Collision response matches the gameplay purpose."
          },
          {
            "title": "Solid wall",
            "question": "Should the player pass through?",
            "condition": "Physical barrier",
            "true": "Block the player/pawn channel.",
            "false": "Overlap alone would allow movement through.",
            "why": "Block is for physical prevention; Overlap is for detection."
          }
        ],
        "remember": [
          "Block, Overlap and Ignore answer different gameplay needs.",
          "Collision shape and visible mesh are separate concerns.",
          "Check channel responses before blaming Blueprint code.",
          "Filter Other Actor so the correct thing triggers the event."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create BP_TriggerPractice with Box Collision",
          "do": "Create BP_TriggerPractice with Box Collision.",
          "why": "A dedicated trigger Actor keeps detection clear.",
          "check": "The Box is large enough to enter visibly."
        },
        {
          "title": "Resize it so the player can walk through",
          "do": "Resize it so the player can walk through.",
          "why": "Large Box Collision makes the test easy to enter/leave.",
          "check": "The player can move through the trigger if intended."
        },
        {
          "title": "Print on Begin Overlap",
          "do": "Print on Begin Overlap.",
          "why": "Begin Overlap proves entry detection.",
          "check": "Begin Overlap prints once when entering."
        },
        {
          "title": "Print on End Overlap",
          "do": "Print on End Overlap.",
          "why": "End Overlap proves the state can change when leaving.",
          "check": "End Overlap prints when leaving."
        },
        {
          "title": "Inspect Other Actor",
          "do": "Inspect Other Actor.",
          "why": "Other Actor teaches filtering/reference use.",
          "check": "Other Actor identifies the player rather than an unrelated object."
        },
        {
          "title": "Change collision responses and compare behaviour",
          "do": "Change collision responses and compare behaviour.",
          "why": "Changing responses demonstrates that events depend on collision configuration.",
          "check": "Changing Block/Overlap/Ignore produces the predicted change."
        }
      ],
      "evidencePrompt": {
        "show": [
          "Collision Component and its size in the Blueprint.",
          "Collision Preset/responses in Details.",
          "Begin/End Overlap logic with Other Actor filtering.",
          "In-game proof that the intended object triggers it."
        ],
        "reflection": [
          "Why did you choose Overlap rather than Block?",
          "Which channel/object type matters in your setup?",
          "What collision setting stopped your event from firing, if any?",
          "How did you ensure the correct Actor triggered the mechanic?"
        ]
      },
      "visuals": [
        {
          "type": "book",
          "src": "assets/book/collision-responses.webp",
          "caption": "Reference figure from the supplied book: Collision Responses table.",
          "authenticUI": true,
          "versionNote": "Supplied book reference (UE5.0-era). Current Unreal may look slightly different."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/collision-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/collision-example.svg",
          "caption": "Original classroom worked example: Checkpoint volume.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Collision Overview",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/collision-in-unreal-engine---overview",
          "note": "Current Object Types, Collision Responses and Trace Responses.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Build a trigger",
          "task": "Create a collision volume that overlaps the player.",
          "steps": [
            "Add/select a collision Component.",
            "Enable overlap events.",
            "Print a message on BeginOverlap."
          ],
          "check": "Walking into the volume triggers once as expected."
        },
        {
          "kind": "test",
          "title": "Block, overlap, ignore",
          "task": "Change one collision response and predict the effect.",
          "steps": [
            "Test Block.",
            "Test Overlap.",
            "Test Ignore for the same relevant channel/object."
          ],
          "check": "You can describe the practical difference between all three responses."
        },
        {
          "kind": "modify",
          "title": "Create a purposeful response",
          "task": "Tune collision for a real gameplay object.",
          "steps": [
            "Choose what should physically block it.",
            "Choose what should only trigger it.",
            "Choose what should be ignored."
          ],
          "check": "Its collision setup matches the gameplay intention rather than a default preset by accident."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/1c7f22c6-c2ca-4d30-9a56-eefeb61f1219/col_setup.png",
          "caption": "Epic’s collision setup example showing two objects with different Object Types. Collision behaviour comes from both objects’ responses.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/collision-in-unreal-engine---overview",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/10c10808-3c0e-4637-bfee-e931a8b5e308/col_collidenoevent_sphere.png",
          "caption": "Sphere collision response settings. Block, Overlap and Ignore determine physical interaction and whether events can happen.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/collision-in-unreal-engine---overview",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/3cd0f624-d01c-4ab3-bf8d-9ed784c11252/col_collidenoevent_box.png",
          "caption": "The other object’s collision responses matter too. Students should always inspect both sides when debugging collision.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/collision-in-unreal-engine---overview",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        }
      ],
      "motionMedia": [
        {
          "slot": "practice",
          "title": "Creating a Kill Volume",
          "note": "See overlap/collision become an actual gameplay rule: touching the volume sends the player back.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_3nG3Hm/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-6-creating-level-checkpoints-and-kill-volumes-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Level Checkpoints and Kill Volumes"
        }
      ]
    },
    {
      "id": "traces",
      "path": "gameplay",
      "order": 2,
      "title": "Line Traces: Detect What the Player Targets",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Line Traces & Interaction Detection?",
          "steps": [
            "In a Blueprint graph, search for Line Trace By Channel.",
            "Get the camera/world Start location and a forward direction.",
            "Calculate End = Start + ForwardVector × Distance.",
            "Enable Draw Debug Type while developing, then inspect the returned Hit Result."
          ],
          "note": "A trace asks a question about space. It does not automatically interact, damage or open anything; your logic decides what to do with the Hit Result."
        },
        "anatomy": [
          [
            "Start",
            "World position where the query begins."
          ],
          [
            "End",
            "World position where it stops."
          ],
          [
            "Trace Channel",
            "Collision channel used to decide what can be hit."
          ],
          [
            "Return Value",
            "Boolean indicating whether a blocking hit occurred."
          ],
          [
            "Hit Result",
            "Structured data containing Hit Actor, Component, Impact Point, Normal and more."
          ],
          [
            "Debug Draw",
            "Temporary visual line showing range/direction during testing."
          ]
        ],
        "process": [
          "Choose the origin and maximum range.",
          "Calculate a directionally correct End point.",
          "Run the trace on a deliberate channel.",
          "Check whether it hit.",
          "Break/inspect Hit Result and decide whether the target is valid before acting."
        ],
        "examples": [
          {
            "title": "Look-to-interact",
            "question": "What is the player looking at within range?",
            "condition": "Camera trace hits valid interactable",
            "true": "Show prompt/send Interact message.",
            "false": "Hide prompt/do nothing.",
            "why": "Directional query fits an intentional player target."
          },
          {
            "title": "Hitscan weapon",
            "question": "What did the shot intersect first?",
            "condition": "Trace gets blocking hit",
            "true": "Use Hit Result for target/impact feedback.",
            "false": "Spawn miss/tracer feedback if desired.",
            "why": "No permanent trigger volume is needed for an instantaneous query."
          }
        ],
        "remember": [
          "A trace is an invisible query, not the interaction itself.",
          "Always visualise traces while debugging.",
          "Range is controlled by your End calculation.",
          "Collision channels determine what counts as a hit."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Use the player camera location as Start",
          "do": "Use the player camera location as Start.",
          "why": "Camera location gives the correct player viewpoint.",
          "check": "Start follows the camera."
        },
        {
          "title": "Calculate End = Start + Forward × Distance",
          "do": "Calculate End = Start + Forward × Distance.",
          "why": "Forward × Distance turns direction into a finite range.",
          "check": "End points forward and is the intended distance away."
        },
        {
          "title": "Run Line Trace by Channel",
          "do": "Run Line Trace by Channel.",
          "why": "Line Trace by Channel performs the world query.",
          "check": "The trace appears visually when debug draw is enabled."
        },
        {
          "title": "Enable debug drawing",
          "do": "Enable debug drawing.",
          "why": "Debug drawing makes maths visible.",
          "check": "Return Value changes when a blocking object enters/leaves the path."
        },
        {
          "title": "Break Hit Result and print Hit Actor",
          "do": "Break Hit Result and print Hit Actor.",
          "why": "Breaking Hit Result reveals what was actually hit.",
          "check": "Hit Actor prints the expected object."
        },
        {
          "title": "Test different collision responses and distances",
          "do": "Test different collision responses and distances.",
          "why": "Changing responses/range proves traces depend on both geometry and collision configuration.",
          "check": "Objects outside range or ignored by the channel do not count."
        }
      ],
      "evidencePrompt": {
        "show": [
          "The Start/End calculation.",
          "A debug trace visible in game.",
          "Break Hit Result showing Hit Actor/Impact Point.",
          "Valid and invalid interaction targets producing different results."
        ],
        "reflection": [
          "How did you calculate End?",
          "What does the trace Return Value mean?",
          "Which Hit Result field did your mechanic need?",
          "How did collision channels affect what the trace detected?"
        ]
      },
      "visuals": [
        {
          "type": "diagram",
          "src": "assets/diagrams/trace.svg",
          "caption": "Original classroom diagram: camera-based line trace and Hit Result.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/traces-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/traces-example.svg",
          "caption": "Original classroom worked example: Look-to-interact.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Traces with Raycasts",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/traces-with-raycasts-in-unreal-engine",
          "note": "Current Epic landing page for Blueprint traces, raycasts, channels and hit results.",
          "source": "Epic Games",
          "version": "UE5.8"
        },
        {
          "title": "Single Line Trace by Channel",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine",
          "note": "Current real Blueprint node setup for a Line Trace by Channel.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Fire a visible trace",
          "task": "Create a Line Trace By Channel and turn on debug drawing.",
          "steps": [
            "Choose sensible Start and End points.",
            "Use a suitable Trace Channel.",
            "Press Play and observe the debug line."
          ],
          "check": "The trace appears where you expected it to travel."
        },
        {
          "kind": "test",
          "title": "Read the Hit Result",
          "task": "Use the trace result rather than only drawing the line.",
          "steps": [
            "Check Return Value or break the Hit Result.",
            "Print the Hit Actor name.",
            "Aim at empty space and an Actor."
          ],
          "check": "The system distinguishes hit from no-hit correctly."
        },
        {
          "kind": "modify",
          "title": "Make the trace useful",
          "task": "Turn the trace into a small interaction test.",
          "steps": [
            "Choose a maximum range.",
            "React only to a suitable Actor/object.",
            "Give feedback when the target is valid."
          ],
          "check": "The trace now supports an actual gameplay decision."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/243f760d-f655-4247-8c43-a8b6ea39de69/guide-how-to-2b-2.png",
          "caption": "Adding the real Line Trace By Channel node to a Blueprint graph.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f64e0a22-515e-41bb-af3a-c93361c5631f/guide-how-to-2b-6.png",
          "caption": "Building the trace End point from camera location, forward direction and distance. This is the vector maths behind “what am I looking at?”",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/bd67ce85-1155-4bfd-9da7-6a7f4c9126d8/guide-how-to-2b-11.png",
          "caption": "The trace running in Play with debug drawing enabled. Debug visualization is one of the fastest ways to diagnose a broken trace.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        }
      ]
    },
    {
      "id": "timelines",
      "path": "gameplay",
      "order": 3,
      "title": "Timelines & Lerp: Smooth Doors and Moving Systems",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Timelines & Smooth Doors?",
          "steps": [
            "Inside an Actor Blueprint Event Graph, right-click and add a Timeline.",
            "Double-click the Timeline node to edit tracks and keyframes.",
            "Add a Float track for a simple 0→1 progression.",
            "Use Update to apply the changing value and Play/Reverse to control direction."
          ],
          "note": "The Timeline should usually output a value; another node such as Lerp uses that value to calculate the actual transform/property."
        },
        "anatomy": [
          [
            "Play",
            "Starts moving forward from the current/start time."
          ],
          [
            "Reverse",
            "Runs the Timeline backwards."
          ],
          [
            "Update",
            "Executes as the Timeline value changes."
          ],
          [
            "Finished",
            "Fires when playback reaches the end."
          ],
          [
            "Float Track",
            "Outputs an authored value over time."
          ],
          [
            "Lerp Alpha",
            "Often receives a 0→1 Timeline value to interpolate between A and B."
          ]
        ],
        "process": [
          "Store the start and target states.",
          "Author a 0→1 track over a sensible duration.",
          "Feed the track into a Lerp.",
          "Apply the Lerp result on Update.",
          "Use Play/Reverse from interaction/state logic and test interruption/reversal."
        ],
        "examples": [
          {
            "title": "Sliding security door",
            "question": "How far through the open animation are we?",
            "condition": "Timeline Alpha 0→1",
            "true": "Lerp ClosedLocation to OpenLocation and apply it on Update.",
            "false": "Instantly setting the final location removes motion/polish.",
            "why": "Timeline controls time; Lerp calculates the in-between transform."
          },
          {
            "title": "Warning light fade",
            "question": "How strong should the light be at this moment?",
            "condition": "Timeline Float",
            "true": "Use output to interpolate intensity or another parameter.",
            "false": "Do not create a manual chain of Delays for smooth values.",
            "why": "Timelines author continuous changes cleanly."
          }
        ],
        "remember": [
          "Timeline = changing value over time; Lerp = value between A and B.",
          "Store start/end states deliberately.",
          "Use Update for the changing property, not repeated delayed Set nodes.",
          "Play and Reverse make one Timeline reusable for open/close."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create BP_SlidingDoor",
          "do": "Create BP_SlidingDoor.",
          "why": "A dedicated door Actor gives the Timeline clear ownership.",
          "check": "The door Actor has clear moving/static Components."
        },
        {
          "title": "Store ClosedLocation and OpenLocation",
          "do": "Store ClosedLocation and OpenLocation.",
          "why": "Closed/Open transforms define known endpoints.",
          "check": "Closed and Open states are sensible."
        },
        {
          "title": "Add a Timeline with 0→1 Float track",
          "do": "Add a Timeline with 0→1 Float track.",
          "why": "A 0→1 Float track is easy to reason about.",
          "check": "The Timeline duration and keys are visible."
        },
        {
          "title": "Use the Float as a Lerp Alpha",
          "do": "Use the Float as a Lerp Alpha.",
          "why": "Lerp turns Alpha into a position between endpoints.",
          "check": "At Alpha 0/1 the Lerp reaches the expected endpoints."
        },
        {
          "title": "Set the door location on Update",
          "do": "Set the door location on Update.",
          "why": "Update applies every intermediate position.",
          "check": "Door moves smoothly during Update."
        },
        {
          "title": "Test Play and Reverse before connecting interaction",
          "do": "Test Play and Reverse before connecting interaction.",
          "why": "Play/Reverse testing proves the animation works before adding interaction complexity.",
          "check": "Play and Reverse return the door predictably without teleporting."
        }
      ],
      "evidencePrompt": {
        "show": [
          "Timeline editor with the Float track visible.",
          "Lerp wired from closed/open values and Timeline Alpha.",
          "Play/Reverse logic.",
          "In-game door/barrier at closed and open states."
        ],
        "reflection": [
          "What does the Timeline output represent?",
          "What does the Lerp do that the Timeline does not?",
          "Why did you choose the duration/curve?",
          "How does your system reverse or close again?"
        ]
      },
      "visuals": [
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/timelines-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/timelines-example.svg",
          "caption": "Original classroom worked example: Sliding security door.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Editing Timelines",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/editing-timelines-in-unreal-engine",
          "note": "Current Timeline Editor, track types, keys and playback controls.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Animate one value",
          "task": "Create a Timeline with a Float track from 0 to 1.",
          "steps": [
            "Add two keys.",
            "Set a sensible duration.",
            "Use Update to drive a visible value through Lerp."
          ],
          "check": "The value changes smoothly over time."
        },
        {
          "kind": "test",
          "title": "Play and reverse",
          "task": "Test the same Timeline in both directions.",
          "steps": [
            "Trigger Play.",
            "Trigger Reverse.",
            "Watch the driven property return smoothly."
          ],
          "check": "One Timeline handles both directions without duplicated animation logic."
        },
        {
          "kind": "modify",
          "title": "Change the feel",
          "task": "Alter the curve or duration deliberately.",
          "steps": [
            "Try a faster/slower length.",
            "Change interpolation/easing if appropriate.",
            "Compare the game feel."
          ],
          "check": "You can explain how the Timeline shape affects the player experience."
        }
      ],
      "docVisuals": [
        {
          "src": "https://dev.epicgames.com/community/api/documentation/image/6e44536d-af86-4aae-a863-afec370143db?resizing_type=fit",
          "caption": "The current Timeline Editor. A Timeline turns keyframed data over time into Blueprint output values and events.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/editing-timelines-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://dev.epicgames.com/community/api/documentation/image/02c05d7d-44db-4251-9485-16e852833735?resizing_type=fit",
          "caption": "A Float Track inside a Timeline. Keys define values at specific times and the curve controls interpolation between them.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/editing-timelines-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        },
        {
          "src": "https://dev.epicgames.com/community/api/documentation/image/9a0884b6-e598-411d-a20e-1044d0d76bc3?resizing_type=fit",
          "caption": "Timeline track data becomes output pins on the Timeline node, ready to drive a Lerp, transform, material value or other system.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/editing-timelines-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        }
      ],
      "motionMedia": [
        {
          "slot": "concept",
          "title": "Animating a Moving Platform with Blueprint Logic",
          "note": "A moving platform makes changing a value over time visible immediately. Watch the motion, then relate it back to Timeline / interpolation thinking.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_HCKYRN/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-7-building-more-game-obstacles-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Building More Game Obstacles"
        }
      ]
    },
    {
      "id": "ui",
      "path": "gameplay",
      "order": 4,
      "title": "UMG & Gameplay UI: Show State Without Owning It",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use UMG & Gameplay UI?",
          "steps": [
            "Create a Widget Blueprint from the Content Drawer/User Interface menu.",
            "Use the Designer tab to place and anchor UI elements.",
            "Use the Widget Blueprint Graph for display/update logic.",
            "Create the Widget from gameplay code and Add to Viewport for a player HUD."
          ],
          "note": "The Widget should usually display gameplay state, not become the only place that state exists."
        },
        "anatomy": [
          [
            "Widget Blueprint",
            "Reusable UI Class."
          ],
          [
            "Designer",
            "Visual layout of panels, text, images, progress bars and anchors."
          ],
          [
            "Graph",
            "Logic for reading/updating displayed values."
          ],
          [
            "Anchor",
            "Controls how UI is positioned relative to screen size."
          ],
          [
            "Create Widget",
            "Creates an instance at runtime."
          ],
          [
            "Add to Viewport",
            "Displays that Widget for the player."
          ]
        ],
        "process": [
          "Decide what gameplay information the player actually needs.",
          "Build a clear visual hierarchy in Designer.",
          "Create/show the Widget from a suitable gameplay owner.",
          "Pass/read gameplay state into the Widget.",
          "Update only when needed and test at different screen sizes."
        ],
        "examples": [
          {
            "title": "Health HUD",
            "question": "Who owns Health?",
            "condition": "Character owns state, Widget displays it",
            "true": "Health changes in gameplay; HUD converts it to text/bar percentage.",
            "false": "Do not store the only authoritative Health value inside the Widget.",
            "why": "UI stays replaceable and gameplay remains valid if UI changes."
          },
          {
            "title": "Interact prompt",
            "question": "Should the prompt be visible right now?",
            "condition": "Player targets a valid interactable",
            "true": "Show prompt with relevant text.",
            "false": "Hide it when no valid target exists.",
            "why": "UI communicates current interaction state without owning detection."
          }
        ],
        "remember": [
          "Gameplay owns rules/state; UI communicates them.",
          "Anchor deliberately for different resolutions.",
          "Avoid expensive always-running bindings when an event-driven update is clearer.",
          "Debug values before polishing fonts/animation."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create a simple HUD Widget",
          "do": "Create a simple HUD Widget.",
          "why": "A simple HUD focuses on essential information.",
          "check": "The Widget Blueprint exists and has a readable layout."
        },
        {
          "title": "Add a health bar or text",
          "do": "Add a health bar or text.",
          "why": "One obvious element proves Designer layout.",
          "check": "A health/text element is visible in Designer."
        },
        {
          "title": "Create the Widget at gameplay start",
          "do": "Create the Widget at gameplay start.",
          "why": "Create/Add to Viewport proves runtime ownership.",
          "check": "The Widget appears exactly once when gameplay starts."
        },
        {
          "title": "Add it to the Viewport",
          "do": "Add it to the Viewport.",
          "why": "Reading a real gameplay value connects UI to systems.",
          "check": "The displayed value matches real player state."
        },
        {
          "title": "Connect the displayed value to player Health",
          "do": "Connect the displayed value to player Health.",
          "why": "Changing Health proves the display is live.",
          "check": "Changing Health changes the UI."
        },
        {
          "title": "Change Health in-game and verify the UI updates",
          "do": "Change Health in-game and verify the UI updates.",
          "why": "Testing updates catches a common mistake: UI showing stale/default data.",
          "check": "Resizing/testing resolution does not throw the UI into the wrong position."
        }
      ],
      "evidencePrompt": {
        "show": [
          "Widget Designer with anchors/layout.",
          "Create Widget → Add to Viewport logic.",
          "Gameplay state flowing into the display.",
          "In-game HUD before/after the value changes."
        ],
        "reflection": [
          "Where does the real gameplay value live?",
          "Why should the Widget not own the core game rule?",
          "How did you ensure the UI updates?",
          "What did you do to make the layout readable at gameplay speed?"
        ]
      },
      "visuals": [
        {
          "type": "book",
          "src": "assets/book/ui-variables.webp",
          "caption": "Reference figure from the supplied book: UI-related gameplay variables.",
          "authenticUI": true,
          "versionNote": "Supplied book reference (UE5.0-era). Current Unreal may look slightly different."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/ui-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/ui-example.svg",
          "caption": "Original classroom worked example: Health HUD.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "UMG UI Designer Quick Start",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/umg-ui-designer-quick-start-guide-in-unreal-engine",
          "note": "Current Widget Blueprint and UMG workflow, including runtime viewport use.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Put a Widget on screen",
          "task": "Create a minimal Widget Blueprint and display it during play.",
          "steps": [
            "Add one Text or Progress Bar.",
            "Create the Widget from gameplay logic.",
            "Add it to the Viewport."
          ],
          "check": "The Widget appears exactly once when intended."
        },
        {
          "kind": "test",
          "title": "Drive UI from game state",
          "task": "Make one UI element show a gameplay value.",
          "steps": [
            "Choose health, objective, ammo or another useful state.",
            "Update the Widget through a clear reference/function/event.",
            "Change the state during play."
          ],
          "check": "The UI reflects gameplay state and does not own the source value."
        },
        {
          "kind": "modify",
          "title": "Make it survive different screens",
          "task": "Improve layout behaviour.",
          "steps": [
            "Set useful anchors/alignment.",
            "Resize the PIE window or viewport.",
            "Check text and bars remain readable."
          ],
          "check": "The UI layout behaves sensibly at more than one resolution/aspect."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/bf146350-4103-4b5a-a33d-23b00ca8bc63/01-01_createwidgetblueprint.png",
          "caption": "Creating a real Widget Blueprint from the Content Browser. UMG UI lives in Widget Blueprint assets.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/umg-ui-designer-quick-start-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/aff4595d-c2d0-4d43-a13c-d4093da8339b/01-16_createhudwidget.png",
          "caption": "Create Widget in a gameplay Blueprint. This creates the widget object; it does not display it by itself.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/umg-ui-designer-quick-start-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/79856c5e-fe2e-4653-9092-081396b85652/01-18_beginplay.png",
          "caption": "Add to Viewport completes the basic HUD flow so the created widget becomes visible to the player.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/umg-ui-designer-quick-start-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        }
      ],
      "motionMedia": [
        {
          "slot": "intro",
          "title": "Introducing Unreal Motion Graphics (UMG)",
          "note": "Official introduction to the Widget/UMG workflow before students build their own HUD.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_Ejb16P/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-4-build-a-hud-with-unreal-motion-graphics",
          "sourceTitle": "Epic UE5.8 — Build a HUD with Unreal Motion Graphics"
        },
        {
          "slot": "practice",
          "title": "Creating and Displaying Widget Blueprints",
          "note": "Shows the practical step from Widget Blueprint asset to an interface visible during gameplay.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_4kxwkw/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-4-build-a-hud-with-unreal-motion-graphics",
          "sourceTitle": "Epic UE5.8 — Build a HUD with Unreal Motion Graphics"
        },
        {
          "slot": "deeper",
          "title": "Animating a Start Countdown in UMG",
          "note": "Useful motion example showing that UI can animate and then trigger/communicate with Blueprint gameplay logic.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_bN8AMp/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/module-2-setting-up-the-start-countdown-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Setting Up the Start Countdown"
        }
      ]
    },
    {
      "id": "savegame",
      "path": "gameplay",
      "order": 5,
      "title": "SaveGame: Persistent Progress Done Safely",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use SaveGame & Persistent Progress?",
          "steps": [
            "Create a Blueprint Class derived from SaveGame.",
            "Add only data that genuinely needs disk persistence.",
            "Use Create Save Game Object, fill its variables, then Save Game to Slot.",
            "Before loading, use Does Save Game Exist or handle the missing-slot case; then Load Game from Slot and use your SaveGame Class."
          ],
          "note": "GameInstance and SaveGame solve different lifetimes: GameInstance lasts through level changes in one run; SaveGame writes selected data to persistent storage."
        },
        "anatomy": [
          [
            "SaveGame Class",
            "Defines the data structure to serialize."
          ],
          [
            "Save Object",
            "Runtime instance containing values to write/read."
          ],
          [
            "Slot Name",
            "Identifier used to store and retrieve a save."
          ],
          [
            "Save Game to Slot",
            "Writes data to persistent storage."
          ],
          [
            "Load Game from Slot",
            "Reads stored data back."
          ],
          [
            "Does Save Game Exist",
            "Lets you handle a first run/no-save path safely."
          ]
        ],
        "process": [
          "Decide exactly what must persist after closing the game.",
          "Copy that state into a SaveGame object.",
          "Write it to a named slot.",
          "On load, check whether the slot exists.",
          "Read the SaveGame data and deliberately apply it back to gameplay."
        ],
        "examples": [
          {
            "title": "Checkpoint continue",
            "question": "What must survive restarting the game?",
            "condition": "Checkpoint ID + progression state",
            "true": "Store them in SaveGame and restore the correct checkpoint.",
            "false": "Do not rely on a Character/level variable.",
            "why": "World Actors disappear when the application closes."
          },
          {
            "title": "Session-only selection",
            "question": "Does it need to exist tomorrow?",
            "condition": "Only across map travel this run",
            "true": "GameInstance may be enough.",
            "false": "Using SaveGame for every temporary runtime value adds unnecessary complexity.",
            "why": "Choose storage by lifetime."
          }
        ],
        "remember": [
          "SaveGame persists to disk; GameInstance does not automatically.",
          "Save meaningful data, not entire world object references.",
          "Always handle 'no save exists yet'.",
          "Loading data is separate from applying that data back into the game."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create BP_SaveData from SaveGame",
          "do": "Create BP_SaveData from SaveGame.",
          "why": "A dedicated SaveGame Class defines a clean serializable structure.",
          "check": "BP_SaveData inherits from SaveGame."
        },
        {
          "title": "Add one test value such as HighestRound",
          "do": "Add one test value such as HighestRound.",
          "why": "One simple value keeps the first save test measurable.",
          "check": "The test value has a clear type/name."
        },
        {
          "title": "Create a save object",
          "do": "Create a save object.",
          "why": "Creating a save object provides somewhere to set data.",
          "check": "The created object is your SaveGame Class."
        },
        {
          "title": "Set the value and Save Game to Slot",
          "do": "Set the value and Save Game to Slot.",
          "why": "Save Game to Slot proves writing.",
          "check": "A slot is written successfully."
        },
        {
          "title": "Load from the same slot",
          "do": "Load from the same slot.",
          "why": "Load from the same slot proves retrieval.",
          "check": "Loading returns the value you saved."
        },
        {
          "title": "Print the loaded value and handle the case where no save exists",
          "do": "Print the loaded value and handle the case where no save exists.",
          "why": "Handling no-save prevents first-run errors and teaches robust flow.",
          "check": "A fresh slot follows the no-save path safely."
        }
      ],
      "evidencePrompt": {
        "show": [
          "SaveGame Class variables.",
          "Create/fill/Save Game to Slot graph.",
          "Does Save Game Exist or equivalent safe load flow.",
          "Visible gameplay proof that loaded data changes progression."
        ],
        "reflection": [
          "Why does this value belong in SaveGame?",
          "What is your slot name strategy?",
          "What happens on a first run with no save?",
          "How do loaded values get applied back into gameplay?"
        ]
      },
      "visuals": [
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/savegame-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/savegame-example.svg",
          "caption": "Original classroom worked example: Checkpoint continue.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Saving and Loading Your Game",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/saving-and-loading-your-game-in-unreal-engine?lang=en-US",
          "note": "Current Epic SaveGame model: custom SaveGame class, Create Save Game Object, save to slot and load from slot.",
          "source": "Epic Games",
          "version": "UE5.8"
        },
        {
          "title": "Save Game to Slot",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/SaveGame/SaveGametoSlot",
          "note": "Current Blueprint API reference for Save Game to Slot.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Create a tiny save object",
          "task": "Create a SaveGame Blueprint with one value worth preserving.",
          "steps": [
            "Create a SaveGame Class.",
            "Add one clearly named variable.",
            "Create the SaveGame object and set that value."
          ],
          "check": "You have a save object containing deliberate game data."
        },
        {
          "kind": "test",
          "title": "Save, change, load",
          "task": "Prove persistence by changing the live value after saving.",
          "steps": [
            "Save the object to a named slot.",
            "Change/reset the live value.",
            "Load the slot and restore/print the saved value."
          ],
          "check": "The loaded value comes from the save, not the current runtime state."
        },
        {
          "kind": "modify",
          "title": "Add one checkpoint detail",
          "task": "Extend the save with one more useful field.",
          "steps": [
            "Choose something such as checkpoint ID/objective/state.",
            "Save it with the first value.",
            "Reload and apply it safely."
          ],
          "check": "Two related pieces of progress survive a fresh load."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/8bb47f43-ba2f-49b6-b7b8-8c94f70de19a/createcasting.png",
          "caption": "A current Epic communication example that includes creating a SaveGame object and casting to a custom SaveGame type. The important idea is that saved data lives in a dedicated object, not magically in the level.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        }
      ]
    },
    {
      "id": "data",
      "path": "advanced",
      "order": 1,
      "title": "Data Structures & Data Tables: Stop Hard-Coding Content",
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
        "type": "screenshot",
        "src": "assets/ue5/current/datatable-real.webp",
        "caption": "Current classroom UE5 capture: a real Data Table using a Struct row type with gameplay trait values.",
        "authenticUI": true,
        "versionNote": "Current classroom Unreal Engine capture (Aug 2026)."
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Arrays, Maps, Enums, Structs & Data Tables?",
          "steps": [
            "Create Arrays/Sets/Maps by changing a variable's Container Type in Details.",
            "Create an Enumeration asset from the Content Drawer for named finite choices.",
            "Create a Structure asset for a record with several related fields.",
            "Create a Data Table and choose a Struct row type when many definitions share the same shape."
          ],
          "note": "Do not choose a data structure because it sounds advanced. Choose it because its shape matches the information."
        },
        "anatomy": [
          [
            "Array",
            "Ordered list; duplicates allowed."
          ],
          [
            "Set",
            "Collection of unique values."
          ],
          [
            "Map",
            "Key → value lookup."
          ],
          [
            "Enum",
            "Finite named choices/states."
          ],
          [
            "Struct",
            "One record grouping related fields."
          ],
          [
            "Data Table",
            "Many rows using the same Struct schema."
          ]
        ],
        "process": [
          "Describe the shape of the information in plain English.",
          "Choose collection/state/record structure that matches it.",
          "Create one small example.",
          "Read/add/remove/iterate or look up data correctly.",
          "Move repeated definitions into data assets when authoring benefits."
        ],
        "examples": [
          {
            "title": "Inventory definitions",
            "question": "Do many items share Name/Icon/Value/Type fields?",
            "condition": "Repeated records",
            "true": "Use Item Struct; Array for owned entries; Data Table for definitions if appropriate.",
            "false": "Avoid ItemName1, ItemName2, ItemName3 variables.",
            "why": "The structure can scale without graph duplication."
          },
          {
            "title": "Objective state",
            "question": "Is the state one of a fixed named set?",
            "condition": "Inactive / Active / Complete / Failed",
            "true": "Use an Enum rather than magic integers/strings.",
            "false": "Do not encode states as unexplained 0,1,2,3 values.",
            "why": "Named choices make logic self-documenting."
          }
        ],
        "remember": [
          "Array = list; Map = lookup; Enum = named finite choice; Struct = record; Data Table = many records.",
          "Avoid numbered-variable patterns.",
          "Data design should make adding content easier without editing core logic.",
          "Prefer readable named states over magic numbers/strings."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create an Array of names or Actor references",
          "do": "Create an Array of names or Actor references.",
          "why": "An Array provides the simplest repeatable collection.",
          "check": "The Array contains multiple correctly typed elements."
        },
        {
          "title": "Add, remove and iterate over items",
          "do": "Add, remove and iterate over items.",
          "why": "Add/remove/iterate proves the collection is dynamic.",
          "check": "Add/remove/loop operations behave predictably."
        },
        {
          "title": "Create an Enum for game state",
          "do": "Create an Enum for game state.",
          "why": "An Enum demonstrates readable named state.",
          "check": "The Enum has meaningful named entries."
        },
        {
          "title": "Create a Struct for a simple item",
          "do": "Create a Struct for a simple item.",
          "why": "A Struct groups fields that belong to one conceptual item.",
          "check": "The Struct groups related fields only."
        },
        {
          "title": "Create multiple Struct values",
          "do": "Create multiple Struct values.",
          "why": "Multiple Struct values prove consistent record shape.",
          "check": "Two records use the same Struct shape with different values."
        },
        {
          "title": "Discuss when many items should move into a Data Table",
          "do": "Discuss when many items should move into a Data Table.",
          "why": "Discussing Data Tables teaches when definitions should move out of graph variables.",
          "check": "You can explain whether a Data Table would genuinely improve authoring."
        }
      ],
      "evidencePrompt": {
        "show": [
          "One container variable with its type visible.",
          "Your Enum entries.",
          "Your Struct fields and two example records.",
          "Blueprint logic consuming structured data rather than hard-coded Item1/Item2 values."
        ],
        "reflection": [
          "Why did you choose this data structure?",
          "What would become awkward with numbered variables?",
          "Which values belong together in your Struct?",
          "When would a Data Table improve your project rather than complicate it?"
        ]
      },
      "visuals": [
        {
          "type": "ue5",
          "src": "assets/ue5/current/datatable-real.webp",
          "caption": "A real Data Table from a project. Each row stores a trait and a set of gameplay modifiers. This is the kind of content-authoring workflow that stops you hard-coding every value directly inside Blueprints.",
          "authenticUI": true
        },
        {
          "type": "ue5",
          "src": "assets/ue5/current/datatable-rows-closeup.webp",
          "caption": "Close-up of the table rows and columns. Students should notice the Row Name, the trait name, and the stat columns that can all be edited without changing the Blueprint logic itself.",
          "authenticUI": true
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/data-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/data-example.svg",
          "caption": "Original classroom worked example: Inventory definitions.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Data Driven Gameplay Elements",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/data-driven-gameplay-elements-in-unreal-engine?lang=en-US",
          "note": "Current DataTable concepts, row structures, import and editor workflow.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "visualPlacement": "inline-top",
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Define one row shape",
          "task": "Create a Struct intended for Data Table rows.",
          "steps": [
            "Add three related fields.",
            "Use clear field names/types.",
            "Create a Data Table using that Struct."
          ],
          "check": "The Data Table columns match the Struct fields."
        },
        {
          "kind": "test",
          "title": "Read one row",
          "task": "Retrieve a row by name and use at least one value.",
          "steps": [
            "Add two different rows.",
            "Get one row in Blueprint.",
            "Print/use a field from the returned Struct."
          ],
          "check": "Changing the row data changes the result without changing the graph logic."
        },
        {
          "kind": "modify",
          "title": "Author content, not code",
          "task": "Add a third content row without editing the Blueprint graph.",
          "steps": [
            "Duplicate/create a row.",
            "Give it distinct values.",
            "Run the same lookup/use path."
          ],
          "check": "New content works through data authoring alone."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ef3aa90f-09ab-426b-bf26-2dc419447b89/importas.png",
          "caption": "Epic’s Data Table import choices. Unreal can import structured data as Data Tables and several curve asset types.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/data-driven-gameplay-elements-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/8197a9d4-1212-445f-aedb-19379fb043d9/datarowtype.png",
          "caption": "Choosing the Data Table Row Type tells Unreal which Struct defines the columns and data types for every row.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/data-driven-gameplay-elements-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7d4513c2-a311-451d-9d6d-5d85edcef6b3/datatableobject.png",
          "caption": "The resulting Data Table asset in the Content Browser. Double-clicking it opens the editable table view.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/data-driven-gameplay-elements-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        }
      ]
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use AI: NavMesh, Blackboard & Behaviour Trees?",
          "steps": [
            "Place a Nav Mesh Bounds Volume around walkable AI space and press P to visualise navigation.",
            "Create/inspect an AIController Class and assign it to the AI Pawn/Character as appropriate.",
            "Create a Blackboard for AI knowledge/state.",
            "Create a Behaviour Tree using that Blackboard and run it from the AI Controller/setup."
          ],
          "note": "Debug one layer at a time: navigation first, possession/controller second, Blackboard state third, Behaviour Tree logic last."
        },
        "anatomy": [
          [
            "NavMesh",
            "Marks areas AI navigation can traverse."
          ],
          [
            "AI Pawn/Character",
            "Physical body moving in the world."
          ],
          [
            "AIController",
            "Owns decision/control logic for the AI body."
          ],
          [
            "Blackboard",
            "Stores AI knowledge such as TargetActor or PatrolLocation."
          ],
          [
            "Behaviour Tree",
            "Chooses/tasks behaviour based on Blackboard state."
          ],
          [
            "Task/Decorator",
            "Task does work; Decorator gates whether a branch is allowed."
          ]
        ],
        "process": [
          "Prove the environment is navigable.",
          "Prove the AI has the correct Controller.",
          "Create a Blackboard key representing useful knowledge.",
          "Build the smallest Behaviour Tree state such as patrol/move.",
          "Change Blackboard state and prove the Tree switches behaviour."
        ],
        "examples": [
          {
            "title": "Patrol → Chase",
            "question": "Does the AI currently have a valid target?",
            "condition": "Blackboard TargetActor set",
            "true": "Chase/move toward target branch.",
            "false": "Patrol branch chooses/moves among patrol points.",
            "why": "Knowledge is separated from behaviour selection."
          },
          {
            "title": "Investigate last location",
            "question": "Was the player seen recently but not currently visible?",
            "condition": "LastKnownLocation valid, TargetActor absent",
            "true": "Move to/investigate the stored location.",
            "false": "Return to patrol.",
            "why": "A third state produces believable transitions without one huge script."
          }
        ],
        "remember": [
          "Green NavMesh first: AI cannot path where no navigation exists.",
          "Blackboard stores facts; Behaviour Tree decides what to do with them.",
          "Controller = AI controlling logic; Pawn/Character = body.",
          "Debug state transitions rather than adding more Tasks blindly."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Place a NavMesh Bounds Volume and visualise navigation",
          "do": "Place a NavMesh Bounds Volume and visualise navigation.",
          "why": "NavMesh is a prerequisite for movement tasks.",
          "check": "Walkable ground is green in NavMesh visualisation."
        },
        {
          "title": "Create an AI Character/Controller",
          "do": "Create an AI Character/Controller.",
          "why": "A dedicated AI body/controller establishes correct ownership.",
          "check": "The AI is controlled by the intended AIController."
        },
        {
          "title": "Create Blackboard keys for target/patrol state",
          "do": "Create Blackboard keys for target/patrol state.",
          "why": "Blackboard keys make state observable.",
          "check": "Blackboard shows understandable keys."
        },
        {
          "title": "Create a simple Behaviour Tree",
          "do": "Create a simple Behaviour Tree.",
          "why": "A minimal Tree prevents hidden complexity.",
          "check": "Behaviour Tree runs and highlights active execution in debug."
        },
        {
          "title": "Make AI move to a patrol point",
          "do": "Make AI move to a patrol point.",
          "why": "Patrol proves basic navigation/task flow.",
          "check": "AI reaches patrol targets."
        },
        {
          "title": "Add a condition that allows a chase state",
          "do": "Add a condition that allows a chase state.",
          "why": "A chase condition proves data-driven state change.",
          "check": "Setting/acquiring a target changes the active behaviour to chase."
        }
      ],
      "evidencePrompt": {
        "show": [
          "NavMesh visualisation.",
          "Blackboard values while the AI is running.",
          "Behaviour Tree debug highlighting Patrol and Chase at different times.",
          "In-game AI successfully switching state."
        ],
        "reflection": [
          "What does the Blackboard know?",
          "What causes the Behaviour Tree to switch branches?",
          "How did you prove navigation worked before debugging the Tree?",
          "Which Class owns movement body vs decision logic?"
        ]
      },
      "visuals": [
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/ai-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/ai-example.svg",
          "caption": "Original classroom worked example: Patrol → Chase.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Behavior Trees",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/behavior-trees-in-unreal-engine",
          "note": "Current Behavior Tree and Blackboard workflow.",
          "source": "Epic Games",
          "version": "UE5.8"
        },
        {
          "title": "Behavior Tree Overview",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/behavior-tree-in-unreal-engine---overview",
          "note": "Current execution order, Decorators, Blackboard keys and decision flow.",
          "source": "Epic Games",
          "version": "UE5.8"
        },
        {
          "title": "Navigation Mesh",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/overview-of-how-to-modify-the-navigation-mesh-in-unreal-engine",
          "note": "Current NavMesh/pathfinding reference.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Prove navigation first",
          "task": "Set up NavMesh and get one AI character moving.",
          "steps": [
            "Place/size a Nav Mesh Bounds Volume.",
            "Press P and confirm walkable space is green.",
            "Use a simple Move To target."
          ],
          "check": "The AI can reach a valid destination before any Behaviour Tree complexity is added."
        },
        {
          "kind": "test",
          "title": "Watch the brain work",
          "task": "Run a basic Behaviour Tree with a Blackboard key.",
          "steps": [
            "Open the Behaviour Tree while PIE is running.",
            "Watch the active branch highlight.",
            "Change/acquire a Blackboard value and observe the branch change."
          ],
          "check": "You can identify which Blackboard value caused the behaviour change."
        },
        {
          "kind": "modify",
          "title": "Add patrol versus chase",
          "task": "Give the AI one extra state/condition.",
          "steps": [
            "Keep patrol as the fallback.",
            "Use a target/seen-player condition for chase.",
            "Test entering and leaving the condition."
          ],
          "check": "The AI switches behaviours predictably and returns to a valid fallback."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/2816f24c-2b8d-45f2-be92-e9ca9b7b4993/behavior-tree-overview-anatomy-blackboard.png",
          "caption": "A Blackboard assigned to a Behavior Tree. Blackboard Keys hold the facts the AI uses to make decisions.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---overview",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/60343779-1e7d-4a7b-a608-438ef8d6c451/behavior-tree-order-of-operation.png",
          "caption": "A real Behavior Tree showing execution order. Unreal evaluates branches left-to-right and top-to-bottom.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---overview",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7e563702-fd1b-4778-a4de-8484d55c0086/behavior-tree-overview-anatomy-decorator.png",
          "caption": "Decorator conditions on a Behavior Tree branch. Decorators decide whether a branch is allowed to execute.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---overview",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        }
      ]
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Animation Blueprints & State Machines?",
          "steps": [
            "Create/open an Animation Blueprint assigned to a Skeletal Mesh.",
            "Use the EventGraph to gather gameplay/movement data.",
            "Use the AnimGraph to generate the final pose.",
            "Open a State Machine/Blend Space to inspect locomotion states and transition rules."
          ],
          "note": "Keep gameplay rules in gameplay systems; the Animation Blueprint should consume facts such as Speed/IsInAir to decide presentation."
        },
        "anatomy": [
          [
            "EventGraph",
            "Collects/updates animation-driving data."
          ],
          [
            "AnimGraph",
            "Produces the final pose."
          ],
          [
            "State Machine",
            "Organises discrete animation states and transitions."
          ],
          [
            "Transition Rule",
            "Boolean condition deciding whether a state change can occur."
          ],
          [
            "Blend Space",
            "Blends animations across values such as speed/direction."
          ],
          [
            "Speed/IsInAir",
            "Typical facts gathered from the owning Pawn/Character."
          ]
        ],
        "process": [
          "Get a reliable reference to the owning Pawn/Character.",
          "Calculate simple facts such as Speed and IsInAir.",
          "Feed those values into locomotion/blend logic.",
          "Use transition rules to enter/leave states.",
          "Play and inspect transitions for popping, stuck states or incorrect thresholds."
        ],
        "examples": [
          {
            "title": "Idle ↔ movement",
            "question": "How fast is the character moving?",
            "condition": "Speed > small threshold",
            "true": "Use locomotion/walk/run blend.",
            "false": "Use Idle state.",
            "why": "Animation responds to movement data without owning movement itself."
          },
          {
            "title": "Jump state",
            "question": "Is the Character Movement Component currently falling?",
            "condition": "IsInAir",
            "true": "Enter jump/fall animation state.",
            "false": "Return to grounded locomotion when false and transition rules allow.",
            "why": "The AnimBP reads a gameplay fact and presents it visually."
          }
        ],
        "remember": [
          "EventGraph gathers facts; AnimGraph builds pose.",
          "Animation should reflect gameplay, not secretly own gameplay rules.",
          "Transition rules should be readable in plain English.",
          "Blend Spaces are useful for continuous values; State Machines for distinct states."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Create/inspect an Animation Blueprint",
          "do": "Create/inspect an Animation Blueprint.",
          "why": "Opening a real AnimBP grounds the terminology.",
          "check": "The correct AnimBP is assigned to the Skeletal Mesh."
        },
        {
          "title": "Identify EventGraph and AnimGraph",
          "do": "Identify EventGraph and AnimGraph.",
          "why": "Separating EventGraph/AnimGraph prevents role confusion.",
          "check": "EventGraph and AnimGraph roles are identifiable."
        },
        {
          "title": "Create Speed from character velocity",
          "do": "Create Speed from character velocity.",
          "why": "Speed is an easy continuous movement fact.",
          "check": "Speed changes when the character moves."
        },
        {
          "title": "Feed locomotion through a Blend Space or existing setup",
          "do": "Feed locomotion through a Blend Space or existing setup.",
          "why": "A Blend Space demonstrates data-driven pose blending.",
          "check": "Locomotion responds to Speed."
        },
        {
          "title": "Inspect a State Machine",
          "do": "Inspect a State Machine.",
          "why": "State Machine inspection exposes discrete states.",
          "check": "You can locate a State Machine and active state."
        },
        {
          "title": "Explain one transition rule in plain English",
          "do": "Explain one transition rule in plain English.",
          "why": "Explaining a transition in English proves understanding rather than memorising nodes.",
          "check": "One transition rule can be stated clearly as a gameplay fact."
        }
      ],
      "evidencePrompt": {
        "show": [
          "EventGraph calculating animation variables.",
          "AnimGraph/State Machine layout.",
          "A transition rule with readable conditions.",
          "In-game proof of at least two visually distinct states."
        ],
        "reflection": [
          "Which gameplay facts drive your animation?",
          "What is the difference between EventGraph and AnimGraph?",
          "What condition changes your main state?",
          "How did you stop animation logic from becoming gameplay logic?"
        ]
      },
      "visuals": [
        {
          "type": "book",
          "src": "assets/book/animation-blueprint.webp",
          "caption": "Reference figure from the supplied book: creating an Animation Blueprint.",
          "authenticUI": true,
          "versionNote": "Supplied book reference (UE5.0-era). Current Unreal may look slightly different."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/animation-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/animation-example.svg",
          "caption": "Original classroom worked example: Idle ↔ movement.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Animation Blueprints",
          "url": "https://dev.epicgames.com/documentation/unreal-engine/animation-blueprints-in-unreal-engine",
          "note": "Current Animation Blueprint Editor, AnimGraph and animation logic reference.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Make a two-state machine",
          "task": "Create or inspect Idle and Move states in an Animation Blueprint.",
          "steps": [
            "Open the State Machine.",
            "Ensure both states have animations.",
            "Create transitions in both directions."
          ],
          "check": "The graph has a valid route between Idle and Move."
        },
        {
          "kind": "test",
          "title": "Drive the transition",
          "task": "Use a gameplay/animation variable such as Speed to control transitions.",
          "steps": [
            "Observe the live variable in PIE.",
            "Move and stop the character.",
            "Watch the active state change."
          ],
          "check": "The transition is caused by a measurable variable, not guesswork."
        },
        {
          "kind": "modify",
          "title": "Change the threshold",
          "task": "Deliberately alter the transition rule.",
          "steps": [
            "Raise/lower the Speed threshold.",
            "Test the character again.",
            "Decide which threshold feels correct and explain why."
          ],
          "check": "You can connect transition logic to visible animation behaviour."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/6368083b-2787-4801-bf9f-2a60bc1e6952/create1.png",
          "caption": "Creating an Animation Blueprint and choosing its Skeleton. Animation Blueprints are specialised Blueprints for controlling skeletal animation.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/animation-blueprints-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "intro",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/a7db83be-d012-4836-820b-154ba35fd181/assign1.png",
          "caption": "Assigning an Animation Blueprint to a Skeletal Mesh through Animation Mode and Anim Class.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/animation-blueprints-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ddbd59bf-8e71-405b-8b5d-a7bbc3284178/create1.png",
          "caption": "Creating a State Machine inside the Anim Graph. State Machines organise locomotion and other animation states.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/state-machines-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "practice",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/6941aa29-6a13-492e-91c9-5fe1f4fea3aa/create3.png",
          "caption": "The State Machine entry point leading into the initial state.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/state-machines-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/85ec3324-7fcd-4767-8d6a-e075928e5301/state2.png",
          "caption": "Adding and connecting animation States. Transition Rules decide when the character is allowed to move between them.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/state-machines-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        }
      ],
      "motionMedia": [
        {
          "slot": "concept",
          "title": "Playing Animation on a Skeletal Mesh",
          "note": "A short official motion example showing animation applied to a character asset in Unreal.",
          "embed": "https://dev.epicgames.com/community/api/cms/videos/V_Cmatef/embed.html",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/skeletal-mesh-assets-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Skeletal Mesh Assets"
        }
      ]
    },
    {
      "id": "practice",
      "path": "practice",
      "order": 1,
      "title": "Blueprint Responsibility: Put Behaviour Where It Belongs",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Blueprint Responsibility?",
          "steps": [
            "There is no single 'responsibility' node; inspect which Blueprint owns each variable and behaviour.",
            "Use Find References and graph navigation to locate where state is changed.",
            "Inspect Level Blueprint, GameMode and reusable Actor Classes for misplaced logic.",
            "Refactor by moving behaviour to the object/system that owns the affected state and expose a clear request Function/Event/Interface."
          ],
          "note": "This lesson is architecture: the tool is the question 'whose state is this?' followed by refactoring, not a new node to memorise."
        },
        "anatomy": [
          [
            "State Owner",
            "Object responsible for storing a piece of data."
          ],
          [
            "Behaviour Owner",
            "Object responsible for changing/acting on its own state."
          ],
          [
            "Requester",
            "External object asking the owner to perform behaviour."
          ],
          [
            "Level Blueprint",
            "Best kept for genuinely level-specific orchestration."
          ],
          [
            "GameMode",
            "Owns game rules, not arbitrary Actor internals."
          ],
          [
            "Public Function/Event",
            "Clean request surface instead of direct internal manipulation."
          ]
        ],
        "process": [
          "Choose one mechanic crossing multiple Blueprints.",
          "List the state each Blueprint owns.",
          "Find logic that directly manipulates somebody else's internals.",
          "Move behaviour to the correct owner.",
          "Replace external manipulation with a request and retest every caller."
        ],
        "examples": [
          {
            "title": "Player death",
            "question": "Who owns the player's death state and respawn behaviour?",
            "condition": "Player/health system",
            "true": "Hazard calls player Die/ApplyDamage; player handles animation/UI/respawn.",
            "false": "Do not duplicate the player's death sequence inside every hazard.",
            "why": "One owner means one place to change death behaviour."
          },
          {
            "title": "Door locking",
            "question": "Who should decide how a door enters Locked state?",
            "condition": "Door owns its internal lock/open state",
            "true": "Other systems request Lock/Unlock through a clean API.",
            "false": "Avoid external Blueprints reaching in to manipulate several internal door variables/components.",
            "why": "Door implementation can change without rewriting every caller."
          }
        ],
        "remember": [
          "Ask 'whose state is this?' before choosing where logic lives.",
          "Other systems request behaviour; owners implement it.",
          "Duplication often signals wrong ownership.",
          "Level Blueprint should not become the dumping ground for reusable gameplay."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Inspect a bad example where several hazards each implement player death",
          "do": "Inspect a bad example where several hazards each implement player death.",
          "why": "A deliberately bad example makes ownership problems visible.",
          "check": "You can point to the duplicated/wrongly owned logic."
        },
        {
          "title": "Identify what belongs to the player",
          "do": "Identify what belongs to the player.",
          "why": "Naming the true owner focuses the refactor.",
          "check": "The player/system owner is justified in plain English."
        },
        {
          "title": "Move death behaviour into one player Event/Function",
          "do": "Move death behaviour into one player Event/Function.",
          "why": "One central death behaviour removes duplication.",
          "check": "One central Event/Function now handles the behaviour."
        },
        {
          "title": "Change hazards so they request that behaviour",
          "do": "Change hazards so they request that behaviour.",
          "why": "Changing hazards into requesters reduces their dependencies.",
          "check": "All hazards/requesters call the owner rather than copy internals."
        },
        {
          "title": "Change death behaviour once and verify all hazards follow it",
          "do": "Change death behaviour once and verify all hazards follow it.",
          "why": "Changing death once proves the ownership improvement.",
          "check": "Changing the owner behaviour updates every caller."
        },
        {
          "title": "Identify one genuinely level-specific use for Level Blueprint",
          "do": "Identify one genuinely level-specific use for Level Blueprint.",
          "why": "A genuine level-specific example prevents the false lesson that Level Blueprint is always forbidden.",
          "check": "You can identify one level-specific use that should remain in Level Blueprint."
        }
      ],
      "evidencePrompt": {
        "show": [
          "Before screenshot of duplicated/misplaced logic.",
          "After screenshot showing the new owner/request call.",
          "At least two callers using the central behaviour.",
          "A short ownership diagram or comment explaining the decision."
        ],
        "reflection": [
          "What state was owned by the wrong Blueprint?",
          "Why is the new owner better?",
          "What dependency/duplication did you remove?",
          "What would break less often after this refactor?"
        ]
      },
      "visuals": [
        {
          "type": "book",
          "src": "assets/book/responsibility.webp",
          "caption": "Reference figure from the supplied book: an example of moving player-death responsibility into the player Blueprint.",
          "authenticUI": true,
          "versionNote": "Supplied book reference (UE5.0-era). Current Unreal may look slightly different."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/practice-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/practice-example.svg",
          "caption": "Original classroom worked example: Player death.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Blueprint Best Practices",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-best-practices-in-unreal-engine",
          "note": "Epic guidance on reusable Blueprint Classes, event-driven logic and maintainability.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Find misplaced responsibility",
          "task": "Choose one graph and circle/name logic that belongs somewhere else.",
          "steps": [
            "Identify what the logic does.",
            "Identify which object actually owns that behaviour/data.",
            "Explain why the current location is awkward."
          ],
          "check": "You can justify a better owner before moving anything."
        },
        {
          "kind": "test",
          "title": "Move one responsibility",
          "task": "Refactor one small behaviour into the owning Blueprint/Class.",
          "steps": [
            "Move the logic.",
            "Reconnect communication/reference cleanly.",
            "Retest the original gameplay behaviour."
          ],
          "check": "The game still works with clearer ownership."
        },
        {
          "kind": "modify",
          "title": "Make the intent visible",
          "task": "Improve the refactored Blueprint for the next person.",
          "steps": [
            "Rename variables/functions.",
            "Add a useful Category/Tooltip/comment.",
            "Remove one unnecessary dependency or wire crossing if possible."
          ],
          "check": "A classmate could understand the responsibility faster than before."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/d90cd840-2711-4cfd-807e-39ef1ac58ef8/variableslocal.png",
          "caption": "Epic’s example of Local Variables inside a Function. Scope is part of Blueprint responsibility: keep data as local as the problem allows.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-best-practices-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "concept",
          "type": "epic-doc"
        }
      ]
    },
    {
      "id": "complexity",
      "path": "practice",
      "order": 2,
      "title": "Stop Blueprint Spaghetti: Refactor for Humans",
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
      },
      "deepDive": {
        "find": {
          "title": "Where do I find/use Stop Blueprint Spaghetti?",
          "steps": [
            "Use Functions, Macros and Collapse Nodes from graph context menus/My Blueprint when abstraction is justified.",
            "Use comment boxes to label intent.",
            "Rename variables/functions/components in My Blueprint/Components.",
            "Use Categories and Tooltips in Details for designer-facing variables."
          ],
          "note": "Making a graph physically smaller is not automatically making it clearer. Abstraction should reveal intent, not hide a mess behind vague names."
        },
        "anatomy": [
          [
            "Function",
            "Best for a named reusable job with inputs/outputs."
          ],
          [
            "Macro",
            "Reusable graph expansion useful for some execution-flow patterns; use deliberately."
          ],
          [
            "Collapsed Graph",
            "Groups local graph detail without necessarily creating a reusable API."
          ],
          [
            "Comment",
            "Explains intent/section at a glance."
          ],
          [
            "Category",
            "Groups exposed variables/functions meaningfully."
          ],
          [
            "Tooltip",
            "Documents what a designer-facing value controls."
          ]
        ],
        "process": [
          "Zoom out and identify what the graph is trying to say.",
          "Mark repeated/single-purpose node groups.",
          "Extract meaningful jobs into clearly named Functions where appropriate.",
          "Rename ambiguous variables and comment top-level intent.",
          "Retest after every refactor so readability improves without changing behaviour."
        ],
        "examples": [
          {
            "title": "Interact input spaghetti",
            "question": "Can the top graph explain its intent in a few operations?",
            "condition": "FindInteractable → CanInteract → PerformInteraction",
            "true": "Move detailed calculations/checks into named Functions.",
            "false": "Leave fifty anonymous nodes under InputAction Interact.",
            "why": "Readers can understand intent before inspecting implementation."
          },
          {
            "title": "Designer settings",
            "question": "Can someone safely tune this Blueprint without opening its graph?",
            "condition": "Exposed variables grouped/documented",
            "true": "Use Interaction, Audio and Movement categories plus useful Tooltips.",
            "false": "Expose Value1, Speed2 and Temp with no context.",
            "why": "The Details panel becomes a usable interface rather than a puzzle."
          }
        ],
        "remember": [
          "Readable top-level graphs communicate intent.",
          "Name abstractions after jobs, not vague 'Stuff'/'Logic'.",
          "Refactor in small tested steps.",
          "Comments, Categories and Tooltips are part of professional Blueprint communication."
        ]
      },
      "guidedDetailed": [
        {
          "title": "Open a deliberately messy Event Graph",
          "do": "Open a deliberately messy Event Graph.",
          "why": "A messy graph gives you something real to improve.",
          "check": "You can identify at least three conceptual jobs in the messy graph."
        },
        {
          "title": "Identify groups that perform one job",
          "do": "Identify groups that perform one job.",
          "why": "Grouping nodes by one job reveals abstraction candidates.",
          "check": "One reusable/single-purpose group is extracted."
        },
        {
          "title": "Convert a reusable group into a Function",
          "do": "Convert a reusable group into a Function.",
          "why": "A Function turns implementation detail into a readable call.",
          "check": "The Function name explains its purpose."
        },
        {
          "title": "Comment remaining top-level blocks",
          "do": "Comment remaining top-level blocks.",
          "why": "Comments preserve top-level structure.",
          "check": "Remaining top-level blocks are commented by intent."
        },
        {
          "title": "Rename unclear variables",
          "do": "Rename unclear variables.",
          "why": "Good names reduce the need to trace wires just to understand data.",
          "check": "Ambiguous variables have meaningful names."
        },
        {
          "title": "Add Categories and Tooltips",
          "do": "Add Categories and Tooltips.",
          "why": "Categories/Tooltips improve the interface for future you or teammates.",
          "check": "Exposed settings are grouped/documented."
        },
        {
          "title": "Zoom out and judge whether the graph still communicates its structure",
          "do": "Zoom out and judge whether the graph still communicates its structure.",
          "why": "Zooming out tests whether architecture is visible at a glance.",
          "check": "The graph is easier to explain when zoomed out and gameplay still works."
        }
      ],
      "evidencePrompt": {
        "show": [
          "Before and after screenshots of one refactored graph.",
          "At least one well-named Function with inputs/outputs.",
          "Comments/Categories/Tooltips visible.",
          "A zoomed-out final graph whose main flow is understandable."
        ],
        "reflection": [
          "What was the hardest part of the graph to understand before?",
          "Why did you choose a Function/Macro/collapse for your refactor?",
          "What name/comment most improved readability?",
          "How did you prove the refactor did not change behaviour?"
        ]
      },
      "visuals": [
        {
          "type": "book",
          "src": "assets/book/responsibility.webp",
          "caption": "Book reference for the best-practice section; the lesson also applies the book's abstraction/readability guidance.",
          "authenticUI": true,
          "versionNote": "Supplied book reference (UE5.0-era). Current Unreal may look slightly different."
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/complexity-process.svg",
          "caption": "Original classroom diagram: the lesson workflow broken into a clear sequence.",
          "authenticUI": false
        },
        {
          "type": "diagram",
          "src": "assets/diagrams/gold/complexity-example.svg",
          "caption": "Original classroom worked example: Interact input spaghetti.",
          "authenticUI": false
        }
      ],
      "officialRefs": [
        {
          "title": "Blueprint Best Practices",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-best-practices-in-unreal-engine",
          "note": "Epic guidance for maintainable Blueprint structure.",
          "source": "Epic Games",
          "version": "UE5.8"
        },
        {
          "title": "Blueprint Debugging Example",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-debugging-example-in-unreal-engine",
          "note": "Current breakpoints, Watches, active wires and debugging workflow.",
          "source": "Epic Games",
          "version": "UE5.8"
        }
      ],
      "inlineExercises": [
        {
          "kind": "try",
          "title": "Choose one messy region",
          "task": "Pick a Blueprint graph with duplicated or tangled logic.",
          "steps": [
            "Identify one repeated job.",
            "Mark its inputs and outputs.",
            "Choose Function, Macro or another suitable extraction."
          ],
          "check": "You can explain what the extracted unit will own."
        },
        {
          "kind": "test",
          "title": "Refactor without changing behaviour",
          "task": "Extract the logic and prove the game still behaves identically.",
          "steps": [
            "Refactor the selected region.",
            "Compile and test the same scenario.",
            "Compare outputs/behaviour before and after."
          ],
          "check": "The structure improved without silently changing gameplay."
        },
        {
          "kind": "modify",
          "title": "Do a human-readability pass",
          "task": "Treat the Blueprint as something another developer must maintain.",
          "steps": [
            "Rename vague nodes/variables/functions.",
            "Add comments only where they explain intent.",
            "Straighten execution flow and reduce unnecessary crossings."
          ],
          "check": "The graph tells a clearer story from left to right."
        }
      ],
      "docVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/d90cd840-2711-4cfd-807e-39ef1ac58ef8/variableslocal.png",
          "caption": "Local variables are one small example of reducing graph clutter by limiting scope. Refactoring is often a collection of choices like this rather than one magic node.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-best-practices-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "slot": "deeper",
          "type": "epic-doc"
        }
      ]
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
