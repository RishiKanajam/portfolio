// ─── Site-wide content ────────────────────────────────────────────────────────
// Edit this file to update copy across the entire portfolio.
// Types are inlined so you get autocomplete without a separate types file.

export const siteConfig = {
  name: "Rishi Kanajam",
  initials: "RK",
  oneLiner:
    "Software & AI Engineer building healthcare AI and securing ML systems — from Sydney.",
  // TODO: replace with your real email before deploying
  email: "kanajamrishi@gmail.com",
  linkedIn: "https://linkedin.com/in/rishikanajam",
  github: "https://github.com/RishiKanajam",
  // Pre-filled mailto for recruiters — update subject/body as needed
  mailtoHref:
    "mailto:rishikanajam@gmail.com?subject=Re%3A%20Software%20Engineer%20opportunity&body=Hi%20Rishi%2C%0A%0A",
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  // Shown on its own line below the one-liner — make it unmissable for recruiters
  availabilityPill: "Available in Sydney · Full Australian work rights",
  // Link to /public/resume.pdf — opens in new tab
  resumeHref: "/resume.pdf",
  askMeAnchor: "#ask-me",
};

// ─── About ────────────────────────────────────────────────────────────────────

export const about = {
  paragraphs: [
    "I'm Rishi, Software and AI engineer based in Sydney, finishing my Master of IT & IT Management (Data Analytics) at the University of Sydney. My work sits at the intersection of machine learning, systems engineering, and security — I build things that ship, not just things that demo.",
    "Right now I'm going deep on AI security: adversarial ML, LLM red-teaming, and hardening production ML pipelines against real threats. Outside of that, I teach Data Structures & Algorithms at USyd and run OldTalkies, a Tenglish channel about Tech case studies.",
  ],
  tech: [
    "Python",
    "C++",
    "SQL",
    "JavaScript",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "FastAPI",
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
      "Mentored 50+ students per semester in COMP2123 / COMP9123, clarifying core DSA concepts and improving assessment pass rates through targeted lab sessions.",
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

// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  // TODO: replace image with a real screenshot path when available, e.g. "/screenshots/ocius.png"
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  // Link to a Medium/Substack case study about this project
  caseStudyUrl?: string;
  // Internal key used to pick the SVG placeholder — do not remove
  placeholderVariant: "ocius" | "mangrag" | "rna" | "llama" | "medvault";
}

export const projects: Project[] = [
  {
    title: "Ocius Technology — Maritime Computer Vision",
    description:
      "Real-time object detection pipeline for autonomous maritime surveillance. Optimised a YOLOv8 architecture to run at 394 FPS on edge hardware — fast enough for live decision-making aboard unmanned surface vehicles. Deployed in a production environment at Ocius Technology.",
    tech: ["Python", "YOLOv8", "PyTorch", "CUDA", "OpenCV", "Edge Deploy"],
    featured: true,
    placeholderVariant: "ocius",
    githubUrl: undefined, // private repo — omit or add when public
    caseStudyUrl: undefined, // TODO: add Medium/Substack link when published
  },
  {
    title: "MedVault",
    description:
      "Multi-tenant clinical AI platform built for healthcare in emerging markets. RxAI uses Google Gemini Pro Vision to analyse symptoms and medical images for medication suggestions. Includes IoT cold-chain monitoring (temperature, humidity, pressure), offline-first workflows via IndexedDB, and a drug intelligence hub with real-time lookup and clinical trial integration.",
    tech: ["Next.js 15", "TypeScript", "Firebase", "Gemini Pro Vision", "Python Flask", "Google Cloud Run", "Tailwind CSS", "IndexedDB"],
    featured: false,
    placeholderVariant: "medvault",
    githubUrl: "https://github.com/RishiKanajam/MedVault",
    liveUrl: undefined, // TODO: add live URL when deployed
    caseStudyUrl: undefined,
  },
  {
    title: "MangRAG",
    description:
      "End-to-end retrieval-augmented generation system for document intelligence. Handles document ingestion, vector indexing, semantic retrieval, and grounded LLM responses with per-source attribution — so answers are always traceable back to the source material.",
    tech: ["Python", "FastAPI", "LangChain", "PostgreSQL", "pgvector", "OpenAI"],
    featured: false,
    placeholderVariant: "mangrag",
    githubUrl: "https://github.com/RishiKanajam/MangRAG",
    caseStudyUrl: undefined,
  },
  {
    title: "Stanford RNA 3D Folding",
    description:
      "Kaggle competition entry predicting RNA tertiary structures using a hybrid TBM + RibonanzaNet + MDS pipeline. A sentinel-fix on the validation set lifted TM-score from 0.60 to 0.984 — demonstrating that careful data handling often outperforms model changes.",
    tech: ["Python", "PyTorch", "RibonanzaNet", "NumPy", "SciPy", "Kaggle"],
    featured: false,
    placeholderVariant: "rna",
    githubUrl: "https://github.com/RishiKanajam/stanford-rna-folding",
    caseStudyUrl: undefined,
  },
  {
    title: "Llama-3 Latent Space Research",
    description:
      "Exploratory research into representation analysis and latent space geometry in Llama-3 models. Investigates how concepts are encoded across layers and what internal structure emerges during fine-tuning — foundational work for interpretability and red-teaming.",
    tech: ["Python", "PyTorch", "Transformers", "Llama-3", "t-SNE", "UMAP"],
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
  { title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { title: "McKinsey Forward Program", issuer: "McKinsey & Company", year: "2023" },
];

export const publications: Publication[] = [
  {
    title:
      "COVID-19 Audio Detection & Spondylitis Detection from Cervical Spine Imaging",
    venue: "IJRPR Vol. 4, Issue 3",
    year: "2023",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact = {
  pitch:
    "I'm open to Software Engineer, AI/ML Engineer, and Data Engineer roles — especially in healthcare AI and security. If you're building something that matters, let's talk.",
};
