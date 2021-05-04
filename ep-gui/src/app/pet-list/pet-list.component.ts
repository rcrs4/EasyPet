import { Component, OnInit } from '@angular/core';
import {Pet} from '../../../../common/pet';
import { PetService } from "./pet.service";

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})

export class PetListComponent implements OnInit {

  pets: Pet[] = [];
  constructor(private pet_service: PetService) { }

  ngOnInit() {
    this.get_pets();
  }

  get_pets(){
    this.pet_service.getPets().subscribe(
      x => this.pets = x,
      err => console.error('Error getting Pets')
    )
  }

}
