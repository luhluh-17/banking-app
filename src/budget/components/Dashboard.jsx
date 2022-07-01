import React from 'react'
import SidePanel from './SidePanel'
import { Outlet, useParams } from 'react-router-dom'
import { UserContext } from '../helper/Context'
import Users from '../data/User'

const Dashboard = () => {
  const { userId } = useParams()

  const currentUser = Users.find(user => user.id === Number(userId))

  console.log(currentUser)
  return (
    <UserContext.Provider value={currentUser}>
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
