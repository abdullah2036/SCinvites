// Usage: npm run hash-password -- 'the owner password'
// Prints OWNER_PASSWORD_HASH in b64: form (no $ characters, so .env files and dashboards can't mangle it).
import bcrypt from 'bcryptjs';

const pw = process.argv[2];
if (!pw || pw.length < 10) {
  console.error('Provide a password of at least 10 characters');
  process.exit(1);
}
console.log('b64:' + Buffer.from(bcrypt.hashSync(pw, 12)).toString('base64'));
