import React, { useRef } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { getAllUsers, saveData } from '../../js/utils/localstorage'
import User from '../../js/classes/user'

function ModalEditUser({
  user,
  onUserChange,
  users,
  onUsersChange,
  isOpen,
  onToggleChange,
}) {
  const toggleDialog = () => onToggleChange(bool => !bool)
  const closeDialog = () => onToggleChange(false)

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)

  const updateItem = (firstName, lastName, email) => {
    onUsersChange(state => {
      const newState = state
      const idx = getAllUsers().findIndex(u => u.id === user.id)
      newState[idx] = {
        ...newState[idx],
        firstName: firstName,
        lastName: lastName,
        email: email,
      }
      saveData(newState)
      return newState
    })

    onUserChange(state => {
      return new User(
        state.id,
        firstName,
        lastName,
        state.balance,
        email,
        state.pass,
        state.expenses,
        state.transactions
      )
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (firstNameRef.current.value === '') return
    if (lastNameRef.current.value === '') return
    if (emailRef.current.value === '') return

    updateItem(
      firstNameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value
    )

    closeDialog()
  }

  // NOT WORKING
  // useEffect(() => {
  //   console.log('UseEffect', users)
  // }, [users])

  return (
    <Modal title='Account' isOpen={isOpen} onClose={closeDialog}>
      <form onSubmit={handleSubmit}>
        <div className='col'>
          <label>First Name</label>
          <input type='text' defaultValue={user.firstName} ref={firstNameRef} />
        </div>

        <div className='col'>
          <label>Last Name</label>
          <input type='text' defaultValue={user.lastName} ref={lastNameRef} />
        </div>

        <div className='col'>
          <label className=''>Email</label>
          <input type='email' defaultValue={user.email} ref={emailRef} />
        </div>

        <div>
          <Button text='Cancel' className='btn' onClick={toggleDialog} />
          <Button type='submit' text='Update' className='btn' />
        </div>
      </form>
    </Modal>
  )
}

export default ModalEditUser
