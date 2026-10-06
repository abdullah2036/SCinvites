/* eslint-disable */
// Generated from design-reference/Dashboard.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function DashboardView({ v }: { v: any }) {
  return (
    <>
    <div style={S({ minHeight: "1500px", position: "relative", overflow: "hidden", fontFamily: "TS, sans-serif", color: "#18292C", background: "radial-gradient(55% 45% at 88% 6%, #BFE3E3 0%, rgba(191,227,227,0) 70%), radial-gradient(45% 40% at 6% 96%, #F2E1B4 0%, rgba(242,225,180,0) 70%), radial-gradient(60% 55% at 45% 55%, #DCEFEE 0%, #EAF3F0 55%, #F4F2EC 100%)" })}>
      <span className="orb" aria-hidden="true" style={S({ position: "absolute", right: "30%", top: "-120px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, rgba(111,183,184,.55), rgba(19,112,123,.15) 60%, rgba(19,112,123,0) 72%)", filter: "blur(6px)", pointerEvents: "none" })} />
      <span className="orb" aria-hidden="true" style={S({ position: "absolute", left: "4%", bottom: "120px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, rgba(231,200,115,.45), rgba(201,154,46,.1) 60%, rgba(201,154,46,0) 72%)", filter: "blur(8px)", animationDelay: "-6s", pointerEvents: "none" })} />
      <div className="pg" style={S({ position: "relative", display: "flex", flexWrap: "wrap", gap: "24px", padding: "20px", boxSizing: "border-box", minHeight: "1500px" })}>
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
            <a href={v.base} className="nav" aria-current="page" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", background: "rgba(19,112,123,.12)", color: "#0B3B41", fontWeight: "700" })}>
              <span style={S({ position: "absolute", left: "-16px", top: "9px", width: "4px", height: "26px", borderRadius: "4px", background: "#13707B" })} />
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
          <a href={v.base} aria-label="الرئيسية" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#0B3B41", fontWeight: "700" })}>
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
مرحبًا، جنى
              </h1>
              <p style={S({ margin: "0", fontSize: "16px", color: "#3E5456" })}>
دعوتك التالية تبدأ من هنا
              </p>
            </div>
            <label className="glass" style={S({ display: "flex", alignItems: "center", gap: "10px", height: "48px", width: "300px", maxWidth: "100%", padding: "0 18px", borderRadius: "999px", boxSizing: "border-box" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3E5456" strokeWidth="1.8" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input type="search" value={v.q} onChange={v.onQ} placeholder="ابحث" aria-label="بحث" style={S({ border: "0", outline: "0", background: "transparent", fontFamily: "TS, sans-serif", fontSize: "15px", width: "100%", color: "#18292C" })} />
            </label>
          </header>
          <div className="in" style={S({ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", fontSize: "14px", color: "#3E5456", marginTop: "-8px" })}>
            <span>
الأحد ٥ أكتوبر
            </span>
            <span style={S({ width: "4px", height: "4px", borderRadius: "50%", background: "#8FA3A5" })} />
            <a href={`${v.base}/approvals`} style={S({ textDecoration: "none", color: "#8E6C1F", fontWeight: "700" })}>
٣ طلبات تنتظر اعتمادك
            </a>
            <span style={S({ width: "4px", height: "4px", borderRadius: "50%", background: "#8FA3A5" })} />
            <span>
٥ مسارات · ٦ فعاليات هذا الفصل
            </span>
          </div>
          <div className="in glass stack" style={S({ borderRadius: "26px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" })}>
            <div style={S({ display: "flex", flexDirection: "column", gap: "2px", flex: "1 1 220px" })}>
              <span style={S({ fontSize: "12px", color: "#4F6567" })}>
الفعالية القادمة
              </span>
              <b style={S({ fontSize: "16px", color: "#0B3B41" })}>
ثورة الصواريخ · الأحد ١٢ أكتوبر
              </b>
            </div>
            <div style={S({ display: "flex", gap: "8px", direction: "rtl" })} role="timer" aria-label="الوقت المتبقي على الفعالية">
              <span style={S({ minWidth: "66px", padding: "10px 8px 8px", borderRadius: "18px", background: "rgba(255,255,255,.78)", border: "1px solid rgba(255,255,255,.95)", boxShadow: "inset 0 -3px 0 rgba(19,112,123,.08)", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" })}>
                <b style={S({ fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "26px", lineHeight: "1.1", color: "#0B3B41", fontVariantNumeric: "tabular-nums" })}>
{v.cdD}
                </b>
                <span style={S({ fontSize: "11px", color: "#4F6567" })}>
يوم
                </span>
              </span>
              <span style={S({ alignSelf: "center", color: "#8FA3A5", fontWeight: "700" })}>
:
              </span>
              <span style={S({ minWidth: "66px", padding: "10px 8px 8px", borderRadius: "18px", background: "rgba(255,255,255,.78)", border: "1px solid rgba(255,255,255,.95)", boxShadow: "inset 0 -3px 0 rgba(19,112,123,.08)", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" })}>
                <b style={S({ fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "26px", lineHeight: "1.1", color: "#0B3B41", fontVariantNumeric: "tabular-nums" })}>
{v.cdH}
                </b>
                <span style={S({ fontSize: "11px", color: "#4F6567" })}>
ساعة
                </span>
              </span>
              <span style={S({ alignSelf: "center", color: "#8FA3A5", fontWeight: "700" })}>
:
              </span>
              <span style={S({ minWidth: "66px", padding: "10px 8px 8px", borderRadius: "18px", background: "rgba(255,255,255,.78)", border: "1px solid rgba(255,255,255,.95)", boxShadow: "inset 0 -3px 0 rgba(19,112,123,.08)", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" })}>
                <b style={S({ fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "26px", lineHeight: "1.1", color: "#0B3B41", fontVariantNumeric: "tabular-nums" })}>
{v.cdM}
                </b>
                <span style={S({ fontSize: "11px", color: "#4F6567" })}>
دقيقة
                </span>
              </span>
              <span style={S({ alignSelf: "center", color: "#8FA3A5", fontWeight: "700" })}>
:
              </span>
              <span style={S({ minWidth: "66px", padding: "10px 8px 8px", borderRadius: "18px", background: "rgba(255,255,255,.78)", border: "1px solid rgba(255,255,255,.95)", boxShadow: "inset 0 -3px 0 rgba(19,112,123,.08)", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" })}>
                <b style={S({ fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "26px", lineHeight: "1.1", color: "#0B3B41", fontVariantNumeric: "tabular-nums" })}>
{v.cdS}
                </b>
                <span style={S({ fontSize: "11px", color: "#4F6567" })}>
ثانية
                </span>
              </span>
            </div>
            <div style={S({ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: "6px" })}>
              <span style={S({ fontSize: "12px", color: "#4F6567" })}>
تأكيد الحضور ١٢ من ٢٤
              </span>
              <span style={S({ height: "8px", borderRadius: "8px", background: "rgba(19,112,123,.12)", overflow: "hidden", display: "block" })}>
                <span className="growX" style={S({ display: "block", width: "50%", height: "100%", borderRadius: "8px", background: "linear-gradient(90deg,#13707B,#6FB7B8)" })} />
              </span>
            </div>
          </div>
          <div className="g3" style={S({ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "20px" })}>
            <article className="lift in glass s2" style={S({ gridColumn: "span 2", borderRadius: "30px", padding: "10px", boxSizing: "border-box", display: "flex", flexDirection: "column" })}>
              <div style={S({ position: "relative", height: "250px", borderRadius: "22px", overflow: "hidden", background: "#0C1630", color: "#FFFFFF" })}>
                <img src={v.artworkUrl} alt="" style={S({ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% 40%", opacity: ".9" })} />
                <div style={S({ position: "absolute", inset: "0", background: "linear-gradient(270deg, rgba(8,16,36,.9) 0%, rgba(8,16,36,.55) 45%, rgba(8,16,36,0) 100%)" })} />
                <div style={S({ position: "relative", height: "100%", boxSizing: "border-box", padding: "22px 26px", display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "460px" })}>
                  <span style={S({ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.22)", fontSize: "12px", color: "#CFF1EF" })}>
                    <span style={S({ width: "7px", height: "7px", borderRadius: "50%", background: "#5ED1C9" })} />
فعّال · مسار الفلك والفضاء
                  </span>
                  <div style={S({ display: "flex", flexDirection: "column", gap: "4px" })}>
                    <span style={S({ fontSize: "15px", color: "#C9D8E2" })}>
أسبوع الفلك والفضاء 2026
                    </span>
                    <h2 style={S({ margin: "0", fontFamily: "TD, serif", fontWeight: "700", fontSize: "42px", lineHeight: "1.1" })}>
ثورة الصواريخ
                    </h2>
                  </div>
                </div>
              </div>
              <div style={S({ display: "flex", alignItems: "center", gap: "14px", padding: "14px 14px 6px", flexWrap: "wrap" })}>
                <div style={S({ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" })}>
                  <span style={S({ fontSize: "13px", fontWeight: "700", color: "#0B3B41" })}>
الدعوة العامة للأعضاء
                  </span>
                  <span style={S({ fontSize: "13px", color: "#4F6567" })}>
يسجّل العضو اسمه وبريده قبل فتح الدعوة
                  </span>
                </div>
                <span style={S({ display: "flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 5px 0 14px", borderRadius: "999px", background: "rgba(255,255,255,.7)", border: "1px solid rgba(255,255,255,.9)", fontSize: "13px", direction: "ltr" })}>
invite.scienceclub.sa/rr26
                  <button type="button" style={S({ height: "30px", padding: "0 12px", border: "0", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", fontFamily: "TS, sans-serif", fontSize: "12px", fontWeight: "700", cursor: "pointer" })}>
نسخ
                  </button>
                </span>
                <a href={`${v.base}/events`} style={S({ height: "40px", padding: "0 18px", display: "inline-flex", alignItems: "center", borderRadius: "999px", border: "1px solid #0B3B41", color: "#0B3B41", textDecoration: "none", fontWeight: "700", fontSize: "14px" })}>
فتح الفعالية
                </a>
              </div>
            </article>
            <section className="lift in glass" style={S({ borderRadius: "30px", padding: "22px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "12px" })}>
              <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "baseline" })}>
                <h3 style={S({ margin: "0", fontSize: "17px", fontWeight: "700", color: "#0B3B41" })}>
بانتظار اعتمادك
                </h3>
                <a href={`${v.base}/approvals`} style={S({ fontSize: "13px", textDecoration: "none" })}>
الكل
                </a>
              </div>
              {(v.reqs ?? []).map((q: any, qIndex: number) => (
                <Fragment key={qIndex}>
                <a href={`${v.base}/approvals`} className="row" style={S({ display: "flex", gap: "12px", alignItems: "center", padding: "10px", borderRadius: "18px", textDecoration: "none", color: "inherit" })}>
                  <span style={S({ width: "40px", height: "54px", flex: "0 0 40px", borderRadius: "10px", background: q.bg })} />
                  <span style={S({ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" })}>
                    <b style={S({ fontSize: "14px" })}>
{q.what}
                    </b>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{q.who}
                    </span>
                  </span>
                </a>
                </Fragment>
              ))}
              <span style={S({ marginTop: "auto", fontSize: "12px", color: "#4F6567", lineHeight: "1.7" })}>
لا تُرسل أي دعوة من قادة النادي قبل اعتمادك
              </span>
            </section>
            {/* overview: arranged, animated */}
            <section className="in glass s3 ov" style={S({ gridColumn: "span 3", borderRadius: "30px", padding: "24px 26px", boxSizing: "border-box", display: "grid", gridTemplateColumns: "300px minmax(0,1fr) minmax(0,1.2fr)", gap: "28px", alignItems: "center" })} data-ov="1">
              <div style={S({ display: "flex", alignItems: "center", gap: "18px" })}>
                <div style={S({ position: "relative", width: "150px", height: "150px", flex: "0 0 150px" })}>
                  <svg width="150" height="150" viewBox="0 0 42 42" style={S({ transform: "rotate(-90deg)" })} aria-hidden="true">
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="rgba(19,112,123,.1)" strokeWidth="5" />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#13707B" strokeWidth="5" strokeDasharray="50 50" strokeDashoffset="0" style={S({ animation: "dash 1.2s cubic-bezier(.2,.8,.2,1) .2s both" })} />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#6FB7B8" strokeWidth="5" strokeDasharray="24 76" strokeDashoffset="-50.5" style={S({ animation: "dash 1.2s cubic-bezier(.2,.8,.2,1) .45s both" })} />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#C99A2E" strokeWidth="5" strokeDasharray="16 84" strokeDashoffset="-75" style={S({ animation: "dash 1.2s cubic-bezier(.2,.8,.2,1) .7s both" })} />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#C7BFAF" strokeWidth="5" strokeDasharray="8 92" strokeDashoffset="-91.5" style={S({ animation: "dash 1.2s cubic-bezier(.2,.8,.2,1) .95s both" })} />
                  </svg>
                  <div style={S({ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" })}>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "34px", lineHeight: "1", color: "#0B3B41" })}>
{v.total}
                    </span>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
دعوة
                    </span>
                  </div>
                </div>
                <div style={S({ display: "flex", flexDirection: "column", gap: "9px", fontSize: "13px", color: "#3E5456" })}>
                  <span style={S({ display: "flex", alignItems: "center", gap: "8px" })}>
                    <span style={S({ width: "9px", height: "9px", borderRadius: "3px", background: "#13707B" })} />
مؤكَّد الحضور
                  </span>
                  <span style={S({ display: "flex", alignItems: "center", gap: "8px" })}>
                    <span style={S({ width: "9px", height: "9px", borderRadius: "3px", background: "#6FB7B8" })} />
فُتحت
                  </span>
                  <span style={S({ display: "flex", alignItems: "center", gap: "8px" })}>
                    <span style={S({ width: "9px", height: "9px", borderRadius: "3px", background: "#C99A2E" })} />
أُنشئت
                  </span>
                  <span style={S({ display: "flex", alignItems: "center", gap: "8px" })}>
                    <span style={S({ width: "9px", height: "9px", borderRadius: "3px", background: "#C7BFAF" })} />
اعتذر
                  </span>
                </div>
              </div>
              <div style={S({ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" })}>
                {(v.kpis ?? []).map((k: any, kIndex: number) => (
                  <Fragment key={kIndex}>
                  <div style={S({ borderRadius: "20px", background: "rgba(255,255,255,.6)", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "4px" })}>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{k.label}
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "30px", lineHeight: "1", color: k.color })}>
{k.val}
                    </span>
                    <span style={S({ height: "4px", borderRadius: "4px", background: "rgba(19,112,123,.1)", overflow: "hidden", display: "block" })}>
                      <span className="growX" style={S({ display: "block", height: "100%", width: k.pct, background: k.color, borderRadius: "4px" })} />
                    </span>
                  </div>
                  </Fragment>
                ))}
              </div>
              <div style={S({ display: "flex", flexDirection: "column", gap: "10px" })}>
                <span style={S({ fontSize: "13px", fontWeight: "700", color: "#0B3B41" })}>
الدعوات حسب المسار
                </span>
                <div style={S({ display: "flex", alignItems: "flex-end", gap: "14px", height: "150px", paddingBottom: "6px", borderBottom: "1px solid rgba(19,112,123,.18)" })}>
                  <div style={S({ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%", justifyContent: "flex-end" })}>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#0B3B41" })}>
18
                    </span>
                    <span className="grow" style={S({ display: "block", width: "100%", maxWidth: "34px", height: "82px", borderRadius: "10px 10px 4px 4px", background: "linear-gradient(180deg,#13707B,#13707B55)", animationDelay: "0.20s" })} />
                  </div>
                  <div style={S({ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%", justifyContent: "flex-end" })}>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#0B3B41" })}>
24
                    </span>
                    <span className="grow" style={S({ display: "block", width: "100%", maxWidth: "34px", height: "110px", borderRadius: "10px 10px 4px 4px", background: "linear-gradient(180deg,#0B3B41,#0B3B4155)", animationDelay: "0.32s" })} />
                  </div>
                  <div style={S({ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%", justifyContent: "flex-end" })}>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#0B3B41" })}>
9
                    </span>
                    <span className="grow" style={S({ display: "block", width: "100%", maxWidth: "34px", height: "41px", borderRadius: "10px 10px 4px 4px", background: "linear-gradient(180deg,#2F8C8A,#2F8C8A55)", animationDelay: "0.44s" })} />
                  </div>
                  <div style={S({ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%", justifyContent: "flex-end" })}>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#0B3B41" })}>
6
                    </span>
                    <span className="grow" style={S({ display: "block", width: "100%", maxWidth: "34px", height: "28px", borderRadius: "10px 10px 4px 4px", background: "linear-gradient(180deg,#6FB7B8,#6FB7B855)", animationDelay: "0.56s" })} />
                  </div>
                  <div style={S({ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%", justifyContent: "flex-end" })}>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#0B3B41" })}>
11
                    </span>
                    <span className="grow" style={S({ display: "block", width: "100%", maxWidth: "34px", height: "50px", borderRadius: "10px 10px 4px 4px", background: "linear-gradient(180deg,#4F8F7E,#4F8F7E55)", animationDelay: "0.68s" })} />
                  </div>
                  <div style={S({ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%", justifyContent: "flex-end" })}>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#0B3B41" })}>
7
                    </span>
                    <span className="grow" style={S({ display: "block", width: "100%", maxWidth: "34px", height: "32px", borderRadius: "10px 10px 4px 4px", background: "linear-gradient(180deg,#C99A2E,#C99A2E55)", animationDelay: "0.80s" })} />
                  </div>
                  <div style={S({ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%", justifyContent: "flex-end" })}>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#0B3B41" })}>
10
                    </span>
                    <span className="grow" style={S({ display: "block", width: "100%", maxWidth: "34px", height: "46px", borderRadius: "10px 10px 4px 4px", background: "linear-gradient(180deg,#E0B95A,#E0B95A55)", animationDelay: "0.92s" })} />
                  </div>
                </div>
                <div style={S({ display: "flex", gap: "14px" })}>
                  <span style={S({ flex: "1", textAlign: "center", fontSize: "11px", color: "#4F6567" })}>
النادي
                  </span>
                  <span style={S({ flex: "1", textAlign: "center", fontSize: "11px", color: "#4F6567" })}>
الفلك والفضاء
                  </span>
                  <span style={S({ flex: "1", textAlign: "center", fontSize: "11px", color: "#4F6567" })}>
الكيمياء
                  </span>
                  <span style={S({ flex: "1", textAlign: "center", fontSize: "11px", color: "#4F6567" })}>
الفيزياء
                  </span>
                  <span style={S({ flex: "1", textAlign: "center", fontSize: "11px", color: "#4F6567" })}>
الأحياء
                  </span>
                  <span style={S({ flex: "1", textAlign: "center", fontSize: "11px", color: "#4F6567" })}>
الرياضيات المالية
                  </span>
                  <span style={S({ flex: "1", textAlign: "center", fontSize: "11px", color: "#4F6567" })}>
الرياضي
                  </span>
                </div>
              </div>
            </section>
            <section className="lift in glass s3" style={S({ gridColumn: "span 3", borderRadius: "30px", padding: "22px 24px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "4px" })}>
              <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" })}>
                <h3 style={S({ margin: "0", fontSize: "17px", fontWeight: "700", color: "#0B3B41" })}>
آخر الدعوات
                </h3>
                <a href={`${v.base}/invitations`} style={S({ fontSize: "13px", textDecoration: "none" })}>
عرض الكل
                </a>
              </div>
              {(v.recent ?? []).map((r: any, rIndex: number) => (
                <Fragment key={rIndex}>
                <div className="row" style={S({ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr) auto", alignItems: "center", gap: "16px", padding: "12px 10px", borderRadius: "16px" })}>
                  <div style={S({ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" })}>
                    <b style={S({ fontSize: "15px" })}>
{r.name}
                    </b>
                    <span style={S({ fontSize: "13px", color: "#4F6567" })}>
{r.org}
                    </span>
                  </div>
                  <span style={S({ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#3E5456" })}>
                    <span style={S({ width: "8px", height: "8px", borderRadius: "50%", background: r.dot })} />
{r.track}
                  </span>
                  <span style={S({ fontSize: "13px", color: "#4F6567" })}>
{r.by}
                  </span>
                  <span style={S({ fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", color: r.sc, background: r.sb })}>
{r.status}
                  </span>
                </div>
                </Fragment>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
