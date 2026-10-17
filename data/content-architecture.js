window.UE5_CONTENT_ARCHITECTURE = {
  version: '3.62.0',
  principle: 'One canonical place to learn an idea. Other content should apply it, practise it, assess it or reference it — never compete with it.',
  roles: {
    learn: {
      label: 'LEARN',
      description: 'Canonical explanation. This is the main source of truth for a subject or concept.',
      areas: ['Unreal Core Lessons','Game Design Theory','Designer Studio','3D Foundations','Industry & Careers']
    },
    path: {
      label: 'FOLLOW A PATH',
      description: 'Sequential curriculum that links canonical learning into a deliberate order.',
      areas: ['Blueprint Programmer Path','Unreal C++ Programmer Path','Guided Paths']
    },
    build: {
      label: 'BUILD',
      description: 'Practical application. Assumes or links back to the canonical explanation rather than reteaching it.',
      areas: ['Quick Tutorials','3D Build X','Level 4 Specialist Projects','Chapter Builds']
    },
    guide: {
      label: 'FULL WORKFLOW',
      description: 'Long end-to-end workflow for jobs too large for a quick recipe.',
      areas: ['Landscape Master Guide','Sequencer Master Guide','GitHub Team Workflow']
    },
    support: {
      label: 'SUPPORT',
      description: 'Short reference, worked example or repair aid. Never the main curriculum.',
      areas: ['Building Blocks','Epic Paste Assists','Glossary','3ds Max Videos','Fix This Model','Resource Library']
    },
    study: {
      label: 'STUDY',
      description: 'Retrieval, homework and checking. Must point back to canonical learning.',
      areas: ['Homework','Revision']
    }
  },
  canonicalAreas: [
    {id:'unreal',title:'Unreal Engine & Blueprint concepts',href:'#/programming',role:'learn'},
    {id:'blueprint-programmer',title:'Blueprint Programmer Path',href:'#/skill-mission/arrays-maps-escape-room/start',role:'path'},
    {id:'cpp',title:'Unreal C++ Programmer Path',href:'#/cpp-path',role:'path'},
    {id:'design',title:'Game & environment design',href:'#/design',role:'learn'},
    {id:'theory',title:'Game Design Theory',href:'#/theory',role:'learn'},
    {id:'modeling',title:'3D Modelling',href:'#/modeling',role:'learn'},
    {id:'industry',title:'Industry & Careers',href:'#/industry-careers',role:'learn'}
  ],
  retiredEntryPoints: [
    {
      id:'unreal-designer',
      reason:'Designer Studio already contains the design learning, UE5 recipes, application challenge and Studio Build.',
      replacement:'#/design'
    },
    {
      id:'sculpt',
      reason:'Sculpt Playground was an isolated experimental area and is no longer part of the student curriculum.',
      replacement:'#/modeling'
    }
  ],
  rules: [
    'New concept explanation → add it to the canonical Learn area, not to a tutorial.',
    'New small mechanic with a concrete outcome → add one Quick Tutorial and link its prerequisite lesson/Building Block.',
    'New multi-lesson sequential project → add a Path only when the order genuinely matters.',
    'New long end-to-end workflow over roughly 45 minutes → use a Master Guide, not another Quick Tutorial family.',
    'New portfolio/assessment-style outcome → add a Level 4/Build brief that links to existing learning instead of duplicating instructions.',
    'New definition or reminder → add a Building Block/Glossary entry, not a full lesson.',
    'Homework and Revision must point to existing canonical content; they do not become new sources of teaching.',
    'Search should prefer Learn/Path/Build results and show Support only when it is specifically relevant.'
  ]
};
