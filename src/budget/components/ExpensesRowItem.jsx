import React, { useContext } from 'react'
import { UserContext } from '../helper/Context'

const Expenses_Row_Item = ({
  description,
  amount,
  onChangeExpenseList,
  expenseList,
  id,
}) => {
  const { user, setUser } = useContext(UserContext)
  const handleDelete = id => {
    onChangeExpenseList(expenseList.filter(item => item.id !== id))
  }

  const handleAddTransaction = id => {
    const index = expenseList.findIndex(item => item.id === id)
    const newBalance = user.balance - amount
    if (user.balance < amount) {
      alert('nope')
    } else {
      setUser(prev => {
        return {
          ...prev,
          balance: newBalance,
          transactions: [...prev.transactions, expenseList[index]],
        }
      })
      handleDelete(id)
    }
  }
  return (
    <tr>
      <td>{description}</td>
      <td>{amount}</td>
      <td>
        <button>edit</button>
        <button type="button" onClick={() => handleDelete(id)}>
          delete
        </button>
        <button onClick={() => handleAddTransaction(id)}>Pay now</button>
      </td>
    </tr>
  )
}

export default Expenses_Row_Item
