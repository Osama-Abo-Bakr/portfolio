// Single source of truth for everything the site says.
// Facts here come from the résumé (resume.pdf) and the public GitHub profile.

export const identity = {
  name: "Osama Abo-Bakr",
  role: "AI Engineer & Solution Architect",
  location: "Cairo, Egypt",
  coordinates: "30.0444° N, 31.2357° E",
  currently: "ML Engineer at Thndr",
  email: "osamaoabobakr12@gmail.com",
  phone: "+20 127 401 1748",
  github: "https://github.com/Osama-Abo-Bakr",
  githubHandle: "Osama-Abo-Bakr",
  linkedin: "https://www.linkedin.com/in/osama-abo-bakr-293614259/",
  linkedinHandle: "osama-abo-bakr",
  resume: "/resume.pdf",
  site: "https://osama-abo-bakr.vercel.app",
}

export const deck =
  "I build AI systems that survive contact with production — document intelligence, retrieval pipelines, and multi-agent tooling."

export const lede: string[] = [
  "Most of what I know about machine learning came from the distance between a model that works in a notebook and one that answers five hundred people a day. That distance is where I work: document intelligence, retrieval pipelines, agent architectures, and the unglamorous plumbing that keeps them fast and correct.",
  "Right now that means Arabic OCR at Thndr — national IDs and passports, where one misread character is a failed verification. Before that, taking NexAI's support platform from an MVP to something five business teams run on every day.",
]

export const facts: { label: string; value: string; href?: string }[] = [
  { label: "Based in", value: "Cairo, Egypt" },
  {
    label: "Education",
    value:
      "B.Sc. Artificial Intelligence, Machine Intelligence major — Faculty of Artificial Intelligence, Menoufia University, 2022–2026",
  },
  { label: "Languages", value: "Arabic (native), English (conversational)" },
  { label: "Upwork", value: "Top Rated — 100% Job Success Score" },
  { label: "HackerRank", value: "Top 98th percentile Python developer in Egypt" },
  { label: "Kaggle", value: "Expert — competitions and published datasets" },
  { label: "Availability", value: "Open to select freelance and consulting work" },
]

export type Role = {
  org: string
  title: string
  period: string
  place: string
  notes: string[]
}

