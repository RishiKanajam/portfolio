"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stats, type Stat } from "@/content/content";

function useCountUp(target: number, decimals: number, enabled: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let frame: number;
    const startTime = performance.now();
    const duration = 1300;

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, decimals, enabled]);

  return value;
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const counted = useCountUp(stat.numericTarget ?? 0, stat.decimals ?? 0, inView && !stat.isText);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const displayValue = stat.isText
    ? stat.value
    : inView
      ? `${counted.toFixed(stat.decimals ?? 0)}${stat.suffix ?? ""}`
      : stat.value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center px-4 py-7 sm:py-10"
    >
      <span
        className="text-[28px] sm:text-[36px] font-bold tracking-tight text-text-1 leading-none mb-1.5 tabular-nums"
        style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
      >
        {displayValue}
      </span>
      <span
        className="text-[11px] font-semibold tracking-wider uppercase text-accent mb-0.5"
        style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
      >
        {stat.label}
      </span>
      <span className="text-[12px] text-text-3 leading-snug">
        {stat.sublabel}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <div id="stats" className="border-y border-border bg-bg-subtle">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "md:border-l md:first:border-l-0 border-border",
                i >= 2 ? "border-t border-border" : "",
                i % 2 === 1 ? "border-l border-border md:border-l-0" : "",
              ].join(" ")}
            >
              <StatItem stat={s} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
