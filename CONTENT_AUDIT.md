# UE5 Learning Hub — Content Audit & Consolidation Record
Version: 3.62.0

## Why this audit happened

The Hub had grown into a strong collection of material, but the content model had become difficult to reason about. Several areas could teach, demonstrate or apply the same topic, search treated most records as equal, and a student could see several plausible starting points for one concept.

The v3.61 navigation solved **where do I go?**.
The v3.62 content audit solves **which piece of content is the source of truth?**

## Inventory reviewed

| Area | Current content |
|---|---:|
| Unreal Core | 20 lessons / 6 system paths |
| Building Blocks | 47 short references |
| Quick Tutorials | 47 base practical tutorials / 26 families |
| Designer Studio | 8 disciplines / 47 design recipes |
| Game Design Theory | 24 lessons / 6 theory paths |
| Industry & Careers | 7 chapters / 13 role profiles |
| 3D Foundations | 6 chapters + final check |
| 3ds Max | 12 lessons / 8 Build X briefs / 6 repair clinics / 14 videos |
| Blueprint Programmer | 4 cumulative missions |
| Unreal C++ | 5 cumulative missions |
| Level 4 | 7 specialist choices |
| Guided Paths | outcome paths plus classroom-injected routes |
| Support | Epic snippets, glossary, resources, revision, homework |

Also reviewed the classroom extension files for Prison Cell, Blueprint Foundations, Prison Escape, advanced Blueprint work, Last Light, Landscape, Sequencer, GitHub team workflow and Power Jam.

## Consolidation decisions

### 1. Core Unreal Lessons vs Building Blocks
**KEEP BOTH — different jobs.**

- Core Lesson = canonical transferable explanation.
- Building Block = 3–8 minute just-in-time support.

Change made:
- Search ranks Core Lessons above Blocks.
- Blocks are labelled SUPPORT.
- Deep Block pages point learners back toward Core learning.
- Hub copy no longer describes Building Blocks as the start of the main course.

### 2. Core Unreal vs Blueprint Foundations Lab
**KEEP THE LAB AS A GUIDED PRACTICE PATH, REMOVE IT AS A GENERAL TUTORIAL SHELF.**

The Blueprint Foundations labs are good practical exercises, but surfacing each one next to Core Lessons made them look like a second Blueprint course.

Change made:
- all nine `bp-lab-*` tutorials are `libraryHidden: true`;
- they remain fully reachable from the Blueprint Foundations Guided Path and their linked lessons/checkpoints;
- global tutorial/search discovery no longer presents the nine labs as competing starting points.

### 3. Core Unreal vs Blueprint Programmer Path
**KEEP BOTH — concept vs cumulative project.**

- Core Lesson = learn the transferable concept.
- Programmer Path = use several concepts in one growing Escape Room.

Rule:
A programmer mission can recap what the student needs for the current step, but should link to the Core Lesson/Building Block rather than becoming the main definition of Arrays, Functions, Structs, Interfaces, etc.

### 4. Quick Tutorials vs Core Lessons
**KEEP BOTH — explanation vs outcome.**

- Core Lesson = why/when/how the system works.
- Quick Tutorial = make one working outcome.

Change made:
- search labels tutorials BUILD and lessons LEARN;
- hidden lesson applications are not indexed as standalone global results;
- Quick Tutorial detail pages explain that the linked lesson/Block holds the concept.

### 5. Designer Studio vs Unreal Designer
**MERGE.**

This was the clearest duplication. Designer Studio already contained:
- shipped-game analysis;
- developer/professional evidence;
- field research;
- UE5 recipes;
- constraint challenges;
- Studio Build;
- critique/revision.

A second “Unreal Designer” destination made students decide between two pages that formed one learning loop.

Change made:
- Designer Studio becomes the canonical design + application destination;
- Build hub points to Designer Studio Builds;
- legacy `#/unreal-designer` routes redirect to Designer Studio / matching discipline;
- Landscape and Sequencer Master Guides now link directly to canonical Designer modules;
- the old track data remains temporarily for compatibility/context, not as a student destination.

### 6. Designer recipes vs Quick Tutorials
**KEEP DIRECT RECIPE LINKS, BUT SUBORDINATE THEM TO THE DISCIPLINE.**

A learner searching a very specific technique can still reach the practical recipe. The Designer Studio discipline is ranked/labelled as the canonical place to learn the design judgement behind it.

### 7. Master Guides vs Quick Tutorials
**KEEP BOTH — scale is the distinction.**

- Quick Tutorial = one focused mechanic/result.
- Master Guide = long end-to-end workflow.

Landscape, Sequencer and GitHub workflows stay as full guides. They should not be split into dozens of duplicate recipes unless a small reusable technique genuinely deserves its own outcome tutorial.

### 8. Master Guides vs Designer Studio
**KEEP BOTH — technical workflow vs design judgement.**

Designer Studio owns the design problem and judgement.
Master Guide owns the long technical process.
They cross-link rather than repeat each other.

### 9. Level 4 specialist projects vs tutorials/guides
**KEEP THE BRIEF, REDUCE RETEACHING.**

