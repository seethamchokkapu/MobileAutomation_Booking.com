var allure = require('allure-commandline');
const allureReporter = require('@wdio/allure-reporter').default;
exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    path: '/wd/hub/',
    port: 4723,
    //
    // ==================
    // Specify Test Files
    // ==================
    
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    
    maxInstances: 10,

    //
    // ===================
    // Test Configurations
    // ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'debug',
    //
    // Set specific log levels per logger
    logLevels: {
        webdriver: 'info',
        '@wdio/appium-service': 'debug'
    },
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    sync: false,
    coloredLogs: true,
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './reports/errorShots/',
    //
    // baseUrl: 'http://localhost/wd/hub',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 1 * 60000,
    commandTimeout: 1 * 60000,
    newCommandTimeout: 1 * 60000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    services: [
    [
        'appium',
    ],
    ],

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: false
    }]],    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 40000000
    },
    //
    // =====
    // Hooks
    // =====
    
    beforeSuite: function (suite) {
        // browser.deleteCookies();
        global.allureReporter = allureReporter;
        allureReporter.addFeature(suite.name);
        allureReporter.addDescription("generating Allure reports " + suite.name);
    },
    
    beforeTest: function (test, context) {
        // allureReporter.addEnvironment("BROWSER", browser.capabilities.browserName);
        allureReporter.reportedEnvironmentVars("BROWSER", browser.capabilities.browserName);

    },
    
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
        // var name = 'ERROR-' + Date.now();
        // await browser.takeScreenshot('./errorShots/' + name + '.png');
            await browser.takeScreenshot();
        //   browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}');
        }else {
            await browser.takeScreenshot();
        }
    },
    
    afterSuite: function (suite) {
        //allure generate allure-results/ --clean && allure open
    },

    onComplete: function (exitCode, config, capabilities, results) {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError), 5000);
            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout);
                if (exitCode !== 0) {
                    return reject(reportError)
                }
                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
}
