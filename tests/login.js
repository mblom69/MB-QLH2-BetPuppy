// need to signin manual, due to security verification


var betPuppy = {}

module.exports = {
    beforeEach: browser => {
        betPuppy = browser.page.puppyPages()
        betPuppy.navigate()
            .waitForElementPresent('@logo', 5000)
    },
    after: browser => {
        browser.end()

    },
    'User Login': browser => {
        betPuppy
            .verify.visible('@logo', 'BetPuppy.com')
            .pause(1000)
            .click('@signInSignUp')
            .pause(1000)
            .verify.visible('@googleSignInButton', 'Sign in with Google')
            .pause(1000)
            .click('@googleSignInButton')
            

        var originalWindow = "betpuppy.com"
        browser.windowHandle(result => {
            originalWindow = result.value
        })
        browser.windowHandles(function (result) {
            console.log(originalWindow)
            console.log(result.value)
            var handle = result.value[1]
            browser.switchWindow(handle)
            betPuppy
                .waitForElementVisible('@enterField', 2000)
                .setValue('@enterField', 'betpuppytester@gmail.com')
                .click('@emailNext')
                .pause(1000)
                .setValue('@enterField', 'B@tPuppyTester1')
                .click('@passwordNext')
                .pause(2000)
                .switchWindow(originalWindow)
        })

        betPuppy
            .pause(2000)
            .expect.element('@iBet').text.to.equal('I bet').before(1000)
        betPuppy
            .setValue('@wagerField', 'New Wager')
            .pause(1000)
            },
            'add wager': browser => {
                betPuppy
                    .expect.element('@iBet').text.to.equal('I bet').before(500)
                betPuppy
                    .editTest({ wager: 'Tomorrow it will be sunny', amount: '10', expire: '1', newFriend: 'betbuddy@yahoo.com' })
                    .pause(3000)
            


    }
}