# UE5 Learning Hub v3.22.0 — Gold Instruction Pass

**Build date:** 26 August 2026  
**Database migration required:** No  
**Deploy target:** Existing GitHub/Render site and existing Supabase project

## Why this release exists

v3.22.0 is a teaching-quality release. The Hub already had broad coverage, but too many walkthroughs told a student *what* to do without reliably telling them *where* to do it, what success should look like, or how to recover when their screen did not match. Visuals could also be related to the topic without actually helping with the step beside them.

The new standard is deliberately more prescriptive while retaining the existing **why** and testing language.

## New instruction standard

Core guides, Quick Tutorials, Designer recipes and Studio Builds can now use:

- **WHERE TO CLICK / WHERE TO WORK** — the Unreal panel, asset, menu or graph to open.
- **DO THIS** — the action to perform.
- **YOU SHOULD SEE** — the immediate expected result where useful.
- **WHY** — the transferable idea behind the action.
- **CHECK / PROVE IT** — a test before moving on.
- **IF STUCK / IF IT'S WEAK** — a focused recovery prompt.
- **Step-matched visual** — only when the available image genuinely supports the action or principle.

If a useful instructional image is not available, the Hub now prefers no image rather than a misleading generic fallback.

## Coverage completed

- **20 / 20 core programming lessons** — detailed guided-build format.
- **47 / 47 programming Quick Tutorials** — detailed walkthrough format.
- **47 / 47 Designer Studio recipes** — detailed walkthrough format.
- **94 / 94 distinct searchable tutorials** after Programming + Designer Studio are merged at runtime.
- **8 / 8 Designer Studio Builds** — expanded into production-style phases with where-to-work, proof and recovery prompts.

## Landing page

- Reduced the size of the **Choose a path** hero heading on desktop.
- Reduced the mobile hero further so the four main destination cards appear sooner.
- Kept Programming, Design, Projects and News as the four dominant entry points.

## Visual-quality changes

- Removed the old behaviour where a Quick Tutorial with no dedicated imagery automatically borrowed a vaguely related image from its linked course lesson.
- Step visuals now come from matching real UE captures, original diagrams or licensed teaching figures where they genuinely help.
- Designer references remain useful for visual analysis and inspiration, but are no longer treated as substitutes for instructional UI imagery.

## Student experience

The intended workflow is now:

1. Find the exact Unreal area named in the step.
2. Perform one controlled action.
3. Compare the result with the expected outcome.
4. Understand why the step matters.
5. Test it before continuing.
6. Use the recovery prompt if the result does not match.

This remains consistent with the Hub's **Learn → Practise → Prove** model rather than becoming blind node copying.

## Technical notes

- No Supabase schema changes are included in this release.
- Existing accounts, classes, projects, news saves, votes and comments remain on the current database.
- Cache-busting/version references updated to **v3.22.0**.
- News cache namespace updated to `ue5hub:v322:news-cache`.
- Existing v3.20 News & Industry functionality is retained.

## Recommended deployment smoke test

After deployment, check:

1. Home on desktop and mobile.
2. Programming → first lesson → Full guided build.
3. Quick Tutorials → Crouch, Ammo & Reload, Pause Menu, AI Perception.
4. Designer Studio → one recipe in each discipline.
5. Designer Studio → each Studio Build phase layout.
6. Silent Hill-style Fog visual flow.
7. Projects and News still load normally.
8. Signed-in News save/upvote/comment functions remain operational.
