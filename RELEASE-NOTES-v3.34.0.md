# UE5 Learning Hub v3.34.0 — Blueprint Image Truth & Reconciliation Pass

**Build date:** 28 Aug 2026

## Purpose

v3.34 finishes the major Unreal imagery reconciliation pass. The Hub now searches Blueprint-side Epic documentation before requesting a classroom capture, and where Epic's current Blueprint workflow is equally good for teaching, the Hub wording/values are aligned to that official workflow so the screenshot and instruction genuinely match.

## What changed

- Re-audited all **20 Core Lessons**, **47 Quick Tutorials** and **47 Building Blocks**.
- Searched current UE5.8 Blueprint documentation, Blueprint API pages and the Blueprint-heavy Puzzle Adventure Designer Track rather than accepting a default C++ page view as “no Blueprint image”.
- Added multi-image practical galleries for compound steps where several exact UI actions are needed.
- Reconciled arbitrary differences with Epic where there was no educational reason to keep them.
- Preserved stronger Hub-specific teaching where Epic's demonstration was simpler or materially different.
- Rebuilt the teacher capture list from the final reconciled data.
- Preserved the v3.33.1 news-refresh fix and all existing lightbox behaviour.

## Notable teaching reconciliations

- **Sprint** now follows the current Epic Designer workflow: `IA_Sprint`, Digital Bool, Down trigger, Caps Lock classroom mapping and SprintMovementSpeed 1000; normal walk speed is read from Character Movement at BeginPlay instead of hard-coded.
- **Player/enemy health** use Unreal's built-in `Event AnyDamage` receiver.
- **Lives/respawn and checkpoints** use GameMode, Player Start Tags, `Find Player Start` and `Restart Player at Player Start` rather than bespoke transform bookkeeping.
- Overlap-driven tutorials use current Begin/End Overlap events where that improves alignment without changing the learning objective.
- **Gameplay Tags** follows the current Project Settings / Manage Gameplay Tags workflow.
- The Hub keeps its stronger reserve-ammo/reload model, bespoke health maths, exact classroom camera-shake/fog values and other purposeful teaching differences rather than rewriting them merely to fit a picture.

## Final exact visual coverage

- Core Lesson practical steps: **24/160** exact visual slots.
- Quick Tutorial practical steps: **44/284** exact visual slots, up from **19** in v3.33.
- Building Blocks with exact verified visual material: **34/47**, up from **13** in v3.33.
- Audited rendered visual records: **250 remote + 7 local**.

Only visuals attached directly to a practical slot count here. Broader official references, concept diagrams and game/design reference imagery are not counted as substitutes.

## Remaining capture work

- Final bespoke screenshot groups: **127**.
- Diagram-first remaining Building Blocks: **7**.
- Proof/test/reflection steps are intentionally image-free where another screenshot would be decorative.

See `UNREAL-SCREENSHOT-CAPTURE-LIST-v3.34.md` for exact filenames and capture instructions.
