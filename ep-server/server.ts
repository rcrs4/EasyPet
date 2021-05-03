import * as express from "express";
import {Agendamento, AgendamentoList}from "../common/agendamento"
import {Appointment, AppointmentList}from "../common/appointment"
import { AgendamentoService } from "../ep-gui/src/app/agendamento.service";
const app = express();

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

const portNumber = 3333;

let agendamentos = new AgendamentoList([new Agendamento('teste', '1'), new Agendamento('teste2', '2'), new Agendamento('teste3', '3')]);
let appointments = new AppointmentList([new Appointment('0', '22/03', 10, 'Dr.Tonicao'), new Appointment('1', '22/03', 10, 'Dr.Manel'), new Appointment('2', '23/03', 8, 'Dr.Pedoka'), new Appointment('3', '24/03', 15, 'Dr.Ruivin'), new Appointment('4', '23/03', 16, 'Dr.Tonicao')])

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.post('/desmarcar', jsonParser, function (req: express.Request, res: express.Response) {
  let agendamento: Agendamento = Object.assign(new Agendamento(), req.body);
  
  if (agendamentos.desmarcarAgendamento(agendamento) != []) {
    res.send({"success": "O agendamento foi desmarcado com sucesso"});
  } else {
    res.send({"failure": "O agendamento não pode ser desmarcado"});
  }
});

app.get('/agendamentos', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(agendamentos.getAgendamentos()))
});

app.get('/horarios', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(appointments.getAppointments()))
});

app.get('/horarios/:veterinario', function (req: express.Request, res: express.Response) {
  // res.send(JSON.stringify(pets.getPets()))
  const veterinario = req.params.veterinario;
  let tempList:Appointment[] = [];
  appointments.getAppointments().forEach((appointment:Appointment) => {
    if( appointment.veterinario == veterinario ) {
      tempList.push(appointment)
    }
  });
  res.send(JSON.stringify(tempList))
});


app.listen(portNumber, () =>
  console.log(`Server is running on port ${portNumber}`)
);
