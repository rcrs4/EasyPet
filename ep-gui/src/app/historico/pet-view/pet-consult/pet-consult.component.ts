import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Consulta } from '../../consulta';

@Component({
  selector: 'app-pet-consult',
  templateUrl: './pet-consult.component.html',
  styleUrls: ['./pet-consult.component.css'],
})
export class PetConsultComponent implements OnChanges {
  @Input() consultas: Consulta[] = [];
  @Input() petName: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
