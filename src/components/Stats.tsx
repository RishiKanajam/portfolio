"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stats, type Stat } from "@/content/content";

function useCountUp(target: number, decimals: number, enabled: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
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

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const counted = useCountUp(stat.numericTarget, stat.decimals ?? 0, inView);

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

  const formatted = inView
    ? `${stat.prefix ?? ""}${counted.toFixed(stat.decimals ?? 0)}${stat.suffix ?? ""}`
    : stat.value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-4 py-6 sm:py-8"
    >
      <span className="text-[38px] sm:text-[46px] font-bold tracking-tight text-text-1 font-[var(--font-mono)] tabular-nums leading-none mb-2">
        {formatted}
      </span>
      <span className="text-[12px] sm:text-[13px] text-text-3 leading-snug max-w-[130px]">
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <div className="border-y border-border bg-bg-subtle">
      <div className="container-wide">
        {/*
         * Mobile: 2×2 grid (2 cols, 2 rows)
         * Desktop: 4 across — divide-x only on md+ to avoid broken borders in 2-col wrap
         */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                // vertical dividers between columns
                "md:border-l md:first:border-l-0 border-border",
                // horizontal divider between the two mobile rows
                i >= 2 ? "border-t border-border" : "",
                // on mobile col 2 items get a left border
                i % 2 === 1 ? "border-l border-border md:border-l-0" : "",
              ].join(" ")}
            >
              <StatItem stat={s} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
