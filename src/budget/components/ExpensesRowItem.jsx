import React, { useContext, useState } from 'react'
import { UserContext } from '../helper/Context'
import FormatCurrency from '../helper/FormatCurrency'
import InsufficientPrompt from './InsufficientPrompt'

const Expenses_Row_Item = ({
  description,
  amount,
  onChangeExpenseList,
  expenseList,
  id,
}) => {
  const { user, setUser } = useContext(UserContext)
  const [modalOpen, setModalOpen]= useState(false)

  const handleDelete = id => {
    onChangeExpenseList(expenseList.filter(item => item.id !== id))
  }

  const handleAddTransaction = id => {
    const index = expenseList.findIndex(item => item.id === id)
    const newBalance = user.balance - amount
    if (user.balance < amount) {
		setModalOpen(true)
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
	<>
    <tr>
      <td>{description}</td>
      <td>{FormatCurrency(amount)}</td>
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
	{modalOpen && <InsufficientPrompt onChangeModalOpen={setModalOpen} />}
	</>
  )
}

export default Expenses_Row_Item
