import type { Color, Track } from '@/lib/shared/types';

/** Copied from the `VA` array in the Invite design board. */
export const PALETTE: Record<Color, { label: string; bg: string; c1: string; c2: string; tx: string; mut: string; sw: string; ll: number; sc: string }> = {
  petrol: { label: 'بترولي', bg: 'radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)', c1: '#7FD0D4', c2: '#E7C873', tx: '#FFFFFF', mut: 'rgba(255,255,255,.78)', sw: '#0E4F56', ll: 1, sc: '#072A2F' },
  night: { label: 'ليلي', bg: 'radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)', c1: '#9FDCE0', c2: '#E7C873', tx: '#FFFFFF', mut: 'rgba(255,255,255,.78)', sw: '#0B2533', ll: 1, sc: '#050F17' },
  ivory: { label: 'عاجي', bg: 'radial-gradient(120% 80% at 75% 0%, #FFFFFF 0%, #F4F1EA 45%, #DCEBE8 100%)', c1: '#13707B', c2: '#C99A2E', tx: '#0B3B41', mut: 'rgba(11,59,65,.72)', sw: '#F4F1EA', ll: 0, sc: '#F4F1EA' },
};

/** Track names and motion labels from the `TR` array in the design. */
export const TRACK_INFO: Record<Track, { name: string; motion: string }> = {
  club: { name: 'النادي', motion: 'أعمدة ونقاط' },
  space: { name: 'الفلك والفضاء', motion: 'نجوم ومدار' },
  chem: { name: 'الكيمياء', motion: 'شبكة سداسية وفقاعات' },
  phys: { name: 'الفيزياء', motion: 'موجات وجسيمات' },
  bio: { name: 'الأحياء', motion: 'حلزون وخلايا' },
  math: { name: 'الرياضيات المالية', motion: 'منحنيات وأرقام' },
  sport: { name: 'الرياضي', motion: 'مضمار وكرة' },
};

export function paletteVars(color: Color): string {
  const v = PALETTE[color];
  return `--c1: ${v.c1}; --c2: ${v.c2}; --tx: ${v.tx}; --ll: ${v.ll}; --sc: ${v.sc}; background: ${v.bg}`;
}
