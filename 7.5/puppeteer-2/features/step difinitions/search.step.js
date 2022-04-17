// const { Browser, Puppeteer } = require("puppeteer")
const chai = require("chai");
const puppeteer = require("puppeteer");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
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

Given("user is on {string} page", async function (string) {
    return await this.page.goto("http://qamid.tmweb.ru${string}", {
        setTimeout: 20000,
    });
});

When('user choose date {string}', async function (string) {
    return await clickElement("nav > a:nth-child(3)", {
        setTimeout: 20000,
    });
});

When('user chose a time {string}', async function (string) {
    return await clickElement("nav > a:nth-child(3)", {
        setTimeout: 20000,
    });
});