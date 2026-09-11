# v3.41.1 — Guided Paths Teaching Pass

31 August 2026

This release tightens Guided Paths after checking them against the actual Hub curriculum. The feature remains optional and does not hard-lock normal Hub content.

## What changed

- Reduced Guided Paths from four to three genuinely cross-Hub outcomes:
  - **Build a Playable Level**
  - **Create a Gameplay Mechanic**
  - **Digital Game → Tabletop**
- Removed **Make a Game-Ready 3D Prop** as a duplicate route. 3D Modelling Studio already has a stronger built-in progression through Module 0, Model Doctor, Max lessons, Build X, UV/material/export work and Hero Prop.
- Kept Unreal Learning as its existing six-stage structured course rather than duplicating it.

## Build a Playable Level

- Adds a professional-study stage inside Level Design Foundations.
- Students complete **one** of the existing professional source tasks.
- Adds a required field-research checkpoint before the greybox sequence.
- Keeps the existing Theory → greybox → guidance → decision → pacing → Three-Room Journey progression.
- The Three-Room Journey already contains silent playtesting and evidence-based revision, so no duplicate playtest task was added.

## Create a Gameplay Mechanic

The mechanic choice now respects real Unreal prerequisites:

- **Interaction** → Traces → Line Trace Interaction tutorial
- **Player Health** → Health tutorial
- **Score System** → Score tutorial
- **Checkpoint** → Framework → Checkpoint tutorial

The choice stage completes when any one full route is complete. It therefore no longer drops a beginner into Traces or Framework concepts they have not studied.

The final playtest is now a required pathway checkpoint: another player uses the mechanic, the student records one useful observation, makes one real change and tests again.

## Digital Game → Tabletop

The route now reflects the actual teaching project rather than allowing Theory alone to produce 100% completion.

Required pathway checkpoints now include:

- play and analyse a physical board game;
- confirm every team member has actually played the videogame being adapted;
- build Prototype V1;
- run a real playtest;
- make a meaningful revision and produce Prototype V2.

The Theory sequence still covers loops, MDA, abstraction, agency, meaningful choice, risk/reward, randomness, resources, balance, translation, prototyping and iteration.

## Pathway checkpoints

Pathway checkpoints are deliberately **not XP-bearing lessons**.

They reuse the existing `lesson_progress` table without a schema migration. A checkpoint row uses:

- `lesson_id = pathway:<checkpoint-id>`
- `completed = false`
- `completed_at = timestamp` when the checkpoint is marked complete

Because `completed` remains false, the existing XP trigger does not award learning XP. The existing lesson-progress read now also returns `completed_at`, so no additional routine cloud request is introduced.

## Still true

- No hard locks.
- Every normal Hub area remains directly accessible.
- Search still works independently of paths.
- Existing lesson/tutorial/build completion counts automatically.
- No duplicate XP.
- No new table.
- No SQL migration.
- No additional routine progress read.
