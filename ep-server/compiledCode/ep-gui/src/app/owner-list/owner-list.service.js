"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const operators_1 = require("rxjs/operators");
let OwnerListService = class OwnerListService {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        this.epURL = 'http://localhost:3333';
    }
    getOwnerList() {
        return this.http.get(this.epURL + "/ownersList").pipe(operators_1.retry(2));
    }
    ownerFilter(ownerAge) {
        return this.http.post(this.epURL + "/ownerFilter", JSON.stringify({ 'age': ownerAge }), { headers: this.headers }).pipe(operators_1.retry(2));
    }
};
OwnerListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], OwnerListService);
exports.OwnerListService = OwnerListService;
//# sourceMappingURL=owner-list.service.js.map