# UE5 Learning Hub — Industry Reality Check QA
## v3.49.2

**Result: STATIC / DATA QA PASS**

## Code checks

- `app.js`: Node syntax PASS.
- `data/industry-careers-data.js`: Node syntax PASS.
- `industry-careers.css`: balanced braces PASS.
- Seven unique reality-check IDs.
- Every reality check has a valid answer index.
- Every reality check has one feedback entry per option.
- Every reality check has a named real-world evidence source.
- One two-stage non-graded Industry Debate is present.
- Student click handlers exist for reality checks and both debate stages.
- Student form handlers exist for the industry-belief reflection and debate reasoning.
- Teacher class pulse reads already-loaded career-profile JSON; no backend query added.

## Persistence behaviour

Responses are stored inside the existing `career:profile` JSON row:

- `industryBeliefs[questionId].choice`
- `industryBeliefs[questionId].correct`
- `industryBeliefs[questionId].at`
- `industryBeliefReflection`
- `industryDebate.before`
- `industryDebate.after`
- timestamps for both debate positions
- `industryDebate.reflection`

The first response to a reality-check question is intentionally immutable in the UI. This protects the value of the activity as a record of initial assumptions.

## Source / factual spot checks

Checked before release against the linked evidence:

- GDC Vault: Supergiant / Hades — fewer than 20 employees and more than 22,000 voiced dialogue lines.
- Embracer Group 2023/24 Annual Report — 1,583 cumulative headcount reduction during the restructuring programme.
- State of Rhode Island bond disclosure — $75m 38 Studios financing and Chapter 7 bankruptcy on 7 June 2012.
- Kotaku 2021 Skull and Bones investigation — development began in 2013 as a Black Flag multiplayer expansion; reported cost above $120m by 2021. The Hub explicitly labels the cost as reported by sources, not an Ubisoft financial disclosure.
- Ars Technica / Rockstar clarification — the specific RDR2 100-hour claim referred to a four-person senior writing team for three intense weeks; wider crunch reporting is presented separately.
- The Guardian GoldenEye retrospective — core team described as 12 young people.

## Network / bandwidth regression check

- No new Supabase table or migration.
- No new Supabase fetch in student view.
- No new Supabase fetch in teacher view.
- No storage assets added.
- No autoplay video.
- External case-source links load only when opened.

## Browser limitation

As with v3.49.0/v3.49.1, the build environment cannot perform a normal interactive browser click-through because local navigation is administrator-blocked. This QA therefore covers syntax, data, wiring, persistence design and source accuracy rather than claiming visual/runtime browser proof.

Recommended post-deploy smoke test:
1. Student opens `#/industry-careers/industry`.
2. Click one Reality Check answer; confirm reveal appears and first answer becomes locked.
3. Reload; confirm answer/reveal persists.
4. Complete the first Magnum Opus vote; confirm second-stage context appears.
5. Teacher opens the class; confirm aggregate Class Pulse reflects the saved response.
6. Confirm existing chapter quiz still accepts input before or after the main Hub checkpoint.
