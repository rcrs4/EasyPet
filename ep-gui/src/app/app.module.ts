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
import { OwnerListComponent } from './owner-list/owner-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerRegistrationComponent,
    OwnerSearchComponent,
    OwnerListComponent
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
      },
      {
        path: 'listar donos',
        component: OwnerListComponent
      }
    ])
  ],
  providers: [AgendamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
