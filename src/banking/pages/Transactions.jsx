import React from 'react'
import { getAllTransactions } from '../../js/utils/localstorage'
import TableTransaction from '../components/TableTransaction'

function Transactions() {
  return (
    <main>
      <h2 className='title'>Transactions</h2>
      <TableTransaction list={getAllTransactions()} />
    </main>
  )
}

export default Transactions
