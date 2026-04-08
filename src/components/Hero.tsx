"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, FileText, MessageCircle } from "lucide-react";
import { siteConfig, hero } from "@/content/content";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Spring physics for Apple-feel entrance
const SPRING = { type: "spring" as const, stiffness: 80, damping: 20, mass: 0.9 };
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { ...SPRING, delay },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col justify-center pt-20 pb-16"
    >
      {/* Faint radial glow behind avatar — gives depth without distraction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-teal-400/4 blur-3xl dark:bg-teal-400/6" />
      </div>

      <div className="container-wide relative z-10">
        {/* Two-column layout on desktop — photo right, text left */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-16 lg:gap-24">

          {/* ── Left: text ── */}
          <div className="mt-10 md:mt-0">
            {/* Name */}
            <motion.h1
              {...fadeUp(0)}
              className="text-[52px] sm:text-[64px] md:text-[72px] lg:text-[84px] font-bold text-text-1 tracking-tight leading-[0.95] mb-5"
            >
              Rishi Madhur<br/>Kanajam
            </motion.h1>

            {/* One-liner */}
            <motion.p
              {...fadeUp(0.07)}
              className="text-[18px] md:text-[20px] text-text-2 leading-relaxed max-w-125 mb-5"
            >
              {siteConfig.oneLiner}
            </motion.p>

            {/* Work-rights pill — own line, unmissable for AU recruiters */}
            <motion.div {...fadeUp(0.13)} className="mb-8">
              <span className="inline-flex items-center gap-2.5 text-[14px] text-text-2 font-medium">
                <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dot-green opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-dot-green" />
                </span>
                {hero.availabilityPill}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.18)} className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href={hero.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[15px] font-semibold hover:opacity-90 transition-opacity shadow-md"
              >
                <FileText size={15} />
                Resume
              </a>
              <a
                href="#ask-me"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("ask-me")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-[15px] text-text-2 font-semibold hover:border-border-strong hover:text-text-1 transition-colors"
              >
                <MessageCircle size={15} />
                Ask Me
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div {...fadeUp(0.23)} className="flex items-center gap-5">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                aria-label="GitHub" className="text-text-4 hover:text-text-1 transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={siteConfig.linkedIn} target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn" className="text-text-4 hover:text-text-1 transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href={siteConfig.mailtoHref} aria-label="Email"
                className="text-text-4 hover:text-text-1 transition-colors">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* ── Right: photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.05 }}
            className="flex justify-center md:justify-end"
          >
            {/*
             * Avatar — using /pic.jpeg (your actual photo).
             * To swap: replace /pic.jpeg in /public with a new image and keep the same filename.
             */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 shrink-0">
              {/* Subtle ring */}
              <div className="absolute inset-0 rounded-full ring-4 ring-accent/20 dark:ring-accent/30" />
              <Image
                src="/profile.jpeg"
                alt="Rishi Madhur Kanajam"
                fill
                priority
                className="rounded-full object-cover object-top"
                sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 288px"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden md:flex items-center gap-2 mt-16 text-text-4"
          aria-hidden="true"
        >
          <div className="w-px h-8 bg-border" />
          <span className="text-[11px] tracking-widest uppercase">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
