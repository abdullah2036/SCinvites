/* eslint-disable */
// Generated from design-reference/Settings.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function SettingsView({ v }: { v: any }) {
  return (
    <>
    <div style={S({ minHeight: "1150px", position: "relative", overflow: "hidden", fontFamily: "TS, sans-serif", color: "#18292C", background: "radial-gradient(55% 45% at 88% 6%, #BFE3E3 0%, rgba(191,227,227,0) 70%), radial-gradient(45% 40% at 6% 96%, #F2E1B4 0%, rgba(242,225,180,0) 70%), radial-gradient(60% 55% at 45% 55%, #DCEFEE 0%, #EAF3F0 55%, #F4F2EC 100%)" })}>
      <span className="orb" aria-hidden="true" style={S({ position: "absolute", right: "30%", top: "-120px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, rgba(111,183,184,.55), rgba(19,112,123,.15) 60%, rgba(19,112,123,0) 72%)", filter: "blur(6px)", pointerEvents: "none" })} />
      <span className="orb" aria-hidden="true" style={S({ position: "absolute", left: "4%", bottom: "120px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, rgba(231,200,115,.45), rgba(201,154,46,.1) 60%, rgba(201,154,46,0) 72%)", filter: "blur(8px)", animationDelay: "-6s", pointerEvents: "none" })} />
      <div className="pg" style={S({ position: "relative", display: "flex", flexWrap: "wrap", gap: "24px", padding: "20px", boxSizing: "border-box", minHeight: "1150px" })}>
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
            <a href={`${v.base}/settings`} className="nav" aria-current="page" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", background: "rgba(19,112,123,.12)", color: "#0B3B41", fontWeight: "700" })}>
              <span style={S({ position: "absolute", left: "-16px", top: "9px", width: "4px", height: "26px", borderRadius: "4px", background: "#13707B" })} />
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
الإعدادات
              </h1>
              <p style={S({ margin: "0", fontSize: "16px", color: "#3E5456" })}>
حسابك، والأعضاء المصرّح لهم بإنشاء الدعوات
              </p>
            </div>
          </header>
          <div className="g3" style={S({ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "20px" })}>
            <section className="glass" style={S({ borderRadius: "30px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" })}>
              <h3 style={S({ margin: "0", fontSize: "17px", color: "#0B3B41" })}>
الملف الشخصي
              </h3>
              <div style={S({ display: "flex", alignItems: "center", gap: "14px" })}>
                <span style={S({ width: "64px", height: "64px", borderRadius: "50%", background: "linear-gradient(135deg,#13707B,#6FB7B8)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "TD, serif", fontSize: "28px" })}>
ج
                </span>
                <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
                  <b>
جنى سقطي
                  </b>
                  <span style={S({ fontSize: "13px", color: "#4F6567" })}>
رئيسة قسم الإعلام
                  </span>
                </div>
              </div>
              <span style={S({ padding: "10px 14px", borderRadius: "999px", background: "rgba(255,255,255,.7)", fontSize: "14px", direction: "ltr", textAlign: "right" })}>
jana@uqu.edu.sa
              </span>
            </section>
            <section className="glass" style={S({ borderRadius: "30px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" })}>
              <h3 style={S({ margin: "0", fontSize: "17px", color: "#0B3B41" })}>
الحساب والإشعارات
              </h3>
              {(v.toggles ?? []).map((g: any, gIndex: number) => (
                <Fragment key={gIndex}>
                <button type="button" onClick={g.flip} aria-pressed={g.on} style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "10px 4px", border: "0", background: "transparent", fontFamily: "TS, sans-serif", fontSize: "14px", color: "#18292C", cursor: "pointer", textAlign: "right" })}>
{g.label}
                  <span style={S({ width: "46px", height: "26px", borderRadius: "999px", background: g.track, position: "relative", transition: "background .2s ease", flex: "0 0 46px" })}>
                    <span style={S({ position: "absolute", top: "3px", right: g.knob, width: "20px", height: "20px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 2px 6px rgba(0,0,0,.2)", transition: "right .2s ease" })} />
                  </span>
                </button>
                </Fragment>
              ))}
            </section>
            <section className="glass" style={S({ borderRadius: "30px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" })}>
              <h3 style={S({ margin: "0", fontSize: "17px", color: "#0B3B41" })}>
طلبات دخول القادة
              </h3>
              <span style={S({ fontSize: "13px", color: "#3E5456", lineHeight: "1.7" })}>
يدخل القائد بريده الجامعي وتوافقين عليه من هنا، بدون كلمات مرور
              </span>
              {(v.joins ?? []).map((j: any, jIndex: number) => (
                <Fragment key={jIndex}>
                <div style={S({ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "16px", background: "rgba(255,255,255,.65)" })}>
                  <span style={S({ flex: "1", fontSize: "13px", direction: "ltr", textAlign: "right", overflow: "hidden", textOverflow: "ellipsis" })}>
{j.mail}
                  </span>
                  <button type="button" onClick={j.ok} style={S({ height: "34px", padding: "0 12px", border: "0", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", fontFamily: "TS, sans-serif", fontSize: "12px", fontWeight: "700", cursor: "pointer" })}>
موافقة
                  </button>
                  <button type="button" onClick={j.no} aria-label="رفض" style={S({ width: "34px", height: "34px", border: "1px solid rgba(19,112,123,.3)", borderRadius: "50%", background: "transparent", color: "#8E3B2E", cursor: "pointer" })}>
×
                  </button>
                </div>
                </Fragment>
              ))}
              <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{v.joinsEmpty}
              </span>
            </section>
            <section className="glass s3" style={S({ gridColumn: "span 3", borderRadius: "30px", padding: "18px 22px", display: "flex", flexDirection: "column" })}>
              <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "6px 8px 12px" })}>
                <h3 style={S({ margin: "0", fontSize: "17px", color: "#0B3B41" })}>
قادة النادي المصرّح لهم
                </h3>
                <span style={S({ fontSize: "13px", color: "#4F6567" })}>
يرسلون للاعتماد فقط
                </span>
              </div>
              {(v.leaders ?? []).map((l: any, lIndex: number) => (
                <Fragment key={lIndex}>
                <div className="row" style={S({ display: "grid", gridTemplateColumns: "44px minmax(0,1.2fr) minmax(0,1fr) minmax(0,1fr) auto", alignItems: "center", gap: "14px", padding: "10px 8px", borderRadius: "16px" })}>
                  <span style={S({ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(19,112,123,.12)", color: "#13707B", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700" })}>
{l.ini}
                  </span>
                  <b style={S({ fontSize: "15px" })}>
{l.name}
                  </b>
                  <span style={S({ fontSize: "13px", color: "#3E5456" })}>
{l.role}
                  </span>
                  <span style={S({ fontSize: "13px", direction: "ltr", textAlign: "right", color: "#3E5456" })}>
{l.mail}
                  </span>
                  <span style={S({ fontSize: "12px", padding: "5px 11px", borderRadius: "999px", background: "rgba(19,112,123,.12)", color: "#13707B", fontWeight: "700" })}>
{l.perm}
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
