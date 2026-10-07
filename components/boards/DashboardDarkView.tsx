/* eslint-disable */
// Ported from design-reference/DashboardDark.dc.html, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function DashboardDarkView({ v }: { v: any }) {
  return (
    <main className="mn" style={S({ flex: "999 1 560px", minWidth: "0", boxSizing: "border-box", padding: "24px 14px 40px", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "1200px" })}>
      <header className="in" style={S({ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" })}>
        <div style={S({ display: "flex", flexDirection: "column", gap: "6px" })}>
          <h1 className="h1m" style={S({ margin: "0", fontFamily: "TD, serif", fontSize: "42px", lineHeight: "1.1", color: "#0B3B41" })}>
طلبات الاعتماد
          </h1>
          <p style={S({ margin: "0", fontSize: "16px", color: "#3E5456" })}>
راجعي القالب والأسماء، واعتمدي الكل أو استبعدي اسمًا
          </p>
        </div>
      </header>
      <div className="g3" style={S({ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "20px", alignItems: "start" })}>
        <section style={S({ display: "flex", flexDirection: "column", gap: "10px" })}>
          {(v.reqs ?? []).map((q: any, qIndex: number) => (
            <Fragment key={qIndex}>
            <button type="button" className="glass" onClick={q.pick} aria-pressed={q.on} style={S({ textAlign: "right", fontFamily: "TS, sans-serif", display: "flex", gap: "12px", alignItems: "center", padding: "12px", borderRadius: "22px", outline: q.outline, cursor: "pointer" })}>
              <span style={S({ width: "44px", height: "58px", flex: "0 0 44px", borderRadius: "10px", background: q.bg })} />
              <span style={S({ flex: "1", display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" })}>
                <b style={S({ fontSize: "14px", color: "#18292C" })}>
{q.what}
                </b>
                <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{q.from}
                </span>
              </span>
              <span style={S({ fontSize: "11px", fontWeight: "700", padding: "4px 9px", borderRadius: "999px", color: q.sc, background: q.sb })}>
{q.state}
              </span>
            </button>
            </Fragment>
          ))}
        </section>
        {v.cur ? (
        <section className="glass s2" style={S({ gridColumn: "span 2", borderRadius: "30px", padding: "22px", display: "flex", flexDirection: "column", gap: "14px" })}>
          <div className="stack" style={S({ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" })}>
            <div style={S({ display: "flex", flexDirection: "column", gap: "4px" })}>
              <h2 style={S({ margin: "0", fontSize: "20px", color: "#0B3B41" })}>
{v.cur.what}
              </h2>
              <span style={S({ fontSize: "13px", color: "#4F6567" })}>
{v.cur.from} · القالب: {v.cur.tpl} · الختم: {v.cur.stamp}
              </span>
              {v.cur.placeLine}
            </div>
            <span style={S({ fontSize: "12px", padding: "6px 12px", borderRadius: "999px", background: "rgba(201,154,46,.14)", color: "#8E6C1F", fontWeight: "700" })}>
{v.cur.due}
            </span>
          </div>
          <div style={S({ display: "flex", flexDirection: "column", gap: "6px" })}>
            {(v.names ?? []).map((n: any, nIndex: number) => (
              <Fragment key={nIndex}>
              <button type="button" className="row" onClick={n.flip} aria-pressed={n.on} style={S({ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "16px", border: "0", background: "rgba(255,255,255,.55)", fontFamily: "TS, sans-serif", textAlign: "right", cursor: "pointer", opacity: n.op })}>
                <span style={S({ width: "22px", height: "22px", flex: "0 0 22px", borderRadius: "7px", border: "1.5px solid #13707B", background: n.box, display: "flex", alignItems: "center", justifyContent: "center" })}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <span style={S({ flex: "1", display: "flex", flexDirection: "column", minWidth: "0" })}>
                  <b style={S({ fontSize: "14px", color: "#18292C" })}>
{n.name}
                  </b>
                  <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{n.org}
                  </span>
                </span>
              </button>
              </Fragment>
            ))}
          </div>
          <textarea rows={2} value={v.note} onChange={v.onNote} placeholder="ملاحظة للقائد (مطلوبة عند طلب التعديل)" aria-label="ملاحظة للقائد" style={S({ border: "1px solid rgba(255,255,255,.95)", borderRadius: "18px", padding: "12px 16px", fontFamily: "TS, sans-serif", fontSize: "14px", background: "rgba(255,255,255,.7)", resize: "none" })} />
          {v.error ? <div role="alert" style={S({ fontSize: "13px", color: "#9B3B2E" })}>{v.error}</div> : null}
          <div className="stack" style={S({ display: "flex", gap: "10px" })}>
            <button type="button" onClick={v.approve} disabled={v.busy || v.decided} style={S({ flex: "1", height: "52px", border: "0", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "15px", cursor: "pointer" })}>
{v.approveLabel}
            </button>
            <button type="button" onClick={v.revise} disabled={v.busy || v.decided} style={S({ flex: "0 0 160px", height: "52px", border: "1px solid #C99A2E", borderRadius: "999px", background: "transparent", color: "#8E6C1F", fontFamily: "TS, sans-serif", fontWeight: "700", cursor: "pointer" })}>
طلب تعديل
            </button>
          </div>
        </section>
        ) : v.empty}
      </div>
    </main>
  );
}
