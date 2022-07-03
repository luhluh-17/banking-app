import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Button from '../components/Button'
import TableTransaction from '../components/TableTransaction'
import ModalUpdateBalance from '../parts/ModalUpdateBalance'
import AccountDetailsHeading from '../parts/AccountDetailsHeading'

import User from '../../js/classes/user'
import { KEY_USERS, getAllUsers } from '../../js/utils/localstorage'

function AccountDetails() {
  const navigate = useNavigate()

  const { userId } = useParams()
  const _user = getAllUsers().find(item => item.id === parseInt(userId))

  const selectedUser = new User(
    _user.id,
    _user.firstName,
    _user.lastName,
    _user.balance,
    _user.email,
    _user.password,
    _user.expenses,
    _user.transactions
  )

  const [user, setUser] = useState(selectedUser)
  const [users, setUsers] = useState(getAllUsers())

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    setUsers(state => {
      const idx = getAllUsers().findIndex(u => u.id === user.id)
      state[idx] = user
      return state
    })
  }, [user])

  // TODO: Fix use effect not storing data
  useEffect(() => {
    localStorage.setItem(KEY_USERS, JSON.stringify(users))
  }, [users])

  return (
    <>
      <main className='flex-col'>
        <div className='btn-container-header'>
          <Button
            icon={'arrow_back'}
            text='Back'
            className='btn-primary-border'
            onClick={() => navigate(-1)}
          />
          <div className='flex-row'>
            <Button
              icon={'edit'}
              text='Edit'
              className='btn-secondary-border'
              onClick={() => navigate(-1)}
            />
            <Button
              icon={'delete'}
              text='Delete'
              className='btn-danger-border'
              onClick={() => navigate(-1)}
            />
          </div>
        </div>

        <AccountDetailsHeading user={user} />
        <TableTransaction
          list={user.transactions}
          users={users}
          onToggleChange={setIsDialogOpen}
        />
      </main>
      <ModalUpdateBalance
        user={user}
        onUserChange={setUser}
        isOpen={isDialogOpen}
        onDialogChange={setIsDialogOpen}
      />
    </>
  )
}

export default AccountDetails
