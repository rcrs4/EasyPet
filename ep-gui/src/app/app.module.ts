import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DesmarcarConsultas } from './agendamento/desmarcar/desmarcar.component';
import { AgendamentoService } from './agendamento/agendamento.service';
import { HistoricoModule } from './historico/historico.module';

import { AppointmentService } from './appointment-filter/queryTable.service';
import { AppointmentFilterComponent } from './appointment-filter/appointment-filter.component';
import { PetService } from './pet-list/pet.service';
import { PetListComponent } from './pet-list/pet-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DesmarcarConsultas,
    AppointmentFilterComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HistoricoModule,
    TableModule,
    ButtonModule,
    RouterModule.forRoot([
      {
        path: 'desmarcar',
        component: DesmarcarConsultas
      },
      {
        path: 'consultas',
        component: AppointmentFilterComponent
      },
      {
        path: 'pet_list',
        component: PetListComponent
      }
    ])
  ],
  providers: [AgendamentoService, PetService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
