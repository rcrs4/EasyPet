import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesmarcarConsultas } from './agendamento/desmarcar/desmarcar.component';
import { GeralViewComponent } from './historico/geral-view/geral-view.component';

const routes: Routes = [
  { path: 'desmarcar', component: DesmarcarConsultas },
  { path: 'historico', component: GeralViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
