import React from 'react'
import { useParams } from 'react-router-dom'
import User from '../../js/classes/user'
import { KEY_USERS } from '../../js/variables'

function AccountDetails() {
  const users = JSON.parse(localStorage.getItem(KEY_USERS))
  const { userId } = useParams()
  const obj = users.find(item => item.id === parseInt(userId))

  const user = new User(
    obj.id,
    obj.firstName,
    obj.lastName,
    obj.balance,
    obj.email,
    obj.password,
    obj.expenses,
    obj.transactions
  )

  return (
    <main>
      <h1>{user.name}</h1>
      <h2>{user.formattedBalance}</h2>
      <h2>{user.email}</h2>
    </main>
  )
}

export default AccountDetails
