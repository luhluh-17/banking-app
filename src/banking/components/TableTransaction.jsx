import React from 'react'
import Transaction from '../../js/classes/transaction'
import TableTransactionItem from './TableTransactionItem'

const TableTransaction = ({ list }) => {
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
  )
}

export default TableTransaction
