import { test, expect } from '@playwright/test';
import { reset, seedInvitations, loginOwner } from './db';
import { E2E } from './config';

test('empty dashboard shows friendly empty states, not errors', async ({ page }) => {
  await reset();
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}`);
  await expect(page.getByText('لا توجد فعالية قادمة').first()).toBeVisible();
  await expect(page.getByText('لا توجد طلبات بانتظارك')).toBeVisible();
  await expect(page.getByText('لا توجد دعوة عامة بعد')).toBeVisible();
});

test('dashboard shows the next event with a live countdown and the general link', async ({ page }) => {
  await reset();
  await seedInvitations();
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}`);
  await expect(page.getByRole('heading', { name: 'ثورة الصواريخ' })).toBeVisible();
  await expect(page.getByText('localhost:3100/i/rr26')).toBeVisible();
  const seconds = page.getByText('ثانية').locator('xpath=preceding-sibling::*[1]');
  const first = await seconds.textContent();
  await expect.poll(async () => seconds.textContent(), { timeout: 4000 }).not.toBe(first);
});

test('the sidebar links work and the logout ends the session', async ({ page }) => {
  await reset();
  await loginOwner(page);
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`/${E2E.ownerPath}`);
  await page.getByRole('button', { name: 'تسجيل الخروج' }).click();
  await expect(page).toHaveURL(/\/$/);
  expect((await page.goto(`/${E2E.ownerPath}`))?.status()).toBe(404);
});
