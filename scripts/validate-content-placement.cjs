#!/usr/bin/env node
'use strict';

// Content ownership / discoverability gate for the existing data-driven Hub.
// Node built-ins only; no npm installation, external calls or production data.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Validate learning data in the same load order the students' browser uses.

// Existing intentional cross-disciplinary recipes. Add a *specific* exception
// and teaching reason if a future family needs to group two categories.
const CROSS_CATEGORY_FAMILY_EXCEPTIONS = {
  'look-to-interact:interaction-prompt': 'An interaction system needs its matching UI prompt.',
  'spawning:random-spawner': 'One spawning family covers player rules and world spawners.'
};

function audit(root = path.resolve(__dirname, '..')) {
  const errors = [], stats = {};
  const fail = (where, message) => errors.push(`${where}: ${message}`);
  const read = file => fs.readFileSync(path.join(root, file), 'utf8');
  const html = read('index.html');
  const allScripts = [...html.matchAll(/<script\s+src=["']([^"'?]+)(?:\?[^"']*)?["']/g)].map(m => m[1]);
  const loadedScripts = new Set(allScripts);
  const dataScripts = allScripts.filter(file => file.startsWith('data/') && file.endsWith('.js') && file !== 'data/supabase-config.js');
  const context = vm.createContext({window: {}});
  const load = file => {
    if (!loadedScripts.has(file)) fail(file, 'file not loaded by index.html; content would be invisible');
    try { vm.runInContext(read(file), context, {filename: file, timeout: 3000}); }
    catch (error) { fail(file, 'cannot evaluate: ' + error.message); }
  };
  dataScripts.forEach(load);
  const w = context.window;
  const course = w.UE5_COURSE_DATA || {};
  const tutorials = w.UE5_TUTORIAL_DATA || {};
  const design = w.UE5_DESIGN_DATA || {};
  const theory = w.UE5_THEORY_DATA || {};
  const model = w.UE5_MODELING_DATA || {};
  const foundations = w.UE5_MODELING_FOUNDATIONS || {};
  const careers = w.UE5_INDUSTRY_CAREERS_DATA || {};
  const designer = w.UE5_UNREAL_DESIGNER_DATA || {};
  const programmer = w.UE5_SKILL_MISSIONS || {};
  const cpp = w.UE5_CPP_SKILL_MISSIONS || {};
  const level4 = w.LEVEL4_SPECIALIST_PROJECTS || {};
  const study = w.UE5_STUDY_DATA || {};
  const guided = w.UE5_PATHWAY_DATA || {};
  const mini = w.UE5_MINI_PROJECT_DATA || {projects:[]};
  const miniNotes = w.UE5_MINI_PROJECT_NOTES || {};
  const items = obj => Array.isArray(obj) ? obj : [];
  const ids = arr => new Set(items(arr).map(x => x.id));
  const unique = (name, arr) => {
    const found = new Set();
    for (const x of items(arr)) {
      if (!x.id || !(x.title || x.shortTitle)) fail(name, 'item missing id or title');
      if (found.has(x.id)) fail(name, 'duplicate ID ' + x.id);
      found.add(x.id);
    }
    stats[name] = items(arr).length;
  };
  const reference = (where, value, allowed) => {
    if (!value || !allowed.has(value)) fail(where, 'missing destination: ' + String(value));
  };
  const subjectPaths = ids(course.paths), coreLessons = ids(course.lessons);
  const theoryPaths = ids(theory.paths);
  const categories = ids(tutorials.categories);
  const modules = ids(design.modules);
  const foundationIds = ids(foundations.chapters);
  const quick = items(tutorials.tutorials).filter(x => !x.unrealHome);
  const masters = items(tutorials.tutorials).filter(x => x.unrealHome);
  const allTutorials = ids([...items(tutorials.tutorials), ...items(design.tutorials)]);
  // A tutorial may belong to a single guided lab route instead of a recipe family.
  const guidedTutorialIds = new Set();
  const collectGuidedTutorials = steps => {
    for (const step of items(steps)) {
      if (step.type === 'tutorial') guidedTutorialIds.add(step.id);
      collectGuidedTutorials(step.items);
      collectGuidedTutorials(step.options);
    }
  };
  for (const p of items(guided.paths)) collectGuidedTutorials(p.steps);

  [
    ['Core Unreal lessons', course.lessons], ['Core paths', course.paths],
    ['Game Design theory lessons', theory.lessons], ['Theory paths', theory.paths],
    ['Quick Tutorial families', tutorials.families], ['Tutorials and Master Guides', tutorials.tutorials],
    ['Tutorial categories', tutorials.categories], ['Designer modules', design.modules],
    ['Designer recipes', design.tutorials], ['3D lessons', model.lessons],
    ['3D builds', model.builds], ['3D foundations', foundations.chapters],
    ['Industry chapters', careers.chapters], ['Unreal Designer tracks', designer.tracks],
    ['Blueprint missions', programmer.missions], ['C++ missions', cpp.missions],
    ['Level 4 projects', level4.projects]
  ].forEach(([label, records]) => unique(label, records));
  unique('All practical tutorial IDs', [...items(tutorials.tutorials), ...items(design.tutorials)]);
  unique('Mini-Projects', mini.projects);
  unique('Mini-Project stages', items(mini.projects).flatMap(p=>items(p.stages)));
  const registeredStages=new Set();
  for(const p of items(mini.projects)){
    if(!items(p.stages).length)fail('Mini-Project '+p.id,'project has no stages');
    for(const link of items(p.lessonIds))reference('Mini-Project '+p.id+' concept link',link,coreLessons);
    for(const stage of items(p.stages)){
      registeredStages.add(stage.id);
      if(!stage.title||!stage.outcome||!items(stage.tasks).length||!stage.check||!stage.troubleshoot)
        fail('Mini-Project '+stage.id,'needs title, outcome, guided tasks, check and troubleshooting');
      if(!Array.isArray(stage.pages)||stage.pages.length!==2||stage.pages[1]<stage.pages[0])
        fail('Mini-Project '+stage.id,'invalid source page range');
      const notes=items(miniNotes[stage.id]);
      if(!notes.length)fail('Mini-Project '+stage.id,'missing source notes');
      for(const note of notes){
        if(note.page<stage.pages[0]||note.page>stage.pages[1]||!items(note.paragraphs).length)
          fail('Mini-Project '+stage.id,'source notes page out of range or empty');
      }
    }
  }
  for(const key of Object.keys(miniNotes))
    if(!registeredStages.has(key))fail('Mini source notes '+key,'no owning stage');

  // The original 16 source stages stay canonical; game-jam extensions belong
  // only to the Mini-Projects branch and have their own local progress.

  // Student-facing artist work starts without a selected game concept and
  // stays inside the existing Mini-Project Mayhem owning route.
  const jam=w.UE5_MINI_JAM_DATA||{};
  const designerTrackSpec=jam.designerTrack||{},jamArtMissions=items(designerTrackSpec.missions),jamArtKits=items(designerTrackSpec.kits);
  if(jamArtMissions.length!==6||jamArtKits.length!==4||!designerTrackSpec.sharedFolder||!designerTrackSpec.handoverRule||!designerTrackSpec.soloRule)
    fail('Mayhem Designer Track','needs six practical jamArtMissions, four specific jamArtKits, Teams handover and solo differentiation');
  if(jamArtMissions[0]?.id!=='observe'||jamArtMissions[1]?.id!=='style-lab'||!jamArtMissions[0]?.independent||!jamArtMissions[1]?.independent)
    fail('Mayhem Designer Track','first two sessions must be independent of a final game concept');
  const missionIds=new Set();
  for(const mission of jamArtMissions){
    if(missionIds.has(mission.id))fail('Mayhem Designer Track','duplicate mission id '+mission.id);
    missionIds.add(mission.id);
    if(!mission.id||!mission.title||!mission.when||!mission.goal||!mission.deliver||!mission.handover||!mission.solo||items(mission.steps).length<4)
      fail('Designer mission '+mission.id,'missing guided actions, evidence, handover or solo alternative');
    for(const [i,step] of items(mission.steps).entries())
      if(!step.title||!step.where||!step.do||!step.check)fail('Designer mission '+mission.id,'action '+(i+1)+' missing where/do/check');
  }
  const kitsByProject=new Set(jamArtKits.map(x=>x.project));
  if(kitsByProject.size!==4||items(mini.projects).some(p=>!kitsByProject.has(p.id)))
    fail('Mayhem Designer Track','must give one unique kit to every source mini-project');
  for(const kit of jamArtKits)
    if(!kit.title||!kit.minimum||!kit.firstAsset||!kit.handover||!kit.stretch||items(kit.tasks).length<4)
      fail('Designer kit '+kit.project,'needs minimum, safe first export, game-specific actions and integration note');

  const upgrade=w.UE5_MINI_UPGRADE_DATA || {projects:[]};
  unique('Mini-Project upgrade pathways',items(upgrade.projects).map(x=>({...x,id:x.project,title:x.title})));
  unique('Mini-Project upgrade stages',items(upgrade.projects).flatMap(x=>items(x.stages)));
  for(const p of items(upgrade.projects)){
    reference('Mini-Project upgrade pathway '+p.project,p.project,ids(mini.projects));
    if(!items(p.stages).length)fail('Mini-Project upgrades '+p.project,'no upgrade stages');
    const minimum=items(p.stages).find(st=>st.id===p.minimumStage);
    if(!minimum||minimum.tier!=='Essential'||!p.minimumOutcome)fail('Mini-Project upgrades '+p.project,'needs an Essential minimum playable stage and outcome');
    if(items(p.stages).findIndex(st=>st.id===p.minimumStage)>3)fail('Mini-Project upgrades '+p.project,'minimum playable game comes too late');
    for(const stage of items(p.stages)){
      if(!stage.title||!stage.outcome||!stage.designer||!stage.check||!stage.fix||!items(stage.steps).length)
        fail('Upgrade '+stage.id,'needs title, outcome, designer task, test, troubleshooting and guided steps');
      if(items(stage.steps).length<4)fail('Upgrade '+stage.id,'less than four guided actions');
      if(items(stage.designerSteps).length!==3||!stage.designerCheck)fail('Upgrade '+stage.id,'needs three artist steps and a final check');
      if(!stage.beforeStart||!stage.commonMistake||!stage.studentPromise)fail('Upgrade '+stage.id,'needs a prior-state check and a common-mistake recovery');
      for(const [i,step] of items(stage.steps).entries()){
        if(!step.title||!step.where||!step.do||!step.why||!step.check)
          fail('Upgrade '+stage.id+' step '+(i+1),'missing where, do, why or check');
      }
    }
  }
  if(items(upgrade.projects).length!==items(mini.projects).length)fail('Mini-Project upgrades','each original Mini-Project needs one matching upgrade pathway');
  // Guard the exact ownership and node names used by the original image-led
  // Mini-Projects. Accidental rewrites here leave students stuck mid-upgrade.
  const findUpgrade=(p,id)=>items(upgrade.projects).find(x=>x.project===p)?.stages?.find(x=>x.id===id);
  const guideText=(p,id)=>items(findUpgrade(p,id)?.steps).map(x=>x.title+' '+x.where+' '+x.do+' '+x.check).join(' ');
  const clickIntro=guideText('clicker','shop'),clickUI=guideText('clicker','display');
  if(!clickIntro.includes('Assign On Clicked')||!clickIntro.includes('BP_ClickerGameMode')||!clickIntro.includes('SetScoreText'))
    fail('Clicker upgrade','main button must retain the original GameMode Assign On Clicked/SetScoreText workflow');
  if(!clickUI.includes('ClickerUI')||!clickUI.includes('RefreshShop'))
    fail('Clicker display upgrade','original GameMode main click must call widget RefreshShop');
  const grannySteps=items(findUpgrade('clicker','granny')?.steps);
  const at=(title)=>grannySteps.findIndex(x=>x.title===title);
  if(!(at('Connect Granny purchases')>=0 && at('Check that a Granny can actually be bought')>at('Connect Granny purchases') && at('Start exactly one repeating production timer')>at('Check that a Granny can actually be bought')))
    fail('Clicker Granny upgrade','must make the Granny button purchasable and test it before teaching the timer');
  const grannyGuide=guideText('clicker','granny');
  if(!grannyGuide.includes('Pure')||!grannyGuide.includes('Production')||!grannyGuide.includes('GetProductionPerSecond'))
    fail('Clicker Granny upgrade','must explain the Pure function output in UE5.8');
  if(!grannyGuide.includes('RefreshAutoHUD')||!grannyGuide.includes('ClickerUI'))
    fail('Clicker Granny upgrade','must refresh passive UI and preserve the original ClickerUI');
  const displayGuide=guideText('clicker','display');
  if(!displayGuide.includes('Points: {Number}')||!displayGuide.includes('Per click: {Number}')||!displayGuide.includes('Next upgrade: {Number}'))
    fail('Clicker display upgrade','must give concrete dynamic text examples');
  const milestone=guideText('clicker','goal');
  if(!milestone.includes('restore MilestoneTarget=500')||!milestone.includes('MilestoneText'))
    fail('Clicker milestone','temporary proof test must restore target and displayed text');
  const bowlingPins=guideText('bowling','pin-score');
  const bowlingThrows=guideText('bowling','throws');
  const bowlingHUD=guideText('bowling','polish');
  if(!bowlingPins.includes('BP_BowlingPin')||!bowlingPins.includes('Dot Product')||!bowlingPins.includes('GoalPins'))
    fail('Bowling pin scoring','must establish one-count-per-pin test and actual GoalPins');
  if(!bowlingThrows.includes('BowlingBall')||!bowlingThrows.includes('FinishThrow')||!bowlingThrows.includes('Delay(Duration=4.0)')||!bowlingThrows.includes('ResetBall'))
    fail('Bowling three-throw system','must use original saved ball ref and show how Delay calls FinishThrow before ResetBall');
  if(!bowlingThrows.includes('RoundFinished')||!bowlingThrows.includes('all pins'))
    fail('Bowling end condition','must explain the early-all-pins-down path');
  if(!bowlingHUD.includes('Score: {Value}')||!bowlingHUD.includes('Pins down: {Value}')||!bowlingHUD.includes('Throws left: {Value}'))
    fail('Bowling HUD','binding functions need actual labels rather than unlabelled numbers');
  if(!bowlingHUD.includes('RefreshBowlingResult')||!bowlingHUD.includes('Event Construct'))
    fail('Bowling final result','must show persistent result timer and its callback');
  const balloonScore=guideText('balloon-popper','score');
  const balloonRespawnSteps=items(findUpgrade('balloon-popper','respawn')?.steps);
  const balloonRespawn=guideText('balloon-popper','respawn');
  const balloonTimer=guideText('balloon-popper','timer');
  const balloonResults=guideText('balloon-popper','results');
  const balloonDanger=guideText('balloon-popper','risk');
  const balloonPath=items(upgrade.projects).find(x=>x.project==='balloon-popper');
  if(balloonPath?.minimumStage!=='results' || !String(balloonPath.minimumOutcome||'').includes('Play Again'))
    fail('Balloon minimum playable','must include a final score and replay, not just a one-shot timer');

  if(!balloonScore.includes('PopScale')||!balloonScore.includes('BP_BalloonGameMode'))
    fail('Balloon scoring','must retain original pop branch and shared GameMode');
  if(!balloonRespawn.includes('Balloon Popper Level')||!balloonRespawn.includes('SpawnArea')||!balloonRespawn.includes('Random Point in Bounding Box'))
    fail('Balloon respawning','must use original level name and the random spawner');
  const placeIdx=balloonRespawnSteps.findIndex(x=>x.title==='Place the spawner and test its first five balloons');
  const removeIdx=balloonRespawnSteps.findIndex(x=>x.title==='Put the spawn box where the camera can see it');
  if(placeIdx<0||removeIdx<=placeIdx)
    fail('Balloon respawning','must test a placed spawner before deleting original targets');
  if(!balloonTimer.includes('Score: {Value}')||!balloonTimer.includes('Time: {Value}')||!balloonTimer.includes('Set Input Mode Game and UI'))
    fail('Balloon HUD','must preserve labels and allow world click and replay button input');
  if(!balloonResults.includes('RefreshRoundScreen')||!balloonResults.includes('ReplayButton')||!balloonResults.includes('Get Current Level Name'))
    fail('Balloon results','requires a visible final score and working map replay');
  if(!balloonDanger.includes('Select') || !balloonDanger.includes('ONE Spawn Actor From Class') ||
     !balloonDanger.includes('RESTORE the threshold to 0.2'))
    fail('Balloon danger','use one pure Select Boolean to choose a class and restore the 20% chance after tests');
  if(balloonDanger.includes('SelectedBalloonClass'))
    fail('Balloon danger','do not reintroduce complex shared-class variable/branch merging');
  if(!balloonDanger.includes('M_Balloon is already red')&&!balloonDanger.includes('original M_Balloon is already red'))
    fail('Balloon danger','must distinguish new danger balloon from original red material');
  const bowlPower=guideText('bowling','power');
  if(!bowlPower.includes('Add Force')||!bowlPower.includes('200000')||!bowlPower.includes('Accel Change'))
    fail('Bowling power upgrade','must reuse original Bowl Add Force X 200000, Accel Change');
  const loopTargets=guideText('loops','targets');
  const loopsTargetSteps=items(findUpgrade('loops','targets')?.steps);
  const loopsWaveSteps=items(findUpgrade('loops','waves')?.steps);
  const loopsRaceSteps=items(findUpgrade('loops','race')?.steps);
  const loopsRandomSteps=items(findUpgrade('loops','random')?.steps);
  const guideStep=(steps,title)=>steps.findIndex(x=>x.title===title);
  if(guideStep(loopsTargetSteps,'Create a game target actor')<0 || 
     !guideText('loops','targets').includes('Simulate Physics is UNCHECKED') ||
     !guideText('loops','targets').includes('BP_Box'))
    fail('Loops targets','must explicitly replace physical BP_Box with stationary BP_ClickTarget without editing original');
  const previewAt=guideStep(loopsWaveSteps,'Frame the grid before increasing wave count');
  if(previewAt<0 || !guideText('loops','waves').includes('RESTORE WaveNumber default=1') ||
     !guideText('loops','waves').includes('ScheduleNextWave') ||
     !guideText('loops','waves').includes('AdvanceWave') ||
     !guideText('loops','waves').includes('Looping=false'))
    fail('Loops waves','needs a safe nine-target preview and one non-looping delayed wave transition');
  if(!guideText('loops','race').includes('Hits: {Value}') ||
     !guideText('loops','race').includes('WAVES CLEARED!') ||
     !guideText('loops','race').includes('IMC_TargetRush') ||
     !guideText('loops','race').includes('restore') && !guideText('loops','race').includes('SAVE with SecondsLeft=90'))
    fail('Loops race','needs four labelled HUD values, end-state feedback, restart mapping and restored 90s clock');
  if(!guideText('loops','random').includes('Random Float in Range') ||
     !guideText('loops','random').includes('Column ×180') ||
     !guideText('loops','random').includes('separate'))
    fail('Loops random','must preserve grid slots and use small independent safe position offsets');

  if(!loopTargets.includes('Cam_TargetRush')||!loopTargets.includes('Set View Target with Blend'))
    fail('Loops targets upgrade','requires a fixed gameplay camera before click tests');


  for (const x of items(course.lessons)) {
    reference('Core lesson ' + x.id, x.path, subjectPaths);
    if (!items(x.quiz).length) fail('Core lesson ' + x.id, 'no knowledge check');
  }
  for (const x of items(theory.lessons)) {
    reference('Theory lesson ' + x.id, x.path, theoryPaths);
    if (!items(x.quiz).length) fail('Theory lesson ' + x.id, 'no central revision material');
  }
  for (const x of items(tutorials.chapterBuilds)) reference('Chapter Build ' + x.id, x.path, subjectPaths);

  const membership = new Map();
  for (const f of items(tutorials.families)) {
    reference('Family ' + f.id, f.category, categories);
    for (const member of items(f.members)) {
      reference('Family ' + f.id, member, ids(quick));
      membership.set(member, (membership.get(member) || 0) + 1);
      const item = quick.find(t => t.id === member);
      if (item && item.category !== f.category) {
        const exception = `${f.id}:${member}`;
        if (!CROSS_CATEGORY_FAMILY_EXCEPTIONS[exception])
          fail('Family ' + f.id, `${member} has category ${item.category}, not ${f.category}; document intentional cross-category teaching`);
      }
    }
  }
  for (const t of quick) {
    reference('Tutorial ' + t.id, t.category, categories);
    if (t.libraryHidden) {
      if (membership.has(t.id)) fail('Tutorial ' + t.id, 'hidden lesson application is also in a visible family');
      reference('Lesson-owned tutorial ' + t.id, t.lessonHome || t.referenceLesson, coreLessons);
    } else if (membership.get(t.id) !== 1 && !(membership.get(t.id) === undefined && guidedTutorialIds.has(t.id))) {
      fail('Tutorial ' + t.id, 'needs one recipe family OR a guided-path tutorial step; family count = ' + (membership.get(t.id) || 0));
    }
  }
  for (const t of masters) {
    if (!t.libraryHidden || !t.unrealSection || !items(t.steps).length)
      fail('Master Guide ' + t.id, 'must have unrealHome:true, libraryHidden:true, unrealSection and steps');
    if (membership.has(t.id)) fail('Master Guide ' + t.id, 'cannot also be a Quick Tutorial family member');
  }
  stats['Master Guides in Unreal Learning'] = masters.length;

  const designMembership = new Map();
  for (const m of items(design.modules)) {
    for (const member of items(m.tutorials)) {
      reference('Designer module ' + m.id, member, allTutorials);
      designMembership.set(member, (designMembership.get(member) || 0) + 1);
      const tutorial = items(design.tutorials).find(t => t.id === member);
      if (tutorial && tutorial.category !== 'design-' + m.id)
        fail('Designer recipe ' + member, 'category disagrees with owner ' + m.id);
    }
  }
  for (const t of items(design.tutorials)) {
    const studio = items(design.modules).find(m => m.id === t.designModule && m.studioLesson?.id === t.id);
    const studioOwned = t.studioProject === true && t.libraryHidden === true && !!studio;
    if (designMembership.get(t.id) !== 1 && !(studioOwned && !designMembership.has(t.id)))
      fail('Designer recipe ' + t.id, 'needs exactly one Designer module, or a matching studioLesson for a hidden studio project');
  }
  for (const t of items(designer.tracks)) {
    reference('Unreal Designer track ' + t.id, t.moduleId, modules);
    for (const guide of items(t.masterGuideIds))
      reference('Unreal Designer guide for ' + t.id, guide, ids(masters));
  }

  for (const key of Object.keys(study.modelHomework || {}))
    reference('3D homework ' + key, key, foundationIds);
  const missionCheck = (label, arr) => {
    const byId = new Map(items(arr).map(x => [x.id, x]));
    for (const m of items(arr)) {
      if (m.requiresMission) reference(label + ' ' + m.id, m.requiresMission, ids(arr));
      let current = m, seen = new Set();
      while (current && current.requiresMission) {
        if (seen.has(current.id)) { fail(label + ' ' + m.id, 'cyclic mission prerequisites'); break; }
        seen.add(current.id); current = byId.get(current.requiresMission);
      }
    }
  };
  missionCheck('Blueprint mission', programmer.missions);
  missionCheck('C++ mission', cpp.missions);
  // No fresh guide should become an ad-hoc primary tab in the student sidebar.
  const nav = [...html.matchAll(/<a\s+href="#\/([^"]+)"[^>]*class="[^"]*ux-nav-primary[^"]*"/g)].map(m => m[1]);
  const expected = ['paths', 'learn', 'build', 'study', 'level4'];
  if (nav.join(',') !== expected.join(','))
    fail('Student primary navigation', 'expected ' + expected.join(',') + ', got ' + nav.join(','));

  // Any future file which injects tutorials must be explicitly script-loaded.
  for (const file of fs.readdirSync(path.join(root, 'data')).filter(f => f.endsWith('.js'))) {
    const filepath = 'data/' + file;
    const source = read(filepath);
    if (/\.tutorials\.push\s*\(/.test(source) && !loadedScripts.has(filepath))
      fail(filepath, 'new tutorial/guide registration is not loaded by index.html');
  }

  return {errors, stats};
}

if (require.main === module) {
  const result = audit();
  if (result.errors.length) {
    console.error('CONTENT PLACEMENT FAILED (' + result.errors.length + ')');
    result.errors.forEach(x => console.error(' - ' + x));
    process.exitCode = 1;
  } else {
    console.log('CONTENT PLACEMENT PASS — ' + JSON.stringify(result.stats));
  }
}
module.exports = {audit};
