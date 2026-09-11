// UE5 Learning Hub v3.51.0 — Landscape Master Guide
// Long-form Unreal Learning recovery tutorial. One authoritative guide; Designer Studio links to it rather than duplicating it.
(() => {
  const tools = window.UE5_TUTORIAL_DATA;
  const design = window.UE5_DESIGN_DATA;
  if (!tools || !Array.isArray(tools.tutorials) || !design || !Array.isArray(design.modules)) return;
  const tutorial = {
  "id": "landscape-master-guide",
  "title": "Landscape: From Blank Terrain to Playable Environment",
  "category": "world",
  "designModule": null,
  "unrealHome": true,
  "libraryHidden": true,
  "unrealSection": "Landscape & World Building",
  "unrealIntroTitle": "Build the Landscape in one controlled practice map",
  "unrealCallout": "Work in order: this is a long-form recovery guide, not a menu of random tips. Start at Stage 1, prove each checkpoint, then move on. The diagnostic colours and test foliage are deliberately simple so you can see what Unreal is doing.",
  "unrealNextEyebrow": "NEXT • DESIGN THE ENVIRONMENT",
  "unrealNextTitle": "Now use the tools for a reason",
  "unrealNextText": "This guide teaches the Unreal Landscape workflow. Unreal Designer joins it to route readability, landmarks, terrain composition, believable foliage, the applied Studio Build and evidence from playtesting.",
  "unrealNextHref": "#/unreal-designer/landscape",
  "unrealNextLabel": "Apply Landscape in Unreal Designer →",
  "duration": "90–120 min",
  "difficulty": "Beginner → Advanced",
  "summary": "Build one UE5.8 practice Landscape from a flat grid into a sculpted, painted, populated and play-tested environment, then finish with non-destructive Edit Layers and a procedural spline road. Every screenshot in this guide was captured from the real classroom workflow.",
  "uses": [
    "Landscape",
    "Sculpt",
    "Paint",
    "Foliage",
    "Edit Layers",
    "Splines"
  ],
  "referenceLesson": null,
  "steps": [
    {
      "title": "Create a clean practice Landscape and prove its scale",
      "where": "File → New Level → Basic → save as L_Landscape_Practice → Landscape Mode (Shift+2) → Manage → New",
      "do": "Delete the starter floor, then create a deliberately manageable practice Landscape.",
      "doList": [
        "Create New; Material None; Location 0,0,0; Rotation 0,0,0; Scale 100,100,100.",
        "Use Section Size 63×63 Quads, Sections Per Component 1×1, Number of Components 8×8, Overall Resolution 505×505; do not use Fill World for this exercise.",
        "Click Create. Put Player Start slightly above the surface and press Play with the normal Third Person character."
      ],
      "see": "Before Create you see the green preview grid; afterwards a real Landscape actor appears. In Play mode the character stands and moves on it.",
      "why": "At XY Scale 100 this is roughly a 504 m × 504 m practice area: large enough to design routes, small enough to teach live without introducing large-world complexity.",
      "check": "The Outliner contains Landscape, the Details panel reports 505×505 resolution / 64 components, and the Third Person character walks on the surface.",
      "troubleshoot": [
        "If you accidentally used Empty Open World or Fill World, start the practice map again so World Partition/huge-world settings do not distract from the core tools.",
        "If the player does not spawn correctly, move Player Start clear of the surface rather than burying it inside the Landscape."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/01-0a1571ba-5dd4-47bc-b460-64f24591dbca.webp",
          "caption": "Open Landscape Mode. The green grid is the creation preview; the panel shows the 505×505 practice setup before anything is created.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/02-6ecb4cf4-69de-4e2e-82f0-575c8c605819.webp",
          "caption": "After Create: the real Landscape actor exists, Sculpt is available and the Details panel confirms 505×505 resolution / 64 components.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/03-2bd47a18-a882-48d3-8792-e20bff60a353.webp",
          "caption": "Use a mannequin or other known-size character as an editor scale reference before sculpting.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/04-6e65ae02-054d-4f9e-8e69-7cd6f0bfc2f2.webp",
          "caption": "Play-mode proof: the Third Person character stands and moves on the flat Landscape, confirming usable collision and real scale.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Sculpt broad terrain around a playable route",
      "where": "Landscape Mode → Sculpt → Sculpt",
      "do": "Start broad and weak, then build large terrain forms before adding detail.",
      "doList": [
        "Use Tool Strength about 0.10–0.15, Brush Size 1500–2000 and Brush Falloff 0.5.",
        "Left Mouse Button raises terrain. Shift + Left Mouse Button lowers it.",
        "Make a broad hill and a shallow depression, moving the brush as you work rather than holding one point.",
        "Leave a clear route through the middle and shape terrain around where the player needs to travel."
      ],
      "see": "Broad hills/valleys with gradual changes. The screenshots also keep an intentionally bad small-brush crater as a warning.",
      "why": "Terrain is level design. A route first approach produces readable spaces; random bumps and concentrated strokes usually produce unplayable noise.",
      "check": "From above and from near player height, you can still identify the intended route immediately.",
      "troubleshoot": [
        "If the terrain turns into a spike/crater, Ctrl+Z, increase Brush Size and reduce Tool Strength.",
        "If the route only makes sense from the aerial camera, widen or reshape it before continuing."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/05-bd2801ea-3296-4963-b7fe-0980b673ff81.webp",
          "caption": "Safe starter Sculpt settings: low strength, a broad 2000 brush and 0.5 falloff create large landforms rather than spikes.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/06-4ec6e16e-789e-4783-b258-71af577a1674.webp",
          "caption": "Common beginner result: a concentrated brush can create a steep basin/crater. Keep this as a warning, not the target.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/07-d9f6c645-53fa-4c10-afdf-8c9f474ae594.webp",
          "caption": "Corrected broad depression: lower strength + 2000 brush produces a much gentler valley.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/08-787eebaf-9e96-4738-ad81-20f089741183.webp",
          "caption": "Aerial route-planning view: raise terrain around the route instead of sculpting random bumps first.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/09-be97dadd-5f74-414c-82a3-0a412fa59a92.webp",
          "caption": "Lower-angle route view: check that the sculpted corridor still reads when the camera is close to the ground.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Smooth harsh transitions without flattening the design",
      "where": "Landscape Mode → Sculpt → Smooth",
      "do": "Smooth the rough joins and route edges, not the entire world.",
      "doList": [
        "Start around Tool Strength 0.15–0.20, Brush Size 1200–1500, Brush Falloff 0.5.",
        "Make only a few passes over sharp ridges or abrupt joins.",
        "Run the brush along the direction of travel where you are improving a playable corridor."
      ],
      "see": "The before/after pair keeps the same overall landform but removes the harshest height changes.",
      "why": "Smooth averages neighbouring height values. Used carefully it improves transitions; used everywhere it destroys intentional terrain shape.",
      "check": "The route still has raised terrain around it, but the player-facing transitions are softer and easier to read.",
      "troubleshoot": [
        "If the whole hill disappears, undo and use fewer passes/lower strength.",
        "If a tiny area stays lumpy, use a broader brush over the whole transition rather than scrubbing one vertex-sized patch."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/10-61365a78-1155-492a-be18-fa3e0d2b2a9c.webp",
          "caption": "BEFORE Smooth: harsh height transitions and steep sculpted forms are easy to see.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/11-6f8a77d9-9383-46de-aaa3-26a258478a95.webp",
          "caption": "AFTER Smooth: the same terrain keeps its shape but loses the most abrupt transitions.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/12-d7f87729-dd32-4254-9a65-8059a2857b18.webp",
          "caption": "Aerial check after smoothing: preserve the route instead of flattening the whole environment.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/13-17c9da16-7958-48a0-b44b-486fff56dcaa.webp",
          "caption": "Player-height check: the route is now easier to read and traverse between the surrounding slopes.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Flatten a purposeful platform, then blend only its edges",
      "where": "Landscape Mode → Sculpt → Flatten, then Smooth",
      "do": "Create consistent-height ground for a building, campsite, checkpoint, arena or landmark.",
      "doList": [
        "Choose a visibly sloped area. Use about Tool Strength 0.3, Brush Size 1200, Brush Falloff 0.5.",
        "Your first Flatten click establishes the height you are pulling surrounding terrain towards in this simple workflow.",
        "Expand the level centre with short strokes.",
        "Switch to Smooth and work only around the outside boundary; protect the flat centre."
      ],
      "see": "A usable level platform appears. The intermediate screenshot deliberately shows the hard wall that can happen before edge blending.",
      "why": "Flatten solves a different design job from Sculpt: it creates reliable placement ground. Smooth then hides the artificial transition without undoing the useful centre.",
      "check": "From a low side view you can see level ground in the middle, a softened join and natural terrain beyond it.",
      "troubleshoot": [
        "If the platform jumps to the wrong height, undo and choose the first click more deliberately.",
        "If the centre stops being level, you smoothed too far into the useful platform."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/14-b3708ae5-ba18-44bf-b2b0-79b5837245b4.webp",
          "caption": "BEFORE Flatten: choose an uneven/sloped area so the tool's effect will be obvious.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/15-f7cbe0f8-fca0-480a-abf2-c310f4930032.webp",
          "caption": "AFTER Flatten: the centre has been pulled towards one height, but the hard wall shows why a second pass may be needed.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/16-db2f5971-3118-46d0-a4a3-0bb7b9a75693.webp",
          "caption": "Refinement: Smooth only the outside join so the useful flat centre stays level while the edges blend into natural terrain.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Use Ramp to connect two heights safely",
      "where": "Landscape Mode → Sculpt → Ramp",
      "do": "Use two Ramp control points to make a controlled traversal slope.",
      "doList": [
        "Start with Ramp Width 2000 and Side Falloff 0.4 for this exercise.",
        "Click the lower point, then the higher destination point.",
        "Before Add Ramp, inspect the preview from the side/player height.",
        "If it is too steep, lengthen the ramp and move the upper endpoint farther onto the high ground; then click Add Ramp."
      ],
      "see": "The first attempt is deliberately too short/steep; the improved version uses a longer run and reads much more safely from player height.",
      "why": "For the same height change, a longer horizontal distance creates a gentler slope. This is a design fix, not a character-setting workaround.",
      "check": "The ramp reads as a route a Third Person character could plausibly climb without repeated jumping.",
      "troubleshoot": [
        "If the upper end creates a wall, move the endpoint farther onto the plateau.",
        "If the ramp is too narrow, increase Ramp Width; if the sides are too abrupt, increase Side Falloff modestly."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/17-0f1746a4-0a20-4722-b3fb-792334ea5375.webp",
          "caption": "Ramp preview: two control points define the start/end of the controlled slope; Width 2000 and Side Falloff 0.4 are visible.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/18-9a6ebfa4-8771-487b-a24f-a3bc83df0635.webp",
          "caption": "Common failure: a short ramp across a large height difference creates a steep wedge and abrupt upper wall.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/19-17ea3895-f44d-424a-8310-5e30516338fd.webp",
          "caption": "Improved preview: move the endpoints farther apart and place the upper point farther onto the high ground for a gentler climb.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/20-fd2a9db6-ff64-42ff-bb0d-99bc2396d958.webp",
          "caption": "Player-height ramp preview: always judge the slope from where the character will actually move, not only from above.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Build a simple diagnostic Landscape material",
      "where": "Content Browser → create Material M_Landscape_Basic → Material Editor",
      "do": "Make a training material with three obvious paint layers before using production textures.",
      "doList": [
        "Add a Landscape Layer Blend node with Grass, Dirt and Rock entries.",
        "Use LB Weight Blend for all three entries in the material.",
        "Feed a green Constant3Vector into Grass, brown into Dirt and grey into Rock, then connect the Landscape Layer Blend output to Base Color.",
        "Apply and Save."
      ],
      "see": "A tiny material graph whose only job is to make layer behaviour unmistakable.",
      "why": "Bright diagnostic colours separate material-system problems from texture/art problems. Once the workflow works, the training material can be replaced with a production Landscape material.",
      "check": "The Landscape Layer Blend node clearly exposes Grass, Dirt and Rock and the material compiles.",
      "troubleshoot": [
        "If Paint later cannot discover a layer, check the exact Landscape Layer Blend names and save the material.",
        "Do not spend time making these colours pretty; they are deliberately crude teaching surfaces."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/21-7646a98e-17e8-4f47-88d8-ed12395e8bc7.webp",
          "caption": "Landscape Layer Blend Details: Grass, Dirt and Rock are named as three LB Weight Blend entries.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/22-d7573507-1a72-4732-a114-eb936fa5bed4.webp",
          "caption": "Landscape Layer Blend node connected to the material Base Color.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/23-7ce74240-00ba-4e56-ae5d-127f66b7882e.webp",
          "caption": "Diagnostic colours being assigned with Constant3Vector nodes. These are training colours, not final environment art.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/24-23510347-d838-4238-aaea-dd9946bd595a.webp",
          "caption": "Finished M_Landscape_Basic training graph: green Grass, brown Dirt and grey Rock blend into Base Color.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Assign the material and create UE5.8 Layer Info assets",
      "where": "Select Landscape → Details → Landscape Material; then Landscape Mode → Paint → Target Layers",
      "do": "Connect the material to the Landscape and give each target layer storage/blending information.",
      "doList": [
        "Assign M_Landscape_Basic to Landscape Material.",
        "If UE5.8 shows 0 Target Layers, click Create Layers From Assigned Materials (the lightning-bolt button) to populate Grass, Dirt and Rock.",
        "Create a Layer Info asset for Grass, Dirt and Rock in a tidy Landscape materials folder.",
        "For this practice setup, open each Layer Info and set Blend Method to Advanced Weight Blending and Blend Group to Ground."
      ],
      "see": "Grass, Dirt and Rock appear in Target Layers, each with its own Layer Info. The captured UE5.8 Details view shows Advanced Weight Blending + the shared Ground group.",
      "why": "Material layer names define what can be painted; Layer Info assets store the layer data. In UE5.8, layers in the same Advanced Weight Blend group can balance against one another during exclusive painting.",
      "check": "No Target Layer is left with None for its Layer Info, and all three practice Layer Infos use the Ground blend group.",
      "troubleshoot": [
        "If the Paint list stays empty, confirm the Landscape is using M_Landscape_Basic and use Create Layers From Assigned Materials.",
        "Do not treat Advanced Weight Blending as a universal rule for every downloaded material; follow the setup intended by that material. These values are for this training material."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/25-f5b9b5a9-75fb-4471-aba8-545d7d1b9215.webp",
          "caption": "Assign M_Landscape_Basic in the Landscape actor's Landscape Material slot.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/26-40aa5b21-9d66-484f-8501-c979e4609575.webp",
          "caption": "UE5.8 workflow detail: Paint may initially show 0 Target Layers; use Create Layers From Assigned Materials.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/27-a9c7bc74-1fa4-44d1-86d0-9eb0d1e4f34a.webp",
          "caption": "Grass, Dirt and Rock now appear as Target Layers but still have no Layer Info assets.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/28-aaffd65b-1002-43c5-9418-0e6d8d0b767c.webp",
          "caption": "Create a Landscape Layer Info Object for each target layer and save it in a sensible Landscape materials folder.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/29-ccb24c6c-8253-49e6-b675-43cb203fce29.webp",
          "caption": "UE5.8 Layer Info blend choices include No Weight Blending, Weight Blending (Legacy) and Advanced Weight Blending.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/30-9dba7c8f-4e02-4c17-8109-3638ff290fcd.webp",
          "caption": "For this practice setup: Advanced Weight Blending with the shared Blend Group Ground, repeated for Grass, Dirt and Rock.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Initialise a Grass base, then paint Dirt routes and Rock slopes",
      "where": "Landscape Mode → Paint",
      "do": "Establish valid paint weights first, then paint by gameplay purpose.",
      "doList": [
        "Select Grass and establish it across the whole practice Landscape as the base surface.",
        "Paint Dirt along the intended player route using longer strokes that follow travel direction.",
        "Paint Rock mainly on steep/exposed faces. Leave plenty of Grass as the dominant general surface.",
        "Check the result both from the air and at player height."
      ],
      "see": "The broken/glowing screenshot shows what an uninitialised/invalid-looking paint state can look like. The working screenshots show clean green/brown/grey blending.",
      "why": "A base layer prevents undefined-looking patches, while Dirt and Rock turn the material into navigation information: route versus general ground versus steep/exposed terrain.",
      "check": "There are no black/glowing holes, the Dirt route reads from player height and Rock is not covering ordinary flat travel ground.",
      "troubleshoot": [
        "If you see broken dark/glowing transitions, stop artistic painting and re-establish a valid base layer before continuing.",
        "If the path becomes a string of circular blobs, enlarge/soften the brush and move continuously while painting."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/31-d85cd49f-ee33-4d47-b608-61a4dffde35f.webp",
          "caption": "Common failure: painting before the base weights are properly established can produce black/glowing or broken-looking transitions.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/32-21a0b74c-8934-4fd0-9510-1f2aa652bb39.webp",
          "caption": "Working UE5.8 paint setup: Grass, Dirt and Rock paint cleanly and Target Layers show Advanced Weight Blending.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/33-38513f63-fac6-4bfc-8d44-510ff6594f3a.webp",
          "caption": "Aerial material pass: Grass stays the base, Dirt communicates the intended route and Rock marks steep/exposed terrain.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/34-a1d3ba12-f5f8-4987-9711-47835c72117e.webp",
          "caption": "Player-height paint check: the Dirt route still guides the player's eye when seen from gameplay height.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Add disposable test foliage and fix obvious repetition",
      "where": "Foliage Mode (Shift+3) → Paint",
      "do": "Use a simple mesh first so you learn the placement system without hiding mistakes behind pretty assets.",
      "doList": [
        "Drag a Static Mesh into the Foliage palette and enable it.",
        "Paint a tiny test patch. The captured block mesh is deliberately ugly: it makes density, overlap and rotation easy to diagnose.",
        "Set Scaling to Uniform and use about 0.75–1.25 for visible size variation.",
        "Enable Random Yaw. Align to Normal is useful for this rock/block test; use more care with trees on steep slopes."
      ],
      "see": "A first dense pile, then the exact scaling controls used to introduce size variation.",
      "why": "The point of this pass is behaviour, not art. A disposable diagnostic mesh makes it obvious whether your Foliage Type rules are working.",
      "check": "Instances vary in scale/direction rather than looking like stamped identical copies.",
      "troubleshoot": [
        "If nothing paints, check the foliage type is enabled, Landscape is enabled under Filters and density is above zero.",
        "If every instance leans with a hillside and you are using trees, reconsider Align to Normal for that foliage type."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/35-2d8f0993-5eda-4fe4-9673-9eb655bc8e77.webp",
          "caption": "Foliage Mode orientation: Paint, brush density, filters and the empty Drop Foliage Here palette.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/36-84b26549-7785-4974-adad-ed4d774b81f0.webp",
          "caption": "First technical foliage test: the deliberately simple block mesh proves painting works, but the pile is far too dense.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/37-7da1a29a-ac95-49e0-852c-9c057d8c78cf.webp",
          "caption": "Uniform scaling at 1–1 gives no size variation.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/38-70be2980-4bb9-4ca7-8884-0fbd5ef31b64.webp",
          "caption": "Foliage Type settings during the test: Radius 0 means instances can crowd together; scale variation has been added.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/39-2ec63207-469f-4f36-bda9-db83e027353f.webp",
          "caption": "Uniform scale 0.75–1.25 gives clear size variation without stretching axes independently.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Control spacing and clean old foliage properly",
      "where": "Foliage Type → Painting → Radius; Foliage Mode → Erase / Remove / Paint",
      "do": "Fix the Radius 0 overlap problem, then repaint a clean comparison area.",
      "doList": [
        "Set Radius around 150–200 for this chunky test mesh and lower density if necessary.",
        "Remember: changing Radius does not magically rearrange old painted instances.",
        "Erase/remove the dense test population, then repaint once with the corrected settings.",
        "Leave open ground and a readable corridor instead of covering every available surface."
      ],
      "see": "The screenshots progress from a rubble pile, through Erase, to an open corridor with visible Landscape between instances.",
      "why": "Spacing is a gameplay and readability control, not only an optimisation setting. Dense clutter can erase navigation and silhouette information.",
      "check": "Individual instances are readable, there are visible gaps and the central route stays open.",
      "troubleshoot": [
        "If the scene still looks like rubble, increase Radius before adding more randomness.",
        "If old clumps remain, clear them before judging whether the new settings worked."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/40-9ac53b7a-c4dc-4817-9ab8-d32660f6f082.webp",
          "caption": "Erase is useful for removing painted instances under the brush.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/41-c1732847-bca1-4959-a265-e354fba0dd2b.webp",
          "caption": "Before spacing cleanup: old instances still form dense overlapping clumps.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/42-268e2ac5-e125-4d39-8754-30f645f88d93.webp",
          "caption": "Spacing/erase pass in progress. Existing foliage is not automatically rearranged just because Radius changes.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/43-cb0f922e-bd0c-43d9-968c-4317cc275729.webp",
          "caption": "After cleanup/repaint: more open ground is visible and individual instances read more clearly.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/44-695bc4b8-992f-4890-a937-8d52c2a48fe0.webp",
          "caption": "Route-shaped clearing: vegetation/rocks frame a playable corridor rather than occupying every metre of ground.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Protect the Dirt route automatically with foliage exclusion",
      "where": "Select the Foliage Type → Placement → Advanced → Exclusion Landscape Layers",
      "do": "Use the painted Landscape layer as a placement rule instead of hand-deleting foliage from the path forever.",
      "doList": [
        "Add Dirt to Exclusion Landscape Layers.",
        "For this captured practice result, Minimum Exclusion Layer Weight 0.0 kept any Dirt contribution clear.",
        "Paint across Dirt and neighbouring terrain in one brush stroke; new instances should appear only on allowed surfaces.",
        "If you want foliage closer to softly blended Dirt edges, experiment with a higher threshold instead of changing the layer name."
      ],
      "see": "The Dirt road becomes a clean negative-space corridor while foliage remains on the surrounding terrain.",
      "why": "Design rules survive iteration better than manual cleanup. If the route moves or is repainted, you still have a clear rule explaining where that foliage type belongs.",
      "check": "From gameplay height the path is free of blockers and foliage frames rather than occupies the route.",
      "troubleshoot": [
        "If foliage still appears on the path, confirm the exclusion name is exactly Dirt and you are editing Exclusion, not Inclusion.",
        "Existing instances may need Erase/Reapply; the rule is easiest to judge on a clean/new paint test."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/45-4f2f64c0-b5ac-4287-80ea-89cf3c6cd1cb.webp",
          "caption": "Foliage Placement → Advanced: add Dirt to Exclusion Landscape Layers. This turns the painted path into a placement rule.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/46-bc71ae7e-b7a8-4ecc-898b-473bd8b89cbe.webp",
          "caption": "Result and settings together: foliage lands on allowed terrain while the Dirt path stays open.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/47-ff626e59-9192-452b-824b-730e1ed50ee7.webp",
          "caption": "Gameplay proof: the character has a clear route, with foliage framing the sides rather than blocking movement.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Playtest slopes with the real character",
      "where": "Play (Alt+P); then BP_ThirdPersonCharacter → CharacterMovement → Character Movement: Walking",
      "do": "Test the intended route, ramp and deliberately steep terrain before art polish.",
      "doList": [
        "Run the Third Person character along the Dirt route and up the ramp.",
        "Walk directly into a clearly steep Landscape side without jumping and observe where movement stops.",
        "Open BP_ThirdPersonCharacter, select CharacterMovement and locate Walkable Floor Angle / Walkable Floor Z.",
        "Use the captured template values as evidence: Max Step Height 45 cm, Walkable Floor Angle 44.765083°, Walkable Floor Z 0.71."
      ],
      "see": "One screenshot proves successful route traversal; another proves a continuous Landscape surface can still be too steep to count as walkable.",
      "why": "Aerial judgement is unreliable. The Character Movement Component, camera and actual slope together decide whether a route feels playable.",
      "check": "The intended route is comfortably walkable while deliberately steep terrain remains a meaningful boundary.",
      "troubleshoot": [
        "If an intended path fails, reshape/smooth/lengthen the terrain first rather than immediately increasing Walkable Floor Angle.",
        "If you cannot find the slope settings, make sure CharacterMovement — not the Character mesh/capsule — is selected."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/48-f9d4d6dc-cc8d-4135-80a3-014e3bab4f9c.webp",
          "caption": "Successful traversal: play the real character along the intended route instead of assuming an editor slope is fine.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/49-8e80bea9-e9da-4569-bbdc-1e575df51a7f.webp",
          "caption": "Failed traversal: a steep Landscape side is continuous geometry, but the character does not treat it as walkable.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/50-8cd175f9-c49f-4609-bcf6-7c94b84edddd.webp",
          "caption": "BP_ThirdPersonCharacter with CharacterMovement selected — this is where walking/slope behaviour is configured.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/51-d3aab94e-4fe9-4d4c-85a8-a95c55526639.webp",
          "caption": "Current template values captured in UE5.8: Max Step Height 45 cm, Walkable Floor Angle 44.765083°, Walkable Floor Z 0.71.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Use Landscape Edit Layers for non-destructive terrain passes",
      "where": "Save a copy as L_Landscape_Advanced → Landscape Mode → Edit Layers",
      "do": "Separate experimental sculpting from the base heightfield so it can be hidden or blended later.",
      "doList": [
        "Rename the existing terrain layer Base_Terrain.",
        "Add a normal Landscape Edit Layer named Test_Sculpt above it and keep Test_Sculpt selected.",
        "Sculpt one obvious hill on Test_Sculpt.",
        "Toggle the eye: the hill disappears without deleting Base_Terrain. Turn it back on, then set Alpha to 0.5 to reduce the whole pass."
      ],
      "see": "The sequence shows Base_Terrain, Test_Sculpt at full influence, the hidden result and the same layer at Alpha 0.5.",
      "why": "Edit Layers let you change the contribution of an entire terrain idea after the sculpting is done instead of destructively baking every experiment together.",
      "check": "Eye off removes only Test_Sculpt; Alpha 0.5 visibly weakens it; Base_Terrain remains intact.",
      "troubleshoot": [
        "If hiding Test_Sculpt does nothing, you probably sculpted on Base_Terrain — undo and repeat with the correct layer selected.",
        "The warning that painting/sculpting is not allowed on a hidden layer is expected."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/52-c0f0041a-6d0b-45ed-b6f1-b45ba26fa40c.webp",
          "caption": "Edit Layers start with one generic Landscape layer.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/53-8c5ccba0-fe79-4cce-b6f5-0562805339ff.webp",
          "caption": "Rename the original terrain layer Base_Terrain so its purpose is obvious.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/54-82e6eb7e-4c12-4ad6-821b-b30a17e8b87a.webp",
          "caption": "UE5.8 Edit Layer class picker: normal Landscape Edit Layer versus Landscape Edit Layer Splines.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/55-59a23b2a-b3f0-4d13-89c7-b30c3b9e98df.webp",
          "caption": "Add Test_Sculpt above Base_Terrain and keep the experiment separate from the underlying terrain.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/56-153642c1-5286-4499-bd55-deacbb2028d8.webp",
          "caption": "Test_Sculpt visible at Alpha 1.0: the new hill is fully contributing to the final Landscape.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/57-3ef7e20a-892e-483c-9fe5-9d96b45cfbd6.webp",
          "caption": "Close-up of the Edit Layer row with Test_Sculpt Alpha 1.0.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/58-62449b2d-251e-4dcf-bd65-b60a21393f65.webp",
          "caption": "Hide Test_Sculpt: the added hill disappears while Base_Terrain remains. The hidden-layer sculpting warning is expected.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/59-09d76bd2-9119-4c38-bc2d-f669baadd597.webp",
          "caption": "Set Test_Sculpt Alpha to 0.5: the same non-destructive terrain pass now contributes at half strength.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Create a dedicated procedural spline road layer",
      "where": "Landscape Edit Layers → + → Landscape Edit Layer Splines; then Manage → Splines",
      "do": "Keep roads/paths procedural by storing their spline deformation on the dedicated UE5.8 spline layer.",
      "doList": [
        "Choose Landscape Edit Layer Splines and rename it Road_Splines.",
        "Ignore the 'reserved for Landscape Splines' / 'doesn't support blueprint brushes' messages — they describe the specialised layer correctly.",
        "Enter Manage → Splines. Ctrl + Left-click to place points and continue the route with connected control points.",
        "Shape a broad curved path across manageable terrain before adding material/mesh detail."
      ],
      "see": "The screenshots move from the UE5.8 class picker to Road_Splines in the stack and then to a full editable curved spline path.",
      "why": "A dedicated spline Edit Layer can update road deformation when control points move, without baking the road into Base_Terrain.",
      "check": "Road_Splines is selected, control points/segments are editable and the route curve can be changed without manual resculpting.",
      "troubleshoot": [
        "If a new point does not connect, make sure the previous control point is selected when adding the next one.",
        "Do not try to manually Sculpt the Road_Splines layer; edit it through Manage → Splines."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/60-4b14f8ac-f4b6-4ffc-90ee-491b9aae2215.webp",
          "caption": "Create a dedicated Landscape Edit Layer Splines layer for the road rather than a normal sculpt layer.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/61-667c31d0-94c1-495f-b5e1-02c53d48d436.webp",
          "caption": "Road_Splines in the stack. The reserved-layer / no Blueprint brushes messages are normal for this specialised spline layer.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/62-ef9524d3-3fe6-4be3-bb51-3f8e0bef6e07.webp",
          "caption": "Early Landscape Spline segment: control points and a connecting segment form the editable route.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/63-6b1c34e6-46da-4b92-a4a9-f035579a95b0.webp",
          "caption": "Curved road path being shaped across the Landscape with multiple control points.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/64-8a6ae09e-7fa5-4a33-9a24-79d6f48b31a6.webp",
          "caption": "Full spline overview with the route, control points and falloff visualisation visible.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Set road width, paint Dirt and let the spline deform terrain",
      "where": "Manage → Splines → select control points/segments → Details",
      "do": "Turn the spline from an editing line into a real Landscape road.",
      "doList": [
        "For this test set control-point Half-Width to 400 and Side Falloff to 300. Half-Width 400 gives roughly 8 m total road width.",
        "Select the spline segments. Under Landscape Deformation set Layer Name to Dirt.",
        "Keep Raise Terrain and Lower Terrain enabled so the Landscape can meet the spline height.",
        "Apply/check the settings across all segments, then leave the Splines tool / hide editor helpers."
      ],
      "see": "The final clean screenshot shows the brown Dirt road remaining with no spline guides — proof that the Landscape layer paint/deformation is real, not just editor visualisation.",
      "why": "The spline now controls route shape, terrain height and surface identity from one editable system.",
      "check": "Deselecting/leaving the spline editor does not remove the Dirt road; moving a control point updates the procedural route.",
      "troubleshoot": [
        "If only some sections paint, select/check all segments for Layer Name Dirt.",
        "If the road paints but does not meet the terrain, verify Raise Terrain / Lower Terrain and inspect width/falloff before manually sculpting around it."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/65-0dbc2cd0-5a43-462b-ae26-7fb450228807.webp",
          "caption": "Control point settings: Half-Width 400 and Side Falloff 300 give an 8 m total route with a blended edge.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/66-1838c290-3602-436d-8fdb-128f9de9b574.webp",
          "caption": "Width/falloff visualisation around a bend: solid route edges and dotted falloff boundary.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/67-0fbc3231-5299-43c9-98bd-467cad469894.webp",
          "caption": "Before paint assignment: Landscape Deformation Layer Name is None while Raise/Lower Terrain are enabled.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/68-931c8acc-3cf5-48cf-a6de-77fb070461d9.webp",
          "caption": "Set the spline segment Layer Name to Dirt, leaving Raise Terrain and Lower Terrain enabled.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/69-b78c4fea-4b17-4185-b3ab-018759e93133.webp",
          "caption": "Select all spline segments and verify the shared Dirt deformation settings once instead of editing them inconsistently.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/70-843033e8-61f3-4ad4-a587-cbe1d2f1768c.webp",
          "caption": "Technical proof after leaving the Splines tool: the brown road remains, showing real Landscape paint/deformation rather than only a preview.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/71-48a67b5c-0869-41e1-a2a6-b3492f5cffc8.webp",
          "caption": "Clean final result: the spline has painted a continuous Dirt road with no editor guides in the screenshot.",
          "kind": "local"
        }
      ]
    },
    {
      "title": "Optional: prove Spline Meshes, then recognise a bad production mesh",
      "where": "Landscape Spline Segment → Landscape Spline Meshes",
      "do": "Add a simple Plane only as a technical proof that geometry can repeat and deform along the Landscape Spline.",
      "doList": [
        "Add a Spline Mesh entry and assign Plane; use Center Horizontally, Scale to Width, Forward Axis X and Up Axis Z for this captured test.",
        "Inspect tight bends: the stock Plane has too little useful subdivision to make a good production road, so angular deformation is expected.",
        "Keep centring/offset adjustments neutral unless you have a specific visual problem. The captured 1.0 adjustment made the road visibly float; a much smaller 0.1 looked closer in this exact test.",
        "For a real road, replace the stock Plane with a properly subdivided strip whose geometry and UVs are designed to bend along its length."
      ],
      "see": "The screenshots include both the working Spline Mesh settings and an intentional failure where the mesh floats above the Landscape.",
      "why": "Spline Mesh quality depends on the mesh being deformed. More useful subdivisions along the travel axis produce smoother curves than a two-triangle plane.",
      "check": "You can explain the difference between the painted/deformed Landscape road and optional geometry placed along the same spline.",
      "troubleshoot": [
        "If the mesh floats, reduce the adjustment rather than accepting a visible gap.",
        "If it looks triangular on bends, do not keep fighting width/offset values: use a better subdivided road strip."
      ],
      "visual": [
        {
          "src": "assets/tutorials/landscape-master/72-0080b472-63ab-4802-8660-a2b23c7b6c09.webp",
          "caption": "Optional geometry pass: assign a Plane as a Landscape Spline Mesh, centre it, Scale to Width, Forward X and Up Z.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/73-de522f12-bc96-4791-af32-1fd99d76d6c5.webp",
          "caption": "The default Plane follows the whole spline, but its very low subdivision makes tight bends visibly angular.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/74-928286e9-1920-45a5-9e97-387a452de126.webp",
          "caption": "A cleaner Plane-mesh pass still proves the feature, but it is not a production road mesh.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/75-8147ce91-77eb-48d9-a802-83ca0ba58ff0.webp",
          "caption": "Center Adjust Y at 1.0 during troubleshooting — captured so students can see the exact experiment.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/76-9557319c-e0c5-4ccb-bc39-517035a791a3.webp",
          "caption": "Failure result: too much adjustment makes the mesh visibly float above the Landscape, creating a dark gap.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/77-906dc8c6-fb95-4875-8dbf-02f3f8c4b06e.webp",
          "caption": "A much smaller Center Adjust Y = 0.1 used in this specific test.",
          "kind": "local"
        },
        {
          "src": "assets/tutorials/landscape-master/78-b4702de2-d59a-4fbe-919b-1b5e2d142a59.webp",
          "caption": "Player-height comparison after the smaller adjustment: the mesh sits much closer to the painted Landscape road.",
          "kind": "local"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "You need to reshape terrain and then paint a Dirt route. Which Landscape tabs match those jobs?",
      "options": ["Manage then Foliage", "Sculpt then Paint", "Paint then Manage", "Edit Layers then Sculpt"],
      "correct": 1,
      "feedback": "Sculpt changes terrain height/shape. Paint applies Landscape material layers such as Dirt, Grass and Rock. Manage is mainly for creating/configuring the Landscape."
    },
    {
      "q": "A student adds small noisy hills everywhere before deciding where the player should travel. What is the stronger workflow?",
      "options": ["Keep the noise and fix the route with collision", "Start broad: establish the playable route and large forms first", "Add foliage so the route becomes obvious", "Increase Landscape resolution before sculpting"],
      "correct": 1,
      "feedback": "Route-first broad sculpting makes navigation and scale readable before detail. Noise is much easier to add later than to design around."
    },
    {
      "q": "Which statement about Landscape material layers and Landscape Edit Layers is correct?",
      "options": ["They are two names for the same system", "Material layers control only foliage; Edit Layers control paint", "Material layers blend surfaces; Edit Layers organise non-destructive terrain/paint changes", "Edit Layers are only available after using Splines"],
      "correct": 2,
      "feedback": "Grass/Dirt/Rock are material paint layers. Landscape Edit Layers are a separate non-destructive organisation system for sculpt/paint changes."
    },
    {
      "q": "Foliage keeps appearing across the Dirt path. What is the most maintainable fix?",
      "options": ["Hand-delete every plant after each paint change", "Set foliage Radius to 0", "Use the Dirt Landscape layer as a foliage exclusion rule", "Raise the road above the foliage"],
      "correct": 2,
      "feedback": "A Landscape-layer exclusion keeps the route clear automatically as the painted path changes, instead of relying on repeated manual cleanup."
    },
    {
      "q": "You hide Landscape spline editor guides and the road paint/deformation remains. What does that prove?",
      "options": ["The selected spline gizmos were the final road mesh", "The Landscape spline affected the Landscape; optional Spline Mesh geometry is a separate choice", "The road is now baked and can never be edited", "The Landscape material was converted into a Static Mesh"],
      "correct": 1,
      "feedback": "Landscape Splines can deform terrain and paint a layer. The visible editor guides are not the road itself, and a Spline Mesh is optional separate geometry."
    }
  ],
  "mistakes": [
    "Sculpting detail/noise before deciding where the player is meant to travel.",
    "Treating Grass/Dirt/Rock paint layers as the same thing as Landscape Edit Layers.",
    "Painting without valid Layer Info/base weights, then trying to hide the resulting dark/glowing patches with more paint.",
    "Leaving foliage Radius at 0 and judging a dense overlapping pile as a finished environment.",
    "Hand-erasing every path blocker instead of using a Landscape-layer foliage exclusion rule.",
    "Judging slope only from the editor camera rather than the Third Person character.",
    "Assuming selected spline guides are the final road instead of verifying that Dirt paint remains when the guides disappear.",
    "Using the stock Plane as a production spline road mesh."
  ],
  "makeItYours": [
    "Replace the diagnostic green/brown/grey material with Project Nature (or your approved Fab environment pack) once the layer workflow is understood.",
    "Replace the test cube/rock foliage with real trees, rocks, shrubs and grass while keeping the same spacing, scale, slope and exclusion thinking.",
    "Make a proper subdivided road strip for the spline and texture it to match the production Landscape material.",
    "Add a viewpoint/landmark and check that terrain + foliage still guide the player towards it from ground level."
  ],
  "worksWhen": [
    "The Third Person character can walk the intended route and ramp without fighting the terrain.",
    "Grass, Dirt and Rock layers paint cleanly and Dirt communicates the route from player height.",
    "Foliage variation/spacing is readable and the Dirt route stays clear automatically.",
    "Test_Sculpt can be hidden or reduced with Alpha without damaging Base_Terrain.",
    "The spline road remains painted/deformed after editor guides are hidden and can still be reshaped by moving spline control points.",
    "You can explain the difference between Landscape material layers, Edit Layers, Landscape Splines and optional Spline Mesh geometry."
  ],
  "icon": "🏔",
  "featured": true,
  "referenceImages": [],
  "source": {
    "title": "Epic UE5.8 — Landscape Quick Start",
    "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine"
  },
  "prescriptive": true
};
  if (!tools.tutorials.some(t => t.id === tutorial.id)) tools.tutorials.push(tutorial);
  // Defensive cleanup: if an older runtime ever injected this ID into Designer Studio, remove it there.
  const landscape = design.modules.find(m => m.id === 'landscape');
  if (landscape && Array.isArray(landscape.tutorials)) {
    landscape.tutorials = landscape.tutorials.filter(id => id !== tutorial.id);
  }
})();
