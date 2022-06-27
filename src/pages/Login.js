import React from 'react'
import '../styles/login.css'
import LoginForm from '../components/loginForm'

const Login = () => {
	return (
		<div className='two-col'>
			<Logo />
			<LoginForm />
		</div>
	)
}

const Logo = () => {
	return (
		<div className='col'>
			<img src={require('../assets/logo.png')} className='logo'></img>
		</div>
	)
}

export default Login
