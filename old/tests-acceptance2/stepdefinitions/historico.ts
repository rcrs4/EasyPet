import { defineSupportCode } from "cucumber";
import { browser, $, element, ElementArrayFinder, by } from "protractor";
let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;

import request = require("request-promise");

var base_url = "http://localhost:3333/";

defineSupportCode(function ({ Given, When, Then }) {
  Given("I am at the desmarcar page", async () => {
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal("EpGui");
    await $("a[id='historico']").click();
  });



});
