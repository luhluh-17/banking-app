import React, { useContext } from 'react'
import TransactionRow from '../components/TransactionRow'
import { UserContext } from '../helper/Context'
const TransactionsList = () => {
  const { user } = useContext(UserContext)
  return (
    <main>
      <h2 className='title'>Transactions</h2>
      <div className='table-div transactions'>
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
            {user.transactions.map((obj, index) => {
              return <TransactionRow key={index} {...obj} />
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default TransactionsList
