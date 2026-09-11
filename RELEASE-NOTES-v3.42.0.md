# UE5 Learning Hub v3.42.0 — Teacher Command Centre

The Teacher dashboard had fallen behind the Hub. It could see the original Unreal/tutorial/Designer/3D totals, but newer Theory, Designer source work, Max videos and Guided Path checkpoints were either missing or buried. v3.42.0 makes teacher tracking a first-class view again.

## Teacher Learning Pulse

The top of the Teacher dashboard is now learning-first rather than admin-first. Each active class gets a scan table showing every student across:

- Unreal core lessons, Building Blocks, practical tutorials and Chapter Builds
- Game Design Theory
- Designer Studio builds and industry source tasks
- 3D Foundations, 3ds Max videos, modelling lessons, Build X, Fix This Model clinics and Sculpt
- Guided Path checkpoints
- most recent Hub activity

Teacher invites, class codes and management remain available but sit in collapsible admin sections below the learning view.

## Detailed class snapshot

Opening a class now adds an at-a-glance table before the existing exact-content lists. Every student shows:

- Unreal progress
- Theory progress
- Designer progress
- 3D/Sculpt progress
- percentage through each of the three Guided Paths
- XP earned this week
- current activity streak
- last recorded Hub activity

The existing expandable student detail remains, and now includes all three Guided Path percentages.

## Guided Path tracking

Required pathway checkpoints deliberately award no XP, but teachers can now see them. The class content view includes a dedicated Guided Path Checkpoints group, and path percentages combine those checkpoints with the existing Theory/Unreal/Designer completions already used by the path.

## Badges

Three meaningful path-completion badges were added:

- **Level Architect** — complete Build a Playable Level
- **Mechanic Maker** — complete Create a Gameplay Mechanic
- **Tabletop Translator** — complete Digital Game → Tabletop

They are derived from existing progress; no badge table or additional cloud write is introduced.

## Homepage rivalry

Signed-in users now see a compact **Class Rivalry — This Week** panel near the top of Home. It shows the top three students by weekly learning XP and, for a student outside the top three, their own current position. It links to the full leaderboard and respects the class leaderboard enabled/paused setting.

## XP parity repair

The audit found that the v3.40 Theory XP SQL file existed in the build but had never been applied to the live Supabase project. Live Theory completions were therefore falling through to the old 100 XP default instead of 25 XP. Designer source tasks would also have fallen through to 100 instead of 20.

Migration `20260831_39_teacher_command_centre_tracking.sql`:

- sets `theory:*` to 25 XP
- sets `designsource:*` to 20 XP
- keeps pathway checkpoints at 0 XP even if accidentally marked as a normal completion
- corrects already-recorded Theory/Designer-source event values
- expands the compact teacher progress RPC to all current learning areas

No new tables are added.

## Network Quiet

The Teacher overview remains one compact progress RPC rather than downloading every completion row for every visible student. Full progress rows are only requested after opening a specific class. The homepage leaderboard uses the existing cached class + leaderboard reads and loads only for signed-in users.
