/* eslint-disable */
// Ported from design-reference/Templates.dc.html, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';
import LiveCover from '@/components/invitation/LiveCover';

export default function TemplatesView({ v }: { v: any }) {
  return (
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
        {(v.cards ?? []).map((c: any) => (
          <a key={c.id} href={c.href} className="lift glass" style={S({ textDecoration: "none", color: "inherit", borderRadius: "26px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" })}>
            <div style={S({ position: "relative", height: "250px", borderRadius: "18px", overflow: "hidden", color: "var(--tx)", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", ...css(c.vars) })}>
              <LiveCover track={c.track} artworkUrl={c.artworkUrl} />
              <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 14px 4px", margin: "0 -14px -14px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                <span style={S({ fontSize: "11px", opacity: ".85" })}>
{c.subtitle}
                </span>
                <span style={S({ fontFamily: "TD, serif", fontSize: "22px", lineHeight: "1.2" })}>
{c.title}
                </span>
              </div>
            </div>
            <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6px 6px" })}>
              <b style={S({ fontSize: "13px" })}>
{c.line}
              </b>
              <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{c.colors}
              </span>
            </div>
          </a>
        ))}
        {v.empty}
      </div>
    </main>
  );
}
