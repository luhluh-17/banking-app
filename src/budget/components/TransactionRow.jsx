import React from 'react'

const TransactionRow = ({ id, description, status, amount }) => {
  const newDate = new Date(id)
  const formatCurrency = number => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PHP',
    }).format(number)
  }
  return (
    <tr>
      <td>{newDate.toLocaleString()}</td>
      <td>{id}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>{formatCurrency(amount)}</td>
    </tr>
  )
}

export default TransactionRow
