"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-navy-blue font-bold text-xl md:text-2xl">
            Christen Montero for Riverside 2026
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="font-medium text-navy-blue hover:text-sky-blue transition-colors">
              About
            </Link>
            <Link href="#priorities" className="font-medium text-navy-blue hover:text-sky-blue transition-colors">
              Priorities
            </Link>
            <Link href="#get-involved" className="font-medium text-navy-blue hover:text-sky-blue transition-colors">
              Get Involved
            </Link>
            <Button className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue">Donate</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#about" className="text-navy-blue block py-2" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#priorities" className="text-navy-blue block py-2" onClick={() => setMobileMenuOpen(false)}>
                Priorities
              </Link>
              <Link href="#get-involved" className="text-navy-blue block py-2" onClick={() => setMobileMenuOpen(false)}>
                Get Involved
              </Link>
              <Button className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue w-full">Donate</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
