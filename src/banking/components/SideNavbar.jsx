import React from 'react'
import { NavLink } from 'react-router-dom'
import SideNavbarHeading from './SideNavbarHeading'

const SideNavbar = () => {
  const style = ({ isActive }) => (isActive ? 'link active' : 'link')
  const path = '/dashboard-employee'

  return (
    <nav className='flex-col-sb sidenavbar'>
      <div className='flex-col'>
        <SideNavbarHeading />
        <NavLink to={path} className={style} end={true}>
          <span className='material-symbols-outlined'>dashboard</span>
          Overview
        </NavLink>
        <NavLink to={`${path}/accounts`} className={style}>
          <span className='material-symbols-outlined'>group</span>
          Accounts
        </NavLink>
        <NavLink to={`${path}/transactions`} className={style}>
          <span className='material-symbols-outlined'>receipt_long</span>
          Transactions
        </NavLink>
      </div>

      <NavLink to='/customer-login' className={style}>
        <span className='material-symbols-outlined'>logout</span>
        Logout
      </NavLink>
    </nav>
  )
}

export default SideNavbar
