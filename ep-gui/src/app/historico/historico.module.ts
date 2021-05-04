import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeralViewComponent } from './geral-view/geral-view.component';
import { PetViewComponent } from './pet-view/pet-view.component';
import { PetConsultComponent } from './pet-view/pet-consult/pet-consult.component';

@NgModule({
  declarations: [GeralViewComponent, PetViewComponent, PetConsultComponent],
  imports: [CommonModule],
})
export class HistoricoModule {}
