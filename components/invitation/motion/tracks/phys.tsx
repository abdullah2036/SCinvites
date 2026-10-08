// phys track — scene and loader, moved verbatim from the Invite board (the club's design boards).
import { S } from '@/components/boards/css';

export function Scene() {
  return (
    <>

        <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
          <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
          <svg width="390" height="844" style={S({ position: "absolute", left: "0", top: "0", filter: "drop-shadow(0 0 6px var(--c1))" })} aria-hidden="true">
            <path className="wave" d="M-20 68 L-20 58.9 L-15 60.8 L-10 63.1 L-5 65.7 L0 68.4 L5 71.1 L10 73.6 L15 75.9 L20 77.8 L25 79.2 L30 80.1 L35 80.4 L40 80.0 L45 79.0 L50 77.5 L55 75.5 L60 73.2 L65 70.6 L70 67.9 L75 65.2 L80 62.7 L85 60.4 L90 58.6 L95 57.3 L100 56.5 L105 56.4 L110 56.9 L115 57.9 L120 59.5 L125 61.6 L130 64.0 L135 66.6 L140 69.3 L145 72.0 L150 74.5 L155 76.7 L160 78.4 L165 79.6 L170 80.3 L175 80.3 L180 79.7 L185 78.6 L190 76.9 L195 74.7 L200 72.3 L205 69.6 L210 66.9 L215 64.3 L220 61.8 L225 59.7 L230 58.1 L235 56.9 L240 56.4 L245 56.5 L250 57.2 L255 58.4 L260 60.2 L265 62.4 L270 64.9 L275 67.6 L280 70.3 L285 72.9 L290 75.3 L295 77.3 L300 78.9 L305 79.9 L310 80.4 L315 80.2 L320 79.4 L325 78.0 L330 76.2 L335 73.9 L340 71.4 L345 68.7 L350 66.0 L355 63.4 L360 61.0 L365 59.1 L370 57.6 L375 56.7 L380 56.4 L385 56.7 L390 57.6 L395 59.0 L400 60.9 L405 63.2 L410 65.8 L415 68.5" fill="none" stroke="var(--c1)" strokeOpacity="0.85" strokeWidth="1.6" style={S({ animationDuration: "2.5s" })} />
            <path className="wave" d="M-20 125 L-20 114.2 L-15 116.7 L-10 119.4 L-5 122.3 L0 125.3 L5 128.3 L10 131.2 L15 134.0 L20 136.5 L25 138.7 L30 140.5 L35 141.9 L40 142.8 L45 143.3 L50 143.3 L55 142.7 L60 141.7 L65 140.2 L70 138.3 L75 136.1 L80 133.6 L85 130.8 L90 127.9 L95 124.9 L100 121.9 L105 119.0 L110 116.3 L115 113.9 L120 111.7 L125 109.9 L130 108.6 L135 107.7 L140 107.4 L145 107.5 L150 108.1 L155 109.2 L160 110.7 L165 112.6 L170 114.9 L175 117.5 L180 120.3 L185 123.2 L190 126.2 L195 129.2 L200 132.1 L205 134.7 L210 137.2 L215 139.2 L220 140.9 L225 142.2 L230 143.0 L235 143.3 L240 143.1 L245 142.5 L250 141.3 L255 139.7 L260 137.7 L265 135.4 L270 132.8 L275 129.9 L280 127.0 L285 124.0 L290 121.0 L295 118.2 L300 115.5 L305 113.2 L310 111.1 L315 109.5 L320 108.3 L325 107.6 L330 107.3 L335 107.6 L340 108.4 L345 109.6 L350 111.2 L355 113.3 L360 115.7 L365 118.3 L370 121.2 L375 124.1 L380 127.1 L385 130.1 L390 132.9 L395 135.5 L400 137.8 L405 139.8 L410 141.4 L415 142.5" fill="none" stroke="var(--c2)" strokeOpacity="0.6" strokeWidth="1.6" style={S({ animationDuration: "3.5s" })} />
            <path className="wave" d="M-20 182 L-20 173.8 L-15 175.0 L-10 177.0 L-5 179.5 L0 182.3 L5 185.1 L10 187.6 L15 189.6 L20 190.8 L25 191.3 L30 190.9 L35 189.6 L40 187.7 L45 185.2 L50 182.5 L55 179.7 L60 177.2 L65 175.1 L70 173.8 L75 173.3 L80 173.7 L85 174.9 L90 176.8 L95 179.3 L100 182.0 L105 184.8 L110 187.3 L115 189.4 L120 190.7 L125 191.3 L130 191.0 L135 189.8 L140 187.9 L145 185.5 L150 182.8 L155 180.0 L160 177.4 L165 175.3 L170 173.9 L175 173.3 L180 173.6 L185 174.7 L190 176.6 L195 179.0 L200 181.7 L205 184.5 L210 187.1 L215 189.2 L220 190.6 L225 191.3 L230 191.1 L235 190.0 L240 188.2 L245 185.8 L250 183.0 L255 180.3 L260 177.7 L265 175.5 L270 174.0 L275 173.3 L280 173.5 L285 174.6 L290 176.3 L295 178.7 L300 181.4 L305 184.2 L310 186.8 L315 189.0 L320 190.5 L325 191.3 L330 191.1 L335 190.1 L340 188.4 L345 186.0 L350 183.3 L355 180.5 L360 177.9 L365 175.7 L370 174.1 L375 173.4 L380 173.5 L385 174.4 L390 176.1 L395 178.4 L400 181.1 L405 183.9 L410 186.6 L415 188.8" fill="none" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="1.6" style={S({ animationDuration: "4.5s" })} />
          </svg>
          <span className="zip" style={S({ position: "absolute", right: "-10px", top: "27px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "1.6s", animationDuration: "3.0s" })} />
          <span className="zip" style={S({ position: "absolute", right: "-10px", top: "27px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "0.5s", animationDuration: "3.4s" })} />
          <span className="zip" style={S({ position: "absolute", right: "-10px", top: "96px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "1.1s", animationDuration: "2.6s" })} />
          <span className="zip" style={S({ position: "absolute", right: "-10px", top: "155px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "2.7s", animationDuration: "3.6s" })} />
          <span className="zip" style={S({ position: "absolute", right: "-10px", top: "155px", width: "26px", height: "5px", borderRadius: "6px", background: "linear-gradient(270deg, var(--c2), transparent)", animationDelay: "3.1s", animationDuration: "3.4s" })} />
        </div>
        
    </>
  );
}

export function Loader() {
  return (
    <>

              <div style={S({ position: "relative", width: "150px", height: "150px" })}>
                <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", animationDuration: "2.2s" })}>
                  <div style={S({ position: "absolute", left: "0", right: "0", top: "50%", height: "51px", marginTop: "-26px", borderRadius: "50%", border: "1.5px solid var(--c1)", transform: "rotate(0deg)" })}>
                    <span style={S({ position: "absolute", right: "-4px", top: "50%", width: "8px", height: "8px", marginTop: "-4px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 10px var(--c2)" })} />
                  </div>
                </div>
                <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", animationDuration: "2.8s" })}>
                  <div style={S({ position: "absolute", left: "0", right: "0", top: "50%", height: "51px", marginTop: "-26px", borderRadius: "50%", border: "1.5px solid var(--c1)", transform: "rotate(60deg)" })}>
                    <span style={S({ position: "absolute", right: "-4px", top: "50%", width: "8px", height: "8px", marginTop: "-4px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 10px var(--c2)" })} />
                  </div>
                </div>
                <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", animationDuration: "3.4s" })}>
                  <div style={S({ position: "absolute", left: "0", right: "0", top: "50%", height: "51px", marginTop: "-26px", borderRadius: "50%", border: "1.5px solid var(--c1)", transform: "rotate(120deg)" })}>
                    <span style={S({ position: "absolute", right: "-4px", top: "50%", width: "8px", height: "8px", marginTop: "-4px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 10px var(--c2)" })} />
                  </div>
                </div>
                <span className="pulse" style={S({ position: "absolute", left: "50%", top: "50%", width: "14px", height: "14px", margin: "-7px 0 0 -7px", borderRadius: "50%", background: "var(--c2)" })} />
              </div>
              
    </>
  );
}
