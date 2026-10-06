-- Owner analytics (spec §11): where guests came from, and semesters for summaries.

alter table registrations
  add column source text not null default 'direct'
    check (source in ('whatsapp','instagram','x','snapchat','telegram','email','qr','link','direct')),
  add column device text not null default 'desktop' check (device in ('mobile','desktop'));

alter table invitations
  add column open_source text
    check (open_source in ('whatsapp','instagram','x','snapchat','telegram','email','qr','link','direct')),
  add column open_device text check (open_device in ('mobile','desktop'));

create table semesters (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  starts_on date not null,
  ends_on date not null,
  created_at timestamptz not null default now(),
  check (ends_on >= starts_on)
);

create index rsvps_answered_at_idx on rsvps(answered_at);

alter table semesters enable row level security;
