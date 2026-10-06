/* eslint-disable */
// Generated from design-reference/Templates.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function TemplatesView({ v }: { v: any }) {
  return (
    <>
    <div style={S({ minHeight: "1300px", position: "relative", overflow: "hidden", fontFamily: "TS, sans-serif", color: "#18292C", background: "radial-gradient(55% 45% at 88% 6%, #BFE3E3 0%, rgba(191,227,227,0) 70%), radial-gradient(45% 40% at 6% 96%, #F2E1B4 0%, rgba(242,225,180,0) 70%), radial-gradient(60% 55% at 45% 55%, #DCEFEE 0%, #EAF3F0 55%, #F4F2EC 100%)" })}>
      <span className="orb" aria-hidden="true" style={S({ position: "absolute", right: "30%", top: "-120px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, rgba(111,183,184,.55), rgba(19,112,123,.15) 60%, rgba(19,112,123,0) 72%)", filter: "blur(6px)", pointerEvents: "none" })} />
      <span className="orb" aria-hidden="true" style={S({ position: "absolute", left: "4%", bottom: "120px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, rgba(231,200,115,.45), rgba(201,154,46,.1) 60%, rgba(201,154,46,0) 72%)", filter: "blur(8px)", animationDelay: "-6s", pointerEvents: "none" })} />
      <div className="pg" style={S({ position: "relative", display: "flex", flexWrap: "wrap", gap: "24px", padding: "20px", boxSizing: "border-box", minHeight: "1300px" })}>
        <nav aria-label="التنقل الرئيسي" className="glass side" style={S({ flex: "0 0 250px", boxSizing: "border-box", padding: "24px 16px", borderRadius: "28px", display: "flex", flexDirection: "column", gap: "22px" })}>
          <div style={S({ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 6px" })}>
            <span style={S({ display: "inline-flex", alignItems: "center", gap: "10px" })}>
              <img src="/brand/logo-128.png" alt="شعار ملتقى المستجدين" style={S({ height: "40px", width: "auto" })} />
              <span style={S({ fontFamily: "TD, serif", fontSize: "24px", color: "#0B3B41", lineHeight: "1" })}>
نادي العلوم
              </span>
            </span>
            <button type="button" aria-label="طي القائمة" style={S({ width: "34px", height: "34px", borderRadius: "50%", border: "0", background: "#13707B", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", marginLeft: "-34px", boxShadow: "0 8px 18px rgba(11,59,65,.25)" })}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="M10 6l6 6-6 6" />
              </svg>
            </button>
          </div>
          <a href={`${v.base}/create`} style={S({ height: "50px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "999px", background: "#C99A2E", color: "#0B2B30", textDecoration: "none", fontWeight: "700", fontSize: "15px", boxShadow: "0 10px 24px rgba(201,154,46,.35)" })}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2B30" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
إنشاء دعوة
          </a>
          <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
            <span style={S({ fontSize: "11px", color: "#5B6E70", padding: "0 12px 6px" })}>
المساحة
            </span>
            <a href={v.base} className="nav" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", color: "#2C4245" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
              </svg>
الرئيسية
            </a>
            <a href={`${v.base}/events`} className="nav" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", color: "#2C4245" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
الفعاليات
            </a>
            <a href={`${v.base}/invitations`} className="nav" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", color: "#2C4245" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
الدعوات
            </a>
            <a href={`${v.base}/templates`} className="nav" aria-current="page" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", background: "rgba(19,112,123,.12)", color: "#0B3B41", fontWeight: "700" })}>
              <span style={S({ position: "absolute", left: "-16px", top: "9px", width: "4px", height: "26px", borderRadius: "4px", background: "#13707B" })} />
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="3" width="8" height="8" rx="1.5" />
                <rect x="13" y="3" width="8" height="8" rx="1.5" />
                <rect x="3" y="13" width="8" height="8" rx="1.5" />
                <rect x="13" y="13" width="8" height="8" rx="1.5" />
              </svg>
القوالب
            </a>
            <span style={S({ fontSize: "11px", color: "#5B6E70", padding: "16px 12px 6px" })}>
الإدارة
            </span>
            <a href={`${v.base}/approvals`} className="nav" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", color: "#2C4245" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
طلبات الاعتماد
              <span style={S({ marginRight: "auto", minWidth: "20px", height: "20px", padding: "0 6px", borderRadius: "999px", background: "#C99A2E", color: "#0B2B30", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" })}>
٣
              </span>
            </a>
            <a href={`${v.base}/settings`} className="nav" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", color: "#2C4245" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
              </svg>
الإعدادات
            </a>
          </div>
          <div style={S({ marginTop: "auto", display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "18px", background: "rgba(255,255,255,.6)" })}>
            <span style={S({ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg,#13707B,#6FB7B8)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "TD, serif", fontSize: "18px" })}>
ج
            </span>
            <div style={S({ display: "flex", flexDirection: "column" })}>
              <span style={S({ fontWeight: "700", fontSize: "14px" })}>
جنى سقطي
              </span>
              <span style={S({ fontSize: "12px", color: "#4F6567" })}>
قسم الإعلام
              </span>
            </div>
          </div>
        </nav>
        <nav aria-label="التنقل" className="bnav glass" style={S({ position: "fixed", left: "12px", right: "12px", bottom: "12px", zIndex: "20", height: "66px", borderRadius: "24px", padding: "0 8px", justifyContent: "space-around", alignItems: "center" })}>
          <a href={v.base} aria-label="الرئيسية" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#4F6567" })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
            </svg>
الرئيسية
          </a>
          <a href={`${v.base}/events`} aria-label="الفعاليات" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#4F6567" })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 3v4M16 3v4" />
            </svg>
الفعاليات
          </a>
          <a href={`${v.base}/invitations`} aria-label="الدعوات" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#4F6567" })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
الدعوات
          </a>
          <a href={`${v.base}/create`} aria-label="إنشاء دعوة" style={S({ width: "52px", height: "52px", borderRadius: "50%", background: "#C99A2E", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(201,154,46,.4)" })}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B2B30" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </a>
          <a href={`${v.base}/approvals`} aria-label="طلبات الاعتماد" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#4F6567" })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="9" />
            </svg>
طلبات الاعتماد
          </a>
        </nav>
        <main className="mn" style={S({ flex: "999 1 560px", minWidth: "0", boxSizing: "border-box", padding: "24px 14px 40px", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "1200px" })}>
          <header className="in" style={S({ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" })}>
            <div style={S({ display: "flex", flexDirection: "column", gap: "6px" })}>
              <h1 className="h1m" style={S({ margin: "0", fontFamily: "TD, serif", fontSize: "42px", lineHeight: "1.1", color: "#0B3B41" })}>
القوالب
              </h1>
              <p style={S({ margin: "0", fontSize: "16px", color: "#3E5456" })}>
قوالب معتمدة لكل مسار، تظهر هنا بعد اعتمادها
              </p>
            </div>
            <a href={`${v.base}/templates/new`} style={S({ height: "48px", padding: "0 20px", display: "inline-flex", alignItems: "center", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", textDecoration: "none", fontWeight: "700" })}>
قالب جديد
            </a>
          </header>
          <div style={S({ display: "flex", flexDirection: "column", gap: "10px" })}>
            <div style={S({ display: "flex", gap: "8px", flexWrap: "wrap" })}>
              {(v.types ?? []).map((c: any, cIndex: number) => (
                <Fragment key={cIndex}>
                <button type="button" className="chip" onClick={c.pick} aria-pressed={c.on} style={S({ height: "38px", padding: "0 16px", borderRadius: "999px", border: `1px solid ${c.border}`, background: c.bg, color: c.text, fontFamily: "TS, sans-serif", fontSize: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "8px" })}>
                  <span style={S({ width: "8px", height: "8px", borderRadius: "50%", background: c.dot })} />
{c.name}
                </button>
                </Fragment>
              ))}
            </div>
            <div style={S({ display: "flex", gap: "8px", flexWrap: "wrap" })}>
              {(v.tracks ?? []).map((c: any, cIndex: number) => (
                <Fragment key={cIndex}>
                <button type="button" className="chip" onClick={c.pick} aria-pressed={c.on} style={S({ height: "38px", padding: "0 16px", borderRadius: "999px", border: `1px solid ${c.border}`, background: c.bg, color: c.text, fontFamily: "TS, sans-serif", fontSize: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "8px" })}>
                  <span style={S({ width: "8px", height: "8px", borderRadius: "50%", background: c.dot })} />
{c.name}
                </button>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="g4" style={S({ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "18px" })}>
            {v.tp0 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#9FDCE0", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#050F17", background: "radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <span className="tw" style={S({ position: "absolute", left: "59.6%", top: "14.4%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "81.7%", top: "17.5%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "42.9%", top: "15.4%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "10.2%", top: "34.9%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "5.7%", top: "3.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "94.8%", top: "11.7%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "79.8%", top: "25.3%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "74.6%", top: "32.8%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "94.5%", top: "29.5%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "27.6%", top: "8.7%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "19.4%", top: "11.9%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "24.5%", top: "30.4%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "96.8%", top: "4.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "64.9%", top: "24.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "50.8%", top: "3.7%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "20.1%", top: "34.5%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "3.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "36.5%", top: "23.4%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "49.3%", top: "21.0%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "3.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "70.4%", top: "8.3%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "15.8%", top: "5.7%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "31.3%", top: "15.1%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "81.1%", top: "35.6%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "63.3%", top: "37.8%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "96.2%", top: "6.4%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "73.6%", top: "26.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "34.7%", top: "27.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "74.0%", top: "35.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "57.9%", top: "25.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "60.6%", top: "11.6%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "20.3%", top: "8.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "3.2%", top: "6.7%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "11.2%", top: "9.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "33.9%", top: "30.4%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "46.1%", top: "5.5%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "69.1%", top: "4.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "8.5%", top: "23.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "49.5%", top: "1.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "15.3%", top: "5.7%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "87.1%", top: "4.7%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "14.7%", top: "27.2%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "35.7%", top: "39.3%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "6.5%", top: "35.9%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "4.6%", top: "34.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "19.4%", top: "2.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "41.7%", top: "20.3%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "75.4%", top: "16.6%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.3s" })} />
                    <span className="shoot" style={S({ position: "absolute", left: "78%", top: "4%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "1.5s" })} />
                    <span className="shoot" style={S({ position: "absolute", left: "92%", top: "14%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "5s" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                      <ellipse className="draw" cx="140" cy="77" rx="174" ry="25" transform="rotate(-12 140 77)" fill="none" stroke="var(--c1)" strokeOpacity=".7" strokeWidth="1.4" pathLength="1" />
                      <ellipse cx="140" cy="77" rx="122" ry="15" transform="rotate(-12 140 77)" fill="none" stroke="var(--c1)" strokeOpacity=".25" strokeWidth="1" strokeDasharray="2 6" />
                    </svg>
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "14px", height: "14px", margin: "-7px 0 0 -7px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, var(--tx), var(--c2))", boxShadow: "0 0 18px var(--c2)", offsetPath: "path('M 309.8 41.1 A 174 25 -12 1 1 -29.8 113.3 A 174 25 -12 1 1 309.8 41.1')", offsetRotate: "0deg" })} />
                  </div>
                  <span style={S({ position: "absolute", right: "12px", top: "12px", padding: "4px 10px", borderRadius: "999px", background: "#C99A2E", color: "#0B2B30", fontSize: "11px", fontWeight: "700" })}>
جديد · اعتُمد اليوم
                  </span>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
أسبوع الفلك والفضاء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
ثورة الصواريخ
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الفلك والفضاء · VIP
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
ليلي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp1 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#7FD0D4", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#072A2F", background: "radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <span className="ripple" style={S({ position: "absolute", left: "75px", top: "42px", width: "129px", height: "129px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "0.00s" })} />
                    <span className="ripple" style={S({ position: "absolute", left: "75px", top: "42px", width: "129px", height: "129px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "1.33s" })} />
                    <span className="ripple" style={S({ position: "absolute", left: "75px", top: "42px", width: "129px", height: "129px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "2.66s" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                      <ellipse className="draw" cx="140" cy="107" rx="100" ry="38" transform="rotate(-24 140 107)" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" pathLength="1" />
                    </svg>
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 231.3 66.3 A 100 38 -24 1 1 48.7 147.6 A 100 38 -24 1 1 231.3 66.3')", offsetRotate: "0deg", animationDuration: "9s" })} />
                    <div className="popin" style={S({ position: "absolute", left: "81px", top: "48px", width: "118px", height: "118px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, #FFFFFF, #F4F1EA)", boxShadow: "0 0 0 6px rgba(255,255,255,.18), 0 18px 40px rgba(0,0,0,.28)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                      <img className="forms" src="/brand/logo-128.png" alt="" style={S({ width: "87px", height: "auto" })} />
                    </div>
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
                      <path d="M 231.3 66.3 A 100 38 -24 0 1 48.7 147.6" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" />
                    </svg>
                    <span style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 231.3 66.3 A 100 38 -24 1 1 48.7 147.6 A 100 38 -24 1 1 231.3 66.3')", offsetRotate: "0deg", animation: "glide 9s linear infinite, front 9s steps(1,end) infinite" })} />
                    <span className="glint" style={S({ position: "absolute", left: "50%", top: "6px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.6s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "14%", top: "48px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.0s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "86%", top: "57px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.4s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "26%", top: "14px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.8s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "76%", top: "17px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "4.2s" })} />
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
لقاء أعضاء نادي العلوم
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
لقاء الأعضاء
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
النادي · VIP
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
بترولي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp2 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#9FDCE0", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#050F17", background: "radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <span className="ripple" style={S({ position: "absolute", left: "75px", top: "42px", width: "129px", height: "129px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "0.00s" })} />
                    <span className="ripple" style={S({ position: "absolute", left: "75px", top: "42px", width: "129px", height: "129px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "1.33s" })} />
                    <span className="ripple" style={S({ position: "absolute", left: "75px", top: "42px", width: "129px", height: "129px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "2.66s" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                      <ellipse className="draw" cx="140" cy="107" rx="100" ry="38" transform="rotate(-24 140 107)" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" pathLength="1" />
                    </svg>
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 231.3 66.3 A 100 38 -24 1 1 48.7 147.6 A 100 38 -24 1 1 231.3 66.3')", offsetRotate: "0deg", animationDuration: "9s" })} />
                    <div className="popin" style={S({ position: "absolute", left: "81px", top: "48px", width: "118px", height: "118px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, #FFFFFF, #F4F1EA)", boxShadow: "0 0 0 6px rgba(255,255,255,.18), 0 18px 40px rgba(0,0,0,.28)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                      <img className="forms" src="/brand/logo-128.png" alt="" style={S({ width: "87px", height: "auto" })} />
                    </div>
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
                      <path d="M 231.3 66.3 A 100 38 -24 0 1 48.7 147.6" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" />
                    </svg>
                    <span style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 231.3 66.3 A 100 38 -24 1 1 48.7 147.6 A 100 38 -24 1 1 231.3 66.3')", offsetRotate: "0deg", animation: "glide 9s linear infinite, front 9s steps(1,end) infinite" })} />
                    <span className="glint" style={S({ position: "absolute", left: "50%", top: "6px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.6s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "14%", top: "48px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.0s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "86%", top: "57px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.4s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "26%", top: "14px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.8s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "76%", top: "17px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "4.2s" })} />
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
لقاء أعضاء نادي العلوم
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
لقاء الأعضاء
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
النادي · متحدث
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
ليلي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp3 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#9FDCE0", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#050F17", background: "radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <span className="tw" style={S({ position: "absolute", left: "4.1%", top: "38.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "3.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "93.8%", top: "11.1%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "47.3%", top: "23.7%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "76.6%", top: "2.3%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "49.3%", top: "37.0%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "70.2%", top: "2.5%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "21.4%", top: "12.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "70.8%", top: "21.4%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "98.1%", top: "29.6%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "75.2%", top: "32.7%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "64.1%", top: "36.1%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "55.2%", top: "35.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "94.6%", top: "15.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "24.1%", top: "7.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "11.5%", top: "6.3%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "3.6%", top: "34.3%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "3.7%", top: "39.3%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "18.9%", top: "15.7%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "19.1%", top: "23.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "21.7%", top: "18.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "34.3%", top: "19.7%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "78.4%", top: "35.3%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "90.0%", top: "30.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "48.6%", top: "25.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "15.6%", top: "36.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "64.9%", top: "35.3%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "79.7%", top: "2.7%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "66.7%", top: "20.8%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "39.5%", top: "36.9%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "64.1%", top: "4.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "3.6%", top: "16.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "17.0%", top: "11.4%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "13.0%", top: "27.0%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "50.4%", top: "15.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "3.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "82.8%", top: "14.3%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "7.9%", top: "2.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "33.2%", top: "15.7%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "45.0%", top: "32.9%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "14.3%", top: "30.2%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "14.2%", top: "34.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "52.1%", top: "1.4%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "92.7%", top: "18.7%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "1.5%", top: "3.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "40.7%", top: "16.3%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "26.8%", top: "18.7%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "62.1%", top: "1.9%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.4s" })} />
                    <span className="shoot" style={S({ position: "absolute", left: "78%", top: "4%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "1.5s" })} />
                    <span className="shoot" style={S({ position: "absolute", left: "92%", top: "14%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "5s" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                      <ellipse className="draw" cx="140" cy="77" rx="174" ry="25" transform="rotate(-12 140 77)" fill="none" stroke="var(--c1)" strokeOpacity=".7" strokeWidth="1.4" pathLength="1" />
                      <ellipse cx="140" cy="77" rx="122" ry="15" transform="rotate(-12 140 77)" fill="none" stroke="var(--c1)" strokeOpacity=".25" strokeWidth="1" strokeDasharray="2 6" />
                    </svg>
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "14px", height: "14px", margin: "-7px 0 0 -7px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, var(--tx), var(--c2))", boxShadow: "0 0 18px var(--c2)", offsetPath: "path('M 309.8 41.1 A 174 25 -12 1 1 -29.8 113.3 A 174 25 -12 1 1 309.8 41.1')", offsetRotate: "0deg" })} />
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
أسبوع الفلك والفضاء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
ثورة الصواريخ
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الفلك والفضاء · VIP
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
ليلي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp4 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#13707B", "--c2": "#C99A2E", "--tx": "#0B3B41", "--ll": "0", "--sc": "#F4F1EA", background: "radial-gradient(120% 80% at 75% 0%, #FFFFFF 0%, #F4F1EA 45%, #DCEBE8 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <span className="tw" style={S({ position: "absolute", left: "14.1%", top: "17.6%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "66.5%", top: "12.9%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "75.1%", top: "3.0%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "9.5%", top: "16.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "37.7%", top: "24.5%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "59.7%", top: "13.5%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "51.9%", top: "27.7%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "57.8%", top: "12.4%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "73.0%", top: "35.6%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "78.4%", top: "2.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "87.8%", top: "32.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "93.4%", top: "1.8%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "16.7%", top: "36.2%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "35.7%", top: "16.8%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "59.4%", top: "12.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "20.6%", top: "37.1%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "84.2%", top: "26.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "63.7%", top: "32.4%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "23.1%", top: "5.5%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "78.8%", top: "15.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "95.8%", top: "26.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "55.5%", top: "15.7%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "7.7%", top: "21.7%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "48.9%", top: "38.8%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "39.6%", top: "18.2%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "65.8%", top: "19.1%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "15.1%", top: "29.7%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "76.5%", top: "28.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "51.1%", top: "39.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "43.8%", top: "32.4%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "81.0%", top: "4.9%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "92.1%", top: "4.9%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "4.2%", top: "13.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "91.1%", top: "27.5%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "86.5%", top: "14.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "77.7%", top: "14.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "79.8%", top: "25.4%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "7.3%", top: "25.3%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "50.9%", top: "6.9%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "75.4%", top: "39.0%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "23.0%", top: "20.7%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "87.2%", top: "25.9%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "88.4%", top: "10.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "30.9%", top: "14.1%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "66.0%", top: "12.6%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "22.8%", top: "19.5%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.0s" })} />
                    <span className="shoot" style={S({ position: "absolute", left: "78%", top: "4%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "1.5s" })} />
                    <span className="shoot" style={S({ position: "absolute", left: "92%", top: "14%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "5s" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                      <ellipse className="draw" cx="140" cy="77" rx="174" ry="25" transform="rotate(-12 140 77)" fill="none" stroke="var(--c1)" strokeOpacity=".7" strokeWidth="1.4" pathLength="1" />
                      <ellipse cx="140" cy="77" rx="122" ry="15" transform="rotate(-12 140 77)" fill="none" stroke="var(--c1)" strokeOpacity=".25" strokeWidth="1" strokeDasharray="2 6" />
                    </svg>
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "14px", height: "14px", margin: "-7px 0 0 -7px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, var(--tx), var(--c2))", boxShadow: "0 0 18px var(--c2)", offsetPath: "path('M 309.8 41.1 A 174 25 -12 1 1 -29.8 113.3 A 174 25 -12 1 1 309.8 41.1')", offsetRotate: "0deg" })} />
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
أسبوع الفلك والفضاء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
ثورة الصواريخ
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الفلك والفضاء · ضيف
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
عاجي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp5 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#13707B", "--c2": "#C99A2E", "--tx": "#0B3B41", "--ll": "0", "--sc": "#F4F1EA", background: "radial-gradient(120% 80% at 75% 0%, #FFFFFF 0%, #F4F1EA 45%, #DCEBE8 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <div style={S({ position: "absolute", left: "20px", top: "58px" })}>
                      <svg width="241" height="74" viewBox="0 0 340 104" aria-hidden="true" style={S({ opacity: "0.5" })}>
                        <rect className="pwave" x="8" y="4" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                        <rect className="pwave" x="314" y="4" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                        <rect className="pwave" x="8" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                        <rect className="pwave" x="26" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                        <rect className="pwave" x="224" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                        <rect className="pwave" x="242" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                        <rect className="pwave" x="260" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                        <rect className="pwave" x="278" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                        <rect className="pwave" x="296" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                        <rect className="pwave" x="314" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                        <rect className="pwave" x="8" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                        <rect className="pwave" x="26" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                        <rect className="pwave" x="224" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                        <rect className="pwave" x="242" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                        <rect className="pwave" x="260" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                        <rect className="pwave" x="278" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                        <rect className="pwave" x="296" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                        <rect className="pwave" x="314" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                        <rect className="pwave" x="8" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                        <rect className="pwave" x="26" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                        <rect className="pwave" x="44" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.24s" })} />
                        <rect className="pwave" x="62" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.32s" })} />
                        <rect className="pwave" x="80" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.40s" })} />
                        <rect className="pwave" x="98" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.48s" })} />
                        <rect className="pwave" x="116" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.56s" })} />
                        <rect className="pwave" x="134" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.64s" })} />
                        <rect className="pwave" x="152" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.72s" })} />
                        <rect className="pwave" x="170" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.80s" })} />
                        <rect className="pwave" x="188" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.88s" })} />
                        <rect className="pwave" x="206" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.96s" })} />
                        <rect className="pwave" x="224" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                        <rect className="pwave" x="242" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                        <rect className="pwave" x="260" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                        <rect className="pwave" x="278" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                        <rect className="pwave" x="296" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                        <rect className="pwave" x="314" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                        <rect className="pwave" x="8" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                        <rect className="pwave" x="26" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                        <rect className="pwave" x="44" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.24s" })} />
                        <rect className="pwave" x="62" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.32s" })} />
                        <rect className="pwave" x="80" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.40s" })} />
                        <rect className="pwave" x="98" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.48s" })} />
                        <rect className="pwave" x="116" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.56s" })} />
                        <rect className="pwave" x="134" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.64s" })} />
                        <rect className="pwave" x="152" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.72s" })} />
                        <rect className="pwave" x="170" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.80s" })} />
                        <rect className="pwave" x="188" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.88s" })} />
                        <rect className="pwave" x="206" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.96s" })} />
                        <rect className="pwave" x="224" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                        <rect className="pwave" x="242" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                        <rect className="pwave" x="260" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                        <rect className="pwave" x="278" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                        <rect className="pwave" x="296" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                        <rect className="pwave" x="314" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                      </svg>
                    </div>
                    <div style={S({ position: "absolute", left: "40px", top: "74px", display: "flex", gap: "4px", direction: "ltr" })}>
                      <span className="flyin" style={S({ "--fx": "-120px", "--fy": "-90px", "--fr": "-30deg", animationDelay: "0.30s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "0.0s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "36px", height: "41px", padding: "3px 3px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                              <span>
16
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "4px" })}>
32.06
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "18px", textAlign: "center" })}>
S
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كبريت
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "-40px", "--fy": "-140px", "--fr": "20deg", animationDelay: "0.48s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "0.4s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "36px", height: "41px", padding: "3px 3px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                              <span>
6
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "4px" })}>
12.011
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "18px", textAlign: "center" })}>
C
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كربون
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "0px", "--fy": "-160px", "--fr": "-12deg", animationDelay: "0.66s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "0.8s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "36px", height: "41px", padding: "3px 3px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                              <span>
92
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "4px" })}>
238.03
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "18px", textAlign: "center" })}>
U
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "60px", "--fy": "-130px", "--fr": "28deg", animationDelay: "0.84s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "1.2s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "36px", height: "41px", padding: "3px 3px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,#F7E3A6,#C99A2E)", border: "1.5px solid var(--c2)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "#0B1F24", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                              <span>
✦
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "4px" })} />
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "18px", textAlign: "center" })}>
Q
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
نادي العلوم
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "130px", "--fy": "-100px", "--fr": "-24deg", animationDelay: "1.02s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "1.6s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "36px", height: "41px", padding: "3px 3px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                              <span>
92
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "4px" })}>
238.03
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "18px", textAlign: "center" })}>
U
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span style={S({ position: "absolute", left: "17px", top: "51px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "10px", animationDuration: "11.4s", animationDelay: "-3.1s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
1
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
H
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "263px", top: "53px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "18px", animationDuration: "9.7s", animationDelay: "-1.4s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
8
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
O
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "28px", top: "121px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "18px", animationDuration: "11.7s", animationDelay: "-1.5s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
7
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
N
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "252px", top: "124px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "18px", animationDuration: "9.8s", animationDelay: "-1.5s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
11
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
Na
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "140px", top: "34px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "10px", animationDuration: "12.9s", animationDelay: "-7.6s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
26
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
Fe
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "84px", top: "31px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "18px", animationDuration: "10.7s", animationDelay: "-4.9s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
79
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
Au
                          </b>
                        </span>
                      </span>
                    </span>
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
                      <ellipse className="draw" cx="140" cy="95" rx="124" ry="35" fill="none" stroke="var(--c2)" strokeOpacity=".5" strokeWidth="1.2" pathLength="1" style={S({ animationDelay: "1.4s" })} />
                    </svg>
                    <span className="glint" style={S({ position: "absolute", left: "24%", top: "104px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "1.50s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "25%", top: "43px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "1.85s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "91%", top: "90px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.20s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "82%", top: "45px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.55s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "48%", top: "66px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.90s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "94%", top: "81px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.25s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "18%", top: "97px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.60s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "54%", top: "125px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.95s" })} />
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
يوم الكيمياء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
تفاعل
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الكيمياء · متحدث
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
عاجي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp6 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#7FD0D4", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#072A2F", background: "radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <div style={S({ position: "absolute", left: "20px", top: "58px" })}>
                      <svg width="241" height="74" viewBox="0 0 340 104" aria-hidden="true" style={S({ opacity: "0.5" })}>
                        <rect className="pwave" x="8" y="4" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                        <rect className="pwave" x="314" y="4" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                        <rect className="pwave" x="8" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                        <rect className="pwave" x="26" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                        <rect className="pwave" x="224" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                        <rect className="pwave" x="242" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                        <rect className="pwave" x="260" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                        <rect className="pwave" x="278" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                        <rect className="pwave" x="296" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                        <rect className="pwave" x="314" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                        <rect className="pwave" x="8" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                        <rect className="pwave" x="26" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                        <rect className="pwave" x="224" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                        <rect className="pwave" x="242" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                        <rect className="pwave" x="260" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                        <rect className="pwave" x="278" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                        <rect className="pwave" x="296" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                        <rect className="pwave" x="314" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                        <rect className="pwave" x="8" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                        <rect className="pwave" x="26" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                        <rect className="pwave" x="44" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.24s" })} />
                        <rect className="pwave" x="62" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.32s" })} />
                        <rect className="pwave" x="80" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.40s" })} />
                        <rect className="pwave" x="98" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.48s" })} />
                        <rect className="pwave" x="116" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.56s" })} />
                        <rect className="pwave" x="134" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.64s" })} />
                        <rect className="pwave" x="152" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.72s" })} />
                        <rect className="pwave" x="170" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.80s" })} />
                        <rect className="pwave" x="188" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.88s" })} />
                        <rect className="pwave" x="206" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.96s" })} />
                        <rect className="pwave" x="224" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                        <rect className="pwave" x="242" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                        <rect className="pwave" x="260" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                        <rect className="pwave" x="278" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                        <rect className="pwave" x="296" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                        <rect className="pwave" x="314" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                        <rect className="pwave" x="8" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                        <rect className="pwave" x="26" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                        <rect className="pwave" x="44" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.24s" })} />
                        <rect className="pwave" x="62" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.32s" })} />
                        <rect className="pwave" x="80" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.40s" })} />
                        <rect className="pwave" x="98" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.48s" })} />
                        <rect className="pwave" x="116" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.56s" })} />
                        <rect className="pwave" x="134" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.64s" })} />
                        <rect className="pwave" x="152" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.72s" })} />
                        <rect className="pwave" x="170" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.80s" })} />
                        <rect className="pwave" x="188" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.88s" })} />
                        <rect className="pwave" x="206" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.96s" })} />
                        <rect className="pwave" x="224" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                        <rect className="pwave" x="242" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                        <rect className="pwave" x="260" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                        <rect className="pwave" x="278" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                        <rect className="pwave" x="296" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                        <rect className="pwave" x="314" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                      </svg>
                    </div>
                    <div style={S({ position: "absolute", left: "40px", top: "74px", display: "flex", gap: "4px", direction: "ltr" })}>
                      <span className="flyin" style={S({ "--fx": "-120px", "--fy": "-90px", "--fr": "-30deg", animationDelay: "0.30s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "0.0s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "36px", height: "41px", padding: "3px 3px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                              <span>
16
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "4px" })}>
32.06
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "18px", textAlign: "center" })}>
S
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كبريت
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "-40px", "--fy": "-140px", "--fr": "20deg", animationDelay: "0.48s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "0.4s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "36px", height: "41px", padding: "3px 3px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                              <span>
6
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "4px" })}>
12.011
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "18px", textAlign: "center" })}>
C
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كربون
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "0px", "--fy": "-160px", "--fr": "-12deg", animationDelay: "0.66s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "0.8s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "36px", height: "41px", padding: "3px 3px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                              <span>
92
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "4px" })}>
238.03
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "18px", textAlign: "center" })}>
U
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "60px", "--fy": "-130px", "--fr": "28deg", animationDelay: "0.84s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "1.2s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "36px", height: "41px", padding: "3px 3px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,#F7E3A6,#C99A2E)", border: "1.5px solid var(--c2)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "#0B1F24", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                              <span>
✦
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "4px" })} />
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "18px", textAlign: "center" })}>
Q
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
نادي العلوم
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "130px", "--fy": "-100px", "--fr": "-24deg", animationDelay: "1.02s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "1.6s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "36px", height: "41px", padding: "3px 3px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                              <span>
92
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "4px" })}>
238.03
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "18px", textAlign: "center" })}>
U
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span style={S({ position: "absolute", left: "17px", top: "51px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "14px", animationDuration: "13.5s", animationDelay: "-6.3s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
1
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
H
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "263px", top: "53px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "14px", animationDuration: "12.6s", animationDelay: "-1.7s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
8
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
O
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "28px", top: "121px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "18px", animationDuration: "12.8s", animationDelay: "-5.4s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
7
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
N
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "252px", top: "124px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "18px", animationDuration: "8.2s", animationDelay: "-7.5s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
11
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
Na
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "140px", top: "34px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "10px", animationDuration: "13.2s", animationDelay: "-2.9s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
26
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
Fe
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "84px", top: "31px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-10px", top: "-10px", "--r": "18px", animationDuration: "11.5s", animationDelay: "-4.8s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "4px", color: "var(--c2)" })}>
79
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "9px" })}>
Au
                          </b>
                        </span>
                      </span>
                    </span>
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
                      <ellipse className="draw" cx="140" cy="95" rx="124" ry="35" fill="none" stroke="var(--c2)" strokeOpacity=".5" strokeWidth="1.2" pathLength="1" style={S({ animationDelay: "1.4s" })} />
                    </svg>
                    <span className="glint" style={S({ position: "absolute", left: "63%", top: "124px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "1.50s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "41%", top: "120px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "1.85s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "10%", top: "64px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.20s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "58%", top: "94px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.55s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "78%", top: "106px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.90s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "29%", top: "70px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.25s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "40%", top: "61px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.60s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "83%", top: "116px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.95s" })} />
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
يوم الكيمياء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
تفاعل
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الكيمياء · عضو
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
بترولي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp7 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#7FD0D4", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#072A2F", background: "radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0", filter: "drop-shadow(0 0 6px var(--c1))" })} aria-hidden="true">
                      <path className="wave" d="M-20 42 L-20 32.7 L-15 34.6 L-10 36.9 L-5 39.4 L0 42.1 L5 44.8 L10 47.4 L15 49.7 L20 51.6 L25 53.0 L30 53.9 L35 54.1 L40 53.8 L45 52.8 L50 51.3 L55 49.3 L60 47.0 L65 44.4 L70 41.6 L75 38.9 L80 36.4 L85 34.2 L90 32.4 L95 31.0 L100 30.3 L105 30.1 L110 30.6 L115 31.7 L120 33.3 L125 35.3 L130 37.7 L135 40.4 L140 43.1 L145 45.8 L150 48.2 L155 50.4 L160 52.1 L165 53.4 L170 54.0 L175 54.1 L180 53.5 L185 52.3 L190 50.6 L195 48.5 L200 46.1 L205 43.4 L210 40.7 L215 38.0 L220 35.6 L225 33.5 L230 31.8 L235 30.7 L240 30.2 L245 30.2 L250 30.9 L255 32.2 L260 34.0 L265 36.1 L270 38.6 L275 41.3 L280 44.0 L285 46.7 L290 49.0 L295 51.1 L300 52.6 L305 53.7" fill="none" stroke="var(--c1)" strokeOpacity="0.85" strokeWidth="1.6" style={S({ animationDuration: "2.5s" })} />
                      <path className="wave" d="M-20 77 L-20 66.1 L-15 68.6 L-10 71.3 L-5 74.2 L0 77.2 L5 80.2 L10 83.1 L15 85.8 L20 88.4 L25 90.5 L30 92.4 L35 93.8 L40 94.7 L45 95.2 L50 95.1 L55 94.6 L60 93.6 L65 92.1 L70 90.2 L75 88.0 L80 85.5 L85 82.7 L90 79.8 L95 76.8 L100 73.8 L105 70.9 L110 68.2 L115 65.7 L120 63.6 L125 61.8 L130 60.5 L135 59.6 L140 59.2 L145 59.4 L150 60.0 L155 61.0 L160 62.6 L165 64.5 L170 66.8 L175 69.4 L180 72.2 L185 75.1 L190 78.1 L195 81.1 L200 84.0 L205 86.6 L210 89.0 L215 91.1 L220 92.8 L225 94.1 L230 94.9 L235 95.2 L240 95.0 L245 94.3 L250 93.2 L255 91.6 L260 89.6 L265 87.3 L270 84.6 L275 81.8 L280 78.9 L285 75.9 L290 72.9 L295 70.1 L300 67.4 L305 65.1" fill="none" stroke="var(--c2)" strokeOpacity="0.6" strokeWidth="1.6" style={S({ animationDuration: "3.5s" })} />
                      <path className="wave" d="M-20 112 L-20 103.8 L-15 105.1 L-10 107.1 L-5 109.6 L0 112.3 L5 115.1 L10 117.6 L15 119.6 L20 120.9 L25 121.3 L30 120.9 L35 119.7 L40 117.7 L45 115.2 L50 112.5 L55 109.7 L60 107.2 L65 105.2 L70 103.8 L75 103.3 L80 103.7 L85 104.9 L90 106.8 L95 109.3 L100 112.0 L105 114.8 L110 117.3 L115 119.4 L120 120.8 L125 121.3 L130 121.0 L135 119.8 L140 117.9 L145 115.5 L150 112.8 L155 110.0 L160 107.4 L165 105.3 L170 103.9 L175 103.3 L180 103.6 L185 104.7 L190 106.6 L195 109.0 L200 111.7 L205 114.5 L210 117.1 L215 119.2 L220 120.7 L225 121.3 L230 121.1 L235 120.0 L240 118.2 L245 115.8 L250 113.1 L255 110.3 L260 107.7 L265 105.5 L270 104.0 L275 103.4 L280 103.5 L285 104.6 L290 106.4 L295 108.7 L300 111.4 L305 114.2" fill="none" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="1.6" style={S({ animationDuration: "4.5s" })} />
                    </svg>
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "59px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "2.6s", animationDuration: "3.0s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "95px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "1.4s", animationDuration: "2.6s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "95px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "3.2s", animationDuration: "3.9s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "59px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "0.3s", animationDuration: "3.5s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "95px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "2.5s", animationDuration: "3.8s" })} />
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
ملتقى الفيزياء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
موجة
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الفيزياء · ضيف
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
بترولي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp8 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#9FDCE0", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#050F17", background: "radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0", filter: "drop-shadow(0 0 6px var(--c1))" })} aria-hidden="true">
                      <path className="wave" d="M-20 42 L-20 32.7 L-15 34.6 L-10 36.9 L-5 39.4 L0 42.1 L5 44.8 L10 47.4 L15 49.7 L20 51.6 L25 53.0 L30 53.9 L35 54.1 L40 53.8 L45 52.8 L50 51.3 L55 49.3 L60 47.0 L65 44.4 L70 41.6 L75 38.9 L80 36.4 L85 34.2 L90 32.4 L95 31.0 L100 30.3 L105 30.1 L110 30.6 L115 31.7 L120 33.3 L125 35.3 L130 37.7 L135 40.4 L140 43.1 L145 45.8 L150 48.2 L155 50.4 L160 52.1 L165 53.4 L170 54.0 L175 54.1 L180 53.5 L185 52.3 L190 50.6 L195 48.5 L200 46.1 L205 43.4 L210 40.7 L215 38.0 L220 35.6 L225 33.5 L230 31.8 L235 30.7 L240 30.2 L245 30.2 L250 30.9 L255 32.2 L260 34.0 L265 36.1 L270 38.6 L275 41.3 L280 44.0 L285 46.7 L290 49.0 L295 51.1 L300 52.6 L305 53.7" fill="none" stroke="var(--c1)" strokeOpacity="0.85" strokeWidth="1.6" style={S({ animationDuration: "2.5s" })} />
                      <path className="wave" d="M-20 77 L-20 66.1 L-15 68.6 L-10 71.3 L-5 74.2 L0 77.2 L5 80.2 L10 83.1 L15 85.8 L20 88.4 L25 90.5 L30 92.4 L35 93.8 L40 94.7 L45 95.2 L50 95.1 L55 94.6 L60 93.6 L65 92.1 L70 90.2 L75 88.0 L80 85.5 L85 82.7 L90 79.8 L95 76.8 L100 73.8 L105 70.9 L110 68.2 L115 65.7 L120 63.6 L125 61.8 L130 60.5 L135 59.6 L140 59.2 L145 59.4 L150 60.0 L155 61.0 L160 62.6 L165 64.5 L170 66.8 L175 69.4 L180 72.2 L185 75.1 L190 78.1 L195 81.1 L200 84.0 L205 86.6 L210 89.0 L215 91.1 L220 92.8 L225 94.1 L230 94.9 L235 95.2 L240 95.0 L245 94.3 L250 93.2 L255 91.6 L260 89.6 L265 87.3 L270 84.6 L275 81.8 L280 78.9 L285 75.9 L290 72.9 L295 70.1 L300 67.4 L305 65.1" fill="none" stroke="var(--c2)" strokeOpacity="0.6" strokeWidth="1.6" style={S({ animationDuration: "3.5s" })} />
                      <path className="wave" d="M-20 112 L-20 103.8 L-15 105.1 L-10 107.1 L-5 109.6 L0 112.3 L5 115.1 L10 117.6 L15 119.6 L20 120.9 L25 121.3 L30 120.9 L35 119.7 L40 117.7 L45 115.2 L50 112.5 L55 109.7 L60 107.2 L65 105.2 L70 103.8 L75 103.3 L80 103.7 L85 104.9 L90 106.8 L95 109.3 L100 112.0 L105 114.8 L110 117.3 L115 119.4 L120 120.8 L125 121.3 L130 121.0 L135 119.8 L140 117.9 L145 115.5 L150 112.8 L155 110.0 L160 107.4 L165 105.3 L170 103.9 L175 103.3 L180 103.6 L185 104.7 L190 106.6 L195 109.0 L200 111.7 L205 114.5 L210 117.1 L215 119.2 L220 120.7 L225 121.3 L230 121.1 L235 120.0 L240 118.2 L245 115.8 L250 113.1 L255 110.3 L260 107.7 L265 105.5 L270 104.0 L275 103.4 L280 103.5 L285 104.6 L290 106.4 L295 108.7 L300 111.4 L305 114.2" fill="none" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="1.6" style={S({ animationDuration: "4.5s" })} />
                    </svg>
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "28px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "0.5s", animationDuration: "3.2s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "59px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "2.7s", animationDuration: "3.0s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "95px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "1.0s", animationDuration: "3.6s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "95px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "3.0s", animationDuration: "3.2s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "28px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "0.6s", animationDuration: "2.7s" })} />
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
ملتقى الفيزياء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
موجة
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الفيزياء · متحدث
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
ليلي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp9 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#9FDCE0", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#050F17", background: "radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <span style={S({ position: "absolute", left: "6px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "2px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "0.00s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "2px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.30s" })} />
                    <span style={S({ position: "absolute", left: "22px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "18px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.18s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "18px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.48s" })} />
                    <span style={S({ position: "absolute", left: "38px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "34px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.36s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "34px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.66s" })} />
                    <span style={S({ position: "absolute", left: "54px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "50px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.54s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "50px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.84s" })} />
                    <span style={S({ position: "absolute", left: "70px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "66px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.72s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "66px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.02s" })} />
                    <span style={S({ position: "absolute", left: "86px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "82px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.90s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "82px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.20s" })} />
                    <span style={S({ position: "absolute", left: "102px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "98px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.08s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "98px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.38s" })} />
                    <span style={S({ position: "absolute", left: "118px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "114px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.26s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "114px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.56s" })} />
                    <span style={S({ position: "absolute", left: "134px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "130px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.44s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "130px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.74s" })} />
                    <span style={S({ position: "absolute", left: "150px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "146px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.62s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "146px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.92s" })} />
                    <span style={S({ position: "absolute", left: "166px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "162px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.80s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "162px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.10s" })} />
                    <span style={S({ position: "absolute", left: "182px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "178px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.98s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "178px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.28s" })} />
                    <span style={S({ position: "absolute", left: "198px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "194px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.16s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "194px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.46s" })} />
                    <span style={S({ position: "absolute", left: "214px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "210px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.34s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "210px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.64s" })} />
                    <span style={S({ position: "absolute", left: "230px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "226px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.52s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "226px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.82s" })} />
                    <span style={S({ position: "absolute", left: "246px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "242px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.70s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "242px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.00s" })} />
                    <span style={S({ position: "absolute", left: "262px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "258px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.88s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "258px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.18s" })} />
                    <div className="cell" style={S({ position: "absolute", left: "8%", top: "77px", animationDelay: "0.0s" })}>
                      <svg width="64" height="64" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <radialGradient id="cy64" cx=".4" cy=".35" r=".7">
                            <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                            <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                          </radialGradient>
                        </defs>
                        <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy64)" stroke="var(--c1)" strokeWidth="2.4" />
                        <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
                        <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
                        <circle cx="60" cy="40" r="5" fill="var(--c2)" />
                        <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
                        <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <circle cx="34" cy="34" r="2" fill="var(--c1)" />
                        <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
                        <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
                      </svg>
                    </div>
                    <div className="cell" style={S({ position: "absolute", left: "58%", top: "70px", animationDelay: "1.6s" })}>
                      <svg width="52" height="52" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <radialGradient id="cy52" cx=".4" cy=".35" r=".7">
                            <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                            <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                          </radialGradient>
                        </defs>
                        <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy52)" stroke="var(--c1)" strokeWidth="2.4" />
                        <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
                        <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
                        <circle cx="60" cy="40" r="5" fill="var(--c2)" />
                        <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
                        <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <circle cx="34" cy="34" r="2" fill="var(--c1)" />
                        <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
                        <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
                      </svg>
                    </div>
                    <div className="cell" style={S({ position: "absolute", left: "34%", top: "101px", animationDelay: "3.2s" })}>
                      <svg width="40" height="40" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <radialGradient id="cy40" cx=".4" cy=".35" r=".7">
                            <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                            <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                          </radialGradient>
                        </defs>
                        <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy40)" stroke="var(--c1)" strokeWidth="2.4" />
                        <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
                        <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
                        <circle cx="60" cy="40" r="5" fill="var(--c2)" />
                        <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
                        <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <circle cx="34" cy="34" r="2" fill="var(--c1)" />
                        <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
                        <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
                      </svg>
                    </div>
                    <div className="cell" style={S({ position: "absolute", left: "80%", top: "95px", animationDelay: "4.8s" })}>
                      <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <radialGradient id="cy36" cx=".4" cy=".35" r=".7">
                            <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                            <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                          </radialGradient>
                        </defs>
                        <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy36)" stroke="var(--c1)" strokeWidth="2.4" />
                        <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
                        <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
                        <circle cx="60" cy="40" r="5" fill="var(--c2)" />
                        <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
                        <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <circle cx="34" cy="34" r="2" fill="var(--c1)" />
                        <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
                        <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
                      </svg>
                    </div>
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
أسبوع الأحياء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
شيفرة الحياة
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الأحياء · ضيف
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
ليلي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp10 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#13707B", "--c2": "#C99A2E", "--tx": "#0B3B41", "--ll": "0", "--sc": "#F4F1EA", background: "radial-gradient(120% 80% at 75% 0%, #FFFFFF 0%, #F4F1EA 45%, #DCEBE8 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <span style={S({ position: "absolute", left: "6px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "2px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "0.00s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "2px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.30s" })} />
                    <span style={S({ position: "absolute", left: "22px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "18px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.18s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "18px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.48s" })} />
                    <span style={S({ position: "absolute", left: "38px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "34px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.36s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "34px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.66s" })} />
                    <span style={S({ position: "absolute", left: "54px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "50px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.54s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "50px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.84s" })} />
                    <span style={S({ position: "absolute", left: "70px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "66px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.72s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "66px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.02s" })} />
                    <span style={S({ position: "absolute", left: "86px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "82px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.90s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "82px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.20s" })} />
                    <span style={S({ position: "absolute", left: "102px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "98px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.08s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "98px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.38s" })} />
                    <span style={S({ position: "absolute", left: "118px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "114px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.26s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "114px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.56s" })} />
                    <span style={S({ position: "absolute", left: "134px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "130px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.44s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "130px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.74s" })} />
                    <span style={S({ position: "absolute", left: "150px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "146px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.62s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "146px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.92s" })} />
                    <span style={S({ position: "absolute", left: "166px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "162px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.80s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "162px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.10s" })} />
                    <span style={S({ position: "absolute", left: "182px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "178px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.98s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "178px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.28s" })} />
                    <span style={S({ position: "absolute", left: "198px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "194px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.16s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "194px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.46s" })} />
                    <span style={S({ position: "absolute", left: "214px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "210px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.34s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "210px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.64s" })} />
                    <span style={S({ position: "absolute", left: "230px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "226px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.52s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "226px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.82s" })} />
                    <span style={S({ position: "absolute", left: "246px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "242px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.70s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "242px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.00s" })} />
                    <span style={S({ position: "absolute", left: "262px", top: "29px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "258px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.88s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "258px", top: "41px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.18s" })} />
                    <div className="cell" style={S({ position: "absolute", left: "8%", top: "77px", animationDelay: "0.0s" })}>
                      <svg width="64" height="64" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <radialGradient id="cy64" cx=".4" cy=".35" r=".7">
                            <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                            <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                          </radialGradient>
                        </defs>
                        <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy64)" stroke="var(--c1)" strokeWidth="2.4" />
                        <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
                        <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
                        <circle cx="60" cy="40" r="5" fill="var(--c2)" />
                        <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
                        <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <circle cx="34" cy="34" r="2" fill="var(--c1)" />
                        <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
                        <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
                      </svg>
                    </div>
                    <div className="cell" style={S({ position: "absolute", left: "58%", top: "70px", animationDelay: "1.6s" })}>
                      <svg width="52" height="52" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <radialGradient id="cy52" cx=".4" cy=".35" r=".7">
                            <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                            <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                          </radialGradient>
                        </defs>
                        <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy52)" stroke="var(--c1)" strokeWidth="2.4" />
                        <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
                        <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
                        <circle cx="60" cy="40" r="5" fill="var(--c2)" />
                        <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
                        <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <circle cx="34" cy="34" r="2" fill="var(--c1)" />
                        <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
                        <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
                      </svg>
                    </div>
                    <div className="cell" style={S({ position: "absolute", left: "34%", top: "101px", animationDelay: "3.2s" })}>
                      <svg width="40" height="40" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <radialGradient id="cy40" cx=".4" cy=".35" r=".7">
                            <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                            <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                          </radialGradient>
                        </defs>
                        <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy40)" stroke="var(--c1)" strokeWidth="2.4" />
                        <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
                        <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
                        <circle cx="60" cy="40" r="5" fill="var(--c2)" />
                        <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
                        <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <circle cx="34" cy="34" r="2" fill="var(--c1)" />
                        <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
                        <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
                      </svg>
                    </div>
                    <div className="cell" style={S({ position: "absolute", left: "80%", top: "95px", animationDelay: "4.8s" })}>
                      <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <radialGradient id="cy36" cx=".4" cy=".35" r=".7">
                            <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                            <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                          </radialGradient>
                        </defs>
                        <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy36)" stroke="var(--c1)" strokeWidth="2.4" />
                        <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
                        <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
                        <circle cx="60" cy="40" r="5" fill="var(--c2)" />
                        <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
                        <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
                        <circle cx="34" cy="34" r="2" fill="var(--c1)" />
                        <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
                        <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
                      </svg>
                    </div>
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
أسبوع الأحياء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
شيفرة الحياة
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الأحياء · عضو
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
عاجي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp11 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#13707B", "--c2": "#C99A2E", "--tx": "#0B3B41", "--ll": "0", "--sc": "#F4F1EA", background: "radial-gradient(120% 80% at 75% 0%, #FFFFFF 0%, #F4F1EA 45%, #DCEBE8 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <div style={S({ position: "absolute", left: "0", right: "0", top: "0", height: "140px", backgroundImage: "linear-gradient(color-mix(in srgb, var(--c1) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--c1) 8%, transparent) 1px, transparent 1px)", backgroundSize: "23px 23px", WebkitMaskImage: "linear-gradient(180deg,#000,transparent)", maskImage: "linear-gradient(180deg,#000,transparent)" })} />
                    <span className="grow" style={S({ position: "absolute", left: "8%", top: "74px", width: "14px", height: "56px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.2s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "20%", top: "97px", width: "14px", height: "32px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.3s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "32%", top: "105px", width: "14px", height: "24px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.4s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "44%", top: "90px", width: "14px", height: "39px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.5s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "56%", top: "67px", width: "14px", height: "62px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.6s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "68%", top: "102px", width: "14px", height: "28px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.7s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "80%", top: "85px", width: "14px", height: "44px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.8s" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0", filter: "drop-shadow(0 0 6px var(--c1))" })} aria-hidden="true">
                      <path className="redraw" d="M11 112 L50 98 L84 107 L123 73 L162 81 L202 48 L263 25" fill="none" stroke="var(--c1)" strokeWidth="2.2" pathLength="1" />
                    </svg>
                    <span className="numf" style={S({ position: "absolute", left: "6%", top: "12%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c2)", animationDelay: "0.0s" })}>
Σ
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "22%", top: "19%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c1)", animationDelay: "0.8s" })}>
%
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "38%", top: "14%", fontFamily: "TD, serif", fontSize: "28px", color: "var(--c2)", animationDelay: "1.6s" })}>
∫
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "54%", top: "19%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c1)", animationDelay: "2.4s" })}>
σ
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "70%", top: "13%", fontFamily: "TD, serif", fontSize: "22px", color: "var(--c2)", animationDelay: "3.2s" })}>
μ
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "86%", top: "8%", fontFamily: "TD, serif", fontSize: "22px", color: "var(--c1)", animationDelay: "4.0s" })}>
∞
                    </span>
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
ملتقى العلوم الاكتوارية 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
قياس المخاطر
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الرياضيات المالية · شريك
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
عاجي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp12 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#7FD0D4", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#072A2F", background: "radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <div style={S({ position: "absolute", left: "0", right: "0", top: "0", height: "140px", backgroundImage: "linear-gradient(color-mix(in srgb, var(--c1) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--c1) 8%, transparent) 1px, transparent 1px)", backgroundSize: "23px 23px", WebkitMaskImage: "linear-gradient(180deg,#000,transparent)", maskImage: "linear-gradient(180deg,#000,transparent)" })} />
                    <span className="grow" style={S({ position: "absolute", left: "8%", top: "81px", width: "14px", height: "48px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.2s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "20%", top: "80px", width: "14px", height: "49px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.3s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "32%", top: "107px", width: "14px", height: "22px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.4s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "44%", top: "102px", width: "14px", height: "27px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.5s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "56%", top: "67px", width: "14px", height: "62px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.6s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "68%", top: "100px", width: "14px", height: "29px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.7s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "80%", top: "79px", width: "14px", height: "50px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.8s" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0", filter: "drop-shadow(0 0 6px var(--c1))" })} aria-hidden="true">
                      <path className="redraw" d="M11 112 L50 98 L84 107 L123 73 L162 81 L202 48 L263 25" fill="none" stroke="var(--c1)" strokeWidth="2.2" pathLength="1" />
                    </svg>
                    <span className="numf" style={S({ position: "absolute", left: "6%", top: "10%", fontFamily: "TD, serif", fontSize: "22px", color: "var(--c2)", animationDelay: "0.0s" })}>
Σ
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "22%", top: "19%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c2)", animationDelay: "0.8s" })}>
%
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "38%", top: "8%", fontFamily: "TD, serif", fontSize: "28px", color: "var(--c1)", animationDelay: "1.6s" })}>
∫
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "54%", top: "17%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c2)", animationDelay: "2.4s" })}>
σ
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "70%", top: "4%", fontFamily: "TD, serif", fontSize: "22px", color: "var(--c2)", animationDelay: "3.2s" })}>
μ
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "86%", top: "8%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c1)", animationDelay: "4.0s" })}>
∞
                    </span>
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
ملتقى العلوم الاكتوارية 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
قياس المخاطر
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الرياضيات المالية · VIP
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
بترولي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp13 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#7FD0D4", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#072A2F", background: "radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                      <ellipse className="draw" cx="140" cy="77" rx="162" ry="51" fill="none" stroke="var(--c1)" strokeOpacity="0.55" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.00s" })} />
                      <ellipse className="draw" cx="140" cy="77" rx="148" ry="42" fill="none" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.15s" })} />
                      <ellipse className="draw" cx="140" cy="77" rx="134" ry="34" fill="none" stroke="var(--c1)" strokeOpacity="0.35" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.30s" })} />
                      <ellipse className="draw" cx="140" cy="77" rx="120" ry="25" fill="none" stroke="var(--c1)" strokeOpacity="0.25" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.45s" })} />
                      <line x1="140" y1="100" x2="140" y2="130" stroke="var(--c2)" strokeWidth="3" strokeDasharray="3 3" />
                    </svg>
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 295 77 A 155 46 0 1 1 -15 77 A 155 46 0 1 1 295 77')", offsetRotate: "auto", animationDuration: "3.2s", animationDelay: "0.0s" })} />
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 281 77 A 141 38 0 1 1 -1 77 A 141 38 0 1 1 281 77')", offsetRotate: "auto", animationDuration: "3.9s", animationDelay: "-1.1s" })} />
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 267 77 A 127 29 0 1 1 13 77 A 127 29 0 1 1 267 77')", offsetRotate: "auto", animationDuration: "4.6s", animationDelay: "-2.2s" })} />
                    <div style={S({ position: "absolute", left: "14px", top: "58px", filter: "drop-shadow(0 8px 18px rgba(0,0,0,.25))" })}>
                      <svg width="56" height="64" viewBox="-50 -62 100 114" aria-hidden="true">
                        <defs>
                          <linearGradient id="bz56" x1="0" y1="-1" x2="0" y2="1">
                            <stop offset="0" stopColor="var(--c2)" />
                            <stop offset="1" stopColor="var(--c1)" />
                          </linearGradient>
                          <radialGradient id="fc56" cx=".4" cy=".35" r=".8">
                            <stop offset="0" stopColor="#FFFFFF" stopOpacity=".22" />
                            <stop offset="1" stopColor="#FFFFFF" stopOpacity=".02" />
                          </radialGradient>
                        </defs>
                        <rect x="-7" y="-60" width="14" height="8" rx="2.5" fill="url(#bz56)" />
                        <rect x="-3" y="-53" width="6" height="6" fill="var(--c1)" />
                        <rect x="30" y="-46" width="9" height="6" rx="2" fill="var(--c1)" transform="rotate(40 34 -43)" />
                        <circle r="46" fill="none" stroke="url(#bz56)" strokeWidth="5" />
                        <circle r="42.5" fill="url(#fc56)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(0)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(6)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(12)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(18)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(24)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(30)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(36)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(42)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(48)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(54)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(60)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(66)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(72)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(78)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(84)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(90)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(96)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(102)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(108)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(114)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(120)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(126)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(132)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(138)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(144)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(150)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(156)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(162)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(168)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(174)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(180)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(186)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(192)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(198)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(204)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(210)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(216)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(222)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(228)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(234)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(240)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(246)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(252)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(258)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(264)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(270)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(276)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(282)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(288)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(294)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(300)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(306)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(312)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(318)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(324)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(330)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(336)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(342)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(348)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(354)" />
                        <circle className="sweep" r="30" fill="none" stroke="var(--c2)" strokeOpacity=".55" strokeWidth="5" pathLength="100" transform="rotate(-90)" />
                        <circle cx="0" cy="16" r="8" fill="none" stroke="var(--c1)" strokeOpacity=".6" strokeWidth="1" />
                        <line className="spin" x1="0" y1="16" x2="0" y2="10" stroke="var(--c1)" strokeWidth="1.4" style={S({ transformOrigin: "0px 16px", animationDuration: "8s" })} />
                        <g className="spin" style={S({ transformOrigin: "0px 0px", animationDuration: "4s" })}>
                          <line x1="0" y1="8" x2="0" y2="-38" stroke="var(--c2)" strokeWidth="2" strokeLinecap="round" />
                          <circle cy="8" r="2.6" fill="var(--c2)" />
                        </g>
                        <circle r="3.4" fill="var(--c2)" />
                        <circle r="1.3" fill="#0B1F24" />
                      </svg>
                    </div>
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
دوري نادي العلوم الرياضي
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
التحدي
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الرياضي · ضيف
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
بترولي
                  </span>
                </div>
              </a>
              </>
            ) : null}
            {v.tp14 ? (
              <>
              <a href={`${v.base}/templates/new`} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
                <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", "--c1": "#9FDCE0", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#050F17", background: "radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <svg width="280" height="520" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                      <ellipse className="draw" cx="140" cy="77" rx="162" ry="51" fill="none" stroke="var(--c1)" strokeOpacity="0.55" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.00s" })} />
                      <ellipse className="draw" cx="140" cy="77" rx="148" ry="42" fill="none" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.15s" })} />
                      <ellipse className="draw" cx="140" cy="77" rx="134" ry="34" fill="none" stroke="var(--c1)" strokeOpacity="0.35" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.30s" })} />
                      <ellipse className="draw" cx="140" cy="77" rx="120" ry="25" fill="none" stroke="var(--c1)" strokeOpacity="0.25" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.45s" })} />
                      <line x1="140" y1="100" x2="140" y2="130" stroke="var(--c2)" strokeWidth="3" strokeDasharray="3 3" />
                    </svg>
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 295 77 A 155 46 0 1 1 -15 77 A 155 46 0 1 1 295 77')", offsetRotate: "auto", animationDuration: "3.2s", animationDelay: "0.0s" })} />
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 281 77 A 141 38 0 1 1 -1 77 A 141 38 0 1 1 281 77')", offsetRotate: "auto", animationDuration: "3.9s", animationDelay: "-1.1s" })} />
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 267 77 A 127 29 0 1 1 13 77 A 127 29 0 1 1 267 77')", offsetRotate: "auto", animationDuration: "4.6s", animationDelay: "-2.2s" })} />
                    <div style={S({ position: "absolute", left: "14px", top: "58px", filter: "drop-shadow(0 8px 18px rgba(0,0,0,.25))" })}>
                      <svg width="56" height="64" viewBox="-50 -62 100 114" aria-hidden="true">
                        <defs>
                          <linearGradient id="bz56" x1="0" y1="-1" x2="0" y2="1">
                            <stop offset="0" stopColor="var(--c2)" />
                            <stop offset="1" stopColor="var(--c1)" />
                          </linearGradient>
                          <radialGradient id="fc56" cx=".4" cy=".35" r=".8">
                            <stop offset="0" stopColor="#FFFFFF" stopOpacity=".22" />
                            <stop offset="1" stopColor="#FFFFFF" stopOpacity=".02" />
                          </radialGradient>
                        </defs>
                        <rect x="-7" y="-60" width="14" height="8" rx="2.5" fill="url(#bz56)" />
                        <rect x="-3" y="-53" width="6" height="6" fill="var(--c1)" />
                        <rect x="30" y="-46" width="9" height="6" rx="2" fill="var(--c1)" transform="rotate(40 34 -43)" />
                        <circle r="46" fill="none" stroke="url(#bz56)" strokeWidth="5" />
                        <circle r="42.5" fill="url(#fc56)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(0)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(6)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(12)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(18)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(24)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(30)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(36)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(42)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(48)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(54)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(60)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(66)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(72)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(78)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(84)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(90)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(96)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(102)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(108)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(114)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(120)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(126)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(132)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(138)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(144)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(150)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(156)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(162)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(168)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(174)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(180)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(186)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(192)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(198)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(204)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(210)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(216)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(222)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(228)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(234)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(240)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(246)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(252)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(258)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(264)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(270)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(276)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(282)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(288)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(294)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(300)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(306)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(312)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(318)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(324)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(330)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(336)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(342)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(348)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(354)" />
                        <circle className="sweep" r="30" fill="none" stroke="var(--c2)" strokeOpacity=".55" strokeWidth="5" pathLength="100" transform="rotate(-90)" />
                        <circle cx="0" cy="16" r="8" fill="none" stroke="var(--c1)" strokeOpacity=".6" strokeWidth="1" />
                        <line className="spin" x1="0" y1="16" x2="0" y2="10" stroke="var(--c1)" strokeWidth="1.4" style={S({ transformOrigin: "0px 16px", animationDuration: "8s" })} />
                        <g className="spin" style={S({ transformOrigin: "0px 0px", animationDuration: "4s" })}>
                          <line x1="0" y1="8" x2="0" y2="-38" stroke="var(--c2)" strokeWidth="2" strokeLinecap="round" />
                          <circle cy="8" r="2.6" fill="var(--c2)" />
                        </g>
                        <circle r="3.4" fill="var(--c2)" />
                        <circle r="1.3" fill="#0B1F24" />
                      </svg>
                    </div>
                  </div>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "11px", opacity: ".85" })}>
دوري نادي العلوم الرياضي
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
التحدي
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
                  <b style={S({ fontSize: "13px" })}>
الرياضي · عضو
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
ليلي
                  </span>
                </div>
              </a>
              </>
            ) : null}
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
