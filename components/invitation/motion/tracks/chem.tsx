// chem track — scene and loader, moved verbatim from the Invite board (design-reference/Invite.dc.html).
import { S } from '@/components/boards/css';

export function Scene() {
  return (
    <>

        <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
          <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
          <div style={S({ position: "absolute", left: "27px", top: "59px" })}>
            <svg width="335" height="103" viewBox="0 0 340 104" aria-hidden="true" style={S({ opacity: "0.5" })}>
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
          <div style={S({ position: "absolute", left: "58px", top: "83px", display: "flex", gap: "6px", direction: "ltr" })}>
            <span className="flyin" style={S({ "--fx": "-120px", "--fy": "-90px", "--fr": "-30deg", animationDelay: "0.30s" })}>
              <span className="bob" style={S({ display: "block", animationDelay: "0.0s" })}>
                <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "50px", height: "56px", padding: "4px 4px", boxSizing: "border-box", borderRadius: "7px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                  <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "8px", fontWeight: "700", opacity: ".9" })}>
                    <span>
16
                    </span>
                    <span style={S({ fontWeight: "400", fontSize: "6px" })}>
32.06
                    </span>
                  </span>
                  <span style={S({ fontFamily: "TD, serif", fontSize: "25px", textAlign: "center" })}>
S
                  </span>
                  <span style={S({ fontFamily: "TS, sans-serif", fontSize: "6px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كبريت
                  </span>
                </span>
              </span>
            </span>
            <span className="flyin" style={S({ "--fx": "-40px", "--fy": "-140px", "--fr": "20deg", animationDelay: "0.48s" })}>
              <span className="bob" style={S({ display: "block", animationDelay: "0.4s" })}>
                <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "50px", height: "56px", padding: "4px 4px", boxSizing: "border-box", borderRadius: "7px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                  <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "8px", fontWeight: "700", opacity: ".9" })}>
                    <span>
6
                    </span>
                    <span style={S({ fontWeight: "400", fontSize: "6px" })}>
12.011
                    </span>
                  </span>
                  <span style={S({ fontFamily: "TD, serif", fontSize: "25px", textAlign: "center" })}>
C
                  </span>
                  <span style={S({ fontFamily: "TS, sans-serif", fontSize: "6px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كربون
                  </span>
                </span>
              </span>
            </span>
            <span className="flyin" style={S({ "--fx": "0px", "--fy": "-160px", "--fr": "-12deg", animationDelay: "0.66s" })}>
              <span className="bob" style={S({ display: "block", animationDelay: "0.8s" })}>
                <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "50px", height: "56px", padding: "4px 4px", boxSizing: "border-box", borderRadius: "7px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                  <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "8px", fontWeight: "700", opacity: ".9" })}>
                    <span>
92
                    </span>
                    <span style={S({ fontWeight: "400", fontSize: "6px" })}>
238.03
                    </span>
                  </span>
                  <span style={S({ fontFamily: "TD, serif", fontSize: "25px", textAlign: "center" })}>
U
                  </span>
                  <span style={S({ fontFamily: "TS, sans-serif", fontSize: "6px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                  </span>
                </span>
              </span>
            </span>
            <span className="flyin" style={S({ "--fx": "60px", "--fy": "-130px", "--fr": "28deg", animationDelay: "0.84s" })}>
              <span className="bob" style={S({ display: "block", animationDelay: "1.2s" })}>
                <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "50px", height: "56px", padding: "4px 4px", boxSizing: "border-box", borderRadius: "7px", background: "linear-gradient(160deg,#F7E3A6,#C99A2E)", border: "1.5px solid var(--c2)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "#0B1F24", direction: "ltr", lineHeight: "1" })}>
                  <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "8px", fontWeight: "700", opacity: ".9" })}>
                    <span>
✦
                    </span>
                    <span style={S({ fontWeight: "400", fontSize: "6px" })} />
                  </span>
                  <span style={S({ fontFamily: "TD, serif", fontSize: "25px", textAlign: "center" })}>
Q
                  </span>
                  <span style={S({ fontFamily: "TS, sans-serif", fontSize: "6px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
نادي العلوم
                  </span>
                </span>
              </span>
            </span>
            <span className="flyin" style={S({ "--fx": "130px", "--fy": "-100px", "--fr": "-24deg", animationDelay: "1.02s" })}>
              <span className="bob" style={S({ display: "block", animationDelay: "1.6s" })}>
                <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "50px", height: "56px", padding: "4px 4px", boxSizing: "border-box", borderRadius: "7px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                  <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "8px", fontWeight: "700", opacity: ".9" })}>
                    <span>
92
                    </span>
                    <span style={S({ fontWeight: "400", fontSize: "6px" })}>
238.03
                    </span>
                  </span>
                  <span style={S({ fontFamily: "TD, serif", fontSize: "25px", textAlign: "center" })}>
U
                  </span>
                  <span style={S({ fontFamily: "TS, sans-serif", fontSize: "6px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                  </span>
                </span>
              </span>
            </span>
          </div>
          <span style={S({ position: "absolute", left: "23px", top: "82px", width: "0", height: "0" })}>
            <span className="orbitE" style={S({ position: "absolute", left: "-14px", top: "-14px", "--r": "18px", animationDuration: "9.5s", animationDelay: "-2.9s" })}>
              <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
1
                </span>
                <b style={S({ fontFamily: "TS, sans-serif", fontSize: "12px" })}>
H
                </b>
              </span>
            </span>
          </span>
          <span style={S({ position: "absolute", left: "367px", top: "87px", width: "0", height: "0" })}>
            <span className="orbitE" style={S({ position: "absolute", left: "-14px", top: "-14px", "--r": "18px", animationDuration: "13.7s", animationDelay: "-5.9s" })}>
              <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
8
                </span>
                <b style={S({ fontFamily: "TS, sans-serif", fontSize: "12px" })}>
O
                </b>
              </span>
            </span>
          </span>
          <span style={S({ position: "absolute", left: "39px", top: "196px", width: "0", height: "0" })}>
            <span className="orbitE" style={S({ position: "absolute", left: "-14px", top: "-14px", "--r": "18px", animationDuration: "8.2s", animationDelay: "-3.7s" })}>
              <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
7
                </span>
                <b style={S({ fontFamily: "TS, sans-serif", fontSize: "12px" })}>
N
                </b>
              </span>
            </span>
          </span>
          <span style={S({ position: "absolute", left: "351px", top: "201px", width: "0", height: "0" })}>
            <span className="orbitE" style={S({ position: "absolute", left: "-14px", top: "-14px", "--r": "10px", animationDuration: "11.9s", animationDelay: "-7.2s" })}>
              <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
11
                </span>
                <b style={S({ fontFamily: "TS, sans-serif", fontSize: "12px" })}>
Na
                </b>
              </span>
            </span>
          </span>
          <span style={S({ position: "absolute", left: "195px", top: "55px", width: "0", height: "0" })}>
            <span className="orbitE" style={S({ position: "absolute", left: "-14px", top: "-14px", "--r": "10px", animationDuration: "10.2s", animationDelay: "-6.9s" })}>
              <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
26
                </span>
                <b style={S({ fontFamily: "TS, sans-serif", fontSize: "12px" })}>
Fe
                </b>
              </span>
            </span>
          </span>
          <span style={S({ position: "absolute", left: "117px", top: "50px", width: "0", height: "0" })}>
            <span className="orbitE" style={S({ position: "absolute", left: "-14px", top: "-14px", "--r": "14px", animationDuration: "11.3s", animationDelay: "-4.6s" })}>
              <span style={S({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "7px", border: "1.2px solid color-mix(in srgb, var(--c1) 70%, transparent)", background: "color-mix(in srgb, var(--c1) 12%, transparent)", color: "var(--c1)", lineHeight: "1", direction: "ltr" })}>
                <span style={S({ fontSize: "6px", color: "var(--c2)" })}>
79
                </span>
                <b style={S({ fontFamily: "TS, sans-serif", fontSize: "12px" })}>
Au
                </b>
              </span>
            </span>
          </span>
          <svg width="390" height="844" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
            <ellipse className="draw" cx="195" cy="111" rx="170" ry="48" fill="none" stroke="var(--c2)" strokeOpacity=".5" strokeWidth="1.2" pathLength="1" style={S({ animationDelay: "1.4s" })} />
          </svg>
          <span className="glint" style={S({ position: "absolute", left: "5%", top: "98px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "1.50s" })} />
          <span className="glint" style={S({ position: "absolute", left: "29%", top: "194px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "1.85s" })} />
          <span className="glint" style={S({ position: "absolute", left: "73%", top: "90px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.20s" })} />
          <span className="glint" style={S({ position: "absolute", left: "76%", top: "87px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.55s" })} />
          <span className="glint" style={S({ position: "absolute", left: "60%", top: "86px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.90s" })} />
          <span className="glint" style={S({ position: "absolute", left: "4%", top: "188px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.25s" })} />
          <span className="glint" style={S({ position: "absolute", left: "23%", top: "98px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.60s" })} />
          <span className="glint" style={S({ position: "absolute", left: "92%", top: "188px", width: "9px", height: "9px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.95s" })} />
        </div>
        
    </>
  );
}

export function Loader() {
  return (
    <>

              <div style={S({ display: "flex", gap: "4px", direction: "ltr" })}>
                <span className="litseq" style={S({ display: "block", animationDelay: "0.0s" })}>
                  <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "39px", height: "44px", padding: "3px 4px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                    <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                      <span>
16
                      </span>
                      <span style={S({ fontWeight: "400", fontSize: "5px" })} />
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "20px", textAlign: "center" })}>
S
                    </span>
                    <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كبريت
                    </span>
                  </span>
                </span>
                <span className="litseq" style={S({ display: "block", animationDelay: "0.3s" })}>
                  <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "39px", height: "44px", padding: "3px 4px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                    <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                      <span>
6
                      </span>
                      <span style={S({ fontWeight: "400", fontSize: "5px" })} />
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "20px", textAlign: "center" })}>
C
                    </span>
                    <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
كربون
                    </span>
                  </span>
                </span>
                <span className="litseq" style={S({ display: "block", animationDelay: "0.6s" })}>
                  <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "39px", height: "44px", padding: "3px 4px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                    <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                      <span>
92
                      </span>
                      <span style={S({ fontWeight: "400", fontSize: "5px" })} />
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "20px", textAlign: "center" })}>
U
                    </span>
                    <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                    </span>
                  </span>
                </span>
                <span className="litseq" style={S({ display: "block", animationDelay: "0.9s" })}>
                  <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "39px", height: "44px", padding: "3px 4px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,#F7E3A6,#C99A2E)", border: "1.5px solid var(--c2)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "#0B1F24", direction: "ltr", lineHeight: "1" })}>
                    <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                      <span>
✦
                      </span>
                      <span style={S({ fontWeight: "400", fontSize: "5px" })} />
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "20px", textAlign: "center" })}>
Q
                    </span>
                    <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
نادي العلوم
                    </span>
                  </span>
                </span>
                <span className="litseq" style={S({ display: "block", animationDelay: "1.2s" })}>
                  <span style={S({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "39px", height: "44px", padding: "3px 4px", boxSizing: "border-box", borderRadius: "5px", background: "linear-gradient(160deg,color-mix(in srgb, var(--c1) 30%, transparent),color-mix(in srgb, var(--c1) 10%, transparent))", border: "1.5px solid color-mix(in srgb, var(--c1) 80%, transparent)", boxShadow: "0 10px 22px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.35)", color: "var(--c1)", direction: "ltr", lineHeight: "1" })}>
                    <span style={S({ display: "flex", justifyContent: "space-between", fontFamily: "TS, sans-serif", fontSize: "6px", fontWeight: "700", opacity: ".9" })}>
                      <span>
92
                      </span>
                      <span style={S({ fontWeight: "400", fontSize: "5px" })} />
                    </span>
                    <span style={S({ fontFamily: "TD, serif", fontSize: "20px", textAlign: "center" })}>
U
                    </span>
                    <span style={S({ fontFamily: "TS, sans-serif", fontSize: "5px", textAlign: "center", direction: "rtl", opacity: ".9" })}>
يورانيوم
                    </span>
                  </span>
                </span>
              </div>
              
    </>
  );
}
