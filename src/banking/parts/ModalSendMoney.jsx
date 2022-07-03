import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { getUser, getAllUsers } from '../../js/utils/localstorage'
import Transaction from '../../js/classes/transaction'
import User from '../../js/classes/user'

function ModalSendMoney({
  onUsersChange,
  sender,
  onSenderChange,
  isOpen,
  onDialogChange,
}) {
  const [receiver, setReceiver] = useState()

  const idRef = useRef(null)
  const amountRef = useRef(null)

  const updateSender = amount => {
    let updatedBalance = Number(sender.balance) - amount
    if (updatedBalance < 0) {
      alert('insufficient balance')
      return
    }

    const transactId = new Date().getTime()
    const transaction = new Transaction(
      transactId,
      `Send Money to ${sender.id}`,
      'Posted',
      amount
    )

    onSenderChange(state => {
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
  }

  const updateReceiver = amount => {
    let updatedBalance = Number(sender.balance) + amount

    const transactId = new Date().getTime()
    console.log('receiver', receiver)
    const transaction = new Transaction(
      transactId,
      `Receive Money from ${receiver.id}`,
      'Posted',
      amount
    )

    setReceiver(state => {
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
  }

  const resetState = () => {
    idRef.current.value = ''
    amountRef.current.value = ''
  }

  const toggleDialog = () => onDialogChange(bool => !bool)
  const closeDialog = () => onDialogChange(false)

  const handleSubmit = event => {
    event.preventDefault()

    const id = Number(idRef.current.value)
    const amount = Number(amountRef.current.value)

    setReceiver(getUser(id))

    updateSender(amount)
    resetState()
    closeDialog()
  }

  useEffect(() => {}, [receiver])

  return (
    <Modal title='Send Money' isOpen={isOpen} onClose={closeDialog}>
      <form onSubmit={handleSubmit} className='flex-col'>
        <div>
          <label className='form-label'>Receiver</label>
          <input
            className='form-input'
            type='number'
            placeholder='Account Number'
            ref={idRef}
          />
        </div>
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
          <Button text='Cancel' className='btn-cancel' onClick={toggleDialog} />
          <Button type='submit' text='Send' className='btn-secondary' />
        </div>
      </form>
    </Modal>
  )
}

export default ModalSendMoney
