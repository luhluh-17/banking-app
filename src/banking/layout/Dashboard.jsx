import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../components/SideNavbar'

const Dashboard = () => {
  return (
    <div className='flex-row'>
      <SideNavbar />
      <Outlet />
    </div>
  )
}

export default Dashboard
