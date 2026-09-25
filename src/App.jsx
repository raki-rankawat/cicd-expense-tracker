import { useState } from 'react'

function App() {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [expenses, setExpenses] = useState([])

  const addExpense = e => {
    e.preventDefault()

    if (!description || !amount) return

    setExpenses([
      ...expenses,
      {
        description,
        amount: Number(amount),
      },
    ])

    setDescription('')
    setAmount('')
  }

  return (
    <div>
      <h1>Expense Tracker</h1>

      <form onSubmit={addExpense}>
        <input
          placeholder='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <input
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <button type='submit'>Add Expense</button>
      </form>

      <h2>Expenses</h2>

      {expenses.map((expense, index) => (
        <div key={index}>
          {expense.description} - €{expense.amount}
        </div>
      ))}
    </div>
  )
}

export default App
