import React from 'react'
import Fab from '../components/Fab'
import Table from '../components/Table'

const Accounts = () => {
  return (
    <main>
      <input type='text' placeholder='Searchbar'></input>
      <Table />
      <Fab
        icon='add'
        text='Create User'
        cb={() => {
          alert('show dialog')
        }}
      />
    </main>
  )
}

export default Accounts
