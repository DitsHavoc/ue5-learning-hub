window.UE5_DATA = {
  paths: [
    {
      id: "foundations",
      title: "Unreal Foundations",
      icon: "◫",
      colour: "rgba(78,230,216,.12)",
      description: "Navigate Unreal confidently and understand the objects that make up a project."
    },
    {
      id: "blueprints",
      title: "Blueprint Fundamentals",
      icon: "◇",
      colour: "rgba(44,156,255,.13)",
      description: "Learn visual scripting properly: events, variables, decisions and reusable logic."
    },
    {
      id: "gameplay",
      title: "Gameplay Systems",
      icon: "⚙",
      colour: "rgba(159,121,255,.13)",
      description: "Turn Blueprint knowledge into interactions, doors, traces and working game systems."
    },
    {
      id: "practice",
      title: "Professional Practice",
      icon: "✓",
      colour: "rgba(255,155,70,.12)",
      description: "Make Blueprints readable, reusable and less likely to become terrifying spaghetti."
    }
  ],

  lessons: [
    {
      id: "ue5-interface",
      path: "foundations",
      order: 1,
      title: "Know Your Unreal Editor",
      short: "Viewport, Content Drawer, Outliner, Details and the tools you use every lesson.",
      difficulty: "Beginner",
      duration: "25 min",
      xp: 100,
      icon: "◫",
      aim: "Understand the main areas of the Unreal Engine 5 Level Editor and use them confidently.",
      intro: "Before building game mechanics, you need to know where things live. This lesson focuses on the editor areas you will constantly use rather than trying to memorise every button.",
      goals: [
        "Navigate the Viewport using mouse and keyboard",
        "Explain what the Content Drawer is used for",
        "Use the Outliner to find Actors in a level",
        "Edit an Actor using the Details panel"
      ],
      concepts: [
        {name:"Viewport", text:"The main view of your level. This is where you position and inspect Actors."},
        {name:"Content Drawer", text:"Where project assets such as Blueprints, meshes, materials and textures are organised."},
        {name:"Outliner", text:"A searchable list of the Actors currently placed in the level."},
        {name:"Details", text:"Shows editable properties for the currently selected object."}
      ],
      guided: [
        "Open a Third Person project and identify the Viewport, Outliner, Details panel and Content Drawer.",
        "Move around the level using right mouse button + WASD. Practise orbiting and framing selected Actors.",
        "Place three different Static Mesh Actors into the level.",
        "Rename them clearly in the Outliner.",
        "Change the Location, Rotation and Scale of one Actor using the Details panel.",
        "Create a folder in the Content Drawer called Learning and save your work."
      ],
      quickCheck: [
        {q:"Where would you look for a Static Mesh asset stored in your project?", options:["Outliner","Content Drawer","World Settings","Output Log"], answer:1, feedback:"Assets are managed in the Content Drawer / Content Browser."},
        {q:"What does the Outliner primarily show?", options:["Every asset in the project","Actors currently in the level","Blueprint variables","Project settings"], answer:1, feedback:"The Outliner lists objects placed in the current level."}
      ],
      stretch: {
        title:"Work Faster",
        task:"Organise a deliberately messy mini-level.",
        requirements:["Create at least two Outliner folders","Rename five Actors clearly","Use duplicate, move, rotate and scale shortcuts","Keep related assets together in your Content Drawer"]
      },
      challenge: {
        title:"Editor Navigation Speed Run",
        task:"Recreate a simple blockout shown by your teacher without asking where any editor panel or transform control is.",
        requirements:["Use at least 8 Actors","Use all three transforms","Organise the Outliner","Finish with sensible asset names"],
        hints:["F focuses the selected Actor in many editor views.","Think about whether repeated objects should be duplicated rather than placed from scratch."]
      },
      experience: {
        game:"Portal 2",
        focus:"Environmental readability",
        play:"Play 15–20 minutes of an early test chamber and pay attention to how the space guides you.",
        watch:"Watch an early Portal 2 test chamber walkthrough on YouTube.",
        observe:["What makes important objects stand out?","How does the level guide your eye?","Which objects appear reusable or repeated?"],
        search:"Portal 2 early test chamber walkthrough"
      },
      homework: {
        title:"Read a Level Like a Developer",
        task:"Play or watch 15 minutes of a 3D game. Pick one room or small area and list the separate objects you think a level designer would need to place to build it.",
        evidence:"A screenshot plus a labelled list of at least 8 likely Actors/assets.",
        stretch:"Group your list into environment, lighting, gameplay and decoration."
      },
      common: [
        "Lost in the Viewport? Select an Actor in the Outliner and focus it.",
        "Can't find an asset? Check which folder is selected in the Content Drawer and use search.",
        "Changed the wrong thing? Make sure the intended Actor is selected before editing Details."
      ],
            goodPractice:"Name things as soon as their purpose becomes clear. 'Cube_74' tells the next developer nothing.",
      media: {
        type: "image",
        src: "assets/book-temp/ue5-interface-page-26.png",
        alt: "Temporary textbook reference image showing the Unreal Engine Level Editor and its key panels.",
        caption: "Temporary textbook reference: Level Editor overview from the uploaded UE5 Blueprint book, used here as a placement visual while we build our own replacement screenshots."
      }
    },

    {
      id: "actors-components",
      path: "foundations",
      order: 2,
      title: "Actors & Components",
      short: "Understand the building blocks behind objects placed in an Unreal level.",
      difficulty: "Beginner",
      duration: "30 min",
      xp: 120,
      icon: "⬡",
      aim: "Understand the relationship between Actors and Components in Unreal Engine.",
      intro: "An Actor is something that can exist in a level. Components give an Actor abilities or pieces: a mesh to see, a collision shape to overlap, a light to emit light or a camera to view through.",
      goals: [
        "Explain what an Actor is",
        "Explain what a Component is",
        "Add Components to a Blueprint Actor",
        "Change Component properties in the Details panel"
      ],
      concepts: [
        {name:"Actor", text:"An object that can be placed or spawned in a level."},
        {name:"Component", text:"A reusable piece of functionality attached to an Actor."},
        {name:"Scene Component", text:"A Component with a transform, so it can have a location, rotation and scale."},
        {name:"Root Component", text:"The top Component in the hierarchy; child Components transform relative to it."}
      ],
      guided: [
        "Create a new Actor Blueprint called BP_PracticeBeacon.",
        "Add a Static Mesh Component and choose a simple mesh.",
        "Add a Point Light Component and position it above the mesh.",
        "Add a Box Collision Component and resize it around the object.",
        "Move the mesh and light to see how the Component hierarchy affects transforms.",
        "Compile, place the Blueprint in the level and edit its exposed properties."
      ],
      quickCheck: [
        {q:"Which statement is most accurate?", options:["Every Component is a separate level","Components are pieces that make up or extend an Actor","Actors only exist inside Blueprints","A Static Mesh cannot be a Component"], answer:1, feedback:"Components add functionality or representation to an Actor."},
        {q:"Why does the Root Component matter?", options:["It stores all game saves","Child Scene Components transform relative to it","It is always a camera","It can only be created in C++"], answer:1, feedback:"The hierarchy affects how child Components move with their parent."}
      ],
      stretch: {
        title:"Build a Better Beacon",
        task:"Extend BP_PracticeBeacon without adding any Blueprint logic.",
        requirements:["Add a second visible Component","Add an Audio Component","Create a clear Component hierarchy","Make the result readable in the Blueprint Viewport"]
      },
      challenge: {
        title:"Component-Only Prop",
        task:"Create a useful game prop using only Components. No Event Graph logic allowed.",
        requirements:["At least four Components","At least one collision Component","Clear hierarchy","Object must have an obvious game purpose"],
        hints:["A checkpoint marker, security camera, warning light or pickup stand can all be assembled from Components."]
      },
      experience: {
        game:"Half-Life 2",
        focus:"Interactive props",
        play:"Play a physics-heavy area and identify objects that feel like complete game Actors.",
        watch:"Watch Half-Life 2 physics interaction gameplay on YouTube.",
        observe:["Which objects have visible meshes plus collision?","Which props also make sounds or emit light?","Which objects seem to have multiple pieces moving together?"],
        search:"Half-Life 2 physics objects gameplay"
      },
      homework: {
        title:"Actor Autopsy",
        task:"Choose one interactive object from any game and break it down into the Unreal Components you think could be used to recreate it.",
        evidence:"A labelled sketch or slide naming at least four Components and what each one does.",
        stretch:"Mark which Component you would make the Root and explain why."
      },
      common:["If a Component moves strangely, inspect the hierarchy.","If you cannot see a Component in the level, check visibility and transform.","Compile after structural Blueprint changes."],
            goodPractice:"Give Components names that describe their role: DoorMesh, InteractionBox, AlarmLight—not StaticMesh2.",
      media: {
        type: "image",
        src: "assets/book-temp/actors-components-page-33.png",
        alt: "Temporary textbook reference image showing the Components panel and My Blueprint panel.",
        caption: "Temporary textbook reference: Components and My Blueprint panel visual used as a lesson placeholder."
      }
    },

    {
      id: "blueprint-classes",
      path: "blueprints",
      order: 1,
      title: "Blueprint Classes",
      short: "Create reusable objects instead of stuffing everything into the Level Blueprint.",
      difficulty: "Beginner",
      duration: "30 min",
      xp: 120,
      icon: "◇",
      aim: "Create a reusable Blueprint Class and understand why reusable Actors are preferable to level-specific logic.",
      intro: "Blueprint is both Unreal's visual scripting system and a way to create reusable game objects. A Blueprint Class can be placed in different levels and reused many times.",
      goals: [
        "Create an Actor Blueprint Class",
        "Identify the Blueprint Viewport and Event Graph",
        "Compile and save a Blueprint",
        "Place multiple instances of a Blueprint in a level"
      ],
      concepts: [
        {name:"Class", text:"A reusable definition or template for a type of object."},
        {name:"Instance", text:"A particular copy of that class placed or spawned in the game."},
        {name:"Event Graph", text:"Where gameplay events and actions are connected visually."},
        {name:"Compile", text:"Checks and prepares Blueprint changes so Unreal can execute them."}
      ],
      guided: [
        "Create an Actor Blueprint named BP_ColourBlock.",
        "Add a Static Mesh Component and select a cube.",
        "Compile and save the Blueprint.",
        "Place three instances into the level.",
        "Change each instance's transform without changing the Blueprint Class.",
        "Return to the Class, make one visible change, compile, and observe how the instances update."
      ],
      quickCheck: [
        {q:"What is the best description of a Blueprint Class?", options:["A single object that can never be copied","A reusable definition used to create instances","A folder for textures","A type of level"], answer:1, feedback:"A Class defines something reusable; instances are individual uses of it."},
        {q:"Why compile a Blueprint?", options:["To delete it","To apply/check script changes for execution","To package the entire game","To rename the project"], answer:1, feedback:"Compile checks/prepares the Blueprint after changes."}
      ],
      stretch: {
        title:"Expose a Choice",
        task:"Add an editable variable that lets each instance use a different value.",
        requirements:["Create one Instance Editable variable","Give it a Tooltip","Change the value on three placed instances","Explain Class default vs instance value"]
      },
      challenge: {
        title:"One Class, Many Uses",
        task:"Design one Blueprint Class that can create at least three visibly different instances without duplicating the Blueprint asset.",
        requirements:["Only one Blueprint Class","At least three placed instances","Use exposed variables","Clear naming"],
        hints:["Think about scale, materials, lights or other editable properties."]
      },
      experience: {
        game:"Super Mario Bros. Wonder",
        focus:"Reusable object types",
        play:"Play a level and look for repeated object types that behave consistently.",
        watch:"Watch a level walkthrough and identify repeated interactive objects.",
        observe:["Which objects are clearly multiple instances of the same type?","Which properties might differ per instance?","What behaviour stays consistent?"],
        search:"Super Mario Bros Wonder level gameplay"
      },
      homework: {
        title:"Spot the Class",
        task:"Find five repeated object types in a game you play or watch. For each, write what would belong in the shared Class and what could vary per instance.",
        evidence:"A five-row table or annotated screenshots.",
        stretch:"Pick one and suggest three Instance Editable variables."
      },
      common:["If placed copies do not update, make sure you edited the Class rather than only one instance.","If the Compile button shows an error, read the message before adding more nodes.","Avoid putting reusable object behaviour in the Level Blueprint."],
            goodPractice:"Reusable object behaviour belongs with the object wherever possible. Level Blueprint logic should be reserved for genuinely level-specific events.",
      media: {
        type: "image",
        src: "assets/book-temp/blueprint-classes-page-31.png",
        alt: "Temporary textbook reference image showing Blueprint Editor panels.",
        caption: "Temporary textbook reference: Blueprint Editor panel overview for the Blueprint Classes lesson."
      }
    },

    {
      id: "events-execution",
      path: "blueprints",
      order: 2,
      title: "Events & Execution",
      short: "Understand when Blueprint logic starts and how the white execution wire controls order.",
      difficulty: "Beginner",
      duration: "35 min",
      xp: 140,
      icon: "▶",
      aim: "Understand events, actions and Blueprint execution flow.",
      intro: "Blueprint logic does not magically run because nodes exist. An Event starts an execution path, and connected actions then run in order.",
      goals: [
        "Identify Events and execution pins",
        "Connect an Event to an action",
        "Trace execution order through a Blueprint",
        "Use Print String for simple testing"
      ],
      concepts: [
        {name:"Event", text:"Something that occurs and starts an execution path, such as BeginPlay or an overlap."},
        {name:"Execution Pin", text:"The white arrow-shaped pin used to control when actions execute."},
        {name:"Data Pin", text:"Carries values such as numbers, Booleans, vectors or object references."},
        {name:"Print String", text:"A simple debugging action that displays text while the game is running."}
      ],
      guided: [
        "Create BP_EventPractice.",
        "In the Event Graph, use Event BeginPlay.",
        "Connect BeginPlay to Print String and print 'Blueprint started'.",
        "Add a second Print String after the first and observe execution order.",
        "Disconnect the execution wire to the second action and test again.",
        "Add another suitable Event and compare when each one fires."
      ],
      quickCheck: [
        {q:"What usually starts a Blueprint execution path?", options:["A texture","An Event","A folder","A material slot"], answer:1, feedback:"Events are entry points that trigger gameplay logic."},
        {q:"A Print String node is connected by data but has no execution connection. What happens?", options:["It always runs","It runs once per frame","It will not execute from that path","Unreal crashes"], answer:2, feedback:"Actions need to be reached by an execution path."}
      ],
      stretch: {
        title:"Prove the Order",
        task:"Create a small execution chain that prints three messages in a deliberate order.",
        requirements:["Use at least one Event","Use three actions","Predict the order before testing","Change the order without deleting the nodes"]
      },
      challenge: {
        title:"What Fires When?",
        task:"Build a Blueprint that reports different messages when it begins play and when another gameplay event occurs.",
        requirements:["Two different Events","Clear Print String output","No Event Tick","Be able to explain why each message appears"],
        hints:["Choose events with visibly different triggers so you can test them independently."]
      },
      experience: {
        game:"Fortnite",
        focus:"Events and reactions",
        play:"Play a match and identify moments where a game system reacts to something happening.",
        watch:"Watch Fortnite gameplay and pause when a clear gameplay event causes a response.",
        observe:["What event occurred?","What actions followed?","Which reactions happened immediately and which were delayed?"],
        search:"Fortnite gameplay match"
      },
      homework: {
        title:"Event → Response",
        task:"Choose five moments from a game and write each as EVENT → RESPONSE. Example format: Player enters area → music changes.",
        evidence:"Five event-response pairs, with one expanded into a simple flow diagram.",
        stretch:"For one example, list the data the event might need to provide."
      },
      common:["Nodes without an execution path do not run just because they are visible.","Use Print String to prove whether an event is firing.","Avoid Event Tick unless the behaviour genuinely needs to update every frame."],
            goodPractice:"When debugging, follow the white execution wire from the Event forwards. Prove where execution stops before randomly changing nodes.",
      media: {
        type: "image",
        src: "assets/book-temp/events-execution-page-36.png",
        alt: "Temporary textbook reference image showing an Event Graph example.",
        caption: "Temporary textbook reference: Event Graph example used while we prepare custom classroom screenshots."
      }
    },

    {
      id: "variables",
      path: "blueprints",
      order: 3,
      title: "Variables: Let the Game Remember",
      short: "Store health, scores, states and references instead of hard-coding everything.",
      difficulty: "Beginner",
      duration: "40 min",
      xp: 150,
      icon: "x",
      aim: "Create, read and change Blueprint variables using suitable data types.",
      intro: "Games need memory. Health, ammo, whether a door is locked, a player's name and an Actor reference are all examples of values that can be stored in variables.",
      goals: [
        "Explain why variables are needed",
        "Choose appropriate variable types",
        "Get and Set a variable",
        "Change default and instance values"
      ],
      concepts: [
        {name:"Boolean", text:"True or false. Useful for states such as IsLocked or HasPower."},
        {name:"Integer", text:"A whole number, useful for counts such as ammo or score."},
        {name:"Float", text:"A number that can include decimals, useful for health, speed or timers."},
        {name:"Object Reference", text:"A reference to another Unreal object or Actor instance."}
      ],
      guided: [
        "Create BP_VariablePractice.",
        "Add a Float variable named Health with a default of 100.",
        "Add a Boolean variable named IsActive.",
        "On BeginPlay, Get Health and display it using Print String.",
        "Set Health to a different value and print it again.",
        "Make one variable Instance Editable, add a Tooltip, and test different values on placed instances."
      ],
      quickCheck: [
        {q:"Which type best stores whether a door is locked?", options:["Float","Boolean","Vector","Text"], answer:1, feedback:"A Boolean stores a true/false state."},
        {q:"Which type is the clearest choice for exactly 12 remaining bullets?", options:["Integer","Boolean","Transform","Material"], answer:0, feedback:"An Integer is designed for whole-number counts."},
        {q:"What is the difference between Get and Set?", options:["Get reads a value; Set changes it","Get deletes; Set compiles","They are identical","Set can only be used on strings"], answer:0, feedback:"Get reads the current value; Set assigns a new value."}
      ],
      stretch: {
        title:"Health With Limits",
        task:"Add MaxHealth and make sure Health never exceeds the maximum.",
        requirements:["Health variable","MaxHealth variable","Health can change","Final value cannot exceed MaxHealth"]
      },
      challenge: {
        title:"Reusable Healing Pickup",
        task:"Create a pickup that changes a player's health variable without being given the full node solution.",
        requirements:["Pickup has a HealAmount variable","HealAmount is editable per instance","Health cannot exceed MaxHealth","Pickup gives clear feedback when used"],
        hints:["First prove that the pickup detects the player.","Think about the value you want: CurrentHealth + HealAmount.","Unreal has functions that can constrain a number between a minimum and maximum."]
      },
      experience: {
        game:"Overwatch 2",
        focus:"Health as game state",
        play:"Play a hero and observe health, damage and healing behaviour.",
        watch:"Watch gameplay where a player takes damage and receives healing.",
        observe:["When does health change?","What prevents health exceeding its maximum?","How does the UI communicate the variable changing?"],
        search:"Overwatch 2 healing gameplay"
      },
      homework: {
        title:"Variable Hunt",
        task:"Play or watch any game and identify ten values the game needs to remember. Give each a sensible variable name and data type.",
        evidence:"Ten variable names, types and one-sentence reasons.",
        stretch:"Mark which values belong to the player, an individual Actor or the overall game."
      },
      common:["A Boolean is a state, not a number.","Use names that reveal purpose rather than Variable1.","If you expose variables to designers, add Tooltips and organise them clearly."],
            goodPractice:"Use meaningful variable names and categories. Instance Editable variables should explain their purpose with Tooltips.",
      media: {
        type: "image",
        src: "assets/book-temp/variables-page-58.png",
        alt: "Temporary textbook reference image from the functions/variables section of the book.",
        caption: "Temporary textbook reference: calculate-power example page, temporarily supporting discussion around variables and values."
      }
    },

    {
      id: "branches",
      path: "blueprints",
      order: 4,
      title: "Branches & Decisions",
      short: "Make gameplay choose what happens based on true/false conditions.",
      difficulty: "Beginner",
      duration: "35 min",
      xp: 150,
      icon: "⑂",
      aim: "Use Boolean conditions and Branch nodes to make gameplay decisions.",
      intro: "A Branch is the Blueprint equivalent of asking a yes/no question. Is the door locked? Is health greater than zero? Does the player have enough ammo?",
      goals: [
        "Create a Branch",
        "Connect a Boolean condition",
        "Predict True and False execution paths",
        "Combine variables and comparisons into decisions"
      ],
      concepts: [
        {name:"Condition", text:"The Boolean question evaluated by a Branch."},
        {name:"True Path", text:"Execution that continues if the condition is true."},
        {name:"False Path", text:"Execution that continues if the condition is false."},
        {name:"Comparison", text:"An operation such as >, < or == that produces a Boolean result."}
      ],
      guided: [
        "Create a Boolean variable named HasPower.",
        "On BeginPlay, connect execution to a Branch.",
        "Use HasPower as the Branch condition.",
        "Print 'Powered' on True and 'No Power' on False.",
        "Change the default value and test both outcomes.",
        "Replace the direct Boolean with a numerical comparison and predict the result before running."
      ],
      quickCheck: [
        {q:"What data type must a Branch condition resolve to?", options:["Boolean","Vector","Sound","Actor Class"], answer:0, feedback:"A Branch evaluates a true/false Boolean condition."},
        {q:"Health > 0 produces what kind of value?", options:["String","Boolean","Material","Transform"], answer:1, feedback:"A comparison such as > returns true or false."}
      ],
      stretch: {
        title:"Two Conditions",
        task:"Extend a decision so an action requires two things to be true.",
        requirements:["Use two separate pieces of state","Both must matter","Give feedback for failure","Explain the final condition"]
      },
      challenge: {
        title:"Locked Door Logic",
        task:"Create the decision logic for a door that can open only when the player has a key.",
        requirements:["Door has a locked state","Player needs a key state","Successful and failed interaction have different feedback","Do not copy a finished door tutorial"],
        hints:["Get the logic working with Print String before worrying about animation.","The challenge is the decision, not making a beautiful door."]
      },
      experience: {
        game:"Resident Evil 4",
        focus:"Locked interactions",
        play:"Find doors, containers or interactions that are available only under certain conditions.",
        watch:"Watch exploration gameplay containing keys and locked doors.",
        observe:["What condition prevents the interaction?","What feedback tells the player why it failed?","What changes once the requirement is met?"],
        search:"Resident Evil 4 remake keys locked doors gameplay"
      },
      homework: {
        title:"Decision Map",
        task:"Find three game mechanics that require a decision. Draw each as a question with TRUE and FALSE outcomes.",
        evidence:"Three small decision diagrams.",
        stretch:"Add a second condition to one diagram and explain how it changes the mechanic."
      },
      common:["If both outcomes seem wrong, inspect the value feeding Condition.","Test True and False cases deliberately.","Do not use a Branch when you do not actually need a decision."],
      goodPractice:"Make conditions readable. A Boolean called HasKey is easier to understand than an unexplained chain of nodes."
    },

    {
      id: "functions",
      path: "blueprints",
      order: 5,
      title: "Functions: Reusable Logic",
      short: "Turn repeated logic into named, reusable pieces instead of copying node chains.",
      difficulty: "Intermediate",
      duration: "45 min",
      xp: 180,
      icon: "ƒ",
      aim: "Create Blueprint Functions with inputs, outputs and clear responsibilities.",
      intro: "Functions package a piece of logic behind a meaningful name. That makes a Blueprint easier to read and prevents copy-pasting the same calculation or behaviour repeatedly.",
      goals: [
        "Create and call a Function",
        "Add Function inputs and outputs",
        "Use local variables where appropriate",
        "Recognise when a Function improves readability"
      ],
      concepts: [
        {name:"Input", text:"Data supplied to the Function when it is called."},
        {name:"Output", text:"Data returned by the Function."},
        {name:"Local Variable", text:"Temporary data that exists only inside the Function execution."},
        {name:"Responsibility", text:"The single clear job a Function is intended to perform."}
      ],
      guided: [
        "Create a new Actor Blueprint called BP_FunctionPractice.",
        "Create a Function named CalculateDamage.",
        "Add Float inputs BaseDamage and Multiplier.",
        "Multiply the two values and return the result through a Float output named FinalDamage.",
        "Call the Function from BeginPlay and Print String the returned value.",
        "Call the Function again using different input values."
      ],
      quickCheck: [
        {q:"Why create a Function instead of copying the same nodes three times?", options:["It makes the Blueprint reusable and easier to maintain","Functions cannot have inputs","Copying is always faster to maintain","Functions are only for UI"], answer:0, feedback:"Reusable named logic reduces duplication and makes changes safer."},
        {q:"What is a local variable useful for?", options:["A value needed only while a Function runs","Storing every project's texture","Changing the engine version","Creating a new level"], answer:0, feedback:"Local variables keep temporary values scoped to the Function."}
      ],
      stretch: {
        title:"Safer Damage",
        task:"Improve CalculateDamage so it never returns a negative number.",
        requirements:["Keep the original inputs","Return a valid FinalDamage","Test at least three values","Explain the safety check"]
      },
      challenge: {
        title:"Refactor the Monster",
        task:"Take a messy Blueprint containing repeated logic and replace at least two repeated jobs with Functions.",
        requirements:["Two named Functions","No unnecessary duplicated node chains","Function names describe intent","Original behaviour still works"],
        hints:["Look for groups of nodes that answer one clear question or perform one clear job."]
      },
      experience: {
        game:"Any game with repeated interactions",
        focus:"Reusable rules",
        play:"Look for behaviours repeated across many different objects.",
        watch:"Watch gameplay and identify systems that probably reuse the same rules.",
        observe:["What behaviour repeats?","Which values change each time?","What could be an input to a reusable Function?"],
        search:"gameplay reusable interactions doors pickups"
      },
      homework: {
        title:"Function Design Without Unreal",
        task:"Design three Functions on paper for a game system. Give each a name, purpose, inputs and outputs.",
        evidence:"Three Function cards or a small table.",
        stretch:"Explain which one should own a local variable and why."
      },
      common:["A Function should do a recognisable job, not hide a random pile of nodes.","Use inputs instead of hard-coding values that should vary.","Use local variables for temporary Function-only values."],
            goodPractice:"If you can name a block of logic clearly and may need it again, a Function is often a better home than duplicated Event Graph nodes.",
      media: {
        type: "image",
        src: "assets/book-temp/functions-page-58.png",
        alt: "Temporary textbook reference image showing a simple function example.",
        caption: "Temporary textbook reference: simple function example page used in the Functions lesson."
      }
    },

    {
      id: "collision-overlap",
      path: "gameplay",
      order: 1,
      title: "Collision & Overlap Events",
      short: "Detect the player entering spaces, touching pickups and interacting with game objects.",
      difficulty: "Beginner",
      duration: "45 min",
      xp: 180,
      icon: "◎",
      aim: "Use collision Components and overlap events to trigger gameplay logic.",
      intro: "Collision is not only about stopping movement. Trigger volumes and collision Components can detect when Actors enter or leave an area and start gameplay events.",
      goals: [
        "Add and resize a collision Component",
        "Use Begin Overlap and End Overlap events",
        "Test which Actor caused an overlap",
        "Use debug feedback before building more complex behaviour"
      ],
      concepts: [
        {name:"Collision Component", text:"A shape used for physical collision or overlap detection."},
        {name:"Overlap", text:"A detection event where collision shapes intersect without necessarily blocking movement."},
        {name:"Other Actor", text:"The Actor that entered or caused the overlap event."},
        {name:"Collision Response", text:"Rules that determine whether object types Block, Overlap or Ignore each other."}
      ],
      guided: [
        "Create BP_TriggerPractice with a Box Collision Component.",
        "Place it in the level and resize the box so the player can walk through it.",
        "Add Begin Overlap and print a message.",
        "Add End Overlap and print a different message.",
        "Test the trigger from different directions.",
        "Change the collision settings and observe how behaviour changes."
      ],
      quickCheck: [
        {q:"What is the main difference between Block and Overlap?", options:["Overlap can detect intersection without stopping movement","Block always deletes the Actor","Overlap only works on UI","There is no difference"], answer:0, feedback:"Overlap can trigger events while allowing Actors to pass through."},
        {q:"Why is Other Actor useful?", options:["It identifies what caused the overlap","It changes screen resolution","It packages the game","It creates a material"], answer:0, feedback:"You often need to know whether the player or some other Actor entered the trigger."}
      ],
      stretch: {
        title:"Enter and Leave",
        task:"Create an area that changes state while the player is inside it and restores the state when they leave.",
        requirements:["Begin Overlap used","End Overlap used","Different feedback for enter/leave","No Event Tick"]
      },
      challenge: {
        title:"Checkpoint Trigger",
        task:"Create the detection portion of a reusable checkpoint Actor.",
        requirements:["Detect only the intended player","Checkpoint cannot repeatedly award itself","Visual feedback changes when activated","Use a stored state variable"],
        hints:["Prove the overlap works before adding checkpoint logic.","A Boolean can remember whether this instance has already activated."]
      },
      experience: {
        game:"Dark Souls III",
        focus:"Trigger volumes and checkpoints",
        play:"Observe when areas, enemies or checkpoint-like systems react to the player's location.",
        watch:"Watch exploration gameplay and look for invisible boundaries triggering events.",
        observe:["What changes when the player crosses a boundary?","Can you tell where the trigger volume might be?","Which triggers appear one-shot and which can happen repeatedly?"],
        search:"Dark Souls 3 exploration bonfire gameplay"
      },
      homework: {
        title:"Invisible Boxes Everywhere",
        task:"Play or watch a level and identify five moments that could plausibly be driven by a trigger or overlap volume.",
        evidence:"Five moments with a sentence explaining the likely trigger.",
        stretch:"For each, decide whether it should activate once, repeatedly, or on both enter and exit."
      },
      common:["If overlap does not fire, inspect collision responses on both objects.","Use Print String before blaming later logic.","Avoid giant trigger boxes unless the design genuinely needs them."],
      goodPractice:"Keep trigger logic focused. A trigger should usually tell the relevant system something happened rather than owning every consequence itself."
    },

    {
      id: "timelines-doors",
      path: "gameplay",
      order: 2,
      title: "Timelines & Smooth Doors",
      short: "Animate gameplay values over time instead of teleporting objects instantly.",
      difficulty: "Intermediate",
      duration: "55 min",
      xp: 220,
      icon: "⌁",
      aim: "Use a Timeline to smoothly animate an Actor over time.",
      intro: "Timelines provide values that change over time. They are ideal for doors, lifts, moving platforms, fading lights and many other simple gameplay animations.",
      goals: [
        "Create a Timeline",
        "Use a Float track",
        "Use Lerp to calculate movement",
        "Play and Reverse a Timeline"
      ],
      concepts: [
        {name:"Timeline", text:"A Blueprint tool that outputs changing values over a specified duration."},
        {name:"Float Track", text:"A curve of numerical values over time."},
        {name:"Lerp", text:"Interpolates between a start and end value using an Alpha from 0 to 1."},
        {name:"Reverse", text:"Runs the Timeline backwards, useful for returning to the starting state."}
      ],
      guided: [
        "Create BP_SlidingDoor with a visible mesh.",
        "Store a ClosedLocation and calculate an OpenLocation.",
        "Add a Timeline with a Float track from 0 to 1.",
        "Use the Float output as the Alpha of a Lerp.",
        "Set the door location during Timeline Update.",
        "Trigger Play and Reverse using simple test events before wiring it to interaction."
      ],
      quickCheck: [
        {q:"What value range is especially useful as a Lerp Alpha?", options:["0 to 1","100 to 200","-900 to 900 only","Text values"], answer:0, feedback:"An Alpha of 0 returns the start; 1 returns the end; values between blend."},
        {q:"Why might Reverse be useful for a door?", options:["It can reuse the same Timeline to close it","It deletes the Timeline","It changes the mesh","It disables collision forever"], answer:0, feedback:"Reverse can move the animation back from end to start."}
      ],
      stretch: {
        title:"Designer-Friendly Door",
        task:"Expose useful settings so a level designer can change how the same door behaves.",
        requirements:["Editable movement distance","Editable duration or speed","Works for multiple placed instances","Variables have Tooltips"]
      },
      challenge: {
        title:"Complete Door System",
        task:"Combine prior skills to make a reusable interactive or trigger-based door.",
        requirements:["Smooth Timeline movement","Locked/unlocked state","Feedback when locked","Can close again","No duplicated door Blueprint for each instance"],
        hints:["Separate 'Can I open?' from 'How do I animate opening?'.","Get the Timeline working independently before connecting conditions."]
      },
      experience: {
        game:"Resident Evil 2",
        focus:"Doors as pacing devices",
        play:"Observe different door behaviours during exploration.",
        watch:"Watch exploration gameplay and focus specifically on door interactions.",
        observe:["Are all doors animated the same way?","When is control limited?","How do locked doors communicate failure?","What makes a door feel heavy, fast or dangerous?"],
        search:"Resident Evil 2 remake door gameplay exploration"
      },
      homework: {
        title:"Door Study",
        task:"Find three very different doors, gates, lifts or moving barriers in games. Compare how they move and how the player activates them.",
        evidence:"Three examples with activation, movement style and feedback.",
        stretch:"Choose one and sketch the variables your reusable Blueprint would need."
      },
      common:["If the object jumps, check start/end values and the Timeline curve.","Store your start location rather than repeatedly adding offsets to the current position.","Test animation separately from interaction logic."],
      goodPractice:"Expose design values such as distance and duration rather than hard-coding one door for one situation."
    },

    {
      id: "line-traces",
      path: "gameplay",
      order: 3,
      title: "Line Traces & Looking At Things",
      short: "Ask what is in front of the player for interaction, weapons and detection systems.",
      difficulty: "Intermediate",
      duration: "55 min",
      xp: 230,
      icon: "↝",
      aim: "Use a line trace to detect objects in the world and inspect hit results.",
      intro: "A trace is a query through the game world. A line trace is commonly used for hitscan weapons, interaction systems, aiming, object selection and environmental checks.",
      goals: [
        "Define a trace start and end",
        "Run a Line Trace by Channel",
        "Use the Hit Result",
        "Draw debug traces while testing"
      ],
      concepts: [
        {name:"Trace", text:"A query that tests a path or shape against collision in the world."},
        {name:"Trace Channel", text:"The collision channel used to decide what the trace should detect."},
        {name:"Hit Result", text:"Data describing what the trace hit, where it hit and other useful information."},
        {name:"Debug Draw", text:"Temporary visible trace lines that help prove what your calculation is doing."}
      ],
      guided: [
        "Choose a suitable start point, such as the player's camera location.",
        "Calculate an end point in the forward direction at a chosen distance.",
        "Use Line Trace by Channel.",
        "Enable debug drawing so the line is visible while testing.",
        "Break the Hit Result and print the name of the Hit Actor.",
        "Test against objects with different collision settings."
      ],
      quickCheck: [
        {q:"What does a Hit Result contain?", options:["Information about what and where the trace hit","Only the project name","A list of every Blueprint variable","The packaged game"], answer:0, feedback:"Hit Results contain useful collision information including the Hit Actor and impact data."},
        {q:"Why draw debug lines?", options:["To see and verify the trace during development","To make the final game always look better","To save the project","To create a widget"], answer:0, feedback:"Debug visuals help prove that start, direction and distance are correct."}
      ],
      stretch: {
        title:"Range Matters",
        task:"Make trace distance designer-editable and clearly report when an object is out of reach.",
        requirements:["Editable TraceDistance","Debug trace visible during development","Near object can be hit","Same object beyond range cannot be hit"]
      },
      challenge: {
        title:"Look-to-Interact Detector",
        task:"Create the detection half of an interaction system that identifies an interactable object in front of the player.",
        requirements:["Trace originates sensibly","Only valid targets are accepted","Target can provide interaction feedback","System stops detecting beyond maximum range"],
        hints:["Start by printing the Hit Actor name.","You can improve communication later with an Interface; detection is the first problem."]
      },
      experience: {
        game:"BioShock",
        focus:"Looking and interacting",
        play:"Observe how the game decides which nearby object the player is targeting or interacting with.",
        watch:"Watch gameplay containing pickups, buttons and aimed interactions.",
        observe:["How close must the player be?","Does the centre of the screen matter?","What feedback appears when a target is valid?","What happens when another object blocks the view?"],
        search:"Bioshock gameplay interaction pickups"
      },
      homework: {
        title:"Trace or Trigger?",
        task:"Find six interactions from games and decide whether you would implement each primarily with a trace, an overlap, or another method.",
        evidence:"Six examples with your chosen method and a reason.",
        stretch:"Choose one example where either trace or overlap could work and compare the trade-offs."
      },
      common:["If the trace points the wrong way, inspect the forward vector and end calculation.","If it passes through an object, check that object's collision response to the trace channel.","Keep debug drawing on while developing, then disable it for release."],
      goodPractice:"Debug the geometry of the trace first. Do not build interaction logic on top of a trace you have not proved is hitting correctly."
    },

    {
      id: "blueprint-responsibility",
      path: "practice",
      order: 1,
      title: "Blueprint Responsibility",
      short: "Put behaviour where it belongs so one small change does not require fixing ten Blueprints.",
      difficulty: "Intermediate",
      duration: "40 min",
      xp: 200,
      icon: "⊙",
      aim: "Decide which Blueprint should own a piece of game behaviour.",
      intro: "Good Blueprints are not only about nodes being technically correct. Each Blueprint should own its own state and responsibilities wherever practical.",
      goals: [
        "Explain Blueprint responsibility",
        "Recognise duplicated behaviour across Blueprints",
        "Move object-specific behaviour to the object that owns it",
        "Use Level Blueprint only for genuinely level-specific logic"
      ],
      concepts: [
        {name:"Responsibility", text:"The behaviour and state a Blueprint should own."},
        {name:"Coupling", text:"How strongly one piece of logic depends on another."},
        {name:"Duplication", text:"Copying the same behaviour into multiple places, making future changes harder."},
        {name:"Level-specific logic", text:"Behaviour that genuinely belongs to one level rather than a reusable game object or rule system."}
      ],
      guided: [
        "Inspect an example where several hazards each contain their own version of player-death logic.",
        "Identify what behaviour actually belongs to the player.",
        "Create one named player Function or Event responsible for death.",
        "Change the hazards so they request that behaviour instead of reproducing it.",
        "Change the player-death behaviour once and confirm every hazard now uses the change.",
        "Discuss which logic would genuinely be reasonable inside a Level Blueprint."
      ],
      quickCheck: [
        {q:"Where should the detailed logic for how the player dies usually live?", options:["In every enemy separately","With the player / player system that owns that state","In every level Blueprint","Inside a random material"], answer:1, feedback:"The player should generally own its internal death behaviour."},
        {q:"What is a danger of putting reusable game rules in every Level Blueprint?", options:["Changes may need copying across levels","It makes all meshes brighter","It improves reuse automatically","There is no danger"], answer:0, feedback:"Duplicated level logic becomes difficult to maintain as levels and rules change."}
      ],
      stretch: {
        title:"Who Owns This?",
        task:"Sort a set of gameplay behaviours into the Blueprint/system that should most reasonably own each one.",
        requirements:["Justify every choice","Identify at least one poor ownership choice","Suggest a better home","Consider reuse across levels"]
      },
      challenge: {
        title:"Refactor a Bad Project",
        task:"Take a deliberately poorly organised mini-project and move responsibilities to more sensible places without changing the final player experience.",
        requirements:["Remove duplicated logic","Reduce Level Blueprint dependence","Game still behaves the same","Explain each major move"],
        hints:["Ask: whose state is being changed? Who should know how that state changes?","A hazard can request damage without owning the player's entire health system."]
      },
      experience: {
        game:"Any systemic game",
        focus:"Ownership of game systems",
        play:"Pick a mechanic that interacts with many different objects, such as damage or interaction.",
        watch:"Watch gameplay and identify one system reused across many object types.",
        observe:["Which object owns the state?","Which objects merely request a change?","What would become painful if every object duplicated the logic?"],
        search:"gameplay systemic damage interactions"
      },
      homework: {
        title:"System Ownership",
        task:"Choose one game mechanic such as health, inventory, doors or scoring. Draw the main objects involved and arrows showing who should communicate with whom.",
        evidence:"One system diagram plus a paragraph explaining ownership.",
        stretch:"Identify one tempting but poor place to put the logic and explain why."
      },
      common:["Working code can still be badly organised.","Avoid making every object directly control every other object's internal state.","Level Blueprint is useful, but not a dumping ground for the whole game."],
            goodPractice:"A Blueprint should be as independent as practical and responsible for its own internal state.",
      media: {
        type: "image",
        src: "assets/book-temp/blueprint-responsibility-page-391.png",
        alt: "Temporary textbook reference image from the Blueprint responsibilities section.",
        caption: "Temporary textbook reference: Blueprint responsibilities section from the uploaded book."
      }
    },

    {
      id: "managing-complexity",
      path: "practice",
      order: 2,
      title: "Stop Blueprint Spaghetti",
      short: "Functions, comments, categories and abstraction for Blueprints humans can actually read.",
      difficulty: "Intermediate",
      duration: "45 min",
      xp: 220,
      icon: "≋",
      aim: "Improve Blueprint readability using abstraction, naming, comments and organisation.",
      intro: "A Blueprint can work perfectly and still be awful to maintain. Professional practice means making the graph understandable to someone other than the person who built it.",
      goals: [
        "Use Functions or collapsed logic to hide unnecessary detail",
        "Use comment boxes to label logic blocks",
        "Add variable Tooltips and Categories",
        "Refactor a large Event Graph into readable sections"
      ],
      concepts: [
        {name:"Abstraction", text:"Hiding lower-level detail behind a meaningful higher-level name."},
        {name:"Comment Box", text:"A labelled visual region that explains a block of Blueprint logic."},
        {name:"Variable Category", text:"Groups related variables together in My Blueprint and Details."},
        {name:"Tooltip", text:"Explains the purpose of a variable to someone using the Blueprint."}
      ],
      guided: [
        "Open a deliberately messy Event Graph.",
        "Identify groups of nodes that perform one recognisable job.",
        "Convert an appropriate repeated group into a Function.",
        "Add comment boxes to the remaining top-level logic.",
        "Rename unclear variables and organise them into Categories.",
        "Add Tooltips to any Instance Editable variables.",
        "Zoom out and check whether another developer could understand the graph at a glance."
      ],
      quickCheck: [
        {q:"What is abstraction trying to achieve?", options:["Hide low-level detail behind meaningful concepts","Add more random nodes","Delete all Functions","Force everything into the Level Blueprint"], answer:0, feedback:"Abstraction lets you reason about a system without seeing every implementation detail at once."},
        {q:"What should an Instance Editable variable ideally include?", options:["A useful name and Tooltip","No name","A 4000-node macro","A duplicated Level Blueprint"], answer:0, feedback:"Exposed design values should make sense to the person using the Blueprint."}
      ],
      stretch: {
        title:"Readable at 25%",
        task:"Organise a Blueprint so its top-level purpose can still be understood while zoomed far out.",
        requirements:["Comment major logic blocks","Use meaningful Function names","Group related variables","No unnecessary wire crossings"]
      },
      challenge: {
        title:"Blueprint Code Review",
        task:"Review another Blueprint as if you had inherited it from a teammate. Improve readability without changing behaviour.",
        requirements:["At least five justified improvements","No behaviour changes","Before/after screenshots","Explain which change gives the biggest maintenance benefit"],
        hints:["Look at names, duplicated logic, exposed variables, long graphs and comments.","The goal is clarity, not simply fewer nodes."]
      },
      experience: {
        game:"Development rather than a specific game",
        focus:"Readable systems",
        play:"Open one of your own older Unreal projects and inspect a Blueprint you have not touched recently.",
        watch:"If you do not have an old project, watch a Blueprint breakdown/tutorial and judge how readable the finished graph is.",
        observe:["Can you understand the graph quickly?","Are responsibilities clearly named?","Where could abstraction hide unnecessary detail?"],
        search:"Unreal Engine 5 Blueprint clean code best practices"
      },
      homework: {
        title:"Future You Test",
        task:"Screenshot one of your Blueprints. Without editing it first, annotate anything that 'future you' might struggle to understand in three months.",
        evidence:"Annotated screenshot plus three improvements you will make.",
        stretch:"Make the improvements and submit a before/after comparison."
      },
      common:["Commenting every single node is not the same as making logic clear.","Do not hide random unrelated nodes inside a Function just to make the graph smaller.","Meaningful names are a form of documentation."],
            goodPractice:"A giant Event Graph should not be a badge of honour. Hide detail behind clear names and keep exposed variables understandable.",
      media: {
        type: "image",
        src: "assets/book-temp/managing-complexity-page-395.png",
        alt: "Temporary textbook reference image from the Blueprint complexity section.",
        caption: "Temporary textbook reference: complexity-management section used while we design our own final visual assets."
      }
    }
  ],

  glossary: [
    ["Actor","An object that can be placed or spawned in an Unreal level."],
    ["Blueprint","Unreal Engine's visual scripting system; the term is also used for assets/classes created with it."],
    ["Blueprint Class","A reusable definition used to create one or more instances."],
    ["Branch","A flow-control node that chooses True or False execution based on a Boolean condition."],
    ["Boolean","A variable type with two states: True or False."],
    ["Class","A definition/template describing a type of object."],
    ["Component","A reusable piece of functionality attached to an Actor."],
    ["Compile","Checks and prepares Blueprint changes so Unreal can execute them."],
    ["Event","An entry point that starts execution when something happens."],
    ["Event Graph","The Blueprint graph where events and gameplay actions are commonly connected."],
    ["Float","A numerical variable type that can include decimal values."],
    ["Function","A named reusable block of logic that can accept inputs and return outputs."],
    ["GameMode","A Gameplay Framework class commonly used to define rules and default gameplay classes."],
    ["Hit Result","A structure containing information about a collision or trace hit."],
    ["Instance","A particular object created from a Class."],
    ["Integer","A whole-number variable type."],
    ["Lerp","Interpolation between a start and end value using an Alpha."],
    ["Line Trace","A collision query along a straight line."],
    ["Local Variable","A temporary variable scoped to a Function."],
    ["Object Reference","A variable that points to another Unreal object."],
    ["Outliner","The editor panel listing Actors in the current level."],
    ["Overlap","Collision detection where shapes intersect without necessarily blocking movement."],
    ["Root Component","The top Component in an Actor's Component hierarchy."],
    ["Timeline","A Blueprint tool that produces values over time."],
    ["Tooltip","Short explanatory text shown when a user hovers an exposed value or item."],
    ["Transform","Location, Rotation and Scale."],
    ["Variable","Named stored data that can be read or changed."],
    ["Vector","Three numerical values commonly used to represent 3D positions or directions."],
    ["Viewport","The visual editor area used to view and navigate a level or Blueprint."],
    ["World Space","Coordinates measured relative to the game world rather than a parent object."]
  ]
};