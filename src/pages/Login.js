import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'


const Login = () => {

    return (
        <div className='two-col'>
            <Logo/>
            <LoginForm/>
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
const LoginForm = (props) => {
    return (
        <div className='col col-two'>
            <form id='login-form'>
               <h3>Login</h3>

               <label for='username'>Employee ID</label>
               <input type='text' id='username' required></input>

               <label for='password'>Password</label>
               <input type='password' id='password' required></input>
               
               <Link to='/main'><input type='submit' id='login-submit' value='Login'></input></Link>
            </form>           
        </div>       
    )		
}

export default Login
