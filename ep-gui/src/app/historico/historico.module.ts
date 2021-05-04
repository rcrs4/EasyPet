import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeralViewComponent } from './geral-view/geral-view.component';
import { PetViewComponent } from './pet-view/pet-view.component';

@NgModule({
  declarations: [GeralViewComponent, PetViewComponent],
  imports: [CommonModule],
})
export class HistoricoModule {}
