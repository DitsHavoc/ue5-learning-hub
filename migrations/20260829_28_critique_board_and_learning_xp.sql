-- v3.36.0 — class-scoped Critique Board + structured critique XP + Designer source-task XP

create table if not exists public.critique_posts (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  area text not null default 'General' check (char_length(area) between 2 and 40),
  title text not null default '' check (char_length(title) <= 120),
  prompt text not null check (char_length(prompt) between 8 and 600),
  storage_path text not null unique,
  original_name text not null default 'critique-image',
  improved_storage_path text null unique,
  improved_name text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint critique_posts_storage_path_scope check (storage_path like class_id::text || '/' || author_id::text || '/%'),
  constraint critique_posts_improved_path_scope check (improved_storage_path is null or improved_storage_path like class_id::text || '/' || author_id::text || '/%')
);

create table if not exists public.critique_feedback (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.critique_posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  works_well text not null check (char_length(works_well) between 12 and 600),
  clearer text not null check (char_length(clearer) between 12 and 600),
  change_try text not null check (char_length(change_try) between 12 and 600),
  xp_awarded boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(post_id, author_id)
);

create index if not exists critique_posts_class_created_idx on public.critique_posts(class_id, created_at desc);
create index if not exists critique_posts_author_created_idx on public.critique_posts(author_id, created_at desc);
create index if not exists critique_feedback_post_created_idx on public.critique_feedback(post_id, created_at);
create index if not exists critique_feedback_author_created_idx on public.critique_feedback(author_id, created_at desc);

alter table public.critique_posts enable row level security;
alter table public.critique_feedback enable row level security;

create or replace function private.critique_can_access_class(p_class_id uuid)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private
as $function$
  select (select private.is_class_member(p_class_id)) or (select private.teacher_has_class_access(p_class_id))
$function$;

create or replace function private.critique_can_access_post(p_post_id uuid)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private
as $function$
  select exists(
    select 1 from public.critique_posts p
    where p.id=p_post_id and private.critique_can_access_class(p.class_id)
  )
$function$;

create or replace function private.critique_post_author(p_post_id uuid)
returns uuid
language sql
stable
security definer
set search_path = pg_catalog, public
as $function$
  select p.author_id from public.critique_posts p where p.id=p_post_id
$function$;

create or replace function private.critique_teacher_can_manage_post(p_post_id uuid)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private
as $function$
  select exists(
    select 1 from public.critique_posts p
    where p.id=p_post_id and private.teacher_has_class_access(p.class_id)
  )
$function$;

revoke all on function private.critique_can_access_class(uuid) from public;
revoke all on function private.critique_can_access_post(uuid) from public;
revoke all on function private.critique_post_author(uuid) from public;
revoke all on function private.critique_teacher_can_manage_post(uuid) from public;
grant execute on function private.critique_can_access_class(uuid) to authenticated;
grant execute on function private.critique_can_access_post(uuid) to authenticated;
grant execute on function private.critique_post_author(uuid) to authenticated;
grant execute on function private.critique_teacher_can_manage_post(uuid) to authenticated;

drop policy if exists "critique posts class read" on public.critique_posts;
create policy "critique posts class read" on public.critique_posts
for select to authenticated
using ((select private.critique_can_access_class(class_id)));

drop policy if exists "critique posts author insert" on public.critique_posts;
create policy "critique posts author insert" on public.critique_posts
for insert to authenticated
with check (
  author_id=(select auth.uid())
  and (select private.critique_can_access_class(class_id))
);

drop policy if exists "critique posts author or teacher update" on public.critique_posts;
drop policy if exists "critique posts author update" on public.critique_posts;
create policy "critique posts author update" on public.critique_posts
for update to authenticated
using (author_id=(select auth.uid()) and (select private.critique_can_access_class(class_id)))
with check (author_id=(select auth.uid()) and (select private.critique_can_access_class(class_id)));

drop policy if exists "critique posts author or teacher delete" on public.critique_posts;
create policy "critique posts author or teacher delete" on public.critique_posts
for delete to authenticated
using (
  author_id=(select auth.uid())
  or (select private.teacher_has_class_access(class_id))
);

drop policy if exists "critique feedback class read" on public.critique_feedback;
create policy "critique feedback class read" on public.critique_feedback
for select to authenticated
using ((select private.critique_can_access_post(post_id)));

drop policy if exists "critique feedback peer insert" on public.critique_feedback;
create policy "critique feedback peer insert" on public.critique_feedback
for insert to authenticated
with check (
  author_id=(select auth.uid())
  and (select private.critique_can_access_post(post_id))
  and (select private.critique_post_author(post_id)) is distinct from (select auth.uid())
);

drop policy if exists "critique feedback author update" on public.critique_feedback;

drop policy if exists "critique feedback author or teacher delete" on public.critique_feedback;
create policy "critique feedback author or teacher delete" on public.critique_feedback
for delete to authenticated
using (
  author_id=(select auth.uid())
  or (select private.critique_teacher_can_manage_post(post_id))
);

