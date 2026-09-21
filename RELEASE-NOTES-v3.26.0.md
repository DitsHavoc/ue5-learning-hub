# UE5 Learning Hub v3.26.0 — Sculpt Playground

**Build date:** 26 August 2026  
**Database migration required:** No

## Added

- Sculpt Playground inside the 3D Modelling wing.
- Embedded official SculptGL browser app with a full-screen fallback.
- Six deliberately small scaffolded exercises: camera/undo, Brush/Smooth, symmetry face, rock planes, silhouette design, and wireframe/export inspection.
- Structured student guidance using WHERE TO WORK → DO THIS → YOU SHOULD SEE → STOP & CHECK → WHY → IF YOURS DOESN'T MATCH.
- Beginner tool cheat sheet.
- OBJ → 3ds Max topology-inspection bridge.
- Sculpt completion, XP, search results, progress stat and Digital Clay badge.

## Teaching intent

SculptGL is treated as digital clay: a place to practise proportion, silhouette and form without pretending the resulting mesh is automatically a production-ready game asset. Exercise 06 explicitly switches on wireframe, exports OBJ and asks the student to inspect the sculpture in 3ds Max.

## External dependency

The embedded tool is loaded from the creator's official SculptGL website and therefore needs an internet connection. A full-screen link is provided if iframe embedding is blocked by a college browser or filter. SculptGL's source is MIT-licensed; its original GitHub repository is archived/read-only in 2026, so the Hub treats it as optional practice rather than a critical dependency.

## Database

No migration required. Sculpt practice completion uses the existing progress mechanism.
