import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import Login from './banking/pages/Login'
import Main from './banking/pages/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './banking/styles/index.css'

import Budget from './budget/Budget'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

=======
import { BrowserRouter } from 'react-router-dom'
import BangkingApp from './banking/BangkingApp'

import './banking/styles/index.css'

>>>>>>> main
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BangkingApp />
    </BrowserRouter>
  </React.StrictMode>
)
