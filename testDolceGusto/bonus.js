var helper = require('../helper.js');

describe('Test: Authenticate and try to save random code', function () {


    beforeEach (function () {
        browser.driver.get(helper.path());
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        helper.loginUser();

    });


    it('Try to save random code.', function () {
        browser.driver.sleep(1000);

        for (i = 0; i < 5; i++) {
            browser.ignoreSynchronization=true;
            browser.get('https://www.nescafe-dolcegusto.com.br/mybonus/');
            browser.ignoreSynchronization=true;
            browser.driver.sleep(1500);
            var test = helper.getText(12);
            console.log(test);
            element(by.id('coupon_code')).sendKeys(test);
            browser.driver.sleep(1500);
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
            browser.driver.sleep(1500);
            console.log("fim" + i);
        }
    });
});






