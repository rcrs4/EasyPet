"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Owner {
    constructor(name, age, fone, cpf, address, email, pets) {
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
    /*
        ownerFilter(donos: Owner): Owner[] | null{
            let new_donos: Owner[] = [];
            for(let agen of this.owners){
                if(donos.age !== agen.age){
                    new_donos.push(agen);
                }
            }
            if(new_donos.length === this.donos.length){
                return null;
            }
            return new_donos;
        }
    */
    getOwnerList() {
        return this.owners.slice();
    }
}
exports.OwnerList = OwnerList;
//# sourceMappingURL=ownerList.js.map