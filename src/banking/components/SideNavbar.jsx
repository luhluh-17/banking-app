import React from 'react'
import { NavLink } from 'react-router-dom'
import SideNavbarHeading from './SideNavbarHeading'

const SideNavbar = () => {
  const style = ({ isActive }) => (isActive ? 'link active' : 'link')
  const path = '/dashboard'

  return (
    <nav className='flex-col-sb sidenavbar'>
      <div className='flex-col'>
        <SideNavbarHeading />
        <NavLink to={path} className={style} end={true}>
          Overview
        </NavLink>
        <NavLink to={`${path}/accounts`} className={style}>
          Accounts
        </NavLink>
        <NavLink to={`${path}/transactions`} className={style}>
          Transactions
        </NavLink>
      </div>

      <NavLink to='/login' className={style}>
        Logout
      </NavLink>
    </nav>
  )
}

export default SideNavbar
