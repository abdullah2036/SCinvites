import { sql } from './db';
import { getSettings } from './settings';
import { audit } from './audit';

/**
 * Removes guests' personal data for events that ended more than `retention_days` ago.
 * Sources, devices, RSVP answers and times stay, so statistics are unchanged.
 */
export async function runRetention(): Promise<{ anonymized: number }> {
  const { retention_days } = await getSettings();
  const result = await sql.begin(async (tx) => {
    const old = tx`
      select i.id from invitations i join templates t on t.id = i.template_id join events e on e.id = t.event_id
      where coalesce(e.ends_at, e.starts_at) < now() - ${retention_days} * interval '1 day'`;
    const regs = await tx`
      update registrations set name = 'محذوف', email = 'deleted+' || id || '@invalid', anonymized_at = now()
      where anonymized_at is null and invitation_id in (${old}) returning id`;
    const invs = await tx`
      update invitations set invitee_name = 'محذوف', invitee_org = null, invitee_title = null, anonymized_at = now()
      where kind = 'personal' and anonymized_at is null and id in (${old}) returning id`;
    return regs.length + invs.length;
  });
  if (result) await audit('system', 'retention.run', 'guests', { anonymized: result, retention_days });
  return { anonymized: result };
}
