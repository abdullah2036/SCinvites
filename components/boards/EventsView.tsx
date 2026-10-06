/* eslint-disable */
// Generated from design-reference/Events.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function EventsView({ v }: { v: any }) {
  return (
    <>
    <div style={S({ minHeight: "1200px", position: "relative", overflow: "hidden", fontFamily: "TS, sans-serif", color: "#18292C", background: "radial-gradient(55% 45% at 88% 6%, #BFE3E3 0%, rgba(191,227,227,0) 70%), radial-gradient(45% 40% at 6% 96%, #F2E1B4 0%, rgba(242,225,180,0) 70%), radial-gradient(60% 55% at 45% 55%, #DCEFEE 0%, #EAF3F0 55%, #F4F2EC 100%)" })}>
      <span className="orb" aria-hidden="true" style={S({ position: "absolute", right: "30%", top: "-120px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, rgba(111,183,184,.55), rgba(19,112,123,.15) 60%, rgba(19,112,123,0) 72%)", filter: "blur(6px)", pointerEvents: "none" })} />
      <span className="orb" aria-hidden="true" style={S({ position: "absolute", left: "4%", bottom: "120px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, rgba(231,200,115,.45), rgba(201,154,46,.1) 60%, rgba(201,154,46,0) 72%)", filter: "blur(8px)", animationDelay: "-6s", pointerEvents: "none" })} />
      <div className="pg" style={S({ position: "relative", display: "flex", flexWrap: "wrap", gap: "24px", padding: "20px", boxSizing: "border-box", minHeight: "1200px" })}>
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
            <a href={`${v.base}/events`} className="nav" aria-current="page" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", background: "rgba(19,112,123,.12)", color: "#0B3B41", fontWeight: "700" })}>
              <span style={S({ position: "absolute", left: "-16px", top: "9px", width: "4px", height: "26px", borderRadius: "4px", background: "#13707B" })} />
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
            <a href={`${v.base}/templates`} className="nav" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", color: "#2C4245" })}>
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
          <a href={`${v.base}/events`} aria-label="الفعاليات" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#0B3B41", fontWeight: "700" })}>
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
الفعاليات
              </h1>
              <p style={S({ margin: "0", fontSize: "16px", color: "#3E5456" })}>
كل فعالية تحمل هوية مسارها، والمنصة تبقى ثابتة
              </p>
            </div>
            <a href="#" style={S({ height: "48px", padding: "0 20px", display: "inline-flex", alignItems: "center", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", textDecoration: "none", fontWeight: "700" })}>
فعالية جديدة
            </a>
          </header>
          <div style={S({ display: "flex", gap: "8px", flexWrap: "wrap" })}>
            {(v.filters ?? []).map((c: any, cIndex: number) => (
              <Fragment key={cIndex}>
              <button type="button" className="chip" onClick={c.pick} aria-pressed={c.on} style={S({ height: "38px", padding: "0 16px", borderRadius: "999px", border: `1px solid ${c.border}`, background: c.bg, color: c.text, fontFamily: "TS, sans-serif", fontSize: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "8px" })}>
                <span style={S({ width: "8px", height: "8px", borderRadius: "50%", background: c.dot })} />
{c.name}
              </button>
              </Fragment>
            ))}
          </div>
          <div className="g3" style={S({ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "20px" })}>
            {v.ev0 ? (
              <>
              <article className="lift glass" style={S({ borderRadius: "28px", padding: "10px", display: "flex", flexDirection: "column", gap: "12px" })}>
                <div style={S({ position: "relative", height: "200px", borderRadius: "20px", overflow: "hidden", color: "var(--tx)", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", "--c1": "#7FD0D4", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#072A2F", background: "radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <span className="ripple" style={S({ position: "absolute", left: "97px", top: "42px", width: "166px", height: "166px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "0.00s" })} />
                    <span className="ripple" style={S({ position: "absolute", left: "97px", top: "42px", width: "166px", height: "166px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "1.33s" })} />
                    <span className="ripple" style={S({ position: "absolute", left: "97px", top: "42px", width: "166px", height: "166px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "2.66s" })} />
                    <svg width="360" height="440" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                      <ellipse className="draw" cx="180" cy="126" rx="129" ry="48" transform="rotate(-24 180 126)" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" pathLength="1" />
                    </svg>
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 297.4 73.4 A 129 48 -24 1 1 62.6 177.9 A 129 48 -24 1 1 297.4 73.4')", offsetRotate: "0deg", animationDuration: "9s" })} />
                    <div className="popin" style={S({ position: "absolute", left: "104px", top: "50px", width: "151px", height: "151px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, #FFFFFF, #F4F1EA)", boxShadow: "0 0 0 6px rgba(255,255,255,.18), 0 18px 40px rgba(0,0,0,.28)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                      <img className="forms" src="/brand/logo-128.png" alt="" style={S({ width: "112px", height: "auto" })} />
                    </div>
                    <svg width="360" height="440" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
                      <path d="M 297.4 73.4 A 129 48 -24 0 1 62.6 177.9" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" />
                    </svg>
                    <span style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 297.4 73.4 A 129 48 -24 1 1 62.6 177.9 A 129 48 -24 1 1 297.4 73.4')", offsetRotate: "0deg", animation: "glide 9s linear infinite, front 9s steps(1,end) infinite" })} />
                    <span className="glint" style={S({ position: "absolute", left: "50%", top: "6px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.6s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "14%", top: "42px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.0s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "86%", top: "49px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.4s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "26%", top: "13px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.8s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "76%", top: "16px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "4.2s" })} />
                  </div>
                  <span style={S({ position: "relative", alignSelf: "flex-start", padding: "5px 11px", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 14%, transparent)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)", fontSize: "12px" })}>
قادم
                  </span>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "8px 10px", margin: "0 -16px -16px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "12px", opacity: ".85" })}>
لقاء أعضاء نادي العلوم
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "28px", lineHeight: "1.2" })}>
لقاء الأعضاء
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px 8px", gap: "10px" })}>
                  <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
                    <b style={S({ fontSize: "13px" })}>
النادي
                    </b>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
٢٠ أكتوبر · 12 دعوة
                    </span>
                  </div>
                  <a href={`${v.base}/create`} style={S({ height: "38px", padding: "0 14px", borderRadius: "999px", border: "1px solid #0B3B41", color: "#0B3B41", textDecoration: "none", fontSize: "13px", fontWeight: "700", display: "inline-flex", alignItems: "center" })}>
دعوة
                  </a>
                </div>
              </article>
              </>
            ) : null}
            {v.ev1 ? (
              <>
              <article className="lift glass" style={S({ borderRadius: "28px", padding: "10px", display: "flex", flexDirection: "column", gap: "12px" })}>
                <div style={S({ position: "relative", height: "200px", borderRadius: "20px", overflow: "hidden", color: "var(--tx)", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", "--c1": "#9FDCE0", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#050F17", background: "radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <span className="tw" style={S({ position: "absolute", left: "7.6%", top: "13.7%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "69.6%", top: "27.6%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "85.7%", top: "24.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "3.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "7.1%", top: "10.0%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "24.5%", top: "11.4%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "66.2%", top: "2.2%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "71.5%", top: "20.5%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "48.6%", top: "30.7%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "56.0%", top: "15.7%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "5.0%", top: "35.3%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "14.7%", top: "28.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "66.2%", top: "25.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "91.7%", top: "12.8%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "59.1%", top: "23.3%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "50.9%", top: "36.5%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "4.7%", top: "29.4%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "22.4%", top: "20.2%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.6s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "35.8%", top: "31.7%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "16.9%", top: "32.9%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "87.8%", top: "17.9%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "62.7%", top: "32.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "68.2%", top: "2.9%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "40.5%", top: "18.8%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "59.8%", top: "26.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "4.9%", top: "36.4%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "54.3%", top: "16.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "63.7%", top: "13.1%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "56.2%", top: "8.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.8s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "67.8%", top: "39.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "43.1%", top: "31.3%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "84.9%", top: "28.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "27.4%", top: "19.8%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "3.6%", top: "9.8%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "85.0%", top: "23.8%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "19.5%", top: "11.3%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "75.9%", top: "28.1%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "52.5%", top: "15.0%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.1s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "6.6%", top: "24.6%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.2s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "34.2%", top: "3.5%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.7s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "96.2%", top: "6.9%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.4s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "24.8%", top: "18.7%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "44.8%", top: "36.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.0s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "66.6%", top: "29.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "94.2%", top: "19.9%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "91.6%", top: "10.8%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.3s" })} />
                    <span className="tw" style={S({ position: "absolute", left: "6.7%", top: "18.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.6s" })} />
                    <span className="shoot" style={S({ position: "absolute", left: "78%", top: "4%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "1.5s" })} />
                    <span className="shoot" style={S({ position: "absolute", left: "92%", top: "14%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "5s" })} />
                    <svg width="360" height="440" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                      <ellipse className="draw" cx="180" cy="65" rx="223" ry="21" transform="rotate(-12 180 65)" fill="none" stroke="var(--c1)" strokeOpacity=".7" strokeWidth="1.4" pathLength="1" />
                      <ellipse cx="180" cy="65" rx="156" ry="13" transform="rotate(-12 180 65)" fill="none" stroke="var(--c1)" strokeOpacity=".25" strokeWidth="1" strokeDasharray="2 6" />
                    </svg>
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "14px", height: "14px", margin: "-7px 0 0 -7px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, var(--tx), var(--c2))", boxShadow: "0 0 18px var(--c2)", offsetPath: "path('M 398.3 18.9 A 223 21 -12 1 1 -38.3 111.7 A 223 21 -12 1 1 398.3 18.9')", offsetRotate: "0deg" })} />
                  </div>
                  <span style={S({ position: "relative", alignSelf: "flex-start", padding: "5px 11px", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 14%, transparent)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)", fontSize: "12px" })}>
فعّال
                  </span>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "8px 10px", margin: "0 -16px -16px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "12px", opacity: ".85" })}>
أسبوع الفلك والفضاء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "28px", lineHeight: "1.2" })}>
ثورة الصواريخ
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px 8px", gap: "10px" })}>
                  <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
                    <b style={S({ fontSize: "13px" })}>
الفلك والفضاء
                    </b>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
١٢–١٦ أكتوبر · 24 دعوة
                    </span>
                  </div>
                  <a href={`${v.base}/create`} style={S({ height: "38px", padding: "0 14px", borderRadius: "999px", border: "1px solid #0B3B41", color: "#0B3B41", textDecoration: "none", fontSize: "13px", fontWeight: "700", display: "inline-flex", alignItems: "center" })}>
دعوة
                  </a>
                </div>
              </article>
              </>
            ) : null}
            {v.ev2 ? (
              <>
              <article className="lift glass" style={S({ borderRadius: "28px", padding: "10px", display: "flex", flexDirection: "column", gap: "12px" })}>
                <div style={S({ position: "relative", height: "200px", borderRadius: "20px", overflow: "hidden", color: "var(--tx)", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", "--c1": "#7FD0D4", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#072A2F", background: "radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <div style={S({ position: "absolute", left: "25px", top: "58px" })}>
                      <svg width="310" height="95" viewBox="0 0 340 104" aria-hidden="true" style={S({ opacity: "0.5" })}>
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
                    <div style={S({ position: "absolute", left: "52px", top: "79px", display: "flex", gap: "6px", direction: "ltr" })}>
                      <span className="flyin" style={S({ "--fx": "-120px", "--fy": "-90px", "--fr": "-30deg", animationDelay: "0.30s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "0.0s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "47px", height: "52px", padding: "4px 4px", boxSizing: "border-box", borderRadius: "7px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "7px", fontWeight: "700", opacity: ".9" })}>
                              <span>
16
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "6px" })}>
32.06
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "23px", textAlign: "center" })}>
S
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "6px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كبريت
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "-40px", "--fy": "-140px", "--fr": "20deg", animationDelay: "0.48s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "0.4s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "47px", height: "52px", padding: "4px 4px", boxSizing: "border-box", borderRadius: "7px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "7px", fontWeight: "700", opacity: ".9" })}>
                              <span>
6
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "6px" })}>
12.011
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "23px", textAlign: "center" })}>
C
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "6px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كربون
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "0px", "--fy": "-160px", "--fr": "-12deg", animationDelay: "0.66s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "0.8s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "47px", height: "52px", padding: "4px 4px", boxSizing: "border-box", borderRadius: "7px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "7px", fontWeight: "700", opacity: ".9" })}>
                              <span>
92
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "6px" })}>
238.03
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "23px", textAlign: "center" })}>
U
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "6px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "60px", "--fy": "-130px", "--fr": "28deg", animationDelay: "0.84s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "1.2s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "47px", height: "52px", padding: "4px 4px", boxSizing: "border-box", borderRadius: "7px", background: "linear-gradient(160deg,#F7E3A6,#C99A2E)", border: "1.5px solid var(--c2)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "#0B1F24", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "7px", fontWeight: "700", opacity: ".9" })}>
                              <span>
✦
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "6px" })} />
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "23px", textAlign: "center" })}>
Q
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "6px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
نادي العلوم
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="flyin" style={S({ "--fx": "130px", "--fy": "-100px", "--fr": "-24deg", animationDelay: "1.02s" })}>
                        <span className="bob" style={S({ display: "block", animationDelay: "1.6s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "47px", height: "52px", padding: "4px 4px", boxSizing: "border-box", borderRadius: "7px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "7px", fontWeight: "700", opacity: ".9" })}>
                              <span>
92
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "6px" })}>
238.03
                              </span>
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "23px", textAlign: "center" })}>
U
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "6px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <span style={S({ position: "absolute", left: "22px", top: "43px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-13px", top: "-13px", "--r": "14px", animationDuration: "11.9s", animationDelay: "-3.3s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
1
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "11px" })}>
H
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "338px", top: "45px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-13px", top: "-13px", "--r": "10px", animationDuration: "9.2s", animationDelay: "-3.2s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
8
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "11px" })}>
O
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "36px", top: "102px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-13px", top: "-13px", "--r": "10px", animationDuration: "10.6s", animationDelay: "-6.8s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
7
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "11px" })}>
N
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "324px", top: "105px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-13px", top: "-13px", "--r": "10px", animationDuration: "13.4s", animationDelay: "-2.6s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
11
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "11px" })}>
Na
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "180px", top: "29px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-13px", top: "-13px", "--r": "10px", animationDuration: "11.0s", animationDelay: "-4.9s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
26
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "11px" })}>
Fe
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={S({ position: "absolute", left: "108px", top: "26px", width: "0", height: "0" })}>
                      <span className="orbitE" style={S({ position: "absolute", left: "-13px", top: "-13px", "--r": "18px", animationDuration: "11.1s", animationDelay: "-7.0s" })}>
                        <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                          <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
