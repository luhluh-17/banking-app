export const KEY_USERS = 'users'
export const getAllUsers = () => {
  return localStorage.getItem(KEY_USERS) !== null
    ? JSON.parse(localStorage.getItem(KEY_USERS))
    : []
}
