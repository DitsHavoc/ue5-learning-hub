window.UE5_MODELING_FOUNDATIONS = {
  "version": "3.38.2",
  "title": "Game-Ready 3D Foundations",
  "short": "Six short chapters that teach you what to look for, what to change and why before you start chasing buttons in Max.",
  "passPercent": 80,
  "chapterXp": 20,
  "finalXp": 100,
  "sourceNote": "Built from the college 3D Modelling theory, your own 3ds Max demonstrations and the same modelling decisions students will meet in the practical builds.",
  "chapters": [
    {
      "id": "read-the-mesh",
      "order": 1,
      "icon": "⬡",
      "duration": "12–15 min",
      "title": "Read the Mesh",
      "kicker": "VERTICES • EDGES • FACES • TOPOLOGY",
      "intro": "Learn to look at a mesh and read what is actually there before you start adding cuts. Vertices, edges and polygons are not three different topics — they are three ways of changing the same surface.",
      "bigIdea": "Do not ask “how many polygons should this have?” Ask “what does this geometry change for the player?”",
      "sections": [
        {
          "title": "Read the component you are editing",
          "body": "A vertex is a point. An edge connects points. A polygon is the surface between edges. In Editable Poly, changing any one of them changes the connected surface around it. Element is useful when one object contains separate connected chunks.",
          "points": [
            "Vertex → changes a point and the faces around it",
            "Edge → changes the flow between points",
            "Polygon → changes an area of the surface",
            "Element → selects a connected chunk inside the object"
          ],
          "lookFor": "Compare the three real Max screenshots. The selection mode changes, but it is still the same mesh underneath.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/vertices.webp",
              "caption": "VERTEX MODE • A point is being changed; the surrounding surface follows it."
            },
            {
              "src": "assets/modeling/foundations/edges.webp",
              "caption": "EDGE MODE • Edges control how the surface flows between vertices."
            },
            {
              "src": "assets/modeling/foundations/polygons.webp",
              "caption": "POLYGON MODE • Selected faces are areas of the same connected surface."
            }
          ]
        },
        {
          "title": "Quads, triangles and n-gons are tools, not religions",
          "body": "Quads are easy to read and useful for loops, bevels and subdivision. Triangles are completely normal in game assets — the engine renders triangles. N-gons can be acceptable on simple flat areas, but become risky when the surface bends, deforms or shades unpredictably.",
          "points": [
            "Use quads when they make editing and edge flow easier",
            "Use triangles deliberately when they solve the shape cleanly",
            "Do not hide a topology problem just to say the mesh is “all quads”",
            "Be suspicious of n-gons on curved or deforming surfaces"
          ],
          "lookFor": "This rounded prop keeps readable loops around the curved opening and detail. The topology follows the form instead of making a random grid.",
          "visuals": [
            {
              "src": "assets/modeling/book/topology-rounded-prop-p31.webp",
              "caption": "FORM-LED TOPOLOGY • Density follows the rounded silhouette, openings and features that need control."
            }
          ]
        },
        {
          "title": "Every edge should earn its place",
          "body": "Useful edges change silhouette, hold a bevel, control a curve, define a structural break or help the mesh shade cleanly. Extra loops across a flat panel do none of those things. F4 / Edged Faces should become a habit because it lets you inspect the decisions hiding under the shaded model.",
          "points": [
            "Silhouette-changing edges are valuable",
            "Support edges belong close to the edge they are controlling",
            "Flat areas do not need decorative topology",
            "Tiny scratches, stamps and surface noise usually belong in textures or normals"
          ],
          "lookFor": "The crate has dense support only around the frame and recess. The large flat panel is intentionally simple.",
          "visuals": [
            {
              "src": "assets/modeling/stages/crate-stage-04.png",
              "caption": "PURPOSEFUL EDGES • Support geometry sits around the visible hard forms; the broad flat centre stays quiet."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Which component is a single point in 3D space?",
          "options": [
            "Face",
            "Vertex",
            "Element",
            "UV island"
          ],
          "correct": 1,
          "feedback": "A vertex is a point. Edges connect vertices and faces are bounded by edges."
        },
        {
          "q": "A broad flat metal panel has six extra loops running across it but they do not change its shape. What is the best first decision?",
          "options": [
            "Add six more so the spacing is even",
            "Remove the loops that do no useful work",
            "Turbosmooth it",
            "Turn every face into triangles manually"
          ],
          "correct": 1,
          "feedback": "Unused topology adds complexity without improving silhouette, shading or function."
        },
        {
          "q": "Which statement is the most useful rule for a game modeller?",
          "options": [
            "Every final model must contain only quads",
            "Triangles are always bad",
            "Use topology deliberately and understand how the mesh will triangulate",
            "More polygons always give a better result"
          ],
          "correct": 2,
          "feedback": "Predictable, purposeful topology matters more than chasing an “all quads” rule."
        },
        {
          "q": "A tiny stamped serial number does not affect the silhouette of a background prop. Where should it usually live?",
          "options": [
            "Hundreds of tiny polygons",
            "A texture / normal detail",
            "A separate 3D object for every letter",
            "A subdivision modifier"
          ],
          "correct": 1,
          "feedback": "If the detail does not need to affect the silhouette, texture/normal detail is usually the cheaper and cleaner choice."
        },
        {
          "q": "Which area normally deserves the most geometry?",
          "options": [
            "A perfectly flat hidden underside",
            "A curved silhouette seen close to camera",
            "A blank face behind another object",
            "A texture-only scratch"
          ],
          "correct": 1,
          "feedback": "Geometry should be spent where it changes the visible form and survives the intended viewing distance."
        }
      ]
    },
    {
      "id": "space-and-views",
      "order": 2,
      "icon": "XYZ",
      "duration": "10–12 min",
      "title": "Work in 3D Space",
      "kicker": "WORLD • LOCAL • ORTHOGRAPHIC • PERSPECTIVE",
      "intro": "Max gives you several ways to look at and move the same object. Choosing the right view and coordinate system is what stops accurate modelling turning into guesswork.",
      "bigIdea": "Use the view that answers the question: orthographic for measurement and alignment, perspective for judgement, Local when the object’s own orientation matters.",
      "sections": [
        {
          "title": "World and Local answer different movement questions",
          "body": "World axes stay fixed to the scene. Local axes belong to the selected object and follow its orientation and pivot. If a rotated part needs to move along its own length, Local is often the useful choice. If it must move straight up in the scene, World is clearer.",
          "points": [
            "World → fixed scene directions",
            "Local → the object’s own orientation",
            "The pivot carries the object’s local frame",
            "Always check the Reference Coordinate System before a precise transform"
          ],
          "lookFor": "The transform gizmo tells you which directions you are about to move or rotate. Do not drag first and work out the axis afterwards.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/transform-gizmo.webp",
              "caption": "REAL MAX VIEW • Read the transform gizmo before moving the object; the active coordinate system decides what those axes mean."
            }
          ]
        },
        {
          "title": "Orthographic views are your measuring views",
          "body": "Top, Front and Left/Right views remove perspective distortion. That makes them ideal for matching reference, checking height/width/depth and lining up modular pieces.",
          "points": [
            "Front/Back → width + height",
            "Left/Right → depth + height",
            "Top/Bottom → width + depth",
            "Use a second view before assuming an alignment is correct"
          ],
          "lookFor": "Your own Interface Basics video shows the four-view layout clearly. Notice how the same scene is read from fixed directions plus Perspective.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/workspace.webp",
              "caption": "YOUR MAX WORKSPACE • Orthographic views give fixed measurement directions; Perspective gives a natural depth view."
            }
          ]
        },
        {
          "title": "Perspective is where you judge whether it actually looks right",
          "body": "Perspective is closer to how a player will experience the asset. Use it constantly for silhouette, proportion and depth, but do not rely on it alone for exact alignment.",
          "points": [
            "Orbit and judge the large forms often",
            "Zooming in is not the same as the gameplay camera distance",
            "If something looks wrong in Perspective, fix the proportion before adding detail"
          ],
          "lookFor": "Simple primitives are enough to judge proportion. You do not need a finished asset before Perspective becomes useful.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/primitives.webp",
              "caption": "PERSPECTIVE CHECK • Simple forms already reveal proportion, spacing and whether the object reads clearly in depth."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "You rotate a door 90°. Which axis set rotates with the door?",
          "options": [
            "World",
            "Local",
            "Screen",
            "Grid only"
          ],
          "correct": 1,
          "feedback": "Local axes belong to the object and follow its orientation."
        },
        {
          "q": "You need to match the exact width and height of a front reference photograph. Which view is most useful?",
          "options": [
            "Perspective",
            "Front orthographic",
            "Camera view with depth of field",
            "User view at a random angle"
          ],
          "correct": 1,
          "feedback": "Front orthographic removes perspective distortion and shows width + height directly."
        },
        {
          "q": "Which view is best for judging whether a crate feels too tall and narrow when seen like a player would see it?",
          "options": [
            "Perspective",
            "Top only",
            "UV Editor",
            "Material Editor"
          ],
          "correct": 0,
          "feedback": "Perspective is the best judgement view for how depth and proportion read naturally."
        },
        {
          "q": "What does the World coordinate system describe?",
          "options": [
            "Only the selected object",
            "Stable scene directions shared by the scene",
            "Only texture coordinates",
            "The current camera lens"
          ],
          "correct": 1,
          "feedback": "World coordinates are the shared scene axes; Local coordinates belong to an object."
        },
        {
          "q": "A modeller only ever checks the Perspective viewport. What is the likely problem?",
          "options": [
            "Nothing; Perspective is always enough",
            "Exact alignment and proportion errors may be harder to spot",
            "The mesh cannot be exported",
            "The material will turn black"
          ],
          "correct": 1,
          "feedback": "Perspective is essential, but orthographic views make precise alignment and measurement easier."
        }
      ]
    },
    {
      "id": "spend-geometry",
      "order": 3,
      "icon": "△",
      "duration": "12–15 min",
      "title": "Spend Geometry Wisely",
      "kicker": "SILHOUETTE • CURVES • SUPPORT • REPETITION",
      "intro": "More geometry is not automatically more professional. A good game modeller puts polygons where they change the visible result and stops when they do not.",
      "bigIdea": "Spend geometry on silhouette, curves, visible hard edges and deformation. Reuse repeated detail instead of rebuilding it.",
      "sections": [
        {
          "title": "Judge density from the distance the asset will actually be seen",
          "body": "A close hero prop and a barrel across a room do not need the same density. Start with the lowest useful segment count, check the silhouette in Perspective, then add only what the camera can justify.",
          "points": [
            "Close-up curved silhouette → more radial segments may be worth it",
            "Background prop → simplify hard",
            "Hidden flat faces → almost never the place to spend detail",
            "Viewport zoom is not a reason to add polygons"
          ],
          "lookFor": "The barrel begins as a deliberately simple cylinder. The correct side count is the one that reads round at its intended distance.",
          "visuals": [
            {
              "src": "assets/modeling/stages/barrel-stage-01.png",
              "caption": "START LEAN • Enough sides to describe the cylinder; no extra loops because “more” feels safer."
            }
          ]
        },
        {
          "title": "Bevels and support edges should control a visible form",
          "body": "A tiny bevel helps a hard edge catch light. Support loops can hold a recess or curved transition. Both are useful when they improve the visible form; both are wasteful when repeated everywhere by habit.",
          "points": [
            "Add support where the edge needs control",
            "Keep support loops close to the feature they support",
            "Do not subdivide the centre of a flat panel",
            "Inspect the shaded result as well as the wireframe"
          ],
          "lookFor": "On the crate, the support geometry clusters around the frame and inset because that is where the shading and profile change.",
          "visuals": [
            {
              "src": "assets/modeling/stages/crate-stage-04.png",
              "caption": "CONTROL THE FORM • Support loops are concentrated around visible corners and recesses."
            }
          ]
        },
        {
          "title": "Repeated detail should come from one source",
          "body": "Tyre tread, bolts, vents, fence posts and modular panels are production systems. Make one clean source piece, duplicate or Array it, then fix the source rather than hand-repairing thirty copies.",
          "points": [
            "Build one clean tread block",
            "Use Instance/Array when repeated pieces should stay consistent",
            "Change the source before committing the pattern",
            "Do not Boolean dozens of repeated details into the base just because you can"
          ],
          "lookFor": "The Array tool and the tyre strip are the same idea: solve one piece, then repeat it predictably.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/array.webp",
              "caption": "YOUR ARRAY VIDEO • One source object becomes a controlled repeated pattern."
            },
            {
              "src": "assets/modeling/stages/tyre-stage-04.png",
              "caption": "TYRE WORKFLOW • One tread block is repeated as a strip before the strip is formed around the tyre."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Two barrels look equally round from the gameplay camera: one uses 24 sides and one uses 96. Which is the better starting choice?",
          "options": [
            "96 because more is always better",
            "24 because it achieves the same visible result with less geometry",
            "Both must be converted to 128 sides",
            "Neither; cylinders should be square"
          ],
          "correct": 1,
          "feedback": "Use enough segments for the intended silhouette and camera distance, then stop."
        },
        {
          "q": "Where is a chamfer most valuable on a hard-surface prop?",
          "options": [
            "Every hidden edge",
            "Visible hard edges that need to catch light",
            "Across the centre of every flat face",
            "Only inside the UV Editor"
          ],
          "correct": 1,
          "feedback": "A small bevel/chamfer helps visible hard edges catch light and read believably."
        },
        {
          "q": "You need 30 identical tread blocks around a tyre. What is the strongest workflow?",
          "options": [
            "Model every block separately",
            "Make one clean block and repeat it with Array/instances before forming the tyre",
            "Sculpt all 30 by hand",
            "Add 30 booleans to the tyre body"
          ],
          "correct": 1,
          "feedback": "Repeated detail should come from a controlled source piece so changes stay consistent."
        },
        {
          "q": "Which detail most clearly deserves geometry?",
          "options": [
            "A deep handle that changes the silhouette",
            "A printed warning label",
            "A tiny paint scratch",
            "A faint stain"
          ],
          "correct": 0,
          "feedback": "Silhouette-changing or physically deep forms are good geometry candidates; surface-only information is usually texture work."
        },
        {
          "q": "What is the best time to inspect polygon density?",
          "options": [
            "Only after texturing",
            "Only after export",
            "Throughout blockout and refinement, especially at intended camera distance",
            "Never; modern GPUs make it irrelevant"
          ],
          "correct": 2,
          "feedback": "Density is a modelling decision that should be checked throughout the asset, not rescued at the end."
        }
      ]
    },
    {
      "id": "transforms-and-pivots",
      "order": 4,
      "icon": "⌖",
      "duration": "10–12 min",
      "title": "Transforms & Pivots",
      "kicker": "MOVE • ROTATE • SCALE • ORIGIN • SNAPPING",
      "intro": "A mesh can look great and still be horrible to use. Scale, rotation, dimensions and pivot placement decide whether the asset behaves sensibly in Max and Unreal.",
      "bigIdea": "The pivot is part of the asset design. Put it where the object needs to rotate, snap or be placed — not wherever Max happened to leave it.",
      "sections": [
        {
          "title": "The pivot answers “where does this object act from?”",
          "body": "Rotation and scaling use a transform centre. Put a door pivot on its hinge, a wheel pivot through the axle and a floor-standing prop on a useful point at the base. A useful pivot saves every later placement from becoming a workaround.",
          "points": [
            "Door → hinge axis",
            "Wheel → axle centre",
            "Floor prop → base",
            "Modular piece → useful snap corner or edge"
          ],
          "lookFor": "The crate pivot is at the lower corner, which makes floor placement and grid snapping predictable.",
          "visuals": [
            {
              "src": "assets/modeling/stages/crate-stage-07.png",
              "caption": "PLACEMENT PIVOT • A lower corner gives the crate a predictable point for floor placement and snapping."
            }
          ]
        },
        {
          "title": "Dimensions first; mystery Scale later is pain",
          "body": "While an object is still a primitive, type sensible Length, Width and Height rather than fixing everything with freehand Scale. Before export, check dimensions and transforms so modifiers and engine import are not trying to interpret accidental non-uniform scale.",
          "points": [
            "Model to believable real-world dimensions",
            "Use primitive parameters while you still have them",
            "Check transform values before export",
            "Fix the source asset instead of leaving every Unreal copy at an odd scale"
          ],
          "lookFor": "Your Primitive Parameters video shows the clean habit: change the object’s real dimensions in the Modify panel instead of eyeballing a stretch.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/primitives.webp",
              "caption": "PARAMETRIC FIRST • Use the object parameters for clean dimensions before relying on arbitrary transform Scale."
            }
          ]
        },
        {
          "title": "Design modular pieces around the grid before adding detail",
          "body": "Walls, floors, pipes and kit pieces need repeatable dimensions and pivots. Test two or three pieces together while they are still simple. If the kit does not snap cleanly now, decorative detail will not rescue it.",
          "points": [
            "Choose a grid/module size",
            "Keep repeatable dimensions exact",
            "Use predictable base/corner pivots",
            "Test joins before producing the whole kit"
          ],
          "lookFor": "This simple panel is boring on purpose. A clean module starts with size, thickness and a predictable placement point — the visual decoration comes later.",
          "visuals": [
            {
              "src": "assets/modeling/stages/panel-stage-01.png",
              "caption": "MODULE BEFORE DETAIL • Prove the dimensions and placement behaviour while the piece is still simple."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "A sci-fi door needs to swing open. Where should its pivot normally be?",
          "options": [
            "Centre of the door panel",
            "At the hinge axis",
            "At world 0,0,0 regardless of the asset",
            "At the camera"
          ],
          "correct": 1,
          "feedback": "Rotation should happen around the hinge, so the pivot needs to represent that axis."
        },
        {
          "q": "A wheel needs to spin correctly. Which pivot is most useful?",
          "options": [
            "Bottom tyre contact point",
            "Axle centre",
            "Top of the tyre",
            "Any corner"
          ],
          "correct": 1,
          "feedback": "The wheel rotates around its axle, so that is the functional pivot location."
        },
        {
          "q": "Why are consistent dimensions important for modular assets?",
          "options": [
            "They make textures brighter",
            "They let pieces snap and combine predictably",
            "They automatically reduce polygons",
            "They prevent all UV seams"
          ],
          "correct": 1,
          "feedback": "Modular kits work because dimensions and pivots line up predictably."
        },
        {
          "q": "Your crate is the wrong size in Unreal. What is the best long-term fix?",
          "options": [
            "Leave it scaled 3.47× in every level",
            "Correct the source asset scale/dimensions and re-export",
            "Add more subdivisions",
            "Turn collision off"
          ],
          "correct": 1,
          "feedback": "Fix source scale so the asset behaves consistently everywhere it is used."
        },
        {
          "q": "What does an object pivot most directly affect?",
          "options": [
            "Where transforms such as rotation and scale are centred",
            "The colour of its material",
            "The number of UV islands",
            "The frame rate by itself"
          ],
          "correct": 0,
          "feedback": "The pivot defines a transform centre/local frame, which is why placement matters."
        }
      ]
    },
    {
      "id": "uvs-and-pbr",
      "order": 5,
      "icon": "▧",
      "duration": "14–18 min",
      "title": "UVs & PBR Materials",
      "kicker": "SEAMS • ISLANDS • TEXEL DENSITY • MATERIAL CHANNELS",
      "intro": "The model gives you shape; UVs and materials give that shape a readable surface. The important skill is knowing how a 3D surface becomes texture space and how modern game materials split surface properties.",
      "bigIdea": "Unwrap for predictable texture placement, use a checker to prove the unwrap, then build the material from physical properties rather than painting every lighting effect into the colour.",
      "sections": [
        {
          "title": "UVs are the 2D version of the model surface",
          "body": "UV seams are deliberate cuts that let a 3D surface flatten into islands. Place seams where they are easy to hide or where the object naturally changes direction, then arrange the islands so important areas get useful texture space.",
          "points": [
            "Seam → a planned cut in the UV surface",
            "Island → a connected flattened group of faces",
            "Avoid needless fragmentation",
            "Give important visible areas sensible texture space"
          ],
          "lookFor": "The model on the left is the 3D surface; the layout on the right is that same surface flattened into UV islands.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/uv-layout.webp",
              "caption": "3D → 2D • UV islands are the model surface unfolded into texture space."
            }
          ]
        },
        {
          "title": "A checker tells you whether the unwrap is lying to you",
          "body": "Apply a checker before you paint. Squares that become rectangles reveal stretching; squares that change size dramatically reveal inconsistent texel density. Fix that now, not after hours in Substance.",
          "points": [
            "Square checker → healthy local proportions",
            "Stretched checker → UV distortion",
            "Different checker sizes → different texel density",
            "Check the asset at the distance it will be used"
          ],
          "lookFor": "The checker remains square across the crate. If those cells stretch, your finished texture will stretch with them.",
          "visuals": [
            {
              "src": "assets/modeling/stages/crate-stage-06.png",
              "caption": "CHECKER TEST • Square, even cells make distortion and density problems obvious before texturing."
            }
          ]
        },
        {
          "title": "Think in material properties: Base Colour, Roughness, Metallic and Normal",
          "body": "Older teaching often talks about Diffuse and Specular maps. In the current metallic/roughness workflow, Base Colour describes colour, Roughness controls reflection spread, Metallic identifies metal behaviour and Normal adds small lighting detail without changing silhouette. AO may also support local occlusion depending on the pipeline.",
          "points": [
            "Base Colour → colour, not painted highlights",
            "Roughness → broad/dull versus sharp reflections",
            "Metallic → metal versus non-metal response",
            "Normal → small lighting detail without extra silhouette geometry",
            "AO → local occlusion support where the pipeline uses it"
          ],
          "lookFor": "The Max material demo shows material assignment; the older map example is useful specifically for seeing what a Normal map stores. Our modern workflow adds Roughness and Metallic rather than stopping at Diffuse/Specular.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/materials.webp",
              "caption": "YOUR MATERIAL VIDEO • Materials are assigned to the model here; later Substance/Unreal work supplies the game-ready PBR maps."
            },
            {
              "src": "assets/modeling/foundations/legacy-maps.webp",
              "caption": "OLDER MAP EXAMPLE • Keep the Normal-map idea; update “Diffuse/Specular” thinking to Base Colour + Roughness + Metallic for the current workflow."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What is the quickest visual way to spot UV stretching?",
          "options": [
            "Apply a checker texture",
            "Add a TurboSmooth modifier",
            "Hide edged faces",
            "Increase viewport brightness"
          ],
          "correct": 0,
          "feedback": "A checker reveals distortion because stretched squares stop looking square."
        },
        {
          "q": "What is a UV island?",
          "options": [
            "A separate 3D object",
            "A connected flattened group of faces in UV space",
            "A collision hull",
            "A pivot preset"
          ],
          "correct": 1,
          "feedback": "UV seams split the mesh surface into flattened islands for texture placement."
        },
        {
          "q": "Which map is best for tiny grooves that should affect lighting but not silhouette?",
          "options": [
            "Normal map",
            "World position",
            "Collision mesh",
            "LOD 3"
          ],
          "correct": 0,
          "feedback": "Normal maps can suggest small surface direction changes without adding visible silhouette geometry."
        },
        {
          "q": "Which PBR channel most directly controls how broad or sharp a reflection appears?",
          "options": [
            "Roughness",
            "Base Colour",
            "Pivot",
            "UV seam"
          ],
          "correct": 0,
          "feedback": "Roughness describes surface microsurface behaviour and therefore reflection sharpness/breadth."
        },
        {
          "q": "Two adjacent modular wall pieces use wildly different texel density. What will the player likely notice?",
          "options": [
            "One texture appears much sharper/larger in detail than the other",
            "The pivots will move",
            "The collision becomes convex",
            "The mesh automatically triangulates differently"
          ],
          "correct": 0,
          "feedback": "Inconsistent texel density makes texture detail scale noticeably inconsistent between assets."
        }
      ]
    },
    {
      "id": "game-ready",
      "order": 6,
      "icon": "◆",
      "duration": "12–15 min",
      "title": "Make It Game Ready",
      "kicker": "PURPOSE • COLLISION • LOD • EXPORT",
      "intro": "A model is not game-ready because it looks nice in Max. It is game-ready when its geometry, scale, pivot, materials, collision and engine behaviour fit the job it was built to do.",
      "bigIdea": "Asset purpose comes first. A background prop, modular wall, breakable object and hero interaction should not all be built, collided or optimised the same way.",
      "sections": [
        {
          "title": "Start by deciding what job the asset has",
          "body": "Decorative props, modular environment pieces, rigid bodies and breakable objects all have different needs. Purpose decides how much detail is worth it, whether the object needs a functional pivot, how it should collide and how reusable it should be.",
          "points": [
            "Background decoration → cheap and readable",
            "Modular environment → exact dimensions and snapping",
            "Moving/interactive prop → functional pivot and sensible collision",
            "Breakable/fracture asset → topology and setup must support the behaviour"
          ],
          "lookFor": "A breakable door is not “just a door mesh”. Its intended behaviour changes how the asset needs to be prepared.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/breakable-mesh.webp",
              "caption": "ASSET PURPOSE • A breakable object has different production needs from a purely decorative mesh."
            }
          ]
        },
        {
          "title": "Collision should match gameplay, not every visible dent",
          "body": "Collision is invisible geometry used by the physics and query systems. Use the simplest shapes that give the player the physical behaviour they expect. Complex objects can use several simple/convex hulls rather than copying every visual polygon.",
          "points": [
            "Keep collision simpler than the visible mesh when possible",
            "Match walkable/blocking shape, not scratches and bolts",
            "Use several hulls if one simple hull cannot describe the needed interaction",
            "Test collision in engine"
          ],
          "lookFor": "The red collision hull captures the important body of the car without reproducing every visible wheel arch, trim line and surface detail.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/collision-hull.webp",
              "caption": "SIMPLIFIED COLLISION • The gameplay shape is deliberately much simpler than the rendered mesh."
            }
          ]
        },
        {
          "title": "At distance, protect the read and remove detail the player cannot see",
          "body": "Traditional LODs swap to simpler geometry as an asset occupies less screen space. Nanite changes how suitable static geometry can be handled, but it does not make every optimisation question disappear. Materials, collision, transparency, deformation and useless micro-detail still need judgement.",
          "points": [
            "Preserve silhouette and major forms longest",
            "Remove tiny geometry first",
            "Check transitions at real gameplay distances",
            "Use the engine workflow appropriate to the asset and project"
          ],
          "lookFor": "The lower LOD keeps the recognisable silhouette while removing a large amount of geometry the distant view cannot justify.",
          "visuals": [
            {
              "src": "assets/modeling/foundations/lod-comparison.webp",
              "caption": "LOD THINKING • Simplify what the camera can no longer resolve while protecting the major shape."
            }
          ]
        },
        {
          "title": "Unreal is the final reality check",
          "body": "Import the asset at the intended scale and test it where it will actually be used. Check pivot, shading/normals, materials, collision and placement. If the source mesh is wrong, fix it in Max and re-export instead of building permanent repairs around the mistake in Unreal.",
          "points": [
            "Correct scale in a real level",
            "Pivot behaves as intended",
            "Normals/shading survive import",
            "Materials are connected correctly",
            "Collision feels right to play against"
          ],
          "lookFor": "The finished asset eventually has to live in the game editor. Max is the source; Unreal is where scale, placement and behaviour prove whether the asset really works.",
          "visuals": [
            {
              "src": "assets/ue5/current/editor-main-window.webp",
              "caption": "ENGINE REALITY CHECK • Judge the asset in the environment where the player will actually see and use it."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "A complex decorative statue never needs the player to walk into every tiny recess. What collision is usually the better starting point?",
          "options": [
            "Exact collision matching every triangle",
            "Simple collision that represents the gameplay shape",
            "No collision regardless of placement",
            "A 100,000-polygon invisible duplicate"
          ],
          "correct": 1,
          "feedback": "Collision should represent the gameplay need, not reproduce every visible detail."
        },
        {
          "q": "What should usually survive longest when creating a simpler distant version of an asset?",
          "options": [
            "Invisible underside screws",
            "Overall silhouette and major forms",
            "Tiny scratches",
            "Every hidden bevel"
          ],
          "correct": 1,
          "feedback": "Silhouette and major forms carry the read at distance; micro-detail disappears first."
        },
        {
          "q": "Which asset most clearly benefits from modular thinking?",
          "options": [
            "A one-off hero trophy",
            "A corridor wall kit used across 40 rooms",
            "A single cinematic statue",
            "A unique boss head"
          ],
          "correct": 1,
          "feedback": "Repeated environment construction is exactly where modular dimensions and pivots pay off."
        },
        {
          "q": "After import to Unreal the asset is the wrong scale and the pivot is unusable. What should you do?",
          "options": [
            "Fix the source Max asset and re-export",
            "Ignore it and manually repair every placed copy",
            "Add more polygons",
            "Bake the scale error into the texture"
          ],
          "correct": 0,
          "feedback": "Source problems should be fixed at source so every instance benefits."
        },
        {
          "q": "When is a game asset genuinely “finished”?",
          "options": [
            "When it looks good in one Max viewport",
            "When it looks good and behaves correctly for its intended engine use",
            "When the polygon count is as high as possible",
            "When the UV map has no seams"
          ],
          "correct": 1,
          "feedback": "Game-ready means visual quality plus correct scale, shading, collision, pivot, materials and intended behaviour."
        }
      ]
    }
  ],
  "finalQuiz": [
    {
      "q": "A close-up circular hero prop looks visibly faceted. What should you change first?",
      "options": [
        "Add useful radial segments until the silhouette reads smooth",
        "Add random loops across flat faces",
        "Increase texture resolution only",
        "Move the pivot"
      ],
      "correct": 0,
      "feedback": "Visible silhouette faceting is a geometry problem."
    },
    {
      "q": "Which view best helps you match the exact height of an object without perspective distortion?",
      "options": [
        "Front orthographic",
        "Perspective",
        "Material preview",
        "UV Editor"
      ],
      "correct": 0,
      "feedback": "Orthographic views are measurement/alignment views."
    },
    {
      "q": "A bolt is repeated 20 times. What is the strongest production habit?",
      "options": [
        "Use one clean source and instances/Array",
        "Model all 20 uniquely",
        "Boolean every bolt into the base mesh immediately",
        "Texture each bolt with a different material"
      ],
      "correct": 0,
      "feedback": "Repeated geometry should come from a controlled reusable source."
    },
    {
      "q": "A door rotates from its centre instead of its hinge. Which setup is wrong?",
      "options": [
        "Pivot location",
        "UV island packing",
        "Roughness",
        "LOD distance"
      ],
      "correct": 0,
      "feedback": "Rotation occurs around the transform centre/pivot."
    },
    {
      "q": "A checker texture is stretched into rectangles on one side of your model. What does that reveal?",
      "options": [
        "UV distortion",
        "Too-simple collision",
        "Wrong pivot",
        "Too many LODs"
      ],
      "correct": 0,
      "feedback": "Checker distortion exposes UV stretching."
    },
    {
      "q": "Which detail should usually be a normal/texture detail rather than modelled geometry?",
      "options": [
        "A deep handle cutout",
        "A tiny engraved serial number",
        "A wheel arch silhouette",
        "A large protruding latch"
      ],
      "correct": 1,
      "feedback": "Surface micro-detail can often move to maps because it does not change silhouette."
    },
    {
      "q": "Which statement about triangles is correct for game meshes?",
      "options": [
        "Triangles are forbidden",
        "Triangles are normal; use them deliberately and predictably",
        "Every triangle must be converted to an n-gon",
        "Triangles only exist in UV space"
      ],
      "correct": 1,
      "feedback": "Engines render triangles; the important issue is deliberate topology and shading."
    },
    {
      "q": "Why use simplified collision instead of exact visible geometry?",
      "options": [
        "To match gameplay with easier, cheaper collision shapes",
        "To increase texture resolution",
        "To make UVs disappear",
        "To move the pivot automatically"
      ],
      "correct": 0,
      "feedback": "Collision should represent the physical gameplay need, not every surface detail."
    },
    {
      "q": "What should you judge before adding tiny prop detail?",
      "options": [
        "Silhouette and proportion",
        "Final dirt layer",
        "Final LOD names",
        "Screenshot border colour"
      ],
      "correct": 0,
      "feedback": "Big forms and silhouette need to read before surface noise."
    },
    {
      "q": "Two modular wall pieces refuse to line up cleanly. What should you inspect first?",
      "options": [
        "Dimensions, grid and pivots",
        "Normal map colour",
        "Camera exposure",
        "LOD screen size"
      ],
      "correct": 0,
      "feedback": "Modular assembly depends on exact dimensions and useful snapping pivots."
    },
    {
      "q": "A background pipe is only ever seen from 12 metres away. Which modelling decision is strongest?",
      "options": [
        "Use enough geometry to read cleanly at that distance and stop",
        "Add close-up hero detail everywhere",
        "Model scratches as grooves",
        "Subdivide every face"
      ],
      "correct": 0,
      "feedback": "Camera distance determines which geometry is visible enough to deserve the cost."
    },
    {
      "q": "What is the final proof that a game asset works?",
      "options": [
        "It has many polygons",
        "It behaves correctly in the engine at the intended scale and use",
        "It has no UV seams",
        "It uses only quads"
      ],
      "correct": 1,
      "feedback": "The engine validates scale, pivot, shading, materials, collision and practical use."
    }
  ]
};
