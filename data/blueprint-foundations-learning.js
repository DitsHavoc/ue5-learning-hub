/* v3.44.5 — Blueprint Foundations Lab
   Additive data patch only.
   Runs after the core Course / Building Blocks / Tutorials / Pathways data and
   after the Prison Cell patch, but before app.js.

   Teaching rhythm:
   TEACHER DEMO → MAKE → TEST → CHANGE → EXPLAIN

   Student shorthand:
   LEARN → MAKE → PROVE

   The goal is not node memorisation. Students choose data and logic because
   they can explain what information the game needs and what should happen next.
*/
(() => {
  'use strict';

  const DATA = window.UE5_COURSE_DATA;
  const BLOCKS = window.UE5_BUILDING_BLOCK_DATA;
  const TOOLS = window.UE5_TUTORIAL_DATA;
  const PATHWAYS = window.UE5_PATHWAY_DATA;

  if (!DATA || !BLOCKS || !TOOLS || !PATHWAYS) {
    console.warn('[v3.44.5] Blueprint Foundations Lab skipped: core learning data unavailable.');
    return;
  }

  function upsertCategory(category) {
    TOOLS.categories = TOOLS.categories || [];
    const index = TOOLS.categories.findIndex(x => x.id === category.id);
    if (index >= 0) TOOLS.categories[index] = category;
    else TOOLS.categories.unshift(category);
  }

  function upsertTutorial(tutorial) {
    TOOLS.tutorials = TOOLS.tutorials || [];
    const index = TOOLS.tutorials.findIndex(x => x.id === tutorial.id);
    if (index >= 0) TOOLS.tutorials[index] = tutorial;
    else TOOLS.tutorials.push(tutorial);
  }

  function upsertPath(path) {
    PATHWAYS.paths = PATHWAYS.paths || [];
    PATHWAYS.paths = PATHWAYS.paths.filter(x => x.id !== path.id);
    const prisonIndex = PATHWAYS.paths.findIndex(x => x.id === 'prison-cell');
    if (prisonIndex >= 0) PATHWAYS.paths.splice(prisonIndex + 1, 0, path);
    else PATHWAYS.paths.unshift(path);
  }

  function addBlockTutorial(blockId, tutorialId) {
    const block = (BLOCKS.blocks || []).find(x => x.id === blockId);
    if (!block) return;
    block.tutorials = block.tutorials || [];
    if (!block.tutorials.includes(tutorialId)) block.tutorials.push(tutorialId);
  }

  const localRef = {
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  };


  function addStepVisual(tutorialId, stepTitle, visual) {
    const tutorial = (TOOLS.tutorials || []).find(x => x.id === tutorialId);
    const step = tutorial?.steps?.find(x => x.title === stepTitle);
    if (!step) {
      console.warn(`[v3.44.5] Screenshot target missing: ${tutorialId} → ${stepTitle}`);
      return;
    }
    const current = Array.isArray(step.visual) ? step.visual : (step.visual ? [step.visual] : []);
    step.visual = [...current, visual];
  }

  function addTutorialReference(tutorialId, visual) {
    const tutorial = (TOOLS.tutorials || []).find(x => x.id === tutorialId);
    if (!tutorial) return;
    tutorial.referenceImages = tutorial.referenceImages || [];
    if (!tutorial.referenceImages.some(v => v.src === visual.src)) tutorial.referenceImages.push(visual);
  }

  function addBlockVisual(blockId, visual) {
    const block = (BLOCKS.blocks || []).find(x => x.id === blockId);
    if (!block) return;
    const current = Array.isArray(block.visual) ? block.visual : (block.visual ? [block.visual] : []);
    if (!current.some(v => v.src === visual.src)) block.visual = [...current, visual];
  }

  // -----------------------------------------------------------------------
  // CATEGORY
  // -----------------------------------------------------------------------

  upsertCategory({
    id: 'blueprint-foundations-lab',
    title: 'Blueprint Foundations Lab',
    icon: '◇',
    description: 'Short Level 4 labs that make you choose the right data, logic and structure — then prove you understand why.'
  });

  // -----------------------------------------------------------------------
  // 1. VARIABLE TYPES
  // -----------------------------------------------------------------------

  upsertTutorial({
    id: 'bp-lab-variable-types',
    title: 'Choose the Right Variable Type',
    category: 'blueprint-foundations-lab',
    duration: '25–35 min',
    difficulty: 'Beginner',
    icon: '▦',
    featured: true,
    summary: 'Create common Blueprint variable types in one safe Actor, use Get and Set correctly, and choose the type from what the information means — not from habit or pin colour.',
    uses: ['Boolean', 'Integer', 'Float', 'Text', 'Vector', 'Object Reference', 'Get', 'Set'],
    referenceLesson: 'variables',
    buildingBlocks: ['variables-types', 'object-class-references'],
    starterValues: [
      'Blueprint: BP_DataLab',
      'DoorLocked: Boolean = True',
      'KeysOwned: Integer = 0',
      'Health: Float = 100.0',
      'StatusMessage: Text = Ready',
      'CheckpointLocation: Vector = 0,0,0',
      'TargetActor: Actor Object Reference'
    ],
    steps: [
      {
        title: 'Create one safe practice Blueprint',
        where: 'Content Drawer → your Learning folder → right-click → Blueprint Class → Actor',
        do: 'Create an Actor Blueprint called BP_DataLab. Open it, then Compile and Save before adding anything else.',
        why: 'A throwaway lab Actor lets you experiment without damaging a real project system.',
        see: 'BP_DataLab opens with Components, My Blueprint, Event Graph and Details available.',
        check: 'Compile shows no errors.',
        troubleshoot: [
          'If Blueprint Class is not visible, use the Content Drawer search or right-click an empty area of a normal project folder.',
          'Do not use the Level Blueprint for this lab.'
        ],
        visual: null
      },
      {
        title: 'Create a Boolean for a yes/no fact',
        where: 'BP_DataLab → My Blueprint → Variables → + Variable → variable type dropdown',
        do: 'Create DoorLocked as a Boolean. The type menu contains many options — ignore the ones you do not need today. Compile, then set its Default Value to True.',
        why: 'A Boolean represents exactly two states: True/False, yes/no, enabled/disabled. It is ideal when the question really has only two answers.',
        see: 'DoorLocked appears in My Blueprint and its default is checked/True.',
        check: 'Say the question the variable answers: “Is the door locked?”',
        troubleshoot: [
          'If Default Value is not visible, Compile once and select DoorLocked in My Blueprint.',
          'Do not use an Integer 0/1 when the information genuinely means yes/no.'
        ],
        visual: null
      },
      {
        title: 'Create an Integer for whole-number counting',
        where: 'My Blueprint → Variables → + Variable → Integer',
        do: 'Create KeysOwned as an Integer. Compile and set Default Value = 0.',
        why: 'Integers store whole numbers. Counts such as keys, lives, rounds and score increments normally do not need decimal places.',
        see: 'KeysOwned has a whole-number field with no decimal part.',
        check: 'Would 2.5 keys make sense? If not, Integer is a sensible choice.',
        troubleshoot: [
          'If you need a value such as 2.5 or 0.25, use Float instead.'
        ],
        visual: null
      },
      {
        title: 'Create a Float for a value that may need decimals',
        where: 'My Blueprint → Variables → + Variable → Float',
        do: 'Create Health as a Float. Compile and set Default Value = 100.0.',
        why: 'Floats store numbers that can include decimal values. They are useful for health, time, speed, cooldowns and measurements when fractional values may matter.',
        see: 'Health accepts values such as 100.0 and 12.5.',
        check: 'Change the default temporarily to 87.5 and confirm it is accepted, then return it to 100.0.',
        troubleshoot: [
          'Do not choose Float just because the number looks more technical. Use it when fractional values are useful.'
        ],
        visual: null
      },
      {
        title: 'Create Text for player-facing words',
        where: 'My Blueprint → Variables → + Variable → Text',
        do: 'Create StatusMessage as Text. Compile and set its default to Ready.',
        why: 'Text is designed for words shown to players and supports localisation workflows better than treating every message as a basic String.',
        see: 'StatusMessage stores the word Ready.',
        check: 'Name one thing in a game that is data but would be better as a number than Text.',
        troubleshoot: [
          'Use numbers for calculations. Do not store Health as Text just because you eventually display it on screen.'
        ],
        visual: null
      },
      {
        title: 'Create a Vector for a 3D position',
        where: 'My Blueprint → Variables → + Variable → Vector',
        do: 'Create CheckpointLocation as a Vector. Leave the default at X 0, Y 0, Z 0 for now.',
        why: 'A Vector stores three numeric components together. In Unreal it is commonly used for positions, directions and 3D offsets.',
        see: 'CheckpointLocation exposes X, Y and Z values.',
        check: 'Explain why three separate variables called CheckpointX, CheckpointY and CheckpointZ would usually be less convenient.',
        troubleshoot: [
          'A Vector is not a special “checkpoint type”; it is useful here because a checkpoint needs a 3D location.'
        ],
        visual: null
      },
      {
        title: 'Create an Object Reference for one specific Actor',
        where: 'My Blueprint → Variables → + Variable → choose Actor Object Reference → Details',
        do: 'Create TargetActor as an Actor Object Reference. Enable Instance Editable using the eye/Instance Editable control, then Compile. The placed instance will then expose a field where you can assign the specific Actor.',
        why: 'An Object Reference points at a particular live object. This is how one Blueprint can store “that exact door”, “that exact light” or another specific Actor.',
        see: 'TargetActor has an object-reference field and is Instance Editable.',
        check: 'Explain the difference: Actor Class means a type of Actor; Actor Object Reference means one actual Actor instance.',
        troubleshoot: [
          'If you need to create a new Actor, you often need a Class Reference. If you need to talk to one already-existing Actor, an Object Reference is often the right choice.',
          'The reference can be None until a real Actor instance is assigned.'
        ],
        visual: null
      },
      {
        title: 'Use Get to read and Set to change state',
        where: 'Event Graph → drag DoorLocked from My Blueprint into the graph',
        do: 'Drag DoorLocked into the graph once as Get and once as Set. Connect Event BeginPlay → Set DoorLocked = False. From the Set node, Print String using DoorLocked so you can see the new value.',
        why: 'Get reads the current value. Set changes the stored value. Knowing which you need is more important than memorising the node colour.',
        see: 'Play mode prints False after BeginPlay changes DoorLocked.',
        check: 'Stop Play, change the Set value back to True, Compile and prove the printed result changes.',
        troubleshoot: [
          'If you only use Get, you have not changed the variable.',
          'If the graph does not run, follow the white execution wire from Event BeginPlay.'
        ],
        visual: null
      },
      {
        title: 'PROVE — choose types from meaning, not habit',
        where: 'No new nodes needed → write the answers in notes / Teams / your workbook',
        do: 'Choose a type for each: IsBossDead, AmmoInMagazine, ReloadTime, PlayerNameShownOnHUD, RespawnPosition, CurrentTarget. Write one short reason for every choice.',
        why: 'The goal is to recognise what the information means before touching Blueprint.',
        see: 'Six choices with six reasons.',
        check: 'A sensible set is Boolean, Integer, Float, Text, Vector, Object Reference — but the reason matters more than matching a colour.',
        troubleshoot: [
          'If two types seem possible, explain the behaviour you need. The intended use should decide.'
        ],
        visual: null
      }
    ],
    mistakes: [
      'Using Float for every number without asking whether decimals are meaningful.',
      'Using Text/String for values that must be calculated.',
      'Confusing a Class Reference with an Object Reference.',
      'Using Set when you only wanted to read the current value.',
      'Choosing a variable type because you remember its Blueprint colour rather than what the data means.'
    ],
    makeItYours: [
      'Add a Rotator variable for a stored door orientation.',
      'Add a Name variable and research one appropriate use for Name compared with Text.',
      'Create your own six-item “choose the type” quiz for another student.'
    ],
    worksWhen: [
      'You can create Bool, Integer, Float, Text, Vector and Object Reference variables.',
      'You can explain Get versus Set.',
      'You can justify a variable type using the meaning of the data.'
    ],
    studentRecipe: [
      'Create BP_DataLab.',
      'Add DoorLocked Bool, KeysOwned Integer, Health Float, StatusMessage Text, CheckpointLocation Vector and TargetActor Actor Object Reference.',
      'Compile after creating variables so Default Values become available.',
      'Use BeginPlay → Set DoorLocked False → Print String to prove Set changes state.',
      'Finish by choosing variable types for six new game-data examples and explaining why.'
    ],
    source: {
      title: 'Epic Games — Blueprint Variables',
      url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-variables-in-unreal-engine'
    },
    prescriptive: true
  });


  // -----------------------------------------------------------------------
  // 1B. STATE, INSTANCES, OWNERSHIP & DEBUG FLOW
  // -----------------------------------------------------------------------

  upsertTutorial({
    id: 'bp-lab-state-flow',
    title: 'Understand State, Instances & Blueprint Flow',
    category: 'blueprint-foundations-lab',
    duration: '25–35 min',
    difficulty: 'Beginner',
    icon: '◎',
    summary: 'Prove the difference between a default value and a runtime value, see how two instances of the same Blueprint can hold different data, read execution versus data wires, and use a simple predict → test → trace debugging routine.',
    uses: ['Default Value', 'Runtime State', 'Instance Editable', 'Execution Pins', 'Data Pins', 'Print String', 'Ownership'],
    referenceLesson: 'variables',
    buildingBlocks: ['variables-types', 'events-execution'],
    starterValues: [
      'Health default = 100.0',
      'BeginPlay runtime Health = 75.0',
      'KeysRequired = Integer, Instance Editable',
      'DoorLocked = Boolean',
      'Debug routine: PREDICT → TEST → TRACE → CHANGE → RETEST'
    ],
    steps: [
      {
        title: 'PREDICT a default value before Play changes it',
        where: 'BP_DataLab → select Health → Details → Default Value',
        do: 'Set Health Default Value = 100. Before pressing Play, write one prediction: “Health starts at 100.” Do not test yet.',
        why: 'A default value is the starting value used when an instance is created. Prediction forces you to understand what you expect before Unreal shows you the answer.',
        see: 'Health = 100 in the Blueprint defaults.',
        check: 'You can say what value Health should have before any runtime Set node changes it.',
        troubleshoot: [
          'If Default Value is missing, Compile and select the variable again.'
        ],
        visual: null
      },
      {
        title: 'Change the value at runtime',
        where: 'Event Graph → Event BeginPlay → Set Health → Print String',
        do: 'Connect BeginPlay → Set Health = 75 → Print String Health. Compile. PREDICT the printed value, then Play.',
        why: 'The Blueprint default still says 100, but the running instance changes to 75 when BeginPlay executes. Runtime state is the value the game currently holds.',
        see: 'Play prints 75 even though the Blueprint Default Value remains 100.',
        check: 'Explain this sentence: “100 is the default; 75 is the runtime value after BeginPlay.”',
        troubleshoot: [
          'If it prints 100, follow the white execution wire and make sure Set Health runs before Print String.',
          'Stopping Play resets the temporary runtime state; it does not rewrite the Blueprint default.'
        ],
        visual: {
          src: 'assets/tutorials/blueprint-foundations/variables-03-get-set-bool.webp',
          caption: 'This screenshot uses a Boolean, but the same rule applies to every variable: Get reads the current value; Set changes the runtime value when its execution pin runs.',
          sourceTitle: 'Teacher classroom capture — Unreal Engine',
          kind: 'local'
        }
      },
      {
        title: 'Give two instances of one Blueprint different values',
        where: 'BP_DataLab → create Integer KeysRequired → enable Instance Editable → Level Editor',
        do: 'Create KeysRequired as Integer, enable Instance Editable and Compile. Place two BP_DataLab Actors in the level. Set one placed instance to KeysRequired = 2 and the other to KeysRequired = 5.',
        why: 'A Blueprint Class is the recipe. Each placed instance can hold its own editable data without needing a new Blueprint class.',
        see: 'Two BP_DataLab instances use the same class but show different KeysRequired values in Details.',
        check: 'Answer: do you now have two Blueprint classes or one class with two instances?',
        troubleshoot: [
          'If KeysRequired is not visible on the placed Actor, enable Instance Editable and Compile.',
          'Changing an instance value in the Level does not automatically change the Class Default for every other instance.'
        ],
        visual: {
          src: 'assets/tutorials/blueprint-foundations/references-02-instance-details.webp',
          caption: 'Placed Blueprint instances expose Instance Editable properties in the Level Details panel. Your property will be KeysRequired rather than the Object Reference shown here.',
          sourceTitle: 'Teacher classroom capture — Unreal Engine',
          kind: 'local'
        }
      },
      {
        title: 'Read execution wires and data wires differently',
        where: 'BP_DataLab → Event Graph → make a simple Branch using DoorLocked',
        do: 'Create BeginPlay → Branch. Connect Get DoorLocked to the Branch Condition. Trace the graph with your finger: first follow the white execution wire, then identify the coloured data wire feeding Condition.',
        why: 'White execution wires answer “when / what runs next?”. Coloured data wires answer “what information is this node using?”. Confusing the two makes Blueprint graphs much harder to read.',
        see: 'A white execution route reaches Branch while a coloured Boolean wire supplies the Condition.',
        check: 'Point to the graph and say which wire controls flow and which wire carries data.',
        troubleshoot: [
          'A data value does not automatically make a node execute. The execution path still needs to reach the node.',
          'A Branch Condition must receive a Boolean value.'
        ],
        visual: {
          src: 'assets/tutorials/blueprint-foundations/logic-01-compare-branch.webp',
          caption: 'White wires carry execution flow. Coloured wires carry data. Here the comparison creates Boolean data for Branch Condition; the white pins decide which route runs.',
          sourceTitle: 'Teacher classroom capture — Unreal Engine',
          kind: 'local'
        }
      },
      {
        title: 'Put state near the thing it describes',
        where: 'No new nodes → short architecture task',
        do: 'Choose the most sensible first home for each piece of state and write one reason: DoorLocked, PlayerHealth, KeysOwned, TargetDoor, PlayerScore. Use “the thing that owns/needs this information” as your starting rule.',
        why: 'Variable type is only half the decision. Good Blueprint structure also asks which object should own the data.',
        see: 'Five ownership choices with reasons.',
        check: 'A sensible starting point is: DoorLocked → Door; PlayerHealth → Character or Health Component; KeysOwned → Player/Inventory; TargetDoor → the controller/switch that needs the reference; PlayerScore → player-focused game state such as PlayerState in a networked game. Context can change the final answer.',
        troubleshoot: [
          'Do not put everything in the Character just because it is easy to find.',
          'Avoid the Level Blueprint as the default home for reusable gameplay state.'
        ],
        visual: null
      },
      {
        title: 'Use PREDICT → TEST → TRACE → CHANGE → RETEST',
        where: 'Any small graph from this lab',
        do: 'Deliberately make one expectation wrong: for example set DoorLocked = True but predict the unlocked route. Play. Observe the result. TRACE the white execution path and the Boolean data into Branch. CHANGE the value or logic, then RETEST.',
        why: 'Debugging is not random node swapping. A repeatable loop makes mistakes useful evidence.',
        see: 'You can identify exactly which value or node caused the unexpected result.',
        check: 'Before asking for help, you can state: what you predicted, what actually happened, and the first value/node you traced.',
        troubleshoot: [
          'Use Print String to expose a value when you cannot tell what the graph currently holds.',
          'Compile before Play so you are testing the graph you think you changed.'
        ],
        visual: null
      },
      {
        title: 'PROVE — explain state without using node colours',
        where: 'Short spoken or written check',
        do: 'Explain four terms in your own words: Default Value, Runtime Value, Instance Value, Variable Owner. Then explain white execution wire vs coloured data wire.',
        why: 'These ideas transfer to every Blueprint system you build later.',
        see: 'A short explanation that describes behaviour, not colours.',
        check: 'Another student could understand your explanation without seeing your graph.',
        troubleshoot: []
      }
    ],
    mistakes: [
      'Assuming a runtime Set permanently changes the Blueprint Class Default.',
      'Assuming two placed instances must share every editable value.',
      'Treating coloured data wires as if they control execution order.',
      'Putting unrelated state into one giant Character or Level Blueprint.',
      'Changing random nodes before making a prediction or tracing the existing flow.'
    ],
    makeItYours: [
      'Give three door instances different KeysRequired values from one reusable Blueprint class.',
      'Use Print String to expose a value that changes more than once during Play.',
      'Pick one variable from your current game project and justify which Blueprint should own it.'
    ],
    worksWhen: [
      'You can distinguish default, runtime and instance values.',
      'You can read execution flow separately from data flow.',
      'You can justify a sensible owner for game state.',
      'You use prediction and tracing before random fixes.'
    ],
    studentRecipe: [
      'Health default 100 → BeginPlay Set 75 → predict and prove the runtime value.',
      'Make KeysRequired Instance Editable → place two BP_DataLab instances → set 2 and 5.',
      'Build a tiny Branch and trace white execution vs coloured data wires.',
      'Complete the variable-ownership task.',
      'Use PREDICT → TEST → TRACE → CHANGE → RETEST on one deliberate mistake.'
    ],
    source: null,
    prescriptive: true
  });

  // -----------------------------------------------------------------------
  // 2. DATA → TEST → DECISION → ACTION
  // -----------------------------------------------------------------------

  upsertTutorial({
    id: 'bp-lab-data-decisions',
    title: 'Turn Data into Decisions',
    category: 'blueprint-foundations-lab',
    duration: '25–30 min',
    difficulty: 'Beginner',
    icon: '◇',
    summary: 'Use comparisons, Branch and Select to turn stored data into different game behaviour instead of building long unexplained node chains.',
    uses: ['Comparison', 'Branch', 'Select', 'Boolean', 'Integer', 'Float'],
    referenceLesson: 'branches',
    buildingBlocks: ['variables-types', 'branches-switches'],
    starterValues: [
      'KeysOwned = 2',
      'KeysRequired = 3',
      'Health = 25.0',
      'DoorLocked = True'
    ],
    steps: [
      {
        title: 'Build the pattern: DATA → TEST → DECISION → ACTION',
        where: 'BP_DataLab → Event Graph',
        do: 'Create Integer KeysRequired = 3 if it does not already exist. Use Get KeysOwned and Get KeysRequired with an Integer >= comparison. Connect the Boolean result into a Branch Condition.',
        why: 'The comparison asks a question about data. Branch uses the True/False answer to decide which execution route runs.',
        see: 'KeysOwned >= KeysRequired feeds the red Boolean Condition pin of Branch.',
        check: 'Point at each part and say: data, test, decision.',
        troubleshoot: [
          'Do not connect an Integer directly into Branch Condition. Branch needs a Boolean question/result.',
          'If the comparison is backwards, read it aloud from left to right.'
        ],
        visual: null
      },
      {
        title: 'Give True and False different outcomes',
        where: 'Branch → True and False execution pins',
        do: 'True → Print String “Door can open”. False → Print String “Need more keys”. Before Play, PREDICT which route should run from the current values. Compile, Play and compare the result with your prediction.',
        why: 'A decision matters only when the outcomes actually differ.',
        see: 'With KeysOwned = 2 and KeysRequired = 3, the False message prints.',
        check: 'Change KeysOwned to 3. Predict again, Play again and prove the True route now runs. If your prediction is wrong, trace the values into the comparison before changing nodes.',
        troubleshoot: [
          'If both messages run, check that they are connected to different Branch outputs rather than chained together.'
        ],
        visual: null
      },
      {
        title: 'Use a Float comparison for a different question',
        where: 'Event Graph → Get Health → Float <= Float',
        do: 'Create the question Health <= 0.0 and connect it to a second Branch. True prints “Player dead”; False prints “Player alive”.',
        why: 'The node pattern stays the same even though the meaning of the data changes.',
        see: 'Changing Health from 25 to 0 changes the execution route.',
        check: 'Test Health = 0, -5 and 0.5. Explain why each result makes sense.',
        troubleshoot: [
          'Use <= if zero itself should count as dead.'
        ],
        visual: null
      },
      {
        title: 'Use Select when you only need to choose a value',
        where: 'Event Graph → right-click → Select → connect DoorLocked to Pick A/B or condition input',
        do: 'Use a Boolean Select to choose between Text/String values “LOCKED” and “OPEN”. Feed the selected value to one Print String.',
        why: 'Select chooses a value without splitting the execution flow. It is often cleaner than two Branch outputs that only choose between two values.',
        see: 'One Print String receives one of two values depending on DoorLocked.',
        check: 'Toggle DoorLocked and prove the printed word changes.',
        troubleshoot: [
          'Use Branch when different actions must run. Use Select when one action just needs one of several values.'
        ],
        visual: null
      },
      {
        title: 'PROVE — change the rule without copying the graph',
        where: 'Your existing data-decision graph',
        do: 'Change the key rule so a door requires 5 keys. Add Integer KeysMissing = Max(KeysRequired - KeysOwned, 0) and print how many are still needed on the False route.',
        why: 'Changing the requirement proves you understand the data relationship rather than copying a screenshot.',
        see: 'The message reports the correct missing-key count for different KeysOwned values.',
        check: 'Test 0, 3, 5 and 8 keys.',
        troubleshoot: [
          'Clamp/Max the missing count at zero so having extra keys does not print a negative number.'
        ],
        visual: null
      }
    ],
    mistakes: [
      'Using Branch without a clear Boolean question.',
      'Building multiple Branches just to choose one displayed value.',
      'Reversing comparison inputs and then “fixing” the wrong result elsewhere.',
      'Testing only one value and assuming the rule works.'
    ],
    makeItYours: [
      'Replace the key example with score needed to enter a bonus area.',
      'Use a Float threshold for stamina, temperature or alert level.'
    ],
    worksWhen: [
      'You can explain DATA → TEST → DECISION → ACTION.',
      'You can choose between Branch and Select for a reason.',
      'You tested both sides of a condition.'
    ],
    studentRecipe: [
      'KeysOwned >= KeysRequired → Branch.',
      'True: Door can open. False: Need more keys.',
      'Health <= 0 → Branch → alive/dead outcomes.',
      'Use Select for LOCKED/OPEN text without splitting execution.',
      'Change the requirement and calculate KeysMissing.'
    ],
    source: {
      title: 'Epic Games — Flow Control',
      url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/flow-control-in-unreal-engine'
    },
    prescriptive: true
  });

  // -----------------------------------------------------------------------
  // 3. OBJECT REFERENCES
  // -----------------------------------------------------------------------

  upsertTutorial({
    id: 'bp-lab-object-reference',
    title: 'Make One Blueprint Control Another',
    category: 'blueprint-foundations-lab',
    duration: '20–25 min',
    difficulty: 'Beginner',
    icon: '↔',
    summary: 'Create two Actor Blueprints, store a direct Object Reference, assign it in the level and prove one specific Actor can control another.',
    uses: ['Object Reference', 'Instance Editable', 'Is Valid', 'Actor communication'],
    buildingBlocks: ['object-class-references'],
    starterValues: [
      'Target: BP_LabTarget',
      'Controller: BP_LabController',
      'Variable: TargetActor = BP_LabTarget Object Reference',
      'Instance Editable = enabled'
    ],
    steps: [
      {
        title: 'Create the target Actor',
        where: 'Content Drawer → Learning folder → Blueprint Class → Actor',
        do: 'Create BP_LabTarget. Add a visible Cube Static Mesh Component, Compile and Save. Place one BP_LabTarget in the level.',
        why: 'The reference needs a real Actor instance to point at.',
        see: 'A visible BP_LabTarget cube exists in the level and in the Outliner.',
        check: 'Select it and confirm the Details panel identifies it as BP_LabTarget.',
        troubleshoot: [
          'If the Actor is invisible, assign a simple Cube mesh to its Static Mesh Component.'
        ],
        visual: null
      },
      {
        title: 'Create the controller and expose a reference',
        where: 'Content Drawer → Blueprint Class → Actor → BP_LabController → My Blueprint',
        do: 'Create BP_LabController. Add variable TargetActor with type BP_LabTarget Object Reference. Enable Instance Editable, Compile and Save. Place the controller in the level.',
        why: 'Instance Editable lets each placed controller choose which specific target it should talk to.',
        see: 'Selecting the placed BP_LabController shows a TargetActor field in Details.',
        check: 'The field is currently None before you assign a target.',
        troubleshoot: [
          'Choose Object Reference, not Class Reference.',
          'Compile after enabling Instance Editable if the field does not appear on the placed Actor.'
        ],
        visual: null
      },
      {
        title: 'Assign the exact target in the level',
        where: 'Level Editor → select BP_LabController → Details → TargetActor',
        do: 'Use the dropdown or eyedropper to assign the placed BP_LabTarget.',
        why: 'The variable now stores one real object, not merely the idea/type of a target.',
        see: 'TargetActor displays the name of the placed BP_LabTarget instead of None.',
        check: 'Click the assigned reference if Unreal allows navigation and confirm it points to the intended Actor.',
        troubleshoot: [
          'If the target is not offered, confirm the placed Actor really is BP_LabTarget or a compatible child class.'
        ],
        visual: null
      },
      {
        title: 'Prove the reference is valid before using it',
        where: 'BP_LabController → Event Graph → Event BeginPlay → Get TargetActor → Is Valid',
        do: 'Use Is Valid on TargetActor. Valid → Set Actor Hidden In Game on TargetActor = True. Not Valid → Print String “Target not assigned”.',
        why: 'References can be None or become invalid. Checking prevents confusing Accessed None errors.',
        see: 'When assigned correctly, the target cube disappears at BeginPlay.',
        check: 'Stop, clear TargetActor back to None, Play again and confirm the warning prints instead of an error.',
        troubleshoot: [
          'If you see Accessed None, you probably tried to use the reference before checking/assigning it.'
        ],
        visual: null
      },
      {
        title: 'PROVE — one graph, different target',
        where: 'Level → duplicate BP_LabTarget and BP_LabController',
        do: 'Place a second target and second controller. Assign Controller A → Target A and Controller B → Target B. Do not change the Blueprint graph.',
        why: 'Reusable Blueprints should work with different instances through data, not copied logic.',
        see: 'Each controller stores its own target assignment.',
        check: 'Swap the target assignments and prove the same class still works.',
        troubleshoot: [
          'If both controllers always affect the same target, check the placed-instance TargetActor values.'
        ],
        visual: null
      }
    ],
    mistakes: [
      'Using a Class Reference when the system needs one existing Actor.',
      'Forgetting to assign an Instance Editable reference in the level.',
      'Using a reference before checking whether it is valid.',
      'Using Get All Actors Of Class as the default way to find one known target.'
    ],
    makeItYours: [
      'Instead of hiding the target, rotate it 90 degrees.',
      'Make the controller choose between two separately exposed references.'
    ],
    worksWhen: [
      'A placed controller can point to one specific target.',
      'The graph handles an unassigned reference safely.',
      'Two controller instances can control different target instances without duplicated Blueprint classes.'
    ],
    studentRecipe: [
      'Create BP_LabTarget with a visible cube and place it.',
      'Create BP_LabController with Instance Editable BP_LabTarget Object Reference TargetActor.',
      'Assign TargetActor with the eyedropper in Details.',
      'BeginPlay → Is Valid(TargetActor) → Set Actor Hidden In Game.',
      'Duplicate both Actors and prove each controller can target a different object.'
    ],
    source: {
      title: 'Epic Games — Blueprint Communication',
      url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-communications-in-unreal-engine'
    },
    prescriptive: true
  });

  // -----------------------------------------------------------------------
  // 4. FUNCTIONS
  // -----------------------------------------------------------------------

  upsertTutorial({
    id: 'bp-lab-function-refactor',
    title: 'Replace Repeated Logic with a Function',
    category: 'blueprint-foundations-lab',
    duration: '25–30 min',
    difficulty: 'Intermediate',
    icon: 'ƒ',
    summary: 'Build a small calculation, deliberately repeat it, then refactor it into a named Function with an input so the graph becomes easier to change and understand.',
    uses: ['Function', 'Inputs', 'Return Value', 'Refactor', 'Clamp'],
    referenceLesson: 'functions',
    buildingBlocks: ['functions-events-macros', 'variables-types'],
    starterValues: [
      'Health = 100.0',
      'MaxHealth = 100.0',
      'DamageAmount = 20.0',
      'Function: ApplyDamage'
    ],
    steps: [
      {
        title: 'Create a clear piece of repeated logic',
        where: 'BP_DataLab → Event Graph',
        do: 'Make Health and MaxHealth Floats = 100. Build Set Health = Clamp(Health - 20, 0, MaxHealth). Call the same logic from two separate Custom Events called HitSmall and HitLarge, changing only the damage value.',
        why: 'Seeing the duplication first makes the reason for a Function obvious.',
        see: 'Two graph sections do almost the same job.',
        check: 'Identify which part is repeated and which value should vary.',
        troubleshoot: [
          'Keep this intentionally small. The point is to see duplication, not create a full combat system.'
        ],
        visual: null
      },
      {
        title: 'Create ApplyDamage as a Function',
        where: 'My Blueprint → Functions → + → name ApplyDamage → Function Details',
        do: 'Add a Float input called DamageAmount. Inside the function, set Health = Clamp(Health - DamageAmount, 0, MaxHealth).',
        why: 'A good Function has one clear job and takes changing values as inputs rather than relying on copied constants.',
        see: 'ApplyDamage has one Float input and contains the health calculation once.',
        check: 'There is now one authoritative place to change the damage-handling rule.',
        troubleshoot: [
          'If you cannot find Inputs, select the Function in My Blueprint and use its Details panel.',
          'Do not put Delay in this Function. Functions are not the place for latent waiting behaviour.'
        ],
        visual: null
      },
      {
        title: 'Call the same Function with different inputs',
        where: 'Event Graph → drag ApplyDamage into the graph',
        do: 'HitSmall → ApplyDamage with DamageAmount = 10. HitLarge → ApplyDamage with DamageAmount = 35. After each call, Print String Health.',
        why: 'The behaviour is reused while the input tells the Function what is different this time.',
        see: 'The same ApplyDamage node appears in both routes with different input values.',
        check: 'Starting at 100, calling HitSmall then HitLarge leaves Health at 55.',
        troubleshoot: [
          'If the wrong amount is removed, inspect the Function input wire rather than duplicating the whole calculation again.'
        ],
        visual: null
      },
      {
        title: 'Make one rule change in one place',
        where: 'Inside ApplyDamage',
        do: 'Change the function so DamageAmount is multiplied by 0.5 before subtraction. Test both HitSmall and HitLarge again.',
        why: 'Refactoring pays off when one change updates every caller consistently.',
        see: 'Both damage routes now use the new half-damage rule without editing either event graph route.',
        check: 'Explain why copied logic would have been easier to forget or make inconsistent.',
        troubleshoot: [],
        visual: null
      },
      {
        title: 'PROVE — choose Function or Custom Event',
        where: 'Written reflection / discussion',
        do: 'For each task choose Function or Custom Event and explain why: Calculate final score, Start a timed door sequence with Delay, Get remaining ammo, React to an alarm trigger.',
        why: 'Level 4 understanding means choosing the structure, not just being able to create one.',
        see: 'Four justified choices.',
        check: 'A Function is strong for named reusable calculations/actions that complete immediately; a Custom Event is appropriate as an execution entry point and can support latent flow such as Delay.',
        troubleshoot: [],
        visual: null
      }
    ],
    mistakes: [
      'Creating a Function that has no clear purpose beyond hiding a messy graph.',
      'Copying the same calculation into several places after a reusable Function already exists.',
      'Hard-coding values that should be Function inputs.',
      'Trying to use latent Delay behaviour inside a normal Function.'
    ],
    makeItYours: [
      'Add a Heal(Amount) Function using Clamp.',
      'Create a pure CanAfford(Cost) Function returning a Boolean if you are ready for the extension.'
    ],
    worksWhen: [
      'Repeated logic exists only once.',
      'Different callers pass different inputs.',
      'You can explain why a Function is preferable in this example.'
    ],
    studentRecipe: [
      'Make duplicated Health damage logic on purpose.',
      'Create ApplyDamage(DamageAmount Float).',
      'Move the shared calculation into the Function.',
      'Call it with 10 and 35.',
      'Change one rule inside the Function and prove both callers update.'
    ],
    source: {
      title: 'Epic Games — Blueprint Functions',
      url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/functions-in-unreal-engine'
    },
    prescriptive: true
  });

  // -----------------------------------------------------------------------
  // 5. ARRAYS + FOR EACH
  // -----------------------------------------------------------------------

  upsertTutorial({
    id: 'bp-lab-array-foreach',
    title: 'Control Many Actors with an Array',
    category: 'blueprint-foundations-lab',
    duration: '25–30 min',
    difficulty: 'Intermediate',
    icon: '[]',
    summary: 'Replace several separate Actor references with one Array and use For Each Loop so adding another target does not require another copy of the graph.',
    uses: ['Array', 'Actor Reference', 'For Each Loop', 'Length', 'Get'],
    buildingBlocks: ['arrays-sets-maps', 'object-class-references'],
    starterValues: [
      'Blueprint: BP_ArrayController',
      'Variable: Targets = Actor Object Reference Array',
      'Targets: 3 placed Actors to begin with'
    ],
    steps: [
      {
        title: 'Make several visible targets',
        where: 'Level Editor → place or duplicate three visible Actors',
        do: 'Use three cubes, lights or BP_LabTarget Actors. Rename them Target_A, Target_B and Target_C in the Outliner.',
        why: 'The Array needs a real collection to make the benefit visible.',
        see: 'Three distinct target Actors exist in the level.',
        check: 'Each Actor can be selected separately.',
        troubleshoot: [],
        visual: null
      },
      {
        title: 'Create one Array variable instead of Target1, Target2, Target3',
        where: 'BP_ArrayController → My Blueprint → + Variable → Actor Object Reference → container icon → Array',
        do: 'Name the variable Targets. Use the small container control beside the variable type to change Single → Array. Enable Instance Editable and Compile. Place BP_ArrayController in the level.',
        why: 'An Array stores an ordered collection of values of the same type under one variable.',
        see: 'The placed controller exposes an expandable Targets list.',
        check: 'Add three entries and assign Target_A, Target_B and Target_C.',
        troubleshoot: [
          'If you see only one object field, confirm the container type is Array rather than a single value.'
        ],
        visual: null
      },
      {
        title: 'Use For Each Loop to process every target',
        where: 'Event Graph → BeginPlay → Get Targets → For Each Loop',
        do: 'Connect Targets to For Each Loop. From Array Element, call Set Actor Hidden In Game = True. Compile and Play.',
        why: 'For Each Loop runs the same operation once for every item in the collection.',
        see: 'All three targets disappear using one copy of the action node.',
        check: 'Count the targets in the level and compare that with the number of Set Actor Hidden In Game nodes. There should still be only one action node.',
        troubleshoot: [
          'Use Array Element as the target of Set Actor Hidden In Game.',
          'If one item stays visible, inspect whether that Actor was actually assigned to the Array.'
        ],
        visual: null
      },
      {
        title: 'Use Length and Get to understand the collection',
        where: 'Get Targets → Length / Get (a copy)',
        do: 'Print Targets Length. Then use Get with Index = 0 and Print String its Display Name.',
        why: 'Length tells you how many items are stored; Get retrieves a specific item by index when order matters.',
        see: 'Length prints 3 and Index 0 identifies the first assigned Actor.',
        check: 'Explain why valid Array indexes start at 0.',
        troubleshoot: [
          'Do not request an index that does not exist. An Array with Length 3 has indexes 0, 1 and 2.'
        ],
        visual: null
      },
      {
        title: 'PROVE — add another target without adding another action node',
        where: 'Level Editor → duplicate one target → BP_ArrayController Details → Targets',
        do: 'Create Target_D and add it as the fourth Array entry. Do not change the Event Graph. Play again.',
        why: 'The collection should scale through data rather than duplicated logic.',
        see: 'Four targets are affected by the same For Each graph.',
        check: 'If you had to add a second Set Actor Hidden node, your solution has missed the purpose of the Array.',
        troubleshoot: [],
        visual: null
      }
    ],
    mistakes: [
      'Creating Target1, Target2, Target3, Target4 variables for a list that may grow.',
      'Forgetting that Array indexes start at 0.',
      'Using Get when the goal is to process every element.',
      'Leaving empty/None entries and then assuming every Array Element is valid.'
    ],
    makeItYours: [
      'Use the Array to rotate all targets instead of hiding them.',
      'Use a Point Light Actor Array and switch several lights off.'
    ],
    worksWhen: [
      'One Array holds several Actor references.',
      'One For Each Loop processes every entry.',
      'A fourth target can be added without another copy of the action logic.'
    ],
    studentRecipe: [
      'Create Targets as an Instance Editable Actor Object Reference Array.',
      'Assign three placed Actors.',
      'BeginPlay → Targets → For Each Loop → Array Element → Set Actor Hidden In Game.',
      'Print Length and Get index 0.',
      'Add Target_D without changing the graph.'
    ],
    source: {
      title: 'Epic Games — Blueprint Arrays',
      url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-arrays-in-unreal-engine'
    },
    prescriptive: true
  });

  // -----------------------------------------------------------------------
  // 6. ENUMS + SWITCH
  // -----------------------------------------------------------------------

  upsertTutorial({
    id: 'bp-lab-enum-state',
    title: 'Use an Enum for Mutually Exclusive States',
    category: 'blueprint-foundations-lab',
    duration: '25–30 min',
    difficulty: 'Intermediate',
    icon: 'E_',
    summary: 'Replace several competing Boolean state variables with one readable Enum and use Switch on Enum to handle the current state safely.',
    uses: ['Enum', 'Switch on Enum', 'State', 'Boolean design'],
    buildingBlocks: ['enums', 'branches-switches'],
    starterValues: [
      'Enum: E_DoorState',
      'States: Locked, Closed, Opening, Open',
      'Variable: DoorState = E_DoorState'
    ],
    steps: [
      {
        title: 'Spot the bad-state problem first',
        where: 'Discussion / notes before creating the Enum',
        do: 'Imagine four Booleans: IsLocked, IsClosed, IsOpening, IsOpen. Write one impossible combination the Blueprint could accidentally enter.',
        why: 'Multiple Booleans can all become True at once even when the design says only one state should be active.',
        see: 'Example: IsLocked = True and IsOpen = True at the same time.',
        check: 'Explain why that is a data-design problem rather than a Branch-node problem.',
        troubleshoot: [],
        visual: null
      },
      {
        title: 'Create E_DoorState',
        where: 'Content Drawer → right-click → Blueprints / Enumeration',
        do: 'Create E_DoorState with entries Locked, Closed, Opening and Open. Save the Enum.',
        why: 'An Enum stores one named option from a controlled list.',
        see: 'E_DoorState contains four readable entries.',
        check: 'There is no way for one Enum variable to be Locked and Open simultaneously.',
        troubleshoot: [
          'If Enumeration is hard to find, search the right-click menu for Enum.'
        ],
        visual: null
      },
      {
        title: 'Create one DoorState variable',
        where: 'BP_DataLab or a safe door Blueprint → Variables → + → type E_DoorState',
        do: 'Create DoorState using E_DoorState. Compile and choose Closed as the default.',
        why: 'One variable now represents the current state explicitly.',
        see: 'The variable dropdown offers Locked, Closed, Opening and Open.',
        check: 'Change the default to Locked and back to Closed.',
        troubleshoot: [],
        visual: null
      },
      {
        title: 'Use Switch on E_DoorState',
        where: 'Event Graph → Get DoorState → drag from execution → search Switch on E_DoorState',
        do: 'From BeginPlay, use Switch on E_DoorState. Each output prints its state name.',
        why: 'Switch is clearer than stacking several equality checks when one Enum can be in several named states.',
        see: 'The Switch node has execution outputs named after the Enum entries.',
        check: 'Change DoorState default and prove only the matching output runs.',
        troubleshoot: [
          'If the Switch outputs do not match the Enum, Compile/refresh nodes after editing the Enum asset.'
        ],
        visual: null
      },
      {
        title: 'PROVE — extend the state model',
        where: 'E_DoorState asset + existing Switch',
        do: 'Add a fifth state called Jammed. Return to the Blueprint, Compile/refresh if needed, and give Jammed its own message.',
        why: 'A well-structured state model can grow without inventing another unrelated Boolean.',
        see: 'Jammed is a named state and has its own Switch output.',
        check: 'Explain one situation where a Boolean would still be better than an Enum.',
        troubleshoot: [],
        visual: null
      }
    ],
    mistakes: [
      'Using four Booleans for states that should be mutually exclusive.',
      'Using mystery Integers such as 0,1,2,3 when readable named states matter.',
      'Adding an Enum because it looks advanced even when the data is genuinely only yes/no.'
    ],
    makeItYours: [
      'Create E_AlertState: Calm, Suspicious, Alerted.',
      'Create E_MatchPhase: Lobby, Playing, Results.'
    ],
    worksWhen: [
      'One Enum variable represents one active state.',
      'Switch on Enum routes execution clearly.',
      'You can explain when Enum is better than several Booleans.'
    ],
    studentRecipe: [
      'Identify why four state Booleans can conflict.',
      'Create E_DoorState: Locked, Closed, Opening, Open.',
      'Create DoorState variable of that Enum type.',
      'BeginPlay → Switch on E_DoorState → print each state.',
      'Add Jammed and update the Switch.'
    ],
    source: null,
    prescriptive: true
  });

  // -----------------------------------------------------------------------
  // 7. STRUCTS + MAPS
  // -----------------------------------------------------------------------

  upsertTutorial({
    id: 'bp-lab-struct-map',
    title: 'Organise Related Data with Structs and Maps',
    category: 'blueprint-foundations-lab',
    duration: '30–40 min',
    difficulty: 'Intermediate',
    icon: 'ST_',
    summary: 'Bundle fields that describe one item into a Struct, then use a Map when you need to retrieve a value by a meaningful key rather than an Array index.',
    uses: ['Struct', 'Break Struct', 'Map', 'Find', 'Key', 'Value'],
    buildingBlocks: ['structs', 'arrays-sets-maps'],
    starterValues: [
      'Struct: ST_ItemData',
      'DisplayName: Text',
      'Value: Integer',
      'Weight: Float',
      'IsQuestItem: Boolean',
      'Map: AmmoByType = Name → Integer'
    ],
    steps: [
      {
        title: 'Create one Struct that describes one item',
        where: 'Content Drawer → right-click → Blueprints / Structure',
        do: 'Create ST_ItemData. Add DisplayName Text, Value Integer, Weight Float and IsQuestItem Boolean. Save.',
        why: 'These fields belong together because they describe one item. A Struct creates one reusable data shape for that concept.',
        see: 'ST_ItemData lists four named fields with four appropriate types.',
        check: 'Explain why making four unrelated Arrays for Name, Value, Weight and Quest status would be harder to keep aligned.',
        troubleshoot: [
          'Choose each field type based on its meaning, using the variable-type rules from the first lab.'
        ],
        visual: null
      },
      {
        title: 'Create and read an ST_ItemData variable',
        where: 'BP_DataLab → Variables → + → type ST_ItemData',
        do: 'Create CurrentItem as ST_ItemData. Compile. Set DisplayName = Cell Key, Value = 50, Weight = 0.2, IsQuestItem = True.',
        why: 'One variable now carries all related fields as one piece of structured data.',
        see: 'CurrentItem expands to show the Struct members.',
        check: 'Drag CurrentItem into the graph and use Break ST_ItemData. Print DisplayName and Value.',
        troubleshoot: [
          'If the Struct type does not appear, save ST_ItemData and return to the Blueprint type picker.'
        ],
        visual: null
      },
      {
        title: 'Create a Map when the lookup itself has meaning',
        where: 'BP_DataLab → + Variable → choose Name → container menu Map → Value Type Integer',
        do: 'Create AmmoByType. Set its key type to Name, change the container from Single to Map, then set the value type to Integer. Compile. Add Pistol → 12 and Shotgun → 4 as default entries.',
        why: 'A Map stores key → value relationships. You can ask for Shotgun directly instead of remembering that Shotgun happens to be Array index 1.',
        see: 'AmmoByType contains named keys with integer quantities.',
        check: 'Explain the relationship in plain English: Pistol maps to 12; Shotgun maps to 4.',
        troubleshoot: [
          'Map keys should be unique. If you need duplicates in an ordered list, an Array is a different shape of data.',
          'For this beginner example use Name as the key. A Struct such as ST_ItemData is better used as a Map value, for example Name → ST_ItemData.'
        ],
        visual: null
      },
      {
        title: 'Use Find to retrieve by key',
        where: 'Event Graph → Get AmmoByType → Find',
        do: 'Drag AmmoByType into the graph as Get, drag from the Map pin and choose Find. Set the key to Pistol and print the returned Integer. Then Find Shotgun. Use the Found Boolean when the key might not exist.',
        why: 'Maps are useful when you know the meaningful key and want the associated value.',
        see: 'Pistol returns 12 and Shotgun returns 4.',
        check: 'Change Shotgun to 6 in the Map and prove Find returns 6 without changing an index.',
        troubleshoot: [
          'If a key may not exist, use the Map result/found information appropriately before assuming a value is present.'
        ],
        visual: null
      },
      {
        title: 'PROVE — choose Array, Struct or Map',
        where: 'Written decision task',
        do: 'Choose the best shape and justify it: (1) patrol points in travel order, (2) one weapon with Name/Damage/AmmoType, (3) ammo amount looked up by ammo type, (4) every enemy currently alive.',
        why: 'Containers and Structs solve different data problems. The decision should come from how the data is organised and retrieved.',
        see: 'Four choices with reasons.',
        check: 'Likely answers: Array, Struct, Map, Array — but your justification should name order, grouped fields or key-based lookup.',
        troubleshoot: [],
        visual: null
      }
    ],
    mistakes: [
      'Using a Struct as though it were a collection of many items.',
      'Using an Array index when the real lookup is a meaningful key.',
      'Creating parallel Arrays that must stay perfectly synchronised field by field.',
      'Choosing Map when duplicate ordered entries are required.'
    ],
    makeItYours: [
      'Add Description Text to ST_ItemData.',
      'Create a Map from Name → ST_ItemData as a more advanced extension.'
    ],
    worksWhen: [
      'One Struct groups related fields.',
      'One Map supports key-based lookup.',
      'You can justify Array vs Struct vs Map from the data problem.'
    ],
    studentRecipe: [
      'Create ST_ItemData with Text, Integer, Float and Boolean fields.',
      'Create CurrentItem and Break ST_ItemData.',
      'Create AmmoByType Map: Name → Integer.',
      'Add Pistol 12 and Shotgun 4.',
      'Use Find to retrieve by key.',
      'Finish with the Array/Struct/Map choice task.'
    ],
    source: {
      title: 'Epic Games — Blueprint Maps',
      url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-maps-in-unreal-engine'
    },
    prescriptive: true
  });

  // -----------------------------------------------------------------------
  // 8. FINAL SYSTEM
  // -----------------------------------------------------------------------

  upsertTutorial({
    id: 'bp-lab-final-system',
    title: 'Build an Access-Control Test System',
    category: 'blueprint-foundations-lab',
    duration: '45–60 min',
    difficulty: 'Intermediate',
    icon: '⚙',
    summary: 'Combine variable types, comparisons, references, Functions and one collection/state structure into a small system, then explain why each choice belongs there.',
    uses: ['Variables', 'Branch', 'Object Reference', 'Function', 'Array or Enum', 'Testing'],
    buildingBlocks: ['variables-types', 'branches-switches', 'object-class-references', 'functions-events-macros', 'arrays-sets-maps', 'enums'],
    starterValues: [
      'KeysOwned: Integer = 0',
      'KeysRequired: Integer = 2',
      'DoorLocked: Boolean = True',
      'TargetDoor: Object Reference',
      'Function: CanOpenDoor → Boolean'
    ],
    steps: [
      {
        title: 'Plan the data before drawing nodes',
        where: 'Notes / comments in Blueprint',
        do: 'Write the system in plain language: “The player needs enough keys. The controller knows which door it controls. It asks whether the requirement is met, then changes the door state.” List the variables and their types before building the graph.',
        why: 'Programming becomes easier when the data model and rule are clear before implementation.',
        see: 'At minimum: KeysOwned Integer, KeysRequired Integer, TargetDoor Object Reference and one state variable such as DoorLocked Boolean or DoorState Enum.',
        check: 'Every variable has a one-sentence purpose.',
        troubleshoot: [
          'If you cannot explain what a variable represents, do not create it yet.'
        ],
        visual: null
      },
      {
        title: 'Create CanOpenDoor as a reusable question',
        where: 'My Blueprint → Functions → + → CanOpenDoor',
        do: 'Make CanOpenDoor return a Boolean based on KeysOwned >= KeysRequired. Keep the function focused on answering the question.',
        why: 'Naming the rule makes the Event Graph readable and keeps the comparison in one place.',
        see: 'CanOpenDoor produces True or False.',
        check: 'Test it with 0, 1, 2 and 3 keys when KeysRequired = 2.',
        troubleshoot: [
          'If you are changing the door inside CanOpenDoor, separate the question from the action for this exercise.'
        ],
        visual: null
      },
      {
        title: 'Use the result to choose behaviour',
        where: 'Event Graph → your Test/Open Custom Event → CanOpenDoor → Branch',
        do: 'True route changes the door state/open result. False route prints a clear message with how many keys are still needed.',
        why: 'The graph now reads as a rule: ask the question, branch on the answer, perform the correct action.',
        see: 'Both success and failure routes are visible and testable.',
        check: 'Test one failing value and one passing value.',
        troubleshoot: [
          'Do not test only the successful case.'
        ],
        visual: null
      },
      {
        title: 'Use an Object Reference for the actual controlled door',
        where: 'Controller Blueprint → Instance Editable TargetDoor → Level Details',
        do: 'Assign one placed target door/Actor. Use Is Valid before acting on it.',
        why: 'The system should know which real object it controls without searching the whole level.',
        see: 'A placed controller instance points to one placed door instance.',
        check: 'Duplicate the setup and assign a different target to the second controller.',
        troubleshoot: [
          'If the variable says None in Details, assign the reference before blaming the Branch.'
        ],
        visual: null
      },
      {
        title: 'Add one structure for growth: Array OR Enum',
        where: 'Choose the extension that fits your idea',
        do: 'Option A: Array — store several indicator Actors/lights and use For Each Loop to change them together. Option B: Enum — use E_DoorState for Locked, Closed, Open (and optionally Jammed) with Switch on Enum.',
        why: 'The extension must solve a real organisation/state problem, not exist just to tick a node off a list.',
        see: 'Either one collection scales without copied references, or one Enum replaces competing state Booleans.',
        check: 'Explain why your chosen extension is a better fit than the other option.',
        troubleshoot: [],
        visual: null
      },
      {
        title: 'MAKE → BREAK → FIX → EXPLAIN',
        where: 'Working access-control system → changed brief',
        do: 'First prove the system works with KeysRequired = 2. Then BREAK the brief on purpose: (1) change the requirement to 4 keys; (2) duplicate the setup so three doors can use the same logic with different TargetDoor references; (3) if you used an Enum, add Jammed as a new state — or if you used an Array, add a fourth indicator without another copy of the action node. FIX the system without rebuilding it from scratch. Finally explain one variable type choice, one comparison, one reference, one Function and your Array/Enum choice.',
        why: 'Maintainable programming survives a changed requirement. The point is not that Version 1 worked; it is that the structure lets Version 2 change safely.',
        see: 'The system still works after the requirement changes, reused Blueprint instances target different doors, and the chosen Array/Enum extension grows without copy-paste logic.',
        check: 'You can show the working result and answer “Why did you use this?” for every required concept. You can also identify which parts changed and which parts did not need rewriting.',
        troubleshoot: [
          'If changing KeysRequired forces you to rewrite multiple nodes, find hard-coded copies and replace them with the variable.',
          'If three doors require three different Blueprint classes, check whether the difference could instead be Instance Editable data/references.',
          'If adding one Array item requires another action node, the loop is not doing the scalable work yet.'
        ],
        visual: null
      }
    ],
    mistakes: [
      'Hard-coding the key requirement into several nodes.',
      'Using Get All Actors Of Class to find one known door.',
      'Adding an Array/Enum only to satisfy the checklist rather than solve a data problem.',
      'Testing only the success path.',
      'Being able to describe what a node does but not why it was chosen.'
    ],
    makeItYours: [
      'Replace keys with clearance level, currency or objectives completed.',
      'Add a UI message that shows KeysOwned / KeysRequired.',
      'Use an Enum state extension and an Array of indicator lights together if the base system is already clean.'
    ],
    worksWhen: [
      'Changing the requirement changes behaviour through data rather than graph rewrites.',
      'The controlled object is an explicit reference.',
      'A Function has one clear reusable job.',
      'An Array or Enum solves a genuine organisation/state problem.',
      'The student can justify the choices.'
    ],
    studentRecipe: [
      'Plan variables first.',
      'Create CanOpenDoor from KeysOwned >= KeysRequired.',
      'Branch into success/failure.',
      'Use an assigned TargetDoor Object Reference.',
      'Add either an Array or Enum for a genuine reason.',
      'Change KeysRequired and explain why each concept was used.'
    ],
    source: null,
    prescriptive: true
  });


  // -----------------------------------------------------------------------
  // CLASSROOM SCREENSHOT PASS — REAL UE5 UI AT THE POINT OF NEED
  // -----------------------------------------------------------------------

  addStepVisual('bp-lab-variable-types', 'Create a Boolean for a yes/no fact', {
    src: 'assets/tutorials/blueprint-foundations/variables-01-type-picker.webp',
    caption: 'Open the variable type picker from My Blueprint. Unreal offers many types; for this lab focus on Boolean, Integer, Float, Text, Vector and Object Reference. Choose from what the data means, not from the pin colour.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-variable-types', 'Create an Object Reference for one specific Actor', {
    src: 'assets/tutorials/blueprint-foundations/refs-03-bp-lab-target-variable.webp',
    caption: 'ActorSelect is now an exact BP_LabTarget Object Reference. The open-eye icon shows it is Instance Editable, so each placed controller can point at a different BP_LabTarget instance.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-variable-types', 'Use Get to read and Set to change state', {
    src: 'assets/tutorials/blueprint-foundations/variables-03-get-set-bool.webp',
    caption: 'The larger Set node changes Door Locked?; the smaller Get node reads its current value. Both red data pins show that Door Locked? is a Boolean.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-data-decisions', 'Build the pattern: DATA → TEST → DECISION → ACTION', {
    src: 'assets/tutorials/blueprint-foundations/logic-02-correct-compare-branch.webp',
    caption: 'KeysOwned feeds one side of >= and KeysRequired feeds the other. The comparison returns a Boolean, which feeds Branch Condition: DATA → TEST → DECISION.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-object-reference', 'Create the controller and expose a reference', {
    src: 'assets/tutorials/blueprint-foundations/refs-03-bp-lab-target-variable.webp',
    caption: 'This is the exact target type used by the lab: ActorSelect is a BP_LabTarget Object Reference and is Instance Editable.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-object-reference', 'Assign the exact target in the level', {
    src: 'assets/tutorials/blueprint-foundations/refs-04-bp-lab-target-picker.webp',
    caption: 'On the placed controller, Actor Select currently says None. Use Pick Actor from scene / the eyedropper to assign the exact BP_LabTarget instance.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-function-refactor', 'Create ApplyDamage as a Function', {
    src: 'assets/tutorials/blueprint-foundations/functions-02-custom-entry.webp',
    caption: 'The custom ApplyDamage Function entry node. This is your own Function, not Unreal’s built-in Apply Damage gameplay node.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-function-refactor', 'Create ApplyDamage as a Function', {
    src: 'assets/tutorials/blueprint-foundations/functions-03-custom-input-details.webp',
    caption: 'Function Details showing the DamageAmount input. This classroom capture uses Integer; the lab text uses Float so fractional damage is possible. The important idea is the same: changing data enters through a named Function input.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-function-refactor', 'Create ApplyDamage as a Function', {
    src: 'assets/tutorials/blueprint-foundations/functions-04-custom-calculation.webp',
    caption: 'Inside ApplyDamage: Current Health and Damage Amount feed the calculation, then Set Current Health stores the result. One calculation now lives in one authoritative place.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-function-refactor', 'Call the same Function with different inputs', {
    src: 'assets/tutorials/blueprint-foundations/functions-05-custom-call.webp',
    caption: 'A call to the custom Apply Damage Function. The caller supplies the Target and Damage Amount; the Function owns the repeated calculation.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-array-foreach', 'Create one Array variable instead of Target1, Target2, Target3', {
    src: 'assets/tutorials/blueprint-foundations/variables-02-container-menu.webp',
    caption: 'The small container menu beside Variable Type changes a variable from Single to Array. Single stores one value; Array stores many values of the same type.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-array-foreach', 'Create one Array variable instead of Target1, Target2, Target3', {
    src: 'assets/tutorials/blueprint-foundations/arrays-01-vector-array-details.webp',
    caption: 'This screenshot shows a Vector Array so the Array container icon is easy to recognise. For this lab use an Actor Object Reference Array instead — the container idea is the same.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-array-foreach', 'Use For Each Loop to process every target', {
    src: 'assets/tutorials/blueprint-foundations/arrays-02-for-each-loop.webp',
    caption: 'Connect the Array into For Each Loop. Loop Body runs once per item, Array Element is the current item, Array Index tells you its position, and Completed fires once after the whole Array is finished.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-struct-map', 'Create one Struct that describes one item', {
    src: 'assets/tutorials/blueprint-foundations/structs-01-create-structure.webp',
    caption: 'Create a Structure asset from the Blueprint asset menu, then give it a clear ST_ name.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-struct-map', 'Create one Struct that describes one item', {
    src: 'assets/tutorials/blueprint-foundations/structs-02-asset.webp',
    caption: 'The finished ST_ItemData Structure asset in the Content Drawer.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-struct-map', 'Create one Struct that describes one item', {
    src: 'assets/tutorials/blueprint-foundations/structs-03-fields.webp',
    caption: 'ST_ItemData with DisplayName Text, Value Integer, Weight Float and IsQuestItem Boolean. These four fields travel together because they describe one item.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-struct-map', 'Create and read an ST_ItemData variable', {
    src: 'assets/tutorials/blueprint-foundations/structs-04-select-type.webp',
    caption: 'After saving ST_ItemData, select it from the Blueprint variable type picker.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-struct-map', 'Create and read an ST_ItemData variable', {
    src: 'assets/tutorials/blueprint-foundations/structs-06-item-defaults.webp',
    caption: 'A variable using ST_ItemData exposes the Struct members together in Default Value. This classroom variable is called Items; your lab can call the single current item CurrentItem.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-struct-map', 'Create a Map when the lookup itself has meaning', {
    src: 'assets/tutorials/blueprint-foundations/maps-02-container-menu.webp',
    caption: 'Start with the Name key type, then use the container menu to change Single to Map.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-struct-map', 'Create a Map when the lookup itself has meaning', {
    src: 'assets/tutorials/blueprint-foundations/maps-03-name-integer-defaults.webp',
    caption: 'AmmoByType is a Name → Integer Map. The default entries make the relationship visible: Pistol → 12 and Shotgun → 4.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-struct-map', 'Use Find to retrieve by key', {
    src: 'assets/tutorials/blueprint-foundations/maps-04-find-search.webp',
    caption: 'Drag from the AmmoByType Map pin and search Find under Map actions.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addStepVisual('bp-lab-struct-map', 'Use Find to retrieve by key', {
    src: 'assets/tutorials/blueprint-foundations/maps-05-find-pistol.webp',
    caption: 'Find looks up a meaningful key. Here the key is Pistol; the node returns the stored Integer value and a Found Boolean.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-enum-state', 'Create E_DoorState', {
    src: 'assets/tutorials/blueprint-foundations/enums-01-create-enum.webp',
    caption: 'In the Content Drawer create/search for an Enumeration asset. Give it a useful name such as E_DoorState rather than leaving a generic test name.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-enum-state', 'Create E_DoorState', {
    src: 'assets/tutorials/blueprint-foundations/enums-02-enum-asset.webp',
    caption: 'A custom Enum is just a controlled list of named choices. This example uses Yes / No / Maybe; your door lab should use Locked / Closed / Opening / Open.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-enum-state', 'Create one DoorState variable', {
    src: 'assets/tutorials/blueprint-foundations/enums-03-variable-type.webp',
    caption: 'After saving the Enum asset, find it by name in the variable type picker. Selecting it makes the variable use your custom named states.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addStepVisual('bp-lab-enum-state', 'Use Switch on E_DoorState', {
    src: 'assets/tutorials/blueprint-foundations/enums-04-switch.webp',
    caption: 'Feed the Enum value into Selection on Switch on Enum. Only the matching named execution output runs. Your door version will show Locked, Closed, Opening and Open instead of this Yes / No / Maybe example.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  // Reuse the same authentic classroom screenshots in the underlying Building Blocks
  // so students see the real UI even when they arrive via a concept page rather than the pathway.
  addBlockVisual('variables-types', {
    src: 'assets/tutorials/blueprint-foundations/variables-01-type-picker.webp',
    caption: 'Current classroom variable type picker. The list is large; learn the types when a game-data problem actually needs them.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('variables-types', {
    src: 'assets/tutorials/blueprint-foundations/variables-03-get-set-bool.webp',
    caption: 'Get reads a variable; Set changes it. This Boolean example makes the difference visible.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('branches-switches', {
    src: 'assets/tutorials/blueprint-foundations/logic-02-correct-compare-branch.webp',
    caption: 'KeysOwned >= KeysRequired produces the Boolean that Branch uses to choose True or False execution.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('object-class-references', {
    src: 'assets/tutorials/blueprint-foundations/refs-03-bp-lab-target-variable.webp',
    caption: 'Exact BP_LabTarget Object Reference with Instance Editable enabled. Each placed controller can be assigned a specific target Actor.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('object-class-references', {
    src: 'assets/tutorials/blueprint-foundations/refs-04-bp-lab-target-picker.webp',
    caption: 'On the placed controller, None means the reference has not been assigned. Pick Actor from scene / the eyedropper assigns the real target.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('arrays-sets-maps', {
    src: 'assets/tutorials/blueprint-foundations/variables-02-container-menu.webp',
    caption: 'The container control changes a Single variable into an Array (or another supported container type).',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('arrays-sets-maps', {
    src: 'assets/tutorials/blueprint-foundations/arrays-02-for-each-loop.webp',
    caption: 'For Each Loop processes every Array entry using one reusable Loop Body.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('enums', {
    src: 'assets/tutorials/blueprint-foundations/enums-02-enum-asset.webp',
    caption: 'A custom Enum asset stores one controlled list of readable named choices.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('enums', {
    src: 'assets/tutorials/blueprint-foundations/enums-04-switch.webp',
    caption: 'Switch on Enum exposes one execution route for each named Enum value.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  addBlockVisual('functions-events-macros', {
    src: 'assets/tutorials/blueprint-foundations/functions-04-custom-calculation.webp',
    caption: 'A real custom ApplyDamage Function keeps the health calculation in one place and receives changing data through an input.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('structs', {
    src: 'assets/tutorials/blueprint-foundations/structs-03-fields.webp',
    caption: 'ST_ItemData groups four related fields into one reusable data type.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('arrays-sets-maps', {
    src: 'assets/tutorials/blueprint-foundations/maps-03-name-integer-defaults.webp',
    caption: 'A Name → Integer Map stores meaningful key/value pairs such as Pistol → 12 and Shotgun → 4.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });
  addBlockVisual('arrays-sets-maps', {
    src: 'assets/tutorials/blueprint-foundations/maps-05-find-pistol.webp',
    caption: 'Find retrieves the value stored against a key and reports whether that key was found.',
    sourceTitle: 'Teacher classroom capture — Unreal Engine',
    kind: 'local'
  });

  // -----------------------------------------------------------------------
  // PATHWAY
  // -----------------------------------------------------------------------

  upsertPath({
    id: 'blueprint-foundations-lab',
    icon: '◇',
    title: 'Blueprint Foundations: Data → Logic → Systems',
    kicker: 'STATE • TYPES • DECISIONS • REFERENCES • STRUCTURE',
    summary: 'Refresh the programming basics by building tiny Blueprint proofs. Choose data from meaning, understand runtime state and ownership, turn data into decisions, communicate between Actors, debug from evidence and organise systems without copy-paste logic.',
    outcome: 'A small access-control Blueprint system plus evidence that you can choose and explain variable types, state/ownership, execution flow, comparisons, references, Functions, collections and named states — then adapt the system when the brief changes.',
    audience: 'Built for Level 4 Games students revisiting Blueprint fundamentals, but useful for anyone who can follow nodes and now needs to understand why they are choosing them.',
    steps: [
      {
        type: 'checkpoint',
        id: 'bp-foundations-start-rule',
        title: 'Start rule — do not copy nodes you cannot explain',
        icon: '◎',
        area: 'Blueprint Foundations Lab',
        description: 'For every lab use the same routine: WATCH / LEARN → MAKE → PREDICT → TEST → TRACE → CHANGE → RETEST → EXPLAIN. If your version only works because it matches the teacher screen, you are not finished.',
        actionLabel: 'I understand the rule'
      },
      {
        type: 'lesson',
        id: 'variables',
        why: 'LEARN • Refresh what a variable is, what state means and how Blueprint Get/Set nodes work.'
      },
      {
        type: 'tutorial',
        id: 'bp-lab-variable-types',
        why: 'MAKE • Create Bool, Integer, Float, Text, Vector and Object Reference variables and choose them from what the data actually means.'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-type-choice',
        title: 'PROVE — choose the type without Unreal helping you',
        icon: '▦',
        area: 'Data choice',
        href: '#/tutorial/bp-lab-variable-types',
        description: 'Choose and justify a type for: IsBossDead, AmmoInMagazine, ReloadTime, PlayerNameShownOnHUD, RespawnPosition and CurrentTarget. Do not use “because the pin is that colour” as a reason.',
        actionLabel: 'Type choices explained'
      },
      {
        type: 'tutorial',
        id: 'bp-lab-state-flow',
        why: 'MAKE • Prove default vs runtime state, change data per placed instance, read execution vs data wires, decide variable ownership and practise PREDICT → TEST → TRACE.'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-debug-habit',
        title: 'PROVE — explain before you fix',
        icon: '⌁',
        area: 'Debugging habit',
        href: '#/tutorial/bp-lab-state-flow',
        description: 'Show one bug or deliberate wrong result. Before changing the graph, state: (1) what you predicted, (2) what actually happened, (3) the first value/node you traced, and (4) what evidence made you choose the fix.',
        actionLabel: 'Prediction + trace explained'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-quiz-variables',
        title: 'QUICK CHECK — Variables & State',
        icon: '?',
        area: 'Required knowledge check',
        href: 'blueprint-checks.html#variables',
        description: 'Complete the required practical proof list, then score at least 4/5 on the Variables & State check before moving on.',
        actionLabel: 'Open required steps + quiz'
      },
      {
        type: 'lesson',
        id: 'branches',
        why: 'LEARN • Refresh Boolean questions, comparisons and Branch before you start combining conditions.'
      },
      {
        type: 'tutorial',
        id: 'bp-lab-data-decisions',
        why: 'MAKE • Build DATA → TEST → DECISION → ACTION and decide when Branch or Select is the cleaner node.'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-quiz-logic',
        title: 'QUICK CHECK — Logic & Branching',
        icon: '?',
        area: 'Required knowledge check',
        href: 'blueprint-checks.html#logic',
        description: 'Show both outcomes of your comparison/Branch graph, then score at least 4/5 on the Logic check.',
        actionLabel: 'Open required steps + quiz'
      },
      {
        type: 'tutorial',
        id: 'bp-lab-object-reference',
        why: 'MAKE • Prove the difference between knowing a class/type and holding a reference to one specific Actor in the level.'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-quiz-references',
        title: 'QUICK CHECK — References',
        icon: '?',
        area: 'Required knowledge check',
        href: 'blueprint-checks.html#references',
        description: 'Prove a placed Blueprint controls the intended Actor and handles None safely, then score at least 4/5.',
        actionLabel: 'Open required steps + quiz'
      },
      {
        type: 'lesson',
        id: 'functions',
        why: 'LEARN • Refresh how Functions package a clear reusable job.'
      },
      {
        type: 'tutorial',
        id: 'bp-lab-function-refactor',
        why: 'MAKE • Deliberately create duplication, then remove it with a Function and prove one rule change updates every caller.'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-quiz-functions',
        title: 'QUICK CHECK — Functions',
        icon: '?',
        area: 'Required knowledge check',
        href: 'blueprint-checks.html#functions',
        description: 'Show that repeated logic exists once and different callers pass different inputs, then score at least 4/5.',
        actionLabel: 'Open required steps + quiz'
      },
      {
        type: 'tutorial',
        id: 'bp-lab-array-foreach',
        why: 'MAKE • Replace Target1 / Target2 / Target3 thinking with one collection and one For Each Loop.'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-quiz-arrays',
        title: 'QUICK CHECK — Arrays & Loops',
        icon: '?',
        area: 'Required knowledge check',
        href: 'blueprint-checks.html#arrays',
        description: 'Add another target without adding another action node, then score at least 4/5 on Arrays & Loops.',
        actionLabel: 'Open required steps + quiz'
      },
      {
        type: 'tutorial',
        id: 'bp-lab-enum-state',
        why: 'MAKE • Replace competing state Booleans with one readable Enum when only one named state should be active.'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-quiz-enums',
        title: 'QUICK CHECK — Enums & State',
        icon: '?',
        area: 'Required knowledge check',
        href: 'blueprint-checks.html#enums',
        description: 'Add a new named state and prove Switch on Enum handles it, then score at least 4/5.',
        actionLabel: 'Open required steps + quiz'
      },
      {
        type: 'tutorial',
        id: 'bp-lab-struct-map',
        why: 'MAKE • Group fields that describe one thing with a Struct, then use a Map when the lookup is key → value.'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-quiz-structured-data',
        title: 'QUICK CHECK — Structs & Maps',
        icon: '?',
        area: 'Required knowledge check',
        href: 'blueprint-checks.html#structured-data',
        description: 'Build one Struct and one key → value Map, then score at least 4/5 on the data-organisation check.',
        actionLabel: 'Open required steps + quiz'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-code-clinic',
        title: 'CODE DOCTOR — diagnose six weak designs',
        icon: '⚒',
        area: 'Programming judgement',
        description: 'For each example name the problem, the better Blueprint structure and WHY: (1) Health is stored as Text; (2) IsIdle + IsOpening + IsOpen + IsClosing can all become true; (3) Target1 through Target8 all receive the same action; (4) the same damage calculation is copied into five places; (5) an Object Reference still says None but the graph uses it anyway; (6) KeysRequired = 3 is typed directly into four different comparison nodes. Fix the design on paper before touching Unreal.',
        actionLabel: 'Six designs diagnosed'
      },
      {
        type: 'tutorial',
        id: 'bp-lab-final-system',
        why: 'BUILD • Combine the fundamentals into one small access-control system. You must be able to change it and explain every structural choice.'
      },
      {
        type: 'checkpoint',
        id: 'bp-foundations-final-explanation',
        title: 'Final proof — explain your Blueprint like a programmer',
        icon: '✓',
        area: 'Level 4 evidence',
        href: '#/tutorial/bp-lab-final-system',
        description: 'Show the working system, then accept a changed brief. Change the key requirement, reuse the system with multiple door instances/references, and grow the Array/Enum extension without copy-paste logic. Explain: What state are you storing? Who owns it? Why those types? What Boolean question drives the Branch? What exact Actor does the reference point to? Why did you use the Function and your Array/Enum? Finish by showing what changed and what did not need rewriting.',
        actionLabel: 'MAKE → BREAK → FIX → EXPLAIN complete'
      }
      ,
      {
        type: 'checkpoint',
        id: 'bp-foundations-final-quiz',
        title: 'FINAL CHECK — Blueprint Foundations',
        icon: '★',
        area: 'Required knowledge check',
        href: 'blueprint-checks.html#final',
        description: 'Complete the final practical proof list and score at least 8/10 on the scenario-based Blueprint Foundations check.',
        actionLabel: 'Take final 10-question check'
      }
    ]
  });

  // Link these new labs back from the existing Building Blocks.
  [
    ['variables-types', 'bp-lab-variable-types'],
    ['variables-types', 'bp-lab-state-flow'],
    ['events-execution', 'bp-lab-state-flow'],
    ['variables-types', 'bp-lab-data-decisions'],
    ['branches-switches', 'bp-lab-data-decisions'],
    ['object-class-references', 'bp-lab-object-reference'],
    ['functions-events-macros', 'bp-lab-function-refactor'],
    ['arrays-sets-maps', 'bp-lab-array-foreach'],
    ['enums', 'bp-lab-enum-state'],
    ['structs', 'bp-lab-struct-map'],
    ['arrays-sets-maps', 'bp-lab-struct-map']
  ].forEach(([blockId, tutorialId]) => addBlockTutorial(blockId, tutorialId));

  TOOLS.version = '3.44.5';
  PATHWAYS.version = '3.44.5';
  PATHWAYS.buildDate = '2026-09-06';
})();
