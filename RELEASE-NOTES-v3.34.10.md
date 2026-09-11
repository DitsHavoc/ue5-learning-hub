# UE5 Learning Hub v3.34.10 — UE5 Tutorial Visual Alignment

## Purpose

Make student-facing Unreal tutorials easier to follow by placing an instructional image beside the exact numbered step it demonstrates, while removing visuals that could teach the wrong workflow.

## What changed

- Added exact official Epic **UE5.8** screenshots to matching Core Lesson and Programming Quick Tutorial steps.
- Reworked the Sprint tutorial around Epic's current UE5.8 Enhanced Input workflow, including `IA_Sprint`, the Down trigger, Input Mapping Context, movement-speed variables and the finished Blueprint graph.
- Added exact UMG anchor visuals for centred crosshairs and screen-size previewing.
- Added exact Epic Blueprint visuals for `Apply Damage`, `Spawn Actor`, `Destroy Actor` and `Play Sound at Location` where those nodes match the Hub instruction.
- Added current Material Instance, Landscape and fog/editor visuals to matching Design Studio builds.
- Reused verified official visuals already present elsewhere in the Hub instead of asking for duplicate classroom captures.
- Removed **80** misleading repeated book-reference images from Design Studio numbered steps and added **5** exact official step visuals in their place. The licensed book figures remain available as deeper reference material where they are genuinely useful.
- Left proof, test and reflection steps deliberately image-free when a screenshot would add no instructional value.
- Added an online-source audit and refreshed classroom-capture lists so the remaining capture work only targets instructions that still lack an accurate visual.

## Source coverage

The current data contains **142 step-level placements** of official Epic visuals, using **81 unique Epic-hosted image URLs** across **34 Epic documentation source pages**. Placements can reuse a single exact image where the same UI/node is taught in more than one place.

High-value current sources include Epic's UE5.8 Blueprint documentation, Design a Puzzle Adventure lessons, Artist Track lessons, UMG Anchors, Landscape Quick Start, Material Instance Editor, AI/Navigation documentation and official Blueprint node/workflow examples.

Third-party UE5 tutorial sites were researched as capture references, but their screenshots were not copied into the Hub when redistribution permission was unclear.

## Visual-source rule

The release follows this order:
1. Exact current Epic UE5.8 documentation image.
2. Exact current classroom UE screenshot.
3. Original diagram for a concept.
4. Game/reference image only for design inspiration.
5. No image + capture requirement rather than an inaccurate screenshot.

Every remote Epic image added by this pass keeps a source link in the Hub.

## Remaining capture work

Two generated files now identify the remaining classroom work:
- `UE5-REMAINING-CLASSROOM-CAPTURES-v3.34.10.md` — Core Lessons, Programming Quick Tutorials and Building Blocks.
- `UE5-DESIGN-STUDIO-REMAINING-CAPTURES-v3.34.10.md` — Design Studio practical steps.

The capture lists deliberately exclude already-covered steps and avoid asking for screenshots solely to decorate proof/test/reflection instructions.

## Database

No database migration. Supabase is unchanged.

## Validation boundary

JavaScript syntax, package integrity and minimal-overlay equivalence are validated as part of packaging. **No browser visual testing is claimed** by this release.
