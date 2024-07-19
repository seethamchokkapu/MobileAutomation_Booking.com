const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

const appium = {
     "platformName": "Android",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "UiAutomator2",
    "appium:app":"C:/Mondee_framework/mondee-automation/App/prod_beta_4.0.0_build_488.apk",
    "appium:appPackage": "com.lasership.eliv2.beta",
    "appium:appActivity": "com.lasership.eli.ui.splash.SplashActivity",
    "appium:platformVersion": "14"
};

exports.config = merge(
    wdioConf.config,
    {
        capabilities: [appium ],
    },
    { clone: false },
);
