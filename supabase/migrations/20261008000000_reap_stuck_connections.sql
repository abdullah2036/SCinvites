-- "The whole site loads forever, then suddenly works": Supabase's transaction pooler hands a database connection to a
-- client for the length of a query. postgres.js sends a query with values in two steps (describe, then execute); if the
-- Vercel function is paused or recycled between them, the connection stays checked out, waiting on a client that never
-- continues, until Vercel kills that function minutes later. A handful of those exhaust the pool for everyone.
--
-- Every 10 seconds, end this app's connections that have waited on their client mid-query for over 20 s, or sat idle
-- inside an open transaction for over 60 s. A healthy client never pauses that long mid-query, so normal traffic is
-- untouched; the pooler replaces ended connections on its own.
--
-- pg_cron exists on Supabase only; local and CI databases skip this.
do $do$
begin
  if not exists (select 1 from pg_available_extensions where name = 'pg_cron') then
    raise notice 'pg_cron not available: stuck-connection reaper not installed (expected outside Supabase)';
    return;
  end if;
  create extension if not exists pg_cron with schema pg_catalog;
  grant usage on schema cron to postgres;
  grant all privileges on all tables in schema cron to postgres;
  perform cron.schedule(
    'reap-stuck-connections',
    '10 seconds',
    $job$
      select pg_terminate_backend(pid) from pg_stat_activity
      where datname = current_database() and backend_type = 'client backend' and pid <> pg_backend_pid()
        and usename = current_user
        and ((state = 'active' and wait_event = 'ClientRead' and now() - query_start > interval '20 seconds')
          or (state = 'idle in transaction' and now() - state_change > interval '60 seconds'))
    $job$
  );
end
$do$;
