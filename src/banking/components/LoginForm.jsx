import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { employees } from '../data/employees'

const LoginForm = props => {
  const [reset, setreset] = useState(false)
  const [invalidLogin, setInvalidLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleFormSubmit = event => {
    event.preventDefault()
    validateLogin()
  }

  const handleForgotPassword = event => {
    event.preventDefault()
    setreset(true)
  }

  const usernameInput = event => {
    setUsername(event.target.value)
  }

  const passwordInput = event => {
    setPassword(event.target.value)
  }

  const validateLogin = () => {
    for (let index = 0; index < employees.length; index++) {
      if (
        employees[index].username === username &&
        employees[index].password === password
      ) {
        navigate('/dashboard')
      }
      setInvalidLogin(true)
    }
  }

  return (
    <div className='col col-two'>
      <form id='login-form' onSubmit={handleFormSubmit}>
        <h3>Login</h3>

        <label htmlFor='username'>Employee ID</label>
        <input
          type='text'
          id='username'
          autoComplete='false'
          onChange={usernameInput}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          autoComplete='false'
          onChange={passwordInput}
          required
        />

        <input type='submit' id='login-submit' value='Login' />
        <p href='#' onClick={handleForgotPassword}>
          Forgot password?
        </p>
        {reset ? (
          <p id='pw-reset-alert'>Please contact admin to reset password</p>
        ) : null}
        {invalidLogin ? (
          <p id='invalid-login'>Wrong username or password</p>
        ) : null}
      </form>
    </div>
  )
}

export default LoginForm
