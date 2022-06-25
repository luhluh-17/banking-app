import React, { useState } from 'react'

const data = [
   { icon: 'apps', title: 'Overview' },
   { icon: 'group', title: 'Accounts' },
   { icon: 'paid', title: 'Transactions' },
   { icon: 'payments', title: 'Something' },
]

const SidePanel = () => {
   const [select, setSelect] = useState(0)
   return (
      <div className="sideBar">
         <div className="logo">
            <h1>hello logo</h1>
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
      <div className={active} onClick={() => set(index)}>
         <span className="material-symbols-outlined side-icon">{icon}</span>
         <span>{title}</span>
      </div>
   )
}

export default SidePanel