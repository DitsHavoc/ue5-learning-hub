# Game Design Theory QA — v3.40.0

## Static validation completed

- `app.js` syntax checked with Node.
- `backend.js` syntax checked with Node.
- `data/theory-data.js` syntax checked with Node.
- 24 unique Theory lesson IDs.
- 6 valid Theory path IDs.
- Every lesson has exactly 3 scenario questions.
- Every quiz correct index resolves to a valid option.
- Every lesson has at least one further-reading source.
- Theory routes are added to the router and sidebar.
- Theory lessons are added to global search and Revision Quizzes.
- Local progress migration includes `theory:` completion IDs.
- Teacher class detail includes Theory counts and exact completed lesson list.
- No new database table or routine progress read was introduced.

## Database action

Apply `migrations/20260831_38_game_design_theory_xp.sql` before/with deployment so Theory completions award 25 XP instead of the generic fallback value.

## Browser QA

Do a short live check after upload:

1. Open **Game Design Theory** from sidebar and homepage.
2. Search/filter Theory lessons.
3. Open one lesson and verify the game reference image / source links.
4. Pass a quiz and confirm +25 XP once.
5. Retake the quiz and confirm no second XP award.
6. Check My Progress.
7. Check Teacher → Class detail for Theory completion.
8. Check Revision Quizzes → Game Design Theory.
9. Check global search for “agency”, “MDA”, “playtesting” and “board game”.
