import React from 'react'
import { NavLink } from 'react-router-dom'

const SidePanelItem = ({ icon, title }) => {
  return (
    <NavLink
      to={title.toLowerCase()}
      className={({ isActive }) =>
        isActive ? 'side-item-budget active' : 'side-item-budget'
      }
    >
      <span className='material-symbols-outlined side-icon-budget'>{icon}</span>
      <span>{title}</span>
    </NavLink>
  )
}

export default SidePanelItem