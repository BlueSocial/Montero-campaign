"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
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
            aria-label={`${campaign.candidateName} for the Western Municipal Water District ${campaign.division}`}
            className={`relative block h-12 w-[calc(3rem*1997/787)] shrink-0 overflow-hidden md:h-16 md:w-[calc(4rem*1997/787)] lg:h-[4.5rem] lg:w-[calc(4.5rem*1997/787)] ${solid ? "" : "drop-shadow-md"}`}
          >
            <Image
              src="/logo-color.png"
              alt=""
              fill
              sizes="200px"
              className={`object-contain object-left ${solid ? "" : "hidden"}`}
              priority
            />
            <Image
              src="/logo-white.png"
              alt=""
              fill
              sizes="200px"
              className={`object-contain object-left ${solid ? "hidden" : ""}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-5 lg:flex lg:space-x-8">
            <Link href="/#about" scroll={false} className={`font-medium transition-colors ${solid ? "text-navy-blue hover:text-sky-blue" : "text-white hover:text-golden-yellow"}`}>
              Meet Christen
            </Link>
            <Link href="/priorities" className={`font-medium transition-colors ${solid ? "text-navy-blue hover:text-sky-blue" : "text-white hover:text-golden-yellow"}`}>
              Priorities
            </Link>
            <Link href="/why-water-matters" className={`font-medium transition-colors ${solid ? "text-navy-blue hover:text-sky-blue" : "text-white hover:text-golden-yellow"}`}>
              Why Water Matters
            </Link>
            <Link href="/#get-involved" scroll={false} className={`font-medium transition-colors ${solid ? "text-navy-blue hover:text-sky-blue" : "text-white hover:text-golden-yellow"}`}>
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
            className={`lg:hidden ${solid ? "text-navy-blue" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="bg-white shadow-lg lg:hidden">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/#about" scroll={false} className="text-navy-blue block py-2" onClick={() => setMobileMenuOpen(false)}>
                Meet Christen
              </Link>
              <Link href="/priorities" className="text-navy-blue block py-2" onClick={() => setMobileMenuOpen(false)}>
                Priorities
              </Link>
              <Link href="/why-water-matters" className="text-navy-blue block py-2" onClick={() => setMobileMenuOpen(false)}>
                Why Water Matters
              </Link>
              <Link href="/#get-involved" scroll={false} className="text-navy-blue block py-2" onClick={() => setMobileMenuOpen(false)}>
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
