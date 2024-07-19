const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.js");
const appium = {
    "platformName": "android",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "UiAutomator2",
    "appium:app":"C:/Mobile_Automation_booking.com/App/booking-com-39-9.apk",
    "appium:appPackage": "com.booking",
    "appium:appActivity": "com.booking.startup.HomeActivity",
    "appium:platformVersion": "14"
  };
exports.config = merge(
  wdioConf.config,
  {
    capabilities: [appium],
  },
  { clone: false }
);
