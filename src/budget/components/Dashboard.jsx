import React, { useEffect, useState } from 'react'
import SidePanel from './SidePanel'
import { Outlet, useParams } from 'react-router-dom'
import { UserContext } from '../helper/Context'
import Users from '../data/User'

const Dashboard = () => {
  const { userId } = useParams()

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const [user, setUser] = useState(currentUser)

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(user))
    const usersList = JSON.parse(localStorage.getItem('users'))
    const idx = usersList.findIndex(item => item.id === user.id)
    usersList[idx] = user
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
