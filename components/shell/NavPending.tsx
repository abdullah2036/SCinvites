'use client';

import { useEffect } from 'react';
import { useLinkStatus } from 'next/link';

/** After this long, a navigation is treated as stuck. */
const STUCK_MS = 10_000;

/**
 * Put inside a <Link>: while that navigation waits for the server, a thin bar runs along the top of the screen, so
 * a slow response never looks like a frozen page. If it is still waiting after 10 s (a lost or stuck response),
 * the page is loaded in full instead — what closing and reopening the page used to fix by hand.
 */
export default function NavPending({ href }: { href?: string }) {
  const { pending } = useLinkStatus();
  useEffect(() => {
    if (!pending || !href) return;
    const t = setTimeout(() => location.assign(href), STUCK_MS);
    return () => clearTimeout(t);
  }, [pending, href]);
  if (!pending) return null;
  return <span aria-hidden="true" data-keep-motion className="navbar-pending" />;
}
