import React from 'react'
import Table from '../components/Table'

const Accounts = () => {
  return (
    <main>
      <input type='text' placeholder='Searchbar'></input>
      <Table />
      <button className='btn fab'>
        <div className='flex-row-c'>
          <span class='material-symbols-outlined'>add</span>
          <span>Create User</span>
        </div>
      </button>
    </main>
  )
}

export default Accounts
