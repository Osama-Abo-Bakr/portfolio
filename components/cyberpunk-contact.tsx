"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Send, Wifi, Terminal } from "lucide-react"

export function CyberpunkContact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="cyber-title text-4xl md:text-6xl font-black mb-4">
            {"<"} ESTABLISH CONNECTION {">"}
          </h2>
          <div className="cyber-divider"></div>
          <p className="text-gray-400 font-mono mt-6 text-lg">
            READY TO INITIALIZE AI PROTOCOLS? LET'S SYNC NEURAL NETWORKS
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="cyber-panel">
              <div className="cyber-panel-header">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-mono font-bold text-cyan-400">CONNECTION PROTOCOLS</h3>
              </div>

              <div className="space-y-6">
                <div className="cyber-contact-item group">
                  <div className="cyber-contact-icon bg-gradient-to-r from-cyan-500 to-blue-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-mono uppercase tracking-wider">EMAIL PROTOCOL</div>
                    <a href="mailto:osamaoabobakr12@gmail.com" className="cyber-link font-mono text-lg">
                      osamaoabobakr12@gmail.com
                    </a>
                  </div>
                </div>

                <div className="cyber-contact-item group">
                  <div className="cyber-contact-icon bg-gradient-to-r from-green-500 to-teal-500">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-mono uppercase tracking-wider">VOICE CHANNEL</div>
                    <div className="text-white font-mono text-lg">+20-1274011748</div>
                  </div>
                </div>

                <div className="cyber-contact-item group">
                  <div className="cyber-contact-icon bg-gradient-to-r from-purple-500 to-pink-500">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-mono uppercase tracking-wider">PHYSICAL LOCATION</div>
                    <div className="text-white font-mono text-lg">CAIRO, EGYPT</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-cyan-500/20">
                <h4 className="text-lg font-mono font-bold text-pink-400 mb-4">NETWORK LINKS</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Osama-Abo-Bakr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-social-link"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/osama-abo-bakr-293614259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-social-link"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="cyber-panel">
              <div className="cyber-panel-header">
                <Wifi className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-mono font-bold text-green-400">SYSTEM STATUS</h3>
              </div>
              <div className="space-y-4">
                <div className="cyber-status-item">
                  <span className="cyber-status-dot bg-green-400"></span>
                  <span className="font-mono text-sm text-gray-300">NEURAL NETWORKS: ONLINE</span>
                </div>
                <div className="cyber-status-item">
                  <span className="cyber-status-dot bg-cyan-400"></span>
                  <span className="font-mono text-sm text-gray-300">AI AGENTS: ACTIVE</span>
                </div>
                <div className="cyber-status-item">
                  <span className="cyber-status-dot bg-purple-400"></span>
                  <span className="font-mono text-sm text-gray-300">FREELANCE MODE: ENABLED</span>
                </div>
                <div className="cyber-status-item">
                  <span className="cyber-status-dot bg-pink-400"></span>
                  <span className="font-mono text-sm text-gray-300">COLLABORATION: READY</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-panel">
            <div className="cyber-panel-header">
              <Send className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-mono font-bold text-yellow-400">TRANSMIT MESSAGE</h3>
            </div>

            <form className="space-y-6">
              <div>
                <label className="cyber-label">SENDER ID</label>
                <input type="text" className="cyber-input" placeholder="Enter your designation..." />
              </div>

              <div>
                <label className="cyber-label">EMAIL PROTOCOL</label>
                <input type="email" className="cyber-input" placeholder="your.email@domain.com" />
              </div>

              <div>
                <label className="cyber-label">MESSAGE HEADER</label>
                <input type="text" className="cyber-input" placeholder="AI Project Collaboration" />
              </div>

              <div>
                <label className="cyber-label">DATA PAYLOAD</label>
                <textarea
                  rows={5}
                  className="cyber-textarea"
                  placeholder="Initialize message transmission..."
                ></textarea>
              </div>

              <button type="submit" className="cyber-button-primary w-full group">
                <Send className="w-5 h-5 mr-2" />
                <span className="relative z-10">TRANSMIT MESSAGE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
