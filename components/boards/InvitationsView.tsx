/* eslint-disable */
// Generated from design-reference/Invitations.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function InvitationsView({ v }: { v: any }) {
  return (
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
        {v.empty}
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
            <span style={S({ display: "flex", gap: "6px" })}>
              <button type="button" aria-label="معاينة" onClick={r.preview} style={S({ width: "34px", height: "34px", borderRadius: "50%", border: "0", background: "rgba(255,255,255,.75)", cursor: "pointer" })}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0B3B41" strokeWidth="1.8" aria-hidden="true">
                  <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
              <button type="button" aria-label="نسخ الرابط" onClick={r.copy} style={S({ width: "34px", height: "34px", borderRadius: "50%", border: "0", background: "rgba(255,255,255,.75)", cursor: "pointer" })}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0B3B41" strokeWidth="1.8" aria-hidden="true">
                  <rect x="9" y="9" width="12" height="12" rx="2" />
                  <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                </svg>
              </button>
              <button type="button" aria-label="إلغاء الدعوة" onClick={r.revoke} disabled={r.revoked} style={S({ width: "34px", height: "34px", borderRadius: "50%", border: "0", background: "rgba(255,255,255,.75)", cursor: "pointer" })}>
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
      {v.overlay}
    </main>
  );
}
