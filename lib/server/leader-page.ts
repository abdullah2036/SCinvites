import 'server-only';
import { sql } from './db';
import { requireLeaderFromCookies } from './page-auth';
import { templatesVisibleToLeader } from './templates';
import { toTemplateOption } from './template-options';

/** Leader identity + the templates open to their committee (for leader pages). */
export async function leaderContext() {
  const s = await requireLeaderFromCookies();
  const [leader] = await sql<{ id: string; name: string; committee: string }[]>`select id, name, committee from leaders where id = ${s.leaderId}`;
  const templates = (await templatesVisibleToLeader(leader)).map(toTemplateOption);
  return { leader, templates };
}
