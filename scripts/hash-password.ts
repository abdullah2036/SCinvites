// Usage: npm run hash-password -- 'the owner password'  → paste the output into OWNER_PASSWORD_HASH
import bcrypt from 'bcryptjs';

const pw = process.argv[2];
if (!pw || pw.length < 10) {
  console.error('Provide a password of at least 10 characters');
  process.exit(1);
}
console.log(bcrypt.hashSync(pw, 12));
