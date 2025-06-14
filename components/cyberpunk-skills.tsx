"use client"

import { Database, Globe, Wrench, Code, Brain, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "CORE LANGUAGES",
    icon: Code,
    skills: ["Python", "C++", "JavaScript"],
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/50",
  },
  {
    title: "AI FRAMEWORKS",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "OpenAI"],
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/50",
  },
  {
    title: "DATA SCIENCE",
    icon: Database,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    color: "from-green-500 to-teal-500",
    glow: "shadow-green-500/50",
  },
  {
    title: "DEVOPS PROTOCOLS",
    icon: Wrench,
    skills: ["Docker", "Docker Compose"],
    color: "from-yellow-500 to-orange-500",
    glow: "shadow-yellow-500/50",
  },
  {
    title: "WEB SYSTEMS",
    icon: Globe,
    skills: ["FastAPI", "Streamlit", "React", "Tailwind"],
    color: "from-indigo-500 to-purple-500",
    glow: "shadow-indigo-500/50",
  },
  {
    title: "DATABASE CORES",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Weaviate", "FAISS", "Chroma", "Pinecone"],
    color: "from-red-500 to-pink-500",
    glow: "shadow-red-500/50",
  },
  {
    title: "AUTOMATION",
    icon: Zap,
    skills: ["n8n", "LangChain", "CrewAI"],
    color: "from-cyan-500 to-purple-500",
    glow: "shadow-cyan-500/50",
  },
]

export function CyberpunkSkills() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="cyber-title text-4xl md:text-6xl font-black mb-4">
            {"<"} TECH PROTOCOLS {">"}
          </h2>
          <div className="cyber-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className={`cyber-skill-card ${category.glow}`}>
              <div className={`cyber-skill-header bg-gradient-to-r ${category.color}`}>
                <category.icon className="w-6 h-6 text-white" />
                <div className="text-xs font-mono text-white/80">PROTOCOL #{String(index + 1).padStart(2, "0")}</div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-mono font-bold text-cyan-400 mb-4">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="cyber-skill-item">
                      <div className="cyber-skill-bar">
                        <div
                          className={`cyber-skill-progress bg-gradient-to-r ${category.color}`}
                          style={{ width: `${85 + Math.random() * 15}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-mono text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cyber-stats-grid">
          <div className="cyber-stat-card">
            <div className="cyber-stat-value text-cyan-400">100%</div>
            <div className="cyber-stat-label">UPWORK SUCCESS</div>
            <div className="cyber-stat-bar bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          </div>
          <div className="cyber-stat-card">
            <div className="cyber-stat-value text-purple-400">TOP</div>
            <div className="cyber-stat-label">KAGGLE RANK</div>
            <div className="cyber-stat-bar bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
          <div className="cyber-stat-card">
            <div className="cyber-stat-value text-green-400">HIGH</div>
            <div className="cyber-stat-label">HACKERRANK</div>
            <div className="cyber-stat-bar bg-gradient-to-r from-green-500 to-teal-500"></div>
          </div>
          <div className="cyber-stat-card">
            <div className="cyber-stat-value text-yellow-400">EXPERT</div>
            <div className="cyber-stat-label">LEETCODE</div>
            <div className="cyber-stat-bar bg-gradient-to-r from-yellow-500 to-orange-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
