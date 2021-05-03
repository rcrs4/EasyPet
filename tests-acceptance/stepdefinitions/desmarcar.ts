import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import request = require("request-promise");

var base_url = "http://localhost:3333/";

defineSupportCode(function ({ Given, When, Then }) {
    Given('I am at the desmarcar page', async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('EpGui');
        await $("a[name='desmarcar']").click();
    })

    Given('eu vejo um agendamento para o pet {stringInDoubleQuotes} na data {stringInDoubleQuotes}', async (pet, data) => {
        var allagendamentos : ElementArrayFinder = element.all(by.name('desmarcar'+pet+data));
        await allagendamentos.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    When('eu clico para desmarcar o agendamento de {stringInDoubleQuotes} na data {stringInDoubleQuotes}', async (pet, data) => {
        await element(by.name('desmarcar'+pet+data)).click();
    });

    Then('eu nao vejo o agendamento de {stringInDoubleQuotes} na data {stringInDoubleQuotes} na lista de agendamentos', async (pet, data) => {
        var allagendamentos : ElementArrayFinder = element.all(by.name('desmarcar'+pet+data));
        await allagendamentos.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    When('eu filtro os agendamentos para somente o pet {stringInDoubleQuotes}', async (pet) => {
        await $("input[name='filterBar']").sendKeys(<string> pet)
        await element(by.name('filterPet')).click()
    });
    Then('eu vejo agendamentos apenas do pet {stringInDoubleQuotes}', async (pet) => {
        var allagendamentos : ElementArrayFinder = element.all(by.name('petName'));
        var samepet = allagendamentos.filter(elem =>
            elem.getText().then(text => text === pet));
        await samepet.then(elems => expect(Promise.resolve(elems.length)).to.not.eventually.equal(0));
    });

    Given('que o sistema tem um agendamento de {stringInDoubleQuotes} para a data {stringInDoubleQuotes} com o id {stringInDoubleQuotes}', async (pet, data, id) => {
        await request.get(base_url + "agendamentos")
                .then(body =>
                    expect(body.includes('{"data":"'+data+'","id":"'+id+'","pet":{"nome":"'+pet+'"}')).to.equal(true));
        
    });

    When('eu desmarco o agendamento de {stringInDoubleQuotes} para a data {stringInDoubleQuotes} com o id {stringInDoubleQuotes}', async (pet, data, id) => {
        let agendamento = {"data":data, "id":id, "pet":{"nome":pet}};
        var options:any = {method: 'POST', uri: (base_url + "desmarcar"), body:agendamento, json: true};
        await request(options)
                .then(body =>
                    expect(JSON.stringify(body)).to.equal('{"success":"O agendamento foi desmarcado com sucesso"}'));
    });

    Then('o sistema agora nao tem mais agendamento de {stringInDoubleQuotes} para a data {stringInDoubleQuotes} com o id {stringInDoubleQuotes}', async(pet, data, id) => {
        await request.get(base_url + "agendamentos")
                .then(body =>
                    expect(body.includes('{"data":"'+data+'","id":"'+id+'","pet":{"nome":"'+pet+'"}')).to.equal(false));
    });

    Given('que o sistema tem agendamentos de {stringInDoubleQuotes} e de {stringInDoubleQuotes}', async (pet1, pet2) => {
        await request.get(base_url + "agendamentos")
                .then(body =>
                    expect(body.includes('{"nome":"'+pet1+'"}') && body.includes('{"nome":"'+pet2+'"}')).to.equal(true));
        
    });

    When('eu filtro por {stringInDoubleQuotes}', async (pet) => {
        let agendamento = {"name":pet};
        var options:any = {method: 'POST', uri: (base_url + "filterInPet"), body:agendamento, json: true};
        await request(options)
                .then(body =>
                    expect(body.includes('{"nome":"'+pet+'"}')).to.equal(false));
    });

    Then('o sistema retorna apenas agendamentos de {stringInDoubleQuotes} e nao mais de {stringInDoubleQuotes}', async(pet1, pet2) => {
        let agendamento = {"name":pet1};
        var options:any = {method: 'POST', uri: (base_url + "filterInPet"), body:agendamento, json: true};
        await request(options)
                .then(body =>
                    expect(body.includes('{"nome":"'+pet2+'"}')).to.equal(false));
    });
})
