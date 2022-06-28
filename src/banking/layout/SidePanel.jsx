import React, { useState } from 'react'
import '../styles/SidePanel.css'

const data = [
  { icon: 'apps', title: 'Overview' },
  { icon: 'group', title: 'Accounts' },
  { icon: 'paid', title: 'Transactions' },
  { icon: 'payments', title: 'Something' },
]

const SideItem = ({ icon, title, set, index, active }) => {
  return (
    <div className={active} onClick={() => set(index)}>
      <span className='material-symbols-outlined side-icon'>{icon}</span>
      <span>{title}</span>
    </div>
  )
}

const SidePanel = () => {
  const [select, setSelect] = useState(0)
  return (
    <section className='side-bar'>
      <div className='logo'>
        <h1>Welcome Admin</h1>
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
    </section>
  )
}

export default SidePanel
