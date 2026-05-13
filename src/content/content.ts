// ─── Site-wide content ────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Rishi Madhur Kanajam",
  initials: "RK",
  oneLiner:
    "Software & AI Engineer building healthcare AI and securing ML systems — from Sydney.",
  email: "rishikanajam@gmail.com",
  linkedIn: "https://linkedin.com/in/rishikanajam",
  github: "https://github.com/RishiKanajam",
  mailtoHref:
    "mailto:rishikanajam@gmail.com?subject=Re%3A%20Software%20Engineer%20opportunity&body=Hi%20Rishi%2C%0A%0A",
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  availabilityPill: "Available for work",
  workRights: "Full Australian work rights · Sydney",
  resumeHref: "/resume.pdf",
};

// ─── Stats bar ────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
  numericTarget: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const stats: Stat[] = [
  { value: "9×", label: "Throughput Gain on Edge Hardware", numericTarget: 9, suffix: "×" },
  { value: "0.984", label: "Kaggle RNA TM-Score", numericTarget: 0.984, decimals: 3 },
  { value: "50+", label: "Students Mentored per Semester", numericTarget: 50, suffix: "+" },
  { value: "5", label: "Production AI Systems Shipped", numericTarget: 5 },
];

// ─── About ────────────────────────────────────────────────────────────────────

export const about = {
  paragraphs: [
    "I'm Rishi, a Software and AI engineer based in Sydney. I graduated with a Master of IT & IT Management (Data Analytics) from the University of Sydney. My work sits at the intersection of machine learning, systems engineering, and security — I build things that ship, not just things that demo.",
    "Right now I'm going deep on AI security: adversarial ML, LLM red-teaming, and hardening production ML pipelines against real threats. I also teach Data Structures & Algorithms at USyd, contribute to open-source AI agent frameworks, and run OldTalkies — a Tenglish channel about tech case studies. On the side, I'm building healthcare AI infrastructure focused on bridging the Indian and Australian medical systems.",
  ],
};

// ─── Marquee tech skills ──────────────────────────────────────────────────────

export const marqueeRow1 = [
  "Python", "C++", "TypeScript", "SQL", "PyTorch", "TensorFlow", "LangChain", "FastAPI",
];

export const marqueeRow2 = [
  "React", "Next.js", "PostgreSQL", "MongoDB", "AWS", "GCP", "Docker", "Redis",
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
      "Building the Python-first open-source ABDM/FHIR R4 developer toolkit for India's unified health data network — targeting 770M+ connected citizens and 36,000+ hospitals under mandatory compliance.",
      "Designed async webhook handler with guaranteed 5-second callback reliability for ABDM certification, Pydantic models for all API types, and a local mock gateway eliminating sandbox geo-restrictions.",
      "Identified genuinely unoccupied competitive slot (Python-first, developer-obsessed) vs Medblocks, EHR.Network, and reference Java implementations; architecting 4-phase roadmap to Andhra Pradesh government pilot.",
    ],
    tech: ["Python", "FastAPI", "FHIR R4", "Pydantic", "PostgreSQL", "AWS"],
  },
  {
    role: "Academic Tutor — Data Structures & Algorithms",
    company: "University of Sydney",
    period: "Jan 2024 – present",
    current: true,
    bullets: [
      "Mentored 50+ students per semester in COMP2123/COMP9123, clarifying core DSA concepts and improving assessment pass rates through targeted lab sessions.",
      "Delivered debugging and problem-solving support in C++ and Python for complex assignments, reducing individual turnaround and rework by streamlining feedback workflows.",
      "Led improvements to lab support materials and grading aids, standardising examples and test cases to align tutorials with course learning outcomes.",
    ],
    tech: ["C++", "Python", "DSA"],
  },
  {
    role: "Computer Vision Engineer",
    company: "Ocius Technology",
    period: "Aug 2024 – Nov 2024",
    current: false,
    bullets: [
      "Industry capstone project in a team of 4, delivering a real-time maritime object detection pipeline for autonomous unmanned surface vehicles.",
      "Led model optimisation: INT8 quantisation, TensorRT, and inference batching — achieving a 9× throughput improvement to 394 FPS on NVIDIA Jetson hardware.",
      "Containerised the pipeline with Docker and deployed to edge hardware; full production deployment at Ocius Technology.",
    ],
    tech: ["Python", "YOLOv8", "TensorRT", "Docker", "CUDA"],
  },
  {
    role: "Frontend Developer Intern",
    company: "HRVITE Services Pvt Ltd",
    period: "Apr 2023 – Jul 2023",
    bullets: [
      "Re-engineered Angular UI components and interaction flows, improving usability and contributing to a measured ~15% increase in user retention.",
      "Integrated front-end with REST APIs and collaborated in a 6-member Agile team to scope and ship features to production.",
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
      "Implemented client-side performance optimisations and cross-browser fixes to improve page load and UX consistency.",
    ],
    tech: ["React", "JavaScript", "REST APIs"],
  },
];

