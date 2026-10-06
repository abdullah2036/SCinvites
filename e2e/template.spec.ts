import { test, expect } from '@playwright/test';
import { db, reset, loginOwner } from './db';
import { E2E } from './config';

test.beforeEach(async ({ page }) => {
  await reset();
  await db`insert into events (title, subtitle, latin_title, track, starts_at, place_type) values ('تفاعل', 'يوم الكيمياء 2026', 'REACTION', 'chem', now() + interval '15 days', 'none')`;
  await loginOwner(page);
});

test('owner sets up a template, saves it as a draft, then approves and publishes it', async ({ page }) => {
  await page.goto(`/${E2E.ownerPath}/templates/new`);
  await page.getByRole('combobox').first().selectOption({ label: 'تفاعل' });
  await page.getByRole('button', { name: /الكيمياء/ }).first().click();
  await page.getByRole('button', { name: /عاجي/ }).click(); // toggle ivory off
  await page.getByLabel('اللجان المسموح لها').fill('لجنة العلاقات، لجنة الفعاليات');
  await page.getByRole('button', { name: 'متحدث', exact: true }).click();
  await page.getByRole('button', { name: 'حفظ كمسودة' }).click();
  await expect(page.getByText('حُفظت المسودة')).toBeVisible();
  const [draft] = await db`select status, track, allowed_colors, allowed_committees, stamp_types from templates`;
  expect(draft).toMatchObject({ status: 'draft', track: 'chem', allowed_colors: ['petrol', 'night'], allowed_committees: ['لجنة العلاقات', 'لجنة الفعاليات'] });
  expect(draft.stamp_types).toContain('متحدث');

  await page.getByRole('button', { name: 'اعتماد ونشر' }).click();
  await expect(page.getByText('اعتُمد · شوفيه في معرض القوالب')).toBeVisible();
  await expect.poll(async () => (await db`select status from templates`)[0].status).toBe('approved');
});

test('editing an approved template creates a new version and keeps the old one live', async ({ page }) => {
  const [ev] = await db`select id from events`;
  const [t] = await db`insert into templates (event_id, track, stamp_types, status, approved_at) values (${ev.id}, 'chem', '{VIP}', 'approved', now()) returning id`;
  await page.goto(`/${E2E.ownerPath}/templates/${t.id}`);
  await expect(page.getByText(/إصدار جديد/)).toBeVisible();
  await page.getByRole('button', { name: 'ضيف', exact: true }).click();
  await page.getByRole('button', { name: /اعتماد ونشر/ }).click();
  await expect(page.getByText('اعتُمد · شوفيه في معرض القوالب')).toBeVisible();
  const rows = await db`select version, status from templates order by version`;
  expect(rows).toEqual([
    { version: 1, status: 'superseded' },
    { version: 2, status: 'approved' },
  ]);
});
