import { useEffect, useState } from 'react'
import './Curtain.css'

const Curtain = ({ onFinish }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Pequeño delay antes de abrir
    const openTimer = setTimeout(() => {
      setOpen(true)
    }, 100)

    // Espera a que termine la animación para llamar onFinish
    const finishTimer = setTimeout(() => {
      onFinish()
    }, 1800)

    return () => {
      clearTimeout(openTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish])

  return (
    <div className="curtain-wrapper">
      <div className={`curtain left ${open ? 'open' : ''}`}></div>
      <div className={`curtain right ${open ? 'open' : ''}`}></div>
    </div>
  )
}

export default Curtain