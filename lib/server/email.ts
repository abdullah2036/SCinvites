import { Resend } from 'resend';
import { getSettings } from './settings';

export type OutboxMessage = { to: string; subject: string; html: string };
/** Messages captured when RESEND_API_KEY is not set (tests and local dev). */
export const outbox: OutboxMessage[] = [];

export async function sendEmail(msg: OutboxMessage): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    outbox.push(msg);
    if (process.env.NODE_ENV === 'development') console.info('[email]', msg.to, msg.subject);
    return;
  }
  const s = await getSettings();
  const from = `${s.email_sender_name} <${s.email_sender_address ?? 'onboarding@resend.dev'}>`;
  const { error } = await new Resend(key).emails.send({ from, to: msg.to, subject: msg.subject, html: msg.html });
  if (error) throw new Error(`email failed: ${error.message}`);
}

const ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ESCAPES[c]);
}

export function emailLayout(body: string): string {
  return `<div dir="rtl" lang="ar" style="font-family:Tahoma,Arial,sans-serif;font-size:15px;line-height:1.6;color:#18292C">${body}</div>`;
}
