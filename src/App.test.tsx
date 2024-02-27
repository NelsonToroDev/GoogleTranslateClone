import { test, describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('My App works as expected', async () => {
  const user = userEvent.setup()
  const app = render(<App />)
  const textAreaForm = app.getByPlaceholderText('Insert a text')
  await user.type(textAreaForm, 'Hello world')
  const result = await app.findByDisplayValue(/Hola mundo/i, {}, { timeout: 5000 })
  expect(result).toBeTruthy()
})
