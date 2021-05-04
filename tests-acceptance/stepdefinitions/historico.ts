import { defineSupportCode } from "cucumber";
import { exists } from "fs";
import { browser, element, by } from "protractor";
let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;

import request = require("request-promise");

browser.baseUrl = "http://localhost:4200/";
const serverBaseUrl = "http://localhost:3333/";

const navigateTo = (secao: string = "") => {
  return browser.get(browser.baseUrl + "/" + secao) as Promise<any>;
};

defineSupportCode(function ({ Given, When, Then }) {
  Given("estou na pagina de {stringInDoubleQuotes}", async (secao: string) => {
    await navigateTo(secao);
  });

  Given(
    "tenho os pets {stringInDoubleQuotes} e {stringInDoubleQuotes} cadastrados",
    async (pet1: string, pet2: string) => {}
  );

  Given(
    "{stringInDoubleQuote} tem consultas registrada no dia {stringInDoubleQuote} e {stringInDoubleQuote}",
    (pet: string, data1: string, data2: string) => {}
  );

  When("nao faco nada", () => {});

  When(
    "acesso os detalhes de {stringInDoubleQuotes}",
    async (petSelecionado: string) => {
      await element(by.id(petSelecionado)).click();
    }
  );

  Then("devo ver o titulo {stringInDoubleQuotes}", async (title: string) => {
    await expect(element(by.id("pageTitle")).getText()).to.eventually.equal(
      title
    );
  });

  Then(
    "devo ver em lista botoes de acesso aos detalhes de {stringInDoubleQuotes} e {stringInDoubleQuotes}",
    async (pet1: string, pet2: string) => {
      await element
        .all(by.css("button"))
        .map((element) => element.getAttribute("id"))
        .then((listaPets) => {
          expect(listaPets[0]).to.equal(pet1);
          expect(listaPets[1]).to.equal(pet2);
        });
    }
  );

  Then(
    "o sistema retorna uma lista de consultas de {stringInDoubleQuotes} com aa datas {stringInDoubleQuotes} e {stringInDoubleQuotes}",
    async (petName: string, data1: string, data2: string) => {
      await request
        .get(serverBaseUrl + "historico/pets/" + petName)
        .then((consultList) => {
          expect(
            consultList.includes('{"data":"' + data1 + '"') &&
              consultList.includes('{"data":"' + data2 + '"')
          ).to.equal(true);
        });
    }
  );

  Then("sou redirecionado para {stringInDoubleQuote}", async (newUrl: string) => {
    navigateTo(newUrl);
  });
});
