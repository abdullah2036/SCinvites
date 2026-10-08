// math track — scene and loader, moved verbatim from the Invite board (the club's design boards).
import { S } from '@/components/boards/css';

export function Scene() {
  return (
    <>

        <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
          <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
          <div style={S({ position: "absolute", left: "0", right: "0", top: "0", height: "228px", backgroundImage: "linear-gradient(color-mix(in srgb, var(--c1) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--c1) 8%, transparent) 1px, transparent 1px)", backgroundSize: "32px 32px", WebkitMaskImage: "linear-gradient(180deg,#000,transparent)", maskImage: "linear-gradient(180deg,#000,transparent)" })} />
          <span className="grow" style={S({ position: "absolute", left: "8%", top: "160px", width: "20px", height: "50px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.2s" })} />
          <span className="grow" style={S({ position: "absolute", left: "20%", top: "110px", width: "20px", height: "100px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.3s" })} />
          <span className="grow" style={S({ position: "absolute", left: "32%", top: "167px", width: "20px", height: "43px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.4s" })} />
          <span className="grow" style={S({ position: "absolute", left: "44%", top: "127px", width: "20px", height: "82px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.5s" })} />
          <span className="grow" style={S({ position: "absolute", left: "56%", top: "170px", width: "20px", height: "40px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.6s" })} />
          <span className="grow" style={S({ position: "absolute", left: "68%", top: "159px", width: "20px", height: "51px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.7s" })} />
          <span className="grow" style={S({ position: "absolute", left: "80%", top: "107px", width: "20px", height: "102px", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,color-mix(in srgb, var(--c2) 35%, transparent),color-mix(in srgb, var(--c2) 4%, transparent))", animationDelay: "0.8s" })} />
          <svg width="390" height="844" style={S({ position: "absolute", left: "0", top: "0", filter: "drop-shadow(0 0 6px var(--c1))" })} aria-hidden="true">
            <path className="redraw" d="M16 182 L70 160 L117 173 L172 118 L226 132 L281 77 L367 41" fill="none" stroke="var(--c1)" strokeWidth="2.2" pathLength="1" />
          </svg>
          <span className="numf" style={S({ position: "absolute", left: "6%", top: "7%", fontFamily: "TD, serif", fontSize: "28px", color: "var(--c1)", animationDelay: "0.0s" })}>
Σ
          </span>
          <span className="numf" style={S({ position: "absolute", left: "22%", top: "11%", fontFamily: "TD, serif", fontSize: "22px", color: "var(--c2)", animationDelay: "0.8s" })}>
%
          </span>
          <span className="numf" style={S({ position: "absolute", left: "38%", top: "11%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c2)", animationDelay: "1.6s" })}>
∫
          </span>
          <span className="numf" style={S({ position: "absolute", left: "54%", top: "5%", fontFamily: "TD, serif", fontSize: "18px", color: "var(--c1)", animationDelay: "2.4s" })}>
σ
          </span>
          <span className="numf" style={S({ position: "absolute", left: "70%", top: "15%", fontFamily: "TD, serif", fontSize: "28px", color: "var(--c2)", animationDelay: "3.2s" })}>
μ
          </span>
          <span className="numf" style={S({ position: "absolute", left: "86%", top: "11%", fontFamily: "TD, serif", fontSize: "22px", color: "var(--c1)", animationDelay: "4.0s" })}>
∞
          </span>
        </div>
        
    </>
  );
}

export function Loader() {
  return (
    <>

              <div style={S({ display: "flex", alignItems: "flex-end", gap: "9px", height: "105px", borderBottom: "1.5px solid color-mix(in srgb, var(--tx) 40%, transparent)", padding: "0 6px" })}>
                <span className="bounce" style={S({ width: "15px", height: "30px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.0s" })} />
                <span className="bounce" style={S({ width: "15px", height: "48px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.1s" })} />
                <span className="bounce" style={S({ width: "15px", height: "66px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.2s" })} />
                <span className="bounce" style={S({ width: "15px", height: "84px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.3s" })} />
                <span className="bounce" style={S({ width: "15px", height: "102px", borderRadius: "4px 4px 0 0", background: "var(--c1)", animationDelay: "0.4s" })} />
                <span className="bounce" style={S({ width: "15px", height: "120px", borderRadius: "4px 4px 0 0", background: "var(--c2)", animationDelay: "0.5s" })} />
              </div>
              
    </>
  );
}
