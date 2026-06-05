"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import { siteConfig, hero } from "@/content/content";

function SplitText({ text, className }: { text: string; className?: string }) {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setPrefersReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (prefersReduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1 + i * 0.028,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: char === " " ? "inline" : "inline-block" }}
          aria-hidden="true"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const scrollDown = () => {
    document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex flex-col justify-center min-h-[100svh] pt-[108px] pb-16 md:pt-[120px] md:pb-24"
      aria-label="Introduction"
    >
      <div className="container-wide">
        <div className="max-w-[860px]">

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 mb-8"
          >
            <MapPin size={11} className="text-accent shrink-0" aria-hidden="true" />
            <span
              className="text-[12px] text-text-3"
              style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
            >
              {hero.locationPill}
            </span>
          </motion.div>

          {/* Display name — Fraunces serif */}
          <h1
            className="mb-5 leading-[0.92] tracking-tight"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(58px, 10vw, 128px)",
              fontWeight: 700,
            }}
          >
            <SplitText text="Rishi" />
            <br />
            <SplitText text="Kanajam" />
            <motion.span
              className="text-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.3 }}
              style={{ display: "inline-block", fontSize: "0.55em", verticalAlign: "0.12em" }}
              aria-hidden="true"
            >
              •
            </motion.span>
          </h1>

          {/* Headline + one-liner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="text-[18px] md:text-[22px] text-text-2 leading-relaxed max-w-[600px]">
              <span className="text-text-1 font-semibold">{siteConfig.headline}</span>
              {" "}
              {siteConfig.oneLiner}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={siteConfig.mailtoHref}
              className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-xl bg-accent text-white text-[14px] font-semibold hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <a
              href={hero.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-xl border border-border text-[14px] font-medium text-text-2 hover:text-text-1 hover:border-border-strong transition-all"
            >
              View resume
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-xl border border-border text-[14px] font-medium text-text-2 hover:text-text-1 hover:border-border-strong transition-all"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Scroll nudge */}
        <motion.button
          onClick={scrollDown}
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-4 hover:text-text-2 transition-colors cursor-pointer"
        >
          <ArrowDown size={16} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
