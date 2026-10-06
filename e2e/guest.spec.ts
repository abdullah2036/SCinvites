import { test, expect } from '@playwright/test';
import { db, reset, seedInvitations } from './db';

test.beforeEach(async () => {
  await reset();
  await seedInvitations();
});

test('general invitation: loader → name/email → invitation with that name → confirm → returning guest skips the form', async ({ page }) => {
  await page.goto('/i/rr26?src=whatsapp');
  await expect(page.getByText('نجهّز دعوتك')).toBeVisible();
  await expect(page.getByLabel('الاسم')).toBeVisible({ timeout: 8000 });
  await page.getByLabel('الاسم').fill('ريم الزهراني');
  await page.getByLabel('البريد الإلكتروني').fill('reem@example.com');
  await page.getByRole('button', { name: 'افتح الدعوة' }).click();
  await expect(page.getByText('ريم الزهراني')).toBeVisible();
  await page.getByRole('button', { name: 'سأحضر' }).click();
  await expect(page.getByText('تم تأكيد حضورك')).toBeVisible();
  await expect(page.getByRole('link', { name: /أضف للتقويم/ })).toHaveAttribute('href', '/api/i/rr26/ics');

  const [reg] = await db`select source, device from registrations`;
  expect(reg).toEqual({ source: 'whatsapp', device: 'mobile' });
  await expect.poll(async () => (await db`select answer from rsvps`)[0]?.answer).toBe('yes');

  await page.reload();
  await expect(page.getByText('ريم الزهراني')).toBeVisible({ timeout: 8000 });
  await expect(page.getByLabel('الاسم')).toHaveCount(0);
});

test('personal invitation shows the invitee and records the open', async ({ page }) => {
  await page.goto('/i/personalinvite01');
  await expect(page.getByText('د. محمد أحمد')).toBeVisible({ timeout: 8000 });
  await expect(page.getByText('امسح للانضمام')).toBeVisible();
  await expect.poll(async () => (await db`select status from invitations where slug = 'personalinvite01'`)[0].status).toBe('opened');
  await page.getByRole('button', { name: 'أعتذر' }).click();
  await expect(page.getByText('شكرًا لإبلاغنا')).toBeVisible();
  await expect.poll(async () => (await db`select status from invitations where slug = 'personalinvite01'`)[0].status).toBe('declined');
});

test('revoked and unknown links show friendly screens', async ({ page }) => {
  await page.goto('/i/revokedinvite001');
  await expect(page.getByText('هذه الدعوة لم تعد متاحة')).toBeVisible();
  await expect(page.getByText('ضيف ملغى')).toHaveCount(0);
  const res = await page.goto('/i/doesnotexist0001');
  expect(res?.status()).toBe(404);
  await expect(page.getByText('لم نجد هذه الدعوة')).toBeVisible();
});

test('reduced motion shows the invitation immediately', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/i/personalinvite01');
  await expect(page.getByText('د. محمد أحمد')).toBeVisible({ timeout: 1500 });
});

test('the page title never contains the invitee name', async ({ page }) => {
  await page.goto('/i/personalinvite01');
  await expect(page).toHaveTitle('دعوة — ثورة الصواريخ');
});
