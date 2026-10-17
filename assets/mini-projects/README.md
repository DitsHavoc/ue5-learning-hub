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

## Why the binary file is staged separately

The teaching, routing and QA code is in PR #15. This file is a directory placeholder; the ZIP itself is **not committed yet**, because this GitHub integration only exposes UTF-8 source-file writes and accepts binary blob uploads only when their complete base64 data is supplied.

Do not add a public download button until the archive is actually hosted. The Mini-Projects pages first test the archive via HTTP HEAD; if it is missing, they give the student a Teams-based fallback instead of a broken link.

**GitHub upload:** switch to branch `feature/mini-projects-v3.63.0`, navigate to `assets/mini-projects/`, select **Add file → Upload files**, drag the supplied `Assets.zip` into the page and commit **to that branch** (not main). GitHub will store the exact binary.

After the upload:
1. Confirm the new GitHub file's size/hash and direct download.
2. Run `node scripts/validate-content-placement.cjs` and the Mini-Projects browser suite.
3. Merge PR #15 when authorised, verify Render deploys the new SHA, and test `https://ue5-learning-hub.onrender.com/assets/mini-projects/Assets.zip` returns HTTP 200.
