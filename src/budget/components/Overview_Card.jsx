import React, {useContext} from 'react'
import Visa from '../images/visa.png'
import Chip from '../../budget/images/chip.png'
import { UserContext } from '../helper/Context'

const Overview_Card = () => {
  const {accountNumber} = useContext(UserContext)
  return (
    <div className="bal-card-item card">
      <h2>My Card</h2>
      <div className="visa-card">
        <h3>platinum</h3>
        <div>
          <img className="chip-logo" src={Chip} />
        </div>
        <div className="num-visa">
          <span>{accountNumber}</span>
          <img src={Visa} className="visa-logo" />
        </div>
      </div>
      <div className="back-card"></div>
    </div>
  )
}

export default Overview_Card
