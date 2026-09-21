# 3D Modelling Video Series QA — v3.38.1

## Content
- 14/14 Google Drive video IDs present.
- Order is contiguous 0–13.
- 4 course groups present.
- Every video has a Drive view URL, Drive preview embed, WATCH FOR prompt and DO IT IN MAX task.
- Every related Modelling lesson ID resolves to an existing lesson.
- No MP4 is bundled locally.

## Progress / XP
- Local state includes `modelVideoCompleted`.
- Cloud sync reads/writes `modelvideo:*` through the existing lesson-progress mechanism.
- Global XP total includes 20 XP per video task.
- Teacher class-progress view includes the 14 video tasks.
- Live Supabase mapping verified: model video 20 XP; theory chapter remains 20 XP; Build X remains 250 XP.

## Security / embedding
- `safeVideoEmbed` accepts only the existing Epic/YouTube embed forms plus `https://drive.google.com/file/d/<safe-id>/preview`.
- Arbitrary Drive pages and arbitrary iframe URLs remain blocked.
- Drive players load only after the user presses Watch in Hub.
- Source Drive files were private at integration time; student playback depends on source sharing permissions.

## Preservation
- Existing 12 modelling lesson IDs unchanged.
- Existing 8 Build X IDs unchanged.
- Existing 6 Fix Clinic IDs unchanged.
- Existing Module 0 IDs and Model Doctor completion unchanged.

## Static validation
- 14 root/data JavaScript files syntax-checked with Node: pass.
- CSS parsed with `tinycss2`: 0 parse errors.
- 112 direct local image/media references checked: 0 missing.
- 187 literal internal hash-route references checked: 0 unknown top-level routes.
- Video data validation: 14 videos, contiguous order 0–13, 4 groups, 0 unresolved related-lesson IDs, 0 invalid Drive preview URL shapes.

## Browser smoke-test note
A local Chromium headless smoke test was attempted against the packaged site. Chromium hung in this container with DBus/zygote environment errors, so this release does **not** claim a successful browser visual/runtime pass.
