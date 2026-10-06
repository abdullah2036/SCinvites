/* eslint-disable */
// Generated from design-reference/Dashboard.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function DashboardView({ v }: { v: any }) {
  return (
    <main className="mn" style={S({ flex: "999 1 560px", minWidth: "0", boxSizing: "border-box", padding: "24px 14px 40px", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "1200px" })}>
      <header className="in" style={S({ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" })}>
        <div style={S({ display: "flex", flexDirection: "column", gap: "6px" })}>
          <h1 className="h1m" style={S({ margin: "0", fontFamily: "TD, serif", fontSize: "42px", lineHeight: "1.1", color: "#0B3B41" })}>
{v.greeting}
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
{v.today}
        </span>
        <span style={S({ width: "4px", height: "4px", borderRadius: "50%", background: "#8FA3A5" })} />
        <a href={`${v.base}/approvals`} style={S({ textDecoration: "none", color: "#8E6C1F", fontWeight: "700" })}>
{v.pendingLine}
        </a>
        <span style={S({ width: "4px", height: "4px", borderRadius: "50%", background: "#8FA3A5" })} />
        <span>
{v.scopeLine}
        </span>
      </div>
      <div className="in glass stack" style={S({ borderRadius: "26px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" })}>
        <div style={S({ display: "flex", flexDirection: "column", gap: "2px", flex: "1 1 220px" })}>
          <span style={S({ fontSize: "12px", color: "#4F6567" })}>
الفعالية القادمة
          </span>
          <b style={S({ fontSize: "16px", color: "#0B3B41" })}>
{v.nextLine}
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
{v.confirmLine}
          </span>
          <span style={S({ height: "8px", borderRadius: "8px", background: "rgba(19,112,123,.12)", overflow: "hidden", display: "block" })}>
            <span className="growX" style={S({ display: "block", width: v.confirmPct, height: "100%", borderRadius: "8px", background: "linear-gradient(90deg,#13707B,#6FB7B8)" })} />
          </span>
        </div>
      </div>
      <div className="g3" style={S({ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "20px" })}>
        <article className="lift in glass s2" style={S({ gridColumn: "span 2", borderRadius: "30px", padding: "10px", boxSizing: "border-box", display: "flex", flexDirection: "column" })}>
          <div style={S({ position: "relative", height: "250px", borderRadius: "22px", overflow: "hidden", background: "#0C1630", color: "#FFFFFF" })}>
            {v.heroMedia}
            <div style={S({ position: "absolute", inset: "0", background: "linear-gradient(270deg, rgba(8,16,36,.9) 0%, rgba(8,16,36,.55) 45%, rgba(8,16,36,0) 100%)" })} />
            <div style={S({ position: "relative", height: "100%", boxSizing: "border-box", padding: "22px 26px", display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "460px" })}>
              <span style={S({ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.22)", fontSize: "12px", color: "#CFF1EF" })}>
                <span style={S({ width: "7px", height: "7px", borderRadius: "50%", background: "#5ED1C9" })} />
{v.heroBadge}
              </span>
              <div style={S({ display: "flex", flexDirection: "column", gap: "4px" })}>
                <span style={S({ fontSize: "15px", color: "#C9D8E2" })}>
{v.heroSubtitle}
                </span>
                <h2 style={S({ margin: "0", fontFamily: "TD, serif", fontWeight: "700", fontSize: "42px", lineHeight: "1.1" })}>
{v.heroTitle}
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
{v.generalLink}
              <button type="button" onClick={v.copyGeneral} style={S({ height: "30px", padding: "0 12px", border: "0", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", fontFamily: "TS, sans-serif", fontSize: "12px", fontWeight: "700", cursor: "pointer" })}>
{v.copyLabel}
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
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#13707B" strokeWidth="5" strokeDasharray={v.donut[0].dash} strokeDashoffset={v.donut[0].offset} style={S({ animation: "dash 1.2s cubic-bezier(.2,.8,.2,1) .2s both" })} />
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#6FB7B8" strokeWidth="5" strokeDasharray={v.donut[1].dash} strokeDashoffset={v.donut[1].offset} style={S({ animation: "dash 1.2s cubic-bezier(.2,.8,.2,1) .45s both" })} />
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#C99A2E" strokeWidth="5" strokeDasharray={v.donut[2].dash} strokeDashoffset={v.donut[2].offset} style={S({ animation: "dash 1.2s cubic-bezier(.2,.8,.2,1) .7s both" })} />
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#C7BFAF" strokeWidth="5" strokeDasharray={v.donut[3].dash} strokeDashoffset={v.donut[3].offset} style={S({ animation: "dash 1.2s cubic-bezier(.2,.8,.2,1) .95s both" })} />
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
              {(v.bars ?? []).map((b: any, bIndex: number) => (
                <div key={bIndex} style={S({ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%", justifyContent: "flex-end" })}>
                  <span style={S({ fontSize: "12px", fontWeight: "700", color: "#0B3B41" })}>{b.label}</span>
                  <span className="grow" style={S({ display: "block", width: "100%", maxWidth: "34px", height: b.h, borderRadius: "10px 10px 4px 4px", background: b.bg, animationDelay: b.delay })} />
                </div>
              ))}
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
  );
}
