import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const data = [
  { icon: 'apps', title: 'Overview' },
  { icon: 'group', title: 'Transactions' },
  { icon: 'paid', title: 'Send' },
  { icon: 'payments', title: 'Expenses' },
]

const SidePanel = () => {
  return (
    <div className="sideBar-budget">
      <div className="logo-budget">
        <span className="material-symbols-outlined">account_circle</span>
        <div>
          <h1>Greetings,</h1>
          <h1>User</h1>
        </div>
      </div>

      {data.map((item, index) => {
        return <SideItem key={index} {...item} />
      })}
    </div>
  )
}

const SideItem = ({ icon, title }) => {
  return (
    <NavLink
      to={title.toLowerCase()}
      className={({ isActive }) =>
        isActive ? 'side-item-budget active' : 'side-item-budget'
      }
    >
      <span className="material-symbols-outlined side-icon-budget">{icon}</span>
      <span>{title}</span>
    </NavLink>
  )
}

export default SidePanel
