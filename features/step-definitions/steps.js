const { expect } = require("chai");
const { Given } = require("cucumber");
const { When } = require("cucumber");
const { Then } = require("cucumber");

Given(/^I launch the application$/, function () {
  browser.url("https://accounts.google.com");
});

When(/^I search for content$/, function () {
  browser.$("[name='identifier']").setValue("ABCD123@GMAIL.COM");
  //browser.$("[name='password']").setValue("MYPASSWORD");  
  //browser.$("[name='btnK']").click();
});

Then(/^I verify browser title$/, function () {
  expect(browser.getTitle()).to.equal("TEST SEARCH - Google Search");
});
