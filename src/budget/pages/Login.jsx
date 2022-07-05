import React from 'react'
import LoginForm from '../components/LoginForm'

const CustomerLogin = () => {
  return (
    <div className='two-col'>
      <Logo />
      <LoginForm />
    </div>
  )
}

const Logo = () => {
  return (
    <div className='col col-one'>
      <img
        src={require('../../assets/logo.png')}
        className='logo'
        alt='logo'
      ></img>
    </div>
  )
}

export default CustomerLogin
