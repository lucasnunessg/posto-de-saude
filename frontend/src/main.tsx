import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import FormularioMedico from './formularioMedico.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <FormularioMedico />
  </React.StrictMode>,
)
