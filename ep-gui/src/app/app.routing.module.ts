import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesmarcarConsultas } from './agendamento/desmarcar/desmarcar.component';
import { GeralViewComponent } from './historico/geral-view/geral-view.component';
import { PetViewComponent } from './historico/pet-view/pet-view.component';

const routes: Routes = [
  { path: 'desmarcar', component: DesmarcarConsultas },
  { path: 'historico', component: GeralViewComponent },
  { path: 'historico/pets/:pet', component: PetViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
