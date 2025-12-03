import { useState, useCallback } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Curtain from './components/Curtain'
import PageTransition from './components/PageTransition'
import Landing from './pages/Landing'
import Actividad from './pages/Actividad'
import { getActividadTitulo } from './data/actividades'

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [curtainComplete, setCurtainComplete] = useState(false)
  const [currentPage, setCurrentPage] = useState('landing')
  const [nextPage, setNextPage] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleLoadingFinish = () => {
    setLoadingComplete(true)
  }

  const handleCurtainFinish = () => {
    setCurtainComplete(true)
  }

  // Función para navegar con transición
  const navigateTo = useCallback((page) => {
    if (isTransitioning) return
    setNextPage(page)
    setIsTransitioning(true)
  }, [isTransitioning])

  // Cambia la página mientras la cortina cubre
  const handlePageChange = useCallback(() => {
    setCurrentPage(nextPage)
  }, [nextPage])

  // Cuando la transición termina completamente
  const handleTransitionComplete = useCallback(() => {
    setNextPage(null)
    setIsTransitioning(false)
  }, [])

  const handleStart = () => {
    navigateTo(1)
  }

  const handleNavigate = (actividadId) => {
    navigateTo(actividadId)
  }

  const handleHome = () => {
    navigateTo('landing')
  }

  return (
    <>
      {/* Loading Screen */}
      {!loadingComplete && <LoadingScreen onFinish={handleLoadingFinish} />}
      
      {/* Curtain inicial */}
      {loadingComplete && !curtainComplete && (
        <Curtain onFinish={handleCurtainFinish} />
      )}

      {/* Transición entre páginas */}
      <PageTransition 
        isActive={isTransitioning} 
        onPageChange={handlePageChange}
        onComplete={handleTransitionComplete}
        title={getActividadTitulo(nextPage)}
      />
      
      {/* Landing */}
      {loadingComplete && currentPage === 'landing' && (
        <Landing onStart={handleStart} />
      )}

      {/* Actividades */}
      {loadingComplete && typeof currentPage === 'number' && (
        <Actividad 
          id={currentPage} 
          onNavigate={handleNavigate}
          onHome={handleHome}
        />
      )}
    </>
  )
}

export default App