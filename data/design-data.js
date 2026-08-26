window.UE5_DESIGN_DATA = {
  "version": "3.19.0",
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
        "route-readability",
        "decision-point-test",
        "spatial-pacing"
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
          "Ask another student to play without guidance and record one change.",
          "Run a silent playtest: do not explain anything; record the first hesitation or wrong turn and revise it."
        ],
        "evidence": [
          "Top-down screenshot of the blockout.",
          "Three player-height screenshots showing route decisions.",
          "One before/after change from playtesting.",
          "A short playtest note showing what the tester misunderstood and what you changed."
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapter 4 — Designing Engaging Game Environments.",
      "deepDives": [
        {
          "title": "Function before beauty",
          "body": "A level has to work from the player camera before art can make it impressive. Route width, sightlines, cover, traversal and decision points are the foundation; decoration should reinforce them rather than hide them.",
          "exercise": "Switch the viewport to Unlit and temporarily hide decorative props. Can a new player still understand the primary route?"
        },
        {
          "title": "Guide without grabbing the player",
          "body": "Strong spaces use openings, landmarks, lighting, floor language and visible depth to suggest where to go. The goal is guidance that preserves curiosity rather than constant arrows, camera grabs or objective pings.",
          "exercise": "At one decision point, remove every UI hint. Improve the scene until a tester still chooses the intended route."
        },
        {
          "title": "Story comes after spatial logic",
          "body": "Environmental clues become powerful once the player already understands the space. A broken bridge, barricade, footprints or flickering light can explain what happened and suggest what comes next without damaging playability.",
          "exercise": "Add one environmental clue that communicates both story and route information at the same time."
        }
      ],
      "proHabits": [
        "Playtest at player height, not only from the editor camera.",
        "Keep a clean greybox version so art changes can be compared against the functional layout.",
        "Watch testers silently before explaining what you intended.",
        "Record one layout change after every external playtest."
      ],
      "critiqueQuestions": [
        "What decision is the player making in this space?",
        "What tells them where the valid route continues?",
        "What information are you deliberately withholding until they move?",
        "Could any prop, wall or effect be removed without losing the design?",
        "Does the layout still work with materials and fancy lighting turned off?"
      ],
      "engineNote": "UE5.8 still supports rapid in-editor blockout and Modeling Mode workflows, but the design test remains engine-agnostic: make the space readable before investing in detail.",
      "engineUrl": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-quick-start-in-unreal-engine?lang=en-US"
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
        "modular-kit",
        "story-vignette",
        "hero-asset"
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
          "Remove 20% of the props and keep only the ones helping composition/story.",
          "Create one deliberate story vignette and one unique hero detail that breaks modular repetition."
        ],
        "evidence": [
          "Reference board screenshot.",
          "Clean blockout before dressing.",
          "Final wide shot plus two storytelling details.",
          "A sentence explaining what the player should infer.",
          "Close-up of the story vignette with a one-sentence interpretation."
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 4 and 8 — environment design and environmental storytelling.",
      "deepDives": [
        {
          "title": "Build story vignettes, not prop soup",
          "body": "Props should imply actions, people and events. A tipped chair beside a dropped tool tells more than twenty randomly scattered objects. Group details into small readable stories that reward players who look closer.",
          "exercise": "Create one three-to-five-prop vignette that implies something happened less than ten minutes ago."
        },
        {
          "title": "Big → medium → small is hierarchy",
          "body": "Large shapes establish use and composition, medium assets explain function, and small details add specificity. Starting with tiny clutter makes the scene noisy before it has structure.",
          "exercise": "Take three screenshots after the big, medium and small passes. Check whether each pass adds information rather than simply density."
        },
        {
          "title": "Modularity needs exceptions",
          "body": "Reusable kits give speed and consistency, but repetition becomes obvious. Plan grid-friendly walls, floors and door pieces, then add a few distinctive hero assets, damage states or dressing variations to create memorable locations.",
          "exercise": "Build two visibly different rooms using the same small modular kit and only one unique hero asset in each."
        }
      ],
      "proHabits": [
        "Collect references for function, wear and construction before placing props.",
        "Use consistent dimensions and pivots for modular pieces.",
        "Name reusable assemblies clearly so teammates can find them.",
        "Do a subtraction pass: remove detail that competes with gameplay or story."
      ],
      "critiqueQuestions": [
        "Can the player tell what this space is used for?",
        "Which prop cluster tells the clearest story?",
        "Where is repetition from modular assets becoming obvious?",
        "Are wear, grime and decals placed where use or weather would actually cause them?",
        "Is visual density helping the route or obscuring it?"
      ],
      "engineNote": "UE5.8 Modeling Mode can create/edit geometry, UVs, collision and baked textures in-editor. It is useful for rapid environment iteration, but clean modular planning still matters.",
      "engineUrl": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-in-unreal-engine?lang=en-US"
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
        "emissive-screen",
        "material-cost-check",
        "translucency-budget"
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
          "Test all four under the same neutral light, then under your scene lighting.",
          "Use Shader Complexity / Material Stats to inspect one material and make one evidence-based cost decision."
        ],
        "evidence": [
          "Master graph screenshot.",
          "Four instance thumbnails or material spheres.",
          "One in-level shot showing different surfaces.",
          "Short note explaining which parameter creates the biggest visual change.",
          "Screenshot of the material performance check and the change you made (or justified keeping)."
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 10–11 — profiling material cost and real-time rendering.",
      "deepDives": [
        {
          "title": "Surface response beats node count",
          "body": "A convincing material starts with believable base colour, roughness, metallic behaviour and normals. A huge graph cannot rescue physically confused values. Judge the surface under simple neutral lighting before adding stylisation.",
          "exercise": "Put four material spheres beside each other and identify each surface using lighting response alone, without relying on colour."
        },
        {
          "title": "Variation should come from parameters",
          "body": "Material Instances let one parent material create many controlled variations without duplicating graphs. Expose only useful controls such as tint, roughness, normal strength and grime amount so iteration stays fast and readable.",
          "exercise": "Create four instances from one parent and prove there are no duplicated parent graphs."
        },
        {
          "title": "Materials have a screen cost",
          "body": "Expensive maths, many texture samples, refraction and layered translucency can make a beautiful surface disproportionately costly. Profile the material rather than assuming Nanite or a fast GPU makes every shader free.",
          "exercise": "Use Shader Complexity on one scene, find the most expensive visible surface and simplify one part of it without ruining the look."
        }
      ],
      "proHabits": [
        "Keep master graphs labelled and grouped by purpose.",
        "Prefer instances over near-identical duplicated materials.",
        "Check translucent layers for overdraw.",
        "Profile on the target college hardware rather than judging cost from graph size alone."
      ],
      "critiqueQuestions": [
        "Does the surface respond to light like the material it represents?",
        "Which parameters genuinely need to be exposed?",
        "Is variation masking repetition or just adding noise?",
        "Where does transparency stack on screen?",
        "Can you make the same visual point with a cheaper shader?"
      ],
      "engineNote": "Epic’s UE5.8 guidance still recommends using Material Stats/Shader Complexity to verify material cost; stacked translucency and expensive per-pixel work can become major GPU costs.",
      "engineUrl": "https://dev.epicgames.com/documentation/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine"
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
        "silent-hill-fog",
        "lumen-mood-pass",
        "time-of-day-contrast"
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
          "Ask someone which mood each shot communicates before showing labels.",
          "Compare at least two scalability/quality settings and protect the focal point/readability in both."
        ],
        "evidence": [
          "Three matching camera shots.",
          "Lighting-only comparison with geometry unchanged.",
          "One sentence explaining how contrast/fog changed information.",
          "Side-by-side quality comparison with one sentence about the trade-off."
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 1–2 — Lumen, atmosphere and visual storytelling.",
      "deepDives": [
        {
          "title": "Artistic intent is allowed",
          "body": "Realistic lighting is not automatically good lighting. Contrast, colour, exposure and fog can be pushed when that supports the intended emotion and gameplay. The test is whether the scene remains coherent and readable.",
          "exercise": "Make one physically believable version and one deliberately stylised version of the same shot. Explain which better serves the scene."
        },
        {
          "title": "Atmosphere works in layers",
          "body": "Fog, ambient fill, particles, colour grading and directional light each solve different visual problems. Layer them with restraint so foreground, middle distance and background separate clearly instead of becoming one grey wall.",
          "exercise": "Build three depth bands in a scene and check that the player can identify a foreground obstacle, mid-distance goal and obscured background."
        },
        {
          "title": "Lighting has a budget",
          "body": "Lumen gives fast dynamic iteration, but reflections, emissive contribution, volumetrics and lighting quality all have a cost. Design the look, then test scalability and profile before the scene becomes dependent on settings the target machine cannot afford.",
          "exercise": "Compare the scene at two scalability levels and record the first lighting feature whose visual change affects gameplay readability."
        }
      ],
      "proHabits": [
        "Lock or intentionally control exposure before judging light balance.",
        "Use motivated light sources where possible, then add cheats only with a reason.",
        "Check lighting from the actual gameplay camera and movement route.",
        "Test Lumen/volumetrics at more than one scalability level."
      ],
      "critiqueQuestions": [
        "What should the player notice first and which light creates that hierarchy?",
        "Is darkness creating tension or merely hiding navigation?",
        "Does fog control information distance deliberately?",
        "Are emissive surfaces helping the composition or flooding GI?",
        "Does the mood survive on the hardware students will actually use?"
      ],
      "engineNote": "UE5.8 adds a Medium Lumen quality tier aimed at lower-end PCs/handhelds. Current Epic guidance emphasises scalability budgets rather than assuming one high-end lighting setup fits every target.",
      "engineUrl": "https://dev.epicgames.com/documentation/unreal-engine/lumen-performance-guide-for-unreal-engine"
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
        "foliage-path",
        "pcg-safe-route",
        "weather-readability"
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
          "Place a landmark visible early and reveal it again later.",
          "Add one authored landmark and protect the playable route from procedural/foliage clutter."
        ],
        "evidence": [
          "Top-down route plan.",
          "Landscape in untextured/sculpt stage.",
          "Final route and landmark shots.",
          "One example where foliage was removed for readability.",
          "Screenshot showing the landmark and clear route from player height."
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapter 6 — responsive/adaptive worlds and procedural environment workflows.",
      "deepDives": [
        {
          "title": "Terrain is gameplay geometry",
          "body": "A beautiful landscape still needs readable routes, useful elevation changes, controlled sightlines and traversal-friendly slopes. Sculpt around movement and decisions first; scenic noise comes later.",
          "exercise": "Run the route with foliage hidden. If the terrain alone does not communicate where to go, fix the terrain before dressing."
        },
        {
          "title": "Procedural tools should serve authored intent",
          "body": "Auto-materials and procedural placement can cover huge areas quickly, but rules need constraints. Slope, height, exclusion zones and density should create a believable base that designers can then art-direct around important routes and landmarks.",
          "exercise": "Create one procedural rule and one exclusion zone that protects a gameplay route from unwanted placement."
        },
        {
          "title": "World state can change the same place",
          "body": "Time of day, weather, fog and environmental states can transform visibility and mood without rebuilding the level. Treat those changes as gameplay/design states, not only visual filters.",
          "exercise": "Create day and storm versions of one viewpoint and list one gameplay consequence caused by the changed visibility."
        }
      ],
      "proHabits": [
        "Sculpt with the player moving through the level frequently.",
        "Use procedural placement for coverage, then hand-author important landmarks and routes.",
        "Protect paths and focal points with exclusion/clearance rules.",
        "Test foliage density for both readability and performance."
      ],
      "critiqueQuestions": [
        "Does the terrain itself lead the player somewhere?",
        "Which landmark anchors orientation across the landscape?",
        "Are procedural assets creating believable distribution or obvious noise?",
        "Can weather/time changes alter visibility without breaking navigation?",
        "Where could density be reduced with no loss of atmosphere?"
      ],
      "engineNote": "UE5.8 supports procedural world workflows alongside hand-authored Landscape and foliage tools. Use automation to accelerate coverage, not to surrender design control.",
      "engineUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/procedural-content-generation-framework-in-unreal-engine"
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
        "trigger-cutscene",
        "cine-lens-language",
        "adaptive-cutscene-mini"
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
          "Trigger the sequence and return cleanly to player control.",
          "Organise the sequence into clearly named shots/subsequences and sync one audio beat to a camera or action beat."
        ],
        "evidence": [
          "Sequencer timeline screenshot.",
          "Storyboard/shot list.",
          "Final shot frame grabs.",
          "A note explaining why you cut where you did.",
          "Sequencer screenshot showing clean track/shot organisation."
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 7 and 9 — cinematic sequences and adaptive cutscenes.",
      "deepDives": [
        {
          "title": "Every shot needs a job",
          "body": "Camera position, lens, movement and duration should communicate information or emotion. A shot that exists only because the camera can move usually feels slow or artificial. Start by naming what the player must learn or feel.",
          "exercise": "Write a five-word purpose beside every shot in a short sequence. Delete or combine any shot whose purpose is unclear."
        },
        {
          "title": "Block performance before polishing",
          "body": "Rough timing, actor positions and camera cuts should work before detailed animation, lighting and effects. This keeps iteration cheap and reveals pacing problems while they are still easy to fix.",
          "exercise": "Make a complete ugly animatic first using simple transforms and placeholder audio."
        },
        {
          "title": "Build sequences like reusable systems",
          "body": "Short subsequences, clear track names and reusable bindings make cinematics easier to test, swap and adapt. Gameplay variables can then select alternate reactions or outcomes without rebuilding the entire scene.",
          "exercise": "Split one 20-second sequence into a shared intro and two alternate endings."
        }
      ],
      "proHabits": [
        "Use clear Level Sequence and shot naming from the start.",
        "Keep shared moments in reusable subsequences.",
        "Synchronise important sound beats with cuts/actions during blocking, not at the very end.",
        "Render/test the whole sequence after changes rather than judging isolated shots."
      ],
      "critiqueQuestions": [
        "What is the purpose of each shot?",
        "Is the lens/framing supporting the intended emotion?",
        "Where does control return to the player and does that transition feel clean?",
        "Could a shared sequence be reused instead of duplicated?",
        "Does sound reinforce the rhythm of the edit?"
      ],
      "engineNote": "UE5.8 Sequencer still centres on Level Sequences, Cine Camera Actors, Camera Cut tracks, Event/Director logic and Movie Render Queue for high-quality output.",
      "engineUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sequencer-cinematic-editor-unreal-engine"
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
        "reverb-space",
        "audio-offscreen-story",
        "metasound-wind"
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
          "Play with the screen turned away and check whether the route/source is still inferable.",
          "Create one off-screen cue that communicates information before the player sees its source."
        ],
        "evidence": [
          "Audio Actor/attenuation setup screenshot.",
          "Sound Cue or MetaSound graph if used.",
          "Map shot showing source and player route.",
          "Short reflection: what information did sound give before sight?",
          "Short note explaining what the listener should infer from the off-screen cue."
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 7–8 — cinematic audio and environmental audio storytelling.",
      "deepDives": [
        {
          "title": "Sound can reveal what the camera cannot",
          "body": "A machine hum behind a wall, distant footsteps or a changing wind bed can imply scale, danger and direction before the player sees the source. Audio is part of level communication, not a final decoration layer.",
          "exercise": "Create one off-screen sound that makes a tester correctly predict what exists around a corner."
        },
        {
          "title": "Build ambience in layers",
          "body": "Separate broad room tone, location-specific loops and sparse one-shot details. Randomisation and silence prevent repetition from becoming obvious while preserving a stable sense of place.",
          "exercise": "Mute each ambience layer in turn and describe what information disappears."
        },
        {
          "title": "Acoustic space matters",
          "body": "Attenuation, spatialisation and reverb tell the listener how far away a source is and what kind of space surrounds it. The same sound should feel different in a small office, open field and concrete tunnel.",
          "exercise": "Use one sound source in two spaces and make distance/reverb alone communicate which space is larger."
        }
      ],
      "proHabits": [
        "Design with headphones and speakers if possible; translation matters.",
        "Use attenuation assets consistently rather than inventing new falloff settings on every sound.",
        "Randomise repeated sounds subtly in pitch/selection/timing.",
        "Leave deliberate quiet space so important cues have contrast."
      ],
      "critiqueQuestions": [
        "What does the player learn from sound before they see it?",
        "Which sounds belong to the space and which belong to UI/music?",
        "Does distance sound believable?",
        "Is reverb describing the room or drowning the source?",
        "Could silence make the next cue more effective?"
      ],
      "engineNote": "UE5.8 Sound Attenuation still controls distance, spatialisation and reverb sends; Sound Cues remain useful for variation, while MetaSounds offers graph-based DSP for more advanced procedural audio.",
      "engineUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine"
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
        "portfolio-shot",
        "profile-fix-retest",
        "project-hygiene"
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
          "Capture matching AFTER shots and present the changes side-by-side.",
          "Capture a baseline, make one targeted optimisation/cleanup change, then re-test under the same conditions."
        ],
        "evidence": [
          "Before/after matching frames.",
          "Three-item critique list.",
          "One performance/debug view screenshot.",
          "A short explanation of the change with the highest impact.",
          "Before/after measurement or project-hygiene evidence proving the change helped."
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 10–13 — profiling, rendering optimisation, asset management and troubleshooting.",
      "deepDives": [
        {
          "title": "Profile → diagnose → change → re-profile",
          "body": "Optimisation is an evidence loop. Capture a baseline, identify the actual bottleneck, change one targeted thing, then measure again. Randomly lowering quality everywhere can damage the project without solving the real problem.",
          "exercise": "Record FPS/frame time, make one measured optimisation, then capture the new result and state whether it genuinely helped."
        },
        {
          "title": "Project hygiene is production quality",
          "body": "Folder structure, clear asset names, cleaned redirectors and predictable imports reduce mistakes and make teamwork faster. A professional project is understandable to someone who did not create it.",
          "exercise": "Give a teammate 60 seconds to find a material, mesh and sequence from names/folders alone. Fix anything they cannot locate."
        },
        {
          "title": "Test the thing you will actually deliver",
          "body": "Viewport success is not the finish line. Scalability, cooked/packaged builds, target hardware and final presentation can reveal issues that the editor hides. Polish includes reliability as well as visuals.",
          "exercise": "Run one packaged or target-quality test and record a problem that was not obvious in the editor."
        }
      ],
      "proHabits": [
        "Take a baseline before optimising.",
        "Change one variable at a time when diagnosing performance.",
        "Use meaningful prefixes/names so assets are identifiable without opening them.",
        "Test early in packaged/target conditions and keep incremental backups."
      ],
      "critiqueQuestions": [
        "What is the measured bottleneck rather than the guessed one?",
        "Which visual feature costs the most and is it worth it?",
        "Can another student understand the project organisation?",
        "Have you tested lower scalability/target hardware?",
        "Does the final presentation show the work clearly without hiding flaws?"
      ],
      "engineNote": "UE5.8 provides Shader Complexity, Lumen performance/scalability tools, Unreal Insights and World Partition/HLOD workflows. Use the tool that matches the bottleneck instead of optimising by superstition.",
      "engineUrl": "https://dev.epicgames.com/documentation/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine"
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
    },
    {
      "title": "Unreal Engine 5 Best Practices (Packt, 2025)",
      "type": "College licensed reference",
      "icon": "▤",
      "url": "https://www.packtpub.com/en-us/product/unreal-engine-5-best-practices-9781836205654",
      "note": "Licensed college reference for lighting, atmosphere, environment design, cinematics, performance and production habits. The Hub paraphrases concepts; it does not redistribute book pages."
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
    },
    {
      "id": "decision-point-test",
      "title": "Design a Clear Decision Point",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Build a junction where players understand the main route, optional route and blocked route without UI arrows.",
      "uses": [
        "Level flow",
        "Affordance",
        "Sightlines",
        "Playtesting"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Build three choices",
          "Greybox a junction with one main route, one optional route and one route that is currently unavailable.",
          "A useful decision needs alternatives with different meanings, not three identical doorways.",
          "From player height, all three choices are visible or discoverable."
        ],
        [
          "Make the main route readable",
          "Give the primary path more visible depth, a landmark, stronger opening or repeated route language.",
          "Players read opportunity from space before they read text.",
          "A tester can point to the likely progression route."
        ],
        [
          "Make the optional route tempting",
          "Use a glimpse of reward, contrasting light or distinctive prop without making it look mandatory.",
          "Optional content should invite curiosity without hijacking progression.",
          "A tester describes it as interesting but not obviously required."
        ],
        [
          "Make the blocked route honest",
          "Use geometry, damage, locked architecture or environmental state to communicate why it cannot be used yet.",
          "Visual denial is better than an invisible wall after the player commits to the route.",
          "The tester understands the route is unavailable before collision stops them."
        ],
        [
          "Observe silently",
          "Watch another student choose without giving instructions and record where they hesitate.",
          "Unprompted behaviour is the real readability test.",
          "You make one change based on observed behaviour."
        ]
      ],
      "mistakes": [
        "Making all three routes equally bright/open.",
        "Using an invisible wall as the first sign a route is blocked."
      ],
      "makeItYours": [
        "Swap which route is optional without changing the room footprint.",
        "Make the blocked route become the main route later."
      ],
      "worksWhen": [
        "The main route is understood.",
        "The optional route is tempting but optional.",
        "The blocked route looks blocked before impact."
      ],
      "icon": "⑂",
      "featured": true,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Modeling Mode Quick Start",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-quick-start-in-unreal-engine?lang=en-US"
      }
    },
    {
      "id": "spatial-pacing",
      "title": "Create Pacing with Space",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "18 min",
      "difficulty": "Intermediate",
      "summary": "Use compression, release, sightline length and route shape to make movement through a level feel different without changing player speed.",
      "uses": [
        "Pacing",
        "Spatial rhythm",
        "Compression",
        "Reveal"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Build a compressed approach",
          "Create a narrower/lower transition space leading toward a larger room.",
          "Compression makes the following space feel larger by comparison.",
          "The approach feels tighter from player camera."
        ],
        [
          "Hide the payoff",
          "Use a corner, doorway or elevation change so the destination is not fully visible at the start.",
          "Delayed information creates anticipation.",
          "The key reveal only appears after movement."
        ],
        [
          "Create the release",
          "Open into a taller/wider space with a longer sightline and a clear focal point.",
          "Contrast in spatial scale creates a beat without scripting.",
          "The reveal feels noticeably more open than the approach."
        ],
        [
          "Control dwell time",
          "Place a reason to pause: overlook, objective, landmark or safe area.",
          "Pacing is also where players stop, not only how they move.",
          "A tester naturally slows or looks around at the intended point."
        ],
        [
          "Compare the route",
          "Walk it in reverse and decide whether the rhythm still makes sense.",
          "Good spaces can have different emotional readings depending on direction.",
          "You can explain the intended rhythm in three beats."
        ]
      ],
      "mistakes": [
        "Making every room the same scale.",
        "Using long empty corridors as the only way to slow pacing."
      ],
      "makeItYours": [
        "Create a horror version using compression and limited sightlines.",
        "Create an action version using wide sightlines and faster reveals."
      ],
      "worksWhen": [
        "The route has distinct spatial beats.",
        "The reveal feels earned.",
        "Players pause/look where intended."
      ],
      "icon": "⌁",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Modeling Mode Quick Start",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-quick-start-in-unreal-engine?lang=en-US"
      }
    },
    {
      "id": "story-vignette",
      "title": "Tell a Story with Five Props",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Create a small readable environmental story using a tight prop cluster, placement and one supporting decal/effect.",
      "uses": [
        "Environmental storytelling",
        "Set dressing",
        "Prop clusters",
        "Decals"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Choose a micro-event",
          "Pick one simple event: hurried escape, interrupted meal, repair attempt, break-in or recent fight.",
          "A small specific event is easier to communicate than vague “abandoned” dressing.",
          "You can describe the event in one sentence."
        ],
        [
          "Choose five useful props",
          "Select props that each have a role in the event rather than five decorative objects.",
          "Every object should add evidence.",
          "Removing any one prop noticeably weakens the story."
        ],
        [
          "Arrange cause and effect",
          "Place props so their positions imply sequence: what was used, moved, dropped or damaged.",
          "Placement creates narrative relationships between objects.",
          "A viewer can infer an action rather than just seeing clutter."
        ],
        [
          "Add one environmental trace",
          "Use a decal, light, spill, dust, footprint or damage mark to connect the props to the space.",
          "The room should participate in the event too.",
          "The trace supports the same interpretation."
        ],
        [
          "Blind read",
          "Show another student for five seconds and ask what happened.",
          "If the intended story is invisible, more detail may not be the answer.",
          "Their interpretation is close enough to your intended event."
        ]
      ],
      "mistakes": [
        "Using too many props.",
        "Relying on a written note to explain the whole event."
      ],
      "makeItYours": [
        "Make a second version implying the opposite outcome.",
        "Tell the event using no blood/damage clichés."
      ],
      "worksWhen": [
        "The cluster reads as one event.",
        "Placement implies action.",
        "A tester can infer the story."
      ],
      "icon": "⌂",
      "featured": true,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Modeling Mode",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-in-unreal-engine?lang=en-US"
      }
    },
    {
      "id": "hero-asset",
      "title": "Break Repetition with a Hero Asset",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Use one unique landmark or prop to give a modular environment identity without rebuilding the whole kit.",
      "uses": [
        "Modularity",
        "Hero assets",
        "Landmarks",
        "Set dressing"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Find the repetition",
          "Walk through a modular area and identify the point where repeated walls/doors/props make spaces blend together.",
          "You need to know what problem the hero asset is solving.",
          "You can name the most forgettable location."
        ],
        [
          "Choose one unique feature",
          "Add one distinctive machine, sculpture, damaged wall, tree, sign or architectural shape at that location.",
          "A hero asset creates memory and orientation through exception.",
          "The location now has a recognisable silhouette."
        ],
        [
          "Frame it",
          "Adjust nearby props, sightlines or lighting so the unique feature is visible from the approach.",
          "A landmark only helps if the player can actually perceive it.",
          "It is visible from at least two useful positions."
        ],
        [
          "Protect its contrast",
          "Remove nearby competing clutter or repeated bright objects.",
          "Uniqueness needs visual breathing room.",
          "The hero feature remains the first or second thing noticed."
        ],
        [
          "Test orientation",
          "Ask a tester to navigate back to “the room with…” after exploring.",
          "Memorable landmarks support spatial memory.",
          "They can describe/use the hero asset as an orientation cue."
        ]
      ],
      "mistakes": [
        "Adding a unique asset in every corner.",
        "Hiding the hero asset behind clutter."
      ],
      "makeItYours": [
        "Reuse the same kit to create a second landmark with a different hero asset.",
        "Make the hero asset also communicate gameplay state."
      ],
      "worksWhen": [
        "The location is memorable.",
        "The asset is visible from useful routes.",
        "It improves orientation."
      ],
      "icon": "◆",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Modeling Mode",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-in-unreal-engine?lang=en-US"
      }
    },
    {
      "id": "material-cost-check",
      "title": "Check Material Cost with Shader Complexity",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "12 min",
      "difficulty": "Intermediate",
      "summary": "Use UE view modes and material stats to find an expensive surface before guessing what to optimise.",
      "uses": [
        "Shader Complexity",
        "Materials",
        "Profiling",
        "Translucency"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Create a baseline view",
          "Frame a representative gameplay view containing the material you want to inspect.",
          "Performance decisions need a consistent comparison.",
          "You can return to the same camera/view."
        ],
        [
          "Open Shader Complexity",
          "Switch the viewport to Shader Complexity and inspect where expensive pixels accumulate.",
          "The view exposes per-pixel shader cost and overlapping transparency.",
          "You can identify the hottest visible area."
        ],
        [
          "Inspect the material",
          "Open the material and check its Stats/instruction information plus obvious expensive features such as refraction, noise or many texture samples.",
          "The viewport tells you where; the graph helps explain why.",
          "You can name one likely contributor to cost."
        ],
        [
          "Simplify one thing",
          "Remove or replace one expensive operation/texture layer or reduce translucent overlap.",
          "Changing one variable makes the result measurable.",
          "The visual result still communicates the intended surface."
        ],
        [
          "Compare again",
          "Return to the same view and compare complexity/performance.",
          "Optimisation is only real if measurement improves.",
          "The cost is reduced or you can justify why the visual trade-off is not worth it."
        ]
      ],
      "mistakes": [
        "Optimising graph neatness instead of GPU cost.",
        "Removing quality everywhere without measuring the actual bottleneck."
      ],
      "makeItYours": [
        "Compare opaque vs translucent versions.",
        "Build a cheaper quality variant for lower settings."
      ],
      "worksWhen": [
        "You identified cost with a tool.",
        "You changed one targeted cause.",
        "You re-tested under the same view."
      ],
      "icon": "▥",
      "featured": true,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Real-time Rendering Optimisation",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine"
      }
    },
    {
      "id": "translucency-budget",
      "title": "Control Translucency & Overdraw",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "15 min",
      "difficulty": "Intermediate",
      "summary": "Keep glass, fog cards, particles and layered transparent surfaces from quietly filling the frame with expensive overdraw.",
      "uses": [
        "Translucency",
        "Overdraw",
        "VFX",
        "Performance"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Find overlap zones",
          "Use Shader Complexity and rotate the camera through glass, fog cards, decals/particles and foliage.",
          "Transparent layers become expensive when many pixels are redrawn through each other.",
          "You identify one view with heavy overlap."
        ],
        [
          "Separate layers",
          "Reduce unnecessary stacked transparent planes or increase spacing/coverage efficiency.",
          "Fewer overlapping layers reduce repeated per-pixel work.",
          "The same effect uses fewer overlapping surfaces."
        ],
        [
          "Reduce screen coverage",
          "Shrink particles/cards or limit where transparency is visible.",
          "Cost grows with the number of expensive pixels on screen.",
          "The effect still reads without filling the entire frame."
        ],
        [
          "Prefer opaque/masked where suitable",
          "Check whether an opaque/masked solution can replace a translucent surface.",
          "Opaque/masked materials are often cheaper and more predictable.",
          "At least one surface uses the cheaper blend mode without harming the look."
        ],
        [
          "Test worst-case view",
          "Stand where the most layers overlap and profile there.",
          "Average views can hide the actual performance spike.",
          "The worst-case view remains acceptable on target hardware."
        ]
      ],
      "mistakes": [
        "Checking only one camera angle.",
        "Using translucency by default because it looks convenient."
      ],
      "makeItYours": [
        "Make a high and low quality FX version.",
        "Create a glass setup that uses minimal overlapping panes."
      ],
      "worksWhen": [
        "Worst-case overlap is understood.",
        "Unnecessary layers are removed.",
        "The effect still reads."
      ],
      "icon": "◩",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Real-time Rendering Optimisation",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine"
      }
    },
    {
      "id": "lumen-mood-pass",
      "title": "Build a Lumen Mood Pass",
      "category": "design-lighting",
      "designModule": "lighting",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Create a readable lighting hierarchy with Lumen, then test whether the mood survives a lower scalability target.",
      "uses": [
        "Lumen",
        "Lighting hierarchy",
        "Scalability",
        "Exposure"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Lock the viewing conditions",
          "Choose the gameplay camera/route and set a deliberate exposure approach before balancing lights.",
          "Changing exposure while lighting makes comparisons meaningless.",
          "Brightness no longer swings unpredictably while judging the shot."
        ],
        [
          "Establish key information",
          "Light the route/focal point first with the minimum number of important sources.",
          "Gameplay hierarchy should exist before atmospheric decoration.",
          "The player can identify the goal without fog or post process."
        ],
        [
          "Add indirect mood",
          "Use environment colour, skylight/Lumen bounce and restrained emissive contribution to shape the shadow side.",
          "Indirect light creates cohesion without flattening everything.",
          "Shadows retain form while the focal point remains dominant."
        ],
        [
          "Layer atmosphere",
          "Add fog/volumetric response only where it improves depth or information control.",
          "Atmosphere should separate depth, not erase it.",
          "Foreground, middle distance and background remain distinct."
        ],
        [
          "Scalability check",
          "Compare the scene at a lower Lumen/scalability target and adjust the design if the route or focal point collapses.",
          "A design that only works at maximum settings is fragile.",
          "The intended hierarchy survives the target quality level."
        ]
      ],
      "mistakes": [
        "Using emissive materials as free lights everywhere.",
        "Letting auto exposure compensate for an unbalanced scene."
      ],
      "makeItYours": [
        "Create a warm safe version and cold threatening version.",
        "Design the same mood with fewer dynamic lights."
      ],
      "worksWhen": [
        "Focal hierarchy is clear.",
        "Atmosphere adds depth.",
        "Lower quality still reads."
      ],
      "icon": "◐",
      "featured": true,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Lumen Performance Guide",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/lumen-performance-guide-for-unreal-engine"
      }
    },
    {
      "id": "time-of-day-contrast",
      "title": "Design Two Times of Day",
      "category": "design-lighting",
      "designModule": "lighting",
      "duration": "18 min",
      "difficulty": "Intermediate",
      "summary": "Turn one location into two distinct readable moods by changing sun direction, ambient fill, fog and colour rather than rebuilding the level.",
      "uses": [
        "Time of day",
        "Sky Atmosphere",
        "Fog",
        "Visual storytelling"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Save a neutral composition",
          "Choose one camera angle where the route and landmark already read.",
          "You need the same composition to compare lighting decisions.",
          "The geometry stays unchanged between versions."
        ],
        [
          "Build the day state",
          "Use clear directional light, readable ambient fill and restrained fog.",
          "Day should establish the base spatial information.",
          "Routes and landmark are easy to read."
        ],
        [
          "Build the night/dusk state",
          "Shift light direction/temperature, ambient balance and fog while protecting essential route cues.",
          "Time change should alter emotion and information, not randomly darken everything.",
          "The scene feels different but navigation remains possible."
        ],
        [
          "Change one gameplay implication",
          "Decide how visibility affects stealth, threat, exploration or safe areas.",
          "Lighting state becomes design when it changes player decisions.",
          "You can name one behaviour the new time encourages."
        ],
        [
          "Compare silhouettes",
          "Place the two screenshots side by side and inspect what disappeared/appeared.",
          "Useful time-of-day changes are deliberate.",
          "You can explain every major readability change."
        ]
      ],
      "mistakes": [
        "Making night simply “day but darker”.",
        "Changing so many variables that the focal point is lost."
      ],
      "makeItYours": [
        "Add a foggy dawn state.",
        "Create a light that becomes a navigation beacon only at night."
      ],
      "worksWhen": [
        "The same geometry has two clear moods.",
        "Navigation remains intentional.",
        "A gameplay implication is identified."
      ],
      "icon": "◒",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Lumen Performance Guide",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/lumen-performance-guide-for-unreal-engine"
      }
    },
    {
      "id": "pcg-safe-route",
      "title": "Protect a Route from Procedural Clutter",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "18 min",
      "difficulty": "Intermediate",
      "summary": "Use procedural/foliage rules for coverage while keeping authored paths, sightlines and landmarks clear.",
      "uses": [
        "PCG",
        "Foliage",
        "Exclusion zones",
        "Readability"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Define the authored route",
          "Mark the playable path and key sightlines before generating/scattering assets.",
          "Procedural coverage must know what it is not allowed to damage.",
          "The path/landmark works before scatter."
        ],
        [
          "Create placement constraints",
          "Use slope, height, density, bounds or exclusion logic so assets avoid the route and critical spaces.",
          "Rules turn random scatter into controlled distribution.",
          "Trees/rocks no longer spawn in protected gameplay areas."
        ],
        [
          "Vary density intentionally",
          "Use denser clusters away from the route and lower density near navigation/focal points.",
          "Density itself can guide movement and create composition.",
          "The path reads through distribution, not only texture."
        ],
        [
          "Hand-author landmarks",
          "Place important hero trees/rocks/structures manually after procedural coverage.",
          "Procedural systems are good at background variation; memorable navigation needs intent.",
          "At least one landmark is deliberately placed and framed."
        ],
        [
          "Regenerate and test",
          "Change the seed/inputs if available and confirm the route remains safe.",
          "Good rules survive variation.",
          "Multiple generations preserve navigation."
        ]
      ],
      "mistakes": [
        "Generating first and carving a route through chaos later.",
        "Using uniform density everywhere."
      ],
      "makeItYours": [
        "Create a clearing that procedural rules naturally respect.",
        "Use density to foreshadow danger or safety."
      ],
      "worksWhen": [
        "Route stays clear.",
        "Landmark stays visible.",
        "Rules survive regeneration."
      ],
      "icon": "♧",
      "featured": true,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — PCG Framework",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/procedural-content-generation-framework-in-unreal-engine"
      }
    },
    {
      "id": "weather-readability",
      "title": "Make Weather Change the Experience",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Create a weather state that changes mood and visibility while preserving the information the player still needs.",
      "uses": [
        "Weather",
        "Fog",
        "Landscape",
        "Gameplay readability"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Choose the information budget",
          "List what must remain visible during the weather state: route edge, landmark, nearby threats or shelter.",
          "Weather should hide some information deliberately, not everything equally.",
          "You have a short must-see list."
        ],
        [
          "Layer the weather",
          "Combine sky/light change, fog, particles and sound rather than relying on one extreme effect.",
          "Layering creates depth and avoids the “grey filter” look.",
          "Each layer has a distinct job."
        ],
        [
          "Protect navigation",
          "Use contrast, practical lights, silhouettes or route materials to keep required cues readable.",
          "The player still needs to act inside the atmosphere.",
          "A tester can move through the area without memorising it first."
        ],
        [
          "Add one world reaction",
          "Change foliage motion, puddle/wetness, audio or a gameplay rule.",
          "The environment feels alive when systems agree with the weather.",
          "At least one non-visual system responds."
        ],
        [
          "Performance check",
          "Test the dense/worst weather view on target quality.",
          "Fog and particles can create high GPU cost/overdraw.",
          "The effect remains playable or has a cheaper fallback."
        ]
      ],
      "mistakes": [
        "Maxing fog/particles until visibility is accidental.",
        "Adding rain visuals with no matching sound/material response."
      ],
      "makeItYours": [
        "Build calm vs storm versions.",
        "Make shelter visibly and audibly safer."
      ],
      "worksWhen": [
        "Visibility loss is deliberate.",
        "Navigation survives.",
        "At least one world system reacts."
      ],
      "icon": "☂",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — PCG Framework",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/procedural-content-generation-framework-in-unreal-engine"
      }
    },
    {
      "id": "cine-lens-language",
      "title": "Use Lens & Framing Intentionally",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "18 min",
      "difficulty": "Intermediate",
      "summary": "Use a Cine Camera Actor to make focal length, distance and framing support the emotion of the shot.",
      "uses": [
        "Cine Camera",
        "Focal length",
        "Composition",
        "Lensing"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Name the emotion/information",
          "Decide whether the shot should feel intimate, exposed, compressed, powerful or disorienting.",
          "Lens choice should solve a storytelling problem.",
          "You can describe the shot purpose before touching the camera."
        ],
        [
          "Create a Cine Camera",
          "Add/choose a Cine Camera Actor in Sequencer and frame the subject.",
          "Cine Camera gives filmic controls for focal length and aperture.",
          "The camera is active on the Camera Cut track."
        ],
        [
          "Compare focal lengths",
          "Try a wider and longer focal length while repositioning the camera to keep similar subject size.",
          "Focal length changes spatial relationships, not just zoom.",
          "You can see the background feel expand/compress between versions."
        ],
        [
          "Choose depth of field deliberately",
          "Use aperture/focus only if it helps isolate information or mood.",
          "Shallow focus is a storytelling tool, not automatic “cinematic” quality.",
          "The important subject remains readable during motion."
        ],
        [
          "Test in sequence",
          "Play the shot before/after adjacent cuts.",
          "A good standalone frame can still break edit rhythm.",
          "The lens/framing transition feels intentional."
        ]
      ],
      "mistakes": [
        "Using shallow depth of field until gameplay information is unreadable.",
        "Choosing a focal length only because it “looks cinematic”."
      ],
      "makeItYours": [
        "Make the same action feel heroic vs vulnerable using lens/distance.",
        "Create a reveal that changes focus mid-shot."
      ],
      "worksWhen": [
        "Lens choice supports purpose.",
        "Focus remains controlled.",
        "The shot works in context."
      ],
      "icon": "◉",
      "featured": true,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Cinematic Cameras",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/cinematic-cameras-in-unreal-engine"
      }
    },
    {
      "id": "adaptive-cutscene-mini",
      "title": "Make a Two-Outcome Adaptive Cutscene",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Reuse a shared intro, then let one simple gameplay Boolean choose between two short cinematic outcomes.",
      "uses": [
        "Sequencer",
        "Blueprint",
        "Subsequences",
        "Adaptive narrative"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Build the shared intro",
          "Create a short intro Level Sequence/subsequence that both outcomes use.",
          "Shared content should not be duplicated just because the ending changes.",
          "Both versions can start from the same intro."
        ],
        [
          "Create two outcome sequences",
          "Make two very short alternate reactions/endings with clear names.",
          "Small separate blocks are easier to test and replace.",
          "Each outcome plays correctly on its own."
        ],
        [
          "Create/choose a Boolean",
          "Use an existing gameplay Boolean/state supplied by your project, such as HasKey, AlarmTriggered or HelpedNPC.",
          "Adaptivity needs one clear input before it needs complex narrative logic.",
          "The value can be changed/tested reliably."
        ],
        [
          "Branch to the outcome",
          "At the trigger point, use Blueprint logic to play the appropriate sequence/outcome based on the Boolean.",
          "Gameplay state now controls cinematic content.",
          "True and False produce different endings."
        ],
        [
          "Return cleanly",
          "Make sure input/camera/gameplay state returns correctly after either outcome.",
          "Adaptive scenes still need reliable transitions back to play.",
          "Both paths return control without leaving the wrong camera/state active."
        ]
      ],
      "mistakes": [
        "Duplicating the entire cutscene for one changed reaction.",
        "Building branching logic before each sequence works independently."
      ],
      "makeItYours": [
        "Change only a prop/lighting state instead of the whole ending.",
        "Use the same system for day/night variants."
      ],
      "worksWhen": [
        "One intro is reused.",
        "Two outcomes respond to state.",
        "Both paths return to gameplay."
      ],
      "icon": "⑂",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Sequencer",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sequencer-cinematic-editor-unreal-engine"
      }
    },
    {
      "id": "audio-offscreen-story",
      "title": "Tell the Player Something Off-Screen",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "15 min",
      "difficulty": "Beginner",
      "summary": "Use one spatial sound, attenuation and timing to communicate location, scale or threat before the source is visible.",
      "uses": [
        "Spatial audio",
        "Attenuation",
        "Environmental storytelling",
        "Player guidance"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Choose the unseen information",
          "Decide what the player should infer: machine room ahead, enemy behind door, large open hall, storm outside or safe generator nearby.",
          "Sound needs a communication goal.",
          "You can state the intended inference in one sentence."
        ],
        [
          "Place the source out of sight",
          "Put the sound behind geometry/around a corner rather than beside the player.",
          "The audio now extends the perceived world beyond the camera.",
          "The source cannot be seen at the first listening position."
        ],
        [
          "Set useful attenuation",
          "Use an attenuation asset so volume/spatialisation changes naturally as the listener moves.",
          "Distance behaviour helps locate the source.",
          "Walking toward/away gives a believable directional/distance cue."
        ],
        [
          "Shape the space",
          "Add suitable reverb/air absorption/occlusion behaviour if needed.",
          "Acoustic treatment helps the player infer room type and separation.",
          "The source feels like it belongs behind/inside that space."
        ],
        [
          "Blind test",
          "Ask a tester what they expect to find before seeing the source.",
          "The cue succeeds only if the inference is communicated.",
          "Their answer is close to the intended information."
        ]
      ],
      "mistakes": [
        "Making the cue so loud it sounds non-spatial.",
        "Using music/UI sounds when the intention is environmental location."
      ],
      "makeItYours": [
        "Create two different unseen spaces using the same source sound.",
        "Make the cue become clearer as a door opens."
      ],
      "worksWhen": [
        "Source is located by ear.",
        "Distance changes naturally.",
        "Tester infers useful information."
      ],
      "icon": "◖",
      "featured": true,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Sound Attenuation",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine"
      }
    },
    {
      "id": "metasound-wind",
      "title": "Make Simple Procedural Wind with MetaSound",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Build a small ambient MetaSound that varies over time so wind feels less like a short loop repeating forever.",
      "uses": [
        "MetaSound",
        "Ambient audio",
        "Randomisation",
        "DSP"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Create a MetaSound Source",
          "Create a MetaSound Source for the ambient wind and attach appropriate attenuation if it lives in 3D space.",
          "MetaSound gives graph-level control over how the sound is generated/varied.",
          "The source can be auditioned and placed."
        ],
        [
          "Start with a wind layer",
          "Use a suitable wind Sound Wave/input as the stable base of the sound.",
          "A recognisable source layer keeps the system simple before adding variation.",
          "The wind plays continuously without clicks."
        ],
        [
          "Add subtle variation",
          "Modulate volume and/or filter/pitch slowly within a restrained range.",
          "Slow variation reduces obvious looping without sounding random.",
          "The sound changes over time but still feels like one environment."
        ],
        [
          "Add sparse gust behaviour",
          "Introduce an occasional stronger gust or secondary layer using timing/random logic.",
          "Rare events create texture and prevent constant density.",
          "Gusts occur irregularly rather than every few seconds exactly."
        ],
        [
          "Test in context",
          "Walk through the level and balance wind against gameplay cues/dialogue.",
          "An impressive solo sound can be exhausting in the mix.",
          "Important sounds remain intelligible."
        ]
      ],
      "mistakes": [
        "Over-randomising pitch until the ambience sounds artificial.",
        "Making every layer continuous and equally loud."
      ],
      "makeItYours": [
        "Drive wind intensity from a gameplay/weather variable.",
        "Add a second surface-specific whistle/rattle layer."
      ],
      "worksWhen": [
        "Looping is not obvious.",
        "Variation is subtle.",
        "Important audio remains readable."
      ],
      "icon": "≈",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — MetaSounds Quick Start",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/metasounds-quick-start"
      }
    },
    {
      "id": "profile-fix-retest",
      "title": "Profile → Fix → Re-Test",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Run a disciplined optimisation loop instead of randomly lowering visual quality until the problem disappears.",
      "uses": [
        "Profiling",
        "Performance",
        "Iteration",
        "Evidence"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Capture a baseline",
          "Choose a repeatable camera/route and record frame time/FPS plus the quality settings.",
          "Without a baseline you cannot prove an optimisation worked.",
          "You have a before measurement."
        ],
        [
          "Identify the category",
          "Use appropriate tools/view modes to decide whether the issue is GPU rendering/materials/lighting, CPU logic or asset/streaming related.",
          "Different bottlenecks need different tools.",
          "You can name the most likely category with evidence."
        ],
        [
          "Change one targeted cause",
          "Make one focused adjustment rather than reducing everything at once.",
          "Single-variable changes preserve visual quality and make results interpretable.",
          "Only one major cause changed."
        ],
        [
          "Repeat the same test",
          "Run the same route/view/settings and capture the new measurement.",
          "Comparability is the point of the loop.",
          "You have an after measurement."
        ],
        [
          "Keep or revert",
          "Keep the change only if the measured improvement is worth the visual/production trade-off.",
          "Optimisation is a design decision, not a ritual.",
          "You can explain the trade-off in one sentence."
        ]
      ],
      "mistakes": [
        "Changing multiple settings before re-testing.",
        "Optimising based only on editor “feel”."
      ],
      "makeItYours": [
        "Repeat the loop for the next bottleneck.",
        "Compare two scalability targets."
      ],
      "worksWhen": [
        "Baseline recorded.",
        "Bottleneck category identified.",
        "After measurement proves or disproves the change."
      ],
      "icon": "↻",
      "featured": true,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — Real-time Rendering Optimisation",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine"
      }
    },
    {
      "id": "project-hygiene",
      "title": "Clean a UE Project for Another Developer",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Make folders, names and dependencies understandable enough that another student can work in the project without a guided tour.",
      "uses": [
        "Asset management",
        "Naming",
        "Content Browser",
        "Team workflow"
      ],
      "referenceLesson": null,
      "steps": [
        [
          "Create a simple folder logic",
          "Group content by a consistent project structure rather than leaving assets in root/random import folders.",
          "Predictable locations reduce search time and accidental duplication.",
          "A teammate can guess where common asset types live."
        ],
        [
          "Rename mystery assets",
          "Replace names such as NewMaterial_23 or Cube4 with readable type/purpose names.",
          "Assets should communicate what they are before being opened.",
          "Search results are understandable at a glance."
        ],
        [
          "Fix redirectors/dependencies safely",
          "Use Unreal’s tools to clean redirectors and inspect suspicious dependencies rather than deleting files blindly.",
          "Renames/moves can leave references that make cleanup risky.",
          "The project opens without missing-reference surprises."
        ],
        [
          "Remove or quarantine unused junk",
          "Move clearly unused/test content to a review folder before final deletion.",
          "Cleanup should be deliberate and recoverable.",
          "Production folders contain only intentional assets."
        ],
        [
          "Teammate test",
          "Give another student a short find-and-edit task without telling them where anything is.",
          "Organisation is only good if someone else can understand it.",
          "They can find the requested mesh/material/sequence quickly."
        ]
      ],
      "mistakes": [
        "Renaming/moving hundreds of assets in Explorer instead of Unreal.",
        "Deleting “unused” assets without checking references."
      ],
      "makeItYours": [
        "Create a team naming cheat sheet.",
        "Use Reference Viewer to map one important asset dependency chain."
      ],
      "worksWhen": [
        "Folders are predictable.",
        "Names are readable.",
        "Another student can navigate the project."
      ],
      "icon": "⌘",
      "featured": false,
      "referenceImages": [],
      "source": {
        "title": "Epic UE5.8 — World Partition HLOD",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/world-partition---hierarchical-level-of-detail-in-unreal-engine?lang=en-US"
      }
    }
  ]
};
