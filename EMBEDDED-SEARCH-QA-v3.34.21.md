# Embedded Search QA — v3.34.21

## Covered areas
- Quick Tutorials
- Epic Paste Assists
- Glossary
- News & Industry

## Event coverage
Each embedded search now supports:
- live `input`
- native `search`
- `change`
- `compositionend` for IME/mobile text entry
- explicit Enter/Search-key handling

## Quick Tutorials
- Filters the consolidated recipe-family grid.
- Hides the unchanged Featured section whenever text/category filtering is active.
- Updates family count.
- Shows a no-results message at zero matches.
- Enter applies the filter and reveals the first result.

## Epic Paste Assists
- Token-based multi-word matching against each assist's search metadata.
- Category filtering remains compatible.
- Updates visible assist count.
- Shows a no-results message at zero matches.
- Enter applies the filter and reveals the first result.

## Runtime harness
A Node DOM stub evaluates the actual v3.34.21 search-binding functions extracted from `app.js` and verifies:
- `ai chase` returns one Quick Tutorial family in the fixture.
- non-matching Quick Tutorial searches produce the empty state.
- `enemy death` returns one Epic assist in the fixture.
- non-matching Epic searches produce the empty state.
- Enter is prevented from doing nothing/submitting accidentally and reveals the first match.

This is a targeted runtime harness, not a full browser test.
