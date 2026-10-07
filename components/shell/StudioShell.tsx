import Link from 'next/link';
import { S } from '@/components/boards/css';
import LogoutButton from './LogoutButton';
import PendingLeadersBanner from './PendingLeadersBanner';

export type StudioNav = 'dashboard' | 'events' | 'invitations' | 'templates' | 'approvals' | 'analytics' | 'settings' | 'create';

const ICONS: Record<string, React.ReactNode> = {
  dashboard: <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  events: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  invitations: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  templates: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </>
  ),
  approvals: (
    <>
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  analytics: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </>
  ),
};

const icon = (k: string, size = 17) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
    {ICONS[k]}
  </svg>
);

const toArabic = (n: number) => String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]);

/** Sidebar + phone bottom bar + page background, ported from the studio boards (they all share it). */
export default function StudioShell({
  base,
  active,
  pending,
  pendingJoins = 0,
  owner,
  children,
}: {
  base: string;
  active: StudioNav;
  pending: number;
  /** Leader access requests waiting in Settings. */
  pendingJoins?: number;
  owner: { name: string; title: string };
  children: React.ReactNode;
}) {
  const space: [StudioNav, string, string][] = [
    ['dashboard', 'الرئيسية', base],
    ['events', 'الفعاليات', `${base}/events`],
    ['invitations', 'الدعوات', `${base}/invitations`],
    ['templates', 'القوالب', `${base}/templates`],
  ];
  const admin: [StudioNav, string, string][] = [
    ['approvals', 'طلبات الاعتماد', `${base}/approvals`],
    ['analytics', 'الإحصائيات', `${base}/analytics`],
    ['settings', 'الإعدادات', `${base}/settings`],
  ];
  // Gold counts: invitation requests on «طلبات الاعتماد», leader access requests on «الإعدادات».
  const badgeFor = (key: StudioNav) => (key === 'approvals' ? pending : key === 'settings' ? pendingJoins : 0);
  const item = ([key, label, href]: [StudioNav, string, string]) => {
    const on = key === active;
    return (
      <Link
        key={key}
        href={href}
        className="nav"
        aria-current={on ? 'page' : undefined}
        style={S({
          position: 'relative', display: 'flex', alignItems: 'center', gap: '12px', height: '44px', padding: '0 12px', borderRadius: '14px',
          textDecoration: 'none', fontSize: '15px', ...(on ? { background: 'rgba(19,112,123,.12)', color: '#0B3B41', fontWeight: '700' } : { color: '#2C4245' }),
        })}
      >
        {on && <span style={S({ position: 'absolute', left: '-16px', top: '9px', width: '4px', height: '26px', borderRadius: '4px', background: '#13707B' })} />}
        {icon(key)}
        {label}
        {badgeFor(key) > 0 && (
          <span style={S({ marginRight: 'auto', minWidth: '20px', height: '20px', padding: '0 6px', borderRadius: '999px', background: '#C99A2E', color: '#0B2B30', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
            {toArabic(badgeFor(key))}
          </span>
        )}
      </Link>
    );
  };
  const bottom = (key: StudioNav, label: string, href: string) => (
    <Link
      key={key}
      href={href}
      aria-label={label}
      aria-current={key === active ? 'page' : undefined}
      style={S({ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', fontSize: '11px', textDecoration: 'none', ...(key === active ? { color: '#0B3B41', fontWeight: '700' } : { color: '#4F6567' }) })}
    >
      {icon(key, 20)}
      {label}
      {badgeFor(key) > 0 && (
        <span style={S({ position: 'absolute', top: '-6px', left: '50%', marginLeft: '4px', minWidth: '18px', height: '18px', padding: '0 5px', borderRadius: '999px', background: '#C99A2E', color: '#0B2B30', fontSize: '11px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
          {toArabic(badgeFor(key))}
        </span>
      )}
    </Link>
  );

  return (
    <div style={S({ minHeight: '100dvh', position: 'relative', overflow: 'hidden', fontFamily: 'TS, sans-serif', color: '#18292C', background: 'var(--page-bg)' })}>
      <span className="orb" aria-hidden="true" style={S({ position: 'absolute', right: '30%', top: '-120px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, rgba(111,183,184,.55), rgba(19,112,123,0) 70%)', pointerEvents: 'none' })} />
      <span className="orb" aria-hidden="true" style={S({ position: 'absolute', left: '4%', bottom: '120px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle at 40% 35%, rgba(231,200,115,.45), rgba(201,154,46,0) 70%)', pointerEvents: 'none', animationDelay: '-6s' })} />
      <div className="pg" style={S({ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: '24px', padding: '20px', boxSizing: 'border-box', minHeight: '100dvh', alignItems: 'flex-start' })}>
        <nav aria-label="التنقل الرئيسي" className="glass side" style={S({ flex: '0 0 250px', boxSizing: 'border-box', padding: '24px 16px', borderRadius: '28px', display: 'flex', flexDirection: 'column', gap: '22px', position: 'sticky', top: '20px', minHeight: 'calc(100dvh - 40px)' })}>
          <span style={S({ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0 6px' })}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-128.png" alt="شعار ملتقى المستجدين" style={S({ height: '40px', width: 'auto' })} />
            <span style={S({ fontFamily: 'TD, serif', fontSize: '24px', color: '#0B3B41', lineHeight: '1' })}>نادي العلوم</span>
          </span>
          <Link
            href={`${base}/create`}
            style={S({ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '999px', background: '#C99A2E', color: '#0B2B30', textDecoration: 'none', fontWeight: '700', fontSize: '15px', boxShadow: '0 10px 24px rgba(201,154,46,.35)' })}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2B30" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
            إنشاء دعوة
          </Link>
          <div style={S({ display: 'flex', flexDirection: 'column', gap: '2px' })}>
            <span style={S({ fontSize: '11px', color: '#5B6E70', padding: '0 12px 6px' })}>المساحة</span>
            {space.map(item)}
            <span style={S({ fontSize: '11px', color: '#5B6E70', padding: '16px 12px 6px' })}>الإدارة</span>
            {admin.map(item)}
          </div>
          <div style={S({ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '18px', background: 'rgba(255,255,255,.6)' })}>
            <span style={S({ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#13707B,#6FB7B8)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'TD, serif', fontSize: '18px', flex: '0 0 40px' })}>
              {owner.name.trim().charAt(0) || 'ن'}
            </span>
            <div style={S({ display: 'flex', flexDirection: 'column', minWidth: '0', flex: '1' })}>
              <span style={S({ fontWeight: '700', fontSize: '14px' })}>{owner.name}</span>
              <span style={S({ fontSize: '12px', color: '#4F6567' })}>{owner.title}</span>
            </div>
            <LogoutButton />
          </div>
        </nav>
        <nav aria-label="التنقل" className="bnav glass" style={S({ position: 'fixed', left: '12px', right: '12px', bottom: '12px', zIndex: '20', height: '66px', borderRadius: '24px', padding: '0 8px', justifyContent: 'space-around', alignItems: 'center' })}>
          {bottom('dashboard', 'الرئيسية', base)}
          {bottom('events', 'الفعاليات', `${base}/events`)}
          {bottom('invitations', 'الدعوات', `${base}/invitations`)}
          <Link href={`${base}/create`} aria-label="إنشاء دعوة" style={S({ width: '52px', height: '52px', borderRadius: '50%', background: '#C99A2E', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(201,154,46,.4)' })}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B2B30" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </Link>
          {bottom('approvals', 'الاعتماد', `${base}/approvals`)}
          {bottom('settings', 'الإعدادات', `${base}/settings`)}
        </nav>
        {active !== 'settings' && <PendingLeadersBanner count={pendingJoins} href={`${base}/settings`} />}
        {children}
      </div>
    </div>
  );
}
