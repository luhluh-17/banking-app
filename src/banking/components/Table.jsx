import React from 'react'
import TableItem from './TableItem'

const Table = ({ list }) => {
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
      <tbody>{list.map(createTableItem)}</tbody>
    </table>
  )
}

export default Table
