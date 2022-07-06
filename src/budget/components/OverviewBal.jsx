import React, { useContext } from 'react'
import { UserContext } from '../helper/Context'
import FormatCurrency from '../helper/FormatCurrency'

const OverviewBal = () => {
  const { user } = useContext(UserContext)

  return (
    <div className='balance'>
      <h2>{FormatCurrency(user.balance)}</h2>
      <h4>Current Balance</h4>
      
    </div>
  )
}

export default OverviewBal

