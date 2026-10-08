/* eslint-disable */
// Ported from the Create design board, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function CreateView({ v }: { v: any }) {
  const audBlock = (
            <div className="glass" style={S({ borderRadius: "26px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" })}>
              <span style={S({ fontSize: "13px", fontWeight: "700", color: "#13707B" })}>
لمن الدعوة
              </span>
              <div role="group" style={S({ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "6px", padding: "5px", borderRadius: "999px", background: "rgba(255,255,255,.6)" })}>
                {(v.audiences ?? []).map((o: any, oIndex: number) => (
                  <Fragment key={oIndex}>
                  <button type="button" className="chip" onClick={o.pick} aria-pressed={o.on} style={S({ height: "40px", border: "0", borderRadius: "999px", background: o.bg, color: o.text, fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "13px" })}>
{o.name}
                  </button>
                  </Fragment>
                ))}
              </div>
            </div>
  );
  return (
    <>
    <div className="pg" style={S({ minHeight: "1300px", position: "relative", overflow: "hidden", fontFamily: "TS, sans-serif", color: "#18292C", background: "radial-gradient(55% 45% at 88% 6%, #BFE3E3 0%, rgba(191,227,227,0) 70%), radial-gradient(45% 40% at 6% 96%, #F2E1B4 0%, rgba(242,225,180,0) 70%), radial-gradient(60% 55% at 45% 55%, #DCEFEE 0%, #EAF3F0 55%, #F4F2EC 100%)", padding: "26px 44px 48px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "20px" })}>
      <header className="stack" style={S({ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" })}>
        <div style={S({ display: "flex", alignItems: "center", gap: "14px" })}>
          <a href={v.homeHref} aria-label="رجوع" style={S({ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.9)", background: "rgba(255,255,255,.6)", display: "flex", alignItems: "center", justifyContent: "center" })}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B3B41" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </a>
          <div style={S({ display: "flex", flexDirection: "column", gap: "2px" })}>
            <span style={S({ fontSize: "13px", color: "#3E5456" })}>
{v.crumb}
            </span>
            <h1 className="h1m" style={S({ margin: "0", fontFamily: "TD, serif", fontSize: "34px", color: "#0B3B41" })}>
دعوة جديدة
            </h1>
          </div>
        </div>
        <span style={S({ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", background: "rgba(255,255,255,.6)", border: "1px solid rgba(255,255,255,.9)", fontSize: "13px", color: "#0B3B41" })}>
          <span style={S({ width: "8px", height: "8px", borderRadius: "50%", background: v.roleDot })} />
{v.roleLine}
        </span>
      </header>
      {v.leader ? (
        <>
        <div className="glass" style={S({ borderRadius: "22px", padding: "12px 18px", fontSize: "14px", color: "#3E5456", display: "flex", gap: "10px", alignItems: "center" })}>
          <span style={S({ width: "8px", height: "8px", borderRadius: "50%", background: "#C99A2E", flex: "0 0 8px" })} />
أرسل طلبك قبل الفعالية بثلاثة أيام على الأقل
        </div>
        </>
      ) : null}
      <div style={S({ position: "relative", display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "flex-start" })}>
        <section style={S({ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" })}>
          {v.admin ? audBlock : null}
          {v.leader ? (
            <>
            <div className="glass" style={S({ borderRadius: "999px", padding: "6px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "4px" })}>
              {(v.steps ?? []).map((st: any, stIndex: number) => (
                <Fragment key={stIndex}>
                <button type="button" onClick={st.go} aria-current={st.cur} style={S({ height: "38px", border: "0", borderRadius: "999px", background: st.bg, color: st.text, fontFamily: "TS, sans-serif", fontSize: "13px", fontWeight: "700", cursor: "pointer" })}>
{st.name}
                </button>
                </Fragment>
              ))}
            </div>
            </>
          ) : null}
          {v.showTpl ? (
            <>
            {v.eventPicker}
            <div className="glass" style={S({ borderRadius: "26px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" })}>
              <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "baseline" })}>
                <span style={S({ fontSize: "13px", fontWeight: "700", color: "#13707B" })}>
القالب
                </span>
                <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{v.tplNote}
                </span>
              </div>
              <div className="g4" style={S({ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" })}>
                {v.av_club ? (
                  <>
                  <button type="button" className="lift" onClick={v.pk0} aria-pressed={v.on0} style={S({ border: `2px solid ${v.bd0}`, borderRadius: "20px", padding: "6px", background: "rgba(255,255,255,.55)", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer", width: "100%" })}>
                    <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "76px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                      <div style={S({ position: "relative", width: "46px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center" })}>
                        <span className="ripple" style={S({ position: "absolute", inset: "7px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "2.4s" })} />
                        <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", border: "1.5px solid color-mix(in srgb, var(--c1) 50%, transparent)", animationDuration: "3s" })}>
                          <span style={S({ position: "absolute", left: "50%", top: "-6px", width: "12px", height: "12px", marginLeft: "-6px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)" })} />
                        </div>
                        <div style={S({ width: "32px", height: "32px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 10px 26px rgba(0,0,0,.25)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                          <img className="formsL" src="/brand/logo-128.png" alt="" style={S({ width: "24px", height: "auto" })} />
                        </div>
                      </div>
                    </span>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#2C3F42", textAlign: "right", padding: "0 4px 2px" })}>
النادي
                    </span>
                  </button>
                  </>
                ) : null}
                {v.av_space ? (
                  <>
                  <button type="button" className="lift" onClick={v.pk1} aria-pressed={v.on1} style={S({ border: `2px solid ${v.bd1}`, borderRadius: "20px", padding: "6px", background: "rgba(255,255,255,.55)", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer", width: "100%" })}>
                    <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "76px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                      <div style={S({ position: "relative", width: "46px", height: "46px" })}>
                        <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", border: "1.5px solid var(--c1)" })}>
                          <span style={S({ position: "absolute", left: "50%", top: "-6px", width: "12px", height: "12px", marginLeft: "-6px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 14px var(--c2)" })} />
                        </div>
                        <div className="spinR" style={S({ position: "absolute", inset: "9px", borderRadius: "50%", border: "1px dashed color-mix(in srgb, var(--tx) 35%, transparent)" })} />
                        <span className="pulse" style={S({ position: "absolute", left: "50%", top: "50%", width: "8px", height: "8px", margin: "-4px 0 0 -4px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, var(--tx), var(--c1))" })} />
                      </div>
                    </span>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#2C3F42", textAlign: "right", padding: "0 4px 2px" })}>
الفلك والفضاء
                    </span>
                  </button>
                  </>
                ) : null}
                {v.av_chem ? (
                  <>
                  <button type="button" className="lift" onClick={v.pk2} aria-pressed={v.on2} style={S({ border: `2px solid ${v.bd2}`, borderRadius: "20px", padding: "6px", background: "rgba(255,255,255,.55)", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer", width: "100%" })}>
                    <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "76px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                      <div style={S({ display: "flex", gap: "1px", direction: "ltr" })}>
                        <span className="litseq" style={S({ display: "block", animationDelay: "0.0s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "12px", height: "13px", padding: "1px 1px", boxSizing: "border-box", borderRadius: "2px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "2px", fontWeight: "700", opacity: ".9" })}>
                              <span>
16
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "1px" })} />
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "6px", textAlign: "center" })}>
S
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "2px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كبريت
                            </span>
                          </span>
                        </span>
                        <span className="litseq" style={S({ display: "block", animationDelay: "0.3s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "12px", height: "13px", padding: "1px 1px", boxSizing: "border-box", borderRadius: "2px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "2px", fontWeight: "700", opacity: ".9" })}>
                              <span>
6
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "1px" })} />
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "6px", textAlign: "center" })}>
C
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "2px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كربون
                            </span>
                          </span>
                        </span>
                        <span className="litseq" style={S({ display: "block", animationDelay: "0.6s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "12px", height: "13px", padding: "1px 1px", boxSizing: "border-box", borderRadius: "2px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "2px", fontWeight: "700", opacity: ".9" })}>
                              <span>
92
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "1px" })} />
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "6px", textAlign: "center" })}>
U
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "2px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                            </span>
                          </span>
                        </span>
                        <span className="litseq" style={S({ display: "block", animationDelay: "0.9s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "12px", height: "13px", padding: "1px 1px", boxSizing: "border-box", borderRadius: "2px", background: "linear-gradient(160deg,#F7E3A6,#C99A2E)", border: "1.5px solid var(--c2)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "#0B1F24", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "2px", fontWeight: "700", opacity: ".9" })}>
                              <span>
✦
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "1px" })} />
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "6px", textAlign: "center" })}>
Q
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "2px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
نادي العلوم
                            </span>
                          </span>
                        </span>
                        <span className="litseq" style={S({ display: "block", animationDelay: "1.2s" })}>
                          <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "12px", height: "13px", padding: "1px 1px", boxSizing: "border-box", borderRadius: "2px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                            <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "2px", fontWeight: "700", opacity: ".9" })}>
                              <span>
92
                              </span>
                              <span style={S({ fontWeight: "400", fontSize: "1px" })} />
                            </span>
                            <span style={S({ fontFamily: "TD, serif", fontSize: "6px", textAlign: "center" })}>
U
                            </span>
                            <span style={S({ fontFamily: "TS, sans-serif", fontSize: "2px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#2C3F42", textAlign: "right", padding: "0 4px 2px" })}>
الكيمياء
                    </span>
                  </button>
                  </>
                ) : null}
                {v.av_phys ? (
                  <>
                  <button type="button" className="lift" onClick={v.pk3} aria-pressed={v.on3} style={S({ border: `2px solid ${v.bd3}`, borderRadius: "20px", padding: "6px", background: "rgba(255,255,255,.55)", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer", width: "100%" })}>
                    <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "76px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                      <div style={S({ position: "relative", width: "46px", height: "46px" })}>
                        <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", animationDuration: "2.2s" })}>
                          <div style={S({ position: "absolute", left: "0", right: "0", top: "50%", height: "16px", marginTop: "-8px", borderRadius: "50%", border: "1.5px solid var(--c1)", transform: "rotate(0deg)" })}>
                            <span style={S({ position: "absolute", right: "-4px", top: "50%", width: "8px", height: "8px", marginTop: "-4px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 10px var(--c2)" })} />
                          </div>
                        </div>
                        <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", animationDuration: "2.8s" })}>
                          <div style={S({ position: "absolute", left: "0", right: "0", top: "50%", height: "16px", marginTop: "-8px", borderRadius: "50%", border: "1.5px solid var(--c1)", transform: "rotate(60deg)" })}>
                            <span style={S({ position: "absolute", right: "-4px", top: "50%", width: "8px", height: "8px", marginTop: "-4px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 10px var(--c2)" })} />
                          </div>
                        </div>
                        <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", animationDuration: "3.4s" })}>
                          <div style={S({ position: "absolute", left: "0", right: "0", top: "50%", height: "16px", marginTop: "-8px", borderRadius: "50%", border: "1.5px solid var(--c1)", transform: "rotate(120deg)" })}>
                            <span style={S({ position: "absolute", right: "-4px", top: "50%", width: "8px", height: "8px", marginTop: "-4px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 10px var(--c2)" })} />
                          </div>
                        </div>
                        <span className="pulse" style={S({ position: "absolute", left: "50%", top: "50%", width: "14px", height: "14px", margin: "-7px 0 0 -7px", borderRadius: "50%", background: "var(--c2)" })} />
                      </div>
                    </span>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#2C3F42", textAlign: "right", padding: "0 4px 2px" })}>
الفيزياء
                    </span>
                  </button>
                  </>
                ) : null}
                {v.av_bio ? (
                  <>
                  <button type="button" className="lift" onClick={v.pk4} aria-pressed={v.on4} style={S({ border: `2px solid ${v.bd4}`, borderRadius: "20px", padding: "6px", background: "rgba(255,255,255,.55)", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer", width: "100%" })}>
                    <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "76px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                      <div style={S({ display: "flex", gap: "2px", alignItems: "center", height: "28px" })}>
                        <div style={S({ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" })}>
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.00s" })} />
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "0.60s" })} />
                        </div>
                        <div style={S({ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" })}>
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.12s" })} />
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "0.72s" })} />
                        </div>
                        <div style={S({ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" })}>
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.24s" })} />
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "0.84s" })} />
                        </div>
                        <div style={S({ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" })}>
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.36s" })} />
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "0.96s" })} />
                        </div>
                        <div style={S({ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" })}>
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.48s" })} />
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "1.08s" })} />
                        </div>
                        <div style={S({ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" })}>
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.60s" })} />
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "1.20s" })} />
                        </div>
                        <div style={S({ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" })}>
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.72s" })} />
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "1.32s" })} />
                        </div>
                        <div style={S({ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" })}>
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.84s" })} />
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "1.44s" })} />
                        </div>
                        <div style={S({ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" })}>
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.96s" })} />
                          <span className="osc" style={S({ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "1.56s" })} />
                        </div>
                      </div>
                    </span>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#2C3F42", textAlign: "right", padding: "0 4px 2px" })}>
الأحياء
                    </span>
                  </button>
                  </>
                ) : null}
                {v.av_math ? (
                  <>
                  <button type="button" className="lift" onClick={v.pk5} aria-pressed={v.on5} style={S({ border: `2px solid ${v.bd5}`, borderRadius: "20px", padding: "6px", background: "rgba(255,255,255,.55)", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer", width: "100%" })}>
                    <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "76px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                      <div style={S({ display: "flex", alignItems: "flex-end", gap: "3px", height: "32px", borderBottom: "1.5px solid color-mix(in srgb, var(--tx) 40%, transparent)", padding: "0 6px" })}>
                        <span className="bounce" style={S({ width: "5px", height: "9px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.0s" })} />
                        <span className="bounce" style={S({ width: "5px", height: "15px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.1s" })} />
                        <span className="bounce" style={S({ width: "5px", height: "20px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.2s" })} />
                        <span className="bounce" style={S({ width: "5px", height: "26px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.3s" })} />
                        <span className="bounce" style={S({ width: "5px", height: "31px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.4s" })} />
                        <span className="bounce" style={S({ width: "5px", height: "37px", borderRadius: "4px 4px 0 0", background: "var(--c2)", animationDelay: "0.5s" })} />
                      </div>
                    </span>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#2C3F42", textAlign: "right", padding: "0 4px 2px" })}>
الرياضيات المالية
                    </span>
                  </button>
                  </>
                ) : null}
                {v.av_sport ? (
                  <>
                  <button type="button" className="lift" onClick={v.pk6} aria-pressed={v.on6} style={S({ border: `2px solid ${v.bd6}`, borderRadius: "20px", padding: "6px", background: "rgba(255,255,255,.55)", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer", width: "100%" })}>
                    <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "76px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                      <svg width="40" height="45" viewBox="-50 -62 100 114" aria-hidden="true">
                        <defs>
                          <linearGradient id="bz40" x1="0" y1="-1" x2="0" y2="1">
                            <stop offset="0" stopColor="var(--c2)" />
                            <stop offset="1" stopColor="var(--c1)" />
                          </linearGradient>
                          <radialGradient id="fc40" cx=".4" cy=".35" r=".8">
                            <stop offset="0" stopColor="#FFFFFF" stopOpacity=".22" />
                            <stop offset="1" stopColor="#FFFFFF" stopOpacity=".02" />
                          </radialGradient>
                        </defs>
                        <rect x="-7" y="-60" width="14" height="8" rx="2.5" fill="url(#bz40)" />
                        <rect x="-3" y="-53" width="6" height="6" fill="var(--c1)" />
                        <rect x="30" y="-46" width="9" height="6" rx="2" fill="var(--c1)" transform="rotate(40 34 -43)" />
                        <circle r="46" fill="none" stroke="url(#bz40)" strokeWidth="5" />
                        <circle r="42.5" fill="url(#fc40)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(0)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(6)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(12)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(18)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(24)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(30)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(36)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(42)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(48)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(54)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(60)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(66)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(72)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(78)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(84)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(90)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(96)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(102)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(108)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(114)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(120)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(126)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(132)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(138)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(144)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(150)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(156)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(162)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(168)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(174)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(180)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(186)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(192)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(198)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(204)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(210)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(216)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(222)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(228)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(234)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(240)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(246)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(252)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(258)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(264)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(270)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(276)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(282)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(288)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(294)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(300)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(306)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(312)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(318)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(324)" />
                        <line x1="0" y1="-40" x2="0" y2="-34" stroke="var(--c1)" strokeOpacity="1" strokeWidth="1.8" transform="rotate(330)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(336)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(342)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(348)" />
                        <line x1="0" y1="-40" x2="0" y2="-37" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(354)" />
                        <circle className="sweep" r="30" fill="none" stroke="var(--c2)" strokeOpacity=".55" strokeWidth="5" pathLength="100" transform="rotate(-90)" />
                        <circle cx="0" cy="16" r="8" fill="none" stroke="var(--c1)" strokeOpacity=".6" strokeWidth="1" />
                        <line className="spin" x1="0" y1="16" x2="0" y2="10" stroke="var(--c1)" strokeWidth="1.4" style={S({ transformOrigin: "0px 16px", animationDuration: "8s" })} />
                        <g className="spin" style={S({ transformOrigin: "0px 0px", animationDuration: "4s" })}>
                          <line x1="0" y1="8" x2="0" y2="-38" stroke="var(--c2)" strokeWidth="2" strokeLinecap="round" />
                          <circle cy="8" r="2.6" fill="var(--c2)" />
                        </g>
                        <circle r="3.4" fill="var(--c2)" />
                        <circle r="1.3" fill="#0B1F24" />
                      </svg>
                    </span>
                    <span style={S({ fontSize: "12px", fontWeight: "700", color: "#2C3F42", textAlign: "right", padding: "0 4px 2px" })}>
الرياضي
                    </span>
                  </button>
                  </>
                ) : null}
              </div>
              <div style={S({ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" })}>
                <span style={S({ fontSize: "13px", color: "#3E5456" })}>
اللون
                </span>
                {(v.variants ?? []).map((v: any, vIndex: number) => (
                  <Fragment key={vIndex}>
                  <button type="button" onClick={v.pick} aria-pressed={v.on} style={S({ display: "inline-flex", alignItems: "center", gap: "8px", height: "38px", padding: "0 14px 0 6px", borderRadius: "999px", border: `1.5px solid ${v.border}`, background: "rgba(255,255,255,.7)", fontFamily: "TS, sans-serif", fontSize: "13px", cursor: "pointer" })}>
                    <span style={S({ width: "26px", height: "26px", borderRadius: "50%", background: v.bg, border: "1px solid rgba(0,0,0,.08)" })} />
{v.name}
                  </button>
                  </Fragment>
                ))}
              </div>
            </div>
            </>
          ) : null}
          {v.showPeople ? (
            <>
            {v.leader ? audBlock : null}
            <div className="glass" style={S({ borderRadius: "26px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" })}>
              <span style={S({ fontSize: "13px", fontWeight: "700", color: "#13707B" })}>
الختم
              </span>
              <div className="g5" style={S({ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "8px" })}>
                {v.st0 ? (
<button type="button" onClick={v.sp0} aria-pressed={v.so0} style={S({ border: `1.5px solid ${v.sb0}`, background: v.sg0, borderRadius: "20px", padding: "10px 2px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                  <span className={v.pr0} style={S({ display: "block", filter: "drop-shadow(0 6px 10px rgba(0,0,0,.2))" })}>
                    <svg width="60" height="60" viewBox="0 0 120 120" aria-hidden="true">
                      <defs>
                        <radialGradient id="wVIP" cx=".38" cy=".32" r=".8">
                          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".45" />
                          <stop offset=".35" stopColor="#B8892A" stopOpacity="1" />
                          <stop offset="1" stopColor="#000000" stopOpacity=".35" />
                        </radialGradient>
                      </defs>
                      <polygon points="108.32,60.00 110.32,67.97 108.19,75.66 104.46,82.65 99.30,88.55 96.39,96.39 90.29,101.70 82.73,104.61 75.46,107.58 67.62,108.08 60.00,107.52 52.28,108.75 44.42,107.96 38.28,102.63 29.75,101.64 25.59,94.41 20.63,88.60 17.49,81.66 10.08,76.22 9.44,68.01 8.12,60.00 10.04,52.09 14.66,45.27 16.21,37.69 19.56,30.62 26.00,26.00 29.28,17.72 37.60,16.04 45.08,14.09 51.93,9.05 60.00,11.88 68.16,8.50 75.38,12.67 82.82,15.22 88.93,20.18 95.30,24.70 99.18,31.53 102.49,38.35 109.29,43.98 108.08,52.39" fill="#B8892A" />
                      <polygon points="108.32,60.00 110.32,67.97 108.19,75.66 104.46,82.65 99.30,88.55 96.39,96.39 90.29,101.70 82.73,104.61 75.46,107.58 67.62,108.08 60.00,107.52 52.28,108.75 44.42,107.96 38.28,102.63 29.75,101.64 25.59,94.41 20.63,88.60 17.49,81.66 10.08,76.22 9.44,68.01 8.12,60.00 10.04,52.09 14.66,45.27 16.21,37.69 19.56,30.62 26.00,26.00 29.28,17.72 37.60,16.04 45.08,14.09 51.93,9.05 60.00,11.88 68.16,8.50 75.38,12.67 82.82,15.22 88.93,20.18 95.30,24.70 99.18,31.53 102.49,38.35 109.29,43.98 108.08,52.39" fill="url(#wVIP)" />
                      <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(0,0,0,.25)" strokeWidth="3" />
                      <circle cx="60" cy="61" r="34" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
                      <text x="60" y="68" textAnchor="middle" fontFamily="TD" fontSize="20" fill="rgba(255,255,255,.92)">
VIP
                      </text>
                    </svg>
                  </span>
                  <span style={S({ fontSize: "12px", fontWeight: "700" })}>
VIP
                  </span>
                </button>
                ) : null}
                {v.st1 ? (
<button type="button" onClick={v.sp1} aria-pressed={v.so1} style={S({ border: `1.5px solid ${v.sb1}`, background: v.sg1, borderRadius: "20px", padding: "10px 2px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                  <span className={v.pr1} style={S({ display: "block", filter: "drop-shadow(0 6px 10px rgba(0,0,0,.2))" })}>
                    <svg width="60" height="60" viewBox="0 0 120 120" aria-hidden="true">
                      <defs>
                        <radialGradient id="wضيف" cx=".38" cy=".32" r=".8">
                          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".45" />
                          <stop offset=".35" stopColor="#13707B" stopOpacity="1" />
                          <stop offset="1" stopColor="#000000" stopOpacity=".35" />
                        </radialGradient>
                      </defs>
                      <polygon points="108.32,60.00 110.32,67.97 108.19,75.66 104.46,82.65 99.30,88.55 96.39,96.39 90.29,101.70 82.73,104.61 75.46,107.58 67.62,108.08 60.00,107.52 52.28,108.75 44.42,107.96 38.28,102.63 29.75,101.64 25.59,94.41 20.63,88.60 17.49,81.66 10.08,76.22 9.44,68.01 8.12,60.00 10.04,52.09 14.66,45.27 16.21,37.69 19.56,30.62 26.00,26.00 29.28,17.72 37.60,16.04 45.08,14.09 51.93,9.05 60.00,11.88 68.16,8.50 75.38,12.67 82.82,15.22 88.93,20.18 95.30,24.70 99.18,31.53 102.49,38.35 109.29,43.98 108.08,52.39" fill="#13707B" />
                      <polygon points="108.32,60.00 110.32,67.97 108.19,75.66 104.46,82.65 99.30,88.55 96.39,96.39 90.29,101.70 82.73,104.61 75.46,107.58 67.62,108.08 60.00,107.52 52.28,108.75 44.42,107.96 38.28,102.63 29.75,101.64 25.59,94.41 20.63,88.60 17.49,81.66 10.08,76.22 9.44,68.01 8.12,60.00 10.04,52.09 14.66,45.27 16.21,37.69 19.56,30.62 26.00,26.00 29.28,17.72 37.60,16.04 45.08,14.09 51.93,9.05 60.00,11.88 68.16,8.50 75.38,12.67 82.82,15.22 88.93,20.18 95.30,24.70 99.18,31.53 102.49,38.35 109.29,43.98 108.08,52.39" fill="url(#wضيف)" />
                      <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(0,0,0,.25)" strokeWidth="3" />
                      <circle cx="60" cy="61" r="34" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
                      <text x="60" y="68" textAnchor="middle" fontFamily="TD" fontSize="20" fill="rgba(255,255,255,.92)">
ضيف
                      </text>
                    </svg>
                  </span>
                  <span style={S({ fontSize: "12px", fontWeight: "700" })}>
ضيف
                  </span>
                </button>
                ) : null}
                {v.st2 ? (
<button type="button" onClick={v.sp2} aria-pressed={v.so2} style={S({ border: `1.5px solid ${v.sb2}`, background: v.sg2, borderRadius: "20px", padding: "10px 2px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                  <span className={v.pr2} style={S({ display: "block", filter: "drop-shadow(0 6px 10px rgba(0,0,0,.2))" })}>
                    <svg width="60" height="60" viewBox="0 0 120 120" aria-hidden="true">
                      <defs>
                        <radialGradient id="wمتحدث" cx=".38" cy=".32" r=".8">
                          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".45" />
                          <stop offset=".35" stopColor="#2D4F7C" stopOpacity="1" />
                          <stop offset="1" stopColor="#000000" stopOpacity=".35" />
                        </radialGradient>
                      </defs>
                      <polygon points="110.24,60.00 110.62,68.02 108.73,75.83 106.18,83.53 99.58,88.76 97.00,97.00 89.59,100.72 83.26,105.65 75.84,108.76 68.16,111.50 60.00,108.87 52.28,108.73 44.21,108.59 37.11,104.93 29.87,101.46 25.12,94.88 17.71,90.73 17.63,81.59 11.39,75.79 11.24,67.72 12.37,60.00 9.75,52.04 14.58,45.24 16.63,37.90 20.26,31.13 25.86,25.86 31.60,20.91 38.27,17.35 44.01,10.80 52.50,12.67 60.00,11.70 67.49,12.70 76.08,10.50 82.80,15.25 90.34,18.24 97.03,22.97 100.43,30.62 104.08,37.54 107.02,44.72 108.22,52.36" fill="#2D4F7C" />
                      <polygon points="110.24,60.00 110.62,68.02 108.73,75.83 106.18,83.53 99.58,88.76 97.00,97.00 89.59,100.72 83.26,105.65 75.84,108.76 68.16,111.50 60.00,108.87 52.28,108.73 44.21,108.59 37.11,104.93 29.87,101.46 25.12,94.88 17.71,90.73 17.63,81.59 11.39,75.79 11.24,67.72 12.37,60.00 9.75,52.04 14.58,45.24 16.63,37.90 20.26,31.13 25.86,25.86 31.60,20.91 38.27,17.35 44.01,10.80 52.50,12.67 60.00,11.70 67.49,12.70 76.08,10.50 82.80,15.25 90.34,18.24 97.03,22.97 100.43,30.62 104.08,37.54 107.02,44.72 108.22,52.36" fill="url(#wمتحدث)" />
                      <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(0,0,0,.25)" strokeWidth="3" />
                      <circle cx="60" cy="61" r="34" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
                      <text x="60" y="68" textAnchor="middle" fontFamily="TD" fontSize="16" fill="rgba(255,255,255,.92)">
متحدث
                      </text>
                    </svg>
                  </span>
                  <span style={S({ fontSize: "12px", fontWeight: "700" })}>
متحدث
                  </span>
                </button>
                ) : null}
                {v.st3 ? (
<button type="button" onClick={v.sp3} aria-pressed={v.so3} style={S({ border: `1.5px solid ${v.sb3}`, background: v.sg3, borderRadius: "20px", padding: "10px 2px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                  <span className={v.pr3} style={S({ display: "block", filter: "drop-shadow(0 6px 10px rgba(0,0,0,.2))" })}>
                    <svg width="60" height="60" viewBox="0 0 120 120" aria-hidden="true">
                      <defs>
                        <radialGradient id="wشريك" cx=".38" cy=".32" r=".8">
                          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".45" />
                          <stop offset=".35" stopColor="#5E584C" stopOpacity="1" />
                          <stop offset="1" stopColor="#000000" stopOpacity=".35" />
                        </radialGradient>
                      </defs>
                      <polygon points="108.06,60.00 107.56,67.53 108.02,75.60 103.12,81.97 98.96,88.31 95.23,95.23 89.15,100.12 82.05,103.27 75.28,107.04 68.09,111.07 60.00,108.16 52.42,107.84 45.28,105.31 37.89,103.39 31.80,98.81 22.93,97.07 20.30,88.84 13.27,83.81 14.21,74.88 8.62,68.14 9.97,60.00 9.67,52.03 11.68,44.30 16.47,37.82 20.63,31.40 24.01,24.01 31.69,21.04 38.41,17.62 44.13,11.16 52.07,9.96 60.00,11.20 67.84,10.52 76.08,10.50 82.20,16.43 88.28,21.07 95.06,24.94 99.11,31.59 103.96,37.60 105.33,45.27 110.69,51.97" fill="#5E584C" />
                      <polygon points="108.06,60.00 107.56,67.53 108.02,75.60 103.12,81.97 98.96,88.31 95.23,95.23 89.15,100.12 82.05,103.27 75.28,107.04 68.09,111.07 60.00,108.16 52.42,107.84 45.28,105.31 37.89,103.39 31.80,98.81 22.93,97.07 20.30,88.84 13.27,83.81 14.21,74.88 8.62,68.14 9.97,60.00 9.67,52.03 11.68,44.30 16.47,37.82 20.63,31.40 24.01,24.01 31.69,21.04 38.41,17.62 44.13,11.16 52.07,9.96 60.00,11.20 67.84,10.52 76.08,10.50 82.20,16.43 88.28,21.07 95.06,24.94 99.11,31.59 103.96,37.60 105.33,45.27 110.69,51.97" fill="url(#wشريك)" />
                      <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(0,0,0,.25)" strokeWidth="3" />
                      <circle cx="60" cy="61" r="34" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
                      <text x="60" y="68" textAnchor="middle" fontFamily="TD" fontSize="16" fill="rgba(255,255,255,.92)">
شريك
                      </text>
                    </svg>
                  </span>
                  <span style={S({ fontSize: "12px", fontWeight: "700" })}>
شريك
                  </span>
                </button>
                ) : null}
                {v.st4 ? (
<button type="button" onClick={v.sp4} aria-pressed={v.so4} style={S({ border: `1.5px solid ${v.sb4}`, background: v.sg4, borderRadius: "20px", padding: "10px 2px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                  <span className={v.pr4} style={S({ display: "block", filter: "drop-shadow(0 6px 10px rgba(0,0,0,.2))" })}>
                    <svg width="60" height="60" viewBox="0 0 120 120" aria-hidden="true">
                      <defs>
                        <radialGradient id="wعضو" cx=".38" cy=".32" r=".8">
                          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".45" />
                          <stop offset=".35" stopColor="#7A3E5B" stopOpacity="1" />
                          <stop offset="1" stopColor="#000000" stopOpacity=".35" />
                        </radialGradient>
                      </defs>
                      <polygon points="108.32,60.00 110.32,67.97 108.19,75.66 104.46,82.65 99.30,88.55 96.39,96.39 90.29,101.70 82.73,104.61 75.46,107.58 67.62,108.08 60.00,107.52 52.28,108.75 44.42,107.96 38.28,102.63 29.75,101.64 25.59,94.41 20.63,88.60 17.49,81.66 10.08,76.22 9.44,68.01 8.12,60.00 10.04,52.09 14.66,45.27 16.21,37.69 19.56,30.62 26.00,26.00 29.28,17.72 37.60,16.04 45.08,14.09 51.93,9.05 60.00,11.88 68.16,8.50 75.38,12.67 82.82,15.22 88.93,20.18 95.30,24.70 99.18,31.53 102.49,38.35 109.29,43.98 108.08,52.39" fill="#7A3E5B" />
                      <polygon points="108.32,60.00 110.32,67.97 108.19,75.66 104.46,82.65 99.30,88.55 96.39,96.39 90.29,101.70 82.73,104.61 75.46,107.58 67.62,108.08 60.00,107.52 52.28,108.75 44.42,107.96 38.28,102.63 29.75,101.64 25.59,94.41 20.63,88.60 17.49,81.66 10.08,76.22 9.44,68.01 8.12,60.00 10.04,52.09 14.66,45.27 16.21,37.69 19.56,30.62 26.00,26.00 29.28,17.72 37.60,16.04 45.08,14.09 51.93,9.05 60.00,11.88 68.16,8.50 75.38,12.67 82.82,15.22 88.93,20.18 95.30,24.70 99.18,31.53 102.49,38.35 109.29,43.98 108.08,52.39" fill="url(#wعضو)" />
                      <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(0,0,0,.25)" strokeWidth="3" />
                      <circle cx="60" cy="61" r="34" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
                      <text x="60" y="68" textAnchor="middle" fontFamily="TD" fontSize="20" fill="rgba(255,255,255,.92)">
عضو
                      </text>
                    </svg>
                  </span>
                  <span style={S({ fontSize: "12px", fontWeight: "700" })}>
عضو
                  </span>
                </button>
                ) : null}
              </div>
            </div>
            {v.personal ? (
              <>
              <div className="glass" style={S({ borderRadius: "26px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" })}>
                <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap" })}>
                  <span style={S({ fontSize: "13px", fontWeight: "700", color: "#13707B" })}>
المدعوون
                  </span>
                  <div style={S({ width: "260px", maxWidth: "100%" })}>
                    <div role="group" style={S({ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "6px", padding: "5px", borderRadius: "999px", background: "rgba(255,255,255,.6)" })}>
                      {(v.counts ?? []).map((o: any, oIndex: number) => (
                        <Fragment key={oIndex}>
                        <button type="button" className="chip" onClick={o.pick} aria-pressed={o.on} style={S({ height: "40px", border: "0", borderRadius: "999px", background: o.bg, color: o.text, fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "13px" })}>
{o.name}
                        </button>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                {v.single ? (
                  <>
                  <div className="g2" style={S({ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" })}>
                    <label style={S({ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#3E5456" })}>
اسم المدعو
                      <input className="field" value={v.name} onChange={v.onName} style={S({ height: "48px", border: "1px solid rgba(255,255,255,.95)", borderRadius: "999px", padding: "0 16px", fontFamily: "TS, sans-serif", fontSize: "15px", background: "rgba(255,255,255,.72)", color: "#18292C" })} />
                    </label>
                    <label style={S({ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#3E5456" })}>
الجهة
                      <input className="field" value={v.org} onChange={v.onOrg} style={S({ height: "48px", border: "1px solid rgba(255,255,255,.95)", borderRadius: "999px", padding: "0 16px", fontFamily: "TS, sans-serif", fontSize: "15px", background: "rgba(255,255,255,.72)", color: "#18292C" })} />
                    </label>
                    <label className="s2" style={S({ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#3E5456" })}>
المسمى الوظيفي — اختياري
                      <input className="field" value={v.title} onChange={v.onTitle} style={S({ height: "48px", border: "1px solid rgba(255,255,255,.95)", borderRadius: "999px", padding: "0 16px", fontFamily: "TS, sans-serif", fontSize: "15px", background: "rgba(255,255,255,.72)", color: "#18292C" })} />
                    </label>
                  </div>
                  </>
                ) : null}
                {v.multi ? (
                  <>
                  <div style={S({ display: "flex", flexDirection: "column", gap: "8px" })}>
                    <label htmlFor="bulk" style={S({ fontSize: "12px", color: "#3E5456" })}>
اكتب كل مدعو في سطر: الاسم — الجهة — المسمى (اختياري)
                    </label>
                    <textarea id="bulk" className="field" rows={5} value={v.bulk} onChange={v.onBulk} style={S({ border: "1px solid rgba(255,255,255,.95)", borderRadius: "22px", padding: "14px 16px", fontFamily: "TS, sans-serif", fontSize: "14px", lineHeight: "1.9", background: "rgba(255,255,255,.72)", color: "#18292C", resize: "vertical" })} />
                    <div style={S({ display: "flex", flexWrap: "wrap", gap: "6px" })}>
                      {(v.people ?? []).map((p: any, pIndex: number) => (
                        <Fragment key={pIndex}>
                        <span style={S({ padding: "6px 12px", borderRadius: "999px", background: "rgba(19,112,123,.1)", color: "#0B3B41", fontSize: "12px", fontWeight: "500" })}>
{p.name}
                        </span>
                        </Fragment>
                      ))}
                    </div>
                    <span style={S({ fontSize: "12px", color: "#13707B", fontWeight: "700" })}>
{v.peopleCount}
                    </span>
                  </div>
                  </>
                ) : null}
              </div>
              </>
            ) : null}
            {v.general ? (
              <>
              <div style={S({ borderRadius: "26px", padding: "16px 18px", border: "1px dashed #13707B", background: "rgba(19,112,123,.06)", fontSize: "14px", lineHeight: "1.8", color: "#3E5456" })}>
                <b style={S({ color: "#0B3B41" })}>
دعوة عامة · 
                </b>
رابط واحد للجميع ويسجّل كل شخص اسمه وبريده قبل الفتح، ويظهر عليها ختم {v.stampLabel}
              </div>
              {v.admin ? (
              <label style={S({ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#3E5456" })}>
رابط مختصر (اختياري)
                <input className="field" dir="ltr" value={v.customSlug} onChange={v.onCustomSlug} placeholder="rr26" maxLength={32} style={S({ height: "48px", border: "1px solid rgba(255,255,255,.95)", borderRadius: "999px", padding: "0 16px", fontFamily: "TS, sans-serif", fontSize: "15px", background: "rgba(255,255,255,.72)", color: "#18292C", textAlign: "left" })} />
              </label>
              ) : null}
              </>
            ) : null}
            </>
          ) : null}
          {v.showPlace ? (
            <>
            <div className="glass" style={S({ borderRadius: "26px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" })}>
              <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "baseline" })}>
                <span style={S({ fontSize: "13px", fontWeight: "700", color: "#13707B" })}>
مكان الفعالية
                </span>
                <span style={S({ fontSize: "12px", color: "#4F6567" })}>
اختياري
                </span>
              </div>
              <div role="group" style={S({ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "6px", padding: "5px", borderRadius: "999px", background: "rgba(255,255,255,.6)" })}>
                {(v.places ?? []).map((o: any, oIndex: number) => (
                  <Fragment key={oIndex}>
                  <button type="button" className="chip" onClick={o.pick} aria-pressed={o.on} style={S({ height: "40px", border: "0", borderRadius: "999px", background: o.bg, color: o.text, fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "13px" })}>
{o.name}
                  </button>
                  </Fragment>
                ))}
              </div>
              {v.inPerson ? (
                <>
                <div className="g2" style={S({ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" })}>
                  <label style={S({ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#3E5456" })}>
اسم المكان
                    <input className="field" value={v.venue} onChange={v.onVenue} style={S({ height: "48px", border: "1px solid rgba(255,255,255,.95)", borderRadius: "999px", padding: "0 16px", fontFamily: "TS, sans-serif", fontSize: "15px", background: "rgba(255,255,255,.72)", color: "#18292C" })} />
                  </label>
                  <label style={S({ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#3E5456" })}>
رابط الموقع على الخرائط
                    <input className="field" type="url" inputMode="url" dir="ltr" placeholder="maps.app.goo.gl/..." value={v.placeUrl} onChange={v.onPlaceUrl} style={S({ height: "48px", border: "1px solid rgba(255,255,255,.95)", borderRadius: "999px", padding: "0 16px", fontFamily: "TS, sans-serif", fontSize: "15px", background: "rgba(255,255,255,.72)", color: "#18292C", direction: "ltr", textAlign: "right" })} />
                  </label>
                </div>
                </>
              ) : null}
              {v.online ? (
                <>
                <label style={S({ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#3E5456" })}>
رابط الاجتماع أو البث
                  <input className="field" type="url" inputMode="url" dir="ltr" placeholder="zoom.us/j/..." value={v.placeUrl} onChange={v.onPlaceUrl} style={S({ height: "48px", border: "1px solid rgba(255,255,255,.95)", borderRadius: "999px", padding: "0 16px", fontFamily: "TS, sans-serif", fontSize: "15px", background: "rgba(255,255,255,.72)", color: "#18292C", direction: "ltr", textAlign: "right" })} />
                </label>
                </>
              ) : null}
              {v.hasPlace ? (
                <>
                <button type="button" onClick={v.toggleQr} aria-pressed={v.qrOn} style={S({ alignSelf: "flex-start", height: "38px", padding: "0 14px", borderRadius: "999px", border: "1px solid rgba(19,112,123,.35)", background: v.qrBg, color: v.qrText, fontFamily: "TS, sans-serif", fontSize: "13px", fontWeight: "700", cursor: "pointer" })}>
{v.qrBtn}
                </button>
                </>
              ) : null}
            </div>
            </>
          ) : null}
          {v.showSend ? (
            <>
            <div className="glass" style={S({ borderRadius: "26px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", lineHeight: "1.7" })}>
              <span style={S({ fontSize: "13px", fontWeight: "700", color: "#13707B" })}>
مراجعة قبل الإرسال
              </span>
              <span>
القالب: 
                <b>
{v.t.name} · {v.vName}
                </b>
              </span>
              <span>
الختم: 
                <b>
{v.stampLabel}
                </b>
              </span>
              <span>
المدعوون: 
                <b>
{v.reviewPeople}
                </b>
              </span>
              <span>
المكان: 
                <b>
{v.placeName}
                </b>
              </span>
            </div>
            </>
          ) : null}
          {v.wizNav ? (
            <>
            <div style={S({ display: "flex", gap: "10px" })}>
              <button type="button" onClick={v.back} style={S({ flex: "1", height: "52px", border: "1px solid #0B3B41", borderRadius: "999px", background: "transparent", color: "#0B3B41", fontFamily: "TS, sans-serif", fontWeight: "700", cursor: "pointer", opacity: v.backOp })}>
السابق
              </button>
              <button type="button" onClick={v.next} style={S({ flex: "2", height: "52px", border: "0", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", fontFamily: "TS, sans-serif", fontWeight: "700", cursor: "pointer" })}>
التالي
              </button>
            </div>
            </>
          ) : null}
          {v.showActions ? (
            <>
            <div className="stack" style={S({ display: "flex", gap: "12px", flexWrap: "wrap" })}>
              <button type="button" onClick={v.make} disabled={v.busy} style={S({ flex: "1 1 200px", height: "56px", border: "0", borderRadius: "999px", background: "#C99A2E", color: "#0B2B30", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "17px", cursor: "pointer", boxShadow: "0 10px 24px rgba(201,154,46,.35)" })}>
{v.ctaLabel}
              </button>
              <button type="button" onClick={v.selfSend} disabled={v.busy} style={S({ flex: "1 1 160px", height: "56px", borderRadius: "999px", border: "1px solid #0B3B41", background: "transparent", color: "#0B3B41", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "15px", cursor: "pointer" })}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0B3B41" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
                </svg>
أرسلها لنفسي أولًا
              </button>
            </div>
            {v.errorMsg ? <div role="alert" className="inA glass" style={S({ borderRadius: "20px", padding: "12px 16px", fontSize: "14px", color: "#9B3B2E" })}>{v.errorMsg}</div> : null}
            {v.selfSent ? (
              <>
              <div className="inA glass" style={S({ borderRadius: "20px", padding: "12px 16px", fontSize: "14px", color: "#0B3B41", display: "flex", alignItems: "center", gap: "10px" })}>
                <span style={S({ width: "10px", height: "10px", borderRadius: "50%", background: "#13707B" })} />
{v.selfMsg}
              </div>
              </>
            ) : null}
            </>
          ) : null}
        </section>
        <section className="glass" style={S({ flex: "0 1 450px", minWidth: "0", borderRadius: "32px", padding: "22px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", position: "relative" })}>
          <div style={S({ alignSelf: "stretch", display: "flex", justifyContent: "space-between", alignItems: "center" })}>
            <span style={S({ fontSize: "14px", fontWeight: "700", color: "#2C3F42" })}>
معاينة حيّة
            </span>
            <span style={S({ fontSize: "12px", color: "#4F6567" })}>
التصميم مقفل
            </span>
          </div>
          <div style={S({ width: "336px", height: "727px", maxWidth: "100%", borderRadius: "30px", overflow: "hidden", boxShadow: "0 40px 80px rgba(12,22,48,.3)" })}>
            <div style={S({ width: "390px", height: "844px", transform: "scale(.8615)", transformOrigin: "top right" })}>
              {v.preview}
            </div>
          </div>
          <span style={S({ fontSize: "12px", color: "#4F6567" })}>
هذا بالضبط ما يراه المدعو
          </span>
          <span style={S({ fontSize: "12px", color: "#4F6567" })}>
{v.t.name} · {v.vName} · ختم {v.stampLabel}
          </span>
          {v.doneAdmin ? (
            <>
            <div style={S({ position: "absolute", inset: "0", borderRadius: "32px", background: "rgba(234,243,240,.8)", WebkitBackdropFilter: "blur(18px)", backdropFilter: "blur(18px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "28px", boxSizing: "border-box" })}>
              <div className="inA" style={S({ width: "100%", maxWidth: "360px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", textAlign: "center" })}>
                <span style={S({ position: "relative", width: "84px", height: "84px", display: "flex", alignItems: "center", justifyContent: "center" })}>
                  <span className="ripple" style={S({ position: "absolute", inset: "0", borderRadius: "50%", border: "2px solid #C99A2E" })} />
                  <span style={S({ width: "84px", height: "84px", borderRadius: "50%", background: "#0B3B41", display: "flex", alignItems: "center", justifyContent: "center" })}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E7C873" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path className="draw" pathLength="1" d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                </span>
                <h2 style={S({ margin: "0", fontFamily: "TD, serif", fontSize: "36px", color: "#0B3B41" })}>
دعوتك جاهزة
                </h2>
                <div style={S({ alignSelf: "stretch", display: "flex", alignItems: "center", gap: "10px", height: "52px", padding: "0 7px 0 16px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E0D9CB" })}>
                  <span style={S({ flex: "1", direction: "ltr", textAlign: "left", fontSize: "13px", color: "#44585B", overflow: "hidden", whiteSpace: "nowrap" })}>
{v.link}
                  </span>
                  <button type="button" onClick={v.copy} style={S({ height: "38px", padding: "0 14px", border: "0", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", fontFamily: "TS, sans-serif", fontWeight: "700", cursor: "pointer" })}>
{v.copyLabel}
                  </button>
                </div>
                <div style={S({ alignSelf: "stretch", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "8px" })}>
                  <a href={v.waHref} target="_blank" rel="noopener" style={S({ height: "44px", borderRadius: "999px", background: "rgba(255,255,255,.85)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px" })}>
واتساب
                  </a>
                  <a href={v.link} onClick={v.share} style={S({ height: "44px", borderRadius: "999px", background: "rgba(255,255,255,.85)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px" })}>
مشاركة
                  </a>
                  <a href={v.link} target="_blank" rel="noopener" style={S({ height: "44px", borderRadius: "999px", background: "rgba(255,255,255,.85)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px" })}>
فتح
                  </a>
                </div>
                <button type="button" onClick={v.again} style={S({ border: "0", background: "transparent", color: "#13707B", fontFamily: "TS, sans-serif", fontSize: "15px", fontWeight: "700", cursor: "pointer" })}>
دعوة أخرى لنفس الفعالية
                </button>
              </div>
            </div>
            </>
          ) : null}
          {v.doneLeader ? (
            <>
            <div style={S({ position: "absolute", inset: "0", borderRadius: "32px", background: "rgba(234,243,240,.8)", WebkitBackdropFilter: "blur(18px)", backdropFilter: "blur(18px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "28px", boxSizing: "border-box" })}>
              <div className="inA" style={S({ maxWidth: "360px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", textAlign: "center" })}>
                <span className="spin" style={S({ width: "84px", height: "84px", borderRadius: "50%", border: "2px dashed #C99A2E", animationDuration: "14s" })} />
                <h2 style={S({ margin: "0", fontFamily: "TD, serif", fontSize: "34px", color: "#0B3B41" })}>
أُرسل الطلب للاعتماد
                </h2>
                <p style={S({ margin: "0", fontSize: "15px", lineHeight: "1.8", color: "#3E5456" })}>
{v.leaderDone}
                </p>
                <a href="/leader" style={S({ height: "48px", padding: "0 22px", border: "1px solid #0B3B41", borderRadius: "999px", color: "#0B3B41", display: "inline-flex", alignItems: "center", textDecoration: "none", fontWeight: "700" })}>
متابعة طلباتي
                </a>
              </div>
            </div>
            </>
          ) : null}
        </section>
      </div>
    </div>
    </>
  );
}
