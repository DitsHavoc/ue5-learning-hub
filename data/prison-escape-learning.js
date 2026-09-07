/* v3.44.8 — Prison Escape gameplay + Sequencer pathway
   Additive classroom patch only.
   Runs after prison-cell-learning.js + prison-cell-units-fix.js and before app.js.

   Core route:
   KEY OVERLAP → STORE PLAYER STATE → CHECK AT DOOR → TIMELINE OPEN
   → EXIT TRIGGER → PLAY LEVEL SEQUENCE → RETURN TO GAMEPLAY
*/
(() => {
  'use strict';

  const TOOLS = window.UE5_TUTORIAL_DATA;
  const DESIGN = window.UE5_DESIGN_DATA;
  const PATHWAYS = window.UE5_PATHWAY_DATA;

  if (!TOOLS || !DESIGN || !PATHWAYS) {
    console.warn('[v3.44.8] Prison Escape patch skipped: tutorial, design or pathway data unavailable.');
    return;
  }

  const findTutorial = id =>
    (TOOLS.tutorials || []).find(t => t.id === id) ||
    (DESIGN.tutorials || []).find(t => t.id === id);

  const patchTutorial = (id, patch) => {
    const tutorial = findTutorial(id);
    if (!tutorial) {
      console.warn(`[v3.44.8] Could not patch missing tutorial: ${id}`);
      return null;
    }
    Object.assign(tutorial, patch);
    return tutorial;
  };

  const keyTutorial = findTutorial('key-pickup');
  const doorTutorial = findTutorial('locked-door');
  const timelineTutorial = findTutorial('timeline-door');

  const blueprintCreateVisual = doorTutorial?.recipeVisuals?.[1] || null;
  const overlapVisual = keyTutorial?.referenceImages?.[0] || null;
  const branchVisual = doorTutorial?.recipeVisuals?.[2] || null;
  const completedDoorVisual = doorTutorial?.recipeVisuals?.[3] || null;
  const doorConnectionsVisual = doorTutorial?.recipeVisuals?.[4] || null;
  const timelineEditorVisual = timelineTutorial?.referenceImages?.[0] || null;
  const timelineOutputVisual = timelineTutorial?.referenceImages?.[2] || null;
  const keyPickupFlowVisual = {
    src: 'assets/diagrams/prison-key-pickup-flow.svg',
    caption: 'Original classroom diagram — the complete BP_PrisonKey flow. The Character stores HasPrisonKey; Destroy Actor removes only the pickup.',
    kind: 'local'
  };
  const doorHierarchyVisual = {
    src: 'assets/diagrams/prison-door-hierarchy.svg',
    caption: 'Original classroom diagram — Door is a child of DoorHinge, so the mesh swings from its edge while the frame and trigger stay still.',
    kind: 'local'
  };
  const doorLogicVisual = {
    src: 'assets/diagrams/prison-door-logic.svg',
    caption: 'Original classroom diagram — the exact locked and unlocked paths for BP_PrisonDoor, including Do Once, TL_OpenDoor and the DoorHinge target.',
    kind: 'local'
  };
  const sequenceTriggerFlowVisual = {
    src: 'assets/diagrams/prison-sequence-trigger-flow.svg',
    caption: 'Original classroom diagram — the full handoff from the exit Trigger Box to LS_PrisonEscape and back to normal gameplay control.',
    kind: 'local'
  };

  // ---------------------------------------------------------------------
  // 1. KEY PICKUP — exact first working version for the prison exercise
  // ---------------------------------------------------------------------

  patchTutorial('key-pickup', {
    duration: '15–20 min',
    summary: 'Build a prison-key pickup that detects the player, records the key on the player Character, proves the state changed and removes the pickup from the cell.',
    uses: ['Sphere Collision', 'Overlap', 'Cast', 'Boolean', 'Destroy Actor'],
    steps: [
      {
        title: 'Create the key Blueprint and its collision',
        where: 'Content Drawer → your Prison Cell folder → right-click → Blueprint Class → Actor',
        do: 'Create BP_PrisonKey. Add a Static Mesh component named KeyMesh and a Sphere Collision component named PickupCollision. Use any small placeholder mesh if you do not have a finished key yet.',
        why: 'The visible mesh shows the pickup; the separate Sphere Collision decides when it has been collected.',
        see: 'BP_PrisonKey has a visible mesh inside a clearly larger collision sphere.',
        check: 'Compile, place one BP_PrisonKey in the cell and confirm it is visible.',
        troubleshoot: [
          'If the key has no finished model, use a clearly scaled cube or another temporary mesh. The system can be built before the art asset exists.',
          'Do not make the collision so large that the key is collected from the other side of the room.'
        ]
      },
      {
        title: 'Set collision for a pickup rather than a wall',
        where: 'BP_PrisonKey → select PickupCollision → Details → Collision',
        do: 'Set Collision Presets to OverlapOnlyPawn and make sure Generate Overlap Events is enabled. Select KeyMesh and set its collision to NoCollision for this first test.',
        why: 'The player should enter the pickup volume rather than being physically blocked by a tiny key mesh.',
        see: 'The sphere overlaps Pawns and the mesh does not stop movement.',
        check: 'In Play mode, the character can walk through the key without being pushed away.',
        troubleshoot: [
          'If the event never fires later, recheck Generate Overlap Events on PickupCollision.',
          'If the player bumps into an invisible object, the mesh or another component is still blocking the Pawn.'
        ]
      },
      {
        title: 'Give the player somewhere to remember the key',
        where: 'BP_ThirdPersonCharacter → My Blueprint → Variables → +',
        do: 'Create a Boolean variable named HasPrisonKey. Compile, then confirm its default value is False.',
        why: 'BP_PrisonKey will destroy itself after collection, so the lasting yes/no state must live on the player rather than on the pickup.',
        see: 'HasPrisonKey appears as a Boolean on BP_ThirdPersonCharacter and starts unticked.',
        check: 'Drag HasPrisonKey into the Character graph once and confirm Unreal offers Get and Set.',
        troubleshoot: [
          'If the default checkbox is unavailable, Compile the Character Blueprint first.',
          'Create the variable on the Character used by this level, not on the key.'
        ]
      },
      {
        title: 'Detect the player entering the pickup sphere',
        where: 'BP_PrisonKey → select PickupCollision → Event Graph → Add Event → On Component Begin Overlap',
        do: 'Add On Component Begin Overlap for PickupCollision. Drag from Other Actor and create Cast To BP_ThirdPersonCharacter.',
        why: 'Other Actor tells you what entered the sphere; the Cast confirms it is the playable Character and gives access to HasPrisonKey.',
        see: 'The white execution wire runs from Begin Overlap into the Cast, and Other Actor feeds the Cast Object pin.',
        check: 'Temporarily connect Cast Succeeded to Print String “Player touched key” and test it once. Remove that temporary print afterwards.',
        troubleshoot: [
          'If the Cast fails, confirm the level really uses BP_ThirdPersonCharacter or substitute the Character class used by your project.',
          'If no print appears, check the sphere size and collision settings before changing the Blueprint logic.'
        ]
      },
      {
        title: 'Set the key state before removing the pickup',
        where: 'BP_PrisonKey → Cast success output',
        do: 'From As BP_ThirdPersonCharacter, add Set HasPrisonKey and tick it True. Continue the execution wire to Print String “Key collected”, then Destroy Actor with Target left as Self.',
        why: 'The player state must change first. Destroy Actor then removes only the pickup while the Character keeps the Boolean.',
        see: 'The successful path reads: Cast → Set HasPrisonKey True → Print String → Destroy Actor.',
        check: 'Confirm the Set node is changing the Character variable, while Destroy Actor targets BP_PrisonKey.',
        troubleshoot: [
          'If HasPrisonKey is not offered from the Cast result, compile BP_ThirdPersonCharacter and return to the key Blueprint.',
          'If the player disappears, Destroy Actor is targeting the Character instead of Self.'
        ]
      },
      {
        title: 'Test one clean collection from a fresh Play session',
        where: 'Level Editor → Play',
        do: 'Start a fresh Play session, walk into the key once and watch for the message. Confirm the key disappears. Stop and Play again to confirm the Boolean resets for a new test.',
        why: 'A pickup is only complete when the collision, stored state and removal work together in the game.',
        see: 'The key is visible at the start, disappears on contact and cannot be collected twice during that run.',
        check: 'Use the Blueprint debugger or a temporary Print String to prove HasPrisonKey changes False → True before the key is destroyed.',
        troubleshoot: [
          'If the message repeats, make sure only one BP_PrisonKey is placed and Destroy Actor is connected.',
          'If the key begins missing, check that it was not deleted from the level while testing.'
        ]
      }
    ],
    starterValues: [
      'HasPrisonKey Boolean: False',
      'PickupCollision preset: OverlapOnlyPawn',
      'Generate Overlap Events: enabled',
      'KeyMesh collision: NoCollision for the starter version'
    ],
    studentRecipe: [
      'Create BP_PrisonKey (Actor). Add KeyMesh and PickupCollision; place one key in the cell.',
      'PickupCollision → OverlapOnlyPawn with Generate Overlap Events enabled. KeyMesh → NoCollision.',
      'BP_ThirdPersonCharacter → create HasPrisonKey Boolean, default False. Compile.',
      'BP_PrisonKey → PickupCollision → On Component Begin Overlap → Other Actor → Cast To BP_ThirdPersonCharacter.',
      'Cast success → Set HasPrisonKey True → Print “Key collected” → Destroy Actor (Self).',
      'Play from the start. Walk into the key once and prove HasPrisonKey changes False → True before the key disappears.'
    ],
    recipeVisuals: [
      blueprintCreateVisual,
      overlapVisual,
      keyTutorial?.recipeVisuals?.[1] || null,
      overlapVisual,
      keyPickupFlowVisual,
      keyPickupFlowVisual
    ],
    mistakes: [
      'Storing HasPrisonKey on BP_PrisonKey and then destroying the Actor that owns the value.',
      'Using Block collision when the Sphere should overlap the player.',
      'Destroying the Character instead of destroying the pickup.',
      'Testing the door before proving the key Boolean actually changed.'
    ],
    makeItYours: [
      'Add a pickup sound or a small Niagara effect after the core version works.',
      'Replace the Boolean with an Integer KeysOwned when the level genuinely needs several keys.',
      'Stretch: replace automatic collection with the Hub’s Look-to-Interact system.'
    ],
    worksWhen: [
      'The key begins visible and does not block the player.',
      'Only the playable Character collects it.',
      'HasPrisonKey changes to True before the pickup destroys itself.',
      'The key cannot be collected twice in the same Play session.'
    ],
    source: {
      title: 'Epic UE5.8 — On Component Begin Overlap',
      url: 'https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Collision/OnComponentBeginOverlap'
    }
  });

  // ---------------------------------------------------------------------
  // 2. LOCKED DOOR — explicit hierarchy, decision and Timeline movement
  // ---------------------------------------------------------------------

  patchTutorial('locked-door', {
    duration: '25–35 min',
    summary: 'Build a prison door that stays locked before the key is collected, gives clear feedback, then swings smoothly from a hinge after HasPrisonKey becomes true.',
    uses: ['Box Collision', 'Cast', 'Boolean', 'Branch', 'DoorHinge', 'Timeline', 'Lerp Rotator'],
    steps: [
      {
        title: 'Build the door as a reusable Actor Blueprint',
        where: 'Content Drawer → your Prison Cell folder → right-click → Blueprint Class → Actor',
        do: 'Create BP_PrisonDoor. Add DoorFrame (Static Mesh), DoorHinge (Scene Component), Door (Static Mesh) and DoorTrigger (Box Collision). Attach Door to DoorHinge; keep DoorFrame and DoorHinge attached to the root.',
        why: 'Keeping the frame still and rotating a separate hinge component gives the moving part a clear job and avoids rotating the whole Actor.',
        see: 'The Components hierarchy shows Door nested beneath DoorHinge.',
        check: 'Compile and place one BP_PrisonDoor in the cell opening.',
        troubleshoot: [
          'Use cubes as temporary frame/door meshes if the 3D assets are not ready.',
          'If Door is beside DoorHinge in the hierarchy rather than underneath it, drag Door onto DoorHinge.'
        ]
      },
      {
        title: 'Put the hinge on the edge of the door',
        where: 'BP_PrisonDoor → Viewport → select DoorHinge and Door',
        do: 'Move DoorHinge to the side where the real hinges belong. Adjust Door’s relative location so one vertical edge sits on the hinge. Rotate DoorHinge temporarily to about 30° to test the pivot, then Undo.',
        why: 'A convincing door rotates around its hinge edge, not around the centre of the mesh.',
        see: 'The door swings from one side without orbiting away from the frame.',
        check: 'A temporary hinge rotation keeps one edge of the door fixed beside the frame.',
        troubleshoot: [
          'If the door spins around its centre, move the Door mesh relative to DoorHinge; do not try to hide the problem with Timeline values.',
          'Leave the Blueprint Actor itself at a clean rotation and make the opening direction inside the Blueprint.'
        ]
      },
      {
        title: 'Set up the player trigger',
        where: 'BP_PrisonDoor → select DoorTrigger → Details → Collision',
        do: 'Position DoorTrigger in front of the door and set it to OverlapOnlyPawn with Generate Overlap Events enabled. Add On Component Begin Overlap for DoorTrigger in the Event Graph.',
        why: 'The starter version should attempt the door when the player reaches it without adding a second input system first.',
        see: 'The trigger covers the approach area but does not fill the whole room.',
        check: 'Use a temporary Print String from the overlap event and confirm it fires once when the player approaches.',
        troubleshoot: [
          'If the event fires at game start, move Player Start or reduce the trigger size.',
          'If it never fires, recheck the trigger preset and Generate Overlap Events.'
        ]
      },
      {
        title: 'Ask whether the player owns the prison key',
        where: 'BP_PrisonDoor → Event Graph → DoorTrigger Begin Overlap',
        do: 'Connect Other Actor to Cast To BP_ThirdPersonCharacter. From the Cast result, Get HasPrisonKey and connect it to a Branch Condition.',
        why: 'The Cast gives the door the correct player reference; the Boolean answers one clear question and the Branch chooses the result.',
        see: 'The graph reads: Overlap → Cast → HasPrisonKey → Branch.',
        check: 'Before collecting the key, the Branch Condition is False. After collection, it is True.',
        troubleshoot: [
          'If HasPrisonKey is missing, compile the Character and confirm the spelling matches the pickup guide exactly.',
          'Do not put this Branch on BeginPlay; the door must check when the player reaches it.'
        ]
      },
      {
        title: 'Give the locked attempt clear feedback',
        where: 'BP_PrisonDoor → Branch False output',
        do: 'Connect False to Print String “The door is locked. Find the key.” Keep the door closed.',
        why: 'A failed action should tell the player what happened instead of appearing broken.',
        see: 'Approaching without the key displays the locked message and the door does not move.',
        check: 'Start a fresh Play session and test the door before touching the key.',
        troubleshoot: [
          'If the door opens from False, trace the white execution wires and separate the two Branch outputs.',
          'Print String is prototype feedback; it can become UI or sound later.'
        ]
      },
      {
        title: 'Create the smooth hinge rotation',
        where: 'BP_PrisonDoor → Event Graph → right-click → Add Timeline → TL_OpenDoor',
        do: 'Open TL_OpenDoor. Add a Float Track named Alpha with keys (0.0 s, 0.0) and (1.2 s, 1.0). Back in the Event Graph, use Alpha in Lerp (Rotator): A Yaw 0°, B Yaw 90° (or -90° if the door opens the wrong way). Timeline Update → Set Relative Rotation on DoorHinge.',
        why: 'The Timeline supplies smooth progress from 0 to 1; Lerp converts that progress into a predictable closed-to-open rotation.',
        see: 'Scrubbing or playing TL_OpenDoor rotates DoorHinge smoothly from closed to open.',
        check: 'DoorHinge reaches the exact open angle without the door drifting away from the frame.',
        troubleshoot: [
          'If nothing moves, connect Timeline Update to Set Relative Rotation and Alpha to the Lerp Alpha pin.',
          'If the door opens into the wall, change 90° to -90° rather than rebuilding the graph.',
          'If it orbits, return to the hinge setup step.'
        ]
      },
      {
        title: 'Open only from the True path and test both states',
        where: 'BP_PrisonDoor → Branch True output → Do Once → TL_OpenDoor Play From Start',
        do: 'Connect True through Do Once into Play From Start on TL_OpenDoor. Compile. Test once without the key, then restart, collect the key and return to the door.',
        why: 'Do Once prevents repeated overlaps restarting the animation, while the two separate tests prove the complete access rule.',
        see: 'Without the key: message and closed door. With the key: one smooth opening from the hinge.',
        check: 'Explain the system aloud: “HasPrisonKey is the data, Branch makes the decision, and the Timeline performs the result.”',
        troubleshoot: [
          'If the second test still says locked, prove the pickup sets HasPrisonKey on this same Character class.',
          'If the Timeline repeatedly restarts, confirm True passes through Do Once.'
        ]
      }
    ],
    starterValues: [
      'HasPrisonKey Boolean: False',
      'DoorTrigger: OverlapOnlyPawn',
      'TL_OpenDoor: 1.2 seconds',
      'Alpha: 0 → 1',
      'Closed Yaw: 0°',
      'Open Yaw: 90° or -90°'
    ],
    studentRecipe: [
      'Create BP_PrisonDoor with DoorFrame, DoorHinge, Door and DoorTrigger. Attach Door beneath DoorHinge.',
      'Place DoorHinge at the hinge edge. Offset Door beside it; rotate the hinge once to prove the pivot, then Undo.',
      'DoorTrigger → OverlapOnlyPawn → On Component Begin Overlap.',
      'Other Actor → Cast To BP_ThirdPersonCharacter → Get HasPrisonKey → Branch.',
      'False → Print “The door is locked. Find the key.” Door stays closed.',
      'Create TL_OpenDoor: 1.2 s, Alpha 0→1. Update → Lerp Rotator Yaw 0→90 → Set Relative Rotation on DoorHinge.',
      'True → Do Once → TL_OpenDoor Play From Start. Test before the key and after the key in fresh Play sessions.'
    ],
    recipeVisuals: [
      [blueprintCreateVisual, doorHierarchyVisual].filter(Boolean),
      doorHierarchyVisual,
      overlapVisual,
      [branchVisual, doorLogicVisual].filter(Boolean),
      doorLogicVisual,
      [timelineEditorVisual, timelineOutputVisual, doorLogicVisual].filter(Boolean),
      [completedDoorVisual, doorConnectionsVisual, doorLogicVisual].filter(Boolean)
    ],
    mistakes: [
      'Rotating the whole Actor or a centred door mesh instead of rotating DoorHinge.',
      'Checking HasPrisonKey only on BeginPlay rather than when the player reaches the door.',
      'Connecting door opening to both True and False.',
      'Forgetting Timeline Update or targeting Door instead of DoorHinge.',
      'Removing the Branch just to make the animation play.'
    ],
    makeItYours: [
      'Replace the Print String with a locked sound and a small on-screen prompt.',
      'Consume the key after opening only if the design needs that rule.',
      'Stretch: use IA_Interact and BPI_Interact so the player presses E while looking at the door.'
    ],
    worksWhen: [
      'The door remains closed and gives feedback before the key is collected.',
      'The same door opens only after HasPrisonKey becomes True.',
      'It rotates smoothly from the hinge and reaches a deliberate final angle.',
      'Repeated overlap does not restart or break the opening animation.'
    ],
    source: {
      title: 'Epic UE5.8 — Open Doors with Keys',
      url: 'https://dev.epicgames.com/documentation/unreal-engine/designer-03-open-doors-with-keys-in-unreal-engine'
    }
  });

  // ---------------------------------------------------------------------
  // 3. SEQUENCER — add exact UI references and remove trigger ambiguity
  // ---------------------------------------------------------------------

  const firstShot = findTutorial('sequencer-first-shot');
  if (firstShot?.steps) {
    const cameraStep = firstShot.steps.find(s => s.title === 'Create the Cine Camera and Camera Cuts track');
    if (cameraStep) {
      cameraStep.visual = {
        src: 'https://d1iv7db44yhgxn.cloudfront.net/documentation/images/732cfd97-5304-45c4-a384-5543eca376c8/add_first_camera.png',
        caption: 'Epic UE5.8 — Create Camera adds a Cine Camera Actor, its track and the Camera Cuts track, then pilots that camera in the viewport.',
        sourceUrl: 'https://dev.epicgames.com/documentation/unreal-engine/creating-camera-cuts-using-sequencer-in-unreal-engine',
        sourceTitle: 'Epic Games — Unreal Engine 5.8 Documentation',
        kind: 'epic'
      };
    }
    const startStep = firstShot.steps.find(s => s.title === 'Set the START frame');
    if (startStep) {
      startStep.visual = {
        src: 'https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e3dfb206-02a4-4b92-9d35-f74a6ae817bd/enable_auto-key.png',
        caption: 'Epic UE5.8 — Auto-Key is blue while enabled. Turn it off again when the planned camera keys are complete so accidental viewport moves do not create unwanted keys.',
        sourceUrl: 'https://dev.epicgames.com/documentation/unreal-engine/creating-camera-cuts-using-sequencer-in-unreal-engine',
        sourceTitle: 'Epic Games — Unreal Engine 5.8 Documentation',
        kind: 'epic'
      };
    }
  }

  patchTutorial('trigger-cutscene', {
    duration: '20–30 min',
    summary: 'Place an exit trigger beyond the prison door, play a working Level Sequence once, prevent repeat overlaps and confirm the normal gameplay camera and controls return afterwards.',
    uses: ['Level Sequence Actor', 'Trigger Box', 'Begin Overlap', 'Cast', 'Do Once', 'Sequence Player'],
    steps: [
      {
        title: 'Build and test the sequence before adding code',
        where: 'Content Drawer → Cinematics → your Level Sequence',
        do: 'For the Prison Cell path, name the sequence LS_PrisonEscape. Build a short 5–8 second shot that reveals the open doorway, corridor, threat or next objective. Make sure one Cine Camera is bound to a Camera Cuts section covering the full playback range.',
        why: 'Separating the cinematic test from the trigger test tells you which half is broken if playback later fails.',
        see: 'Pressing Play inside Sequencer shows the whole intended camera shot.',
        check: 'Scrub from the first to final frame and confirm Camera Cuts never leaves an accidental gap.',
        troubleshoot: [
          'Do not begin trigger debugging until the sequence plays correctly inside Sequencer.',
          'If the viewport stays on the gameplay camera, bind the Cine Camera to Camera Cuts.'
        ],
        visual: {
          src: 'https://d1iv7db44yhgxn.cloudfront.net/documentation/images/732cfd97-5304-45c4-a384-5543eca376c8/add_first_camera.png',
          caption: 'Epic UE5.8 — Create Camera creates the Cine Camera and Camera Cuts track needed for the sequence to take control of the view.',
          sourceUrl: 'https://dev.epicgames.com/documentation/unreal-engine/creating-camera-cuts-using-sequencer-in-unreal-engine',
          sourceTitle: 'Epic Games — Unreal Engine 5.8 Documentation',
          kind: 'epic'
        }
      },
      {
        title: 'Place the trigger beyond the unlocked door',
        where: 'Level Editor → Add (+) → Volumes / search Trigger Box',
        do: 'Place a Trigger Box just beyond the prison door and rename it Trigger_PrisonEscape. Scale it across the route so the player must enter it after escaping, but keep Player Start outside it.',
        why: 'A clear boundary makes the cinematic happen at a deliberate story beat rather than immediately when the level begins.',
        see: 'The box crosses the escape route after the door, not the whole cell.',
        check: 'In Play mode, the player can begin inside the cell and reach the trigger only after opening the route.',
        troubleshoot: [
          'If the cinematic fires at game start, Player Start is inside the trigger or the trigger is too large.',
          'Keep the trigger past the open door so a locked-door attempt cannot start the ending.'
        ],
        visual: {
          src: 'https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ad0bd677-2517-4416-96de-9b224f2e8bba/trigger01.png',
          caption: 'Epic UE5.8 — A Box Trigger placed across the route where gameplay should start the cinematic.',
          sourceUrl: 'https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine',
          sourceTitle: 'Epic Games — Unreal Engine 5.8 Documentation',
          kind: 'epic'
        }
      },
      {
        title: 'Create the overlap event in the Level Blueprint',
        where: 'Select Trigger_PrisonEscape → toolbar Blueprints → Open Level Blueprint → right-click graph',
        do: 'Add On Actor Begin Overlap for Trigger_PrisonEscape. Drag from Other Actor and Cast To BP_ThirdPersonCharacter. Connect Cast Succeeded to Do Once.',
        why: 'The Cast filters the event to the playable Character; Do Once stops the cutscene replaying when the trigger boundary is crossed again.',
        see: 'The execution path reads: Trigger overlap → player Cast → Do Once.',
        check: 'Temporarily Print String after Do Once and prove it fires on the first entry but not a second entry during the same Play session.',
        troubleshoot: [
          'If the event option does not appear, select the Trigger Box in the level before opening the Level Blueprint.',
          'If the Cast fails, substitute the actual Character Blueprint used by this project.'
        ],
        visual: {
          src: 'https://d1iv7db44yhgxn.cloudfront.net/documentation/images/cffc3373-a75e-451e-8e89-ddfb64743c8b/trigger10.png',
          caption: 'Epic UE5.8 — Add the selected Trigger Box overlap event in the Level Blueprint. The prison version then filters Other Actor to the player and adds Do Once.',
          sourceUrl: 'https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine',
          sourceTitle: 'Epic Games — Unreal Engine 5.8 Documentation',
          kind: 'epic'
        }
      },
      {
        title: 'Create a reference to the Level Sequence Actor',
        where: 'Return to the level → select the LS_PrisonEscape Level Sequence Actor → return to Level Blueprint → right-click',
        do: 'Choose Create a Reference to the selected Level Sequence Actor. Drag from that reference and add Play (SequencePlayer), then connect Do Once to Play.',
        why: 'The reference identifies this exact placed cinematic; Play tells its Sequence Player to begin when the validated player enters the trigger.',
        see: 'The Level Blueprint has one explicit LS_PrisonEscape Actor reference feeding Play (SequencePlayer).',
        check: 'Compile and confirm the Play node has a valid Sequence Player target rather than an empty reference.',
        troubleshoot: [
          'If Create a Reference is missing, select the Level Sequence Actor in the World Outliner first.',
          'Do not reference only the asset thumbnail if this workflow expects the placed Level Sequence Actor.'
        ],
        visual: [
          {
            src: 'https://d1iv7db44yhgxn.cloudfront.net/documentation/images/99bc4ca4-5300-4a9d-add1-3ec8319eabc8/trigger11.png',
            caption: 'Epic UE5.8 — Create a reference to the selected Level Sequence Actor in the Level Blueprint.',
            sourceUrl: 'https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine',
            sourceTitle: 'Epic Games — Unreal Engine 5.8 Documentation',
            kind: 'epic'
          },
          {
            src: 'https://d1iv7db44yhgxn.cloudfront.net/documentation/images/10712277-55f5-405e-95dd-00fea5e9eda4/trigger12.png',
            caption: 'Epic UE5.8 — The overlap execution reaches Play on the sequence player. The prison version adds a player Cast and Do Once before this point.',
            sourceUrl: 'https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine',
            sourceTitle: 'Epic Games — Unreal Engine 5.8 Documentation',
            kind: 'epic'
          }
        ]
      },
      {
        title: 'Set the Level Sequence Actor for gameplay',
        where: 'World Outliner → select LS_PrisonEscape Level Sequence Actor → Details',
        do: 'Turn Auto Play off and use Don’t Loop. Under Cinematic, enable Disable Movement Input and Disable Look At Input for the duration of playback. Make sure Disable Camera Cuts is not enabled.',
        why: 'The sequence should take control only when triggered, play once, prevent the player fighting the camera, then release control when it finishes.',
        see: 'The sequence waits at level start and the camera changes only after the escape trigger.',
        check: 'During playback, movement/look are disabled; after the final frame, both work again.',
        troubleshoot: [
          'If the sequence starts immediately, Auto Play is still enabled.',
          'If the camera never changes, check Camera Cuts and make sure Disable Camera Cuts is off.',
          'If control stays disabled afterwards, inspect any extra Disable Input or Set Cinematic Mode nodes you added outside the Level Sequence Actor settings.'
        ]
      },
      {
        title: 'Test the entire escape loop from the beginning',
        where: 'Level Editor → Play from a fresh session',
        do: 'Try the door before collecting the key. Collect BP_PrisonKey, return to the door, wait for it to open, cross Trigger_PrisonEscape and watch the sequence. After it ends, move and look again. Walk back through the trigger once to prove it does not replay.',
        why: 'The final test proves several separate systems hand control to one another in the correct order.',
        see: 'Locked attempt → key collected → door opens → cinematic plays once → normal gameplay returns.',
        check: 'Complete the whole route without changing variables in the editor or manually starting Sequencer.',
        troubleshoot: [
          'Test one handoff at a time: key state, door Branch, Timeline, trigger event, sequence playback, control return.',
          'If a Sequencer-controlled light or object must remain changed, set that track’s When Finished option to Keep State. The Blueprint door does not need Sequencer to own its final state.'
        ],
        visual: sequenceTriggerFlowVisual
      }
    ],
    mistakes: [
      'Trying to debug the trigger before the sequence works on its own.',
      'Spawning or placing the player inside the Trigger Box.',
      'Leaving a gap in the Camera Cuts track.',
      'Letting repeated overlaps replay the sequence.',
      'Disabling input without checking that gameplay control returns.'
    ],
    makeItYours: [
      'Add a second camera and use the Camera Cuts tutorial to reveal a guard, gate or route ahead.',
      'Time one light or sound change to the reveal.',
      'Add a skip input only after the normal play-through returns control reliably.'
    ],
    worksWhen: [
      'The sequence never auto-plays at level start.',
      'Only the player crossing the exit trigger starts it.',
      'It plays once with an active Camera Cuts track.',
      'Normal gameplay camera, movement and look return after the final frame.'
    ],
    source: {
      title: 'Epic UE5.8 — Triggering Sequences from Gameplay',
      url: 'https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine'
    }
  });

  // ---------------------------------------------------------------------
  // 4. PRISON CELL GUIDED PATH — continue after materials + atmosphere
  // ---------------------------------------------------------------------

  const path = (PATHWAYS.paths || []).find(p => p.id === 'prison-cell');
  if (path) {
    const insertedIds = new Set([
      'prison-cell-gameplay-stage',
      'prison-cell-cinematic-stage',
      'prison-cell-camera-cuts-extension',
      'prison-cell-escape-proof'
    ]);

    path.steps = (path.steps || []).filter(step => !insertedIds.has(step.id));

    const escapeStages = [
      {
        type: 'group',
        id: 'prison-cell-gameplay-stage',
        title: 'GAMEPLAY • Collect the key and open the cell door',
        icon: '⌑',
        description: 'Build the accessible starter version first. BP_PrisonKey sets HasPrisonKey on the player through an overlap. BP_PrisonDoor checks that Boolean with a Branch, gives locked feedback from False and plays a hinge Timeline from True. Test the locked and unlocked states separately before adding the cutscene.',
        items: [
          {type: 'tutorial', id: 'key-pickup', title: '1. Collect the prison key'},
          {type: 'tutorial', id: 'locked-door', title: '2. Unlock and open the cell door'}
        ]
      },
      {
        type: 'group',
        id: 'prison-cell-cinematic-stage',
        title: 'CINEMATIC • Reveal what waits beyond the cell',
        icon: '▶',
        description: 'Create a short LS_PrisonEscape camera move with a clear story job, then trigger it from a Box Trigger beyond the open door. The sequence should play once, briefly control the camera and return movement/look to the player afterwards.',
        items: [
          {type: 'tutorial', id: 'sequencer-first-shot', title: '1. Build the prison escape shot'},
          {type: 'tutorial', id: 'trigger-cutscene', title: '2. Trigger it and return to gameplay'}
        ]
      },
      {
        type: 'activity',
        id: 'prison-cell-camera-cuts-extension',
        title: 'OPTIONAL • Add a second camera cut',
        icon: '✂',
        area: 'Sequencer extension • does not affect path progress',
        href: '#/tutorial/camera-cuts',
        description: 'If the first shot works, add a second camera only when it reveals genuinely new information — for example the corridor route, a guard silhouette or a locked gate ahead. Keep one clear Camera Cuts section for each shot.'
      },
      {
        type: 'checkpoint',
        id: 'prison-cell-escape-proof',
        title: 'PROVE • Complete the whole escape without editor help',
        icon: '✓',
        area: 'Gameplay + Sequencer integration',
        description: 'Begin a fresh Play session. Try the locked door, collect the key, open the door, cross the exit trigger, watch the sequence and regain control. Cross the trigger again to prove it plays only once. Keep one Blueprint screenshot showing HasPrisonKey → Branch → locked/open paths and one Sequencer screenshot showing the Cine Camera and Camera Cuts track.',
        actionLabel: 'Escape loop tested'
      }
    ];

    const moodIndex = path.steps.findIndex(step => step.id === 'prison-cell-mood-proof');
    const insertAt = moodIndex >= 0 ? moodIndex + 1 : path.steps.length;
    path.steps.splice(insertAt, 0, ...escapeStages);

    path.kicker = 'BLOCKOUT • SURFACE • MOOD • GAMEPLAY • CINEMATIC';
    path.summary = 'Follow one prison cell from measured greybox and atmosphere into a playable escape: collect a key, open a smooth locked door and trigger a short Sequencer reveal before replacing the placeholder art.';
    path.outcome = 'A playable prison-cell environment with believable scale, deliberate materials and mood, a tested key-and-door gameplay rule, a short triggered cutscene that returns control, and later self-made 3D replacement assets.';
  }

  TOOLS.version = '3.44.8';
  TOOLS.buildDate = '7 Sep 2026';
  DESIGN.version = '3.44.8';
  DESIGN.buildDate = '7 Sep 2026';
  PATHWAYS.version = '3.44.8';
  PATHWAYS.buildDate = '2026-09-07';

  console.info('[v3.44.8] Prison Escape gameplay + Sequencer pathway loaded.');
})();
