# UE5 Learning Hub v3.41.0 — Guided Paths

## Optional guided routes through the existing Hub

Adds a lightweight **Guided Paths** layer for students who want a clear answer to “what should I do next?” without turning the Hub into a locked linear LMS.

### Launch paths

- **Build a Playable Level** — theory → greybox → scale → guidance → meaningful choice → spatial pacing → Level Design Studio Build → playtest.
- **Create a Gameplay Mechanic** — design foundations → core Blueprint lessons → choose one mechanic → game feel → choose one feedback layer → playtest.
- **Make a Game-Ready 3D Prop** — scope → Game-Ready 3D Foundations → core Max tools → scaffolded prop → topology → UVs → material prep → UE5 export → Hero Prop.
- **Digital Game → Tabletop** — game-design foundations → MDA/abstraction → optional Board Game Lab → decisions/randomness/economies/balance → translation → prototype → playtest.

### Guidance, not locking

- Every normal Hub page remains freely accessible.
- Guided Paths show **Complete / Recommended next / Coming up**, but every step remains clickable.
- Work completed before opening a path counts automatically.
- Choice stages count when any one listed outcome is completed.
- Optional in-class activities do not affect pathway completion.
- Guided Paths award **no separate XP**. XP continues to come from the underlying lessons, tutorials and builds, so there is no double-awarding.
- No new database tables, migrations, background reads or progress rows were added.

### Theory → practical bridges

Adds **Put this into practice** cards to Theory lessons where a strong existing Hub application exists. Examples include:

- Player Agency / Meaningful Choice → Decision Point practical
- Guidance / Affordances → Route Readability / Focal Point
- Game Feel → Sound Feedback / Niagara / Camera Shake
- Pacing → Spatial Pacing / Reveal Shot
- Environmental Storytelling → Five-Prop Story Vignette / Environment Art
- Prototyping → Greybox Room / Digital → Tabletop
- Playtesting → Critique Board

Weak or artificial cross-links were deliberately not added.

### Existing Unreal course preserved

Unreal Learning already has six ordered stages and Chapter Builds, so v3.41.0 does **not** duplicate it as another Guided Path. The Guided Paths landing page points students to the existing Unreal course when they want systematic engine learning.

## Search / navigation

- Added **Guided Paths** to main navigation.
- Added all four paths to global search.
- Added a small optional Guided Paths callout to the home page.
- Changed the home hero wording from “Choose a path” to “Choose where to learn” so normal Hub areas are not confused with Guided Paths.

## Preservation

Built on v3.40.0 Game Design Theory, itself based on v3.39.4 Network Quiet + homepage/Noclip hotfix.

No completion IDs, XP values, Supabase schema, Critique behaviour, Teams-first boundary, Network Quiet caching, Designer Studio structure, Unreal course structure, 3D prerequisites or existing routes were removed or changed.
