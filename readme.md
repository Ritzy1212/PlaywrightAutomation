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

### To tag tests and run them by tags
## add a tag to the test title i'e myTag
## then run in cli, npx playwright test --grep myTag
## or to ignore all tag tests and run all others, npx playwright test --grep-invert myTag

## See documentation
### https://playwright.dev/docs/test-cli

## Using playwright config files
### create the config file, playwright.config.ts
### To run, npx playwright test --config=playwright.config.ts
### To specify a project (this can have settings i'e browser to run), npx playwright test --config=playwright.config.ts --project=Webkit