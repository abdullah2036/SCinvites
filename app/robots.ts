import type { MetadataRoute } from 'next';

/** Only the landing page may be indexed; invitation pages also carry noindex since they contain names. */
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', allow: ['/$'], disallow: ['/'] }] };
}
