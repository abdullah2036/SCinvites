// Runs a persistent local Postgres for development on port 54329 (data in .pgdata/).
import { startLocalPostgres } from '../lib/server/local-pg';

const pg = await startLocalPostgres({ dataDir: '.pgdata', port: 54329, persistent: true });
console.log(`Local Postgres ready: ${pg.url}`);
if (pg.applied.length) console.log('Applied migrations:', pg.applied.join(', '));
const stop = async () => {
  await pg.stop();
  process.exit(0);
};
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
