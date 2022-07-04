import User from '../classes/user'
import DUMMY_USERS_DATA from '../data/users'

export const KEY_USERS = 'users'

export const getAllUsers = () => {
  return localStorage.getItem(KEY_USERS) !== null
    ? JSON.parse(localStorage.getItem(KEY_USERS))
    : DUMMY_USERS_DATA
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
