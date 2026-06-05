"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Sparkles, ChevronDown } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const PLACEHOLDER_SUGGESTIONS = [
  "Why hire Rishi?",
  "Show me his healthcare AI work",
  "What is DeceptionArena?",
  "Is he open to roles?",
  "Tell me about Krama Core",
];

async function askApi(messages: Message[]): Promise<string> {
  const res = await fetch("/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  if (!res.ok) throw new Error("Request failed");
  const data = await res.json();
  return data.content ?? "Sorry, something went wrong.";
}

export default function IntelligenceBar() {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  // Rotate placeholder suggestions
  useEffect(() => {
    if (expanded) return;
    const interval = setInterval(() => {
      setPlaceholderVisible(false);
      setTimeout(() => {
        setPlaceholderIndex((i) => (i + 1) % PLACEHOLDER_SUGGESTIONS.length);
        setPlaceholderVisible(true);
      }, 250);
    }, 3000);
    return () => clearInterval(interval);
  }, [expanded]);

  // Scroll messages to bottom
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Focus input on expand
  useEffect(() => {
    if (expanded) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [expanded]);

  // Allow other components to open it
  useEffect(() => {
    const handler = () => setExpanded(true);
    window.addEventListener("open-chatbot", handler);
    return () => window.removeEventListener("open-chatbot", handler);
  }, []);

  const send = async (e: FormEvent | string) => {
    if (typeof e !== "string") e.preventDefault();
    const text = typeof e === "string" ? e : input.trim();
    if (!text || loading) return;

    if (!expanded) setExpanded(true);
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const reply = await askApi(next);
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Something went wrong. Try again." }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setExpanded(true);
    setTimeout(() => {
      send(suggestion);
    }, 50);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none pb-4 px-4">
      <div className="w-full max-w-[720px] pointer-events-auto">
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="chat-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mb-2"
            >
              <div className="rounded-2xl border border-border bg-bg/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Chat header */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-subtle/50">
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="text-accent" aria-hidden="true" />
                    <span
                      className="text-[12px] font-semibold text-text-2"
                      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
                    >
                      Ask me anything
                    </span>
                  </div>
                  <button
                    onClick={() => setExpanded(false)}
                    aria-label="Minimise"
                    className="w-7 h-7 flex items-center justify-center rounded-lg text-text-4 hover:text-text-2 hover:bg-bg-subtle transition-all"
                  >
                    <ChevronDown size={14} />
                  </button>
                </div>

                {/* Messages */}
                <div
                  ref={messagesRef}
                  className="px-4 py-3 space-y-3 max-h-[280px] overflow-y-auto"
                >
                  {messages.length === 0 && (
                    <p className="text-[12px] text-text-4 text-center py-6">
                      Ask about my projects, experience, or availability.
                    </p>
                  )}
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "assistant" && (
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles size={9} className="text-accent" />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] px-3 py-2 rounded-xl text-[13px] leading-relaxed ${
                          msg.role === "user"
                            ? "bg-accent text-white rounded-br-sm"
                            : "bg-surface text-text-2 border border-border rounded-bl-sm"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex gap-2 justify-start">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles size={9} className="text-accent" />
                      </div>
                      <div className="px-3 py-2.5 rounded-xl bg-surface border border-border rounded-bl-sm">
                        <span className="flex gap-1">
                          {[0, 0.15, 0.3].map((d, i) => (
                            <span
                              key={i}
                              className="w-1 h-1 rounded-full bg-text-4 animate-bounce"
                              style={{ animationDelay: `${d}s` }}
                            />
                          ))}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Clear */}
                {messages.length > 0 && (
                  <div className="px-4 pb-2 flex justify-end">
                    <button
                      onClick={() => setMessages([])}
                      className="text-[11px] text-text-4 hover:text-text-2 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom bar */}
        <div className="rounded-full border border-border bg-bg/90 backdrop-blur-xl shadow-xl overflow-hidden">
          <form
            onSubmit={send}
            className="flex items-center gap-2 px-4 py-2.5"
          >
            {/* Sparkle icon */}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-label={expanded ? "Minimise chat" : "Open AI chat"}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-accent/10 shrink-0 hover:bg-accent/20 transition-colors"
            >
              <Sparkles size={13} className="text-accent" />
            </button>

            {/* Input or rotating placeholder */}
            {expanded ? (
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something…"
                disabled={loading}
                className="flex-1 text-[13px] text-text-1 placeholder:text-text-4 bg-transparent outline-none disabled:opacity-50"
              />
            ) : (
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="flex-1 text-left"
                aria-label="Open AI chat"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={placeholderIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: placeholderVisible ? 1 : 0, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-[13px] text-text-4 block"
                  >
                    {PLACEHOLDER_SUGGESTIONS[placeholderIndex]}
                  </motion.span>
                </AnimatePresence>
              </button>
            )}

            {expanded ? (
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send"
                className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0"
              >
                <Send size={11} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-label="Close"
                className="w-7 h-7 flex items-center justify-center text-text-4 hover:text-text-2 shrink-0 opacity-0 pointer-events-none"
              >
                <X size={13} />
              </button>
            )}
          </form>
        </div>

        {/* Quick suggestions — shown only when expanded and no messages yet */}
        <AnimatePresence>
          {expanded && messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-wrap gap-2 justify-center mt-2"
            >
              {PLACEHOLDER_SUGGESTIONS.slice(0, 3).map((s) => (
                <button
                  key={s}
                  onClick={() => handleSuggestionClick(s)}
                  className="px-3 py-1 rounded-full border border-border bg-bg/80 backdrop-blur text-[11px] text-text-3 hover:text-text-1 hover:border-border-strong transition-all"
                >
                  {s}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
