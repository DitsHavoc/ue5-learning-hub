# UE5 Learning Hub v3.47.0 — Classroom Identity

## Purpose
This release responds directly to student feedback that the Hub looked like a generic AI-generated dashboard.

The content and systems underneath remain the same. The presentation has been changed to feel like a maintained classroom tool / studio wiki.

## Visual changes
- flat charcoal interface
- reduced gradients, glow and large rounded cards
- smaller, more functional headings
- rectangular controls and labels
- text-first sidebar with compact course codes instead of decorative emoji
- homepage learning areas presented as practical course modules
- fewer pills/chips on the homepage
- real screenshots remain visually important
- classroom-use strips added to major learning pages

## Human course identity
Home now states:
- built for our Games Development classes
- maintained by Dits
- changed from student feedback
- uses real Unreal / 3ds Max captures

A new `about-hub.html` explains openly:
- why the Hub exists
- who makes the teaching decisions
- how student feedback changes it
- where AI-assisted coding/drafting has been used
- that course staff remain responsible for checking and approving the resource

## Signup fix included
The student signup issue seen in class is also addressed:
- Create Account now shows a visible working state
- errors appear inside the signup modal
- rate-limit, existing-account, invalid-class-code and network messages are clearer
- the normal toast is no longer hidden behind the modal

## Sculpt Playground
The retired Sculpt route is still required as compatibility data by the current core `app.js`, but v3.47 removes any visible `#/sculpt` link it encounters and redirects an old Sculpt bookmark to 3D Modelling.

## Safety
No changes to:
- app.js
- backend.js
- roster-controls.js
- Supabase schema
- Class Focus database
- Prison Cell
- Prison Escape
- Blueprint Foundations
- Advanced Blueprint content
- XP/progress data
