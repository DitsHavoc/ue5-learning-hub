// UE5 Learning Hub v3.51.0 — Sequencer Master Guide
// Long-form Unreal Learning workflow. Designer Studio remains the place for cinematic design decisions.
(() => {
  const tools = window.UE5_TUTORIAL_DATA;
  const design = window.UE5_DESIGN_DATA;
  if (!tools || !Array.isArray(tools.tutorials) || !design || !Array.isArray(design.modules)) return;
  const tutorial = {
  "id": "sequencer-master-guide",
  "title": "Sequencer & Cinematics: From First Shot to Final Render",
  "category": "design-cinematics",
  "designModule": null,
  "unrealHome": true,
  "libraryHidden": true,
  "unrealSection": "Sequencer & Cinematics",
  "unrealIntroTitle": "Build one short cinematic from an empty Level Sequence to a finished render",
  "unrealCallout": "Work in order: create the sequence, animate one object, build the camera work, then render. The reference images support the workflow; where an older book screenshot differs from UE5.8, follow the written UE5.8 path and Epic reference.",
  "unrealNextEyebrow": "NEXT • DESIGN THE CUTSCENE",
  "unrealNextTitle": "Now make the camera choices mean something",
  "unrealNextText": "This guide teaches the Unreal Sequencer workflow. Unreal Designer joins it to shot purpose, framing, lens language, pacing, continuity, the applied Studio Build and evidence from playback or critique.",
  "unrealNextHref": "#/unreal-designer/cinematics",
  "unrealNextLabel": "Apply Cinematics in Unreal Designer →",
  "duration": "75–100 min",
  "difficulty": "Beginner → Intermediate",
  "summary": "Create a UE5.8 Level Sequence, animate an Actor, add Cine Cameras and Camera Cuts, keyframe a purposeful camera move, control lens/focus, then export the finished sequence with Movie Render Queue.",
  "uses": [
    "Sequencer",
    "Level Sequence",
    "Cine Camera",
    "Camera Cuts",
    "Keyframes",
    "Curve Editor",
    "Movie Render Queue"
  ],
  "referenceLesson": null,
  "steps": [
    {
      "title": "Create a Level Sequence and open Sequencer",
      "where": "Content Drawer → create a folder such as Cinematics → Add (+) / right-click empty space → Cinematics → Level Sequence",
      "do": "Create LS_Sequencer_Practice, save it, then double-click the asset to open Sequencer.",
      "doList": [
        "Use a Third Person practice level or another small level you already understand.",
        "For this guide, set a simple 5-second working range. At 30 fps that is frames 0–150.",
        "Keep the Level Sequence asset in a Cinematics/Sequences folder rather than loose in the project root."
      ],
      "see": "Sequencer opens along the bottom of the Unreal Editor with an empty track area, timeline/playhead and toolbar.",
      "why": "A Level Sequence asset stores the tracks, camera bindings, keys and timing. Starting with a small named sequence makes every later test easier to diagnose.",
      "check": "Scrub the playhead and confirm the sequence is open, saved and showing the intended working range.",
      "troubleshoot": [
        "If Sequencer does not open, double-click the Level Sequence asset rather than a Level Sequence Actor in the Outliner.",
        "If your course/project uses a different frame rate, keep it and use the equivalent five-second frame range."
      ],
      "visual": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ebbb1c16-6495-448b-8fa3-f19af40e5d67/createseq.png",
          "caption": "Epic UE5.8 — create a Level Sequence from the Cinematics menu in the Content Browser.",
          "kind": "epic",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-make-movies-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Sequencer Basics"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/6b60fd77-8c0c-4f6e-abce-e9dceaddf151/seqopen.png",
          "caption": "Epic UE5.8 — an opened Level Sequence displays the Sequencer Editor under the main viewport.",
          "kind": "epic",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-make-movies-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Sequencer Basics"
        }
      ]
    },
    {
      "title": "Learn the four parts you actually need first",
      "where": "Sequencer panel",
      "do": "Identify the track list on the left, timeline and playhead, keyframe controls, and the Camera Cuts track area. Ignore advanced buttons until you need them.",
      "doList": [
        "Tracks describe what is being controlled.",
        "Sections show when a track/camera is active.",
        "Keys store values at specific times.",
        "The playhead is the current frame you are viewing/editing."
      ],
      "see": "Sequencer stops looking like one giant panel: you can point to a track, section, key and playhead separately.",
      "why": "Students get lost when every icon has equal importance. These four ideas explain most beginner Sequencer work.",
      "check": "Without clicking, point to where you would add an Actor, where you would see a camera cut, and where a Transform key would appear.",
      "troubleshoot": [
        "If the panel is too cramped, increase its height before following the guide.",
        "Do not turn on Auto Key yet; first learn what a deliberate manual key looks like."
      ],
      "visual": [
        {
          "src": "assets/book/best-practices/sequencer-key-features.webp",
          "caption": "Licensed reference — Camera Cuts, Curve Editor access and property tracks. Use it for recognition; the written guide follows current UE5.8 terminology.",
          "kind": "book",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference"
        }
      ]
    },
    {
      "title": "Animate one Actor before touching the camera",
      "where": "Select an obvious Actor in the level → Sequencer → + Add → Actor to Sequencer",
      "do": "Add a cube or other simple Actor to Sequencer. Expand Transform, put the playhead at frame 0 and add a Location key. Move to the end of the 5-second range, move the Actor, then add/update the end Location key.",
      "see": "Scrubbing the timeline moves the Actor between two positions.",
      "why": "This proves the core Sequencer idea with the simplest possible target: a value at one time interpolates towards a value at another time.",
      "check": "At frame 0 the Actor is at the start; at the end it is at the destination; scrubbing between them produces movement.",
      "troubleshoot": [
        "If the Actor jumps rather than moves, confirm you have two different Location keys at different frames.",
        "If moving the Actor changes the level but not the sequence, make sure the Actor has been added to Sequencer and the correct Transform track is selected."
      ],
      "visual": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ecf6c18f-a737-4020-9be1-a0fdfb8c4384/track_actor_to_sequencer_cube.png",
          "caption": "Epic UE5.8 — add a selected Actor to Sequencer so its properties can be animated.",
          "kind": "epic",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-camera-cuts-using-sequencer-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Creating Camera Cuts"
        },
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/7ab02527-186a-413c-8310-3194b091a310/set_start_keyframe_cube.png",
          "caption": "Epic UE5.8 — add the first Transform/Location key at the start of the sequence.",
          "kind": "epic",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-camera-cuts-using-sequencer-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Creating Camera Cuts"
        }
      ]
    },
    {
      "title": "Create a Cine Camera and let Sequencer make the first Camera Cut",
      "where": "Sequencer toolbar → Create Camera",
      "do": "Click Create Camera. Rename the new Cine Camera Actor to something useful such as Cam_Wide.",
      "doList": [
        "Creating a camera from Sequencer also creates a Camera Cuts track if one does not already exist.",
        "Keep the first Camera Cut section covering the beginning of the sequence.",
        "Use the camera-lock/pilot view so the main viewport shows what the active Cine Camera sees."
      ],
      "see": "The Cine Camera has its own track and a Camera Cuts section is bound to it.",
      "why": "The camera track contains camera properties; Camera Cuts decides which camera is actually shown to the audience.",
      "check": "Scrub the sequence while camera lock is active. The main viewport should show the Cam_Wide view.",
      "troubleshoot": [
        "If you see the normal gameplay/editor view, check the Camera Cuts section exists and covers the current frame.",
        "If the wrong camera is active, inspect which camera is bound to the Camera Cuts section."
      ],
      "visual": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/732cfd97-5304-45c4-a384-5543eca376c8/add_first_camera.png",
          "caption": "Epic UE5.8 — Create Camera adds a Cine Camera Actor, its track and the Camera Cuts track/binding.",
          "kind": "epic",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-camera-cuts-using-sequencer-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Creating Camera Cuts"
        }
      ]
    },
    {
      "title": "Build one purposeful camera move with two Transform keys",
      "where": "Cam_Wide → Transform track → frame 0 and final frame",
      "do": "At frame 0, pilot the camera and compose a clear starting frame, then key Transform. Move to the final frame, reposition/rotate the camera to reveal new information, then add/update the second Transform key.",
      "doList": [
        "Keep the first move simple: push in, pull back or slide laterally.",
        "Do not add extra keys until the start and end frames both work as still compositions.",
        "Play the shot at normal speed, not only by scrubbing."
      ],
      "see": "The camera travels smoothly from one composition to another.",
      "why": "A camera move is useful when the audience learns or feels something different at the end, not because movement itself looks impressive.",
      "check": "Take a mental still of frame 0 and the final frame. You should be able to say what changed for the viewer.",
      "troubleshoot": [
        "If rotation spins the long way round, simplify the rotation and inspect the keyed channels.",
        "If the camera passes through geometry, redesign the path instead of speeding through the collision."
      ],
      "visual": [
        {
          "src": "assets/book/best-practices/sequencer-closeup-shot.webp",
          "caption": "Licensed reference — a strong final frame should work as a composition even when the camera is not moving.",
          "kind": "book",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference"
        }
      ]
    },
    {
      "title": "Add a second camera and make a real cut",
      "where": "Sequencer toolbar → Create Camera again → Camera Cuts track",
      "do": "Create Cam_Detail (or Cam_Medium), frame it differently, then split/trim the Camera Cuts timing so the first camera ends and the second camera begins.",
      "doList": [
        "For a simple five-second test, try Wide for roughly the first 3 seconds and Detail for the final 2 seconds.",
        "Do not leave gaps in Camera Cuts unless you deliberately want to blend/return to another view.",
        "Play from the start and watch the cut at normal speed."
      ],
      "see": "The viewport switches from the first camera to the second at the cut point.",
      "why": "A cut should add new information: context → action, action → detail, or question → answer.",
      "check": "Pause on each side of the cut. The two shots should have clearly different jobs.",
      "troubleshoot": [
        "If the cut does not change the view, confirm the second Camera Cut section is bound to Cam_Detail.",
        "If the cut feels like a jump to almost the same shot, change angle, shot size or focal length."
      ],
      "visual": [
        {
          "src": "https://d1iv7db44yhgxn.cloudfront.net/documentation/images/44f97fe3-6486-414b-96e1-71d1c51ec035/finished_camera_cuts.gif",
          "caption": "Epic UE5.8 — a completed Camera Cuts track switches between multiple Cine Cameras over time.",
          "kind": "epic",
          "sourceUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-camera-cuts-using-sequencer-in-unreal-engine",
          "sourceTitle": "Epic UE5.8 — Creating Camera Cuts"
        }
      ]
    },
    {
      "title": "Use focal length and framing deliberately",
      "where": "Select Cine Camera Actor → Details → Current Camera Settings / Lens Settings / Current Focal Length",
      "do": "Compare a wider focal length with a longer focal length while keeping the same subject important in frame. Then choose the lens that matches the shot's job.",
      "doList": [
        "Wide lenses show more environment and exaggerate spatial depth.",
        "Longer lenses narrow the field of view and visually compress space.",
        "Turn on composition/safe-frame overlays when useful, then place the subject deliberately rather than leaving them centred by accident."
      ],
      "see": "The same subject/environment relationship changes noticeably even before you animate anything.",
      "why": "Lens choice changes how space reads. Camera distance and focal length are storytelling tools, not just ways to make the subject fit.",
      "check": "Capture two lens tests and explain which one better communicates context, intimacy, threat or isolation.",
      "troubleshoot": [
        "Do not use extreme focal lengths just because the effect is dramatic.",
        "If the subject becomes distorted, move the camera and choose a more appropriate lens rather than forcing the composition."
      ],
      "visual": [
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p436.webp",
          "caption": "Virtual Filmmaking reference — the same type of subject reads very differently through a wide 12 mm lens and a longer 50 mm lens.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        },
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p435.webp",
          "caption": "Virtual Filmmaking reference — composition/safe-frame overlays help you judge where important action sits inside the final frame.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        },
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p438.webp",
          "caption": "Virtual Filmmaking reference — judge the final frame as an image, not only as a moving viewport.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        }
      ]
    },
    {
      "title": "Control focus and, when useful, Look At Tracking",
      "where": "Cine Camera Actor → Details → Focus Settings and Look at Tracking Settings",
      "do": "For a simple character/object shot, set an appropriate focus method and focus distance. If the camera must keep aiming at a moving subject, enable Look at Tracking and choose the Actor to Track.",
      "doList": [
        "Use Manual or Tracking focus deliberately; do not accept accidental blur.",
        "For Look at Tracking, set Actor to Track and test the framing while the subject moves.",
        "Use Relative Offset when you need the camera to aim at a point above/beside the Actor origin."
      ],
      "see": "The subject remains deliberately sharp and/or the camera keeps its aim on the chosen Actor.",
      "why": "Focus directs attention. Look At Tracking can reduce manual rotation keying, but it should support the shot rather than make every camera feel robotic.",
      "check": "Move/scrub the subject. The intended subject stays framed and the focus looks intentional.",
      "troubleshoot": [
        "If tracking points at the Actor's feet/origin, use Relative Offset.",
        "If tracking snaps too mechanically, adjust the shot or use an interpolation speed rather than adding random rotation keys."
      ],
      "visual": [
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p437.webp",
          "caption": "Virtual Filmmaking reference — aperture/diaphragm shape influences the character of out-of-focus highlights; use depth of field as emphasis, not decoration.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        },
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p430.webp",
          "caption": "Virtual Filmmaking reference — Enable Look at Tracking, choose the Actor to Track and use Relative Offset when the Actor origin is not the framing point you want.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        }
      ]
    },
    {
      "title": "Refine timing with interpolation and the Curve Editor",
      "where": "Sequencer → select Transform keys → key interpolation / Curve Editor",
      "do": "Play the camera/Actor movement once with the default interpolation, then open the Curve Editor and inspect how the keyed value changes over time. Use Auto/appropriate tangents for a smooth starter move.",
      "doList": [
        "Do not add lots of keys to fix one bad curve.",
        "Move key timing before changing every tangent.",
        "Use linear motion only when a constant mechanical speed is actually the goal."
      ],
      "see": "The movement accelerates/decelerates in a controlled way rather than feeling like a hard robotic slide.",
      "why": "Key positions define where/when; interpolation defines how the value travels between them.",
      "check": "Watch at real-time speed. The motion should start, travel and settle without accidental overshoot.",
      "troubleshoot": [
        "If Auto tangents cause a strange arc/overshoot, simplify the keys or adjust the relevant channel in Curve Editor.",
        "If the shot still feels too slow, shorten the timing before adding more movement."
      ],
      "visual": [
        {
          "src": "assets/book/best-practices/sequencer-key-features.webp",
          "caption": "Licensed reference — Sequencer's Curve Editor is used to fine-tune key values and tangents; property tracks can animate much more than cameras.",
          "kind": "book",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference"
        },
        {
          "src": "assets/book/best-practices/sequencer-camera-timing.webp",
          "caption": "Licensed reference — complex character/Control Rig tracks show the same principle at a larger scale: many properties can be keyed and timed inside one sequence.",
          "kind": "book",
          "sourceTitle": "Unreal Engine 5 Best Practices (2025) — licensed college reference"
        }
      ]
    },
    {
      "title": "Set the final playback/render range before exporting",
      "where": "Sequencer playback range and Movie Render Queue output settings",
      "do": "Trim the sequence so it starts on the first useful frame and ends immediately after the final useful frame. When rendering only part of a sequence, use a custom playback range deliberately.",
      "see": "There is no accidental dead time before/after the cinematic and the render range matches the intended shot duration.",
      "why": "Rendering extra frames wastes time and often creates black/still frames that students later have to trim in an editor.",
      "check": "Play from the first frame to the last. The first and last frames are both intentional.",
      "troubleshoot": [
        "If the render includes unwanted frames, check both Sequencer's playback range and any Movie Render Queue custom range override.",
        "Do not use a custom range until you understand why it differs from the sequence's normal playback range."
      ],
      "visual": [
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p445.webp",
          "caption": "Virtual Filmmaking reference — Movie Render Queue can override the sequence range with a custom start/end frame when a specific section needs rendering.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        }
      ]
    },
    {
      "title": "Enable and open Movie Render Queue",
      "where": "Edit / Settings → Plugins → search Movie Render Queue → enable if required → restart; then Window → Cinematics → Movie Render Queue",
      "do": "Make sure Movie Render Queue is enabled, restart Unreal if prompted, then open it from Window → Cinematics.",
      "see": "Movie Render Queue opens and is ready for a Level Sequence job.",
      "why": "MRQ is Unreal's high-quality offline render workflow and is better suited to final cinematic output than relying on viewport capture.",
      "check": "Your sequence can be added/selected as a render job.",
      "troubleshoot": [
        "If Movie Render Queue is missing from the Window → Cinematics menu, check the plugin is enabled and Unreal was restarted.",
        "UE5.8 includes a streamlined Queue interface, so an older reference screenshot may not match every panel position exactly; follow the current menu names."
      ],
      "visual": [
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p439.webp",
          "caption": "Virtual Filmmaking reference — open Plugins from the editor settings/menu area.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        },
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p440.webp",
          "caption": "Virtual Filmmaking reference — search for and enable Movie Render Queue if it is not already enabled in the project.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        },
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p441.webp",
          "caption": "Virtual Filmmaking reference — Window → Cinematics → Movie Render Queue. This menu path remains the current UE5.8 route documented by Epic.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        }
      ]
    },
    {
      "title": "Choose output settings and render the final sequence",
      "where": "Movie Render Queue → add/select your Level Sequence job → Settings / basic queue controls",
      "do": "Set an output folder, sensible resolution and output format for the task, then render locally. For classroom review, a PNG/JPG image sequence or supported video pipeline is usually easier to diagnose than an unexplained custom codec.",
      "doList": [
        "Confirm the correct Map and Level Sequence are attached to the job.",
        "Set Output Directory and resolution deliberately.",
        "Render Local and watch the preview/progress for obvious missing cameras, black frames or wrong timing.",
        "Check the rendered files in the output folder after the job completes."
      ],
      "see": "MRQ processes the sequence and creates the expected frames/video in the chosen folder.",
      "why": "A cinematic is not finished because it plays in Sequencer. The final test is whether the intended camera cuts, timing, focus and image output survive the render.",
      "check": "Open the rendered result outside Unreal and watch it from start to finish.",
      "troubleshoot": [
        "If the render uses the wrong camera, inspect the Camera Cuts track first.",
        "If the result starts/ends at the wrong time, re-check playback/custom range.",
        "If a book screenshot shows the older MRQ settings window, use it as a recognition reference only; UE5.8's Queue window has been streamlined."
      ],
      "visual": [
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p442.webp",
          "caption": "Virtual Filmmaking reference — Movie Render Queue job list/interface. UE5.8's Queue UI is more streamlined, but the job → settings → output → render idea is unchanged.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        },
        {
          "src": "assets/tutorials/sequencer-master/virtual-filmmaking-p443.webp",
          "caption": "Virtual Filmmaking reference — Output settings include the destination, naming/resolution and frame-related options. Use the current UE5.8 equivalent controls.",
          "kind": "book",
          "sourceTitle": "Virtual Filmmaking — licensed college reference"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "You have two Cine Cameras in Sequencer. What determines which camera the audience actually sees at a given time?",
      "options": ["Whichever camera is selected in the Outliner", "The Camera Cuts track", "The camera with the longest focal length", "The active editor viewport"],
      "correct": 1,
      "feedback": "Camera Cuts chooses the active camera for the sequence. Moving or keyframing a Cine Camera does not make it the viewed shot by itself."
    },
    {
      "q": "A camera Transform has one key at frame 0 and another at frame 90. What is Sequencer doing between them?",
      "options": ["Deleting the first value", "Holding frame 0 until frame 90", "Interpolating between the keyed values according to the curve/interpolation", "Rendering two separate videos"],
      "correct": 2,
      "feedback": "Keys store values at specific times; Sequencer calculates the values between them using the chosen interpolation/curve."
    },
    {
      "q": "Why is changing focal length more than simply zooming in or out?",
      "options": ["It can change the spatial/compositional feel and apparent relationship of foreground/background", "It changes the sequence frame rate", "It automatically sets focus distance", "It switches the active Camera Cut"],
      "correct": 0,
      "feedback": "Focal length changes field of view and visual compression, so it affects how a shot feels and how space reads, not just how large the subject appears."
    },
    {
      "q": "Your cutscene feels rushed when rendered even though scrubbing looked fine. What should you check before rendering again?",
      "options": ["Only increase output resolution", "Watch normal-speed playback and verify the working/playback range", "Add more Transform keys", "Replace Cine Cameras with the editor camera"],
      "correct": 1,
      "feedback": "Timing has to be judged at playback speed. Check the sequence range, shot duration and pacing before spending time on a final render."
    },
    {
      "q": "Movie Render Queue outputs the wrong camera. What is the first Sequencer thing to inspect?",
      "options": ["Landscape collision", "Camera Cuts bindings/sections", "The Actor's mobility setting", "The project default pawn"],
      "correct": 1,
      "feedback": "If the rendered viewpoint is wrong, confirm the Camera Cuts track is bound to the intended Cine Camera and covers the correct time range."
    }
  ],
  "mistakes": [
    "Animating the camera before understanding what the shot is meant to show.",
    "Adding many Transform keys when two clean keys would communicate the move.",
    "Moving a Cine Camera without checking that the Camera Cuts track actually uses it.",
    "Using the same shot size/angle for every cut.",
    "Treating focal length as a zoom button rather than a spatial/compositional choice.",
    "Using shallow depth of field so aggressively that the subject is accidentally soft.",
    "Judging timing only by scrubbing instead of watching normal-speed playback.",
    "Rendering before trimming the sequence and checking the first/last frame.",
    "Assuming an older book screenshot is the exact UE5.8 interface when Epic has changed the panel."
  ],
  "makeItYours": [
    "Turn the two-camera exercise into a 15–20 second reveal with Wide → Medium → Detail.",
    "Animate a light intensity or prop alongside the camera to prove Sequencer controls more than cameras.",
    "Use Look at Tracking for one shot, then recreate the shot with manual rotation keys and compare the feel.",
    "Open Designer Studio → Sequencer & Cutscenes and redesign the same technical sequence around a specific story beat.",
    "Use the existing Trigger a Cutscene & Return to Gameplay tutorial when the sequence needs to run inside the playable game rather than only render to a file."
  ],
  "worksWhen": [
    "LS_Sequencer_Practice opens, plays and has a deliberate working range.",
    "At least one non-camera Actor animates correctly between two keys.",
    "Camera Cuts switches between at least two clearly different Cine Camera shots.",
    "One camera move has a readable start frame, end frame and controlled interpolation.",
    "You can explain what changing focal length/focus does to the shot.",
    "Movie Render Queue produces the intended sequence with the correct camera, timing and output range."
  ],
  "icon": "🎬",
  "featured": true,
  "referenceImages": [],
  "source": {
    "title": "Epic UE5.8 — Sequencer Basics",
    "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-make-movies-in-unreal-engine"
  },
  "prescriptive": true
};
  if (!tools.tutorials.some(t => t.id === tutorial.id)) tools.tutorials.push(tutorial);
  const cinematics = design.modules.find(m => m.id === 'cinematics');
  if (cinematics && Array.isArray(cinematics.tutorials)) {
    cinematics.tutorials = cinematics.tutorials.filter(id => id !== tutorial.id);
  }
})();