-- Do not inherit the broad Supabase default table privileges. RLS still governs every granted operation.
revoke all on table public.critique_posts from anon, authenticated;
revoke all on table public.critique_feedback from anon, authenticated;
grant select, insert, delete on table public.critique_posts to authenticated;
grant update (improved_storage_path, improved_name, updated_at) on table public.critique_posts to authenticated;
grant select, insert, delete on table public.critique_feedback to authenticated;

-- Private class-scoped image bucket. Paths are class_id/user_id/post_id/filename.
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('critique-media','critique-media',false,8388608,array['image/png','image/jpeg','image/webp']::text[])
on conflict (id) do update set
  public=false,
  file_size_limit=excluded.file_size_limit,
  allowed_mime_types=excluded.allowed_mime_types;

create or replace function private.critique_path_class_id(p_name text)
returns uuid
language plpgsql
immutable
set search_path = pg_catalog
as $function$
begin
  return split_part(coalesce(p_name,''),'/',1)::uuid;
exception when others then
  return null;
end
$function$;

create or replace function private.critique_storage_can_read(p_name text)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private
as $function$
  select private.critique_can_access_class(private.critique_path_class_id(p_name))
$function$;

create or replace function private.critique_storage_can_write(p_name text)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private
as $function$
  select
    private.critique_path_class_id(p_name) is not null
    and (
      (
        split_part(coalesce(p_name,''),'/',2)=(select auth.uid())::text
        and private.critique_can_access_class(private.critique_path_class_id(p_name))
      )
      or private.teacher_has_class_access(private.critique_path_class_id(p_name))
    )
$function$;

revoke all on function private.critique_path_class_id(text) from public;
revoke all on function private.critique_storage_can_read(text) from public;
revoke all on function private.critique_storage_can_write(text) from public;
grant execute on function private.critique_path_class_id(text) to authenticated;
grant execute on function private.critique_storage_can_read(text) to authenticated;
grant execute on function private.critique_storage_can_write(text) to authenticated;

drop policy if exists "critique media class read" on storage.objects;
create policy "critique media class read" on storage.objects
for select to authenticated
using (bucket_id='critique-media' and (select private.critique_storage_can_read(name)));

drop policy if exists "critique media class upload" on storage.objects;
create policy "critique media class upload" on storage.objects
for insert to authenticated
with check (bucket_id='critique-media' and (select private.critique_storage_can_write(name)));

drop policy if exists "critique media author or teacher update" on storage.objects;
create policy "critique media author or teacher update" on storage.objects
for update to authenticated
using (bucket_id='critique-media' and (select private.critique_storage_can_write(name)))
with check (bucket_id='critique-media' and (select private.critique_storage_can_write(name)));

drop policy if exists "critique media author or teacher delete" on storage.objects;
create policy "critique media author or teacher delete" on storage.objects
for delete to authenticated
using (bucket_id='critique-media' and (select private.critique_storage_can_write(name)));

-- Award +15 XP for a structured peer critique, capped at 3 rewarded critiques per London day.
-- Students may continue helping after the cap; the feedback is stored but does not award more XP.
create or replace function private.prepare_critique_feedback_xp()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
declare
  rewarded_today integer := 0;
  post_author uuid;
  student_author boolean := false;
begin
  new.works_well := trim(new.works_well);
  new.clearer := trim(new.clearer);
  new.change_try := trim(new.change_try);
  new.xp_awarded := false;

  select p.author_id into post_author from public.critique_posts p where p.id=new.post_id;
  select exists(select 1 from public.profiles p where p.id=new.author_id and p.role='student') into student_author;

  if student_author
     and post_author is distinct from new.author_id
     and char_length(new.works_well) >= 12
     and char_length(new.clearer) >= 12
     and char_length(new.change_try) >= 12
     and not exists(
       select 1 from public.learning_xp_events e
       where e.user_id=new.author_id and e.source_type='critique_feedback' and e.source_key=new.post_id::text
     )
  then
    -- Serialize reward checks for this student/day so concurrent submissions cannot slip past the daily cap.
    perform pg_advisory_xact_lock(hashtextextended(new.author_id::text || ':' || (now() at time zone 'Europe/London')::date::text,0));

    select count(*)::integer into rewarded_today
    from public.learning_xp_events e
    where e.user_id=new.author_id
      and e.source_type='critique_feedback'
      and (e.created_at at time zone 'Europe/London')::date=(now() at time zone 'Europe/London')::date;

    if rewarded_today < 3 then
      perform private.award_learning_xp(
        new.author_id,
        'critique_feedback',
        new.post_id::text,
        15,
        now(),
        jsonb_build_object('post_id',new.post_id,'label','Structured peer critique')
      );
      new.xp_awarded := true;
    end if;
  end if;

  return new;
end
$function$;

