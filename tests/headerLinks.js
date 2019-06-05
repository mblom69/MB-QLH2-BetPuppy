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
    //         .verify.visible('@logo', 'BetPuppy.com')
    //         .click('@signInSignUp')
    //         .pause(1000)
    //         .verify.visible('@googleSignInButton', 'Sign in with Google')
    //         .click('@googleSignInButton')
            
    //     var originalWindow = "betpuppy.com"
    //     browser.windowHandle(result => {
    //         originalWindow = result.value
    //     })
    //     browser.windowHandles(function (result) {
    //         console.log(originalWindow)
    //         console.log(result.value)
    //         var handle = result.value[1]
    //         browser.switchWindow(handle)
    //         betPuppy
    //             .waitForElementVisible('@enterField', 2000)
    //             .setValue('@enterField', 'betpuppytester@gmail.com')
    //             .click('@emailNext')
    //             .pause(2000)
    //             .setValue('@enterField', 'B@tPuppyTester1')
    //             .click('@passwordNext')
    //             .switchWindow(originalWindow)
        // })    
            betPuppy.pause(20000)
                .setValue('@wagerField', 'New Test')
                .pause(500)
            },
        
            'Check Header and Links': browser => {
            betPuppy
                .expect.element('@iBet').text.to.equal('I bet').before(500)
            betPuppy
                .verify.visible('@wagerPageButton', '@handShakeIcon')
                .verify.visible('@betFeedButton', '@betFeedIcon')
                .verify.visible('@leaderPageButton', '@leaderIcon')
                .verify.visible('@friendsPageButton', '@friendsIcon')
                .verify.visible('@menuIcon')
                .click('@menuIcon')
                .verify.visible('@menuItem1', 'Settings')
                .verify.visible('@menuItem2', 'Signout')
                .verify.visible('@footerText', 'privacy')
                .verify.visible('@footerText', 'terms')
                .verify.visible('@footerText', '©2019 BetPuppy')
                .click('@privacy')
                .waitForElementPresent('@privacyTermTab', 1000)
                .verify.visible('@privacyTermTab', 'Privacy Policy for BetPuppy')
                .pause(1000)
                .moveToElement('@copy2019', 1, 1)
                .waitForElementPresent('@copy2019', 1000)
                .click('@wagerPageButton')
                .waitForElementVisible('@enterField', 1000)
                .click('@terms')
                .waitForElementPresent('@privacyTermTab', 1000)
                .verify.visible('@privacyTermTab', 'Terms of Service for BetPuppy')
                .moveToElement('@copy2019', 1, 1)
                .waitForElementPresent('@copy2019', 1000)
                .click('@wagerPageButton')
                .waitForElementVisible('@enterField', 1000)

    }
}