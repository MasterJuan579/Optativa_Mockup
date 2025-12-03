import { useEffect, useState } from 'react'
import './PageTransition.css'

const PageTransition = ({ isActive, onPageChange, onComplete, title }) => {
  const [phase, setPhase] = useState('idle')
  const [titlePhase, setTitlePhase] = useState('hidden')

  useEffect(() => {
    if (isActive) {
      // Fase 1: Entra la cortina
      setPhase('entering')
      setTitlePhase('hidden')
      
      // Fase 2: Cortina cubre, mostrar título Y CAMBIAR PÁGINA
      const showTitleTimer = setTimeout(() => {
        setPhase('staying')
        setTitlePhase('visible')
        onPageChange() // Cambia la página mientras está cubierto
      }, 600)

      // Fase 3: Ocultar título
      const hideTitleTimer = setTimeout(() => {
        setTitlePhase('hiding')
      }, 1800)

      // Fase 4: Cortina sale
      const exitTimer = setTimeout(() => {
        setPhase('exiting')
      }, 2200)

      // Fase 5: Completado
      const completeTimer = setTimeout(() => {
        setPhase('idle')
        setTitlePhase('hidden')
        onComplete()
      }, 2800)

      return () => {
        clearTimeout(showTitleTimer)
        clearTimeout(hideTitleTimer)
        clearTimeout(exitTimer)
        clearTimeout(completeTimer)
      }
    }
  }, [isActive, onPageChange, onComplete])

  if (phase === 'idle') return null

  return (
    <div className={`page-transition ${phase}`}>
      {title && (
        <h2 className={`transition-title ${titlePhase}`}>
          {title}
        </h2>
      )}
    </div>
  )
}

export default PageTransition