/* eslint-disable */
// sport track — scene and loader, moved verbatim from the Invite board (design-reference/Invite.dc.html).
import { S } from '@/components/boards/css';

export function Scene() {
  return (
    <>

        <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
          <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
          <svg width="390" height="844" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
            <ellipse className="draw" cx="195" cy="125" rx="226" ry="82" fill="none" stroke="var(--c1)" strokeOpacity="0.55" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.00s" })} />
            <ellipse className="draw" cx="195" cy="125" rx="207" ry="68" fill="none" stroke="var(--c1)" strokeOpacity="0.45" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.15s" })} />
            <ellipse className="draw" cx="195" cy="125" rx="187" ry="55" fill="none" stroke="var(--c1)" strokeOpacity="0.35" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.30s" })} />
            <ellipse className="draw" cx="195" cy="125" rx="168" ry="41" fill="none" stroke="var(--c1)" strokeOpacity="0.25" strokeWidth="1.3" pathLength="1" style={S({ animationDelay: "0.45s" })} />
            <line x1="195" y1="162" x2="195" y2="209" stroke="var(--c2)" strokeWidth="3" strokeDasharray="3 3" />
          </svg>
          <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 411 125 A 216 75 0 1 1 -21 125 A 216 75 0 1 1 411 125')", offsetRotate: "auto", animationDuration: "3.2s", animationDelay: "0.0s" })} />
          <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 392 125 A 197 62 0 1 1 -2 125 A 197 62 0 1 1 392 125')", offsetRotate: "auto", animationDuration: "3.9s", animationDelay: "-1.1s" })} />
          <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "34px", height: "5px", margin: "-2px 0 0 -17px", borderRadius: "5px", background: "linear-gradient(90deg, transparent, var(--c2))", boxShadow: "0 0 10px var(--c2)", offsetPath: "path('M 372 125 A 177 48 0 1 1 18 125 A 177 48 0 1 1 372 125')", offsetRotate: "auto", animationDuration: "4.6s", animationDelay: "-2.2s" })} />
          <div style={S({ position: "absolute", left: "20px", top: "58px", filter: "drop-shadow(0 8px 18px rgba(0,0,0,.25))" })}>
            <svg width="78" height="89" viewBox="-50 -62 100 114" aria-hidden="true">
              <defs>
                <linearGradient id="bz78" x1="0" y1="-1" x2="0" y2="1">
                  <stop offset="0" stopColor="var(--c2)" />
                  <stop offset="1" stopColor="var(--c1)" />
                </linearGradient>
                <radialGradient id="fc78" cx=".4" cy=".35" r=".8">
                  <stop offset="0" stopColor="#FFFFFF" stopOpacity=".22" />
                  <stop offset="1" stopColor="#FFFFFF" stopOpacity=".02" />
                </radialGradient>
              </defs>
              <rect x="-7" y="-60" width="14" height="8" rx="2.5" fill="url(#bz78)" />
              <rect x="-3" y="-53" width="6" height="6" fill="var(--c1)" />
              <rect x="30" y="-46" width="9" height="6" rx="2" fill="var(--c1)" transform="rotate(40 34 -43)" />
              <circle r="46" fill="none" stroke="url(#bz78)" strokeWidth="5" />
              <circle r="42.5" fill="url(#fc78)" />
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
        
    </>
  );
}

export function Loader() {
  return (
    <>

              <svg width="129" height="147" viewBox="-50 -62 100 114" aria-hidden="true">
                <defs>
                  <linearGradient id="bz129" x1="0" y1="-1" x2="0" y2="1">
                    <stop offset="0" stopColor="var(--c2)" />
                    <stop offset="1" stopColor="var(--c1)" />
                  </linearGradient>
                  <radialGradient id="fc129" cx=".4" cy=".35" r=".8">
                    <stop offset="0" stopColor="#FFFFFF" stopOpacity=".22" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity=".02" />
                  </radialGradient>
                </defs>
                <rect x="-7" y="-60" width="14" height="8" rx="2.5" fill="url(#bz129)" />
                <rect x="-3" y="-53" width="6" height="6" fill="var(--c1)" />
                <rect x="30" y="-46" width="9" height="6" rx="2" fill="var(--c1)" transform="rotate(40 34 -43)" />
                <circle r="46" fill="none" stroke="url(#bz129)" strokeWidth="5" />
                <circle r="42.5" fill="url(#fc129)" />
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
              
    </>
  );
}
