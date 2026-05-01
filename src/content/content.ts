// ─── Site-wide content ────────────────────────────────────────────────────────
// Edit this file to update copy across the entire portfolio.
// Types are inlined so you get autocomplete without a separate types file.

export const siteConfig = {
  name: "Rishi Madhur Kanajam",
  initials: "RK",
  oneLiner:
    "Software & AI Engineer building healthcare AI and securing ML systems — from Sydney.",
  email: "rishikanajam@gmail.com",
  linkedIn: "https://linkedin.com/in/rishikanajam",
  github: "https://github.com/RishiKanajam",
  // Pre-filled mailto for recruiters
  mailtoHref:
    "mailto:rishikanajam@gmail.com?subject=Re%3A%20Software%20Engineer%20opportunity&body=Hi%20Rishi%2C%0A%0A",
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  // Shown on its own line below the one-liner — make it unmissable for recruiters
  availabilityPill: "Available in Sydney · Full Australian work rights",
  // Opens PDF in new tab — recruiters prefer to preview before saving
  resumeHref: "/resume.pdf",
  askMeAnchor: "#ask-me",
};

// ─── About ────────────────────────────────────────────────────────────────────

export const about = {
  paragraphs: [
    "I'm Rishi, a Software and AI engineer based in Sydney. I graduated with a Master of IT & IT Management (Data Analytics) from the University of Sydney. My work sits at the intersection of machine learning, systems engineering, and security — I build things that ship, not just things that demo.",
    "Right now I'm going deep on AI security: adversarial ML, LLM red-teaming, and hardening production ML pipelines against real threats. I also teach Data Structures & Algorithms at USyd, contribute to open-source AI agent frameworks, and run OldTalkies — a Tenglish channel about tech case studies. On the side, I'm building healthcare AI infrastructure focused on bridging the Indian and Australian medical systems.",
  ],
  tech: [
    "Python",
    "C++",
    "SQL",
    "JavaScript",
    "TypeScript",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "FastAPI",
    "React",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "GCP",
    "Azure",
    "Docker",
  ],
};

// ─── Experience ───────────────────────────────────────────────────────────────

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
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

export interface Project {
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  inProgress?: boolean;
  // TODO: replace image with a real screenshot path when available, e.g. "/screenshots/ocius.png"
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  // Link to a Medium/Substack case study about this project
  caseStudyUrl?: string;
  // Internal key used to pick the SVG placeholder — do not remove
  placeholderVariant: "ocius" | "mangrag" | "rna" | "llama" | "medvault" | "deceptiona";
}

export const projects: Project[] = [
  {
    title: "MedVault — Multi-Tenant Clinical AI Platform",
    description:
      "Multi-tenant clinical AI platform built for healthcare in emerging markets. RxAI uses Google Gemini Pro Vision to analyse symptoms and medical images for medication suggestions. Includes IoT cold-chain monitoring (temperature, humidity, pressure), offline-first workflows via IndexedDB, and a drug intelligence hub with real-time lookup and clinical trial integration.",
    tech: ["Next.js 15", "TypeScript", "Firebase", "Gemini Pro Vision", "Python Flask", "Google Cloud Run", "Tailwind CSS", "IndexedDB"],
    featured: true,
    placeholderVariant: "medvault",
    githubUrl: "https://github.com/RishiKanajam/MedVault",
    liveUrl: undefined,
    caseStudyUrl: undefined,
  },
  {
    title: "Ocius Technology — Maritime Computer Vision",
    description:
      "Real-time object detection pipeline for autonomous maritime surveillance. Optimised a YOLOv8 architecture to run at 394 FPS on edge hardware — fast enough for live decision-making aboard unmanned surface vehicles. Deployed in a production environment at Ocius Technology.",
    tech: ["Python", "YOLOv8", "PyTorch", "CUDA", "OpenCV", "Edge Deploy"],
    featured: false,
    placeholderVariant: "ocius",
    githubUrl: undefined, // private repo
    caseStudyUrl: undefined,
  },
  {
    title: "MangRAG — Document Intelligence RAG System",
    description:
      "End-to-end retrieval-augmented generation system for document intelligence. Handles document ingestion, vector indexing, semantic retrieval, and grounded LLM responses with per-source attribution — so answers are always traceable back to the source material.",
    tech: ["Python", "FastAPI", "LangChain", "PostgreSQL", "pgvector"],
    featured: false,
    placeholderVariant: "mangrag",
    githubUrl: "https://github.com/RishiKanajam/MangRAG",
    caseStudyUrl: undefined,
  },
  {
    title: "Stanford RNA 3D Folding — Kaggle Competition",
    description:
      "Kaggle competition entry predicting RNA tertiary structures using a hybrid TBM + RibonanzaNet + MDS pipeline. A sentinel-fix on the validation set lifted TM-score from 0.60 to 0.984 — demonstrating that careful data handling often outperforms model changes.",
    tech: ["Python", "PyTorch", "RibonanzaNet", "NumPy", "SciPy"],
    featured: false,
    placeholderVariant: "rna",
    githubUrl: "https://github.com/RishiKanajam/stanford-rna-folding",
    caseStudyUrl: undefined,
  },
  {
    title: "DeceptionArena — LLM Deception Benchmark",
    description:
      "Cross-game benchmark measuring LLM deception capabilities across social deduction games (Coup + Secret Hitler). Multi-provider LLM agents via OpenRouter/OpenAI/Anthropic, with a React + Pixi.js 2D visualizer for spectating AI games. Includes human play mode, Deception ELO rating system, and tournament infrastructure. Solo-authored research project targeting arXiv publication.",
    tech: ["Python", "asyncio", "React", "Pixi.js", "OpenRouter", "OpenAI API", "Anthropic API"],
    featured: false,
    inProgress: true,
    placeholderVariant: "deceptiona",
    githubUrl: "https://github.com/RishiKanajam/DeceptionArena",
    caseStudyUrl: undefined,
  },
  {
    title: "Llama-3 Latent Space Research",
    description:
      "Exploratory research into representation analysis and latent space geometry in Llama-3 models. Investigates how concepts are encoded across layers and what internal structure emerges during fine-tuning — foundational work for interpretability and red-teaming.",
    tech: ["Python", "PyTorch", "Transformers", "Llama-3", "NumPy"],
    featured: false,
    placeholderVariant: "llama",
    githubUrl: undefined,
    caseStudyUrl: undefined,
  },
];

// ─── Publications & Certifications ────────────────────────────────────────────

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
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

export const publications: Publication[] = [
  {
    title: "Measuring Deception in Large Language Models Across Social Deduction Games",
    venue: "arXiv (in preparation)",
    year: "2026",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact = {
  pitch:
    "I'm open to Software Engineer, AI/ML Engineer, and Data Engineer roles — especially in healthcare AI and security. If you're building something that matters, let's talk.",
};
