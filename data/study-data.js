window.UE5_STUDY_DATA = {
  version: '3.39.0',
  designRevision: {
    'world-design': [
      ['A blockout looks attractive, but new players keep missing the exit. What should you test first?', ['Add more decorative props','Remove visual noise and test route readability with a fresh player','Increase texture resolution','Add a longer cutscene'], 1, 'Level design should communicate the route before decoration carries the scene. Strip the problem back and test whether space, landmarks and sightlines are doing their job.'],
      ['What is the strongest job for a landmark in a navigable space?', ['Make every room symmetrical','Help the player orient, remember location or make a route decision','Hide collision','Increase polygon count'], 1, 'A landmark earns its place when it helps orientation, memory or decision-making rather than simply looking impressive.'],
      ['Three routes reach the same goal. When does that become a meaningful choice?', ['When every route looks identical','When each route asks for a different trade-off, risk or skill','When one route is secretly blocked','When the player is shown a text box explaining the correct route'], 1, 'Choice needs consequence. Routes become meaningful when they change risk, reward, information, timing or required skill.']
    ],
    'environment': [
      ['A room is full of props but says nothing about who uses it. What is the best next move?', ['Add even more clutter','Choose a story/use idea and place props that support it','Randomise every prop rotation','Replace all props with Nanite meshes'], 1, 'Set dressing should communicate use, history and hierarchy. More objects do not automatically create a more believable place.'],
      ['Why is visual hierarchy useful in environment art?', ['It makes every object equally important','It helps the eye understand what matters first, second and third','It removes the need for lighting','It guarantees good performance'], 1, 'Hierarchy controls attention. Large forms, focal props, contrast and detail density should guide the eye rather than compete equally.'],
      ['Which is the better repeated-prop strategy?', ['Every copy perfectly identical','Controlled variation that preserves the prop family and scene logic','A different material on every copy','Rotate every copy by a random angle regardless of use'], 1, 'Believable repetition uses controlled variation while keeping function, placement logic and visual consistency.']
    ],
    'materials': [
      ['Two surfaces have similar colour but one should read as rough concrete and the other as painted metal. Which channel is especially important?', ['Roughness','World Position Offset','Opacity only','Emissive'], 0, 'Roughness strongly affects how light responds to a surface and is one of the main cues that helps different materials read correctly.'],
      ['A tiny serial number is painted on a background prop. What is usually the best representation?', ['Extra silhouette geometry','Texture/decal detail','A separate skeletal mesh','A particle system'], 1, 'Small surface information that does not change silhouette is usually better represented in textures, decals or normal detail.'],
      ['What makes dirt and wear feel believable?', ['Putting grime everywhere equally','Connecting wear to contact, use, weathering and material behaviour','Using maximum contrast on every edge','Making every surface metallic'], 1, 'Surface storytelling works when wear has a cause. Think about hands, feet, water, friction, impact, age and exposure.']
    ],
    'lighting': [
      ['A horror scene has great mood but the player cannot read the route. What should win first?', ['Readability of the important route','More fog everywhere','Darker shadows','More coloured lights'], 0, 'Mood matters, but the player still needs enough information to navigate and understand important gameplay space.'],
      ['How can lighting guide a player without an arrow?', ['Use contrast, brightness and composition to make the useful route visually stronger','Make every area equally bright','Hide the destination in darkness','Add more UI'], 0, 'Controlled contrast can pull attention toward doors, paths, landmarks and interactable areas without explicit markers.'],
      ['Why test a lighting idea under a changed mood or time of day?', ['To prove the layout/readability does not depend on one accidental lighting setup','To increase texture size','To remove the need for playtesting','To create more actors'], 0, 'Changing conditions exposes whether the underlying design still communicates when the original lighting crutch changes.']
    ],
    'landscape': [
      ['What should shape a game terrain before decorative sculpting?', ['Traversal, landmarks, encounter space and sightlines','Random noise strength','Foliage density only','The number of landscape layers'], 0, 'Terrain is gameplay space. Routes, views, elevation changes and encounter needs should drive the large forms first.'],
      ['Why are strong distant landmarks useful in open spaces?', ['They make every route linear','They support orientation and route planning','They reduce draw calls automatically','They replace collision'], 1, 'Distant landmarks give players a stable reference for where they are and where they might travel next.'],
      ['Which foliage placement is strongest?', ['Uniform density everywhere','Placement that supports biome logic, sightlines, traversal and composition','Maximum grass on every surface','Completely random scattering'], 1, 'Foliage should support the place and the play space. It can frame views, reveal routes, hide edges and reinforce environmental logic.']
    ],
    'cinematics': [
      ['What is the best reason to cut to a new shot?', ['The timeline has been running for five seconds','The audience needs new information, emphasis or emotional perspective','A different camera exists','To use every lens in the project'], 1, 'A cut should have a communication job. New information, reaction, emphasis, rhythm or spatial understanding are stronger reasons than arbitrary timing.'],
      ['A camera move looks impressive but makes the subject harder to read. What should you do?', ['Keep it because movement always adds quality','Simplify or remove the move so the shot communicates clearly','Add motion blur','Increase camera speed'], 1, 'Cinematography serves communication. Camera movement should strengthen staging, emotion or information rather than fight it.'],
      ['Why block character/subject positions before polishing camera animation?', ['Staging determines what the shot needs to communicate','It increases texture quality','It creates automatic cuts','It removes the need for lenses'], 0, 'Good framing begins with clear staging. Camera polish cannot rescue a scene where the important subject relationships are unclear.']
    ],
    'audio': [
      ['A player can hear danger before seeing it. What design job is the sound doing?', ['Spatial/informational feedback','Texture compression','Polygon reduction','Colour grading'], 0, 'Audio can communicate direction, distance, material, threat and timing before visual confirmation.'],
      ['Why can silence be useful in sound design?', ['It creates contrast and makes later sounds more meaningful','It always improves performance','It removes the need for ambience','It makes every scene relaxing'], 0, 'Silence changes expectation and contrast. Removing sound can be as deliberate as adding it.'],
      ['Which approach makes an environment easier to read by ear?', ['Every sound equally loud and centred','Layered sounds with useful distance, direction and priority','Random pitch on every sound','Music replacing all world audio'], 1, 'Spatialisation, priority and layered ambience help players understand space instead of receiving one undifferentiated wall of sound.']
    ],
    'polish': [
      ['You have one hour left. Which polish task should come first?', ['The change with the biggest player-facing/readability/performance impact','A tiny detail nobody will see','Renaming every material','Adding another feature'], 0, 'Polish is triage. Prioritise problems that most affect the player, presentation or performance rather than polishing whatever is easiest.'],
      ['A scene stutters badly in one area. What is the strongest first response?', ['Profile and identify the actual bottleneck','Delete random props','Reduce every texture to the same size','Guess that lighting is the problem'], 0, 'Optimisation should be evidence-led. Measure first, then fix the system actually causing the cost.'],
      ['What does presentation polish include beyond graphics?', ['Readable framing, clean starts/ends, consistency and removing obvious friction','Only higher resolution textures','Only more particles','Only post-process effects'], 0, 'Presentation is the whole experience of seeing and using the work: clarity, consistency, framing, flow and confidence all matter.']
    ]
  },
  modelHomework: {
    'read-the-mesh': {
      title: 'Wireframe Detective',
      task: 'Open one simple prop in Max with Edged Faces on. Identify three edges that clearly earn their place and one area where extra loops would add nothing.',
      evidence: 'One annotated screenshot with four short callouts.',
      stretch: 'Delete or dissolve one genuinely unnecessary loop on a copy and prove the silhouette/shading still works.'
    },
    'space-and-views': {
      title: 'Viewpoint Discipline',
      task: 'Choose a simple real object and photograph or sketch it from front, side and top. Recreate only its blockout in Max using orthographic views for proportion and Perspective for the final check.',
      evidence: 'Reference + front/side/top Max screenshots + one perspective screenshot.',
      stretch: 'Write one sentence explaining which view was most useful for which dimension.'
    },
    'spend-geometry': {
      title: 'Polygon Budget Test',
      task: 'Make three versions of the same cylinder or rounded prop using low, sensible and excessive segment counts. Compare them from the distance a player would actually see them.',
      evidence: 'Three wireframe screenshots and your chosen version with a one-sentence justification.',
      stretch: 'Repeat the comparison from a much closer camera and explain whether your choice changes.'
    },
    'transforms-and-pivots': {
      title: 'Pivot Audit',
      task: 'Pick three game props with different movement/placement needs — for example a door, wheel and modular wall piece. Decide where each pivot should be and place it deliberately in Max.',
      evidence: 'Three screenshots with the pivot visible and one sentence explaining each decision.',
      stretch: 'Test one prop by rotating or snapping it exactly as it would be used in engine.'
    },
    'uvs-and-pbr': {
      title: 'Checker Before Colour',
      task: 'Apply a checker to one of your models. Find stretching, inconsistent scale or wasted UV space before touching final textures.',
      evidence: 'Checker screenshot + UV layout + three fixes you made.',
      stretch: 'Compare two materials with similar Base Colour but different Roughness and explain why they read differently.'
    },
    'game-ready': {
      title: 'Engine-Ready Audit',
      task: 'Take one finished prop and inspect naming, scale, pivot, collision plan, material slots, UVs and export readiness before it goes to Unreal.',
      evidence: 'A seven-point checklist with one screenshot of the final Max asset and one Unreal import screenshot if available.',
      stretch: 'Identify one thing you would simplify if the prop were only ever seen in the background.'
    }
  },
  glossary: [
    ['Vertex','A point in a polygon mesh where edges meet. Moving a vertex changes the connected surface.','3D Modelling'],
    ['Edge','A line connecting two vertices and forming part of a polygon boundary.','3D Modelling'],
    ['Polygon / Face','A surface area of a mesh bounded by edges.','3D Modelling'],
    ['Element','A connected chunk of geometry inside one mesh object.','3D Modelling'],
    ['Quad','A four-sided polygon. Useful for readable loops and many modelling operations, but not a rule that every game mesh must follow.','3D Modelling'],
    ['Triangle','A three-sided polygon. Game engines ultimately render triangles, so deliberate triangles are completely normal.','3D Modelling'],
    ['N-gon','A polygon with more than four sides. Can be acceptable on simple flat areas but risky on curved, deforming or shading-sensitive surfaces.','3D Modelling'],
    ['Topology','The arrangement and flow of vertices, edges and faces across a mesh.','3D Modelling'],
    ['Edge Loop','A connected run of edges following the topology of a mesh.','3D Modelling'],
    ['Edge Ring','A set of roughly parallel edges running across a strip of polygons.','3D Modelling'],
    ['Silhouette','The outer visible shape of an object. Geometry that changes silhouette is usually more valuable than hidden surface density.','3D Modelling'],
    ['Support Loop','An edge loop placed near another edge to control sharpness or shape, especially with smoothing/subdivision.','3D Modelling'],
    ['Chamfer','Cuts an edge into a small flat or rounded transition so hard-surface edges catch light more naturally.','3D Modelling'],
    ['Modifier Stack','3ds Max list of non-destructive operations applied to an object in order.','3D Modelling'],
    ['Pivot','The local reference point used for transforms, rotation and placement of an object.','3D Modelling'],
    ['World Space','Coordinates measured against the scene/world axes rather than the object itself.','3D Modelling'],
    ['Local Space','Coordinates and axes relative to the selected object and its orientation.','3D Modelling'],
    ['Orthographic View','A straight-on view without perspective distortion, useful for accurate proportion and alignment.','3D Modelling'],
    ['Perspective View','A depth view that resembles human vision, where distant objects appear smaller.','3D Modelling'],
    ['UV','2D texture coordinates describing where points on a 3D surface read from an image.','3D Modelling'],
    ['UV Island / Shell','A connected group of polygons laid out together in UV space.','3D Modelling'],
    ['UV Seam','An intentional cut where the surface is separated into UV islands.','3D Modelling'],
    ['Texel Density','The amount of texture resolution assigned to a given amount of model surface area.','3D Modelling'],
    ['PBR','Physically Based Rendering: a material workflow that uses consistent physical-style properties such as Base Colour, Roughness and Metallic.','3D Modelling'],
    ['Base Colour','The main surface colour information in a PBR material, without baked lighting.','3D Modelling'],
    ['Roughness','Controls how broad/diffuse or sharp a surface reflection appears.','3D Modelling'],
    ['Metallic','Indicates whether a surface behaves like a metal in a metallic/roughness PBR workflow.','3D Modelling'],
    ['Normal Map','Texture that changes the apparent surface direction for lighting, adding small detail without changing silhouette.','3D Modelling'],
    ['Ambient Occlusion (AO)','Approximation of small-scale light occlusion in creases/contact areas; should support rather than replace real lighting.','3D Modelling'],
    ['LOD','Level of Detail: alternate asset complexity used at different viewing distances to reduce rendering cost.','3D Modelling'],
    ['Collision Hull','Simple invisible geometry used to determine physical collision around a mesh.','3D Modelling'],
    ['Modular Kit','Reusable pieces designed to snap together consistently to build larger environments.','3D Modelling'],
    ['Retopology','Rebuilding or simplifying topology to create a cleaner, more controllable or game-ready mesh.','3D Modelling'],
    ['Boolean (3D)','A modelling operation that combines, subtracts or intersects solid forms. Useful when controlled, but not a substitute for cleanup and topology judgement.','3D Modelling'],
    ['Blockout / Greybox','A simple early version of a space or asset used to test proportion, layout and function before detail.','Game Design'],
    ['Critical Path','The main route a player is expected to follow through a level or sequence.','Game Design'],
    ['Landmark','A memorable visual/spatial reference that helps orientation, navigation or location identity.','Game Design'],
    ['Sightline','A line of visibility between player, destination, landmark, threat or other important feature.','Game Design'],
    ['Signposting','Visual, spatial, lighting, audio or interaction cues that help the player understand where to go or what matters.','Game Design'],
    ['Affordance','A clue suggesting how something can be used, such as a handle implying pull or a ledge implying climb.','Game Design'],
    ['Player Flow','The way players move, pause, choose and transition through a space or experience.','Game Design'],
    ['Chokepoint','A narrow or constrained area that concentrates movement, attention or conflict.','Game Design'],
    ['Encounter Space','An area deliberately shaped around a gameplay interaction, challenge or combat situation.','Game Design'],
    ['Pacing','Control of intensity, rest, information and activity over time.','Game Design'],
    ['Environmental Storytelling','Communicating story, history or character through spaces, props, damage, arrangement and other environmental evidence.','Game Design'],
    ['Visual Hierarchy','Organisation of visual elements so the player notices the most important information first.','Game Design'],
    ['Set Dressing','Placement of props and details that supports function, story, composition and believability in an environment.','Game Design'],
    ['Focal Point','An area deliberately made visually dominant so attention is drawn there.','Game Design'],
    ['Readability','How easily a player can understand important information, routes, states or interactions.','Game Design'],
    ['Diegetic','Existing inside the game world for the characters as well as the player, such as a radio playing in a room.','Game Design'],
    ['Non-diegetic','Presented to the player but not existing physically in the game world, such as most HUD elements or score music.','Game Design'],
    ['Feedback','A response that tells the player what happened after an input, action or state change.','Game Design'],
    ['Iteration','Making, testing, evaluating and improving a design through repeated versions.','Game Design'],
    ['Playtest','A structured observation of somebody using a game or level so decisions can be improved using evidence.','Game Design'],
    ['Constraint','A deliberate limitation that forces clearer design decisions, such as guiding the player without arrows or text.','Game Design'],
    ['Composition','Arrangement of visual elements in a frame or view to control balance, emphasis, depth and attention.','Game Design']
  ]
};
