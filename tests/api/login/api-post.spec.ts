import { test, expect } from '@playwright/test'

test.describe.parallel('API Testing', () => {

  const baseUrl = 'https://reqres.in/api'

  test('POST Request - Login', async ({ request }) => {

    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    })

    const responseBody = JSON.parse(await response.text())

    expect(response.status()).toBe(200)

    expect(responseBody.token).toBeTruthy()
  })

  test('POST Request - Login Fail', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
      },
    })

    const responseBody = JSON.parse(await response.text())

    expect(response.status()).toBe(400)

    expect(responseBody.error).toBe('Missing password')
  })
})
