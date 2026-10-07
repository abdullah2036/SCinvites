import { afterAll } from 'vitest';

process.env.TZ = 'UTC';
// Fixed values: CI sets its own OWNER_PATH/APP_URL for the build, tests must not depend on them.
process.env.APP_URL = 'http://localhost:3000';
process.env.OWNER_PATH = 'test-studio';
process.env.CRON_SECRET ??= 'test-cron-secret';
process.env.EXTRA_LEADER_EMAILS = 'reviewer@gmail.com, Owner.Review@gmail.com';

afterAll(async () => {
  const { closeDb } = await import('@/lib/server/db');
  await closeDb();
});
