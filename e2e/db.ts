import postgres from 'postgres';
import { E2E } from './config';

export const db = postgres(E2E.dbURL, { prepare: false, max: 2, onnotice: () => {} });

export async function reset() {
  await db.unsafe(`truncate audit_log, rate_limits, auth_attempts, sessions, login_tokens, rsvps, registrations, invitations,
    leader_request_people, leader_requests, leaders, templates, events, settings, semesters restart identity cascade`);
}

export async function seedInvitations() {
  const [ev] = await db`insert into events (title, subtitle, latin_title, track, starts_at, place_type, place_name, place_url)
    values ('ثورة الصواريخ', 'أسبوع الفلك والفضاء 2026', 'ROCKET REVOLUTION', 'space', now() + interval '20 days', 'in_person', 'قاعة الفعاليات الرئيسية', 'https://maps.example.com/hall')
    returning id`;
  const [t] = await db`insert into templates (event_id, track, stamp_types, status, approved_at) values (${ev.id}, 'space', '{VIP}', 'approved', now()) returning id`;
  await db`insert into invitations (template_id, color, stamp, kind, slug, place_type, place_name, place_url) values
    (${t.id}, 'night', 'عضو', 'general', 'rr26', 'in_person', 'قاعة الفعاليات الرئيسية', 'https://maps.example.com/hall')`;
  await db`insert into invitations (template_id, color, stamp, kind, invitee_name, invitee_org, slug, place_type, place_name, place_url) values
    (${t.id}, 'petrol', 'VIP', 'personal', 'د. محمد أحمد', 'وكالة الفضاء السعودية', 'personalinvite01', 'online', 'بث مباشر عبر Zoom', 'https://zoom.example.com/j/1')`;
  await db`insert into invitations (template_id, color, stamp, kind, invitee_name, slug, status, revoked_at) values
    (${t.id}, 'ivory', 'VIP', 'personal', 'ضيف ملغى', 'revokedinvite001', 'revoked', now())`;
  return { eventId: ev.id, templateId: t.id };
}

import type { Page } from '@playwright/test';

/** Logs the browser context in as the owner (cookie set by the real login API). */
export async function loginOwner(page: Page) {
  const res = await page.request.post('/api/owner/login', { data: { password: E2E.ownerPassword }, headers: { origin: E2E.baseURL } });
  if (!res.ok()) throw new Error(`owner login failed: ${res.status()}`);
}
