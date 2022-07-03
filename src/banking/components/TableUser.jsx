import React from 'react'
import Table from './Table'
import TableItem from './TableUserItem'
import User from '../../js/classes/user'

const TABLE_HEAD = ['ID', 'NAME', 'EMAIL', 'BALANCE']

const TableUser = ({ list }) => {
  const createTableItem = item => {
    const user = new User(
      item.id,
      item.firstName,
      item.lastName,
      item.balance,
      item.email,
      item.password,
      item.expenses,
      item.transactions
    )

    return (
      <TableItem
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        balance={user.formattedBalance}
      />
    )
  }

  return (
    <>
      <input type='text' placeholder='Searchbar' />
      <Table headings={TABLE_HEAD} data={list.map(createTableItem)} />
    </>
  )
}

export default TableUser
