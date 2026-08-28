-- v3.34.9 — class XP leaderboards, streaks and non-farmable rewards

alter table public.classes
  add column if not exists leaderboard_enabled boolean not null default true;

create table if not exists public.learning_xp_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  source_type text not null,
  source_key text not null,
  points integer not null check (points > 0 and points <= 1000),
  created_at timestamptz not null default now(),
  created_by uuid null references public.profiles(id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  unique(user_id, source_type, source_key)
);

create index if not exists learning_xp_events_user_created_idx
  on public.learning_xp_events(user_id, created_at desc);

alter table public.learning_xp_events enable row level security;
revoke all on public.learning_xp_events from anon, authenticated;

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
    else case
      when p_lesson_id like 'tutorial:%' then 25
      when p_lesson_id like 'block:%' then 25
      when p_lesson_id like 'designbuild:%' then 300
      when p_lesson_id like 'model:%' then 100
      when p_lesson_id like 'modelbuild:%' then 250
      when p_lesson_id like 'modelfix:%' then 75
      when p_lesson_id like 'sculpt:%' then 50
      else 100
    end
  end
$function$;

create or replace function private.award_learning_xp(
  p_user_id uuid,
  p_source_type text,
  p_source_key text,
  p_points integer,
  p_created_at timestamptz default now(),
  p_metadata jsonb default '{}'::jsonb
)
returns void
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
declare
  inserted_count integer := 0;
  local_day text;
begin
  if p_user_id is null or p_points is null or p_points <= 0 then return; end if;

  insert into public.learning_xp_events(user_id,source_type,source_key,points,created_at,metadata)
  values(p_user_id,left(p_source_type,80),left(p_source_key,240),least(p_points,1000),coalesce(p_created_at,now()),coalesce(p_metadata,'{}'::jsonb))
  on conflict(user_id,source_type,source_key) do nothing;
  get diagnostics inserted_count = row_count;

  if inserted_count > 0 and p_source_type <> 'daily_bonus' then
    local_day := to_char(coalesce(p_created_at,now()) at time zone 'Europe/London','YYYY-MM-DD');
    insert into public.learning_xp_events(user_id,source_type,source_key,points,created_at,metadata)
    values(p_user_id,'daily_bonus',local_day,5,coalesce(p_created_at,now()),jsonb_build_object('label','Daily activity bonus'))
    on conflict(user_id,source_type,source_key) do nothing;
  end if;
end
$function$;

create or replace function private.award_lesson_progress_xp()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
begin
  if new.completed = true and (tg_op = 'INSERT' or old.completed is distinct from true) then
    perform private.award_learning_xp(
      new.user_id,
      'learning_complete',
      new.lesson_id,
      private.learning_xp_for_id(new.lesson_id),
      coalesce(new.completed_at,new.updated_at,now()),
      jsonb_build_object('lesson_id',new.lesson_id)
    );
  end if;
  return new;
end
$function$;

drop trigger if exists lesson_progress_award_xp on public.lesson_progress;
create trigger lesson_progress_award_xp
after insert or update of completed on public.lesson_progress
for each row execute function private.award_lesson_progress_xp();

create or replace function private.award_project_evidence_xp()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
begin
  if new.milestone_id is not null and length(trim(coalesce(new.what_did,''))) > 0 then
    perform private.award_learning_xp(
      new.author_id,
      'milestone_evidence',
      new.project_id::text || ':' || new.milestone_id::text,
      25,
      new.created_at,
      jsonb_build_object('project_id',new.project_id,'milestone_id',new.milestone_id)
    );
  end if;
  return new;
end
$function$;

drop trigger if exists project_updates_award_xp on public.project_updates;
create trigger project_updates_award_xp
after insert on public.project_updates
for each row execute function private.award_project_evidence_xp();

create or replace function private.award_project_milestone_xp()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
declare m record;
begin
  if new.status = 'complete' and (tg_op = 'INSERT' or old.status is distinct from 'complete') then
    for m in select pm.user_id from public.project_members pm where pm.project_id=new.project_id loop
      perform private.award_learning_xp(
        m.user_id,
        'project_milestone',
        new.id::text,
        40,
        coalesce(new.updated_at,new.created_at,now()),
        jsonb_build_object('project_id',new.project_id,'milestone_id',new.id)
      );
    end loop;
  end if;
  return new;
