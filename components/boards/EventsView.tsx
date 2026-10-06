/* eslint-disable */
// Generated from design-reference/Events.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';
import LiveCover from '@/components/invitation/LiveCover';

export default function EventsView({ v }: { v: any }) {
  return (
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
        <a href="#new-event" onClick={v.newEvent} style={S({ height: "48px", padding: "0 20px", display: "inline-flex", alignItems: "center", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", textDecoration: "none", fontWeight: "700" })}>
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
        {(v.events ?? []).map((e: any) => (
          <article key={e.id} className="lift glass" style={S({ borderRadius: "28px", padding: "10px", display: "flex", flexDirection: "column", gap: "12px" })}>
            <div style={S({ position: "relative", height: "200px", borderRadius: "20px", overflow: "hidden", color: "var(--tx)", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", ...css(e.vars) })}>
              <LiveCover track={e.track} />
              <span style={S({ position: "relative", alignSelf: "flex-start", padding: "5px 11px", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 14%, transparent)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)", fontSize: "12px" })}>
{e.status}
              </span>
              <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "4px", padding: "8px 10px", margin: "0 -16px -16px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 85%, transparent), transparent)" })}>
                <span style={S({ fontSize: "12px", opacity: ".85" })}>
{e.subtitle}
                </span>
                <span style={S({ fontFamily: "TD, serif", fontSize: "28px", lineHeight: "1.2" })}>
{e.title}
                </span>
              </div>
            </div>
            <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px 8px", gap: "10px" })}>
              <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
                <b style={S({ fontSize: "13px" })}>
{e.trackName}
                </b>
                <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{e.meta}
                </span>
              </div>
              <a href={e.href} style={S({ height: "38px", padding: "0 14px", borderRadius: "999px", border: "1px solid #0B3B41", color: "#0B3B41", textDecoration: "none", fontSize: "13px", fontWeight: "700", display: "inline-flex", alignItems: "center" })}>
{e.cta}
              </a>
              {e.editButton}
            </div>
          </article>
        ))}
        {v.empty}
      </div>
      {v.overlay}
    </main>
  );
}
