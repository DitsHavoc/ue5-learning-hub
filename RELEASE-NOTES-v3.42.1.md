# UE5 Learning Hub v3.42.1 — Hub Rivalry

The homepage rivalry card previously selected the first leaderboard-enabled class available to the signed-in user. That made `Who is making moves?` look fixed and meant different students could see different competitions.

v3.42.1 makes the homepage board Hub-wide:

- everyone in an active, leaderboard-enabled class competes together;
- each student is ranked once even if they belong to several classes;
- teachers are never included in rankings;
- weekly XP remains the default homepage score;
- a signed-in student outside the top three sees their own Hub-wide position;
- the full Leaderboard page now offers `Everyone` plus the existing class filters;
- teachers can still pause individual class leaderboards.

The global board is calculated server-side by one compact RPC and cached by the existing frontend read cache. It does not fetch and merge every class leaderboard in the browser.

## Database

`migrations/20260831_40_hub_wide_leaderboard.sql` has already been applied to the live Supabase project. It is included in the release so repository/database history stays reproducible. No tables or existing XP events are changed.
