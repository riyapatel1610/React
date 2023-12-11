import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import crud_pratices from './crud_pratices'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <crud_pratices />     
      </>
  )
}

export default App
