"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, X, Menu, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { hero, statusLine } from "@/content/content";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Companies",  href: "#companies" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navigation() {
  const { theme, toggle } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [mounted,   setMounted]   = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/*
       * Fixed header: status line strip (32px) + nav bar (52px) = ~84px total.
       * Hero and page content must use pt-[84px] to avoid being obscured.
       */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Status line — always visible, scrolls with header */}
        <div
          className={`w-full border-b transition-colors duration-300 ${
            scrolled ? "bg-bg/85 backdrop-blur-xl border-border" : "bg-bg-subtle border-border/60"
          }`}
        >
          <div className="container-wide flex items-center gap-2 py-1.5 overflow-hidden">
            <span
              className="status-dot inline-block w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: "var(--accent)" }}
              aria-hidden="true"
            />
            <p
              className="text-[11px] text-text-3 truncate leading-none"
              style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
            >
              <span className="text-text-2 font-semibold mr-2">STATUS</span>
              {statusLine}
            </p>
          </div>
        </div>

        {/* Main nav bar */}
        <div
          className={`transition-colors duration-300 ${
            scrolled ? "bg-bg/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
          }`}
        >
          <div className="container-wide flex items-center h-[52px]">

            {/* Left: wordmark */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-[15px] font-semibold text-text-1 tracking-tight hover:text-accent transition-colors shrink-0 mr-auto"
              style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
              aria-label="Back to top"
            >
              rk<span className="text-accent">.</span>
            </a>

            {/* Center: nav links — desktop only */}
            <nav
              className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="px-3 py-1.5 rounded-md text-[13px] font-medium text-text-3 hover:text-text-1 transition-colors duration-150"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Right: ⌘K, theme, Resume */}
            <div className="hidden md:flex items-center gap-1.5 ml-auto">
              <button
                onClick={openPalette}
                aria-label="Open command palette (⌘K)"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border text-[11px] text-text-4 hover:text-text-2 hover:border-border-strong transition-all duration-150"
                style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
              >
                <Search size={11} aria-hidden="true" />
                <span>⌘K</span>
              </button>

              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="w-8 h-8 flex items-center justify-center rounded-md text-text-3 hover:text-text-1 hover:bg-bg-subtle transition-all"
              >
                {mounted
                  ? theme === "dark" ? <Sun size={14} /> : <Moon size={14} />
                  : <span className="w-[14px] h-[14px]" />}
              </button>

              <a
                href={hero.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-accent text-white text-[12px] font-semibold hover:opacity-90 transition-opacity"
              >
                Resume
              </a>
            </div>

            {/* Mobile: search + theme + hamburger */}
            <div className="flex md:hidden items-center gap-1 ml-auto">
              <button
                onClick={openPalette}
                aria-label="Search"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-3 hover:text-text-1 hover:bg-bg-subtle transition-all"
              >
                <Search size={15} />
              </button>
              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-3 hover:text-text-1 hover:bg-bg-subtle transition-all"
              >
                {mounted
                  ? theme === "dark" ? <Sun size={15} /> : <Moon size={15} />
                  : <span className="w-[15px] h-[15px]" />}
              </button>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-3 hover:text-text-1 hover:bg-bg-subtle transition-all"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer — appears below the full header (84px) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[84px] left-0 right-0 z-40 bg-bg/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <nav className="container-wide py-3 flex flex-col" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-left py-3 px-1 text-[15px] font-medium text-text-2 hover:text-accent transition-colors border-b border-border/40 last:border-0"
                >
                  {label}
                </button>
              ))}
              <a
                href={hero.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 text-center py-3 px-6 rounded-xl bg-accent text-white text-[14px] font-semibold hover:opacity-90 transition-opacity"
              >
                View Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
