import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesmarcarConsultas } from './agendamento/desmarcar/desmarcar.component';
import { GeralViewComponent } from './historico/geral-view/geral-view.component';
import { PetConsultDetailComponent } from './historico/pet-view/pet-consult-detail/pet-consult-detail.component';
import { PetViewComponent } from './historico/pet-view/pet-view.component';

const routes: Routes = [
  { path: 'desmarcar', component: DesmarcarConsultas },
  { path: 'historico', component: GeralViewComponent },
  { path: 'historico/pets/:petName', component: PetViewComponent },
  {
    path: 'historico/consulta/:consultaId',
    component: PetConsultDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
