import { test, expect } from '@playwright/test';
import { db, reset, loginOwner } from './db';
import { E2E } from './config';

test.beforeEach(async ({ page }) => {
  await reset();
  await loginOwner(page);
});

test('owner creates an event, filters by track, and sees it on the events screen', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`/${E2E.ownerPath}/events`);
  await expect(page.getByText('لا توجد فعاليات بعد')).toBeVisible();
  await page.getByRole('link', { name: 'فعالية جديدة' }).click();
  const dialog = page.getByRole('dialog', { name: 'فعالية جديدة' });
  await dialog.getByLabel('اسم الفعالية').fill('تفاعل');
  await dialog.getByLabel('المسار').selectOption({ label: 'الكيمياء' });
  await dialog.getByLabel(/يبدأ/).fill('2026-11-03T19:00');
  await dialog.getByLabel('اسم المكان').fill('مختبر الكيمياء ٢');
  await dialog.getByRole('button', { name: 'حفظ' }).click();
  await expect(page.getByRole('heading', { name: 'تفاعل' }).or(page.getByText('تفاعل', { exact: true })).first()).toBeVisible();
  const [ev] = await db`select title, track, starts_at, place_name from events`;
  expect(ev).toMatchObject({ title: 'تفاعل', track: 'chem', place_name: 'مختبر الكيمياء ٢' });
  expect(new Date(ev.starts_at).toISOString()).toBe('2026-11-03T16:00:00.000Z');
  await page.getByRole('button', { name: 'الفيزياء' }).click();
  await expect(page.getByText('لا توجد فعاليات في هذا المسار')).toBeVisible();
});

test('gallery shows templates and filters by stamp and track', async ({ page }) => {
  const [ev] = await db`insert into events (title, track, starts_at) values ('تفاعل', 'chem', now() + interval '20 days') returning id`;
  await db`insert into templates (event_id, track, stamp_types, status, approved_at) values (${ev.id}, 'chem', '{متحدث}', 'approved', now())`;
  await db`insert into templates (event_id, track, stamp_types, status, approved_at) values (${ev.id}, 'space', '{VIP}', 'approved', now())`;
  await page.goto(`/${E2E.ownerPath}/templates`);
  await expect(page.locator('a.lift')).toHaveCount(2);
  await page.getByRole('button', { name: 'متحدث' }).click();
  await expect(page.locator('a.lift')).toHaveCount(1);
  await page.getByRole('button', { name: 'الكل' }).click();
  await page.getByRole('button', { name: 'الفلك والفضاء' }).click();
  await expect(page.locator('a.lift')).toHaveCount(1);
});
