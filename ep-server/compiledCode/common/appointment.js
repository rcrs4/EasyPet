"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appointment {
    constructor(id, data, horario, veterinario) {
        this.id = id || '';
        this.data = data || '';
        this.horario = horario || '';
        this.veterinario = veterinario || '';
    }
}
exports.Appointment = Appointment;
class AppointmentList {
    constructor(appointments) {
        this.appointments = appointments;
    }
    filterAppointments(appointment) {
        let new_appointments = [];
        for (let agen of this.appointments) {
            if (appointment.data !== agen.data && appointment.id !== agen.id) {
                new_appointments.push(agen);
            }
        }
        if (new_appointments.length === this.appointments.length) {
            return null;
        }
        return new_appointments;
    }
    getAppointments() {
        return this.appointments.slice();
    }
}
exports.AppointmentList = AppointmentList;
//# sourceMappingURL=appointment.js.map