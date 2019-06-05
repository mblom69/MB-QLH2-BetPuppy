// need to signin manual, due to security verification


var betPuppy = {}

module.exports = {
    beforeEach: browser => {
        betPuppy = browser.page.puppyPages()
        betPuppy.navigate()
            .waitForElementPresent('@logo', 1000)
    },
    after: browser => {
        browser.end()

    },
    'User Login': browser => {
        betPuppy
            .verify.visible('@logo', 'BetPuppy.com')
            .click('@signInSignUp')
            .pause(1000)
            .verify.visible('@googleSignInButton', 'Sign in with Google')
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
                .waitForElementVisible('@enterField', 1000)
                .setValue('@enterField', 'betpuppytester@gmail.com')
                .click('@emailNext')
                .pause(1000)
                .setValue('@enterField', 'B@tPuppyTester1')
                .click('@passwordNext')
                .switchWindow(originalWindow)
        })    
            betPuppy
                .setValue('@wagerField', 'New Wager')
                .pause(500)
            },
        
            'add wager': browser => {
            betPuppy
                    .expect.element('@iBet').text.to.equal('I bet').before(500)
            betPuppy
                .editTest({ wager: 'Tomorrow it will be sunny', amount: '10', expire: '1', newFriend: 'betbuddy@yahoo.com' })
                .pause(3000)
            


    }
}