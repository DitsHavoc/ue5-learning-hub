# v3.42.3 — Student Roster Controls

This patch is deliberately built on the restored v3.42.2 site and does not replace `app.js`, `backend.js`, `styles.css`, Game Design Theory, Guided Paths, hub-wide leaderboard work or the newer Teacher Command Centre.

## Added
- A clear **Student Management** panel on detailed Teacher class pages.
- **Move** a student from the current class to another active teaching class.
- **Remove** a student from the current class.
- Existing Teacher dashboard class-member rows gain a move dropdown and clearer Remove button.
- Moving/removing preserves the student's Learning Hub account, XP and completed learning.
- Move uses the existing secured class membership methods; no database migration is required.
- If the destination add succeeds but source removal fails, the move attempts to roll back the destination membership.

## Upload
Upload these files to the repository root:
- `index.html`
- `roster-controls.js`

The release-notes file is optional.
