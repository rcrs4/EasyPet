"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const agendamento_1 = require("../common/agendamento");
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const portNumber = 3333;
let agendamentos = new agendamento_1.AgendamentoList([new agendamento_1.Agendamento('teste', '1'), new agendamento_1.Agendamento('teste2', '2'), new agendamento_1.Agendamento('teste3', '3')]);
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
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}`));
//# sourceMappingURL=server.js.map