window.UE5_DESIGN_DATA = {
  "version": "3.35.1",
  "buildDate": "29 Aug 2026",
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
          "game": "INSIDE",
          "image": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "lens": "Contrast + route readability",
          "notice": "The player is tiny, but the playable route is readable because the brightest ground plane and strongest silhouette carry the eye forward.",
          "steal": "Make the valid route easier to read than the background before you add UI.",
          "task": "Cover the character with your hand. Can you still predict the route? Mark the three strongest spatial cues."
        },
        {
          "game": "CONTROL",
          "image": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ad955ffc88abcd7409_CONTROL_Blast_Furnace_169.webp",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "lens": "Scale + landmarks",
          "notice": "Huge architectural masses, repeated structural rhythm and one dominant destination make the Oldest House memorable even when routes branch.",
          "steal": "Use one shape or landmark that survives from several viewpoints.",
          "task": "Sketch the scene as only five big shapes. Circle the one you would navigate toward."
        },
        {
          "game": "Horizon Forbidden West",
          "image": "https://www.guerrilla-games.com/media/News/HFW_SCREEN_LEGAL_GLIDER_4K_RGB_20210512.webp",
          "sourceUrl": "https://www.guerrilla-games.com/read/15-minutes-of-new-gameplay-for-horizon-forbidden-west",
          "sourceTitle": "Guerrilla — Horizon Forbidden West",
          "lens": "Traversal affordance",
          "notice": "Terrain, climbable structures and height changes do more than look natural: they advertise possible movement and reward.",
          "steal": "Shape terrain around traversal decisions, not just pretty silhouettes.",
          "task": "Draw two possible routes through the image: safe and fast. What makes each route readable?"
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
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "lens": "Lived-in world + threat",
          "notice": "Industrial structure, emergency lighting, damage and clutter all reinforce the fiction of a working ship that has gone catastrophically wrong.",
          "steal": "Every prop cluster should imply a job, routine or event.",
          "task": "List five visible clues and separate “normal ship life” from “something went wrong”."
        },
        {
          "game": "Horizon Forbidden West",
          "image": "https://www.guerrilla-games.com/media/Horizon_FW_Artblast2560x854.png",
          "sourceUrl": "https://www.guerrilla-games.com/read/horizon-forbidden-west-art-blast-on-artstation",
          "sourceTitle": "Guerrilla — Horizon Art Blast",
          "lens": "Reference + visual language",
          "notice": "Distinct cultures and locations are built from repeated shape, material and prop families rather than random asset variety.",
          "steal": "Choose a small visual language and repeat it intentionally.",
          "task": "Invent a 4-item visual-language rule set for a tribe, faction or workplace."
        },
        {
          "game": "CONTROL",
          "image": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ab2445934a3c76c839_control_pm_det_005.webp",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "lens": "Repetition + interruption",
          "notice": "Office repetition establishes normality; unusual geometry, debris or colour breaks that pattern and becomes meaningful.",
          "steal": "Repetition makes the exception readable.",
          "task": "Find one repeated element and one deliberate break. What does the break communicate?"
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
          "game": "Death Stranding",
          "image": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot6.jpg",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "lens": "Surface identity",
          "notice": "Rock, moss, metal ladder and fabric remain visually distinct even under subdued natural light because their roughness, normal detail and value ranges differ.",
          "steal": "Make materials readable without relying on saturated colour.",
          "task": "Name four materials in the image and describe the roughness difference you expect between them."
        },
        {
          "game": "Dead Space",
          "image": "https://drop-assets.ea.com/images/qKm8m5buUQRNr4WIsBTcd/2d8953c4fd3f1e4acd5a78bbc9a16b30/DEAD-SPACE_Media_SLIDE-02-USP-02.jpg",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "lens": "Wear + material story",
          "notice": "Industrial metals, grime, fog and damaged surfaces work together to communicate age, maintenance failure and danger.",
          "steal": "Wear belongs where use, impact, water or neglect would actually cause it.",
          "task": "Find three wear zones and propose a physical cause for each."
        },
        {
          "game": "CONTROL",
          "image": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ad955ffc88abcd7409_CONTROL_Blast_Furnace_169.webp",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "lens": "Material families",
          "notice": "Concrete, painted metal and hot industrial areas repeat consistently enough that the player learns the building’s material vocabulary.",
          "steal": "Build a small reusable surface family rather than 30 unrelated materials.",
          "task": "Create a three-material palette for a location and write one rule for when each appears."
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
          "type": "video",
          "title": "How Supergiant Creates Art & Music for Hades",
          "source": "Noclip • Supergiant Games",
          "url": "https://www.youtube.com/watch?v=oQPk9J7spw0",
          "youtubeId": "oQPk9J7spw0",
          "duration": "29 min",
          "focus": "Art direction under constant iteration — how a strong style survives production changes rather than depending on one perfect asset.",
          "watchFor": "Look for decisions that create consistency across many different pieces of content.",
          "task": "Define three surface rules for your own project — e.g. roughness range, wear language, colour family — and apply them to three unrelated assets."
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
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2 Photo Mode",
          "lens": "Colour + motivated emphasis",
          "notice": "The photo-mode lighting tools make the design decision obvious: colour, intensity, source type and field of view can completely rewrite the mood of the same geometry.",
          "steal": "Treat light colour/intensity as a deliberate variable, not a vibe slider.",
          "task": "Predict how the shot changes if the red light becomes white but every other setting stays fixed."
        },
        {
          "game": "INSIDE",
          "image": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "lens": "Silhouette + negative space",
          "notice": "Large dark masses simplify the frame while a controlled light pool separates the player and route.",
          "steal": "Darkness is useful only when the important information remains readable.",
          "task": "Identify the minimum area that must stay lit for this scene to remain playable."
        },
        {
          "game": "Dead Space",
          "image": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "lens": "Safe pool → dangerous shadow",
          "notice": "Motive explicitly uses light/shadow, dynamic failures and limited lit zones to control tension on the Ishimura.",
          "steal": "Lighting can create a rhythm of safety and uncertainty.",
          "task": "Mark where you would slow down as a player and explain what the light is doing to cause it."
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
          "game": "Death Stranding",
          "image": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot3.jpg",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "lens": "Terrain as mechanic",
          "notice": "Slope, rock density, river placement and distant relief make traversal itself the challenge. The landscape is not background; it is the system.",
          "steal": "Give terrain meaningful travel costs and choices.",
          "task": "Draw the fastest, safest and most scenic routes from foreground to the distant ridge."
        },
        {
          "game": "Death Stranding",
          "image": "https://www.kojimaproductions.jp/sites/default/files/2021-08/gr.DeathStranding_GameScreenshot5.jpg",
          "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-ps4",
          "sourceTitle": "Kojima Productions — Death Stranding",
          "lens": "Silhouette + difficulty",
          "notice": "The mountain silhouette communicates destination and danger before the player knows the exact route.",
          "steal": "Let large terrain forms preview the difficulty ahead.",
          "task": "Reduce the image to black/white silhouette. What still communicates the challenge?"
        },
        {
          "game": "ELDEN RING",
          "image": "https://p325k7wa.twic.pics/high/elden-ring/elden-ring/02-screenshots/ELDENRING_01_4K.jpg?twic=v1%2Fcover%3D2160%2Fstep%3D10%2Fquality%3D80%2Foutput%3Dpreview",
          "sourceUrl": "https://en.bandainamcoent.eu/elden-ring/elden-ring/media",
          "sourceTitle": "Bandai Namco — ELDEN RING media gallery",
          "lens": "Distant attraction",
          "notice": "Large landmarks and layered terrain create long-term navigation targets while allowing local discovery.",
          "steal": "Give players something memorable to orient around beyond the next 20 metres.",
          "task": "Identify a long-term landmark, a mid-distance landmark and a local cue."
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
          "game": "Alan Wake 2",
          "image": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-02-clean-1300x650.png",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2 Photo Mode",
          "lens": "Focal length + framing",
          "notice": "Photo-mode controls expose the same decisions a cinematic designer makes: lens, focus, exposure, framing and whether a character is even present.",
          "steal": "Choose the camera based on the information/emotion the shot must deliver.",
          "task": "Crop the image three ways: establishing, character, clue. What changes in meaning?"
        },
        {
          "game": "Horizon Forbidden West",
          "image": "https://www.guerrilla-games.com/media/News/HFW_SCREEN_LEGAL_GLIDER_4K_RGB_20210512.webp",
          "sourceUrl": "https://www.guerrilla-games.com/read/15-minutes-of-new-gameplay-for-horizon-forbidden-west",
          "sourceTitle": "Guerrilla — Horizon Forbidden West",
          "lens": "Action geography",
          "notice": "Wide framing establishes height, route and danger before tighter action. The player needs spatial understanding before spectacle.",
          "steal": "Establish geography before rapid cuts or close action.",
          "task": "Write a three-shot sequence: establish location → reveal threat → return to player goal."
        },
        {
          "game": "CONTROL",
          "image": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4abe40138d6dc791368_control_pm_det_027.webp",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "lens": "Architecture as frame",
          "notice": "Strong architectural lines and scale can frame characters and reveal spaces without requiring complicated camera movement.",
          "steal": "Let the environment compose the shot for you.",
          "task": "Choose a static camera position that tells the same story as a moving camera. What do you gain/lose?"
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
          "game": "Dead Space",
          "image": "https://drop-assets.ea.com/images/5Cr5lTNDijF2pzIopPZduH/2009d571be74052edf094ce0a992253f/ds-gp-hallway-04-no-watermark.jpg",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "lens": "Occlusion + projected sound",
          "notice": "Motive’s audio work explicitly considers material occlusion and projecting sound down hallways, turning unseen space into readable threat.",
          "steal": "Use sound to tell the player about spaces outside the camera.",
          "task": "Place three imagined sound sources in this corridor: machine, threat, safe destination. Explain how each should change with distance."
        },
        {
          "game": "INSIDE",
          "image": "https://playdead.com/css/img/inside/screenshots/INSIDE_01.jpg",
          "sourceUrl": "https://playdead.com/games/inside/",
          "sourceTitle": "Playdead — INSIDE",
          "lens": "Sparse sound + focus",
          "notice": "Minimal visual information pairs naturally with selective sound; when the mix is sparse, one mechanical or environmental event can dominate attention.",
          "steal": "Do not fill every second. Leave room for important sounds to become events.",
          "task": "List three moments where silence would make the next sound stronger."
        },
        {
          "game": "Alan Wake 2",
          "image": "https://www.alanwake.com/wp-content/uploads/2024/06/aw2-photo-mode-03-1920x1080.png",
          "sourceUrl": "https://www.alanwake.com/story/unleash-your-creativity-with-alan-wake-2s-new-photo-mode/",
          "sourceTitle": "Remedy — Alan Wake 2",
          "lens": "Atmosphere + state change",
          "notice": "Strong visual states suggest matching audio states: rain, electrical hum, distant city noise, threat layers and sudden absence can all signal a change before gameplay explains it.",
          "steal": "Design ambience as layers that can enter/leave with game state.",
          "task": "Write a four-layer ambience stack and decide which layer disappears when danger begins."
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
          "game": "Horizon Forbidden West",
          "image": "https://www.guerrilla-games.com/media/Horizon_FW_Artblast2560x854.png",
          "sourceUrl": "https://www.guerrilla-games.com/read/horizon-forbidden-west-art-blast-on-artstation",
          "sourceTitle": "Guerrilla — Horizon Art Blast",
          "lens": "Production finish",
          "notice": "Final quality comes from many disciplines resolving around the same visual language and player experience, not one magic “polish” effect.",
          "steal": "Polish the hierarchy between systems, art, lighting and presentation — not individual details in isolation.",
          "task": "Choose the three things in the image doing the most work. What would you protect if you had to cut 50% of the detail?"
        },
        {
          "game": "CONTROL",
          "image": "https://cdn.prod.website-files.com/64630b03551142e3347ae3da/6492c4ab2445934a3c76c839_control_pm_det_005.webp",
          "sourceUrl": "https://www.remedygames.com/games/control",
          "sourceTitle": "Remedy — CONTROL",
          "lens": "Strong read at a glance",
          "notice": "A memorable scene can still be built from controlled values, repeated forms and one clear interruption. More detail is not automatically more finished.",
          "steal": "Make the first three seconds of the scene readable.",
          "task": "Write the first three things you notice, in order. Is that the order the designer probably wants?"
        },
        {
          "game": "Dead Space",
          "image": "https://drop-assets.ea.com/images/qKm8m5buUQRNr4WIsBTcd/2d8953c4fd3f1e4acd5a78bbc9a16b30/DEAD-SPACE_Media_SLIDE-02-USP-02.jpg",
          "sourceUrl": "https://www.ea.com/games/dead-space/dead-space",
          "sourceTitle": "EA / Motive — Dead Space",
          "lens": "Atmosphere + readability + performance",
          "notice": "Fog, lighting, VFX, materials and sound all add atmosphere, but the player still needs readable navigation and threat information.",
          "steal": "Every expensive effect must earn a player-facing job.",
          "task": "Pick one effect you would reduce for performance. What design information must remain intact?"
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
        {
          "title": "Place the player first",
          "where": "Level Editor → Play → test from the real player camera; do not judge this step only from the editor fly camera",
          "do": "Start from the Third Person template and keep the playable character visible while you build.",
          "why": "The character is your measuring stick; a room that looks good from editor camera may feel huge or cramped in play.",
          "see": null,
          "check": "Press Play and check doors, ceiling height and movement space from player height.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/a015e4ef-6cd0-4923-ad91-c674259d3ce5?resizing_type=fit",
            "caption": "Official UE5.8 Designer track showing a blockout wall selected and moved in the viewport.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-01-project-setup-and-level-blockout-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Build with primitives",
          "where": "Level Editor → Add (+) → Shapes → Cube / primitives → duplicate and resize in the Viewport",
          "do": "Use cubes for floor, walls, cover and door openings. Duplicate rather than modelling detail.",
          "why": "Blockout should be fast to change. Detail makes students emotionally attached to bad layouts.",
          "see": null,
          "check": "You can reshape the room in seconds without replacing art.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/de68ab89-8703-46a2-869a-39e5801e9e97?resizing_type=fit",
            "caption": "Official UE5.8 Designer track using Alt-drag to duplicate a blockout wall.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-01-project-setup-and-level-blockout-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Check movement width",
          "where": "Level Editor → Play → test from the real player camera; do not judge this step only from the editor fly camera",
          "do": "Run, turn and jump through every opening you expect the player to use.",
          "why": "Playable metrics matter more than architectural realism in early design.",
          "see": null,
          "check": "No doorway or route requires awkward camera wrestling.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/aad4f774-14a4-4903-afa2-b4a52444e8bd?resizing_type=fit",
            "caption": "Official UE5.8 Designer track showing blockout geometry snapping to the editor grid.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-01-project-setup-and-level-blockout-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Create one focal area",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Use one larger opening, raised area or contrasting block to indicate where attention should go.",
          "why": "Spatial hierarchy works even before lighting and textures.",
          "see": null,
          "check": "A new player can point to the most important part of the room.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        }
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
        {
          "title": "Make metric blocks",
          "where": "Level Editor → Add (+) → Shapes → Cube / primitives → duplicate and resize in the Viewport",
          "do": "Create simple labelled cubes for common widths/heights: door, corridor, waist cover and full cover.",
          "why": "Reusable metrics prevent every room from inventing a different human scale.",
          "see": null,
          "check": "Placed blocks look consistent beside the character.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/a015e4ef-6cd0-4923-ad91-c674259d3ce5?resizing_type=fit",
            "caption": "Official UE5.8 Designer track showing a blockout wall selected and moved in the viewport.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-01-project-setup-and-level-blockout-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Walk the kit",
          "where": "Level Editor → Play → test from the real player camera; do not judge this step only from the editor fly camera",
          "do": "Test each metric with the real character and camera.",
          "why": "Camera collision and shoulder width can make technically passable spaces feel bad.",
          "see": null,
          "check": "Movement never clips or fights the camera.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        },
        {
          "title": "Save as a blockout kit",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Keep the metric actors in a small test level or folder for reuse.",
          "why": "Consistency speeds later design and stops guesswork.",
          "see": null,
          "check": "You can drag a known-good door/corridor reference into any new level.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Break one rule deliberately",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Create one oversized or undersized space for emotional effect.",
          "why": "Metrics are defaults, not prison bars; breaking scale should communicate something.",
          "see": null,
          "check": "The altered scale feels intentional rather than accidental.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        }
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
        {
          "title": "Choose the target",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Pick exactly one thing the player should notice first: exit, machine, tower, enemy route or landmark.",
          "why": "A focal point cannot be 'everything'.",
          "see": null,
          "check": "You can name the single intended target.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Simplify around it",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Reduce competing props/bright materials around the target.",
          "why": "Contrast only works if surrounding information is quieter.",
          "see": null,
          "check": "The eye lands on the target more quickly.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Frame it",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Use doorways, beams, walls or terrain edges to create lines that point toward the target.",
          "why": "Architecture can aim attention without UI.",
          "see": null,
          "check": "From the main approach, surrounding geometry frames the target.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Add restrained contrast",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Use a value, colour or light contrast to strengthen what geometry already communicates.",
          "why": "Lighting should reinforce layout, not rescue it.",
          "see": null,
          "check": "Turning the light off still leaves some compositional guidance.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Blind test",
          "where": "Level Editor → Play → test from the real player camera; do not judge this step only from the editor fly camera",
          "do": "Show the frame to another student for two seconds and ask what they noticed first.",
          "why": "Fast perception testing catches clutter immediately.",
          "see": null,
          "check": "Most testers name the intended target.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Mark the decision point",
          "where": "Level Editor → move to the exact player decision point → Play or Pilot the camera → capture the view",
          "do": "Stand where the player must choose and take a screenshot.",
          "why": "Design decisions should be judged from the actual decision location.",
          "see": null,
          "check": "You know exactly what information the player sees.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Strengthen the intended route",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Open the silhouette, show more depth, use a light pool or continue a recognisable floor/prop pattern.",
          "why": "Humans follow continuity and visible opportunity.",
          "see": null,
          "check": "The route looks traversable without text.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Quiet false routes",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Darken, narrow, close or visually terminate routes that are not currently valid.",
          "why": "False affordances waste player attention.",
          "see": null,
          "check": "Blocked areas read as blocked before collision is hit.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Add a landmark beyond the route",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Show a distinctive object or shape that the player can move toward.",
          "why": "Landmarks give direction after the immediate doorway is passed.",
          "see": null,
          "check": "The landmark disappears/reappears in useful places.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Watch, don't tell",
          "where": "Level Editor → Play → test from the real player camera; do not judge this step only from the editor fly camera",
          "do": "Observe another player and do not explain the goal.",
          "why": "The only honest route test is one where the designer stays quiet.",
          "see": null,
          "check": "The player chooses the intended route or reveals where communication failed.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        }
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
        {
          "title": "Protect the blockout",
          "where": "File → Save Current Level As (or duplicate the blockout map) before the dressing pass",
          "do": "Duplicate/save the clean blockout before dressing.",
          "why": "You need a comparison and an escape route if dressing damages gameplay.",
          "see": null,
          "check": "A clean version still exists.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Big forms first",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Place furniture, shelving, machines or major structural pieces.",
          "why": "Large props define use and composition; tiny props cannot fix empty structure.",
          "see": null,
          "check": "The room reads at thumbnail size.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Medium props second",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Add chairs, boxes, lamps, tools or repeated functional groups.",
          "why": "Medium forms connect architecture to human use.",
          "see": null,
          "check": "There are clear prop clusters rather than even scatter.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Small details last",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Add a small number of papers, cables, cups, debris or personal details where story requires them.",
          "why": "Small props are punctuation, not the sentence.",
          "see": null,
          "check": "Details reward close viewing without filling every surface.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Delete a pass",
          "where": "Level Editor → Play → inspect the dressed space from normal movement routes before deciding what stays",
          "do": "Remove anything blocking movement, silhouettes or the focal point.",
          "why": "Professional dressing includes subtraction.",
          "see": null,
          "check": "The final room is clearer after deleting props.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        }
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
        {
          "title": "Choose an action",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Decide what happened here: someone repaired equipment, ate lunch, packed boxes or fled.",
          "why": "Props become meaningful when they relate to behaviour.",
          "see": null,
          "check": "You can describe the action in one sentence.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Place the anchor",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Put the largest object first: desk, machine, crate stack or workbench.",
          "why": "Clusters need a visual anchor.",
          "see": null,
          "check": "The grouping has one dominant mass.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Add supporting objects",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Place only items that support the action and vary rotation/spacing naturally.",
          "why": "Related objects imply use and history.",
          "see": null,
          "check": "Each prop has a reason to be there.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Leave breathing room",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Keep empty space around the cluster.",
          "why": "Negative space helps the cluster read as one idea.",
          "see": null,
          "check": "The group is readable from several metres away.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        }
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
        {
          "title": "Choose a reason",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Pick a decal that has a cause: leak under pipe, dirt near doorway, warning sign, impact mark.",
          "why": "Wear tells history when cause and location agree.",
          "see": null,
          "check": "You can explain why the decal exists.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/afb7b7ec-399c-4263-90b8-beaad425f190/decal-properties.png",
            "caption": "Official UE5.8 Decal Material properties. Set Material Domain to Deferred Decal and use a supported blend mode.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/decal-materials-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Create/place the Decal Actor",
          "where": "Content Drawer → choose/create a decal material → Level Editor → Add (+) / Place Actors → Decal Actor → Details",
          "do": "Use a decal material or free decal asset and place a Decal Actor against the surface.",
          "why": "Decals add local variation without unique texture sets.",
          "see": null,
          "check": "The decal projects only where intended.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": [
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/5e7606a6-97ae-4ffd-b33c-294d283984b6/create-decal-actor.png",
              "caption": "Official UE5.8 Decal Actor creation/placement workflow.",
              "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/decal-materials-in-unreal-engine",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            },
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/78f15fb2-4635-45f3-8c3e-2b1bda184f5f/decal-actor-direction.png",
              "caption": "Official UE5.8 Decal Actor projection direction — useful when orienting wear/stains onto a surface.",
              "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/decal-materials-in-unreal-engine",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            }
          ]
        },
        {
          "title": "Match scale/orientation",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Resize the projection box and align it to the surface.",
          "why": "Wrong-scale dirt instantly breaks believability.",
          "see": null,
          "check": "Edges and direction make physical sense.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e13b9953-865e-4457-947c-d3e1e6409afe/decal-actor-properties.png",
            "caption": "Official UE5.8 Decal Actor properties for sizing and controlling the projected decal.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/decal-materials-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Control repetition",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Rotate, crop, tint or use a few variants rather than stamping the same mark everywhere.",
          "why": "Repeated identical damage exposes the asset library.",
          "see": null,
          "check": "You cannot immediately spot a tiled stamp pattern.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Read at game distance",
          "where": "Level Editor → Play → inspect the dressed space from normal movement routes before deciding what stays",
          "do": "Walk away and judge whether the detail still contributes.",
          "why": "Not every decal needs to be visible close-up only.",
          "see": null,
          "check": "Important signage/wear supports the scene at normal play distance.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        }
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
        {
          "title": "Inspect the kit",
          "where": "Content Drawer → open the modular-kit folder → inspect wall/corner/floor/doorway/trim assets before placing anything",
          "do": "Identify wall, corner, floor, doorway and trim pieces before building.",
          "why": "Knowing the grammar prevents forcing pieces together badly.",
          "see": null,
          "check": "You can name the core pieces.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Set grid snap",
          "where": "Level Editor toolbar → Translation Grid Snap dropdown → choose a value that matches the modular kit",
          "do": "Choose a grid size that matches the kit dimensions.",
          "why": "Modular pieces only stay clean if placement shares a consistent unit.",
          "see": null,
          "check": "Edges meet without tiny gaps.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/aad4f774-14a4-4903-afa2-b4a52444e8bd?resizing_type=fit",
            "caption": "Official UE5.8 Designer track showing blockout geometry snapping to the editor grid.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-01-project-setup-and-level-blockout-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Build one clean module",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Make a short corridor/room using only core pieces.",
          "why": "Solve alignment before creating a whole level.",
          "see": null,
          "check": "Corners and floors join correctly.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Create variation with dressing",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Reuse the same architecture but change props, materials, decals and light.",
          "why": "Modularity saves modelling effort while art direction creates identity.",
          "see": null,
          "check": "Two spaces feel different without unique walls everywhere.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Fix obvious repetition",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Break long repeating seams with trims, pillars, recesses or purposeful variation.",
          "why": "Repetition is a design problem, not a reason to abandon modularity.",
          "see": null,
          "check": "The kit stays reusable but the level avoids copy-paste rhythm.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        }
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
        {
          "title": "Create M_Surface",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Create a Material asset and open the Material Editor.",
          "why": "A clean named material gives you a controlled test surface.",
          "see": null,
          "check": "The graph opens with the Main Material node.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b61c2e7b-8c11-4b70-b966-97b91ec1f4ef/materialeditorui.png",
            "caption": "Official UE5.8 Material Editor interface. Build and connect surface inputs in the Material Graph, then preview the result.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-material-editor-ui",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Add colour/texture",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Connect a colour or texture to Base Color.",
          "why": "Base Color describes the visible surface colour before lighting.",
          "see": null,
          "check": "The preview changes without emissive glow.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/e945d5c4-f29b-4a31-9c0b-ecb45e655a7a?resizing_type=fit",
            "caption": "Official UE5.8 material graph with Base Color and Normal texture samples connected.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/artist-03-create-materials-and-material-instances",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Set roughness",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Use a scalar around 0.2–0.9 and watch highlight width.",
          "why": "Roughness controls how sharp or broad reflections are.",
          "see": null,
          "check": "Low values look glossier; high values look matte.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/fd5c0502-5c28-44b2-b7ac-361c773bc2fe?resizing_type=fit",
            "caption": "Official UE5.8 PBR graph showing Metallic and Roughness values connected to the material.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/artist-03-create-materials-and-material-instances",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Set metallic correctly",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Use 0 for non-metals and 1 for actual metal as a beginner rule.",
          "why": "Metallic is not a shininess slider.",
          "see": null,
          "check": "Plastic/concrete stay at 0; steel can be 1.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/fd5c0502-5c28-44b2-b7ac-361c773bc2fe?resizing_type=fit",
            "caption": "Official UE5.8 PBR graph showing Metallic and Roughness values connected to the material.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/artist-03-create-materials-and-material-instances",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Add normal detail",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Connect a normal texture if available and inspect under moving light.",
          "why": "Normal detail changes how light reacts without adding geometry.",
          "see": null,
          "check": "Surface detail appears in highlights while silhouette stays unchanged.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/e945d5c4-f29b-4a31-9c0b-ecb45e655a7a?resizing_type=fit",
            "caption": "Official UE5.8 material graph with Base Color and Normal texture samples connected.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/artist-03-create-materials-and-material-instances",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        }
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
        {
          "title": "Parameterise colour",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Convert the Base Color value to a Vector Parameter named Tint.",
          "why": "Parameters expose artist-friendly controls without editing the graph.",
          "see": null,
          "check": "Tint appears in a Material Instance.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/32410e7c-51a7-4151-bd40-af08757b2f3f?resizing_type=fit",
            "caption": "Official UE5.8 Artist tutorial: parameterised parent Material graph.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/artist-03-create-materials-and-material-instances",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Parameterise roughness",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Create a Scalar Parameter named Roughness with a sensible default.",
          "why": "Surface finish is a common variation control.",
          "see": null,
          "check": "You can tune roughness in the instance.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/df6153e2-eb41-4a12-bc78-2f3eee3b5ae9?resizing_type=fit",
            "caption": "Official UE5.8 Artist tutorial: Roughness exposed as a parameter. Exact Hub naming stays in the step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/artist-03-create-materials-and-material-instances",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Create MI_Surface_A",
          "where": "Content Drawer → right-click the parent Material → Create Material Instance → open the Material Instance Details",
          "do": "Right-click the parent material and create a Material Instance.",
          "why": "Instances inherit the compiled parent logic.",
          "see": null,
          "check": "The instance opens with parameter overrides.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/de909896-ce3a-4382-a62b-e4d4d445157f?resizing_type=fit",
            "caption": "Official UE5.8 Material Instance Editor with exposed parent parameters.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/artist-03-create-materials-and-material-instances",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Make variations",
          "where": "Content Drawer → right-click the parent Material → Create Material Instance → open the Material Instance Details",
          "do": "Create 3 instances with different tint/roughness values.",
          "why": "One parent can provide a consistent material family.",
          "see": null,
          "check": "Changes to the parent propagate to all instances.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/219987ae-1099-4783-b0fa-749cda6c7281/override-params.png",
            "caption": "Official UE5.8 Material Instance parameter overrides. Tick a parameter before changing its instance value.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-material-instance-editor-ui",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Name by purpose",
          "where": "Content Drawer → right-click the parent Material → Create Material Instance → open the Material Instance Details",
          "do": "Use names such as MI_Wall_Green rather than MI_02_finalFINAL.",
          "why": "Asset naming is part of maintainability.",
          "see": null,
          "check": "Another student can identify each instance without opening it.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": null
        }
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
        {
          "title": "Duplicate as an instance",
          "where": "Content Drawer → right-click the parent Material → Create Material Instance → open the Material Instance Details",
          "do": "Start from an existing believable dry material and create a wet Material Instance where possible.",
          "why": "Wetness should be a variation of the same surface, not a totally unrelated shader.",
          "see": null,
          "check": "Dry and wet versions share the parent.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/990457fc-5f41-4d37-87b4-ce7abf387b7c/details-panel.png",
            "caption": "Official UE5.8 Material Instance Editor Details panel. Exposed parent parameters appear here for fast variation.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-material-instance-editor-ui",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Lower roughness",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Reduce roughness enough to create broader visible reflections but avoid perfect mirror values.",
          "why": "Water smooths micro-surface response.",
          "see": null,
          "check": "Highlights become stronger/sharper.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/219987ae-1099-4783-b0fa-749cda6c7281/override-params.png",
            "caption": "Official UE5.8 Material Instance parameter overrides. Tick a parameter before changing its instance value.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-material-instance-editor-ui",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Darken slightly",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Reduce/tint Base Color modestly rather than making it black.",
          "why": "Many porous surfaces appear darker when wet.",
          "see": null,
          "check": "Surface still retains original material identity.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/95d351aa-c3af-4724-a8ad-8dd6cdb540ae?resizing_type=fit",
            "caption": "Official UE5.8 Artist tutorial: colour Lerp for dry/wet material variation.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/artist-04-expanded-material-instances",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Keep variation",
          "where": "Content Drawer → right-click the parent Material → Create Material Instance → open the Material Instance Details",
          "do": "Use a mask/Lerp if only patches should be wet.",
          "why": "Patchy wetness feels more believable than a uniformly lacquered world.",
          "see": null,
          "check": "Dry and wet regions blend cleanly.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/b2600807-eca4-4303-b8dd-07ed36896437?resizing_type=fit",
            "caption": "Official UE5.8 Artist tutorial: scalar Lerp used to blend dry/wet roughness. A mask can drive the same Alpha for patchy wetness.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/artist-04-expanded-material-instances",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Test under grazing light",
          "where": "Level Editor → place the material on a test mesh → use a stable light/camera angle → Play or orbit the camera to inspect reflections",
          "do": "Move a light/camera angle so reflections reveal the roughness change.",
          "why": "Wetness is primarily read through light response.",
          "see": null,
          "check": "Wet areas are obvious from reflection behaviour, not just darker colour.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/6ddb623e-bada-4dbe-9732-918f24a9993c?resizing_type=fit",
            "caption": "Official UE5.8 Artist tutorial: completed Blueprint/Timeline-driven wet material wiring.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/artist-04-expanded-material-instances",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        }
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
        {
          "title": "Create a screen mask",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Use a texture or simple colour mask for the parts that should emit.",
          "why": "A mask lets the frame stay non-emissive.",
          "see": null,
          "check": "Only the screen/logo region is selected.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/5f8e10e1-9e33-466f-a916-1e87349d2cbc/masked-emissive-material-nodes.png",
            "caption": "Official UE5.8 masked emissive graph: use a mask so only the intended pixels emit.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-the-emissive-material-input-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Multiply colour by intensity",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Multiply an emissive colour by a Scalar Parameter such as EmissiveStrength.",
          "why": "Intensity needs tunable control.",
          "see": null,
          "check": "The instance exposes brightness.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f23f8b0c-36d5-4051-b41b-6975727f8523/fully-emissive-nodes.png",
            "caption": "Official UE5.8 emissive graph using tunable colour/intensity controls.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-the-emissive-material-input-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Connect Emissive Color",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Feed the result to Emissive Color while keeping Base Color sensible.",
          "why": "Emissive adds self-illumination behaviour.",
          "see": null,
          "check": "The screen stays visible in low light.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/4598980d-92bf-4ded-a2f1-b01a8963dff7/simple-emissive-material.png",
            "caption": "Official UE5.8 material with Emissive Color connected. Keep the Hub Base Color and exposure guidance as written.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-the-emissive-material-input-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Tune bloom/exposure",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Raise intensity gradually and inspect with your scene's exposure settings.",
          "why": "Blown-out bloom destroys UI/sign detail.",
          "see": null,
          "check": "Glow is visible but the graphic remains readable.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": null
        },
        {
          "title": "Create instances",
          "where": "Content Drawer → right-click the parent Material → Create Material Instance → open the Material Instance Details",
          "do": "Make red/green/blue or ON/OFF variants from the same parent.",
          "why": "Instances make interactive signage easy to art-direct.",
          "see": null,
          "check": "Variants share one graph.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/c03fe625-433a-4e7d-9b17-c60379fea96f/create-material-instance.png",
            "caption": "Official UE5.8 Create Material Instance action for making reusable emissive variants.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/using-the-emissive-material-input-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        }
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
        {
          "title": "Lock exposure",
          "where": "Level Editor → Post Process Volume → Details → Exposure → stabilise the comparison before adjusting lights",
          "do": "Add/adjust a Post Process Volume and keep exposure stable while learning.",
          "why": "Auto exposure can hide whether your lighting actually works.",
          "see": null,
          "check": "Brightness no longer pumps dramatically when you turn.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Choose the key",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Place one main motivated light from a window, lamp or ceiling source.",
          "why": "A dominant light gives form and direction.",
          "see": null,
          "check": "The room has a clear light direction.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Add gentle fill",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Use skylight/bounce-like supporting light to prevent important areas crushing to black.",
          "why": "Fill protects readability without flattening contrast.",
          "see": null,
          "check": "Shadow detail is visible but still darker than the key side.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Add one accent",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Use a small light to separate a focal prop, doorway or silhouette.",
          "why": "Accent is for hierarchy, not general illumination.",
          "see": null,
          "check": "The focal element stands out without every object glowing.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Toggle each light",
          "where": "Level Editor → use the same locked camera → toggle/compare lights or Play-test the route",
          "do": "Switch lights on/off and identify its job.",
          "why": "If you cannot describe a light's purpose, it may not be needed.",
          "see": null,
          "check": "Each light contributes a distinct function.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        }
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
        {
          "title": "Keep the route readable",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Start with enough neutral light to walk the corridor safely.",
          "why": "Horror fails when the player is fighting the screen rather than the threat.",
          "see": null,
          "check": "You can navigate without memorising the route.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Remove information selectively",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Darken side spaces/backgrounds while keeping floor edges and key doorframes readable.",
          "why": "Fear comes from uncertainty, not total black.",
          "see": null,
          "check": "Near navigation remains visible while future information is reduced.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Motivate pools of light",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Use ceiling lights, emergency lamps or practical fixtures rather than floating invisible brightness everywhere.",
          "why": "Believable sources make stylised lighting feel grounded.",
          "see": null,
          "check": "Bright areas have visible reasons.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Create one contrast event",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Add a brighter or coloured pool where you want anticipation.",
          "why": "Contrast creates a destination and a before/after rhythm.",
          "see": null,
          "check": "The eye is pulled down the corridor.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Test with movement",
          "where": "Level Editor → use the same locked camera → toggle/compare lights or Play-test the route",
          "do": "Walk at normal speed and rotate the camera.",
          "why": "Static beauty shots can hide unreadable gameplay.",
          "see": null,
          "check": "The mood survives actual play.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Create global volume",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Add a Post Process Volume and enable Infinite Extent (Unbound) for a global learning setup.",
          "why": "A global volume gives a predictable baseline.",
          "see": null,
          "check": "The settings affect the whole test level.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/613d3965-279b-4d62-8cde-f696aaa5d3b6?height=335&resizing_type=fill&width=1920",
            "caption": "Current UE5.8 Post Process tutorial. The walkthrough explicitly shows PPV_Global and Infinite Extent (Unbound); follow the Details-panel values in the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/add-post-process-volumes",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Stabilise exposure",
          "where": "Level Editor → Post Process Volume → Details → Exposure → stabilise the comparison before adjusting lights",
          "do": "Set manual/controlled exposure appropriate to your project.",
          "why": "You need a stable image before judging colour and contrast.",
          "see": null,
          "check": "Turning between bright/dark areas no longer wildly changes brightness.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/613d3965-279b-4d62-8cde-f696aaa5d3b6?height=335&resizing_type=fill&width=1920",
            "caption": "Current UE5.8 Post Process tutorial. The walkthrough explicitly shows PPV_Global and Infinite Extent (Unbound); follow the Details-panel values in the Hub step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/add-post-process-volumes",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Adjust colour gently",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Change temperature/tint/contrast/saturation in small steps.",
          "why": "Colour grade should unify lighting, not recolour every object.",
          "see": null,
          "check": "Materials still retain believable relationships.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Use effects sparingly",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Add subtle vignette/bloom only if the image benefits.",
          "why": "Heavy post effects quickly look like filters rather than art direction.",
          "see": null,
          "check": "The effect is noticeable when toggled off, not distracting when on.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Before/after toggle",
          "where": "Level Editor → use the same locked camera → toggle/compare lights or Play-test the route",
          "do": "Disable the volume and compare.",
          "why": "A useful post pass should improve hierarchy/mood without being the only reason the scene works.",
          "see": null,
          "check": "Lighting is still functional without the grade.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        }
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
        {
          "title": "Open Landscape Mode",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Use the Modes dropdown and choose Landscape.",
          "why": "Landscape has its own editing workflow separate from normal Static Mesh placement.",
          "see": null,
          "check": "Manage/Sculpt/Paint tabs are visible.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://img.edc-cdn.net/imgproxy/WhJevtNTVxIUT55gW9wM3-sl1hwqk0EEexbt5n9VtQc/filename%3A04-new-landscape-tool.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy80ZGIwODM4YS0yYmFhLTRmYzItYTNiNi1jNjBkNTJjOGVkM2MvMDQtbmV3LWxhbmRzY2FwZS10b29sLnBuZw",
            "caption": "Official UE5.8 Landscape Mode. Manage creates terrain, Sculpt reshapes it and Paint applies landscape layers.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Choose a modest size",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Create a small learning landscape rather than filling an enormous world.",
          "why": "Smaller terrain is faster to iterate and harder to get lost in.",
          "see": null,
          "check": "The test landscape covers only the space you need.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://img.edc-cdn.net/imgproxy/WhJevtNTVxIUT55gW9wM3-sl1hwqk0EEexbt5n9VtQc/filename%3A04-new-landscape-tool.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy80ZGIwODM4YS0yYmFhLTRmYzItYTNiNi1jNjBkNTJjOGVkM2MvMDQtbmV3LWxhbmRzY2FwZS10b29sLnBuZw",
            "caption": "Official Landscape Create/Manage tool context. Choose the modest Hub size written in the step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Create and save",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Create the Landscape and save the level before sculpting.",
          "why": "Terrain edits can become extensive; save a known baseline.",
          "see": null,
          "check": "A Landscape Actor appears in the level.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://img.edc-cdn.net/imgproxy/WhJevtNTVxIUT55gW9wM3-sl1hwqk0EEexbt5n9VtQc/filename%3A04-new-landscape-tool.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy80ZGIwODM4YS0yYmFhLTRmYzItYTNiNi1jNjBkNTJjOGVkM2MvMDQtbmV3LWxhbmRzY2FwZS10b29sLnBuZw",
            "caption": "Official Landscape Create/Manage tool context. Choose the modest Hub size written in the step.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Switch tools",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Click Sculpt, then Paint and identify how each changes the same Landscape Actor.",
          "why": "Manage handles structure, Sculpt changes shape, Paint changes material layers.",
          "see": null,
          "check": "You can explain the three roles without guessing.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://img.edc-cdn.net/imgproxy/WhJevtNTVxIUT55gW9wM3-sl1hwqk0EEexbt5n9VtQc/filename%3A04-new-landscape-tool.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy80ZGIwODM4YS0yYmFhLTRmYzItYTNiNi1jNjBkNTJjOGVkM2MvMDQtbmV3LWxhbmRzY2FwZS10b29sLnBuZw",
            "caption": "Official UE5.8 Landscape Mode. Manage creates terrain, Sculpt reshapes it and Paint applies landscape layers.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        }
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
        {
          "title": "Mark the route",
          "where": "Level Editor → Play → traverse the intended route at player height and remove terrain/foliage snags",
          "do": "Place temporary cubes/splines or sketch where the player starts, travels and finishes.",
          "why": "Terrain should serve a route instead of becoming random mountains.",
          "see": null,
          "check": "Start and destination are identifiable.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Use a huge brush",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Sculpt large ridges/valleys with low strength.",
          "why": "Large forms create believable terrain hierarchy.",
          "see": null,
          "check": "The silhouette reads from far away.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://img.edc-cdn.net/imgproxy/WhJevtNTVxIUT55gW9wM3-sl1hwqk0EEexbt5n9VtQc/filename%3A04-new-landscape-tool.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy80ZGIwODM4YS0yYmFhLTRmYzItYTNiNi1jNjBkNTJjOGVkM2MvMDQtbmV3LWxhbmRzY2FwZS10b29sLnBuZw",
            "caption": "Official UE5.8 Landscape Mode. Manage creates terrain, Sculpt reshapes it and Paint applies landscape layers.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Flatten playable zones",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Use Flatten/Smooth around paths, combat spaces and building footprints.",
          "why": "Gameplay needs predictable footing even in natural worlds.",
          "see": null,
          "check": "Player movement is stable where gameplay occurs.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://img.edc-cdn.net/imgproxy/WhJevtNTVxIUT55gW9wM3-sl1hwqk0EEexbt5n9VtQc/filename%3A04-new-landscape-tool.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy80ZGIwODM4YS0yYmFhLTRmYzItYTNiNi1jNjBkNTJjOGVkM2MvMDQtbmV3LWxhbmRzY2FwZS10b29sLnBuZw",
            "caption": "Official UE Landscape tool context. Epic’s current Quick Start explicitly demonstrates Smooth and Flatten; use the Hub’s playable-route goal rather than copying Epic terrain literally.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Add secondary variation",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Only after big shapes work, add smaller erosion-like changes and break straight lines.",
          "why": "Detail should sit on top of strong landforms.",
          "see": null,
          "check": "Terrain does not look like noisy melted clay.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Walk it",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Play from the ground and check slope, visibility and route length.",
          "why": "Editor top view hides how exhausting/steep terrain feels.",
          "see": null,
          "check": "The intended route is traversable and readable.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Prepare layered material",
          "where": "Modes toolbar → Landscape → Paint → choose/create the target layer and paint in the Viewport",
          "do": "Use a landscape material with named layers such as Grass, Dirt and Rock.",
          "why": "Paint mode needs material layers to target.",
          "see": null,
          "check": "Layer names appear in Paint mode.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Create Layer Info assets",
          "where": "Modes toolbar → Landscape → Paint → choose/create the target layer and paint in the Viewport",
          "do": "Create/save Layer Info for each paint layer as required.",
          "why": "Layer Info stores landscape paint data.",
          "see": null,
          "check": "Each layer can be selected and painted.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://img.edc-cdn.net/imgproxy/WhJevtNTVxIUT55gW9wM3-sl1hwqk0EEexbt5n9VtQc/filename%3A04-new-landscape-tool.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy80ZGIwODM4YS0yYmFhLTRmYzItYTNiNi1jNjBkNTJjOGVkM2MvMDQtbmV3LWxhbmRzY2FwZS10b29sLnBuZw",
            "caption": "Official UE Landscape Paint context. Epic’s current Quick Start walks through Target Layers and creating Layer Info objects.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Paint by rule",
          "where": "Modes toolbar → Landscape → Paint → choose/create the target layer and paint in the Viewport",
          "do": "Put dirt on paths/traffic, rock on exposed steep areas and grass on stable ground.",
          "why": "Surface distribution looks believable when it follows terrain processes.",
          "see": null,
          "check": "Materials reinforce slope and use.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://img.edc-cdn.net/imgproxy/WhJevtNTVxIUT55gW9wM3-sl1hwqk0EEexbt5n9VtQc/filename%3A04-new-landscape-tool.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy80ZGIwODM4YS0yYmFhLTRmYzItYTNiNi1jNjBkNTJjOGVkM2MvMDQtbmV3LWxhbmRzY2FwZS10b29sLnBuZw",
            "caption": "Official UE5.8 Landscape Mode. Manage creates terrain, Sculpt reshapes it and Paint applies landscape layers.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Blend edges",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Use lower strength/large brushes so transitions are not spray-painted circles.",
          "why": "Natural surfaces transition gradually unless there is a clear physical boundary.",
          "see": null,
          "check": "Layer edges feel integrated.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Check from player height",
          "where": "Modes toolbar → Landscape → Paint → choose/create the target layer and paint in the Viewport",
          "do": "Walk the path and inspect texture scale/tiling.",
          "why": "Top view hides giant texture scale problems.",
          "see": null,
          "check": "Surfaces hold up at gameplay distance.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        }
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
        {
          "title": "Protect the route",
          "where": "Level Editor → Play → traverse the intended route at player height and remove terrain/foliage snags",
          "do": "Mark the walking corridor and important sightlines before painting foliage.",
          "why": "Vegetation must not erase gameplay communication.",
          "see": null,
          "check": "You know where foliage should be sparse.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/d79dc3c6-ea82-4342-a92b-4aabda4e6535?height=335&resizing_type=fill&width=1920",
            "caption": "Current UE5.8 Foliage Mode reference. Epic’s page shows Paint, Brush Options, Paint Density, radius and scale variation; keep the path/readability judgement from the Hub.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/foliage-mode-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Build large clusters",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Place tree/rock groups in masses with open gaps between them.",
          "why": "Nature often reads as clustered rhythm rather than uniform randomness.",
          "see": null,
          "check": "The scene has dense and sparse zones.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Add ground layer",
          "where": "Modes toolbar → Landscape → Paint → choose/create the target layer and paint in the Viewport",
          "do": "Paint grass/small plants at a density that supports the biome.",
          "why": "Ground detail connects larger assets to terrain.",
          "see": null,
          "check": "Terrain no longer looks bare but remains readable.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/d79dc3c6-ea82-4342-a92b-4aabda4e6535?height=335&resizing_type=fill&width=1920",
            "caption": "Current UE5.8 Foliage Mode reference. Epic’s page shows Paint, Brush Options, Paint Density, radius and scale variation; keep the path/readability judgement from the Hub.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/foliage-mode-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Vary scale carefully",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Use modest random scale/rotation ranges.",
          "why": "Variation hides repetition without creating absurd plant sizes.",
          "see": null,
          "check": "Repeated species feel less stamped.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/d79dc3c6-ea82-4342-a92b-4aabda4e6535?height=335&resizing_type=fill&width=1920",
            "caption": "Current UE5.8 Foliage Mode reference. Epic’s page shows Paint, Brush Options, Paint Density, radius and scale variation; keep the path/readability judgement from the Hub.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/foliage-mode-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Trim sightlines",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Delete/erase foliage blocking landmarks, corners, combat reads or camera.",
          "why": "Design has priority over procedural density.",
          "see": null,
          "check": "Important views remain open.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        }
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
        {
          "title": "Create Level Sequence",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Use Cinematics > Add Level Sequence or create one in the Content Browser.",
          "why": "Sequencer data lives in a Level Sequence asset.",
          "see": null,
          "check": "The Sequencer timeline opens.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": [
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ebbb1c16-6495-448b-8fa3-f19af40e5d67/createseq.png",
              "caption": "Official UE5.8 workflow for creating a Level Sequence.",
              "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-make-movies-in-unreal-engine",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            },
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/6b60fd77-8c0c-4f6e-abce-e9dceaddf151/seqopen.png",
              "caption": "Official UE5.8 Sequencer Editor after opening a Level Sequence.",
              "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-make-movies-in-unreal-engine",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            }
          ]
        },
        {
          "title": "Add Cine Camera",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Create/add a Cine Camera Actor and bind it to the sequence.",
          "why": "Cine Camera provides film-style camera controls.",
          "see": null,
          "check": "Camera track appears in Sequencer.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b9b3f29d-052f-4cf8-91b4-f994bb4c2d5c/createcamera.png",
            "caption": "Official UE5.8 Create New Camera control in Sequencer.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-animate-cinematic-cameras-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Frame the end first",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Move the camera to the strongest final composition and key its transform.",
          "why": "Knowing the destination prevents aimless camera movement.",
          "see": null,
          "check": "The end frame communicates the intended subject.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/a5a26c83-7473-44ec-872b-16c0e4218127/setfirstkey.gif",
            "caption": "Official UE5.8 camera Transform keyframe workflow in Sequencer.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-animate-cinematic-cameras-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Set the start",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Move earlier in time, place a different useful start frame and key it.",
          "why": "Two keyframes create movement; composition gives that movement purpose.",
          "see": null,
          "check": "Playback travels cleanly from start to end.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": [
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/710028b8-062d-4a48-b30c-a4650a256e1c/timeadjust.png",
              "caption": "Official UE5.8 Sequencer playhead/timeline used to choose a later camera keyframe.",
              "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-animate-cinematic-cameras-in-unreal-engine",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            },
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/a5a26c83-7473-44ec-872b-16c0e4218127/setfirstkey.gif",
              "caption": "Official UE5.8 camera Transform keyframe workflow in Sequencer.",
              "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-animate-cinematic-cameras-in-unreal-engine",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            }
          ]
        },
        {
          "title": "Trim duration",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Shorten the shot until it communicates the idea without lingering.",
          "why": "Most beginner shots are longer than the information requires.",
          "see": null,
          "check": "The shot feels deliberate rather than like a camera demo.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        }
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
        {
          "title": "Create 3 cameras",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Frame a wide, medium and detail/reaction angle around the same event.",
          "why": "Shot size changes information and emotional distance.",
          "see": null,
          "check": "Each camera shows something meaningfully different.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        },
        {
          "title": "Add Camera Cuts track",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Add a Camera Cuts track in Sequencer.",
          "why": "The cut track decides which camera the audience sees.",
          "see": null,
          "check": "The track is visible and ready for camera sections.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e26705aa-21c8-4279-8cac-74648ddf6f44/create1.png",
            "caption": "Official UE5.8 Sequencer Add Track → Camera Cut Track workflow.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/cinematic-camera-cut-track-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Assign cameras",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Create sections for each camera in a clear order.",
          "why": "Editing is choosing when information changes.",
          "see": null,
          "check": "Playback switches camera at section boundaries.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/32af3a32-6709-4140-8c7d-b24c4b9a7bb3/create4.png",
            "caption": "Official UE5.8 Camera Cuts binding/section workflow for assigning cameras.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/cinematic-camera-cut-track-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Cut on purpose",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Move a cut to the moment a new action, reveal or reaction starts.",
          "why": "Cuts feel natural when motivated by new information.",
          "see": null,
          "check": "The sequence does not cut arbitrarily every two seconds.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/fdd4aa66-7f2f-46cd-ae69-55260eb3e1a9/cut1.gif",
            "caption": "Official UE5.8 Sequencer example of creating a camera cut at a chosen moment.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/cinematic-camera-cut-track-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Check screen direction",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Ensure important movement does not confusingly flip direction without reason.",
          "why": "Continuity helps viewers understand space.",
          "see": null,
          "check": "The action remains readable across cuts.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        }
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
        {
          "title": "Hide the subject",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Frame the start so a wall, doorway, foreground prop or darkness obscures part/all of the subject.",
          "why": "A reveal requires withheld information.",
          "see": null,
          "check": "The start frame creates a question.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        },
        {
          "title": "Choose the reveal path",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Move laterally/forward so the subject gradually becomes visible.",
          "why": "Simple movement is easier to read than orbiting everywhere.",
          "see": null,
          "check": "The subject appears progressively.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        },
        {
          "title": "Key only what matters",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Use as few transform keys as necessary and smooth the motion.",
          "why": "Over-keyed cameras wobble.",
          "see": null,
          "check": "Movement feels controlled.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        },
        {
          "title": "End on composition",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Stop at a frame where the subject and surrounding context read clearly.",
          "why": "The payoff is a strong final image.",
          "see": null,
          "check": "The final frame explains what was hidden.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        },
        {
          "title": "Add sound before sight",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Optional: start a sound cue shortly before the visual reveal.",
          "why": "Audio can create anticipation and direction.",
          "see": null,
          "check": "The audience expects something before seeing it.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        }
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
        {
          "title": "Place sequence in level",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Make sure the Level Sequence Actor/asset is available in the gameplay level.",
          "why": "Gameplay needs a reference to the sequence you want to play.",
          "see": null,
          "check": "The sequence previews in the level.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/99bc4ca4-5300-4a9d-add1-3ec8319eabc8/trigger11.png",
            "caption": "Official UE5.8 Level Blueprint reference to a Level Sequence.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Choose a trigger",
          "where": "Level Editor → Trigger Box / interaction Blueprint → Event Graph → Level Sequence Actor/Player → Play, then restore player state on Finished",
          "do": "Use a Trigger Box, interaction or scripted event as the start condition.",
          "why": "Cinematics should happen because of game state, not only editor playback.",
          "see": null,
          "check": "The trigger fires once at the intended moment.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ad0bd677-2517-4416-96de-9b224f2e8bba/trigger01.png",
            "caption": "Official UE5.8 Trigger Box used to start a gameplay cinematic.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Play sequence",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Use the sequence player/actor to start playback.",
          "why": "The game now controls when Sequencer runs.",
          "see": null,
          "check": "Entering/interacting starts the cutscene.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/10712277-55f5-405e-95dd-00fea5e9eda4/trigger12.png",
            "caption": "Official UE5.8 Level Blueprint: play a Level Sequence from a gameplay trigger.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Handle player control",
          "where": "Level Editor → Trigger Box / interaction Blueprint → Event Graph → Level Sequence Actor/Player → Play, then restore player state on Finished",
          "do": "Disable or appropriately limit input/camera if the sequence requires it.",
          "why": "Player and cinematic camera fighting each other breaks presentation.",
          "see": null,
          "check": "Inputs do not cause accidental movement during the sequence.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/14be747e-49f5-4ddb-8a17-e514b9603a14/trigger17.png",
            "caption": "Official UE5.8 cinematic control graph showing Branch/Is Playing and a controlled skip path. The Hub’s player-control handling can use the same gameplay-boundary idea.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Restore state",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "On sequence finished, restore input/camera and continue the objective.",
          "why": "A cinematic must hand control back reliably.",
          "see": null,
          "check": "The player can immediately continue playing after the final frame.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/a4650bca-064d-4ecc-9ead-90c63ced3e36/trigger15.png",
            "caption": "Official UE5.8 sequence replay/state workflow. Restore gameplay state deliberately after the sequence rather than leaving control ambiguous.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        }
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
        {
          "title": "Choose the bed",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Import/use a subtle loop such as room tone, wind or machinery.",
          "why": "The bed establishes constant space without demanding attention.",
          "see": null,
          "check": "Loop is not obviously distracting.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": null
        },
        {
          "title": "Place in space",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Use Ambient Sound/Audio Component and decide whether the bed is 2D or localised.",
          "why": "Some ambience belongs to a whole area; some belongs to a source.",
          "see": null,
          "check": "Movement changes the sound only when appropriate.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": null
        },
        {
          "title": "Add sparse details",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Place occasional drips, creaks, birds, distant impacts or electrical noises.",
          "why": "Sparse variation prevents the loop from feeling synthetic.",
          "see": null,
          "check": "You hear changing detail over time.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": null
        },
        {
          "title": "Balance levels",
          "where": "Level Editor → Play → walk toward, around and away from the source while listening on headphones/speakers",
          "do": "Lower the bed until gameplay/focal sounds remain dominant.",
          "why": "Ambience should support rather than mask important cues.",
          "see": null,
          "check": "Footsteps/interactions stay clearly audible.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": null
        },
        {
          "title": "Walk the boundary",
          "where": "Level Editor → Play → walk toward, around and away from the source while listening on headphones/speakers",
          "do": "Enter/leave the area and listen for abrupt starts/stops.",
          "why": "Audio transitions reveal bad setup immediately.",
          "see": null,
          "check": "The ambience enters/exits naturally.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Create attenuation asset",
          "where": "Content Drawer → Audio → Sound Attenuation (or source Attenuation settings) → Details → test with the source placed in the level",
          "do": "Create a Sound Attenuation asset or enable attenuation settings on the sound source.",
          "why": "Attenuation defines how audio behaves across distance.",
          "see": null,
          "check": "Attenuation settings are available.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/c9c27776-27e1-401b-a6db-d17355cf2826/01-attenuation-volume-properties.png",
            "caption": "Official UE5.8 Sound Attenuation volume settings including attenuation shape/radius/falloff controls.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Set inner radius",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Choose the distance where full volume should remain.",
          "why": "A sound source needs a close-range zone before falloff.",
          "see": null,
          "check": "Standing near the source keeps stable volume.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/c9c27776-27e1-401b-a6db-d17355cf2826/01-attenuation-volume-properties.png",
            "caption": "Official UE5.8 Sound Attenuation volume settings including attenuation shape/radius/falloff controls.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Set falloff distance",
          "where": "Content Drawer → Audio → Sound Attenuation (or source Attenuation settings) → Details → test with the source placed in the level",
          "do": "Choose how far beyond the inner radius the sound fades.",
          "why": "Falloff communicates distance and scale.",
          "see": null,
          "check": "Walking away creates a smooth reduction.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/c9c27776-27e1-401b-a6db-d17355cf2826/01-attenuation-volume-properties.png",
            "caption": "Official UE5.8 Sound Attenuation volume settings including attenuation shape/radius/falloff controls.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Enable spatialisation",
          "where": "Content Drawer → Audio → Sound Attenuation (or source Attenuation settings) → Details → test with the source placed in the level",
          "do": "Use spatialisation so stereo/headphone playback indicates direction when appropriate.",
          "why": "Directional hearing helps navigation.",
          "see": null,
          "check": "Turning away/from source changes perceived direction.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7bc8a75e-310a-4cb2-8b55-726eb577b021/23-attenuation-spatialization-properties.png",
            "caption": "Official UE5.8 spatialisation settings for positioning audio in 3D space.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Test in motion",
          "where": "Level Editor → Play → walk toward, around and away from the source while listening on headphones/speakers",
          "do": "Circle the source and approach from different rooms.",
          "why": "Static preview cannot prove spatial behaviour.",
          "see": null,
          "check": "Direction and distance make sense during play.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Create Sound Cue",
          "where": "Content Drawer → Audio → Sound Cue → open the Sound Cue graph → add waves/nodes and connect to Output",
          "do": "Create a Sound Cue and open the node graph.",
          "why": "Sound Cues combine Sound Waves with playback behaviour.",
          "see": null,
          "check": "The cue graph opens.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e3176bcd-cc8f-4ec2-ad09-9d5a80706174/sound-cue-editor-palette-panel.png",
            "caption": "Official UE5.8 Sound Cue Editor and node palette.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/sound-cue-reference-for-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Add several variations",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Drag 3–5 similar Sound Waves into the graph.",
          "why": "Real repeated actions rarely produce an identical waveform.",
          "see": null,
          "check": "Multiple samples are available to choose from.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/acbdb0fe-782b-4db2-9a17-a8c213b66e15/random-sound-node.png",
            "caption": "Official UE5.8 Random Sound node. Connect multiple variations and use weights only when needed.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/sound-cue-reference-for-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Add Random node",
          "where": "Content Drawer → Audio → Sound Cue → open the Sound Cue graph → add waves/nodes and connect to Output",
          "do": "Connect samples into a Random node then to Output.",
          "why": "Random selection breaks obvious repetition.",
          "see": null,
          "check": "Repeated preview chooses different samples.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/acbdb0fe-782b-4db2-9a17-a8c213b66e15/random-sound-node.png",
            "caption": "Official UE5.8 Random Sound node. Connect multiple variations and use weights only when needed.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/sound-cue-reference-for-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Add small pitch/volume variation",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Use a Modulator or equivalent restrained randomisation.",
          "why": "Tiny variation multiplies perceived variety.",
          "see": null,
          "check": "Repeats feel less machine-gunned without sounding cartoonish.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/a3ee093e-8732-4c60-a9e0-6be1c839e142/modulator-sound-node.png",
            "caption": "Official UE5.8 Modulator node for restrained random pitch/volume variation.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/sound-cue-reference-for-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Use cue in gameplay",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Replace the single Sound Wave reference with the Sound Cue.",
          "why": "The variation now occurs every time the event plays.",
          "see": null,
          "check": "Repeated actions no longer sound identical.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": null
        }
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
        {
          "title": "Choose the space",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Pick a room where acoustic size should be obvious: hall, tunnel, bathroom, chamber.",
          "why": "Reverb should communicate architecture.",
          "see": null,
          "check": "The chosen space has a clear acoustic idea.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": null
        },
        {
          "title": "Add audio/reverb volume",
          "where": "Level Editor → Add (+) → Volumes → Audio Volume → Details → Reverb → resize volume to match the room",
          "do": "Place the relevant Audio Volume around the room and assign/tune reverb settings.",
          "why": "Volumes let location change the acoustic treatment.",
          "see": null,
          "check": "Entering the volume changes the sound treatment.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/04b0d7e8-e47f-49db-bb22-d3d472d64cea/04-reverb-settings.png",
            "caption": "Official UE5.8 Audio Volume Reverb settings, including Apply Reverb, effect, volume and fade time.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/audio-volumes-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Tune decay/wet amount",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Adjust so the tail suggests room size without washing out all sound.",
          "why": "Longer/louder reverb implies larger/more reflective spaces but can destroy clarity.",
          "see": null,
          "check": "Speech/gameplay cues remain understandable.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/04b0d7e8-e47f-49db-bb22-d3d472d64cea/04-reverb-settings.png",
            "caption": "Official UE5.8 Audio Volume Reverb settings, including Apply Reverb, effect, volume and fade time.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/audio-volumes-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Test doorway transition",
          "where": "Level Editor → Add (+) → Volumes → Audio Volume → Details → Reverb → resize volume to match the room",
          "do": "Walk repeatedly across the boundary.",
          "why": "Abrupt reverb jumps reveal poor blending/volume placement.",
          "see": null,
          "check": "The acoustic change feels tied to entering the room.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        },
        {
          "title": "Compare dry/wet",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Toggle the effect and listen with footsteps or a short impact.",
          "why": "A/B testing makes the design contribution obvious.",
          "see": null,
          "check": "The room feels physically different with reverb enabled.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Capture BEFORE",
          "where": "Return to the same saved gameplay camera / route → capture a matching frame so BEFORE and AFTER are comparable",
          "do": "Take a representative gameplay screenshot before touching anything.",
          "why": "Without a baseline, students mistake activity for improvement.",
          "see": null,
          "check": "You have an honest comparison frame.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Pass 1: readability",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Fix route clarity, focal point, collision and anything blocking the player.",
          "why": "Gameplay problems outrank decorative problems.",
          "see": null,
          "check": "The level is easier to understand.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Pass 2: scale/composition",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Fix objects that feel wrong-sized, tangencies and awkward empty/crowded areas.",
          "why": "Composition benefits from proportion before detail.",
          "see": null,
          "check": "The image has stronger big shapes.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Pass 3: materials/lighting",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Fix inconsistent roughness, exposure, colour and lights without purpose.",
          "why": "Surface and lighting consistency creates cohesion.",
          "see": null,
          "check": "The scene feels like one art direction.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Pass 4: story/detail",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Add only details that support use, age, story or focal hierarchy.",
          "why": "Detail now lands on a strong base.",
          "see": null,
          "check": "Small props no longer carry the whole scene.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Pass 5: delete",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Remove anything redundant, noisy or expensive with little payoff.",
          "why": "Subtraction is a real polish tool.",
          "see": null,
          "check": "Final scene is clearer than the 'everything on' version.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        }
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
        {
          "title": "Record normal view",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Stand at a representative gameplay camera and note current performance/visual issue.",
          "why": "Profiling needs a repeatable location.",
          "see": null,
          "check": "You can return to the same test frame.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Open diagnostic view modes",
          "where": "Viewport → View Mode / Optimisation Viewmodes → choose the diagnostic view relevant to the suspected issue",
          "do": "Use relevant View Mode options such as Shader Complexity or lighting/debug views available in your project.",
          "why": "Debug views expose costs invisible in beauty view.",
          "see": null,
          "check": "The viewport changes to diagnostic information.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": [
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/604480ba-da30-4377-945d-540fb90db34d/view-modes-menu.png",
              "caption": "Official UE5.8 View Mode menu used to enter diagnostic modes.",
              "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/using-transparency-in-unreal-engine-materials",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            },
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/4dbafdc8-58d4-440b-943a-33545e9fdebb/shader-complexity-toggle.png",
              "caption": "Official UE5.8 menu path to Shader Complexity.",
              "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/using-transparency-in-unreal-engine-materials",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            }
          ]
        },
        {
          "title": "Find the hotspot",
          "where": "Viewport → View Mode / Optimisation Viewmodes → choose the diagnostic view relevant to the suspected issue",
          "do": "Identify one material, overdraw area, light cluster or effect that stands out.",
          "why": "Fixing one measurable hotspot is better than random optimisation.",
          "see": null,
          "check": "You can point to a specific offender.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Simplify one thing",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Reduce unnecessary transparency/material complexity/light overlap/effect density as appropriate.",
          "why": "Optimisation is a design trade-off.",
          "see": null,
          "check": "The visual result still supports the scene.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Compare again",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Return to the same camera/view and compare.",
          "why": "A repeatable A/B confirms whether the change helped.",
          "see": null,
          "check": "The diagnostic issue is reduced without ruining the shot.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Choose a repeated mesh",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Pick a rock, prop or environment mesh used many times.",
          "why": "Repeated assets multiply performance cost and visual popping.",
          "see": null,
          "check": "You know which asset is being tested.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Inspect mesh settings",
          "where": "Content Drawer → double-click the repeated Static Mesh → Static Mesh Editor → Nanite / LOD settings → then place near/mid/far test copies",
          "do": "Open the Static Mesh editor and check Nanite/LOD setup appropriate to that asset/project.",
          "why": "Modern UE projects may use Nanite, traditional LODs or both depending on content/platform.",
          "see": null,
          "check": "You can identify the mesh's current strategy.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/6b21c833-a42c-4614-85a4-cafef96f2270?height=335&resizing_type=fill&width=1920",
            "caption": "Current UE5.8 Static Mesh Editor reference. The Details panel contains LOD and mesh-reduction options; Nanite settings are inspected on the mesh asset.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/static-mesh-editor-ui-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Test distance",
          "where": "Content Drawer → double-click the repeated Static Mesh → Static Mesh Editor → Nanite / LOD settings → then place near/mid/far test copies",
          "do": "Place copies near/mid/far and move the camera.",
          "why": "LOD decisions are judged in motion, not only asset editor.",
          "see": null,
          "check": "No distracting pop or disappearing silhouette occurs.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/6b21c833-a42c-4614-85a4-cafef96f2270?height=335&resizing_type=fill&width=1920",
            "caption": "Current UE5.8 Static Mesh Editor reference. The Details panel contains LOD and mesh-reduction options; Nanite settings are inspected on the mesh asset.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/static-mesh-editor-ui-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Keep silhouette priority",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Do not simplify so aggressively that important shape changes.",
          "why": "Players notice silhouette changes more than tiny surface detail.",
          "see": null,
          "check": "Far mesh still communicates the same object.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Test target hardware",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Use the project's actual quality/platform needs rather than assuming desktop maximum.",
          "why": "Optimisation is context-sensitive.",
          "see": null,
          "check": "The chosen setup matches the class/project target.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Choose the story shot",
          "where": "Return to the same saved gameplay camera / route → capture a matching frame so BEFORE and AFTER are comparable",
          "do": "Pick the angle that best communicates the environment's idea, route or mood.",
          "why": "The hero image should sell the work before technical details.",
          "see": null,
          "check": "The scene reads immediately.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Clean the frame",
          "where": "Return to the same saved gameplay camera / route → capture a matching frame so BEFORE and AFTER are comparable",
          "do": "Hide editor clutter/UI where appropriate and remove temporary debug actors.",
          "why": "Presentation affects how work is judged.",
          "see": null,
          "check": "Nothing accidental dominates the image.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Frame deliberately",
          "where": "Return to the same saved gameplay camera / route → capture a matching frame so BEFORE and AFTER are comparable",
          "do": "Use foreground/midground/background, focal hierarchy and sensible field of view.",
          "why": "A portfolio screenshot is still composition.",
          "see": null,
          "check": "The eye has a clear path through the frame.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Capture a breakdown too",
          "where": "Return to the same saved gameplay camera / route → capture a matching frame so BEFORE and AFTER are comparable",
          "do": "Take one technical shot: blockout, lighting-only, material spheres, wireframe or before/after.",
          "why": "Breakdowns prove process rather than only final beauty.",
          "see": null,
          "check": "Viewer can see how the scene was built.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Add concise caption",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Write what you did and what you were responsible for.",
          "why": "Recruiters/teachers need authorship and process clarity.",
          "see": null,
          "check": "Caption explains contribution without an essay.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        }
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
        {
          "title": "Build three choices",
          "where": "Level Editor → Add (+) → Shapes → Cube / primitives → duplicate and resize in the Viewport",
          "do": "Greybox a junction with one main route, one optional route and one route that is currently unavailable.",
          "why": "A useful decision needs alternatives with different meanings, not three identical doorways.",
          "see": null,
          "check": "From player height, all three choices are visible or discoverable.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Make the main route readable",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Give the primary path more visible depth, a landmark, stronger opening or repeated route language.",
          "why": "Players read opportunity from space before they read text.",
          "see": null,
          "check": "A tester can point to the likely progression route.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Make the optional route tempting",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Use a glimpse of reward, contrasting light or distinctive prop without making it look mandatory.",
          "why": "Optional content should invite curiosity without hijacking progression.",
          "see": null,
          "check": "A tester describes it as interesting but not obviously required.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Make the blocked route honest",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Use geometry, damage, locked architecture or environmental state to communicate why it cannot be used yet.",
          "why": "Visual denial is better than an invisible wall after the player commits to the route.",
          "see": null,
          "check": "The tester understands the route is unavailable before collision stops them.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Observe silently",
          "where": "Level Editor → Play → test from the real player camera; do not judge this step only from the editor fly camera",
          "do": "Watch another student choose without giving instructions and record where they hesitate.",
          "why": "Unprompted behaviour is the real readability test.",
          "see": null,
          "check": "You make one change based on observed behaviour.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Build a compressed approach",
          "where": "Level Editor → Add (+) → Shapes → Cube / primitives → duplicate and resize in the Viewport",
          "do": "Create a narrower/lower transition space leading toward a larger room.",
          "why": "Compression makes the following space feel larger by comparison.",
          "see": null,
          "check": "The approach feels tighter from player camera.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Hide the payoff",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Use a corner, doorway or elevation change so the destination is not fully visible at the start.",
          "why": "Delayed information creates anticipation.",
          "see": null,
          "check": "The key reveal only appears after movement.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Create the release",
          "where": "Level Editor → Add (+) → Shapes → Cube / primitives → duplicate and resize in the Viewport",
          "do": "Open into a taller/wider space with a longer sightline and a clear focal point.",
          "why": "Contrast in spatial scale creates a beat without scripting.",
          "see": null,
          "check": "The reveal feels noticeably more open than the approach.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Control dwell time",
          "where": "Level Editor → Viewport / Outliner → place or adjust the geometry/landmark named in the step → re-check from player height",
          "do": "Place a reason to pause: overlook, objective, landmark or safe area.",
          "why": "Pacing is also where players stop, not only how they move.",
          "see": null,
          "check": "A tester naturally slows or looks around at the intended point.",
          "troubleshoot": [
            "If the decision is only visible from the editor camera, switch to Play and judge it from player height."
          ],
          "visual": null
        },
        {
          "title": "Compare the route",
          "where": "Level Editor → Play → test from the real player camera; do not judge this step only from the editor fly camera",
          "do": "Walk it in reverse and decide whether the rhythm still makes sense.",
          "why": "Good spaces can have different emotional readings depending on direction.",
          "see": null,
          "check": "You can explain the intended rhythm in three beats.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Choose a micro-event",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Pick one simple event: hurried escape, interrupted meal, repair attempt, break-in or recent fight.",
          "why": "A small specific event is easier to communicate than vague “abandoned” dressing.",
          "see": null,
          "check": "You can describe the event in one sentence.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Choose five useful props",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Select props that each have a role in the event rather than five decorative objects.",
          "why": "Every object should add evidence.",
          "see": null,
          "check": "Removing any one prop noticeably weakens the story.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Arrange cause and effect",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Place props so their positions imply sequence: what was used, moved, dropped or damaged.",
          "why": "Placement creates narrative relationships between objects.",
          "see": null,
          "check": "A viewer can infer an action rather than just seeing clutter.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Add one environmental trace",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Use a decal, light, spill, dust, footprint or damage mark to connect the props to the space.",
          "why": "The room should participate in the event too.",
          "see": null,
          "check": "The trace supports the same interpretation.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Blind read",
          "where": "Level Editor → Play → inspect the dressed space from normal movement routes before deciding what stays",
          "do": "Show another student for five seconds and ask what happened.",
          "why": "If the intended story is invisible, more detail may not be the answer.",
          "see": null,
          "check": "Their interpretation is close enough to your intended event.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Find the repetition",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Walk through a modular area and identify the point where repeated walls/doors/props make spaces blend together.",
          "why": "You need to know what problem the hero asset is solving.",
          "see": null,
          "check": "You can name the most forgettable location.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Choose one unique feature",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Add one distinctive machine, sculpture, damaged wall, tree, sign or architectural shape at that location.",
          "why": "A hero asset creates memory and orientation through exception.",
          "see": null,
          "check": "The location now has a recognisable silhouette.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Frame it",
          "where": "Content Drawer → find the required environment prop/mesh → drag into the Viewport → adjust Transform in Details / duplicate deliberately",
          "do": "Adjust nearby props, sightlines or lighting so the unique feature is visible from the approach.",
          "why": "A landmark only helps if the player can actually perceive it.",
          "see": null,
          "check": "It is visible from at least two useful positions.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Protect its contrast",
          "where": "File → Save Current Level As (or duplicate the blockout map) before the dressing pass",
          "do": "Remove nearby competing clutter or repeated bright objects.",
          "why": "Uniqueness needs visual breathing room.",
          "see": null,
          "check": "The hero feature remains the first or second thing noticed.",
          "troubleshoot": [
            "If dressing starts to block movement or the focal point, delete props before adding more."
          ],
          "visual": null
        },
        {
          "title": "Test orientation",
          "where": "Level Editor → Play → inspect the dressed space from normal movement routes before deciding what stays",
          "do": "Ask a tester to navigate back to “the room with…” after exploring.",
          "why": "Memorable landmarks support spatial memory.",
          "see": null,
          "check": "They can describe/use the hero asset as an orientation cue.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Create a baseline view",
          "where": "Viewport → View Mode → Optimisation Viewmodes → Shader Complexity → keep the same camera for comparison",
          "do": "Frame a representative gameplay view containing the material you want to inspect.",
          "why": "Performance decisions need a consistent comparison.",
          "see": null,
          "check": "You can return to the same camera/view.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": null
        },
        {
          "title": "Open Shader Complexity",
          "where": "Viewport → View Mode → Optimisation Viewmodes → Shader Complexity → keep the same camera for comparison",
          "do": "Switch the viewport to Shader Complexity and inspect where expensive pixels accumulate.",
          "why": "The view exposes per-pixel shader cost and overlapping transparency.",
          "see": null,
          "check": "You can identify the hottest visible area.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": [
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/4dbafdc8-58d4-440b-943a-33545e9fdebb/shader-complexity-toggle.png",
              "caption": "Official UE5.8 menu path to Shader Complexity.",
              "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/using-transparency-in-unreal-engine-materials",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            },
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/dc8ffd1b-0d72-4e98-94b2-2337a589589c/trans_shader_complexity.png",
              "caption": "Official UE5.8 Shader Complexity viewport example for spotting expensive transparent overlap.",
              "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/using-transparency-in-unreal-engine-materials",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            }
          ]
        },
        {
          "title": "Inspect the material",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Open the material and check its Stats/instruction information plus obvious expensive features such as refraction, noise or many texture samples.",
          "why": "The viewport tells you where; the graph helps explain why.",
          "see": null,
          "check": "You can name one likely contributor to cost.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": null
        },
        {
          "title": "Simplify one thing",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Remove or replace one expensive operation/texture layer or reduce translucent overlap.",
          "why": "Changing one variable makes the result measurable.",
          "see": null,
          "check": "The visual result still communicates the intended surface.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": null
        },
        {
          "title": "Compare again",
          "where": "Viewport → View Mode → Optimisation Viewmodes → Shader Complexity → keep the same camera for comparison",
          "do": "Return to the same view and compare complexity/performance.",
          "why": "Optimisation is only real if measurement improves.",
          "see": null,
          "check": "The cost is reduced or you can justify why the visual trade-off is not worth it.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Find overlap zones",
          "where": "Viewport → View Mode → Optimisation Viewmodes → Shader Complexity → keep the same camera for comparison",
          "do": "Use Shader Complexity and rotate the camera through glass, fog cards, decals/particles and foliage.",
          "why": "Transparent layers become expensive when many pixels are redrawn through each other.",
          "see": null,
          "check": "You identify one view with heavy overlap.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": [
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/4dbafdc8-58d4-440b-943a-33545e9fdebb/shader-complexity-toggle.png",
              "caption": "Official UE5.8 menu path to Shader Complexity.",
              "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/using-transparency-in-unreal-engine-materials",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            },
            {
              "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/dc8ffd1b-0d72-4e98-94b2-2337a589589c/trans_shader_complexity.png",
              "caption": "Official UE5.8 Shader Complexity viewport example for spotting expensive transparent overlap.",
              "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/using-transparency-in-unreal-engine-materials",
              "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
              "kind": "epic"
            }
          ]
        },
        {
          "title": "Separate layers",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Reduce unnecessary stacked transparent planes or increase spacing/coverage efficiency.",
          "why": "Fewer overlapping layers reduce repeated per-pixel work.",
          "see": null,
          "check": "The same effect uses fewer overlapping surfaces.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": null
        },
        {
          "title": "Reduce screen coverage",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Shrink particles/cards or limit where transparency is visible.",
          "why": "Cost grows with the number of expensive pixels on screen.",
          "see": null,
          "check": "The effect still reads without filling the entire frame.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": null
        },
        {
          "title": "Prefer opaque/masked where suitable",
          "where": "Content Drawer → open/create the Material → Material Editor graph → select nodes/parameters in Details",
          "do": "Check whether an opaque/masked solution can replace a translucent surface.",
          "why": "Opaque/masked materials are often cheaper and more predictable.",
          "see": null,
          "check": "At least one surface uses the cheaper blend mode without harming the look.",
          "troubleshoot": [
            "Change one parameter at a time and inspect the material under a useful light angle before adding more complexity."
          ],
          "visual": null
        },
        {
          "title": "Test worst-case view",
          "where": "Viewport → View Mode → Optimisation Viewmodes → Shader Complexity → keep the same camera for comparison",
          "do": "Stand where the most layers overlap and profile there.",
          "why": "Average views can hide the actual performance spike.",
          "see": null,
          "check": "The worst-case view remains acceptable on target hardware.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Lock the viewing conditions",
          "where": "Level Editor → Post Process Volume → Details → Exposure → stabilise the comparison before adjusting lights",
          "do": "Choose the gameplay camera/route and set a deliberate exposure approach before balancing lights.",
          "why": "Changing exposure while lighting makes comparisons meaningless.",
          "see": null,
          "check": "Brightness no longer swings unpredictably while judging the shot.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Establish key information",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Light the route/focal point first with the minimum number of important sources.",
          "why": "Gameplay hierarchy should exist before atmospheric decoration.",
          "see": null,
          "check": "The player can identify the goal without fog or post process.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Add indirect mood",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Use environment colour, skylight/Lumen bounce and restrained emissive contribution to shape the shadow side.",
          "why": "Indirect light creates cohesion without flattening everything.",
          "see": null,
          "check": "Shadows retain form while the focal point remains dominant.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Layer atmosphere",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Add fog/volumetric response only where it improves depth or information control.",
          "why": "Atmosphere should separate depth, not erase it.",
          "see": null,
          "check": "Foreground, middle distance and background remain distinct.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Scalability check",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Compare the scene at a lower Lumen/scalability target and adjust the design if the route or focal point collapses.",
          "why": "A design that only works at maximum settings is fragile.",
          "see": null,
          "check": "The intended hierarchy survives the target quality level.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        }
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
        {
          "title": "Save a neutral composition",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Choose one camera angle where the route and landmark already read.",
          "why": "You need the same composition to compare lighting decisions.",
          "see": null,
          "check": "The geometry stays unchanged between versions.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Build the day state",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Use clear directional light, readable ambient fill and restrained fog.",
          "why": "Day should establish the base spatial information.",
          "see": null,
          "check": "Routes and landmark are easy to read.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Build the night/dusk state",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Shift light direction/temperature, ambient balance and fog while protecting essential route cues.",
          "why": "Time change should alter emotion and information, not randomly darken everything.",
          "see": null,
          "check": "The scene feels different but navigation remains possible.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Change one gameplay implication",
          "where": "Level Editor → Add (+) → Lights → Point / Spot / Rect / Directional as required → select the light → Details",
          "do": "Decide how visibility affects stealth, threat, exploration or safe areas.",
          "why": "Lighting state becomes design when it changes player decisions.",
          "see": null,
          "check": "You can name one behaviour the new time encourages.",
          "troubleshoot": [
            "Lock or stabilise exposure while judging lighting so auto-exposure does not hide the real change."
          ],
          "visual": null
        },
        {
          "title": "Compare silhouettes",
          "where": "Level Editor → use the same locked camera → toggle/compare lights or Play-test the route",
          "do": "Place the two screenshots side by side and inspect what disappeared/appeared.",
          "why": "Useful time-of-day changes are deliberate.",
          "see": null,
          "check": "You can explain every major readability change.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Define the authored route",
          "where": "Level Editor → Play → traverse the intended route at player height and remove terrain/foliage snags",
          "do": "Mark the playable path and key sightlines before generating/scattering assets.",
          "why": "Procedural coverage must know what it is not allowed to damage.",
          "see": null,
          "check": "The path/landmark works before scatter.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Create placement constraints",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Use slope, height, density, bounds or exclusion logic so assets avoid the route and critical spaces.",
          "why": "Rules turn random scatter into controlled distribution.",
          "see": null,
          "check": "Trees/rocks no longer spawn in protected gameplay areas.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Vary density intentionally",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Use denser clusters away from the route and lower density near navigation/focal points.",
          "why": "Density itself can guide movement and create composition.",
          "see": null,
          "check": "The path reads through distribution, not only texture.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Hand-author landmarks",
          "where": "Level Editor → Play → traverse the intended route at player height and remove terrain/foliage snags",
          "do": "Place important hero trees/rocks/structures manually after procedural coverage.",
          "why": "Procedural systems are good at background variation; memorable navigation needs intent.",
          "see": null,
          "check": "At least one landmark is deliberately placed and framed.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Regenerate and test",
          "where": "Level Editor → Play → traverse the intended route at player height and remove terrain/foliage snags",
          "do": "Change the seed/inputs if available and confirm the route remains safe.",
          "why": "Good rules survive variation.",
          "see": null,
          "check": "Multiple generations preserve navigation.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Choose the information budget",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "List what must remain visible during the weather state: route edge, landmark, nearby threats or shelter.",
          "why": "Weather should hide some information deliberately, not everything equally.",
          "see": null,
          "check": "You have a short must-see list.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Layer the weather",
          "where": "Modes toolbar → Landscape → Paint → choose/create the target layer and paint in the Viewport",
          "do": "Combine sky/light change, fog, particles and sound rather than relying on one extreme effect.",
          "why": "Layering creates depth and avoids the “grey filter” look.",
          "see": null,
          "check": "Each layer has a distinct job.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/384ec87a-79c8-47ee-9dca-c664802cc995/volumetricfog.png",
            "caption": "Official UE5.8 Volumetric Fog example showing scene lighting scattering through the fog.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/exponential-height-fog-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Protect navigation",
          "where": "Level Editor → Play → traverse the intended route at player height and remove terrain/foliage snags",
          "do": "Use contrast, practical lights, silhouettes or route materials to keep required cues readable.",
          "why": "The player still needs to act inside the atmosphere.",
          "see": null,
          "check": "A tester can move through the area without memorising it first.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Add one world reaction",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Change foliage motion, puddle/wetness, audio or a gameplay rule.",
          "why": "The environment feels alive when systems agree with the weather.",
          "see": null,
          "check": "At least one non-visual system responds.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        },
        {
          "title": "Performance check",
          "where": "Modes toolbar → Landscape → Manage / Sculpt → choose the tool and edit broad terrain forms in the Viewport",
          "do": "Test the dense/worst weather view on target quality.",
          "why": "Fog and particles can create high GPU cost/overdraw.",
          "see": null,
          "check": "The effect remains playable or has a cheaper fallback.",
          "troubleshoot": [
            "Keep a playable route visible and test at player height; large terrain edits can look fine from the editor camera but fail in play."
          ],
          "visual": null
        }
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
        {
          "title": "Name the emotion/information",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Decide whether the shot should feel intimate, exposed, compressed, powerful or disorienting.",
          "why": "Lens choice should solve a storytelling problem.",
          "see": null,
          "check": "You can describe the shot purpose before touching the camera.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        },
        {
          "title": "Create a Cine Camera",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Add/choose a Cine Camera Actor in Sequencer and frame the subject.",
          "why": "Cine Camera gives filmic controls for focal length and aperture.",
          "see": null,
          "check": "The camera is active on the Camera Cut track.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        },
        {
          "title": "Compare focal lengths",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Try a wider and longer focal length while repositioning the camera to keep similar subject size.",
          "why": "Focal length changes spatial relationships, not just zoom.",
          "see": null,
          "check": "You can see the background feel expand/compress between versions.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        },
        {
          "title": "Choose depth of field deliberately",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Use aperture/focus only if it helps isolate information or mood.",
          "why": "Shallow focus is a storytelling tool, not automatic “cinematic” quality.",
          "see": null,
          "check": "The important subject remains readable during motion.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        },
        {
          "title": "Test in sequence",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Play the shot before/after adjacent cuts.",
          "why": "A good standalone frame can still break edit rhythm.",
          "see": null,
          "check": "The lens/framing transition feels intentional.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
      "summary": "Reuse a shared intro, then let one simple gameplay Boolean choose between two short cinematic outcomes.",
      "uses": [
        "Sequencer",
        "Blueprint",
        "Subsequences",
        "Adaptive narrative"
      ],
      "referenceLesson": null,
      "steps": [
        {
          "title": "Build the shared intro",
          "where": "Level Editor → Cinematics → Add/Open Level Sequence → Sequencer → Cine Camera / Camera Cuts / transform tracks named in the step",
          "do": "Create a short intro Level Sequence/subsequence that both outcomes use.",
          "why": "Shared content should not be duplicated just because the ending changes.",
          "see": null,
          "check": "Both versions can start from the same intro.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        },
        {
          "title": "Create two outcome sequences",
          "where": "Gameplay Blueprint → Branch on the chosen state Boolean → call the appropriate Level Sequence / subsequence",
          "do": "Make two very short alternate reactions/endings with clear names.",
          "why": "Small separate blocks are easier to test and replace.",
          "see": null,
          "check": "Each outcome plays correctly on its own.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": null
        },
        {
          "title": "Create/choose a Boolean",
          "where": "Gameplay Blueprint → Branch on the chosen state Boolean → call the appropriate Level Sequence / subsequence",
          "do": "Use an existing gameplay Boolean/state supplied by your project, such as HasKey, AlarmTriggered or HelpedNPC.",
          "why": "Adaptivity needs one clear input before it needs complex narrative logic.",
          "see": null,
          "check": "The value can be changed/tested reliably.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f71f4d3e-8707-4d18-b398-fca822b66bdd/branch_example.png",
            "caption": "Official UE5 Branch node reference. Use your Boolean condition to choose between the two outcome sequences.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/flow-control-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Branch to the outcome",
          "where": "Gameplay Blueprint → Branch on the chosen state Boolean → call the appropriate Level Sequence / subsequence",
          "do": "At the trigger point, use Blueprint logic to play the appropriate sequence/outcome based on the Boolean.",
          "why": "Gameplay state now controls cinematic content.",
          "see": null,
          "check": "True and False produce different endings.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/10712277-55f5-405e-95dd-00fea5e9eda4/trigger12.png",
            "caption": "Official UE5.8 Level Sequence Play graph. Put one Play path on each Branch outcome for the Hub’s two-outcome mini system.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Return cleanly",
          "where": "Level Editor → Trigger Box / interaction Blueprint → Event Graph → Level Sequence Actor/Player → Play, then restore player state on Finished",
          "do": "Make sure input/camera/gameplay state returns correctly after either outcome.",
          "why": "Adaptive scenes still need reliable transitions back to play.",
          "see": null,
          "check": "Both paths return control without leaving the wrong camera/state active.",
          "troubleshoot": [
            "Scrub the shot, then play it at normal speed; a frame can look good while the motion or cut timing still feels wrong."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/14be747e-49f5-4ddb-8a17-e514b9603a14/trigger17.png",
            "caption": "Official UE5.8 sequence control example. Both outcomes should return cleanly to gameplay.",
            "sourceUrl": "https://dev.epicgames.com/documentation/unreal-engine/play-cinematics-from-blueprints-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        }
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
        {
          "title": "Choose the unseen information",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Decide what the player should infer: machine room ahead, enemy behind door, large open hall, storm outside or safe generator nearby.",
          "why": "Sound needs a communication goal.",
          "see": null,
          "check": "You can state the intended inference in one sentence.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": null
        },
        {
          "title": "Place the source out of sight",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Put the sound behind geometry/around a corner rather than beside the player.",
          "why": "The audio now extends the perceived world beyond the camera.",
          "see": null,
          "check": "The source cannot be seen at the first listening position.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": null
        },
        {
          "title": "Set useful attenuation",
          "where": "Content Drawer → Audio → Sound Attenuation (or source Attenuation settings) → Details → test with the source placed in the level",
          "do": "Use an attenuation asset so volume/spatialisation changes naturally as the listener moves.",
          "why": "Distance behaviour helps locate the source.",
          "see": null,
          "check": "Walking toward/away gives a believable directional/distance cue.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": null
        },
        {
          "title": "Shape the space",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Add suitable reverb/air absorption/occlusion behaviour if needed.",
          "why": "Acoustic treatment helps the player infer room type and separation.",
          "see": null,
          "check": "The source feels like it belongs behind/inside that space.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": null
        },
        {
          "title": "Blind test",
          "where": "Level Editor → Play → walk toward, around and away from the source while listening on headphones/speakers",
          "do": "Ask a tester what they expect to find before seeing the source.",
          "why": "The cue succeeds only if the inference is communicated.",
          "see": null,
          "check": "Their answer is close to the intended information.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Create a MetaSound Source",
          "where": "Content Drawer → Audio → MetaSound Source → open the MetaSound graph; use Attenuation only after the source itself plays correctly",
          "do": "Create a MetaSound Source for the ambient wind and attach appropriate attenuation if it lives in 3D space.",
          "why": "MetaSound gives graph-level control over how the sound is generated/varied.",
          "see": null,
          "check": "The source can be auditioned and placed.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/e0a9186a-4c04-4925-992c-a52933249175/wind_ms_details.png",
            "caption": "Official UE5.8 MetaSound Source used for the wind quick-start workflow.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/metasounds-quick-start",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Start with a wind layer",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Use a suitable wind Sound Wave/input as the stable base of the sound.",
          "why": "A recognisable source layer keeps the system simple before adding variation.",
          "see": null,
          "check": "The wind plays continuously without clicks.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/adc32ff4-6d81-4159-9222-b85765445c78/pawn_speed_input.png",
            "caption": "Official UE5.8 wind MetaSound from Epic’s MetaSounds Quick Start. The tutorial builds an ambient wind graph and exposes a PawnSpeed input.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/metasounds-quick-start",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Add subtle variation",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Modulate volume and/or filter/pitch slowly within a restrained range.",
          "why": "Slow variation reduces obvious looping without sounding random.",
          "see": null,
          "check": "The sound changes over time but still feels like one environment.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/adc32ff4-6d81-4159-9222-b85765445c78/pawn_speed_input.png",
            "caption": "Official UE5.8 wind MetaSound from Epic’s MetaSounds Quick Start. The tutorial builds an ambient wind graph and exposes a PawnSpeed input.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/metasounds-quick-start",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Add sparse gust behaviour",
          "where": "Content Drawer → choose/import the Sound Wave / Cue / MetaSound → drag into the level as Ambient Sound or add an Audio Component → Details",
          "do": "Introduce an occasional stronger gust or secondary layer using timing/random logic.",
          "why": "Rare events create texture and prevent constant density.",
          "see": null,
          "check": "Gusts occur irregularly rather than every few seconds exactly.",
          "troubleshoot": [
            "Judge the sound while moving through the space; a source that sounds fine while stationary may fade or spatialise badly in play."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/adc32ff4-6d81-4159-9222-b85765445c78/pawn_speed_input.png",
            "caption": "Official UE5.8 wind MetaSound from Epic’s MetaSounds Quick Start. The tutorial builds an ambient wind graph and exposes a PawnSpeed input.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/metasounds-quick-start",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Test in context",
          "where": "Level Editor → Play → walk toward, around and away from the source while listening on headphones/speakers",
          "do": "Walk through the level and balance wind against gameplay cues/dialogue.",
          "why": "An impressive solo sound can be exhausting in the mix.",
          "see": null,
          "check": "Important sounds remain intelligible.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
        {
          "title": "Capture a baseline",
          "where": "Return to the same saved gameplay camera / route → capture a matching frame so BEFORE and AFTER are comparable",
          "do": "Choose a repeatable camera/route and record frame time/FPS plus the quality settings.",
          "why": "Without a baseline you cannot prove an optimisation worked.",
          "see": null,
          "check": "You have a before measurement.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": {
            "src": "assets/book/best-practices/unreal-insights-spike.webp",
            "caption": "Profiling example: capture a repeatable performance trace before deciding what to optimise.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Identify the category",
          "where": "Run the same route/camera/settings → use Unreal Insights / stat unit / stat gpu / relevant profiler → record the measurement before changing anything",
          "do": "Use appropriate tools/view modes to decide whether the issue is GPU rendering/materials/lighting, CPU logic or asset/streaming related.",
          "why": "Different bottlenecks need different tools.",
          "see": null,
          "check": "You can name the most likely category with evidence.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": {
            "src": "assets/book/best-practices/unreal-insights-spike.webp",
            "caption": "Profiling example: capture a repeatable performance trace before deciding what to optimise.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Change one targeted cause",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Make one focused adjustment rather than reducing everything at once.",
          "why": "Single-variable changes preserve visual quality and make results interpretable.",
          "see": null,
          "check": "Only one major cause changed.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Repeat the same test",
          "where": "Run the same route/camera/settings → use Unreal Insights / stat unit / stat gpu / relevant profiler → record the measurement before changing anything",
          "do": "Run the same route/view/settings and capture the new measurement.",
          "why": "Comparability is the point of the loop.",
          "see": null,
          "check": "You have an after measurement.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": {
            "src": "assets/book/best-practices/stat-gpu-world-optimisation.webp",
            "caption": "GPU profiling example: compare the same scene/camera before and after a targeted change.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Keep or revert",
          "where": "Use the existing gameplay scene → change only the category named in the step → return to the same camera before judging the result",
          "do": "Keep the change only if the measured improvement is worth the visual/production trade-off.",
          "why": "Optimisation is a design decision, not a ritual.",
          "see": null,
          "check": "You can explain the trade-off in one sentence.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        }
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
        {
          "title": "Create a simple folder logic",
          "where": "Content Drawer → project folders / asset context menu / Reference Viewer / Fix Up Redirectors as appropriate; inspect dependencies before deletion",
          "do": "Group content by a consistent project structure rather than leaving assets in root/random import folders.",
          "why": "Predictable locations reduce search time and accidental duplication.",
          "see": null,
          "check": "A teammate can guess where common asset types live.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": {
            "src": "assets/book/best-practices/content-browser-folders.webp",
            "caption": "Project hygiene example: a consistent Content Browser structure makes work easier to find and hand over.",
            "kind": "book",
            "sourceTitle": "Unreal Engine 5 Best Practices — licensed college teaching figure"
          }
        },
        {
          "title": "Rename mystery assets",
          "where": "Content Drawer → project folders / asset context menu / Reference Viewer / Fix Up Redirectors as appropriate; inspect dependencies before deletion",
          "do": "Replace names such as NewMaterial_23 or Cube4 with readable type/purpose names.",
          "why": "Assets should communicate what they are before being opened.",
          "see": null,
          "check": "Search results are understandable at a glance.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": null
        },
        {
          "title": "Fix redirectors/dependencies safely",
          "where": "Content Drawer → project folders / asset context menu / Reference Viewer / Fix Up Redirectors as appropriate; inspect dependencies before deletion",
          "do": "Use Unreal’s tools to clean redirectors and inspect suspicious dependencies rather than deleting files blindly.",
          "why": "Renames/moves can leave references that make cleanup risky.",
          "see": null,
          "check": "The project opens without missing-reference surprises.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": {
            "src": "https://dev.epicgames.com/community/api/documentation/image/735ea5ed-7ae8-44e2-9d31-d257694acada?height=335&resizing_type=fill&width=1920",
            "caption": "Current UE5.8 Reference Viewer reference. Inspect dependencies before deleting/moving assets; use Fix Up Redirectors from Unreal rather than Explorer.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/reference-viewer-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Remove or quarantine unused junk",
          "where": "Content Drawer → project folders / asset context menu / Reference Viewer / Fix Up Redirectors as appropriate; inspect dependencies before deletion",
          "do": "Move clearly unused/test content to a review folder before final deletion.",
          "why": "Cleanup should be deliberate and recoverable.",
          "see": null,
          "check": "Production folders contain only intentional assets.",
          "troubleshoot": [
            "Change one targeted cause, then return to the same test view before deciding whether it was an improvement."
          ],
          "visual": {
            "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/187b2b57-12e8-4ae3-976d-bc3bf0985558/ue5_1-referenced-asset.png",
            "caption": "Official UE5.8 referenced-asset example. Use Reference Viewer before deciding that an asset is safe to remove.",
            "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/reference-viewer-in-unreal-engine",
            "sourceTitle": "Epic Games — Unreal Engine 5.8 Documentation",
            "kind": "epic"
          }
        },
        {
          "title": "Teammate test",
          "where": "Content Drawer → project folders / asset context menu / Reference Viewer / Fix Up Redirectors as appropriate; inspect dependencies before deletion",
          "do": "Give another student a short find-and-edit task without telling them where anything is.",
          "why": "Organisation is only good if someone else can understand it.",
          "see": null,
          "check": "They can find the requested mesh/material/sequence quickly.",
          "troubleshoot": [
            "Keep the camera, route or test condition consistent so the comparison means something."
          ],
          "visual": null
        }
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
  "roulette": [
    {
      "module": "world-design",
      "moduleTitle": "Level Design Foundations",
      "icon": "◇",
      "title": "No Arrows Allowed",
      "constraint": "No objective marker, waypoint beam or text sign.",
      "goal": "Guide a fresh player to the exit using only space, landmarks, light and route shape."
    },
    {
      "module": "world-design",
      "moduleTitle": "Level Design Foundations",
      "icon": "◇",
      "title": "Thirty-Second Fork",
      "constraint": "One room, two routes, one optional reward.",
      "goal": "Make players understand the main route within 30 seconds but still notice the optional path."
    },
    {
      "module": "world-design",
      "moduleTitle": "Level Design Foundations",
      "icon": "◇",
      "title": "Bad Level Surgery",
      "constraint": "Start from one intentionally confusing greybox.",
      "goal": "Fix it with only three edits. You must explain why each edit changes player behaviour."
    },
    {
      "module": "environment",
      "moduleTitle": "Environment Art & Set Dressing",
      "icon": "▦",
      "title": "Seven Props, One Story",
      "constraint": "Maximum seven movable props.",
      "goal": "Tell a clear before-the-player-arrived story."
    },
    {
      "module": "environment",
      "moduleTitle": "Environment Art & Set Dressing",
      "icon": "▦",
      "title": "The 30% Cut",
      "constraint": "Remove 30% of your dressing after you think it is finished.",
      "goal": "Make the scene clearer, not emptier."
    },
    {
      "module": "environment",
      "moduleTitle": "Environment Art & Set Dressing",
      "icon": "▦",
      "title": "Hero Asset Breakout",
      "constraint": "Everything except one object comes from the same modular kit.",
      "goal": "Use one unique object to create identity and narrative focus."
    },
    {
      "module": "materials",
      "moduleTitle": "Materials & Surfaces",
      "icon": "◫",
      "title": "One Master, Three Worlds",
      "constraint": "One master material only.",
      "goal": "Create clean, abandoned and rain-soaked variants using instances."
    },
    {
      "module": "materials",
      "moduleTitle": "Materials & Surfaces",
      "icon": "◫",
      "title": "No Colour Crutch",
      "constraint": "Temporarily desaturate the viewport.",
      "goal": "Keep metal, plastic, stone and wetness readable through value/roughness/normal response."
    },
    {
      "module": "materials",
      "moduleTitle": "Materials & Surfaces",
      "icon": "◫",
      "title": "Cause Before Grunge",
      "constraint": "Every stain or wear mark needs a physical reason.",
      "goal": "Delete decorative dirt that cannot be explained."
    },
    {
      "module": "lighting",
      "moduleTitle": "Lighting & Atmosphere",
      "icon": "☼",
      "title": "One Light Horror",
      "constraint": "One movable key light plus ambient/global light.",
      "goal": "Create readable tension without filling the room with point lights."
    },
    {
      "module": "lighting",
      "moduleTitle": "Lighting & Atmosphere",
      "icon": "☼",
      "title": "Mood Swap",
      "constraint": "Same geometry, camera and materials.",
      "goal": "Make “safe” and “dangerous” versions using only lighting/atmosphere."
    },
    {
      "module": "lighting",
      "moduleTitle": "Lighting & Atmosphere",
      "icon": "☼",
      "title": "No Post Process Rescue",
      "constraint": "Disable the Post Process Volume while judging.",
      "goal": "Make the base lighting work before grading."
    },
    {
      "module": "landscape",
      "moduleTitle": "Landscape, Terrain & Foliage",
      "icon": "≈",
      "title": "Terrain Before Foliage",
      "constraint": "No foliage or rocks until the route passes a playtest.",
      "goal": "Make the terrain alone communicate movement and destination."
    },
    {
      "module": "landscape",
      "moduleTitle": "Landscape, Terrain & Foliage",
      "icon": "≈",
      "title": "Three Costs",
      "constraint": "One valley, three traversable routes.",
      "goal": "Make each route trade time, safety or reward."
    },
    {
      "module": "landscape",
      "moduleTitle": "Landscape, Terrain & Foliage",
      "icon": "≈",
      "title": "Foliage Firewall",
      "constraint": "Dense biome, but the critical route can never disappear.",
      "goal": "Use density, species and clearing patterns as guidance."
    },
    {
      "module": "cinematics",
      "moduleTitle": "Sequencer & Cutscenes",
      "icon": "▶",
      "title": "Three Shots Only",
      "constraint": "Exactly three shots, maximum 20 seconds.",
      "goal": "Communicate place, threat and player goal."
    },
    {
      "module": "cinematics",
      "moduleTitle": "Sequencer & Cutscenes",
      "icon": "▶",
      "title": "One Lens",
      "constraint": "Pick one focal length and never change it.",
      "goal": "Create variety through staging, distance and movement instead."
    },
    {
      "module": "cinematics",
      "moduleTitle": "Sequencer & Cutscenes",
      "icon": "▶",
      "title": "No Fly-Through",
      "constraint": "No aimless camera travel.",
      "goal": "Every camera move must reveal new information or track meaningful action."
    },
    {
      "module": "audio",
      "moduleTitle": "Audio & Sound Design",
      "icon": "♪",
      "title": "Off-Screen Warning",
      "constraint": "Threat never appears on camera during the setup.",
      "goal": "Make the player understand direction and approach using sound only."
    },
    {
      "module": "audio",
      "moduleTitle": "Audio & Sound Design",
      "icon": "♪",
      "title": "Three-Layer Ambience",
      "constraint": "Exactly three looping layers.",
      "goal": "Create depth without turning the mix into mush."
    },
    {
      "module": "audio",
      "moduleTitle": "Audio & Sound Design",
      "icon": "♪",
      "title": "Silence Button",
      "constraint": "At one gameplay event, remove more sound than you add.",
      "goal": "Use absence as the strongest cue."
    },
    {
      "module": "polish",
      "moduleTitle": "Polish, Optimisation & Presentation",
      "icon": "✓",
      "title": "Fifteen-Minute Triage",
      "constraint": "15 minutes, maximum three changes.",
      "goal": "Improve the scene more than an hour of random tweaking."
    },
    {
      "module": "polish",
      "moduleTitle": "Polish, Optimisation & Presentation",
      "icon": "✓",
      "title": "Same Camera A/B",
      "constraint": "Lock the camera before the fix.",
      "goal": "Prove the change helped instead of relying on memory."
    },
    {
      "module": "polish",
      "moduleTitle": "Polish, Optimisation & Presentation",
      "icon": "✓",
      "title": "Budget Cut",
      "constraint": "Reduce one expensive visual category by 30%.",
      "goal": "Keep the player-facing design read intact."
    }
  ],
  "designLoop": [
    {
      "n": "01",
      "title": "LOOK",
      "text": "Study a real game and name the design job — not just the art style."
    },
    {
      "n": "02",
      "title": "STEAL THE PRINCIPLE",
      "text": "Turn the example into a transferable rule you can use in another genre."
    },
    {
      "n": "03",
      "title": "HEAR THE DESIGNERS",
      "text": "Watch or read the people who built shipped games explain the problem, trade-offs and iteration."
    },
    {
      "n": "04",
      "title": "RESEARCH",
      "text": "Collect your own evidence: screenshots, maps, sound notes, shot counts or references."
    },
    {
      "n": "05",
      "title": "BUILD",
      "text": "Use the focused UE5 recipes to construct one small, testable version."
    },
    {
      "n": "06",
      "title": "BREAK + TEST",
      "text": "Change a constraint, remove a crutch, or give it to another player without explaining."
    },
    {
      "n": "07",
      "title": "IMPROVE",
      "text": "Make one evidence-based revision and explain what changed for the player."
    }
  ]
};
