import { test, expect } from '@playwright/test';
import { db, reset, loginOwner } from './db';
import { E2E } from './config';

test('full leader flow: access request → approval → one-time login → names → approval with exclusion → links', async ({ page, browser }) => {
  await reset();
  const [ev] = await db`insert into events (title, subtitle, latin_title, track, starts_at, place_type, place_name, place_url)
    values ('ثورة الصواريخ', 'أسبوع الفلك والفضاء 2026', 'ROCKET REVOLUTION', 'space', now() + interval '20 days', 'in_person', 'القاعة', 'https://maps.example.com/x') returning id`;
  await db`insert into templates (event_id, track, stamp_types, allowed_committees, status, approved_at) values (${ev.id}, 'space', '{VIP,ضيف}', '{لجنة العلاقات}', 'approved', now())`;
  const [ev2] = await db`insert into events (title, track, starts_at) values ('فعالية لجنة أخرى', 'chem', now() + interval '20 days') returning id`;
  await db`insert into templates (event_id, track, stamp_types, allowed_committees, status, approved_at) values (${ev2.id}, 'chem', '{VIP}', '{لجنة الفعاليات}', 'approved', now())`;

  // 1. leader asks for access
  await page.goto('/');
  await page.getByLabel('اسمك').fill('م. خالد الحربي');
  await page.getByLabel('لجنتك').fill('لجنة العلاقات');
  await page.getByLabel('بريدك الجامعي').fill('khalid@uqu.edu.sa');
  await page.getByRole('button', { name: 'طلب الدخول' }).click();
  await expect(page.getByText('وصل طلبك')).toBeVisible();

  // 2. owner approves (API) and gets the one-time link
  const owner = await browser.newContext({ baseURL: E2E.baseURL });
  const ownerPage = await owner.newPage();
  await loginOwner(ownerPage);
  const [leader] = await db`select id from leaders where email = 'khalid@uqu.edu.sa'`;
  const approve = await ownerPage.request.post(`/api/leaders/${leader.id}/approve`, { headers: { origin: E2E.baseURL } });
  const { loginUrl } = await approve.json();

  // 3. leader opens the link and presses «دخول»
  await page.goto(new URL(loginUrl).pathname);
  await page.getByRole('button', { name: 'دخول' }).click();
  await expect(page).toHaveURL(/\/leader$/);
  await expect(page.getByText('ثورة الصواريخ').first()).toBeVisible();
  await expect(page.getByText('فعالية لجنة أخرى')).toHaveCount(0);

  // 4. leader submits three names (stepped flow on phones)
  await page.getByRole('link', { name: /ثورة الصواريخ/ }).first().click();
  await expect(page.getByText('دعواتي / إنشاء')).toBeVisible();
  for (let i = 0; i < 3 && !(await page.locator('#bulk').isVisible()); i++) await page.getByRole('button', { name: /التالي/ }).click();
  await page.locator('#bulk').fill('د. هالة البيشي — جامعة الملك عبدالعزيز\nأ. عبدالله الغامدي\nم. ريم العمري — أرامكو');
  while (await page.getByRole('button', { name: /التالي/ }).isVisible()) await page.getByRole('button', { name: /التالي/ }).click();
  await expect(page.getByText(/القاعة/).first()).toBeVisible();
  await page.getByRole('button', { name: 'إرسال للاعتماد' }).click();
  await expect(page.getByText(/أرسلت ٣ أسماء/)).toBeVisible();

  // 5. owner approves, excluding one
  await ownerPage.goto(`/${E2E.ownerPath}/approvals`);
  await ownerPage.getByRole('button', { name: /أ. عبدالله الغامدي/ }).click();
  await ownerPage.getByRole('button', { name: 'اعتماد ٢ أسماء' }).click();
  await expect(ownerPage.getByText('اعتُمدت وأُبلغ القائد')).toBeVisible();

  // 6. leader sees «معتمدة» and copies two links
  await page.goto('/leader');
  await expect(page.getByText('معتمدة · جاهزة للإرسال')).toBeVisible();
  await page.getByRole('button', { name: /روابط ٢ دعوات/ }).click();
  const dialog = page.getByRole('dialog', { name: 'روابط الدعوات' });
  await expect(dialog.getByText('د. هالة البيشي')).toBeVisible();
  await expect(dialog.getByText('أ. عبدالله الغامدي')).toHaveCount(0);

  // 7. a link opens the guest page with that name
  const [inv] = await db`select slug from invitations where invitee_name = 'م. ريم العمري'`;
  await page.goto(`/i/${inv.slug}`);
  await expect(page.getByText('م. ريم العمري')).toBeVisible({ timeout: 8000 });
  await owner.close();
});

test('leader pages redirect to login without a session', async ({ page }) => {
  await page.goto('/leader');
  await expect(page).toHaveURL(/\/$/);
});
