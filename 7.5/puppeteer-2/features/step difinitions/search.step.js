const chai = require("chai");
const puppeteer = require("puppeteer");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { clickElement, getText } = require("../../lib/commands.js");

Before(async function () {
    const browser = await puppeteer.launch({ headers: false, slowMore: 50 });
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});

After(async function () {
    if (this.browser) {
        await this.browser.close();
    }
});

Given('user is on {string} page', async function (string) {
    return await this.page.goto("http://qamid.tmweb.ru${string}", {
        setTimeout: 20000,
    });
});

When('user choose a date {string}', async function (string) {
    return await clickElement(this.page, "nav > a:nth-child(3)", {
        setTimeout: 20000,
    });
});

Given('user chose a time {string}', async function (string) {
    return await clickElement(this.page, "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li", {
        setTimeout: 20000,
    });
});

Then('user check the session {string}', async function (string) {
    const actual = await getText(this.page, "div > p.buying__info-start");
    const expected = await string;
    expect(actual).contains(expected);
});

Then('user chose a seat {string}', async function (string) {
    return await clickElement(this.page, "div:nth-child(7) > span:nth-child(5)", {
        setTimeout: 20000,
    });
});

And('user booking a seat {string}', async function (string) {
    return await clickElement(this.page, "button", {
        setTimeout: 20000,
    });
});

And('user receives a booking code {string}', async function (string) {
    return await clickElement(this.page, "button", {
        setTimeout: 20000,
    });
});

Then('user check the seat {string}', async function (string) {
    // доделать
});


