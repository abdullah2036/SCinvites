/* eslint-disable */
// Generated from design-reference/Invitations.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function InvitationsView({ v }: { v: any }) {
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
            <a href={`${v.base}/events`} className="nav" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", color: "#2C4245" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
الفعاليات
            </a>
            <a href={`${v.base}/invitations`} className="nav" aria-current="page" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", background: "rgba(19,112,123,.12)", color: "#0B3B41", fontWeight: "700" })}>
              <span style={S({ position: "absolute", left: "-16px", top: "9px", width: "4px", height: "26px", borderRadius: "4px", background: "#13707B" })} />
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
          <a href={`${v.base}/events`} aria-label="الفعاليات" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#4F6567" })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 3v4M16 3v4" />
            </svg>
الفعاليات
          </a>
          <a href={`${v.base}/invitations`} aria-label="الدعوات" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#0B3B41", fontWeight: "700" })}>
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
الدعوات
              </h1>
              <p style={S({ margin: "0", fontSize: "16px", color: "#3E5456" })}>
كل الدعوات المرسلة وحالتها
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
          <div style={S({ display: "flex", gap: "8px", flexWrap: "wrap" })}>
            {(v.statuses ?? []).map((c: any, cIndex: number) => (
              <Fragment key={cIndex}>
              <button type="button" className="chip" onClick={c.pick} aria-pressed={c.on} style={S({ height: "38px", padding: "0 16px", borderRadius: "999px", border: `1px solid ${c.border}`, background: c.bg, color: c.text, fontFamily: "TS, sans-serif", fontSize: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "8px" })}>
                <span style={S({ width: "8px", height: "8px", borderRadius: "50%", background: c.dot })} />
{c.name}
              </button>
              </Fragment>
            ))}
          </div>
          <section className="glass" style={S({ borderRadius: "30px", padding: "12px 18px", display: "flex", flexDirection: "column" })}>
            <div className="hidem" style={S({ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr) 90px 120px 120px 130px", gap: "14px", padding: "12px 10px", fontSize: "12px", color: "#4F6567", borderBottom: "1px solid rgba(19,112,123,.15)" })}>
              <span>
المدعو
              </span>
              <span>
الفعالية
              </span>
              <span>
الختم
              </span>
              <span>
الحالة
              </span>
              <span>
التاريخ
              </span>
              <span>
إجراءات
              </span>
            </div>
            {(v.rows ?? []).map((r: any, rIndex: number) => (
              <Fragment key={rIndex}>
              <div className="row tbl" style={S({ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr) 90px 120px 120px 130px", gap: "14px", alignItems: "center", padding: "12px 10px", borderRadius: "16px" })}>
                <div style={S({ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" })}>
                  <b style={S({ fontSize: "15px" })}>
{r.name}
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{r.org}
                  </span>
                </div>
                <span className="hidem" style={S({ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px" })}>
                  <span style={S({ width: "8px", height: "8px", borderRadius: "50%", background: r.dot })} />
{r.title}
                </span>
                <span className="hidem" style={S({ justifySelf: "start", padding: "4px 10px", borderRadius: "999px", border: "1px solid rgba(19,112,123,.3)", fontSize: "12px", fontWeight: "700", color: "#0B3B41" })}>
{r.stamp}
                </span>
                <span style={S({ justifySelf: "start", fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", color: r.sc, background: r.sb })}>
{r.status}
                </span>
                <span className="hidem" style={S({ fontSize: "13px", color: "#4F6567" })}>
{r.date}
                </span>
                <span className="hidem" style={S({ display: "flex", gap: "6px" })}>
                  <button type="button" aria-label="معاينة" style={S({ width: "34px", height: "34px", borderRadius: "50%", border: "0", background: "rgba(255,255,255,.75)", cursor: "pointer" })}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0B3B41" strokeWidth="1.8" aria-hidden="true">
                      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                  <button type="button" aria-label="نسخ الرابط" style={S({ width: "34px", height: "34px", borderRadius: "50%", border: "0", background: "rgba(255,255,255,.75)", cursor: "pointer" })}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0B3B41" strokeWidth="1.8" aria-hidden="true">
                      <rect x="9" y="9" width="12" height="12" rx="2" />
                      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                    </svg>
                  </button>
                  <button type="button" aria-label="إلغاء الدعوة" style={S({ width: "34px", height: "34px", borderRadius: "50%", border: "0", background: "rgba(255,255,255,.75)", cursor: "pointer" })}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8E3B2E" strokeWidth="1.8" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              </div>
              </Fragment>
            ))}
          </section>
        </main>
      </div>
    </div>
    </>
  );
}
