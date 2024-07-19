const { $, driver } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
   
    locators = {
        android: {
            inputUserName: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]",
            inputUserName2 : "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.ImageView[1]",
            inputPassword: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.ImageView[2]",
            btnSubmit: "//android.widget.ImageView[@content-desc='Login']",
        },
        ios: {
            inputUserName: "~userName",
            inputUserName2: "-ios predicate string:type == 'XCUIElementTypeOther' AND name CONATINS 'PASS'",
            inputPassword: "~password",
            btnSubmit: '~buttonSignin',
        }
      };

      platform() {
        return driver.isAndroid ? 'android' : 'ios';
      }

    get  inputUserName () {
        return $(this.locators[this.platform()].inputUserName);
    }

    get inputUserName2(){
        return $(this.locators[this.platform()].inputUserName2);
    }

    get inputPassword () {
        return $(this.locators[this.platform()].inputPassword);
    }

    get btnSubmit () {
        return $(this.locators[this.platform()].btnSubmit);
    }

    async login (username, password) {
        await this.inputUserName.waitForDisplayed();
        await this.inputUserName.click();
        await this.inputUserName2.setValue(username);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
