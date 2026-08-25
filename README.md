# UE5 Learning Hub v3.3.0

V3.3 adds the most important classroom-management features without changing the core Learn → Prove → Build model.

## New in V3.3

- **Evidence submissions** on every lesson/game mechanic
- screenshot / WebP / JPG / PDF uploads (private Supabase Storage, max 10 MB)
- optional external evidence/build/video link
- student reflection
- teacher **Approve** / **Needs changes** workflow
- teacher written feedback
- submitted evidence locks while waiting for review
- approved evidence remains part of the student's progress record
- **My Progress** dashboard
- evidence tracker across all 20 mechanics
- achievements for meaningful milestones
- in-app notifications for feedback and request-board status changes
- **class groups** managed by teachers
- teacher overview now compares lessons, game mechanics and approved evidence
- Microsoft SSO is still intentionally disabled pending college approval

## Current backend

Supabase project is live in `eu-west-2`.

Security advisor was clean immediately after the V3.3 migration.

## Important distinction

A student can still mark a lesson/game mechanic complete locally.

**Evidence approval is the stronger teacher-facing measure of demonstrated practical work.**

## Hosting

The frontend remains static and hosting-neutral. See `SELF-HOSTING.md`.

## Version badge

`UE5 HUB v3.3.0 • BACKEND READY`

until Microsoft SSO is approved and enabled.
