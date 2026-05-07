"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Writing",    href: "#writing" },
  { label: "Contact",    href: "#contact" },
];

const RESUME_HREF = "/resume.pdf";

export default function Navigation() {
  const { theme, toggle } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [mounted,   setMounted]   = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex items-center h-16">

          {/* Left: wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-[17px] font-bold text-text-1 tracking-tight hover:text-accent transition-colors shrink-0 mr-auto"
            aria-label="Back to top"
          >
            rishi<span className="text-accent">.</span>
          </a>

          {/* Center: pill nav links — hidden on mobile */}
          <nav
            className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-text-3 hover:text-text-1 hover:bg-surface transition-all duration-150"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right: theme toggle + Resume — hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="w-8 h-8 flex items-center justify-center rounded-full text-text-3 hover:text-text-1 hover:bg-surface transition-all"
            >
              {mounted
                ? theme === "dark" ? <Sun size={15} /> : <Moon size={15} />
                : <span className="w-4 h-4" />}
            </button>
            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-accent text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-1 ml-auto">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="w-10 h-10 flex items-center justify-center rounded-full text-text-3 hover:text-text-1 hover:bg-surface transition-all"
            >
              {mounted
                ? theme === "dark" ? <Sun size={16} /> : <Moon size={16} />
                : <span className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="w-10 h-10 flex items-center justify-center rounded-full text-text-3 hover:text-text-1 hover:bg-surface transition-all"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg/95 backdrop-blur-xl border-b border-border shadow-lg md:hidden"
          >
            <nav className="container-wide py-4 flex flex-col" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-left py-3 px-1 text-[16px] font-medium text-text-2 hover:text-accent transition-colors border-b border-border/50 last:border-0"
                >
                  {label}
                </button>
              ))}
              <a
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 text-center py-3 px-6 rounded-full bg-accent text-white text-[15px] font-semibold hover:opacity-90 transition-opacity"
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
