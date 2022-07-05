import React from 'react'
import { getAllTransactions } from '../../js/utils/localstorage'
import TableTransaction from '../components/TableTransaction'

function Transactions() {
  return (
    <main>
      <div className='sticky'>
      <h2 className='title'>Transactions</h2>
      <TableTransaction list={getAllTransactions()} />
      </div>
    </main>
  )
}

export default Transactions
