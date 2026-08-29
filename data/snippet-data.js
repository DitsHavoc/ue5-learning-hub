window.UE5_SNIPPET_DATA = {
  "version": "3.34.21",
  "buildDate": "29 Aug 2026",
  "policy": {
    "title": "Official Epic paste-assist bank",
    "body": "The Hub does not mirror Epic's raw Blueprint or level clipboard blocks. Open the official Epic page, use Copy Full Snippet there, then paste into the named Blueprint graph or viewport. This keeps the source current and avoids turning the Hub into a copied documentation mirror.",
    "versions": "Official Epic UE 5.6–5.8 material is acceptable when the workflow shown is still materially accurate; every assist in this release is sourced from current UE 5.8 Epic documentation."
  },
  "categories": [
    {
      "id": "interaction",
      "title": "Interaction",
      "icon": "◎"
    },
    {
      "id": "ui",
      "title": "HUD & UI",
      "icon": "▤"
    },
    {
      "id": "world",
      "title": "World Systems",
      "icon": "⚙"
    },
    {
      "id": "combat",
      "title": "Damage & Combat",
      "icon": "✦"
    },
    {
      "id": "ai",
      "title": "AI",
      "icon": "◉"
    },
    {
      "id": "flow",
      "title": "Game Flow",
      "icon": "▶"
    },
    {
      "id": "animation",
      "title": "Animation",
      "icon": "◆"
    }
  ],
  "snippets": [
    {
      "id": "epic-level-blockout",
      "title": "Hallways + Rooms: Instant Level Blockout",
      "category": "world",
      "icon": "▦",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 01: Project Setup and Level Blockout",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-01-project-setup-and-level-blockout-in-unreal-engine",
      "sourceSection": "Copy the blockout rooms and hallways",
      "pasteMode": "Level / viewport paste",
      "snippetSummary": "3 large level clipboard blocks",
      "what": "Pastes Epic’s greybox hallways and rooms directly into a level so students can study scale, routing and Outliner organisation without rebuilding the whole example by hand.",
      "pasteInto": [
        "Level Editor viewport / Outliner in a new Basic level"
      ],
      "reconnect": [
        "Make the viewport or Outliner active before pasting.",
        "Epic tells you to remove the default Floor and PlayerStart first for the cleanest match."
      ],
      "prerequisites": [
        "A UE 5.8 project",
        "LevelPrototyping content used by the tutorial"
      ],
      "relatedTutorials": [],
      "tags": [
        "blockout",
        "greybox",
        "level design",
        "hallway",
        "room",
        "outliner",
        "prototype"
      ],
      "relatedLessons": [
        "editor",
        "actors-components"
      ]
    },
    {
      "id": "epic-key-data-function",
      "title": "Key Data Function: fnBPLSetKey",
      "category": "interaction",
      "icon": "🔑",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 02: Create a Key",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-02-create-a-key-in-unreal-engine",
      "sourceSection": "Build the reusable key-data function",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint function snippet",
      "what": "Builds Epic’s reusable function for looking up key data and applying the matching material / mesh setup.",
      "pasteInto": [
        "BPL_FPGame → fnBPLSetKey function graph"
      ],
      "reconnect": [
        "Reconnect the function entry pins to the For Each Loop and Find nodes after pasting."
      ],
      "prerequisites": [
        "Enum_KeyType",
        "Struct_KeyData",
        "BPL_FPGame"
      ],
      "relatedTutorials": [
        "key-pickup",
        "locked-door"
      ],
      "tags": [
        "key",
        "function library",
        "map",
        "struct",
        "enum",
        "for each",
        "find"
      ],
      "relatedLessons": [
        "functions",
        "variables"
      ]
    },
    {
      "id": "epic-key-construction",
      "title": "Key Construction Script: Apply Key Variant",
      "category": "interaction",
      "icon": "🗝",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 02: Create a Key",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-02-create-a-key-in-unreal-engine",
      "sourceSection": "Use fnBPLSetKey in BP_Key",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Construction Script snippet",
      "what": "Makes each BP_Key instance configure its visible mesh/material from the selected key type during construction.",
      "pasteInto": [
        "BP_Key → Construction Script"
      ],
      "reconnect": [
        "Reconnect fnBPLSetKey to the Construction Script entry node."
      ],
      "prerequisites": [
        "BP_Key",
        "BPL_FPGame",
        "KeyMap",
        "KeyType"
      ],
      "relatedTutorials": [
        "key-pickup"
      ],
      "tags": [
        "key",
        "construction script",
        "variant",
        "material",
        "mesh"
      ],
      "relatedLessons": [
        "blueprint-classes",
        "events"
      ]
    },
    {
      "id": "epic-key-pickup-event",
      "title": "Key Pickup: Add to Player + Remove World Actor",
      "category": "interaction",
      "icon": "✋",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 02: Create a Key",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-02-create-a-key-in-unreal-engine",
      "sourceSection": "Key pickup behaviour",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Provides the key pickup event flow so the player receives the key data and the world pickup can complete its interaction behaviour.",
      "pasteInto": [
        "BP_Key → Event Graph"
      ],
      "reconnect": [
        "Keep the Blueprint Interface / player-key setup from Epic in place so the pasted calls resolve."
      ],
      "prerequisites": [
        "BP_Key",
        "BPI_PlayerKeys",
        "player key interface setup"
      ],
      "relatedTutorials": [
        "key-pickup",
        "collectable"
      ],
      "tags": [
        "key",
        "pickup",
        "collectable",
        "interface",
        "event graph"
      ],
      "relatedLessons": [
        "events",
        "variables"
      ]
    },
    {
      "id": "epic-door-colour-construction",
      "title": "Door Construction: Match the Required Key Colour",
      "category": "interaction",
      "icon": "🚪",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 03: Open Doors with Keys",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-03-open-doors-with-keys-in-unreal-engine",
      "sourceSection": "Add Color-Changing Blueprint Logic",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Construction Script snippet",
      "what": "Checks whether the door uses keys and applies the material associated with its RequiredKey value to the two door meshes.",
      "pasteInto": [
        "BP_DoorFrame → Construction Script"
      ],
      "reconnect": [
        "Add the extra Sequence output described by Epic, then connect that exec pin to the pasted Branch."
      ],
      "prerequisites": [
        "BP_DoorFrame",
        "UseKey",
        "RequiredKey",
        "KeyMap",
        "fnBPLSetKey"
      ],
      "relatedTutorials": [
        "locked-door",
        "timeline-door"
      ],
      "tags": [
        "door",
        "key",
        "construction script",
        "branch",
        "sequence",
        "material"
      ],
      "relatedLessons": [
        "blueprint-classes",
        "branches"
      ]
    },
    {
      "id": "epic-door-has-key",
      "title": "Door Check: FnHasKey",
      "category": "interaction",
      "icon": "🔐",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 03: Open Doors with Keys",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-03-open-doors-with-keys-in-unreal-engine",
      "sourceSection": "Check if the player has the required key",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint function snippet",
      "what": "Builds the reusable key-check function that compares the player’s held keys against the door’s RequiredKey before allowing progression.",
      "pasteInto": [
        "BPL_FPGame → FnHasKey function graph"
      ],
      "reconnect": [
        "Reconnect the function entry node to the Sequence node as Epic instructs."
      ],
      "prerequisites": [
        "BPL_FPGame",
        "BPI_PlayerKeys",
        "HeldKeys / key data from Designer 02"
      ],
      "relatedTutorials": [
        "locked-door"
      ],
      "tags": [
        "door",
        "locked",
        "has key",
        "function",
        "branch",
        "inventory"
      ],
      "relatedLessons": [
        "functions",
        "branches"
      ]
    },
    {
      "id": "epic-hud-key-update",
      "title": "HUD Function: Add a Collected Key to the Display",
      "category": "ui",
      "icon": "▤",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 04: Player HUD",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-04-player-hud-in-unreal-engine",
      "sourceSection": "Build the HUD key-update function",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint function snippet",
      "what": "Updates the player HUD when a key is collected, building the displayed key list from the stored key data.",
      "pasteInto": [
        "WBP_PlayerHUD → key update function graph"
      ],
      "reconnect": [
        "Reconnect the function entry pins to the Add Unique node after pasting."
      ],
      "prerequisites": [
        "WBP_PlayerHUD",
        "key array / enum data",
        "TxtKeys widget"
      ],
      "relatedTutorials": [
        "basic-hud",
        "collectable",
        "objective-text"
      ],
      "tags": [
        "hud",
        "widget",
        "inventory",
        "key",
        "add unique",
        "umg"
      ],
      "relatedLessons": [
        "ui",
        "functions"
      ]
    },
    {
      "id": "epic-hud-player-setup",
      "title": "Player HUD: Create, Store + Display the Widget",
      "category": "ui",
      "icon": "🖥",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 04: Player HUD",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-04-player-hud-in-unreal-engine",
      "sourceSection": "Display the HUD from the player character",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Creates the HUD for the possessed player, stores the widget reference, adds it to the viewport and lets later pickup events update it.",
      "pasteInto": [
        "BP_AdventureCharacter → Event Graph"
      ],
      "reconnect": [
        "Keep the variable and widget names aligned with Epic’s setup so pasted references resolve cleanly."
      ],
      "prerequisites": [
        "WBP_PlayerHUD",
        "HUD variable on the character",
        "BP_AdventureCharacter"
      ],
      "relatedTutorials": [
        "basic-hud",
        "interaction-prompt",
        "objective-text"
      ],
      "tags": [
        "hud",
        "create widget",
        "add to viewport",
        "possessed",
        "player"
      ],
      "relatedLessons": [
        "ui",
        "framework"
      ]
    },
    {
      "id": "epic-switch-construction",
      "title": "Switch Construction: Default Off Material",
      "category": "world",
      "icon": "⬛",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 05: Switches and Cubes",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-05-puzzles-switches-and-cubes-in-unreal-engine",
      "sourceSection": "Implement Your Logic — Construction Script",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Construction Script snippet",
      "what": "Sets the switch mesh to its OffMaterial when the actor is constructed.",
      "pasteInto": [
        "BP_Switch → Construction Script"
      ],
      "reconnect": [
        "Connect the Construction Script entry node if the pasted block does not retain the entry link."
      ],
      "prerequisites": [
        "BP_Switch",
        "Switch mesh component",
        "OffMaterial"
      ],
      "relatedTutorials": [
        "pressure-plate",
        "button-lever"
      ],
      "tags": [
        "switch",
        "pressure plate",
        "construction script",
        "material"
      ],
      "relatedLessons": [
        "blueprint-classes"
      ]
    },
    {
      "id": "epic-switch-overlap",
      "title": "Switch Overlap: Turn On / Turn Off",
      "category": "world",
      "icon": "🟦",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 05: Switches and Cubes",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-05-puzzles-switches-and-cubes-in-unreal-engine",
      "sourceSection": "Implement Your Logic — Event Graph",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Uses Trigger begin/end overlap events to swap the switch between OnMaterial and OffMaterial.",
      "pasteInto": [
        "BP_Switch → Event Graph"
      ],
      "reconnect": [
        "Make sure the Trigger component and OnMaterial / OffMaterial variables use the names expected by the pasted graph."
      ],
      "prerequisites": [
        "BP_Switch",
        "Trigger box collision",
        "OnMaterial",
        "OffMaterial"
      ],
      "relatedTutorials": [
        "pressure-plate",
        "button-lever"
      ],
      "tags": [
        "switch",
        "overlap",
        "pressure plate",
        "material",
        "begin overlap",
        "end overlap"
      ],
      "relatedLessons": [
        "collision",
        "events"
      ]
    },
    {
      "id": "epic-switch-activate-once",
      "title": "Switch: Activate Once",
      "category": "world",
      "icon": "1×",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 05: Switches and Cubes",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-05-puzzles-switches-and-cubes-in-unreal-engine",
      "sourceSection": "Create Single and Multiple Activations",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Adds an instance-editable ActivateOnce boolean and Branch so a switch can remain active after its first valid trigger.",
      "pasteInto": [
        "BP_Switch → Event Graph"
      ],
      "reconnect": [
        "Use the existing overlap/material logic from the previous stage; this snippet extends it rather than replacing the whole Blueprint concept."
      ],
      "prerequisites": [
        "BP_Switch",
        "ActivateOnce bool",
        "existing overlap graph"
      ],
      "relatedTutorials": [
        "pressure-plate",
        "button-lever"
      ],
      "tags": [
        "switch",
        "activate once",
        "boolean",
        "branch",
        "one shot"
      ],
      "relatedLessons": [
        "branches",
        "variables"
      ]
    },
    {
      "id": "epic-switch-overlap-safety",
      "title": "Switch Fix: Multiple Overlap Safety",
      "category": "world",
      "icon": "✓",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 05: Switches and Cubes",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-05-puzzles-switches-and-cubes-in-unreal-engine",
      "sourceSection": "Debug — keep the switch active while anything still overlaps",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Fixes the classic pressure-plate bug where one actor leaving turns the switch off even though another actor is still standing on it.",
      "pasteInto": [
        "BP_Switch → Event Graph"
      ],
      "reconnect": [
        "Keep the Trigger component reference intact; Epic’s fix checks Get Overlapping Actors → Is Empty before switching off."
      ],
      "prerequisites": [
        "BP_Switch",
        "Trigger",
        "existing ActivateOnce / overlap logic"
      ],
      "relatedTutorials": [
        "pressure-plate"
      ],
      "tags": [
        "switch",
        "debug",
        "overlap",
        "array",
        "is empty",
        "multiple actors"
      ],
      "relatedLessons": [
        "collision",
        "variables"
      ]
    },
    {
      "id": "epic-switch-interaction-list",
      "title": "Switch: Activate a List of Other Actors",
      "category": "world",
      "icon": "☷",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 05: Switches and Cubes",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-05-puzzles-switches-and-cubes-in-unreal-engine",
      "sourceSection": "Create an Interaction List",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Uses an instance-editable actor array, For Each Loop and BPI_Interaction calls so one switch can control multiple platforms, traps or other interactables.",
      "pasteInto": [
        "BP_Switch → Event Graph"
      ],
      "reconnect": [
        "Create BPI_Interaction and the InteractObjectList array first so the interface calls and array references can resolve."
      ],
      "prerequisites": [
        "BPI_Interaction",
        "InteractObjectList Actor array",
        "BP_Switch"
      ],
      "relatedTutorials": [
        "pressure-plate",
        "button-lever",
        "moving-platform"
      ],
      "tags": [
        "switch",
        "interface",
        "for each loop",
        "array",
        "multiple objects",
        "interaction"
      ],
      "relatedLessons": [
        "interfaces-dispatchers",
        "collision"
      ]
    },
    {
      "id": "epic-platform-scale",
      "title": "Moving Platform: Construction Scale Setup",
      "category": "world",
      "icon": "↔",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 06: Moving Platforms",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-06-puzzles-moving-platforms-in-unreal-engine",
      "sourceSection": "Set Up a Blueprint Class — PlatformScale",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Construction Script snippet",
      "what": "Uses an instance-editable PlatformScale vector to size the platform mesh cleanly from the Construction Script.",
      "pasteInto": [
        "BP_Platform → Construction Script"
      ],
      "reconnect": [
        "Reconnect the Construction Script entry node to Set World Scale 3D after pasting."
      ],
      "prerequisites": [
        "BP_Platform",
        "Platform mesh component",
        "PlatformScale vector"
      ],
      "relatedTutorials": [
        "moving-platform"
      ],
      "tags": [
        "moving platform",
        "construction script",
        "scale",
        "vector"
      ],
      "relatedLessons": [
        "blueprint-classes"
      ]
    },
    {
      "id": "epic-platform-start-end",
      "title": "Moving Platform: Cache Start + Target Locations",
      "category": "world",
      "icon": "A→B",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 06: Moving Platforms",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-06-puzzles-moving-platforms-in-unreal-engine",
      "sourceSection": "Set Start and End Locations",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Captures the platform’s starting location and a TargetPoint location so later movement logic has two reliable endpoints.",
      "pasteInto": [
        "BP_Platform → Event Graph"
      ],
      "reconnect": [
        "Create the StartLocation, EndLocation and TargetPoint variables described by Epic before pasting."
      ],
      "prerequisites": [
        "BP_Platform",
        "TargetPoint reference",
        "StartLocation",
        "EndLocation"
      ],
      "relatedTutorials": [
        "moving-platform"
      ],
      "tags": [
        "moving platform",
        "target point",
        "start location",
        "end location",
        "begin play"
      ],
      "relatedLessons": [
        "timelines",
        "variables"
      ]
    },
    {
      "id": "epic-platform-lerp",
      "title": "Moving Platform: Timeline + Lerp Movement",
      "category": "world",
      "icon": "⇆",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 06: Moving Platforms",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-06-puzzles-moving-platforms-in-unreal-engine",
      "sourceSection": "Create Movement with a Timeline and Lerp",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Uses a Timeline alpha and Lerp(Vector) to move the actor smoothly between StartLocation and EndLocation.",
      "pasteInto": [
        "BP_Platform → Event Graph"
      ],
      "reconnect": [
        "Create the TM_MovePlatform timeline and its float track first so the pasted graph has the timeline reference it expects."
      ],
      "prerequisites": [
        "TM_MovePlatform timeline",
        "StartLocation",
        "EndLocation"
      ],
      "relatedTutorials": [
        "moving-platform"
      ],
      "tags": [
        "moving platform",
        "timeline",
        "lerp",
        "set actor location",
        "interpolation"
      ],
      "relatedLessons": [
        "timelines"
      ]
    },
    {
      "id": "epic-platform-delay",
      "title": "Moving Platform: Reverse + Wait Delay",
      "category": "world",
      "icon": "⏱",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 06: Moving Platforms",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-06-puzzles-moving-platforms-in-unreal-engine",
      "sourceSection": "Add a Wait Duration",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Adds a configurable WaitDuration before the platform changes direction, making a reusable back-and-forth platform loop.",
      "pasteInto": [
        "BP_Platform → Event Graph"
      ],
      "reconnect": [
        "Keep the existing TM_MovePlatform movement chain; the delay extends the Finished path."
      ],
      "prerequisites": [
        "TM_MovePlatform timeline",
        "WaitDuration float",
        "existing movement graph"
      ],
      "relatedTutorials": [
        "moving-platform",
        "countdown-timer"
      ],
      "tags": [
        "moving platform",
        "delay",
        "reverse",
        "timeline",
        "wait"
      ],
      "relatedLessons": [
        "timelines",
        "events"
      ]
    },
    {
      "id": "epic-platform-puzzle-paste",
      "title": "Moving Platform Puzzle: Paste the Platforms + Switches",
      "category": "world",
      "icon": "▦",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 06: Moving Platforms",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-06-puzzles-moving-platforms-in-unreal-engine",
      "sourceSection": "Build the Sample Puzzle",
      "pasteMode": "Level / viewport paste",
      "snippetSummary": "2 level / viewport paste blocks",
      "what": "Pastes Epic’s arranged platform and switch obstacles into the level so students can inspect a complete puzzle layout and its actor relationships.",
      "pasteInto": [
        "Level Editor viewport / Outliner"
      ],
      "reconnect": [
        "Reconnect each pasted platform to its matching TargetPoint.",
        "Check switch InteractObjectList references after pasting."
      ],
      "prerequisites": [
        "BP_Platform",
        "BP_Switch",
        "Target Points",
        "matching asset names / paths"
      ],
      "relatedTutorials": [
        "moving-platform",
        "pressure-plate"
      ],
      "tags": [
        "moving platform",
        "puzzle",
        "level paste",
        "switch",
        "target point"
      ],
      "relatedLessons": [
        "timelines",
        "collision"
      ]
    },
    {
      "id": "epic-trap-damage-loop",
      "title": "Trap Function: Damage Every Overlapping Target",
      "category": "combat",
      "icon": "🔥",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 07: Traps and Damage",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-07-traps-and-damage-in-unreal-engine",
      "sourceSection": "Create a Function to Apply Damage",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint function snippet",
      "what": "Builds fnApplyDamageToTargets: check Active, loop overlapping actors, and Apply Damage using the trap’s BaseDamage value.",
      "pasteInto": [
        "BP_TrapBase → fnApplyDamageToTargets function graph"
      ],
      "reconnect": [
        "Reconnect the function entry node to the Branch node after pasting."
      ],
      "prerequisites": [
        "BP_TrapBase",
        "Active bool",
        "BaseDamage",
        "TrapTrigger / overlap targets"
      ],
      "relatedTutorials": [
        "damage-zone",
        "player-health"
      ],
      "tags": [
        "trap",
        "damage",
        "apply damage",
        "for each loop",
        "overlap",
        "function"
      ],
      "relatedLessons": [
        "collision",
        "events"
      ]
    },
    {
      "id": "epic-hud-health-text",
      "title": "HUD Function: Update Health Text",
      "category": "ui",
      "icon": "♥",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 07: Traps and Damage",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-07-traps-and-damage-in-unreal-engine",
      "sourceSection": "Update the Player HUD — fnSetHP",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint function snippet",
      "what": "Creates a tiny reusable fnSetHP function that converts a numeric HP value to text and pushes it into the HUD text widget.",
      "pasteInto": [
        "WBP_PlayerHUD → fnSetHP function graph"
      ],
      "reconnect": [
        "Reconnect the function entry node to SetText and To Text after pasting."
      ],
      "prerequisites": [
        "WBP_PlayerHUD",
        "txtHP Text widget",
        "NewHP float input"
      ],
      "relatedTutorials": [
        "player-health",
        "health-bar",
        "basic-hud"
      ],
      "tags": [
        "health",
        "hud",
        "set text",
        "to text",
        "widget",
        "hp"
      ],
      "relatedLessons": [
        "ui",
        "variables"
      ]
    },
    {
      "id": "epic-player-damage-death",
      "title": "Player Damage + Game-Over Loop",
      "category": "combat",
      "icon": "☠",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 07: Traps and Damage",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-07-traps-and-damage-in-unreal-engine",
      "sourceSection": "Update Player HP / Handle Elimination",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Extends the player’s AnyDamage handling to update HP, disable input at zero health, show the eliminated screen, wait, then reload the level.",
      "pasteInto": [
        "BP_AdventureCharacter → Event Graph"
      ],
      "reconnect": [
        "Preserve the existing Event AnyDamage / Branch section Epic tells you to keep before inserting the new logic."
      ],
      "prerequisites": [
        "Health variable",
        "HUD reference",
        "WBP_EliminatedScreen",
        "player damage handling"
      ],
      "relatedTutorials": [
        "player-health",
        "lives-respawn",
        "win-lose-state"
      ],
      "tags": [
        "player health",
        "any damage",
        "game over",
        "disable input",
        "create widget",
        "open level"
      ],
      "relatedLessons": [
        "variables",
        "branches",
        "framework"
      ]
    },
    {
      "id": "epic-room2-trap-paste",
      "title": "Trap Room: Paste a Full Switch + Fire-Trap Puzzle",
      "category": "world",
      "icon": "🔥▦",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 07: Traps and Damage",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-07-traps-and-damage-in-unreal-engine",
      "sourceSection": "Room 2’s Switches, Traps, and Key",
      "pasteMode": "Level / viewport paste",
      "snippetSummary": "1 large level / viewport paste block",
      "what": "Pastes the tutorial’s Room 2 trap puzzle actors into the level, including switches, traps and a key, for deconstruction or rapid prototyping.",
      "pasteInto": [
        "Level Editor viewport / Outliner"
      ],
      "reconnect": [
        "Epic warns parent Blueprint assets, names and paths must match.",
        "Re-check each switch InteractObjectList and reconnect its labelled fire traps if needed."
      ],
      "prerequisites": [
        "matching BP_Switch / trap / key assets",
        "matching asset names and paths"
      ],
      "relatedTutorials": [
        "damage-zone",
        "pressure-plate"
      ],
      "tags": [
        "trap room",
        "fire trap",
        "switch",
        "key",
        "level paste",
        "puzzle"
      ],
      "relatedLessons": [
        "collision",
        "events"
      ]
    },
    {
      "id": "epic-enemy-beginplay",
      "title": "Enemy Initialise: Speed, HP + Player Reference",
      "category": "ai",
      "icon": "◉",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 08: Create an Enemy",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-08-create-an-enemy-in-unreal-engine",
      "sourceSection": "Final Event BeginPlay logic",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Initialises the enemy’s movement speed and CurrentHP, then stores the player character reference ready for later detection and attack logic.",
      "pasteInto": [
        "BP_Enemy → Event Graph"
      ],
      "reconnect": [
        "Keep variable names aligned with Epic’s sample before pasting."
      ],
      "prerequisites": [
        "BP_Enemy",
        "MaxSpeed",
        "TotalHP",
        "CurrentHP",
        "PlayerRef"
      ],
      "relatedTutorials": [
        "ai-chase",
        "enemy-health"
      ],
      "tags": [
        "enemy",
        "begin play",
        "player reference",
        "health",
        "movement speed"
      ],
      "relatedLessons": [
        "ai",
        "events"
      ]
    },
    {
      "id": "epic-enemy-contact-damage",
      "title": "Enemy Contact Attack: Damage Once + Self-Destruct",
      "category": "combat",
      "icon": "💥",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 08: Create an Enemy",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-08-create-an-enemy-in-unreal-engine",
      "sourceSection": "Deal Damage to the Player",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Checks CapsuleComponent hits against PlayerRef, applies one hit of damage, marks the enemy eliminated and removes it after the attack.",
      "pasteInto": [
        "BP_Enemy → Event Graph"
      ],
      "reconnect": [
        "Create the BaseDamage and Eliminated variables first so the pasted references resolve."
      ],
      "prerequisites": [
        "BP_Enemy",
        "PlayerRef",
        "BaseDamage",
        "Eliminated"
      ],
      "relatedTutorials": [
        "ai-attack-range",
        "player-health"
      ],
      "tags": [
        "enemy",
        "attack",
        "apply damage",
        "component hit",
        "do once",
        "destroy actor"
      ],
      "relatedLessons": [
        "ai",
        "collision"
      ]
    },
    {
      "id": "epic-enemy-find-player",
      "title": "Enemy Detection: Line Trace + Distance Check",
      "category": "ai",
      "icon": "👁",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 08: Create an Enemy",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-08-create-an-enemy-in-unreal-engine",
      "sourceSection": "Find the Player — fnBPLFindPlayer",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 large Blueprint function snippet",
      "what": "Uses a line trace, Hit Actor comparison and distance test to return whether the player is visible and close enough to be considered found.",
      "pasteInto": [
        "BPL_FPGame → fnBPLFindPlayer function graph"
      ],
      "reconnect": [
        "Reconnect the function entry Exec and Player Reference pins to the Is Valid node.",
        "Function input names need to match Epic’s sample for clipboard references to resolve cleanly."
      ],
      "prerequisites": [
        "BPL_FPGame",
        "Player Reference input",
        "Max Detection Distance input",
        "Debug input"
      ],
      "relatedTutorials": [
        "ai-chase",
        "ai-perception",
        "line-trace-interact"
      ],
      "tags": [
        "enemy",
        "ai",
        "line trace",
        "distance",
        "line of sight",
        "detection",
        "debug"
      ],
      "relatedLessons": [
        "ai",
        "traces"
      ]
    },
    {
      "id": "epic-enemy-move-to-player",
      "title": "Enemy Movement: AI Move To Player",
      "category": "ai",
      "icon": "➜",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 08: Create an Enemy",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-08-create-an-enemy-in-unreal-engine",
      "sourceSection": "MoveToPlayer logic",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint graph snippet",
      "what": "Packages the enemy’s move-to-player behaviour so the AI moves towards PlayerRef while respecting the Found state and movement settings.",
      "pasteInto": [
        "BP_Enemy → MoveToPlayer logic / Event Graph"
      ],
      "reconnect": [
        "Keep PlayerRef and Found variable names aligned with Epic’s sample."
      ],
      "prerequisites": [
        "BP_Enemy",
        "PlayerRef",
        "Found",
        "Nav Mesh Bounds Volume"
      ],
      "relatedTutorials": [
        "ai-chase",
        "ai-attack-range"
      ],
      "tags": [
        "enemy",
        "ai move to",
        "navmesh",
        "move to player",
        "chase"
      ],
      "relatedLessons": [
        "ai"
      ]
    },
    {
      "id": "epic-enemy-chase-tick",
      "title": "Enemy Chase Controller: Detect → Move / Stop",
      "category": "ai",
      "icon": "↻",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 08: Create an Enemy",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-08-create-an-enemy-in-unreal-engine",
      "sourceSection": "Final Event Tick logic",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Runs player detection each frame, promotes the Found result, sets Max Walk Speed and only calls MoveToPlayer while the player is detected.",
      "pasteInto": [
        "BP_Enemy → Event Graph"
      ],
      "reconnect": [
        "Keep the MaxSpeed, Found and movement component references named as expected by Epic."
      ],
      "prerequisites": [
        "BP_Enemy",
        "fnBPLFindPlayer",
        "Found",
        "MaxSpeed",
        "Character Movement"
      ],
      "relatedTutorials": [
        "ai-chase",
        "ai-perception"
      ],
      "tags": [
        "enemy",
        "event tick",
        "found",
        "max walk speed",
        "chase",
        "detection"
      ],
      "relatedLessons": [
        "ai",
        "branches"
      ]
    },
    {
      "id": "epic-enemy-receive-damage",
      "title": "Enemy Health: AnyDamage → HP → Eliminate",
      "category": "combat",
      "icon": "♥",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 08: Create an Enemy",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-08-create-an-enemy-in-unreal-engine",
      "sourceSection": "Allow Enemies to Receive Damage",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 Blueprint Event Graph snippet",
      "what": "Subtracts Event AnyDamage from CurrentHP, checks for zero health, marks the enemy eliminated, delays, then destroys the actor.",
      "pasteInto": [
        "BP_Enemy → Event Graph"
      ],
      "reconnect": [
        "Create CurrentHP and Eliminated exactly as described before pasting."
      ],
      "prerequisites": [
        "BP_Enemy",
        "CurrentHP",
        "Eliminated"
      ],
      "relatedTutorials": [
        "enemy-health"
      ],
      "tags": [
        "enemy health",
        "any damage",
        "subtract",
        "branch",
        "destroy actor",
        "delay"
      ],
      "relatedLessons": [
        "ai",
        "variables"
      ]
    },
    {
      "id": "epic-level-transition",
      "title": "Win Condition: Keys → Win Screen → Next Level",
      "category": "flow",
      "icon": "🏁",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 10: Complete the Level",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-10-complete-the-level-in-unreal-engine",
      "sourceSection": "Final BP_LevelTransition EventGraph",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 large Blueprint Event Graph snippet",
      "what": "Checks overlap, verifies the required keys, disables player input, displays the win screen, delays and opens the configured next level.",
      "pasteInto": [
        "BP_LevelTransition → Event Graph"
      ],
      "reconnect": [
        "Create the variables/components described immediately before the final graph so the pasted references have matching targets."
      ],
      "prerequisites": [
        "BP_LevelTransition",
        "WBP_WinScreen",
        "RequiredKeys / HeldKeys",
        "NextLevel",
        "LevelLoadDelay"
      ],
      "relatedTutorials": [
        "win-lose-state",
        "objective-text",
        "gameinstance-state"
      ],
      "tags": [
        "win",
        "level complete",
        "open level",
        "widget",
        "disable input",
        "keys",
        "game flow"
      ],
      "relatedLessons": [
        "framework",
        "ui"
      ]
    },
    {
      "id": "epic-end-platform-paste",
      "title": "End Platform: Instant Greybox + Jump-Pad Area",
      "category": "world",
      "icon": "▦",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 10: Complete the Level",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-10-complete-the-level-in-unreal-engine",
      "sourceSection": "Build the end-of-level platform",
      "pasteMode": "Level / viewport paste",
      "snippetSummary": "1 level / viewport paste block",
      "what": "Pastes Epic’s raised end platform blockout so students can focus on the completion loop and jump-pad tuning instead of manually placing the greybox pieces.",
      "pasteInto": [
        "Level Editor viewport / Outliner"
      ],
      "reconnect": [
        "Make the viewport / Outliner active before pasting.",
        "Add and tune BP_JumpPad separately as described by Epic."
      ],
      "prerequisites": [
        "LevelPrototyping meshes",
        "BP_JumpPad for the follow-up stage"
      ],
      "relatedTutorials": [
        "win-lose-state"
      ],
      "tags": [
        "level complete",
        "platform",
        "jump pad",
        "blockout",
        "level paste"
      ],
      "relatedLessons": [
        "editor",
        "timelines"
      ]
    },
    {
      "id": "epic-cube-spawner",
      "title": "Spawner: Limit Count + Destroy Oldest + Cooldown",
      "category": "world",
      "icon": "📦",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Designer 11: Spawn New Cubes",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-11-spawn-new-cubes-mechanic-in-unreal-engine",
      "sourceSection": "Complete BP_CubeSpawn graph",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 complete Blueprint Event Graph snippet",
      "what": "Combines max-count checking, oldest-actor cleanup, Spawn Actor from Class, stored references and a cooldown timer into one reusable spawner.",
      "pasteInto": [
        "BP_CubeSpawn → Event Graph"
      ],
      "reconnect": [
        "Build the variables and BPI_Interaction setup described by Epic before using the finished graph snippet."
      ],
      "prerequisites": [
        "BP_CubeSpawn",
        "BP_Cube",
        "BPI_Interaction",
        "SpawnedCubes array / limit variables"
      ],
      "relatedTutorials": [
        "spawn-destroy",
        "random-spawner",
        "countdown-timer"
      ],
      "tags": [
        "spawn",
        "destroy actor",
        "array",
        "cooldown",
        "max count",
        "spawner",
        "interface"
      ],
      "relatedLessons": [
        "events",
        "functions"
      ]
    },
    {
      "id": "epic-anim-eventgraph-state-flags",
      "title": "Anim Blueprint: Update Running + Falling State",
      "category": "animation",
      "icon": "◆",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Adding Character Animation",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/adding-character-animation-in-unreal-engine",
      "sourceSection": "4.2 — Setting up your Event Graph",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 complete Animation Blueprint Event Graph paste block",
      "what": "Builds the animation update chain that gets the owning pawn, casts to Character, reads movement mode and velocity, then updates IsFalling and IsRunning every animation tick.",
      "pasteInto": [
        "Arms_AnimBP → EventGraph"
      ],
      "reconnect": [
        "Create the IsRunning and IsFalling Boolean variables first.",
        "Use an Animation Blueprint based on the matching character skeleton, as Epic sets up immediately before this section."
      ],
      "prerequisites": [
        "Animation Blueprint",
        "IsRunning Boolean",
        "IsFalling Boolean",
        "Character using CharacterMovement"
      ],
      "relatedTutorials": [],
      "tags": [
        "animation blueprint",
        "anim bp",
        "event graph",
        "is running",
        "is falling",
        "velocity",
        "movement mode",
        "state machine"
      ],
      "relatedLessons": [
        "animation"
      ]
    },
    {
      "id": "epic-anim-idle-run-transitions",
      "title": "Anim State Machine: Idle ↔ Run Rules",
      "category": "animation",
      "icon": "↔",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Adding Character Animation",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/adding-character-animation-in-unreal-engine",
      "sourceSection": "4.4.1 — Add Idle to/from Run Transitions",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "2 transition-rule Blueprint paste blocks",
      "what": "Uses IsRunning directly for Idle → Run and NOT IsRunning for Run → Idle, giving students both directions of a basic locomotion transition.",
      "pasteInto": [
        "Arms_AnimBP → Idle to Run transition rule",
        "Arms_AnimBP → Run to Idle transition rule"
      ],
      "reconnect": [
        "Create the Idle and Run states and their transition arrows first.",
        "Make sure IsRunning is being updated in the Animation Blueprint Event Graph."
      ],
      "prerequisites": [
        "Arms State Machine",
        "Idle state",
        "Run state",
        "IsRunning Boolean"
      ],
      "relatedTutorials": [],
      "tags": [
        "animation",
        "state machine",
        "idle",
        "run",
        "transition",
        "isrunning",
        "not boolean"
      ],
      "relatedLessons": [
        "animation"
      ]
    },
    {
      "id": "epic-anim-idle-jumpstart",
      "title": "Anim Transition: Idle → Jump Start",
      "category": "animation",
      "icon": "↗",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Adding Character Animation",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/adding-character-animation-in-unreal-engine",
      "sourceSection": "4.4.2 — Add Idle to Jump Start Transition",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 transition-rule Blueprint paste block",
      "what": "Uses IsFalling as the Can Enter Transition rule for moving from Idle into JumpStart.",
      "pasteInto": [
        "Arms_AnimBP → Idle to JumpStart transition rule"
      ],
      "reconnect": [
        "Create the Idle and JumpStart states and transition arrow first.",
        "Make sure IsFalling is being updated in the Animation Blueprint Event Graph."
      ],
      "prerequisites": [
        "Arms State Machine",
        "Idle state",
        "JumpStart state",
        "IsFalling Boolean"
      ],
      "relatedTutorials": [],
      "tags": [
        "animation",
        "jump",
        "idle",
        "jump start",
        "transition",
        "isfalling"
      ],
      "relatedLessons": [
        "animation"
      ]
    },
    {
      "id": "epic-anim-run-jumpstart",
      "title": "Anim Transition: Run → Jump Start",
      "category": "animation",
      "icon": "↗",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Adding Character Animation",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/adding-character-animation-in-unreal-engine",
      "sourceSection": "4.4.3 — Add Run to Jump Start Transition",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 transition-rule Blueprint paste block",
      "what": "Uses IsFalling as the Can Enter Transition rule for moving from Run into JumpStart.",
      "pasteInto": [
        "Arms_AnimBP → Run to JumpStart transition rule"
      ],
      "reconnect": [
        "Create the Run and JumpStart states and transition arrow first.",
        "Make sure IsFalling is being updated in the Animation Blueprint Event Graph."
      ],
      "prerequisites": [
        "Arms State Machine",
        "Run state",
        "JumpStart state",
        "IsFalling Boolean"
      ],
      "relatedTutorials": [],
      "tags": [
        "animation",
        "jump",
        "run",
        "jump start",
        "transition",
        "isfalling"
      ],
      "relatedLessons": [
        "animation"
      ]
    },
    {
      "id": "epic-anim-jumpstart-loop",
      "title": "Anim Transition: Jump Start → Jump Loop",
      "category": "animation",
      "icon": "⟳",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Adding Character Animation",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/adding-character-animation-in-unreal-engine",
      "sourceSection": "4.4.4 — Add Jump Start to Jump Loop Transition",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 transition-rule Blueprint paste block",
      "what": "Uses Time Remaining on the JumpStart animation and a ≤ 0.1 comparison to move cleanly into the looping airborne animation.",
      "pasteInto": [
        "Arms_AnimBP → JumpStart to JumpLoop transition rule"
      ],
      "reconnect": [
        "The JumpStart state must use the FPP_JumpStart sequence so the Time Remaining getter can resolve correctly."
      ],
      "prerequisites": [
        "JumpStart state",
        "JumpLoop state",
        "FPP_JumpStart sequence player"
      ],
      "relatedTutorials": [],
      "tags": [
        "animation",
        "jump",
        "time remaining",
        "jump loop",
        "transition",
        "state machine"
      ],
      "relatedLessons": [
        "animation"
      ]
    },
    {
      "id": "epic-anim-jumploop-end",
      "title": "Anim Transition: Jump Loop → Jump End",
      "category": "animation",
      "icon": "↓",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Adding Character Animation",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/adding-character-animation-in-unreal-engine",
      "sourceSection": "4.4.5 — Add Jump Loop to Jump End Transition",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 transition-rule Blueprint paste block",
      "what": "Uses NOT IsFalling to detect landing and leave the airborne loop for the landing animation.",
      "pasteInto": [
        "Arms_AnimBP → JumpLoop to JumpEnd transition rule"
      ],
      "reconnect": [
        "Make sure IsFalling is being updated in the Animation Blueprint Event Graph."
      ],
      "prerequisites": [
        "JumpLoop state",
        "JumpEnd state",
        "IsFalling Boolean"
      ],
      "relatedTutorials": [],
      "tags": [
        "animation",
        "jump loop",
        "landing",
        "jump end",
        "not boolean",
        "isfalling",
        "transition"
      ],
      "relatedLessons": [
        "animation"
      ]
    },
    {
      "id": "epic-anim-jumpend-idle",
      "title": "Anim Transition: Jump End → Idle",
      "category": "animation",
      "icon": "⌛",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Adding Character Animation",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/adding-character-animation-in-unreal-engine",
      "sourceSection": "4.4.6 — Add Jump End to Idle Transition",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 transition-rule Blueprint paste block",
      "what": "Uses Time Remaining on the JumpEnd animation and a ≤ 0.1 comparison to return to Idle after the landing animation finishes.",
      "pasteInto": [
        "Arms_AnimBP → JumpEnd to Idle transition rule"
      ],
      "reconnect": [
        "The JumpEnd state must use the FPP_JumpEnd sequence so the Time Remaining getter can resolve correctly."
      ],
      "prerequisites": [
        "JumpEnd state",
        "Idle state",
        "FPP_JumpEnd sequence player"
      ],
      "relatedTutorials": [],
      "tags": [
        "animation",
        "landing",
        "jump end",
        "idle",
        "time remaining",
        "transition"
      ],
      "relatedLessons": [
        "animation"
      ]
    },
    {
      "id": "epic-energy-check-macro",
      "title": "Reusable Energy / Stamina Gate Macro",
      "category": "flow",
      "icon": "⚡",
      "sourceVersion": "5.8",
      "sourceTitle": "Epic — Making Macros",
      "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/making-macros-in-unreal-engine",
      "sourceSection": "Creating Macros — EnergyCheck",
      "pasteMode": "Blueprint graph",
      "snippetSummary": "1 finished macro graph plus an earlier macro-tunnel/Branch paste block",
      "what": "Creates a reusable EnergyCheck gate: test Energy, subtract a cost when available, route HasEnergy / NoEnergy exec outputs and give feedback. It is a clean base for stamina-limited jump, sprint or dash mechanics.",
      "pasteInto": [
        "BP_ThirdPersonCharacter → EnergyCheck Macro graph"
      ],
      "reconnect": [
        "Create the Energy float and the BeginCheck / HasEnergy / NoEnergy exec pins first, following Epic’s setup.",
        "Wire the EnergyCheck macro into the action you want to gate after pasting; Epic demonstrates it on Jump."
      ],
      "prerequisites": [
        "Character Blueprint",
        "Energy float",
        "EnergyCheck Macro",
        "BeginCheck / HasEnergy / NoEnergy exec pins"
      ],
      "relatedTutorials": [
        "sprint",
        "dash",
        "double-jump"
      ],
      "tags": [
        "macro",
        "energy",
        "stamina",
        "resource",
        "branch",
        "jump",
        "sprint",
        "dash",
        "reusable logic"
      ],
      "relatedLessons": [
        "functions",
        "variables"
      ]
    }
  ]
};
