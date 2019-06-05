var wagerCommands = {

    editWager: function (wagerEdit) {
        if (wagerEdit.wager) {
            this
                .setValue('@wagerField', wagerEdit.wager)
        }
        if (wagerEdit.amount) {
            this
                .clearValue('@amountField')
                .setValue('@amountField', wagerEdit.amount)
            // this.api.usexpath()
                // .clearValue('(//label[contains(text(), "Amount")])/..//input')
                // .setValue('(//label[contains(text(), "Amount")])/..//input', wagerEdit.amount)
        }
        if (wagerEdit.expire) {
            this
                .click('@expireSelect')
                .pause(1000)
                .click('@expireMinutes')
                .pause(1000)
                .clearValue('@expireField')
                .setValue('@expireField', wagerEdit.expire)
            // this
            //     .clearValue('(//label[contains(text(), "Expiration")])/..//input')
            //     .setValue('(//label[contains(text(), "Expiration")])/..//input', wagerEdit.expire)
            //     .api.useCss()
        }
        if (wagerEdit.newFriend) {
            this
                .setValue('@newFriendField', wagerEdit.newFriend)
        }
        return this
    },

    editTest: function (wagerEdit) {
        this
            .expect.element('@iBet').text.to.equal('I bet').before(500)
        this
            .editWager(wagerEdit)
        this.expect.element('@wagerField').value.to.equal(wagerEdit.wager).before(2000)
        this.expect.element('@amountField').value.to.equal(wagerEdit.amount)
        this.expect.element('@expireField').value.to.equal(wagerEdit.expire)
        this.expect.element('@newFriendField').value.to.equal(wagerEdit.newFriend)
        return this
    }
}

module.exports = {
    url: 'https://www.betpuppy.com',
    commands: [wagerCommands],
    elements: {
        menu: {
            selector: '//*[@class="fas fa-bars fa-lg"]',
            locateStrategy: 'xpath'
        },
        logo: {
            selector: '//*[@class="ml-3"]',
            locateStrategy: 'xpath'
        },
        iBet: {
            selector: '(//label[contains(text(), "I bet")])/..//label',
            locateStrategy: 'xpath'
        },
        signInSignUp: {
            selector: '(//*[@class="btn btn-primary"])[1]',
            locateStrategy: 'xpath'
        },
        emailSignInText: {
            selector: '//*[text()="Sign in with email"]',
            locateStrategy: 'xpath'
        },
        googleSignInText: {
            selector: '//*[text()="Sign in with Google"]',
            locateStrategy: 'xpath'
        },
        enterField: {
            selector: '(//*[@class="whsOnd zHQkBf"])[1]',
            locateStrategy: 'xpath'
        },
        emailNext: {
            selector: '//*[@id="identifierNext"]',
            locateStrategy: 'xpath'
        },
        passwordNext: {
            selector: '//*[@id="passwordNext"]',
            locateStrategy: 'xpath'
        },
        wagerPageButton: {
            selector: '(//*[@class="btn w-100 px-1 btn-selected-tab btn-lg"])[1]',
            locateStrategy: 'xpath'
        },
        handShakeIcon: {
            selector: '//*[@class="far fa-handshake fa-lg"]',
            locateStrategy: 'xpath'
        },
        betFeedButton: {
            selector: '(//*[@class="btn w-100 active btn-unselected-tab btn-lg"])[1]',
            locateStrategy: 'xpath'
        },
        betFeedIcon: {
            selector: '//*[@class="fal fa-comment fa-lg"]',
            locateStrategy: 'xpath'
        },
        leaderPageButton: {
            selector: '(//*[@class="btn w-100 btn-unselected-tab btn-lg"])[1]',
            locateStrategy: 'xpath'
        },
        LeaderIcon: {
            selector: '//*[@class="far fa-trophy-alt fa-lg force-fontawesome-pro-family"]',
            locateStrategy: 'xpath'
        },
        friendsPageButton: {
            selector: '(//*[@class="btn w-100 btn-unselected-tab btn-lg"])[2]',
            locateStrategy: 'xpath'
        },
        friendsIcon: {
            selector: '//*[@class="far fa-users fa-lg force-fontawesome-pro-family"]',
            locateStrategy: 'xpath'
        },
        menuIcon: {
            selector: '//*[@class="fas fa-bars fa-lg"]',
            locateStrategy: 'xpath'
        },
        menuItem1: {
            selector: '(//*[@class="dropdown-item"])[1]',
            locateStrategy: 'xpath'
        },
        menuItem2: {
            selector: '(//*[@class="dropdown-item"])[2]',
            locateStrategy: 'xpath'
        },
        footerText: {
            selector: '//*[@class="container-fluid text-center text-md-left m-0 p-0"]',
            locateStrategy: 'xpath'
        },
        privacy: {
            selector: '//*/a[@href="/privacy"]',
            locateStrategy: 'xpath'
        },
        terms: {
            selector: '//*/a[@href="/terms"]',
            locateStrategy: 'xpath'
        },
        copy2019: {
            selector: '//*[@class="text-muted float-right pt-1 copyright-size"]',
            locateStrategy: 'xpath'
        },
        privacyTermTab: {
            selector: '//*/h2',
            locateStrategy: 'xpath'
        },
        amountField: {
            selector: '(//label[contains(text(), "Amount")])/..//input',
            locateStrategy: 'xpath'
        },
        expireField: {
            selector: '(//label[contains(text(), "Expiration")])/..//input',
            locateStrategy: 'xpath'
        },
        expireSelect: {
            selector: '//*[@class="btn btn-secondary dropdown-toggle"]',
            locateStrategy: 'xpath'
        },
        expireMinutes:{
            selector: '//*[text()="Minutes"]',
            locateStrategy: 'xpath'
        },

        googleSignInButton: '[data-provider-id="google.com"]',
        emailSignInButton: '[data-provider-id="password"]',
        headerText: '[id="headingText"]',
        wagerField: '#wager',
        newFriendField: '#newFriends'

    }
}