Level 4 is where students produce a specialist outcome and evidence. It should link to existing learning rather than become another version of the tutorial.

Change made:
- Level 4 hub labels itself BUILD / portfolio brief.
- Search follows a project's canonical `href` where one exists (notably Blueprint and C++), avoiding duplicate route results.

### 10. 3D Foundations vs Max Lessons vs Videos vs Build X
**KEEP ALL — make the ladder explicit.**

1. 3D Foundations = judgement / why.
2. Max Lessons = software/tool skill / how.
3. Max Videos = follow-along support.
4. Build X = independent application.
5. Fix This Model = diagnosis/repair.

Change made:
- 3D page states this sequence directly.
- individual Max videos are collapsed to one support destination in global search rather than fourteen equal search hits.

### 11. Sculpt Playground
**RETIRE FROM THE STUDENT CURRICULUM.**

It was an isolated experimental branch and added another destination to an already broad 3D offer.

Change made:
- removed from Challenge Board and 3D landing page;
- excluded from global search;
- legacy `#/sculpt` route lands on 3D Modelling;
- data/progress can remain temporarily for compatibility.

### 12. Homework
**KEEP AS STUDY ONLY.**

Homework must retrieve, observe, analyse or apply something that already exists.

Change made:
- links are validated and fall back safely;
- revision targets are validated;
- old Unreal Designer homework route became Designer Studio research;
- Homework is labelled STUDY and explicitly says it is not a second source of teaching.

### 13. Revision
**KEEP AS RETRIEVAL ONLY.**

Revision should point misses back to canonical learning. It should not become another lesson.

### 14. Search
**REBUILD AROUND INTENT AND CONTENT ROLE.**

Old problem:
A search could return a lesson, tutorial, Block, Max video, resource, snippet and duplicate track as peers.

New behaviour:
- validates internal destinations before returning them;
- filters retired/broken destinations;
- prioritises LEARN / PATH / BUILD;
- marks FULL WORKFLOW / STUDY / SUPPORT;
- deduplicates by destination;
- caps the result list;
- hidden lab/application tutorials do not appear as standalone results;
- Max videos/resources are collapsed to useful parent destinations.

## Retired entry points

| Old destination | Status | Canonical replacement |
|---|---|---|
| Unreal Designer | Merged | Designer Studio |
| Sculpt Playground | Retired | 3D Modelling Studio |
| individual Blueprint Foundations labs in global tutorial browsing | Hidden from global browse | Blueprint Foundations Guided Path |

Legacy URLs remain compatible where practical.

## Content that should NOT be merged

These pairs look similar but serve different pedagogical jobs:

- Core Lesson + Building Block
- Core Lesson + Quick Tutorial
- Core Lesson + Programmer Mission
- Designer Studio + Master Guide
- 3D Foundation + Max Lesson
- Max Lesson + support video
- Build X + Max Lesson
- Theory + Designer Studio

Merging these would make individual pages too long and remove useful modes of learning. The fix is clear hierarchy and cross-linking, not one enormous page.

## Current addition decision tree

When you want to add something:

1. **Is it a transferable concept students need to understand?**
   - Unreal → Core Lesson
   - design discipline → Designer Studio
   - general design concept → Theory
   - 3D judgement → 3D Foundations
   - industry/career → Industry & Careers

2. **Is it one small concrete thing to make?**
   - Quick Tutorial.

3. **Does it need multiple ordered sessions/stages and carry a project forward?**
   - Path.

4. **Is it a long start-to-finish technical workflow?**
   - Master Guide.

5. **Is it a portfolio/assessment-style outcome using skills taught elsewhere?**
   - Level 4 / Build brief.

6. **Is it just a definition, reminder, worked snippet, video or repair aid?**
   - Support layer.

7. **Is it homework or revision?**
   - It must point to an existing canonical source.

If none fits, do not immediately make a new section. First ask whether an existing canonical area should be deepened.

## Safe expansion examples

- “Gameplay Tags explained properly” → deepen/add Unreal Core Lesson if current Data lesson cannot absorb it.
- “Make a pressure plate open a door” → Quick Tutorial (already is one).
- “Five-session inventory game that grows each week” → Path.
- “Complete Niagara production workflow from emitter to optimisation” → Master Guide if truly end-to-end.
- “Create a portfolio hero prop” → Build X / Level 4 brief, link to existing Max lessons.
- “What is a Gameplay Tag?” → Building Block.
- “Watch this 8-minute Max video” → support inside the relevant Max lesson, not a new course.
- “Homework on Interfaces” → point to the Interfaces Core Lesson / Programmer mission; do not write a third Interfaces lesson.

## Future clean-up candidates (low priority)

These are not student-facing blockers and should only be changed with regression testing:

- remove dead rendering functions for retired Unreal Designer/Sculpt pages after a compatibility window;
- remove old CSS specific to retired views when no legacy page calls it;
- consider a generated internal link-check test in CI;
- consider explicit prerequisite metadata shared between Lesson / Block / Tutorial rather than hand-authored cross-links.

The important student-facing consolidation is already defined above.
