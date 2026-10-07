-- Committees are no longer used: leaders sign up with a name and email, and every approved leader sees every
-- approved template. The columns stay (old rows, backups) but nothing reads them.
alter table leaders alter column committee set default '';

-- The email format (s4<student id>@uqu.edu.sa, plus the developer's and owner's review addresses) is enforced by the
-- app; the database only keeps emails lower-case and email-shaped, so those review addresses can be stored.
alter table leaders drop constraint if exists leaders_email_check;
alter table leaders add constraint leaders_email_check check (email = lower(email) and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$');