79
                          </span>
                          <b style={S({ fontFamily: "TS, sans-serif", fontSize: "11px" })}>
Au
                          </b>
                        </span>
                      </span>
                    </span>
                    <svg width="360" height="440" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
                      <ellipse className="draw" cx="180" cy="105" rx="159" ry="44" fill="none" stroke="var(--c2)" strokeOpacity=".5" strokeWidth="1.2" pathLength="1" style={S({ animationDelay: "1.4s" })} />
                    </svg>
                    <span className="glint" style={S({ position: "absolute", left: "33%", top: "45px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "1.50s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "46%", top: "87px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "1.85s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "68%", top: "38px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.20s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "26%", top: "54px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.55s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "46%", top: "97px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.90s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "28%", top: "39px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.25s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "85%", top: "98px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.60s" })} />
                    <span className="glint" style={S({ position: "absolute", left: "73%", top: "38px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.95s" })} />
                  </div>
                  <span style={S({ position: "relative", alignSelf: "flex-start", padding: "5px 11px", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 14%, transparent)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)", fontSize: "12px" })}>
قادم
                  </span>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "8px 10px", margin: "0 -16px -16px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "12px", opacity: ".85" })}>
يوم الكيمياء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "28px", lineHeight: "1.2" })}>
تفاعل
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px 8px", gap: "10px" })}>
                  <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
                    <b style={S({ fontSize: "13px" })}>
