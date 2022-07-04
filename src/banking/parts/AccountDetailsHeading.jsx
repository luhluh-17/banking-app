import React from 'react'

function AccountDetailsHeading({ user }) {
  return (
    <section className='account-details'>
      <div className='flex-row'>
        <div>
          <h5>{user.id}</h5>
          <h2>{user.name}</h2>
          <h4>{user.email}</h4>
        </div>
      </div>
      <div>
        <h2>{user.formattedBalance}</h2>
        <h4>Current Balance</h4>
      </div>
    </section>
  )
}

export default AccountDetailsHeading
