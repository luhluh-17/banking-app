import React, { useContext } from 'react'
import { UserContext } from '../helper/Context'
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
      <SidePanelItem icon='logout' title='Logout' />
    </nav>
  )
}

export default SidePanel
