import Transaction from '../classes/transaction'
import User from '../classes/user'

const DUMMY_USERS_DATA = [
  new User(
    1656942667530,
    'Admin',
    'User',
    10000,
    'admin@test.com',
    'pass',
    [],
    [new Transaction(1656942667530, 'Initial balance', 'Posted', 10000)]
  ),
  new User(
    1656943293201,
    'Jane',
    'Doe',
    10000,
    'janedoe@gmail.com',
    'pass',
    [],
    [new Transaction(1656943293201, 'Initial balance', 'Posted', 10000)]
  ),
  new User(
    1656943301797,
    'John',
    'Doe',
    10000,
    'johndoe@gmail.com',
    'pass',
    [],
    [new Transaction(1656943301797, 'Initial balance', 'Posted', 10000)]
  ),
]

export default DUMMY_USERS_DATA
