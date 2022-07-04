import React from 'react'
import { NavLink } from 'react-router-dom'
import SideNavbarHeading from './SideNavbarHeading'

const SideNavbar = () => {
  const style = ({ isActive }) => (isActive ? 'link active' : 'link')
  const path = '/dashboard-employee'

  return (
    <nav className='sidepanel'>
      <div className='tabs'>
        <SideNavbarHeading />
        <NavLink to={path} className={`${style} nav`} end={true}>
          <span className='material-symbols-outlined'>dashboard</span>
          Overview
        </NavLink>
        <NavLink to={`${path}/accounts`} className={`${style} nav`}>
          <span className='material-symbols-outlined'>group</span>
          Accounts
        </NavLink>
        <NavLink to={`${path}/transactions`} className={`${style} nav`}>
          <span className='material-symbols-outlined'>receipt_long</span>
          Transactions
        </NavLink>
      </div>

      <NavLink to='/employee-login' className={`${style} nav`}>
        <span className='material-symbols-outlined'>logout</span>
        Logout
      </NavLink>
    </nav>
  )
}

export default SideNavbar
