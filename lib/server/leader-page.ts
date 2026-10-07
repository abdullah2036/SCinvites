import 'server-only';
import { sql } from './db';
import { requireLeaderFromCookies } from './page-auth';
import { templatesVisibleToLeaders } from './templates';
import { toTemplateOption } from './template-options';

/** Leader identity + the templates open to every approved leader (for leader pages). */
export async function leaderContext() {
  const s = await requireLeaderFromCookies();
  const [leader] = await sql<{ id: string; name: string; email: string }[]>`select id, name, email from leaders where id = ${s.leaderId}`;
  const templates = (await templatesVisibleToLeaders()).map(toTemplateOption);
  return { leader, templates };
}