export const practice: Role[] = [
  {
    org: "Thndr",
    title: "ML Engineer",
    period: "Jan 2026 — Present",
    place: "Cairo, Egypt",
    notes: [
      "Rebuilt the eKYC OCR pipeline around YOLO field detection, a fine-tuned PaddleOCR v5, and rule-based post-processing — up to 22× better field accuracy and roughly 10× lower latency than the system it replaced.",
      "Fine-tuned PaddleOCR v5 on Arabic national ID data: P90 character error rate down to zero across every field, up to 99.6% field-level accuracy, 3–7 ms per field.",
      "Diagnosed a multi-line extraction failure and trained a dedicated detection model to separate the regions, cutting character error rate from 58% to 11%.",
      "Built the passport pipeline from scratch — detection, OCR, MRZ extraction, parsing — landing at 1.77% average character error rate over a 2,000-image test set.",
      "Designed an AI fundamental-analysis agent for automated financial insight, and shipped an on-device detection model for low-latency mobile inference.",
    ],
  },
  {
    org: "NexAI",
    title: "AI Engineer & Solution Architect",
    period: "2024 — Present",
    place: "Riyadh, Saudi Arabia — Remote",
    notes: [
      "Architected the core AI platform from MVP to production: multi-channel customer support across WhatsApp, Telegram, Instagram and Messenger, carrying 500+ conversations a day.",
      "Designed the microservice split for chat, knowledge base, analytics and ticketing — async processing and caching cut system response time by 40%.",
      "Built the agent and RAG pipelines on LangChain and Pinecone, taking 60% of the manual support workload off the team.",
      "Added voice-enabled chat with ElevenLabs TTS, extending the platform across 3+ languages.",
      "Shipped role-based authentication, analytics dashboards and knowledge-base tooling now used by 5+ business teams.",
    ],
  },
  {
    org: "Upwork",
    title: "Freelance AI Developer & ML Engineer",
    period: "2023 — Present",
    place: "Remote — global clients",
    notes: [
      "Delivered 10+ AI solutions for SaaS and e-commerce clients, earning Top Rated status, a 100% Job Success Score, and $15,000+ in revenue.",
      "Built chatbots with recommendation systems and multilingual support, lifting user engagement 35% for Arabic e-commerce platforms.",
      "Wrote LangChain and n8n automations that gave clients back 15+ hours a week of manual work.",
      "Built a visual search engine over large product catalogs using OpenCV and deep learning.",
    ],
  },
  {
    org: "Nexus Mundus Equity LLC",
    title: "Independent Contractor — AI Developer",
    period: "Dec 2024 — Feb 2025",
    place: "Remote",
    notes: [
      "Built chatbot features — order tracking, recommendations, FAQ, cart reminders — for an Arabic e-commerce platform, clearing every milestone inside the 1.5-month window.",
      "Owned API integration and the deployment lifecycle through to handoff, with IP compliance throughout.",
    ],
  },
  {
    org: "AlgoMaster",
    title: "Python Lead & Instructor",
    period: "2022 — 2023",
    place: "Non-profit",
    notes: [
      "Led the Python department: built the curriculum, mentored 20+ students, and ran competitive programming contests.",
    ],
  },
  {
    org: "Menoufia University",
    title: "Research Assistant",
    period: "2023 — 2024",
    place: "Egypt",
    notes: [
      "Built a deep learning model for breast cancer detection from X-ray imaging — classifying benign against malignant and localizing the affected cells.",
    ],
  },
]

export type Project = {
  year: string
  title: string
  context: string
  summary: string
  stack: string[]
  href?: string
}

export const work: Project[] = [
  {
    year: "2026",
    title: "eKYC OCR & Field Detection",
    context: "Thndr — production",
    summary:
      "Identity document understanding for Arabic national IDs and passports: YOLO field detection, a fine-tuned PaddleOCR v5, MRZ parsing, face matching and fraud checks. Replaced a 3.3-second pipeline with one that answers in under half a second.",
    stack: ["YOLO", "PaddleOCR v5", "OpenCV", "Python", "Computer Vision"],
  },
  {
    year: "2024—26",
    title: "Multi-Channel AI Support Platform",
    context: "NexAI — production",
    summary:
      "The AI support product, from first MVP to a system carrying 500+ conversations a day across four messaging channels — RAG retrieval, voice chat, ticketing, and analytics for five business teams.",
    stack: ["FastAPI", "LangChain", "Pinecone", "PostgreSQL", "Redis", "ElevenLabs", "Docker"],
  },
  {
    year: "2026",
    title: "Medora",
    context: "Open source",
    summary:
      "A multimodal medical assistant that reads text, images and PDF reports in Arabic and English, with an agent pipeline, automatic profile extraction, and conversational memory.",
    stack: ["Python", "LLM Agents", "Multimodal", "RAG"],
    href: "https://github.com/Osama-Abo-Bakr/medora",
  },
  {
    year: "2026",
    title: "Brain Tumor Detection",
    context: "Graduation project",
    summary:
      "MRI tumor detection served end to end — a YOLO detection model behind a FastAPI service with a Streamlit front end, containerized for deployment.",
    stack: ["YOLO", "FastAPI", "Streamlit", "Docker", "Medical Imaging"],
    href: "https://github.com/Osama-Abo-Bakr/brain-tumor",
  },
  {
    year: "2026",
    title: "EGX30 Trading Agent",
    context: "Personal research",
    summary:
      "An institutional-grade portfolio system for the Egyptian Exchange — signal generation and position logic over EGX30 constituents.",
    stack: ["Python", "Quantitative Analysis", "Agents"],
    href: "https://github.com/Osama-Abo-Bakr/Trading_Agent",
  },
  {
    year: "2025",
    title: "SaaS RAG Chatbot",
    context: "Product",
    summary:
      "Enterprise document Q&A: ingests up to thirty documents, runs hybrid search with metadata extraction, accepts multimodal input, and keeps conversation memory across sessions.",
    stack: ["LangChain", "Weaviate", "FastAPI", "React", "Node.js"],
    href: "https://github.com/Osama-Abo-Bakr/SaaS-RAG-chatbot",
  },
  {
    year: "2025",
    title: "Real-Time Stock Market Agent",
    context: "Open source",
    summary:
      "A CrewAI pipeline that chains a news fetcher into sentiment analysis, a technical indicator engine, and a trading signal generator over live market data.",
    stack: ["CrewAI", "GPT-4", "Finnhub", "yFinance", "LangChain"],
    href: "https://github.com/Osama-Abo-Bakr/Stock-Agent",
  },
  {
    year: "2026",
    title: "DevOps Learn",
    context: "Open source",
    summary:
      "A free, visual learning platform for Docker, Kubernetes and Docker Compose — written to teach the parts of container tooling that documentation tends to skip.",
    stack: ["MDX", "Next.js", "Docker", "Kubernetes"],
    href: "https://github.com/Osama-Abo-Bakr/devops-learn",
  },
  {
    year: "2024",
    title: "InstaMasr",
    context: "Government services platform",
    summary:
      "A platform that streamlines access to Egyptian government services — an intelligent chat assistant, automated form processing, full Arabic RTL support, and JWT authentication.",
    stack: ["Next.js 14", "FastAPI", "LangChain", "TypeScript", "JWT"],
  },
]

