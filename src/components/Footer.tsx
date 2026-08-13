"use client";

/*
 * Ft4 · Dense colophon. One block of mono text that closes the page like a
 * printed one — what it's set in, what it's built on, who made it. The old
 * footer was a two-column strip of hard-coded hex greys; a colophon says more
 * in the same space and belongs to the technical register the page is written
 * in.
 */

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-wide py-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="colophon measure">
          Set in Fraunces, IBM&nbsp;Plex&nbsp;Sans and JetBrains&nbsp;Mono. Built with
          Next.js and TypeScript, deployed on Vercel. Written and maintained by
          Rishi Kanajam in Sydney, Australia. 2026.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="colophon self-start sm:self-end shrink-0 whitespace-nowrap hover:text-[var(--accent)] transition-colors"
          aria-label="Back to top"
        >
          ↑ top
        </button>
      </div>
    </footer>
  );
}
