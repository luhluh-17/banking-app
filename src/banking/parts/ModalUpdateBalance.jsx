import React, { useEffect, useRef } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import User from '../../js/classes/user'
import Transaction from '../../js/classes/transaction'
import { findUserIndex, saveData } from '../../js/utils/localstorage'

function ModalUpdateBalance({
  user,
  onUserChange,
  users,
  onUsersChange,
  isOpen,
  onToggleChange,
}) {
  const amountRef = useRef(null)
  const toggleDialog = () => onToggleChange(bool => !bool)
  const closeDialog = () => onToggleChange(false)

  const handleUpdate = action => {
    if (amountRef.current.value === '') return

    const amount = Number(amountRef.current.value)
    let updatedBalance = Number(user.balance)

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

    onUserChange(state => {
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
    onUsersChange(state => {
      const newState = state
      const idx = findUserIndex(user.id)
      newState[idx] = user
      saveData(newState)
      return newState
    })
  }, [user])

  // NOT WORKING
  // useEffect(()=> {
  //   saveData(users)
  // }, [users])

  return (
    <Modal title='Update Balance' isOpen={isOpen} onClose={closeDialog}>
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
          <Button text='Cancel' className='btn' onClick={toggleDialog} />
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
  )
}

export default ModalUpdateBalance
