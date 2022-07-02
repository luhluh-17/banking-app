import React, { useContext, useState } from 'react'
import Overview_Bal from '../components/Overview_Bal'
import Overview_Card from '../components/Overview_Card'
import Chart_Bar from '../components/Chart_Bar'
import Users from '../data/User'
import { UserContext } from '../helper/Context'

const Overview = () => {
  const { user} = useContext(UserContext)
  const [userData, setUserData] = useState({
    labels: user.expenses.map(item => item.name),
    datasets: [
      {
        label: 'Expenses',
        data: user.expenses.map(item => item.cost),

        backgroundColor: ['hsla(224, 84%, 34%)', 'rgb(242, 169, 11)'],
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
        <div className="overview-top">
          <section className="bal-card">
            <Overview_Card />
            <Overview_Bal />
          </section>
          <section className="barCon">
            <Chart_Bar chartData={userData} />
          </section>
        </div>
      </div>
    </section>
  )
}

export default Overview
