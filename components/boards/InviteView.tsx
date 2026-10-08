/* eslint-disable */
// Ported from design-reference/Invite.dc.html, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';
import TrackMotion from '@/components/invitation/motion/TrackMotion';
export default function InviteView({ v }: { v: any }) {
  return (
    <>
    <div ref={v.rootRef} className={v.calm} data-phase={v.phase} style={S({ width: v.frameW, height: v.frameH, position: "relative", overflow: "hidden", fontFamily: "TS, sans-serif", color: "var(--tx)", ...css(v.vs) })}>
      {v.artworkUrl ? (
        <div aria-hidden="true" style={S({ position: "absolute", inset: "0 0 auto 0", height: "62%", zIndex: 0 })}>
          <img src={v.artworkUrl} alt="" style={S({ width: "100%", height: "100%", objectFit: "cover" })} />
          <div style={S({ position: "absolute", inset: "0", background: "linear-gradient(to bottom, transparent 30%, var(--sc) 100%)" })} />
        </div>
      ) : null}
 <TrackMotion track={v.track} kind="scene" />            <div style={S({ position: "absolute", inset: "0", display: "flex", flexDirection: "column", padding: "18px 16px 22px", boxSizing: "border-box", gap: "14px", overflowY: "auto", WebkitOverflowScrolling: "touch" })}>{/* scrolls when the screen is shorter than the card (in-app browsers with toolbars) */}
        {/* top bar: club wordmark on the right, replay + save on the left */}
        <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: "3" })}>
          <span style={S({ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 10%, transparent)", WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)", border: "1px solid color-mix(in srgb, var(--tx) 20%, transparent)", fontFamily: "TD, serif", fontSize: "15px" })}>
            <img src="/brand/logo-128.png" alt="شعار ملتقى المستجدين" style={S({ height: "24px", width: "auto", padding: "2px", borderRadius: "8px", background: "rgba(255,255,255,.9)" })} />
