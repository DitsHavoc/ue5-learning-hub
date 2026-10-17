# Mini-Projects course assets

Place the **original, unmodified** `Assets.zip` here.

The content was provided by the course rights-holder and validated locally.

## Verified archive
- Expected file: `assets/mini-projects/Assets.zip`
- ZIP SHA-256: `722fa6ec2012600e342b7426bae6b405fce866513a215490c69c0ed9ebaf0ef5`
- Expected size: 59,165 bytes
- Archive entry `Assets/Balloon Popper/BalloonModel.fbx` (32,416 bytes)
- Archive entry `Assets/Balloon Popper/BalloonModel.obj` (48,338 bytes; legacy alternative)
- Archive entry `Assets/Bowling/BowlingPin.fbx` (31,788 bytes)

The PDF explicitly recommends **BalloonModel.fbx** for Unreal 5.6 and newer. There is no BowlingBall FBX in this ZIP: build the ball using the built-in Unreal sphere mesh.

## Hosted student download

The original unmodified `Assets.zip` is committed to this branch in this folder.
The Mini-Projects Build pages show the student download only after the hosted
archive responds successfully to an HTTP HEAD request; a Teams fallback remains
for an unavailable file or temporary network failure.

## Release checks

1. Check the archive SHA-256 matches the value above and the actual 59,165-byte download opens.
2. Verify all 320 illustrations are hosted under `images/` and appear with their matching original PDF source-page instructions.
3. Pass the Mini-Projects desktop/mobile Chromium suite and existing route/content tests.
4. Merge PR #15 only when green, then verify Render deploys the **actual merge commit** and live downloadable assets return HTTP 200.
