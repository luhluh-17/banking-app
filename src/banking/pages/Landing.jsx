import React from 'react'
import { useNavigate } from 'react-router-dom'


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
      <div className='menu'>
        <a href="#" className='menu-link'>Home</a>
        <a href="#" className='menu-link'>About Us</a>
        <a href="#" className='menu-link'>Contact</a>
      </div>
      <button className='btn round' onClick={handleCustomerLoginBtn}>Customer Login</button>
    </header>
    <main className='hero-section'>
      <h1>Finally, a better banking experience</h1>
    </main>
    <footer>
      <p>DISCLAIMER: This site is for educational purposes only</p>
      <button className='btn outline round'onClick={handleEmployeeLoginBtn}>Employee Login</button>
    </footer>
    </React.Fragment>
  )
}

export default Landing
