-- SCinvites initial schema. All access is server-side; RLS is enabled on every
-- table with no policies so the anon/publishable key can read nothing.

create table events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text,
  latin_title text,
  track text not null check (track in ('club','space','chem','phys','bio','math','sport')),
  starts_at timestamptz not null,
  ends_at timestamptz,
  place_type text not null default 'none' check (place_type in ('none','in_person','online')),
  place_name text,
  place_url text,
  status text not null default 'active' check (status in ('draft','active','archived')),
  created_at timestamptz not null default now(),
  check (ends_at is null or ends_at >= starts_at)
);

create table templates (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete restrict,
  track text not null check (track in ('club','space','chem','phys','bio','math','sport')),
  version int not null default 1,
  supersedes_id uuid references templates(id) on delete restrict,
  allowed_colors text[] not null default '{petrol,night,ivory}'
    check (array_length(allowed_colors, 1) >= 1 and allowed_colors <@ array['petrol','night','ivory']),
  artwork_path text,
  stamp_types text[] not null default '{VIP}' check (array_length(stamp_types, 1) >= 1),
  allowed_committees text[] not null default '{}',
  available_from timestamptz,
  available_to timestamptz,
  request_deadline_days int not null default 3 check (request_deadline_days between 0 and 60),
  status text not null default 'draft' check (status in ('draft','approved','superseded')),
  approved_at timestamptz,
  created_at timestamptz not null default now()
);
create index templates_event_idx on templates(event_id);

create table leaders (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique check (email = lower(email) and email like '%@uqu.edu.sa'),
  committee text not null,
  status text not null default 'pending' check (status in ('pending','approved','revoked')),
  approved_at timestamptz,
  created_at timestamptz not null default now()
);

create table leader_requests (
  id uuid primary key default gen_random_uuid(),
  leader_id uuid not null references leaders(id) on delete restrict,
  template_id uuid not null references templates(id) on delete restrict,
  stamp text not null,
  color text not null check (color in ('petrol','night','ivory')),
  place_type text not null default 'none' check (place_type in ('none','in_person','online')),
  place_name text,
  place_url text,
  show_qr boolean not null default true,
  status text not null default 'pending' check (status in ('pending','approved','changes_requested')),
  note text,
  created_at timestamptz not null default now(),
  decided_at timestamptz
);
create index leader_requests_leader_idx on leader_requests(leader_id);

create table leader_request_people (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references leader_requests(id) on delete cascade,
  position int not null default 0,
  name text not null,
  org text,
  title text,
  excluded boolean not null default false
);
create index leader_request_people_request_idx on leader_request_people(request_id);

create table invitations (
  id uuid primary key default gen_random_uuid(),
  template_id uuid not null references templates(id) on delete restrict,
  color text not null check (color in ('petrol','night','ivory')),
  stamp text not null,
  kind text not null check (kind in ('personal','general')),
  invitee_name text,
  invitee_org text,
  invitee_title text,
  place_type text not null default 'none' check (place_type in ('none','in_person','online')),
  place_name text,
  place_url text,
  slug text not null unique,
  show_qr boolean not null default true,
  status text not null default 'created' check (status in ('created','opened','confirmed','declined','revoked')),
  created_by_leader_id uuid references leaders(id) on delete restrict,
  leader_request_id uuid references leader_requests(id) on delete restrict,
  opened_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  check (kind = 'general' or invitee_name is not null)
);
create index invitations_template_idx on invitations(template_id);
create index invitations_request_idx on invitations(leader_request_id);

create table registrations (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references invitations(id) on delete restrict,
  name text not null,
  email text not null,
  created_at timestamptz not null default now(),
  anonymized_at timestamptz
);
create index registrations_invitation_idx on registrations(invitation_id);
create unique index registrations_invitation_email_uq on registrations(invitation_id, lower(email));

create table rsvps (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references invitations(id) on delete restrict,
  registration_id uuid references registrations(id) on delete restrict,
  answer text not null check (answer in ('yes','no')),
  answered_at timestamptz not null default now()
);
create unique index rsvps_registration_uq on rsvps(invitation_id, registration_id) where registration_id is not null;
create unique index rsvps_personal_uq on rsvps(invitation_id) where registration_id is null;

create table login_tokens (
  id uuid primary key default gen_random_uuid(),
  leader_id uuid not null references leaders(id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  used_at timestamptz,
  created_at timestamptz not null default now()
);

create table sessions (
  id uuid primary key default gen_random_uuid(),
  subject text not null check (subject in ('owner','leader')),
  leader_id uuid references leaders(id) on delete cascade,
  token_hash text not null unique,
  user_agent text,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  expires_at timestamptz not null,
  revoked_at timestamptz,
  check ((subject = 'owner') = (leader_id is null))
);

create table auth_attempts (
  id uuid primary key default gen_random_uuid(),
  ip_hash text not null,
  succeeded boolean not null,
  at timestamptz not null default now()
);
create index auth_attempts_at_idx on auth_attempts(at);

create table rate_limits (
  key text not null,
  window_start bigint not null,
  count int not null default 0,
  primary key (key, window_start)
);

create table audit_log (
  id uuid primary key default gen_random_uuid(),
  actor text not null,
  action text not null,
  target text not null,
  meta jsonb not null default '{}'::jsonb,
  at timestamptz not null default now()
);

create table settings (
  key text primary key,
  value jsonb not null
);

-- Atomic fixed-window counter. Returns true while the window's count is within p_max.
create function rate_limit_hit(p_key text, p_window_seconds int, p_max int) returns boolean
language plpgsql as $$
declare
  w bigint := floor(extract(epoch from now()) / p_window_seconds)::bigint;
  c int;
begin
  insert into rate_limits (key, window_start, count) values (p_key, w, 1)
  on conflict (key, window_start) do update set count = rate_limits.count + 1
  returning count into c;
  delete from rate_limits where window_start < w - 2 and key = p_key;
  return c <= p_max;
end $$;

alter table events enable row level security;
alter table templates enable row level security;
alter table leaders enable row level security;
alter table leader_requests enable row level security;
alter table leader_request_people enable row level security;
alter table invitations enable row level security;
alter table registrations enable row level security;
alter table rsvps enable row level security;
alter table login_tokens enable row level security;
alter table sessions enable row level security;
alter table auth_attempts enable row level security;
alter table rate_limits enable row level security;
alter table audit_log enable row level security;
alter table settings enable row level security;
