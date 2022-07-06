import React, { useContext, useEffect, useState } from 'react'
import ExpensesRowItem from '../components/ExpensesRowItem'
import { UserContext } from '../helper/Context'
import ModalExpense from '../components/ModalExpense'

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

  const getTotal = () => {
    const costArr = expenseList.map(a => Number(a.amount))
    const total = costArr.reduce((x, y) => x + y, 0)
    return total
  }

  const formatCurrency = number => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PHP',
    }).format(number)
  }

  return (
    <>
      <main>
        <div className="sticky">
          <h2 className="title">Expenses</h2>
          <div className="three-col">
            <div>
              <h2 className="bal">{formatCurrency(user.balance)}</h2>
              <h4>Current Balance</h4>
            </div>
            <div>
              <h2 className="bal">{formatCurrency(getTotal())}</h2>
              <h4>Total Expenses</h4>
            </div>
            <div>
              <h2 className="bal">
                {formatCurrency(user.balance - getTotal())}
              </h2>
              <h4>Expected Balance</h4>
            </div>
          </div>
        </div>

        <div className="table-div expenses">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cost</th>
                <th></th>
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
        </div>

        <button className="btn float" onClick={handleModal}>
          Add Expense
        </button>
      </main>
      {modalOpen && (
        <ModalExpense
          onSubmit={handleSubmit}
          onChangeExpenseName={setExpenseName}
          onChangeExpenseCost={setExpenseCost}
          expenseName={expenseName}
          expenseCost={expenseCost}
          onToggle={handleModal}
          title="Add expense"
        />
      )}
    </>
  )
}

export default Expenses
