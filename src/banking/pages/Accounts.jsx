import React, { useRef, useState } from 'react'
import Fab from '../components/Fab'
import Table from '../components/Table'
import User from '../../js/classes/user'

const Accounts = () => {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const balanceRef = useRef(null)

  const [users, setUsers] = useState([])

  const addItem = (firstName, lastName, balance, email) => {
    const user = new User(firstName, lastName, balance, email)

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

      <form onSubmit={handleSubmit} className='flex-col form'>
        <div>
          <label className='form-label'>First Name</label>
          <input className='form-input' type='text' ref={firstNameRef} />
        </div>
        <div>
          <label className='form-label'>Last Name</label>
          <input className='form-input' type='text' ref={lastNameRef} />
        </div>
        <div>
          <label className='form-label'>Email</label>
          <input className='form-input' type='email' ref={emailRef} />
        </div>
        <div>
          <label className='form-label'>Balance</label>
          <input className='form-input' type='number' ref={balanceRef} />
        </div>
        <Fab icon='add' text='Create User' />
      </form>
    </>
  )
}

export default Accounts
