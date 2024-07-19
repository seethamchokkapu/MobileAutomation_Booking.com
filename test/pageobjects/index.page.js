const { $, driver } = require('@wdio/globals')
const Page = require('./page');
const LoginPage = require("./bookingLogin.page");
const OneWayPage = require("./roundTripFlights.page");

module.exports = {LoginPage,OneWayPage};

