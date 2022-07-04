import React from 'react'
import { useNavigate }  from 'react-router-dom'

function TableItem({ id, name, email, balance, callback }) {
  const navigate = useNavigate()
  const goToAccount = () => navigate(`/dashboard-employee/accounts/${id}`)
  return (
    <tr onClick={goToAccount}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{balance}</td>
    </tr>
  )
}

export default TableItem
