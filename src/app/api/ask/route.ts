import { NextRequest, NextResponse } from "next/server";
import { chatbotSystemPrompt } from "@/content/content";

export const runtime = "edge";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: Message[] } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      // Graceful fallback when no key is configured
      return NextResponse.json({
        content: "I'm Rishi's portfolio assistant. Set ANTHROPIC_API_KEY to enable AI responses.",
      });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: chatbotSystemPrompt,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", err);
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    }

    const data = await response.json();
    const content = data.content?.[0]?.text ?? "Sorry, I couldn't generate a response.";
    return NextResponse.json({ content });
  } catch (e) {
    console.error("ask route error:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
