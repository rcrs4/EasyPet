import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-filter',
  templateUrl: './appointment-filter.component.html',
  styleUrls: ['./appointment-filter.component.css']
})
export class AppointmentFilterComponent implements OnInit {
  products = ["Teste1", "Teste2"];
  constructor() { }

  ngOnInit(): void {
  }

}
