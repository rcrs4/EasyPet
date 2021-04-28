
export class Agendamento{
    nome:string;
    id:string;

    constructor(nome?: string, id?: string) {
        this.nome = nome || '';
        this.id = id || '';
    }
}

export class AgendamentoList{
    agendamentos: Agendamento[];

    constructor(agendamentos:Agendamento[]){
        this.agendamentos = agendamentos
    }

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

    getAgendamentos(){
        return this.agendamentos.slice();
    }
}