-- v3.36.0 follow-up: Supabase default privileges explicitly grant anon EXECUTE on public functions.
revoke execute on function public.get_critique_feed(uuid) from anon;
revoke execute on function public.get_critique_attention_count() from anon;
revoke execute on function public.get_my_critique_reward_count_today() from anon;
