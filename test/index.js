module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body',1000)
        .setValue('input[type=text]', 'nightwatch js')
        .waitForElementVisible('input[name=btnK]')
        .click('input[name=btnK]')
        .pause(3000)
        .assert.value('#searchform input[name="q"]', 'nightwatch js')
        .end();
    }
  };