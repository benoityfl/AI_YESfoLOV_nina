"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Page() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle field — slow drifting golden motes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", resize);

    const count = 55;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.35 + 0.05,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      frame++;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = W + 5;
        if (p.x > W + 5) p.x = -5;
        if (p.y < -5) p.y = H + 5;
        if (p.y > H + 5) p.y = -5;

        const pulse = Math.sin(frame * 0.008 + p.phase) * 0.15 + 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 169, 110, ${p.opacity * pulse})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&family=Jost:wght@100;200;300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --noir:    #07050A;
          --encre:   #0D0A10;
          --or:      #C8A96E;
          --or-pale: #DFC99A;
          --ivoire:  #EFE8DC;
          --creme:   #D8CFBF;
          --nude:    #C2A49A;
        }

        html, body { background: var(--noir); }

        .lp-root {
          min-height: 100svh;
          background: var(--noir);
          color: var(--ivoire);
          font-family: 'Jost', sans-serif;
          font-weight: 200;
          -webkit-font-smoothing: antialiased;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: default;
        }

        /* ── Deep radial atmosphere ── */
        .lp-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 55% at 50% 55%, rgba(200,169,110,0.055) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 80% 20%, rgba(107,45,62,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 20% 80%, rgba(194,164,154,0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        /* ── Film grain ── */
        .lp-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.028;
          pointer-events: none;
        }

        canvas.particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* ── Horizontal gold rule lines ── */
        .line-top, .line-bottom {
          position: absolute;
          left: 48px;
          right: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(200,169,110,0.25) 25%, rgba(200,169,110,0.25) 75%, transparent 100%);
        }
        .line-top    { top:    44px; }
        .line-bottom { bottom: 44px; }

        /* Corner marks */
        .corner {
          position: absolute;
          width: 14px;
          height: 14px;
          border-color: rgba(200,169,110,0.3);
          border-style: solid;
        }
        .corner-tl { top: 38px; left: 42px;  border-width: 1px 0 0 1px; }
        .corner-tr { top: 38px; right: 42px; border-width: 1px 1px 0 0; }
        .corner-bl { bottom: 38px; left: 42px;  border-width: 0 0 1px 1px; }
        .corner-br { bottom: 38px; right: 42px; border-width: 0 1px 1px 0; }

        /* ── Main content ── */
        .content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 60px 28px;
          max-width: 780px;
          width: 100%;
          gap: 0;
        }

        /* Logo */
        .logo-wrap {
          margin-bottom: 52px;
          opacity: 0;
          animation: reveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
        }
        .logo-img {
          height: 18px;
          width: auto;
          filter: brightness(1.1);
          opacity: 0.88;
        }

        /* Eyebrow */
        .eyebrow {
          font-size: 9px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--or);
          opacity: 0;
          animation: reveal 0.9s ease 0.3s forwards;
          margin-bottom: 28px;
          font-weight: 300;
        }

        /* Headline */
        .headline {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(36px, 6.5vw, 72px);
          line-height: 1.18;
          letter-spacing: -0.01em;
          color: var(--ivoire);
          opacity: 0;
          animation: reveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;
          margin-bottom: 10px;
        }
        .headline em {
          font-style: italic;
          color: var(--or-pale);
        }

        /* Ornament */
        .orn {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 32px 0 30px;
          opacity: 0;
          animation: reveal 0.8s ease 0.7s forwards;
        }
        .orn-line {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,169,110,0.45));
        }
        .orn-line.r {
          background: linear-gradient(270deg, transparent, rgba(200,169,110,0.45));
        }
        .orn-diamond {
          width: 5px;
          height: 5px;
          background: var(--or);
          transform: rotate(45deg);
          opacity: 0.6;
        }

        /* Subtext */
        .sub {
          font-size: clamp(13px, 1.8vw, 16px);
          line-height: 1.85;
          color: rgba(239,232,220,0.48);
          max-width: 480px;
          letter-spacing: 0.03em;
          opacity: 0;
          animation: reveal 0.9s ease 0.85s forwards;
          margin-bottom: 52px;
          font-weight: 200;
        }

        /* CTA */
        .cta-wrap {
          opacity: 0;
          animation: reveal 0.9s ease 1.05s forwards;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 0 36px 0 44px;
          height: 54px;
          background: transparent;
          border: 1px solid rgba(200,169,110,0.45);
          color: var(--ivoire);
          font-family: 'Jost', sans-serif;
          font-weight: 200;
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          overflow: hidden;
          transition: border-color 0.4s ease, color 0.4s ease;
        }

        /* Gold fill sweep on hover */
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, var(--or) 0%, #A8823A 100%);
          transform: translateX(-100%);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 0;
        }

        .cta-btn:hover::before { transform: translateX(0); }
        .cta-btn:hover { color: #1A0F14; border-color: var(--or); }

        .cta-btn span, .cta-icon {
          position: relative;
          z-index: 1;
          transition: color 0.4s ease;
        }

        .cta-icon {
          width: 14px;
          height: 14px;
          opacity: 0.7;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .cta-btn:hover .cta-icon {
          transform: translateX(4px);
          opacity: 1;
        }

        .cta-note {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.3);
          font-weight: 300;
        }

        /* ── Reveal keyframe ── */
        @keyframes reveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Bottom brand strip ── */
        .footer-strip {
          position: absolute;
          bottom: 52px;
          left: 0; right: 0;
          display: flex;
          justify-content: center;
          gap: 32px;
          z-index: 2;
          opacity: 0;
          animation: reveal 0.8s ease 1.3s forwards;
        }
        .footer-item {
          font-size: 8.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.22);
          font-weight: 300;
        }
        .footer-dot {
          color: rgba(200,169,110,0.18);
        }

        @media (max-width: 500px) {
          .line-top, .line-bottom, .corner { display: none; }
          .content { padding: 40px 20px; }
        }
      `}</style>

      <div className="lp-root">
        <canvas ref={canvasRef} className="particles" />

        {/* Frame */}
        <div className="line-top" />
        <div className="line-bottom" />
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        {/* Main */}
        <div className="content">

          <div className="logo-wrap">
            <img
              src="/Logo_horizontal_white.png"
              alt="YESforLOV"
              className="logo-img"
            />
          </div>

          <p className="eyebrow">Nina · 1er Intelligence Intime</p>

          <h1 className="headline">
            L'art d'aimer,<br />
            <em>guidé par l'intelligence.</em>
          </h1>

          <div className="orn">
            <span className="orn-line" />
            <span className="orn-diamond" />
            <span className="orn-line r" />
          </div>

          <p className="sub">
            Nina accompagne les couples dans leur connexion émotionnelle,
            sensorielle et relationnelle — avec subtilité, respect et douceur.
          </p>

          <div className="cta-wrap">
            <button
              onClick={() => router.push("/chat")}
              className="cta-btn"
            >
              <span>Commencer la conversation</span>
              <svg className="cta-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="2" y1="8" x2="13" y2="8" />
                <polyline points="9 4 13 8 9 12" />
              </svg>
            </button>
            <span className="cta-note">Confidentiel · Bienveillant · Gratuit</span>
          </div>
        </div>

        {/* Footer strip */}
        <div className="footer-strip">
          <span className="footer-item">The French Art of Lov</span>
          <span className="footer-dot">·</span>
          <span className="footer-item">Depuis 2006</span>
          <span className="footer-dot">·</span>
          <span className="footer-item">Made in France</span>
        </div>
      </div>
    </>
  );
}
