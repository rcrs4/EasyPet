import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from '../../consulta';

@Component({
  selector: 'app-pet-consult',
  templateUrl: './pet-consult.component.html',
  styleUrls: ['./pet-consult.component.css'],
})
export class PetConsultComponent implements OnChanges {
  @Input() consultas: Consulta[] = [];
  @Input() petName: string = '';

  constructor(
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  getConsultDetails(params:string = '') {
    const navigationDetails: string[] = ['/historico/consulta'];

    if(params.length) {
      navigationDetails.push(params);
    }

    this.router.navigate(navigationDetails);
  }

  getProntuario() {}
}
