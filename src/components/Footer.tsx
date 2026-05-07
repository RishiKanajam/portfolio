"use client";

export default function Footer() {
  return (
    <footer className="section-dark border-t" style={{ borderColor: "#1F1F1F" }}>
      <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[13px]" style={{ color: "#48484A" }}>
          © {new Date().getFullYear()} Rishi Kanajam
        </p>
        <div className="flex items-center gap-4">
          <p className="text-[13px]" style={{ color: "#48484A" }}>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "#8E8E93" }}
            >
              Next.js
            </a>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[12px] transition-colors"
            style={{ color: "#48484A" }}
            aria-label="Back to top"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
