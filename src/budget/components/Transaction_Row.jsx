import React from 'react'

const Transaction_Row = ({id, desc, status, date}) => {
  return (
    <tr>
        <td>{date}</td>
        <td>{id}</td>
        <td>{desc}</td>
        <td>{status}</td>
    </tr>
  )
}

export default Transaction_Row