window.UE5_SCULPT_DATA = {
  version:'3.26.0',
  title:'Sculpt Playground',
  toolName:'SculptGL',
  toolUrl:'https://stephaneginier.com/sculptgl/',
  embedUrl:'https://stephaneginier.com/sculptgl/?projection=perspective&fov=45&cameraMode=orbit&pivot=1&shader=matcap&flatShading=0&wireframe=0&curvature=0&exposure=1&environment=0&matcap=3&language=english&outline=1&grid=1&scaleCenter=1&mirrorLine=1&wacom=0',
  purpose:'A low-pressure digital-clay playground for silhouette, proportion and form. It is not a replacement for clean game-asset modelling in 3ds Max.',
  rules:[
    'Shape first. Do not worry about perfect topology while you are learning form.',
    'Make one change, rotate the model, then decide whether it actually improved the form.',
    'Use Smooth to repair lumpy accidents instead of piling more brush strokes on top.',
    'Save/export work you care about — SculptGL is a browser tool and should not be treated as your only copy.',
    'A sculpture that looks good can still have unsuitable topology. Inspect it later in 3ds Max.'
  ],
  starterTools:[
    {name:'Camera',key:'Mouse / right mouse',purpose:'Orbit around the form. Looking from one angle is how flat, broken sculptures happen.'},
    {name:'Brush',key:'Tool panel',purpose:'Push or pull broad forms. Start weak and build gradually.'},
    {name:'Smooth',key:'Shift',purpose:'Soften bumps and repair rough transitions.'},
    {name:'Inflate',key:'Tool panel',purpose:'Build round volume such as cheeks, brows or muscle masses.'},
    {name:'Drag',key:'Tool panel',purpose:'Pull the silhouette into a new shape. Powerful, so use it gently.'},
    {name:'Flatten',key:'Tool panel',purpose:'Create firmer planes and reduce unwanted roundness.'},
    {name:'Undo',key:'Ctrl + Z',purpose:'Use it immediately when a stroke makes the form worse.'},
    {name:'Wireframe',key:'W',purpose:'Reveal the mesh underneath the nice shaded surface.'}
  ],
  practices:[
    {
      id:'sculpt-camera',order:1,icon:'👀',title:'Hands Off the Clay',time:'5–10 min',xp:40,
      newSkill:'Camera control + Undo',
      aim:'Learn to inspect a 3D form from every side before making any sculpting decisions.',
      tools:['Camera','Undo'],
      steps:[
        {title:'Orbit the sphere',where:'Inside the SculptGL viewport.',do:'Click and drag on empty viewport space / use the normal SculptGL camera control to orbit around the starting sphere. Make one full trip around it.',see:'The sphere stays in the centre while your view moves around it.',check:'You can see the front, side, back, top and underside without accidentally sculpting the sphere.',why:'A sculpt can look convincing from one angle and completely wrong from another.',stuck:['If you mark the sphere accidentally, press Ctrl + Z immediately.','Double-click the model to refocus it if you lose it.']},
        {title:'Reset your view',where:'Viewport / camera controls.',do:'Press Space to reset the camera. Then orbit away and reset it again.',see:'The camera returns to a useful centred view.',check:'You know how to recover when the model disappears off-screen.',why:'Camera recovery prevents students from fighting the viewport instead of learning sculpture.',stuck:['If Space does not appear to reset the view, use the Camera reset control in SculptGL.']},
        {title:'Practise Undo before you need it',where:'Any sculpting tool, then keyboard.',do:'Make one tiny accidental-looking mark on the sphere, then press Ctrl + Z.',see:'The sphere returns to its previous shape.',check:'The unwanted mark is gone before you continue.',why:'Undo is a modelling skill. Good artists abandon bad changes quickly.',stuck:['Make sure the SculptGL viewport has focus before using the shortcut.']}
      ],
      challenge:'Without sculpting, find the most useful front, side and three-quarter views of the sphere.'
    },
    {
      id:'sculpt-brush-smooth',order:2,icon:'🖐',title:'Fingerprints in Clay',time:'10–15 min',xp:50,
      newSkill:'Brush + Smooth',
      aim:'Learn that form is built gradually with controlled strokes, then cleaned with Smooth.',
      tools:['Brush','Smooth','Undo'],
      steps:[
        {title:'Make one controlled bump',where:'Sculpt tool panel → Brush.',do:'Choose Brush. Use a fairly large radius and low intensity. Make one short stroke on the sphere.',see:'A soft bump appears rather than a sharp spike.',check:'The bump is visible but still blends into the sphere.',why:'Broad low-intensity changes are easier to control than aggressive detail strokes.',stuck:['If you create a spike, undo it and lower intensity.','If nothing changes, increase intensity slightly.']},
        {title:'Build the form with repeated light passes',where:'Same Brush tool.',do:'Pass over the same area two or three more times rather than increasing intensity dramatically.',see:'The bump grows gradually and remains controllable.',check:'You can identify each change and could undo the last one without losing the whole form.',why:'Sculpting is cumulative. Small decisions preserve control.',stuck:['If the surface becomes lumpy, stop adding clay and move to Smooth.']},
        {title:'Blend the edges',where:'Hold Shift while brushing.',do:'Hold Shift and lightly smooth around the outside of the bump. Avoid flattening the centre completely.',see:'The transition between sphere and bump becomes softer.',check:'The bump still exists but no longer looks pasted on.',why:'Smooth is for transitions and repair, not erasing every intentional form.',stuck:['If the whole bump disappears, undo and use fewer/lighter smoothing strokes.']}
      ],
      challenge:'Make three bumps of different sizes while keeping all three smooth and intentional.'
    },
    {
      id:'sculpt-symmetry-face',order:3,icon:'👽',title:'Friendly Alien Face',time:'20–30 min',xp:70,
      newSkill:'Symmetry + Inflate',
      aim:'Use symmetry to establish simple facial proportions without worrying about tiny detail.',
      tools:['Brush','Inflate','Smooth','Symmetry'],
      steps:[
        {title:'Confirm symmetry before touching the face',where:'SculptGL symmetry option / visible centre line.',do:'Make sure symmetry is active. Keep the model facing you and identify the vertical centre line.',see:'A stroke on one side should create a matching result on the other side.',check:'Test one tiny reversible stroke. Both sides change together.',why:'Symmetry lets beginners concentrate on proportion instead of manually matching both sides.',stuck:['Undo the test stroke once symmetry is confirmed.','If only one side changes, enable symmetry before continuing.']},
        {title:'Block the eye sockets',where:'Brush tool, low intensity.',do:'Use a broad brush with negative/inverted direction to gently push two eye socket areas inward.',see:'Two shallow matching hollows appear.',check:'The sockets are roughly level and neither cuts deeply through the head.',why:'Large landmarks come before eyelids, pupils or wrinkles.',stuck:['If they become deep holes, undo and reduce intensity.','Rotate to the side to check you have not crushed the whole forehead.']},
        {title:'Build brow and cheek volume',where:'Inflate tool.',do:'Inflate lightly above the eyes for brows and below/outside them for cheeks. Use several gentle passes.',see:'The face begins to have planes and volume rather than looking like a sphere with holes.',check:'Rotate to three-quarter view. The brow and cheeks should project slightly.',why:'Faces read through large masses before surface detail.',stuck:['If everything becomes puffy, Smooth lightly and reduce intensity.']},
        {title:'Give it a simple mouth',where:'Brush or Crease if confident.',do:'Create one shallow mouth line. Keep it simple; no teeth, lips or tiny detail yet.',see:'The head reads as a character from a distance.',check:'Zoom out. You should recognise a face without needing detail.',why:'Readable proportion beats detail at this stage.',stuck:['If the mouth dominates the face, undo and make a smaller/shallow mark.']}
      ],
      challenge:'Change the alien’s personality only by adjusting brow height, cheek volume and mouth curve.'
    },
    {
      id:'sculpt-rock',order:4,icon:'🪨',title:'Rock, Not Potato',time:'15–25 min',xp:60,
      newSkill:'Drag + Flatten + silhouette',
      aim:'Turn a sphere into a believable rock by changing the silhouette and introducing planes.',
      tools:['Drag','Flatten','Smooth','Camera'],
      steps:[
        {title:'Break the perfect sphere',where:'Drag tool.',do:'Use a large Drag radius and make three or four gentle pulls in different directions. Rotate after every pull.',see:'The outline becomes irregular but still feels like one solid mass.',check:'No single stretch looks like a horn or handle unless you intended it.',why:'Natural forms are read first by silhouette.',stuck:['If the mesh stretches into a spike, undo and use a larger brush with a shorter drag.']},
        {title:'Create broad planes',where:'Flatten tool.',do:'Flatten several areas around the rock. Rotate between each stroke so all sides receive attention.',see:'The form develops flatter faces separated by softer transitions.',check:'Light catches the rock in broader patches instead of one perfectly round highlight.',why:'Planes stop rocks looking like potatoes or melted blobs.',stuck:['If you carve obvious flat stamps, lower intensity and blend the edges lightly.']},
        {title:'Remove accidental lumps',where:'Smooth tool.',do:'Smooth only the transitions that look noisy. Keep the intentional large planes.',see:'The rock looks deliberate but not polished like a pebble.',check:'From a distance, the outline and planes still read clearly.',why:'Cleanup should support the form, not erase it.',stuck:['Undo if smoothing turns the rock back into a sphere.']}
      ],
      challenge:'Make a second rock from a fresh sphere that has a clearly different silhouette but uses the same three tools.'
    },
    {
      id:'sculpt-silhouette',order:5,icon:'🎭',title:'Three Silhouettes',time:'20 min',xp:70,
      newSkill:'Designing from the outline',
      aim:'Prove that character and object ideas can read before surface detail exists.',
      tools:['Drag','Brush','Smooth','Camera'],
      steps:[
        {title:'Choose one idea in words',where:'Before touching the model.',do:'Pick one adjective: tall, squat, heavy, sharp, soft, hunched or heroic.',see:'You have a clear design intention before making strokes.',check:'You can say what the silhouette should communicate in one sentence.',why:'Purpose makes sculpting decisions easier to judge.',stuck:['Do not choose “detailed”. Choose a shape/proportion word.']},
        {title:'Change only the big outline',where:'Drag + broad Brush.',do:'Use large tools only. Stretch/compress the overall form until it communicates the adjective. Avoid eyes, wrinkles, seams or texture.',see:'The model reads differently even as a flat outline.',check:'Zoom far out. The idea should still be visible.',why:'Strong silhouettes survive distance, lighting changes and simplified presentation.',stuck:['If you keep adding tiny marks, increase brush radius and zoom out.']},
        {title:'Repeat with two opposite ideas',where:'New/reset sphere for each attempt.',do:'Create two more silhouettes using contrasting adjectives.',see:'You end with three obviously different masses rather than three decorated spheres.',check:'Put the three ideas side-by-side mentally: their proportions should differ clearly.',why:'Variation builds design judgement rather than muscle memory.',stuck:['If they look alike, exaggerate height/width and centre of mass before adding anything else.']}
      ],
      challenge:'Ask another student to guess the adjective for each sculpt without telling them first.'
    },
    {
      id:'sculpt-export-inspect',order:6,icon:'🔬',title:'Pretty Surface, Messy Mesh?',time:'15–25 min',xp:80,
      newSkill:'Wireframe + OBJ export + topology inspection',
      aim:'Understand that sculpting for form and modelling for a production pipeline are related but different skills.',
      tools:['Wireframe','OBJ Export','3ds Max'],
      steps:[
        {title:'Turn on wireframe',where:'SculptGL viewport → press W.',do:'Press W and rotate around your favourite sculpt.',see:'The polygon structure appears over the shaded form.',check:'Look at dense areas, stretched areas and places where the mesh changes direction.',why:'The shaded surface can hide topology that would be awkward for editing, UVs, deformation or optimisation.',stuck:['Click inside the SculptGL viewport first if W does nothing.']},
        {title:'Do not “fix” it in SculptGL yet',where:'Observation only.',do:'Pick three areas of the wireframe and describe what you notice: dense, stretched, uneven, simple, chaotic, etc.',see:'You are evaluating structure separately from appearance.',check:'You can explain at least one reason the mesh might need cleanup for a game pipeline.',why:'Diagnosis must come before repair.',stuck:['If you only say “it looks bad”, be specific about polygon size/density/direction.']},
        {title:'Export an OBJ',where:'SculptGL Files / Export OBJ, or Ctrl + E.',do:'Export the selected sculpture as OBJ and save it with a sensible name such as AlienForm_SculptGL_v01.obj.',see:'An OBJ file downloads to your computer.',check:'The file exists before leaving the page.',why:'Export creates the bridge from free sculpting into a production DCC such as 3ds Max.',stuck:['If Ctrl + E is intercepted by the browser, use the SculptGL Files/Export control instead.']},
        {title:'Inspect it in 3ds Max',where:'3ds Max → File → Import → Import.',do:'Import the OBJ. Turn on Edged Faces and inspect the model without immediately editing it.',see:'The SculptGL form appears in Max with its real mesh structure visible.',check:'Compare the mesh to one of your clean Max assets. Write down two differences.',why:'This is the central lesson: good form and good production topology are separate achievements.',stuck:['If scale is surprising, do not rescale randomly yet; note it and treat this as an inspection exercise.']}
      ],
      challenge:'Choose one sculpt that would be worth rebuilding/retopologising as a proper game asset and explain why.'
    }
  ],
  sources:[
    {title:'SculptGL official web app',url:'https://stephaneginier.com/sculptgl/',note:'The live browser sculpting tool embedded by the Hub.'},
    {title:'Official SculptGL shortcuts',url:'https://stephaneginier.com/shortcuts',note:'Keyboard and camera controls from the original creator.'},
    {title:'SculptGL source (MIT licence)',url:'https://github.com/stephomi/sculptgl',note:'Original open-source project. The repository is archived/read-only as of 2026.'}
  ]
};
