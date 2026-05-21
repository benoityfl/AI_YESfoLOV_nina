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
  // AUTH CHECK (FIX FINAL VERCEL)
  // ─────────────────────────────
  useEffect(() => {
    const checkUser = async () => {
      try {
        const client = supabase;
        const { data } = await client.auth.getUser();

        if (!data?.user) {
          router.push("/login");
          return;
        }

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

    const newMessages = [
      ...messages,
      { role: "user", content: input },
    ];

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
        body: JSON.stringify({
          messages: newMessages,
          userId: user?.id,
        }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data?.message || "Je n'ai pas pu générer de réponse.",
        },
      ]);
    } catch (err) {
      console.error(err);

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Une erreur est survenue. Veuillez réessayer.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // ─────────────────────────────
  // LOGOUT
  // ─────────────────────────────
  const handleLogout = async () => {
    const client = supabase;
    await client.auth.signOut();
    router.push("/login");
  };

  return (
    <>
      <style>{`/* ton CSS inchangé */`}</style>

      <div className="chat-root">

        {/* HEADER */}
        <header className="header">
          <div className="header-left">
            <img
              src="/Logo_horizontal_white.png"
              alt="YESforLOV"
              className="header-logo"
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
              <h1 className="welcome-title">
                Bonjour,<br />je suis <em>Nina</em>
              </h1>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`msg-row ${m.role === "user" ? "user" : "assistant"}`}
            >
              <div
                className={
                  m.role === "user"
                    ? "bubble-user"
                    : "bubble-nina"
                }
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="typing-row">
              <div className="typing-bubble">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {/* INPUT */}
        <div className="input-bar">
          <div className="input-inner">
            <textarea
              ref={textareaRef}
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
            />

            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
            >
              ➤
            </button>
          </div>
        </div>

      </div>
    </>
  );
}