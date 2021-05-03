import { Component, OnInit } from '@angular/core';
import {Pet} from '../../../../common/pet'

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
