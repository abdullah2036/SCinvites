// Check a password against an OWNER_PASSWORD_HASH value (e.g. copied from Vercel), locally.
// Usage: npm run check-password -- 'the password' 'b64:…'
import bcrypt from 'bcryptjs';

const [pw, value] = process.argv.slice(2);
if (!pw || !value) {
  console.error("Usage: npm run check-password -- 'the password' 'b64:…'");
  process.exit(1);
}
const v = value.trim().replace(/^(['"])(.*)\1$/, '$2').trim();
const hash = v.startsWith('b64:') ? Buffer.from(v.slice(4), 'base64').toString('utf8').trim() : v;
if (!/^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(hash)) {
  console.log('✗ That value is not a valid hash. Generate a new one with: npm run hash-password -- \'the password\'');
  process.exit(1);
}
console.log(bcrypt.compareSync(pw, hash) ? '✓ MATCH — this password works with this hash' : '✗ NO MATCH — this hash was made from a different password');
