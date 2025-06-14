"use client"

import { MapPin, Mail, Phone, Github, Linkedin, Trophy } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Personal Info</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Cairo, Egypt • Age 21</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="mailto:osamaoabobakr12@gmail.com" className="hover:text-white transition-colors">
                    osamaoabobakr12@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span>+20-1274011748</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Github className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="https://github.com/Osama-Abo-Bakr" className="hover:text-white transition-colors">
                    github.com/Osama-Abo-Bakr
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Linkedin className="w-5 h-5 mr-3 text-blue-400" />
                  <a
                    href="https://www.linkedin.com/in/osama-abo-bakr-293614259/"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm <span className="text-white font-semibold">Osama Abo-Bakr</span>, a passionate AI and Machine
                Learning Engineer with deep expertise in Data Science, Computer Vision, Natural Language Processing,
                LLMs, RAG pipelines, and AI Agent Architectures.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I hold a degree from the Faculty of Artificial Intelligence and have earned a reputation as a{" "}
                <span className="text-blue-400 font-semibold">Top-Rated Freelancer on Upwork</span>, with a 100% job
                success rate.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm driven by solving real-world problems through innovative AI solutions — whether it's document-based
                chatbots, AI agents for finance, or intelligent automation systems.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 mr-3 text-yellow-400" />
                <h4 className="text-xl font-bold text-white">Achievements</h4>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Top-Rated Freelancer on Upwork (100% Job Success Rate)</li>
                <li>• High rankings on Kaggle, HackerRank, and LeetCode</li>
                <li>• Faculty of Artificial Intelligence Graduate</li>
                <li>• Expert in Python and C++ Programming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
