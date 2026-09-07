/* v3.44.9 — Blueprint Drive Harvest
   Additive learning + visual patch only.

   Uses authentic classroom/reference Unreal screenshots from the connected
   Drive image bank. Several captures come from an earlier Unreal UI.
   The concepts are still useful, but students should follow current UE5.8
   text/live teaching for exact menus and panel appearance.
*/
(() => {
  'use strict';

  const TOOLS = window.UE5_TUTORIAL_DATA;
  const BLOCKS = window.UE5_BUILDING_BLOCK_DATA;

  if (!TOOLS || !BLOCKS) {
    console.warn('[v3.44.9] Blueprint Drive Harvest skipped: tutorial/block data unavailable.');
    return;
  }

  const legacyNote = 'REFERENCE CAPTURE • This screenshot comes from an earlier Unreal UI. The Blueprint concept/node pattern remains useful, but current UE5.8 panels or menus may look different. Follow the live demo/current Hub text for exact clicks.';
  const localRef = {
    sourceTitle: 'Classroom/reference capture — Unreal Engine (earlier UI)',
    kind: 'local'
  };

  function V(src, caption, current = false) {
    return {
      src: `assets/tutorials/blueprint-reference/${src}`,
      caption: current ? caption : `${caption} ${legacyNote}`,
      ...localRef
    };
  }

  function upsertCategory(category) {
    TOOLS.categories = TOOLS.categories || [];
    const i = TOOLS.categories.findIndex(x => x.id === category.id);
    if (i >= 0) TOOLS.categories[i] = category;
    else TOOLS.categories.push(category);
  }

  function upsertTutorial(tutorial) {
    TOOLS.tutorials = TOOLS.tutorials || [];
    const i = TOOLS.tutorials.findIndex(x => x.id === tutorial.id);
    if (i >= 0) TOOLS.tutorials[i] = tutorial;
    else TOOLS.tutorials.push(tutorial);
  }

  function addBlockTutorial(blockId, tutorialId) {
    const block = (BLOCKS.blocks || []).find(x => x.id === blockId);
    if (!block) return;
    block.tutorials = block.tutorials || [];
    if (!block.tutorials.includes(tutorialId)) block.tutorials.push(tutorialId);
  }

  function addBlockVisual(blockId, visual) {
    const block = (BLOCKS.blocks || []).find(x => x.id === blockId);
    if (!block) return;
    const current = Array.isArray(block.visual) ? block.visual : (block.visual ? [block.visual] : []);
    if (!current.some(x => x?.src === visual.src)) block.visual = [...current, visual];
  }

  upsertCategory({
    id: 'blueprint-tools',
    title: 'Procedural & Editor Tools',
    icon: '⚙',
    description: 'Construction Scripts, splines, instancing and small editor tools that turn Blueprint into a level-design multiplier.'
  });

  // -------------------------------------------------------------------
  // 1. PROCEDURAL GRID
  // -------------------------------------------------------------------
  upsertTutorial({
    id: 'bp-procedural-grid',
    title: 'Build a Procedural Mesh Grid',
    category: 'blueprint-tools',
    duration: '30–40 min',
    difficulty: 'Intermediate',
    icon: '▦',
    featured: true,
    summary: 'Use an Instanced Static Mesh Component and Construction Script to turn a few editable values into a repeated grid. Then prove the graph is reusable by changing the mesh and spacing without rewriting the system.',
    uses: ['Construction Script', 'Instanced Static Mesh', 'Object Reference', 'For Loop', 'Transform', 'Instance Editable'],
    buildingBlocks: ['construction-script', 'variables-types', 'object-class-references', 'events-execution'],
    starterValues: [
      'StaticMeshVar: Static Mesh Object Reference',
      'InstancesPerRow: 10',
      'NumberOfRows: 10',
      'SpaceBetweenInstances: 100–300 uu',
      'SpaceBetweenRows: 100–300 uu'
    ],
    steps: [
      {
        title: 'Store the mesh as data, not as hard-wired graph logic',
        where: 'Actor Blueprint → My Blueprint → + Variable → Static Mesh Object Reference',
        do: 'Create StaticMeshVar as a Static Mesh Object Reference and make it Instance Editable. Assign a simple mesh on the placed Actor after compiling.',
        why: 'The system needs one actual mesh asset to repeat. Exposing the reference means the level designer can swap chair, bush or another mesh without editing the graph.',
        see: 'The variable uses an object/reference type and the placed Actor exposes a mesh field.',
        check: 'You can change the mesh on one placed instance without changing the Blueprint Class.',
        troubleshoot: ['Choose an Object Reference for an asset you want to assign; do not choose a Class Reference just because both appear in the picker.'],
        visual: [
          V('grid-01-static-mesh-reference-type.webp', 'The type picker distinguishes Object Reference from Class Reference.'),
          V('grid-02-instance-editable-mesh.webp', 'StaticMeshVar is exposed so the placed Blueprint instance can choose a mesh.')
        ]
      },
      {
        title: 'Expose the grid as four clear parameters',
        where: 'My Blueprint → Variables',
        do: 'Create InstancesPerRow and NumberOfRows as Integers. Create SpaceBetweenInstances and SpaceBetweenRows as Floats. Make the values you want designers to tune Instance Editable.',
        why: 'Rows, columns and spacing are design decisions. They belong in named variables instead of being buried as mystery numbers inside maths nodes.',
        see: 'The Blueprint has four understandable grid controls.',
        check: 'Say what each value changes before you touch the graph.',
        troubleshoot: ['Keep counts as Integers. Spacing can be Float because position calculations may use decimal values.'],
        visual: V('grid-03-grid-parameters.webp', 'A compact parameter set for row counts and spacing.')
      },
      {
        title: 'Add an Instanced Static Mesh Component',
        where: 'Components → + Add → search Instanced Static Mesh',
        do: 'Add an Instanced Static Mesh Component. In Construction Script, set its Static Mesh from StaticMeshVar before adding instances.',
        why: 'An ISM component is designed to hold many copies of the same mesh efficiently and gives the Blueprint one component to manage.',
        see: 'The Actor contains an Instanced Static Mesh Component and it receives the selected StaticMeshVar.',
        check: 'Changing StaticMeshVar changes the mesh used by the instances.',
        troubleshoot: ['If you only add normal Static Mesh Components in a loop, you are building a different and heavier system.'],
        visual: V('grid-04-add-ism-component.webp', 'Instanced and Hierarchical Instanced Static Mesh components appear in the component search.')
      },
      {
        title: 'Build the grid in Construction Script',
        where: 'Blueprint → Construction Script',
        do: 'Use nested counting logic: one count for rows and one for instances across each row. Multiply the current indices by the spacing variables to create X/Y positions, make a Transform, then Add Instance to the ISM component.',
        why: 'The pattern is more important than any individual node: INDEX × SPACING = POSITION. Repeating that across two axes creates a grid.',
        see: 'Changing row count or spacing on the placed Actor rebuilds the pattern in the editor.',
        check: 'Trace one instance: which row/index produced its X and Y location?',
        troubleshoot: [
          'If every instance appears on top of the others, one of your index × spacing calculations is not reaching the Transform.',
          'If the graph grows confusing, prove one row first, then add the second loop.'
        ],
        visual: [
          V('grid-05-construction-script.webp', 'Construction Script is the editor-time entry point for this procedural placement system.'),
          V('grid-06-grid-loop-a.webp', 'The graph sets the mesh and begins the repeated position calculation.'),
          V('grid-07-grid-loop-b.webp', 'The repeated position is turned into a Transform and added as an instance.')
        ]
      },
      {
        title: 'Test the exposed controls in the level',
        where: 'Place the Blueprint → Details',
        do: 'Start with 10 × 10 and a sensible spacing value. Change one parameter at a time and watch the editor rebuild.',
        why: 'A procedural tool is only useful if another designer can understand and tune it without opening the graph.',
        see: 'A clean repeated grid appears and responds to the Details values.',
        check: 'Change only SpaceBetweenRows and predict exactly what should move before you edit it.',
        troubleshoot: ['If every parameter change causes unexpected geometry, inspect the variable that feeds each axis rather than randomly rewiring nodes.'],
        visual: [
          V('grid-08-instance-defaults.webp', 'The placed Actor exposes mesh, row count and spacing controls.'),
          V('grid-09-chair-grid-result.webp', 'A repeated chair grid produced from the Blueprint parameters.')
        ]
      },
      {
        title: 'PROVE — change the data without rewriting the system',
        where: 'Placed Blueprint → Details',
        do: 'Swap the chair mesh for a bush or another compatible Static Mesh and increase the spacing. Do not change the loop graph.',
        why: 'This is the proof that the Blueprint is a reusable system rather than a one-off chair script.',
        see: 'The same graph creates a completely different repeated layout.',
        check: 'Explain what changed (data) and what did not need to change (logic).',
        troubleshoot: [],
        visual: [
          V('grid-10-bush-settings.webp', 'The same exposed controls now use a different mesh and larger spacing.'),
          V('grid-11-bush-grid-result.webp', 'The unchanged procedural logic now produces a bush grid.')
        ]
      }
    ],
    mistakes: [
      'Hard-coding the mesh inside the graph instead of exposing the asset reference.',
      'Using one giant copied graph instead of a repeatable index × spacing pattern.',
      'Adding detail before proving the procedural controls are predictable.',
      'Using Class Reference when the system needs a specific mesh asset reference.'
    ],
    makeItYours: [
      'Add a random Z rotation after the grid works.',
      'Add an optional stagger every second row.',
      'Change 10 × 10 to a rectangular layout and explain which variable controls each axis.'
    ],
    worksWhen: [
      'Mesh, row counts and spacing can be changed from the placed Actor.',
      'The grid rebuilds in the editor.',
      'Swapping the mesh changes the result without rewriting the loop logic.'
    ],
    studentRecipe: [
      'Create an Actor Blueprint and add an Instanced Static Mesh Component.',
      'Create StaticMeshVar plus row/count/spacing variables.',
      'Construction Script: set the ISM mesh from StaticMeshVar.',
      'Use row and column indices multiplied by spacing to build instance Transforms.',
      'Add each Transform as an instance.',
      'Place the Actor, test 10 × 10, then swap the mesh without changing the graph.'
    ],
    officialRefs: [
      {
        title: 'Epic Games — Construction Script (UE5.8)',
        url: 'https://dev.epicgames.com/documentation/unreal-engine/construction-script-in-unreal-engine'
      },
      {
        title: 'Epic Games — Instanced Static Mesh Component (UE5.8)',
        url: 'https://dev.epicgames.com/documentation/unreal-engine/instanced-static-mesh-component-in-unreal-engine'
      }
    ],
    prescriptive: true
  });

  // -------------------------------------------------------------------
  // 2. SPLINE PLACEMENT
  // -------------------------------------------------------------------
  upsertTutorial({
    id: 'bp-spline-instances',
    title: 'Place Repeated Meshes Along a Spline',
    category: 'blueprint-tools',
    duration: '30–40 min',
    difficulty: 'Intermediate',
    icon: '⌁',
    featured: true,
    summary: 'Use a Spline as a path, calculate how many repeated objects fit along it, then place ISM instances using location and rotation sampled at distance along the Spline.',
    uses: ['Spline', 'Construction Script', 'Instanced Static Mesh', 'Get Spline Length', 'Location at Distance', 'Rotation at Distance', 'For Loop'],
    buildingBlocks: ['construction-script', 'functions-events-macros', 'transforms-units'],
    starterValues: [
      'Spline Component',
      'Instanced Static Mesh Component',
      'StaticMeshVar: Static Mesh Object Reference',
      'Spacing: Float in uu'
    ],
    steps: [
      {
        title: 'Add the path and repeated-mesh components',
        where: 'Actor Blueprint → Components',
        do: 'Add a Spline Component and an Instanced Static Mesh Component. Assign the mesh through a variable so the repeated object remains easy to change.',
        why: 'The Spline stores the path; the ISM stores the repeated mesh instances. Keeping those jobs separate makes the system easier to reason about.',
        see: 'The component hierarchy contains both a Spline and an ISM.',
        check: 'You can point to which component stores the path and which stores the repeated geometry.',
        troubleshoot: ['If the Spline controls are missing in the level, make sure you added a Spline Component, not a Spline Mesh Component.'],
        visual: [
          V('spline-02-add-spline-component.webp', 'Add a Spline Component to the Blueprint.'),
          V('spline-03-component-hierarchy.webp', 'The Blueprint combines a Spline path with an Instanced Static Mesh component.')
        ]
      },
      {
        title: 'Calculate how many instances fit',
        where: 'Construction Script / helper Function or Macro',
        do: 'Read Get Spline Length and divide by your Spacing value. Convert/floor the result to a whole-number instance count.',
        why: 'The number of repeated objects should follow the actual path length instead of being guessed separately.',
        see: 'Longer Splines create more instances; larger spacing creates fewer.',
        check: 'Predict which way the count changes if spacing doubles.',
        troubleshoot: ['Never allow spacing to be zero; clamp or give it a safe minimum before dividing.'],
        visual: V('spline-04-count-from-length.webp', 'Spline length is divided by spacing to produce a usable instance count.')
      },
      {
        title: 'Turn loop index into distance along the path',
        where: 'Construction Script → For Loop',
        do: 'For each index, calculate Distance = Index × Spacing. Feed that distance into the Spline queries.',
        why: 'The loop index is just 0,1,2… Multiplying by spacing converts the count into a real position along the path.',
        see: 'Each loop iteration samples a different distance along the Spline.',
        check: 'For spacing 100 uu, say the distance for index 0, 1, 2 and 5.',
        troubleshoot: ['If everything piles up at the start, confirm Index × Spacing reaches the Distance input.'],
        visual: V('spline-05-construction-loop.webp', 'The Construction Script loops over the calculated count and turns each index into distance along the path.')
      },
      {
        title: 'Sample location and rotation, then Add Instance',
        where: 'Spline functions → Get Location/Rotation at Distance Along Spline → Make Transform → Add Instance',
        do: 'For each distance, get both Location and Rotation from the Spline. Build a Transform and Add Instance to the ISM component.',
        why: 'Position alone puts the object on the path; rotation makes the repeated mesh follow the path direction.',
        see: 'Instances follow bends instead of all facing the same world direction.',
        check: 'Disconnect Rotation temporarily and explain the visual difference.',
        troubleshoot: [
          'Use the same coordinate space consistently when sampling and adding transforms.',
          'If arrows point sideways, the source mesh forward axis may differ from the direction you expected.'
        ],
        visual: [
          V('spline-01-location-rotation-at-distance.webp', 'Location and rotation can both be sampled at a chosen distance along the Spline.'),
          V('spline-06-add-instance-at-spline.webp', 'The sampled location/rotation feed the instance Transform before Add Instance.')
        ]
      },
      {
        title: 'Edit the path in the level',
        where: 'Placed Blueprint → select Spline points in the Level Editor',
        do: 'Move existing Spline points and add another point when needed. Keep the procedural graph closed while you prove the level designer can reshape the result directly.',
        why: 'The whole point of a Spline tool is that the path can be art-directed without rebuilding placement logic.',
        see: 'Repeated meshes immediately follow the edited curve.',
        check: 'Make one obvious curve and confirm the repeated objects follow it.',
        troubleshoot: ['Current UE5.8 menus may look different from the reference capture; use the Spline point tools shown in the live demo.'],
        visual: [
          V('spline-07-add-spline-point.webp', 'Spline points can be edited/extended directly in the level.'),
          V('spline-08-arrow-path-result.webp', 'Repeated arrow meshes follow a curved Spline path.')
        ]
      },
      {
        title: 'STRETCH — know when you need Spline Mesh instead',
        where: 'Spline Mesh Component',
        do: 'Compare repeated instances with a Spline Mesh Component. A Spline Mesh deforms one mesh between start/end positions; it is useful for continuous pipes, roads or cables rather than repeated separate objects.',
        why: 'Spline and Spline Mesh sound similar but solve different problems. Choosing the right tool avoids fighting the engine.',
        see: 'A continuous mesh bends along the path instead of appearing as separate copies.',
        check: 'Classify these: fence posts = repeated instances; flexible pipe = Spline Mesh.',
        troubleshoot: [],
        visual: [
          V('spline-09-set-start-end.webp', 'Set Start and End is part of the Spline Mesh workflow.'),
          V('spline-10-spline-mesh-result.webp', 'A continuous tube/pipe bends as a Spline Mesh rather than as separate repeated objects.')
        ]
      }
    ],
    mistakes: [
      'Confusing Spline Component with Spline Mesh Component.',
      'Sampling location but ignoring rotation.',
      'Guessing instance count independently from Spline length.',
      'Mixing local and world coordinate spaces without checking the Add Instance setting.'
    ],
    makeItYours: [
      'Swap arrows for lamps, bollards or fence posts.',
      'Expose spacing as Instance Editable and compare 100 uu vs 250 uu.',
      'Add a Start Offset variable so the first object does not have to begin at distance zero.'
    ],
    worksWhen: [
      'Changing Spline shape changes the repeated layout.',
      'Changing spacing changes the number of instances.',
      'Objects follow both the position and direction of the path.'
    ],
    studentRecipe: [
      'Add Spline + Instanced Static Mesh components.',
      'Calculate Count = floor(SplineLength / Spacing).',
      'For Loop → Distance = Index × Spacing.',
      'Get Location and Rotation at Distance Along Spline.',
      'Make Transform → Add Instance.',
      'Edit the Spline in the level and prove the instances follow it.'
    ],
    officialRefs: [
      {
        title: 'Epic Games — Blueprint Spline Components Overview (UE5.8)',
        url: 'https://dev.epicgames.com/documentation/unreal-engine/blueprint-spline-components-overview-in-unreal-engine'
      },
      {
        title: 'Epic Games — Spline Mesh Component Property Reference (UE5.8)',
        url: 'https://dev.epicgames.com/documentation/unreal-engine/blueprint-spline-mesh-component-property-reference-in-unreal-engine'
      }
    ],
    prescriptive: true
  });

  // -------------------------------------------------------------------
  // 3. EDITOR UTILITY
  // -------------------------------------------------------------------
  upsertTutorial({
    id: 'bp-editor-align-tool',
    title: 'Make an Editor Tool: Align Selected Actors',
    category: 'blueprint-tools',
    duration: '25–35 min',
    difficulty: 'Advanced / Extension',
    icon: '⌖',
    featured: false,
    summary: 'Build a tiny Editor Utility action that reads the current level selection and aligns selected Actors to one X position. This is editor automation, not runtime gameplay.',
    uses: ['Editor Utility Blueprint', 'Scripted Actor Action', 'Selection Set', 'For Each Loop', 'Get/Set Actor Location'],
    buildingBlocks: ['functions-events-macros', 'arrays-sets-maps', 'transforms-units'],
    steps: [
      {
        title: 'Create an Editor Utility for Actor actions',
        where: 'Content Drawer → Editor Utilities / Editor Utility Blueprint',
        do: 'Create an Editor Utility Blueprint using the Actor-action utility type shown by your current UE5.8 setup. If the editor scripting types are missing, check the Editor Scripting Utilities plugin with your teacher.',
        why: 'This Blueprint exists to automate the editor. It should not be placed in the game world or run as normal gameplay logic.',
        see: 'The utility can expose an action that operates on selected level Actors.',
        check: 'Explain the difference between an editor tool and a runtime Actor Blueprint.',
        troubleshoot: ['The reference menus are from an earlier Unreal UI; use the current UE5.8 Editor Utility options shown in the live demo.'],
        visual: [
          V('editor-01-editor-utility-menu.webp', 'Editor Utility Blueprint/Widget creation options in an earlier Unreal UI.'),
          V('editor-02-actor-action-utility.webp', 'An Actor Action Utility-style parent is used so the action can operate on selected Actors.')
        ]
      },
      {
        title: 'Create one named action: AlignOnXAxis',
        where: 'Utility Blueprint → Functions',
        do: 'Create a Function named AlignOnXAxis. Keep the name readable because this becomes the action you recognise in the editor.',
        why: 'A small editor tool should do one obvious job well.',
        see: 'AlignOnXAxis appears as a Function in the utility.',
        check: 'You can describe its job without opening the graph.',
        troubleshoot: [],
        visual: V('editor-03-align-function.webp', 'A single AlignOnXAxis Function gives the tool one clear purpose.')
      },
      {
        title: 'Read the selected Actors and choose the reference X',
        where: 'AlignOnXAxis graph',
        do: 'Get the editor selection set. Use the first selected Actor as the reference, read its Actor Location and store its X value.',
        why: 'The tool needs one shared X coordinate before it can move the rest of the selection.',
        see: 'The graph produces one LocationX value from the first selected Actor.',
        check: 'Predict which Actor sets the alignment position.',
        troubleshoot: ['A production version should handle an empty selection safely; do not assume element 0 exists if nothing is selected.'],
        visual: V('editor-04-get-selection-and-x.webp', 'The selection is read and the first Actor provides the X coordinate used as the reference.')
      },
      {
        title: 'Loop through selection and preserve Y/Z',
        where: 'AlignOnXAxis graph → For Each Loop',
        do: 'For each selected Actor, get its current Location. Replace only X with the saved LocationX and keep that Actor’s existing Y and Z, then Set Actor Location.',
        why: 'Alignment should change only the axis you promised to change. Preserving Y/Z avoids destroying the existing layout.',
        see: 'All selected Actors share one X coordinate while keeping their other position values.',
        check: 'Say which two coordinates the tool must not overwrite.',
        troubleshoot: ['If everything collapses to one point, you probably reused all three coordinates from the reference Actor instead of replacing X only.'],
        visual: V('editor-05-align-loop.webp', 'For Each keeps every Actor’s own Y/Z but replaces X with the shared reference value.')
      },
      {
        title: 'Run the Scripted Actor Action and prove the change',
        where: 'Level Editor → select several Actors → Scripted Actor Actions',
        do: 'Select several Actors that are visibly offset on X, run Align on X Axis, and compare before/after.',
        why: 'A useful editor tool saves repetitive manual work and produces a predictable result in one action.',
        see: 'The selection becomes aligned on one axis.',
        check: 'Undo once. The whole operation should revert cleanly.',
        troubleshoot: ['The exact right-click menu placement can differ in current UE5.8; look for Scripted Actor Actions / the current Editor Utility action surface.'],
        visual: [
          V('editor-06-before-align.webp', 'Before: selected Actors have different X positions.'),
          V('editor-07-scripted-actor-action.webp', 'The utility appears as a Scripted Actor Action in the editor.'),
          V('editor-08-after-align.webp', 'After: the selected Actors share one X position.')
        ]
      }
    ],
    mistakes: [
      'Putting editor automation into a normal gameplay Actor.',
      'Overwriting X, Y and Z when the tool promises to align only X.',
      'Assuming there is always a selected Actor.',
      'Building a huge all-purpose editor utility before proving one tiny action works.'
    ],
    makeItYours: [
      'Duplicate the Function for AlignOnYAxis and AlignOnZAxis.',
      'Add a safe check for zero selected Actors.',
      'Make a second tool that spaces selected Actors evenly.'
    ],
    worksWhen: [
      'The action appears in the editor.',
      'Selected Actors align on X while keeping their own Y/Z.',
      'Undo reverses the edit.'
    ],
    officialRefs: [
      {
        title: 'Epic Games — Scripting the Unreal Editor using Blueprints (UE5.8)',
        url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/scripting-the-unreal-editor-using-blueprints'
      }
    ],
    prescriptive: true
  });

  // -------------------------------------------------------------------
  // 4. VARIANT MANAGER CASE STUDY
  // -------------------------------------------------------------------
  upsertTutorial({
    id: 'bp-variant-configurator-anatomy',
    title: 'CASE STUDY — Variant Manager Product Configurator',
    category: 'blueprint-tools',
    duration: '20–30 min',
    difficulty: 'Advanced Case Study',
    icon: '◇',
    featured: false,
    summary: 'Read a real configurator architecture: Variant Manager stores choices, a Blueprint owns references/state, UMG sends player selections, and one activation Function switches the chosen variant. The captures are from an older Unreal sample; use them to understand architecture, not to hunt for the old template.',
    uses: ['Variant Manager', 'Level Variant Sets', 'Struct', 'Object Reference', 'UMG', 'Create Widget', 'Event Binding'],
    buildingBlocks: ['structs', 'object-class-references', 'umg-widgets', 'dispatchers'],
    steps: [
      {
        title: 'Start with the finished behaviour',
        where: 'Case study output',
        do: 'Look at the configurator output first. Identify what the user can change: product/body variant, colour/environment and camera/view options.',
        why: 'Reading a system is easier when you know the player-facing problem it is solving.',
        see: 'One product can present multiple visual configurations without loading a different level.',
        check: 'List three categories of change the UI appears to control.',
        troubleshoot: [],
        visual: [
          V('variant-01-configurator-output.webp', 'A guitar configurator presents variant choices through runtime UI.'),
          V('variant-02-configurator-colour-output.webp', 'The same product can switch body/style/colour options at runtime.')
        ]
      },
      {
        title: 'Variant Manager stores authored alternatives',
        where: 'Level Variant Sets / Variant Manager',
        do: 'Read the Variant Set structure: related alternatives are grouped together and capture properties that should change when a variant is activated.',
        why: 'The Blueprint does not need to manually set every mesh/property for every choice if the variant asset already describes those authored states.',
        see: 'Variant Sets contain named variants and captured properties.',
        check: 'Explain the job of Variant Manager in one sentence without mentioning UI.',
        troubleshoot: ['In current UE5.8 the Variant Manager plugin must be enabled before these assets/tools are available.'],
        visual: [
          V('variant-03-level-variant-sets-asset.webp', 'A Level Variant Sets asset holds the authored variant data.'),
          V('variant-04-variant-manager.webp', 'Variant Manager groups choices and captured properties.')
        ]
      },
      {
        title: 'Use a Struct to keep variant state together',
        where: 'Configurator data',
        do: 'Study the small Struct containing a Variant Set reference plus currentIndex. The exact old type names are less important than the design: reference + current state travel together.',
        why: 'A Struct reduces loose variables and makes the data shape explicit.',
        see: 'The configurator can keep several variant categories using the same reusable data structure.',
        check: 'Name the two ideas grouped by the Struct.',
        troubleshoot: [],
        visual: V('variant-05-variant-struct.webp', 'A small Struct groups the Variant Set reference with the current selected index.')
      },
      {
        title: 'The configurator Blueprint owns the references',
        where: 'BP_Configurator → Variables',
        do: 'Identify the Level Variant Sets Actor reference, Camera Actor, GUI and grouped variant-set state.',
        why: 'The controller Blueprint acts as the system owner: it knows the data source, the camera and the UI it must coordinate.',
        see: 'The key collaborators are visible as named references rather than searched for randomly every time.',
        check: 'Which reference is the data source and which is the presentation layer?',
        troubleshoot: [],
        visual: V('variant-06-configurator-variables.webp', 'The configurator stores explicit references to its variant data, camera and GUI.')
      },
      {
        title: 'Initialise data, camera and GUI',
        where: 'Configurator Blueprint',
        do: 'Trace the startup sequence: initialise variant-set state, initialise the camera, then create the GUI and add it to the viewport.',
        why: 'Breaking startup into named Functions keeps BeginPlay/initialisation readable and makes each responsibility easier to debug.',
        see: 'Startup reads like a short list of intentions rather than one enormous graph.',
        check: 'What would you debug first if the product exists but no UI appears?',
        troubleshoot: [],
        visual: [
          V('variant-07-init-app.webp', 'Initialisation is split into named jobs rather than one giant graph.'),
          V('variant-08-create-gui.webp', 'Create Widget → store GUI → Add to Viewport → set input mode.')
        ]
      },
      {
        title: 'UI sends a selection; the controller activates the variant',
        where: 'Configurator event binding → Activate Variant',
        do: 'Follow the event: GUI selection is bound to the configurator, which calls Activate Variant. The Function reads the grouped variant data, gets the selected Variant and switches it on.',
        why: 'The UI reports intent; the configurator owns the game/system action. That separation keeps the Widget from becoming the whole application.',
        see: 'One event-driven route connects presentation to the data/action layer.',
        check: 'Draw the flow in four boxes: UI → ? → ? → Variant Manager.',
        troubleshoot: [],
        visual: [
          V('variant-09-bind-gui-selection.webp', 'The GUI selection event is bound to the configurator action.'),
          V('variant-10-activate-variant.webp', 'Activate Variant reads the selected data and switches on the chosen Variant.')
        ]
      }
    ],
    mistakes: [
      'Trying to find the old Product Configurator template screen in current UE5.8.',
      'Putting all variant switching logic directly inside individual Widget buttons.',
      'Using many loose variables where one Struct describes the repeated data shape.',
      'Skipping explicit references and repeatedly searching the world for collaborators.'
    ],
    makeItYours: [
      'Sketch the same architecture for a character skin selector.',
      'Replace guitar choices with car paint / wheels / interior.',
      'Explain which part you would test if the UI selection fires but the visible product never changes.'
    ],
    worksWhen: [
      'You can explain the responsibility of Variant Manager, configurator Blueprint and UMG separately.',
      'You can trace one selection from UI to activated variant.',
      'You understand that the legacy screenshots are architectural references, not current click-for-click UI.'
    ],
    officialRefs: [
      {
        title: 'Epic Games — Variant Manager Template Overview (UE5.8)',
        url: 'https://dev.epicgames.com/documentation/unreal-engine/variant-manager-template-overview'
      },
      {
        title: 'Epic Games — Working with Scene Variants (UE5.8)',
        url: 'https://dev.epicgames.com/documentation/unreal-engine/working-with-scene-variants-in-unreal-engine'
      }
    ],
    prescriptive: false
  });

  // -------------------------------------------------------------------
  // 5. MODULAR UMG + DISPATCHERS
  // -------------------------------------------------------------------
  upsertTutorial({
    id: 'bp-modular-umg-dispatchers',
    title: 'CASE STUDY — Modular UMG with Event Dispatchers',
    category: 'ui',
    duration: '25–35 min',
    difficulty: 'Advanced',
    icon: '▤',
    featured: false,
    summary: 'Read a reusable UI hierarchy where small button Widgets broadcast an index, parent Widgets bind to them, and higher-level Widgets re-broadcast meaningful selection events. This is one-to-many/event-driven UI instead of hard-wiring every button.',
    uses: ['UMG', 'Widget Blueprint', 'Event Dispatcher', 'Bind Event', 'Create Event', 'Array', 'For Each Loop'],
    buildingBlocks: ['umg-widgets', 'dispatchers', 'arrays-sets-maps', 'events-execution'],
    steps: [
      {
        title: 'Read the Widget hierarchy before reading nodes',
        where: 'UI architecture diagram / Widget Hierarchy',
        do: 'Identify the layers: reusable button → ribbon/selector → main selector/GUI. Do not open the graphs yet.',
        why: 'A modular UI becomes understandable when you know which Widget owns which responsibility.',
        see: 'Small Widgets handle small interactions; larger Widgets coordinate groups.',
        check: 'Which Widget should know the details of an individual button click?',
        troubleshoot: [],
        visual: [
          V('umg-01-widget-architecture.webp', 'The UI is split into reusable button, ribbon/selector and main selector layers.'),
          V('umg-02-main-gui-hierarchy.webp', 'The main GUI contains selectors and high-level controls rather than every behaviour in one Widget.')
        ]
      },
      {
        title: 'Construct, populate, then bind',
        where: 'Widget Event Graph → Event Construct',
        do: 'Read the startup order: populate the options first, then create the event bindings that listen to those generated/referenced controls.',
        why: 'You cannot bind to child controls that do not exist yet. The order makes the dependency explicit.',
        see: 'Event Construct delegates setup to named steps.',
        check: 'Why would binding before creating/populating buttons fail?',
        troubleshoot: [],
        visual: V('umg-03-construct-populate-bind.webp', 'Event Construct separates population from event-binding setup.')
      },
      {
        title: 'A button broadcasts data instead of controlling the whole app',
        where: 'Reusable button Widget → OnClicked',
        do: 'On click, call a ButtonClicked Event Dispatcher and include the button Index as data.',
        why: 'The small button announces what happened. It does not need to know every parent system that may care.',
        see: 'One dispatcher output carries the index of the chosen option.',
        check: 'What information does the listener need in order to know which button was pressed?',
        troubleshoot: [],
        visual: V('umg-04-button-dispatcher.webp', 'The button click calls a dispatcher and sends its Index with the event.')
      },
      {
        title: 'The parent binds to child events',
        where: 'Parent Widget → Create/Bind event',
        do: 'When child button Widgets are created or discovered, bind each ButtonClicked dispatcher to a matching parent event. The parent can then translate the raw button index into a higher-level selection event.',
        why: 'Binding creates a clean listener relationship without the child needing a direct reference back to every possible parent.',
        see: 'Child event → parent handler → parent dispatcher.',
        check: 'Explain sender vs listener in this relationship.',
        troubleshoot: ['If the event never fires, confirm the binding happens after the child Widget exists.'],
        visual: [
          V('umg-05-child-bind-and-rebroadcast.webp', 'A child button dispatcher is bound to a parent event, which can re-broadcast a more useful selection.'),
          V('umg-06-part-selected-dispatcher.webp', 'A higher-level dispatcher sends the selected set/ribbon/index data upward.')
        ]
      },
      {
        title: 'Use an Array when many children need the same binding',
        where: 'Parent Widget → child Widget array → For Each Loop',
        do: 'Store the repeated child controls in an Array and loop over them to create the same dispatcher binding for each child.',
        why: 'A collection removes the need for Button1, Button2, Button3… plus copied Bind nodes.',
        see: 'One For Each Loop handles the repeated binding pattern.',
        check: 'Add one more child to the Array: how much new binding logic should you need?',
        troubleshoot: ['If you still have one copied Bind chain per button, the collection is not yet doing the useful work.'],
        visual: V('umg-07-array-bind-loop.webp', 'A For Each Loop applies the same dispatcher binding pattern to every child in the Array.')
      },
      {
        title: 'Create the matching delegate event and re-broadcast intent',
        where: 'Bind Event / delegate pin → Create Event',
        do: 'Create the correctly matching event for the dispatcher signature. At the main selector level, bind to PartSelected and re-broadcast a clear VariantSelected event with the required indices.',
        why: 'Each UI layer can translate low-level clicks into increasingly meaningful events. The top-level system receives intent rather than knowing every button.',
        see: 'Button click becomes PartSelected, then VariantSelected.',
        check: 'Trace one click through all three event names.',
        troubleshoot: ['The bound event signature must match the dispatcher inputs. If pins do not match, inspect the dispatcher definition first.'],
        visual: [
          V('umg-08-create-event-delegate.webp', 'Create Event builds an event with the delegate signature required by the binding.'),
          V('umg-09-main-bind-and-rebroadcast.webp', 'The main selector listens for PartSelected and re-broadcasts the higher-level VariantSelected intent.')
        ]
      }
    ],
    mistakes: [
      'Making every button directly control the final gameplay/configurator system.',
      'Copy-pasting one Bind chain for every child instead of using a collection.',
      'Binding before the child Widgets exist.',
      'Treating Event Dispatchers like function calls where the sender must know every listener.'
    ],
    makeItYours: [
      'Sketch the same pattern for an inventory category bar.',
      'Build three reusable menu buttons that all report their index through one dispatcher.',
      'Rename a raw Clicked event into a meaningful parent event such as WeaponSelected or TabChanged.'
    ],
    worksWhen: [
      'You can identify sender, dispatcher and listener.',
      'One child button can be added without rewriting the whole parent graph.',
      'You can trace a click from child Widget to a high-level selection event.'
    ],
    officialRefs: [
      {
        title: 'Epic Games — Event Dispatchers (UE5.8)',
        url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/event-dispatchers-in-unreal-engine'
      },
      {
        title: 'Epic Games — UMG UI Designer',
        url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/umg-ui-designer-for-unreal-engine'
      }
    ],
    prescriptive: false
  });

  // -------------------------------------------------------------------
  // BUILDING BLOCK CONNECTIONS
  // -------------------------------------------------------------------
  [
    ['construction-script', 'bp-procedural-grid'],
    ['construction-script', 'bp-spline-instances'],
    ['variables-types', 'bp-procedural-grid'],
    ['object-class-references', 'bp-procedural-grid'],
    ['functions-events-macros', 'bp-spline-instances'],
    ['functions-events-macros', 'bp-editor-align-tool'],
    ['arrays-sets-maps', 'bp-editor-align-tool'],
    ['arrays-sets-maps', 'bp-modular-umg-dispatchers'],
    ['structs', 'bp-variant-configurator-anatomy'],
    ['object-class-references', 'bp-variant-configurator-anatomy'],
    ['umg-widgets', 'bp-variant-configurator-anatomy'],
    ['umg-widgets', 'bp-modular-umg-dispatchers'],
    ['dispatchers', 'bp-modular-umg-dispatchers']
  ].forEach(([blockId, tutorialId]) => addBlockTutorial(blockId, tutorialId));

  addBlockVisual('construction-script',
    V('grid-05-construction-script.webp', 'Construction Script is used here to rebuild procedural instances while the Actor is edited.'));
  addBlockVisual('construction-script',
    V('spline-05-construction-loop.webp', 'A second Construction Script example uses a Spline and loop to rebuild repeated geometry.'));

  addBlockVisual('functions-events-macros',
    V('editor-03-align-function.webp', 'A named AlignOnXAxis Function packages one clear editor-tool job.'));

  addBlockVisual('arrays-sets-maps',
    V('umg-07-array-bind-loop.webp', 'An Array plus For Each Loop removes repeated per-button binding logic.'));

  addBlockVisual('structs',
    V('variant-05-variant-struct.webp', 'A Struct groups a Variant Set reference with its current selected index.'));

  addBlockVisual('umg-widgets',
    V('umg-02-main-gui-hierarchy.webp', 'A modular Widget hierarchy keeps high-level GUI structure separate from reusable child controls.'));

  addBlockVisual('dispatchers',
    V('umg-04-button-dispatcher.webp', 'A reusable button broadcasts its Index through an Event Dispatcher.'));
  addBlockVisual('dispatchers',
    V('umg-09-main-bind-and-rebroadcast.webp', 'A parent Widget listens to one dispatcher and can re-broadcast a higher-level event.'));

  TOOLS.version = '3.44.9';
  TOOLS.buildDate = '2026-09-07';
  console.info('[v3.44.9] Blueprint Drive Harvest loaded: 5 tutorials + curated reference visuals.');
})();
