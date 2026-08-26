# Instruction Authoring Standard — v3.30

## The rule
A beginner practical guide must have **one authoritative walkthrough**. Do not present a short recipe and then a second competing set of numbered instructions underneath it.

## First-build step pattern
For the first taught version, each step should answer as many of these as the task needs:

1. **WHERE + DO THIS** — exact editor/Blueprint/panel/tool/action.
2. **EXACT FIRST-BUILD VALUE** — names, types, dimensions, speeds, distances, times, counts or settings.
3. **YOU SHOULD SEE** — visible result immediately after the action.
4. **STOP + CHECK** — a condition that must pass before continuing.
5. **WHY** — one short reason that transfers to future work.
6. **IF YOURS DOES NOT MATCH** — recovery, not another pile of new instructions.

## Language rules
Avoid vague first-build wording such as “roughly”, “a little”, “some”, “suitable”, “adjust until it looks right” or “use an appropriate value” when a known teaching value can be supplied.

Art/design judgement can become open-ended later. The first controlled build should establish a known-good result before support fades.

## Scaffold fade
- **First encounter:** exact click/path + exact value + exact checkpoint.
- **Second encounter:** tool named + starting value + checkpoint.
- **Third encounter:** desired outcome + relevant tool family.
- **Independent task:** outcome/constraints only; student chooses values and method.

## Unreal Engine examples
Prefer:

`Character Blueprint → Event Graph → IA_Sprint Started → Character Movement → Set Max Walk Speed → 900`

Then provide the release path and test condition:

`IA_Sprint Completed → Set Max Walk Speed → 500`.

Test: normal movement, hold Left Shift, release; speed must return to 500.

Avoid: “Add sprint logic and tune the speed.”

## 3ds Max examples
Prefer:

`Create → Geometry → Standard Primitives → Box → Length 80 cm / Width 60 cm / Height 45 cm`.

Then:

`Editable Poly → Polygon → front face only → Inset 5 cm → centre polygon → Extrude -3 cm`.

Checkpoint: orbit to the rear and prove the back face has not moved.

Avoid: “Make a box, inset it a bit and push the middle in.”

## Values are teaching values
Known-working values are not presented as universal game-design or art-direction truths. They exist to let a learner build a controlled example, prove cause and effect, and then make informed changes.

## Independent application remains independent
Chapter Builds, Stretch/Challenge, design critique and later Build X tasks should deliberately remove some support. Prescriptive teaching is used to establish skill; it should not permanently replace judgement.
