import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given('I am at the desmarcar page', async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('EpGui');
        await $("a[name='desmarcar']").click();
    })

    Given('eu vejo um agendamento para o pet {stringInDoubleQuotes} na data {stringInDoubleQuotes}', async (pet, data) => {
        var allcpfs : ElementArrayFinder = element.all(by.name('desmarcar'+pet+data));
        await allcpfs.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    When('eu clico para desmarcar o agendamento de {stringInDoubleQuotes} na data {stringInDoubleQuotes}', async (pet, data) => {
        await element(by.name('desmarcar'+pet+data)).click();
    });

    Then('eu nao vejo o agendamento de {stringInDoubleQuotes} na data {stringInDoubleQuotes} na lista de agendamentos', async (pet, data) => {
        var allcpfs : ElementArrayFinder = element.all(by.name('desmarcar'+pet+data));
        await allcpfs.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    When('eu filtro os agendamentos para somente o pet {stringInDoubleQuotes}', async (pet) => {
        await $("input[name='filterBar']").sendKeys(<string> pet)
        await element(by.name('filterPet')).click()
    });
    Then('eu vejo agendamentos apenas do pet {stringInDoubleQuotes}', async (pet) => {
        var allcpfs : ElementArrayFinder = element.all(by.name('petName'));
        var samecpfs = allcpfs.filter(elem =>
            elem.getText().then(text => text === pet));
        await samecpfs.then(elems => expect(Promise.resolve(elems.length)).to.not.eventually.equal(0));
    });

})
