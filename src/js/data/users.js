import Transaction from '../classes/transaction'
import User from '../classes/user'

const DUMMY_USERS_DATA = [
  new User(
    1656942667530,
    'R',
    'Cas',
    10000,
    'rc@gmail.com',
    'pass',
    [],
    [new Transaction(1656942667530, 'Initial balance', 'Posted', 10000)]
  ),
  new User(
    1656943293201,
    'Stan',
    'Ley',
    10000,
    'stan@gmail.com',
    'pass',
    [],
    [new Transaction(1656943293201, 'Initial balance', 'Posted', 10000)]
  ),
  new User(
    1656943301797,
    'El',
    'laine',
    10000,
    'ellaine@gmail.com',
    'pass',
    [],
    [new Transaction(1656943301797, 'Initial balance', 'Posted', 10000)]
  ),
]

export default DUMMY_USERS_DATA