end
$function$;

drop trigger if exists project_milestones_award_xp on public.project_milestones;
create trigger project_milestones_award_xp
after insert or update of status on public.project_milestones
for each row execute function private.award_project_milestone_xp();

create or replace function private.award_project_complete_xp()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
declare m record;
begin
  if new.status = 'complete' and (tg_op = 'INSERT' or old.status is distinct from 'complete') then
    for m in select pm.user_id from public.project_members pm where pm.project_id=new.id loop
      perform private.award_learning_xp(
        m.user_id,
        'project_complete',
        new.id::text,
        100,
        coalesce(new.updated_at,new.created_at,now()),
        jsonb_build_object('project_id',new.id)
      );
    end loop;
  end if;
  return new;
end
$function$;

drop trigger if exists projects_award_xp on public.projects;
create trigger projects_award_xp
after insert or update of status on public.projects
for each row execute function private.award_project_complete_xp();

create or replace function private.current_learning_streak(p_user_id uuid)
returns integer
language plpgsql
security definer
stable
set search_path = pg_catalog, public
as $function$
declare
  d date := (now() at time zone 'Europe/London')::date;
  streak integer := 0;
  has_day boolean;
begin
  select exists(
    select 1 from public.learning_xp_events e
    where e.user_id=p_user_id
      and (e.created_at at time zone 'Europe/London')::date=d
      and e.source_type <> 'daily_bonus'
  ) into has_day;
  if not has_day then d := d - 1; end if;

  loop
    select exists(
      select 1 from public.learning_xp_events e
      where e.user_id=p_user_id
        and (e.created_at at time zone 'Europe/London')::date=d
        and e.source_type <> 'daily_bonus'
    ) into has_day;
    exit when not has_day;
    streak := streak + 1;
    d := d - 1;
    exit when streak >= 365;
  end loop;
  return streak;
end
$function$;

create or replace function public.get_my_xp_summary()
returns table(all_time_xp integer, weekly_xp integer, current_streak integer, current_level integer)
language sql
security definer
set search_path = pg_catalog, public, private
as $function$
  with bounds as (
    select (date_trunc('week', now() at time zone 'Europe/London') at time zone 'Europe/London') as week_start
  ), totals as (
    select
      coalesce(sum(e.points),0)::integer as all_time_xp,
      coalesce(sum(e.points) filter(where e.created_at >= b.week_start),0)::integer as weekly_xp
    from bounds b left join public.learning_xp_events e on e.user_id=(select auth.uid())
  )
  select t.all_time_xp,t.weekly_xp,private.current_learning_streak((select auth.uid())),floor(t.all_time_xp/500.0)::integer+1
  from totals t
  where (select auth.uid()) is not null
$function$;

create or replace function public.get_class_leaderboard(p_class_id uuid, p_period text default 'week')
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
  allowed boolean := false;
  enabled boolean := true;
  teacher_view boolean := false;
