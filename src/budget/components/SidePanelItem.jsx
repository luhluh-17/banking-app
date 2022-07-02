import React from 'react'
import { NavLink } from 'react-router-dom'

const SidePanelItem = ({ icon, title }) => {
  const style = ({ isActive }) => (isActive ? 'link active' : 'link')
  return (
    <NavLink to={title.toLowerCase()} className={style}>
      <span className='material-symbols-outlined side-icon-budget'>{icon}</span>
      {title}
    </NavLink>
  )
}

export default SidePanelItem
