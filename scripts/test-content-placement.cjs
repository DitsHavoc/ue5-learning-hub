#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {audit} = require('./validate-content-placement.cjs');
const repo = path.resolve(__dirname, '..');

function fixture(testName, mutate, expectedError) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'ue5-placement-'));
  try {
    fs.copyFileSync(path.join(repo, 'index.html'), path.join(root, 'index.html'));
    fs.cpSync(path.join(repo, 'data'), path.join(root, 'data'), {recursive: true});
    mutate(root);
    const {errors} = audit(root);
    assert(
      errors.some(error => error.includes(expectedError)),
      testName + ': expected "' + expectedError + '" but received ' + JSON.stringify(errors)
    );
    console.log('PASS: ' + testName);
  } finally {
    fs.rmSync(root, {recursive: true, force: true});
  }
}
function append(root, file, code) {
  fs.appendFileSync(path.join(root, file), '\n' + code + '\n', 'utf8');
}

const good = audit(repo);
assert.deepEqual(good.errors, [], 'existing curriculum should pass its placement audit');
console.log('PASS: existing curriculum placement');

fixture('reject orphaned practical tutorial', root => {
  append(root, 'data/tutorial-data.js',
    'window.UE5_TUTORIAL_DATA.tutorials.push({id:"qa-orphan-recipe",title:"Unowned recipe",category:"movement"});');
}, 'qa-orphan-recipe');

fixture('reject unknown recipe-family child', root => {
  append(root, 'data/tutorial-data.js',
    'window.UE5_TUTORIAL_DATA.families[0].members.push("qa-unknown-child");');
}, 'qa-unknown-child');

fixture('reject unregistered guide script', root => {
  fs.writeFileSync(path.join(root, 'data/qa-new-master-guide.js'),
    'window.UE5_TUTORIAL_DATA.tutorials.push({id:"qa-guide",title:"Guide"});');
}, 'not loaded by index.html');

fixture('reject C++ dependency on unrelated pathway', root => {
  append(root, 'data/cpp-skill-missions.js',
    'window.UE5_CPP_SKILL_MISSIONS.missions[0].requiresMission="blueprint-only-mission";');
}, 'blueprint-only-mission');

fixture('reject an unapproved new primary tab', root => {
  const file = path.join(root, 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  assert(html.includes('href="#/paths" data-route="paths" class="ux-nav-primary"'));
  fs.writeFileSync(file, html.replace(
    'href="#/paths" data-route="paths" class="ux-nav-primary"',
    'href="#/extra-guides" data-route="paths" class="ux-nav-primary"'
  ));
}, 'Student primary navigation');

console.log('Placement gate negative tests: 5/5 passed');
