# UE5 Learning Hub v3.46.1 — Navigation + Link Hotfix

## Fixed
- Fixed the homepage Class Focus / Your Work / Find & Explore controls appearing clickable but failing to respond.
- Cause: the Student Journey card grid was being re-rendered repeatedly by its own MutationObserver updates, replacing links/buttons between pointer down and click.
- The journey cards now render once per Home view unless an explicit refresh is requested.

## Navigation
- Sidebar is fully open again.
- No sidebar headings collapse.
- No Main Area links sit behind a “More areas” button.
- Critique Board, Sculpt Playground and News & Industry remain visible.

## Homepage
- Removed the hidden “More areas” browse step.
- Unreal, Theory, Design, 3D, Sculpt and News & Industry are all visible as normal homepage blocks.
- News & Industry is kept visually distinct so students can see it is a deliberate Hub destination.

## Safety
No changes to:
- app.js
- backend.js
- roster-controls.js
- Supabase schema / Class Focus migration
- Prison Cell
- Prison Escape
- Blueprint Foundations
- Advanced Blueprint learning
- XP or progress logic
