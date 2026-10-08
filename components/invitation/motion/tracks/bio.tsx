// bio track — scene and loader, moved verbatim from the Invite board (the club's design boards).
import { S } from '@/components/boards/css';

export function Scene() {
  return (
    <>

        <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
          <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
          <span style={S({ position: "absolute", left: "6px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "2px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "0.00s" })} />
          <span className="hx" style={S({ position: "absolute", left: "2px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.30s" })} />
          <span style={S({ position: "absolute", left: "22px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "18px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.18s" })} />
          <span className="hx" style={S({ position: "absolute", left: "18px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.48s" })} />
          <span style={S({ position: "absolute", left: "38px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "34px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.36s" })} />
          <span className="hx" style={S({ position: "absolute", left: "34px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.66s" })} />
          <span style={S({ position: "absolute", left: "54px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "50px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.54s" })} />
          <span className="hx" style={S({ position: "absolute", left: "50px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-1.84s" })} />
          <span style={S({ position: "absolute", left: "70px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "66px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.72s" })} />
          <span className="hx" style={S({ position: "absolute", left: "66px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.02s" })} />
          <span style={S({ position: "absolute", left: "86px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "82px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-0.90s" })} />
          <span className="hx" style={S({ position: "absolute", left: "82px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.20s" })} />
          <span style={S({ position: "absolute", left: "102px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "98px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.08s" })} />
          <span className="hx" style={S({ position: "absolute", left: "98px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.38s" })} />
          <span style={S({ position: "absolute", left: "118px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "114px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.26s" })} />
          <span className="hx" style={S({ position: "absolute", left: "114px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.56s" })} />
          <span style={S({ position: "absolute", left: "134px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "130px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.44s" })} />
          <span className="hx" style={S({ position: "absolute", left: "130px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.74s" })} />
          <span style={S({ position: "absolute", left: "150px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "146px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.62s" })} />
          <span className="hx" style={S({ position: "absolute", left: "146px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-2.92s" })} />
          <span style={S({ position: "absolute", left: "166px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "162px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.80s" })} />
          <span className="hx" style={S({ position: "absolute", left: "162px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.10s" })} />
          <span style={S({ position: "absolute", left: "182px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "178px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-1.98s" })} />
          <span className="hx" style={S({ position: "absolute", left: "178px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.28s" })} />
          <span style={S({ position: "absolute", left: "198px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "194px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.16s" })} />
          <span className="hx" style={S({ position: "absolute", left: "194px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.46s" })} />
          <span style={S({ position: "absolute", left: "214px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "210px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.34s" })} />
          <span className="hx" style={S({ position: "absolute", left: "210px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.64s" })} />
          <span style={S({ position: "absolute", left: "230px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "226px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.52s" })} />
          <span className="hx" style={S({ position: "absolute", left: "226px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-3.82s" })} />
          <span style={S({ position: "absolute", left: "246px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "242px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.70s" })} />
          <span className="hx" style={S({ position: "absolute", left: "242px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.00s" })} />
          <span style={S({ position: "absolute", left: "262px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "258px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-2.88s" })} />
          <span className="hx" style={S({ position: "absolute", left: "258px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.18s" })} />
          <span style={S({ position: "absolute", left: "278px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "274px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.06s" })} />
          <span className="hx" style={S({ position: "absolute", left: "274px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.36s" })} />
          <span style={S({ position: "absolute", left: "294px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "290px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.24s" })} />
          <span className="hx" style={S({ position: "absolute", left: "290px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.54s" })} />
          <span style={S({ position: "absolute", left: "310px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "306px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.42s" })} />
          <span className="hx" style={S({ position: "absolute", left: "306px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.72s" })} />
          <span style={S({ position: "absolute", left: "326px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "322px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.60s" })} />
          <span className="hx" style={S({ position: "absolute", left: "322px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-4.90s" })} />
          <span style={S({ position: "absolute", left: "342px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "338px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.78s" })} />
          <span className="hx" style={S({ position: "absolute", left: "338px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-5.08s" })} />
          <span style={S({ position: "absolute", left: "358px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "354px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-3.96s" })} />
          <span className="hx" style={S({ position: "absolute", left: "354px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-5.26s" })} />
          <span style={S({ position: "absolute", left: "374px", top: "57px", width: "1px", height: "32px", background: "color-mix(in srgb, var(--c1) 20%, transparent)" })} />
          <span className="hx" style={S({ position: "absolute", left: "370px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c1)", boxShadow: "0 0 8px var(--c1)", animationDelay: "-4.14s" })} />
          <span className="hx" style={S({ position: "absolute", left: "370px", top: "69px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--c2)", animationDelay: "-5.44s" })} />
          <div className="cell" style={S({ position: "absolute", left: "8%", top: "125px", animationDelay: "0.0s" })}>
            <svg width="64" height="64" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <radialGradient id="cy64" cx=".4" cy=".35" r=".7">
                  <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                  <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                </radialGradient>
              </defs>
              <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy64)" stroke="var(--c1)" strokeWidth="2.4" />
              <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
              <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
              <circle cx="60" cy="40" r="5" fill="var(--c2)" />
              <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
              <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
              <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
              <circle cx="34" cy="34" r="2" fill="var(--c1)" />
              <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
              <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
            </svg>
          </div>
          <div className="cell" style={S({ position: "absolute", left: "58%", top: "114px", animationDelay: "1.6s" })}>
            <svg width="52" height="52" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <radialGradient id="cy52" cx=".4" cy=".35" r=".7">
                  <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                  <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                </radialGradient>
              </defs>
              <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy52)" stroke="var(--c1)" strokeWidth="2.4" />
              <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
              <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
              <circle cx="60" cy="40" r="5" fill="var(--c2)" />
              <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
              <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
              <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
              <circle cx="34" cy="34" r="2" fill="var(--c1)" />
              <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
              <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
            </svg>
          </div>
          <div className="cell" style={S({ position: "absolute", left: "34%", top: "164px", animationDelay: "3.2s" })}>
            <svg width="40" height="40" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <radialGradient id="cy40" cx=".4" cy=".35" r=".7">
                  <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                  <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                </radialGradient>
              </defs>
              <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy40)" stroke="var(--c1)" strokeWidth="2.4" />
              <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
              <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
              <circle cx="60" cy="40" r="5" fill="var(--c2)" />
              <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
              <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
              <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
              <circle cx="34" cy="34" r="2" fill="var(--c1)" />
              <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
              <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
            </svg>
          </div>
          <div className="cell" style={S({ position: "absolute", left: "80%", top: "155px", animationDelay: "4.8s" })}>
            <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <radialGradient id="cy36" cx=".4" cy=".35" r=".7">
                  <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
                  <stop offset="1" stopColor="var(--c1)" stopOpacity=".08" />
                </radialGradient>
              </defs>
              <path d="M50 6 C74 6 94 22 94 48 C94 76 74 94 48 94 C24 94 6 76 6 50 C6 24 26 6 50 6Z" fill="url(#cy36)" stroke="var(--c1)" strokeWidth="2.4" />
              <path d="M50 12 C70 12 88 26 88 48 C88 72 72 88 48 88" fill="none" stroke="var(--c1)" strokeOpacity=".35" strokeWidth="1" />
              <circle cx="56" cy="44" r="16" fill="var(--c2)" fillOpacity=".35" stroke="var(--c2)" strokeWidth="2" />
              <circle cx="60" cy="40" r="5" fill="var(--c2)" />
              <ellipse cx="30" cy="62" rx="9" ry="4.5" transform="rotate(-25 30 62)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
              <path d="M23 63 q4 -4 7 0 t7 -1" fill="none" stroke="var(--c1)" strokeWidth="1" />
              <ellipse cx="66" cy="72" rx="7" ry="3.5" transform="rotate(20 66 72)" fill="none" stroke="var(--c1)" strokeWidth="1.6" />
              <circle cx="34" cy="34" r="2" fill="var(--c1)" />
              <circle cx="42" cy="72" r="1.6" fill="var(--c1)" />
              <circle cx="76" cy="56" r="1.6" fill="var(--c1)" />
            </svg>
          </div>
        </div>
        
    </>
  );
}

export function Loader() {
  return (
    <>

              <div style={S({ display: "flex", gap: "8px", alignItems: "center", height: "90px" })}>
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
              
    </>
  );
}
