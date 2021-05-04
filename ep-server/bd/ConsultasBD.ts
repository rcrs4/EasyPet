import { Consulta } from "../../common";

const consultaList: Consulta[] = [
  new Consulta("20/04/2021", "abc123", { nome: "zeze" }, "Está tudo bem com Zeze!"),
  new Consulta("20/04/2020", "abc123abc", { nome: "spike" }, "Spike teve uma leve diarreia por infecção alimentar"),
  new Consulta("21/04/2021", "abc123abc123", { nome: "zeze" }, "Zeze estava muito estressado, entao foi receitado passeio no quarteirão com ele todos os dias"),
];

export default () => consultaList;

