window.UE5_PROJECT_DATA = {
  "id": "signal-lost",
  "title": "Signal Lost",
  "subtitle": "Build one complete 3D game while learning UE5",
  "premise": "The player wakes inside a failed research facility. Power is down, access routes are locked and something is still moving through the complex. Restore systems, navigate secured areas, survive the threat and reach the extraction point.",
  "coreLoop": [
    "Explore",
    "Read the environment",
    "Interact",
    "Unlock progress",
    "Avoid or overcome threats",
    "Reach the next sector"
  ],
  "themes": [
    "Abandoned research facility",
    "Horror house",
    "Sci-fi station",
    "Fantasy dungeon",
    "Secret military base",
    "Museum / heist",
    "Ruined city",
    "Custom theme"
  ],
  "rules": [
    "Every student builds the same technical spine but can change theme, art and presentation.",
    "A mechanic is not complete until it works inside the student's main game map.",
    "Students should reuse Blueprint Classes rather than duplicate one-off versions.",
    "Each milestone ends with a playable checkpoint build.",
    "The final game needs a beginning, objective, complication and conclusion."
  ],
  "milestones": [
    {
      "id": "m1",
      "title": "Milestone 1 — Playable Space",
      "short": "Build the world and reusable objects.",
      "goal": "A player can explore a small organised greybox containing reusable Blueprint objects.",
      "lessons": [
        "editor",
        "actors-components",
        "blueprint-classes"
      ]
    },
    {
      "id": "m2",
      "title": "Milestone 2 — Interaction & Access",
      "short": "Make the world respond to the player.",
      "goal": "The player can detect, interact with and unlock progression through reusable systems.",
      "lessons": [
        "events",
        "variables",
        "branches",
        "references-casting",
        "interfaces-dispatchers",
        "collision",
        "traces",
        "timelines"
      ]
    },
    {
      "id": "m3",
      "title": "Milestone 3 — Game Rules & Feedback",
      "short": "Turn mechanics into a game loop.",
      "goal": "The game has clear rules, reusable logic, HUD feedback and checkpoint persistence.",
      "lessons": [
        "functions",
        "framework",
        "ui",
        "savegame"
      ]
    },
    {
      "id": "m4",
      "title": "Milestone 4 — Threat",
      "short": "Add something that changes how the player moves through the level.",
      "goal": "A threat can navigate, change state and communicate its behaviour visually.",
      "lessons": [
        "ai",
        "animation"
      ]
    },
    {
      "id": "m5",
      "title": "Milestone 5 — Data & Expansion",
      "short": "Make the project easier to extend.",
      "goal": "Repeated content is data-driven rather than built from numbered variables and duplicated Blueprints.",
      "lessons": [
        "data"
      ]
    },
    {
      "id": "m6",
      "title": "Milestone 6 — Refactor & Final Build",
      "short": "Make it presentable and maintainable.",
      "goal": "The final game is playable end-to-end and the Blueprint architecture can be understood by another developer.",
      "lessons": [
        "practice",
        "complexity"
      ]
    }
  ],
  "mechanics": {
    "editor": {
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
    "actors-components": {
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
    "blueprint-classes": {
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
    "events": {
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
    "variables": {
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
    "branches": {
      "name": "Access Rules",
      "mission": "Use state to control progression.",
      "build": "Create a route that only opens when a condition is satisfied: security card, restored power, completed objective or another theme-appropriate requirement.",
      "proof": [
        "True and False paths both tested",
        "Clear failure feedback",
        "Condition uses stored state",
        "Progression changes after requirement is met"
      ],
      "polish": "Require two conditions for one higher-security route."
    },
    "references-casting": {
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
    "interfaces-dispatchers": {
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
    "collision": {
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
    "traces": {
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
    "timelines": {
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
    "functions": {
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
    "framework": {
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
    "ui": {
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
    "savegame": {
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
    "ai": {
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
    "animation": {
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
    "data": {
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
    "practice": {
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
    "complexity": {
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
  },
  "version": "3.3.0"
};
