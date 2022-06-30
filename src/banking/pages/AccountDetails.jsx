import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Transaction } from '../../js/classes/transaction'
import User from '../../js/classes/user'
import { KEY_USERS } from '../../js/variables'
import TableTransaction from '../components/TableTransaction'

function AccountDetails() {
  const amountRef = useRef(null)

  const { userId } = useParams()
  const users = JSON.parse(localStorage.getItem(KEY_USERS))
  const obj = users.find(item => item.id === parseInt(userId))

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
    <main className='flex-col-sb'>
      <section className='flex-row-sb account-details'>
        <div className='flex-row'>
          <span className='material-symbols-outlined google-icon-md'>
            account_circle
          </span>
          <div className='flex-col'>
            <h5>{user.id}</h5>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
        </div>
        <div className='flex-col'>
          <h2>{balance}</h2>
          <h3>Balance</h3>
        </div>
      </section>

      <section>
        <h3>Transactions</h3>
        <TableTransaction list={transactions} />
      </section>

      <section className='flex-row'>
        <section className='flex-col-sb'>
          <div>
            <div>
              <label className='form-label'>Amount</label>
              <input className='form-input' type='number' ref={amountRef} />
            </div>
          </div>

          <div>
            <button className='btn' onClick={handleWithdraw}>
              Withdraw
            </button>
            <button className='btn' onClick={handleDeposit}>
              Deposit
            </button>
          </div>
        </section>

        <section className='flex-col'>
          <div>
            <div>
              <label className='form-label'>Amount</label>
              <input className='form-input' type='number' />
            </div>
            <div>
              <label className='form-label'>Recipient</label>
              <input className='form-input' type='text' />
            </div>
          </div>

          <div>
            <button className='btn'>Send</button>
          </div>
        </section>
      </section>
    </main>
  )
}

export default AccountDetails
