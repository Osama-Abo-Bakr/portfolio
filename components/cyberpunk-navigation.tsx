"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap, Download } from "lucide-react"

export function CyberpunkNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false) // Close mobile menu after clicking
  }

  const downloadResume = () => {
    // Open resume in new tab for download/print
    window.open("/resume.html", "_blank")
  }

  const navItems = [
    { href: "home", label: "HOME" },
    { href: "about", label: "ABOUT" },
    { href: "projects", label: "PROJECTS" },
    { href: "skills", label: "SKILLS" },
    { href: "contact", label: "CONTACT" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "cyber-nav-bg" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-cyan-400" />
            <span className="text-cyan-400 font-mono font-bold text-xl tracking-wider">OSAMA.EXE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="cyber-nav-link font-mono text-sm tracking-wider"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="cyber-button-small bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                <Download size={16} />
                <span>RESUME</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-400 hover:text-pink-400 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden cyber-mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="cyber-mobile-link font-mono block px-3 py-2 text-base tracking-wider w-full text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={downloadResume}
              className="cyber-button-small w-full justify-center mt-4 bg-gradient-to-r from-pink-500 to-purple-500"
            >
              <Download size={16} />
              <span>VIEW RESUME</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
