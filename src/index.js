import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import BangkingApp from './banking/BangkingApp'

import './css/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BangkingApp />
    </BrowserRouter>
  </React.StrictMode>
)