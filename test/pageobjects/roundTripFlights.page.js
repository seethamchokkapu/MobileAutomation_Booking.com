const { $, driver, browser } = require("@wdio/globals");
const Page = require("./page");
const platform = require("../../utils/util");
class OneWayPage extends Page {
  locators = {
    android: {
      flights:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]",
      arrivalInput: "(//android.widget.Button)[2]",
      enterArrivalInput:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.EditText",
      checkbox:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup/android.widget.CheckBox",
      doneBtn:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.Button",
      searchBtn:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/androidx.compose.ui.platform.ComposeView[1]/android.view.View/android.view.View[1]/android.view.View[3]/android.widget.Button",
      selectFlight: "(//android.widget.FrameLayout)[8]",
      selectButton: "//android.widget.Button[@text='Select']",
      nextButton: "//android.widget.Button[@text='Next']",
      skipButton: "//android.widget.Button[@text='Skip']",
      travellerDetails:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]",
      firstName: "(//android.widget.EditText)[1]",
      lastName: "(//android.widget.EditText)[2]",
      genderDropdown:
        "(//android.view.View[@resource-id='com.booking:id/bui_input_container_background'])[3]",
      gender: "//android.widget.RadioButton[@text='Male']",
      doneButton: "//android.widget.Button[@text='Done']",
      contactDetails: "(//android.view.ViewGroup)[3]",
      contactNumber: "(//android.widget.EditText)[2]",
    },
  };
  get clickOnFlights() {
    return $(this.locators[platform()].flights);
  }
  get clickWhereTo() {
    return $(this.locators[platform()].arrivalInput);
  }
  get enterArrivalInput() {
    return $(this.locators[platform()].enterArrivalInput);
  }
  get clickCheckBox() {
    return $(this.locators[platform()].checkbox);
  }
  get clickDoneBtn() {
    return $(this.locators[platform()].doneBtn);
  }
  get clickOnSeachBtn() {
    return $(this.locators[platform()].searchBtn);
  }
  get selectFlight() {
    return $(this.locators[platform()].selectFlight);
  }
  get selectButton() {
    return $(this.locators[platform()].selectButton);
  }
  get nextButton() {
    return $(this.locators[platform()].nextButton);
  }
  get skipButton() {
    return $(this.locators[platform()].skipButton);
  }
  get travellerDetails() {
    return $(this.locators[platform()].travellerDetails);
  }
  get firstName() {
    return $(this.locators[platform()].firstName);
  }
  get lastName() {
    return $(this.locators[platform()].lastName);
  }
  get clickOnGenderDropdown() {
    return $(this.locators[platform()].genderDropdown);
  }
  get selectGender() {
    return $(this.locators[platform()].gender);
  }
  get clickOnDoneBtn() {
    return $(this.locators[platform()].doneButton);
  }
  get clickOnContactDetails() {
    return $(this.locators[platform()].contactDetails);
  }
  get clickOnContactInput() {
    return $(this.locators[platform()].contactNumber);
  }
  async roundTrip(arrival, firstname, lastname, contact) {
    await browser.pause(3000);
    await this.clickOnFlights.click();
    await this.clickWhereTo.click();
    await this.enterArrivalInput.click();
    await this.enterArrivalInput.setValue(arrival);
    await this.clickCheckBox.click();
    await this.clickDoneBtn.click();
    await this.clickOnSeachBtn.click();
    await this.selectFlight.click();
    await browser.pause(2000);
    await this.selectButton.click();
    await browser.pause(3000);
    await this.nextButton.click();
    await browser.pause(2000);
    await this.skipButton.click();
    await this.travellerDetails.click();
    await this.firstName.setValue(firstname);
    await this.lastName.click();
    await this.lastName.setValue(lastname);
    await driver.touchAction([
      { action: "press", x: 172, y: 800 },
      { action: "wait", ms: 500 },
      { action: "moveTo", x: 190, y: 100 },
      "release",
    ]);
    await this.clickOnGenderDropdown.click();
    await this.selectGender.click();
    await this.clickOnDoneBtn.doubleClick();
    await browser.pause(3000);
    await this.clickOnContactDetails.click();
    await browser.pause(3000);
    await this.clickOnContactInput.click();
    await browser.pause(3000);
    await this.clickOnContactInput.setValue(contact);
    await browser.pause(3000);
    await this.clickOnDoneBtn.click();
    await browser.pause(3000);
  }
}
module.exports = new OneWayPage();
