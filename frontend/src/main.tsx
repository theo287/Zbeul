import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import TheoPage from './Pages/TheoPage.tsx'
import EstebanPage from './Pages/EstebanPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/theo" element={<TheoPage />} />
        <Route path="/esteban" element={<EstebanPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
