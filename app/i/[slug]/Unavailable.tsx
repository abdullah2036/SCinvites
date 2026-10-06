import Image from 'next/image';

/** Shown for revoked links and (via not-found.tsx) unknown ones, in the invitation's night palette. */
export default function Unavailable({ title = 'هذه الدعوة لم تعد متاحة', note = 'إذا وصلتك بالخطأ تواصل مع من أرسلها لك' }: { title?: string; note?: string }) {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        color: '#fff',
        background: 'radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)',
        textAlign: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, maxWidth: 340 }}>
        <span style={{ display: 'grid', placeItems: 'center', width: 72, height: 72, borderRadius: '50%', background: '#fff' }}>
          <Image src="/brand/logo-128.png" alt="شعار ملتقى المستجدين" width={52} height={52} />
        </span>
        <h1 className="display" style={{ margin: 0, fontSize: 28, lineHeight: 1.35 }}>
          {title}
        </h1>
        <p style={{ margin: 0, opacity: 0.78, lineHeight: 1.7 }}>{note}</p>
        <span style={{ fontSize: 13, opacity: 0.6 }}>نادي العلوم</span>
      </div>
    </main>
  );
}
