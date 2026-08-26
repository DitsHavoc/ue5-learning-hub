-- UE5 Learning Hub v3.20.0
-- News & Industry social layer: read later, votes and discussion.

create table if not exists public.news_saved (
  user_id uuid not null references public.profiles(id) on delete cascade,
  story_key text not null check (char_length(story_key) between 3 and 80),
  story_url text not null check (char_length(story_url) between 8 and 2500),
  story_title text not null check (char_length(story_title) between 1 and 500),
  story_summary text not null default '' check (char_length(story_summary) <= 1000),
  story_source text not null default '' check (char_length(story_source) <= 160),
  story_image text not null default '' check (char_length(story_image) <= 2500),
  story_category text not null default 'games' check (story_category in ('development','industry','games','trailer','podcast')),
  story_date timestamptz,
  saved_at timestamptz not null default now(),
  primary key (user_id, story_key)
);

create table if not exists public.news_votes (
  user_id uuid not null references public.profiles(id) on delete cascade,
  story_key text not null check (char_length(story_key) between 3 and 80),
  story_url text not null check (char_length(story_url) between 8 and 2500),
  created_at timestamptz not null default now(),
  primary key (user_id, story_key)
);

create table if not exists public.news_comments (
  id uuid primary key default gen_random_uuid(),
  story_key text not null check (char_length(story_key) between 3 and 80),
  story_url text not null check (char_length(story_url) between 8 and 2500),
  story_title text not null default '' check (char_length(story_title) <= 500),
  story_source text not null default '' check (char_length(story_source) <= 160),
  author_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(btrim(body)) between 1 and 2000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists news_saved_story_idx on public.news_saved(story_key);
create index if not exists news_votes_story_idx on public.news_votes(story_key);
create index if not exists news_comments_story_created_idx on public.news_comments(story_key,created_at);

alter table public.news_saved enable row level security;
alter table public.news_votes enable row level security;
alter table public.news_comments enable row level security;

drop policy if exists "news saved own read" on public.news_saved;
create policy "news saved own read" on public.news_saved for select to authenticated
using (user_id=(select auth.uid()));
drop policy if exists "news saved own insert" on public.news_saved;
create policy "news saved own insert" on public.news_saved for insert to authenticated
with check (user_id=(select auth.uid()));
drop policy if exists "news saved own update" on public.news_saved;
create policy "news saved own update" on public.news_saved for update to authenticated
using (user_id=(select auth.uid())) with check (user_id=(select auth.uid()));
drop policy if exists "news saved own delete" on public.news_saved;
create policy "news saved own delete" on public.news_saved for delete to authenticated
using (user_id=(select auth.uid()));

drop policy if exists "news votes authenticated read" on public.news_votes;
create policy "news votes authenticated read" on public.news_votes for select to authenticated using (true);
drop policy if exists "news votes own insert" on public.news_votes;
create policy "news votes own insert" on public.news_votes for insert to authenticated
with check (user_id=(select auth.uid()));
drop policy if exists "news votes own delete" on public.news_votes;
create policy "news votes own delete" on public.news_votes for delete to authenticated
using (user_id=(select auth.uid()));

drop policy if exists "news comments authenticated read" on public.news_comments;
create policy "news comments authenticated read" on public.news_comments for select to authenticated using (true);
drop policy if exists "news comments own insert" on public.news_comments;
create policy "news comments own insert" on public.news_comments for insert to authenticated
with check (author_id=(select auth.uid()));
drop policy if exists "news comments own update" on public.news_comments;
create policy "news comments own update" on public.news_comments for update to authenticated
using (author_id=(select auth.uid())) with check (author_id=(select auth.uid()));
drop policy if exists "news comments author or teacher delete" on public.news_comments;
create policy "news comments author or teacher delete" on public.news_comments for delete to authenticated
using (author_id=(select auth.uid()) or (select private.is_teacher()));

create or replace function public.get_news_comments(p_story_key text)
returns table(
  id uuid,
  author_id uuid,
  display_name text,
  role text,
  body text,
  created_at timestamptz,
  can_delete boolean
)
language plpgsql stable security definer
set search_path=pg_catalog,public,private
as $$
begin
  if auth.uid() is null then raise exception 'Authentication required.'; end if;
  return query
  select c.id,c.author_id,p.display_name,p.role,c.body,c.created_at,
    (c.author_id=auth.uid() or private.is_teacher()) as can_delete
  from public.news_comments c
  join public.profiles p on p.id=c.author_id
  where c.story_key=p_story_key
  order by c.created_at asc;
end;
$$;
revoke all on function public.get_news_comments(text) from public;
grant execute on function public.get_news_comments(text) to authenticated;
