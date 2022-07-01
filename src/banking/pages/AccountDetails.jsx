import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Modal from '../components/Modal'
import TableTransaction from '../components/TableTransaction'
import User from '../../js/classes/user'
import Transaction from '../../js/classes/transaction'
import { KEY_USERS, getAllUsers } from '../../js/utils/localstorage'

function AccountDetails() {
  const amountRef = useRef(null)
  const navigate = useNavigate()

  const { userId } = useParams()
  const obj = getAllUsers().find(item => item.id === parseInt(userId))

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const toggleDialog = () => setIsDialogOpen(bool => !bool)
  const closeDialog = () => setIsDialogOpen(false)

  const selectedUser = new User(
    obj.id,
    obj.firstName,
    obj.lastName,
    obj.balance,
    obj.email,
    obj.password,
    obj.expenses,
    obj.transactions
  )

  const [user, setUser] = useState(selectedUser)
  const [users, setUsers] = useState(getAllUsers())
  console.log(users)
  const handleUpdate = action => {
    if (amountRef.current.value === '') return

    const amount = parseInt(amountRef.current.value)
    let updatedBalance = parseInt(user.balance)

    if (action === 'Withdraw') {
      updatedBalance -= amount
      if (updatedBalance < 0) {
        alert('insufficient balance')
        return
      }
    } else {
      updatedBalance += amount
    }

    const id = new Date().getTime()
    const transaction = new Transaction(id, action, 'Posted', amount)

    setUser(state => {
      return new User(
        state.id,
        state.firstName,
        state.lastName,
        updatedBalance,
        state.email,
        state.pass,
        state.expenses,
        [...state.transactions, transaction]
      )
    })

    amountRef.current.value = ''
    closeDialog()
  }

  useEffect(() => {
    setUsers(state => {
      const idx = getAllUsers().findIndex(u => u.id === user.id)
      state[idx] = user
      return state
    })
  }, [user])

  useEffect(
    state => {
      console.log(state)
    },
    [users]
  )

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

      <Modal title='Update Balance' isOpen={isDialogOpen} onClose={closeDialog}>
        <form>
          <div>
            <label className='form-label'>Amount</label>
            <input
              className='form-input'
              type='number'
              placeholder='Enter Amount'
              step={'.01'}
              ref={amountRef}
            />
          </div>
          <div className='dialog-btn-container'>
            <Button
              text='Cancel'
              className='btn-primary'
              onClick={toggleDialog}
            />
            <Button
              text='Deposit'
              className='btn-primary'
              onClick={() => handleUpdate('Deposit')}
            />
            <Button
              text='Withdraw'
              className='btn-primary'
              onClick={() => handleUpdate('Withdraw')}
            />
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AccountDetails
