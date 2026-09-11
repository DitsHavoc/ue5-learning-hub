# Instruction QA — v3.31

## Teaching-flow checks
- UE core lessons using the prescriptive route: 20/20
- Programming/design Quick Tutorials with the current recipe route: checked through the shared renderer
- 3ds Max scaffold lessons using the straight-through route: 12/12
- Build X projects using the straight-through route: 8/8
- Visible pinned starter-value/prep list: removed
- Separate competing first-build walkthrough: not rendered
- Weak support-step matches: rejected below the confidence threshold rather than force-mapped
- Why line: always present (matched teaching reason or instruction-specific fallback)
- Check line: always present (matched visible/check result or safe sequential fallback)
- Recovery: shown only when useful and collapsed by default

## Why the support matching changed
v3.30 had exact student recipes with different step counts from older detailed walkthroughs. For example, UE core recipes commonly had 8 exact steps while the older detailed support had 6. Quick Tutorials commonly had 6 exact steps while their older support had 4–5.

The previous renderer tried to infer alignment partly from position. That could attach a technically correct explanation to the wrong exact action.

v3.31 searches all support steps by content instead. If there is not a strong enough match, it does not borrow the old explanation.

## Technical checks
Run before packaging:
- JavaScript syntax checks
- data-file syntax checks
- local asset-reference scan
- ZIP integrity
- clean extraction and recheck

Automated Chromium visual testing remains environment-dependent; do not claim it passed if the runner hangs.
