# UE5 Learning Hub v3.34.4 — Milestone Evidence & Teacher Feedback

## Why
Real classroom use showed that students could submit screenshot-only Project updates because every written field was optional. Teachers could already reply to Project updates, but the control looked like a generic discussion reply rather than assessment feedback tied to milestone evidence.

## Student changes
- Project submissions are now presented as **Milestone Evidence** rather than a generic development-log entry.
- **Written update is required** for every new or edited evidence entry.
- If the project has milestones, the student must choose the milestone the evidence belongs to.
- Screenshots remain optional (up to 6), so text-only evidence is supported as well as text + images.
- The form explicitly explains that milestone, written context, screenshots and feedback stay together.
- Existing screenshot-only records are preserved. Editing one now prompts the student to add written context and a milestone where applicable.

## Teacher changes
- Comments beneath a Project evidence entry are labelled **Teacher feedback** for teacher accounts.
- The reply box is now a multi-line feedback field with a **Send feedback** action.
- Teacher comments are visually identified with a Teacher badge.
- Teacher feedback creates a notification for the student who authored that evidence entry.
- Each evidence card clearly shows the linked milestone; older unlinked entries are flagged as **Not linked to a milestone** rather than being silently ambiguous.

## Technical
- Reuses the existing `project_updates`, `project_media`, `project_comments` and milestone relationships.
- No database migration or RLS change is required.
- Backend validation now rejects a new/edited Project update with no written `what_did` content.
- v3.34.3 class-join database fix remains intact.