نادي العلوم
          </span>
          <span style={S({ display: "flex", gap: "8px" })}>
            <button type="button" onClick={v.save} aria-label="حفظ الدعوة" style={S({ height: "42px", padding: "0 14px", borderRadius: "999px", border: "1px solid color-mix(in srgb, var(--tx) 25%, transparent)", background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--tx)", display: "flex", alignItems: "center", gap: "6px", fontFamily: "TS, sans-serif", fontSize: "13px", cursor: "pointer" })}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
              </svg>
{v.saveLabel}
            </button>
            <button type="button" onClick={v.replay} aria-label="إعادة التجربة" style={S({ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid color-mix(in srgb, var(--tx) 25%, transparent)", background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </button>
          </span>
        </div>
        {v.isLoad ? (
          <>
          <div style={S({ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "30px" })}>
 <TrackMotion track={v.track} kind="loader" />                <span style={S({ fontSize: "14px", opacity: ".8" })}>
نجهّز دعوتك
            </span>
            <span style={S({ width: "140px", height: "2px", background: "color-mix(in srgb, var(--tx) 20%, transparent)", overflow: "hidden", display: "block" })}>
              <span className="growX" style={S({ display: "block", width: "100%", height: "100%", background: "var(--c2)", animationDuration: "2.4s" })} />
            </span>
          </div>
          </>
        ) : null}
        {v.notLoad ? (
          <>
          {/* the hero takes whatever height is left, so the motion always has room and nothing sits empty */}
          <div className={v.inK} style={S({ flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "10px", padding: "18px 24px 10px", margin: "0 -16px", background: "linear-gradient(0deg, transparent 0%, color-mix(in srgb, var(--sc) 70%, transparent) 22%, color-mix(in srgb, var(--sc) 55%, transparent) 60%, transparent 100%)" })}>{/* soft shade behind the title that fades out at both edges (no hard rectangle when the page scrolls) */}
            <span style={S({ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", lineHeight: "1.5", background: "color-mix(in srgb, var(--tx) 12%, transparent)", border: "1px solid color-mix(in srgb, var(--tx) 22%, transparent)", WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" })}>
              <span style={S({ width: "7px", height: "7px", borderRadius: "50%", background: "var(--c2)" })} />
{v.t.event}
            </span>
            <span style={S({ fontFamily: "TD, serif", fontSize: "50px", lineHeight: "1.2", textShadow: "0 4px 24px color-mix(in srgb, var(--tx) 0%, rgba(0,0,0,.35))" })}>
{v.t.title}
            </span>
            <span className="lat" style={S({ fontSize: "13px", lineHeight: "1.4", opacity: ".66", textAlign: "right" })}>
{v.t.latin}
            </span>
          </div>
          </>
        ) : null}
        {v.isGate ? (
          <>
          <div className={v.inK} style={S({ borderRadius: "28px", padding: "22px 20px", boxSizing: "border-box", background: "color-mix(in srgb, var(--tx) 10%, transparent)", WebkitBackdropFilter: "blur(24px) saturate(1.3)", backdropFilter: "blur(24px) saturate(1.3)", border: "1px solid color-mix(in srgb, var(--tx) 22%, transparent)", display: "flex", flexDirection: "column", gap: "12px", animationDelay: ".25s" })}>
            <h1 style={S({ margin: "0", fontFamily: "TD, serif", fontSize: "26px", lineHeight: "1.35" })}>
لديك دعوة من نادي العلوم
            </h1>
            <p style={S({ margin: "0", fontSize: "14px", lineHeight: "1.7", opacity: ".82" })}>
سجّل اسمك وبريدك لتفتح الدعوة وسيظهر اسمك داخلها
            </p>
            <input className="field" value={v.gname} onChange={v.onGname} aria-label="الاسم" placeholder="الاسم" style={S({ height: "52px", borderRadius: "999px", border: "1px solid color-mix(in srgb, var(--tx) 28%, transparent)", background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--tx)", padding: "0 20px", fontFamily: "TS, sans-serif", fontSize: "16px" })} />
            <input className="field" type="email" value={v.gmail} onChange={v.onGmail} aria-label="البريد الإلكتروني" placeholder="البريد الإلكتروني" style={S({ height: "52px", borderRadius: "999px", border: "1px solid color-mix(in srgb, var(--tx) 28%, transparent)", background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--tx)", padding: "0 20px", fontFamily: "TS, sans-serif", fontSize: "16px", direction: "ltr", textAlign: "right" })} />
            <button type="button" onClick={v.openInv} disabled={v.busy} style={S({ height: "54px", border: "0", borderRadius: "999px", background: "var(--c2)", color: "#0B1F24", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "16px", cursor: "pointer" })}>
افتح الدعوة
            </button>
            {v.gateError ? <span role="alert" style={S({ fontSize: "13px", textAlign: "center", color: "var(--c2)" })}>{v.gateError}</span> : null}
            <span style={S({ fontSize: "11px", lineHeight: "1.6", opacity: ".72", textAlign: "center" })}>
نستخدم اسمك وبريدك لهذه الدعوة وتأكيد الحضور فقط
            </span>
          </div>
          </>
        ) : null}
        {v.isOpen ? (
          <>
          <div className={v.inK} style={S({ position: "relative", marginTop: "26px", animationDelay: ".35s" })}>
            <div className={`th${v.k}`} style={S({ borderRadius: "26px", background: "rgba(246,243,236,.96)", color: "#0B2A30", padding: "24px 20px 16px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 30px 70px rgba(0,0,0,.35)" })}>
              <div style={S({ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "78px", minHeight: "64px" })}>
                <span style={S({ fontSize: "13px", lineHeight: "1.5", color: "#4B6166" })}>
يتشرّف نادي العلوم بدعوة
                </span>
                <span className={`nm${v.k}`} style={S({ fontFamily: "TD, serif", fontSize: v.nameSize, overflowWrap: "anywhere", lineHeight: "1.3" })}>
{v.shownName}
                </span>
                <span className={`nm${v.k}`} style={S({ fontSize: "13px", lineHeight: "1.5", color: "#3B5156" })}>
{v.shownOrg}
                </span>
              </div>
              <div style={S({ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px", fontSize: "13px", lineHeight: "1.5", paddingTop: "12px", borderTop: "1px solid #DCD6C8" })}>
                <div style={S({ display: "flex", flexDirection: "column", gap: "4px" })}>
                  <span style={S({ color: "#5C7277" })}>
التاريخ
                  </span>
                  <b>
{v.dateLabel}
                  </b>
                </div>
                <div style={S({ display: "flex", flexDirection: "column", gap: "4px" })}>
                  <span style={S({ color: "#5C7277" })}>
الوقت
                  </span>
                  <b>
{v.timeLabel}
                  </b>
                </div>
              </div>
              {v.placeOn ? (
                <>
                <div style={S({ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E1D6", overflow: "hidden", display: "flex", flexDirection: "column" })}>
                  {v.inPerson ? (
                    <>
                    <svg aria-hidden="true" width="100%" height="64" viewBox="0 0 330 64" preserveAspectRatio="xMidYMid slice" style={S({ display: "block" })}>
                      <rect width="330" height="64" fill="#EEF5F4" />
                      <path d="M-10 46 C60 36 110 58 170 44 S280 22 340 30" fill="none" stroke="#CDE3E6" strokeWidth="12" />
                      <path d="M-10 18 L340 26 M90 -10 L78 80 M210 -10 L222 80 M-10 60 L340 56" stroke="#FFFFFF" strokeWidth="7" />
                      <rect x="104" y="28" width="56" height="14" rx="3" fill="#E1ECEB" />
                      <rect x="236" y="34" width="44" height="18" rx="3" fill="#E1ECEB" />
                      <rect x="18" y="26" width="44" height="12" rx="3" fill="#E1ECEB" />
                      <circle className="ripple" cx="170" cy="26" r="11" fill="none" stroke="#13707B" strokeWidth="1.5" style={S({ transformBox: "fill-box", transformOrigin: "center", animationDuration: "2.2s" })} />
                      <path d="M170 34 C164 26 162 22 162 18 A8 8 0 0 1 178 18 C178 22 176 26 170 34 Z" fill="#0B3B41" />
                      <circle cx="170" cy="18" r="3" fill="#E7C873" />
                    </svg>
                    </>
                  ) : null}
                  {v.isOnline ? (
                    <>
                    <div aria-hidden="true" style={S({ height: "64px", background: "#0B3B41", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px", position: "relative" })}>
                      <span style={S({ flex: "1.4", height: "44px", borderRadius: "8px", background: "linear-gradient(160deg,#13707B,#0E4F56)", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "6px", boxSizing: "border-box" })}>
                        <span style={S({ display: "flex", gap: "2px", alignItems: "flex-end", height: "14px" })}>
                          <span className="bounce" style={S({ width: "3px", height: "14px", borderRadius: "2px", background: "#E7C873" })} />
                          <span className="bounce" style={S({ width: "3px", height: "14px", borderRadius: "2px", background: "#E7C873", animationDelay: ".15s" })} />
                          <span className="bounce" style={S({ width: "3px", height: "14px", borderRadius: "2px", background: "#E7C873", animationDelay: ".3s" })} />
                          <span className="bounce" style={S({ width: "3px", height: "14px", borderRadius: "2px", background: "#E7C873", animationDelay: ".45s" })} />
                        </span>
                        <span style={S({ position: "absolute", top: "8px", width: "16px", height: "16px", borderRadius: "50%", background: "#9FDCE0" })} />
                      </span>
                      <span style={S({ flex: "1", height: "44px", borderRadius: "8px", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                        <span style={S({ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(255,255,255,.4)" })} />
                      </span>
                      <span style={S({ flex: "1", height: "44px", borderRadius: "8px", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                        <span style={S({ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(255,255,255,.4)" })} />
                      </span>
                      <span style={S({ position: "absolute", left: "10px", top: "8px", display: "flex", alignItems: "center", gap: "5px", padding: "2px 8px", borderRadius: "999px", background: "rgba(0,0,0,.35)", fontSize: "10px", color: "#FFFFFF" })}>
                        <span className="pulse" style={S({ width: "6px", height: "6px", borderRadius: "50%", background: "#E2584F" })} />
مباشر
                      </span>
                    </div>
                    </>
                  ) : null}
                  <div style={S({ display: "flex", gap: "12px", alignItems: "center", padding: "10px 12px" })}>
                    <div style={S({ flex: "1", display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", lineHeight: "1.5", minWidth: "0" })}>
                      <span style={S({ color: "#5C7277" })}>
{v.placeLabel}
                      </span>
                      <b style={S({ fontSize: "15px", lineHeight: "1.4" })}>
{v.placeUrl ? <a href={v.placeUrl} target="_blank" rel="noopener noreferrer" style={S({ color: "inherit", textDecorationColor: "rgba(19,112,123,.45)", textUnderlineOffset: "3px" })}>{v.placeName}</a> : v.placeName}
                      </b>
                    </div>
                    {v.qrSvg ? (
<div style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" })}>
                      <span role="img" aria-label={v.qrLabel} style={S({ display: "block", width: "70px", height: "70px", color: "#0B2A30", background: "#FFFFFF" })} dangerouslySetInnerHTML={{ __html: v.qrSvg }} />
                      <span style={S({ fontSize: "10px", lineHeight: "1.4", color: "#5C7277", marginTop: "2px" })}>
{v.qrLabel}
                      </span>
                    </div>
                    ) : null}
                  </div>
                </div>
                </>
              ) : null}
            </div>
            <span className={`ir${v.k}`} style={S({ position: "absolute", left: "0", top: "-40px", width: "112px", height: "112px", borderRadius: "50%", border: "2px solid var(--c2)", pointerEvents: "none" })} />
            <div className={`sg${v.k}`} style={S({ position: "absolute", left: "0", top: "-40px", width: "112px", height: "112px", borderRadius: "50%", background: "radial-gradient(circle at 38% 32%, #FFFFFF, #F3EEE3 70%, #E6DFD0)", boxShadow: "0 10px 24px rgba(0,0,0,.3), inset 0 0 0 1px rgba(201,154,46,.35)", display: "flex", alignItems: "center", justifyContent: "center" })}>
              <div style={S({ position: "relative", width: "98px", height: "98px", color: "#0B3B41" })} role="img" aria-label="ختم">
                <svg width="98" height="98" viewBox="0 0 120 120" aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                  <defs>
                    <path id={v.sealPathId} d="M60 60 m-34 0 a34 34 0 1 1 68 0 a34 34 0 1 1 -68 0" />
                  </defs>
                  <polygon points="110.00,60.00 106.32,64.05 109.24,68.68 104.92,72.04 106.98,77.10 102.14,79.65 103.30,85.00 98.09,86.67 98.30,92.14 92.88,92.88 92.14,98.30 86.67,98.09 85.00,103.30 79.65,102.14 77.10,106.98 72.04,104.92 68.68,109.24 64.05,106.32 60.00,110.00 55.95,106.32 51.32,109.24 47.96,104.92 42.90,106.98 40.35,102.14 35.00,103.30 33.33,98.09 27.86,98.30 27.12,92.88 21.70,92.14 21.91,86.67 16.70,85.00 17.86,79.65 13.02,77.10 15.08,72.04 10.76,68.68 13.68,64.05 10.00,60.00 13.68,55.95 10.76,51.32 15.08,47.96 13.02,42.90 17.86,40.35 16.70,35.00 21.91,33.33 21.70,27.86 27.12,27.12 27.86,21.70 33.33,21.91 35.00,16.70 40.35,17.86 42.90,13.02 47.96,15.08 51.32,10.76 55.95,13.68 60.00,10.00 64.05,13.68 68.68,10.76 72.04,15.08 77.10,13.02 79.65,17.86 85.00,16.70 86.67,21.91 92.14,21.70 92.88,27.12 98.30,27.86 98.09,33.33 103.30,35.00 102.14,40.35 106.98,42.90 104.92,47.96 109.24,51.32 106.32,55.95" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="2.4" />
                  <circle cx="60" cy="60" r="26" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 2.5" />
                  <text fontFamily="TS" fontSize="8" fontWeight="700" fill="currentColor" letterSpacing=".5">
                    <textPath href={"#" + v.sealPathId} startOffset="0">
نادي العلوم · دعوة رسمية · نادي العلوم · دعوة رسمية ·
                    </textPath>
                  </text>
                  <path d="M60 26 l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z" fill="currentColor" />
                </svg>
                <span style={S({ position: "absolute", left: "0", right: "0", top: "50%", transform: "translateY(-38%)", textAlign: "center", fontFamily: "TD, serif", fontSize: "16px", lineHeight: "1", color: "currentColor" })}>
{v.sealLabel}
                </span>
              </div>
            </div>
          </div>
          <div className={v.inK} style={S({ animationDelay: "2.3s" })}>
            {v.rsvpOpen ? (
              <>
              <div style={S({ display: "flex", gap: "10px" })}>
                <button type="button" onClick={v.yes} style={S({ flex: "1.4", height: "56px", border: "0", borderRadius: "999px", background: "var(--c2)", color: "#0B1F24", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "16px", cursor: "pointer" })}>
سأحضر
                </button>
                <button type="button" onClick={v.no} style={S({ flex: "1", height: "56px", border: "1px solid color-mix(in srgb, var(--tx) 35%, transparent)", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--tx)", fontFamily: "TS, sans-serif", fontSize: "16px", cursor: "pointer" })}>
أعتذر
                </button>
              </div>
              </>
            ) : null}
            {v.answered ? (
              <>
              <div className="inA" style={S({ display: "flex", gap: "10px" })}>
                <div style={S({ flex: "1.4", height: "56px", borderRadius: "999px", border: "1px solid color-mix(in srgb, var(--tx) 30%, transparent)", background: "color-mix(in srgb, var(--tx) 10%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", fontFamily: "TD, serif", fontSize: "19px" })}>
                  <span style={S({ width: "10px", height: "10px", borderRadius: "50%", background: "var(--c2)" })} />
{v.answerTitle}
                </div>
                {v.going ? (
                  <>
                  <a href={v.calHref} download="invitation.ics" onClick={v.addCal} style={S({ textDecoration: "none", flex: "1", height: "56px", border: "0", borderRadius: "999px", background: "var(--c2)", color: "#0B1F24", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" })}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1F24" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M3 10h18M8 3v4M16 3v4" />
                    </svg>
{v.calLabel}
                  </a>
                  </>
                ) : null}
              </div>
              </>
            ) : null}
          </div>
          </>
        ) : null}
      </div>
    </div>
    </>
  );
}
