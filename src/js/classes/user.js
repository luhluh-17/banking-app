import { capitalizeWord } from '../utils/helper'
import Transaction from './transaction'

export default class User {
  constructor(
    id,
    firstName,
    lastName,
    balance = 0,
    email,
    password = 'pass',
    expenses = [],
    transactions = [
      new Transaction(
        new Date().getTime(),
        'Initial balance',
        'Posted',
        balance
      ),
    ]
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.balance = balance
    this.password = password
    this.email = email
    this.expenses = expenses
    this.transactions = transactions
  }

  get name() {
    return capitalizeWord(`${this.firstName} ${this.lastName}`)
  }

  get formattedBalance() {
    const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
      currency: 'PHP',
      style: 'currency',
    })

    return `${CURRENCY_FORMATTER.format(this.balance)}`
  }

  static calculateRemainingBalance(User) {
    return User.balance - this.calculateTotalExpense(User.expenses)
  }

  static calculateTotalExpense(array) {
    let total = 0
    array.forEach(expense => (total += expense.cost))
    return total
  }
}
