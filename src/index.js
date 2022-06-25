import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Login from './pages/Login'
import Main from './pages/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
