'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import InviteView from '@/components/boards/InviteView';
import { paletteVars } from './palette';
import { useMotionMode } from './useMotionMode';
import { formatDate, formatTime } from '@/lib/shared/dates';
import { TRACKS, type GuestView } from '@/lib/shared/types';

export type InvitationMode = 'live' | 'preview' | 'static';
type Phase = 'load' | 'gate' | 'open';

export type InvitationProps = {
  view: GuestView;
  mode: InvitationMode;
  /** 'fill' = full-screen guest page; 'device' = fixed 390×844 frame (previews) */
  frame?: 'fill' | 'device';
  initialPhase?: Phase;
  /** General invitation already registered on this device (skips the name/email form) */
  registered?: boolean;
  registeredName?: string;
  onOpen?: (input: { name: string; email: string }) => Promise<void>;
  onRsvp?: (answer: 'yes' | 'no') => Promise<void>;
  onSave?: (node: HTMLElement) => Promise<void>;
};

const LOAD_MS = 2600;

export default function Invitation({ view, mode: requestedMode, frame = 'fill', initialPhase, registered, registeredName, onOpen, onRsvp, onSave }: InvitationProps) {
  const mode = useMotionMode(requestedMode);
  const general = view.kind === 'general';
  const afterLoad = (): Phase => (general && !registered ? 'gate' : 'open');
  const rootRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sealPathId = `seal-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;

  const [phase, setPhase] = useState<Phase>(initialPhase ?? (mode === 'static' ? afterLoad() : 'load'));
  const [run, setRun] = useState(0);
  const [gname, setGname] = useState('');
  const [gmail, setGmail] = useState('');
  const [openedName, setOpenedName] = useState(registeredName ?? '');
  const [rsvp, setRsvp] = useState<'' | 'yes' | 'no'>('');
  const [saved, setSaved] = useState(false);
  const [cal, setCal] = useState(false);
  const [busy, setBusy] = useState(false);
  const [gateError, setGateError] = useState('');

  const arm = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setPhase(general && !registered ? 'gate' : 'open');
      setRun((r) => r + 1);
    }, LOAD_MS);
  }, [general, registered]);

  useEffect(() => {
    if (phase === 'load') arm();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reduced motion detected after hydration: skip the loader.
  useEffect(() => {
    if (mode === "static" && phase === "load") {
      if (timer.current) clearTimeout(timer.current);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase(general && !registered ? "gate" : "open");
    }
  }, [mode, phase, general, registered]);

  async function openInv() {
    setGateError('');
    setBusy(true);
    try {
      await onOpen?.({ name: gname.trim(), email: gmail.trim() });
      setOpenedName(gname.trim());
      setPhase('open');
      setRun((r) => r + 1);
    } catch (e) {
      setGateError(e instanceof Error ? e.message : 'تعذر فتح الدعوة');
    } finally {
      setBusy(false);
    }
  }

  async function answer(a: 'yes' | 'no') {
    const prev = rsvp;
    setRsvp(a);
    try {
      await onRsvp?.(a);
    } catch {
      setRsvp(prev);
    }
  }

  function replay() {
    setRsvp('');
    if (mode === 'static') {
      setPhase(afterLoad());
      setRun((r) => r + 1);
      return;
    }
    setPhase('load');
    setRun((r) => r + 1);
    arm();
  }

  const name = general ? openedName || gname.trim() || 'ضيف نادي العلوم' : (view.invitee?.name ?? '');
  const org = general ? 'عضو نادي العلوم' : [view.invitee?.title, view.invitee?.org].filter(Boolean).join(' · ');
  const online = view.place.type === 'online';
  const flags = Object.fromEntries(TRACKS.map((t) => [`is_${t}`, t === view.track]));

  const v = {
    ...flags,
    track: view.track,
    rootRef,
    phase,
    frameW: frame === 'device' ? '390px' : '100%',
    frameH: frame === 'device' ? '844px' : '100dvh',
    calm: mode === 'static' ? 'calm' : '',
    vs: paletteVars(view.color),
    k: run % 2 ? 'B' : 'A',
    inK: run % 2 ? 'inB' : 'inA',
    t: { event: view.event.subtitle ?? view.event.title, title: view.event.title, latin: view.event.latinTitle ?? '' },
    artworkUrl: view.artworkUrl,
    isLoad: phase === 'load',
    notLoad: phase !== 'load',
    isGate: phase === 'gate',
    isOpen: phase === 'open',
    gname,
    gmail,
    onGname: (e: React.ChangeEvent<HTMLInputElement>) => setGname(e.target.value),
    onGmail: (e: React.ChangeEvent<HTMLInputElement>) => setGmail(e.target.value),
    openInv,
    busy,
    gateError,
    shownName: name,
    shownOrg: org,
    nameSize: name.length > 36 ? '19px' : name.length > 24 ? '22px' : '28px',
    sealLabel: view.stamp,
    sealPathId,
    dateLabel: formatDate(view.event.startsAt),
    timeLabel: formatTime(view.event.startsAt),
    placeOn: view.place.type !== 'none',
    inPerson: view.place.type === 'in_person',
    isOnline: online,
    placeLabel: online ? 'عن بعد' : 'المكان',
    placeName: view.place.name ?? (online ? 'رابط الانضمام' : 'الموقع'),
    qrLabel: online ? 'امسح للانضمام' : 'امسح لفتح الموقع',
    qrSvg: view.qrSvg,
    save: async () => {
      if (rootRef.current && onSave) await onSave(rootRef.current);
      setSaved(true);
    },
    saveLabel: saved ? 'حُفظت' : 'حفظ',
    replay,
    rsvpOpen: !rsvp,
    answered: !!rsvp,
    yes: () => answer('yes'),
    no: () => answer('no'),
    answerTitle: rsvp === 'yes' ? 'تم تأكيد حضورك' : 'شكرًا لإبلاغنا',
    going: rsvp === 'yes',
    calHref: `/api/i/${view.slug}/ics`,
    addCal: () => setCal(true),
    calLabel: cal ? 'أُضيفت' : 'أضف للتقويم',
  };

  return <InviteView v={v} />;
}
