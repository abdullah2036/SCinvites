import { startLocalPostgres, migrateUrl } from '../../lib/server/local-pg';

/** CI provides TEST_DATABASE_URL (Postgres service); locally an embedded Postgres is started. */
export default async function setup() {
  process.env.TZ = 'UTC';
  process.env.DB_POOL_MAX = '2';
  if (process.env.TEST_DATABASE_URL) {
    process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;
    await migrateUrl(process.env.DATABASE_URL);
    return;
  }
  const pg = await startLocalPostgres({ dataDir: '.pgtest', persistent: false });
  process.env.DATABASE_URL = pg.url;
  return async () => {
    await pg.stop();
  };
}
