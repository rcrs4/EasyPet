"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerList = exports.Owner = void 0;
class Owner {
    constructor(name, age, fone, cpf, address, email) {
        this.name = name || '';
        this.age = age;
        this.fone = fone || '';
        this.cpf = cpf || '';
        this.address = address || '';
        this.email = email || '';
    }
}
exports.Owner = Owner;
class OwnerList {
    constructor(owners) {
        this.owners = owners;
    }
    /*
        desmarcarAgendamento(agendamento: Agendamento){
    
            let new_agendamentos = this.filterAgendamentos(agendamento)
            console.log(new_agendamentos)
            if(new_agendamentos === null){
                return [];
            }else{
                this.agendamentos = new_agendamentos;
                return new_agendamentos;
            }
    
        }
    
        filterAgendamentos(agendamento: Agendamento): Agendamento[] | null{
            let new_agendamentos: Agendamento[] = [];
            for(let agen of this.agendamentos){
                if(agendamento.nome !== agen.nome && agendamento.id !== agen.id){
                    new_agendamentos.push(agen);
                }
            }
            if(new_agendamentos.length === this.agendamentos.length){
                return null;
            }
            return new_agendamentos;
        }
    */
    getOwners() {
        return this.owners.slice();
    }
}
exports.OwnerList = OwnerList;
//# sourceMappingURL=ownerList.js.map