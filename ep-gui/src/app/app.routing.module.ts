import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesmarcarConsultas } from './agendamento/desmarcar/desmarcar.component';
import { AppointmentFilterComponent } from './appointment-filter/appointment-filter.component';
import { GeralViewComponent } from './historico/geral-view/geral-view.component';
import { PetConsultDetailComponent } from './historico/pet-view/pet-consult-detail/pet-consult-detail.component';
import { PetViewComponent } from './historico/pet-view/pet-view.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  { path: 'desmarcar', component: DesmarcarConsultas },
  { path: 'historico', component: GeralViewComponent },
  { path: 'historico/pets/:petName', component: PetViewComponent },
  {
    path: 'historico/consulta/:consultaId',
    component: PetConsultDetailComponent,
  },
  {
    path: 'consultas',
    component: AppointmentFilterComponent,
  },
  {
    path: 'pet_list',
    component: PetListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
