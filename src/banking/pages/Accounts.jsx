import React, { useRef, useState, useEffect } from 'react'
import Fab from '../components/Fab'
import Modal from '../components/Modal'
import Table from '../components/Table'
import User from '../../js/classes/user'
import { KEY_USERS } from '../../js/variables'

const Accounts = () => {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const balanceRef = useRef(null)

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const toggleDialog = () => setIsDialogOpen(bool => !bool)
  const closeDialog = () => setIsDialogOpen(false)

  const list =
    localStorage.getItem(KEY_USERS) !== null
      ? JSON.parse(localStorage.getItem(KEY_USERS))
      : []
  const [users, setUsers] = useState(list)

  useEffect(
    () => localStorage.setItem(KEY_USERS, JSON.stringify(users)),
    [users]
  )

  const addItem = (firstName, lastName, balance, email) => {
    const id = new Date().getTime()
    const user = new User(id, firstName, lastName, balance, email)

    setUsers(state => [...state, user])
  }

  const resetState = () => {
    firstNameRef.current.value = ''
    lastNameRef.current.value = ''
    emailRef.current.value = ''
    balanceRef.current.value = ''
  }

  const handleSubmit = event => {
    event.preventDefault()

    // Show Error
    if (firstNameRef.current.value === '') return
    if (lastNameRef.current.value === '') return
    if (emailRef.current.value === '') return

    addItem(
      firstNameRef.current.value,
      lastNameRef.current.value,
      balanceRef.current.value,
      emailRef.current.value
    )

    resetState()
  }

  return (
    <>
      <main>
        <input type='text' placeholder='Searchbar'></input>
        <Table list={users} />
      </main>

      <Fab icon='add' text='Add User' onClick={toggleDialog} />

      <Modal
        className='flex-col'
        title='Add User'
        isOpen={isDialogOpen}
        onRequestClose={closeDialog}
      >
        <form onSubmit={handleSubmit} className='flex-col'>
          <div>
            <label className='form-label'>Name</label>
            <div className='flex-row'>
              <input
                className='form-input'
                type='text'
                placeholder='First'
                ref={firstNameRef}
              />
              <input
                className='form-input'
                type='text'
                placeholder='Last'
                ref={lastNameRef}
              />
            </div>
          </div>
          <div>
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              placeholder='Email Address'
              ref={emailRef}
            />
          </div>
          <div>
            <label className='form-label'>Balance</label>
            <input
              className='form-input'
              type='number'
              placeholder='Initial Amount'
              ref={balanceRef}
            />
          </div>
          <div className='dialog-btn-container'>
            <button className='btn-cancel' onClick={closeDialog}>
              Cancel
            </button>
            <button type='submit' className='btn-secondary'>
              Create
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default Accounts
