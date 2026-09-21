# UE5 Learning Hub v3.35.4 — Designer Resource Bridge Cleanup

## What changed

The Designer Studio landing page no longer shows the large **FREE ASSETS • SOUND • PROFESSIONAL REFERENCE** panel directly beneath **Seven moves. No waffle.**

That panel repeated navigation already provided by the dedicated Resource Library, sidebar, Home landing page and site-wide search, so it added visual weight without adding a new student action.

## What remains

- Dedicated Resource Library route: `#/resources`
- 18 curated Resource Library sources and licensing guidance
- Resource Library sidebar navigation
- Home-page Resource Library card
- Resource Library results in global search
- All eight Designer Studio disciplines
- 24 unique LOOK case studies
- 24 industry deep dives and 8 embedded videos
- Module-level constraint challenges, Studio Builds and Black Box briefs
- 3D Modelling Studio as its own area

## Technical notes

- Removed the Designer landing `resource-studio-bridge` markup.
- Removed CSS used only by that bridge and its obsolete mobile selector.
- Corrected two Quick Tutorial breadcrumb links that incorrectly pointed to `#/Dashboard`; they now point to `#/`.
- No database migration is required.
- No route IDs, tutorial IDs, snippet IDs, Designer completion IDs or student progress IDs were changed.
