import React from 'react'
import { useParams } from 'react-router-dom'
import users from '../data/users'

function AccountDetails() {
  const { userId } = useParams()
  const user = users.find(item => item.id === parseInt(userId))

  return (
    <main>
      <div>{user.firstName}</div>
    </main>
  )
}

export default AccountDetails
