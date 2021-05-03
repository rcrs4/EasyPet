import { Consulta } from "./Consulta";

export class ConsultaList {
  constructor(private _consultas: Consulta[]) {}

  get consultas() {
    return this._consultas;
  }

  removeConsult(consulta: Consulta) {
    this._consultas = this._consultas.filter(
      (consultaListaAntiga) => consultaListaAntiga != consulta
    );
  }

  filterConsultsBy(petName: string): Consulta[] {
    return this._consultas.filter(consultaRegistrada => consultaRegistrada.pet.nome === petName);
  }
}
