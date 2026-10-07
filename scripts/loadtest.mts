// Traffic test: simulates launch-day users against a running copy of the site and prints latency/error stats.
//
//   Full test (writes data — local/throwaway database only):
//     npm run loadtest -- --base http://localhost:3200 --students 400 --leaders 60 --minutes 2
//     (needs DATABASE_URL pointing at the same database the app uses, and OWNER_PATH; see docs/runbook.md)
//
//   Production check (read-only: pages and health, no sign-ins, no writes):
//     npm run loadtest -- --base https://your-site.example --read-only --users 50 --minutes 1 --slug <public slug>
//
// Students arrive in a spike (as when a link is posted in a WhatsApp group): open the invitation, register, answer.
// Leaders sign in by email, open their page and the create form, submit names, then auto-refresh every 30 s.
// The owner keeps the dashboard and approvals open (auto-refresh) and approves requests as they arrive.
import postgres from 'postgres';
import { createHash, randomBytes } from 'node:crypto';

const args = process.argv.slice(2);
const opt = (name: string, def: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : def;
};
const flag = (name: string) => args.includes(`--${name}`);

const BASE = opt('base', 'http://localhost:3200').replace(/\/$/, '');
const MINUTES = Number(opt('minutes', '2'));
const STUDENTS = Number(opt('students', '300'));
const LEADERS = Number(opt('leaders', '40'));
const USERS = Number(opt('users', '50'));
const SPREAD = Number(opt('spread', '60')); // seconds over which arrivals are spread
const READ_ONLY = flag('read-only');
// Each simulated person gets their own address unless --shared-ip (many phones behind one carrier/campus IP).
const SHARED_IP = flag('shared-ip');
const OWNER_PATH = process.env.OWNER_PATH ?? 'studio-dev';
const END = Date.now() + MINUTES * 60_000;

type Stat = { ms: number[]; codes: Record<string, number> };
const stats = new Map<string, Stat>();
function record(name: string, ms: number, code: string) {
  const s = stats.get(name) ?? { ms: [], codes: {} };
  s.ms.push(ms);
  s.codes[code] = (s.codes[code] ?? 0) + 1;
  stats.set(name, s);
}

