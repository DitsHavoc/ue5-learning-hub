# UE5 Learning Hub v3.49.0 — Find Your Place

**Build date:** 9 September 2026  
**Area:** Level 4 • Games Industry & Careers  
**Database migration required:** No

## Purpose

Adds a complete Level 4 **Find Your Place in the Games Industry** theory pathway designed to run in tandem with the live Assignment 1 presentation.

The presentation remains the delivery spine. The Hub handles the parts that become stronger when students investigate, choose, reflect, test themselves and save evidence.

**Live rhythm:** Teach → Industry Story → Discuss → Hub Checkpoint → Save Evidence → Scenario Check.

## Added

### Seven linked chapters
1. **The Industry** — credits archaeology, co-development, UK clusters and studio ecosystems.
2. **The People Who Make Games** — role explorer built around professional problems, collaborators, hard skills, soft skills and portfolio evidence.
3. **You as a Games Developer** — work-style reflection, hard/soft skills evidence audit and peer reality check.
4. **Careers Are Not Straight Lines** — predictive career-story activities using real routes into games.
5. **Reality Check** — specific target role, three live vacancy snapshots and Green / Amber / Red skills-gap analysis.
6. **Prove It** — role-aware targeted portfolio challenges tied directly to employer requirements.
7. **My Career Plan** — measurable 6 / 12 / 24-month plan plus a copyable Assignment 1 starter summary.

### Real industry stories and professional sources
- Sumo Digital co-development.
- Bullfrog / Guildford studio lineage.
- Dundee / DMA Design.
- Hades / Supergiant Games.
- Tiffany Wild — Gameplay Programming.
- Kristrun Fridriksdottir — Technical Art.
- QA professional practice.
- Narbacular Drop → Portal.
- Mel Cummings' non-linear route into Concept Art.
- The Forgotten City mod-to-standalone route.
- Current UK career resources including UK Games Map, ScreenSkills, Into Games, GIDB, Games Jobs Direct and Work With Indies.
- Current Into Games role URLs and all four embedded Noclip video IDs were rechecked during release QA.

### Embedded/watch material
Video cards use the existing click-to-load, privacy-aware YouTube embed pattern rather than autoplay. Noclip material is placed at the chapter where it answers a specific teaching question.

### Interactive career profile
Students progressively save:
- role reactions
- work-style signals
- hard-skill evidence
- soft-skill evidence
- peer feedback
- target role
- three vacancy snapshots
- Green / Amber / Red requirements
- biggest current gap
- portfolio challenge and scope cut
- 6 / 12 / 24-month goals

The work-style activity is explicitly framed as **reflection rather than personality-based career allocation**. MBTI/16-type results can be discussed, but the Hub does not store or use a personality label to recommend jobs.

### Meaningful completion gates
A chapter does not complete just because it was opened. Students must save the chapter checkpoint and pass a five-question scenario check at **80% (4/5)**.

Examples:
- **Industry:** save a credits investigation and UK cluster analysis.
- **People:** react to at least three real roles.
- **You:** complete work-style reflection, evidence at least one hard and one soft skill, and save peer feedback.
- **Career Routes:** make at least one career-story prediction and save a personal lesson.
- **Reality:** choose a role, save three vacancy snapshots and identify at least one RED requirement.
- **Prove It:** choose a challenge, name the employer requirement it proves and deliberately cut scope.
- **Career Plan:** complete all three time horizons.

### Scenario checks
Each chapter contains five applied questions. The checks focus on production judgement rather than simple definition recall. Passing a chapter awards **25 XP once** using the existing theory-completion mechanism.

### Teacher class view
The existing teacher class dashboard now includes a **Live Level 4 Career View** showing, per student:
- chapter completion
- current target role
- strongest work-style signal
- biggest RED gap
- selected portfolio challenge

This is intended as a live classroom control panel rather than an additional assessment system.

### Search and navigation
- New sidebar entry: **Industry & Careers**.
- Prominent bridge from Game Design Theory.
- Career chapters and roles appear in site-wide search.
- Every chapter displays the matching presentation slide range so the live deck and Hub remain synchronised.

## Cloud / progress behaviour
- Chapter completions use existing `lesson_progress` IDs in the form `theory:industry-<chapter>`.
- Career profile evidence is stored in an existing `lesson_progress` row with `lesson_id = 'career:profile'`, `completed = false`, and the profile JSON in the existing `quiz` column.
- The existing RLS policies allow students to read/write their own row and assigned teachers to read student progress.
- Routine progress reads remain lean: normal rows do not fetch `quiz` JSON; only the single `career:profile` row does. The teacher class view uses the same split-read pattern to protect the earlier Network Quiet work.
- The synthetic career-profile row does **not** trigger completion XP because `completed` stays false.
- No new tables, columns, policies or migrations are required.

## Files changed
- `index.html`
- `app.js`
- `backend.js`
- `industry-careers.css` **new**
- `data/industry-careers-data.js` **new**

## Deployment
Apply the v3.49.0 minimal ZIP over the current **v3.48.3** site root and deploy normally. Existing IDs and student progress are preserved.
