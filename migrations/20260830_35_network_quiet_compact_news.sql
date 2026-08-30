-- v3.39.4 — Network Quiet pass
-- Return compact News social counters instead of downloading every vote/comment row to each browser.

create or replace function public.get_news_state_compact(p_story_keys text[])
returns table(
  story_key text,
  vote_count bigint,
  comment_count bigint,
  saved boolean,
  my_vote boolean
)
language sql
stable
security invoker
set search_path = pg_catalog, public
as $$
  with keys as (
    select distinct k.story_key
    from unnest(coalesce(p_story_keys, array[]::text[])) as k(story_key)
    where char_length(k.story_key) between 3 and 80
    limit 120
  ),
  vote_counts as (
    select v.story_key,
           count(*)::bigint as vote_count,
           bool_or(v.user_id = (select auth.uid())) as my_vote
    from public.news_votes v
    join keys k on k.story_key = v.story_key
    group by v.story_key
  ),
  comment_counts as (
    select c.story_key, count(*)::bigint as comment_count
    from public.news_comments c
    join keys k on k.story_key = c.story_key
    group by c.story_key
  ),
  saved_rows as (
    select s.story_key
    from public.news_saved s
    join keys k on k.story_key = s.story_key
    where s.user_id = (select auth.uid())
  )
  select k.story_key,
         coalesce(v.vote_count, 0)::bigint,
         coalesce(c.comment_count, 0)::bigint,
         (s.story_key is not null) as saved,
         coalesce(v.my_vote, false) as my_vote
  from keys k
  left join vote_counts v on v.story_key = k.story_key
  left join comment_counts c on c.story_key = k.story_key
  left join saved_rows s on s.story_key = k.story_key;
$$;

revoke all on function public.get_news_state_compact(text[]) from public, anon;
grant execute on function public.get_news_state_compact(text[]) to authenticated;
