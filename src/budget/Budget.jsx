import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Overview from './pages/Overview'
import TransactionsList from './pages/TransactionsList'
import Expenses from './pages/Expenses'
import SendMoney from './pages/SendMoney'
import './App.css'

const Budget = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="overview" element={<Overview />} />
        <Route path="transactions" element={<TransactionsList />} />
        <Route path="send" element={<SendMoney />} />
        <Route path="expenses" element={<Expenses />} />
      </Route>
    </Routes>
  )
}

export default Budget
