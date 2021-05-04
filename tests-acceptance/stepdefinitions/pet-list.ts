import { defineSupportCode } from 'cucumber';
import { exit } from 'process';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import request = require("request-promise");

var base_url = "http://localhost:3333/";

let pAND = ((p,q) => p.then(a => q.then(b => a && b)));

defineSupportCode(function ({ Given, When, Then }) {
    Given('estou na página {stringInDoubleQuotes}', async (pageName) => {
        await browser.get("http://localhost:4200/"+pageName.toString().toLowerCase().replace(' ', '_'));
        await expect(element(by.css("#pageTitle")).getText()).to.eventually.equal(
            pageName.toString()
        );
    })

    Given('o pet de id {stringInDoubleQuotes} está cadastrado com os campos obrigatórios nome {stringInDoubleQuotes} e dono {stringInDoubleQuotes}', async (id, pet, dono) => {
        await request.get(base_url + "pets")
                .then(body =>
                    expect(body.includes('{"id":"'+id+'"') && body.includes('"nome":"'+pet+'"') && body.includes('"dono":"'+dono+'"}')).to.equal(true));  
    });

    When('eu solicito para ordenar os pets por nome', async () => {
        await element(by.name('nomeColumn')).click()
    });

    Then('o sistema retorna a tabela ordenada com os nomes dos pets {stringInDoubleQuotes}, {stringInDoubleQuotes} e {stringInDoubleQuotes}, nesta ordem', async (pet1, pet2, pet3) => {
        await element.all(by.css('#petNameRow')).map( function (element){
            return element.getText();
        }).then( function (petTabColumn){
            // console.log(petTabColumn);
            expect(petTabColumn[0]).to.equal(pet1);
            expect(petTabColumn[1]).to.equal(pet2);
            expect(petTabColumn[2]).to.equal(pet3);
        } );
    });

    Given('o dono {stringInDoubleQuotes} está associado ao pet de id {stringInDoubleQuotes} e nome {stringInDoubleQuotes}', async (dono, id, pet) => {
        await request.get(base_url + "pets")
                .then(body =>
                    expect(body.includes('{"id":"'+id+'"') && body.includes('"nome":"'+pet+'"') && body.includes('"dono":"'+dono+'"}')).to.equal(true));  
    });

    When('eu pergunto ao sistema pelos pets com dono {stringInDoubleQuotes}', async (dono) => {
        await request.get(base_url + "pets/" + dono)
    });

    Then('o sistema retorna o pet com id {stringInDoubleQuotes} e nome {stringInDoubleQuotes}, de dono {stringInDoubleQuotes}', async (id, pet, dono) => {
        await request.get(base_url + "pets/" + dono)
                .then(body =>
                    expect(body.includes('{"id":"'+id+'"') && body.includes('"nome":"'+pet+'"') && body.includes('"dono":"'+dono+'"}')).to.equal(true));  
    });
})
