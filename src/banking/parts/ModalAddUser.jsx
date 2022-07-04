import React, { useRef } from 'react'
import User from '../../js/classes/user'
import Button from '../components/Button'
import Modal from '../components/Modal'

function ModalAddUser({ isOpen, onToggleChange, onUsersChange }) {
  const toggleDialog = () => onToggleChange(bool => !bool)
  const closeDialog = () => onToggleChange(false)

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const balanceRef = useRef(null)

  const addItem = (firstName, lastName, balance, email) => {
    const id = new Date().getTime()
    const user = new User(id, firstName, lastName, balance, email)

    onUsersChange(state => [...state, user])
  }

  const resetState = () => {
    firstNameRef.current.value = ''
    lastNameRef.current.value = ''
    emailRef.current.value = ''
    balanceRef.current.value = ''
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (firstNameRef.current.value === '') return
    if (lastNameRef.current.value === '') return
    if (emailRef.current.value === '') return

    addItem(
      firstNameRef.current.value,
      lastNameRef.current.value,
      Number(balanceRef.current.value),
      emailRef.current.value
    )

    resetState()
    closeDialog()
  }

  return (
    <Modal title='Add User' isOpen={isOpen} onClose={closeDialog}>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col'>
            <label>First Name</label>
            <input type='text' placeholder='First Name' ref={firstNameRef} />
          </div>
          <div className='col'>
            <label>Last Name</label>
            <input type='text' placeholder='Last Name' ref={lastNameRef} />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <label className=''>Email</label>
            <input type='email' placeholder='Email Address' ref={emailRef} />
          </div>
          <div className='col'>
            <label>Balance</label>
            <input
              className='form-input'
              type='number'
              placeholder='Initial Amount'
              step={'.01'}
              ref={balanceRef}
            />
          </div>
        </div>

        <div>
          <Button text='Cancel' className='btn' onClick={toggleDialog} />
          <Button type='submit' text='Create' className='btn' />
        </div>
      </form>
    </Modal>
  )
}

export default ModalAddUser
