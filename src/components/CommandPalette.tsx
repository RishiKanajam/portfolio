"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight, Mail, FileText, Link, ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { siteConfig, experience, projects, hero } from "@/content/content";

interface PaletteItem {
  id: string;
  label: string;
  sublabel?: string;
  group: string;
  icon?: React.ReactNode;
  action: () => void;
}

function buildItems(toggleTheme: () => void): PaletteItem[] {
  const nav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const expItems: PaletteItem[] = experience.map((e) => ({
    id: `exp-${e.company}`,
    label: e.role,
    sublabel: `${e.company} · ${e.period}`,
    group: "Experience",
    action: () => nav("experience"),
  }));

  const projectItems: PaletteItem[] = projects.map((p) => ({
    id: `project-${p.number}`,
    label: p.title,
    sublabel: p.tags?.join(", "),
    group: "Projects",
    icon: <span className="text-text-4 font-mono text-[10px]">{p.number}</span>,
    action: () => {
      if (p.liveUrl) window.open(p.liveUrl, "_blank", "noopener");
      else if (p.githubUrl) window.open(p.githubUrl, "_blank", "noopener");
      else nav("projects");
    },
  }));

  const actionItems: PaletteItem[] = [
    {
      id: "action-email",
      label: "Email Rishi",
      sublabel: siteConfig.email,
      group: "Actions",
      icon: <Mail size={14} className="text-text-3" />,
      action: () => window.open(siteConfig.mailtoHref),
    },
    {
      id: "action-resume",
      label: "Download Resume",
      sublabel: "Opens PDF",
      group: "Actions",
      icon: <FileText size={14} className="text-text-3" />,
      action: () => window.open(hero.resumeHref, "_blank"),
    },
    {
      id: "action-github",
      label: "View GitHub",
      sublabel: "github.com/RishiKanajam",
      group: "Actions",
      icon: <Link size={14} className="text-text-3" />,
      action: () => window.open(siteConfig.github, "_blank", "noopener"),
    },
    {
      id: "action-linkedin",
      label: "View LinkedIn",
      sublabel: "linkedin.com/in/rishikanajam",
      group: "Actions",
      icon: <ExternalLink size={14} className="text-text-3" />,
      action: () => window.open(siteConfig.linkedIn, "_blank", "noopener"),
    },
    {
      id: "action-theme",
      label: "Toggle Theme",
      sublabel: "Switch dark / light",
      group: "Actions",
      action: toggleTheme,
    },
  ];

  return [...actionItems, ...expItems, ...projectItems];
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { toggle } = useTheme();

  const close = useCallback(() => { setOpen(false); setQuery(""); }, []);

  // Global keyboard shortcut + custom event from Navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onEvent = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onEvent);
    };
  }, []);

  // Close on backdrop click
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const items = buildItems(toggle);

  const groups = Array.from(new Set(items.map((i) => i.group)));

  const run = (item: PaletteItem) => {
    item.action();
    close();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Palette */}
          <motion.div
            key="palette"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[201] flex items-start justify-center pt-[18vh] px-4 pointer-events-none"
          >
            <div className="w-full max-w-[560px] pointer-events-auto">
              <Command
                className="rounded-2xl border border-border bg-bg shadow-2xl overflow-hidden"
                shouldFilter={true}
                loop
              >
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                  <Search size={15} className="text-text-4 shrink-0" aria-hidden="true" />
                  <Command.Input
                    value={query}
                    onValueChange={setQuery}
                    placeholder="Search experience, projects, or actions…"
                    className="flex-1 text-[14px] text-text-1 placeholder:text-text-4 bg-transparent outline-none"
                    autoFocus
                  />
                  <kbd
                    className="hidden sm:inline-flex px-1.5 py-0.5 rounded border border-border text-[10px] text-text-4 shrink-0"
                    style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
                  >
                    esc
                  </kbd>
                </div>

                {/* Results */}
                <Command.List className="max-h-[400px] overflow-y-auto py-2">
                  <Command.Empty className="py-10 text-center text-[13px] text-text-4">
                    No results for &ldquo;{query}&rdquo;
                  </Command.Empty>

                  {groups.map((group) => (
                    <Command.Group
                      key={group}
                      heading={group}
                      className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-text-4"
                    >
                      {items
                        .filter((item) => item.group === group)
                        .map((item) => (
                          <Command.Item
                            key={item.id}
                            value={`${item.label} ${item.sublabel ?? ""}`}
                            onSelect={() => run(item)}
                            className="flex items-center gap-3 px-4 py-2.5 mx-1 rounded-lg cursor-pointer text-text-2 data-[selected=true]:bg-bg-subtle data-[selected=true]:text-text-1 transition-colors"
                          >
                            <span className="w-5 h-5 flex items-center justify-center shrink-0">
                              {item.icon ?? <ArrowUpRight size={13} className="text-text-4" />}
                            </span>
                            <div className="flex-1 min-w-0">
                              <span className="text-[13px] font-medium block truncate">
                                {item.label}
                              </span>
                              {item.sublabel && (
                                <span className="text-[11px] text-text-4 block truncate">
                                  {item.sublabel}
                                </span>
                              )}
                            </div>
                          </Command.Item>
                        ))}
                    </Command.Group>
                  ))}
                </Command.List>

                {/* Footer hint */}
                <div className="px-4 py-2 border-t border-border flex items-center gap-3">
                  <span
                    className="text-[10px] text-text-4"
                    style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
                  >
                    ↑↓ navigate · ↵ select · esc close
                  </span>
                </div>
              </Command>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
