import React from 'react'
import SidePanel from './SidePanel'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="dash-budget">
      <SidePanel />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
