import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/landing.css'


const Landing = () => {
  const navigate = useNavigate()

  const handleCustomerLoginBtn = () => {
    {
      navigate('/customer-login')
    }
  }

  const handleEmployeeLoginBtn = () => {
    {
      navigate('/employee-login')
    }
  }

  return (
    <React.Fragment>
    <header>
      <img src={require('../../assets/logo.png')} className='logo-s'/>
      <button className='login-btn' onClick={handleCustomerLoginBtn}>Customer Login</button>
    </header>
    <main className='hero-section'>
      <h1>Finally, a better banking experience</h1>
    </main>
    <footer>
      <p>DISCLAIMER: This site is for educational purposes only</p>
      <button className='login-btn'onClick={handleEmployeeLoginBtn}>Employee Login</button>
    </footer>
    </React.Fragment>
  )
}

export default Landing
