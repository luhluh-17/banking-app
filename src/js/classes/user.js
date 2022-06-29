class User {
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

  static calculateRemainingBalance(User) {
    return User.balance - this.calculateTotalExpense(User.expenses)
  }

  static calculateTotalExpense(array) {
    let total = 0
    array.forEach(expense => (total += expense.cost))
    return total
  }
}
