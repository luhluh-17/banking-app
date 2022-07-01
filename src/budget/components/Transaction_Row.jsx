import React from 'react'

const Transaction_Row = ({id, description, status, date, amount}) => {
  return (
    <tr>
        <td>{date}</td>
        <td>{id}</td>
        <td>{description}</td>
        <td>{status}</td>
        <td>{amount}</td>
    </tr>
  )
}

export default Transaction_Row