drop trigger if exists critique_feedback_prepare_xp on public.critique_feedback;
create trigger critique_feedback_prepare_xp
before insert on public.critique_feedback
for each row execute function private.prepare_critique_feedback_xp();

create or replace function private.notify_critique_feedback()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public
as $function$
declare
  owner_id uuid;
  reviewer_name text;
begin
  select p.author_id into owner_id from public.critique_posts p where p.id=new.post_id;
  if owner_id is null or owner_id=new.author_id then return new; end if;
  select p.display_name into reviewer_name from public.profiles p where p.id=new.author_id;
  insert into public.notifications(user_id,kind,title,body,link)
  values(
    owner_id,
    'feedback',
    'New peer critique',
    left(coalesce(reviewer_name,'A classmate') || ' left structured feedback on your Critique Board post.',1200),
    '#/critique'
  );
  return new;
end
$function$;

drop trigger if exists critique_feedback_notify_owner on public.critique_feedback;
create trigger critique_feedback_notify_owner
after insert on public.critique_feedback
for each row execute function private.notify_critique_feedback();

-- Industry videos/articles are self-declared completion tasks worth +20 XP.
create or replace function private.award_lesson_progress_xp()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
declare
  points integer;
begin
  if new.completed = true and (tg_op = 'INSERT' or old.completed is distinct from true) then
    points := case
      when new.lesson_id like 'designsource:%' then 20
      else private.learning_xp_for_id(new.lesson_id)
    end;
    perform private.award_learning_xp(
      new.user_id,
      'learning_complete',
      new.lesson_id,
      points,
      coalesce(new.completed_at,new.updated_at,now()),
      jsonb_build_object('lesson_id',new.lesson_id)
    );
  end if;
  return new;
end
$function$;

-- Feed RPC keeps classmates' profile rows private while returning only the names needed by the board.
create or replace function public.get_critique_feed(p_class_id uuid)
returns table(
  id uuid,
  class_id uuid,
  author_id uuid,
  author_name text,
  author_role text,
  area text,
  title text,
  prompt text,
  storage_path text,
  original_name text,
  improved_storage_path text,
  improved_name text,
  created_at timestamptz,
  updated_at timestamptz,
  feedback jsonb
)
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
begin
  if (select auth.uid()) is null then raise exception 'Sign in first'; end if;
  if not private.critique_can_access_class(p_class_id) then raise exception 'You do not have access to this class Critique Board'; end if;

  return query
  select
    p.id,p.class_id,p.author_id,coalesce(a.display_name,'Student'),a.role,p.area,p.title,p.prompt,
    p.storage_path,p.original_name,p.improved_storage_path,p.improved_name,p.created_at,p.updated_at,
    coalesce((
      select jsonb_agg(jsonb_build_object(
        'id',f.id,
        'author_id',f.author_id,
        'author_name',coalesce(fp.display_name,'Student'),
        'author_role',fp.role,
        'works_well',f.works_well,
        'clearer',f.clearer,
        'change_try',f.change_try,
        'xp_awarded',f.xp_awarded,
        'created_at',f.created_at
      ) order by f.created_at)
      from public.critique_feedback f
      left join public.profiles fp on fp.id=f.author_id
      where f.post_id=p.id
    ),'[]'::jsonb) as feedback
  from public.critique_posts p
  left join public.profiles a on a.id=p.author_id
  where p.class_id=p_class_id
  order by p.created_at desc;
end
$function$;

create or replace function public.get_critique_attention_count()
returns integer
language sql
security definer
set search_path = pg_catalog, public, private
as $function$
  select coalesce(count(*),0)::integer
  from public.critique_posts p
  where p.author_id is distinct from (select auth.uid())
    and private.critique_can_access_class(p.class_id)
    and (select count(*) from public.critique_feedback f where f.post_id=p.id) < 2
    and not exists(select 1 from public.critique_feedback mine where mine.post_id=p.id and mine.author_id=(select auth.uid()))
$function$;

create or replace function public.get_my_critique_reward_count_today()
returns integer
language sql
stable
security definer
set search_path = pg_catalog, public
as $function$
  select coalesce(count(*),0)::integer
  from public.learning_xp_events e
  where e.user_id=(select auth.uid())
    and e.source_type='critique_feedback'
    and (e.created_at at time zone 'Europe/London')::date=(now() at time zone 'Europe/London')::date
$function$;

revoke all on function public.get_critique_feed(uuid) from public;
revoke all on function public.get_critique_attention_count() from public;
revoke all on function public.get_my_critique_reward_count_today() from public;
revoke execute on function public.get_critique_feed(uuid) from anon;
revoke execute on function public.get_critique_attention_count() from anon;
revoke execute on function public.get_my_critique_reward_count_today() from anon;
grant execute on function public.get_critique_feed(uuid) to authenticated;
grant execute on function public.get_critique_attention_count() to authenticated;
grant execute on function public.get_my_critique_reward_count_today() to authenticated;
