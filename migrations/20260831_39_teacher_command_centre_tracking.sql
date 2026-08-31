-- v3.42.0 — Teacher Command Centre + tracking parity
-- Fixes live XP mappings for Theory/Designer source tasks and expands the compact
-- teacher progress RPC so the dashboard reflects every current learning area.

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
      when p_lesson_id like 'designsource:%' then 20
      when p_lesson_id like 'theory:%' then 25
      when p_lesson_id like 'modeltheory:%' then 20
      when p_lesson_id like 'modelvideo:%' then 20
      when p_lesson_id like 'model:%' then 100
      when p_lesson_id like 'modelbuild:%' then 250
      when p_lesson_id like 'modelfix:%' then 75
      when p_lesson_id like 'sculpt:%' then 50
      when p_lesson_id like 'pathway:%' then 0
      else 100
    end
  end
$function$;

-- Repair events already awarded under the old fallback value.
update public.learning_xp_events
set points=25
where source_type='learning_complete'
  and source_key like 'theory:%'
  and points is distinct from 25;

update public.learning_xp_events
set points=20
where source_type='learning_complete'
  and source_key like 'designsource:%'
  and points is distinct from 20;

-- The old v3.39.4 compact RPC pre-dated Theory, Designer source tasks,
-- Max videos and Guided Paths. Replace it with the current learning map.
drop function if exists public.get_teacher_progress_summary();

create function public.get_teacher_progress_summary()
returns table(
  user_id uuid,
  core_lessons bigint,
  building_blocks bigint,
  tutorials bigint,
  theory bigint,
  designer_builds bigint,
  designer_sources bigint,
  modelling_foundations bigint,
  modelling_videos bigint,
  modelling_lessons bigint,
  modelling_builds bigint,
  modelling_fixes bigint,
  sculpt bigint,
  chapter_builds bigint,
  pathway_checkpoints bigint,
  last_activity timestamptz
)
language sql
stable
security invoker
set search_path = pg_catalog, public
as $$
  select
    lp.user_id,
    count(*) filter (
      where lp.completed is true
        and position(':' in lp.lesson_id)=0
    )::bigint as core_lessons,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'block:%')::bigint as building_blocks,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'tutorial:%')::bigint as tutorials,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'theory:%')::bigint as theory,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'designbuild:%')::bigint as designer_builds,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'designsource:%')::bigint as designer_sources,
    count(*) filter (
      where lp.completed is true
        and (lp.lesson_id like 'modeltheory:%' or lp.lesson_id like 'modelfoundation:%')
    )::bigint as modelling_foundations,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'modelvideo:%')::bigint as modelling_videos,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'model:%')::bigint as modelling_lessons,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'modelbuild:%')::bigint as modelling_builds,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'modelfix:%')::bigint as modelling_fixes,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'sculpt:%')::bigint as sculpt,
    count(*) filter (where lp.completed is true and lp.lesson_id like 'chapter:%')::bigint as chapter_builds,
    count(*) filter (
      where lp.lesson_id like 'pathway:%'
        and lp.completed_at is not null
    )::bigint as pathway_checkpoints,
    max(coalesce(lp.completed_at,lp.updated_at)) as last_activity
  from public.lesson_progress lp
  where exists (
    select 1 from public.profiles me
    where me.id=(select auth.uid()) and me.role='teacher'
  )
  group by lp.user_id;
$$;

revoke all on function public.get_teacher_progress_summary() from public, anon;
grant execute on function public.get_teacher_progress_summary() to authenticated;
