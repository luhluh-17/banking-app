import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const data = [
  { icon: 'apps', title: 'Overview' },
  { icon: 'group', title: 'Transactions' },
  { icon: 'paid', title: 'Send' },
  { icon: 'payments', title: 'Expenses' },
]

const SidePanel = () => { 
  const style = ({isActive}) => isActive ? 'side-item active': 'side-item'

  return (
    <div className="sideBar">
      <div className="logo">
        <span className="material-symbols-outlined">account_circle</span>
        <h1>Greetings, User</h1>
      </div>
    
      {data.map((item, index) => {
        return <SideItem key={index} {...item} />
      })}
    </div>
  )
}

const SideItem = ({ icon, title }) => {
  return (
    <NavLink to={title.toLowerCase()} className={({isActive}) => isActive ? 'side-item active': 'side-item'}>
      <span className="material-symbols-outlined side-icon">{icon}</span>
      <span>{title}</span>
    </NavLink>
  )
}

export default SidePanel
