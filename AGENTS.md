# Codex / contributor rules — UE5 Learning Hub

The Hub is a **learning journey**, not a collection of new menu items. Apply this before every new lesson, guide, recipe, mission, activity, or reference. See [LEARNING-FLOW-MAP-v3.51.0.md](LEARNING-FLOW-MAP-v3.51.0.md) and [INSTRUCTION-AUTHORING-STANDARD.md](INSTRUCTION-AUTHORING-STANDARD.md).

## One guide = one canonical home

Before writing a new guide, search the existing data and decide whether an existing lesson needs a section or an existing recipe needs a variant. Reuse and cross-link rather than copy substantial instruction text. Every addition must answer **who is this for, what do they know already, where does it live, what should they do next, and how is learning checked?**

| New content | Owning source / discovery rule |
| --- | --- |
| One unfamiliar Unreal term or node family | `data/building-block-data.js`; surface only as just-in-time help inside lessons/builds |
| Transferable Unreal system | `data/course-data.js`, inside one of the six core paths; revision from the authoritative lesson |
| End-to-end Unreal workflow (Landscape, Sequencer, team workflow) | Register a tutorial with `unrealHome: true`, `libraryHidden: true`, `unrealSection`, and real `steps`; load its data script from `index.html`. It appears under **Unreal Learning → Master Guides**, not Quick Tutorials |
| Specific build outcome / small mechanic | `data/tutorial-data.js`: one visible `category`, **exactly one** `families[].members` entry; belongs to **Build → Quick Tutorials** |
| Lesson-owned application of a core concept | Tutorial with `libraryHidden: true` and valid `lessonHome`; searchable, linked from the existing Core Lesson; *not* an extra top-level Quick Tutorial |
| Game design principle or analysis | `data/theory-data.js`, in one theory path; associated scenario questions live here and feed Revision |
| Design discipline, judgement or Unreal application | `data/design-data.js`: each new Designer recipe appears in exactly one `modules[].tutorials` list, with `category: 'design-' + module.id`; link to the relevant principle and an existing engine guide rather than copying it |
| 3D knowledge, 3ds Max process, portfolio asset | 3D Foundations in `data/modeling-foundations-data.js`; practical Max lessons and Build X in `data/modeling-data.js`; videos remain linked to the matching lesson instead of making another independent course |
| Blueprint programmer / standalone C++ | Extend `data/programmer-skill-mission.js` or `data/cpp-skill-missions.js` respectively. **Never** make C++ depend on progress in the Blueprint project |
| Industry understanding / career scenarios | `data/industry-careers-data.js`; use central Revision instead of a duplicate mini-quiz |
| Homework | Reuse the existing lesson/design/3D content through `app.js` Homework paths. Formal tasks and submission stay in Teams |
| Level 4 specialist outcome | `data/level4-specialist-projects.js`, only for a substantial portfolio project; link to existing lessons/guides |

**Information architecture rule:** Home and main sidebar remain **Paths / Learn / Build / Study / Level 4**. Adding a guide does not justify a new navigation tab. One content object should have one canonical URL; it can be *linked from* multiple places when educationally useful. Preserve all old routes and completion IDs.

## Publishing gate (mandatory)

1. Confirm the existing guide does not already teach the same outcome. Prefer extension, a short variant, or an explicit link.
2. Assign the correct owner, route/category, family/module, prerequisite and next activity. Use existing data-driven rendering; no handmade duplicate cards.
3. Follow the beginner instructional pattern: **where → do → why → check → recover if stuck**. Keep independent tasks independent.
4. Run `node scripts/validate-content-placement.cjs` and `node --check app.js`. The PR CI checks data ownership, references, registration in `index.html`, accidental duplicate IDs/families, mission prerequisites, and the five primary navigation entries.
5. Verify the new guide is findable from its *owning section* and site-wide search on **desktop and mobile**. Test direct URL, previous/next navigation, revision, any Teams-copy link, hard refresh and existing completion progress.
6. In the PR, state **canonical owner, audience/prerequisites, related existing material, where students encounter it, next learning step, and QA evidence**. Do not merge an unverified new guide.

If a new valid cross-disciplinary connection fails the placement check, add a *specific documented exception* with the teaching reason; never silence the entire check or bypass broken IDs.

**No production deployment for navigation/content restructuring until rendered desktop and mobile QA passes.**
