# UE5 Learning Hub v3.35.1 — Designer Deep Dives + Scroll Restore

## Why this release exists

Designer Studio v3.35.0 made students analyse and test design rather than merely follow Unreal steps. v3.35.1 adds the missing professional voice: students can now hear/read how developers describe the same design problems in shipped games, then bring one decision back into their own build.

It also fixes a navigation annoyance: when a student follows an internal Hub link and uses the browser Back button, the previous route now restores its saved vertical scroll position instead of reopening at the top.

## Designer Studio: HEAR THE DESIGNERS

The learning loop is now:

**LOOK → STEAL THE PRINCIPLE → HEAR THE DESIGNERS → RESEARCH → BUILD → BREAK + TEST → IMPROVE**

Each of the eight design disciplines now contains three curated industry deep dives:

- one directly watchable, click-to-load video;
- two additional talks, interviews, transcripts or developer articles;
- **WHY THIS MATTERS** — why the source belongs in this lesson;
- **WATCH / READ FOR** — the specific decision or trade-off to hunt for;
- **DO SOMETHING WITH IT** — a short action that transfers the idea into the student's own work.

That produces **24 deep dives total**, including Noclip documentaries, GDC material, developer/publisher breakdowns and specialist interviews covering level design, environment art, materials, lighting, terrain, cinematics, audio and optimisation/presentation.

Videos use privacy-enhanced YouTube embeds and only load after the student chooses **Watch here**. An original-source link remains available on every deep dive.

## Navigation repair

Internal Hub route clicks now save the current route and scroll position into that browser history entry. When the browser returns to that same history entry, the Hub restores the saved position after rendering. New routes still start at the top, and existing deliberate preserve-scroll updates continue to retain the current position.

## Compatibility

- No Supabase/database migration.
- No progress IDs changed.
- No Designer Studio completion IDs changed.
- Existing v3.35.0 modules, case studies, research missions, recipe placements, Studio Builds and Black Box briefs are retained.
