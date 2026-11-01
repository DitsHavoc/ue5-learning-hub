/* Mini-Project Mayhem • 2–13 November 2026. Designer Track belongs to this same jam. */
window.UE5_MINI_JAM_DATA = {
  "title": "Mini-Project Mayhem",
  "dates": "2–13 November 2026",
  "subtitle": "Choose a Mini-Project, grow it into a small original game, and prepare a finished demo. Pairs share two roles; solo students choose a smaller scope.",
  "starters": [
    {
      "project": "balloon-popper",
      "name": "Balloon Popper",
      "icon": "◉",
      "foundation": "Mouse interaction, popping and variables",
      "ideas": "Create endless balloons: score pops, respawn targets in a visible area, then add a timer and risky targets."
    },
    {
      "project": "loops",
      "name": "Loops & Spawning",
      "icon": "↻",
      "foundation": "Loops, spawning and repeating gameplay",
      "ideas": "Turn spawned cubes into five escalating waves, add a countdown and optionally randomise their positions."
    },
    {
      "project": "bowling",
      "name": "Bowling",
      "icon": "●",
      "foundation": "Physics, collisions and scoring",
      "ideas": "Count pins, reset the ball for three throws, add scoring and a bonus pin."
    },
    {
      "project": "clicker",
      "name": "Clicker",
      "icon": "✦",
      "foundation": "Clicking, numbers and progression",
      "ideas": "Buy Grannies that earn 1 point/sec, train them for more output and unlock other producers."
    }
  ],
  "rules": [
    "Start by trying one of the four original Mini-Projects. Understand its mechanic together; you do not need to commit to a final theme in the first two sessions.",
    "Keep it to one small level or playable space and one main gameplay mechanic.",
    "Add at least one meaningful gameplay change, using the guided Essential upgrades. A visual reskin alone does not count.",
    "Aim for a short, complete round (roughly 1–5 minutes) or a repeatable progression game such as Clicker. The player should understand the goal or see clear progress.",
    "Make the look your own. Credit anything you did not create."
  ],
  "milestones": [
    {
      "when": "Mon 2 Nov",
      "title": "Start and explore",
      "programmer": "Choose a Mini-Project. Follow its guided stages and get the original mechanic working.",
      "designer": "Follow Designer Track Session 1: test the four starter mechanics, record what players see, and explore possibilities. No final theme or finished model needed yet.",
      "check": "Pick a starter or shortlist two. Save a short playtest note and agree what each person does next; the game concept can remain provisional."
    },
    {
      "when": "Week 1",
      "title": "Build a working prototype",
      "programmer": "Complete the chosen tutorial and start the Essential upgrades: a score plus the first piece of the repeatable game loop.",
      "designer": "Complete Designer Track Session 2 without waiting for code, then select a direction together when the programmer has a working mechanic. Produce one reusable test asset.",
      "check": "By Fri 6 Nov: a playable prototype, even if it uses placeholders."
    },
    {
      "when": "Week 2",
      "title": "Finish the experience",
      "programmer": "Finish the repeatable game loop and playable end state. Add more Essential upgrades if time permits, then polish and fix bugs.",
      "designer": "Build and export the chosen art kit, mock up the HUD/shop, playtest the integrated game and record improvements. Deliver usable files, not just a mood board.",
      "check": "By Thu 12 Nov: playable from start to finish."
    },
    {
      "when": "Fri 13 Nov",
      "title": "Showcase",
      "programmer": "Prepare a working Windows build, or a reliable in-editor demo if packaging is blocked.",
      "designer": "Introduce the game, show the original vs final look, and explain key design choices.",
      "check": "Share your game, collect feedback and vote for the awards."
    }
  ],
  "deliverables": [
    "A playable Unreal game (packaged Windows build preferred; an in-editor demo is acceptable if packaging is blocked).",
    "An original visual identity with at least one student-created game asset or piece of UI.",
    "Evidence of the original tutorial and your gameplay extension (a short before/after demo or screenshots).",
    "A very short team handover: who made what, what changed, and one thing you would improve.",
    "Designer evidence: early mechanics review, two provisional visual ideas, a tested asset/UI, and a short playtest/fix note (lighter version for solo students)."
  ],
  "awards": [
    "Best Gameplay",
    "Best Visual Design",
    "Most Original",
    "Players’ Choice"
  ],
  "designerTrack": {
    "title": "Artist & Game Designer Track",
    "intro": "A full parallel pathway, not a few optional pictures. Begin immediately on your own PC even when your programmer is still learning the starter tutorial. Your first two sessions deliberately work WITHOUT a final game concept.",
    "sharedFolder": "Create a Teams folder called Designer Pack with subfolders 01_Research, 02_Concepts, 03_Exports, and 04_Testing. Use meaningful filenames such as target_variant_A.png; never overwrite your partner’s Unreal project.",
    "handoverRule": "Only the programmer edits the live Unreal project. The designer hands over PNG/FBX/TGA exports plus a one-sentence use and placement note. The programmer imports and tests a COPY; both decide if the asset improves gameplay.",
    "soloRule": "Solo students can follow these missions in shorter bursts: complete one early test and one simple visual experiment, then make ONE polished original asset/UI element and run one short playtest. They do not need to match a two-person studio’s asset quantity.",
    "missions": [
      {
        "id": "observe",
        "when": "Session 1 — before the idea is decided",
        "title": "Play, observe and find the opportunities",
        "independent": true,
        "goal": "Discover what the starting game actually does and what a player might need. Produce useful evidence without choosing a story, genre or final style.",
        "steps": [
          {
            "title": "Create a small test sheet",
            "where": "Teams → Designer Pack → 01_Research; Word/OneNote or a simple text file.",
            "do": "Make a four-column table: What I did / What the game showed / What confused me / One possible improvement. Leave room for six short observations.",
            "check": "The sheet is ready to fill in, with no final game theme or elaborate design document required."
          },
          {
            "title": "Try the starter and watch another player",
            "where": "Open whichever original Mini-Project your pair is considering; or watch the programmer demo the working part.",
            "do": "Spend 15–20 minutes trying the main input and deliberately making mistakes. Ask someone else to try it without hints. Write at least three observed facts (e.g. no clear score, hard-to-see target, no indication that a purchase worked). If no playable build exists, inspect screenshots/tutorial pages and predict two problems to test later.",
            "check": "Three observations describe things seen or tested, not invented criticism."
          },
          {
            "title": "Sketch two ways to improve readability",
            "where": "Photoshop, pencil or OneNote → Designer Pack → 01_Research.",
            "do": "Make two QUICK thumbnails of the same game screen. One should show clearer player feedback (score, timer, cost or turns); the other a stronger visual focus (target, path, shop button or pins). Use basic rectangles and labels; no polished art yet.",
            "check": "Both thumbnails can be understood in under 10 seconds, even if the final game concept changes."
          },
          {
            "title": "Run a five-minute partner review",
            "where": "With the programmer at the end of the lesson or via a Teams message.",
            "do": "Show the observations and thumbnails; ask which gameplay information will actually exist in the first playable upgrade. Agree on ONE low-risk design experiment to try in the next session. Keep both visual possibilities open.",
            "check": "Your partner can name one usability problem and one possible visual fix."
          }
        ],
        "deliver": "A six-row observation sheet, two rough screen thumbnails, and one short partner handover.",
        "handover": "“I saw ___. My first safe design experiment will be ___, and it does not depend on the final theme.”",
        "solo": "Observe your own play and test the controls with a classmate if possible; two observations and one annotated thumbnail are enough."
      },
      {
        "id": "style-lab",
        "when": "Session 2 — still no final idea required",
        "title": "Prototype two looks and export a reusable kit",
        "independent": true,
        "goal": "Make real design work before the game has a name. Learn the export workflow and test two contrasting visual directions without committing to either.",
        "steps": [
          {
            "title": "Set up two distinct looks",
            "where": "Photoshop → new 1280×720 canvas (or pencil thumbnails).",
            "do": "Duplicate the same simple starter-game layout into two versions. Try a clear contrasting palette and a different style of text/shape (e.g. clean arcade versus retro-industrial). Label what the player clicks and where the score would appear. Avoid copying another game’s logo.",
            "check": "A and B use the SAME layout, so your partner can compare readability rather than two unrelated ideas."
          },
          {
            "title": "Create one reusable game graphic",
            "where": "Photoshop → a NEW 512×512 transparent canvas.",
            "do": "Draw a simple original icon, button face, target decal or upgrade symbol. Use bold shapes and a clear silhouette, not small paragraphs of text. Save the editable PSD and export a transparent PNG (for example ui_test_A.png).",
            "check": "The PNG has transparency and stays recognisable at roughly 64×64; the PSD remains editable for a later theme."
          },
          {
            "title": "Try a basic 3D option if useful",
            "where": "3ds Max, optional if the starter needs 3D targets or props.",
            "do": "Make one very simple low-poly prop from primitives (target, pin topper, token or arena sign). Keep the scale easy to understand, reset transforms as appropriate, save the editable .max file, and export FBX with a plain material. Do not replace the programmer’s project files.",
            "check": "One FBX opens in a fresh Max scene or imports as a recognisable test mesh; if you are primarily a 2D artist, use the PNG instead."
          },
          {
            "title": "Test and compare, not just collect",
            "where": "Teams → 02_Concepts / 03_Exports; use an Unreal import test only when programmer is ready.",
            "do": "Put A and B mock-ups side by side. Ask two classmates which object they would click and which number tells them progress. Record their answers. Place the PSD/source and PNG (or FBX) in separate Source/Exports folders. Send the programmer one TEST asset and what it is for.",
            "check": "There is a usable export, two quick comparison responses and a Teams handover. No final game idea is necessary."
          }
        ],
        "deliver": "Two comparable visual style samples, one original editable graphic or mesh, one tested export and short feedback.",
        "handover": "“Test file ___ is for ___. Import it only as a trial; we can recolour or replace it later.”",
        "solo": "Make one style sample and one transparent PNG rather than two full mock-ups and a 3D model."
      },
      {
        "id": "choose",
        "when": "After the starter mechanic works",
        "title": "Choose the direction with your programmer",
        "independent": false,
        "goal": "Turn test evidence into a realistic game identity and avoid designing assets for features that will never be built.",
        "steps": [
          {
            "title": "Show two possibilities",
            "where": "Your Session 1 notes and Session 2 style samples.",
            "do": "Pitch two one-sentence variations using the SAME working mechanic. Example: “Click targets for waves of points” versus “Click parts to repair a robot”. Explain which one would be simplest to finish.",
            "check": "Each idea reuses the original game loop; neither demands a new genre or a new level."
          },
          {
            "title": "Confirm what actually exists",
            "where": "Play the programmer’s working starter or first Essential upgrade.",
            "do": "Ask which variables, widgets and interactions are REAL already. Circle one core mechanic and one required next upgrade. Drop any artwork depending on unbuilt mechanics.",
            "check": "You can point to a functioning interaction and name the next programmed change."
          },
          {
            "title": "Pick one small art direction",
            "where": "Designer Pack → 02_Concepts.",
            "do": "Choose the more achievable idea. Make a single annotated screen mock-up with target/interactive area, score or cost, timer/turns if relevant, and a small amount of scenery. Write a maximum three-item art list: primary game asset, HUD/shop visuals, feedback effect.",
            "check": "The chosen mock-up is readable and its three assets could fit into the remaining two-week project."
          },
          {
            "title": "Agree the first import",
            "where": "Teams handover message or quick face-to-face stand-up.",
            "do": "Agree the name, file type, rough size and deadline for one FIRST asset. Programmer confirms where it will appear in Unreal. Avoid handing over five finished assets at once.",
            "check": "Both people know the next asset and the gameplay it supports."
          }
        ],
        "deliver": "One selected concept, one annotated mock-up, three-item maximum art list and named first handover.",
        "handover": "“We chose ___ because ___. I will export ___ first; you will test it in ___.”",
        "solo": "Make one selected mock-up and one two-item art list; prioritise finishing the game logic."
      },
      {
        "id": "asset-sprint",
        "when": "When first gameplay upgrade is working",
        "title": "Make and test the first real game asset",
        "independent": false,
        "goal": "Replace a placeholder with art that improves the actual game, while keeping the coder focused on gameplay.",
        "steps": [
          {
            "title": "Start with the project-specific kit",
            "where": "Select one of the four starter-game kits below.",
            "do": "Choose its MINIMUM primary visual asset first. Make it in Photoshop or 3ds Max; use the game’s actual target size and camera rather than creating a huge environment. Keep an editable source file.",
            "check": "The asset has a single purpose tied to the working game, such as a target, shop icon or special pin."
          },
          {
            "title": "Export at a useful size",
            "where": "Designer Pack → 03_Exports.",
            "do": "For 2D use PNG with transparency (512×512 for a simple icon, or 1280×720 for a background). For 3D use FBX and supply associated PNG/TGA textures if needed. Use clear names and keep source PSD/MAX files separate from exports.",
            "check": "The programmer can identify what each file is without asking; nothing requires overwriting an existing engine asset."
          },
          {
            "title": "Hand over one asset, then compare",
            "where": "Programmer’s local Unreal project → import COPY, not your source files.",
            "do": "Ask the programmer to import the first asset, place it where the placeholder was and send a screenshot. Compare before/after at normal gameplay size; note any readability, scaling, collision or pivot problem.",
            "check": "The asset visibly improves the scene OR you have a concrete fix list; a file in Teams alone is not “integrated”."
          },
          {
            "title": "Revise the asset once",
            "where": "Photoshop/3ds Max → Teams → 03_Exports.",
            "do": "Make the single most important fix, update the export and notify your partner to reimport. Save a screenshot of the second test. Only start other decorative pieces if the game still has time.",
            "check": "One original asset is tested in the real scene and has a before/after screenshot."
          }
        ],
        "deliver": "One integrated original asset, editable source, export and screenshot showing it working in Unreal.",
        "handover": "“File ___ replaces ___. Here is the scale/use note; test that it stays visible and clickable.”",
        "solo": "Make one small 2D icon/material first; only make a 3D model if it is central to your game."
      },
      {
        "id": "ux-polish",
        "when": "As the main loop becomes playable",
        "title": "Own interface, feedback and player clarity",
        "independent": false,
        "goal": "Make the game understandable without adding extra Blueprint systems for the programmer.",
        "steps": [
          {
            "title": "Check the player knows what to do",
            "where": "Play the integrated game with someone unfamiliar with your project.",
            "do": "Do not explain anything for the first 30 seconds. Ask: What would you click/press? How do you know you scored? How do you know it ended? Note exactly where the tester hesitated.",
            "check": "Record at least two observations and one fix that does not need a new game mechanic."
          },
          {
            "title": "Design the actual screen",
            "where": "Photoshop → 1280×720 overlay based on a gameplay screenshot.",
            "do": "Position existing score, timer, throws, wave, or production numbers where they are visible. Draw one simple panel/label style around the REAL widget values. Make sure the clickable world and play area remain unobscured.",
            "check": "The mock-up shows only values already implemented or scheduled in the Essential upgrade."
          },
          {
            "title": "Export simple feedback",
            "where": "Photoshop, or suitable college audio library with attribution.",
            "do": "Prepare one transparent pop/hit/purchase image or button state, and optionally a short appropriately licensed effect sound. Put the exports and any credit notes in Teams. No animation system or sound editing is required to pass.",
            "check": "There is one clear visual feedback item that could be integrated without rewriting gameplay."
          },
          {
            "title": "Test one visible improvement",
            "where": "Programmer imports and updates existing HUD widgets when ready.",
            "do": "Compare the game before/after. Ensure UMG panels do not intercept target clicks, the shop buttons remain clickable and the score/clock always show real numbers. If an integration issue appears, document it rather than taking control of the coder’s Blueprint graph.",
            "check": "A player can name the goal and track progress within 10 seconds; no existing input becomes blocked."
          }
        ],
        "deliver": "A readable UI mock-up, one feedback asset, two playtest observations and a documented fix.",
        "handover": "“The player missed ___. I recommend changing ___ first; it uses the current widget, not a second HUD.”",
        "solo": "One legibility improvement and one quick tester note are enough; avoid building a second UI system."
      },
      {
        "id": "showcase",
        "when": "Final two sessions and Friday showcase",
        "title": "Playtest, polish and present",
        "independent": false,
        "goal": "Become the team’s quality lead and help ship a finished small game, not an unfinished collection of art.",
        "steps": [
          {
            "title": "Run a complete playthrough",
            "where": "On the programmer PC when a playable build is available.",
            "do": "Play from launch to win/timeout or, for Clicker, show a complete short purchase-and-income progression. Try a deliberate mistake. Check restart, visibility, score and controls. Write down three issues ranked Must fix / Nice to fix.",
            "check": "The team knows the most important remaining issue and can reproduce it."
          },
          {
            "title": "Fix the biggest visual/UX issue",
            "where": "Your editable artwork and the programmer’s import process.",
            "do": "Choose one fix from the test: contrast, target size, cropped text, confusing button, missing indicator or hard-to-read score. Make and re-export the corrected asset or mock-up.",
            "check": "One previously observed issue is measurably clearer; avoid late changes that break the game."
          },
          {
            "title": "Gather the evidence",
            "where": "Teams → 04_Testing.",
            "do": "Save two screenshots: original tutorial starter and your final version. Add a brief note: What changed? What you personally made? How the player knows what to do? Include asset/source credits.",
            "check": "Another pair can understand the before-and-after without a long explanation."
          },
          {
            "title": "Prepare the shared demo",
            "where": "With the programmer and your screenshots.",
            "do": "Rehearse a 2–5 minute showcase. Programmer demonstrates the working mechanic; designer explains one visual decision and one playtest improvement. If packaging fails, use a reliable in-editor demonstration.",
            "check": "Both students have a clear speaking part and a finished game to show."
          }
        ],
        "deliver": "A final playtest/fix note, two comparison screenshots, correctly named export/source files and a 2–5 minute demo contribution.",
        "handover": "“The game is ready to show because ___. I made ___. Playtest feedback changed ___.”",
        "solo": "One test, one screenshot comparison and a short explanation of the asset you made."
      }
    ],
    "kits": [
      {
        "project": "balloon-popper",
        "title": "Balloon Popper",
        "minimum": "One distinct readable balloon/target material or icon plus a simple score/timer layout.",
        "firstAsset": "balloon_symbol_A.png (512×512 transparent) or a distinctive M_Balloon texture concept",
        "tasks": [
          "Study the original red balloon in motion: sketch two contrasting shapes/material directions that remain visible against the current sky/background.",
          "Create one original balloon mark, pattern or burst graphic in Photoshop. Test it at the actual screen size before exporting.",
          "Mock up Score, Time and Play Again with clear spacing; do not cover the balloon playfield with an opaque panel.",
          "When the 60-second game works, playtest the end screen. Only afterwards consider a purple/blue danger-balloon design with a warning motif."
        ],
        "handover": "Share PNG/TGA or FBX, note the existing BalloonModel component and remind the programmer to keep the original click collision and growth logic.",
        "stretch": "A safe/danger warning symbol, pop flash and themed background after the basic red-balloon game is playable."
      },
      {
        "project": "bowling",
        "title": "Bowling",
        "minimum": "One customised bowling-ball or pin material, a readable Score/Pins/Throws HUD layout, and a clear bonus-pin visual.",
        "firstAsset": "M_Ball_Design.png (e.g. 512×512 pattern) or BonusPin_Decal.png",
        "tasks": [
          "Observe the actual physics lane and camera. Photograph a shot and mark where pins are difficult to see.",
          "Design two lane/pin palettes and test the contrast: bonus pin must be distinguishable from standard pins even from the camera distance.",
          "Make a ball material or bonus-pin decal first, then prepare one small lane sign/prop only if the game is progressing.",
          "Mock up Score, Pins Down and Throws Left. Watch two throws and check the bonus pin adds 3 but only one pin to the count."
        ],
        "handover": "Export a PNG/TGA material/decal (FBX only if a genuinely new prop is needed); ask the programmer to test it without changing the pin Model collision or ball physics.",
        "stretch": "Themed lane panels, subtle sound cue and a polished result overlay once all three throws work."
      },
      {
        "project": "clicker",
        "title": "Clicker",
        "minimum": "One clear main-click object and a small shop card showing purchase cost and production per second.",
        "firstAsset": "click_object_A.png (512×512 transparent) and optionally shop_card_A.png",
        "tasks": [
          "Study the original ClickerGameUI and locate the main button, existing ScoreText and proposed shop space. Make two fast theme thumbnails.",
          "Draw a readable main-click object with a second pressed state, exported as separate transparent PNGs if useful.",
          "Mock up the Buy Upgrade and Buy Granny cards using the actual numbers. Make it obvious which costs points and which earns points/sec.",
          "Test after a purchase: players should see a reduced balance, stronger clicks, and later an increasing auto-income number. A Granny icon should not hide the price."
        ],
        "handover": "Share two PNGs plus a screen mock-up and specify which existing ClickerGameUI Button/Image each belongs to; the programmer keeps the original GameMode main click handler.",
        "stretch": "Farms/other producer icons, training visuals and a 500 lifetime-point badge after the minimum shop+Granny game works."
      },
      {
        "project": "loops",
        "title": "Loops & Spawning",
        "minimum": "One readable target asset/material and a simple Wave/Targets/Time/Hits HUD arrangement.",
        "firstAsset": "target_face_A.png (512×512 transparent) or TargetMesh_A.fbx",
        "tasks": [
          "Look at the fixed Cam_TargetRush view and nine-slot grid. Sketch two target treatments while keeping the target large and easy to click.",
          "Create a patterned target face or small 3D target; keep the collision shape/scale suitable for the default cube placeholders.",
          "Draw a lightweight arcade arena/backdrop that does NOT hide nine visible targets or block click traces.",
          "Make a mock-up of Wave, Targets, Time and Hits. Run a late-wave test so all nine targets can be spotted immediately."
        ],
        "handover": "Share a PNG or FBX and a screenshot showing safe spacing. The programmer replaces only BP_ClickTarget art, not BP_Box or the wave spawning logic.",
        "stretch": "Wave announcement card, hit feedback effect and themed background once the five-wave loop works."
      }
    ]
  }
};
