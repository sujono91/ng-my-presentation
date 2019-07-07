const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    allScriptsTimeout: 60000,
    sauceUser: 'sujono91',
    sauceKey: 'c96cd7c4-95c3-4572-87da-c62bd8bd5eab',
    sauceRegion: 'us',
    seleniumAddress: 'https://ondemand.saucelabs.com/wd/hub',
    specs: ['./e2e/src/*.e2e-spec.js'],

    multiCapabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 10',
        name: 'chrome-protractor-test',
        build: 'Sample Protractor Tests',
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        shardTestFiles: true,
        maxInstances: 25
    },{
        browserName: 'firefox',
        version: 'latest',
        platform: 'Windows 10',
        name: 'firefox-protractor-test',
        build: 'Sample Protractor Tests',
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        shardTestFiles: true,
        maxInstances: 25
    }],

    baseUrl: 'https://sujono91.github.io/ng-my-presentation/',

    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        const caps = await browser.getCapabilities();
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
            }
        }));
    },

    framework: 'jasmine',
    SELENIUM_PROMISE_MANAGER: false,

    onComplete: async () => {
        let printSessionId = async (jobName) => {
            let session = await browser.getSession();
            console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            };
        printSessionId("Insert Job Name Here");
    },
};
