import {user} from '../components/LoginForm'


const Users = JSON.parse(localStorage.getItem('users'))
export let currentUser = {}

export default Users
