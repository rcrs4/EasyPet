"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const agendamento_1 = require("../common/agendamento");
const pet_1 = require("../common/pet");
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const portNumber = 3333;
let agendamentos = new agendamento_1.AgendamentoList([new agendamento_1.Agendamento('teste', '1'), new agendamento_1.Agendamento('teste2', '2'), new agendamento_1.Agendamento('teste3', '3')]);
let pets = new pet_1.PetList([new pet_1.Pet('0', 'Bob', 'cachorro', 'Golden Retriever', '5', '30 kg', 'Manoel'),
    new pet_1.Pet('1', 'Rogério', 'gato', 'Sphynx', '3', '5 kg', 'Marta'),
    new pet_1.Pet('2', 'Filomena', 'gato', 'British Shorthair', '4', '5,5 kg', 'Alceu'),
    new pet_1.Pet('3', 'Faísca', 'cachorro', 'Border Collie', '1', '14 kg', 'Pedro')]);
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.post('/desmarcar', jsonParser, function (req, res) {
    let agendamento = Object.assign(new agendamento_1.Agendamento(), req.body);
    if (agendamentos.desmarcarAgendamento(agendamento) != []) {
        res.send({ "success": "O agendamento foi desmarcado com sucesso" });
    }
    else {
        res.send({ "failure": "O agendamento não pode ser desmarcado" });
    }
});
app.get('/agendamentos', function (req, res) {
    res.send(JSON.stringify(agendamentos.getAgendamentos()));
});
app.get('/pets', function (req, res) {
    res.send(JSON.stringify(pets.getPets()));
});
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}`));
//# sourceMappingURL=server.js.map