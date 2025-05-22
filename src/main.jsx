import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider dir='rtl'>

      <BrowserRouter>

        <App />

      </BrowserRouter>

    </ThemeProvider>

  </StrictMode>,
)
