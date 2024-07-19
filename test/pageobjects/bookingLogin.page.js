const { $, driver,browser} = require('@wdio/globals')
const Page = require('./page');
const platform=require("../../utils/util")
class LoginPage extends Page {
    locators = {
        android: {
            clsoeadd:"~Navigate up",
            email:"(//android.widget.Button)[3]",
            userName:"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.view.View[2]/android.widget.EditText",
            continue:"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.view.View[3]/android.widget.Button",
            passWord:"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText",
            confirmpwd:"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[4]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText",
            signIn:"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.Button",
            profile:"//android.widget.FrameLayout[@content-desc='Profile']/android.widget.FrameLayout/android.widget.TextView",
            id:"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView",
            search:"//android.widget.FrameLayout[@content-desc='Search']/android.widget.FrameLayout/android.widget.TextView",
            
        },
      };
    get  closeNotification () {
        return $(this.locators[platform()].clsoeadd);
    }
    get  clickOnEmail () {
        return $(this.locators[platform()].email);
    }
    get  enterUsername () {
        return $(this.locators[platform()].userName);
    }
    get  clickOnContinue() {
        return $(this.locators[platform()].continue);
    }
    get  clickOnPassword() {
        return $(this.locators[platform()].passWord);
    }
    get  clickOnConfirm() {
        return $(this.locators[platform()].confirmpwd);
    }
    get  clickOnSignIn() {
        return $(this.locators[platform()].signIn);
    }
    get  clickOnProfile() {
        return $(this.locators[platform()].profile);
    }
    get  clickOnId() {
        return $(this.locators[platform()].id);
    }
    get  mainPage() {
        return $(this.locators[platform()].search);
    }
    async login(username,password) {
     await this.closeNotification.click();
     await browser.pause(5000);
     await this.clickOnEmail.click();
     await this.enterUsername.setValue(username);
     await this.clickOnContinue.click();
     await this.clickOnPassword.setValue(password);
     await this.clickOnSignIn.click();    
    }
}
module.exports = new LoginPage();
