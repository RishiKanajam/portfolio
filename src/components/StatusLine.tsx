"use client";

import { statusLine } from "@/content/content";

export default function StatusLine() {
  return (
    <div className="w-full bg-bg-subtle border-b border-border py-1.5 px-4">
      <div className="container-wide flex items-center gap-2">
        <span
          className="status-dot inline-block w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: "var(--accent)" }}
          aria-hidden="true"
        />
        <p
          className="text-[11px] text-text-3 tracking-wide truncate"
          style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
        >
          <span className="text-text-2 font-semibold mr-2">STATUS</span>
          {statusLine}
        </p>
      </div>
    </div>
  );
}
