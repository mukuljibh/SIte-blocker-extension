import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from '../Application/MainApp.jsx'
import './index.css'
import 'tailwindcss/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
)