let inFlight = 0;
let peak = 0;
async function hit(name: string, path: string, init: RequestInit & { ip?: string; cookies?: Record<string, string> } = {}) {
  const headers = new Headers(init.headers);
  if (init.ip) headers.set('x-forwarded-for', init.ip);
  if (init.cookies) headers.set('cookie', Object.entries(init.cookies).map(([k, v]) => `${k}=${v}`).join('; '));
  if (init.method && init.method !== 'GET') headers.set('origin', new URL(BASE).origin);
  if (init.body) headers.set('content-type', 'application/json');
  headers.set('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) loadtest');
  const t = performance.now();
  inFlight++;
  peak = Math.max(peak, inFlight);
  try {
    const res = await fetch(BASE + path, { ...init, headers, redirect: 'manual', signal: AbortSignal.timeout(30_000) });
    const body = await res.text();
    record(name, performance.now() - t, String(res.status));
    return { res, body };
  } catch (e) {
    record(name, performance.now() - t, (e as Error).name === 'TimeoutError' ? 'timeout' : 'net-error');
    return null;
  } finally {
    inFlight--;
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const think = (min: number, max: number) => sleep((min + Math.random() * (max - min)) * 1000);
const ipFor = (n: number) => (SHARED_IP ? '10.0.0.1' : `10.${(n >> 16) & 255}.${(n >> 8) & 255}.${n & 255}`);
const cookieFrom = (res: Response, name: string) => {
  for (const line of res.headers.getSetCookie()) if (line.startsWith(`${name}=`)) return line.slice(name.length + 1).split(';')[0];
  return null;
};

// ---------- fixtures (full test only) ----------
type Fixtures = { slug: string; templateId: string; ownerToken: string; leaderEmails: string[] };

async function setup(): Promise<Fixtures & { sql: postgres.Sql }> {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set (the database the app under test uses)');
  const host = new URL(url).hostname;
  if (!['127.0.0.1', 'localhost', '::1'].includes(host) && !flag('allow-remote-db'))
    throw new Error(`Refusing to write test data to ${host}. The full test is for a local/throwaway database; use --read-only for production.`);
  const sql = postgres(url, { prepare: false, max: 3, onnotice: () => {} });
  const run = randomBytes(3).toString('hex');
  const [ev] = await sql`insert into events (title, subtitle, track, starts_at, place_type, place_name, place_url)
    values ('اختبار الضغط', ${'تشغيل ' + run}, 'space', now() + interval '10 days', 'in_person', 'القاعة', 'https://maps.example.com/x') returning id`;
  const [tpl] = await sql`insert into templates (event_id, track, stamp_types, allowed_committees, status, approved_at, request_deadline_days)
    values (${ev.id}, 'space', '{VIP,ضيف}', '{}', 'approved', now(), 0) returning id`;
  const slug = `lt-${run}`;
  await sql`insert into invitations (template_id, color, stamp, kind, slug, place_type, place_name) values (${tpl.id}, 'night', 'عضو', 'general', ${slug}, 'in_person', 'القاعة')`;
  const leaderEmails = Array.from({ length: LEADERS }, (_, i) => `lt${run}${i}@uqu.edu.sa`);
  if (leaderEmails.length)
    await sql`insert into leaders ${sql(leaderEmails.map((email, i) => ({ name: `قائد ${i}`, email, committee: 'لجنة الاختبار', status: 'approved', approved_at: new Date() })))}`;
  const ownerToken = randomBytes(32).toString('base64url');
  await sql`insert into sessions (subject, token_hash, user_agent, expires_at) values ('owner', ${createHash('sha256').update(ownerToken).digest('hex')}, 'loadtest', now() + interval '1 day')`;
  return { sql, slug, templateId: tpl.id, ownerToken, leaderEmails };
}

// ---------- virtual users ----------
async function student(n: number, slug: string) {
  const ip = ipFor(n);
  const page = await hit('student: open invitation page', `/i/${slug}?src=whatsapp`, { ip });
  if (page?.res.status !== 200) return;
  await think(2, 6);
  const open = await hit('student: register (name+email)', `/api/i/${slug}/open`, {
    method: 'POST', ip, body: JSON.stringify({ name: `طالب ${n}`, email: `s${n}-${slug}@st.uqu.edu.sa`, src: 'whatsapp' }),
  });
  const reg = open && cookieFrom(open.res, `sc_reg_${slug}`);
  if (!reg) return;
  await think(1, 4);
  await hit('student: answer سأحضر', `/api/i/${slug}/rsvp`, { method: 'POST', ip, cookies: { [`sc_reg_${slug}`]: reg }, body: JSON.stringify({ answer: 'yes' }) });
}

async function leader(n: number, email: string, templateId: string) {
  const ip = ipFor(100_000 + n);
  const login = await hit('leader: sign in by email', '/api/leaders/request', { method: 'POST', ip, body: JSON.stringify({ email }) });
  const token = login && cookieFrom(login.res, 'sc_leader');
  if (!token) return;
  const cookies = { sc_leader: token };
  await hit('leader: page', '/leader', { ip, cookies });
  await think(2, 5);
  await hit('leader: create form', `/leader/create/${templateId}`, { ip, cookies });
  await think(5, 15);
  const people = Array.from({ length: 15 }, (_, i) => ({ name: `ضيف ${n}-${i}`, org: 'جهة' }));
  await hit('leader: submit names', '/api/requests', { method: 'POST', ip, cookies, body: JSON.stringify({ templateId, stamp: 'VIP', color: 'night', people }) });
  while (Date.now() < END) {
    await sleep(30_000);
    if (Date.now() >= END) break;
    await hit('leader: auto-refresh', '/leader', { ip, cookies, headers: { RSC: '1' } });
  }
}

async function owner(f: Fixtures & { sql: postgres.Sql }) {
  const cookies = { sc_owner: f.ownerToken };
  const ip = '10.255.255.254';
  await hit('owner: dashboard', `/${OWNER_PATH}`, { ip, cookies });
  while (Date.now() < END) {
    await hit('owner: approvals page', `/${OWNER_PATH}/approvals`, { ip, cookies });
    const pending = await f.sql<{ id: string }[]>`select r.id from leader_requests r where r.status = 'pending' and r.template_id = ${f.templateId} order by created_at limit 5`;
    for (const r of pending)
      await hit('owner: approve request', `/api/requests/${r.id}/decide`, { method: 'POST', ip, cookies, body: JSON.stringify({ decision: 'approve' }) });
    await sleep(15_000);
    await hit('owner: dashboard auto-refresh', `/${OWNER_PATH}`, { ip, cookies, headers: { RSC: '1' } });
  }
}

async function reader(n: number, slug: string | null) {
  const ip = ipFor(n);
  while (Date.now() < END) {
    await hit('home page', '/', { ip });
    if (slug) await hit('invitation page', `/i/${slug}`, { ip });
    await hit('health (database)', '/api/health', { ip });
    await think(1, 3);
  }
}

// ---------- run ----------
const pct = (a: number[], p: number) => (a.length ? a[Math.min(a.length - 1, Math.floor((p / 100) * a.length))] : 0);
function report(started: number) {
  const secs = (Date.now() - started) / 1000;
  const rows = [...stats.entries()].map(([name, s]) => {
    const ms = [...s.ms].sort((a, b) => a - b);
    const ok = Object.entries(s.codes).filter(([c]) => /^[23]/.test(c)).reduce((n, [, v]) => n + v, 0);
    const bad = Object.entries(s.codes).filter(([c]) => !/^[23]/.test(c)).map(([c, v]) => `${c}×${v}`).join(' ');
    return { endpoint: name, requests: ms.length, ok, failures: bad || '-', p50: Math.round(pct(ms, 50)), p95: Math.round(pct(ms, 95)), p99: Math.round(pct(ms, 99)), max: Math.round(ms.at(-1) ?? 0) };
  });
  const total = rows.reduce((n, r) => n + r.requests, 0);
  console.log(`\n${BASE} — ${total} requests in ${secs.toFixed(0)} s (${(total / secs).toFixed(1)}/s), peak ${peak} in flight. Times in ms.`);
  console.table(rows);
}

const started = Date.now();
if (READ_ONLY) {
  const slug = opt('slug', '') || null;
  console.log(`Read-only: ${USERS} users for ${MINUTES} min against ${BASE}`);
  await Promise.all(Array.from({ length: USERS }, async (_, i) => {
    await sleep(Math.random() * SPREAD * 1000);
    await reader(i, slug);
  }));
  report(started);
} else {
  const f = await setup();
  console.log(`Full test: ${STUDENTS} students + ${LEADERS} leaders + owner for ${MINUTES} min against ${BASE}${SHARED_IP ? ' (all from ONE shared IP)' : ''}`);
  await Promise.all([
    owner(f),
    ...Array.from({ length: STUDENTS }, async (_, i) => {
      await sleep(Math.random() * SPREAD * 1000);
      await student(i, f.slug);
    }),
    ...f.leaderEmails.map(async (email, i) => {
      await sleep(Math.random() * SPREAD * 1000);
      await leader(i, email, f.templateId);
    }),
  ]);
  report(started);
  const [c] = await f.sql<{ regs: number; yes: number; reqs: number; invs: number }[]>`
    select (select count(*)::int from registrations r join invitations i on i.id = r.invitation_id where i.slug = ${f.slug}) as regs,
           (select count(*)::int from rsvps r join invitations i on i.id = r.invitation_id where i.slug = ${f.slug} and r.answer = 'yes') as yes,
           (select count(*)::int from leader_requests where template_id = ${f.templateId}) as reqs,
           (select count(*)::int from invitations where template_id = ${f.templateId} and kind = 'personal') as invs`;
  console.log(`Saved in the database: ${c.regs} registrations, ${c.yes} «سأحضر», ${c.reqs} leader requests, ${c.invs} personal invitations from approvals.`);
  await f.sql.end();
}
