"use client"

import { useEffect, useRef } from "react"

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Simplified wave properties
    const waves = [
      { color: "#FFFFFF", amplitude: 50, frequency: 0.005, speed: 0.01, offset: 0 },
      { color: "#4396D2", amplitude: 30, frequency: 0.01, speed: 0.015, offset: 0 },
      { color: "#F4C338", amplitude: 20, frequency: 0.015, speed: 0.005, offset: 0 },
    ]

    // Animation loop
    let animationId: number
    let lastTime = 0

    const animate = (time: number) => {
      // Throttle the animation to improve performance
      if (time - lastTime < 50) {
        animationId = requestAnimationFrame(animate)
        return
      }

      lastTime = time
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waves from bottom to top
      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i]
        wave.offset += wave.speed

        ctx.fillStyle = wave.color
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        // Draw wave path with fewer points for better performance
        for (let x = 0; x < canvas.width; x += 20) {
          const y = Math.sin(x * wave.frequency + wave.offset) * wave.amplitude + canvas.height - (i + 1) * 100
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-60 mix-blend-soft-light" />
}
