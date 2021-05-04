"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("../common/index");
const app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const portNumber = 3333;
const ConsultasBD_1 = require("./bd/ConsultasBD");
const consultas = new index_1.ConsultaList(ConsultasBD_1.default());
let agendamentos = new index_1.AgendamentoList([new index_1.Agendamento('20/04/2021', '1', { nome: 'zeze' }), new index_1.Agendamento('20/04/2020', '2', { nome: 'spike' }), new index_1.Agendamento('21/04/2021', '3', { nome: 'zeze' })]);
let appointments = new index_1.AppointmentList([new index_1.Appointment('0', '22/03', 10, 'Dr.Tonicao'), new index_1.Appointment('1', '22/03', 10, 'Dr.Manel'), new index_1.Appointment('2', '23/03', 8, 'Dr.Pedoka'), new index_1.Appointment('3', '24/03', 15, 'Dr.Ruivin'), new index_1.Appointment('4', '23/03', 16, 'Dr.Tonicao')]);
let pets = new index_1.PetList([new index_1.Pet('0', 'Bob', 'cachorro', 'Golden Retriever', '5', 30, 'Manoel'),
    new index_1.Pet('1', 'Rogério', 'gato', 'Sphynx', '3', 5, 'Marta'),
    new index_1.Pet('2', 'Filomena', 'gato', 'British Shorthair', '4', 6, 'Alceu'),
    new index_1.Pet('3', 'Faísca', 'cachorro', 'Border Collie', '1', 14, 'Pedro'),
    new index_1.Pet('4', 'Gus', 'cachorro', 'Vira-lata', '6', 7, 'Alceu')]);
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};
app.use(allowCrossDomain);
app.post("/desmarcar", jsonParser, function (req, res) {
    let agendamento = Object.assign(new index_1.Agendamento(), req.body);
    if (agendamentos.desmarcarAgendamento(agendamento) !== []) {
        res.send({ success: "O agendamento foi desmarcado com sucesso" });
    }
    else {
        res.send({ failure: "O agendamento não pode ser desmarcado" });
    }
});
app.post("/filterInPet", jsonParser, function (req, res) {
    let petName = req.body;
    console.log(petName.name);
    res.send(JSON.stringify(agendamentos.filterPetInAgendamentos(petName.name)));
});
app.get("/agendamentos", function (req, res) {
    res.send(JSON.stringify(agendamentos.getAgendamentos()));
});
app.get("/historico/pets/:petName", (req, res) => {
    res.send(JSON.stringify(consultas.filterConsultsBy(req.params.petName)));
});
app.get("/historico/consulta/:consultaId", (req, res) => {
    res.send(JSON.stringify(consultas.filterOneConsultBy(req.params.consultaId)));
});
app.get('/pets', (req, res) => {
    res.send(consultas.pets);
});
app.get('/horarios', function (req, res) {
    res.send(JSON.stringify(appointments.getAppointments()));
});
app.get('/horarios/:veterinario', function (req, res) {
    // res.send(JSON.stringify(pets.getPets()))
    const veterinario = req.params.veterinario;
    let tempList = [];
    appointments.getAppointments().forEach((appointment) => {
        if (appointment.veterinario == veterinario) {
            tempList.push(appointment);
        }
    });
});
app.get('/pets', function (req, res) {
    res.send(JSON.stringify(pets.getPets()));
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
app.listen(portNumber, () => {
    console.log(`Server is running on port ${portNumber}`);
});
//# sourceMappingURL=server.js.map