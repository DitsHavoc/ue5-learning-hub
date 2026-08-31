window.UE5_PATHWAY_DATA = {
  version: '3.41.0',
  buildDate: '2026-08-31',
  intro: 'Guided Paths are optional routes through learning that already exists in the Hub. They do not lock other pages, duplicate XP or stop you searching for the exact thing you need.',
  principles: [
    'Everything in the Hub remains freely browsable.',
    'A path recommends an order; it does not lock the rest of the site.',
    'Work you already completed counts automatically.',
    'Choice steps let you prove the same idea in different ways.',
    'XP still comes from the real lesson, tutorial or build — never twice.'
  ],
  paths: [
    {
      id: 'playable-level',
      icon: '◇',
      title: 'Build a Playable Level',
      kicker: 'SPACE • GUIDANCE • CHOICE • PACING',
      summary: 'Learn how players read spaces, then greybox, test and improve a small level that works before the art pass.',
      outcome: 'A tested three-room playable level with readable routes, a meaningful decision and deliberate pacing.',
      audience: 'Good for level design, environment design and anyone building playable 3D spaces.',
      steps: [
        {type:'theory', id:'player-agency', why:'Start with the reason space matters: it gives players decisions.'},
        {type:'theory', id:'affordances-signifiers', why:'Learn how shapes and signals tell players what can be used.'},
        {type:'tutorial', id:'greybox-room', why:'Build with simple geometry before decoration hides design problems.'},
        {type:'tutorial', id:'player-scale', why:'Make the space believable and usable at player scale.'},
        {type:'theory', id:'guidance-sightlines', why:'Understand landmarks, visibility and route hierarchy.'},
        {type:'tutorial', id:'route-readability', why:'Prove the route can be read without giant arrows.'},
        {type:'theory', id:'meaningful-choice', why:'A fork is only interesting when the options create different consequences.'},
        {type:'tutorial', id:'decision-point-test', why:'Build and test one clear decision point.'},
        {type:'theory', id:'pacing-tension-flow', why:'Use contrast between spaces to control rhythm and tension.'},
        {type:'tutorial', id:'spatial-pacing', why:'Apply pacing through compression, release, visibility and movement.'},
        {type:'designBuild', id:'world-design', why:'Combine the principles in the Three-Room Journey Studio Build.'},
        {type:'activity', title:'Let another human break it', icon:'💬', area:'Critique / playtest', href:'#/critique', description:'Hand the level to another student without explaining the route. Record the first hesitation or wrong turn, change one thing and test again.', optional:true}
      ]
    },
    {
      id: 'gameplay-mechanic',
      icon: '⚙',
      title: 'Create a Gameplay Mechanic',
      kicker: 'SYSTEMS • BLUEPRINTS • FEEDBACK • TESTING',
      summary: 'Move from a design idea into a small working Unreal mechanic, then add feedback and test whether another player understands it.',
      outcome: 'A small playable mechanic with clear rules, working Blueprint logic and at least one deliberate feedback improvement.',
      audience: 'Good for gameplay designers, Blueprint programmers and students who learn best by making a mechanic.',
      steps: [
        {type:'theory', id:'what-is-game-design', why:'Separate the actual rule/system from theme and feature lists.'},
        {type:'theory', id:'core-gameplay-loops', why:'Know where the mechanic sits inside repeated player behaviour.'},
        {type:'theory', id:'player-agency', why:'Make sure the mechanic gives the player a meaningful action or decision.'},
        {type:'lesson', id:'events', why:'Understand how gameplay logic starts and flows.'},
        {type:'lesson', id:'variables', why:'Store the state your mechanic needs.'},
        {type:'lesson', id:'branches', why:'Make the system respond to conditions.'},
        {type:'lesson', id:'functions', why:'Keep repeated logic readable and reusable.'},
        {type:'choice', title:'Build one mechanic', icon:'🛠', description:'Choose one outcome that suits what you want to make. Completing any one advances the path.', options:[
          {type:'tutorial', id:'line-trace-interact'},
          {type:'tutorial', id:'player-health'},
          {type:'tutorial', id:'score-system'},
          {type:'tutorial', id:'checkpoint'}
        ]},
        {type:'theory', id:'game-feel-feedback', why:'A working system is not necessarily a readable or satisfying system.'},
        {type:'choice', title:'Add one layer of feedback', icon:'✦', description:'Choose the feedback that best supports your mechanic.', options:[
          {type:'tutorial', id:'sound-feedback'},
          {type:'tutorial', id:'niagara-impact'},
          {type:'tutorial', id:'camera-shake'}
        ]},
        {type:'theory', id:'playtesting-iteration', why:'Test the behaviour rather than assuming your intention is obvious.'},
        {type:'activity', title:'One-player test, one real change', icon:'💬', area:'Critique / playtest', href:'#/critique', description:'Give the mechanic to somebody else. Do not teach them how it works. Watch, collect one useful observation and make one evidence-based change.', optional:true}
      ]
    },
    {
      id: 'game-ready-prop',
      icon: '⬡',
      title: 'Make a Game-Ready 3D Prop',
      kicker: 'FORM • TOPOLOGY • UVS • MATERIALS • UE5',
      summary: 'Build from reference, control geometry deliberately, prepare UVs and materials, then prove the asset survives the trip into Unreal.',
      outcome: 'A game-ready prop with defensible topology, clean UVs/material preparation and a verified Unreal Engine import.',
      audience: 'Good for 3D artists, environment artists and students who want a clear modelling route instead of random tutorial hopping.',
      steps: [
        {type:'theory', id:'scope-constraints', why:'Choose an asset you can finish properly rather than an impressive idea you cannot complete.'},
        {type:'group', title:'Pass Game-Ready 3D Foundations', icon:'🧠', description:'Complete Module 0 and Model Doctor so you can diagnose what a game-ready mesh needs.', items:[
          {type:'modelFoundation', id:'read-the-mesh'},
          {type:'modelFoundation', id:'space-and-views'},
          {type:'modelFoundation', id:'spend-geometry'},
          {type:'modelFoundation', id:'transforms-and-pivots'},
          {type:'modelFoundation', id:'uvs-and-pbr'},
          {type:'modelFoundation', id:'game-ready'},
          {type:'modelFinal', id:'final'}
        ]},
        {type:'group', title:'Learn the core Max tools', icon:'⬡', description:'Get the essential modelling moves under control before trying to hide problems with materials.', items:[
          {type:'modelLesson', id:'max-orientation'},
          {type:'modelLesson', id:'max-primitives-transforms'},
          {type:'modelLesson', id:'max-editable-poly'},
          {type:'modelLesson', id:'max-extrude-inset'},
          {type:'modelLesson', id:'max-edge-control'},
          {type:'modelLesson', id:'max-chamfer-smoothing'},
          {type:'modelLesson', id:'max-modifier-stack'}
        ]},
        {type:'choice', title:'Prove the core modelling', icon:'🔧', description:'Choose one scaffolded prop and finish the geometry honestly.', options:[
          {type:'modelBuild', id:'build-crate'},
          {type:'modelBuild', id:'build-barrel'},
          {type:'modelBuild', id:'build-tyre'},
          {type:'modelBuild', id:'build-wall-panel'}
        ]},
        {type:'modelLesson', id:'max-topology-clinic', why:'Diagnose the mesh before adding more detail.'},
        {type:'modelLesson', id:'max-uvs', why:'Create UVs that are readable, efficient and suitable for texturing.'},
        {type:'modelLesson', id:'max-materials-substance', why:'Prepare the asset for a sensible material/texturing handoff.'},
        {type:'modelLesson', id:'max-ue5-export', why:'Verify pivot, scale, normals and the actual in-engine result.'},
        {type:'modelBuild', id:'build-hero-prop', why:'Finish with a more independent prop that makes you justify the decisions yourself.'}
      ]
    },
    {
      id: 'digital-to-tabletop',
      icon: '🎲',
      title: 'Digital Game → Tabletop',
      kicker: 'ANALYSE • TRANSLATE • PROTOTYPE • TEST',
      summary: 'Take a videogame the whole team genuinely knows and translate its important decisions and experience into physical rules and components.',
      outcome: 'A playable tabletop prototype that preserves selected parts of the original game experience without trying to copy the entire videogame.',
      audience: 'Built for the Digital → Tabletop project, but useful for anyone studying adaptation, abstraction and prototyping.',
      steps: [
        {type:'theory', id:'what-is-game-design', why:'Describe the game through behaviour and systems rather than characters and art.'},
        {type:'theory', id:'core-gameplay-loops', why:'Identify what the player repeatedly does.'},
        {type:'theory', id:'mda-framework', why:'Separate mechanics from the behaviour and experience they create.'},
        {type:'theory', id:'pillars-and-abstraction', why:'Decide what is essential and what can be simplified.'},
        {type:'activity', title:'Board Game Lab', icon:'🎲', area:'In-class design lab', href:'#/theory', description:'Play a physical game from the classroom collection for 15–20 minutes. Analyse its turn loop, choices, randomness, interaction and component readability. This activity does not gate the general Theory area.', optional:true},
        {type:'theory', id:'player-agency', why:'Identify what the player is actually allowed to decide.'},
        {type:'theory', id:'meaningful-choice', why:'Keep decisions where the alternatives genuinely matter.'},
        {type:'theory', id:'risk-reward', why:'Translate tension into understandable costs and potential rewards.'},
        {type:'theory', id:'randomness-uncertainty', why:'Choose what should be uncertain and what should remain under player control.'},
        {type:'theory', id:'resources-economies', why:'Turn digital inventory, currency or scarcity into manageable physical resources.'},
        {type:'theory', id:'balance-counterplay', why:'Make different strategies viable and give players ways to respond.'},
        {type:'theory', id:'translating-between-media', why:'Use KEEP / SIMPLIFY / CHANGE / REMOVE / REPLACE deliberately.'},
        {type:'theory', id:'prototyping', why:'Build the cheapest version that can answer the next design question.'},
        {type:'theory', id:'playtesting-iteration', why:'Watch real players, change the rules and test again.'},
        {type:'activity', title:'Prototype V1 → test → change', icon:'✂', area:'In-class prototype', href:'#/theory/prototyping', description:'Make the first playable version with paper, cards, dice, tokens or tiles. Test one question, record what happened and change the design before polishing it.', optional:true}
      ]
    }
  ],
  applyLinks: {
    'what-is-game-design': [
      {icon:'⚙', title:'Create a Gameplay Mechanic', meta:'Guided Path', href:'#/pathways/gameplay-mechanic', why:'Turn a design explanation into something playable.'}
    ],
    'core-gameplay-loops': [
      {icon:'⚙', title:'Create a Gameplay Mechanic', meta:'Guided Path', href:'#/pathways/gameplay-mechanic', why:'Build one action that belongs inside a clear repeatable loop.'},
      {icon:'🎲', title:'Digital Game → Tabletop', meta:'Guided Path', href:'#/pathways/digital-to-tabletop', why:'Use the core loop to decide what survives an adaptation.'}
    ],
    'mda-framework': [
      {icon:'🎲', title:'Digital Game → Tabletop', meta:'Guided Path', href:'#/pathways/digital-to-tabletop', why:'Translate mechanics while protecting the dynamics and player experience that matter.'}
    ],
    'pillars-and-abstraction': [
      {icon:'🎲', title:'Translate a videogame to tabletop', meta:'Guided Path', href:'#/pathways/digital-to-tabletop', why:'Use abstraction to simplify without losing the identity of the game.'}
    ],
    'player-agency': [
      {icon:'◇', title:'Design a Clear Decision Point', meta:'Designer Studio practical', href:'#/tutorial/decision-point-test', why:'Build a spatial choice and test whether both options are understandable.'},
      {icon:'◇', title:'Build a Playable Level', meta:'Guided Path', href:'#/pathways/playable-level', why:'Apply agency through routes, optional spaces and spatial decisions.'}
    ],
    'meaningful-choice': [
      {icon:'◇', title:'Design a Clear Decision Point', meta:'Designer Studio practical', href:'#/tutorial/decision-point-test', why:'Turn “two doors” into a decision with actual trade-offs.'}
    ],
    'risk-reward': [
      {icon:'◇', title:'Level Design Foundations', meta:'Designer Studio', href:'#/design/world-design', why:'Use optional routes, visibility and payoff spaces to create spatial risk/reward.'}
    ],
    'randomness-uncertainty': [
      {icon:'🛠', title:'Make a Simple Random Spawner', meta:'Quick Tutorial', href:'#/tutorial/random-spawner', why:'See how uncertainty changes what the player can predict and respond to.'}
    ],
    'feedback-loops': [
      {icon:'🛠', title:'Make Simple Win and Lose Conditions', meta:'Quick Tutorial', href:'#/tutorial/win-lose-state', why:'Connect accumulating game state to consequences the player can understand.'}
    ],
    'resources-economies': [
      {icon:'🛠', title:'Add Ammo and Reload', meta:'Quick Tutorial', href:'#/tutorial/ammo-reload', why:'Make scarcity and replenishment visible in a small playable system.'},
      {icon:'🛠', title:'Make a Collectable Counter', meta:'Quick Tutorial', href:'#/tutorial/collectable', why:'Build a simple resource source and track its value.'}
    ],
    'balance-counterplay': [
      {icon:'💬', title:'Critique Board', meta:'Test with another human', href:'#/critique', why:'Balance claims need evidence from players, not just spreadsheet confidence.'}
    ],
    'progression-difficulty': [
      {icon:'⚙', title:'Create a Gameplay Mechanic', meta:'Guided Path', href:'#/pathways/gameplay-mechanic', why:'Build a small system first, then think about how its challenge changes over time.'}
    ],
    'game-feel-feedback': [
      {icon:'🔊', title:'Play Sound Feedback from Blueprint', meta:'Quick Tutorial', href:'#/tutorial/sound-feedback', why:'Make an action easier to read through immediate audio response.'},
      {icon:'✦', title:'Spawn a Niagara Hit Effect', meta:'Quick Tutorial', href:'#/tutorial/niagara-impact', why:'Add visible confirmation to an impact or event.'},
      {icon:'🎥', title:'Add Camera Shake to an Action', meta:'Quick Tutorial', href:'#/tutorial/camera-shake', why:'Use camera response deliberately rather than as decoration.'}
    ],
    'pacing-tension-flow': [
      {icon:'◇', title:'Create Pacing with Space', meta:'Designer Studio practical', href:'#/tutorial/spatial-pacing', why:'Control rhythm using compression, release, sightlines and movement.'},
      {icon:'🎥', title:'Make a Slow Reveal Shot', meta:'Designer Studio practical', href:'#/tutorial/reveal-shot', why:'Apply pacing through framing and controlled information.'}
    ],
    'onboarding': [
      {icon:'◇', title:'Make a Route Read Without Arrows', meta:'Designer Studio practical', href:'#/tutorial/route-readability', why:'Teach movement expectations through the space itself.'},
      {icon:'🛠', title:'Show an Interaction Prompt', meta:'Quick Tutorial', href:'#/tutorial/interaction-prompt', why:'Compare environmental teaching with explicit interface feedback.'}
    ],
    'affordances-signifiers': [
      {icon:'◇', title:'Make a Route Read Without Arrows', meta:'Designer Studio practical', href:'#/tutorial/route-readability', why:'Use shape, contrast and placement to communicate possible movement.'},
      {icon:'🛠', title:'Show an Interaction Prompt', meta:'Quick Tutorial', href:'#/tutorial/interaction-prompt', why:'Support an interactable when the object alone does not communicate enough.'}
    ],
    'guidance-sightlines': [
      {icon:'◇', title:'Create a Strong Focal Point', meta:'Designer Studio practical', href:'#/tutorial/focal-point', why:'Use hierarchy to decide what the player notices first.'},
      {icon:'◇', title:'Make a Route Read Without Arrows', meta:'Designer Studio practical', href:'#/tutorial/route-readability', why:'Test whether a route can be understood from normal player height.'}
    ],
    'environmental-storytelling': [
      {icon:'✦', title:'Tell a Story with Five Props', meta:'Designer Studio practical', href:'#/tutorial/story-vignette', why:'Build a small readable story from placement rather than exposition.'},
      {icon:'✦', title:'Environment Art & Set Dressing', meta:'Designer Studio', href:'#/design/environment', why:'Apply story, hierarchy and clustering across a full environment pass.'}
    ],
    'emergent-gameplay': [
      {icon:'🛠', title:'Make a Simple Random Spawner', meta:'Quick Tutorial', href:'#/tutorial/random-spawner', why:'Combine simple rules and uncertainty, then observe situations you did not script directly.'}
    ],
    'scope-constraints': [
      {icon:'⬡', title:'Make a Game-Ready 3D Prop', meta:'Guided Path', href:'#/pathways/game-ready-prop', why:'Use a deliberately finishable asset to practise the whole pipeline.'},
      {icon:'🔥', title:'Challenge Board', meta:'Independent practice', href:'#/challenges', why:'Constraints are useful when they force a clear design decision rather than just make work harder.'}
    ],
    'prototyping': [
      {icon:'◇', title:'Greybox a Playable Room', meta:'Designer Studio practical', href:'#/tutorial/greybox-room', why:'Prototype the spatial question before spending time on final art.'},
      {icon:'🎲', title:'Digital Game → Tabletop', meta:'Guided Path', href:'#/pathways/digital-to-tabletop', why:'Use paper components to test translated systems cheaply.'}
    ],
    'playtesting-iteration': [
      {icon:'💬', title:'Critique Board', meta:'Peer testing', href:'#/critique', why:'Show the work, collect a useful observation and make one visible revision.'},
      {icon:'◇', title:'Build a Playable Level', meta:'Guided Path', href:'#/pathways/playable-level', why:'Finish the route by testing it silently with another player.'}
    ],
    'translating-between-media': [
      {icon:'🎲', title:'Digital Game → Tabletop', meta:'Guided Path', href:'#/pathways/digital-to-tabletop', why:'Follow the full analysis → translation → prototype → playtest sequence.'}
    ]
  }
};
