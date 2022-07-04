import User from '../classes/user'
import DUMMY_USERS_DATA from '../data/users'

export const KEY_USERS = 'users'

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

export const saveData = data =>
  localStorage.setItem(KEY_USERS, JSON.stringify(data))
