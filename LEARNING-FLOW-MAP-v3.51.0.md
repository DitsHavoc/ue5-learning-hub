# UE5 Learning Hub — Learning Flow Map
## v3.51.0

This is the rule for where new material belongs. It exists to stop useful additions becoming orphan links.

## Unreal Engine learning

**Building Block**  
Use when the learner needs to understand one term, object, node family or small concept.

↓

**Core System Lesson**  
Use when the learner needs transferable understanding: data, references, input, communication, UI, AI, saving, etc. Core knowledge is quiz/revision eligible.

↓

**Master Guide**  
Use when the engine workflow is too large or sequential for a five-minute recipe. Current examples: Landscape and Sequencer. Master Guides live in Unreal Learning, are searchable, and feed central Revision.

↓

**Quick Tutorial**  
Use for one immediate practical outcome. It should point back to the Core Lesson or Designer discipline that explains the transferable thinking. Do not add a duplicate knowledge quiz just because it is a tutorial.

↓

**Challenge / Practice**  
Use when scaffolding should be reduced and the student must make more decisions independently.

## Design learning

**Designer Studio** owns the question: **what should I make, why, and how do I know the decision works?**

When Designer Studio needs an exact Unreal workflow, it links to one authoritative Unreal Master Guide / Quick Tutorial instead of maintaining a second copy.

Examples:

- Landscape Designer Studio → Landscape Master Guide
- Sequencer & Cutscenes → Sequencer Master Guide

Designer Studio judgement questions feed central Revision.

## 3D learning

**3D Foundations** owns the transferable knowledge/judgement and feeds Revision.

**3ds Max videos / modelling practicals / Sculpt** are evidence-by-doing. They point back to the knowledge layer rather than carrying repetitive quizzes.

## Industry / careers

Industry & Careers chapters contain live evidence/research activities plus five applied scenario questions. The same questions are reusable in central Revision so there is one retrieval system rather than a separate revision silo.

## Homework

Homework is not another content library. It is a route through existing content:

**LEARN → DO → CHECK → BRING BACK**

A Homework Path should always:

1. open one authoritative learning source;
2. ask for one application/build/research action;
3. point to the relevant focused Revision check;
4. request one small piece of evidence for the next lesson.

Teams remains the formal deadline/brief/submission area.

## Rule for future additions

Before adding any new page or tutorial, answer:

- **Which main area owns it?**
- **Is it knowledge, workflow, recipe, design judgement or practice?**
- **Where does its Revision check live, if it needs one?**
- **What existing page should link to it?**
- **What does it link back to when finished?**
- **Could it become a Homework Path step instead of a new standalone destination?**

If those answers are unclear, do not add another navigation item yet.


## v3.62 — enforced guide placement

The rules above are now reinforced by [AGENTS.md](AGENTS.md) (the mandatory brief for future Codex/contributor changes), the zero-dependency `scripts/validate-content-placement.cjs` checker and `.github/workflows/content-placement.yml`.

**How new content slots in:** existing pages are data-driven. A new Core Lesson appears in the correct `course-data.js` path; a Quick Tutorial belongs to exactly one recipe family and appears in its searchable list; a Master Guide uses `unrealHome: true` and `libraryHidden: true` to appear in Unreal Learning without also entering Quick Tutorials; a Designer recipe belongs to its existing module, and a studio project uses that module's `studioLesson` reference. A Blueprint lab practical can instead be owned by a Guided Path's tutorial step. Students should **not** receive another top-level navigation choice for a new guide.

The validator loads the same curriculum-data files in `index.html` order, rather than keeping a second hand-maintained list. It fails on duplicate IDs, missing/ambiguous owners, broken family/module/course links, unregistered guide files, invalid mission prerequisites and unapproved top-level navigation. Two existing intentional cross-category Quick Tutorial references have documented exceptions; new exceptions need an explicit teaching reason.

After each content addition, run:

```sh
node scripts/validate-content-placement.cjs
node scripts/test-content-placement.cjs
node --check app.js
```

CI runs these checks on pull requests. Browser QA still verifies actual student discovery, completion and direct navigation; programmatic checks cannot prove educational quality or route usability.
