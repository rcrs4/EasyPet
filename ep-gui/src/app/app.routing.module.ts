import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesmarcarConsultas } from './agendamento/desmarcar/desmarcar.component';

const routes: Routes = [
  { path: 'desmarcar', component: DesmarcarConsultas,},
  { path: 'historico', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
