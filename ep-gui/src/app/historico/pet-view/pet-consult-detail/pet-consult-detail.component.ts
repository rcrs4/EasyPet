import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consulta } from '../../consulta';
import { HistoricoService } from '../../historico.service';

@Component({
  selector: 'app-pet-consult-detail',
  templateUrl: './pet-consult-detail.component.html',
  styleUrls: ['./pet-consult-detail.component.css'],
})
export class PetConsultDetailComponent implements OnInit {
  consulta: Consulta = { data: '', id: '', pet: { nome: '' }, _descricao: '' };
  pet: Pet = { nome: '' };
  descricao: string = '';

  constructor(
    private historicoService: HistoricoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const consultaId: string = this.activatedRoute.snapshot.params.consultaId;

    this.historicoService.getConsultById(consultaId).subscribe(
      (consulta: any) => {
        this.consulta = consulta;
        this.pet = consulta.pet;
        this.descricao = consulta._descricao;
      },
      (err) => console.log(err)
    );
  }
}

interface Pet {
  nome: string;
}
