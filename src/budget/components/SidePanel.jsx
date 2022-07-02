import React, { useContext } from 'react'
import { UserContext } from '../helper/Context'
import SidePanelItem from './SidePanelItem'

const PanelData = [
  { icon: 'apps', title: 'Overview' },
  { icon: 'group', title: 'Transactions' },
  { icon: 'paid', title: 'Send' },
  { icon: 'payments', title: 'Expenses' },
]

const SidePanel = () => {
  const { user } = useContext(UserContext)

  return (
    <nav className='flex-col-sb sidenavbar'>
      <div className='flex-col-ng'>
        <header className='navbar-heading'>
          <h2>Hello {user.firstName},</h2>
        </header>

        {PanelData.map((item, index) => {
          return <SidePanelItem key={index} {...item} />
        })}
      </div>
      <SidePanelItem icon='logout' title='Logout' />
    </nav>
  )
}

export default SidePanel
