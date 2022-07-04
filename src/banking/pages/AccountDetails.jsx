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
      <main>
        <div className='btn-container'>
          <div>
          <span className="material-symbols-outlined icon" onClick={() => navigate(-1)}>edit</span>
          <span className="material-symbols-outlined icon" onClick={() => navigate(-1)}>delete</span>
          </div>
          <span className="material-symbols-outlined icon" onClick={() => navigate(-1)}>arrow_back</span>
        </div>

        <section>
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
        </section>

        <section className='transactions'>
          <h2 className='title'>Transactions</h2>
          <div className='btn-container'>
            <Button
              className='btn'
              text='Save Transaction'
              onClick={() =>
                localStorage.setItem(KEY_USERS, JSON.stringify(users))
              }
            />
            <Button
              className={'btn'}
              text='Update Balance'
              onClick={toggleDialog}
            />
            <Button
              className={'btn'}
              text='Send Money'
              onClick={toggleDialog}
            />
          </div>

          <TableTransaction list={user.transactions} />
        </section>
      </main>

      <Modal title='Update Balance' isOpen={isDialogOpen} onClose={closeDialog}>
        <form>
          <div className='col'>
            <label className='form-label'>Amount</label>
            <input
              className='form-input'
              type='number'
              placeholder='Enter Amount'
              step={'.01'}
              ref={amountRef}
            />
          </div>
          <div>
            <Button
              text='Cancel'
              className='btn'
              onClick={toggleDialog}
            />
            <Button
              text='Deposit'
              className='btn'
              onClick={() => handleUpdate('Deposit')}
            />
            <Button
              text='Withdraw'
              className='btn'
              onClick={() => handleUpdate('Withdraw')}
            />
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AccountDetails
