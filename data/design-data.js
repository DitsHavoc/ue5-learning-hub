window.UE5_DESIGN_DATA = {
  "version": "3.18.0",
  "buildDate": "26 Aug 2026",
  "modules": [
    {
      "id": "world-design",
      "title": "Level Design Foundations",
      "icon": "◇",
      "description": "Build spaces that communicate routes, goals, danger and pacing before art polish hides the problems.",
      "principles": [
        "Block out before dressing",
        "Design around player metrics",
        "Use landmarks and sightlines",
        "Control pacing with spatial rhythm",
        "Playtest without explaining"
      ],
      "intro": "A good level tells the player where they can go, what matters and what kind of behaviour the space supports. Start with collision, scale and route logic; art comes later.",
      "referenceImages": [
        {
          "src": "https://pbs.twimg.com/media/EKuSnv7WwAA5P2W.jpg",
          "caption": "CONTROL — brutalist geometry, repeated ceiling lights and strong vertical scale turn a simple route into a memorable space.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy Entertainment — CONTROL",
          "kind": "reference"
        },
        {
          "src": "https://www.playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — a tiny character silhouette, one strong pool of light and huge negative space create immediate hierarchy and tension.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "tutorials": [
        "greybox-room",
        "player-scale",
        "focal-point",
        "route-readability"
      ],
      "build": {
        "title": "Studio Build: The Three-Room Journey",
        "duration": "60–90 min",
        "brief": "Greybox three connected spaces that create a clear beginning, decision and payoff without using text arrows.",
        "phases": [
          "Block out three rooms with different proportions.",
          "Create one obvious primary route and one optional route/reward.",
          "Place a landmark visible from at least two spaces.",
          "Use lighting or colour only after the route works in plain grey.",
          "Ask another student to play without guidance and record one change."
        ],
        "evidence": [
          "Top-down screenshot of the blockout.",
          "Three player-height screenshots showing route decisions.",
          "One before/after change from playtesting."
        ]
      }
    },
    {
      "id": "environment",
      "title": "Environment Art & Set Dressing",
      "icon": "▦",
      "description": "Turn a functional blockout into a believable place without burying gameplay under clutter.",
      "principles": [
        "Reference before decoration",
        "Build big → medium → small",
        "Repeat assets intentionally",
        "Use wear where people/worlds would cause it",
        "Protect gameplay readability"
      ],
      "intro": "Environment art is not 'fill every empty surface'. Strong scenes use controlled density, believable prop logic and visual storytelling to support the level.",
      "referenceImages": [
        {
          "src": "https://pbs.twimg.com/media/EKuSnv7WwAA5P2W.jpg",
          "caption": "CONTROL — brutalist geometry, repeated ceiling lights and strong vertical scale turn a simple route into a memorable space.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy Entertainment — CONTROL",
          "kind": "reference"
        },
        {
          "src": "https://www.playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — a tiny character silhouette, one strong pool of light and huge negative space create immediate hierarchy and tension.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "tutorials": [
        "set-dress-room",
        "prop-clusters",
        "decals-story",
        "modular-kit"
      ],
      "build": {
        "title": "Studio Build: Abandoned Workroom",
        "duration": "75–100 min",
        "brief": "Dress one simple room so a player can infer what happened there without reading a text log.",
        "phases": [
          "Choose one short story: rushed evacuation, accident, break-in or long abandonment.",
          "Dress structural/big forms first, then furniture, then small props.",
          "Create 3 prop clusters with clear purpose rather than random scatter.",
          "Use decals/wear to reinforce use and age.",
          "Remove 20% of the props and keep only the ones helping composition/story."
        ],
        "evidence": [
          "Reference board screenshot.",
          "Clean blockout before dressing.",
          "Final wide shot plus two storytelling details.",
          "A sentence explaining what the player should infer."
        ]
      }
    },
    {
      "id": "materials",
      "title": "Materials & Surfaces",
      "icon": "◫",
      "description": "Learn the material language that makes metal feel like metal, paint feel coated and surfaces respond correctly to light.",
      "principles": [
        "Think physically: base colour, roughness, metallic, normal",
        "Use Material Instances for variation",
        "Break repetition with masks/decals",
        "Keep graphs readable",
        "Judge materials under neutral light"
      ],
      "intro": "Materials define surface response. The aim is not giant node graphs; it is believable values, reusable parameters and variation that survives different lighting.",
      "referenceImages": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b61c2e7b-8c11-4b70-b966-97b91ec1f4ef/materialeditorui.png",
          "caption": "Unreal Material Editor — material graphs control how a surface reacts to light rather than simply placing a flat colour on a mesh.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-material-editor-ui",
          "sourceTitle": "Epic Games — Material Editor UI",
          "kind": "epic"
        },
        {
          "src": "https://pbs.twimg.com/media/EKuSnv7WwAA5P2W.jpg",
          "caption": "CONTROL — brutalist geometry, repeated ceiling lights and strong vertical scale turn a simple route into a memorable space.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy Entertainment — CONTROL",
          "kind": "reference"
        }
      ],
      "tutorials": [
        "basic-pbr-material",
        "material-instance",
        "wet-surface",
        "emissive-screen"
      ],
      "build": {
        "title": "Studio Build: Surface Library",
        "duration": "75–100 min",
        "brief": "Create one reusable master material and at least four instances: painted wall, rough concrete, metal and wet/damaged variation.",
        "phases": [
          "Create a clean base material with texture/colour parameters.",
          "Expose roughness/metallic/tint controls.",
          "Build four Material Instances without duplicating the parent graph.",
          "Add one controlled variation method such as grime mask or vertex colour.",
          "Test all four under the same neutral light, then under your scene lighting."
        ],
        "evidence": [
          "Master graph screenshot.",
          "Four instance thumbnails or material spheres.",
          "One in-level shot showing different surfaces.",
          "Short note explaining which parameter creates the biggest visual change."
        ]
      }
    },
    {
      "id": "lighting",
      "title": "Lighting & Atmosphere",
      "icon": "☼",
      "description": "Use light, shadow, exposure, fog and post process to control mood while keeping the player able to read the space.",
      "principles": [
        "Light for hierarchy, not brightness",
        "Motivate light sources",
        "Use contrast to guide attention",
        "Fog controls information distance",
        "Lock exposure before judging mood"
      ],
      "intro": "Lighting is design. It tells the player where to look, what is safe, what is hidden and how a place should feel. Mood only works when navigation still reads.",
      "referenceImages": [
        {
          "src": "https://www.playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — a tiny character silhouette, one strong pool of light and huge negative space create immediate hierarchy and tension.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        },
        {
          "src": "https://www.konami.com/products_master/eu_publish/silenthill2r/eu/en/images/sh2_3.png",
          "caption": "SILENT HILL 2 — nearby forms stay readable while distance disappears, making fog both atmosphere and level-design control.",
          "sourceUrl": "https://www.konami.com/games/eu/en/products/silenthill2r/",
          "sourceTitle": "KONAMI — SILENT HILL 2",
          "kind": "reference"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/384ec87a-79c8-47ee-9dca-c664802cc995/volumetricfog.png",
          "caption": "Unreal Volumetric Fog — local lights can scatter through participating media and create readable depth.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/exponential-height-fog-in-unreal-engine",
          "sourceTitle": "Epic Games — Exponential Height Fog",
          "kind": "epic"
        }
      ],
      "tutorials": [
        "three-point-room",
        "horror-lighting",
        "post-process-mood",
        "silent-hill-fog"
      ],
      "build": {
        "title": "Studio Build: One Room, Three Moods",
        "duration": "60–90 min",
        "brief": "Use the same room and assets to create Safe, Threatening and Uncertain lighting states without moving geometry.",
        "phases": [
          "Lock camera/exposure so comparisons are fair.",
          "Create a readable neutral baseline.",
          "Make a Safe version using softer fill and warmer/clearer focal light.",
          "Make a Threatening version using stronger contrast and controlled colour.",
          "Make an Uncertain version using fog/occlusion and partial information.",
          "Ask someone which mood each shot communicates before showing labels."
        ],
        "evidence": [
          "Three matching camera shots.",
          "Lighting-only comparison with geometry unchanged.",
          "One sentence explaining how contrast/fog changed information."
        ]
      }
    },
    {
      "id": "landscape",
      "title": "Landscape, Terrain & Foliage",
      "icon": "≈",
      "description": "Shape outdoor spaces as playable routes first, then use terrain materials, foliage and landmarks to sell scale.",
      "principles": [
        "Terrain must support movement",
        "Large landforms before noise",
        "Paths need readable silhouettes",
        "Foliage forms clusters, not uniform carpet",
        "Distant landmarks orient the player"
      ],
      "intro": "Landscape tools can create enormous worlds quickly, which makes bad decisions enormous too. Work from route and silhouette outward rather than sculpting random noise.",
      "referenceImages": [
        {
          "src": "https://cdn.wccftech.com/wp-content/uploads/2020/07/DeathStranding_Screenshot_01-scaled.jpg",
          "caption": "DEATH STRANDING — landscape scale, route readability and distant silhouettes make terrain itself part of the experience.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "KOJIMA PRODUCTIONS — DEATH STRANDING",
          "kind": "reference"
        },
        {
          "src": "https://img.edc-cdn.net/imgproxy/WhJevtNTVxIUT55gW9wM3-sl1hwqk0EEexbt5n9VtQc/filename%3A04-new-landscape-tool.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy80ZGIwODM4YS0yYmFhLTRmYzItYTNiNi1jNjBkNTJjOGVkM2MvMDQtbmV3LWxhbmRzY2FwZS10b29sLnBuZw",
          "caption": "Unreal Landscape tools — Manage creates the landscape, Sculpt shapes it and Paint applies landscape material layers.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Landscape Quick Start",
          "kind": "epic"
        }
      ],
      "tutorials": [
        "create-landscape",
        "sculpt-playable-terrain",
        "landscape-paint",
        "foliage-path"
      ],
      "build": {
        "title": "Studio Build: The Valley Route",
        "duration": "90–120 min",
        "brief": "Build a small outdoor route with a start, destination landmark, optional overlook and believable terrain/foliage transitions.",
        "phases": [
          "Draw the route on paper before sculpting.",
          "Sculpt large valley/ridge shapes with broad brushes.",
          "Ensure the player can traverse the intended path without snagging.",
          "Paint at least three landscape layers based on slope/use.",
          "Add foliage in clusters and preserve route edges/sightlines.",
          "Place a landmark visible early and reveal it again later."
        ],
        "evidence": [
          "Top-down route plan.",
          "Landscape in untextured/sculpt stage.",
          "Final route and landmark shots.",
          "One example where foliage was removed for readability."
        ]
      }
    },
    {
      "id": "cinematics",
      "title": "Sequencer & Cutscenes",
      "icon": "▶",
      "description": "Use camera language, timing and Sequencer to reveal information without making every scene a slow pan around the level.",
      "principles": [
        "Every shot needs a purpose",
        "Cut on information or action",
        "Keep screen direction readable",
        "Use camera movement sparingly",
        "Return control cleanly"
      ],
      "intro": "A cinematic is edited information. Sequencer provides the tools, but framing, shot duration and what you choose not to show are what make it work.",
      "referenceImages": [
        {
          "src": "https://images.purexbox.com/bad222687593e/hellblade-2-will-display-with-black-bars-outside-of-ultrawide-mode-3.large.jpg",
          "caption": "Senua’s Saga: Hellblade II — controlled framing, motivated firelight and restrained colour push the eye toward the confrontation.",
          "sourceUrl": "https://www.xbox.com/en-GB/games/senuas-saga-hellblade-II",
          "sourceTitle": "Xbox — Senua’s Saga: Hellblade II",
          "kind": "reference"
        },
        {
          "src": "https://www.playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — a tiny character silhouette, one strong pool of light and huge negative space create immediate hierarchy and tension.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "tutorials": [
        "sequencer-first-shot",
        "camera-cuts",
        "reveal-shot",
        "trigger-cutscene"
      ],
      "build": {
        "title": "Studio Build: 20-Second Reveal",
        "duration": "60–90 min",
        "brief": "Create a short in-engine sequence that reveals a place, threat or objective in 3–5 purposeful shots, then returns to gameplay.",
        "phases": [
          "Write the information each shot must communicate.",
          "Create a Level Sequence and 3–5 Cine Camera shots.",
          "Keep shot lengths varied; avoid five identical slow pans.",
          "Use one motivated camera move or rack/focus-style emphasis.",
          "Add one sound cue to support the reveal.",
          "Trigger the sequence and return cleanly to player control."
        ],
        "evidence": [
          "Sequencer timeline screenshot.",
          "Storyboard/shot list.",
          "Final shot frame grabs.",
          "A note explaining why you cut where you did."
        ]
      }
    },
    {
      "id": "audio",
      "title": "Audio & Sound Design",
      "icon": "♪",
      "description": "Build spaces that sound alive using ambience, attenuation, variation, reverb and carefully placed silence.",
      "principles": [
        "Sound has location and distance",
        "Layer ambience rather than one giant loop",
        "Randomise repeated sounds",
        "Use silence as contrast",
        "Mix for gameplay priority"
      ],
      "intro": "Players hear spaces before they understand them. Audio can reveal distance, danger, room size, material and activity beyond the camera.",
      "referenceImages": [
        {
          "src": "https://www.playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — a tiny character silhouette, one strong pool of light and huge negative space create immediate hierarchy and tension.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        },
        {
          "src": "https://www.konami.com/products_master/eu_publish/silenthill2r/eu/en/images/sh2_3.png",
          "caption": "SILENT HILL 2 — nearby forms stay readable while distance disappears, making fog both atmosphere and level-design control.",
          "sourceUrl": "https://www.konami.com/games/eu/en/products/silenthill2r/",
          "sourceTitle": "KONAMI — SILENT HILL 2",
          "kind": "reference"
        }
      ],
      "tutorials": [
        "ambient-zone",
        "sound-attenuation",
        "randomised-soundcue",
        "reverb-space"
      ],
      "build": {
        "title": "Studio Build: The Room You Hear First",
        "duration": "60–90 min",
        "brief": "Design a small space where the player hears an important location or event before they can see it.",
        "phases": [
          "Choose one off-screen sound source: machinery, radio, creature, storm or crowd.",
          "Create a quiet base ambience so the focal sound has contrast.",
          "Use attenuation so direction and distance change as the player moves.",
          "Add 2–3 subtle randomised details instead of one obvious repeating loop.",
          "Use reverb/space treatment if the room type needs it.",
          "Play with the screen turned away and check whether the route/source is still inferable."
        ],
        "evidence": [
          "Audio Actor/attenuation setup screenshot.",
          "Sound Cue or MetaSound graph if used.",
          "Map shot showing source and player route.",
          "Short reflection: what information did sound give before sight?"
        ]
      }
    },
    {
      "id": "polish",
      "title": "Polish, Optimisation & Presentation",
      "icon": "✓",
      "description": "Finish scenes by removing noise, fixing readability, checking performance and presenting work like a designer rather than hiding problems with effects.",
      "principles": [
        "Polish is targeted iteration",
        "Profile before guessing",
        "Fix the biggest visual/readability problems first",
        "Keep expensive effects intentional",
        "Present before/after evidence"
      ],
      "intro": "Polish is not another layer of stuff. It is the final pass where you improve hierarchy, consistency, feedback and performance while removing distractions.",
      "referenceImages": [
        {
          "src": "https://pbs.twimg.com/media/EKuSnv7WwAA5P2W.jpg",
          "caption": "CONTROL — brutalist geometry, repeated ceiling lights and strong vertical scale turn a simple route into a memorable space.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy Entertainment — CONTROL",
          "kind": "reference"
        },
        {
          "src": "https://cdn.wccftech.com/wp-content/uploads/2020/07/DeathStranding_Screenshot_01-scaled.jpg",
          "caption": "DEATH STRANDING — landscape scale, route readability and distant silhouettes make terrain itself part of the experience.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "KOJIMA PRODUCTIONS — DEATH STRANDING",
          "kind": "reference"
        }
      ],
      "tutorials": [
        "scene-polish-pass",
        "performance-viewmodes",
        "lod-nanite-check",
        "portfolio-shot"
      ],
      "build": {
        "title": "Studio Build: Final Environment Pass",
        "duration": "60–90 min",
        "brief": "Take an existing student environment and improve it through a deliberate critique → fix → test → present cycle.",
        "phases": [
          "Capture a BEFORE shot and write the three biggest problems.",
          "Do a readability pass: route, focal point, collision, visual noise.",
          "Do a consistency pass: materials, light colour, scale and prop logic.",
          "Use editor view modes/stat tools to identify one performance concern.",
          "Fix or simplify the concern rather than guessing.",
          "Capture matching AFTER shots and present the changes side-by-side."
        ],
        "evidence": [
          "Before/after matching frames.",
          "Three-item critique list.",
          "One performance/debug view screenshot.",
          "A short explanation of the change with the highest impact."
        ]
      }
    }
  ],
  "resources": [
    {
      "id": "fab-free",
      "title": "Fab — Free Unreal Engine Assets",
      "type": "3D • Materials • VFX • Audio",
      "url": "https://www.fab.com/channels/unreal-engine?is_free=1",
      "note": "Use the Free filter. Check the licence shown on each listing before redistributing anything.",
      "icon": "F"
    },
    {
      "id": "fab-samples",
      "title": "Epic Samples on Fab",
      "type": "Sample projects",
      "url": "https://www.fab.com/channels/unreal-engine?is_free=true",
      "note": "Useful for studying how Epic builds environments, animation systems and example content. Content Examples and Game Animation Sample are particularly useful.",
      "icon": "E"
    },
    {
      "id": "polyhaven",
      "title": "Poly Haven",
      "type": "HDRIs • Textures • 3D models",
      "url": "https://polyhaven.com/",
      "note": "CC0 assets with no account required. Excellent for lighting tests, materials and environment dressing.",
      "icon": "P"
    },
    {
      "id": "mixamo",
      "title": "Adobe Mixamo",
      "type": "Characters • Animation",
      "url": "https://www.mixamo.com/",
      "note": "Free with an Adobe ID. Great for placeholder characters and animation when the lesson is about design rather than character production.",
      "icon": "M"
    },
    {
      "id": "freesound",
      "title": "Freesound",
      "type": "Sound effects • Ambience",
      "url": "https://freesound.org/",
      "note": "Huge sound library. Licences vary by sound — students must check CC0 / attribution / non-commercial terms before use.",
      "icon": "S"
    },
    {
      "id": "epic-docs",
      "title": "Epic UE5.8 Documentation",
      "type": "Current engine reference",
      "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-5-8-documentation",
      "note": "Use this when an editor option or workflow has changed. The Hub teaches the task; Epic remains the current technical reference.",
      "icon": "U"
    }
  ],
  "tutorials": [
    {
      "id": "greybox-room",
      "title": "Greybox a Playable Room",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Build a room from simple shapes at believable scale before committing to art.",
      "uses": [
        "Blockout",
        "Player scale",
        "Collision",
        "Metrics"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Place the player first",
          "Start from the Third Person template and keep the playable character visible while you build.",
          "The character is your measuring stick; a room that looks good from editor camera may feel huge or cramped in play.",
          "Press Play and check doors, ceiling height and movement space from player height."
        ],
        [
          "Build with primitives",
          "Use cubes for floor, walls, cover and door openings. Duplicate rather than modelling detail.",
          "Blockout should be fast to change. Detail makes students emotionally attached to bad layouts.",
          "You can reshape the room in seconds without replacing art."
        ],
        [
          "Check movement width",
          "Run, turn and jump through every opening you expect the player to use.",
          "Playable metrics matter more than architectural realism in early design.",
          "No doorway or route requires awkward camera wrestling."
        ],
        [
          "Create one focal area",
          "Use one larger opening, raised area or contrasting block to indicate where attention should go.",
          "Spatial hierarchy works even before lighting and textures.",
          "A new player can point to the most important part of the room."
        ]
      ],
      "mistakes": [
        "Building at editor-camera scale instead of player scale.",
        "Adding props/materials before movement and sightlines work."
      ],
      "makeItYours": [
        "Make a cramped horror version and a heroic large-scale version from the same footprint.",
        "Add a second entrance and see how it changes the focal point."
      ],
      "worksWhen": [
        "The player moves comfortably.",
        "Scale feels intentional.",
        "The important area reads while everything is still grey."
      ],
      "icon": "□",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://pbs.twimg.com/media/EKuSnv7WwAA5P2W.jpg",
          "caption": "CONTROL — brutalist geometry, repeated ceiling lights and strong vertical scale turn a simple route into a memorable space.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy Entertainment — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Level Design examples",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/level-design-content-examples"
      }
    },
    {
      "id": "player-scale",
      "title": "Check Player Scale & Metrics",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "10 min",
      "difficulty": "Beginner",
      "summary": "Create a simple metric kit so doors, corridors, steps and cover stay consistent.",
      "uses": [
        "Metrics",
        "Third Person",
        "Collision",
        "Proportions"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Make metric blocks",
          "Create simple labelled cubes for common widths/heights: door, corridor, waist cover and full cover.",
          "Reusable metrics prevent every room from inventing a different human scale.",
          "Placed blocks look consistent beside the character."
        ],
        [
          "Walk the kit",
          "Test each metric with the real character and camera.",
          "Camera collision and shoulder width can make technically passable spaces feel bad.",
          "Movement never clips or fights the camera."
        ],
        [
          "Save as a blockout kit",
          "Keep the metric actors in a small test level or folder for reuse.",
          "Consistency speeds later design and stops guesswork.",
          "You can drag a known-good door/corridor reference into any new level."
        ],
        [
          "Break one rule deliberately",
          "Create one oversized or undersized space for emotional effect.",
          "Metrics are defaults, not prison bars; breaking scale should communicate something.",
          "The altered scale feels intentional rather than accidental."
        ]
      ],
      "mistakes": [
        "Using real-world measurements without checking game camera needs.",
        "Scaling the player to fit the level instead of fixing the level."
      ],
      "makeItYours": [
        "Create metrics for first-person vs third-person and compare.",
        "Make a boss-door metric that exaggerates scale."
      ],
      "worksWhen": [
        "Common routes feel consistent.",
        "Camera behaves.",
        "Scale changes are deliberate."
      ],
      "icon": "↕",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Designing Levels",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designing-levels-in-unreal-engine"
      }
    },
    {
      "id": "focal-point",
      "title": "Create a Strong Focal Point",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Guide the eye using shape, contrast and framing before resorting to arrows or objective markers.",
      "uses": [
        "Composition",
        "Contrast",
        "Landmarks",
        "Sightlines"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Choose the target",
          "Pick exactly one thing the player should notice first: exit, machine, tower, enemy route or landmark.",
          "A focal point cannot be 'everything'.",
          "You can name the single intended target."
        ],
        [
          "Simplify around it",
          "Reduce competing props/bright materials around the target.",
          "Contrast only works if surrounding information is quieter.",
          "The eye lands on the target more quickly."
        ],
        [
          "Frame it",
          "Use doorways, beams, walls or terrain edges to create lines that point toward the target.",
          "Architecture can aim attention without UI.",
          "From the main approach, surrounding geometry frames the target."
        ],
        [
          "Add restrained contrast",
          "Use a value, colour or light contrast to strengthen what geometry already communicates.",
          "Lighting should reinforce layout, not rescue it.",
          "Turning the light off still leaves some compositional guidance."
        ],
        [
          "Blind test",
          "Show the frame to another student for two seconds and ask what they noticed first.",
          "Fast perception testing catches clutter immediately.",
          "Most testers name the intended target."
        ]
      ],
      "mistakes": [
        "Making every object emissive/bright.",
        "Putting the focal point behind the player at spawn."
      ],
      "makeItYours": [
        "Create two different focal points at different stages of the route.",
        "Use negative space instead of colour."
      ],
      "worksWhen": [
        "The intended object is noticed first.",
        "Geometry and lighting agree.",
        "The scene is not dependent on HUD arrows."
      ],
      "icon": "◎",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — a tiny character silhouette, one strong pool of light and huge negative space create immediate hierarchy and tension.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Level Design",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designing-levels-in-unreal-engine"
      }
    },
    {
      "id": "route-readability",
      "title": "Make a Route Read Without Arrows",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Use sightlines, floor language, light and landmarks so a player naturally chooses the intended route.",
      "uses": [
        "Player flow",
        "Sightlines",
        "Landmarks",
        "Playtesting"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Mark the decision point",
          "Stand where the player must choose and take a screenshot.",
          "Design decisions should be judged from the actual decision location.",
          "You know exactly what information the player sees."
        ],
        [
          "Strengthen the intended route",
          "Open the silhouette, show more depth, use a light pool or continue a recognisable floor/prop pattern.",
          "Humans follow continuity and visible opportunity.",
          "The route looks traversable without text."
        ],
        [
          "Quiet false routes",
          "Darken, narrow, close or visually terminate routes that are not currently valid.",
          "False affordances waste player attention.",
          "Blocked areas read as blocked before collision is hit."
        ],
        [
          "Add a landmark beyond the route",
          "Show a distinctive object or shape that the player can move toward.",
          "Landmarks give direction after the immediate doorway is passed.",
          "The landmark disappears/reappears in useful places."
        ],
        [
          "Watch, don't tell",
          "Observe another player and do not explain the goal.",
          "The only honest route test is one where the designer stays quiet.",
          "The player chooses the intended route or reveals where communication failed."
        ]
      ],
      "mistakes": [
        "Using invisible walls to solve a visually open route.",
        "Adding giant arrows instead of fixing composition."
      ],
      "makeItYours": [
        "Make an optional route read as tempting but non-essential.",
        "Create a loop where the landmark is seen from a new angle."
      ],
      "worksWhen": [
        "Players choose the intended route.",
        "Blocked routes look blocked.",
        "A landmark supports orientation."
      ],
      "icon": "→",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Level Design",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designing-levels-in-unreal-engine"
      }
    },
    {
      "id": "set-dress-room",
      "title": "Set Dress a Room: Big → Medium → Small",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Dress a blockout in passes so the scene gains story and depth without becoming prop soup.",
      "uses": [
        "Set dressing",
        "Hierarchy",
        "Prop density",
        "Environment story"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Protect the blockout",
          "Duplicate/save the clean blockout before dressing.",
          "You need a comparison and an escape route if dressing damages gameplay.",
          "A clean version still exists."
        ],
        [
          "Big forms first",
          "Place furniture, shelving, machines or major structural pieces.",
          "Large props define use and composition; tiny props cannot fix empty structure.",
          "The room reads at thumbnail size."
        ],
        [
          "Medium props second",
          "Add chairs, boxes, lamps, tools or repeated functional groups.",
          "Medium forms connect architecture to human use.",
          "There are clear prop clusters rather than even scatter."
        ],
        [
          "Small details last",
          "Add a small number of papers, cables, cups, debris or personal details where story requires them.",
          "Small props are punctuation, not the sentence.",
          "Details reward close viewing without filling every surface."
        ],
        [
          "Delete a pass",
          "Remove anything blocking movement, silhouettes or the focal point.",
          "Professional dressing includes subtraction.",
          "The final room is clearer after deleting props."
        ]
      ],
      "mistakes": [
        "Randomly scattering hundreds of props.",
        "Decorating every surface with equal density."
      ],
      "makeItYours": [
        "Make a clean/occupied version and abandoned version.",
        "Tell two different stories with the same furniture."
      ],
      "worksWhen": [
        "Navigation is unchanged.",
        "Prop density has hierarchy.",
        "The room communicates a use/story."
      ],
      "icon": "▦",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://pbs.twimg.com/media/EKuSnv7WwAA5P2W.jpg",
          "caption": "CONTROL — brutalist geometry, repeated ceiling lights and strong vertical scale turn a simple route into a memorable space.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy Entertainment — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Building Virtual Worlds",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/building-virtual-worlds-in-unreal-engine"
      }
    },
    {
      "id": "prop-clusters",
      "title": "Build Believable Prop Clusters",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "12 min",
      "difficulty": "Beginner",
      "summary": "Group props around believable actions instead of spacing objects evenly like a catalogue.",
      "uses": [
        "Set dressing",
        "Clustering",
        "Storytelling",
        "Composition"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Choose an action",
          "Decide what happened here: someone repaired equipment, ate lunch, packed boxes or fled.",
          "Props become meaningful when they relate to behaviour.",
          "You can describe the action in one sentence."
        ],
        [
          "Place the anchor",
          "Put the largest object first: desk, machine, crate stack or workbench.",
          "Clusters need a visual anchor.",
          "The grouping has one dominant mass."
        ],
        [
          "Add supporting objects",
          "Place only items that support the action and vary rotation/spacing naturally.",
          "Related objects imply use and history.",
          "Each prop has a reason to be there."
        ],
        [
          "Leave breathing room",
          "Keep empty space around the cluster.",
          "Negative space helps the cluster read as one idea.",
          "The group is readable from several metres away."
        ]
      ],
      "mistakes": [
        "Even spacing.",
        "Using ten different props when three communicate the idea."
      ],
      "makeItYours": [
        "Build a repeated cluster with small variation.",
        "Make one cluster that hints at danger without text."
      ],
      "worksWhen": [
        "The group suggests an activity.",
        "It has a dominant shape.",
        "It does not block gameplay."
      ],
      "icon": "●",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Building Virtual Worlds",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/building-virtual-worlds-in-unreal-engine"
      }
    },
    {
      "id": "decals-story",
      "title": "Use Decals for Wear & Story",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Add dirt, leaks, signage and damage where the environment would actually produce them.",
      "uses": [
        "Decals",
        "Material Domain",
        "Wear",
        "Story"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Choose a reason",
          "Pick a decal that has a cause: leak under pipe, dirt near doorway, warning sign, impact mark.",
          "Wear tells history when cause and location agree.",
          "You can explain why the decal exists."
        ],
        [
          "Create/place the Decal Actor",
          "Use a decal material or free decal asset and place a Decal Actor against the surface.",
          "Decals add local variation without unique texture sets.",
          "The decal projects only where intended."
        ],
        [
          "Match scale/orientation",
          "Resize the projection box and align it to the surface.",
          "Wrong-scale dirt instantly breaks believability.",
          "Edges and direction make physical sense."
        ],
        [
          "Control repetition",
          "Rotate, crop, tint or use a few variants rather than stamping the same mark everywhere.",
          "Repeated identical damage exposes the asset library.",
          "You cannot immediately spot a tiled stamp pattern."
        ],
        [
          "Read at game distance",
          "Walk away and judge whether the detail still contributes.",
          "Not every decal needs to be visible close-up only.",
          "Important signage/wear supports the scene at normal play distance."
        ]
      ],
      "mistakes": [
        "Blood/dirt everywhere with no story.",
        "Floating decals or giant projection volumes hitting multiple walls."
      ],
      "makeItYours": [
        "Use decals to guide the player subtly.",
        "Create a before/after clean-vs-damaged area."
      ],
      "worksWhen": [
        "Decals have causes.",
        "Projection is clean.",
        "They support story or readability."
      ],
      "icon": "✣",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Decal Materials",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/decal-materials-in-unreal-engine"
      }
    },
    {
      "id": "modular-kit",
      "title": "Build with a Modular Kit",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Assemble walls, corners, floors and trims on a grid so environments stay fast to edit and consistent.",
      "uses": [
        "Modular assets",
        "Grid snapping",
        "Pivots",
        "Reuse"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Inspect the kit",
          "Identify wall, corner, floor, doorway and trim pieces before building.",
          "Knowing the grammar prevents forcing pieces together badly.",
          "You can name the core pieces."
        ],
        [
          "Set grid snap",
          "Choose a grid size that matches the kit dimensions.",
          "Modular pieces only stay clean if placement shares a consistent unit.",
          "Edges meet without tiny gaps."
        ],
        [
          "Build one clean module",
          "Make a short corridor/room using only core pieces.",
          "Solve alignment before creating a whole level.",
          "Corners and floors join correctly."
        ],
        [
          "Create variation with dressing",
          "Reuse the same architecture but change props, materials, decals and light.",
          "Modularity saves modelling effort while art direction creates identity.",
          "Two spaces feel different without unique walls everywhere."
        ],
        [
          "Fix obvious repetition",
          "Break long repeating seams with trims, pillars, recesses or purposeful variation.",
          "Repetition is a design problem, not a reason to abandon modularity.",
          "The kit stays reusable but the level avoids copy-paste rhythm."
        ]
      ],
      "mistakes": [
        "Turning off snapping to fix every seam manually.",
        "Scaling modular pieces non-uniformly until texel density breaks."
      ],
      "makeItYours": [
        "Create two rooms from the same 5 pieces.",
        "Make a hero doorway from otherwise repeated parts."
      ],
      "worksWhen": [
        "Pieces align.",
        "The kit remains reusable.",
        "Repetition is controlled."
      ],
      "icon": "▥",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Building Virtual Worlds",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/building-virtual-worlds-in-unreal-engine"
      }
    },
    {
      "id": "basic-pbr-material",
      "title": "Make a Clean PBR Material",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Create a physically sensible surface using Base Color, Roughness, Metallic and Normal inputs.",
      "uses": [
        "Material Editor",
        "Base Color",
        "Roughness",
        "Metallic",
        "Normal"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Create M_Surface",
          "Create a Material asset and open the Material Editor.",
          "A clean named material gives you a controlled test surface.",
          "The graph opens with the Main Material node."
        ],
        [
          "Add colour/texture",
          "Connect a colour or texture to Base Color.",
          "Base Color describes the visible surface colour before lighting.",
          "The preview changes without emissive glow."
        ],
        [
          "Set roughness",
          "Use a scalar around 0.2–0.9 and watch highlight width.",
          "Roughness controls how sharp or broad reflections are.",
          "Low values look glossier; high values look matte."
        ],
        [
          "Set metallic correctly",
          "Use 0 for non-metals and 1 for actual metal as a beginner rule.",
          "Metallic is not a shininess slider.",
          "Plastic/concrete stay at 0; steel can be 1."
        ],
        [
          "Add normal detail",
          "Connect a normal texture if available and inspect under moving light.",
          "Normal detail changes how light reacts without adding geometry.",
          "Surface detail appears in highlights while silhouette stays unchanged."
        ]
      ],
      "mistakes": [
        "Using Metallic 0.5 to make plastic shiny.",
        "Making everything extremely rough or mirror glossy."
      ],
      "makeItYours": [
        "Create concrete, painted metal and plastic from the same texture set.",
        "Test the material under neutral and dramatic light."
      ],
      "worksWhen": [
        "Surface reacts plausibly to light.",
        "Metallic value matches material type.",
        "Roughness carries most of the 'wet/dry/shiny' feel."
      ],
      "icon": "◫",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b61c2e7b-8c11-4b70-b966-97b91ec1f4ef/materialeditorui.png",
          "caption": "Unreal Material Editor — material graphs control how a surface reacts to light rather than simply placing a flat colour on a mesh.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-material-editor-ui",
          "sourceTitle": "Epic Games — Material Editor UI",
          "kind": "epic"
        }
      ],
      "source": {
        "title": "Epic — Materials",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-materials"
      }
    },
    {
      "id": "material-instance",
      "title": "Create a Reusable Material Instance",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Expose useful parameters in a parent material and create fast variations without duplicating the graph.",
      "uses": [
        "Material Instance",
        "Parameters",
        "Parent material",
        "Iteration"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Parameterise colour",
          "Convert the Base Color value to a Vector Parameter named Tint.",
          "Parameters expose artist-friendly controls without editing the graph.",
          "Tint appears in a Material Instance."
        ],
        [
          "Parameterise roughness",
          "Create a Scalar Parameter named Roughness with a sensible default.",
          "Surface finish is a common variation control.",
          "You can tune roughness in the instance."
        ],
        [
          "Create MI_Surface_A",
          "Right-click the parent material and create a Material Instance.",
          "Instances inherit the compiled parent logic.",
          "The instance opens with parameter overrides."
        ],
        [
          "Make variations",
          "Create 3 instances with different tint/roughness values.",
          "One parent can provide a consistent material family.",
          "Changes to the parent propagate to all instances."
        ],
        [
          "Name by purpose",
          "Use names such as MI_Wall_Green rather than MI_02_finalFINAL.",
          "Asset naming is part of maintainability.",
          "Another student can identify each instance without opening it."
        ]
      ],
      "mistakes": [
        "Duplicating the whole material for every colour.",
        "Exposing every single node value as a parameter."
      ],
      "makeItYours": [
        "Add a texture parameter for surface variation.",
        "Create a clean/damaged family from one parent."
      ],
      "worksWhen": [
        "Instances change without editing parent logic.",
        "Parent updates propagate.",
        "Parameter names are understandable."
      ],
      "icon": "◇",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Material Instances",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-and-using-material-instances-in-unreal-engine"
      }
    },
    {
      "id": "wet-surface",
      "title": "Make a Wet Surface",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Turn a dry surface into a convincing wet version using roughness, darkening and controlled normal/reflection response.",
      "uses": [
        "Roughness",
        "Material Instance",
        "Lerp",
        "Mask"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Duplicate as an instance",
          "Start from an existing believable dry material and create a wet Material Instance where possible.",
          "Wetness should be a variation of the same surface, not a totally unrelated shader.",
          "Dry and wet versions share the parent."
        ],
        [
          "Lower roughness",
          "Reduce roughness enough to create broader visible reflections but avoid perfect mirror values.",
          "Water smooths micro-surface response.",
          "Highlights become stronger/sharper."
        ],
        [
          "Darken slightly",
          "Reduce/tint Base Color modestly rather than making it black.",
          "Many porous surfaces appear darker when wet.",
          "Surface still retains original material identity."
        ],
        [
          "Keep variation",
          "Use a mask/Lerp if only patches should be wet.",
          "Patchy wetness feels more believable than a uniformly lacquered world.",
          "Dry and wet regions blend cleanly."
        ],
        [
          "Test under grazing light",
          "Move a light/camera angle so reflections reveal the roughness change.",
          "Wetness is primarily read through light response.",
          "Wet areas are obvious from reflection behaviour, not just darker colour."
        ]
      ],
      "mistakes": [
        "Making wet concrete Metallic.",
        "Setting roughness to 0 everywhere."
      ],
      "makeItYours": [
        "Create puddle-edge variation with a mask.",
        "Drive wetness parameter between 0 and 1 for weather changes."
      ],
      "worksWhen": [
        "Wetness reads through reflections.",
        "Base material remains recognisable.",
        "No accidental metallic look."
      ],
      "icon": "≈",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Physically Based Materials",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/physically-based-materials-in-unreal-engine"
      }
    },
    {
      "id": "emissive-screen",
      "title": "Make a Glowing Screen / Sign Material",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Use Emissive Color to create a readable glowing display without destroying exposure.",
      "uses": [
        "Emissive",
        "Material Instance",
        "Bloom",
        "Texture mask"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Create a screen mask",
          "Use a texture or simple colour mask for the parts that should emit.",
          "A mask lets the frame stay non-emissive.",
          "Only the screen/logo region is selected."
        ],
        [
          "Multiply colour by intensity",
          "Multiply an emissive colour by a Scalar Parameter such as EmissiveStrength.",
          "Intensity needs tunable control.",
          "The instance exposes brightness."
        ],
        [
          "Connect Emissive Color",
          "Feed the result to Emissive Color while keeping Base Color sensible.",
          "Emissive adds self-illumination behaviour.",
          "The screen stays visible in low light."
        ],
        [
          "Tune bloom/exposure",
          "Raise intensity gradually and inspect with your scene's exposure settings.",
          "Blown-out bloom destroys UI/sign detail.",
          "Glow is visible but the graphic remains readable."
        ],
        [
          "Create instances",
          "Make red/green/blue or ON/OFF variants from the same parent.",
          "Instances make interactive signage easy to art-direct.",
          "Variants share one graph."
        ]
      ],
      "mistakes": [
        "Using huge emissive values to compensate for dark lighting.",
        "Making the entire mesh glow including frame/casing."
      ],
      "makeItYours": [
        "Create a flickering/damaged variant.",
        "Use Blueprint later to swap ON/OFF instances."
      ],
      "worksWhen": [
        "Glow is localised.",
        "Text/graphic remains readable.",
        "Brightness is parameterised."
      ],
      "icon": "✦",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Emissive Materials",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-the-emissive-material-input-in-unreal-engine"
      }
    },
    {
      "id": "three-point-room",
      "title": "Light a Room with Key, Fill & Accent",
      "category": "design-lighting",
      "designModule": "lighting",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Create readable hierarchy with one dominant light, supporting fill and a small accent instead of ten equal lights.",
      "uses": [
        "Point/Spot Lights",
        "Key light",
        "Fill",
        "Accent",
        "Exposure"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Lock exposure",
          "Add/adjust a Post Process Volume and keep exposure stable while learning.",
          "Auto exposure can hide whether your lighting actually works.",
          "Brightness no longer pumps dramatically when you turn."
        ],
        [
          "Choose the key",
          "Place one main motivated light from a window, lamp or ceiling source.",
          "A dominant light gives form and direction.",
          "The room has a clear light direction."
        ],
        [
          "Add gentle fill",
          "Use skylight/bounce-like supporting light to prevent important areas crushing to black.",
          "Fill protects readability without flattening contrast.",
          "Shadow detail is visible but still darker than the key side."
        ],
        [
          "Add one accent",
          "Use a small light to separate a focal prop, doorway or silhouette.",
          "Accent is for hierarchy, not general illumination.",
          "The focal element stands out without every object glowing."
        ],
        [
          "Toggle each light",
          "Switch lights on/off and identify its job.",
          "If you cannot describe a light's purpose, it may not be needed.",
          "Each light contributes a distinct function."
        ]
      ],
      "mistakes": [
        "Placing many equal-strength point lights.",
        "Judging mood while auto exposure keeps changing."
      ],
      "makeItYours": [
        "Rebuild the same setup warm/cold.",
        "Remove one light and preserve readability another way."
      ],
      "worksWhen": [
        "There is a clear dominant direction.",
        "Focal area reads.",
        "Shadows retain purposeful contrast."
      ],
      "icon": "☼",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — a tiny character silhouette, one strong pool of light and huge negative space create immediate hierarchy and tension.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Lighting the Environment",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/lighting-the-environment-in-unreal-engine"
      }
    },
    {
      "id": "horror-lighting",
      "title": "Light a Horror Corridor",
      "category": "design-lighting",
      "designModule": "lighting",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Use darkness, partial visibility and motivated pools of light to create tension without making navigation impossible.",
      "uses": [
        "Lighting",
        "Contrast",
        "Silhouette",
        "Horror",
        "Focal point"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Keep the route readable",
          "Start with enough neutral light to walk the corridor safely.",
          "Horror fails when the player is fighting the screen rather than the threat.",
          "You can navigate without memorising the route."
        ],
        [
          "Remove information selectively",
          "Darken side spaces/backgrounds while keeping floor edges and key doorframes readable.",
          "Fear comes from uncertainty, not total black.",
          "Near navigation remains visible while future information is reduced."
        ],
        [
          "Motivate pools of light",
          "Use ceiling lights, emergency lamps or practical fixtures rather than floating invisible brightness everywhere.",
          "Believable sources make stylised lighting feel grounded.",
          "Bright areas have visible reasons."
        ],
        [
          "Create one contrast event",
          "Add a brighter or coloured pool where you want anticipation.",
          "Contrast creates a destination and a before/after rhythm.",
          "The eye is pulled down the corridor."
        ],
        [
          "Test with movement",
          "Walk at normal speed and rotate the camera.",
          "Static beauty shots can hide unreadable gameplay.",
          "The mood survives actual play."
        ]
      ],
      "mistakes": [
        "Crushing every black level.",
        "Random coloured lights with no source."
      ],
      "makeItYours": [
        "Add one flickering source without making it annoying.",
        "Create a safe-lit room after the corridor for contrast."
      ],
      "worksWhen": [
        "Route remains usable.",
        "Future space is uncertain.",
        "Light sources feel motivated."
      ],
      "icon": "◐",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — a tiny character silhouette, one strong pool of light and huge negative space create immediate hierarchy and tension.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Lighting",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/lighting-the-environment-in-unreal-engine"
      }
    },
    {
      "id": "post-process-mood",
      "title": "Use Post Process for Mood",
      "category": "design-lighting",
      "designModule": "lighting",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Tune exposure, contrast, colour and vignette as a finishing layer after the lighting already works.",
      "uses": [
        "Post Process Volume",
        "Exposure",
        "Colour grading",
        "Vignette"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Create global volume",
          "Add a Post Process Volume and enable Infinite Extent (Unbound) for a global learning setup.",
          "A global volume gives a predictable baseline.",
          "The settings affect the whole test level."
        ],
        [
          "Stabilise exposure",
          "Set manual/controlled exposure appropriate to your project.",
          "You need a stable image before judging colour and contrast.",
          "Turning between bright/dark areas no longer wildly changes brightness."
        ],
        [
          "Adjust colour gently",
          "Change temperature/tint/contrast/saturation in small steps.",
          "Colour grade should unify lighting, not recolour every object.",
          "Materials still retain believable relationships."
        ],
        [
          "Use effects sparingly",
          "Add subtle vignette/bloom only if the image benefits.",
          "Heavy post effects quickly look like filters rather than art direction.",
          "The effect is noticeable when toggled off, not distracting when on."
        ],
        [
          "Before/after toggle",
          "Disable the volume and compare.",
          "A useful post pass should improve hierarchy/mood without being the only reason the scene works.",
          "Lighting is still functional without the grade."
        ]
      ],
      "mistakes": [
        "Using post process to fix badly lit geometry.",
        "Extreme saturation/vignette/bloom."
      ],
      "makeItYours": [
        "Create two presets: clinical and oppressive.",
        "Make a local Post Process Volume for one room."
      ],
      "worksWhen": [
        "Exposure is controlled.",
        "Grade supports the intended mood.",
        "Effects remain restrained."
      ],
      "icon": "◑",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Post Process",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/post-process-effects-in-unreal-engine"
      }
    },
    {
      "id": "create-landscape",
      "title": "Create Your First Landscape",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Create a correctly sized Unreal Landscape and understand the Manage / Sculpt / Paint workflow.",
      "uses": [
        "Landscape Mode",
        "Manage",
        "Sculpt",
        "Paint"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Open Landscape Mode",
          "Use the Modes dropdown and choose Landscape.",
          "Landscape has its own editing workflow separate from normal Static Mesh placement.",
          "Manage/Sculpt/Paint tabs are visible."
        ],
        [
          "Choose a modest size",
          "Create a small learning landscape rather than filling an enormous world.",
          "Smaller terrain is faster to iterate and harder to get lost in.",
          "The test landscape covers only the space you need."
        ],
        [
          "Create and save",
          "Create the Landscape and save the level before sculpting.",
          "Terrain edits can become extensive; save a known baseline.",
          "A Landscape Actor appears in the level."
        ],
        [
          "Switch tools",
          "Click Sculpt, then Paint and identify how each changes the same Landscape Actor.",
          "Manage handles structure, Sculpt changes shape, Paint changes material layers.",
          "You can explain the three roles without guessing."
        ]
      ],
      "mistakes": [
        "Creating a gigantic landscape for a tiny assignment.",
        "Sculpting before deciding where the player travels."
      ],
      "makeItYours": [
        "Create a tiny island instead of a flat field.",
        "Compare two component/resolution choices in a test project."
      ],
      "worksWhen": [
        "Landscape exists.",
        "You can move between Manage/Sculpt/Paint.",
        "Scale matches the intended playable area."
      ],
      "icon": "≈",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://img.edc-cdn.net/imgproxy/WhJevtNTVxIUT55gW9wM3-sl1hwqk0EEexbt5n9VtQc/filename%3A04-new-landscape-tool.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy80ZGIwODM4YS0yYmFhLTRmYzItYTNiNi1jNjBkNTJjOGVkM2MvMDQtbmV3LWxhbmRzY2FwZS10b29sLnBuZw",
          "caption": "Unreal Landscape tools — Manage creates the landscape, Sculpt shapes it and Paint applies landscape material layers.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine",
          "sourceTitle": "Epic Games — Landscape Quick Start",
          "kind": "epic"
        }
      ],
      "source": {
        "title": "Epic — Landscape Quick Start",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine"
      }
    },
    {
      "id": "sculpt-playable-terrain",
      "title": "Sculpt Playable Terrain",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Shape hills, valleys and routes with broad forms before adding noisy detail.",
      "uses": [
        "Sculpt",
        "Smooth",
        "Flatten",
        "Player route"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Mark the route",
          "Place temporary cubes/splines or sketch where the player starts, travels and finishes.",
          "Terrain should serve a route instead of becoming random mountains.",
          "Start and destination are identifiable."
        ],
        [
          "Use a huge brush",
          "Sculpt large ridges/valleys with low strength.",
          "Large forms create believable terrain hierarchy.",
          "The silhouette reads from far away."
        ],
        [
          "Flatten playable zones",
          "Use Flatten/Smooth around paths, combat spaces and building footprints.",
          "Gameplay needs predictable footing even in natural worlds.",
          "Player movement is stable where gameplay occurs."
        ],
        [
          "Add secondary variation",
          "Only after big shapes work, add smaller erosion-like changes and break straight lines.",
          "Detail should sit on top of strong landforms.",
          "Terrain does not look like noisy melted clay."
        ],
        [
          "Walk it",
          "Play from the ground and check slope, visibility and route length.",
          "Editor top view hides how exhausting/steep terrain feels.",
          "The intended route is traversable and readable."
        ]
      ],
      "mistakes": [
        "High-strength tiny brush scribbling.",
        "Making every direction equally mountainous."
      ],
      "makeItYours": [
        "Create a reveal where a hill hides then exposes the destination.",
        "Build an overlook that shows future route."
      ],
      "worksWhen": [
        "Large forms read.",
        "Playable surfaces work.",
        "Terrain controls reveal and navigation."
      ],
      "icon": "⌁",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Landscape Sculpt",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-sculpt-mode-in-unreal-engine"
      }
    },
    {
      "id": "landscape-paint",
      "title": "Paint Landscape Layers",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Blend grass, dirt and rock according to terrain use rather than painting random blobs.",
      "uses": [
        "Landscape Material",
        "Layer Blend",
        "Paint",
        "Surface logic"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Prepare layered material",
          "Use a landscape material with named layers such as Grass, Dirt and Rock.",
          "Paint mode needs material layers to target.",
          "Layer names appear in Paint mode."
        ],
        [
          "Create Layer Info assets",
          "Create/save Layer Info for each paint layer as required.",
          "Layer Info stores landscape paint data.",
          "Each layer can be selected and painted."
        ],
        [
          "Paint by rule",
          "Put dirt on paths/traffic, rock on exposed steep areas and grass on stable ground.",
          "Surface distribution looks believable when it follows terrain processes.",
          "Materials reinforce slope and use."
        ],
        [
          "Blend edges",
          "Use lower strength/large brushes so transitions are not spray-painted circles.",
          "Natural surfaces transition gradually unless there is a clear physical boundary.",
          "Layer edges feel integrated."
        ],
        [
          "Check from player height",
          "Walk the path and inspect texture scale/tiling.",
          "Top view hides giant texture scale problems.",
          "Surfaces hold up at gameplay distance."
        ]
      ],
      "mistakes": [
        "Random three-colour camouflage patterns.",
        "Texture scale that only looks okay from aerial view."
      ],
      "makeItYours": [
        "Create muddy route shoulders.",
        "Add a fourth material around water or cliffs."
      ],
      "worksWhen": [
        "Layers have logical placement.",
        "Transitions are controlled.",
        "Texture scale works in play."
      ],
      "icon": "▧",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Landscape Materials",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-materials-in-unreal-engine"
      }
    },
    {
      "id": "foliage-path",
      "title": "Dress a Readable Foliage Path",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Use foliage density, clusters and clear edges to make a natural route without turning the landscape into uniform grass soup.",
      "uses": [
        "Foliage Mode",
        "Density",
        "Clusters",
        "Sightlines"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Protect the route",
          "Mark the walking corridor and important sightlines before painting foliage.",
          "Vegetation must not erase gameplay communication.",
          "You know where foliage should be sparse."
        ],
        [
          "Build large clusters",
          "Place tree/rock groups in masses with open gaps between them.",
          "Nature often reads as clustered rhythm rather than uniform randomness.",
          "The scene has dense and sparse zones."
        ],
        [
          "Add ground layer",
          "Paint grass/small plants at a density that supports the biome.",
          "Ground detail connects larger assets to terrain.",
          "Terrain no longer looks bare but remains readable."
        ],
        [
          "Vary scale carefully",
          "Use modest random scale/rotation ranges.",
          "Variation hides repetition without creating absurd plant sizes.",
          "Repeated species feel less stamped."
        ],
        [
          "Trim sightlines",
          "Delete/erase foliage blocking landmarks, corners, combat reads or camera.",
          "Design has priority over procedural density.",
          "Important views remain open."
        ]
      ],
      "mistakes": [
        "Painting maximum density across the whole map.",
        "Trees growing through paths/buildings."
      ],
      "makeItYours": [
        "Make foliage density subtly guide the route.",
        "Create a clearing that becomes a visual reward."
      ],
      "worksWhen": [
        "Route edges are readable.",
        "Foliage has cluster rhythm.",
        "Landmarks stay visible."
      ],
      "icon": "♣",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Foliage Tool",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/foliage-tool-in-unreal-engine"
      }
    },
    {
      "id": "sequencer-first-shot",
      "title": "Create Your First Sequencer Shot",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Create a Level Sequence, add a Cine Camera Actor and animate one purposeful shot.",
      "uses": [
        "Sequencer",
        "Level Sequence",
        "Cine Camera",
        "Keyframes"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Create Level Sequence",
          "Use Cinematics > Add Level Sequence or create one in the Content Browser.",
          "Sequencer data lives in a Level Sequence asset.",
          "The Sequencer timeline opens."
        ],
        [
          "Add Cine Camera",
          "Create/add a Cine Camera Actor and bind it to the sequence.",
          "Cine Camera provides film-style camera controls.",
          "Camera track appears in Sequencer."
        ],
        [
          "Frame the end first",
          "Move the camera to the strongest final composition and key its transform.",
          "Knowing the destination prevents aimless camera movement.",
          "The end frame communicates the intended subject."
        ],
        [
          "Set the start",
          "Move earlier in time, place a different useful start frame and key it.",
          "Two keyframes create movement; composition gives that movement purpose.",
          "Playback travels cleanly from start to end."
        ],
        [
          "Trim duration",
          "Shorten the shot until it communicates the idea without lingering.",
          "Most beginner shots are longer than the information requires.",
          "The shot feels deliberate rather than like a camera demo."
        ]
      ],
      "mistakes": [
        "Making a 20-second pan to show a 3-second idea.",
        "Animating the camera before deciding what the shot means."
      ],
      "makeItYours": [
        "Do the same reveal with a static cut instead of movement.",
        "Animate focus distance subtly."
      ],
      "worksWhen": [
        "Sequence plays.",
        "Camera starts/ends on useful frames.",
        "Duration matches the information."
      ],
      "icon": "▶",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://images.purexbox.com/bad222687593e/hellblade-2-will-display-with-black-bars-outside-of-ultrawide-mode-3.large.jpg",
          "caption": "Senua’s Saga: Hellblade II — controlled framing, motivated firelight and restrained colour push the eye toward the confrontation.",
          "sourceUrl": "https://www.xbox.com/en-GB/games/senuas-saga-hellblade-II",
          "sourceTitle": "Xbox — Senua’s Saga: Hellblade II",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Sequencer Basics",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-make-movies-in-unreal-engine"
      }
    },
    {
      "id": "camera-cuts",
      "title": "Make Camera Cuts in Sequencer",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Cut between multiple cameras so each shot adds new information.",
      "uses": [
        "Camera Cuts",
        "Sequencer",
        "Shot size",
        "Editing"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Create 3 cameras",
          "Frame a wide, medium and detail/reaction angle around the same event.",
          "Shot size changes information and emotional distance.",
          "Each camera shows something meaningfully different."
        ],
        [
          "Add Camera Cuts track",
          "Add a Camera Cuts track in Sequencer.",
          "The cut track decides which camera the audience sees.",
          "The track is visible and ready for camera sections."
        ],
        [
          "Assign cameras",
          "Create sections for each camera in a clear order.",
          "Editing is choosing when information changes.",
          "Playback switches camera at section boundaries."
        ],
        [
          "Cut on purpose",
          "Move a cut to the moment a new action, reveal or reaction starts.",
          "Cuts feel natural when motivated by new information.",
          "The sequence does not cut arbitrarily every two seconds."
        ],
        [
          "Check screen direction",
          "Ensure important movement does not confusingly flip direction without reason.",
          "Continuity helps viewers understand space.",
          "The action remains readable across cuts."
        ]
      ],
      "mistakes": [
        "Using five cameras that all show the same composition.",
        "Cutting constantly because it feels 'cinematic'."
      ],
      "makeItYours": [
        "Make a tense version with longer holds and an energetic version with faster cuts.",
        "Hide information in the wide then reveal it in a detail shot."
      ],
      "worksWhen": [
        "Each cut adds information.",
        "Screen direction remains readable.",
        "Timing feels intentional."
      ],
      "icon": "✂",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Camera Cuts",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-camera-cuts-using-sequencer-in-unreal-engine"
      }
    },
    {
      "id": "reveal-shot",
      "title": "Make a Slow Reveal Shot",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Use foreground occlusion, camera movement and timing to reveal a subject rather than showing it immediately.",
      "uses": [
        "Composition",
        "Camera movement",
        "Occlusion",
        "Reveal"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Hide the subject",
          "Frame the start so a wall, doorway, foreground prop or darkness obscures part/all of the subject.",
          "A reveal requires withheld information.",
          "The start frame creates a question."
        ],
        [
          "Choose the reveal path",
          "Move laterally/forward so the subject gradually becomes visible.",
          "Simple movement is easier to read than orbiting everywhere.",
          "The subject appears progressively."
        ],
        [
          "Key only what matters",
          "Use as few transform keys as necessary and smooth the motion.",
          "Over-keyed cameras wobble.",
          "Movement feels controlled."
        ],
        [
          "End on composition",
          "Stop at a frame where the subject and surrounding context read clearly.",
          "The payoff is a strong final image.",
          "The final frame explains what was hidden."
        ],
        [
          "Add sound before sight",
          "Optional: start a sound cue shortly before the visual reveal.",
          "Audio can create anticipation and direction.",
          "The audience expects something before seeing it."
        ]
      ],
      "mistakes": [
        "Moving too slowly for the amount of information.",
        "Revealing a subject that was already fully visible."
      ],
      "makeItYours": [
        "Reveal an objective instead of a monster.",
        "Reverse it: subject disappears behind foreground cover."
      ],
      "worksWhen": [
        "Information is initially withheld.",
        "Movement reveals it cleanly.",
        "Final frame is intentional."
      ],
      "icon": "◒",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Cinematic workflows",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/cinematic-workflow-guides-and-examples-in-unreal-engine"
      }
    },
    {
      "id": "trigger-cutscene",
      "title": "Trigger a Cutscene & Return to Gameplay",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Play a Level Sequence from gameplay and restore control cleanly when it ends.",
      "uses": [
        "Level Sequence",
        "Trigger",
        "Player input",
        "Gameplay transition"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Place sequence in level",
          "Make sure the Level Sequence Actor/asset is available in the gameplay level.",
          "Gameplay needs a reference to the sequence you want to play.",
          "The sequence previews in the level."
        ],
        [
          "Choose a trigger",
          "Use a Trigger Box, interaction or scripted event as the start condition.",
          "Cinematics should happen because of game state, not only editor playback.",
          "The trigger fires once at the intended moment."
        ],
        [
          "Play sequence",
          "Use the sequence player/actor to start playback.",
          "The game now controls when Sequencer runs.",
          "Entering/interacting starts the cutscene."
        ],
        [
          "Handle player control",
          "Disable or appropriately limit input/camera if the sequence requires it.",
          "Player and cinematic camera fighting each other breaks presentation.",
          "Inputs do not cause accidental movement during the sequence."
        ],
        [
          "Restore state",
          "On sequence finished, restore input/camera and continue the objective.",
          "A cinematic must hand control back reliably.",
          "The player can immediately continue playing after the final frame."
        ]
      ],
      "mistakes": [
        "Never restoring input.",
        "Triggering the cutscene repeatedly every overlap frame."
      ],
      "makeItYours": [
        "Let the player skip the sequence.",
        "Use the cutscene to open/reveal a route."
      ],
      "worksWhen": [
        "Trigger occurs once.",
        "Sequence takes control cleanly.",
        "Gameplay resumes correctly."
      ],
      "icon": "↻",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Cinematics and Sequencer",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/cinematics-and-sequencer-in-unreal-engine"
      }
    },
    {
      "id": "ambient-zone",
      "title": "Build Layered Ambient Sound",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Create an ambience from a quiet bed plus a few sparse details rather than one obvious looping track.",
      "uses": [
        "Ambient Sound",
        "Sound Wave",
        "Loop",
        "Layering"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Choose the bed",
          "Import/use a subtle loop such as room tone, wind or machinery.",
          "The bed establishes constant space without demanding attention.",
          "Loop is not obviously distracting."
        ],
        [
          "Place in space",
          "Use Ambient Sound/Audio Component and decide whether the bed is 2D or localised.",
          "Some ambience belongs to a whole area; some belongs to a source.",
          "Movement changes the sound only when appropriate."
        ],
        [
          "Add sparse details",
          "Place occasional drips, creaks, birds, distant impacts or electrical noises.",
          "Sparse variation prevents the loop from feeling synthetic.",
          "You hear changing detail over time."
        ],
        [
          "Balance levels",
          "Lower the bed until gameplay/focal sounds remain dominant.",
          "Ambience should support rather than mask important cues.",
          "Footsteps/interactions stay clearly audible."
        ],
        [
          "Walk the boundary",
          "Enter/leave the area and listen for abrupt starts/stops.",
          "Audio transitions reveal bad setup immediately.",
          "The ambience enters/exits naturally."
        ]
      ],
      "mistakes": [
        "One loud 30-second loop carrying the entire scene.",
        "Every ambient emitter at full volume."
      ],
      "makeItYours": [
        "Create a calm and danger version of the same area.",
        "Add a distant sound that hints at an unseen location."
      ],
      "worksWhen": [
        "Loop is not obvious.",
        "Details vary.",
        "Gameplay cues remain clear."
      ],
      "icon": "♪",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — a tiny character silhouette, one strong pool of light and huge negative space create immediate hierarchy and tension.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Audio in UE5",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/audio-in-unreal-engine-5"
      }
    },
    {
      "id": "sound-attenuation",
      "title": "Make Sound Fade with Distance",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Use attenuation so a sound has believable range, direction and spatial presence.",
      "uses": [
        "Sound Attenuation",
        "3D audio",
        "Falloff",
        "Spatialisation"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Create attenuation asset",
          "Create a Sound Attenuation asset or enable attenuation settings on the sound source.",
          "Attenuation defines how audio behaves across distance.",
          "Attenuation settings are available."
        ],
        [
          "Set inner radius",
          "Choose the distance where full volume should remain.",
          "A sound source needs a close-range zone before falloff.",
          "Standing near the source keeps stable volume."
        ],
        [
          "Set falloff distance",
          "Choose how far beyond the inner radius the sound fades.",
          "Falloff communicates distance and scale.",
          "Walking away creates a smooth reduction."
        ],
        [
          "Enable spatialisation",
          "Use spatialisation so stereo/headphone playback indicates direction when appropriate.",
          "Directional hearing helps navigation.",
          "Turning away/from source changes perceived direction."
        ],
        [
          "Test in motion",
          "Circle the source and approach from different rooms.",
          "Static preview cannot prove spatial behaviour.",
          "Direction and distance make sense during play."
        ]
      ],
      "mistakes": [
        "A tiny falloff that makes sound pop on/off.",
        "Using 3D attenuation for UI/music that should remain non-spatial."
      ],
      "makeItYours": [
        "Make a machine audible through a corridor before it is visible.",
        "Compare natural vs deliberately exaggerated gameplay range."
      ],
      "worksWhen": [
        "Volume changes smoothly.",
        "Direction is useful.",
        "Range matches the source."
      ],
      "icon": "◉",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Sound Attenuation",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine"
      }
    },
    {
      "id": "randomised-soundcue",
      "title": "Randomise Repeating Sounds",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Build a Sound Cue that avoids identical repeated footsteps, impacts or environmental details.",
      "uses": [
        "Sound Cue",
        "Random node",
        "Modulator",
        "Variation"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Create Sound Cue",
          "Create a Sound Cue and open the node graph.",
          "Sound Cues combine Sound Waves with playback behaviour.",
          "The cue graph opens."
        ],
        [
          "Add several variations",
          "Drag 3–5 similar Sound Waves into the graph.",
          "Real repeated actions rarely produce an identical waveform.",
          "Multiple samples are available to choose from."
        ],
        [
          "Add Random node",
          "Connect samples into a Random node then to Output.",
          "Random selection breaks obvious repetition.",
          "Repeated preview chooses different samples."
        ],
        [
          "Add small pitch/volume variation",
          "Use a Modulator or equivalent restrained randomisation.",
          "Tiny variation multiplies perceived variety.",
          "Repeats feel less machine-gunned without sounding cartoonish."
        ],
        [
          "Use cue in gameplay",
          "Replace the single Sound Wave reference with the Sound Cue.",
          "The variation now occurs every time the event plays.",
          "Repeated actions no longer sound identical."
        ]
      ],
      "mistakes": [
        "Pitch variation so extreme it changes the object identity.",
        "Using only one sample and expecting Random to help."
      ],
      "makeItYours": [
        "Make separate footstep cues for two surfaces.",
        "Use a delay/random branch for distant ambience."
      ],
      "worksWhen": [
        "Repeated playback varies.",
        "Variation remains believable.",
        "Cue is used by the actual gameplay event."
      ],
      "icon": "⤨",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Sound Cue Editor",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-cue-editor-in-unreal-engine"
      }
    },
    {
      "id": "reverb-space",
      "title": "Give a Space Reverb",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Use an Audio Volume/reverb setup so a large hall, tunnel or room sounds like its physical size.",
      "uses": [
        "Audio Volume",
        "Reverb",
        "Room size",
        "Transition"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Choose the space",
          "Pick a room where acoustic size should be obvious: hall, tunnel, bathroom, chamber.",
          "Reverb should communicate architecture.",
          "The chosen space has a clear acoustic idea."
        ],
        [
          "Add audio/reverb volume",
          "Place the relevant Audio Volume around the room and assign/tune reverb settings.",
          "Volumes let location change the acoustic treatment.",
          "Entering the volume changes the sound treatment."
        ],
        [
          "Tune decay/wet amount",
          "Adjust so the tail suggests room size without washing out all sound.",
          "Longer/louder reverb implies larger/more reflective spaces but can destroy clarity.",
          "Speech/gameplay cues remain understandable."
        ],
        [
          "Test doorway transition",
          "Walk repeatedly across the boundary.",
          "Abrupt reverb jumps reveal poor blending/volume placement.",
          "The acoustic change feels tied to entering the room."
        ],
        [
          "Compare dry/wet",
          "Toggle the effect and listen with footsteps or a short impact.",
          "A/B testing makes the design contribution obvious.",
          "The room feels physically different with reverb enabled."
        ]
      ],
      "mistakes": [
        "Huge cathedral reverb in a tiny room.",
        "Wet mix so strong important gameplay sounds smear together."
      ],
      "makeItYours": [
        "Make adjacent rooms acoustically different.",
        "Use reverb as a horror clue before the room is seen."
      ],
      "worksWhen": [
        "Reverb matches space size/material.",
        "Transition is controlled.",
        "Important sounds stay readable."
      ],
      "icon": "⌁",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Audio Engine",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/audio-engine-overview-in-unreal-engine"
      }
    },
    {
      "id": "scene-polish-pass",
      "title": "Do a Five-Pass Scene Polish",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "25 min",
      "difficulty": "Beginner",
      "summary": "Polish an environment by fixing the biggest design problems in a deliberate order rather than adding random detail.",
      "uses": [
        "Critique",
        "Readability",
        "Consistency",
        "Set dressing",
        "Lighting"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Capture BEFORE",
          "Take a representative gameplay screenshot before touching anything.",
          "Without a baseline, students mistake activity for improvement.",
          "You have an honest comparison frame."
        ],
        [
          "Pass 1: readability",
          "Fix route clarity, focal point, collision and anything blocking the player.",
          "Gameplay problems outrank decorative problems.",
          "The level is easier to understand."
        ],
        [
          "Pass 2: scale/composition",
          "Fix objects that feel wrong-sized, tangencies and awkward empty/crowded areas.",
          "Composition benefits from proportion before detail.",
          "The image has stronger big shapes."
        ],
        [
          "Pass 3: materials/lighting",
          "Fix inconsistent roughness, exposure, colour and lights without purpose.",
          "Surface and lighting consistency creates cohesion.",
          "The scene feels like one art direction."
        ],
        [
          "Pass 4: story/detail",
          "Add only details that support use, age, story or focal hierarchy.",
          "Detail now lands on a strong base.",
          "Small props no longer carry the whole scene."
        ],
        [
          "Pass 5: delete",
          "Remove anything redundant, noisy or expensive with little payoff.",
          "Subtraction is a real polish tool.",
          "Final scene is clearer than the 'everything on' version."
        ]
      ],
      "mistakes": [
        "Adding Niagara and bloom before fixing layout.",
        "Never taking a before shot."
      ],
      "makeItYours": [
        "Ask someone else to choose the three biggest problems first.",
        "Do a 20-minute timed polish and compare impact."
      ],
      "worksWhen": [
        "Major issues were prioritised.",
        "Before/after shows clear improvement.",
        "Final scene has less noise, not just more content."
      ],
      "icon": "✓",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://pbs.twimg.com/media/EKuSnv7WwAA5P2W.jpg",
          "caption": "CONTROL — brutalist geometry, repeated ceiling lights and strong vertical scale turn a simple route into a memorable space.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy Entertainment — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Visuals / Rendering",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designing-visuals-rendering-and-graphics-in-unreal-engine"
      }
    },
    {
      "id": "performance-viewmodes",
      "title": "Use View Modes to Find Problems",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "18 min",
      "difficulty": "Beginner",
      "summary": "Use Unreal's diagnostic view modes and stats to spot expensive or visually problematic areas instead of guessing.",
      "uses": [
        "View Modes",
        "Shader Complexity",
        "Light Complexity",
        "Stats",
        "Profiling"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Record normal view",
          "Stand at a representative gameplay camera and note current performance/visual issue.",
          "Profiling needs a repeatable location.",
          "You can return to the same test frame."
        ],
        [
          "Open diagnostic view modes",
          "Use relevant View Mode options such as Shader Complexity or lighting/debug views available in your project.",
          "Debug views expose costs invisible in beauty view.",
          "The viewport changes to diagnostic information."
        ],
        [
          "Find the hotspot",
          "Identify one material, overdraw area, light cluster or effect that stands out.",
          "Fixing one measurable hotspot is better than random optimisation.",
          "You can point to a specific offender."
        ],
        [
          "Simplify one thing",
          "Reduce unnecessary transparency/material complexity/light overlap/effect density as appropriate.",
          "Optimisation is a design trade-off.",
          "The visual result still supports the scene."
        ],
        [
          "Compare again",
          "Return to the same camera/view and compare.",
          "A repeatable A/B confirms whether the change helped.",
          "The diagnostic issue is reduced without ruining the shot."
        ]
      ],
      "mistakes": [
        "Deleting half the scene before measuring.",
        "Assuming high poly count is always the only problem."
      ],
      "makeItYours": [
        "Compare a cheap and expensive material.",
        "Test a fog/VFX-heavy scene from several camera positions."
      ],
      "worksWhen": [
        "A specific issue is identified.",
        "A targeted change is made.",
        "Visual intention is preserved."
      ],
      "icon": "▥",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — View Modes",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/view-modes-in-unreal-engine"
      }
    },
    {
      "id": "lod-nanite-check",
      "title": "Check Mesh LOD / Nanite Use",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Inspect how environment meshes behave at distance and avoid wasting detail where the player cannot see it.",
      "uses": [
        "Static Mesh",
        "LOD",
        "Nanite",
        "Distance"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Choose a repeated mesh",
          "Pick a rock, prop or environment mesh used many times.",
          "Repeated assets multiply performance cost and visual popping.",
          "You know which asset is being tested."
        ],
        [
          "Inspect mesh settings",
          "Open the Static Mesh editor and check Nanite/LOD setup appropriate to that asset/project.",
          "Modern UE projects may use Nanite, traditional LODs or both depending on content/platform.",
          "You can identify the mesh's current strategy."
        ],
        [
          "Test distance",
          "Place copies near/mid/far and move the camera.",
          "LOD decisions are judged in motion, not only asset editor.",
          "No distracting pop or disappearing silhouette occurs."
        ],
        [
          "Keep silhouette priority",
          "Do not simplify so aggressively that important shape changes.",
          "Players notice silhouette changes more than tiny surface detail.",
          "Far mesh still communicates the same object."
        ],
        [
          "Test target hardware",
          "Use the project's actual quality/platform needs rather than assuming desktop maximum.",
          "Optimisation is context-sensitive.",
          "The chosen setup matches the class/project target."
        ]
      ],
      "mistakes": [
        "Enabling features without understanding project/platform support.",
        "Ignoring materials/overdraw because the mesh uses Nanite."
      ],
      "makeItYours": [
        "Compare a hero prop vs background prop treatment.",
        "Test foliage/rocks where repetition is high."
      ],
      "worksWhen": [
        "Distance behaviour is stable.",
        "Silhouette holds.",
        "Strategy matches project needs."
      ],
      "icon": "△",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Nanite",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/nanite-virtualized-geometry-in-unreal-engine"
      }
    },
    {
      "id": "portfolio-shot",
      "title": "Take a Strong Portfolio Screenshot",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Present environment work with a clean camera, composition and useful supporting breakdown instead of one random editor screenshot.",
      "uses": [
        "Presentation",
        "Composition",
        "High Resolution Screenshot",
        "Breakdown"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Choose the story shot",
          "Pick the angle that best communicates the environment's idea, route or mood.",
          "The hero image should sell the work before technical details.",
          "The scene reads immediately."
        ],
        [
          "Clean the frame",
          "Hide editor clutter/UI where appropriate and remove temporary debug actors.",
          "Presentation affects how work is judged.",
          "Nothing accidental dominates the image."
        ],
        [
          "Frame deliberately",
          "Use foreground/midground/background, focal hierarchy and sensible field of view.",
          "A portfolio screenshot is still composition.",
          "The eye has a clear path through the frame."
        ],
        [
          "Capture a breakdown too",
          "Take one technical shot: blockout, lighting-only, material spheres, wireframe or before/after.",
          "Breakdowns prove process rather than only final beauty.",
          "Viewer can see how the scene was built."
        ],
        [
          "Add concise caption",
          "Write what you did and what you were responsible for.",
          "Recruiters/teachers need authorship and process clarity.",
          "Caption explains contribution without an essay."
        ]
      ],
      "mistakes": [
        "Only showing cinematic close-ups that hide the level.",
        "Leaving gizmos/selection outlines in final images."
      ],
      "makeItYours": [
        "Create a 3-image set: hero, gameplay, breakdown.",
        "Re-shoot the same scene for horror vs adventure tone."
      ],
      "worksWhen": [
        "Hero image reads.",
        "No accidental UI/debug clutter.",
        "At least one process/breakdown image exists."
      ],
      "icon": "▣",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic — Screenshots",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/taking-screenshots-in-unreal-engine"
      }
    }
  ]
};
