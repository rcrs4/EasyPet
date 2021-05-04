import * as express from "express";
import {
  Agendamento,
  AgendamentoList,
  Consulta,
  ConsultaList,
} from "../common/index";

const app = express();
//==============
const consultaList: Consulta[] = [
  new Consulta("a", "b", { nome: "c" }, "d"),
  new Consulta("A", "B", { nome: "c" }, "D"),
  new Consulta("1", "2", { nome: "abacate" }, "4"),
];
const consultas = new ConsultaList(consultaList);
consultas.filterOneConsultBy('b').descricao = 'pedro';
console.log(JSON.stringify(consultas.pets));
//==============
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

const portNumber = 3333;

let agendamentos = new AgendamentoList([
  new Agendamento("20/04/2021", "1", { nome: "zeze" }),
  new Agendamento("20/04/2020", "2", { nome: "spike" }),
  new Agendamento("21/04/2021", "3", { nome: "zeze" }),
]);

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(allowCrossDomain);

app.post(
  "/desmarcar",
  jsonParser,
  function (req: express.Request, res: express.Response) {
    let agendamento: Agendamento = Object.assign(new Agendamento(), req.body);

    if (agendamentos.desmarcarAgendamento(agendamento) !== []) {
      res.send({ success: "O agendamento foi desmarcado com sucesso" });
    } else {
      res.send({ failure: "O agendamento não pode ser desmarcado" });
    }
  }
);

app.post(
  "/filterInPet",
  jsonParser,
  function (req: express.Request, res: express.Response) {
    let petName = req.body;
    console.log(petName.name);
    res.send(
      JSON.stringify(agendamentos.filterPetInAgendamentos(petName.name))
    );
  }
);

app.get(
  "/agendamentos",
  function (req: express.Request, res: express.Response) {
    res.send(JSON.stringify(agendamentos.getAgendamentos()));
  }
);

app.get(
  "/historico/pets/:petName",
  (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(consultas.filterConsultsBy(req.params.petName)));
  }
);

app.get(
  "/historico/consulta/:consultaId",
  (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(consultas.filterOneConsultBy(req.params.consultaId)));
  }
);

app.get('/pets', (req: express.Request, res: express.Response) => {
  res.send(consultas.pets);
});

app.listen(portNumber, () =>
  console.log(`Server is running on port ${portNumber}`)
);
