window.LEVEL4_SPECIALIST_PROJECTS = {
  version: '3.57.5',
  intro: {
    title: 'Level 4 Specialist Projects',
    kicker: 'Choose ONE pathway',
    summary: 'Pick the discipline you want to develop. Each pathway is a standalone portfolio-style project with a clear outcome, theory, references, staged tasks and a final quality check.'
  },
  projects: [
    {
      id:'what-happened-here', icon:'✦', title:'What Happened Here?', role:'Environment / Level Design', time:'1–2 weeks',
      strap:'Build one small place that makes somebody stop, look and work out the story for themselves.',
      outcome:'A small playable Unreal environment built mainly from the What Remains of Edith Finch asset library. The player should be able to infer WHO used the space, WHAT normally happened there, WHAT changed, and WHAT was left behind — without you explaining it beside them.',
      heroImage:'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Workshop_interior_filled_with_tools%2C_wood_materials%2C_and_natural_light_illuminating_the_creative_space.jpg/960px-Workshop_interior_filled_with_tools%2C_wood_materials%2C_and_natural_light_illuminating_the_creative_space.jpg',
      heroFallback:'assets/book/best-practices/environmental-clues-dressing.webp',
      heroAlt:'A real working workshop filled with tools, timber, work surfaces and evidence of repeated use.',
      imageCaption:'REAL-WORLD REFERENCE: do not copy the room. Study WHY things are where they are. Tools cluster around work areas, materials gather near the job they belong to, paths stay clearer than storage zones, and repeated use creates wear and mess with a reason.',
      imageCredit:'Workshop interior — Nenad Stojković / Shixart1985, CC BY 2.0, Wikimedia Commons', imageLink:'https://commons.wikimedia.org/wiki/File:Workshop_interior_filled_with_tools,_wood_materials,_and_natural_light_illuminating_the_creative_space.jpg',
      secondaryImage:'assets/book/best-practices/environmental-clues-dressing.webp',
      secondaryAlt:'A before-and-after environment showing how carefully chosen props change a generic space into a story-rich scene.',
      secondaryCaption:'PRODUCTION REFERENCE: compare the two halves. The geometry barely changes; the story comes from deliberate set dressing. Props should explain use, history and behaviour — not simply fill empty floor.',
      theory:[
        {label:'GDC Vault — What Happened Here? Environmental Storytelling',url:'https://www.gdcvault.com/play/1012696/What-Happened-Here-Environmental'},
        {label:'What Remains of Edith Finch — official game page',url:'https://www.annapurna.com/interactive/what-remains-of-edith-finch'},
        {label:'Gone Home — official game page',url:'https://gonehome.com/'},
        {label:'Epic UE5 — Decal Materials',url:'https://dev.epicgames.com/documentation/unreal-engine/decal-materials-in-unreal-engine'},
        {label:'Hub — Lighting fundamentals',url:'#/design'},
        {label:'Hub — Sequencer / presentation guide',url:'#/tutorial/sequencer-master-guide'}
      ],
      briefRules:[
        'ONE small space. A bedroom, workshop, kitchen, office, shed, basement, tiny shop or short exterior is enough.',
        'Tell the story through the ENVIRONMENT first. A note can support the scene, but a paragraph of text cannot be the scene.',
        'Build a clear BEFORE → EVENT → AFTER chain.',
        'Use at least FIVE readable clues and make ONE of them the hero clue.',
        'Every prop needs a reason to exist. No Content Browser confetti.',
        'Another student must be able to read the scene without you explaining it.'
      ],
      storyPrompts:[
        {title:'They left in a hurry',text:'Normal routine is still visible, but one interrupted action and one missing/abandoned object suggest a sudden departure.'},
        {title:'A repair went wrong',text:'The space shows repeated practical work. One failed repair, damaged object or improvised fix becomes the event.'},
        {title:'A celebration changed',text:'The room was prepared for something positive, but the aftermath suggests the evening did not finish as planned.'},
        {title:'Someone was hiding something',text:'Most of the room appears ordinary. One cluster of objects reveals a second use or secret behaviour.'},
        {title:'This room has not moved on',text:'Daily life stopped on one specific day. The player should feel the contrast between ordinary routine and frozen aftermath.'},
        {title:'Make your own',text:'Use the same structure: ordinary life → disruption → evidence. Keep the event simple enough to communicate physically.'}
      ],
      gameReferences:[
        {title:'What Remains of Edith Finch',look:'Personal objects, room identity, visual routes and spaces that feel owned by specific people.',url:'https://www.annapurna.com/interactive/what-remains-of-edith-finch'},
        {title:'Gone Home',look:'Domestic normality, absence, drawers/shelves/notes and how mundane objects become evidence.',url:'https://gonehome.com/'},
        {title:'The Last of Us',look:'Aftermath. Look for abandoned routines, improvised survival, blocked routes and objects that suggest who was here before.',url:'https://www.playstation.com/en-gb/games/the-last-of-us-part-i/'},
        {title:'BioShock',look:'Strong focal points, damaged spaces and props arranged to imply an event happened before the player arrived.',url:'https://store.playstation.com/en-gb/concept/216051'}
      ],
      learn:['Environmental storytelling','Set dressing with purpose','Before / Event / After logic','Clue hierarchy','Composition and player guidance','Lighting and sound as attention tools','Blind playtesting','Professional scene organisation'],
      stages:[
        {n:'01',title:'Write the story BEFORE opening Unreal',actions:[
          'Open a blank document, slide or piece of paper. Write the heading BEFORE.',
          'Under BEFORE, write ONE sentence saying who normally uses the space.',
          'Write ONE sentence saying what that person normally does there.',
          'Add the heading EVENT. Write ONE sentence describing the thing that changed the room.',
          'Add the heading AFTER. Write ONE sentence describing what the player arrives to find.',
          'Write a list of FIVE physical clues the player could see. Do not use five notes or five pieces of text.',
          'Put a star beside ONE clue. This is your HERO CLUE — the clearest or most important piece of evidence.',
          'Read the whole idea aloud in under 30 seconds. If it needs lots of backstory to make sense, simplify it now.'
        ],why:'A room full of props cannot communicate a story you have not decided yet.',check:'You have four short statements: WHO / NORMAL ROUTINE / EVENT / AFTERMATH, plus five physical clues and one starred hero clue.',fix:'If your idea is “a murder happened” but nothing explains who lived there or what normal life looked like, add the BEFORE layer first.'},
        {n:'02',title:'Build a reference board like a detective',actions:[
          'Collect 6–10 REAL photographs of the type of space you are making.',
          'Make sure at least THREE references show the space being actively used — not only abandoned versions.',
          'For each reference, circle or label one useful observation: storage, clutter, wear, object grouping, lighting, access or scale.',
          'Add 2–4 game/film references for mood or storytelling. Use them for ideas, not as something to copy exactly.',
          'Write “WHAT I AM TAKING FROM THIS” beside every game/film reference.',
          'Delete any image that is only there because it looks cool and teaches you nothing about the scene.',
          'Put the reference board on your second screen or somewhere visible while you build.',
          'Before continuing, point to three reference details you intend to use in your own environment.'
        ],why:'Real places teach believable behaviour. Game references show how designers exaggerate that reality so players can read it.',check:'Your board answers practical questions about how the room is used, not just what colour palette you like.',fix:'If every image is concept art, go back and find photographs of real bedrooms, workshops, sheds, kitchens, offices or shops.'},
        {n:'03',title:'Create the level and organise it before it gets messy',actions:[
          'Open the Edith Finch asset project in Unreal Engine.',
          'Create or open the clean map you will use for the task. Save it immediately as L4_WHH_YourName.',
          'In the World Outliner, create folders named 01_ARCHITECTURE, 02_BEFORE, 03_EVENT_AFTER, 04_LIGHTING, 05_AUDIO and 06_HELPERS.',
          'Place a Player Start at the doorway or approach where you want the player to enter.',
          'Rotate the Player Start so the arrow points toward the first part of the room you want the player to see.',
          'Press Play and check where the player actually spawns and which direction they face.',
          'Move the Player Start until the first view is useful. Do not accept a spawn facing a blank wall.',
          'Save the level again before building.'
        ],why:'A clean Outliner and intentional starting view make the rest of the task easier to control and easier to present.',check:'Press Play: you spawn in the correct place, face into the scene, and the Outliner already has clear folders.',fix:'If Play starts somewhere unexpected, check that the correct GameMode/character is active and that the Player Start is not colliding with geometry.'},
        {n:'04',title:'Block ONE small playable space',actions:[
          'Choose the smallest footprint that can tell your story. One room is enough.',
          'Use simple geometry or large Edith Finch architectural pieces to establish floor, walls, doorway and major furniture positions.',
          'Keep a Third Person character or known doorway nearby as a scale reference.',
          'Walk through the room in Play mode. Check doors, gaps and furniture spacing from player height.',
          'Stand at the Player Start and decide exactly where the first focal area will be.',
          'Move or rotate the largest shapes so they frame that focal area instead of fighting it.',
          'Remove any extra corridor, second room or empty corner that does not help the story.',
          'Take one blockout screenshot. This is your BEFORE-DRESSING evidence.'
        ],why:'Small scenes become detailed. Large scenes become empty. The task is storytelling density, not square metres.',check:'You can walk the whole playable area in a few seconds and already know where the player is likely to look first.',fix:'If you are building a house, street or huge warehouse, cut it down. Pick the single strongest room or corner.'},
        {n:'05',title:'Build the BEFORE layer — show normal life first',actions:[
          'Ignore the dramatic event for a moment. Pretend nothing bad or unusual has happened yet.',
          'Choose THREE activity zones, for example bed + bedside table, desk + chair, workbench + tool storage.',
          'In each zone, place ONE anchor object first — the biggest object that explains what the area is for.',
          'Add 2–5 related props around each anchor object. Keep objects that are used together physically near each other.',
          'Rotate and offset repeated props so they do not look copied and pasted.',
          'Add at least ONE personal choice that says something about the occupant: hobby, taste, job, routine or habit.',
          'Add one sign of repeated use: worn area, stacked items, opened container, half-used material, moved chair or similar.',
          'Leave some clear floor and quiet wall space. Do not fill every centimetre.'
        ],why:'The event only means something if the player can understand what “normal” looked like before it happened.',check:'Without any EVENT props, another student could still guess who uses the room and what they normally do there.',fix:'If props look evenly sprinkled across the floor, stop. Pull them into purposeful clusters around activities.'},
        {n:'06',title:'Add the EVENT — change only what the event would actually affect',actions:[
          'Read your EVENT sentence again before touching the scene.',
          'Pick 3–5 existing objects that the event would physically change.',
          'Move, rotate, open, tip, break, remove or displace those objects in a way that follows cause and effect.',
          'Add ONE new object only if the event genuinely needs it.',
          'Use direction: knocked-over objects should suggest where force or movement came from.',
          'Use height and gravity: fallen items should land somewhere believable, not float or balance impossibly.',
          'Keep at least one area mostly untouched so the disturbance has contrast.',
          'Press Play and walk through. Ask yourself: can I see the EVENT without knowing the written story?'
        ],why:'Random destruction is noise. Cause-and-effect lets the player reconstruct what happened.',check:'You can explain WHY every moved or damaged object changed during the event.',fix:'If the answer is “because it looks messy”, undo it and make the change serve the event.'},
        {n:'07',title:'Turn your five clues into a readable clue ladder',actions:[
          'Open your original five-clue list and find each clue in the level.',
          'Make CLUE 1 easy to notice from or near the entrance. It should create a question, not answer everything.',
          'Place CLUE 2 deeper into the room so the player has a reason to investigate.',
          'Place CLUE 3 so it confirms or develops the first idea.',
          'Make your starred HERO CLUE the strongest visual moment. Give it space around it instead of burying it in clutter.',
          'Use CLUE 5 as a consequence or reframe: something that changes, complicates or completes the player’s first interpretation.',
          'Make sure at least FOUR of the five clues are physical/environmental rather than text.',
          'Stand in Play mode at each clue and check it can actually be seen from player height.'
        ],why:'Environmental stories are read in sequence. A clue ladder gives the player a developing thought rather than five unrelated props.',check:'Your five clues have different jobs: question → investigate → confirm → hero clue → consequence/reframe.',fix:'If all five clues say the same thing, change one so it adds new information rather than repeating the message.'},
        {n:'08',title:'Control the player’s first 30 seconds',actions:[
          'Press Play and do not move for three seconds. Write down the FIRST object your eye goes to.',
          'If it is not intentional, change the composition before adding more detail.',
          'Use a doorway, furniture edge, beam, shelf or other large shape to frame the intended first clue.',
          'Rotate chairs, tools, fallen objects or furniture so their lines subtly point toward useful areas.',
          'Use brighter/darker contrast to separate important clues from background clutter.',
          'Walk from the start to Clue 1, then to Clue 2, then toward the hero clue. Remove obstacles that make this route awkward by accident.',
          'Do NOT add floating arrows or objective markers to solve a composition problem.',
          'Ask a classmate to enter the level for ten seconds and point at the thing they noticed first.'
        ],why:'Players cannot interpret clues they never notice. Composition is part of level design, not decoration.',check:'A tester’s first look lands on either your intended focal point or something that naturally leads toward it.',fix:'Strengthen framing, contrast, spacing or object orientation before making the clue physically bigger.'},
        {n:'09',title:'Use lighting to reveal story, not to hide unfinished work',actions:[
          'Decide the main mood in ONE phrase: warm but abandoned, cold morning, emergency red spill, late-night workshop, etc.',
          'Use your existing main light setup first. Do not immediately add lots of tiny lights.',
          'Place or adjust one key practical light near the most important activity/focal area.',
          'Set intensity and attenuation so the light has a believable local effect instead of washing the whole room.',
          'Use colour temperature or subtle colour difference only where it supports the mood.',
          'Walk to every clue in Play mode and make sure it remains readable.',
          'If using Post Process, make small exposure/contrast changes and test them in Play mode.',
          'Take a screenshot, then temporarily disable the key light. If nothing important changes, the light is not doing a job.'
        ],why:'Lighting tells the eye where to go and separates narrative information from background detail.',check:'The hero clue is readable, the room still feels believable, and no important clue disappears into blackness.',fix:'If “moody” means “I cannot see anything”, increase local readability instead of turning the whole scene brighter.'},
        {n:'10',title:'Add sound and surface detail carefully',actions:[
          'Choose ONE background ambience that belongs to the location: rain, distant traffic, electrical hum, sea, wind, machinery or similar.',
          'Place an Ambient Sound actor in or near the room and assign the sound.',
          'Use attenuation so the sound belongs to this area instead of following the player across the whole level.',
          'Add one local sound source only if it helps a clue — for example a failing machine, dripping pipe, television or buzzing light.',
          'Add small decals/dirt/damage where repeated use or the EVENT would logically create them.',
          'Keep detail strongest around story areas and quieter elsewhere.',
          'Press Play with headphones and walk in/out of the area. Check volume and attenuation.',
          'Mute the audio once. If the story becomes clearer with it muted, your sound is distracting rather than helping.'
        ],why:'Sound and surface detail can make evidence feel physical, but they should support the visual read rather than compete with it.',check:'The room has atmosphere, local sounds sit in the correct place, and detail density follows importance.',fix:'If every surface has grime and every object has a sound, remove half of it. Contrast makes detail noticeable.'},
        {n:'11',title:'Run a BLIND playtest — you are not allowed to explain',actions:[
          'Save the level and invite a classmate who has not heard your story.',
          'Tell them only: “Explore this space and tell me what you think happened.”',
          'Do not point, prompt, explain or apologise while they play.',
          'Watch where they go first and write it down.',
          'When they finish, ask: Who used this place?',
          'Ask: What do you think happened here?',
          'Ask: Which THREE objects made you think that?',
          'Ask: Was anything confusing or did anything look important but turn out not to matter?',
          'Compare their answer with your BEFORE / EVENT / AFTER statement.',
          'Choose TWO changes based on the test and make them before asking a second person.'
        ],why:'If the story only works after the creator explains it, the environment is not yet doing the storytelling.',check:'The tester does not need the exact same wording as you, but their interpretation overlaps with the important facts and clues.',fix:'Do not solve confusion by adding an explanatory note first. Change prop placement, clue order, framing, lighting or evidence.'},
        {n:'12',title:'Technical clean-up and final presentation',actions:[
          'Open the World Outliner and move every important actor into the correct folder.',
          'Rename any major custom actors that are still called StaticMeshActor_42 or similar.',
          'Walk the complete scene in Play mode and look for bad collision, floating props, impossible scale and blocked routes.',
          'Check movable/static settings on lights and objects you changed. Do not leave everything Movable without a reason.',
          'Check the scene at PLAYER eye height, not only from the editor flying camera.',
          'Take ONE strong final screenshot from a view that communicates the environment clearly.',
          'Record a short player walkthrough showing the intended clue route without narration.',
          'Capture one screenshot of your organised Outliner and one development/blockout image.',
          'Write 3 short bullets explaining three storytelling decisions you made.',
          'Add your blind-playtest answers and the two changes you made because of them.'
        ],why:'The final work should prove both creative decision-making and competent Unreal production practice.',check:'A viewer can see the finished scene, understand how it developed, and see evidence that you tested whether the story communicated.',fix:'If your best screenshot only works from a camera position the player can never reach, capture an additional player-view image.'}
      ],
      deliver:['Playable small environment','BEFORE → EVENT → AFTER planning statement','Reference board with labelled observations','At least five physical narrative clues','One clear hero clue','Intentional player route / first focal point','Lighting + local audio pass','Blind playtest notes + changes','Blockout screenshot + final screenshot','Short player walkthrough','Organised Outliner evidence'],
      stretch:'Create a deliberate REFRAME: the first three clues suggest one interpretation, then a later clue makes the player reconsider it — without using a paragraph of explanatory text.'
    },
    {
      id:'2d-visual-development', icon:'◈', title:'Visual Development Pack', role:'2D Art', time:'1–2 weeks',
      strap:'Develop a visual idea instead of jumping straight to one finished painting.',
      outcome:'A coherent visual-development pack for an original game idea: references, thumbnails, shape/value exploration, colour direction, props or character/creature exploration and one polished key image.',
      heroImage:'https://upload.wikimedia.org/wikipedia/commons/8/84/Storyboard.jpg',
      heroFallback:'assets/tutorials/sequencer-master/virtual-filmmaking-p439.webp',
      heroAlt:'A hand-drawn storyboard sheet showing multiple quick frames used to explore a visual sequence before final production.',
      imageCaption:'Process reference: small rough drawings are useful because ideas are cheap to change. Your thumbnails should solve composition and shape before you spend time polishing.',
      imageCredit:'Heloise Magny — Storyboard example (Public Domain), Wikimedia Commons', imageLink:'https://commons.wikimedia.org/wiki/File:Storyboard.jpg',
      theory:[
        {label:'ArtStation: Environment Thumbnails Study',url:'https://www.artstation.com/artwork/qbmgz'},
        {label:'ArtStation: Environment Concept Art – development from thumbnails',url:'https://www.artstation.com/artwork/5Xxl5A'},
        {label:'ArtStation: Custom Shapes Workflow for Environment Thumbnails',url:'https://samheisler.artstation.com/projects/NG59Yz'}
      ],
      learn:['Reference gathering','Thumbnailing and iteration','Shape language','Value and composition','Colour keys','Visual consistency','Presenting development, not just final art'],
      stages:[
        {n:'01',title:'Pick a world, not a picture',do:'Choose a clear game premise or location. Write 4–6 visual keywords such as cramped, ceremonial, improvised, cheerful, industrial.',why:'Keywords create constraints that help separate design choices from decoration.',check:'Your words describe visual qualities, not just genre names.',fix:'Replace vague words like “cool” or “fantasy” with observable qualities.'},
        {n:'02',title:'Build a reference board',do:'Gather real-world reference first, then games/films/art that help with mood, shape, materials or colour. Label what you are taking from each image.',why:'Reference is useful when it answers a design question.',check:'Every image has a reason to be on the board.',fix:'Remove images you only included because they look nice.'},
        {n:'03',title:'Thumbnail fast',do:'Make at least 8 small thumbnails. Work tiny. Concentrate on large shapes, value and composition before detail.',why:'Cheap ideas are easy to throw away. Detailed ideas are emotionally expensive.',check:'The thumbnails read when viewed small.',fix:'If you are drawing windows, bricks or costume seams already, zoom out.'},
        {n:'04',title:'Explore shape language',do:'Take 2–3 promising ideas and deliberately vary their dominant shapes, proportions and silhouettes.',why:'Repeated shape choices help a world feel designed rather than assembled.',check:'The alternatives feel related but clearly different.',fix:'If every version has the same silhouette, exaggerate the differences.'},
        {n:'05',title:'Value then colour',do:'Test light/dark organisation first, then make several small colour keys before committing to a palette.',why:'A strong colour palette cannot rescue unclear value structure.',check:'The focal area still reads in greyscale.',fix:'Squint at the image or reduce it to thumbnail size and strengthen the big value groups.'},
        {n:'06',title:'Develop supporting design',do:'Add a small sheet of props, character/creature exploration or graphic motifs that belong to the same world.',why:'Visual development should prove the design can extend beyond one illustration.',check:'The supporting work shares materials, shapes and colour logic with the main concept.',fix:'If it could belong to any other project, push the shared visual language.'},
        {n:'07',title:'Final key image',do:'Choose one concept and take it to a polished final. Preserve the design decisions from your development instead of repainting it into something generic.',why:'The final demonstrates execution; the earlier work demonstrates thinking.',check:'A viewer can trace key choices back to your thumbnails and colour studies.',fix:'If the final no longer resembles your development, explain and evidence the reason for the change.'},
        {n:'08',title:'Present the process',do:'Lay out the work so reference → alternatives → decisions → final can be understood without you narrating it.',why:'Portfolio reviewers need to see how you think.',check:'Somebody can identify at least one rejected direction and why the chosen one is stronger for the brief.',fix:'Add short annotations rather than large paragraphs.'}
      ],
      deliver:['Reference board with annotations','8+ thumbnails','Shape/value exploration','3+ colour keys','Supporting prop/character/creature sheet','One polished key image','Process presentation sheet'],
      stretch:'Create a second final colour/lighting scenario that changes the mood without redesigning the whole scene.'
    },
    {
      id:'3d-hero-prop', icon:'⬡', title:'Hero Prop', role:'3D Art', time:'1–2 weeks',
      strap:'One excellent game-ready asset. Reference it properly, build it properly, present it properly.',
      outcome:'A high-quality hero prop taken through reference, blockout, modelling, UVs, texturing/materials, engine import and portfolio presentation.',
      heroImage:'https://upload.wikimedia.org/wikipedia/commons/a/a3/Vintage_Radio.jpg',
      heroFallback:'assets/modeling/stages/barrel-overview.png',
      heroAlt:'A real vintage radio with exposed coils, valves, controls and a wooden body.',
      imageCaption:'Real-world reference: separate the object into primary body, secondary functional parts and small tertiary detail. Model construction first; scratches come later.',
      imageCredit:'Sven — Vintage Radio (CC BY 4.0), Wikimedia Commons', imageLink:'https://commons.wikimedia.org/wiki/File:Vintage_Radio.jpg',
      secondaryImage:'assets/modeling/stages/barrel-overview.png',
      secondaryAlt:'A game-ready prop modelling reference from the Hub.',
      secondaryCaption:'Game-art reference: compare the real object above with a simplified production asset. Strong proportions and readable forms matter before surface detail.',
      theory:[
        {label:'Polycount: AAA game-ready hero prop pipeline breakdown',url:'https://polycount.com/discussion/237029/breakdown-of-the-aaa-pipeline-for-game-ready-realistic-hero-props'},
        {label:'Epic: Materials and Material Instances',url:'https://dev.epicgames.com/documentation/unreal-engine/artist-03-create-materials-and-material-instances'},
        {label:'Epic: Modeling Mode / UV / bake / collision concepts',url:'https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-in-unreal-engine'}
      ],
      learn:['Reference analysis','Primary / secondary / tertiary forms','Game-ready topology thinking','UV planning','Material definition','Logical wear','Engine validation','Portfolio breakdown presentation'],
      stages:[
        {n:'01',title:'Choose an object with a story',do:'Pick an object complex enough to reward close inspection: radio, tool, helmet, device, instrument, machine, artefact or similar.',why:'A hero prop needs construction, materials and visual hierarchy to solve.',check:'You can identify at least three materials and several functional parts.',fix:'Avoid a plain crate/chair unless there is a strong design reason.'},
        {n:'02',title:'Reference the construction',do:'Collect front/side/detail photos and study how parts connect, open, hinge, fasten or wear. Add dimensions where possible.',why:'Plausible construction makes stylisation and damage more convincing.',check:'You could explain how the object is assembled.',fix:'Search model numbers, manuals, auction listings and repair photos—not only Pinterest.'},
        {n:'03',title:'Blockout',do:'Build only the primary forms and test proportions at real-world scale.',why:'Detail cannot fix a bad silhouette or wrong proportion.',check:'The object is recognisable in flat grey from several angles.',fix:'Compare directly against reference before adding bevels and screws.'},
        {n:'04',title:'Secondary forms and topology',do:'Add the parts that explain function: seams, housings, controls, handles, vents, fasteners and thickness.',why:'Secondary forms make the object believable before surface noise.',check:'Edges and topology support the intended shading and game use.',fix:'Do not add geometry simply because you can; decide whether detail belongs in geometry, normal, texture or material.'},
        {n:'05',title:'UV and bake',do:'Plan seams, texel density and packing. Bake where appropriate and inspect for skew, seams or shading errors.',why:'Clean UV/bake work is the bridge between model and believable surface.',check:'No obvious stretching and important areas receive appropriate texture space.',fix:'Fix the cage/seams/topology rather than painting over bake errors.'},
        {n:'06',title:'Texture by material',do:'Make wood look like wood, painted metal like painted metal, rubber like rubber. Add wear where touch, friction, impact or exposure would actually occur.',why:'Material definition is more important than random scratches.',check:'You can identify the major materials even with Base Colour muted.',fix:'If every edge is equally worn, remove most of it and concentrate wear logically.'},
        {n:'07',title:'Engine check',do:'Import to Unreal. Verify scale, normals, materials, texture response, collision if needed and close-up readability.',why:'A game asset is only finished when it works in the game engine.',check:'It holds up from the intended gameplay/cinematic distance.',fix:'Judge it under neutral light as well as dramatic presentation light.'},
        {n:'08',title:'Portfolio breakdown',do:'Show beauty render, wireframe, texture/UV information, detail shots and at least one in-engine image.',why:'The breakdown proves the technical work behind the final render.',check:'The presentation shows both art quality and game-readiness.',fix:'Do not hide topology/UVs behind only cinematic renders.'}
      ],
      deliver:['Reference sheet','Blockout evidence','Finished game-ready model','UV layout','Textures/materials','In-engine Unreal presentation','Wireframe + breakdown images'],
      stretch:'Create a second condition state—new/damaged, clean/abandoned or standard/customised—mostly reusing the same underlying asset.'
    },
    {
      id:'technical-audio', icon:'◉', title:'Build a Game Sound Library', role:'Technical Audio', time:'1–2 weeks',
      strap:'Record sounds, clean them, create variations and organise them so another developer can actually use them.',
      outcome:'An original, edited and clearly catalogued game-audio library containing Foley, object interactions, material sounds, ambience and designed/layered effects.',
      heroImage:'https://upload.wikimedia.org/wikipedia/commons/3/3c/Zoom_H5.jpg',
      heroFallback:'assets/book/best-practices/sequencer-audio-tracks.webp',
      heroAlt:'A Zoom H5 portable field recorder with stereo microphones.',
      imageCaption:'Real-world reference: clean game audio starts at capture. Monitor levels, microphone position and unwanted background sound before trying to repair recordings later.',
      imageCredit:'SkywalkerPL — Zoom H5 (CC BY 4.0), Wikimedia Commons', imageLink:'https://commons.wikimedia.org/wiki/File:Zoom_H5.jpg',
      secondaryImage:'assets/book/best-practices/sequencer-audio-tracks.webp',
      secondaryAlt:'Unreal Engine Sequencer audio tracks.',
      secondaryCaption:'Engine reference: the finished library is not just a folder of WAV files. Sounds should be named and organised so another developer can quickly place and time them in-game.',
      theory:[
        {label:'GameSound.org – game audio learning resources',url:'https://www.gamesound.org/'},
        {label:'Epic: Audio in Unreal Engine',url:'https://dev.epicgames.com/documentation/unreal-engine/audio-in-unreal-engine'},
        {label:'Epic: Sound Attenuation',url:'https://dev.epicgames.com/documentation/unreal-engine/sound-attenuation-in-unreal-engine'}
      ],
      learn:['Field recording','Foley','Gain staging and avoiding clipping','Variation recording','Editing and cleanup','Layered sound design','Looping ambience','File naming and catalogue discipline'],
      stages:[
        {n:'01',title:'Plan the library',do:'Choose 5–7 useful categories: footsteps, impacts, doors/objects, materials, mechanisms, UI-like sounds and ambience.',why:'A targeted library is more useful than 100 unrelated recordings.',check:'You can imagine a developer searching for these sounds during production.',fix:'Replace novelty noises with repeatable game-use categories.'},
        {n:'02',title:'Record clean source',do:'Set safe levels, monitor on headphones, control handling/wind/background noise and record several takes from sensible microphone positions.',why:'You cannot fully repair clipped or badly contaminated source later.',check:'Loud peaks do not clip and quiet detail is still above the noise floor.',fix:'Move the microphone or location before reaching for heavy noise reduction.'},
        {n:'03',title:'Capture variations',do:'For repeated actions such as footsteps, impacts or switches, record 3–5 genuinely different performances.',why:'Variation prevents machine-gun repetition in games.',check:'The takes feel related but not identical.',fix:'Change force, timing, contact point or object—not just file pitch later.'},
        {n:'04',title:'Record Foley creatively',do:'Create at least five sounds where the recording source is not literally the on-screen thing it could represent.',why:'Foley and sound design are about believable results, not documentary truth.',check:'A listener can suggest a plausible game use without seeing the source object.',fix:'Layer contrasting materials if a single source sounds too small.'},
        {n:'05',title:'Edit for use',do:'Select best takes, trim, fade, remove clicks, control levels and apply EQ/compression/noise reduction only when needed.',why:'The goal is clean, responsive assets—not overprocessed audio.',check:'Every file starts and ends intentionally and has no accidental handling noise.',fix:'A/B against the raw source so processing does not destroy character.'},
        {n:'06',title:'Design three layered sounds',do:'Combine multiple recordings to create larger or fictional events such as heavy door, strange machine, creature movement or magical mechanism.',why:'Layering lets small recordings become production-scale sound effects.',check:'Each layer has a job: attack, body, texture, tail or character.',fix:'Mute layers one at a time; remove any layer that adds nothing.'},
        {n:'07',title:'Create two looping ambiences',do:'Build or capture two longer environmental beds and make the loop difficult to notice.',why:'Ambience establishes place and continuity without constantly demanding attention.',check:'You can listen through several loops without hearing the join.',fix:'Use longer crossfades and remove unique events close to loop boundaries.'},
        {n:'08',title:'Name and catalogue',do:'Use consistent filenames such as SFX_Door_Wood_Open_01.wav and AMB_Interior_Workshop_01.wav. Catalogue category, description, recording method and processing.',why:'Professional audio is partly information management.',check:'Another student can find five requested sounds quickly without asking you.',fix:'Rename files before submission; “AudioFinal2.wav” is not searchable.'}
      ],
      deliver:['30–50 finished sound effects','3–5 variations for repeated actions','At least 3 layered/designed sounds','At least 2 looping ambiences','Organised folders + consistent naming','Sound catalogue','Recording/editing evidence'],
      stretch:'Implement a small selection in Unreal using randomised variations, attenuation and an ambience zone.'
    },
    {
      id:'sequencer-cinematic', icon:'▶', title:'Sequencer Cinematic', role:'Cinematics / Animation', time:'1–2 weeks',
      strap:'Use the Edith Finch assets as your film set. Direct a short story through camera, timing, staging, light and sound.',
      outcome:'A 30–60 second in-engine cinematic built in Unreal Sequencer using existing assets, with 5–10 planned shots and at least one animated prop, event or environmental change.',
      heroImage:'assets/tutorials/sequencer-master/virtual-filmmaking-p439.webp',
      heroAlt:'Unreal Engine cinematic camera and Sequencer reference from the Hub.',
      imageCaption:'Unreal reference: treat the Edith Finch assets as a film set. Frame only what the audience needs, then use camera position, lens choice and timing to control the reveal.',
      imageCredit:'UE5 Sequencer reference — existing Hub guide', imageLink:'#/tutorial/sequencer-master-guide',
      secondaryImage:'https://upload.wikimedia.org/wikipedia/commons/8/84/Storyboard.jpg',
      secondaryFallback:'assets/tutorials/sequencer-master/virtual-filmmaking-p437.webp',
      secondaryAlt:'Storyboard panels demonstrating planned shot size and framing.',
      secondaryCaption:'Storyboard before Sequencer: decide what each shot communicates, its size and approximate duration before polishing camera moves.',
      theory:[
        {label:'Epic UE5.8: Cinematics and Sequencer',url:'https://dev.epicgames.com/documentation/unreal-engine/cinematics-and-movie-making-in-unreal-engine'},
        {label:'Epic UE5.8: Sequencer Basics',url:'https://dev.epicgames.com/documentation/unreal-engine/how-to-make-movies-in-unreal-engine'},
        {label:'Epic UE5.8: Camera Cuts',url:'https://dev.epicgames.com/documentation/unreal-engine/creating-camera-cuts-using-sequencer-in-unreal-engine'}
      ],
      learn:['Shot planning','Camera language','Composition','Sequencer keyframing','Camera Cuts','Pacing and editing','Lighting for attention','Sound-image timing'],
      stages:[
        {n:'01',title:'Choose one tiny story',do:'Use a prompt such as “Something has happened in this house. Show us without dialogue.” Keep the action to one discoverable event or change.',why:'Short cinematics become stronger when every shot has one job.',check:'You can pitch beginning → turn/reveal → ending in three sentences.',fix:'If you need several characters and locations, cut the idea down.'},
        {n:'02',title:'Storyboard 5–10 shots',do:'Sketch each shot with shot size, camera position, action and approximate duration.',why:'Sequencer should execute a plan, not become the place where you first invent the edit.',check:'You know why the camera cuts at each point.',fix:'Remove duplicate shots that reveal the same information.'},
        {n:'03',title:'Build the film set',do:'Use the Edith Finch asset library to create only the area the camera needs. Dress the frame, not an entire game level.',why:'Cinematic set building is about what is visible and meaningful to the shot.',check:'There are no large unseen areas consuming production time.',fix:'Use camera views early and repeatedly.'},
        {n:'04',title:'Create the Level Sequence',do:'Create a Level Sequence, add Cine Cameras, a Camera Cuts track and the actors/properties you need to animate.',why:'A clean Sequencer structure makes timing and iteration manageable.',check:'The complete rough sequence plays from start to finish before polish.',fix:'Get every shot onto the timeline before perfecting any one shot.'},
        {n:'05',title:'Block camera and action',do:'Keyframe only the important positions first. Add at least one prop/event change such as door, light, object, vehicle or environmental reveal.',why:'Blocking exposes pacing and staging problems while changes are cheap.',check:'The story reads with rough movement and basic lighting.',fix:'If camera movement is compensating for weak staging, simplify the move.'},
        {n:'06',title:'Shape the edit',do:'Adjust shot duration, cut points, pauses and reveals. Use stillness as deliberately as movement.',why:'Timing changes meaning. A two-second pause can create tension, clarity or comedy.',check:'No shot stays only because “it looks nice”.',fix:'Trim frames until every shot enters late and leaves early enough to stay purposeful.'},
        {n:'07',title:'Light and focus',do:'Use contrast, practical lights, focal length, focus distance and depth of field to control attention. Do not blur everything.',why:'Cinematic lighting and lens choices direct the viewer’s eye.',check:'The intended subject reads instantly in each important shot.',fix:'Fix composition and lighting before reaching for extreme depth of field.'},
        {n:'08',title:'Sound, render, review',do:'Add ambience/Foley/music where suitable, render a draft, watch it away from Sequencer, gather feedback and make one revision pass.',why:'A rendered sequence reveals pacing and audio problems that looping a shot in-editor can hide.',check:'A viewer can describe what happened without your explanation.',fix:'If the story is unclear, first change shot order/length or framing—not add a paragraph of text.'}
      ],
      deliver:['30–60 second final cinematic','5–10 shot storyboard/plan','Level Sequence with Camera Cuts','At least one animated environmental event','Lighting + sound pass','Draft feedback notes','Final rendered video'],
      stretch:'Build one moment twice with different camera/edit choices and compare how the audience interpretation changes.'
    },
    {
      id:'programming', icon:'⌘', title:'Programmer Skill Missions', role:'Gameplay Programming', time:'Three linked guided builds',
      href:'#/skill-mission/arrays-maps-escape-room/start',
      strap:'Build one small Escape Room step by step: Arrays & Maps → Structs & Data Tables → Functions.',
      outcome:'A complete solo Blueprint Escape Room. First make the game work with an Inventory Array and item-information Map, then refactor the same project into structured Data Table content and reusable Functions.',
      heroImage:'assets/tutorials/blueprint-foundations/maps-02-container-menu.webp',
      heroAlt:'Unreal Blueprint variable container menu showing collection types used for Arrays and Maps.',
      imageCaption:'Start small and finish the whole game. Mission 1 takes you from an empty Third Person project to battery → generator → key → locked exit → win screen before the later missions improve the architecture.',
      imageCredit:'UE5 Arrays & Maps reference — existing Hub guide', imageLink:'#/block/arrays-sets-maps',
      secondaryImage:'assets/tutorials/blueprint-foundations/structs-03-fields.webp',
      secondaryFallback:'assets/power-jam-programmer/03-powerstates-map-type.png',
      secondaryAlt:'Unreal Structure fields used to group related data.',
      secondaryCaption:'The same game then grows with you: Mission 2 moves item data into Structs/Data Tables; Mission 3 extracts repeated logic into Functions instead of starting over.',
      theory:[
        {label:'Start Mission 1 — Escape Room: Arrays & Maps',url:'#/skill-mission/arrays-maps-escape-room/start'},
        {label:'Building Block — Arrays, Sets & Maps',url:'#/block/arrays-sets-maps'},
        {label:'Building Block — Structs',url:'#/block/structs'},
        {label:'Building Block — Data Tables',url:'#/block/data-tables'},
        {label:'Building Block — Functions, Custom Events & Macros',url:'#/block/functions-events-macros'}
      ],
      learn:['Arrays and inventory state','Maps and key → value data','Branches and game flow','Widgets and start/win screens','Structs and Data Tables','Functions and reusable logic','Testing one stage before unlocking the next'],
      stages:[
        {n:'01',title:'Mission 1 — Arrays & Maps: build the complete Escape Room',do:'Start with the Third Person template and follow the guided mission from the room blockout through Start Menu, Battery pickup, Inventory Array, Generator, Key, item-description Map, locked Exit and Win Screen.',why:'You learn the containers inside a complete playable loop instead of isolated node exercises.',check:'You can start, collect the Battery, power the Generator, collect the Key, unlock the Exit, win and restart.',fix:'Do not jump ahead. Each mission page has its own DO THIS / WHY / CHECK steps; fix the current test before unlocking the next stage.'},
        {n:'02',title:'Mission 2 — Structs & Data Tables: stop hard-coding',do:'Continue the same project. Group item fields in a Struct and move repeated item content into a Data Table so Blueprints ask for data instead of storing every value separately.',why:'This turns a one-off prototype into a system that can grow without duplicating variables and branches everywhere.',check:'Adding or changing an item is mainly a data edit rather than rewriting several Blueprints.',fix:'If item names, descriptions or properties are still scattered through graphs, move the content back to the shared data source.'},
        {n:'03',title:'Mission 3 — Functions: stop repeating logic',do:'Continue the Escape Room again. Identify repeated logic, convert appropriate pieces into clearly named Functions and test that behaviour has not changed.',why:'Reusable functions make the project easier to read, debug and expand.',check:'Repeated implementation has reduced and another programmer can understand the important function names without tracing every wire.',fix:'Do not make one giant function. Give each function one clear job and keep game state where it belongs.'}
      ],
      deliver:['One working Escape Room built from start screen to win screen','Mission 1 completed: Arrays & Maps','Mission 2 completed: Structs & Data Tables','Mission 3 completed: Functions & reusable logic','Stage-by-stage testing evidence','Readable final Blueprint structure'],
      stretch:'After all three missions, add one new item or puzzle element using the data-driven/reusable system without rebuilding the original logic.'
    }  ]
};
