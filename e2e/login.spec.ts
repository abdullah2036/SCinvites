import { test, expect } from '@playwright/test';
import { db, reset } from './db';
import { E2E } from './config';

test.beforeEach(reset);

test('clicking the club logo opens the hidden owner login; wrong then right password', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'نادي العلوم' }).first().click();
  const pass = page.getByLabel('كلمة السر');
  await pass.fill('wrong-password');
  await page.getByRole('button', { name: 'دخول', exact: true }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'كلمة السر غير صحيحة' })).toBeVisible();
  await pass.fill(E2E.ownerPassword);
  await pass.press('Enter');
  await expect(page).toHaveURL(new RegExp(`/${E2E.ownerPath}$`));
});

test('the studio is hidden at /studio and behind the secret path without a session', async ({ page }) => {
  expect((await page.goto('/studio'))?.status()).toBe(404);
  expect((await page.goto(`/${E2E.ownerPath}`))?.status()).toBe(404);
});

test('leaders request access with a name and an s4 university email (no committee)', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByLabel('لجنتك')).toHaveCount(0);
  await page.getByLabel('اسمك').fill('خالد الحربي');
  await page.getByLabel('بريدك الجامعي').fill('khalid@uqu.edu.sa');
  await expect(page.getByText('البريد الجامعي يبدأ بـ s4 ثم رقمك الجامعي')).toBeVisible();
  await page.getByRole('button', { name: 'طلب الدخول' }).click();
  await expect(page.getByText(/استخدم بريدك الجامعي، مثل/)).toBeVisible();
  await page.getByLabel('بريدك الجامعي').fill('S443012345@uqu.edu.sa');
  await expect(page.getByText('بريد جامعي صحيح')).toBeVisible();
  await page.getByRole('button', { name: 'طلب الدخول' }).click();
  await expect(page.getByText('وصل طلبك')).toBeVisible();
  const [l] = await db`select name, email, status from leaders`;
  expect(l).toEqual({ name: 'خالد الحربي', email: 's443012345@uqu.edu.sa', status: 'pending' });
});

test('the owner path never ships in client JavaScript', async ({ page }) => {
  await page.goto('/');
  const scripts = await page.locator('script[src]').evaluateAll((els) => els.map((e) => (e as HTMLScriptElement).src));
  for (const src of scripts) {
    const body = await (await page.request.get(src)).text();
    expect(body.includes(E2E.ownerPath), src).toBe(false);
  }
});

test('the login page switches to a bottom layout on phones without horizontal scroll', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});

