import React from 'react'
import Chip from '../../budget/images/chip.png'
import Visa from '../images/visa.png'
const Overview = () => {
  return (
    <section className="dash-sec">
      <div className="dash-content">
        <section className="tab-header">
          <h1>Overview</h1>
        </section>
        <section className="bal-card">
          <div className="bal-card-item balance">
            <h2>Current Balance</h2>
            <span>$100,000</span>
          </div>
          <div className="bal-card-item card">
            <h2>My Card</h2>
            <div className="visa-card">
              <h3>platinum</h3>
              <div>
                <img className="chip-logo" src={Chip} />
              </div>
              <div className="num-visa">
                <span>894 414 6739</span>
                <img src={Visa} className="visa-logo" />
              </div>
            </div>
            <div className="back-card"></div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Overview
