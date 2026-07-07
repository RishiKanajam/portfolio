"use client";

import AnimatedSection from "@/components/AnimatedSection";
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus,
  SiPytorch, SiTensorflow, SiLangchain, SiFastapi, SiOpenai, SiAnthropic,
  SiHuggingface, SiReact, SiNextdotjs, SiExpo, SiNodedotjs, SiPostgresql,
  SiMongodb, SiNumpy, SiPandas, SiDocker, SiVercel, SiGithubactions,
  SiApacheairflow, SiSnowflake, SiNvidia,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface TechItem {
  name: string;
  Icon?: IconType;
  color?: string;
  note?: boolean;
}

interface TechGroup {
  label: string;
  items: TechItem[];
}

const TECH_GROUPS: TechGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "Python",     Icon: SiPython,     color: "#3776AB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL",        color: "#4479A1" },
      { name: "C++",        Icon: SiCplusplus,  color: "#00599C" },
    ],
  },
  {
    label: "AI / ML",
    items: [
      { name: "PyTorch",           Icon: SiPytorch,      color: "#EE4C2C" },
      { name: "TensorFlow",        Icon: SiTensorflow,   color: "#FF6F00" },
      { name: "Hugging Face",      Icon: SiHuggingface,  color: "#FFD21E" },
      { name: "LangChain",         Icon: SiLangchain,    color: "#1C7C5C" },
      { name: "OpenAI Agents SDK", Icon: SiOpenai,       color: "#412991" },
      { name: "Anthropic API",     Icon: SiAnthropic,    color: "#D97757" },
      { name: "RAG",               color: "#5CBB78" },
      { name: "Fine-tuning",       color: "#8B5CF6" },
    ],
  },
  {
    label: "Healthcare Data",
    items: [
      { name: "FHIR R4", color: "#E03C31" },
      { name: "ABDM",    color: "#FF9933" },
      { name: "HL7",     color: "#0072CE" },
    ],
  },
  {
    label: "Web & Mobile",
    items: [
      { name: "Next.js",      Icon: SiNextdotjs, color: "#888888" },
      { name: "React",        Icon: SiReact,     color: "#61DAFB" },
      { name: "React Native", Icon: SiReact,     color: "#61DAFB" },
      { name: "Expo",         Icon: SiExpo,      color: "#000020" },
      { name: "FastAPI",      Icon: SiFastapi,   color: "#009688" },
      { name: "Node.js",      Icon: SiNodedotjs, color: "#339933" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL",    Icon: SiPostgresql,    color: "#336791" },
      { name: "MongoDB Atlas", Icon: SiMongodb,       color: "#47A248" },
      { name: "Pandas",        Icon: SiPandas,        color: "#150458" },
      { name: "NumPy",         Icon: SiNumpy,         color: "#4DABCF" },
      { name: "Snowflake",     Icon: SiSnowflake,     color: "#29B5E8", note: true },
      { name: "Airflow",       Icon: SiApacheairflow, color: "#017CEE", note: true },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS",            color: "#FF9900" },
      { name: "Azure",          color: "#0078D4" },
      { name: "GCP",            color: "#4285F4" },
      { name: "Docker",         Icon: SiDocker,        color: "#2496ED" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { name: "Vercel",         Icon: SiVercel,        color: "#888888" },
      { name: "CUDA",           Icon: SiNvidia,        color: "#76B900" },
      { name: "TensorRT",       Icon: SiNvidia,        color: "#76B900" },
    ],
  },
];

// Fallback colored dot for items without a react-icon
function ItemIcon({ item }: { item: TechItem }) {
  if (item.Icon) {
    return (
      <item.Icon
        size={15}
        style={{ color: item.color, flexShrink: 0 }}
        aria-hidden="true"
      />
    );
  }
  return (
    <span
      className="w-3.5 h-3.5 rounded-sm shrink-0 inline-block"
      style={{ backgroundColor: item.color ?? "var(--border-strong)" }}
      aria-hidden="true"
    />
  );
}

export default function TechList() {
  return (
    <section className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">Tech</span>
          <h2
            className="text-[28px] md:text-[36px] font-bold text-text-1 tracking-tight leading-tight mb-10"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            What I work with.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {TECH_GROUPS.map((group, i) => (
            <AnimatedSection key={group.label} delay={i * 0.07}>
              <h3
                className="text-[11px] font-semibold tracking-wider uppercase text-accent mb-4"
                style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
              >
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-2.5">
                    <ItemIcon item={item} />
                    <span className={`text-[14px] leading-none ${item.note ? "text-text-4" : "text-text-2"}`}>
                      {item.name}
                      {item.note && (
                        <span
                          className="ml-1.5 text-[10px] text-text-4 italic"
                          style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
                        >
                          learning
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
