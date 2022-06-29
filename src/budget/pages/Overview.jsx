import React, { useContext } from 'react'
import Overview_Bal from '../components/Overview_Bal'
import Overview_Card from '../components/Overview_Card'

const Overview = () => {
  return (
    <section className="dash-sec">
      <div className="dash-content">
        <section className="tab-header">
          <h1>Overview</h1>
        </section>
        <section className="bal-card">
          <Overview_Bal />
          <Overview_Card />
        </section>
      </div>
    </section>
  )
}

export default Overview
