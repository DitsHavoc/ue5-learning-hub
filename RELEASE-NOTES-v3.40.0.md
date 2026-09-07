# UE5 Learning Hub v3.40.0 — Game Design Theory

## New major learning area

Adds a first-class **Game Design Theory** area alongside Unreal Learning, Designer Studio and 3D Modelling.

### 24 theory lessons / 6 paths

- Design Foundations
- Player Decisions
- Systems & Balance
- Player Experience
- Space & World
- Design Process

Topics include core gameplay loops, MDA, game pillars, abstraction, player agency, meaningful choice, risk/reward, randomness, feedback loops, economies, balance, progression, difficulty, game feel, pacing, onboarding, accessibility, affordances, guidance, environmental storytelling, emergence, scope, prototyping, playtesting and videogame-to-tabletop adaptation.

### Classroom Board Game Lab

A prominent pre-design activity asks students to play one of the physical board games available in class before committing to their own board-game design. Students observe turn loops, decisions, randomness, interaction, rule clarity, resource pressure and component communication.

### Theory lesson pattern

Each lesson uses:

**Understand → See it → Try it → Quiz → Apply**

Lessons include:

- concise theory explanation
- visual system diagram
- real-game examples where a genuine example improves the concept
- common design traps
- short practical classroom task
- evidence prompt and stretch task
- professional/original further-reading links
- three scenario-based quiz questions

### XP and progress

- Theory completion uses the existing `lesson_progress` system.
- First successful pass of each Theory quiz completes `theory:<lesson-id>`.
- Migration `20260831_38_game_design_theory_xp.sql` maps Theory completions to **+25 XP**.
- 24 lessons = **600 XP available**.
- No new database tables.
- Existing one-time XP-event behaviour is preserved.
- Theory completion appears in My Progress and teacher class-detail progress.
- Two badges added: **Design Analyst** (6 Theory lessons) and **Systems Thinker** (all Theory lessons).

### Revision and search

- Theory lessons are indexed by global search.
- All Theory scenario questions feed the existing Revision Quizzes area.
- Revision can be focused specifically on Game Design Theory or mixed with Unreal / Designer / 3D content.

## Safety / preservation

Built on the authoritative **v3.39.4 Network Quiet FULL** with the later homepage/Noclip hotfix overlaid first.

No project/evidence systems were restored. No new routine cloud reads were added. Existing v3.39.4 caching and network-quiet behaviour is preserved.
