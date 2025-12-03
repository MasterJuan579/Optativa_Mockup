import { useEffect, useState } from 'react'
import './LoadingScreen.css'

const MIN_DURATION = 3500

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0)
  const [startTime] = useState(Date.now())
  const [fadeOut, setFadeOut] = useState(false)
  const [hideBar, setHideBar] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [done, setDone] = useState(false)

  // Simular progreso de carga más lento
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Incremento más pequeño y variable
        const increment = Math.random() * 8 + 2
        return Math.min(prev + increment, 100)
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  // Manejar la secuencia de animaciones cuando llega a 100%
  useEffect(() => {
    if (progress >= 100) {
      const elapsed = Date.now() - startTime
      const delay = Math.max(MIN_DURATION - elapsed, 0)

      setTimeout(() => setFadeOut(true), delay + 300)
      setTimeout(() => setHideBar(true), delay + 1100)
      setTimeout(() => setShowWelcome(true), delay + 1300)
      setTimeout(() => {
        setDone(true)
        onFinish()
      }, delay + 2800)
    }
  }, [progress, startTime, onFinish])

  if (done) return null

  return (
    <div className="loading-container">
      {!hideBar && (
        <div className={`loading-content ${fadeOut ? 'fade-out' : ''}`}>
          <div className="full-width-bar">
            <div
              className="full-width-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="percent-centered">{Math.floor(progress)}%</div>
        </div>
      )}
      {showWelcome && <div className="loading-welcome">Welcome</div>}
    </div>
  )
}

export default LoadingScreen