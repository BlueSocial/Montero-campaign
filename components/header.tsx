"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (alwaysSolid) return;
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [alwaysSolid])

  // Use solid style if alwaysSolid or isScrolled
  const solid = alwaysSolid || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`font-bold text-xl md:text-2xl ${solid ? "text-navy-blue" : "text-white"} flex items-center gap-2`}>
            <Image
              src={solid ? "/logo-color.png" : "/logo-white.png"}
              alt="Christen Montero Logo"
              width={340}
              height={100}
              className="h-16 md:h-24 w-auto transition-all duration-300"
              priority
            />
            <span className="sr-only">Christen for Riverside 2026</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className={`font-medium transition-colors ${solid ? "text-navy-blue hover:text-sky-blue" : "text-white hover:text-golden-yellow"}`}>
              Meet Christen
            </Link>
            <Link href="#priorities" className={`font-medium transition-colors ${solid ? "text-navy-blue hover:text-sky-blue" : "text-white hover:text-golden-yellow"}`}>
              Priorities
            </Link>
            <Link href="/#get-involved" className={`font-medium transition-colors ${solid ? "text-navy-blue hover:text-sky-blue" : "text-white hover:text-golden-yellow"}`}>
              Get Involved
            </Link>
            <Button asChild className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue">
              <a href="https://www.efundraisingconnections.com/c/ChristenMontero2026" target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${solid ? "text-navy-blue" : "text-white"}`}
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
                Meet Christen
              </Link>
              <Link href="#priorities" className="text-navy-blue block py-2" onClick={() => setMobileMenuOpen(false)}>
                Priorities
              </Link>
              <Link href="/#get-involved" className="text-navy-blue block py-2" onClick={() => setMobileMenuOpen(false)}>
                Get Involved
              </Link>
              <Button asChild className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue w-full">
                <a href="https://www.efundraisingconnections.com/c/ChristenMontero2026" target="_blank" rel="noopener noreferrer">
                  Donate
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
