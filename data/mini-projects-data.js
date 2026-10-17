/* Unreal Engine Mini-Projects — integrated source-authorised teaching series.
   4 projects • 16 parts. Companion detailed notes are in mini-projects-source-notes.js.
   Stage IDs and local-completion key remain stable across future edits. */
window.UE5_MINI_PROJECT_DATA = {
  "version": "3.63.1",
  "source": "Unreal Engine Mini-Projects — Daniel Buckley / Zenva (2026)",
  "engine": "Unreal Engine 5.8",
  "assetBundle": "assets/mini-projects/Assets.zip",
  "assetBundleContents": [
    "BalloonModel.fbx",
    "BalloonModel.obj",
    "BowlingPin.fbx"
  ],
  "projects": [
    {
      "id": "balloon-popper",
      "title": "Balloon Popper",
      "icon": "◉",
      "level": "Beginner",
      "description": "Create a playable mouse-controlled target game: prepare a balloon, react to clicks, grow and pop, then tune the rules.",
      "skills": [
        "Actors",
        "Materials",
        "PlayerController",
        "Mouse input",
        "Scale",
        "Variables"
      ],
      "lessonIds": [
        "editor",
        "actors-components",
        "events",
        "variables",
        "branches"
      ],
      "assets": [
        "BalloonModel.fbx (supplied course model)"
      ],
      "stages": [
        {
          "id": "balloon-1",
          "title": "Create the project and import the balloon",
          "pages": [
            3,
            9
          ],
          "outcome": "A saved playable level containing the balloon mesh.",
          "tasks": [
            "Create a Games → Blank Blueprint project named MiniProjects and a BalloonPopper folder in Content.",
            "Create a Basic level and save it as BalloonPopperLevel inside that folder.",
            "Import the provided BalloonModel.fbx into the BalloonPopper folder. Use the updated FBX instructions for UE5.6+ rather than the older OBJ process.",
            "Drag the imported balloon mesh into the level, check its size and orientation, and save the level."
          ],
          "check": "Close and reopen the level: the balloon remains present, correctly oriented and in the right project folder.",
          "troubleshoot": "If the mesh appears tiny or rotated, confirm you imported the supplied FBX, not the older OBJ. Inspect the Static Mesh asset and its import settings.",
          "walkthroughSections": [
            {
              "title": "Create your project and level",
              "start": 3,
              "end": 4
            },
            {
              "title": "Import the balloon model using FBX",
              "start": 5,
              "end": 7
            },
            {
              "title": "Place the balloon and check the result",
              "start": 8,
              "end": 9
            }
          ]
        },
        {
          "id": "balloon-2",
          "title": "Material and appearance",
          "pages": [
            10,
            17
          ],
          "outcome": "A convincing colourful balloon using a reusable Unreal Material.",
          "tasks": [
            "Remove the floor from the Basic level so balloons can appear suspended in the air.",
            "Create a Material named M_Balloon and open its Material Editor.",
            "Choose a bright Base Color, Roughness around 0.3 and a suitable Specular value; save.",
            "Apply M_Balloon to the mesh through its Materials slot or drag it onto the mesh in the viewport.",
            "Check the material under the level lighting and compile/save the asset."
          ],
          "check": "The mesh is recognisably shiny and coloured, and the material survives reopening the editor.",
          "troubleshoot": "If the model stays grey, confirm the material is saved and assigned to the correct mesh material slot.",
          "walkthroughSections": [
            {
              "title": "Prepare the scene and create a material",
              "start": 10,
              "end": 11
            },
            {
              "title": "Choose the balloon colour and finish",
              "start": 12,
              "end": 13
            },
            {
              "title": "Apply the material and prepare for Blueprints",
              "start": 14,
              "end": 17
            }
          ]
        },
        {
          "id": "balloon-3",
          "title": "Reusable actor, mouse cursor and GameMode",
          "pages": [
            18,
            29
          ],
          "outcome": "Multiple reusable balloon actors with a visible mouse cursor when Play starts.",
          "tasks": [
            "Create BP_Balloon as an Actor Blueprint; add a Static Mesh component using BalloonModel and M_Balloon.",
            "Place several BP_Balloon instances in the level, rather than separate raw meshes.",
            "Create BP_BalloonPlayerController (Player Controller parent). On BeginPlay, enable Show Mouse Cursor.",
            "Create BP_BalloonGameMode (GameModeBase parent) and select your Balloon Player Controller as its Player Controller Class.",
            "Assign BP_BalloonGameMode in World Settings → GameMode Override.",
            "Compile and save every Blueprint before pressing Play."
          ],
          "check": "Press Play: several balloons are visible and the mouse cursor remains visible.",
          "troubleshoot": "If the cursor is missing, check GameMode Override first, then the GameMode Player Controller Class and the controller's Show Mouse Cursor setting.",
          "walkthroughSections": [
            {
              "title": "Create the reusable balloon Blueprint",
              "start": 18,
              "end": 21
            },
            {
              "title": "Show the mouse cursor",
              "start": 22,
              "end": 24
            },
            {
              "title": "Create and activate the Game Mode",
              "start": 25,
              "end": 29
            }
          ]
        },
        {
          "id": "balloon-4",
          "title": "Click to grow, then pop",
          "pages": [
            30,
            42
          ],
          "outcome": "A balloon scales up when clicked and destroys itself at the threshold.",
          "tasks": [
            "In BP_Balloon, add the Event ActorOnClicked event and temporarily connect it to Print String for proof.",
            "In BP_BalloonPlayerController, enable click events in the Mouse Interface settings; test the Print String again.",
            "Replace the print with Set Actor Scale 3D, using Get Actor Scale 3D plus a vector (0.2, 0.2, 0.2).",
            "After setting the scale, use a Branch driven by the updated X scale being greater than or equal to 2.",
            "On True, call Destroy Actor (Self); leave False to continue play.",
            "Test each balloon separately in Play In Editor."
          ],
          "check": "Each click makes only the clicked balloon grow; once sufficiently large, it disappears and other balloons remain interactive.",
          "troubleshoot": "If clicks do nothing, check Enable Click Events on the *active* Player Controller and verify the mesh can receive visibility-channel clicks.",
          "walkthroughSections": [
            {
              "title": "Detect clicks on the balloon",
              "start": 30,
              "end": 33
            },
            {
              "title": "Grow the balloon when clicked",
              "start": 34,
              "end": 37
            },
            {
              "title": "Pop the balloon at the target size",
              "start": 38,
              "end": 42
            }
          ]
        },
        {
          "id": "balloon-5",
          "title": "Refactor with variables and frame the level",
          "pages": [
            43,
            53
          ],
          "outcome": "Configurable balloon growth and a clean starting view.",
          "tasks": [
            "Replace hard-coded growth increments with a named Blueprint variable (such as GrowthPerClick).",
            "Store the destruction size as a separate PopScale variable and wire that into the comparison.",
            "Expose useful variables as Instance Editable if you want different balloons to behave differently.",
            "Position a Camera Actor or set the starting player view so all targets appear in frame.",
            "Adjust the level lighting and test the full game from a fresh Play session."
          ],
          "check": "Change a variable in the editor and confirm the game changes without rewiring the graph.",
          "troubleshoot": "If different instances seem identical, ensure the Blueprint variable is actually connected and mark Instance Editable where needed.",
          "walkthroughSections": [
            {
              "title": "Control balloon size with variables",
              "start": 43,
              "end": 47
            },
            {
              "title": "Set the player's starting view",
              "start": 48,
              "end": 50
            },
            {
              "title": "Adjust the lighting and polish",
              "start": 51,
              "end": 53
            }
          ]
        }
      ]
    },
    {
      "id": "loops",
      "title": "Loops & Spawning",
      "icon": "↻",
      "level": "Beginner → Intermediate",
      "description": "Learn to replace repeated nodes with a controlled Blueprint For Loop, then spawn a clear pattern of actors.",
      "skills": [
        "GameMode",
        "SpawnActor",
        "For Loop",
        "Loop Index",
        "Transforms"
      ],
      "lessonIds": [
        "events",
        "functions",
        "data"
      ],
      "assets": [
        "Unreal primitive mesh or any small supplied model"
      ],
      "stages": [
        {
          "id": "loops-1",
          "title": "Create a spawnable Blueprint",
          "pages": [
            55,
            66
          ],
          "outcome": "A repeated actor that can be created by the game at runtime.",
          "tasks": [
            "Create a dedicated level for this practical and a simple Actor Blueprint with a visible Static Mesh.",
            "Add a GameMode Blueprint for the level and use Event BeginPlay for a one-off setup.",
            "Place one Spawn Actor From Class node targeting the new Actor class, with a valid transform.",
            "Duplicate the Spawn Actor node temporarily and compare the resulting object count.",
            "Record what becomes difficult to maintain as the node count increases."
          ],
          "check": "Press Play: the level creates new actors at runtime without manually placing them.",
          "troubleshoot": "If nothing appears, verify the class selected on Spawn Actor and the active GameMode; check the spawn transform and collision handling.",
          "walkthroughSections": [
            {
              "title": "Create a box you can spawn",
              "start": 55,
              "end": 58
            },
            {
              "title": "Set up the Game Mode",
              "start": 59,
              "end": 61
            },
            {
              "title": "Spawn a box when play begins",
              "start": 62,
              "end": 64
            },
            {
              "title": "Understand why repetition is a problem",
              "start": 65,
              "end": 66
            }
          ]
        },
        {
          "id": "loops-2",
          "title": "Replace repetition with a For Loop",
          "pages": [
            67,
            70
          ],
          "outcome": "The same repeated behaviour uses one loop instead of copied nodes.",
          "tasks": [
            "Remove the manually duplicated Spawn Actor chain, leaving one controlled action.",
            "Add a For Loop after BeginPlay and set the First Index and Last Index.",
            "Connect Loop Body to the repeated action and distinguish Loop Body from Completed.",
            "Test low counts first, observing that indices include the Last Index.",
            "Increase the Last Index and note how quickly the work scales."
          ],
          "check": "The loop executes the intended number of times from a compact Blueprint graph.",
          "troubleshoot": "If you get one more actor than expected, remember First Index 0 through Last Index 9 runs ten iterations.",
          "walkthroughSections": [
            {
              "title": "Add and configure a For Loop",
              "start": 67,
              "end": 68
            },
            {
              "title": "Test the loop index and challenge yourself",
              "start": 69,
              "end": 70
            }
          ]
        },
        {
          "id": "loops-3",
          "title": "Use the loop index to lay out actors",
          "pages": [
            71,
            82
          ],
          "outcome": "A neat line or grid of spawned actors, each at a different position.",
          "tasks": [
            "Keep the For Loop driving Spawn Actor From Class.",
            "Use the Index output multiplied by a spacing value to calculate an offset.",
            "Feed a Make Vector (for example X = Index × Spacing) into a Make Transform's location.",
            "Set a consistent Z value so the objects appear above the floor.",
            "Run several counts and spacing values, observing collision and visibility.",
            "Stretch: attempt two rows, then explain how a nested loop would work."
          ],
          "check": "Every spawned item occupies its own visible position and the count changes predictably.",
          "troubleshoot": "If all objects stack together, confirm the Index is wired into a position rather than using the same transform each time.",
          "walkthroughSections": [
            {
              "title": "Spawn 15 boxes with a loop",
              "start": 71,
              "end": 74
            },
            {
              "title": "Space the boxes using the loop index",
              "start": 75,
              "end": 76
            },
            {
              "title": "Enable physics and adjust the spawn height",
              "start": 77,
              "end": 80
            },
            {
              "title": "Test and extend your stacked tower",
              "start": 81,
              "end": 82
            }
          ]
        }
      ]
    },
    {
      "id": "bowling",
      "title": "Bowling Mini-Game",
      "icon": "⚑",
      "level": "Intermediate",
      "description": "Build a simple physics bowling game with a lane, pins, ball, Enhanced Input, and player control.",
      "skills": [
        "Physics",
        "Enhanced Input",
        "GameMode",
        "Controller",
        "Custom Events",
        "Force"
      ],
      "lessonIds": [
        "actors-components",
        "events",
        "framework",
        "interfaces-dispatchers",
        "collision"
      ],
      "assets": [
        "BowlingPin.fbx from the supplied assets; create the bowling ball using an Unreal Engine Sphere mesh"
      ],
      "stages": [
        {
          "id": "bowling-1",
          "title": "Bowling lane, pins and materials",
          "pages": [
            84,
            103
          ],
          "outcome": "A prepared bowling lane with visible reusable pins.",
          "tasks": [
            "Create the bowling content folder and a dedicated Bowling level.",
            "Import the supplied BowlingPin.fbx model from the Assets ZIP into the project.",
            "Create a BP_BowlingPin Actor containing the pin mesh, collision and appropriate physics settings.",
            "Create materials for pin and lane and apply them through the correct mesh slots.",
            "Build the lane using a scaled static mesh and arrange pins at the far end.",
            "Play-test the pin arrangement and adjust collisions if the pins start unstable."
          ],
          "check": "The lane looks readable and pins are positioned in a consistent formation.",
          "troubleshoot": "If pins fall before they are hit, inspect mesh collision, physics/gravity settings, placement height and accidental overlaps.",
          "walkthroughSections": [
            {
              "title": "Import the pins and create a Blueprint",
              "start": 84,
              "end": 88
            },
            {
              "title": "Give the pins a material",
              "start": 89,
              "end": 93
            },
            {
              "title": "Arrange the pins and build a lane",
              "start": 94,
              "end": 98
            },
            {
              "title": "Style the lane and check your setup",
              "start": 99,
              "end": 103
            }
          ]
        },
        {
          "id": "bowling-2",
          "title": "Create the ball and Enhanced Input actions",
          "pages": [
            104,
            115
          ],
          "outcome": "A bowling ball Actor plus explicit move/throw input assets.",
          "tasks": [
            "Create BP_BowlingBall as an Actor with a Static Mesh component. Use Unreal Engine's built-in Sphere mesh (the supplied ZIP contains a bowling pin, not a separate ball model) and apply a suitable ball material.",
            "Configure appropriate collision and physics on the ball mesh.",
            "Create Enhanced Input Action assets for movement and throwing.",
            "Create an Input Mapping Context that maps arrow keys and Space to those actions.",
            "Set the move action's value type to represent the directional values required by the tutorial.",
            "Compile/save the Blueprints and Input assets."
          ],
          "check": "Input actions and mapping context exist and have the intended key bindings.",
          "troubleshoot": "If you cannot find the actions in Blueprint, check their asset folders and whether Enhanced Input is enabled.",
          "walkthroughSections": [
            {
              "title": "Create the bowling ball Blueprint",
              "start": 104,
              "end": 105
            },
            {
              "title": "Give the ball a material",
              "start": 106,
              "end": 108
            },
            {
              "title": "Create an Input Mapping Context",
              "start": 109,
              "end": 110
            },
            {
              "title": "Set up the throw and movement controls",
              "start": 111,
              "end": 115
            }
          ]
        },
        {
          "id": "bowling-3",
          "title": "Controller, GameMode and input context",
          "pages": [
            116,
            130
          ],
          "outcome": "The level uses the correct controller and receives Enhanced Input.",
          "tasks": [
            "Create BP_BowlingPlayerController (Player Controller) and BP_BowlingGameMode (GameModeBase).",
            "Assign the custom Player Controller in your GameMode.",
            "Set the level's GameMode Override in World Settings.",
            "On BeginPlay in the Player Controller, add your Input Mapping Context to the Enhanced Input Local Player Subsystem.",
            "Find or hold a reference to the placed bowling ball so input can act on the correct instance.",
            "Use Print String briefly to verify the controls respond."
          ],
          "check": "The correct GameMode/controller are active and key presses fire the intended input events.",
          "troubleshoot": "If input never fires, inspect GameMode Override, Input Mapping Context addition and controller ownership before changing ball logic.",
          "walkthroughSections": [
            {
              "title": "Create the Controller, Camera and Game Mode",
              "start": 116,
              "end": 119
            },
            {
              "title": "Position the camera above the lane",
              "start": 120,
              "end": 122
            },
            {
              "title": "Activate input and test the controls",
              "start": 123,
              "end": 126
            },
            {
              "title": "Find the bowling ball in the Controller",
              "start": 127,
              "end": 130
            }
          ]
        },
        {
          "id": "bowling-4",
          "title": "Send throw input and apply force",
          "pages": [
            131,
            142
          ],
          "outcome": "Space throws the bowling ball toward the pins using physics.",
          "tasks": [
            "Create clearly named custom events on BP_BowlingBall, including a throw event.",
            "From the Player Controller's throw input, call the event on the correct bowling ball reference.",
            "Use the Static Mesh component's physics methods to apply an impulse or force down the lane.",
            "Ensure physics is enabled on the ball mesh and tune the throw strength.",
            "Test one throw at a time and watch the ball collide with the pins."
          ],
          "check": "Pressing Space drives the ball down the lane and it can physically knock over pins.",
          "troubleshoot": "If force does nothing, call Add Impulse on a Simulate Physics mesh component, not an actor whose mesh has physics disabled.",
          "walkthroughSections": [
            {
              "title": "Create the Bowl and Move events",
              "start": 131,
              "end": 133
            },
            {
              "title": "Connect input actions to the ball",
              "start": 134,
              "end": 136
            },
            {
              "title": "Launch the ball with force",
              "start": 137,
              "end": 139
            },
            {
              "title": "Enable pin physics and test the throw",
              "start": 140,
              "end": 142
            }
          ]
        },
        {
          "id": "bowling-5",
          "title": "Move the ball sideways to aim",
          "pages": [
            143,
            150
          ],
          "outcome": "Arrow keys position the ball before throwing.",
          "tasks": [
            "Add a Move event to BP_BowlingBall with a direction input.",
            "Pass your Enhanced Input move value from the Player Controller to the ball.",
            "Scale the direction by a suitable movement speed, then update the ball's allowed lane position.",
            "Choose and document the axis that corresponds to sideways movement in your level.",
            "Clamp movement to the lane edges if necessary to prevent the ball leaving the track.",
            "Test left, right and throw together from a restarted level."
          ],
          "check": "Arrow keys move the ball left and right, and Space still bowls toward the pins.",
          "troubleshoot": "If the ball moves forward instead of sideways, inspect the level orientation, sign and axis chosen for Move Direction.",
          "walkthroughSections": [
            {
              "title": "Move the ball left and right to aim",
              "start": 143,
              "end": 145
            },
            {
              "title": "Make aiming speed independent of frame rate",
              "start": 146,
              "end": 150
            }
          ]
        }
      ]
    },
    {
      "id": "clicker",
      "title": "Clicker Game & UMG",
      "icon": "▤",
      "level": "Beginner → Intermediate",
      "description": "Make a complete button-driven clicker: design a UMG widget, show it in game and keep the score synchronised.",
      "skills": [
        "Widget Blueprint",
        "Button events",
        "GameMode",
        "Variables",
        "Text UI"
      ],
      "lessonIds": [
        "ui",
        "variables",
        "events",
        "framework"
      ],
      "assets": [
        "No external models needed"
      ],
      "stages": [
        {
          "id": "clicker-1",
          "title": "Build a responsive UMG interface",
          "pages": [
            152,
            167
          ],
          "outcome": "A clicker interface with a prominent button and readable score area.",
          "tasks": [
            "Create a new level and a Widget Blueprint using a User Widget parent.",
            "Open the Designer and add the essential Canvas/Panel layout elements.",
            "Add the clicker button and label; name widgets clearly in the Hierarchy.",
            "Configure anchor points so the button stays usable at different viewport sizes.",
            "Preview at both desktop and phone-like resolutions in the Widget Designer."
          ],
          "check": "The clicker button and label remain visible, readable and accessible across viewport sizes.",
          "troubleshoot": "If a widget disappears at runtime, examine its anchors, Canvas slot position, visibility and Z-order.",
          "walkthroughSections": [
            {
              "title": "Create the level and UI widget",
              "start": 152,
              "end": 154
            },
            {
              "title": "Add the button and text widgets",
              "start": 155,
              "end": 158
            },
            {
              "title": "Style your button and label",
              "start": 159,
              "end": 164
            },
            {
              "title": "Anchor the layout for different screens",
              "start": 165,
              "end": 167
            }
          ]
        },
        {
          "id": "clicker-2",
          "title": "Show the widget and capture its clicks",
          "pages": [
            168,
            180
          ],
          "outcome": "Your widget appears in Play and the button fires an event.",
          "tasks": [
            "Add a score Text element with an initial displayed value.",
            "Create a dedicated GameMode Blueprint for the Clicker level and set it as the level override.",
            "On BeginPlay create your Widget Blueprint, store a reference and add it to the viewport.",
            "Configure UI mouse visibility/input mode so the button can actually be pressed.",
            "In the widget, create the Button OnClicked event and prove it with a temporary Print String.",
            "Decide where the authoritative score should live before adding more UI logic."
          ],
          "check": "Play immediately displays the widget and clicking the button triggers exactly one event.",
          "troubleshoot": "If the button is visible but inert, check widget hit testing, UI input mode, Show Mouse Cursor and whether the OnClicked event targets the actual button.",
          "walkthroughSections": [
            {
              "title": "Design the on-screen score display",
              "start": 168,
              "end": 171
            },
            {
              "title": "Display the widget in the level",
              "start": 172,
              "end": 176
            },
            {
              "title": "Send button clicks to the Game Mode",
              "start": 177,
              "end": 180
            }
          ]
        },
        {
          "id": "clicker-3",
          "title": "Increment and display the score",
          "pages": [
            181,
            192
          ],
          "outcome": "Every click adds to one score variable and updates the on-screen value.",
          "tasks": [
            "Create the Score integer variable on the chosen gameplay owner (for this source project, GameMode).",
            "On button click, request a score increase from that owner rather than keeping two separate score variables.",
            "Increment the score by one using Get Score → +1 → Set Score.",
            "Update the Widget's score text through a typed widget reference or a clearly named update function.",
            "Test repeated rapid clicks and verify the score matches the number of clicks.",
            "Stretch: add a reset button, then a multiplier as a separate change."
          ],
          "check": "After ten clicks the UI shows ten; the displayed score remains synchronised with the stored value.",
          "troubleshoot": "If the score changes internally but not on screen, validate the widget reference and conversion to text. Avoid updating a discarded widget instance.",
          "walkthroughSections": [
            {
              "title": "Count clicks with a score variable",
              "start": 181,
              "end": 182
            },
            {
              "title": "Update the score text in the widget",
              "start": 183,
              "end": 185
            },
            {
              "title": "Connect the score to the UI",
              "start": 186,
              "end": 188
            },
            {
              "title": "Show zero before the first click",
              "start": 189,
              "end": 192
            }
          ]
        }
      ]
    }
  ]
};
