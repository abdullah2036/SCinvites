import { test, expect } from '@playwright/test';
import { db, reset, loginOwner } from './db';
import { E2E } from './config';

// The whole path a template takes, using only what people click: the owner creates an event and publishes a
// template, a student asks for leader access, the owner approves them, and the leader sees the template.
test('a template the owner publishes reaches an approved leader (UI only, no database shortcuts)', async ({ page, browser }) => {
  await reset();
  const day = new Date(Date.now() + 20 * 86400_000 + 3 * 3600_000).toISOString().slice(0, 10);

  // owner: event
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/events`);
  await page.getByRole('link', { name: 'فعالية جديدة' }).click();
  const dialog = page.getByRole('dialog', { name: 'فعالية جديدة' });
  await dialog.getByLabel('اسم الفعالية').fill('اختبار القوالب');
  await dialog.getByLabel(/يبدأ/).fill(`${day}T19:00`);
  await dialog.getByRole('button', { name: 'حفظ' }).click();
  await expect(dialog).toHaveCount(0);

  // owner: template for that event, approved and published
  await page.getByRole('link', { name: 'قالب' }).first().click();
  await page.waitForURL(/\/templates\/new/);
  await page.waitForLoadState('networkidle'); // full page load: wait until the editor is interactive
  await expect(page.getByText('بعد الاعتماد يظهر مباشرة لكل القادة المعتمدين')).toBeVisible();
  await page.getByRole('button', { name: 'اعتماد ونشر' }).click();
  await expect(page.getByText('اعتُمد · شوفيه في معرض القوالب')).toBeVisible();

  // student: asks for access
  const leaderCtx = await browser.newContext({ baseURL: E2E.baseURL });
  const leader = await leaderCtx.newPage();
  await leader.goto('/');
  await leader.waitForLoadState('networkidle');
  await leader.getByLabel('اسمك').fill('سعد القرشي');
  await leader.getByLabel('بريدك الجامعي').fill('s443055555@uqu.edu.sa');
  await leader.getByRole('button', { name: 'دخول', exact: true }).click();
  await expect(leader.getByText('وصل طلبك')).toBeVisible();

  // owner: approves in Settings
  await page.goto(`/${E2E.ownerPath}/settings`);
  await page.getByRole('button', { name: 'موافقة' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'يدخل الآن من الصفحة الرئيسية' })).toBeVisible();

  // leader: signs in with the email and sees the template
  await leader.goto('/');
  await leader.waitForLoadState('networkidle');
  await leader.getByLabel('بريدك الجامعي').fill('s443055555@uqu.edu.sa');
  await leader.getByRole('button', { name: 'دخول', exact: true }).click();
  await expect(leader).toHaveURL(/\/leader$/);
  await expect(leader.getByText('اختبار القوالب').first()).toBeVisible();
  await expect(leader.getByText(/لا توجد قوالب معتمدة بعد/)).toHaveCount(0);

  const [t] = await db`select t.status, e.status as event_status from templates t join events e on e.id = t.event_id`;
  expect(t).toEqual({ status: 'approved', event_status: 'active' });
  await leaderCtx.close();
});
