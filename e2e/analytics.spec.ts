import { test, expect } from '@playwright/test';
import { db, reset, seedInvitations, loginOwner } from './db';
import { E2E } from './config';

test('owner sees analytics; a semester can be added and appears in the summary', async ({ page }) => {
  await reset();
  await seedInvitations();
  const [inv] = await db`select id from invitations where slug = 'personalinvite01'`;
  await db`update invitations set status = 'confirmed', opened_at = now() - interval '1 hour', open_source = 'whatsapp' where id = ${inv.id}`;
  await db`insert into rsvps (invitation_id, answer) values (${inv.id}, 'yes')`;
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/analytics`);
  await expect(page.getByRole('heading', { name: 'الإحصائيات' })).toBeVisible();
  await expect(page.getByText('أكّدوا الحضور')).toBeVisible();
  await expect(page.getByText(/أكثر وقت:/)).toBeVisible();
  await page.getByText('إضافة فصل دراسي').click();
  await page.getByPlaceholder('الفصل الأول ١٤٤٨').fill('الفصل الأول ١٤٤٨');
  const today = new Date();
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  await page.getByLabel('من').fill(iso(new Date(today.getTime() - 30 * 86400_000)));
  await page.getByLabel('إلى').fill(iso(new Date(today.getTime() + 90 * 86400_000)));
  await page.getByRole('button', { name: 'حفظ' }).click();
  await expect(page.getByRole('rowheader', { name: 'الفصل الأول ١٤٤٨' })).toBeVisible();
});

test('analytics API refuses non-owners', async ({ request }) => {
  expect((await request.get('/api/analytics')).status()).toBe(401);
});
