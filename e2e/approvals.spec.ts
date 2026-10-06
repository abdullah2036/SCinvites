import { test, expect } from '@playwright/test';
import { db, reset, seedInvitations, seedRequest, loginOwner } from './db';
import { E2E } from './config';

test('owner excludes one name and approves the rest', async ({ page }) => {
  await reset();
  const { templateId } = await seedInvitations();
  const { requestId } = await seedRequest(templateId);
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/approvals`);
  await expect(page.getByRole('heading', { name: /دعوات VIP · ٣/ })).toBeVisible();
  await page.getByRole('button', { name: /أ. عبدالله الغامدي/ }).click();
  await page.getByRole('button', { name: 'اعتماد ٢ أسماء' }).click();
  await expect(page.getByText('اعتُمدت وأُبلغ القائد')).toBeVisible();
  const names = (await db`select invitee_name from invitations where leader_request_id = ${requestId} order by invitee_name`).map((r) => r.invitee_name);
  expect(names.sort()).toEqual(['د. هالة البيشي', 'م. ريم العمري'].sort());
});

test('requesting changes needs a note', async ({ page }) => {
  await reset();
  const { templateId } = await seedInvitations();
  const { requestId } = await seedRequest(templateId);
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/approvals`);
  await page.getByRole('button', { name: 'طلب تعديل' }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'اكتبي للقائد' })).toBeVisible();
  await page.getByLabel('ملاحظة للقائد').fill('أضف المسمى الوظيفي لكل اسم');
  await page.getByRole('button', { name: 'طلب تعديل' }).click();
  await expect.poll(async () => (await db`select status, note from leader_requests where id = ${requestId}`)[0]).toEqual({ status: 'changes_requested', note: 'أضف المسمى الوظيفي لكل اسم' });
});

test('empty queue shows a friendly message', async ({ page }) => {
  await reset();
  await loginOwner(page);
  await page.goto(`/${E2E.ownerPath}/approvals`);
  await expect(page.getByText('لا توجد طلبات بانتظارك')).toBeVisible();
});
