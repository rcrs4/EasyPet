import * as express from "express";
import {Owner, OwnerList}from "../common/ownerList"
import { OwnerListService } from "../ep-gui/src/app/owner-list/owner-list.service";
const app = express();

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

const portNumber = 3333;

let owners = new OwnerList([new Owner('Paulo', "22", '(81)99546-4788', '103.724.454-03', 'Rua dos Alfeneiros', 'pvfls@cin.ufpe.br','2'), 
                            new Owner('Mariana', "23", '(81)0000-0000', '000.000.000-00', 'Rosita Freire', 'mcs@cin.ufpe.br','3'),
                            new Owner('Pulho', "22", '(81) 1111-1111', '111.111.111-11', 'Narnia', 'pvoa@cin.ufpe.br','1'),
                            new Owner('Manel', "23", '(81) 2222-2222', '222.222.222-22', 'DeathStar', 'maxn@cin.ufpe.br','5'),
                            new Owner('Carneiro', "23", '(81) 3333-3333', '333.333.333-33', 'Condado', 'rcs@cin.ufpe.br','1'),
                            new Owner('Pedoka', "23", '(81) 4444-4444', '444.444.444-44', 'Distrito 13', 'phcs@cin.ufpe.br','2'),
                            new Owner('ACM', "55", '(81) 5555-5555', '555.555.555-55', 'CIN', 'acm@scin.ufpe.br','8')]);

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.get('/ownersList', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(owners.getOwnerList()))
});

app.listen(portNumber, () =>
  console.log(`Server is running on port ${portNumber}`)
);