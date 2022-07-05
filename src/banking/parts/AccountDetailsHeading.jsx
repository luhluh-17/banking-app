import React from 'react'

function AccountDetailsHeading({ user }) {
  return (
      <div className='account-details'>
        <div>
          <h2>{user.name}</h2>
          <p>{user.id}</p>
          <p>{user.email}</p>
        </div>

        <div>
          <h2 className='bal'>{user.formattedBalance}</h2>
          <h4>Current Balance</h4>
        </div>
      </div>
  )
}

export default AccountDetailsHeading
