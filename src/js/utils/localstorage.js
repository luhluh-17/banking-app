import User from '../classes/user'
import DUMMY_USERS_DATA from '../data/users'

export const KEY_USERS = 'users'

export const findUserIndex = id => getAllUsers().findIndex(u => u.id === id)

export const getAllUsers = () => {
  const users = localStorage.getItem(KEY_USERS)
  return users !== null ? JSON.parse(users) : DUMMY_USERS_DATA
}

export const getUser = id => {
  const user = getAllUsers().find(item => item.id === Number(id))
  return new User(
    user.id,
    user.firstName,
    user.lastName,
    user.balance,
    user.email,
    user.password,
    user.expenses,
    user.transactions
  )
}

export const getAllTransactions = () => {
  const users = getAllUsers()
  const list = []
  users.forEach(user => {
    list.push(user.transactions)
  })

  return list.flat().sort((a, b) => a.id - b.id)
}

export const saveData = data =>
  localStorage.setItem(KEY_USERS, JSON.stringify(data))
