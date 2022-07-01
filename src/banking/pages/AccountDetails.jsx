import React, { useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TableTransaction from '../components/TableTransaction'
import User from '../../js/classes/user'
import Transaction from '../../js/classes/transaction'
import { getAllUsers } from '../../js/utils/localstorage'
import Button from '../components/Button'

function AccountDetails() {
  const amountRef = useRef(null)
  const navigate = useNavigate()

  const { userId } = useParams()
  const obj = getAllUsers().find(item => item.id === parseInt(userId))

  const user = new User(
    obj.id,
    obj.firstName,
    obj.lastName,
    obj.balance,
    obj.email,
    obj.password,
    obj.expenses,
    obj.transactions
  )

  const [balance, setBalance] = useState(parseInt(user.balance))
  const [transactions, setTransactions] = useState(user.transactions)

  const handleWithdraw = () => {
    if (amountRef.current.value === '') return
    const amount = parseInt(amountRef.current.value)

    if (amount > user.balance) {
      alert('Insufficient Amount')
    } else {
      amountRef.current.value = ''
      setBalance(balance - amount)

      const id = new Date().getTime()
      const transaction = new Transaction(id, 'Withdraw', 'posted', amount)

      setTransactions(state => [...state, transaction])
    }
  }

  const handleDeposit = () => {
    if (amountRef.current.value === '') return
    const amount = parseInt(amountRef.current.value)
    amountRef.current.value = ''
    setBalance(balance + amount)

    const id = new Date().getTime()
    const transaction = new Transaction(id, 'Deposit', 'posted', amount)

    setTransactions(state => [...state, transaction])
  }

  return (
    <main className='flex-col'>
      <div className='btn-container-header'>
        <Button
          icon={'arrow_back'}
          text='Back'
          className='btn-primary-border'
          onClick={() => navigate(-1)}
        />

        <div className='flex-row'>
          <Button
            icon={'edit'}
            text='Edit'
            className='btn-secondary-border'
            onClick={() => navigate(-1)}
          />

          <Button
            icon={'delete'}
            text='Delete'
            className='btn-danger-border'
            onClick={() => navigate(-1)}
          />
        </div>
      </div>

      <section className='account-details'>
        <div className='flex-row'>
          <div>
            <h5>{user.id}</h5>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
          </div>
        </div>
        <div>
          <h2>{balance}</h2>
          <h4>Current Balance</h4>
        </div>
      </section>

      <section>
        <TableTransaction title='Transactions' list={transactions} />
      </section>
    </main>
  )
}

export default AccountDetails
