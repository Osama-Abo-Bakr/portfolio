"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { CyberpunkHero3D } from "@/components/cyberpunk-hero-3d"
import { CyberpunkAbout } from "@/components/cyberpunk-about"
import { CyberpunkProjects } from "@/components/cyberpunk-projects"
import { CyberpunkSkills } from "@/components/cyberpunk-skills"
import { CyberpunkContact } from "@/components/cyberpunk-contact"
import { CyberpunkNavigation } from "@/components/cyberpunk-navigation"
import { ScanLines } from "@/components/scan-lines"

export default function CyberpunkPortfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <ScanLines />
      <CyberpunkNavigation />

      {/* Hero Section with 3D Cyberpunk Elements */}
      <section id="home" className="relative h-screen overflow-hidden">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }} className="absolute inset-0">
          <Suspense fallback={null}>
            <CyberpunkHero3D />
          </Suspense>
        </Canvas>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <div className="glitch-container mb-8">
              <h1 className="glitch text-6xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400">
                OSAMA ABO-BAKR
              </h1>
            </div>

            <div className="cyber-border p-6 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl mb-4 text-cyan-300 font-mono tracking-wider">
                {">"} AI & MACHINE LEARNING ENGINEER
              </h2>
              <p className="text-lg md:text-xl text-gray-300 font-mono leading-relaxed">
                NEURAL NETWORKS • DEEP LEARNING • AI AGENTS • RAG SYSTEMS
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => scrollToSection("projects")} className="cyber-button-primary group">
                <span className="relative z-10">INITIALIZE PROJECTS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button onClick={() => scrollToSection("contact")} className="cyber-button-secondary">
                <span className="relative z-10">ESTABLISH CONNECTION</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <CyberpunkAbout />
      <CyberpunkProjects />
      <CyberpunkSkills />
      <CyberpunkContact />
    </div>
  )
}
