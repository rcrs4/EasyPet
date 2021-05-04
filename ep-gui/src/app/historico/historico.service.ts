import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = 'http://localhost:3333';

@Injectable({ providedIn: 'root' })
export class HistoricoService {

  constructor(private http: HttpClient) {}

  getPetsNames() {
    return this.http.get(API + '/pets');
  }

  getPetConsults() {}
}
