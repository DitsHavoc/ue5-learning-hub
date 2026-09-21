window.LEVEL4_SPECIALIST_PROJECTS = {
  version: '3.57.0',
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
      heroImage:'https://images.steamusercontent.com/ugc/16481460338892297344/046D5035109AA286D15F535C62B89A8F9D546900/?ima=fit&imcolor=%23000000&impolicy=Letterbox&imw=1024&letterbox=false',
      heroAlt:'What Remains of Edith Finch attic room showing dense personal set dressing and storytelling props.',
      imageCredit:'Community screenshot – What Remains of Edith Finch', imageLink:'https://steamcommunity.com/app/501300/screenshots/',
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
      heroImage:'https://cdn.kwork.com/files/portfolio/t3/16/c4a2792edce40c8afc4aa72d62d27a18b30b6351-1701300890.jpg',
      heroAlt:'Storyboard and shot planning panels showing how small exploratory images communicate composition before final production.',
      imageCredit:'Storyboard example – used as a process reference', imageLink:'https://kwork.com/illustrations/30374452/i-will-create-storyboards-for-your-film-or-animation-or-ad',
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
      heroImage:'https://www.asaradiomuseo.fi/ASA827/07_ASA827.jpg',
      heroAlt:'Real vintage radio showing materials, construction, wear, controls and manufacturing details useful for 3D reference.',
      imageCredit:'Real-world reference example – ASA 827 radio', imageLink:'https://www.asaradiomuseo.fi/ASA827.htm',
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
      heroImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Foley_Room_at_the_Sound_Design_Campus_%28cropped%29.jpg/440px-Foley_Room_at_the_Sound_Design_Campus_%28cropped%29.jpg',
      heroAlt:'Foley artist recording an impact with a microphone in a dedicated sound room.',
      imageCredit:'Foley recording – Wikimedia Commons', imageLink:'https://commons.wikimedia.org/wiki/File:Foley_Room_at_the_Sound_Design_Campus_(cropped).jpg',
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
      heroImage:'https://images.steamusercontent.com/ugc/16481460338892297344/046D5035109AA286D15F535C62B89A8F9D546900/?ima=fit&imcolor=%23000000&impolicy=Letterbox&imw=1024&letterbox=false',
      heroAlt:'What Remains of Edith Finch interior used as visual inspiration for staging, light, framing and cinematic storytelling.',
      imageCredit:'Community screenshot – What Remains of Edith Finch', imageLink:'https://steamcommunity.com/app/501300/screenshots/',
      secondaryImage:'https://cdn.kwork.com/files/portfolio/t3/16/c4a2792edce40c8afc4aa72d62d27a18b30b6351-1701300890.jpg',
      secondaryAlt:'Storyboard panels demonstrating planned shot size and framing.',
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
      id:'programming', icon:'⌘', title:'Programming Missions', role:'Gameplay Programming', time:'Choose from existing tasks',
      strap:'Use the programming missions already in the Hub. Pick a system that makes you think, test and debug.',
      outcome:'A working Unreal gameplay system from the existing programming task bank, with evidence of planning, implementation, testing and debugging.',
      heroImage:'', heroAlt:'', imageCredit:'', imageLink:'',
      theory:[
        {label:'Open Unreal Learning',url:'#/programming'},
        {label:'Power Jam Programmer Guide',url:'#/tutorial/power-jam-programmer'},
        {label:'Building Blocks reference',url:'#/blocks'}
      ],
      learn:['Blueprint/system design','Breaking problems into steps','Testing','Debugging','Readable implementation','Explaining why a solution works'],
      stages:[
        {n:'01',title:'Choose the mission',do:'Pick one of the programming tasks already provided. Choose something that extends your skill rather than repeating a system you can already make from memory.',why:'The task should create learning, not just output.',check:'You can name the new technical idea you expect to practise.',fix:'Move up a level if you already know the complete solution.'},
        {n:'02',title:'Define the behaviour',do:'Write the player-facing behaviour and success conditions before opening Blueprint.',why:'Programming becomes easier when “working” has a testable definition.',check:'You have a short list of observable pass/fail behaviours.',fix:'Replace vague goals like “make it good” with actions and states.'},
        {n:'03',title:'Break it into parts',do:'Identify events, state/data, decisions, reusable functions and communication between Blueprints.',why:'Decomposition prevents a single giant graph.',check:'You can build/test one part independently.',fix:'If the plan is one long sequence of nodes, separate responsibilities.'},
        {n:'04',title:'Build the smallest working version',do:'Get the core loop functioning before UI, VFX or polish.',why:'A thin working slice exposes logic problems early.',check:'The system performs its main job in-game.',fix:'Use Print String, breakpoints and watch values before adding more nodes.'},
        {n:'05',title:'Test edge cases',do:'Try unexpected order, repeated input, missing references, boundary values and restart/reset behaviour.',why:'Robust systems survive player behaviour you did not imagine.',check:'You have found and fixed at least one failure case.',fix:'If you cannot break it, ask somebody else to try.'},
        {n:'06',title:'Refactor and explain',do:'Rename variables/functions, remove duplication, comment decisions and capture evidence of the final logic.',why:'Readable code is part of the outcome.',check:'Another programmer can follow the system without you narrating every node.',fix:'If the graph needs a paragraph-long comment, simplify the graph.'}
      ],
      deliver:['Working system','Short behaviour/success plan','Testing evidence','At least one documented bug + fix','Readable final Blueprint/code','Short explanation of key decisions'],
      stretch:'Let another programmer review the solution and make one refactor based on their feedback.'
    }
  ]
};
