# UE5 Learning Hub v3.31.0 — Straight-Through Guide Pass

## Why this pass exists
v3.30 made the practical content more prescriptive, but the presentation was still doing too much at once. A learner could see a prep-style block of asset names, variables and values, then a walkthrough, then support text whose explanation was sometimes inherited from a different-sized older step list.

That made some guides feel organised on paper but oddly random while actually following them.

v3.31 simplifies the teaching route.

## The new practical rule
A student starts at **Step 1** and works straight down.

There is no visible “make these files / variables / values first” list. Every Blueprint, variable, component, setting, measurement and test is introduced at the moment it is needed.

Each taught step now reads as one continuous unit:

**Step title → Go to → exact action/value → Why → Check → optional recovery**

The aim is to feel like a teacher talking a beginner through the software rather than a technical specification sheet.

## What changed
- Removed the visible pinned first-build values/prep strip from the practical guide renderer.
- Removed the extra lesson flow banner that duplicated the page structure.
- Changed UE lessons, Programming Quick Tutorials, 3ds Max lessons and Build X to a simpler straight-through step card.
- Values remain prescriptive, but now appear only inside the step where they are used.
- Asset/variable/component creation is introduced in sequence rather than listed before the learner knows why it exists.
- **Why** is visible directly under the instruction rather than hidden in a separate support layer.
- **Check** is visible immediately after Why so mistakes are caught before the next step.
- Recovery stays collapsed under **Something went wrong?** so it does not interrupt a successful learner.
- Where an older support step clearly matches the new exact instruction, its location, reason, visual and checkpoint are reused.
- Where the match is weak, the Hub now deliberately uses an instruction-specific fallback rather than attaching a random nearby explanation.
- Matching now searches the whole supporting walkthrough and requires a minimum confidence score; it no longer assumes two differently-sized instruction lists line up by position.

## Important non-change
The exact teaching values from v3.29/v3.30 are retained. This pass is about **flow and clarity**, not making the tutorials vague again.

Independent and challenge work still fades support later so learners eventually choose values and methods themselves.

## Database
No database migration is required.
