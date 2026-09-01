"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (target.id === 'newsletter-modal' || target.closest('#newsletter-modal')) {
        setIsVisible(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVisible(false)
      }
    }

    if (isVisible) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])

  useEffect(() => {
    const handleButtonClick = () => {
      setIsVisible(true)
    }

    const button = document.querySelector('[data-newsletter-button]')
    if (button) {
      button.addEventListener('click', handleButtonClick)
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleButtonClick)
      }
    }
  }, [])

  const closePopup = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div id="newsletter-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-blue to-sky-blue text-white p-6 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-center font-serif">
            Stay Connected with Christen
          </h2>
          <p className="text-center mt-2 opacity-90">
            Get campaign updates and the latest news from Team Christen
          </p>
          <Button
            onClick={closePopup}
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Google Form Embed */}
        <div className="p-0">
          <iframe
            src="https://forms.gle/MmCfh9W4fb8wm6T66"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full h-[600px]"
            title="Newsletter Signup Form"
          >
            Loading…
          </iframe>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center">
          <p className="text-sm text-gray-600">
            Your voice matters, and we want to make sure you're heard.
          </p>
        </div>
      </div>
    </div>
  )
}
