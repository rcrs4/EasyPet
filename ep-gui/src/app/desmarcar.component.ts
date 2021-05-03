import { Component, OnInit } from '@angular/core';
//import { Console } from 'node:console';
import {Agendamento} from '../../../common/agendamento';
import { AgendamentoService } from "./agendamento.service";

@Component({
  selector: 'desmarcar-consulta',
  templateUrl: './desmarcar.component.html',
  styleUrls: ['./desmarcar.component.css']
})

export class DesmarcarConsultas implements OnInit {
    agendamentos: Agendamento[] = [];
    constructor(private desmarcar_service: AgendamentoService) { }

    ngOnInit() {
      this.get_agendamentos();
    }

    get_agendamentos(){
      this.desmarcar_service.getAgendamentos().subscribe(
        x => this.agendamentos = x,
        err => console.error('Error getting Agendamentos')
      )
    }

    desmarcar(a:Agendamento): void{
      this.desmarcar_service.removeAgendamento(a).subscribe(
        x => x
      )
    }
}