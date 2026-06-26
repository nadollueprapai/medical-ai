"use client";

import { Activity, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!message.trim()) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[var(--bg-light)]">

      {/* Navigation */}

      <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <div className="flex items-center gap-3">

            <Activity
              className="text-[var(--primary-dark)]"
              size={30}
            />

            <h1 className="text-2xl font-semibold tracking-tight">
              Medical AI
            </h1>

          </div>

        </div>
      </nav>

      {/* Chat */}

      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center pb-20">

        <div className="mx-auto max-w-5xl rounded-[28px] border border-[var(--border)] bg-[var(--bg)] p-10 shadow-sm">

          <h2 className="mb-6 text-2xl font-semibold">

            Talk to our AI Assistant

          </h2>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your symptoms..."
            className="h-48 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-light)] p-5 text-lg outline-none transition focus:border-[var(--primary-dark)]"
          />

          <button
            onClick={send}
            className="mt-6 rounded-full bg-[var(--primary-dark)] px-8 py-4 text-white transition hover:bg-[var(--primary)]"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>

          {reply && (
            <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-light)] p-6 whitespace-pre-wrap">
              {reply}
            </div>
          )}

        </div>

      </section>

    </main>
  );
}