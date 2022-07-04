import React, { useState, useEffect } from 'react'
import TableUser from '../components/TableUser'
import Button from '../components/Button'
import ModalAddUser from '../parts/ModalAddUser'
import { KEY_USERS, getAllUsers } from '../../js/utils/localstorage'

const Accounts = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const toggleDialog = () => setIsDialogOpen(bool => !bool)

  const [users, setUsers] = useState(getAllUsers())

  useEffect(
    () => localStorage.setItem(KEY_USERS, JSON.stringify(users)),
    [users]
  )

  return (
    <>
      <main>
        <h2 className='title'>Accounts</h2>
        <div className='input-div'>
          <input type='text' placeholder='🔎︎' className='input-field'></input>
        </div>
        <TableUser list={users} />
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
