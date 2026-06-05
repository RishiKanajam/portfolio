// ─── Site-wide content ────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Rishi Kanajam",
  initials: "RK",
  headline: "Founder · AI & Data Engineer.",
  oneLiner:
    "Building open-source healthcare infrastructure for India, from Sydney.",
  email: "rishikanajam@gmail.com",
  linkedIn: "https://linkedin.com/in/rishikanajam",
  github: "https://github.com/RishiKanajam",
  mailtoHref:
    "mailto:rishikanajam@gmail.com?subject=Re%3A%20AI%20Engineering%20opportunity&body=Hi%20Rishi%2C%0A%0A",
};

// ─── Status line (editable weekly) ───────────────────────────────────────────

export const statusLine =
  "Open to AI Engineering roles in Sydney · Krama Core live on PyPI · Last shipped: DeceptionArena paper draft (Jun 2026)";

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  locationPill: "Available in Sydney · Full work rights until Sep 2028",
  resumeHref: "/resume.pdf",
};

// ─── Stats bar ────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
  sublabel: string;
  numericTarget?: number;
  decimals?: number;
  suffix?: string;
  isText?: boolean;
}

export const stats: Stat[] = [
  {
    value: "Live on PyPI",
    label: "Krama Core",
    sublabel: "ABDM/FHIR R4 toolkit",
    isText: true,
  },
  {
    value: "998 / 998",
    label: "DeceptionArena",
    sublabel: "stress tests passing",
    isText: true,
  },
  {
    value: "0.984",
    label: "Kaggle TM-Score",
    sublabel: "Stanford RNA 3D Folding",
    numericTarget: 0.984,
    decimals: 3,
  },
  {
    value: "50+",
    label: "Students Mentored",
    sublabel: "per semester · USyd",
    numericTarget: 50,
    suffix: "+",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tech?: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Founder",
    company: "Nirvya Labs",
    period: "Apr 2026 – present",
    current: true,
    bullets: [
      "Building Krama, an open-source Python toolkit for India's ABDM (Ayushman Bharat Digital Mission) healthcare infrastructure.",
      "Published Krama Core v0.1.0 to PyPI (`pip install krama-core`) — three FHIR R4 bundle generators (OP Consult, Prescription, Discharge Summary), 21 passing tests, MIT licensed.",
      "Mission: last-mile healthcare access for rural and below-poverty-line communities.",
    ],
    tech: ["Python", "FastAPI", "FHIR R4", "Pydantic", "PostgreSQL", "AWS"],
  },
  {
    role: "Academic Tutor — Data Structures & Algorithms",
    company: "University of Sydney",
    period: "Jan 2024 – present",
    current: true,
    bullets: [
      "Teach COMP2123 tutorials — binary trees, priority queues, graph traversals, dynamic programming, complexity analysis — to cohorts of 25+ students per tutorial.",
      "Lead improvements to lab materials, grading aids, and test cases; designing better tooling with iterative testing and feedback loops.",
      "2+ years translating complex algorithmic concepts to varied audiences, mentoring on debugging and problem-solving in C++ and Python.",
    ],
    tech: ["C++", "Python", "DSA"],
  },
  {
    role: "Systems Engineer · Data Team",
    company: "St Vincent de Paul Society NSW",
    period: "Apr 2025 – Apr 2026",
    current: false,
    bullets: [
      "Built Python scripts to automate routine data extraction and cleansing tasks, reducing manual effort in the team's ETL processes.",
      "Assisted with data integration workflows between enterprise platforms, ensuring data consistency across source systems.",
      "Supported the data team in troubleshooting pipeline issues, validating data outputs, and documenting data flows and transformation logic.",
    ],
    tech: ["Python", "SQL", "Azure", "ETL"],
  },
  {
    role: "Computer Vision Engineer",
    company: "Ocius Technology",
    period: "Aug 2024 – Nov 2024",
    bullets: [
      "Industry capstone in a team of 4 — delivered a real-time maritime object detection pipeline for autonomous unmanned surface vehicles.",
      "Led the model optimisation workstream: INT8 quantisation, TensorRT, and inference batching. Team-wide effort achieved a 9× throughput gain on NVIDIA Jetson edge hardware.",
      "Containerised the pipeline with Docker and shipped to production at Ocius Technology.",
    ],
    tech: ["Python", "YOLOv8", "TensorRT", "Docker", "CUDA"],
  },
  {
    role: "Frontend Developer Intern",
    company: "HRVITE Services Pvt Ltd",
    period: "Apr 2023 – Jul 2023",
    bullets: [
      "Re-engineered Angular UI components and interaction flows, improving usability and contributing to a measured ~15% increase in user retention.",
      "Built data-driven UI components consuming REST APIs; implemented client-side data transformation and state management for complex nested HR datasets.",
      "Implemented front-end unit tests and participated in code reviews to reduce regressions and improve maintainability.",
    ],
    tech: ["Angular", "TypeScript", "REST APIs"],
  },
  {
    role: "Software Engineer Trainee",
    company: "Revidd",
    period: "Jul 2022 – Jan 2023",
    bullets: [
      "Built 15+ responsive interfaces with ReactJS integrated to REST APIs, contributing to a reported ~25% uplift in user engagement.",
      "Operated in Agile teams (stand-ups, sprint planning) and led peer code reviews to accelerate delivery and knowledge transfer.",
      "Contributed to backend data services and API development, handling data serialisation and transformation across system boundaries.",
    ],
    tech: ["React", "JavaScript", "REST APIs"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectTag = "AI/ML" | "Full Stack" | "Research" | "Open Source" | "Hackathon" | "Side";
export type ProjectStatus = "in-progress" | "shipped" | "concept";

export interface Project {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription?: string;
  tech: string[];
  tags?: ProjectTag[];
  status?: ProjectStatus;
  featured?: boolean;
  stickyScene?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  award?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "DeceptionArena",
    shortTitle: "DeceptionArena",
    description:
      "Cross-game LLM deception benchmark spanning five social deduction games: Skull, Coup, The Resistance, One Night Ultimate Werewolf, Secret Hitler.",
    longDescription:
      "All five game engines built and stress-tested — 998/998 tests passing. Full evaluation pipeline (1,000 games, ~3 seconds), publication-quality matplotlib figures (radar, win-rate bars, ELO progression, bluff analysis), LaTeX paper draft complete. Sole author. Targeting arXiv preprint → NeurIPS 2026 workshop.",
    tech: ["Python", "OpenAI API", "Anthropic API", "DeepSeek", "Llama", "matplotlib", "LaTeX"],
    tags: ["AI/ML", "Research"],
    status: "in-progress",
    featured: true,
    stickyScene: true,
    githubUrl: "https://github.com/RishiKanajam/DeceptionArena",
  },
  {
    number: "02",
    title: "Krama Core",
    shortTitle: "Krama Core",
    description:
      "Python toolkit for generating ABDM-compliant FHIR R4 clinical document bundles. Zero runtime dependencies beyond Pydantic.",
    longDescription:
      "v0.1.0 published to PyPI as krama-core. CI/CD on GitHub Actions (Python 3.10/3.11/3.12, bandit + pip-audit). 21-test suite. MIT licensed. Three FHIR R4 bundle generators: OP Consult, Prescription, Discharge Summary.",
    tech: ["Python", "Pydantic", "FHIR R4", "GitHub Actions"],
    tags: ["Open Source"],
    status: "shipped",
    featured: true,
    stickyScene: true,
    githubUrl: "https://github.com/NirvyaLabs/krama-core",
    liveUrl: "https://pypi.org/project/krama-core/",
  },
  {
    number: "03",
    title: "ChronoLens — Cultural Evidence OS",
    shortTitle: "ChronoLens",
    description:
      "Cultural Evidence OS built at OpenAI Codex Hackathon Sydney 2026. Multi-agent AI that classifies every cultural claim as Fact / Hypothesis / Possible Connection / Needs Expert Review.",
    longDescription:
      "Real-archive integrations: OpenAlex, Library of Congress, Met Museum, MusicBrainz. Built solo in ~5 hours at UTS Startups.",
    tech: ["Next.js", "TypeScript", "OpenAI Agents SDK", "multi-API"],
    tags: ["AI/ML", "Full Stack", "Hackathon"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/ChronoLens",
    liveUrl: "https://chrono-lens-six.vercel.app",
  },
  {
    number: "04",
    title: "PathFinder — Mental Health Triage",
    shortTitle: "PathFinder",
    description:
      "Triage and routing system built for LMNSPN at NGM Hackathon. 24/7 intake chatbot, QR-based referral portal, admin dashboard with first-ever analytics for the organisation.",
    longDescription:
      "3-tier risk classification with 5-layer escalation cascade to CEO. Built after directly interviewing LMNSPN staff.",
    tech: ["React", "FastAPI", "Azure Speech", "Azure AI Language", "Azure OpenAI"],
    tags: ["AI/ML", "Full Stack", "Hackathon"],
    status: "shipped",
    award: "Most Disruptive Award",
  },
  {
    number: "05",
    title: "CareBridge — Multi-Agent Healthcare AI",
    shortTitle: "CareBridge",
    description:
      "Multi-agent care transition system: six parallel agents processing hospital discharge summaries to catch medication errors before they reach patients.",
    longDescription:
      "Six agents: Clinical Extractor, Risk Stratifier, Care Plan Writer, Clinic Scheduler, Privacy Guardian, Reconciliation Orchestrator. Built on OpenAI Agents SDK.",
    tech: ["OpenAI Agents SDK", "FHIR R4", "FastAPI", "React", "Vercel"],
    tags: ["AI/ML", "Full Stack"],
    status: "shipped",
  },
  {
    number: "06",
    title: "Stanford RNA 3D Folding",
    shortTitle: "RNA Folding",
    description:
      "Kaggle competition: validation TM-Score 0.984 using template-based modelling + RibonanzaNet + classical MDS + GPU spring refinement.",
    longDescription:
      "Key debugging insight: a sentinel value -1e18 masquerading as valid coordinates was poisoning training. Fixing it lifted TM-score from 0.60 to 0.984.",
    tech: ["PyTorch", "RibonanzaNet", "NumPy", "SciPy", "CUDA"],
    tags: ["AI/ML", "Research"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/stanford-rna-folding",
  },
  {
    number: "07",
    title: "Minto — Personal Finance",
    shortTitle: "Minto",
    description:
      "React Native + Expo personal finance app. Hero feature: natural-language expense entry — \"Dinner 120 split 4 ways\" — parsed entirely on-device.",
    longDescription:
      "Targeting ship in Aug 2026.",
    tech: ["Expo SDK 55", "React Native", "Zustand", "SQLite", "NativeWind", "Victory Native"],
    tags: ["Full Stack", "Side"],
    status: "in-progress",
  },
  {
    number: "08",
    title: "AgentDOM — Browser Agent Middleware",
    shortTitle: "AgentDOM",
    description:
      "Middleware on Playwright / Chrome DevTools Protocol that emits structured DOM representations instead of screenshots — faster and cheaper browser-agent interactions.",
    longDescription:
      "Phase 2: AMRW protocol paper proposing a formal spec for agent-friendly web interfaces. Status: scoped after DeceptionArena submission.",
    tech: ["Python", "Playwright", "Chrome DevTools Protocol"],
    tags: ["AI/ML", "Research"],
    status: "concept",
  },
  {
    number: "09",
    title: "Ocius Maritime CV Pipeline",
    shortTitle: "Ocius",
    description:
      "Real-time computer-vision pipeline running on autonomous maritime craft. Led the model optimisation workstream — team-wide effort delivered a 9× throughput gain on edge hardware.",
    tech: ["Python", "YOLOv8", "PyTorch", "TensorRT", "Docker", "CUDA"],
    tags: ["AI/ML"],
    status: "shipped",
  },
  {
    number: "10",
    title: "OldTalkies — Content Brand",
    shortTitle: "OldTalkies",
    description:
      "Faceless Tenglish video-essay brand covering technology, finance, geopolitics, and entertainment through a Telugu / Indian lens. Inspired by ColdFusion and Wendover Productions.",
    tech: [],
    tags: ["Side"],
    status: "in-progress",
  },
];

// ─── Tech list (editorial grouped) ───────────────────────────────────────────

export interface TechGroup {
  label: string;
  items: string[];
  note?: string;
}

export const techGroups: TechGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C++"],
  },
  {
    label: "AI / ML",
    items: ["PyTorch", "TensorFlow", "LangChain", "OpenAI Agents SDK", "Anthropic API", "FHIR R4"],
  },
  {
    label: "Web & Mobile",
    items: ["Next.js", "React", "React Native", "Expo", "FastAPI", "Node.js"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Pandas", "Snowflake", "Airflow"],
    note: "Snowflake · Airflow — learning",
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "GitHub Actions", "Vercel"],
  },
];

// ─── Writing ──────────────────────────────────────────────────────────────────

export interface WritingPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
}

export const writing: WritingPost[] = [
  // Posts will be added here when ready
];

// ─── Education & Certifications ───────────────────────────────────────────────

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location?: string;
}

