/* eslint-disable */
// Generated from design-reference/Template.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function TemplateView({ v }: { v: any }) {
  return (
    <>
    <div className="pg" style={S({ minHeight: "1180px", position: "relative", overflow: "hidden", fontFamily: "TS, sans-serif", color: "#18292C", background: "radial-gradient(55% 45% at 88% 6%, #BFE3E3 0%, rgba(191,227,227,0) 70%), radial-gradient(45% 40% at 6% 96%, #F2E1B4 0%, rgba(242,225,180,0) 70%), radial-gradient(60% 55% at 45% 55%, #DCEFEE 0%, #EAF3F0 55%, #F4F2EC 100%)", padding: "28px 44px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "20px" })}>
      <header className="stack" style={S({ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", flexWrap: "wrap" })}>
        <div style={S({ display: "flex", flexDirection: "column", gap: "6px" })}>
          <a href={`${v.base}/templates`} style={S({ fontSize: "13px", textDecoration: "none" })}>
{v.crumb}
          </a>
          <h1 className="h1m" style={S({ margin: "0", fontFamily: "TD, serif", fontSize: "38px", color: "#0B3B41" })}>
إعداد قالب
          </h1>
          <p style={S({ margin: "0", fontSize: "15px", color: "#3E5456" })}>
{v.subtitle}
          </p>
        </div>
        <div style={S({ display: "flex", gap: "10px" })}>
          <button type="button" onClick={v.saveDraft} disabled={v.busy} style={S({ height: "48px", padding: "0 20px", borderRadius: "999px", border: "1px solid #0B3B41", background: "transparent", color: "#0B3B41", fontFamily: "TS, sans-serif", fontWeight: "700", cursor: "pointer" })}>
{v.draftLabel}
          </button>
          <button type="button" onClick={v.approve} disabled={v.busy || v.ok} style={S({ height: "48px", padding: "0 22px", borderRadius: "999px", border: "0", background: "#C99A2E", color: "#0B2B30", fontFamily: "TS, sans-serif", fontWeight: "700", cursor: "pointer" })}>
{v.approveLabel}
          </button>
        </div>
      </header>
      {v.notice}
      <div style={S({ position: "relative", display: "flex", flexWrap: "wrap", gap: "26px", alignItems: "flex-start" })}>
        <section style={S({ flex: "1 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" })}>
          <div className="glass" style={S({ borderRadius: "26px", padding: "16px 18px", display: "flex", alignItems: "center", gap: "14px" })}>
            {v.artworkThumb}
            <div style={S({ flex: "1", display: "flex", flexDirection: "column", gap: "3px" })}>
              <span style={S({ fontSize: "13px", fontWeight: "700", color: "#13707B" })}>
صورة التصميم
              </span>
              <span style={S({ fontWeight: "700", fontSize: "14px", direction: "ltr", textAlign: "right" })}>
{v.artworkName}
              </span>
              <span style={S({ fontSize: "12px", color: "#4F6567" })}>
اختيارية · بدونها نستخدم تصميم المسار الجاهز
              </span>
            </div>
            <button type="button" onClick={v.pickArtwork} style={S({ height: "40px", padding: "0 16px", borderRadius: "999px", border: "1px solid rgba(19,112,123,.35)", background: "rgba(255,255,255,.7)", color: "#0B3B41", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
{v.artworkAction}
            </button>
            {v.fileInput}
          </div>
          <div className="glass" style={S({ borderRadius: "26px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" })}>
            <span style={S({ fontSize: "13px", fontWeight: "700", color: "#13707B" })}>
هوية الحركة
            </span>
            <div className="g4" style={S({ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" })}>
              <button type="button" className="lift" onClick={v.pk0} aria-pressed={v.on0} style={S({ borderRadius: "20px", border: `2px solid ${v.bd0}`, background: "rgba(255,255,255,.55)", padding: "6px", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "90px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                  <div style={S({ position: "relative", width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" })}>
                    <span className="ripple" style={S({ position: "absolute", inset: "8px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "2.4s" })} />
                    <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", border: "1.5px solid color-mix(in srgb, var(--c1) 50%, transparent)", animationDuration: "3s" })}>
                      <span style={S({ position: "absolute", left: "50%", top: "-6px", width: "12px", height: "12px", marginLeft: "-6px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)" })} />
                    </div>
                    <div style={S({ width: "39px", height: "39px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 10px 26px rgba(0,0,0,.25)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                      <img className="formsL" src="/brand/logo-128.png" alt="" style={S({ width: "29px", height: "auto" })} />
                    </div>
                  </div>
                </span>
                <span style={S({ display: "flex", flexDirection: "column", padding: "0 4px 4px", textAlign: "right" })}>
                  <b style={S({ fontSize: "13px" })}>
النادي
                  </b>
                  <span style={S({ fontSize: "11px", color: "#4F6567" })}>
أعمدة ونقاط
                  </span>
                </span>
              </button>
              <button type="button" className="lift" onClick={v.pk1} aria-pressed={v.on1} style={S({ borderRadius: "20px", border: `2px solid ${v.bd1}`, background: "rgba(255,255,255,.55)", padding: "6px", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "90px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                  <div style={S({ position: "relative", width: "56px", height: "56px" })}>
                    <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", border: "1.5px solid var(--c1)" })}>
                      <span style={S({ position: "absolute", left: "50%", top: "-6px", width: "12px", height: "12px", marginLeft: "-6px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 14px var(--c2)" })} />
                    </div>
                    <div className="spinR" style={S({ position: "absolute", inset: "11px", borderRadius: "50%", border: "1px dashed color-mix(in srgb, var(--tx) 35%, transparent)" })} />
                    <span className="pulse" style={S({ position: "absolute", left: "50%", top: "50%", width: "10px", height: "10px", margin: "-5px 0 0 -5px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, var(--tx), var(--c1))" })} />
                  </div>
                </span>
                <span style={S({ display: "flex", flexDirection: "column", padding: "0 4px 4px", textAlign: "right" })}>
                  <b style={S({ fontSize: "13px" })}>
الفلك والفضاء
                  </b>
                  <span style={S({ fontSize: "11px", color: "#4F6567" })}>
نجوم ومدار
                  </span>
                </span>
              </button>
              <button type="button" className="lift" onClick={v.pk2} aria-pressed={v.on2} style={S({ borderRadius: "20px", border: `2px solid ${v.bd2}`, background: "rgba(255,255,255,.55)", padding: "6px", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "90px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                  <div style={S({ display: "flex", gap: "1px", direction: "ltr" })}>
                    <span className="litseq" style={S({ display: "block", animationDelay: "0.0s" })}>
                      <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "15px", height: "16px", padding: "1px 1px", boxSizing: "border-box", borderRadius: "2px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                        <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "2px", fontWeight: "700", opacity: ".9" })}>
                          <span>
16
                          </span>
                          <span style={S({ fontWeight: "400", fontSize: "2px" })} />
                        </span>
                        <span style={S({ fontFamily: "TD, serif", fontSize: "7px", textAlign: "center" })}>
S
                        </span>
                        <span style={S({ fontFamily: "TS, sans-serif", fontSize: "2px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كبريت
                        </span>
                      </span>
                    </span>
                    <span className="litseq" style={S({ display: "block", animationDelay: "0.3s" })}>
                      <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "15px", height: "16px", padding: "1px 1px", boxSizing: "border-box", borderRadius: "2px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                        <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "2px", fontWeight: "700", opacity: ".9" })}>
                          <span>
6
                          </span>
                          <span style={S({ fontWeight: "400", fontSize: "2px" })} />
                        </span>
                        <span style={S({ fontFamily: "TD, serif", fontSize: "7px", textAlign: "center" })}>
C
                        </span>
                        <span style={S({ fontFamily: "TS, sans-serif", fontSize: "2px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كربون
                        </span>
                      </span>
                    </span>
                    <span className="litseq" style={S({ display: "block", animationDelay: "0.6s" })}>
                      <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "15px", height: "16px", padding: "1px 1px", boxSizing: "border-box", borderRadius: "2px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                        <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "2px", fontWeight: "700", opacity: ".9" })}>
                          <span>
92
                          </span>
                          <span style={S({ fontWeight: "400", fontSize: "2px" })} />
                        </span>
                        <span style={S({ fontFamily: "TD, serif", fontSize: "7px", textAlign: "center" })}>
U
                        </span>
                        <span style={S({ fontFamily: "TS, sans-serif", fontSize: "2px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                        </span>
                      </span>
                    </span>
                    <span className="litseq" style={S({ display: "block", animationDelay: "0.9s" })}>
                      <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "15px", height: "16px", padding: "1px 1px", boxSizing: "border-box", borderRadius: "2px", background: "linear-gradient(160deg,#F7E3A6,#C99A2E)", border: "1.5px solid var(--c2)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "#0B1F24", direction: "ltr", lineHeight: "1" })}>
                        <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "2px", fontWeight: "700", opacity: ".9" })}>
                          <span>
✦
                          </span>
                          <span style={S({ fontWeight: "400", fontSize: "2px" })} />
                        </span>
                        <span style={S({ fontFamily: "TD, serif", fontSize: "7px", textAlign: "center" })}>
Q
                        </span>
                        <span style={S({ fontFamily: "TS, sans-serif", fontSize: "2px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
نادي العلوم
                        </span>
                      </span>
                    </span>
                    <span className="litseq" style={S({ display: "block", animationDelay: "1.2s" })}>
                      <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "15px", height: "16px", padding: "1px 1px", boxSizing: "border-box", borderRadius: "2px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                        <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "2px", fontWeight: "700", opacity: ".9" })}>
                          <span>
92
                          </span>
                          <span style={S({ fontWeight: "400", fontSize: "2px" })} />
                        </span>
                        <span style={S({ fontFamily: "TD, serif", fontSize: "7px", textAlign: "center" })}>
U
                        </span>
                        <span style={S({ fontFamily: "TS, sans-serif", fontSize: "2px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
                <span style={S({ display: "flex", flexDirection: "column", padding: "0 4px 4px", textAlign: "right" })}>
                  <b style={S({ fontSize: "13px" })}>
الكيمياء
                  </b>
                  <span style={S({ fontSize: "11px", color: "#4F6567" })}>
شبكة سداسية وفقاعات
                  </span>
                </span>
              </button>
              <button type="button" className="lift" onClick={v.pk3} aria-pressed={v.on3} style={S({ borderRadius: "20px", border: `2px solid ${v.bd3}`, background: "rgba(255,255,255,.55)", padding: "6px", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "90px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                  <div style={S({ position: "relative", width: "56px", height: "56px" })}>
                    <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", animationDuration: "2.2s" })}>
                      <div style={S({ position: "absolute", left: "0", right: "0", top: "50%", height: "19px", marginTop: "-10px", borderRadius: "50%", border: "1.5px solid var(--c1)", transform: "rotate(0deg)" })}>
                        <span style={S({ position: "absolute", right: "-4px", top: "50%", width: "8px", height: "8px", marginTop: "-4px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 10px var(--c2)" })} />
                      </div>
                    </div>
                    <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", animationDuration: "2.8s" })}>
                      <div style={S({ position: "absolute", left: "0", right: "0", top: "50%", height: "19px", marginTop: "-10px", borderRadius: "50%", border: "1.5px solid var(--c1)", transform: "rotate(60deg)" })}>
                        <span style={S({ position: "absolute", right: "-4px", top: "50%", width: "8px", height: "8px", marginTop: "-4px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 10px var(--c2)" })} />
                      </div>
                    </div>
                    <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", animationDuration: "3.4s" })}>
                      <div style={S({ position: "absolute", left: "0", right: "0", top: "50%", height: "19px", marginTop: "-10px", borderRadius: "50%", border: "1.5px solid var(--c1)", transform: "rotate(120deg)" })}>
                        <span style={S({ position: "absolute", right: "-4px", top: "50%", width: "8px", height: "8px", marginTop: "-4px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 10px var(--c2)" })} />
                      </div>
                    </div>
                    <span className="pulse" style={S({ position: "absolute", left: "50%", top: "50%", width: "14px", height: "14px", margin: "-7px 0 0 -7px", borderRadius: "50%", background: "var(--c2)" })} />
                  </div>
                </span>
                <span style={S({ display: "flex", flexDirection: "column", padding: "0 4px 4px", textAlign: "right" })}>
                  <b style={S({ fontSize: "13px" })}>
الفيزياء
                  </b>
                  <span style={S({ fontSize: "11px", color: "#4F6567" })}>
موجات وجسيمات
                  </span>
                </span>
              </button>
              <button type="button" className="lift" onClick={v.pk4} aria-pressed={v.on4} style={S({ borderRadius: "20px", border: `2px solid ${v.bd4}`, background: "rgba(255,255,255,.55)", padding: "6px", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "90px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                  <div style={S({ display: "flex", gap: "3px", alignItems: "center", height: "34px" })}>
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
                <span style={S({ display: "flex", flexDirection: "column", padding: "0 4px 4px", textAlign: "right" })}>
                  <b style={S({ fontSize: "13px" })}>
الأحياء
                  </b>
                  <span style={S({ fontSize: "11px", color: "#4F6567" })}>
حلزون وخلايا
                  </span>
                </span>
              </button>
              <button type="button" className="lift" onClick={v.pk5} aria-pressed={v.on5} style={S({ borderRadius: "20px", border: `2px solid ${v.bd5}`, background: "rgba(255,255,255,.55)", padding: "6px", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "90px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                  <div style={S({ display: "flex", alignItems: "flex-end", gap: "3px", height: "39px", borderBottom: "1.5px solid color-mix(in srgb, var(--tx) 40%, transparent)", padding: "0 6px" })}>
                    <span className="bounce" style={S({ width: "6px", height: "11px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.0s" })} />
                    <span className="bounce" style={S({ width: "6px", height: "18px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.1s" })} />
                    <span className="bounce" style={S({ width: "6px", height: "25px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.2s" })} />
                    <span className="bounce" style={S({ width: "6px", height: "31px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.3s" })} />
                    <span className="bounce" style={S({ width: "6px", height: "38px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.4s" })} />
                    <span className="bounce" style={S({ width: "6px", height: "45px", borderRadius: "4px 4px 0 0", background: "var(--c2)", animationDelay: "0.5s" })} />
                  </div>
                </span>
                <span style={S({ display: "flex", flexDirection: "column", padding: "0 4px 4px", textAlign: "right" })}>
                  <b style={S({ fontSize: "13px" })}>
الرياضيات المالية
                  </b>
                  <span style={S({ fontSize: "11px", color: "#4F6567" })}>
منحنيات وأرقام
                  </span>
                </span>
              </button>
              <button type="button" className="lift" onClick={v.pk6} aria-pressed={v.on6} style={S({ borderRadius: "20px", border: `2px solid ${v.bd6}`, background: "rgba(255,255,255,.55)", padding: "6px", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "TS, sans-serif", cursor: "pointer" })}>
                <span style={S({ display: "flex", alignItems: "center", justifyContent: "center", height: "90px", borderRadius: "14px", overflow: "hidden", ...css(v.vs) })}>
                  <svg width="48" height="55" viewBox="-50 -62 100 114" aria-hidden="true">
                    <defs>
                      <linearGradient id="bz48" x1="0" y1="-1" x2="0" y2="1">
                        <stop offset="0" stopColor="var(--c2)" />
                        <stop offset="1" stopColor="var(--c1)" />
                      </linearGradient>
                      <radialGradient id="fc48" cx=".4" cy=".35" r=".8">
                        <stop offset="0" stopColor="#FFFFFF" stopOpacity=".22" />
                        <stop offset="1" stopColor="#FFFFFF" stopOpacity=".02" />
                      </radialGradient>
                    </defs>
                    <rect x="-7" y="-60" width="14" height="8" rx="2.5" fill="url(#bz48)" />
                    <rect x="-3" y="-53" width="6" height="6" fill="var(--c1)" />
                    <rect x="30" y="-46" width="9" height="6" rx="2" fill="var(--c1)" transform="rotate(40 34 -43)" />
                    <circle r="46" fill="none" stroke="url(#bz48)" strokeWidth="5" />
                    <circle r="42.5" fill="url(#fc48)" />
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
                <span style={S({ display: "flex", flexDirection: "column", padding: "0 4px 4px", textAlign: "right" })}>
                  <b style={S({ fontSize: "13px" })}>
الرياضي
                  </b>
                  <span style={S({ fontSize: "11px", color: "#4F6567" })}>
مضمار وكرة
                  </span>
                </span>
              </button>
            </div>
            <div style={S({ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" })}>
              <span style={S({ fontSize: "13px", color: "#3E5456" })}>
الألوان المتاحة لهذا القالب
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
          <div className="g2" style={S({ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px" })}>
            <div className="glass" style={S({ borderRadius: "26px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" })}>
              <span style={S({ fontSize: "13px", fontWeight: "700", color: "#13707B" })}>
إتاحة القالب للقادة
              </span>
              {v.availability}
            </div>
            <div className="glass" style={S({ borderRadius: "26px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" })}>
              <span style={S({ fontSize: "13px", fontWeight: "700", color: "#13707B" })}>
المعاينة
              </span>
              <div style={S({ display: "flex", gap: "8px", flexWrap: "wrap" })}>
                <button type="button" onClick={v.showLoader} style={S({ height: "36px", padding: "0 14px", borderRadius: "999px", border: "0", background: "#0B3B41", color: "#FFFFFF", fontFamily: "TS, sans-serif", fontSize: "13px", cursor: "pointer" })}>
جرّبي التحميل
                </button>
                <button type="button" onClick={v.replay} style={S({ height: "36px", padding: "0 14px", borderRadius: "999px", border: "1px solid #0B3B41", background: "transparent", color: "#0B3B41", fontFamily: "TS, sans-serif", fontSize: "13px", cursor: "pointer" })}>
إعادة الحركة
                </button>
              </div>
            </div>
          </div>
        </section>
        <section style={S({ flex: "0 1 360px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" })}>
          <div style={S({ width: "330px", height: "714px", borderRadius: "40px", padding: "7px", boxSizing: "border-box", background: "rgba(255,255,255,.5)", border: "1px solid rgba(255,255,255,.9)", boxShadow: "0 40px 80px rgba(12,22,48,.28)" })}>
            <div style={S({ width: "316px", height: "700px", borderRadius: "34px", overflow: "hidden" })}>
              <div style={S({ width: "390px", height: "844px", transform: "scale(.81)", transformOrigin: "top right" })}>
                {v.preview}
              </div>
            </div>
          </div>
          {v.ok ? (
            <>
            <a href={`${v.base}/templates`} className="inA" style={S({ height: "44px", padding: "0 18px", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "14px", display: "inline-flex", alignItems: "center" })}>
اعتُمد · شوفيه في معرض القوالب
            </a>
            </>
          ) : null}
        </section>
      </div>
    </div>
    </>
  );
}
