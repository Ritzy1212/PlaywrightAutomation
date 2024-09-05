import { test, expect } from '@playwright/test'

test.describe.only('Visual Regression Testing Example', () => {

    const url ='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

  test('Full Page Snapshot', async ({ page }) => {
    await page.goto(url)
    expect(await page.screenshot()).toMatchSnapshot('login.png')
  })

  test('Single Element Snapshot', async ({ page }) => {
    await page.goto(url)
    const pageElement = await page.locator("xpath=//div[@class='orangehrm-login-branding']")
    expect(await pageElement.screenshot()).toMatchSnapshot('page-title.png')
  })

  test('Single Element Snapshot 2', async ({ page }) => {
    await page.goto(url)
    const pageElement = await page.getByAltText("company-branding")
    expect(await pageElement.screenshot()).toMatchSnapshot('page-title2.png')
  })
})
