// need to signin manual, due to security verification

module.exports = {
    beforeEach: browser => {
        browser.url('http://www.betpuppy.com')
        .pause(50000)
        
        },
    after: browser => {
        browser.end()
    },

    'Add Friend': browser => {
        browser
            .useXpath()
            .click('//*[@class="far fa-users fa-lg force-fontawesome-pro-family"]')
            .waitForElementPresent('(//*[contains(text(), "Add friends")])', 2000)
            .verify.visible('(//*[contains(text(), "Add friends")])', 'Add friends')
            .setValue('//div/*[@id="newFriends"]', 'betpuppytester@gmail.com')
            .pause(1000)
            .keys(browser.Keys.ENTER)
            .pause(2000)
            .useCss()

    }
}