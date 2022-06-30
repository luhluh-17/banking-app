import React, { useContext } from 'react'
import Transaction_Row from '../components/Transaction_Row'
import { UserContext } from '../helper/Context'
const TransactionsList = () => {
  const { transactions } = useContext(UserContext)
  return (
    <div className="transactions-page">
      <div>
        <table>
          <thead>
            <tr>
              <th>DATE</th>
              <th>REFERENCE NO.</th>
              <th>DESCRIPTION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(obj => {
              return <Transaction_Row {...obj} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionsList
