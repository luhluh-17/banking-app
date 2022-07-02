import React, { useContext, useEffect, useState } from 'react'
import Button from '../components/Button'
import ExpensesRowItem from '../components/ExpensesRowItem'
import { UserContext } from '../helper/Context'

const Expenses = () => {
  const { user, setUser } = useContext(UserContext)
  const [expenseName, setExpenseName] = useState('')
  const [expenseCost, setExpenseCost] = useState(0)
  const [expenseList, setExpenseList] = useState(user.expenses)

  const handleSubmit = e => {
    e.preventDefault()
    if (expenseName && expenseCost) {
      const obj = {
        id: new Date().getTime(),
        description: expenseName,
        amount: expenseCost,
      }
      setExpenseList(prev => [...prev, obj])
      setExpenseCost(0)
      setExpenseName('')
    }
  }

  useEffect(() => {
    setUser(prev => {
      return { ...prev, expenses: expenseList }
    })
  }, [expenseList])

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='expense-name'>Description</label>
          <input
            id='expense-name'
            type='text'
            value={expenseName}
            onChange={e => setExpenseName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='expense-cost'>Cost</label>
          <input
            id='expense-cost'
            type='number'
            min='0'
            value={expenseCost}
            onChange={e => setExpenseCost(e.target.value)}
          />
        </div>
        <Button type='submit' icon='add' text='Add' className='btn-secondary' />
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
              <ExpensesRowItem
                key={index}
                {...item}
                onChangeExpenseList={setExpenseList}
                expenseList={expenseList}
              />
            )
          })}
        </tbody>
      </table>
    </main>
  )
}

export default Expenses
