import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import EmployeeLogin from './pages/Login'
import CustomerLogin from '../budget/pages/Login'
import Dashboard from './layout/Dashboard'
import Overview from './pages/Overview'
import Accounts from './pages/Accounts'
import AccountDetails from './pages/AccountDetails'
import Transactions from './pages/Transactions'
import Error from './pages/Error'

const BankingApp = () => {
  return (
  
      <Route path="dashboard-employee" element={<Dashboard />}>
        <Route index element={<Overview />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="accounts/:userId" element={<AccountDetails />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>
  
  )
}

export default BankingApp
