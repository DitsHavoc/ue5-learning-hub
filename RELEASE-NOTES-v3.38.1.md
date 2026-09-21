# UE5 Learning Hub v3.38.1 — 3ds Max Companion Video Series

## What changed

The teacher's 14-video 3ds Max series is now integrated into the Modelling Studio without copying the large MP4 files into the site package. A new `#/modeling/videos` page presents the series in order with click-to-load Google Drive preview players, a short **WATCH FOR** focus and a **DO IT IN MAX** follow-along task.

Relevant videos are also surfaced inside the matching written Modelling Studio lessons, so students can move between demonstration and precise step-by-step instructions instead of hunting through a separate folder.

## Video sequence

0. Introduction
1. Interface Basics
2. Creating Basic Primitives
3. Basic Primitive Parameters
4. Making a Snowman Using Basic Shapes
5. Tools & Techniques
6. Edit Poly — Vertices
7. Edit Poly — Edges
8. Edit Poly — Polygons
9. Bend, Taper & Noise Modifier
10. Array Tool
11. Making a Hat
12. Making a Ring
13. Adding Materials to the Hat

## XP and progress

Each video follow-along task is a one-time `modelvideo:<id>` completion worth **20 XP**. The full series therefore contains **280 XP**. Video completion is stored locally for guest learners, syncs through the existing `lesson_progress` mechanism for signed-in students, appears in student progress and teacher class-progress views, and is indexed by global search.

Migration `migrations/20260829_32_model_video_xp.sql` was applied to the live Supabase project as `model_video_xp`. It only extends the existing XP mapping; no new table, RLS policy, bucket or assignment workflow is introduced.

## Google Drive permission note

At integration time the Drive metadata showed the MP4 files as private/owner-only. The Hub uses `https://drive.google.com/file/d/<id>/preview` lazily inside an iframe, so students will need read permission on the source videos before the embedded players work. The MP4 files are intentionally not bundled because the 14 source videos are large and external hosting keeps the Hub deployment lightweight.
