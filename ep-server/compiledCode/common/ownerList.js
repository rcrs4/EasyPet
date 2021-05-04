"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Owner {
    constructor(id, name, age, fone, cpf, address, email, pets) {
        this.id = id || '';
        this.name = name || '';
        this.age = age || '';
        this.fone = fone || '';
        this.cpf = cpf || '';
        this.address = address || '';
        this.email = email || '';
        this.pets = pets || '';
    }
}
exports.Owner = Owner;
class OwnerList {
    constructor(owners) {
        this.owners = owners;
    }
    getOwnerList() {
        return this.owners.slice();
    }
}
exports.OwnerList = OwnerList;
//# sourceMappingURL=ownerList.js.map