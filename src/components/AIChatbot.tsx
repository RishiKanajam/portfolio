"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// ── Stub response ─────────────────────────────────────────────────────────────
// TODO: Replace stubAsk with a fetch to /api/ask (a Next.js Route Handler)
// that calls the Anthropic API:
//
//   const res = await fetch("/api/ask", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ messages: next }),
//   });
//   const { content } = await res.json();
//
// See README.md for the full /api/ask route implementation.
async function stubAsk(messages: Message[]): Promise<string> {
  await new Promise((r) => setTimeout(r, 500));
  const q = messages[messages.length - 1].content.toLowerCase();
  if (q.includes("visa") || q.includes("work right") || q.includes("sponsor"))
    return "I hold a Subclass 485 graduate visa valid until September 2028 — full Australian work rights, no sponsorship needed.";
  if (q.includes("ocius") || q.includes("maritime") || q.includes("yolo"))
    return "The Ocius project was a real-time maritime CV pipeline — YOLOv8 at 394 FPS on edge hardware, deployed for autonomous surveillance. Happy to go deeper.";
  if (q.includes("availab") || q.includes("hire") || q.includes("opportunit"))
    return "Actively looking for Software Engineer, AI/ML Engineer, or Data Engineer roles, ideally with a healthcare or AI security angle. Email is the fastest path — see the Contact section.";
  if (q.includes("project") || q.includes("work"))
    return "My strongest pieces are the Ocius maritime CV pipeline (394 FPS YOLOv8), MangRAG (RAG document intelligence), and RNA 3D folding (TM-score 0.984). Ask me about any specific one.";
  return "I'm Rishi's portfolio assistant. Ask me about his experience, projects, tech stack, publications, or availability.";
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const send = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const reply = await stubAsk(next);
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Something went wrong. Try again." }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  return (
    // Fixed floating widget — sits in bottom-right corner, doesn't occupy page flow
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="w-80 rounded-2xl border border-border bg-bg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-subtle">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <Bot size={13} className="text-accent" />
                </div>
                <span className="text-[14px] font-semibold text-text-1">Ask me anything</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat"
                className="text-text-4 hover:text-text-1 transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Message thread */}
            <div className="p-3 space-y-3 max-h-60 overflow-y-auto">
              {messages.length === 0 && (
                <p className="text-[12px] text-text-4 text-center py-4">
                  Ask about my experience, projects, or availability.
                </p>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={10} className="text-accent" />
                    </div>
                  )}
                  <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[12px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-accent text-white rounded-br-sm"
                      : "bg-surface text-text-2 border border-border rounded-bl-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={10} className="text-accent" />
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-surface border border-border">
                    <span className="flex gap-1">
                      {[0, 0.15, 0.3].map((d, i) => (
                        <span key={i} className="w-1 h-1 rounded-full bg-text-4 animate-bounce"
                          style={{ animationDelay: `${d}s` }} />
                      ))}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={send} className="flex items-center gap-2 px-3 py-2.5 border-t border-border">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something…"
                disabled={loading}
                className="flex-1 text-[13px] text-text-1 placeholder:text-text-4 bg-transparent outline-none disabled:opacity-50"
              />
              <button type="submit" disabled={!input.trim() || loading} aria-label="Send"
                className="w-7 h-7 rounded-lg bg-accent text-white flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0">
                <Send size={11} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB — floating action button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Ask Me chat"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="w-12 h-12 rounded-full bg-accent text-white shadow-lg flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span key="chat"
              initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
