import React, { useContext, useState } from 'react'
import OverviewBal from '../components/OverviewBal'
import OverviewCard from '../components/OverviewCard'
import ChartBar from '../components/ChartBar'
import { UserContext } from '../helper/Context'

const Overview = () => {
  const { user } = useContext(UserContext)
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
    <section className='dash-sec'>
      <div className='dash-content'>
        <section className='tab-header'>
          <h1>Overview</h1>
        </section>
        <div className='overview-top'>
          <section className='bal-card'>
            <OverviewCard />
            <OverviewBal />
          </section>
          <section className='barCon'>
            <ChartBar chartData={userData} />
          </section>
        </div>
      </div>
    </section>
  )
}

export default Overview