// ─── Open Source ──────────────────────────────────────────────────────────────

export interface OpenSourceItem {
  project: string;
  description: string;
  link: string;
  contributions: string[];
}

export const openSource: OpenSourceItem[] = [
  {
    project: "Hive — YC-backed AI Agent Framework",
    description:
      "Contributing to agent orchestration internals and framework design.",
    link: "https://github.com/aden-hive/hive",
    contributions: [
      "Proposed and built a new Saavy tool integration for the framework, pending maintainer assignment to open PR.",
      "Identified and fixed a deprecated asyncio.get_event_loop pattern in the ConcurrentStorage module.",
      "Engaging with agent orchestration internals and framework design.",
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectTag = "AI/ML" | "Full Stack" | "Research";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  tags?: ProjectTag[];
  featured?: boolean;
  inProgress?: boolean;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  placeholderVariant: "ocius" | "mangrag" | "rna" | "llama" | "medvault" | "deceptiona" | "chronolens" | "pathfinder";
}

export const projects: Project[] = [
  {
    title: "MedVault — Multi-Tenant Clinical AI Platform",
    description:
      "Multi-tenant clinical AI platform for healthcare in emerging markets. RxAI uses Gemini Pro Vision for symptom + medical image analysis. IoT cold-chain monitoring, offline-first via IndexedDB, drug intelligence hub with clinical trial integration.",
    tech: ["Next.js 15", "TypeScript", "Firebase", "Gemini Pro Vision", "Python Flask", "Cloud Run", "Tailwind", "IndexedDB"],
    tags: ["AI/ML", "Full Stack"],
    featured: true,
    placeholderVariant: "medvault",
    githubUrl: "https://github.com/RishiKanajam/MedVault",
    caseStudyUrl: undefined,
  },
  {
    title: "Ocius Technology — Maritime Computer Vision",
    description:
      "Real-time object detection for autonomous maritime surveillance. Optimised YOLOv8 to 394 FPS on edge hardware (9× throughput via INT8 + TensorRT) for live decision-making aboard unmanned surface vehicles.",
    tech: ["Python", "YOLOv8", "PyTorch", "CUDA", "OpenCV", "Docker", "TensorRT"],
    tags: ["AI/ML"],
    featured: true,
    placeholderVariant: "ocius",
    githubUrl: undefined,
    caseStudyUrl: undefined,
  },
  {
    title: "ChronoLens — Cultural Evidence OS",
    description:
      "AI research platform where every claim about cultural heritage is classified by confidence level and linked to real sources. Evidence classification engine labels each AI-generated claim as Fact, Context, Hypothesis, or Needs Expert Review — no hallucination disguised as truth. Includes knowledge graph mapping, multi-archive search (OpenAlex, Library of Congress, Met Museum, MusicBrainz), geography mapping, architecture analysis, and study pack generation. Built solo in ~5 hours at OpenAI Codex Hackathon Sydney (April 2026, UTS Startups).",
    tech: ["Next.js 14", "TypeScript", "Tailwind", "OpenAI Codex", "Groq", "Google Gemini", "Three.js", "Vercel"],
    tags: ["AI/ML", "Full Stack"],
    featured: true,
    placeholderVariant: "chronolens",
    githubUrl: "https://github.com/RishiKanajam/ChronoLens",
    liveUrl: "https://chrono-lens-six.vercel.app",
    caseStudyUrl: undefined,
  },
  {
    title: "PathFinder — Mental Health Triage & Referral",
    description:
      "Voice + text intake system with real-time risk assessment for the Lake Macquarie & Newcastle Suicide Prevention Network — filling the 5pm–9am gap. Three interfaces: 24/7 client chatbot with Azure Speech real-time transcription and vocal tone extraction, a QR-code referral portal for informal referrers (bartenders, gaming centre staff, GPs), and an admin dashboard with the first-ever analytics for the organisation. 3-tier risk classification with 5-layer escalation cascade to CEO. Built at NGM Group Hackathon (May 2026, Newcastle) after directly interviewing LMNSPN staff.",
    tech: ["React 18", "Vite", "FastAPI", "Azure Speech", "Azure AI Language", "Azure OpenAI GPT-4o-mini", "SQLite", "Recharts"],
    tags: ["AI/ML", "Full Stack"],
    featured: true,
    placeholderVariant: "pathfinder",
    githubUrl: undefined,
    caseStudyUrl: undefined,
  },
  {
    title: "MangRAG — Document Intelligence RAG",
    description:
      "End-to-end RAG system with hybrid FAISS + BM25 retrieval, served through async FastAPI. Handles document ingestion, vector indexing, semantic retrieval, and grounded LLM responses with per-source attribution.",
    tech: ["Python", "FastAPI", "LangChain", "PostgreSQL", "pgvector"],
    tags: ["AI/ML", "Full Stack"],
    placeholderVariant: "mangrag",
    githubUrl: "https://github.com/RishiKanajam/MangRAG",
    caseStudyUrl: undefined,
  },
  {
    title: "Stanford RNA 3D Folding — Kaggle",
    description:
      "Kaggle competition entry predicting RNA tertiary structures using a hybrid TBM + RibonanzaNet + MDS pipeline. A sentinel-fix on the validation set lifted TM-score from 0.60 to 0.984.",
    tech: ["Python", "PyTorch", "RibonanzaNet", "NumPy", "SciPy"],
    tags: ["AI/ML", "Research"],
    placeholderVariant: "rna",
    githubUrl: "https://github.com/RishiKanajam/stanford-rna-folding",
    caseStudyUrl: undefined,
  },
  {
    title: "DeceptionArena — LLM Deception Benchmark",
    description:
      "Cross-game benchmark testing LLM deception across social deduction games. Coup engine complete with full deception tracking; multi-provider LLM agents, tournament ELO system. Additional game engines and React + Pixi.js visualizer in progress. Targeting arXiv publication.",
    tech: ["Python", "asyncio", "React", "Pixi.js", "OpenRouter", "OpenAI API", "Anthropic API"],
    tags: ["AI/ML", "Research"],
    inProgress: true,
    placeholderVariant: "deceptiona",
    githubUrl: "https://github.com/RishiKanajam/DeceptionArena",
    caseStudyUrl: undefined,
  },
  {
    title: "Llama-3 Latent Space Research",
    description:
      "Representation analysis and latent space geometry in Llama-3 models. Investigates concept encoding across layers — foundational work for interpretability and red-teaming.",
    tech: ["Python", "PyTorch", "Transformers", "Llama-3", "NumPy"],
    tags: ["AI/ML", "Research"],
    placeholderVariant: "llama",
    githubUrl: undefined,
    caseStudyUrl: undefined,
  },
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

export interface Publication {
  title: string;
  venue: string;
  year: string;
  url?: string;
}

export const certifications: Certification[] = [
  { title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", year: "Sep 2025" },
  { title: "McKinsey Forward Program", issuer: "McKinsey & Company", year: "Apr–Jun 2026 · enrolled" },
];

export const education: EducationItem[] = [
  {
    degree: "Master of IT & IT Management (Data Analytics)",
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

export const publications: Publication[] = [
  {
    title: "Measuring Deception in Large Language Models Across Social Deduction Games",
    venue: "In preparation — targeting arXiv",
    year: "2025",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact = {
  pitch:
    "I'm open to Software Engineer, AI/ML Engineer, and Data Engineer roles — especially in healthcare AI and security. If you're building something that matters, let's talk.",
};
