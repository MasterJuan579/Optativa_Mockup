import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { actividades } from '../data/actividades'

const Actividad = ({ id, onNavigate, onHome }) => {
  const [isVisible, setIsVisible] = useState(false)
  
  const actividad = actividades.find(a => a.id === id)
  const hasPrev = id > 1
  const hasNext = id < actividades.length

  // Animación de entrada
  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [id])

  // Extraer ID del video de YouTube
  const getYoutubeId = (url) => {
    if (!url) return null
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/)
    return match ? match[1] : null
  }

  const youtubeId = getYoutubeId(actividad?.youtube)

  if (!actividad) return null

  return (
    <div className="min-h-screen bg-dark-blue relative overflow-hidden">
      {/* Líneas de cuaderno */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-white/5"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-red-500/20" />
      </div>

      {/* Contenido */}
      <div className={`relative z-10 min-h-screen flex flex-col px-6 md:px-12 lg:px-24 py-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header con navegación */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onHome}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
          >
            <Home className="w-5 h-5" />
            <span className="font-handwritten text-xl">Inicio</span>
          </button>
          
          <span className="font-handwritten text-white/40 text-xl">
            {id} / {actividades.length}
          </span>
        </div>

        {/* Número de actividad */}
        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <span className="font-handwritten text-8xl md:text-9xl text-white/10">
            {String(id).padStart(2, '0')}
          </span>
        </div>

        {/* Título - Más separado del número */}
        <h1 className={`font-handwritten text-5xl md:text-6xl lg:text-7xl text-white mt-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          {actividad.titulo}
        </h1>

        {/* Contenido principal */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 mb-8">
          {/* Columna izquierda - Descripción más grande */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-handwritten text-3xl md:text-4xl text-white/80 leading-relaxed">
              {actividad.descripcion}
            </p>
          </div>

          {/* Columna derecha - Media */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Video de YouTube */}
            {youtubeId && (
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10 mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={actividad.titulo}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Espacio para imagen */}
            {actividad.imagen ? (
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10">
                <img
                  src={actividad.imagen}
                  alt={actividad.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : !youtubeId && (
              <div className="aspect-video w-full rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center">
                <span className="font-handwritten text-white/40 text-xl">
                  Espacio para imagen
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Navegación inferior */}
        <div className={`flex items-center justify-between pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Botón Anterior */}
          <button
            onClick={() => hasPrev && onNavigate(id - 1)}
            className={`flex items-center gap-3 group ${hasPrev ? 'text-white/60 hover:text-white' : 'text-white/20 cursor-not-allowed'} transition-colors duration-300`}
            disabled={!hasPrev}
          >
            <ChevronLeft className={`w-6 h-6 ${hasPrev ? 'group-hover:-translate-x-1' : ''} transition-transform duration-300`} />
            <span className="font-handwritten text-2xl">Anterior</span>
          </button>

          {/* Indicadores */}
          <div className="flex gap-2">
            {actividades.map((_, index) => (
              <button
                key={index}
                onClick={() => onNavigate(index + 1)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${id === index + 1 ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={() => hasNext && onNavigate(id + 1)}
            className={`flex items-center gap-3 group ${hasNext ? 'text-white/60 hover:text-white' : 'text-white/20 cursor-not-allowed'} transition-colors duration-300`}
            disabled={!hasNext}
          >
            <span className="font-handwritten text-2xl">Siguiente</span>
            <ChevronRight className={`w-6 h-6 ${hasNext ? 'group-hover:translate-x-1' : ''} transition-transform duration-300`} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Actividad