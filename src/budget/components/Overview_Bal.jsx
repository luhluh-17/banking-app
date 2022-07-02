import React, { useContext } from 'react'
import { UserContext } from '../helper/Context'

const Overview_Bal = () => {
  const { user } = useContext(UserContext)

  const formatCurrency = number => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number)
  }
  return (
    <div className="balance">
      <h2>Current Balance</h2>
      <span>{formatCurrency(user.balance)}</span>
    </div>
  )
}

export default Overview_Bal
