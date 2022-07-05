import React from 'react'
import { useNavigate } from 'react-router-dom'
import Table from './Table'
import User from '../../js/classes/user'

const TABLE_HEAD = ['ID', 'NAME', 'EMAIL', 'BALANCE']

const TableUser = ({ list }) => {
  const navigate = useNavigate()
  const createTableItem = item => {
    const user = new User(
      item.id,
      item.firstName,
      item.lastName,
      item.balance,
      item.email,
      item.password,
      item.expenses,
      item.transactions
    )

    const goToAccount = () =>
      navigate(`/dashboard-employee/accounts/${user.id}`)

    return (
      <tr key={user.id} onClick={goToAccount}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.formattedBalance}</td>
      </tr>
    )
  }

  return (
    <>
      <Table headings={TABLE_HEAD} data={list.map(createTableItem)} />
    </>
  )
}

export default TableUser
