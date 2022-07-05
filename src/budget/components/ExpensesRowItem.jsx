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

  const formatCurrency = number => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PHP',
    }).format(number)
  }
  return (
    <tr>
      <td>{description}</td>
      <td>{formatCurrency(amount)}</td>
      <td style={{ display: 'flex', gap: '1rem' }}>
        <span
          className="material-symbols-outlined icon"
          onClick={() => handleDelete(id)}
        >
          delete
        </span>

        <button onClick={() => handleAddTransaction(id)} className="btn">
          Pay now
        </button>
      </td>
    </tr>
  )
}

export default Expenses_Row_Item
