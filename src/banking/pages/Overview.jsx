import React from 'react'
import { Bar } from 'react-chartjs-2'
import { getAllTransactions } from '../../js/utils/localstorage'

const Overview = () => {
  const list = getAllTransactions()
  const chartData = {
    labels: list.map(item => item.description),
    datasets: [
      {
        label: 'Transactions',
        data: list.map(item => item.amount),

        backgroundColor: ['hsla(224, 84%, 34%)', 'rgb(242, 169, 11)'],
      },
    ],
  }

  return (
    <main>
      <div className="sticky">
        <h2 className="title">Welcome Admin</h2>
      </div>
      <Bar data={chartData} />
    </main>
  )
}

export default Overview
