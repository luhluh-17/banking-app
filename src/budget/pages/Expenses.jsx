import React, { useContext, useState } from 'react'
import Expenses_Row_Item from '../components/Expenses_Row_Item'
import { UserContext } from '../helper/Context'
const Expenses = () => {
  const [expenseName, setExpenseName] = useState('')
  const [expenseCost, setExpenseCost] = useState(0)
  const [expenseList, setExpenseList] = useState([])
  const { transactions } = useContext(UserContext)

  const handleSubmit = e => {
    e.preventDefault()
    if (expenseName && expenseCost) {
      const obj = {
        id: new Date().getTime().toString(),
        desc: expenseName,
        amount: expenseCost,
      }
      setExpenseList(prev => [...prev, obj])
      setExpenseCost(0)
      setExpenseName('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="expense-name">Description</label>
          <input
            id="expense-name"
            type="text"
            value={expenseName}
            onChange={e => setExpenseName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="expense-cost">Cost</label>
          <input
            id="expense-cost"
            type="number"
            min="0"
            value={expenseCost}
            onChange={e => setExpenseCost(e.target.value)}
          />
        </div>
        <button type="submit">+ Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Cost</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((item, index) => {
            return <Expenses_Row_Item key={index} {...item} setFilteredList={setExpenseList} expenseList={expenseList} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Expenses
