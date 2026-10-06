-- An approved template can have at most one open draft (its next version).
create unique index templates_one_draft_per_parent on templates(supersedes_id) where status = 'draft';
