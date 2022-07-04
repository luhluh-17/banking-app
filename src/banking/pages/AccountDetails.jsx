import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Button from '../components/Button'
import TableTransaction from '../components/TableTransaction'
import ModalUpdateBalance from '../parts/ModalUpdateBalance'
import ModalSendMoney from '../parts/ModalSendMoney'

import User from '../../js/classes/user'
import { KEY_USERS, getAllUsers } from '../../js/utils/localstorage'

function AccountDetails() {
  const navigate = useNavigate()

  const { userId } = useParams()
  const _user = getAllUsers().find(item => item.id === Number(userId))

  const selectedUser = new User(
    _user.id,
    _user.firstName,
    _user.lastName,
    _user.balance,
    _user.email,
    _user.password,
    _user.expenses,
    _user.transactions
  )

  const [user, setUser] = useState(selectedUser)
  const [users, setUsers] = useState(getAllUsers())

  const [isDialogBalanceOpen, setIsDialogBalanceOpen] = useState(false)
  const [isDialogSendOpen, setIsDialogSendOpen] = useState(false)

  const handleSave = () =>
    localStorage.setItem(KEY_USERS, JSON.stringify(users))

  const toggleBalanceDialog = () => setIsDialogBalanceOpen(bool => !bool)
  const toggleSendDialog = () => setIsDialogSendOpen(bool => !bool)

  useEffect(() => {
    localStorage.setItem(KEY_USERS, JSON.stringify(users))
  }, [users])

  return (
    <>
      <main>
        <section className='account-details-wrapper sticky'>
          <div className='account-details'>
            <div>
              <h2>{user.name}</h2>
              <p>{user.id}</p>
              <p>{user.email}</p>
            </div>

            <div>
              <h2 className='bal'>{user.formattedBalance}</h2>
              <h4>Current Balance</h4>
            </div>
          </div>
          <div className='icon-container'>
            <div>
              <span
                className='material-symbols-outlined icon'
                onClick={() => navigate(-1)}
              >
                edit
              </span>
              <span
                className='material-symbols-outlined icon'
                onClick={() => navigate(-1)}
              >
                delete
              </span>
            </div>
            <span
              className='material-symbols-outlined icon back'
              onClick={() => navigate(-1)}
            >
              arrow_back
            </span>
          </div>
        </section>

        <section className='transactions'>
          <h2 className='title'>Transactions</h2>
          <div className='btn-container'>
            <Button
              className='btn'
              text='Save Transaction'
              onClick={handleSave}
            />
            <Button
              className={'btn'}
              text='Update Balance'
              onClick={toggleBalanceDialog}
            />
            <Button
              className={'btn'}
              text='Send Money'
              onClick={toggleSendDialog}
            />
          </div>
          <TableTransaction list={user.transactions} />
        </section>
      </main>

      <ModalUpdateBalance
        onUsersChange={setUsers}
        user={user}
        onUserChange={setUser}
        isOpen={isDialogBalanceOpen}
        onDialogChange={setIsDialogBalanceOpen}
      />
      <ModalSendMoney
        onUsersChange={setUsers}
        sender={user}
        onSenderChange={setUser}
        isOpen={isDialogSendOpen}
        onDialogChange={setIsDialogSendOpen}
      />
    </>
  )
}

export default AccountDetails
