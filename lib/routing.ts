/** Pure routing decision for proxy.ts: the owner area lives at /<OWNER_PATH>, never at /studio. */
export function routeFor(rawPathname: string, ownerPath: string): { rewrite?: string; notFound?: boolean } {
  let pathname = rawPathname;
  try {
    pathname = decodeURIComponent(rawPathname);
  } catch {
    return { notFound: true };
  }
  pathname = pathname.replace(/\/{2,}/g, '/');
  const lower = pathname.toLowerCase();
  if (lower === '/studio' || lower.startsWith('/studio/')) return { notFound: true };
  if (!ownerPath) return {};
  const base = `/${ownerPath}`;
  if (pathname === base) return { rewrite: '/studio' };
  if (pathname.startsWith(`${base}/`)) return { rewrite: `/studio${pathname.slice(base.length)}` };
  return {};
}
