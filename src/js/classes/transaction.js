export default class Transaction {
  constructor(id, description, status, amount) {
    this.id = id
    this.description = description
    this.status = status
    this.amount = amount
  }

  get formattedAmount() {
    const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
      currency: 'PHP',
      style: 'currency',
    })

    return `${CURRENCY_FORMATTER.format(this.amount)}`
  }
}
