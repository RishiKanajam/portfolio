// ─── Site-wide content ────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Rishi Kanajam",
  initials: "RK",
  headline: "I build AI systems that know what they don't know.",
  oneLiner:
    "Retrieval pipelines, LLM benchmarks, and health-data infrastructure: each one shipped with the evaluation harness, escalation path, or audit trail that tells you when it's wrong.",
  email: "kanajamrishi@gmail.com",
  linkedIn: "https://www.linkedin.com/in/rishi-madhur-kanajam",
  github: "https://github.com/RishiKanajam",
  githubOrg: "https://github.com/NirvyaLabs",
  mailtoHref:
    "mailto:kanajamrishi@gmail.com?subject=Re%3A%20AI%20Engineering%20opportunity&body=Hi%20Rishi%2C%0A%0A",
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  locationPill: "Sydney, Australia · Full Australian work rights through Sept 2028",
  resumeHref: "/resume.pdf",
};

// ─── About (editorial, three movements) ─────────────────────────────────────
// Bold spans marked with **double asterisks** are parsed by the About component.

export interface AboutMovement {
  label: string;
  paragraphs: string[];
}

export const about = {
  movements: [
    {
      label: "The through-line",
      paragraphs: [
        "Every system I've built has the same signature: it tells you how much to trust it. **I build AI systems that know what they don't know.**",
      ],
    },
    {
      label: "What that looks like",
      paragraphs: [
        "**PDF-Rag** ships with an LLM-as-judge harness that scores its own faithfulness. **ChronoLens** labels every claim fact, context, hypothesis, or needs-review. **PathFinder** hardcodes crisis phone numbers into static HTML so they outlive a backend outage. **Pinch Recovery** attaches a human-readable reasoning string to every decision it makes about someone's money. **Krama Core** runs a compliance check that returns blockers before health data moves. **DeceptionArena** labels each game engine by simulation fidelity so no claim outruns what's actually implemented.",
        "None of that is the interesting part of building a model. It's the part that decides whether anyone can use it.",
      ],
    },
    {
      label: "Day-to-day",
      paragraphs: [
        "I'm from Andhra Pradesh (Telugu), with family in villages where the nearest hospital is 60 kilometres away. When my grandmother needed care, our records travelled on paper. That's why I maintain **Krama Core**, an open-source FHIR and compliance SDK for India's ABDM health network, published under **Nirvya Labs**.",
        "I tutor Data Structures & Algorithms to 50+ students a semester at the University of Sydney. Before that: the Data team at St Vincent de Paul Society NSW, and a real-time computer-vision pipeline for autonomous maritime craft at Ocius.",
        "If you're building AI systems, developer tooling, or health infrastructure, I'd like to talk.",
      ],
    },
  ] as AboutMovement[],
  sidebar: [
    "BASED · SYDNEY, AU · ROOTS · ANDHRA PRADESH, IN",
    "RIGHTS · SUBCLASS 485 · FULL WORK RIGHTS TO SEP 2028",
    "EDU · M.IT (DATA ANALYTICS) · UNIVERSITY OF SYDNEY",
    "EDU · B.TECH (HONS) CSE · GMR INSTITUTE OF TECHNOLOGY",
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
    role: "Engineer & Maintainer, Krama Core (open source)",
    tagline: "Open-source healthcare integration tooling",
    brand: "portfolio",
    what: "Nirvya Labs is the org the work is published under. Krama Core is its first release: a Python SDK for FHIR R4, consent and data-exchange flows, encryption, and country-aware compliance, starting with India's ABDM network and architected so the same call site works elsewhere.",
    points: [
      "Layered on purpose: clinical domains define what care is documented, country adapters define how it's identified and protected, compliance policies define what must be checked before data moves. India's ABDM adapter is the one wired for live exchange; Australia, the UK and the US carry identifier and formulary metadata only.",
      "Apache 2.0 licensed, published to PyPI, CI across Python 3.10–3.12 with pytest, ruff, bandit and pip-audit. Contributions welcome.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/NirvyaLabs/krama-core" },
      { label: "Krama Core · PyPI", href: "https://pypi.org/project/krama-core/" },
    ],
  },
  {
    name: "OldTalkies",
    role: "Solo Founder, side project",
    tagline: "A Timeless Space",
    brand: "oldtalkies",
    status: "In build",
    what: "A platform for Telugu cinema, built nights and weekends: editorial content, a verified marketplace of industry professionals (DOPs, music directors, editors, lyricists), craft tools, and community.",
    points: [
      "Anti-toxicity by design: no star comparisons, no box-office tracking, film-centric organisation, AI moderation on community surfaces.",
      "Not launched.",
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
    role: "Engineer & Maintainer, Krama Core",
    company: "Nirvya Labs",
    period: "Apr 2026 – Present",
    current: true,
    bullets: [
      "Python SDK for India's ABDM health network: ABHA identity, HIP/HIU consent and data-exchange flows, FHIR R4 bundle builders, clinical templates across 12 domains.",
      "Security and resilience layer (ECDH X25519 + AES-GCM, retries, circuit breakers) and a compliance engine with India, Australia, US and UK rule packs.",
      "v1.0.0-alpha.3 on PyPI, Apache 2.0, 128 tests, CI on Python 3.10–3.12 (pytest, ruff, bandit, pip-audit)."
    ],
  },
  {
    role: "Academic Tutor, Data Structures & Algorithms (COMP2123/COMP9123)",
    company: "University of Sydney",
    period: "Jan 2024 – Present",
    current: true,
    bullets: [
      "Teach COMP2123/COMP9123 tutorials and labs (trees, priority queues, graph traversals, dynamic programming, complexity analysis) to 50+ students per semester.",
      "Grade assignments with detailed written feedback; improve lab materials and test cases.",
      "Built DSA_Learning_Web, an interactive React platform for visualising data structures step by step."
    ],
  },
  {
    role: "Systems Engineer – Data Team (Part-time)",
    company: "St Vincent de Paul Society NSW",
    period: "Apr 2025 – Mar 2026",
    current: false,
    bullets: [
      "Built Python scripts to automate data extraction and cleansing, reducing manual effort in ETL processes.",
      "Supported data integration workflows across SAP, Workday and Azure data services, keeping data consistent across source systems.",
      "Troubleshot pipeline issues, validated outputs, and documented data flows and transformation logic."
    ],
  },
  {
    role: "Computer Vision Engineer (University Capstone)",
    company: "Ocius Technology",
    period: "Aug 2024 – Dec 2024",
    current: false,
    bullets: [
      "Worked with Ocius on a real-time YOLOv8 maritime object-detection pipeline for its autonomous Bluebottle vessels, in a four-person team.",
      "Owned model optimisation: INT8 quantisation, pruning, TensorRT, inference batching and profiling; delivered the optimised model behind a team-wide ~9× throughput gain on NVIDIA Jetson.",
      "Containerised the pipeline with Docker."
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "HRVITE Services Pvt Ltd",
    period: "Mar 2023 – Jul 2023",
    current: false,
    bullets: [
      "Re-engineered Angular UI components and interaction flows for an HR SaaS platform, contributing to a ~15% increase in user retention.",
      "Built backend REST APIs for the platform and the data-driven frontend components that consumed them, with state management for nested HR datasets.",
      "Wrote unit tests and took part in code reviews."
    ],
  },
  {
    role: "Software Engineer (Trainee)",
    company: "Revidd",
    period: "Jun 2022 – Jan 2023",
    current: false,
    bullets: [
      "Moved from a two-month traineeship into full engineering responsibilities at an early-stage startup, working largely independently.",
      "Built the frontend for a new platform, maintained WordPress sites, and worked on CI/CD pipelines for a microservices architecture."
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectTag =
  | "AI/ML" | "Full Stack" | "Research" | "Open Source"
  | "Hackathon" | "Healthcare" | "Side";
export type ProjectStatus = "in-progress" | "shipped" | "concept";

export interface Project {
  slug: string;
  summary?: string;
  aboutLine?: string;
  title: string;
  shortTitle: string;
  /** Original prose retained for detail pages. */
  description: string;
  /** Case-study fields: only set on the four lead projects. */
  problem?: string;
  built?: string;
  decision?: { label: string; body: string };
  /** Honest caveat rendered inline. Use when the work could be read as claiming more than it does. */
  caveat?: string;
  /** Credit line, e.g. team size. */
  credit?: string;
  tech: string[];
  tags?: ProjectTag[];
  status?: ProjectStatus;
  caseStudy?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  /** Shown in place of a repo link when there is no public source. */
  repoNote?: string;
  award?: string;
}

export const projects: Project[] = [
  // ── Case studies ───────────────────────────────────────────────────────────
  {
    slug: "krama-core",
    aboutLine: "Open-source FHIR R4 and compliance SDK for India's ABDM health network. ABHA, consent flows, encryption, country rule packs.",
    title: "Krama Core",
    shortTitle: "Krama Core",
    description:
      "Open-source FHIR R4 and compliance SDK for India's ABDM health network. Published to PyPI, Apache 2.0 licensed.",
    problem:
      "A clinic in rural Andhra Pradesh wants to send a discharge summary to a hospital in the next district. Between them sits ABDM: ABHA identity, consent artefacts, encrypted exchange, and a gateway with strict async callback contracts. A two-person team can't build all of that before they build the thing they actually set out to build.",
    built:
      "A Python SDK covering the whole path: ABHA identity, HIP/HIU consent and data-exchange flows, FHIR R4 bundle builders, ECDH X25519 key exchange with AES-GCM encryption, gateway resilience through retries and circuit breakers, clinical templates across 12 medical domains, WhatsApp and AI-assisted clinical workflow helpers, and a compliance engine with rule packs for India, Australia, the US and the UK. India's ABDM adapter is the one that talks to a live network; the Australia, UK and US adapters expose identifier and formulary metadata and raise NotImplementedError on network calls. v1.0.0-alpha.3 on PyPI, Apache 2.0, 128 tests, CI on Python 3.10–3.12 with pytest, ruff, bandit and pip-audit.",
    decision: {
      label: "Compliance returns blockers, not warnings",
      body:
        "The compliance engine is a pre-flight check: purpose, lawful basis, encryption, residency, minimum-necessary sharing. Each failed check comes back as a blocker with a source URL, and the result only passes when the blocker list is empty. It would have been friendlier to emit warnings and let the caller proceed, but the failure mode you're designing against is an engineer shipping on a deadline, and a warning is something you ship past. Country rules live in swappable policy packs, so the same call site is legal in India and refuses in Australia when it should be.",
    },
    tech: ["Python", "FHIR R4", "Pydantic", "Cryptography", "GitHub Actions", "PyPI"],
    tags: ["Open Source", "Healthcare"],
    status: "shipped",
    caseStudy: true,
    githubUrl: "https://github.com/NirvyaLabs/krama-core",
    liveUrl: "https://pypi.org/project/krama-core/",
    liveLabel: "PyPI",
  },
  {
    slug: "deceptionarena",
    summary: "Cross-game LLM deception benchmark: five social deduction games behind one engine interface, with structured decision traces. What exists is benchmark infrastructure, not findings.",
    title: "DeceptionArena",
    shortTitle: "DeceptionArena",
    description:
      "Cross-game LLM deception benchmark: five social deduction games behind one engine interface, with structured decision traces.",
    problem:
      "If a model is persuasive under incomplete information, you want to know that before you put it somewhere consequential. Most evaluations ask a model to answer honestly. Almost none put it in a game where deceiving another player is the winning move and then measure what it does.",
    built:
      "Skull, Coup, The Resistance, One Night Ultimate Werewolf and Secret Hitler implemented as pure state machines behind a single interface; 1000/1000 randomised stress tests, 200 seeded games per engine. On top of that: Deception ELO ratings, a 10-axis capability taxonomy, an aiohttp WebSocket server, SQLite run persistence, and a four-screen React dashboard for run setup, live monitoring, analytics, and replay. 15 models across 5 providers are wired in.",
    decision: {
      label: "Score the public rationale, not the chain-of-thought",
      body:
        "Every model turn writes a structured decision trace: stated rationale, confidence, suspected deceivers, tactic, risk assessment, latency, provider. The dashboard deliberately surfaces the public rationale and not hidden reasoning. A deception benchmark that scores a model on its private thoughts is measuring the wrong object: deception is made of what the other players can observe. Each engine also carries a simulation-fidelity label, so a number never implies more game than the engine actually implements.",
    },
    caveat:
      "Real-API runs so far are small: one game per level, two models. The larger multi-model run was an offline deterministic stand-in, and the exports say so. What exists is benchmark infrastructure, not findings.",
    tech: ["Python", "asyncio", "aiohttp", "SQLite", "React", "OpenAI", "Anthropic", "Groq", "OpenRouter"],
    tags: ["Research", "AI/ML"],
    status: "in-progress",
    caseStudy: true,
    repoNote: "Source not public yet",
  },
  {
    slug: "pathfinder",
    aboutLine: "AI triage and referral platform for a suicide-prevention network. Rule-based risk engine, 5-layer escalation. Idea Disruptor Award, NGM Group Hackathon.",
    title: "PathFinder",
    shortTitle: "PathFinder",
    description:
      "AI triage and referral platform for the Lake Macquarie & Newcastle Suicide Prevention Network. Built with a teammate at NGM Group's hackathon, May 2026.",
    problem:
      "Someone reaches out to a small suicide-prevention network at 11pm. The staff who could help are asleep, the intake form is a PDF, and whoever picks it up tomorrow has no way to tell whether this person needs a callback next week or a phone call right now.",
    built:
      "A 24/7 intake chatbot, a QR-based referral portal for frontline staff, and a dashboard that gave the organisation its first analytics. Rule-based risk scoring routes each referral to staff by the training level it requires, across 14 programs, backed by a five-layer escalation protocol and 35+ documented edge cases. FastAPI, Azure AI Language, React. LMNSPN's CEO has since met with us about taking it into production.",
    decision: {
      label: "Crisis numbers survive the backend",
      body:
        "Lifeline's number is hardcoded in static HTML. If the API is down, the model is rate-limited, or the deploy is broken, the page still shows a human being to call. Everything else in the system is best-effort; that one element is not permitted to depend on anything. The same instinct drove the risk engine: it's rules, not a model, because when it's wrong we need to be able to read why, and borderline cases escalate rather than resolve.",
    },
    credit: "Built with a teammate",
    tech: ["FastAPI", "Azure AI Language", "React", "Python"],
    tags: ["Hackathon", "AI/ML", "Full Stack"],
    status: "shipped",
    caseStudy: true,
    githubUrl: "https://github.com/RishiKanajam/PathFinder",
    award: "Idea Disruptor Award · NGM Group",
  },
  {
    slug: "chronolens",
    aboutLine: "Cultural research workspace where every AI claim is labelled fact, context, hypothesis or needs-review. Built solo at the OpenAI Codex Hackathon.",
    title: "ChronoLens",
    shortTitle: "ChronoLens",
    description:
      "Cultural research workspace that labels every AI claim by how far you should trust it. Built solo in about five hours at the OpenAI Codex Hackathon, Sydney.",
    problem:
      "A researcher asking about a 14th-century trade route gets back a fluent paragraph with no way to tell which sentence came out of an archive and which one the model inferred. The fluency is the problem: it makes an inference and a citation look identical.",
    built:
      "One query fans out to ten analysis surfaces and six live archive APIs, producing a knowledge graph, geographic transmission flows, image analysis with bounding boxes, and PDF/PowerPoint export. Next.js 14, TypeScript, GPT-4.1.",
    decision: {
      label: "Every claim carries its epistemic status",
      body:
        "Output is labelled fact, context, hypothesis, or needs-expert-review, and the label travels with the claim all the way into the exported deck. It makes the system look less confident than a plain summary would, which is the point: a researcher can act on a fact and go verify a hypothesis, but a paragraph that blends the two can't be checked at all.",
    },
    tech: ["Next.js 14", "TypeScript", "GPT-4.1", "Multi-API"],
    tags: ["AI/ML", "Full Stack", "Hackathon"],
    status: "shipped",
    caseStudy: true,
    githubUrl: "https://github.com/RishiKanajam/ChronoLens",
  },

  // ── Also built ─────────────────────────────────────────────────────────────
  {
    slug: "pdf-rag",
    aboutLine: "Hybrid RAG: BM25 + dense retrieval with RRF, cross-encoder re-ranking, and an LLM-as-judge evaluation harness.",
    title: "PDF-Rag",
    shortTitle: "PDF-Rag",
    description:
      "Hybrid retrieval done properly: BM25 and dense search merged with Reciprocal Rank Fusion, then cross-encoder re-ranking. Sentence-aware NLTK chunking, conversational memory, and an LLM-as-judge harness that scores faithfulness, relevancy and context quality.",
    tech: ["Python", "LangChain", "ChromaDB", "BM25", "Cross-Encoder", "Groq", "Streamlit"],
    tags: ["AI/ML"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/PDF-Rag",
  },
  {
    slug: "mangrag",
    aboutLine: "RAG service over PDFs: MongoDB Atlas Vector Search, local embeddings, Groq LLaMA 3.3, served via FastAPI, Streamlit and CLI.",
    title: "MangRAG",
    shortTitle: "MangRAG",
    description:
      "Production RAG service over your PDFs: MongoDB Atlas Vector Search, Groq (LLaMA 3.3), local HuggingFace embeddings, served three ways through FastAPI, Streamlit and a CLI. Dockerised, with pytest.",
    tech: ["Python", "FastAPI", "MongoDB Atlas", "HuggingFace", "Groq", "Streamlit", "Docker"],
    tags: ["AI/ML", "Full Stack"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/MangRAG",
    liveUrl: "https://mangrag.streamlit.app",
  },
  {
    slug: "pinch-recovery",
    aboutLine: "Failed-payment recovery engine for Pinch Payments: per-dishonour-code strategies, AU business-day scheduling, reasoned decisions.",
    title: "Pinch Recovery Engine",
    shortTitle: "Pinch Recovery",
    description:
      "Failed direct debits aren't all the same: insufficient funds is a timing problem, a cancelled authority is churn. Reads the dishonour code, picks a strategy per failure class, never retries a hard failure, never schedules a retry on a day the banks are shut, and attaches a human-readable reasoning string to every decision.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Alembic", "Jinja2", "Docker"],
    tags: ["Full Stack"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/pinch-recovery",
  },
  {
    slug: "medvault",
    aboutLine: "Multi-tenant clinical AI platform: Gemini decision support with physician review, IoT cold-chain, offline-first records.",
    title: "MedVault",
    shortTitle: "MedVault",
    description:
      "Multi-tenant clinical platform: Gemini Pro Vision multimodal decision support, IoT cold-chain monitoring, offline-first via IndexedDB, and tenant isolation enforced through Firebase custom claims and Firestore security rules rather than application code.",
    tech: ["Next.js 15", "TypeScript", "Firebase", "Gemini Pro Vision", "Cloud Run", "IndexedDB"],
    tags: ["AI/ML", "Full Stack", "Healthcare"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/MedVault",
    liveUrl: "https://medvault-596655096468.us-central1.run.app/",
  },
  {
    slug: "anomaly-detector",
    aboutLine: "Log anomaly detection with Isolation Forest, One-Class SVM and an ensemble vote; Flask UI, Dockerised.",
    title: "anomaly-detector",
    shortTitle: "Anomaly Detector",
    description:
      "Log AIOps: a Flask app that reads cloud log files and flags anomalies via Isolation Forest, One-Class SVM, and an ensemble vote across both.",
    tech: ["Python", "Flask", "scikit-learn", "Isolation Forest"],
    tags: ["AI/ML"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/anomaly-detector",
  },
  {
    slug: "dsa-learning-web",
    aboutLine: "Interactive platform for learning data structures: write code and watch the structure change step by step.",
    title: "DSA_Learning_Web",
    shortTitle: "DSA Learning",
    description:
      "Interactive platform for learning data structures: write code, watch the structure change step by step. Built out of two years of tutoring COMP2123, for the concepts students got stuck on most.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion", "Recharts"],
    tags: ["Full Stack", "Side"],
    status: "shipped",
    githubUrl: "https://github.com/RishiKanajam/DSA_Learning_Web",
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

export const certifications: Certification[] = [
  { title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", year: "Sep 2025" },
  { title: "McKinsey Forward Program", issuer: "McKinsey & Company", year: "Apr–Jun 2026 · completed" },
];

export const education: EducationItem[] = [
  {
    degree: "Master of IT & IT Management (Data Analytics & Management)",
    institution: "University of Sydney",
    period: "2023 – 2025",
    location: "Sydney, Australia",
  },
  {
    degree: "B.Tech (Honours) in Computer Science & Engineering",
    institution: "GMR Institute of Technology",
    period: "2019 – 2023",
    location: "India · Bioinformatics focus",
  },
];
