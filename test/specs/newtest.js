describe('New Test', () => {

    it('juno test', async() => {

        await browser.url("https://dev-app.juno.finance/login")

        await $('#authEmail').setValue('sonironak284@gmail.com')
        await $('#password').setValue('Soni284ron@k')
        await $('button[type="submit"]').click()
        await browser.pause(5000)
        
    })
})