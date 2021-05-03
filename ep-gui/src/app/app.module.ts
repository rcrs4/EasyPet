import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DesmarcarConsultas } from './agendamento/desmarcar/desmarcar.component';
import { AgendamentoService } from './agendamento/agendamento.service';

@NgModule({
  declarations: [
    AppComponent,
    DesmarcarConsultas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AgendamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
