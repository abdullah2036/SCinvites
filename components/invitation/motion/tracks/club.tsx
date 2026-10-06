// club track — scene and loader, moved verbatim from the Invite board (design-reference/Invite.dc.html).
import { S } from '@/components/boards/css';

export function Scene() {
  return (
    <>

        <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
          <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
          <span className="ripple" style={S({ position: "absolute", left: "105px", top: "54px", width: "180px", height: "180px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "0.00s" })} />
          <span className="ripple" style={S({ position: "absolute", left: "105px", top: "54px", width: "180px", height: "180px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "1.33s" })} />
          <span className="ripple" style={S({ position: "absolute", left: "105px", top: "54px", width: "180px", height: "180px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "4s", animationDelay: "2.66s" })} />
          <svg width="390" height="844" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
            <ellipse className="draw" cx="195" cy="144" rx="139" ry="52" transform="rotate(-24 195 144)" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" pathLength="1" />
          </svg>
          <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 322.2 87.7 A 139 52 -24 1 1 67.8 201.0 A 139 52 -24 1 1 322.2 87.7')", offsetRotate: "0deg", animationDuration: "9s" })} />
          <div className="popin" style={S({ position: "absolute", left: "113px", top: "62px", width: "164px", height: "164px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, #FFFFFF, #F4F1EA)", boxShadow: "0 0 0 6px rgba(255,255,255,.18), 0 18px 40px rgba(0,0,0,.28)", display: "flex", alignItems: "center", justifyContent: "center" })}>
            <img className="forms" src="/brand/logo-128.png" alt="" style={S({ width: "121px", height: "auto" })} />
          </div>
          <svg width="390" height="844" style={S({ position: "absolute", left: "0", top: "0", pointerEvents: "none" })} aria-hidden="true">
            <path d="M 322.2 87.7 A 139 52 -24 0 1 67.8 201.0" fill="none" stroke="var(--c1)" strokeOpacity=".75" strokeWidth="2" />
          </svg>
          <span style={S({ position: "absolute", left: "0", top: "0", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)", boxShadow: "0 0 16px #E7C873", offsetPath: "path('M 322.2 87.7 A 139 52 -24 1 1 67.8 201.0 A 139 52 -24 1 1 322.2 87.7')", offsetRotate: "0deg", animation: "glide 9s linear infinite, front 9s steps(1,end) infinite" })} />
          <span className="glint" style={S({ position: "absolute", left: "50%", top: "6px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "2.6s" })} />
          <span className="glint" style={S({ position: "absolute", left: "14%", top: "74px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.0s" })} />
          <span className="glint" style={S({ position: "absolute", left: "86%", top: "88px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.4s" })} />
          <span className="glint" style={S({ position: "absolute", left: "26%", top: "20px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "3.8s" })} />
          <span className="glint" style={S({ position: "absolute", left: "76%", top: "24px", width: "11px", height: "11px", background: "var(--c2)", clipPath: "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)", animationDelay: "4.2s" })} />
        </div>
        
    </>
  );
}

export function Loader() {
  return (
    <>

              <div style={S({ position: "relative", width: "150px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" })}>
                <span className="ripple" style={S({ position: "absolute", inset: "22px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "2.4s" })} />
                <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", border: "1.5px solid color-mix(in srgb, var(--c1) 50%, transparent)", animationDuration: "3s" })}>
                  <span style={S({ position: "absolute", left: "50%", top: "-6px", width: "12px", height: "12px", marginLeft: "-6px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)" })} />
                </div>
                <div style={S({ width: "105px", height: "105px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 10px 26px rgba(0,0,0,.25)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                  <img className="formsL" src="/brand/logo-128.png" alt="" style={S({ width: "78px", height: "auto" })} />
                </div>
              </div>
              
    </>
  );
}
