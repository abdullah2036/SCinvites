/* eslint-disable */
// Generated from design-reference/Invite.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function InviteView({ v }: { v: any }) {
  return (
    <>
    <div ref={v.rootRef} className={v.calm} data-phase={v.phase} style={S({ width: v.frameW, height: v.frameH, position: "relative", overflow: "hidden", fontFamily: "TS, sans-serif", color: "var(--tx)", ...css(v.vs) })}>
      {v.artworkUrl ? (
        <div aria-hidden="true" style={S({ position: "absolute", inset: "0 0 auto 0", height: "62%", zIndex: 0 })}>
          <img src={v.artworkUrl} alt="" style={S({ width: "100%", height: "100%", objectFit: "cover" })} />
          <div style={S({ position: "absolute", inset: "0", background: "linear-gradient(to bottom, transparent 30%, var(--sc) 100%)" })} />
        </div>
      ) : null}
      {v.is_club ? (
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
            <img className="forms" src="/brand/logo.png" alt="" style={S({ width: "121px", height: "auto" })} />
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
      ) : null}
      {v.is_space ? (
        <>
        <div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
          <div style={S({ position: "absolute", left: "-20%", top: "-10%", width: "90%", height: "50%", borderRadius: "50%", background: "radial-gradient(closest-side, color-mix(in srgb, var(--c1) 22%, transparent), transparent)", filter: "blur(10px)" })} />
          <span className="tw" style={S({ position: "absolute", left: "24.1%", top: "5.0%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.5s" })} />
          <span className="tw" style={S({ position: "absolute", left: "7.5%", top: "16.7%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.7s" })} />
          <span className="tw" style={S({ position: "absolute", left: "53.6%", top: "11.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.8s" })} />
          <span className="tw" style={S({ position: "absolute", left: "93.4%", top: "2.0%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.6s" })} />
          <span className="tw" style={S({ position: "absolute", left: "31.4%", top: "25.5%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.5s" })} />
          <span className="tw" style={S({ position: "absolute", left: "34.1%", top: "16.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.7s" })} />
          <span className="tw" style={S({ position: "absolute", left: "28.4%", top: "37.8%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.0s" })} />
          <span className="tw" style={S({ position: "absolute", left: "29.6%", top: "28.5%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.6s" })} />
          <span className="tw" style={S({ position: "absolute", left: "42.5%", top: "12.2%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.7s" })} />
          <span className="tw" style={S({ position: "absolute", left: "26.4%", top: "32.1%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.4s" })} />
          <span className="tw" style={S({ position: "absolute", left: "98.8%", top: "21.2%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.0s" })} />
          <span className="tw" style={S({ position: "absolute", left: "98.7%", top: "8.6%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.9s" })} />
          <span className="tw" style={S({ position: "absolute", left: "44.2%", top: "8.2%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.8s" })} />
          <span className="tw" style={S({ position: "absolute", left: "63.2%", top: "8.7%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.5s" })} />
          <span className="tw" style={S({ position: "absolute", left: "70.4%", top: "11.8%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.6s" })} />
          <span className="tw" style={S({ position: "absolute", left: "13.0%", top: "37.4%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.1s" })} />
          <span className="tw" style={S({ position: "absolute", left: "36.0%", top: "4.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.0s" })} />
          <span className="tw" style={S({ position: "absolute", left: "33.1%", top: "13.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.3s" })} />
          <span className="tw" style={S({ position: "absolute", left: "41.2%", top: "37.8%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.5s" })} />
          <span className="tw" style={S({ position: "absolute", left: "29.8%", top: "8.5%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.4s" })} />
          <span className="tw" style={S({ position: "absolute", left: "38.4%", top: "38.5%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.0s" })} />
          <span className="tw" style={S({ position: "absolute", left: "5.4%", top: "7.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.7s" })} />
          <span className="tw" style={S({ position: "absolute", left: "44.1%", top: "9.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.2s" })} />
          <span className="tw" style={S({ position: "absolute", left: "6.4%", top: "7.6%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "0.1s" })} />
          <span className="tw" style={S({ position: "absolute", left: "49.1%", top: "10.7%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.5s" })} />
          <span className="tw" style={S({ position: "absolute", left: "29.7%", top: "39.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.6s" })} />
          <span className="tw" style={S({ position: "absolute", left: "44.0%", top: "20.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.3s" })} />
          <span className="tw" style={S({ position: "absolute", left: "64.4%", top: "17.7%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.6s" })} />
          <span className="tw" style={S({ position: "absolute", left: "4.6%", top: "10.9%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.3s" })} />
          <span className="tw" style={S({ position: "absolute", left: "41.9%", top: "11.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.7s" })} />
          <span className="tw" style={S({ position: "absolute", left: "31.8%", top: "5.6%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.9s" })} />
          <span className="tw" style={S({ position: "absolute", left: "65.0%", top: "35.0%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.2s" })} />
          <span className="tw" style={S({ position: "absolute", left: "43.2%", top: "37.3%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.0s" })} />
          <span className="tw" style={S({ position: "absolute", left: "65.4%", top: "32.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.6s" })} />
          <span className="tw" style={S({ position: "absolute", left: "65.2%", top: "27.8%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
          <span className="tw" style={S({ position: "absolute", left: "94.7%", top: "3.9%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.0s" })} />
          <span className="tw" style={S({ position: "absolute", left: "5.4%", top: "36.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.0s" })} />
          <span className="tw" style={S({ position: "absolute", left: "6.9%", top: "7.5%", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "var(--c1)", animationDelay: "1.4s" })} />
          <span className="tw" style={S({ position: "absolute", left: "40.6%", top: "16.2%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.8s" })} />
          <span className="tw" style={S({ position: "absolute", left: "2.3%", top: "35.2%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.4s" })} />
          <span className="tw" style={S({ position: "absolute", left: "77.7%", top: "35.2%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "2.6s" })} />
          <span className="tw" style={S({ position: "absolute", left: "20.8%", top: "27.2%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.3s" })} />
          <span className="tw" style={S({ position: "absolute", left: "47.2%", top: "21.5%", width: "1.5px", height: "1.5px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.1s" })} />
          <span className="tw" style={S({ position: "absolute", left: "59.3%", top: "20.1%", width: "2px", height: "2px", borderRadius: "50%", background: "var(--c1)", animationDelay: "2.3s" })} />
          <span className="tw" style={S({ position: "absolute", left: "5.1%", top: "4.1%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "0.9s" })} />
          <span className="tw" style={S({ position: "absolute", left: "35.0%", top: "3.9%", width: "3.2px", height: "3.2px", borderRadius: "50%", background: "var(--tx)", animationDelay: "1.1s" })} />
          <span className="shoot" style={S({ position: "absolute", left: "78%", top: "4%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "1.5s" })} />
          <span className="shoot" style={S({ position: "absolute", left: "92%", top: "14%", width: "90px", height: "1.5px", background: "linear-gradient(90deg, var(--tx), transparent)", borderRadius: "2px", animationDelay: "5s" })} />
          <svg width="390" height="844" style={S({ position: "absolute", left: "0", top: "0" })} aria-hidden="true">
            <ellipse className="draw" cx="195" cy="125" rx="242" ry="41" transform="rotate(-12 195 125)" fill="none" stroke="var(--c1)" strokeOpacity=".7" strokeWidth="1.4" pathLength="1" />
            <ellipse cx="195" cy="125" rx="169" ry="25" transform="rotate(-12 195 125)" fill="none" stroke="var(--c1)" strokeOpacity=".25" strokeWidth="1" strokeDasharray="2 6" />
          </svg>
          <span className="glide" style={S({ position: "absolute", left: "0", top: "0", width: "14px", height: "14px", margin: "-7px 0 0 -7px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, var(--tx), var(--c2))", boxShadow: "0 0 18px var(--c2)", offsetPath: "path('M 431.5 75.1 A 242 41 -12 1 1 -41.5 175.6 A 242 41 -12 1 1 431.5 75.1')", offsetRotate: "0deg" })} />
        </div>
        </>
      ) : null}
      {v.is_chem ? (
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
      ) : null}
      {v.is_phys ? (
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
      ) : null}
      {v.is_bio ? (
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
      ) : null}
      {v.is_math ? (
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
      ) : null}
      {v.is_sport ? (
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
      ) : null}
      <div style={S({ position: "absolute", inset: "0", display: "flex", flexDirection: "column", padding: "18px 16px 22px", boxSizing: "border-box", gap: "14px" })}>
        {/* top bar: club wordmark on the right, replay + save on the left */}
        <div style={S({ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: "3" })}>
          <span style={S({ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 10%, transparent)", WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)", border: "1px solid color-mix(in srgb, var(--tx) 20%, transparent)", fontFamily: "TD, serif", fontSize: "15px" })}>
            <img src="/brand/logo.png" alt="شعار ملتقى المستجدين" style={S({ height: "24px", width: "auto", padding: "2px", borderRadius: "8px", background: "rgba(255,255,255,.9)" })} />
نادي العلوم
          </span>
          <span style={S({ display: "flex", gap: "8px" })}>
            <button type="button" onClick={v.save} aria-label="حفظ الدعوة" style={S({ height: "42px", padding: "0 14px", borderRadius: "999px", border: "1px solid color-mix(in srgb, var(--tx) 25%, transparent)", background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--tx)", display: "flex", alignItems: "center", gap: "6px", fontFamily: "TS, sans-serif", fontSize: "13px", cursor: "pointer" })}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
              </svg>
{v.saveLabel}
            </button>
            <button type="button" onClick={v.replay} aria-label="إعادة التجربة" style={S({ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid color-mix(in srgb, var(--tx) 25%, transparent)", background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" })}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </button>
          </span>
        </div>
        {v.isLoad ? (
          <>
          <div style={S({ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "30px" })}>
            {v.is_club ? (
              <>
              <div style={S({ position: "relative", width: "150px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" })}>
                <span className="ripple" style={S({ position: "absolute", inset: "22px", borderRadius: "50%", border: "1.5px solid var(--c1)", animationDuration: "2.4s" })} />
                <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", border: "1.5px solid color-mix(in srgb, var(--c1) 50%, transparent)", animationDuration: "3s" })}>
                  <span style={S({ position: "absolute", left: "50%", top: "-6px", width: "12px", height: "12px", marginLeft: "-6px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF6D8, #C99A2E)" })} />
                </div>
                <div style={S({ width: "105px", height: "105px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 10px 26px rgba(0,0,0,.25)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                  <img className="formsL" src="/brand/logo.png" alt="" style={S({ width: "78px", height: "auto" })} />
                </div>
              </div>
              </>
            ) : null}
            {v.is_space ? (
              <>
              <div style={S({ position: "relative", width: "150px", height: "150px" })}>
                <div className="spin" style={S({ position: "absolute", inset: "0", borderRadius: "50%", border: "1.5px solid var(--c1)" })}>
                  <span style={S({ position: "absolute", left: "50%", top: "-6px", width: "12px", height: "12px", marginLeft: "-6px", borderRadius: "50%", background: "var(--c2)", boxShadow: "0 0 14px var(--c2)" })} />
                </div>
                <div className="spinR" style={S({ position: "absolute", inset: "30px", borderRadius: "50%", border: "1px dashed color-mix(in srgb, var(--tx) 35%, transparent)" })} />
                <span className="pulse" style={S({ position: "absolute", left: "50%", top: "50%", width: "27px", height: "27px", margin: "-14px 0 0 -14px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, var(--tx), var(--c1))" })} />
              </div>
              </>
            ) : null}
            {v.is_chem ? (
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
            ) : null}
            {v.is_phys ? (
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
            ) : null}
            {v.is_bio ? (
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
            ) : null}
            {v.is_math ? (
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
            ) : null}
            {v.is_sport ? (
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
            ) : null}
            <span style={S({ fontSize: "14px", opacity: ".8" })}>
نجهّز دعوتك
            </span>
            <span style={S({ width: "140px", height: "2px", background: "color-mix(in srgb, var(--tx) 20%, transparent)", overflow: "hidden", display: "block" })}>
              <span className="growX" style={S({ display: "block", width: "100%", height: "100%", background: "var(--c2)", animationDuration: "2.4s" })} />
            </span>
          </div>
          </>
        ) : null}
        {v.notLoad ? (
          <>
          {/* the hero takes whatever height is left, so the motion always has room and nothing sits empty */}
          <div className={v.inK} style={S({ flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "10px", padding: "18px 24px 10px", margin: "0 -16px", background: "linear-gradient(0deg, color-mix(in srgb, var(--sc) 88%, transparent) 0%, color-mix(in srgb, var(--sc) 60%, transparent) 45%, transparent 100%)" })}>
            <span style={S({ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", lineHeight: "1.5", background: "color-mix(in srgb, var(--tx) 12%, transparent)", border: "1px solid color-mix(in srgb, var(--tx) 22%, transparent)", WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" })}>
              <span style={S({ width: "7px", height: "7px", borderRadius: "50%", background: "var(--c2)" })} />
{v.t.event}
            </span>
            <span style={S({ fontFamily: "TD, serif", fontSize: "50px", lineHeight: "1.2", textShadow: "0 4px 24px color-mix(in srgb, var(--tx) 0%, rgba(0,0,0,.35))" })}>
{v.t.title}
            </span>
            <span className="lat" style={S({ fontSize: "13px", lineHeight: "1.4", opacity: ".66", textAlign: "right" })}>
{v.t.latin}
            </span>
          </div>
          </>
        ) : null}
        {v.isGate ? (
          <>
          <div className={v.inK} style={S({ borderRadius: "28px", padding: "22px 20px", boxSizing: "border-box", background: "color-mix(in srgb, var(--tx) 10%, transparent)", WebkitBackdropFilter: "blur(24px) saturate(1.3)", backdropFilter: "blur(24px) saturate(1.3)", border: "1px solid color-mix(in srgb, var(--tx) 22%, transparent)", display: "flex", flexDirection: "column", gap: "12px", animationDelay: ".25s" })}>
            <h1 style={S({ margin: "0", fontFamily: "TD, serif", fontSize: "26px", lineHeight: "1.35" })}>
لديك دعوة من نادي العلوم
            </h1>
            <p style={S({ margin: "0", fontSize: "14px", lineHeight: "1.7", opacity: ".82" })}>
سجّل اسمك وبريدك لتفتح الدعوة وسيظهر اسمك داخلها
            </p>
            <input className="field" value={v.gname} onChange={v.onGname} aria-label="الاسم" placeholder="الاسم" style={S({ height: "52px", borderRadius: "999px", border: "1px solid color-mix(in srgb, var(--tx) 28%, transparent)", background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--tx)", padding: "0 20px", fontFamily: "TS, sans-serif", fontSize: "16px" })} />
            <input className="field" type="email" value={v.gmail} onChange={v.onGmail} aria-label="البريد الإلكتروني" placeholder="البريد الإلكتروني" style={S({ height: "52px", borderRadius: "999px", border: "1px solid color-mix(in srgb, var(--tx) 28%, transparent)", background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--tx)", padding: "0 20px", fontFamily: "TS, sans-serif", fontSize: "16px", direction: "ltr", textAlign: "right" })} />
            <button type="button" onClick={v.openInv} disabled={v.busy} style={S({ height: "54px", border: "0", borderRadius: "999px", background: "var(--c2)", color: "#0B1F24", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "16px", cursor: "pointer" })}>
افتح الدعوة
            </button>
            {v.gateError ? <span role="alert" style={S({ fontSize: "13px", textAlign: "center", color: "var(--c2)" })}>{v.gateError}</span> : null}
            <span style={S({ fontSize: "11px", lineHeight: "1.6", opacity: ".72", textAlign: "center" })}>
نستخدم اسمك وبريدك لهذه الدعوة وتأكيد الحضور فقط
            </span>
          </div>
          </>
        ) : null}
        {v.isOpen ? (
          <>
          <div className={v.inK} style={S({ position: "relative", marginTop: "26px", animationDelay: ".35s" })}>
            <div className={`th${v.k}`} style={S({ borderRadius: "26px", background: "rgba(246,243,236,.96)", color: "#0B2A30", padding: "24px 20px 16px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 30px 70px rgba(0,0,0,.35)" })}>
              <div style={S({ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "78px", minHeight: "64px" })}>
                <span style={S({ fontSize: "13px", lineHeight: "1.5", color: "#4B6166" })}>
يتشرّف نادي العلوم بدعوة
                </span>
                <span className={`nm${v.k}`} style={S({ fontFamily: "TD, serif", fontSize: v.nameSize, overflowWrap: "anywhere", lineHeight: "1.3" })}>
{v.shownName}
                </span>
                <span className={`nm${v.k}`} style={S({ fontSize: "13px", lineHeight: "1.5", color: "#3B5156" })}>
{v.shownOrg}
                </span>
              </div>
              <div style={S({ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px", fontSize: "13px", lineHeight: "1.5", paddingTop: "12px", borderTop: "1px solid #DCD6C8" })}>
                <div style={S({ display: "flex", flexDirection: "column", gap: "4px" })}>
                  <span style={S({ color: "#5C7277" })}>
التاريخ
                  </span>
                  <b>
{v.dateLabel}
                  </b>
                </div>
                <div style={S({ display: "flex", flexDirection: "column", gap: "4px" })}>
                  <span style={S({ color: "#5C7277" })}>
الوقت
                  </span>
                  <b>
{v.timeLabel}
                  </b>
                </div>
              </div>
              {v.placeOn ? (
                <>
                <div style={S({ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E1D6", overflow: "hidden", display: "flex", flexDirection: "column" })}>
                  {v.inPerson ? (
                    <>
                    <svg aria-hidden="true" width="100%" height="64" viewBox="0 0 330 64" preserveAspectRatio="xMidYMid slice" style={S({ display: "block" })}>
                      <rect width="330" height="64" fill="#EEF5F4" />
                      <path d="M-10 46 C60 36 110 58 170 44 S280 22 340 30" fill="none" stroke="#CDE3E6" strokeWidth="12" />
                      <path d="M-10 18 L340 26 M90 -10 L78 80 M210 -10 L222 80 M-10 60 L340 56" stroke="#FFFFFF" strokeWidth="7" />
                      <rect x="104" y="28" width="56" height="14" rx="3" fill="#E1ECEB" />
                      <rect x="236" y="34" width="44" height="18" rx="3" fill="#E1ECEB" />
                      <rect x="18" y="26" width="44" height="12" rx="3" fill="#E1ECEB" />
                      <circle className="ripple" cx="170" cy="26" r="11" fill="none" stroke="#13707B" strokeWidth="1.5" style={S({ transformBox: "fill-box", transformOrigin: "center", animationDuration: "2.2s" })} />
                      <path d="M170 34 C164 26 162 22 162 18 A8 8 0 0 1 178 18 C178 22 176 26 170 34 Z" fill="#0B3B41" />
                      <circle cx="170" cy="18" r="3" fill="#E7C873" />
                    </svg>
                    </>
                  ) : null}
                  {v.isOnline ? (
                    <>
                    <div aria-hidden="true" style={S({ height: "64px", background: "#0B3B41", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px", position: "relative" })}>
                      <span style={S({ flex: "1.4", height: "44px", borderRadius: "8px", background: "linear-gradient(160deg,#13707B,#0E4F56)", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "6px", boxSizing: "border-box" })}>
                        <span style={S({ display: "flex", gap: "2px", alignItems: "flex-end", height: "14px" })}>
                          <span className="bounce" style={S({ width: "3px", height: "14px", borderRadius: "2px", background: "#E7C873" })} />
                          <span className="bounce" style={S({ width: "3px", height: "14px", borderRadius: "2px", background: "#E7C873", animationDelay: ".15s" })} />
                          <span className="bounce" style={S({ width: "3px", height: "14px", borderRadius: "2px", background: "#E7C873", animationDelay: ".3s" })} />
                          <span className="bounce" style={S({ width: "3px", height: "14px", borderRadius: "2px", background: "#E7C873", animationDelay: ".45s" })} />
                        </span>
                        <span style={S({ position: "absolute", top: "8px", width: "16px", height: "16px", borderRadius: "50%", background: "#9FDCE0" })} />
                      </span>
                      <span style={S({ flex: "1", height: "44px", borderRadius: "8px", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                        <span style={S({ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(255,255,255,.4)" })} />
                      </span>
                      <span style={S({ flex: "1", height: "44px", borderRadius: "8px", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center" })}>
                        <span style={S({ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(255,255,255,.4)" })} />
                      </span>
                      <span style={S({ position: "absolute", left: "10px", top: "8px", display: "flex", alignItems: "center", gap: "5px", padding: "2px 8px", borderRadius: "999px", background: "rgba(0,0,0,.35)", fontSize: "10px", color: "#FFFFFF" })}>
                        <span className="pulse" style={S({ width: "6px", height: "6px", borderRadius: "50%", background: "#E2584F" })} />
مباشر
                      </span>
                    </div>
                    </>
                  ) : null}
                  <div style={S({ display: "flex", gap: "12px", alignItems: "center", padding: "10px 12px" })}>
                    <div style={S({ flex: "1", display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", lineHeight: "1.5", minWidth: "0" })}>
                      <span style={S({ color: "#5C7277" })}>
{v.placeLabel}
                      </span>
                      <b style={S({ fontSize: "15px", lineHeight: "1.4" })}>
{v.placeName}
                      </b>
                    </div>
                    {v.qrSvg ? (
<div style={S({ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" })}>
                      <span role="img" aria-label={v.qrLabel} style={S({ display: "block", width: "70px", height: "70px", color: "#0B2A30", background: "#FFFFFF" })} dangerouslySetInnerHTML={{ __html: v.qrSvg }} />
                      <span style={S({ fontSize: "10px", lineHeight: "1.4", color: "#5C7277", marginTop: "2px" })}>
{v.qrLabel}
                      </span>
                    </div>
                    ) : null}
                  </div>
                </div>
                </>
              ) : null}
            </div>
            <span className={`ir${v.k}`} style={S({ position: "absolute", left: "0", top: "-40px", width: "112px", height: "112px", borderRadius: "50%", border: "2px solid var(--c2)", pointerEvents: "none" })} />
            <div className={`sg${v.k}`} style={S({ position: "absolute", left: "0", top: "-40px", width: "112px", height: "112px", borderRadius: "50%", background: "radial-gradient(circle at 38% 32%, #FFFFFF, #F3EEE3 70%, #E6DFD0)", boxShadow: "0 10px 24px rgba(0,0,0,.3), inset 0 0 0 1px rgba(201,154,46,.35)", display: "flex", alignItems: "center", justifyContent: "center" })}>
              <div style={S({ position: "relative", width: "98px", height: "98px", color: "#0B3B41" })} role="img" aria-label="ختم">
                <svg width="98" height="98" viewBox="0 0 120 120" aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>
                  <defs>
                    <path id={v.sealPathId} d="M60 60 m-34 0 a34 34 0 1 1 68 0 a34 34 0 1 1 -68 0" />
                  </defs>
                  <polygon points="110.00,60.00 106.32,64.05 109.24,68.68 104.92,72.04 106.98,77.10 102.14,79.65 103.30,85.00 98.09,86.67 98.30,92.14 92.88,92.88 92.14,98.30 86.67,98.09 85.00,103.30 79.65,102.14 77.10,106.98 72.04,104.92 68.68,109.24 64.05,106.32 60.00,110.00 55.95,106.32 51.32,109.24 47.96,104.92 42.90,106.98 40.35,102.14 35.00,103.30 33.33,98.09 27.86,98.30 27.12,92.88 21.70,92.14 21.91,86.67 16.70,85.00 17.86,79.65 13.02,77.10 15.08,72.04 10.76,68.68 13.68,64.05 10.00,60.00 13.68,55.95 10.76,51.32 15.08,47.96 13.02,42.90 17.86,40.35 16.70,35.00 21.91,33.33 21.70,27.86 27.12,27.12 27.86,21.70 33.33,21.91 35.00,16.70 40.35,17.86 42.90,13.02 47.96,15.08 51.32,10.76 55.95,13.68 60.00,10.00 64.05,13.68 68.68,10.76 72.04,15.08 77.10,13.02 79.65,17.86 85.00,16.70 86.67,21.91 92.14,21.70 92.88,27.12 98.30,27.86 98.09,33.33 103.30,35.00 102.14,40.35 106.98,42.90 104.92,47.96 109.24,51.32 106.32,55.95" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="2.4" />
                  <circle cx="60" cy="60" r="26" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 2.5" />
                  <text fontFamily="TS" fontSize="8" fontWeight="700" fill="currentColor" letterSpacing=".5">
                    <textPath href={"#" + v.sealPathId} startOffset="0">
نادي العلوم · دعوة رسمية · نادي العلوم · دعوة رسمية ·
                    </textPath>
                  </text>
                  <path d="M60 26 l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z" fill="currentColor" />
                </svg>
                <span style={S({ position: "absolute", left: "0", right: "0", top: "50%", transform: "translateY(-38%)", textAlign: "center", fontFamily: "TD, serif", fontSize: "16px", lineHeight: "1", color: "currentColor" })}>
{v.sealLabel}
                </span>
              </div>
            </div>
          </div>
          <div className={v.inK} style={S({ animationDelay: "2.3s" })}>
            {v.rsvpOpen ? (
              <>
              <div style={S({ display: "flex", gap: "10px" })}>
                <button type="button" onClick={v.yes} style={S({ flex: "1.4", height: "56px", border: "0", borderRadius: "999px", background: "var(--c2)", color: "#0B1F24", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "16px", cursor: "pointer" })}>
سأحضر
                </button>
                <button type="button" onClick={v.no} style={S({ flex: "1", height: "56px", border: "1px solid color-mix(in srgb, var(--tx) 35%, transparent)", borderRadius: "999px", background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--tx)", fontFamily: "TS, sans-serif", fontSize: "16px", cursor: "pointer" })}>
أعتذر
                </button>
              </div>
              </>
            ) : null}
            {v.answered ? (
              <>
              <div className="inA" style={S({ display: "flex", gap: "10px" })}>
                <div style={S({ flex: "1.4", height: "56px", borderRadius: "999px", border: "1px solid color-mix(in srgb, var(--tx) 30%, transparent)", background: "color-mix(in srgb, var(--tx) 10%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", fontFamily: "TD, serif", fontSize: "19px" })}>
                  <span style={S({ width: "10px", height: "10px", borderRadius: "50%", background: "var(--c2)" })} />
{v.answerTitle}
                </div>
                {v.going ? (
                  <>
                  <a href={v.calHref} download="invitation.ics" onClick={v.addCal} style={S({ textDecoration: "none", flex: "1", height: "56px", border: "0", borderRadius: "999px", background: "var(--c2)", color: "#0B1F24", fontFamily: "TS, sans-serif", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" })}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1F24" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M3 10h18M8 3v4M16 3v4" />
                    </svg>
{v.calLabel}
                  </a>
                  </>
                ) : null}
              </div>
              </>
            ) : null}
          </div>
          </>
        ) : null}
      </div>
    </div>
    </>
  );
}
