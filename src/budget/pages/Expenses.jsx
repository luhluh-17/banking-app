import React, { useContext, useEffect, useState } from 'react'
import Button from '../components/Button'
import ExpensesRowItem from '../components/ExpensesRowItem'
import { UserContext } from '../helper/Context'

const Expenses = () => {
  const { user, setUser } = useContext(UserContext)
  const [expenseName, setExpenseName] = useState('')
  const [expenseCost, setExpenseCost] = useState(0)
  const [expenseList, setExpenseList] = useState(user.expenses)
  const [modalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }

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
      handleModal()
    }
  }

  useEffect(() => {
    setUser(prev => {
      return { ...prev, expenses: expenseList }
    })
  }, [expenseList])

  return (
    <>
      <main>
        <h1>Expenses</h1>
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
        <button className="btn-primary" onClick={handleModal}>
          +
        </button>
      </main>
      {modalOpen && (
        <div className="budget-modal-overlay">
          <div className="budget-modal-container">
            <h3>Add Expense</h3>
            <form className="budget-modal" onSubmit={handleSubmit}>
              <div className="d-f fd-c">
                <label htmlFor="expense-name">Description</label>
                <input
                  id="expense-name"
                  type="text"
                  value={expenseName}
                  onChange={e => setExpenseName(e.target.value)}
                />
              </div>
              <div className="d-f fd-c">
                <label htmlFor="expense-cost">Cost</label>
                <input
                  id="expense-cost"
                  type="number"
                  min="0"
                  value={expenseCost}
                  onChange={e => setExpenseCost(e.target.value)}
                />
              </div>
              <div className="d-f jc-fe">
                <Button
                  text="Cancel"
                  className="btn-cancel"
                  onClick={handleModal}
                />
                <Button
                  type="submit"
                  icon="add"
                  text="Add"
                  className="btn-secondary"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Expenses
