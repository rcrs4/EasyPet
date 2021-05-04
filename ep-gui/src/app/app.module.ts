import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DesmarcarConsultas } from './desmarcar.component';
import { AgendamentoService } from './agendamento.service';
import { PetService } from './pet-list/pet.service';
import { AppointmentFilterComponent } from './appointment-filter/appointment-filter.component';
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
  providers: [AgendamentoService, PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
