import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './header.css'
import './footer.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
