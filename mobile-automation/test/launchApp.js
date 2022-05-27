const launchApp = require('../pages/homeScreen.jss');

describe('Launch App', () => {
    before(() => {
        const client = await wdio.remote(launchApp.launch());
    })
})