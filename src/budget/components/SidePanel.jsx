import React, { useContext } from 'react'
import { UserContext } from '../helper/Context'
import SideItem from './SidePanel_Item'

const PanelData = [
  { icon: 'apps', title: 'Overview' },
  { icon: 'group', title: 'Transactions' },
  { icon: 'paid', title: 'Send' },
  { icon: 'payments', title: 'Expenses' },
]

const SidePanel = () => {
  const { firstName } = useContext(UserContext)
  return (
    <div className="sideBar-budget">
      <div className="logo-budget">
        <span className="material-symbols-outlined">account_circle</span>
        <div>
          <h1>Greetings,</h1>
          <h1>{firstName}</h1>
        </div>
      </div>

      {PanelData.map((item, index) => {
        return <SideItem key={index} {...item} />
      })}
    </div>
  )
}

export default SidePanel
