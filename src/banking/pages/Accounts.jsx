import React, { useState, useEffect } from 'react'
import TableUser from '../components/TableUser'
import Button from '../components/Button'
import ModalAddUser from '../parts/ModalAddUser'
import { getAllUsers, saveData } from '../../js/utils/localstorage'

const Accounts = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [users, setUsers] = useState(getAllUsers())
  const [searchKeyword, setSearchKeyword] = useState('')

  const toggleDialog = () => setIsDialogOpen(bool => !bool)

  useEffect(() => {
    saveData(users)
    console.log('Accounts', users)
  }, [users])

  const handleSearch = e => {
    const val = e.target.value
    setSearchKeyword(val)
  }

  const filteredUsers = users.filter(
    user =>
      user.id.toString().toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.firstName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchKeyword.toLowerCase())
  )

  return (
    <>
      <main>
        <div className='sticky'>
          <h2 className='title'>Accounts</h2>
          <div className='input-div'>
            <input
              type='text'
              placeholder='🔎︎'
              className='input-field'
              value={searchKeyword}
              onChange={handleSearch}
            />
          </div>
        </div>
        <TableUser
          list={filteredUsers}
          users={users}
          onUsersChange={setUsers}
        />
      </main>

      <Button
        icon='add'
        text='Add User'
        className='btn float'
        onClick={toggleDialog}
      />

      <ModalAddUser
        isOpen={isDialogOpen}
        onToggleChange={setIsDialogOpen}
        onUsersChange={setUsers}
      />
    </>
  )
}

export default Accounts
