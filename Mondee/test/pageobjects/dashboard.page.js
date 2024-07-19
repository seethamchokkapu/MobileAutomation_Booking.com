const { driver} = require('@wdio/globals')
const Page = require('./page');
const LoginPage = require('../pageobjects/login.page');
const { assert } = require("chai");
const { expect } = require("chai");


class dashboardPage extends Page {

    locators = {
        android: {
            notificationAlert: "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]",
            oldAppAlert : "//android.view.View[@content-desc='No']",
            titleDesc: "//android.view.View[@content-desc='The future of travel.']",
            menuBar: "(//android.widget.ImageView)[1]",
            signOutButton : "//*[@content-desc='Sign out']"
        },
        ios: {
            notificationAlert: "",
            oldAppAlert : "~No",
            titleDesc: "~The future of travel.",
            menuBar: "",
            signOutButton : "~Sign out"
        }
      };

      platform() {
        return driver.isAndroid ? 'android' : 'ios';
      }
   
    get notificationAlert () {
        return $(this.locators[this.platform()].notificationAlert);
    }

    get oldAppAlert () {
        return $(this.locators[this.platform()].oldAppAlert);
    }

    get titleDesc () {
        return $(this.locators[this.platform()].titleDesc);

        //Logo /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]

        //Menu /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]
        
        //android.view.View[@content-desc="Start Planning"]

        //Flights /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.ImageView[1]
        //android.widget.ImageView[@content-desc="Flights"]

        //Hotels /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.ImageView[2]
        //android.widget.ImageView[@content-desc="Hotels"]

        //Cruise 	/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.ImageView[3]
        //android.widget.ImageView[@content-desc="Cruise"]

        //android.widget.ImageView[@content-desc="Bag"]

        //Menu
        //android.view.View[@content-desc="Customer Admin"]
        //android.view.View[@content-desc="qatestfjexpert@mondee.com"]

        //android.widget.ImageView[@content-desc="Home"]
        //android.widget.ImageView[@content-desc="Abhi"]
        //android.widget.ImageView[@content-desc="Live Support"]
        //android.widget.ImageView[@content-desc="Flights"]
        //android.widget.ImageView[@content-desc="Hotels"]
        //android.widget.ImageView[@content-desc="Cruises"]
        //android.widget.ImageView[@content-desc="Trips"]
        //android.widget.ImageView[@content-desc="Traveler Onboarding"]
        //android.widget.ImageView[@content-desc="Settings"]

        //android.widget.ImageView[@content-desc="Sign out"]
    }

    get menuBar () {
        return $(this.locators[this.platform()].menuBar);
    } 

    get signOutButton () {
        return $(this.locators[this.platform()].signOutButton);
    }

    async clickNotificationAlert () {
        await this.notificationAlert.click();
    }

    async clickOldAppAlert () {
        await this.oldAppAlert.click();
    }

    async clickOnMenu (){
        await this.menuBar.click();
    }

    async clickSignOutBtn (){
        await this.signOutButton.click();
    }

    async handleNotifications () {
        await this.clickNotificationAlert();
        await this.clickOldAppAlert();
    }

    async logOut () {
        await this.menuBar.waitForDisplayed();
        await this.clickOnMenu();
        this.clickSignOutBtn();
        expect(await  LoginPage.btnSubmit.isDisplayed()).to.be.true;
    }

}

module.exports = new dashboardPage();
