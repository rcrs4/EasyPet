"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const agendamento_1 = require("../common/agendamento");
const pet_1 = require("../common/pet");
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const portNumber = 3333;
let agendamentos = new agendamento_1.AgendamentoList([new agendamento_1.Agendamento('20/04/2021', '1', { nome: 'zeze' }), new agendamento_1.Agendamento('20/04/2020', '2', { nome: 'spike' }), new agendamento_1.Agendamento('21/04/2021', '3', { nome: 'zeze' })]);
let pets = new pet_1.PetList([new pet_1.Pet('0', 'Bob', 'cachorro', 'Golden Retriever', '5', 30, 'Manoel'),
    new pet_1.Pet('1', 'Rogério', 'gato', 'Sphynx', '3', 5, 'Marta'),
    new pet_1.Pet('2', 'Filomena', 'gato', 'British Shorthair', '4', 6, 'Alceu'),
    new pet_1.Pet('3', 'Faísca', 'cachorro', 'Border Collie', '1', 14, 'Pedro'),
    new pet_1.Pet('4', 'Gus', 'cachorro', 'Vira-lata', '6', 7, 'Alceu')]);
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.post('/desmarcar', jsonParser, function (req, res) {
    let agendamento = Object.assign(new agendamento_1.Agendamento(), req.body);
    if (agendamentos.desmarcarAgendamento(agendamento) !== []) {
        res.send({ "success": "O agendamento foi desmarcado com sucesso" });
    }
    else {
        res.send({ "failure": "O agendamento não pode ser desmarcado" });
    }
});
app.post('/filterInPet', jsonParser, function (req, res) {
    let petName = req.body;
    console.log(petName.name);
    res.send(JSON.stringify(agendamentos.filterPetInAgendamentos(petName.name)));
});
app.get('/agendamentos', function (req, res) {
    res.send(JSON.stringify(agendamentos.getAgendamentos()));
});
app.get('/pets', function (req, res) {
    res.send(JSON.stringify(pets.getPets()));
});
app.get('/pets/sorted', function (req, res) {
    let petSorted = pets.getPets();
    // console.log("PRÉ",petSorted)
    petSorted.sort(function (a, b) {
        if (a.nome < b.nome) {
            return -1;
        }
        if (a.nome > b.nome) {
            return 1;
        }
        return 0;
    });
    res.send(JSON.stringify(petSorted));
    // console.log("PÓS",petSorted)
    // res.send(JSON.stringify(pets.getPets()))
});
app.get('/pets/:dono', function (req, res) {
    // res.send(JSON.stringify(pets.getPets()))
    const dono = req.params.dono;
    let tempList = [];
    pets.getPets().forEach((pet) => {
        if (pet.dono == dono) {
            tempList.push(pet);
        }
    });
    res.send(JSON.stringify(tempList));
});
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}`));
//# sourceMappingURL=server.js.map