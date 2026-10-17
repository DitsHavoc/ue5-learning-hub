# UE5 Learning Hub — Content Architecture (v3.62.0)

## The rule

**One canonical place to learn an idea. Everything else must apply it, practise it, assess it or reference it.**

The Hub grew by adding useful material quickly. The problem was not lack of content; it was that different content types started competing with one another. A student could search one topic and see a lesson, Building Block, Quick Tutorial, Designer recipe, Unreal Designer track, Master Guide and project brief with no indication of which one was the main route.

v3.62.0 establishes the content model below.

## Student content types

| Role | Purpose | Canonical areas | Add here when… |
|---|---|---|---|
| **LEARN** | Main explanation/source of truth | Unreal Core Lessons, Game Design Theory, Designer Studio, 3D Foundations, Industry & Careers | the student needs to understand a concept or discipline |
| **FOLLOW A PATH** | Deliberate sequence across multiple concepts | Blueprint Programmer Path, C++ Programmer Path, Guided Paths | order genuinely matters and work carries forward |
| **BUILD** | Practical application | Quick Tutorials, Chapter Builds, 3D Build X, Level 4 Specialist Projects | the student already knows/links to the idea and needs to make something |
| **FULL WORKFLOW** | Long end-to-end process | Landscape Master Guide, Sequencer Master Guide, GitHub Team Workflow | a job is too large for a quick recipe and has a real start-to-finish workflow |
| **SUPPORT** | Fast help/reference | Building Blocks, Epic Paste Assists, Glossary, Max videos, Fix This Model, Resource Library | a learner is stuck on one term/tool/check and needs to return to the main task |
| **STUDY** | Retrieval/checking | Homework, Revision | the student is revisiting existing learning; no new curriculum should originate here |

## Canonical homes

### Unreal Engine / Blueprint concepts
**Canonical:** Core Unreal Lessons in `data/course-data.js`

Use Building Blocks only for short definitions. Use Quick Tutorials only for a working mechanic. Use the Blueprint Programmer Path only for cumulative project practice.

### Blueprint Programmer pathway
**Canonical sequence:** `data/programmer-skill-mission.js`

This is a project pathway, not the source of truth for generic Blueprint concepts. When a mission teaches/uses a concept, it should link back to the Core Lesson or Building Block rather than creating a competing mini-course.

### Unreal C++
**Canonical:** `data/cpp-skill-missions.js`

Standalone pathway using `L4CppTraining`. Do not attach new C++ learning to the Blueprint Escape Room project.

### Game / environment design
**Canonical:** Designer Studio in `data/design-data.js`

The old standalone Unreal Designer entry point is retired. Designer Studio already contains shipped-game analysis, judgement, UE5 recipes, constraints and the Studio Build. Application belongs inside the discipline rather than in a parallel hub.

### General game design theory
**Canonical:** `data/theory-data.js`

Designer Studio may reference these ideas, but should not recreate full Theory lessons.

### 3D modelling
**Canonical conceptual learning:** `data/modeling-foundations-data.js`
**Canonical 3ds Max tool learning:** `data/modeling-data.js`
**Support only:** `data/modeling-video-data.js`
**Application:** Build X in `data/modeling-data.js`

Keep the distinction explicit:
1. Foundations = why / judgement.
2. Max lessons = how / tool skill.
3. Videos = follow-along support.
4. Build X = prove it independently.
5. Fix This Model = repair/diagnosis.

### Industry & Careers
**Canonical:** `data/industry-careers-data.js`

Homework/revision can point here, but should not create duplicate career teaching.

## What was retired / merged

### Unreal Designer
Retired as a separate student destination. Its useful idea — **understand → build → test → prove** — remains part of Designer Studio. Legacy routes redirect to the matching Designer Studio module.

### Sculpt Playground
Retired from student search/navigation. Legacy routes redirect to 3D Modelling. Keep the old data only while historical progress/bookmarks need compatibility.

### Hidden Quick Tutorial applications
Tutorials marked `libraryHidden` remain available when linked from their parent lesson but are no longer global search peers. This prevents a lesson and its internal application from appearing as two competing starting points.

## Search rules

1. Prefer **LEARN / PATH / BUILD**.
2. Show **FULL WORKFLOW** when a query clearly matches it.
3. Rank **SUPPORT** lower unless the user searches the support item directly.
4. Do not index retired entry points.
5. Do not index hidden lesson applications as standalone results.
6. Collapse multiple results that lead to the same destination.
7. Never add an internal link to search unless the route currently resolves.

## Safe rules for adding content

Before adding anything, answer this question:

> Is this teaching a new idea, giving a sequence, building an outcome, showing a full workflow, supporting an existing task, or checking prior learning?

Then use exactly one role.

### Add a new Core Lesson when
- it explains a transferable Unreal concept;
- several tutorials/pathways will depend on it;
- a learner needs to understand **why/when**, not just copy steps.

### Add a Quick Tutorial when
- the outcome is concrete and small;
- the student can finish it in one focused sitting;
- prerequisites already exist as Lessons/Blocks;
- it does not need to become a second explanation of the underlying concept.

### Add a Building Block when
- the learner needs a 3–8 minute definition/reminder;
- it answers “what is this?” rather than “build this system”.

### Add a Path when
- stages depend on earlier stages;
- the project genuinely carries forward;
- the order is pedagogically important.

### Add a Master Guide when
- the workflow is long, sequential and end-to-end;
- splitting it into many tiny tutorials would make it harder to follow.

### Add a Level 4 project when
- it is a brief/outcome;
- it links to existing learning;
- it does **not** reteach all underlying techniques itself.

### Add Homework/Revision when
- it checks, retrieves or applies something that already has a canonical home.

## Duplication test before every new addition

Search the Hub for the proposed topic and check:
- Core Lessons
- Designer Studio / Theory / 3D / Industry
- Quick Tutorials
- Building Blocks
- existing Paths / Master Guides / Level 4 briefs

If something already explains the idea well, **link to it instead of rewriting it**.

## Content inventory at the start of v3.62.0

- 20 Unreal Core Lessons
- 47 Building Blocks
- 47 Quick Tutorial records / 26 families
- 8 Designer Studio disciplines / 47 design recipes
- 24 Game Design Theory lessons
- 7 Industry & Careers chapters / 13 role profiles
- 6 3D Foundations chapters
- 12 3ds Max lessons / 8 Build X briefs / 14 support videos
- 4 Blueprint Programmer missions
- 5 C++ missions
- 7 Level 4 specialist projects
- 3 optional outcome Guided Paths

That is plenty of content. Future growth should mostly **deepen canonical areas and connect existing material**, not create another parallel shelf.
