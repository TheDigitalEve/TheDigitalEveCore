'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.5,
    })

    const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000))
    const particles: Particle[] = Array.from({ length: particleCount }, createParticle)

    const drawStar = (x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.beginPath()
      ctx.translate(x, y)
      ctx.rotate(Math.PI / 4)
      ctx.fillStyle = `rgba(0, 230, 255, ${opacity})`

      ctx.fillRect(-size / 2, -size / 8, size, size / 4)
      for (let i = 1; i < 4; i++) {
        ctx.rotate(Math.PI / 2)
        ctx.fillRect(-size / 2, -size / 8, size, size / 4)
      }

      ctx.restore()
    }

    const updateParticle = (particle: Particle) => {
      particle.x += particle.speedX
      particle.y += particle.speedY

      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      }

      const time = performance.now() * 0.001
      particle.opacity = Math.sin(time + particle.x + particle.y) * 0.25 + 0.75
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        updateParticle(particle)
        drawStar(particle.x, particle.y, particle.size, particle.opacity)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      setCanvasSize()
      particles.forEach(particle => {
        particle.x = Math.min(particle.x, canvas.width)
        particle.y = Math.min(particle.y, canvas.height)
      })
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}