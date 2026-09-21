# UE5 Learning Hub v3.33.1 — News Refresh Fix

## Fixed
- Manual **News & Industry → Refresh** now bypasses both the Learning Hub local cache and stale upstream RSS proxy URL caches.
- Feed requests use shared time-bucket URLs so normal visits can receive newer source data without creating a unique upstream URL for every page load.
- Normal news cache reduced from 20 minutes to 10 minutes.
- Refresh status now reports how many genuinely new stories were found, how many sources responded, and the refresh time.
- If an RSS source rejects the cache-busting query parameter, the Hub falls back to that source's canonical feed instead of dropping it.

## Scope
- No database migration.
- No layout changes.
- News save, vote and discussion behaviour unchanged.
