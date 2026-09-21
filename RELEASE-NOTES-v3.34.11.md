# UE5 Learning Hub v3.34.11 — UE5 Visual Source Completion

Released: 29 August 2026

## Purpose

v3.34.11 completes the aggressive current-UE5.8 visual sourcing pass started in v3.34.10. The goal is not to fill every step with an image; it is to put a useful visual beside a student only when that visual helps them locate, build, configure or recognise the thing described by the instruction.

## What changed

- Expanded exact official Epic UE5.8 visual coverage across Core Lessons, Programming Quick Tutorials and Design Studio.
- Reused current Epic editor visuals for repeatable actions such as creating Blueprint variables/functions/interfaces/dispatchers, adding components, placing/transforming actors and recognising common editor controls.
- Added stronger official Epic examples for Enhanced Input, UMG, AI, damage, spawning, Sequencer, materials, landscapes, audio and other matching workflows.
- Kept tutorial-specific Blueprint graphs and exact classroom values on the teacher-capture list when a generic documentation screenshot would be misleading.
- Removed proof/test/reflection actions from the screenshot workload unless the diagnostic editor view itself is part of the lesson.
- Reclassified Design Studio judgement/outcome tasks as design/reference visuals rather than pretending they require a single correct Unreal editor screenshot.
- Expanded the Design Studio visual plan so each reference group states exactly what the visual must demonstrate.

## Capture workload after the pass

The v3.34.10 audit counted 211 potential teacher screenshot groups. v3.34.11 reduces the genuine classroom capture requirement to 90:

- Core Lessons: 17
- Programming / Quick Tutorials: 53
- Building Block recognition: 6
- Design Studio technical Unreal captures: 14

That removes 121 teacher captures (about 57%) while retaining bespoke screenshots where the exact Hub graph, value or configuration matters.

Seven Building Block concept diagrams remain separate original-Hub diagram work and are not teacher screenshots.

## Official source coverage

Current tutorial/design data contains:

- 316 official Epic visual placements
- 138 unique official Epic-hosted image URLs
- 54 official Epic source pages represented

Official visuals are used only where they genuinely match the instruction. Third-party tutorial imagery is not redistributed unless reuse permission is clear.

## New audit / capture documents

- `UE5-REMAINING-CLASSROOM-CAPTURES-v3.34.11.md`
- `UE5-DESIGN-STUDIO-VISUAL-PLAN-v3.34.11.md`
- `UE5-AGGRESSIVE-ONLINE-VISUAL-AUDIT-v3.34.11.md`

## Database

No Supabase/database migration is required. Leaderboards, classes, projects, evidence, permissions and all existing production database systems are unchanged.

## Validation scope

Release packaging should be validated with JavaScript syntax checks, ZIP integrity checks and minimal-overlay reproduction against the v3.34.10 full build. Browser visual testing is not claimed unless separately performed.
