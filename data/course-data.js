window.UE5_COURSE_DATA = {
  "version": "3.34.14",
  "buildDate": "29 Aug 2026",
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
          "title": "Open the Third Person template project",
          "where": "Epic Games Launcher or Unreal Project Browser → Games → Third Person",
          "do": "Open an existing Third Person project, or create a new one called Learning_Practice.",
          "doList": [
            "Wait for the default Third Person map to load.",
            "If a dialogue asks to rebuild or save, allow it."
          ],
          "why": "Using a known starter project means everyone begins from the same layout and controls.",
          "see": "The Viewport shows the mannequin level and the top toolbar includes Play.",
          "check": "Press Play once. The character should spawn and move normally.",
          "troubleshoot": [
            "If the project opens on a blank map, use File → Open Level and choose the default ThirdPersonMap."
          ]
        },
        {
          "title": "Find the four core panels",
          "where": "Centre = Viewport, upper-right = Outliner, lower-right = Details, bottom = Content Drawer / Content Browser",
          "do": "Click once inside each panel so you deliberately identify it rather than just looking at the screen.",
          "doList": [
            "Click an Actor in the Viewport.",
            "Notice the same Actor highlight in the Outliner.",
            "Notice the Details panel changes to that Actor."
          ],
          "why": "Most early Unreal problems are simply “which panel do I use?”",
          "see": "You can point to the Viewport, Outliner, Details and Content Drawer without guessing.",
          "check": "Close and reopen the Content Drawer. You should know where each panel lives.",
          "troubleshoot": [
            "If Outliner or Details is missing, use Window → Outliner or Window → Details."
          ]
        },
        {
          "title": "Place three cube Actors into the level",
          "where": "Toolbar → Add (+) → Shapes → Cube",
          "do": "Drag a Cube from the Add menu into the Viewport three times.",
          "doList": [
            "Place the first cube near the floor.",
            "Repeat until you have three cubes.",
            "Press F after selecting a cube if you lose it."
          ],
          "why": "Simple placed Actors let you practise selection and transforms without extra Blueprint setup.",
          "see": "Three separate cubes appear in the Viewport and three cube entries appear in the Outliner.",
          "check": "Click each cube in the Outliner. The correct cube should highlight in the Viewport.",
          "troubleshoot": [
            "If you accidentally drag one huge cube, undo with Ctrl+Z and place it again."
          ]
        },
        {
          "title": "Rename the placed cubes properly",
          "where": "Outliner → select Actor → press F2 or right-click → Rename",
          "do": "Rename the three cubes to something meaningful such as Cube_Centre, Cube_Left and Cube_Right.",
          "why": "Good names stop the Outliner becoming unreadable as the level grows.",
          "see": "The Outliner shows your new names instead of generic Cube / Cube2 style names.",
          "check": "You can tell which cube is which from the Outliner alone.",
          "troubleshoot": [
            "If rename does not start, click once to select then press F2."
          ]
        },
        {
          "title": "Change Location, Rotation and Scale in Details",
          "where": "Select a cube → Details panel → Transform",
          "do": "Select each cube and give it a different transform.",
          "doList": [
            "Move one cube upward by changing Location Z.",
            "Rotate one cube on Z.",
            "Scale one cube so it is visibly different."
          ],
          "why": "Every 3D object depends on transform values, so this is a core editor skill.",
          "see": "The three cubes now look different in position, angle or size.",
          "check": "Undo and redo one transform change so you know where the values are.",
          "troubleshoot": [
            "If the wrong Actor moves, re-check which Outliner row is selected."
          ]
        },
        {
          "title": "Create a Learning folder and save deliberately",
          "where": "Content Drawer → right-click empty space → New Folder",
          "do": "Create a folder called Learning, then save the level and project changes.",
          "doList": [
            "Open the Content Drawer.",
            "Create the Learning folder.",
            "Press Ctrl+S to save the level."
          ],
          "why": "A tidy folder structure and frequent saves prevent chaos later.",
          "see": "The Learning folder exists in the Content Drawer.",
          "check": "Close and reopen the Content Drawer: the folder is still there and the level keeps your cubes.",
          "troubleshoot": [
            "If the folder appears inside the wrong directory, move back up one level and create it again."
          ]
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
      "docVisuals": [],
      "starterValues": [
        "Project: Learning_Practice",
        "Cube size: default 100 cm",
        "Cube_Centre Location: X 0, Y 0, Z 50",
        "Cube_Left Location: X 0, Y -200, Z 50",
        "Cube_Right Location: X 0, Y 200, Z 50",
        "Cube_Right Rotation Z (Yaw): 45°",
        "Use Scale 1,1,1 unless the step explicitly asks otherwise"
      ],
      "studentRecipe": [
        "Open Games → Third Person and create/open the project Learning_Practice. Wait for the default Third Person map to finish loading.",
        "Press Play once. Move the character, then press Esc. If this does not work, fix the project/map before continuing.",
        "Use Add (+) → Shapes → Cube and place three cubes. Do not resize them by dragging.",
        "In the Outliner rename them exactly: Cube_Centre, Cube_Left, Cube_Right.",
        "Select Cube_Centre → Details → Transform and enter Location X 0, Y 0, Z 50. Repeat with Cube_Left at 0,-200,50 and Cube_Right at 0,200,50.",
        "Select Cube_Right and set Rotation Z/Yaw to 45°. Leave X and Y rotation at 0°.",
        "Click each Outliner name and prove the matching cube highlights. Press F once for each selected Actor and confirm the camera frames the matching cube.",
        "Content Drawer → create folder Learning. Use File → Save All. Do not continue with unsaved changes."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/70b8eb57-6f94-4214-aec5-93178378c19d/creating-new-project.png",
          "caption": "Official UE5.8 Project Browser. Choose Games and the template named in the Hub step, then use the Hub project name.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-a-new-project-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        {
          "src": "https://dev.epicgames.com/community/api/documentation/image/3ad201cb-0b8f-4f54-92d3-b6896970d293?resizing_type=fit",
          "caption": "Official UE5.8 example of placing a Box/primitive into a level. Repeat the placement and naming required by the Hub step.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/level-designer-quick-start-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        {
          "src": "https://dev.epicgames.com/community/api/documentation/image/7817a540-3f6b-4059-8a57-47b3cf9031ec?resizing_type=fit",
          "caption": "Official UE5.8 Details/Transform example. Enter the exact Location/Rotation values written in the Hub instruction.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/level-designer-quick-start-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://dev.epicgames.com/community/api/documentation/image/f10cfd27-10c6-4673-a9aa-4c1d8c9fa025?resizing_type=fit",
          "caption": "Official UE5.8 actor rotation example. For the Hub exercise, use the exact Yaw value specified in the text.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/level-designer-quick-start-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "assets/ue5/current/editor-main-window.webp",
          "caption": "Current classroom UE5 Level Editor showing the Viewport and Outliner together for selecting and framing Actors.",
          "sourceTitle": "Current classroom Unreal Engine capture (Aug 2026)",
          "kind": "ue5"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/49757298-d433-4ab5-8da0-0009bebbd89d/content-browser-navigation-bar.png",
          "caption": "Official UE5.8 Content Browser Navigation Bar, including Save All. Create the Hub folder in the Asset View and save before continuing.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/content-browser-interface-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        }
      ]
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
        "type": "ue5-reference",
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/6da79f18-bdc3-4588-9d20-e9f624bd1686/components_pane.png",
        "caption": "The real Components window inside the Blueprint Editor. Components form the hierarchy that builds an Actor from smaller pieces.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "title": "Create BP_PracticeBeacon",
          "where": "Content Drawer → Learning folder → right-click → Blueprint Class → Actor",
          "do": "Create an Actor Blueprint called BP_PracticeBeacon and open it.",
          "why": "An Actor Blueprint is the standard place to combine components into one reusable object.",
          "see": "The Blueprint Editor opens and shows an empty Actor with a DefaultSceneRoot.",
          "check": "The asset name in the tab says BP_PracticeBeacon.",
          "troubleshoot": [
            "If you created the Blueprint in the wrong folder, move it into Learning before continuing."
          ]
        },
        {
          "title": "Add a Static Mesh body",
          "where": "Blueprint Editor → Components panel → Add → Static Mesh",
          "do": "Add a Static Mesh component and name it SM_Body.",
          "doList": [
            "Select the new component.",
            "In Details, assign a simple mesh such as Cube or Sphere."
          ],
          "why": "The mesh gives the Blueprint a visible body that can be placed and recognised in the level.",
          "see": "The Viewport now shows your chosen mesh component.",
          "check": "Selecting SM_Body highlights the visible mesh in the Blueprint Viewport.",
          "troubleshoot": [
            "If the mesh is invisible, check that the Static Mesh asset field is not empty."
          ]
        },
        {
          "title": "Add a Point Light",
          "where": "Components panel → Add → Point Light",
          "do": "Add a Point Light and keep it as a child of the root or mesh.",
          "doList": [
            "Move it slightly above the mesh in the Blueprint Viewport.",
            "Increase Intensity if needed so the light is obvious."
          ],
          "why": "A Point Light proves that Blueprints can own more than visible geometry.",
          "see": "The Blueprint Viewport shows visible lighting around the mesh.",
          "check": "Toggling the Point Light visibility changes the look of the Blueprint.",
          "troubleshoot": [
            "If nothing changes, move the light closer or increase its Intensity."
          ]
        },
        {
          "title": "Add Box Collision",
          "where": "Components panel → Add → Box Collision",
          "do": "Add Box Collision and scale it so it wraps around the visible mesh.",
          "why": "Collision components let your Actor sense overlaps or block movement later.",
          "see": "A green wireframe collision box appears around the object.",
          "check": "The collision box is big enough to cover the object but not absurdly huge.",
          "troubleshoot": [
            "If the collision is tiny, use the Scale values or Box Extent in Details."
          ]
        },
        {
          "title": "Arrange the hierarchy and transforms",
          "where": "Components panel and Blueprint Viewport",
          "do": "Check the component hierarchy and move components deliberately.",
          "doList": [
            "Make SM_Body the visual centre.",
            "Move the Point Light above the mesh.",
            "Keep Box Collision centred around the body."
          ],
          "why": "Children inherit the parent transform, so hierarchy affects how objects move together.",
          "see": "Moving the Actor root causes all child components to follow as one object.",
          "check": "You can explain which component is the root and which components are children.",
          "troubleshoot": [
            "If a component drifts too far away, reset its relative transform in Details."
          ]
        },
        {
          "title": "Compile and place the Blueprint into the level",
          "where": "Top toolbar in Blueprint Editor → Compile, then drag BP_PracticeBeacon from Content Drawer into the level",
          "do": "Compile the Blueprint, return to the level and place one instance of BP_PracticeBeacon.",
          "why": "Placing an instance proves the Blueprint has become a reusable object in the world.",
          "see": "One placed beacon appears in the level with its mesh, light and collision setup.",
          "check": "Selecting the placed Actor shows BP_PracticeBeacon in the Outliner.",
          "troubleshoot": [
            "If the instance looks old, compile again before placing or update the placed instance."
          ]
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
      ],
      "starterValues": [
        "Blueprint: BP_PracticeBeacon",
        "Static Mesh component: SM_Body",
        "Mesh: Cube",
        "Point Light: Intensity 2500, Attenuation Radius 350",
        "Box Collision Box Extent: X 75, Y 75, Z 75",
        "Placed Actor Location: X 0, Y 0, Z 100"
      ],
      "studentRecipe": [
        "Content Drawer → Learning → right-click → Blueprint Class → Actor. Name it BP_PracticeBeacon and open it.",
        "Components → Add → Static Mesh. Rename it SM_Body. In Details → Static Mesh choose the basic Cube mesh.",
        "Components → Add → Point Light. Set Intensity to 2500 and Attenuation Radius to 350. Keep the light centred for now.",
        "Components → Add → Box Collision. Set Box Extent X 75, Y 75, Z 75.",
        "In the Components tree make sure SM_Body, PointLight and Box are components of the same Actor. Do not create separate level Actors for them.",
        "Compile. Fix every compile error before leaving the Blueprint.",
        "Drag BP_PracticeBeacon into the level and set Location X 0, Y 0, Z 100.",
        "Press Play. View the beacon from two different angles and confirm the mesh and light remain together as one reusable Actor."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/846ba685-3440-4abb-b515-7fc74402a95a/contentbrowserdropdown.png",
            "caption": "Official UE5.8 Content Browser menu with Blueprint Class. Use this route when the step asks you to create a new Blueprint Class.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b4cc035a-4fad-4b19-90d2-39d538604814/new_asset_parent_class.png",
            "caption": "Official UE5.8 Blueprint parent-class chooser. Pick Actor when the Hub recipe asks for a reusable world Actor.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/67a54191-1b18-4e82-abb2-4f8ff258ee55/add_new_component_list.png",
          "caption": "Official UE5.8 Add Component menu. Use this menu to add the Static Mesh component requested in this step.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/67a54191-1b18-4e82-abb2-4f8ff258ee55/add_new_component_list.png",
          "caption": "Official UE5.8 Add Component menu. Search this menu for the component named in the Hub step.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/67a54191-1b18-4e82-abb2-4f8ff258ee55/add_new_component_list.png",
          "caption": "Official UE5.8 Add Component menu. Search this menu for the component named in the Hub step.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/6da79f18-bdc3-4588-9d20-e9f624bd1686/components_pane.png",
          "caption": "Official UE5.8 Components window. Use the hierarchy to confirm the mesh, light and collision belong to the same Actor.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/32c0d35b-3d57-480c-adaf-f6f9c9109ef4/draganddropbp.png",
            "caption": "Official UE5.8 Blueprint drag-and-drop into a level. Then set the exact transform required by the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://dev.epicgames.com/community/api/documentation/image/7817a540-3f6b-4059-8a57-47b3cf9031ec?resizing_type=fit",
            "caption": "Official UE5.8 Details/Transform example. Enter the exact Location/Rotation values written in the Hub instruction.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/level-designer-quick-start-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        null
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
        "type": "ue5-reference",
        "src": "https://dev.epicgames.com/community/api/documentation/image/bd914bd2-52e6-4926-844b-ed56b093a736?height=335&resizing_type=fill&width=1920",
        "caption": "Epic’s current Blueprint Class reference. A Blueprint Class defines a reusable type; instances placed in the world inherit that class behaviour.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-class-assets-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "where": "Content Drawer → Learning folder → right-click → Blueprint Class → Actor",
          "do": "Create an Actor Blueprint called BP_ColourBlock and open it.",
          "why": "You need one reusable Class before you can prove how instances work.",
          "see": "The Blueprint Editor opens for BP_ColourBlock.",
          "check": "The asset compiles with no errors."
        },
        {
          "title": "Add a Cube Static Mesh",
          "where": "Components panel → Add → Static Mesh",
          "do": "Add a Static Mesh component, assign Cube and name it SM_Block.",
          "why": "A simple visible mesh makes later instance differences easy to spot.",
          "see": "The Blueprint viewport contains one cube block.",
          "check": "Compile succeeds and the cube is visible.",
          "troubleshoot": [
            "If the component exists but looks empty, assign a cube mesh in Details."
          ]
        },
        {
          "title": "Place three instances in the level",
          "where": "Compile → return to level → drag BP_ColourBlock in three times",
          "do": "Compile the Blueprint and place three separate instances in the level.",
          "doList": [
            "Spread them apart so you can tell them apart.",
            "Rename the placed Actors if needed."
          ],
          "why": "Multiple placed instances are the proof that one Class can be reused.",
          "see": "Three BP_ColourBlock Actors exist in the Outliner.",
          "check": "Deleting one instance does not delete the Blueprint asset or the other instances.",
          "troubleshoot": [
            "If dragging creates only one object, drag from the Content Drawer again instead of duplicating a selected component in the Blueprint."
          ]
        },
        {
          "title": "Change each instance transform",
          "where": "Level Editor → select each placed instance → Details → Transform",
          "do": "Give each instance a different Location, Rotation or Scale.",
          "why": "Instances are independent world objects even when they share the same parent Class.",
          "see": "The three blocks look different in position or size.",
          "check": "Changing one instance transform does not move the other two."
        },
        {
          "title": "Edit the Class and watch all instances update",
          "where": "Double-click BP_ColourBlock → change the Class → Compile",
          "do": "Change something inside the Blueprint Class such as the mesh scale, material or an added Point Light.",
          "why": "Class changes flow out to every instance, which is the whole point of reuse.",
          "see": "All placed instances update after you compile the Blueprint.",
          "check": "At least one visible Class change appears on all three instances.",
          "troubleshoot": [
            "If only one object changes, you edited a placed instance rather than the Class asset."
          ]
        },
        {
          "title": "Expose one instance-editable variable",
          "where": "Blueprint Editor → My Blueprint panel → Variables → select variable → Details → Instance Editable",
          "do": "Create a variable such as GlowIntensity or BlockLabel, mark it Instance Editable, compile, then give each placed instance a different value in the level.",
          "why": "Instance Editable variables allow controlled variation without duplicating the whole Blueprint.",
          "see": "Each placed instance shows the variable in its Details panel.",
          "check": "Different instances can use different values while still coming from the same Blueprint Class.",
          "troubleshoot": [
            "If the variable does not appear on the placed Actor, compile after ticking Instance Editable."
          ]
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
      ],
      "starterValues": [
        "Blueprint: BP_ColourBlock",
        "Component: SM_Block",
        "Instance variable: BlockLabel (String)",
        "Default BlockLabel: A",
        "Placed labels: A, B, C"
      ],
      "studentRecipe": [
        "Create Actor Blueprint BP_ColourBlock in Learning and open it.",
        "Add Static Mesh → rename SM_Block → choose Cube → Compile.",
        "Drag BP_ColourBlock into the level three times. Rename the instances Block_A, Block_B and Block_C.",
        "Inside BP_ColourBlock create variable BlockLabel. Set type to String, default A, tick Instance Editable, then Compile.",
        "Return to the level. Select Block_A and set BlockLabel to A; Block_B to B; Block_C to C.",
        "Move the three instances to visibly different positions. Do not duplicate the Blueprint asset itself.",
        "Open BP_ColourBlock, add one Point Light component, set Intensity 1000, Compile.",
        "Return to the level and prove all three instances gained the light while their BlockLabel values stayed different."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/846ba685-3440-4abb-b515-7fc74402a95a/contentbrowserdropdown.png",
            "caption": "Official UE5.8 Content Browser menu with Blueprint Class. Use this route when the step asks you to create a new Blueprint Class.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b4cc035a-4fad-4b19-90d2-39d538604814/new_asset_parent_class.png",
            "caption": "Official UE5.8 Blueprint parent-class chooser. Pick Actor when the Hub recipe asks for a reusable world Actor.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/67a54191-1b18-4e82-abb2-4f8ff258ee55/add_new_component_list.png",
          "caption": "Official UE5.8 Add Component menu. Add the Static Mesh component requested by the Hub step, then choose the Cube mesh.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/32c0d35b-3d57-480c-adaf-f6f9c9109ef4/draganddropbp.png",
          "caption": "Official UE5.8 Blueprint drag-and-drop into a level. Then set the exact transform required by the Hub step.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/1a1c94bb-ee27-48da-a1fa-0e58d6e2aaaf/blueprint_details_variable_callout.png",
          "caption": "Official UE5.8 variable Details. Instance Editable is the setting that exposes a class variable on each placed instance.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/4aa6eba5-d064-4154-999e-8920f70f904a/ht23.png",
          "caption": "Official UE5.8 placed-Blueprint Details example showing an exposed Instance Editable variable. Use the Hub values: Block_A = A, Block_B = B and Block_C = C.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/32c0d35b-3d57-480c-adaf-f6f9c9109ef4/draganddropbp.png",
          "caption": "Official UE5.8 placed Blueprint instance. Move the three Hub instances to visibly different positions; the exact positions are your choice.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/67a54191-1b18-4e82-abb2-4f8ff258ee55/add_new_component_list.png",
          "caption": "Official UE5.8 Add Component menu. Search this menu for the component named in the Hub step.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null
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
          "where": "Learning folder → Blueprint Class → Actor",
          "do": "Create a new Actor Blueprint called BP_EventPractice and place one copy in the level.",
          "why": "A clean practice Blueprint makes event flow easier to observe.",
          "see": "BP_EventPractice exists both as an asset and as one placed Actor.",
          "check": "The placed Actor appears in the Outliner."
        },
        {
          "title": "Add BeginPlay and one Print String",
          "where": "BP_EventPractice → Event Graph",
          "do": "Use Event BeginPlay and connect it to Print String with the message “BeginPlay fired”.",
          "doList": [
            "Delete any unwanted starter nodes.",
            "Compile before testing."
          ],
          "why": "BeginPlay is the easiest event to prove that execution started.",
          "see": "When Play starts, the message appears on screen.",
          "check": "The string appears only when the Actor begins play.",
          "troubleshoot": [
            "If nothing prints, make sure a BP_EventPractice instance is actually placed in the level."
          ]
        },
        {
          "title": "Chain two more Print Strings",
          "where": "Event Graph → connect exec pin from first Print String into two more Print String nodes",
          "do": "Add two more Print String nodes so the execution path forms a clear chain.",
          "why": "A chain makes execution order visible rather than abstract.",
          "see": "You can trace the white execution wire from BeginPlay through all three messages.",
          "check": "The messages appear in the same order as the wire path."
        },
        {
          "title": "Predict the order before pressing Play",
          "where": "Look at the Event Graph before running the game",
          "do": "Say out loud or write down which message will appear first, second and third.",
          "why": "Prediction forces you to reason about execution instead of just watching it happen.",
          "see": "Your prediction matches the node order you built.",
          "check": "After testing, compare the real output with your prediction."
        },
        {
          "title": "Break one wire and test again",
          "where": "Event Graph → Alt-click or disconnect one execution wire",
          "do": "Disconnect the wire before the second or third Print String and press Play again.",
          "why": "Execution cannot continue through a broken wire, so later nodes stop firing.",
          "see": "Only the earlier messages appear.",
          "check": "Reconnecting the wire restores the missing message.",
          "troubleshoot": [
            "If all messages still appear, you disconnected a data pin rather than the white execution pin."
          ]
        },
        {
          "title": "Add a second event and compare it",
          "where": "Components panel → Add Box Collision, then Event Graph → Add OnComponentBeginOverlap or another clear event",
          "do": "Add a second event that fires under a different condition and compare when each event runs.",
          "why": "Different events are different starting points for logic.",
          "see": "BeginPlay fires at game start, while the second event fires only when its condition is met.",
          "check": "You can explain exactly what causes each event to run.",
          "troubleshoot": [
            "If the overlap never fires, enlarge the collision box and move the player through it."
          ]
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
      ],
      "starterValues": [
        "Blueprint: BP_EventPractice",
        "Print duration: 2.0 s",
        "Messages: 01 BeginPlay / 02 Second / 03 Third",
        "Overlap Box Extent: 100,100,100"
      ],
      "studentRecipe": [
        "Create BP_EventPractice (Actor), place one instance in the level and open its Event Graph.",
        "From Event BeginPlay add Print String. Set In String to 01 BeginPlay and Duration to 2.0.",
        "From that Print String execution output connect a second Print String: 02 Second, Duration 2.0.",
        "Connect a third Print String: 03 Third, Duration 2.0. Compile.",
        "Before Play, predict the order. Press Play and prove the messages run 01 → 02 → 03.",
        "Exit Play. Disconnect the execution wire before 03 Third. Play again and prove 03 no longer runs.",
        "Add Box Collision with Extent 100,100,100. Add OnComponentBeginOverlap(Box) → Print String “Overlap fired”.",
        "Compile and Play. Walk into the box and prove BeginPlay fires once while Overlap fires when the player enters."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/846ba685-3440-4abb-b515-7fc74402a95a/contentbrowserdropdown.png",
            "caption": "Official UE5.8 Content Browser route to Blueprint Class. Use the asset name from the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b4cc035a-4fad-4b19-90d2-39d538604814/new_asset_parent_class.png",
            "caption": "Official UE5.8 Blueprint parent-class chooser. Search/select the class named in the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/09c2041a-fb9f-436f-98c0-04f322863de6/beginplay.png",
          "caption": "Official UE5.8 Event BeginPlay node. This event fires when the Actor begins play.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/events-in-unreal-engine?lang=en-US",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/1e704a89-2e8a-4755-ade2-7f76a96aeb90/basicconnect.png",
          "caption": "Official UE5.8 Blueprint node connection example. White execution wires control what runs next; coloured wires carry data.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        null,
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/3c8fbaad-8f3c-4849-829b-0ece960f436f/beginoverlap.png",
          "caption": "Official UE5.8 Actor Begin Overlap event. Other Actor identifies the object that entered the overlap.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/events-in-unreal-engine?lang=en-US",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null
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
        "type": "ue5-reference",
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/d891edb3-17af-428d-b3ce-53ed05ffc12d/myblueprintpane.png",
        "caption": "Variables listed in the real My Blueprint panel. This is where students create, name and organise gameplay state.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "title": "Create Health as a Float",
          "where": "My Blueprint panel → + Variable",
          "do": "Create a variable called Health, set its type to Float and give it a default value of 100.",
          "why": "Health is a clear example of game state that changes during play.",
          "see": "Health appears in the Variables list as a Float.",
          "check": "In Class Defaults or variable Details, the default value shows 100."
        },
        {
          "title": "Create IsActive as a Boolean",
          "where": "My Blueprint panel → + Variable → type dropdown → Boolean",
          "do": "Create a second variable called IsActive and choose an intentional default of true or false.",
          "why": "A Boolean shows that not every variable is a number.",
          "see": "IsActive appears with a tick-box style default.",
          "check": "You can explain what true and false would mean for this Blueprint."
        },
        {
          "title": "Print Health on BeginPlay",
          "where": "Event Graph → Event BeginPlay → drag in Health as Get → Print String",
          "do": "Read Health on BeginPlay and print it so you can see the stored value.",
          "why": "Reading before changing proves what the Blueprint currently knows.",
          "see": "The printed value is 100 or whatever default you set.",
          "check": "Changing the default value changes the printed result next time you press Play.",
          "troubleshoot": [
            "If Print String shows nothing useful, convert the Float to string automatically when you connect it."
          ]
        },
        {
          "title": "Set Health to a new value and print again",
          "where": "Event Graph → add Set Health after the first print",
          "do": "After printing the original value, set Health to a new number such as 60 and print Health again.",
          "why": "Set then Get demonstrates that variables store state between steps in the same execution path.",
          "see": "The second print now shows the new value.",
          "check": "The first print and second print are different for the expected reason."
        },
        {
          "title": "Make one variable Instance Editable",
          "where": "Select the variable → Details → Instance Editable",
          "do": "Tick Instance Editable for one useful variable, compile, then select a placed instance of the Blueprint in the level.",
          "why": "Instance-editable variables let designers vary placed Actors without opening the Blueprint asset.",
          "see": "The chosen variable appears in the placed Actor Details panel.",
          "check": "Change the value on one placed instance and leave another instance unchanged.",
          "troubleshoot": [
            "If the variable does not appear, compile after enabling Instance Editable."
          ]
        },
        {
          "title": "Add a tooltip that explains the setting",
          "where": "Select the variable → Details → Tooltip",
          "do": "Write a short tooltip such as “Starting health for this actor instance”.",
          "why": "A tooltip turns a raw number into self-documenting content.",
          "see": "Hovering the variable shows helpful explanation text.",
          "check": "Another student could understand the setting without asking you."
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
      ],
      "starterValues": [
        "Health: Float = 100.0",
        "IsActive: Boolean = True",
        "Health test value: 60.0",
        "Tooltip: Starting health for this actor instance"
      ],
      "studentRecipe": [
        "Open a practice Actor Blueprint. My Blueprint → + Variable → name Health → type Float.",
        "Compile once, then set Health Default Value to 100.0.",
        "Create IsActive → Boolean → set Default Value True → Compile.",
        "Event BeginPlay → Get Health → Print String. Use Conv_FloatToString if Unreal inserts the conversion automatically.",
        "After the first Print String add Set Health = 60.0, then Get Health → Print String again.",
        "Compile and Play. The first value must be 100 and the second 60.",
        "Select Health → tick Instance Editable → set Tooltip to “Starting health for this actor instance” → Compile.",
        "Place two instances and give one Health 100 and the other 40. Prove the instance values can differ without duplicating the Blueprint."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/d891edb3-17af-428d-b3ce-53ed05ffc12d/myblueprintpane.png",
          "caption": "Official UE5.8 My Blueprint panel. Create and name variables here.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e984b7d9-6b40-4d9c-bf0c-f4ac40c0fc4b/myblueprint_variable.png",
          "caption": "Official UE5.8 My Blueprint variable control. Create the variable, then use the Hub name, type and default value.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b434ff6d-758e-4d90-8948-858f44451ad4/getvariable.png",
          "caption": "Official UE5.8 Get variable node. A Get reads the stored value without changing it.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7aae90b4-6b4c-41a5-a6de-c04da58f511e/setvariable.png",
          "caption": "Official UE5.8 Set variable node. A Set changes the stored value and participates in execution flow.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/1a1c94bb-ee27-48da-a1fa-0e58d6e2aaaf/blueprint_details_variable_callout.png",
          "caption": "Official UE5.8 variable Details showing Instance Editable and the editor-facing variable properties.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null
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
          "title": "Create a simple health test variable",
          "where": "Any practice Blueprint → Variables",
          "do": "Create a Float called Health with a default value such as 100.",
          "why": "A Branch needs a condition, and health provides an easy one.",
          "see": "Health exists and can be read in the graph.",
          "check": "You can drag Health into the graph as a Get node."
        },
        {
          "title": "Compare the value against a threshold",
          "where": "Event Graph → right-click → search “<=” or “>” for Float comparison",
          "do": "Use a comparison node such as Health <= 0 to produce a Boolean result.",
          "why": "A Branch does not compare numbers itself; it receives a true/false answer from another node.",
          "see": "The comparison node output pin is red and labelled Boolean.",
          "check": "You can explain what true means and what false means."
        },
        {
          "title": "Add a Branch and wire the condition",
          "where": "Event Graph → right-click → Branch",
          "do": "Connect the comparison result to the Branch Condition pin.",
          "why": "The Branch chooses one of two execution paths based on that single Boolean.",
          "see": "The Branch node now has a condition connected and true/false outputs available.",
          "check": "No compile errors appear for the Branch."
        },
        {
          "title": "Make the True and False paths obvious",
          "where": "Branch True pin and False pin",
          "do": "Connect Print String nodes to both outputs, e.g. “Dead” for True and “Still alive” for False.",
          "why": "Printing both outcomes proves exactly which path ran.",
          "see": "Only one message appears each time you test.",
          "check": "Changing Health switches which message appears."
        },
        {
          "title": "Test both outcomes deliberately",
          "where": "Change the Health default value, then Play",
          "do": "Run the Blueprint once with a value that should make the condition true and once with a value that should make it false.",
          "why": "Good testing proves both routes, not just the one you happened to build first.",
          "see": "You have observed both the True and False result in Play.",
          "check": "You can predict the result before testing.",
          "troubleshoot": [
            "If the wrong route fires, re-read the comparison node. Health <= 0 and Health > 0 mean opposite things."
          ]
        },
        {
          "title": "Replace vague logic with a named question",
          "where": "Branch condition area",
          "do": "Rename variables or add a comment so the question is clear, e.g. “HasKey?” or “IsHealthZero?”.",
          "why": "Readable conditions are much easier to debug than mystery comparisons.",
          "see": "A different student can explain the decision without you narrating it.",
          "check": "Your condition reads like a question with a yes/no answer."
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
      ],
      "starterValues": [
        "Health: Float = 100.0",
        "Comparison: Health <= 0.0",
        "True message: Dead",
        "False message: Still alive",
        "Test values: 100.0 then 0.0"
      ],
      "studentRecipe": [
        "Create Float variable Health and set Default Value 100.0.",
        "Event BeginPlay → Get Health → add Float <= Float. Type 0.0 into the second input.",
        "Add Branch. Connect the <= result Boolean to Branch Condition.",
        "True → Print String “Dead”. False → Print String “Still alive”. Compile.",
        "Play with Health = 100. Confirm only “Still alive” prints.",
        "Stop, set Health = 0, Compile and Play. Confirm only “Dead” prints.",
        "Change Health to -10 and prove the True path still runs.",
        "Add a comment around the comparison + Branch: “Is Health zero or below?” so the graph reads like a question."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e984b7d9-6b40-4d9c-bf0c-f4ac40c0fc4b/myblueprint_variable.png",
          "caption": "Official UE5.8 My Blueprint variable control. Create the variable, then use the Hub name, type and default value.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f71f4d3e-8707-4d18-b398-fca822b66bdd/branch_example.png",
          "caption": "Official UE5.8 Branch example. The Boolean feeds Condition; only True or False continues.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/flow-control-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        null,
        null,
        null,
        null
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
          "title": "Create a repeated job in your graph",
          "where": "Any practice Blueprint → Event Graph",
          "do": "Build a tiny piece of logic you could imagine using more than once, such as printing a status message and setting a variable.",
          "why": "You need some repetition before the value of a Function makes sense.",
          "see": "A short sequence of nodes exists in the graph.",
          "check": "You can point at the nodes you would not want to copy and paste repeatedly."
        },
        {
          "title": "Create a Function",
          "where": "My Blueprint panel → Functions → +",
          "do": "Create a Function called UpdateStatus or similar.",
          "why": "A Function gives the repeated job a name and one place to maintain it.",
          "see": "The Function appears in the My Blueprint panel and opens in its own graph.",
          "check": "The Function name is specific about what it does."
        },
        {
          "title": "Move the repeated logic into the Function",
          "where": "Select nodes → Ctrl+X / Ctrl+C → Function graph",
          "do": "Put the repeated nodes inside the Function graph and wire them correctly there.",
          "why": "Now the logic exists once instead of being duplicated everywhere.",
          "see": "The original graph becomes shorter while the Function contains the detail.",
          "check": "Compiling succeeds and the Function graph runs without errors.",
          "troubleshoot": [
            "If variables are missing inside the Function, drag them in again from My Blueprint."
          ]
        },
        {
          "title": "Call the Function from the Event Graph",
          "where": "Event Graph → right-click → search for your Function name",
          "do": "Call the Function from Event BeginPlay or another simple event.",
          "why": "The main graph now shows intention rather than every low-level step.",
          "see": "One compact Function call node appears in the Event Graph.",
          "check": "Running the graph still produces the same result as before."
        },
        {
          "title": "Add an input or output if needed",
          "where": "Function graph → Details / Inputs / Outputs",
          "do": "Add one simple input such as MessageText if the Function needs a value supplied from outside.",
          "why": "Functions become more flexible when they can accept data or return a result.",
          "see": "The Function call node now has a parameter pin.",
          "check": "Changing the input changes the result in a predictable way."
        },
        {
          "title": "Decide whether this should stay a Function",
          "where": "Review the Function you made",
          "do": "Ask whether the job is a named reusable action rather than a giant grab-bag of unrelated steps.",
          "why": "Functions should improve clarity, not just hide a mess inside another graph.",
          "see": "The Function name still matches the single responsibility of the logic.",
          "check": "You can explain in one sentence what the Function is for."
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
      ],
      "starterValues": [
        "Function: ShowStatus",
        "Input: Message (String)",
        "Test message: Ready",
        "Second test message: Door unlocked"
      ],
      "studentRecipe": [
        "In a practice Blueprint, My Blueprint → Functions → +. Name the function ShowStatus.",
        "Open ShowStatus. In Details → Inputs add Message, type String.",
        "Inside the function add Print String and connect Message to In String.",
        "Compile. Return to Event Graph → Event BeginPlay → call ShowStatus.",
        "On the ShowStatus call set Message to Ready. Compile and Play; prove Ready appears.",
        "Add a Custom Event named TestSecondCall → call ShowStatus with Message Door unlocked.",
        "Call TestSecondCall after the first ShowStatus call and prove both messages use the same function.",
        "Open ShowStatus and confirm it performs one clearly named job. Do not add unrelated gameplay logic to it."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/cd54af36-d3ee-4cc5-8283-f3ddd2d79f65/name_function_blueprint.png",
          "caption": "Official UE5.8 My Blueprint workflow for creating and naming a Function.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/functions-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/285c04b9-ff68-41c8-b4b3-d38c7ff3aeb3/function_details.png",
          "caption": "Official UE5.8 Function Details, where inputs and outputs are defined.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/functions-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        null,
        null,
        null,
        null,
        null
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
        "type": "ue5-reference",
        "src": "https://dev.epicgames.com/community/api/documentation/image/ddca6cd5-4c8a-4299-b615-7c55831f5cd3?height=335&resizing_type=fill&width=1920",
        "caption": "Epic’s Game Mode / Game State reference. These classes are part of the Gameplay Framework, but they have different responsibilities and lifetimes.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/game-mode-and-game-state-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "title": "Open the Third Person template classes",
          "where": "Content Drawer → ThirdPerson → Blueprints (or your project’s equivalent)",
          "do": "Locate the Character Blueprint and identify at least PlayerController, GameMode and GameInstance conceptually.",
          "why": "Framework lessons are about putting logic in the right class, not all logic in the Character.",
          "see": "You know which asset is the player Character and which classes control game rules.",
          "check": "You can name one responsibility for Character, GameMode and GameInstance."
        },
        {
          "title": "Add player-specific logic to the Character",
          "where": "Open the player Character Blueprint",
          "do": "Create or locate a player-only variable such as Health or SprintSpeed in the Character Blueprint.",
          "why": "Player movement and moment-to-moment character state belongs on the Character.",
          "see": "The Character Blueprint clearly owns the player-specific variable.",
          "check": "You can explain why this does not belong in GameMode."
        },
        {
          "title": "Identify a whole-game rule for GameMode",
          "where": "Project Settings / World Settings → GameMode, then open the GameMode Blueprint if one exists",
          "do": "Choose a rule that affects the whole match, such as win condition, number of rounds or default pawn class.",
          "why": "GameMode exists for rules of the current level or game session.",
          "see": "You can point to at least one setting or variable that belongs at game-rule level.",
          "check": "Your example affects the whole session rather than a single player."
        },
        {
          "title": "Identify persistent state for GameInstance",
          "where": "Content Drawer → create or open a GameInstance Blueprint",
          "do": "Name a value that should survive level loads, such as selected difficulty or total coins.",
          "why": "GameInstance persists while the game is running, even when levels change.",
          "see": "You can state one example of data that belongs in GameInstance.",
          "check": "Your example genuinely needs to survive a map change."
        },
        {
          "title": "Sort three example features by owner",
          "where": "Use the examples in the lesson or your own notes",
          "do": "Take three features and decide which class should own each one.",
          "doList": [
            "Player jump count → Character.",
            "Current score limit → GameMode.",
            "Chosen graphics settings or chapter selection → GameInstance."
          ],
          "why": "Ownership becomes clearer when you compare multiple examples side by side.",
          "see": "You have different examples mapped to different framework classes.",
          "check": "You can justify each choice with one sentence."
        },
        {
          "title": "Apply the rule to your own project idea",
          "where": "Think about Signal Lost or your own assignment project",
          "do": "Pick one mechanic from your project and say where its logic should live before you build it.",
          "why": "The framework only matters if it changes how you structure real work.",
          "see": "You have a chosen class owner for your mechanic.",
          "check": "Your choice would still make sense to another developer reading the project."
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
      ],
      "starterValues": [
        "Character variable: Health Float = 100",
        "Character variable: SprintSpeed Float = 800",
        "GameMode variable: TargetScore Integer = 500",
        "GameInstance variable: SelectedDifficulty Name = Normal"
      ],
      "studentRecipe": [
        "Open the player Character Blueprint. Add Health Float = 100 and SprintSpeed Float = 800. These belong to the player.",
        "Create/open your GameMode Blueprint. Add TargetScore Integer = 500. This is a whole-match rule.",
        "Create Blueprint Class → All Classes → GameInstance. Name it GI_Learning.",
        "Open GI_Learning and add SelectedDifficulty, type Name, default Normal.",
        "Project Settings → Maps & Modes → Game Instance Class → choose GI_Learning.",
        "Write these three ownership rules in your notes: player state → Character; match rules → GameMode; cross-level session state → GameInstance.",
        "Pick one mechanic from your own project and write its owner before building it.",
        "If you cannot justify the owner in one sentence, do not add the logic yet."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e984b7d9-6b40-4d9c-bf0c-f4ac40c0fc4b/myblueprint_variable.png",
          "caption": "Official UE5.8 My Blueprint variable control. Create the variable, then use the Hub name, type and default value.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e984b7d9-6b40-4d9c-bf0c-f4ac40c0fc4b/myblueprint_variable.png",
          "caption": "Official UE5.8 My Blueprint variable control. Create the variable, then use the Hub name, type and default value.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/846ba685-3440-4abb-b515-7fc74402a95a/contentbrowserdropdown.png",
            "caption": "Official UE5.8 Content Browser route to Blueprint Class. Use the asset name from the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b4cc035a-4fad-4b19-90d2-39d538604814/new_asset_parent_class.png",
            "caption": "Official UE5.8 Blueprint parent-class chooser. Search/select the class named in the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e984b7d9-6b40-4d9c-bf0c-f4ac40c0fc4b/myblueprint_variable.png",
          "caption": "Official UE5.8 My Blueprint variable control. Create the variable, then use the Hub name, type and default value.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        null,
        null,
        null
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
        "type": "ue5-reference",
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/fe5fe968-0fb7-4e45-83fc-b76afca4a15b/3_2.png",
        "caption": "Adding a Cast node from an Actor reference. A cast does not magically find an object; it checks whether the reference you already have is the requested class.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "title": "Create two simple Blueprints to communicate",
          "where": "Learning folder → Blueprint Class → Actor",
          "do": "Create two Blueprints such as BP_Switch and BP_Lamp, then place one of each in the level.",
          "why": "A reference lesson needs at least two separate objects.",
          "see": "Both Actors appear in the Outliner.",
          "check": "You can select each Actor independently."
        },
        {
          "title": "Make a reference variable of the other type",
          "where": "Open BP_Switch → My Blueprint → + Variable",
          "do": "Create a variable called TargetLamp with the type set to BP_Lamp Object Reference.",
          "why": "A reference variable is how one Blueprint remembers a specific other object.",
          "see": "The variable type includes BP_Lamp Object Reference.",
          "check": "The graph can now Get TargetLamp."
        },
        {
          "title": "Assign the reference in the level",
          "where": "Compile BP_Switch → select the placed switch → Details",
          "do": "Mark TargetLamp Instance Editable if needed, then choose the placed lamp Actor in the switch’s Details panel.",
          "why": "A reference only works if it points at a real object instance.",
          "see": "The TargetLamp field now names your placed lamp.",
          "check": "The variable is no longer None on the placed switch.",
          "troubleshoot": [
            "If the dropdown is empty, make sure a BP_Lamp instance is placed in the level."
          ]
        },
        {
          "title": "Use the reference to call something on the lamp",
          "where": "BP_Switch → Event Graph",
          "do": "From TargetLamp, call a simple action or set a property, for example toggle lamp visibility or print the lamp name.",
          "why": "The value of a reference is that it lets you act on the target object directly.",
          "see": "Interacting with the switch clearly affects the lamp.",
          "check": "If TargetLamp is set to None, the action should fail or be protected by a validity check."
        },
        {
          "title": "Recognise when casting is needed",
          "where": "Think about “I have an Actor reference, but I need BP_Lamp-specific behaviour”",
          "do": "Describe the casting problem in words before dropping the Cast node into the graph.",
          "why": "Casting is about proving the real type of an object when you only know it loosely.",
          "see": "You can explain that casting is for type-specific access, not for communication in every case.",
          "check": "You know that if you already have a BP_Lamp reference, extra casting is usually unnecessary."
        },
        {
          "title": "Protect the graph from missing references",
          "where": "Event Graph → Is Valid or a simple Branch",
          "do": "Check whether the reference exists before trying to use it.",
          "why": "Many Blueprint errors are just “Accessed None” because a reference was never assigned.",
          "see": "Your graph handles the None case safely.",
          "check": "You can deliberately clear the reference and explain what will happen."
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
      ],
      "starterValues": [
        "Blueprints: BP_Switch, BP_Lamp",
        "Reference variable: TargetLamp (BP_Lamp Object Reference)",
        "Lamp function: SetLampOn(NewOn Boolean)",
        "Test value: NewOn = True"
      ],
      "studentRecipe": [
        "Create BP_Lamp (Actor). Add Point Light and set Intensity 2500. Create Function SetLampOn with Boolean input NewOn.",
        "Inside SetLampOn drag the Point Light reference → Set Visibility. Connect NewOn to New Visibility. Compile.",
        "Create BP_Switch (Actor). Add variable TargetLamp → type BP_Lamp Object Reference → tick Instance Editable → Compile.",
        "Place one BP_Lamp and one BP_Switch in the level. Select BP_Switch → Details → TargetLamp → eyedropper/select the placed BP_Lamp.",
        "In BP_Switch Event BeginPlay → Get TargetLamp → call SetLampOn and set NewOn False. Compile and Play; the lamp should switch off.",
        "Change NewOn to True and prove the same reference can control the lamp.",
        "Create a temporary Actor Object Reference variable and note that BP_Lamp-specific functions are unavailable until you Cast To BP_Lamp.",
        "Remove the temporary test. Keep the typed TargetLamp reference because it is clearer when you already know the object type."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/846ba685-3440-4abb-b515-7fc74402a95a/contentbrowserdropdown.png",
            "caption": "Official UE5.8 Content Browser route to Blueprint Class. Use the asset name from the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b4cc035a-4fad-4b19-90d2-39d538604814/new_asset_parent_class.png",
            "caption": "Official UE5.8 Blueprint parent-class chooser. Search/select the class named in the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/67a54191-1b18-4e82-abb2-4f8ff258ee55/add_new_component_list.png",
            "caption": "Official UE5.8 Add Component menu. Search for the component named in the Hub instruction.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        null,
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/846ba685-3440-4abb-b515-7fc74402a95a/contentbrowserdropdown.png",
            "caption": "Official UE5.8 Content Browser route to Blueprint Class. Use the asset name from the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b4cc035a-4fad-4b19-90d2-39d538604814/new_asset_parent_class.png",
            "caption": "Official UE5.8 Blueprint parent-class chooser. Search/select the class named in the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e984b7d9-6b40-4d9c-bf0c-f4ac40c0fc4b/myblueprint_variable.png",
            "caption": "Official UE5.8 My Blueprint variable control. Create the variable, then use the Hub name, type and default value.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/34737c7e-d025-406b-b935-614679d3364b/2_6.png",
          "caption": "Official UE5.8 exposed Blueprint reference in the Level Editor Details panel. Assign the placed instance requested by the Hub step.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/fe5fe968-0fb7-4e45-83fc-b76afca4a15b/3_2.png",
          "caption": "Official UE5.8 Cast node example. Casting checks the type of a reference you already have; it does not find the object for you.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null
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
        "type": "ue5-reference",
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ca176849-4f39-4e50-bd83-e01672bddf2d/interfaceeditor.png",
        "caption": "The Blueprint Interface editor. An Interface defines function signatures but does not contain the implementation itself.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-interface-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "title": "Recognise the communication problem first",
          "where": "Look at your project need",
          "do": "State whether one Blueprint needs to send the same message to many types of object, or whether one object needs to announce that something happened.",
          "why": "That choice tells you whether Interface or Dispatcher is the better fit.",
          "see": "You can describe one Interface-style problem and one Dispatcher-style problem.",
          "check": "Your examples are clearly different in communication direction."
        },
        {
          "title": "Create a simple Blueprint Interface",
          "where": "Content Drawer → right-click → Blueprint Interface",
          "do": "Create a Blueprint Interface called BPI_Interact and add one function called Interact.",
          "why": "Interfaces give many object types the same message contract.",
          "see": "BPI_Interact exists with one function signature.",
          "check": "The Interface function has no graph logic inside it, only the signature."
        },
        {
          "title": "Implement the Interface on a Blueprint",
          "where": "Open a target Blueprint → Class Settings → Implemented Interfaces",
          "do": "Add BPI_Interact to a Blueprint such as a door or button, then implement the Interact event/function.",
          "why": "Implementation is where each object decides what it should do when it receives the same message.",
          "see": "The Blueprint now has the Interface entry and an Interact implementation.",
          "check": "The event/function can contain object-specific response logic."
        },
        {
          "title": "Create a Dispatcher on a broadcaster",
          "where": "Open a Blueprint that should announce something → My Blueprint → Event Dispatchers → +",
          "do": "Create an Event Dispatcher such as OnActivated or OnDoorOpened.",
          "why": "Dispatchers let one Blueprint broadcast that something happened to any listeners.",
          "see": "The Event Dispatcher appears in the My Blueprint panel.",
          "check": "You can call the Dispatcher from the graph."
        },
        {
          "title": "Bind a listener and test the broadcast",
          "where": "In another Blueprint, use Bind Event / Assign, or set up the binding when the Blueprint begins play",
          "do": "Bind a listener to the Dispatcher and make the listener print a message or react visibly.",
          "why": "A Dispatcher only matters once something else is listening for the announcement.",
          "see": "Triggering the broadcaster causes the listener reaction.",
          "check": "Removing the bind stops the listener response."
        },
        {
          "title": "Choose the cleaner tool for your own mechanic",
          "where": "Review your project idea",
          "do": "Decide whether your mechanic should use Interface, Dispatcher or a direct reference.",
          "why": "Good Blueprint architecture comes from choosing the simplest communication method that fits.",
          "see": "You have a justified choice for one real mechanic in your project.",
          "check": "You can explain why the other two methods are less suitable in that case."
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
      ],
      "starterValues": [
        "Interface: BPI_Interact",
        "Interface function: Interact",
        "Door Blueprint: BP_InterfaceDoor",
        "Button Blueprint: BP_InterfaceButton",
        "Dispatcher: OnPressed"
      ],
      "studentRecipe": [
        "Content Drawer → right-click → Blueprints → Blueprint Interface. Name it BPI_Interact.",
        "Open BPI_Interact. Rename the default function Interact. Do not add implementation nodes here. Save.",
        "Open/create BP_InterfaceDoor → Class Settings → Implemented Interfaces → Add BPI_Interact → Compile.",
        "In BP_InterfaceDoor add the Event Interact implementation → Print String “Door interacted”. Compile.",
        "Create BP_InterfaceButton with an Instance Editable Actor reference TargetActor. On your test event call Interact (Message) on TargetActor.",
        "Place both, assign TargetActor to the door, trigger the button and prove the interface message reaches the door.",
        "In BP_InterfaceButton add Event Dispatcher OnPressed. Call it immediately after the interaction message.",
        "Bind one listener only if you need a broadcast response. Keep the interface for direct capability and the dispatcher for one-to-many notification."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f58b3f2b-2e0a-4124-b784-acdac8e7f6ce/createinterface.png",
          "caption": "Official UE5.8 Content Browser route for creating a Blueprint Interface. Name it exactly as the Hub step specifies.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-interface-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ca176849-4f39-4e50-bd83-e01672bddf2d/interfaceeditor.png",
          "caption": "Official UE5.8 Blueprint Interface editor. Add or rename the function signature here; implementation happens in the receiving Blueprint.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-interface-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/846ba685-3440-4abb-b515-7fc74402a95a/contentbrowserdropdown.png",
            "caption": "Official UE5.8 Content Browser route to Blueprint Class. Use the asset name from the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b4cc035a-4fad-4b19-90d2-39d538604814/new_asset_parent_class.png",
            "caption": "Official UE5.8 Blueprint parent-class chooser. Search/select the class named in the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/72320e42-d888-41eb-bc3f-3cf82d74743b/implemented-interfaces.png",
            "caption": "Official UE5.8 Class Settings → Implemented Interfaces panel. Add BPI_Interact here, then Compile.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/implementing-blueprint-interfaces-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f9b06694-565b-4d66-b54e-f54bc94b8083/open-graph.png",
            "caption": "Official UE5.8 implemented Interface function in My Blueprint. Open the Interface function graph here.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/implementing-blueprint-interfaces-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/4f015ed8-7a52-46c9-83bc-da0fe7e009a3/implementable-function.png",
            "caption": "Official UE5.8 Interface implementation graph. In the Hub build, connect the Interact implementation to Print String ‘Door interacted’.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/implementing-blueprint-interfaces-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7e12bfb2-7b3e-43bc-ad16-28b87c6b522d/interface6.png",
          "caption": "Official UE5.8 Interface Message call. The receiver responds only if it implements the Interface.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/d6876519-ca7d-4307-87ea-f3b718ad3b95/myblueprint_eventdispatcher.png",
          "caption": "Official UE5.8 Event Dispatcher entry in My Blueprint. Create/rename the dispatcher here, then follow the Hub logic for when to call it.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/event-dispatchers-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7ff64b05-8f8f-46d2-a574-a0646b951fff/event7.png",
          "caption": "Official UE5.8 Event Dispatcher binding example. Bind a listener before expecting it to react to a broadcast.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
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
        "type": "ue5-reference",
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/1c7f22c6-c2ca-4d30-9a56-eefeb61f1219/col_setup.png",
        "caption": "Epic’s collision setup example showing two objects with different Object Types. Collision behaviour comes from both objects’ responses.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/collision-in-unreal-engine---overview",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "title": "Add a collision component",
          "where": "Open a practice Blueprint → Components → Add → Box Collision (or Sphere Collision)",
          "do": "Add a collision component around the object you want to detect.",
          "why": "Collision components create the area that can overlap or block other Actors.",
          "see": "A wireframe collision shape appears in the Blueprint Viewport.",
          "check": "The shape clearly covers the interaction area."
        },
        {
          "title": "Choose sensible collision settings",
          "where": "Select the collision component → Details → Collision",
          "do": "Set collision presets or responses so the player can trigger overlaps as intended.",
          "why": "Collision only works when the objects are configured to respond to each other.",
          "see": "Generate Overlap Events is enabled if you need overlap behaviour.",
          "check": "You can explain whether you want overlap, block or ignore for the player."
        },
        {
          "title": "Add an overlap event",
          "where": "Event Graph → right-click with the collision selected, or use Add Event for the collision component",
          "do": "Add OnComponentBeginOverlap and connect it to Print String or a simple response.",
          "why": "The overlap event is the proof that the collision is detecting another object.",
          "see": "Running into the collision area triggers the event.",
          "check": "The message fires when the player enters the area."
        },
        {
          "title": "Filter what can trigger it",
          "where": "Overlap event pins and collision settings",
          "do": "Check the Other Actor or collision channel so not everything in the world triggers the response.",
          "why": "Reliable collision usually needs filtering, otherwise every object can cause false positives.",
          "see": "Only the intended Actor type causes the event to continue.",
          "check": "A wrong object no longer triggers the main response."
        },
        {
          "title": "Test the shape and size",
          "where": "Blueprint Viewport and in-level test",
          "do": "Adjust the collision size until it feels correct for the action.",
          "why": "Many collision bugs are simply badly sized trigger volumes.",
          "see": "The event fires where you expect, not metres too early or too late.",
          "check": "Walking around the edges of the volume gives predictable results."
        },
        {
          "title": "Separate detection from response",
          "where": "Look at the event graph after it works",
          "do": "Notice that the collision event only detects something; your Blueprint still decides what to do next.",
          "why": "This mindset helps you reuse collision for pickups, doors, checkpoints and hazards.",
          "see": "You can replace Print String with a clearer gameplay response.",
          "check": "You can name another mechanic that starts from the same overlap pattern."
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
      ],
      "starterValues": [
        "Blueprint: BP_TriggerPractice",
        "Box Extent: X 100, Y 100, Z 100",
        "Collision Preset: Trigger",
        "Response test: Print “Player entered trigger”"
      ],
      "studentRecipe": [
        "Create BP_TriggerPractice (Actor). Add Box Collision.",
        "Select Box Collision → set Box Extent X 100, Y 100, Z 100.",
        "Details → Collision Presets → Trigger. Make sure Generate Overlap Events is enabled.",
        "Add OnComponentBeginOverlap(Box) → Print String “Player entered trigger”. Duration 2.0.",
        "Compile, place the Blueprint so the box crosses the player path, then Play.",
        "Walk into the volume once. The message should appear when entering, not continuously every frame.",
        "Use Other Actor → Equal (Object) with Get Player Character if you want to prove only the player should trigger it.",
        "After the first successful test, change Box Extent to X 150, Y 75, Z 100 and test again. Confirm the larger trigger still fires once on entry."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/846ba685-3440-4abb-b515-7fc74402a95a/contentbrowserdropdown.png",
            "caption": "Official UE5.8 Content Browser route to Blueprint Class. Use the asset name from the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b4cc035a-4fad-4b19-90d2-39d538604814/new_asset_parent_class.png",
            "caption": "Official UE5.8 Blueprint parent-class chooser. Search/select the class named in the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/67a54191-1b18-4e82-abb2-4f8ff258ee55/add_new_component_list.png",
            "caption": "Official UE5.8 Add Component menu. Search for the component named in the Hub instruction.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/c3005610-2245-4da2-b222-571a1d260012/bpqs_2_step9.png",
          "caption": "Official UE5.8 Box Collision sizing example. Use Shape → Box Extent and enter the Hub values X 100, Y 100, Z 100; Epic’s example values differ.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/quick-start-guide-for-blueprints-visual-scripting-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/10c10808-3c0e-4637-bfee-e931a8b5e308/col_collidenoevent_sphere.png",
          "caption": "Official UE5.8 collision response settings showing Block, Overlap and Ignore. Use this panel to check the trigger response.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/collision-in-unreal-engine---overview",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/3c8fbaad-8f3c-4849-829b-0ece960f436f/beginoverlap.png",
          "caption": "Official UE5.8 Actor Begin Overlap event. Other Actor identifies the object that entered the overlap.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/events-in-unreal-engine?lang=en-US",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/cf38f415-5e01-4b57-ae5b-57bc13babcfc/bpqs_5_step5.png",
          "caption": "Official UE5.8 Other Actor comparison using Equal (Object). For the Hub exercise, compare Other Actor with Get Player Character as instructed.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/quick-start-guide-for-blueprints-visual-scripting-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null
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
        "type": "ue5-reference",
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/243f760d-f655-4247-8c43-a8b6ea39de69/guide-how-to-2b-2.png",
        "caption": "Adding the real Line Trace By Channel node to a Blueprint graph.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "title": "Choose a clear starting point",
          "where": "Player Character Blueprint → Event Graph",
          "do": "Decide where the trace begins, usually the player camera or the muzzle of a weapon.",
          "why": "A line trace needs a start and end position.",
          "see": "You can point to the component that will provide the start location.",
          "check": "Your chosen start makes sense for the mechanic."
        },
        {
          "title": "Create the Line Trace by Channel node",
          "where": "Right-click in the graph → search “Line Trace by Channel”",
          "do": "Add the node and feed it a Start position plus an End position that extends forward from the camera.",
          "why": "This is the core node that asks “what am I pointing at along this line?”",
          "see": "The trace node has Start, End and Hit Result outputs.",
          "check": "The Blueprint compiles with the node connected."
        },
        {
          "title": "Enable debugging so you can see the line",
          "where": "Line Trace node → Draw Debug Type",
          "do": "Set Draw Debug Type to For Duration or One Frame while learning.",
          "why": "Visible debug lines make it much easier to understand where the trace is actually going.",
          "see": "Pressing Play draws the trace line in the world.",
          "check": "The line starts and ends where you expected."
        },
        {
          "title": "Break the hit result",
          "where": "From Out Hit → Break Hit Result",
          "do": "Break the Hit Result and inspect the Hit Actor or Impact Point.",
          "why": "The hit result contains the useful information you need after the trace succeeds.",
          "see": "You now have access to the object hit by the trace.",
          "check": "Printing the Hit Actor name shows what the player was aiming at."
        },
        {
          "title": "Use the success Boolean",
          "where": "Line Trace node → Return Value",
          "do": "Branch from the trace Return Value so you only continue when something was actually hit.",
          "why": "A trace does not always hit an object, so you must handle both cases.",
          "see": "The graph now has one path for hit and another for no hit.",
          "check": "Looking into empty space no longer causes invalid hit logic."
        },
        {
          "title": "Apply the pattern to a real mechanic",
          "where": "Review the finished graph",
          "do": "Replace Print String with the mechanic you wanted such as interact, shoot or inspect.",
          "why": "The trace pattern is reusable once you understand the underlying detection logic.",
          "see": "Your trace now powers a real gameplay action.",
          "check": "You can explain start, end, hit and no-hit cases clearly."
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
      ],
      "starterValues": [
        "Input: E / IA_Interact",
        "Trace distance: 1500 cm",
        "Trace Channel: Visibility",
        "Draw Debug Type: For Duration",
        "Debug Draw Time: 2.0 s"
      ],
      "studentRecipe": [
        "Use/create IA_Interact mapped to E. Open the player Character Blueprint Event Graph.",
        "Add IA_Interact Started. From FollowCamera get World Location → this is Start.",
        "From FollowCamera get Forward Vector → multiply Vector * Float by 1500.",
        "Add Start + scaled Forward Vector → connect result to Line Trace By Channel End. Connect camera location to Start.",
        "Set Trace Channel Visibility and Draw Debug Type For Duration. Compile.",
        "From Out Hit → Break Hit Result → Hit Actor → Get Display Name → Print String.",
        "Branch from the Line Trace Return Value. Only use hit data from the True path.",
        "Play, aim at a visible Actor within 1500 cm and press E. Confirm the debug line reaches the target and the correct Actor name prints."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/bb3fb38c-3a7e-4d0b-b920-b31b88d11f5a/image_0.png",
          "caption": "Official UE5.8 Enhanced Input asset creation workflow. Create the Input Action named in the Hub step.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/enhanced-input-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f6187c7e-2858-4553-b5bc-9b746d5bef0e/image_3.png",
          "caption": "Official UE5.8 Enhanced Input Action event in Blueprint. Choose the trigger pin named in the Hub step.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/enhanced-input-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/4a1f9b50-e595-4b3f-afb6-b9ce831dc5fb/guide-how-to-2b-5.png",
          "caption": "Official UE5.8 trace maths: Get Forward Vector is multiplied by the trace distance. The Epic example uses 1500, matching this Hub step.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f64e0a22-515e-41bb-af3a-c93361c5631f/guide-how-to-2b-6.png",
          "caption": "Official UE5.8 trace End calculation from camera location, forward direction and distance.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/243f760d-f655-4247-8c43-a8b6ea39de69/guide-how-to-2b-2.png",
          "caption": "Official UE5.8 Line Trace By Channel node. Check the trace channel and debug options on the node.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/4989daba-35b5-4100-9227-7ea749c7f69e/guide-how-to-2b-9.png",
          "caption": "Official UE5.8 hit-result graph: Break Hit Result → Hit Actor → convert/display the Actor name → Print String.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f71f4d3e-8707-4d18-b398-fca822b66bdd/branch_example.png",
          "caption": "Official UE5.8 Branch example. Feed the Line Trace Return Value into Condition and only use hit data from the True path.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/flow-control-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/bd67ce85-1155-4bfd-9da7-6a7f4c9126d8/guide-how-to-2b-11.png",
          "caption": "Official UE5.8 trace running in Play with debug drawing visible.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
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
        "type": "ue5-reference",
        "src": "https://dev.epicgames.com/community/api/documentation/image/6e44536d-af86-4aae-a863-afec370143db?resizing_type=fit",
        "caption": "The current Timeline Editor. A Timeline turns keyframed data over time into Blueprint output values and events.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/editing-timelines-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "title": "Create the object you want to animate",
          "where": "Open a door or moving-platform style Blueprint",
          "do": "Make sure the Blueprint contains the mesh that should move, rotate or open.",
          "why": "A Timeline only animates values; you still need a target component that will use those values.",
          "see": "The Blueprint has a named mesh such as SM_Door.",
          "check": "You can select the moving component clearly."
        },
        {
          "title": "Add a Timeline node",
          "where": "Event Graph → right-click → Add Timeline",
          "do": "Create a Timeline called TL_OpenDoor and open it.",
          "why": "The Timeline stores a curve of values over time.",
          "see": "The Timeline editor opens with an empty track list.",
          "check": "The node appears in the Event Graph."
        },
        {
          "title": "Create a float track from 0 to 1",
          "where": "Timeline editor → Add Float Track",
          "do": "Add a Float Track and create keyframes that start at 0 and end at 1 over about 1 second.",
          "why": "A 0→1 value is the easiest driver for a Lerp or direct transform change.",
          "see": "The track graph rises from 0 at time 0 to 1 at the end.",
          "check": "Scrubbing the Timeline shows the value changing smoothly."
        },
        {
          "title": "Use the Timeline update to move the mesh",
          "where": "Event Graph → Timeline Update pin",
          "do": "Connect the Update output to a Lerp or directly set relative rotation/location on the moving component.",
          "why": "The Timeline itself does not move the mesh until you use its output value.",
          "see": "Playing the Timeline visibly opens the door or moves the platform.",
          "check": "The object moves smoothly instead of snapping instantly."
        },
        {
          "title": "Trigger Play and Reverse",
          "where": "Any event such as overlap or interact event",
          "do": "Use an event to call Play on the Timeline and optionally Reverse to close the door again.",
          "why": "Timelines need an event to tell them when to begin and whether to reverse.",
          "see": "Interacting once opens it; another event can close it again.",
          "check": "Play, Reverse and finished behaviour are predictable."
        },
        {
          "title": "Test for snapping and wrong pivot issues",
          "where": "Watch the object as it animates",
          "do": "If the motion looks wrong, check the mesh pivot, whether you used world or relative transform, and the start/end values.",
          "why": "Most Timeline bugs are really transform or pivot problems.",
          "see": "The object now moves from the intended start point to the intended end point smoothly.",
          "check": "You can reopen or reclose the object repeatedly without drift."
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
      ],
      "starterValues": [
        "Blueprint: BP_PracticeDoor",
        "Timeline: TL_OpenDoor",
        "Timeline length: 1.0 s",
        "Float track: Alpha",
        "Key 1: Time 0.0 / Value 0.0",
        "Key 2: Time 1.0 / Value 1.0",
        "Closed Yaw: 0°",
        "Open Yaw: 90°"
      ],
      "studentRecipe": [
        "Create BP_PracticeDoor with a Static Mesh component named SM_Door. Compile.",
        "Event Graph → Add Timeline → name it TL_OpenDoor → double-click it.",
        "Add Float Track named Alpha. Add key Time 0.0 Value 0.0 and key Time 1.0 Value 1.0. Set Timeline Length 1.0.",
        "Return to Event Graph. Add Lerp (Rotator). A = 0,0,0. B = 0,0,90. Connect Alpha to Lerp Alpha.",
        "Timeline Update → Set Relative Rotation on SM_Door. Connect Lerp result to New Rotation.",
        "Use a simple test event (BeginPlay or interaction) → Play From Start on TL_OpenDoor.",
        "Compile and Play. The door should rotate smoothly from 0° to 90° in one second.",
        "If it orbits instead of hinges, stop changing Timeline values: the mesh pivot/component hierarchy is the problem."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/846ba685-3440-4abb-b515-7fc74402a95a/contentbrowserdropdown.png",
            "caption": "Official UE5.8 Content Browser route to Blueprint Class. Use the asset name from the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b4cc035a-4fad-4b19-90d2-39d538604814/new_asset_parent_class.png",
            "caption": "Official UE5.8 Blueprint parent-class chooser. Search/select the class named in the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/67a54191-1b18-4e82-abb2-4f8ff258ee55/add_new_component_list.png",
            "caption": "Official UE5.8 Add Component menu. Search for the component named in the Hub instruction.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-window-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        {
          "src": "https://dev.epicgames.com/community/api/documentation/image/6e44536d-af86-4aae-a863-afec370143db?resizing_type=fit",
          "caption": "Official UE5.8 Timeline Editor. Open TL_OpenDoor here before adding tracks and keys.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/editing-timelines-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://dev.epicgames.com/community/api/documentation/image/02c05d7d-44db-4251-9485-16e852833735?resizing_type=fit",
          "caption": "Official UE5.8 Float Track with keyframes. Use this editor to create the 0 → 1 alpha over time.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/editing-timelines-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        null,
        null,
        null,
        null
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
        "type": "ue5-reference",
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/bf146350-4103-4b5a-a33d-23b00ca8bc63/01-01_createwidgetblueprint.png",
        "caption": "Creating a real Widget Blueprint from the Content Browser. UMG UI lives in Widget Blueprint assets.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/umg-ui-designer-quick-start-guide-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "title": "Create a Widget Blueprint",
          "where": "Content Drawer → right-click → User Interface → Widget Blueprint",
          "do": "Create a Widget Blueprint such as WBP_HUD and open it.",
          "why": "UI in Unreal lives inside Widgets rather than directly in the Character graph.",
          "see": "The Widget Designer opens.",
          "check": "The widget asset exists in your project."
        },
        {
          "title": "Place visible UI elements",
          "where": "Widget Designer → Palette",
          "do": "Drag in simple elements such as a Text block or Progress Bar and arrange them on the canvas.",
          "why": "You need visible widgets before you can bind or update data.",
          "see": "The Designer shows your UI layout.",
          "check": "The widget is readable at a sensible screen position."
        },
        {
          "title": "Create the widget at BeginPlay",
          "where": "Player Character or PlayerController → Event BeginPlay",
          "do": "Use Create Widget with your WBP_HUD class, then Add to Viewport.",
          "why": "A widget must be created and added to the screen before the player can see it.",
          "see": "Pressing Play shows the HUD on screen.",
          "check": "The widget appears once and is not duplicated repeatedly."
        },
        {
          "title": "Give the UI useful data",
          "where": "Character variables and the Widget reference",
          "do": "Decide what the UI should display, such as Health, Score or an objective.",
          "why": "UI should show gameplay state, not own the gameplay state.",
          "see": "You can name the source variable and the UI element that should display it.",
          "check": "You can explain why the Character owns Health while the Widget only shows it."
        },
        {
          "title": "Update the displayed value",
          "where": "Character / Widget communication graph",
          "do": "Set the Text or Progress Bar Percent using the relevant variable value.",
          "why": "The point of the widget is to reflect changing gameplay information clearly.",
          "see": "The UI value changes when the gameplay variable changes.",
          "check": "Testing the mechanic causes the UI to update correctly."
        },
        {
          "title": "Check readability and purpose",
          "where": "Watch the UI in Play mode",
          "do": "Ask whether the HUD is clear, readable and actually useful while playing.",
          "why": "Good UI communicates quickly and does not clutter the screen.",
          "see": "The displayed information is easy to notice and interpret.",
          "check": "Another player can tell what the value means without explanation."
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
      ],
      "starterValues": [
        "Widget: WBP_HUD",
        "Health: 100.0",
        "MaxHealth: 100.0",
        "Text position: X 40 / Y 40",
        "Health bar position: X 40 / Y 80",
        "Health bar size: 300 × 24",
        "Percent formula: Health / MaxHealth"
      ],
      "studentRecipe": [
        "Content Drawer → User Interface → Widget Blueprint → User Widget. Name it WBP_HUD.",
        "In Designer add Text Block at X 40, Y 40. Set text temporarily to Health: 100.",
        "Add Progress Bar at X 40, Y 80. Set width 300 and height 24.",
        "Create Function SetHealthDisplay with inputs CurrentHealth Float and MaxHealth Float.",
        "Inside SetHealthDisplay calculate CurrentHealth / MaxHealth and Set Percent on the Progress Bar.",
        "In the player Character create Health Float 100 and MaxHealth Float 100.",
        "BeginPlay → Create Widget WBP_HUD → promote Return Value to HUDRef → Add to Viewport → call SetHealthDisplay(100,100).",
        "Play. The widget must appear once and the bar must be full. Test 50,100 and prove the bar becomes half full."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/bf146350-4103-4b5a-a33d-23b00ca8bc63/01-01_createwidgetblueprint.png",
          "caption": "Official UE5.8 workflow for creating a Widget Blueprint asset.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/umg-ui-designer-quick-start-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ccc3bc02-5fd5-433d-b5a9-3fb4eae719e2/02-12_hudlayout.png",
          "caption": "Official UE5.8 UMG HUD layout showing common Text and Progress Bar widgets in the Designer.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/umg-ui-designer-quick-start-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/cd54af36-d3ee-4cc5-8283-f3ddd2d79f65/name_function_blueprint.png",
            "caption": "Official UE5.8 My Blueprint workflow for creating and naming a Function. Use the function name from the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/functions-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/285c04b9-ff68-41c8-b4b3-d38c7ff3aeb3/function_details.png",
            "caption": "Official UE5.8 Function Details. Add the inputs/outputs named in the Hub step and use the specified data types.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/functions-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e984b7d9-6b40-4d9c-bf0c-f4ac40c0fc4b/myblueprint_variable.png",
          "caption": "Official UE5.8 My Blueprint variable control. Create the variable, then use the Hub name, type and default value.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/aa8b31c0-d8ee-476f-8903-69ec242d8439/ue5_1-01-bpscript-create-widget.png",
          "caption": "Official UE5.8 Blueprint example: Create Widget followed by Add to Viewport.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-widgets-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null
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
          "title": "Create a SaveGame Blueprint",
          "where": "Content Drawer → right-click → Blueprint Class → All Classes → SaveGame",
          "do": "Create a SaveGame Blueprint such as BP_PlayerSave.",
          "why": "SaveGame objects exist specifically to hold data you want to write to disk.",
          "see": "BP_PlayerSave appears as a SaveGame class asset.",
          "check": "The asset opens with variable support."
        },
        {
          "title": "Add only the data you need to save",
          "where": "Open BP_PlayerSave → Variables",
          "do": "Create variables such as SavedCheckpointName or SavedScore.",
          "why": "Good saves are deliberate. Save the meaningful state, not random temporary values.",
          "see": "The SaveGame asset contains a small, intentional set of variables.",
          "check": "You can explain what each saved value is for."
        },
        {
          "title": "Create a SaveGame object at runtime",
          "where": "Your Character, GameMode or GameInstance graph → Create Save Game Object",
          "do": "Create a Save Game Object of class BP_PlayerSave and set its variables before saving.",
          "why": "At runtime you create an actual save object instance, fill it, then write it.",
          "see": "The graph contains Create Save Game Object and Set variable nodes.",
          "check": "The object reference is of your BP_PlayerSave type."
        },
        {
          "title": "Save to a named slot",
          "where": "Graph → Save Game to Slot",
          "do": "Use Save Game to Slot with a slot name such as PlayerSlot and user index 0.",
          "why": "Slots identify which saved file Unreal should write or read.",
          "see": "The save node returns success when the write works.",
          "check": "You know the exact slot name you used."
        },
        {
          "title": "Load the slot and cast back to your SaveGame class",
          "where": "Graph → Does Save Game Exist → Load Game From Slot → Cast",
          "do": "Load the saved slot on BeginPlay or when continuing the game, then cast the loaded object to BP_PlayerSave.",
          "why": "Loading returns a generic SaveGame object until you cast it to your specific class.",
          "see": "The cast succeeds and you can read your saved variables.",
          "check": "The loaded values match what you saved previously."
        },
        {
          "title": "Apply the loaded values back into gameplay",
          "where": "After the successful load",
          "do": "Use the loaded data to restore the player or world state, such as moving to a checkpoint or restoring the score.",
          "why": "A saved file is only useful once its values are applied back into the game.",
          "see": "Restarting and loading reproduces the saved state.",
          "check": "You can quit, relaunch and still recover the expected values."
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
      "docVisuals": [],
      "starterValues": [
        "SaveGame class: BP_PlayerSave",
        "SavedScore Integer = 0",
        "SavedCheckpointName Name = Start",
        "Slot Name: PlayerSlot",
        "User Index: 0"
      ],
      "studentRecipe": [
        "Create Blueprint Class → All Classes → SaveGame. Name it BP_PlayerSave.",
        "Add SavedScore Integer default 0 and SavedCheckpointName Name default Start. Compile.",
        "In the Blueprint that owns saving, add Create Save Game Object → class BP_PlayerSave.",
        "Cast/use the returned BP_PlayerSave reference and set SavedScore and SavedCheckpointName before saving.",
        "Add Save Game To Slot. Slot Name PlayerSlot; User Index 0.",
        "For loading: Does Save Game Exist(PlayerSlot,0) → Branch → True → Load Game From Slot(PlayerSlot,0).",
        "Cast the loaded object to BP_PlayerSave and Print SavedScore as a first proof.",
        "Save a non-zero test score such as 250, restart Play and prove the loaded value is still 250."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/846ba685-3440-4abb-b515-7fc74402a95a/contentbrowserdropdown.png",
            "caption": "Official UE5.8 Content Browser route to Blueprint Class. Use the asset name from the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b4cc035a-4fad-4b19-90d2-39d538604814/new_asset_parent_class.png",
            "caption": "Official UE5.8 Blueprint parent-class chooser. Search/select the class named in the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e984b7d9-6b40-4d9c-bf0c-f4ac40c0fc4b/myblueprint_variable.png",
          "caption": "Official UE5.8 My Blueprint variable control. Create the variable, then use the Hub name, type and default value.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        null,
        null,
        null,
        null,
        null
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
          "title": "Create a Struct for one row of content",
          "where": "Content Drawer → right-click → Blueprints → Structure",
          "do": "Create a Struct such as ST_ItemData with fields you genuinely need, e.g. Name, Description and Value.",
          "why": "A Struct groups related pieces of data into one clean row shape.",
          "see": "The Struct asset shows several named fields of sensible types.",
          "check": "You can explain what one row of this data would represent."
        },
        {
          "title": "Create a Data Table from that Struct",
          "where": "Content Drawer → right-click → Miscellaneous → Data Table",
          "do": "Choose your Struct when prompted so the Data Table knows what each row should contain.",
          "why": "A Data Table is only useful once it has a row structure to follow.",
          "see": "The new Data Table opens with columns matching the Struct fields.",
          "check": "The Data Table header names match the Struct variables."
        },
        {
          "title": "Add a few rows of test data",
          "where": "Open the Data Table → Add row",
          "do": "Create at least three rows with clear row names and different values.",
          "why": "The power of data-driven design comes from changing content without editing logic graphs.",
          "see": "The table contains several filled rows.",
          "check": "Each row name is readable and unique."
        },
        {
          "title": "Read a row from Blueprint",
          "where": "A Blueprint graph → Get Data Table Row",
          "do": "Use Get Data Table Row and feed in the Data Table plus a known row name.",
          "why": "Blueprint logic can now fetch content from the table instead of hard-coding it.",
          "see": "The output pin contains the Struct data for that row.",
          "check": "Printing one field proves the correct row was found."
        },
        {
          "title": "Break the Struct and use the fields",
          "where": "Output of Get Data Table Row → Break your Struct",
          "do": "Break the Struct so you can use individual fields such as Name or Damage.",
          "why": "The row returns one grouped data bundle that you can separate into useful values.",
          "see": "You can access each field from the row output.",
          "check": "Changing the table value changes the behaviour or printed output without rewriting the graph."
        },
        {
          "title": "Notice what moved out of the graph",
          "where": "Compare your graph before and after using data",
          "do": "Identify which values no longer need to be typed into the Blueprint itself.",
          "why": "The real win is removing hard-coded content from gameplay logic.",
          "see": "The graph is smaller and the content is centralised in the table.",
          "check": "Another designer could change the values by editing the table instead of your nodes."
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
      ],
      "starterValues": [
        "Struct: ST_ItemData",
        "Fields: DisplayName Text / Damage Float / Value Integer",
        "Data Table: DT_ItemData",
        "Rows: TrainingSword 25/100; HeavySword 40/250; Medkit 0/75"
      ],
      "studentRecipe": [
        "Content Drawer → Blueprints → Structure. Name it ST_ItemData.",
        "Add fields DisplayName (Text), Damage (Float), Value (Integer). Save the Struct.",
        "Content Drawer → Miscellaneous → Data Table → choose ST_ItemData → name DT_ItemData.",
        "Add row TrainingSword: DisplayName “Training Sword”, Damage 25, Value 100.",
        "Add row HeavySword: DisplayName “Heavy Sword”, Damage 40, Value 250. Add Medkit: Damage 0, Value 75.",
        "In a practice Blueprint add Get Data Table Row → Data Table DT_ItemData → Row Name TrainingSword.",
        "Break ST_ItemData from Out Row → Print DisplayName and Damage.",
        "Play and prove changing the TrainingSword Damage in the Data Table changes the value read by the Blueprint without editing the graph."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        null,
        null,
        [
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/8197a9d4-1212-445f-aedb-19379fb043d9/datarowtype.png",
            "caption": "Official UE5.8 Data Table Row Type picker. Choose the Struct that defines the table columns.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/data-driven-gameplay-elements-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          },
          {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7d4513c2-a311-451d-9d6d-5d85edcef6b3/datatableobject.png",
            "caption": "Official UE5.8 Data Table asset in the Content Browser.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/data-driven-gameplay-elements-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        ],
        null,
        null,
        null,
        null,
        null
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
      "visual": {
        "type": "ue5-reference",
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/69bc24a6-f990-4cfe-b45a-f1d1d899ea8f/basic-navmesh-visualize-a.png",
        "caption": "Official UE5.8 example: press P to visualise the generated NavMesh. Green shows where AI navigation is available.",
        "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/basic-navigation-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
      },
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
          "title": "Add a NavMeshBoundsVolume to the level",
          "where": "Level Editor → Add (+) or Place Actors → NavMeshBoundsVolume",
          "do": "Place a NavMeshBoundsVolume and scale it so it covers the area where AI should move.",
          "why": "AI movement needs a navigable area generated in the level.",
          "see": "Pressing P shows green navigation over the floor area.",
          "check": "The walkable space is covered in green.",
          "troubleshoot": [
            "If you see no green area, make the volume larger and press P again."
          ]
        },
        {
          "title": "Create or open an AI Character",
          "where": "Content Drawer → AI Character Blueprint",
          "do": "Use a simple AI Character or enemy Blueprint that can move.",
          "why": "The AI needs a pawn or character to control.",
          "see": "The AI Character is placeable in the level.",
          "check": "One enemy instance exists in the level."
        },
        {
          "title": "Create patrol target points",
          "where": "Level Editor → Place Actors → Target Point",
          "do": "Place two or more Target Points in the level and name them clearly.",
          "why": "Patrol behaviour needs known destinations.",
          "see": "The Target Points are visible in the Outliner.",
          "check": "Each point has a distinct name and sensible location."
        },
        {
          "title": "Give the AI a simple move instruction",
          "where": "AI Blueprint, AI Controller or Behaviour Tree depending on the lesson flow",
          "do": "Set up a Move To behaviour aimed at one patrol point, then switch to another when appropriate.",
          "why": "Even basic AI is built from “where should I go next?” decisions.",
          "see": "The enemy moves to the chosen point during Play.",
          "check": "The AI reaches the destination rather than standing still.",
          "troubleshoot": [
            "If it stands still, re-check the NavMesh coverage and that the destination is on navigable ground."
          ]
        },
        {
          "title": "Add a Blackboard or stored target variable",
          "where": "Your AI system’s data storage",
          "do": "Store the current patrol target so the AI knows where it should go next.",
          "why": "AI behaviour becomes easier to extend once its current target is explicit.",
          "see": "One variable or Blackboard key holds the current destination.",
          "check": "You can print or inspect the current target while testing."
        },
        {
          "title": "Test movement, pause and switching clearly",
          "where": "Run the game and watch the enemy",
          "do": "Observe whether the AI reaches points, waits if intended, then chooses the next point.",
          "why": "AI work should be tested behaviour by behaviour rather than “it sort of seems okay”.",
          "see": "The patrol looks deliberate rather than random or broken.",
          "check": "You can explain what the AI is currently trying to do at any point in the test."
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
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/69bc24a6-f990-4cfe-b45a-f1d1d899ea8f/basic-navmesh-visualize-a.png",
          "caption": "Official UE5.8 example: press P to visualise the generated NavMesh. Green shows where AI navigation is available.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/basic-navigation-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic",
          "type": "epic-doc",
          "slot": "intro"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e1ad172b-0e6c-431d-ac24-642f9d7f1577/basic-drag-navmesh-bounds.png",
          "caption": "Official UE5.8 example: drag a Nav Mesh Bounds Volume into the level and scale it over the walkable area.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/basic-navigation-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic",
          "type": "epic-doc",
          "slot": "practice"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/fccc3f17-4a64-4262-989e-dddb80d139e2/basic-npc-ai-moveto.png",
          "caption": "Official UE5.8 Blueprint example using AI Move To to send an AI-controlled Pawn toward a destination.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/basic-navigation-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic",
          "type": "epic-doc",
          "slot": "practice"
        },
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
      ],
      "starterValues": [
        "Patrol spacing: exactly 600 cm for the first test",
        "AI Move To Acceptance Radius: 75 cm",
        "Wait time at point: 2.0 s",
        "NavMesh: press P to visualise"
      ],
      "studentRecipe": [
        "Add NavMeshBoundsVolume and scale it until the entire intended patrol floor is covered. Press P and confirm the floor shows green navigation.",
        "Place Patrol_A at X 0, Y -300, Z 0 and Patrol_B at X 0, Y 300, Z 0 so they are exactly 600 cm apart.",
        "Create/use an AI Character and AIController. Make sure the AI Character is set to use the controller.",
        "Give the controller a TargetPoint Actor reference and assign Patrol_A for the first test.",
        "Run AI Move To with Target Actor Patrol_A and Acceptance Radius 75. Compile and Play.",
        "Prove the AI walks around obstacles and stops within the 75 cm Acceptance Radius of Patrol_A rather than sliding through geometry.",
        "After success, wait 2.0 seconds, switch the target to Patrol_B and run AI Move To again.",
        "Only after the two-point prototype works should you move the same target logic into Blackboard/Behaviour Tree."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/69bc24a6-f990-4cfe-b45a-f1d1d899ea8f/basic-navmesh-visualize-a.png",
          "caption": "Official UE5.8 example: press P to visualise the generated NavMesh. Green shows where AI navigation is available.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/basic-navigation-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/762379df-8ac3-4f2a-8492-f39f9fa1e63c/3-perception-setup.png",
          "caption": "Official UE5.8 AI Perception Sight configuration. Use the Hub’s exact radius/angle values.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/behavior-tree-in-unreal-engine---quick-start-guide",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/fccc3f17-4a64-4262-989e-dddb80d139e2/basic-npc-ai-moveto.png",
          "caption": "Official UE5.8 Blueprint example using AI Move To to send an AI-controlled Pawn toward a destination.",
          "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/basic-navigation-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        null,
        null
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
        "type": "ue5-reference",
        "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/6368083b-2787-4801-bf9f-2a60bc1e6952/create1.png",
        "caption": "Creating an Animation Blueprint and choosing its Skeleton. Animation Blueprints are specialised Blueprints for controlling skeletal animation.",
        "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/animation-blueprints-in-unreal-engine",
        "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
        "authenticUI": true,
        "versionNote": "Official Epic Games Unreal Engine 5.8 documentation."
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
          "title": "Open or create the Animation Blueprint",
          "where": "Character / skeletal mesh asset → Animation → Animation Blueprint",
          "do": "Open the Animation Blueprint used by your player or enemy skeletal mesh.",
          "why": "Animation logic lives in an Animation Blueprint, not directly in the Character mesh settings.",
          "see": "The Animation Blueprint opens with Event Graph and Anim Graph tabs.",
          "check": "The correct skeletal mesh is associated with the AnimBP."
        },
        {
          "title": "Find the Event Graph update step",
          "where": "Animation Blueprint → Event Graph",
          "do": "Locate Event Blueprint Update Animation and use it to read movement data from the owning pawn.",
          "why": "The AnimBP needs updated gameplay values such as speed or whether the character is in the air.",
          "see": "The graph contains logic that gets the owning pawn or character.",
          "check": "A Speed or similar variable updates while the game runs."
        },
        {
          "title": "Create or inspect the key animation variables",
          "where": "Animation Blueprint variables",
          "do": "Use variables such as Speed and IsInAir, setting them from the movement component or character.",
          "why": "State machines need readable variables to decide which animation should play.",
          "see": "The variables change when the character moves or jumps.",
          "check": "Printing or debugging confirms the variables update correctly."
        },
        {
          "title": "Use a State Machine in the Anim Graph",
          "where": "Animation Blueprint → Anim Graph → State Machine",
          "do": "Open the locomotion State Machine and look at states such as Idle/Walk/Run or Jump.",
          "why": "The State Machine is where Unreal decides which animation state should currently be active.",
          "see": "Different states and transitions are visible in the graph.",
          "check": "You can explain what condition causes at least one transition."
        },
        {
          "title": "Set sensible transition rules",
          "where": "Transition between animation states",
          "do": "Use variables like Speed > 0 or IsInAir to drive the transition conditions.",
          "why": "Transitions are just decisions based on animation-related state.",
          "see": "The state changes at the expected moments in Play mode.",
          "check": "Standing still returns the character to Idle."
        },
        {
          "title": "Test the full loop in Play mode",
          "where": "Run the character in the level",
          "do": "Walk, stop and jump while watching the character animation closely.",
          "why": "Animation systems only feel correct when the movement state and animation state match.",
          "see": "Movement and animation respond together smoothly.",
          "check": "You can describe one thing that still feels wrong and one thing that already works well."
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
      ],
      "starterValues": [
        "Variables: Speed Float / IsInAir Boolean",
        "Idle → Run condition: Speed > 5",
        "Run → Idle condition: Speed <= 5",
        "Any locomotion → Jump/Fall: IsInAir = True"
      ],
      "studentRecipe": [
        "Open the Animation Blueprint used by the character. In Event Graph find Event Blueprint Update Animation.",
        "Create Speed Float and IsInAir Boolean.",
        "Try Get Pawn Owner → Get Velocity → Vector Length XY → Set Speed.",
        "From the pawn/Character Movement → Is Falling → Set IsInAir.",
        "Open Anim Graph → locomotion State Machine. Identify the Idle/Run and air states before editing transitions.",
        "Set Idle → Run rule Speed > 5. Set Run → Idle rule Speed <= 5.",
        "Set transition to the jump/fall state when IsInAir is True, and return when IsInAir is False.",
        "Play: stand still, walk/run, jump, land. Watch the animation change with the same variables you can inspect in the Anim Blueprint debugger."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b0b1376f-9705-492e-b28d-6c8a372dd1e3/fulleventgraph.png",
          "caption": "Official UE5.8 Animation Blueprint Event Graph reference showing the standard movement-variable update pattern.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-get-animation-variables-in-animation-blueprints-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e984b7d9-6b40-4d9c-bf0c-f4ac40c0fc4b/myblueprint_variable.png",
          "caption": "Official UE5.8 My Blueprint variable control. Create the variable, then use the Hub name, type and default value.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/030886dc-1438-4576-82c7-968cbe74d00f/speed.png",
          "caption": "Official UE5.8 Speed calculation in an Animation Blueprint: Velocity → Vector Length XY → Speed.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-get-animation-variables-in-animation-blueprints-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/1716bf87-cc24-4512-8b9f-4242b5dc6128/image_19.png",
          "caption": "Official UE5.8 Is Falling setup in an Animation Blueprint. Store the result in the Hub’s IsInAir Boolean.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-get-animation-variables-in-animation-blueprints-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/85ec3324-7fcd-4767-8d6a-e075928e5301/state2.png",
          "caption": "Official UE5.8 State Machine with connected animation states and transition rules.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/state-machines-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null,
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/091220b1-f2be-4e05-a733-d7975d2ece23/trans2.gif",
          "caption": "Official UE5.8 workflow for creating transitions between animation states.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/state-machines-in-unreal-engine",
          "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
          "kind": "epic"
        },
        null
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
          "title": "List the behaviour you are about to build",
          "where": "Before touching the graph",
          "do": "Write one short sentence describing what the Blueprint should do.",
          "why": "Responsibility starts by naming the job clearly.",
          "see": "You have a one-sentence brief such as “This Blueprint opens the door when it is unlocked.”",
          "check": "The sentence describes one main job rather than five unrelated tasks."
        },
        {
          "title": "Ask who should own it",
          "where": "Review the relevant Actor or framework class",
          "do": "Decide which Blueprint or framework class is the proper owner of that behaviour.",
          "why": "Many messy Blueprints start because logic is placed in the first graph that happened to be open.",
          "see": "You have chosen an owner and can explain why.",
          "check": "Your choice matches the class’s role in the game."
        },
        {
          "title": "Name things for humans, not just yourself today",
          "where": "Variables, functions, components and comments",
          "do": "Use specific names that explain purpose, such as CurrentHealth instead of Var1.",
          "why": "Readable naming is one of the fastest wins in any student project.",
          "see": "Your graph reads more like instructions and less like random jargon.",
          "check": "Another student can tell what the variable or function is for."
        },
        {
          "title": "Separate quick test code from final behaviour",
          "where": "Review Print String nodes and temporary debug helpers",
          "do": "Use temporary debug output while building, but recognise which parts are only for testing.",
          "why": "Professional practice includes proving a system works without leaving the graph full of junk.",
          "see": "You can tell which nodes are temporary checks and which are final logic.",
          "check": "Removing the test nodes would not break the real mechanic."
        },
        {
          "title": "Reduce unnecessary duplication",
          "where": "Look for repeated node chains",
          "do": "Spot at least one repeated pattern that could become a Function, Macro or reused Blueprint.",
          "why": "Good practice is not just neatness — it is reducing maintenance cost.",
          "see": "You have identified at least one piece of duplication.",
          "check": "You can explain how you would refactor it later if time allowed."
        },
        {
          "title": "Leave the graph easier for the next person",
          "where": "Review the finished graph as if you were a teammate",
          "do": "Add a short comment, tidy alignment and remove anything misleading.",
          "why": "Readable projects are kinder to your future self and your team.",
          "see": "The graph looks deliberate and understandable.",
          "check": "If you reopened it next week, you would still know what it does."
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
      ],
      "starterValues": [
        "Rule: one behaviour sentence before nodes",
        "Naming: CurrentHealth not Var1",
        "Debug: remove temporary Print String before final handoff"
      ],
      "studentRecipe": [
        "Before opening the graph, write one sentence: “This Blueprint should …”. Keep it to one behaviour.",
        "Write the owner underneath: Character, Actor, Component, GameMode, GameInstance, Widget, etc.",
        "Build one event-to-result chain only. End it with Print String so you can prove the behaviour before adding a second responsibility.",
        "Rename every new variable/component/function so another student can understand it without asking you.",
        "Find one repeated node chain. If it is truly the same job, move it into a Function/Macro or reusable Blueprint.",
        "Remove debug nodes that no longer prove anything.",
        "Add one short comment above the main logic block explaining its responsibility.",
        "Play-test once more. The graph must be easier to read without changing the mechanic."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
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
          "title": "Spot the signs of spaghetti",
          "where": "Look at a busy graph",
          "do": "Identify common warning signs such as long crossing wires, duplicated logic, magic numbers and vague names.",
          "why": "You cannot improve complexity until you recognise it.",
          "see": "You can point to at least two readability problems in the graph.",
          "check": "Your identified problems are specific, not just “it looks messy”."
        },
        {
          "title": "Choose one small refactor target",
          "where": "Pick one section of the graph",
          "do": "Select one repeated or messy area instead of trying to “clean everything” at once.",
          "why": "Safe refactoring is usually done in small steps.",
          "see": "You have one clearly chosen target section.",
          "check": "You can describe what the refactor should improve."
        },
        {
          "title": "Extract repeated logic",
          "where": "Use Functions, Macros or custom Events as appropriate",
          "do": "Move repeated logic into one reusable unit and call it from the original places.",
          "why": "One source of truth is easier to test and maintain than repeated copies.",
          "see": "The main graph becomes shorter and the duplicated chain disappears.",
          "check": "Changing the extracted logic now updates every caller."
        },
        {
          "title": "Replace magic numbers with named variables",
          "where": "Look for raw values typed directly into nodes",
          "do": "Turn important repeated values such as 600, 1200 or 3.5 into clearly named variables.",
          "why": "Named variables explain meaning and make balancing easier.",
          "see": "The graph contains fewer unexplained raw values.",
          "check": "Another student can tell what the number means from the variable name."
        },
        {
          "title": "Use comments and spacing to reveal structure",
          "where": "Event Graph canvas",
          "do": "Align nodes, separate logical sections and add a brief comment where a block would otherwise be unclear.",
          "why": "Layout communicates structure before anybody reads a single pin.",
          "see": "The graph is easier to scan left to right.",
          "check": "The major stages of the logic are visible from the layout alone."
        },
        {
          "title": "Retest after every refactor",
          "where": "Run the mechanic after each cleanup step",
          "do": "Play the game and prove the behaviour still works exactly as before unless you intentionally changed it.",
          "why": "A refactor that breaks the mechanic is not an improvement.",
          "see": "The cleaned graph behaves the same or better than the messy version.",
          "check": "You can name one readability win and one functionality test you used."
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
      "docVisuals": [],
      "starterValues": [
        "Refactor one block at a time",
        "Replace repeated magic numbers with named variables",
        "Retest after every refactor"
      ],
      "studentRecipe": [
        "Choose one messy section only. Do not attempt to clean the whole Blueprint at once.",
        "Circle/identify crossing wires, duplicated chains, unnamed values and vague variable names in that section.",
        "Move one repeated action into a clearly named Function or Macro.",
        "Replace important raw values such as 600, 1200 or 3.5 with named variables that describe purpose.",
        "Align nodes left-to-right and keep execution flow visually obvious.",
        "Add one comment that says what the block does, not what every node literally is.",
        "Compile and Play immediately. Prove behaviour is unchanged.",
        "Only after the Play test passes, choose exactly one more logic block and repeat the same refactor cycle."
      ],
      "prescriptivePass": "3.31",
      "recipeVisuals": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  ],
  "glossary": [
    [
      "Input Action (IA)",
      "Enhanced Input asset representing a gameplay intention such as Sprint, Jump or Interact."
    ],
    [
      "Input Mapping Context (IMC)",
      "Enhanced Input asset that maps Input Actions to physical controls such as keys or gamepad buttons."
    ],
    [
      "Class Reference",
      "A reference to a type/class rather than one specific object instance."
    ],
    [
      "Enum",
      "A custom type representing one named choice from a controlled list."
    ],
    [
      "Data Table",
      "Rows of structured data using a Struct as the row definition."
    ],
    [
      "Static Mesh",
      "A 3D mesh asset without a deforming skeleton, commonly used for props and environments."
    ],
    [
      "Skeletal Mesh",
      "A 3D mesh bound to a skeleton/bones so it can deform and animate."
    ],
    [
      "Animation Blueprint",
      "Blueprint type that calculates the runtime pose/animation for a Skeletal Mesh."
    ],
    [
      "Behaviour Tree",
      "AI decision graph that runs tasks and reads shared data such as Blackboard keys."
    ],
    [
      "Blackboard",
      "Shared key/value memory used by Unreal AI systems such as Behaviour Trees."
    ],
    [
      "Material Instance",
      "An instance of a Material that exposes parameters for fast variation without duplicating the full shader."
    ],
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
