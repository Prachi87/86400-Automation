# 86400-Automation Tests

## Building
1. Use node version >= `v14.15.4`. If `nvm` installed, execute `nvm use` to activate node version set in `.nvmrc`
 
2. Use either `yarn install` or `npm` to install `node_modules`

## Testing
Use the following commands to run the tests in api-automation folder:
    - `npm run test` to run

**Please note** The above run commands can be run using `yarn` as well.

## Test Structure
1. The api tests are written usign Supertest framework with javascript

2. The mobile test framework have been considered using appium with javascript
 
3. `mochawesome-report` folder is generated when tests are run. 