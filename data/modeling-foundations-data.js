window.UE5_MODELING_FOUNDATIONS = {
  version: '3.38.0',
  title: 'Game-Ready 3D Foundations',
  short: 'Understand the decisions behind a mesh before Build X asks you to make them.',
  passPercent: 80,
  chapterXp: 20,
  finalXp: 100,
  sourceNote: 'Rebuilt from the college 3D Modelling Theory material and updated into short game-art decisions rather than slide reading.',
  chapters: [
    {
      id: 'read-the-mesh', order: 1, icon: '⬡', duration: '12–15 min',
      title: 'Read the Mesh', kicker: 'VERTICES • EDGES • FACES • TOPOLOGY',
      intro: 'Before you can build clean geometry, you need to be able to look at a wireframe and explain what every part is doing.',
      bigIdea: 'A mesh is not “more polygons = better”. Geometry earns its place by changing shape, supporting shading, separating parts or surviving the intended camera distance.',
      visual: 'assets/modeling/book/topology-rounded-prop-p31.webp',
      visualCaption: 'Read the wireframe as a set of decisions: silhouette, curved areas and structural edges deserve density; broad flat areas usually do not.',
      sections: [
        {title:'The four things you are actually editing', body:'A polygon mesh is built from vertices, edges and faces. In Max, connected faces can also be handled as an Element. Moving a vertex changes the surrounding faces; moving an edge changes the surface flow; moving a face changes an area of the form.', points:['Vertex = a point in 3D space','Edge = a connection between vertices','Face / polygon = the surface enclosed by edges','Element = a connected piece of geometry inside the object']},
        {title:'Quads, triangles and n-gons', body:'Quads are convenient while modelling because loops and subdivision are easier to predict. Triangles are completely normal in game meshes and the engine ultimately renders triangles. N-gons are not automatically forbidden, but you must understand where they triangulate and whether they cause shading or deformation problems.', points:['Prefer predictable topology over “all quads at any cost”','Triangles are fine when they are deliberate','Avoid mystery n-gons on curved, deforming or badly shaded areas']},
        {title:'Every edge needs a job', body:'Ask why an edge exists. Useful edges change the silhouette, hold a bevel, control a curve, define a structural break or support a UV/material boundary. Random loops across a flat panel add cost without improving the asset.', points:['Silhouette first','Curves get density where the curve needs it','Flat areas can stay beautifully boring','Tiny surface noise usually belongs in textures or normals']}
      ],
      quiz: [
        {q:'Which component is a single point in 3D space?', options:['Face','Vertex','Element','UV island'], correct:1, feedback:'A vertex is a point. Edges connect vertices and faces are bounded by edges.'},
        {q:'A broad flat metal panel has six extra loops running across it but they do not change its shape. What is the best first decision?', options:['Add six more so the spacing is even','Remove the loops that do no useful work','Turbosmooth it','Turn every face into triangles manually'], correct:1, feedback:'Unused topology adds complexity without improving silhouette, shading or function.'},
        {q:'Which statement is the most useful rule for a game modeller?', options:['Every final model must contain only quads','Triangles are always bad','Use topology deliberately and understand how the mesh will triangulate','More polygons always give a better result'], correct:2, feedback:'Predictable, purposeful topology matters more than chasing an “all quads” rule.'},
        {q:'A tiny stamped serial number does not affect the silhouette of a background prop. Where should it usually live?', options:['Hundreds of tiny polygons','A texture / normal detail','A separate 3D object for every letter','A subdivision modifier'], correct:1, feedback:'If the detail does not need to affect the silhouette, texture/normal detail is usually the cheaper and cleaner choice.'},
        {q:'Which area normally deserves the most geometry?', options:['A perfectly flat hidden underside','A curved silhouette seen close to camera','A blank face behind another object','A texture-only scratch'], correct:1, feedback:'Geometry should be spent where it changes the visible form and survives the intended viewing distance.'}
      ]
    },
    {
      id: 'space-and-views', order: 2, icon: 'XYZ', duration: '10–12 min',
      title: 'Work in 3D Space', kicker: 'WORLD • LOCAL • ORTHOGRAPHIC • PERSPECTIVE',
      intro: 'Good modelling depends on knowing which coordinate system and which view gives you the information you actually need.',
      bigIdea: 'Perspective is great for judging the object; orthographic views are great for measuring and aligning it. World and Local axes answer different transform questions.',
      visualType: 'axes',
      sections: [
        {title:'World versus Local', body:'World coordinates belong to the scene. Local coordinates travel with the object and are tied to its orientation and pivot. Rotate an object and its local axes rotate with it.', points:['World = stable scene directions','Local = the selected object’s own directions','The pivot carries the object’s local transform frame']},
        {title:'Orthographic views are measuring views', body:'Front, Back, Left, Right, Top and Bottom remove perspective distortion. They are ideal when you need to match width, height, alignment or a reference image accurately.', points:['Front/Back = width + height','Left/Right = depth + height','Top/Bottom = width + depth']},
        {title:'Perspective is the judgement view', body:'Perspective resembles how the player sees depth. Use it constantly to judge silhouette, proportion and whether the asset feels believable, but do not rely on it alone for exact alignment.', points:['Model in more than one view','Check proportions in perspective','Use orthographic when accuracy matters']}
      ],
      quiz: [
        {q:'You rotate a door 90°. Which axis set rotates with the door?', options:['World','Local','Screen','Grid only'], correct:1, feedback:'Local axes belong to the object and follow its orientation.'},
        {q:'You need to match the exact width and height of a front reference photograph. Which view is most useful?', options:['Perspective','Front orthographic','Camera view with depth of field','User view at a random angle'], correct:1, feedback:'Front orthographic removes perspective distortion and shows width + height directly.'},
        {q:'Which view is best for judging whether a crate feels too tall and narrow when seen like a player would see it?', options:['Perspective','Top only','UV Editor','Material Editor'], correct:0, feedback:'Perspective is the best judgement view for how depth and proportion read naturally.'},
        {q:'What does the World coordinate system describe?', options:['Only the selected object','Stable scene directions shared by the scene','Only texture coordinates','The current camera lens'], correct:1, feedback:'World coordinates are the shared scene axes; Local coordinates belong to an object.'},
        {q:'A modeller only ever checks the Perspective viewport. What is the likely problem?', options:['Nothing; Perspective is always enough','Exact alignment and proportion errors may be harder to spot','The mesh cannot be exported','The material will turn black'], correct:1, feedback:'Perspective is essential, but orthographic views make precise alignment and measurement easier.'}
      ]
    },
    {
      id: 'spend-geometry', order: 3, icon: '△', duration: '12–15 min',
      title: 'Spend Geometry Wisely', kicker: 'SILHOUETTE • CURVES • SUPPORT • REPETITION',
      intro: 'Polycount is not a competition. The useful question is whether the geometry changes what the player can actually see.',
      bigIdea: 'Budget geometry around silhouette, camera distance, deformation and shading. Repetition should be built once and reused rather than hand-modelled thirty times.',
      visual: 'assets/modeling/stages/barrel-stage-01.png',
      visualCaption: 'A simple cylinder is a design decision: choose enough sides to read round at the intended distance, not the biggest number Max allows.',
      sections: [
        {title:'Camera distance changes the answer', body:'A hero prop held close to camera may need more silhouette detail than a barrel seen across a room. Judge density from the distance the asset will actually be used, not from a viewport zoomed in 800%.', points:['Close hero asset → more visible silhouette detail','Background prop → simplify aggressively','Tiny grooves and scratches → texture/normal first']},
        {title:'Support the shape, not the whole mesh', body:'Chamfers and support edges are valuable where they control a visible hard edge or shading transition. They are wasteful when sprayed across every surface by habit.', points:['Bevels catch light and make hard surfaces believable','Support where the form needs control','Do not subdivide flat space for no reason']},
        {title:'Build repetition once', body:'Tyre treads, bolts, vents and modular wall pieces teach an important production habit: make one clean source piece, then Instance/Array/duplicate it. Fix the source and the repeated system stays consistent.', points:['One tread tile → repeated system','One wall module → many rooms','One clean bolt → instances, not twenty unique bolts']}
      ],
      quiz: [
        {q:'Two barrels look equally round from the gameplay camera: one uses 24 sides and one uses 96. Which is the better starting choice?', options:['96 because more is always better','24 because it achieves the same visible result with less geometry','Both must be converted to 128 sides','Neither; cylinders should be square'], correct:1, feedback:'Use enough segments for the intended silhouette and camera distance, then stop.'},
        {q:'Where is a chamfer most valuable on a hard-surface prop?', options:['Every hidden edge','Visible hard edges that need to catch light','Across the centre of every flat face','Only inside the UV Editor'], correct:1, feedback:'A small bevel/chamfer helps visible hard edges catch light and read believably.'},
        {q:'You need 30 identical tread blocks around a tyre. What is the strongest workflow?', options:['Model every block separately','Make one clean block and repeat it with Array/instances before forming the tyre','Sculpt all 30 by hand','Add 30 booleans to the tyre body'], correct:1, feedback:'Repeated detail should come from a controlled source piece so changes stay consistent.'},
        {q:'Which detail most clearly deserves geometry?', options:['A deep handle that changes the silhouette','A printed warning label','A tiny paint scratch','A faint stain'], correct:0, feedback:'Silhouette-changing or physically deep forms are good geometry candidates; surface-only information is usually texture work.'},
        {q:'What is the best time to inspect polygon density?', options:['Only after texturing','Only after export','Throughout blockout and refinement, especially at intended camera distance','Never; modern GPUs make it irrelevant'], correct:2, feedback:'Density is a modelling decision that should be checked throughout the asset, not rescued at the end.'}
      ]
    },
    {
      id: 'transforms-and-pivots', order: 4, icon: '⌖', duration: '10–12 min',
      title: 'Transforms & Pivots', kicker: 'MOVE • ROTATE • SCALE • ORIGIN • SNAPPING',
      intro: 'A model can look perfect and still be horrible to use if its scale, transforms or pivot are wrong.',
      bigIdea: 'The pivot is not decoration. It decides where an object rotates, scales, snaps and often how conveniently it behaves once it reaches Unreal.',
      visual: 'assets/modeling/stages/crate-stage-07.png',
      visualCaption: 'Placement-friendly pivots matter. A floor prop often wants a base/corner pivot; an opening door wants the hinge; a wheel wants its axle centre.',
      sections: [
        {title:'The pivot answers “around what point?”', body:'Rotation and scaling happen around a transform centre. Put a door pivot on the hinge, a wheel pivot through the axle and modular pieces on a useful snap corner or base.', points:['Door → hinge','Wheel → axle centre','Floor/module → useful base or snap corner']},
        {title:'Scale is a production issue', body:'Model at a believable real-world size and avoid leaving mystery non-uniform scale on export assets. Resetting transforms before modifier-heavy or export workflows helps keep later behaviour predictable.', points:['Use consistent units','Check object dimensions','Do not use Unreal scale as a permanent fix for a wrong source asset']},
        {title:'Modular assets live or die by snapping', body:'Walls, floors, pipes and kit pieces should be designed around repeatable dimensions and useful pivots. A beautiful wall panel that cannot snap cleanly becomes production friction.', points:['Choose a grid size','Keep repeatable dimensions exact','Test two or three pieces together before making twenty']}
      ],
      quiz: [
        {q:'A sci-fi door needs to swing open. Where should its pivot normally be?', options:['Centre of the door panel','At the hinge axis','At world 0,0,0 regardless of the asset','At the camera'], correct:1, feedback:'Rotation should happen around the hinge, so the pivot needs to represent that axis.'},
        {q:'A wheel needs to spin correctly. Which pivot is most useful?', options:['Bottom tyre contact point','Axle centre','Top of the tyre','Any corner'], correct:1, feedback:'The wheel rotates around its axle, so that is the functional pivot location.'},
        {q:'Why are consistent dimensions important for modular assets?', options:['They make textures brighter','They let pieces snap and combine predictably','They automatically reduce polygons','They prevent all UV seams'], correct:1, feedback:'Modular kits work because dimensions and pivots line up predictably.'},
        {q:'Your crate is the wrong size in Unreal. What is the best long-term fix?', options:['Leave it scaled 3.47× in every level','Correct the source asset scale/dimensions and re-export','Add more subdivisions','Turn collision off'], correct:1, feedback:'Fix source scale so the asset behaves consistently everywhere it is used.'},
        {q:'What does an object pivot most directly affect?', options:['Where transforms such as rotation and scale are centred','The colour of its material','The number of UV islands','The frame rate by itself'], correct:0, feedback:'The pivot defines a transform centre/local frame, which is why placement matters.'}
      ]
    },
    {
      id: 'uvs-and-pbr', order: 5, icon: '▧', duration: '14–18 min',
      title: 'UVs & PBR Materials', kicker: 'SEAMS • ISLANDS • TEXEL DENSITY • MATERIAL CHANNELS',
      intro: 'A clean model still needs a clean way to receive 2D texture information. UVs are the bridge between the mesh and the material.',
      bigIdea: 'Good UVs minimise obvious stretching, use sensible seams and spend texture space according to importance. Modern game materials then separate different surface properties into PBR channels.',
      visual: 'assets/modeling/book/uv-checker-p61.webp',
      visualCaption: 'A checker material exposes stretching and inconsistent texel density immediately. If the squares distort, the texture will distort too.',
      sections: [
        {title:'UVs flatten 3D surfaces into 2D', body:'UV coordinates tell a 2D texture where it lands on the model. Seams split the surface into islands that can be arranged in texture space.', points:['Seam = intentional cut in the UV surface','Island = a connected flattened group','Pack islands efficiently without crushing important areas']},
        {title:'Checker first, pretty texture later', body:'A checker pattern makes stretching obvious. Squares should stay reasonably square and similar in size where consistent texel density matters.', points:['Stretched checker = stretched texture','Tiny checker squares = more texture density','Huge checker squares = less texture density']},
        {title:'Think in PBR properties', body:'Older theory often describes diffuse and specular maps. Current game-art workflows commonly think in Base Colour, Roughness, Metallic, Normal and often AO. Normal maps fake small surface direction changes; they do not change the silhouette.', points:['Base Colour = surface colour information','Roughness = how broad/sharp reflections appear','Metallic = whether the surface behaves as metal','Normal = small surface detail without silhouette geometry','AO = local occlusion support where the pipeline uses it']}
      ],
      quiz: [
        {q:'What is the quickest visual way to spot UV stretching?', options:['Apply a checker texture','Add a TurboSmooth modifier','Hide edged faces','Increase viewport brightness'], correct:0, feedback:'A checker reveals distortion because stretched squares stop looking square.'},
        {q:'What is a UV island?', options:['A separate 3D object','A connected flattened group of faces in UV space','A collision hull','A pivot preset'], correct:1, feedback:'UV seams split the mesh surface into flattened islands for texture placement.'},
        {q:'Which map is best for tiny grooves that should affect lighting but not silhouette?', options:['Normal map','World position','Collision mesh','LOD 3'], correct:0, feedback:'Normal maps can suggest small surface direction changes without adding visible silhouette geometry.'},
        {q:'Which PBR channel most directly controls how broad or sharp a reflection appears?', options:['Roughness','Base Colour','Pivot','UV seam'], correct:0, feedback:'Roughness describes surface microsurface behaviour and therefore reflection sharpness/breadth.'},
        {q:'Two adjacent modular wall pieces use wildly different texel density. What will the player likely notice?', options:['One texture appears much sharper/larger in detail than the other','The pivots will move','The collision becomes convex','The mesh automatically triangulates differently'], correct:0, feedback:'Inconsistent texel density makes texture detail scale noticeably inconsistent between assets.'}
      ]
    },
    {
      id: 'game-ready', order: 6, icon: '◆', duration: '12–15 min',
      title: 'Make It Game Ready', kicker: 'PURPOSE • COLLISION • LOD • EXPORT',
      intro: 'A game asset is not finished when it looks good in Max. It is finished when it behaves properly in the engine and suits its actual job.',
      bigIdea: 'The purpose of the asset determines its geometry, collision, LOD strategy, pivot, material setup and how much effort is worth spending on it.',
      visual: 'assets/modeling/book/topology-car-wireframe-p31.webp',
      visualCaption: 'A production asset is a set of compromises. The right mesh depends on what the player sees, how it moves, how it collides and how often it appears.',
      sections: [
        {title:'Know what kind of asset you are making', body:'Games use decorative props, environment meshes, modular kits, rigid bodies, breakable/fracture assets and many other specialised meshes. A background prop and an interactable hero object should not be treated identically.', points:['Purpose decides detail','Interaction decides collision/pivot needs','Reuse decides modularity and material strategy']},
        {title:'Collision should be as simple as the gameplay allows', body:'Collision is invisible geometry used to decide where the player and other objects can physically interact. Complex assets often use simplified convex shapes rather than matching every visible dent and bolt.', points:['Match gameplay, not surface noise','Simple collision is easier to reason about','Use multiple simple hulls when one hull cannot represent the required shape']},
        {title:'Distance changes complexity', body:'Traditional LODs use simpler versions of the same asset at distance. Modern Unreal workflows may also use Nanite for suitable static geometry, but that does not remove the need to think about materials, collision, overdraw, deforming assets and whether tiny detail is useful at all.', points:['Preserve silhouette first when simplifying','Remove detail that cannot be seen at distance','Test the asset in the engine, not only in Max']},
        {title:'The engine is the final check', body:'Import the asset at the correct scale, inspect its pivot, normals/shading, materials, collision and placement. If the source model is wrong, fix it in the source rather than building a tower of Unreal transforms around the mistake.', points:['Correct scale','Useful pivot','Clean shading','Appropriate collision','Material channels hooked up correctly']}
      ],
      quiz: [
        {q:'A complex decorative statue never needs the player to walk into every tiny recess. What collision is usually the better starting point?', options:['Exact collision matching every triangle','Simple collision that represents the gameplay shape','No collision regardless of placement','A 100,000-polygon invisible duplicate'], correct:1, feedback:'Collision should represent the gameplay need, not reproduce every visible detail.'},
        {q:'What should usually survive longest when creating a simpler distant version of an asset?', options:['Invisible underside screws','Overall silhouette and major forms','Tiny scratches','Every hidden bevel'], correct:1, feedback:'Silhouette and major forms carry the read at distance; micro-detail disappears first.'},
        {q:'Which asset most clearly benefits from modular thinking?', options:['A one-off hero trophy','A corridor wall kit used across 40 rooms','A single cinematic statue','A unique boss head'], correct:1, feedback:'Repeated environment construction is exactly where modular dimensions and pivots pay off.'},
        {q:'After import to Unreal the asset is the wrong scale and the pivot is unusable. What should you do?', options:['Fix the source Max asset and re-export','Ignore it and manually repair every placed copy','Add more polygons','Bake the scale error into the texture'], correct:0, feedback:'Source problems should be fixed at source so every instance benefits.'},
        {q:'When is a game asset genuinely “finished”?', options:['When it looks good in one Max viewport','When it looks good and behaves correctly for its intended engine use','When the polygon count is as high as possible','When the UV map has no seams'], correct:1, feedback:'Game-ready means visual quality plus correct scale, shading, collision, pivot, materials and intended behaviour.'}
      ]
    }
  ],
  finalQuiz: [
    {q:'A close-up circular hero prop looks visibly faceted. What should you change first?', options:['Add useful radial segments until the silhouette reads smooth','Add random loops across flat faces','Increase texture resolution only','Move the pivot'], correct:0, feedback:'Visible silhouette faceting is a geometry problem.'},
    {q:'Which view best helps you match the exact height of an object without perspective distortion?', options:['Front orthographic','Perspective','Material preview','UV Editor'], correct:0, feedback:'Orthographic views are measurement/alignment views.'},
    {q:'A bolt is repeated 20 times. What is the strongest production habit?', options:['Use one clean source and instances/Array','Model all 20 uniquely','Boolean every bolt into the base mesh immediately','Texture each bolt with a different material'], correct:0, feedback:'Repeated geometry should come from a controlled reusable source.'},
    {q:'A door rotates from its centre instead of its hinge. Which setup is wrong?', options:['Pivot location','UV island packing','Roughness','LOD distance'], correct:0, feedback:'Rotation occurs around the transform centre/pivot.'},
    {q:'A checker texture is stretched into rectangles on one side of your model. What does that reveal?', options:['UV distortion','Too-simple collision','Wrong pivot','Too many LODs'], correct:0, feedback:'Checker distortion exposes UV stretching.'},
    {q:'Which detail should usually be a normal/texture detail rather than modelled geometry?', options:['A deep handle cutout','A tiny engraved serial number','A wheel arch silhouette','A large protruding latch'], correct:1, feedback:'Surface micro-detail can often move to maps because it does not change silhouette.'},
    {q:'Which statement about triangles is correct for game meshes?', options:['Triangles are forbidden','Triangles are normal; use them deliberately and predictably','Every triangle must be converted to an n-gon','Triangles only exist in UV space'], correct:1, feedback:'Engines render triangles; the important issue is deliberate topology and shading.'},
    {q:'Why use simplified collision instead of exact visible geometry?', options:['To match gameplay with easier, cheaper collision shapes','To increase texture resolution','To make UVs disappear','To move the pivot automatically'], correct:0, feedback:'Collision should represent the physical gameplay need, not every surface detail.'},
    {q:'What should you judge before adding tiny prop detail?', options:['Silhouette and proportion','Final dirt layer','Final LOD names','Screenshot border colour'], correct:0, feedback:'Big forms and silhouette need to read before surface noise.'},
    {q:'Two modular wall pieces refuse to line up cleanly. What should you inspect first?', options:['Dimensions, grid and pivots','Normal map colour','Camera exposure','LOD screen size'], correct:0, feedback:'Modular assembly depends on exact dimensions and useful snapping pivots.'},
    {q:'A background pipe is only ever seen from 12 metres away. Which modelling decision is strongest?', options:['Use enough geometry to read cleanly at that distance and stop','Add close-up hero detail everywhere','Model scratches as grooves','Subdivide every face'], correct:0, feedback:'Camera distance determines which geometry is visible enough to deserve the cost.'},
    {q:'What is the final proof that a game asset works?', options:['It has many polygons','It behaves correctly in the engine at the intended scale and use','It has no UV seams','It uses only quads'], correct:1, feedback:'The engine validates scale, pivot, shading, materials, collision and practical use.'}
  ]
};
