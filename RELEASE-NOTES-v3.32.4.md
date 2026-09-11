# UE5 Learning Hub v3.32.4 — Rich Project Briefs

## What changed

Project/template briefs now support a deliberately small rich-text format:

- Paragraphs
- H2 and H3 headings
- Bold and italic text
- Bulleted lists
- Numbered lists
- Web links
- Line breaks

The editor is WYSIWYG/contenteditable with a compact toolbar. Existing plain-text briefs remain readable and can be opened in the editor and formatted without a data migration.

## Where rich text appears

- Teacher project-template creation
- Teacher project-template editing
- Teacher template detail/hero
- Student Available Project briefs
- Started project detail/hero
- Student-created project descriptions
- Project settings editing

Small project/template cards intentionally show a plain-text excerpt so long briefs do not destroy the dashboard layout.

## Safety

Rich text is sanitised every time it is rendered. The allow-list is intentionally small and strips unsafe/irrelevant markup and attributes. Links are limited to HTTP/HTTPS URLs and open with `noopener noreferrer`.

Pasted styling is cleaned when the brief is saved; only supported semantic formatting remains.

## Compatibility

- Existing plain-text project/template descriptions are backwards compatible.
- No database migration is required: existing `text` fields store the sanitised HTML string.
- The client enforces a 6,000 visible-character limit. Raw storage allowance is higher to account for formatting tags.

## Minimal update from v3.32.3

Replace only:

- `app.js`
- `backend.js`
- `styles.css`
- `index.html`
