// UE5 Learning Hub v3.55.1 — The Last Light studio project
// Designer Studio long-form environment task: reference → plan → blockout → art pass → story/mood → Sequencer.
(() => {
  const design = window.UE5_DESIGN_DATA;
  if (!design || !Array.isArray(design.modules) || !Array.isArray(design.tutorials)) return;

  const environment = design.modules.find(m => m.id === 'environment');
  if (environment) {
    environment.studioLesson = {
      id: 'last-light-studio',
      eyebrow: 'TWO-WEEK STUDIO PROJECT',
      title: 'The Last Light — Abandoned Lighthouse',
      text: 'Plan one tiny coastal scene, prove the layout as a blockout, then use the same shared asset pool to turn it into a believable place with story, mood and a short Sequencer presentation.',
      label: 'Open the studio lesson →'
    };
  }

  const tutorial = {
    id: 'last-light-studio',
    title: 'The Last Light: Abandoned Lighthouse Environment',
    icon: '◈',
    category: 'design-environment',
    designModule: 'environment',
    libraryHidden: true,
    studioProject: true,
    duration: '2 weeks • 6 × 1 hr 40',
    difficulty: 'Intermediate',
    summary: 'Design one small coastal environment from reference and plan through blockout, art pass, environmental storytelling, lighting and a final 10–20 second Sequencer presentation.',
    uses: ['Planning', 'Blockout', 'Landscape', 'Water', 'Set Dressing', 'Lighting', 'Sequencer'],
    studioIntroTitle: 'One place. One shared asset pool. Six lessons to make it believable.',
    studioBrief: {
      story: 'The lighthouse keeper has disappeared. Something happened here recently. Tell the player what might have happened without text or dialogue.',
      scale: 'Keep the designed/playable area around 25 m × 25 m (about 2500 × 2500 Unreal units at default scale). Background sea and distant scenery can extend beyond it. The lighthouse can be taller.',
      route: 'Player Start → readable approach/path → one secondary story area → lighthouse focal point → coast/sea.',
      mustHave: [
        'A lighthouse that clearly wins the visual hierarchy.',
        'A readable path or approach from player start.',
        'Landscape plus visible sea/water.',
        'One small secondary area: shed, store, jetty, work area or similar.',
        'At least three connected environmental-story clues.',
        'Correct human scale checked repeatedly with the Third Person character/mannequin.',
        'Purposeful materials, foliage/rocks, lighting and atmosphere.',
        'A 10–20 second Sequencer presentation using 2–3 shots.'
      ],
      hardRule: 'Final assets may be inspected from Lesson 1, but no final dressing goes into the scene until the blockout checkpoint is approved in Lesson 3.'
    },
    referenceImages: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Baily_Lighthouse_from_the_Howth_Cliff_Walk_-_geograph.org.uk_-_7876694.jpg',
        caption: 'Baily Lighthouse, Howth — the lighthouse is tiny in the frame but still reads because its silhouette and position separate it from sea and sky. Study scale, landmark hierarchy and negative space. Photo: Marathon / Geograph, CC BY-SA 2.0.',
        kind: 'real-world',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Baily_Lighthouse_from_the_Howth_Cliff_Walk_-_geograph.org.uk_-_7876694.jpg',
        sourceTitle: 'Wikimedia Commons — Baily Lighthouse (CC BY-SA 2.0)'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Cliff_steps_from_South_Stack_lighthouse_-_geograph.org.uk_-_1597276.jpg',
        caption: 'South Stack — paths and steps follow the terrain, walls hold the route together and one person instantly gives the cliffs a believable scale. Photo: Clive Perrin / Geograph, CC BY-SA 2.0.',
        kind: 'real-world',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cliff_steps_from_South_Stack_lighthouse_-_geograph.org.uk_-_1597276.jpg',
        sourceTitle: 'Wikimedia Commons — South Stack steps (CC BY-SA 2.0)'
      },
      {
        src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/View_of_lighthouse_along_coast_path%2C_just_west_of_Beachy_Head_-_geograph.org.uk_-_931849.jpg',
        caption: 'Beachy Head coast path — the cliff itself becomes a leading line, while the distant lighthouse stays readable because the route, horizon and scale cues all point towards it. Photo: Roger / Geograph, CC BY-SA 2.0.',
        kind: 'real-world',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:View_of_lighthouse_along_coast_path,_just_west_of_Beachy_Head_-_geograph.org.uk_-_931849.jpg',
        sourceTitle: 'Wikimedia Commons — Beachy Head coast path (CC BY-SA 2.0)'
      },
      {
        src: 'https://www.thechineseroom.co.uk/media/Games/Dear%20Esther/gallery/2.jpg',
        caption: 'Dear Esther — a distant beacon survives against a huge, hostile coastline. The wreck, shoreline and terrain imply history before the player is told anything.',
        kind: 'game',
        sourceUrl: 'https://www.thechineseroom.co.uk/games/dear-esther',
        sourceTitle: 'The Chinese Room — Dear Esther'
      },
      {
        src: 'https://www.thechineseroom.co.uk/media/Games/Dear%20Esther/gallery/39.jpg',
        caption: 'Dear Esther — stairs, edge lines and value contrast create a route through the frame while atmosphere reduces distant detail. Look for leading lines, depth and reveal.',
        kind: 'game',
        sourceUrl: 'https://www.thechineseroom.co.uk/games/dear-esther',
        sourceTitle: 'The Chinese Room — Dear Esther'
      },
      {
        src: 'https://developer.valvesoftware.com/w/images/5/5d/Half-Life_2_Lost_Coast_-_Background.png',
        caption: 'Half-Life 2: Lost Coast — coast, vertical elevation and a strong structure above the player create destination, scale and a reason to climb. Bright sky and dark land keep the silhouette readable.',
        kind: 'game',
        sourceUrl: 'https://developer.valvesoftware.com/wiki/Half-Life_2:_Lost_Coast',
        sourceTitle: 'Valve Developer Community — Half-Life 2: Lost Coast'
      },
      {
        src: 'https://developer.valvesoftware.com/w/images/thumb/2/28/HL2_LostCoast_09.jpg/512px-HL2_LostCoast_09.jpg',
        caption: 'Half-Life 2: Lost Coast — a narrow ascending path, cliff wall and bright horizon constrain the route while repeatedly exposing the destination below and ahead. Study how terrain does the guiding instead of arrows.',
        kind: 'game',
        sourceUrl: 'https://developer.valvesoftware.com/wiki/Half-Life_2:_Lost_Coast',
        sourceTitle: 'Valve Developer Community — Lost Coast route view'
      },
      {
        src: 'https://www.firewatchgame.com/screenshots/firewatch_150305_05.png',
        caption: 'Firewatch — foreground shapes frame the view while warm/cool separation and atmospheric depth make the important spaces readable. Reference reality, then alter it deliberately for the player.',
        kind: 'game',
        sourceUrl: 'https://www.firewatchgame.com/',
        sourceTitle: 'Campo Santo — Firewatch'
      }
    ],
    theory: [
      {
        title: 'Landmark + focal point',
        body: 'The lighthouse should win the scene before the player studies the details. Position, silhouette, contrast, light and framing usually matter more than simply making it enormous.',
        test: 'Squint at your player-start view. Can you still tell what the main destination is?'
      },
      {
        title: 'Leading lines',
        body: 'Paths, fences, cliff edges, shorelines, stairs and rows of props can quietly point the eye and the player towards the next useful place.',
        test: 'Hide the HUD and ask another student where they think they should walk first.'
      },
      {
        title: 'Foreground / middle / background',
        body: 'Do not build one flat strip. Use something close to frame the view, the playable route in the middle, and sea/cliffs/lighthouse behind it to create depth.',
        test: 'Take one player-view screenshot and mark three depth layers on it.'
      },
      {
        title: 'Reveal',
        body: 'Showing everything immediately removes discovery. Terrain, bends and structures can hide part of the lighthouse, then reveal it again from a stronger viewpoint.',
        test: 'Can the route give the player at least one better lighthouse view than the starting view?'
      },
      {
        title: 'Human scale',
        body: 'Doors, stairs, railings, path width, crates and the Third Person mannequin tell the brain how large the world is. Pretty scenery at the wrong scale still feels wrong.',
        test: 'Walk the route at player height. Does anything feel like a model railway or a giant theme park?'
      },
      {
        title: 'Cause-and-effect storytelling',
        body: 'Three connected clues are stronger than ten random spooky props. A snapped railing, dropped lantern and scattered supplies can imply one event because the objects relate to each other.',
        test: 'Can a classmate describe what may have happened without you explaining the scene first?'
      },
      {
        title: 'Terrain + prop logic',
        body: 'Rock belongs on exposed or steep surfaces; vegetation collects where it can plausibly grow; work props belong where people would actually use or store them. Do not sprinkle assets evenly.',
        test: 'For every major prop cluster, finish the sentence: “This is here because…”'
      },
      {
        title: 'Value + atmosphere',
        body: 'Lighting and fog should separate depth and support the focal point, not simply make the scene darker. Important silhouettes should survive even when colour is ignored.',
        test: 'Look at the scene in a tiny screenshot. Can you still read route, focal point and depth?'
      }
    ],
    theorySource: {
      title: 'Firewatch Audio Tour — developer commentary',
      note: 'Campo Santo discuss starting from real-world lookout references and deliberately changing them when the player experience needed better views or movement. That is the mindset here: reference reality, then design for the player.',
      url: 'https://www.firewatchgame.com/media/Firewatch%20Audio%20Tour%201.0.pdf'
    },
    resources: [
      {
        type: 'COLLEGE ASSET',
        title: 'Project Nature',
        note: 'Use the college-provided library for coherent rocks, foliage and natural surface dressing. Keep the visual language consistent rather than mixing unrelated nature packs.',
        bestFor: 'Landscape material, rocks, foliage and natural dressing',
        status: 'Available in the college project/library'
      },
      {
        type: 'CORE • FREE FAB',
        title: 'Lighthouse',
        note: 'The shared hero landmark. It is supplied as FBX/glTF/GLB/USDZ, so import it rather than expecting a complete Unreal project.',
        bestFor: 'The lighthouse focal point',
        status: 'Verified Free • 12 Sep 2026 • Not AI generated',
        url: 'https://www.fab.com/listings/42454f1c-67a2-4460-bd41-741aeb6ecf3f'
      },
      {
        type: 'OPTIONAL MIXED STYLE • FREE FAB',
        title: 'Free Prop Bundle',
        note: 'A large Unreal-ready prop pool with barrels, boxes, furniture, boards, ladders, lanterns, torches and other useful pieces. Choose only what supports your story.',
        bestFor: 'Storage, work areas, keeper spaces and story clues',
        status: 'Verified Free • Unreal Engine format • 12 Sep 2026 • Not AI generated',
        url: 'https://www.fab.com/listings/f0e98745-eba7-40dd-81c2-2d160598d042'
      },
      {
        type: 'COASTAL • FREE FAB',
        title: 'Wooden Rowboat',
        note: 'A realistic PBR rowboat at real-world dimensions. Use it only if your story needs a boat; it should not become the main focal point.',
        bestFor: 'Jetty, shoreline, escape or abandonment clue',
        status: 'Verified Free • FBX/OBJ • 12 Sep 2026',
        url: 'https://www.fab.com/listings/59573310-9be8-459f-98cb-954a66e5ef2c'
      },
      {
        type: 'COASTAL DETAIL • FREE FAB',
        title: 'Rope Coil — Quixel Megascans',
        note: 'Photoreal nautical rope. One or two pieces can sell a working coastal location better than scattering random props everywhere.',
        bestFor: 'Dock, boat and work-area detail',
        status: 'Verified Free • 12 Sep 2026 • Not AI generated',
        url: 'https://www.fab.com/listings/8ec7aab4-8be8-442e-95ab-840a8fa32932'
      },
      {
        type: 'COASTAL DETAIL • FREE FAB',
        title: 'CC0 Anchor',
        note: 'A free CC0 PBR anchor that gives you a strong nautical story prop without forcing the scene into a pirate theme.',
        bestFor: 'Shoreline, jetty or abandoned work-area clue',
        status: 'Verified Free • CC0 • 12 Sep 2026 • Not AI generated',
        url: 'https://www.fab.com/listings/b712dcf2-787f-4aab-ac78-dcae4e9fbe81'
      },
      {
        type: 'WORK AREA • FREE FAB',
        title: 'Wooden Pallet — Quixel Megascans',
        note: 'Photoreal weathered pallet at real-world scale. Useful for making a storage/work zone feel functional without inventing complicated architecture.',
        bestFor: 'Storage clusters, crates and working-area composition',
        status: 'Verified Free • 12 Sep 2026 • Not AI generated',
        url: 'https://www.fab.com/listings/6622c5d8-691b-4f1b-a29c-80c0e9d54af8'
      },
      {
        type: 'WORK AREA • FREE FAB',
        title: 'Wooden Barrel — Quixel Megascans',
        note: 'A photoreal, weathered barrel with real-world dimensions. Good as a scale cue or functional prop cluster; do not carpet the scene with them.',
        bestFor: 'Scale, storage and believable coastal clutter',
        status: 'Verified Free • 12 Sep 2026 • Not AI generated',
        url: 'https://www.fab.com/listings/a9d0d237-ef5b-47f3-b153-f6b4ab9733f1'
      },
      {
        type: 'COASTAL DETAIL • FREE FAB',
        title: 'Old Wooden Bucket — Quixel Megascans',
        note: 'A weathered photoreal bucket that fits a believable working lighthouse or coastal store area. Use it because somebody would have needed it, not to fill empty space.',
        bestFor: 'Functional dressing and lived-in detail',
        status: 'Verified Free • 12 Sep 2026 • Not AI generated',
        url: 'https://www.fab.com/listings/5926b83c-555d-4fa6-903a-9b2571ea996e'
      },
      {
        type: 'STORY PROP • FREE FAB',
        title: 'Old Lantern',
        note: 'A simple old lantern that can support the keeper story, provide a practical light source or become a deliberate abandoned clue.',
        bestFor: 'Story clue and motivated lighting',
        status: 'Verified Free • FBX • 12 Sep 2026 • Not AI generated',
        url: 'https://www.fab.com/listings/17f4af61-5f14-45cf-a33c-3dc810997a21'
      },
      {
        type: 'OPTIONAL STYLE • FREE FAB',
        title: 'GanzSe FREE Camping Props',
        note: 'Tents, campfires, lanterns, crates, barrels and travel props. This pack is stylised/low-poly, so only use it if your whole scene supports that visual style.',
        bestFor: 'A consistent stylised interpretation — not mixed into a realistic scene',
        status: 'Verified Free • Unreal Engine format • 12 Sep 2026 • Not AI generated',
        url: 'https://www.fab.com/listings/d03138fe-7e29-4b3d-9ea8-8ba67f24f845'
      },
      {
        type: 'HUB GUIDE',
        title: 'Landscape Master Guide',
        note: 'Use this if you forget sculpting, painting, foliage exclusions, traversal checks or Landscape Splines.',
        bestFor: 'Recovering the technical Landscape workflow',
        url: '#/tutorial/landscape-master-guide'
      },
      {
        type: 'HUB GUIDE',
        title: 'Sequencer & Cinematics Master Guide',
        note: 'Use this in Lesson 6 for Cine Cameras, Camera Cuts, keyframes, focus and Movie Render Queue.',
        bestFor: 'The final 10–20 second presentation',
        url: '#/tutorial/sequencer-master-guide'
      }
    ],
    studioFlow: [
      {
        label: 'START HERE', short: 'Brief', title: 'Understand the place before you touch Unreal',
        subtitle: 'Read the brief, study a few references and decide what the environment needs to communicate.',
        referenceIndexes: [0,3,5], theoryIndexes: [0,1]
      },
      {
        label: 'LESSON 1', short: 'Plan', title: 'Plan the route, story and reveal',
        subtitle: 'Turn reference into decisions: player route, focal point, story clues and one planned reveal.',
        stepIndex: 0, referenceIndexes: [0,1,2,3], theoryIndexes: [0,1,2,3]
      },
      {
        label: 'LESSON 2', short: 'Blockout', title: 'Build the scene at human scale',
        subtitle: 'Landscape, water and simple forms only. Make the route work before the art arrives.',
        stepIndex: 1, referenceIndexes: [1,5,6], theoryIndexes: [1,3,4]
      },
      {
        label: 'LESSON 3', short: 'Review', title: 'Prove the blockout works',
        subtitle: 'Test it silently, fix the route and scale, then earn the art pass.',
        stepIndex: 2, referenceIndexes: [5,6], theoryIndexes: [0,1,3,4]
      },
      {
        label: 'LESSON 4', short: 'Art Pass', title: 'Replace the blockout without losing the design',
        subtitle: 'Use the shared asset shelf selectively. Every asset should support place, function or story.',
        stepIndex: 3, referenceIndexes: [0,2,3], theoryIndexes: [6], assetPrompt: true
      },
      {
        label: 'LESSON 5', short: 'Story + Mood', title: 'Make the place tell the story',
        subtitle: 'Use connected clues, lighting and atmosphere to make the disappearance feel intentional.',
        stepIndex: 4, referenceIndexes: [3,4,7], theoryIndexes: [5,6,7]
      },
      {
        label: 'LESSON 6', short: 'Present', title: 'Polish and present the environment',
        subtitle: 'Fix the final read, then present the scene with a short Sequencer edit.',
        stepIndex: 5, referenceIndexes: [7,3], theoryIndexes: [0,2,7], finishPrompt: true
      }
    ],
    steps: [
      {
        title: 'Lesson 1 — Read the place before you build it',
        where: 'Reference board + paper / PowerPoint / image editor. Browse the approved asset library, but do not place final assets in Unreal yet.',
        do: 'Study the real-world and game references above, choose the feeling and event you want to imply, then make a tiny plan before opening the final build.',
        doList: [
          'Write: “The player should feel…”',
          'Write: “The environment suggests that…”',
          'Collect 6–10 useful references. Label what you are stealing from each: path, cliff shape, lighting, colour, wear, silhouette, prop logic or composition.',
          'Draw a top-down plan showing Player Start, route, lighthouse, secondary area, sea edge and three story-clue zones.',
          'Mark at least one planned reveal: a point where the lighthouse view becomes stronger.',
          'Keep the designed/playable footprint around 25 m × 25 m.'
        ],
        see: 'A plan that could be understood by somebody else without you standing beside it and explaining it.',
        why: 'Reference is useful only when you extract decisions from it. Planning route, hierarchy and story before decoration prevents the scene becoming a pile of attractive assets.',
        check: 'Swap plans with another student. In 30 seconds they should be able to point to the start, intended route, focal point and likely story areas.',
        troubleshoot: [
          'If the plan needs a paragraph to explain it, simplify the layout.',
          'If the lighthouse occupies most of the map, the scene is probably too large or the supporting spaces are too weak.',
          'If every reference is just “a cool lighthouse”, label a specific principle you intend to reuse from each one.'
        ]
      },
      {
        title: 'Lesson 2 — Build the blockout at human scale',
        where: 'Unreal Engine → a clean level named L_LastLight_Blockout. Use Landscape, Water, Geometry Brushes/basic meshes and the Third Person character/mannequin.',
        do: 'Build only the major terrain, route and volumes. Keep everything ugly enough that you are judging the space rather than the art.',
        doList: [
          'Shape the coast and visible water first.',
          'Block the lighthouse as a simple cylinder/tower or proxy if needed.',
          'Block the secondary structure/area with Geometry Brushes or primitives.',
          'Create the complete approach/path at believable walking width.',
          'Place the Third Person mannequin beside doors, steps, rails and props repeatedly.',
          'Walk the route from player height before adding any detail.'
        ],
        see: 'A grey/simple scene where the route and lighthouse destination already read from player view.',
        why: 'A strong environment works before materials and foliage arrive. Blockout exposes scale, route and composition problems while they are still cheap to fix.',
        check: 'Play from the intended start. You should know where you are going without a waypoint, and the trip should feel short enough for the small brief.',
        troubleshoot: [
          'If the lighthouse feels tiny, check player scale before scaling the lighthouse wildly.',
          'If the space feels empty, shrink it before adding filler props.',
          'If the route is only obvious from the editor aerial view, redesign it from player height.'
        ]
      },
      {
        title: 'Lesson 3 — Earn the art pass',
        where: 'L_LastLight_Blockout → player-height playtest + peer/tutor checkpoint.',
        do: 'Refine the blockout until another person can read it. Do not solve weak layout with foliage, fog or final props.',
        doList: [
          'Run a silent playtest: the tester gets no explanation for the first 30 seconds.',
          'Ask what they noticed first, where they thought they should go and what felt too large/small.',
          'Improve the route, focal hierarchy, silhouette and reveal using only terrain and blockout forms.',
          'Capture one clean player-view blockout screenshot.',
          'Save the approved blockout, then duplicate/save the working art level as L_LastLight_Final.'
        ],
        see: 'A signed-off blockout where the lighthouse, route and scale work without final art.',
        why: 'This is the production gate. If you decorate first, you become emotionally attached to assets and avoid fixing the layout underneath them.',
        check: 'Tutor/peer can identify the focal point and route, and you can show one concrete change made from the test.',
        troubleshoot: [
          'If the tester walks the wrong way, do not tell them the answer — change the scene.',
          'If everything is equally important, create hierarchy by moving, hiding or reducing competing forms.',
          'If you are tempted to “fix it with lighting later”, fix the silhouette and route first.'
        ]
      },
      {
        title: 'Lesson 4 — Replace the blockout without losing the design',
        where: 'L_LastLight_Final → approved asset pool + your own materials/landscape work.',
        do: 'Art-pass the scene from big to medium to small. Preserve the route, scale and focal point that survived the checkpoint.',
        doList: [
          'Assign/finish the Landscape material and water.',
          'Replace the lighthouse proxy with the shared lighthouse asset.',
          'Replace structural proxies with sensible pieces while keeping dimensions close to the approved blockout.',
          'Place major rocks/cliffs and foliage before tiny props.',
          'Build functional clusters: work area, storage, maintenance, mooring, shelter — not evenly scattered clutter.',
          'Stop regularly and play from the start.'
        ],
        see: 'The scene now looks specific and believable, but the same route and hierarchy from the greybox are still visible.',
        why: 'The art pass should support design, not overwrite it. Shared assets make the difference between outcomes come from composition and judgement rather than who found the fanciest pack.',
        check: 'Compare the blockout screenshot with the final scene. The main route and focal hierarchy should still match.',
        troubleshoot: [
          'If an asset only fits by wrecking the layout, choose a different asset or modify the support structure — do not redesign the whole scene around a barrel or prefab.',
          'If the art pass makes the route harder to read, remove or reposition assets.',
          'If the scene looks like several asset packs collided, reduce the palette.'
        ]
      },
      {
        title: 'Lesson 5 — Make the place tell the story',
        where: 'L_LastLight_Final → set dressing, decals/wear, lighting, fog/atmosphere and effects.',
        do: 'Create at least three connected cause-and-effect clues, then use lighting and atmosphere to support the same story and focal hierarchy.',
        doList: [
          'Choose one interpretation: storm aftermath, sudden evacuation, smuggling, accident or something stranger.',
          'Create three clues that relate to the same event rather than three unrelated “spooky” objects.',
          'Use wear, debris and prop orientation to imply action: used, dragged, dropped, broken, abandoned.',
          'Light the lighthouse/route so the eye still understands the space.',
          'Use fog, spray, smoke or rain only where it improves depth/mood.',
          'Do a subtraction pass: remove at least 10–20% of weak/repetitive clutter.'
        ],
        see: 'A player can make a reasonable guess about what happened, and the mood strengthens rather than hides the scene.',
        why: 'Environmental storytelling works when objects have relationships. Atmosphere then changes how the player interprets those relationships.',
        check: 'Show the scene without explaining it. Ask a classmate: “What do you think happened here?” Record their first answer.',
        troubleshoot: [
          'If they only say “it is spooky”, your clues are too generic.',
          'If fog hides the lighthouse or route, lower it or reshape the lighting.',
          'If every surface has equal detail, create quiet areas so the story beats can breathe.'
        ]
      },
      {
        title: 'Lesson 6 — Polish it, then present the place',
        where: 'Final player-height playtest → Sequencer → 10–20 second presentation.',
        do: 'Fix the obvious production problems, then use 2–3 deliberate shots to present the environment rather than flying randomly around it.',
        doList: [
          'Check collision, floating/intersecting props, repeating textures, foliage blocking the route and scale.',
          'Take one final player-view screenshot and one clean beauty shot.',
          'Shot 1: establish the place and route.',
          'Shot 2: move/reveal the lighthouse as the focal point.',
          'Shot 3: finish on one environmental-story detail.',
          'Keep the sequence around 10–20 seconds and render/export it using the Sequencer Master Guide if needed.'
        ],
        see: 'A short sequence that communicates place → destination → story detail without needing text or narration.',
        why: 'Presentation is the final design test. Good shots expose hierarchy, scale and story; bad shots often reveal that the scene only looked good from the editor camera.',
        check: 'Watch the final video once with the sound off. Can somebody understand the place, destination and at least one clue?',
        troubleshoot: [
          'If the camera move is doing all the work, simplify it and let the environment compose the shot.',
          'If the beauty shot avoids the playable route, re-check the environment from player view.',
          'If the story detail needs a caption to make sense, strengthen its cause/effect relationship.'
        ]
      }
    ],
    mistakes: [
      'Starting final dressing before the Lesson 3 blockout checkpoint.',
      'Making the environment huge, then filling empty space with repeated props.',
      'Building for the editor aerial view instead of the player-height view.',
      'Random “prop soup” with no functional reason or story relationship.',
      'Using fog, darkness or foliage to hide scale/layout problems.',
      'Replacing the task with a supplied Fab demo level or pre-dressed environment.'
    ],
    makeItYours: [
      'Storm aftermath — damage and emergency action suggest the keeper fought the weather.',
      'Sudden evacuation — normal routine is interrupted by objects dropped or left unfinished.',
      'Smuggling — ordinary lighthouse work hides a second secret use of the site.',
      'Strange event — use a few controlled impossible details rather than filling the scene with horror props.'
    ],
    worksWhen: [
      'The designed/playable area stays roughly within the 25 m × 25 m brief.',
      'The lighthouse reads as the focal point from the start and key route views.',
      'Human scale feels believable while walking, not just in an aerial screenshot.',
      'A new player can read the approach without a waypoint.',
      'At least three coherent story clues imply the same event or history.',
      'The final art pass clearly grows from the approved blockout rather than replacing it.',
      'Lighting and atmosphere strengthen depth, route and focal hierarchy.',
      'The 10–20 second Sequencer presentation communicates place → lighthouse → story detail.',
      'You can show planning, blockout evidence, final player view, beauty shot and final video.'
    ]
  };

  const i = design.tutorials.findIndex(t => t.id === tutorial.id);
  if (i >= 0) design.tutorials[i] = tutorial;
  else design.tutorials.push(tutorial);
})();
