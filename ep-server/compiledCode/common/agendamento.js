"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agendamento {
    constructor(data, id, pet) {
        this.data = data || '';
        this.id = id || '';
        this.pet = pet || { nome: '' };
    }
}
exports.Agendamento = Agendamento;
class AgendamentoList {
    constructor(agendamentos) {
        this.agendamentos = agendamentos;
    }
    desmarcarAgendamento(agendamento) {
        let new_agendamentos = this.filterAgendamentos(agendamento);
        if (new_agendamentos === null) {
            return [];
        }
        else {
            this.agendamentos = new_agendamentos;
            return new_agendamentos;
        }
    }
    filterAgendamentos(agendamento) {
        let new_agendamentos = [];
        for (let agen of this.agendamentos) {
            if (agendamento.data !== agen.data && agendamento.id !== agen.id) {
                new_agendamentos.push(agen);
            }
        }
        if (new_agendamentos.length === this.agendamentos.length) {
            return null;
        }
        return new_agendamentos;
    }
    getAgendamentos() {
        return this.agendamentos.slice();
    }
}
exports.AgendamentoList = AgendamentoList;
//# sourceMappingURL=agendamento.js.map