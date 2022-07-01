import React, { useContext, useEffect, useState } from 'react'
import Expenses_Row_Item from '../components/Expenses_Row_Item'
import { UserContext } from '../helper/Context'
const Expenses = () => {
  const [expenseName, setExpenseName] = useState('')
  const [expenseCost, setExpenseCost] = useState(0)
  const [expenseList, setExpenseList] = useState(currentUser.expenses)
  const currentUser = useContext(UserContext)

  const handleSubmit = e => {
    e.preventDefault()
    if (expenseName && expenseCost) {
      const obj = {
        id: new Date().getTime().toString(),
        description: expenseName,
        amount: expenseCost,
      }

      setExpenseList(prev => [...prev, obj])
      setExpenseCost(0)
      setExpenseName('')
    }
  }

  useEffect(() => {
    currentUser.expenses = expenseList
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }, [expenseList])

  useEffect(() => {
    const usersList = JSON.parse(localStorage.getItem('users'))
    const idx = usersList.findIndex(item => item.id === currentUser.id)
    usersList[idx] = { ...usersList[idx], expenses: currentUser.expenses }
    localStorage.setItem('users', JSON.stringify(usersList))
  }, [currentUser])

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
            return (
              <Expenses_Row_Item
                key={index}
                {...item}
                setFilteredList={setExpenseList}
                expenseList={expenseList}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Expenses
