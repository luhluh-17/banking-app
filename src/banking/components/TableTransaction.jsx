import React from 'react'
import Table from './Table'
import Transaction from '../../js/classes/transaction'

const TABLE_HEAD = ['ID', 'DATE', 'DESCRIPTION', 'STATUS', 'AMOUNT']

const TableTransaction = ({ list, children }) => {
  const createTableItem = item => {
    const transaction = new Transaction(
      item.id,
      item.description,
      item.status,
      item.amount
    )

    const date = new Date(transaction.id)
    return (
      <tr key={transaction.id}>
        <td>{transaction.id}</td>
        <td>{date.toLocaleString()}</td>
        <td>{transaction.description}</td>
        <td>{transaction.status}</td>
        <td>{transaction.formattedAmount}</td>
      </tr>
    )
  }

  return (
    <section>
      <div className='btn-container-header'>
        <h3>Transactions</h3>
        {children}
      </div>
      <Table headings={TABLE_HEAD} data={list.map(createTableItem)} />
    </section>
  )
}

export default TableTransaction
