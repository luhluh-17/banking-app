import React from 'react'
import SidePanel from './SidePanel'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../helper/Context'
import User from '../data/User'

const Dashboard = () => {
  return (
    <UserContext.Provider value={User} >
      <div className="dash-budget">
        <SidePanel />
        <div>
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default Dashboard
