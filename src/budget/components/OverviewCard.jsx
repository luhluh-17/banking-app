import React, { useContext } from 'react'
import Visa from '../images/visa.png'
import Chip from '../../budget/images/chip.png'
import { UserContext } from '../helper/Context'

const OverviewCard = () => {
  const { user } = useContext(UserContext)
  return (
    <div className='card'>
      <div className='visa-card'>
        <p>Platinum</p>
        <div>
          <img className='chip' src={Chip} />
        </div>
        <div className='num-visa'>
          <span>{user.id}</span>
          <img src={Visa} className='visa-logo' />
        </div>
      </div>
      <div className='back-card'></div>
    </div>
  )
}

export default OverviewCard
