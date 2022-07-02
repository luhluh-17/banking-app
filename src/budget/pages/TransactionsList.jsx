import React, { useContext } from 'react'
import TransactionRow from '../components/TransactionRow'
import { UserContext } from '../helper/Context'
const TransactionsList = () => {
  const { user } = useContext(UserContext)
  return (
    <div className='transactions-page'>
      <div>
        <table className='budget-table-transactions'>
          <thead>
            <tr>
              <th>DATE</th>
              <th>REFERENCE NO.</th>
              <th>DESCRIPTION</th>
              <th>STATUS</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {user.transactions.map(obj => {
              return <TransactionRow {...obj} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionsList
