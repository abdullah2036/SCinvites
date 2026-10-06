// Seeds the local dev database with a realistic demo (events, templates, invitations, leaders, RSVPs).
// Usage: npm run db:dev (in another terminal), then: npm run db:seed
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL ?? 'postgres://postgres:postgres@127.0.0.1:54329/postgres', { prepare: false, onnotice: () => {} });
const day = 86400_000;
const at = (d: number, h = 19) => new Date(Math.floor(Date.now() / day) * day + d * day + (h - 3) * 3600_000);

await sql.unsafe(`truncate audit_log, rate_limits, auth_attempts, sessions, login_tokens, rsvps, registrations, invitations,
  leader_request_people, leader_requests, leaders, templates, events, settings, semesters restart identity cascade`);

await sql`insert into settings ${sql([
  { key: 'owner_name', value: sql.json('جنى سقطي') },
  { key: 'owner_title', value: sql.json('رئيسة قسم الإعلام') },
  { key: 'owner_email', value: sql.json('owner@example.com') },
])}`;
await sql`insert into semesters (name, starts_on, ends_on) values ('الفصل الأول ١٤٤٨', ${at(-40)}, ${at(80)}), ('الفصل الثاني ١٤٤٨', ${at(81)}, ${at(200)})`;

const events = [
  ['ثورة الصواريخ', 'أسبوع الفلك والفضاء 2026', 'ROCKET REVOLUTION', 'space', 6, 'in_person', 'قاعة الفعاليات الرئيسية', 'https://maps.google.com/?q=science+hall'],
  ['تفاعل', 'يوم الكيمياء 2026', 'REACTION', 'chem', 14, 'in_person', 'مختبر الكيمياء ٢', 'https://maps.google.com/?q=chem+lab'],
  ['شيفرة الحياة', 'أسبوع الأحياء 2026', 'CODE OF LIFE', 'bio', 25, 'online', 'بث مباشر عبر Zoom', 'https://zoom.us/j/123456'],
  ['التحدي', 'دوري نادي العلوم الرياضي', 'THE CHALLENGE', 'sport', -12, 'in_person', 'الملعب الرئيسي', 'https://maps.google.com/?q=stadium'],
  ['لقاء الأعضاء', 'لقاء أعضاء نادي العلوم', 'MEMBERS MEETUP', 'club', -30, 'in_person', 'بهو الكلية', 'https://maps.google.com/?q=college'],
] as const;
const tpl: Record<string, string> = {};
for (const [title, subtitle, latin, track, d, pt, pn, pu] of events) {
  const [e] = await sql`insert into events (title, subtitle, latin_title, track, starts_at, place_type, place_name, place_url)
    values (${title}, ${subtitle}, ${latin}, ${track}, ${at(d)}, ${pt}, ${pn}, ${pu}) returning id`;
  const [t] = await sql`insert into templates (event_id, track, allowed_colors, stamp_types, allowed_committees, status, approved_at)
    values (${e.id}, ${track}, ${['night', 'petrol', 'ivory']}, ${['VIP', 'ضيف', 'متحدث', 'شريك']}, ${track === 'space' ? ['لجنة العلاقات', 'لجنة الفعاليات'] : []}, 'approved', now()) returning id`;
  tpl[track] = t.id;
}
const [rel] = await sql`insert into leaders (name, email, committee, status, approved_at) values ('م. خالد الحربي', 'khalid@uqu.edu.sa', 'لجنة العلاقات', 'approved', now()) returning id`;
await sql`insert into leaders (name, email, committee) values ('سارة الغامدي', 'sara@uqu.edu.sa', 'لجنة الفعاليات')`;
const [req] = await sql`insert into leader_requests (leader_id, template_id, stamp, color, place_type, place_name, place_url)
  values (${rel.id}, ${tpl.space}, 'VIP', 'night', 'in_person', 'قاعة الفعاليات الرئيسية', 'https://maps.google.com/?q=science+hall') returning id`;
await sql`insert into leader_request_people (request_id, position, name, org) values
  (${req.id}, 0, 'د. هالة البيشي', 'جامعة الملك عبدالعزيز'), (${req.id}, 1, 'أ. عبدالله الغامدي', 'شركة التأمين التعاوني'), (${req.id}, 2, 'م. ريم العمري', 'أرامكو')`;

const people = [['د. محمد أحمد', 'وكالة الفضاء السعودية', 'confirmed', 'whatsapp'], ['أ. نورة القحطاني', 'مدينة الملك عبدالعزيز للعلوم والتقنية', 'opened', 'email'], ['م. سلمان العتيبي', 'الجمعية الفلكية بجدة', 'created', null], ['د. لينا الحربي', 'جامعة أم القرى', 'declined', 'whatsapp']] as const;
let i = 0;
for (const [name, org, status, src] of people) {
  const [inv] = await sql`insert into invitations (template_id, color, stamp, kind, invitee_name, invitee_org, slug, place_type, place_name, place_url, status, opened_at, open_source, open_device)
    values (${tpl.space}, 'night', 'VIP', 'personal', ${name}, ${org}, ${'demo' + String(i++).padStart(12, '0')}, 'in_person', 'قاعة الفعاليات الرئيسية', 'https://maps.google.com/?q=science+hall',
            ${status}, ${status === 'created' ? null : at(-2, 20)}, ${src}, ${src ? 'mobile' : null}) returning id`;
  if (status === 'confirmed' || status === 'declined') await sql`insert into rsvps (invitation_id, answer, answered_at) values (${inv.id}, ${status === 'confirmed' ? 'yes' : 'no'}, ${at(-2, 21)})`;
}
const [gen] = await sql`insert into invitations (template_id, color, stamp, kind, slug, place_type, place_name, place_url)
  values (${tpl.space}, 'night', 'عضو', 'general', 'rr26', 'in_person', 'قاعة الفعاليات الرئيسية', 'https://maps.google.com/?q=science+hall') returning id`;
const sources = ['whatsapp', 'whatsapp', 'whatsapp', 'instagram', 'x', 'telegram', 'qr', 'direct'];
for (let k = 0; k < 24; k++) {
  const [r] = await sql`insert into registrations (invitation_id, name, email, source, device, created_at)
    values (${gen.id}, ${'عضو ' + (k + 1)}, ${`member${k}@example.com`}, ${sources[k % sources.length]}, ${k % 5 ? 'mobile' : 'desktop'}, ${at(-(k % 6), 18 + (k % 4))}) returning id`;
  if (k % 4 !== 3) await sql`insert into rsvps (invitation_id, registration_id, answer, answered_at) values (${gen.id}, ${r.id}, ${k % 7 === 0 ? 'no' : 'yes'}, ${at(-(k % 6), 19 + (k % 3))})`;
}
console.log('Demo data seeded. General link: /i/rr26 · personal: /i/demo000000000000');
await sql.end();
