import { test, expect } from '@playwright/test';
import { db, reset, seedInvitations, loginOwner } from './db';
import { E2E } from './config';

test('owner searches, filters, previews and revokes an invitation', async ({ page }) => {
  await reset();
  await seedInvitations();
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/invitations`);
  await page.getByRole('searchbox').fill('محمد');
  await expect(page.getByText('د. محمد أحمد')).toBeVisible();
  await expect(page.getByText('دعوة عامة · rr26')).toHaveCount(0);
  await page.getByRole('searchbox').fill('');
  await page.getByRole('button', { name: 'ملغاة' }).click();
  await expect(page.getByText('ضيف ملغى')).toBeVisible();
  await page.getByRole('button', { name: 'الكل' }).click();
  await page.getByRole('button', { name: 'معاينة' }).first().click();
  await expect(page.getByRole('dialog', { name: 'معاينة الدعوة' })).toBeVisible();
  await page.getByRole('button', { name: 'إغلاق' }).click();
  const row = page.locator('.row', { hasText: 'د. محمد أحمد' });
  await row.getByRole('button', { name: 'إدارة الدعوة' }).click();
  const manage = page.getByRole('dialog', { name: 'إدارة الدعوة' });
  page.once('dialog', (d) => d.accept());
  await manage.getByRole('button', { name: /إلغاء الدعوة/ }).click();
  await expect(page.getByRole('status').filter({ hasText: 'أُلغيت الدعوة' })).toBeVisible();
  expect((await db`select status from invitations where slug = 'personalinvite01'`)[0].status).toBe('revoked');
  await page.goto('/i/personalinvite01');
  await expect(page.getByText('هذه الدعوة لم تعد متاحة')).toBeVisible();
});

test('owner corrects an invitation name, then deletes a test invitation for good', async ({ page }) => {
  await reset();
  await seedInvitations();
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/invitations`);
  await page.locator('.row', { hasText: 'د. محمد أحمد' }).getByRole('button', { name: 'إدارة الدعوة' }).click();
  const manage = page.getByRole('dialog', { name: 'إدارة الدعوة' });
  await manage.getByLabel('اسم المدعو').fill('د. محمد أحمد الزهراني');
  await manage.getByRole('button', { name: 'حفظ التعديلات' }).click();
  await expect(page.getByText('د. محمد أحمد الزهراني')).toBeVisible();
  expect((await db`select invitee_name from invitations where slug = 'personalinvite01'`)[0].invitee_name).toBe('د. محمد أحمد الزهراني');

  await page.locator('.row', { hasText: 'د. محمد أحمد الزهراني' }).getByRole('button', { name: 'إدارة الدعوة' }).click();
  page.once('dialog', (d) => d.accept());
  await page.getByRole('dialog', { name: 'إدارة الدعوة' }).getByRole('button', { name: 'حذف نهائيًا' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'حُذفت الدعوة' })).toBeVisible();
  await expect(page.getByText('د. محمد أحمد الزهراني')).toHaveCount(0);
  expect(await db`select 1 from invitations where slug = 'personalinvite01'`).toHaveLength(0);
});

test('empty list shows a friendly message', async ({ page }) => {
  await reset();
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/invitations`);
  await expect(page.getByText('لم تُنشأ أي دعوة بعد')).toBeVisible();
});

test('the owner sees every visitor who registered through a public link, with email and answer', async ({ page }) => {
  await reset();
  await seedInvitations();
  const [inv] = await db`select id from invitations where slug = 'rr26'`;
  const [r1] = await db`insert into registrations (invitation_id, name, email) values (${inv.id}, 'ريم الزهراني', 'reem@example.com') returning id`;
  await db`insert into registrations (invitation_id, name, email) values (${inv.id}, 'سارة القرني', 'sara@example.com')`;
  await db`insert into rsvps (invitation_id, registration_id, answer) values (${inv.id}, ${r1.id}, 'yes')`;
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/invitations`);
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: /قائمة الزوار/ }).click();
  const dialog = page.getByRole('dialog', { name: 'قائمة الزوار' });
  await expect(dialog.getByText('ريم الزهراني')).toBeVisible();
  await expect(dialog.getByText('reem@example.com')).toBeVisible();
  await expect(dialog.getByText('سيحضر', { exact: true })).toBeVisible();
  await expect(dialog.getByText('sara@example.com')).toBeVisible();
  await expect(dialog.getByText('لم يرد بعد')).toBeVisible();
});
