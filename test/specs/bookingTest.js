const { expect, driver } = require("@wdio/globals");
const IndexPage = require("../pageobjects/index.page");
const data=require("../../data/booking.json")
require("dotenv").config();
describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await IndexPage.LoginPage.login(
      process.env.booking_userName,
      process.env.booking_password,
    );
  });
  it("should test for round trip in flights section", async () => {
    await IndexPage.OneWayPage.roundTrip(process.env.Arrival,data.firstName,data.lastName,data.mobile);
  });
});
