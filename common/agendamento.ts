
export class Agendamento{
    data:string;
    id:string;
    pet:any;
    constructor(data?: string, id?: string, pet?: any) {
        this.data = data || '';
        this.id = id || '';
        this.pet = pet || {nome:''}
    }
}

export class AgendamentoList{
    agendamentos: Agendamento[];

    constructor(agendamentos:Agendamento[]){
        this.agendamentos = agendamentos
    }

    desmarcarAgendamento(agendamento: Agendamento){

        let new_agendamentos = this.filterAgendamentos(agendamento)
        
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
            if(agendamento.data !== agen.data && agendamento.id !== agen.id){
                new_agendamentos.push(agen);
            }
        }
        if(new_agendamentos.length === this.agendamentos.length){
            return null;
        }
        return new_agendamentos;
    }

    filterPetInAgendamentos(petName: string): Agendamento[]{
        let filtered: Agendamento[] = this.agendamentos.slice().filter(a => a.pet.nome === petName)
        return filtered
    }

    getAgendamentos(){
        return this.agendamentos.slice();
    }
}