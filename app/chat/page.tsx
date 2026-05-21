"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function ChatPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  const endRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const router = useRouter();

  // ─────────────────────────────
  // AUTH CHECK
  // ─────────────────────────────
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (!data?.user) { router.push("/login"); return; }
        setUser(data.user);
      } catch (err) {
        console.error("Auth error:", err);
        router.push("/login");
      }
    };
    checkUser();
  }, [router]);

  // ─────────────────────────────
  // AUTO SCROLL
  // ─────────────────────────────
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // ─────────────────────────────
  // SEND MESSAGE
  // ─────────────────────────────
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "44px";
    }

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, userId: user?.id }),
      });

      const data = await res.json();

      setMessages([...newMessages, {
        role: "assistant",
        content: data?.message || "Je n'ai pas pu générer de réponse.",
      }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, {
        role: "assistant",
        content: "Une erreur est survenue. Veuillez réessayer.",
      }]);
    } finally {
      setLoading(false);
    }
  };

  // ─────────────────────────────
  // LOGOUT
  // ─────────────────────────────
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { background: #07050A; height: 100%; overflow: hidden; }

        .chat-root {
          height: 100svh;
          display: flex;
          flex-direction: column;
          background: #07050A;
          color: #EFE8DC;
          font-family: 'Jost', sans-serif;
          font-weight: 200;
          -webkit-font-smoothing: antialiased;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glow */
        .chat-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 15% 10%, rgba(200,169,110,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 85% 90%, rgba(107,45,62,0.05) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        /* Grain */
        .chat-root::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.022;
          pointer-events: none;
          z-index: 0;
        }

        /* ── HEADER ── */
        .header {
          position: relative;
          z-index: 10;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-bottom: 1px solid rgba(200,169,110,0.1);
          background: rgba(7,5,10,0.85);
          backdrop-filter: blur(20px);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .header-logo {
          height: 13px;
          width: auto;
          opacity: 0.88;
        }

        .header-divider {
          width: 1px;
          height: 20px;
          background: rgba(200,169,110,0.22);
        }

        .header-nina { display: flex; flex-direction: column; gap: 3px; }

        .header-nina-name {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 15px;
          color: #EFE8DC;
          line-height: 1;
        }

        .header-nina-sub {
          font-size: 8.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.5);
          font-weight: 300;
          line-height: 1;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 8.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.35);
          font-weight: 300;
        }

        .status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #C8A96E;
          opacity: 0.65;
          animation: pulse-dot 3s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 0.65; transform: scale(1); }
          50%       { opacity: 0.3;  transform: scale(0.8); }
        }

        .logout-btn {
          background: transparent;
          border: 1px solid rgba(200,169,110,0.15);
          border-radius: 2px;
          color: rgba(200,169,110,0.35);
          font-family: 'Jost', sans-serif;
          font-size: 8px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 300;
          padding: 5px 10px;
          cursor: pointer;
          transition: border-color 0.3s, color 0.3s;
        }
        .logout-btn:hover {
          border-color: rgba(200,169,110,0.4);
          color: rgba(200,169,110,0.7);
        }

        /* ── MESSAGES ── */
        .messages-area {
          flex: 1;
          overflow-y: auto;
          padding: 28px 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          z-index: 2;
          scrollbar-width: thin;
          scrollbar-color: rgba(200,169,110,0.12) transparent;
        }
        .messages-area::-webkit-scrollbar { width: 3px; }
        .messages-area::-webkit-scrollbar-thumb {
          background: rgba(200,169,110,0.18);
          border-radius: 2px;
        }

        /* Welcome */
        .welcome {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 60px 20px;
          text-align: center;
          animation: fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .welcome-eyebrow {
          font-size: 9px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.55);
          font-weight: 300;
        }

        .welcome-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(26px, 4.5vw, 36px);
          color: #EFE8DC;
          line-height: 1.25;
        }

        .welcome-title em { color: #DFC99A; font-style: italic; }

        .welcome-orn {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .orn-line {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,169,110,0.35));
        }
        .orn-line.r {
          background: linear-gradient(270deg, transparent, rgba(200,169,110,0.35));
        }
        .orn-diamond {
          width: 4px; height: 4px;
          background: #C8A96E;
          transform: rotate(45deg);
          opacity: 0.5;
        }

        .welcome-sub {
          font-size: 12.5px;
          color: rgba(239,232,220,0.38);
          line-height: 1.85;
          letter-spacing: 0.04em;
          max-width: 300px;
          font-weight: 200;
        }

        /* Message rows */
        .msg-row {
          display: flex;
          flex-direction: column;
          animation: fade-up 0.4s cubic-bezier(0.22,1,0.36,1) forwards;
          opacity: 0;
        }
        .msg-row.user      { align-items: flex-end; }
        .msg-row.assistant { align-items: flex-start; }

        .msg-label {
          font-size: 8.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 300;
          margin-bottom: 5px;
        }
        .msg-label.nina { color: rgba(200,169,110,0.45); padding-left: 2px; }
        .msg-label.vous { color: rgba(239,232,220,0.2); }

        /* User bubble */
        .bubble-user {
          max-width: 72%;
          background: linear-gradient(135deg, #EFE8DC 0%, #D8CFBF 100%);
          color: #1A0F14;
          font-size: 13.5px;
          line-height: 1.72;
          padding: 12px 18px;
          border-radius: 18px 18px 3px 18px;
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        /* Nina bubble */
        .bubble-nina {
          max-width: 80%;
          position: relative;
          background: rgba(13,10,16,0.75);
          border: 1px solid rgba(200,169,110,0.13);
          color: #EFE8DC;
          font-size: 13.5px;
          line-height: 1.82;
          padding: 14px 18px 14px 22px;
          border-radius: 3px 18px 18px 18px;
          font-family: 'Jost', sans-serif;
          font-weight: 200;
          letter-spacing: 0.025em;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 24px rgba(0,0,0,0.28);
        }

        .bubble-nina::before {
          content: '';
          position: absolute;
          left: 0; top: 16px; bottom: 16px;
          width: 2px;
          background: linear-gradient(180deg, transparent, rgba(200,169,110,0.5), transparent);
          border-radius: 2px;
        }

        /* ── TYPING ── */
        .typing-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          animation: fade-up 0.35s ease forwards;
          opacity: 0;
        }

        .typing-bubble {
          background: rgba(13,10,16,0.7);
          border: 1px solid rgba(200,169,110,0.1);
          border-radius: 3px 16px 16px 16px;
          padding: 13px 18px;
          display: flex;
          gap: 5px;
          align-items: center;
          backdrop-filter: blur(10px);
        }

        .typing-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #C8A96E;
          opacity: 0.45;
          animation: dot-breathe 1.4s ease-in-out infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.18s; }
        .typing-dot:nth-child(3) { animation-delay: 0.36s; }

        @keyframes dot-breathe {
          0%, 60%, 100% { opacity: 0.2; transform: translateY(0); }
          30%            { opacity: 0.85; transform: translateY(-3px); }
        }

        .typing-label {
          font-size: 8.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.35);
          font-weight: 300;
          margin-top: 14px;
          font-family: 'Jost', sans-serif;
        }

        /* ── INPUT BAR ── */
        .input-bar {
          position: relative;
          z-index: 10;
          flex-shrink: 0;
          padding: 14px 20px 18px;
          border-top: 1px solid rgba(200,169,110,0.08);
          background: rgba(7,5,10,0.88);
          backdrop-filter: blur(24px);
        }

        .input-inner {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          background: rgba(13,10,16,0.7);
          border: 1px solid rgba(200,169,110,0.18);
          border-radius: 14px;
          padding: 4px 6px 4px 18px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .input-inner:focus-within {
          border-color: rgba(200,169,110,0.4);
          box-shadow: 0 0 0 1px rgba(200,169,110,0.07), 0 8px 28px rgba(0,0,0,0.35);
        }

        .chat-textarea {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Jost', sans-serif;
          font-weight: 200;
          font-size: 13.5px;
          color: #EFE8DC;
          letter-spacing: 0.03em;
          line-height: 1.55;
          padding: 11px 0;
          resize: none;
          min-height: 44px;
          max-height: 130px;
          overflow-y: auto;
          scrollbar-width: none;
        }
        .chat-textarea::-webkit-scrollbar { display: none; }
        .chat-textarea::placeholder {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 14px;
          font-weight: 300;
          color: rgba(239,232,220,0.2);
          letter-spacing: 0.03em;
        }

        .send-btn {
          flex-shrink: 0;
          width: 38px; height: 38px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #C8A96E 0%, #A8823A 100%);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          box-shadow: 0 2px 12px rgba(200,169,110,0.2);
        }
        .send-btn:hover:not(:disabled) {
          transform: scale(1.06);
          box-shadow: 0 4px 18px rgba(200,169,110,0.35);
        }
        .send-btn:active:not(:disabled) { transform: scale(0.96); }
        .send-btn:disabled { opacity: 0.3; cursor: default; }
        .send-btn svg { width: 14px; height: 14px; color: #1A0F14; }

        .input-footer {
          text-align: center;
          margin-top: 9px;
          font-size: 8.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.2);
          font-weight: 300;
        }
      `}</style>

      <div className="chat-root">

        {/* HEADER */}
        <header className="header">
          <div className="header-left">
            <img
              src="/Logo_horizontal_white.png"
              alt="YESforLOV"
              className="header-logo"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="header-divider" />
            <div className="header-nina">
              <span className="header-nina-name">Nina</span>
              <span className="header-nina-sub">
                intimité émotionnelle &amp; sensorielle
              </span>
            </div>
          </div>

          <div className="header-right">
            <div className="header-status">
              <span className="status-dot" />
              disponible
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              Déconnexion
            </button>
          </div>
        </header>

        {/* MESSAGES */}
        <div className="messages-area">

          {messages.length === 0 && !loading && (
            <div className="welcome">
              <span className="welcome-eyebrow">The French Art of Lov</span>
              <h1 className="welcome-title">
                Bonjour,<br />je suis <em>Nina</em>
              </h1>
              <div className="welcome-orn">
                <span className="orn-line" />
                <span className="orn-diamond" />
                <span className="orn-line r" />
              </div>
              <p className="welcome-sub">
                Votre espace de confiance pour explorer l'intimité,
                le désir et le bien-être sensoriel.
              </p>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`msg-row ${m.role === "user" ? "user" : "assistant"}`}
            >
              <span className={`msg-label ${m.role === "user" ? "vous" : "nina"}`}>
                {m.role === "user" ? "Vous" : "Nina"}
              </span>
              {m.role === "user" ? (
                <div className="bubble-user">{m.content}</div>
              ) : (
                <div className="bubble-nina">{m.content}</div>
              )}
            </div>
          ))}

          {loading && (
            <div className="typing-row">
              <div>
                <span className="msg-label nina">Nina</span>
                <div className="typing-bubble">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
              <span className="typing-label">réfléchit…</span>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {/* INPUT */}
        <div className="input-bar">
          <div className="input-inner">
            <textarea
              ref={textareaRef}
              className="chat-textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Exprimez votre ressenti…"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              onInput={(e) => {
                const t = e.target as HTMLTextAreaElement;
                t.style.height = "44px";
                t.style.height = Math.min(t.scrollHeight, 130) + "px";
              }}
            />
            <button
              className="send-btn"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Envoyer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
          <p className="input-footer">YESforLOV · Confidence &amp; Bienveillance</p>
        </div>

      </div>
    </>
  );
}
