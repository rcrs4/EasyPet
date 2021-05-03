import { Agendamento } from "./agendamento";

export class Consulta extends Agendamento {
  constructor(
    data = "",
    id = "",
    pet = { nome: "" },
    private _descricao: string
  ) {
    super(data, id, pet);
  }

  get descricao() {
    return this._descricao;
  }

  set descricao(desc: string) {
    this._descricao = desc;
  }
}
