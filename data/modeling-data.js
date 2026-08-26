window.UE5_MODELING_DATA = {
  "version": "3.26.0",
  "updated": "26 Aug 2026",
  "philosophy": "Slow, methodical, visual and cumulative. Build correctly before building quickly.",
  "lessons": [
    {
      "id": "max-orientation",
      "order": 1,
      "title": "Know the Workspace Before You Model",
      "icon": "◫",
      "duration": "45–60 min",
      "newSkill": "Interface orientation + safe files",
      "priorSkills": [],
      "reuseNext": [
        "Primitives",
        "Transforms"
      ],
      "aim": "Navigate the parts of 3ds Max used for modelling, save safely and recover from a mistake without damaging the scene.",
      "intro": "3ds Max contains a lot of interface because it does a lot of jobs. You do not need to learn all of it. This first lesson reduces the program to the few areas a modeller needs today.",
      "safety": "Create a new practice folder before touching geometry. Never use a student’s only copy of a model for an experiment.",
      "steps": [
        {
          "title": "Start a clean scene",
          "where": "File menu → New",
          "do": "Create a new scene. If Max asks what to reset, choose the normal new-scene option. Immediately use File → Save As and save it as 01_Max_Orientation.max inside a new modelling practice folder.",
          "see": "You should be looking at an empty scene and the title bar should show your saved file name.",
          "check": "Press Ctrl+S once. If Max does not ask where to save, the file is already safely located.",
          "why": "Saving before modelling gives Undo and crash recovery somewhere sensible to return to.",
          "stuck": [],
          "warning": "Do not practise inside an assessment model or downloaded asset.",
          "visual": ""
        },
        {
          "title": "Find the viewport",
          "where": "Centre of the 3ds Max window",
          "do": "Click once inside a viewport, then use Alt+W to maximise that active viewport. Press Alt+W again to return to the multi-viewport layout.",
          "see": "The active viewport fills the modelling area, then returns to the previous layout.",
          "check": "Right-click a different viewport and press Alt+W. That viewport should maximise without changing your object selection.",
          "why": "The viewport is where you inspect and edit geometry. Knowing which viewport is active prevents edits happening from an unexpected view.",
          "stuck": [
            "If Alt+W does nothing, click inside a viewport first.",
            "If you accidentally select something, press Ctrl+Z or click empty space."
          ],
          "warning": "",
          "visual": "assets/modeling/diagrams/interface-map.svg"
        },
        {
          "title": "Find Create and Modify",
          "where": "Right side → Command Panel",
          "do": "Locate the Command Panel on the right. Click the Create tab, then the Modify tab beside it. Do not change anything yet.",
          "see": "The contents of the right panel should change between object-creation controls and modification controls.",
          "check": "Say out loud which tab you would use to create a Box and which you would use to edit an existing object.",
          "why": "Most early Max confusion is simply being in the wrong panel. Create makes objects; Modify edits selected objects.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Find the transform tools",
          "where": "Main toolbar near the top",
          "do": "Locate Select and Move, Select and Rotate, and Select and Uniform Scale. Hover each tool and read its tooltip. Do not memorise icons by colour alone.",
          "see": "Each tool should show a tooltip naming the transform.",
          "check": "Use the W, E and R keys one at a time and watch which transform tool becomes active.",
          "why": "These are the three transforms you will use constantly. Keyboard shortcuts are faster, but the toolbar confirms what mode is active.",
          "stuck": [],
          "warning": "Do not press Auto Key. A red timeline/viewport border means animation recording may be active.",
          "visual": ""
        },
        {
          "title": "Practise safe Undo",
          "where": "Command Panel → Create → Geometry → Standard Primitives → Box",
          "do": "Create one Box in the viewport. Press W and move it somewhere obvious. Press Ctrl+Z once. Then press Ctrl+Y once.",
          "see": "Undo returns the box to its previous position; Redo reapplies the movement.",
          "check": "Move the box again, undo it, then save the scene as 01_Max_Orientation_v02.max.",
          "why": "Modelling is iterative. Undo is a normal tool, but versioned files protect you when Undo history is no longer enough.",
          "stuck": [],
          "warning": "",
          "visual": ""
        }
      ],
      "practice": {
        "title": "Primitive sculpture",
        "task": "Using only Box, Cylinder and Sphere primitives, make a recognisable robot, vehicle or tiny room. Do not convert anything to Editable Poly yet. The goal is navigation and selection, not detail.",
        "check": [
          "Every object has a clear name.",
          "You can select the object you intend.",
          "You can maximise and restore a viewport.",
          "You saved a second version before finishing."
        ]
      },
      "common": [
        "Modelling before the file has been saved.",
        "Working in the wrong viewport.",
        "Accidentally enabling Auto Key.",
        "Moving the wrong object because selection was not checked."
      ],
      "officialRefs": [
        {
          "title": "Autodesk 3ds Max Interface Overview",
          "url": "https://help.autodesk.com/cloudhelp/2026/ENU/3DSMax-Basics/files/GUID-F8326C68-F2F9-47F7-AC1D-BA41D7825C7C.html",
          "note": "Current Autodesk interface map and terminology."
        },
        {
          "title": "Autodesk Command Panel",
          "url": "https://help.autodesk.com/cloudhelp/2026/ENU/3DSMax-Basics/files/GUID-E3CB809D-94ED-4C30-892B-1D12B8721EA5.htm",
          "note": "Current Autodesk explanation of the Create / Modify / other Command Panel tabs."
        }
      ],
      "visual": "assets/modeling/diagrams/interface-map.svg",
      "interfaceImages": [
        {
          "src": "https://static.wixstatic.com/media/fd8ea2_4066070155e6471bb6e40a9f6784f48e~mv2.png/v1/fill/w_980,h_628,al_c,q_90,enc_avif,quality_auto/fd8ea2_4066070155e6471bb6e40a9f6784f48e~mv2.png",
          "caption": "3ds Max 2024 interface reference. Use it only to orient yourself; your current Max layout can differ.",
          "sourceUrl": "https://www.margaritanikita.com/post/3ds-max-interface-overview",
          "sourceTitle": "3ds Max Interface Overview (Margarita Nikita)",
          "version": "2024"
        }
      ]
    },
    {
      "id": "max-primitives-transforms",
      "order": 2,
      "title": "Primitives, Exact Transforms & Blockout",
      "icon": "⬚",
      "duration": "60–75 min",
      "newSkill": "Primitives + accurate Move/Rotate/Scale",
      "priorSkills": [
        "Workspace orientation"
      ],
      "reuseNext": [
        "Editable Poly",
        "Modular modelling"
      ],
      "aim": "Create simple forms at sensible dimensions and place them accurately without distorting the scene by accident.",
      "intro": "Good modelling starts with proportion and silhouette. If the blockout is wrong, detail only makes the wrong object more expensive.",
      "safety": "Before scaling an object, decide whether you really want a transform scale or whether changing the primitive’s dimensions would be cleaner.",
      "steps": [
        {
          "title": "Create a measured Box",
          "where": "Command Panel → Create → Geometry → Standard Primitives → Box",
          "do": "Create a Box. With it selected, open the Modify tab and type sensible Length, Width and Height values rather than dragging until it “looks about right”.",
          "see": "The box changes shape while remaining a Box in the modifier stack.",
          "check": "Change one dimension twice. You should be able to return to the previous value exactly.",
          "why": "Parametric primitives are editable starting points. Keeping dimensions available makes blockout changes easy.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Move on one axis",
          "where": "Main toolbar → Select and Move, or W",
          "do": "Select the Box. Drag only the red X arrow. Undo. Then drag only the green Y arrow. Undo. Then use the coordinate fields at the bottom of Max to enter a known position.",
          "see": "Only one coordinate changes at a time when you constrain the movement.",
          "check": "Check the coordinate readout: the axis you did not move should retain its value.",
          "why": "Axis-constrained movement is safer than dragging the centre freely when alignment matters.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Rotate deliberately",
          "where": "Select and Rotate, or E",
          "do": "Create a second primitive. Rotate it using one coloured ring at a time. Then enter a clean 90-degree rotation instead of eyeballing it.",
          "see": "The object should rotate around one axis without drifting in position.",
          "check": "Return the object to a clean 0 or 90 degree value.",
          "why": "Clean rotations matter for modular assets, symmetry and export.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Scale without destroying proportion",
          "where": "Select and Uniform Scale, or R",
          "do": "Duplicate a primitive. Uniform-scale one copy from the centre. On the other copy, change its Length/Width/Height in the Modify panel. Compare the two methods.",
          "see": "Both can make an object larger, but only the primitive-parameter method changes the base dimensions while keeping object scale cleaner.",
          "check": "Select both objects and inspect their transform scale values.",
          "why": "Students often use Scale as a substitute for modelling. Knowing the difference prevents later transform/export problems.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Make a blockout only",
          "where": "Create → Standard Primitives",
          "do": "Using Boxes and Cylinders only, block out a simple desk or storage unit from reference. Match large proportions first. Do not add bevels, bolts or tiny details.",
          "see": "The object should read correctly from several metres away even though it is made from simple forms.",
          "check": "Orbit around it. If the silhouette is wrong from side/front views, fix it now rather than adding detail.",
          "why": "Blockout tests proportion cheaply. Detail should come after the large forms work.",
          "stuck": [],
          "warning": "",
          "visual": ""
        }
      ],
      "practice": {
        "title": "Blockout a small room",
        "task": "Create floor, four walls, a doorway gap and three large props using primitives only. Work to a grid and name every object.",
        "check": [
          "No tiny detail.",
          "Objects have sensible dimensions.",
          "Walls meet cleanly.",
          "Door opening is believable human scale."
        ]
      },
      "common": [
        "Using Scale for every size change.",
        "Free-dragging when an axis constraint is needed.",
        "Adding detail before proportions are correct.",
        "Leaving objects named Box001, Box002, Box003."
      ],
      "officialRefs": [
        {
          "title": "Autodesk Quick Start Guide",
          "url": "https://www.autodesk.com/learn/ondemand/curated/3ds-max-quick-start-guide",
          "note": "Official current beginner reference for primitives, navigation and scene work."
        }
      ],
      "visual": "assets/modeling/diagrams/interface-map.svg"
    },
    {
      "id": "max-editable-poly",
      "order": 3,
      "title": "Editable Poly: Vertex, Edge, Border, Polygon, Element",
      "icon": "⬡",
      "duration": "75–90 min",
      "newSkill": "Editable Poly + sub-object selection",
      "priorSkills": [
        "Primitives",
        "Transforms"
      ],
      "reuseNext": [
        "Extrude",
        "Inset",
        "Topology"
      ],
      "aim": "Convert a copy of a primitive to Editable Poly and make controlled sub-object edits without accidentally changing the wrong geometry.",
      "intro": "This is the point where 3D modelling becomes easy to break. The most important skill today is not a button: it is checking what level and what geometry you have selected before committing an edit.",
      "safety": "Duplicate the object before conversion. Converting to Editable Poly removes the original primitive creation parameters.",
      "steps": [
        {
          "title": "Duplicate before conversion",
          "where": "Select object → Shift+Move, or Edit → Clone",
          "do": "Make a copy of your Box. Rename the copies Crate_SAFE and Crate_WORK. Hide or move Crate_SAFE away from the working area.",
          "see": "Two separate objects should exist and only Crate_WORK should be used for the conversion exercise.",
          "check": "Select each object and confirm its name in the Command Panel.",
          "why": "A safe copy is cheap insurance while students are learning destructive modelling.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Convert the working copy",
          "where": "Right-click Crate_WORK in the viewport → Convert To → Convert to Editable Poly",
          "do": "Convert only Crate_WORK. Then look at the Modify panel / stack.",
          "see": "The object should now say Editable Poly instead of Box, and its original Box dimensions are no longer editable.",
          "check": "Select Crate_SAFE: it should still say Box. Select Crate_WORK: it should say Editable Poly.",
          "why": "Conversion changes the type of object and gives direct polygon modelling tools, but sacrifices parametric Box controls.",
          "stuck": [],
          "warning": "If both objects became Editable Poly, undo immediately.",
          "visual": ""
        },
        {
          "title": "Learn the five sub-object levels",
          "where": "Modify panel → expand Editable Poly",
          "do": "Click Vertex, then Edge, Border, Polygon and Element one at a time. Each time, click a single component in the viewport and then clear the selection.",
          "see": "The selection type changes: points, lines, open boundaries, faces, or connected chunks.",
          "check": "Before moving anything, say the active selection level and count what is selected.",
          "why": "Most accidental modelling damage comes from editing at the wrong sub-object level or with hidden selections.",
          "stuck": [],
          "warning": "",
          "visual": "assets/modeling/diagrams/editable-poly.svg"
        },
        {
          "title": "Move one vertex safely",
          "where": "Editable Poly → Vertex",
          "do": "Select one visible corner vertex. Orbit the model before moving it so you can see whether another vertex is also selected. Move it a small amount on one axis, then undo.",
          "see": "Only one corner should move. Undo should restore the original shape exactly.",
          "check": "Toggle Edged Faces (F4) and confirm no other geometry changed.",
          "why": "Orbiting before committing reveals hidden or accidental selections.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Move one face safely",
          "where": "Editable Poly → Polygon",
          "do": "Select a single face. Confirm it is the only highlighted face. Move it a small distance outward, then undo.",
          "see": "The face and connected side edges move; the rest of the object remains connected.",
          "check": "Undo and check that the original box is restored with no gap or detached face.",
          "why": "Polygon editing changes the surrounding topology too. Students need to see that a face is part of a connected surface, not a sticker.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Exit sub-object mode",
          "where": "Modify panel → click the active sub-object level again, or select the top Editable Poly entry",
          "do": "Return to object level before trying to move the entire object.",
          "see": "The whole object selects as one object again.",
          "check": "Press W and move the object. If only points/faces move, you are still in sub-object mode.",
          "why": "Leaving sub-object mode prevents the classic mistake of trying to reposition a model and deforming only part of it.",
          "stuck": [],
          "warning": "",
          "visual": ""
        }
      ],
      "practice": {
        "title": "Turn a box into a simple stool",
        "task": "Use only Vertex, Edge and Polygon transforms. No Extrude yet. Change a box-like block into a deliberately asymmetrical stool/bench shape while keeping it one connected clean object.",
        "check": [
          "You can explain which sub-object level you used for each change.",
          "No detached polygons.",
          "No accidental hidden selection.",
          "You still have the safe original copy."
        ]
      },
      "common": [
        "Forgetting which sub-object level is active.",
        "Moving the whole model while still at Vertex/Polygon level.",
        "Converting the only copy of the primitive.",
        "Selecting through the model and moving hidden components accidentally."
      ],
      "officialRefs": [
        {
          "title": "Autodesk: Use polygon modifiers in 3ds Max",
          "url": "https://www.autodesk.com/learn/ondemand/curated/3ds-max-quick-start-guide/315e7GVmeOpE0HYf7F1QT0",
          "note": "Official Autodesk walkthrough of Editable Poly, sub-object levels and Edit Poly workflows."
        }
      ],
      "visual": "assets/modeling/diagrams/editable-poly.svg",
      "interfaceImages": [
        {
          "src": "https://forums.autodesk.com/t5/image/serverpage/image-id/1411282i2C69C469DC17534A/image-size/medium?px=400&v=v2",
          "caption": "3ds Max 2024 Editable Poly polygon selection reference from Autodesk Community. Current icons/layout may vary slightly.",
          "sourceUrl": "https://forums.autodesk.com/t5/3ds-max-modeling-forum/smart-extrude-not-working-max-2024/td-p/13031449",
          "sourceTitle": "Autodesk Community — Editable Poly 2024",
          "version": "2024"
        }
      ]
    },
    {
      "id": "max-extrude-inset",
      "order": 4,
      "title": "Extrude & Inset: Build the First Crate",
      "icon": "▤",
      "duration": "90 min",
      "newSkill": "Extrude + Inset",
      "priorSkills": [
        "Editable Poly",
        "Polygon selection"
      ],
      "reuseNext": [
        "Edge loops",
        "Chamfer",
        "UVs"
      ],
      "aim": "Use Inset and Extrude to create controlled surface depth without repeatedly extruding by accident or destroying the base shape.",
      "intro": "Extrude and Inset are simple tools, but careless repeated clicks create overlapping faces, double extrusions and ugly topology. Work slowly and commit one operation at a time.",
      "safety": "Save Crate_01_Blockout.max before starting. At each checkpoint, save a new numbered version.",
      "steps": [
        {
          "title": "Prepare one clean face",
          "where": "Open Crate_01_Blockout.max → select Crate_WORK → Modify → Editable Poly → Polygon",
          "do": "Select the front face only. Orbit to verify there is no selection on the rear of the crate.",
          "see": "One front polygon should be highlighted.",
          "check": "Turn on Edged Faces (F4). You should still see one clean rectangular face selected.",
          "why": "Selection quality matters more than tool speed.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Create the first Inset",
          "where": "Editable Poly → Edit Polygons rollout → Inset",
          "do": "Start Inset and create one small even border around the selected front face. Commit the operation once.",
          "see": "The original face becomes a smaller centre face surrounded by a ring of new polygons.",
          "check": "Undo and redo once. Confirm the border is even and has not crossed over itself.",
          "why": "Inset creates geometry that gives you a clean region to push inward or outward.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Extrude the centre inward",
          "where": "Keep the centre polygon selected → Extrude",
          "do": "Extrude the centre polygon inward a small amount. Commit once, then right-click to exit the operation.",
          "see": "The crate front now has a recessed panel with side walls connecting the inset border to the centre.",
          "check": "Orbit around the recess. No faces should be missing, detached or visibly doubled.",
          "why": "A single controlled extrude creates depth. Multiple accidental extrudes can leave overlapping geometry in the same place.",
          "stuck": [],
          "warning": "If the face jumps twice or you see flickering/z-fighting, undo until you are back before the duplicate extrusion.",
          "visual": ""
        },
        {
          "title": "Build a second panel independently",
          "where": "Polygon level",
          "do": "Select a side face and repeat: Inset once, inspect, then Extrude once, inspect. Do not copy the numerical value blindly if the side proportions are different.",
          "see": "A second deliberate panel should appear without changing the front panel.",
          "check": "Switch to wireframe/Edged Faces and confirm both panels have readable edge boundaries.",
          "why": "Repeating the technique on a different face proves you understand the tool rather than memorising one click sequence.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Checkpoint the file",
          "where": "File → Save As",
          "do": "Save as Crate_02_ExtrudeInset.max. Keep Crate_01_Blockout.max unchanged.",
          "see": "You should now have at least two recoverable stages on disk.",
          "check": "Close neither file; simply confirm the new filename in the title bar.",
          "why": "Versioning lets you recover from modelling errors discovered much later.",
          "stuck": [],
          "warning": "",
          "visual": ""
        }
      ],
      "practice": {
        "title": "Crate panel language",
        "task": "Add 2–4 large recessed or raised panels to the crate using only Inset and Extrude. Do not add tiny bolts or decorative noise.",
        "check": [
          "Every extrusion was intentional.",
          "No flickering faces.",
          "Silhouette still reads as a crate.",
          "Saved as a new version."
        ]
      },
      "common": [
        "Double extruding the same polygon.",
        "Inset crossing itself because the amount is too large.",
        "Adding tiny detail before the main forms are resolved.",
        "Extruding in the wrong direction because the face normal/orientation was not checked."
      ],
      "officialRefs": [
        {
          "title": "Autodesk polygon modelling Quick Start",
          "url": "https://www.autodesk.com/learn/ondemand/curated/3ds-max-quick-start-guide/315e7GVmeOpE0HYf7F1QT0",
          "note": "Official Autodesk reference for polygon modelling tools."
        }
      ],
      "visual": "assets/modeling/diagrams/editable-poly.svg"
    },
    {
      "id": "max-edge-control",
      "order": 5,
      "title": "Edge Control: Connect, Loops & Support Geometry",
      "icon": "≡",
      "duration": "75–90 min",
      "newSkill": "Connect + edge loops",
      "priorSkills": [
        "Extrude",
        "Inset",
        "Edge selection"
      ],
      "reuseNext": [
        "Chamfer",
        "Topology",
        "Hard surface"
      ],
      "aim": "Add edges only where they support shape or future edits, then use loops/rings to select repeated structure safely.",
      "intro": "Extra geometry is not automatically better geometry. Today you add edges with a purpose: control shape, support a panel, or make a clean selection path.",
      "safety": "Work on Crate_02_ExtrudeInset.max and immediately save Crate_03_EdgeControl.max before editing.",
      "steps": [
        {
          "title": "Identify an edge ring",
          "where": "Editable Poly → Edge",
          "do": "Select one vertical edge on a simple rectangular section. Use Ring selection to select parallel edges around the section.",
          "see": "Several parallel edges should become selected; they should not snake randomly across unrelated geometry.",
          "check": "Orbit around the model and inspect every selected edge before editing.",
          "why": "Ring selection is useful for adding cross-sections through a repeated strip of polygons.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Connect selected edges",
          "where": "With a clean edge ring selected → Connect",
          "do": "Use Connect with a single segment first. Keep the new edge roughly central. Commit and exit the operation.",
          "see": "A new loop/cross-section should appear through the selected ring.",
          "check": "Undo once and confirm the new loop disappears cleanly. Redo if correct.",
          "why": "Connect creates controlled topology across selected edges; using one segment makes the result easy to inspect.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Move the new loop deliberately",
          "where": "Edge mode → select the new loop",
          "do": "Select the new loop only. Move/slide it slightly to shape the panel. Do not free-drag individual vertices.",
          "see": "The loop shifts while maintaining the surrounding surface.",
          "check": "Check front/side views for accidental skew.",
          "why": "Moving a coherent loop preserves cleaner structure than tugging unrelated vertices one by one.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Use Swift Loop only with a reason",
          "where": "Graphite Modeling Tools / Ribbon → Swift Loop",
          "do": "On a simple area, preview where Swift Loop would insert a loop. Add one loop, inspect it, then undo if it adds no useful control.",
          "see": "The inserted loop follows the existing quad flow where possible.",
          "check": "Ask: does this edge affect silhouette, shading, deformation or a future modelling operation? If not, delete/undo it.",
          "why": "The goal is not “more loops”; it is useful structure.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Inspect density",
          "where": "Viewport → F4 Edged Faces",
          "do": "View the whole crate with edged faces. Look for one area that is much denser than the rest for no reason.",
          "see": "The topology should be understandable at a glance rather than a web of unnecessary cuts.",
          "check": "Compare the dense area to a simple area and explain why each extra edge exists.",
          "why": "Consistent, purposeful density makes models easier to edit and debug.",
          "stuck": [],
          "warning": "",
          "visual": "assets/modeling/diagrams/topology-check.svg"
        }
      ],
      "practice": {
        "title": "Make the crate support its forms",
        "task": "Add only the edge loops needed to control the major panels and corner treatment you intend to use next. Write one sentence explaining the purpose of each new loop group.",
        "check": [
          "No random loops added for decoration.",
          "Ring/Loop selections behave predictably.",
          "No tiny sliver polygons.",
          "Topology remains readable."
        ]
      },
      "common": [
        "Adding five segments when one would do.",
        "Using Swift Loop everywhere because it is fast.",
        "Creating loops that terminate awkwardly through important surfaces.",
        "Not checking the back/underside of the object."
      ],
      "officialRefs": [
        {
          "title": "Autodesk polygon modelling Quick Start",
          "url": "https://www.autodesk.com/learn/ondemand/curated/3ds-max-quick-start-guide/315e7GVmeOpE0HYf7F1QT0",
          "note": "Official Autodesk introduction to poly tools and modifier workflows."
        }
      ],
      "visual": "assets/modeling/diagrams/topology-check.svg"
    },
    {
      "id": "max-chamfer-smoothing",
      "order": 6,
      "title": "Chamfer, Hard Edges & Shading",
      "icon": "◈",
      "duration": "90 min",
      "newSkill": "Chamfer + shading inspection",
      "priorSkills": [
        "Edge loops",
        "Edge selection"
      ],
      "reuseNext": [
        "Modifiers",
        "Game-ready props"
      ],
      "aim": "Use restrained chamfers to catch light and improve hard-surface readability without exploding polygon count or melting the shape.",
      "intro": "Perfectly sharp computer-generated edges often look unnatural. A small bevel/chamfer helps light describe the form — but too many segments or too large a width can destroy the model.",
      "safety": "Duplicate the crate or save Crate_04_Chamfer.max before applying any broad edge operation.",
      "steps": [
        {
          "title": "Choose only edges that need a bevel",
          "where": "Editable Poly → Edge",
          "do": "Select the outer edges of one simple corner area. Use Loop where appropriate, but inspect the full selection before continuing.",
          "see": "Only the intended hard corner edges should be highlighted.",
          "check": "Orbit 360 degrees. If an internal/recess edge is selected unintentionally, remove it from the selection.",
          "why": "Chamfering the wrong edge can alter panel depth and silhouette.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Apply a tiny Chamfer first",
          "where": "Editable Poly → Edit Edges → Chamfer, or add a Chamfer modifier to a controlled selection",
          "do": "Start with a small chamfer amount and 1 segment. Commit only after inspecting the preview.",
          "see": "The razor edge becomes a narrow flat strip that catches light without changing the overall silhouette much.",
          "check": "Zoom out. The crate should still read as the same shape. Zoom in. You should see a controlled bevel.",
          "why": "Start small. You can increase a bevel; fixing an over-chamfered mesh is harder.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Compare segment counts",
          "where": "Chamfer settings",
          "do": "On a safe duplicate, compare 1, 2 and a deliberately excessive segment count. Watch the edge count and appearance. Undo the excessive version.",
          "see": "More segments make a rounder bevel but add geometry quickly.",
          "check": "Use the lowest segment count that gives the visual result required by the asset and camera distance.",
          "why": "Polygon count should be driven by visible value, not a belief that “smooth = professional”.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Check shading, not just wireframe",
          "where": "Viewport shaded mode + Edged Faces toggle",
          "do": "Toggle edged faces off and orbit under the viewport light. Look for pinching, strange gradients or dark patches around the chamfer.",
          "see": "The bevel should produce a clean highlight and the large flat surfaces should still read as flat.",
          "check": "If a large flat face looks lumpy, inspect topology and smoothing rather than adding more segments.",
          "why": "Good topology and normals/shading work together. Geometry that looks clean in wireframe can still shade badly.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Save a clean milestone",
          "where": "File → Save As",
          "do": "Save Crate_04_Chamfer.max. Keep the previous edge-control version.",
          "see": "The stage is recoverable independently.",
          "check": "Reopen the earlier version only if needed; do not overwrite it.",
          "why": "Hard-surface operations can reveal topology issues later, so staged files are valuable.",
          "stuck": [],
          "warning": "",
          "visual": ""
        }
      ],
      "practice": {
        "title": "Lighting test",
        "task": "Create a simple plane and light the crate from a grazing angle. Compare the original razor-edged blockout with the chamfered version. Explain which edges benefit from a bevel and which should stay simple.",
        "check": [
          "Chamfer width is consistent.",
          "No huge segment count.",
          "Large flat faces shade cleanly.",
          "Silhouette was not accidentally rounded away."
        ]
      },
      "common": [
        "Chamfering every edge automatically.",
        "Using too many segments.",
        "Making the chamfer so wide that the asset changes shape.",
        "Trying to hide bad topology by adding subdivision."
      ],
      "officialRefs": [
        {
          "title": "Autodesk modelling learning catalogue",
          "url": "https://www.autodesk.com/learn/ondemand/curated/3ds-max-quick-start-guide",
          "note": "Current Autodesk modelling and modifier reference."
        }
      ],
      "visual": "assets/modeling/diagrams/topology-check.svg"
    },
    {
      "id": "max-modifier-stack",
      "order": 7,
      "title": "Modifier Stack, Symmetry & Non-destructive Work",
      "icon": "↕",
      "duration": "90 min",
      "newSkill": "Modifier stack + Symmetry + Shell",
      "priorSkills": [
        "Editable Poly",
        "Chamfer"
      ],
      "reuseNext": [
        "Modular assets",
        "Doors",
        "Reusable workflow"
      ],
      "aim": "Use the modifier stack to preserve editable decisions and understand why stack order changes the result.",
      "intro": "The modifier stack is one of Max’s strongest features. Treat it like editable history, not a pile of buttons to collapse as soon as the object looks finished.",
      "safety": "Always save before Collapse. If you cannot explain what editability you will lose, do not collapse the stack.",
      "steps": [
        {
          "title": "Read the stack bottom to top",
          "where": "Select a primitive → Modify panel",
          "do": "Look at the base object and any modifiers above it. Read them from the bottom upward. Toggle a modifier’s visibility off and on.",
          "see": "Turning a modifier off should reveal the result from the stack below it.",
          "check": "Explain which entry represents the starting geometry and which entry changes it later.",
          "why": "3ds Max evaluates the stack in order from the base upward.",
          "stuck": [],
          "warning": "",
          "visual": "assets/modeling/diagrams/modifier-stack.svg"
        },
        {
          "title": "Add Edit Poly without converting",
          "where": "Create a fresh Box → Modify → Modifier List → Edit Poly",
          "do": "Add Edit Poly as a modifier rather than converting the Box. Enter Polygon level and make one simple change.",
          "see": "The stack should still contain Box underneath Edit Poly.",
          "check": "Click Box in the stack and change a dimension. The Edit Poly result above should update where the topology still supports it.",
          "why": "This preserves primitive parameters and demonstrates why modifier-based editing can be safer early in a model.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Build half a symmetrical object",
          "where": "Create a Box → add Edit Poly → shape only one half",
          "do": "Delete or ignore half the form as directed, then add a Symmetry modifier above the modelling stage. Adjust the mirror axis only if needed.",
          "see": "One half should mirror into a complete symmetrical form.",
          "check": "Edit the original half. The opposite side should update automatically.",
          "why": "Symmetry cuts workload and guarantees matching halves — ideal for doors, weapons and many props.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Test stack order",
          "where": "With Symmetry and Chamfer available",
          "do": "On a duplicate, compare Chamfer above Symmetry versus a different order. Observe where seams or edge treatment change. Return to the cleanest order.",
          "see": "The visual result changes because one modifier receives the output of the modifier below it.",
          "check": "State which operation should happen first for your current object and why.",
          "why": "Stack order is part of modelling logic.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Use Shell on a thin surface",
          "where": "Create a Plane or thin panel → Modifier List → Shell",
          "do": "Add a small thickness with Shell. Keep the amount sensible.",
          "see": "A single surface becomes a thin solid piece with side walls.",
          "check": "Orbit around the edge and verify it has thickness without self-intersection.",
          "why": "Shell is useful for panels and thin geometry where modelling both surfaces manually would be wasteful.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Do not collapse yet",
          "where": "Modifier stack context menu",
          "do": "Open the stack menu and locate Collapse options, but do not execute them on the working asset. Save a copy first if you want to test.",
          "see": "Your working stack remains editable.",
          "check": "Can you return to the base object and still change it? If yes, the non-destructive chain remains available.",
          "why": "Knowing when not to collapse is a professional habit.",
          "stuck": [],
          "warning": "",
          "visual": ""
        }
      ],
      "practice": {
        "title": "Symmetrical sci-fi panel",
        "task": "Build half of a simple sci-fi wall or door panel, mirror it with Symmetry, add controlled thickness with Shell if appropriate, and keep the stack editable.",
        "check": [
          "Base + modifiers remain visible in stack.",
          "Symmetry seam is clean.",
          "No accidental collapse.",
          "Changing the source half updates the mirrored result."
        ]
      },
      "common": [
        "Collapsing too early.",
        "Adding modifiers without understanding stack order.",
        "Editing the mirrored side instead of the source geometry.",
        "Using Shell thickness that intersects the model."
      ],
      "officialRefs": [
        {
          "title": "Autodesk: Use polygon modifiers",
          "url": "https://www.autodesk.com/learn/ondemand/curated/3ds-max-quick-start-guide/315e7GVmeOpE0HYf7F1QT0",
          "note": "Official Autodesk example of using Edit Poly in the modifier stack rather than converting immediately."
        }
      ],
      "visual": "assets/modeling/diagrams/modifier-stack.svg"
    },
    {
      "id": "max-topology-clinic",
      "order": 8,
      "title": "Topology Clinic: Diagnose Before You Repair",
      "icon": "⚕",
      "duration": "90 min",
      "newSkill": "Topology diagnosis + cleanup",
      "priorSkills": [
        "Editable Poly",
        "Edge control",
        "Chamfer"
      ],
      "reuseNext": [
        "UVs",
        "Export",
        "Fix This Model"
      ],
      "aim": "Identify unnecessary density, accidental doubles, open borders, broken smoothing and topology that makes the asset difficult to edit.",
      "intro": "Topology is not about making every face a quad. It is about producing geometry that supports the shape, shades correctly, unwraps predictably and is easy to maintain.",
      "safety": "Never “clean up” a model by randomly deleting edges. Save a diagnostic copy and make one repair at a time.",
      "steps": [
        {
          "title": "Inspect in shaded mode",
          "where": "Viewport → shaded view",
          "do": "Orbit around the asset and note visible problems first: pinching, flickering, holes, lumpy flats or unexpected silhouette changes. Do not edit yet.",
          "see": "You should have a short list of symptoms before looking at wireframe.",
          "check": "Write down the location of each problem.",
          "why": "Diagnosis starts with what the model is actually doing, not with deleting geometry because it looks busy.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Inspect with Edged Faces",
          "where": "Viewport → F4 Edged Faces",
          "do": "Toggle edged faces and compare clean areas with suspicious areas. Look for sudden density changes, tiny triangles/slivers, crossing-looking edges or loops with no clear purpose.",
          "see": "Problem areas should become easier to locate.",
          "check": "For every suspicious edge group, answer: what job is this geometry doing?",
          "why": "Purposeful topology can be dense; pointless topology is the problem.",
          "stuck": [],
          "warning": "",
          "visual": "assets/modeling/diagrams/topology-check.svg"
        },
        {
          "title": "Check open boundaries",
          "where": "Editable Poly → Border",
          "do": "Enter Border level and click around areas that should be sealed. Unexpected selectable borders may indicate holes/open geometry.",
          "see": "Intended openings select cleanly; closed surfaces should not expose unexpected borders.",
          "check": "If a hole is unintended, identify the edges around it before choosing a repair method.",
          "why": "Border selection is a quick way to locate open boundaries.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Check duplicates / accidental overlaps",
          "where": "Polygon / Vertex inspection",
          "do": "Look for flickering faces or vertices that seem doubled. Use Weld carefully only when you have confirmed two vertices should occupy the same location.",
          "see": "The repaired area should stop flickering and should not collapse unrelated shape.",
          "check": "Undo the weld and compare if uncertain. Never increase weld threshold wildly just to make an error disappear.",
          "why": "Over-aggressive welding can destroy nearby geometry.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Remove geometry only with a reason",
          "where": "Edge selection",
          "do": "On a safe duplicate, remove one unnecessary support loop using a topology-preserving edge removal method rather than simply deleting faces. Inspect the result.",
          "see": "The surface remains closed and the unnecessary loop disappears.",
          "check": "Check shading and silhouette after the removal.",
          "why": "Cleanup means simplifying while preserving function.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Pass the three-view check",
          "where": "Perspective + orthographic views",
          "do": "Inspect shaded perspective, edged perspective and at least one orthographic view before saving.",
          "see": "The model should look correct both visually and structurally.",
          "check": "If fixing topology changed the silhouette, decide whether the repair was actually an improvement.",
          "why": "A clean wireframe is not useful if the asset no longer matches the intended form.",
          "stuck": [],
          "warning": "",
          "visual": ""
        }
      ],
      "practice": {
        "title": "Repair a deliberately bad crate",
        "task": "Use the Fix This Model clinic to diagnose a dense or damaged crate. Record the symptom, cause, repair and proof for at least three issues.",
        "check": [
          "You diagnosed before editing.",
          "Every repair has a reason.",
          "Shading improved or stayed correct.",
          "No new holes or collapsed areas."
        ]
      },
      "common": [
        "Deleting edges without checking the resulting faces.",
        "Using a huge Weld threshold.",
        "Trying to force every polygon into a quad when a clean triangle is acceptable.",
        "Optimising so aggressively that the silhouette changes."
      ],
      "officialRefs": [
        {
          "title": "Autodesk 3ds Max 2026 Help",
          "url": "https://help.autodesk.com/view/3DSMAX/2026/ENU/",
          "note": "Current tool reference; use it when a UI control differs from a screenshot."
        }
      ],
      "visual": "assets/modeling/diagrams/topology-check.svg"
    },
    {
      "id": "max-modular-kit",
      "order": 9,
      "title": "Modular Assets: Grid, Scale, Pivots & Reuse",
      "icon": "▦",
      "duration": "90–120 min",
      "newSkill": "Modularity + pivots + snapping",
      "priorSkills": [
        "Transforms",
        "Topology",
        "Modifier stack"
      ],
      "reuseNext": [
        "Environment assembly",
        "UE5 grid snapping"
      ],
      "aim": "Create wall/floor pieces that share dimensions, align on a grid and have pivots placed for reliable assembly.",
      "intro": "A modular asset is successful when another person can place it quickly and predictably. Pretty geometry with the wrong dimensions or pivot is a bad modular asset.",
      "safety": "Decide the module size before modelling. Do not “fix” mismatched pieces by scaling them differently in Unreal later.",
      "steps": [
        {
          "title": "Choose a module size",
          "where": "Scene units / grid setup + primitive dimensions",
          "do": "Choose a simple module size appropriate for the exercise, such as a wall width that divides cleanly into the room. Create a Box to exact dimensions.",
          "see": "The first wall piece has known, repeatable dimensions.",
          "check": "Write the width/height/thickness in the object name or notes.",
          "why": "A shared measurement system is the foundation of modular snapping.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Duplicate without changing size",
          "where": "Select wall → Shift+Move / Clone",
          "do": "Create two copies. Move them by exact multiples of the module width instead of eyeballing the gap.",
          "see": "Edges meet cleanly without overlap or visible gap.",
          "check": "Zoom close to the join and inspect from front/top views.",
          "why": "Exact transforms make modular kits reliable.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Create a corner piece from the same rules",
          "where": "Duplicate a wall piece",
          "do": "Rotate a duplicate by a clean 90 degrees and place it using the same grid/module dimensions.",
          "see": "The corner forms a clean right angle and both pieces remain the same scale.",
          "check": "Check transform scale remains clean and the join is predictable.",
          "why": "Rotation and grid alignment should build the layout, not arbitrary scaling.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Place the pivot deliberately",
          "where": "Hierarchy tab → Pivot → Affect Pivot Only",
          "do": "On a duplicate/safe test piece, place the pivot at a useful snapping location such as a lower corner, then turn Affect Pivot Only off.",
          "see": "Transform gizmo appears at the chosen pivot without moving the geometry itself.",
          "check": "Rotate the object 90 degrees and confirm it rotates around the intended point.",
          "why": "Pivot placement controls how the asset behaves in Max and after export to Unreal.",
          "stuck": [],
          "warning": "Turn Affect Pivot Only OFF after editing the pivot. Leaving it on is a common source of confusing transforms.",
          "visual": ""
        },
        {
          "title": "Name the kit like a system",
          "where": "Object name field / Scene Explorer",
          "do": "Rename pieces consistently, e.g. SM_Wall_400, SM_Wall_Corner_400, SM_Floor_400.",
          "see": "Scene Explorer should read like a kit rather than a list of Box### objects.",
          "check": "Sort/search the names and verify related pieces group naturally.",
          "why": "Naming is part of making assets reusable by other people.",
          "stuck": [],
          "warning": "",
          "visual": ""
        }
      ],
      "practice": {
        "title": "Five-piece modular room kit",
        "task": "Build a small set: straight wall, corner, doorway wall, floor and ceiling. Assemble a test room from duplicates without non-uniformly scaling the pieces.",
        "check": [
          "Pieces snap/alignment is repeatable.",
          "Pivots are useful.",
          "Naming is consistent.",
          "Room can be rearranged quickly."
        ]
      },
      "common": [
        "Different module widths that almost match.",
        "Fixing gaps using random scale values.",
        "Leaving pivots at inconvenient centres.",
        "Moving geometry while Affect Pivot Only is still active."
      ],
      "officialRefs": [
        {
          "title": "Epic FBX Static Mesh Pipeline",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-static-mesh-pipeline-in-unreal-engine",
          "note": "Epic explains why pivot placement matters for snapping and placement in Unreal."
        }
      ],
      "visual": "assets/modeling/diagrams/pipeline.svg"
    },
    {
      "id": "max-uvs",
      "order": 10,
      "title": "UVs: Unwrap, Checker, Scale & Packing",
      "icon": "▧",
      "duration": "120 min",
      "newSkill": "Unwrap UVW + checker validation",
      "priorSkills": [
        "Clean topology",
        "Modular assets"
      ],
      "reuseNext": [
        "Substance Painter",
        "Texturing",
        "UE5"
      ],
      "aim": "Create usable UVs, identify stretching with a checker pattern and keep shell scale reasonably consistent before texturing.",
      "intro": "UVs are not decoration. They tell a flat texture how to sit on a 3D surface. If the checker is stretched, the texture will be stretched too.",
      "safety": "Do not start texturing until the checker passes. Save a pre-UV model version first.",
      "steps": [
        {
          "title": "Add Unwrap UVW non-destructively",
          "where": "Select a clean asset → Modify → Modifier List → Unwrap UVW",
          "do": "Add Unwrap UVW above the modelling stack. Do not collapse it.",
          "see": "Unwrap UVW appears in the stack while the underlying modelling remains available.",
          "check": "Toggle the modifier off/on and confirm the geometry itself is unchanged.",
          "why": "UVs are data on the model; keeping the modifier editable makes corrections easier.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Open the UV Editor",
          "where": "Unwrap UVW → Edit UVs → Open UV Editor",
          "do": "Open the UV editor and inspect the existing projection. Do not immediately press an automatic mapping command.",
          "see": "You should see 2D UV vertices/edges representing the 3D polygons.",
          "check": "Select one shell or face in the UV editor and identify the matching area on the model.",
          "why": "Understanding the relationship between 3D faces and 2D shells is more important than pressing an auto-layout button.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Apply a checker",
          "where": "UV/Material checker display",
          "do": "Use a checker texture/display so the model is covered in visible squares. Orbit around it.",
          "see": "Clean areas show roughly square checkers; stretched UVs show rectangles/warped shapes.",
          "check": "Find at least one deliberately stretched area and explain the direction of the distortion.",
          "why": "A checker turns UV problems into visible evidence.",
          "stuck": [],
          "warning": "",
          "visual": "assets/modeling/diagrams/uv-check.svg"
        },
        {
          "title": "Create logical seams / shells",
          "where": "Unwrap UVW edge/seam tools",
          "do": "On a simple box-like prop, separate shells at sensible hidden/hard edges. Keep the number of shells manageable.",
          "see": "Large surfaces unfold without severe stretching and seams sit in sensible places.",
          "check": "Imagine painting across the seam: would the seam be visible in an important hero area?",
          "why": "Seams are necessary; the skill is choosing where they do the least harm.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Match shell scale",
          "where": "UV Editor transform tools",
          "do": "Scale shells so comparable surfaces show checkers at roughly comparable size.",
          "see": "Checker density looks consistent between major parts.",
          "check": "Compare a large side panel and a top panel. The checker squares should not be dramatically different sizes unless intentionally planned.",
          "why": "Consistent texel density makes materials feel coherent.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Pack without overlap",
          "where": "UV Editor → Arrange/Pack tools or manual layout",
          "do": "Place shells inside the 0–1 UV square with sensible padding. Avoid overlaps unless you deliberately intend mirrored/shared texture space.",
          "see": "Shells fit inside the tile with visible separation.",
          "check": "Zoom into tight gaps and confirm shells are not touching or crossing.",
          "why": "Good packing uses texture space efficiently while preventing texture bleeding.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Save the UV milestone",
          "where": "File → Save As",
          "do": "Save a new version such as Crate_05_UV.max or SM_Wall_400_UV.max.",
          "see": "The pre-UV and UV stages both remain recoverable.",
          "check": "Close and reopen the UV editor to confirm the layout persists.",
          "why": "UV work is valuable data. Version it like geometry.",
          "stuck": [],
          "warning": "",
          "visual": ""
        }
      ],
      "practice": {
        "title": "Unwrap the crate",
        "task": "Unwrap the crate built earlier. Produce a checker screenshot and UV layout screenshot as evidence before any texture painting.",
        "check": [
          "Checker is not visibly stretched.",
          "Major parts have similar texel density.",
          "No accidental overlaps.",
          "Shells have padding and fit in the tile."
        ]
      },
      "common": [
        "Texturing before checking distortion.",
        "Packing shells so tightly they touch.",
        "Making one tiny shell and one huge shell for equally important surfaces.",
        "Collapsing/losing the UV stage without a saved version."
      ],
      "officialRefs": [
        {
          "title": "Autodesk: Working with UVs in 3ds Max",
          "url": "https://www.autodesk.com/learn/ondemand/curated/3ds-max-quick-start-guide/5c6ClKRoe8ddY9qHLLZKVr",
          "note": "Official Autodesk Quick Start UV workflow."
        },
        {
          "title": "Autodesk Support: Unwrap UVW",
          "url": "https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/How-to-unfold-geometry-using-the-Unwrap-UVW-in-3ds-Max.html",
          "note": "Current Autodesk support article on unfolding geometry with Unwrap UVW."
        }
      ],
      "visual": "assets/modeling/diagrams/uv-check.svg"
    },
    {
      "id": "max-materials-substance",
      "order": 11,
      "title": "Material Prep & Substance Painter Handoff",
      "icon": "◒",
      "duration": "75–90 min",
      "newSkill": "Material IDs + texture-ready asset",
      "priorSkills": [
        "UVs",
        "Naming"
      ],
      "reuseNext": [
        "Texturing",
        "UE5 materials"
      ],
      "aim": "Prepare a clean asset for Substance Painter or another texturing tool without trying to hide modelling or UV problems with materials.",
      "intro": "Colour and texture cannot rescue broken geometry. This lesson is a handoff checkpoint: geometry passes, UVs pass, naming passes, then texturing starts.",
      "safety": "Keep the modelling master file. Export a copy for texturing; do not destructively alter the only source asset just to satisfy an export.",
      "steps": [
        {
          "title": "Run the geometry checkpoint",
          "where": "Shaded + Edged Faces",
          "do": "Inspect the asset one last time for holes, duplicate faces, shading problems and unnecessary dense areas.",
          "see": "The asset reads correctly shaded and its topology is understandable.",
          "check": "If a visible geometry problem exists, stop and fix it before texturing.",
          "why": "Texture detail should enhance a solid model, not camouflage errors.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Run the UV checkpoint",
          "where": "Unwrap UVW + checker",
          "do": "Open the UV Editor and apply the checker again. Verify shells, scale and overlap.",
          "see": "Checker remains clean after final geometry changes.",
          "check": "If the geometry changed after UVs were made, inspect the affected shells carefully.",
          "why": "Late modelling edits can invalidate UV work.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Assign simple material IDs only where needed",
          "where": "Material Editor / polygon Material ID controls",
          "do": "If the asset genuinely needs separate material regions, assign simple IDs deliberately. Avoid creating many materials for tiny colour changes that could live in one texture set.",
          "see": "Material regions correspond to meaningful surface groups.",
          "check": "List why each material slot/ID exists. If you cannot justify one, simplify.",
          "why": "Every additional material slot can increase authoring and rendering complexity.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Use clear export names",
          "where": "Scene Explorer / object names",
          "do": "Rename the final texturing mesh clearly, e.g. SM_Crate_A or SM_Door_SciFi_A. Avoid spaces and vague names such as final_final2.",
          "see": "The exported object name is readable and consistent with the project.",
          "check": "Search the scene for “Box” or “Object” leftovers and rename them.",
          "why": "Clean naming keeps Max, Substance and Unreal assets easy to trace.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Export a texturing copy",
          "where": "File → Export Selected",
          "do": "Select only the intended asset and export a copy for the texturing workflow using the format/settings required by your local Substance pipeline. Keep the Max master file unchanged.",
          "see": "The export contains the intended mesh only.",
          "check": "Import/open the exported mesh in your texturing tool and check scale, UVs and material sets before painting.",
          "why": "Pipeline checks catch problems at the boundary between applications.",
          "stuck": [],
          "warning": "",
          "visual": ""
        }
      ],
      "practice": {
        "title": "Texture-ready crate handoff",
        "task": "Prepare the crate for Substance Painter: geometry check, checker proof, sensible material structure, clear naming and a clean selected export.",
        "check": [
          "No modelling errors hidden by material.",
          "UV checker passes.",
          "Material slots are justified.",
          "Source Max file remains intact."
        ]
      },
      "common": [
        "Creating a material for every tiny detail.",
        "Exporting the whole scene by accident.",
        "Changing the master model destructively for export.",
        "Discovering UV errors only after painting has started."
      ],
      "officialRefs": [
        {
          "title": "Autodesk Learning Catalogue — materials and UVs",
          "url": "https://www.autodesk.com/learn/catalog/max",
          "note": "Official Autodesk learning catalogue includes current materials, UV and pipeline tutorials."
        }
      ],
      "visual": "assets/modeling/diagrams/pipeline.svg"
    },
    {
      "id": "max-ue5-export",
      "order": 12,
      "title": "Game Ready: Pivot, FBX Export & UE5 Verification",
      "icon": "⇥",
      "duration": "90–120 min",
      "newSkill": "FBX export + Unreal verification",
      "priorSkills": [
        "Clean mesh",
        "UVs",
        "Naming",
        "Pivots"
      ],
      "reuseNext": [
        "Independent asset pipeline",
        "Environment kits"
      ],
      "aim": "Export a static mesh from 3ds Max and verify its scale, pivot, geometry, UVs and placement behaviour inside Unreal Engine 5.8.",
      "intro": "The asset is not finished when it leaves Max. It is finished when it behaves correctly in the engine where the game will use it.",
      "safety": "Export Selected, not Export All, unless you intentionally want every supported object in the scene. Keep the Max master and exported FBX as separate artefacts.",
      "steps": [
        {
          "title": "Place and test the pivot",
          "where": "3ds Max → Hierarchy → Pivot → Affect Pivot Only",
          "do": "Put the pivot where the asset should rotate/snap in Unreal. For a modular floor/wall, a corner/base pivot is often useful. Turn Affect Pivot Only off.",
          "see": "The gizmo sits at the intended pivot and normal transforms affect the object again.",
          "check": "Rotate the object in Max to prove the pivot behaves correctly, then undo the rotation.",
          "why": "Unreal uses the imported pivot for transforms and placement.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Check scale against known dimensions",
          "where": "Modify/Measure tools + transform values",
          "do": "Verify the asset has the intended real-world dimensions and no accidental odd scale. For Unreal, remember 1 Unreal Unit equals 1 cm.",
          "see": "Dimensions are believable and consistent with the project.",
          "check": "Compare against a known door/person-scale reference.",
          "why": "Correct scale is much easier to fix in the DCC before dozens of copies exist in a level.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Export only the asset",
          "where": "Select the mesh(es) → File → Export Selected",
          "do": "Choose FBX and save to a clear export folder. Use the project/college’s agreed FBX preset. Do not export cameras/helpers unless intentionally required.",
          "see": "An FBX file is created containing the selected asset.",
          "check": "Re-select the mesh and confirm nothing extra was intended for export.",
          "why": "Selected export reduces scene clutter and accidental imports.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Respect the Unreal FBX pipeline",
          "where": "FBX export settings",
          "do": "Use the current project-compatible FBX settings. Epic’s UE5.8 documentation states that the Unreal FBX import pipeline uses FBX 2020.2; treat the current Epic docs as the source of truth if settings differ from an older tutorial.",
          "see": "Export completes without relying on an outdated random preset.",
          "check": "Open the linked Epic reference if the exporter/version options on your machine do not match the guide.",
          "why": "DCC/exporter versions change. Current engine documentation wins over old screenshots.",
          "stuck": [],
          "warning": "Do not blindly copy a 2018 YouTube FBX preset.",
          "visual": ""
        },
        {
          "title": "Import into Unreal",
          "where": "UE5 Content Browser → Import, or drag the FBX into the intended content folder",
          "do": "Import the FBX as a Static Mesh using the project’s normal settings. Keep auto-generated options deliberate rather than clicking through without reading.",
          "see": "A Static Mesh asset appears in the Content Browser.",
          "check": "Double-click the mesh to open the Static Mesh Editor.",
          "why": "The import dialog is a checkpoint, not a “Next” button.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Verify inside the Static Mesh Editor",
          "where": "Double-click imported Static Mesh",
          "do": "Inspect geometry, materials/UV channels, collision if applicable and overall scale. Then place one instance in a test level.",
          "see": "The mesh looks like the Max source, sits on the floor/grid correctly and rotates from the expected pivot.",
          "check": "Snap several modular pieces together or place the prop next to the default character/known scale reference.",
          "why": "Engine verification proves the asset is actually game ready.",
          "stuck": [],
          "warning": "",
          "visual": ""
        },
        {
          "title": "Return to Max if the source is wrong",
          "where": "Max master file",
          "do": "If scale, pivot, geometry or UVs are wrong, fix the source asset in Max and re-export. Do not build a pile of compensating Unreal transforms around a broken source.",
          "see": "The source of truth becomes correct, making every future import/copy predictable.",
          "check": "Reimport and verify the problem is gone without an Unreal-only workaround.",
          "why": "Fix problems at the earliest correct stage in the pipeline.",
          "stuck": [],
          "warning": "",
          "visual": "assets/modeling/diagrams/pipeline.svg"
        }
      ],
      "practice": {
        "title": "Crate to engine",
        "task": "Take the same crate from blockout through clean export and place three copies in UE5. Provide one Max wireframe screenshot, one UV checker screenshot and one UE5 placement screenshot.",
        "check": [
          "Correct scale.",
          "Correct pivot.",
          "Clean import.",
          "UVs/materials behave.",
          "Copies place predictably."
        ]
      },
      "common": [
        "Exporting the entire Max scene.",
        "Fixing wrong scale only in Unreal.",
        "Leaving an unusable pivot.",
        "Trusting the import without opening the Static Mesh Editor.",
        "Using an old FBX preset without checking current Epic guidance."
      ],
      "officialRefs": [
        {
          "title": "Epic UE5.8 FBX Static Mesh Pipeline",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-static-mesh-pipeline-in-unreal-engine",
          "note": "Current Epic source of truth for pivots, triangulation, UVs, collision and FBX compatibility."
        },
        {
          "title": "Epic UE5.8 Importing Static Meshes Using FBX",
          "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/importing-static-meshes-using-fbx-in-unreal-engine",
          "note": "Current Epic step-by-step import and verification workflow, including 3ds Max."
        }
      ],
      "visual": "assets/modeling/diagrams/pipeline.svg"
    }
  ],
  "builds": [
    {
      "id": "build-crate",
      "title": "Game-ready Crate",
      "icon": "▤",
      "difficulty": "Foundation",
      "time": "3–5 sessions",
      "requires": [
        "max-editable-poly",
        "max-extrude-inset",
        "max-edge-control",
        "max-chamfer-smoothing"
      ],
      "teaches": [
        "Editable Poly",
        "Inset",
        "Extrude",
        "Edge control",
        "Chamfer",
        "UVs",
        "UE5 export"
      ],
      "summary": "The spine asset. Start as a box, then keep improving the same crate through the whole pipeline.",
      "phases": [
        {
          "name": "Blockout",
          "brief": "Create the crate at sensible dimensions using a Box. Get proportion right before any detail.",
          "proof": "Front/side/perspective screenshots and clean object name.",
          "steps": [
            "Create a Box at deliberate crate dimensions; do not add extra segments yet.",
            "Name it Crate_WORK and duplicate a Crate_SAFE copy before conversion.",
            "Check proportion in Perspective, Front and Side. Fix dimensions now.",
            "Save as Crate_01_Blockout.max."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Primary forms",
          "brief": "Convert the working copy, add only large inset/extruded panels and keep a safe original.",
          "proof": "Edged Faces screenshot showing controlled panel topology.",
          "steps": [
            "Convert only Crate_WORK to Editable Poly.",
            "Select one front polygon, verify the rear face is not selected, then Inset once.",
            "Extrude the inset centre once to make a recess; exit the operation.",
            "Repeat on one side panel only after the first recess passes the wireframe check."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Edge control",
          "brief": "Add only useful loops and a restrained chamfer.",
          "proof": "Close-up wireframe + shaded lighting check.",
          "steps": [
            "Use Edge Ring/Connect only where a loop is needed to support a form.",
            "Select intended outer hard edges and apply a small 1-segment chamfer first.",
            "Toggle Edged Faces off and inspect shading under a grazing light.",
            "Save as Crate_04_Chamfer.max before any further cleanup."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "UV",
          "brief": "Unwrap, checker-test, match shell scale and pack.",
          "proof": "UV layout + checker screenshot.",
          "steps": [
            "Add Unwrap UVW without collapsing the modelling stack.",
            "Open UV Editor, create logical shells and apply a checker.",
            "Fix stretching first, then match shell scale, then pack with padding.",
            "Save UV layout and checker screenshots before texturing."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Game ready",
          "brief": "Set pivot, export selected and verify in UE5.",
          "proof": "UE5 screenshot with three copies placed at consistent scale.",
          "steps": [
            "Place the pivot at a useful base/corner position and turn Affect Pivot Only off.",
            "Verify dimensions and naming, then Export Selected as FBX using the college preset/current Epic guidance.",
            "Import as a Static Mesh in UE5 and open the Static Mesh Editor.",
            "Place three copies. If scale/pivot/UV is wrong, fix Max source and re-export."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        }
      ]
    },
    {
      "id": "build-barrel",
      "title": "Barrel / Canister",
      "icon": "◉",
      "difficulty": "Foundation+",
      "time": "2–3 sessions",
      "requires": [
        "max-primitives-transforms",
        "max-editable-poly",
        "max-edge-control",
        "max-chamfer-smoothing"
      ],
      "teaches": [
        "Cylinder segments",
        "Loop selection",
        "Bevels",
        "Silhouette",
        "UV seam thinking"
      ],
      "summary": "Learn radial modelling without using absurd cylinder segment counts.",
      "phases": [
        {
          "name": "Segment budget",
          "brief": "Choose a cylinder segment count that supports the visible roundness at the intended camera distance.",
          "proof": "Side-by-side low/excessive segment comparison.",
          "steps": [
            "Create three cylinders with low, sensible and excessive side counts. Compare silhouette from game distance.",
            "Choose the lowest count that gives an acceptable round silhouette.",
            "Delete the comparison cylinders and keep the chosen working cylinder."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Profile",
          "brief": "Use loops and controlled scaling/extrusion to create rim, body and base forms.",
          "proof": "Side orthographic wireframe.",
          "steps": [
            "Convert/enable poly editing and add only loops needed for top rim, body and base changes.",
            "Use controlled polygon/edge transforms to shape the profile.",
            "Check the side orthographic view after each major change."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Edge finish",
          "brief": "Chamfer only the edges that need a readable highlight.",
          "proof": "Shaded grazing-light screenshot.",
          "steps": [
            "Select only the edges that need a readable highlight.",
            "Apply a small chamfer and compare 1 versus 2 segments on a duplicate.",
            "Keep the lower-cost version if the difference is invisible at intended distance."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "UV/export",
          "brief": "Create a sensible cylinder seam/caps, checker-test and export to UE5.",
          "proof": "Checker + UE5 placement.",
          "steps": [
            "Choose a logical vertical seam and separate cap shells.",
            "Checker-test the cylinder body for stretching and density.",
            "Export to UE5 and compare scale beside the crate."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        }
      ]
    },
    {
      "id": "build-desk",
      "title": "Simple Desk / Workstation",
      "icon": "⌑",
      "difficulty": "Foundation+",
      "time": "2–3 sessions",
      "requires": [
        "max-primitives-transforms",
        "max-modifier-stack"
      ],
      "teaches": [
        "Multiple objects",
        "Symmetry",
        "Pivots",
        "Proportion",
        "Naming"
      ],
      "summary": "Build a believable prop from several clean components rather than forcing everything into one mesh.",
      "phases": [
        {
          "name": "Reference blockout",
          "brief": "Break the desk into top, supports, drawer/panel forms and block them out separately.",
          "proof": "Labelled blockout screenshot.",
          "steps": [
            "Collect one front and one side reference. Break the desk into top, supports, drawer/panel and optional monitor/fixture blocks.",
            "Create each major form as a separate primitive.",
            "Do not attach them simply because they touch. Check proportion first."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Symmetry and repeat",
          "brief": "Reuse mirrored/repeated parts instead of remodelling identical geometry.",
          "proof": "Modifier stack screenshot.",
          "steps": [
            "Identify repeated left/right parts. Model one clean source part.",
            "Use Clone/Symmetry where appropriate rather than remodelling the twin.",
            "Change the source and prove the repeat updates or remains identical."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Clean assembly",
          "brief": "Name parts, align them accurately and decide what should remain separate.",
          "proof": "Scene Explorer/object list screenshot.",
          "steps": [
            "Align parts with axis constraints and exact values where possible.",
            "Give each logical part a clear name.",
            "Inspect Scene Explorer and remove/rename leftover Box### objects.",
            "Save a clean assembled milestone before detail."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        }
      ]
    },
    {
      "id": "build-wall-panel",
      "title": "Sci-fi Wall Panel",
      "icon": "▥",
      "difficulty": "Intermediate",
      "time": "3–4 sessions",
      "requires": [
        "max-extrude-inset",
        "max-edge-control",
        "max-chamfer-smoothing",
        "max-modifier-stack"
      ],
      "teaches": [
        "Hard surface",
        "Panel hierarchy",
        "Symmetry",
        "Controlled detail"
      ],
      "summary": "Practise hard-surface language without turning the surface into random greeble noise.",
      "phases": [
        {
          "name": "Big shapes",
          "brief": "Design 2–3 large panel regions. No bolts, vents or tiny cuts yet.",
          "proof": "Flat shaded screenshot at distance.",
          "steps": [
            "Create one simple panel block at known dimensions.",
            "Draw or mark 2–3 large regions in reference before cutting anything.",
            "Use those big regions as the only first-pass inset/extrude shapes."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Depth hierarchy",
          "brief": "Use inset/extrude so primary forms have deeper changes than secondary forms.",
          "proof": "Side-angle screenshot.",
          "steps": [
            "Inset and extrude primary forms more strongly than secondary forms.",
            "After each operation, inspect the side angle and Edged Faces.",
            "Undo any tiny surface detail that does not improve readability at game distance."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Symmetry / variation",
          "brief": "Use Symmetry where appropriate, then break symmetry only with a deliberate focal detail.",
          "proof": "Stack screenshot and final shaded view.",
          "steps": [
            "Use Symmetry if the large design is symmetrical.",
            "Add one deliberate asymmetric detail only after the mirrored base works.",
            "Apply restrained chamfer and verify flat surfaces still shade flat."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        }
      ]
    },
    {
      "id": "build-scifi-door",
      "title": "Sci-fi Door",
      "icon": "▣",
      "difficulty": "Intermediate",
      "time": "4–6 sessions",
      "requires": [
        "max-modifier-stack",
        "max-modular-kit",
        "max-chamfer-smoothing"
      ],
      "teaches": [
        "Symmetry",
        "Modularity",
        "Pivot",
        "Animation-ready separation",
        "UE5 placement"
      ],
      "summary": "A production-style prop: build clean halves, keep moving door pieces separate and prove the pivot works.",
      "phases": [
        {
          "name": "Doorway proportions",
          "brief": "Block out frame and moving door slab at believable dimensions.",
          "proof": "Human-scale comparison.",
          "steps": [
            "Block out frame and moving door slab separately at human scale.",
            "Check the opening height/width against a known player reference.",
            "Name frame and moving component before detail."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Symmetrical modelling",
          "brief": "Model one half where suitable and mirror it. Keep frame and moving slab logically separate.",
          "proof": "Modifier stack + object list.",
          "steps": [
            "Model only one half of repeated/symmetrical shapes where appropriate.",
            "Add Symmetry and confirm the seam is clean.",
            "Keep moving slab separate from static frame so animation logic remains simple."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Pivot test",
          "brief": "Place the moving part pivot for the intended slide/rotation and test it before export.",
          "proof": "Before/after transform screenshot.",
          "steps": [
            "Hierarchy → Pivot → Affect Pivot Only on the moving slab.",
            "Move pivot to hinge/slide reference point, then turn Affect Pivot Only off.",
            "Test one clean movement/rotation in Max and undo it."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "UE5 test",
          "brief": "Import and prove the moving piece behaves correctly in-engine.",
          "proof": "UE5 open/closed screenshots.",
          "steps": [
            "Export frame and moving slab deliberately.",
            "Import to UE5 and place at correct scale.",
            "Test the moving part in an empty level before adding fancy materials/effects."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        }
      ]
    },
    {
      "id": "build-pipe-kit",
      "title": "Modular Pipe Kit",
      "icon": "⌁",
      "difficulty": "Intermediate",
      "time": "3–4 sessions",
      "requires": [
        "max-primitives-transforms",
        "max-modular-kit"
      ],
      "teaches": [
        "Reusable parts",
        "Grid",
        "Rotation",
        "Consistency",
        "Kit thinking"
      ],
      "summary": "Build straight, elbow and junction pieces that can be assembled in different ways.",
      "phases": [
        {
          "name": "Standard diameter",
          "brief": "Choose one pipe diameter and keep it consistent across the entire kit.",
          "proof": "Dimension notes.",
          "steps": [
            "Choose one pipe outer diameter and one connection length. Write them down.",
            "Create the straight source piece with a sensible radial segment count.",
            "Do not change diameter between kit pieces."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Three pieces",
          "brief": "Create straight, 90-degree elbow and T/junction pieces using the same connection size.",
          "proof": "Three-piece lineup.",
          "steps": [
            "Create elbow and T/junction from duplicates/source dimensions.",
            "Keep connection ends aligned to the same grid and diameter.",
            "Set pivots where pieces can be rotated/snapped predictably."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Assembly test",
          "brief": "Build two different pipe layouts without scaling pieces to make them fit.",
          "proof": "Two layout screenshots.",
          "steps": [
            "Build layout A from duplicates without scaling.",
            "Build a very different layout B from the same pieces.",
            "If a connection only works after random scaling, fix the source kit dimensions."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        }
      ]
    },
    {
      "id": "build-modular-room",
      "title": "Modular Room Kit",
      "icon": "▦",
      "difficulty": "Intermediate",
      "time": "5–8 sessions",
      "requires": [
        "max-modular-kit",
        "max-uvs",
        "max-ue5-export"
      ],
      "teaches": [
        "Walls",
        "Corners",
        "Doorways",
        "Floors",
        "Grid snapping",
        "UE5 assembly"
      ],
      "summary": "Build a small environment kit that proves modelling decisions through reuse rather than one giant room mesh.",
      "phases": [
        {
          "name": "Kit plan",
          "brief": "Define grid/module dimensions and list the minimum pieces needed.",
          "proof": "Simple kit diagram.",
          "steps": [
            "Choose module width/height and write a five-piece minimum kit list.",
            "Block out wall, corner, doorway wall, floor and ceiling to exact shared dimensions.",
            "Do not add trim/detail until the pieces assemble cleanly."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Build five core pieces",
          "brief": "Wall, corner, doorway wall, floor, ceiling.",
          "proof": "Lined-up pieces with dimensions.",
          "steps": [
            "Create each core piece from the same measurement rules.",
            "Set pivots to useful grid corners/base locations.",
            "Name every piece with a consistent SM_ prefix and size/role."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Max assembly test",
          "brief": "Assemble a room from duplicates. No random non-uniform scale fixes.",
          "proof": "Max room screenshot.",
          "steps": [
            "Assemble one room in Max using duplicates and clean 90-degree rotations.",
            "Zoom into all joins; fix gaps at source rather than by scaling instances.",
            "Create a second layout to prove reusability."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "UE5 assembly test",
          "brief": "Import pieces and build at least two room layouts in-engine.",
          "proof": "Two UE5 layouts.",
          "steps": [
            "Export Selected pieces and import to UE5.",
            "Enable/use project grid snapping and build two UE5 layouts.",
            "If a piece needs a unique scale correction, return to Max and repair the source."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        }
      ]
    },
    {
      "id": "build-hero-prop",
      "title": "Independent Hero Prop",
      "icon": "★",
      "difficulty": "Advanced scaffold",
      "time": "1–2 weeks",
      "requires": [
        "max-topology-clinic",
        "max-uvs",
        "max-materials-substance",
        "max-ue5-export"
      ],
      "teaches": [
        "Reference breakdown",
        "Tool choice",
        "Independent judgement",
        "Full pipeline"
      ],
      "summary": "The support fades: choose a prop, break it into forms, model cleanly, unwrap, texture and prove it in UE5.",
      "phases": [
        {
          "name": "Reference breakdown",
          "brief": "Annotate the reference into primitives, repeated/symmetrical parts and important silhouette features.",
          "proof": "Annotated reference.",
          "steps": [
            "Choose a prop with clear reference from at least two useful angles.",
            "Annotate reference into primitives, repeated parts and silhouette-critical features.",
            "List which learned tools are likely appropriate before opening Max."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Blockout approval",
          "brief": "Get proportion and silhouette working before detail.",
          "proof": "Multi-view blockout.",
          "steps": [
            "Block out only the largest forms.",
            "Compare front/side/perspective silhouette against reference.",
            "Do not begin secondary detail until proportions are approved."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Independent modelling",
          "brief": "Choose suitable techniques from the course. Explain why each major tool is appropriate.",
          "proof": "Versioned Max stages.",
          "steps": [
            "Choose tools based on geometry needs, not habit.",
            "Save numbered versions at major destructive milestones.",
            "Perform a topology/shading check before UVs.",
            "Explain one modelling decision you changed after inspection."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        },
        {
          "name": "Pipeline proof",
          "brief": "UV, texture, export and verify in UE5.",
          "proof": "Wireframe + UV + texture + engine evidence.",
          "steps": [
            "Unwrap and checker-test before texture painting.",
            "Texture in the agreed Substance workflow without hiding geometry problems.",
            "Export and verify in UE5 at intended scale/camera distance.",
            "Capture final wireframe, UV and engine proof."
          ],
          "stop": "Do not start the next phase until this phase looks correct in both shaded and edged/wireframe views."
        }
      ]
    }
  ],
  "fixes": [
    {
      "id": "fix-poly-crate",
      "title": "The 96,000 Polygon Crate",
      "icon": "😱",
      "symptom": "A simple storage crate is denser than a hero character but looks almost identical from game distance.",
      "diagnose": [
        "Turn on Edged Faces and find where density increased.",
        "Identify whether segments came from primitives, chamfers, subdivision or repeated cuts.",
        "Check whether the silhouette actually needs the density."
      ],
      "repair": [
        "Work on a copy. Remove/rebuild one over-dense area at a time.",
        "Use lower segment counts where the visual difference is negligible.",
        "Re-check shading and silhouette after every simplification."
      ],
      "proof": "Before/after wireframe plus polygon/triangle count and a same-distance shaded comparison."
    },
    {
      "id": "fix-boolean",
      "title": "Boolean Apocalypse",
      "icon": "☣",
      "symptom": "A wall/prop has been cut repeatedly and now contains chaotic topology, tiny faces and shading artefacts.",
      "diagnose": [
        "Identify each Boolean result and which cuts are actually needed.",
        "Inspect the affected faces with Edged Faces.",
        "Decide whether cleanup is faster than rebuilding the panel cleanly."
      ],
      "repair": [
        "Keep a safe duplicate.",
        "Rebuild simple cuts with controlled topology where appropriate.",
        "If using Boolean output, clean only with a clear plan; do not randomly weld everything."
      ],
      "proof": "Before/after topology close-up and clean shaded result."
    },
    {
      "id": "fix-uv",
      "title": "UV Lasagne",
      "icon": "▧",
      "symptom": "UV shells overlap accidentally, checker sizes vary wildly and textures stretch across important faces.",
      "diagnose": [
        "Apply a checker.",
        "Identify stretch, overlap and inconsistent scale separately.",
        "Locate the affected 3D faces from the UV Editor."
      ],
      "repair": [
        "Correct seams/projection for the worst shell first.",
        "Match shell scale.",
        "Repack with padding and no unintended overlap."
      ],
      "proof": "Before/after checker plus final UV layout."
    },
    {
      "id": "fix-pivot",
      "title": "Pivot From Hell",
      "icon": "↻",
      "symptom": "A door rotates around empty space or a modular wall snaps from its centre instead of its corner.",
      "diagnose": [
        "Select the object and inspect gizmo/pivot position.",
        "Test a 90-degree rotation and undo.",
        "Compare intended behaviour to actual pivot."
      ],
      "repair": [
        "Hierarchy → Pivot → Affect Pivot Only.",
        "Move/align the pivot to the intended hinge or snap point.",
        "Turn Affect Pivot Only off and retest."
      ],
      "proof": "Before/after rotation or snapping behaviour."
    },
    {
      "id": "fix-one-mesh-room",
      "title": "The One-Mesh Room",
      "icon": "🧱",
      "symptom": "Walls, floor, ceiling and unrelated props are welded/attached into one difficult object that cannot be reused cleanly.",
      "diagnose": [
        "Identify logical reusable parts.",
        "Check whether Element selection reveals meaningful chunks.",
        "Decide which pieces should be separate assets."
      ],
      "repair": [
        "Work on a copy. Separate only logical reusable elements.",
        "Set useful pivots and names for each asset.",
        "Test a second room layout from duplicates."
      ],
      "proof": "Scene Explorer before/after plus two layouts made from the cleaned kit."
    },
    {
      "id": "fix-melt",
      "title": "TurboSmooth Melt",
      "icon": "🫠",
      "symptom": "A hard-surface prop rounds into a blob when subdivision is enabled.",
      "diagnose": [
        "Toggle subdivision off and inspect base topology.",
        "Find unsupported corners and uneven edge spacing.",
        "Check whether subdivision is even needed for this asset."
      ],
      "repair": [
        "If subdivision is justified, add purposeful support structure rather than random loops.",
        "Keep spacing consistent where a hard edge is required.",
        "Otherwise remove the unnecessary subdivision workflow."
      ],
      "proof": "Base wireframe + subdivided result with silhouette preserved."
    }
  ],
  "references": [
    {
      "title": "Autodesk 3ds Max 2026 Help",
      "url": "https://help.autodesk.com/view/3DSMAX/2026/ENU/",
      "type": "Current tool reference"
    },
    {
      "title": "Autodesk 3ds Max Quick Start Guide",
      "url": "https://www.autodesk.com/learn/ondemand/curated/3ds-max-quick-start-guide",
      "type": "Official beginner learning"
    },
    {
      "title": "Epic UE5.8 FBX Static Mesh Pipeline",
      "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-static-mesh-pipeline-in-unreal-engine",
      "type": "Current Unreal pipeline"
    },
    {
      "title": "Epic UE5.8 Importing Static Meshes Using FBX",
      "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/importing-static-meshes-using-fbx-in-unreal-engine",
      "type": "Current Unreal import"
    }
  ],
  "capturePlan": [
    {
      "id": "max-current-interface",
      "title": "Current college 3ds Max interface overview",
      "need": "Full 1920×1080 screenshot of the default modelling workspace with Command Panel visible.",
      "replace": "Use beside Lesson 1 once captured."
    },
    {
      "id": "max-current-editpoly",
      "title": "Current Editable Poly panel",
      "need": "Polygon mode selected; Modifier/Editable Poly hierarchy visible; one face selected in viewport.",
      "replace": "Use beside Lesson 3."
    },
    {
      "id": "max-current-inset-extrude",
      "title": "Inset + Extrude caddies/rollouts",
      "need": "Tight crops showing the exact current controls students use.",
      "replace": "Use beside Lesson 4 steps."
    },
    {
      "id": "max-current-connect",
      "title": "Edge Ring/Loop + Connect",
      "need": "Tight current UI capture with a simple box example.",
      "replace": "Use beside Lesson 5."
    },
    {
      "id": "max-current-chamfer",
      "title": "Chamfer controls",
      "need": "Current Chamfer modifier/editable-poly controls with amount + segments visible.",
      "replace": "Use beside Lesson 6."
    },
    {
      "id": "max-current-stack",
      "title": "Modifier stack",
      "need": "Box → Edit Poly → Symmetry → Chamfer example, clearly visible.",
      "replace": "Use beside Lesson 7."
    },
    {
      "id": "max-current-unwrap",
      "title": "Unwrap UVW + UV Editor",
      "need": "Modifier stack, Open UV Editor button and checker result.",
      "replace": "Use beside Lesson 10."
    },
    {
      "id": "max-current-fbx",
      "title": "3ds Max FBX export dialog",
      "need": "Current export dialog using the college preset.",
      "replace": "Use beside Lesson 12."
    },
    {
      "id": "ue58-import",
      "title": "UE5.8 FBX import + Static Mesh Editor",
      "need": "Current import dialog and imported mesh verification.",
      "replace": "Use beside Lesson 12."
    }
  ]
};
