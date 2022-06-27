import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './banking/pages/Login'
import Main from './banking/pages/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './banking/styles/index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
