import React, { useContext, useEffect, useState } from 'react'
import Users from '../data/User'
import { UserContext } from '../helper/Context'
import Button from '../../banking/components/Button'
import InsufficientPrompt from '../components/InsufficientPrompt'
const SendMoney = () => {
  const { user, setUser } = useContext(UserContext)
  const [selectedUser, setSelectedUser] = useState()
  const [selectedAmount, setSelectedAmount] = useState()
  const filteredUsers = Users.filter(item => item.firstName !== user.firstName)
  const [recipient, setRecipient] = useState({})
  const [confirmSend, setConfirmSend] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const updateSenderTransaction = () => {
    const newBalance = user.balance - selectedAmount
    const sendTransact = {
      id: new Date().getTime(),
      description: `Transferred ${selectedAmount} to ${selectedUser}`,
      amount: selectedAmount,
    }
    setUser(prev => {
      return {
        ...prev,
        balance: newBalance,
        transactions: [...user.transactions, sendTransact],
      }
    })
  }

  const updateRecipientTransaction = () => {
    const recipientBalance = Number(recipient.balance) + Number(selectedAmount)
    const receiveTransact = {
      id: new Date().getTime(),
      description: `Received ${selectedAmount} from ${user.firstName}`,
      amount: Number(selectedAmount),
    }
    setRecipient(prev => {
      return {
        ...prev,
        balance: recipientBalance,
        transactions: [...prev.transactions, receiveTransact],
      }
    })
    setConfirmSend(!confirmSend)
  }

  const handleSendMoney = e => {
    e.preventDefault()

    if (user.balance > selectedAmount) {
      updateSenderTransaction()
      updateRecipientTransaction()
    } else {
      setModalOpen(true)
    }
    setSelectedAmount(0)
    setSelectedUser('')
  }

  useEffect(() => {
    const idx = Users.findIndex(item => item.id === recipient.id)
    Users[idx] = recipient
  
    localStorage.setItem('users', JSON.stringify(Users))
  }, [confirmSend])

  useEffect(() => {
    setRecipient(Users.find(user => user.firstName === selectedUser))
  }, [selectedUser])

  return (
    <main>
      <div className='sticky'>
        <h2 className="title">Send Money</h2>
      </div>
      <form onSubmit={handleSendMoney} className="send-money">
        <label htmlFor="">Send to</label>
        <input
          className="input-field"
          type="text"
          list="userList"
          value={selectedUser}
          onChange={e => setSelectedUser(e.target.value)}
          placeholder="Select from dropdown"
        />
        <datalist id="userList">
          {filteredUsers.map((item, index) => {
            return (
              <option
                key={index}
                value={item.firstName}
              >{`${item.email} | ${item.id}`}</option>
            )
          })}
        </datalist>
        <label htmlFor="amount">Amount</label>
        <input
          className="input-field"
          type="number"
          id="amount"
          value={selectedAmount}
          onChange={e => setSelectedAmount(e.target.value)}
        />

        <button type="submit" className="btn">
          Send Money
        </button>
      </form>
      {modalOpen && (
        <InsufficientPrompt onChangeModalOpen={setModalOpen}/>
      )}
    </main>
  )
}

export default SendMoney
