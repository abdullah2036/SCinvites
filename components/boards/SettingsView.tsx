/* eslint-disable */
// Ported from the Settings design board, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function SettingsView({ v }: { v: any }) {
  return (
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
          {v.profile}
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
          {v.extra}
        </section>
        <section id="joins" className="glass" style={S({ borderRadius: "30px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" })}>
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
{j.label}
              </span>
              <button type="button" onClick={j.ok} disabled={j.busy} style={S({ height: "34px", padding: "0 12px", border: "0", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", fontFamily: "TS, sans-serif", fontSize: "12px", fontWeight: "700", cursor: "pointer" })}>
موافقة
              </button>
              <button type="button" onClick={j.no} disabled={j.busy} aria-label="رفض" style={S({ width: "34px", height: "34px", border: "1px solid rgba(19,112,123,.3)", borderRadius: "50%", background: "transparent", color: "#8E3B2E", cursor: "pointer" })}>
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
              {l.actions}
            </div>
            </Fragment>
          ))}
        </section>
      </div>
      {v.overlay}
    </main>
  );
}
