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
    <main>
      <div className='sticky'>
        <h2 className='title'>Overview</h2>
      </div>
      
      <div>
        <div className='overview-container'>
          <section>
            <OverviewCard />
            <OverviewBal />
          </section>
          <section>
            <ChartBar chartData={userData} />
          </section>
        </div>
      </div>
    </main>
  )
}

export default Overview
