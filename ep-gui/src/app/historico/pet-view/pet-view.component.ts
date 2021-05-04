import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Consulta } from '../consulta';
import { HistoricoService } from '../historico.service';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css'],
})
export class PetViewComponent implements OnInit {
  consultas: Consulta[] = [];

  constructor(
    private historicoService: HistoricoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const petName: string = this.activatedRoute.snapshot.params.petName;

    this.historicoService.getConsultsFromPet(petName).subscribe(
      (consultas) => {
        this.consultas = consultas;
      },
      (err) => console.log(err)
    );
  }
}
