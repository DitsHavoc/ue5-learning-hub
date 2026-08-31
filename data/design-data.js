window.UE5_DESIGN_DATA = {
  "version": "3.42.2",
  "buildDate": "31 Aug 2026",
  "modules": [
    {
      "id": "world-design",
      "title": "Level Design Foundations",
      "icon": "◇",
      "description": "Design routes, choices, landmarks, reveals and pacing that still work when the art is stripped away.",
      "principles": [
        "Give every space a player purpose",
        "Metrics before decoration",
        "Wayfinding is movement, not magic arrows",
        "Use landmarks to build a mental map",
        "Playtest behaviour, not intention"
      ],
      "intro": "Level design is player experience built out of space. You are deciding where the player looks, moves, hesitates, feels safe, gets lost and understands the next goal. This module makes you analyse real spaces first, then prove your layout works in a greybox.",
      "lookTitle": "How Portal 2, Viewfinder and Dishonored 2 guide players through space",
      "lookIntro": "Three different level-design problems: keeping a puzzle readable after the art pass, teaching a reality-bending rule, and preserving orientation across multiple routes. Study the exact decision each team made, then test the same principle in your own space.",
      "referenceImages": [
        {
          "src": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — Contrast + route readability. Make the valid route easier to read than the background before you add UI.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        },
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ad955ffc88abcd7409_CONTROL_Blast_Furnace_169.webp",
          "caption": "CONTROL — Scale + landmarks. Use one shape or landmark that survives from several viewpoints.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        },
        {
          "src": "https://www.guerrilla-games.com/media/News/HFW_SCREEN_LEGAL_GLIDER_4K_RGB_20210512.webp",
          "caption": "Horizon Forbidden West — Traversal affordance. Shape terrain around traversal decisions, not just pretty silhouettes.",
          "sourceUrl": "https://www.guerrilla-games.com/read/15-minutes-of-new-gameplay-for-horizon-forbidden-west",
          "sourceTitle": "Guerrilla — Horizon Forbidden West",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/environmental-clues-dressing.webp",
          "caption": "Book reference — A side-by-side set-dressing example showing how added props increase story clues and scene meaning.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/lighting-mood-comparison.webp",
          "caption": "Book reference — The same scene under two lighting moods, showing how colour and contrast change player interpretation.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
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
        ],
        "phaseDetails": [
          {
            "title": "Phase 1 — Shape the journey",
            "where": "Level Editor → Add (+) → Shapes → Cube → build three connected spaces in plain grey",
            "do": "Block out three rooms with deliberately different proportions: compressed start, decision space, larger payoff space. Keep the Third Person character in the level for scale.",
            "check": "From player height, each room feels recognisably different before any material or prop is added.",
            "troubleshoot": [
              "If every room feels the same, change ceiling height, width or elevation before touching art."
            ]
          },
          {
            "title": "Phase 2 — Make the choice readable",
            "where": "Viewport → duplicate/move blockout geometry → Play from the room before the fork",
            "do": "Create one obvious main route and one optional route with a visible reason to explore it: height, opening, reward space or landmark glimpse.",
            "check": "A tester can point to the likely main route and also notices there is another option.",
            "troubleshoot": [
              "If both routes look equally important, strengthen hierarchy: width, visibility or destination value — not an arrow."
            ]
          },
          {
            "title": "Phase 3 — Give the player a memory anchor",
            "where": "Viewport → place one large primitive / placeholder landmark → check it from at least two rooms",
            "do": "Add a landmark with a unique silhouette or scale that can be seen from two different positions.",
            "check": "A tester can describe where they are relative to the landmark after moving between rooms.",
            "troubleshoot": [
              "If the landmark disappears immediately, reposition openings or height so it helps build a mental map."
            ]
          },
          {
            "title": "Phase 4 — Add guidance after the geometry works",
            "where": "Viewport → add one simple material colour or one light cue; keep most geometry grey",
            "do": "Use one controlled visual cue to reinforce the route that already works: light pool, colour family or contrast.",
            "check": "Turning the cue off makes guidance slightly weaker, but the level is still understandable.",
            "troubleshoot": [
              "If turning the cue off destroys the route, the blockout is doing too little. Fix space first."
            ]
          },
          {
            "title": "Phase 5 — Silent playtest",
            "where": "Play → hand keyboard/controller to another student → you do not speak",
            "do": "Watch one full run. Record: first pause, first wrong turn, first place they look for help. Do not explain your intention.",
            "check": "You have three observed behaviours, not “they said it was good”.",
            "troubleshoot": [
              "If they ask what to do, write down the moment before answering. That moment is the useful evidence."
            ]
          },
          {
            "title": "Phase 6 — One evidence-based revision",
            "where": "Return to the blockout → change one spatial cue only → run the same start position again",
            "do": "Fix the clearest playtest problem with one targeted edit, then re-test from the same start.",
            "check": "The second tester/run shows less hesitation at the specific problem you targeted.",
            "troubleshoot": [
              "If you changed five things, undo and isolate the most important cause so you know what actually helped."
            ]
          }
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapter 4 — Designing Engaging Game Environments. Selected figures/page crops are now embedded inline in this module under the college's licensed educational use.",
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
      "engineUrl": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-quick-start-in-unreal-engine?lang=en-US",
      "caseStudies": [
        {
          "game": "Portal 2",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/ss_3858536cbc0a07dfbe36e8f87b3f08bf3be45e54.1920x1080.jpg?t=1745363004",
          "sourceUrl": "https://gameinformer.com/b/features/archive/2010/03/17/thinking-with-portals-making-a-test-chamber.aspx",
          "sourceTitle": "Game Informer — Thinking With Portals: Making a Portal 2 Test Chamber",
          "lens": "Art pass vs puzzle readability",
          "notice": "Valve greyboxed and playtested test chambers before the final art pass. Once richer lighting, vegetation and detail were added, the chamber went back into playtesting because visual complexity could create distractions, hide clues or accidentally suggest false solutions.",
          "steal": "Art is allowed to enrich the space only if the puzzle read survives. If decoration creates a false affordance, pull it back or use lighting and composition to restore the intended focus.",
          "task": "Open the Valve design feature. Find the section about the art pass, then annotate one Portal 2 chamber screenshot with: intended clue, possible visual distraction, and one lighting/composition choice that keeps the solution readable.",
          "sourceType": "VALVE DESIGN FEATURE • GAME INFORMER",
          "sourceWhy": "Valve explains the chamber workflow directly, including why levels return to playtesting after visual detail is added."
        },
        {
          "game": "Viewfinder",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1382070/c017a42198360ea205109b69258357bdd7f8ffaa/page_bg_raw.jpg?t=1764842475",
          "sourceUrl": "https://blog.playstation.com/2023/07/18/reshape-reality-with-your-perspective-in-viewfinder-out-today/",
          "sourceTitle": "PlayStation Blog — Reshape reality with your perspective in Viewfinder",
          "lens": "Teaching a reality-bending mechanic",
          "notice": "Sad Owl built the game around a mechanic that is difficult to explain in words: a flat image can become 3D space. The team therefore designed puzzles around seeing the rule happen clearly, then expanded it with photocopiers, perspective tricks and rewind rather than burying the core idea under explanation.",
          "steal": "When the mechanic breaks a familiar rule, demonstrate cause and effect visually before increasing complexity. The player should understand what changed in the world, not merely that something clever happened.",
          "task": "Read Gwen Foster’s developer article. Pick one Viewfinder puzzle image and write three beats: what the player sees before placing the image, what visibly changes when it becomes geometry, and what new route/action becomes possible.",
          "sourceType": "DEVELOPER ARTICLE • SAD OWL STUDIOS",
          "sourceWhy": "Game director Gwen Foster explains how the camera mechanic shaped the puzzles and why the team kept asking how far the rule could be pushed."
        },
        {
          "game": "Dishonored 2",
          "image": "https://res.cloudinary.com/dewzjk72j/image/authenticated/s--ksy1ISeM--/c_lfill%2Cw_744/f_auto%3Aimage%2Cq_auto/v1/contentful/rporu91m20dc/1bf1f6zIoq4MISqSoCII6I/4b6d2df9e0fdd32fc9f02908a51aafc5/data.images.event.209.Dishonored2_TheOverlook_730x411.png",
          "sourceUrl": "https://gameinformer.com/b/features/archive/2016/05/23/oppression-opulence-and-decay-inside-dishonored-2s-bold-art-direction.aspx",
          "sourceTitle": "Game Informer — Inside Dishonored 2’s Exaggerated Art Direction",
          "lens": "Landmarks, verticality + route choice",
          "notice": "Arkane built Karnaca with a stronger vertical character than Dunwall and grounded its architecture in southern-European references. Distinctive large forms and skyline features give the city identity while rooftops, streets and interiors support multiple traversal routes.",
          "steal": "Multiple routes are easier to understand when the district has a stable visual identity and strong orientation anchors. The landmark does not choose the route for the player; it helps them recover their mental map after choosing one.",
          "task": "Open the Sébastien Mitton interview and choose one Karnaca image. Mark one skyline anchor, one vertical route opportunity and one architectural cue that tells you this is Karnaca rather than Dunwall.",
          "sourceType": "ART DIRECTOR INTERVIEW • GAME INFORMER",
          "sourceWhy": "Arkane art director Sébastien Mitton discusses the design pillars and visual identity used to make Karnaca distinct."
        }
      ],
      "researchMissions": [
        {
          "title": "Map From Memory",
          "duration": "10–15 min",
          "brief": "Play or watch ten minutes of a game with a navigable space. Close it, then draw the route from memory.",
          "steps": [
            "Mark the start and goal.",
            "Add every landmark you remember.",
            "Circle where you hesitated or turned around.",
            "Compare your sketch with the real space."
          ],
          "evidence": "One memory map + three sentences explaining why some locations stuck in your head."
        },
        {
          "title": "Screenshot Autopsy",
          "duration": "15 min",
          "brief": "Collect three screenshots from one game and annotate how each one communicates a route or decision.",
          "steps": [
            "Mark entrances/exits.",
            "Mark blocked or dangerous space.",
            "Mark the strongest landmark.",
            "Write what the player is being asked to decide."
          ],
          "evidence": "Three annotated screenshots. No “it looks cool” answers — name the design job."
        }
      ],
      "challenges": [
        {
          "title": "No Arrows Allowed",
          "constraint": "No objective marker, waypoint beam or text sign.",
          "goal": "Guide a fresh player to the exit using only space, landmarks, light and route shape."
        },
        {
          "title": "Thirty-Second Fork",
          "constraint": "One room, two routes, one optional reward.",
          "goal": "Make players understand the main route within 30 seconds but still notice the optional path."
        },
        {
          "title": "Bad Level Surgery",
          "constraint": "Start from one intentionally confusing greybox.",
          "goal": "Fix it with only three edits. You must explain why each edit changes player behaviour."
        }
      ],
      "resources": [
        {
          "title": "The Level Design Book — Blockout",
          "type": "Free design reading",
          "url": "https://book.leveldesignbook.com/process/blockout",
          "why": "Metrics, wayfinding and playtesting without pretending level design is just pretty composition."
        },
        {
          "title": "Guerrilla — Relic Ruins",
          "type": "Developer breakdown",
          "url": "https://www.guerrilla-games.com/read/relic-ruins-creating-environmental-puzzles-for-horizon-forbidden-west",
          "why": "A real designer explains concept, blockout, interdisciplinary work, playtesting and iteration."
        }
      ],
      "afterBuild": {
        "title": "BLACK BOX: The Lost Player",
        "brief": "Take your finished Three-Room Journey and deliberately remove the strongest guidance cue. Make the route readable again using a different design language.",
        "constraints": [
          "Do not restore the removed cue.",
          "No new UI or text arrows.",
          "A tester must reach the goal without help."
        ],
        "improve": "Compare both versions. Which guidance method felt more natural and which was more reliable?",
        "evidence": "Two before/after screenshots + one tester quote."
      },
      "industryDeepDives": [
        {
          "type": "video",
          "title": "DOOM — Designing a First Impression",
          "source": "Noclip • id Software",
          "url": "https://www.youtube.com/watch?v=vsoVQWnSOfM",
          "youtubeId": "vsoVQWnSOfM",
          "duration": "24 min",
          "focus": "Opening level, implicit tutorial, arena flow and how a level teaches the player what kind of game they are in.",
          "watchFor": "Jump to roughly 11:25. What does the opening space teach before any explicit tutorial box says it?",
          "task": "Write down three things the level teaches through layout, enemy placement or pacing rather than text."
        },
        {
          "type": "article",
          "title": "Paths and Possibilities: The Art of Level Design",
          "source": "CD PROJEKT RED • AnsweRED Podcast transcript",
          "url": "https://www.cdprojektred.com/en/blog/188/answered-podcast-episode-30-paths-and-possibilities-the-art-of-level-design-transcript-included",
          "duration": "15–20 min read",
          "focus": "Level design vs environment art, POI density, world planning and how the discipline changed from The Witcher 3 into later projects.",
          "watchFor": "Look for the moments where the designers describe handing work between design and environment art.",
          "task": "Write one sentence defining where you think level design stops and environment art starts — then defend it."
        },
        {
          "type": "talk",
          "title": "Invisible Intuition: Guiding Players Without Waypoints",
          "source": "GDC • David Shaver + Robert Yang",
          "url": "https://www.gdcvault.com/play/1025179/Level-Design-Workshop-Invisible-Intuition",
          "duration": "Conference talk",
          "focus": "Blockmesh, lighting, environment art, FX, audio and scripting as a shared language for natural player guidance.",
          "watchFor": "Notice how many guidance techniques work before final art exists.",
          "task": "Choose one area in your project and remove a HUD/arrow cue. Replace it with two world-based cues."
        }
      ]
    },
    {
      "id": "environment",
      "title": "Environment Art & Set Dressing",
      "icon": "▦",
      "description": "Build believable places with prop logic, visual storytelling, hierarchy and controlled clutter.",
      "principles": [
        "Reference a real logic for the place",
        "Big story beats before tiny props",
        "Cluster objects by purpose",
        "Leave deliberate empty space",
        "Make wear tell you who used the space"
      ],
      "intro": "Environment art is design when every prop, surface and empty area has a reason to exist. The goal is not maximum detail. The goal is a place that feels used, readable and specific.",
      "lookTitle": "How Dead Space, The Last of Us Part II and Control make environment art carry story",
      "lookIntro": "Three environment-art jobs: make a working place feel used, make personal spaces reveal character, and establish a visual language that can be broken for effect. Study props, signage, wear, repetition and empty space — not just whether the screenshot looks impressive.",
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "caption": "Dead Space — Lived-in world + threat. Every prop cluster should imply a job, routine or event.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        },
        {
          "src": "https://www.guerrilla-games.com/media/Horizon_FW_Artblast2560x854.png",
          "caption": "Horizon Forbidden West — Reference + visual language. Choose a small visual language and repeat it intentionally.",
          "sourceUrl": "https://www.guerrilla-games.com/read/horizon-forbidden-west-art-blast-on-artstation",
          "sourceTitle": "Guerrilla — Horizon Art Blast",
          "kind": "reference"
        },
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ab2445934a3c76c839_control_pm_det_005.webp",
          "caption": "CONTROL — Repetition + interruption. Repetition makes the exception readable.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/environmental-clues-dressing.webp",
          "caption": "Book reference — A side-by-side set-dressing example showing how added props increase story clues and scene meaning.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/lighting-mood-comparison.webp",
          "caption": "Book reference — The same scene under two lighting moods, showing how colour and contrast change player interpretation.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/lumen-layered-lighting.webp",
          "caption": "Book reference — Layering traditional lights with Lumen to shape highlights and focal emphasis.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
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
        ],
        "phaseDetails": [
          {
            "title": "Phase 1 — Write the room story",
            "where": "Before Unreal: notes / reference board",
            "do": "Choose one event — rushed evacuation, accident, break-in or long abandonment — and write: who used the room, what normally happened here, what changed.",
            "check": "You can explain the room in one sentence without mentioning props yet.",
            "troubleshoot": [
              "If the story is “abandoned room”, make it more specific: abandoned by whom, doing what, and why?"
            ]
          },
          {
            "title": "Phase 2 — Dress big → medium → small",
            "where": "Content Drawer → place structural props/furniture first → then secondary props → small detail last",
            "do": "Fill the room in three passes. Stop after each pass and check route width and focal point.",
            "check": "The room reads at a distance before small props are visible.",
            "troubleshoot": [
              "If you start placing bottles before furniture/structure works, stop and move back up a scale."
            ]
          },
          {
            "title": "Phase 3 — Build purposeful clusters",
            "where": "Viewport + Outliner → group props by activity",
            "do": "Make three clusters that imply a human action: repair station, meal, emergency response, packing, investigation, etc.",
            "check": "A tester can guess what each cluster was used for.",
            "troubleshoot": [
              "If a cluster could be moved anywhere in the room with no loss of meaning, it is probably random decoration."
            ]
          },
          {
            "title": "Phase 4 — Put wear where life caused it",
            "where": "Decal Material / decal actor or existing wear assets → place at contact, traffic or damage zones",
            "do": "Add a small number of wear clues tied to physical causes: foot traffic, leaks, impacts, heat, hands or neglected corners.",
            "check": "Every wear mark has a believable cause you can name.",
            "troubleshoot": [
              "If grime is evenly sprayed everywhere, remove most of it and concentrate it where use would create it."
            ]
          },
          {
            "title": "Phase 5 — Delete 20%",
            "where": "Outliner → select low-value props → hide/delete → compare from the same gameplay camera",
            "do": "Remove at least one fifth of the dressing. Keep only props that support navigation, story, composition or material scale.",
            "check": "The scene becomes clearer without losing its story.",
            "troubleshoot": [
              "If you cannot choose anything to delete, ask a classmate to identify the noisiest area and start there."
            ]
          },
          {
            "title": "Phase 6 — Create the memorable beat",
            "where": "Viewport → build one story vignette + one hero detail",
            "do": "Create one small scene a player could remember — overturned chair facing a broken terminal, packed bag by an exit, emergency tools left mid-job — plus one unique object that breaks modular repetition.",
            "check": "A tester notices the vignette and can infer a plausible event from it.",
            "troubleshoot": [
              "If the hero asset only looks expensive but tells nothing, give it a relationship to the story or gameplay."
            ]
          }
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 4 and 8 — environment design and environmental storytelling. Selected figures/page crops are now embedded inline in this module under the college's licensed educational use.",
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
      "engineUrl": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-in-unreal-engine?lang=en-US",
      "caseStudies": [
        {
          "game": "Dead Space",
          "image": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "sourceUrl": "https://www.frostbite.com/ea-studios/motive/news/inside-dead-space-3-aboard-the-ishimura",
          "sourceTitle": "EA / Motive — Inside Dead Space #3: Aboard the Ishimura",
          "lens": "Functional dressing + a lived-in workplace",
          "notice": "Motive treated the Ishimura as a working ship before treating it as a horror set. A simple customs area is dressed with safety warnings, declarations, scanning stations, branding and practical equipment so the player can understand what the space was for before the disaster. Those ordinary details make the later damage and horror more believable.",
          "steal": "Dress from function first. Decide what job happened in the room, who used it and what routine took place there. Then add the props, signage, wear and damage that would logically result from that use.",
          "task": "Read Motive’s Aboard the Ishimura article. Take one plain room or corridor in your project and write its normal job in one sentence. Add exactly five dressing choices that prove that job: one piece of equipment, one sign/label, one storage choice, one wear clue and one object left by a person. Annotate a screenshot to explain each choice.",
          "sourceType": "DEVELOPER ARTICLE • MOTIVE / EA",
          "sourceWhy": "Motive’s art and level-design team explain how practical room functions, signage, branding and small story details were used to make the Ishimura feel like a real lived-in workplace."
        },
        {
          "game": "The Last of Us Part II",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2531310/page_bg_raw.jpg",
          "sourceUrl": "https://80.lv/articles/how-naughty-dog-created-the-immersive-world-of-the-last-of-us-part-ii",
          "sourceTitle": "80 Level — How Naughty Dog Created the Immersive World of The Last of Us Part II",
          "lens": "Character storytelling through rooms + props",
          "notice": "Naughty Dog’s environment artists describe story-heavy spaces as places where decoration has to make sense for the people who lived there. Joel’s house is built from specific evidence about him — guitars, vinyl, wood carvings and his background — while later empty spaces use absence itself to reflect what has changed.",
          "steal": "A personal space should reveal a person, activity or event. Do not use generic “post-apocalypse clutter” when a smaller number of specific objects can tell the player who lived here and what mattered to them.",
          "task": "Read the section on story-driven environments and Joel’s house. Design a room for a character without showing the character. Use a maximum of seven props. For each prop, write one thing it tells the player about the person, their routine or what changed. Delete any prop whose explanation is only “it makes the room look detailed”.",
          "sourceType": "DEVELOPER INTERVIEW • NAUGHTY DOG / 80 LEVEL",
          "sourceWhy": "Naughty Dog environment artists explain how character history, story beats, prop libraries and deliberate environmental storytelling shaped spaces such as Joel’s house and Seattle."
        },
        {
          "game": "Control",
          "image": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ab2445934a3c76c839_control_pm_det_005.webp",
          "sourceUrl": "https://gameinformer.com/2019/03/15/uncovering-the-mysteries-of-controls-the-oldest-house",
          "sourceTitle": "Game Informer — Uncovering The Mysteries Of Control’s The Oldest House",
          "lens": "Repetition, architecture + the power of the exception",
          "notice": "The Oldest House establishes a strict baseline of Brutalist concrete, bureaucracy and functional office design. That clean, heavy visual language gives Remedy something strong to disrupt: when the Hiss bends spaces, floods an area with red or breaks the building’s normal rules, the change reads immediately because the player already understands what “normal” looks like.",
          "steal": "Repetition is useful when it creates a rule the player can learn. Establish a small family of shapes, materials, signs and prop types first; then make the important story beat or supernatural change break that rule on purpose.",
          "task": "Read Game Informer’s Oldest House feature. Make two quick versions of the same small office space: NORMAL and DISRUPTED. In NORMAL, repeat three visual rules such as concrete form, signage, desk layout or colour. In DISRUPTED, break only one of those rules. Ask a classmate which change they notice first and why.",
          "sourceType": "REMEDY INTERVIEW • GAME INFORMER",
          "sourceWhy": "Game Informer’s visit to Remedy explains the Oldest House’s Brutalist baseline, bureaucratic identity and the contrast created when supernatural forces transform it."
        }
      ],
      "researchMissions": [
        {
          "title": "Five-Prop Story",
          "duration": "10 min",
          "brief": "Find one game room that tells a story without a cutscene.",
          "steps": [
            "Pick exactly five props.",
            "For each, write what it tells you.",
            "Delete any clue that repeats another clue.",
            "Write the story in one sentence."
          ],
          "evidence": "One screenshot + a five-row prop/story table."
        },
        {
          "title": "Clutter Audit",
          "duration": "15 min",
          "brief": "Take a busy environment screenshot and classify what is actually doing work.",
          "steps": [
            "Mark gameplay-critical objects.",
            "Mark story objects.",
            "Mark atmosphere-only objects.",
            "Circle anything you could remove without losing the scene."
          ],
          "evidence": "Annotated screenshot showing at least one thing you would delete."
        }
      ],
      "challenges": [
        {
          "title": "Seven Props, One Story",
          "constraint": "Maximum seven movable props.",
          "goal": "Tell a clear before-the-player-arrived story."
        },
        {
          "title": "The 30% Cut",
          "constraint": "Remove 30% of your dressing after you think it is finished.",
          "goal": "Make the scene clearer, not emptier."
        },
        {
          "title": "Hero Asset Breakout",
          "constraint": "Everything except one object comes from the same modular kit.",
          "goal": "Use one unique object to create identity and narrative focus."
        }
      ],
      "resources": [
        {
          "title": "Guerrilla — Horizon Art Blast",
          "type": "Developer art reference",
          "url": "https://www.guerrilla-games.com/read/horizon-forbidden-west-art-blast-on-artstation",
          "why": "Production art, environment work and developer portfolios from the team."
        },
        {
          "title": "Motive — Dead Space Art Developer Livestream",
          "type": "Developer breakdown",
          "url": "https://www.ea.com/ea-studios/motive/news/art-developer-livestream",
          "why": "The team discusses immersive environments, lighting and the “lived-in world” art pillar."
        }
      ],
      "afterBuild": {
        "title": "BLACK BOX: Change the Story",
        "brief": "Keep the room geometry exactly the same. Change the implied story completely using no more than seven prop/decal swaps.",
        "constraints": [
          "No geometry changes.",
          "No written lore logs.",
          "Keep the player route equally readable."
        ],
        "improve": "Ask a tester what happened here before telling them your intended story.",
        "evidence": "Before/after wide shots + tester interpretation."
      },
      "industryDeepDives": [
        {
          "type": "video",
          "title": "Designing the World of The Witcher 3",
          "source": "Noclip • CD PROJEKT RED",
          "url": "https://www.youtube.com/watch?v=oSS5T4od-GQ",
          "youtubeId": "oSS5T4od-GQ",
          "duration": "25 min",
          "focus": "Environmental rationale, settlement logic, interiors, dark forests and the famous “rule of 30 seconds”.",
          "watchFor": "At 10:24, listen for why believable spaces need an internal reason for being there.",
          "task": "Pick one location in your project. Write its job, who uses it, what they need there, and what should therefore exist in the space."
        },
        {
          "type": "article",
          "title": "From Worldbuilding to Immersion: Crafting Universes in Games",
          "source": "CD PROJEKT RED • Environment Art Director + Engineering Production Manager",
          "url": "https://www.cdprojektred.com/en/blog/137/answered-podcast-episode-16-from-worldbuilding-to-immersion-crafting-universes-in-games",
          "duration": "Podcast / article",
          "focus": "How art, engineering, environmental storytelling and production combine to make a world feel coherent rather than assembled.",
          "watchFor": "Find one example where believability comes from collaboration rather than a single artist making a prettier asset.",
          "task": "Add one prop cluster that exists because of what happened in the space, not because the corner looked empty."
        },
        {
          "type": "interview",
          "title": "What an Environment Artist Actually Does",
          "source": "Guerrilla • Myriam Dufrier",
          "url": "https://www.guerrilla-games.com/read/guerrilla-spotlight-Myriam-Dufrier",
          "duration": "8 min read",
          "focus": "Narrative requirements, technical requirements and environment art as purposeful spatial dressing rather than random decoration.",
          "watchFor": "Note the inputs an environment artist receives before they start making the scene attractive.",
          "task": "Create a four-line environment brief: narrative beat, player action, technical constraint, visual priority."
        }
      ]
    },
    {
      "id": "materials",
      "title": "Materials & Surfaces",
      "icon": "◫",
      "description": "Make surfaces communicate age, use, weather and material type instead of becoming a pile of flashy shaders.",
      "principles": [
        "Roughness carries more story than colour",
        "Reference real surfaces",
        "One master, many controlled variants",
        "Variation needs a cause",
        "Judge materials in useful lighting"
      ],
      "intro": "Material design is visual communication. Players should read metal as metal, wet stone as wet stone and worn paint as worn paint before they inspect the node graph. Build simple physically sensible surfaces first, then add controlled variation.",
      "lookTitle": "How Horizon Forbidden West, Cyberpunk 2077 and God of War Ragnarök build materials for real production",
      "lookIntro": "Three material jobs: create a reusable texturing system for complex machines, scale a shared material library across an enormous city, and make physically based surfaces still carry a strong art style. Look for what is reused, what stays unique and which material decisions actually serve the game.",
      "referenceImages": [
        {
          "src": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot6.jpg",
          "caption": "Death Stranding — Surface identity. Make materials readable without relying on saturated colour.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "kind": "reference"
        },
        {
          "src": "https://drop-assets.ea.com/images/qKm8m5buUQRNr4WIsBTcd/2d8953c4fd3f1e4acd5a78bbc9a16b30/DEAD-SPACE_Media_SLIDE-02-USP-02.jpg",
          "caption": "Dead Space — Wear + material story. Wear belongs where use, impact, water or neglect would actually cause it.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        },
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ad955ffc88abcd7409_CONTROL_Blast_Furnace_169.webp",
          "caption": "CONTROL — Material families. Build a small reusable surface family rather than 30 unrelated materials.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/dynasculpt-before-after.webp",
          "caption": "Book reference — Before-and-after sculpting example showing how a simple sphere becomes a more organic rock form.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/rain-material-graph.webp",
          "caption": "Book reference — A rain material setup from the book, useful for talking about weather effects and layered atmosphere.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/shader-complexity-heatmap.webp",
          "caption": "Book reference — Shader Complexity view mode highlighting expensive materials and areas needing optimisation.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/uv-auto-before-after.webp",
          "caption": "Book reference — Auto-UV adjustment example showing how texel distribution changes as UV settings are refined.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
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
        ],
        "phaseDetails": [
          {
            "title": "Phase 1 — Build one honest base",
            "where": "Content Drawer → Material → Material Editor → assign to a test mesh under neutral light",
            "do": "Create a simple reusable parent with Base Color, Roughness and Normal inputs/parameters. Start physically believable rather than flashy.",
            "check": "Stone, metal, plastic or painted surface reads correctly before extra effects.",
            "troubleshoot": [
              "If material identity depends mainly on colour, inspect roughness and normal response first."
            ]
          },
          {
            "title": "Phase 2 — Expose useful controls",
            "where": "Material Editor → convert selected values/textures to parameters → group them clearly",
            "do": "Expose only controls a designer would genuinely vary: tint, roughness, metallic where appropriate, normal strength and tiling.",
            "check": "A Material Instance can change the surface meaningfully without opening the parent graph.",
            "troubleshoot": [
              "If the instance has 25 mystery sliders, remove parameters that do not support a real art/design decision."
            ]
          },
          {
            "title": "Phase 3 — Make four instances",
            "where": "Content Drawer → Create Material Instance four times → name by purpose/state",
            "do": "Build four variants from the parent: e.g. clean, worn, damp and damaged — without duplicating the material graph.",
            "check": "All four are recognisably related but communicate different conditions.",
            "troubleshoot": [
              "If variants look like different random materials, reduce the number of changing parameters and preserve the shared family."
            ]
          },
          {
            "title": "Phase 4 — Add variation with a cause",
            "where": "Material Editor → add one mask / vertex colour / world-space variation method",
            "do": "Add one controlled variation method for dirt, dampness or wear and define where it is allowed to appear.",
            "check": "Variation breaks repetition without looking like noise pasted everywhere.",
            "troubleshoot": [
              "If the mask has no physical logic, simplify it and tie it to edges, height, contact or a painted control."
            ]
          },
          {
            "title": "Phase 5 — Neutral vs scene light test",
            "where": "Level Editor → save one neutral test light/camera → compare again in the final scene light",
            "do": "Inspect all instances under neutral light, then under the actual scene lighting without changing material values between views.",
            "check": "Material identity survives both tests; scene lighting enhances rather than hides it.",
            "troubleshoot": [
              "If it only works under dramatic scene light, correct the material response before grading the scene."
            ]
          },
          {
            "title": "Phase 6 — Cost check",
            "where": "Material Editor → Window/Stats where available + Viewport → Shader Complexity / relevant optimisation view",
            "do": "Inspect the most complex material and identify one cost you can justify, simplify or remove.",
            "check": "You can name one expensive feature and explain why it stays or what you changed.",
            "troubleshoot": [
              "Do not optimise by superstition. Compare the same surface before/after and keep the visible result acceptable."
            ]
          }
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 10–11 — profiling material cost and real-time rendering. Selected figures/page crops are now embedded inline in this module under the college's licensed educational use.",
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
      "engineUrl": "https://dev.epicgames.com/documentation/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine",
      "caseStudies": [
        {
          "game": "Horizon Forbidden West",
          "image": "https://www.guerrilla-games.com/media/Horizon_FW_Artblast2560x854.png",
          "sourceUrl": "https://www.gdcvault.com/play/1029327/Taking-a-Procedural-Approach-to",
          "sourceTitle": "GDC Vault — Taking a Procedural Approach to Texturing the Machines of Horizon Forbidden West",
          "lens": "Procedural texturing for a huge machine family",
          "notice": "Guerrilla’s machine team needed to texture increasingly complex assets without rebuilding the same material work every time. Tom Delboo’s GDC talk explains a procedural texturing and shading workflow designed to stay flexible enough for Game Design, Art Direction and Production while cutting months from the process.",
          "steal": "Reuse rules, not finished-looking noise. Build a material language for repeated surface families, then spend unique masks and authored detail only where an asset needs identity, damage or gameplay information.",
          "task": "Open the GDC session overview, then choose one Horizon machine image. Identify three surface families that could be procedural or shared and two areas that deserve unique treatment. For each family, list the parameters you would expose in a reusable material or Substance setup.",
          "sourceType": "GDC TALK • GUERRILLA",
          "sourceWhy": "Guerrilla’s Senior Technical Asset Artist explains the procedural workflow built specifically to speed up texturing and shading for Horizon Forbidden West’s complex machines."
        },
        {
          "game": "Cyberpunk 2077",
          "image": "https://www.adobe.com/products/substance3d/magazine/media_1c6226a7bb690560667a71dd096d15fa67b612a39.jpg?format=jpg&optimize=medium&width=750",
          "sourceUrl": "https://www.adobe.com/products/substance3d/magazine/cyberpunk-2077-a-world-full-of-substance.html",
          "sourceTitle": "Adobe Substance 3D — Cyberpunk 2077: A World Full of Substance",
          "lens": "A shared material library at city scale",
          "notice": "CD PROJEKT RED could not afford a unique full texture set for every object in dense Night City. The team built a library of common tileable materials and blended them at runtime using much smaller unique masks. That gave thousands of assets high surface detail while reducing storage and making the art pipeline faster to iterate.",
          "steal": "Do not duplicate a complete material every time an asset changes. Share the expensive/common information, then use compact masks and parameters for the part that actually needs to be unique.",
          "task": "Read the section explaining CD PROJEKT RED’s multilayer material system. Pick one Night City street image. List four surfaces that could come from a shared material library and two details that need a unique mask. Sketch a simple parent-material plan showing what is shared and what varies per asset.",
          "sourceType": "TECH ART INTERVIEW • CD PROJEKT RED / ADOBE",
          "sourceWhy": "CD PROJEKT RED’s Technical Art Director explains why Night City required a layered material library, how shared materials reduced texture data and how Substance tools fitted into the pipeline."
        },
        {
          "game": "God of War Ragnarök",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/page_bg_raw.jpg",
          "sourceUrl": "https://80.lv/articles/creating-buildings-materials-for-god-of-war-ragnar-k-s-asgard",
          "sourceTitle": "80 Level — Creating Buildings & Materials for God of War Ragnarök’s Asgard",
          "lens": "Making reusable materials carry an art style",
          "notice": "Sony Santa Monica environment artist Jon Arellano describes building Asgard with reusable kits while keeping the surfaces sculptural and specific to God of War. He created shapes in ZBrush, converted them to height information for Substance Designer, and sometimes turned material patterns back into geometry so the tiling surfaces and the model language reinforced each other.",
          "steal": "Physically based does not mean generic. A reusable material can still carry shape language, sculpted motifs and authored wear — the trick is deciding which style information belongs in the shared material and which belongs in unique geometry or dressing.",
          "task": "Read Arellano’s material-workflow section. Choose one Asgard wall, floor or building surface. Break it into four jobs: base material, sculpted motif, roughness/wear and reusable tiling. Then plan how the same material could support three different modular pieces without making them look copied and pasted.",
          "sourceType": "ENVIRONMENT ARTIST INTERVIEW • SONY SANTA MONICA / 80 LEVEL",
          "sourceWhy": "A God of War Ragnarök environment artist explains the actual ZBrush-to-Substance material workflow used on Asgard and how reusable kits, sculpted forms and materials were developed together."
        }
      ],
      "researchMissions": [
        {
          "title": "Real-World Material Hunt",
          "duration": "15 min",
          "brief": "Photograph or find six real surfaces around college/home.",
          "steps": [
            "Name the material.",
            "Predict roughness: low / medium / high.",
            "Identify large, medium and small surface detail.",
            "Mark one area of wear and explain its cause."
          ],
          "evidence": "Six-image contact sheet with short notes."
        },
        {
          "title": "Same Object, Different History",
          "duration": "10 min",
          "brief": "Find three versions of the same material state: clean, wet/dirty, damaged/aged.",
          "steps": [
            "Compare colour shift.",
            "Compare roughness.",
            "Compare edge wear.",
            "Compare where dirt collects."
          ],
          "evidence": "Three references + a list of parameters you would expose in a master material."
        }
      ],
      "challenges": [
        {
          "title": "One Master, Three Worlds",
          "constraint": "One master material only.",
          "goal": "Create clean, abandoned and rain-soaked variants using instances."
        },
        {
          "title": "No Colour Crutch",
          "constraint": "Temporarily desaturate the viewport.",
          "goal": "Keep metal, plastic, stone and wetness readable through value/roughness/normal response."
        },
        {
          "title": "Cause Before Grunge",
          "constraint": "Every stain or wear mark needs a physical reason.",
          "goal": "Delete decorative dirt that cannot be explained."
        }
      ],
      "resources": [
        {
          "title": "Guerrilla GDC — Procedural Texturing",
          "type": "Developer trail",
          "url": "https://www.guerrilla-games.com/read/guerrilla-gdc-2023",
          "why": "A route into how a major studio scales texturing and asset production."
        },
        {
          "title": "Motive — Dead Space Art Developer Livestream",
          "type": "Developer breakdown",
          "url": "https://www.ea.com/ea-studios/motive/news/art-developer-livestream",
          "why": "Good reference for material, lighting and environment art working together."
        }
      ],
      "afterBuild": {
        "title": "BLACK BOX: Material Identity Test",
        "brief": "Give another student screenshots of your surfaces with the labels removed. Can they correctly identify the material and condition?",
        "constraints": [
          "No labels.",
          "Neutral-ish test lighting.",
          "At least four surfaces."
        ],
        "improve": "Fix the surface with the most incorrect guesses using only two parameter changes.",
        "evidence": "Guess sheet + before/after of the weakest surface."
      },
      "industryDeepDives": [
        {
          "type": "interview",
          "title": "CONTROL — Environment and Material Creation",
          "source": "Remedy • Miro Vesterinen / Substance",
          "url": "https://mirbobo.artstation.com/projects/KalENr?album_id=1725915",
          "duration": "Talk / breakdown",
          "focus": "Tiling materials, procedural variation and how Control built a huge amount of Brutalist concrete without every surface becoming an obvious repeated texture.",
          "watchFor": "Notice how material systems, lighting and architecture work together. A technically reusable material still needs enough controlled variation to avoid looking tiled or artificial.",
          "task": "Choose one large repeated surface in your project. Define the shared base material, then list three controlled sources of variation — for example cracks, roughness breakup, staining or edge damage — that can stop repetition without creating a new material for every wall."
        },
        {
          "type": "interview",
          "title": "Alan Wake 2 — Environment Art Technology and Workflows",
          "source": "Adobe + Remedy • Benjamin Lindquist",
          "url": "https://blog.adobe.com/en/publish/2024/08/07/remedy-entertainments-environment-art-technology-workflow-alan-wake-2",
          "duration": "12–15 min read",
          "focus": "Scan data, material reuse, wetness, art direction and how technical environment art supports a huge amount of believable content.",
          "watchFor": "Notice why “realistic material” does not mean “no art direction”.",
          "task": "Take one realistic material and create two controlled variants using roughness/wetness/age rather than replacing the whole texture set."
        },
        {
          "type": "interview",
          "title": "Benefits of Procedural Materials",
          "source": "80 Level • Bradford Smith (Naughty Dog)",
          "url": "https://80.lv/articles/benefits-of-procedural-materials",
          "duration": "10 min read",
          "focus": "Why reusable procedural material thinking matters in production, and where authored variation still has to take over.",
          "watchFor": "Separate what should be reusable from what should stay unique.",
          "task": "Identify one material in your scene that should become a reusable master and one that deserves bespoke treatment."
        }
      ]
    },
    {
      "id": "lighting",
      "title": "Lighting & Atmosphere",
      "icon": "☼",
      "description": "Use light for readability, mood, depth and player guidance — then prove the scene still works when the mood changes.",
      "principles": [
        "Light gameplay information first",
        "Motivate important sources",
        "Control contrast deliberately",
        "Lock exposure while judging",
        "Change one variable at a time"
      ],
      "intro": "Lighting is not a final Instagram filter. It is gameplay information. Build depth and route readability first, then use contrast, colour and atmosphere to control emotion.",
      "lookTitle": "How Alan Wake 2, LIMBO and Little Nightmares II use light to control attention",
      "lookIntro": "The question is not “does the lighting look good?” It is what the lighting makes the player notice, fear, ignore or move towards. Each example below uses contrast and darkness for a specific gameplay or emotional job.",
      "referenceImages": [
        {
          "src": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-03-1920x1080.png",
          "caption": "Alan Wake 2 — Colour + motivated emphasis. Treat light colour/intensity as a deliberate variable, not a vibe slider.",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2 Photo Mode",
          "kind": "reference"
        },
        {
          "src": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — Silhouette + negative space. Darkness is useful only when the important information remains readable.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        },
        {
          "src": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "caption": "Dead Space — Safe pool → dangerous shadow. Lighting can create a rhythm of safety and uncertainty.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/lumen-gi-comparison.webp",
          "caption": "Book reference — Static lighting versus Lumen GI, plus a visual breakdown of bounce lighting and reflections.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/lumen-layered-lighting.webp",
          "caption": "Book reference — Layering traditional lights with Lumen to shape highlights and focal emphasis.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/volumetric-fog-layers.webp",
          "caption": "Book reference — Progressive fog layering showing how volumetric height fog changes depth, mood and atmosphere.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/outdoor-lighting-example.webp",
          "caption": "Book reference — An outdoor/warehouse lighting example used to discuss contrast, readability and mood.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
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
        ],
        "phaseDetails": [
          {
            "title": "Phase 1 — Lock the comparison",
            "where": "Create a fixed gameplay/Cine Camera → Post Process Volume → stabilise exposure for the test",
            "do": "Choose one camera and stop moving it. Stabilise exposure so the three versions can be compared fairly.",
            "check": "A screenshot taken twice with unchanged lights looks effectively identical in exposure/composition.",
            "troubleshoot": [
              "If auto exposure keeps changing the read, fix exposure before touching mood."
            ]
          },
          {
            "title": "Phase 2 — Neutral readability pass",
            "where": "Level Editor → global light / skylight / practicals → no dramatic colour grade yet",
            "do": "Light the room so route, player silhouette and focal object are clear in a neutral version.",
            "check": "A tester can identify route and focal point without being told what mood you intend.",
            "troubleshoot": [
              "If the neutral version is already crushed or blown out, you have no stable base for mood comparisons."
            ]
          },
          {
            "title": "Phase 3 — Safe",
            "where": "Duplicate/save lighting state → adjust key/fill/practical balance",
            "do": "Create a “safe” version using clearer visibility, softer contrast and a believable warmer or calmer focal cue.",
            "check": "Two testers independently choose “safe/calm/welcoming” more often than the other labels.",
            "troubleshoot": [
              "If it just becomes orange, change contrast and visibility as well as hue."
            ]
          },
          {
            "title": "Phase 4 — Threatening",
            "where": "Duplicate/save state → increase selective contrast / shadow uncertainty / colour tension",
            "do": "Make the same room threatening without changing geometry or camera. Keep the critical route readable.",
            "check": "Testers identify danger/tension while still knowing where they could move next.",
            "troubleshoot": [
              "If everything is simply black, restore the gameplay information and concentrate darkness around uncertainty."
            ]
          },
          {
            "title": "Phase 5 — Uncertain",
            "where": "Exponential Height Fog / volumetric light / selective occlusion → same locked camera",
            "do": "Make an “uncertain” version that withholds some information using fog, partial light or depth — without destroying silhouettes.",
            "check": "The viewer can describe what is unclear and what remains intentionally readable.",
            "troubleshoot": [
              "If fog flattens the whole frame equally, reduce it or use local light/contrast to rebuild depth."
            ]
          },
          {
            "title": "Phase 6 — Blind mood test",
            "where": "Export/capture the three locked-camera images → randomise their order for another student",
            "do": "Show the three versions without labels and ask for one-word mood + first focal point.",
            "check": "You collect mood/focal responses before revealing your intended labels.",
            "troubleshoot": [
              "If all three get the same answer, your changes are cosmetic rather than experiential."
            ]
          },
          {
            "title": "Phase 7 — Quality reality check",
            "where": "Engine Scalability Settings → compare at least two presets from the same camera",
            "do": "Check whether lower shadow/fog/effects quality destroys your focal hierarchy or route cues.",
            "check": "The scene remains playable/readable at both tested quality levels.",
            "troubleshoot": [
              "If a critical cue exists only in one expensive effect, add a cheaper supporting cue."
            ]
          }
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 1–2 — Lumen, atmosphere and visual storytelling. Selected figures/page crops are now embedded inline in this module under the college's licensed educational use.",
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
      "engineUrl": "https://dev.epicgames.com/documentation/unreal-engine/lumen-performance-guide-for-unreal-engine",
      "caseStudies": [
        {
          "game": "Alan Wake 2",
          "image": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-03-1920x1080.png",
          "sourceUrl": "https://blog.adobe.com/en/publish/2024/08/07/remedy-entertainments-environment-art-technology-workflow-alan-wake-2",
          "sourceTitle": "Adobe / Remedy — Environment art technology and workflows in Alan Wake 2",
          "lens": "Lighting, colour grading + atmosphere",
          "notice": "Remedy kept environment materials grounded in realism, then pushed the final mood through strongly art-directed lighting, VFX and colour grading. Bright Falls and the Dark Place can therefore feel radically different even when individual surfaces remain physically believable.",
          "steal": "Separate “what the surface is” from “how the scene should feel”. Let materials stay coherent, then use lighting, fog, VFX and grading deliberately to control mood and focal priority.",
          "task": "Read the Remedy environment-art interview. Pick one Bright Falls shot and one Dark Place shot. Compare key light direction, colour temperature, brightest focal area and how wetness/reflection changes the read.",
          "sourceType": "ENVIRONMENT ART INTERVIEW • REMEDY",
          "sourceWhy": "Remedy’s technical environment artist explains the relationship between realistic materials and the much stronger art direction applied through lighting, VFX and colour grading."
        },
        {
          "game": "LIMBO",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/48000/ss_a045f6d6329ed18bc16d34633800d638f3a57724.1920x1080.jpg?t=1761819450",
          "sourceUrl": "https://www.gamedeveloper.com/game-platforms/gdc-europe-i-limbo-i-s-carlsen-on-making-players-your-worst-enemy-and-your-best-friend",
          "sourceTitle": "Game Developer — GDC Europe: LIMBO’s Jeppe Carlsen on making players your worst enemy and best friend",
          "lens": "Silhouette readability with almost no colour",
          "notice": "Playdead strips the scene down to black, grey, light and motion. With no tutorial text and very little colour information, the player, hazards and interactive shapes have to separate through silhouette, timing and negative space.",
          "steal": "If the player cannot read the important shape in greyscale, extra colour and post-processing will not rescue the composition. Protect the gameplay silhouette first.",
          "task": "Read the Playdead design feature, then grab one LIMBO screenshot. Fill the player, hazard and safe route with three flat tones. If any two merge, describe the lighting or spacing change that would separate them.",
          "sourceType": "LEVEL DESIGN TALK • PLAYDEAD",
          "sourceWhy": "Lead level designer Jeppe Carlsen explains the game’s deliberately minimal controls, lack of tutorial text and approach to communicating through play."
        },
        {
          "game": "Little Nightmares II",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/860510/page_bg_raw.jpg?t=1730127763",
          "sourceUrl": "https://www.unrealengine.com/developer-interviews/how-little-nightmares-ii-plumbs-the-depths-of-adolescent-angst",
          "sourceTitle": "Unreal Engine — How Little Nightmares II plumbs the depths of adolescent angst",
          "lens": "Light/dark contrast + vulnerability",
          "notice": "Tarsier uses oversized architecture, darkness and selective light to keep Mono and Six feeling small. The team describes light and darkness as part of the game’s unease, while outdoor and indoor spaces use different lighting setups to shape atmosphere without losing the route.",
          "steal": "Darkness should create uncertainty around the player, not hide the basic action they need to perform. Use light pools to reveal enough information, then let the unlit space carry threat.",
          "task": "Read the Tarsier interview and choose one Pale City screenshot. Mark the current safe/readable zone, the threatening unknown zone and the next light cue that pulls the player forward.",
          "sourceType": "DEVELOPER INTERVIEW • TARSIER STUDIOS",
          "sourceWhy": "Tarsier discusses its visual inspirations and specifically how light, darkness and atmosphere shape the game’s unease."
        }
      ],
      "researchMissions": [
        {
          "title": "One Scene, Three Reads",
          "duration": "15 min",
          "brief": "Find one location that appears under different lighting or weather states.",
          "steps": [
            "Capture/collect three versions.",
            "Name the focal point in each.",
            "Name the dominant contrast.",
            "Write how player behaviour or emotion changes."
          ],
          "evidence": "Three images + one paragraph comparing the reads."
        },
        {
          "title": "Motivated Light Hunt",
          "duration": "10 min",
          "brief": "Collect five game lights and decide whether the visible source justifies them.",
          "steps": [
            "Mark the visible source.",
            "Classify motivated / unmotivated.",
            "Explain the gameplay job.",
            "Choose one light you would remove."
          ],
          "evidence": "Five mini-captures with one-line verdicts."
        }
      ],
      "challenges": [
        {
          "title": "One Light Horror",
          "constraint": "One movable key light plus ambient/global light.",
          "goal": "Create readable tension without filling the room with point lights."
        },
        {
          "title": "Mood Swap",
          "constraint": "Same geometry, camera and materials.",
          "goal": "Make “safe” and “dangerous” versions using only lighting/atmosphere."
        },
        {
          "title": "No Post Process Rescue",
          "constraint": "Disable the Post Process Volume while judging.",
          "goal": "Make the base lighting work before grading."
        }
      ],
      "resources": [
        {
          "title": "The Level Design Book — Lighting",
          "type": "Free design reading",
          "url": "https://book.leveldesignbook.com/process/lighting",
          "why": "Separates global, wayfinding, gameplay and detail/mood lighting passes."
        },
        {
          "title": "Alan Wake 2 — Photo Mode Lighting",
          "type": "Developer feature breakdown",
          "url": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "why": "A clear demonstration of how controllable lighting changes mood and framing."
        },
        {
          "title": "Dead Space — Intensity Director",
          "type": "Developer breakdown",
          "url": "https://www.ea.com/ea-play/news/inside-dead-space-4-the-intensity-director",
          "why": "Shows lighting, audio and atmosphere being treated as dynamic player-experience systems."
        }
      ],
      "afterBuild": {
        "title": "BLACK BOX: Emotional Re-Light",
        "brief": "Swap the emotional meaning of your strongest lighting setup without moving the camera or geometry.",
        "constraints": [
          "No geometry changes.",
          "Maximum three light edits plus one atmosphere edit.",
          "Keep the route equally readable."
        ],
        "improve": "Ask two testers to choose from “safe / lonely / threatening / heroic” without telling them the target.",
        "evidence": "A/B screenshots + tester responses."
      },
      "industryDeepDives": [
        {
          "type": "video",
          "title": "Alan Wake 2 — Fighting the Darkness",
          "source": "Remedy Entertainment",
          "url": "https://www.youtube.com/watch?v=2yxyy_UY-k4",
          "youtubeId": "2yxyy_UY-k4",
          "duration": "6 min",
          "focus": "Light as gameplay language: navigation, safety, threat, transformation and combat — not simply “mood”.",
          "watchFor": "Listen to Teemu Huhtiniemi explain how changing light physically changes routes in the Dark Place.",
          "task": "Name three jobs your main light source performs. If all three answers are “looks atmospheric”, redesign one."
        },
        {
          "type": "talk",
          "title": "Lighting Design for Level Designers",
          "source": "GDC • Robert Yang",
          "url": "https://www.gdcvault.com/play/1016450/Lighting-Design-for-Level",
          "duration": "Conference talk",
          "focus": "A shared theory language for level designers and lighting artists: readability, behaviour, mood and architectural emphasis.",
          "watchFor": "Treat lighting as a player-behaviour tool. What is the player more likely to look at or walk toward because of the light?",
          "task": "Make two lighting versions of the same greybox: safe/welcoming and dangerous/uncertain. Change no geometry."
        },
        {
          "type": "article",
          "title": "Naughty Dog at SIGGRAPH 2020",
          "source": "Naughty Dog • The Last of Us Part II",
          "url": "https://www.naughtydog.com/blog/naughty_dog_at_siggraph_2020",
          "duration": "Talks + slides",
          "focus": "Ambient lighting, fog, surfaces and performance budgets — useful proof that lighting choices are always artistic and technical at the same time.",
          "watchFor": "Look for the compromises required to keep the intended look within a fixed frame-rate and memory budget.",
          "task": "Choose one expensive lighting/effect choice in your scene. Describe the visual job it does before deciding whether to cut it."
        }
      ]
    },
    {
      "id": "landscape",
      "title": "Landscape, Terrain & Foliage",
      "icon": "≈",
      "description": "Shape terrain around traversal, landmarks, routes and encounter space rather than sculpting random mountains.",
      "principles": [
        "Design routes before noise",
        "Use skyline landmarks",
        "Give terrain traversal cost",
        "Protect readable silhouettes",
        "Foliage must respect gameplay"
      ],
      "intro": "Terrain is level design at a huge scale. Slopes, ridges, valleys, skyline silhouettes and foliage density decide where players can travel and what they can understand from a distance.",
      "lookTitle": "How ELDEN RING, Subnautica and Jusant turn terrain into navigation",
      "lookIntro": "There are no random mountains here. Landmarks, biomes, depth, ledges and terrain silhouettes are doing navigation work. Compare how each game lets the player build a mental map without covering the world in arrows.",
      "referenceImages": [
        {
          "src": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot3.jpg",
          "caption": "Death Stranding — Terrain as mechanic. Give terrain meaningful travel costs and choices.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "kind": "reference"
        },
        {
          "src": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot5.jpg",
          "caption": "Death Stranding — Silhouette + difficulty. Let large terrain forms preview the difficulty ahead.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "kind": "reference"
        },
        {
          "src": "https://p325k7wa.twic.pics/high/elden-ring/elden-ring/02-screenshots/ELDENRING_01_4K.jpg?twic=v1%2Fcover%3D2160%2Fstep%3D10%2Fquality%3D80%2Foutput%3Dpreview",
          "caption": "ELDEN RING — Distant attraction. Give players something memorable to orient around beyond the next 20 metres.",
          "sourceUrl": "https://en.bandainamcoent.eu/elden-ring/elden-ring/media",
          "sourceTitle": "Bandai Namco — ELDEN RING media gallery",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/outdoor-lighting-example.webp",
          "caption": "Book reference — An outdoor/warehouse lighting example used to discuss contrast, readability and mood.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/volumetric-fog-layers.webp",
          "caption": "Book reference — Progressive fog layering showing how volumetric height fog changes depth, mood and atmosphere.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/rain-material-graph.webp",
          "caption": "Book reference — A rain material setup from the book, useful for talking about weather effects and layered atmosphere.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
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
        ],
        "phaseDetails": [
          {
            "title": "Phase 1 — Plan the experience",
            "where": "Paper / image editor / screenshot annotation before Landscape mode",
            "do": "Draw start, goal, landmark and three route beats before sculpting. Mark where the player should see the goal and where it can disappear.",
            "check": "You can explain the route and pacing without referring to terrain brush settings.",
            "troubleshoot": [
              "If the plan is “walk through valley”, add at least one choice, reveal, obstacle or reward beat."
            ]
          },
          {
            "title": "Phase 2 — Sculpt only the big forms",
            "where": "Modes → Landscape → Sculpt → large brush, low/controlled strength",
            "do": "Create valley, ridge and horizon forms using broad passes. Avoid noisy detail.",
            "check": "At distance, the terrain silhouette already supports your route and landmark.",
            "troubleshoot": [
              "If it looks like lumpy porridge, increase brush scale and simplify the number of forms."
            ]
          },
          {
            "title": "Phase 3 — Walk it",
            "where": "Play from the intended start → traverse entire route at player speed",
            "do": "Test slope, camera, jump/traversal width and collision. Fix terrain snags before art.",
            "check": "The player reaches the goal without accidental steep blockers or awkward zig-zagging.",
            "troubleshoot": [
              "If you need editor fly mode to understand the route, it is not yet designed for the player."
            ]
          },
          {
            "title": "Phase 4 — Paint by physical logic",
            "where": "Landscape → Paint → three layers with Layer Info assets",
            "do": "Use at least three layers based on terrain/use: path/soil on travel zones, rock on steep/exposed surfaces, vegetation on suitable ground.",
            "check": "Texture placement helps explain slope and route instead of looking airbrushed randomly.",
            "troubleshoot": [
              "If every layer is painted as soft blobs, tie boundaries to slope, erosion, path or biome logic."
            ]
          },
          {
            "title": "Phase 5 — Foliage as guidance",
            "where": "Foliage Mode / PCG if used → cluster away from route edges and key sightlines",
            "do": "Dress in clusters, leave breathing spaces, and deliberately thin vegetation near route decisions and landmark views.",
            "check": "The intended route stays readable from player height even in dense areas.",
            "troubleshoot": [
              "If foliage hides the route, do not add an arrow — edit density, species height or clearing shape."
            ]
          },
          {
            "title": "Phase 6 — Landmark reveal rhythm",
            "where": "Place one authored landmark → test from start, mid-route and approach",
            "do": "Reveal the landmark early, hide/partially lose it during traversal, then reveal it again from a new angle.",
            "check": "A tester can use the landmark to describe progress through the landscape.",
            "troubleshoot": [
              "If the landmark is visible constantly, the journey may feel flat; if never visible, it cannot orient the player."
            ]
          },
          {
            "title": "Phase 7 — Clutter protection test",
            "where": "Toggle procedural/foliage layers or increase density temporarily → Play the route again",
            "do": "Stress-test the level against extra clutter, then define exclusion/clearing rules around critical gameplay space.",
            "check": "The route and landmark survive the dressing system rather than depending on manual luck.",
            "troubleshoot": [
              "If procedural placement repeatedly breaks gameplay, formalise exclusion volumes/masks instead of hand-deleting every instance."
            ]
          }
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapter 6 — responsive/adaptive worlds and procedural environment workflows. Selected figures/page crops are now embedded inline in this module under the college's licensed educational use.",
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
      "engineUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/procedural-content-generation-framework-in-unreal-engine",
      "caseStudies": [
        {
          "game": "ELDEN RING",
          "image": "https://p325k7wa.twic.pics/high/elden-ring/elden-ring/02-screenshots/ELDENRING_01_4K.jpg?twic=v1%2Fcover%3D2160%2Fstep%3D10%2Fquality%3D80%2Foutput%3Dpreview",
          "sourceUrl": "https://gameinformer.com/interview/2024/06/24/from-softwares-hidetaka-miyazaki-discusses-his-approach-to-difficulty",
          "sourceTitle": "Game Informer — Hidetaka Miyazaki on why he still designs levels himself",
          "lens": "World landmarks + mental-map building",
          "notice": "Hidetaka Miyazaki describes map and level design as a guide that helps players piece together the world while their understanding is still fragmented. Large silhouettes and terrain layers give the player questions and destinations without explaining the whole route.",
          "steal": "A landmark should do more than look impressive: it should help the player orient, form a hypothesis about the world and choose what to investigate next.",
          "task": "Read Miyazaki’s level-design comments. Pick one Elden Ring vista and mark a long-range landmark, one mid-range destination and one local route choice. Write what each scale tells the player.",
          "sourceType": "CREATOR INTERVIEW • GAME INFORMER",
          "sourceWhy": "Miyazaki explains that map and level design should guide players as they build a fragmented understanding of the world."
        },
        {
          "game": "Subnautica",
          "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_9fdfcc7572ae22b4afa21e6de3b23c962ca5bb55.1920x1080.jpg?t=1777456112",
          "sourceUrl": "https://www.gdcvault.com/play/1025745/The-Design-of-Subnautica",
          "sourceTitle": "GDC Vault — The Design of Subnautica",
          "lens": "Biome identity + exploration without arrows",
          "notice": "Unknown Worlds built Subnautica around exploration, discovery and the thrill of the unknown. Biomes, depth and environmental signals create curiosity, while radio messages and story beats add enough structure to a sandbox without turning exploration into a waypoint-following exercise.",
          "steal": "A biome should tell the player where they are, what kind of risk they are entering and why they might want to go deeper. Navigation identity is part of progression.",
          "task": "Open Charlie Cleveland’s GDC talk summary. Design three underwater biomes and give each a unique depth range, silhouette language, sound cue and discovery that tempts the player to enter.",
          "sourceType": "GDC DESIGN TALK • UNKNOWN WORLDS",
          "sourceWhy": "Creative director Charlie Cleveland explains Subnautica’s design pillars, exploration structure and how the team guides players without over-directing them."
        },
        {
          "game": "Jusant",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1977170/page_bg_raw.jpg?t=1771331092",
          "sourceUrl": "https://gameinformer.com/2023/11/29/the-challenging-climb-to-make-jusant",
          "sourceTitle": "Game Informer — The Challenging Climb To Make Jusant",
          "lens": "Natural traversal cues instead of painted ledges",
          "notice": "DON’T NOD designed climbing first, then built the world around that mechanic. The art team wanted important ledges and handholds to read without resorting to obvious “climb here” paint, so natural colour and shape differences make useful terrain pop from the surrounding rock.",
          "steal": "Traversal readability can come from believable geology, value and silhouette. The player should see a possible hold because it belongs to the world, not because the designer sprayed it yellow.",
          "task": "Read the lead designer/art director interview. Find one Jusant climbing shot and mark three handholds. For each, identify the natural shape or colour contrast that makes it readable without UI.",
          "sourceType": "LEAD DESIGNER + ART DIRECTOR • GAME INFORMER",
          "sourceWhy": "DON’T NOD explains how the climbing system came first and how natural colour/shape cues replaced artificial platforming markers."
        }
      ],
      "researchMissions": [
        {
          "title": "Three Routes Through One Landscape",
          "duration": "15 min",
          "brief": "Use an open-world screenshot and plan three routes with different player intentions.",
          "steps": [
            "Fast route.",
            "Safe route.",
            "Exploration/reward route.",
            "Mark what terrain feature creates each choice."
          ],
          "evidence": "One annotated landscape image with three coloured route lines."
        },
        {
          "title": "Skyline Memory Test",
          "duration": "10 min",
          "brief": "Collect four open-world skyline screenshots from games you know.",
          "steps": [
            "Hide UI.",
            "Name the landmark.",
            "Write what it tells you about direction or progress.",
            "Rank which silhouette is easiest to remember."
          ],
          "evidence": "Four-image comparison + ranking."
        }
      ],
      "challenges": [
        {
          "title": "Terrain Before Foliage",
          "constraint": "No foliage or rocks until the route passes a playtest.",
          "goal": "Make the terrain alone communicate movement and destination."
        },
        {
          "title": "Three Costs",
          "constraint": "One valley, three traversable routes.",
          "goal": "Make each route trade time, safety or reward."
        },
        {
          "title": "Foliage Firewall",
          "constraint": "Dense biome, but the critical route can never disappear.",
          "goal": "Use density, species and clearing patterns as guidance."
        }
      ],
      "resources": [
        {
          "title": "Kojima Productions — Death Stranding media",
          "type": "Official visual reference",
          "url": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "why": "Excellent terrain/traversal references where landscape is central to play."
        },
        {
          "title": "Guerrilla — Relic Ruins",
          "type": "World-design breakdown",
          "url": "https://www.guerrilla-games.com/read/relic-ruins-creating-environmental-puzzles-for-horizon-forbidden-west",
          "why": "Shows how open-world attraction, puzzle space and player route connect."
        }
      ],
      "afterBuild": {
        "title": "BLACK BOX: The Route You Didn’t Plan",
        "brief": "Ask a tester to cross your valley however they want. Keep the route they invent and redesign around it instead of forcing them back onto your original path.",
        "constraints": [
          "Do not block their route.",
          "Make it intentionally supported.",
          "Keep your original route viable too."
        ],
        "improve": "Explain what the tester saw in the terrain that you did not.",
        "evidence": "Original plan + actual tester path + revised path map."
      },
      "industryDeepDives": [
        {
          "type": "video",
          "title": "The Making of Horizon Zero Dawn",
          "source": "Noclip • Guerrilla",
          "url": "https://www.youtube.com/watch?v=h9tLcD1r-6w",
          "youtubeId": "h9tLcD1r-6w",
          "duration": "67 min",
          "focus": "How a studio moved from linear shooters to open-world design: world scale, quests, machine ecology, memory and recognisable sound.",
          "watchFor": "Use the chapter markers. Focus on 33:55 Quest Design and the sections on building a believable machine ecology.",
          "task": "Draw one landscape loop where terrain, encounter and reward all reinforce each other instead of existing as separate layers."
        },
        {
          "type": "interview",
          "title": "Alan Wake 2: Seeing the Forest for the Trees",
          "source": "Creative Bloq • Remedy art team",
          "url": "https://www.creativebloq.com/features/alan-wake-2-art-team-interview",
          "duration": "12 min read",
          "focus": "Real ecological research, species density, moisture, altitude and using actual environmental logic to make fictional forests convincing.",
          "watchFor": "Notice how the team converts scientific research into a usable art reference instead of copying nature blindly.",
          "task": "Research one real biome for ten minutes. Write five placement rules your foliage should obey."
        },
        {
          "type": "breakdown",
          "title": "Relic Ruins: Creating Environmental Puzzles",
          "source": "Guerrilla • Horizon Forbidden West",
          "url": "https://www.guerrilla-games.com/read/relic-ruins-creating-environmental-puzzles-for-horizon-forbidden-west",
          "duration": "Developer breakdown",
          "focus": "Concept, blockout, interdisciplinary iteration and how landscape/architecture supports readable traversal puzzles.",
          "watchFor": "Look at when the team tests the puzzle relative to the art pass.",
          "task": "Block a traversal puzzle using only terrain/primitive shapes. Do not decorate it until another player understands the route."
        }
      ]
    },
    {
      "id": "cinematics",
      "title": "Sequencer & Cutscenes",
      "icon": "▶",
      "description": "Use framing, lens, movement, staging and cuts to communicate information — not just to make a camera fly around.",
      "principles": [
        "Every shot needs a story job",
        "Lens changes meaning",
        "Movement needs motivation",
        "Cut on information or action",
        "Return control cleanly"
      ],
      "intro": "A cutscene is a controlled piece of player communication. Every shot should reveal, hide, emphasise or transition something. Start with the story beat, then choose the camera technique.",
      "lookTitle": "How Journey, Edith Finch and Psychonauts 2 stage story through camera and space",
      "lookIntro": "These games do not use the camera for the same job. One builds an emotional arc through scale, one changes interaction rules to tell short stories, and one stages wildly stylised spaces so the player can still read the action.",
      "referenceImages": [
        {
          "src": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-02-clean-1300x650.png",
          "caption": "Alan Wake 2 — Focal length + framing. Choose the camera based on the information/emotion the shot must deliver.",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2 Photo Mode",
          "kind": "reference"
        },
        {
          "src": "https://www.guerrilla-games.com/media/News/HFW_SCREEN_LEGAL_GLIDER_4K_RGB_20210512.webp",
          "caption": "Horizon Forbidden West — Action geography. Establish geography before rapid cuts or close action.",
          "sourceUrl": "https://www.guerrilla-games.com/read/15-minutes-of-new-gameplay-for-horizon-forbidden-west",
          "sourceTitle": "Guerrilla — Horizon Forbidden West",
          "kind": "reference"
        },
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4abe40138d6dc791368_control_pm_det_027.webp",
          "caption": "CONTROL — Architecture as frame. Let the environment compose the shot for you.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/sequencer-closeup-shot.webp",
          "caption": "Book reference — A close-up cinematic shot used to discuss framing, emotional focus and shot intent.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/sequencer-key-features.webp",
          "caption": "Book reference — Sequencer UI callouts showing camera cuts, curve editing and track visibility controls.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/sequencer-camera-timing.webp",
          "caption": "Book reference — A Sequencer breakdown highlighting timing tracks and control-rig-driven animation.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
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
        ],
        "phaseDetails": [
          {
            "title": "Phase 1 — Write shot jobs",
            "where": "Before Sequencer: notes / storyboard / three boxes on paper",
            "do": "Write what the audience must learn in each beat: place, clue, threat, reaction, destination. Do not write camera moves yet.",
            "check": "Every planned shot has one clear information/emotion job.",
            "troubleshoot": [
              "If a shot exists only because “a pan would look cool”, delete it or give it a story function."
            ]
          },
          {
            "title": "Phase 2 — Build the shot list",
            "where": "Cinematics → Add Level Sequence → add Cine Cameras + Camera Cuts track",
            "do": "Create 3–5 shots and name cameras by job, not CameraActor_7: e.g. ESTABLISH_ROOM, REVEAL_DOOR, REACTION.",
            "check": "Scrubbing the Camera Cuts track shows the full information sequence in the intended order.",
            "troubleshoot": [
              "If you need more than five shots for a 20-second reveal, combine or remove redundant information."
            ]
          },
          {
            "title": "Phase 3 — Set pacing",
            "where": "Sequencer → adjust section lengths / cut points → play at normal speed",
            "do": "Vary shot duration based on information density. Cut once the audience has read the important thing.",
            "check": "No shot feels like it is waiting after its information has landed.",
            "troubleshoot": [
              "If every shot is the same length, change pacing according to the beat rather than a grid."
            ]
          },
          {
            "title": "Phase 4 — Add one motivated move",
            "where": "Cine Camera transform/focus track → animate only where information changes",
            "do": "Use one push, track, reveal, focus change or character-follow move that exposes something new.",
            "check": "Pausing before vs after the move reveals a meaningful change in information.",
            "troubleshoot": [
              "If the move could be removed with no storytelling loss, make it static or redesign the move."
            ]
          },
          {
            "title": "Phase 5 — Sync one sound beat",
            "where": "Sequencer → add Audio track / place sound event aligned to reveal or cut",
            "do": "Use one sound cue to support a reveal, transition or off-screen implication — not wallpaper music.",
            "check": "The sound arrives at a deliberate picture beat and strengthens what the viewer notices.",
            "troubleshoot": [
              "If the sound simply starts at frame 0 and loops, choose a specific narrative moment for it."
            ]
          },
          {
            "title": "Phase 6 — Return control cleanly",
            "where": "Trigger sequence from gameplay → test input/camera state before, during and after",
            "do": "Run the scene from gameplay and verify player control/camera are restored without a snap, stuck input or wrong orientation.",
            "check": "The player can move immediately after the sequence and understands what to do next.",
            "troubleshoot": [
              "If the ending frame points away from the next goal, redesign the hand-back rather than relying on UI."
            ]
          },
          {
            "title": "Phase 7 — Production tidy",
            "where": "Sequencer → folders/subsequences/named tracks → align one audio beat exactly",
            "do": "Organise cameras, shots and audio so another student can understand the sequence in under a minute.",
            "check": "A partner can identify shot order and edit one shot without asking what Track_12 is.",
            "troubleshoot": [
              "If everything is unnamed, tidy before adding more cinematic complexity."
            ]
          }
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 7 and 9 — cinematic sequences and adaptive cutscenes. Selected figures/page crops are now embedded inline in this module under the college's licensed educational use.",
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
      "engineUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sequencer-cinematic-editor-unreal-engine",
      "caseStudies": [
        {
          "game": "Journey",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/638230/ss_ed77e7844e32c4cb181ce585fa1a368285c66ec5.1920x1080.jpg?t=1729099361",
          "sourceUrl": "https://www.gdcvault.com/play/1017700/Designing119Journey",
          "sourceTitle": "GDC Vault — Designing Journey",
          "lens": "Camera scale + an intentional emotional arc",
          "notice": "Thatgamecompany designed Journey around a specific emotional experience rather than a conventional power fantasy. Wide views, the distant mountain, changes in scale and the game’s pacing all support an arc from isolation and effort towards connection and release.",
          "steal": "Choose shot scale because of the feeling and information you need to create. A huge environment with a tiny character says something different from the same beat framed close.",
          "task": "Open Jenova Chen’s GDC design talk. Choose three moments from Journey and label the intended emotion, the camera distance and the environmental scale that supports it. Then restage one beat with the opposite framing and predict what changes.",
          "sourceType": "GDC DESIGN TALK • THATGAMECOMPANY",
          "sourceWhy": "Jenova Chen explains how Journey was prototyped and polished around a deliberate emotional arc."
        },
        {
          "game": "What Remains of Edith Finch",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/501300/ss_77ebb61562a25dbcd0c4cc1c5090b76a76a055b2.1920x1080.jpg?t=1785424558",
          "sourceUrl": "https://blog.playstation.com/archive/2017/04/25/the-personal-stories-that-shaped-remarkable-ps4-adventure-what-remains-of-edith-finch-out-today/",
          "sourceTitle": "PlayStation Blog — The personal stories that shaped What Remains of Edith Finch",
          "lens": "Playable stories + changing interaction rules",
          "notice": "Giant Sparrow built Edith Finch as a collection of playable short stories rather than one repeated interaction model. Each family story can change point of view, controls, rhythm and visual treatment because the mechanic is chosen to express that person’s memory and death.",
          "steal": "A cinematic transition is stronger when the presentation rule changes for a story reason. Do not change camera or controls merely to look clever; make the change communicate the memory differently.",
          "task": "Read Ian Dallas’s explanation of the project. Compare two Finch stories: write what changes in camera/controls, what emotion that rule creates, and how the game returns the player to Edith afterwards.",
          "sourceType": "CREATIVE DIRECTOR ARTICLE • GIANT SPARROW",
          "sourceWhy": "Creative director Ian Dallas explains the game as a set of playable short stories and the design goal behind those radically different sequences."
        },
        {
          "game": "Psychonauts 2",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/607080/page_bg_raw.jpg?t=1745521663",
          "sourceUrl": "https://www.doublefine.com/news/level-design-101",
          "sourceTitle": "Double Fine — Level Design 101: Psychonauts 2",
          "lens": "Staging surreal spaces so the player still reads them",
          "notice": "Double Fine’s mental worlds can break normal proportions and architecture, but level designers still control pace, route and attention. The studio describes taking a concept for a brain and turning it into a playable world while using strong shapes and deliberate “wonk” to keep the style cohesive.",
          "steal": "Stylisation can distort reality, but it cannot remove hierarchy. Decide what the player must notice first, then let the weirdness happen around that priority.",
          "task": "Watch/read Double Fine’s level-design breakdown. Sketch a surreal room with one route, one focal story object and one optional curiosity. Distort the architecture, but annotate the three cues that preserve the order of attention.",
          "sourceType": "STUDIO LEVEL-DESIGN BREAKDOWN • DOUBLE FINE",
          "sourceWhy": "Senior level designer Joshua Herbert explains how a Psychonauts 2 concept becomes a playable world and how designers control pace and guidance."
        }
      ],
      "researchMissions": [
        {
          "title": "Trailer Shot Bingo",
          "duration": "10 min",
          "brief": "Watch 60–90 seconds of a game trailer and count shot types.",
          "steps": [
            "Count wide / medium / close.",
            "Count moving vs static shots.",
            "Mark the longest shot.",
            "Write why the editor cuts at three moments."
          ],
          "evidence": "Simple tally sheet + one paragraph about pacing."
        },
        {
          "title": "Mute the Scene",
          "duration": "10 min",
          "brief": "Watch a short cutscene muted and write only what the camera communicates.",
          "steps": [
            "What is revealed first?",
            "What is hidden?",
            "Who has visual power?",
            "When does the shot size change and why?"
          ],
          "evidence": "Four bullet observations + one camera change you would make."
        }
      ],
      "challenges": [
        {
          "title": "Three Shots Only",
          "constraint": "Exactly three shots, maximum 20 seconds.",
          "goal": "Communicate place, threat and player goal."
        },
        {
          "title": "One Lens",
          "constraint": "Pick one focal length and never change it.",
          "goal": "Create variety through staging, distance and movement instead."
        },
        {
          "title": "No Fly-Through",
          "constraint": "No aimless camera travel.",
          "goal": "Every camera move must reveal new information or track meaningful action."
        }
      ],
      "resources": [
        {
          "title": "Guerrilla at GDC 2023 — Cinematics",
          "type": "Developer trail",
          "url": "https://www.guerrilla-games.com/read/guerrilla-gdc-2023",
          "why": "Points students toward the studio’s cinematics production thinking."
        },
        {
          "title": "Alan Wake 2 — Photo Mode",
          "type": "Composition practice",
          "url": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "why": "Useful for focal length, focus, exposure and lighting analysis."
        }
      ],
      "afterBuild": {
        "title": "BLACK BOX: Tell It Without Dialogue",
        "brief": "Rebuild your 20-second reveal so it communicates the same story beat with dialogue and subtitles removed.",
        "constraints": [
          "No text.",
          "Four cuts maximum.",
          "At least one moment of player-relevant information."
        ],
        "improve": "Show both versions to a tester and ask what they understood from the camera alone.",
        "evidence": "Shot list + tester summary."
      },
      "industryDeepDives": [
        {
          "type": "video",
          "title": "The Cinematography of God of War",
          "source": "GDC • Dori Arazi, Santa Monica Studio",
          "url": "https://www.youtube.com/watch?v=z0-ddTqz0XE",
          "youtubeId": "z0-ddTqz0XE",
          "duration": "62 min",
          "focus": "Visual language, emotional framing, virtual camera work and the constraints created by God of War’s no-cut presentation.",
          "watchFor": "Notice how a strong limitation — no cuts — forces staging, choreography and camera language to become more deliberate.",
          "task": "Shoot the same 20-second scene twice: once with cuts, once as a single continuous shot. Compare what each version makes easier or harder."
        },
        {
          "type": "article",
          "title": "The Art of the Scene: Cinematic Challenges in God of War",
          "source": "PlayStation Blog • Dori Arazi",
          "url": "https://blog.playstation.com/2018/09/28/the-art-of-the-scene-cinematic-challenges-in-god-of-war/",
          "duration": "10 min read",
          "focus": "Concrete scene problems: staging, scale, pre-planning, virtual camera tools and maintaining a consistent visual language.",
          "watchFor": "Look for moments where cinematics require solutions from animation, camera, design and technology together.",
          "task": "Storyboard one scene with a production constraint written under every shot: player control, actor scale, collision, continuity or timing."
        },
        {
          "type": "podcast",
          "title": "Worlds Collide — The No Cut Camera",
          "source": "Santa Monica Studio / PlayStation",
          "url": "https://blog.playstation.com/?p=220456",
          "duration": "Developer podcast",
          "focus": "Director of Photography, gameplay camera design and programming discussing the same feature from different disciplines.",
          "watchFor": "Listen for disagreements or competing needs between film language and gameplay control.",
          "task": "Write one rule for when your cutscene may take camera control away from the player — and one rule for when it must not."
        }
      ]
    },
    {
      "id": "audio",
      "title": "Audio & Sound Design",
      "icon": "♪",
      "description": "Design spaces the player can understand with their ears: distance, danger, material, direction, rhythm and atmosphere.",
      "principles": [
        "Give every sound a gameplay or world job",
        "Use layers, not one giant ambience",
        "Distance and occlusion matter",
        "Silence is contrast",
        "Test while moving, not standing still"
      ],
      "intro": "Sound design is level design you cannot see. It tells the player what is nearby, what is behind them, whether a space is safe and whether something has changed before the camera confirms it.",
      "lookTitle": "How INSIDE, Outer Wilds and No Man’s Sky use audio as game information",
      "lookIntro": "Sound is not background decoration in these examples. Timing, recurring motifs and procedural layers tell the player about pace, place and changing state. Listen for the system underneath the atmosphere.",
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "caption": "Dead Space — Occlusion + projected sound. Use sound to tell the player about spaces outside the camera.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        },
        {
          "src": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — Sparse sound + focus. Do not fill every second. Leave room for important sounds to become events.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        },
        {
          "src": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-03-1920x1080.png",
          "caption": "Alan Wake 2 — Atmosphere + state change. Design ambience as layers that can enter/leave with game state.",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/sequencer-audio-markers.webp",
          "caption": "Book reference — Using markers in Sequencer to align timing, beats and audio-driven moments.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/sequencer-audio-tracks.webp",
          "caption": "Book reference — Audio tracks placed directly in Sequencer, showing sound timed against cinematic beats.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
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
        ],
        "phaseDetails": [
          {
            "title": "Phase 1 — Decide what the player should know",
            "where": "Before placing audio: write source, meaning, direction and when it should be heard",
            "do": "Choose one off-screen source and define the information it gives: machinery = destination, radio = life, creature = danger, storm = exterior, crowd = populated area.",
            "check": "You can state the player-facing job in one sentence.",
            "troubleshoot": [
              "If the answer is only “atmosphere”, make it more specific: what does the sound tell the player about space or state?"
            ]
          },
          {
            "title": "Phase 2 — Build a quiet base",
            "where": "Level Editor → place/author a low-level ambient bed → test at gameplay volume",
            "do": "Create a restrained ambience layer with enough space for the important source to stand out.",
            "check": "You can hear the environment without the focal source fighting a wall of constant noise.",
            "troubleshoot": [
              "If everything is loud all the time, lower or remove layers before adding the focal cue."
            ]
          },
          {
            "title": "Phase 3 — Make distance readable",
            "where": "Sound Attenuation asset / Audio Component attenuation settings → walk toward and past source",
            "do": "Tune falloff/spatialisation while moving from far → near → past the source.",
            "check": "A listener can tell whether they are approaching or moving away without seeing it.",
            "troubleshoot": [
              "If it disappears abruptly, widen falloff; if it feels everywhere, reduce range or improve spatialisation."
            ]
          },
          {
            "title": "Phase 4 — Break repetition",
            "where": "Sound Cue / MetaSound / randomised player → add 2–3 low-frequency variations",
            "do": "Layer or randomise occasional details with different intervals/pitch/selection rather than looping one obvious event.",
            "check": "Listen for 45 seconds: there is no easily predictable “here comes the same clank again” rhythm.",
            "troubleshoot": [
              "If random sounds fire constantly, increase silence and rarity. Variation needs contrast."
            ]
          },
          {
            "title": "Phase 5 — Match the room",
            "where": "Audio Volume / Submix / reverb approach available in project → A/B inside vs outside space",
            "do": "Add reverb/space treatment only if the room type needs it, and compare speech/important cues for clarity.",
            "check": "The room feels different acoustically without turning all sounds into mush.",
            "troubleshoot": [
              "If reverb masks direction or dialogue, shorten/reduce it or exclude critical sounds."
            ]
          },
          {
            "title": "Phase 6 — Screen-away test",
            "where": "Play → turn camera away / cover monitor while a partner moves slowly",
            "do": "Test whether direction and distance are inferable through headphones/speakers without the source being visible.",
            "check": "The listener points roughly toward the source and notices meaningful distance change.",
            "troubleshoot": [
              "If they cannot locate it, revisit attenuation/spatialisation before adding more layers."
            ]
          },
          {
            "title": "Phase 7 — Communicate before reveal",
            "where": "Place one cue around a corner/behind door → trigger it before source enters view",
            "do": "Create a three-second or longer information lead where the player hears a state/threat before seeing it.",
            "check": "A tester predicts something about the unseen source before the visual reveal.",
            "troubleshoot": [
              "If they only say “I heard a noise”, make the cue more characteristic in rhythm, material, direction or behaviour."
            ]
          }
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 7–8 — cinematic audio and environmental audio storytelling. Selected figures/page crops are now embedded inline in this module under the college's licensed educational use.",
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
      "engineUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine",
      "caseStudies": [
        {
          "game": "INSIDE",
          "image": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "sourceUrl": "https://www.gamedeveloper.com/audio/video-designing-the-audio-for-i-inside-i-a-game-that-listens",
          "sourceTitle": "Game Developer — Designing the audio for INSIDE, a game that listens",
          "lens": "Audio-driven pacing + silence",
          "notice": "Martin Stig Andersen describes INSIDE as a game that can respond to its own sound. Audio is used to shape pace, suspense and release, and some gameplay timing is driven by the sound system so transitions feel continuous rather than like disconnected effects firing on cues.",
          "steal": "Treat silence and sound timing as part of the gameplay state. The mix should know when the player is approaching, failing, repeating or escaping a beat.",
          "task": "Open the GDC audio breakdown. Take a 20-second tense sequence and draw an audio timeline with silence, build, event and release. Mark one moment where gameplay should wait for or react to the sound rather than simply triggering it.",
          "sourceType": "GDC AUDIO TALK • MARTIN STIG ANDERSEN",
          "sourceWhy": "INSIDE’s audio designer explains feedback loops between gameplay and audio, including pace, suspense, release and audio-driven actions."
        },
        {
          "game": "Outer Wilds",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/753640/ss_c624a6b8edca0d451605592edd927dbcc14917a8.1920x1080.jpg?t=1785424341",
          "sourceUrl": "https://www.mobiusdigitalgames.com/news/the-music-of-outer-wilds-episode-1",
          "sourceTitle": "Mobius Digital — The Music of Outer Wilds: Episode 1",
          "lens": "Recurring music as location + shared state",
          "notice": "Mobius built recognisable musical identities for its travellers and planets, then lets those ideas overlap as the player moves and the loop approaches its end. The score therefore identifies place and emotional state while also connecting distant characters into one system.",
          "steal": "A recurring motif becomes useful game information when the player can recognise what it belongs to and notice when its context changes.",
          "task": "Read Mobius’s music post and listen to the stripped-back campfire theme. Design three versions of one motif for “safe home”, “distant discovery” and “time running out”. Write what changes and what must stay recognisable.",
          "sourceType": "DEVELOPER AUDIO POST • MOBIUS DIGITAL",
          "sourceWhy": "Composer Andrew Prahlow discusses the evolution of the main theme and the simple musical language that underpins the game’s score."
        },
        {
          "game": "No Man’s Sky",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/719b88538c75532ee595b44421e3e13bc3651aff/page_bg_raw.jpg?t=1786366888",
          "sourceUrl": "https://gameinformer.com/b/features/archive/2014/12/22/creating-the-infinite-soundtrack-of-no-man-s-sky.aspx",
          "sourceTitle": "Game Informer — Creating No Man’s Sky’s Infinite Soundtrack",
          "lens": "Procedural music for a procedural universe",
          "notice": "Hello Games and 65daysofstatic did not write one fixed track for every planet. They built musical material that can be reassembled procedurally so the soundtrack can vary with an effectively limitless world while still sounding like No Man’s Sky.",
          "steal": "Procedural ambience needs rules and a coherent palette. Random selection is not a system: decide which layers, motifs and intensities are allowed to combine for each state.",
          "task": "Watch/read the audio interview. Create a four-layer music/ambience system for one procedural biome: base texture, environmental layer, discovery layer and danger layer. Write the condition that adds or removes each layer.",
          "sourceType": "AUDIO DIRECTOR + COMPOSER INTERVIEW • GAME INFORMER",
          "sourceWhy": "Hello Games, its audio director and 65daysofstatic explain how they approached a procedurally generated musical soundscape."
        }
      ],
      "researchMissions": [
        {
          "title": "Eyes-Closed Map",
          "duration": "10 min",
          "brief": "Listen to 30–60 seconds of a game with the screen hidden.",
          "steps": [
            "Draw where you think sources are.",
            "Mark near/far.",
            "Mark continuous/one-shot.",
            "Reveal the screen and compare."
          ],
          "evidence": "Your sound map + two things audio communicated correctly/incorrectly."
        },
        {
          "title": "Scare It With Sound Only",
          "duration": "15 min",
          "brief": "Choose a visually harmless room and redesign the audio to make it threatening.",
          "steps": [
            "Keep all art unchanged.",
            "Choose one low continuous layer.",
            "Add one intermittent off-screen sound.",
            "Use one deliberate silence."
          ],
          "evidence": "A layer list + 20-second recording or written cue timeline."
        }
      ],
      "challenges": [
        {
          "title": "Off-Screen Warning",
          "constraint": "Threat never appears on camera during the setup.",
          "goal": "Make the player understand direction and approach using sound only."
        },
        {
          "title": "Three-Layer Ambience",
          "constraint": "Exactly three looping layers.",
          "goal": "Create depth without turning the mix into mush."
        },
        {
          "title": "Silence Button",
          "constraint": "At one gameplay event, remove more sound than you add.",
          "goal": "Use absence as the strongest cue."
        }
      ],
      "resources": [
        {
          "title": "Motive — Dead Space Audio Developer Livestream",
          "type": "Developer breakdown",
          "url": "https://www.ea.com/ea-studios/motive/news/focus-on-deadspace-audio-design",
          "why": "Covers ALIVE, audio occlusion, projected hallway sound and weapon audio."
        },
        {
          "title": "Dead Space — Intensity Director",
          "type": "Systems + atmosphere",
          "url": "https://www.ea.com/ea-play/news/inside-dead-space-4-the-intensity-director",
          "why": "Shows audio, lighting and events coordinated to shape tension."
        },
        {
          "title": "Hellblade — soundscape development",
          "type": "Developer diary",
          "url": "https://blog.playstation.com/archive/2015/02/23/ninja-theory-reveals-creating-hellblades-soundtrack/",
          "why": "A useful example of music/sound being designed around emotional intent rather than default genre convention."
        }
      ],
      "afterBuild": {
        "title": "BLACK BOX: Hear It Before You See It",
        "brief": "Add one event that the player understands through sound at least three seconds before the visual reveal.",
        "constraints": [
          "No subtitle or UI warning.",
          "The cue must have direction or distance information.",
          "Do not simply make it louder."
        ],
        "improve": "Ask a tester what they think is happening before they see it.",
        "evidence": "Audio cue timeline + tester prediction."
      },
      "industryDeepDives": [
        {
          "type": "video",
          "title": "Dead Space — The Sound of Fear Reimagined",
          "source": "EA Motive • Audio Developer Livestream",
          "url": "https://www.ea.com/ea-studios/motive/news/focus-on-deadspace-audio-design",
          "youtubeId": "yMQOkpZO5eM",
          "duration": "~50 min",
          "focus": "A.L.I.V.E. breathing/dialogue, audio occlusion, weapon sound and environmental atmosphere as gameplay systems.",
          "watchFor": "Notice how the audio team talks about systems and player state rather than just collecting scary noises.",
          "task": "Choose one gameplay variable — health, stamina, danger, proximity — and design an audio response that changes before the HUD does."
        },
        {
          "type": "interview",
          "title": "Dead Space — Andrew Lackey Interview",
          "source": "Designing Sound • Sound Designer Andrew Lackey",
          "url": "https://designingsound.org/2009/12/16/andrew-lackey-dead-space-exclusive-interview/",
          "duration": "12 min read",
          "focus": "Audio tells, ambience, psychological layers, foley and examples where the sound team helped design the experience itself.",
          "watchFor": "Find the section on “audio tells” in boss fights. Sound is giving gameplay information, not merely adding atmosphere.",
          "task": "Add one audio tell to a mechanic in your project and test whether a player reacts before seeing the visual cue."
        },
        {
          "type": "interview",
          "title": "Behind the Haunting Sound of Alan Wake 2",
          "source": "A Sound Effect • Remedy audio team",
          "url": "https://www.asoundeffect.com/alan-wake-2-game-audio/",
          "duration": "Deep interview",
          "focus": "Iteration, grounded source recording, coherent sonic language, light/darkness and reality-shift systems.",
          "watchFor": "Look for examples where the first dramatic idea was rejected because it did not communicate the mechanic clearly enough.",
          "task": "Take one over-designed sound in your project and make a simpler version from a real-world source. A/B test which communicates the action better."
        }
      ]
    },
    {
      "id": "polish",
      "title": "Polish, Optimisation & Presentation",
      "icon": "✓",
      "description": "Turn “it works” into “it reads, performs and presents well” through deliberate triage instead of random final tweaks.",
      "principles": [
        "Profile before guessing",
        "Fix the biggest visible problem first",
        "Compare from the same camera",
        "Presentation should show the design",
        "Stop polishing things the player cannot read"
      ],
      "intro": "Polish is prioritisation. Fix the biggest player-facing problem first, re-test from the same camera, then decide what earns the next ten minutes. Performance and presentation are part of design quality, not separate chores.",
      "lookTitle": "How Hi-Fi RUSH, Rift Apart and Ori keep spectacle readable",
      "lookIntro": "Polish is not “add more effects”. These games coordinate multiple disciplines around one clear experience: rhythm, seamless transitions or readable movement. The useful question is what survives when the screen gets busy.",
      "referenceImages": [
        {
          "src": "https://www.guerrilla-games.com/media/Horizon_FW_Artblast2560x854.png",
          "caption": "Horizon Forbidden West — Production finish. Polish the hierarchy between systems, art, lighting and presentation — not individual details in isolation.",
          "sourceUrl": "https://www.guerrilla-games.com/read/horizon-forbidden-west-art-blast-on-artstation",
          "sourceTitle": "Guerrilla — Horizon Art Blast",
          "kind": "reference"
        },
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ab2445934a3c76c839_control_pm_det_005.webp",
          "caption": "CONTROL — Strong read at a glance. Make the first three seconds of the scene readable.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        },
        {
          "src": "https://drop-assets.ea.com/images/qKm8m5buUQRNr4WIsBTcd/2d8953c4fd3f1e4acd5a78bbc9a16b30/DEAD-SPACE_Media_SLIDE-02-USP-02.jpg",
          "caption": "Dead Space — Atmosphere + readability + performance. Every expensive effect must earn a player-facing job.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/unreal-insights-spike.webp",
          "caption": "Book reference — An Unreal Insights capture showing a performance spike and where to begin investigating it.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/shader-complexity-heatmap.webp",
          "caption": "Book reference — Shader Complexity view mode highlighting expensive materials and areas needing optimisation.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/stat-gpu-world-optimisation.webp",
          "caption": "Book reference — Stat GPU overlay demonstrating a real performance-reading workflow inside Unreal.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/content-browser-folders.webp",
          "caption": "Book reference — A clean Content Browser folder structure: presentation quality also means a project another developer can navigate.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
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
        ],
        "phaseDetails": [
          {
            "title": "Phase 1 — Freeze the comparison",
            "where": "Save a fixed camera + capture BEFORE + write only three priority problems",
            "do": "Take one baseline image and list the three biggest player-facing issues in order.",
            "check": "You have a ranked list, not 20 vague polish ideas.",
            "troubleshoot": [
              "If your list starts with tiny prop alignment while the route is unreadable, re-rank by player impact."
            ]
          },
          {
            "title": "Phase 2 — Readability pass",
            "where": "Play from player height + Lit/Unlit as useful → inspect route, focal point, collision and noise",
            "do": "Fix the single biggest readability problem first, then re-test from the same start/camera.",
            "check": "The player’s first read is clearer without needing extra UI.",
            "troubleshoot": [
              "If the fix adds more visual noise, simplify instead of layering more cues."
            ]
          },
          {
            "title": "Phase 3 — Consistency pass",
            "where": "Same scene → inspect scale/material/light/prop logic as a set",
            "do": "Find outliers: wrong scale, unrelated roughness, random colour temperature, prop that breaks the fiction. Fix the most obvious family inconsistency.",
            "check": "The scene feels like one authored place rather than assets from five packs.",
            "troubleshoot": [
              "If every object is unique, establish a small repeated visual/material language first."
            ]
          },
          {
            "title": "Phase 4 — Profile a real concern",
            "where": "Viewport → Optimisation Viewmodes / Shader Complexity / stat unit / stat gpu / relevant profiler",
            "do": "Choose one measurable concern based on evidence from a view mode/stat tool.",
            "check": "You can name the expensive/problematic category and where it occurs.",
            "troubleshoot": [
              "If you are guessing “Nanite is slow” or “too many polys” without evidence, return to the profiling view."
            ]
          },
          {
            "title": "Phase 5 — Make one targeted fix",
            "where": "Change only the identified cause: material feature, shadow, VFX density, mesh/LOD, overdraw, etc.",
            "do": "Apply one targeted simplification, then return to the same camera and measurement.",
            "check": "The metric/view improves and the player-facing image remains acceptable.",
            "troubleshoot": [
              "If performance improves but the design read collapses, find a cheaper supporting solution instead of accepting the loss."
            ]
          },
          {
            "title": "Phase 6 — Present the proof",
            "where": "Capture matching AFTER shot + place BEFORE/AFTER side by side",
            "do": "Show the same view before and after. Add a one-line caption naming the problem and fix.",
            "check": "Someone else can see the improvement without you narrating it live.",
            "troubleshoot": [
              "If the cameras differ, recapture; otherwise you cannot tell whether the work or framing caused the improvement."
            ]
          },
          {
            "title": "Phase 7 — Decide what not to polish",
            "where": "Review remaining backlog → choose one item to deliberately leave unfinished",
            "do": "Stop when the next change has lower player impact than the time it costs. Document one thing you intentionally did not polish and why.",
            "check": "Your final note shows prioritisation rather than “ran out of time”.",
            "troubleshoot": [
              "If everything is “must fix”, your priorities are not priorities. Rank by impact and evidence."
            ]
          }
        ]
      },
      "bookReference": "Licensed college reference: Unreal Engine 5 Best Practices (2025), Chapters 10–13 — profiling, rendering optimisation, asset management and troubleshooting. Selected figures/page crops are now embedded inline in this module under the college's licensed educational use.",
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
      "engineUrl": "https://dev.epicgames.com/documentation/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine",
      "caseStudies": [
        {
          "game": "Hi-Fi RUSH",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817230/page_bg_raw.jpg?t=1764916407",
          "sourceUrl": "https://www.gameinformer.com/2023/07/25/the-life-and-career-of-hi-fi-rush-creator-john-johanas",
          "sourceTitle": "Game Informer — The Life And Career Of Hi-Fi Rush Creator John Johanas",
          "lens": "One rhythm rule shared by every discipline",
          "notice": "John Johanas’s core pitch was not simply “combat to music”. Hi-Fi RUSH makes the whole world obey the beat: attacks, animation, industrial machinery, platforming, cutscenes and even small environmental movements reinforce the same internal metronome.",
          "steal": "Polish becomes coherent when several disciplines reinforce one rule. Do not add five unrelated effects; make animation, VFX, sound, UI and environment all confirm the same player-facing event.",
          "task": "Read the John Johanas feature. Choose one 10-second Hi-Fi RUSH clip and list every channel that exposes the beat: animation, environment, sound, VFX, UI and camera. Circle the one a player could still follow if the music were muted.",
          "sourceType": "CREATOR INTERVIEW • GAME INFORMER",
          "sourceWhy": "Johanas explains the early prototypes and the idea that everything from combat to the world itself should move to the music."
        },
        {
          "game": "Ratchet & Clank: Rift Apart",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1895880/ss_13372af67343a2f2fc1332bc0b7a8e67db4a336b.1920x1080.jpg?t=1750956328",
          "sourceUrl": "https://www.axios.com/2021/07/20/sony-ps5-insomniac-ratchet-clank",
          "sourceTitle": "Axios — Insomniac on the graphics and instant world transitions of Rift Apart",
          "lens": "Instant transitions without losing player orientation",
          "notice": "Insomniac used the PS5 storage pipeline to unload one environment and load another fast enough for rift transitions to become part of the spectacle. The technical trick only works as design when the player still understands where Ratchet is, what is threatening him and what they can control after the transition.",
          "steal": "Fast technology should not produce fast confusion. Protect character position, threat direction and the next controllable action across a dramatic transition.",
          "task": "Read the Insomniac tech interview. Storyboard a three-shot rift transition: before, crossing, after. Keep one visual anchor or motion direction consistent so the player can re-orient immediately.",
          "sourceType": "DEVELOPER TECH INTERVIEW • INSOMNIAC",
          "sourceWhy": "Insomniac explains how the SSD allowed entire environments to unload/load during transitions instead of hiding loading behind travel sequences."
        },
        {
          "game": "Ori and the Will of the Wisps",
          "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1057090/ss_ef0d1606df59247a966e31931884a534a4ad8caa.1920x1080.jpg?t=1759530749",
          "sourceUrl": "https://www.inverse.com/gaming/ori-will-of-the-wisps-interview",
          "sourceTitle": "Inverse — How Ori and the Will of the Wisps blends art and music to perfection",
          "lens": "Effects-rich scenes that preserve value separation",
          "notice": "Ori’s art team layers dynamic lighting, particles, animated backgrounds and reactive set dressing around a very fast character. Art director Jeremy Gritton describes checking scenes in greyscale because colour can hide poor value separation — a practical way to test whether Ori and hazards still read through the beauty.",
          "steal": "Polish should make motion feel richer while preserving the contrast order: player and immediate hazard first, supporting action second, background last.",
          "task": "Read the art/music interview and use Gritton’s greyscale test on an Ori screenshot or your own scene. Rank player, hazard, enemy and background by value contrast, then name the first effect you would reduce if the order is wrong.",
          "sourceType": "ART + MUSIC INTERVIEW • MOON STUDIOS",
          "sourceWhy": "Art director Jeremy Gritton gives a concrete readability technique: flip scenes to greyscale to check value separation instead of trusting colour alone."
        }
      ],
      "researchMissions": [
        {
          "title": "Three-Second Portfolio Test",
          "duration": "10 min",
          "brief": "Open five environment/level-design portfolio images for only three seconds each.",
          "steps": [
            "Write what you remember.",
            "Reopen and check accuracy.",
            "Identify the focal hierarchy.",
            "Rank the clearest presentation, not the prettiest art."
          ],
          "evidence": "Five quick notes + one rule you will use in your own final screenshot."
        },
        {
          "title": "Performance Detective",
          "duration": "15 min",
          "brief": "Look at one visually heavy scene and predict where the cost might be before opening profiling tools.",
          "steps": [
            "List likely geometry cost.",
            "List material/VFX cost.",
            "List lighting/shadow cost.",
            "Then profile and compare your guess."
          ],
          "evidence": "Prediction vs actual findings table."
        }
      ],
      "challenges": [
        {
          "title": "Fifteen-Minute Triage",
          "constraint": "15 minutes, maximum three changes.",
          "goal": "Improve the scene more than an hour of random tweaking."
        },
        {
          "title": "Same Camera A/B",
          "constraint": "Lock the camera before the fix.",
          "goal": "Prove the change helped instead of relying on memory."
        },
        {
          "title": "Budget Cut",
          "constraint": "Reduce one expensive visual category by 30%.",
          "goal": "Keep the player-facing design read intact."
        }
      ],
      "resources": [
        {
          "title": "Guerrilla — Horizon Art Blast",
          "type": "Professional presentation",
          "url": "https://www.guerrilla-games.com/read/horizon-forbidden-west-art-blast-on-artstation",
          "why": "A route into production-quality portfolio work across disciplines."
        },
        {
          "title": "Motive — Dead Space Art Developer Livestream",
          "type": "Production breakdown",
          "url": "https://www.ea.com/ea-studios/motive/news/art-developer-livestream",
          "why": "Shows art, lighting, VFX and environment pillars working as a coordinated final experience."
        }
      ],
      "afterBuild": {
        "title": "BLACK BOX: One-Hour Ship",
        "brief": "Freeze the project after one final hour. Spend that hour using a written priority list, not intuition.",
        "constraints": [
          "Profile first.",
          "Maximum five fixes.",
          "Every fix needs a before/after test."
        ],
        "improve": "Rank the fixes by player impact. Which one was not worth the time?",
        "evidence": "Priority list + three locked-camera A/B comparisons."
      },
      "industryDeepDives": [
        {
          "type": "video",
          "title": "Inside Alan Wake 2: How Remedy Delivered a Visual Masterpiece",
          "source": "Digital Foundry • Remedy technical interview",
          "url": "https://www.youtube.com/watch?v=ZTW7bDdHC6g",
          "youtubeId": "ZTW7bDdHC6g",
          "duration": "50 min",
          "focus": "Mesh shaders, ray tracing, streaming, memory, platform scaling and the decisions behind shipping an ambitious visual target.",
          "watchFor": "The useful question is not “how fancy is it?” — it is “what did the team change to keep the intended experience on different hardware?”",
          "task": "Pick one visual feature in your project. Define its minimum acceptable version before you optimise it."
        },
        {
          "type": "talk",
          "title": "Naughty Dog at SIGGRAPH 2020",
          "source": "Naughty Dog • The Last of Us Part II",
          "url": "https://www.naughtydog.com/blog/naughty_dog_at_siggraph_2020",
          "duration": "Talks + slides",
          "focus": "Technical art, low-level optimisation, volumetrics and lighting while maintaining a demanding visual target on PS4.",
          "watchFor": "Look at optimisation as diagnosis: identify the expensive part, understand why it matters, then change the smallest thing that solves the cost.",
          "task": "Profile one scene, make one targeted change, profile again and record the before/after number."
        },
        {
          "type": "breakdown",
          "title": "Remedy’s Public Alan Wake 2 GDC Talks",
          "source": "Remedy Entertainment",
          "url": "https://www.remedygames.com/article/explore-remedys-gdc2024-talks-on-creating-alan-wake-2",
          "duration": "Presentation collection",
          "focus": "Programming, visual arts, audio and environment-art talks from the same shipped game — useful for seeing polish as a cross-discipline process.",
          "watchFor": "Pick two talks from different disciplines and find one place where their constraints affect each other.",
          "task": "Write a tiny “ship checklist” for your current build: one design risk, one visual risk, one audio risk and one performance risk."
        }
      ]
    }
  ],
  "resources": [
    {
      "id": "fab-free",
      "title": "Fab — Free Unreal Engine Assets",
      "type": "UE-ready assets",
      "category": "assets",
      "url": "https://www.fab.com/channels/unreal-engine?is_free=1",
      "note": "Free Unreal Engine listings across 3D, materials, VFX and audio. Use the Free filter and check the licence on the individual listing.",
      "license": "LISTING-SPECIFIC",
      "bestFor": "UE-ready placeholders and production assets",
      "icon": "F"
    },
    {
      "id": "fab-samples",
      "title": "Epic Samples on Fab",
      "type": "Sample projects",
      "category": "assets",
      "url": "https://www.fab.com/channels/unreal-engine?is_free=true",
      "note": "Study how Epic builds environments, animation systems and example content. Treat sample projects as things to inspect and learn from, not a finished project to hand in.",
      "license": "EPIC / LISTING TERMS",
      "bestFor": "Learning from complete Unreal projects",
      "icon": "E"
    },
    {
      "id": "ambientcg",
      "title": "ambientCG",
      "type": "PBR • HDRIs • 3D models",
      "category": "assets",
      "url": "https://ambientcg.com/",
      "note": "A huge library of PBR materials, HDRIs and models. Assets are CC0, so they are especially easy to use for student materials, lighting and environment work.",
      "license": "CC0",
      "bestFor": "Textures, material studies, HDRI lighting",
      "icon": "A"
    },
    {
      "id": "polyhaven",
      "title": "Poly Haven",
      "type": "HDRIs • Textures • 3D models",
      "category": "assets",
      "url": "https://polyhaven.com/",
      "note": "High-quality CC0 assets with no attribution requirement. Excellent for lighting tests, materials, environments and look-development.",
      "license": "CC0",
      "bestFor": "HDRIs, scanned materials and hero placeholders",
      "icon": "P"
    },
    {
      "id": "kenney",
      "title": "Kenney",
      "type": "2D • UI • Low-poly • Prototypes",
      "category": "assets",
      "url": "https://kenney.nl/assets",
      "note": "Massive collection of public-domain CC0 game assets. Particularly useful when the lesson is design and students need readable placeholder art immediately.",
      "license": "CC0",
      "bestFor": "Greybox-to-playable prototypes, UI and simple art",
      "icon": "K"
    },
    {
      "id": "quaternius",
      "title": "Quaternius",
      "type": "Low-poly 3D • Characters • Props",
      "category": "assets",
      "url": "https://quaternius.com/",
      "note": "Free low-poly game assets for personal, educational and commercial projects. The current Quaternius Asset License allows use and modification but not standalone asset redistribution.",
      "license": "QAL — CHECK TERMS",
      "bestFor": "Fast 3D prototypes, characters and environment kits",
      "icon": "Q"
    },
    {
      "id": "mixamo",
      "title": "Adobe Mixamo",
      "type": "Characters • Animation",
      "category": "assets",
      "url": "https://www.mixamo.com/",
      "note": "Fast placeholder characters and animations when the design lesson is about movement, staging or gameplay rather than making the character from scratch.",
      "license": "ADOBE TERMS",
      "bestFor": "Prototype animation and character motion",
      "icon": "M"
    },
    {
      "id": "sonniss-gdc",
      "title": "Sonniss #GameAudioGDC",
      "type": "Professional SFX archive",
      "category": "audio",
      "url": "https://sonniss.com/gameaudiogdc/",
      "note": "Years of professional game-audio giveaway bundles. The current archive is royalty-free and commercially usable with no attribution; raw redistribution and AI/ML training are restricted.",
      "license": "ROYALTY-FREE",
      "bestFor": "High-quality SFX, ambience and audio design",
      "icon": "♪"
    },
    {
      "id": "freesound",
      "title": "Freesound",
      "type": "Sound effects • Ambience",
      "category": "audio",
      "url": "https://freesound.org/",
      "note": "Huge community sound library. Licences vary by individual sound, so check CC0 / attribution / non-commercial terms before using anything.",
      "license": "VARIES — CHECK ITEM",
      "bestFor": "Specific one-off sounds and ambience",
      "icon": "S"
    },
    {
      "id": "noclip-levels",
      "title": "noclip.website — Level Explorer",
      "type": "Interactive game-level museum",
      "category": "study",
      "url": "https://noclip.website/",
      "note": "Fly a free camera around extracted game levels and study layout, scale, sightlines, landmarks and encounter spaces from angles the normal game camera never gives you.",
      "license": "REFERENCE / STUDY",
      "bestFor": "Level-design reverse engineering",
      "icon": "N"
    },
    {
      "id": "interface-in-game",
      "title": "Interface In Game",
      "type": "UI screenshot + video library",
      "category": "study",
      "url": "https://interfaceingame.com/",
      "note": "A large searchable collection of game interfaces. Useful for comparing HUDs, menus, inventories, maps, prompts and visual hierarchy across genres.",
      "license": "REFERENCE / STUDY",
      "bestFor": "UI research and comparison boards",
      "icon": "UI"
    },
    {
      "id": "level-design-book",
      "title": "The Level Design Book",
      "type": "Open level-design reference",
      "category": "study",
      "url": "https://book.leveldesignbook.com/",
      "note": "A practical, critical level-design reference covering process, culture, studies, tools and teaching. Its resources section is also an excellent starting point for student asset hunting.",
      "license": "READ / REFERENCE",
      "bestFor": "Level-design theory, process and research",
      "icon": "▤"
    },
    {
      "id": "noclip-docs",
      "title": "Noclip Documentaries",
      "type": "Developer documentaries",
      "category": "professional",
      "url": "https://www.youtube.com/NoclipVideo",
      "note": "Free documentaries about how games are actually made, with developers discussing design decisions, production constraints and iteration on shipped games.",
      "license": "WATCH / REFERENCE",
      "bestFor": "Developer voices and production context",
      "icon": "▶"
    },
    {
      "id": "gdc-vault",
      "title": "GDC Vault",
      "type": "Industry talks + slides",
      "category": "professional",
      "url": "https://gdcvault.com/browse/GD%20Talks",
      "note": "Search talks by Design, Audio, Visual Arts, Educators and more. Many sessions are available freely; some content requires GDC Vault access.",
      "license": "REFERENCE / ACCESS VARIES",
      "bestFor": "Professional talks, postmortems and specialist practice",
      "icon": "G"
    },
    {
      "id": "game-dev-postmortems",
      "title": "Game Developer — Postmortems",
      "type": "Classic + current postmortems",
      "category": "professional",
      "url": "https://www.gamedeveloper.com/keyword/postmortems",
      "note": "Postmortems written by developers about what worked, what failed and what they would change. Excellent antidote to pretending shipped games appeared fully formed.",
      "license": "READ / REFERENCE",
      "bestFor": "Production reflection and design decision evidence",
      "icon": "GD"
    },
    {
      "id": "accessibility-guidelines",
      "title": "Game Accessibility Guidelines",
      "type": "Inclusive design reference",
      "category": "professional",
      "url": "https://gameaccessibilityguidelines.com/",
      "note": "Developer-friendly Basic, Intermediate and Advanced guidance for avoiding unnecessary barriers and designing for a wider range of players.",
      "license": "REFERENCE",
      "bestFor": "Accessibility checks and design QA",
      "icon": "◎"
    },
    {
      "id": "epic-docs",
      "title": "Epic UE5.8 Documentation",
      "type": "Current engine reference",
      "category": "engine",
      "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-5-8-documentation",
      "note": "Use this when an editor option or workflow has changed. The Hub teaches the task; Epic remains the current technical reference.",
      "license": "OFFICIAL DOCUMENTATION",
      "bestFor": "Checking current Unreal workflow and terminology",
      "icon": "U"
    },
    {
      "id": "packt-best-practices",
      "title": "Unreal Engine 5 Best Practices (Packt, 2025)",
      "type": "College licensed reference",
      "category": "engine",
      "url": "https://www.packtpub.com/en-us/product/unreal-engine-5-best-practices-9781836205654",
      "note": "Licensed college reference for lighting, atmosphere, environment design, cinematics, performance and production habits. The Hub paraphrases concepts; it does not redistribute book pages.",
      "license": "COLLEGE LICENSED",
      "bestFor": "Long-form Unreal production practice",
      "icon": "▤"
    }
  ],
  "tutorials": [
    {
      "id": "greybox-room",
      "title": "Greybox a Playable Room",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "30 min",
      "difficulty": "Beginner",
      "summary": "Build one small third-person greybox with known-good dimensions, a clear route and enough space to test movement before any art is added.",
      "uses": [
        "Blockout",
        "Player scale",
        "Collision",
        "Metrics"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Save a dedicated greybox test level",
          "where": "File → Save Current Level As…",
          "do": "Save a copy of your playable level as L_GreyboxRoom. Keep the existing Third Person character/Player Start.",
          "why": "A separate test level lets you make ugly fast changes without damaging finished work.",
          "see": "The level name shows L_GreyboxRoom and the character spawns normally.",
          "check": "Press Play: you spawn as the normal playable character in L_GreyboxRoom.",
          "troubleshoot": [
            "If you spawn at world origin, add a Player Start from Add (+) → Basic → Player Start."
          ],
          "visual": null
        },
        {
          "title": "Make a 16 m × 12 m floor",
          "where": "Level Editor → Add (+) → Shapes → Cube → Details → Transform",
          "do": "Place one default Engine cube. Set Scale to X 16, Y 12, Z 0.2. This gives a 1600 × 1200 × 20 cm floor when using the standard 100 cm cube.",
          "why": "A fixed room size gives you something measurable to judge instead of an arbitrary empty space.",
          "see": "A large flat rectangular floor fills the test area.",
          "check": "Walk from one end to the other without falling off.",
          "troubleshoot": [
            "If your cube is not the standard 100 cm Engine cube, use equivalent dimensions rather than the exact scale values."
          ],
          "visual": null
        },
        {
          "title": "Build walls and one doorway",
          "where": "Duplicate the floor cube / Add (+) → Shapes → Cube → Details → Transform",
          "do": "Use cubes about 20 cm thick and 400 cm high for the four walls. Leave one doorway approximately 200 cm wide and 240 cm high.",
          "why": "Greybox geometry should establish scale, enclosure and routes before decoration.",
          "see": "The room feels enclosed, and the doorway is comfortably usable by the Third Person character.",
          "check": "Press Play and run through the doorway forwards and while turning the camera.",
          "troubleshoot": [
            "If the camera clips badly, widen the doorway before adding more detail."
          ],
          "visual": null
        },
        {
          "title": "Add one obstacle and keep a 250 cm route",
          "where": "Level Editor → Add (+) → Shapes → Cube → move/scale in Viewport",
          "do": "Place one cover/obstacle 200 × 100 × 100 cm. Position it so the intended route around it stays at least 250 cm wide.",
          "why": "One obstacle is enough to reveal whether the room supports movement and camera behaviour.",
          "see": "The obstacle creates a choice of movement without turning the room into a maze.",
          "check": "Sprint around both sides of the obstacle without snagging or fighting the camera.",
          "troubleshoot": [
            "If both sides feel cramped, move the obstacle rather than shrinking the player route."
          ],
          "visual": null
        },
        {
          "title": "Create one obvious destination",
          "where": "Level Editor → Add (+) → Shapes → Cube",
          "do": "At the far side of the room add a raised 300 × 300 cm platform, large opening or tall block that clearly reads as the destination. Do not add arrows or HUD text.",
          "why": "A greybox should already communicate where attention and movement are meant to go.",
          "see": "There is one area that stands out through size, opening or position alone.",
          "check": "Ask another student where they think they should go before they touch the controls.",
          "troubleshoot": [
            "If they point somewhere else, simplify competing shapes before adding lights or signs."
          ],
          "visual": null
        },
        {
          "title": "Play the whole room from player height",
          "where": "Level Editor → Play",
          "do": "Run the room three times: straight through, hugging the walls, and circling the obstacle. Fix any doorway, collision or camera problem you hit.",
          "why": "Editor-fly-camera layouts often fail once a real capsule and camera have to use them.",
          "see": "The greybox is ugly but playable, readable and quick to edit.",
          "check": "You can complete all three runs without collision surprises and can explain the intended route in one sentence.",
          "troubleshoot": [
            "Do not start replacing cubes with final assets yet; fix the blockout first."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Starting with detailed meshes before the room works.",
        "Judging scale only from the editor fly camera.",
        "Making doorways and routes just wide enough for the capsule but uncomfortable for the camera."
      ],
      "makeItYours": [
        "Make a cramped horror version and a heroic large-scale version from the same footprint.",
        "Add a second entrance and see how it changes the focal point."
      ],
      "worksWhen": [
        "The Third Person character can traverse the whole room cleanly.",
        "The main destination reads without UI arrows.",
        "Major dimensions are deliberate and easy to change."
      ],
      "icon": "□",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — Contrast + route readability. Make the valid route easier to read than the background before you add UI.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Level Design examples",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/level-design-content-examples"
      },
      "prescriptive": true
    },
    {
      "id": "player-scale",
      "title": "Check Player Scale & Metrics",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Build a reusable metric test strip for doorways, corridors and cover so new levels start from dimensions you have actually play-tested.",
      "uses": [
        "Metrics",
        "Third Person",
        "Collision",
        "Proportions"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Place a 100 cm reference cube",
          "where": "Level Editor → Add (+) → Shapes → Cube",
          "do": "Place one standard Engine cube at default scale and label it Metric_100cm in the Outliner.",
          "why": "A known 1 m object makes scale errors obvious beside the player.",
          "see": "One labelled 1 m cube sits beside the player.",
          "check": "Press Play and stand next to it. It should read as roughly waist height, not a tiny prop or a wall.",
          "troubleshoot": [
            "If it is not 100 cm, check that you used the Engine cube and Scale is 1,1,1."
          ],
          "visual": null
        },
        {
          "title": "Build a comfortable doorway test",
          "where": "Add (+) → Shapes → Cube → duplicate for two uprights and a header",
          "do": "Create an opening about 200 cm wide × 240 cm high. Use two side cubes and one top cube so the opening is visible, not just imagined.",
          "why": "A comfortable doorway needs clearance for both the player capsule and camera movement.",
          "see": "The player passes cleanly without the camera slamming into the frame.",
          "check": "Run through it, turn as you enter, then reverse through it.",
          "troubleshoot": [
            "If it technically fits but feels awkward, widen it; functional clearance is not the same as comfortable movement."
          ],
          "visual": null
        },
        {
          "title": "Build a corridor width test",
          "where": "Duplicate wall cubes to form a short 600 cm corridor",
          "do": "Set the inside width to about 300 cm and wall height to about 300–400 cm.",
          "why": "Testing a standard corridor gives you a reusable starting metric for blockouts.",
          "see": "The corridor feels intentional rather than claustrophobic by accident.",
          "check": "Run forward, turn 180 degrees and pass another large prop/character-sized proxy if available.",
          "troubleshoot": [
            "If the camera constantly touches both walls, widen the corridor before treating the discomfort as “atmosphere”."
          ],
          "visual": null
        },
        {
          "title": "Make two cover-height references",
          "where": "Add (+) → Shapes → Cube",
          "do": "Create one block about 100 cm high and one about 180 cm high. Label them Metric_LowCover and Metric_FullCover.",
          "why": "Known cover heights help you reason about sightlines and silhouettes before building combat systems.",
          "see": "The two blocks create clearly different levels of concealment.",
          "check": "From the gameplay camera, compare what part of the character is hidden by each block.",
          "troubleshoot": [
            "These are starting references, not universal rules; your camera and character can require different values."
          ],
          "visual": null
        },
        {
          "title": "Save the metric strip for reuse",
          "where": "World Outliner → create Folder “Metrics” → save level",
          "do": "Put the reference cube, doorway, corridor and cover blocks into a Metrics folder and save the map.",
          "why": "A reusable tested kit is faster and safer than guessing scale in every new level.",
          "see": "Your test strip is labelled, saved and easy to compare against future spaces.",
          "check": "Open a new/duplicate level and confirm you can copy the Metrics folder or use the test map as reference.",
          "troubleshoot": [
            "Keep the metric pieces grey and boring so nobody mistakes them for final art."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using real-world measurements without ever testing the gameplay camera.",
        "Scaling the character to fix a badly sized environment.",
        "Treating one metric as a rule for every genre and camera."
      ],
      "makeItYours": [
        "Create metrics for first-person vs third-person and compare.",
        "Make a boss-door metric that exaggerates scale."
      ],
      "worksWhen": [
        "You have tested doorway, corridor and cover references.",
        "The measurements are labelled and reusable.",
        "You can explain when you would deliberately break one of the starter metrics."
      ],
      "icon": "↕",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ad955ffc88abcd7409_CONTROL_Blast_Furnace_169.webp",
          "caption": "CONTROL — Scale + landmarks. Use one shape or landmark that survives from several viewpoints.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Designing Levels",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designing-levels-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "focal-point",
      "title": "Create a Strong Focal Point",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Build a controlled test where one object is noticed first using geometry and contrast rather than a HUD marker.",
      "uses": [
        "Composition",
        "Contrast",
        "Landmarks",
        "Sightlines"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Choose one target and one approach",
          "where": "Use L_GreyboxRoom or another simple blockout → Play",
          "do": "Stand at the main entrance and choose exactly one target at the far side: an exit, machine, tower or objective proxy. Take a screenshot from the player camera.",
          "why": "A focal point only makes sense relative to a specific viewing position and route.",
          "see": "You have a baseline screenshot from the real approach.",
          "check": "You can circle one object in the screenshot and say “this must be noticed first.”",
          "troubleshoot": [
            "If you want two things noticed first, choose one; hierarchy needs priority."
          ],
          "visual": null
        },
        {
          "title": "Give the target a stronger silhouette",
          "where": "Level Editor → Add (+) → Shapes → Cube / move existing geometry",
          "do": "Make the target taller or more isolated than nearby shapes. As a starter, use a target around 200 cm wide and 300 cm high with clear empty space around its outline.",
          "why": "Silhouette and negative space survive even when lighting and colour change.",
          "see": "The target has a clean outline rather than blending into nearby clutter.",
          "check": "Switch to Unlit view or temporarily ignore lighting: the target still reads as a distinct shape.",
          "troubleshoot": [
            "Do not solve this by making every surrounding object smaller; remove only direct competitors."
          ],
          "visual": null
        },
        {
          "title": "Frame the target with the room",
          "where": "Level Editor → Viewport → move two wall/beam cubes around the sightline",
          "do": "Use a doorway, two vertical forms or ceiling edge to create a simple frame around the target from the approach. Keep the opening centred enough that the target is visible before the player reaches it.",
          "why": "Edges and openings guide the eye before the player consciously reads them.",
          "see": "The surrounding geometry creates a visual window around the target.",
          "check": "Return to the exact baseline camera and check that the frame points toward the target.",
          "troubleshoot": [
            "If the frame hides the target while moving, widen it and retest from several steps along the route."
          ],
          "visual": null
        },
        {
          "title": "Add one contrast cue only",
          "where": "Level Editor → select an existing light/material OR Add (+) → Lights → Spot Light",
          "do": "Strengthen only the target with one extra cue: a brighter light pool, darker surrounding value, or a single contrasting material. Do not change the whole room.",
          "why": "Contrast works best when it supports an already readable composition.",
          "see": "The target is clearer with the cue, but geometry still does most of the work.",
          "check": "Toggle the cue off and on; it should strengthen the target, not create it from nothing.",
          "troubleshoot": [
            "If several objects are equally bright or saturated, reduce them before increasing the target further."
          ],
          "visual": null
        },
        {
          "title": "Run a two-second blind test",
          "where": "Play → pause at the saved approach → show another student for two seconds",
          "do": "Ask “What did you notice first?” Do not tell them what the target is. Record the first answer.",
          "why": "Fast unprompted attention is a better test than asking whether they “understand” your intention.",
          "see": "You have actual behaviour data, not just your own judgement.",
          "check": "At least two of three testers name the intended target first.",
          "troubleshoot": [
            "If they miss it, change one cause at a time: silhouette, framing, then contrast."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Making the focal point bright but leaving stronger competing silhouettes.",
        "Testing from a free editor camera instead of the player approach.",
        "Adding arrows or text before fixing composition."
      ],
      "makeItYours": [
        "Create two different focal points at different stages of the route.",
        "Use negative space instead of colour."
      ],
      "worksWhen": [
        "The intended target is noticed first by most testers.",
        "Geometry still guides attention with the extra light/colour cue removed.",
        "You can name the specific visual cause that improved the read."
      ],
      "icon": "◎",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.guerrilla-games.com/media/News/HFW_SCREEN_LEGAL_GLIDER_4K_RGB_20210512.webp",
          "caption": "Horizon Forbidden West — Traversal affordance. Shape terrain around traversal decisions, not just pretty silhouettes.",
          "sourceUrl": "https://www.guerrilla-games.com/read/15-minutes-of-new-gameplay-for-horizon-forbidden-west",
          "sourceTitle": "Guerrilla — Horizon Forbidden West",
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
      "source": {
        "title": "Epic — Level Design",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designing-levels-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "route-readability",
      "title": "Make a Route Read Without Arrows",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "30 min",
      "difficulty": "Beginner",
      "summary": "Build a tiny two-route greybox and make the intended route readable through depth, continuity and a landmark — with no arrows, quest marker or explanatory text.",
      "uses": [
        "Player flow",
        "Sightlines",
        "Landmarks",
        "Playtesting"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Build a deliberately ambiguous fork",
          "where": "Level Editor → Add (+) → Shapes → Cube → duplicate to form a fork",
          "do": "Make a 600 cm approach that reaches two openings. Start with both openings 300 cm wide and equally visible. One will become the real route; the other will become a dead end.",
          "why": "Starting with an ambiguous baseline lets you see which design changes actually improve readability.",
          "see": "Two similar route openings are visible from player height.",
          "check": "Press Play from the approach and confirm that, at first, neither opening obviously wins.",
          "troubleshoot": [
            "If one route is already clearly dominant because of existing art or light, strip those cues back for the test."
          ],
          "visual": null
        },
        {
          "title": "Give the intended route visible depth",
          "where": "Level Editor → extend the chosen route with floor/wall cubes",
          "do": "Extend the real route so the player can see at least about 600–800 cm of traversable space beyond its opening. Let the dead-end route visibly terminate about 200–300 cm beyond its opening.",
          "why": "Visible continuation reads as opportunity; a short terminated view reads as closure.",
          "see": "One opening shows meaningful depth; the other visibly ends.",
          "check": "From the original approach, the real route looks like it goes somewhere and the false route looks finite.",
          "troubleshoot": [
            "Do not use an invisible wall as the first sign of a dead end."
          ],
          "visual": null
        },
        {
          "title": "Continue one piece of floor language",
          "where": "Level Editor → duplicate a simple floor strip / trim / prop marker along the real route",
          "do": "Place 3–4 repeated floor or edge markers from the approach through the intended opening. Keep the false route without that continuation.",
          "why": "Repeated visual language creates continuity without an arrow icon.",
          "see": "A simple repeated shape visually crosses the decision point.",
          "check": "Squint at the scene or view it small: the repeated pattern forms a line into the real route.",
          "troubleshoot": [
            "Keep the markers subtle; if they look like giant painted arrows, reduce their contrast."
          ],
          "visual": null
        },
        {
          "title": "Place a landmark beyond the opening",
          "where": "Add (+) → Shapes → Cube or use one distinctive existing prop",
          "do": "Put one tall/simple landmark 600–1000 cm beyond the intended opening so part of it is visible from the approach. Keep it above or beside the route rather than blocking it.",
          "why": "A landmark gives the player something to move toward after they choose the opening.",
          "see": "The landmark is visible before the choice and supports orientation after it.",
          "check": "Walk toward the route: the landmark disappears and reappears in useful positions rather than vanishing immediately.",
          "troubleshoot": [
            "If it is hidden by the doorway frame, move the landmark rather than widening every wall."
          ],
          "visual": null
        },
        {
          "title": "Make the false route honestly closed",
          "where": "Level Editor → place physical wall, shutter, rubble proxy or strong termination shape",
          "do": "Show the closure before the player enters the dead end. A simple starter version is a wall/shutter visible at the back of the 200–300 cm alcove.",
          "why": "Players should understand “not this way” from the space, not from collision after committing.",
          "see": "The false route looks unavailable before the player hits it.",
          "check": "From the decision point, the false route reads as an alcove/closed area.",
          "troubleshoot": [
            "Do not darken it so much that it looks like a mysterious optional route; use visible physical termination."
          ],
          "visual": null
        },
        {
          "title": "Test without speaking",
          "where": "Play → place tester at the original start point",
          "do": "Ask another student to “move forward” and say nothing else. Watch the first route they choose and where they hesitate. Test three people if possible.",
          "why": "The designer staying silent reveals whether the space itself communicates the route.",
          "see": "You have a route choice result and a note about any hesitation point.",
          "check": "At least two of three testers choose the intended route without arrows or verbal help.",
          "troubleshoot": [
            "If they split evenly, change one variable only and retest: depth, continuity, landmark or closure."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Turning the floor language into a literal arrow.",
        "Using darkness alone to hide a route that still looks traversable.",
        "Explaining the route to the tester before they move."
      ],
      "makeItYours": [
        "Make an optional route read as tempting but non-essential.",
        "Create a loop where the landmark is seen from a new angle."
      ],
      "worksWhen": [
        "Most testers choose the intended route without UI or verbal help.",
        "The false route looks closed before collision.",
        "Depth, continuity and landmark all support the same route."
      ],
      "icon": "→",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — Contrast + route readability. Make the valid route easier to read than the background before you add UI.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Level Design",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designing-levels-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "set-dress-room",
      "title": "Set Dress a Room: Big → Medium → Small",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "30 min",
      "difficulty": "Beginner",
      "summary": "Dress one playable room in three controlled passes — large, medium and small — while protecting movement, focal hierarchy and story.",
      "uses": [
        "Set dressing",
        "Hierarchy",
        "Prop density",
        "Environment story"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Save a clean BEFORE version",
          "where": "File → Save Current Level As…",
          "do": "Save the working blockout as L_Room_Dress_Before, then save another copy as L_Room_Dress_Work. Take one gameplay screenshot from the main entrance.",
          "why": "You need an untouched comparison so dressing decisions can be judged rather than remembered.",
          "see": "You can return to the clean blockout at any time.",
          "check": "Both maps exist and you have one baseline screenshot.",
          "troubleshoot": [
            "Do not overwrite your only clean blockout."
          ],
          "visual": null
        },
        {
          "title": "Choose what the room is for",
          "where": "Play the room from the main route",
          "do": "Write one sentence describing its function, for example “maintenance workshop for two technicians” or “abandoned staff kitchen”. Keep that sentence visible while dressing.",
          "why": "Prop choice is easier when every object has to support a specific use.",
          "see": "The room has one clear functional story before decoration starts.",
          "check": "You can reject a prop by saying it does not fit the room function.",
          "troubleshoot": [
            "If the sentence contains several unrelated functions, simplify it."
          ],
          "visual": null
        },
        {
          "title": "Pass 1 — place only 2–3 large forms",
          "where": "Content Drawer → drag in furniture/machines/shelves → Transform in Details",
          "do": "Place a maximum of three large anchors. Keep the main route at least about 200–250 cm clear and do not block the focal point/exit.",
          "why": "Large masses control silhouette, navigation and composition more than small clutter does.",
          "see": "A few large objects organise the space without filling it.",
          "check": "Play the room: the route still works and the room reads differently even at thumbnail size.",
          "troubleshoot": [
            "If you need ten “large” objects, some of them are really medium detail."
          ],
          "visual": null
        },
        {
          "title": "Pass 2 — make 2–3 medium clusters",
          "where": "Content Drawer → place chairs, boxes, lamps, tools, smaller furniture",
          "do": "Create three medium prop clusters. Give each cluster a job and use three medium props in each. Leave clear empty areas between clusters.",
          "why": "Grouped props read as use and activity; even scatter reads as noise.",
          "see": "The room has readable prop clusters and breathing room.",
          "check": "From the doorway you can point to distinct groups rather than a uniform carpet of objects.",
          "troubleshoot": [
            "If every wall gets a cluster, delete one; negative space is part of the composition."
          ],
          "visual": null
        },
        {
          "title": "Pass 3 — add no more than 8 small details",
          "where": "Content Drawer → place small props only where the player is likely to look closely",
          "do": "Concentrate up to eight small details on one or two story-rich surfaces. Do not evenly distribute cups, papers or debris around the whole room.",
          "why": "Small props should reward inspection, not carry the entire environment design.",
          "see": "Small details sit inside existing clusters instead of forming new random clutter.",
          "check": "Walk the room: the big/medium structure still reads before the tiny details.",
          "troubleshoot": [
            "If deleting the small props destroys the scene, the earlier passes need more work."
          ],
          "visual": null
        },
        {
          "title": "Delete until movement and focus improve",
          "where": "Play → walk the main route and turn the camera through the focal area",
          "do": "Remove any prop that blocks the route, creates a collision snag, tangents with the focal silhouette or competes without adding story. Aim to delete at least one thing.",
          "why": "Professional dressing includes removal; density is not the same as quality.",
          "see": "The dressed room is richer but still easier to read and move through.",
          "check": "Take an AFTER screenshot from the same camera and compare it with BEFORE.",
          "troubleshoot": [
            "If the AFTER is simply busier, remove a cluster and compare again."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Scattering small props before placing the large forms.",
        "Filling every empty patch because it looks “unfinished”.",
        "Letting dressing damage player movement or hide the focal route."
      ],
      "makeItYours": [
        "Make a clean/occupied version and abandoned version.",
        "Tell two different stories with the same furniture."
      ],
      "worksWhen": [
        "Large, medium and small detail reads in that order.",
        "The main route stays clear.",
        "Every prop cluster supports the room’s stated function."
      ],
      "icon": "▦",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "caption": "Dead Space — Lived-in world + threat. Every prop cluster should imply a job, routine or event.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/environmental-clues-dressing.webp",
          "caption": "Book reference — A side-by-side set-dressing example showing how added props increase story clues and scene meaning.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/lighting-mood-comparison.webp",
          "caption": "Book reference — The same scene under two lighting moods, showing how colour and contrast change player interpretation.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        }
      ],
      "source": {
        "title": "Epic — Building Virtual Worlds",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/building-virtual-worlds-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "prop-clusters",
      "title": "Build Believable Prop Clusters",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Build one five-prop “repair in progress” cluster so placement communicates an action instead of random decoration.",
      "uses": [
        "Set dressing",
        "Clustering",
        "Storytelling",
        "Composition"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Use the fixed starter story",
          "where": "Choose a clear 300 × 300 cm patch of floor/wall in an environment scene",
          "do": "For the first version, use this event: “someone stopped repairing a machine/workbench and left suddenly.” If you lack suitable assets, use simple cubes as labelled proxies.",
          "why": "A fixed scenario lets you focus on placement rather than spending the exercise inventing a story.",
          "see": "An empty area is reserved for one readable cluster.",
          "check": "You can name the action in one sentence before placing anything.",
          "troubleshoot": [
            "Do not start with your own complex story; make the starter version work first."
          ],
          "visual": null
        },
        {
          "title": "Place one anchor object",
          "where": "Content Drawer → drag in a workbench, machine or large crate proxy",
          "do": "Place the anchor first. Rotate it so its usable side faces the space where a person would actually stand.",
          "why": "The largest functional object establishes the cluster’s orientation and purpose.",
          "see": "One object defines where the action is happening.",
          "check": "From several metres away, the anchor is clearly the dominant mass.",
          "troubleshoot": [
            "If the anchor blocks the main route, move the whole cluster rather than squeezing props around it."
          ],
          "visual": null
        },
        {
          "title": "Add three supporting objects within arm’s reach",
          "where": "Content Drawer → add toolbox/container + two tools/parts (or labelled proxies)",
          "do": "Place three smaller objects on the usable side of the anchor: one about 30 cm away, one about 60 cm away and one about 90 cm away. Aim their handles/openings toward the implied worker position rather than random rotations.",
          "why": "Spatial relationships imply use: tools near the hand position read differently from tools scattered behind the machine.",
          "see": "Most supporting props sit inside one tight working area.",
          "check": "The three objects look connected to the anchor’s function.",
          "troubleshoot": [
            "If every object points in a different random direction, rotate them to support the same action."
          ],
          "visual": null
        },
        {
          "title": "Add one displaced object to imply interruption",
          "where": "Content Drawer → add one final tool, chair or broken component",
          "do": "Place the fifth prop 80–150 cm away from the tight cluster: a pulled-back chair, dropped wrench or removed part.",
          "why": "One displaced element creates a before/after clue and suggests something changed.",
          "see": "There is a clear contrast between the working cluster and one interrupted item.",
          "check": "The outlying object feels deliberately displaced, not accidentally forgotten.",
          "troubleshoot": [
            "Keep only one displaced object in the starter version; too many creates general mess."
          ],
          "visual": null
        },
        {
          "title": "Protect negative space",
          "where": "Play → inspect the cluster from the normal player route",
          "do": "Leave at least one clear side around the cluster and keep the player route unobstructed. Remove any extra decorative prop that weakens the silhouette.",
          "why": "Empty space lets the grouping read as one idea.",
          "see": "The group reads as a cluster rather than a pile filling the whole room.",
          "check": "From 4–6 metres away you can still see the anchor and the cluster boundary.",
          "troubleshoot": [
            "If it only reads from a close editor camera, simplify and widen the empty margin."
          ],
          "visual": null
        },
        {
          "title": "Five-second story test",
          "where": "Show the cluster to another student from gameplay view for five seconds",
          "do": "Ask “What do you think happened here?” Do not tell them it is a repair scene. Note the first interpretation.",
          "why": "If placement communicates cause and use, viewers should infer something close to the intended action.",
          "see": "You have evidence that the cluster communicates activity.",
          "check": "Their answer includes repair/work/interruption or a similar action, not just “there are props here.”",
          "troubleshoot": [
            "If they cannot infer an action, change positions before changing the asset list."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Randomly rotating every prop for “variation”.",
        "Using too many objects before the five-prop cluster reads.",
        "Placing tools where a person could not realistically use them."
      ],
      "makeItYours": [
        "Build a repeated cluster with small variation.",
        "Make one cluster that hints at danger without text."
      ],
      "worksWhen": [
        "The cluster reads from gameplay distance.",
        "The five props imply one coherent action.",
        "Negative space separates the cluster from the rest of the room."
      ],
      "icon": "●",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.guerrilla-games.com/media/Horizon_FW_Artblast2560x854.png",
          "caption": "Horizon Forbidden West — Reference + visual language. Choose a small visual language and repeat it intentionally.",
          "sourceUrl": "https://www.guerrilla-games.com/read/horizon-forbidden-west-art-blast-on-artstation",
          "sourceTitle": "Guerrilla — Horizon Art Blast",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Building Virtual Worlds",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/building-virtual-worlds-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "decals-story",
      "title": "Use Decals for Wear & Story",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Use one primary decal and two small supporting traces to show a believable cause — wear, leak, damage or repeated use — instead of stamping dirt randomly.",
      "uses": [
        "Decals",
        "Material Domain",
        "Wear",
        "Story"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Pick one physical cause",
          "where": "Play the scene → choose one doorway, pipe, machine or damaged surface",
          "do": "For the starter version choose a simple cause such as “water/grime has leaked from this pipe” or “boots repeatedly pass through this doorway.” Write the cause in one sentence.",
          "why": "Decals communicate story best when their position can be explained by use, damage or environment.",
          "see": "One specific surface and cause are chosen.",
          "check": "You can point to the object/action causing the mark.",
          "troubleshoot": [
            "If the answer is just “it looks dirty”, choose a more specific cause."
          ],
          "visual": null
        },
        {
          "title": "Place one main Decal Actor",
          "where": "Content Drawer → choose a decal material → Add (+) / Place Actors → Decal → Details",
          "do": "Place one decal on the surface directly affected by the cause. Resize the projection box so the main mark is about 120 cm across for this starter floor-stain test.",
          "why": "A controlled projection prevents the mark bleeding onto unrelated surfaces.",
          "see": "One primary mark sits exactly where the cause would create it.",
          "check": "Move around the decal and confirm it does not project through a nearby wall or onto a prop that should be clean.",
          "troubleshoot": [
            "If it projects onto the wrong face, rotate the Decal Actor and reduce the projection depth/size."
          ],
          "visual": null
        },
        {
          "title": "Add two smaller supporting traces",
          "where": "Duplicate the decal or use one related variant",
          "do": "Add exactly two supporting marks, each about 45 cm across, leading away from or surrounding the main mark. Keep them close enough to feel related.",
          "why": "Secondary traces create direction/history without covering the whole environment.",
          "see": "One large trace is supported by two smaller ones.",
          "check": "The three marks form one story cluster, not three unrelated stains.",
          "troubleshoot": [
            "If the eye jumps to the tiny decals first, reduce their opacity/scale."
          ],
          "visual": null
        },
        {
          "title": "Break the stamp pattern",
          "where": "Select the two supporting decals → Transform",
          "do": "Set the three marks to different scales: 80%, 100% and 120% of the source. Rotate the two supporting marks by -15° and +20°. If the material supports tint/opacity variation, keep the changes subtle.",
          "why": "Repeated identical decals reveal the asset rather than the world.",
          "see": "The marks feel related but not duplicated.",
          "check": "You cannot immediately identify three copies of the same rectangular stamp.",
          "troubleshoot": [
            "Do not rotate warning text/signage; variation must respect what the decal represents."
          ],
          "visual": null
        },
        {
          "title": "Check from two distances",
          "where": "Play → stand about 3 m away, then about 8 m away",
          "do": "At 3 m, the cause/story should be readable. At 8 m, the decals should support material break-up without becoming the focal point unless they are signage.",
          "why": "Environment detail has to work at gameplay distance, not only in close editor inspection.",
          "see": "You have judged the decals from normal play views.",
          "check": "The effect contributes at both distances without turning every surface noisy.",
          "troubleshoot": [
            "If they vanish too early, enlarge the primary mark; if they dominate from far away, lower contrast rather than adding more decals."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Stamping the same decal evenly across every wall.",
        "Letting projection boxes affect surfaces that should be clean.",
        "Using damage/wear with no believable source."
      ],
      "makeItYours": [
        "Use decals to guide the player subtly.",
        "Create a before/after clean-vs-damaged area."
      ],
      "worksWhen": [
        "Every decal can be explained by a cause.",
        "The projection stays on intended surfaces.",
        "The pattern reads naturally from gameplay distance."
      ],
      "icon": "✣",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ab2445934a3c76c839_control_pm_det_005.webp",
          "caption": "CONTROL — Repetition + interruption. Repetition makes the exception readable.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Decal Materials",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/decal-materials-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "modular-kit",
      "title": "Build with a Modular Kit",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "30 min",
      "difficulty": "Beginner",
      "summary": "Use a small modular kit on a fixed grid to build two different playable spaces without gaps, scale drift or obvious copy-paste rhythm.",
      "uses": [
        "Modular assets",
        "Grid snapping",
        "Pivots",
        "Reuse"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Identify the repeatable module",
          "where": "Content Drawer → open the modular-kit folder → inspect one wall and one floor piece",
          "do": "Find the kit’s common dimension. If the pieces are built in 100 cm multiples, set Translation Grid Snap to 100 cm for the starter exercise; use the kit’s documented increment if different.",
          "why": "Modular pieces only stay fast when placement follows the dimensions they were authored for.",
          "see": "You know the kit’s wall, floor, corner/turn and doorway pieces plus the working snap increment.",
          "check": "Move one wall by one snap: its edge still lines up with a neighbouring piece.",
          "troubleshoot": [
            "Do not eyeball gaps with grid snap off."
          ],
          "visual": null
        },
        {
          "title": "Build a simple 4 m × 4 m room",
          "where": "Level Editor → drag floor/wall modules into Viewport → keep grid snap on",
          "do": "Use the minimum number of floor and wall modules needed to make approximately a 400 × 400 cm room with one doorway. Do not add props yet.",
          "why": "A small controlled room exposes seams, pivot and scale problems quickly.",
          "see": "A complete empty room exists using only core kit pieces.",
          "check": "Walk the perimeter in Play mode and inspect each join.",
          "troubleshoot": [
            "If two pieces almost meet, fix snap/pivot usage rather than scaling one piece to hide the gap."
          ],
          "visual": null
        },
        {
          "title": "Check the doorway with the player",
          "where": "Play → run through the modular doorway and turn the camera",
          "do": "Use the real Third Person character. Confirm the doorway and corner pieces do not snag collision or make the camera uncomfortable.",
          "why": "A modular kit that looks clean but fails gameplay scale is not production-ready.",
          "see": "The architectural kit works with the gameplay character.",
          "check": "You can pass through, turn and return through the opening cleanly.",
          "troubleshoot": [
            "Do not scale the character to rescue a doorway authored at the wrong size."
          ],
          "visual": null
        },
        {
          "title": "Build a second space from the same pieces",
          "where": "Duplicate the first room nearby → rearrange modules",
          "do": "Using the same floor/wall/door pieces, make a short corridor or second room with a different entrance position and one recess/offset. Keep the same grid.",
          "why": "Variation should come from composition and layout before unique architecture.",
          "see": "Two distinct layouts use the same modular vocabulary.",
          "check": "The second space is clearly different even though the underlying kit is the same.",
          "troubleshoot": [
            "If the second space looks like a copy, change the silhouette/route before adding decorative assets."
          ],
          "visual": null
        },
        {
          "title": "Hide repetition with one structural accent",
          "where": "Content Drawer → use trim, pillar, beam or one hero piece from the kit",
          "do": "Add one justified accent where repetition is most obvious: a support at a seam, trim around a doorway or larger feature at a junction. Do not scatter unique pieces everywhere.",
          "why": "Hero accents work when they support structure and orientation rather than disguising every repeat.",
          "see": "Repetition is reduced without destroying modular consistency.",
          "check": "From the route, one area becomes memorable while most architecture remains reusable.",
          "troubleshoot": [
            "If every module gets an accent, remove most of them; the repeatable base should still be visible."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Turning grid snap off and fixing seams by eye.",
        "Scaling individual wall pieces differently to make them fit.",
        "Using unique assets everywhere instead of getting variation from layout."
      ],
      "makeItYours": [
        "Create two rooms from the same 5 pieces.",
        "Make a hero doorway from otherwise repeated parts."
      ],
      "worksWhen": [
        "Core pieces meet cleanly on the grid.",
        "The player can traverse the modules without collision/camera problems.",
        "Two spaces feel different while reusing the same kit."
      ],
      "icon": "▥",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "caption": "Dead Space — Lived-in world + threat. Every prop cluster should imply a job, routine or event.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Building Virtual Worlds",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/building-virtual-worlds-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "basic-pbr-material",
      "title": "Make a Clean PBR Material",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "25 min",
      "difficulty": "Beginner",
      "summary": "Build one deliberately simple PBR material from scratch, apply it to a test cube, then change roughness and metallic values while watching the light response.",
      "uses": [
        "Material Editor",
        "Base Color",
        "Roughness",
        "Metallic",
        "Normal"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create a clean practice material",
          "where": "Content Drawer → Add (+) → Material",
          "do": "Create a Material named M_Surface_Practice and double-click it to open the Material Editor.",
          "why": "A clean material removes inherited graph complexity while you learn the core PBR inputs.",
          "see": "M_Surface_Practice exists in the Content Drawer and the graph is open.",
          "check": "The Material Editor opens with the main Material output node and an otherwise empty graph.",
          "troubleshoot": [
            "If “Material” is not visible in the Add menu, type Material into the Add search."
          ],
          "visual": null
        },
        {
          "title": "Give Base Color a neutral value",
          "where": "Material Editor → hold 3 and left-click empty graph (Constant3Vector) → connect RGB to Base Color",
          "do": "Set the colour to a neutral mid-grey. Do not use Emissive for this test.",
          "why": "Base Color describes the surface colour that lighting will act on.",
          "see": "A neutral grey surface appears with visible light and shadow.",
          "check": "The preview sphere/cube becomes grey and still responds normally to the preview lighting.",
          "troubleshoot": [
            "If it looks self-lit, make sure the node is connected to Base Color rather than Emissive Color."
          ],
          "visual": null
        },
        {
          "title": "Set a known roughness value",
          "where": "Material Editor → hold 1 and left-click (Constant) → Details → Value 0.50 → connect to Roughness",
          "do": "Start at Roughness 0.50, apply/save, then try 0.15 and 0.85 one at a time. Return to 0.50 when finished comparing.",
          "why": "Roughness controls the spread of reflected highlights, so one input creates an obvious visual comparison.",
          "see": "The preview highlight visibly changes width when you change only Roughness.",
          "check": "0.15 gives a tight/glossy highlight, 0.85 gives a broad/matte response, and 0.50 sits between them.",
          "troubleshoot": [
            "If nothing changes, rotate the preview light/environment or apply the material to a level cube under a clear light source."
          ],
          "visual": null
        },
        {
          "title": "Set Metallic as a material property, not a shine slider",
          "where": "Material Editor → add another Constant → Value 0 → connect to Metallic",
          "do": "Keep Metallic at 0 for the starter material. Duplicate the value to 1 only as a quick comparison, then return it to 0 unless the surface is genuinely metal.",
          "why": "Metallic changes how the surface reflects and colours specular light; it does not simply make a material “more shiny”.",
          "see": "The material is back at Metallic 0 after the comparison.",
          "check": "At Metallic 1 the neutral surface behaves like metal; at 0 it behaves like a non-metal such as painted plastic/concrete.",
          "troubleshoot": [
            "If you want shinier plastic, change Roughness rather than Metallic."
          ],
          "visual": null
        },
        {
          "title": "Add normal detail only if you have a normal texture",
          "where": "Material Editor → drag a normal-map texture from Content Drawer into the graph → connect RGB to Normal",
          "do": "Use one known normal map from your project. If you do not have one, leave Normal empty rather than connecting a colour/albedo texture by mistake.",
          "why": "A normal map changes small-scale light response without changing the mesh silhouette.",
          "see": "The material compiles without a Normal-input error and the detail reacts to light.",
          "check": "With a correct normal map, surface detail appears in highlights while the outer shape of the cube stays unchanged.",
          "troubleshoot": [
            "If the surface looks violently wrong, confirm the texture is actually a normal map and is imported/compressed as Normal Map."
          ],
          "visual": null
        },
        {
          "title": "Apply it to a test mesh in the level",
          "where": "Level Editor → Add (+) → Shapes → Cube → select cube → Details → Materials",
          "do": "Assign M_Surface_Practice to a cube and view it under a stable light. Rotate the camera so a highlight crosses the surface.",
          "why": "The level view proves the material works in the same lighting environment students will actually build in.",
          "see": "You can explain what Base Color, Roughness, Metallic and Normal each changed in this one material.",
          "check": "The cube shows believable light, shadow and reflection response without glowing.",
          "troubleshoot": [
            "If the level looks very different from the Material preview, judge the level result and keep exposure/lighting stable while comparing."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using Metallic as a general shininess control.",
        "Connecting an albedo/colour texture to Normal.",
        "Changing several PBR inputs at once and then guessing what caused the result."
      ],
      "makeItYours": [
        "Create concrete, painted metal and plastic from the same texture set.",
        "Test the material under neutral and dramatic light."
      ],
      "worksWhen": [
        "The material is applied to a level mesh.",
        "Roughness changes are clearly visible under the same lighting.",
        "Metallic is used according to surface type rather than taste."
      ],
      "icon": "◫",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot6.jpg",
          "caption": "Death Stranding — Surface identity. Make materials readable without relying on saturated colour.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "kind": "reference"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b61c2e7b-8c11-4b70-b966-97b91ec1f4ef/materialeditorui.png",
          "caption": "Unreal Material Editor — material graphs control how a surface reacts to light rather than simply placing a flat colour on a mesh.",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-material-editor-ui",
          "sourceTitle": "Epic Games — Material Editor UI",
          "kind": "epic"
        },
        {
          "src": "assets/book/best-practices/uv-auto-before-after.webp",
          "caption": "Book reference — UV changes visibly alter texture distribution; surface quality depends on clean mapping as well as the material graph.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        }
      ],
      "source": {
        "title": "Epic — Materials",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-materials"
      },
      "prescriptive": true
    },
    {
      "id": "material-instance",
      "title": "Create a Reusable Material Instance",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Turn a parent material into a reusable family by exposing Tint and Roughness, then prove two Material Instances can vary without duplicating the graph.",
      "uses": [
        "Material Instance",
        "Parameters",
        "Parent material",
        "Iteration"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Open the parent material you will reuse",
          "where": "Content Drawer → double-click M_Surface_Practice (or another simple parent material)",
          "do": "Use a parent that already has a Base Color input and a roughness value. Save a copy first if it is production work you should not alter.",
          "why": "Material Instances are only useful when the parent exposes the controls artists actually need.",
          "see": "One suitable parent material is open.",
          "check": "The parent graph is open and you can identify its Base Color and Roughness inputs.",
          "troubleshoot": [
            "If the graph is huge and unfamiliar, use the simple practice material instead."
          ],
          "visual": null
        },
        {
          "title": "Expose colour as Tint",
          "where": "Material Editor → right-click the colour/Constant3Vector feeding Base Color → Convert to Parameter",
          "do": "Name the Vector Parameter Tint and leave its default as the current colour. Apply and Save.",
          "why": "A named parameter becomes editable in child Material Instances without opening the graph.",
          "see": "Tint is a Vector Parameter in the parent.",
          "check": "The graph node is labelled Tint rather than Constant3Vector.",
          "troubleshoot": [
            "If Convert to Parameter is unavailable, create a Vector Parameter node manually and reconnect it to Base Color."
          ],
          "visual": null
        },
        {
          "title": "Expose Roughness",
          "where": "Material Editor → right-click the scalar feeding Roughness → Convert to Parameter",
          "do": "Name it Roughness and set a starter default of 0.50. Apply and Save.",
          "why": "Surface finish is a useful artist control and a clear example of instance variation.",
          "see": "Both Tint and Roughness are clearly named parameters.",
          "check": "The parent now contains a Scalar Parameter called Roughness with default 0.50.",
          "troubleshoot": [
            "If the parent uses a texture/more complex roughness chain, use a simple scalar practice parent for this exercise."
          ],
          "visual": null
        },
        {
          "title": "Create two child instances",
          "where": "Content Drawer → right-click parent Material → Create Material Instance",
          "do": "Create MI_Surface_Matte and MI_Surface_Gloss. Open each and tick/enable the Tint and Roughness parameter overrides.",
          "why": "Two instances prove that one compiled parent can produce different art-directed surfaces.",
          "see": "Two Material Instance assets exist and share the same parent.",
          "check": "Both instances list the same parameters inherited from the parent.",
          "troubleshoot": [
            "If the parameters do not appear, save/apply the parent and reopen the instance."
          ],
          "visual": null
        },
        {
          "title": "Give the two instances obvious controlled values",
          "where": "Open MI_Surface_Matte / MI_Surface_Gloss → Parameter Overrides",
          "do": "Set Matte Roughness to 0.80 and Gloss Roughness to 0.20. Keep their Tint the same for this comparison.",
          "why": "Changing one parameter at a time makes the effect of roughness easy to read.",
          "see": "The two instances differ only in the intended parameter.",
          "check": "The Matte preview has broader/dimmer highlights; Gloss has tighter/stronger highlights.",
          "troubleshoot": [
            "If the difference is hard to see, use the same lit test cube setup for both."
          ],
          "visual": null
        },
        {
          "title": "Apply both and prove the parent still controls them",
          "where": "Level Editor → place two cubes → assign one instance to each → then change a harmless parent default",
          "do": "Place cubes side by side. Then change the parent Tint default slightly, Apply, and observe both children unless their Tint is overridden. Undo/restore the parent afterwards.",
          "why": "This demonstrates inheritance — the reason instances are maintainable.",
          "see": "You can explain parent versus override without opening two duplicate material graphs.",
          "check": "Both child surfaces respond to the parent while preserving their individual Roughness overrides.",
          "troubleshoot": [
            "If an instance does not inherit a parent change, check whether that parameter is currently overridden in the instance."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Duplicating the whole Material graph just to change colour/roughness.",
        "Using names such as ScalarParameter1 instead of purpose names.",
        "Overriding every parameter in every instance and losing the benefit of inheritance."
      ],
      "makeItYours": [
        "Add a texture parameter for surface variation.",
        "Create a clean/damaged family from one parent."
      ],
      "worksWhen": [
        "Tint and Roughness are exposed in the parent.",
        "Two instances use different Roughness values.",
        "A parent change can propagate to children where no override is set."
      ],
      "icon": "◇",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/qKm8m5buUQRNr4WIsBTcd/2d8953c4fd3f1e4acd5a78bbc9a16b30/DEAD-SPACE_Media_SLIDE-02-USP-02.jpg",
          "caption": "Dead Space — Wear + material story. Wear belongs where use, impact, water or neglect would actually cause it.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Artist 03: Materials & Material Instances",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/artist-03-create-materials-and-material-instances"
      },
      "prescriptive": true
    },
    {
      "id": "wet-surface",
      "title": "Make a Wet Surface",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Make a controlled dry-versus-wet material comparison using two instances, then judge wetness through reflection response instead of simply painting the surface darker.",
      "uses": [
        "Roughness",
        "Material Instance",
        "Lerp",
        "Mask"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create dry and wet instances from the same parent",
          "where": "Content Drawer → right-click a parameterised surface Material → Create Material Instance",
          "do": "Create MI_Surface_Dry and MI_Surface_Wet from the same parent. Put them on two identical cubes side by side.",
          "why": "A matched pair isolates the wetness changes from geometry and lighting changes.",
          "see": "Dry and Wet instances share the same parent and are applied to matching meshes.",
          "check": "Two identical cubes show the same starting material.",
          "troubleshoot": [
            "If the parent has no Roughness/Tint parameters, complete Create a Reusable Material Instance first."
          ],
          "visual": null
        },
        {
          "title": "Set the dry baseline",
          "where": "Open MI_Surface_Dry → Parameter Overrides",
          "do": "Set Roughness to about 0.65 and choose a believable dry Tint for the material. Keep Metallic unchanged from the real surface type.",
          "why": "You need a known dry state before judging a wet state.",
          "see": "The dry instance is saved with Roughness 0.65.",
          "check": "The dry cube has a relatively broad, soft highlight.",
          "troubleshoot": [
            "If the dry surface is actual polished material, use an appropriate baseline but write down the value so the comparison stays controlled."
          ],
          "visual": null
        },
        {
          "title": "Lower roughness for the wet version",
          "where": "Open MI_Surface_Wet → Parameter Overrides",
          "do": "Set Roughness to about 0.20 for the starter comparison. Do not change Metallic.",
          "why": "A water film smooths the micro-surface, creating stronger/tighter reflections.",
          "see": "Wet Roughness is lower than Dry while every other major setting remains matched.",
          "check": "Under the same light, the wet cube catches a noticeably stronger/tighter reflection than the dry cube.",
          "troubleshoot": [
            "If no reflection is visible, move the camera/light to a grazing angle before lowering Roughness further."
          ],
          "visual": null
        },
        {
          "title": "Darken the wet tint slightly, not to black",
          "where": "MI_Surface_Wet → Tint override",
          "do": "Make the wet instance 15% darker than the dry version while keeping the same hue/material identity. Do not turn it black.",
          "why": "Many porous materials read darker when wet, but colour should support the reflection cue rather than replace it.",
          "see": "Wetness is visible through both light response and a restrained value shift.",
          "check": "The wet version looks darker but still recognisably like the same material.",
          "troubleshoot": [
            "If the wet version looks painted black, move Tint back toward the dry value."
          ],
          "visual": null
        },
        {
          "title": "Test both under one grazing light",
          "where": "Level Editor → same camera and light → move view until the light skims across both cubes",
          "do": "Take one screenshot with both surfaces in frame. Do not change exposure between them.",
          "why": "Wetness is easiest to judge where reflection response is visible across the same angle.",
          "see": "A matched dry/wet screenshot exists.",
          "check": "The wet surface reads wet before you are told which cube it is.",
          "troubleshoot": [
            "If students identify wetness only from darkness, make the light/reflection angle more useful rather than darkening further."
          ],
          "visual": null
        },
        {
          "title": "Only then try patchy wetness",
          "where": "Make It Yours / parent Material graph if the project already supports a wetness mask",
          "do": "If the parent has a mask/Lerp workflow, use it to break the wet area into patches. If it does not, stop at the successful uniform comparison rather than inventing a complex shader blindly.",
          "why": "A simple working surface should come before texture-driven variation.",
          "see": "The controlled uniform version remains available even if the stretch version fails.",
          "check": "Optional patchiness still preserves the same dry/wet roughness logic.",
          "troubleshoot": [
            "Do not let the optional mask turn a 20-minute material exercise into an unrelated shader rebuild."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Making wetness only by darkening Base Color.",
        "Setting Roughness to 0 everywhere and creating a perfect mirror.",
        "Changing Metallic even though the underlying material has not become metal."
      ],
      "makeItYours": [
        "Create puddle-edge variation with a mask.",
        "Drive wetness parameter between 0 and 1 for weather changes."
      ],
      "worksWhen": [
        "Dry and wet versions share one parent and one test light.",
        "The wet version reads primarily through reflection/roughness response.",
        "The same underlying material identity is preserved."
      ],
      "icon": "≈",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ad955ffc88abcd7409_CONTROL_Blast_Furnace_169.webp",
          "caption": "CONTROL — Material families. Build a small reusable surface family rather than 30 unrelated materials.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Artist 04: Expanded Material Instances",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/artist-04-expanded-material-instances"
      },
      "prescriptive": true
    },
    {
      "id": "emissive-screen",
      "title": "Make a Glowing Screen / Sign Material",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Build an ON/OFF glowing screen material with named colour and strength controls, then tune it so the screen glows without losing the graphic.",
      "uses": [
        "Emissive",
        "Material Instance",
        "Bloom",
        "Texture mask"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create the screen material",
          "where": "Content Drawer → Add (+) → Material",
          "do": "Create M_Sign_Practice. Open it and set up a sensible dark Base Color for the screen surface.",
          "why": "Separating the material from scene lighting lets you learn emissive behaviour cleanly.",
          "see": "M_Sign_Practice exists and has a normal Base Color response.",
          "check": "The material previews as a dark non-glowing surface before Emissive is added.",
          "troubleshoot": [
            "If the whole preview is already glowing, disconnect anything from Emissive Color before continuing."
          ],
          "visual": null
        },
        {
          "title": "Create named glow controls",
          "where": "Material Editor → add Vector Parameter + Scalar Parameter",
          "do": "Add Vector Parameter GlowColour and Scalar Parameter GlowStrength. Set GlowStrength default to 5.0 for the starter version.",
          "why": "Named parameters let instances art-direct colour and brightness without editing the graph.",
          "see": "GlowColour and GlowStrength exist with GlowStrength = 5.0.",
          "check": "Both parameters appear as named nodes in the graph.",
          "troubleshoot": [
            "If parameters are hard to find later, use exact names rather than generic Parameter1."
          ],
          "visual": null
        },
        {
          "title": "Multiply colour by strength and feed Emissive",
          "where": "Material Editor → Multiply node → connect GlowColour × GlowStrength → Emissive Color",
          "do": "Build the simple multiply chain and Apply/Save.",
          "why": "Values above normal Base Color range create visible emissive output that can contribute to bloom/scene response.",
          "see": "Only the intended screen material emits; the Base Color input still exists separately.",
          "check": "The preview now glows in the chosen GlowColour.",
          "troubleshoot": [
            "If the whole mesh should not emit, assign this material only to the screen material slot or add a mask as a later improvement."
          ],
          "visual": null
        },
        {
          "title": "Create ON and OFF instances",
          "where": "Content Drawer → right-click M_Sign_Practice → Create Material Instance",
          "do": "Create MI_Sign_ON with GlowStrength 5.0 and MI_Sign_OFF with GlowStrength 0.0–0.1. Keep GlowColour identical at first.",
          "why": "Two instances give you a reusable state pair without two separate graphs.",
          "see": "Both instances share M_Sign_Practice as parent.",
          "check": "ON clearly glows; OFF retains only the dark Base Color.",
          "troubleshoot": [
            "If OFF still blooms, check that GlowStrength is actually overridden in MI_Sign_OFF."
          ],
          "visual": null
        },
        {
          "title": "Test in a dark-ish scene without blowing out the screen",
          "where": "Level Editor → place the screen mesh/plane → use stable exposure → compare ON/OFF",
          "do": "Apply MI_Sign_ON. If the graphic/shape turns into a featureless white blob, reduce GlowStrength until the form stays readable. Then toggle to OFF.",
          "why": "Emissive intensity should communicate glow while preserving information.",
          "see": "You can switch between a readable ON and OFF version.",
          "check": "The ON state reads as luminous but its edges/graphic remain visible.",
          "troubleshoot": [
            "Do not fix overblown emissive by changing global exposure only for this asset; tune the material within the scene exposure you actually use."
          ],
          "visual": null
        },
        {
          "title": "Make one colour variant",
          "where": "Duplicate MI_Sign_ON → rename by purpose, e.g. MI_Sign_Warning",
          "do": "Change GlowColour only and keep GlowStrength fixed. Compare side by side.",
          "why": "A controlled colour variant demonstrates why the parent/instance structure is useful.",
          "see": "The family has clear purpose-based names rather than Final2/Copy.",
          "check": "The variant changes hue without changing graph structure or brightness logic.",
          "troubleshoot": [
            "If the new colour appears much brighter, remember perceived brightness differs by hue; adjust only after the controlled comparison."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Driving glow with Base Color instead of Emissive.",
        "Using huge EmissiveStrength values until the graphic disappears.",
        "Creating a duplicate Material graph for every colour/state."
      ],
      "makeItYours": [
        "Create a flickering/damaged variant.",
        "Use Blueprint later to swap ON/OFF instances."
      ],
      "worksWhen": [
        "GlowColour and GlowStrength are exposed parameters.",
        "ON and OFF instances share the same parent.",
        "The ON screen glows while remaining readable."
      ],
      "icon": "✦",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot6.jpg",
          "caption": "Death Stranding — Surface identity. Make materials readable without relying on saturated colour.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Emissive Materials",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-the-emissive-material-input-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "three-point-room",
      "title": "Light a Room with Key, Fill & Accent",
      "category": "design-lighting",
      "designModule": "lighting",
      "duration": "25 min",
      "difficulty": "Beginner",
      "summary": "Light one simple room with a motivated key, restrained fill and one accent, then toggle each light to prove every source has a different job.",
      "uses": [
        "Point/Spot Lights",
        "Key light",
        "Fill",
        "Accent",
        "Exposure"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create a stable lighting test",
          "where": "Use a simple greybox room → Add (+) → Visual Effects → Post Process Volume",
          "do": "Add a Post Process Volume named PPV_LightingTest, enable Infinite Extent (Unbound), and use a controlled/manual exposure method for the exercise. Keep that exposure unchanged until the end.",
          "why": "Automatic exposure can hide whether a lighting change actually made the scene brighter/darker.",
          "see": "One global test volume gives a stable comparison.",
          "check": "Turning the camera between light/dark parts of the room no longer causes a large exposure pump.",
          "troubleshoot": [
            "If your course project intentionally manages exposure elsewhere, use that existing locked method instead of fighting it."
          ],
          "visual": null
        },
        {
          "title": "Place the key light with a visible reason",
          "where": "Add (+) → Lights → Rect Light or Spot Light → place near a window/lamp/doorway",
          "do": "Choose one believable source direction and place the key so it creates a readable light side and shadow side on the main forms. Start with only this light active.",
          "why": "The key establishes direction and hierarchy; motivated placement makes the light feel part of the world.",
          "see": "With other added lights off, the key alone explains where the main illumination comes from.",
          "check": "The room has one obvious light direction and a clear shadow pattern.",
          "troubleshoot": [
            "If every surface is evenly bright, move the key to the side/above rather than only increasing intensity."
          ],
          "visual": null
        },
        {
          "title": "Add fill at a clearly lower level",
          "where": "Add (+) → Lights → Rect/Point Light OR use existing Skylight/bounce support",
          "do": "Add one soft supporting source from the opposite/darker side. Start around one-quarter to one-third of the key’s visual strength and adjust only enough to recover important shadow detail.",
          "why": "Fill should reveal information without flattening the key direction.",
          "see": "The room still has contrast when fill is enabled.",
          "check": "Dark areas become readable but remain noticeably darker than the key-lit side.",
          "troubleshoot": [
            "If the room becomes flat, lower fill intensity before changing the key."
          ],
          "visual": null
        },
        {
          "title": "Add one accent to separate the focal element",
          "where": "Add (+) → Lights → Spot/Rect/Point Light → aim at focal prop/doorway/background edge",
          "do": "Use one small accent to create rim/edge separation or a focused pool on the intended focal point. Keep it local; do not light the whole room again.",
          "why": "Accent light helps a specific subject separate from its background.",
          "see": "One local accent has an obvious target.",
          "check": "The focal object/doorway reads more clearly without changing the overall room exposure.",
          "troubleshoot": [
            "If you cannot say what the accent is for, delete it."
          ],
          "visual": null
        },
        {
          "title": "Toggle the three jobs one by one",
          "where": "Outliner → toggle visibility of Key, Fill and Accent separately",
          "do": "Name the lights L_Key, L_Fill and L_Accent. Toggle each off/on while looking from the gameplay camera and say its job aloud.",
          "why": "A useful light should make a specific contribution you can identify.",
          "see": "Each light has a different visible purpose.",
          "check": "Removing Key loses direction; removing Fill loses chosen shadow information; removing Accent loses focal separation.",
          "troubleshoot": [
            "If two lights do the same job, simplify the setup rather than keeping both."
          ],
          "visual": null
        },
        {
          "title": "Walk the room, not just the hero frame",
          "where": "Play → follow the normal route through the room",
          "do": "Move and rotate the gameplay camera. Check that the focal area remains readable and no light creates accidental blown-out/black zones from other angles.",
          "why": "Level lighting must survive movement, not only one editor composition.",
          "see": "The lighting works from gameplay positions and the three-light roles remain understandable.",
          "check": "The route remains readable while the hierarchy still feels intentional.",
          "troubleshoot": [
            "If a light only works from one cinematic angle, reposition/shape it for the actual route."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using three equally strong lights.",
        "Adding lights with no believable source or job.",
        "Judging only one editor camera while gameplay moves elsewhere."
      ],
      "makeItYours": [
        "Rebuild the same setup warm/cold.",
        "Remove one light and preserve readability another way."
      ],
      "worksWhen": [
        "Key, Fill and Accent each have a distinct role.",
        "The key direction remains obvious with fill enabled.",
        "The focal element is readable throughout the gameplay route."
      ],
      "icon": "☼",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-03-1920x1080.png",
          "caption": "Alan Wake 2 — Colour + motivated emphasis. Treat light colour/intensity as a deliberate variable, not a vibe slider.",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2 Photo Mode",
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
      "source": {
        "title": "Epic — Lighting the Environment",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/lighting-the-environment-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "horror-lighting",
      "title": "Light a Horror Corridor",
      "category": "design-lighting",
      "designModule": "lighting",
      "duration": "25 min",
      "difficulty": "Beginner",
      "summary": "Turn a readable neutral corridor into a horror-lighting test by removing information selectively while preserving floor edges, doorframes and one deliberate anticipation pool.",
      "uses": [
        "Lighting",
        "Contrast",
        "Silhouette",
        "Horror",
        "Focal point"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Start from a corridor that is already readable",
          "where": "Duplicate a simple corridor level → save as L_HorrorLighting_Test",
          "do": "Use a corridor 1200 cm long where you can currently see the floor edges and exit clearly. Take a BEFORE screenshot from the Player Start.",
          "why": "Horror lighting should create uncertainty, not hide an already broken layout.",
          "see": "A readable baseline screenshot exists.",
          "check": "The neutral corridor is easy to navigate before the mood pass begins.",
          "troubleshoot": [
            "If the route is unclear before lighting, fix the blockout first."
          ],
          "visual": null
        },
        {
          "title": "Keep only essential route information",
          "where": "Select existing lights / place simple practical fixtures along the corridor",
          "do": "Reduce general brightness, but keep the floor/wall boundary and important doorframe/turn visible. Aim for the player to see the next 300–500 cm of safe navigation even when deeper space is dark.",
          "why": "Selective information creates tension while preserving fair movement.",
          "see": "Near-route edges are readable; background information is deliberately reduced.",
          "check": "You can walk without bumping into walls even though the far corridor is uncertain.",
          "troubleshoot": [
            "If you need to memorise the route to walk it, you removed too much information."
          ],
          "visual": null
        },
        {
          "title": "Motivate the light sources",
          "where": "Add (+) → Lights → Point/Rect/Spot Light near ceiling light, emergency lamp, window or sign",
          "do": "For every important pool of light, place or identify a visible fixture/source that could plausibly create it. Keep invisible helper lights subtle and secondary.",
          "why": "Motivated lighting makes the environment feel believable and helps players learn what bright/dark areas mean.",
          "see": "Looking at a pool of light, you can point to what is causing it.",
          "check": "The main bright areas have an obvious environmental source.",
          "troubleshoot": [
            "If a bright patch appears from nowhere, add a visible source or remove/reposition the helper light."
          ],
          "visual": null
        },
        {
          "title": "Darken one side space, not the whole scene",
          "where": "Choose one recess/doorway/side branch → reduce its light while preserving the main route",
          "do": "Create one deliberately uncertain dark side area. Keep its silhouette/entrance visible enough that the player knows a space exists.",
          "why": "A local information gap creates a specific tension point; uniformly black scenes become tiring and unreadable.",
          "see": "One dark region contrasts with readable route lighting.",
          "check": "The side space feels threatening/unknown while the forward route remains understandable.",
          "troubleshoot": [
            "If everything is equally dark, restore light to the main route before making the side space darker."
          ],
          "visual": null
        },
        {
          "title": "Create one anticipation pool",
          "where": "Place/adjust one practical light 600–1000 cm ahead on the route",
          "do": "Make one brighter pool around a bend/door/object where you want attention to gather. Do not reveal the entire payoff inside the pool.",
          "why": "Contrast gives the player something to approach while uncertainty remains around it.",
          "see": "There is one clear “move toward this” light beat.",
          "check": "From the start, the pool is visible as a destination but does not explain everything beyond it.",
          "troubleshoot": [
            "If the pool becomes a giant safe beacon, reduce size/intensity or partially occlude it."
          ],
          "visual": null
        },
        {
          "title": "Blind-walk test at normal speed",
          "where": "Play → give another student control from the same start",
          "do": "Say only “walk to the end.” Watch where they slow, look, or collide. Ask afterwards where they felt least certain.",
          "why": "Horror mood succeeds when tension changes behaviour without causing accidental navigation failure.",
          "see": "You have one observed behaviour note and can name one lighting change to improve fairness/mood.",
          "check": "The tester slows/looks near the intended tension point but reaches the end without needing directions.",
          "troubleshoot": [
            "If they get lost, restore route information before adding more darkness/fog."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Making the entire corridor uniformly black.",
        "Using floating invisible lights everywhere instead of motivated sources.",
        "Confusing navigation failure with horror tension."
      ],
      "makeItYours": [
        "Add one flickering source without making it annoying.",
        "Create a safe-lit room after the corridor for contrast."
      ],
      "worksWhen": [
        "The player can navigate without memorising the route.",
        "One local dark zone creates uncertainty.",
        "A deliberate light pool controls anticipation/focus."
      ],
      "icon": "◐",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — Silhouette + negative space. Darkness is useful only when the important information remains readable.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
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
      "source": {
        "title": "Epic — Lighting",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/lighting-the-environment-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "post-process-mood",
      "title": "Use Post Process for Mood",
      "category": "design-lighting",
      "designModule": "lighting",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Create one global Post Process Volume, make a restrained colour/exposure mood pass and prove it improves the same camera without crushing readability.",
      "uses": [
        "Post Process Volume",
        "Exposure",
        "Colour grading",
        "Vignette"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Add and name the global volume",
          "where": "Add (+) → Visual Effects → Post Process Volume → Outliner",
          "do": "Add a Post Process Volume named PPV_Global. In Details → Post Process Volume Settings, enable Infinite Extent (Unbound) and keep Priority at 0 for this global pass.",
          "why": "A single global volume gives a predictable baseline and matches Epic’s current Post Process workflow.",
          "see": "PPV_Global exists and Infinite Extent is enabled.",
          "check": "The look changes apply anywhere in the level, not only inside the volume bounds.",
          "troubleshoot": [
            "If changes only work when standing inside the box, check Infinite Extent (Unbound)."
          ],
          "visual": null
        },
        {
          "title": "Capture the ungraded baseline",
          "where": "Disable the PPV or leave all overrides off → choose one representative gameplay camera",
          "do": "Take BEFORE screenshots of one bright-ish area and one dark-ish area. Keep the cameras fixed for the rest of the exercise.",
          "why": "Mood changes must preserve important information across more than one tonal condition.",
          "see": "Bright and dark test views are saved.",
          "check": "You have two baseline images with no grading changes.",
          "troubleshoot": [
            "Do not choose only the prettiest camera; include a view where readability matters."
          ],
          "visual": null
        },
        {
          "title": "Make one restrained colour decision",
          "where": "PPV_Global → Details → Color Grading / White Balance",
          "do": "Choose one direction only: slightly cooler/warmer White Balance OR modest global saturation/contrast change. Start small and stop before skin/material colours become implausible.",
          "why": "A focused colour decision creates cohesion more reliably than moving every slider.",
          "see": "The change is visible in both test cameras without looking like a heavy phone filter.",
          "check": "The mood shifts but material identities and route contrast remain recognisable.",
          "troubleshoot": [
            "If the grade is the first thing you notice, reduce it by roughly half and compare again."
          ],
          "visual": null
        },
        {
          "title": "Use exposure and bloom only to solve a real need",
          "where": "PPV_Global → Exposure / Bloom",
          "do": "Keep exposure stable enough to preserve the intended dark/light hierarchy. Add only modest bloom if emissive/highlights benefit. Do not use bloom to make everything “cinematic”.",
          "why": "Exposure controls information; bloom is a highlight response, not a substitute for lighting.",
          "see": "Neither test view has crushed-black navigation or featureless blown highlights.",
          "check": "Important dark route edges remain visible and bright elements retain detail.",
          "troubleshoot": [
            "If you are compensating for bad lighting with extreme post values, fix the lights first."
          ],
          "visual": null
        },
        {
          "title": "Toggle the whole volume and compare",
          "where": "Outliner → toggle PPV_Global visibility / enabled state → same two cameras",
          "do": "Alternate BEFORE/AFTER and write one sentence: what emotional/visual job does the grade do? Keep the pass only if you can answer specifically.",
          "why": "A useful post process pass supports art direction rather than simply looking “more edited”.",
          "see": "You have matched before/after views and one design reason for the grade.",
          "check": "The AFTER version has a clearer stated mood while preserving gameplay information.",
          "troubleshoot": [
            "If the ungraded version reads better, reduce/revert the grade — that is a valid result."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Changing many grading controls at once.",
        "Crushing blacks until the route disappears.",
        "Using bloom/vignette as automatic “cinematic” switches."
      ],
      "makeItYours": [
        "Create two presets: clinical and oppressive.",
        "Make a local Post Process Volume for one room."
      ],
      "worksWhen": [
        "One global PPV applies predictably.",
        "The mood change has a specific purpose.",
        "Readability survives in both bright and dark test views."
      ],
      "icon": "◑",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "caption": "Dead Space — Safe pool → dangerous shadow. Lighting can create a rhythm of safety and uncertainty.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Add Post Process Volumes",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/add-post-process-volumes"
      },
      "prescriptive": true
    },
    {
      "id": "create-landscape",
      "title": "Create Your First Landscape",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Create a modest practice Landscape with known component settings, save it, then identify Manage, Sculpt and Paint before making any terrain detail.",
      "uses": [
        "Landscape Mode",
        "Manage",
        "Sculpt",
        "Paint"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Open Landscape Mode",
          "where": "Modes dropdown / Shift+2 (if mapped) → Landscape",
          "do": "Switch to Landscape Mode and stay on the Manage/Create tool.",
          "why": "Landscape creation has its own component/section settings that should be understood before sculpting.",
          "see": "Landscape Mode is active with Create New selected.",
          "check": "Manage, Sculpt and Paint tabs/tools are visible.",
          "troubleshoot": [
            "If the panel is missing, use the Modes dropdown and search Landscape."
          ],
          "visual": null
        },
        {
          "title": "Set a small practice resolution",
          "where": "Landscape → Manage → New Landscape",
          "do": "For a classroom test, use Section Size 63×63 Quads, Sections Per Component 1×1, and Number of Components 4×4. Keep Scale around X 100, Y 100, Z 100 unless the project has a defined world scale.",
          "why": "A small landscape is quick to edit and large enough to practise basic terrain tools without creating an enormous world.",
          "see": "The New Landscape settings show 63 quads, 1×1 sections and 4×4 components.",
          "check": "The preview grid covers a manageable square area rather than the whole horizon.",
          "troubleshoot": [
            "If your project uses a supplied landscape specification, use that instead and record the values."
          ],
          "visual": null
        },
        {
          "title": "Create and name the Landscape",
          "where": "Landscape → Create → Outliner",
          "do": "Click Create, rename the actor Landscape_Practice, and save the level as L_Landscape_Practice.",
          "why": "Naming/saving before destructive sculpting gives you a stable asset/level to return to.",
          "see": "Landscape_Practice exists in L_Landscape_Practice.",
          "check": "A Landscape actor appears in the Outliner and the level saves successfully.",
          "troubleshoot": [
            "If Create is disabled, check the preview is valid and you are not trying to create on top of an incompatible existing Landscape."
          ],
          "visual": null
        },
        {
          "title": "Prove the three tool families",
          "where": "Landscape Mode → Manage, Sculpt, Paint",
          "do": "Click each tool family and read the available controls without editing yet. Write one line for each: Manage changes landscape structure/components; Sculpt changes height; Paint changes material layers.",
          "why": "Knowing which category owns which operation prevents random clicking later.",
          "see": "The landscape is still flat/unchanged after this orientation step.",
          "check": "You can switch among the three and explain their different jobs.",
          "troubleshoot": [
            "If Paint shows no layers, that is expected until a layered Landscape material is assigned."
          ],
          "visual": null
        },
        {
          "title": "Place the player and test real scale",
          "where": "Play with the normal Third Person character on/near the landscape",
          "do": "Stand the character on the flat Landscape and walk across part of it.",
          "why": "A landscape that looks “small” from the editor may already be hundreds of metres across.",
          "see": "You have judged the landscape from player height before sculpting.",
          "check": "The character scale makes the practice area feel understandable.",
          "troubleshoot": [
            "If the player falls through/does not spawn on it, move Player Start above the Landscape and retest."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Creating an enormous landscape before knowing the tools.",
        "Sculpting before saving/naming the test level.",
        "Judging scale only from the editor aerial camera."
      ],
      "makeItYours": [
        "Create a tiny island instead of a flat field.",
        "Compare two component/resolution choices in a test project."
      ],
      "worksWhen": [
        "A small Landscape actor exists with known settings.",
        "Manage/Sculpt/Paint roles are understood.",
        "The scale has been checked with the actual player."
      ],
      "icon": "≈",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot3.jpg",
          "caption": "Death Stranding — Terrain as mechanic. Give terrain meaningful travel costs and choices.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
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
      "source": {
        "title": "Epic UE5.8 — Landscape Quick Start",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "sculpt-playable-terrain",
      "title": "Sculpt Playable Terrain",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "25 min",
      "difficulty": "Beginner",
      "summary": "Sculpt one playable hill-and-valley route using broad brushes, then smooth and test slopes with the real character before adding detail noise.",
      "uses": [
        "Sculpt",
        "Smooth",
        "Flatten",
        "Player route"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Mark the route before raising terrain",
          "where": "Landscape Practice level → top view → use temporary cubes/spline/notes to mark start and destination",
          "do": "Choose a simple 30–50 m route across the Landscape and mark the start/end. Do not sculpt randomly across the whole map.",
          "why": "Terrain should support player movement and sightlines, not just make interesting noise.",
          "see": "Start and end are clearly marked on the flat Landscape.",
          "check": "You can point to the intended route from start to destination.",
          "troubleshoot": [
            "If you cannot describe the route in one sentence, simplify it before sculpting."
          ],
          "visual": null
        },
        {
          "title": "Raise one broad hill",
          "where": "Landscape Mode → Sculpt → Sculpt tool → Brush Size about 2000–3000 → Tool Strength around 0.10–0.20",
          "do": "Use several short strokes to raise one broad hill beside/behind the route rather than one sharp click.",
          "why": "Large forms should come before erosion/noise/detail.",
          "see": "One broad elevation change shapes the route.",
          "check": "The hill reads as one smooth landform, not a spike field.",
          "troubleshoot": [
            "If the terrain forms sharp peaks, increase Brush Size and lower Tool Strength."
          ],
          "visual": null
        },
        {
          "title": "Create a shallow pass/valley for movement",
          "where": "Landscape → Sculpt tool, hold Shift to lower where appropriate",
          "do": "Lower/shape a broad passage through or around the hill. Keep the narrowest playable width at least 600 cm for this third-person starter test.",
          "why": "A terrain route needs readable traversable space as well as scenery.",
          "see": "The route has a visible low/clear corridor between higher forms.",
          "check": "From player height, the pass clearly suggests a way through.",
          "troubleshoot": [
            "If the slope looks like a cliff from ground level, flatten/widen the transition before adding detail."
          ],
          "visual": null
        },
        {
          "title": "Smooth only the broken transitions",
          "where": "Landscape → Smooth tool → low Tool Strength around 0.1",
          "do": "Run Smooth over lumpy edges where hill meets route, not over the entire landscape.",
          "why": "Selective smoothing removes brush artefacts while preserving the large shape you designed.",
          "see": "No obvious jagged brush stamps remain on the playable path.",
          "check": "The route edges become continuous without flattening the whole hill.",
          "troubleshoot": [
            "If the hill loses its silhouette, undo and smooth fewer strokes at lower strength."
          ],
          "visual": null
        },
        {
          "title": "Walk the slopes with the actual character",
          "where": "Play → run up/down/across the intended route",
          "do": "Test the steepest areas, camera collision and whether the character can reach places you intended to be blocked. Add/flatten terrain based on behaviour.",
          "why": "Visual slope judgement from overhead is unreliable; gameplay determines whether terrain is playable.",
          "see": "You have made at least one terrain edit based on the player test.",
          "check": "The intended route is traversable and unintended cliffs/shortcuts behave as expected.",
          "troubleshoot": [
            "If the character can climb a slope that should block progress, steepen/reshape it or use a clearer gameplay barrier."
          ],
          "visual": null
        },
        {
          "title": "Only then add one secondary shape",
          "where": "Landscape → Sculpt/Smooth with smaller brush",
          "do": "Add one smaller ridge, mound or drainage shape that supports the main route. Stop before covering the landscape in noisy detail.",
          "why": "Secondary forms add interest after the route and big silhouette already work.",
          "see": "The landscape still reads as a few designed forms, not procedural noise.",
          "check": "The new shape supports framing/sightline without obscuring the route.",
          "troubleshoot": [
            "If the route becomes harder to read, remove the secondary shape."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Painting tiny hills everywhere before establishing large forms.",
        "Making slopes based on aerial view without playtesting.",
        "Using Smooth over the whole landscape until all design intent disappears."
      ],
      "makeItYours": [
        "Create a reveal where a hill hides then exposes the destination.",
        "Build an overlook that shows future route."
      ],
      "worksWhen": [
        "A clear route sits within deliberate large terrain forms.",
        "The actual player can traverse intended slopes.",
        "Terrain changes have been made from playtest evidence."
      ],
      "icon": "⌁",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot5.jpg",
          "caption": "Death Stranding — Silhouette + difficulty. Let large terrain forms preview the difficulty ahead.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Landscape Quick Start",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "landscape-paint",
      "title": "Paint Landscape Layers",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "30 min",
      "difficulty": "Beginner",
      "summary": "Create a simple three-layer Landscape material, make Layer Info assets, fill a grass base and paint one readable dirt route plus rock accents.",
      "uses": [
        "Landscape Material",
        "Layer Blend",
        "Paint",
        "Surface logic"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create a three-layer practice Landscape material",
          "where": "Content Drawer → Add (+) → Material → name M_Landscape_Practice → Material Editor",
          "do": "Add a LandscapeLayerBlend node with three layers named Grass, Dirt and Rock. For the starter version feed each layer a distinct simple colour/texture already available in the project, then connect the blend to Base Color.",
          "why": "Named layers are required before Landscape Paint can expose useful paint targets.",
          "see": "M_Landscape_Practice has three clearly named layers.",
          "check": "The Material compiles and the LandscapeLayerBlend lists Grass, Dirt and Rock.",
          "troubleshoot": [
            "If you do not have textures, use simple colours for this exercise; layer workflow matters more than final art."
          ],
          "visual": null
        },
        {
          "title": "Assign the material to the Landscape",
          "where": "Select Landscape_Practice → Details → Landscape Material",
          "do": "Assign M_Landscape_Practice, wait for shaders to compile, then open Landscape Mode → Paint.",
          "why": "The Landscape actor must use the layered material before Paint can show its targets.",
          "see": "All three named paint layers are visible.",
          "check": "Grass, Dirt and Rock appear as Target Layers in the Paint tool.",
          "troubleshoot": [
            "If no layers appear, confirm the material is assigned and the layer names exist inside LandscapeLayerBlend."
          ],
          "visual": null
        },
        {
          "title": "Create Layer Info assets in a tidy folder",
          "where": "Landscape → Paint → Target Layers → + beside each layer",
          "do": "For each layer create the appropriate Weight-Blended Layer Info for this starter material and save them in a Landscape/LayerInfo folder.",
          "why": "Layer Info assets store the painted weight data and need predictable locations.",
          "see": "Grass, Dirt and Rock are ready to paint.",
          "check": "Each target layer shows its Layer Info asset rather than None.",
          "troubleshoot": [
            "If your material intentionally uses a non-weight-blended setup, follow that material’s specification rather than forcing Weight-Blended."
          ],
          "visual": null
        },
        {
          "title": "Fill Grass as the base",
          "where": "Landscape → Paint → Grass layer → Fill Layer",
          "do": "Fill the Landscape with Grass so no unpainted/black areas remain.",
          "why": "A base layer gives the other layers something consistent to blend over.",
          "see": "Grass is the complete starting surface.",
          "check": "The entire landscape shows the Grass layer.",
          "troubleshoot": [
            "If Fill Layer is unavailable, right-click the Grass target layer/Layer Info and use the available fill command for the current editor."
          ],
          "visual": null
        },
        {
          "title": "Paint one 3–4 m dirt route",
          "where": "Landscape → Paint → Dirt → Brush Size around 400–600 → Tool Strength around 0.3–0.5",
          "do": "Paint the intended player route in a few broad passes. Avoid drawing tiny wobbly lines; keep the centre readable and feather the edges lightly.",
          "why": "Material language can reinforce navigation without arrows.",
          "see": "One continuous dirt route exists and blends into grass at its edges.",
          "check": "From player height, the dirt band clearly leads from start toward destination.",
          "troubleshoot": [
            "If it looks spray-painted, use a larger brush/lower strength and fewer passes."
          ],
          "visual": null
        },
        {
          "title": "Add Rock only where the terrain suggests it",
          "where": "Landscape → Paint → Rock",
          "do": "Paint Rock on a few exposed/steeper forms rather than random circular patches. Then Play the route and check texture scale/tiling.",
          "why": "Material placement is more believable when it responds to terrain/use.",
          "see": "The three layers communicate base ground, travel and exposed terrain.",
          "check": "Rock accents support landforms and do not obscure the dirt route.",
          "troubleshoot": [
            "If the route disappears under texture noise, reduce Rock/Grass contrast around the path or strengthen Dirt continuity."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Painting before Layer Info assets are created.",
        "Using tiny low-strength scribbles that make spray-can edges.",
        "Placing rock/soil randomly without relationship to slope or traffic."
      ],
      "makeItYours": [
        "Create muddy route shoulders.",
        "Add a fourth material around water or cliffs."
      ],
      "worksWhen": [
        "Grass, Dirt and Rock paint layers work.",
        "The dirt route reads from player height.",
        "Layer placement supports terrain/use rather than random decoration."
      ],
      "icon": "▧",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://p325k7wa.twic.pics/high/elden-ring/elden-ring/02-screenshots/ELDENRING_01_4K.jpg?twic=v1%2Fcover%3D2160%2Fstep%3D10%2Fquality%3D80%2Foutput%3Dpreview",
          "caption": "ELDEN RING — Distant attraction. Give players something memorable to orient around beyond the next 20 metres.",
          "sourceUrl": "https://en.bandainamcoent.eu/elden-ring/elden-ring/media",
          "sourceTitle": "Bandai Namco — ELDEN RING media gallery",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Landscape Quick Start",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "foliage-path",
      "title": "Dress a Readable Foliage Path",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "25 min",
      "difficulty": "Beginner",
      "summary": "Paint foliage around a known player route, keep a clear movement corridor and preserve one landmark sightline before adding density.",
      "uses": [
        "Foliage Mode",
        "Density",
        "Clusters",
        "Sightlines"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Mark the protected route and landmark first",
          "where": "Play/top view → use the existing dirt path or temporary markers",
          "do": "Choose a 250 cm-wide route that must remain clear and one landmark/objective that should stay visible from at least two points.",
          "why": "Foliage should be designed around navigation requirements, not scattered first and fixed later.",
          "see": "Route and landmark constraints are decided before painting.",
          "check": "You can point to the protected movement strip and the two landmark views.",
          "troubleshoot": [
            "If there is no route/landmark requirement, create a small test path rather than painting the whole landscape."
          ],
          "visual": null
        },
        {
          "title": "Add only 1–2 foliage types for the first pass",
          "where": "Modes → Foliage → drag one large and one small foliage Static Mesh into the Foliage panel",
          "do": "Start with a tree/bush plus grass/ground plant if available. Keep the asset list small so density problems are easy to see.",
          "why": "A controlled asset set makes spacing and route blocking easier to diagnose.",
          "see": "One or two foliage types are active.",
          "check": "The Foliage panel contains only the selected test types.",
          "troubleshoot": [
            "If a mesh paints at the wrong scale/collision, fix that asset before adding more types."
          ],
          "visual": null
        },
        {
          "title": "Paint away from the route first",
          "where": "Foliage Paint tool → moderate Brush Size → paint broad areas outside the protected strip",
          "do": "Build density in the background/edges first. Leave at least the 200–300 cm route strip empty.",
          "why": "Starting outside the route prevents cleanup becoming the main workflow.",
          "see": "The route remains physically clear after the first density pass.",
          "check": "From above, foliage frames the route instead of sitting on it.",
          "troubleshoot": [
            "If trees appear on the path, use Erase immediately rather than painting more and hoping it disappears visually."
          ],
          "visual": null
        },
        {
          "title": "Shape the route edge with lower density",
          "where": "Foliage tool → lower Density / paint lightly near route",
          "do": "Add sparse smaller foliage near the route edges, leaving enough shoulder for camera/readability. Avoid a perfectly uniform hedge line.",
          "why": "Density falloff makes the route feel integrated while remaining legible.",
          "see": "There is a clear foreground route with denser vegetation beyond it.",
          "check": "The path edge looks natural but the playable centre stays obvious.",
          "troubleshoot": [
            "If the route becomes a tunnel by accident, remove foliage from one side to reopen the sightline."
          ],
          "visual": null
        },
        {
          "title": "Protect the landmark sightlines",
          "where": "Play → stand at the two chosen views → Foliage Erase / adjust instances",
          "do": "Erase or move only the foliage blocking the landmark. Keep some framing vegetation around it.",
          "why": "Selective visibility creates navigation value without clearing the whole environment.",
          "see": "Foliage frames rather than hides the landmark.",
          "check": "The landmark is recognisable from both test points.",
          "troubleshoot": [
            "If you must clear a huge cone, reconsider landmark placement or overall density."
          ],
          "visual": null
        },
        {
          "title": "Run the movement/collision test",
          "where": "Play → sprint/walk the route while turning camera",
          "do": "Check snagging, camera occlusion and whether vegetation gives false “can/cannot pass” signals. Remove offending instances.",
          "why": "A visually readable path can still fail through collision and camera behaviour.",
          "see": "The final foliage pass supports both movement and visual composition.",
          "check": "The player moves cleanly and the route remains understandable from normal camera height.",
          "troubleshoot": [
            "If a plant has inappropriate collision, fix/replace the asset rather than deleting all foliage around it."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Painting maximum density before defining a route.",
        "Using too many foliage types in the first test.",
        "Clearing all vegetation instead of selectively protecting sightlines."
      ],
      "makeItYours": [
        "Make foliage density subtly guide the route.",
        "Create a clearing that becomes a visual reward."
      ],
      "worksWhen": [
        "The route stays physically and visually clear.",
        "A landmark remains visible from chosen positions.",
        "Foliage density increases away from critical navigation space."
      ],
      "icon": "♣",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot3.jpg",
          "caption": "Death Stranding — Terrain as mechanic. Give terrain meaningful travel costs and choices.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Foliage Mode",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/foliage-mode-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "sequencer-first-shot",
      "title": "Create Your First Sequencer Shot",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Create a five-second Level Sequence with one Cine Camera, two transform keys and a clear start/end composition.",
      "uses": [
        "Sequencer",
        "Level Sequence",
        "Cine Camera",
        "Keyframes"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create and name the sequence",
          "where": "Content Drawer → create folder Cinematics if needed → Add (+) → Cinematics → Level Sequence",
          "do": "Create LS_FirstShot and double-click it. Set the Display Rate to 30 fps and the playback range to frames 0–150 for a five-second starter shot.",
          "why": "A named fixed-duration sequence gives you a simple timeline for the first camera move.",
          "see": "LS_FirstShot exists and is open.",
          "check": "Sequencer opens and the playback range covers roughly five seconds.",
          "troubleshoot": [
            "If the project has a required frame rate, use that instead and make an equivalent five-second range."
          ],
          "visual": null
        },
        {
          "title": "Create the Cine Camera and Camera Cuts track",
          "where": "Sequencer toolbar → Create Camera / Add Cine Camera Actor",
          "do": "Create one Cine Camera Actor from Sequencer and make sure it is bound to the Camera Cuts track.",
          "why": "The Camera Cuts track determines which cinematic camera the viewer actually sees.",
          "see": "A camera track and Camera Cuts section are visible.",
          "check": "Piloting/scrubbing the sequence shows the Cine Camera view.",
          "troubleshoot": [
            "If playback stays on the gameplay viewport, check the Camera Cuts section covers the full shot."
          ],
          "visual": null
        },
        {
          "title": "Set the END frame first",
          "where": "Move playhead to frame 150 → pilot camera → compose strongest final frame → key Transform",
          "do": "Frame the subject so its scale/context is clear, then add/update the camera Transform key at the end.",
          "why": "Designing the payoff first gives the camera move a destination with purpose.",
          "see": "A transform key exists at the end frame.",
          "check": "At frame 150 the final composition is stable and readable.",
          "troubleshoot": [
            "If the subject is cut off or confused with the background, fix the composition before creating movement."
          ],
          "visual": null
        },
        {
          "title": "Set the START frame",
          "where": "Move playhead to frame 0 → move/rotate camera to a different useful composition → key Transform",
          "do": "Create a start position that gives the shot somewhere to travel from. Keep movement simple — one clear push, pull or lateral move.",
          "why": "The first exercise should teach intentional camera movement, not complicated key choreography.",
          "see": "Start and end Transform keys exist.",
          "check": "Scrubbing 0→150 moves cleanly between the two frames.",
          "troubleshoot": [
            "If the camera spins oddly, check rotation values/shortest path and simplify the move."
          ],
          "visual": null
        },
        {
          "title": "Preview at normal speed and trim dead time",
          "where": "Press Play in Sequencer → watch without scrubbing",
          "do": "Watch the full five seconds twice. If the useful action finishes early, move the end key/range earlier rather than leaving dead time.",
          "why": "Timing only becomes obvious at playback speed.",
          "see": "The final range is only as long as the idea needs.",
          "check": "The shot begins, develops and ends without sitting still accidentally.",
          "troubleshoot": [
            "Do not judge motion only by dragging the playhead; always watch real-time playback."
          ],
          "visual": null
        },
        {
          "title": "Capture one still from start and end",
          "where": "Frame 0 and final frame → screenshot/reference capture",
          "do": "Save the two key frames side by side and write what changes for the viewer (distance, reveal, emphasis or context).",
          "why": "A useful shot should change information/feeling, not move the camera for its own sake.",
          "see": "The shot has an explicit design intention.",
          "check": "You can describe the purpose of the move in one sentence.",
          "troubleshoot": [
            "If the two frames communicate the same thing, reconsider why the camera needs to move."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Adding many transform keys before the start/end idea works.",
        "Forgetting to bind/cover the shot on Camera Cuts.",
        "Making movement with no change in information or emphasis."
      ],
      "makeItYours": [
        "Do the same reveal with a static cut instead of movement.",
        "Animate focus distance subtly."
      ],
      "worksWhen": [
        "The Level Sequence is about five seconds and plays through one camera.",
        "Start and end compositions are deliberate.",
        "The camera move has a stated purpose."
      ],
      "icon": "▶",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-02-clean-1300x650.png",
          "caption": "Alan Wake 2 — Focal length + framing. Choose the camera based on the information/emotion the shot must deliver.",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2 Photo Mode",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Sequencer Basics",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-make-movies-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "camera-cuts",
      "title": "Make Camera Cuts in Sequencer",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Build a short three-shot sequence — wide, medium and detail — then trim cuts so every shot adds new information rather than repeating the same angle.",
      "uses": [
        "Camera Cuts",
        "Sequencer",
        "Shot size",
        "Editing"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create three camera roles",
          "where": "Open/create a Level Sequence → Sequencer → Create Camera",
          "do": "Create/rename three Cine Camera Actors: Cam_Wide, Cam_Medium and Cam_Detail. Frame the same subject/space at clearly different scales/angles.",
          "why": "Shot roles are easier to edit when each camera has a distinct informational job.",
          "see": "Wide shows context, Medium shows action/relationship, Detail shows one important piece of information.",
          "check": "The three cameras visibly differ in subject size/context.",
          "troubleshoot": [
            "If two cameras look almost identical, change angle/distance before editing cuts."
          ],
          "visual": null
        },
        {
          "title": "Add them to Camera Cuts in order",
          "where": "Sequencer → Camera Cuts track → add camera sections",
          "do": "Set a starter edit: Wide frames 0–90 (3 s), Medium 90–150 (2 s), Detail 150–210 (2 s) at 30 fps.",
          "why": "Fixed starter timings let you judge rhythm before improvising.",
          "see": "Three Camera Cuts sections cover the sequence without gaps.",
          "check": "Playback switches Wide → Medium → Detail at the chosen frame boundaries.",
          "troubleshoot": [
            "If the viewport does not switch, confirm each section is assigned to the intended Cine Camera."
          ],
          "visual": null
        },
        {
          "title": "Check every cut adds information",
          "where": "Play the full sequence at normal speed",
          "do": "At each cut, say what new information appears. If the answer is “same thing but slightly closer”, improve the framing/angle or remove the shot.",
          "why": "Cuts should advance attention/story rather than exist because more cameras were available.",
          "see": "You can label the information change at both cuts.",
          "check": "Each shot has a distinct reason to be present.",
          "troubleshoot": [
            "If a shot adds nothing, delete it and see whether the sequence improves."
          ],
          "visual": null
        },
        {
          "title": "Avoid accidental jump-cut similarity",
          "where": "Compare the outgoing/incoming frames at each cut",
          "do": "If subject size/angle is extremely similar, reposition one camera enough to make the change intentional. Keep screen direction/readability appropriate to the scene.",
          "why": "Small unmotivated camera changes can feel like mistakes rather than deliberate edits.",
          "see": "Both transitions are visually intentional.",
          "check": "The cut feels clearly like a new shot, not a camera bump.",
          "troubleshoot": [
            "Do not apply a rigid “30-degree rule” blindly; use it as a warning that near-identical framing often needs a reason."
          ],
          "visual": null
        },
        {
          "title": "Trim duration around the information",
          "where": "Drag cut section edges → replay",
          "do": "Shorten any shot after the viewer has had enough time to read its purpose. Give a more complex wide shot longer than a simple detail when needed.",
          "why": "Shot duration is part of pacing.",
          "see": "Final shot lengths are chosen from what the viewer needs to read.",
          "check": "The edit feels tighter without making information unreadable.",
          "troubleshoot": [
            "If the sequence feels rushed, restore time to the shot containing the most information rather than lengthening everything."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Creating several cameras with near-identical framing.",
        "Leaving gaps/overlaps that show the wrong camera.",
        "Keeping a shot after its information has already been read."
      ],
      "makeItYours": [
        "Make a tense version with longer holds and an energetic version with faster cuts.",
        "Hide information in the wide then reveal it in a detail shot."
      ],
      "worksWhen": [
        "Three shots have distinct roles.",
        "Every cut adds information.",
        "Final shot lengths feel deliberate at normal playback speed."
      ],
      "icon": "✂",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.guerrilla-games.com/media/News/HFW_SCREEN_LEGAL_GLIDER_4K_RGB_20210512.webp",
          "caption": "Horizon Forbidden West — Action geography. Establish geography before rapid cuts or close action.",
          "sourceUrl": "https://www.guerrilla-games.com/read/15-minutes-of-new-gameplay-for-horizon-forbidden-west",
          "sourceTitle": "Guerrilla — Horizon Forbidden West",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Camera Cuts",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-camera-cuts-using-sequencer-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "reveal-shot",
      "title": "Make a Slow Reveal Shot",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Create a five-second reveal where foreground geometry hides the subject at frame 0 and a simple camera move exposes it gradually before landing on a clean final composition.",
      "uses": [
        "Composition",
        "Camera movement",
        "Occlusion",
        "Reveal"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Set up the hidden subject",
          "where": "Open/create 5-second Level Sequence → place one subject plus a foreground wall/door/prop",
          "do": "At frame 0, position the Cine Camera so the foreground object hides most/all of the subject while leaving enough environment to orient the viewer.",
          "why": "A reveal needs information to be withheld at the start.",
          "see": "The start frame has a deliberate occluder, not accidental clutter.",
          "check": "The subject cannot be fully understood from frame 0.",
          "troubleshoot": [
            "If the subject is still obvious, move the camera/foreground object rather than darkening the whole scene."
          ],
          "visual": null
        },
        {
          "title": "Choose one simple reveal movement",
          "where": "Frame 0 → key Transform; frame 150 (at 30 fps) → move camera laterally about 200–400 cm or forward around the occluder → key Transform",
          "do": "Use one clear move. Avoid simultaneous spins, crane moves and zooms in the starter version.",
          "why": "A single movement makes reveal timing easy to read and edit.",
          "see": "Two Transform keys create the reveal path.",
          "check": "Scrubbing forward gradually exposes the subject.",
          "troubleshoot": [
            "If the camera collides/passes through geometry, change the path rather than speeding through it."
          ],
          "visual": null
        },
        {
          "title": "Smooth the movement",
          "where": "Sequencer → select Transform keys → interpolation/easing controls",
          "do": "Set the two Transform keys to Auto interpolation for the starter version so the move eases in/out rather than snapping. Only change the interpolation later if the shot needs a deliberately hard movement.",
          "why": "Easing shapes how the reveal feels without adding extra keyframes.",
          "see": "The camera motion has intentional acceleration/deceleration.",
          "check": "Real-time playback feels controlled rather than robotic/jolting.",
          "troubleshoot": [
            "If smoothing causes overshoot/strange arcs, simplify key tangents or use fewer channels/keys."
          ],
          "visual": null
        },
        {
          "title": "Land on a useful final frame",
          "where": "Final frame → pilot camera",
          "do": "Adjust the final camera so the revealed subject has context, clean silhouette and a clear focal hierarchy.",
          "why": "The reveal payoff matters more than the movement trick.",
          "see": "The last frame works as a composition by itself.",
          "check": "At the final frame, a still screenshot communicates what was revealed and why it matters.",
          "troubleshoot": [
            "If the final shot only works while moving, improve the final framing."
          ],
          "visual": null
        },
        {
          "title": "Optional: cue sound just before sight",
          "where": "Audio track / existing sound cue → place onset roughly 10–20 frames before the subject becomes fully visible",
          "do": "Use a restrained sound clue only if it supports anticipation. Keep it optional and remove it for an A/B comparison.",
          "why": "Audio can prime the viewer before visual confirmation.",
          "see": "The visual reveal does not depend on the audio to be understandable.",
          "check": "With sound, anticipation starts just before the visual reveal; without it, the reveal still works spatially.",
          "troubleshoot": [
            "If sound gives the answer away too early, move it closer to the reveal or remove it."
          ],
          "visual": null
        },
        {
          "title": "Show a tester once without explanation",
          "where": "Play the sequence full-screen/normal speed",
          "do": "Ask what they expected before the reveal and what they noticed at the payoff. Record the answer.",
          "why": "A reveal is about audience information, so another viewer is the best check.",
          "see": "You have one audience observation and one possible timing/framing change.",
          "check": "Their attention lands on the intended subject at the final beat.",
          "troubleshoot": [
            "Do not replay repeatedly before asking; the first viewing is the useful one."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Starting with the subject already fully visible.",
        "Using too many camera moves/keyframes.",
        "Ending on a weak composition after a clever reveal."
      ],
      "makeItYours": [
        "Reveal an objective instead of a monster.",
        "Reverse it: subject disappears behind foreground cover."
      ],
      "worksWhen": [
        "The subject is genuinely withheld at the start.",
        "One clean movement reveals it gradually.",
        "The final frame directs attention to the intended subject."
      ],
      "icon": "◒",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4abe40138d6dc791368_control_pm_det_027.webp",
          "caption": "CONTROL — Architecture as frame. Let the environment compose the shot for you.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Cinematic workflows",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/cinematic-workflow-guides-and-examples-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "trigger-cutscene",
      "title": "Trigger a Cutscene & Return to Gameplay",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "25 min",
      "difficulty": "Beginner",
      "summary": "Trigger a short Level Sequence when the player enters a box, prevent it retriggering, and confirm normal gameplay camera/control returns after playback.",
      "uses": [
        "Level Sequence",
        "Trigger",
        "Player input",
        "Gameplay transition"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create a short test sequence",
          "where": "Content Drawer → Add (+) → Cinematics → Level Sequence",
          "do": "Create LS_TriggerTest with one Cine Camera and a simple 2–3 second Camera Cuts shot. Save it and place/keep a Level Sequence Actor in the level if your workflow creates one.",
          "why": "A tiny known-working sequence makes Blueprint trigger debugging much easier.",
          "see": "LS_TriggerTest works before any gameplay trigger is added.",
          "check": "Pressing Play inside Sequencer plays the complete 2–3 second shot.",
          "troubleshoot": [
            "Do not debug the trigger until the sequence plays correctly on its own."
          ],
          "visual": null
        },
        {
          "title": "Place and name the trigger volume",
          "where": "Add (+) → Volumes / search Trigger Box → place across the player route",
          "do": "Add a Trigger Box named Trigger_Cutscene. Scale it so the player must cross it once, not spawn already inside it.",
          "why": "A clear trigger boundary makes overlap behaviour predictable.",
          "see": "Trigger_Cutscene covers one obvious route point.",
          "check": "In Play mode you can walk into/out of the volume normally.",
          "troubleshoot": [
            "If it fires immediately at game start, move Player Start outside the volume."
          ],
          "visual": null
        },
        {
          "title": "Create the overlap event",
          "where": "Select Trigger_Cutscene → Level Blueprint / Blueprint event workflow → Add Event for Trigger → Actor Begin Overlap",
          "do": "Create the Begin Overlap event and, if needed, confirm Other Actor is the player before continuing.",
          "why": "The cutscene should respond to the intended player entry, not arbitrary overlap noise.",
          "see": "One overlap execution path exists.",
          "check": "The event fires when the player enters the box.",
          "troubleshoot": [
            "Use a Print String temporarily if you are unsure whether the trigger event fires; remove it after testing."
          ],
          "visual": null
        },
        {
          "title": "Add Do Once and play the sequence",
          "where": "Blueprint → Begin Overlap → Do Once → reference Level Sequence Actor → Get Sequence Player → Play (or Create Level Sequence Player → Play)",
          "do": "Connect the trigger to a Do Once, then play LS_TriggerTest using the sequence-player method used by your project/current Epic workflow.",
          "why": "Do Once prevents repeated entry/exit from replaying the same scene accidentally.",
          "see": "The trigger reliably plays exactly once.",
          "check": "Entering once starts the cutscene; stepping out/in again does not replay it during the same session.",
          "troubleshoot": [
            "If nothing plays, verify the Sequence Actor/asset reference is valid and the Camera Cuts track covers the full sequence."
          ],
          "visual": null
        },
        {
          "title": "Confirm gameplay returns cleanly",
          "where": "Play → enter trigger → do not press editor stop when sequence ends",
          "do": "After playback, move/rotate the player and confirm the normal gameplay camera is active again. If your project disables input for cinematics, restore it from the sequence Finished event.",
          "why": "A cutscene is not complete until the handoff back to gameplay is reliable.",
          "see": "No cinematic camera/input state remains stuck.",
          "check": "The player can continue normally after the final frame.",
          "troubleshoot": [
            "If camera/control remains stuck, inspect any Set Cinematic Mode/Disable Input logic and pair it with explicit restore logic on Finished."
          ],
          "visual": null
        },
        {
          "title": "Test the failure cases",
          "where": "Play twice: enter normally; then approach/leave/re-enter around the boundary",
          "do": "Check there is no spam replay, duplicate audio or camera lock. Reset PIE between sessions to confirm Do Once resets as expected.",
          "why": "Boundary testing catches the common “works once in my perfect path” trigger bugs.",
          "see": "The cutscene trigger is robust enough to use in a prototype.",
          "check": "Both test runs behave predictably.",
          "troubleshoot": [
            "If multiple actors can trigger it, add an explicit player check/cast appropriate to the project."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Trying to trigger a sequence that does not work on its own.",
        "Allowing overlap to replay every time the player crosses the boundary.",
        "Disabling player input/camera without restoring it."
      ],
      "makeItYours": [
        "Let the player skip the sequence.",
        "Use the cutscene to open/reveal a route."
      ],
      "worksWhen": [
        "The sequence triggers from the player overlap.",
        "It does not repeatedly fire in one session.",
        "Normal gameplay resumes cleanly after playback."
      ],
      "icon": "↻",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-02-clean-1300x650.png",
          "caption": "Alan Wake 2 — Focal length + framing. Choose the camera based on the information/emotion the shot must deliver.",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2 Photo Mode",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Triggering Sequences from Gameplay",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "ambient-zone",
      "title": "Build Layered Ambient Sound",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Build a simple ambient sound bed plus two local detail sources, then walk into/out of the space and balance the layers so ambience supports rather than masks gameplay.",
      "uses": [
        "Ambient Sound",
        "Sound Wave",
        "Loop",
        "Layering"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Choose one continuous bed sound",
          "where": "Content Drawer → choose/import a looping room tone, wind or machinery Sound Wave",
          "do": "Use one subtle loop that represents the whole space. Name/identify it clearly; do not start with five ambience loops.",
          "why": "A stable bed establishes the acoustic baseline before detail events are layered.",
          "see": "One bed sound is ready.",
          "check": "The Sound Wave loops cleanly when previewed.",
          "troubleshoot": [
            "If you hear a click/gap at the loop point, choose/edit a better loop before building the mix."
          ],
          "visual": null
        },
        {
          "title": "Place the bed at a low starting level",
          "where": "Drag Sound Wave/Cue/MetaSound into level as Ambient Sound OR use an Audio Component appropriate to the space",
          "do": "For the starter mix, set the bed Volume Multiplier to 0.25. Use it as broad/non-spatial ambience for this first test unless the sound clearly belongs to a visible local source.",
          "why": "Starting quiet leaves headroom for gameplay and detail sounds.",
          "see": "The space has one restrained continuous ambience layer.",
          "check": "In Play mode the bed is clearly present but does not dominate footsteps/dialogue/UI.",
          "troubleshoot": [
            "If you notice the loop before the environment, lower it."
          ],
          "visual": null
        },
        {
          "title": "Add two local detail sources",
          "where": "Place two different small sources such as drip, hum, creak, bird or electrical buzz at separate locations",
          "do": "Keep the detail sources physically tied to visible/credible locations where possible. Use suitable attenuation so they become more noticeable as the player approaches.",
          "why": "Sparse local events add spatial depth without turning the mix into constant noise.",
          "see": "Two localised details sit on top of the bed.",
          "check": "Walking the room reveals the two details at different positions.",
          "troubleshoot": [
            "If both details are audible everywhere at full level, add/fix attenuation before adding more sounds."
          ],
          "visual": null
        },
        {
          "title": "Create a clear hierarchy",
          "where": "Play → stand at three positions: entrance, centre, near detail source",
          "do": "Balance so the bed is the lowest continuous layer, local detail rises when approached, and important gameplay sounds remain above both.",
          "why": "An ambience mix needs priority, not just more audio assets.",
          "see": "You can name bed, detail and gameplay priority in the mix.",
          "check": "At no position does ambience mask a deliberately important gameplay cue.",
          "troubleshoot": [
            "If everything feels equally loud, reduce the bed first and then the less important detail."
          ],
          "visual": null
        },
        {
          "title": "Walk the boundary/transition",
          "where": "Play → enter and leave the ambient area repeatedly",
          "do": "Listen for abrupt starts/stops, hard localisation jumps or obvious loop repetition. Fix attenuation/fade/volume as appropriate to the project.",
          "why": "Transitions reveal problems that are invisible while standing still.",
          "see": "The ambience survives a real movement test.",
          "check": "Moving into/out of the space feels gradual enough for the intended environment.",
          "troubleshoot": [
            "If a sound appears suddenly, increase attenuation falloff/fade behaviour rather than hiding it under more layers."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Starting with too many loops.",
        "Making ambience as loud as gameplay cues.",
        "Judging the mix while standing still in one position."
      ],
      "makeItYours": [
        "Create a calm and danger version of the same area.",
        "Add a distant sound that hints at an unseen location."
      ],
      "worksWhen": [
        "One bed and two local details have clear roles.",
        "Gameplay cues remain intelligible.",
        "Entering/leaving the space sounds intentional."
      ],
      "icon": "♪",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "caption": "Dead Space — Occlusion + projected sound. Use sound to tell the player about spaces outside the camera.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
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
      "source": {
        "title": "Epic — Audio in UE5",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/audio-in-unreal-engine-5"
      },
      "prescriptive": true
    },
    {
      "id": "sound-attenuation",
      "title": "Make Sound Fade with Distance",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Create one Sound Attenuation asset with known starter distances, assign it to a looping source and walk from inside to outside the falloff to prove the distance behaviour.",
      "uses": [
        "Sound Attenuation",
        "3D audio",
        "Falloff",
        "Spatialisation"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create the attenuation asset",
          "where": "Content Drawer → Add (+) → Audio → Sound Attenuation",
          "do": "Create SA_DistanceTest and open it.",
          "why": "A shared attenuation asset gives repeatable spatial settings across sources.",
          "see": "SA_DistanceTest exists as a separate asset.",
          "check": "The Sound Attenuation Details panel opens.",
          "troubleshoot": [
            "If the asset type is hidden, search “Sound Attenuation” in the Add menu."
          ],
          "visual": null
        },
        {
          "title": "Set a clear starter falloff",
          "where": "SA_DistanceTest → Attenuation / Spatialization settings",
          "do": "Enable Volume Attenuation and Spatialization. Use a Sphere shape with Inner Radius 200 cm and Falloff Distance 1200 cm for the starter test.",
          "why": "Known distances make it easy to predict where full volume ends and fading begins.",
          "see": "The asset has a 200 cm full-volume region and ~1200 cm fade region.",
          "check": "The visual attenuation bounds represent a small inner sphere plus a much larger falloff.",
          "troubleshoot": [
            "If your source is huge (machinery/river), use larger values later — keep the starter values for the controlled test."
          ],
          "visual": null
        },
        {
          "title": "Assign it to one looping source",
          "where": "Place an Ambient Sound / Audio Component with a looping Sound Wave → Details → Attenuation Settings",
          "do": "Assign SA_DistanceTest to the source. Put the source at a visible object so you know where it physically is.",
          "why": "A visible source lets distance and direction be judged accurately.",
          "see": "One source uses SA_DistanceTest.",
          "check": "Attenuation debug bounds appear when selected and the sound comes from the object location.",
          "troubleshoot": [
            "If volume stays constant everywhere, confirm the source is actually using the attenuation asset and not overriding it."
          ],
          "visual": null
        },
        {
          "title": "Walk three measured listening zones",
          "where": "Play → stand very close (<200 cm), mid falloff (~700 cm), then beyond ~1400 cm from source",
          "do": "Listen without changing master volume. Note full/medium/near-silent behaviour and direction as you orbit the source.",
          "why": "Three positions prove the curve more clearly than “walk around until it sounds okay”.",
          "see": "The distance behaviour matches the configured zones.",
          "check": "Close is strongest, mid is reduced, and beyond the falloff is very quiet/inaudible depending on settings.",
          "troubleshoot": [
            "If the mid point is already silent, inspect attenuation function/falloff values; if far remains loud, check asset assignment/overrides."
          ],
          "visual": null
        },
        {
          "title": "Fit the range to the actual environment",
          "where": "Return to editor → adjust Inner Radius/Falloff based on room/corridor scale → repeat same three-zone test",
          "do": "Change the values only after the known starter behaviour works. Avoid making a tiny source audible across the whole level.",
          "why": "Attenuation should support source scale and gameplay information.",
          "see": "You can explain why the final range differs from the starter values.",
          "check": "The final fade begins/ends at distances that make sense for the environment.",
          "troubleshoot": [
            "Change one distance at a time so you can tell which adjustment improved the result."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Leaving every source effectively global.",
        "Changing attenuation while also changing source volume/master volume.",
        "Testing only next to the sound source."
      ],
      "makeItYours": [
        "Make a machine audible through a corridor before it is visible.",
        "Compare natural vs deliberately exaggerated gameplay range."
      ],
      "worksWhen": [
        "A separate attenuation asset is assigned.",
        "Close/mid/far listening positions behave predictably.",
        "Final distances are chosen to match the source/environment."
      ],
      "icon": "◉",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — Sparse sound + focus. Do not fill every second. Leave room for important sounds to become events.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Sound Attenuation",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "randomised-soundcue",
      "title": "Randomise Repeating Sounds",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Build a Sound Cue that chooses among three similar sounds and adds tiny pitch/volume variation so a repeated event stops sounding identical.",
      "uses": [
        "Sound Cue",
        "Random node",
        "Modulator",
        "Variation"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Choose three compatible source sounds",
          "where": "Content Drawer → select/import three similar Sound Waves",
          "do": "Use three variations of the same event type — footsteps on one surface, impacts, drips or clicks. Preview and make sure their loudness/length are reasonably similar.",
          "why": "Random selection works best when each option still communicates the same event.",
          "see": "Three compatible Sound Waves are ready.",
          "check": "All three assets sound like believable alternatives for one action.",
          "troubleshoot": [
            "If one clip is dramatically louder/longer, normalise/edit/replace it before building the cue."
          ],
          "visual": null
        },
        {
          "title": "Create the Sound Cue",
          "where": "Content Drawer → Add (+) → Audio → Sound Cue",
          "do": "Create SC_RandomTest and open the Sound Cue Editor.",
          "why": "The cue graph provides simple random/modulation logic around Sound Waves.",
          "see": "SC_RandomTest exists.",
          "check": "The Sound Cue output node is visible.",
          "troubleshoot": [
            "Search Sound Cue in the Add menu if the audio submenu differs."
          ],
          "visual": null
        },
        {
          "title": "Add a Random node with the three waves",
          "where": "Drag the three Sound Waves into the Sound Cue graph → add Random node → connect Wave Players to Random inputs → Random to Output",
          "do": "Connect all three variations to one Random node. Preview repeatedly.",
          "why": "Each trigger can now choose a different source rather than replaying one identical waveform.",
          "see": "All three waves can reach the Output through Random.",
          "check": "Repeated preview clicks choose different wave variations over time.",
          "troubleshoot": [
            "If the same clip seems constant, preview many times and verify all Random inputs are connected/enabled."
          ],
          "visual": null
        },
        {
          "title": "Add subtle pitch/volume variation",
          "where": "Insert a Modulator node after Random → set Pitch Min ~0.95, Pitch Max ~1.05; Volume Min ~0.90, Max ~1.00",
          "do": "Keep the variation restrained so the event still sounds like the same physical source.",
          "why": "Small modulation reduces machine-gun repetition without cartoonish pitch jumps.",
          "see": "The cue uses both source variation and subtle modulation.",
          "check": "Repeated previews vary slightly but remain recognisably the same event.",
          "troubleshoot": [
            "If it sounds drunk/cartoonish, move pitch range closer to 1.0."
          ],
          "visual": null
        },
        {
          "title": "Test it on a genuinely repeated event",
          "where": "Assign/play SC_RandomTest from an existing repeating prototype event or place a test trigger",
          "do": "Trigger the event 10–20 times at realistic spacing and listen for obvious patterns.",
          "why": "The real problem only appears under repetition; isolated preview sounds can all seem fine.",
          "see": "You can compare randomised versus fixed playback under the same event.",
          "check": "The sequence feels less repetitive than a single-wave version.",
          "troubleshoot": [
            "If the cue still repeats noticeably, improve the source variations before making random ranges extreme."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using wildly different source sounds that change the meaning of the event.",
        "Using huge pitch ranges to hide weak source variety.",
        "Judging randomisation from one or two triggers."
      ],
      "makeItYours": [
        "Make separate footstep cues for two surfaces.",
        "Use a delay/random branch for distant ambience."
      ],
      "worksWhen": [
        "Three compatible waves feed a Random node.",
        "Pitch/volume modulation stays subtle.",
        "Repeated real playback is less obviously repetitive."
      ],
      "icon": "⤨",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-03-1920x1080.png",
          "caption": "Alan Wake 2 — Atmosphere + state change. Design ambience as layers that can enter/leave with game state.",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Sound Cue Editor",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-cue-editor-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "reverb-space",
      "title": "Give a Space Reverb",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Create a clear dry-versus-reverberant room transition using one volume/effect, then walk across the boundary and tune the decay/mix to match the space.",
      "uses": [
        "Audio Volume",
        "Reverb",
        "Room size",
        "Transition"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Choose a room with an obvious acoustic identity",
          "where": "Play → choose a small room, hall, tunnel or chamber adjacent to a drier space",
          "do": "Pick one space where added reverberation makes physical sense. Take a note of the dry sound from just outside it.",
          "why": "Reverb should communicate space type/size rather than be added everywhere.",
          "see": "One dry reference position and one target room are chosen.",
          "check": "You can hear the chosen test sound clearly before adding reverb.",
          "troubleshoot": [
            "If there is no consistent sound to listen to, place a looping test source first."
          ],
          "visual": null
        },
        {
          "title": "Create/choose a Reverb Effect",
          "where": "Content Drawer → Add (+) → Audio → Reverb Effect (or project-approved Submix reverb asset)",
          "do": "Create RE_RoomTest and start with moderate settings rather than extreme cathedral values.",
          "why": "A reusable effect asset separates the acoustic character from the volume boundary.",
          "see": "RE_RoomTest exists.",
          "check": "The effect asset opens and its settings can be auditioned/assigned.",
          "troubleshoot": [
            "If your project uses Submix/Audio Gameplay Volumes instead, use that established routing but keep the same dry/wet boundary test."
          ],
          "visual": null
        },
        {
          "title": "Place the room audio/reverb volume",
          "where": "Add (+) → Volumes → Audio Volume / project’s audio gameplay volume → scale to the room",
          "do": "Make the volume cover the interior without extending far through adjacent spaces. Assign RE_RoomTest using the volume’s Reverb settings/routing.",
          "why": "The volume defines where the listener should hear the room acoustic.",
          "see": "The effect is associated with the target room only.",
          "check": "The volume bounds match the room reasonably closely.",
          "troubleshoot": [
            "If the reverb is audible far outside, inspect volume bounds and fade/priority settings."
          ],
          "visual": null
        },
        {
          "title": "Tune a moderate decay/mix while inside",
          "where": "Play → stand near the centre → trigger/listen to a short sound with clear tail",
          "do": "Adjust the effect so the tail is longer/more spacious than outside but does not smear every transient. Use a short sound (clap/impact/footstep) to judge.",
          "why": "Short transients make reverb length and density easier to hear.",
          "see": "The room sounds larger/more reflective without becoming unintelligible.",
          "check": "Inside the room the sound has a clear tail; outside it is noticeably drier.",
          "troubleshoot": [
            "If speech/gameplay cues smear together, shorten decay or lower wet level."
          ],
          "visual": null
        },
        {
          "title": "Walk repeatedly across the boundary",
          "where": "Play → cross doorway/volume edge at normal player speed",
          "do": "Listen for abrupt snapping. Adjust volume fade/reverb fade time/routing so the transition suits the architecture.",
          "why": "Acoustic transitions are experienced through movement.",
          "see": "The dry/wet transition matches the doorway/space change.",
          "check": "Entering/exiting changes space feel without a distracting hard switch unless that is intentional.",
          "troubleshoot": [
            "If the reverb changes before/after the visual space change, adjust volume bounds first."
          ],
          "visual": null
        },
        {
          "title": "Blind size test",
          "where": "Let another student stand outside then walk in while listening",
          "do": "Ask which space sounds larger/more reflective and where they noticed the transition.",
          "why": "The effect should communicate spatial character to someone who did not tune it.",
          "see": "The reverb communicates space rather than just “an effect is on”.",
          "check": "They identify the intended room and transition approximately correctly.",
          "troubleshoot": [
            "If they cannot tell, improve the contrast modestly; if they say it sounds unrealistic, reduce the effect."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Putting the same reverb everywhere.",
        "Using very long decay that masks important audio.",
        "Ignoring the physical boundary/transition while tuning from one stationary point."
      ],
      "makeItYours": [
        "Make adjacent rooms acoustically different.",
        "Use reverb as a horror clue before the room is seen."
      ],
      "worksWhen": [
        "Inside and outside sound meaningfully different.",
        "The reverb character matches the space scale/material idea.",
        "The boundary transition works while moving."
      ],
      "icon": "⌁",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "caption": "Dead Space — Occlusion + projected sound. Use sound to tell the player about spaces outside the camera.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Audio Engine",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/audio-engine-overview-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "scene-polish-pass",
      "title": "Do a Five-Pass Scene Polish",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "30 min",
      "difficulty": "Beginner",
      "summary": "Polish one existing scene through five separate passes so you fix hierarchy and gameplay first instead of endlessly adding detail.",
      "uses": [
        "Critique",
        "Readability",
        "Consistency",
        "Set dressing",
        "Lighting"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Lock a BEFORE comparison",
          "where": "Play or Pilot a camera at one representative gameplay view → take screenshot",
          "do": "Save the level, note the camera position/route, and capture one BEFORE image. Use this same view after every pass.",
          "why": "Polish is impossible to judge when the comparison camera keeps changing.",
          "see": "A dated/named BEFORE image exists.",
          "check": "You can return to the same framing within a few seconds.",
          "troubleshoot": [
            "Do not choose a cinematic angle that hides the actual gameplay problems."
          ],
          "visual": null
        },
        {
          "title": "Pass 1 — readability and collision",
          "where": "Play the main route → fix only navigation/focal problems",
          "do": "Walk the route and make at most three changes to: blocked movement, unclear destination, accidental collision or false affordances. Do not touch materials or small props yet.",
          "why": "If the player cannot read/use the scene, later visual polish only hides the real problem.",
          "see": "The scene is easier to use before it is prettier.",
          "check": "Repeat the route with no new snag or obvious route confusion.",
          "troubleshoot": [
            "If you find ten issues, fix the three that directly affect the player first."
          ],
          "visual": null
        },
        {
          "title": "Pass 2 — big shapes and scale",
          "where": "Return to the locked camera → inspect silhouette, spacing and proportions",
          "do": "Fix only major shape problems: wrong-sized prop, awkward tangent, overly empty/crowded area, repeated silhouette. Limit yourself to three major adjustments.",
          "why": "Large composition changes create more visual improvement than dozens of tiny details.",
          "see": "The composition improves even when small detail is ignored.",
          "check": "Compare to BEFORE at thumbnail size; the big shapes read more clearly.",
          "troubleshoot": [
            "If you are tweaking decals or cups, you have left this pass."
          ],
          "visual": null
        },
        {
          "title": "Pass 3 — material and lighting consistency",
          "where": "Locked camera + Lit / Lighting Only as useful",
          "do": "Choose one material inconsistency and one lighting inconsistency. Fix roughness/value/exposure/light purpose without redesigning everything.",
          "why": "Consistent surface response and motivated light make separate assets feel like one scene.",
          "see": "Lighting and materials support the same visual priority.",
          "check": "Toggle/compare: the focal hierarchy is stronger and there are fewer accidental bright/noisy surfaces.",
          "troubleshoot": [
            "Do not add five new lights; first remove or repurpose lights with no clear job."
          ],
          "visual": null
        },
        {
          "title": "Pass 4 — story detail",
          "where": "Gameplay route → inspect only the places players actually approach",
          "do": "Add or improve a maximum of one story cluster and a few supporting details where they reinforce use, age or event. Keep large areas quiet.",
          "why": "Detail is most effective when concentrated around meaningful interaction or story locations.",
          "see": "Small detail rewards inspection without carrying the whole composition.",
          "check": "A close player gains information, while the wide shot is not much noisier.",
          "troubleshoot": [
            "If the wide shot becomes busier, remove details until the hierarchy returns."
          ],
          "visual": null
        },
        {
          "title": "Pass 5 — delete and compare",
          "where": "Locked camera → final Play pass → AFTER screenshot",
          "do": "Remove at least three redundant/noisy/expensive elements with little payoff. Then take an AFTER shot from the exact comparison view and place it beside BEFORE.",
          "why": "The final polish pass should increase clarity, not asset count.",
          "see": "The AFTER frame is clearer and more intentional than BEFORE.",
          "check": "You can point to at least one improvement in gameplay read, one in composition and one thing deliberately removed.",
          "troubleshoot": [
            "If the main difference is “more stuff”, go back to the delete pass."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Polishing small props before fixing route/readability.",
        "Changing the comparison camera after every pass.",
        "Treating “more detail” as the definition of polish."
      ],
      "makeItYours": [
        "Ask someone else to choose the three biggest problems first.",
        "Do a 20-minute timed polish and compare impact."
      ],
      "worksWhen": [
        "The AFTER scene is clearer in the same camera.",
        "Each pass solves a different category of problem.",
        "At least one unnecessary element was deliberately removed."
      ],
      "icon": "✓",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.guerrilla-games.com/media/Horizon_FW_Artblast2560x854.png",
          "caption": "Horizon Forbidden West — Production finish. Polish the hierarchy between systems, art, lighting and presentation — not individual details in isolation.",
          "sourceUrl": "https://www.guerrilla-games.com/read/horizon-forbidden-west-art-blast-on-artstation",
          "sourceTitle": "Guerrilla — Horizon Art Blast",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Visuals / Rendering",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designing-visuals-rendering-and-graphics-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "performance-viewmodes",
      "title": "Use View Modes to Find Problems",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Use Unreal’s diagnostic viewport modes to find one visible hotspot, make one targeted change and prove the diagnostic view improved.",
      "uses": [
        "View Modes",
        "Shader Complexity",
        "Light Complexity",
        "Stats",
        "Profiling"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Choose one repeatable test view",
          "where": "Level Editor → position the normal gameplay camera at a busy representative scene",
          "do": "Take a Lit screenshot and note the exact location/direction. Do not start in the emptiest corner of the level.",
          "why": "Diagnostics only mean something when before and after use the same content and camera.",
          "see": "One representative baseline frame is saved.",
          "check": "You can return to the same view after editing.",
          "troubleshoot": [
            "If the scene has an obvious performance problem only during an effect, choose the camera/time where that effect is active."
          ],
          "visual": null
        },
        {
          "title": "Check Shader Complexity",
          "where": "Viewport → View Mode → Shader Complexity (Alt+8)",
          "do": "Look for the largest red/pink/white region rather than chasing isolated pixels. Take a screenshot and identify the material/effect causing it.",
          "why": "Shader Complexity visualises pixel shader instruction cost and is useful for finding expensive materials/overdraw hotspots.",
          "see": "The viewport shows the shader-complexity colour overlay and one chosen hotspot.",
          "check": "You can point to one specific surface/effect that is noticeably more expensive than its surroundings.",
          "troubleshoot": [
            "Do not assume every red pixel is a crisis; compare the hotspot’s size and gameplay importance."
          ],
          "visual": null
        },
        {
          "title": "Check Light Complexity if lighting is the suspect",
          "where": "Viewport → View Mode → Light Complexity (Alt+7)",
          "do": "If the hotspot area contains many overlapping movable/non-static lights, inspect Light Complexity and note where several lights affect the same surface. If lighting is not relevant, record “not the issue” and move on.",
          "why": "A second diagnostic helps avoid “fixing” the wrong system.",
          "see": "You have either identified a light-overlap hotspot or ruled it out.",
          "check": "You can say whether overlapping dynamic lights are a likely contributor in this view.",
          "troubleshoot": [
            "Do not change lights just because the mode is colourful; use it to answer a specific question."
          ],
          "visual": null
        },
        {
          "title": "Make one targeted change",
          "where": "Open the chosen material/effect/light setup → change only one cause",
          "do": "Examples: reduce translucent layer overlap, remove an unnecessary material feature, lower effect density, or remove/merge one overlapping light. Keep the visual goal intact.",
          "why": "Changing one cause makes the before/after result attributable.",
          "see": "The scene still communicates the same design intention.",
          "check": "Only one major performance cause has changed.",
          "troubleshoot": [
            "Do not globally lower quality settings; that hides the source instead of teaching you what caused it."
          ],
          "visual": null
        },
        {
          "title": "Return to the exact diagnostic view",
          "where": "Viewport → same camera → same View Mode",
          "do": "Take a second Shader/Light Complexity screenshot and place it next to the first. Then return to Lit mode and check the scene still looks acceptable.",
          "why": "A performance fix is only useful if the diagnostic improves without unacceptable visual loss.",
          "see": "You have a matched BEFORE/AFTER diagnostic pair plus a normal Lit check.",
          "check": "The hotspot is reduced or more contained, and the Lit result still supports the scene.",
          "troubleshoot": [
            "If the diagnostic does not improve, revert the change and investigate a different cause."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Changing several systems before taking an after screenshot.",
        "Treating the colour overlay as an FPS meter.",
        "Optimising an empty/non-representative camera."
      ],
      "makeItYours": [
        "Compare a cheap and expensive material.",
        "Test a fog/VFX-heavy scene from several camera positions."
      ],
      "worksWhen": [
        "You identify one concrete hotspot.",
        "One targeted change reduces that diagnostic problem.",
        "The Lit scene remains visually acceptable."
      ],
      "icon": "▥",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ab2445934a3c76c839_control_pm_det_005.webp",
          "caption": "CONTROL — Strong read at a glance. Make the first three seconds of the scene readable.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — View Modes",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/view-modes-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "lod-nanite-check",
      "title": "Check Mesh LOD / Nanite Use",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Inspect one repeated mesh, identify whether it uses Nanite or traditional LODs, then test its silhouette at near, mid and far distances before changing anything.",
      "uses": [
        "Static Mesh",
        "LOD",
        "Nanite",
        "Distance"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Pick one mesh worth checking",
          "where": "Play the environment → choose a Static Mesh used repeatedly or visible across distance",
          "do": "Select one rock, building piece, prop or environment mesh that appears many times or occupies lots of screen space. In the Content Drawer use Browse to Asset if needed.",
          "why": "Repeated assets magnify both visual and performance decisions, making them useful test candidates.",
          "see": "One specific asset is selected for the whole exercise.",
          "check": "You know the exact Static Mesh asset name and where it is used.",
          "troubleshoot": [
            "Do not start with a one-off tiny prop that is barely visible."
          ],
          "visual": null
        },
        {
          "title": "Identify its geometry strategy",
          "where": "Content Drawer → double-click Static Mesh → Static Mesh Editor → Details",
          "do": "Find Nanite Settings. Record whether Enable Nanite Support is on. If Nanite is off, inspect the LOD information/LOD Picker and note how many traditional LODs exist.",
          "why": "Nanite and traditional LODs manage detail differently; you should know which system you are evaluating before changing it.",
          "see": "You have identified the current strategy rather than guessing from appearance.",
          "check": "Write one line: “Nanite enabled” OR “Traditional LODs: __ levels.”",
          "troubleshoot": [
            "If you cannot find the asset settings, confirm you opened the Static Mesh itself rather than an Actor placed in the level."
          ],
          "visual": null
        },
        {
          "title": "Make a near / mid / far test row",
          "where": "Level Editor → drag three copies of the same mesh into an empty visible strip",
          "do": "Place one copy close to the camera (about 200 cm), one around 1000 cm and one around 3000 cm. Keep all three at Scale 1,1,1.",
          "why": "A controlled distance row makes silhouette/detail changes easier to spot than moving randomly through a finished level.",
          "see": "Three identical mesh instances sit at known relative distances.",
          "check": "All three copies are visible in one sweep of the camera and use identical asset settings.",
          "troubleshoot": [
            "If the asset is enormous, scale the distances up rather than scaling the mesh down."
          ],
          "visual": null
        },
        {
          "title": "Inspect the transition behaviour",
          "where": "Play or Pilot the camera → move slowly from near to far",
          "do": "Watch the outer silhouette and major holes/negative spaces. If using traditional LODs, look for distracting pops. If using Nanite, judge whether visible detail remains appropriate rather than expecting manual LOD swaps.",
          "why": "The important question is whether geometry changes are noticeable at the distance players actually see them.",
          "see": "You have observed actual in-level behaviour instead of only reading asset settings.",
          "check": "You can name the first distance where detail loss or transition becomes noticeable, if any.",
          "troubleshoot": [
            "Do not judge tiny surface triangles that are smaller than a pixel; focus on silhouette and gameplay-relevant forms."
          ],
          "visual": null
        },
        {
          "title": "Use a Nanite visualisation only if Nanite is enabled",
          "where": "Viewport → View Mode → Nanite Visualization → Overview/Triangles (availability can vary by setup)",
          "do": "If the mesh uses Nanite, inspect a Nanite visualisation to confirm the scene is rendering Nanite geometry. If it does not use Nanite, skip this step rather than enabling it blindly.",
          "why": "Visualisation verifies the rendering path without turning “Nanite on” into a universal rule.",
          "see": "You have checked the system that is actually active.",
          "check": "Nanite-enabled copies appear in the diagnostic view; non-Nanite assets are correctly treated as a different case.",
          "troubleshoot": [
            "If the visualisation option is unavailable on the machine/RHI, use the Static Mesh setting and normal distance test as your evidence."
          ],
          "visual": null
        },
        {
          "title": "Make an evidence-based decision",
          "where": "Return to Lit mode → write one short note beside the asset name",
          "do": "Choose one outcome: KEEP current setup; ADJUST traditional LODs because a pop/silhouette loss is visible; or INVESTIGATE Nanite because the asset/project/platform is suitable. Do not enable/disable systems purely for the exercise.",
          "why": "Optimisation decisions depend on content, materials, platform and measured behaviour — not a blanket “Nanite everything” rule.",
          "see": "The tutorial ends with a reasoned asset decision, not an arbitrary toggle.",
          "check": "Your decision cites the observed distance/visual problem or states that no change is needed.",
          "troubleshoot": [
            "Check Epic’s current Nanite supported-features guidance before changing a production asset with special materials/deformation needs."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Assuming every mesh should use Nanite.",
        "Expecting manual LOD switching behaviour from a Nanite mesh.",
        "Changing scale between the near/mid/far copies."
      ],
      "makeItYours": [
        "Compare a hero prop vs background prop treatment.",
        "Test foliage/rocks where repetition is high."
      ],
      "worksWhen": [
        "You can identify Nanite vs traditional LOD strategy.",
        "Near/mid/far behaviour has been tested in-level.",
        "Any change is justified by an observed problem and project needs."
      ],
      "icon": "△",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/qKm8m5buUQRNr4WIsBTcd/2d8953c4fd3f1e4acd5a78bbc9a16b30/DEAD-SPACE_Media_SLIDE-02-USP-02.jpg",
          "caption": "Dead Space — Atmosphere + readability + performance. Every expensive effect must earn a player-facing job.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Static Mesh Editor UI / Nanite",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/static-mesh-editor-ui-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "portfolio-shot",
      "title": "Take a Strong Portfolio Screenshot",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "25 min",
      "difficulty": "Beginner",
      "summary": "Capture one clean hero image, one gameplay-context image and one technical breakdown so a viewer can understand both the result and how you made it.",
      "uses": [
        "Presentation",
        "Composition",
        "High Resolution Screenshot",
        "Breakdown"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Choose the hero message",
          "where": "Play/Pilot the scene → find the angle that best communicates the environment or mechanic",
          "do": "Write a five-word target such as “abandoned station with dangerous route” or “warm safe hub at night.” Pick one view that supports that message.",
          "why": "A portfolio image should communicate a design/art idea, not simply prove the level exists.",
          "see": "One hero camera/view is chosen for a specific reason.",
          "check": "Someone looking at the view can describe the main subject/space quickly.",
          "troubleshoot": [
            "If the frame tries to show the entire level, move closer and choose one idea."
          ],
          "visual": null
        },
        {
          "title": "Clean the viewport before framing",
          "where": "Viewport → press G for Game View where appropriate → deselect actors → hide debug overlays/temporary helpers",
          "do": "Remove selection outlines, gizmos, collision debug, temporary text and editor clutter from the presentation view.",
          "why": "Accidental UI makes finished work look unfinished.",
          "see": "A clean gameplay/presentation view remains.",
          "check": "Nothing in the frame looks like an editor mistake or debug artefact.",
          "troubleshoot": [
            "Keep UI only when the UI itself is part of what you are presenting."
          ],
          "visual": null
        },
        {
          "title": "Build foreground / midground / background",
          "where": "Pilot the camera / adjust normal viewport framing",
          "do": "Place or choose a viewpoint with one foreground edge/object, the main subject in the midground and readable depth/background. Avoid large empty dead zones unless they serve the composition.",
          "why": "Layered depth helps the viewer read scale and directs the eye through the image.",
          "see": "The frame has clear depth and one dominant subject.",
          "check": "Trace the eye from foreground to subject to background without getting stuck on a competing object.",
          "troubleshoot": [
            "If a foreground object covers the subject, move the camera rather than shrinking the whole scene."
          ],
          "visual": null
        },
        {
          "title": "Capture the hero and a gameplay-context shot",
          "where": "Viewport Options → High Resolution Screenshot (or your normal approved screenshot workflow)",
          "do": "Take the polished hero frame, then take a second image from a realistic gameplay camera showing how a player actually experiences the space.",
          "why": "One image sells the work; the second proves the work functions in context.",
          "see": "You have Hero.png and Gameplay.png (or equivalent named files).",
          "check": "The two screenshots show different useful information instead of the same frame twice.",
          "troubleshoot": [
            "Do not use a dramatic camera that hides obvious scale/navigation problems as your only image."
          ],
          "visual": null
        },
        {
          "title": "Capture one technical breakdown",
          "where": "Return to the same scene → choose one useful diagnostic/process view",
          "do": "Take one image that explains construction: blockout comparison, Lighting Only, wireframe, material setup, Blueprint graph or before/after — whichever best represents your contribution.",
          "why": "A breakdown demonstrates authorship and process rather than relying on a beauty shot alone.",
          "see": "You have one clearly labelled process/breakdown image.",
          "check": "A reviewer can tell what technical/design work you personally did.",
          "troubleshoot": [
            "Choose one meaningful breakdown; five random debug screenshots do not add clarity."
          ],
          "visual": null
        },
        {
          "title": "Write a two-line caption",
          "where": "Wherever the portfolio evidence will be submitted/presented",
          "do": "Line 1: what the piece is and your responsibility. Line 2: one important technique/decision. Example: “Third-person industrial level — level design, lighting and set dressing. Built the route around a visible turbine landmark and tested the decision point with peers.”",
          "why": "A concise caption gives ownership and design intent without becoming an essay.",
          "see": "The image set has context and clear authorship.",
          "check": "A reader knows what you made and what decision you are proud of in under 15 seconds.",
          "troubleshoot": [
            "Avoid vague captions such as “I made this in Unreal and I am happy with it.”"
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using only cinematic close-ups that hide gameplay scale.",
        "Leaving editor/debug clutter in final images.",
        "Providing no process image or explanation of your own contribution."
      ],
      "makeItYours": [
        "Create a 3-image set: hero, gameplay, breakdown.",
        "Re-shoot the same scene for horror vs adventure tone."
      ],
      "worksWhen": [
        "The hero shot communicates one clear idea.",
        "A gameplay shot proves the space/system in context.",
        "A breakdown and caption make your contribution obvious."
      ],
      "icon": "▣",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.guerrilla-games.com/media/Horizon_FW_Artblast2560x854.png",
          "caption": "Horizon Forbidden West — Production finish. Polish the hierarchy between systems, art, lighting and presentation — not individual details in isolation.",
          "sourceUrl": "https://www.guerrilla-games.com/read/horizon-forbidden-west-art-blast-on-artstation",
          "sourceTitle": "Guerrilla — Horizon Art Blast",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic — Screenshots",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/taking-screenshots-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "decision-point-test",
      "title": "Design a Clear Decision Point",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "35 min",
      "difficulty": "Beginner",
      "summary": "Build one three-way junction where the main route, optional route and blocked route each communicate a different meaning before the player commits.",
      "uses": [
        "Level flow",
        "Affordance",
        "Sightlines",
        "Playtesting"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Greybox the neutral three-way junction",
          "where": "Level Editor → Add (+) → Shapes → Cube → duplicate",
          "do": "Make a 1200 × 1200 cm junction with the player approaching from one side. Create three openings about 300 cm wide: straight ahead, left and right. Keep them visually similar for this first pass.",
          "why": "A neutral starting point makes the later hierarchy and trade-offs visible.",
          "see": "A simple three-choice greybox exists with no signs or UI.",
          "check": "Press Play 600 cm before the junction and confirm all three openings can be seen or discovered.",
          "troubleshoot": [
            "If the camera cannot see all choices at once, that is fine as long as a small turn reveals them before commitment."
          ],
          "visual": null
        },
        {
          "title": "Turn the straight route into clear progression",
          "where": "Level Editor → extend the straight route and place one large landmark",
          "do": "Give the straight route 800–1000 cm of visible depth and place a tall landmark/objective proxy beyond it. Keep the entrance open and uncomplicated.",
          "why": "Main progression should read as dependable and easy to parse.",
          "see": "The straight route reads as the safest/clearest continuation.",
          "check": "A tester looking from the approach can point to the likely main route.",
          "troubleshoot": [
            "If the optional route steals attention, reduce its scale before making the main route brighter."
          ],
          "visual": null
        },
        {
          "title": "Make the left route tempting but clearly optional",
          "where": "Level Editor → shorten the left branch to roughly 400–600 cm → add one reward proxy",
          "do": "Place a small visible reward proxy near the end: for example a coloured 50 cm cube on a 100 cm pedestal, loot prop or interesting view. Keep the route narrower/shorter than the main route.",
          "why": "Optional routes need a reason to investigate without pretending to be mandatory progression.",
          "see": "The optional branch contains a visible invitation and a shorter commitment.",
          "check": "A tester describes the left route as interesting or rewarding but not the obvious way forward.",
          "troubleshoot": [
            "If everyone takes it thinking it is the main path, reduce its depth/scale or strengthen the straight route hierarchy."
          ],
          "visual": null
        },
        {
          "title": "Make the right route visibly unavailable",
          "where": "Level Editor → place barrier geometry inside/right before the opening",
          "do": "Use a physical shutter, collapsed wall, locked gate proxy or rubble block. Make the reason visible from the junction; do not rely on an invisible blocking volume.",
          "why": "Honest denial prevents wasted movement and teaches the player how the world communicates locked routes.",
          "see": "The blocked route has a visible physical state.",
          "check": "The tester says “that way is blocked/locked” before walking into it.",
          "troubleshoot": [
            "If it looks like ordinary cover that can be climbed, make the barrier clearly part of the architecture."
          ],
          "visual": null
        },
        {
          "title": "Remove accidental mixed messages",
          "where": "Play from the approach → inspect all three routes at player height",
          "do": "Check that the main route is not darker/smaller than the optional route, the reward does not sit on the blocked route, and no decorative prop looks like a doorway. Remove one conflicting cue if you find it.",
          "why": "Meaningful choices still need clear communication of what each option is.",
          "see": "The three routes have different meanings rather than three equally noisy entrances.",
          "check": "You can describe each route in one phrase: progress / optional reward / unavailable.",
          "troubleshoot": [
            "If you need to explain a route with a sentence, the visual language is not finished."
          ],
          "visual": null
        },
        {
          "title": "Run a silent decision test",
          "where": "Play → give another student control at the same start position",
          "do": "Say only “choose where you would go.” Record their first choice, what they think each route means, and where they pause.",
          "why": "Their interpretation tells you whether the junction communicates choice rather than simply containing three doors.",
          "see": "You have one small observation log from a real player.",
          "check": "The tester correctly identifies main and blocked routes; they recognise the optional route as a choice rather than a mistake.",
          "troubleshoot": [
            "Do not defend the design during the test; ask what they thought after they have chosen."
          ],
          "visual": null
        },
        {
          "title": "Change one weak cue and re-test",
          "where": "Level Editor → change only the route cue that caused confusion",
          "do": "Make one targeted revision: alter opening size, visible depth, reward visibility, landmark position or barrier readability. Then repeat the same test position.",
          "why": "Iteration should connect a specific observed problem to a specific design change.",
          "see": "You can show a before/after decision point and explain why the change was made.",
          "check": "The second tester hesitates less or interprets the route meanings more accurately.",
          "troubleshoot": [
            "If the result gets worse, revert and try a different cue rather than layering on more signals."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Making all three routes equally open, bright and deep.",
        "Using a reward that looks like the main objective.",
        "Blocking a route with collision that has no visible reason."
      ],
      "makeItYours": [
        "Swap which route is optional without changing the room footprint.",
        "Make the blocked route become the main route later."
      ],
      "worksWhen": [
        "Players can identify progression, optional content and an unavailable route.",
        "The choice is readable from the actual approach.",
        "A revision is based on observed player behaviour."
      ],
      "icon": "⑂",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ad955ffc88abcd7409_CONTROL_Blast_Furnace_169.webp",
          "caption": "CONTROL — Scale + landmarks. Use one shape or landmark that survives from several viewpoints.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Modeling Mode Quick Start",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-quick-start-in-unreal-engine?lang=en-US"
      },
      "prescriptive": true
    },
    {
      "id": "spatial-pacing",
      "title": "Create Pacing with Space",
      "category": "design-world-design",
      "designModule": "world-design",
      "duration": "30 min",
      "difficulty": "Intermediate",
      "summary": "Build a three-beat greybox route — compression, reveal and release — so the space changes the player’s rhythm without changing movement speed.",
      "uses": [
        "Pacing",
        "Spatial rhythm",
        "Compression",
        "Reveal"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Lock the player movement and make a start point",
          "where": "Duplicate a simple Third Person test map → Play",
          "do": "Use the normal Third Person movement settings for the whole exercise. Place the Player Start so every test begins from the same spot.",
          "why": "If speed changes during the test, you cannot tell whether the pacing came from the level or the movement system.",
          "see": "You have one repeatable start position and unchanged movement settings.",
          "check": "Run forward for five seconds and confirm the character speed/camera feel is normal before editing the route.",
          "troubleshoot": [
            "Do not add sprint gates, slow volumes or cutscenes to this exercise."
          ],
          "visual": null
        },
        {
          "title": "Build Beat 1: compression",
          "where": "Level Editor → Add (+) → Shapes → Cube",
          "do": "Build a corridor 300 cm wide, 280 cm high and 750 cm long. Keep the end partially hidden rather than opening directly onto the final view.",
          "why": "Narrower enclosure and limited sightlines create a tighter, more focused beat.",
          "see": "A short enclosed approach creates the first beat.",
          "check": "Play through it at normal speed; the camera and walls feel noticeably closer than in an open room but remain comfortable to navigate.",
          "troubleshoot": [
            "If the camera constantly clips, increase width/height slightly; tension should come from enclosure, not broken controls."
          ],
          "visual": null
        },
        {
          "title": "Delay the reveal with one turn",
          "where": "Level Editor → turn the corridor about 90° or offset the doorway",
          "do": "Add a corner or offset opening near the end so the next large space cannot be fully seen from the starting position.",
          "why": "Withholding information creates anticipation; the player has to move before the payoff appears.",
          "see": "The next space is revealed by movement, not shown immediately.",
          "check": "From the Player Start you cannot see the whole release room, but after the turn it becomes visible.",
          "troubleshoot": [
            "Do not create a maze; one clear turn is enough."
          ],
          "visual": null
        },
        {
          "title": "Build Beat 2: release",
          "where": "Level Editor → Add (+) → Shapes → Cube",
          "do": "Open the route into a room 1200 × 1000 cm with a 550 cm ceiling. Create a long sightline to one focal object/landmark on the far side.",
          "why": "Scale contrast makes the larger space feel more dramatic than it would in isolation.",
          "see": "The player exits a tight space into a visibly larger one.",
          "check": "Walk out of the corridor: the room feels obviously wider/taller within one or two steps.",
          "troubleshoot": [
            "If the release feels flat, increase the difference between the corridor and room before adding effects."
          ],
          "visual": null
        },
        {
          "title": "Build Beat 3: a reason to pause",
          "where": "In the release room → place a low barrier/overlook, objective proxy or safe platform",
          "do": "Create one spot 300–500 cm inside the room where the player naturally slows: an overlook, readable objective, safe island or strong vista. Keep the route onward visible from there.",
          "why": "Pacing includes deliberate pauses and observation, not only movement speed.",
          "see": "The large room contains one readable pause point.",
          "check": "A tester naturally looks around, stops briefly or adjusts direction at the intended spot.",
          "troubleshoot": [
            "If they sprint straight through, move the focal information so it is best read from the pause position."
          ],
          "visual": null
        },
        {
          "title": "Describe the route as three beats",
          "where": "Play from the fixed start → walk the entire route without stopping the game",
          "do": "After one run, write three words/phrases for the rhythm, for example “tight → reveal → breathe”. If you cannot name three different beats, change the geometry before adding art.",
          "why": "Naming the beats forces you to judge the sequence rather than individual pretty rooms.",
          "see": "You can point to the exact geometry that creates each pacing beat.",
          "check": "The three words match visible spatial changes in the route.",
          "troubleshoot": [
            "Avoid vague labels such as “good” or “cool”; name the spatial/emotional change."
          ],
          "visual": null
        },
        {
          "title": "Make a comparison version",
          "where": "Duplicate the route or temporarily widen the corridor to about 600 cm and reveal the big room from the start",
          "do": "Run the altered version at the same player speed, then restore the designed version. Compare which one creates stronger anticipation/release.",
          "why": "A controlled A/B comparison shows whether the spatial contrast is actually doing work.",
          "see": "You have compared two versions with the movement system unchanged.",
          "check": "You can explain which geometry change weakened or strengthened the pacing and why.",
          "troubleshoot": [
            "Change only the space for the comparison; do not also change lighting, audio or speed."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Using long empty corridors as the only way to create “slow” pacing.",
        "Changing player speed while trying to test spatial pacing.",
        "Showing the payoff from the very start and expecting the reveal to feel dramatic."
      ],
      "makeItYours": [
        "Create a horror version using compression and limited sightlines.",
        "Create an action version using wide sightlines and faster reveals."
      ],
      "worksWhen": [
        "The route has three clearly different spatial beats.",
        "The reveal only appears after movement.",
        "An A/B version proves the geometry changes the perceived rhythm."
      ],
      "icon": "⌁",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.guerrilla-games.com/media/News/HFW_SCREEN_LEGAL_GLIDER_4K_RGB_20210512.webp",
          "caption": "Horizon Forbidden West — Traversal affordance. Shape terrain around traversal decisions, not just pretty silhouettes.",
          "sourceUrl": "https://www.guerrilla-games.com/read/15-minutes-of-new-gameplay-for-horizon-forbidden-west",
          "sourceTitle": "Guerrilla — Horizon Forbidden West",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Modeling Mode Quick Start",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-quick-start-in-unreal-engine?lang=en-US"
      },
      "prescriptive": true
    },
    {
      "id": "story-vignette",
      "title": "Tell a Story with Five Props",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Build a five-prop environmental story with a fixed cause-and-effect sequence, then test whether another person can read it in five seconds.",
      "uses": [
        "Environmental storytelling",
        "Set dressing",
        "Prop clusters",
        "Decals"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Use the starter event: interrupted repair",
          "where": "Choose a 300 × 300 cm area beside a wall/machine",
          "do": "For the first version, tell this exact micro-story: “A worker was repairing something and left suddenly.” You may use real props or labelled cubes as proxies.",
          "why": "A fixed story lets the exercise test composition and evidence rather than writing skill.",
          "see": "One small empty area is reserved for the vignette.",
          "check": "You can say the event in one sentence without extra backstory.",
          "troubleshoot": [
            "Do not expand it into a whole room narrative yet."
          ],
          "visual": null
        },
        {
          "title": "Place Prop 1: the anchor",
          "where": "Content Drawer → place a workbench/machine/large crate proxy",
          "do": "Place the main work surface against or near the wall with a clear usable side.",
          "why": "The anchor tells the viewer where the action occurred.",
          "see": "One dominant object defines the scene.",
          "check": "From the main route, the anchor reads before the small props.",
          "troubleshoot": [
            "If the anchor is hidden behind clutter, move it before adding anything else."
          ],
          "visual": null
        },
        {
          "title": "Place Props 2–4: evidence of work",
          "where": "Content Drawer → place toolbox/container, tool and broken/removed part",
          "do": "Put the toolbox/container on or beside the work surface, the tool within reach, and the broken part where it appears to have been removed from the machine.",
          "why": "Each item should answer a different question: what was used, how, and on what.",
          "see": "The viewer can trace the repair action through positions.",
          "check": "The three props form a believable working relationship around the anchor.",
          "troubleshoot": [
            "Avoid decorative props that do not change the interpretation."
          ],
          "visual": null
        },
        {
          "title": "Place Prop 5: evidence of interruption",
          "where": "Content Drawer → add a chair, dropped item or personal object",
          "do": "Put the final prop outside the neat work cluster: for example a chair pulled back about 100 cm or a dropped item 50–100 cm away.",
          "why": "A displaced object implies that the normal action was interrupted.",
          "see": "One object breaks the otherwise organised repair setup.",
          "check": "The fifth prop creates a visible “something changed” clue.",
          "troubleshoot": [
            "Keep the displacement plausible; flinging the prop across the room reads as chaos rather than interruption."
          ],
          "visual": null
        },
        {
          "title": "Add one trace, not another prop",
          "where": "Decal / small light / particle / material change already available in the project",
          "do": "Add one supporting trace such as oil under the broken part, a small warning light, footprint, scorch or dust gap. It must reinforce the same story.",
          "why": "A trace connects the five props to the environment without turning the exercise into clutter.",
          "see": "One environmental mark supports the five-prop story.",
          "check": "Removing the trace weakens the same interpretation rather than suggesting a new event.",
          "troubleshoot": [
            "If the trace becomes the main focal point, lower its contrast."
          ],
          "visual": null
        },
        {
          "title": "Run the five-second blind read",
          "where": "Play → show another student the vignette from the normal route for five seconds",
          "do": "Ask “What happened here?” Write down their first answer before explaining yours. If they only say “workshop/clutter”, move the existing five props and test again.",
          "why": "A readable vignette communicates an event, not just a location theme.",
          "see": "The story has been tested through another person’s interpretation.",
          "check": "Their answer includes repair/work plus interruption/abandonment or something close.",
          "troubleshoot": [
            "Do not add more props to fix a weak read until you have tried changing placement."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Adding more props whenever the story is unclear.",
        "Using five decorative objects with no cause-and-effect relationship.",
        "Explaining the story before the blind read."
      ],
      "makeItYours": [
        "Make a second version implying the opposite outcome.",
        "Tell the event using no blood/damage clichés."
      ],
      "worksWhen": [
        "Five props imply an event, not just a room type.",
        "The environmental trace supports the same event.",
        "A tester gives a recognisably similar interpretation."
      ],
      "icon": "⌂",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.guerrilla-games.com/media/Horizon_FW_Artblast2560x854.png",
          "caption": "Horizon Forbidden West — Reference + visual language. Choose a small visual language and repeat it intentionally.",
          "sourceUrl": "https://www.guerrilla-games.com/read/horizon-forbidden-west-art-blast-on-artstation",
          "sourceTitle": "Guerrilla — Horizon Art Blast",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/environmental-clues-dressing.webp",
          "caption": "Book reference — A side-by-side set-dressing example showing how added props increase story clues and scene meaning.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Modeling Mode",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-in-unreal-engine?lang=en-US"
      },
      "prescriptive": true
    },
    {
      "id": "hero-asset",
      "title": "Break Repetition with a Hero Asset",
      "category": "design-environment",
      "designModule": "environment",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Turn one forgettable repeated area into a memorable navigation point using a single hero feature and a proper orientation test.",
      "uses": [
        "Modularity",
        "Hero assets",
        "Landmarks",
        "Set dressing"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Find the most forgettable repeated location",
          "where": "Play → walk a modular/repeated area → stop where two spaces feel too similar",
          "do": "Take a screenshot and write what repeats: same wall modules, same door, same light, same silhouette. Pick one location to fix.",
          "why": "A hero asset should solve a specific recognition/orientation problem, not decorate every room.",
          "see": "You have one baseline image of the weak location.",
          "check": "You can name why this location is hard to remember.",
          "troubleshoot": [
            "If the level has no repetition problem, choose a different area rather than forcing a hero asset."
          ],
          "visual": null
        },
        {
          "title": "Add one large distinctive feature",
          "where": "Content Drawer → place one unique mesh/group OR use a large proxy shape",
          "do": "Choose one feature with a different silhouette from the repeated kit. Make it 400 cm tall/wide for this starter room-scale test so it reads clearly against the kit.",
          "why": "A hero feature needs enough visual weight to survive distance and changing camera angles.",
          "see": "One feature clearly differs from the surrounding modular language.",
          "check": "From 800–1200 cm away, you can still identify its silhouette.",
          "troubleshoot": [
            "Do not use three competing “hero” objects; keep one dominant identifier."
          ],
          "visual": null
        },
        {
          "title": "Expose it from the approach",
          "where": "Play to the normal route → then adjust nearby geometry/props",
          "do": "Move or remove anything that hides the feature until at least part of it is visible before the player reaches the location. Aim for visibility from two useful route positions.",
          "why": "Landmarks help navigation when they can be seen before and after the decision they support.",
          "see": "The hero feature participates in wayfinding, not just the final composition.",
          "check": "At two points on the route you can point to the same feature without moving into a special editor camera.",
          "troubleshoot": [
            "If visibility requires deleting important gameplay geometry, move the hero feature instead."
          ],
          "visual": null
        },
        {
          "title": "Protect a 300 cm visual breathing zone",
          "where": "Level Editor → inspect props/lights immediately around the hero feature",
          "do": "Reduce or darken nearby competing props within 300 cm of the hero asset. Keep one supporting light/material cue if useful; remove similar bright/tall objects.",
          "why": "Contrast comes partly from what surrounds the hero, not just from making it louder.",
          "see": "The area around the feature is simpler than the repeated background.",
          "check": "The hero remains the first or second thing noticed when you return to the baseline view.",
          "troubleshoot": [
            "Do not solve competition by making the hero emissive-white; simplify first."
          ],
          "visual": null
        },
        {
          "title": "Run a navigation-memory test",
          "where": "Play → let a tester explore past the location, turn two corners, then ask them to return",
          "do": "Do not say the asset name first. Ask them to return to the memorable location and listen to the description they use.",
          "why": "A successful landmark becomes part of the player’s mental map.",
          "see": "The feature is memorable enough to support navigation.",
          "check": "The tester uses the hero feature or its location to orient themselves and returns without detailed directions.",
          "troubleshoot": [
            "If they remember the room but not the hero, the feature may be decorative rather than orienting; improve visibility or uniqueness."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Adding a unique object where there is no navigation/repetition problem.",
        "Hiding the landmark until the player is already inside the room.",
        "Surrounding the hero with equally loud props and lights."
      ],
      "makeItYours": [
        "Reuse the same kit to create a second landmark with a different hero asset.",
        "Make the hero asset also communicate gameplay state."
      ],
      "worksWhen": [
        "The location is easier to describe and remember.",
        "The hero is visible from useful approach positions.",
        "A tester can use it as an orientation cue."
      ],
      "icon": "◆",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ab2445934a3c76c839_control_pm_det_005.webp",
          "caption": "CONTROL — Repetition + interruption. Repetition makes the exception readable.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Modeling Mode",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/modeling-mode-in-unreal-engine?lang=en-US"
      },
      "prescriptive": true
    },
    {
      "id": "material-cost-check",
      "title": "Check Material Cost with Shader Complexity",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Pick one material that covers a meaningful amount of screen space, inspect it with Shader Complexity, make one justified simplification and compare the exact same view.",
      "uses": [
        "Shader Complexity",
        "Materials",
        "Profiling",
        "Translucency"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Choose a material worth testing",
          "where": "Play/Viewport → find a surface or effect that covers a noticeable part of the camera",
          "do": "Pick one material actually used in a representative scene — large floor/wall, foliage cluster, layered surface or effect — and note the asset name.",
          "why": "Optimising a tiny hidden material teaches less than testing something that matters on screen.",
          "see": "One material and one camera view are chosen.",
          "check": "You can point to the same material in the scene and Content Drawer.",
          "troubleshoot": [
            "If you cannot see the material clearly from gameplay, choose a more representative candidate."
          ],
          "visual": null
        },
        {
          "title": "Capture a Shader Complexity baseline",
          "where": "Viewport → View Mode → Shader Complexity (Alt+8)",
          "do": "Return to the chosen camera, take a screenshot and note whether the material region is mostly green, red, pink or white relative to the rest of the frame.",
          "why": "Shader Complexity gives a useful visual indication of pixel shader instruction cost.",
          "see": "A BEFORE diagnostic screenshot exists.",
          "check": "The diagnostic overlay is visible and the tested surface can be identified in it.",
          "troubleshoot": [
            "Do not interpret one isolated bright pixel as a disaster; judge coverage and context."
          ],
          "visual": null
        },
        {
          "title": "Open the material and identify one optional cost",
          "where": "Content Drawer → double-click the material → Material Editor",
          "do": "Look for one non-essential layer you understand: extra texture/detail normal, expensive procedural blend, translucent overlay, or duplicated operation. If you cannot explain a candidate, do not delete nodes at random.",
          "why": "A targeted change must connect to a known visual feature.",
          "see": "One understandable candidate is selected — or the material is explicitly recorded as “no safe change identified”.",
          "check": "You can name the feature you intend to remove/simplify and what visual result it creates.",
          "troubleshoot": [
            "If the graph is unfamiliar/complex, ask for guidance or use a simpler practice material; random node deletion is not optimisation."
          ],
          "visual": null
        },
        {
          "title": "Make one copy/controlled simplification",
          "where": "Duplicate the material for the test OR save a safe backup → alter only the chosen feature",
          "do": "Disable/remove/simplify one optional feature and Apply. Keep Base Color/major art direction as close as possible.",
          "why": "One-variable changes make the diagnostic comparison meaningful.",
          "see": "Only one major material feature changed.",
          "check": "The scene still resembles the original but the selected feature is reduced.",
          "troubleshoot": [
            "If the visual result collapses, revert and choose a less important feature."
          ],
          "visual": null
        },
        {
          "title": "Compare the same Shader Complexity view",
          "where": "Viewport → exact same camera → Shader Complexity",
          "do": "Capture AFTER, place it next to BEFORE, then return to Lit view.",
          "why": "A cost reduction is only useful when measured/visualised under the same conditions and the final look remains acceptable.",
          "see": "You can justify KEEP, REVERT or “no meaningful improvement” with the matched pair.",
          "check": "The tested region is reduced/unchanged in complexity and you can see the visual trade-off in Lit mode.",
          "troubleshoot": [
            "If the overlay barely changes, the edited feature was not a meaningful cost in this view; revert rather than pretending it worked."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Changing several nodes before comparing.",
        "Optimising a material that barely appears on screen.",
        "Treating Shader Complexity colours as an exact frame-time measurement."
      ],
      "makeItYours": [
        "Compare opaque vs translucent versions.",
        "Build a cheaper quality variant for lower settings."
      ],
      "worksWhen": [
        "A representative material and camera are used.",
        "One understandable feature is tested.",
        "A matched BEFORE/AFTER diagnostic supports the final decision."
      ],
      "icon": "▥",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/qKm8m5buUQRNr4WIsBTcd/2d8953c4fd3f1e4acd5a78bbc9a16b30/DEAD-SPACE_Media_SLIDE-02-USP-02.jpg",
          "caption": "Dead Space — Wear + material story. Wear belongs where use, impact, water or neglect would actually cause it.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/shader-complexity-heatmap.webp",
          "caption": "Book reference — Shader Complexity view mode highlighting expensive materials and areas needing optimisation.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Real-time Rendering Optimisation",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "translucency-budget",
      "title": "Control Translucency & Overdraw",
      "category": "design-materials",
      "designModule": "materials",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Build a six-layer translucent overdraw test, view it in Shader Complexity, then reduce the overlap so students can see why stacked transparency becomes expensive.",
      "uses": [
        "Translucency",
        "Overdraw",
        "VFX",
        "Performance"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create a simple translucent test material",
          "where": "Content Drawer → Add (+) → Material → Details → Blend Mode",
          "do": "Create M_Translucency_Test. Set Blend Mode to Translucent. Give Base Color a blue/grey colour, set Roughness around 0.3 and connect a Constant 0.25 to Opacity.",
          "why": "A simple controlled shader isolates the cost of overlapping translucent pixels.",
          "see": "M_Translucency_Test compiles as Translucent with Opacity 0.25.",
          "check": "The Material preview is see-through and still visibly tinted.",
          "troubleshoot": [
            "If it is opaque, confirm Blend Mode is Translucent and Opacity is connected."
          ],
          "visual": null
        },
        {
          "title": "Build a six-layer overlap stack",
          "where": "Level Editor → place six plane meshes or thin cubes using the material",
          "do": "Place six translucent surfaces facing the camera, 20 cm apart, so looking straight through them stacks all six layers in the same screen area.",
          "why": "Overdraw occurs when the same pixels must shade multiple transparent layers.",
          "see": "Six translucent layers overlap in one controlled region.",
          "check": "From the front, you can see through all six surfaces; from the side, the separate layers are obvious.",
          "troubleshoot": [
            "Keep their size and material identical so the only variable is layer count."
          ],
          "visual": null
        },
        {
          "title": "View the worst angle in Shader Complexity",
          "where": "Viewport → front camera → View Mode → Shader Complexity (Alt+8)",
          "do": "Capture the view where all six layers overlap. Then rotate sideways so they no longer overlap and compare.",
          "why": "The diagnostic makes screen-space overlap visible rather than discussing transparency cost abstractly.",
          "see": "You have a screenshot of the six-layer worst case.",
          "check": "The stacked front view is more expensive/brighter than the separated side view.",
          "troubleshoot": [
            "If no difference is visible, confirm the planes actually overlap on screen and use the same diagnostic mode."
          ],
          "visual": null
        },
        {
          "title": "Reduce the stack to two layers",
          "where": "Hide/delete four planes; keep the camera and remaining material unchanged",
          "do": "Leave only two surfaces and capture the same front view again.",
          "why": "Reducing overlapping transparent coverage is a direct, easily understood optimisation.",
          "see": "A two-layer AFTER screenshot exists from the same camera.",
          "check": "The diagnostic hotspot is reduced compared with the six-layer version.",
          "troubleshoot": [
            "Do not also change Opacity/material nodes in this step; isolate layer count."
          ],
          "visual": null
        },
        {
          "title": "Decide whether transparency is actually required",
          "where": "Return to Lit view → inspect the real intended asset/effect",
          "do": "For a production example, ask whether the surface could be Opaque/Masked instead of Translucent. Only switch blend mode when the visual requirement allows it.",
          "why": "The cheapest transparent surface is often one that does not need translucency at all — but visual requirements decide.",
          "see": "The exercise ends with a design/technical decision, not a blanket “transparency bad” rule.",
          "check": "You can give one example that truly needs translucency and one that could use opaque/masked treatment.",
          "troubleshoot": [
            "Do not convert glass/fog or other genuinely semi-transparent effects to Masked just to make the diagnostic green."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Stacking many large transparent cards in the same view without checking overdraw.",
        "Changing opacity and layer count at the same time during the comparison.",
        "Assuming every translucent effect can be replaced by Masked."
      ],
      "makeItYours": [
        "Make a high and low quality FX version.",
        "Create a glass setup that uses minimal overlapping panes."
      ],
      "worksWhen": [
        "Six-layer overlap is visibly more expensive than two layers.",
        "The comparison uses the same material and camera.",
        "You can explain when translucency is worth its cost."
      ],
      "icon": "◩",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ad955ffc88abcd7409_CONTROL_Blast_Furnace_169.webp",
          "caption": "CONTROL — Material families. Build a small reusable surface family rather than 30 unrelated materials.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Real-time Rendering Optimisation",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "lumen-mood-pass",
      "title": "Build a Lumen Mood Pass",
      "category": "design-lighting",
      "designModule": "lighting",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Verify that the project is actually using Lumen, then create one indirect-lighting mood change and compare quality/performance settings without treating Lumen as a magic checkbox.",
      "uses": [
        "Lumen",
        "Lighting hierarchy",
        "Scalability",
        "Exposure"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Confirm the project lighting method before editing",
          "where": "Edit → Project Settings → Engine → Rendering → Dynamic Global Illumination Method / Reflection Method",
          "do": "Record the current project methods. Continue the Lumen-specific steps only if the project is intended to use Lumen. Do not change a production project’s rendering path just for this exercise without approval.",
          "why": "Lumen behaviour cannot be judged correctly if the project is using another GI/reflection method.",
          "see": "The active project lighting method is recorded.",
          "check": "You can state whether Dynamic GI and Reflections are set to Lumen.",
          "troubleshoot": [
            "If Lumen is not the project method, use the relevant lighting workflow instead and treat this page as reference."
          ],
          "visual": null
        },
        {
          "title": "Create a simple indirect-light test area",
          "where": "Use a grey room with one bright opening/light and one shadowed wall",
          "do": "Arrange the key light/opening so direct light hits one surface and another nearby surface is mainly reached by bounce/indirect light. Keep materials simple.",
          "why": "Lumen is easiest to understand when you can distinguish direct lighting from bounced light.",
          "see": "One camera clearly shows direct and indirect regions.",
          "check": "The shadow-side area is not directly hit by the key but still receives visible indirect illumination.",
          "troubleshoot": [
            "If every wall is directly lit, change the light/opening before adjusting Lumen settings."
          ],
          "visual": null
        },
        {
          "title": "Add one coloured/emissive influence carefully",
          "where": "Place one saturated surface or restrained emissive panel near the shadow-side area",
          "do": "Use a noticeable but not extreme colour/emissive source and observe whether colour/indirect contribution appears nearby. Keep the source size large enough to be stable.",
          "why": "Lumen can propagate dynamic indirect lighting; a controlled colour cue makes the behaviour visible.",
          "see": "The indirect contribution is visible from the fixed camera.",
          "check": "Nearby indirect surfaces pick up some believable colour/illumination without the whole room becoming neon.",
          "troubleshoot": [
            "Tiny extremely bright emissive sources can be noisy/unreliable; enlarge the source or use a real light if the effect is unstable."
          ],
          "visual": null
        },
        {
          "title": "Use a PPV to inspect Lumen quality deliberately",
          "where": "Add/select PPV_Global → Details → Global Illumination / Reflections",
          "do": "With GI/Reflections set to Lumen, start around quality value 1.0 for the relevant Lumen quality controls. Increase one quality control only if you can see a specific noise/detail problem, and note the change.",
          "why": "Lumen quality settings trade fidelity for GPU cost; raising everything without a problem wastes performance.",
          "see": "You have a before/after of one specific Lumen quality adjustment.",
          "check": "The chosen artifact/noise either improves or remains unchanged when one quality control changes.",
          "troubleshoot": [
            "If you cannot see a benefit, return the quality setting to the lower value."
          ],
          "visual": null
        },
        {
          "title": "Check the same view with performance data",
          "where": "Same camera → stat gpu / project profiling method → PPV quality before and after",
          "do": "Record the GPU/frame cost with the lower and higher quality state under the same resolution/scalability.",
          "why": "A mood/quality decision should consider the cost of the extra fidelity.",
          "see": "The final quality value has a reason, not just “higher is better”.",
          "check": "You have matched visual and performance evidence for the one setting you changed.",
          "troubleshoot": [
            "If profiling numbers are noisy, repeat the same view several times rather than comparing two random frames."
          ],
          "visual": null
        },
        {
          "title": "Return to the art goal",
          "where": "Lit view → same gameplay route",
          "do": "Keep only the Lumen/lighting changes that improve the intended mood/readability. Remove settings changed solely because they existed in the menu.",
          "why": "The final scene should be art-directed, not a collection of maximum-quality toggles.",
          "see": "You can explain the mood change and the quality/performance trade-off in two sentences.",
          "check": "The indirect lighting supports the focal route/atmosphere and the chosen cost is defensible.",
          "troubleshoot": [
            "If the change is invisible in normal gameplay, do not spend performance on it."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Assuming a project uses Lumen without checking.",
        "Increasing all quality controls to maximum.",
        "Using tiny extreme emissive sources and blaming Lumen when they behave poorly."
      ],
      "makeItYours": [
        "Create a warm safe version and cold threatening version.",
        "Design the same mood with fewer dynamic lights."
      ],
      "worksWhen": [
        "The active GI/reflection method is verified.",
        "A controlled indirect-light contribution is visible.",
        "One quality change is compared visually and with performance evidence."
      ],
      "icon": "◐",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-03-1920x1080.png",
          "caption": "Alan Wake 2 — Colour + motivated emphasis. Treat light colour/intensity as a deliberate variable, not a vibe slider.",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2 Photo Mode",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/lumen-gi-comparison.webp",
          "caption": "Book reference — Static lighting versus Lumen GI, plus a visual breakdown of bounce lighting and reflections.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/lighting-mood-comparison.webp",
          "caption": "Book reference — The same scene under two lighting moods, showing how colour and contrast change player interpretation.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Lumen Performance Guide",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/lumen-performance-guide-for-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "time-of-day-contrast",
      "title": "Design Two Times of Day",
      "category": "design-lighting",
      "designModule": "lighting",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Create Day and Dusk versions of the same camera using the same geometry, then compare how light direction, sky value and practical lights change route readability and mood.",
      "uses": [
        "Time of day",
        "Sky Atmosphere",
        "Fog",
        "Visual storytelling"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Lock one comparison camera and save two level variants",
          "where": "Choose a representative exterior/large interior view → Save Current Level As…",
          "do": "Save L_Time_Day and L_Time_Dusk (or use a safe lighting-variant workflow). Capture one camera position that includes the route, focal landmark and sky/light direction.",
          "why": "Matched geometry/camera makes the time-of-day lighting decision visible.",
          "see": "A fixed comparison view exists in Day and Dusk versions.",
          "check": "Both variants open with the same layout and camera framing.",
          "troubleshoot": [
            "Do not move props/geometry between the two versions during this exercise."
          ],
          "visual": null
        },
        {
          "title": "Build the Day version around a higher sun",
          "where": "L_Time_Day → select Directional Light / Sky Light / Sky Atmosphere already used by the project",
          "do": "Place the sun/directional light at a clearly higher daytime angle and keep sky fill sufficient for route readability. Avoid changing every atmospheric setting.",
          "why": "Higher-angle light gives a different shadow length/read than low-angle dusk.",
          "see": "The Day screenshot has a bright sky/fill and clear navigation.",
          "check": "Shadows are shorter/more overhead and the route/landmark remain clearly readable.",
          "troubleshoot": [
            "If the scene is flat, change light direction first rather than adding many fill lights."
          ],
          "visual": null
        },
        {
          "title": "Build the Dusk version around a low-angle key",
          "where": "Open L_Time_Dusk → rotate the same Directional Light toward a low angle near the horizon",
          "do": "Lower the sun angle until shadows lengthen and surfaces catch more directional/grazing light. Shift colour temperature/sky only enough to support dusk.",
          "why": "Low-angle light changes silhouette, contrast and mood even with identical geometry.",
          "see": "Dusk reads as a different time without changing the level layout.",
          "check": "Longer shadows and warmer/cooler directional colour clearly separate Dusk from Day.",
          "troubleshoot": [
            "If the route disappears, restore local/sky visibility before pushing the dusk darker."
          ],
          "visual": null
        },
        {
          "title": "Turn practical lights into navigation support",
          "where": "Dusk only → enable/place existing lamps, windows, signs or route lights",
          "do": "Use a small number of practical lights at decision points/landmarks that were readable from daylight alone. Keep Day mostly dependent on natural light.",
          "why": "Time-of-day art direction can change which cues carry navigation information.",
          "see": "Dusk has a different but still coherent navigation hierarchy.",
          "check": "At dusk, practical pools help the route/landmark read without becoming a chain of giant arrows.",
          "troubleshoot": [
            "If every light is equally bright, reduce non-essential fixtures and keep only those with a route/story role."
          ],
          "visual": null
        },
        {
          "title": "Compare the same two views side by side",
          "where": "Capture Day and Dusk from the locked camera → then Play the same route in both",
          "do": "Write three differences: shadow direction/length, focal hierarchy, and what the player can/cannot see.",
          "why": "Time-of-day design is more than hue; it changes information and behaviour.",
          "see": "Both variants preserve the intended route while producing meaningfully different mood/read.",
          "check": "You can identify one advantage and one risk in each version.",
          "troubleshoot": [
            "If Dusk is just Day with an orange filter, revisit light direction and practical-light hierarchy."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Changing geometry/props while supposedly comparing lighting.",
        "Making dusk simply darker everywhere.",
        "Adding practical lights without a navigation/story purpose."
      ],
      "makeItYours": [
        "Add a foggy dawn state.",
        "Create a light that becomes a navigation beacon only at night."
      ],
      "worksWhen": [
        "Day and Dusk use the same level/camera.",
        "Light direction and information hierarchy clearly differ.",
        "Both versions remain playable/readable for their intended mood."
      ],
      "icon": "◒",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — Silhouette + negative space. Darkness is useful only when the important information remains readable.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Lumen Performance Guide",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/lumen-performance-guide-for-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "pcg-safe-route",
      "title": "Protect a Route from Procedural Clutter",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Stress-test an existing PCG scatter setup so changing the seed never fills the authored player route or destroys the landmark sightline.",
      "uses": [
        "PCG",
        "Foliage",
        "Exclusion zones",
        "Readability"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Confirm the prerequisite: a working scatter graph",
          "where": "Open the level’s existing PCG Volume/Component/Graph → generate once",
          "do": "Use a PCG setup that already scatters foliage/rocks successfully. This exercise does not begin by building an entire PCG graph from scratch.",
          "why": "The design problem is protecting authored gameplay from procedural variation; the scatter system must already work.",
          "see": "One working PCG scatter area overlaps or surrounds a player route.",
          "check": "Changing/regenerating the setup produces visible instances.",
          "troubleshoot": [
            "If no PCG scatter exists, use the Epic PCG learning material first rather than guessing through this applied test."
          ],
          "visual": null
        },
        {
          "title": "Mark the route as authored space",
          "where": "Level Editor → identify the exact floor/spline/corridor used by the player",
          "do": "Define a protected strip at least around the playable route width plus camera shoulder. Use the exclusion/density input method already supported by your PCG graph — for example spline/shape data, an exclusion volume/mask or authored density attribute.",
          "why": "Procedural content needs an explicit “do not occupy” rule for critical gameplay space.",
          "see": "You can show where PCG is allowed and where it is not.",
          "check": "The graph/setup has a named input/region representing the route exclusion.",
          "troubleshoot": [
            "Do not rely on manually deleting generated instances after every regeneration."
          ],
          "visual": null
        },
        {
          "title": "Apply the exclusion before final scatter",
          "where": "PCG Graph → place the route exclusion/difference/density filter before the final Static Mesh Spawner(s)",
          "do": "Use the graph’s existing exclusion method so candidate points inside the protected route are removed/reduced before meshes spawn.",
          "why": "Filtering points upstream makes the rule survive regeneration and seed changes.",
          "see": "The route protection is produced by the graph, not manual cleanup.",
          "check": "Regenerate: the main route is clear without hand-deleting generated meshes.",
          "troubleshoot": [
            "If the graph uses a different architecture, trace where points feed the spawner and apply the route constraint at the appropriate point-generation/filter stage."
          ],
          "visual": null
        },
        {
          "title": "Protect one landmark sightline too",
          "where": "Choose two player views toward a landmark → extend exclusion/low-density region only where needed",
          "do": "Create a narrower sightline protection zone so tall generated assets do not repeatedly block the landmark. Keep procedural density elsewhere.",
          "why": "Navigation cues are another authored requirement that procedural variation must respect.",
          "see": "The graph respects movement and one visibility constraint.",
          "check": "After regeneration, the landmark remains recognisable from both views.",
          "troubleshoot": [
            "Do not clear the whole area; constrain only the camera/landmark corridor that matters."
          ],
          "visual": null
        },
        {
          "title": "Regenerate at least three different results",
          "where": "Change seed/input that affects distribution → Generate/Regenerate three times",
          "do": "For each result, run the route and note any generated collision, blocked sightline or density problem.",
          "why": "A procedural rule is only robust if it survives more than the one seed you art-directed by hand.",
          "see": "You have a three-seed pass/fail check.",
          "check": "All three results preserve route clearance and landmark visibility.",
          "troubleshoot": [
            "If one seed fails, fix the rule/constraint and repeat all three instead of accepting the lucky seeds."
          ],
          "visual": null
        },
        {
          "title": "Hand-place hero elements after procedural safety works",
          "where": "Level Editor → normal Static Mesh placement",
          "do": "Add any essential hero tree/rock/structure manually after the procedural system proves safe. Keep gameplay-critical landmarks outside random generation.",
          "why": "Authored hero elements should not move/disappear because the PCG seed changed.",
          "see": "The final scene combines safe procedural coverage with deliberate authored anchors.",
          "check": "Regenerating PCG does not replace or obstruct the key hero landmark.",
          "troubleshoot": [
            "If a “hero” must be guaranteed, do not leave it to an unconstrained random spawner."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Deleting generated blockers by hand after every seed.",
        "Testing only one procedural result.",
        "Putting gameplay-critical landmarks entirely under random generation."
      ],
      "makeItYours": [
        "Create a clearing that procedural rules naturally respect.",
        "Use density to foreshadow danger or safety."
      ],
      "worksWhen": [
        "The route stays clear across at least three generations.",
        "The landmark sightline survives seed changes.",
        "Hero navigation elements remain authored and stable."
      ],
      "icon": "♧",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot5.jpg",
          "caption": "Death Stranding — Silhouette + difficulty. Let large terrain forms preview the difficulty ahead.",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — PCG Framework",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/procedural-content-generation-framework-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "weather-readability",
      "title": "Make Weather Change the Experience",
      "category": "design-landscape",
      "designModule": "landscape",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Build a simple fog/storm state that changes mood and visibility while preserving the route edge, one landmark and nearby gameplay information.",
      "uses": [
        "Weather",
        "Fog",
        "Landscape",
        "Gameplay readability"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Write the visibility budget before changing weather",
          "where": "Play the normal clear-weather route",
          "do": "Choose three things that must remain readable in bad weather: the next 300–500 cm of route, one landmark, and nearby hazards/interactables. Take a CLEAR screenshot from the main approach.",
          "why": "Weather can reduce information intentionally, but you need to know what cannot disappear.",
          "see": "A clear-weather reference and visibility checklist exist.",
          "check": "The three protected cues are visible in the baseline image.",
          "troubleshoot": [
            "If you protect everything, the weather will have no effect; protect only information needed for fair play."
          ],
          "visual": null
        },
        {
          "title": "Create the weather state with fog/light first",
          "where": "Duplicate/save a weather test variant → Add/select Exponential Height Fog + main sky/directional lighting",
          "do": "Increase fog gradually and reduce/shift general light to create poorer visibility. Start with the largest environmental changes before adding particles.",
          "why": "Fog and light already change depth, contrast and colour — enough to test the design problem.",
          "see": "The scene clearly reads as a different weather state without particles.",
          "check": "Far background information reduces while the nearest route still exists.",
          "troubleshoot": [
            "If the whole screen becomes flat grey, reduce Fog Density and rebuild contrast before continuing."
          ],
          "visual": null
        },
        {
          "title": "Restore route edges with local contrast",
          "where": "Select route material/edge props/practical lights",
          "do": "Use restrained material-value contrast, silhouettes or practical lights so the next section of playable path remains visible through the weather. Do not draw a glowing line all the way to the objective.",
          "why": "Fair navigation can survive reduced global visibility through local cues.",
          "see": "The route survives weather without a HUD arrow.",
          "check": "From the approach, the player can still identify where the route continues.",
          "troubleshoot": [
            "If the route only reads because every edge is emissive, reduce the cue and improve silhouette/value separation."
          ],
          "visual": null
        },
        {
          "title": "Protect the landmark, not the whole skyline",
          "where": "Main camera → move/adjust fog/light/landmark lighting locally",
          "do": "Make one recognisable landmark survive as a silhouette or contrast shape while less important distant detail disappears.",
          "why": "Selective visibility creates mood while preserving orientation.",
          "see": "One navigation anchor persists through the storm/fog.",
          "check": "The landmark is identifiable, but the background feels more obscured than in clear weather.",
          "troubleshoot": [
            "If all distant detail is equally visible, the weather is not changing information hierarchy."
          ],
          "visual": null
        },
        {
          "title": "Add particles/audio only if available and useful",
          "where": "Existing Niagara weather/audio system → enable at restrained density/level",
          "do": "Add rain/snow/wind effects after the fog/light version works. Keep screen coverage/audio level low enough that gameplay cues remain readable.",
          "why": "Secondary effects should reinforce the state, not rescue a broken lighting/readability pass.",
          "see": "Particles/audio support rather than dominate the weather.",
          "check": "The weather feels richer but protected route/landmark cues remain intact.",
          "troubleshoot": [
            "If particles obscure the whole camera or audio masks gameplay, lower density/volume before changing the route."
          ],
          "visual": null
        },
        {
          "title": "Play the worst-case view",
          "where": "Play → stand where fog/particles overlap most strongly with the route → use target quality settings",
          "do": "Walk the route and check both readability and performance in the densest view. Compare with the clear baseline.",
          "why": "Weather systems often fail at the exact camera where layers overlap most.",
          "see": "You can name what information the weather removes and what it deliberately preserves.",
          "check": "The player can navigate fairly and the chosen target-quality performance remains acceptable.",
          "troubleshoot": [
            "If the worst view fails, reduce layers/coverage rather than testing from an easier camera."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Making the whole image uniformly grey/dark.",
        "Adding dense particles before the basic fog/light readability works.",
        "Protecting every distant detail so weather has no informational effect."
      ],
      "makeItYours": [
        "Build calm vs storm versions.",
        "Make shelter visibly and audibly safer."
      ],
      "worksWhen": [
        "Route, one landmark and nearby gameplay cues remain fair.",
        "The weather clearly reduces other information.",
        "The densest weather view has been play-tested."
      ],
      "icon": "☂",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://p325k7wa.twic.pics/high/elden-ring/elden-ring/02-screenshots/ELDENRING_01_4K.jpg?twic=v1%2Fcover%3D2160%2Fstep%3D10%2Fquality%3D80%2Foutput%3Dpreview",
          "caption": "ELDEN RING — Distant attraction. Give players something memorable to orient around beyond the next 20 metres.",
          "sourceUrl": "https://en.bandainamcoent.eu/elden-ring/elden-ring/media",
          "sourceTitle": "Bandai Namco — ELDEN RING media gallery",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — PCG Framework",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/procedural-content-generation-framework-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "cine-lens-language",
      "title": "Use Lens & Framing Intentionally",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "20 min",
      "difficulty": "Intermediate",
      "summary": "Compare 24 mm and 85 mm versions of the same subject size, then choose a lens deliberately based on spatial feeling rather than “cinematic” guesswork.",
      "uses": [
        "Cine Camera",
        "Focal length",
        "Composition",
        "Lensing"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Choose one static subject and background",
          "where": "Sequencer or level → place/pick subject with visible background depth",
          "do": "Use a person/prop/doorway with objects or architecture several metres behind it. Lock the subject position for the whole exercise.",
          "why": "Lens differences are easier to see when there is foreground/background spatial information.",
          "see": "One fixed scene is ready for lens comparison.",
          "check": "The subject and background are both visible from the planned camera area.",
          "troubleshoot": [
            "If the subject is against a blank wall, choose a location with more depth."
          ],
          "visual": null
        },
        {
          "title": "Create the 24 mm version",
          "where": "Add/select Cine Camera Actor → Current Camera Settings → Focal Length = 24 mm",
          "do": "Set 24 mm and move the camera until the subject fills a chosen amount of frame, for example waist-up or half the frame height. Capture Lens_24.png.",
          "why": "A wide lens close to the subject exaggerates depth/spatial separation.",
          "see": "A labelled 24 mm reference frame exists.",
          "check": "More environment feels visible and near/far distances appear expanded.",
          "troubleshoot": [
            "Do not compare lenses by changing focal length only; reposition the camera to keep subject size similar."
          ],
          "visual": null
        },
        {
          "title": "Create the 85 mm version with matching subject size",
          "where": "Duplicate camera OR record position → set Focal Length = 85 mm → move camera farther back",
          "do": "Reposition until the subject is approximately the same size in frame as the 24 mm version. Capture Lens_85.png.",
          "why": "Keeping subject size similar reveals the perspective/background relationship change.",
          "see": "A labelled 85 mm frame matches subject size closely.",
          "check": "Background appears more compressed/closer behind the subject than in the 24 mm frame.",
          "troubleshoot": [
            "If subject size differs greatly, keep adjusting distance before judging the lens effect."
          ],
          "visual": null
        },
        {
          "title": "Compare the two frames side by side",
          "where": "Open/view both captures",
          "do": "Write three differences: background scale, amount of environment visible, and emotional/spatial feeling. Avoid saying only “zoomed in/out”.",
          "why": "Focal length changes perspective language when camera position changes to preserve framing.",
          "see": "The lens choice is connected to a visual effect, not a prestige value.",
          "check": "You can explain why the frames feel different despite similar subject size.",
          "troubleshoot": [
            "If you cannot see a difference, use a background with stronger depth cues and repeat."
          ],
          "visual": null
        },
        {
          "title": "Choose a final lens for a stated purpose",
          "where": "Cine Camera → select 24, 35, 50, 85 etc based on the comparison",
          "do": "Pick a lens because it supports one goal: intimacy, exposure, spatial distortion, compression or environmental context. Frame the final shot and record the reason.",
          "why": "The camera tool becomes design language when the value is connected to what the viewer should feel/understand.",
          "see": "You can write “I chose __ mm because…” with a specific spatial reason.",
          "check": "The final framing visibly supports the stated goal.",
          "troubleshoot": [
            "Do not default to shallow-DOF 85 mm for every shot; choose from the information/emotion need."
          ],
          "visual": null
        },
        {
          "title": "Add depth of field only after the lens decision",
          "where": "Cine Camera → Focus Settings / Aperture",
          "do": "If DOF helps, set focus on the intended subject and use a moderate aperture first (for example f/4 rather than extreme f/1.2). Play/scrub the shot to make sure focus survives movement.",
          "why": "Depth of field should support attention, not hide weak composition.",
          "see": "DOF is either intentionally useful or deliberately left off.",
          "check": "The important subject remains readable through the shot.",
          "troubleshoot": [
            "If focus pumps/misses during movement, simplify focus/raise aperture rather than accepting a blurry subject."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Comparing 24 mm and 85 mm without matching subject size.",
        "Calling focal length “zoom” and missing the perspective effect.",
        "Using extreme shallow DOF as an automatic cinematic look."
      ],
      "makeItYours": [
        "Make the same action feel heroic vs vulnerable using lens/distance.",
        "Create a reveal that changes focus mid-shot."
      ],
      "worksWhen": [
        "24 mm and 85 mm matched-subject frames are captured.",
        "Perspective/background differences can be explained.",
        "The final lens is chosen for a specific design purpose."
      ],
      "icon": "◉",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://www.guerrilla-games.com/media/News/HFW_SCREEN_LEGAL_GLIDER_4K_RGB_20210512.webp",
          "caption": "Horizon Forbidden West — Action geography. Establish geography before rapid cuts or close action.",
          "sourceUrl": "https://www.guerrilla-games.com/read/15-minutes-of-new-gameplay-for-horizon-forbidden-west",
          "sourceTitle": "Guerrilla — Horizon Forbidden West",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/sequencer-closeup-shot.webp",
          "caption": "Book reference — A close-up cinematic shot used to discuss framing, emotional focus and shot intent.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/sequencer-camera-timing.webp",
          "caption": "Book reference — A Sequencer breakdown highlighting timing tracks and control-rig-driven animation.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Cinematic Cameras",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/cinematic-cameras-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "adaptive-cutscene-mini",
      "title": "Make a Two-Outcome Adaptive Cutscene",
      "category": "design-cinematics",
      "designModule": "cinematics",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Use one Boolean to choose between two short Level Sequences at a gameplay trigger, then test both branches and the return to normal play.",
      "uses": [
        "Sequencer",
        "Blueprint",
        "Subsequences",
        "Adaptive narrative"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Make two tiny outcome sequences",
          "where": "Content Drawer → Cinematics → Level Sequence",
          "do": "Create LS_Outcome_Calm and LS_Outcome_Alarm. Give each a 2–3 second camera/action that is obviously different, then verify each plays correctly on its own.",
          "why": "Short separate outcomes make the gameplay branching easy to debug.",
          "see": "Two working named sequences exist.",
          "check": "Calm and Alarm each play from Sequencer without Blueprint logic.",
          "troubleshoot": [
            "If either sequence is broken on its own, fix that before branching."
          ],
          "visual": null
        },
        {
          "title": "Create one state variable",
          "where": "Use a simple controlling Blueprint/Level Blueprint appropriate to the exercise → Boolean variable",
          "do": "Create a Boolean named bAlarmTriggered with default False. For the starter test, expose it on the Blueprint instance so you can switch it manually in Details before playing.",
          "why": "One Boolean is enough to prove adaptive content before introducing complex narrative state.",
          "see": "bAlarmTriggered is the only decision input.",
          "check": "You can switch the test state between False and True and observe its value.",
          "troubleshoot": [
            "Do not add several conditions until both outcomes work with one Boolean."
          ],
          "visual": null
        },
        {
          "title": "Place one trigger",
          "where": "Add (+) → Trigger Box → name Trigger_AdaptiveCutscene",
          "do": "Place it across the route and create the player Begin Overlap event, followed by Do Once.",
          "why": "One predictable trigger isolates branching from other gameplay systems.",
          "see": "Trigger and Do Once exist before the Branch.",
          "check": "The execution path fires once when the player enters.",
          "troubleshoot": [
            "Use a temporary Print String if you need to verify the overlap event."
          ],
          "visual": null
        },
        {
          "title": "Branch on the Boolean and play the matching sequence",
          "where": "Blueprint → Do Once → Branch (Condition = bAlarmTriggered)",
          "do": "False: create/get sequence player for LS_Outcome_Calm → Play. True: create/get sequence player for LS_Outcome_Alarm → Play. Keep the two paths visually separate and labelled.",
          "why": "Gameplay state now selects cinematic content directly.",
          "see": "Both branch pins lead to the intended sequence.",
          "check": "False enters Calm; True enters Alarm.",
          "troubleshoot": [
            "If both states play the same result, inspect asset references on each branch rather than the camera tracks."
          ],
          "visual": null
        },
        {
          "title": "Test both states from fresh PIE sessions",
          "where": "PIE run 1: bAlarmTriggered False → trigger. Stop. PIE run 2: True → trigger.",
          "do": "Record the outcome and confirm normal gameplay/camera returns after both.",
          "why": "Adaptive content must be tested on every branch, not only the favourite one.",
          "see": "A two-row test table can show False=Calm, True=Alarm, both Pass.",
          "check": "Each state reliably produces a different intended sequence and returns control.",
          "troubleshoot": [
            "If one branch leaves input/camera stuck, fix the shared handoff logic before adding more outcomes."
          ],
          "visual": null
        },
        {
          "title": "Only then connect a real gameplay cause",
          "where": "Replace/manual state setter with an existing project event such as alarm button, key possession or NPC choice",
          "do": "Have the gameplay event set bAlarmTriggered, then run the same two-branch test again.",
          "why": "The design becomes adaptive when the state is caused by play rather than editor setup.",
          "see": "The cinematic response is connected to one real gameplay decision/state.",
          "check": "Player action/state changes which cutscene occurs.",
          "troubleshoot": [
            "Keep the manual test path available during debugging if the real gameplay condition is hard to reproduce."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Building complex state logic before two simple outcomes work.",
        "Testing only True or only False.",
        "Duplicating many conditions across cinematic Blueprints instead of using one clear state input."
      ],
      "makeItYours": [
        "Change only a prop/lighting state instead of the whole ending.",
        "Use the same system for day/night variants."
      ],
      "worksWhen": [
        "One Boolean reliably selects two different sequences.",
        "Both branches are tested from fresh sessions.",
        "A real gameplay state can drive the Boolean after the controlled test works."
      ],
      "icon": "⑂",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4abe40138d6dc791368_control_pm_det_027.webp",
          "caption": "CONTROL — Architecture as frame. Let the environment compose the shot for you.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Triggering Sequences from Gameplay",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "audio-offscreen-story",
      "title": "Tell the Player Something Off-Screen",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "20 min",
      "difficulty": "Beginner",
      "summary": "Place one hidden sound around a corner, give it a known attenuation range and test whether a player can infer what/where it is before seeing the source.",
      "uses": [
        "Spatial audio",
        "Attenuation",
        "Environmental storytelling",
        "Player guidance"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Choose one inference to communicate",
          "where": "Use a simple corridor/room junction",
          "do": "Pick one starter message such as “large machine room is around the next corner.” Choose a looping mechanical sound or labelled substitute that clearly supports that idea.",
          "why": "Off-screen audio is useful when it communicates something the camera cannot yet show.",
          "see": "One message and one source sound are chosen.",
          "check": "You can write the intended inference in one sentence.",
          "troubleshoot": [
            "Avoid vague goals such as “make it atmospheric”; state what the player should infer."
          ],
          "visual": null
        },
        {
          "title": "Hide the source physically",
          "where": "Level Editor → place Ambient Sound/Audio Component 600–1000 cm around a corner/behind a door",
          "do": "Position the source where it cannot be seen from the start, but where there is a plausible room/object that could produce it.",
          "why": "Physical placement links audio information to world space.",
          "see": "The player hears something before they can see its cause.",
          "check": "From the start camera, the source object/room is out of sight.",
          "troubleshoot": [
            "If the source can be seen immediately, move it farther around the corner rather than darkening the whole route."
          ],
          "visual": null
        },
        {
          "title": "Give it controlled attenuation",
          "where": "Assign/create Sound Attenuation → Inner Radius about 200 cm, Falloff Distance about 1200 cm as a starter",
          "do": "Use spatialisation/attenuation so the sound grows as the player approaches and has a clear direction.",
          "why": "Distance/direction turn the sound into navigation information.",
          "see": "The source has a predictable close/mid/far behaviour.",
          "check": "At the start it is audible but not full level; approaching makes it stronger and directionally clearer.",
          "troubleshoot": [
            "If it is inaudible at the start, extend falloff or move source closer; if it is full-volume everywhere, reduce range/check assignment."
          ],
          "visual": null
        },
        {
          "title": "Use geometry/acoustic treatment only if it supports the separation",
          "where": "Door/corner area → existing occlusion/filter/reverb system if the project uses one",
          "do": "Optionally make the sound slightly muffled/different before the door/corner and clearer after reveal. Keep the effect subtle enough to preserve the clue.",
          "why": "Acoustic filtering can reinforce “behind/inside another space”.",
          "see": "Any occlusion/reverb supports the same hidden-room inference.",
          "check": "Crossing the boundary changes clarity in a way that matches the architecture.",
          "troubleshoot": [
            "Do not add complex acoustic systems just for this short exercise if the project does not already use them."
          ],
          "visual": null
        },
        {
          "title": "Blind test before visual reveal",
          "where": "Play → place tester at start → ask “What do you expect is around the corner?” before they move",
          "do": "Record the first answer, then let them walk toward/reveal the source.",
          "why": "The value of off-screen storytelling is the prediction it creates.",
          "see": "You have an actual inference result from another listener.",
          "check": "Their answer mentions machine/large active space/direction or something close to the intended clue.",
          "troubleshoot": [
            "If they only say “a sound”, improve source choice/attenuation before adding more sounds."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Placing the source beside the player instead of off-screen.",
        "Using a sound with no specific world meaning.",
        "Making the source so loud/global that direction and distance disappear."
      ],
      "makeItYours": [
        "Create two different unseen spaces using the same source sound.",
        "Make the cue become clearer as a door opens."
      ],
      "worksWhen": [
        "The source is hidden at the starting view.",
        "Volume/direction changes predictably with approach.",
        "A tester can infer something close to the intended off-screen information."
      ],
      "icon": "◖",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "caption": "INSIDE — Sparse sound + focus. Do not fill every second. Leave room for important sounds to become events.",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/sequencer-audio-markers.webp",
          "caption": "Book reference — Using markers in Sequencer to align timing, beats and audio-driven moments.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/sequencer-audio-tracks.webp",
          "caption": "Book reference — Sequencer audio tracks reinforce that sound has timing, rhythm and narrative placement rather than being a final afterthought.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Sound Attenuation",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "metasound-wind",
      "title": "Make Simple Procedural Wind with MetaSound",
      "category": "design-audio",
      "designModule": "audio",
      "duration": "30 min",
      "difficulty": "Intermediate",
      "summary": "Build a minimal looping wind MetaSound from one Wind Sound Wave, add slow volume variation, place it in the level and balance it against gameplay audio.",
      "uses": [
        "MetaSound",
        "Ambient audio",
        "Randomisation",
        "DSP"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create the MetaSound Source",
          "where": "Content Drawer → Add (+) → Audio → MetaSound Source",
          "do": "Create MSS_Wind_Practice and open it in the MetaSound Editor. Keep the default mono/stereo output appropriate to the source asset.",
          "why": "A dedicated source gives graph-level control over playback/variation.",
          "see": "MSS_Wind_Practice exists and is open.",
          "check": "The MetaSound graph opens with On Play and audio Output nodes available.",
          "troubleshoot": [
            "If MetaSound Source is not visible, search the Add menu and confirm the project/editor supports MetaSounds."
          ],
          "visual": null
        },
        {
          "title": "Create/assign attenuation for a 3D wind zone if needed",
          "where": "MetaSound Editor toolbar → Source → Details → Attenuation Settings → create/select Sound Attenuation",
          "do": "For a local wind zone, create SA_Wind_Practice with a generous range (for example inner radius 400 cm, falloff 1600 cm). For truly global ambience, document why attenuation is not used.",
          "why": "Spatial setup should match whether the wind belongs to a location or the whole world.",
          "see": "Attenuation choice is explicit.",
          "check": "The source has deliberate 3D/global behaviour rather than an accidental default.",
          "troubleshoot": [
            "If this is a global weather bed, do not force 3D attenuation just because the menu exists."
          ],
          "visual": null
        },
        {
          "title": "Add one looping Wind Sound Wave",
          "where": "MetaSound graph → drag/search Wave Player node → select a wind Sound Wave → connect On Play/trigger and audio output according to node pins",
          "do": "Use one suitable wind Sound Wave as the stable base and enable looping on the Wave Player where available. Connect the player audio to the MetaSound output.",
          "why": "A recognisable source must play cleanly before procedural variation is added.",
          "see": "The base wind loops through the MetaSound output.",
          "check": "Auditioning MSS_Wind_Practice produces continuous wind without obvious start/stop clicks.",
          "troubleshoot": [
            "If it does not play, verify the Wave asset, trigger connection, looping and output channel connection before adding variation."
          ],
          "visual": null
        },
        {
          "title": "Add slow restrained loudness variation",
          "where": "MetaSound graph → add an LFO/slow modulation source and a Multiply/Gain path appropriate to the graph",
          "do": "Modulate output level slowly between 0.70 and 1.00, with one cycle lasting several seconds rather than a rapid wobble.",
          "why": "Slow variation reduces obvious loop repetition while preserving a coherent ambient bed.",
          "see": "Volume variation is noticeable only over time.",
          "check": "The wind gently swells/falls instead of pulsing rhythmically every fraction of a second.",
          "troubleshoot": [
            "If the wind sounds like a siren/tremolo, slow the modulation and narrow the range."
          ],
          "visual": null
        },
        {
          "title": "Place and listen while moving",
          "where": "Drag MSS_Wind_Practice into the level as Ambient Sound / Audio Component → Play",
          "do": "Walk through/around the intended wind area for at least 20 seconds. Listen for loop seams, abrupt attenuation and repetitive modulation.",
          "why": "Procedural ambience must be judged over time and movement, not one editor preview.",
          "see": "The MetaSound survives a real movement/listening test.",
          "check": "The wind changes slowly and transition/range behaviour matches the intended space.",
          "troubleshoot": [
            "If the variation becomes predictable, lengthen/randomise the cycle before adding more layers."
          ],
          "visual": null
        },
        {
          "title": "Mix it below important information",
          "where": "Play a scene containing footsteps/dialogue/gameplay cues",
          "do": "Lower MetaSound/actor volume until important cues remain intelligible. Then toggle wind off/on to confirm it adds atmosphere without owning the mix.",
          "why": "Ambience is successful when it supports the world without masking gameplay.",
          "see": "The final wind level has a purpose in the complete mix.",
          "check": "Important cues remain clear with wind enabled.",
          "troubleshoot": [
            "Do not compensate for loud wind by turning every other sound up; lower the ambience first."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Adding procedural nodes before the base Sound Wave loops correctly.",
        "Using fast/deep modulation that sounds like an effect rather than wind.",
        "Mixing wind in solo and leaving it too loud in gameplay."
      ],
      "makeItYours": [
        "Drive wind intensity from a gameplay/weather variable.",
        "Add a second surface-specific whistle/rattle layer."
      ],
      "worksWhen": [
        "The MetaSound loops one wind source reliably.",
        "Slow variation reduces obvious repetition.",
        "The wind is balanced below important gameplay audio."
      ],
      "icon": "≈",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-03-1920x1080.png",
          "caption": "Alan Wake 2 — Atmosphere + state change. Design ambience as layers that can enter/leave with game state.",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2",
          "kind": "reference"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — MetaSounds Quick Start (ambient wind)",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/metasounds-quick-start"
      },
      "prescriptive": true
    },
    {
      "id": "profile-fix-retest",
      "title": "Profile → Fix → Re-Test",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "25 min",
      "difficulty": "Intermediate",
      "summary": "Measure one repeatable gameplay view, identify whether the frame is mainly CPU- or GPU-limited, change one likely cause and repeat the same test.",
      "uses": [
        "Profiling",
        "Performance",
        "Iteration",
        "Evidence"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create a repeatable baseline",
          "where": "Play in Standalone/PIE using the same quality settings you will keep for the whole test",
          "do": "Choose a 10–20 second route or fixed camera in a representative busy area. Run it once to warm up, then open the console and use stat unit (and stat fps if useful). Capture the numbers/screenshot.",
          "why": "A repeatable baseline prevents “it feels faster” from replacing evidence.",
          "see": "The baseline includes Frame, Game, Draw and GPU timing from stat unit.",
          "check": "You have a BEFORE capture showing the same route/camera and frame timing.",
          "troubleshoot": [
            "Do not change resolution, scalability or window size between before and after."
          ],
          "visual": null
        },
        {
          "title": "Read the biggest timing category",
          "where": "Look at the stat unit overlay during the same route",
          "do": "Compare Game, Draw and GPU milliseconds. Treat the largest persistent value as your first investigation direction: Game/Draw suggests CPU-side work; GPU suggests rendering work.",
          "why": "You need a hypothesis before making changes.",
          "see": "One likely bottleneck category is named with evidence.",
          "check": "You can write “I am investigating CPU/Game, CPU/Draw or GPU because ___ ms is highest.”",
          "troubleshoot": [
            "Ignore one-frame spikes; look for the value that stays high through the representative section."
          ],
          "visual": null
        },
        {
          "title": "Inspect one likely cause",
          "where": "If GPU: use stat gpu / relevant View Mode. If CPU: use Unreal Insights or a known heavy gameplay/system area appropriate to the project",
          "do": "Choose one concrete suspect only — for example overlapping translucency, an expensive effect/light, too many repeated expensive operations, or a known tick-heavy Blueprint. Record why it matches the high category.",
          "why": "Profilers are useful when they narrow the problem to something you can actually change.",
          "see": "A single testable cause is selected.",
          "check": "You can name one asset/system/effect to alter, not just “the level is slow.”",
          "troubleshoot": [
            "If you cannot identify a cause, stop and gather better profiling evidence rather than randomly deleting content."
          ],
          "visual": null
        },
        {
          "title": "Make one controlled change",
          "where": "Edit only the selected suspect",
          "do": "Examples: reduce effect spawn/density, remove one unnecessary translucent layer, disable an unneeded Tick, simplify one heavy material feature or remove one overlapping dynamic light. Save the exact change.",
          "why": "Changing one variable makes the retest meaningful.",
          "see": "Only one major performance cause differs from BEFORE.",
          "check": "Everything else — route, settings and camera — remains the same.",
          "troubleshoot": [
            "Do not switch to Low scalability as the “fix”; that changes many variables at once."
          ],
          "visual": null
        },
        {
          "title": "Repeat the same measurement",
          "where": "Run the exact same 10–20 second route → stat unit",
          "do": "Capture AFTER using the same test conditions. Compare the relevant millisecond value, not only FPS.",
          "why": "Milliseconds show whether the targeted cost actually changed.",
          "see": "A matched BEFORE/AFTER timing pair exists.",
          "check": "You can state the before and after timing for the category you targeted.",
          "troubleshoot": [
            "If results vary heavily, run each version more than once and compare a representative value rather than the best single frame."
          ],
          "visual": null
        },
        {
          "title": "Keep or revert based on the trade-off",
          "where": "Return to normal gameplay view",
          "do": "Keep the change only if the measured improvement is useful and the visual/gameplay loss is acceptable. Otherwise revert and record what you learned.",
          "why": "Optimisation is a trade-off, not a contest to remove the most features.",
          "see": "The exercise ends with an evidence-based decision.",
          "check": "You can justify KEEP or REVERT in one sentence using both performance and quality.",
          "troubleshoot": [
            "A failed optimisation experiment is still useful if you measured and documented why it failed."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Changing quality settings between before and after.",
        "Using FPS alone without a repeatable test.",
        "Making several unrelated “optimisations” before re-measuring."
      ],
      "makeItYours": [
        "Repeat the loop for the next bottleneck.",
        "Compare two scalability targets."
      ],
      "worksWhen": [
        "A repeatable baseline exists.",
        "One bottleneck category and one cause are investigated.",
        "The same test is repeated and the change is kept/reverted using evidence."
      ],
      "icon": "↻",
      "featured": true,
      "referenceImages": [
        {
          "src": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ab2445934a3c76c839_control_pm_det_005.webp",
          "caption": "CONTROL — Strong read at a glance. Make the first three seconds of the scene readable.",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/unreal-insights-spike.webp",
          "caption": "Book reference — An Unreal Insights capture showing a performance spike and where to begin investigating it.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        },
        {
          "src": "assets/book/best-practices/shader-complexity-heatmap.webp",
          "caption": "Book reference — Shader Complexity view mode highlighting expensive materials and areas needing optimisation.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Real-time Rendering Optimisation",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine"
      },
      "prescriptive": true
    },
    {
      "id": "project-hygiene",
      "title": "Clean a UE Project for Another Developer",
      "category": "design-polish",
      "designModule": "polish",
      "duration": "30 min",
      "difficulty": "Beginner",
      "summary": "Clean a UE project safely inside the editor so another developer can find, move and understand content without broken references or mystery assets.",
      "uses": [
        "Asset management",
        "Naming",
        "Content Browser",
        "Team workflow"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Create a safe restore point first",
          "where": "Source control commit OR make an approved project backup before cleanup",
          "do": "Commit/backup the project and confirm it can be restored. Do not begin mass moves/renames on the only copy.",
          "why": "Asset organisation can touch many references; cleanup should be reversible.",
          "see": "The project can be returned to its pre-cleanup state.",
          "check": "You have a named restore point from before the cleanup.",
          "troubleshoot": [
            "If you have no approved backup/source-control route, stop before moving production assets."
          ],
          "visual": null
        },
        {
          "title": "Create one simple project-owned folder structure",
          "where": "Content Drawer → Content → New Folder",
          "do": "Create Content/Game (or your project-named root), then sensible child folders such as Maps, Blueprints, Meshes, Materials, Textures, Audio and UI. Keep Marketplace/third-party packs in their own vendor folders.",
          "why": "Separating project-owned content from imported packs makes searching and handover easier.",
          "see": "The root no longer contains a random mixture of project and imported assets.",
          "check": "A teammate can guess where a new project-owned asset should go.",
          "troubleshoot": [
            "Do not reorganise every third-party pack just to match your naming scheme; preserve vendor structure where useful."
          ],
          "visual": null
        },
        {
          "title": "Move and rename inside Unreal — not Windows Explorer",
          "where": "Content Drawer → select project-owned assets → Move Here / Rename",
          "do": "Move a small batch first. Rename mystery assets such as NewMaterial_23 or Cube4 to readable type/purpose names, for example M_WetConcrete or SM_Generator_A. Open one dependent level/Blueprint afterwards.",
          "why": "Unreal tracks asset references when moves/renames are performed through the editor.",
          "see": "One small batch proves the organisation process before larger moves.",
          "check": "The moved/renamed asset still appears correctly where it is referenced.",
          "troubleshoot": [
            "If references break, revert/restore before continuing with a larger batch."
          ],
          "visual": null
        },
        {
          "title": "Show and fix redirectors",
          "where": "Content Drawer → Filters → Other Filters → Show Redirectors (or Miscellaneous → Redirectors) → right-click relevant folder/redirector → Fix Up Redirectors",
          "do": "After moves/renames, expose redirectors and use Unreal’s Fix Up Redirectors command on the cleaned folder when it is safe to do so.",
          "why": "Redirectors preserve old references temporarily; fixing them completes the move/rename cleanup.",
          "see": "Old locations no longer contain unnecessary redirectors for the cleaned batch.",
          "check": "The redirector view is reduced/cleared and dependent assets still open.",
          "troubleshoot": [
            "Do not delete redirector files manually in Windows Explorer."
          ],
          "visual": null
        },
        {
          "title": "Check dependencies before deleting anything",
          "where": "Content Drawer → right-click suspicious asset → Reference Viewer / Size Map / relevant reference tools",
          "do": "For assets you think are unused, inspect references first. Move uncertain items to a clearly named _Review folder instead of deleting them immediately.",
          "why": "“I cannot see it in this level” does not prove an asset is unused elsewhere.",
          "see": "Deletion decisions are based on references, not guesswork.",
          "check": "Every deleted item has been checked, and uncertain content is quarantined rather than destroyed.",
          "troubleshoot": [
            "Be especially careful with assets loaded indirectly by data tables, soft references or runtime systems."
          ],
          "visual": null
        },
        {
          "title": "Run a teammate handover test",
          "where": "Give another student the project with no directions beyond the task",
          "do": "Ask them to find: the main playable map, the player Blueprint, one environment mesh and its material. Then ask them to rename/edit one safe test asset using your structure.",
          "why": "The real test of organisation is whether somebody else can navigate it without the original author narrating.",
          "see": "The project is understandable to a new developer.",
          "check": "They find the requested content quickly and can explain the folder/naming logic.",
          "troubleshoot": [
            "If they keep asking where things live, rename/restructure the confusing area rather than explaining it verbally."
          ],
          "visual": null
        }
      ],
      "mistakes": [
        "Moving/renaming production assets in Windows Explorer.",
        "Deleting assets because they look unused in one map.",
        "Mixing third-party pack content and project-owned work into one random root folder."
      ],
      "makeItYours": [
        "Create a team naming cheat sheet.",
        "Use Reference Viewer to map one important asset dependency chain."
      ],
      "worksWhen": [
        "A restore point exists before cleanup.",
        "Project-owned assets follow a predictable folder/naming structure.",
        "Redirectors/dependencies are handled safely and another student can navigate the project."
      ],
      "icon": "⌘",
      "featured": false,
      "referenceImages": [
        {
          "src": "https://drop-assets.ea.com/images/qKm8m5buUQRNr4WIsBTcd/2d8953c4fd3f1e4acd5a78bbc9a16b30/DEAD-SPACE_Media_SLIDE-02-USP-02.jpg",
          "caption": "Dead Space — Atmosphere + readability + performance. Every expensive effect must earn a player-facing job.",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "kind": "reference"
        },
        {
          "src": "assets/book/best-practices/content-browser-folders.webp",
          "caption": "Book reference — A readable folder structure makes assets findable and reduces production friction.",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference",
          "kind": "book"
        }
      ],
      "source": {
        "title": "Epic UE5.8 — Reference Viewer / Project Cleanup",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/reference-viewer-in-unreal-engine"
      },
      "prescriptive": true
    }
  ],
  "resourceCategories": [
    {
      "id": "assets",
      "title": "Build fast",
      "icon": "⬢",
      "kicker": "FREE ASSETS • MATERIALS • PLACEHOLDERS",
      "description": "Get something readable into Unreal quickly so the design lesson stays about design."
    },
    {
      "id": "audio",
      "title": "Sound library",
      "icon": "♪",
      "kicker": "SFX • AMBIENCE • AUDIO",
      "description": "Find sounds you can actually use, then check the licence before they enter a submitted project."
    },
    {
      "id": "study",
      "title": "Study games",
      "icon": "⌖",
      "kicker": "LEVELS • UI • DESIGN REFERENCE",
      "description": "Pull games apart, inspect spaces and compare how shipped work solves the same design problem."
    },
    {
      "id": "professional",
      "title": "Hear the professionals",
      "icon": "▶",
      "kicker": "DOCUMENTARIES • TALKS • POSTMORTEMS",
      "description": "Go beyond screenshots and hear developers explain constraints, failures and decisions in their own words."
    },
    {
      "id": "engine",
      "title": "Engine + college reference",
      "icon": "U",
      "kicker": "UE5.8 • LICENSED REFERENCE",
      "description": "Use current Epic documentation for engine truth and the college library for deeper production reading."
    }
  ]
};