الكيمياء
                    </b>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
٣ نوفمبر · 9 دعوة
                    </span>
                  </div>
                  <a href={`${v.base}/create`} style={S({ height: "38px", padding: "0 14px", borderRadius: "999px", border: "1px solid #0B3B41", color: "#0B3B41", textDecoration: "none", fontSize: "13px", fontWeight: "700", display: "inline-flex", alignItems: "center" })}>
دعوة
                  </a>
                </div>
              </article>
              </>
            ) : null}
            {v.ev3 ? (
              <>
              <article className="lift glass" style={S({ borderRadius: "28px", padding: "10px", display: "flex", flexDirection: "column", gap: "12px" })}>
                <div style={S({ position: "relative", height: "200px", borderRadius: "20px", overflow: "hidden", color: "var(--tx)", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", "--c1": "#9FDCE0", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#050F17", background: "radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <svg width="360" height="440" style={S({ position: "absolute", left: "0", top: "0", filter: "drop-shadow(0 0 6px var(--c1))" })} aria-hidden="true">
                      <path className="wave" d="M-20 36 L-20 26.2 L-15 28.1 L-10 30.4 L-5 32.9 L0 35.6 L5 38.3 L10 40.9 L15 43.2 L20 45.1 L25 46.5 L30 47.4 L35 47.6 L40 47.3 L45 46.3 L50 44.8 L55 42.8 L60 40.5 L65 37.9 L70 35.2 L75 32.5 L80 29.9 L85 27.7 L90 25.9 L95 24.6 L100 23.8 L105 23.7 L110 24.1 L115 25.2 L120 26.8 L125 28.9 L130 31.3 L135 33.9 L140 36.6 L145 39.3 L150 41.8 L155 43.9 L160 45.7 L165 46.9 L170 47.5 L175 47.6 L180 47.0 L185 45.8 L190 44.2 L195 42.0 L200 39.6 L205 36.9 L210 34.2 L215 31.5 L220 29.1 L225 27.0 L230 25.4 L235 24.2 L240 23.7 L245 23.8 L250 24.4 L255 25.7 L260 27.5 L265 29.7 L270 32.2 L275 34.8 L280 37.6 L285 40.2 L290 42.6 L295 44.6 L300 46.2 L305 47.2 L310 47.6 L315 47.4 L320 46.7 L325 45.3 L330 43.4 L335 41.2 L340 38.6 L345 36.0 L350 33.2 L355 30.7 L360 28.3 L365 26.4 L370 24.9 L375 24.0 L380 23.6 L385 23.9" fill="none" stroke="var(--c1)" strokeOpacity="0.85" strokeWidth="1.6" style={S({ animationDuration: "2.5s" })} />
                      <path className="wave" d="M-20 65 L-20 54.2 L-15 56.7 L-10 59.5 L-5 62.4 L0 65.3 L5 68.3 L10 71.2 L15 74.0 L20 76.5 L25 78.7 L30 80.5 L35 81.9 L40 82.8 L45 83.3 L50 83.3 L55 82.7 L60 81.7 L65 80.2 L70 78.4 L75 76.1 L80 73.6 L85 70.8 L90 67.9 L95 64.9 L100 61.9 L105 59.0 L110 56.3 L115 53.9 L120 51.7 L125 50.0 L130 48.6 L135 47.7 L140 47.4 L145 47.5 L150 48.1 L155 49.2 L160 50.7 L165 52.6 L170 54.9 L175 57.5 L180 60.3 L185 63.2 L190 66.2 L195 69.2 L200 72.1 L205 74.8 L210 77.2 L215 79.3 L220 81.0 L225 82.2 L230 83.0 L235 83.3 L240 83.1 L245 82.5 L250 81.3 L255 79.7 L260 77.7 L265 75.4 L270 72.8 L275 69.9 L280 67.0 L285 64.0 L290 61.0 L295 58.2 L300 55.5 L305 53.2 L310 51.1 L315 49.5 L320 48.3 L325 47.6 L330 47.3 L335 47.6 L340 48.4 L345 49.6 L350 51.2 L355 53.3 L360 55.7 L365 58.3 L370 61.2 L375 64.1 L380 67.1 L385 70.1" fill="none" stroke="var(--c2)" strokeOpacity="0.6" strokeWidth="1.6" style={S({ animationDuration: "3.5s" })} />
                      <path className="wave" d="M-20 95 L-20 86.5 L-15 87.8 L-10 89.8 L-5 92.3 L0 95.0 L5 97.8 L10 100.3 L15 102.3 L20 103.6 L25 104.0 L30 103.6 L35 102.4 L40 100.4 L45 97.9 L50 95.2 L55 92.4 L60 89.9 L65 87.9 L70 86.5 L75 86.0 L80 86.4 L85 87.6 L90 89.5 L95 92.0 L100 94.7 L105 97.5 L110 100.1 L115 102.1 L120 103.5 L125 104.0 L130 103.7 L135 102.6 L140 100.7 L145 98.2 L150 95.5 L155 92.7 L160 90.1 L165 88.1 L170 86.7 L175 86.1 L180 86.3 L185 87.4 L190 89.3 L195 91.7 L200 94.4 L205 97.2 L210 99.8 L215 101.9 L220 103.4 L225 104.0 L230 103.8 L235 102.7 L240 100.9 L245 98.5 L250 95.8 L255 93.0 L260 90.4 L265 88.3 L270 86.8 L275 86.1 L280 86.3 L285 87.3 L290 89.1 L295 91.4 L300 94.1 L305 96.9 L310 99.6 L315 101.7 L320 103.3 L325 104.0 L330 103.9 L335 102.9 L340 101.1 L345 98.8 L350 96.1 L355 93.3 L360 90.7 L365 88.5 L370 86.9 L375 86.1 L380 86.2 L385 87.1" fill="none" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="1.6" style={S({ animationDuration: "4.5s" })} />
                    </svg>
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "14px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "0.1s", animationDuration: "3.3s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "24px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "0.1s", animationDuration: "4.0s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "50px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "2.1s", animationDuration: "3.6s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "24px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "1.2s", animationDuration: "2.7s" })} />
                    <span className="zip" style={S({ position: "absolute", right: "-10px", top: "24px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "0.4s", animationDuration: "3.4s" })} />
                  </div>
                  <span style={S({ position: "relative", alignSelf: "flex-start", padding: "5px 11px", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 14%, transparent)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)", fontSize: "12px" })}>
قادم
                  </span>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "8px 10px", margin: "0 -16px -16px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "12px", opacity: ".85" })}>
ملتقى الفيزياء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "28px", lineHeight: "1.2" })}>
موجة
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px 8px", gap: "10px" })}>
                  <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
                    <b style={S({ fontSize: "13px" })}>
الفيزياء
                    </b>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
١٧ نوفمبر · 6 دعوة
                    </span>
                  </div>
                  <a href={`${v.base}/create`} style={S({ height: "38px", padding: "0 14px", borderRadius: "999px", border: "1px solid #0B3B41", color: "#0B3B41", textDecoration: "none", fontSize: "13px", fontWeight: "700", display: "inline-flex", alignItems: "center" })}>
دعوة
                  </a>
                </div>
              </article>
              </>
            ) : null}
            {v.ev4 ? (
              <>
              <article className="lift glass" style={S({ borderRadius: "28px", padding: "10px", display: "flex", flexDirection: "column", gap: "12px" })}>
                <div style={S({ position: "relative", height: "200px", borderRadius: "20px", overflow: "hidden", color: "var(--tx)", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", "--c1": "#7FD0D4", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#072A2F", background: "radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <span style={S({ position: "absolute", left: "6px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "2px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "0.00s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "2px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.30s" })} />
                    <span style={S({ position: "absolute", left: "22px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "18px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.18s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "18px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.48s" })} />
                    <span style={S({ position: "absolute", left: "38px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "34px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.36s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "34px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.66s" })} />
                    <span style={S({ position: "absolute", left: "54px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "50px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.54s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "50px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.84s" })} />
                    <span style={S({ position: "absolute", left: "70px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "66px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.72s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "66px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.02s" })} />
                    <span style={S({ position: "absolute", left: "86px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "82px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.90s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "82px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.20s" })} />
                    <span style={S({ position: "absolute", left: "102px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "98px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.08s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "98px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.38s" })} />
                    <span style={S({ position: "absolute", left: "118px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "114px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.26s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "114px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.56s" })} />
                    <span style={S({ position: "absolute", left: "134px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "130px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.44s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "130px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.74s" })} />
                    <span style={S({ position: "absolute", left: "150px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "146px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.62s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "146px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.92s" })} />
                    <span style={S({ position: "absolute", left: "166px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "162px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.80s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "162px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.10s" })} />
                    <span style={S({ position: "absolute", left: "182px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "178px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.98s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "178px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.28s" })} />
                    <span style={S({ position: "absolute", left: "198px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "194px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.16s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "194px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.46s" })} />
                    <span style={S({ position: "absolute", left: "214px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "210px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.34s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "210px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.64s" })} />
                    <span style={S({ position: "absolute", left: "230px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "226px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.52s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "226px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.82s" })} />
                    <span style={S({ position: "absolute", left: "246px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "242px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.70s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "242px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.00s" })} />
                    <span style={S({ position: "absolute", left: "262px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "258px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.88s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "258px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.18s" })} />
                    <span style={S({ position: "absolute", left: "278px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "274px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.06s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "274px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.36s" })} />
                    <span style={S({ position: "absolute", left: "294px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "290px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.24s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "290px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.54s" })} />
                    <span style={S({ position: "absolute", left: "310px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "306px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.42s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "306px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.72s" })} />
                    <span style={S({ position: "absolute", left: "326px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "322px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.60s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "322px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.90s" })} />
                    <span style={S({ position: "absolute", left: "342px", top: "22px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
                    <span className="hx" style={S({ position: "absolute", left: "338px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.78s" })} />
                    <span className="hx" style={S({ position: "absolute", left: "338px", top: "34px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-5.08s" })} />
                    <div className="cell" style={S({ position: "absolute", left: "8%", top: "65px", animationDelay: "0.0s" })}>
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
                    <div className="cell" style={S({ position: "absolute", left: "58%", top: "59px", animationDelay: "1.6s" })}>
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
                    <div className="cell" style={S({ position: "absolute", left: "34%", top: "86px", animationDelay: "3.2s" })}>
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
                    <div className="cell" style={S({ position: "absolute", left: "80%", top: "81px", animationDelay: "4.8s" })}>
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
                  <span style={S({ position: "relative", alignSelf: "flex-start", padding: "5px 11px", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 14%, transparent)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)", fontSize: "12px" })}>
مسودة
                  </span>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "8px 10px", margin: "0 -16px -16px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "12px", opacity: ".85" })}>
أسبوع الأحياء 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "28px", lineHeight: "1.2" })}>
شيفرة الحياة
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px 8px", gap: "10px" })}>
                  <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
                    <b style={S({ fontSize: "13px" })}>
الأحياء
                    </b>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
١ ديسمبر · 0 دعوة
                    </span>
                  </div>
                  <a href={`${v.base}/create`} style={S({ height: "38px", padding: "0 14px", borderRadius: "999px", border: "1px solid #0B3B41", color: "#0B3B41", textDecoration: "none", fontSize: "13px", fontWeight: "700", display: "inline-flex", alignItems: "center" })}>
دعوة
                  </a>
                </div>
              </article>
              </>
            ) : null}
            {v.ev5 ? (
              <>
              <article className="lift glass" style={S({ borderRadius: "28px", padding: "10px", display: "flex", flexDirection: "column", gap: "12px" })}>
                <div style={S({ position: "relative", height: "200px", borderRadius: "20px", overflow: "hidden", color: "var(--tx)", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", "--c1": "#9FDCE0", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#050F17", background: "radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <div style={S({ position: "absolute", left: "0", right: "0", top: "0", height: "119px", backgroundImage: "linear-gradient(color-mix(in srgb, var(--c1) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--c1) 8%, transparent) 1px, transparent 1px)", backgroundSize: "30px 30px", WebkitMaskImage: "linear-gradient(180deg,#000,transparent)", maskImage: "linear-gradient(180deg,#000,transparent)" })} />
                    <span className="grow" style={S({ position: "absolute", left: "8%", top: "76px", width: "18px", height: "33px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.2s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "20%", top: "66px", width: "18px", height: "44px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.3s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "32%", top: "72px", width: "18px", height: "37px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.4s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "44%", top: "74px", width: "18px", height: "36px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.5s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "56%", top: "62px", width: "18px", height: "47px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.6s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "68%", top: "83px", width: "18px", height: "26px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.7s" })} />
                    <span className="grow" style={S({ position: "absolute", left: "80%", top: "57px", width: "18px", height: "53px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.8s" })} />
                    <svg width="360" height="440" style={S({ position: "absolute", left: "0", top: "0", filter: "drop-shadow(0 0 6px var(--c1))" })} aria-hidden="true">
                      <path className="redraw" d="M14 95 L65 83 L108 90 L158 62 L209 69 L259 40 L338 21" fill="none" stroke="var(--c1)" strokeWidth="2.2" pathLength="1" />
                    </svg>
                    <span className="numf" style={S({ position: "absolute", left: "6%", top: "12%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c1)", animationDelay: "0.0s" })}>
Σ
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "22%", top: "16%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c1)", animationDelay: "0.8s" })}>
%
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "38%", top: "20%", fontFamily: "TD, serif", fontSize: "28px", color: "var(--c1)", animationDelay: "1.6s" })}>
∫
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "54%", top: "13%", fontFamily: "TD, serif", fontSize: "28px", color: "var(--c2)", animationDelay: "2.4s" })}>
σ
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "70%", top: "15%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c2)", animationDelay: "3.2s" })}>
μ
                    </span>
                    <span className="numf" style={S({ position: "absolute", left: "86%", top: "9%", fontFamily: "TD, serif", fontSize: "22px", color: "var(--c2)", animationDelay: "4.0s" })}>
∞
                    </span>
                  </div>
                  <span style={S({ position: "relative", alignSelf: "flex-start", padding: "5px 11px", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 14%, transparent)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)", fontSize: "12px" })}>
منتهي
                  </span>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "8px 10px", margin: "0 -16px -16px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "12px", opacity: ".85" })}>
ملتقى العلوم الاكتوارية 2026
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "28px", lineHeight: "1.2" })}>
قياس المخاطر
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px 8px", gap: "10px" })}>
                  <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
                    <b style={S({ fontSize: "13px" })}>
الرياضيات المالية
                    </b>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
٢٨ سبتمبر · 18 دعوة
                    </span>
                  </div>
                  <a href={`${v.base}/create`} style={S({ height: "38px", padding: "0 14px", borderRadius: "999px", border: "1px solid #0B3B41", color: "#0B3B41", textDecoration: "none", fontSize: "13px", fontWeight: "700", display: "inline-flex", alignItems: "center" })}>
دعوة
                  </a>
                </div>
              </article>
              </>
            ) : null}
            {v.ev6 ? (
              <>
              <article className="lift glass" style={S({ borderRadius: "28px", padding: "10px", display: "flex", flexDirection: "column", gap: "12px" })}>
                <div style={S({ position: "relative", height: "200px", borderRadius: "20px", overflow: "hidden", color: "var(--tx)", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", "--c1": "#13707B", "--c2": "#C99A2E", "--tx": "#0B3B41", "--ll": "0", "--sc": "#F4F1EA", background: "radial-gradient(120% 80% at 75% 0%, #FFFFFF 0%, #F4F1EA 45%, #DCEBE8 100%)" })}>
                  <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                    <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                    <svg width="360" height="440" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                      <ellipse className="draw" cx="180" cy="65" rx="209" ry="43" fill="none" stroke="var(--c1)" strokeOpacity="0.55" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.00s" })} />
                      <ellipse className="draw" cx="180" cy="65" rx="191" ry="36" fill="none" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.15s" })} />
                      <ellipse className="draw" cx="180" cy="65" rx="173" ry="29" fill="none" stroke="var(--c1)" strokeOpacity="0.35" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.30s" })} />
                      <ellipse className="draw" cx="180" cy="65" rx="155" ry="21" fill="none" stroke="var(--c1)" strokeOpacity="0.25" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.45s" })} />
                      <line x1="180" y1="84" x2="180" y2="110" stroke="var(--c2)" strokeWidth="3" strokeDasharray="3 3" />
                    </svg>
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 380 65 A 200 39 0 1 1 -20 65 A 200 39 0 1 1 380 65')", offsetRotate: "auto", animationDuration: "3.2s", animationDelay: "0.0s" })} />
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 362 65 A 182 32 0 1 1 -2 65 A 182 32 0 1 1 362 65')", offsetRotate: "auto", animationDuration: "3.9s", animationDelay: "-1.1s" })} />
                    <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 344 65 A 164 25 0 1 1 16 65 A 164 25 0 1 1 344 65')", offsetRotate: "auto", animationDuration: "4.6s", animationDelay: "-2.2s" })} />
                    <div style={S({ position: "absolute", left: "18px", top: "58px", filter: "drop-shadow(0 8px 18px rgba(0,0,0,.25))" })}>
                      <svg width="72" height="82" viewBox="-50 -62 100 114" aria-hidden="true">
                        <defs>
                          <linearGradient id="bz72" x1="0" y1="-1" x2="0" y2="1">
                            <stop offset="0" stopColor="var(--c2)" />
                            <stop offset="1" stopColor="var(--c1)" />
                          </linearGradient>
                          <radialGradient id="fc72" cx=".4" cy=".35" r=".8">
                            <stop offset="0" stopColor="#FFFFFF" stopOpacity=".22" />
                            <stop offset="1" stopColor="#FFFFFF" stopOpacity=".02" />
                          </radialGradient>
                        </defs>
                        <rect x="-7" y="-60" width="14" height="8" rx="2.5" fill="url(#bz72)" />
                        <rect x="-3" y="-53" width="6" height="6" fill="var(--c1)" />
                        <rect x="30" y="-46" width="9" height="6" rx="2" fill="var(--c1)" transform="rotate(40 34 -43)" />
                        <circle r="46" fill="none" stroke="url(#bz72)" strokeWidth="5" />
                        <circle r="42.5" fill="url(#fc72)" />
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
                  <span style={S({ position: "relative", alignSelf: "flex-start", padding: "5px 11px", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 14%, transparent)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)", fontSize: "12px" })}>
قادم
                  </span>
                  <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "8px 10px", margin: "0 -16px -16px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                    <span style={S({ fontSize: "12px", opacity: ".85" })}>
دوري نادي العلوم الرياضي
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "28px", lineHeight: "1.2" })}>
التحدي
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px 8px", gap: "10px" })}>
                  <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
                    <b style={S({ fontSize: "13px" })}>
الرياضي
                    </b>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
٢٦ أكتوبر · 10 دعوة
                    </span>
                  </div>
                  <a href={`${v.base}/create`} style={S({ height: "38px", padding: "0 14px", borderRadius: "999px", border: "1px solid #0B3B41", color: "#0B3B41", textDecoration: "none", fontSize: "13px", fontWeight: "700", display: "inline-flex", alignItems: "center" })}>
دعوة
                  </a>
                </div>
              </article>
              </>
            ) : null}
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
