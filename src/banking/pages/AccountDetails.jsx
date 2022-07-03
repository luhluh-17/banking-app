import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import TableTransaction from '../components/TableTransaction'
import User from '../../js/classes/user'
import { KEY_USERS, getAllUsers } from '../../js/utils/localstorage'
import ModalUpdateBalance from '../parts/ModalUpdateBalance'

function AccountDetails() {
  const navigate = useNavigate()

  const { userId } = useParams()
  const _user = getAllUsers().find(item => item.id === parseInt(userId))

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const toggleDialog = () => setIsDialogOpen(bool => !bool)

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
  console.log(users)

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

        <section className='mt-1'>
          <div className='btn-container-header'>
            <h3>Transactions</h3>
            <div className='flex-row'>
              <Button
                className='btn-primary'
                text='Save Transaction'
                onClick={() =>
                  localStorage.setItem(KEY_USERS, JSON.stringify(users))
                }
              />
              <Button
                className={'btn-primary'}
                text='Update Balance'
                onClick={toggleDialog}
              />
              <Button
                className={'btn-primary'}
                text='Send Money'
                onClick={toggleDialog}
              />
            </div>
          </div>
          <TableTransaction list={user.transactions} />
        </section>
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
