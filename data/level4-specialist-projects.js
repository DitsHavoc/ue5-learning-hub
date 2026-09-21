window.LEVEL4_SPECIALIST_PROJECTS = {
  version: '3.57.1',
  intro: {
    title: 'Level 4 Specialist Projects',
    kicker: 'Choose ONE pathway',
    summary: 'Pick the discipline you want to develop. Each pathway is a standalone portfolio-style project with a clear outcome, theory, references, staged tasks and a final quality check.'
  },
  projects: [
    {
      id:'what-happened-here', icon:'✦', title:'What Happened Here?', role:'Environment / Level Design', time:'1–2 weeks',
      strap:'Tell a story through a place. No exposition dump. Make the player read the scene.',
      outcome:'A small, believable Unreal environment built primarily from the What Remains of Edith Finch asset library, communicating a before / event / after story through composition, props, light, sound and player guidance.',
      heroImage:'https://upload.wikimedia.org/wikipedia/commons/3/33/Empty_Room_%28Unsplash%29.jpg',
      heroFallback:'assets/tutorials/prison-cell/lighting-01-light-placement.webp',
      heroAlt:'A real interior seen through a dark hallway, with furniture and lighting creating a strong focal area.',
      imageCaption:'Real-world reference: notice how doorway framing, contrast and object placement naturally pull your eye deeper into the room. Your environment should guide attention this deliberately.',
      imageCredit:'Stephen Caserta — Empty Room (CC0), Wikimedia Commons', imageLink:'https://commons.wikimedia.org/wiki/File:Empty_Room_(Unsplash).jpg',
      theory:[
        {label:'GDC: What Happened Here? Environmental Storytelling',url:'https://www.gdcvault.com/play/1012696/What-Happened-Here-Environmental'},
        {label:'Official What Remains of Edith Finch page',url:'https://www.annapurna.com/interactive/what-remains-of-edith-finch'},
        {label:'Epic: Decal Materials – grime, damage and local story detail',url:'https://dev.epicgames.com/documentation/unreal-engine/decal-materials-in-unreal-engine'}
      ],
      learn:['Environmental storytelling','Set dressing and believability','Visual hierarchy and focal points','Player guidance through composition and light','Before / event / after thinking','Iteration through blind playtesting'],
      stages:[
        {n:'01',title:'Write the hidden story',do:'In 3–5 sentences, decide who used this place, what normal life looked like, what changed, and what the player arrives after. Do not write a script.',why:'You need a clear cause before you can design believable evidence.',check:'You can explain BEFORE → EVENT → AFTER in under 30 seconds.',fix:'If the idea needs a paragraph of dialogue to make sense, simplify the event.'},
        {n:'02',title:'Reference real places',do:'Collect 6–10 real-world photos of spaces like yours. Look at clutter, storage, wear, object grouping and where people actually put things.',why:'Believable scenes come from observed behaviour, not random asset placement.',check:'Your references show lived-in details, not just pretty architecture.',fix:'Search for estate-agent photos, workshops, bedrooms, sheds, kitchens, offices or abandoned spaces rather than “game environment art”.'},
        {n:'03',title:'Block the playable space',do:'Keep it small: one room, one workshop, one shed, one short exterior or similarly focused space. Establish entrances, sightlines and one main focal area.',why:'A small dense scene lets you spend time on story instead of square metres.',check:'From the entry point, you know where the player will probably look first.',fix:'If there are large empty areas, reduce the footprint before dressing it.'},
        {n:'04',title:'Build five clues',do:'Place at least five story clues. Choose one hero clue and make the others support, complicate or reframe it.',why:'One obvious note is exposition. Several connected clues let the player infer.',check:'Remove any one supporting clue and the story still has evidence.',fix:'If every clue literally says what happened, replace text with physical evidence.'},
        {n:'05',title:'Make it lived in',do:'Add believable clusters: objects used together should sit together. Add signs of routine, wear, mess, storage and personal preference.',why:'Set dressing communicates character before the “event” is even understood.',check:'You can point to three areas and explain why those objects are together.',fix:'If props look evenly sprinkled, build clusters and leave some calm areas.'},
        {n:'06',title:'Guide attention',do:'Use light, contrast, framing, leading lines, open doors, object orientation and sound to guide See → Investigate → Discover → Reconsider.',why:'Level design controls the order in which evidence is read.',check:'A tester notices your intended first clue without being told.',fix:'If they miss it, strengthen contrast or composition before adding an arrow or UI marker.'},
        {n:'07',title:'Blind playtest',do:'Say nothing. Let somebody explore. Ask: Who used this place? What happened? Which three objects made you think that?',why:'Environmental storytelling only works if the environment communicates without the author beside it.',check:'Their interpretation overlaps meaningfully with your intended story.',fix:'Do not immediately explain. Change the scene based on what they actually read.'},
        {n:'08',title:'Polish and evidence',do:'Tidy the Outliner, check collision/scale, take a strong screenshot and capture a short walkthrough.',why:'Presentation and technical organisation are part of a professional environment workflow.',check:'Nothing important only looks good from the editor camera.',fix:'Play in-game and inspect the scene at player eye level before final capture.'}
      ],
      deliver:['Playable small environment','At least five narrative clues','One hero clue / focal area','Reference board','Before / Event / After statement','Blind playtest notes','1 strong screenshot + short walkthrough'],
      stretch:'Create one clue that deliberately changes the player’s first interpretation without using a text note.'
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
