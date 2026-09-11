# UE5 Learning Hub v3.36.0 — Critique Board + Learning XP

## What changed

The Hub now has a **Critique Board** at `#/critique`: a private, class-scoped studio wall for work in progress. It is intentionally separate from Teams and the Hub's project/evidence systems. Students post a screenshot and a specific question while work is still changeable; classmates respond with structured critique; the author can later add an improved **After** image.

### Critique Board
- persistent sidebar entry with an actionable count of posts that still need *this user's* feedback
- class selector for students/teachers who belong to more than one class
- screenshot upload: PNG, JPG or WebP, maximum 8 MB
- focused question plus optional title/design area
- filters for All, Needs feedback and My work
- **Give me something to critique** chooses among the least-reviewed eligible posts and skips work already reviewed by the current user
- three-part critique: What works? / What could be clearer? / One change I'd try
- two responses is the board's target before a post leaves the Needs feedback state
- post authors can add/replace an improved screenshot for a Before/After view
- teachers can remove inappropriate posts or feedback
- new critique generates a Hub notification for the post author

### XP
- meaningful student critique awards **15 XP**
- only the first **3** rewarded critiques per Europe/London day award XP; feedback remains open after the cap
- each student/post pair can only receive the critique reward once
- server-side validation requires all three critique fields and a minimum useful length; client validation mirrors it
- existing first-activity-of-the-day bonus remains separate, so the visible XP total may also gain the normal +5 daily bonus when applicable
- each of the 24 Designer industry deep dives now has **Watched/read + did the task — +20 XP** completion
- source completion is stored as `designsource:<module>:<NN>` in existing `lesson_progress`, preserving the established cloud/local completion model
- teachers can see industry-source completion in class progress

## Database/security
Live migrations applied 29 Aug 2026:
- `20260829_28_critique_board_and_learning_xp.sql`
- `20260829_29_critique_rpc_anon_hardening.sql`
- `20260829_30_critique_feedback_quality_floor.sql`

The Critique Board uses class-scoped RLS and a private `critique-media` Storage bucket. New public RPCs are SECURITY DEFINER only where needed to return limited classmate display information without opening the full profiles table; anonymous EXECUTE was explicitly revoked. A rollback-only authenticated-role QA transaction verified peer post access, structured feedback insertion, feed visibility and XP reward behaviour without leaving test rows behind.

## Unchanged
- Teams remains the formal assignment / submission / grading system.
- Existing Projects, evidence, teacher feedback, XP, leaderboard, Supabase auth/classes and progress systems remain in place.
- Existing Designer Studio case studies, challenges, deep dives, embeds and Resource Library remain intact.
- No existing completion ID was renamed.

## Browser validation
Static/source validation is included with the release. Do not treat that as full browser interaction testing unless a real browser run is recorded in `CRITIQUE-BOARD-QA-v3.36.0.md`.
