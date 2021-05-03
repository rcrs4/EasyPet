import * as express from "express";
import {Owner, OwnerList}from "../common/ownerList"
import { OwnerListService } from "../ep-gui/src/app/owner-list/owner-list.service";
const app = express();

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

const portNumber = 3333;

let owners = new OwnerList([new Owner('Tonicao', "22", '(81)99546-4788', '103.724.454-03', 'Narnia', 'pvfls@cin.ufpe.br'), new Owner('Pulho do Cachorro quente', "69", '4002-8922', '666.666.666-66', 'Hallway to hell', 'pvoa@suicideboy.com')]);

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