import { marqueeRow1, marqueeRow2 } from "@/content/content";
import {
  SiPython, SiCplusplus, SiTypescript,
  SiPytorch, SiTensorflow, SiLangchain, SiFastapi,
  SiReact, SiNextdotjs, SiPostgresql, SiMongodb,
  SiDocker, SiRedis,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ICON_MAP: Record<string, { Icon: IconType; color: string }> = {
  Python:     { Icon: SiPython,     color: "#3776AB" },
  "C++":      { Icon: SiCplusplus,  color: "#00599C" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  PyTorch:    { Icon: SiPytorch,    color: "#EE4C2C" },
  TensorFlow: { Icon: SiTensorflow, color: "#FF6F00" },
  LangChain:  { Icon: SiLangchain,  color: "#1C7C5C" },
  FastAPI:    { Icon: SiFastapi,    color: "#009688" },
  React:      { Icon: SiReact,      color: "#61DAFB" },
  "Next.js":  { Icon: SiNextdotjs,  color: "#888888" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  MongoDB:    { Icon: SiMongodb,    color: "#47A248" },
  Docker:     { Icon: SiDocker,     color: "#2496ED" },
  Redis:      { Icon: SiRedis,      color: "#DC382D" },
};

// Fallback dot color for items without a react-icon
const FALLBACK_COLORS: Record<string, string> = {
  SQL: "#4479A1",
  AWS: "#FF9900",
  GCP: "#4285F4",
};

function Pill({ label }: { label: string }) {
  const entry = ICON_MAP[label];
  const dotColor = FALLBACK_COLORS[label];
  return (
    <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-surface text-[12px] sm:text-[13px] font-medium text-text-2 whitespace-nowrap shadow-sm">
      {entry ? (
        <entry.Icon size={14} style={{ color: entry.color, flexShrink: 0 }} aria-hidden="true" />
      ) : dotColor ? (
        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: dotColor }} aria-hidden="true" />
      ) : null}
      {label}
    </span>
  );
}

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className={`flex gap-3 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
        {doubled.map((item, i) => (
          <Pill key={`${item}-${i}`} label={item} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="py-10 border-t border-border overflow-hidden">
      <div className="space-y-3">
        <MarqueeRow items={marqueeRow1} direction="left" />
        <MarqueeRow items={marqueeRow2} direction="right" />
      </div>
    </div>
  );
}
