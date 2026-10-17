# UE5 Learning Hub — surgical content and learning-flow audit (v3.62.0 branch)

**Baseline:** `main` v3.61.5, 17 October 2026.  
**Audit/refactor branch:** `refactor/learning-flow-surgical-v3.62.0`.  
**Safety rule:** Do not delete learning content or change persistent completion IDs in a navigation tidy-up. Keep existing deep links and bookmarks valid.

## 1. Source inventory

| Existing collection | Current volume | Intended use |
|---|---:|---|
| Core Unreal Systems | 20 lessons in 6 stages | Sequential engine/Blueprint foundations |
| Blueprint Programmer | Separate cumulative Escape Room missions | Intermediate/advanced project-based programmer pathway |
| C++ Programmer | Standalone L4CppTraining missions | Independent C++ sequence; no Blueprint project dependency |
| Game Design Theory | 24 lessons in 6 strands | Explain design principles, test understanding |
| 3D Modelling | 6 foundations chapters, 12 guided Max lessons, 8 builds, 6 fix clinics | Learn judgement, practise technique, create assets |
| Quick Tutorials | 47 practical recipes in 26 families | Search by specific result/mechanic |
| Designer Studio | 8 disciplines with 47 additional practical recipes | Design judgements, applied environmental/design work |
| Unreal Designer | 8 tracks linked to Designer Studio modules | Apply theory to engine outcomes |
| Industry & Careers | 7 chapters | Sequential careers/industry learning |
| Cross-subject Guided Paths | 3 routes | Join existing content around an outcome, without duplicate completion |

**Structural ID audit:** PASS. No duplicate IDs found in the checked collections. All checked core-lesson paths, theory paths, Quick Tutorial categories, chapter-build stage references, Quick Tutorial family members, Designer module tutorial members and Unreal Designer track/module references exist.

## 2. Diagnosis: duplicate navigation is not necessarily duplicate content

1. **Paths vs Guided Paths:** `#/paths` shows full subject/programmer sequences, while `#/pathways` offers three cross-subject outcome routes. The names are similar enough to appear as two competing path systems. **Next cut:** keep the 6 subject/programmer routes under Paths; explain and surface the 3 outcome routes as *cross-subject projects* rather than another general-purpose path selector. Keep both route URLs working.
2. **Core Unreal vs Blueprint Programmer:** Core Unreal begins with editor/Actors/Blueprint foundations; the Escape Room programme begins with Arrays/Maps and builds through advanced systems. The latter is not the natural first Blueprint lesson. **Next movement:** make the progression explicit: Core Unreal first for new learners; Blueprint Programmer as a separate project/application pathway; C++ remains explicitly standalone.
3. **Quick Tutorials vs Master Guides vs Chapter Builds:** Quick Tutorials repeated Master Guides already discoverable in Unreal Learning, and also displayed locked Chapter Builds outside their parent core course. These are duplicated navigation surfaces, not duplicate files. **Pass 1 implemented:** remove both shelves from Quick Tutorials; keep Master Guides in Unreal Learning and move Chapter Builds there.
4. **Theory vs Designer Studio vs Unreal Designer:** All can cover, for example, affordances, level readability, atmosphere or cinematic choices, but they do different jobs: **explain -> make a design decision -> implement/test**. Do not remove either body of teaching content. **Next movement:** add explicit contextual 'Apply this idea' and 'Revisit the principle' links using existing IDs.
5. **Building Blocks vs Glossary vs Cheat Sheet vs Paste Assists:** These support the same stuck-student intent at different depth. **Next cut:** put a single 'Quick help' search/find entry at the front of Study, then expose Definitions / 5-minute concept / Reference / Official Epic assist as result types. Preserve underlying material and deep links.
6. **3D Foundations vs Max Lessons vs Videos vs Build X:** The resources are complementary, but the landing page presents many shelves before the four-stage skill route. **Next reorder:** continue/next task -> foundations -> structured lessons -> matching video -> Build X -> fix clinic, with professional references and sculpt practice as secondary.
7. **Homework Paths vs Mission Shelves:** Lesson-derived Systems Detective missions appear inside lessons and again in Homework; that reuse is useful for teachers sharing to Teams, not a reason to delete data. **Next cut:** default to teacher-set/searchable tasks; collapse the full mission catalogue and optional practical stretch behind clear progressive disclosure.
8. **Search relevance:** Site-wide search indexes families *and* member tutorials and also broad nested copy, which can produce several results for one query. **Next fix:** group matching items by 'Course lesson / Quick recipe / Study help / Project', prefer exact titles, and avoid listing a family and every member as separate top-level hits in an unfiltered result.

## 3. First surgical change (branch only)

- Core Unreal lesson DOM sequence is now **01 Goals -> 02 Understand -> 03 Guided Build -> When Stuck Debugging -> 04 Check -> 05 Apply in a Game -> 06 Stretch -> 07 Play/Watch -> 08 Homework -> 09 Teams Proof -> 10 Reflection**.
- The short lesson concept is visible before building; detailed diagrams and reference material remain inside expandable support. This avoids turning a shorter pathway into a large prerequisite reading wall.
- All existing lesson, quiz, practical, homework, completion and route IDs are untouched.
- Quick Tutorials is search-first with one canonical list of 26 recipe families. The featured-family shelf, which repeated cards from the full list, is removed.
- Master Guides no longer repeat below Quick Tutorial search; Chapter Builds now sit with the Unreal core stages which unlock them.
- Removed one duplicated 'Guided Paths' CTA from the Paths header. The destination remains available in the contextual section.
- Repaired malformed labels introduced by historic XP text replacement (`Eprogress...`), plus misleading 'no progress' wording.
- Bumped the application constant and `index.html` app-script cache key to v3.62.0.

## 4. QA / merge gates

Completed from connected repository content:
- JavaScript syntax compilation: PASS.
- Core lesson DOM and sidebar navigation target/order checks: PASS.
- No Quick Tutorial Master Guide or Chapter Build duplicate shelf: PASS.
- Chapter Build display is present in Unreal Learning: PASS.
- All known malformed `Eprogress...` labels removed from `app.js`: PASS.
- Cross-collection source ID integrity checks detailed above: PASS.
- Branch confines changes to app/front-end navigation, cache key and this document.

**Still necessary before merging to live:** a real desktop + mobile browser walk-through of Home, Paths, Learn, a core lesson (including expanded explanation, check, completion and next step), Quick Tutorials filtering, the moved Chapter Builds, Study and Level 4, plus a hard-refresh/cache test. The static audit is not a substitute for a rendered browser test.

## 5. Success criteria for the remaining work

A new student should find the start of their subject in two choices or fewer; a returning student should have a single Continue action; a student who is stuck should find a relevant short explanation from anywhere; and every full learning route should show a meaningful next action without making a student choose between overlapping sections. No lost completions, broken Teams links or hidden lessons.
