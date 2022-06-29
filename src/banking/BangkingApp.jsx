import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './layout/Dashboard'
import Overview from './pages/Overview'
import Accounts from './pages/Accounts'
import AccountDetails from './pages/AccountDetails'
import Transactions from './pages/Transactions'
import Error from './pages/Error'

const BankingApp = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Landing />} />
        <Route path='login' element={<Login />} />

        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path='accounts' element={<Accounts />} />
          <Route path='accounts/:userId' element={<AccountDetails />} />
          <Route path='transactions' element={<Transactions />} />
        </Route>
      </Route>

      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default BankingApp
