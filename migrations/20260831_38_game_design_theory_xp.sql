-- v3.40.0 — Game Design Theory XP
-- Keeps the existing learning XP map and adds one-time +25 XP for completed Game Design Theory lessons.

create or replace function private.learning_xp_for_id(p_lesson_id text)
returns integer
language sql
immutable
set search_path = pg_catalog
as $function$
  select case p_lesson_id
    when 'editor' then 100
    when 'actors-components' then 120
    when 'blueprint-classes' then 130
    when 'events' then 140
    when 'variables' then 150
    when 'branches' then 160
    when 'functions' then 180
    when 'framework' then 200
    when 'references-casting' then 210
    when 'interfaces-dispatchers' then 240
    when 'collision' then 180
    when 'traces' then 230
    when 'timelines' then 220
    when 'ui' then 230
    when 'savegame' then 230
    when 'data' then 260
    when 'ai' then 280
    when 'animation' then 260
    when 'practice' then 220
    when 'complexity' then 220
    when 'chapter:foundations' then 250
    when 'chapter:blueprints' then 300
    when 'chapter:framework' then 325
    when 'chapter:gameplay' then 400
    when 'chapter:advanced' then 425
    when 'chapter:practice' then 450
    when 'sculpt:sculpt-camera' then 40
    when 'sculpt:sculpt-brush-smooth' then 50
    when 'sculpt:sculpt-symmetry-face' then 70
    when 'sculpt:sculpt-rock' then 60
    when 'sculpt:sculpt-silhouette' then 70
    when 'sculpt:sculpt-export-inspect' then 80
    when 'modelfoundation:final' then 100
    else case
      when p_lesson_id like 'tutorial:%' then 25
      when p_lesson_id like 'block:%' then 25
      when p_lesson_id like 'designbuild:%' then 300
      when p_lesson_id like 'theory:%' then 25
      when p_lesson_id like 'modeltheory:%' then 20
      when p_lesson_id like 'modelvideo:%' then 20
      when p_lesson_id like 'model:%' then 100
      when p_lesson_id like 'modelbuild:%' then 250
      when p_lesson_id like 'modelfix:%' then 75
      when p_lesson_id like 'sculpt:%' then 50
      else 100
    end
  end
$function$;
