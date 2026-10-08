// math card cover — moved verbatim from the Events board (the club's design boards).
import { S } from '@/components/boards/css';

export default function Cover() {
  return (
    <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                <div style={S({ position: "absolute", left: "0", right: "0", top: "0", height: "119px", backgroundImage: "linear-gradient(color-mix(in srgb, var(--c1) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--c1) 8%, transparent) 1px, transparent 1px)", backgroundSize: "30px 30px", WebkitMaskImage: "linear-gradient(180deg,#000,transparent)", maskImage: "linear-gradient(180deg,#000,transparent)" })} />
                <span className="grow" style={S({ position: "absolute", left: "8%", top: "76px", width: "18px", height: "33px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.2s" })} />
                <span className="grow" style={S({ position: "absolute", left: "20%", top: "66px", width: "18px", height: "44px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.3s" })} />
                <span className="grow" style={S({ position: "absolute", left: "32%", top: "72px", width: "18px", height: "37px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.4s" })} />
                <span className="grow" style={S({ position: "absolute", left: "44%", top: "74px", width: "18px", height: "36px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.5s" })} />
                <span className="grow" style={S({ position: "absolute", left: "56%", top: "62px", width: "18px", height: "47px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.6s" })} />
                <span className="grow" style={S({ position: "absolute", left: "68%", top: "83px", width: "18px", height: "26px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.7s" })} />
                <span className="grow" style={S({ position: "absolute", left: "80%", top: "57px", width: "18px", height: "53px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.8s" })} />
                <svg width="360" height="440" style={S({ position: "absolute", left: "0", top: "0", filter: "drop-shadow(0 0 6px var(--c1))" })} aria-hidden="true">
                  <path className="redraw" d="M14 95 L65 83 L108 90 L158 62 L209 69 L259 40 L338 21" fill="none" stroke="var(--c1)" strokeWidth="2.2" pathLength="1" />
                </svg>
                <span className="numf" style={S({ position: "absolute", left: "6%", top: "12%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c1)", animationDelay: "0.0s" })}>
Σ
                </span>
                <span className="numf" style={S({ position: "absolute", left: "22%", top: "16%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c1)", animationDelay: "0.8s" })}>
%
                </span>
                <span className="numf" style={S({ position: "absolute", left: "38%", top: "20%", fontFamily: "TD, serif", fontSize: "28px", color: "var(--c1)", animationDelay: "1.6s" })}>
∫
                </span>
                <span className="numf" style={S({ position: "absolute", left: "54%", top: "13%", fontFamily: "TD, serif", fontSize: "28px", color: "var(--c2)", animationDelay: "2.4s" })}>
σ
                </span>
                <span className="numf" style={S({ position: "absolute", left: "70%", top: "15%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c2)", animationDelay: "3.2s" })}>
μ
                </span>
                <span className="numf" style={S({ position: "absolute", left: "86%", top: "9%", fontFamily: "TD, serif", fontSize: "22px", color: "var(--c2)", animationDelay: "4.0s" })}>
∞
                </span>
              </div>
  );
}
