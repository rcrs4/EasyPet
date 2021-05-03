import { Consulta } from "./Consulta";

export class ConsultaList {
  constructor(private _consultas: Consulta[]) {}

  get consultas() {
    return this._consultas;
  }

  set consultas(consultas: Consulta[]) {
    this._consultas = consultas;
  }

  removeConsult(consulta: Consulta) {
    this._consultas = this._consultas.filter(
      (consultaListaAntiga) => consultaListaAntiga != consulta
    );
  }

  filterOneConsultBy(id: string): Consulta {
    return this._consultas.filter((consulta) => consulta.id === id)[0];
  }

  filterConsultsBy(petName: string): Consulta[] {
    return this._consultas.filter(
      (consultaRegistrada) => consultaRegistrada.pet.nome === petName
    );
  }

  get pets(): string[]  {
    const petsList: string[] = [];
    this._consultas.forEach(consulta => petsList.push(consulta.pet.nome));
    return petsList;
  }

}
