
export class Appointment{
    id:string;
    data:string;
    horario:string;
    veterinario:string;

    constructor(id?: string, data?: string, horario?: string, veterinario?: string) {
        this.id = id || '';
        this.data = data || '';
        this.horario = horario || '';
        this.veterinario = veterinario || '';
    }
}

export class AppointmentList{
    appointments: Appointment[];

    constructor(appointments:Appointment[]){
        this.appointments = appointments
    }

    filterAppointments(appointment: Appointment): Appointment[] | null{
        let new_appointments: Appointment[] = [];
        for(let agen of this.appointments){
            if(appointment.data !== agen.data && appointment.id !== agen.id){
                new_appointments.push(agen);
            }
        }
        if(new_appointments.length === this.appointments.length){
            return null;
        }
        return new_appointments;
    }

    getAppointments(){
        return this.appointments.slice();
    }
}