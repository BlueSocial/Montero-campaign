"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { campaign } from "@/lib/campaign"

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
        solid ? "bg-white shadow-md py-1.5 md:py-2" : "bg-transparent py-2 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-4">
          <Link
            href="/"
            className={`flex shrink-0 items-center ${solid ? "" : "drop-shadow-md"}`}
          >
            <span className="sr-only">
              {campaign.candidateName} for Western Municipal Water District {campaign.division}
            </span>
            <span
              aria-hidden="true"
              className={`flex flex-col justify-center leading-none font-sans ${
                solid ? "text-navy-blue" : "text-white"
              }`}
            >
              <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] md:text-2xl lg:text-[1.75rem] xl:text-3xl md:tracking-[0.08em]">
                Christen
              </span>
              <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] md:text-2xl lg:text-[1.75rem] xl:text-3xl md:tracking-[0.08em]">
                Montero
              </span>
              <span
                className={`mt-0.5 text-[7px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap md:mt-1 md:text-[10px] lg:text-[11px] md:tracking-[0.14em] ${
                  solid ? "text-sky-blue" : "text-golden-yellow"
                }`}
              >
                Western Municipal Water District
              </span>
              <span
                className={`text-[7px] font-semibold uppercase tracking-[0.12em] md:text-[10px] lg:text-[11px] md:tracking-[0.14em] ${
                  solid ? "text-sky-blue" : "text-golden-yellow"
                }`}
              >
                {campaign.division}
              </span>
            </span>
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
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLScwjzH8KID9Z4qo3kS0QOMbue5qvtsaa5t_JVJibUI5LaG3PQ/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`font-medium transition-colors ${solid ? "text-navy-blue hover:text-sky-blue" : "text-white hover:text-golden-yellow"}`}
            >
              Share Your Thoughts
            </Link>
            <Button asChild className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue">
              <a href={campaign.donationUrl} target="_blank" rel="noopener noreferrer">
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
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLScwjzH8KID9Z4qo3kS0QOMbue5qvtsaa5t_JVJibUI5LaG3PQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-navy-blue block py-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Share Your Thoughts
              </Link>
              <Button asChild className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue w-full">
                <a href={campaign.donationUrl} target="_blank" rel="noopener noreferrer">
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
