import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Users from '../data/User'
import { currentUser } from '../data/User'

const LoginForm = () => {
  const [reset, setreset] = useState(false)
  const [invalidLogin, setInvalidLogin] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleFormSubmit = e => {
    e.preventDefault()
    const user = Users.find(user => {
      return user.email === username && user.password === password
    })

    localStorage.setItem('currentUser', JSON.stringify(user))
    if (user !== undefined) {
      navigate(`/dashboard-customer/overview`)
    } else {
      setInvalidLogin(true)
    }
  }

  const handleForgotPassword = event => {
    event.preventDefault()
    setreset(true)
  }

  return (
    <div className="col col-two">
      <form className="login-form" onSubmit={handleFormSubmit}>
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
