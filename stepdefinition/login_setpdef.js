const { Given } = require('cucumber');
const { When } = require('cucumber');
const { Then } = require('cucumber');

Given(/^Launch the DEMO application$/, function () {
    browser.url("http://newtours.demoaut.com");
});

When(/^I loggin with registered user$/, function () {
    browser.$("//input[@name='userName']").setValue("mercury");
    browser.$("//input[@name='password']").setValue("mercury");
    browser.$("//input[@name='login']").click();
});

Then(/^I shall be on the Flight Finder page$/, function () {
    var strUrl = browser.getUrl();
    console.log("URL is : " + strUrl);
});
