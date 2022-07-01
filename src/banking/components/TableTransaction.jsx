import React from 'react'
import Transaction from '../../js/classes/transaction'
import Button from './Button'
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
      <div className='btn-container-header'>
        <h3>{title}</h3>
        <div className='flex-row'>
          <Button
            className={'btn-primary'}
            text='Update Balance'
            onClick={() => console.log('tesr')}
          />
          <Button
            className={'btn-primary'}
            text='Send Money'
            onClick={() => console.log('tesr')}
          />
        </div>
      </div>

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
