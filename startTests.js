
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    suites: {
        regressionTests: [
            'testDolceGusto/bonus.js'
        ]

    },

    multiCapabilities: [
        {'browserName': 'chrome'},

    ],

    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1000000
    }
    ,

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization=true;
    }
};