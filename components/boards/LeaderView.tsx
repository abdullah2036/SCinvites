/* eslint-disable */
// Ported from the Leader design board, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function LeaderView({ v }: { v: any }) {
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
          <a href={v.createHref} style={S({ height: "50px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "999px", background: "#C99A2E", color: "#0B2B30", textDecoration: "none", fontWeight: "700", fontSize: "15px", boxShadow: "0 10px 24px rgba(201,154,46,.35)" })}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2B30" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
إنشاء دعوة
          </a>
          <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
            <span style={S({ fontSize: "11px", color: "#5B6E70", padding: "0 12px 6px" })}>
المساحة
            </span>
            <a href="/leader" className="nav" aria-current="page" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", background: "rgba(19,112,123,.12)", color: "#0B3B41", fontWeight: "700" })}>
              <span style={S({ position: "absolute", left: "-16px", top: "9px", width: "4px", height: "26px", borderRadius: "4px", background: "#13707B" })} />
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
              </svg>
الرئيسية
            </a>
            <a href="#mine" className="nav" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", color: "#2C4245" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
دعواتي
            </a>
            <a href="#templates" className="nav" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", color: "#2C4245" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="3" width="8" height="8" rx="1.5" />
                <rect x="13" y="3" width="8" height="8" rx="1.5" />
                <rect x="3" y="13" width="8" height="8" rx="1.5" />
                <rect x="13" y="13" width="8" height="8" rx="1.5" />
              </svg>
القوالب المعتمدة
            </a>
            <span style={S({ fontSize: "11px", color: "#5B6E70", padding: "16px 12px 6px" })}>
الحساب
            </span>
            <a href="#account" className="nav" style={S({ position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 12px", borderRadius: "14px", textDecoration: "none", fontSize: "15px", color: "#2C4245" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
              </svg>
حسابي
            </a>
          </div>
          <div style={S({ marginTop: "auto", display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "18px", background: "rgba(255,255,255,.6)" })}>
            <span style={S({ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg,#13707B,#6FB7B8)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "TD, serif", fontSize: "18px" })}>
{v.initial}
            </span>
            <div style={S({ display: "flex", flexDirection: "column" })}>
              <span style={S({ fontWeight: "700", fontSize: "14px" })}>
{v.name}
              </span>
              <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{v.roleLine}
              </span>
            </div>
          </div>
        </nav>
        <nav aria-label="التنقل" className="bnav glass" style={S({ position: "fixed", left: "12px", right: "12px", bottom: "12px", zIndex: "20", height: "66px", borderRadius: "24px", padding: "0 8px", justifyContent: "space-around", alignItems: "center" })}>
          <a href="/leader" aria-label="الرئيسية" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#0B3B41", fontWeight: "700" })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
            </svg>
الرئيسية
          </a>
          <a href="#mine" aria-label="دعواتي" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#4F6567" })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
دعواتي
          </a>
          <a href="#templates" aria-label="القوالب المعتمدة" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#4F6567" })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <rect x="3" y="3" width="8" height="8" rx="1.5" />
              <rect x="13" y="3" width="8" height="8" rx="1.5" />
              <rect x="3" y="13" width="8" height="8" rx="1.5" />
              <rect x="13" y="13" width="8" height="8" rx="1.5" />
            </svg>
القوالب المعتمدة
          </a>
          <a href={v.createHref} aria-label="إنشاء دعوة" style={S({ width: "52px", height: "52px", borderRadius: "50%", background: "#C99A2E", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(201,154,46,.4)" })}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B2B30" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </a>
          <a href="#account" aria-label="حسابي" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "11px", textDecoration: "none", color: "#4F6567" })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
            </svg>
حسابي
          </a>
        </nav>
        <main className="mn" style={S({ flex: "999 1 560px", minWidth: "0", boxSizing: "border-box", padding: "24px 14px 40px", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "1200px" })}>
          <header className="in" style={S({ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" })}>
            <div style={S({ display: "flex", flexDirection: "column", gap: "6px" })}>
              <h1 className="h1m" style={S({ margin: "0", fontFamily: "TD, serif", fontSize: "42px", lineHeight: "1.1", color: "#0B3B41" })}>
{v.greeting}
              </h1>
              <p style={S({ margin: "0", fontSize: "16px", color: "#3E5456" })}>
قوالب معتمدة لك، وطلباتك تُرسل بعد اعتمادها
              </p>
            </div>
            <a href={v.createHref} style={S({ height: "50px", padding: "0 22px", display: "inline-flex", alignItems: "center", borderRadius: "999px", background: "#C99A2E", color: "#0B2B30", textDecoration: "none", fontWeight: "700" })}>
طلب دعوات جديدة
            </a>
          </header>
          <div className="in glass stack" style={S({ borderRadius: "26px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px" })}>
            <span style={S({ width: "46px", height: "46px", flex: "0 0 46px", borderRadius: "50%", background: "rgba(201,154,46,.15)", display: "flex", alignItems: "center", justifyContent: "center" })}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8E6C1F" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            <div style={S({ flex: "1", display: "flex", flexDirection: "column", gap: "2px" })}>
              <b style={S({ color: "#0B3B41" })}>
{v.deadlineNote}
              </b>
              <span style={S({ fontSize: "13px", color: "#3E5456" })}>
وتقدر تكتب كل الأسماء دفعة وحدة
              </span>
            </div>
          </div>
          <section id="templates" className="in glass" style={S({ borderRadius: "30px", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "12px" })}>
            <h3 style={S({ margin: "0", fontSize: "17px", fontWeight: "700", color: "#0B3B41" })}>
قوالب معتمدة لك
            </h3>
            <div className="g3" style={S({ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "14px" })}>
              {(v.pubs ?? []).map((p: any, pIndex: number) => (
                <Fragment key={pIndex}>
                <a href={p.href} className="lift" style={S({ textDecoration: "none", color: "inherit", borderRadius: "22px", background: "rgba(255,255,255,.6)", padding: "8px", display: "flex", flexDirection: "column", gap: "10px" })}>
                  <span style={S({ height: "110px", borderRadius: "16px", background: p.bg, color: "#FFFFFF", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "12px", boxSizing: "border-box" })}>
                    <span style={S({ fontSize: "11px", opacity: ".8" })}>
{p.event}
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "22px" })}>
{p.title}
                    </span>
                  </span>
                  <span style={S({ display: "flex", flexDirection: "column", gap: "2px", padding: "0 6px 6px" })}>
                    <b style={S({ fontSize: "14px" })}>
{p.kind}
                    </b>
                    <span style={S({ fontSize: "12px", color: "#4F6567" })}>
نُشر {p.pub} · آخر موعد للطلب {p.due}
                    </span>
                  </span>
                </a>
                </Fragment>
              ))}
            </div>
          </section>
          <section id="mine" className="in glass" style={S({ borderRadius: "30px", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" })}>
            <h3 style={S({ margin: "0 0 6px", fontSize: "17px", fontWeight: "700", color: "#0B3B41" })}>
طلباتي
            </h3>
            {(v.mine ?? []).map((m: any, mIndex: number) => (
              <Fragment key={mIndex}>
              <div className="row stack" style={S({ display: "flex", gap: "14px", alignItems: "center", padding: "12px 10px", borderRadius: "18px" })}>
                <span className="hidem" style={S({ width: "44px", height: "58px", flex: "0 0 44px", borderRadius: "10px", background: m.bg })} />
                <div style={S({ flex: "1", display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" })}>
                  <b style={S({ fontSize: "15px" })}>
{m.what}
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{m.note}
                  </span>
                </div>
                <span style={S({ fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", color: m.sc, background: m.sb })}>
{m.status}
                </span>
                {m.ready ? (
                  <>
                  <button type="button" onClick={m.send} disabled={m.busy} style={S({ height: "40px", padding: "0 16px", border: "0", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "13px", cursor: "pointer" })}>
{m.sendLabel}
                  </button>
                  </>
                ) : null}
              </div>
              </Fragment>
            ))}
          </section>
        </main>
      </div>
    </div>
    {v.overlay}
    </>
  );
}
