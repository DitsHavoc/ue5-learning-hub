# v3.44.5 — Real Blueprint Classroom Screenshot Pass

Built from the exact current live v3.44.4 index and v3.44.3 Blueprint patch on GitHub main.

## Upload / replace
- `index.html`
- `data/blueprint-foundations-learning.js`
- `cheatsheet.html`
- `cheatsheet.css`
- `blueprint-checks.html`
- `blueprint-checks.css`
- complete new/updated files inside `assets/tutorials/blueprint-foundations/`

`blueprint-checks.js` is unchanged functionally, but can remain from v3.44.4.

## What changed

### Exact Object Reference visuals
The old generic Third Person reference image is replaced in the Blueprint lab with the real:
- BP_LabTarget Object Reference variable
- Pick Actor from scene / eyedropper assignment screenshot

### Correct Branch graph
The DATA → TEST → DECISION visual now uses the corrected:
KeysOwned >= KeysRequired → Branch
without the accidental addition node.

### Real custom ApplyDamage Function
The Function lab now shows the complete custom workflow:
- custom Function entry
- DamageAmount input in Function Details
- calculation inside the Function
- Function call node

The caption accurately notes that the classroom capture uses an Integer DamageAmount while the teaching lab uses Float. The programming structure is the lesson, not the pin type.

### Structs
ST_ItemData now has real visuals for:
- creating a Structure asset
- ST_ItemData asset
- DisplayName / Value / Weight / IsQuestItem fields
- selecting ST_ItemData as a variable type
- seeing Struct fields together in a variable Default Value

### Maps
AmmoByType now has real visuals for:
- selecting Map container
- Name → Integer configuration
- Pistol → 12 / Shotgun → 4 defaults
- finding the Map Find node
- Find with Pistol as the key

The text now explicitly teaches:
- Name is the key in the beginner example
- Integer is the value
- Structs such as ST_ItemData are better used as Map values (e.g. Name → ST_ItemData) rather than trying to use the Struct as the key

### Building Blocks
The new real images also appear on the related Building Blocks:
- Branches / Switches
- Object vs Class References
- Functions / Events
- Structs
- Arrays / Sets / Maps

### UE5 Cheat Sheet
Added a compact **Real Classroom UE5 Captures** visual strip for:
Branch, Object Reference, custom Function, Struct, Map and Find.

### Blueprint Checks
Added a small visual refresher strip that links back to the real screenshot section rather than cluttering the quiz itself.

## Still optional later
A single clean final access-control system graph would be nice as a finished-system reference, but it is no longer a blocker. The concept visuals are now covered.

## Safety
No changes to:
- app.js
- backend.js
- Supabase
- roster controls
- original course/tutorial/pathway data files
- Prison Cell patch
- sitewide visual CSS
