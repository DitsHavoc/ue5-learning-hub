# v3.32.4 Rich Project Brief QA

- `app.js` syntax: PASS
- `backend.js` syntax: PASS
- Minimal changed live-site files vs v3.32.3: 4
- Legacy plain-text brief fallback: implemented
- Render-time rich-text sanitiser: implemented
- Allowed formatting: paragraph, H2, H3, strong/bold, emphasis/italic, UL, OL, LI, blockquote rendering, HTTP/HTTPS links
- Unsupported/dangerous elements dropped/unwrapped: implemented
- Dashboard cards: plain-text excerpt, preventing raw HTML or oversized cards
- Project/template detail pages: full rich rendering
- Create/edit forms: rich editor with hidden sanitised form value
- Visible-character limit: 6,000
- Database migration: NOT REQUIRED
- Chromium full visual automation: not claimed
