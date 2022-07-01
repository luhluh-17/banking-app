import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './banking/pages/Landing'
import EmployeeLogin from './banking/pages/Login'
import CustomerLogin from './budget/pages/Login'

import Dashboard from './banking/layout/Dashboard'
import Overview from './banking/pages/Overview'
import Accounts from './banking/pages/Accounts'
import AccountDetails from './banking/pages/AccountDetails'
import Transactions from './banking/pages/Transactions'

import CustomerDashboard from './budget/components/Dashboard'
import CustomerOverview from './budget/pages/Overview'
import CustomerTransactions from './budget/pages/TransactionsList'
import CustomerSendMoney from './budget/pages/SendMoney'
import CustomerExpenses from './budget/pages/Expenses'

import Error from './banking/pages/Error'
const App = () => {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="employee-login" element={<EmployeeLogin />} />
      <Route path="customer-login" element={<CustomerLogin />} />

      <Route path="dashboard-employee" element={<Dashboard />}>
        <Route index element={<Overview />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="accounts/:userId" element={<AccountDetails />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>

      <Route path="dashboard-customer" element={<CustomerDashboard />}>
        <Route path="overview" element={<CustomerOverview />} />
        <Route path="transactions" element={<CustomerTransactions />} />
        <Route path="send" element={<CustomerSendMoney />} />
        <Route path="expenses" element={<CustomerExpenses />} />
      </Route>
    </Routes>
  )
}

export default App
