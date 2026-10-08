import { cookies } from 'next/headers';
import { getSession, OWNER_COOKIE } from '@/lib/server/sessions';
import MainClient from './MainClient';

export default async function Home() {
  // The owner stays signed in for 30 days: the gate button then opens the owner area without the password.
  const owner = await getSession((await cookies()).get(OWNER_COOKIE)?.value, 'owner').catch(() => null);
  return <MainClient ownerHref={owner ? `/${process.env.OWNER_PATH}` : null} />;
}
