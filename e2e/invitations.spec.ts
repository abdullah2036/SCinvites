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
  page.once('dialog', (d) => d.accept());
  const row = page.locator('.row', { hasText: 'د. محمد أحمد' });
  await row.getByRole('button', { name: 'إلغاء الدعوة' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'أُلغيت الدعوة' })).toBeVisible();
  expect((await db`select status from invitations where slug = 'personalinvite01'`)[0].status).toBe('revoked');
  await page.goto('/i/personalinvite01');
  await expect(page.getByText('هذه الدعوة لم تعد متاحة')).toBeVisible();
});

test('empty list shows a friendly message', async ({ page }) => {
  await reset();
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/invitations`);
  await expect(page.getByText('لم تُنشأ أي دعوة بعد')).toBeVisible();
});
