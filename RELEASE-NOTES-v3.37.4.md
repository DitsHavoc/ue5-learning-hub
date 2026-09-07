# UE5 Learning Hub v3.37.4 — Tyre Workflow Correction

The Simple Game Tyre Build X has been rebuilt because the previous tyre visuals/workflow were not representative enough of how the asset should actually be constructed.

The corrected student path is:

1. Start with a restrained Torus body and judge radial density by silhouette.
2. Shape the torus cross-section into a tyre: flatter tread crown, rounded shoulders and believable sidewalls.
3. Model one low-poly tread tile as a separate object.
4. Use Array to create an exact straight repeated strip.
5. Bend the strip 360 degrees around the wheel with a recoverable modifier stack.
6. Fit the tread ring into the tyre crown and inspect the final mesh in Edged Faces.

This keeps the tyre body clean and teaches repetition/modifier-stack thinking instead of extruding random tread directly from the base mesh. Tiny grooves, siping and sidewall lettering are reserved for texture/normal detail unless they affect silhouette.

Visual policy remains strict: one modelling stage = one close-up Max-style viewport image. Rejected generated tutorial-page/UI images are not included.

Existing Build X ID `build-tyre` is unchanged. No database migration is required.
