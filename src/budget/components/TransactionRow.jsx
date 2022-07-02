import React from 'react'

const TransactionRow = ({ id, description, status, amount }) => {
  const newDate = new Date(id)
  return (
    <tr>
      <td>{newDate.toLocaleString()}</td>
      <td>{id}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default TransactionRow
