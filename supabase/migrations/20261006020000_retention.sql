-- Marks personal invitations whose invitee details were removed by the retention job.
alter table invitations add column anonymized_at timestamptz;