begin
  if (select auth.uid()) is null then raise exception 'Sign in first'; end if;
  if p_period not in ('week','all') then raise exception 'Choose week or all'; end if;

  teacher_view := private.teacher_has_class_access(p_class_id);
  allowed := teacher_view or exists(
    select 1 from public.class_members cm
    where cm.class_id=p_class_id and cm.user_id=(select auth.uid())
  );
  if not allowed then raise exception 'You do not have access to this class leaderboard'; end if;

  select c.leaderboard_enabled into enabled from public.classes c where c.id=p_class_id;
  if enabled is null then raise exception 'Class not found'; end if;
  if not enabled and not teacher_view then raise exception 'This class leaderboard is currently paused'; end if;

  return query
  with bounds as (
    select
      (date_trunc('week', now() at time zone 'Europe/London') at time zone 'Europe/London') as week_start,
      ((date_trunc('week', now() at time zone 'Europe/London') - interval '7 days') at time zone 'Europe/London') as previous_start
  ), members as (
    select cm.user_id,p.display_name
    from public.class_members cm
    join public.profiles p on p.id=cm.user_id and p.role='student'
    where cm.class_id=p_class_id
  ), totals as (
    select m.user_id,m.display_name,
      coalesce(sum(e.points),0)::integer as all_time_xp,
      coalesce(sum(e.points) filter(where e.created_at>=b.week_start),0)::integer as weekly_xp,
      coalesce(sum(e.points) filter(where e.created_at>=b.previous_start and e.created_at<b.week_start),0)::integer as previous_week_xp
    from members m cross join bounds b
    left join public.learning_xp_events e on e.user_id=m.user_id
    group by m.user_id,m.display_name
  ), ranked as (
    select t.*,
      case when p_period='week' then t.weekly_xp else t.all_time_xp end as score_xp,
      rank() over(order by (case when p_period='week' then t.weekly_xp else t.all_time_xp end) desc,t.display_name asc)::integer as pos
    from totals t
  )
  select r.user_id,r.display_name,r.score_xp,r.weekly_xp,r.previous_week_xp,r.all_time_xp,
    floor(r.all_time_xp/500.0)::integer+1,
    private.current_learning_streak(r.user_id),r.pos,enabled
  from ranked r
  order by r.pos,r.display_name;
end
$function$;

create or replace function public.set_class_leaderboard_enabled(p_class_id uuid, p_enabled boolean)
returns table(class_id uuid, leaderboard_enabled boolean)
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
begin
  if not private.teacher_has_class_access(p_class_id) then raise exception 'Teacher access required'; end if;
  update public.classes c set leaderboard_enabled=coalesce(p_enabled,true) where c.id=p_class_id;
  return query select c.id,c.leaderboard_enabled from public.classes c where c.id=p_class_id;
end
$function$;

-- Backfill XP from existing non-farmable completion records.
do $backfill$
declare r record;
begin
  for r in select * from public.lesson_progress where completed=true loop
    perform private.award_learning_xp(r.user_id,'learning_complete',r.lesson_id,private.learning_xp_for_id(r.lesson_id),coalesce(r.completed_at,r.updated_at,now()),jsonb_build_object('lesson_id',r.lesson_id,'backfill',true));
  end loop;

  for r in select distinct on (u.author_id,u.project_id,u.milestone_id) u.* from public.project_updates u where u.milestone_id is not null and length(trim(coalesce(u.what_did,'')))>0 order by u.author_id,u.project_id,u.milestone_id,u.created_at loop
    perform private.award_learning_xp(r.author_id,'milestone_evidence',r.project_id::text||':'||r.milestone_id::text,25,r.created_at,jsonb_build_object('project_id',r.project_id,'milestone_id',r.milestone_id,'backfill',true));
  end loop;

  for r in select pm.user_id,m.id,m.project_id,m.updated_at,m.created_at from public.project_milestones m join public.project_members pm on pm.project_id=m.project_id where m.status='complete' loop
    perform private.award_learning_xp(r.user_id,'project_milestone',r.id::text,40,coalesce(r.updated_at,r.created_at,now()),jsonb_build_object('project_id',r.project_id,'milestone_id',r.id,'backfill',true));
  end loop;

  for r in select pm.user_id,p.id,p.updated_at,p.created_at from public.projects p join public.project_members pm on pm.project_id=p.id where p.status='complete' loop
    perform private.award_learning_xp(r.user_id,'project_complete',r.id::text,100,coalesce(r.updated_at,r.created_at,now()),jsonb_build_object('project_id',r.id,'backfill',true));
  end loop;
end
$backfill$;

revoke all on function public.get_my_xp_summary() from public;
revoke all on function public.get_class_leaderboard(uuid,text) from public;
revoke all on function public.set_class_leaderboard_enabled(uuid,boolean) from public;
grant execute on function public.get_my_xp_summary() to authenticated;
grant execute on function public.get_class_leaderboard(uuid,text) to authenticated;
grant execute on function public.set_class_leaderboard_enabled(uuid,boolean) to authenticated;
