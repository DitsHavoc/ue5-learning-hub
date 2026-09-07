# UE5 Learning Hub v3.39.4 — Network Quiet

## Why this release exists

The Supabase free-plan warning exposed two different problems: historical Project screenshots had created heavy egress during development/testing, and the live Hub still made more small cloud requests than necessary. v3.39.4 is a full-site network-efficiency pass before wider classroom use.

## What changed

- **Routine reads are cached and deduplicated.** Short-lived user-scoped caching prevents rapid SPA rerenders, auth events and route changes from firing identical Supabase reads repeatedly. In-flight requests are shared instead of duplicated.
- **Legacy Project boot traffic is gone.** The old local Signal Lost/practice-project state no longer reads `project_progress` or `student_projects` on every sign-in/startup.
- **News social state is compact.** One RPC returns vote count, comment count, saved state and the current user's vote for the visible story keys. Browsers no longer download individual vote/comment rows just to count them.
- **Saved News is lazy.** Full saved-story metadata is fetched only when it is actually needed rather than on every News feed load.
- **Teacher progress is aggregated server-side.** The main Teacher dashboard receives category totals per student instead of downloading every completed progress row. Class detail loads are scoped to the selected class.
- **Notifications, classes, request counts, Critique feeds and XP summaries reuse fresh reads** rather than repeatedly querying within seconds.
- **Critique signed URLs are reused** for their safe lifetime instead of being regenerated during rapid rerenders.
- **Active uploaded Critique images use long immutable cache headers.** Existing client-side WebP compression, thumbnails and lazy loading remain in place.
- **Retired Project/evidence media is archived, not live.** Storage SELECT policies for the retired systems are removed so stale/old Hub builds cannot continue serving the archived large screenshots. The underlying objects are not deleted.

## Database migrations

- `20260830_35_network_quiet_compact_news.sql`
- `20260830_36_network_quiet_teacher_progress.sql`
- `20260830_37_archive_retired_project_media_reads.sql`

All three are applied to the live Supabase project.

## Deliberately unchanged

No lesson/tutorial/Designer/Modelling content was rewritten. No completion IDs, XP values, badge rules, class membership rules or Critique workflow were removed. Microsoft Teams remains the formal project/submission/assessment home.
