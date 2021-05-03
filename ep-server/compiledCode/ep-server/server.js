"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const agendamento_1 = require("../common/agendamento");
const appointment_1 = require("../common/appointment");
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const portNumber = 3333;
let agendamentos = new agendamento_1.AgendamentoList([new agendamento_1.Agendamento('teste', '1'), new agendamento_1.Agendamento('teste2', '2'), new agendamento_1.Agendamento('teste3', '3')]);
let appointments = new appointment_1.AppointmentList([new appointment_1.Appointment('0', '22/03', 10, 'Dr.Tonicao'), new appointment_1.Appointment('1', '22/03', 10, 'Dr.Manel'), new appointment_1.Appointment('2', '23/03', 8, 'Dr.Pedoka'), new appointment_1.Appointment('3', '24/03', 15, 'Dr.Ruivin'), new appointment_1.Appointment('4', '23/03', 16, 'Dr.Tonicao')]);
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
    res.send(JSON.stringify(tempList));
});
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}`));
//# sourceMappingURL=server.js.map