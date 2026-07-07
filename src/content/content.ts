// ─── Site-wide content ────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Rishi Kanajam",
  initials: "RK",
  headline: "Founder · AI & Data Engineer.",
  oneLiner:
    "Building open-source healthcare infrastructure for India's last mile — from Sydney.",
  email: "kanajamrishi@gmail.com",
  linkedIn: "https://linkedin.com/in/rishi-madhur-kanajam",
  github: "https://github.com/RishiKanajam",
  githubOrg: "https://github.com/NirvyaLabs",
  mailtoHref:
    "mailto:kanajamrishi@gmail.com?subject=Re%3A%20AI%20Engineering%20opportunity&body=Hi%20Rishi%2C%0A%0A",
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

// ─── About (editorial — three movements) ─────────────────────────────────────
// Bold spans marked with **double asterisks** are parsed by the About component.

export interface AboutMovement {
  label: string;
  paragraphs: string[];
}

export const about = {
  movements: [
    {
      label: "Origin",
      paragraphs: [
        "I'm from Andhra Pradesh — Telugu, with family roots in villages where the nearest hospital is 60 kilometres away. When my grandmother needed care, our family carried her records on paper. That memory is why **Nirvya Labs** exists.",
      ],
    },
    {
      label: "What I'm building",
      paragraphs: [
        "I'm the Founder of **Nirvya Labs**, a healthcare-access infrastructure company. Our first product line, **Krama**, is Python-first open-source tooling for India's Ayushman Bharat Digital Mission (ABDM) — the compliance and FHIR layer that gets the last mile online. **Krama Core v0.1.0** is live on PyPI. Beyond healthcare, I'm building a second product line around deep-science research tools (archaeology, oceanography, carbon dating), starting with **ChronoLens**.",
        "I'm also the solo founder of **OldTalkies**, a platform for Telugu cinema — editorial content in the spirit of Variety and Bloomberg, a verified marketplace of industry professionals (DOPs, music directors, editors, lyricists), AI craft tools, and community — deliberately architected to be free of the fan-war toxicity that defines most cinema discourse. Public launch: mid-to-late September 2026.",
      ],
    },
    {
      label: "Day-to-day",
      paragraphs: [
        "I engineer AI systems and healthcare data pipelines. I tutor Data Structures & Algorithms to 50+ students per semester at the University of Sydney. I've worked on the Data team at St Vincent de Paul Society NSW. And I ship — **DeceptionArena**, **PathFinder** (NGM “Most Disruptive” winner), **CareBridge**, a Kaggle RNA folding pipeline that hit 0.984 TM-score, an autonomous-maritime CV pipeline at Ocius.",
        "If you're building healthtech, agentic AI, or infrastructure — I'd like to talk.",
      ],
    },
  ] as AboutMovement[],
  sidebar: [
    "BASED · SYDNEY, AU · ROOTS · ANDHRA PRADESH, IN",
    "EDU · M.IT (DATA ANALYTICS) · UNIVERSITY OF SYDNEY",
    "EDU · B.TECH (HONS) CSE · GMR INSTITUTE OF TECHNOLOGY",
    "RIGHTS · SUBCLASS 485 · FULL WORK RIGHTS TO SEP 2028",
  ],
};

// ─── Companies ────────────────────────────────────────────────────────────────

export interface CompanyLink {
  label: string;
  href: string;
}

export interface Company {
  name: string;
  role: string;
  tagline: string;
  brand: "portfolio" | "oldtalkies";
  status?: string;
  what: string;
  productLines?: { name: string; description: string }[];
  points?: string[];
  why?: string;
  links: CompanyLink[];
}

