'use client';

import { useLinkStatus } from 'next/link';

/**
 * Put inside a <Link>: while that navigation waits for the server, a thin bar runs along the top of the screen, so
 * a slow response never looks like a frozen page.
 */
export default function NavPending() {
  const { pending } = useLinkStatus();
  if (!pending) return null;
  return <span aria-hidden="true" data-keep-motion className="navbar-pending" />;
}
