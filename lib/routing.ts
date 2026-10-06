/** Pure routing decision for proxy.ts: the owner area lives at /<OWNER_PATH>, never at /studio. */
export function routeFor(pathname: string, ownerPath: string): { rewrite?: string; notFound?: boolean } {
  if (pathname === '/studio' || pathname.startsWith('/studio/')) return { notFound: true };
  if (!ownerPath) return {};
  const base = `/${ownerPath}`;
  if (pathname === base) return { rewrite: '/studio' };
  if (pathname.startsWith(`${base}/`)) return { rewrite: `/studio${pathname.slice(base.length)}` };
  return {};
}
