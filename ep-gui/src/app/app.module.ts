import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgendamentoService } from './agendamento.service';
import { OwnerRegistrationComponent } from './owner-registration/owner-registration.component';
import { OwnerSearchComponent } from './owner-search/owner-search.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerRegistrationComponent,
    OwnerSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'cadastrar dono',
        component: OwnerRegistrationComponent
      },
      {
        path: 'consultar dono',
        component: OwnerSearchComponent
      }
    ])
  ],
  providers: [AgendamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
