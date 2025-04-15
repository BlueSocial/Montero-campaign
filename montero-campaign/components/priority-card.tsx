"use client"

import { useEffect, useState } from "react"
import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface PriorityCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  delay?: number
}

export default function PriorityCard({ icon, title, description, color, delay = 0 }: PriorityCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className={`${color} text-white rounded-t-lg p-6 flex justify-center`}>
          <div className="bg-white/20 p-4 rounded-full">{icon}</div>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-navy-blue">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
