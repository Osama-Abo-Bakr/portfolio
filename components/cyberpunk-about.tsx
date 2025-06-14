"use client"

import { MapPin, Mail, Phone, Github, Linkedin, Trophy, Cpu, Database, Brain, Download } from "lucide-react"

export function CyberpunkAbout() {
  const downloadResume = () => {
    window.open("/resume.html", "_blank")
  }

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="cyber-title text-4xl md:text-6xl font-black mb-4">
            {"<"} SYSTEM PROFILE {">"}
          </h2>
          <div className="cyber-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="cyber-panel">
              <div className="cyber-panel-header">
                <Cpu className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-mono font-bold text-cyan-400">PERSONAL DATA</h3>
              </div>
              <div className="space-y-4">
                <div className="cyber-data-row">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300 font-mono">LOCATION: Cairo, Egypt • AGE: 21</span>
                </div>
                <div className="cyber-data-row">
                  <Mail className="w-5 h-5 text-pink-400" />
                  <a href="mailto:osamaoabobakr12@gmail.com" className="cyber-link font-mono">
                    osamaoabobakr12@gmail.com
                  </a>
                </div>
                <div className="cyber-data-row">
                  <Phone className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300 font-mono">+20-1274011748</span>
                </div>
                <div className="cyber-data-row">
                  <Github className="w-5 h-5 text-pink-400" />
                  <a href="https://github.com/Osama-Abo-Bakr" className="cyber-link font-mono">
                    github.com/Osama-Abo-Bakr
                  </a>
                </div>
                <div className="cyber-data-row">
                  <Linkedin className="w-5 h-5 text-pink-400" />
                  <a href="https://www.linkedin.com/in/osama-abo-bakr-293614259/" className="cyber-link font-mono">
                    LinkedIn Network
                  </a>
                </div>
              </div>

              {/* Resume Download Button */}
              <div className="mt-6 pt-6 border-t border-cyan-500/20">
                <button onClick={downloadResume} className="cyber-button-primary w-full group">
                  <Download className="w-5 h-5 mr-2" />
                  <span className="relative z-10">VIEW RESUME</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            <div className="cyber-panel">
              <div className="cyber-panel-header">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-mono font-bold text-yellow-400">ACHIEVEMENTS</h3>
              </div>
              <div className="space-y-3">
                <div className="cyber-achievement">
                  <div className="cyber-achievement-bar bg-gradient-to-r from-green-500 to-cyan-500"></div>
                  <span className="font-mono text-sm text-gray-300 relative z-10">
                    TOP-RATED UPWORK FREELANCER [100% SUCCESS]
                  </span>
                </div>
                <div className="cyber-achievement">
                  <div className="cyber-achievement-bar bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <span className="font-mono text-sm text-gray-300 relative z-10">HIGH KAGGLE RANKING</span>
                </div>
                <div className="cyber-achievement">
                  <div className="cyber-achievement-bar bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <span className="font-mono text-sm text-gray-300 relative z-10">HACKERRANK EXPERT</span>
                </div>
                <div className="cyber-achievement">
                  <div className="cyber-achievement-bar bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                  <span className="font-mono text-sm text-gray-300 relative z-10">LEETCODE SPECIALIST</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="cyber-panel">
              <div className="cyber-panel-header">
                <Brain className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-mono font-bold text-purple-400">NEURAL PROFILE</h3>
              </div>
              <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
                <p>
                  {">"} DESIGNATION: <span className="text-cyan-400">AI & MACHINE LEARNING ENGINEER</span>
                </p>
                <p>
                  {">"} SPECIALIZATION: Deep expertise in Data Science, Computer Vision, Natural Language Processing,
                  LLMs, RAG pipelines, and AI Agent Architectures.
                </p>
                <p>{">"} EDUCATION: Faculty of Artificial Intelligence Graduate</p>
                <p>
                  {">"} MISSION: Solving real-world problems through innovative AI solutions — document-based chatbots,
                  AI agents for finance, and intelligent automation systems.
                </p>
              </div>
            </div>

            <div className="cyber-panel">
              <div className="cyber-panel-header">
                <Database className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-mono font-bold text-green-400">CORE SYSTEMS</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="cyber-stat">
                  <div className="text-2xl font-bold text-cyan-400">9+</div>
                  <div className="text-xs font-mono text-gray-400">MAJOR PROJECTS</div>
                </div>
                <div className="cyber-stat">
                  <div className="text-2xl font-bold text-pink-400">100%</div>
                  <div className="text-xs font-mono text-gray-400">SUCCESS RATE</div>
                </div>
                <div className="cyber-stat">
                  <div className="text-2xl font-bold text-yellow-400">AI/ML</div>
                  <div className="text-xs font-mono text-gray-400">SPECIALIST</div>
                </div>
                <div className="cyber-stat">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-xs font-mono text-gray-400">ONLINE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
