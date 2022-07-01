import React, {useContext} from 'react'
import Visa from '../images/visa.png'
import Chip from '../../budget/images/chip.png'
import { UserContext } from '../helper/Context'

const Overview_Card = () => {
  const {id} = useContext(UserContext)
  return (
    <div className="card">
     
      <div className="visa-card">
        <h3>platinum</h3>
        <div>
          <img className="chip-logo" src={Chip} />
        </div>
        <div className="num-visa">
          <span>{id}</span>
          <img src={Visa} className="visa-logo" />
        </div>
      </div>
      <div className="back-card"></div>
    </div>
  )
}

export default Overview_Card
