import { useState, useRef } from 'react'
import { Play } from 'lucide-react'

const Landing = ({ onStart }) => {
  const [transform, setTransform] = useState('')
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -15
    const rotateY = ((x - centerX) / centerX) * 15

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)')
  }

  return (
    <div className="min-h-screen bg-dark-blue relative overflow-hidden flex flex-col items-center justify-center">
      {/* Líneas de cuaderno */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-white/5"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
        {/* Línea roja de margen */}
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-red-500/20" />
      </div>

      {/* Contenido principal */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 text-center px-4 cursor-default select-none"
      >
        {/* Título con efecto 3D */}
        <h1
          className="font-handwritten text-7xl md:text-8xl lg:text-9xl text-white mb-6 transition-transform duration-200 ease-out"
          style={{ transform }}
        >
          Evidencia
        </h1>
        <h1
          className="font-handwritten text-7xl md:text-8xl lg:text-9xl text-white mb-12 transition-transform duration-200 ease-out"
          style={{ transform }}
        >
          Portafolio
        </h1>

        {/* Línea decorativa */}
        <div className="w-48 h-px bg-white/30 mx-auto mb-8" />

        {/* Información */}
        <p className="font-handwritten text-2xl md:text-3xl text-white/80 mb-4">
          Innovación de Procesos Creativos
        </p>
        <p className="font-handwritten text-xl md:text-2xl text-white/60 mb-2">
          Juan Pablo Pérez Gutiérrez
        </p>
        <p className="font-handwritten text-lg md:text-xl text-white/50 mb-16">
          A01800483
        </p>

        {/* Botón Play */}
        <button
          onClick={onStart}
          className="group relative w-20 h-20 mx-auto flex items-center justify-center"
        >
          {/* Círculo exterior con animación pulse */}
          <span className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300" />
          <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
          
          {/* Ícono Play */}
          <Play 
            className="w-8 h-8 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 ml-1" 
            fill="currentColor"
          />
        </button>
      </div>

      {/* Decoración de esquinas */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/10" />
    </div>
  )
}

export default Landing