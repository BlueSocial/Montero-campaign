"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Christen truly understands the needs of our community. Her vision for Ward 2 is exactly what we need.",
    author: "Maria Rodriguez",
    title: "Small Business Owner",
  },
  {
    quote:
      "I've known Christen for years, and her dedication to public service is unmatched. She'll be an excellent council member.",
    author: "James Wilson",
    title: "Community Organizer",
  },
  {
    quote: "Christen listens to residents and takes action. That's the kind of leadership we need in City Hall.",
    author: "Sarah Johnson",
    title: "Teacher",
  },
  {
    quote:
      "As a longtime Riverside resident, I'm excited about Christen's fresh ideas and commitment to our community.",
    author: "David Chen",
    title: "Neighborhood Association President",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayCount, setDisplayCount] = useState(3)

  // Determine how many testimonials to display based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(1)
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2)
      } else {
        setDisplayCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  // Create array of visible testimonials
  const visibleTestimonials = []
  for (let i = 0; i < displayCount; i++) {
    const index = (currentIndex + i) % testimonials.length
    visibleTestimonials.push(testimonials[index])
  }

  return (
    <div className="relative">
      <div className="flex justify-center mb-6">
        <button
          onClick={prevSlide}
          className="bg-navy-blue text-white p-2 rounded-full mr-2 hover:bg-navy-blue/80 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-navy-blue text-white p-2 rounded-full ml-2 hover:bg-navy-blue/80 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-sky-blue mb-4" />
              <p className="mb-6 text-gray-700 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-navy-blue">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
