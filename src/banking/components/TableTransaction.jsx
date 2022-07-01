import React from 'react'
import Transaction from '../../js/classes/transaction'
import TableTransactionItem from './TableTransactionItem'

const TableTransaction = ({ title, list }) => {
  const createTableItem = item => {
    const transaction = new Transaction(
      item.id,
      item.description,
      item.status,
      item.amount
    )

    return (
      <TableTransactionItem
        key={transaction.id}
        id={transaction.id}
        desc={transaction.description}
        status={transaction.status}
        amount={transaction.amount}
      />
    )
  }

  return (
    <section className='mt-1'>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{list.map(createTableItem)}</tbody>
      </table>
    </section>
  )
}

export default TableTransaction
