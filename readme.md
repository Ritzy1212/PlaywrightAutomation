# Playwright cheet sheet

## To Run Tests 
### npx playwright test (headless mode)
### npx playwright test --headed (headed mode)

## To Specify browser
### npx playwright test --browser=firefox
### npx playwright test --browser=all

## Combine
### npx playwright test --browser=firefox --headed

## To runall tests
### npx playwright test

## To run specfic test
### npx playwright test tests/example.spec.ts

## To Skip all tests or run only selected ones
### Tag test with .skip (test.skip())
### Tag test with .only (test.only())

