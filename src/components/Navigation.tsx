"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Search } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { hero, siteConfig } from "@/content/content";

/*
 * N13 · Inline ⌘K search pill.
 *
 * The site already ships a real cmdk palette; N13 puts the affordance on the
 * surface instead of hiding it behind a shortcut only power users know. The
 * pill IS the navigation — every section and project is reachable through it,
 * which is why there's no link row and no hamburger. Below 40rem the pill
 * collapses to its icon, per the archetype's mobile rule.
 */

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[200] transition-colors duration-200 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container-wide flex items-center gap-3 h-14">
        {/* Wordmark: mono, the outlier register */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-mono text-[13px] font-medium tracking-tight text-text-1 hover:text-accent transition-colors shrink-0 whitespace-nowrap"
          aria-label="Back to top"
        >
          rishi kanajam
        </a>

        {/* Search pill: the nav proper */}
        <button
          onClick={openPalette}
          aria-label="Search this site (⌘K)"
          className="searchpill ml-auto md:ml-6"
        >
          <Search size={12} aria-hidden="true" className="shrink-0" />
          {/* The pill yields width to the link row before the links do — a nav
              link that wraps or gets dropped costs more than a shorter hint. */}
          <span className="hidden sm:inline xl:hidden">Search…</span>
          <span className="hidden xl:inline">Search work, stack, writing…</span>
          <span className="hidden lg:inline-flex items-center gap-0.5 ml-2">
            <kbd>⌘</kbd><kbd>K</kbd>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-4 lg:gap-5 ml-auto" aria-label="Sections">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="text-[13px] text-text-3 hover:text-text-1 transition-colors whitespace-nowrap"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2 shrink-0 md:ml-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-11 h-11 md:w-9 md:h-9 flex items-center justify-center rounded-md text-text-3 hover:text-text-1 transition-colors"
          >
            {mounted
              ? theme === "dark" ? <Sun size={15} /> : <Moon size={15} />
              : <span className="w-[15px] h-[15px]" />}
          </button>

          <a
            href={hero.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center h-9 px-3 rounded-md border border-border text-[13px] text-text-2 hover:text-text-1 hover:border-border-strong transition-colors whitespace-nowrap"
          >
            CV
          </a>
          {/* C1 · outlined chip. An accent-filled block here spent most of the
              page's accent budget on a 90px button. */}
          <a
            href={siteConfig.mailtoHref}
            className="inline-flex items-center h-9 px-3 rounded-md border text-[13px] font-medium whitespace-nowrap transition-colors"
            style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
          >
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
