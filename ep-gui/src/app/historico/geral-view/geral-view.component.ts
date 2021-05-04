import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoricoService } from '../historico.service';

@Component({
  selector: 'app-geral-view',
  templateUrl: './geral-view.component.html',
  styleUrls: ['./geral-view.component.css'],
})
export class GeralViewComponent implements OnInit {
  pets: any;

  constructor(
    private historicoService: HistoricoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.historicoService.getPetsNames().subscribe((pets) => {
      this.pets = pets;
    });
  }

  onPetSelect(params:string = ''): void {
    const navigationDetails: string[] = ['/historico/pets'];

    if(params.length) {
      navigationDetails.push(params);
    }

    this.router.navigate(navigationDetails);
  }
}
