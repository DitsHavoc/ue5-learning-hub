/* v3.43.3 — Prison Cell Guided Path + practical lesson method
   Additive data patch only.
   Runs after design-data.js + pathway-data.js and before app.js.

   Teaching method:
   PURPOSE → PRINCIPLE → DEMONSTRATION → MAKE → TEST → IMPROVE → EVIDENCE → NEXT SKILL

   Student-facing shorthand:
   LEARN → MAKE → PROVE

   No XP is duplicated. Existing lessons/tutorials still own their XP.
*/
(() => {
  'use strict';

  const DESIGN = window.UE5_DESIGN_DATA;
  const THEORY = window.UE5_THEORY_DATA;
  const PATHWAYS = window.UE5_PATHWAY_DATA;

  if (!DESIGN || !THEORY || !PATHWAYS) {
    console.warn('[v3.43.3] Prison Cell learning patch skipped: design/theory/pathway data unavailable.');
    return;
  }

  const findTutorial = id => (DESIGN.tutorials || []).find(t => t.id === id);
  const findModule = id => (DESIGN.modules || []).find(m => m.id === id);

  function patchTutorial(id, patch) {
    const tutorial = findTutorial(id);
    if (!tutorial) {
      console.warn(`[v3.43.3] Could not patch missing tutorial: ${id}`);
      return null;
    }
    Object.assign(tutorial, patch);
    return tutorial;
  }

  function upsertTutorial(tutorial) {
    DESIGN.tutorials = DESIGN.tutorials || [];
    const index = DESIGN.tutorials.findIndex(t => t.id === tutorial.id);
    if (index >= 0) DESIGN.tutorials[index] = tutorial;
    else DESIGN.tutorials.push(tutorial);
  }

  function appendStepVisuals(tutorialId, stepTitle, visuals) {
    const tutorial = findTutorial(tutorialId);
    const step = tutorial?.steps?.find(s => !Array.isArray(s) && s.title === stepTitle);
    if (!step) {
      console.warn(`[v3.43.3] Could not attach classroom visual: ${tutorialId} → ${stepTitle}`);
      return;
    }
    const existing = Array.isArray(step.visual) ? step.visual : (step.visual ? [step.visual] : []);
    step.visual = [...existing, ...visuals];
  }

  function insertTutorialId(moduleId, tutorialId, afterId = null) {
    const module = findModule(moduleId);
    if (!module) return;
    module.tutorials = module.tutorials || [];
    module.tutorials = module.tutorials.filter(id => id !== tutorialId);
    const afterIndex = afterId ? module.tutorials.indexOf(afterId) : -1;
    if (afterIndex >= 0) module.tutorials.splice(afterIndex + 1, 0, tutorialId);
    else module.tutorials.push(tutorialId);
  }

  function upsertPath(path, first = false) {
    PATHWAYS.paths = PATHWAYS.paths || [];
    PATHWAYS.paths = PATHWAYS.paths.filter(p => p.id !== path.id);
    if (first) PATHWAYS.paths.unshift(path);
    else PATHWAYS.paths.push(path);
  }

  function upsertTheoryLesson(lesson) {
    THEORY.lessons = THEORY.lessons || [];
    const current = THEORY.lessons.findIndex(x => x.id === lesson.id);
    if (current >= 0) {
      THEORY.lessons[current] = lesson;
      return;
    }
    const firstSpace = THEORY.lessons.findIndex(x => x.path === 'space');
    if (firstSpace >= 0) THEORY.lessons.splice(firstSpace, 0, lesson);
    else THEORY.lessons.push(lesson);
  }

  function addApplyLink(theoryId, link) {
    PATHWAYS.applyLinks = PATHWAYS.applyLinks || {};
    const links = PATHWAYS.applyLinks[theoryId] || [];
    if (!links.some(x => x.href === link.href)) links.push(link);
    PATHWAYS.applyLinks[theoryId] = links;
  }

  // -----------------------------------------------------------------------
  // 0. THEORY THAT EARNS ITS PLACE IN THE PRACTICAL PROJECT
  // -----------------------------------------------------------------------

  upsertTheoryLesson({
    id: 'greyboxing-spatial-prototyping',
    title: 'Greyboxing, Scale & Spatial Prototyping',
    path: 'space',
    icon: '▦',
    short: 'Use simple geometry to test scale, movement, layout and readability before finished art makes changes expensive.',
    definition: 'Greyboxing (also called blockout) is a low-detail spatial prototype built from simple shapes so a designer can test layout, human scale, movement, sightlines and readability before committing time to finished art.',
    why: 'A beautifully modelled room can still fail if the doorway is too tight, the furniture blocks movement or the space feels enormous from the player camera. Greyboxing lets you find those problems while walls and props are still cheap shapes that can be moved in seconds.',
    keyIdeas: [
      'Greyboxing is design work, not a bad-looking version of the final level.',
      'Use the player character and player camera as the real scale test; the editor camera can make normal spaces feel misleadingly small or large.',
      'Correctly sized objects can still create a bad layout if the remaining movement space is cramped, confusing or unusable.',
      'Simple shapes let you test affordances and readability: openings should look usable, barriers should look like barriers, and important routes should be understandable.',
      'A successful greybox changes after playtesting. Finding a problem is evidence that the prototype is doing its job.',
      'Keep a clean blockout version so later modelling, materials and lighting can be compared against the spatial design that came first.'
    ],
    mistakes: [
      'Treating greyboxing as decoration with grey materials instead of a test of space and movement.',
      'Judging proportions only from a floating editor camera.',
      'Adding detailed models before the layout has survived a player test.',
      'Changing the player scale to rescue a badly proportioned environment.',
      'Refusing to change the first layout because time has already been spent on it.'
    ],
    diagram: {
      title: 'Cheap decisions before expensive decisions',
      nodes: ['INTENT','SIMPLE SPACE','PLAYTEST','OBSERVE','CHANGE','RETEST','ART LATER'],
      caption: 'Block out the idea, experience it as the player, change what the test reveals, then spend time on final assets only after the space is working.'
    },
    example: {
      game: 'PRISON CELL BLOCKOUT',
      title: 'The ugly version answers the important questions',
      body: 'A prison-cell blockout does not need a finished toilet, bed or bars. Simple boxes can already tell you whether the room feels oppressive or accidentally huge, whether the player can enter, whether the furniture leaves useful movement space and whether the bars read as a boundary.',
      src: 'assets/tutorials/prison-cell/geometry-04-finished-doorway.webp',
      sourceUrl: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-01-project-setup-and-level-blockout-in-unreal-engine',
      sourceTitle: 'Teacher classroom capture — workflow supported by Epic Games UE5.8 blockout documentation'
    },
    sources: [
      {
        title: 'Project Setup and Level Blockout — Epic Games',
        url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-01-project-setup-and-level-blockout-in-unreal-engine',
        note: 'Current UE5.8 learning material describes blockout/grayboxing as using simple shapes to focus on layout and playability, catch design issues early and iterate quickly before final art.',
        kind: 'Official Unreal Engine 5.8 documentation'
      },
      {
        title: 'Placing Actors — Epic Games',
        url: 'https://dev.epicgames.com/documentation/unreal-engine/placing-actors-in-unreal-engine',
        note: 'Current UE5.8 reference distinguishes simple Shapes from Geometry Brushes and describes Geometry as useful for quickly blocking out or prototyping a level.',
        kind: 'Official Unreal Engine 5.8 documentation'
      }
    ],
    task: {
      title: 'Test the cell as a level designer',
      brief: 'Use your prison-cell greybox as evidence. Do not add polish for this task — test the space you already have.',
      steps: [
        'Identify one scale decision: for example ceiling height, doorway size, bed length or table height.',
        'Identify one movement decision: for example the gap between the bed and toilet or the route through the entrance.',
        'Identify one readability decision: for example whether the entrance, bars or usable route is obvious from the player camera.',
        'Press Play and test all three from the normal Third Person view.',
        'Change at least one thing because of what the test revealed.'
      ],
      evidence: 'One before/after screenshot pair plus the sentence: “When I played it, ___ felt wrong, so I changed ___.”',
      stretch: 'Give the level to another student without explaining the layout. Watch where they move and what they hesitate at. Does their behaviour match what you intended?'
    },
    quiz: [
      {
        q: 'What is the main purpose of a greybox?',
        options: [
          'To make a finished level using only grey materials',
          'To test spatial design while changes are still quick and cheap',
          'To avoid playtesting until the art is finished',
          'To decide the final texture resolution'
        ],
        correct: 1,
        feedback: 'A greybox is a spatial prototype: it lets you test layout, scale, movement and readability before expensive polish.'
      },
      {
        q: 'Your prison cell looks correctly sized from the editor camera but feels enormous in Play mode. Which view should drive the design decision?',
        options: [
          'The editor camera because it shows more of the room',
          'The player camera because that is how the space is experienced',
          'Whichever view makes the screenshot look better',
          'Neither — change the character scale instead'
        ],
        correct: 1,
        feedback: 'The player experience gets the final vote. Use the actual character/camera to judge human scale.'
      },
      {
        q: 'A bed and toilet are individually believable sizes, but the player cannot comfortably move between them. What has the greybox revealed?',
        options: [
          'The 3D models need more polygons',
          'The remaining movement space/layout is not working',
          'The materials need more roughness',
          'The room needs Post Process'
        ],
        correct: 1,
        feedback: 'Correct object scale does not guarantee a usable layout. Greyboxing exposes the relationships and clearances between objects.'
      }
    ],
    duration: '10–15 min',
    caseStudy: {
      intro: 'The prison cell is deliberately small enough that every object affects the space. That makes it a useful level-design exercise: a few simple shapes can reveal proportion, circulation and readability problems immediately.',
      observations: [
        'The Third Person character gives the room a human reference. Ceiling height, bars, furniture and openings can be judged against a body rather than against the editor grid alone.',
        'Furniture is not just decoration. Its footprint creates routes, bottlenecks and dead space, so moving a placeholder can change the player experience before its final model even exists.',
        'The clean greybox becomes a contract for later 3D work: finished assets should replace tested placeholders without silently breaking the scale and movement that were already proven.'
      ],
      question: 'If all materials and lighting disappeared from your cell, which spatial decisions would still make it feel believable and readable?'
    }
  });

  // -----------------------------------------------------------------------
  // 1. EXISTING GUIDE QA
  // -----------------------------------------------------------------------

  patchTutorial('greybox-room', {
    duration: '30–40 min',
    difficulty: 'Beginner',
    summary: 'Start in a Third Person level, learn the few transform tools you actually need, then block out a room with simple shapes and test it from the player camera before any art is added.',
    uses: [
      'Third Person',
      'Shapes',
      'Move / Rotate / Scale',
      'Exact transforms',
      'Player scale',
      'Playtesting'
    ],
    steps: [
      {
        title: 'Start from a playable Third Person level and save it',
        where: 'Unreal Project Browser → Third Person template, or open the Third Person project your teacher is using → File → Save Current Level As…',
        do: 'Create/open the same Third Person project as the live demonstration. Save the working level before you build. For the prison-cell lesson, a clear name such as L_PrisonCell_Greybox is ideal.',
        why: 'The Third Person template gives you an immediate player and camera for checking human scale. Saving first gives you a safe blockout you can keep and compare with later versions.',
        see: 'The level has a clear saved name and Play mode still spawns the Third Person character.',
        check: 'Press Play once before building. You should be able to move normally.',
        troubleshoot: [
          'If the project already contains a level supplied by your teacher, use that rather than making a second one.',
          'If Play does not spawn the normal character, stop and compare your project/template with the teacher demonstration before building.'
        ],
        visual: {
          src: 'assets/tutorials/prison-cell/greybox-01-third-person-template.webp',
          caption: 'Choose Games → Third Person. Use Blueprint and follow the project settings shown in the live lesson, then give the project a sensible name.',
          sourceTitle: 'Teacher classroom capture — Unreal Engine',
          kind: 'local'
        }
      },
      {
        title: 'Prove you can control one cube before building a room',
        where: 'Level Editor → Add (+) → Shapes → Cube → Details → Transform',
        do: 'Place one Cube. Select it, then practise Move (W), Rotate (E) and Scale (R). Undo any accidental change with Ctrl+Z. Finish by entering at least one clean value in the Details → Transform panel instead of only dragging by eye.',
        why: 'Greyboxing is fast only when you control the transforms. A whole room built with accidental rotations and random scales becomes hard to edit later.',
        see: 'You can deliberately move, rotate and resize the same cube, then return it to a sensible position.',
        check: 'Say or point to which gizmo is Move, Rotate and Scale. Confirm the object has no accidental tiny rotation.',
        troubleshoot: [
          'If the wrong gizmo is active, press W, E or R rather than fighting it.',
          'If the cube disappears, press F with it selected to frame it in the viewport.'
        ],
        visual: null
      },
      {
        title: 'Build the room shell with simple shapes',
        where: 'Add (+) → Shapes → Cube → duplicate with Ctrl+W or Alt-drag → Details → Transform',
        do: 'Build a floor and four walls from cubes. Unreal’s default distance unit is centimetres: 1 Unreal Unit (uu) = 1 cm, so 100 uu = 1 metre. Follow the dimensions used in the live lesson. If you are working independently, begin with a small believable room rather than a giant hall — roughly 4.5 m × 6 m with a ceiling around 3 m is a useful prison-cell starting point, not a rule.',
        why: 'The shell establishes enclosure, movement space and human proportion. Those decisions are cheap to change now and expensive after detailed art exists.',
        see: 'From the editor camera it reads as a room; from Play mode it feels like a human-sized space rather than a miniature or warehouse.',
        check: 'Walk to every wall in Play mode. Look at the ceiling and corners from the player camera.',
        troubleshoot: [
          'If the room feels huge, do not add furniture to hide the problem — fix the shell first.',
          'If walls overlap strangely, use clean Transform values and grid snapping instead of tiny freehand adjustments.'
        ],
        visual: null
      },
      {
        title: 'Leave a usable entrance and keep checking the player',
        where: 'Room shell → leave a gap / arrange wall pieces around an opening → Play',
        do: 'Create one entrance wide and tall enough for the Third Person character and camera. Keep the Player Start in a sensible position. If your teacher places a mannequin/reference character in the scene, keep it visible while judging proportions.',
        why: 'An opening that looks fine from the editor camera can feel cramped once the character capsule and third-person camera move through it.',
        see: 'The character can enter and leave without getting caught or causing severe camera clipping.',
        check: 'Run through the entrance forwards, turn while passing through it, and approach it from both sides.',
        troubleshoot: [
          'If the character catches, widen the opening before adding detail.',
          'If only the camera causes problems, test a little extra clearance around the opening.'
        ],
        visual: null
      },
      {
        title: 'Use primitive placeholders for the things that matter',
        where: 'Add (+) → Shapes → Cube / Cylinder / other simple primitives',
        do: 'Add only the objects needed to judge the space. For the prison-cell lesson: bars or a barred-door proxy, bed, toilet, table and optional stool. Use cubes/cylinders and simple proportions — do not model detail yet.',
        why: 'A placeholder answers “does this fit and can the player use the space?” without wasting time making an asset that may later need to move or change size.',
        see: 'The room clearly reads as its intended purpose even though everything is still simple geometry.',
        check: 'Stand beside every placeholder in Play mode. Ask whether its height, footprint and clearance make sense next to a person.',
        troubleshoot: [
          'If you start adding tiny details, stop. The finished 3D assets come later.',
          'If furniture only fits because the player cannot move around it, resize or rearrange the room now.'
        ],
        visual: null
      },
      {
        title: 'Walk the whole blockout and change one real problem',
        where: 'Play → use the normal player camera and controls',
        do: 'Walk into the room, around every major placeholder and back out again. Deliberately look for one thing that feels too large, too small, too cramped or awkward. Stop Play and change it.',
        why: 'The point of greyboxing is not to prove your first idea was correct. It is to discover problems while they are still cheap to fix.',
        see: 'Version two of the blockout is measurably or visibly better than the first attempt.',
        check: 'You can finish the sentence: “When I played it, ___ felt wrong, so I changed ___.”',
        troubleshoot: [
          'Do not accept “it looks fine from above” as a test — use the player camera.',
          'If nothing seems wrong, ask another student to walk around it without explaining what you intended.'
        ],
        visual: null
      },
      {
        title: 'Keep the grey version before materials or lighting',
        where: 'File → Save All → take viewport/player-height screenshots',
        do: 'Save the clean greybox and take at least one editor screenshot plus one player-height screenshot. Do not overwrite this evidence when you later add materials, lighting or finished models.',
        why: 'Keeping the blockout lets you prove how the environment developed and stops art from hiding whether the original spatial decisions actually worked.',
        see: 'You have a saved grey version and screenshots you can compare with the later material, lighting and final-asset passes.',
        check: 'Open the screenshot and confirm the room, entrance and main placeholders are readable.',
        troubleshoot: [],
        visual: null
      }
    ],
    mistakes: [
      'Decorating before the room has been tested from the player camera.',
      'Building a huge room because the editor camera makes normal spaces look small.',
      'Freehand scaling everything without checking clean Transform values.',
      'Making detailed furniture before proving its footprint and position.',
      'Testing only from above rather than pressing Play.',
      'Overwriting the clean greybox after the art pass starts.'
    ],
    makeItYours: [
      'Keep the same room dimensions but create a different furniture layout and compare movement.',
      'Make one deliberately cramped version and one more generous version, then decide which communicates the intended mood better.',
      'When the layout works, continue into Geometry Brushes, materials or lighting rather than adding detail to the placeholder meshes.'
    ],
    worksWhen: [
      'The Third Person character can enter and move around the room.',
      'The shell and major placeholders feel believable at human scale.',
      'At least one thing changed because of an actual Play-mode test.',
      'A clean greybox version has been saved before the art pass.'
    ],
    prescriptive: true
  });

  patchTutorial('player-scale', {
    duration: '15–20 min',
    difficulty: 'Beginner',
    summary: 'Use the Third Person character and camera as a human ruler inside the level you are already making, fix bad clearances and proportions, then keep any useful measurements for future environments.',
    uses: [
      'Third Person',
      'Player camera',
      'Metrics',
      'Clearance',
      'Collision',
      'Proportion'
    ],
    steps: [
      {
        title: 'Use the actual player as your scale reference',
        where: 'Your current greybox → Play',
        do: 'Start at the room entrance and look at the environment from the normal player camera. Compare wall height, ceiling height and the size of the room with the character.',
        why: 'The editor camera has no reliable sense of human scale. The game is experienced from the player camera, so that view gets the final vote.',
        see: 'You can describe whether the room feels cramped, ordinary, oppressive or oversized from human height.',
        check: 'Look up at the ceiling, then stand close to a wall. Nothing should feel accidentally miniature or enormous.',
        troubleshoot: [
          'If the room looked fine in the editor but wrong in Play, trust Play mode and change the blockout.'
        ],
        visual: null
      },
      {
        title: 'Test the entrance with the character and camera',
        where: 'Play → repeatedly enter and leave the room',
        do: 'Walk through the doorway/bars opening several times. Turn the camera while crossing it and approach at a slight angle.',
        why: 'A character capsule and third-person camera need more usable clearance than a static screenshot suggests.',
        see: 'Movement through the opening feels deliberate rather than like squeezing through a modelling error.',
        check: 'You can cross the threshold without snagging or severe camera clipping.',
        troubleshoot: [
          'If movement catches, widen the opening or check collision before assuming the controls are broken.'
        ],
        visual: null
      },
      {
        title: 'Check furniture against a human body',
        where: 'Placeholders in the current room → Play',
        do: 'Stand beside the major placeholders. For the prison cell, check the bed length/height, toilet footprint, table height and the spacing of the bars/door. Adjust anything that only looked convincing from above.',
        why: 'Players already know roughly how large familiar furniture should be. Incorrect proportions immediately make an environment feel fake.',
        see: 'The bed could plausibly hold the character, the table is usable height, and the other objects read at believable scale.',
        check: 'Choose one object and explain which part of the character you used as the comparison.',
        troubleshoot: [
          'Do not scale every object together to rescue a bad room. Fix the object or space that is actually wrong.'
        ],
        visual: null
      },
      {
        title: 'Measure the gaps the player actually needs',
        where: 'Play → walk between furniture, wall edges and the entrance',
        do: 'Walk every important route through the room. Turn around beside the furniture and test any narrow gap the player is expected to use.',
        why: 'A room can contain correctly sized objects and still fail because the remaining movement space is unusable.',
        see: 'The player can move where the design expects them to move without accidental dead gaps or camera fights.',
        check: 'Identify the narrowest intentional route and prove it works in Play mode.',
        troubleshoot: [
          'If a gap is decorative and the player is not meant to enter it, make that visually clear rather than leaving an almost-usable space.'
        ],
        visual: null
      },
      {
        title: 'Record useful metrics after testing, not before',
        where: 'Details → Transform / your notes or screenshot',
        do: 'Once the room feels right, record a few values that helped: useful doorway size, comfortable movement gap, wall height or furniture height. Keep them as starting points for the next environment.',
        why: 'Metrics become valuable when they come from a tested player experience. They are starting points, not laws that replace judgement.',
        see: 'You have a small set of dimensions you can reuse instead of guessing from zero next time.',
        check: 'Each saved measurement has already been tested with the playable character.',
        troubleshoot: [],
        visual: null
      }
    ],
    mistakes: [
      'Judging scale only from the editor camera.',
      'Using one “correct” measurement without testing the actual character/camera.',
      'Ignoring the space left between correctly sized objects.',
      'Shrinking the player or camera to rescue an oversized/undersized environment.',
      'Treating recorded metrics as rules that can never change.'
    ],
    makeItYours: [
      'Compare two different entrance widths and decide which better supports the mood you want.',
      'Make an intentionally oppressive version of the room without making basic movement frustrating.',
      'Turn your tested values into a tiny metrics note you can reuse on your next level.'
    ],
    worksWhen: [
      'The room reads correctly from the player camera.',
      'Entrances and important movement gaps work without snagging.',
      'Familiar objects are believable beside the character.',
      'You changed at least one proportion because of a human-scale test.'
    ],
    prescriptive: true
  });

  patchTutorial('horror-lighting', {
    summary: 'Use the same method in a corridor, cell or small room: begin readable, remove information selectively, preserve the route/important edges, and create one deliberate area of anticipation rather than simply making everything dark.'
  });

  patchTutorial('post-process-mood', {
    summary: 'Light the scene first, grade it second. Use Post Process to reinforce a mood that already works through lighting rather than using extreme exposure, bloom or colour grading to rescue a broken scene.'
  });

  // -----------------------------------------------------------------------
  // 2. TWO MISSING MINI-GUIDES
  // -----------------------------------------------------------------------

  upsertTutorial({
    id: 'geometry-brush-blockout',
    title: 'Cut Openings with Geometry Brushes',
    category: 'design-world-design',
    designModule: 'world-design',
    duration: '10–15 min',
    difficulty: 'Beginner + extension',
    summary: 'Use Additive and Subtractive Geometry Brushes for a quick blockout opening, keep the brush work on the grid, then try Brush Editing as an optional advanced extension.',
    uses: [
      'Geometry Brushes',
      'Additive',
      'Subtractive',
      'Grid snapping',
      'Brush Editing',
      'Shift + 7'
    ],
    referenceLesson: null,
    steps: [
      {
        title: 'Know when to use a Geometry Brush',
        where: 'Level Editor → Add / Place Actors → Geometry',
        do: 'Use Geometry Brushes only for fast blockout/prototyping in this exercise. A Cube from Shapes is a Static Mesh actor; a Box from Geometry is a Geometry Brush. Keep normal Shape actors if they already solve the job cleanly. Use Geometry Brushes when you specifically need brush behaviour such as Additive/Subtractive.',
        why: 'Geometry Brushes are useful for quickly proving space and openings. They are not a reason to turn an early blockout into the final finished environment.',
        see: 'You can tell the difference between a normal Shape/Static Mesh actor and a Geometry Brush actor.',
        check: 'Before continuing, point to the Geometry section rather than dragging another normal Cube from Shapes.',
        troubleshoot: [
          'If you cannot find Geometry, use the Add/Place Actors search and search for Geometry or Box Brush.',
          'A Subtractive Geometry Brush does not cut a normal Shape/Static Mesh cube. If nothing happens, first check what type of actor you placed.',
          'If your college build labels the placement panel slightly differently, follow the teacher’s live location — the actor type is the important part.'
        ],
        visual: {
          src: 'assets/tutorials/prison-cell/geometry-01-find-geometry.webp',
          caption: 'Open the Geometry category to find Box, Cylinder, Stairs and the other Geometry Brush shapes. For a simple wall or cutter, start with Box.',
          sourceTitle: 'Teacher classroom capture — Unreal Engine',
          kind: 'local'
        }
      },
      {
        title: 'Place an Additive brush and keep it on the grid',
        where: 'Add / Place Actors → Geometry → Box → Details / Brush Settings',
        do: 'Place a Box Geometry Brush and make it Additive. Use clean size values and keep grid snapping enabled.',
        why: 'Additive brushes create solid brush space. Grid-aligned brush vertices reduce the chance of messy brush intersections and make later edits predictable.',
        see: 'The brush creates a simple solid block/wall volume aligned cleanly to the level grid.',
        check: 'Move it by a snapped amount and confirm it lands cleanly rather than at an awkward tiny offset.',
        troubleshoot: [
          'If the brush appears in the wrong place, select it and use clean Transform values rather than dragging from far away.'
        ],
        visual: {
          src: 'assets/tutorials/prison-cell/geometry-02-brush-size.webp',
          caption: 'Use Brush Settings to enter clean X, Y and Z dimensions. Deliberate values are much easier to edit than random freehand stretching.',
          sourceTitle: 'Teacher classroom capture — Unreal Engine',
          kind: 'local'
        }
      },
      {
        title: 'Use a Subtractive brush to cut one opening',
        where: 'Geometry Brush selected/placed → Brush Type: Subtractive → position it so it overlaps the Additive brush',
        do: 'Create or duplicate a Box brush, set it to Subtractive, size it like a simple doorway/window opening, then overlap the solid Additive brush where the hole should be.',
        why: 'A Subtractive brush removes brush space from previously added brush geometry, making it useful for quick doors and windows during blockout.',
        see: 'The overlapping part becomes an opening through the solid brush.',
        check: 'Press Play and walk through/look through the opening. It must be large enough for the intended use.',
        troubleshoot: [
          'If nothing is cut, confirm the solid brush is Additive, the cutter is Subtractive, and the two brushes actually overlap.',
          'Brush order matters. A subtraction cannot remove solid space that did not exist when the operation was evaluated.'
        ],
        visual: {
          src: 'assets/tutorials/prison-cell/geometry-03-additive-subtractive.webp',
          caption: 'Brush Type controls the operation: Additive creates solid brush space; Subtractive removes brush space.',
          sourceTitle: 'Teacher classroom capture — Unreal Engine',
          kind: 'local'
        }
      },
      {
        title: 'Keep the opening simple and test it',
        where: 'Viewport + Play',
        do: 'Check the opening from both sides and from the player camera. Resize or reposition the Subtractive brush if the player/camera catches or the cut is badly aligned.',
        why: 'The opening exists to prove the level works, not to show off complicated brush geometry.',
        see: 'The doorway/window reads clearly and does not contain accidental slivers or awkward almost-gaps.',
        check: 'You can explain what the Additive brush contributes and what the Subtractive brush removes.',
        troubleshoot: [
          'If the brush becomes hard to reason about, simplify it rather than adding more overlapping cuts.'
        ],
        visual: {
          src: 'assets/tutorials/prison-cell/geometry-04-finished-doorway.webp',
          caption: 'The orange wireframe is the Subtractive brush. Where it overlaps the Additive wall, Unreal removes that space and leaves a usable doorway.',
          sourceTitle: 'Teacher classroom capture — Unreal Engine',
          kind: 'local'
        }
      },
      {
        title: 'OPTIONAL ADVANCED — edit the brush shape directly',
        where: 'Level Editor Modes → Brush Editing, or Shift + 7 → select brush face/edge/vertex',
        do: 'If your basic blockout already works, switch to Brush Editing and make one controlled shape change by moving a face, edge or vertex. Keep the edit snapped and simple, then return to normal Select mode.',
        why: 'Brush Editing lets confident students reshape the blockout without adding lots of extra pieces, while keeping the task focused on space rather than final modelling.',
        see: 'One part of the Geometry Brush changes shape while the rest of the room remains usable.',
        check: 'Return to Select mode and Play-test the result. The change should have a clear purpose.',
        troubleshoot: [
          'If you lose control of the shape, Undo and return to the working simple brush.',
          'Do not make tiny off-grid vertex edits just because the mode allows it.'
        ],
        visual: {
          src: 'assets/tutorials/prison-cell/geometry-05-brush-editing.webp',
          caption: 'Brush Editing exposes the brush shape for direct editing. Move faces, edges or vertices carefully, keep edits snapped, and only use the mode once the simple blockout already works.',
          sourceTitle: 'Teacher classroom capture — Unreal Engine',
          kind: 'local'
        }
      }
    ],
    mistakes: [
      'Using a normal Shape actor when you meant to demonstrate a Geometry Brush.',
      'Turning grid snapping off and creating tiny brush alignment errors.',
      'Expecting a Subtractive brush to cut a normal Static Mesh/Shape actor.',
      'Building complicated final art out of prototype brush geometry.',
      'Using Brush Editing before the basic opening already works.'
    ],
    makeItYours: [
      'Cut a second opening with a clearly different purpose: door vs narrow observation slot.',
      'Use Brush Editing to slope or offset one simple surface without changing the whole room.',
      'Keep a screenshot of the brush blockout so you can compare it with the later finished mesh replacement.'
    ],
    worksWhen: [
      'You can explain Additive vs Subtractive.',
      'The cut opening is aligned and usable in Play mode.',
      'Grid snapping stayed on during brush work.',
      'Any Brush Editing extension had a clear spatial purpose.'
    ],
    icon: '▱',
    featured: false,
    referenceImages: [],
    source: null,
    prescriptive: true,
    officialRefs: [
      {
        title: 'Epic Games — Level Editor (UE 5.8)',
        url: 'https://dev.epicgames.com/documentation/unreal-engine/level-editor-in-unreal-engine?lang=en-US',
        note: 'Brush Editing mode is listed as Shift + 7 for modifying Geometry Brushes.'
      },
      {
        title: 'Epic Games — Placing Actors (UE 5.8)',
        url: 'https://dev.epicgames.com/documentation/unreal-engine/placing-actors-in-unreal-engine?lang=en-US',
        note: 'Current actor-placement reference for Geometry Brushes and rapid level blockout.'
      }
    ]
  });

  upsertTutorial({
    id: 'ambientcg-material-import',
    title: 'Use an ambientCG Material in Unreal',
    category: 'design-materials',
    designModule: 'materials',
    duration: '10–15 min',
    difficulty: 'Beginner',
    summary: 'Download one sensible-resolution CC0 PBR surface from ambientCG, identify the maps you actually need, import them cleanly and build a simple Unreal material without treating the ZIP as magic.',
    uses: [
      'ambientCG',
      'PBR textures',
      'Base Color',
      'Roughness',
      'Normal',
      'Texture tiling'
    ],
    referenceLesson: null,
    steps: [
      {
        title: 'Choose a surface for a real job in the room',
        where: 'Hub → Resource Library → ambientCG, or ambientCG.com → Materials',
        do: 'Choose one material that matches a surface you actually need: concrete/plaster for a wall, metal for bars, or a suitable floor. Do not download five alternatives “just in case”.',
        why: 'Material choice should support the environment. A small deliberate surface set is easier to understand and keeps the project organised.',
        see: 'You can name exactly which object/surface will use the material.',
        check: 'Before downloading, answer: “This is for my ___.”',
        troubleshoot: [],
        visual: null
      },
      {
        title: 'Download a sensible resolution and unzip it',
        where: 'ambientCG material page → Downloads',
        do: 'For this classroom exercise, choose a 2K download unless your teacher gives a different requirement. Save the ZIP into a project/source-textures folder, then extract it before importing anything into Unreal.',
        why: '2K is normally enough to learn the workflow and avoids filling the project/network with unnecessarily large 4K/8K textures.',
        see: 'The extracted folder contains several images representing different PBR properties.',
        check: 'Keep the ZIP/source folder outside the Unreal Content folder; import the actual textures through Unreal.',
        troubleshoot: [
          'If Windows only shows the ZIP as one file, extract it first rather than trying to drag the archive into Unreal.'
        ],
        visual: null
      },
      {
        title: 'Identify only the maps you need',
        where: 'Extracted ambientCG folder',
        do: 'Find the colour/base-colour image, Roughness image and normal map. If the download contains both DirectX and OpenGL normal maps, use the DirectX version for Unreal. A Metalness map is only needed when the material genuinely contains metallic and non-metallic regions.',
        why: 'Each texture has a different job. Importing every file without knowing why creates clutter and makes the material graph harder to debug.',
        see: 'You have selected the three core maps: colour, roughness and normal, plus metalness only if genuinely useful.',
        check: 'Say what each chosen image controls before importing it.',
        troubleshoot: [
          'Do not connect Displacement/Height just because it exists; leave advanced height workflows for a lesson that actually needs them.',
          'If the normal lighting looks inverted later, first confirm you chose the DirectX normal rather than the OpenGL version.'
        ],
        visual: null
      },
      {
        title: 'Import the textures and check the normal map',
        where: 'Unreal Content Drawer → your Materials/Textures folder → Import',
        do: 'Import the selected texture files into a clearly named folder. Open the normal texture and confirm Unreal treats it as a normal map; if it did not detect it correctly, use the normal-map compression/settings shown in your teacher demonstration.',
        why: 'Correct texture type/settings matter because colour data and normal-vector data should not be interpreted in the same way.',
        see: 'The Content Drawer contains a small, clearly named set of textures and the normal has the characteristic normal-map appearance/settings.',
        check: 'No ZIP files or duplicate 4K/8K versions are sitting in the Content folder.',
        troubleshoot: [
          'If everything is imported into the root Content folder, make a proper project folder and move the textures before continuing.'
        ],
        visual: null
      },
      {
        title: 'Create the material and connect the core PBR maps',
        where: 'Content Drawer → right-click → Material → open Material Editor',
        do: 'Create a clearly named Material. Add the colour texture and connect RGB → Base Color. Connect Roughness → Roughness. Connect the DirectX normal texture → Normal. Add Metalness only when the downloaded material actually needs it.',
        why: 'The graph should state the physical idea clearly: colour describes colour, roughness describes micro-surface response, and the normal map adds small lighting detail without extra geometry.',
        see: 'The preview sphere responds with the chosen colour, surface roughness and normal detail.',
        check: 'Temporarily disconnect Roughness or Normal and observe what each map contributes.',
        troubleshoot: [
          'Do not connect the colour texture into Roughness/Normal just because it is the first file you found.',
          'If you are unsure what Metallic or Roughness means, complete “Make a Clean PBR Material” before adding more maps.'
        ],
        visual: null
      },
      {
        title: 'Apply it in the prison cell and judge scale',
        where: 'Drag the Material onto the intended wall/floor/bars → player camera',
        do: 'Apply the material to the surface it was chosen for. Look at it from player height. If bricks, tiles, panels or concrete detail look absurdly large/small, fix the texture tiling rather than changing the room to suit the texture.',
        why: 'A technically connected PBR material can still fail visually if its texture scale is wrong relative to the player and environment.',
        see: 'Surface detail looks believable beside the Third Person character and room dimensions.',
        check: 'Compare it with a familiar human reference such as door height or bed size.',
        troubleshoot: [
          'If the material stretches differently across separate blockout pieces, note it for the teacher; UV/texture-coordinate handling may need the next material step.',
          'Do not download an 8K version to solve incorrect tiling.'
        ],
        visual: null
      }
    ],
    mistakes: [
      'Downloading 4K/8K textures for a basic classroom blockout with no reason.',
      'Importing the ZIP or every map in the folder into Unreal.',
      'Using the OpenGL normal when a DirectX normal is available for Unreal.',
      'Connecting Metalness because “metallic means shiny”.',
      'Changing room scale to make a badly tiled material look right.',
      'Adding displacement/height before understanding the basic PBR material.'
    ],
    makeItYours: [
      'Use one concrete/plaster surface and one metal surface, then explain why their roughness/metal response differs.',
      'Create a deliberately wrong texture scale, screenshot it, then fix it and compare.',
      'Later turn the material into a Material Instance so surface variation does not require duplicate graphs.'
    ],
    worksWhen: [
      'The downloaded files are organised outside and inside Unreal.',
      'Base Color, Roughness and Normal are connected to the correct inputs.',
      'Metalness is only used where physically justified.',
      'The texture scale looks believable from player height.'
    ],
    icon: '▧',
    featured: false,
    referenceImages: [],
    source: null,
    prescriptive: true,
    officialRefs: [
      {
        title: 'ambientCG',
        url: 'https://ambientcg.com/',
        note: 'CC0 PBR materials, HDRIs and models.'
      },
      {
        title: 'Epic Games — Material Inputs (UE 5.8)',
        url: 'https://dev.epicgames.com/documentation/unreal-engine/material-inputs-in-unreal-engine?lang=en-US',
        note: 'Current Unreal material input reference.'
      }
    ]
  });

  insertTutorialId('world-design', 'geometry-brush-blockout', 'greybox-room');
  insertTutorialId('materials', 'ambientcg-material-import', 'basic-pbr-material');

  // -----------------------------------------------------------------------
  // 3. GUIDED PATH — PROJECT JOURNEY, NOT WEBSITE CHECKLIST
  // -----------------------------------------------------------------------

  PATHWAYS.intro = 'Guided Paths are optional project journeys through learning that already exists in the Hub. They connect live teaching, useful theory, making and practical checkpoints around a real outcome without locking the rest of the site or duplicating XP.';

  PATHWAYS.principles = PATHWAYS.principles || [];
  const methodPrinciple = 'Practical paths use LEARN → MAKE → PROVE: theory appears when it helps a decision, making produces something real, and checkpoints test or improve the result.';
  const livePrinciple = 'A live teacher demonstration remains the main lesson when appropriate; the Hub supports it with recovery guides, extensions and evidence checkpoints rather than pretending to replace the teacher.';
  if (!PATHWAYS.principles.includes(methodPrinciple)) PATHWAYS.principles.push(methodPrinciple);
  if (!PATHWAYS.principles.includes(livePrinciple)) PATHWAYS.principles.push(livePrinciple);

  upsertPath({
    id: 'prison-cell',
    icon: '▦',
    title: 'Prison Cell: Greybox → Game-Ready',
    kicker: 'BLOCKOUT • SCALE • SURFACE • MOOD • REPLACE',
    summary: 'Follow one prison cell from a plain Third Person blockout to a surfaced and lit environment, then use later 3D lessons to replace the placeholder shapes with your own game-ready assets.',
    outcome: 'A playable prison-cell environment with a preserved greybox, believable scale, deliberate PBR surfaces, controlled mood lighting, tested revisions and later self-made 3D replacement assets.',
    audience: 'Built around live Unreal + 3D teaching. Ideal for environment design, level blockout, materials, lighting and the Max → Unreal asset pipeline.',
    steps: [
      {
        type: 'checkpoint',
        id: 'prison-cell-plan',
        title: 'PLAN • What must the cell contain?',
        icon: '□',
        area: 'Live lesson • planning',
        description: 'Before detail, make a tiny top-down sketch or simple plan showing the room, entrance/bars, bed, toilet and table/stool. Add rough proportions only. Greyboxing exists so scale, movement and layout can change cheaply before finished art makes those changes expensive.',
        actionLabel: 'Plan ready'
      },
      {
        type: 'theory',
        id: 'greyboxing-spatial-prototyping',
        why: 'LEARN • A short design lesson before the build: understand what greyboxing is actually testing — scale, movement, layout and readability — so the simple shapes have a purpose.'
      },
      {
        type: 'tutorial',
        id: 'greybox-room',
        why: 'MAKE • Follow the live Unreal demonstration, then use this guide to recover any missed steps: Third Person project, transforms, room shell, simple placeholders and Play-mode testing.'
      },
      {
        type: 'tutorial',
        id: 'player-scale',
        why: 'PROVE • Use the actual Third Person character/camera as the judge. Check the entrance, ceiling, bed, toilet, table and movement gaps — then fix what feels wrong.'
      },
      {
        type: 'checkpoint',
        id: 'prison-cell-greybox-proof',
        title: 'PROVE • The plain-grey cell works',
        icon: '▶',
        area: 'Live lesson • Unreal Engine',
        href: '#/design/world-design',
        description: 'Keep everything simple and grey. Your cell needs a room shell, entrance/bars, bed, toilet and table/stool proxy. Press Play, walk the whole space, change at least one problem you discovered, then keep one editor screenshot and one player-height screenshot. Be able to say: “When I played it, ___ felt wrong, so I changed ___.”',
        actionLabel: 'Greybox tested'
      },
      {
        type: 'theory',
        id: 'affordances-signifiers',
        why: 'LEARN • Before adding more detail, understand how shape, position and visual cues tell a player what a space or object is for. Use that thinking when refining the bars, entrance and furniture layout.'
      },
      {
        type: 'tutorial',
        id: 'geometry-brush-blockout',
        why: 'MAKE / EXTEND • Use a Subtractive Geometry Brush for one useful opening. The final Brush Editing step is an optional extension for students who are already confident.'
      },
      {
        type: 'checkpoint',
        id: 'prison-cell-geometry-proof',
        title: 'PROVE • The opening still works',
        icon: '▱',
        area: 'Geometry Brush check',
        description: 'Test the cut opening from the player camera. It should be aligned, readable and usable. If you tried Brush Editing, the edited shape must have a reason rather than being complicated for the sake of it.',
        actionLabel: 'Opening tested'
      },
      {
        type: 'tutorial',
        id: 'basic-pbr-material',
        why: 'LEARN • Understand what Base Color, Roughness, Metallic and Normal actually do before treating downloaded PBR maps as mysterious files.'
      },
      {
        type: 'tutorial',
        id: 'ambientcg-material-import',
        why: 'MAKE • Choose a small deliberate set of CC0 surfaces from ambientCG and bring them into Unreal cleanly. Start with 2K, connect only the maps you understand, then judge tiling at player scale.'
      },
      {
        type: 'checkpoint',
        id: 'prison-cell-material-proof',
        title: 'PROVE • Surface choices make physical sense',
        icon: '▧',
        area: 'Materials pass',
        description: 'Use a restrained surface set such as concrete/plaster, metal and one floor treatment. From player height, check texture scale. Explain which surface is genuinely metallic and what its roughness tells you about the material.',
        actionLabel: 'Material pass tested'
      },
      {
        type: 'tutorial',
        id: 'horror-lighting',
        why: 'MAKE • Adapt the existing horror-lighting method to the cell: begin readable, remove information selectively, preserve important edges and create one deliberate anticipation/focus area.'
      },
      {
        type: 'tutorial',
        id: 'post-process-mood',
        why: 'MAKE • Light first, grade second. Use Post Process only after the cell already works through its actual lights.'
      },
      {
        type: 'checkpoint',
        id: 'prison-cell-mood-proof',
        title: 'PROVE • Greybox vs mood pass',
        icon: '◐',
        area: 'Lighting + atmosphere',
        description: 'Take a later screenshot from roughly the same player-height camera as your greybox evidence. Compare them. State what the materials/lighting now make the player notice or feel, and identify one important part of the space that remained readable.',
        actionLabel: 'Mood comparison complete'
      },
      {
        type: 'checkpoint',
        id: 'prison-cell-model-assets',
        title: 'NEXT SKILL • Build the real cell assets',
        icon: '⬡',
        area: '3D Modelling Studio • future lessons',
        href: '#/modeling',
        description: 'Use later 3ds Max lessons to model the real bed, bars/door, table/stool, toilet or other chosen cell pieces. The tested greybox dimensions become the target: the new assets should fit the space rather than forcing the whole level to move around them.',
        actionLabel: 'Replacement assets ready'
      },
      {
        type: 'checkpoint',
        id: 'prison-cell-replace-blockout',
        title: 'MAKE • Replace placeholders without breaking the level',
        icon: '⇥',
        area: 'Max → Unreal pipeline',
        href: '#/modeling',
        description: 'Use the 3D Modelling Studio export/import learning to bring the finished assets into Unreal. Replace the blockout pieces and re-run the same movement/scale checks. Fix source scale, pivot or mesh problems at the correct stage instead of hiding them with random Unreal transforms.',
        actionLabel: 'Blockout replaced'
      },
      {
        type: 'theory',
        id: 'playtesting-iteration',
        why: 'LEARN • The final environment is not finished because you like it. Use another player’s behaviour as evidence and decide what genuinely needs changing.'
      },
      {
        type: 'checkpoint',
        id: 'prison-cell-final-proof',
        title: 'PROVE • One player, one observation, one change',
        icon: '💬',
        area: 'Final playtest / Critique Board',
        href: '#/critique',
        description: 'Give the finished cell to another student without explaining it. Record one useful observation about movement, readability, scale or mood. Make one evidence-based change and keep a final screenshot. Finish with: What did you plan? What did you make? How did you test it? What changed because of the test?',
        actionLabel: 'Final revision complete'
      }
    ]
  }, true);

  addApplyLink('greyboxing-spatial-prototyping', {
    icon: '▦',
    title: 'Prison Cell: Greybox → Game-Ready',
    meta: 'Guided Path • apply this theory now',
    href: '#/pathways/prison-cell',
    why: 'Use the prison-cell blockout to test scale, movement and readability immediately instead of leaving the theory on the page.'
  });

  addApplyLink('affordances-signifiers', {
    icon: '▦',
    title: 'Prison Cell: Greybox → Game-Ready',
    meta: 'Guided Path • environment project',
    href: '#/pathways/prison-cell',
    why: 'Apply affordances and signifiers immediately to entrances, bars, furniture and readable space.'
  });

  addApplyLink('playtesting-iteration', {
    icon: '▦',
    title: 'Prison Cell: Greybox → Game-Ready',
    meta: 'Guided Path • environment project',
    href: '#/pathways/prison-cell',
    why: 'Use a real player test to drive one final environment revision.'
  });


  // -----------------------------------------------------------------------
  // 5. CLASSROOM SCREENSHOT PASS — WHAT STUDENTS ACTUALLY SEE
  // -----------------------------------------------------------------------

  appendStepVisuals('greybox-room', 'Start from a playable Third Person level and save it', [
    {src:'assets/tutorials/prison-cell/greybox-02-play-controls.webp',caption:'Press Play before you build. If the Third Person character does not spawn and move normally, fix that first rather than discovering it after the room is finished.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'}
  ]);

  appendStepVisuals('geometry-brush-blockout', 'Place an Additive brush and keep it on the grid', [
    {src:'assets/tutorials/prison-cell/geometry-06-selected-brush.webp',caption:'A selected Box Geometry Brush in the viewport. Keep the transform gizmo visible and move the brush in deliberate snapped steps.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'},
    {src:'assets/tutorials/prison-cell/geometry-07-transform-panel.webp',caption:'The selected Geometry Brush also has normal Location, Rotation and Scale controls in Details. Use clean values rather than tiny accidental offsets or rotations.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'}
  ]);

  appendStepVisuals('player-scale', 'Use the actual player as your scale reference', [
    {src:'assets/tutorials/prison-cell/scale-01-character-reference.webp',caption:'Keep the mannequin/Third Person character beside the blockout while judging size. The player is a much better human-scale reference than the floating editor camera.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'}
  ]);

  appendStepVisuals('player-scale', 'Test the entrance with the character and camera', [
    {src:'assets/tutorials/prison-cell/scale-02-doorway-reference.webp',caption:'Check the doorway beside the character, then test it in Play mode. A doorway can look generous in the editor but still catch the character capsule or third-person camera.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'}
  ]);

  appendStepVisuals('ambientcg-material-import', 'Download a sensible resolution and unzip it', [
    {src:'assets/tutorials/prison-cell/material-01-ambientcg-download.webp',caption:'On ambientCG, choose the material you actually need and use a sensible classroom download such as 2K PNG unless the teacher asks for something different. Bigger is not automatically better.',sourceTitle:'Teacher classroom capture — ambientCG',kind:'local'}
  ]);

  appendStepVisuals('ambientcg-material-import', 'Identify only the maps you need', [
    {src:'assets/tutorials/prison-cell/material-02-extracted-maps.webp',caption:'An ambientCG download contains several map types. For this beginner workflow, identify Color/Base Color, Roughness and NormalDX first. Do not import every file just because it exists.',sourceTitle:'Teacher classroom capture — ambientCG download',kind:'local'}
  ]);

  appendStepVisuals('ambientcg-material-import', 'Import the textures and check the normal map', [
    {src:'assets/tutorials/prison-cell/material-03-materialx-warning.webp',caption:'If Unreal opens this MaterialX Import Content window, you selected the .mtlx file. For this beginner guide, Cancel and import the image maps (Color, Roughness and NormalDX) instead.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'}
  ]);

  const ambientImport = findTutorial('ambientcg-material-import')?.steps?.find(s => !Array.isArray(s) && s.title === 'Import the textures and check the normal map');
  if (ambientImport && !ambientImport.troubleshoot?.some(x => x.includes('MaterialX Import Content'))) {
    ambientImport.troubleshoot = ambientImport.troubleshoot || [];
    ambientImport.troubleshoot.push('If the MaterialX Import Content window appears, you selected the .mtlx file. Cancel it for this lesson and import the image texture maps instead.');
  }

  appendStepVisuals('ambientcg-material-import', 'Create the material and connect the core PBR maps', [
    {src:'assets/tutorials/prison-cell/material-04-pbr-graph.webp',caption:'Keep the first material graph simple: colour → Base Color, roughness → Roughness, and NormalDX → Normal. Metallic is not a shininess control.',sourceTitle:'Teacher classroom capture — Unreal Engine Material Editor',kind:'local'}
  ]);

  appendStepVisuals('ambientcg-material-import', 'Apply it in the prison cell and judge scale', [
    {src:'assets/tutorials/prison-cell/material-05-applied-scale.webp',caption:'Judge the material at player scale. The mannequin gives you a useful reference for whether the floor tiles are physically believable; fix tiling rather than downloading a larger texture.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'}
  ]);

  appendStepVisuals('horror-lighting', 'Create one anticipation pool', [
    {src:'assets/tutorials/prison-cell/lighting-01-light-placement.webp',caption:'Place one light for a clear job: reveal a route edge, doorway or area of anticipation. Do not add lights everywhere just because the scene is dark.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'},
    {src:'assets/tutorials/prison-cell/lighting-02-light-settings.webp',caption:'Adjust the selected light in Details. Intensity and Attenuation Radius are useful starting controls; change one thing at a time and judge the result from the player camera.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'}
  ]);

  appendStepVisuals('post-process-mood', 'Add and name the global volume', [
    {src:'assets/tutorials/prison-cell/postprocess-01-outliner.webp',caption:'Use the Outliner to select the PostProcessVolume. A clear name such as PPV_Global makes it much easier to find later.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'},
    {src:'assets/tutorials/prison-cell/postprocess-02-details.webp',caption:'With the PostProcessVolume selected, use Details to reach Exposure, Color Grading and the other Post Process settings. Keep the first pass restrained: lighting should already work before grading.',sourceTitle:'Teacher classroom capture — Unreal Engine',kind:'local'}
  ]);

  DESIGN.version = '3.43.3';
  THEORY.version = '3.43.3';
  PATHWAYS.version = '3.43.3';
  PATHWAYS.buildDate = '2026-09-05';

  console.info('[v3.43.3] Prison Cell Guided Path + practical lesson method loaded.');
})();
