import { test, expect } from '@playwright/test'

test.describe.parallel('API Testing', () => {

  const baseUrl = 'https://reqres.in/api'
  const userId=2

  test('DELETE Request - Delete User', async ({ request }) => {

    const response = await request.delete(`${baseUrl}/users/${userId}`)

    expect(response.status()).toBe(204)
  })
})
