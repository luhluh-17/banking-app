import React, { useContext, useEffect, useState } from 'react'
import Users from '../data/User'
import { UserContext } from '../helper/Context'
const SendMoney = () => {
  const { user, setUser } = useContext(UserContext)
  const [selectedUser, setSelectedUser] = useState('')
  const [selectedAmount, setSelectedAmount] = useState()
  const filteredUsers = Users.filter(item => item.firstName !== user.firstName)
  const [secondUser, setSecondUser] = useState({})

  const handleSendMoney = e => {
    e.preventDefault()

    if (user.balance > selectedAmount) {
      setSecondUser(prev => {
        return (prev = Users.find(user => user.firstName === selectedUser))
      })

      const newBalance = user.balance - selectedAmount
      const secondUserBalance = secondUser.balance + selectedAmount
      const sendTransact = {
        id: new Date().getTime(),
        description: `Transferred ${selectedAmount} to ${selectedUser}`,
        amount: selectedAmount,
      }

      const receiveTransact = {
        id: new Date().getTime(),
        description: `Received ${selectedAmount} from ${user.firstName}`,
        amount: Number(selectedAmount),
      }

      setUser(prev => {
        return {
          ...prev,
          balance: newBalance,
          transactions: [...user.transactions, sendTransact],
        }
      })

      setSecondUser(prev => {
        return {
          ...prev,
          balance: secondUserBalance,
          transactions: [...prev.transactions, receiveTransact],
        }
      })
    } else {
      alert('not enough')
    }

    setSelectedAmount(0)
    setSelectedUser('')
  }

  useEffect(() => {
    const idx = Users.findIndex(item => item.id === secondUser.id)
    Users[idx] = secondUser
    localStorage.setItem('users', JSON.stringify(Users))
  }, [secondUser])

  return (
    <main>
      <h1>Send Money</h1>
      <form onSubmit={handleSendMoney}>
        <label htmlFor="">Send to</label>
        <input
          type="text"
          list="userList"
          value={selectedUser}
          onChange={e => setSelectedUser(e.target.value)}
        />
        <datalist id="userList">
          {filteredUsers.map((item, index) => {
            return <option key={index} value={item.firstName} />
          })}
        </datalist>
        <label htmlFor="amount">amount</label>
        <input
          type="number"
          id="amount"
          value={selectedAmount}
          onChange={e => setSelectedAmount(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}

export default SendMoney
