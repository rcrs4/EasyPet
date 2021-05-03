import request = require("request-promise");
import { closeServer } from '../server';

var base_url = "http://localhost:3333/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../server')});

  afterAll(() => {server.closeServer()});

  it("inicialmente retorna uma lista com tres agendamentos", () => {
    return request.get(base_url + "agendamentos")
            .then(body => 
               expect(body).toBe('[{"data":"20/04/2021","id":"1","pet":{"nome":"zeze"}},{"data":"20/04/2020","id":"2","pet":{"nome":"spike"}},{"data":"21/04/2021","id":"3","pet":{"nome":"zeze"}}]')
             )
            .catch(e => 
               expect(e).toEqual(null)
             );
  });

  it("filtra agendamento por pet zeze", () => {
    let agendamento = {"name":"zeze"};
    var options:any = {method: 'POST', uri: (base_url + "filterInPet"), body:agendamento, json: true};
    return request.post(options)
            .then(body => 
               expect(JSON.stringify(body)).toBe('[{"data":"20/04/2021","id":"1","pet":{"nome":"zeze"}},{"data":"21/04/2021","id":"3","pet":{"nome":"zeze"}}]')
             )
            .catch(e => 
               expect(e).toEqual(null)
             );
  });
  
  it("desmarca agendamento do pet zeze na data 20/04/2021", () => {
    let agendamento = {"data":"20/04/2021","id":"1","pet":{"nome":"zeze"}};
    var options:any = {method: 'POST', uri: (base_url + "desmarcar"), body:agendamento, json: true};
    return request.post(options)
            .then(body => 
               expect(JSON.stringify(body)).toBe('{"success":"O agendamento foi desmarcado com sucesso"}')
             )
            .catch(e => 
               expect(e).toEqual(null)
             );
  });

}) 