import React from 'react'

function TableTransactionItem({ id, desc, status, amount }) {
  const date = new Date(id)
  return (
    <tr>
      <td>{id}</td>
      <td>{date.toLocaleString()}</td>
      <td>{desc}</td>
      <td>{status}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default TableTransactionItem
