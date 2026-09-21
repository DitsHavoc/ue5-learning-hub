# UE5 Learning Hub v3.32.2 — Class Detail Workspace

**Build date:** 27 August 2026  
**Database migration required:** No

## Why this exists
The Teacher Dashboard could manage classes and show a global student overview, but a teacher could not open one class and inspect that class's learning content. v3.32.2 adds the missing class-level teaching view.

## New class workflow
**Teacher Dashboard → Classes → Open class**

The class view contains:
- the class name, academic year and teaching team;
- class-only student roster;
- per-student counts for Building Blocks, Core Lessons, Quick Tutorials, 3D/Sculpt and approved evidence;
- an expandable **View completed content** area listing the exact content each student has completed;
- class-wide content progress for Building Blocks, Core System Lessons, Quick Tutorials, 3D Modelling, Sculpt Playground and Chapter Builds;
- completion bars/counts based only on students in the selected class;
- class-specific evidence-waiting and collaborative-project counts.

## Important design choice
This is progress visibility, **not** a new assignment/LMS layer. Hub learning remains available normally; teachers can now see how a particular class is using it without mixing several teaching groups together.

## Regression
Existing class creation, joining, co-teaching, join-code controls, archiving/deletion, teacher overview, evidence, Projects and learning areas remain unchanged.