export const certifications: Certification[] = [
  { title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", year: "Sep 2025" },
  { title: "McKinsey Forward Program", issuer: "McKinsey & Company", year: "Apr–Jun 2026 · enrolled" },
];

export const education: EducationItem[] = [
  {
    degree: "Master of Information Technology (Data Analytics & Management)",
    institution: "University of Sydney",
    period: "2023 – 2025",
    location: "Sydney, Australia",
  },
  {
    degree: "B.Tech (Honours) — Computer Science & Engineering",
    institution: "GMR Institute of Technology",
    period: "2019 – 2023",
    location: "India",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact = {
  pitch:
    "Open to Software Engineer, AI/ML Engineer, and Data Engineer roles — especially in healthcare AI and security. If you're building something that matters, let's talk.",
  socials: [
    { label: "Email", href: "mailto:rishikanajam@gmail.com", value: "rishikanajam@gmail.com" },
    { label: "GitHub", href: "https://github.com/RishiKanajam", value: "github.com/RishiKanajam" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rishikanajam", value: "linkedin.com/in/rishikanajam" },
  ],
};

// ─── AI chatbot system prompt ─────────────────────────────────────────────────

export const chatbotSystemPrompt = `You are an AI assistant on Rishi Kanajam's portfolio website. Answer questions about Rishi factually using the context below. If asked something you don't know, say so honestly.

ABOUT RISHI:
Rishi Kanajam is a Founder and AI & Data Engineer based in Sydney, Australia. He has full Australian work rights until Sep 2028. He is open to AI Engineering, Software Engineering, and Data Engineering roles.

CURRENT WORK:
- Founder, Nirvya Labs: Building Krama, an open-source Python toolkit for ABDM/FHIR R4 healthcare infrastructure in India. Published Krama Core v0.1.0 to PyPI (pip install krama-core). MIT licensed.
- Systems Engineer (part-time), St Vincent de Paul Society NSW: ETL pipelines across SAP, Workday, and Azure.
- Academic Tutor, University of Sydney: Teaching COMP2123/COMP9123 (Data Structures & Algorithms), mentoring 50+ students/semester.

KEY PROJECTS:
- DeceptionArena: Cross-game LLM deception benchmark, 5 social deduction game engines, 998/998 stress tests passing, LaTeX paper draft complete, targeting arXiv/NeurIPS 2026. In active development, not yet published.
- Krama Core: Open-source FHIR R4 bundle generator, live on PyPI.
- ChronoLens: Cultural Evidence OS, built at OpenAI Codex Hackathon Sydney 2026. Live at chrono-lens-six.vercel.app.
- PathFinder: Mental health triage system, won Most Disruptive Award at NGM Hackathon (May 2026).
- CareBridge: Multi-agent healthcare AI for care transitions.
- Stanford RNA Folding: Kaggle, TM-Score 0.984.
- Ocius (team effort): Maritime CV pipeline, 9x throughput gain on edge hardware.

TECH STACK:
Python, TypeScript, PyTorch, LangChain, OpenAI Agents SDK, Anthropic API, FHIR R4, Next.js, React, FastAPI, AWS, Azure, Docker.

EDUCATION:
- Master of IT (Data Analytics & Management), University of Sydney, 2023-2025
- B.Tech (Honours) Computer Science, GMR Institute of Technology, 2019-2023

CERTIFICATIONS: AWS Certified AI Practitioner (Sep 2025), McKinsey Forward Program (enrolled Apr-Jun 2026).

Keep answers concise (2-4 sentences max). Do not fabricate details not listed above.`;
