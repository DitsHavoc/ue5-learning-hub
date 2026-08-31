window.UE5_PATHWAY_DATA = {
  version: '3.41.1',
  buildDate: '2026-08-31',
  intro: 'Guided Paths are optional routes through learning that already exists in the Hub. They connect different areas around a real outcome without locking the rest of the site or creating duplicate XP.',
  principles: [
    'Everything in the Hub remains freely browsable.',
    'A path recommends an order; it does not lock the rest of the site.',
    'Work you already completed counts automatically.',
    'Choice steps adapt to the option you pick and include any missing foundation first.',
    'Practical checkpoints can be required for a path without awarding XP.',
    'XP still comes from the real lesson, tutorial or build — never twice.'
  ],
  paths: [
    {
      id: 'playable-level',
      icon: '◇',
      title: 'Build a Playable Level',
      kicker: 'SPACE • GUIDANCE • CHOICE • PACING',
      summary: 'Study how real levels communicate, then greybox, test and improve a small level that works before the art pass.',
      outcome: 'A tested three-room playable level with readable routes, a meaningful decision and deliberate pacing.',
      audience: 'Good for level design, environment design and anyone building playable 3D spaces.',
      steps: [
        {type:'theory', id:'player-agency', why:'Start with the reason space matters: it gives players decisions.'},
        {type:'theory', id:'affordances-signifiers', why:'Learn how shapes and signals tell players what can be used.'},
        {type:'choice', title:'Study one professional level-design source', icon:'◉', description:'Open Level Design Foundations and complete one professional source task. Pick the source that interests you; the point is to see how shipped games solve the same problems.', options:[
          {type:'designSource', module:'world-design', index:0},
          {type:'designSource', module:'world-design', index:1},
          {type:'designSource', module:'world-design', index:2}
        ]},
        {type:'checkpoint', id:'playable-level-field-research', title:'Do one Level Design field-research mission', icon:'⌖', area:'Designer Studio • Field Research', href:'#/design/world-design', description:'Choose Map From Memory or Screenshot Autopsy in Level Design Foundations. Collect the evidence it asks for, then mark this pathway checkpoint complete.', actionLabel:'Field research complete'},
        {type:'tutorial', id:'greybox-room', why:'Build with simple geometry before decoration hides design problems.'},
        {type:'tutorial', id:'player-scale', why:'Make the space believable and usable at player scale.'},
        {type:'theory', id:'guidance-sightlines', why:'Understand landmarks, visibility and route hierarchy.'},
        {type:'tutorial', id:'route-readability', why:'Prove the route can be read without giant arrows.'},
        {type:'theory', id:'meaningful-choice', why:'A fork is only interesting when the options create different consequences.'},
        {type:'tutorial', id:'decision-point-test', why:'Build and test one clear decision point.'},
        {type:'theory', id:'pacing-tension-flow', why:'Use contrast between spaces to control rhythm and tension.'},
        {type:'tutorial', id:'spatial-pacing', why:'Apply pacing through compression, release, visibility and movement.'},
        {type:'designBuild', id:'world-design', why:'Combine the principles in the Three-Room Journey Studio Build. Its final phases already require a silent playtest and evidence-based revision.'}
      ]
    },
    {
      id: 'gameplay-mechanic',
      icon: '⚙',
      title: 'Create a Gameplay Mechanic',
      kicker: 'SYSTEMS • BLUEPRINTS • FEEDBACK • TESTING',
      summary: 'Move from a design idea into a small working Unreal mechanic, add readable feedback, then test whether another player actually understands it.',
      outcome: 'A small playable mechanic with clear rules, working Blueprint logic, deliberate feedback and one evidence-based revision after playtesting.',
      audience: 'Good for gameplay designers, Blueprint programmers and students who learn best by making a mechanic.',
      steps: [
        {type:'theory', id:'what-is-game-design', why:'Separate the actual rule/system from theme and feature lists.'},
        {type:'theory', id:'core-gameplay-loops', why:'Know where the mechanic sits inside repeated player behaviour.'},
        {type:'theory', id:'player-agency', why:'Make sure the mechanic gives the player a meaningful action or decision.'},
        {type:'lesson', id:'events', why:'Understand how gameplay logic starts and flows.'},
        {type:'lesson', id:'variables', why:'Store the state your mechanic needs.'},
        {type:'lesson', id:'branches', why:'Make the system respond to conditions.'},
        {type:'lesson', id:'functions', why:'Keep repeated logic readable and reusable.'},
        {type:'choice', title:'Build one mechanic', icon:'🛠', description:'Choose the mechanic you want. If that option needs another Unreal foundation, the path sends you through that lesson first instead of dropping you into unexplained nodes.', options:[
          {type:'route', title:'Interaction', icon:'◎', note:'Traces → interaction tutorial', items:[{type:'lesson', id:'traces'},{type:'tutorial', id:'line-trace-interact'}]},
          {type:'route', title:'Player Health', icon:'♥', note:'Uses the variables + branches you just learned', items:[{type:'tutorial', id:'player-health'}]},
          {type:'route', title:'Score System', icon:'＋', note:'Uses the variables + functions you just learned', items:[{type:'tutorial', id:'score-system'}]},
          {type:'route', title:'Checkpoint', icon:'⚑', note:'Framework → checkpoint tutorial', items:[{type:'lesson', id:'framework'},{type:'tutorial', id:'checkpoint'}]}
        ]},
        {type:'theory', id:'game-feel-feedback', why:'A working system is not necessarily a readable or satisfying system.'},
        {type:'choice', title:'Add one layer of feedback', icon:'✦', description:'Choose the feedback that best supports your mechanic rather than adding effects for decoration.', options:[
          {type:'tutorial', id:'sound-feedback'},
          {type:'tutorial', id:'niagara-impact'},
          {type:'tutorial', id:'camera-shake'}
        ]},
        {type:'theory', id:'playtesting-iteration', why:'Test the behaviour rather than assuming your intention is obvious.'},
        {type:'checkpoint', id:'gameplay-mechanic-playtest-change', title:'One-player test → one real change', icon:'💬', area:'Practical playtest', href:'#/critique', description:'Give the mechanic to another student without teaching them how it works. Watch one useful behaviour, make one evidence-based change, then test it again. Critique Board is available if you want to record/share the feedback.', actionLabel:'Playtest + revision complete'}
      ]
    },
    {
      id: 'digital-to-tabletop',
      icon: '🎲',
      title: 'Digital Game → Tabletop',
      kicker: 'ANALYSE • TRANSLATE • PROTOTYPE • TEST',
      summary: 'Take a videogame the whole team genuinely knows and translate its important decisions and experience into physical rules and components.',
      outcome: 'A playable tabletop prototype that preserves selected parts of the original game experience, has been tested by real players and has visibly changed because of that test.',
      audience: 'Built for the Digital → Tabletop project, but useful for anyone studying adaptation, abstraction and prototyping.',
      steps: [
        {type:'theory', id:'what-is-game-design', why:'Describe the game through behaviour and systems rather than characters and art.'},
        {type:'theory', id:'core-gameplay-loops', why:'Identify what the player repeatedly does.'},
        {type:'theory', id:'mda-framework', why:'Separate mechanics from the behaviour and experience they create.'},
        {type:'theory', id:'pillars-and-abstraction', why:'Decide what is essential and what can be simplified.'},
        {type:'checkpoint', id:'tabletop-board-game-lab', title:'Play and analyse a physical board game', icon:'🎲', area:'In-class Board Game Lab', href:'#/theory', description:'Play a physical game from the classroom collection for 15–20 minutes. Analyse its turn loop, choices, randomness, interaction and component readability. This is required for this pathway only; the general Theory area remains open to everyone.', actionLabel:'Board Game Lab complete'},
        {type:'checkpoint', id:'tabletop-shared-videogame', title:'Choose a videogame everyone has actually played', icon:'🎮', area:'Team design decision', description:'Before designing, every team member must know the chosen videogame through actual play. If somebody has not played it, choose another game. This prevents one student becoming the only person able to judge whether the adaptation still feels like the original.', actionLabel:'Whole team has played it'},
        {type:'theory', id:'player-agency', why:'Identify what the player is actually allowed to decide.'},
        {type:'theory', id:'meaningful-choice', why:'Keep decisions where the alternatives genuinely matter.'},
        {type:'theory', id:'risk-reward', why:'Translate tension into understandable costs and potential rewards.'},
        {type:'theory', id:'randomness-uncertainty', why:'Choose what should be uncertain and what should remain under player control.'},
        {type:'theory', id:'resources-economies', why:'Turn digital inventory, currency or scarcity into manageable physical resources.'},
        {type:'theory', id:'balance-counterplay', why:'Make different strategies viable and give players ways to respond.'},
        {type:'theory', id:'translating-between-media', why:'Use KEEP / SIMPLIFY / CHANGE / REMOVE / REPLACE deliberately.'},
        {type:'theory', id:'prototyping', why:'Build the cheapest version that can answer the next design question.'},
        {type:'checkpoint', id:'tabletop-prototype-v1', title:'Build Prototype V1', icon:'✂', area:'In-class prototype', href:'#/theory/prototyping', description:'Make the smallest playable version using paper, cards, dice, tokens or tiles. Do not polish it. It only needs enough rules and components to test the central design question.', actionLabel:'Prototype V1 is playable'},
        {type:'theory', id:'playtesting-iteration', why:'Know what to observe and why a test is evidence, not a vote on whether the game is good.'},
        {type:'checkpoint', id:'tabletop-playtest', title:'Run a real playtest', icon:'👥', area:'In-class playtest', href:'#/theory/playtesting-iteration', description:'Put the prototype in front of players. Watch where they hesitate, misunderstand, exploit or disengage. Record at least one concrete observation instead of explaining the rules for them.', actionLabel:'Playtest complete'},
        {type:'checkpoint', id:'tabletop-prototype-v2', title:'Change the design and prove Prototype V2', icon:'↻', area:'Iteration', description:'Make at least one meaningful change because of the playtest, then show the revised rule/component/board state. The pathway is not complete until the design has actually iterated.', actionLabel:'Prototype V2 complete'}
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
      {icon:'⬡', title:'3D Modelling Studio', meta:'Structured 3D course', href:'#/modeling', why:'The 3D area already has foundations, tool lessons, Build X briefs and an independent Hero Prop route.'},
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
