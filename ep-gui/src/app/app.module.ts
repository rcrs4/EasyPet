import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DesmarcarConsultas } from './desmarcar.component';
import { AgendamentoService } from './agendamento.service';
import { AppointmentService } from './appointment-filter/queryTable.service';
import { AppointmentFilterComponent } from './appointment-filter/appointment-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DesmarcarConsultas,
    AppointmentFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    RouterModule.forRoot([
      {
        path: 'desmarcar',
        component: DesmarcarConsultas
      },
      {
        path: 'consultas',
        component: AppointmentFilterComponent
      }
    ])
  ],
  providers: [AgendamentoService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
