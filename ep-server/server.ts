import * as express from "express";
import {Agendamento, AgendamentoList}from "../common/agendamento"

const app = express();

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

const portNumber = 3333;

let agendamentos = new AgendamentoList([new Agendamento('20/04/2021', '1', {nome: 'zeze'}), new Agendamento('20/04/2020', '2', {nome: 'spike'})]);

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.post('/desmarcar', jsonParser, function (req: express.Request, res: express.Response) {
  let agendamento: Agendamento = Object.assign(new Agendamento(), req.body);
  
  if (agendamentos.desmarcarAgendamento(agendamento) !== []) {
    res.send({"success": "O agendamento foi desmarcado com sucesso"});
  } else {
    res.send({"failure": "O agendamento não pode ser desmarcado"});
  }
});

app.get('/agendamentos', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(agendamentos.getAgendamentos()))
});

app.listen(portNumber, () =>
  console.log(`Server is running on port ${portNumber}`)
);
