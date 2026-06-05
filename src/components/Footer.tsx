"use client";

export default function Footer() {
  return (
    <footer className="section-dark border-t" style={{ borderColor: "#1F1F22" }}>
      <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-[12px]"
          style={{ color: "#48484A", fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
        >
          Built in Sydney · 2026 · Last updated Jun 2026
        </p>
        <div className="flex items-center gap-4">
          <span
            className="text-[12px]"
            style={{ color: "#48484A", fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
          >
            Rishi Kanajam
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[12px] transition-colors hover:text-[#8A8A8F]"
            style={{ color: "#48484A", fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
            aria-label="Back to top"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
