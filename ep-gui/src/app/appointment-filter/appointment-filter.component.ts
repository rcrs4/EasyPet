import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../../../common/appointment'
import { AppointmentService } from "../appointment-filter/queryTable.service";


@Component({
  selector: 'app-appointment-filter',
  templateUrl: './appointment-filter.component.html',
  styleUrls: ['./appointment-filter.component.css']
})
export class AppointmentFilterComponent implements OnInit {

  appointments: Appointment[] = [];
  constructor(private appointment_service: AppointmentService) { }

  ngOnInit() {
    this.get_appointment();
  }

  get_appointment(){
    this.appointment_service.getAppointment().subscribe(
      x => this.appointments = x,
      err => console.error('Error getting Agendamentos')
    )
  }

}
