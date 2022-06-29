import React, { useContext, useState } from 'react'
import Overview_Bal from '../components/Overview_Bal'
import Overview_Card from '../components/Overview_Card'
import Chart_Bar from '../components/Chart_Bar'
import User from '../data/User'

const Overview = () => {
  const [userData, setUserData] = useState({
    labels: User.expenses.map(item => item.name),
    datasets: [
      {
        label: 'Expenses',
        data: User.expenses.map(item => item.cost),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 1,
      },
    ],
  })

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
        <Chart_Bar chartData={userData} />
      </div>
    </section>
  )
}

export default Overview
