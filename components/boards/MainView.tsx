/* eslint-disable */
// Ported from the Main design board, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function MainView({ v }: { v: any }) {
  return (
    <>
    <div className="pg" style={S({ minHeight: "1150px", position: "relative", overflow: "hidden", fontFamily: "TS, sans-serif", color: "#18292C", background: "radial-gradient(55% 45% at 88% 6%, #BFE3E3 0%, rgba(191,227,227,0) 70%), radial-gradient(45% 40% at 6% 96%, #F2E1B4 0%, rgba(242,225,180,0) 70%), radial-gradient(60% 55% at 45% 55%, #DCEFEE 0%, #EAF3F0 55%, #F4F2EC 100%)", padding: "28px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" })}>
      <span className="orb" aria-hidden="true" style={S({ position: "absolute", left: "14%", top: "4%", width: "520px", height: "520px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, rgba(111,183,184,.55), rgba(19,112,123,.15) 58%, rgba(19,112,123,0) 72%)" })} />
      <header style={S({ position: "relative", width: "100%", maxWidth: "1100px", display: "flex", justifyContent: "space-between", alignItems: "center" })}>
        <button type="button" onClick={v.openGate} aria-label="نادي العلوم" style={S({ border: "0", background: "transparent", padding: "0", cursor: "default" })}>
          <span style={S({ display: "inline-flex", alignItems: "center", gap: "10px" })}>
            <img src="/brand/logo-128.png" alt="شعار ملتقى المستجدين" style={S({ height: "40px", width: "auto" })} />
            <span style={S({ fontFamily: "TD, serif", fontSize: "24px", color: "#0B3B41", lineHeight: "1" })}>
نادي العلوم
            </span>
          </span>
        </button>
        <span style={S({ fontSize: "13px", color: "#3E5456" })}>
منصة الدعوات
        </span>
      </header>
      <h1 className="h1m" style={S({ position: "relative", margin: "0", fontFamily: "TD, serif", fontSize: "46px", lineHeight: "1.2", color: "#0B3B41", textAlign: "center" })}>
كل دعوة تبدأ بقالب جاهز وتنتهي باسم
      </h1>
      <div style={S({ position: "relative", width: "100%", maxWidth: "1100px", display: "flex", gap: "18px", justifyContent: "center", overflowX: "auto", padding: "10px 4px 20px", scrollSnapType: "x mandatory" })}>
        <div className="glass" style={S({ flex: "0 0 230px", height: "360px", borderRadius: "28px", padding: "8px", boxSizing: "border-box", scrollSnapAlign: "center", transform: "translateY(14px)" })}>
          <div style={S({ position: "relative", width: "100%", height: "100%", borderRadius: "21px", overflow: "hidden", color: "var(--tx)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "18px", boxSizing: "border-box", "--c1": "#7FD0D4", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#072A2F", background: "radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)" })}>
            <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
              <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
              <div style={S({ position: "absolute", left: "15px", top: "58px" })}>
                <svg width="184" height="56" viewBox="0 0 340 104" aria-hidden="true" style={S({ opacity: "0.5" })}>
                  <rect className="pwave" x="8" y="4" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                  <rect className="pwave" x="314" y="4" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                  <rect className="pwave" x="8" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                  <rect className="pwave" x="26" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                  <rect className="pwave" x="224" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                  <rect className="pwave" x="242" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                  <rect className="pwave" x="260" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                  <rect className="pwave" x="278" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                  <rect className="pwave" x="296" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                  <rect className="pwave" x="314" y="24" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                  <rect className="pwave" x="8" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                  <rect className="pwave" x="26" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                  <rect className="pwave" x="224" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                  <rect className="pwave" x="242" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                  <rect className="pwave" x="260" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                  <rect className="pwave" x="278" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                  <rect className="pwave" x="296" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                  <rect className="pwave" x="314" y="44" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                  <rect className="pwave" x="8" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                  <rect className="pwave" x="26" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                  <rect className="pwave" x="44" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.24s" })} />
                  <rect className="pwave" x="62" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.32s" })} />
                  <rect className="pwave" x="80" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.40s" })} />
                  <rect className="pwave" x="98" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.48s" })} />
                  <rect className="pwave" x="116" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.56s" })} />
                  <rect className="pwave" x="134" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.64s" })} />
                  <rect className="pwave" x="152" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.72s" })} />
                  <rect className="pwave" x="170" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.80s" })} />
                  <rect className="pwave" x="188" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.88s" })} />
                  <rect className="pwave" x="206" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.96s" })} />
                  <rect className="pwave" x="224" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                  <rect className="pwave" x="242" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                  <rect className="pwave" x="260" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                  <rect className="pwave" x="278" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                  <rect className="pwave" x="296" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                  <rect className="pwave" x="314" y="64" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                  <rect className="pwave" x="8" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.08s" })} />
                  <rect className="pwave" x="26" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.16s" })} />
                  <rect className="pwave" x="44" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.24s" })} />
                  <rect className="pwave" x="62" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.32s" })} />
                  <rect className="pwave" x="80" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.40s" })} />
                  <rect className="pwave" x="98" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.48s" })} />
                  <rect className="pwave" x="116" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.56s" })} />
                  <rect className="pwave" x="134" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.64s" })} />
                  <rect className="pwave" x="152" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.72s" })} />
                  <rect className="pwave" x="170" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.80s" })} />
                  <rect className="pwave" x="188" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.88s" })} />
                  <rect className="pwave" x="206" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "0.96s" })} />
                  <rect className="pwave" x="224" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.04s" })} />
                  <rect className="pwave" x="242" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.12s" })} />
                  <rect className="pwave" x="260" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.20s" })} />
                  <rect className="pwave" x="278" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.28s" })} />
                  <rect className="pwave" x="296" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.36s" })} />
                  <rect className="pwave" x="314" y="84" width="16" height="18" rx="3" fill="var(--c1)" style={S({ animationDelay: "1.44s" })} />
                </svg>
              </div>
              <div style={S({ position: "absolute", left: "31px", top: "71px", display: "flex", gap: "3px", direction: "ltr" })}>
                <span className="flyin" style={S({ "--fx": "-120px", "--fy": "-90px", "--fr": "-30deg", animationDelay: "0.30s" })}>
                  <span className="bob" style={S({ display: "block", animationDelay: "0.0s" })}>
                    <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "28px", height: "31px", padding: "2px 3px", boxSizing: "border-box", borderRadius: "4px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                      <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "4px", fontWeight: "700", opacity: ".9" })}>
                        <span>
16
                        </span>
                        <span style={S({ fontWeight: "400", fontSize: "3px" })}>
32.06
                        </span>
                      </span>
                      <span style={S({ fontFamily: "TD, serif", fontSize: "14px", textAlign: "center" })}>
S
                      </span>
                      <span style={S({ fontFamily: "TS, sans-serif", fontSize: "4px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كبريت
                      </span>
                    </span>
                  </span>
                </span>
                <span className="flyin" style={S({ "--fx": "-40px", "--fy": "-140px", "--fr": "20deg", animationDelay: "0.48s" })}>
                  <span className="bob" style={S({ display: "block", animationDelay: "0.4s" })}>
                    <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "28px", height: "31px", padding: "2px 3px", boxSizing: "border-box", borderRadius: "4px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                      <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "4px", fontWeight: "700", opacity: ".9" })}>
                        <span>
6
                        </span>
                        <span style={S({ fontWeight: "400", fontSize: "3px" })}>
12.011
                        </span>
                      </span>
                      <span style={S({ fontFamily: "TD, serif", fontSize: "14px", textAlign: "center" })}>
C
                      </span>
                      <span style={S({ fontFamily: "TS, sans-serif", fontSize: "4px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كربون
                      </span>
                    </span>
                  </span>
                </span>
                <span className="flyin" style={S({ "--fx": "0px", "--fy": "-160px", "--fr": "-12deg", animationDelay: "0.66s" })}>
                  <span className="bob" style={S({ display: "block", animationDelay: "0.8s" })}>
                    <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "28px", height: "31px", padding: "2px 3px", boxSizing: "border-box", borderRadius: "4px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                      <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "4px", fontWeight: "700", opacity: ".9" })}>
                        <span>
92
                        </span>
                        <span style={S({ fontWeight: "400", fontSize: "3px" })}>
238.03
                        </span>
                      </span>
                      <span style={S({ fontFamily: "TD, serif", fontSize: "14px", textAlign: "center" })}>
U
                      </span>
                      <span style={S({ fontFamily: "TS, sans-serif", fontSize: "4px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                      </span>
                    </span>
                  </span>
                </span>
                <span className="flyin" style={S({ "--fx": "60px", "--fy": "-130px", "--fr": "28deg", animationDelay: "0.84s" })}>
                  <span className="bob" style={S({ display: "block", animationDelay: "1.2s" })}>
                    <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "28px", height: "31px", padding: "2px 3px", boxSizing: "border-box", borderRadius: "4px", background: "linear-gradient(160deg,#F7E3A6,#C99A2E)", border: "1.5px solid var(--c2)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "#0B1F24", direction: "ltr", lineHeight: "1" })}>
                      <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "4px", fontWeight: "700", opacity: ".9" })}>
                        <span>
✦
                        </span>
                        <span style={S({ fontWeight: "400", fontSize: "3px" })} />
                      </span>
                      <span style={S({ fontFamily: "TD, serif", fontSize: "14px", textAlign: "center" })}>
Q
                      </span>
                      <span style={S({ fontFamily: "TS, sans-serif", fontSize: "4px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
نادي العلوم
                      </span>
                    </span>
                  </span>
                </span>
                <span className="flyin" style={S({ "--fx": "130px", "--fy": "-100px", "--fr": "-24deg", animationDelay: "1.02s" })}>
                  <span className="bob" style={S({ display: "block", animationDelay: "1.6s" })}>
                    <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "28px", height: "31px", padding: "2px 3px", boxSizing: "border-box", borderRadius: "4px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                      <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "4px", fontWeight: "700", opacity: ".9" })}>
                        <span>
92
                        </span>
                        <span style={S({ fontWeight: "400", fontSize: "3px" })}>
238.03
                        </span>
                      </span>
                      <span style={S({ fontFamily: "TD, serif", fontSize: "14px", textAlign: "center" })}>
U
                      </span>
                      <span style={S({ fontFamily: "TS, sans-serif", fontSize: "4px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <span style={S({ position: "absolute", left: "13px", top: "33px", width: "0", height: "0" })}>
                <span className="orbitE" style={S({ position: "absolute", left: "-8px", top: "-8px", "--r": "10px", animationDuration: "9.8s", animationDelay: "-3.7s" })}>
                  <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "16px", height: "16px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                    <span style={S({ fontSize: "3px", color: "var(--c2)" })}>
1
                    </span>
                    <b style={S({ fontFamily: "TS, sans-serif", fontSize: "7px" })}>
H
                    </b>
                  </span>
                </span>
              </span>
              <span style={S({ position: "absolute", left: "201px", top: "35px", width: "0", height: "0" })}>
                <span className="orbitE" style={S({ position: "absolute", left: "-8px", top: "-8px", "--r": "10px", animationDuration: "9.9s", animationDelay: "-0.9s" })}>
                  <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "16px", height: "16px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                    <span style={S({ fontSize: "3px", color: "var(--c2)" })}>
8
                    </span>
                    <b style={S({ fontFamily: "TS, sans-serif", fontSize: "7px" })}>
O
                    </b>
                  </span>
                </span>
              </span>
              <span style={S({ position: "absolute", left: "21px", top: "80px", width: "0", height: "0" })}>
                <span className="orbitE" style={S({ position: "absolute", left: "-8px", top: "-8px", "--r": "18px", animationDuration: "12.1s", animationDelay: "-1.7s" })}>
                  <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "16px", height: "16px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                    <span style={S({ fontSize: "3px", color: "var(--c2)" })}>
7
                    </span>
                    <b style={S({ fontFamily: "TS, sans-serif", fontSize: "7px" })}>
N
                    </b>
                  </span>
                </span>
              </span>
              <span style={S({ position: "absolute", left: "193px", top: "82px", width: "0", height: "0" })}>
                <span className="orbitE" style={S({ position: "absolute", left: "-8px", top: "-8px", "--r": "18px", animationDuration: "10.5s", animationDelay: "-3.0s" })}>
                  <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "16px", height: "16px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                    <span style={S({ fontSize: "3px", color: "var(--c2)" })}>
11
                    </span>
                    <b style={S({ fontFamily: "TS, sans-serif", fontSize: "7px" })}>
Na
                    </b>
                  </span>
                </span>
              </span>
              <span style={S({ position: "absolute", left: "107px", top: "22px", width: "0", height: "0" })}>
                <span className="orbitE" style={S({ position: "absolute", left: "-8px", top: "-8px", "--r": "14px", animationDuration: "11.9s", animationDelay: "-4.0s" })}>
                  <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "16px", height: "16px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                    <span style={S({ fontSize: "3px", color: "var(--c2)" })}>
26
                    </span>
                    <b style={S({ fontFamily: "TS, sans-serif", fontSize: "7px" })}>
Fe
                    </b>
                  </span>
                </span>
              </span>
              <span style={S({ position: "absolute", left: "64px", top: "20px", width: "0", height: "0" })}>
                <span className="orbitE" style={S({ position: "absolute", left: "-8px", top: "-8px", "--r": "14px", animationDuration: "10.3s", animationDelay: "-7.1s" })}>
                  <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "16px", height: "16px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                    <span style={S({ fontSize: "3px", color: "var(--c2)" })}>
79
                    </span>
                    <b style={S({ fontFamily: "TS, sans-serif", fontSize: "7px" })}>
Au
                    </b>
                  </span>
                </span>
              </span>
              <svg width="214" height="344" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
                <ellipse className="draw" cx="107" cy="86" rx="95" ry="26" fill="none" stroke="var(--c2)" strokeOpacity=".5" strokeWidth="1.2" pathLength="1" style={S({ animationDelay: "1.4s" })} />
              </svg>
              <span className="glint" style={S({ position: "absolute", left: "81%", top: "33px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "1.50s" })} />
              <span className="glint" style={S({ position: "absolute", left: "48%", top: "44px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "1.85s" })} />
              <span className="glint" style={S({ position: "absolute", left: "16%", top: "43px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.20s" })} />
              <span className="glint" style={S({ position: "absolute", left: "72%", top: "74px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.55s" })} />
              <span className="glint" style={S({ position: "absolute", left: "49%", top: "75px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.90s" })} />
              <span className="glint" style={S({ position: "absolute", left: "68%", top: "31px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.25s" })} />
              <span className="glint" style={S({ position: "absolute", left: "36%", top: "58px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.60s" })} />
              <span className="glint" style={S({ position: "absolute", left: "58%", top: "32px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.95s" })} />
            </div>
            <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "2px" })}>
              <span style={S({ fontSize: "11px", opacity: ".8" })}>
يوم الكيمياء 2026
              </span>
              <span style={S({ fontFamily: "TD, serif", fontSize: "26px", lineHeight: "1.1" })}>
تفاعل
              </span>
            </div>
          </div>
        </div>
        <div className="glass" style={S({ flex: "0 0 230px", height: "360px", borderRadius: "28px", padding: "8px", boxSizing: "border-box", scrollSnapAlign: "center", transform: "translateY(0px)" })}>
          <div style={S({ position: "relative", width: "100%", height: "100%", borderRadius: "21px", overflow: "hidden", color: "var(--tx)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "18px", boxSizing: "border-box", "--c1": "#9FDCE0", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#050F17", background: "radial-gradient(120% 80% at 25% 0%, #17485A 0%, #0B2533 50%, #050F17 100%)" })}>
            <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
              <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
              <span className="tw" style={S({ position: "absolute", left: "32.7%", top: "25.2%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.9s" })} />
              <span className="tw" style={S({ position: "absolute", left: "81.6%", top: "40.0%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.6s" })} />
              <span className="tw" style={S({ position: "absolute", left: "6.4%", top: "8.6%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.6s" })} />
              <span className="tw" style={S({ position: "absolute", left: "92.2%", top: "18.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
              <span className="tw" style={S({ position: "absolute", left: "4.6%", top: "24.7%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.7s" })} />
              <span className="tw" style={S({ position: "absolute", left: "95.6%", top: "13.5%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
              <span className="tw" style={S({ position: "absolute", left: "97.1%", top: "26.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.4s" })} />
              <span className="tw" style={S({ position: "absolute", left: "25.2%", top: "29.7%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.9s" })} />
              <span className="tw" style={S({ position: "absolute", left: "2.7%", top: "14.7%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.2s" })} />
              <span className="tw" style={S({ position: "absolute", left: "25.5%", top: "12.5%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.5s" })} />
              <span className="tw" style={S({ position: "absolute", left: "56.4%", top: "34.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.6s" })} />
              <span className="tw" style={S({ position: "absolute", left: "61.9%", top: "7.3%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.6s" })} />
              <span className="tw" style={S({ position: "absolute", left: "26.5%", top: "27.2%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.8s" })} />
              <span className="tw" style={S({ position: "absolute", left: "74.1%", top: "2.0%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.4s" })} />
              <span className="tw" style={S({ position: "absolute", left: "69.7%", top: "20.7%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.9s" })} />
              <span className="tw" style={S({ position: "absolute", left: "27.5%", top: "6.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.6s" })} />
              <span className="tw" style={S({ position: "absolute", left: "24.4%", top: "36.6%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "3.0s" })} />
              <span className="tw" style={S({ position: "absolute", left: "44.2%", top: "33.1%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.9s" })} />
              <span className="tw" style={S({ position: "absolute", left: "53.4%", top: "13.4%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.6s" })} />
              <span className="tw" style={S({ position: "absolute", left: "49.3%", top: "38.6%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.4s" })} />
              <span className="tw" style={S({ position: "absolute", left: "64.2%", top: "20.5%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.0s" })} />
              <span className="tw" style={S({ position: "absolute", left: "42.4%", top: "3.5%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.8s" })} />
              <span className="tw" style={S({ position: "absolute", left: "68.6%", top: "36.5%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.5s" })} />
              <span className="tw" style={S({ position: "absolute", left: "59.1%", top: "2.9%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.7s" })} />
              <span className="tw" style={S({ position: "absolute", left: "72.9%", top: "12.1%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.3s" })} />
              <span className="tw" style={S({ position: "absolute", left: "71.5%", top: "26.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.0s" })} />
              <span className="tw" style={S({ position: "absolute", left: "66.9%", top: "10.9%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.7s" })} />
              <span className="tw" style={S({ position: "absolute", left: "60.4%", top: "3.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
              <span className="tw" style={S({ position: "absolute", left: "73.9%", top: "31.7%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.2s" })} />
              <span className="tw" style={S({ position: "absolute", left: "45.0%", top: "20.4%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.5s" })} />
              <span className="tw" style={S({ position: "absolute", left: "7.1%", top: "4.0%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.4s" })} />
              <span className="tw" style={S({ position: "absolute", left: "88.0%", top: "8.4%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.1s" })} />
              <span className="tw" style={S({ position: "absolute", left: "2.1%", top: "36.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.2s" })} />
              <span className="tw" style={S({ position: "absolute", left: "16.1%", top: "30.3%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.5s" })} />
              <span className="tw" style={S({ position: "absolute", left: "3.7%", top: "15.5%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
              <span className="tw" style={S({ position: "absolute", left: "86.5%", top: "34.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.8s" })} />
              <span className="tw" style={S({ position: "absolute", left: "80.3%", top: "31.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "3.0s" })} />
              <span className="tw" style={S({ position: "absolute", left: "19.4%", top: "33.8%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.6s" })} />
              <span className="tw" style={S({ position: "absolute", left: "53.5%", top: "12.4%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.6s" })} />
              <span className="tw" style={S({ position: "absolute", left: "38.8%", top: "23.0%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.3s" })} />
              <span className="tw" style={S({ position: "absolute", left: "6.3%", top: "11.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.9s" })} />
              <span className="tw" style={S({ position: "absolute", left: "32.4%", top: "9.1%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
              <span className="tw" style={S({ position: "absolute", left: "26.8%", top: "10.3%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.2s" })} />
              <span className="tw" style={S({ position: "absolute", left: "40.0%", top: "13.5%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
              <span className="tw" style={S({ position: "absolute", left: "79.6%", top: "38.3%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.9s" })} />
              <span className="tw" style={S({ position: "absolute", left: "48.5%", top: "21.2%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.8s" })} />
              <span className="shoot" style={S({ position: "absolute", left: "78%", top: "4%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "1.5s" })} />
              <span className="shoot" style={S({ position: "absolute", left: "92%", top: "14%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "5s" })} />
              <svg width="214" height="344" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                <ellipse className="draw" cx="107" cy="51" rx="133" ry="17" transform="rotate(-12 107 51)" fill="none" stroke="var(--c1)" strokeOpacity=".7" strokeWidth="1.4" pathLength="1" />
                <ellipse cx="107" cy="51" rx="93" ry="10" transform="rotate(-12 107 51)" fill="none" stroke="var(--c1)" strokeOpacity=".25" strokeWidth="1" strokeDasharray="2 6" />
              </svg>
              <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "14px", height: "14px", margin: "-7px 0 0 -7px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, var(--tx), var(--c2))", boxShadow: "0 0 18px var(--c2)", offsetPath: "path('M 236.8 23.5 A 133 17 -12 1 1 -22.8 78.7 A 133 17 -12 1 1 236.8 23.5')", offsetRotate: "0deg" })} />
            </div>
            <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "2px" })}>
              <span style={S({ fontSize: "11px", opacity: ".8" })}>
أسبوع الفلك والفضاء 2026
              </span>
              <span style={S({ fontFamily: "TD, serif", fontSize: "26px", lineHeight: "1.1" })}>
ثورة الصواريخ
              </span>
            </div>
          </div>
        </div>
        <div className="glass" style={S({ flex: "0 0 230px", height: "360px", borderRadius: "28px", padding: "8px", boxSizing: "border-box", scrollSnapAlign: "center", transform: "translateY(0px)" })}>
          <div style={S({ position: "relative", width: "100%", height: "100%", borderRadius: "21px", overflow: "hidden", color: "var(--tx)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "18px", boxSizing: "border-box", "--c1": "#13707B", "--c2": "#C99A2E", "--tx": "#0B3B41", "--ll": "0", "--sc": "#F4F1EA", background: "radial-gradient(120% 80% at 75% 0%, #FFFFFF 0%, #F4F1EA 45%, #DCEBE8 100%)" })}>
            <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
              <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
              <svg width="214" height="344" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                <ellipse className="draw" cx="107" cy="51" rx="124" ry="33" fill="none" stroke="var(--c1)" strokeOpacity="0.55" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.00s" })} />
                <ellipse className="draw" cx="107" cy="51" rx="113" ry="28" fill="none" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.15s" })} />
                <ellipse className="draw" cx="107" cy="51" rx="103" ry="22" fill="none" stroke="var(--c1)" strokeOpacity="0.35" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.30s" })} />
                <ellipse className="draw" cx="107" cy="51" rx="92" ry="17" fill="none" stroke="var(--c1)" strokeOpacity="0.25" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.45s" })} />
                <line x1="107" y1="66" x2="107" y2="87" stroke="var(--c2)" strokeWidth="3" strokeDasharray="3 3" />
              </svg>
              <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 226 51 A 119 31 0 1 1 -12 51 A 119 31 0 1 1 226 51')", offsetRotate: "auto", animationDuration: "3.2s", animationDelay: "0.0s" })} />
              <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 215 51 A 108 25 0 1 1 -1 51 A 108 25 0 1 1 215 51')", offsetRotate: "auto", animationDuration: "3.9s", animationDelay: "-1.1s" })} />
              <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 204 51 A 97 20 0 1 1 10 51 A 97 20 0 1 1 204 51')", offsetRotate: "auto", animationDuration: "4.6s", animationDelay: "-2.2s" })} />
              <div style={S({ position: "absolute", left: "11px", top: "58px", filter: "drop-shadow(0 8px 18px rgba(0,0,0,.25))" })}>
                <svg width="43" height="49" viewBox="-50 -62 100 114" aria-hidden="true">
                  <defs>
                    <linearGradient id="bz43" x1="0" y1="-1" x2="0" y2="1">
                      <stop offset="0" stopColor="var(--c2)" />
                      <stop offset="1" stopColor="var(--c1)" />
                    </linearGradient>
                    <radialGradient id="fc43" cx=".4" cy=".35" r=".8">
                      <stop offset="0" stopColor="#FFFFFF" stopOpacity=".22" />
                      <stop offset="1" stopColor="#FFFFFF" stopOpacity=".02" />
                    </radialGradient>
                  </defs>
                  <rect x="-7" y="-60" width="14" height="8" rx="2.5" fill="url(#bz43)" />
                  <rect x="-3" y="-53" width="6" height="6" fill="var(--c1)" />
                  <rect x="30" y="-46" width="9" height="6" rx="2" fill="var(--c1)" transform="rotate(40 34 -43)" />
                  <circle r="46" fill="none" stroke="url(#bz43)" strokeWidth="5" />
                  <circle r="42.5" fill="url(#fc43)" />
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
              </div>
            </div>
            <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "2px" })}>
              <span style={S({ fontSize: "11px", opacity: ".8" })}>
دوري نادي العلوم الرياضي
              </span>
              <span style={S({ fontFamily: "TD, serif", fontSize: "26px", lineHeight: "1.1" })}>
التحدي
              </span>
            </div>
          </div>
        </div>
        <div className="glass" style={S({ flex: "0 0 230px", height: "360px", borderRadius: "28px", padding: "8px", boxSizing: "border-box", scrollSnapAlign: "center", transform: "translateY(14px)" })}>
          <div style={S({ position: "relative", width: "100%", height: "100%", borderRadius: "21px", overflow: "hidden", color: "var(--tx)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "18px", boxSizing: "border-box", "--c1": "#7FD0D4", "--c2": "#E7C873", "--tx": "#FFFFFF", "--ll": "1", "--sc": "#072A2F", background: "radial-gradient(120% 80% at 75% 0%, #1A7F86 0%, #0E4F56 45%, #072A2F 100%)" })}>
            <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
              <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
              <span className="ripple" style={S({ position: "absolute", left: "58px", top: "36px", width: "99px", height: "99px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "0.00s" })} />
              <span className="ripple" style={S({ position: "absolute", left: "58px", top: "36px", width: "99px", height: "99px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "1.33s" })} />
              <span className="ripple" style={S({ position: "absolute", left: "58px", top: "36px", width: "99px", height: "99px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "2.66s" })} />
              <svg width="214" height="344" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                <ellipse className="draw" cx="107" cy="85" rx="76" ry="29" transform="rotate(-24 107 85)" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" pathLength="1" />
              </svg>
              <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 176.8 53.9 A 76 29 -24 1 1 37.2 116.1 A 76 29 -24 1 1 176.8 53.9')", offsetRotate: "0deg", animationDuration: "9s" })} />
              <div className="popin" style={S({ position: "absolute", left: "62px", top: "40px", width: "90px", height: "90px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, #FFFFFF, #F4F1EA)", boxShadow: "0 0 0 6px rgba(255,255,255,.18), 0 18px 40px rgba(0,0,0,.28)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                <img className="forms" src="/brand/logo-128.png" alt="" style={S({ width: "67px", height: "auto" })} />
              </div>
              <svg width="214" height="344" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
                <path d="M 176.8 53.9 A 76 29 -24 0 1 37.2 116.1" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" />
              </svg>
              <span style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 176.8 53.9 A 76 29 -24 1 1 37.2 116.1 A 76 29 -24 1 1 176.8 53.9')", offsetRotate: "0deg", animation: "glide 9s linear infinite, front 9s steps(1,end) infinite" })} />
              <span className="glint" style={S({ position: "absolute", left: "50%", top: "6px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.6s" })} />
              <span className="glint" style={S({ position: "absolute", left: "14%", top: "34px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.0s" })} />
              <span className="glint" style={S({ position: "absolute", left: "86%", top: "39px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.4s" })} />
              <span className="glint" style={S({ position: "absolute", left: "26%", top: "12px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.8s" })} />
              <span className="glint" style={S({ position: "absolute", left: "76%", top: "13px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "4.2s" })} />
            </div>
            <div style={S({ position: "relative", display: "flex", flexDirection: "column", gap: "2px" })}>
              <span style={S({ fontSize: "11px", opacity: ".8" })}>
لقاء أعضاء نادي العلوم
              </span>
              <span style={S({ fontFamily: "TD, serif", fontSize: "26px", lineHeight: "1.1" })}>
لقاء الأعضاء
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="glass" style={S({ position: "relative", width: "100%", maxWidth: "460px", borderRadius: "32px", padding: "26px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "14px" })}>
        <h2 style={S({ margin: "0", fontSize: "20px", color: "#0B3B41" })}>
دخول قادة النادي
        </h2>
        {v.stepMail ? (
          <>
          <label htmlFor="nm" style={S({ fontSize: "13px", color: "#2C4245" })}>
اسمك (أول مرة فقط)
          </label>
          <input id="nm" className="field" value={v.name} onChange={v.onName} onKeyDown={v.enterKey} autoComplete="name" placeholder="الاسم كما يظهر للنادي" style={S({ height: "54px", border: "1px solid rgba(255,255,255,.95)", borderRadius: "999px", padding: "0 22px", fontFamily: "TS, sans-serif", fontSize: "16px", background: "rgba(255,255,255,.78)", color: "#18292C" })} />
          <label htmlFor="em" style={S({ fontSize: "13px", color: "#2C4245" })}>
بريدك الجامعي
          </label>
          <input id="em" className="field" type="email" value={v.mail} onChange={v.onMail} onKeyDown={v.enterKey} enterKeyHint="go" placeholder="s4xxxxxxxx@uqu.edu.sa" style={S({ height: "54px", border: `1px solid ${v.border}`, borderRadius: "999px", padding: "0 22px", fontFamily: "TS, sans-serif", fontSize: "16px", background: "rgba(255,255,255,.78)", color: "#18292C", direction: "ltr", textAlign: "right" })} />
          <span style={S({ fontSize: "12px", color: v.msgColor })}>
{v.msg}
          </span>
          <button type="button" onClick={v.ask} disabled={v.busy} style={S({ height: "54px", border: "0", borderRadius: "999px", background: "linear-gradient(160deg,#13707B,#0B3B41)", color: "#FFFFFF", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "16px", cursor: "pointer", opacity: v.goOp })}>
{v.goLabel}
          </button>
          </>
        ) : null}
        {v.stepWait ? (
          <>
          <div className="inA" style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center", padding: "6px 0" })}>
            <span className="spin" style={S({ width: "64px", height: "64px", borderRadius: "50%", border: "2px dashed #C99A2E", animationDuration: "12s" })} />
            <b style={S({ fontSize: "17px", color: "#0B3B41" })}>
{v.waitTitle}
            </b>
            <span style={S({ fontSize: "14px", color: "#3E5456", lineHeight: "1.7" })}>
{v.waitText}
            </span>
            {v.waitActions}
          </div>
          </>
        ) : null}
        <div style={S({ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "18px", background: "rgba(201,154,46,.12)", fontSize: "13px", lineHeight: "1.7", color: "#5C4612" })}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8E6C1F" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={S({ flex: "0 0 18px", marginTop: "2px" })}>
            <path d="M12 3l9 16H3z" />
            <path d="M12 10v4M12 17h.01" />
          </svg>
          <span>
خطوات الدخول ورابط المنصة خاصة بقادة النادي، لا تشاركها مع أي أحد
          </span>
        </div>
      </section>
      {v.gate ? (
        <>
        <div style={S({ position: "fixed", inset: "0", zIndex: "30", background: "rgba(7,37,41,.35)", WebkitBackdropFilter: "blur(10px)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" })}>
          <div className="inA glass" style={S({ width: "100%", maxWidth: "360px", borderRadius: "30px", padding: "26px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center", textAlign: "center" })}>
            <img src="/brand/logo-128.png" alt="" style={S({ height: "64px", width: "auto" })} />
            <form onSubmit={v.submitLogin} method="post" action="/api/owner/login" style={S({ width: "100%", display: "flex", flexDirection: "column", gap: "14px" })}>
            {/* password managers need a username next to the password */}
            <input type="text" name="username" autoComplete="username" value="صاحبة المنصة" readOnly tabIndex={-1} aria-hidden="true" className="sr-only" />
            <input className="field" type="password" name="password" id="owner-password" value={v.pass} onChange={v.onPass} aria-label="كلمة السر" placeholder="••••••" autoFocus autoComplete="current-password" style={S({ width: "100%", boxSizing: "border-box", height: "54px", border: "1px solid rgba(255,255,255,.95)", borderRadius: "999px", padding: "0 22px", fontFamily: "TS, sans-serif", fontSize: "22px", letterSpacing: "6px", textAlign: "center", background: "rgba(255,255,255,.8)" })} />
            <button type="submit" disabled={v.passBusy} style={S({ width: "100%", height: "50px", borderRadius: "999px", background: "#0B3B41", color: "#FFFFFF", border: "0", cursor: "pointer", fontFamily: "TS, sans-serif", fontSize: "16px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", opacity: v.passOp })}>
دخول
            </button>
            </form>
            {v.passError ? <span role="alert" style={S({ fontSize: "13px", color: "#B5533F" })}>{v.passError}</span> : null}
            <button type="button" onClick={v.closeGate} style={S({ border: "0", background: "transparent", color: "#4F6567", fontFamily: "TS, sans-serif", fontSize: "13px", cursor: "pointer" })}>
إغلاق
            </button>
          </div>
        </div>
        </>
      ) : null}
    </div>
    </>
  );
}
