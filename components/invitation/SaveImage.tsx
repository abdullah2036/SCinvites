'use client';

const IN_APP = /FBAN|FBAV|Instagram|WhatsApp|Line\/|Snapchat|Telegram|TwitterAndroid|MicroMessenger/i;

export function isInAppBrowser(userAgent: string): boolean {
  return IN_APP.test(userAgent);
}

type ToPng = (node: HTMLElement, opts: Record<string, unknown>) => Promise<string>;

/**
 * Renders the invitation node to a PNG as it appears on screen. In-app browsers (WhatsApp, Instagram…)
 * block downloads, so there the image is shown in an overlay for the guest to long-press and save.
 */
export async function saveInvitationImage(
  node: HTMLElement,
  opts: { userAgent?: string; toPng?: ToPng; fileName?: string } = {},
): Promise<{ kind: 'downloaded' } | { kind: 'overlay'; dataUrl: string }> {
  const toPng = opts.toPng ?? ((await import('html-to-image')).toPng as ToPng);
  const dataUrl = await toPng(node, { pixelRatio: 2, cacheBust: true, filter: (n: Node) => !(n instanceof HTMLElement && n.dataset.noSave !== undefined) });
  const ua = opts.userAgent ?? navigator.userAgent;
  const a = document.createElement('a');
  if (isInAppBrowser(ua) || !('download' in a)) return { kind: 'overlay', dataUrl };
  a.href = dataUrl;
  a.download = opts.fileName ?? 'invitation.png';
  document.body.appendChild(a);
  a.click();
  a.remove();
  return { kind: 'downloaded' };
}

export function SaveOverlay({ dataUrl, onClose }: { dataUrl: string; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="حفظ الدعوة"
      style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(5,15,23,.86)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 20 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- a data: URL generated on the device */}
      <img src={dataUrl} alt="صورة الدعوة" style={{ maxWidth: '100%', maxHeight: '72dvh', borderRadius: 18, boxShadow: '0 24px 60px rgba(0,0,0,.4)' }} />
      <p style={{ margin: 0, color: '#fff', fontSize: 15 }}>اضغط مطولًا على الصورة لحفظها</p>
      <button
        type="button"
        onClick={onClose}
        style={{ height: 48, padding: '0 28px', borderRadius: 999, border: '1px solid rgba(255,255,255,.4)', background: 'transparent', color: '#fff', cursor: 'pointer' }}
      >
        إغلاق
      </button>
    </div>
  );
}
