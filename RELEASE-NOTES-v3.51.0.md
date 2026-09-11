# UE5 Learning Hub v3.51.0 — Learning Flow Cleanup

**Build date:** 11 September 2026  
**Database migration required:** No  
**Backend change:** No

## Why this release exists

The Hub had started to show a genuine architecture drift rather than just a cosmetic navigation problem.

The Landscape and Sequencer Master Guides were created on the later v3.50.x branch, while the Industry Reality Check / Secret Studio Protocol work continued from the v3.49.1 branch. Applying the later Industry overlay after v3.50.2 could therefore replace `index.html` / `app.js` with versions that did not contain the newer Master Guide integration.

v3.51.0 reunifies those branches and makes the learning structure explicit in the UI so new material has a clear home.

## Unreal Learning now has one visible progression

1. **Building Blocks** — learn a term or small concept.
2. **Core System Lessons** — understand transferable Unreal systems.
3. **Master Guides** — complete end-to-end workflows that are too large for a quick recipe.
4. **Quick Tutorials** — just-in-time practical recipes.
5. **Challenges & Practice** — apply the skill with less scaffolding.

### Master Guides

The two current Master Guides are:

- **Landscape: From Blank Terrain to Playable Environment** — 16 stages.
- **Sequencer & Cinematics: From First Shot to Final Render** — 12 stages.

They now:

- live visibly inside **Unreal Learning**;
- appear at the top of **Quick Tutorials** as full workflows, while remaining hidden from the ordinary recipe-family count;
- keep their existing cross-links from **Designer Studio**;
- activate **Unreal Learning** in the sidebar rather than making the user feel they have left the software area;
- remain globally searchable;
- use one authoritative technical workflow rather than maintaining a duplicate version in Designer Studio.

Designer Studio remains the design-thinking layer: route readability, composition, atmosphere, framing, pacing, continuity and storytelling decisions.

## Revision is now one system

Central Revision now contains **67 topics / 215 questions** across six areas:

| Area | Topics | Questions |
| --- | ---: | ---: |
| Unreal Systems | 20 | 44 |
| Unreal Master Guides | 2 | 10 |
| Game Design Theory | 24 | 72 |
| Industry & Careers | 7 | 35 |
| Designer Studio | 8 | 24 |
| 3D Foundations | 6 | 30 |

### New Master Guide checks

Landscape and Sequencer each contribute five focused workflow questions.

### Industry & Careers

The existing five-question scenario check from each of the seven Industry chapters is now also reusable from the central Revision area. The chapter activity remains the source of evidence/progress; Revision is retrieval practice.

### Practical content deliberately does not get a duplicate quiz

Quick Tutorials, 3ds Max videos and Sculpt exercises are practical proof. Their pages now explain where the related knowledge check lives instead of bolting the same mini-quiz onto every recipe.

The rule is now visible to students:

- **Knowledge / judgement** → Revision questions.
- **Practical execution** → build, test, change, explain and capture evidence.

## Homework is now a route, not a task dump

The Homework page now starts with six guided routes:

- Unreal Core
- Landscape & World Building
- Sequencer & Cinematics
- Game Design Theory
- Industry & Careers
- 3D Foundations

Every route follows:

**LEARN → DO → CHECK → BRING BACK**

Each route provides:

- the exact Hub page to open;
- one practical/application task;
- a focused revision check;
- one small piece of evidence to bring back;
- a **Copy full path for Teams** button.

The copied Teams version includes the live Homework Path URL and direct Hub links. Teams remains the home for deadlines, formal briefs, submissions and assessed feedback.

The original searchable one-off Homework task bank remains underneath for targeted independent study.

## Search / navigation tidy-up

- Guided Homework Paths are now searchable individually.
- Revision search copy reflects Master Guides and Industry & Careers.
- Homework search copy reflects the new guided routes.
- Master Guide pages highlight **Unreal Learning** in the sidebar.
- Landscape and Sequencer remain cross-linked from their matching Designer Studio pages.

## Preserved from the Industry release

v3.51.0 keeps:

- Find Your Place Industry & Careers pathway;
- career chapter quiz hotfix;
- Industry Reality Check / class pulse;
- Your Magnum Opus debate;
- Secret Studio Protocol attention check.

## Packaging repair

The older reconstructed v3.50.2 archive referenced three inherited runtime files that were absent from that particular historical full ZIP. Exact copies were recovered from the releases that originally introduced them:

- `roster-controls.js` — v3.42.3
- `visual-refresh.css` — v3.42.5
- `visual-final.css` — v3.42.6

This means the v3.51.0 **FULL** archive is a genuinely self-contained site snapshot rather than relying on those files already existing on the live server.

## Bandwidth / database impact

- No new Supabase table, policy, RPC or migration.
- No new routine database polling.
- No new Supabase Storage image set.
- Master Guide screenshots remain local static WebP assets and use existing lazy/lightbox behaviour.
- The UX cleanup itself adds one small local stylesheet, `learning-flow.css` (about 6 KB raw).
- Existing Network Quiet read patterns are preserved.

## Deployment

Two packages are supplied:

- **FULL** — self-contained v3.51.0 site snapshot. Use this when you want one clean canonical repository state.
- **MINIMAL** — safe overlay for the current deployed Hub. It contains the merged runtime files, both Master Guides/assets, inherited theme/roster files and v3.51.0 documentation.

No SQL needs to be run.
