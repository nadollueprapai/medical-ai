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
    <main className="min-h-screen bg-[#F6F8FB]">

      {/* Navigation */}

      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <div className="flex items-center gap-3">

            <Activity
              className="text-[#0B5E92]"
              size={30}
            />

            <h1 className="text-2xl font-semibold tracking-tight">
              Medical AI
            </h1>

          </div>

          <button className="rounded-full bg-[#0B5E92] px-6 py-3 text-white transition hover:bg-[#084A73]">
            Start Assessment
          </button>

        </div>
      </nav>

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFD] via-white to-[#EAF5FA]">

        <div className="absolute right-[-120px] top-[-80px] h-[500px] w-[500px] rounded-full bg-[#CFE9F4] blur-3xl opacity-60" />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-28">

          <div className="max-w-2xl">

            <span className="rounded-full bg-[#DDEFF8] px-5 py-2 text-sm font-medium text-[#0B5E92]">
              AI Health Guidance
            </span>

            <h1 className="mt-8 text-6xl font-bold leading-tight text-slate-900">

              Understand your symptoms with AI

            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">

              Receive educational health guidance through a conversational AI
              assistant that asks follow-up questions and helps you understand
              possible next steps.

            </p>

            <div className="mt-10 flex gap-4">

              <button className="rounded-full bg-[#0B5E92] px-8 py-4 text-white transition hover:bg-[#084A73]">

                Start Assessment

              </button>

              <button className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 hover:bg-slate-50">

                Learn More

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

          <div className="hidden lg:block">

            <div className="h-[430px] w-[430px] rounded-full bg-gradient-to-br from-[#BEE3F3] via-[#69B9DD] to-[#0B5E92] opacity-90 shadow-2xl" />

          </div>

        </div>

      </section>

      {/* Chat */}

      <section className="-mt-12 pb-20">

        <div className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">

          <h2 className="mb-6 text-2xl font-semibold">

            Talk to our AI Assistant

          </h2>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your symptoms..."
            className="h-48 w-full rounded-2xl border border-slate-300 bg-slate-50 p-5 text-lg outline-none transition focus:border-[#0B5E92]"
          />

          <button
            onClick={send}
            className="mt-6 rounded-full bg-[#0B5E92] px-8 py-4 text-white transition hover:bg-[#084A73]"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>

          {reply && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 whitespace-pre-wrap">
              {reply}
            </div>
          )}

        </div>

      </section>

    </main>
  );
}