# UE5 Learning Hub v3.35.3 — Designer Landing Cleanup

## What changed

Designer Studio no longer pauses the student journey with two landing-page panels that did not add enough value.

- Removed **Design Roulette** from the Designer landing page. The actual 24 constraint challenges are still present inside their relevant design disciplines, where they have context and a purpose.
- Removed the **3D Modelling Studio** bridge from the Designer landing page. 3D Modelling remains a first-class area in its own navigation and is still linked where asset creation is genuinely relevant.
- Removed the unused aggregate roulette data, its click handler and landing-only styling.
- Kept the **Resource Library** bridge because it directly supports design research, references, sound and prototype assets.

## Result

The landing flow is now tighter:

**Design loop → Resource Library (when needed) → choose a design discipline → case studies / designer deep dives / research / build / test / improve.**

No database migration is required and no progress/completion IDs changed.
