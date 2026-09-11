# UE5 Learning Hub v3.32.1 — Unreal Path Audit & Link Accuracy Pass

**Build date:** 27 August 2026  
**Database migration required:** No

## Why this pass exists

v3.32 established the right student route: Building Blocks → Core Systems → Quick Tutorials → Challenges/Projects. This follow-up pass audits the actual knowledge links rather than changing that architecture again.

The audit found two real issues:

1. Tutorial-to-Building-Block links were inferred from tutorial words. That could produce nonsense matches such as `Set Game Paused` matching the `Sets` container block or `Play Sound` matching `Compile / Save / Play`.
2. A small number of concepts were being used in tutorials without a dedicated just-in-time Building Block.

Both are fixed.

## Explicit tutorial knowledge links

All **47 programming Quick Tutorials** now declare their Building Blocks explicitly. The UI no longer guesses from words when an explicit mapping exists.

Examples:

- Sprint → Enhanced Input + Variables + Character Movement
- Locked Door → Variables + Branches + Timelines/Lerp
- Line Trace Gun → Camera + Transforms + Traces + Damage
- Pause Menu → UMG + Enhanced Input + Pawn/Controller
- AI Perception → AI Perception + Blackboard/Behaviour Tree + AIController
- Niagara Impact → Niagara + Traces + Transforms
- Silent Hill Fog → Fog/Post Process + Transforms

The old fuzzy matcher remains only as a backwards-compatible fallback for future/legacy tutorial data without an explicit map.

## Building Block coverage expanded

The library grows from **39 to 47 Building Blocks** while keeping the same anti-overload model:

- **13 Core** — still the only early recommendation
- **32 Common** — learn just in time
- **2 Later** — larger-system concepts

Eight Common blocks were added because current tutorials genuinely use them:

- Character Movement Component
- Timelines & Lerp
- Damage: Apply Damage & AnyDamage
- Camera, Spring Arm & Camera Shake
- Audio: Sound Waves, MetaSounds & Playback
- Niagara Systems & Spawning VFX
- Fog & Post Process
- AI Perception

The fifth shelf is now **World, UI, FX & AI** so those concepts have an honest home without becoming another compulsory course.

## Micro-learning quality pass

The Building Blocks themselves were checked against the same prescriptive standard as the tutorials. Creation steps now more consistently state the actual editor path, asset type, name and teaching value instead of assuming the learner already knows where to click.

Notable fixes include:

- Casting now uses a self-contained Object Reference proof instead of requiring a trace/overlap first.
- Blueprint Interface creation now gives the full asset path, implementation route and Message call.
- Event Dispatcher practice now explicitly creates the sender reference and bind path.
- UMG now includes Create Widget vs Add to Viewport plus Game Only / UI Only / Game and UI input modes.
- SaveGame now lists Casting as useful prior knowledge.
- Camera Shake teaching values use exact values rather than `~` approximations.
- Timeline, Data Table, Enum, Struct, SaveGame, AIController and Behaviour Tree creation paths were made more explicit.

## Current technical verification

Version-sensitive additions were checked against current Epic UE5.8 documentation during the audit, including Niagara, Camera Shakes, Controllers/Possession, and Event AnyDamage terminology.

## Validation

- 47 Building Blocks: **13 Core / 32 Common / 2 Later**
- 5 shelves
- 47 / 47 programming tutorials have explicit Building Block mappings
- every tutorial maps to 1–4 valid blocks
- 20 / 20 Core System Lessons have at least one related Building Block
- all `requires` links resolve and the dependency graph is acyclic
- prescriptive wording scan found no `roughly / about / ~ / appropriate` wording in Building Block proof steps or first-build Programming recipes
- production JS/data syntax checks passed
- 572 local references scanned / 114 unique / **0 missing**
- local HTTP smoke test passed for the homepage, Building Block data and tutorial data

An automated Chromium visual pass is **not claimed**; the container browser runner remains unreliable. Visual deploy checking is still recommended.
