import React from 'react'
import { createRoot } from 'react-dom/client'
import './core.scss'

const App: React.FunctionComponent = () => {
  return <>App: React.FunctionComponent</>
}

createRoot(document.getElementById('app')).render(<App />)