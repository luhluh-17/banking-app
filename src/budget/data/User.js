const User = {
  firstName: 'Stanley',
  lastName: 'Hugo',
  accountNumber: '894 414 6749',
  email: 'stanleyhugo06@gmail.com',
  password: 12345,
  balance: 20000,
  expenses: [
    {
      id: 1,
      name: 'Electricity',
      cost: 4000,
    },
    {
      id: 1,
      name: 'Water',
      cost: 300,
    },
    {
      id: 1,
      name: 'Internet',
      cost: 2000,
    },
    {
      id: 1,
      name: 'Grocery',
      cost: 3000,
    },
    {
      id: 1,
      name: 'Rent',
      cost: 10000,
    },
  ],
  transactions: [
    {
      id: 1,
      date: 'January 5, 2014',
      desc: 'Ate outside',
      status: 'Posted',
      amount: 200,
    },
    {
      id: 2,
      date: 'January 5, 2014',
      desc: 'Transferred to other bank',
      status: 'Posted',
      amount: 5000,
    },
  ],
}

export default User
