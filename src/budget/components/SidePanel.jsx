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
    <div className='flex-col-sb sidenavbar'>
      <div className='logo-budget'>
        <span className='material-symbols-outlined'>account_circle</span>
        <div>
          <h1>Greetings,</h1>
          <h1>{user.firstName}</h1>
        </div>
      </div>

      {PanelData.map((item, index) => {
        return <SidePanelItem key={index} {...item} />
      })}
    </div>
  )
}

export default SidePanel
