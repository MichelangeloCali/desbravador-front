import { Button } from '@mui/material'
import { useState } from 'react'
import './App.css'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>

      <div>{count}</div>

      <Button onClick={() => setCount((prev) => prev + 1)}>CLique</Button>
    </div>
  )
}

export default App
