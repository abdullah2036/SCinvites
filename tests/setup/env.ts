import { afterAll } from 'vitest';

process.env.TZ = 'UTC';
process.env.APP_URL ??= 'http://localhost:3000';
process.env.OWNER_PATH ??= 'test-studio';
process.env.CRON_SECRET ??= 'test-cron-secret';

afterAll(async () => {
  const { closeDb } = await import('@/lib/server/db');
  await closeDb();
});
