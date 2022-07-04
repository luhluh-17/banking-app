import React, { useRef, useState, useEffect } from 'react'
import Modal from '../components/Modal'
import TableUser from '../components/TableUser'
import User from '../../js/classes/user'
import { KEY_USERS, getAllUsers } from '../../js/utils/localstorage'
import Button from '../components/Button'

const Accounts = () => {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const balanceRef = useRef(null)

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const toggleDialog = () => setIsDialogOpen(bool => !bool)
  const closeDialog = () => setIsDialogOpen(false)

  const [users, setUsers] = useState(getAllUsers())

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

  function Form() {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col'>
              <label>First Name</label>
              <input
                type='text'
                placeholder='First Name'
                ref={firstNameRef}
              />
            </div>
            <div className='col'>
              <label>Last Name</label>
              <input
                type='text'
                placeholder='Last Name'
                ref={lastNameRef}
              />
            </div>
          </div>   
              
          <div className='row'>
            <div className='col'>
              <label className=''>Email</label>
              <input
                type='email'
                placeholder='Email Address'
                ref={emailRef}
              />
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
            <Button
              text='Cancel'
              className='btn'
              onClick={toggleDialog}
            />
            <Button type='submit' text='Create' className='btn' />
          </div>
        </form>
      </>
    )
  }

  return (
    <>
      <main>
        <h2 className='title'>Accounts</h2> 
        <div className='search-div'>
          <input type='text' placeholder='🔎︎' className='search-bar'></input>
        </div>
        <TableUser list={users} />
      </main>

      <Button
        icon='add'
        text='Add User'
        className='btn'
        onClick={toggleDialog}
      />

      <Modal title='Add User' isOpen={isDialogOpen} onClose={closeDialog}>
        <Form />
      </Modal>
    </>
  )
}

export default Accounts
