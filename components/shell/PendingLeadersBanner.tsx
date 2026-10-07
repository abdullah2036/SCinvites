'use client';

import { useState } from 'react';
import Link from 'next/link';

const ar = (n: number) => n.toLocaleString('ar-SA');

/**
 * Leader access requests are approved in Settings, which the owner rarely has open. This pill shows on every other
 * studio page while requests are waiting (auto-refresh keeps the count current); closing it hides it until the
 * count changes.
 */
export default function PendingLeadersBanner({ count, href }: { count: number; href: string }) {
  const [closedAt, setClosedAt] = useState<number | null>(null);
  if (!count || closedAt === count) return null;
  return (
    <div role="status" className="glass" style={{ position: 'fixed', top: 12, insetInline: 12, zIndex: 25, maxWidth: 440, margin: '0 auto', borderRadius: 999, padding: '6px 6px 6px 14px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 12px 30px rgba(11,59,65,.18)' }}>
      <span style={{ flex: 1, fontSize: 14, color: '#0B3B41', paddingInlineStart: 8 }}>
        {count === 1 ? 'طلب دخول جديد من قائد' : `${ar(count)} طلبات دخول جديدة من القادة`}
      </span>
      <Link href={`${href}#joins`} style={{ height: 36, padding: '0 16px', borderRadius: 999, background: '#0B3B41', color: '#fff', display: 'inline-flex', alignItems: 'center', textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
        مراجعة
      </Link>
      <button type="button" aria-label="إخفاء" onClick={() => setClosedAt(count)} style={{ width: 32, height: 32, border: 0, borderRadius: '50%', background: 'transparent', color: '#4F6567', fontSize: 18, cursor: 'pointer' }}>
        ×
      </button>
    </div>
  );
}
