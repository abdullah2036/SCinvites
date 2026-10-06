import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import Invitation from '@/components/invitation/Invitation';
import type { GuestView } from '@/lib/shared/types';

const base: GuestView = {
  slug: 'abc',
  kind: 'personal',
  status: 'created',
  track: 'space',
  color: 'night',
  stamp: 'VIP',
  artworkUrl: null,
  invitee: { name: 'د. محمد أحمد', org: 'وكالة الفضاء السعودية', title: null },
  event: { title: 'ثورة الصواريخ', subtitle: 'أسبوع الفلك والفضاء 2026', latinTitle: 'ROCKET REVOLUTION', startsAt: '2026-10-12T16:00:00Z', endsAt: null },
  place: { type: 'in_person', name: 'قاعة الفعاليات الرئيسية', url: 'https://maps.example.com/x' },
  qrSvg: '<svg viewBox="0 0 10 10"></svg>',
};

describe('<Invitation>', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    window.matchMedia = vi.fn().mockReturnValue({ matches: false, addEventListener() {}, removeEventListener() {} }) as never;
  });
  afterEach(() => vi.useRealTimers());

  it('plays the loader for 2.6s, then opens a personal invitation with the RSVP buttons', () => {
    render(<Invitation view={base} mode="live" />);
    expect(screen.getByText('نجهّز دعوتك')).toBeInTheDocument();
    expect(screen.queryByText('د. محمد أحمد')).toBeNull();
    act(() => vi.advanceTimersByTime(2599));
    expect(screen.queryByText('د. محمد أحمد')).toBeNull();
    act(() => vi.advanceTimersByTime(1));
    expect(screen.getByText('د. محمد أحمد')).toBeInTheDocument();
    expect(screen.getByText('يتشرّف نادي العلوم بدعوة')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'سأحضر' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'أعتذر' })).toBeInTheDocument();
  });

  it('shows real Riyadh date and time on the card', () => {
    render(<Invitation view={base} mode="static" />);
    expect(screen.getByText('الاثنين ١٢ أكتوبر ٢٠٢٦')).toBeInTheDocument();
    expect(screen.getByText('٧:٠٠ م')).toBeInTheDocument();
  });

  it('asks general guests for name and email, then shows their name', async () => {
    vi.useRealTimers();
    const onOpen = vi.fn().mockResolvedValue(undefined);
    render(<Invitation view={{ ...base, kind: 'general', invitee: null, stamp: 'عضو' }} mode="live" initialPhase="gate" onOpen={onOpen} />);
    fireEvent.change(screen.getByLabelText('الاسم'), { target: { value: 'ريم الزهراني' } });
    fireEvent.change(screen.getByLabelText('البريد الإلكتروني'), { target: { value: 'reem@example.com' } });
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /افتح الدعوة/ }));
    });
    expect(onOpen).toHaveBeenCalledWith({ name: 'ريم الزهراني', email: 'reem@example.com' });
    expect(screen.getByText('ريم الزهراني')).toBeInTheDocument();
  });

  it('keeps the gate open and shows the error when opening fails', async () => {
    vi.useRealTimers();
    const onOpen = vi.fn().mockRejectedValue(new Error('اكتب اسمك وبريدًا صحيحًا'));
    render(<Invitation view={{ ...base, kind: 'general', invitee: null }} mode="live" initialPhase="gate" onOpen={onOpen} />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /افتح الدعوة/ }));
    });
    expect(screen.getByRole('alert')).toHaveTextContent('اكتب اسمك وبريدًا صحيحًا');
    expect(screen.getByLabelText('الاسم')).toBeInTheDocument();
  });

  it('renders everything immediately in static mode with motion calmed', () => {
    const { container } = render(<Invitation view={base} mode="static" />);
    expect(screen.getByText('د. محمد أحمد')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'سأحضر' })).toBeInTheDocument();
    expect(container.querySelector('[data-phase]')).toHaveClass('calm');
  });

  it('confirms attendance and offers the calendar', async () => {
    vi.useRealTimers();
    const onRsvp = vi.fn().mockResolvedValue(undefined);
    render(<Invitation view={base} mode="static" onRsvp={onRsvp} />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'سأحضر' }));
    });
    expect(onRsvp).toHaveBeenCalledWith('yes');
    expect(screen.getByText('تم تأكيد حضورك')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /أضف للتقويم/ })).toHaveAttribute('href', '/api/i/abc/ics');
  });

  it('hides the place block when there is no place, and labels online QR codes', () => {
    const { rerender } = render(<Invitation view={{ ...base, place: { type: 'none', name: null, url: null }, qrSvg: null }} mode="static" />);
    expect(screen.queryByText('المكان')).toBeNull();
    rerender(<Invitation view={{ ...base, place: { type: 'online', name: 'Zoom', url: 'https://zoom.example.com' } }} mode="static" />);
    expect(screen.getByText('امسح للانضمام')).toBeInTheDocument();
    expect(screen.getByText('Zoom')).toBeInTheDocument();
  });

  it('applies the ivory palette variables', () => {
    const { container } = render(<Invitation view={{ ...base, color: 'ivory' }} mode="static" />);
    expect((container.querySelector('[data-phase]') as HTMLElement).style.getPropertyValue('--tx')).toBe('#0B3B41');
  });

  it('shrinks very long names instead of overflowing', () => {
    render(<Invitation view={{ ...base, invitee: { name: 'صاحب السمو الأمير عبدالعزيز بن محمد بن عبدالرحمن', org: null, title: null } }} mode="static" />);
    const name = screen.getByText('صاحب السمو الأمير عبدالعزيز بن محمد بن عبدالرحمن');
    expect(parseInt(name.style.fontSize)).toBeLessThan(28);
  });
});
