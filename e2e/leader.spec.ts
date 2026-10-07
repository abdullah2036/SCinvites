import { test, expect } from '@playwright/test';
import { db, reset, loginOwner } from './db';
import { E2E } from './config';

test('full leader flow: access request → approval → email sign-in → names → approval with exclusion → links', async ({ page, browser }) => {
  await reset();
  const [ev] = await db`insert into events (title, subtitle, latin_title, track, starts_at, place_type, place_name, place_url)
    values ('ثورة الصواريخ', 'أسبوع الفلك والفضاء 2026', 'ROCKET REVOLUTION', 'space', now() + interval '20 days', 'in_person', 'القاعة', 'https://maps.example.com/x') returning id`;
  await db`insert into templates (event_id, track, stamp_types, status, approved_at) values (${ev.id}, 'space', '{VIP,ضيف}', 'approved', now())`;
  const [ev2] = await db`insert into events (title, track, starts_at) values ('فعالية ثانية', 'chem', now() + interval '20 days') returning id`;
  // an old committee limit no longer hides a template: every approved leader sees it
  await db`insert into templates (event_id, track, stamp_types, allowed_committees, status, approved_at) values (${ev2.id}, 'chem', '{VIP}', '{لجنة الفعاليات}', 'approved', now())`;

  // 1. leader asks for access
  await page.goto('/');
  await page.getByLabel('اسمك').fill('م. خالد الحربي');
  await page.getByLabel('بريدك الجامعي').fill('s443012345@uqu.edu.sa');
  await page.getByRole('button', { name: 'طلب الدخول' }).click();
  await expect(page.getByText('وصل طلبك')).toBeVisible();

  // 2. owner approves (API) — no link to send
  const owner = await browser.newContext({ baseURL: E2E.baseURL });
  const ownerPage = await owner.newPage();
  await loginOwner(ownerPage);
  const [leader] = await db`select id from leaders where email = 's443012345@uqu.edu.sa'`;
  const approve = await ownerPage.request.post(`/api/leaders/${leader.id}/approve`, { headers: { origin: E2E.baseURL } });
  expect(approve.ok()).toBe(true);

  // 3. the leader signs in with the email alone
  await page.goto('/');
  await page.getByLabel('بريدك الجامعي').fill('s443012345@uqu.edu.sa');
  await page.getByRole('button', { name: 'طلب الدخول' }).click();
  await expect(page).toHaveURL(/\/leader$/);
  await expect(page.getByText('ثورة الصواريخ').first()).toBeVisible();
  await expect(page.getByText('فعالية ثانية').first()).toBeVisible();

  // 4. leader submits three names (stepped flow on phones)
  await page.getByRole('link', { name: /ثورة الصواريخ/ }).first().click();
  await expect(page.getByText('دعواتي / إنشاء')).toBeVisible();
  await page.waitForLoadState('networkidle'); // the stepped form responds once it is interactive
  // step 1 of 4 (template) → step 2 (invitees)
  await page.getByRole('button', { name: /التالي/ }).click();
  await expect(page.locator('#bulk')).toBeVisible();
  await page.locator('#bulk').fill('د. هالة البيشي — جامعة الملك عبدالعزيز\nأ. عبدالله الغامدي\nم. ريم العمري — أرامكو');
  // invitees → place → review
  await page.getByRole('button', { name: /التالي/ }).click();
  await page.getByRole('button', { name: /التالي/ }).click();
  await expect(page.getByRole('button', { name: 'إرسال للاعتماد' })).toBeVisible();
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

test('a leader with no templates yet sees why, and the menu does not throw the page to the bottom', async ({ page }) => {
  await reset();
  await db`insert into leaders (name, email, status, approved_at) values ('م. سعد', 's443000333@uqu.edu.sa', 'approved', now())`;
  await page.goto('/');
  await page.getByLabel('بريدك الجامعي').fill('s443000333@uqu.edu.sa');
  await page.getByRole('button', { name: 'طلب الدخول' }).click();
  await expect(page).toHaveURL(/\/leader$/);
  await expect(page.getByText(/لا توجد قوالب معتمدة بعد/)).toBeVisible();
  await page.waitForLoadState('networkidle'); // menu handling starts once the page is interactive
  for (const name of ['القوالب المعتمدة', 'دعواتي', 'حسابي']) {
    await page.getByRole('link', { name }).last().dispatchEvent('click'); // the dev-only Next.js button covers a corner
    await page.waitForTimeout(300);
    expect(await page.evaluate(() => window.scrollY), name).toBe(0);
  }
  await expect(page).toHaveURL(/\/leader$/); // no #hash jumps
});
