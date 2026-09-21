# Designer Studio v3.35.0 — Rebuild / QA Map

## Purpose

Designer Studio should teach students to **notice, explain, test and improve design decisions**. UE5 recipes support that process; they are not the curriculum by themselves.

## Student loop

**LOOK → STEAL THE PRINCIPLE → RESEARCH → BUILD → BREAK + TEST → IMPROVE**

After the module's Studio Build is completed, the hidden **Black Box brief** unlocks and asks the student to transfer the same principle under a new constraint.

## Structural totals

- 8 disciplines
- 24 real-game case studies (3 per discipline)
- 16 field research missions (2 per discipline)
- 24 constraint challenges (3 per discipline)
- 24 challenges in Design Roulette
- 8 hidden Black Box briefs (1 per discipline)
- 47 Designer-owned Quick Tutorials preserved
- 47 / 47 Designer-owned Quick Tutorials have at least one design-target reference image; the shared Silent Hill fog recipe retains its own official game/UE references
- 53 Studio Build phase instructions rewritten

## Disciplines

1. Level Design Foundations
2. Environment Art & Set Dressing
3. Materials & Surfaces
4. Lighting & Atmosphere
5. Landscape, Terrain & Foliage
6. Sequencer & Cutscenes
7. Audio & Sound Design
8. Polish, Optimisation & Presentation

## Reference/source families

### Shipped-game / developer-publisher reference imagery

- Remedy — CONTROL
- Playdead — INSIDE
- Kojima Productions — Death Stranding
- EA / Motive — Dead Space
- Remedy — Alan Wake 2
- Guerrilla — Horizon Forbidden West
- Bandai Namco / FromSoftware — Elden Ring

### Professional design reading

- The Level Design Book — process, blockout, wayfinding and lighting
- Guerrilla developer breakdowns — Relic Ruins, Art Blast and GDC material
- EA / Motive developer material — Dead Space audio and Intensity Director
- Remedy developer material where relevant

### Engine implementation

Current Epic UE5.8 documentation remains the source of truth for Unreal-specific controls and workflows. Existing official UE5.6/5.7 imagery remains acceptable when materially unchanged under the Hub's visual-source policy.

## QA rules

A release passes the Designer Studio structural QA when:

- every module has exactly 3 case studies;
- every module has exactly 2 research missions;
- every module has exactly 3 constraint challenges;
- every module has one Black Box brief;
- all 24 module challenges appear in Design Roulette;
- every Designer tutorial ID is unique and resolves;
- every tutorial listed by a module resolves in the merged Quick Tutorial library (including the shared Silent Hill fog recipe);
- every Designer tutorial has at least one `referenceImages` entry;
- external case-study images and source links use HTTPS;
- no deprecated Twitter-hosted CONTROL references remain;
- no PureXbox Hellblade reference remains;
- no Studio Build phase contains the old generic “Use the relevant Unreal editor panel” wording;
- all local image references resolve in the release tree;
- no database migration is introduced by the rebuild.

## Classroom intent

The short tasks are deliberately evidence-producing. A useful response should normally leave behind one of these: an annotated screenshot, quick sketch, route diagram, comparison table, before/after capture, short observation list, playtest note or revision decision.

The aim is to make “research” active and observable rather than “Google the topic and write a paragraph”.
