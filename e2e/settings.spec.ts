import { test, expect } from '@playwright/test';
import { db, reset, loginOwner } from './db';
import { E2E } from './config';

test('owner approves a leader request; the leader then signs in by email', async ({ page }) => {
  await reset();
  await db`insert into leaders (name, email) values ('سارة الغامدي', 's443000222@uqu.edu.sa')`;
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/settings`);
  await expect(page.getByText('سارة الغامدي · s443000222@uqu.edu.sa')).toBeVisible();
  await page.getByRole('button', { name: 'موافقة' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'يدخل الآن من الصفحة الرئيسية ببريده الجامعي' })).toBeVisible();
  expect((await db`select status from leaders`)[0].status).toBe('approved');
});

test('owner saves the profile email and toggles a notification', async ({ page }) => {
  await reset();
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/settings`);
  await page.getByLabel(/بريدك/).fill('owner@example.com');
  await page.getByRole('button', { name: 'حفظ الملف الشخصي' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'حُفظت الإعدادات' })).toBeVisible();
  await expect.poll(async () => (await db`select value from settings where key = 'owner_email'`)[0]?.value).toBe('owner@example.com');
});

test('rejecting asks first, and a turned-off leader can be re-enabled', async ({ page }) => {
  await reset();
  await db`insert into leaders (name, email) values ('نورة', 's443000444@uqu.edu.sa')`;
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/settings`);
  page.once('dialog', (d) => d.dismiss()); // a stray tap on «×» does nothing
  await page.getByRole('button', { name: 'رفض' }).click();
  await expect.poll(async () => (await db`select status from leaders`)[0].status).toBe('pending');
  await page.getByRole('button', { name: 'موافقة' }).click();
  await expect.poll(async () => (await db`select status from leaders`)[0].status).toBe('approved');
  page.once('dialog', (d) => d.accept());
  await page.getByRole('button', { name: 'إيقاف' }).click();
  await expect(page.getByText('موقوف')).toBeVisible();
  await page.getByRole('button', { name: 'إعادة التفعيل' }).click();
  await expect.poll(async () => (await db`select status from leaders`)[0].status).toBe('approved');
  await expect(page.getByRole('button', { name: 'إيقاف' })).toBeVisible();
});
