"use client"

import { Github, Zap } from "lucide-react"

const projects = [
  {
    title: "INSTAMASR.EXE",
    subtitle: "AI Government Services Platform",
    description:
      "Neural-powered web application simplifying Egyptian government services through conversational AI interface.",
    features: [
      "🤖 CONVERSATIONAL AI CORE",
      "📝 AUTOMATED FORM PROCESSING",
      "🔐 QUANTUM SECURITY PROTOCOLS",
      "🌗 DUAL-MODE INTERFACE",
      "🇪🇬 RTL ARABIC SUPPORT",
      "📱 OMNI-DEVICE COMPATIBILITY",
    ],
    github: "https://github.com/Osama-Abo-Bakr/instamasr",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    glow: "shadow-cyan-500/50",
  },
  {
    title: "RAG-SAAS.SYS",
    subtitle: "Enterprise RAG Chatbot",
    description:
      "End-to-end Retrieval-Augmented Generation system with FastAPI backbone and multi-format document ingestion.",
    features: [
      "⚡ FASTAPI NEURAL CORE",
      "🗄️ WEAVIATE VECTOR DATABASE",
      "🔑 JWT AUTHENTICATION",
      "📄 MULTI-FORMAT PARSING",
      "🧠 RAG ARCHITECTURE",
    ],
    github: "https://github.com/Osama-Abo-Bakr/SaaS-RAG-chatbot",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    glow: "shadow-pink-500/50",
  },
  {
    title: "SUPPORT-AI.BOT",
    subtitle: "Customer Support Neural Network",
    description:
      "Automated customer service powered by FAISS vector search and Google Generative AI with multilingual capabilities.",
    features: [
      "🌐 MULTILINGUAL PROCESSING",
      "📺 YOUTUBE DATA EXTRACTION",
      "💾 MYSQL MEMORY BANKS",
      "📱 WHATSAPP INTEGRATION",
    ],
    github: "https://github.com/Osama-Abo-Bakr/ai-customer-support",
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    glow: "shadow-green-500/50",
  },
  {
    title: "FINTECH-AGENTS.AI",
    subtitle: "Financial Analysis Swarm",
    description: "CrewAI-based multi-agent system analyzing financial data streams and generating predictive insights.",
    features: ["🤖 CREWAI AGENT SWARM", "📊 FINANCIAL DATA MINING", "🔮 PREDICTIVE ANALYTICS", "📈 REAL-TIME INSIGHTS"],
    github: "https://github.com/Osama-Abo-Bakr/financial-data-analysis-crewai",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    glow: "shadow-yellow-500/50",
  },
  {
    title: "LINKEDIN-GEN.NET",
    subtitle: "Content Generation Matrix",
    description:
      "AI agent pipeline generating professional LinkedIn content based on trending algorithms and skill matrices.",
    features: ["🕵️‍♂️ RESEARCH NEURAL NET", "🧠 CONTENT STRATEGIST AI", "🗂️ TOPIC CUSTOMIZATION", "🔄 SEQUENTIAL PIPELINE"],
    github: "https://github.com/Osama-Abo-Bakr/linkedin-post-generator",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    glow: "shadow-indigo-500/50",
  },
  {
    title: "SQL-CHAT.DB",
    subtitle: "Database Query Interface",
    description:
      "Natural language to SQL translator with real-time database querying capabilities and intelligent response generation.",
    features: ["🧠 GPT-4 INTEGRATION", "💻 STREAMLIT INTERFACE", "🗄️ MYSQL CONNECTIVITY", "🔄 REAL-TIME QUERIES"],
    github: "https://github.com/Osama-Abo-Bakr/chat-with-mysql",
    gradient: "from-red-500 via-pink-500 to-purple-500",
    glow: "shadow-red-500/50",
  },
]

export function CyberpunkProjects() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="cyber-title text-4xl md:text-6xl font-black mb-4">
            {"<"} ACTIVE SYSTEMS {">"}
          </h2>
          <div className="cyber-divider"></div>
          <p className="text-gray-400 font-mono mt-6 text-lg">
            NEURAL NETWORKS • MACHINE LEARNING • AI AGENTS • AUTOMATION
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`cyber-project-card group ${project.glow}`}>
              <div className={`cyber-project-header bg-gradient-to-r ${project.gradient}`}>
                <Zap className="w-6 h-6 text-white" />
                <div className="text-right">
                  <div className="text-xs font-mono text-white/80">SYSTEM #{String(index + 1).padStart(2, "0")}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-mono font-bold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <h4 className="text-sm font-mono text-purple-400 mb-4">{project.subtitle}</h4>

                <p className="text-gray-300 text-sm font-mono leading-relaxed mb-6">{project.description}</p>

                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="cyber-feature">
                      <div className="cyber-feature-dot"></div>
                      <span className="text-xs font-mono text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="cyber-button-small">
                    <Github size={14} />
                    <span>SOURCE</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
