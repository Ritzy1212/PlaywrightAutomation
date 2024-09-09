import { test, expect } from '@playwright/test'

test.describe.parallel('API Testing', () => {

  const baseUrl = 'https://reqres.in/api'
  const userId=1

  test('GET Request - Get User Detail', async ({ request }) => {

    const response = await request.get(`${baseUrl}/users/${userId}`)

    const responseBody = JSON.parse(await response.text())    

    expect(response.status()).toBe(200)
    expect(responseBody.data.id).toBe(1)
    expect(responseBody.data.first_name).toBe('George')
    expect(responseBody.data.last_name).toBe('Bluth')
    expect(responseBody.data.email).toBeTruthy()
  })
})
