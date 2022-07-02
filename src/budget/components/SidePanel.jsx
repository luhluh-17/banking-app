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
      <div className='flex-col'>
        <span className='material-symbols-outlined'>account_circle</span>
        <div>
          <h1>Hello {user.firstName}</h1>
        </div>
      </div>
      <div className='flex-col'>
        {PanelData.map((item, index) => {
          return <SidePanelItem key={index} {...item} />
        })}
      </div>
    </div>
  )
}

export default SidePanel
