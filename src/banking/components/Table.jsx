import React from 'react'
import users from '../data/users'
import TableItem from './TableItem'

const Table = () => {
  const createTableItem = user => {
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
          <th>Name</th>
          <th>Email</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>{users.map(createTableItem)}</tbody>
    </table>
  )
}

export default Table
