"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ownerList_1 = require("../common/ownerList");
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const portNumber = 3333;
let owners = new ownerList_1.OwnerList([new ownerList_1.Owner('1', 'Paulo', "22", '(81)99546-4788', '000.000.000-00', 'PE', 'pvfls@cin.ufpe.br', '2'),
    new ownerList_1.Owner('2', 'Mariana', "23", '(81)0000-0000', '111.111.111-11', 'BA', 'mcs@cin.ufpe.br', '3'),
    new ownerList_1.Owner('3', 'Pulho', "22", '(81) 1111-1111', '222.222.222-22', 'PE', 'pvoa@cin.ufpe.br', '1'),
    new ownerList_1.Owner('4', 'Manel', "23", '(81) 2222-2222', '333.333.333-33', 'RR', 'maxn@cin.ufpe.br', '5'),
    new ownerList_1.Owner('5', 'Carneiro', "23", '(81) 3333-3333', '444.444.444-44', 'RO', 'rcs@cin.ufpe.br', '1'),
    new ownerList_1.Owner('6', 'Pedoka', "23", '(81) 4444-4444', '555.555.555-55', 'DF', 'phcs@cin.ufpe.br', '2'),
    new ownerList_1.Owner('7', 'ACM', "55", '(81) 5555-5555', '666.666.666-66', 'SP', 'acm@scin.ufpe.br', '8')]);
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.get('/ownersList', function (req, res) {
    res.send(JSON.stringify(owners.getOwnerList()));
});
app.get('/ownersList/:age', function (req, res) {
    const age = req.params.age;
    let tempList = [];
    owners.getOwnerList().forEach((owners) => {
        if (owners.age == age) {
            tempList.push(owners);
        }
    });
    res.send(JSON.stringify(tempList));
});
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}`));
//# sourceMappingURL=server.js.map