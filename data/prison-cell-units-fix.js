/* v3.44.6 — Prison Cell Unreal Units teaching pass
   Additive classroom patch only.
   Runs after prison-cell-learning.js and before app.js.
*/
(() => {
  'use strict';

  const DESIGN = window.UE5_DESIGN_DATA;
  const PATHWAYS = window.UE5_PATHWAY_DATA;

  if (!DESIGN || !PATHWAYS) {
    console.warn('[v3.44.6] Prison Cell Unreal Units patch skipped: learning data unavailable.');
    return;
  }

  const tutorial = id => (DESIGN.tutorials || []).find(t => t.id === id);
  const step = (tutorialId, title) =>
    tutorial(tutorialId)?.steps?.find(s => !Array.isArray(s) && s.title === title);

  const shell = step('greybox-room', 'Build the room shell with simple shapes');
  if (shell) {
    shell.do = 'Build a floor and four walls from cubes. Work in Unreal Units: 1 uu = 1 cm. For this Third Person prison-cell exercise, start at roughly 300 uu × 400 uu for the internal floor space, with a ceiling around 280–300 uu high. Treat these as game-scale starting values, not fixed rules. Press Play early: if the character or third-person camera genuinely needs more room, enlarge the space deliberately rather than guessing from the editor camera.';
    shell.why = 'Using uu keeps the task tied directly to Unreal’s grid and Transform values. The starter size is compact enough to read as a cell while still giving a Third Person character and camera something useful to test.';
    shell.see = 'The room reads as a compact cell from the player camera. It should not feel like a warehouse, but the character should still be able to move and turn where the design expects.';
    shell.check = 'Confirm the shell is around 300 × 400 uu internally and 280–300 uu high, then walk it in Play mode. Keep the values only if the player experience works.';
    shell.troubleshoot = [
      'If the room feels huge, reduce the footprint before adding furniture.',
      'If the player or camera genuinely cannot use the space, increase one dimension in clear 25–50 uu steps and retest.',
      'Do not type 300 or 400 into the Scale field of a default 100 uu cube. Those are target space dimensions; follow the live demo for the actual cube transforms.',
      'Keep grid snapping on and use clean values rather than tiny freehand adjustments.'
    ];
  }

  const entrance = step('greybox-room', 'Leave a usable entrance and keep checking the player');
  if (entrance) {
    entrance.do = 'Create one entrance and test it with the Third Person character. A useful starting opening is roughly 100–120 uu wide and 210–230 uu high. Run through it from both sides and turn the camera while crossing. If the character capsule or camera proves that more clearance is needed, widen it deliberately and record the value that worked.';
    entrance.why = 'Starting with explicit uu values gives you something measurable to test instead of dragging until it only looks right from the editor camera.';
    entrance.check = 'Run through forwards, turn while crossing and approach at an angle. If you change the opening, be able to say what uu value changed and why.';
  }

  const placeholders = step('greybox-room', 'Use primitive placeholders for the things that matter');
  if (placeholders) {
    placeholders.do = 'Add only the objects needed to judge the space: bars/barred-door proxy, bed, toilet, table and optional stool. Stay with simple cubes/cylinders. Useful starting references are a bed footprint around 90 × 200 uu and a table top around 70–80 uu from the floor. Size the toilet, bars and remaining props against the Third Person character rather than trying to model detail now.';
    placeholders.why = 'Simple uu-based placeholders let you test footprint, height and movement clearance now. Later 3D lessons can replace them without silently changing the spatial design.';
    placeholders.check = 'Stand beside each placeholder in Play mode. The bed should plausibly fit a person, the table should sit around usable height and the furniture should leave an intentional movement route.';
  }

  const metrics = step('player-scale', 'Record useful metrics after testing, not before');
  if (metrics) {
    metrics.do = 'Once the room feels right, record the working values in Unreal Units: internal room footprint, ceiling height, doorway width/height, narrowest comfortable movement gap and one useful furniture height. Keep them as tested starting points for the next environment.';
    metrics.why = 'A number becomes useful when it comes from a tested player experience. Recording it in uu means you can reuse it directly in Unreal without converting back from metres.';
    metrics.see = 'You have a short list of tested uu values you can reuse instead of guessing from zero next time.';
  }

  const path = (PATHWAYS.paths || []).find(p => p.id === 'prison-cell');
  if (path) {
    const plan = path.steps?.find(s => s.id === 'prison-cell-plan');
    if (plan) {
      plan.description = 'Before detail, make a tiny top-down sketch showing the room, entrance/bars, bed, toilet and table/stool. Label rough sizes in Unreal Units (uu). For the live task, a useful game-scale starting point is about 300 × 400 uu internally with a 280–300 uu ceiling. These are starting values only: greyboxing exists so scale, movement and layout can change cheaply after Play-mode testing.';
    }

    const proof = path.steps?.find(s => s.id === 'prison-cell-greybox-proof');
    if (proof) {
      proof.description = 'Keep everything simple and grey. Your cell needs a room shell, entrance/bars, bed, toilet and table/stool proxy. Use clean Unreal Unit values, press Play, walk the whole space, change at least one problem you discovered, then keep one editor screenshot and one player-height screenshot. Be able to say: “When I played it, ___ felt wrong, so I changed ___ from ___ uu to ___ uu.”';
    }
  }

  console.info('[v3.44.6] Prison Cell Unreal Units teaching pass loaded.');
})();
