-- v3.42.1 — Hub-wide leaderboard
-- Adds one compact leaderboard RPC across all active leaderboard-enabled classes.
-- Students appear once even when they belong to multiple classes. Teachers never rank.

create or replace function public.get_hub_leaderboard(p_period text default 'week')
returns table(
  user_id uuid,
  display_name text,
  score_xp integer,
  weekly_xp integer,
  previous_week_xp integer,
  all_time_xp integer,
  current_level integer,
  current_streak integer,
  rank_position integer,
  leaderboard_enabled boolean
)
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
declare
  viewer_is_teacher boolean := false;
  viewer_can_see boolean := false;
begin
  if (select auth.uid()) is null then raise exception 'Sign in first'; end if;
  if p_period not in ('week','all') then raise exception 'Choose week or all'; end if;

  select exists(
    select 1 from public.profiles p
    where p.id=(select auth.uid()) and p.role='teacher'
  ) into viewer_is_teacher;

  viewer_can_see := viewer_is_teacher or exists(
    select 1
    from public.class_members cm
    join public.classes c on c.id=cm.class_id
    where cm.user_id=(select auth.uid())
      and coalesce(c.archived,false)=false
      and c.leaderboard_enabled is true
  );

  if not viewer_can_see then
    raise exception 'No active leaderboard-enabled class is available for this account';
  end if;

  return query
  with bounds as (
    select
      (date_trunc('week', now() at time zone 'Europe/London') at time zone 'Europe/London') as week_start,
      ((date_trunc('week', now() at time zone 'Europe/London') - interval '7 days') at time zone 'Europe/London') as previous_start
  ), eligible as (
    select distinct cm.user_id,p.display_name
    from public.class_members cm
    join public.classes c on c.id=cm.class_id
    join public.profiles p on p.id=cm.user_id and p.role='student'
    where coalesce(c.archived,false)=false
      and c.leaderboard_enabled is true
  ), totals as (
    select e0.user_id,e0.display_name,
      coalesce(sum(x.points),0)::integer as all_time_xp,
      coalesce(sum(x.points) filter(where x.created_at>=b.week_start),0)::integer as weekly_xp,
      coalesce(sum(x.points) filter(where x.created_at>=b.previous_start and x.created_at<b.week_start),0)::integer as previous_week_xp
    from eligible e0 cross join bounds b
    left join public.learning_xp_events x on x.user_id=e0.user_id
    group by e0.user_id,e0.display_name
  ), ranked as (
    select t.*,
      case when p_period='week' then t.weekly_xp else t.all_time_xp end as score_xp,
      rank() over(
        order by (case when p_period='week' then t.weekly_xp else t.all_time_xp end) desc,t.display_name asc
      )::integer as pos
    from totals t
  )
  select r.user_id,r.display_name,r.score_xp,r.weekly_xp,r.previous_week_xp,r.all_time_xp,
    floor(r.all_time_xp/500.0)::integer+1,
    private.current_learning_streak(r.user_id),r.pos,true
  from ranked r
  order by r.pos,r.display_name;
end
$function$;

revoke all on function public.get_hub_leaderboard(text) from public, anon;
grant execute on function public.get_hub_leaderboard(text) to authenticated;
