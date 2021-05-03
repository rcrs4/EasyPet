import * as express from "express";
import {Agendamento, AgendamentoList}from "../common/agendamento"
import {Pet, PetList}from "../common/pet"
import { AgendamentoService } from "../ep-gui/src/app/agendamento.service";
const app = express();

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

const portNumber = 3333;

let agendamentos = new AgendamentoList([new Agendamento('teste', '1'), new Agendamento('teste2', '2'), new Agendamento('teste3', '3')]);

let pets = new PetList([new Pet('0', 'Bob', 'cachorro', 'Golden Retriever', '5', 30, 'Manoel'), 
                        new Pet('1', 'Rogério', 'gato', 'Sphynx', '3', 5, 'Marta'),
                        new Pet('2', 'Filomena', 'gato', 'British Shorthair', '4', 6, 'Alceu'),
                        new Pet('3', 'Faísca', 'cachorro', 'Border Collie', '1', 14, 'Pedro')]);

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

app.get('/pets', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(pets.getPets()))
});

app.get('/pets/:dono', function (req: express.Request, res: express.Response) {
  // res.send(JSON.stringify(pets.getPets()))
  const dono = req.params.dono;
  pets.getPets().forEach((pet:Pet) => {
    if( pet.dono == dono ) {
      res.send(JSON.stringify(pet))
    }
  });
});

app.listen(portNumber, () =>
  console.log(`Server is running on port ${portNumber}`)
);
