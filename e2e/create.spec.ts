import { test, expect } from '@playwright/test';
import { db, reset, seedInvitations, loginOwner } from './db';
import { E2E } from './config';

test.beforeEach(async ({ page }) => {
  await reset();
  await seedInvitations();
  await db`insert into settings (key, value) values ('owner_email', ${db.json('owner@example.com')})`;
  await loginOwner(page);
});

test('owner creates a personal invitation, gets the link, and sends a test copy', async ({ page }) => {
  await page.goto(`/${E2E.ownerPath}/create`);
  await page.getByRole('textbox', { name: /الاسم|اسم المدعو/ }).first().fill('أ. نورة القحطاني');
  await expect(page.getByText('أ. نورة القحطاني').first()).toBeVisible();
  await page.getByRole('button', { name: 'إنشاء الدعوة' }).click();
  await expect(page.getByText('دعوتك جاهزة')).toBeVisible();
  const row = (await db`select slug, invitee_name, kind from invitations where invitee_name = 'أ. نورة القحطاني'`)[0];
  expect(row.kind).toBe('personal');
  await expect(page.getByText(new RegExp(`/i/${row.slug}`))).toBeVisible();
});

test('owner creates a general invitation with a custom short link', async ({ page }) => {
  await page.goto(`/${E2E.ownerPath}/create`);
  await page.getByRole('button', { name: 'دعوة عامة (رابط واحد)' }).click();
  await page.getByPlaceholder('rr26').fill('club-night');
  await page.getByRole('button', { name: 'إنشاء الدعوة' }).click();
  await expect(page.getByText('دعوتك جاهزة')).toBeVisible();
  const [row] = await db`select kind, stamp from invitations where slug = 'club-night'`;
  expect(row).toEqual({ kind: 'general', stamp: 'عضو' });
});

test('owner creates a public VIP link (a public link can carry any stamp)', async ({ page }) => {
  await page.goto(`/${E2E.ownerPath}/create`);
  await page.waitForLoadState('networkidle');
  // all five stamps for personal and public, even though this template only lists VIP
  const stamps = ['VIP', 'ضيف', 'متحدث', 'شريك', 'عضو'];
  for (const s of stamps) await expect(page.getByRole('button', { name: s, exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'دعوة عامة (رابط واحد)' }).click();
  for (const s of stamps) await expect(page.getByRole('button', { name: s, exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'VIP', exact: true }).click();
  await page.getByPlaceholder('rr26').fill('vip-night');
  await page.getByRole('button', { name: 'إنشاء الدعوة' }).click();
  await expect(page.getByText('دعوتك جاهزة')).toBeVisible();
  const [row] = await db`select kind, stamp from invitations where slug = 'vip-night'`;
  expect(row).toEqual({ kind: 'general', stamp: 'VIP' });
});

test('owner creates several invitations at once from pasted names', async ({ page }) => {
  await page.goto(`/${E2E.ownerPath}/create`);
  await page.getByRole('button', { name: 'عدة مدعوين' }).click();
  await page.locator('#bulk').fill('د. هالة البيشي — جامعة الملك عبدالعزيز\nأ. نورة القحطاني\nم. سلمان العتيبي');
  await page.getByRole('button', { name: 'إنشاء الدعوة' }).click();
  await expect(page.getByText('دعوتك جاهزة')).toBeVisible();
  const [{ n }] = await db`select count(*)::int as n from invitations where kind = 'personal' and status = 'created' and invitee_name in ('د. هالة البيشي', 'أ. نورة القحطاني', 'م. سلمان العتيبي')`;
  expect(n).toBe(3);
});

test('the test copy is sent before sharing', async ({ page }) => {
  await page.goto(`/${E2E.ownerPath}/create`);
  await page.getByRole('textbox', { name: /الاسم|اسم المدعو/ }).first().fill('ضيف تجريبي');
  await page.getByRole('button', { name: 'أرسلها لنفسي أولًا' }).click();
  await expect(page.getByText(/أُرسلت نسخة تجريبية/)).toBeVisible();
});