export type Figure = {
  from?: string
  value: string
  label: string
  source: string
}

// Every figure below is measured, and traceable to the work it came from.
export const figures: Figure[] = [
  { from: "3.3s", value: "0.3s", label: "eKYC pipeline latency, per document", source: "Thndr" },
  { from: "58%", value: "11%", label: "character error rate, multi-line fields", source: "Thndr" },
  { value: "22×", label: "field accuracy against the prior system", source: "Thndr" },
  { value: "1.77%", label: "average CER, passport pipeline, 2,000 images", source: "Thndr" },
  { value: "500+", label: "conversations handled per day", source: "NexAI" },
  { value: "100%", label: "job success score across 10+ projects", source: "Upwork" },
]

export const toolkit: { group: string; items: string[] }[] = [
  {
    group: "AI & LLM",
    items: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI", "OpenAI GPT-4", "Hugging Face", "LoRA / QLoRA fine-tuning"],
  },
  {
    group: "ML & Vision",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "YOLO", "PaddleOCR", "Transformers", "NLP"],
  },
  { group: "Retrieval", items: ["Pinecone", "Weaviate", "FAISS", "ChromaDB", "Milvus", "pgvector"] },
  { group: "Backend", items: ["FastAPI", "REST APIs", "Microservices", "Async processing"] },
  { group: "Infrastructure", items: ["Docker", "AWS", "GCP", "Railway", "Vercel", "CI/CD"] },
  { group: "Data", items: ["PostgreSQL", "Redis", "Pandas", "NumPy", "Streamlit"] },
  { group: "Automation", items: ["n8n", "Make", "Custom API integrations"] },
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
]

export const sections = [
  { id: "profile", index: "01", label: "Profile" },
  { id: "practice", index: "02", label: "Practice" },
  { id: "work", index: "03", label: "Selected Work" },
  { id: "measures", index: "04", label: "Measures" },
  { id: "toolkit", index: "05", label: "Toolkit" },
  { id: "colophon", index: "06", label: "Colophon" },
] as const
