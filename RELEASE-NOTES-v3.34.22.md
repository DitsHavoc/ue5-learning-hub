# v3.34.22 — Official Tutorial Imagery Exhaustion Pass

## The big change

The old **76 required teacher screenshots** number is retired.

That figure came from an intentionally strict audit which required an exact classroom capture whenever the Hub used a different variable name, value or small graph variation from Epic. In practice that would have meant rebuilding dozens of tutorials merely to manufacture screenshots.

v3.34.22 rechecks those slots against the **actual current Epic UE5.8 Designer/Artist/tutorial pages** and applies the existing visual policy properly: if Epic already shows the correct current workflow, UI or graph topology, use it and keep the Hub-specific values in text.

**Required new teacher screenshots before launch: 0.**

## Integrated in this release

- The supplied real classroom **Maps & Modes → Game Instance Class** screenshot is now used in Gameplay Framework as a location reference. Its caption explicitly notes that students should follow the Hub text and choose `GI_Learning`.
- Data Tables now reuse the existing authentic classroom Data Table captures rather than requesting a recreated `TrainingSword` screenshot.
- Timelines/doors use current Epic Designer door logic as a topology reference.
- Locked Door, AI Chase and AI Attack Range gain additional current Epic Designer imagery.
- Material Instances use current Epic Artist 03 parameter/material-instance visuals.
- Wet surfaces use current Epic Artist 04 dry/wet Lerp and dynamic-material visuals.
- Designer Studio now leans on current Epic Post Process, Landscape, Foliage, Sequencer, MetaSound wind, Static Mesh/LOD and Reference Viewer material instead of bespoke captures.
- Gameplay Tags gains a current Epic reference visual.

## Capture policy

A different numeric value is **not** a reason to recreate Epic's screenshot. The image teaches recognition/workflow; the Hub text carries the exact classroom values. A step can also remain text-only when an extra image adds no meaningful teaching value.

Any future classroom captures are optional enrichment: take them naturally when a clean finished graph is already open during teaching, not as pre-launch homework.

## Validation / migration

- No database migration.
- Existing 47 practical builds, 26 recipe families and 39 Epic paste assists are unchanged.
- Embedded and top-bar search behaviour from v3.34.21 remains unchanged.
