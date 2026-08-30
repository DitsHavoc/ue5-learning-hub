-- v3.39.4 — Network Quiet pass
-- Teacher dashboard needs category totals, not every completed lesson row for every visible student.

create or replace function public.get_teacher_progress_summary()
returns table(
  user_id uuid,
  core_lessons bigint,
  tutorials bigint,
  designer_builds bigint,
  modelling bigint,
  chapter_builds bigint
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
    count(*) filter (
      where lp.completed is true
        and lp.lesson_id like 'tutorial:%'
    )::bigint as tutorials,
    count(*) filter (
      where lp.completed is true
        and lp.lesson_id like 'designbuild:%'
    )::bigint as designer_builds,
    count(*) filter (
      where lp.completed is true
        and (
          lp.lesson_id like 'model:%'
          or lp.lesson_id like 'modeltheory:%'
          or lp.lesson_id like 'modelfoundation:%'
          or lp.lesson_id like 'modelbuild:%'
          or lp.lesson_id like 'modelfix:%'
          or lp.lesson_id like 'sculpt:%'
        )
    )::bigint as modelling,
    count(*) filter (
      where lp.completed is true
        and lp.lesson_id like 'chapter:%'
    )::bigint as chapter_builds
  from public.lesson_progress lp
  where exists (
    select 1 from public.profiles me
    where me.id=(select auth.uid()) and me.role='teacher'
  )
  group by lp.user_id;
$$;

revoke all on function public.get_teacher_progress_summary() from public, anon;
grant execute on function public.get_teacher_progress_summary() to authenticated;
