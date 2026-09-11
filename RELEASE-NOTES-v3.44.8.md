# v3.44.8 — Prison Escape Visual Guide

## Added

- Four original, prison-specific diagrams for the key pickup, door hierarchy/pivot, locked-door logic and gameplay-to-Sequencer handoff.
- Exact visual labels matching the classroom build: `BP_PrisonKey`, `HasPrisonKey`, `BP_PrisonDoor`, `DoorHinge`, `TL_OpenDoor`, `Trigger_PrisonEscape` and `LS_PrisonEscape`.
- Diagram support beside the relevant student recipe steps and the final end-to-end escape test.

## Image-source decision

The supplied Blueprint image bank was used to identify useful teaching patterns and coverage gaps. Book screenshots are not republished as exact technical instructions. Current Epic UE5.8 documentation remains the source for editor-interface captures; the new prison diagrams are original Hub assets.

## Student route

1. Collect the prison key and store state on the player.
2. Prove the door remains locked before the key.
3. Open it smoothly from a hinge with a Timeline.
4. Cross the exit trigger and play the Level Sequence once.
5. Regain camera, movement and look control after playback.
