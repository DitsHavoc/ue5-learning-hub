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
    } else if (membership.get(t.id) !== 1) {
      fail('Tutorial ' + t.id, 'must appear in exactly one recipe family; found ' + (membership.get(t.id) || 0));
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
  for (const t of items(design.tutorials))
    if (designMembership.get(t.id) !== 1) fail('Designer recipe ' + t.id, 'needs exactly one Designer Studio module owner');
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
