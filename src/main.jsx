import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ParallaxProvider>
      <div className="parallax-container">
        <App />
      </div>
    </ParallaxProvider>
    </BrowserRouter>
  </StrictMode>,
)
