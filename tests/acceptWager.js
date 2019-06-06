// Before this test can run, create two wagers in different account the bettypuppytester@gmail.com: 
// first wager has - Test 1 for automation (wager text)
// second wager has - Test 2 for automation (wager text)

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
            .setValue('@wagerField', 'Accept/Decline Wager')
            .pause(1000)
            },

    'Accept wager': browser => {
        browser
            .useXpath()
            .click('//*[@class="fal fa-comment fa-lg"]')
            .waitForElementPresent('(//*[@class="btn w-100 px-3 rounded border btn-light btn-sm"])[1]',2000)
            .click('(//*[@class="btn w-100 px-3 rounded border btn-light btn-sm"])[1]')
            .waitForElementPresent('(//*[@class="btn rounded border btn-outline-primary"])[1]',2000)
            .verify.visible('(//*[@class="card-text"])[1]', 'Test 1 for Automation')
            .verify.visible('(//*[@class="card-text"])[2]', 'Test 2 for Automation')
            .click('(//*[@class="btn rounded border btn-outline-primary"])[1]')
            .pause(3000)
            .waitForElementPresent('(//*[@class="btn rounded border btn-outline-danger"])[2]', 2000)
            .click('(//*[@class="btn rounded border btn-outline-danger"])[2]')
            .pause(2000)
            .click('(//*[contains(text(), "Active")])')
            .verify.visible('(//*[@class="card-text"])[1]', 'Test 1 for Automation') 
            .verify.visible('(//*[@class="card-text"])[1]', 'Test 2 for Automation')
        if (browser.expect.element('(//*[@class="accept-icon-down text-green"])[1]').to.be.present) {
            browser.pause(2000)
            .expect.element('(//*[@class="card-text"])[1]').text.to.contain('Test 1 for Automation')
            }  
        browser 
        if (browser.expect.element('(//*[@class="reject-icon-down text-red"])[2]').to.be.present) {
            browser.pause(2000)
            .expect.element('(//*[@class="card-text"])[1]').text.to.contain('Test 2 for Automation')
            }  
        browser 
            .useCss()
          

    }
}