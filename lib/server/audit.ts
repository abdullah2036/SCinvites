import { sql, type Db } from './db';

export async function audit(actor: string, action: string, target: string, meta: Record<string, unknown> = {}, db: Db = sql): Promise<void> {
  await db`insert into audit_log (actor, action, target, meta) values (${actor}, ${action}, ${target}, ${db.json(meta as never)})`;
}
