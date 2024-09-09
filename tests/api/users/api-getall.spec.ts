import { test, expect } from '@playwright/test'

test.describe.parallel('API Testing', () => {

  const baseUrl = 'https://reqres.in/api'
  const page = 1

  test('GET Request - Get All Users', async ({ request }) => {

    const response = await request.get(`${baseUrl}/users?page=${page}`)

    const responseBody = JSON.parse(await response.text())    

    expect(response.status()).toBe(200)

    expect(responseBody.data.length).toBe(6)
  })
})
