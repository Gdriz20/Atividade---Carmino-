import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pagina from './pagina.tsx'
import { BrowserRouter, Link } from 'react-router-dom'
import Rotas from './Rotas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Rotas/>
    </BrowserRouter>
  </StrictMode>
)
