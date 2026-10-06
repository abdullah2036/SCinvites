// club card cover — moved verbatim from the Events board (design-reference/Events.dc.html).
import { S } from '@/components/boards/css';

export default function Cover() {
  return (
    <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
                <span className="ripple" style={S({ position: "absolute", left: "97px", top: "42px", width: "166px", height: "166px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "0.00s" })} />
                <span className="ripple" style={S({ position: "absolute", left: "97px", top: "42px", width: "166px", height: "166px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "1.33s" })} />
                <span className="ripple" style={S({ position: "absolute", left: "97px", top: "42px", width: "166px", height: "166px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "2.66s" })} />
                <svg width="360" height="440" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
                  <ellipse className="draw" cx="180" cy="126" rx="129" ry="48" transform="rotate(-24 180 126)" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" pathLength="1" />
                </svg>
                <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 297.4 73.4 A 129 48 -24 1 1 62.6 177.9 A 129 48 -24 1 1 297.4 73.4')", offsetRotate: "0deg", animationDuration: "9s" })} />
                <div className="popin" style={S({ position: "absolute", left: "104px", top: "50px", width: "151px", height: "151px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, #FFFFFF, #F4F1EA)", boxShadow: "0 0 0 6px rgba(255,255,255,.18), 0 18px 40px rgba(0,0,0,.28)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                  <img className="forms" src="/brand/logo-128.png" alt="" style={S({ width: "112px", height: "auto" })} />
                </div>
                <svg width="360" height="440" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
                  <path d="M 297.4 73.4 A 129 48 -24 0 1 62.6 177.9" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" />
                </svg>
                <span style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 297.4 73.4 A 129 48 -24 1 1 62.6 177.9 A 129 48 -24 1 1 297.4 73.4')", offsetRotate: "0deg", animation: "glide 9s linear infinite, front 9s steps(1,end) infinite" })} />
                <span className="glint" style={S({ position: "absolute", left: "50%", top: "6px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.6s" })} />
                <span className="glint" style={S({ position: "absolute", left: "14%", top: "42px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.0s" })} />
                <span className="glint" style={S({ position: "absolute", left: "86%", top: "49px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.4s" })} />
                <span className="glint" style={S({ position: "absolute", left: "26%", top: "13px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.8s" })} />
                <span className="glint" style={S({ position: "absolute", left: "76%", top: "16px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "4.2s" })} />
              </div>
  );
}
