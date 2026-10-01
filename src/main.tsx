import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NoirPage } from './components/NoirPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NoirPage />
  </StrictMode>,
)
