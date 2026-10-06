import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { saveInvitationImage, isInAppBrowser, SaveOverlay } from '@/components/invitation/SaveImage';

const WA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 WhatsApp/2.24';
const CHROME = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36';

describe('saving the invitation image', () => {
  it('detects in-app browsers', () => {
    expect(isInAppBrowser(WA)).toBe(true);
    expect(isInAppBrowser('Mozilla/5.0 Instagram 300')).toBe(true);
    expect(isInAppBrowser(CHROME)).toBe(false);
  });

  it('falls back to a long-press overlay inside WhatsApp', async () => {
    const toPng = vi.fn().mockResolvedValue('data:image/png;base64,AAAA');
    const r = await saveInvitationImage(document.createElement('div'), { userAgent: WA, toPng });
    expect(r).toEqual({ kind: 'overlay', dataUrl: 'data:image/png;base64,AAAA' });
  });

  it('downloads directly in a normal browser', async () => {
    const toPng = vi.fn().mockResolvedValue('data:image/png;base64,AAAA');
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    const r = await saveInvitationImage(document.createElement('div'), { userAgent: CHROME, toPng, fileName: 'دعوة.png' });
    expect(r.kind).toBe('downloaded');
    expect(click).toHaveBeenCalled();
    click.mockRestore();
  });

  it('renders the overlay with the long-press hint and closes', () => {
    const onClose = vi.fn();
    render(<SaveOverlay dataUrl="data:image/png;base64,AAAA" onClose={onClose} />);
    expect(screen.getByText('اضغط مطولًا على الصورة لحفظها')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'صورة الدعوة' })).toHaveAttribute('src', 'data:image/png;base64,AAAA');
    fireEvent.click(screen.getByRole('button', { name: 'إغلاق' }));
    expect(onClose).toHaveBeenCalled();
  });
});
