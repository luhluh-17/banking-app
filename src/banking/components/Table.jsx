import React from 'react'
import users from '../data/users'
import TableItem from './TableItem'

const Table = () => {
  const createTableItem = user => {
    return (
      <TableItem
        key={user.id}
        id={user.id}
        name={`${user.firstName} ${user.lastName}`}
        email={user.email}
        balance={user.balance}
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
