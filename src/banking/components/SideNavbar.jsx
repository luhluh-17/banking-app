import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const SideNavbar = () => {
  const style = ({ isActive }) => (isActive ? 'link active' : 'link')
  const path = '/dashboard'

  return (
    <nav className='navbar'>
      <h2>Welcome User</h2>
      <NavLink to={path} className={style}>
        Overview
      </NavLink>
      <NavLink to={`${path}/accounts`} className={style}>
        Accounts
      </NavLink>
      <NavLink to={`${path}/transactions`} className={style}>
        Transactions
      </NavLink>
      <NavLink to='/login' className={style}>
        Logout
      </NavLink>
    </nav>
  )
}

export default SideNavbar
