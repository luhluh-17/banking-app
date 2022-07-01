import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Users from '../data/User'
// import { employees } from '../data/employees'

const LoginForm = props => {
  const [reset, setreset] = useState(false)
  const [invalidLogin, setInvalidLogin] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  const handleFormSubmit = event => {
    // // event.preventDefault()
    // val()
    console.log(invalidLogin)
    // if (!invalidLogin) {
    //   setUser(
    //     Users.filter(
    //       item => item.email === username && item.password === password
    //     )
    //   )
    // }
    navigate('/dashboard-customer')
  }

  const handleForgotPassword = event => {
    event.preventDefault()
    setreset(true)
  }

  const val = () => {
    Users.forEach(element => {
      if (element.email === username && element.password === password) {
        setInvalidLogin(false)
      }
    })
  }

  return (
    <div className="col col-two">
      <form id="login-form" onSubmit={handleFormSubmit}>
        <h3>Customer Login</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="false"
          onChange={e => setUsername(e.target.value)}
          value={username}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="false"
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
        />

        <input type="submit" id="login-submit" value="Login" />
        <p href="#" onClick={handleForgotPassword}>
          Forgot password?
        </p>
        {reset ? (
          <p id="pw-reset-alert">
            Please contact our support hotline to reset password
          </p>
        ) : null}
        {invalidLogin ? (
          <p id="invalid-login">Wrong username or password</p>
        ) : null}
      </form>
    </div>
  )
}

export default LoginForm

