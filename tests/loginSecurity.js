module.exports = {
    beforeEach: browser => {
        browser.url('http://betpuppy.com/')
        },
    after: browser => {
        browser.end()
    },
    'Can log in': browser =>{
        browser
        .pause(5000)
        
        // browser.setValue('.textarea-description textarea', 'puppy')
        // browser
        // .switchWindow(handle)
        // .setValue([Keys, 'puppy', browser.Keys.TAB])
    .pause(3000)
        // .useXpath()
        // .verify.visible('//*[@class="domain-name text-green"]', 'Puppy')
        // .useCss()
    }
}