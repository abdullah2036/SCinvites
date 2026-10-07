import { sql } from '@/lib/server/db';

const TABLES = [
  'audit_log', 'rate_limits', 'auth_attempts', 'sessions', 'login_tokens', 'rsvps', 'registrations',
  'invitations', 'leader_request_people', 'leader_requests', 'leaders', 'templates', 'events', 'settings', 'semesters',
];

export async function resetDb(): Promise<void> {
  await sql.unsafe(`truncate ${TABLES.join(', ')} restart identity cascade`);
}

type Row = Record<string, any>;

async function insert(table: string, values: Row): Promise<Row> {
  const [row] = await sql`insert into ${sql(table)} ${sql(values)} returning *`;
  return row;
}

let n = 0;
const uniq = () => `${Date.now().toString(36)}${(n++).toString(36)}`;

export function makeEvent(p: Row = {}) {
  return insert('events', {
    title: 'ثورة الصواريخ',
    subtitle: 'أسبوع الفلك والفضاء 2026',
    latin_title: 'ROCKET REVOLUTION',
    track: 'space',
    starts_at: new Date(Date.now() + 10 * 86400_000),
    place_type: 'in_person',
    place_name: 'قاعة الفعاليات الرئيسية',
    place_url: 'https://maps.example.com/hall',
    ...p,
  });
}

export async function makeTemplate(p: Row = {}) {
  const event_id = p.event_id ?? (await makeEvent()).id;
  return insert('templates', {
    track: 'space',
    stamp_types: ['VIP', 'متحدث'],
    status: 'approved',
    approved_at: new Date(),
    ...p,
    event_id,
  });
}

export function makeLeader(p: Row = {}) {
  return insert('leaders', {
    name: 'خالد الحربي',
    email: `s4${uniq()}@uqu.edu.sa`,
    status: 'approved',
    approved_at: new Date(),
    ...p,
  });
}

export async function makeInvitation(p: Row = {}) {
  const template_id = p.template_id ?? (await makeTemplate()).id;
  return insert('invitations', {
    color: 'night',
    stamp: 'VIP',
    kind: 'personal',
    invitee_name: 'د. محمد أحمد',
    invitee_org: 'وكالة الفضاء السعودية',
    place_type: 'in_person',
    place_name: 'قاعة الفعاليات الرئيسية',
    place_url: 'https://maps.example.com/hall',
    slug: `s${uniq()}`.padEnd(16, '0').slice(0, 16),
    ...p,
    template_id,
  });
}
