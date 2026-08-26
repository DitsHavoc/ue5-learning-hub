# UE5 Learning Hub v3.24.0 — Player Card + Badge Cabinet

**Build date:** 26 August 2026  
**Database migration required:** No  
**Deploy target:** Existing GitHub/Render site and existing Supabase project

## Purpose

This is a focused fun-and-polish release. It keeps the teaching experience serious while making progress feel more personal and rewarding. It also removes one layer of Home-page density introduced in v3.23.

## Home

The landing page now ends with just two student-facing cards:

- **Next Mission** — next lesson, path progress, XP reward and progress toward the next badge.
- **Player Card** — avatar, rank, current level, XP progress, pinned badge and key completion totals.

The old extra “Today’s learner route” Home card is removed because the lesson itself already explains the core four-step route.

## Badges

Achievements now feel more like a proper game-system layer without becoming meaningless gamification:

- Common / Uncommon / Rare / Epic / Legendary presentation.
- Dedicated **Badge Cabinet** on My Progress.
- Any unlocked badge can be pinned to the player card.
- Badge unlocks get a stronger toast notification.
- Next Mission shows progress toward a useful next badge.

No streaks, random daily rewards or competitive leaderboards were added. The rewards still correspond to real learning milestones.

## Technical

- No Supabase migration.
- Existing cloud accounts/classes/projects/evidence/news remain unchanged.
- Avatar and pinned-badge preference is stored locally.
- Cache/version references updated to **v3.24.0**.
- News cache namespace: `ue5hub:v324:news-cache`.
