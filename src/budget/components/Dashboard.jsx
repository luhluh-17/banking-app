import React, { useEffect, useState } from 'react'
import SidePanel from './SidePanel'
import { Outlet, useParams } from 'react-router-dom'
import { UserContext } from '../helper/Context'
import Users from '../data/User'

const Dashboard = () => {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const [user, setUser] = useState(currentUser)

  useEffect(() => {
    const idx = Users.findIndex(item => item.id === user.id)
    usersList[idx] = user
    localStorage.setItem('currentUser', JSON.stringify(user))
    localStorage.setItem('users', JSON.stringify(usersList))
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='two-col'>
        <SidePanel />
        <Outlet />
      </div>
    </UserContext.Provider>
  )
}

export default Dashboard
