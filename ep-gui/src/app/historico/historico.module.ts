import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeralViewComponent } from './geral-view/geral-view.component';
import { PetViewComponent } from './pet-view/pet-view.component';
import { PetConsultComponent } from './pet-view/pet-consult/pet-consult.component';
import { PetConsultDetailComponent } from './pet-view/pet-consult-detail/pet-consult-detail.component';

@NgModule({
  declarations: [GeralViewComponent, PetViewComponent, PetConsultComponent, PetConsultDetailComponent],
  imports: [CommonModule],
})
export class HistoricoModule {}
