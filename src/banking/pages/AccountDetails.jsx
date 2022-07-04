import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Button from '../components/Button'
import AccountDetailsHeading from '../parts/AccountDetailsHeading'
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

        <AccountDetailsHeading user={user} />
        <TableTransaction
          list={user.transactions}
          users={users}
          onToggleChange={setIsDialogBalanceOpen}
        >
          <div className='flex-row'>
            <Button
              className='btn-primary'
              text='Save Transaction'
              onClick={handleSave}
            />
            <Button
              className={'btn-primary'}
              text='Update Balance'
              onClick={toggleBalanceDialog}
            />
            <Button
              className={'btn-primary'}
              text='Send Money'
              onClick={toggleSendDialog}
            />
          </div>
        </TableTransaction>
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
