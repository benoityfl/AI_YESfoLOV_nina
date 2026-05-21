"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const sb = supabase;

  // ── Particles ──────────────────────────────────────────────────
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

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.1 + 0.3,
      opacity: Math.random() * 0.3 + 0.04,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
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

        const pulse =
          Math.sin(frame * 0.007 + p.phase) * 0.15 + 0.85;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,110,${p.opacity * pulse})`;
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

  // ── Gestion session Supabase ──────────────────────────────────
  useEffect(() => {
    const handleSession = async () => {
      try {
        // Important : récupère la session depuis le hash magic link
        const {
          data: { session },
        } = await sb.auth.getSession();

        if (session) {
          router.replace("/chat");
        }
      } catch (err) {
        console.error("SESSION ERROR:", err);
      }
    };

    handleSession();

    const {
      data: { subscription },
    } = sb.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.replace("/chat");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, sb]);

  // ── Magic link ─────────────────────────────────────────────────
  const signIn = async () => {
    if (!email.trim()) return;

    setLoading(true);

    const { error } = await sb.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/chat`,
      },
    });

    setLoading(false);

    if (!error) {
      setSent(true);
    } else {
      console.error("LOGIN ERROR:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { background: #07050A; }

        .login-root {
          min-height: 100svh;
          background: #07050A;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Jost', sans-serif;
          font-weight: 200;
          color: #EFE8DC;
          -webkit-font-smoothing: antialiased;
          position: relative;
          overflow: hidden;
          padding: 24px;
        }

        .login-root::before {
          content: '';
          position: fixed; inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 50% 60%, rgba(200,169,110,0.05) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 80% 15%, rgba(107,45,62,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 15% 85%, rgba(194,164,154,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .login-root::after {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
        }

        canvas {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .corner {
          position: fixed;
          width: 13px;
          height: 13px;
          border-color: rgba(200,169,110,0.25);
          border-style: solid;
          z-index: 2;
        }

        .c-tl {
          top: 32px;
          left: 32px;
          border-width: 1px 0 0 1px;
        }

        .c-tr {
          top: 32px;
          right: 32px;
          border-width: 1px 1px 0 0;
        }

        .c-bl {
          bottom: 32px;
          left: 32px;
          border-width: 0 0 1px 1px;
        }

        .c-br {
          bottom: 32px;
          right: 32px;
          border-width: 0 1px 1px 0;
        }

        .card {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-wrap {
          margin-bottom: 40px;
          opacity: 0;
          animation: up 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s forwards;
        }

        .logo-img {
          height: 14px;
          width: auto;
          opacity: 0.88;
        }

        .logo-fallback {
          font-size: 12px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #EFE8DC;
          font-weight: 300;
          display: none;
        }

        .orn {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          opacity: 0;
          animation: up 0.8s ease 0.25s forwards;
        }

        .orn-line {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,169,110,0.4));
        }

        .orn-line.r {
          background: linear-gradient(270deg, transparent, rgba(200,169,110,0.4));
        }

        .orn-diamond {
          width: 4px;
          height: 4px;
          background: #C8A96E;
          transform: rotate(45deg);
          opacity: 0.55;
        }

        .headline {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(30px, 5.5vw, 40px);
          color: #EFE8DC;
          text-align: center;
          line-height: 1.2;
          margin-bottom: 14px;
        }

        .sub {
          font-size: 12px;
          color: rgba(239,232,220,0.38);
          letter-spacing: 0.06em;
          text-align: center;
          line-height: 1.8;
          margin-bottom: 40px;
          font-weight: 200;
        }
      `}</style>

      <div className="login-root">
        <canvas ref={canvasRef} />

        <span className="corner c-tl" />
        <span className="corner c-tr" />
        <span className="corner c-bl" />
        <span className="corner c-br" />

        <div className="card">

          <div className="logo-wrap">
            <img
              src="/Logo_horizontal_white.png"
              alt="YESforLOV"
              className="logo-img"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";

                const fallback =
                  document.querySelector<HTMLElement>(".logo-fallback");

                if (fallback) {
                  fallback.style.display = "block";
                }
              }}
            />

            <span className="logo-fallback">
              YESforLOV
            </span>
          </div>

          <div className="orn">
            <span className="orn-line" />
            <span className="orn-diamond" />
            <span className="orn-line r" />
          </div>

          {!sent ? (
            <>
              <h1 className="headline">
                Votre espace
                <br />
                de confiance
              </h1>

              <p className="sub">
                Recevez un lien personnel pour accéder à Nina.
              </p>

              <div className="form">
                <div className="input-wrap">
                  <input
                    ref={inputRef}
                    id="email"
                    type="email"
                    value={email}
                    placeholder="votre@email.com"
                    className="email-input"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && signIn()
                    }
                  />
                </div>

                <button
                  className="cta-btn"
                  onClick={signIn}
                  disabled={loading || !email.includes("@")}
                >
                  {loading ? (
                    "Connexion..."
                  ) : (
                    "Recevoir mon lien"
                  )}
                </button>
              </div>
            </>
          ) : (
            <div className="sent-state">
              <h2 className="headline">
                Vérifiez votre email
              </h2>

              <p className="sub">
                Un lien magique a été envoyé à :
                <br />
                <strong>{email}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}