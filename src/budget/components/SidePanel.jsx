import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const data = [
  { icon: 'apps', title: 'Overview' },
  { icon: 'group', title: 'Transactions' },
  { icon: 'paid', title: 'Send' },
  { icon: 'payments', title: 'Expenses' },
]

const SidePanel = () => {
  const [select, setSelect] = useState(-1)
  return (
    <div className='sideBar'>
      <div className='logo'>
        <span className='material-symbols-outlined'>account_circle</span>
        <h1>Greetings, User</h1>
      </div>
      {data.map((item, index) => {
        return (
          <SideItem
            index={index}
            set={setSelect}
            active={select === index ? 'side-item active' : 'side-item'}
            {...item}
          />
        )
      })}
    </div>
  )
}

const SideItem = ({ icon, title, set, index, active }) => {
   
  return (
    <Link to={title.toLowerCase()} className={active} onClick={() => set(index)}>
      <span className='material-symbols-outlined side-icon'>{icon}</span>
      <span>{title}</span>
    </Link>
  )
}

export default SidePanel
