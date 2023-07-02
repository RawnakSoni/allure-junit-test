const LoginPage = require('../pages/login.page')

describe('Demo Tests', () => {
    it('my second test', async () => {
        browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await LoginPage.checkMessage('You logged into a secure area!')
    })
})