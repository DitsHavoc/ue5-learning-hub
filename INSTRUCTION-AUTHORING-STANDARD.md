# Instruction Authoring Standard — v3.31

## The rule
A beginner should be able to start at **Step 1** and keep moving down the page without first decoding a shopping list of assets, variables, files, measurements or settings.

Do not make the learner prepare everything up front. Introduce each thing at the exact moment it becomes useful.

## Straight-through step pattern
Use this order:

1. **STEP TITLE** — plain English outcome: “Create the Sprint Input Action”.
2. **GO TO** — exact location in Unreal/Max when the learner needs navigation help.
3. **DO THIS** — exact action, name and known-working value.
4. **WHY** — one short sentence explaining the transferable reason.
5. **CHECK** — an observable result that proves the step worked.
6. **SOMETHING WENT WRONG?** — recovery only when useful; keep it out of the successful learner’s way.

## Do not use a prep/specification block
Avoid front-loading a tutorial with something like:

- BP_Player
- IA_Sprint
- WalkSpeed Float
- SprintSpeed Float
- 500
- 900

Instead teach it in sequence:

**Step 1 — Create IA_Sprint**  
Go to Content Drawer → Input → Input Action. Name it `IA_Sprint`.  
Why: the input asset separates the control from the mechanic.  
Check: `IA_Sprint` exists in the Input folder.

**Step 2 — Map it to Left Shift**  
Open the active Mapping Context → add `IA_Sprint` → choose Left Shift.  
Why: the Mapping Context connects the action to a physical control.  
Check: the mapping row shows `IA_Sprint — Left Shift`.

Only later, when the speed change is being built, introduce `500` and `900`.

## Prescriptive first, judgement later
The first taught version should still contain real values:
- Max crate: `80 × 60 × 45 cm`
- Inset: `5 cm`
- Extrude: `-3 cm`
- Chamfer: `1.5 cm`, `2 segments`
- UE walk speed: `500`
- UE sprint speed: `900`

Do not replace those with “roughly”, “a bit”, “appropriate” or “whatever looks right” during the first controlled build.

## Scaffold fade
- **First encounter:** exact click/path + exact value + immediate check + why.
- **Second encounter:** tool/path + starting value + check.
- **Third encounter:** desired result + suggested tool family.
- **Independent task:** outcome and constraints; learner chooses values/method.

## One action cluster per step
A step can contain a small group of actions that naturally belong together, but it should have one obvious purpose. Do not hide an entire subsystem in one paragraph.

## The beginner test
Before publishing a practical step, ask:

> Could a student who has never done this perform the next action without asking what I meant — and can they tell whether it worked before continuing?

If not, rewrite the step.

## v3.32 — Building Blocks vs tutorials

Do not turn a practical tutorial into a terminology lesson.

If a mechanic uses a reusable Unreal concept such as an Input Action, Blueprint Interface, Struct, Data Table, Animation Blueprint or NavMesh:

- the **Building Block** explains what the concept is and proves it once;
- the **Quick Tutorial** uses the concept to build the mechanic;
- the **Core Lesson** explains the larger system deeply;
- the **Challenge / Project** removes support and asks the learner to choose/apply it.

A tutorial may briefly explain why a step exists, but it should link to the Building Block rather than repeating a full mini-course inside every recipe.
