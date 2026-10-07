'use client';

import { useEffect, useState } from 'react';
import Invitation from '@/components/invitation/Invitation';
import { saveInvitationImage, SaveOverlay } from '@/components/invitation/SaveImage';
import type { GuestView } from '@/lib/shared/types';
import { timeoutSignal } from '@/lib/shared/timeout';

async function post(url: string, body: unknown) {
  const res = await fetch(url, {
    signal: timeoutSignal(),
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-guest-referrer': document.referrer.slice(0, 300) },
    body: JSON.stringify(body),
  }).catch(() => null);
  if (!res) throw new Error('تعذر الاتصال، حاول مرة أخرى');
  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.error?.message ?? 'تعذر الاتصال، حاول مرة أخرى');
  }
  return res.json();
}

export default function GuestClient({ view, registeredName, initialAnswer, src }: { view: GuestView; registeredName: string | null; initialAnswer: 'yes' | 'no' | null; src: string | null }) {
  const [overlay, setOverlay] = useState<string | null>(null);
  const base = `/api/i/${view.slug}`;

  // Personal invitations record the first open (and where it came from) as soon as the page loads.
  useEffect(() => {
    if (view.kind === 'personal') post(`${base}/open`, { src }).catch(() => {});
  }, [base, src, view.kind]);

  return (
    <main style={{ minHeight: '100dvh', display: 'flex', justifyContent: 'center', background: '#050F17' }}>
      <div style={{ width: '100%', maxWidth: 480 }}>
        <Invitation
          view={view}
          mode="live"
          frame="fill"
          registered={!!registeredName}
          registeredName={registeredName ?? undefined}
          initialAnswer={initialAnswer}
          onOpen={async (input) => {
            await post(`${base}/open`, { ...input, src });
          }}
          onRsvp={async (answer) => {
            await post(`${base}/rsvp`, { answer });
          }}
          onSave={async (node) => {
            const r = await saveInvitationImage(node, { fileName: `دعوة-${view.event.title}.png` });
            if (r.kind === 'overlay') setOverlay(r.dataUrl);
          }}
        />
      </div>
      {overlay && <SaveOverlay dataUrl={overlay} onClose={() => setOverlay(null)} />}
    </main>
  );
}
