# Hub Rivalry QA — v3.42.1

## Static checks

- PASS — homepage uses `getHubLeaderboard('week')` and no longer fetches a first class.
- PASS — homepage copy says `HUB RIVALRY • THIS WEEK`.
- PASS — full Leaderboard defaults to `Everyone`.
- PASS — existing class filters remain available.
- PASS — class pause control is only rendered for a selected class, never for the global board.
- PASS — backend caches the global RPC for 60 seconds, matching existing leaderboard reads.
- PASS — global SQL deduplicates students across classes.
- PASS — only `student` profiles in non-archived, leaderboard-enabled classes are eligible.
- PASS — teachers cannot appear in rankings.
- PASS — no XP rows are changed by this migration.
- PASS — `app.js` and `backend.js` pass `node --check`.

## Live data sanity check

At release time the live project has 7 qualifying memberships representing 7 distinct eligible students. The global eligibility query therefore produces no duplicates.

## Network Quiet

The homepage now makes one compact `get_hub_leaderboard` RPC rather than loading class metadata and then a class leaderboard. This is equal or cheaper than the previous homepage path.

## Browser note

No claim of a full Chromium visual test is made in this environment. Check the live homepage and Leaderboard page after Render redeploys.
