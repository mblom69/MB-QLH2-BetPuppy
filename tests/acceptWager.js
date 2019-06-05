// Before this test can run, create two wagers in different account the bettypuppytester@gmail.com: 
// first wager has - Test 1 for automation (wager text)
// second wager has - Test 2 for automation (wager text)

// need to signin manual, due to security verification

module.exports = {
    beforeEach: browser => {
        browser.url('http://www.betpuppy.com')
        .pause(50000)
        
        },
    after: browser => {
        browser.end()
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
            // .click('(//*[@class="btn rounded border btn-outline-primary"])[1]')
            .pause(3000)
            .waitForElementPresent('(//*[@class="btn rounded border btn-outline-danger"])[2]', 2000)
            .click('(//*[@class="btn rounded border btn-outline-danger"])[2]')
            .pause(2000)
            .click('(//*[contains(text(), "Active")])')
            // .verify.visible('(//*[@class="card-text"])[1]', 'Test 1 for Automation') //Accept button not working right now//
            // .verify.visible('(//*[@class="card-text"])[1]', 'Test 2 for Automation')
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
           .pause(5000)

    }
}