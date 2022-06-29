import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import BangkingApp from './banking/BangkingApp'
import BUdget from './budget/Budget'
import './banking/styles/index.css'
import Budget from './budget/Budget'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Budget />
    </BrowserRouter>
  </React.StrictMode>
)
