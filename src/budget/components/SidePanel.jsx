import React, { useContext } from 'react'
import { UserContext } from '../helper/Context'
import { NavLink } from 'react-router-dom'
import SidePanelItem from './SidePanelItem'
import Logo from '../../assets/logo.png'

const PanelData = [
  { icon: 'apps', title: 'Overview' },
  { icon: 'group', title: 'Transactions' },
  { icon: 'paid', title: 'Send' },
  { icon: 'payments', title: 'Expenses' },
]

const SidePanel = () => {
  const { user } = useContext(UserContext)

  return (
    <nav className='sidepanel'>
      <div className='tabs'>
        <img src={Logo} alt='company logo' className='logo-s' />
        <h2>Hello {user.firstName},</h2>
        {PanelData.map((item, index) => {
          return <SidePanelItem key={index} {...item} />
        })}
      </div>

      <NavLink to='/customer-login' className={`${SidePanelItem.style} nav`}>
        <span className='material-symbols-outlined'>logout</span>
        Logout
      </NavLink>
    </nav>
  )
}

export default SidePanel
