const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

const appium = {
     "platformName": "iOS",
     "appium:deviceName": "iPhone 14",
     "appium:platformVersion": "16.4",
     "appium:automationName": "XCUITest",
     "appium:app": "/Users/anjanikumarv/Documents/Mondee-Debug.app",
     "appium:bundleId": "com.mondee.mobileapp",
     "appium:autoAcceptAlerts": "true",
     "appium:noReset": "false",
};

exports.config = merge(
    wdioConf.config,
    {
        capabilities: [appium ],
    },
    { clone: false },
);