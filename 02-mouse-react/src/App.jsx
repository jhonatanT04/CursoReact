import { useEffect, useState } from 'react'

import './App.css'

const FollowMause = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('Efecto', { enable })

    const hadleMove = (event) => {
      const { clientX, clientY } = event

      setPosition({ x: clientX, y: clientY })
    }
    if (enable) {
      window.addEventListener('pointermove', hadleMove)
    }

    return () => {
      window.removeEventListener('pointermove', hadleMove)
      console.log("Clenap")
    }

  }, [enable])
  
  return (
    <main>
    { enable && <div style={{
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid #fff',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 50,
      height: 50,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}
    /> }
      <button onClick={() => { setEnable(!enable) }}>
        {enable ? 'Desactivar' : 'Activar'} seguimiento
      </button>
    </main>
  )
}


function App() {


  return (
    <>
      <FollowMause/>
    </>
  )
}

export default App
