"use client"

import { useEffect, useRef } from "react"

export function AnimatedLinesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configuration
    const lineCount = 10
    const lineSpacing = 150
    const speed = 0.3
    const pauseFrames = 60
    const lineColor = "rgba(59, 130, 246, 0.3)" // Blue semi-transparent
    const bgColor = "#3e3e3e"

    let offset = 0
    let direction = -1 // -1 = left, 1 = right
    let pauseCounter = 0
    let isPaused = false
    let maxOffset = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Calculate max offset based on canvas width
      maxOffset = lineSpacing
    }

    const draw = () => {
      // Fill background
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw vertical lines
      ctx.strokeStyle = lineColor
      ctx.lineWidth = 1

      const totalWidth = lineCount * lineSpacing
      const startX = (canvas.width - totalWidth) / 2

      for (let i = 0; i < lineCount; i++) {
        const x = startX + i * lineSpacing + offset
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Handle animation logic
      if (isPaused) {
        pauseCounter++
        if (pauseCounter >= pauseFrames) {
          isPaused = false
          pauseCounter = 0
          direction *= -1 // Reverse direction
        }
      } else {
        offset += speed * direction

        // Check if reached boundaries
        if (offset <= -maxOffset || offset >= maxOffset) {
          isPaused = true
        }
      }

      requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    draw()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" style={{ background: "#3e3e3e" }} />
  )
}
