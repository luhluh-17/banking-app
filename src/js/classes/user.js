export default class User {
  constructor(
    id,
    firstName,
    lastName,
    email,
    password,
    balance,
    expenses,
    transactions
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.balance = balance
    this.expenses = expenses
    this.transactions = transactions
  }

  get name() {
    return `${this.firstName} + ${this.lastName}`
  }

  get formattedBalance() {
    const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
      currency: 'PHP',
      style: 'currency',
    })

    return `₱ ${CURRENCY_FORMATTER.format(this.balance)}`
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
