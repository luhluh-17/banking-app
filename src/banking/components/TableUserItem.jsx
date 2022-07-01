import React from 'react'
import { Link } from 'react-router-dom'

function TableItem({ id, name, email, balance, callback }) {
  return (
    <tr>
      <td>
        <Link to={`/dashboard-employee/accounts/${id}`}>{id}</Link>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{balance}</td>
      <td>
        <button className='btn' onClick={callback}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default TableItem