export const companies: Company[] = [
  {
    name: "Nirvya Labs",
    role: "Founder",
    tagline: "Healthcare-access infrastructure for India's last mile",
    brand: "portfolio",
    what: "A parent company building open-source developer tools and end-user products around India's ABDM (Ayushman Bharat Digital Mission) healthcare rails, plus a second product line for deep-science research.",
    productLines: [
      {
        name: "Krama",
        description:
          "The healthcare arm. Krama Core (open-source FHIR toolkit, live) → Krama Link (cross-facility record transfer) → PHC pilot with the Andhra Pradesh government → clinical AI on the Krama data rails.",
      },
      {
        name: "Deep-science line",
        description:
          "Advanced research tools starting with ChronoLens (cultural heritage), with planned expansion into oceanography, marine biology, carbon dating, and landscape science.",
      },
    ],
    why: "Owning the compliance and data-transformation layer is a defensible moat. Once the rails exist, everything on top — federated learning, clinical AI, patient identity — becomes possible.",
    links: [
      { label: "GitHub", href: "https://github.com/NirvyaLabs" },
      { label: "Krama Core · PyPI", href: "https://pypi.org/project/krama-core/" },
    ],
  },
  {
    name: "OldTalkies",
    role: "Solo Founder",
    tagline: "A Timeless Space",
    brand: "oldtalkies",
    status: "Launching September 2026",
    what: "A platform for Telugu cinema. Four surfaces on one product: editorial content with Variety / Bloomberg energy, a verified marketplace of industry professionals (DOPs, music directors, editors, lyricists), AI craft tools, and community features.",
    points: [
      "English-primary editorial voice with strategic Tenglish (Telugu + English) accents. Cinema for people who care about craft, not scoreboards.",
      "Anti-toxicity by design: no star comparisons, no box-office tracking, film-centric organisation, AI moderation on community surfaces.",
      "Roadmap: public launch mid-to-late September 2026, with planned expansion into Tamil, Malayalam, and Kannada cinema after the Telugu vertical stabilises.",
    ],
    links: [],
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
      "Building Krama — open-source Python tooling for India's ABDM healthcare rails.",
      "Published Krama Core v0.1.0 to PyPI (`pip install krama-core`). Three FHIR R4 bundle generators (OP Consult, Prescription, Discharge Summary). 21 tests, CI/CD across Python 3.10–3.12, MIT licensed.",
      "Roadmap: Krama Link (hospital cross-facility record transfer) → Andhra Pradesh PHC pilot → clinical AI on the Krama data rails.",
    ],
    tech: ["Python", "FastAPI", "FHIR R4", "Pydantic", "PostgreSQL", "AWS"],
  },
  {
    role: "Academic Tutor — Data Structures & Algorithms",
    company: "University of Sydney",
    period: "Jan 2024 – Nov 2026",
    current: true,
    bullets: [
      "Teach COMP2123 / COMP9123 tutorials — binary trees, priority queues, graph traversals, dynamic programming, complexity analysis — to 50+ students per semester across undergraduate and postgraduate cohorts.",
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
      "Built Python scripts to automate routine data extraction and cleansing, reducing manual effort in the team's ETL processes.",
      "Assisted with data integration workflows across SAP, Workday, and Azure data services, ensuring data consistency across source systems.",
      "Supported the data team in troubleshooting pipeline issues, validating outputs, and documenting data flows and transformation logic.",
    ],
    tech: ["Python", "SQL", "Azure", "SAP", "Workday"],
  },
  {
    role: "Computer Vision Engineer",
    company: "Ocius Technology",
    period: "Aug 2024 – Nov 2024",
    bullets: [
      "Industry capstone in a team of 4 — delivered a real-time maritime object detection pipeline for autonomous unmanned surface vehicles.",
      "Led the model-optimisation workstream: INT8 quantisation, TensorRT, and inference batching. Team-wide effort achieved a 9× throughput gain on NVIDIA Jetson edge hardware.",
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

export type ProjectTag =
  | "AI/ML" | "Full Stack" | "Research" | "Open Source"
  | "Hackathon" | "Healthcare" | "Side";
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
      "Cross-game LLM deception benchmark spanning five social deduction games: Skull, Coup, The Resistance, One Night Ultimate Werewolf, Secret Hitler. Sole author.",
    longDescription:
      "All five engines built and stress-tested — 998/998 tests passing. Full evaluation pipeline (1,000 games in ~3 seconds). Publication-quality figures (radar, win-rate bars, ELO progression, bluff analysis). Complete LaTeX paper draft. Target: arXiv preprint → NeurIPS 2026 workshop.",
    tech: ["Python", "asyncio", "OpenAI API", "Anthropic API", "DeepSeek", "Llama", "matplotlib", "LaTeX"],
    tags: ["Research", "AI/ML"],
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
      "The Python-first, developer-obsessed open-source toolkit for building on India's ABDM. Generates ABDM-compliant FHIR R4 clinical document bundles. The first public product from Nirvya Labs.",
    longDescription:
      "v0.1.0 live on PyPI as krama-core. Zero runtime dependencies beyond Pydantic. 21-test suite. CI/CD across Python 3.10/3.11/3.12 with bandit + pip-audit. MIT licensed.",
    tech: ["Python", "Pydantic", "FHIR R4", "GitHub Actions"],
    tags: ["Open Source", "Healthcare"],
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
      "Cultural Evidence OS built at OpenAI Codex Hackathon Sydney 2026 (UTS Startups). Multi-agent AI that classifies every claim as Fact / Hypothesis / Possible Connection / Needs Expert Review.",
    longDescription:
      "Real-archive integrations: OpenAlex, Library of Congress, Met Museum, MusicBrainz. Knowledge-connections graph, geographic cultural-transmission flows, and image analysis with region selection. The first release from the Nirvya Labs deep-science line.",
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
      "Triage and routing system for LMNSPN, a mental-health network. 24/7 intake chatbot, QR-based referral portal, and an admin dashboard with the org's first-ever analytics.",
    longDescription:
      "3-tier risk classification with a 5-layer escalation cascade. Built at the NGM Hackathon after directly interviewing LMNSPN staff.",
    tech: ["React", "FastAPI", "Azure AI Services", "Azure Speech", "Azure OpenAI"],
    tags: ["Hackathon", "AI/ML", "Full Stack"],
    status: "shipped",
    award: "Most Disruptive · NGM Hackathon",
  },
  {
    number: "05",
    title: "CareBridge — Multi-Agent Healthcare AI",
    shortTitle: "CareBridge",
    description:
      "Care-transition system with six parallel agents processing hospital discharge summaries to catch medication errors before they reach patients.",
    longDescription:
      "Six agents: Clinical Extractor, Risk Stratifier, Care Plan Writer, Clinic Scheduler, Privacy Guardian, Reconciliation Orchestrator.",
    tech: ["OpenAI Agents SDK", "FHIR R4", "FastAPI", "React", "Vercel"],
    tags: ["AI/ML", "Full Stack", "Healthcare"],
    status: "shipped",
  },
  {
    number: "06",
    title: "Stanford RNA 3D Folding",
    shortTitle: "RNA Folding",
    description:
      "Kaggle competition: validation TM-Score 0.984 using template-based modelling + RibonanzaNet + classical MDS + GPU spring refinement.",
    longDescription:
      "Key debugging insight: a sentinel value -1e18 masquerading as valid coordinates was poisoning training. Fixing it lifted TM-Score from 0.60 → 0.984.",
    tech: ["PyTorch", "RibonanzaNet", "NumPy", "SciPy", "CUDA"],
    tags: ["AI/ML", "Research"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/stanford-rna-folding",
  },
  {
    number: "07",
    title: "MedVault — Multi-Tenant Clinical AI",
    shortTitle: "MedVault",
    description:
      "Multi-tenant clinical AI platform for healthcare in emerging markets. RxAI for symptom + medical-image analysis, IoT cold-chain monitoring, offline-first via IndexedDB, drug intelligence hub.",
    tech: ["Next.js 15", "TypeScript", "Firebase", "Gemini Pro Vision", "Python Flask", "Cloud Run", "IndexedDB"],
    tags: ["AI/ML", "Full Stack", "Healthcare"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/MedVault",
  },
  {
    number: "08",
    title: "Ocius Maritime CV Pipeline",
    shortTitle: "Ocius",
    description:
      "Real-time computer-vision pipeline on autonomous maritime craft (Bluebottle unmanned surface vehicles). Led the model-optimisation workstream — team-wide effort delivered a 9× throughput gain on edge hardware.",
    tech: ["Python", "YOLOv8", "PyTorch", "TensorRT", "Docker", "OpenCV"],
    tags: ["AI/ML"],
    status: "shipped",
  },
  {
    number: "09",
    title: "LLM Latent Space Manipulation",
    shortTitle: "LLM Steering",
    description:
      "Neuron-level interventions in Llama-3, probing attention-head representations to steer model outputs via internal activation steering.",
    longDescription:
      "Iterative work deriving MLP concept vectors and applying them as activation steering directions.",
    tech: ["PyTorch", "Hugging Face Transformers", "Jupyter"],
    tags: ["AI/ML", "Research"],
    status: "in-progress",
    githubUrl: "https://github.com/RishiKanajam/LLM_Steering",
  },
  {
    number: "10",
    title: "MangRAG — Document Intelligence RAG",
    shortTitle: "MangRAG",
    description:
      "Production-ready RAG pipeline: upload PDFs and ask questions in natural language, with per-source attribution for traceable answers, served through async FastAPI.",
    longDescription:
      "PDF ingestion → chunking → local embedding generation → MongoDB Atlas vector search → LLM response. HuggingFace embeddings, Groq (LLaMA 3.3), Streamlit front-end.",
    tech: ["Python", "FastAPI", "MongoDB Atlas", "HuggingFace", "Groq", "Streamlit"],
    tags: ["AI/ML", "Full Stack"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/MangRAG",
  },
  {
    number: "11",
    title: "PDF-RAG — Chat With Your Documents",
    shortTitle: "PDF-RAG",
    description:
      "Production-quality RAG system to chat with PDF and text documents — built from scratch with a learning-first approach, every module annotated with the concepts behind it.",
    longDescription:
      "Hybrid BM25 + semantic retrieval, cross-encoder reranking, conversational memory. Streamlit web interface and CLI.",
    tech: ["Python", "LangChain", "BM25", "Cross-Encoder", "Streamlit"],
    tags: ["AI/ML", "Full Stack"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/PDF-Rag",
  },
  {
    number: "12",
    title: "anomaly-detector — Log AIOps",
    shortTitle: "Anomaly Detector",
    description:
      "AI-powered log anomaly detection (AIOps). A Flask app that analyses cloud log files and flags anomalies via Isolation Forest, One-Class SVM, and an ensemble voting approach.",
    tech: ["Python", "Flask", "scikit-learn", "Isolation Forest"],
    tags: ["AI/ML"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/anomaly-detector",
  },
  {
    number: "13",
    title: "AgentDOM — Browser Agent Middleware",
    shortTitle: "AgentDOM",
    description:
      "Middleware on Playwright / Chrome DevTools Protocol that emits structured DOM representations instead of screenshots, enabling faster and cheaper browser-agent interactions.",
    longDescription:
      "Phase 2: the AMRW protocol paper proposing a formal spec for agent-friendly web interfaces — a robots.txt for agents. Scoped after DeceptionArena submission.",
    tech: ["Python", "Playwright", "Chrome DevTools Protocol"],
    tags: ["AI/ML", "Research"],
    status: "concept",
  },
  {
    number: "14",
    title: "Minto — Personal Finance",
    shortTitle: "Minto",
    description:
      "React Native + Expo personal-finance app. Hero feature: natural-language expense entry — \"Dinner 120 split 4 ways\" — parsed on-device.",
    tech: ["Expo SDK 55", "React Native", "Zustand", "SQLite", "NativeWind", "Victory Native"],
    tags: ["Full Stack", "Side"],
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
    items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "OpenAI Agents SDK", "Anthropic API", "RAG", "Fine-tuning"],
  },
  {
    label: "Healthcare Data",
    items: ["FHIR R4", "ABDM", "HL7"],
  },
  {
    label: "Web & Mobile",
    items: ["Next.js", "React", "React Native", "Expo", "FastAPI", "Node.js"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB Atlas", "Pandas", "NumPy", "Snowflake", "Airflow"],
    note: "Snowflake · Airflow — learning",
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "GitHub Actions", "Vercel", "CUDA", "TensorRT"],
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
    location: "India · Bioinformatics focus",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact = {
  pitch:
    "Open to Software Engineer, AI/ML Engineer, and Data Engineer roles — especially in healthcare AI and infrastructure. If you're building something that matters, let's talk.",
  socials: [
    { label: "Email", href: "mailto:kanajamrishi@gmail.com", value: "kanajamrishi@gmail.com" },
    { label: "GitHub", href: "https://github.com/RishiKanajam", value: "github.com/RishiKanajam" },
    { label: "Nirvya Labs", href: "https://github.com/NirvyaLabs", value: "github.com/NirvyaLabs" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rishi-madhur-kanajam", value: "linkedin.com/in/rishi-madhur-kanajam" },
  ],
};

// ─── AI chatbot system prompt ─────────────────────────────────────────────────

export const chatbotSystemPrompt = `You are an AI assistant on Rishi Kanajam's portfolio website. Answer questions about Rishi factually using the context below. If asked something you don't know, say so honestly. Keep answers concise (2-4 sentences).

ABOUT RISHI:
Rishi Kanajam is a Founder and AI & Data Engineer based in Sydney, Australia, with family roots in Andhra Pradesh, India. He has full Australian work rights (Subclass 485) until Sep 2028. He is open to AI Engineering, Software Engineering, and Data Engineering roles.

COMPANIES:
- Nirvya Labs (Founder): Healthcare-access infrastructure for India's last mile. Building Krama — Python-first open-source tooling for India's ABDM (Ayushman Bharat Digital Mission). Product ladder: Krama Core (live on PyPI) → Krama Link → Andhra Pradesh PHC pilot → clinical AI. Also a deep-science research line starting with ChronoLens.
- OldTalkies (Solo Founder): A platform for Telugu cinema — editorial, a verified marketplace of industry professionals, AI craft tools, and community. Anti-toxicity by design. Launching mid-to-late September 2026. Planned later expansion to Tamil/Malayalam/Kannada. It is a platform in build, NOT a YouTube channel and NOT launched yet.

CURRENT / RECENT WORK:
- Founder, Nirvya Labs (current): Published Krama Core v0.1.0 to PyPI (pip install krama-core), MIT licensed, 21 tests, CI/CD Python 3.10-3.12.
- Academic Tutor, University of Sydney (Jan 2024 – Nov 2026): COMP2123/COMP9123 (Data Structures & Algorithms), 50+ students/semester.
- Systems Engineer, St Vincent de Paul Society NSW (Apr 2025 – Apr 2026, ended): ETL pipelines across SAP, Workday, Azure.

KEY PROJECTS (14 total, more on GitHub):
- DeceptionArena: Cross-game LLM deception benchmark, 5 social deduction game engines, 998/998 stress tests passing, LaTeX paper draft complete, targeting arXiv/NeurIPS 2026. Sole author, in active development, not yet published.
- Krama Core: Open-source FHIR R4 bundle generator, live on PyPI.
- ChronoLens: Cultural Evidence OS, built at OpenAI Codex Hackathon Sydney 2026. Live at chrono-lens-six.vercel.app.
- PathFinder: Mental health triage system, won "Most Disruptive" at NGM Hackathon.
- CareBridge: Six-agent healthcare AI for care transitions.
- Stanford RNA Folding: Kaggle, TM-Score 0.984.
- MedVault: Multi-tenant clinical AI platform (standalone project, NOT a Nirvya Labs product).
- Ocius (team effort): Maritime CV pipeline, 9x throughput gain on edge hardware. Rishi led the model-optimisation workstream.
- LLM Steering, MangRAG, PDF-RAG, anomaly-detector, AgentDOM (concept), Minto (in progress).

TECH STACK:
Python, TypeScript, PyTorch, Hugging Face, LangChain, OpenAI Agents SDK, Anthropic API, RAG, FHIR R4, ABDM, Next.js, React, FastAPI, AWS, Azure, Docker.

EDUCATION:
- Master of IT (Data Analytics & Management), University of Sydney, 2023-2025
- B.Tech (Honours) Computer Science (Bioinformatics focus), GMR Institute of Technology, 2019-2023

CERTIFICATIONS: AWS Certified AI Practitioner (Sep 2025), McKinsey Forward Program (enrolled Apr-Jun 2026).

Do not fabricate details not listed above. Do not describe Ocius work as solo. Do not describe OldTalkies as launched or as a YouTube channel.`;
