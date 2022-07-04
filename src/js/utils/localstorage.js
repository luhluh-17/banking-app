import User from '../classes/user'

export const KEY_USERS = 'users'

export const getAllUsers = () => {
  return localStorage.getItem(KEY_USERS) !== null
    ? JSON.parse(localStorage.getItem(KEY_USERS))
    : []
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
