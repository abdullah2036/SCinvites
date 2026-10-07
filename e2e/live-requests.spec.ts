import { test, expect } from '@playwright/test';
import { db, reset, loginOwner } from './db';
import { E2E } from './config';

// The owner keeps the approvals page open while a leader asks for access in another window: a banner must appear by
// itself and lead to the request, which the owner approves.
test('a new access request is announced on any open owner page and can be approved from there', async ({ page, browser }) => {
  test.setTimeout(120_000);
  await reset();
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/approvals`);
  await expect(page.getByText(/طلبات دخول القادة الجدد في «الإعدادات»/)).toBeVisible();

  const other = await browser.newContext({ baseURL: E2E.baseURL });
  const leader = await other.newPage();
  await leader.goto('/');
  await leader.getByLabel('اسمك').fill('هند');
  await leader.getByLabel('بريدك الجامعي').fill('s443000777@uqu.edu.sa');
  await leader.getByRole('button', { name: 'دخول', exact: true }).click();
  await expect(leader.getByText('وصل طلبك')).toBeVisible();

  const banner = page.getByRole('status').filter({ hasText: 'طلب دخول جديد من قائد' });
  await expect(banner).toBeVisible({ timeout: 45_000 });
  await banner.getByRole('link', { name: 'مراجعة' }).click();
  await expect(page.getByText('هند · s443000777@uqu.edu.sa')).toBeVisible();
  await page.getByRole('button', { name: 'موافقة' }).click();
  await expect.poll(async () => (await db`select status from leaders`)[0].status).toBe('approved');

  // the leader's waiting screen lets them in by itself (it checks every 30 s)
  await expect(leader).toHaveURL(/\/leader$/, { timeout: 45_000 });
  await other.close();
});
