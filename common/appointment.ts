
export class Appointment{
    id:string;
    data:string;
    horario:string;
    veterinario:string;

    constructor(id?: string, data?: string, horario?: string, veterinario?: string) {
        this.id = id;
        this.data = data;
        this.horario = horario;
        this.veterinario = veterinario;
    }
}