import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import request = require("request-promise");

var base_url = "http://localhost:3333/";

defineSupportCode(function ({ Given, When, Then }) {
    Given('estou na pagina {stringInDoubleQuotes}', async (pageName) => {
        await browser.get("http://localhost:4200/" + pageName.toString().toLowerCase());
        await expect(element(by.css("#pageTitle")).getText()).to.eventually.equal(
            pageName.toString()
          );
    });

    Given('a consulta de id {stringInDoubleQuotes} esta cadastrado com os campos obrigatorios data {stringInDoubleQuotes}, hora {stringInDoubleQuotes} e veterinario {stringInDoubleQuotes}', async (id, data, hora, veterinario) => {
        await request.get(base_url + 'horarios')
                .then(body =>
                    expect(body.includes('"id":"'+id+'"') && body.includes('"data":"'+data+'"') && body.includes('"horario":' + hora) && body.includes('"veterinario":"'+veterinario+'"')).to.equal(true));
    });

    When('eu solicito para ordenar as consultas por veterinario', async () => {
        await element(by.id('veterinarioColumn')).click();
    });
    
    Then('o sistema retorna a tabela ordenada com os nomes dos veterinarios {stringInDoubleQuotes}, {stringInDoubleQuotes} e {stringInDoubleQuotes}, nesta ordem', async(veterinario0, veterinario1, veterinario2) => {
        await element.all(by.css('#veterinarioRow')).map( function (element){
            return element.getText();
        }).then( function (veterinarioTabColumn){
            // console.log(vetTabColumn);
            expect(veterinarioTabColumn[0]).to.equal(veterinario0);
            expect(veterinarioTabColumn[1]).to.equal(veterinario1);
            expect(veterinarioTabColumn[2]).to.equal(veterinario2);
        });
    });

    Given('a consulta que esta registrada com o id {stringInDoubleQuotes}, data {stringInDoubleQuotes}, hora {stringInDoubleQuotes} e veterinario {stringInDoubleQuotes}', async(id, data, hora, veterinario) => {
        await request.get(base_url + 'horarios')
                .then(body =>
                    expect(body.includes('"id":"'+id+'"') && body.includes('"data":"'+data+'"') && body.includes('"horario":' + hora) && body.includes('"veterinario":"'+veterinario+'"')).to.equal(true));        
    });
    
    Given('{stringInDoubleQuotes} esta associado a consulta id {stringInDoubleQuotes}, data {stringInDoubleQuotes},horario {stringInDoubleQuotes}, veterinario {stringInDoubleQuotes}', async(veterinario, id, data, hora, veterinario1) => {
        await request.get(base_url + 'horarios')
        .then(body =>
            expect(body.includes('"id":"'+id+'"') && body.includes('"data":"'+data+'"') && body.includes('"horario":' + hora) && body.includes('"veterinario":"'+veterinario+'"')).to.equal(true)) && veterinario === veterinario1;  
    });

    When('eu pergunto ao sistema pela consulta com veterinario {stringInDoubleQuotes}', async(veterinario) => {
        await request.get(base_url + 'horarios')
        .then(body =>
            expect(body.includes('"veterinario":"'+veterinario+'"')).to.equal(true));       
    })

    Then('o sistema retorna a consulta id {stringInDoubleQuotes}, data {stringInDoubleQuotes}, hora {stringInDoubleQuotes} e veterinario {stringInDoubleQuotes}', async(id, data, hora, veterinario) => {
        await request.get(base_url + 'horarios/' + veterinario)
        .then(body =>
            expect(body.includes('"id":"'+id+'"') && body.includes('"data":"'+data+'"') && body.includes('"horario":' + hora) && body.includes('"veterinario":"'+veterinario+'"')).to.equal(true));  
    })
})