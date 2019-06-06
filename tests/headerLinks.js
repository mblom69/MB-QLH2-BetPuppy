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
            .setValue('@wagerField', 'header link test')
            .pause(1000)
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
                    .waitForElementPresent('@menuIcon', 1000)
                    .verify.visible('@menuItem1', 'Settings')
                    .verify.visible('@menuItem2', 'Signout')
                    .verify.visible('@footerText', 'privacy')
                    .verify.visible('@footerText', 'terms')
                    .verify.visible('@footerText', '©2019 BetPuppy')
                    .click('@privacy')
                    .waitForElementPresent('@privacyTermTab', 1000)
                    .verify.visible('@privacyTermTab', 'Privacy Policy for BetPuppy')
                    .pause(1000)
                    .moveToElement('@privacy', 1, 1)
                    .waitForElementPresent('@copy2019', 1000)
                    .click('@handShakeIcon')
                    .pause(1000)
                    .waitForElementVisible('@wagerField', 2000)
                    .click('@terms')
                    .waitForElementPresent('@privacyTermTab', 1000)
                    .verify.visible('@privacyTermTab', 'Terms of Service for BetPuppy')
                    .moveToElement('@privacy', 1, 1)
                    .waitForElementPresent('@copy2019', 1000)
                    .click('@handShakeIcon')
                    .waitForElementVisible('@wagerField', 2000)
    
        }
    }