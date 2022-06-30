export default class User {
  constructor(
    firstName,
    lastName,
    balance = 0,
    email,
    password = 'pass',
    expenses = [],
    transactions = []
  ) {
    this.id = new Date().getTime()
    this.firstName = firstName
    this.lastName = lastName
    this.balance = balance
    this.password = password
    this.email = email
    this.expenses = expenses
    this.transactions = transactions
  }

  get name() {
    return `${this.firstName} ${this.lastName}`
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
