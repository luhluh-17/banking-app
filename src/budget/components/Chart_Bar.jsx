import React from 'react'
import { Bar, Line } from 'react-chartjs-2'

import { Chart as ChartJS } from 'chart.js/auto'
const Chart_Bar = ({ chartData }) => {
  return (
    <div className="bar-chart">
      <Bar data={chartData} />
    </div>
  )
}

export default Chart_Bar
