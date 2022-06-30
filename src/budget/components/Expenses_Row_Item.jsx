import React, { useContext } from 'react'
import { UserContext } from '../helper/Context'

const Expenses_Row_Item = ({
  desc,
  amount,
  setFilteredList,
  expenseList,
  id,
}) => {
  const { transactions } = useContext(UserContext)
  const handleDelete = id => {
    setFilteredList(expenseList.filter(item => item.id !== id))
  }

  const handleAddTransaction = id => {
    const index = expenseList.findIndex(item => item.id === id)
    transactions.push(expenseList[index])
  }
  return (
    <tr>
      <td>{desc}</td>
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
