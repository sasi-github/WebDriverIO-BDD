const { expect } = require('chai');
const { Given } = require('cucumber');
const { When } = require('cucumber');
const { Then } = require('cucumber');

Given(/^I launch the application$/, function () {
    browser.url("http://www.google.com");
});

When(/^I search for content$/, function () {
    browser.$("[name='q']").setValue("TEST SEARCH");
    browser.$("[name='btnK']").click();
});

Then(/^I verify browser title$/, function () {
    expect(browser.getTitle()).to.equal('TEST SEARCH - Google Search');
});

