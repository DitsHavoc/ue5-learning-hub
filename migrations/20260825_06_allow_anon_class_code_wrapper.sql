-- V3.6: allow the public SECURITY INVOKER validation wrapper to call its private implementation.
-- The private schema is not exposed through PostgREST; only the explicitly granted function is executable.
grant usage on schema private to anon;
