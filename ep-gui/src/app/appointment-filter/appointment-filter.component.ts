import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../../../common/appointment'

@Component({
  selector: 'app-appointment-filter',
  templateUrl: './appointment-filter.component.html',
  styleUrls: ['./appointment-filter.component.css']
})
export class AppointmentFilterComponent implements OnInit {
  appointments: Appointment[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
