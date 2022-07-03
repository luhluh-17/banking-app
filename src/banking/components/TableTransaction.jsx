import React from 'react'
import Table from './Table'
import Button from './Button'
import Transaction from '../../js/classes/transaction'
import { KEY_USERS } from '../../js/utils/localstorage'

const TABLE_HEAD = ['ID', 'DATE', 'DESCRIPTION', 'STATUS', 'AMOUNT']

const TableTransaction = ({ list, users, onToggleChange }) => {
  const handleSave = () =>
    localStorage.setItem(KEY_USERS, JSON.stringify(users))

  const toggleDialog = () => onToggleChange(bool => !bool)

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
    <section className='mt-1'>
      <div className='btn-container-header'>
        <h3>Transactions</h3>
        <div className='flex-row'>
          <Button
            className='btn-primary'
            text='Save Transaction'
            onClick={handleSave}
          />
          <Button
            className={'btn-primary'}
            text='Update Balance'
            onClick={toggleDialog}
          />
          <Button
            className={'btn-primary'}
            text='Send Money'
            onClick={toggleDialog}
          />
        </div>
      </div>
      <Table headings={TABLE_HEAD} data={list.map(createTableItem)} />
    </section>
  )
}

export default TableTransaction
