import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './base.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)