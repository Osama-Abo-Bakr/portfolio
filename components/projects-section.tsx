"use client"

import { Github } from "lucide-react"

const projects = [
  {
    title: "InstaMasr — AI Government Services Platform",
    description: "A modern web app simplifying Egyptian government services using an AI-powered chatbot.",
    features: [
      "🤖 Conversational AI Interface",
      "📝 Submit Service Forms",
      "🔐 Secure Auth & Dashboard",
      "🌗 Light/Dark Mode",
      "🇪🇬 Full Arabic RTL Support",
      "📱 Responsive across all devices",
    ],
    github: "https://github.com/Osama-Abo-Bakr/instamasr",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "SaaS RAG Chatbot",
    description:
      "An end-to-end Retrieval-Augmented Generation system with FastAPI, supporting document ingestion, user roles, and chat history.",
    features: [
      "FastAPI Backend",
      "Weaviate Vector Database",
      "JWT Authentication",
      "RAG Implementation",
      "File Upload (PDF, DOCX, CSV, PPTX)",
    ],
    github: "https://github.com/Osama-Abo-Bakr/SaaS-RAG-chatbot",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Customer Support Chatbot",
    description: "Automated customer service powered by FAISS + Google Generative AI.",
    features: [
      "Multilingual Chat (English/Arabic)",
      "YouTube & Document Parsing",
      "Chat history stored in MySQL",
      "WhatsApp Integration",
    ],
    github: "https://github.com/Osama-Abo-Bakr/ai-customer-support",
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Financial Data Analysis Agents",
    description:
      "A CrewAI-based system of agents that analyze financial data (PDFs + CSVs) and generate user-specific insights.",
    features: [
      "CrewAI Multi-Agent System",
      "PDF & CSV Analysis",
      "Financial Insights Generation",
      "User-Specific Reports",
    ],
    github: "https://github.com/Osama-Abo-Bakr/financial-data-analysis-crewai",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "LinkedIn Post Generator (AI-Driven)",
    description: "AI agents generate professional LinkedIn posts based on trending topics and skills.",
    features: ["🕵️‍♂️ Research Agent", "🧠 Content Strategist", "🗂 Topic Customization", "🔄 Sequential Pipeline"],
    github: "https://github.com/Osama-Abo-Bakr/linkedin-post-generator",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Chat with Any Database (SQL Bot)",
    description: "Chatbot that transforms natural language into SQL and queries real-time data.",
    features: ["GPT-4 Integration", "Streamlit GUI", "MySQL Database", "Natural Language to SQL"],
    github: "https://github.com/Osama-Abo-Bakr/chat-with-mysql",
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Chat with Any Website (RAG)",
    description: "LangChain-powered RAG system that lets users ask questions about any website's content.",
    features: [
      "Website Scraper",
      "Google Generative AI Embeddings",
      "ChromaDB Vector Search",
      "Context-aware conversation history",
    ],
    github: "https://github.com/Osama-Abo-Bakr/Chat-with-Any-Website",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Real-Time Stock Market Agent",
    description: "An AI-powered agent pipeline for analyzing stock sentiment and predicting short-term trends.",
    features: [
      "🔍 News Aggregation & Sentiment Analysis",
      "📉 Technical Indicators (RSI, MACD)",
      "📈 Short-term Price Forecasting",
    ],
    github: "https://github.com/Osama-Abo-Bakr/Stock-Agent",
    gradient: "from-emerald-500 to-green-500",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Highlight Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-6`}></div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-gray-400 text-sm">
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-all duration-300"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
