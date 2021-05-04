import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import request = require("request-promise");

var base_url = "http://localhost:3333/";

async function checkOwner(
    id: String,
    cpf: String,
    age: String,
  ) {
    const options = {
      method: `GET`,
      json: true,
      uri: `http://localhost:3333/ownerList/${age}`,
    };
    try {
      const response = await request(options);
      return Promise.resolve(
        response.age.toString() == age.toString() &&
          response.cpf.toString() ==
          cpf.toString()
          ? expect(response.id.toString()).to.equal(id)
          : expect(false).to.equal(true)
      );
    } catch (error) {
      Promise.reject(error);
      expect(false).to.equal(true);
    }
  }

let pAND = ((p,q) => p.then(a => q.then(b => a && b)));

defineSupportCode(function ({ Given, When, Then }) {
    //Given que o sistema tem o dono com id "1" cadastrado com os campos obrigatorios cpf "000.000.000-00" e idade "22"
    // And que o sistema tem o dono com id "2" cadastrado com os campos obrigatorios cpf "111.111.111-11" e idade "23"
	// And que o sistema tem o dono com id "3" cadastrado com os campos obrigatorios cpf "222.222.222-22" e idade "22"
    Given('que o sistema tem o dono com id {stringInDoubleQuotes} cadastrado com os campos obrigatorios cpf {stringInDoubleQuotes} e idade {stringInDoubleQuotes}', async (id, cpf, age) => {
        await request.get(base_url + 'ownersList')
                .then(body =>
                    expect(body.includes('"id":"'+id+'"') && body.includes('"cpf":"'+cpf+'"') && body.includes('"age":"' +age+ '"')).to.equal(true));
    });
    
    //When eu filtro por donos com idade "22" 
    When('eu filtro por donos com idade {stringInDoubleQuotes}', async (age) => {
        await request.get(base_url + 'ownersList/' + age)
    });

    //Then o sistema retorna apenas o dono com id "1", cpf "000.000.000-00" e idade "22" e o dono com id "3", cpf "222.222.222-22" e idade "22"
    Then('o sistema retorna apenas o dono com id {stringInDoubleQuotes}, cpf {stringInDoubleQuotes} e idade {stringInDoubleQuotes} e o dono com id {stringInDoubleQuotes}, cpf {stringInDoubleQuotes} e idade {stringInDoubleQuotes}', async (id0, cpf0, age0, id1, cpf1, age1) => {
        await request.get(base_url + 'ownersList/' + age0)
                .then(body =>
                    expect(body.includes('"id":"'+id0+'"') && body.includes('"cpf":"'+cpf0+'"') && body.includes('"age":"' +age0+ '"') && body.includes('"id":"'+id1+'"') && body.includes('"cpf":"' +cpf1+ '"') && body.includes('"age":"' +age1+ '"')).to.equal(true));
    });

    //Given que eu estou na pagina "listar donos"
    Given('que eu estou na pagina {stringInDoubleQuotes}', async (pageName) => {
        await browser.get("http://localhost:4200/" + pageName.toString().toLowerCase().replace(" ","%20"));
        await expect(element(by.css("#pageTitle")).getText()).to.eventually.equal(
            pageName.toString()
          );
    });

    // And o dono de id "1" esta cadastrado com os campos obrigatorios cpf "000.000.000-00" e idade "22"
	// And o dono de id "2" esta cadastrado com os campos obrigatorios cpf "111.111.111-11" e idade "23"
	// And o dono de id "3" esta cadastrado com os campos obrigatorios cpf "222.222.222-22" e idade "22"
    Given('o dono de id {stringInDoubleQuotes} esta cadastrado com os campos obrigatorios cpf {stringInDoubleQuotes} e idade {stringInDoubleQuotes}', async (id, cpf, age) => {
        await request.get(base_url + "ownersList")
                .then(body =>
                    expect(body.includes('"id":"'+id+'"') && body.includes('"cpf":"'+cpf+'"') && body.includes('"age":"' +age+ '"')).to.equal(true));
    });

    //When eu clicar para ordenar os donos por idade
    When('eu clicar para ordenar os donos por idade', async () => {
        await element(by.name('Idade')).click()
    });

    //Then o sistema retorna a lista de donos ordenada com as idades "22", "22" e "23", nessa ordem
    Then('o sistema retorna a lista de donos ordenada com as idades {stringInDoubleQuotes}, {stringInDoubleQuotes} e {stringInDoubleQuotes}, nessa ordem', async (age1, age2, age3) => {
        await element.all(by.css('#ownerAgeRow')).map( function (element){
            return element.getText();
        }).then( function (ownerTabColumn){
            expect(ownerTabColumn[0]).to.equal(age1);
            expect(ownerTabColumn[1]).to.equal(age2);
            expect(ownerTabColumn[2]).to.equal(age3);
        } );
    });
})
