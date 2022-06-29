import React from 'react'
import { Link } from 'react-router-dom'

function TableItem({ id, name, email, balance }) {
  return (
    <tr>
      <td>
        <Link to={`/dashboard/accounts/${id}`}>{name}</Link>
      </td>
      <td>{email}</td>
      <td>{balance}</td>
    </tr>
  )
}

export default TableItem
