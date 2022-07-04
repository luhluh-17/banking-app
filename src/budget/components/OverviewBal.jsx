import React, { useContext } from 'react'
import { UserContext } from '../helper/Context'

const OverviewBal = () => {
  const { user } = useContext(UserContext)

  const formatCurrency = number => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PHP',
    }).format(number)
  }

  return (
    <div className='balance'>
      <h2>{formatCurrency(user.balance)}</h2>
      <h4>Current Balance</h4>
      
    </div>
  )
}

export default OverviewBal

