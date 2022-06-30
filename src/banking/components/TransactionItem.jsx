import React from 'react'

function TransactionItem({ id, desc, status, amount }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{desc}</td>
      <td>{status}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default TransactionItem
