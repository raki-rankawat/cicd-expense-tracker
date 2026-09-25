import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders expense tracker', () => {
  render(<App />)

  expect(screen.getByText('Expense Tracker')).toBeInTheDocument()
})
