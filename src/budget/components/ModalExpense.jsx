import React from 'react'
import Button from '../components/Button'
const ModalExpense = ({
  onSubmit,
  onChangeExpenseName,
  onChangeExpenseCost,
  expenseName,
  expenseCost,
  onToggle,
  title
}) => {
  return (
    <div className="modal">
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        <div className="col">
          <label htmlFor="expense-name">Description</label>
          <input
            id="expense-name"
            type="text"
            value={expenseName}
            onChange={e => onChangeExpenseName(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="expense-cost">Cost</label>
          <input
            id="expense-cost"
            type="number"
            min="0"
            value={expenseCost}
            onChange={e => onChangeExpenseCost(e.target.value)}
          />
        </div>
        <div>
          <Button text="Cancel" className="btn" onClick={onToggle} />
          <Button type="submit" icon="add" text="Add" className="btn" />
        </div>
      </form>
    </div>
  )
}

export default ModalExpense
