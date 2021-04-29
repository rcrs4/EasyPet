import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DesmarcarConsultas } from './desmarcar.component';
import { AgendamentoService } from './agendamento.service';
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
  providers: [AgendamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
