import React from 'react'
import User from '../../js/classes/user'
import TableItem from './TableUserItem'

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
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Balance</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{list.map(createTableItem)}</tbody>
    </table>
  )
}

export default TableUser