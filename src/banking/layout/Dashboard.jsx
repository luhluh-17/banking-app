import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../components/SideNavbar'

const Dashboard = () => {
  return (
    <div className='two-col'>
      <SideNavbar />
      <Outlet/>
    </div>
  )
}

export default Dashboard
