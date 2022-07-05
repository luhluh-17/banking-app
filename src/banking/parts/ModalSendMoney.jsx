import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Transaction from '../../js/classes/transaction'
import User from '../../js/classes/user'
import { getUser, findUserIndex, saveData } from '../../js/utils/localstorage'

function ModalSendMoney({
  sender,
  onSenderChange,
  users,
  onUsersChange,
  isOpen,
  onToggleChange,
}) {
  const [receiver, setReceiver] = useState({ id: -1 })
  const idRef = useRef(null)
  const amountRef = useRef(null)

  const toggleDialog = () => onToggleChange(bool => !bool)
  const closeDialog = () => onToggleChange(false)

  const updateSender = (id, amount) => {
    let updatedBalance = Number(sender.balance) - amount
    if (updatedBalance < 0) {
      alert('insufficient balance')
      return
    }

    const receiver = getUser(id)
    const transactId = new Date().getTime()
    const transaction = new Transaction(
      transactId,
      `Send Money to ${receiver.name}`,
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

  const updateReceiver = (id, amount) => {
    let updatedBalance = Number(sender.balance) + amount

    const receiver = getUser(id)

    const transactId = new Date().getTime()
    const transaction = new Transaction(
      transactId,
      `Receive Money from ${sender.name}`,
      'Posted',
      amount
    )

    setReceiver(
      new User(
        receiver.id,
        receiver.firstName,
        receiver.lastName,
        updatedBalance,
        receiver.email,
        receiver.pass,
        receiver.expenses,
        [...receiver.transactions, transaction]
      )
    )
  }

  const resetState = () => {
    idRef.current.value = ''
    amountRef.current.value = ''
  }

  const handleSubmit = event => {
    event.preventDefault()

    const id = Number(idRef.current.value)
    const amount = Number(amountRef.current.value)
    setReceiver(getUser(id))

    updateReceiver(id, amount)
    updateSender(id, amount)
    resetState()
    closeDialog()
  }

  useEffect(() => {
    onUsersChange(state => {
      const newState = state
      const senderIdx = findUserIndex(sender.id)
      newState[senderIdx] = sender

      if (receiver.id !== -1) {
        const receiverIdx = findUserIndex(receiver.id)
        newState[receiverIdx] = receiver
      }

      saveData(newState)
      return newState
    })
  }, [sender])

  return (
    <Modal title='Send Money' isOpen={isOpen} onClose={closeDialog}>
      <form onSubmit={handleSubmit} className='flex-col'>
        <div className='col'>
          <label className='form-label'>Receiver</label>
          <input
            className='form-input'
            type='number'
            placeholder='Account Number'
            ref={idRef}
          />
        </div>
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
        <div className='dialog-btn-container'>
          <Button text='Cancel' className='btn' onClick={toggleDialog} />
          <Button type='submit' text='Send' className='btn' />
        </div>
      </form>
    </Modal>
  )
}

export default ModalSendMoney
