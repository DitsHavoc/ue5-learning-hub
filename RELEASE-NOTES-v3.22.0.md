# UE5 Learning Hub v3.23.0 — Fun Profile, Favicon & Flow Polish

**Build date:** 26 August 2026  
**Database migration required:** No  
**Deploy target:** Existing GitHub/Render site and existing Supabase project

## Why this release exists

After the big instruction-quality pass, the next sensible layer was learner motivation and clarity. This release adds a stronger site identity, lightweight fun profile features, and simpler lesson guidance so the Hub feels more personal without becoming childish or distracting.

## What is new

- **Browser/favicon identity** using the supplied purple mark.
- **Avatar Studio** in the account area with icon and colour choices.
- **Rank title + recent badges** surfaced on the dashboard and account modal.
- **Today’s learner route** card on Home to keep the flow obvious.
- **Lesson flow callout** plus grouped lesson navigation to reduce the feeling that all 11 lesson sections are equally compulsory.

## Lesson UX change

Lessons are still fully detailed, but the side navigation is now grouped into:

1. **Do these first**
2. **Extend if asked**
3. **When stuck**
4. **Submit & reflect**

This keeps the strong content structure while making the journey feel clearer to weaker or less confident students.

## Technical notes

- No Supabase schema changes are included.
- Avatar choices are lightweight client-side personalisation.
- Existing accounts, classes, projects, evidence, teacher feedback and news social features remain unchanged.
- Cache/version references updated to **v3.23.0**.
- News cache namespace updated to `ue5hub:v323:news-cache`.

## Recommended smoke test

After deployment, check:

1. Browser tab/favicon loads correctly.
2. Home shows the new profile and learner-route cards.
3. Account modal shows Avatar Studio and badge strip.
4. Changing avatar icon/colour updates the top-right account button.
5. A lesson page shows grouped navigation and the simple flow callout.
6. Existing sign-in, Projects, Progress and News still behave normally.
