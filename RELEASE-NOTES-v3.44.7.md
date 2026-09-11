# v3.44.7 — Prison Escape Gameplay + Sequencer Path

The existing Prison Cell guided path now continues beyond materials, lighting and atmosphere into a small playable escape.

## Added to the Prison Cell path

- Grouped gameplay stage: collect the key, check player state and open the locked cell door.
- Grouped cinematic stage: create the escape shot and trigger it beyond the door.
- Optional second-camera cut that does not add another required milestone.
- One integrated proof checkpoint for the complete playable route.

## Improved guides

- **Make a Key Pickup** now gives exact Blueprint names, collision settings, player-owned Boolean logic, Cast wiring, test messages and common fixes.
- **Make a Key and Locked Door** now gives an explicit component hierarchy, DoorHinge setup, overlap route, Branch logic and complete 1.2-second Timeline flow.
- **Create Your First Sequencer Shot** now includes exact current Epic UE5.8 camera and Auto-Key interface references.
- **Trigger a Cutscene & Return to Gameplay** now gives the complete Trigger Box → Level Blueprint → Cast → Do Once → Sequence Player route and the Level Sequence Actor gameplay settings.

## Teaching choice

The core version uses automatic overlap so every student can complete the full gameplay loop before adding another input system. Press-E interaction through Enhanced Input and `BPI_Interact` remains a stretch task.

## Full test route

Locked attempt → collect key → open hinged door → cross exit trigger → play sequence once → regain player control.

## Upload

- `index.html`
- `data/prison-escape-learning.js`
- `RELEASE-NOTES-v3.44.7.md`

This is an additive patch. Existing tutorial IDs, completion records and Prison Cell content remain intact.
