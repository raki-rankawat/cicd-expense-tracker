import { useState } from 'react'
import './App.css'

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

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <main className="app">
      <h1>Expense Tracker</h1>

      <div className="layout">
        <section className="panel form-panel">
          <h2>Add Expense</h2>

          <form className="expense-form" onSubmit={addExpense}>
            <label className="field">
              <span>Description</span>
              <input
                placeholder="Coffee, groceries…"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </label>

            <label className="field">
              <span>Amount</span>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </label>

            <button type="submit">Add Expense</button>
          </form>
        </section>

        <section className="panel list-panel">
          <div className="list-header">
            <h2>Expenses</h2>
            <span className="total">€{total}</span>
          </div>

          {expenses.length === 0 ? (
            <p className="empty">No expenses yet.</p>
          ) : (
            <ul className="expense-list">
              {expenses.map((expense, index) => (
                <li key={index}>
                  <span>{expense.description}</span>
                  <span className="expense-amount">€{expense.amount}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
